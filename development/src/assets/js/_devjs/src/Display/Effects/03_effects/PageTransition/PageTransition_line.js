//--------------------------------------------------
//
//  PageTransitionEffect
//
//--------------------------------------------------

import Point from './Point.js';

export default class PageTransitionEffect {

  constructor($wrap) {

    this.renderer = null;this.stage = null;

    this.$wrap = $wrap;
    this.mx = 0;this.my = 0;
    
    this.radius = 0;
    this.cnt = 0;
    this.points = [];
    this.g = null;

    this.count = 0;

    this.isStart = false;

    // コールバック
    this.cb = ()=>{}

    this.setup();
    this.setEvents();

  }

  setup () {

    // canvas要素追加
    this.renderer = PIXI.autoDetectRenderer(gb.in.r.ws.w, gb.in.r.ws.h, {antialias: true,transparent: true});
    this.$wrap.append(this.renderer.view);

    // create the root of the scene graph
    this.stage = new PIXI.Container();
    this.stage.interactive = true;

    this.addObject();
  
  }

  addObject() {

    this.container = new PIXI.Container();



    // ------------------------------------------------------------
    //
    //  背景用 mask
    //
    // ------------------------------------------------------------
    this.mask = new PIXI.Graphics();

    this.mask.position.x = 0;
    this.mask.position.y = 0;
    var lineWidth = 1;

    this.len = Math.floor(gb.in.r.ws.h / lineWidth) + lineWidth;
    this.points = [];

    for (var i = 0; i < this.len; i++) {
      var p = new Point();

      p.sx = 0;
      p.sy = lineWidth*i;
      p.w = 0;
      p.h = lineWidth;

      this.points.push(p);

    };

    this.stage.addChild(this.mask);

  }

  update() {



  }

  draw(){

    // ------------------------------------------------------------
    //
    //  背景用mask
    //
    // ------------------------------------------------------------
    this.mask.clear();
    this.mask.beginFill(0x000000, 1);

    for (var i = 0; i < this.len; i++) {

      this.mask.drawRect(this.points[i].sx, this.points[i].sy, this.points[i].w, this.points[i].h);

    }

    this.mask.endFill();


    // render the stage
    this.renderer.render(this.stage);    

  }

  inEffect() {

    for (var i = 0; i < this.len; i++) {
    
      var tl = new TimelineMax({});

      tl
        .to(this.points[i], 1.6, {
          w: 0,
          delay: Math.random() * 0.5,
          ease: Expo.easeOut
        })

    }

    // コールバック実行
    setTimeout(()=>{

      this.$wrap.hide(); // ページ遷移エフェクトレイヤーを隠す
      this.isStart=false; // ループを止める

    },2000);

  }

  outEffect() {

    for (var i = 0; i < this.len; i++) {
    
      var tl = new TimelineMax({});

      tl
        .to(this.points[i], 1.6, {
          w: gb.in.r.ws.w,
          delay: Math.random() * 0.5,
          ease: Expo.easeOut
        })

    }

    // コールバック実行
    setTimeout(()=>{

      this.cb();

    },2200);

  }

  loop () {

    if (this.isStart) {

      this.update();
      this.draw();

    };

  }

  onResize() {

    this.renderer.width = gb.in.r.ws.w;
    this.renderer.height = gb.in.r.ws.h;

    this.renderer.resize(gb.in.r.ws.w, gb.in.r.ws.h);

    // $(this.renderer.view).attr('width', gb.in.r.ws.w);
    // $(this.renderer.view).attr('height', gb.in.r.ws.h);

    // リサイズしたら、再度描画位置を計算し直す
    this.mask.position.x = 0;
    this.mask.position.y = 0;
    var lineWidth = 1;

    this.len = Math.floor(gb.in.r.ws.h / lineWidth) + lineWidth;
    this.points = [];

    for (var i = 0; i < this.len; i++) {
      var p = new Point();

      p.sx = 0;
      p.sy = lineWidth*i;
      p.w = 0;
      p.h = lineWidth;

      this.points.push(p);

    };

  }

  setEvents () {

    gb.in.r.add('PageTransitionEffect', this.onResize.bind(this));
    gb.in.up.add('PageTransitionEffect', this.loop.bind(this));

  }

}