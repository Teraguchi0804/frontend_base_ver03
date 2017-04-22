//--------------------------------------------------
//
//  Layout // historyも兼用
//
//--------------------------------------------------
export default class Scale {

  constructor() {

    this.SPBaseW = 375;
    this.PCBaseW = 1300;

    this.rate = 1;
    this.W = window.innerWidth;

    this.setup();
    this.run(); //インスタンス時に実行
    this.setEvents();

  }

  setup() {

    
  }

  run() {

    this.W = $(window).width();
    this.iW = window.innerWidth;

    this.scale();
    this.wrap();

  }

  // 拡大
  scale() {

    // bpの場合のscale
    if (this.iW <= gb.in.conf.bp) {

      // widthからrateを計算
      // this.rate = gb.in.u.floatFormat(this.W / this.SPBaseW , 2);
      this.rate = this.W / this.SPBaseW;

      TweenMax.set($('#inner, #bgWrap'), {
        width: this.SPBaseW,
        scale: this.rate,
        'transform-origin':'0 0',
        '-webkit-transform-origin':'0 0'
      });

    } else {

      // pcは処理しない
      TweenMax.set($('#inner, #bgWrap'), {
        width: '100%',
        scale: 1,
        'transform-origin':'0 0',
        '-webkit-transform-origin':'0 0'
      });      

    }

  }

  // scaleしたら、元の大きさ分余白ができるのでoverflow hiddenで消す
  wrap() {

    if (this.iW <= gb.in.conf.bp) {

      TweenMax.set($('#wrapper'), {
        'overflow':'hidden',
        // width: $('#inner').innerWidth() * this.rate,
        height: $('.section02').innerHeight() * this.rate
      });

    } else {

      TweenMax.set($('#wrapper'), {
        'overflow':'visible',
        height: '100%'
      });

    }
    
  }

  static reset() {

    TweenMax.set($('#inner, #bgWrap'), {
      width: '100%',
      scale: 1,
      'transform-origin':'0 0',
      '-webkit-transform-origin':'0 0'
    });

    TweenMax.set($('#wrapper'), {
      'overflow':'visible',
      height: '100%'
    });

  }

  onResize() {

    this.run();

  }

  setEvents() {

    gb.in.r.add('scaleMovie', this.onResize.bind(this));
    
  }

}