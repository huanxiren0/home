var _util = require('util');

var _cart = {
	addCart:function(data,success,error){
		_util.request({
			url:'/cart',
			method:'post',
			dataType:'json',
			data:data,
			success:success,
			error:error
		});
	},
	getCart:function(success,error){
		_util.request({
			url:'/cart',
			dataType:'json',
			success:success,
			error:error
		});
	},	
};
module.exports = _cart;