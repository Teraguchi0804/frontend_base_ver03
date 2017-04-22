//--------------------------------------------------
//
//  HoverEffectSNSPCDetails
//
//--------------------------------------------------

export default class HoverEffectSNSPCDetails {

  constructor($wrap, $target) {

    this.$wrap = $('.block01 .tit')
    this.$icon = this.$wrap.find('.sns');
    this.$box = this.$wrap.find('.snsRowWrap');
    this.$item = this.$wrap.find('.snsRowWrap .item');
    this.$bb = this.$wrap.find('.bar.bottom');
    this.$br = this.$wrap.find('.bar.right');

    // motion
    this.tl = new TimelineMax();

    this.setEvents();

  }

  setup() {

  }

  ready() {

    // bar
    TweenMax.set(this.$bb, {height: 0})
    TweenMax.set(this.$br, {width: 0})

    // sns
    TweenMax.set(this.$item, {x: 30, opacity: 0})

    this.$box.show();

  }

  run() {

  }

  onEnter (that) {

    if (!gb.in.u.isResPC) return;

    TweenMax.killTweensOf(this.$br);
    TweenMax.killTweensOf(this.$bb);
    TweenMax.killTweensOf(this.$item);

    this.ready();

    var tl = new TimelineMax();
    var tl02 = new TimelineMax();

    tl
      // barが伸びる
      .to(this.$br, 0.3, {
        width: '100%',
        ease: Power3.easeInOut
      })
      .to(this.$bb, 0.3, {
        height: '100%',
        ease: Power3.easeInOut
      },'-=0.2')

    tl02
      .to(this.$item.eq(0), 0.3, {
        x: 0,
        opacity: 1,
        ease: Power4.easeInOut
      })
      .to(this.$item.eq(1), 0.3, {
        x: 0,
        opacity: 1,
        ease: Power4.easeInOut
      },'-=0.25')
      .to(this.$item.eq(2), 0.3, {
        x: 0,
        opacity: 1,
        ease: Power4.easeInOut
      },'-=0.25')
    
  }

  onLeave (that) {

    if (!gb.in.u.isResPC) return;

    TweenMax.killTweensOf(this.$br);
    TweenMax.killTweensOf(this.$bb);
    TweenMax.killTweensOf(this.$item);

    var tl = new TimelineMax();
    var tl02 = new TimelineMax();

    tl
      // barが伸びる
      .to(this.$bb, 0.3, {
        height: 0,
        ease: Power3.easeInOut
      })
      .to(this.$br, 0.3, {
        width: 0,
        ease: Power3.easeInOut
      },'-=0.2')

    tl02
      .to(this.$item.eq(2), 0.3, {
        x: 30,
        opacity: 0,
        ease: Power4.easeInOut
      })
      .to(this.$item.eq(1), 0.3, {
        x: 30,
        opacity: 0,
        ease: Power4.easeInOut
      },'-=0.25')
      .to(this.$item.eq(0), 0.3, {
        x: 30,
        opacity: 0,
        ease: Power4.easeInOut,
        onComplete:()=>{
          this.$box.hide();
        }
      },'-=0.2')
    
  }

  setEvents() {

    var self = this;

    this.$icon.on('mouseenter', function(e) {self.onEnter.call(self,this)});
    this.$icon.add(this.$box).on('mouseleave', function(e) {self.onLeave.call(self,this)});
 
  }

}