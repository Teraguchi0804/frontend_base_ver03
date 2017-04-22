//--------------------------------------------------
//
//  HoverEffectBack
//
//--------------------------------------------------

export default class HoverEffectBack {

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

    if (this.tl02) this.tl02.kill();
    this.tl01 = new TimelineMax();

    this.tl01
      .to($(that).find('span'), 0.4, {
        x: 20,
        ease: Power4.easeOut
      })
      .to($(that).find('.bar'), 0.4, {
        width: 50,
        ease: Power4.easeOut
      },'-=0.37')
        
  }

  onLeave (that) {

    if (gb.in.u.isResSP) return

    if (this.tl01) this.tl01.kill();
    this.tl02 = new TimelineMax();

    this.tl02
      .to($(that).find('.bar'), 0.5, {
        width: 70,
        ease: Power4.easeOut
      })
      .to($(that).find('span'), 0.5, {
        x: 0,
        ease: Power4.easeOut
      },'-=0.45')

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