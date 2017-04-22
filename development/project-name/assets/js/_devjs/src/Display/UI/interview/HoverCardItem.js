//--------------------------------------------------
//
//  HoverCardItem
//
//--------------------------------------------------

export default class HoverCardItem {

  constructor($target) {

    this.$target = $target

    this.$targets = $('#bgWrap .sec03 .block .item');

    // motion
    this.tl = new TimelineMax();

    this.tlOnLeave = new TimelineMax();

    this.rectBgOp = (gb.in.u.isIE)? 0.35: 1;

    this.setup();
    this.setEvents();

  }

  setup() {

    TweenMax.set(this.$target.find('.titWrap02 .innerWrap'), {width: 3,height: 0,});
    TweenMax.set(this.$target.find('.titWrap02 .readWrap'), {width: 3,height: 0,});
    TweenMax.set(this.$target.find('.titWrap02 .position, .titWrap02 .name, .titWrap02 span'), {opacity: 0,x: -20});
    // TweenMax.set(this.$target.find('.titWrap02 .read path,.titWrap02 .read rect'), {drawSVG: '0% 100%',fill: 'none',stroke: '#fff'});
    TweenMax.set(this.$target.find('.titWrap02 .read svg'), {opacity: 0,x: -20});

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

    gb.in.interviewCardHover = true;

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
        ease: Expo.easeOut
      },'-=0.7')
      // box内のtitを消す
      .to($(that).find('.titWrap'), 0.7, {
        opacity: 0,
        y: -50,
        ease: Expo.easeOut
      },'-=0.7')
      // rectBgを消す
      .to($(that).find('.rectBg'), 0.7, {
        opacity: 0,
        ease: Expo.easeOut
      },'-=0.7')

      // titを出す
      .to($(that).find('.titWrap02 .innerWrap'), 0.3, {
        height: 116,
        ease: Power4.easeIn,
        onStart: ()=>{
          // var tl03 = new TimelineMax();
          // tl03.to($(that).find('.titWrap02'), .04, {opacity:1, ease:Quad.easeIn})
          //   .to($(that).find('.titWrap02'), .04, {opacity:0, ease:Quad.easeOut})
          //   .to($(that).find('.titWrap02'), .04, {opacity:1, ease:Quad.easeOut})
          //   .to($(that).find('.titWrap02'), .04, {opacity:0, ease:Quad.easeOut})
          //   .to($(that).find('.titWrap02'), .3, {opacity:1, ease:Quad.easeOut});
        }
      },'-=0.4')
      .to($(that).find('.titWrap02 .innerWrap'), 0.6, {
        width: 300,
        ease: Power4.easeOut
      },'-=0.1')
      // tit内文字を出す
      .to($(that).find('.titWrap02 .position'), 0.4, {
        x: 0,
        opacity: 1,
        z: 1,
        ease: Power4.easeOut
      },'-=0.3')
      .to($(that).find('.titWrap02 .name'), 0.4, {
        x: 0,
        opacity: 1,
        z: 1,
        ease: Power4.easeOut
      },'-=0.3')

      // tit内readmeを出す
      .to($(that).find('.titWrap02 .readWrap'), 0.3, {
        height: 50,
        ease: Power4.easeIn
      },'-=0.6')
      .to($(that).find('.titWrap02 .readWrap'), 0.4, {
        width: 170,
        ease: Power4.easeOut
      },'-=0.2')
      // readme内テキストを出す
      .to($(that).find('.titWrap02 span'), 0.4, {
        x: 0,
        opacity: 1,
        z: 1,
        ease: Power4.easeOut
      },'-=0.2')
      // 矢印 線
      .to($(that).find('.titWrap02 .read svg').eq(0), 0.4, {
        x: 0,
        opacity: 1,
        ease: Power4.easeOut
      },'-=0.3')
      // 矢印 arw
      .to($(that).find('.titWrap02 .read svg').eq(1), 0.4, {
        x: 0,
        opacity: 1,
        ease: Power4.easeOut
      },'-=0.3')

    // ホバーされたitem以外
    // if (this.tlLeave) this.tlLeave.kill();
    tl02
      // 大きく
      .to(this.$targets.not($(that)), 0.7, {
        scale: 0.9,
        ease: Power3.easeOut
      })
      // overlayをとる
      .to(this.$targets.not($(that)).find('.overlay'), 0.7, {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        ease: Power4.easeOut
      },'-=0.7')
      // box内のtitを消す
      .to(this.$targets.not($(that)).find('.titWrap'), 0.7, {
        opacity: 0,
        ease: Power4.easeOut
      },'-=0.7')
      // textWrappcをホバーの邪魔をしないように下げる
      .to($('.textWrap_pc'), 0.7, {
        opacity: 0.8,
        top: 'calc(50% + 240px)',
        ease: Power4.easeOut
      },'-=0.7')

  }

  onLeave(that) {

    gb.in.interviewCardHover = false;

    // this.onRunReady($(that));

    // var tl = new TimelineMax();
    this.tlLeave = new TimelineMax();
    // ホバー item
    this.tlLeave
      // 矢印 arw
      .to($(that).find('.titWrap02 .read svg').eq(0), 0.3, {
        x: -20,
        opacity: 0,
        ease: Power4.easeOut
      })
      // 矢印 線
      .to($(that).find('.titWrap02 .read svg').eq(1), 0.3, {
        x: -20,
        opacity: 0,
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
      },'-=0.1')
      .to($(that).find('.titWrap02 .readWrap'), 0.4, {
        height: 0,
        ease: Power4.easeOut
      },'-=0.2')

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
        width: 3,
        ease: Power4.easeOut
      },'-=0.4')
      .to($(that).find('.titWrap02 .innerWrap'), 0.3, {
        height: 0,
        ease: Power4.easeOut,
        onStart: ()=>{

          TweenMax.set(this.$target, {'z-index': 1});

          // // ホバーされていた場合は、ここで処理を止める
          if (gb.in.interviewCardHover) {

            log(1)

            this.tlLeave.pause();

            var tl03 = new TimelineMax();

            tl03.to($(that).find('.titWrap02 .innerWrap'), 0.2, {
                width: 3,
                ease: Power4.easeOut
              })
              .to($(that).find('.titWrap02 .innerWrap'), 0.2, {
              height: 0,
              ease: Power4.easeOut,
              onComplete: ()=>{
                this.setup();
              }
            },'-=0.1')

            TweenMax.set($(that).find('.titWrap'), {
              opacity: 0,
              y: -50,
            })

          // されていない場合はもとに戻す
          } else {

            log(2)

            var tl02 = new TimelineMax();
            // ホバーされたitem以外
            tl02
              // 大きく
              .to(this.$targets, 0.5, {
                scale: 1,
                ease: Power4.easeOut
              })
              // overlayをとる
              .to(this.$targets.find('.overlay'), 0.5, {
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                ease: Power4.easeOut
              },'-=0.5')
              // box内のtitを消す
              .to(this.$targets.find('.titWrap'), 0.5, {
                opacity: 1,
                y: 0,
                ease: Power4.easeOut
              },'-=0.5')
              // rectbg戻す
              .to(this.$targets.find('.rectBg'), 0.5, {
                opacity: this.rectBgOp,
                ease: Power4.easeOut,
                onComplete: ()=>{
                  this.setup();
                }
              },'-=0.5')
              // textWrappcをホバーの邪魔をしないように下げる
              .to($('.textWrap_pc'), 0.5, {
                opacity: 1,
                top: 'calc(50% + 170px)',
                ease: Power4.easeOut
              },'-=0.5')

          }

        }
      },'-=0.2')

  }

  setEvents() {

    var self = this;

    this.$target.on('mouseenter', function(e) {self.onEnter.call(self,this)});
    this.$target.on('mouseleave', function(e) {self.onLeave.call(self,this)});

  }

  removeEvents() {

    this.$target.off('mouseenter');
    this.$target.off('mouseleave');
      
  }
  
}