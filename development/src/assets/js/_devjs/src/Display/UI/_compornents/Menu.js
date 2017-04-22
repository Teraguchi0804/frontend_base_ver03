//--------------------------------------------------
//
//  Menu
//
//--------------------------------------------------

import MenuBtn from './MenuBtn.js';

export default class Menu {

  constructor($btn,$close,$contents){

    gb.in.menuBtn01 = new MenuBtn($('#header'),'01');

    this.$btn = $('.menuBtn01');
    // this.$close = $close;
    this.$menu = $('#menu');

    this.W = $(window).width(),
    this.H = $(window).height();

    this.isLock = (gb.in.u.isResPC)? true: false;

    this.isOpen = false;

    this.setEvents();
    this.setup();

  }

  setup() {

    // スクロールで動ける範囲
    this.cur = 0;
    this.min = 0;
    this.max = 0;

  }

  toggle() {

    if (this.$btn.hasClass('on')) {
    this.isOpen = false;

      this.close();

    } else {
    this.isOpen = true;

      this.open();

    };

    this.$btn.toggleClass('on');

  }

  open() {

    gb.in.swt.isLock = true;

    // menuの横位置
    this.menuPos = (gb.in.r.ws.w/2 < 650)? 650: gb.in.r.ws.w/2;


    // pc
    // layout
    if (gb.in.u.isResPC) {

      var tl = new TimelineMax();

      // overlayを追加
      $('<div class="menuOverlay"></div>').appendTo('body');

      tl
        // menu表示
        .set(this.$menu, {
          display: 'block',
          'z-index': Number($('#sideR').css('z-index'))+1,
          x: this.menuPos
        })
        // overlayの設定
        .set($('.menuOverlay'), {
          'z-index': Number($('#sideR').css('z-index')),
          x: gb.in.r.ws.w
        })
        // overlayの移動
        .to($('.menuOverlay'), 0.4, {
          x: 0,
          opacity: 1,
          ease: Power4.easeOut,
        })
        // menuを横から移動
        .to(this.$menu, 0.7, {
          x: 0,
          ease: Power3.easeOut,
        },'-=0.2')
        // コンテンツを左に移動
        .to($('#wrapper').add($('#bgWrap')), 0.9, {
          x: '-40%',
          ease: Expo.easeOut,
          onComplete: ()=>{

          }
        },'-=0.6');

      this.$menu.css({
        overflow: 'visible',
        height: '100%'
      });

      this.onResize() //スクロールの上限値、位置調整
      this.$menu.find('.menuInner').adjustH(); // 開く際、上下中央に

      // pc 背景スクロールさせない
      $('html').addClass('is-hidden');

    // sp版はスクロールさせるために overflow scrollつける
    } else {

      // メニューをスクロールできるように
      this.$menu.css({
        overflow: 'scroll',
        height: gb.in.r.ws.h
      });

      var tl = new TimelineMax();

      tl
        // menu表示
        .set(this.$menu, {
          display: 'block',
          'z-index': Number($('#sideR').css('z-index'))+1,
          x: gb.in.r.ws.w
        })
        // menuを横から移動
        .to(this.$menu, 0.7, {
          x: 0,
          ease: Power3.easeOut,
          onComplete: ()=>{

            // sp 背景スクロールさせない
            // $('html').addClass('is-fixed');
            // this.curST = gb.in.s.st;
            $('html').addClass('is-hidden');

          }
        },'-=0.3')
        // コンテンツを左に移動
        .to($('#wrapper').add($('#bgWrap')), 0.9, {
          x: '-40%',
          ease: Expo.easeOut,
        },'-=0.6');

      // headerの帯とlogoを消す
      TweenMax.to($('#header'), 0.4, {
        backgroundColor: 'rgba(0,0,0,0)',
        ease: Power3.easeOut,
      })
      TweenMax.to($('#header .logo'), 0.4, {
        opacity: 0,
        ease: Power3.easeOut,
      })


    }

    // ボタンの色変更
    TweenMax.to(this.$btn.find('.top'), 0.5, {
      backgroundColor: '#000',
    });
    TweenMax.to(this.$btn.find('.middle'), 0.5, {
      backgroundColor: 'rgba(255,255,255,0)',
    });
    TweenMax.to(this.$btn.find('.bottom'), 0.5, {
      backgroundColor: '#000',
    });
    
  }

