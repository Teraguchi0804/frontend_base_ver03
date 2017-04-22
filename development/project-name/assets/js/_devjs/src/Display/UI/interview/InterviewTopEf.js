//--------------------------------------------------
//
//  InterviewTopEf
//
//--------------------------------------------------

import FullSizeByScaleInterviewIndex from '../../../MyLibs/Display/Layout/FullSizeByScaleInterviewIndex.js';
import HoverCardItem from './HoverCardItem.js';

export default class InterviewTopEf {

  constructor($target) {

    this.$target = $target

    gb.in.interviewCardHover = this.isHover = false;


    this.setup();
    this.setEvents();

  }

  setup() {

    // layout
    // topの中央コンテンツを上下中央で小さくする
    var l = new FullSizeByScaleInterviewIndex($('#bgWrap'),$('#bgWrap .sec03 .blockWrap'), 1);
    l.targetDefW = gb.in.conf.W;
    l.targetDefH = gb.in.conf.H;
    l.run();
    l.onResize();

    // effects
    new HoverCardItem($('#bgWrap .sec03 .block .item').eq(0));
    new HoverCardItem($('#bgWrap .sec03 .block .item').eq(1));
    new HoverCardItem($('#bgWrap .sec03 .block .item').eq(2));
    // new HoverCardItem($('#bgWrap .sec03 .block .item').eq(1))
    
  }

  onEnter() {

    log('enter');
    
  }

  onLeave() {

    log('leave');

  }

  setEvents() {

    $('#bgWrap .sec03 .block').on('mouseenter', this.onEnter.bind(this));
    $('#bgWrap .sec03 .block').on('mouseleave', this.onLeave.bind(this));

  }

  removeEvents() {

  }
  
}