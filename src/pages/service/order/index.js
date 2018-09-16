var _util = require('util');

var _order = {
	getOrderProductList:function(success,error){
		_util.request({
			url:'/order',
			dataType:'json',
			success:success,
			error:error
		});
	},		
};
module.exports = _order;