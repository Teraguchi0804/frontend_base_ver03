// ------------------------------------------------------------
//
//  CreateCanvasCircleBlack
//
// ------------------------------------------------------------

(function(){

  

  function CreateCanvasCircleBlack(cnt,style01,style02) {

    this.canvas = null;
    this.ctx = null;
    this.cb = null; // circleBlack

    this.cnt = cnt;
    this.points = gb.data;

    this.strokeStyle01 = style01;
    this.strokeStyle02 = style02;

    if (gb.ua.devicePC) {

      this.bg = 172;
      this.bgC = this.bg/2;//bg center
      this.radius = 32/4; // retina
      this.pos = this.bg/4;

    } else {

      this.bg = 172;
      this.bgC = this.bg/2; //bg center
      this.radius = 28/4; // retina
      this.pos = this.bg/4;

    }

    this.ready();
    this.layout();
    this.addObjects();
    this.drawFirst();

  }

  CreateCanvasCircleBlack.prototype = {

    ready: function () {

      this.canvas = document.createElement('canvas'); 
      this.ctx = this.canvas.getContext('2d');
      this.canvas.width = this.bgC;
      this.canvas.height = this.bgC;
      
    },

    layout: function () {

      var l = this.points[this.cnt].x;
      var t = this.points[this.cnt].y;
      
      $(this.canvas).css({
        position: 'absolute',
        left: l,
        top: t,
        'margin-left': -this.canvas.width/2,
        'margin-top': -this.canvas.height/2,
      });

    },

    addObjects: function () {

      this.cb = new gb.CircleBlackParts(this.ctx,this.strokeStyle01,this.strokeStyle02);

    },

    drawFirst: function () {

      this.cb.drawFirst();
      
    },

    drawTouched: function () {

      this.cb.drawTouched();

    },

    drawTouchEnd: function () {

      this.cb.drawTouchEnd();
      
    },

    update: function () {

      
    },

  }

  gb.CreateCanvasCircleBlack = CreateCanvasCircleBlack;

})();