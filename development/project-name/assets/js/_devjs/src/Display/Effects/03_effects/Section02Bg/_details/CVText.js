// ------------------------------------------------------------
//
//  CVText
//
// ------------------------------------------------------------

(function(){

  

  function CVText(ctx,fillStyle) {

    this.ctx = ctx;

    this.fillStyle = fillStyle;
    this.op = {val:1};

    this.setup();
    this.create();

  }

  CVText.prototype = {

    setup: function () {

      this.ctx.font = "10px";
      // this.ctx.font = "18px 'ＭＳ Ｐゴシック'";
        
    },

    create: function () {


    },

    update: function () {

      var x = gb.in.m.x + 20;
      var y = gb.in.m.y - 20;

      this.ctx.fillStyle = 'rgba('+this.fillStyle+','+this.op.val+')';
      this.ctx.fillText('x:'+gb.in.m.x+' y:'+gb.in.m.y, x, y);
      
    },

    draw: function () {

      this.ctx.stroke();
      
    },

    loop: function () {

      this.update();
      this.draw();
      
    },

    clear: function() {


    },

  }

  gb.CVText = CVText;

})();