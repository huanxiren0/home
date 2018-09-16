require('pages/common/search');
require('pages/common/nav');
require('./index.css');



var _util = require('util');
var _cities = require('util/cities');
var _shipping = require('pages/service/shipping');
var _order = require('pages/service/order/');

var shippingTpl = require('./shipping.tpl');
var productTpl = require('./product.tpl');
var modal = require('./modal.tpl');

var _modal = require('./modal.js');

var page = {
	init: function(){
		this.onload();
		this.bindEvent();
	},
	onload:function(){
		this.loadShippingList();
		this.loadProductList();
	},
	bindEvent:function(){
		var _this = this;
		//删除地址
		$('.shipping-box').on('click', '.shopping-delete', function(event) {
			var $this = $(this);
			var id = $this.parents('.shopping-footer').data('shipping-id');
			_shipping.deleteShipping({id:id},function(shippings){
				_this.renderShipping(shippings);
			},function(err){
				console.log(err);
			});
		});
		//编辑地址
		$('.shipping-box').on('click', '.shopping-edit', function(event) {
			var $this = $(this);
			var id = $this.parents('.shopping-footer').data('shipping-id');
			_shipping.editOneShipping({id:id},function(shippings){
				_modal.show({
					data:shippings.data,
					success:function(shippings){
						_this.renderShipping(shippings);
					}
				});		

			},function(err){
				console.log(err);
			});			
	
		});
		//选择地址
		$('.shipping-box').on('click', '.shopping-item', function(event) {
			var $this = $(this);
			$this.addClass('active')
			.siblings('.shopping-item')
			.removeClass('active');
		});							
	},
	showModal:function(){
		var _this = this;
		$('.shipping-box').on('click', '.shopping-add', function(event) {
			_modal.show({
				success:function(shippings){
					_this.renderShipping(shippings);
				}
			});			
		});		
	},
	loadShippingList:function(){
		var _this = this;
		_shipping.getShipping(function(shippings){
			_this.renderShipping(shippings);
			_this.showModal();

		},function(err){
			console.log(err);
		});
	},
	renderShipping:function(shippings){
		var _this = this;
		var html = _util.renderHTML(shippingTpl,{list:shippings.data});
		$('.shipping-box').html(html);
		$($('.shopping-item')[0]).addClass('active');
	},
	loadProductList:function(){
		_order.getOrderProductList(function(result){
			// console.log(result);
			// 购物车数据适配
			let data = result.data;
			data.cartList.forEach(item=>{
				// console.log(item.productInfo.stock)
				if (item.product.imageList) {
					item.product.image = item.product.imageList.split(',')[0];
				} else {
					item.product.image = require('images/default.jpg');
				}
			});
			data.notEmpty = !!data.cartList.length;
		
			var html = _util.renderHTML(productTpl,data);
			$('.product-box').html(html);
		},function(){
			$('.product-box').html('<p class="empty-message">获取商品失败，请刷新重试</p>');
		});
		
	},
};
$(function(){
	page.init();
});