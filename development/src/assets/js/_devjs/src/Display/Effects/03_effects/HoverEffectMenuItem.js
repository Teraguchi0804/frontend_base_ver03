//--------------------------------------------------
//
//  HoverEffectMenuItem
//
//--------------------------------------------------

export default class HoverEffectMenuItem {

  constructor($target) {

    this.$target = $target

    // motion
    this.tl = new TimelineMax();

    this.setEvents();

  }

  setup() {

  }

  run() {

  }

  onEnter (that) {

    var w = $(that).find('.cover span').width();

    TweenMax.killTweensOf($(that).find('.cover'));
    TweenMax.killTweensOf($(that).find('.bar'));

    // cover 文字
    var tl = new TimelineMax();
    tl
      .set($(that).find('.cover'), {
        opacity: 0,
      })
      .to($(that).find('.cover'), 0.5, {
        width: w,
        opacity: 1,
        ease: Power4.easeOut
      })
    
    // bar
    var tl = new TimelineMax();

    tl
      .to($(that).find('.bar'), 0.3, {
        left: '0%',
        ease: Power3.easeOut
      })
      .to($(that).find('.bar'), 0.5, {
        width: w,
        ease: Expo.easeOut
      },'-=0.1')
    
  }

  onLeave (that) {

    TweenMax.killTweensOf($(that).find('.cover'));
    TweenMax.killTweensOf($(that).find('.bar'));

    // cover 文字
    TweenMax.to($(that).find('.cover'), 0.5, {
      width: 0,
      ease: Power4.easeOut
    })
    
    // bar
    var tl = new TimelineMax();

    tl
      .to($(that).find('.bar'), 0.3, {
        width: '100%',
        ease: Power3.easeOut
      })
      .to($(that).find('.bar'), 0.5, {
        left: '100%',
        ease: Expo.easeOut
      },'-=0.1')    

  }

  setEvents() {

    var self = this;

    this.$target.each(function(index, el) {

      $(this).on('mouseenter', function(e) {self.onEnter.call(self,this)});
      $(this).on('mouseleave', function(e) {self.onLeave.call(self,this)});
      
    });

  }

}