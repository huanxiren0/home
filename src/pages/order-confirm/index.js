require('pages/common/search');
require('pages/common/nav');
// require('util/pagination');
require('./index.css');


var _util = require('util');
var _cities = require('util/cities');
// var _shipping = require('service/shipping');
// var _order = require('service/order');

var shippingTpl = require('./shipping.tpl');
var productTpl = require('./product.tpl');
var page = {
	init: function(){
		this.onload();
		this.bindEvent();
		this.loadCities();
	},
	onload:function(){
		this.loadShippingList();
		this.loadProductList();
	},
	bindEvent:function(){
		var _this = this;
	},
	loadShippingList:function(){
		var _this = this;
		_this.renderShipping();
	},
	renderShipping:function(shippings){
		var _this = this;
		var html = _util.renderHTML(shippingTpl);
		$('.shipping-box').html(html);
	},
	loadProductList:function(){
/*		_order.getOrderProductList(function(result){
			// console.log(result);
			// 购物车数据适配
			result.cartList.forEach(item=>{
				// console.log(item.productInfo.stock)
				if (item.productInfo.images) {
					item.productInfo.image = item.productInfo.images.split(',')[0];
				} else {
					item.productInfo.image = require('images/product-default.jpg');
				}
			});
			result.notEmpty = !!result.cartList.length;
		
			var html = _util.render(productTpl,result);
			$('.product-box').html(html);
		},function(){
			// _util.showErrorMsg(msg)
			$('.product-box').html('<p class="empty-message">获取商品失败，请刷新重试</p>');
		});*/
		
	},
	loadCities:function(){
		console.log(_cities.getProvinces());
	}

};
$(function(){
	page.init();
});