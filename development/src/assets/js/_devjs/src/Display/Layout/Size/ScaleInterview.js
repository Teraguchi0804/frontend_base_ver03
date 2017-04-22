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
        '$target': $('.section03'),
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

      // scaleするリストをループ
      $.each(this.$targetList, (index, val)=>{

        if (val.scale == 'both' || val.scale == 'spOnly') {

          TweenMax.set(val.$target, {
            width: this.SPBaseW,
            scale: this.rate,
            'transform-origin':'0 0',
            '-webkit-transform-origin':'0 0'
          });

        };
        
      });

    } else {

      // widthからrateを計算
      // this.rate = gb.in.u.floatFormat(this.W / this.PCBaseW , 2);
      this.rate = this.W / this.PCBaseW;

      // scaleするリストをループ
      $.each(this.$targetList, (index, val)=>{

        if (val.scale == 'both' || val.scale == 'pcOnly') {

          TweenMax.set(val.$target, {
            width: this.PCBaseW,
            scale: this.rate,
            'transform-origin':'0 0',
            '-webkit-transform-origin':'0 0'
          });

        };

        // こちらの場合は、scaleを戻す
        if (val.scale == 'spOnly') {

          TweenMax.set(val.$target, {
            width: 'auto',
            scale: 1,
            'transform-origin':'0 0',
            '-webkit-transform-origin':'0 0'
          });

        };
        
      });     

    }

  }

  // scaleしたら、元の大きさ分余白ができるのでoverflow hiddenで消す
  wrap() {


  }

  onResize() {

    this.run();

  }

  setEvents() {

    gb.in.r.add('scaleInterview', this.onResize.bind(this));
    
  }

}