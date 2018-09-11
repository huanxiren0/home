require('common/nav/');

require('common/search/');
require('./index.css');

var _util = require('util/');
var _product = require('pages/service/product/');
var productTpl = require('./index.tpl');

var _detail = {
  init:function(){
  	this.onload();
    this.bindEvent();

    return this;
  },
  bindEvent:function(){
    $($('.product').find('.product-imageList')[0]).addClass('active');
    $('.product').on('mouseenter','.product-imageList',function(event) {
       var $this = $(this);
       $this.addClass('active')
       .siblings('.product-imageList')
       .removeClass('active');
       var src = $this.find('img')[0].src;
       $($('.product-image').find('img')[0]).attr('src', src);
    });
  },
  onload:function(){
  	var productId = _util.getParamUrl('productId');
  	_product.productDetail(productId,function(result){
  		if (result.code == 0) {
  			var data = result.data;
  			if (data.imageList) {
  				data.mainImage = data.imageList.split(',')[0];
  				data.images = data.imageList.split(',');
  			}else{
  				data.mainImage = require('images/default.jpg'); 
              	data.images = [require('images/default.jpg')];  				
  			}
  			var html = _util.renderHTML(productTpl,data);
  			$('.product .container').html(html);
  		}
  	},function(err){
  		console.log(err);
  	});
  }
};


$(function(){
    _detail.init();
});
