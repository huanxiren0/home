require('common/nav/');

require('common/search/');
require('./index.css');
require('util/carousel/');

var _util = require('util/');
var template  = require('./keywords.tpl');
var carousel  = require('./carousel.tpl');
var floor  = require('./floor.tpl');

var index = {
  init:function(){
    this.loadKeywords();
    this.loadCarousel();
    this.loadFloor();
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
    floor:[
    {
      title:'F1 数码',
      cate:[
        {text:"手机",categoryId:111,image:require('images/floor/floor_01.jpg')},
        {text:"荣耀play",categoryId:222,image:require('images/floor/floor_02.jpg')},
        {text:"荣耀play",categoryId:333,image:require('images/floor/floor_03.jpg')},
        {text:"荣耀play",categoryId:444,image:require('images/floor/floor_04.jpg')},
      ]
    },
    {
      title:'F2 家电',
      cate:[
        {text:"手机",categoryId:111,image:require('images/floor/floor_01.jpg')},
        {text:"荣耀play",categoryId:222,image:require('images/floor/floor_02.jpg')},
        {text:"荣耀play",categoryId:333,image:require('images/floor/floor_03.jpg')},
        {text:"荣耀play",categoryId:444,image:require('images/floor/floor_04.jpg')},
      ]
    },
    {
      title:'F3 家居',
      cate:[
        {text:"手机",categoryId:111,image:require('images/floor/floor_01.jpg')},
        {text:"荣耀play",categoryId:222,image:require('images/floor/floor_02.jpg')},
        {text:"荣耀play",categoryId:333,image:require('images/floor/floor_03.jpg')},
        {text:"荣耀play",categoryId:444,image:require('images/floor/floor_04.jpg')},
      ]
    }

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
  },
  loadFloor:function(){
    var floorTpl = _util.renderHTML(floor,{floor:this.floor});
    $('.floor').html(floorTpl);    
  }

};


$(function(){
    index.init();
});
