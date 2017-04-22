//--------------------------------------------------
//
//  HoverEffectSVGArrow
//
//--------------------------------------------------

export default class HoverEffectSVGArrow {

  constructor($target) {

    this.$target = $target

    // motion
    this.tl = new TimelineMax();

    this.setup();

    // スマホのときは処理しない
    if (gb.in.u.isPC) this.setEvents();

  }

  setup() {

    TweenMax.set(this.$target.find('path'), {drawSVG: '0% 100%',fill: 'none',stroke: '#000'});    

  }

  run() {

  }

  onEnter (that) {

    var tl = new TimelineMax();
    var dir = $(that).data('dir');

    // 上方向
    if (dir == 'top') {

      tl
        .to($(that).find('path'), 0.9, {
          drawSVG: '0% 30%',
          ease: Power2.easeOut
        })
        .to($(that), 0.9, {
          y: -20,
          ease: Power2.easeOut
        },'-=0.9')

    // 右方向
    } else if (dir == 'right') {

      tl
        .to($(that).find('path'), 0.9, {
          drawSVG: '0% 30%',
          ease: Power2.easeOut
        })
        .to($(that), 0.9, {
          x: 20,
          ease: Power2.easeOut
        },'-=0.9')

    // 下方向
    } else if (dir == 'bottom') {

      tl
        .to($(that).find('path'), 0.9, {
          drawSVG: '0% 30%',
          ease: Power2.easeOut
        })
        .to($(that), 0.9, {
          y: 20,
          ease: Power2.easeOut
        },'-=0.9')

    // 左方向
    } else if (dir == 'left') {

      tl
        .to($(that).find('path'), 0.9, {
          drawSVG: '0% 30%',
          ease: Power2.easeOut
        })
        .to($(that), 0.9, {
          x: -20,
          ease: Power2.easeOut
        },'-=0.9')

    } else {

    }
        
  }

  onLeave (that) {

    var tl = new TimelineMax();
    var dir = $(that).data('dir');

    // 上方向
    if (dir == 'top') {

      tl
        .to($(that).find('path'), 0.9, {
          drawSVG: '0% 100%',
          ease: Power2.easeOut
        })
        .to($(that), 0.9, {
          y: 0,
          ease: Power2.easeOut
        },'-=0.9')

    // 右方向
    } else if (dir == 'right') {

      tl
        .to($(that).find('path'), 0.9, {
          drawSVG: '0% 100%',
          ease: Power2.easeOut
        })
        .to($(that), 0.9, {
          x: 0,
          ease: Power2.easeOut
        },'-=0.9')

    // 下方向
    } else if (dir == 'bottom') {

      tl
        .to($(that).find('path'), 0.9, {
          drawSVG: '0% 100%',
          ease: Power2.easeOut
        })
        .to($(that), 0.9, {
          y: 0,
          ease: Power2.easeOut
        },'-=0.9')

    // 左方向
    } else if (dir == 'left') {

      tl
        .to($(that).find('path'), 0.9, {
          drawSVG: '0% 100%',
          ease: Power2.easeOut
        })
        .to($(that), 0.9, {
          x: 0,
          ease: Power2.easeOut
        },'-=0.9')

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