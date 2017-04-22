//--------------------------------------------------
//
//  HoverEffectDetailsBtm
//
//--------------------------------------------------

export default class HoverEffectDetailsBtm {

  constructor($wrap) {

    this.$wrap = $wrap

    // motion
    this.tl = new TimelineMax();

    this.setEvents();

  }

  setup() {

  }

  run() {

  }

  onEnter (that) {

    log('enter')

    if (gb.in.u.isResSP) return;

    var tl = new TimelineMax();

    TweenMax.killTweensOf($(that).find('img'));
    TweenMax.killTweensOf($(that).find('.bgOverlay'));

    // img
    tl
      .to($(that).find('.bgOverlay'), 1.2, {
        opacity: 0,
        ease: Expo.easeOut
      })

    // overlay
    TweenMax.to($(that).find('img'), 1.2, {
      scale: 1.1,
      ease: Expo.easeOut
    })
        
  }

  onLeave (that) {

    log('leave');

    if (gb.in.u.isResSP) return;

    var tl02 = new TimelineMax();

    // TweenMax.killTweensOf($(that).find('img'));
    // TweenMax.killTweensOf($(that).find('.bgOverlay'));

    tl02
      .to($(that).find('img'), 1.0, {
        scale: 1,
        ease: Power4.easeOut
      })
      .to($(that).find('.bgOverlay'), 1.0, {
        opacity: 1,
        ease: Power4.easeOut
      },'-=0.8')

  }

  setEvents() {

    var self = this;

    this.$wrap.on('mouseenter', function(e) {self.onEnter.call(self,this)});
    this.$wrap.on('mouseleave', function(e) {self.onLeave.call(self,this)});

  }

}