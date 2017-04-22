//--------------------------------------------------
//
//  HoverEffectMoviePlay
//
//--------------------------------------------------

export default class HoverEffectMoviePlay {

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
      .set($(that), {opacity: 1})
      .to($(that), 1.0, {
        opacity: 0,
        ease: Power4.easeOut,
      })
        
  }

  onLeave (that) {

    if (gb.in.u.isResSP) return

    var tl = new TimelineMax();
    
    // tl
    //   .set($(that),{opacity: 0})

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