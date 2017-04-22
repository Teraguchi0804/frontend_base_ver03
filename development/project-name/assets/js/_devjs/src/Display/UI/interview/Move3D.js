//--------------------------------------------------
//
//  Move3D
//
//--------------------------------------------------

export default class Move3D {

  constructor($target) {

    this.$target = $target;

    this.setup();
    this.setEvents();

    log('move');

  }

  setup() {


  }

  run() {




  }

  onMove() {

    var paramX = 10;
    var paramY = 10;

    // var mx = gb.in.m.x;
    // var my = gb.in.m.y;
    var cx = gb.in.m.cx;
    var cy = gb.in.m.cy;

        // transform values
    // var rotX = 2 * paramX / this.$target.height() * mx - paramX;
    // var rotY = 2 * paramY / this.$target.width() * my - paramY;
    var rotX = 2 * paramX / this.$target.height() * cx - paramX;
    var rotY = 2 * paramY / this.$target.width() * cy - paramY;

    TweenMax.set(this.$target, {
      rotationX: rotY,
      rotationY: rotX,
    });


    log(rotX,rotY,cx,cy)

  }

  setEvents() {

    gb.in.m.add('Move3D', this.onMove.bind(this));

  }
  
}