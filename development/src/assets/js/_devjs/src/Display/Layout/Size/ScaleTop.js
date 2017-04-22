//--------------------------------------------------
//
//  Layout
//
//--------------------------------------------------
export default class Scale {

  constructor() {

    this.SPBaseW = 375;
    this.PCBaseW = 1300;

    this.rate = 1;
    this.W = window.innerWidth;

    this.$targetList = [
      {
        '$target': $('#sideL, #sideR, #nav'),
        'scale': 'spOnly' // spOnly pcOnly both
      },
      // {
      //   '$target': $('.section03_detail'),
      //   'scale': 'both' // spOnly pcOnly both
      // },
      // {
      //   '$target': $('.section04'),
      //   'scale': 'both' // spOnly pcOnly both
      // },
    ]

    this.run();
    this.setup();
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
      if (this.W > 375) this.W = 375;
      if (this.W < 320) this.W = 320;
      log(this.W);
      this.rate = this.W / this.SPBaseW;

      // scaleするリストをループ
      $.each(this.$targetList, (index, val)=>{

        if (val.scale == 'both' || val.scale == 'spOnly') {

          TweenMax.set(val.$target, {
            scale: this.rate,
          });

        };
        
      });

    } else {

      // widthからrateを計算
      // this.rate = gb.in.u.floatFormat(this.W / this.PCBaseW , 2);
      if (this.W > 1300) this.W = 1300;
      this.rate = this.W / this.PCBaseW;

      // scaleするリストをループ
      $.each(this.$targetList, (index, val)=>{

        if (val.scale == 'both' || val.scale == 'pcOnly') {

          TweenMax.set(val.$target, {
            scale: this.rate,
          });

        };

        // こちらの場合は、scaleを戻す
        if (val.scale == 'spOnly') {

          TweenMax.set(val.$target, {
            scale: 1,
          });

        };
        
      });  

    }

  }

  // scaleしたら、元の大きさ分余白ができるのでoverflow hiddenで消す
  wrap() {



  }

  reset() {

    $.each(this.$targetList, (index, val)=>{

      TweenMax.set(val.$target, {
        scale: 1,
        'transform-origin':'0 0',
        '-webkit-transform-origin':'0 0'
      });
      
    });


    // イベント解除
    gb.in.r.remove('scaleTop');

  }

  onResize() {

    this.run();

  }

  setEvents() {

    gb.in.r.add('scaleTop', this.onResize.bind(this));
    
  }

}