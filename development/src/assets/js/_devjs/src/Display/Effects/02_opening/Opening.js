//--------------------------------------------------
//
//  Opening
//
//--------------------------------------------------

(function(){

  var gb = jp.co.mie;

  function Opening() {

    this.tlMain = new TimelineMax();

    this.ready();
    this.run();
    this.setEvents();

  }

  Opening.prototype = {

    ready: function() {

      // ------------------------------------------------------------
      //  dom取得
      // ------------------------------------------------------------

      this.$btnAppMid = $('.applicationMid');
      this.$btnAppNew = $('.applicationNew');
      this.$svg01 = $('.section01 h2 svg path');
      this.$slider = $('.slider');
      this.$menu = $('#menu');
      this.$mText01 = this.$menu.find('.box02 .item').eq(0);
      this.$mText02 = this.$menu.find('.box02 .item').eq(1);
      this.$mText03 = this.$menu.find('.box02 .item').eq(2);
      this.$mText04 = this.$menu.find('.box02 .item').eq(3);
      this.$mText05 = this.$menu.find('.box03 p');
      this.$mText06 = this.$menu.find('.box03 .share');
      this.$hImg = $('.section01 .block h2 img');
      this.$text01 = $('.section01 .block .text01');
      this.$text02 = $('.section01 .block .text02');
      this.$bg = $('.section01 .block .bg');
      this.$border = $('.section01 .border');
      this.$arrow = $('.section01 .border .arrowWrap');

      this.p = Snap.select(".border .path01");
      this.paths = {
        target : this.p.attr('d'),
        def : $('.border .path01').data('def'),
      };

      this.$section = $('.section').not('.section01').add('#footer');

      // ------------------------------------------------------------
      //  非表示
      // ------------------------------------------------------------

      TweenMax.set(this.$btnAppMid, {opacity:0});
      TweenMax.set(this.$btnAppNew, {opacity:0});
      TweenMax.set(this.$slider.find('img').eq(0), {opacity:0});
      TweenMax.set(this.$menu, {opacity:0});
      TweenMax.set(this.$mText01, {opacity:0});
      TweenMax.set(this.$mText02, {opacity:0});
      TweenMax.set(this.$mText03, {opacity:0});
      TweenMax.set(this.$mText04, {opacity:0});
      TweenMax.set(this.$mText05, {opacity:0});
      TweenMax.set(this.$mText06, {opacity:0});
      TweenMax.set(this.$hImg, {opacity:0});
      TweenMax.set(this.$text01, {opacity:0});
      TweenMax.set(this.$text02, {opacity:0});
      TweenMax.set(this.$bg, {opacity:0});
      // TweenMax.set(this.$border, {opacity:0});
      TweenMax.set(this.$arrow, {opacity:0});
      TweenMax.set(this.$section, {opacity:0});

      // cssでのopacityからjsでのopacityに
      TweenMax.set($('html'), {opacity:1});

      // ------------------------------------------------------------
      // section01の準備
      // ------------------------------------------------------------
      TweenMax.set(this.$btnAppMid, {scale:0});
      TweenMax.set(this.$btnAppNew, {scale:0});
      TweenMax.set(this.$svg01, {drawSVG:0, fill:'none',stroke:'#009a59'});
      TweenMax.set(this.$text01, {y: 50});
      TweenMax.set(this.$text02, {y: 50});
      TweenMax.set(this.$bg, {width: 0,left: '50%'});
      TweenMax.set(this.$menu, {y:-100});
      TweenMax.set(this.$mText01, {y: -15});
      TweenMax.set(this.$mText02, {y: -15});
      TweenMax.set(this.$mText03, {y: -15});
      TweenMax.set(this.$mText04, {y: -15});
      TweenMax.set(this.$mText05, {y: -15});
      TweenMax.set(this.$mText06, {y: -15});
      TweenMax.set(this.$arrow, {top: -10});

      this.p
        .animate( {'path': this.paths.def}, 0, mina.elastic );

      // ------------------------------------------------------------
      // スクロール上部
      // ------------------------------------------------------------

    },

    run: function() {

      this.step01();
      this.step02();
      this.step03();
      this.step04();
      this.step05();
      this.step06();

    },

    // svg線画
    step01: function() {

      var self = this;

      this.tlMain
        .to(this.$hImg, 1, {
          opacity: 1, 
          ease:Power2.easeOut,
          delay: 1,
          onStart: function(){
            $(window).scrollTop(0);
            TweenMax.set(self.$section, {opacity:1});
          }
        })
        .to(this.$svg01.eq(0), 1, {
          drawSVG: '100%', 
          ease:Power2.easeOut,
        })
        .to(this.$svg01.eq(1), 1, {
          drawSVG: '100%', 
          ease:Power2.easeOut
        },'-=0.8')
        .to(this.$svg01.eq(2), 1, {
          drawSVG: '100%', 
          ease:Power2.easeOut
        },'-=0.8')
        .to(this.$svg01.eq(4), 1, {
          drawSVG: '100%', 
          ease:Power2.easeOut
        },'-=0.8')
        .to(this.$svg01.eq(3), 1.5, {
          drawSVG: '100%', 
          ease:Power2.easeOut
        },'-=0.8')
        .to(this.$svg01, 0.7, {
          fill: '#009a59', 
          ease:Power2.easeOut
        },'-=0.3');

    },

    // テキスト したからふわっと出てく
    step02: function() {

      this.tlMain
        .to(this.$text01, 0.5, {
          y: 0,
          opacity: 1,
          ease:Power1.easeOut
        },'-=0.7')
        .to(this.$text02, 0.5, {
          y: 0,
          opacity: 1,
          ease:Power1.easeOut
        },'-=0.52')

    },

    // ちょっと遅れて、背景画像白から浮き出る
    step03: function() {

      var self = this;
      
      this.tlMain
        .add(function(){
          
          var opt = {
            $target: self.$slider.find('img').eq(0),
            grayscale: 100,grayscaleTarget: 0,
            brightness: 10000,brightnessTarget: 100,
            opacity: 0,opacityTarget: 1,
            dur: 3.0,
            ease: Power4.easeOut,
          }

          gb.in.dmLibs.bright(opt);

        },'-=1.3')

    },

    // ほぼ同時で背景白展開
    step04: function() {

      this.tlMain
        .to(this.$bg, 0.7, {
          width: '100%',
          left: '0%',
          opacity: 1,
          ease:Power2.easeOut
        },'+=0.9')

    },

    // メニュー上から出てくる
    //     テキスト連続
    step05: function() {

      var self = this;

      this.tlMain
        .to(this.$menu, 1.2, {
          y: 0,
          opacity: 1,
          ease:Power2.easeOut
        },'-=0.8')
        .to(this.$mText01, 0.6, {
          y: 0,
          opacity: 1,
          ease:Power2.easeOut,
          onComplete: function(){
            TweenMax.set(self.$mText01, {x:0,y:0,z:1});
          }
        },'-=0.5')
        .to(this.$mText02, 0.6, {
          y: 0,
          opacity: 1,
          ease:Power2.easeOut,
          onComplete: function(){
            TweenMax.set(self.$mText02, {x:0,y:0,z:1});
          }
        },'-=0.5')
        .to(this.$mText03, 0.6, {
          y: 0,
          opacity: 1,
          ease:Power2.easeOut,
          onComplete: function(){
            TweenMax.set(self.$mText03, {x:0,y:0,z:1});
          }
        },'-=0.5')
        .to(this.$mText04, 0.6, {
          y: 0,
          opacity: 1,
          ease:Power2.easeOut,
          onComplete: function(){
            TweenMax.set(self.$mText04, {x:0,y:0,z:1});
          }
        },'-=0.5')
        .to(this.$mText05, 0.6, {
          y: 0,
          opacity: 1,
          ease:Power2.easeOut,
          onComplete: function(){
            TweenMax.set(self.$mText05, {x:0,y:0,z:1});
          }
        },'-=0.5')
        .to(this.$mText06, 0.6, {
          y: 0,
          opacity: 1,
          ease:Power2.easeOut,
          onComplete: function(){
            TweenMax.set(self.$mText06, {x:0,y:0,z:1});
          }
        },'-=0.5')
     

    },

    //  応募ボタン ぴょんと
    // 下へのやじるし ぴょんと
    step06: function() {

      var self = this;

      this.tlMain
        .to(this.$btnAppMid, 1.2, {
          scale: 1,
          opacity: 1,
          ease: Elastic.easeOut.config(1, 0.5),
          onComplete: function(){
            TweenMax.set(self.$btnAppMid, {x:0,y:0,z:1});       
          }
        },'-=0.5')
        .to(this.$btnAppNew, 1.2, {
          scale: 1,
          opacity: 1,
          ease: Elastic.easeOut.config(1, 0.5),
          onComplete: function(){
            TweenMax.set(self.$btnAppNew, {x:0,y:0,z:1});       
          }
        },'-=1.1')
        .add(function(){

          self.p
          .stop()
          .animate( {'path':self.paths.target}, 1500, mina.elastic );

          TweenMax.to(self.$arrow, 0.5, {
            top: 0,
            opacity: 1,
            delay: 0.3,
            onComplete: function(){
              self.onComplete();
            }
          });

        },'-=0.8')


    },

    onComplete: function() {

      gb.in.section01.switchImg();
      // setTimeout(gb.in.section01.switchImg.bind(gb.in.section01),5000)

      gb.in.applyBtn.someTimesMid();
      gb.in.applyBtn.someTimesNew();

    },

    onMousemove: function() {


    },

    setEvents: function() {


    },

  }

  // 公開api
  gb.Opening = Opening;
  
})();