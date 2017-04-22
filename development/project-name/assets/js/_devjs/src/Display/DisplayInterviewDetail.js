//--------------------------------------------------
//
//  Display
//
//--------------------------------------------------
import Effects from './Effects/Effects.js';
import Layout from '../Display/Layout/LayoutInterviewDetail.js';
import PageScroll from '../Display/UI/_parts/PageScroll.js';
import HoverEffectSNSPCDetails from '../Display/Effects/03_effects/HoverEffectSNSPCDetails.js';
import HoverEffectDetailsBtm from '../Display/Effects/03_effects/HoverEffectDetailsBtm.js';
import HoverEffectPageTop from '../Display/Effects/03_effects/HoverEffectPageTop.js';
import HeaderColor from '../Display/UI/HeaderColor.js';

import InertiaScroll01 from '../Display/UI/InertiaScroll01.js';
import InertiaScroll02 from '../Display/UI/InertiaScroll02.js';
import InertiaScroll03 from '../Display/UI/InertiaScroll03.js';

export default class DisplayTop {

  constructor(){

    this.onImmediate();
    this.setEvents();

  }

  onImmediate() {


    // ループスタート
    gb.in.up.loop();
    
  }

  onLoad() {

    // ------------------------------------------------------------
    //  UI
    // ------------------------------------------------------------
    Layout.run();

    // bg
    $('.sec03BgCanvas').removeClass('interview01 interview02 interview03'); // remove
    if ($('.section').hasClass('section03_detail01')) { // add
      $('.sec03BgCanvas').addClass('interview01')
    } else if ($('.section').hasClass('section03_detail02')) {
      $('.sec03BgCanvas').addClass('interview02')
    } else if ($('.section').hasClass('section03_detail03')) {
      $('.sec03BgCanvas').addClass('interview03')
    }

    gb.in.headerColor = new HeaderColor();

    // ------------------------------------------------------------
    //  Effects
    // ------------------------------------------------------------
    new HoverEffectSNSPCDetails();
    new HoverEffectPageTop($('.pageTop'))
    new HoverEffectDetailsBtm($('.block04 .box01'));
    new HoverEffectDetailsBtm($('.block04 .box02'));
    new HoverEffectDetailsBtm($('.block04 .box03'));

    if ($('.section').hasClass('section03_detail01')) { // add
      gb.in.inertia01 = new InertiaScroll01();
    } else if ($('.section').hasClass('section03_detail02')) {
      gb.in.inertia02 = new InertiaScroll02();
    } else if ($('.section').hasClass('section03_detail03')) {
      gb.in.inertia03 = new InertiaScroll03();
    }

  }

  static run() {

    // ------------------------------------------------------------
    //  UI
    // ------------------------------------------------------------
    Layout.run();

    // bg
    $('.sec03BgCanvas').removeClass('interview01 interview02 interview03'); // remove
    if ($('.section').hasClass('section03_detail01')) { // add
      $('.sec03BgCanvas').addClass('interview01')
    } else if ($('.section').hasClass('section03_detail02')) {
      $('.sec03BgCanvas').addClass('interview02')
    } else if ($('.section').hasClass('section03_detail03')) {
      $('.sec03BgCanvas').addClass('interview03')
    }

    gb.in.headerColor = new HeaderColor();

    // ------------------------------------------------------------
    //  Effects
    // ------------------------------------------------------------
    new HoverEffectSNSPCDetails();
    new HoverEffectPageTop($('.pageTop'))
    new HoverEffectDetailsBtm($('.block04 .box01'));
    new HoverEffectDetailsBtm($('.block04 .box02'));
    new HoverEffectDetailsBtm($('.block04 .box03'));

    if ($('.section').hasClass('section03_detail01')) { // add
      gb.in.inertia01 = new InertiaScroll01();
    } else if ($('.section').hasClass('section03_detail02')) {
      gb.in.inertia02 = new InertiaScroll02();
    } else if ($('.section').hasClass('section03_detail03')) {
      gb.in.inertia03 = new InertiaScroll03();
    }

  }

  setEvents() {

    $(window).on('load', this.onLoad.bind(this));        

  }

}