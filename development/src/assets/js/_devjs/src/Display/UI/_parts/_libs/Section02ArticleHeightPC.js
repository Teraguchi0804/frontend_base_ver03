//--------------------------------------------------
//
//  Section02ArticleHeightPC
//
//--------------------------------------------------
(function(){

  var gb = jp.co.mie;

  function Section02ArticleHeightPC() {

    this.$blockTop = $('.section02 .blockTop');
    this.$blockBtm = $('.section02 .blockBottom');

    this.margin = 24;

    this.setup();
    this.run();
    this.setEvents();

  }

  Section02ArticleHeightPC.prototype = {

    setup: function() {


    },

    run: function() {
      
      var self = this;

      this.$blockTop.each(function(index, el) {

        var h = $(this).find('.block').eq(1).height() - self.margin;
        $(this).find('.block').eq(0).find('.article').css({height: h});
        
      });

      this.$blockBtm.each(function(index, el) {

        var h = $(this).find('.block').eq(0).height() - self.margin;
        $(this).find('.block').eq(1).find('.article').css({height: h});
        
      });

    },

    setEvents: function() {

      var self = this;

      gb.in.r.add(function(){

        // pcの横幅のときのみ
        if (gb.in.u.isResPC) self.run();        

      })

    },


  }

  gb.Section02ArticleHeightPC = Section02ArticleHeightPC;

})();