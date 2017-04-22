//--------------------------------------------------
//
//  ResponsiveFontSize
//
//--------------------------------------------------

(function(){

  var gb = jp.co.mie;

  function ResponsiveFontSize($target) {

    this.$target = $target;

    this.isPCLock = false;
    this.isSPLock = false;

    this.run();
    this.setEvents();

  }

  ResponsiveFontSize.prototype = {

    run: function () {

      this.once(); 
      this.do(); 

    },

    once: function() {

      // ------------------------------------------------------------
      //  ブレイクポイントよりもsp側
      // ------------------------------------------------------------
      if (gb.in.u.isResSP && !this.isSPLock) {
        this.isPCLock = false;
        this.isSPLock = true;

        this.$target.attr('style', '');

      } 

      // ------------------------------------------------------------
      //  ブレイクポイントよりもpc側
      // ------------------------------------------------------------
      if (gb.in.u.isResPC && !this.isPCLock) {
        this.isPCLock = true;
        this.isSPLock = false;

        this.$target.attr('style', '');

        var win = {def: 1080,min: 769,max: 1080};
        this.size = new gb.SizeAdjust(win,this.$target,['font-size']);

      }

    },

    do: function() {

      if (gb.in.u.isResPC) {

        this.size.run();

      } else {



      }

      


    },

    setEvents: function () {

      gb.in.r.add(this.run.bind(this));

    },

  }

  gb.ResponsiveFontSize = ResponsiveFontSize;

})();