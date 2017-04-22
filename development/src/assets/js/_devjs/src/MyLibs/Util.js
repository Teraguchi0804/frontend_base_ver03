/**
 * fileOverview:
 * Project:
 * File: Util
 * Date:
 * Author:
 */

export default class Util {

  constructor() {

    this.ua = window.navigator.userAgent.toLowerCase(); //useragent
    this.appV = window.navigator.appVersion.toLowerCase(); //appVersion
    this.isResSP = null; // responsive sp
    this.isResPC = null; // responsive pc

    this.isPC = null;
    this.isSP = null;
    this.isTAB = null;
    this.isMB = null;

    this.isIE = null;

    this.isSetSPSize = false;


    this.startTime = null;
    this.elapsedTime = null;
    this.now = new Date();

  }

  // ------------------------------------------------------------
  //
  //  Math
  //
  // ------------------------------------------------------------

  
  // ランダムな整数を取得
  // -----------------------------------
  // @min : 最小値(int)
  // @max : 最大値(int)
  // return : minからmaxまでのランダムな整数(int)
  // -----------------------------------
  random(min, max) {

    return Math.floor((Math.random() * ((max + 1) - min) + min));

  }
      
  // ランダムな整数を2つの範囲から取得
  // -----------------------------------
  // @min1 : 最小値1(int)
  // @max1 : 最大値1(int)
  // @min2 : 最小値2(int)
  // @max2 : 最大値2(int)
  // return : minからmaxまでのランダムな整数(int)
  // -----------------------------------
  random2(min1, max1, min2, max2) {
    
    if (this.hit(2)) {
      return this.random(min1, max1);
    } else {
      return this.random(min2, max2);
    }

  }
      
  // 1/@rangeの確率でtrueを取得
  // -----------------------------------
  // @range : 母数(int)
  // return : true or false(boolean)
  // -----------------------------------
  hit(range) {

    return this.random(0, range - 1) === 0;

  }
  
  // 0から範囲内でランダムな整数を取得
  // -----------------------------------
  // @val : 範囲(int)
  // return : ランダムな整数(int)
  // -----------------------------------
  range(val) {

    return this.random(-val, val);

  }
  
  // 値をマッピング
  // -----------------------------------
  // @num : マッピングする値(Number)
  // @resMin : 結果となる値の最小値(Number)
  // @resMax : 結果となる値の最大値(Number)
  // @baseMin : 元となる値の最小値(Number)
  // @baseMax : 元となる値の最大値(Number)
  // return : マッピングされた値(Number)
  // -----------------------------------
  map(num, resMin, resMax, baseMin, baseMax) {

    var p;
    if (num < baseMin) {
      return resMin;
    }
    if (num > baseMax) {
      return resMax;
    }
    p = (resMax - resMin) / (baseMax - baseMin);

    return ((num - baseMin) * p) + resMin;

  }    
  
  // 数値に小数点第@n位までをつけた文字列を返す
  // -----------------------------------
  // @num : 値(Number)
  // @n : 小数点の位(int)
  // return : 変換された値(String)
  // -----------------------------------
  decimal(num, n) {
    var i, pos;
    num = String(num);
    pos = num.indexOf(".");
    if (n === 0) {
      return num.split(".")[0];
    }
    if (pos === -1) {
      num += ".";
      i = 0;
      while (i < n) {
        num += "0";
        i++;
      }
      return num;
    }
    num = num.substr(0, pos) + num.substr(pos, n + 1);
    return num;
  }

  clamp(numerator,denominator,val) {

    return val * (numerator / denominator);

  }

  degree(radians) {

    return radians * 180 / Math.PI; //1ラジアンが何度か

  }

  // to radians
  radian(angle) { 

    return angle * Math.PI / 180; //1度何ラジアンか

  }

