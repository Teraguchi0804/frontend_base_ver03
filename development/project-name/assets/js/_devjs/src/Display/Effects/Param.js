//--------------------------------------------------
//
//  Param
//
//--------------------------------------------------

export default class Param {

  constructor() {

    this.gui;
    this.json = {};
    // this.appName = "plusMV";

    var isFlag = true;

    this.clock = {
      progress: 0.5,
    }

    this.zoomblur = {
      strength: 46.0,
      size: 89.0,
    }

    this.transition = {
      progress: 0.0,
      size: 0.04,
      zoom: 30,
      colorSeparation: 0.3,
      strength: 0.6,
      tween: ()=>{

        var val;
        if (isFlag) val = 1.0;
        else val = 0.0

        isFlag = !isFlag;

        TweenMax.to(gb.in.plane02.shader.uniforms.progress, 2.5, {
          value: val,
          ease: Power4.easeOut
        })

      }
    }
    
    this.setupData();
    this.setup();

  }

  setupData() {


  }

  setup() {

    // if (gb.in.conf.PARAM) {

    this.gui = new dat.GUI();
    // this.gui = new dat.GUI({load: this.json});
    this.gui.remember(this);
    $(".dg").css({zIndex:99999});

    var f1 = this.gui.addFolder('zoomblur');
    f1.add(this.zoomblur, 'strength', 0.0, 2.0).step(0.01).listen().onChange(function(val){

      gb.in.plane.shaders[2].uniforms.strength.value = val;
      log(val);

    });
    f1.add(this.zoomblur, 'size', 0.0, 100.0).step(0.1).listen().onChange(function(val){

      gb.in.plane.shader.uniforms.nFrag.value = 1 / val;

    });
    f1.open();

    // this.gui.close();

  }

  setEvents() {


  }

}