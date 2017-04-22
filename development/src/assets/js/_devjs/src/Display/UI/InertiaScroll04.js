//--------------------------------------------------
//
//  InertiaScroll sss
//
//--------------------------------------------------

import Libs from '../../MyLibs/Display/Motion/DomMotionLibs.js';

export default class InertiaScroll {

  constructor(){

    // this.$wrap = $('#wrapper');
    // this.$inner = $('#inner');
    this.$wrap = $('body');
    this.$inner = $('#wrapper');
    this.$wrapInner = $('#inner');
    this.$wrapper = this.$inner.add($('#sideR, #sideL, #bgWrap, .frame'));
    this.$target = $('.inertia');
    this.$header = $('.header');

    this.$year01 = $('.year01');
    this.$year03 = $('.year03');
    this.isYear01 = true;
    this.isYear03 = true;

    this.wrapST = 0; // ?Ҫ??Υ?????`???
    this.targetST = 0; // ?Ҫ??Υ?????`???
    this.st = 0; // ?????????ν????ե??å?    
    this.wheel = 0;

    this.wrapEase = 0.18;
    this.wrapTargetDisEase = 0.3;
    this.targetEase = 0.05;

    this.rateList = []; // ???줾??Ҫ??ΑT??α?????{????    
    this.marginList = [];
    this.dirList = [];

    this.isWheel = true;
    this.FRICTION = 0.6;

    this.isLock = false;

    setTimeout(()=>{

      if (gb.in.u.isResSP) return;

      $(window).scrollTop(0);
      TweenMax.set(this.$wrapper,{y: 0});
      this.setup();
      this.ready();
      // this.onResize();
      this.setEvents();

    },100)

  }

  setup() {

    // wrapҪ??Ȥ˜ʂ?    
    this.$wrapper.addClass('is-fixed');
    this.H = this.$inner.height();
    this.$wrap.height(this.H);

    var self = this;
    this.$target.each(function () {

      var rate = $(this).data('rate');
      var margin = $(this).data('margin');
      var dir = $(this).data('dir') || 1;
      self.rateList.push(rate);
      self.marginList.push(margin);
      self.dirList.push(dir);

    });

  }

