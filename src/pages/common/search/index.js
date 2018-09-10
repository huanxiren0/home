require('./index.css');
var _util = require('util');
var _user = require('pages/service/user');

var search = {
	init:function(){
		this.bindEvent();
		this.load();
		return this;
	},
	bindEvent:function(){
		var _this = this;
		$('#btn-search').on('click',function() {
			_this.submit();
		});
		$('#search-content').on('keyup',function(e) {
			if (e.keyCode == 13) {
				_this.submit();
			}

		});		
	},
	submit:function(){
		var searchData = $.trim($('.search-item').find('[name="search"]').val());
			window.location.href = './list.html?keyword='+searchData;

	},
	load:function(){
		var search = _util.getParamUrl('keyword');
		if (search) {
			$('.search-item').find('[name="search"]').val(search);
		}
	}

	

};

module.exports = search.init();