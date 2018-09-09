require('common/nav/');

require('common/search/');
require('./index.css');
require('util/carousel/');

var _util = require('util/');
var template  = require('./keywords.tpl');
var carousel  = require('./carousel.tpl');

var index = {
  init:function(){
    this.loadKeywords();
    this.loadCarousel();
    return this;
  },
  list:[
    {
      item:[{name:"手机"},{name:"荣耀play"}]
    },
    {
      item:[{name:"秋装"},{name:"外套"}]
    },
    {
      item:[{name:"数码"},{name:"电脑 耳机"}]
    },
    {
      item:[{name:"生活"},{name:"卫生纸 刀具"}]
    },
    {
      item:[{name:"手机"},{name:"荣耀play"}]
    },
    {
      item:[{name:"手机"},{name:"荣耀play"}]
    },
    {
      item:[{name:"手机"},{name:"荣耀play"}]
    }
  ],
    carousel:[
      {
        categoryId:111,
        image:require('images/carousel/carousel_01.jpg')
      },
      {
        categoryId:222,
        image:require('images/carousel/carousel_01.jpg')
      },
      {
        categoryId:333,
        image:require('images/carousel/carousel_01.jpg')
      },
  ],
  loadKeywords:function(){
    var html = _util.renderHTML(template,{list:this.list});
    $('.keywordslist').html(html);
  },
  loadCarousel:function(){

    var carousleTpl = _util.renderHTML(carousel,{carousel:this.carousel});
    $('.carousel').html(carousleTpl);
    var unslider = $('.banner').unslider({
      keys: true,
      dots: true,
    });
    $('.arrow').on('click',function(){
        var fn = $(this).hasClass('next') ? 'next' : 'prev';
        // var fn = this.className.split(' ')[1];
        unslider.data('unslider')[fn]();
    });
  }

};


$(function(){
    index.init();
});
