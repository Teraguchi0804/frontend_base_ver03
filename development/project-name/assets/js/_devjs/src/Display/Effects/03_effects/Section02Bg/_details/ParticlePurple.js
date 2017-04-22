// ------------------------------------------------------------
//
//  ParticlePurple
//
// ------------------------------------------------------------

(function(){

  

  function ParticlePurple(mode) {

    if (mode == 'swipeTransitionMenu') this.$wrap = $('.swipeTransitionMenu');
    else this.$wrap = $('.swipeTransitionFirst');

    this.cw = null;
    this.ch = null;

    this.num = 9;
    this.pList = [];
    this.bgColor = "rgba(0,0,0,.1)";
    this.pos = {
          x:0,
          y:0,
        };

    this.touchedList = [];
    this.isBgDraw = false; //true 背景描く false描かない

    this.points = gb.data,
    this.len = this.points.length;

    var urlList = {
      '13457': '/pc/',
      '02346': '/pc/project',
      // '012': '/pc/detail',
      '345': '/pc/detail',
      // '678': '/pc/detail',
      '246': '/pc/detail/close',
      '01235678': '/pc/about',
      '03458': '/pc/technology',
      '0124': '/pc/contact',
    }

    this.scTimer = null;
    this.loopTimer = null;
    this.animate = null;

    this.setup();
    if (gb.ua.devicePC) this.setCanvasSize();
    this.setEvents();

  }

  ParticlePurple.prototype = {

    setup: function () {

      this.c = new gb.CreateCanvas();

      this.addObjects();
      
      this.$wrap.find('.canvasArea').append(this.c.canvas);
      $(this.c.canvas).addClass('glow');

    },

    addObjects: function () { 

      for (var i = 0; i < this.num; i++) {

        var x = this.points[i].x,y = this.points[i].y;
        var p = new gb.Spiral(x,y,this.c.ctx,this.cw,this.ch);

        p.setup();
        this.pList.push(p);

      };

    },

    setCanvasSize: function () {

      this.cw = this.c.canvas.width = this.$wrap.find('.touchArea').width();
      this.ch = this.c.canvas.height = this.$wrap.find('.touchArea').height();

    },

    update: function () {

      for (var i = 0; i < this.touchedList.length; i++) {
        var num = this.touchedList[i]
        var p = this.pList[num];
        p.update();
      };

    },

    draw: function () {

      if (!this.isBgDraw) this.c.clear();

      for (var i = 0; i < this.touchedList.length; i++) {
        var num = this.touchedList[i]
        var p = this.pList[num];
        p.draw();
      };

    },

    loop: function () {

      this.update();
      this.draw();

    },

    onStart: function (e) {

      this.isBgDraw = true;
      this.touchedList = [];
      this.c.clear();
      clearTimeout(this.scTimer);

    },

    onMove: function (e) {


    },

    onEnd: function (e) {

      var self = this;

      if (gb.url == 'undefined') {

        // 背景描かない
        this.isBgDraw = false;

      } else {

        clearTimeout(self.scTimer);
        self.scTimer = setTimeout(function(){

          // 背景描かない
          self.isBgDraw = false;

        },1000);

      }

    },

    onTouch: function (e) {

      // ソート
      this.touchedList = gb.in.u.descend(gb.tArr);
      // 重複削除
      this.touchedList = gb.in.u.removeRepeat(this.touchedList);

    },

    onRightMark: function (e) {

      TweenMax.fromTo($('.onRightMark'), 0.8, {
          backgroundColor: 'rgba(255,255,255,0.4)',
        },{
          backgroundColor: 'rgba(255,255,255,0)',
        });            

    },

    setEvents: function () {

      $(window).on('start scrollStart', this.onStart.bind(this));
      $(window).on('move', this.onMove.bind(this));
      $(window).on('touch', this.onTouch.bind(this));
      $(window).on('rightMark', this.onRightMark.bind(this));
      $(window).on('end', this.onEnd.bind(this));
      gb.in.SPCLoop.addTlMain(this.loop.bind(this));

    },

  }

  gb.ParticlePurple = ParticlePurple;

})();