//--------------------------------------------------
//
//  Cube
//
//-------------------------------

export default class Scene {  

  constructor() {

    this.camera;

    this.fov    = 80;
    this.aspect = gb.in.r.W() / gb.in.r.H();
    this.near   = 1;
    this.far    = 10000;

    this.defAspect = 1080/1920;
    this.winAspect = gb.in.r.H()/gb.in.r.W();
    this.val = this.winAspect / this.defAspect;
    this.valForParticle = this.defAspect / this.winAspect;

    this.setup();
    // this.create();
    // this.createForShader();
    this.createOrthographic();
    this.setEvents();
    this.onResize();

  }

  setup() {


  }

  create() {

    this.camera = new THREE.PerspectiveCamera( this.fov, this.aspect, this.near, this.far );
    this.camera.position.z = 800;
    // this.camera.position.y = 400;

  }

  createForShader() {

    this.camera = new THREE.Camera();
    this.camera.position.z = 1;

  }

  createOrthographic() {

    var w = gb.in.renderer.domElement.width;
    var h = gb.in.renderer.domElement.height;

    this.camera = new THREE.OrthographicCamera( w/-4, w/4, h/4, h/-4, 1, 1000 );
    this.camera.position.z = 1;

  }

  updateControll() {

    // this.camera.position.x += ( - gb.in.m.cx * 0.01 * this.val - this.camera.position.x ) * 0.08;
    // this.camera.position.y += ( - gb.in.m.cy * 0.01 * this.val - this.camera.position.y ) * 0.08;
    this.camera.lookAt( gb.in.scene.scene.position );

  }

  // オブジェクト
  tweenPos(time,target) {

    var tX = target.x || 0;
    var tY = target.y || 0;
    var tZ = target.z || 0;
    var delay = target.delay || 0;
    var e = target.ease || Power2.easeOut;

    var t = time || 1.0;

    TweenMax.to(this.camera.position, t, {
      x: tX,
      y: tY,
      z: tZ,
      delay: delay,
      ease: e,
    });

  }

  update() {


  }

  onResize() {

    this.winAspect = gb.in.r.H()/gb.in.r.W();
    this.val = (this.winAspect / this.defAspect) * 0.4;
    this.valForParticle = (this.defAspect / this.winAspect) * 1;

  }

  setEvents() {

    gb.in.r.add('glCamera',this.onResize.bind(this));

  }

}
