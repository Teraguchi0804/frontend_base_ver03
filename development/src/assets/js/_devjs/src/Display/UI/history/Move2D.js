//--------------------------------------------------
//
//  Move2D
//
//--------------------------------------------------

export default class Move2D {

  constructor($target) {

    this.$target = $target;

    this.target = {
        $: this.$target,
        factorX:this.$target.data("x") || 1.0,
        factorY:this.$target.data("y") || 1.0,
        factorB:this.$target.data("both") || 1.0,
        baseX: this.$target.position().left,
        baseY: this.$target.position().top,
        x: this.$target.position().left,
        y: this.$target.position().top
    };

    this.defX = this.target.baseX;
    this.defY = this.target.baseY;

    this.baseX = 0;
    this.baseY = 0;

    this.easing = this.$target.data("ease") || 0.06;
    this.gx = 0;
    this.gy = 0;

    this.mx = 0;
    this.my = 0;

    this.setup();
    if (gb.in.u.isResPC) this.setEvents();

  }

  setup() {

    this.baseX = gb.in.r.ws.w/2;
    this.baseY = gb.in.r.ws.h/2;
    this.mx = this.baseX;
    this.my = this.baseY;
    
  }

  onMove(e) {

    this.mx = gb.in.m.x;
    this.my = gb.in.m.y;

    var baseDisY = this.my - this.baseY;
    var baseDisX = this.mx - this.baseX;

    var rad = Math.atan2(baseDisY,baseDisX);
    rad = (rad + Math.PI) % (Math.PI * 2);

    this.mx = this.baseX + Math.cos(rad) * Math.sqrt(baseDisX * baseDisX + baseDisY * baseDisY);
    this.my = this.baseY + Math.sin(rad) * Math.sqrt(baseDisX * baseDisX + baseDisY * baseDisY);

    var dx = this.mx - this.baseX;
    var dy = this.my - this.baseY;

    this.gx = this.target.baseX + (dx*this.target.factorX*this.target.factorB)
    this.gy = this.target.baseY + (dy*this.target.factorY*this.target.factorB)

    // log(this.target.baseX,dx,this.target.factorX,this.target.factorB);

  }

  loop() {

    if (gb.in.u.isSP || gb.in.u.isResSP) return;

    this.target.x += (this.gx - this.target.x) * this.easing;
    this.target.y += (this.gy - this.target.y) * this.easing;

    TweenMax.set(this.target.$, {
      left: this.target.x,
      top:  this.target.y,
    })

  }

  onResize() {

    this.baseX = gb.in.r.ws.w/2;
    this.baseY = gb.in.r.ws.h/2;

  }

  setEvents() {

    gb.in.m.add('Move2D', this.onMove.bind(this));
    gb.in.up.add('Move2D',this.loop.bind(this));
    gb.in.r.add('Move2D',this.onResize.bind(this));
    
  }

  removeEvents() {

    gb.in.m.remove('Move2D');
    gb.in.up.remove('Move2D');
    gb.in.r.remove('Move2D');

    TweenMax.set(this.target.$, {
      left: this.defX,
      top: this.defY,
    })

  }


}