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
    this.$wrapper = this.$inner.add($('#sideR, #bgWrap'));
    this.$target = $('.inertia');
    this.$header = $('.header');

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
    this.$tit01 = $('.block02 .blockInner .tit01');
    this.$tit02 = $('.block02 .blockInner .tit02');
    this.$text02 = $('.block02 .blockInner .text02');
    this.$text03 = $('.block02 .blockInner .text03');
    this.$text04 = $('.block02 .blockInner .text04');
    this.$text05 = $('.block02 .blockInner .text05');
    this.tit01ST = this.$tit01.offset().top - gb.in.r.ws.h/8*5; this.tit01STLock = false;
    this.tit02ST = this.$tit02.offset().top - gb.in.r.ws.h/8*5; this.tit02STLock = false;
    this.text02ST = this.$text02.offset().top - gb.in.r.ws.h/8*5; this.text02STLock = false;
    this.text03ST = this.$text03.offset().top - gb.in.r.ws.h/8*5; this.text03STLock = false;
    this.text04ST = this.$text04.offset().top - gb.in.r.ws.h/8*5; this.text04STLock = false;
    this.text05ST = this.$text05.offset().top - gb.in.r.ws.h/8*5; this.text05STLock = false;

    this.libs = new Libs();

    var opt = {$target: this.$tit01,dur: 0,delay: 0,blur: 0,blurTarget: 10,ease: Power3.easeIn};
    this.libs.blur(opt);
    var opt = {$target: this.$tit02,dur: 0,delay: 0,blur: 0,blurTarget: 10,ease: Power3.easeIn};
    this.libs.blur(opt);
    var opt = {$target: this.$text02,dur: 0,delay: 0,blur: 0,blurTarget: 10,ease: Power3.easeIn};
    this.libs.blur(opt);
    var opt = {$target: this.$text03,dur: 0,delay: 0,blur: 0,blurTarget: 10,ease: Power3.easeIn};
    this.libs.blur(opt);
    var opt = {$target: this.$text04,dur: 0,delay: 0,blur: 0,blurTarget: 10,ease: Power3.easeIn};
    this.libs.blur(opt);
    var opt = {$target: this.$text05,dur: 0,delay: 0,blur: 0,blurTarget: 10,ease: Power3.easeIn};
    this.libs.blur(opt);

    TweenMax.set(this.$tit01, {y: 120,x: '-50%', opacity: 0});
    TweenMax.set(this.$tit02, {y: 120,x: '-50%', opacity: 0});
    TweenMax.set(this.$text02, {y: 120,x: '-50%', opacity: 0});
    TweenMax.set(this.$text03, {y: 120,x: '-50%', opacity: 0});
    TweenMax.set(this.$text04, {y: 120,x: '-50%', opacity: 0});
    TweenMax.set(this.$text05, {y: 120,opacity: 0});

    // img
    this.$img01 = $('.imgWrap01 img');
    this.$bg01 = $('.imgWrap01 .bg');
    this.$img02 = $('.imgWrap02 img');
    this.$img03 = $('.imgWrap03 img');
    this.$bg02 = $('.imgWrap03 .bg');
    this.$img04 = $('.imgWrap04 img');
    this.$bg03 = $('.imgWrap04 .bg');

    TweenMax.set(this.$img01, {x: -30, clip:'rect(0px 0px 360px 0px)'});
    TweenMax.set(this.$bg01, {x: 0, clip:'rect(0px 10px 0px 0px)'});
    TweenMax.set(this.$img02, {x: -15, clip:'rect(0px 0px 240px 0px)'});
    TweenMax.set(this.$img03, {x: -30, clip:'rect(0px 0px 400px 0px)'}); // w 600 h 400
    TweenMax.set(this.$bg02, {x: 0, clip:'rect(0px 10px 0px 0px)'}); // w 600 h 360
    TweenMax.set(this.$img04, {x: -15, clip:'rect(0px 0px 360px 0px)'}); // w 540 h 360
    TweenMax.set(this.$bg03, {x: 0, clip:'rect(0px 10px 0px 0px)'}); // w 510 h 345

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

      TweenMax.set($(this),{y: self.dirList[i] * (-self.targetST * Number(self.rateList[i]) / gb.in.Layout.size.scale.rate + self.marginList[i])})

    });

    this.showContents();

  }

  showContents() {

    if (this.tit01ST < this.wrapST && !this.tit01STLock) {
      this.tit01STLock = true;

      // text
      var opt = {$target: this.$tit01,dur: 1.5,delay: 0,blur: 10,blurTarget: 0,ease: Power2.easeOut};
      this.libs.blur(opt);

      TweenMax.to(this.$tit01, 1.5, {y: 0,x: '-50%',z:1, opacity:1,ease: Power2.easeOut});

      var opt = {$target: this.$text02,dur: 1.35,delay: 0.15,blur: 10,blurTarget: 0,ease: Power2.easeOut};
      this.libs.blur(opt);

      TweenMax.to(this.$text02, 1.35, {y: 0,x: '-50%',z:1, opacity:1,delay: 0.15,ease: Power2.easeOut});

      // img
      var tl = new TimelineMax();

      tl
        .to(this.$bg01, 0.7, {
          z: 1,
          clip:'rect(0px 10px 340px 0px)',
          ease: Expo.easeOut,
          delay: 0.45,
        })
        .to(this.$bg01, 0.7, {
          z: 1,
          clip:'rect(0px 520px 340px 0px)',
          ease: Expo.easeOut
        },'-=0.1')
        .to(this.$img01, 1.6, {
          x: 0,
          z: 5, 
          clip:'rect(0px 540px 360px 0px)',
          ease: Expo.easeOut
        },'-=0.5')
        .to(this.$img02, 1.6, {
          x: 0,
          z: 5, 
          clip:'rect(0px 360px 240px 0px)',
          ease: Expo.easeOut
        },'-=1.42')

    };
    if (this.tit02ST < this.wrapST && !this.tit02STLock) {
      this.tit02STLock = true;

      var opt = {$target: this.$tit02,dur: 1.5,delay: 0,blur: 10,blurTarget: 0,ease: Power2.easeOut};
      this.libs.blur(opt);

      TweenMax.to(this.$tit02, 1.5, {y: 0,x: '-50%',z:1, opacity:1,ease: Power2.easeOut});

      var opt = {$target: this.$text04,dur: 1.5,delay: 0.1,blur: 10,blurTarget: 0,ease: Power2.easeOut};
      this.libs.blur(opt);

      TweenMax.to(this.$text04, 1.5, {y: 0,x: '-50%',z:1, opacity:1,delay: 0.1,ease: Power2.easeOut});

      // img
      var tl = new TimelineMax();

      tl
        .to(this.$bg03, 0.7, {
          z: 1,
          clip:'rect(0px 10px 360px 0px)',
          ease: Expo.easeOut,
          delay: 0.4,
        })
        .to(this.$bg03, 0.7, {
          z: 1,
          clip:'rect(0px 600px 360px 0px)',
          ease: Expo.easeOut
        },'-=0.1')
        .to(this.$img04, 1.5, {
          x: 0,
          z: 5, 
          clip:'rect(0px 520px 360px 0px)',
          ease: Expo.easeOut
        },'-=0.5')

    };
    if (this.text03ST < this.wrapST && !this.text03STLock) {
      this.text03STLock = true;

      var opt = {$target: this.$text03,dur: 1.5,delay: 0,blur: 10,blurTarget: 0,ease: Power2.easeOut};
      this.libs.blur(opt);

      TweenMax.to(this.$text03, 1.5, {y: 0,x: '-50%',z:1, opacity:1,ease: Power2.easeOut});

      // img
      var tl = new TimelineMax();

      tl
        .to(this.$bg02, 0.7, {
          z: 1,
          clip:'rect(0px 10px 345px 0px)',
          ease: Expo.easeOut
        })
        .to(this.$bg02, 0.7, {
          z: 1,
          clip:'rect(0px 510px 345px 0px)',
          ease: Expo.easeOut
        },'-=0.1')
        .to(this.$img03, 1.35, {
          x: 0,
          z: 5, 
          clip:'rect(0px 600px 400px 0px)',
          ease: Expo.easeOut
        },'-=0.5')

    };
    if (this.text05ST < this.wrapST && !this.text05STLock) {
      this.text05STLock = true;

      var opt = {$target: this.$text05,dur: 1.5,delay: 0,blur: 10,blurTarget: 0,ease: Power2.easeOut};
      this.libs.blur(opt);

      TweenMax.to(this.$text05, 1.5, {y: 0,z:1, opacity:1,ease: Power2.easeOut});

    };


  }

  onResize() {

    this.setup();

    this.tit01ST = this.$tit01.offset().top - gb.in.r.ws.h/8*5;
    this.tit02ST = this.$tit02.offset().top - gb.in.r.ws.h/8*5;
    this.text02ST = this.$text02.offset().top - gb.in.r.ws.h/8*5;
    this.text03ST = this.$text03.offset().top - gb.in.r.ws.h/8*5;
    this.text04ST = this.$text04.offset().top - gb.in.r.ws.h/8*5;
    this.text05ST = this.$text05.offset().top - gb.in.r.ws.h/8*5;

    if (gb.in.u.isResSP) {
      this.reset();
    };

  }

  onBlur() {

    gb.in.s.STAmount = 0;

  }

  reset() {

    TweenMax.set(this.$wrapper,{y: 0,x: 0})
    // target   
    var self = this; 
    this.$target.each(function (i) {

      TweenMax.set($(this),{y: 0,x: 0})

    });

    var opt = {$target: this.$tit01,dur: 0,delay: 0,blur: 0,blurTarget: 0,ease: Power3.easeIn};
    this.libs.blur(opt);
    var opt = {$target: this.$tit02,dur: 0,delay: 0,blur: 0,blurTarget: 0,ease: Power3.easeIn};
    this.libs.blur(opt);
    var opt = {$target: this.$text02,dur: 0,delay: 0,blur: 0,blurTarget: 0,ease: Power3.easeIn};
    this.libs.blur(opt);
    var opt = {$target: this.$text03,dur: 0,delay: 0,blur: 0,blurTarget: 0,ease: Power3.easeIn};
    this.libs.blur(opt);
    var opt = {$target: this.$text04,dur: 0,delay: 0,blur: 0,blurTarget: 0,ease: Power3.easeIn};
    this.libs.blur(opt);
    var opt = {$target: this.$text05,dur: 0,delay: 0,blur: 0,blurTarget: 0,ease: Power3.easeIn};
    this.libs.blur(opt);

    TweenMax.set(this.$tit01, {y: 0,opacity: 1});
    TweenMax.set(this.$tit02, {y: 0,opacity: 1});
    TweenMax.set(this.$text02, {y: 0,opacity: 1});
    TweenMax.set(this.$text03, {y: 0,opacity: 1});
    TweenMax.set(this.$text04, {y: 0,opacity: 1});
    TweenMax.set(this.$text05, {y: 0,opacity: 1});

  }

  resetInertia() {

    this.$wrapper.removeClass('is-fixed');
    TweenMax.set(this.$wrapper,{y: 0,x: 0})
    $('body').css('height', '100%');

  }

  setEvents() {

    gb.in.up.add('InertiaScroll', this.run.bind(this));
    gb.in.r.add('InertiaScroll', this.onResize.bind(this));
    // $(window).on('blur', this.onBlur.bind(this));
    

  }

}
