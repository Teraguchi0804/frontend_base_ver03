//--------------------------------------------------
//
//  Layout
//
//--------------------------------------------------

import Size from './Size/Size.js';
import Position from './Postion/Position.js';

export default class Layout {

  constructor() {
    
    this.setEvents();

  }

  setup() {

      this.size = new Size(); // adjust size

      this.position = new Position(); // adjust position
      
  }

  static reset() {

    // scaleで大きくしている関係上、高さを100%にしてはいけない
    if (gb.in.pjax.id == 'history' || gb.in.pjax.id == 'interview_detail') {

      TweenMax.set($('#inner'), {
        width: '100%',
        height: 'auto',
        scale: 1,
        'transform-origin':'0 0',
        '-webkit-transform-origin':'0 0'
      });
      TweenMax.set($('#bgWrap'), {
        width: '100%',
        height: '100%',
        scale: 1,
        'transform-origin':'0 0',
        '-webkit-transform-origin':'0 0'
      });

      TweenMax.set($('#wrapper'), {
        'overflow':'visible',
        height: '100%'
      });

    } else {

      TweenMax.set($('#inner, #bgWrap'), {
        width: '100%',
        height: '100%',
        scale: 1,
        'transform-origin':'0 0',
        '-webkit-transform-origin':'0 0'
      });

      TweenMax.set($('#wrapper'), {
        'overflow':'visible',
        height: '100%'
      });

    }
    
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