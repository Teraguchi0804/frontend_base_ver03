//--------------------------------------------------
//
//  InterviewTopEf
//
//--------------------------------------------------

export default class InterviewTopEf {

  constructor($target) {

    this.$target = $target

    // motion
    this.tl = new TimelineMax();
    this.tlOnLeave = new TimelineMax();
    this.isHover = false;

    this.setup();
    this.setEvents();

  }

  setup() {

    TweenMax.set(this.$target.find('.titWrap02 .innerWrap'), {width: 7,height: 0,});
    TweenMax.set(this.$target.find('.titWrap02 .readWrap'), {width: 3,height: 0,});
    TweenMax.set(this.$target.find('.titWrap02 .position, .titWrap02 .name, .titWrap02 span'), {opacity: 0,x: -20});
    TweenMax.set(this.$target.find('.titWrap02 .read path,.titWrap02 .read rect'), {drawSVG: '0% 100%',fill: 'none',stroke: '#fff'});

  }

  onRunReady($that) {

    TweenMax.killTweensOf($that);
    TweenMax.killTweensOf($that.find('.overlay'));
    TweenMax.killTweensOf($that.find('.titWrap'));
    TweenMax.killTweensOf($that.find('.titWrap02 .innerWrap'));
    TweenMax.killTweensOf($that.find('.titWrap02 .position'));
    TweenMax.killTweensOf($that.find('.titWrap02 .name'));
    TweenMax.killTweensOf($that.find('.titWrap02 .readWrap'));
    TweenMax.killTweensOf($that.find('.titWrap02 span'));
    TweenMax.killTweensOf($that.find('.titWrap02 rect'));
    TweenMax.killTweensOf($that.find('.titWrap02 path'));
    TweenMax.killTweensOf($that.find('.overlay'));

  }

  onEnter(that) {

    var tl = new TimelineMax();
    var tl02 = new TimelineMax();

    this.onRunReady($(that));

    this.isHover = true;
    this.tlOnLeave.kill();

    // ホバー item
    tl
      // この要素を一番上に
      .set($(that), {'z-index': 2})
      // 大きく
      .to($(that), 0.7, {
        scale: 1.1,
        ease: Power3.easeOut
      })
      // overlayをとる
      .to($(that).find('.overlay'), 0.7, {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        ease: Power4.easeOut
      },'-=0.7')
      // box内のtitを消す
      .to($(that).find('.titWrap'), 0.7, {
        opacity: 0,
        y: -50,
        ease: Power4.easeOut
      },'-=0.7')
      // rectBgを消す
      .to($(that).find('.rectBg'), 0.7, {
        opacity: 0,
        ease: Power4.easeOut
      },'-=0.7')

      // titを出す
      .to($(that).find('.titWrap02 .innerWrap'), 0.4, {
        height: 116,
        ease: Power3.easeOut
      },'-=0.4')
      .to($(that).find('.titWrap02 .innerWrap'), 0.7, {
        width: 300,
        ease: Power4.easeInOut
      },'-=0.1')
      // tit内文字を出す
      .to($(that).find('.titWrap02 .position'), 0.4, {
        x: 0,
        opacity: 1,
        ease: Power4.easeOut
      },'-=0.5')
      .to($(that).find('.titWrap02 .name'), 0.4, {
        x: 0,
        opacity: 1,
        ease: Power4.easeOut
      },'-=0.3')
      // tit内readmeを出す
      .to($(that).find('.titWrap02 .readWrap'), 0.3, {
        height: 50,
        ease: Power4.easeOut
      },'-=0.8')
      .to($(that).find('.titWrap02 .readWrap'), 0.5, {
        width: 170,
        ease: Power4.easeInOut
      },'-=0.5')
      // readme内テキストを出す
      .to($(that).find('.titWrap02 span'), 0.4, {
        x: 0,
        opacity: 1,
        ease: Power4.easeOut
      },'-=0.5')
      // 矢印 線
      .to($(that).find('.titWrap02 rect'), 0.4, {
        drawSVG: '0% 100%',
        ease: Power4.easeOut
      },'-=0.3')
      // 矢印 arw
      .to($(that).find('.titWrap02 path'), 0.4, {
        drawSVG: '0% 100%',
        fill: '#fff',
        ease: Power4.easeOut
      },'-=0.3')

    // ホバーされたitem以外
    tl02
      // 大きく
      .to(this.$target.not($(that)), 0.7, {
        scale: 0.9,
        ease: Power3.easeOut
      })
      // overlayをとる
      .to(this.$target.not($(that)).find('.overlay'), 0.7, {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        ease: Power4.easeOut
      },'-=0.7')
      // box内のtitを消す
      .to(this.$target.not($(that)).find('.titWrap'), 0.7, {
        opacity: 0,
        ease: Power4.easeOut
      },'-=0.7')
      // textWrappcをホバーの邪魔をしないように下げる
      .to($('.textWrap_pc'), 1.0, {
        opacity: 0.8,
        top: 'calc(50% + 240px)',
        ease: Power2.easeOut
      },'-=0.7')
    

  }

