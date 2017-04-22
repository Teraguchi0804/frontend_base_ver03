// ------------------------------------------------------------
//
//  Canvas
//
// ------------------------------------------------------------

export default class Canvas {

  constructor() {

    this.canvas = null;
    this.ctx = null;
    this.w = $(window).width();
    this.h = $(window).height();

    this.setup();

  }

  setup () {

    this.canvas = document.createElement('canvas'); 
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = this.w;
    this.canvas.height = this.h;
    
  }

  update () {

    
  }

  draw () {

    
  }

}