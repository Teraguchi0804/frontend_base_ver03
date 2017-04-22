//--------------------------------------------------
//
//  GlMotion
//
//--------------------------------------------------

(function(){

  var gb = jp.co.mie

  function GlMotion() {

    this.tlMain = new TimelineMax();


    this.setup();
    this.run();
    this.setEvents();

  }

  GlMotion.prototype = {

    setup: function() {

      gb.in.dmLibs = new gb.GlMotionLibs();

    },

    run: function() {

      // 最初
      gb.in.opening = new gb.Opening();
      
      gb.in.section01 = new gb.Section01();
      gb.in.section02 = new gb.Section02();
      gb.in.section03 = new gb.Section03();
      gb.in.section04 = new gb.Section04();
      gb.in.section05 = new gb.Section05();

    },

    setEvents: function() {

      // hover
      new gb.HoverShare();
      // hover
      gb.in.applyBtn = new gb.ApplyBtn();
      // click
      new gb.QAAccordion();


    },

  }

  // 公開api
  gb.GlMotion = GlMotion;
  
})();