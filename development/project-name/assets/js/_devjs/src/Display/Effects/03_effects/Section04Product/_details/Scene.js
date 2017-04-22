//--------------------------------------------------
//
//  Cube
//
//--------------------------------------------------

(function(){

  

  function Scene() {

    this.scene;

    this.setup();
    this.create();

  }

  Scene.prototype = {

    setup: function() {


    },

    create: function() {

      this.scene = new THREE.Scene();

    },

    updateRotate: function() {

      var rotateX = gb.in.u.radian(gb.in.up.cnt/1);
      var rotateY = gb.in.u.radian(gb.in.up.cnt/1);
      var rotateZ = gb.in.u.radian(gb.in.up.cnt/1);
      // var rotateY = 0;
      // var rotateZ = 0;

      this.scene.rotation.set(rotateX, rotateY, rotateZ);

    },

    // オブジェクト
    tweenPos: function(time,target) {


    },

    update: function() {


    },


    setEvents: function() {


    },

  }

  // 公開api
  gb.Scene = Scene;
  
})();