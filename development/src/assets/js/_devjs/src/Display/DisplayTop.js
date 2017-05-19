/**
 * fileOverview:
 * Project:
 * File: Display
 * Date:
 * Author:
 */

import Effects_test01 from "./Effects/Effects_test01";

'use strict';

export default class DisplayTop {

  constructor(){

    this.onImmediate();
    this.setEvents();

  }

  onImmediate() {

    // アニメーションループスタート
    // gb.in.up.loop();
    
  }

  onLoad() {

    // gb.in.eff01 = new Effects_test01();

  }

  setEvents() {

    $(window).on('load', this.onLoad.bind(this));        

  }

}