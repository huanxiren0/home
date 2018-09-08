 {{#list}}
 	{{#isActive}}
 	<li class="side-item active">
 	{{/isActive}}
 	{{^isActive}}
 	<li class="side-item ">
 	{{/isActive}}
 		<a class="" href={{href}}>{{desc}}</a>
 	</li>
 {{/list}}