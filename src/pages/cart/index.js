require('common/nav/');

require('common/search/');
require('./index.css');


var _util = require('util/');
var _cart = require('pages/service/cart');
var cartTpl = require('./index.tpl');

var index = {
  init:function(){
  	this.loadCart();
    return this;
  },
  loadCart:function(){
  	_cart.getCart(function(result){
  		if (result.code ==0 ) {
  			result.data.notEmpty = true;
  			console.log(result.data);
  			let cartList = result.data.cartList;
  			if (cartList) {
  				cartList.forEach((item) => {
  					if (item.product.imageList) {
  						item.product.image = item.product.imageList.split(',')[0];
  					}else{
  						item.product.image = require('images/default.jpg'); 						
  					}
  				});
  			}
  			var html = _util.renderHTML(cartTpl,result.data);
  			$('.cart-box').html(html);
  		}
  	},function(err){
  		console.log("getCart fail:::",err);
  	});
  }
};


$(function(){
    index.init();
});
