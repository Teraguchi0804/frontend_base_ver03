//--------------------------------------------------
//
//  TopOpening
//
//--------------------------------------------------

import Libs from '../../../MyLibs/Display/Motion/DomMotionLibs.js';
import HoverEffectSVGArrowTop from './HoverEffectSVGArrowTop.js';

export default class TopOpening {

  constructor(){

    this.tlMain = new TimelineMax();

    this.setup();
    // this.run();
    this.setEvents();

  }

  setup() {

    this.libs = new Libs();
    this.ht = new HoverEffectSVGArrowTop($('.section01 .next'));
    this.ht.setupFirst();

    // ------------------------------------------------------------
    //  dom取得
    // ------------------------------------------------------------
    this.$nav = $('#nav');
    this.$navItem = this.$nav.find('.item');

    this.$sideR = $('#sideR');

    this.$footerText = $('#footer .text');

    this.$text = $('.section01 .next .text');
    this.$arrow = $('.section01 .next svg');

    this.$copy = $('#footer .copy');
    this.$time = $('.section01 .timeWrap .textWrap');

    this.$sideL = $('#sideL');

    this.$tit01 = $('.section01 .titWrap img').eq(0);
    this.$tit02 = $('.section01 .titWrap img').eq(1);
    this.$tit03 = $('.section01 .titWrap img').eq(2);

    // // ------------------------------------------------------------
    // //  scene01 setup
    // // ------------------------------------------------------------
    var opt = {$target: this.$navItem,dur: 0,delay: 0,blur: 0,blurTarget: 10,ease: Power3.easeIn};
    this.libs.blur(opt);
    var opt = {$target: this.$sideR,dur: 0,delay: 0,blur: 0,blurTarget: 10,ease: Power3.easeIn};
    this.libs.blur(opt);
    var opt = {$target: this.$footerText,dur: 0,delay: 0,blur: 0,blurTarget: 10,ease: Power3.easeIn};
    this.libs.blur(opt);
    var opt = {$target: this.$copy,dur: 0,delay: 0,blur: 0,blurTarget: 10,ease: Power3.easeIn};
    this.libs.blur(opt);
    var opt = {$target: this.$time,dur: 0,delay: 0,blur: 0,blurTarget: 10,ease: Power3.easeIn};
    this.libs.blur(opt);
    var opt = {$target: this.$sideL,dur: 0,delay: 0,blur: 0,blurTarget: 10,ease: Power3.easeIn};
    this.libs.blur(opt);

    var opt = {$target: this.$tit01,dur: 0,delay: 0,blur: 0,blurTarget: 20,ease: Power3.easeIn};
    this.libs.blur(opt);
    var opt = {$target: this.$tit02,dur: 0,delay: 0,blur: 0,blurTarget: 20,ease: Power3.easeIn};
    this.libs.blur(opt);
    var opt = {$target: this.$tit03,dur: 0,delay: 0,blur: 0,blurTarget: 20,ease: Power3.easeIn};
    this.libs.blur(opt);

    TweenMax.set(this.$navItem, {y: -40});
    TweenMax.set(this.$sideR, {x: 40});
    TweenMax.set(this.$footerText, {y: 40});
    TweenMax.set(this.$copy, {y: 40});
    TweenMax.set(this.$time, {y: 40});
    TweenMax.set(this.$sideL, {x: -40});
    TweenMax.set(this.$tit01, {y: -80,opacity: 0});
    TweenMax.set(this.$tit02, {y: -80,opacity: 0});
    TweenMax.set(this.$tit03, {y: -80,opacity: 0});

  }

