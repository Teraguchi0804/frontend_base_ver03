// ------------------------------------------------------------
//
//  Plane
//
// ------------------------------------------------------------

export default class Plane {

  constructor(ctx,strokeStyle){

    this.ctx = ctx;

    this.strokeStyle = strokeStyle;
    this.op = {val:1};

    this.cnt = 0;

    this.cntStop = false;

    // this.setup();
    this.create();

  }

  setup(x, y, w, h, frameStart, vx, offset) {

    this.imgList = gb.in.loadSec02Img.list;

    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.vx = vx;

    this.offset = offset;

    this.cnt = frameStart ;

  }

  create() {


  }

  // 頂点で描く
  update() {

    this.x -= this.vx;
    if (this.x < -this.w) this.x = gb.in.canvas.cw - 10;

  }

  draw() {

    if (!this.cntStop) {

      // 間引き
      if (gb.in.up.cnt%3==0) this.cnt++;
      else ;

    };
    // this.cnt++;

    if (gb.in.u.isPC) {
      var total = gb.in.conf.sec02ImgNum;
    } else {
      var total = 19;
    }
    
    var img = this.imgList[this.cnt%total];
    this.ctx.drawImage(img, this.x, this.y, this.w, this.h);
    
  }

  loop() {

    this.update();
    this.draw();
    
  }

}