  close() {

    gb.in.swt.isLock = false;

    // menuの横位置
    this.menuPos = (gb.in.r.ws.w/2 < 650)? 650: gb.in.r.ws.w/2;

    if (gb.in.u.isResPC) {

      var tl = new TimelineMax();

      // menuを横から移動
      tl
        // コンテンツを左に移動
        .to($('#wrapper').add($('#bgWrap')), 0.7, {
          x: '0%',
          ease: Power3.easeOut,
        })
        .to(this.$menu, 0.8, {
          x: this.menuPos,
          ease: Expo.easeOut,
          onComplete: ()=>{

            // menu非表示
            TweenMax.set(this.$menu, {
              display: 'none',
              'z-index': 1,
            })

          }
        },'-=0.6')
        // overlayの移動
        .to($('.menuOverlay'), 0.4, {
          x: '100%',
          opacity: 0,
          ease: Power4.easeOut,
          onComplete: ()=>{
            $('.menuOverlay').remove();
          }
        },'-=0.7')

        $('html').removeClass('is-hidden');

    } else {

      var tl = new TimelineMax();

      // menuを横から移動
      tl
        // コンテンツを左に移動
        .to($('#wrapper').add($('#bgWrap')), 0.7, {
          x: '0%',
          ease: Power3.easeOut,
        })
        .to(this.$menu, 0.8, {
          x: gb.in.r.ws.w,
          ease: Expo.easeOut,
          onComplete: ()=>{

            // menu非表示
            TweenMax.set(this.$menu, {
              display: 'none',
              'z-index': 1,
            })

          }
        },'-=0.6')


      // // historyページで、最上部より下の場合は、真ん中だけ黒にする
      // if (gb.in.headerColor.isHLock) {

      //   // spの場合はlogo色変更
      //   TweenMax.to($('#header .logo svg path'), 0.5, {
      //     fill: '#000',
      //   });

      // } else {

      //   // spの場合はlogo色変更
      //   TweenMax.to($('#header .logo svg path'), 0.5, {
      //     fill: '#fff',
      //   });

      // }

      // headerの帯とlogoを戻す
      TweenMax.to($('#header'), 0.4, {
        backgroundColor: 'rgba(0,0,0,.5)',
        ease: Power3.easeOut,
      })
      TweenMax.to($('#header .logo'), 0.4, {
        opacity: 1,
        ease: Power3.easeOut,
      })

      // sp 背景スクロールさせない 解除
      // $('html').removeClass('is-fixed');
      $('html').removeClass('is-hidden');
      // $(window).scrollTop(this.curST);


    }

    if (gb.in.pjax.id == 'history' || gb.in.pjax.id == 'interview_detail') {
      // historyページで、最上部より下の場合は、真ん中だけ黒にする
      if (gb.in.headerColor.isHLock) {

        TweenMax.to(this.$btn.find('.middle'), 0.5, {
          backgroundColor: 'rgba(0,0,0,1)',
        });

      } else {

        // ボタンの色変更
        TweenMax.to(this.$btn.find('.top'), 0.5, {
          backgroundColor: '#fff',
        });
        TweenMax.to(this.$btn.find('.middle'), 0.5, {
          backgroundColor: 'rgba(255,255,255,1)',
        });
        TweenMax.to(this.$btn.find('.bottom'), 0.5, {
          backgroundColor: '#fff',
        });

      }

    };

  }

  onResize () {

    // pcのときのみ
    if (gb.in.u.isResPC) {
    
      // window size850以下の場合は、スクロール出来るように
      if (gb.in.r.ws.h < 850) {

        // 上に行きすぎないようにする
        var h = 850 - gb.in.r.ws.h;

        TweenMax.set(this.$menu.find('.menuInner'), {'padding-top': h+130});

        this.min = -h;

      } else {

        // def数値に戻す
        TweenMax.set(this.$menu.find('.menuInner'), {'padding-top': 130});

        // 上下中央に戻す
        TweenMax.set(this.$menu.find('.menuInner'), {
          y: 0,
        })

      }

      // 上下中央に
      this.$menu.find('.menuInner').adjustH();

    } else {

      // 初期値の戻す
      this.$menu.find('.menuInner').css({
        'padding-top': 0,
        'position': 'static',
        'top': 0,
        'margin-top': 0,
      });
      
    }

    // sp版のときは設定
    if (gb.in.u.isResSP) {

      this.$menu.css({
        overflow: 'scroll',
        height: gb.in.r.ws.h
      });

    } else {

      $('html').removeClass('is-fixed');

      this.$menu.css({
        overflow: 'visible',
        height: '100%'
      });

    }



    // ブレイクポイント切替時は一度しまう
    if (gb.in.u.isResPC && this.isLock) {
      this.isLock = false;

      this.close();
      gb.in.menuBtn01.close();

    };

    if (gb.in.u.isResSP && !this.isLock) {
      this.isLock = true;

      this.close();
      gb.in.menuBtn01.close();

    };


  }

  onWheel(e,delta,deltaX,deltaY) {

    e.stopPropagation();

    if (deltaY < 0) {

      this.cur -= 10;
      if (this.cur < this.min) this.cur = this.min;

      TweenMax.to(this.$menu.find('.menuInner'), 0.7, {
        y: this.cur,
        ease: Power1.easeOut
      })

    } else {

      this.cur += 10;
      if (this.cur > this.max) this.cur = this.max;

      TweenMax.to(this.$menu.find('.menuInner'), 0.7, {
        y: this.cur,
        ease: Power1.easeOut
      })

    }

  }

  reset() {

    // logo色戻す
    TweenMax.to($('#header .logo svg path'), 0.5, {
      fill: '#fff',
    });

    // ボタン色戻す
    TweenMax.to(this.$btn.find('.top'), 0.5, {
      backgroundColor: '#fff',
    });
    TweenMax.to(this.$btn.find('.middle'), 0.5, {
      backgroundColor: 'rgba(255,255,255,1)',
    });
    TweenMax.to(this.$btn.find('.bottom'), 0.5, {
      backgroundColor: '#fff',
    });

  }

  switchActive(num) {

    $('#menu .menuList .item').removeClass('isActive');

    if (num==-1) return;
    $('#menu .menuList .item').eq(num).addClass('isActive');

  }

  setEvents() {

    var self = this;

    this.$btn.on('click', this.toggle.bind(this));
    // this.$close.on('click', this.close.call(self);});

    gb.in.r.add('menu', this.onResize.bind(this));

    // マウスホイールで移動
    this.$menu.on('mousewheel', function(e,delta,deltaX,deltaY){self.onWheel.call(self,e,delta,deltaX,deltaY)});

  }

}