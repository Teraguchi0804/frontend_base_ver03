//--------------------------------------------------
//
//  HoverEffectSVGLogo
//
//--------------------------------------------------

export default class HoverEffectSVGLogo {

  constructor($target) {

    this.$target = $target

    // motion
    this.tl = new TimelineMax();

    // スマホのときは処理しない
    if (gb.in.u.isPC) this.setEvents();

  }

  setup() {

  }

  run() {

  }

  onEnter (that) {

    if (gb.in.u.isResSP) return

    var tl = new TimelineMax();
  
    tl
      .to($(that), 0.5, {
        opacity: 0.3,
        ease: Power4.easeOut
      })
        
  }

  onLeave (that) {

    if (gb.in.u.isResSP) return

    var tl = new TimelineMax();

    tl
      .to($(that), 0.5, {
        opacity: 1,
        ease: Power3.easeOut
      })

  }

  setEvents() {

    var self = this;

    this.$target.each(function(index, el) {

      $(this).on('mouseenter', function(e) {self.onEnter.call(self,this)});
      $(this).on('mouseleave', function(e) {self.onLeave.call(self,this)});
      
    });

  }

  removeEvents() {

    var self = this;

    this.$target.each(function(index, el) {

      $(this).off('mouseenter');
      $(this).off('mouseleave');
      
    });

  }

}