//--------------------------------------------------
//
//  HoverEffectSVGArrowSideR
//
//--------------------------------------------------

export default class HoverEffectSVGArrowSideR {

  constructor($target) {

    this.$target = $target

    // motion
    this.tl = new TimelineMax();

    this.setup();
    // this.autoArrow();

    this.isHover = false;

    // スマホのときは処理しない
    if (gb.in.u.isPC) this.setEvents();

  }

  setup() {


  }

  run() {

  }

  onEnter (that) {

    this.isHover = true;

    if (this.tl02) this.tl02.kill();
    this.tl01 = new TimelineMax();

    this.tl01
        // 矢印を下に下げる
        .to($(that).find('.arrow.pc'), 0.4, {
          scaleY: 0.65,
          y: 8,
          z: 1,
          'transform-origin': '50% 100%',
          ease: Power4.easeOut
        })
        // 文字を下に下げる
        .to($(that).find('.text'), 0.4, {
          y: 30,
          z: 1,
          ease: Power4.easeOut
        },'-=0.37')
        
  }

  onLeave (that) {

    this.isHover = false;

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
        ease: Power2.easeInOut
      },'-=0.45')

  }

  setEvents() {

    var self = this;

    this.$target.each(function(index, el) {

      $(this).on('mouseenter', function(e) {self.onEnter.call(self,this)});
      $(this).on('mouseleave', function(e) {self.onLeave.call(self,this)});
      
    });

  }

}