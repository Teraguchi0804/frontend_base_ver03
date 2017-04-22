//--------------------------------------------------
//
//  HoverEffectMenuBtn
//
//--------------------------------------------------

export default class HoverEffectMenuBtn {

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

    // メニューが開いているときは処理しない
    if (gb.in.menu.isOpen) return

    var $bar01 = $(that).find('.top');
    var $bar02 = $(that).find('.middle');
    var $bar03 = $(that).find('.bottom');

    // cover 文字
    var tl01 = new TimelineMax();

    tl01
      .set($bar01, {
        width: 0,
      })
      .to($bar01, 0.3, {
        width: 30,
        ease: Power2.easeInOut,
        delay: 0.15
      })

    var tl02 = new TimelineMax();

    tl02
      .set($bar02, {
        width: 0,
      })
      .to($bar02, 0.3, {
        width: 30,
        ease: Power2.easeInOut,
        delay: 0.1
      })

    var tl03 = new TimelineMax();

    tl03
      .set($bar03, {
        width: 0,
      })
      .to($bar03, 0.3, {
        width: 30,
        ease: Power2.easeInOut,
        delay: 0.2
      })
    
  }

  onLeave (that) {

    // var $bar01 = $(that).find('.top');
    // var $bar02 = $(that).find('.middle');
    // var $bar03 = $(that).find('.bottom');

    // // cover 文字
    // var tl = new TimelineMax();

    // tl
    //   .to($bar01, 0.5, {
    //     width: 30,
    //     'margin-left': -15,
    //     ease: Power4.easeOut,
    //     delay: 0.1,
    //   })

    // var tl = new TimelineMax();

    // tl
    //   .to($bar02, 0.5, {
    //     width: 30,
    //     'margin-left': -15,
    //     ease: Power4.easeOut,
    //   })

    // var tl = new TimelineMax();

    // tl
    //   .to($bar03, 0.5, {
    //     width: 30,
    //     'margin-left': -15,
    //     ease: Power4.easeOut,
    //     delay: 0.15,
    //   })

  }

  setEvents() {

    var self = this;

    this.$target.each(function(index, el) {

      $(this).on('mouseenter', function(e) {self.onEnter.call(self,this)});
      $(this).on('mouseleave', function(e) {self.onLeave.call(self,this)});
      
    });

  }

}