//--------------------------------------------------
//
//  Profiler
//
//--------------------------------------------------

export default class Profiler {

  constructor() {

    this.Stats;
    this.setup();
    this.setEvents();

  }

  setup() {

    // if (gb.in.conf.STATS) {

      this.Stats = new Stats();
      this.Stats.domElement.style.position = "fixed";
      this.Stats.domElement.style.left     = "0px";
      this.Stats.domElement.style.top   = "0px";
      document.body.appendChild(this.Stats.domElement);
    

    // };

  }

  update() {

    if(this.Stats) {
      this.Stats.update();
    }

  }

  setEvents() {

    gb.in.up.add('profiler',this.update.bind(this));

  }

}