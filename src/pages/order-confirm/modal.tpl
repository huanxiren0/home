<div class="modal close">
	<div class="modal-container">
		<div class="modal-header">
			{{#isEdit}}
			<h2 class="modal-title">编辑地址</h2>
			{{/isEdit}}
			{{^isEdit}}
			<h2 class="modal-title">新增地址</h2>
			{{/isEdit}}
			<i class="fa fa-close close-icon close"></i>
		</div>
		<div class="modal-body">
			<div class="form">
				<div class="form-all">
					<div class="error-item hide">
						<i class="fa fa-minus-circle form-icon"></i>
						<p class="error-msg">error</p>
					</div>
					<div class="form-item">
						<label for="">
							<i class="fa fa-user form-icon"></i>
						</label>
						<input type="text" name="name" placeholder="请输入收货人姓名" value="{{data.name}}">
					</div>
					<div class="form-item city-item" >
						<label for="">
							<i class="fa fa-building form-icon"></i>
						</label>
						<select name="province" class="province-select" value="{{data.province}}"></select>
						<select name="city" class="city-select"  value="{{data.city}}"></select>
					</div>
					<div class="form-item">
						<label for="">
							<i class="fa fa-building form-icon"></i>
						</label>
						<input type="text" name="address" placeholder="请输入详细地址到门牌号" value="{{data.address}}">
					</div>
					<div class="form-item">
						<label for="">
							<i class="fa fa-phone form-icon"></i>
						</label>
						<input type="phone" name="phone" placeholder="请输入手机号" value="{{data.phone}}">
					</div>
					<div class="form-item">
						<label for="">
							<i class="fa fa-envelope form-icon"></i>
						</label>
						<input type="text" name="zip" placeholder="请输入邮编，如461500" value="{{data.zip}}">
					</div>
					<div class="btn-item">
						<a class="btn form-btn" href="javascript:;" id="submit-btn">提交</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>