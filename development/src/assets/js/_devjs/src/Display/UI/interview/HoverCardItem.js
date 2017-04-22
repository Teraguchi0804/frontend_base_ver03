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

    // �ۥЩ` item
    tl
      // ����Ҫ�ؤ�һ���Ϥ�
      .set($(that), {'z-index': 2})
      // �󤭤�
      .to($(that), 0.7, {
        scale: 1.1,
        ease: Power3.easeOut
      })
      // overlay��Ȥ�
      .to($(that).find('.overlay'), 0.7, {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        ease: Expo.easeOut
      },'-=0.7')
      // box�ڤ�tit������
      .to($(that).find('.titWrap'), 0.7, {
        opacity: 0,
        y: -50,
        ease: Expo.easeOut
      },'-=0.7')
      // rectBg������
      .to($(that).find('.rectBg'), 0.7, {
        opacity: 0,
        ease: Expo.easeOut
      },'-=0.7')

      // tit�����
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
      // tit�����֤����
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

      // tit��readme�����
      .to($(that).find('.titWrap02 .readWrap'), 0.3, {
        height: 50,
        ease: Power4.easeIn
      },'-=0.6')
      .to($(that).find('.titWrap02 .readWrap'), 0.4, {
        width: 170,
        ease: Power4.easeOut
      },'-=0.2')
      // readme�ڥƥ����Ȥ����
      .to($(that).find('.titWrap02 span'), 0.4, {
        x: 0,
        opacity: 1,
        z: 1,
        ease: Power4.easeOut
      },'-=0.2')
      // ʸӡ ��
      .to($(that).find('.titWrap02 .read svg').eq(0), 0.4, {
        x: 0,
        opacity: 1,
        ease: Power4.easeOut
      },'-=0.3')
      // ʸӡ arw
      .to($(that).find('.titWrap02 .read svg').eq(1), 0.4, {
        x: 0,
        opacity: 1,
        ease: Power4.easeOut
      },'-=0.3')

    // �ۥЩ`���줿item����
    // if (this.tlLeave) this.tlLeave.kill();
    tl02
      // �󤭤�
      .to(this.$targets.not($(that)), 0.7, {
        scale: 0.9,
        ease: Power3.easeOut
      })
      // overlay��Ȥ�
      .to(this.$targets.not($(that)).find('.overlay'), 0.7, {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        ease: Power4.easeOut
      },'-=0.7')
      // box�ڤ�tit������
      .to(this.$targets.not($(that)).find('.titWrap'), 0.7, {
        opacity: 0,
        ease: Power4.easeOut
      },'-=0.7')
      // textWrappc��ۥЩ`��аħ�򤷤ʤ��褦���¤���
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
    // �ۥЩ` item
    this.tlLeave
      // ʸӡ arw
      .to($(that).find('.titWrap02 .read svg').eq(0), 0.3, {
        x: -20,
        opacity: 0,
        ease: Power4.easeOut
      })
      // ʸӡ ��
      .to($(that).find('.titWrap02 .read svg').eq(1), 0.3, {
        x: -20,
        opacity: 0,
        ease: Power4.easeOut
      },'-=0.3')
      // readme�ڥƥ����Ȥ����
      .to($(that).find('.titWrap02 span'), 0.4, {
        x: -20,
        opacity: 0,
        ease: Power4.easeOut
      },'-=0.3')

      // tit��readme������
      .to($(that).find('.titWrap02 .readWrap'), 0.4, {
        width: 3,
        ease: Power4.easeOut
      },'-=0.1')
      .to($(that).find('.titWrap02 .readWrap'), 0.4, {
        height: 0,
        ease: Power4.easeOut
      },'-=0.2')

      // tit�����֤�����
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

      // tit������
      .to($(that).find('.titWrap02 .innerWrap'), 0.4, {
        width: 3,
        ease: Power4.easeOut
      },'-=0.4')
      .to($(that).find('.titWrap02 .innerWrap'), 0.3, {
        height: 0,
        ease: Power4.easeOut,
        onStart: ()=>{

          TweenMax.set(this.$target, {'z-index': 1});

          // // �ۥЩ`����Ƥ������Ϥϡ������ǄI���ֹ���
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

          // ����Ƥ��ʤ����ϤϤ�Ȥˑ���
          } else {

            log(2)

            var tl02 = new TimelineMax();
            // �ۥЩ`���줿item����
            tl02
              // �󤭤�
              .to(this.$targets, 0.5, {
                scale: 1,
                ease: Power4.easeOut
              })
              // overlay��Ȥ�
              .to(this.$targets.find('.overlay'), 0.5, {
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                ease: Power4.easeOut
              },'-=0.5')
              // box�ڤ�tit������
              .to(this.$targets.find('.titWrap'), 0.5, {
                opacity: 1,
                y: 0,
                ease: Power4.easeOut
              },'-=0.5')
              // rectbg����
              .to(this.$targets.find('.rectBg'), 0.5, {
                opacity: this.rectBgOp,
                ease: Power4.easeOut,
                onComplete: ()=>{
                  this.setup();
                }
              },'-=0.5')
              // textWrappc��ۥЩ`��аħ�򤷤ʤ��褦���¤���
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