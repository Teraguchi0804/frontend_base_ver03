/**
 * fileOverview:
 * Project:
 * File: Common
 * Date:
 * Author:
 */

import Conf from '../Core/Conf';
import Util from '../mylibs/Util';
import Func from '../mylibs/Func';

'use strict';

export default class Common {

  constructor() {

    this.setup();
    this.setEvents();

  }

	setup() {

		/**
     * @type {Conf} : 初期値の設定・データの配置
		 * @type {Util} : Util関数の初期化
		 * @type {Func} : イベントマネージャーの設置
		 */
    gb.in.conf = new Conf();
    gb.in.u = new Util();
    gb.in.f = new Func();

  }

  onReady() {

    // ------------------------------------------------------------
    //  デバイス・ブラウザ判定
    //  スマホの向き判定
    //  ページ情報取得
    // ------------------------------------------------------------



  }

  onLoad() {

    

  }

  setEvents() {

    $(document).on('ready', this.onReady.bind(this));
    $(window).on('load', this.onLoad.bind(this));

  }

}