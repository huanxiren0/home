var _util = {
	request:function(params){
		var _this = this;
		$.ajax({
			url: params.url || '',
			method: params.method || 'get',
			dataType: params.dataType || 'json',
			data: params.data || '',
			success:function(result){
				params.success(result);
			},
			error:function(err){
				params.error(err);
			}
		});
		
		
	},
	doLogin:function(){
		window.location.href = '/login.html?redirect='+encodeURIComponent(window.location.href);
	},
	goHome:function(){
		window.location.href = '/index.html';
	},
	showErrorMessage:function(err){
		alert(err);
	},
	valiData:function(value,type){
		if (type == 'require') {
			return !!value;
		}
		if (type == 'username') {
			return /^[a-zA-Z0-9_-]{4,16}$/.test(value);
		}
		if (type == 'password') {
			// return /(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{4,10}/.test(value);
			return /^[a-zA-Z0-9_-]{4,16}$/.test(value);
		}
		if (type == 'phone') {
			return /^1[34578]\d{9}$/.test(value);
		}
		if (type == 'email') {
			return /^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/.test(value);
		}		
	},
	getParamUrl:function(type){
		var url = window.location.search.substr(1);
		var reg = new RegExp('(^|&)'+type+'=([^&]*)(&|$)');
		var result = url.match(reg);
		return result ? decodeURIComponent(result[2]) : null;
	},
	renderHTML:function(html,list){
	   var hogan=require('hogan.js');
	   var compiledTemplate=hogan.compile(html);
	   var result=compiledTemplate.render(list);
	   return result;
	}
};
module.exports = _util;