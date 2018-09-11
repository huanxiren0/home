var _util = require('util');

var _cart = {
	productList:function(data,success,error){
		_util.request({
			url:'/cart',
			method:'post',
			dataType:'json',
			data:data,
			success:success,
			error:error
		});
	},
};
module.exports = _cart;