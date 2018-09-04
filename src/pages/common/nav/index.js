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
				console.log(result);
			},function(err){
				alert(err);
			});
		});
	},
	loadUserInfo:function(){

	}
};
module.exports = nav.init();