//--------------------------------------------------
//
//  Layout
//
//--------------------------------------------------

import Size from './Size/SizeInterviewDetail.js';
import Position from './Postion/Position.js';

export default class Layout {

  constructor() {
    
    this.setEvents();

  }

  setup() {

    // メインビジュアルの高さを合わせる
    var w = ()=>{
        // var rate = gb.in.Layout.size.scale.rate;
        var rate = $(window).width() / gb.in.conf.defW;
        if (rate > 1) rate = 1;
        var h = gb.in.r.ws.h / rate;
        // var h = gb.in.r.ws.h;
        $('.section04 .block01').css('padding-top', h);

        if (gb.in.u.isResSP) {
            $('.section04 .block01').css('padding-top', 0);
        };
    }
    w();
    gb.in.r.add('w', w);

    this.size = new Size(); // adjust size
    this.position = new Position(); // adjust position
      
  }

  static run() {

    // メインビジュアルの高さを合わせる
    var w = ()=>{
        // var rate = gb.in.Layout.size.scale.rate;
        var rate = $(window).width() / gb.in.conf.defW;
        if (rate > 1) rate = 1;
        var h = gb.in.r.ws.h / rate;
        // var h = gb.in.r.ws.h;
        $('.section04 .block01').css('padding-top', h);

        if (gb.in.u.isResSP) {
            $('.section04 .block01').css('padding-top', 0);
        };
    }
    w();
    gb.in.r.add('w', w);



    this.size = new Size(); // adjust size
    this.position = new Position(); // adjust position

  }

  setEvents() {

      
  }

  onLoad() {

    this.setup();

  }
       
  setEvents() {

    $(window).on('load', this.onLoad.bind(this));

  }

}