/**
 * fileOverview: ページ内のアンカースクロールイベント系
 * Project:
 * File: PageScroll
 * Date:
 * Author:
 */

export default class PageScroll {

  constructor($target) {

    this.cb = function(){};
    this.onComplete = function(){};

    this.testAlert = this._testAlert.bind(this);

    this.setEvents();
    this.setup();

  }

  setup() {
    
    this.testAlert();

  }

  pagetop() {

    var self = this;

    // スクロール
    TweenMax.to($('body,html'), 0.8, {
      scrollTop: 0,
      ease: Power3.easeOut,
      onComplete:()=>{
        this.onComplete();
      }
    });

    this.cb();

    return false;

  }
  
  _testAlert (){
    // window.console.log('testAlert!!!');
  }

  pageScrollTo(that) {

    // 差分取得
    var dif = 0;
    if ($(that).data('diff')) dif = $(that).data('diff');

    var $target = $($(that).attr("href"));
    var pos = $target.offset().top;
    pos = pos - dif;

    TweenMax.to($('body,html'), 0.9, {scrollTop: pos,ease: Expo.easeOut});

    log(1234);

  }

  pageScrollTo02(that) {

    // 差分取得
    var dif = 0;
    if ($(that).data('diff')) dif = $(that).data('diff');

    var $target = $($(that).data("link"));
    var pos = $target.offset().top;
    pos = pos - dif;

    TweenMax.to($('body,html'), 0.9, {scrollTop: pos,ease: Expo.easeOut});

  }

  setEvents () {

    var self = this;

    $('.toTop').on('click touchstart', function(){

      self.pagetop.call(self);

      return false;

    });


    log('111')

    // hrefが#で始まっている、aタグをクリックした際
    $('a[href^=#]').not('.notScroll').on('click',function(){
      log(123);
      self.pageScrollTo.call(self,this);
      return false;
    });

    // historyのpast,present
    $('.block01 .textWrap02 .item').not('.notScroll').on('click',function(){self.pageScrollTo02.call(self,this);return false});
    // hrefが#で始まっている、toScrollというクラスが付加されたタグをクリックした際
    // $('[href^=#].toScroll').not('.notScroll').on('click',toScroll);

  }

}
