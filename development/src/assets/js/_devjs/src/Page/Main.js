/**
 * fileOverview:
 * Project:
 * File: Main
 * Date:
 * Author:
 */

import DisplayTop from '../Display/DisplayTop.js';
// import DisplayMovie from '../Display/DisplayMovie.js';
// import DisplayInterview from '../Display/DisplayInterview.js';
// import DisplayInterviewDetail from '../Display/DisplayInterviewDetail.js';
// import DisplayHistory from '../Display/DisplayHistory.js';

'use strict';

export default class Main {

  constructor() {

    this.onImmediate();
    this.setEvents();

  }

  onImmediate() {

  }

  onReady() {

    //pageページ別のIDを取得
    var page = $('body').data('id');

		//pageのIDごとに発火するクラスの振り分け
    switch (page) {

      case 'top':

        new DisplayTop();

        break;

      // case 'movie':
      //
      //   new DisplayMovie();
			//
      //   break;
			//
      // case 'interview':
      //
      //   new DisplayInterview();
			//
      //   break;
			//
      // case 'interview_detail':
      //
      //   new DisplayInterviewDetail();
			//
      //   break;
			//
      // case 'history':
      //
      //   new DisplayHistory();
			//
      //   break;

    }

  }

  onLoad() {

    
  }

  onRender() {


  }

  setEvents() {

    $(document).on('ready', this.onReady.bind(this));
    $(window).on('load', this.onLoad.bind(this));        

  }

}