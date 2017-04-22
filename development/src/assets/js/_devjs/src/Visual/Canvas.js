/**
 * fileOverview:
 * Project:
 * File: Canvas
 * Date:
 * Author:
 */

import Entry from '../Entry.js';
// import Camera from './Utils/Camera.js';

'use strict';

export default class Canvas extends Entry{

  constructor(opts = {}) {

    super();

    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.output = opts.output || document.createElement('div');

    this.camera = null;
    this.renderer = null;
    this.scene = null;
		this.cube = null;

    this.createCamera = this._createCamera.bind(this);
    this.createRenderer = this._createRenderer.bind(this);
    this.createScene = this._createScene.bind(this);
    this.createObject = this._createObject.bind(this);
    this.orbitControls = this._orbitControls.bind(this);

    this.onResize = this._onResize.bind(this);

    this.Update = this._Update.bind(this);

  }

  /**
   * 初期化
   */
  init(){

    this.createCamera();
		this.createScene();
    this.createRenderer();

		this.orbitControls();

		this.createObject();

    this.Update();

    //リサイズイベント発火
    window.addEventListener('resize', () => {
      this.onResize();
    }, false);

  }

  /**
   * カメラ作成
   */
  _createCamera(){

    this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 1000);
    this.camera.position.x = -30;
    this.camera.position.y = 40;
    this.camera.position.z = 30;

    this.camera.lookAt(new THREE.Vector3(0,0,0));

  }

  /**
   * レンダラー作成
   */
  _createRenderer(){

		this.renderer = new THREE.WebGLRenderer({
      alpha              : false,
      antialias          : false,
      stencil            : false,
      depth              : true,
      premultipliedAlpha : false
		});

    this.renderer.setClearColor(0xffffff);
    this.renderer.setPixelRatio(window.devicePixelRatio || 1);
    this.renderer.setSize(this.width, this.height);
    this.output.appendChild(this.renderer.domElement);

  }

  /**
   *　シーン作成
   */
  _createScene(){

		this.scene = new THREE.Scene();

  }

	/**
	 *　Object作成
	 */
	_createObject(){

    var cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
    var cubeMaterial = new THREE.MeshBasicMaterial({
      color: 0x000000,
      wireframe: true
    });

    this.cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    this.cube.position.x = 3;
    this.cube.position.y = 3;
    this.cube.position.z = 3;

    this.scene.add(this.cube);

	}

  /**
   *　更新
   */
  _Update() {
    requestAnimationFrame( () => {
      this.Update();
    });
    // this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }

  /**
   *　画面リサイズ
   */
  _onResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

	/**
   * カメラコントロール
	 */
	_orbitControls(){
		this.controls = new THREE.OrbitControls(this.camera);
		this.controls.autoRotate = true;
		var clock = new THREE.Clock();

		var delta = clock.getDelta();
		this.controls.update(delta);
  }

	setEvents() {

    $(window).on('load', this.onLoad.bind(this));

  }

}