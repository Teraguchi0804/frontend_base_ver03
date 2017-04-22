// ------------------------------------------------------------
//
//  canvas 全体
//
// ------------------------------------------------------------

(function(){

  

  function DrawLine(mode) {

    this.c = null;
    this.cFirst = null;
    this.cw = 0;
    this.ch = 0;

    this.line = null;
    this.lineFirst = null;
    this.lineList = [];
    this.points = gb.data;

    this.Timer = null;
    this.urgeIntervalTimer = null;
    this.urgeOutTimer = null;

    this.isFirstTouch = true;

    if (mode == 'swipeTransitionMenu') {
      this.$wrap = $('.swipeTransitionMenu');
      this.strokeStyle = '255,255,255';
    } else {
      this.$wrap = $('.swipeTransitionFirst');
      if (gb.ua.devicePC) {
        this.strokeStyle = '255,255,255';  
      } else {
        this.strokeStyle = '0,0,0';    
      }
    }

    this.setup();
    if (gb.ua.devicePC) this.setCanvasSize();
    this.setEvents();

  }

  DrawLine.prototype = {

    setup: function () {

      this.c = new gb.CreateCanvas();
      this.cFirst = new gb.CreateCanvas();

      this.addObjects();
      
      this.$wrap.find('.canvasArea').append(this.c.canvas);
      $(this.c.canvas).addClass('line');

      this.$wrap.find('.canvasArea').append(this.cFirst.canvas);
      $(this.cFirst.canvas).addClass('line lineFirst');

    },

    addObjects: function () { //canvas finger point

      this.line = new gb.Line(this.c.ctx,this.strokeStyle);
      this.c.add(this.line.loop.bind(this.line));

      this.lineFirst = new gb.Line(this.cFirst.ctx,this.strokeStyle);
      this.cFirst.add(this.lineFirst.loop.bind(this.lineFirst));

    },

    setCanvasSize: function () {

      this.cw = this.c.canvas.width = this.cFirst.canvas.width = this.$wrap.find('.touchArea').width();
      this.ch = this.c.canvas.height = this.cFirst.canvas.height = this.$wrap.find('.touchArea').height();

    },

    loop: function () {

      // this.c.loop();

    },

    onStart: function (e) {

      this.c.clear();
      this.lineList = [];
      this.line.pt = {
          start:{
            x: 0,
            y: 0
          },
          val:{
            x: 0,
            y: 0
          },
          goal:{
            x: 0,
            y: 0
          },
      };

    },

    onEnd: function (e) {

      var self = this;

      if (gb.url == 'undefined') {

        // canvasの線だけ透明にする方法が無いから、domを透明に
        this.disappear();

      } else {

        clearTimeout(this.setTimer);
        this.setTimer = setTimeout(function(){

          self.disappear();
          
        },1000);

      }

    },

    disappear: function(dur) {

      var self = this;
      var d = dur || 0.5;

      TweenMax.to($(this.c.canvas), d, {
          opacity: 0,
          onComplete: function() {
            self.c.clear();
            TweenMax.set($(self.c.canvas), {opacity: 1});
          }
        });
    },

    disappearFirst: function(dur,status) {

      var self = this;
      var d = dur || 0.5;

      TweenMax.to($(this.cFirst.canvas), d, {
          opacity: 0,
          ease:Power2.easeOut,
          onComplete: function() {
            self.cFirst.clear();
            TweenMax.set($(self.cFirst.canvas), {opacity: 1});
            if (status=='remove') {
              $(self.cFirst.canvas).remove();
            } else {
              self.urgeDraw();
            }
          }
        });
    },

    onTouch: function (e) {

      // ユーザーがタッチするとループを解除
      if (this.isFirstTouch) {
        this.isFirstTouch = false;
        clearTimeout(this.urgeOutTimer);
        clearInterval(this.urgeIntervalTimer);
        this.disappearFirst(0.01,'remove');
      };

      this.lineList = gb.tArr;

      var l = this.lineList.length;
      if (l<2) return;

      var s = this.lineList[l-2]
      var g = this.lineList[l-1];
      var d = 0;

      this.line.loop(this.points[s],this.points[g],d);

    },

    onDeviceSelect: function (e) {

      var self = this;

      setTimeout(this.urgeDraw.bind(this),1000);

    },

    urgeDraw: function() {

      var self = this;

      // 線を描く
      this.lineFirst.loop(this.points[3],this.points[4],0,Power0.easeNone,0.15);
      this.lineFirst.loop(this.points[4],this.points[5],0.15,Power0.easeNone,0.15);
      this.lineFirst.loop(this.points[5],this.points[1],0.3,Power0.easeNone,0.15);
      this.lineFirst.loop(this.points[1],this.points[4],0.45,Power0.easeNone,0.15);
      this.lineFirst.loop(this.points[4],this.points[7],0.6,Power0.easeNone,0.15);

      // 点滅

      // 消す
      clearTimeout(this.urgeOutTimer);
      this.urgeOutTimer = setTimeout(function(){
        self.disappearFirst();
      },2500);

    },

    setEvents: function () {

      $(window).on('start scrollStart', this.onStart.bind(this));
      $(window).on('touch', this.onTouch.bind(this));
      $(window).on('end', this.onEnd.bind(this));
      $('.device_select .step--num02').on('successPairing', this.onDeviceSelect.bind(this));

    },

  }

  gb.DrawLine = DrawLine;

})();