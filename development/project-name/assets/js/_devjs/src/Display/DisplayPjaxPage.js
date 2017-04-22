//--------------------------------------------------
//
//  DisplayPjaxPage
//
//--------------------------------------------------
import DisplayTop from './DisplayTop.js';
import DisplayMovie from './DisplayMovie.js';
import DisplayInterview from './DisplayInterview.js';
import DisplayInterviewDetail from './DisplayInterviewDetail.js';
import DisplayHistory from './DisplayHistory.js';
import ScaleInterviewDetail from './Layout/Size/ScaleInterviewDetail.js';
import Layout from './Layout/Layout.js';
import HoverEffectSVG from './Effects/03_effects/HoverEffectSVG.js';
import PageTop from './UI/_parts/PageTop.js';
import Sns from '../Func/Sns.js';

export default class DisplayPjaxPage {

  constructor(){


    this.setup();

  }

  setup() {

  }

  static outPageBeforeEf(url) {

    // sideLを消す 早めの段階で
    var nextUrl = gb.in.pjax.getLink(url);
    if (nextUrl=='top' || nextUrl=='interview_detail') {
      // sideL
      var tl02 = new TimelineMax();
      tl02.to($('#sideL .sns.sp'), 0.4,{
        opacity:0,
        onComplete:()=>{
          $('#sideL .sns.sp').hide();    
        }
      })
    };

    // topかつスマホだったらside消す
    if (gb.in.pjax.id=='top'&&gb.in.u.isResSP) {

      var tl02 = new TimelineMax();
      tl02.to($('#sideL .sns.sp, #sideR .indicator'), 0.4,{
        opacity:0
      })

    };

    // menu閉じる 開いていたら
    if (gb.in.menu.isOpen) {
      gb.in.menu.toggle();
      gb.in.menuBtn01.toggle();
    }

    // sideR変更
    gb.in.sideR.outNum();
    gb.in.sideR.outPageName();
    gb.in.sideR.outNext();
    gb.in.nav.outPage();

    // nav
    if (gb.in.u.isResSP) TweenMax.to($('#nav'), 0.4, {opacity: 0,ease: Power3.easeOut})

  }

  static outPageAfterEf() {


    if (gb.in.sec01Video.video) gb.in.sec01Video.video.removeEvents();

    if (gb.in.time) gb.in.time.removeEvents();

    // if (gb.in.swt) gb.in.swt.removeEvents();

    if (gb.in.headerColor) gb.in.headerColor.removeEvents();

    // sec01 動画止める
    if (gb.in.sec01Video.video) gb.in.sec01Video.video.player.pauseVideo();
    if (gb.in.sliderTop) gb.in.sliderTop.removeEvents();

    // ココらへんでいろいろ止める
    gb.in.Sec02Bg.pause();
    if (gb.in.Sec02Video) gb.in.Sec02Video.removeEvents();
    if (gb.in.sec02Video) gb.in.sec02Video.onStop();
    if (gb.in.sec02Video) gb.in.sec02Video.video.isPlay = true;

    gb.in.menu.reset();

    // トップホバーエフェクト解除
    if (gb.in.snsSPHoverEf) gb.in.snsSPHoverEf.reset();

    gb.in.r.remove('fullsize'); //仮書き、あとでどこかにまとめる
    gb.in.r.remove('fullsizeByScale'); //仮書き、あとでどこかにまとめる
    gb.in.r.remove('scaleTop'); //仮書き、あとでどこかにまとめる
    gb.in.r.remove('scaleMovie'); //仮書き、あとでどこかにまとめる
    gb.in.r.remove('setCenter'); //仮書き、あとでどこかにまとめる
    ScaleInterviewDetail.reset();
    gb.in.r.remove('scaleInterview');
    gb.in.r.remove('scaleInterviewDetail'); 
    gb.in.r.remove('w');
    gb.in.r.remove('h');
    gb.in.r.remove('yearW');
    gb.in.r.remove('fullSizeByScaleMovie');
    gb.in.r.remove('fullSizeByScaleInterviewIndex');
    gb.in.r.remove('sec02Video');
    gb.in.s.remove('YearBig'); //仮書き、あとでどこかにまとめる
    gb.in.r.remove('InertiaScroll');

    gb.in.up.remove('InertiaScroll');

    if (gb.in.move2DList) {
    for (var i = 0; i < gb.in.move2DList.length; i++) {
      gb.in.move2DList[i].removeEvents();
    };
    };

    // ホバーの解除
    gb.in.he01.removeEvents();
    gb.in.he02.removeEvents();
    gb.in.he03.removeEvents();

    // sns機能の解除
    gb.in.sns.removeEvents();

    // トップだった場合、スケールの解除
    if (gb.in.scaleTop) gb.in.scaleTop.reset();

    if (gb.in.inertia01) gb.in.inertia01.resetInertia();
    if (gb.in.inertia02) gb.in.inertia02.resetInertia();
    if (gb.in.inertia03) gb.in.inertia03.resetInertia();
    if (gb.in.inertia04) gb.in.inertia04.resetInertia();
  
  }

