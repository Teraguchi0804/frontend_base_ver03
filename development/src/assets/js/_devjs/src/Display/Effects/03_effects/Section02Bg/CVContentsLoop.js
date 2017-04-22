//--------------------------------------------------
//
//  CVContentsLoop
//
//--------------------------------------------------

export default class CVContentsLoop {

  constructor() {

    this.isAlways = true;
    this.isRunStatus = true;
    this.isAdjustParam = true;
    this.state = 'initial';
    this.sometimesState = 'initial';

    this.loopList = [];

    this.loopStart = false;

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

    for (var i in this.loopList) this.loopList[i]();

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



  }

  loop() {

    if (this.loopStart) {

    this.update();
    this.draw();

    // log('section02')

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

    gb.in.up.add('section02Bg',this.loop.bind(this));

  }

}