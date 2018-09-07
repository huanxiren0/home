require('./index.css');
var _util = require('util');
var _user = require('pages/service/user');

var login = {
	init:function(){
		this.bindEvent();
		
		return this;
	},
	bindEvent:function(){
		var _this = this;
		$('#login-username').on('blur',function() {
			alert('aaaa');
		});
		$('#Register').on('click',function() {
			_this.submit();
		});
	},
	submit:function(){
		var username = $.trim($('.register-item').find('[name="username"]').val());
		var password = $.trim($('.register-item').find('[name="password"]').val());
		var repassword = $.trim($('.register-item').find('[name="repassword"]').val());
		var email = $.trim($('.register-item').find('[name="email"]').val());
		var phone = $.trim($('.register-item').find('[name="phone"]').val());				
		var formData = {
			username:username,
			password:password,
			repassword:repassword,
			email:email,
			phone:phone

		};
		var validate = this.validate(formData);
		if (validate.status) {
			$('.error-text')
			.hide()
			.find('.errMessage')
			.text('');
			_user.register(formData,function(result){
				window.location.href = '/login.html';
			},function(err){
				alert('aa');
			});

		}else{
			$('.error-text')
			.show()
			.find('.errMessage')
			.text(validate.message);
		}
	},

	validate:function(formData){
		var result ={
			status:false,
			message:''
		};
		if (!_util.valiData(formData.username,'require')) {
			result.message = '请输入用户名';
			return result;
		}
		if (!_util.valiData(formData.username,'username')) {
			result.message = '用户名为4到16位（字母，数字，下划线，减号）';
			return result;
		}
		if (!_util.valiData(formData.password,'require')) {
			result.message = '请输入密码';
			return result;
		}
		if (!_util.valiData(formData.password,'password')) {
			result.message = '设置密码必须符合由数字,大写字母,小写字母,特殊符,至少其中三种组成密码。';
			return result;
		}
		if (formData.password !== formData.repassword) {
			result.message = '两次输入的密码不一致';
			return result;
		}
		if (!_util.valiData(formData.phone,'require')) {
			result.message = '请输入手机号';
			return result;
		}
		if (!_util.valiData(formData.phone,'phone')) {
			result.message = '请输入11位的手机号';
			return result;
		}
		if (!_util.valiData(formData.email,'email')) {
			result.message = '请输入正确的邮箱格式';
			return result;
		}
		result.status= true;
		return result;
	}


};

module.exports = login.init();