  static inPageBeforeImgLoaded() {

    Layout.reset();

    gb.in.resImg.resume();

    // ホバーの設定
    gb.in.he01 = new HoverEffectSVG($('.SVGHover'),'#fff','#000');
    gb.in.he02 = new HoverEffectSVG($('.SVGHoverW'),'#81d8d0','#fff');
    gb.in.he03 = new HoverEffectSVG($('.SVGHoverW02'),'#81d8d0','#000');

    // sns機能の設定
    gb.in.sns = new Sns($('.fbShare'),$('.twShare'),$('.lineShare'),$('.onMail'))
    gb.in.sns.switchMeta();
    gb.in.sns.setting();

    // 背景色の変更
    if (gb.in.pjax.id=='interview_detail' || gb.in.pjax.id=='history') $('html').css('background-color', '#fff');
    else $('html').css('background-color', '#000');




  }

  static inPageAfterImgLoaded() {

    // スクロールトランジションを可能に
    gb.in.sct.isSwitch = true;

    setTimeout(()=>{
      // sideR変更
      gb.in.sideR.inNum();
      gb.in.sideR.inPageName();
      gb.in.sideR.inNext();
      gb.in.nav.inPage();

    },600);

    // 共通でイベント設定
    new PageTop();

    switch (gb.in.pjax.id) {

      case 'top':

        DisplayTop.run();
        gb.in.menu.switchActive(0);

        // スマホだったらside消す
        if (gb.in.u.isResSP) {

          var tl02 = new TimelineMax();
          tl02.to($('#sideL .sns.sp, #sideR .indicator'), 1.2,{
            opacity: 1
          })

        };

        setTimeout(()=>{
          gb.in.pageTransitionEffect.inEffect();
        },800)

        break;

      case 'movie':
        
        DisplayMovie.run();
        gb.in.menu.switchActive(1);

        var tl02 = new TimelineMax();
        tl02
          .set($('#sideL .sns.sp'), {display: 'block'})
          .to($('#sideL .sns.sp'), 1.2, {opacity: 1})

        gb.in.pageTransitionEffect.inEffect();

        break;

      case 'interview':
        
        DisplayInterview.run();
        gb.in.menu.switchActive(2);

        // myminute 出す
        var tl02 = new TimelineMax();
        tl02
          .set($('#sideL .sns.sp'), {display: 'block'})
          .to($('#sideL .sns.sp'), 1.2, {opacity: 1})

        gb.in.pageTransitionEffect.inEffect();

        break;

      case 'interview_detail':
        
        DisplayInterviewDetail.run();
        gb.in.menu.switchActive(-1);

        setTimeout(()=>{
          gb.in.pageTransitionEffect.inEffect();
        },100)

        break;

      case 'history':
        
        DisplayHistory.run();
        gb.in.menu.switchActive(3);

        var tl02 = new TimelineMax();
        tl02
          .set($('#sideL .sns.sp'), {display: 'block'})
          .to($('#sideL .sns.sp'), 1.2, {opacity: 1})

        gb.in.pageTransitionEffect.inEffect();

        break;

    }

  }

  setEvents() {

    

  }

}