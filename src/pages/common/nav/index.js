require('./index.css');
var _user = require('pages/service/user');

var nav = {
	init:function(){
		this.bindEvent();
		this.loadUserInfo();
		return this;
	},
	bindEvent:function(){
		$('#logout').on('click',function(event) {
			_user.logout(function(result){
				window.location.href = '/login.html';
			},function(err){
				console.log(err);
			});
		});
	},
	loadUserInfo:function(){
		_user.getInfo(function(userInfo){
			$('.not-login').hide();
			$('.userInfo-name').text(userInfo.username);
		},function(err){
			console.log(err);
			alert('aasa',err);
		});
	}
};
module.exports = nav.init();
