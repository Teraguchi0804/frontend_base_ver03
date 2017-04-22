//--------------------------------------------------
//
//  YearMgr
//
//--------------------------------------------------

import Year from './Year.js';
import YearBig from './YearBig.js';
import Move2D from './Move2D.js';

export default class YearMgr {

  constructor() {

    this.setup();
    this.setEvents();

  }

  setup() {
    
    // スクロールトップに
    setTimeout(()=>{

      $(window).scrollTop(0);

      // new Year($('.year01'),1200,2200,2016,1940,'left')
      // new Year($('.year02'),2500,0,2016,1980,'right')
      // new Year($('.year03'),4987,0,1940,2016,'left')

      if (gb.in.u.isResSP) new YearBig($('.year04 span'),2740 * gb.in.Layout.size.scale.rate,0,1914,2016);
      else new YearBig($('.year04 span'),3100 * gb.in.Layout.size.scale.rate,0,1914,2016);

      // Move2D
      gb.in.move2DList = [];
      $('.move2D').each(function(index, el) {

          gb.in.move2DList.push(new Move2D($(this)));
          
      });

    },500);

    // big yearの位置調整
    var yearW = ()=>{

        var w = $('.year04 span').width() * gb.in.Layout.size.scale.rate;
        $('.year04').css('padding-left', ((gb.in.r.ws.w - w) / 2) / gb.in.Layout.size.scale.rate);

    }
    yearW();
    gb.in.r.add('yearW', yearW);

  }

  run() {



  }

  setEvents() {

    

  }
  
}