  runTop() {

    // 右上から順に

    this.tlMain
      .add(()=>{

        TweenMax.to($('.menuBtn01'), 1, {opacity: 1,ease: Power2.easeOut});

        this.$navItem.each((index, el)=>{

          var opt = {$target: $(el),dur: 1,delay: 0.1 * index,blur: 10,blurTarget: 0,ease: Power2.easeOut};
          this.libs.blur(opt);

          TweenMax.to($(el), 1, {y: 0,opacity:1,z: 1,ease: Power2.easeOut,delay: 0.1 * index});
          
        });

      },'+=1.2')
      .add(()=>{

        var opt = {$target: this.$sideR,dur: 1,delay: 0,blur: 10,blurTarget: 0,ease: Power2.easeOut};
        this.libs.blur(opt);

        TweenMax.to(this.$sideR, 1, {x: 0,opacity:1,ease: Power2.easeOut});

      },'+=0.6')
      .add(()=>{

        var opt = {$target: this.$footerText,dur: 1,delay: 0,blur: 10,blurTarget: 0,ease: Power2.easeOut};
        this.libs.blur(opt);

        TweenMax.to(this.$footerText, 1, {y: 0,opacity:1,ease: Power2.easeOut});

      },'+=0.13')
      .add(()=>{

        var opt = {$target: this.$copy,dur: 1,delay: 0,blur: 10,blurTarget: 0,ease: Power2.easeOut};
        this.libs.blur(opt);

        TweenMax.to(this.$copy, 1, {y: 0,opacity:1,ease: Power2.easeOut});

      },'+=0.13')
      .add(()=>{

        var opt = {$target: this.$time,dur: 1,delay: 0,blur: 10,blurTarget: 0,ease: Power2.easeOut};
        this.libs.blur(opt);

        TweenMax.to(this.$time, 1, {y: 0,opacity:1,ease: Power2.easeOut});

      },'+=0.13')
      .add(()=>{

        var opt = {$target: this.$sideL,dur: 1,delay: 0,blur: 10,blurTarget: 0,ease: Power2.easeOut};
        this.libs.blur(opt);

        TweenMax.to(this.$sideL, 1, {x: 0,opacity:1,ease: Power2.easeOut});

      },'+=0.13')
      .add(()=>{

        var opt = {$target: this.$tit01,dur: 2.0,delay: 0,blur: 20,blurTarget: 0,ease: Power2.easeOut};
        this.libs.blur(opt);
        var opt = {$target: this.$tit02,dur: 1.9,delay: 0.1,blur: 20,blurTarget: 0,ease: Power2.easeOut};
        this.libs.blur(opt);
        var opt = {$target: this.$tit03,dur: 1.8,delay: 0.2,blur: 20,blurTarget: 0,ease: Power2.easeOut};
        this.libs.blur(opt);

        TweenMax.to(this.$tit01, 2.0, {y: 0,opacity:1,ease: Power2.easeOut,delay:0});
        TweenMax.to(this.$tit02, 1.9, {y: 0,opacity:1,ease: Power2.easeOut,delay:0.1});
        TweenMax.to(this.$tit03, 1.8, {y: 0,opacity:1,ease: Power2.easeOut,delay:0.2});

      },'+=0.13')
      .add(()=>{

        this.ht.runFirst();
        this.ht.autoArrow();

      },'+=1.12')


  }

   runOther() {

    this.tlMain
      .add(()=>{

        TweenMax.to($('.menuBtn01'), 1, {opacity: 1,ease: Power2.easeOut});

        this.$navItem.each((index, el)=>{

          var opt = {$target: $(el),dur: 1,delay: 0.1 * index,blur: 10,blurTarget: 0,ease: Power2.easeOut};
          this.libs.blur(opt);

          TweenMax.to($(el), 1, {y: 0,opacity:1,z:1, ease: Power2.easeOut,delay: 0.1 * index});
          
        });

      },'+=1.2')
      .add(()=>{

        var opt = {$target: this.$sideR,dur: 1,delay: 0,blur: 10,blurTarget: 0,ease: Power2.easeOut};
        this.libs.blur(opt);

        TweenMax.to(this.$sideR, 1, {x: 0,opacity:1,ease: Power2.easeOut});

      },'+=0.6')
      .add(()=>{

        var opt = {$target: this.$sideL,dur: 1,delay: 0,blur: 10,blurTarget: 0,ease: Power2.easeOut};
        this.libs.blur(opt);

        TweenMax.to(this.$sideL, 1, {x: 0,opacity:1,ease: Power2.easeOut});

      },'+=0.13')

      // フッター等は表示されないが、初期状態に戻しておく
      .add(()=>{

        var opt = {$target: this.$footerText,dur: 1,delay: 0,blur: 10,blurTarget: 0,ease: Power2.easeOut};
        this.libs.blur(opt);

        TweenMax.to(this.$footerText, 1, {y: 0,opacity:1,ease: Power2.easeOut});

      })
      .add(()=>{

        var opt = {$target: this.$copy,dur: 1,delay: 0,blur: 10,blurTarget: 0,ease: Power2.easeOut};
        this.libs.blur(opt);

        TweenMax.to(this.$copy, 1, {y: 0,opacity:1,ease: Power2.easeOut});

      })


  }

  onResize() {


  }

  onLoop() {


  }

  setEvents() {

    gb.in.r.add('Opening', this.onResize.bind(this));

  }

}