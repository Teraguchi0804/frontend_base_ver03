//--------------------------------------------------
//
//  Display
//
//--------------------------------------------------
import Effects from './Effects/Effects.js';
import FullSizeByScaleInterviewIndex from '../MyLibs/Display/Layout/FullSizeByScaleInterviewIndex.js';
import Layout from '../Display/Layout/LayoutHistory.js';
import Slider from '../Display/UI/Slider.js';
import PageScroll from '../Display/UI/_parts/PageScroll.js';
import HoverEffectSNSSPFooter from '../Display/Effects/03_effects/HoverEffectSNSSPFooter.js';
import HoverEffectHistoryAnchor from '../Display/Effects/03_effects/HoverEffectHistoryAnchor.js';
import HoverEffectPageTop from '../Display/Effects/03_effects/HoverEffectPageTop.js';
import YearMgr from './UI/history/YearMgr.js';
import HeaderColor from '../Display/UI/HeaderColor.js';

import InertiaScroll04 from '../Display/UI/InertiaScroll04.js';

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
    //  UI / Layout
    // ------------------------------------------------------------
    // 高さを合わせた後に、レイアウト
    Layout.run();

    new Slider();

    gb.in.headerColor = new HeaderColor();

    new YearMgr();
        
    // ------------------------------------------------------------
    //  Effects
    // ------------------------------------------------------------
    
    gb.in.snsSPHoverEf = new HoverEffectSNSSPFooter($('.snsWrap'));
    new HoverEffectPageTop($('.pageTop'))
    new HoverEffectHistoryAnchor($('.block01 .textWrap02 .item'));

    gb.in.inertia04 = new InertiaScroll04();

  }

  static run() {

    // ------------------------------------------------------------
    //  UI / Layout
    // ------------------------------------------------------------

    // 高さを合わせた後に、レイアウト
    Layout.run();

    new Slider();

    gb.in.headerColor = new HeaderColor();

    new YearMgr();

    // ------------------------------------------------------------
    //  Effects
    // ------------------------------------------------------------
    gb.in.snsSPHoverEf = new HoverEffectSNSSPFooter($('.snsWrap'));
    new HoverEffectPageTop($('.pageTop'))
    new HoverEffectHistoryAnchor($('.block01 .textWrap02 .item'));

    gb.in.inertia04 = new InertiaScroll04();

  }

  setEvents() {

    $(window).on('load', this.onLoad.bind(this));        

  }

}