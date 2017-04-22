//--------------------------------------------------
//
//  HeaderColor
//
//--------------------------------------------------

export default class HeaderColor {

  constructor(param){

    this.$logo = $('#header .logo svg path');
    this.$subTit = $('#header .subTit svg').eq(0).find('path');
    this.$menu = $('#header .menuBtn01 span');

    this.$nav = $('#nav .link--hover');
    this.$navBar = $('#nav .bar');

    this.isILock = false;
    this.isHLock = false;

    this.adjustH = 50;

    this.setup();
    this.run();
    this.setEvents();

  }

  setup() {


  }

  run() {

    // インタビュー詳細ページか、
    if (gb.in.pjax.id == 'interview_detail') {

    // スマホのとき処理を実行しない
    if (gb.in.u.isResSP) return;

      var targetSt = 800 * gb.in.Layout.size.scale.rate - this.adjustH;

      if (gb.in.s.st > targetSt && !this.isHLock) {
        this.isHLock = true;

        // 黒に
        this.setColor();

      } else if (gb.in.s.st <= targetSt && this.isHLock){
        this.isHLock = false;

        // 白に
        this.removeColor();

      }

    }

    // historyの場合下記処理を実行する
    if (gb.in.pjax.id == 'history') {

      if (gb.in.u.isResPC) {
        var targetSt = gb.in.r.ws.h - this.adjustH;
      } else {
        var targetSt = $('.block01').height() * gb.in.Layout.size.scale.rate - this.adjustH/2;
      }

      if (gb.in.s.st > targetSt && !this.isHLock) {
        this.isHLock = true;

        // 黒に
        this.setColor();

      } else if (gb.in.s.st <= targetSt && this.isHLock){
        this.isHLock = false;

        // 白に
        this.removeColor();

      }

    }

  }

  setColor() {

    // logo
    TweenMax.to(this.$logo, 0.4, {
      fill: '#000',
      ease: Power4.easeOut
    });

    // subTit
    TweenMax.to(this.$subTit, 0.4, {
      fill: '#000',
      ease: Power4.easeOut
    });

    // menu
    TweenMax.to(this.$menu, 0.4, {
      backgroundColor: '#000',
      ease: Power4.easeOut
    });

    // nav
    TweenMax.to(this.$nav, 0.4, {
      color: '#000',
      ease: Power4.easeOut
    });

    // navBar
    TweenMax.to(this.$navBar, 0.4, {
      backgroundColor: '#000',
      ease: Power4.easeOut
    });
    
  }

  removeColor() {

    // logo
    TweenMax.to(this.$logo, 0.4, {
      fill: '#fff',
      ease: Power4.easeOut
    });

    // subTit
    TweenMax.to(this.$subTit, 0.4, {
      fill: '#fff',
      ease: Power4.easeOut
    });

    // menu
    TweenMax.to(this.$menu, 0.4, {
      backgroundColor: '#fff',
      ease: Power4.easeOut
    });

    // nav
    TweenMax.to(this.$nav, 0.4, {
      color: '#fff',
      ease: Power4.easeOut
    });

    // navBar
    TweenMax.to(this.$navBar, 0.4, {
      backgroundColor: '#fff',
      ease: Power4.easeOut
    });


  }

  onResize() {

    // インタビュー詳細ページか、
    if (gb.in.pjax.id == 'interview_detail') {

      if (gb.in.u.isResSP) {

        // logo
        TweenMax.to(this.$logo, 0.4, {
          fill: '#fff',
          ease: Power4.easeOut
        });

        // menu
        TweenMax.to(this.$menu, 0.4, {
          backgroundColor: '#fff',
          ease: Power4.easeOut
        });

      }

    }

  }

  setEvents() {

    gb.in.s.add('HeaderColor', this.run.bind(this));
    gb.in.r.add('HeaderColor', this.onResize.bind(this));

  }

  removeEvents() {

    this.removeColor();
    gb.in.s.remove('HeaderColor');
    gb.in.r.remove('HeaderColor');

  }

}