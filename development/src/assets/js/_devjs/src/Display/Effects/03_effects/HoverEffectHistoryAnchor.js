//--------------------------------------------------
//
//  HoverEffectHistoryEffect
//
//--------------------------------------------------

export default class HoverEffectHistoryEffect {

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

    if (gb.in.u.isResSP) return;

    $(that).addClass('isHover');
        
  }

  onLeave (that) {

    if (gb.in.u.isResSP) return;

    $(that).removeClass('isHover');

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