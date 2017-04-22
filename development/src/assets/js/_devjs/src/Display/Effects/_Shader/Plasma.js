//--------------------------------------------------
//
//  Plasma
//
//--------------------------------------------------

(function(){

  

  function Plasma(cb) {

    this.uniforms = {
      t: { type: "f", value: 1.0 }, // time
      r: { type: "v2", value: new THREE.Vector2() }, //resolution
      tDiffuse: {type: "t", value: null},
      texture: {type: "t", value: null},
    };

    this.vs = null;
    this.fs = null;

    this.cb = cb;

    this.setResolution();
    this.getShaderSrc();
    
  }

  Plasma.prototype = {

    getShaderSrc: function() {

      var self = this;

      $.when(
        this.getVs(),
        this.getFs()
      )
      .done(function() {
          log(self.vs, self.fs);
          self.cb();
      })
      .fail(function() {
          log('error');
      });

    },

    getVs: function(){
      var self = this;
      return $.get('/project-name/assets/js/_devjs/src/Display/Motion/Shader/Plasma.vert', function(data){
        self.vs = data;
      });
    },

    getFs: function(){
      var self = this;
      return $.get('/project-name/assets/js/_devjs/src/Display/Motion/Shader/Plasma.frag', function(data){
        self.fs = data;
      });
    },

    setResolution: function(){
    
      this.uniforms.r.value.x = gb.in.renderer.domElement.width;
      this.uniforms.r.value.y = gb.in.renderer.domElement.height;

    },

  }

  // 公開api
  gb.Plasma = Plasma;
  
})();