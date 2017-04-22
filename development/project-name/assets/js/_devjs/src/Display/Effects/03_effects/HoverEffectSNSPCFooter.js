//--------------------------------------------------
//
//  HoverEffectSNSPCFooter
//
//--------------------------------------------------

export default class HoverEffectSNSPCFooter {

  constructor($wrap, $target) {

    this.$wrap = $('.sns.sp')
    this.$inner = this.$wrap.find('.inner');
    this.$target = this.$wrap.find('.iconShare');
    this.$bar = this.$wrap.find('.bar');
    this.$list = this.$wrap.find('.list');
    this.$item = this.$wrap.find('.list .item');

    // motion
    this.tl = new TimelineMax();

    this.setEvents();

  }

  setup() {

  }

  ready() {

    // bar
    TweenMax.set(this.$bar, {width: 0})

    // sns
    TweenMax.set(this.$item, {x: -40, opacity: 0})

    this.$bar.show();
    this.$list.show();

  }

  run() {

  }

  onEnter (that) {

    if (!gb.in.u.isResPC) return;

    TweenMax.killTweensOf(this.$bar);
    TweenMax.killTweensOf(this.$item);

    this.ready();

    // barが伸びる

    var tl = new TimelineMax();

    tl
      .to(this.$bar, 0.3, {
        width: 26,
        ease: Power3.easeInOut
      })
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

    // ホバーエリアを拡大
    TweenMax.to(this.$inner, 0.3, {width: 180});
    
  }

  onLeave (that) {

    if (!gb.in.u.isResPC) return;

    TweenMax.killTweensOf(this.$bar);
    TweenMax.killTweensOf(this.$item);

    // bar
    var tl = new TimelineMax();

    tl
      .to(this.$item.eq(2), 0.3, {
        x: -40,
        opacity: 0,
        ease: Power4.easeInOut,
      },)
      .to(this.$item.eq(1), 0.3, {
        x: -40,
        opacity: 0,
        ease: Power4.easeInOut
      },'-=0.25')
      .to(this.$item.eq(0), 0.3, {
        x: -40,
        opacity: 0,
        ease: Power4.easeInOut,
        onComplete:()=>{
          this.$list.hide();
        }
      },'-=0.25')
      .to(this.$bar, 0.2, {
        width: 0,
        ease: Power2.easeInOut,
        onComplete:()=>{
          this.$bar.hide();
        }
      },'-=0.2')

    // ホバーエリアを拡大
    TweenMax.to(this.$inner, 0.3, {width: 14});

  }

  setEvents() {

    var self = this;

    this.$inner.on('mouseenter', function(e) {self.onEnter.call(self,this)});
    this.$inner.on('mouseleave', function(e) {self.onLeave.call(self,this)});
 
  }

}