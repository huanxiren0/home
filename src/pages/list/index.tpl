<ul>
	{{#product}}
		<li class="product-item">
			<a href="/detail.html?productId={{_id}}">
				<img src="{{image}}" class="product-image">
				<p class="productPrice">￥ {{productPrice}}</p>
				<p class="productName">{{productName}}</p>
			</a>	
		</li>
	{{/product}}
</ul>