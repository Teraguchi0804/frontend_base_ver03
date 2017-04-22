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
        ease: Power4.easeOut
      },'-=0.7')
      // box�ڤ�tit������
      .to($(that).find('.titWrap'), 0.7, {
        opacity: 0,
        y: -50,
        ease: Power4.easeOut
      },'-=0.7')
      // rectBg������
      .to($(that).find('.rectBg'), 0.7, {
        opacity: 0,
        ease: Power4.easeOut
      },'-=0.7')

      // tit�����
      .to($(that).find('.titWrap02 .innerWrap'), 0.4, {
        height: 116,
        ease: Power3.easeOut
      },'-=0.4')
      .to($(that).find('.titWrap02 .innerWrap'), 0.7, {
        width: 300,
        ease: Power4.easeInOut
      },'-=0.1')
      // tit�����֤����
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
      // tit��readme�����
      .to($(that).find('.titWrap02 .readWrap'), 0.3, {
        height: 50,
        ease: Power4.easeOut
      },'-=0.8')
      .to($(that).find('.titWrap02 .readWrap'), 0.5, {
        width: 170,
        ease: Power4.easeInOut
      },'-=0.5')
      // readme�ڥƥ����Ȥ����
      .to($(that).find('.titWrap02 span'), 0.4, {
        x: 0,
        opacity: 1,
        ease: Power4.easeOut
      },'-=0.5')
      // ʸӡ ��
      .to($(that).find('.titWrap02 rect'), 0.4, {
        drawSVG: '0% 100%',
        ease: Power4.easeOut
      },'-=0.3')
      // ʸӡ arw
      .to($(that).find('.titWrap02 path'), 0.4, {
        drawSVG: '0% 100%',
        fill: '#fff',
        ease: Power4.easeOut
      },'-=0.3')

    // �ۥЩ`���줿item����
    tl02
      // �󤭤�
      .to(this.$target.not($(that)), 0.7, {
        scale: 0.9,
        ease: Power3.easeOut
      })
      // overlay��Ȥ�
      .to(this.$target.not($(that)).find('.overlay'), 0.7, {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        ease: Power4.easeOut
      },'-=0.7')
      // box�ڤ�tit������
      .to(this.$target.not($(that)).find('.titWrap'), 0.7, {
        opacity: 0,
        ease: Power4.easeOut
      },'-=0.7')
      // textWrappc��ۥЩ`��аħ�򤷤ʤ��褦���¤���
      .to($('.textWrap_pc'), 1.0, {
        opacity: 0.8,
        top: 'calc(50% + 240px)',
        ease: Power2.easeOut
      },'-=0.7')
    

  }

  onLeave(that) {

    this.isHover = false;

    // this.onRunReady($(that));

    // �ۥЩ` item
    this.tlOnLeave
      .set(this.$target, {'z-index': 1})
      // ʸӡ arw
      .to($(that).find('.titWrap02 path'), 0.3, {
        drawSVG: '0% 0%',
        fill: 'none',
        ease: Power4.easeOut
      })
      // ʸӡ ��
      .to($(that).find('.titWrap02 rect'), 0.3, {
        drawSVG: '0% 0%',
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
      },'-=0.5')
      .to($(that).find('.titWrap02 .readWrap'), 0.4, {
        height: 0,
        ease: Power4.easeOut
      },'-=0.05')

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
        width: 7,
        ease: Power4.easeOut
      },'-=0.4')
      .to($(that).find('.titWrap02 .innerWrap'), 0.3, {
        height: 0,
        ease: Power4.easeOut
      },'-=0.05')

      // �󤭤�
      .to($(that), 0.5, {
        scale: 1.0,
        ease: Power4.easeOut,
        onStart: ()=>{

          if (this.isHover) {

            var tl03 = new TimelineMax();

            // �󤭤�
            tl03
              .to($(that), 0.7, {
                scale: 0.9,
                ease: Power3.easeOut
              })
              // overlay��Ȥ�
              .to($(that).find('.overlay'), 0.7, {
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                ease: Power4.easeOut
              },'-=0.7')
              // box�ڤ�tit������
              .to($(that).find('.titWrap'), 0.7, {
                opacity: 0,
                ease: Power4.easeOut
              },'-=0.7')

            return;

          }

          var tl02 = new TimelineMax();
          // �ۥЩ`���줿item����
          tl02
            // �󤭤�
            .to(this.$target.not($(that)), 0.5, {
              scale: 1,
              ease: Power4.easeOut
            })
            // overlay��Ȥ�
            .to(this.$target.not($(that)).find('.overlay'), 0.5, {
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
              ease: Power4.easeOut
            },'-=0.5')
            // box�ڤ�tit������
            .to(this.$target.not($(that)).find('.titWrap'), 0.5, {
              opacity: 1,
              ease: Power4.easeOut
            },'-=0.5')
            // textWrappc��ۥЩ`��аħ�򤷤ʤ��褦���¤���
            .to($('.textWrap_pc'), 1.0, {
              opacity: 1,
              top: 'calc(50% + 170px)',
              ease: Power2.easeOut
            },'-=0.7')

        }
      },'-=0.3')
      // overlay��Ȥ�
      .to($(that).find('.overlay'), 0.5, {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        ease: Power4.easeOut
      },'-=0.5')
      // box�ڤ�tit������
      .to($(that).find('.titWrap'), 0.5, {
        opacity: 1,
        y: 0,
        ease: Power4.easeOut,
      },'-=0.5')
      // rectbg����
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