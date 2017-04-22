//--------------------------------------------------
//
//  GlContents
//
//--------------------------------------------------
import Loop from './GlContentsLoop.js';
import Timeline from './GlContentsTimeline.js';
import Plane from './_details/Plane.js';
import Param from '../../Param.js';

export default class GlContents {

  constructor($wrap = $('body')) {

    this.renderer;
    this.camera;
    this.scene;
    this.light;

    this.state = 'initial';
    this.adjustParam = true;
    this.stateLineRotate = false;
    this.sometimesState = 'initial';

    this.isControl = false;
    this.controls;

    this.setup();
    this.create($wrap);
    this.setEvents();
    // loop
    this.loop = new Loop();
    // timeline
    this.timeline = new Timeline();

  }

  setup() {


  }

  create($wrap) {

    // render
    gb.in.renderer = this.renderer = new THREE.WebGLRenderer({antialias: true});
    this.renderer.setSize( gb.in.r.W(), gb.in.r.H() );
    this.renderer.setClearColor(0xffffff, 0.0);
    $wrap.append(this.renderer.domElement)
    // document.body.appendChild(  );
    $(this.renderer.domElement).css({
      position: 'absolute',
      top: 0,left: 0,
      'z-index': 1,
    });

    // scene
    gb.in.scene = new gb.Scene();
    this.scene = gb.in.scene.scene;

    // camera
    gb.in.camera = new gb.Camera();
    this.camera = gb.in.camera.camera;

    // light
    this.light = new THREE.DirectionalLight( 0xffffff, 3 );
    this.light.position.z = 3;
    this.scene.add(this.light);

    // オブジェクト追加
    this.addObjects();

    // ui追加(コントローラー、profilerなど)
    // this.addUI();

    // リソースのロード
    gb.in.loadMgr.section04ProductShader();

  }

  addObjects() {

    this.plane = new Plane();

  }

  addUI() {

    // controls

    if (this.isControl) {

      gb.in.controls = this.controls = new THREE.TrackballControls(this.camera);
      this.controls.zoomSpeed = 0.8;
      this.controls.rotateSpeed = 3;

    };

    // profiler設定
    new gb.Profiler();
    // paramrter調整
    gb.in.param = new Param();

  }

  onResize() {

    var w = window.innerWidth;
    var h = window.innerHeight;

    this.renderer.setSize(w, h);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();

  }

  onSection04(cur,prev) {

    if (cur == 'product') {

      this.loop.start();
      this.timeline.tlMain.play();

    } else {

      this.loop.pause();
      this.timeline.tlMain.pause();

    }

  }

  setEvents() {

    gb.in.r.add(this.onResize.bind(this));
    gb.in.hash.onChangeFuncList.push(this.onSection04.bind(this));
    $(window).on('onSection04ProductImg', ()=>{this.timeline.setup();});

  }

}