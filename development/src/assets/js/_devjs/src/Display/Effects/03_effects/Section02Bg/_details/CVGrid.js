// ------------------------------------------------------------
//
//  CVGrid
//
// ------------------------------------------------------------

(function(){

  

  function CVGrid(ctx,strokeStyle) {

    this.ctx = ctx;

    this.space = 10;
    this.ROW = 40;
    this.COL = 30;
    this.particleList = [];

    this.pmx = 0; //previous mouse x
    this.pmy = 0; //previous mouse y

    this.cx = gb.in.r.W()/2; //center x
    this.cy = gb.in.r.H()/2; //center y

    this.strokeStyle = strokeStyle;
    this.op = {val:1};

    this.setup();
    this.create();

  }



  CVGrid.prototype = {

    setup: function() {

      this.w = gb.in.r.W();
      this.h = gb.in.r.H();

    },

    create: function() {

      // 縦横に並べる
      for (var i = 0; i < this.ROW; i++) {
        for (var j = 0; j < this.COL; j++) {

          var ofsx = (this.w - this.space * (this.ROW - 1)) / 2; //右辺はwから真ん中のスペース分を引いて、左辺と右辺の余白の計算
          var ofsy = (this.h - this.space * (this.COL - 1)) / 2;

          var p = new gb.Point(
                                this.space * i + ofsx,
                                this.space * j + ofsy
                              );

          this.particleList.push(p);
        }
      }

    },

    update: function() {

      for (var i = 0; i < this.particleList.length; i++) {
        this.particleList[i].updateSpring();
      }

    },

    draw: function() {

      for (var i = 0; i < this.particleList.length; i++) {
        this.particleList[i].drawSpringLine(this.ctx);
      }
      for (var i = 0; i < this.particleList.length; i++) {
        this.particleList[i].drawSpringCircle(this.ctx);
      }

    },

    loop: function () {

      this.update();
      this.draw();
      
    },

  }

  gb.CVGrid = CVGrid;

})();