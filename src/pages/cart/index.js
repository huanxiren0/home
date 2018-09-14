require('common/nav/');

require('common/search/');
require('./index.css');


var _util = require('util/');
var _cart = require('pages/service/cart');
var cartTpl = require('./index.tpl');

var index = {
  init:function(){
  	this.loadCart();
    this.bindEvent();
    return this;
  },
  loadCart:function(){
    var _this = this;
  	_cart.getCart(function(result){
  		if (result.code ==0 ) {
        _this.renderCart(result.data);
  		}
  	},function(err){
  		console.log("getCart fail:::",err);
  	});
  },
  bindEvent:function(){
    var _this = this;
    $('.cart-box').on('click', '.select-one', function(event) {
      var $this = $(this);
      var productId = $this.parents('.cart-item').data('product-id');
      if ($this.is(':checked')) {
        _cart.selectOne({productId:productId},function(result){
            _this.renderCart(result.data);
        },function(err){
            console.log("getCart fail:::",err);
        });
      }
      else{
        _cart.unselectOne({productId:productId},function(result){
            _this.renderCart(result.data);
        },function(err){
            console.log("getCart fail:::",err);
        });        
      }
    });
    $('.cart-box').on('click', '.select-all', function(event) {
      var $this = $(this);
      if ($this.is(':checked')) {
        _cart.selectAll(function(result){
            _this.renderCart(result.data);
        },function(err){
            console.log("getCart fail:::",err);
        });
      }
      else{
        _cart.unselectAll(function(result){
            _this.renderCart(result.data);
        },function(err){
            console.log("getCart fail:::",err);
        });        
      }
    });

    $('.cart-box').on('click', '.delete-one', function(event) {
      var $this = $(this);
      var productId = $this.parents('.cart-item').data('product-id');      
      if (_util.confirm('确定要删除此条商品吗？')) {
        console.log('aaa',this);
        _cart.deleteOne({productId:productId},function(result){
          console.log(result);
            _this.renderCart(result.data);
        },function(err){
            console.log("getCart fail:::",err);
        });
      }
    }); 

    $('.cart-box').on('click', '.delete-selected', function(event) {
      var $this = $(this);
      if (_util.confirm('确定要删除选中商品吗？')) {
        _cart.deleteSelect(function(result){
            _this.renderCart(result.data);
        },function(err){
            console.log("getCart fail:::",err);
        });
      }
    }); 

    $('.cart-box').on('click', '.count-btn', function(event) {
      var $this = $(this);
      var productId = $this.parents('.cart-item').data('product-id');      
      var $input = $this.siblings('.count-input');
      var current = $input.val()*1;
      var count = 0;
      var max = $input.data('stock');
      if ($this.hasClass('minus')) {
        count = current - 1;
       $input.attr('value', current-1);
        if (current <= 1) {
          $input.attr('value', 1);
          return;          
        }        
      }
      if ($this.hasClass('plus')) {
        count = current + 1;
        $input.attr('value', current*1+1);
        if (current >= max) {
          $input.attr('value', max);
          return;
        }        
      }
      _cart.updateCount({productId:productId,boughtCount:count},function(result){
          _this.renderCart(result.data);
      },function(err){
        console.log(err);
      });

    });     



  },
  renderCart:function(data){
    data.notEmpty = true;
    let cartList = data.cartList;
    if (cartList) {
      cartList.forEach((item) => {
        if (item.product.imageList) {
          item.product.image = item.product.imageList.split(',')[0];
        }else{
          item.product.image = require('images/default.jpg');             
        }
      });
    }
    var html = _util.renderHTML(cartTpl,data);
    $('.cart-box').html(html);
  }
};


$(function(){
    index.init();
});
