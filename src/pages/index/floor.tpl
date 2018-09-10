{{#floor}}
<div class="floor-item">
    <h2 class="floor-title">{{title}}</h2>
    <ul class="floor-boxes">
    {{#cate}}
     <li class="floor-box">
        <p class="floor-text">{{text}}</p>
        <a href="/list.html?category={{categoryId}}">
            <img src="{{image}}" alt="">
        </a>
     </li>
     {{/cate}}
    </ul>
</div>
{{/floor}}