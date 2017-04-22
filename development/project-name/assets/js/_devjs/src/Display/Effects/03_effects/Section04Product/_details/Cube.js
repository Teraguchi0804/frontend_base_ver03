//--------------------------------------------------
//
//  Cube
//
//--------------------------------------------------

(function(){

  

  // function Cube() {

  //   this.cube;
  //   this.material = null;

  //   this.setup();

  // }

  // Cube.prototype = {

  //   setup: function() {

  //     // ------------------------------------------------------------
  //     //  shader
  //     // ------------------------------------------------------------
  //     // this.shader = new gb.Plasma(this.create.bind(this));
  //     // this.shader = new gb.Clock(this.create.bind(this));
  //     // this.shader = new gb.Color(this.create.bind(this));

  //     // this.create();

  //     var shaderLoadList = [
  //                        gb.Clock,
  //                        gb.Color,
  //                        gb.Plasma,
  //                        gb.Sepia
  //                      ]
  //     var shaders = [];

  //     var shaderSerialLoad = (len, cb)=>{

  //         var shader,cnt=0;

  //         var load = (i)=>{
  //           shader = new shaderLoadList[i](comp);
  //           shaders.push(shader);
  //         };

  //         var comp = function(){
  //           cnt++;
  //           if(cnt == len) cb(shaders);
  //           else load(cnt);
  //         };

  //         load(cnt);

  //     }

  //     shaderSerialLoad(shaderLoadList.length,(shaders)=>{

  //       this.shader = shaders[3];

  //       log(shaders);
  //       this.create();

  //     })

  //   },

  //   create: function() {

  //     // ------------------------------------------------------------
  //     //  cube
  //     // ------------------------------------------------------------
  //     var geometry = new THREE.CubeGeometry(300, 300, 300);
  //     for (var i=0,len=geometry.faces.length; i<len; i++) {
  //         geometry.faces[i].color.setHSL(0,0.5,0.5);
  //     }
  //     // this.material = new THREE.MeshBasicMaterial( { vertexColors: THREE.FaceColors } );

  //     this.material = new THREE.ShaderMaterial( {
  //                           uniforms: this.shader.uniforms,
  //                           vertexShader: this.shader.vs,
  //                           fragmentShader: this.shader.fs
  //                         });


  //     this.cube = new THREE.Mesh( geometry, this.material);

  //     this.cube.rotation.z = Math.PI / 8;

  //     gb.in.scene.scene.add(this.cube);

  //     log(this.cube);

  //     // axis
  //     // var axis = new THREE.AxisHelper(1000);
  //     // axis.position.set(0,0,0);


  //     // gb.in.scene.add(axis);

  //   },

  //   update: function() {

  //     // size

  //     // color
  //     // this.material.color.setRGB(gb.in.param.h,gb.in.param.s,gb.in.param.l);

  //   },


  //   setEvents: function() {


  //   },

  // }

  // // 公開api
  // gb.Cube = Cube;
  
})();