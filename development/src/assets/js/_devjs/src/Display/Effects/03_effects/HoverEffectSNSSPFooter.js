//--------------------------------------------------
//
//  HoverEffectSNSSPFooter
//
//--------------------------------------------------

export default class HoverEffectSNSSPFooter {

  constructor($wrap, $target) {

    this.$wrap = $wrap;
    this.$inner = this.$wrap.find('.inner');
    this.$target = this.$wrap.find('.sns.sp .iconShare');
    this.$bar = this.$wrap.find('.sns.sp .bar');
    this.$list = this.$wrap.find('.sns.sp .list');
    this.$item = this.$wrap.find('.sns.sp .list .item');

    // motion
    this.tl = new TimelineMax();

    this.setEvents();

  }

  setup() {

  }

  ready() {

    // ox
    TweenMax.set(this.$wrap, {width: 0})

    // bar
    TweenMax.set(this.$bar, {width: 0})

    // sns
    TweenMax.set(this.$item, {x: -40, opacity: 0})

    this.$bar.show();
    this.$list.show();

  }

  toggle() {

    if (this.$target.hasClass('on')) {
    this.isOpen = false;

      this.close();

    } else {
    this.isOpen = true;

      this.open();

    };

    this.$target.toggleClass('on');

  }

  open (that) {

    TweenMax.killTweensOf(this.$box);
    TweenMax.killTweensOf(this.$bar);
    TweenMax.killTweensOf(this.$item);

    this.ready();

    // barが伸びる

    var tl = new TimelineMax();


    tl
      // boxが伸びる
      .to(this.$wrap, 0.4, {
        width: 330,
        ease: Power3.easeOut
      })
      .to(this.$bar, 0.3, {
        width: 30,
        ease: Power3.easeOut,
      },'-=0.2')
      .to(this.$item.eq(0), 0.3, {
        x: 0,
        opacity: 1,
        ease: Power4.easeOut
      },'-=0.2')
      .to(this.$item.eq(1), 0.3, {
        x: 0,
        opacity: 1,
        ease: Power4.easeOut
      },'-=0.25')
      .to(this.$item.eq(2), 0.3, {
        x: 0,
        opacity: 1,
        ease: Power4.easeOut
      },'-=0.25')
      .to(this.$item.eq(3), 0.3, {
        x: 0,
        opacity: 1,
        ease: Power4.easeOut
      },'-=0.25')
    
  }

  close (that) {

    TweenMax.killTweensOf(this.$box);
    TweenMax.killTweensOf(this.$bar);
    TweenMax.killTweensOf(this.$item);

    // bar
    var tl = new TimelineMax();

    tl
      .to(this.$item.eq(3), 0.3, {
        x: -40,
        opacity: 0,
        ease: Power4.easeOut,
      })
      .to(this.$item.eq(2), 0.3, {
        x: -40,
        opacity: 0,
        ease: Power4.easeOut,
      },'-=0.25')
      .to(this.$item.eq(1), 0.3, {
        x: -40,
        opacity: 0,
        ease: Power4.easeOut
      },'-=0.25')
      .to(this.$item.eq(0), 0.3, {
        x: -40,
        opacity: 0,
        ease: Power4.easeOut,
        onComplete:()=>{
          this.$list.hide();
        }
      },'-=0.25')
      .to(this.$bar, 0.2, {
        width: 0,
        ease: Power2.easeOut,
        onComplete:()=>{
          this.$bar.hide();
        }
      },'-=0.3')
      .to(this.$wrap, 0.3, {
        width: 0,
        ease: Power3.easeOut,
      },'-=0.3')

  }

  reset() {

    this.close();
    this.$target.off('click');

  }

  setEvents() {

    var self = this;

    this.$target.on('click', this.toggle.bind(this));
 
  }

}