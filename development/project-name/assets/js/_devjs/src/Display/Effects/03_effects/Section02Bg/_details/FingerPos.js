// ------------------------------------------------------------
//
//  canvas 全体
//
// ------------------------------------------------------------

(function(){

  

  function FingerPos() {

    this.c = null;
    this.cw = 0;
    this.ch = 0;

    this.circle = null;
    
    this.fillStyle = '0,0,0';
    this.$wrap = $('.swipeTransitionFirst');

    this.setup();
    this.setCanvasSize();
    this.setEvents();
    this.timeline();

  }

  FingerPos.prototype = {

    setup: function () { //canvas finger point

      this.c = new gb.CreateCanvas();

      this.addObjects();
      
      this.$wrap.find('.canvasArea').append(this.c.canvas);
      $(this.c.canvas).addClass('fingerP');

      TweenMax.set($(this.c.canvas),{scale:1.17});

    },

    addObjects: function () { //canvas finger point

      this.circle = new gb.Circle(this.c.ctx,this.fillStyle);
      this.c.add(this.circle.loop.bind(this.circle));

    },

    setCanvasSize: function () {

      this.cw = this.c.canvas.width = this.$wrap.find('.touchArea').width();
      this.ch = this.c.canvas.height = this.$wrap.find('.touchArea').height();

    },

    loop: function () {

      this.c.loop();

    },

    timeline: function () {


    },

    onStart: function (e) {

      this.c.clear();
      TweenMax.to(this.circle.op, 0.5, {val: 0.3});

    },

    onEnd: function (e) {

      TweenMax.to(this.circle.op, 0.5, {val: 0});

    },

    setEvents: function () {

      $(window).on('start scrollStart', this.onStart.bind(this));
      $(window).on('end scrollEnd', this.onEnd.bind(this));
      gb.in.SPCLoop.addTlMain(this.loop.bind(this));

    },

  }

  gb.FingerPos = FingerPos;

})();