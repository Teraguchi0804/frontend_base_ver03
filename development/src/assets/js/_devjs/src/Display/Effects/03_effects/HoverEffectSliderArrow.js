//--------------------------------------------------
//
//  HoverEffectSliderArrow
//
//--------------------------------------------------

export default class HoverEffectSliderArrow {

  constructor($target,str) {

    this.$target = $target

    // motion
    this.tl = new TimelineMax();
    this.str = str;

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

    if (this.str == 'right') {

      this.tl01
          // 矢印を下に下げる
          .to($(that), 0.4, {
            scaleX: 0.78,
            x: 8,
            z: 1,
            'transform-origin': '100% 50%',
            ease: Power4.easeOut
          })

    } else {

      this.tl01
          // 矢印を下に下げる
          .to($(that), 0.4, {
            scaleX: 0.78,
            x: -8,
            z: 1,
            rotationZ: 180,
            'transform-origin': '100% 50%',
            ease: Power4.easeOut
          })

    }
        
  }

  onLeave (that) {

    this.isHover = false;

    if (this.tl01) this.tl01.kill();
    this.tl02 = new TimelineMax();

    if (this.str == 'right') {

      this.tl02
          // 矢印を下に下げる
          .to($(that), 0.4, {
            scaleX: 1,
            x: 0,
            z: 1,
            'transform-origin': '100% 50%',
            ease: Power4.easeOut
          })

    } else {

      this.tl02
          // 矢印を下に下げる
          .to($(that), 0.4, {
            scaleX: 1,
            x: 0,
            z: 1,
            rotationZ: 180,
            'transform-origin': '100% 50%',
            ease: Power4.easeOut
          })

    }

  }

  setEvents() {

    var self = this;

    this.$target.each(function(index, el) {

      $(this).on('mouseenter', function(e) {self.onEnter.call(self,this)});
      $(this).on('mouseleave', function(e) {self.onLeave.call(self,this)});
      
    });

  }

}