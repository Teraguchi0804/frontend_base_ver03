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

      TweenMax.set($('#inner'), {
        width: this.SPBaseW,
        scale: this.rate,
        'transform-origin':'0 0',
        '-webkit-transform-origin':'0 0'
      });

    } else {

      // widthからrateを計算
      // this.rate = gb.in.u.floatFormat(this.W / this.PCBaseW , 2);
      this.rate = this.W / this.PCBaseW;

      if (this.W > 1300) {

        this.W = 1300;

        this.rate = this.W / this.PCBaseW;
        // this.rate = gb.in.u.floatFormat(this.W / this.PCBaseW , 2);

        TweenMax.set($('#inner'), {
          width: '100%',
          scale: this.rate,
          'transform-origin':'0 0',
          '-webkit-transform-origin':'0 0'
        });

      } else {

        TweenMax.set($('#inner'), {
          width: this.PCBaseW,
          scale: this.rate,
          'transform-origin':'0 0',
          '-webkit-transform-origin':'0 0'
        });

      }

    }

  }

  // scaleしたら、元の大きさ分余白ができるのでoverflow hiddenで消す
  wrap() {

    log($('#inner').innerHeight(),this.rate);

    TweenMax.set($('#wrapper'), {
      'overflow':'hidden',
      // width: $('#inner').innerWidth() * this.rate,
      height: $('#inner').innerHeight() * this.rate
    });
    
  }

  static reset() {

    TweenMax.set($('#inner'), {
      width: 'auto',
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

    gb.in.r.add('scaleInterviewDetail', this.onResize.bind(this));
    
  }

}