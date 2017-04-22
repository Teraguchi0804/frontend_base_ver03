//--------------------------------------------------
//
//  GlContentsLoop
//
//--------------------------------------------------

export default class GlContentsLoop {

  constructor() {

    this.isAlways = true;
    this.isRunStatus = true;
    this.isAdjustParam = true;
    this.state = 'initial';
    this.sometimesState = 'initial';

    this.loopStart = false;

    this.loopList = [];

    this.setEvents();

  }

  update() {

    if (this.isAlways) this.runAlways();
    if (this.isRunStatus) this.runStatus();
    if (this.isAdjustParam) this.runAdjustParam();

  }

  // ------------------------------------------------------------
  // 常に行う処理
  // ------------------------------------------------------------    
  runAlways() {

    // if (gb.in.Section04Product.isControl) gb.in.controls.update();

    // gb.in.plane.shader.uniforms.t.value = (gb.in.up.cnt % 300) / 300;

    // camera
    gb.in.camera.updateControll();

  }

  // ------------------------------------------------------------
  // 各状態の処理
  // ------------------------------------------------------------
  runStatus() {

    if (this.state == 'initial') {


    } else if (this.state == 'start') {



    } else if (this.state == 'step01') {



    } else if (this.state == 'step02') {



    } else if (this.state == 'step03') {



    } else if (this.state == 'standby') {


    } else if (this.state == 'sometimes') {

      if (this.sometimesState == 'lineShadow') {


      } else if (this.sometimesState == 'sphere') {


      } else if (this.sometimesState == 'satellite') {


      }

    }

  }

  // ------------------------------------------------------------
  // パラメータ調整用処理
  // ------------------------------------------------------------
  runAdjustParam() {



  }

  draw() {

    gb.in.renderer.render( gb.in.scene.scene, gb.in.camera.camera );
    // gb.in.postprocess.composer.render(0.1);

  }

  loop() {

    if (this.loopStart) {

    this.update();
    this.draw();

    // log('clickef')

    }

  }

  start() {

    this.loopStart = true;

  }

  pause() {

    this.loopStart = false;

  }

  add(func) {

    this.loopList.push(func);
    
  }

  setEvents() {

    var self = this;

    gb.in.up.add('section04Product',this.loop.bind(this));

  }

}