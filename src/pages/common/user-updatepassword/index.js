require('./index.css');
var _util = require('util');
var _user = require('pages/service/user');

var updatepassword = {
	init:function(){
		this.bindEvent();
		
		return this;
	},
	bindEvent:function(){
		var _this = this;
		$('#updatePassword').on('click',function() {
			_this.submit();
		});
	},
	submit:function(){
		var password = $.trim($('.updatePassword-item').find('[name="password"]').val());
		var repassword = $.trim($('.updatePassword-item').find('[name="repassword"]').val());				
		var formData = {
			password:password,
			repassword:repassword
		};
		var validate = this.validate(formData);
		if (validate.status) {
			$('.error-text')
			.hide()
			.find('.errMessage')
			.text('');
			_user.updatepassword(formData,function(result){
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
		if (!_util.valiData(formData.password,'require')) {
			result.message = '请输入密码';
			return result;
		}
		if (!_util.valiData(formData.repassword,'require')) {
			result.message = '请再次输入密码';
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
		result.status= true;
		return result;
	}


};

module.exports = updatepassword.init();