  ready() {


    // text
    this.$tit01 = $('.block02 .blockInner .tit01 span');
    this.$tit02 = $('.block02 .blockInner .tit02');
    this.$tit03 = $('.block02 .blockInner .tit03 span');
    this.$tit04 = $('.block02 .blockInner .tit04');
    this.$text01 = $('.block02 .blockInner .textWrap01');
    this.$text02 = $('.block02 .blockInner .textWrap02');
    this.$text03 = $('.block02 .blockInner .text05');
    this.$text04 = $('.block02 .blockInner .textWrap04');
    this.$imgWrap03 = $('.block02 .blockInner .imgWrap03');
    this.$imgWrap04 = $('.block02 .blockInner .imgWrap04');
    this.$imgWrap05 = $('.block02 .blockInner .imgWrap05');
    this.tit01ST = this.$tit01.offset().top - gb.in.r.ws.h/8*5; this.tit01STLock = false;
    this.tit02ST = this.$tit02.offset().top - gb.in.r.ws.h/8*5; this.tit02STLock = false;
    this.tit03ST = this.$tit03.offset().top - gb.in.r.ws.h/8*5; this.tit03STLock = false;
    this.text01ST = this.$text01.offset().top - gb.in.r.ws.h/8*5; this.text01STLock = false;
    this.text02ST = this.$text02.offset().top - gb.in.r.ws.h/8*5; this.text02STLock = false;
    this.text03ST = this.$text03.offset().top - gb.in.r.ws.h/8*5; this.text03STLock = false;
    // this.text04ST = this.$text04.offset().top - gb.in.r.ws.h/8*5; this.text04STLock = false;
    this.imgWrap03ST = this.$imgWrap03.offset().top - gb.in.r.ws.h/8*5; this.imgWrap03STLock = false;
    this.imgWrap04ST = this.$imgWrap04.offset().top - gb.in.r.ws.h/8*5; this.imgWrap04STLock = false;
    // this.imgWrap05ST = this.$imgWrap05.offset().top - gb.in.r.ws.h/8*5; this.imgWrap05STLock = false;

    this.libs = new Libs();

    var opt = {$target: this.$tit01,dur: 0,delay: 0,blur: 0,blurTarget: 10,ease: Power3.easeIn};
    this.libs.blur(opt);
    var opt = {$target: this.$tit02,dur: 0,delay: 0,blur: 0,blurTarget: 10,ease: Power3.easeIn};
    this.libs.blur(opt);
    var opt = {$target: this.$tit03,dur: 0,delay: 0,blur: 0,blurTarget: 10,ease: Power3.easeIn};
    this.libs.blur(opt);
    var opt = {$target: this.$tit04,dur: 0,delay: 0,blur: 0,blurTarget: 10,ease: Power3.easeIn};
    this.libs.blur(opt);
    var opt = {$target: this.$text01,dur: 0,delay: 0,blur: 0,blurTarget: 10,ease: Power3.easeIn};
    this.libs.blur(opt);
    var opt = {$target: this.$text02,dur: 0,delay: 0,blur: 0,blurTarget: 10,ease: Power3.easeIn};
    this.libs.blur(opt);
    var opt = {$target: this.$text03,dur: 0,delay: 0,blur: 0,blurTarget: 10,ease: Power3.easeIn};
    this.libs.blur(opt);
    var opt = {$target: this.$text04,dur: 0,delay: 0,blur: 0,blurTarget: 10,ease: Power3.easeIn};
    this.libs.blur(opt);

    TweenMax.set(this.$tit01, {x: -120, opacity: 0});
    TweenMax.set(this.$tit02, {y: 120,x: '-50%', opacity: 0});
    TweenMax.set(this.$tit03, {x: -120, opacity: 0});
    TweenMax.set(this.$tit04, {y: 120,x: '-50%', opacity: 0});
    TweenMax.set(this.$text01, {y: 120,x: '-50%', opacity: 0});
    TweenMax.set(this.$text02, {y: 120,x: '-50%', opacity: 0});
    TweenMax.set(this.$text03, {y: 120, opacity: 0});
    TweenMax.set(this.$text04, {y: 120, opacity: 0});

    // img
    this.$img01 = $('.imgWrap01 .imgHWrap');
    this.$bg01 = $('.imgWrap01 .bg');
    this.$img02 = $('.imgWrap02 img');
    this.$img03 = $('.imgWrap03 img');
    this.$bg02 = $('.imgWrap03 .bg');
    this.$img04 = $('.imgWrap04 img');
    this.$bg03 = $('.imgWrap04 .bg');
    this.$img05 = $('.imgWrap05 img');
    this.$bg04 = $('.imgWrap05 .bg');

    TweenMax.set(this.$img01, {x: -30, clip:'rect(0px 0px 600px 0px)'}); // w 400 h 600
    TweenMax.set(this.$bg01, {x: 0, clip:'rect(0px 10px 0px 0px)'}); // w 400 h 540
    TweenMax.set(this.$img02, {clip:'rect(0px 0px 300px 0px)'}); // w 450 h 300
    TweenMax.set(this.$img03, {x: -30, clip:'rect(0px 0px 260px 0px)'}); // w 390 h 260
    TweenMax.set(this.$bg02, {x: 0, clip:'rect(0px 10px 0px 0px)'}); // w 390 h 260
    TweenMax.set(this.$img04, {clip:'rect(0px 0px 480px 0px)'}); // w 320 h 480
    TweenMax.set(this.$bg03, {x: 0, clip:'rect(0px 10px 0px 0px)'}); // w 250 h 460
    TweenMax.set(this.$img05, {x: -30, clip:'rect(0px 0px 630px 0px)'}); // w 420 h 630
    TweenMax.set(this.$bg04, {x: 0, clip:'rect(0px 10px 0px 0px)'}); // w 300 h 550

  }

