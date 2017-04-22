/**
 * fileOverview: 環境判定メソッド一覧
 * Project:
 * File: Device
 * Date:
 * Author:
 */

export default class Device {

  constructor() {

    this.ua = window.navigator.userAgent.toLowerCase(); //useragent
    this.appV = window.navigator.appVersion.toLowerCase(); //appVersion
    this.isResSP = null; // responsive sp
    this.isResPC = null; // responsive pc

    this.isPC = null;
    this.isSP = null;
    this.isTAB = null;
    this.isMB = null;

    this.isSetSPSize = false;

  }

  // ------------------------------------------------------------
  //
  //  device
  //
  // ------------------------------------------------------------

  isDeviceSP(){

    var media = ["iphone","ipod","ipad","android","dream","cupcake","blackberry9500","blackberry9530","blackberry9520","blackberry9550","blackberry9800","webos","incognito","webmate"];
    var pattern = new RegExp(media.join("|"),"i");

    var b = pattern.test(this.ua);
    if (b) $('body').addClass('isDeviceSP');

    this.isSP = b;

  }
  isDeviceTAB(){

    var b = (this.ua.indexOf("windows") != -1 && this.ua.indexOf("touch") != -1)
      || this.ua.indexOf("ipad") != -1
      || (this.ua.indexOf("android") != -1 && this.ua.indexOf("mobile") == -1)
      || (this.ua.indexOf("firefox") != -1 && this.ua.indexOf("tablet") != -1)
      || this.ua.indexOf("kindle") != -1
      || this.ua.indexOf("silk") != -1
      || this.ua.indexOf("playbook") != -1;
    if (b) $('body').addClass('isDeviceTAB');

    this.isTAB = b;

  }

  isDeviceMB(){

    var b = (this.ua.indexOf("windows") != -1 && this.ua.indexOf("phone") != -1)
      || this.ua.indexOf("iphone") != -1
      || this.ua.indexOf("ipod") != -1
      || (this.ua.indexOf("android") != -1 && this.ua.indexOf("mobile") != -1)
      || (this.ua.indexOf("firefox") != -1 && this.ua.indexOf("mobile") != -1)
      || this.ua.indexOf("blackberry") != -1;
    if (b) $('body').addClass('isDeviceMB');

    this.isMB = b;

  }

  isDevicePC(){

    if (!(this.isSP || this.isTAB || this.isMB)) {
      
      $('body').addClass('isDevicePC');
      this.isPC = true;
      return;

    }

    this.isPC = false;

  }

  // スマフォ判定
  // -----------------------------------
  // return : true or false(boolean)
  // -----------------------------------
  isSmt() {

    return navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0;

  }

  // タブレット端末かどうか
  // -----------------------------------
  // return : true or false(boolean)
  // -----------------------------------
  isTablet() {

    return this.isIpad() || (this.isAndroid() && navigator.userAgent.indexOf('Mobile') === -1);

  }

  // iPad判定
  // -----------------------------------
  // return : true or false(boolean)
  // -----------------------------------
  isIpad() {

    return navigator.userAgent.indexOf('iPad') > 0;

  }

  // ------------------------------------------------------------
  //
  //  OS
  //
  // ------------------------------------------------------------

  // Android判定
  // -----------------------------------
  // return : true or false(boolean)
  // -----------------------------------
  isAndroid() {

    var u;
    u = navigator.userAgent;
    return u.indexOf('BlackBerry') > 0 || u.indexOf('Android') > 0 || u.indexOf('Windows Phone') > 0;

  }

  isiPhone(){
    var pattern = new RegExp("iphone","i");
    return pattern.test(this.ua);
  }

  // iOS判定
  // -----------------------------------
  // return : true or false(boolean)
  // -----------------------------------
  isIos() {

    return navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPod') > 0;

  }

  // PS3判定
  // -----------------------------------
  // return : true or false(boolean)
  // -----------------------------------
  isPs3() {

    var u;
    u = navigator.userAgent;
    return u.indexOf('PLAYSTATION 3') > 0;

  }
    
  // VITA判定
  // -----------------------------------
  // return : true or false(boolean)
  // -----------------------------------
  isVita() {

    var u;
    u = navigator.userAgent;
    return u.indexOf('PlayStation Vita') > 0;

  }

  // ------------------------------------------------------------
  //
  //  browser
  //
  // ------------------------------------------------------------
  // IEかどうか
  // -----------------------------------
  // return : true or false(boolean)
  // -----------------------------------
  isIe() {

    var ua;
    ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('msie') !== -1 || ua.indexOf('trident/7') !== -1;

  }

  // WINかどうか
  // -----------------------------------
  // return : true or false(boolean)
  // -----------------------------------
  isWin() {

    return navigator.platform.indexOf("Win") !== -1;

  }

  // googleChromeかどうか
  // -----------------------------------
  // return : true or false(boolean)
  // -----------------------------------
  isChrome() {

    return navigator.userAgent.indexOf('Chrome') > 0;

  }    
  
  // FireFoxかどうか
  // -----------------------------------
  // return : true or false(boolean)
  // -----------------------------------
  isFF() {

    return window.navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;

  }

  isSafari(){

    if(this.ua.indexOf("chrome") != -1) return false;
    if(this.ua.indexOf("lunascape") != -1) return false;
    var pattern = new RegExp("safari","i");
    return pattern.test(this.ua);

  }

