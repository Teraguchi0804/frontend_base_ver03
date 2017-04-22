// ------------------------------------------------------------
//
//  CVParticleSystem
//
// ------------------------------------------------------------

(function(){

  

  function CVParticleSystem(ctx,strokeStyle) {

    this.ctx = ctx;

    this.len = 20;
    this.particleList = [];

    this.pmx = 0; //previous mouse x
    this.pmy = 0; //previous mouse y

    this.cx = gb.in.r.W()/2; //center x
    this.cy = gb.in.r.H()/2; //center y

    this.strokeStyle = strokeStyle;
    this.op = {val:1};

    // this.setup();
    // this.create();

  }

  CVParticleSystem.prototype = {

    add: function() {

      var p = new gb.Point(gb.in.m.x, gb.in.m.y);
      p.setupParticle();

      this.particleList.push(p);

    },

    update: function() {

      var list = [];

      for (var i = 0; i < this.particleList.length; i++) {
        this.particleList[i].updateParticle();

        if (!this.particleList[i].isRemove) {
          list.push(this.particleList[i]);
        }
      }

      this.particleList = list;

    },

    // パーティクルの描画
    draw: function() {

      this.ctx.save();
      this.ctx.globalCompositeOperation = "lighter";

      for (var i = 0; i < this.particleList.length; i++) {
        this.particleList[i].drawParticle(this.ctx);
      }

      this.ctx.restore();

    },

    loop: function () {

      this.add();
      this.update();
      this.draw();
      
    },

  }

  gb.CVParticleSystem = CVParticleSystem;

})();