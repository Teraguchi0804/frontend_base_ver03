//--------------------------------------------------
//
//  Size
//
//--------------------------------------------------

import Scale from './ScaleMovie.js';

export default class Size {

  constructor() {

    this.setup();
    this.setEvents();

  }

  setup() {
    
    // gb.in.u.setImgSPSize($('img')); // for sp img

    // new gb.ResponsiveFontSize($('.fontResponsive')); //レスポンシブ時フォントサイズの変更

    this.scale = new Scale(); // resize


  }

  onResize() {

    // gb.in.u.setImgSPSize($('img')); // for sp img

  }

  setEvents() {

    // gb.in.r.add(this.onResize.bind(this));

  }


}