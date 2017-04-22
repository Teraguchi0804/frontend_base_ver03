//--------------------------------------------------
//
//  Layout
//
//--------------------------------------------------

import Size from './Size/SizeMovie.js';
import Position from './Postion/Position.js';

export default class Layout {

  constructor() {
    
    this.setEvents();

  }

  setup() {

    // sp
    // 背景の高さを合わせる
    var h = ()=>{

        var H = $('.section02').height();
        if (gb.in.u.isResSP) $('#bgWrap').css('height', H);
        else $('#bgWrap').css('height', '100%');

    }
    h();
    gb.in.r.add('h', h);



    this.size = new Size(); // adjust size
    this.position = new Position(); // adjust position
      
  }

  static run() {

    // sp
    // 背景の高さを合わせる
    var h = ()=>{

        var H = $('.section02').height();
        if (gb.in.u.isResSP) $('#bgWrap').css('height', H);
        else $('#bgWrap').css('height', '100%');

    }
    h();
    gb.in.r.add('h', h);

    this.size = new Size(); // adjust size
    this.position = new Position(); // adjust position

  }

  static reset() {

    this.size.scale.reset();

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