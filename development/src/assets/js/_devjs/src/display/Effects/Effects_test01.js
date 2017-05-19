/**
 * fileOverview:
 * Project:
 * File: Effects_test01
 * Date:
 * Author:
 */

'use strict';

export default class Effects_test01 {

  constructor(){

    this.$obj01 = $("#obj01");
    this.$obj01_logo = $("#obj01 .logo_img");

    this.$obj02 = $("#obj02");
    // this.$textbox = $(".textbox");
    this.$text01 = $(".text01");
    this.$text02 = $(".text02");
    this.$text03 = $(".text03");
    this.$text04 = $(".text04");
    this.$border01 = $(".border01");
    this.$border02 = $(".border02");
    this.$border03 = $(".border03");
    this.$border04 = $(".border04");
    this.$border05 = $(".border05");

    this.$obj03 = $("#obj03");
    this.$obj03_logo = $("#obj03 .logo_img");
    this.$obj03_txt = $("#obj03 .txt");

    this.animeStart = this._animeStart.bind(this);
    this.animate01 = this._animate01.bind(this);
    this.animate02 = this._animate02.bind(this);
    this.animate03 = this._animate03.bind(this);
    this.animate04 = this._animate04.bind(this);
    this.animate05 = this._animate05.bind(this);

    this.setup();
    this.setEvents();

  }
  
  setup() {
    window.console.log("Effects_test01_SETUP!!!");
    this.animeStart();

  }

  _animeStart(){
    TweenMax.to(this.$obj01_logo, 0.5, {
      rotation: 0,
      delay: 0.5
    });
    TweenMax.to(this.$obj01, 0.5, {
      top: 150,
      delay: 0.5,
      onComplete: this.animate01
    });
  }

  _animate01(){
    TweenMax.to(this.$obj01, 2.0, {
      alpha: 0.0,
      delay: 1.0
    });
    TweenMax.to(this.$obj01, 1.5, {
      top: 610,
      ease: Expo.easeIn,
      onComplete:this.animate02
    });
    TweenMax.to(this.$obj01_logo, 4.5, {
      rotation: 1080,
      delay: 0.6
    });
  }

  _animate02() {
    TweenMax.to(this.$obj02, 0.6, {
      scale: 1.0,
      alpha: 1.0,
      delay: 0.3
    });
    TweenMax.to(this.$obj02, 0.6, {
      top: 130,
      delay: 0.0,
      ease: Expo.easeIn,
      onComplete: this.animate03
    });
  }

  _animate03() {
    TweenMax.to(this.$obj02, 1.4, {
      alpha: 0.0,
      delay: 0.0,
      rotation: -45
    });
    this.animate04();
    this.animate05();
  }

  _animate04() {
    var delayVal = 0.9;
    TweenMax.to(this.$text01, 1.4, {
      alpha: 0.0,
      delay: delayVal,
      right: 30
    });
    TweenMax.to(this.$text02, 1.4, {
      alpha: 0.0,
      delay: delayVal,
      left: 30
    });
    TweenMax.to(this.$text03, 1.4, {
      alpha: 0.0,
      delay: delayVal,
      right: 30
    });
    TweenMax.to(this.$text04, 1.4, {
      alpha: 0.0,
      delay: delayVal,
      left: 30
    });
  }

  _animate05(){
    var delayVal = 0.6;
    TweenMax.to(this.$obj03_txt, 1.3, {
      alpha: 1.0,
      delay: delayVal,
      rotation: 0
    });
    TweenMax.to(this.$obj03_logo, 1.3, {
      alpha: 1.0,
      delay: delayVal,
      rotation: 0
    });
  }

  onLoad() {

    
  }

  setEvents() {

    $(window).on('load', this.onLoad.bind(this));        

  }

}