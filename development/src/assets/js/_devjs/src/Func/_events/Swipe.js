// ------------------------------------------------------------
//
//  Swipe
//
// ------------------------------------------------------------

(function(){

  var gb = jp.co.mie;

  function Swipe() {

    this.sY = 0;this.eX = 0; //startX,endX
    this.dis = 0;this.minDis = 50;

    this.setEvents();

  }

  Swipe.prototype = {

    touchStartPos: function (e) {

      this.sY = e.originalEvent.changedTouches[0].pageY;

    },

    touchMovePos: function (e) {

      
    },

    touchEndPos: function (e) {

      this.dis = this.sY - e.originalEvent.changedTouches[0].pageY;
      $(window).trigger('end.swipe');

      // // 移動量を初期化
      this.dis = 0;

    },

    setEvents: function(){

      var self = this;

      $(window).on('touchstart', function(e){self.touchStartPos.call(self,e)});
      $(window).on('touchmove', function(e){self.touchMovePos.call(self,e)});
      $(window).on('touchend', function(e){self.touchEndPos.call(self,e)});

    },
   
  }

  gb.Swipe = Swipe;
    
})();