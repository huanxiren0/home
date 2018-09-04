var _util = require('util');

var _user = {
	logout:function(success,error){
		_util.request({
			url:'http://127.0.0.1:3000/user/logout',
			method:'get',
			dataType:'json',
			success:success,
			error:error
		});
	}
};
module.exports = _user;