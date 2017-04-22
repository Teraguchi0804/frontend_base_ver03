//--------------------------------------------------
//
//  SideR
//
//--------------------------------------------------

// ページ 指標を持つ gb.in.u.page
//    ページリストの配列かな list = [top,movie,,,
// 番号変更
// ページ名変更
// スクロール表示・非表示
//     blurで消えるなどはあり

import HoverEffectBack from '../Effects/03_effects/HoverEffectBack.js';
import PageScroll from './_parts/PageScroll.js';

export default class SideR {

  constructor(param){

    this.cur = -1;
    this.$cur = $('#sideR .indicator .current');

    this.$pageName = $('#sideR .tit')

    this.$next = $('#sideR .next');
    this.$back = $('#sideR .back');

    this.setup();
    this.setEvents();

  }

  setup() {

    new HoverEffectBack($('#sideR .back'));

  }

  run() {

    this.changeCur();
    this.changePageName();
    this.changeNext();

  }

  // ページから離れるとき
  outNum() {

    if (gb.in.u.isResSP) return;

    TweenMax.to(this.$cur, 0.9, {top: -20, opacity: 0,
      ease: Power4.easeOut,
      onComplete: ()=>{
        TweenMax.set(this.$cur, {top: 10, opacity: 0});
      }
    });

  }

  // ページへ入るとき
  inNum() {

    if (gb.in.u.isResSP) return;
    
    this.changeNum();

  }

  changeNum() {

    var id = gb.in.pjax.id;

    switch (id) {

      case 'top':

        this.cur = 1;
        this.$cur.text(this.cur);
        this.$cur.show();

        break;

      case 'movie':
        
        this.cur = 2;
        this.$cur.text(this.cur);
        this.$cur.show();

        break;

      case 'interview':
        
        this.cur = 3;
        this.$cur.text(this.cur);
        this.$cur.show();

        break;

      case 'interview_detail':
        
        this.$cur.hide();

        break;

      case 'history':
        
        this.cur = 4;
        this.$cur.text(this.cur);
        this.$cur.show();

        break;

    }

    TweenMax.to(this.$cur, 0.6, {top: -7, opacity: 1, ease: Expo.easeOut});
    
  }

  // ページから離れるとき
  outPageName() {

    TweenMax.to(this.$pageName, 0.9, {x: 100, rotationZ: -90, opacity: 0, ease: Power3.easeOut});

  }

  // ページへ入るとき
  inPageName() {

    this.changePageName();

  }

  changePageName() {

    var id = gb.in.pjax.id;

    switch (id) {

      case 'top':

        this.$pageName.text('');

        break;

      case 'movie':
        
        this.$pageName.text('Movie');
        

        break;

      case 'interview':
        
        this.$pageName .text('Interview');
        

        break;

      case 'interview_detail':
        
        this.$pageName .text('Interview');
        

        break;

      case 'history':
        
        this.$pageName .text('Watch & History');
        

        break;

    }

    TweenMax.to(this.$pageName, 0.6, {x: 0, rotationZ: -90, opacity: 1, ease: Power3.easeOut});

  }

  // ページから離れるとき backも
  outNext() {

    TweenMax.to(this.$next, 0.9, {x: 100, opacity: 0, ease: Power3.easeOut}); //sideR next
    TweenMax.to(this.$back, 0.9, {x: 120, opacity: 0, ease: Power3.easeOut}); //sideR back

    TweenMax.to($('#sideL .sns.pc'), 0.9, {left: -10, opacity: 0,ease: Power3.easeOut}) // sideL sns pc
    
  }

  // ページへ入るとき
  inNext() {

    this.changeNext();

  }

  changeNext() {

    var id = gb.in.pjax.id;

    switch (id) {

      case 'top':

        this.$next.hide();
        TweenMax.to($('#sideL .sns.pc'), 0.6, {left: 40, opacity: 1,delay: 1.3, ease: Power3.easeOut})

        TweenMax.to($('#header .subTit'), 0.6, {  // header subTit 隠す
          y: -60,
          opacity:0,
          ease: Power3.easeOut,
          onComplete:()=>{
            $('#header .subTit').css('display', 'none');
          }
        })

        break;

      case 'movie':
        
        this.$next.find('.text').text('Interview');
        this.$next.parent().attr({'href':'/interview/'});
        this.$next.show();

        TweenMax.to($('#header .subTit'), 0.6, {  // header subTit 隠す
          y: -60,
          opacity:0,
          ease: Power3.easeOut,
          onComplete:()=>{
            $('#header .subTit').css('display', 'none');
          }
        })

        break;

      case 'interview':
        
        this.$next.find('.text').text('Watch & History');
        this.$next.parent().attr({'href':'/history/'});
        this.$next.show();

        TweenMax.set($('#header .subTit'), {'display': 'block'}); // header subTit
        TweenMax.to($('#header .subTit'), 0.6,{y: 0,opacity:1,ease: Power3.easeOut}); // header subTit

        break;

      case 'interview_detail':
        
        this.$next.find('.text').text('SCROLL');
        this.$next.parent().attr({'href':'#contentsStart'});
        this.$next.show();

        TweenMax.to(this.$back, 0.6, {x: 0, opacity: 1, ease: Power3.easeOut}); // back

        TweenMax.set($('#header .subTit'), {'display': 'block'}); // header subTit
        TweenMax.to($('#header .subTit'), 0.6,{y: 0,opacity:1,ease: Power3.easeOut}); // header subTit

        new PageScroll();

        break;

      case 'history':
        
        this.$next.find('.text').text('SCROLL');
        this.$next.parent().attr({'href':'#contentsStart'});
        this.$next.show();

        TweenMax.set($('#header .subTit'), {'display': 'block'}); // header subTit
        TweenMax.to($('#header .subTit'), 0.6,{y: 0,opacity:1,ease: Power3.easeOut}); // header subTit

        new PageScroll();

        break;

    }

    TweenMax.to(this.$next, 0.6, {x: 0, opacity: 1, ease: Power3.easeOut});

  }

  setEvents() {


  }

}