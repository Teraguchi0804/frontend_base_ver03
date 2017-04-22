/**
 * fileOverview:
 * Project:
 * File: Common
 * Date:
 * Author:
 */

import Conf from '../Conf.js';
import Util from '../MyLibs/Util.js';
import Func from '../MyLibs/Func.js';

// import ReadyMgr from '../MyLibs/EventMgr/ReadyMgr.js';
// import UpdateMgr from '../MyLibs/EventMgr/UpdateMgr.js';
// import ResizeMgr from '../MyLibs/EventMgr/ResizeMgr.js';
// import ScrollMgr from '../MyLibs/EventMgr/ScrollMgr.js';
// import MouseMgr from '../MyLibs/EventMgr/MouseMgr.js';
// import LoadMgr from '../Func/LoadMgr.js';

// import Pjax from '../Func/Pjax.js';
// import JudgeEnvironment from '../Func/JudgeEnvironment.js';
// import ResponsiveSwitchImg from '../Func/_events/ResponsiveSwitchImg.js';
// import SwipeTransition from '../Func/SwipeTransition.js';

// import Menu from '../Display/UI/_compornents/Menu.js';
// import Nav from '../Display/UI/Nav.js';
// import Alert from '../Display/UI/Alert.js';
// import SideR from '../Display/UI/SideR.js';
// import Time from '../Func/Time.js';
// import ScrollTransition from '../Func/ScrollTransition.js';
// import PageTop from '../Display/UI/_parts/PageTop.js';
// import Sec01Video from '../Display/UI/Sec01Video.js';
// import Sns from '../Func/Sns.js';
// import SliderTop from '../Display/UI/SliderTop.js';


// import Layout from '../Display/Layout/Layout.js';

'use strict';

export default class Common {

  constructor() {

    this.onImmediate();
    this.setEvents();

  }

  onImmediate() {

    // ------------------------------------------------------------
    //  初期値の設定・データの配置
    //  util関数の初期化
    //  イベントマネージャーの設置
    // ------------------------------------------------------------
    gb.in.conf = new Conf();
    gb.in.u = new Util();
    gb.in.f = new Func();
    // gb.in.up = new UpdateMgr();
    // gb.in.r = new ResizeMgr();
    // gb.in.s = new ScrollMgr();
    // gb.in.m = new MouseMgr();
    // gb.in.rm = new ReadyMgr();
    // gb.in.loadMgr = new LoadMgr();
    // gb.in.sct = new ScrollTransition();

    // ------------------------------------------------------------
    //
    //  その他
    //
    // ------------------------------------------------------------
    // pjaxの設定
    // gb.in.pjax = new Pjax();

    // ------------------------------------------------------------
    //  Layout
    // ------------------------------------------------------------
    // gb.in.Layout = new Layout();


    // 準備完了後の処理
    // gb.in.rm.onCompletedFunc = ()=>{new DisplayOpening();}

  }

  onReady() {

    // ------------------------------------------------------------
    //  デバイス・ブラウザ判定
    //  スマホの向き判定
    //  ページ情報取得
    // ------------------------------------------------------------
    // gb.in.je = new JudgeEnvironment();
    // gb.in.resImg = new ResponsiveSwitchImg();
    // gb.in.sns = new Sns($('.fbShare'),$('.twShare'),$('.lineShare'),$('.onMail'))
    // gb.in.swt = new SwipeTransition();

    // gb.in.f.checkCssBlend();

    // ------------------------------------------------------------
    //  UI
    // ------------------------------------------------------------
    // gb.in.menu = new Menu();
    // gb.in.nav = new Nav();
    // gb.in.sideR = new SideR();
    // gb.in.alert = new Alert();
    // gb.in.pagetop = new PageTop();

    // bg
    // gb.in.sliderTop = new SliderTop($('#bgWrap .sec01'));

    // ------------------------------------------------------------
    //  Effects
    // ------------------------------------------------------------
    // gb.in.pageTransitionEffect = new PageTransitionEffect($('#pageTransitionLayer'));
    // gb.in.sec01Video = new Sec01Video();
    // gb.in.Sec02Bg = new Section02Bg();

    // gb.in.he01 = new HoverEffectSVG($('.SVGHover'),'#fff','#000');
    // gb.in.he02 = new HoverEffectSVG($('.SVGHoverW'),'#81d8d0','#fff');
    // gb.in.he03 = new HoverEffectSVG($('.SVGHoverW02'),'#81d8d0','#000');
    // gb.in.he04 = new HoverEffectSVGLogo($('#header .logo, #header .subTit'));
    // gb.in.he05 = new HoverEffectMenuItem($('#menu .menuList .item'));
    // gb.in.he06 = new HoverEffectSVGArrowSideR($('#sideR .next'));
    // gb.in.he07 = new HoverEffectMenuBtn($('.menuBtn01'));
    // gb.in.he08 = new HoverEffectSNSPCFooter($('#sideL .sns.sp'));

    // logo 出す
    // TweenMax.to($('#header .logo'), 2.2, {opacity: 1, ease: Power2.easeInOut})

    // gb.in.loadMgr.start();

  }

  onLoad() {

    // ------------------------------------------------------------
    //
    //  Func
    //
    // ------------------------------------------------------------


    // ------------------------------------------------------------
    //
    //  Layout
    //
    // ------------------------------------------------------------

    // ------------------------------------------------------------
    //
    //  Dispaly
    //
    // ------------------------------------------------------------

    // ------------------------------------------------------------
    //
    //  Motion
    //
    // ------------------------------------------------------------

  }

  setEvents() {

    $(document).on('ready', this.onReady.bind(this));
    $(window).on('load', this.onLoad.bind(this));

  }

}