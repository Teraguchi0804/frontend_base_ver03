//--------------------------------------------------
//
//  Section02ArticleHeightSP
//
//--------------------------------------------------
(function(){

  var gb = jp.co.mie;

  function Section02ArticleHeightSP($target) {

    this.$target = $target;
    this.defW = 320;
    this.defH = 180;
    this.minW = 320;
    this.curW = gb.in.r.W();

    this.setup();
    if (gb.in.u.isResSP) this.run();
    this.setEvents();

  }

  Section02ArticleHeightSP.prototype = {

    setup: function(param) {


    },

    run: function(param) {

      var rate = this.curW / this.defW;
      var h = this.defH * rate;

      this.$target.css({height: h});

    },

    setEvents: function() {

      var self = this;

      gb.in.r.add(function(){

        self.curW = gb.in.r.W();
        // スマホの横幅のときのみ かつ 最低幅320
        if (gb.in.u.isResSP && self.minW <= self.curW) self.run();


      })

    },


  }

  gb.Section02ArticleHeightSP = Section02ArticleHeightSP;

})();