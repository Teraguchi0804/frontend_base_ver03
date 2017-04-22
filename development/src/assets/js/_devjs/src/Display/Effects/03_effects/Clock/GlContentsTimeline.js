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

    var val = gb.in.plane.shader.uniforms.progress;

    this.tlMain
      .set(val, {
        value: -1.0,
      })
      .to(val, 4.0, {
        value: 1.0,
        ease: Power3.easeInOut,
        onComplete: ()=>{

          gb.in.ClockEf.$wrap.hide(); // ページ遷移エフェクトレイヤーを隠す
          gb.in.ClockEf.pause();

        }
      })

  }

  inEffect() {

    var val = gb.in.plane.shader.uniforms.progress;

    var tl = new TimelineMax();

    log('in');

    tl
      .set(val, {
        value: -1.0,
      })
      .to(val, 2.0, {
        value: 1.0,
        ease: Power3.easeOut,
        onComplete: ()=>{

          gb.in.ClockEf.$wrap.hide(); // ページ遷移エフェクトレイヤーを隠す
          gb.in.ClockEf.pause();

        }
      })

  }

  outEffect(cb) {

    var val = gb.in.plane.shader.uniforms.progress;

    var tl = new TimelineMax();

    log('out')

    tl
      .set(val, {
        value: 1.0,
      })
      .to(val, 2.0, {
        value: -1.0,
        ease: Power3.easeOut,
        onComplete: ()=>{

          cb();

        }
      })

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



  }

  onResizse() {

  }


  setEvents() {

    gb.in.r.add('gltimeline',this.onResizse.bind(this));

  }


}