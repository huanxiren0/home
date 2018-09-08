require('./index.css');
var _util = require('util');

var result = {
	init:function(){
		this.loadHtml();
		
		return this;
	},
	loadHtml:function(){
		var _this = this;
		var key = _util.getParamUrl('type') || 'default';
		$('.'+key).show();

	}




};

module.exports = result.init();