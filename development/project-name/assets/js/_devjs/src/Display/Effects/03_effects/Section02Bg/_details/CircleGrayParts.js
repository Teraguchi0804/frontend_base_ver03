// ------------------------------------------------------------
//
//  CircleGrayParts
//
// ------------------------------------------------------------
(function(){

  

  function CircleGrayParts(mode,cnt) {

    if (mode == 'swipeTransitionMenu') this.$wrap = $('.swipeTransitionMenu');
    else this.$wrap = $('.swipeTransitionFirst');
    if (gb.ua.devicePC) this.src = '/project-name/assets/resource/img/controller/bg_gray_pc.png';
    else this.src = '/project-name/assets/resource/img/controller/bg_gray.png';

    this.$c;

    this.points = gb.data;
    this.len = this.points.length;
    this.cnt = cnt;
    this.mode = mode;
    this.setTimer = null;

    this.ready();

  }

  CircleGrayParts.prototype = {

    ready: function() {

      var self = this;
      
      this.$c = $('<img>');
      this.$c.on('load', function(event) {

        self.layout();

        if (self.mode == 'swipeTransitionMenu') gb.cgLoadCntMenu++;
        else gb.cgLoadCnt++;

        self.onLoadComplete();     

      });
      this.$c.attr({src: this.src});
      this.$c.addClass('gray');
      this.$wrap.find('.canvasArea').append(this.$c);

    },

    layout: function () {

      if (gb.ua.devicePC) {

        var l = this.points[this.cnt].x;
        var t = this.points[this.cnt].y;
        
        this.$c.css({
          position: 'absolute',
          width: 86,
          height: 86,
          left: l,
          top: t,
          'margin-left': -86/2,
          'margin-top': -86/2,
          top: t,
        });

      } else {

        var l = this.points[this.cnt].x;
        var t = this.points[this.cnt].y;
        
        this.$c.css({
          position: 'absolute',
          width: this.$c.width()/2,
          height: this.$c.height()/2,
          left: l,
          top: t,
          'margin-left': -this.$c.width()/4,
          'margin-top': -this.$c.height()/4,
          top: t,
        });

      }

    },

    disappear: function() {

      TweenMax.to(this.$c, 0.5, {
          opacity: 0,
          scale: 1.5
        });

    },

    appear: function() {

      TweenMax.to(this.$c, 0.4, {
          opacity: 1,
          scale: 1
        });

    },

    onLoadComplete: function(num) {

      if (gb.cgLoadCnt == this.len) $(window).trigger('layout');

    },

  }

  gb.CircleGrayParts = CircleGrayParts;

})();