  run() {

    if (gb.in.u.isResSP) return;
    if (!this.isWheel) return;
    
    if (gb.in.s.offset < -this.H + gb.in.r.ws.h) gb.in.s.offset = -this.H + gb.in.r.ws.h;
    if (gb.in.s.offset > 0) gb.in.s.offset = 0;
    this.wheel = gb.in.s.offset;

    // log(this.wrapST);
    // log(this.wheel);

    // Ӌ?
    // this.st = -this.wheel;
    this.st = $(window).scrollTop();
    this.wrapST += (this.st - this.wrapST) * this.wrapEase;
    this.targetST += (this.st * this.wrapTargetDisEase - this.targetST) * this.targetEase;

    // ??ӳ
    // inner
    TweenMax.set(this.$wrapper,{y: -this.wrapST})
    // target   
    var self = this; 
    this.$target.each(function (i) {

      TweenMax.set($(this),{y: self.dirList[i] * (-self.targetST * Number(self.rateList[i]) / gb.in.Layout.size.scale.rate + self.marginList[i])});

    });

    this.showContents();

    // this.numContents();

  }

  showContents() {

    if (this.tit01ST < this.wrapST && !this.tit01STLock) {
      this.tit01STLock = true;

      // text
      var opt = {$target: this.$tit01,dur: 1.5,delay: 0,blur: 10,blurTarget: 0,ease: Power2.easeOut};
      this.libs.blur(opt);

      TweenMax.to(this.$tit01, 1.5, {x: 0,z:1, opacity:1,ease: Power2.easeOut});

      var opt = {$target: this.$tit02,dur: 1.5,delay: 0.1,blur: 10,blurTarget: 0,ease: Power2.easeOut};
      this.libs.blur(opt);

      TweenMax.to(this.$tit02, 1.5, {y: 0,x: '-50%',z:1, opacity:1,delay: 0.1,ease: Power2.easeOut});


      var opt = {$target: this.$text01,dur: 1.35,delay: 0.15,blur: 10,blurTarget: 0,ease: Power2.easeOut};
      this.libs.blur(opt);

      TweenMax.to(this.$text01, 1.35, {y: 0,x: '-50%',z:1, opacity:1,delay: 0.15,ease: Power2.easeOut});

      // img
      var tl = new TimelineMax();

      tl
        .to(this.$bg01, 0.7, {
          z: 1,
          clip:'rect(0px 10px 540px 0px)',
          ease: Expo.easeOut,
          delay: 0.45
        })
        .to(this.$bg01, 0.7, {
          z: 1,
          clip:'rect(0px 400px 540px 0px)',
          ease: Expo.easeOut
        },'-=0.1')
        .to(this.$img01, 1.6, {
          x: 0,
          z: 5, 
          clip:'rect(0px 400px 600px 0px)',
          ease: Expo.easeOut
        },'-=0.5')

    };
    if (this.text02ST < this.wrapST && !this.text02STLock) {
      this.text02STLock = true;

      var opt = {$target: this.$text02,dur: 1.5,delay: 0,blur: 10,blurTarget: 0,ease: Power2.easeOut};
      this.libs.blur(opt);

      TweenMax.to(this.$text02, 1.5, {y: 0,x: '-50%',z:1, opacity:1,ease: Power2.easeOut});

      var tl = new TimelineMax();

      tl
        .to(this.$img02, 1.7, {
          x: '-50%',
          z: 5,
          clip:'rect(0px 450px 300px 0px)',
          delay: 0.3,
          ease: Expo.easeOut
        })

    };
    if (this.imgWrap03ST < this.wrapST && !this.imgWrap03STLock) {
      this.imgWrap03STLock = true;

      // img
      var tl = new TimelineMax();

      tl
        .to(this.$bg02, 0.7, {
          z: 1,
          clip:'rect(0px 10px 260px 0px)',
          ease: Expo.easeOut
        })
        .to(this.$bg02, 0.7, {
          z: 1,
          clip:'rect(0px 390px 260px 0px)',
          ease: Expo.easeOut
        },'-=0.1')
        .to(this.$img03, 1.35, {
          x: 0,
          z: 5,
          clip:'rect(0px 390px 260px 0px)',
          ease: Expo.easeOut
        },'-=0.5')

    };   
    if (this.imgWrap04ST < this.wrapST && !this.imgWrap04STLock) {
      this.imgWrap04STLock = true;

      // img
      var tl = new TimelineMax();

      tl
        .to(this.$bg03, 0.7, {
          z: 1,
          clip:'rect(0px 10px 460px 0px)',
          ease: Expo.easeOut
        })
        .to(this.$bg03, 0.7, {
          z: 1,
          clip:'rect(0px 250px 460px 0px)',
          ease: Expo.easeOut
        },'-=0.1')
        .to(this.$img04, 1.6, {
          x: 0,
          z: 5,
          clip:'rect(0px 320px 480px 0px)',
          ease: Expo.easeOut
        },'-=0.5')
        .add(()=>{

          var opt = {$target: this.$text03,dur: 1.6,delay: 0,blur: 10,blurTarget: 0,ease: Power2.easeOut};
          this.libs.blur(opt);

          TweenMax.to(this.$text03, 1.6, {y: 0,z:1, opacity:1,ease: Power2.easeOut});

        },'-=1.7')

    };
    if (this.tit03ST < this.wrapST && !this.tit03STLock) {
      this.tit03STLock = true;

      var opt = {$target: this.$tit03,dur: 1.5,delay: 0,blur: 10,blurTarget: 0,ease: Power2.easeOut};
      this.libs.blur(opt);

      TweenMax.to(this.$tit03, 1.5, {x: 0,z:1, opacity:1,ease: Power2.easeOut});

      var opt = {$target: this.$tit04,dur: 1.4,delay: 0.1,blur: 10,blurTarget: 0,ease: Power2.easeOut};
      this.libs.blur(opt);

      TweenMax.to(this.$tit04, 1.4, {y: 0,x: '-50%',z:1, opacity:1,delay: 0.1,ease: Power2.easeOut});

      var opt = {$target: this.$text04,dur: 1.3,delay: 0.2,blur: 10,blurTarget: 0,ease: Power2.easeOut};
      this.libs.blur(opt);

      TweenMax.to(this.$text04, 1.3, {y: 0,z:1, opacity:1,delay: 0.2,ease: Power2.easeOut});

      // img
      var tl = new TimelineMax();

      tl
        .to(this.$bg04, 0.7, {
          z: 1,
          clip:'rect(0px 10px 550px 0px)',
          ease: Expo.easeOut,
          delay: 0.45
        })
        .to(this.$bg04, 0.7, {
          z: 1,
          clip:'rect(0px 300px 550px 0px)',
          ease: Expo.easeOut
        },'-=0.1')
        .to(this.$img05, 1.6, {
          x: 0,
          z: 5,
          clip:'rect(0px 420px 630px 0px)',
          ease: Expo.easeOut
        },'-=0.5')

    };



  }

