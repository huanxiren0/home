
require('./index.css');


var _util = require('util');
var _user = require('pages/service/user');
var _cities = require('util/cities');
var _shipping = require('pages/service/shipping');

var modalTpl = require('./modal.tpl');


var formErr = {
	show:function(msg){
		$('.error-item')
		.show()
		.find('.error-msg')
		.text(msg);
	},
	hide:function(msg){
		$('.error-item')
		.hide()
		.find('.error-msg')
		.text('');
	}
};


var _modal = {
	show: function(options){
		this.$box = $('.modal-box');
		this.options = options;
		this.loadModal();
		this.bindEvent();
	},
	bindEvent:function(){
		var _this = this;
		// 关弹窗
		this.$box.find('.close').on('click',function(e){
			e.stopPropagation();
			_this.hide();
		});
		this.$box.find('.modal-container').on('click',function(e){
			e.stopPropagation();
		});

		//省份和城市的联动
		this.$box.find('.province-select').on('change',function(){
			_this.loadCities($(this).val());
		});

		// 提交事件
		this.$box.find('#submit-btn').on('click',function(){
			_this.submit();
		});
		this.$box.find('input').on('keyup',function(e){
			if (e.keyCode == 13) {
				_this.submit();
			}
		});
	},
	loadModal:function(){
		var html = _util.renderHTML(modalTpl,{
			data:this.options.data || {},
			isEdit: !!this.options.data
		});
		this.$box.html(html);
		this.loadProvinces();
	},
	loadProvinces:function(){
		var provinces = _cities.getProvinces();
		var provincesSelectOptions = this.getSelectOptions(provinces);
		var $provinceSelect = this.$box.find('.province-select');
		$provinceSelect.html(provincesSelectOptions);
		if (this.options.data && this.options.data.province) {
			$provinceSelect.val(this.options.data.province);
			this.loadCities(this.options.data.province);
		}
	},
	loadCities:function(provinceName){
		var cities = _cities.getCities(provinceName);
		var citiesSelectOptions = this.getSelectOptions(cities);
		var $citySelect = this.$box.find('.city-select');

		$citySelect.html(citiesSelectOptions);

		if (this.options.data && this.options.data.city) {
			$citySelect.val(this.options.data.city);
		}
	},
	getSelectOptions:function(arr){
		let html = '<option value="">请选择</option>';
		for(var i = 0;i<arr.length;i++){
			html += '<option value="'+arr[i]+'">'+arr[i]+'</option>';
		}
		return html;
	},
	hide:function(){
		this.$box.empty();
	},
	submit:function(){
		var _this = this;
		// alert('sfa');
		// 1: 获取数据
		var formData = {
			name:$.trim($('[name="name"]').val()),
			province:$.trim($('[name="province"]').val()),
			city:$.trim($('[name="city"]').val()),
			address:$.trim($('[name="address"]').val()),
			phone:$.trim($('[name="phone"]').val()),
			zip:$.trim($('[name="zip"]').val())
		};
		

		var validateResult = this.validate(formData);
		// 2: 验证成功
		if (validateResult.status) {
			formErr.hide();
			if (this.options.data) {
				formData.shippingId = this.options.data._id;
				_shipping.editShipping(formData,function(shippings){
					alert("编辑地址成功");
					_this.hide();
					_this.options.success(shippings);
				},function(msg){
					formErr.show(msg);
				});
			}else{
				_shipping.addShipping(formData,function(shippings){
					alert("添加地址成功");
					_this.hide();
					_this.options.success(shippings);
				},function(msg){
					formErr.show(msg);
				});
			}
			
		} 
		// 3: 验证失败
		else {
			formErr.show(validateResult.msg);
		}
	},
	validate:function(formData){
		var result = {
			status:false,
			msg:''
		};
		// 验证用户名不能为空
		if (!_util.valiData(formData.name,'require')) {
			result.msg = '收件人姓名不能为空';
			return result;
		}
		// 验证邮箱不能为空
		if (!_util.valiData(formData.province,'require')) {
			result.msg = '省份不能为空';
			return result;
		}
		// 验证邮箱不能为空
		if (!_util.valiData(formData.city,'require')) {
			result.msg = '城市不能为空';
			return result;
		}
		// 验证密码不能为空
		if (!_util.valiData(formData.address,'require')) {
			result.msg = '地址不能为空';
			return result;
		}
		// 验证手机号码不能为空
		if (!_util.valiData(formData.phone,'require')) {
			result.msg = '手机号码不能为空';
			return result;
		}
		// 验证手机号码格式
		if (!_util.valiData(formData.phone,'phone')) {
			result.msg = '手机号码格式错误';
			return result;
		}
		// 验证邮箱不能为空
		if (!_util.valiData(formData.zip,'require')) {
			result.msg = '邮编不能为空';
			return result;
		}
		// 验证邮箱格式
		if (!_util.valiData(formData.zip,'zip')) {
			result.msg = '邮编格式错误';
			return result;
		}

		result.status = true;
		return result;
	}
};
module.exports = _modal;