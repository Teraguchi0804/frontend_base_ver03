// ------------------------------------------------------------
//
//  CircleBlackParts
//
// ------------------------------------------------------------

(function(){

  

  function CircleBlackParts(ctx,style01,style02) {

    this.canvas = null;
    this.ctx = ctx;

    this.strokeStyle01 = style01;
    this.strokeStyle02 = style02;

    this.loopTouch = new gb.UpdateMgr();

    this.pi = {val:0,val2:0};
    this.piReset = {val:0};

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

    this.isLock = true;

    this.setup();
    this.create();

  }

  CircleBlackParts.prototype = {

    setup: function () {

      this.loopTouch.addTlSub(this.drawCircleDouble.bind(this));

    },

    create: function () {


    },

    drawFirst: function () {

      this.clear();

      this.ctx.fillStyle = this.strokeStyle01;
      this.ctx.beginPath();
      this.ctx.arc(this.pos, this.pos, this.radius, 0, Math.PI*2, false);

      this.drawFill();
      
    },

    drawTouched: function () {

      this.pi = {val:0,val2:0};
      var tl = new TimelineMax();
      this.isLock = true;

      // loop
      this.loopTouch.resume()

      this.tweenCircle(Math.PI*2);
      
    },

    drawTouchEnd: function () {

      this.isLock = false;
      this.tweenCircle(0,this.drawReset);
      
    },

    drawReset: function () {

      if (this.isLock) return;

      var self = this;
      this.piReset = {val:0};
      var loopReset = new gb.UpdateMgr();
      loopReset.addTlSub(this.drawCircleSingle.bind(this));      

      this.loopTouch.stop();
      loopReset.resume();

      TweenMax.to(this.piReset, 0.4, {
          val: Math.PI*2,
          onComplete: function() {
            loopReset.stop();
          }
        });
      
    },

    tweenCircle: function (val,cb) {

      var self = this;
      var tl = new TimelineMax();

      tl.to(this.pi, 0.3, {
          val: val,
          onComplete: function() {
          }
        })
        .to(this.pi, 0.4, {
          val2: val,
          onComplete: function() {
            if (cb) cb.call(self);
          }
        },'-=0.2');
      
    },

    drawCircleDouble: function () {

      this.clear();

      // circle1
      this.ctx.strokeStyle = this.strokeStyle01;
      this.ctx.lineWidth = this.radius*2;
      this.ctx.beginPath();
      this.ctx.arc(this.pos, this.pos, this.radius, 0, this.pi.val, false);
      this.drawStroke();

      // circle2
      this.ctx.strokeStyle = this.strokeStyle02;
      this.ctx.lineWidth = this.radius*1;
      this.ctx.beginPath();
      this.ctx.arc(this.pos, this.pos, this.radius/2, 0, this.pi.val2, false);
      this.drawStroke();
      
    },

    drawCircleSingle: function () {

      this.clear();

      this.ctx.strokeStyle = this.strokeStyle01;
      this.ctx.lineWidth = this.radius*1;
      this.ctx.beginPath();
      this.ctx.arc(this.pos, this.pos, this.radius/2, 0, this.piReset.val, false);

      this.drawStroke();

    },

    update: function () {

      
    },

    drawFill: function () {

      this.ctx.fill();
          
    },

    drawStroke: function () {

      this.ctx.stroke();
          
    },

    clear : function() {

      this.ctx.clearRect(0,0,this.bgC,this.bgC);

    },

  }

  gb.CircleBlackParts = CircleBlackParts;

})();