  numContents() {

    var rate = this.wrapST / this.H;
    var adjust = 17;
    var adjust02 = 87;
    var result = Math.floor(rate*100);

    log(Math.floor(rate*100));

    var year01 = 1935 + Math.floor(result * 1.5) - adjust;
    if (year01 > 1940 && !this.isYear01 && year01 < 1980) {
      this.isYear01 = true;
      TweenMax.to(this.$year01, 1.5, {
        x: 0,
        z: 1, 
        opacity: 1,
        ease: Expo.easeOut
      })
    }
    if ((year01 > 1980 || year01 <= 1940) && this.isYear01) {
      this.isYear01 = false;
      TweenMax.to(this.$year01, 1.5, {
        x: -120,
        z: 1,
        opacity: 0,
        ease: Expo.easeOut
      })
    }

    this.$year01.html(year01)

    var year03 = 2000 + Math.floor(result * 1.5) - adjust02;

    if (year03 > 2000 && !this.isYear03 && year03 < 2016) {
      this.isYear03 = true;
      TweenMax.to(this.$year03, 1.5, {
        x: 0,
        z: 1, 
        opacity: 1,
        ease: Expo.easeOut
      })
    }
    // if ((year03 > 2016 || year03 <= 2000) && this.isYear03) {
    if (year03 <= 2000 && this.isYear03) {
      this.isYear03 = false;
      TweenMax.to(this.$year03, 1.5, {
        x: -120,
        z: 1,
        opacity: 0,
        ease: Expo.easeOut
      })      
    }
    if (year03>2016) year03 = 2016;



    this.$year03.html(year03)



  }

