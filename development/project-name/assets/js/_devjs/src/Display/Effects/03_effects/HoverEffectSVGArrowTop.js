//--------------------------------------------------
//
//  HoverEffectSVGArrowTop
//
//--------------------------------------------------

export default class HoverEffectSVGArrowTop {

  constructor($target) {

    this.$target = $target

    // motion
    this.tl = new TimelineMax();

    this.setup();

    this.isHover = false;

    // スマホのときは処理しない
    if (gb.in.u.isPC) this.setEvents();

  }

  setup() {


  }

  run() {

  }

  onEnter (that) {

    if (this.autoTL) {
      this.autoTL.kill();
      this.autoTL = null;
    }
    if (this.tl02) this.tl02.kill();
    this.tl01 = new TimelineMax();

    this.tl01
        // 矢印を下に下げる
        .to($(that).find('.arrow.pc'), 0.4, {
          scaleY: 0.65,
          y: 8,
          opacity: 1,
          z: 1,
          'transform-origin': '50% 100%',
          ease: Power4.easeOut
        })
        // 文字を下に下げる
        .to($(that).find('.text'), 0.4, {
          y: 30,
          opacity: 1,
          z: 1,
          ease: Power4.easeOut
        },'-=0.37')
        
  }

  onLeave (that) {

    if (this.tl01) this.tl01.kill();
    this.tl02 = new TimelineMax();

    this.tl02
      // 文字を下に下げる
      .to($(that).find('.text'), 0.5, {
        y: 0,
        z: 1,
        ease: Power2.easeInOut
      })
      // 矢印を下に下げる
      .to($(that).find('.arrow.pc'), 0.5, {
        scaleY: 1,
        y: 0,
        z: 1,
        'transform-origin': '50% 100%',
        ease: Power2.easeInOut,
        onComplete: ()=>{

          if (this.autoTL == null) this.autoArrow();          

        }
      },'-=0.45')

  }

  autoArrow() {

    this.autoTL = new TimelineMax({repeat: -1});

    this.autoTL
      .to(this.$target.find('.arrow.pc'), 0.6, {
        y: 60,
        opacity: 0,
        delay: 5.0,
        scaleY: 0.3,
        'transform-origin': '50% 100%',
        ease: Power4.easeOut
      })
      .set(this.$target.find('.arrow.pc'), {scaleY: 1,y: -60})
      .to(this.$target.find('.arrow.pc'), 0.5, {
        scaleY: 1,
        y: 0,
        opacity: 1,
        delay: 0.3,
        'transform-origin': '50% 100%',
        ease: Power4.easeOut
      })

  }

  setupFirst() {

    TweenMax.set($('.section01 .next .text'), {y: -60,opacity:0,z: 1,});
    TweenMax.set($('.section01 .next svg'), {y: -30,opacity:0,z: 1,});

  }

  runFirst() {

    var tl = new TimelineMax();

        // 文字を下に下げる
      tl.to($('.section01 .next .text'), 1.5, {
          y: 0,
          opacity: 1,
          z: 1,
          ease: Power2.easeOut
        })
        .to($('.section01 .next svg'), 1.0, {
          y: 0,
          opacity: 1,
          z: 1,
          ease: Power2.easeOut
        },'-=0.82')

  }

  setEvents() {

    var self = this;

    this.$target.each(function(index, el) {

      $(this).on('mouseenter', function(e) {self.onEnter.call(self,this)});
      $(this).on('mouseleave', function(e) {self.onLeave.call(self,this)});
      
    });

  }

}