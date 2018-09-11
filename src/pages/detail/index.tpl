<div class="product-view clearfix">
	<div class="product-image">
		<img src="{{mainImage}}">
	</div>
	<ul >
		{{#images}}
		<li class="product-imageList">
			<img src="{{.}}">			
		</li>
		{{/images}}												
	</ul>
</div>
<div class="product-info clearfix">
	<h2>{{productName}}</h2>
	<div class="product-price">
		<span class="product-proto">价格</span>
		<span class="priceRange">¥ {{productPrice}}</span>
	</div>
	<div class="price-num">
		<span class="product-proto">数量</span>
		<span class="decrease">-</span>
		<input type="text" name="" value="1" class="totalNum">
		<span class="increase">+</span>
		<span class="product-proto stock">(库存<item>{{productNum}}件</item>)</span>
	</div>
	<button class="btn">加入购物车</button>
</div>
<div class="product-detail">
	<ul class="select-product clearfix">
		<li class="active select-item">
			商品详情
		</li>
		<li class="select-item ">
			用户评价
		</li>
	</ul>
	<div class="detail">{{{detail}}}</div>
	<div class="comments hide"></div>
</div>