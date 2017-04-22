//--------------------------------------------------
//
//  DisplayOpening
//
//--------------------------------------------------

export default class DisplayOpening {

  constructor(){

    this.setup();
    this.showPage();
    this.effect();

  }

  setup() {

    // gb.in.Layout.size.scale.run();
    gb.in.rm.readyPercent.remove();

    // sideR変更
    gb.in.sideR.inNum();
    gb.in.sideR.inPageName();
    gb.in.sideR.inNext();
    gb.in.nav.inPage();

    // 予め演出canvasのsetupをしておく
    gb.in.Sec02Bg.create();

  }

  showPage() {

    // 各ページopening
    var id = gb.in.pjax.id;

    switch (id) {

      case 'top':

        gb.in.menu.switchActive(0);
        break;

      case 'movie':

        gb.in.Sec02Bg.play();
        gb.in.menu.switchActive(1);

        // sideL
        var tl02 = new TimelineMax();
        tl02
          .set($('#sideL .sns.sp'), {display: 'block'})
          .to($('#sideL .sns.sp'), 1.2, {opacity: 1})

        break;

      case 'interview':
        
        gb.in.menu.switchActive(2);
        var tl = new TimelineMax();
        tl
          .set($('#header .subTit'), {display: 'block'})
          .to($('#header .subTit'), 0.5, {opacity: 1})

        // sideL
        var tl02 = new TimelineMax();
        tl02
          .set($('#sideL .sns.sp'), {display: 'block'})
          .to($('#sideL .sns.sp'), 1.2, {opacity: 1})

        break;

      case 'interview_detail':
        
        gb.in.menu.switchActive(-1);
        var tl = new TimelineMax();
        tl
          .set($('#header .subTit'), {display: 'block'})
          .to($('#header .subTit'), 0.5, {opacity: 1})

        break;

      case 'history':
        
        gb.in.menu.switchActive(3);
        var tl = new TimelineMax();
        tl
          .set($('#header .subTit'), {display: 'block'})
          .to($('#header .subTit'), 0.5, {opacity: 1})

        // sideL
        var tl02 = new TimelineMax();
        tl02
          .set($('#sideL .sns.sp'), {display: 'block'})
          .to($('#sideL .sns.sp'), 1.2, {opacity: 1})

        break;

    }

  }

  effect() {    

    // 時計エフェクトで表示   
    gb.in.pageTransitionEffect.openingEffect();
 
  }

  setEvents() {    

  }

}