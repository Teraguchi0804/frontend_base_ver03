/**
 * fileOverview: 環境判定クラス(デバイス、ブラウザ)、各判定メソッド詳細はDevice.jsを参照
 * Project:
 * File: JudgeEnvironment
 * Date:
 * Author:
 */

'use strict';

export default class JudgeEnvironment {

  constructor() {


    this.setup();
    this.setEvents();
 
  }

  setup() {

    // デバイス判定
    gb.in.u.isDeviceSP();
    gb.in.u.isDeviceTAB();
    gb.in.u.isDeviceMB();
    gb.in.u.isDevicePC();

    // ブラウザバージョン判定
    gb.in.u.isIEVersion();

    // responsive / portrait / landscape
    gb.in.u.isDirection();
    gb.in.u.isResponsive(gb.in.conf.bp);
    gb.in.r.add('isDirection', gb.in.u.isDirection.bind(gb.in.u));
    gb.in.r.add('isResponsive', gb.in.u.isResponsive.bind(gb.in.u, gb.in.conf.bp));

  }

  onReady() {

    this.setup();

  }
       
  setEvents() {


  }

}