  isOpera(){

      var pattern = new RegExp("opera","i");
      return pattern.test(this.ua);

  }

  // iOSのsafari以外かどうか
  // -----------------------------------
  // return : true or false(boolean)
  // -----------------------------------
  isIOSUiView() {

    var a;
    a = window.navigator.userAgent.toLowerCase();
    return (this.isIos() && a.indexOf('safari') === -1) || (this.isIos() && a.indexOf('crios') > 0) || (this.isIos() && a.indexOf('gsa') > 0);

  }

  // ------------------------------------------------------------
  //
  //  version
  //
  // ------------------------------------------------------------
  // IE8以下かどうか
  // -----------------------------------
  // return : true or false(boolean)
  // -----------------------------------
  isIe8Under() {

    var msie;
    msie = navigator.appVersion.toLowerCase();
    msie = msie.indexOf('msie') > -1 ? parseInt(msie.replace(/.*msie[ ]/, '').match(/^[0-9]+/)) : 0;
    return msie <= 8 && msie !== 0;

  }
    
  // IE9以下かどうか
  // -----------------------------------
  // return : true or false(boolean)
  // -----------------------------------
  isIe9Under() {

    var msie;
    msie = navigator.appVersion.toLowerCase();
    msie = msie.indexOf('msie') > -1 ? parseInt(msie.replace(/.*msie[ ]/, '').match(/^[0-9]+/)) : 0;
    return msie <= 9 && msie !== 0;

  }

  // IE10以下かどうか
  // -----------------------------------
  // return : true or false(boolean)
  // -----------------------------------
  isIe10Under() {

    var msie;
    msie = navigator.appVersion.toLowerCase();
    msie = msie.indexOf('msie') > -1 ? parseInt(msie.replace(/.*msie[ ]/, '').match(/^[0-9]+/)) : 0;
    return msie <= 10 && msie !== 0;

  }

  // IE11以下かどうか
  // -----------------------------------
  // return : true or false(boolean)
  // -----------------------------------
  isIe11Under() {

    var b = this.isIe10Under() || (this.ua.indexOf("trident") != -1);
    return b;
    // return true;

  }

  // edgeかどうか
  // -----------------------------------
  // return : true or false(boolean)
  // -----------------------------------
  isEdge() {

    log(this.ua.indexOf("AppleWebkit"),this.ua.indexOf("Edge"),this.ua,this.appV);
    var b = (this.ua.indexOf("applewebkit") >= 0 && this.ua.indexOf("edge") != -1);
    return b;
    // return true;

  }

  isIEVersion(){

    $('body').addClass('ie');
      
    if (this.appV.indexOf("msie 10.") != -1) {
      $('body').addClass('ie10');
      return 'ie10';
    } else if (this.appV.indexOf("msie 9.") != -1) {
      $('body').addClass('ie9');
      return 'ie9';
    } else if (this.appV.indexOf("msie 8.") != -1) {
      $('body').addClass('ie8');  
      return 'ie8';
    } else if (this.appV.indexOf("msie 7.") != -1) {
      $('body').addClass('ie7');
      return 'ie7';
    } else if (this.appV.indexOf("msie 6.") != -1) {
      $('body').addClass('ie6');
      return 'ie6';
    } else if (this.appV.indexOf("trident") != -1) {
      $('body').addClass('ie11');
      return 'ie11';
    }

    $('body').removeClass('ie');
    return 'notIE';

  }

  isAndroidVersion() {

    if( this.ua.indexOf("android") > 0 ) {

        var version = parseFloat(this.ua.slice(this.ua.indexOf("android")+8));
        return version;
        
    }

  }

  isiphoneVersion() {

    if( this.ua.indexOf("iPhone OS") > 0 ) {

        var version = parseFloat(this.ua.slice(this.ua.indexOf("iPhone OS")+10));
        return version;

    }

  }

  // ------------------------------------------------------------
  //
  //  portrait / landscape
  //
  // ------------------------------------------------------------
  isDirection () {

    var W = window.innerWidth,
        H = window.innerHeight;

    if (H > W) {
      $("body").addClass("portrait");
      $("body").removeClass("landscape");
    }else{
      $("body").addClass("landscape");
      $("body").removeClass("portrait");
    }

  }

  // ------------------------------------------------------------
  //
  //  responsive 横幅を見る
  //
  // ------------------------------------------------------------
  isResponsive (bp) {

    if (bp==undefined) bp=375;

    var W = window.innerWidth,
        H = window.innerHeight;

    if (W > bp) {
      this.isResSP = false;
      this.isResPC = true;
      $('body').removeClass('isResponsiveSP');
      $('body').addClass('isResponsivePC');
    } else {
      this.isResSP = true;
      this.isResPC = false;
      $('body').addClass('isResponsiveSP');
      $('body').removeClass('isResponsivePC');
    }

  }


  isPCSP() {

    var url = location.href;

    if (!this.isPC && !this.isTAB && (url.indexOf('pc') != -1)) {

      location.href = '/op_golden';
    
    } 

    if (this.isPC && url.indexOf('pc') == -1) {

      location.href = '/op_golden/pc/';
    
    } 

    if (this.isTAB && url.indexOf('pc') == -1) {

      location.href = '/op_golden/pc/';
    
    } 

    if (this.isContain(url,'roulette')) location.href = '/op_golden';
    if (this.isContain(url,'topics')) location.href = '/op_golden';

  }

}