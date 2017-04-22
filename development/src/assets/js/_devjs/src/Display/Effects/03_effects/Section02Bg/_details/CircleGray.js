// ------------------------------------------------------------
//
//  CircleGray
//
// ------------------------------------------------------------
(function(){

  

  function CircleGray(mode) {

    this.circles = [];
    this.mode = mode;
    if (mode == 'swipeTransitionMenu') gb.cgLoadCntMenu = 0;
    else gb.cgLoadCnt = 0;

    this.points = gb.data;
    this.len = this.points.length;

    this.setTimer = null;

    this.ready();
    this.setEvents();

  }

  CircleGray.prototype = {

    ready: function() {
      
      for (var i = 0; i < this.len; i++) {

        var c = new gb.CircleGrayParts(this.mode,i);
        this.circles.push(c);

      };

    },

    disappear: function(num) {

      this.circles[num].disappear();

    },

    appear: function() {

      for (var i = 0; i < this.len; i++) {

        this.circles[i].appear();

      };

    },

    onEnd: function() {

      var self = this;

      if (gb.url == 'undefined') {

        this.appear();

      } else {

        clearTimeout(this.setTimer);
        this.setTimer = setTimeout(function(){

          self.appear();

        },1000);

      }

    },

    onTouchNew: function () {

      this.disappear(gb.curNum);

    },

    setEvents: function() {

      $(window).on('end', this.onEnd.bind(this));
      $(window).on('touchNew', this.onTouchNew.bind(this));

    },

  }

  gb.CircleGray = CircleGray;

})();