// ------------------------------------------------------------
//
//  CreateCanvas
//
// ------------------------------------------------------------
import Canvas from './Canvas.js';
import Plane from './Plane.js';

export default class CreateCanvas {

  constructor($wrap,w,h,cb=()=>{}) {

    this.c = null;
    this.cw = 0;
    this.ch = 0;
    
    this.fillStyle = '0,0,0';
    this.$wrap = $wrap;

    this.loopList = [];

    // 最初オブジェクト生成するためにboolean あえて逆に
    this.isResize = (gb.in.u.isResPC)? false: true;

    this.cb = cb;

    this.w = 260;
    this.h = 146;

    this.setup();
    this.setEvents();
    this.setCanvasSize(w,h);
    this.timeline();

  }

  setup() { //canvas finger point

    this.c = new Canvas();

    // this.addObjects();
    this.onResize();
    
    this.$wrap.append(this.c.canvas);

    this.cb();

  }

  addObjects(vx) { //canvas finger point

    this.loopList = [];

    var offset = 0;
    var offsetFrame = 0;
    var offsetVx = 0;

    this.xNum = 8;
    this.yNum = 6;
    this.len = this.xNum * this.yNum;

    this.tileList = [];

    if (gb.in.u.isPC) {
      var total = gb.in.conf.sec02ImgNum;
    } else {
      var total = 19;
    }

    for (var i = 0; i < this.len; i++) {
    
      this.tile = new Plane(this.c.ctx,this.fillStyle);

      var nth = i % this.xNum; 
      if (nth == 0) offset = - 500 + Math.floor(Math.random() * 500) - 250;
      if (nth == 0) offsetFrame = Math.floor(total * Math.random());
      if (nth == 0) offsetVx = vx + Math.floor(vx * 2 * Math.random());

      var x = nth * this.w + offset;
      var y = Math.floor(i / this.xNum) * this.h;

      this.tile.setup(x, y, this.w, this.h, offsetFrame + nth * 3, offsetVx, offset);
      this.tileList.push(this.tile);
      this.add(this.tile.loop.bind(this.tile));
      
    };

  }

  setCanvasSize(w,h) {

    this.cw = this.c.canvas.width = w;
    this.ch = this.c.canvas.height = h;

  }

  loop() {

    // this.c.ctx.clearRect(0,0,this.cw,this.ch);
    // this.c.ctx.fillStyle = 'rgba(255,255,255,0.08)';

    this.c.ctx.fillStyle = 'rgba(255,255,255,0.6)';
    this.c.ctx.fillRect(0,0,this.cw,this.ch);

    for (var i in this.loopList) this.loopList[i]();
    
  }

  timeline() {


  }

  add(func) {

    this.loopList.push(func);
    
  }

  onResize() {

    log(gb.in.u.isResSP,gb.in.u.isResPC);

    if (gb.in.u.isResSP && this.isResize) {
      this.isResize = false;

      this.addObjects(0.5);

      for (var i = 0; i < this.tileList.length; i++) {

        this.tileList[i].cntStop = true;

      };

      log(1111)

    } else if (gb.in.u.isResPC && !this.isResize) {
      this.isResize = true;

      this.addObjects(0.5);

      // スマホだったら、広い表示でもフレームの動きを止める
      if (gb.in.u.isSP) {

        for (var i = 0; i < this.tileList.length; i++) {

          this.tileList[i].cntStop = true;

        };

        return;

      }

      for (var i = 0; i < this.tileList.length; i++) {

        this.tileList[i].cntStop = false;
        
      };


      log(2222);

    }

  }

  setEvents() {

    gb.in.Sec02Bg.loop.add(this.loop.bind(this));
    gb.in.r.add('CreateCanvas', this.onResize.bind(this));

  }

}