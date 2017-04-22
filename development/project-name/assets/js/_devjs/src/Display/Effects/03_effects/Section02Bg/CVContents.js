//--------------------------------------------------
//
//  CVContents
//
//--------------------------------------------------
import Loop from './CVContentsLoop.js';
import Timeline from './CVContentsTimeline.js';
import CreateCanvas from './_details/CreateCanvas.js';
import FullSize from '../../../../MyLibs/Display/Layout/FullSize.js';

export default class CVContents {

  constructor() {

    this.setup(); 
    // this.create();
    this.setEvents();
    // loop
    this.loop = new Loop();
    // timeline
    this.timeline = new Timeline();

  }

  setup() {

    // リソースのロード
    // gb.in.loadMgr.sec02Img();
    

  }

  create() {

    // gb.in.rm.total += 1;
    // canvasの生成
    // レティーナ用に2倍
    gb.in.canvas = new CreateCanvas($('#bgWrap .sec02BgCanvas'),gb.in.conf.defW,gb.in.conf.defH,()=>{

      var l = new FullSize($('#bgWrap'),$('.sec02BgCanvas'),0,'FullSizeSec02BgCanvas');
      l.targetDefW = gb.in.conf.defW;
      l.targetDefH = gb.in.conf.defH;
      l.run();

    });

    // ui追加(コントローラー、profilerなど)
    // this.addUI();


  }

  addUI() {

    // paramrter調整
    // gb.in.param = new gb.Param();

  }

  play() {

    this.loop.start();
    this.timeline.tlMain.play();

  }

  pause() {

    this.loop.pause();
    this.timeline.tlMain.pause();

  }

  onResize() {

  }

  setEvents() {

    // gb.in.r.add('cvContents', this.onResize.bind(this));
    // gb.in.hash.onChangeFuncList.push(this.onSection02.bind(this));

  }

}