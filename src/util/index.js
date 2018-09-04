var _util = {
	request:function(params){
		var _this = this;
		$.ajax({
			url: params.url || '',
			method: params.method || 'get',
			dataType: params.dataType || 'json',
			data: params.data || '',
			success:function(result){
				if (result.code == 0) {
					params.success(result.data);
				}else if (result.code == 10) {
					_this.doLogin();
				}else{
					_this.showErrorMessage();
				}
			},
			error:function(err){
				params.error(err);
			}
		});
		
		
	},
	doLogin:function(){
		window.location.reload();
	},
	showErrorMessage:function(){
		alert('danger!!!');
	}
};
module.exports = _util;