  onLeave(that) {

    this.isHover = false;

    // this.onRunReady($(that));

    // ホバー item
    this.tlOnLeave
      .set(this.$target, {'z-index': 1})
      // 矢印 arw
      .to($(that).find('.titWrap02 path'), 0.3, {
        drawSVG: '0% 0%',
        fill: 'none',
        ease: Power4.easeOut
      })
      // 矢印 線
      .to($(that).find('.titWrap02 rect'), 0.3, {
        drawSVG: '0% 0%',
        ease: Power4.easeOut
      },'-=0.3')
      // readme内テキストを出す
      .to($(that).find('.titWrap02 span'), 0.4, {
        x: -20,
        opacity: 0,
        ease: Power4.easeOut
      },'-=0.3')

      // tit内readmeを消す
      .to($(that).find('.titWrap02 .readWrap'), 0.4, {
        width: 3,
        ease: Power4.easeOut
      },'-=0.5')
      .to($(that).find('.titWrap02 .readWrap'), 0.4, {
        height: 0,
        ease: Power4.easeOut
      },'-=0.05')

      // tit内文字を消す
      .to($(that).find('.titWrap02 .name'), 0.3, {
        x: -20,
        opacity: 0,
        ease: Power4.easeOut
      },'-=0.2')
      .to($(that).find('.titWrap02 .position'), 0.3, {
        x: -20,
        opacity: 0,
        ease: Power4.easeOut
      },'-=0.3')

      // titを消す
      .to($(that).find('.titWrap02 .innerWrap'), 0.4, {
        width: 7,
        ease: Power4.easeOut
      },'-=0.4')
      .to($(that).find('.titWrap02 .innerWrap'), 0.3, {
        height: 0,
        ease: Power4.easeOut
      },'-=0.05')

      // 大きく
      .to($(that), 0.5, {
        scale: 1.0,
        ease: Power4.easeOut,
        onStart: ()=>{

          if (this.isHover) {

            var tl03 = new TimelineMax();

            // 大きく
            tl03
              .to($(that), 0.7, {
                scale: 0.9,
                ease: Power3.easeOut
              })
              // overlayをとる
              .to($(that).find('.overlay'), 0.7, {
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                ease: Power4.easeOut
              },'-=0.7')
              // box内のtitを消す
              .to($(that).find('.titWrap'), 0.7, {
                opacity: 0,
                ease: Power4.easeOut
              },'-=0.7')

            return;

          }

          var tl02 = new TimelineMax();
          // ホバーされたitem以外
          tl02
            // 大きく
            .to(this.$target.not($(that)), 0.5, {
              scale: 1,
              ease: Power4.easeOut
            })
            // overlayをとる
            .to(this.$target.not($(that)).find('.overlay'), 0.5, {
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
              ease: Power4.easeOut
            },'-=0.5')
            // box内のtitを消す
            .to(this.$target.not($(that)).find('.titWrap'), 0.5, {
              opacity: 1,
              ease: Power4.easeOut
            },'-=0.5')
            // textWrappcをホバーの邪魔をしないように下げる
            .to($('.textWrap_pc'), 1.0, {
              opacity: 1,
              top: 'calc(50% + 170px)',
              ease: Power2.easeOut
            },'-=0.7')

        }
      },'-=0.3')
      // overlayをとる
      .to($(that).find('.overlay'), 0.5, {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        ease: Power4.easeOut
      },'-=0.5')
      // box内のtitを消す
      .to($(that).find('.titWrap'), 0.5, {
        opacity: 1,
        y: 0,
        ease: Power4.easeOut,
      },'-=0.5')
      // rectbg戻す
      .to($(that).find('.rectBg'), 0.5, {
        opacity: 1,
        ease: Power4.easeOut
      },'-=0.5')

  }

  setEvents() {

    var self = this;

    this.$target.each(function(index, el) {

      if (index==2) return;

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