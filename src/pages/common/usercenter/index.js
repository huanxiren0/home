require('./index.css');
var _util = require('util');
var _user = require('pages/service/user');
var _side = require('pages/common/side/');

var usercenter = {
	init:function(){
		this.bindEvent();
		return this;
	},
	bindEvent:function(){
		_side.loadHtml('user-center');
		this.loadUserInfo();
	},
	loadUserInfo:function(){
		_user.getInfo(function(userInfo){
			if (userInfo.code == 0) {
				var template = require('./index.tpl');
				 var html = _util.renderHTML(template,userInfo.userInfo);
				$(".content-content").html(html);				
			}else{
				_util.doLogin();
			}

		});
	}

};

module.exports = usercenter.init();