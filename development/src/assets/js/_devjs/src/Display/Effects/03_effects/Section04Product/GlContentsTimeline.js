//--------------------------------------------------
//
//  GlContentsTimeline
//
//--------------------------------------------------

import SomeTimes from '../../../../MyLibs/EventMgr/SometimesMgr.js';

export default class GlContentsTimeline {

  constructor() {

    this.tlMain = new TimelineMax();
    // this.setup();
    this.setEvents();

  }

  setup() {

    // タイムラインを止めておく
    this.tlMain.pause();
    
    this.beginning();
    // this.step01();
    // this.step02();
    // this.step03();
    // this.standBy();
    this.sometimes();    

  }

  beginning() {

    this.tlMain
      // zoom in
      .to(gb.in.loadMgr.shaders[0].uniforms.strength, 1.3, {
        value: 500,
        ease: Expo.easeInOut,
        onStart: ()=> {

          TweenMax.set(gb.in.loadMgr.shaders[1].uniforms.strength, {value: 500});

        }
      })

      // camera移動
      .to(gb.in.camera.camera.position, 1.5, {
        z: 200,
        ease: Expo.easeInOut
      },'-=1.3')

      // plane移動
      .to(gb.in.Section04Product.plane.plane.position, 1.5, {
        x: -100,
        y: 200,
        ease: Expo.easeInOut
      },'-=1.5')

      // zoom out
      .to(gb.in.loadMgr.shaders[0].uniforms.strength, 1, {
        value: 0,
        ease: Expo.easeIn
      },'-=0.4')

      // plane01がopacityで消える
      .to(gb.in.loadMgr.shaders[0].uniforms.opacity, 1, {
        value: 0,
        ease: Power3.easeInOut
      },'-=0.7')

      // plane02のblur out
      .to(gb.in.loadMgr.shaders[1].uniforms.strength, 1, {
        value: 0,
        ease: Expo.easeInOut
      },'-=1.0')

      // plane02が出て来る
      .to(gb.in.loadMgr.shaders[1].uniforms.opacity, 1, {
        value: 1,
        ease: Expo.easeInOut
      },'-=1.0')

      .to(gb.in.camera.camera.position, 1.5, {
        z: 400,
        ease: Expo.easeOut,
        onComplete: ()=> {

          // materialの変更

          gb.in.loadMgr.shaders[2].uniforms.from.value = gb.in.Section04Product.plane.textures[1];
          gb.in.loadMgr.shaders[2].uniforms.to.value = gb.in.Section04Product.plane.textures[2];

          gb.in.Section04Product.plane.plane02.material = new THREE.ShaderMaterial( {
                                        uniforms: gb.in.loadMgr.shaders[2].uniforms,
                                        vertexShader: gb.in.loadMgr.shaders[2].vs,
                                        fragmentShader: gb.in.loadMgr.shaders[2].fs,
                                        transparent: true,
                                      });

          gb.in.Section04Product.plane.plane02.scale.x = gb.in.Section04Product.plane.plane02.scale.y = 1200.0;


        }
      },'-=1.0')



  }

  step01() {


  }

  step02() {



  }

  step03() {



  }

  standBy() {


  }

  // 時々
  sometimes() {

    var self = this;

    this.tlMain
      .add(function(){


        var s = new SomeTimes();

        s.add(function(){

          TweenMax.to(gb.in.loadMgr.shaders[2].uniforms.progress, 1.3, {
            value: 1,
            ease: Expo.easeInOut,
            onComplete: ()=>{

              gb.in.loadMgr.shaders[2].uniforms.from.value = gb.in.Section04Product.plane.textures[3];

            }

          })

          
          

        }, 2.0, 2.0)

        s.add(function(){

          TweenMax.to(gb.in.loadMgr.shaders[2].uniforms.progress, 1.3, {
            value: 0,
            ease: Expo.easeInOut,
            onComplete: ()=>{

              gb.in.loadMgr.shaders[2].uniforms.to.value = gb.in.Section04Product.plane.textures[4];

            }

          })


        }, 2.0, 2.0)

        s.add(function(){

          TweenMax.to(gb.in.loadMgr.shaders[2].uniforms.progress, 1.3, {
            value: 1,
            ease: Expo.easeInOut,
            onComplete: ()=>{

              gb.in.loadMgr.shaders[2].uniforms.from.value = gb.in.Section04Product.plane.textures[5];

            }

          })

        }, 2.0, 2.0)

        s.add(function(){

          TweenMax.to(gb.in.loadMgr.shaders[2].uniforms.progress, 1.3, {
            value: 0,
            ease: Expo.easeInOut,
            onComplete: ()=>{

              gb.in.loadMgr.shaders[2].uniforms.to.value = gb.in.Section04Product.plane.textures[1];

            }

          })


        }, 2.0, 2.0)

        s.add(function(){

          TweenMax.to(gb.in.loadMgr.shaders[2].uniforms.progress, 1.3, {
            value: 1,
            ease: Expo.easeInOut,
            onComplete: ()=>{

              gb.in.loadMgr.shaders[2].uniforms.from.value = gb.in.Section04Product.plane.textures[2];

            }

          })


        }, 2.0, 2.0);

        s.start();

      },'+=0.0')
    

  }

  onResizse() {

  }


  setEvents() {

    gb.in.r.add(this.onResizse.bind(this));

    $(window).on('click',()=>{

      // this.start();

    });

  }


}