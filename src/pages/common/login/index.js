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
		$('#loginSubmit').on('click',function() {
			_this.submit();
		});
	},
	submit:function(){
		var username = $.trim($('.login-item').find('[name="username"]').val());
		var password = $.trim($('.login-item').find('[name="password"]').val());
		var formData = {
			username:username,
			password:password
		};
		var validate = this.validate(formData);
		if (validate.status) {
			$('.error-text')
			.hide()
			.find('.errMessage')
			.text('');
			_user.login(formData,function(result){
				window.location.href = _util.getParamUrl('redirect') || '/index.html';
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
		result.status= true;
		return result;
	}


};

module.exports = login.init();