// ------------------------------------------------------------
//
//  Point
//
// ------------------------------------------------------------

(function(){

  function Point(x,y) {

    this.x = x || 0; //previous mouse x
    this.y = y || 0; //previous mouse y
    this.vx = 0; //center x
    this.vy = 0; //center y

    this.defX = x || 0;
    this.defY = y || 0;

    this.px = 0; //previous mouse x
    this.py = 0; //previous mouse y

    this.radius = 0;    // 半径
    this.color = null;  // 色
    this.isRemove = false;// 消去フラグ

    // this.GRAVITY = 0.4;
    this.GRAVITY = 0;
    this.SPRING = 0.08;  // バネ係数
    this.FRICTION = 0.97;  // 摩擦係数
    this.MAX_DIS = 100;  // ボールがマウスに反応する最大距離

    this.top = 0;
    this.right = gb.in.r.W();
    this.bottom = gb.in.r.H();
    this.left = 0;

  }

  Point.prototype = {


    create: function () {


    },

    update: function () {


    },

    draw: function () {

      
      
    },

    loop: function () {

    },


  }

  gb.Point = Point;

})();