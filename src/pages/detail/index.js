require('common/nav/');

require('common/search/');
require('./index.css');

var _util = require('util/');
var _product = require('pages/service/product/');
var _cart = require('pages/service/cart/');
var productTpl = require('./index.tpl');

var _detail = {
  init:function(){
  	this.onload();
    this.bindEvent();
    return this;
  },
  param:{
    productId:_util.getParamUrl('productId') || ''
  },
  bindEvent:function(){
    var _this = this;
    $('.product').on('mouseenter','.product-imageList',function(event) {
       var $this = $(this);
       $this.addClass('active')
       .siblings('.product-imageList')
       .removeClass('active');
       var src = $this.find('img')[0].src;
       $($('.product-image').find('img')[0]).attr('src', src);
    });
    $('.product').on('click','.product-math',function(event) {
       var $this = $(this);
       var current = $('input[name="totalNum"]').val();
       var min = 1;
       var max = $('.product-proto').find('item').text();
       if ($this.hasClass('decrease')) {
        $('input[name="totalNum"]').attr('value', current-1);
        if (current <= 1) {
          $('input[name="totalNum"]').attr('value', 1);
        }
       }
       if ($this.hasClass('increase')) {
        $('input[name="totalNum"]').attr('value', current*1+1);
        if (current >= max) {
          $('input[name="totalNum"]').attr('value', max);
        }
       }
    });
    $('.product').on('click','.addCart',function(event) {
       var $this = $(this);
       var count = $('input[name="totalNum"]').val();
       _cart.addCart({productId:_this.param.productId,count:count},function(result){
          return;
       },function(err){
          console.log(err);
       });
    });    
  },
  onload:function(){
    var _this = this;
  	var productId = _util.getParamUrl('productId');
  	_product.productDetail(productId,function(result){
  		if (result.code == 0) {
  			var data = result.data;
        _this.renderDetail(data);
  		}
  	},function(err){
  		console.log(err);
  	});
  },
  renderDetail:function(data){
    if (data.imageList) {
      data.mainImage = data.imageList.split(',')[0];
      data.images = data.imageList.split(',');
    }else{
      data.mainImage = require('images/default.jpg'); 
      data.images = [require('images/default.jpg')];          
    }
    var html = _util.renderHTML(productTpl,data);
    $('.product .container').html(html);
    $($('.product').find('.product-imageList')[0]).addClass('active');    
  }
};


$(function(){
    _detail.init();
});