  dist(p1, p2) {

    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));

  }

  ascend(arr) {

    arr.sort(function(a,b){
      if( a > b ) return -1;
      if( a < b ) return 1;
      return 0;
    });
    // var a = [5,3,9,1,10]
    // 結果:10,9,5,3,1

  }

  descend(arr) {

    arr.sort(function(a,b){
      if( a < b ) return -1;
      if( a > b ) return 1;
      return 0;
    });

    // var a = [5,3,9,1,10]
    // 結果:1,3,5,9,10

  }

  // map(value, min01, max01, min02, max02) {

  //   var dis01 = max01 - min01;
  //   var dis02 = max02 - min02

  //   var rate = dis02 / dis01;

  //   value = value * rate;

  //   return value;
  // }

  constrain(value, min, max) {

    return Math.min(max, Math.max(value, min));

    // if (value <= low) value = low;
    // if (value >= high) value = high;     
    // return value;

  }

  // ------------------------------------------------------------
  //
  //  Array
  //
  // ------------------------------------------------------------

  // 配列内のランダムな値をひとつ取得
  // -----------------------------------
  // @arr : 配列
  // return : 配列内の値
  // -----------------------------------
  arrRand(arr) {

    return arr[this.random(0, arr.length - 1)];

  }    
    
  // 配列をランダムに並べ替え
  // -----------------------------------
  // @arr : 配列(Array)
  // -----------------------------------
  shuffle(ary) {

    var arr = [];
    arr = ary.slice();
    var i = arr.length;
    while(i){
      var j = Math.floor(Math.random()*i);
      var t = arr[--i];
      arr[i] = arr[j];
      arr[j] = t;
    }
    return arr;

  }

  // ランダムな数値を作る
  randomArr (len) {

    var arr = new Array;

    for (var i = 0; i < len; i++) arr.push(i);

    arr = this.shuffleAry(arr);

    return arr;

  }

  // nullを削除した配列を返す
  // -----------------------------------
  // @arr : 配列(Array)
  // return : null削除した配列(Array)
  // -----------------------------------
  sliceNull(arr) {

    var i, l, len1, newArr, val;
    newArr = [];
    for (i = l = 0, len1 = arr.length; l < len1; i = ++l) {
      val = arr[i];
      if (val !== null) {
        newArr.push(val);
      }
    }
    return newArr;

  }    
  
  // 配列内のパラメータを比較してソート
  // -----------------------------------
  // @arr : 配列(Array)
  // @para : パラメーター名
  // @desc : 降順かどうか(boolean) デフォルトは昇順
  // -----------------------------------
  sort(arr, para, desc) {
    if (desc === void 0) {
      desc = false;
    }
    if (desc) {
      return arr.sort(function(a, b) {
        return b[para] - a[para];
      });
    } else {
      return arr.sort(function(a, b) {
        return a[para] - b[para];
      });
    }
  }

  getKey(list,value) {
      var returnKey = [];
      for(var key in list){
          if (list[key] == value) {
              returnKey.push(key);
          }
      }
      return returnKey;
  }

  // ユニークIDを取得
  // -----------------------------------
  unique() {

    return new Date().getTime();

  }
  
  // **jquary使用
  // ボタンモード変更
  // trueならカーソルがポインターの形に
  // falseならデフォルトのカーソルに
  // -----------------------------------
  // @flg : 適用するかどうか(boolean)
  // -----------------------------------
  buttonMode(flg) {

    if (flg) {
      return $("body").css("cursor", "pointer");
    } else {
      return $("body").css("cursor", "default");
    }

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
    this.isIE = true;
      
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
      this.isIE11 = true;
      return 'ie11';
    } else if (this.ua.indexOf("applewebkit") >= 0 && this.ua.indexOf("edge") != -1) {
      $('body').addClass('isEdge');
      return 'edge';
    }


    $('body').removeClass('ie');
    this.isIE = false;

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

  // ------------------------------------------------------------
  //
  //  URL
  //
  // ------------------------------------------------------------

  // クエリ抜き出し
  // -----------------------------------
  // @key : 抜き出すパラメータ名(String)
  // -----------------------------------
  // getQuery(key) {

  //   var qs, regex;
  //   key = key.replace(/[€[]/, "€€€[").replace(/[€]]/, "€€€]");
  //   regex = new RegExp("[€€?&]" + key + "=([^&#]*)");
  //   qs = regex.exec(window.location.href);
  //   if (qs === null) {
  //     return "";
  //   } else {
  //     return qs[1];
  //   }

  // }

  getParam() {

    var url = location.href;
    var param = url.split('?')[1];
    if (param==undefined) return undefined;
    var paramItems = param.split('&');
    var list = {};
  
    for( var i = 0; i<paramItems.length; i++ ){

        paramItem = paramItems[i].split('=');
        list[paramItem[0]] = paramItem[1];

    }

    return list;

  }
  
  // ハッシュ取得
  // -----------------------------------
  // return : location.hashの#を削除したやつ
  // -----------------------------------
  hash() {

    return location.hash.replace("#", "");

  }

  // cookie取得
  // -----------------------------------
  // @key : パラメータ名
  // -----------------------------------
  getCookie(key) {

    var a, arr, i, l, len1, val;
    if (document.cookie === void 0 || document.cookie === null) {
      return null;
    }
    arr = document.cookie.split("; ");
    for (i = l = 0, len1 = arr.length; l < len1; i = ++l) {
      val = arr[i];
      a = val.split("=");
      if (a[0] === key) {
        return a[1];
      }
    }
    return null;

  }      

  // cookie設定
  // -----------------------------------
  // @key : パラメータ名
  // @val : 値
  // -----------------------------------
  setCookie(key, val) {

    return document.cookie = key + "=" + val;

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

  // ------------------------------------------------------------
  //
  //  Color
  //
  // ------------------------------------------------------------

  // rgbからHEXカラー取得
  // -----------------------------------
  // @r : 0~255
  // @g : 0~255
  // @b : 0~255
  // return : ex "#FFFFFF"
  // -----------------------------------
  getHexColor(r,g,b) {
      var str;
      str = (r << 16 | g << 8 | b).toString(16);
      return "#" + new Array(7 - str.length).join("0") + str;
  }

  // ------------------------------------------------------------
  //
  //  String
  //
  // ------------------------------------------------------------

  isContain(str,contain) {

    // strの中に,containが存在したら
    if ( str.indexOf(contain) != -1 ) {
      return true;
    }

    return false;

  }

  // 0埋めで2桁にする関数
  add0(str,num=-2){
    
    return ( "000000000000" + str ).substr( num );

  }

  floatFormat( number, n ) {

    var _pow = Math.pow( 10 , n ) ;
    return Math.round( number * _pow ) / _pow ;

  }
    
  // 値段表記
  // -----------------------------------
  price(num) {

    return String(num).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');

  }

  // 文字列を反転
  // -----------------------------------
  // @str : 文字列(String)
  // return : 文字列(String)
  // -----------------------------------
  strReverse(str) {

    var i, len, res;
    res = "";
    len = str.length;
    i = 1;
    while (i <= len) {
      res += str.substr(-i, 1);
      i++;
    }
    return res;

  }
  
  // 文字列の全置換
  // -----------------------------------
  // @val  : 文字列
  // @oeg  : 置換前の文字列
  // @dest : 置換後の文字列
  // -----------------------------------
  replaceAll(val, org, dest) {

    return val.split(org).join(dest);

  }    
  
  strReplace(str, before, after) {

    var r = new RegExp( before, 'g');

    return str.replace( r , after );

  }    
  
  // ------------------------------------------------------------
  //
  //  Date
  //
  // ------------------------------------------------------------

  getNow() {

    this.now = new Date();

  }

  start() {

    this.startTime = this.now.getTime();

  }

  elapsed() {

    this.elapsedTime = this.now.getTime() - this.startTime;

  }

  m() {

    return Math.floor( this.elapsedTime + 100 / 60 );

  }

  s() {

    return Math.floor(this.elapsedTime / 1000);

  }

  ms() {

    return this.elapsedTime;
    
  }

  time() {

    this.getNow();

    this.hour = this.now.getHours();          // 時
    this.minute = this.now.getMinutes();      // 分
    this.second = this.now.getSeconds();
    this.millSecond = this.now.getMilliseconds();

  }

  date() {

    return this.now.getDate();

  }

  months() {

    var monthdays = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);

    return this.now.getMonth() + 1;

  }

  year() {

    return this.now.getFullYear();

  }

  day() {

    // 曜日 (日本語)
    var weekDayJP = ["日","月","火","水","木","金","土"] ;
    var wDJ = weekDayJP[this.now.getDay()] ;

    // 曜日 (英語)
    var weekDayEN = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"] ;
    var wDE = weekDayEN[this.now.getDay()] ;

  }
  
  // 数日後のDateオブジェクト取得
  // -----------------------------------
  afterDay(date, num) {

    return new Date(date.getTime() + Number(num) * 24 * 60 * 60 * 1000);

  }

  // ------------------------------------------------------------
  //
  //  Data type check
  //
  // ------------------------------------------------------------

  isObject(value, ignoreArray) {
      return typeof value === 'object' && value !== null;
  }

  isNumber(value) {
      return typeof value === 'number';
  }

  isString(value) {
      return typeof value === 'string';
  }

  isFunction(value) {
      return typeof value === 'function';
  }

  isArray(value) {
      return Object.prototype.toString.call(value) === '[object Array]';
  }

  isNull(value) {
      return value === null;
  }

  isUndefined(value) {
      return typeof value === 'undefined';
  }

  // ------------------------------------------------------------
  //
  //  other
  //
  // ------------------------------------------------------------
  setImgSPSize ($target){

    // responsive spのとき処理
    if (!this.isResSP) return;
    // 一度だけ処理
    // if (this.isSetSPSize) return;
    // this.isSetSPSize = true;

    var $img = $target,
        len = $img.length;

    $img.each(function(i) {

        var w = Math.floor($(this).width() / 2),
            h = Math.floor($(this).height() / 2);

        $(this).attr({
            'width': w,
            'height': h,
        });

        if (len == i + 1) $(window).trigger('setSpZieEnd');

    });

  }

  // ------------------------------------------------------------
  //  スマホ操作無効
  // ------------------------------------------------------------
  setPrevent() {

    var self = this;

    $(window).on('touchmove.noControl', function(e){e.preventDefault();});

  }

  removePrevent() {

    $(window).off('touchmove.noControl');

  }

  // ------------------------------------------------------------
  //  host,protcol
  // ------------------------------------------------------------
  protocol() {

    return location.protocol;

  }
    
  host() {

    return location.hostname;
    // return location.host

  }

  port() {

    return location.port;

  }
        
  path() {

    return location.pathname;

  }

  preventDefault(e) {

    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;

  }

  preventDefaultForScrollKeys(e) {

    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }

  }

  disableScroll() {

    if (window.addEventListener) // older FF
        window.addEventListener('DOMMouseScroll', this.preventDefault, false);
    window.onwheel = this.preventDefault; // modern standard
    window.onmousewheel = document.onmousewheel = this.preventDefault; // older browsers, IE
    window.ontouchmove  = this.preventDefault; // mobile
    document.onkeydown  = this.preventDefaultForScrollKeys;

  }

  enableScroll() {

    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', this.preventDefault, false);
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;
    document.onkeydown = null;

  }

}