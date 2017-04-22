// ------------------------------------------------------------
//
//  CircleBlack
//
// ------------------------------------------------------------

(function(){

  

  function CircleBlack(mode) {

    if (mode == 'swipeTransitionMenu') {

      this.$wrap = $('.swipeTransitionMenu');
      this.strokeStyle02 = 'rgba(0,0,0,1)';
      this.strokeStyle01 = 'rgba(255,255,255,1)';

    } else {

      this.$wrap = $('.swipeTransitionFirst');

      if (gb.ua.devicePC) {
        this.strokeStyle02 = 'rgba(0,0,0,1)';
        this.strokeStyle01 = 'rgba(255,255,255,1)';        
      } else {
        this.strokeStyle01 = 'rgba(0,0,0,1)';
        this.strokeStyle02 = 'rgba(255,255,255,1)';        
      }

    }

    this.canvasList = [];

    this.points = gb.data;
    this.len = this.points.length;

    this.setTimer = null;

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

    this.setEvents();
    this.ready();

  }

  CircleBlack.prototype = {

    ready: function () {

      for (var i = 0; i < this.len; i++) {

        var c = new gb.CreateCanvasCircleBlack(i,this.strokeStyle01,this.strokeStyle02);

        this.$wrap.find('.canvasArea').append(c.canvas);
        this.canvasList.push(c);

      };

      this.$wrap.find('.canvasArea canvas').not('.line, .glow, .fingerP').addClass('black');

    },

    update: function () {

      
    },

    drawTouched: function (num) {

      this.canvasList[num].drawTouched();
      
    },

    drawTouchEnd: function (num) {

      this.canvasList[num].drawTouchEnd();
      
    },

    onEnd: function() {

      var self = this;

      if (gb.url == 'undefined') {

        for (var i = 0; i < gb.touchedList.length; i++) {

          var num = gb.touchedList[i];
          self.drawTouchEnd(num);

        };

      } else {

        clearTimeout(this.setTimer);
        this.setTimer = setTimeout(function(){
          for (var i = 0; i < gb.touchedList.length; i++) {

            var num = gb.touchedList[i];
            self.drawTouchEnd(num);

          };
        },1000);


      }

    },

    onTouchNew: function() {

      this.drawTouched(gb.curNum);

    },

    setEvents: function () {

      $(window).on('end', this.onEnd.bind(this));
      $(window).on('touchNew', this.onTouchNew.bind(this));

    },

  }

  gb.CircleBlack = CircleBlack;

})();