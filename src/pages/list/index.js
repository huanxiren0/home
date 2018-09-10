require('common/nav/');

require('common/search/');
require('./index.css');

var _util = require('util/');
var _product = require('pages/service/product/');

var index = {
  init:function(){
    this.bindEvent();
    return this;
  },
  listParams:{
    keyword:_util.getParamUrl('keyword') || '',
    categoryId:_util.getParamUrl('category') || '',
    orderBy:'default',
    page:1
  },
  bindEvent:function(){
    var _this = this;
    $('.btn').on('click',function(event) {
      $('button').removeClass('active');
      $(this).addClass('active');
    });
    $('.price-order').on('click',function(event) {
      if (!$('i').hasClass('active')) {
        $('.down').addClass('active');
        _this.listParams.orderBy = 'price-down';
        _this.loadProduct();
      }else{
        if ($('.down').hasClass('active')) {
            $('i').removeClass('active');
            $('.up').addClass('active');
            _this.listParams.orderBy = 'price-up';
            _this.loadProduct();
        }else if($('.up').hasClass('active')){
            $('i').removeClass('active');
            $('.down').addClass('active');
            _this.listParams.orderBy = 'price-down';
            _this.loadProduct();
        }
      }
    });
    $('.default-order').on('click',function(event) {
      $('i').removeClass('active');
      _this.listParams.orderBy = 'default';
      _this.loadProduct();
    });
    this.loadProduct();
  },
  loadProduct:function(){
    (this.listParams.categoryId)
    ? (delete this.listParams.keyword)
    : (delete this.listParams.categoryId);

    _product.productList(this.listParams,function(result){
      if (result.code == 0) {
        let list = result.data.list;
        let product = list.map(function(productobj){
          if (productobj.imageList) {
             productobj.image = productobj.imageList.split(',')[0];
          }else{
              productobj.image = require('');
          }
        });
      }else{
        $('.product-list').html('<h2>商品都跑火星去了</h2>');
      }
    },function(err){
      console.log(err);
    });
  }
};


$(function(){
    index.init();
});