  onScroll() {

    this.numContents();

  }

  onResize() {

    this.setup();

    this.tit01ST = this.$tit01.offset().top - gb.in.r.ws.h/8*5;
    this.tit02ST = this.$tit02.offset().top - gb.in.r.ws.h/8*5;
    this.tit03ST = this.$tit03.offset().top - gb.in.r.ws.h/8*5;
    this.text01ST = this.$text01.offset().top - gb.in.r.ws.h/8*5;
    this.text02ST = this.$text02.offset().top - gb.in.r.ws.h/8*5;
    this.text03ST = this.$text03.offset().top - gb.in.r.ws.h/8*5;
    this.text04ST = this.$text04.offset().top - gb.in.r.ws.h/8*5;

    if (gb.in.u.isResSP) {
      this.reset();
    };

  }

  onBlur() {

    gb.in.s.STAmount = 0;

  }

  reset() {

    TweenMax.set(this.$wrapper,{y: 0})
    // target   
    var self = this; 
    this.$target.each(function (i) {

      TweenMax.set($(this),{y: 0,x: 0})

    });

    var opt = {$target: this.$tit01,dur: 0,delay: 0,blur: 0,blurTarget: 0,ease: Power3.easeIn};
    this.libs.blur(opt);
    var opt = {$target: this.$tit02,dur: 0,delay: 0,blur: 0,blurTarget: 0,ease: Power3.easeIn};
    this.libs.blur(opt);
    var opt = {$target: this.$tit03,dur: 0,delay: 0,blur: 0,blurTarget: 0,ease: Power3.easeIn};
    this.libs.blur(opt);
    var opt = {$target: this.$tit04,dur: 0,delay: 0,blur: 0,blurTarget: 0,ease: Power3.easeIn};
    this.libs.blur(opt);
    var opt = {$target: this.$text01,dur: 0,delay: 0,blur: 0,blurTarget: 0,ease: Power3.easeIn};
    this.libs.blur(opt);
    var opt = {$target: this.$text02,dur: 0,delay: 0,blur: 0,blurTarget: 0,ease: Power3.easeIn};
    this.libs.blur(opt);
    var opt = {$target: this.$text03,dur: 0,delay: 0,blur: 0,blurTarget: 0,ease: Power3.easeIn};
    this.libs.blur(opt);
    var opt = {$target: this.$text04,dur: 0,delay: 0,blur: 0,blurTarget: 0,ease: Power3.easeIn};
    this.libs.blur(opt);

    TweenMax.set(this.$tit01, {y: 0,opacity: 1});
    TweenMax.set(this.$tit02, {y: 0,opacity: 1});
    TweenMax.set(this.$tit03, {y: 0,opacity: 1});
    TweenMax.set(this.$tit04, {y: 0,opacity: 1});
    TweenMax.set(this.$text01, {y: 0,opacity: 1});
    TweenMax.set(this.$text02, {y: 0,opacity: 1});
    TweenMax.set(this.$text03, {y: 0,opacity: 1});
    TweenMax.set(this.$text04, {y: 0,opacity: 1});

  }

  resetInertia() {

    this.$wrapper.removeClass('is-fixed');
    TweenMax.set(this.$wrapper,{y: 0,x: 0})
    $('body').css('height', '100%');

  }

  setEvents() {

    gb.in.up.add('InertiaScroll', this.run.bind(this));
    gb.in.r.add('InertiaScroll', this.onResize.bind(this));
    gb.in.s.add('InertiaScroll', this.onScroll.bind(this));
    

  }

}
