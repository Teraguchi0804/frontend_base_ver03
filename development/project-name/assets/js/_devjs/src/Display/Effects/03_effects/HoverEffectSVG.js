//--------------------------------------------------
//
//  HoverEffectSVG
//
//--------------------------------------------------

export default class HoverEffectSVG {

  constructor($target,hoverColor,defColor) {

    this.$target = $target
    this.hoverColor = hoverColor || '#fff';
    this.defColor = defColor || '#000';

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
      .to($(that).find('path'), 0.4, {
        fill: this.hoverColor,
        ease: Power4.easeOut
      })
        
  }

  onLeave (that) {

    if (gb.in.u.isResSP) return

    var tl = new TimelineMax();
    
    tl
      .to($(that).find('path'), 0.4, {
        fill: this.defColor,
        ease: Power4.easeIn
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