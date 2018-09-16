<div class="panel">
	<h2 class="panel-header">送货地址</h2>
	<div class="panel-body clearfix">
		{{#list}}
		<div class="shopping-item">
			<h3 class="shopping-title">{{name}}</h3>
			<p class="shopping-detail">{{province}} {{city}} {{address}}</p>
			<div class="shopping-footer" data-shipping-id='{{_id}}'>
				<a href="javascript:;" class="link shopping-edit">编辑</a>
				<a href="javascript:;" class="link shopping-delete">删除</a>
			</div>
		</div>
		{{/list}}		
		<div class="shopping-add">
			<p>+</p>
			添加新地址
		</div>
	</div>
</div>