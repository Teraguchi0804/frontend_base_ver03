//--------------------------------------------------
//
//  Sec01Video
//
//--------------------------------------------------
import YoutubeForSec01 from './YoutubeForSec01.js';

export default class Sec01Video {

  constructor(param){

    // sec01video用
    gb.in.rm.total++;
    if (gb.in.u.isSP) gb.in.rm.completed++;

    if (gb.in.u.isPC) this.setup();
    this.setEvents();

  }

  setup() {

    // create
    this.video = new YoutubeForSec01('sec01Video', gb.in.conf.youtubeID01, null);
    
  }

  setEvents() {


  }

}