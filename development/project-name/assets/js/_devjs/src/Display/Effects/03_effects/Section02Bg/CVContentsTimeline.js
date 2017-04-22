//--------------------------------------------------
//
//  CVContentsTimeline
//
//--------------------------------------------------

export default class  CVContentsTimeline {

  constructor() {

    this.tlMain = new TimelineMax();
    this.setup();
    this.setEvents();

  }

  setup() {

    // タイムラインを止めておく
    this.tlMain.pause();

    this.beginning();
    this.step01();
    this.step02();
    this.step03();
    this.standBy();
    this.sometimes();

  }

  beginning() {

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

      },'+=0.0')    

  }

  onResizse() {


  }

  setEvents() {

    // gb.in.r.add('cvTimeline', this.onResizse.bind(this));

  }

}