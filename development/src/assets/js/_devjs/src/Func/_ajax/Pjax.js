//--------------------------------------------------
//
//  pjax
//
//--------------------------------------------------

(function(){

  function Pjax(param) {

    this.param = param;

    this.id = null;
    this.e = null;
    this.nextLink = null;
    this.prevLink = this.getLink();

    this.setup();
    this.setEvents();

  }

  Pjax.prototype = {

    setup: function () {

      gb.pjax = {count:0};
      gb.Timer = null;

      this.display = new gb.DisplayPjax();

    },

    getLink: function () {

      var url = location.href;

      if (url.indexOf('about') !== -1) {
        return '/sp/about';
      } else if (url.indexOf('project') !== -1){
        return '/sp/project';
      } else if (url.indexOf('technology') !== -1){
        return '/sp/technology';
      } else if (url.indexOf('contact') !== -1){
        return '/sp/contact';
      } else if (url.indexOf('detail') !== -1){
        return '/sp/detail';
      } else {
        return '/sp/';
      }

    },

    offEvent: function () {

      $(document).off('ready');
      $(window).off('render load resize');
      $(window).off('touchstart.swipeContents touchmove.swipeContents touchend.swipeContents');
      $(window).off('touchstart.nextLink click.nextLink');
      $(window).off('loadingEnd textEnd');
      $('a.pjax').off('click.nextLink'); 
      $('.pjaxClick').off('click.nextLink'); 
      $('.detailLink').off('click.detail');
      $('.ui__menu_btnC').off('click.detailClose');
      $('.detail .ui__menu_btn_c').off('click.detailClose');

    },

    setID: function () {

      this.id = $('.pjaxWrap').data('id');
      $('body').attr('id', this.id);

    },

    onReady: function () {

      $.pjax(this.param);
        
    },

    onClick: function (e) {

      var href = $(e.currentTarget).attr('href');
      this.e = e;
      this.nextLink = href;

      $(document).trigger('fetch');

    },

    onPjaxFetch: function (e) {


    },

    onFetch: function () {

      // イベント解除
      this.offEvent();      

      // ロック解除
      gb.in.menu.isLock = false;

      this.display.disappearHeader();
      this.display.disappearMenu();
      this.display.disappearContents();
        
    },

    onRender: function () {

      var self = this;

      this.setID();

      this.display.readyRender();
      this.display.appearHeader();
      this.display.appearContents();

      $('a.pjax').on('click.nextLink', function(e){self.onClick.call(self,e)});
      $('a.pjaxClick').on('click.nextLink', function(e){self.onClick.call(self,e)});

      this.prevLink = this.nextLink; 
    },

    setEvents: function () {

      var self = this;

      this.onReady();

      $(document).on('pjax:fetch', function(){self.onPjaxFetch.call(self)});
      $(document).on('fetch', function(){self.onFetch.call(self)});
      $(window).on('pjax:load', function(){self.onRender.call(self)});
      $('a.pjax').on('click.nextLink', function(e){self.onClick.call(self,e)});
      $('a.pjaxClick').on('click.nextLink', function(e){self.onClick.call(self,e)});

    },

  }

  gb.Pjax = Pjax;

})();