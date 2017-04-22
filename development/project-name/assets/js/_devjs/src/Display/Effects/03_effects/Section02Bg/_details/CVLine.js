// ------------------------------------------------------------
//
//  CVLine
//
// ------------------------------------------------------------

(function(){

  

  function CVLine(ctx,strokeStyle) {

    this.ctx = ctx;

    this.len = 20;
    this.vertices = [];

    this.pmx = 0; //previous mouse x
    this.pmy = 0; //previous mouse y

    this.cx = gb.in.r.W()/2; //center x
    this.cy = gb.in.r.H()/2; //center y

    this.strokeStyle = strokeStyle;
    this.op = {val:1};

    this.setup();
    this.create();

  }

  CVLine.prototype = {

    setupVerticesCircle: function() {

      for (var i = 0; i < this.len; i++) {

        var x = this.cx + Math.cos(Math.PI*2/this.len * i) * 100;
        var y = this.cy + Math.sin(Math.PI*2/this.len * i) * 100;

        var point = new gb.Point(x,y);

        this.vertices.push(point);
      };

    },

    setupVerticesRandom: function() {

      for (var i = 0; i < this.len; i++) {

        // ランダム配置
        var point = {x:gb.in.r.W()*Math.random(),y:gb.in.r.H()*Math.random()};
        this.vertices.push(point);

      };

    },

    setup: function () {

      // this.ctx.lineCap = "round"; //round,sqare
      // this.ctx.lineJoin = "round"; //bevel,round,miter

      this.setupVerticesCircle();
      
    },

    create: function () {


    },

    // マウスの位置で描く
    // update: function () {

    //   this.ctx.lineCap = "round"; //round,sqare
    //   this.ctx.lineJoin = "round"; //bevel,round,miter
    //   this.ctx.strokeStyle = 'rgba('+this.strokeStyle+','+this.op.val+')';


    //   this.ctx.lineWidth = 4;
    //   this.ctx.beginPath();
    //   this.ctx.moveTo(this.pmx, this.pmy);
    //   this.ctx.lineTo(gb.in.m.x, gb.in.m.y);

    //   // 2次ベジェ曲線
    //   // this.ctx.quadraticCurveTo(gb.in.m.x-20, gb.in.m.y-20, gb.in.m.x, gb.in.m.y)
    //   // 3次べせ曲線
    //   // this.ctx.bezierCurveTo(gb.in.m.x-200, gb.in.m.y-200, gb.in.m.x+100, gb.in.m.y+100, gb.in.m.x, gb.in.m.y)

    //   // blur
    //   // this.ctx.shadowBlur = 1.5;
    //   // this.ctx.shadowColor = "#fff";
    //   // this.ctx.shadowOffsetX = 0;
    //   // this.ctx.shadowOffsetY = 0;

    //   this.pmx = gb.in.m.x;
    //   this.pmy = gb.in.m.y;

    // },

    // 頂点で描く
    update: function () {

      this.ctx.lineCap = "round"; //round,sqare
      this.ctx.lineJoin = "round"; //bevel,round,miter
      this.ctx.strokeStyle = 'hsla(' + (gb.in.up.cnt/10)%360 + ', ' + 70 + '%, ' + 50 + '%,'+this.op.val+')';

      this.ctx.lineWidth = 3;
      this.ctx.beginPath();
      this.ctx.moveTo(this.vertices[0].x, this.vertices[0].y);

      for (var i = 0; i < this.len; i++) {

        var p = this.vertices[i];
        p.update();
        this.ctx.lineTo(p.x, p.y);
        // if (i!==0) this.ctx.quadraticCurveTo(p.x, p.y, this.vertices[i-1].x, this.vertices[i-1].y)
        // this.ctx.bezierCurveTo(gb.in.m.x-200, gb.in.m.y-200, gb.in.m.x+100, gb.in.m.y+100, gb.in.m.x, gb.in.m.y)

      };

      this.ctx.closePath();

    },

    draw: function () {

      this.ctx.stroke();
      
    },

    loop: function (start,goal,delay,ease,dur) {

      this.update();
      this.draw();
      
    },

  }

  gb.CVLine = CVLine;

})();