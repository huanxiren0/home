require('./index.css');
var _util = require('util');
var _user = require('pages/service/user');
var template = require('./index.tpl');

var _side = {
	list : [
			{
				name:'user-center',
				desc:'用户中心',
				href:'./user-center.html'
			},
			{
				name:'user-order',
				desc:'我的订单',
				href:'./order-list.html',
			},
			{
				name:'user-update-password',
				desc:'修改密码',
				href:'./user-updatepassword.html'
			}
		],	
	loadHtml:function(name){
		var list = this.list;
		for (var i = 0; i < list.length; i++) {
			if (list[i].name == name) {
				list[i].isActive = true;
			}else{
				list[i].isActive = false;
			}
		}
		var template = require('./index.tpl');
		var html = _util.renderHTML(template,{list:list});
		$('.content-side').find('ul').html(html);
	}


};

module.exports = _side;