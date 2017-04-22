//--------------------------------------------------
//
//  PageTransitionController
//
//--------------------------------------------------

import PageTransition from './PageTransition.js';

export default class PageTransitionController {

  constructor($wrap) {

    this.cb = ()=>{};

    this.$wrap = $wrap;
    this.setup($wrap);
    this.setEvents();

  }

  setup($wrap) {

    this.effect = new PageTransition($wrap);
    // サイズ調整
    this.effect.onResize();

    this.effect.cb = this.cb;

    // this.$wrap.hide();

    // 最初からcanvasの黒を見せる
    this.effect.isStart = true;
    this.effect.setParamInEf(); // 最初から黒幕設定のためのパラム

    // canvasの黒を見せたら、loadingの黒は無くす
    TweenMax.to($('#loading'), 0.3, {
      backgroundColor: 'rgba(0,0,0,0)',
      ease: Power2.easeOut,
    })

  }

  openingEffect() {

    this.$wrap.show();
    this.effect.isStart = true;
    this.effect.openingEffect();

  }

  inEffect() {

    this.$wrap.show();
    this.effect.isStart = true;
    this.effect.inEffect();

  }

  outEffect() {

    this.effect.cb = this.cb;
    this.$wrap.show();
    this.effect.isStart = true;
    this.effect.outEffect();

  }

  pause() {

    this.$wrap.hide();
    this.effect.isStart = false;
    // this.effect.timeline();

  }

  setEvents () {


  }

}