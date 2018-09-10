var _util = require('util');

var _product = {
	productList:function(data,success,error){
		_util.request({
			url:'/user/productList',
			method:'get',
			dataType:'json',
			data:data,
			success:success,
			error:error
		});
	},
};
module.exports = _product;