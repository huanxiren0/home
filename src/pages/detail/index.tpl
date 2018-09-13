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
		<span class="decrease product-math">-</span>
		<input type="text" name="totalNum" value="1" class="totalNum">
		<span class="increase product-math">+</span>
		<span class="product-proto stock">(库存<item>{{productNum}}</item>件)</span>
	</div>
	<a class="btn addCart" href="/result.html?type=cart">加入购物车</a>
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