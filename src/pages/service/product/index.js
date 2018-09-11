var _util = require('util');

var _product = {
	productList:function(data,success,error){
		_util.request({
			url:'/product/productList',
			method:'get',
			dataType:'json',
			data:data,
			success:success,
			error:error
		});
	},
	productDetail:function(data,success,error){
		_util.request({
			url:'/product/productDetail',
			method:'get',
			dataType:'json',
			data:{id:data},
			success:success,
			error:error
		});
	},	
};
module.exports = _product;