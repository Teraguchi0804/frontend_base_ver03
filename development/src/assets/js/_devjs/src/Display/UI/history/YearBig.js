//--------------------------------------------------
//
//  YearBig
//
//--------------------------------------------------

export default class YearBig {

  constructor($target,showST,hideST,startDate,targetDate,right) {

    this.$target = $target;

    this.showST = showST; //1200
    this.hideST = hideST; //2200

    this.isShow = false;
    this.isHide = false;

    this.right = right;

    this.startDate = startDate; //2016
    this.targetDate = targetDate; //1940

    this.setup();
    this.setEvents();

  }

  setup() {
    
    // TweenMax.set(this.$target, {opacity: 0,x: -200,y: 100});

  }

  run() {




  }

  onScroll() {

    // log(gb.in.s.sb);
    // log(gb.in.s.st);

    if (gb.in.u.isResSP) {

      if (gb.in.s.sb > this.showST && !this.isShow) {
        this.isShow = true;

        var tl = new TimelineMax();

        tl
          .add(()=>{

            var tl = new TimelineMax();

            tl.to($('.yearMid'), 3.0, {
              opacity: 1,
              ease: Power4.easeOut
            });

          },'+=0.0')
          // },'+=1.5')
          // count up
          .add(()=>{

            TweenMax.to(this, 3, {
              startDate: this.targetDate,
              ease: Power2.easeOut,
              onUpdate: ()=>{
                            
                var d = Math.floor(this.startDate)
                this.$target.text(d);

              }
            });

          },'+=0.0')

      };



    } else {

      log(gb.in.s.st,this.showST);
      if (gb.in.s.st > this.showST && !this.isShow) {
        this.isShow = true;

        var tl = new TimelineMax();

        tl
          // スクロール禁止に
          // 所定位置に
          .add(()=>{

            // gb.in.u.disableScroll();

            // var $target = $('.year04');
            // var adjust = 67 / gb.in.Layout.size.scale.rate;
            // var pos = $target.offset().top + ($target.height()/2) / gb.in.Layout.size.scale.rate - gb.in.r.ws.h/2 / gb.in.Layout.size.scale.rate + adjust;
            // TweenMax.to($('body,html'), 1.5, {scrollTop: pos,ease: Expo.easeOut});

          })
          // 横からふわっと
          .add(()=>{

            var tl = new TimelineMax();

            tl.to($('.yearMid'), 3.0, {
              opacity: 1,
              ease: Power4.easeOut
            });

          },'+=0.0')
          // },'+=1.5')
          // count up
          .add(()=>{

            TweenMax.to(this, 3, {
              startDate: this.targetDate,
              ease: Power2.easeOut,
              onUpdate: ()=>{
                            
                var d = Math.floor(this.startDate)
                this.$target.text(d);

              }
            });

          },'+=0.0')
          // },'+=0.5')
         // 下コンテンツに
         // 下コンテンツ表示
          // .add(()=>{

          //   // スクロール可能に
          //   gb.in.u.enableScroll();

          //   // スクロール
          //   var $target = $('#now');
          //   var pos = $target.offset().top;
          //   pos = pos - 100;
          //   TweenMax.to($('body,html'), 1.5, {scrollTop: pos,ease: Expo.easeOut});

          //   // 表示
          //   tl.to($('.block02 .blockInner02,.block02 .product, .block03, .block04'), 0.7, {
          //     opacity: 1,
          //     ease: Power3.easeOut
          //   });

          // },'+=3.5')

      };

    }


  }

  setEvents() {

    gb.in.s.add('YearBig', this.onScroll.bind(this));

  }
  
  removeEvents() {

    gb.in.s.remove('YearBig');

  }
  
}