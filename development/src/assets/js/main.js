/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Common = __webpack_require__(1);
	
	var _Common2 = _interopRequireDefault(_Common);
	
	var _Main = __webpack_require__(5);
	
	var _Main2 = _interopRequireDefault(_Main);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * fileOverview:
	 * Project:
	 * File: Top
	 * Date:
	 * Author:
	 */
	
	(function () {
	
	  // globalオブジェクト
	  if (window.gb === undefined) window.gb = {};
	  window.gb.in = {}; //instance
	
	  gb.in.common = new _Common2.default();
	  gb.in.main = new _Main2.default();
	})();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * fileOverview:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Project:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * File: Common
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Date:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Author:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	var _Conf = __webpack_require__(2);
	
	var _Conf2 = _interopRequireDefault(_Conf);
	
	var _Util = __webpack_require__(3);
	
	var _Util2 = _interopRequireDefault(_Util);
	
	var _Func = __webpack_require__(4);
	
	var _Func2 = _interopRequireDefault(_Func);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	'use strict';
	
	var Common = function () {
	  function Common() {
	    _classCallCheck(this, Common);
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(Common, [{
	    key: 'setup',
	    value: function setup() {
	
	      /**
	         * @type {Conf} : 初期値の設定・データの配置
	       * @type {Util} : Util関数の初期化
	       * @type {Func} : イベントマネージャーの設置
	       */
	      gb.in.conf = new _Conf2.default();
	      gb.in.u = new _Util2.default();
	      gb.in.f = new _Func2.default();
	    }
	  }, {
	    key: 'onReady',
	    value: function onReady() {
	
	      // ------------------------------------------------------------
	      //  デバイス・ブラウザ判定
	      //  スマホの向き判定
	      //  ページ情報取得
	      // ------------------------------------------------------------
	
	
	    }
	  }, {
	    key: 'onLoad',
	    value: function onLoad() {}
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      $(document).on('ready', this.onReady.bind(this));
	      $(window).on('load', this.onLoad.bind(this));
	    }
	  }]);
	
	  return Common;
	}();
	
	exports.default = Common;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * fileOverview:
	 * Project:
	 * File: Conf
	 * Date:
	 * Author:
	 */
	
	// import SoundData from './Data/Sound.js';
	
	var Conf = function () {
	  function Conf() {
	    _classCallCheck(this, Conf);
	
	    // ------------------------------------------------------------
	    //  本番フラグ
	    // ------------------------------------------------------------    
	    this.RELEASE = true;
	    // this.RELEASE = false;
	
	    // ------------------------------------------------------------
	    //  フラグ関連
	    // ------------------------------------------------------------
	    this.FLG = {
	      LOG: true, // ログ出力
	      PARAM: true, // パラメータチェック
	      STATS: true // Stats表示
	    };
	    if (!this.RELEASE) {
	      this.FLG = {
	        LOG: false,
	        PARAM: false,
	        STATS: false
	      };
	    }
	
	    // ------------------------------------------------------------
	    //  基本 width height
	    // ------------------------------------------------------------
	    this.defW = 1300;
	    this.defH = 850;
	
	    this.W = 1200;
	    this.H = 750;
	
	    this.spW = 375;
	    this.spH = 667;
	
	    // ------------------------------------------------------------
	    //  ブレイクポイント
	    // ------------------------------------------------------------
	    this.bp = 768;
	
	    // ------------------------------------------------------------
	    //  mode
	    // ------------------------------------------------------------
	    this.mode = null;
	    this.keys = [{
	      'key': 'movie',
	      'value': ['morning', 'afternoon', 'night']
	    }, {
	      'key': 'data',
	      'value': ['data01', 'data02', 'data03']
	    }, {
	      'key': 'product',
	      'value': ['01']
	    }];
	    this.switchMode();
	
	    // ------------------------------------------------------------
	    //  sound data
	    // ------------------------------------------------------------
	    // this.soundData = new SoundData();
	
	    // ------------------------------------------------------------
	    //  sec02 bg Img Num
	    // ------------------------------------------------------------
	    this.sec02ImgNum = 396;
	
	    // ------------------------------------------------------------
	    //  youtube ID
	    // ------------------------------------------------------------
	    this.youtubeID01 = 'xW2oNpNrKd0';
	    this.youtubeID02 = 't2WeRRdAFeI';
	
	    // ------------------------------------------------------------
	    //  web font loaded
	    // ------------------------------------------------------------
	    this.webFontLoaded = false;
	  }
	
	  _createClass(Conf, [{
	    key: 'switchMode',
	    value: function switchMode() {
	
	      var i, key, len, param, ref, ref1, value;
	
	      ref = location.search.replace('?', '').split('&');
	
	      for (i = 0, len = ref.length; i < len; i++) {
	        param = ref[i];
	        ref1 = param.split('='), key = ref1[0], value = ref1[1];
	
	        for (var j = 0; j < this.keys.length; j++) {
	
	          var obj = this.keys[j];
	
	          // パラメータがキーと一緒だったら
	          if (obj.key === key) {
	
	            // 各値と比較
	            for (var k = 0; k < obj.value.length; k++) {
	
	              var val = obj.value[k];
	
	              // キーをthis.keysのkeyに、valueを比較して同値だったものに
	              if (val === value) this[obj.key] = val;
	            };
	          };
	        };
	      }
	    }
	  }]);
	
	  return Conf;
	}();
	
	exports.default = Conf;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * fileOverview: 便利関数クラス
	 * Project:
	 * File: Util
	 * Date:
	 * Author:
	 */
	
	var Util = function () {
	  function Util() {
	    _classCallCheck(this, Util);
	
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
	
	  /**
	   * Math
	   */
	
	  /**
	   * ランダムな値を返す
	   * @param min : 最小値(int)
	   * @param max : 最大値(int)
	   * @returns {number} : minからmaxまでのランダムな整数(int)
	   */
	
	
	  _createClass(Util, [{
	    key: "random",
	    value: function random(min, max) {
	
	      return Math.floor(Math.random() * (max + 1 - min) + min);
	    }
	
	    /**
	     * ランダムな整数を2つの範囲から取得
	     * @param min1 : 最小値1(int)
	     * @param max1 : 最大値1(int)
	     * @param min2 : 最小値2(int)
	     * @param max2 : 最大値2(int)
	     * @returns {number} : minからmaxまでのランダムな整数(int)
	     */
	
	  }, {
	    key: "random2",
	    value: function random2(min1, max1, min2, max2) {
	
	      if (this.hit(2)) {
	        return this.random(min1, max1);
	      } else {
	        return this.random(min2, max2);
	      }
	    }
	
	    /**
	     * 1/@rangeの確率でtrueを取得
	     * @param range : 母数(int)
	     * @returns {boolean} : true or false(boolean)
	     */
	
	  }, {
	    key: "hit",
	    value: function hit(range) {
	
	      return this.random(0, range - 1) === 0;
	    }
	
	    // 0から範囲内でランダムな整数を取得
	    // -----------------------------------
	    // @val : 範囲(int)
	    // return : ランダムな整数(int)
	    // -----------------------------------
	
	  }, {
	    key: "range",
	    value: function range(val) {
	
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
	
	  }, {
	    key: "map",
	    value: function map(num, resMin, resMax, baseMin, baseMax) {
	
	      var p;
	      if (num < baseMin) {
	        return resMin;
	      }
	      if (num > baseMax) {
	        return resMax;
	      }
	      p = (resMax - resMin) / (baseMax - baseMin);
	
	      return (num - baseMin) * p + resMin;
	    }
	
	    // 数値に小数点第@n位までをつけた文字列を返す
	    // -----------------------------------
	    // @num : 値(Number)
	    // @n : 小数点の位(int)
	    // return : 変換された値(String)
	    // -----------------------------------
	
	  }, {
	    key: "decimal",
	    value: function decimal(num, n) {
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
	  }, {
	    key: "clamp",
	    value: function clamp(numerator, denominator, val) {
	
	      return val * (numerator / denominator);
	    }
	
	    /**
	      * ラジアンを角度に変換
	     * @param radians
	     * @returns {number}
	     */
	
	  }, {
	    key: "degree",
	    value: function degree(radians) {
	
	      return radians * 180 / Math.PI;
	    }
	
	    // to radians
	
	  }, {
	    key: "radian",
	    value: function radian(angle) {
	
	      return angle * Math.PI / 180; //1度何ラジアンか
	    }
	  }, {
	    key: "dist",
	    value: function dist(p1, p2) {
	
	      return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
	    }
	  }, {
	    key: "ascend",
	    value: function ascend(arr) {
	
	      arr.sort(function (a, b) {
	        if (a > b) return -1;
	        if (a < b) return 1;
	        return 0;
	      });
	      // var a = [5,3,9,1,10]
	      // 結果:10,9,5,3,1
	    }
	  }, {
	    key: "descend",
	    value: function descend(arr) {
	
	      arr.sort(function (a, b) {
	        if (a < b) return -1;
	        if (a > b) return 1;
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
	
	  }, {
	    key: "constrain",
	    value: function constrain(value, min, max) {
	
	      return Math.min(max, Math.max(value, min));
	
	      // if (value <= low) value = low;
	      // if (value >= high) value = high;     
	      // return value;
	    }
	
	    // ユニークIDを取得
	    // -----------------------------------
	
	  }, {
	    key: "unique",
	    value: function unique() {
	
	      return new Date().getTime();
	    }
	
	    // **jquary使用
	    // ボタンモード変更
	    // trueならカーソルがポインターの形に
	    // falseならデフォルトのカーソルに
	    // -----------------------------------
	    // @flg : 適用するかどうか(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "buttonMode",
	    value: function buttonMode(flg) {
	
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
	
	  }, {
	    key: "isDeviceSP",
	    value: function isDeviceSP() {
	
	      var media = ["iphone", "ipod", "ipad", "android", "dream", "cupcake", "blackberry9500", "blackberry9530", "blackberry9520", "blackberry9550", "blackberry9800", "webos", "incognito", "webmate"];
	      var pattern = new RegExp(media.join("|"), "i");
	
	      var b = pattern.test(this.ua);
	      if (b) $('body').addClass('isDeviceSP');
	
	      this.isSP = b;
	    }
	  }, {
	    key: "isDeviceTAB",
	    value: function isDeviceTAB() {
	
	      var b = this.ua.indexOf("windows") != -1 && this.ua.indexOf("touch") != -1 || this.ua.indexOf("ipad") != -1 || this.ua.indexOf("android") != -1 && this.ua.indexOf("mobile") == -1 || this.ua.indexOf("firefox") != -1 && this.ua.indexOf("tablet") != -1 || this.ua.indexOf("kindle") != -1 || this.ua.indexOf("silk") != -1 || this.ua.indexOf("playbook") != -1;
	      if (b) $('body').addClass('isDeviceTAB');
	
	      this.isTAB = b;
	    }
	  }, {
	    key: "isDeviceMB",
	    value: function isDeviceMB() {
	
	      var b = this.ua.indexOf("windows") != -1 && this.ua.indexOf("phone") != -1 || this.ua.indexOf("iphone") != -1 || this.ua.indexOf("ipod") != -1 || this.ua.indexOf("android") != -1 && this.ua.indexOf("mobile") != -1 || this.ua.indexOf("firefox") != -1 && this.ua.indexOf("mobile") != -1 || this.ua.indexOf("blackberry") != -1;
	      if (b) $('body').addClass('isDeviceMB');
	
	      this.isMB = b;
	    }
	  }, {
	    key: "isDevicePC",
	    value: function isDevicePC() {
	
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
	
	  }, {
	    key: "isSmt",
	    value: function isSmt() {
	
	      return navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0;
	    }
	
	    // タブレット端末かどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isTablet",
	    value: function isTablet() {
	
	      return this.isIpad() || this.isAndroid() && navigator.userAgent.indexOf('Mobile') === -1;
	    }
	
	    // iPad判定
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isIpad",
	    value: function isIpad() {
	
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
	
	  }, {
	    key: "isAndroid",
	    value: function isAndroid() {
	
	      var u;
	      u = navigator.userAgent;
	      return u.indexOf('BlackBerry') > 0 || u.indexOf('Android') > 0 || u.indexOf('Windows Phone') > 0;
	    }
	  }, {
	    key: "isiPhone",
	    value: function isiPhone() {
	      var pattern = new RegExp("iphone", "i");
	      return pattern.test(this.ua);
	    }
	
	    // iOS判定
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isIos",
	    value: function isIos() {
	
	      return navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPod') > 0;
	    }
	
	    // PS3判定
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isPs3",
	    value: function isPs3() {
	
	      var u;
	      u = navigator.userAgent;
	      return u.indexOf('PLAYSTATION 3') > 0;
	    }
	
	    // VITA判定
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isVita",
	    value: function isVita() {
	
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
	
	  }, {
	    key: "isIe",
	    value: function isIe() {
	
	      var ua;
	      ua = window.navigator.userAgent.toLowerCase();
	      return ua.indexOf('msie') !== -1 || ua.indexOf('trident/7') !== -1;
	    }
	
	    // WINかどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isWin",
	    value: function isWin() {
	
	      return navigator.platform.indexOf("Win") !== -1;
	    }
	
	    // googleChromeかどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isChrome",
	    value: function isChrome() {
	
	      return navigator.userAgent.indexOf('Chrome') > 0;
	    }
	
	    // FireFoxかどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isFF",
	    value: function isFF() {
	
	      return window.navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
	    }
	  }, {
	    key: "isSafari",
	    value: function isSafari() {
	
	      if (this.ua.indexOf("chrome") != -1) return false;
	      if (this.ua.indexOf("lunascape") != -1) return false;
	      var pattern = new RegExp("safari", "i");
	      return pattern.test(this.ua);
	    }
	  }, {
	    key: "isOpera",
	    value: function isOpera() {
	
	      var pattern = new RegExp("opera", "i");
	      return pattern.test(this.ua);
	    }
	
	    // iOSのsafari以外かどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isIOSUiView",
	    value: function isIOSUiView() {
	
	      var a;
	      a = window.navigator.userAgent.toLowerCase();
	      return this.isIos() && a.indexOf('safari') === -1 || this.isIos() && a.indexOf('crios') > 0 || this.isIos() && a.indexOf('gsa') > 0;
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
	
	  }, {
	    key: "isIe8Under",
	    value: function isIe8Under() {
	
	      var msie;
	      msie = navigator.appVersion.toLowerCase();
	      msie = msie.indexOf('msie') > -1 ? parseInt(msie.replace(/.*msie[ ]/, '').match(/^[0-9]+/)) : 0;
	      return msie <= 8 && msie !== 0;
	    }
	
	    // IE9以下かどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isIe9Under",
	    value: function isIe9Under() {
	
	      var msie;
	      msie = navigator.appVersion.toLowerCase();
	      msie = msie.indexOf('msie') > -1 ? parseInt(msie.replace(/.*msie[ ]/, '').match(/^[0-9]+/)) : 0;
	      return msie <= 9 && msie !== 0;
	    }
	
	    // IE10以下かどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isIe10Under",
	    value: function isIe10Under() {
	
	      var msie;
	      msie = navigator.appVersion.toLowerCase();
	      msie = msie.indexOf('msie') > -1 ? parseInt(msie.replace(/.*msie[ ]/, '').match(/^[0-9]+/)) : 0;
	      return msie <= 10 && msie !== 0;
	    }
	
	    // IE11以下かどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isIe11Under",
	    value: function isIe11Under() {
	
	      var b = this.isIe10Under() || this.ua.indexOf("trident") != -1;
	      return b;
	      // return true;
	    }
	
	    // edgeかどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isEdge",
	    value: function isEdge() {
	
	      log(this.ua.indexOf("AppleWebkit"), this.ua.indexOf("Edge"), this.ua, this.appV);
	      var b = this.ua.indexOf("applewebkit") >= 0 && this.ua.indexOf("edge") != -1;
	      return b;
	      // return true;
	    }
	  }, {
	    key: "isIEVersion",
	    value: function isIEVersion() {
	
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
	  }, {
	    key: "isAndroidVersion",
	    value: function isAndroidVersion() {
	
	      if (this.ua.indexOf("android") > 0) {
	
	        var version = parseFloat(this.ua.slice(this.ua.indexOf("android") + 8));
	        return version;
	      }
	    }
	  }, {
	    key: "isiphoneVersion",
	    value: function isiphoneVersion() {
	
	      if (this.ua.indexOf("iPhone OS") > 0) {
	
	        var version = parseFloat(this.ua.slice(this.ua.indexOf("iPhone OS") + 10));
	        return version;
	      }
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  portrait / landscape
	    //
	    // ------------------------------------------------------------
	
	  }, {
	    key: "isDirection",
	    value: function isDirection() {
	
	      var W = window.innerWidth,
	          H = window.innerHeight;
	
	      if (H > W) {
	        $("body").addClass("portrait");
	        $("body").removeClass("landscape");
	      } else {
	        $("body").addClass("landscape");
	        $("body").removeClass("portrait");
	      }
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  responsive 横幅を見る
	    //
	    // ------------------------------------------------------------
	
	  }, {
	    key: "isResponsive",
	    value: function isResponsive(bp) {
	
	      if (bp == undefined) bp = 375;
	
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
	
	  }, {
	    key: "getParam",
	    value: function getParam() {
	
	      var url = location.href;
	      var param = url.split('?')[1];
	      if (param == undefined) return undefined;
	      var paramItems = param.split('&');
	      var list = {};
	
	      for (var i = 0; i < paramItems.length; i++) {
	
	        paramItem = paramItems[i].split('=');
	        list[paramItem[0]] = paramItem[1];
	      }
	
	      return list;
	    }
	
	    // ハッシュ取得
	    // -----------------------------------
	    // return : location.hashの#を削除したやつ
	    // -----------------------------------
	
	  }, {
	    key: "hash",
	    value: function hash() {
	
	      return location.hash.replace("#", "");
	    }
	
	    // cookie取得
	    // -----------------------------------
	    // @key : パラメータ名
	    // -----------------------------------
	
	  }, {
	    key: "getCookie",
	    value: function getCookie(key) {
	
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
	
	  }, {
	    key: "setCookie",
	    value: function setCookie(key, val) {
	
	      return document.cookie = key + "=" + val;
	    }
	  }, {
	    key: "isPCSP",
	    value: function isPCSP() {
	
	      var url = location.href;
	
	      if (!this.isPC && !this.isTAB && url.indexOf('pc') != -1) {
	
	        location.href = '/op_golden';
	      }
	
	      if (this.isPC && url.indexOf('pc') == -1) {
	
	        location.href = '/op_golden/pc/';
	      }
	
	      if (this.isTAB && url.indexOf('pc') == -1) {
	
	        location.href = '/op_golden/pc/';
	      }
	
	      if (this.isContain(url, 'roulette')) location.href = '/op_golden';
	      if (this.isContain(url, 'topics')) location.href = '/op_golden';
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
	
	  }, {
	    key: "getHexColor",
	    value: function getHexColor(r, g, b) {
	      var str;
	      str = (r << 16 | g << 8 | b).toString(16);
	      return "#" + new Array(7 - str.length).join("0") + str;
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  String
	    //
	    // ------------------------------------------------------------
	
	  }, {
	    key: "isContain",
	    value: function isContain(str, contain) {
	
	      // strの中に,containが存在したら
	      if (str.indexOf(contain) != -1) {
	        return true;
	      }
	
	      return false;
	    }
	
	    // 0埋めで2桁にする関数
	
	  }, {
	    key: "add0",
	    value: function add0(str) {
	      var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -2;
	
	
	      return ("000000000000" + str).substr(num);
	    }
	  }, {
	    key: "floatFormat",
	    value: function floatFormat(number, n) {
	
	      var _pow = Math.pow(10, n);
	      return Math.round(number * _pow) / _pow;
	    }
	
	    // 値段表記
	    // -----------------------------------
	
	  }, {
	    key: "price",
	    value: function price(num) {
	
	      return String(num).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
	    }
	
	    // 文字列を反転
	    // -----------------------------------
	    // @str : 文字列(String)
	    // return : 文字列(String)
	    // -----------------------------------
	
	  }, {
	    key: "strReverse",
	    value: function strReverse(str) {
	
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
	
	  }, {
	    key: "replaceAll",
	    value: function replaceAll(val, org, dest) {
	
	      return val.split(org).join(dest);
	    }
	  }, {
	    key: "strReplace",
	    value: function strReplace(str, before, after) {
	
	      var r = new RegExp(before, 'g');
	
	      return str.replace(r, after);
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  Date
	    //
	    // ------------------------------------------------------------
	
	  }, {
	    key: "getNow",
	    value: function getNow() {
	
	      this.now = new Date();
	    }
	  }, {
	    key: "start",
	    value: function start() {
	
	      this.startTime = this.now.getTime();
	    }
	  }, {
	    key: "elapsed",
	    value: function elapsed() {
	
	      this.elapsedTime = this.now.getTime() - this.startTime;
	    }
	  }, {
	    key: "m",
	    value: function m() {
	
	      return Math.floor(this.elapsedTime + 100 / 60);
	    }
	  }, {
	    key: "s",
	    value: function s() {
	
	      return Math.floor(this.elapsedTime / 1000);
	    }
	  }, {
	    key: "ms",
	    value: function ms() {
	
	      return this.elapsedTime;
	    }
	  }, {
	    key: "time",
	    value: function time() {
	
	      this.getNow();
	
	      this.hour = this.now.getHours(); // 時
	      this.minute = this.now.getMinutes(); // 分
	      this.second = this.now.getSeconds();
	      this.millSecond = this.now.getMilliseconds();
	    }
	  }, {
	    key: "date",
	    value: function date() {
	
	      return this.now.getDate();
	    }
	  }, {
	    key: "months",
	    value: function months() {
	
	      var monthdays = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
	
	      return this.now.getMonth() + 1;
	    }
	  }, {
	    key: "year",
	    value: function year() {
	
	      return this.now.getFullYear();
	    }
	  }, {
	    key: "day",
	    value: function day() {
	
	      // 曜日 (日本語)
	      var weekDayJP = ["日", "月", "火", "水", "木", "金", "土"];
	      var wDJ = weekDayJP[this.now.getDay()];
	
	      // 曜日 (英語)
	      var weekDayEN = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	      var wDE = weekDayEN[this.now.getDay()];
	    }
	
	    // 数日後のDateオブジェクト取得
	    // -----------------------------------
	
	  }, {
	    key: "afterDay",
	    value: function afterDay(date, num) {
	
	      return new Date(date.getTime() + Number(num) * 24 * 60 * 60 * 1000);
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  Data type check
	    //
	    // ------------------------------------------------------------
	
	  }, {
	    key: "isObject",
	    value: function isObject(value, ignoreArray) {
	      return (typeof value === "undefined" ? "undefined" : _typeof(value)) === 'object' && value !== null;
	    }
	  }, {
	    key: "isNumber",
	    value: function isNumber(value) {
	      return typeof value === 'number';
	    }
	  }, {
	    key: "isString",
	    value: function isString(value) {
	      return typeof value === 'string';
	    }
	  }, {
	    key: "isFunction",
	    value: function isFunction(value) {
	      return typeof value === 'function';
	    }
	  }, {
	    key: "isArray",
	    value: function isArray(value) {
	      return Object.prototype.toString.call(value) === '[object Array]';
	    }
	  }, {
	    key: "isNull",
	    value: function isNull(value) {
	      return value === null;
	    }
	  }, {
	    key: "isUndefined",
	    value: function isUndefined(value) {
	      return typeof value === 'undefined';
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  other
	    //
	    // ------------------------------------------------------------
	
	  }, {
	    key: "setImgSPSize",
	    value: function setImgSPSize($target) {
	
	      // responsive spのとき処理
	      if (!this.isResSP) return;
	      // 一度だけ処理
	      // if (this.isSetSPSize) return;
	      // this.isSetSPSize = true;
	
	      var $img = $target,
	          len = $img.length;
	
	      $img.each(function (i) {
	
	        var w = Math.floor($(this).width() / 2),
	            h = Math.floor($(this).height() / 2);
	
	        $(this).attr({
	          'width': w,
	          'height': h
	        });
	
	        if (len == i + 1) $(window).trigger('setSpZieEnd');
	      });
	    }
	
	    // ------------------------------------------------------------
	    //  スマホ操作無効
	    // ------------------------------------------------------------
	
	  }, {
	    key: "setPrevent",
	    value: function setPrevent() {
	
	      var self = this;
	
	      $(window).on('touchmove.noControl', function (e) {
	        e.preventDefault();
	      });
	    }
	  }, {
	    key: "removePrevent",
	    value: function removePrevent() {
	
	      $(window).off('touchmove.noControl');
	    }
	
	    // ------------------------------------------------------------
	    //  host,protcol
	    // ------------------------------------------------------------
	
	  }, {
	    key: "protocol",
	    value: function protocol() {
	
	      return location.protocol;
	    }
	  }, {
	    key: "host",
	    value: function host() {
	
	      return location.hostname;
	      // return location.host
	    }
	  }, {
	    key: "port",
	    value: function port() {
	
	      return location.port;
	    }
	  }, {
	    key: "path",
	    value: function path() {
	
	      return location.pathname;
	    }
	  }, {
	    key: "preventDefault",
	    value: function preventDefault(e) {
	
	      e = e || window.event;
	      if (e.preventDefault) e.preventDefault();
	      e.returnValue = false;
	    }
	  }, {
	    key: "preventDefaultForScrollKeys",
	    value: function preventDefaultForScrollKeys(e) {
	
	      if (keys[e.keyCode]) {
	        preventDefault(e);
	        return false;
	      }
	    }
	  }, {
	    key: "disableScroll",
	    value: function disableScroll() {
	
	      if (window.addEventListener) // older FF
	        window.addEventListener('DOMMouseScroll', this.preventDefault, false);
	      window.onwheel = this.preventDefault; // modern standard
	      window.onmousewheel = document.onmousewheel = this.preventDefault; // older browsers, IE
	      window.ontouchmove = this.preventDefault; // mobile
	      document.onkeydown = this.preventDefaultForScrollKeys;
	    }
	  }, {
	    key: "enableScroll",
	    value: function enableScroll() {
	
	      if (window.removeEventListener) window.removeEventListener('DOMMouseScroll', this.preventDefault, false);
	      window.onmousewheel = document.onmousewheel = null;
	      window.onwheel = null;
	      window.ontouchmove = null;
	      document.onkeydown = null;
	    }
	  }]);
	
	  return Util;
	}();
	
	exports.default = Util;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * fileOverview:
	 * Project:
	 * File: Func
	 * Date:
	 * Author:
	 */
	
	var Func = function () {
	  function Func() {
	    _classCallCheck(this, Func);
	
	    this.blank();
	    this.debugger();
	    this.requestAnimationFrame();
	    this.expandjQuery();
	  }
	
	  _createClass(Func, [{
	    key: 'blank',
	    value: function blank() {
	
	      $(function () {
	        $('.blank').attr('target', '_blank');
	      });
	    }
	  }, {
	    key: 'debugger',
	    value: function _debugger() {
	
	      // デバッグモード切替
	      var RELEASE = gb.in.conf.RELEASE;
	
	      // 置換対象のメソッドを配列として保持する
	      var methods = ['log', 'debug', 'info', 'warn', 'error', 'dir', 'trace', 'assert', 'dirxml', 'group', 'groupEnd', 'time', 'timeEnd', 'count', 'profile', 'profileEnd'];
	
	      // consoleが使えない場合は空のオブジェクトを設定しておく
	      if (typeof window.console === "undefined") {
	        window.console = {};
	      }
	
	      // 各メソッドをwindowへ直接追加して行く
	      for (var i in methods) {
	        (function (m) {
	
	          // consoleにある？デバッグモードは有効？consoleのものは関数？
	          if (console[m] && !RELEASE && typeof console[m] === "function") {
	            window[m] = console[m].bind(console);
	          } else {
	            // debugModeがfalse,もしくは該当メソッドが存在しない場合は、空のメソッドを用意する
	            window[m] = function () {};
	          }
	        })(methods[i]);
	      }
	    }
	  }, {
	    key: 'prepend',
	    value: function prepend(param) {
	
	      $('body').prepend(param);
	    }
	  }, {
	    key: 'requestAnimationFrame',
	    value: function requestAnimationFrame() {
	
	      var FPS = 1000 / 60;
	
	      window.requestAnimationFrame = window.requestAnimationFrame || // chromeや最新の
	      window.mozRequestAnimationFrame || // 古いfirefox用
	      window.webkitRequestAnimationFrame || // safari6以前、iOS6 safari用
	      function (callback) {
	        window.setTimeout(callback, FPS);
	      };
	
	      window.cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || function (timer) {
	        window.clearTimeout(timer);
	      };
	    }
	  }, {
	    key: 'expandjQuery',
	    value: function expandjQuery() {
	
	      jQuery.fn.extend({
	        w: 0,
	        h: 0,
	        adjust: function adjust() {
	          var w = $(this).innerWidth();
	          var h = $(this).innerHeight();
	          $(this).css({
	            'position': 'absolute',
	            'left': '50%',
	            'top': '50%',
	            'margin-left': '-' + w / 2 + 'px',
	            'margin-top': '-' + h / 2 + 'px'
	          });
	        },
	        adjustW: function adjustW() {
	          var w = $(this).innerWidth();
	          var h = $(this).innerHeight();
	          $(this).css({
	            'position': 'absolute',
	            'left': '50%',
	            'margin-left': '-' + w / 2 + 'px'
	          });
	        },
	        adjustH: function adjustH() {
	          var w = $(this).innerWidth();
	          var h = $(this).innerHeight();
	          $(this).css({
	            'position': 'absolute',
	            'top': '50%',
	            'margin-top': '-' + h / 2 + 'px'
	          });
	        }
	      });
	    }
	  }, {
	    key: 'checkCssBlend',
	    value: function checkCssBlend() {
	
	      if ('CSS' in window && 'supports' in window.CSS) {
	        if (!window.CSS.supports('mix-blend-mode', 'soft-light')) {
	          document.documentElement.classList.add('not-mix-blend-mode');
	        }
	      }
	
	      log(gb.in.u.isIE);
	
	      if (gb.in.u.isIE) {
	
	        document.documentElement.classList.add('not-mix-blend-mode');
	      };
	    }
	  }, {
	    key: 'notSaveImg',
	    value: function notSaveImg() {
	
	      // ------------------------------------------------------------
	      //
	      //  pc
	      //
	      // ------------------------------------------------------------
	
	      if (gb.in.u.isPC) {
	
	        $(function () {
	          $("img").on("contextmenu", function () {
	            return false;
	          });
	        });
	      }
	
	      // ------------------------------------------------------------
	      //
	      //  sp android
	      //
	      // ------------------------------------------------------------
	      var v = gb.in.u.isAndroidVersion();
	
	      if (v == undefined) return;
	      if (v < 5) {
	
	        var timer;
	        $("img").on("touchstart", function () {
	          timer = setTimeout(function () {
	            alert("画像は保存できません");
	          }, 500);
	          return false;
	        });
	        $("img").on("touchend", function () {
	          clearTimeout(timer);
	          return false;
	        });
	      }
	    }
	  }]);
	
	  return Func;
	}();
	
	exports.default = Func;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * fileOverview:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Project:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * File: Main
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Date:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Author:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	var _DisplayTop = __webpack_require__(6);
	
	var _DisplayTop2 = _interopRequireDefault(_DisplayTop);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	'use strict';
	
	var Main = function () {
	  function Main() {
	    _classCallCheck(this, Main);
	
	    this.onImmediate();
	    this.setEvents();
	  }
	
	  _createClass(Main, [{
	    key: 'onImmediate',
	    value: function onImmediate() {}
	  }, {
	    key: 'onReady',
	    value: function onReady() {
	
	      //pageページ別のIDを取得
	      var page = $('body').data('id');
	
	      window.console.log('現在のページIDは ', page);
	
	      //pageのIDごとに発火するクラスの振り分け
	      switch (page) {
	
	        case 'top':
	
	          new _DisplayTop2.default();
	
	          break;
	
	      }
	    }
	  }, {
	    key: 'onLoad',
	    value: function onLoad() {}
	  }, {
	    key: 'onRender',
	    value: function onRender() {}
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      $(document).on('ready', this.onReady.bind(this));
	      $(window).on('load', this.onLoad.bind(this));
	    }
	  }]);
	
	  return Main;
	}();
	
	exports.default = Main;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * fileOverview:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Project:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * File: Display
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Date:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Author:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	// import WebGLinit from './WebGLinit.js';
	
	var _Canvas = __webpack_require__(7);
	
	var _Canvas2 = _interopRequireDefault(_Canvas);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	'use strict';
	
	var DisplayTop = function () {
	  function DisplayTop() {
	    _classCallCheck(this, DisplayTop);
	
	    this.onImmediate();
	    this.setEvents();
	  }
	
	  _createClass(DisplayTop, [{
	    key: 'onImmediate',
	    value: function onImmediate() {
	
	      // アニメーションループスタート
	      // gb.in.up.loop();
	
	    }
	  }, {
	    key: 'onLoad',
	    value: function onLoad() {
	
	      gb.in.canvas = new _Canvas2.default({
	        output: document.getElementById('webgl-output')
	      });
	
	      // gb.in.canvas.init();
	
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      $(window).on('load', this.onLoad.bind(this));
	    }
	  }], [{
	    key: 'run',
	    value: function run() {
	
	      // window.console.log('static_Run');
	
	    }
	  }]);
	
	  return DisplayTop;
	}();
	
	exports.default = DisplayTop;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Entry2 = __webpack_require__(8);
	
	var _Entry3 = _interopRequireDefault(_Entry2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * fileOverview:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Project:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * File: Canvas
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Date:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Author:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	// import Camera from './Utils/Camera.js';
	
	'use strict';
	
	var Canvas = function (_Entry) {
	  _inherits(Canvas, _Entry);
	
	  function Canvas() {
	    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    _classCallCheck(this, Canvas);
	
	    var _this = _possibleConstructorReturn(this, (Canvas.__proto__ || Object.getPrototypeOf(Canvas)).call(this));
	
	    _this.width = window.innerWidth;
	    _this.height = window.innerHeight;
	    _this.output = opts.output || document.createElement('div');
	
	    _this.camera = null;
	    _this.renderer = null;
	    _this.scene = null;
	    _this.cube = null;
	
	    _this.createCamera = _this._createCamera.bind(_this);
	    _this.createRenderer = _this._createRenderer.bind(_this);
	    _this.createScene = _this._createScene.bind(_this);
	    _this.createObject = _this._createObject.bind(_this);
	    _this.orbitControls = _this._orbitControls.bind(_this);
	
	    _this.onResize = _this._onResize.bind(_this);
	
	    _this.Update = _this._Update.bind(_this);
	
	    return _this;
	  }
	
	  /**
	   * 初期化
	   */
	
	
	  _createClass(Canvas, [{
	    key: 'init',
	    value: function init() {
	      var _this2 = this;
	
	      this.createCamera();
	      this.createScene();
	      this.createRenderer();
	
	      this.orbitControls();
	
	      this.createObject();
	
	      this.Update();
	
	      //リサイズイベント発火
	      window.addEventListener('resize', function () {
	        _this2.onResize();
	      }, false);
	    }
	
	    /**
	     * カメラ作成
	     */
	
	  }, {
	    key: '_createCamera',
	    value: function _createCamera() {
	
	      this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 1000);
	      this.camera.position.x = -30;
	      this.camera.position.y = 40;
	      this.camera.position.z = 30;
	
	      this.camera.lookAt(new THREE.Vector3(0, 0, 0));
	    }
	
	    /**
	     * レンダラー作成
	     */
	
	  }, {
	    key: '_createRenderer',
	    value: function _createRenderer() {
	
	      this.renderer = new THREE.WebGLRenderer({
	        alpha: false,
	        antialias: false,
	        stencil: false,
	        depth: true,
	        premultipliedAlpha: false
	      });
	
	      this.renderer.setClearColor(0xffffff);
	      this.renderer.setPixelRatio(window.devicePixelRatio || 1);
	      this.renderer.setSize(this.width, this.height);
	      this.output.appendChild(this.renderer.domElement);
	    }
	
	    /**
	     *　シーン作成
	     */
	
	  }, {
	    key: '_createScene',
	    value: function _createScene() {
	
	      this.scene = new THREE.Scene();
	    }
	
	    /**
	     *　Object作成
	     */
	
	  }, {
	    key: '_createObject',
	    value: function _createObject() {
	
	      var cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
	      var cubeMaterial = new THREE.MeshBasicMaterial({
	        color: 0x000000,
	        wireframe: true
	      });
	
	      this.cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
	      this.cube.position.x = 3;
	      this.cube.position.y = 3;
	      this.cube.position.z = 3;
	
	      this.scene.add(this.cube);
	    }
	
	    /**
	     *　更新
	     */
	
	  }, {
	    key: '_Update',
	    value: function _Update() {
	      var _this3 = this;
	
	      requestAnimationFrame(function () {
	        _this3.Update();
	      });
	      // this.controls.update();
	      this.renderer.render(this.scene, this.camera);
	    }
	
	    /**
	     *　画面リサイズ
	     */
	
	  }, {
	    key: '_onResize',
	    value: function _onResize() {
	      this.camera.aspect = window.innerWidth / window.innerHeight;
	      this.camera.updateProjectionMatrix();
	      this.renderer.setSize(window.innerWidth, window.innerHeight);
	    }
	
	    /**
	      * カメラコントロール
	     */
	
	  }, {
	    key: '_orbitControls',
	    value: function _orbitControls() {
	      this.controls = new THREE.OrbitControls(this.camera);
	      this.controls.autoRotate = true;
	      var clock = new THREE.Clock();
	
	      var delta = clock.getDelta();
	      this.controls.update(delta);
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      $(window).on('load', this.onLoad.bind(this));
	    }
	  }]);
	
	  return Canvas;
	}(_Entry3.default);
	
	exports.default = Canvas;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * fileOverview:
	 * Project:
	 * File: Entry
	 * Date:
	 * Author:
	 */
	
	__webpack_require__(9);
	
	'use strict';
	
	var Entry = function () {
		function Entry() {
			_classCallCheck(this, Entry);
		}
	
		/**
	  * 初期化
	  */
	
	
		_createClass(Entry, [{
			key: 'init',
			value: function init() {}
		}]);
	
		return Entry;
	}();
	
	exports.default = Entry;

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * @author qiao / https://github.com/qiao
	 * @author mrdoob / http://mrdoob.com
	 * @author alteredq / http://alteredqualia.com/
	 * @author WestLangley / http://github.com/WestLangley
	 * @author erich666 / http://erichaines.com
	 */
	
	// This set of controls performs orbiting, dollying (zooming), and panning.
	// Unlike TrackballControls, it maintains the "up" direction object.up (+Y by default).
	//
	//    Orbit - left mouse / touch: one finger move
	//    Zoom - middle mouse, or mousewheel / touch: two finger spread or squish
	//    Pan - right mouse, or arrow keys / touch: three finter swipe
	
	THREE.OrbitControls = function (object, domElement) {
	
		this.object = object;
	
		this.domElement = domElement !== undefined ? domElement : document;
	
		// Set to false to disable this control
		this.enabled = true;
	
		// "target" sets the location of focus, where the object orbits around
		this.target = new THREE.Vector3();
	
		// How far you can dolly in and out ( PerspectiveCamera only )
		this.minDistance = 0;
		this.maxDistance = Infinity;
	
		// How far you can zoom in and out ( OrthographicCamera only )
		this.minZoom = 0;
		this.maxZoom = Infinity;
	
		// How far you can orbit vertically, upper and lower limits.
		// Range is 0 to Math.PI radians.
		this.minPolarAngle = 0; // radians
		this.maxPolarAngle = Math.PI; // radians
	
		// How far you can orbit horizontally, upper and lower limits.
		// If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].
		this.minAzimuthAngle = -Infinity; // radians
		this.maxAzimuthAngle = Infinity; // radians
	
		// Set to true to enable damping (inertia)
		// If damping is enabled, you must call controls.update() in your animation loop
		this.enableDamping = false;
		this.dampingFactor = 0.25;
	
		// This option actually enables dollying in and out; left as "zoom" for backwards compatibility.
		// Set to false to disable zooming
		this.enableZoom = true;
		this.zoomSpeed = 1.0;
	
		// Set to false to disable rotating
		this.enableRotate = true;
		this.rotateSpeed = 1.0;
	
		// Set to false to disable panning
		this.enablePan = true;
		this.keyPanSpeed = 7.0; // pixels moved per arrow key push
	
		// Set to true to automatically rotate around the target
		// If auto-rotate is enabled, you must call controls.update() in your animation loop
		this.autoRotate = false;
		this.autoRotateSpeed = 2.0; // 30 seconds per round when fps is 60
	
		// Set to false to disable use of the keys
		this.enableKeys = true;
	
		// The four arrow keys
		this.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 };
	
		// Mouse buttons
		this.mouseButtons = { ORBIT: THREE.MOUSE.LEFT, ZOOM: THREE.MOUSE.MIDDLE, PAN: THREE.MOUSE.RIGHT };
	
		// for reset
		this.target0 = this.target.clone();
		this.position0 = this.object.position.clone();
		this.zoom0 = this.object.zoom;
	
		//
		// public methods
		//
	
		this.getPolarAngle = function () {
	
			return spherical.phi;
		};
	
		this.getAzimuthalAngle = function () {
	
			return spherical.theta;
		};
	
		this.reset = function () {
	
			scope.target.copy(scope.target0);
			scope.object.position.copy(scope.position0);
			scope.object.zoom = scope.zoom0;
	
			scope.object.updateProjectionMatrix();
			scope.dispatchEvent(changeEvent);
	
			scope.update();
	
			state = STATE.NONE;
		};
	
		// this method is exposed, but perhaps it would be better if we can make it private...
		this.update = function () {
	
			var offset = new THREE.Vector3();
	
			// so camera.up is the orbit axis
			var quat = new THREE.Quaternion().setFromUnitVectors(object.up, new THREE.Vector3(0, 1, 0));
			var quatInverse = quat.clone().inverse();
	
			var lastPosition = new THREE.Vector3();
			var lastQuaternion = new THREE.Quaternion();
	
			return function update() {
	
				var position = scope.object.position;
	
				offset.copy(position).sub(scope.target);
	
				// rotate offset to "y-axis-is-up" space
				offset.applyQuaternion(quat);
	
				// angle from z-axis around y-axis
				spherical.setFromVector3(offset);
	
				if (scope.autoRotate && state === STATE.NONE) {
	
					rotateLeft(getAutoRotationAngle());
				}
	
				spherical.theta += sphericalDelta.theta;
				spherical.phi += sphericalDelta.phi;
	
				// restrict theta to be between desired limits
				spherical.theta = Math.max(scope.minAzimuthAngle, Math.min(scope.maxAzimuthAngle, spherical.theta));
	
				// restrict phi to be between desired limits
				spherical.phi = Math.max(scope.minPolarAngle, Math.min(scope.maxPolarAngle, spherical.phi));
	
				spherical.makeSafe();
	
				spherical.radius *= scale;
	
				// restrict radius to be between desired limits
				spherical.radius = Math.max(scope.minDistance, Math.min(scope.maxDistance, spherical.radius));
	
				// move target to panned location
				scope.target.add(panOffset);
	
				offset.setFromSpherical(spherical);
	
				// rotate offset back to "camera-up-vector-is-up" space
				offset.applyQuaternion(quatInverse);
	
				position.copy(scope.target).add(offset);
	
				scope.object.lookAt(scope.target);
	
				if (scope.enableDamping === true) {
	
					sphericalDelta.theta *= 1 - scope.dampingFactor;
					sphericalDelta.phi *= 1 - scope.dampingFactor;
				} else {
	
					sphericalDelta.set(0, 0, 0);
				}
	
				scale = 1;
				panOffset.set(0, 0, 0);
	
				// update condition is:
				// min(camera displacement, camera rotation in radians)^2 > EPS
				// using small-angle approximation cos(x/2) = 1 - x^2 / 8
	
				if (zoomChanged || lastPosition.distanceToSquared(scope.object.position) > EPS || 8 * (1 - lastQuaternion.dot(scope.object.quaternion)) > EPS) {
	
					scope.dispatchEvent(changeEvent);
	
					lastPosition.copy(scope.object.position);
					lastQuaternion.copy(scope.object.quaternion);
					zoomChanged = false;
	
					return true;
				}
	
				return false;
			};
		}();
	
		this.dispose = function () {
	
			scope.domElement.removeEventListener('contextmenu', onContextMenu, false);
			scope.domElement.removeEventListener('mousedown', onMouseDown, false);
			scope.domElement.removeEventListener('wheel', onMouseWheel, false);
	
			scope.domElement.removeEventListener('touchstart', onTouchStart, false);
			scope.domElement.removeEventListener('touchend', onTouchEnd, false);
			scope.domElement.removeEventListener('touchmove', onTouchMove, false);
	
			document.removeEventListener('mousemove', onMouseMove, false);
			document.removeEventListener('mouseup', onMouseUp, false);
	
			window.removeEventListener('keydown', onKeyDown, false);
	
			//scope.dispatchEvent( { type: 'dispose' } ); // should this be added here?
		};
	
		//
		// internals
		//
	
		var scope = this;
	
		var changeEvent = { type: 'change' };
		var startEvent = { type: 'start' };
		var endEvent = { type: 'end' };
	
		var STATE = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_DOLLY: 4, TOUCH_PAN: 5 };
	
		var state = STATE.NONE;
	
		var EPS = 0.000001;
	
		// current position in spherical coordinates
		var spherical = new THREE.Spherical();
		var sphericalDelta = new THREE.Spherical();
	
		var scale = 1;
		var panOffset = new THREE.Vector3();
		var zoomChanged = false;
	
		var rotateStart = new THREE.Vector2();
		var rotateEnd = new THREE.Vector2();
		var rotateDelta = new THREE.Vector2();
	
		var panStart = new THREE.Vector2();
		var panEnd = new THREE.Vector2();
		var panDelta = new THREE.Vector2();
	
		var dollyStart = new THREE.Vector2();
		var dollyEnd = new THREE.Vector2();
		var dollyDelta = new THREE.Vector2();
	
		function getAutoRotationAngle() {
	
			return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;
		}
	
		function getZoomScale() {
	
			return Math.pow(0.95, scope.zoomSpeed);
		}
	
		function rotateLeft(angle) {
	
			sphericalDelta.theta -= angle;
		}
	
		function rotateUp(angle) {
	
			sphericalDelta.phi -= angle;
		}
	
		var panLeft = function () {
	
			var v = new THREE.Vector3();
	
			return function panLeft(distance, objectMatrix) {
	
				v.setFromMatrixColumn(objectMatrix, 0); // get X column of objectMatrix
				v.multiplyScalar(-distance);
	
				panOffset.add(v);
			};
		}();
	
		var panUp = function () {
	
			var v = new THREE.Vector3();
	
			return function panUp(distance, objectMatrix) {
	
				v.setFromMatrixColumn(objectMatrix, 1); // get Y column of objectMatrix
				v.multiplyScalar(distance);
	
				panOffset.add(v);
			};
		}();
	
		// deltaX and deltaY are in pixels; right and down are positive
		var pan = function () {
	
			var offset = new THREE.Vector3();
	
			return function pan(deltaX, deltaY) {
	
				var element = scope.domElement === document ? scope.domElement.body : scope.domElement;
	
				if (scope.object instanceof THREE.PerspectiveCamera) {
	
					// perspective
					var position = scope.object.position;
					offset.copy(position).sub(scope.target);
					var targetDistance = offset.length();
	
					// half of the fov is center to top of screen
					targetDistance *= Math.tan(scope.object.fov / 2 * Math.PI / 180.0);
	
					// we actually don't use screenWidth, since perspective camera is fixed to screen height
					panLeft(2 * deltaX * targetDistance / element.clientHeight, scope.object.matrix);
					panUp(2 * deltaY * targetDistance / element.clientHeight, scope.object.matrix);
				} else if (scope.object instanceof THREE.OrthographicCamera) {
	
					// orthographic
					panLeft(deltaX * (scope.object.right - scope.object.left) / scope.object.zoom / element.clientWidth, scope.object.matrix);
					panUp(deltaY * (scope.object.top - scope.object.bottom) / scope.object.zoom / element.clientHeight, scope.object.matrix);
				} else {
	
					// camera neither orthographic nor perspective
					console.warn('WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.');
					scope.enablePan = false;
				}
			};
		}();
	
		function dollyIn(dollyScale) {
	
			if (scope.object instanceof THREE.PerspectiveCamera) {
	
				scale /= dollyScale;
			} else if (scope.object instanceof THREE.OrthographicCamera) {
	
				scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom * dollyScale));
				scope.object.updateProjectionMatrix();
				zoomChanged = true;
			} else {
	
				console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.');
				scope.enableZoom = false;
			}
		}
	
		function dollyOut(dollyScale) {
	
			if (scope.object instanceof THREE.PerspectiveCamera) {
	
				scale *= dollyScale;
			} else if (scope.object instanceof THREE.OrthographicCamera) {
	
				scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom / dollyScale));
				scope.object.updateProjectionMatrix();
				zoomChanged = true;
			} else {
	
				console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.');
				scope.enableZoom = false;
			}
		}
	
		//
		// event callbacks - update the object state
		//
	
		function handleMouseDownRotate(event) {
	
			//console.log( 'handleMouseDownRotate' );
	
			rotateStart.set(event.clientX, event.clientY);
		}
	
		function handleMouseDownDolly(event) {
	
			//console.log( 'handleMouseDownDolly' );
	
			dollyStart.set(event.clientX, event.clientY);
		}
	
		function handleMouseDownPan(event) {
	
			//console.log( 'handleMouseDownPan' );
	
			panStart.set(event.clientX, event.clientY);
		}
	
		function handleMouseMoveRotate(event) {
	
			//console.log( 'handleMouseMoveRotate' );
	
			rotateEnd.set(event.clientX, event.clientY);
			rotateDelta.subVectors(rotateEnd, rotateStart);
	
			var element = scope.domElement === document ? scope.domElement.body : scope.domElement;
	
			// rotating across whole screen goes 360 degrees around
			rotateLeft(2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed);
	
			// rotating up and down along whole screen attempts to go 360, but limited to 180
			rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed);
	
			rotateStart.copy(rotateEnd);
	
			scope.update();
		}
	
		function handleMouseMoveDolly(event) {
	
			//console.log( 'handleMouseMoveDolly' );
	
			dollyEnd.set(event.clientX, event.clientY);
	
			dollyDelta.subVectors(dollyEnd, dollyStart);
	
			if (dollyDelta.y > 0) {
	
				dollyIn(getZoomScale());
			} else if (dollyDelta.y < 0) {
	
				dollyOut(getZoomScale());
			}
	
			dollyStart.copy(dollyEnd);
	
			scope.update();
		}
	
		function handleMouseMovePan(event) {
	
			//console.log( 'handleMouseMovePan' );
	
			panEnd.set(event.clientX, event.clientY);
	
			panDelta.subVectors(panEnd, panStart);
	
			pan(panDelta.x, panDelta.y);
	
			panStart.copy(panEnd);
	
			scope.update();
		}
	
		function handleMouseUp(event) {
	
			//console.log( 'handleMouseUp' );
	
		}
	
		function handleMouseWheel(event) {
	
			//console.log( 'handleMouseWheel' );
	
			if (event.deltaY < 0) {
	
				dollyOut(getZoomScale());
			} else if (event.deltaY > 0) {
	
				dollyIn(getZoomScale());
			}
	
			scope.update();
		}
	
		function handleKeyDown(event) {
	
			//console.log( 'handleKeyDown' );
	
			switch (event.keyCode) {
	
				case scope.keys.UP:
					pan(0, scope.keyPanSpeed);
					scope.update();
					break;
	
				case scope.keys.BOTTOM:
					pan(0, -scope.keyPanSpeed);
					scope.update();
					break;
	
				case scope.keys.LEFT:
					pan(scope.keyPanSpeed, 0);
					scope.update();
					break;
	
				case scope.keys.RIGHT:
					pan(-scope.keyPanSpeed, 0);
					scope.update();
					break;
	
			}
		}
	
		function handleTouchStartRotate(event) {
	
			//console.log( 'handleTouchStartRotate' );
	
			rotateStart.set(event.touches[0].pageX, event.touches[0].pageY);
		}
	
		function handleTouchStartDolly(event) {
	
			//console.log( 'handleTouchStartDolly' );
	
			var dx = event.touches[0].pageX - event.touches[1].pageX;
			var dy = event.touches[0].pageY - event.touches[1].pageY;
	
			var distance = Math.sqrt(dx * dx + dy * dy);
	
			dollyStart.set(0, distance);
		}
	
		function handleTouchStartPan(event) {
	
			//console.log( 'handleTouchStartPan' );
	
			panStart.set(event.touches[0].pageX, event.touches[0].pageY);
		}
	
		function handleTouchMoveRotate(event) {
	
			//console.log( 'handleTouchMoveRotate' );
	
			rotateEnd.set(event.touches[0].pageX, event.touches[0].pageY);
			rotateDelta.subVectors(rotateEnd, rotateStart);
	
			var element = scope.domElement === document ? scope.domElement.body : scope.domElement;
	
			// rotating across whole screen goes 360 degrees around
			rotateLeft(2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed);
	
			// rotating up and down along whole screen attempts to go 360, but limited to 180
			rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed);
	
			rotateStart.copy(rotateEnd);
	
			scope.update();
		}
	
		function handleTouchMoveDolly(event) {
	
			//console.log( 'handleTouchMoveDolly' );
	
			var dx = event.touches[0].pageX - event.touches[1].pageX;
			var dy = event.touches[0].pageY - event.touches[1].pageY;
	
			var distance = Math.sqrt(dx * dx + dy * dy);
	
			dollyEnd.set(0, distance);
	
			dollyDelta.subVectors(dollyEnd, dollyStart);
	
			if (dollyDelta.y > 0) {
	
				dollyOut(getZoomScale());
			} else if (dollyDelta.y < 0) {
	
				dollyIn(getZoomScale());
			}
	
			dollyStart.copy(dollyEnd);
	
			scope.update();
		}
	
		function handleTouchMovePan(event) {
	
			//console.log( 'handleTouchMovePan' );
	
			panEnd.set(event.touches[0].pageX, event.touches[0].pageY);
	
			panDelta.subVectors(panEnd, panStart);
	
			pan(panDelta.x, panDelta.y);
	
			panStart.copy(panEnd);
	
			scope.update();
		}
	
		function handleTouchEnd(event) {}
	
		//console.log( 'handleTouchEnd' );
	
		//
		// event handlers - FSM: listen for events and reset state
		//
	
		function onMouseDown(event) {
	
			if (scope.enabled === false) return;
	
			event.preventDefault();
	
			if (event.button === scope.mouseButtons.ORBIT) {
	
				if (scope.enableRotate === false) return;
	
				handleMouseDownRotate(event);
	
				state = STATE.ROTATE;
			} else if (event.button === scope.mouseButtons.ZOOM) {
	
				if (scope.enableZoom === false) return;
	
				handleMouseDownDolly(event);
	
				state = STATE.DOLLY;
			} else if (event.button === scope.mouseButtons.PAN) {
	
				if (scope.enablePan === false) return;
	
				handleMouseDownPan(event);
	
				state = STATE.PAN;
			}
	
			if (state !== STATE.NONE) {
	
				document.addEventListener('mousemove', onMouseMove, false);
				document.addEventListener('mouseup', onMouseUp, false);
	
				scope.dispatchEvent(startEvent);
			}
		}
	
		function onMouseMove(event) {
	
			if (scope.enabled === false) return;
	
			event.preventDefault();
	
			if (state === STATE.ROTATE) {
	
				if (scope.enableRotate === false) return;
	
				handleMouseMoveRotate(event);
			} else if (state === STATE.DOLLY) {
	
				if (scope.enableZoom === false) return;
	
				handleMouseMoveDolly(event);
			} else if (state === STATE.PAN) {
	
				if (scope.enablePan === false) return;
	
				handleMouseMovePan(event);
			}
		}
	
		function onMouseUp(event) {
	
			if (scope.enabled === false) return;
	
			handleMouseUp(event);
	
			document.removeEventListener('mousemove', onMouseMove, false);
			document.removeEventListener('mouseup', onMouseUp, false);
	
			scope.dispatchEvent(endEvent);
	
			state = STATE.NONE;
		}
	
		function onMouseWheel(event) {
	
			if (scope.enabled === false || scope.enableZoom === false || state !== STATE.NONE && state !== STATE.ROTATE) return;
	
			event.preventDefault();
			event.stopPropagation();
	
			handleMouseWheel(event);
	
			scope.dispatchEvent(startEvent); // not sure why these are here...
			scope.dispatchEvent(endEvent);
		}
	
		function onKeyDown(event) {
	
			if (scope.enabled === false || scope.enableKeys === false || scope.enablePan === false) return;
	
			handleKeyDown(event);
		}
	
		function onTouchStart(event) {
	
			if (scope.enabled === false) return;
	
			switch (event.touches.length) {
	
				case 1:
					// one-fingered touch: rotate
	
					if (scope.enableRotate === false) return;
	
					handleTouchStartRotate(event);
	
					state = STATE.TOUCH_ROTATE;
	
					break;
	
				case 2:
					// two-fingered touch: dolly
	
					if (scope.enableZoom === false) return;
	
					handleTouchStartDolly(event);
	
					state = STATE.TOUCH_DOLLY;
	
					break;
	
				case 3:
					// three-fingered touch: pan
	
					if (scope.enablePan === false) return;
	
					handleTouchStartPan(event);
	
					state = STATE.TOUCH_PAN;
	
					break;
	
				default:
	
					state = STATE.NONE;
	
			}
	
			if (state !== STATE.NONE) {
	
				scope.dispatchEvent(startEvent);
			}
		}
	
		function onTouchMove(event) {
	
			if (scope.enabled === false) return;
	
			event.preventDefault();
			event.stopPropagation();
	
			switch (event.touches.length) {
	
				case 1:
					// one-fingered touch: rotate
	
					if (scope.enableRotate === false) return;
					if (state !== STATE.TOUCH_ROTATE) return; // is this needed?...
	
					handleTouchMoveRotate(event);
	
					break;
	
				case 2:
					// two-fingered touch: dolly
	
					if (scope.enableZoom === false) return;
					if (state !== STATE.TOUCH_DOLLY) return; // is this needed?...
	
					handleTouchMoveDolly(event);
	
					break;
	
				case 3:
					// three-fingered touch: pan
	
					if (scope.enablePan === false) return;
					if (state !== STATE.TOUCH_PAN) return; // is this needed?...
	
					handleTouchMovePan(event);
	
					break;
	
				default:
	
					state = STATE.NONE;
	
			}
		}
	
		function onTouchEnd(event) {
	
			if (scope.enabled === false) return;
	
			handleTouchEnd(event);
	
			scope.dispatchEvent(endEvent);
	
			state = STATE.NONE;
		}
	
		function onContextMenu(event) {
	
			event.preventDefault();
		}
	
		//
	
		scope.domElement.addEventListener('contextmenu', onContextMenu, false);
	
		scope.domElement.addEventListener('mousedown', onMouseDown, false);
		scope.domElement.addEventListener('wheel', onMouseWheel, false);
	
		scope.domElement.addEventListener('touchstart', onTouchStart, false);
		scope.domElement.addEventListener('touchend', onTouchEnd, false);
		scope.domElement.addEventListener('touchmove', onTouchMove, false);
	
		window.addEventListener('keydown', onKeyDown, false);
	
		// force an update at start
	
		this.update();
	};
	
	THREE.OrbitControls.prototype = Object.create(THREE.EventDispatcher.prototype);
	THREE.OrbitControls.prototype.constructor = THREE.OrbitControls;
	
	Object.defineProperties(THREE.OrbitControls.prototype, {
	
		center: {
	
			get: function get() {
	
				console.warn('THREE.OrbitControls: .center has been renamed to .target');
				return this.target;
			}
	
		},
	
		// backward compatibility
	
		noZoom: {
	
			get: function get() {
	
				console.warn('THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.');
				return !this.enableZoom;
			},
	
			set: function set(value) {
	
				console.warn('THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.');
				this.enableZoom = !value;
			}
	
		},
	
		noRotate: {
	
			get: function get() {
	
				console.warn('THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.');
				return !this.enableRotate;
			},
	
			set: function set(value) {
	
				console.warn('THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.');
				this.enableRotate = !value;
			}
	
		},
	
		noPan: {
	
			get: function get() {
	
				console.warn('THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead.');
				return !this.enablePan;
			},
	
			set: function set(value) {
	
				console.warn('THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead.');
				this.enablePan = !value;
			}
	
		},
	
		noKeys: {
	
			get: function get() {
	
				console.warn('THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.');
				return !this.enableKeys;
			},
	
			set: function set(value) {
	
				console.warn('THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.');
				this.enableKeys = !value;
			}
	
		},
	
		staticMoving: {
	
			get: function get() {
	
				console.warn('THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.');
				return !this.enableDamping;
			},
	
			set: function set(value) {
	
				console.warn('THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.');
				this.enableDamping = !value;
			}
	
		},
	
		dynamicDampingFactor: {
	
			get: function get() {
	
				console.warn('THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.');
				return this.dampingFactor;
			},
	
			set: function set(value) {
	
				console.warn('THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.');
				this.dampingFactor = value;
			}
	
		}
	
	});

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjI4ZGJkOGJiZTAyOWY1NjhiYWQiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9Ub3AuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9wYWdlL0NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0NvcmUvQ29uZi5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL215bGlicy9VdGlsLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvbXlsaWJzL0Z1bmMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9wYWdlL01haW4uanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0Rpc3BsYXlUb3AuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy92aXN1YWwvQ2FudmFzLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvQ29yZS9FbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvbGlicy9PcmJpdENvbnRyb2xzLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsImdiIiwidW5kZWZpbmVkIiwiaW4iLCJjb21tb24iLCJtYWluIiwiQ29tbW9uIiwic2V0dXAiLCJzZXRFdmVudHMiLCJjb25mIiwidSIsImYiLCIkIiwiZG9jdW1lbnQiLCJvbiIsIm9uUmVhZHkiLCJiaW5kIiwib25Mb2FkIiwiQ29uZiIsIlJFTEVBU0UiLCJGTEciLCJMT0ciLCJQQVJBTSIsIlNUQVRTIiwiZGVmVyIsImRlZkgiLCJXIiwiSCIsInNwVyIsInNwSCIsImJwIiwibW9kZSIsImtleXMiLCJzd2l0Y2hNb2RlIiwic2VjMDJJbWdOdW0iLCJ5b3V0dWJlSUQwMSIsInlvdXR1YmVJRDAyIiwid2ViRm9udExvYWRlZCIsImkiLCJrZXkiLCJsZW4iLCJwYXJhbSIsInJlZiIsInJlZjEiLCJ2YWx1ZSIsImxvY2F0aW9uIiwic2VhcmNoIiwicmVwbGFjZSIsInNwbGl0IiwibGVuZ3RoIiwiaiIsIm9iaiIsImsiLCJ2YWwiLCJVdGlsIiwidWEiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJ0b0xvd2VyQ2FzZSIsImFwcFYiLCJhcHBWZXJzaW9uIiwiaXNSZXNTUCIsImlzUmVzUEMiLCJpc1BDIiwiaXNTUCIsImlzVEFCIiwiaXNNQiIsImlzSUUiLCJpc1NldFNQU2l6ZSIsInN0YXJ0VGltZSIsImVsYXBzZWRUaW1lIiwibm93IiwiRGF0ZSIsIm1pbiIsIm1heCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIm1pbjEiLCJtYXgxIiwibWluMiIsIm1heDIiLCJoaXQiLCJyYW5nZSIsIm51bSIsInJlc01pbiIsInJlc01heCIsImJhc2VNaW4iLCJiYXNlTWF4IiwicCIsIm4iLCJwb3MiLCJTdHJpbmciLCJpbmRleE9mIiwic3Vic3RyIiwibnVtZXJhdG9yIiwiZGVub21pbmF0b3IiLCJyYWRpYW5zIiwiUEkiLCJhbmdsZSIsInAxIiwicDIiLCJzcXJ0IiwicG93IiwieCIsInkiLCJhcnIiLCJzb3J0IiwiYSIsImIiLCJnZXRUaW1lIiwiZmxnIiwiY3NzIiwibWVkaWEiLCJwYXR0ZXJuIiwiUmVnRXhwIiwiam9pbiIsInRlc3QiLCJhZGRDbGFzcyIsImlzSXBhZCIsImlzQW5kcm9pZCIsInBsYXRmb3JtIiwiaXNJb3MiLCJtc2llIiwicGFyc2VJbnQiLCJtYXRjaCIsImlzSWUxMFVuZGVyIiwibG9nIiwiaXNJRTExIiwicmVtb3ZlQ2xhc3MiLCJ2ZXJzaW9uIiwicGFyc2VGbG9hdCIsInNsaWNlIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwidXJsIiwiaHJlZiIsInBhcmFtSXRlbXMiLCJsaXN0IiwicGFyYW1JdGVtIiwiaGFzaCIsImwiLCJsZW4xIiwiY29va2llIiwiaXNDb250YWluIiwiciIsImciLCJzdHIiLCJ0b1N0cmluZyIsIkFycmF5IiwiY29udGFpbiIsIm51bWJlciIsIl9wb3ciLCJyb3VuZCIsInJlcyIsIm9yZyIsImRlc3QiLCJiZWZvcmUiLCJhZnRlciIsImdldE5vdyIsImhvdXIiLCJnZXRIb3VycyIsIm1pbnV0ZSIsImdldE1pbnV0ZXMiLCJzZWNvbmQiLCJnZXRTZWNvbmRzIiwibWlsbFNlY29uZCIsImdldE1pbGxpc2Vjb25kcyIsImdldERhdGUiLCJtb250aGRheXMiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwid2Vla0RheUpQIiwid0RKIiwiZ2V0RGF5Iiwid2Vla0RheUVOIiwid0RFIiwiZGF0ZSIsIk51bWJlciIsImlnbm9yZUFycmF5IiwiT2JqZWN0IiwicHJvdG90eXBlIiwiY2FsbCIsIiR0YXJnZXQiLCIkaW1nIiwiZWFjaCIsInciLCJ3aWR0aCIsImgiLCJoZWlnaHQiLCJhdHRyIiwidHJpZ2dlciIsInNlbGYiLCJlIiwicHJldmVudERlZmF1bHQiLCJvZmYiLCJwcm90b2NvbCIsImhvc3RuYW1lIiwicG9ydCIsInBhdGhuYW1lIiwiZXZlbnQiLCJyZXR1cm5WYWx1ZSIsImtleUNvZGUiLCJhZGRFdmVudExpc3RlbmVyIiwib253aGVlbCIsIm9ubW91c2V3aGVlbCIsIm9udG91Y2htb3ZlIiwib25rZXlkb3duIiwicHJldmVudERlZmF1bHRGb3JTY3JvbGxLZXlzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkZ1bmMiLCJibGFuayIsImRlYnVnZ2VyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZXhwYW5kalF1ZXJ5IiwibWV0aG9kcyIsImNvbnNvbGUiLCJtIiwicHJlcGVuZCIsIkZQUyIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbGxiYWNrIiwic2V0VGltZW91dCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwibW96Q2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSIsInRpbWVyIiwiY2xlYXJUaW1lb3V0IiwialF1ZXJ5IiwiZm4iLCJleHRlbmQiLCJhZGp1c3QiLCJhZGp1c3RXIiwiYWRqdXN0SCIsIkNTUyIsInN1cHBvcnRzIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwidiIsImlzQW5kcm9pZFZlcnNpb24iLCJhbGVydCIsIk1haW4iLCJvbkltbWVkaWF0ZSIsInBhZ2UiLCJkYXRhIiwiRGlzcGxheVRvcCIsImNhbnZhcyIsIm91dHB1dCIsImdldEVsZW1lbnRCeUlkIiwiQ2FudmFzIiwib3B0cyIsImNyZWF0ZUVsZW1lbnQiLCJjYW1lcmEiLCJyZW5kZXJlciIsInNjZW5lIiwiY3ViZSIsImNyZWF0ZUNhbWVyYSIsIl9jcmVhdGVDYW1lcmEiLCJjcmVhdGVSZW5kZXJlciIsIl9jcmVhdGVSZW5kZXJlciIsImNyZWF0ZVNjZW5lIiwiX2NyZWF0ZVNjZW5lIiwiY3JlYXRlT2JqZWN0IiwiX2NyZWF0ZU9iamVjdCIsIm9yYml0Q29udHJvbHMiLCJfb3JiaXRDb250cm9scyIsIm9uUmVzaXplIiwiX29uUmVzaXplIiwiVXBkYXRlIiwiX1VwZGF0ZSIsIlRIUkVFIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJwb3NpdGlvbiIsInoiLCJsb29rQXQiLCJWZWN0b3IzIiwiV2ViR0xSZW5kZXJlciIsImFscGhhIiwiYW50aWFsaWFzIiwic3RlbmNpbCIsImRlcHRoIiwicHJlbXVsdGlwbGllZEFscGhhIiwic2V0Q2xlYXJDb2xvciIsInNldFBpeGVsUmF0aW8iLCJkZXZpY2VQaXhlbFJhdGlvIiwic2V0U2l6ZSIsImFwcGVuZENoaWxkIiwiZG9tRWxlbWVudCIsIlNjZW5lIiwiY3ViZUdlb21ldHJ5IiwiQm94R2VvbWV0cnkiLCJjdWJlTWF0ZXJpYWwiLCJNZXNoQmFzaWNNYXRlcmlhbCIsImNvbG9yIiwid2lyZWZyYW1lIiwiTWVzaCIsInJlbmRlciIsImFzcGVjdCIsInVwZGF0ZVByb2plY3Rpb25NYXRyaXgiLCJjb250cm9scyIsIk9yYml0Q29udHJvbHMiLCJhdXRvUm90YXRlIiwiY2xvY2siLCJDbG9jayIsImRlbHRhIiwiZ2V0RGVsdGEiLCJ1cGRhdGUiLCJyZXF1aXJlIiwiRW50cnkiLCJvYmplY3QiLCJlbmFibGVkIiwidGFyZ2V0IiwibWluRGlzdGFuY2UiLCJtYXhEaXN0YW5jZSIsIkluZmluaXR5IiwibWluWm9vbSIsIm1heFpvb20iLCJtaW5Qb2xhckFuZ2xlIiwibWF4UG9sYXJBbmdsZSIsIm1pbkF6aW11dGhBbmdsZSIsIm1heEF6aW11dGhBbmdsZSIsImVuYWJsZURhbXBpbmciLCJkYW1waW5nRmFjdG9yIiwiZW5hYmxlWm9vbSIsInpvb21TcGVlZCIsImVuYWJsZVJvdGF0ZSIsInJvdGF0ZVNwZWVkIiwiZW5hYmxlUGFuIiwia2V5UGFuU3BlZWQiLCJhdXRvUm90YXRlU3BlZWQiLCJlbmFibGVLZXlzIiwiTEVGVCIsIlVQIiwiUklHSFQiLCJCT1RUT00iLCJtb3VzZUJ1dHRvbnMiLCJPUkJJVCIsIk1PVVNFIiwiWk9PTSIsIk1JRERMRSIsIlBBTiIsInRhcmdldDAiLCJjbG9uZSIsInBvc2l0aW9uMCIsInpvb20wIiwiem9vbSIsImdldFBvbGFyQW5nbGUiLCJzcGhlcmljYWwiLCJwaGkiLCJnZXRBemltdXRoYWxBbmdsZSIsInRoZXRhIiwicmVzZXQiLCJzY29wZSIsImNvcHkiLCJkaXNwYXRjaEV2ZW50IiwiY2hhbmdlRXZlbnQiLCJzdGF0ZSIsIlNUQVRFIiwiTk9ORSIsIm9mZnNldCIsInF1YXQiLCJRdWF0ZXJuaW9uIiwic2V0RnJvbVVuaXRWZWN0b3JzIiwidXAiLCJxdWF0SW52ZXJzZSIsImludmVyc2UiLCJsYXN0UG9zaXRpb24iLCJsYXN0UXVhdGVybmlvbiIsInN1YiIsImFwcGx5UXVhdGVybmlvbiIsInNldEZyb21WZWN0b3IzIiwicm90YXRlTGVmdCIsImdldEF1dG9Sb3RhdGlvbkFuZ2xlIiwic3BoZXJpY2FsRGVsdGEiLCJtYWtlU2FmZSIsInJhZGl1cyIsInNjYWxlIiwicGFuT2Zmc2V0Iiwic2V0RnJvbVNwaGVyaWNhbCIsInNldCIsInpvb21DaGFuZ2VkIiwiZGlzdGFuY2VUb1NxdWFyZWQiLCJFUFMiLCJkb3QiLCJxdWF0ZXJuaW9uIiwiZGlzcG9zZSIsIm9uQ29udGV4dE1lbnUiLCJvbk1vdXNlRG93biIsIm9uTW91c2VXaGVlbCIsIm9uVG91Y2hTdGFydCIsIm9uVG91Y2hFbmQiLCJvblRvdWNoTW92ZSIsIm9uTW91c2VNb3ZlIiwib25Nb3VzZVVwIiwib25LZXlEb3duIiwidHlwZSIsInN0YXJ0RXZlbnQiLCJlbmRFdmVudCIsIlJPVEFURSIsIkRPTExZIiwiVE9VQ0hfUk9UQVRFIiwiVE9VQ0hfRE9MTFkiLCJUT1VDSF9QQU4iLCJTcGhlcmljYWwiLCJyb3RhdGVTdGFydCIsIlZlY3RvcjIiLCJyb3RhdGVFbmQiLCJyb3RhdGVEZWx0YSIsInBhblN0YXJ0IiwicGFuRW5kIiwicGFuRGVsdGEiLCJkb2xseVN0YXJ0IiwiZG9sbHlFbmQiLCJkb2xseURlbHRhIiwiZ2V0Wm9vbVNjYWxlIiwicm90YXRlVXAiLCJwYW5MZWZ0IiwiZGlzdGFuY2UiLCJvYmplY3RNYXRyaXgiLCJzZXRGcm9tTWF0cml4Q29sdW1uIiwibXVsdGlwbHlTY2FsYXIiLCJwYW5VcCIsInBhbiIsImRlbHRhWCIsImRlbHRhWSIsImVsZW1lbnQiLCJib2R5IiwidGFyZ2V0RGlzdGFuY2UiLCJ0YW4iLCJmb3YiLCJjbGllbnRIZWlnaHQiLCJtYXRyaXgiLCJPcnRob2dyYXBoaWNDYW1lcmEiLCJyaWdodCIsImxlZnQiLCJjbGllbnRXaWR0aCIsInRvcCIsImJvdHRvbSIsIndhcm4iLCJkb2xseUluIiwiZG9sbHlTY2FsZSIsImRvbGx5T3V0IiwiaGFuZGxlTW91c2VEb3duUm90YXRlIiwiY2xpZW50WCIsImNsaWVudFkiLCJoYW5kbGVNb3VzZURvd25Eb2xseSIsImhhbmRsZU1vdXNlRG93blBhbiIsImhhbmRsZU1vdXNlTW92ZVJvdGF0ZSIsInN1YlZlY3RvcnMiLCJoYW5kbGVNb3VzZU1vdmVEb2xseSIsImhhbmRsZU1vdXNlTW92ZVBhbiIsImhhbmRsZU1vdXNlVXAiLCJoYW5kbGVNb3VzZVdoZWVsIiwiaGFuZGxlS2V5RG93biIsImhhbmRsZVRvdWNoU3RhcnRSb3RhdGUiLCJ0b3VjaGVzIiwicGFnZVgiLCJwYWdlWSIsImhhbmRsZVRvdWNoU3RhcnREb2xseSIsImR4IiwiZHkiLCJoYW5kbGVUb3VjaFN0YXJ0UGFuIiwiaGFuZGxlVG91Y2hNb3ZlUm90YXRlIiwiaGFuZGxlVG91Y2hNb3ZlRG9sbHkiLCJoYW5kbGVUb3VjaE1vdmVQYW4iLCJoYW5kbGVUb3VjaEVuZCIsImJ1dHRvbiIsInN0b3BQcm9wYWdhdGlvbiIsImNyZWF0ZSIsIkV2ZW50RGlzcGF0Y2hlciIsImNvbnN0cnVjdG9yIiwiZGVmaW5lUHJvcGVydGllcyIsImNlbnRlciIsImdldCIsIm5vWm9vbSIsIm5vUm90YXRlIiwibm9QYW4iLCJub0tleXMiLCJzdGF0aWNNb3ZpbmciLCJkeW5hbWljRGFtcGluZ0ZhY3RvciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQzlCQTs7OztBQUNBOzs7Ozs7QUFUQTs7Ozs7Ozs7QUFXQSxFQUFDLFlBQUk7O0FBRUg7QUFDQSxPQUFJQSxPQUFPQyxFQUFQLEtBQVlDLFNBQWhCLEVBQTJCRixPQUFPQyxFQUFQLEdBQVksRUFBWjtBQUMzQkQsVUFBT0MsRUFBUCxDQUFVRSxFQUFWLEdBQWUsRUFBZixDQUpHLENBSWdCOztBQUVuQkYsTUFBR0UsRUFBSCxDQUFNQyxNQUFOLEdBQWUsc0JBQWY7QUFDQUgsTUFBR0UsRUFBSCxDQUFNRSxJQUFOLEdBQWEsb0JBQWI7QUFFRCxFQVRE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QUFDQSxXQUFPLENBQUUsS0FBSy9HLFNBQWQ7QUFFQSxJQVBLOztBQVNOb0QsUUFBSyxhQUFXalYsS0FBWCxFQUFtQjs7QUFFdkI0SyxZQUFRZ08sSUFBUixDQUFjLDBFQUFkO0FBQ0EsU0FBSy9HLFNBQUwsR0FBaUIsQ0FBRTdSLEtBQW5CO0FBRUE7O0FBZEssR0FuRGdEOztBQXFFdkRtYixVQUFROztBQUVQSixRQUFLLGVBQVk7O0FBRWhCblEsWUFBUWdPLElBQVIsQ0FBYyw0RUFBZDtBQUNBLFdBQU8sQ0FBRSxLQUFLNUcsVUFBZDtBQUVBLElBUE07O0FBU1BpRCxRQUFLLGFBQVdqVixLQUFYLEVBQW1COztBQUV2QjRLLFlBQVFnTyxJQUFSLENBQWMsNEVBQWQ7QUFDQSxTQUFLNUcsVUFBTCxHQUFrQixDQUFFaFMsS0FBcEI7QUFFQTs7QUFkTSxHQXJFK0M7O0FBdUZ2RG9iLGdCQUFlOztBQUVkTCxRQUFLLGVBQVk7O0FBRWhCblEsWUFBUWdPLElBQVIsQ0FBYyxxRkFBZDtBQUNBLFdBQU8sQ0FBRSxLQUFLckgsYUFBZDtBQUVBLElBUGE7O0FBU2QwRCxRQUFLLGFBQVdqVixLQUFYLEVBQW1COztBQUV2QjRLLFlBQVFnTyxJQUFSLENBQWMscUZBQWQ7QUFDQSxTQUFLckgsYUFBTCxHQUFxQixDQUFFdlIsS0FBdkI7QUFFQTs7QUFkYSxHQXZGd0M7O0FBeUd2RHFiLHdCQUF1Qjs7QUFFdEJOLFFBQUssZUFBWTs7QUFFaEJuUSxZQUFRZ08sSUFBUixDQUFjLDBGQUFkO0FBQ0EsV0FBTyxLQUFLcEgsYUFBWjtBQUVBLElBUHFCOztBQVN0QnlELFFBQUssYUFBV2pWLEtBQVgsRUFBbUI7O0FBRXZCNEssWUFBUWdPLElBQVIsQ0FBYywwRkFBZDtBQUNBLFNBQUtwSCxhQUFMLEdBQXFCeFIsS0FBckI7QUFFQTs7QUFkcUI7O0FBekdnQyxFQUF4RCxFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBiMjhkYmQ4YmJlMDI5ZjU2OGJhZCIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IFRvcFxuICogRGF0ZTpcbiAqIEF1dGhvcjpcbiAqL1xuXG5pbXBvcnQgQ29tbW9uIGZyb20gJy4vcGFnZS9Db21tb24nO1xuaW1wb3J0IE1haW4gZnJvbSAnLi9wYWdlL01haW4nO1xuXG4oKCk9PntcblxuICAvLyBnbG9iYWzjgqrjg5bjgrjjgqfjgq/jg4hcbiAgaWYgKHdpbmRvdy5nYj09PXVuZGVmaW5lZCkgd2luZG93LmdiID0ge307XG4gIHdpbmRvdy5nYi5pbiA9IHt9OyAvL2luc3RhbmNlXG5cbiAgZ2IuaW4uY29tbW9uID0gbmV3IENvbW1vbigpO1xuICBnYi5pbi5tYWluID0gbmV3IE1haW4oKTtcblxufSkoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL1RvcC5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IENvbW1vblxuICogRGF0ZTpcbiAqIEF1dGhvcjpcbiAqL1xuXG5pbXBvcnQgQ29uZiBmcm9tICcuLi9Db3JlL0NvbmYnO1xuaW1wb3J0IFV0aWwgZnJvbSAnLi4vbXlsaWJzL1V0aWwnO1xuaW1wb3J0IEZ1bmMgZnJvbSAnLi4vbXlsaWJzL0Z1bmMnO1xuXG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tbW9uIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuXHRzZXR1cCgpIHtcblxuXHRcdC8qKlxuICAgICAqIEB0eXBlIHtDb25mfSA6IOWIneacn+WApOOBruioreWumuODu+ODh+ODvOOCv+OBrumFjee9rlxuXHRcdCAqIEB0eXBlIHtVdGlsfSA6IFV0aWzplqLmlbDjga7liJ3mnJ/ljJZcblx0XHQgKiBAdHlwZSB7RnVuY30gOiDjgqTjg5njg7Pjg4jjg57jg43jg7zjgrjjg6Pjg7zjga7oqK3nva5cblx0XHQgKi9cbiAgICBnYi5pbi5jb25mID0gbmV3IENvbmYoKTtcbiAgICBnYi5pbi51ID0gbmV3IFV0aWwoKTtcbiAgICBnYi5pbi5mID0gbmV3IEZ1bmMoKTtcblxuICB9XG5cbiAgb25SZWFkeSgpIHtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICDjg4fjg5DjgqTjgrnjg7vjg5bjg6njgqbjgrbliKTlrppcbiAgICAvLyAg44K544Oe44Ob44Gu5ZCR44GN5Yik5a6aXG4gICAgLy8gIOODmuODvOOCuOaDheWgseWPluW+l1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cblxuICB9XG5cbiAgb25Mb2FkKCkge1xuXG4gICAgXG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdyZWFkeScsIHRoaXMub25SZWFkeS5iaW5kKHRoaXMpKTtcbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCB0aGlzLm9uTG9hZC5iaW5kKHRoaXMpKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3BhZ2UvQ29tbW9uLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogQ29uZlxuICogRGF0ZTpcbiAqIEF1dGhvcjpcbiAqL1xuXG4vLyBpbXBvcnQgU291bmREYXRhIGZyb20gJy4vRGF0YS9Tb3VuZC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmYge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIOacrOeVquODleODqeOCsFxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgICBcbiAgICB0aGlzLlJFTEVBU0UgPSB0cnVlO1xuICAgIC8vIHRoaXMuUkVMRUFTRSA9IGZhbHNlO1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIOODleODqeOCsOmWoumAo1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuRkxHID0ge1xuICAgICAgTE9HOnRydWUsICAvLyDjg63jgrDlh7rliptcbiAgICAgIFBBUkFNOnRydWUsIC8vIOODkeODqeODoeODvOOCv+ODgeOCp+ODg+OCr1xuICAgICAgU1RBVFM6dHJ1ZSAgLy8gU3RhdHPooajnpLpcbiAgICB9O1xuICAgIGlmICghdGhpcy5SRUxFQVNFKSB7XG4gICAgICB0aGlzLkZMRyA9IHtcbiAgICAgICAgTE9HOmZhbHNlLFxuICAgICAgICBQQVJBTTpmYWxzZSxcbiAgICAgICAgU1RBVFM6ZmFsc2UgXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICDln7rmnKwgd2lkdGggaGVpZ2h0XG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5kZWZXID0gMTMwMDtcbiAgICB0aGlzLmRlZkggPSA4NTA7XG5cbiAgICB0aGlzLlcgPSAxMjAwO1xuICAgIHRoaXMuSCA9IDc1MDtcblxuICAgIHRoaXMuc3BXID0gMzc1O1xuICAgIHRoaXMuc3BIID0gNjY3O1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIOODluODrOOCpOOCr+ODneOCpOODs+ODiFxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuYnAgPSA3Njg7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgbW9kZVxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMubW9kZSA9IG51bGw7XG4gICAgdGhpcy5rZXlzID0gW1xuICAgICAge1xuICAgICAgICAgICdrZXknOiAnbW92aWUnLFxuICAgICAgICAgICd2YWx1ZSc6IFsnbW9ybmluZycsJ2FmdGVybm9vbicsJ25pZ2h0J10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAgICdrZXknOiAnZGF0YScsXG4gICAgICAgICAgJ3ZhbHVlJzogWydkYXRhMDEnLCdkYXRhMDInLCdkYXRhMDMnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICAgJ2tleSc6ICdwcm9kdWN0JyxcbiAgICAgICAgICAndmFsdWUnOiBbJzAxJ10sXG4gICAgICB9LFxuICAgIF1cbiAgICB0aGlzLnN3aXRjaE1vZGUoKTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICBzb3VuZCBkYXRhXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gdGhpcy5zb3VuZERhdGEgPSBuZXcgU291bmREYXRhKCk7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgc2VjMDIgYmcgSW1nIE51bVxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuc2VjMDJJbWdOdW0gPSAzOTY7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgeW91dHViZSBJRFxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMueW91dHViZUlEMDEgPSAneFcyb05wTnJLZDAnO1xuICAgIHRoaXMueW91dHViZUlEMDIgPSAndDJXZVJSZEFGZUknO1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIHdlYiBmb250IGxvYWRlZFxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMud2ViRm9udExvYWRlZCA9IGZhbHNlO1xuXG4gIH1cblxuXG4gIHN3aXRjaE1vZGUoKXtcblxuICAgIHZhciBpLCBrZXksIGxlbiwgcGFyYW0sIHJlZiwgcmVmMSwgdmFsdWU7XG5cbiAgICByZWYgPSBsb2NhdGlvbi5zZWFyY2gucmVwbGFjZSgnPycsICcnKS5zcGxpdCgnJicpO1xuXG4gICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBwYXJhbSA9IHJlZltpXTtcbiAgICAgIHJlZjEgPSBwYXJhbS5zcGxpdCgnPScpLCBrZXkgPSByZWYxWzBdLCB2YWx1ZSA9IHJlZjFbMV07XG5cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5rZXlzLmxlbmd0aDsgaisrKSB7XG5cbiAgICAgICAgdmFyIG9iaiA9IHRoaXMua2V5c1tqXTtcblxuICAgICAgICAvLyDjg5Hjg6njg6Hjg7zjgr/jgYzjgq3jg7zjgajkuIDnt5LjgaDjgaPjgZ/jgolcbiAgICAgICAgaWYgKG9iai5rZXkgPT09IGtleSkge1xuXG4gICAgICAgICAgLy8g5ZCE5YCk44Go5q+U6LyDXG4gICAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBvYmoudmFsdWUubGVuZ3RoOyBrKyspIHtcblxuICAgICAgICAgICAgdmFyIHZhbCA9IG9iai52YWx1ZVtrXTtcblxuICAgICAgICAgICAgLy8g44Kt44O844KSdGhpcy5rZXlz44Gua2V544Gr44CBdmFsdWXjgpLmr5TovIPjgZfjgablkIzlgKTjgaDjgaPjgZ/jgoLjga7jgatcbiAgICAgICAgICAgIGlmICh2YWwgPT09IHZhbHVlKSB0aGlzW29iai5rZXldID0gdmFsO1xuICAgICAgICAgICAgXG4gICAgICAgICAgfTtcblxuXG4gICAgICAgIH07XG5cbiAgICAgICAgXG4gICAgICB9O1xuXG4gICAgfVxuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvQ29yZS9Db25mLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6IOS+v+WIqemWouaVsOOCr+ODqeOCuVxuICogUHJvamVjdDpcbiAqIEZpbGU6IFV0aWxcbiAqIERhdGU6XG4gKiBBdXRob3I6XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXRpbCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLnVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTsgLy91c2VyYWdlbnRcbiAgICB0aGlzLmFwcFYgPSB3aW5kb3cubmF2aWdhdG9yLmFwcFZlcnNpb24udG9Mb3dlckNhc2UoKTsgLy9hcHBWZXJzaW9uXG4gICAgdGhpcy5pc1Jlc1NQID0gbnVsbDsgLy8gcmVzcG9uc2l2ZSBzcFxuICAgIHRoaXMuaXNSZXNQQyA9IG51bGw7IC8vIHJlc3BvbnNpdmUgcGNcblxuICAgIHRoaXMuaXNQQyA9IG51bGw7XG4gICAgdGhpcy5pc1NQID0gbnVsbDtcbiAgICB0aGlzLmlzVEFCID0gbnVsbDtcbiAgICB0aGlzLmlzTUIgPSBudWxsO1xuXG4gICAgdGhpcy5pc0lFID0gbnVsbDtcblxuICAgIHRoaXMuaXNTZXRTUFNpemUgPSBmYWxzZTtcblxuXG4gICAgdGhpcy5zdGFydFRpbWUgPSBudWxsO1xuICAgIHRoaXMuZWxhcHNlZFRpbWUgPSBudWxsO1xuICAgIHRoaXMubm93ID0gbmV3IERhdGUoKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIE1hdGhcbiAgICovXG5cblxuICAvKipcbiAgICog44Op44Oz44OA44Og44Gq5YCk44KS6L+U44GZXG4gICAqIEBwYXJhbSBtaW4gOiDmnIDlsI/lgKQoaW50KVxuICAgKiBAcGFyYW0gbWF4IDog5pyA5aSn5YCkKGludClcbiAgICogQHJldHVybnMge251bWJlcn0gOiBtaW7jgYvjgoltYXjjgb7jgafjga7jg6njg7Pjg4Djg6DjgarmlbTmlbAoaW50KVxuICAgKi9cbiAgcmFuZG9tKG1pbiwgbWF4KSB7XG5cbiAgICByZXR1cm4gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqICgobWF4ICsgMSkgLSBtaW4pICsgbWluKSk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiDjg6njg7Pjg4Djg6DjgarmlbTmlbDjgpIy44Gk44Gu56+E5Zuy44GL44KJ5Y+W5b6XXG4gICAqIEBwYXJhbSBtaW4xIDog5pyA5bCP5YCkMShpbnQpXG4gICAqIEBwYXJhbSBtYXgxIDog5pyA5aSn5YCkMShpbnQpXG4gICAqIEBwYXJhbSBtaW4yIDog5pyA5bCP5YCkMihpbnQpXG4gICAqIEBwYXJhbSBtYXgyIDog5pyA5aSn5YCkMihpbnQpXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IDogbWlu44GL44KJbWF444G+44Gn44Gu44Op44Oz44OA44Og44Gq5pW05pWwKGludClcbiAgICovXG4gIHJhbmRvbTIobWluMSwgbWF4MSwgbWluMiwgbWF4Mikge1xuICAgIFxuICAgIGlmICh0aGlzLmhpdCgyKSkge1xuICAgICAgcmV0dXJuIHRoaXMucmFuZG9tKG1pbjEsIG1heDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5yYW5kb20obWluMiwgbWF4Mik7XG4gICAgfVxuXG4gIH1cblxuICAvKipcbiAgICogMS9AcmFuZ2Xjga7norrnjofjgad0cnVl44KS5Y+W5b6XXG4gICAqIEBwYXJhbSByYW5nZSA6IOavjeaVsChpbnQpXG4gICAqIEByZXR1cm5zIHtib29sZWFufSA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgICovXG4gIGhpdChyYW5nZSkge1xuXG4gICAgcmV0dXJuIHRoaXMucmFuZG9tKDAsIHJhbmdlIC0gMSkgPT09IDA7XG5cbiAgfVxuICBcbiAgLy8gMOOBi+OCieevhOWbsuWGheOBp+ODqeODs+ODgOODoOOBquaVtOaVsOOCkuWPluW+l1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAdmFsIDog56+E5ZuyKGludClcbiAgLy8gcmV0dXJuIDog44Op44Oz44OA44Og44Gq5pW05pWwKGludClcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmFuZ2UodmFsKSB7XG5cbiAgICByZXR1cm4gdGhpcy5yYW5kb20oLXZhbCwgdmFsKTtcblxuICB9XG4gIFxuICAvLyDlgKTjgpLjg57jg4Pjg5Tjg7PjgrBcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQG51bSA6IOODnuODg+ODlOODs+OCsOOBmeOCi+WApChOdW1iZXIpXG4gIC8vIEByZXNNaW4gOiDntZDmnpzjgajjgarjgovlgKTjga7mnIDlsI/lgKQoTnVtYmVyKVxuICAvLyBAcmVzTWF4IDog57WQ5p6c44Go44Gq44KL5YCk44Gu5pyA5aSn5YCkKE51bWJlcilcbiAgLy8gQGJhc2VNaW4gOiDlhYPjgajjgarjgovlgKTjga7mnIDlsI/lgKQoTnVtYmVyKVxuICAvLyBAYmFzZU1heCA6IOWFg+OBqOOBquOCi+WApOOBruacgOWkp+WApChOdW1iZXIpXG4gIC8vIHJldHVybiA6IOODnuODg+ODlOODs+OCsOOBleOCjOOBn+WApChOdW1iZXIpXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIG1hcChudW0sIHJlc01pbiwgcmVzTWF4LCBiYXNlTWluLCBiYXNlTWF4KSB7XG5cbiAgICB2YXIgcDtcbiAgICBpZiAobnVtIDwgYmFzZU1pbikge1xuICAgICAgcmV0dXJuIHJlc01pbjtcbiAgICB9XG4gICAgaWYgKG51bSA+IGJhc2VNYXgpIHtcbiAgICAgIHJldHVybiByZXNNYXg7XG4gICAgfVxuICAgIHAgPSAocmVzTWF4IC0gcmVzTWluKSAvIChiYXNlTWF4IC0gYmFzZU1pbik7XG5cbiAgICByZXR1cm4gKChudW0gLSBiYXNlTWluKSAqIHApICsgcmVzTWluO1xuXG4gIH0gICAgXG4gIFxuICAvLyDmlbDlgKTjgavlsI/mlbDngrnnrKxAbuS9jeOBvuOBp+OCkuOBpOOBkeOBn+aWh+Wtl+WIl+OCkui/lOOBmVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAbnVtIDog5YCkKE51bWJlcilcbiAgLy8gQG4gOiDlsI/mlbDngrnjga7kvY0oaW50KVxuICAvLyByZXR1cm4gOiDlpInmj5vjgZXjgozjgZ/lgKQoU3RyaW5nKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBkZWNpbWFsKG51bSwgbikge1xuICAgIHZhciBpLCBwb3M7XG4gICAgbnVtID0gU3RyaW5nKG51bSk7XG4gICAgcG9zID0gbnVtLmluZGV4T2YoXCIuXCIpO1xuICAgIGlmIChuID09PSAwKSB7XG4gICAgICByZXR1cm4gbnVtLnNwbGl0KFwiLlwiKVswXTtcbiAgICB9XG4gICAgaWYgKHBvcyA9PT0gLTEpIHtcbiAgICAgIG51bSArPSBcIi5cIjtcbiAgICAgIGkgPSAwO1xuICAgICAgd2hpbGUgKGkgPCBuKSB7XG4gICAgICAgIG51bSArPSBcIjBcIjtcbiAgICAgICAgaSsrO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bTtcbiAgICB9XG4gICAgbnVtID0gbnVtLnN1YnN0cigwLCBwb3MpICsgbnVtLnN1YnN0cihwb3MsIG4gKyAxKTtcbiAgICByZXR1cm4gbnVtO1xuICB9XG5cbiAgY2xhbXAobnVtZXJhdG9yLGRlbm9taW5hdG9yLHZhbCkge1xuXG4gICAgcmV0dXJuIHZhbCAqIChudW1lcmF0b3IgLyBkZW5vbWluYXRvcik7XG5cbiAgfVxuXG5cdC8qKlxuICAgKiDjg6njgrjjgqLjg7PjgpLop5LluqbjgavlpInmj5tcblx0ICogQHBhcmFtIHJhZGlhbnNcblx0ICogQHJldHVybnMge251bWJlcn1cblx0ICovXG4gIGRlZ3JlZShyYWRpYW5zKSB7XG5cbiAgICByZXR1cm4gcmFkaWFucyAqIDE4MCAvIE1hdGguUEk7XG5cbiAgfVxuXG4gIC8vIHRvIHJhZGlhbnNcbiAgcmFkaWFuKGFuZ2xlKSB7IFxuXG4gICAgcmV0dXJuIGFuZ2xlICogTWF0aC5QSSAvIDE4MDsgLy8x5bqm5L2V44Op44K444Ki44Oz44GLXG5cbiAgfVxuXG4gIGRpc3QocDEsIHAyKSB7XG5cbiAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHAyLnggLSBwMS54LCAyKSArIE1hdGgucG93KHAyLnkgLSBwMS55LCAyKSk7XG5cbiAgfVxuXG4gIGFzY2VuZChhcnIpIHtcblxuICAgIGFyci5zb3J0KGZ1bmN0aW9uKGEsYil7XG4gICAgICBpZiggYSA+IGIgKSByZXR1cm4gLTE7XG4gICAgICBpZiggYSA8IGIgKSByZXR1cm4gMTtcbiAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuICAgIC8vIHZhciBhID0gWzUsMyw5LDEsMTBdXG4gICAgLy8g57WQ5p6cOjEwLDksNSwzLDFcblxuICB9XG5cbiAgZGVzY2VuZChhcnIpIHtcblxuICAgIGFyci5zb3J0KGZ1bmN0aW9uKGEsYil7XG4gICAgICBpZiggYSA8IGIgKSByZXR1cm4gLTE7XG4gICAgICBpZiggYSA+IGIgKSByZXR1cm4gMTtcbiAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuXG4gICAgLy8gdmFyIGEgPSBbNSwzLDksMSwxMF1cbiAgICAvLyDntZDmnpw6MSwzLDUsOSwxMFxuXG4gIH1cblxuICAvLyBtYXAodmFsdWUsIG1pbjAxLCBtYXgwMSwgbWluMDIsIG1heDAyKSB7XG5cbiAgLy8gICB2YXIgZGlzMDEgPSBtYXgwMSAtIG1pbjAxO1xuICAvLyAgIHZhciBkaXMwMiA9IG1heDAyIC0gbWluMDJcblxuICAvLyAgIHZhciByYXRlID0gZGlzMDIgLyBkaXMwMTtcblxuICAvLyAgIHZhbHVlID0gdmFsdWUgKiByYXRlO1xuXG4gIC8vICAgcmV0dXJuIHZhbHVlO1xuICAvLyB9XG5cbiAgY29uc3RyYWluKHZhbHVlLCBtaW4sIG1heCkge1xuXG4gICAgcmV0dXJuIE1hdGgubWluKG1heCwgTWF0aC5tYXgodmFsdWUsIG1pbikpO1xuXG4gICAgLy8gaWYgKHZhbHVlIDw9IGxvdykgdmFsdWUgPSBsb3c7XG4gICAgLy8gaWYgKHZhbHVlID49IGhpZ2gpIHZhbHVlID0gaGlnaDsgICAgIFxuICAgIC8vIHJldHVybiB2YWx1ZTtcblxuICB9XG5cbiAgLy8g44Om44OL44O844KvSUTjgpLlj5blvpdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgdW5pcXVlKCkge1xuXG4gICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gIH1cbiAgXG4gIC8vICoqanF1YXJ55L2/55SoXG4gIC8vIOODnOOCv+ODs+ODouODvOODieWkieabtFxuICAvLyB0cnVl44Gq44KJ44Kr44O844K944Or44GM44Od44Kk44Oz44K/44O844Gu5b2i44GrXG4gIC8vIGZhbHNl44Gq44KJ44OH44OV44Kp44Or44OI44Gu44Kr44O844K944Or44GrXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEBmbGcgOiDpgannlKjjgZnjgovjgYvjganjgYbjgYsoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYnV0dG9uTW9kZShmbGcpIHtcblxuICAgIGlmIChmbGcpIHtcbiAgICAgIHJldHVybiAkKFwiYm9keVwiKS5jc3MoXCJjdXJzb3JcIiwgXCJwb2ludGVyXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJChcImJvZHlcIikuY3NzKFwiY3Vyc29yXCIsIFwiZGVmYXVsdFwiKTtcbiAgICB9XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgZGV2aWNlXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIGlzRGV2aWNlU1AoKXtcblxuICAgIHZhciBtZWRpYSA9IFtcImlwaG9uZVwiLFwiaXBvZFwiLFwiaXBhZFwiLFwiYW5kcm9pZFwiLFwiZHJlYW1cIixcImN1cGNha2VcIixcImJsYWNrYmVycnk5NTAwXCIsXCJibGFja2JlcnJ5OTUzMFwiLFwiYmxhY2tiZXJyeTk1MjBcIixcImJsYWNrYmVycnk5NTUwXCIsXCJibGFja2JlcnJ5OTgwMFwiLFwid2Vib3NcIixcImluY29nbml0b1wiLFwid2VibWF0ZVwiXTtcbiAgICB2YXIgcGF0dGVybiA9IG5ldyBSZWdFeHAobWVkaWEuam9pbihcInxcIiksXCJpXCIpO1xuXG4gICAgdmFyIGIgPSBwYXR0ZXJuLnRlc3QodGhpcy51YSk7XG4gICAgaWYgKGIpICQoJ2JvZHknKS5hZGRDbGFzcygnaXNEZXZpY2VTUCcpO1xuXG4gICAgdGhpcy5pc1NQID0gYjtcblxuICB9XG4gIGlzRGV2aWNlVEFCKCl7XG5cbiAgICB2YXIgYiA9ICh0aGlzLnVhLmluZGV4T2YoXCJ3aW5kb3dzXCIpICE9IC0xICYmIHRoaXMudWEuaW5kZXhPZihcInRvdWNoXCIpICE9IC0xKVxuICAgICAgfHwgdGhpcy51YS5pbmRleE9mKFwiaXBhZFwiKSAhPSAtMVxuICAgICAgfHwgKHRoaXMudWEuaW5kZXhPZihcImFuZHJvaWRcIikgIT0gLTEgJiYgdGhpcy51YS5pbmRleE9mKFwibW9iaWxlXCIpID09IC0xKVxuICAgICAgfHwgKHRoaXMudWEuaW5kZXhPZihcImZpcmVmb3hcIikgIT0gLTEgJiYgdGhpcy51YS5pbmRleE9mKFwidGFibGV0XCIpICE9IC0xKVxuICAgICAgfHwgdGhpcy51YS5pbmRleE9mKFwia2luZGxlXCIpICE9IC0xXG4gICAgICB8fCB0aGlzLnVhLmluZGV4T2YoXCJzaWxrXCIpICE9IC0xXG4gICAgICB8fCB0aGlzLnVhLmluZGV4T2YoXCJwbGF5Ym9va1wiKSAhPSAtMTtcbiAgICBpZiAoYikgJCgnYm9keScpLmFkZENsYXNzKCdpc0RldmljZVRBQicpO1xuXG4gICAgdGhpcy5pc1RBQiA9IGI7XG5cbiAgfVxuXG4gIGlzRGV2aWNlTUIoKXtcblxuICAgIHZhciBiID0gKHRoaXMudWEuaW5kZXhPZihcIndpbmRvd3NcIikgIT0gLTEgJiYgdGhpcy51YS5pbmRleE9mKFwicGhvbmVcIikgIT0gLTEpXG4gICAgICB8fCB0aGlzLnVhLmluZGV4T2YoXCJpcGhvbmVcIikgIT0gLTFcbiAgICAgIHx8IHRoaXMudWEuaW5kZXhPZihcImlwb2RcIikgIT0gLTFcbiAgICAgIHx8ICh0aGlzLnVhLmluZGV4T2YoXCJhbmRyb2lkXCIpICE9IC0xICYmIHRoaXMudWEuaW5kZXhPZihcIm1vYmlsZVwiKSAhPSAtMSlcbiAgICAgIHx8ICh0aGlzLnVhLmluZGV4T2YoXCJmaXJlZm94XCIpICE9IC0xICYmIHRoaXMudWEuaW5kZXhPZihcIm1vYmlsZVwiKSAhPSAtMSlcbiAgICAgIHx8IHRoaXMudWEuaW5kZXhPZihcImJsYWNrYmVycnlcIikgIT0gLTE7XG4gICAgaWYgKGIpICQoJ2JvZHknKS5hZGRDbGFzcygnaXNEZXZpY2VNQicpO1xuXG4gICAgdGhpcy5pc01CID0gYjtcblxuICB9XG5cbiAgaXNEZXZpY2VQQygpe1xuXG4gICAgaWYgKCEodGhpcy5pc1NQIHx8IHRoaXMuaXNUQUIgfHwgdGhpcy5pc01CKSkge1xuICAgICAgXG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2lzRGV2aWNlUEMnKTtcbiAgICAgIHRoaXMuaXNQQyA9IHRydWU7XG4gICAgICByZXR1cm47XG5cbiAgICB9XG5cbiAgICB0aGlzLmlzUEMgPSBmYWxzZTtcblxuICB9XG5cbiAgLy8g44K544Oe44OV44Kp5Yik5a6aXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNTbXQoKSB7XG5cbiAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdpUGFkJykgPiAwIHx8IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignaVBob25lJykgPiAwIHx8IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignaVBvZCcpID4gMCB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0FuZHJvaWQnKSA+IDA7XG5cbiAgfVxuXG4gIC8vIOOCv+ODluODrOODg+ODiOerr+acq+OBi+OBqeOBhuOBi1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzVGFibGV0KCkge1xuXG4gICAgcmV0dXJuIHRoaXMuaXNJcGFkKCkgfHwgKHRoaXMuaXNBbmRyb2lkKCkgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdNb2JpbGUnKSA9PT0gLTEpO1xuXG4gIH1cblxuICAvLyBpUGFk5Yik5a6aXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNJcGFkKCkge1xuXG4gICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignaVBhZCcpID4gMDtcblxuICB9XG5cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIE9TXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIEFuZHJvaWTliKTlrppcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc0FuZHJvaWQoKSB7XG5cbiAgICB2YXIgdTtcbiAgICB1ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgICByZXR1cm4gdS5pbmRleE9mKCdCbGFja0JlcnJ5JykgPiAwIHx8IHUuaW5kZXhPZignQW5kcm9pZCcpID4gMCB8fCB1LmluZGV4T2YoJ1dpbmRvd3MgUGhvbmUnKSA+IDA7XG5cbiAgfVxuXG4gIGlzaVBob25lKCl7XG4gICAgdmFyIHBhdHRlcm4gPSBuZXcgUmVnRXhwKFwiaXBob25lXCIsXCJpXCIpO1xuICAgIHJldHVybiBwYXR0ZXJuLnRlc3QodGhpcy51YSk7XG4gIH1cblxuICAvLyBpT1PliKTlrppcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc0lvcygpIHtcblxuICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ2lQYWQnKSA+IDAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdpUGhvbmUnKSA+IDAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdpUG9kJykgPiAwO1xuXG4gIH1cblxuICAvLyBQUzPliKTlrppcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc1BzMygpIHtcblxuICAgIHZhciB1O1xuICAgIHUgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICAgIHJldHVybiB1LmluZGV4T2YoJ1BMQVlTVEFUSU9OIDMnKSA+IDA7XG5cbiAgfVxuICAgIFxuICAvLyBWSVRB5Yik5a6aXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNWaXRhKCkge1xuXG4gICAgdmFyIHU7XG4gICAgdSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gICAgcmV0dXJuIHUuaW5kZXhPZignUGxheVN0YXRpb24gVml0YScpID4gMDtcblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBicm93c2VyXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBJReOBi+OBqeOBhuOBi1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzSWUoKSB7XG5cbiAgICB2YXIgdWE7XG4gICAgdWEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xuICAgIHJldHVybiB1YS5pbmRleE9mKCdtc2llJykgIT09IC0xIHx8IHVhLmluZGV4T2YoJ3RyaWRlbnQvNycpICE9PSAtMTtcblxuICB9XG5cbiAgLy8gV0lO44GL44Gp44GG44GLXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNXaW4oKSB7XG5cbiAgICByZXR1cm4gbmF2aWdhdG9yLnBsYXRmb3JtLmluZGV4T2YoXCJXaW5cIikgIT09IC0xO1xuXG4gIH1cblxuICAvLyBnb29nbGVDaHJvbWXjgYvjganjgYbjgYtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc0Nocm9tZSgpIHtcblxuICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0Nocm9tZScpID4gMDtcblxuICB9ICAgIFxuICBcbiAgLy8gRmlyZUZveOOBi+OBqeOBhuOBi1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzRkYoKSB7XG5cbiAgICByZXR1cm4gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdmaXJlZm94JykgIT09IC0xO1xuXG4gIH1cblxuICBpc1NhZmFyaSgpe1xuXG4gICAgaWYodGhpcy51YS5pbmRleE9mKFwiY2hyb21lXCIpICE9IC0xKSByZXR1cm4gZmFsc2U7XG4gICAgaWYodGhpcy51YS5pbmRleE9mKFwibHVuYXNjYXBlXCIpICE9IC0xKSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIHBhdHRlcm4gPSBuZXcgUmVnRXhwKFwic2FmYXJpXCIsXCJpXCIpO1xuICAgIHJldHVybiBwYXR0ZXJuLnRlc3QodGhpcy51YSk7XG5cbiAgfVxuXG4gIGlzT3BlcmEoKXtcblxuICAgICAgdmFyIHBhdHRlcm4gPSBuZXcgUmVnRXhwKFwib3BlcmFcIixcImlcIik7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KHRoaXMudWEpO1xuXG4gIH1cblxuICAvLyBpT1Pjga5zYWZhcmnku6XlpJbjgYvjganjgYbjgYtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc0lPU1VpVmlldygpIHtcblxuICAgIHZhciBhO1xuICAgIGEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xuICAgIHJldHVybiAodGhpcy5pc0lvcygpICYmIGEuaW5kZXhPZignc2FmYXJpJykgPT09IC0xKSB8fCAodGhpcy5pc0lvcygpICYmIGEuaW5kZXhPZignY3Jpb3MnKSA+IDApIHx8ICh0aGlzLmlzSW9zKCkgJiYgYS5pbmRleE9mKCdnc2EnKSA+IDApO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIHZlcnNpb25cbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIElFOOS7peS4i+OBi+OBqeOBhuOBi1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzSWU4VW5kZXIoKSB7XG5cbiAgICB2YXIgbXNpZTtcbiAgICBtc2llID0gbmF2aWdhdG9yLmFwcFZlcnNpb24udG9Mb3dlckNhc2UoKTtcbiAgICBtc2llID0gbXNpZS5pbmRleE9mKCdtc2llJykgPiAtMSA/IHBhcnNlSW50KG1zaWUucmVwbGFjZSgvLiptc2llWyBdLywgJycpLm1hdGNoKC9eWzAtOV0rLykpIDogMDtcbiAgICByZXR1cm4gbXNpZSA8PSA4ICYmIG1zaWUgIT09IDA7XG5cbiAgfVxuICAgIFxuICAvLyBJRTnku6XkuIvjgYvjganjgYbjgYtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc0llOVVuZGVyKCkge1xuXG4gICAgdmFyIG1zaWU7XG4gICAgbXNpZSA9IG5hdmlnYXRvci5hcHBWZXJzaW9uLnRvTG93ZXJDYXNlKCk7XG4gICAgbXNpZSA9IG1zaWUuaW5kZXhPZignbXNpZScpID4gLTEgPyBwYXJzZUludChtc2llLnJlcGxhY2UoLy4qbXNpZVsgXS8sICcnKS5tYXRjaCgvXlswLTldKy8pKSA6IDA7XG4gICAgcmV0dXJuIG1zaWUgPD0gOSAmJiBtc2llICE9PSAwO1xuXG4gIH1cblxuICAvLyBJRTEw5Lul5LiL44GL44Gp44GG44GLXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNJZTEwVW5kZXIoKSB7XG5cbiAgICB2YXIgbXNpZTtcbiAgICBtc2llID0gbmF2aWdhdG9yLmFwcFZlcnNpb24udG9Mb3dlckNhc2UoKTtcbiAgICBtc2llID0gbXNpZS5pbmRleE9mKCdtc2llJykgPiAtMSA/IHBhcnNlSW50KG1zaWUucmVwbGFjZSgvLiptc2llWyBdLywgJycpLm1hdGNoKC9eWzAtOV0rLykpIDogMDtcbiAgICByZXR1cm4gbXNpZSA8PSAxMCAmJiBtc2llICE9PSAwO1xuXG4gIH1cblxuICAvLyBJRTEx5Lul5LiL44GL44Gp44GG44GLXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNJZTExVW5kZXIoKSB7XG5cbiAgICB2YXIgYiA9IHRoaXMuaXNJZTEwVW5kZXIoKSB8fCAodGhpcy51YS5pbmRleE9mKFwidHJpZGVudFwiKSAhPSAtMSk7XG4gICAgcmV0dXJuIGI7XG4gICAgLy8gcmV0dXJuIHRydWU7XG5cbiAgfVxuXG4gIC8vIGVkZ2XjgYvjganjgYbjgYtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc0VkZ2UoKSB7XG5cbiAgICBsb2codGhpcy51YS5pbmRleE9mKFwiQXBwbGVXZWJraXRcIiksdGhpcy51YS5pbmRleE9mKFwiRWRnZVwiKSx0aGlzLnVhLHRoaXMuYXBwVik7XG4gICAgdmFyIGIgPSAodGhpcy51YS5pbmRleE9mKFwiYXBwbGV3ZWJraXRcIikgPj0gMCAmJiB0aGlzLnVhLmluZGV4T2YoXCJlZGdlXCIpICE9IC0xKTtcbiAgICByZXR1cm4gYjtcbiAgICAvLyByZXR1cm4gdHJ1ZTtcblxuICB9XG5cbiAgaXNJRVZlcnNpb24oKXtcblxuICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaWUnKTtcbiAgICB0aGlzLmlzSUUgPSB0cnVlO1xuICAgICAgXG4gICAgaWYgKHRoaXMuYXBwVi5pbmRleE9mKFwibXNpZSAxMC5cIikgIT0gLTEpIHtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaWUxMCcpO1xuICAgICAgcmV0dXJuICdpZTEwJztcbiAgICB9IGVsc2UgaWYgKHRoaXMuYXBwVi5pbmRleE9mKFwibXNpZSA5LlwiKSAhPSAtMSkge1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdpZTknKTtcbiAgICAgIHJldHVybiAnaWU5JztcbiAgICB9IGVsc2UgaWYgKHRoaXMuYXBwVi5pbmRleE9mKFwibXNpZSA4LlwiKSAhPSAtMSkge1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdpZTgnKTsgIFxuICAgICAgcmV0dXJuICdpZTgnO1xuICAgIH0gZWxzZSBpZiAodGhpcy5hcHBWLmluZGV4T2YoXCJtc2llIDcuXCIpICE9IC0xKSB7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2llNycpO1xuICAgICAgcmV0dXJuICdpZTcnO1xuICAgIH0gZWxzZSBpZiAodGhpcy5hcHBWLmluZGV4T2YoXCJtc2llIDYuXCIpICE9IC0xKSB7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2llNicpO1xuICAgICAgcmV0dXJuICdpZTYnO1xuICAgIH0gZWxzZSBpZiAodGhpcy5hcHBWLmluZGV4T2YoXCJ0cmlkZW50XCIpICE9IC0xKSB7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2llMTEnKTtcbiAgICAgIHRoaXMuaXNJRTExID0gdHJ1ZTtcbiAgICAgIHJldHVybiAnaWUxMSc7XG4gICAgfSBlbHNlIGlmICh0aGlzLnVhLmluZGV4T2YoXCJhcHBsZXdlYmtpdFwiKSA+PSAwICYmIHRoaXMudWEuaW5kZXhPZihcImVkZ2VcIikgIT0gLTEpIHtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaXNFZGdlJyk7XG4gICAgICByZXR1cm4gJ2VkZ2UnO1xuICAgIH1cblxuXG4gICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdpZScpO1xuICAgIHRoaXMuaXNJRSA9IGZhbHNlO1xuXG4gIH1cblxuICBpc0FuZHJvaWRWZXJzaW9uKCkge1xuXG4gICAgaWYoIHRoaXMudWEuaW5kZXhPZihcImFuZHJvaWRcIikgPiAwICkge1xuXG4gICAgICAgIHZhciB2ZXJzaW9uID0gcGFyc2VGbG9hdCh0aGlzLnVhLnNsaWNlKHRoaXMudWEuaW5kZXhPZihcImFuZHJvaWRcIikrOCkpO1xuICAgICAgICByZXR1cm4gdmVyc2lvbjtcbiAgICAgICAgXG4gICAgfVxuXG4gIH1cblxuICBpc2lwaG9uZVZlcnNpb24oKSB7XG5cbiAgICBpZiggdGhpcy51YS5pbmRleE9mKFwiaVBob25lIE9TXCIpID4gMCApIHtcblxuICAgICAgICB2YXIgdmVyc2lvbiA9IHBhcnNlRmxvYXQodGhpcy51YS5zbGljZSh0aGlzLnVhLmluZGV4T2YoXCJpUGhvbmUgT1NcIikrMTApKTtcbiAgICAgICAgcmV0dXJuIHZlcnNpb247XG5cbiAgICB9XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgcG9ydHJhaXQgLyBsYW5kc2NhcGVcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzRGlyZWN0aW9uICgpIHtcblxuICAgIHZhciBXID0gd2luZG93LmlubmVyV2lkdGgsXG4gICAgICAgIEggPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICBpZiAoSCA+IFcpIHtcbiAgICAgICQoXCJib2R5XCIpLmFkZENsYXNzKFwicG9ydHJhaXRcIik7XG4gICAgICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcImxhbmRzY2FwZVwiKTtcbiAgICB9ZWxzZXtcbiAgICAgICQoXCJib2R5XCIpLmFkZENsYXNzKFwibGFuZHNjYXBlXCIpO1xuICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJwb3J0cmFpdFwiKTtcbiAgICB9XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgcmVzcG9uc2l2ZSDmqKrluYXjgpLopovjgotcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzUmVzcG9uc2l2ZSAoYnApIHtcblxuICAgIGlmIChicD09dW5kZWZpbmVkKSBicD0zNzU7XG5cbiAgICB2YXIgVyA9IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICBIID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgaWYgKFcgPiBicCkge1xuICAgICAgdGhpcy5pc1Jlc1NQID0gZmFsc2U7XG4gICAgICB0aGlzLmlzUmVzUEMgPSB0cnVlO1xuICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdpc1Jlc3BvbnNpdmVTUCcpO1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdpc1Jlc3BvbnNpdmVQQycpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzUmVzU1AgPSB0cnVlO1xuICAgICAgdGhpcy5pc1Jlc1BDID0gZmFsc2U7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2lzUmVzcG9uc2l2ZVNQJyk7XG4gICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2lzUmVzcG9uc2l2ZVBDJyk7XG4gICAgfVxuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFVSTFxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyDjgq/jgqjjg6rmipzjgY3lh7rjgZdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQGtleSA6IOaKnOOBjeWHuuOBmeODkeODqeODoeODvOOCv+WQjShTdHJpbmcpXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIGdldFF1ZXJ5KGtleSkge1xuXG4gIC8vICAgdmFyIHFzLCByZWdleDtcbiAgLy8gICBrZXkgPSBrZXkucmVwbGFjZSgvW+KCrFtdLywgXCLigqzigqzigqxbXCIpLnJlcGxhY2UoL1vigqxdXS8sIFwi4oKs4oKs4oKsXVwiKTtcbiAgLy8gICByZWdleCA9IG5ldyBSZWdFeHAoXCJb4oKs4oKsPyZdXCIgKyBrZXkgKyBcIj0oW14mI10qKVwiKTtcbiAgLy8gICBxcyA9IHJlZ2V4LmV4ZWMod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAvLyAgIGlmIChxcyA9PT0gbnVsbCkge1xuICAvLyAgICAgcmV0dXJuIFwiXCI7XG4gIC8vICAgfSBlbHNlIHtcbiAgLy8gICAgIHJldHVybiBxc1sxXTtcbiAgLy8gICB9XG5cbiAgLy8gfVxuXG4gIGdldFBhcmFtKCkge1xuXG4gICAgdmFyIHVybCA9IGxvY2F0aW9uLmhyZWY7XG4gICAgdmFyIHBhcmFtID0gdXJsLnNwbGl0KCc/JylbMV07XG4gICAgaWYgKHBhcmFtPT11bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgdmFyIHBhcmFtSXRlbXMgPSBwYXJhbS5zcGxpdCgnJicpO1xuICAgIHZhciBsaXN0ID0ge307XG4gIFxuICAgIGZvciggdmFyIGkgPSAwOyBpPHBhcmFtSXRlbXMubGVuZ3RoOyBpKysgKXtcblxuICAgICAgICBwYXJhbUl0ZW0gPSBwYXJhbUl0ZW1zW2ldLnNwbGl0KCc9Jyk7XG4gICAgICAgIGxpc3RbcGFyYW1JdGVtWzBdXSA9IHBhcmFtSXRlbVsxXTtcblxuICAgIH1cblxuICAgIHJldHVybiBsaXN0O1xuXG4gIH1cbiAgXG4gIC8vIOODj+ODg+OCt+ODpeWPluW+l1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiBsb2NhdGlvbi5oYXNo44GuI+OCkuWJiumZpOOBl+OBn+OChOOBpFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBoYXNoKCkge1xuXG4gICAgcmV0dXJuIGxvY2F0aW9uLmhhc2gucmVwbGFjZShcIiNcIiwgXCJcIik7XG5cbiAgfVxuXG4gIC8vIGNvb2tpZeWPluW+l1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAa2V5IDog44OR44Op44Oh44O844K/5ZCNXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGdldENvb2tpZShrZXkpIHtcblxuICAgIHZhciBhLCBhcnIsIGksIGwsIGxlbjEsIHZhbDtcbiAgICBpZiAoZG9jdW1lbnQuY29va2llID09PSB2b2lkIDAgfHwgZG9jdW1lbnQuY29va2llID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgYXJyID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiOyBcIik7XG4gICAgZm9yIChpID0gbCA9IDAsIGxlbjEgPSBhcnIubGVuZ3RoOyBsIDwgbGVuMTsgaSA9ICsrbCkge1xuICAgICAgdmFsID0gYXJyW2ldO1xuICAgICAgYSA9IHZhbC5zcGxpdChcIj1cIik7XG4gICAgICBpZiAoYVswXSA9PT0ga2V5KSB7XG4gICAgICAgIHJldHVybiBhWzFdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcblxuICB9ICAgICAgXG5cbiAgLy8gY29va2ll6Kit5a6aXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEBrZXkgOiDjg5Hjg6njg6Hjg7zjgr/lkI1cbiAgLy8gQHZhbCA6IOWApFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzZXRDb29raWUoa2V5LCB2YWwpIHtcblxuICAgIHJldHVybiBkb2N1bWVudC5jb29raWUgPSBrZXkgKyBcIj1cIiArIHZhbDtcblxuICB9XG4gIFxuICBpc1BDU1AoKSB7XG5cbiAgICB2YXIgdXJsID0gbG9jYXRpb24uaHJlZjtcblxuICAgIGlmICghdGhpcy5pc1BDICYmICF0aGlzLmlzVEFCICYmICh1cmwuaW5kZXhPZigncGMnKSAhPSAtMSkpIHtcblxuICAgICAgbG9jYXRpb24uaHJlZiA9ICcvb3BfZ29sZGVuJztcbiAgICBcbiAgICB9IFxuXG4gICAgaWYgKHRoaXMuaXNQQyAmJiB1cmwuaW5kZXhPZigncGMnKSA9PSAtMSkge1xuXG4gICAgICBsb2NhdGlvbi5ocmVmID0gJy9vcF9nb2xkZW4vcGMvJztcbiAgICBcbiAgICB9IFxuXG4gICAgaWYgKHRoaXMuaXNUQUIgJiYgdXJsLmluZGV4T2YoJ3BjJykgPT0gLTEpIHtcblxuICAgICAgbG9jYXRpb24uaHJlZiA9ICcvb3BfZ29sZGVuL3BjLyc7XG4gICAgXG4gICAgfSBcblxuICAgIGlmICh0aGlzLmlzQ29udGFpbih1cmwsJ3JvdWxldHRlJykpIGxvY2F0aW9uLmhyZWYgPSAnL29wX2dvbGRlbic7XG4gICAgaWYgKHRoaXMuaXNDb250YWluKHVybCwndG9waWNzJykpIGxvY2F0aW9uLmhyZWYgPSAnL29wX2dvbGRlbic7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgQ29sb3JcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gcmdi44GL44KJSEVY44Kr44Op44O85Y+W5b6XXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEByIDogMH4yNTVcbiAgLy8gQGcgOiAwfjI1NVxuICAvLyBAYiA6IDB+MjU1XG4gIC8vIHJldHVybiA6IGV4IFwiI0ZGRkZGRlwiXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGdldEhleENvbG9yKHIsZyxiKSB7XG4gICAgICB2YXIgc3RyO1xuICAgICAgc3RyID0gKHIgPDwgMTYgfCBnIDw8IDggfCBiKS50b1N0cmluZygxNik7XG4gICAgICByZXR1cm4gXCIjXCIgKyBuZXcgQXJyYXkoNyAtIHN0ci5sZW5ndGgpLmpvaW4oXCIwXCIpICsgc3RyO1xuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBTdHJpbmdcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgaXNDb250YWluKHN0cixjb250YWluKSB7XG5cbiAgICAvLyBzdHLjga7kuK3jgassY29udGFpbuOBjOWtmOWcqOOBl+OBn+OCiVxuICAgIGlmICggc3RyLmluZGV4T2YoY29udGFpbikgIT0gLTEgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgfVxuXG4gIC8vIDDln4vjgoHjgacy5qGB44Gr44GZ44KL6Zai5pWwXG4gIGFkZDAoc3RyLG51bT0tMil7XG4gICAgXG4gICAgcmV0dXJuICggXCIwMDAwMDAwMDAwMDBcIiArIHN0ciApLnN1YnN0ciggbnVtICk7XG5cbiAgfVxuXG4gIGZsb2F0Rm9ybWF0KCBudW1iZXIsIG4gKSB7XG5cbiAgICB2YXIgX3BvdyA9IE1hdGgucG93KCAxMCAsIG4gKSA7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoIG51bWJlciAqIF9wb3cgKSAvIF9wb3cgO1xuXG4gIH1cbiAgICBcbiAgLy8g5YCk5q616KGo6KiYXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHByaWNlKG51bSkge1xuXG4gICAgcmV0dXJuIFN0cmluZyhudW0pLnJlcGxhY2UoLyhcXGQpKD89KFxcZFxcZFxcZCkrKD8hXFxkKSkvZywgJyQxLCcpO1xuXG4gIH1cblxuICAvLyDmloflrZfliJfjgpLlj43ou6JcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQHN0ciA6IOaWh+Wtl+WIlyhTdHJpbmcpXG4gIC8vIHJldHVybiA6IOaWh+Wtl+WIlyhTdHJpbmcpXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHN0clJldmVyc2Uoc3RyKSB7XG5cbiAgICB2YXIgaSwgbGVuLCByZXM7XG4gICAgcmVzID0gXCJcIjtcbiAgICBsZW4gPSBzdHIubGVuZ3RoO1xuICAgIGkgPSAxO1xuICAgIHdoaWxlIChpIDw9IGxlbikge1xuICAgICAgcmVzICs9IHN0ci5zdWJzdHIoLWksIDEpO1xuICAgICAgaSsrO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuXG4gIH1cbiAgXG4gIC8vIOaWh+Wtl+WIl+OBruWFqOe9ruaPm1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAdmFsICA6IOaWh+Wtl+WIl1xuICAvLyBAb2VnICA6IOe9ruaPm+WJjeOBruaWh+Wtl+WIl1xuICAvLyBAZGVzdCA6IOe9ruaPm+W+jOOBruaWh+Wtl+WIl1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZXBsYWNlQWxsKHZhbCwgb3JnLCBkZXN0KSB7XG5cbiAgICByZXR1cm4gdmFsLnNwbGl0KG9yZykuam9pbihkZXN0KTtcblxuICB9ICAgIFxuICBcbiAgc3RyUmVwbGFjZShzdHIsIGJlZm9yZSwgYWZ0ZXIpIHtcblxuICAgIHZhciByID0gbmV3IFJlZ0V4cCggYmVmb3JlLCAnZycpO1xuXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKCByICwgYWZ0ZXIgKTtcblxuICB9ICAgIFxuICBcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBEYXRlXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIGdldE5vdygpIHtcblxuICAgIHRoaXMubm93ID0gbmV3IERhdGUoKTtcblxuICB9XG5cbiAgc3RhcnQoKSB7XG5cbiAgICB0aGlzLnN0YXJ0VGltZSA9IHRoaXMubm93LmdldFRpbWUoKTtcblxuICB9XG5cbiAgZWxhcHNlZCgpIHtcblxuICAgIHRoaXMuZWxhcHNlZFRpbWUgPSB0aGlzLm5vdy5nZXRUaW1lKCkgLSB0aGlzLnN0YXJ0VGltZTtcblxuICB9XG5cbiAgbSgpIHtcblxuICAgIHJldHVybiBNYXRoLmZsb29yKCB0aGlzLmVsYXBzZWRUaW1lICsgMTAwIC8gNjAgKTtcblxuICB9XG5cbiAgcygpIHtcblxuICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMuZWxhcHNlZFRpbWUgLyAxMDAwKTtcblxuICB9XG5cbiAgbXMoKSB7XG5cbiAgICByZXR1cm4gdGhpcy5lbGFwc2VkVGltZTtcbiAgICBcbiAgfVxuXG4gIHRpbWUoKSB7XG5cbiAgICB0aGlzLmdldE5vdygpO1xuXG4gICAgdGhpcy5ob3VyID0gdGhpcy5ub3cuZ2V0SG91cnMoKTsgICAgICAgICAgLy8g5pmCXG4gICAgdGhpcy5taW51dGUgPSB0aGlzLm5vdy5nZXRNaW51dGVzKCk7ICAgICAgLy8g5YiGXG4gICAgdGhpcy5zZWNvbmQgPSB0aGlzLm5vdy5nZXRTZWNvbmRzKCk7XG4gICAgdGhpcy5taWxsU2Vjb25kID0gdGhpcy5ub3cuZ2V0TWlsbGlzZWNvbmRzKCk7XG5cbiAgfVxuXG4gIGRhdGUoKSB7XG5cbiAgICByZXR1cm4gdGhpcy5ub3cuZ2V0RGF0ZSgpO1xuXG4gIH1cblxuICBtb250aHMoKSB7XG5cbiAgICB2YXIgbW9udGhkYXlzID0gbmV3IEFycmF5KDMxLCAyOCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzEpO1xuXG4gICAgcmV0dXJuIHRoaXMubm93LmdldE1vbnRoKCkgKyAxO1xuXG4gIH1cblxuICB5ZWFyKCkge1xuXG4gICAgcmV0dXJuIHRoaXMubm93LmdldEZ1bGxZZWFyKCk7XG5cbiAgfVxuXG4gIGRheSgpIHtcblxuICAgIC8vIOabnOaXpSAo5pel5pys6KqeKVxuICAgIHZhciB3ZWVrRGF5SlAgPSBbXCLml6VcIixcIuaciFwiLFwi54GrXCIsXCLmsLRcIixcIuacqFwiLFwi6YeRXCIsXCLlnJ9cIl0gO1xuICAgIHZhciB3REogPSB3ZWVrRGF5SlBbdGhpcy5ub3cuZ2V0RGF5KCldIDtcblxuICAgIC8vIOabnOaXpSAo6Iux6KqeKVxuICAgIHZhciB3ZWVrRGF5RU4gPSBbXCJTdW5cIixcIk1vblwiLFwiVHVlXCIsXCJXZWRcIixcIlRodVwiLFwiRnJpXCIsXCJTYXRcIl0gO1xuICAgIHZhciB3REUgPSB3ZWVrRGF5RU5bdGhpcy5ub3cuZ2V0RGF5KCldIDtcblxuICB9XG4gIFxuICAvLyDmlbDml6Xlvozjga5EYXRl44Kq44OW44K444Kn44Kv44OI5Y+W5b6XXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGFmdGVyRGF5KGRhdGUsIG51bSkge1xuXG4gICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpICsgTnVtYmVyKG51bSkgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBEYXRhIHR5cGUgY2hlY2tcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgaXNPYmplY3QodmFsdWUsIGlnbm9yZUFycmF5KSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAhPT0gbnVsbDtcbiAgfVxuXG4gIGlzTnVtYmVyKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJztcbiAgfVxuXG4gIGlzU3RyaW5nKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcbiAgfVxuXG4gIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG4gIH1cblxuICBpc0FycmF5KHZhbHVlKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgfVxuXG4gIGlzTnVsbCh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsO1xuICB9XG5cbiAgaXNVbmRlZmluZWQodmFsdWUpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnO1xuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBvdGhlclxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc2V0SW1nU1BTaXplICgkdGFyZ2V0KXtcblxuICAgIC8vIHJlc3BvbnNpdmUgc3Djga7jgajjgY3lh6bnkIZcbiAgICBpZiAoIXRoaXMuaXNSZXNTUCkgcmV0dXJuO1xuICAgIC8vIOS4gOW6puOBoOOBkeWHpueQhlxuICAgIC8vIGlmICh0aGlzLmlzU2V0U1BTaXplKSByZXR1cm47XG4gICAgLy8gdGhpcy5pc1NldFNQU2l6ZSA9IHRydWU7XG5cbiAgICB2YXIgJGltZyA9ICR0YXJnZXQsXG4gICAgICAgIGxlbiA9ICRpbWcubGVuZ3RoO1xuXG4gICAgJGltZy5lYWNoKGZ1bmN0aW9uKGkpIHtcblxuICAgICAgICB2YXIgdyA9IE1hdGguZmxvb3IoJCh0aGlzKS53aWR0aCgpIC8gMiksXG4gICAgICAgICAgICBoID0gTWF0aC5mbG9vcigkKHRoaXMpLmhlaWdodCgpIC8gMik7XG5cbiAgICAgICAgJCh0aGlzKS5hdHRyKHtcbiAgICAgICAgICAgICd3aWR0aCc6IHcsXG4gICAgICAgICAgICAnaGVpZ2h0JzogaCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGxlbiA9PSBpICsgMSkgJCh3aW5kb3cpLnRyaWdnZXIoJ3NldFNwWmllRW5kJyk7XG5cbiAgICB9KTtcblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vICDjgrnjg57jg5vmk43kvZznhKHlirlcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHNldFByZXZlbnQoKSB7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAkKHdpbmRvdykub24oJ3RvdWNobW92ZS5ub0NvbnRyb2wnLCBmdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0KCk7fSk7XG5cbiAgfVxuXG4gIHJlbW92ZVByZXZlbnQoKSB7XG5cbiAgICAkKHdpbmRvdykub2ZmKCd0b3VjaG1vdmUubm9Db250cm9sJyk7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyAgaG9zdCxwcm90Y29sXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBwcm90b2NvbCgpIHtcblxuICAgIHJldHVybiBsb2NhdGlvbi5wcm90b2NvbDtcblxuICB9XG4gICAgXG4gIGhvc3QoKSB7XG5cbiAgICByZXR1cm4gbG9jYXRpb24uaG9zdG5hbWU7XG4gICAgLy8gcmV0dXJuIGxvY2F0aW9uLmhvc3RcblxuICB9XG5cbiAgcG9ydCgpIHtcblxuICAgIHJldHVybiBsb2NhdGlvbi5wb3J0O1xuXG4gIH1cbiAgICAgICAgXG4gIHBhdGgoKSB7XG5cbiAgICByZXR1cm4gbG9jYXRpb24ucGF0aG5hbWU7XG5cbiAgfVxuXG4gIHByZXZlbnREZWZhdWx0KGUpIHtcblxuICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcbiAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdClcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUucmV0dXJuVmFsdWUgPSBmYWxzZTtcblxuICB9XG5cbiAgcHJldmVudERlZmF1bHRGb3JTY3JvbGxLZXlzKGUpIHtcblxuICAgIGlmIChrZXlzW2Uua2V5Q29kZV0pIHtcbiAgICAgICAgcHJldmVudERlZmF1bHQoZSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgfVxuXG4gIGRpc2FibGVTY3JvbGwoKSB7XG5cbiAgICBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIC8vIG9sZGVyIEZGXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Nb3VzZVNjcm9sbCcsIHRoaXMucHJldmVudERlZmF1bHQsIGZhbHNlKTtcbiAgICB3aW5kb3cub253aGVlbCA9IHRoaXMucHJldmVudERlZmF1bHQ7IC8vIG1vZGVybiBzdGFuZGFyZFxuICAgIHdpbmRvdy5vbm1vdXNld2hlZWwgPSBkb2N1bWVudC5vbm1vdXNld2hlZWwgPSB0aGlzLnByZXZlbnREZWZhdWx0OyAvLyBvbGRlciBicm93c2VycywgSUVcbiAgICB3aW5kb3cub250b3VjaG1vdmUgID0gdGhpcy5wcmV2ZW50RGVmYXVsdDsgLy8gbW9iaWxlXG4gICAgZG9jdW1lbnQub25rZXlkb3duICA9IHRoaXMucHJldmVudERlZmF1bHRGb3JTY3JvbGxLZXlzO1xuXG4gIH1cblxuICBlbmFibGVTY3JvbGwoKSB7XG5cbiAgICBpZiAod2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIpXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdET01Nb3VzZVNjcm9sbCcsIHRoaXMucHJldmVudERlZmF1bHQsIGZhbHNlKTtcbiAgICB3aW5kb3cub25tb3VzZXdoZWVsID0gZG9jdW1lbnQub25tb3VzZXdoZWVsID0gbnVsbDsgXG4gICAgd2luZG93Lm9ud2hlZWwgPSBudWxsOyBcbiAgICB3aW5kb3cub250b3VjaG1vdmUgPSBudWxsO1xuICAgIGRvY3VtZW50Lm9ua2V5ZG93biA9IG51bGw7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9teWxpYnMvVXRpbC5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IEZ1bmNcbiAqIERhdGU6XG4gKiBBdXRob3I6XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVuYyB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLmJsYW5rKCk7XG4gICAgdGhpcy5kZWJ1Z2dlcigpO1xuICAgIHRoaXMucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCk7XG4gICAgdGhpcy5leHBhbmRqUXVlcnkoKTtcblxuICB9XG5cbiAgYmxhbmsoKSB7XG5cbiAgICAkKCgpPT57JCgnLmJsYW5rJykuYXR0cigndGFyZ2V0JywgJ19ibGFuaycpO30pO1xuXG4gIH1cblxuICBkZWJ1Z2dlcigpIHtcblxuICAgIC8vIOODh+ODkOODg+OCsOODouODvOODieWIh+abv1xuICAgIHZhciBSRUxFQVNFID0gZ2IuaW4uY29uZi5SRUxFQVNFO1xuXG4gICAgLy8g572u5o+b5a++6LGh44Gu44Oh44K944OD44OJ44KS6YWN5YiX44Go44GX44Gm5L+d5oyB44GZ44KLXG4gICAgdmFyIG1ldGhvZHMgPSBbXG4gICAgICAnbG9nJyxcbiAgICAgICdkZWJ1ZycsXG4gICAgICAnaW5mbycsXG4gICAgICAnd2FybicsXG4gICAgICAnZXJyb3InLFxuICAgICAgJ2RpcicsXG4gICAgICAndHJhY2UnLFxuICAgICAgJ2Fzc2VydCcsXG4gICAgICAnZGlyeG1sJyxcbiAgICAgICdncm91cCcsXG4gICAgICAnZ3JvdXBFbmQnLFxuICAgICAgJ3RpbWUnLFxuICAgICAgJ3RpbWVFbmQnLFxuICAgICAgJ2NvdW50JyxcbiAgICAgICdwcm9maWxlJyxcbiAgICAgICdwcm9maWxlRW5kJ1xuICAgIF07XG5cbiAgICAvLyBjb25zb2xl44GM5L2/44GI44Gq44GE5aC05ZCI44Gv56m644Gu44Kq44OW44K444Kn44Kv44OI44KS6Kit5a6a44GX44Gm44GK44GPXG4gICAgaWYoIHR5cGVvZiB3aW5kb3cuY29uc29sZSA9PT0gXCJ1bmRlZmluZWRcIiApe1xuICAgICAgd2luZG93LmNvbnNvbGUgPSB7fTtcbiAgICB9XG5cbiAgICAvLyDlkITjg6Hjgr3jg4Pjg4njgpJ3aW5kb3fjgbjnm7TmjqXov73liqDjgZfjgabooYzjgY9cbiAgICBmb3IoIHZhciBpIGluIG1ldGhvZHMgKXtcbiAgICAgIChmdW5jdGlvbiggbSApe1xuXG4gICAgICAgLy8gY29uc29sZeOBq+OBguOCi++8n+ODh+ODkOODg+OCsOODouODvOODieOBr+acieWKue+8n2NvbnNvbGXjga7jgoLjga7jga/plqLmlbDvvJ9cbiAgICAgICBpZiggY29uc29sZVttXSAmJiAhUkVMRUFTRSAmJiB0eXBlb2YgY29uc29sZVttXSA9PT0gXCJmdW5jdGlvblwiICl7XG4gICAgICAgIHdpbmRvd1ttXSA9IGNvbnNvbGVbbV0uYmluZChjb25zb2xlKTtcbiAgICAgICB9IGVsc2Uge+OAgC8vIGRlYnVnTW9kZeOBjGZhbHNlLOOCguOBl+OBj+OBr+ipsuW9k+ODoeOCveODg+ODieOBjOWtmOWcqOOBl+OBquOBhOWgtOWQiOOBr+OAgeepuuOBruODoeOCveODg+ODieOCkueUqOaEj+OBmeOCi1xuICAgICAgICB3aW5kb3dbbV0gPSBmdW5jdGlvbigpe307XG4gICAgICAgfVxuXG4gICAgICB9KSggbWV0aG9kc1tpXSApO1xuICAgIH1cblxuICB9XG5cbiAgcHJlcGVuZChwYXJhbSkge1xuXG4gICAgJCgnYm9keScpLnByZXBlbmQocGFyYW0pO1xuXG4gIH1cblxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKSB7XG5cbiAgICB2YXIgRlBTID0gMTAwMC82MDtcblxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IC8vIGNocm9tZeOChOacgOaWsOOBrlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IC8vIOWPpOOBhGZpcmVmb3jnlKhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCAgLy8gc2FmYXJpNuS7peWJjeOAgWlPUzYgc2FmYXJp55SoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCBjYWxsYmFjayApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgRlBTKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5tb3pDYW5jZWxBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy53ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCB0aW1lciApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07ICAgICAgXG5cbiAgfVxuXG4gIGV4cGFuZGpRdWVyeSgpIHtcblxuICAgIGpRdWVyeS5mbi5leHRlbmQoe1xuICAgICAgdzowLCBcbiAgICAgIGg6MCwgXG4gICAgICBhZGp1c3Q6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciB3ID0gJCh0aGlzKS5pbm5lcldpZHRoKCk7XG4gICAgICAgICAgdmFyIGggPSAkKHRoaXMpLmlubmVySGVpZ2h0KCk7XG4gICAgICAgICAgJCh0aGlzKS5jc3Moe1xuICAgICAgICAgICAgJ3Bvc2l0aW9uJzonYWJzb2x1dGUnLFxuICAgICAgICAgICAgJ2xlZnQnOic1MCUnLFxuICAgICAgICAgICAgJ3RvcCc6JzUwJScsXG4gICAgICAgICAgICAnbWFyZ2luLWxlZnQnOictJyArICh3IC8gMikgKyAncHgnLFxuICAgICAgICAgICAgJ21hcmdpbi10b3AnOictJyArIChoIC8gMikgKyAncHgnXG4gICAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgYWRqdXN0VzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIHcgPSAkKHRoaXMpLmlubmVyV2lkdGgoKTtcbiAgICAgICAgICB2YXIgaCA9ICQodGhpcykuaW5uZXJIZWlnaHQoKTtcbiAgICAgICAgICAkKHRoaXMpLmNzcyh7XG4gICAgICAgICAgICAncG9zaXRpb24nOidhYnNvbHV0ZScsXG4gICAgICAgICAgICAnbGVmdCc6JzUwJScsXG4gICAgICAgICAgICAnbWFyZ2luLWxlZnQnOictJyArICh3IC8gMikgKyAncHgnXG4gICAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgYWRqdXN0SDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIHcgPSAkKHRoaXMpLmlubmVyV2lkdGgoKTtcbiAgICAgICAgICB2YXIgaCA9ICQodGhpcykuaW5uZXJIZWlnaHQoKTtcbiAgICAgICAgICAkKHRoaXMpLmNzcyh7XG4gICAgICAgICAgICAncG9zaXRpb24nOidhYnNvbHV0ZScsXG4gICAgICAgICAgICAndG9wJzonNTAlJyxcbiAgICAgICAgICAgICdtYXJnaW4tdG9wJzonLScgKyAoaCAvIDIpICsgJ3B4J1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gIH1cblxuICBjaGVja0Nzc0JsZW5kKCkge1xuXG4gICAgaWYgKCdDU1MnIGluIHdpbmRvdyAmJiAnc3VwcG9ydHMnIGluIHdpbmRvdy5DU1MpIHtcbiAgICAgIGlmICghd2luZG93LkNTUy5zdXBwb3J0cygnbWl4LWJsZW5kLW1vZGUnLCAnc29mdC1saWdodCcpKSB7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdub3QtbWl4LWJsZW5kLW1vZGUnKVxuICAgICAgfVxuICAgIH1cblxuICAgIGxvZyhnYi5pbi51LmlzSUUpO1xuXG4gICAgaWYgKGdiLmluLnUuaXNJRSkge1xuICAgICAgXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbm90LW1peC1ibGVuZC1tb2RlJylcbiAgICAgIFxuICAgIH07XG5cbiAgfVxuXG4gIG5vdFNhdmVJbWcoKSB7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBwY1xuICAgIC8vXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBpZiAoZ2IuaW4udS5pc1BDKSB7XG5cbiAgICAgICQoKCk9PntcbiAgICAgICAgJChcImltZ1wiKS5vbihcImNvbnRleHRtZW51XCIsKCk9PntcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pXG4gICAgICB9KVxuXG4gICAgfVxuXG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBzcCBhbmRyb2lkXG4gICAgLy9cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB2YXIgdiA9IGdiLmluLnUuaXNBbmRyb2lkVmVyc2lvbigpO1xuXG4gICAgaWYgKHY9PXVuZGVmaW5lZCkgcmV0dXJuO1xuICAgIGlmICh2PDUpIHtcblxuICAgICAgdmFyIHRpbWVyO1xuICAgICAgJChcImltZ1wiKS5vbihcInRvdWNoc3RhcnRcIiwoKT0+e1xuICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICBhbGVydChcIueUu+WDj+OBr+S/neWtmOOBp+OBjeOBvuOBm+OCk1wiKVxuICAgICAgICB9LDUwMClcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSlcbiAgICAgICQoXCJpbWdcIikub24oXCJ0b3VjaGVuZFwiLCgpPT57XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pICAgICAgXG5cbiAgICB9XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9teWxpYnMvRnVuYy5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IE1haW5cbiAqIERhdGU6XG4gKiBBdXRob3I6XG4gKi9cblxuaW1wb3J0IERpc3BsYXlUb3AgZnJvbSAnLi4vRGlzcGxheS9EaXNwbGF5VG9wJztcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMub25JbW1lZGlhdGUoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBvbkltbWVkaWF0ZSgpIHtcblxuICB9XG5cbiAgb25SZWFkeSgpIHtcblxuICAgIC8vcGFnZeODmuODvOOCuOWIpeOBrklE44KS5Y+W5b6XXG4gICAgdmFyIHBhZ2UgPSAkKCdib2R5JykuZGF0YSgnaWQnKTtcblxuICAgIHdpbmRvdy5jb25zb2xlLmxvZygn54++5Zyo44Gu44Oa44O844K4SUTjga8gJywgcGFnZSk7XG5cblx0XHQvL3BhZ2Xjga5JROOBlOOBqOOBq+eZuueBq+OBmeOCi+OCr+ODqeOCueOBruaMr+OCiuWIhuOBkVxuICAgIHN3aXRjaCAocGFnZSkge1xuXG4gICAgICBjYXNlICd0b3AnOlxuXG4gICAgICAgIG5ldyBEaXNwbGF5VG9wKCk7XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICB9XG5cbiAgfVxuXG4gIG9uTG9hZCgpIHtcblxuICAgIFxuICB9XG5cbiAgb25SZW5kZXIoKSB7XG5cblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgJChkb2N1bWVudCkub24oJ3JlYWR5JywgdGhpcy5vblJlYWR5LmJpbmQodGhpcykpO1xuICAgICQod2luZG93KS5vbignbG9hZCcsIHRoaXMub25Mb2FkLmJpbmQodGhpcykpOyAgICAgICAgXG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9wYWdlL01haW4uanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBEaXNwbGF5XG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbi8vIGltcG9ydCBXZWJHTGluaXQgZnJvbSAnLi9XZWJHTGluaXQuanMnO1xuXG5pbXBvcnQgQ2FudmFzIGZyb20gXCIuLi92aXN1YWwvQ2FudmFzXCI7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzcGxheVRvcCB7XG5cbiAgY29uc3RydWN0b3IoKXtcblxuICAgIHRoaXMub25JbW1lZGlhdGUoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBvbkltbWVkaWF0ZSgpIHtcblxuICAgIC8vIOOCouODi+ODoeODvOOCt+ODp+ODs+ODq+ODvOODl+OCueOCv+ODvOODiFxuICAgIC8vIGdiLmluLnVwLmxvb3AoKTtcbiAgICBcbiAgfVxuXG4gIG9uTG9hZCgpIHtcblxuICAgIGdiLmluLmNhbnZhcyA9IG5ldyBDYW52YXMoe1xuICAgICAgb3V0cHV0OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2ViZ2wtb3V0cHV0JylcbiAgICB9KTtcblxuICAgIC8vIGdiLmluLmNhbnZhcy5pbml0KCk7XG5cblxuICB9XG5cbiAgc3RhdGljIHJ1bigpIHtcblxuXHRcdC8vIHdpbmRvdy5jb25zb2xlLmxvZygnc3RhdGljX1J1bicpO1xuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCB0aGlzLm9uTG9hZC5iaW5kKHRoaXMpKTsgICAgICAgIFxuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9EaXNwbGF5VG9wLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogQ2FudmFzXG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbmltcG9ydCBFbnRyeSBmcm9tICcuLi9Db3JlL0VudHJ5Jztcbi8vIGltcG9ydCBDYW1lcmEgZnJvbSAnLi9VdGlscy9DYW1lcmEuanMnO1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyBleHRlbmRzIEVudHJ5e1xuXG4gIGNvbnN0cnVjdG9yKG9wdHMgPSB7fSkge1xuXG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICB0aGlzLm91dHB1dCA9IG9wdHMub3V0cHV0IHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgdGhpcy5jYW1lcmEgPSBudWxsO1xuICAgIHRoaXMucmVuZGVyZXIgPSBudWxsO1xuICAgIHRoaXMuc2NlbmUgPSBudWxsO1xuXHRcdHRoaXMuY3ViZSA9IG51bGw7XG5cbiAgICB0aGlzLmNyZWF0ZUNhbWVyYSA9IHRoaXMuX2NyZWF0ZUNhbWVyYS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3JlYXRlUmVuZGVyZXIgPSB0aGlzLl9jcmVhdGVSZW5kZXJlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3JlYXRlU2NlbmUgPSB0aGlzLl9jcmVhdGVTY2VuZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3JlYXRlT2JqZWN0ID0gdGhpcy5fY3JlYXRlT2JqZWN0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5vcmJpdENvbnRyb2xzID0gdGhpcy5fb3JiaXRDb250cm9scy5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5vblJlc2l6ZSA9IHRoaXMuX29uUmVzaXplLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLlVwZGF0ZSA9IHRoaXMuX1VwZGF0ZS5iaW5kKHRoaXMpO1xuXG4gIH1cblxuICAvKipcbiAgICog5Yid5pyf5YyWXG4gICAqL1xuICBpbml0KCl7XG5cbiAgICB0aGlzLmNyZWF0ZUNhbWVyYSgpO1xuXHRcdHRoaXMuY3JlYXRlU2NlbmUoKTtcbiAgICB0aGlzLmNyZWF0ZVJlbmRlcmVyKCk7XG5cblx0XHR0aGlzLm9yYml0Q29udHJvbHMoKTtcblxuXHRcdHRoaXMuY3JlYXRlT2JqZWN0KCk7XG5cbiAgICB0aGlzLlVwZGF0ZSgpO1xuXG4gICAgLy/jg6rjgrXjgqTjgrrjgqTjg5njg7Pjg4jnmbrngatcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgdGhpcy5vblJlc2l6ZSgpO1xuICAgIH0sIGZhbHNlKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIOOCq+ODoeODqeS9nOaIkFxuICAgKi9cbiAgX2NyZWF0ZUNhbWVyYSgpe1xuXG4gICAgdGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNDUsIHRoaXMud2lkdGggLyB0aGlzLmhlaWdodCwgMC4xLCAxMDAwKTtcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi54ID0gLTMwO1xuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnkgPSA0MDtcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gMzA7XG5cbiAgICB0aGlzLmNhbWVyYS5sb29rQXQobmV3IFRIUkVFLlZlY3RvcjMoMCwwLDApKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIOODrOODs+ODgOODqeODvOS9nOaIkFxuICAgKi9cbiAgX2NyZWF0ZVJlbmRlcmVyKCl7XG5cblx0XHR0aGlzLnJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe1xuICAgICAgYWxwaGEgICAgICAgICAgICAgIDogZmFsc2UsXG4gICAgICBhbnRpYWxpYXMgICAgICAgICAgOiBmYWxzZSxcbiAgICAgIHN0ZW5jaWwgICAgICAgICAgICA6IGZhbHNlLFxuICAgICAgZGVwdGggICAgICAgICAgICAgIDogdHJ1ZSxcbiAgICAgIHByZW11bHRpcGxpZWRBbHBoYSA6IGZhbHNlXG5cdFx0fSk7XG5cbiAgICB0aGlzLnJlbmRlcmVyLnNldENsZWFyQ29sb3IoMHhmZmZmZmYpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIHRoaXMub3V0cHV0LmFwcGVuZENoaWxkKHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudCk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKuOAgOOCt+ODvOODs+S9nOaIkFxuICAgKi9cbiAgX2NyZWF0ZVNjZW5lKCl7XG5cblx0XHR0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG5cbiAgfVxuXG5cdC8qKlxuXHQgKuOAgE9iamVjdOS9nOaIkFxuXHQgKi9cblx0X2NyZWF0ZU9iamVjdCgpe1xuXG4gICAgdmFyIGN1YmVHZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSg0LCA0LCA0KTtcbiAgICB2YXIgY3ViZU1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHtcbiAgICAgIGNvbG9yOiAweDAwMDAwMCxcbiAgICAgIHdpcmVmcmFtZTogdHJ1ZVxuICAgIH0pO1xuXG4gICAgdGhpcy5jdWJlID0gbmV3IFRIUkVFLk1lc2goY3ViZUdlb21ldHJ5LCBjdWJlTWF0ZXJpYWwpO1xuICAgIHRoaXMuY3ViZS5wb3NpdGlvbi54ID0gMztcbiAgICB0aGlzLmN1YmUucG9zaXRpb24ueSA9IDM7XG4gICAgdGhpcy5jdWJlLnBvc2l0aW9uLnogPSAzO1xuXG4gICAgdGhpcy5zY2VuZS5hZGQodGhpcy5jdWJlKTtcblxuXHR9XG5cbiAgLyoqXG4gICAq44CA5pu05pawXG4gICAqL1xuICBfVXBkYXRlKCkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4ge1xuICAgICAgdGhpcy5VcGRhdGUoKTtcbiAgICB9KTtcbiAgICAvLyB0aGlzLmNvbnRyb2xzLnVwZGF0ZSgpO1xuICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhKTtcbiAgfVxuXG4gIC8qKlxuICAgKuOAgOeUu+mdouODquOCteOCpOOCulxuICAgKi9cbiAgX29uUmVzaXplKCkge1xuICAgIHRoaXMuY2FtZXJhLmFzcGVjdCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIHRoaXMuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gIH1cblxuXHQvKipcbiAgICog44Kr44Oh44Op44Kz44Oz44OI44Ot44O844OrXG5cdCAqL1xuXHRfb3JiaXRDb250cm9scygpe1xuXHRcdHRoaXMuY29udHJvbHMgPSBuZXcgVEhSRUUuT3JiaXRDb250cm9scyh0aGlzLmNhbWVyYSk7XG5cdFx0dGhpcy5jb250cm9scy5hdXRvUm90YXRlID0gdHJ1ZTtcblx0XHR2YXIgY2xvY2sgPSBuZXcgVEhSRUUuQ2xvY2soKTtcblxuXHRcdHZhciBkZWx0YSA9IGNsb2NrLmdldERlbHRhKCk7XG5cdFx0dGhpcy5jb250cm9scy51cGRhdGUoZGVsdGEpO1xuICB9XG5cblx0c2V0RXZlbnRzKCkge1xuXG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgdGhpcy5vbkxvYWQuYmluZCh0aGlzKSk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy92aXN1YWwvQ2FudmFzLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogRW50cnlcbiAqIERhdGU6XG4gKiBBdXRob3I6XG4gKi9cblxucmVxdWlyZSgnLi4vLi4vbGlicy9PcmJpdENvbnRyb2xzLmpzJyk7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW50cnkge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXG5cdH1cblxuXHQvKipcblx0ICog5Yid5pyf5YyWXG5cdCAqL1xuXHRpbml0KCl7XG5cblx0fVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9Db3JlL0VudHJ5LmpzIiwiLyoqXG4gKiBAYXV0aG9yIHFpYW8gLyBodHRwczovL2dpdGh1Yi5jb20vcWlhb1xuICogQGF1dGhvciBtcmRvb2IgLyBodHRwOi8vbXJkb29iLmNvbVxuICogQGF1dGhvciBhbHRlcmVkcSAvIGh0dHA6Ly9hbHRlcmVkcXVhbGlhLmNvbS9cbiAqIEBhdXRob3IgV2VzdExhbmdsZXkgLyBodHRwOi8vZ2l0aHViLmNvbS9XZXN0TGFuZ2xleVxuICogQGF1dGhvciBlcmljaDY2NiAvIGh0dHA6Ly9lcmljaGFpbmVzLmNvbVxuICovXG5cbi8vIFRoaXMgc2V0IG9mIGNvbnRyb2xzIHBlcmZvcm1zIG9yYml0aW5nLCBkb2xseWluZyAoem9vbWluZyksIGFuZCBwYW5uaW5nLlxuLy8gVW5saWtlIFRyYWNrYmFsbENvbnRyb2xzLCBpdCBtYWludGFpbnMgdGhlIFwidXBcIiBkaXJlY3Rpb24gb2JqZWN0LnVwICgrWSBieSBkZWZhdWx0KS5cbi8vXG4vLyAgICBPcmJpdCAtIGxlZnQgbW91c2UgLyB0b3VjaDogb25lIGZpbmdlciBtb3ZlXG4vLyAgICBab29tIC0gbWlkZGxlIG1vdXNlLCBvciBtb3VzZXdoZWVsIC8gdG91Y2g6IHR3byBmaW5nZXIgc3ByZWFkIG9yIHNxdWlzaFxuLy8gICAgUGFuIC0gcmlnaHQgbW91c2UsIG9yIGFycm93IGtleXMgLyB0b3VjaDogdGhyZWUgZmludGVyIHN3aXBlXG5cblRIUkVFLk9yYml0Q29udHJvbHMgPSBmdW5jdGlvbiAoIG9iamVjdCwgZG9tRWxlbWVudCApIHtcblxuXHR0aGlzLm9iamVjdCA9IG9iamVjdDtcblxuXHR0aGlzLmRvbUVsZW1lbnQgPSAoIGRvbUVsZW1lbnQgIT09IHVuZGVmaW5lZCApID8gZG9tRWxlbWVudCA6IGRvY3VtZW50O1xuXG5cdC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHRoaXMgY29udHJvbFxuXHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xuXG5cdC8vIFwidGFyZ2V0XCIgc2V0cyB0aGUgbG9jYXRpb24gb2YgZm9jdXMsIHdoZXJlIHRoZSBvYmplY3Qgb3JiaXRzIGFyb3VuZFxuXHR0aGlzLnRhcmdldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cblx0Ly8gSG93IGZhciB5b3UgY2FuIGRvbGx5IGluIGFuZCBvdXQgKCBQZXJzcGVjdGl2ZUNhbWVyYSBvbmx5IClcblx0dGhpcy5taW5EaXN0YW5jZSA9IDA7XG5cdHRoaXMubWF4RGlzdGFuY2UgPSBJbmZpbml0eTtcblxuXHQvLyBIb3cgZmFyIHlvdSBjYW4gem9vbSBpbiBhbmQgb3V0ICggT3J0aG9ncmFwaGljQ2FtZXJhIG9ubHkgKVxuXHR0aGlzLm1pblpvb20gPSAwO1xuXHR0aGlzLm1heFpvb20gPSBJbmZpbml0eTtcblxuXHQvLyBIb3cgZmFyIHlvdSBjYW4gb3JiaXQgdmVydGljYWxseSwgdXBwZXIgYW5kIGxvd2VyIGxpbWl0cy5cblx0Ly8gUmFuZ2UgaXMgMCB0byBNYXRoLlBJIHJhZGlhbnMuXG5cdHRoaXMubWluUG9sYXJBbmdsZSA9IDA7IC8vIHJhZGlhbnNcblx0dGhpcy5tYXhQb2xhckFuZ2xlID0gTWF0aC5QSTsgLy8gcmFkaWFuc1xuXG5cdC8vIEhvdyBmYXIgeW91IGNhbiBvcmJpdCBob3Jpem9udGFsbHksIHVwcGVyIGFuZCBsb3dlciBsaW1pdHMuXG5cdC8vIElmIHNldCwgbXVzdCBiZSBhIHN1Yi1pbnRlcnZhbCBvZiB0aGUgaW50ZXJ2YWwgWyAtIE1hdGguUEksIE1hdGguUEkgXS5cblx0dGhpcy5taW5BemltdXRoQW5nbGUgPSAtIEluZmluaXR5OyAvLyByYWRpYW5zXG5cdHRoaXMubWF4QXppbXV0aEFuZ2xlID0gSW5maW5pdHk7IC8vIHJhZGlhbnNcblxuXHQvLyBTZXQgdG8gdHJ1ZSB0byBlbmFibGUgZGFtcGluZyAoaW5lcnRpYSlcblx0Ly8gSWYgZGFtcGluZyBpcyBlbmFibGVkLCB5b3UgbXVzdCBjYWxsIGNvbnRyb2xzLnVwZGF0ZSgpIGluIHlvdXIgYW5pbWF0aW9uIGxvb3Bcblx0dGhpcy5lbmFibGVEYW1waW5nID0gZmFsc2U7XG5cdHRoaXMuZGFtcGluZ0ZhY3RvciA9IDAuMjU7XG5cblx0Ly8gVGhpcyBvcHRpb24gYWN0dWFsbHkgZW5hYmxlcyBkb2xseWluZyBpbiBhbmQgb3V0OyBsZWZ0IGFzIFwiem9vbVwiIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cblx0Ly8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgem9vbWluZ1xuXHR0aGlzLmVuYWJsZVpvb20gPSB0cnVlO1xuXHR0aGlzLnpvb21TcGVlZCA9IDEuMDtcblxuXHQvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSByb3RhdGluZ1xuXHR0aGlzLmVuYWJsZVJvdGF0ZSA9IHRydWU7XG5cdHRoaXMucm90YXRlU3BlZWQgPSAxLjA7XG5cblx0Ly8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgcGFubmluZ1xuXHR0aGlzLmVuYWJsZVBhbiA9IHRydWU7XG5cdHRoaXMua2V5UGFuU3BlZWQgPSA3LjA7XHQvLyBwaXhlbHMgbW92ZWQgcGVyIGFycm93IGtleSBwdXNoXG5cblx0Ly8gU2V0IHRvIHRydWUgdG8gYXV0b21hdGljYWxseSByb3RhdGUgYXJvdW5kIHRoZSB0YXJnZXRcblx0Ly8gSWYgYXV0by1yb3RhdGUgaXMgZW5hYmxlZCwgeW91IG11c3QgY2FsbCBjb250cm9scy51cGRhdGUoKSBpbiB5b3VyIGFuaW1hdGlvbiBsb29wXG5cdHRoaXMuYXV0b1JvdGF0ZSA9IGZhbHNlO1xuXHR0aGlzLmF1dG9Sb3RhdGVTcGVlZCA9IDIuMDsgLy8gMzAgc2Vjb25kcyBwZXIgcm91bmQgd2hlbiBmcHMgaXMgNjBcblxuXHQvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSB1c2Ugb2YgdGhlIGtleXNcblx0dGhpcy5lbmFibGVLZXlzID0gdHJ1ZTtcblxuXHQvLyBUaGUgZm91ciBhcnJvdyBrZXlzXG5cdHRoaXMua2V5cyA9IHsgTEVGVDogMzcsIFVQOiAzOCwgUklHSFQ6IDM5LCBCT1RUT006IDQwIH07XG5cblx0Ly8gTW91c2UgYnV0dG9uc1xuXHR0aGlzLm1vdXNlQnV0dG9ucyA9IHsgT1JCSVQ6IFRIUkVFLk1PVVNFLkxFRlQsIFpPT006IFRIUkVFLk1PVVNFLk1JRERMRSwgUEFOOiBUSFJFRS5NT1VTRS5SSUdIVCB9O1xuXG5cdC8vIGZvciByZXNldFxuXHR0aGlzLnRhcmdldDAgPSB0aGlzLnRhcmdldC5jbG9uZSgpO1xuXHR0aGlzLnBvc2l0aW9uMCA9IHRoaXMub2JqZWN0LnBvc2l0aW9uLmNsb25lKCk7XG5cdHRoaXMuem9vbTAgPSB0aGlzLm9iamVjdC56b29tO1xuXG5cdC8vXG5cdC8vIHB1YmxpYyBtZXRob2RzXG5cdC8vXG5cblx0dGhpcy5nZXRQb2xhckFuZ2xlID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0cmV0dXJuIHNwaGVyaWNhbC5waGk7XG5cblx0fTtcblxuXHR0aGlzLmdldEF6aW11dGhhbEFuZ2xlID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0cmV0dXJuIHNwaGVyaWNhbC50aGV0YTtcblxuXHR9O1xuXG5cdHRoaXMucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRzY29wZS50YXJnZXQuY29weSggc2NvcGUudGFyZ2V0MCApO1xuXHRcdHNjb3BlLm9iamVjdC5wb3NpdGlvbi5jb3B5KCBzY29wZS5wb3NpdGlvbjAgKTtcblx0XHRzY29wZS5vYmplY3Quem9vbSA9IHNjb3BlLnpvb20wO1xuXG5cdFx0c2NvcGUub2JqZWN0LnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBjaGFuZ2VFdmVudCApO1xuXG5cdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0XHRzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0fTtcblxuXHQvLyB0aGlzIG1ldGhvZCBpcyBleHBvc2VkLCBidXQgcGVyaGFwcyBpdCB3b3VsZCBiZSBiZXR0ZXIgaWYgd2UgY2FuIG1ha2UgaXQgcHJpdmF0ZS4uLlxuXHR0aGlzLnVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0dmFyIG9mZnNldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cblx0XHQvLyBzbyBjYW1lcmEudXAgaXMgdGhlIG9yYml0IGF4aXNcblx0XHR2YXIgcXVhdCA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkuc2V0RnJvbVVuaXRWZWN0b3JzKCBvYmplY3QudXAsIG5ldyBUSFJFRS5WZWN0b3IzKCAwLCAxLCAwICkgKTtcblx0XHR2YXIgcXVhdEludmVyc2UgPSBxdWF0LmNsb25lKCkuaW52ZXJzZSgpO1xuXG5cdFx0dmFyIGxhc3RQb3NpdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cdFx0dmFyIGxhc3RRdWF0ZXJuaW9uID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcblxuXHRcdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKCkge1xuXG5cdFx0XHR2YXIgcG9zaXRpb24gPSBzY29wZS5vYmplY3QucG9zaXRpb247XG5cblx0XHRcdG9mZnNldC5jb3B5KCBwb3NpdGlvbiApLnN1Yiggc2NvcGUudGFyZ2V0ICk7XG5cblx0XHRcdC8vIHJvdGF0ZSBvZmZzZXQgdG8gXCJ5LWF4aXMtaXMtdXBcIiBzcGFjZVxuXHRcdFx0b2Zmc2V0LmFwcGx5UXVhdGVybmlvbiggcXVhdCApO1xuXG5cdFx0XHQvLyBhbmdsZSBmcm9tIHotYXhpcyBhcm91bmQgeS1heGlzXG5cdFx0XHRzcGhlcmljYWwuc2V0RnJvbVZlY3RvcjMoIG9mZnNldCApO1xuXG5cdFx0XHRpZiAoIHNjb3BlLmF1dG9Sb3RhdGUgJiYgc3RhdGUgPT09IFNUQVRFLk5PTkUgKSB7XG5cblx0XHRcdFx0cm90YXRlTGVmdCggZ2V0QXV0b1JvdGF0aW9uQW5nbGUoKSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdHNwaGVyaWNhbC50aGV0YSArPSBzcGhlcmljYWxEZWx0YS50aGV0YTtcblx0XHRcdHNwaGVyaWNhbC5waGkgKz0gc3BoZXJpY2FsRGVsdGEucGhpO1xuXG5cdFx0XHQvLyByZXN0cmljdCB0aGV0YSB0byBiZSBiZXR3ZWVuIGRlc2lyZWQgbGltaXRzXG5cdFx0XHRzcGhlcmljYWwudGhldGEgPSBNYXRoLm1heCggc2NvcGUubWluQXppbXV0aEFuZ2xlLCBNYXRoLm1pbiggc2NvcGUubWF4QXppbXV0aEFuZ2xlLCBzcGhlcmljYWwudGhldGEgKSApO1xuXG5cdFx0XHQvLyByZXN0cmljdCBwaGkgdG8gYmUgYmV0d2VlbiBkZXNpcmVkIGxpbWl0c1xuXHRcdFx0c3BoZXJpY2FsLnBoaSA9IE1hdGgubWF4KCBzY29wZS5taW5Qb2xhckFuZ2xlLCBNYXRoLm1pbiggc2NvcGUubWF4UG9sYXJBbmdsZSwgc3BoZXJpY2FsLnBoaSApICk7XG5cblx0XHRcdHNwaGVyaWNhbC5tYWtlU2FmZSgpO1xuXG5cblx0XHRcdHNwaGVyaWNhbC5yYWRpdXMgKj0gc2NhbGU7XG5cblx0XHRcdC8vIHJlc3RyaWN0IHJhZGl1cyB0byBiZSBiZXR3ZWVuIGRlc2lyZWQgbGltaXRzXG5cdFx0XHRzcGhlcmljYWwucmFkaXVzID0gTWF0aC5tYXgoIHNjb3BlLm1pbkRpc3RhbmNlLCBNYXRoLm1pbiggc2NvcGUubWF4RGlzdGFuY2UsIHNwaGVyaWNhbC5yYWRpdXMgKSApO1xuXG5cdFx0XHQvLyBtb3ZlIHRhcmdldCB0byBwYW5uZWQgbG9jYXRpb25cblx0XHRcdHNjb3BlLnRhcmdldC5hZGQoIHBhbk9mZnNldCApO1xuXG5cdFx0XHRvZmZzZXQuc2V0RnJvbVNwaGVyaWNhbCggc3BoZXJpY2FsICk7XG5cblx0XHRcdC8vIHJvdGF0ZSBvZmZzZXQgYmFjayB0byBcImNhbWVyYS11cC12ZWN0b3ItaXMtdXBcIiBzcGFjZVxuXHRcdFx0b2Zmc2V0LmFwcGx5UXVhdGVybmlvbiggcXVhdEludmVyc2UgKTtcblxuXHRcdFx0cG9zaXRpb24uY29weSggc2NvcGUudGFyZ2V0ICkuYWRkKCBvZmZzZXQgKTtcblxuXHRcdFx0c2NvcGUub2JqZWN0Lmxvb2tBdCggc2NvcGUudGFyZ2V0ICk7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlRGFtcGluZyA9PT0gdHJ1ZSApIHtcblxuXHRcdFx0XHRzcGhlcmljYWxEZWx0YS50aGV0YSAqPSAoIDEgLSBzY29wZS5kYW1waW5nRmFjdG9yICk7XG5cdFx0XHRcdHNwaGVyaWNhbERlbHRhLnBoaSAqPSAoIDEgLSBzY29wZS5kYW1waW5nRmFjdG9yICk7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0c3BoZXJpY2FsRGVsdGEuc2V0KCAwLCAwLCAwICk7XG5cblx0XHRcdH1cblxuXHRcdFx0c2NhbGUgPSAxO1xuXHRcdFx0cGFuT2Zmc2V0LnNldCggMCwgMCwgMCApO1xuXG5cdFx0XHQvLyB1cGRhdGUgY29uZGl0aW9uIGlzOlxuXHRcdFx0Ly8gbWluKGNhbWVyYSBkaXNwbGFjZW1lbnQsIGNhbWVyYSByb3RhdGlvbiBpbiByYWRpYW5zKV4yID4gRVBTXG5cdFx0XHQvLyB1c2luZyBzbWFsbC1hbmdsZSBhcHByb3hpbWF0aW9uIGNvcyh4LzIpID0gMSAtIHheMiAvIDhcblxuXHRcdFx0aWYgKCB6b29tQ2hhbmdlZCB8fFxuXHRcdFx0XHRsYXN0UG9zaXRpb24uZGlzdGFuY2VUb1NxdWFyZWQoIHNjb3BlLm9iamVjdC5wb3NpdGlvbiApID4gRVBTIHx8XG5cdFx0XHRcdDggKiAoIDEgLSBsYXN0UXVhdGVybmlvbi5kb3QoIHNjb3BlLm9iamVjdC5xdWF0ZXJuaW9uICkgKSA+IEVQUyApIHtcblxuXHRcdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBjaGFuZ2VFdmVudCApO1xuXG5cdFx0XHRcdGxhc3RQb3NpdGlvbi5jb3B5KCBzY29wZS5vYmplY3QucG9zaXRpb24gKTtcblx0XHRcdFx0bGFzdFF1YXRlcm5pb24uY29weSggc2NvcGUub2JqZWN0LnF1YXRlcm5pb24gKTtcblx0XHRcdFx0em9vbUNoYW5nZWQgPSBmYWxzZTtcblxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cblx0XHR9O1xuXG5cdH0oKTtcblxuXHR0aGlzLmRpc3Bvc2UgPSBmdW5jdGlvbigpIHtcblxuXHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2NvbnRleHRtZW51Jywgb25Db250ZXh0TWVudSwgZmFsc2UgKTtcblx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZWRvd24nLCBvbk1vdXNlRG93biwgZmFsc2UgKTtcblx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICd3aGVlbCcsIG9uTW91c2VXaGVlbCwgZmFsc2UgKTtcblxuXHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnQsIGZhbHNlICk7XG5cdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAndG91Y2hlbmQnLCBvblRvdWNoRW5kLCBmYWxzZSApO1xuXHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlLCBmYWxzZSApO1xuXG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlLCBmYWxzZSApO1xuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJywgb25Nb3VzZVVwLCBmYWxzZSApO1xuXG5cdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgb25LZXlEb3duLCBmYWxzZSApO1xuXG5cdFx0Ly9zY29wZS5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdkaXNwb3NlJyB9ICk7IC8vIHNob3VsZCB0aGlzIGJlIGFkZGVkIGhlcmU/XG5cblx0fTtcblxuXHQvL1xuXHQvLyBpbnRlcm5hbHNcblx0Ly9cblxuXHR2YXIgc2NvcGUgPSB0aGlzO1xuXG5cdHZhciBjaGFuZ2VFdmVudCA9IHsgdHlwZTogJ2NoYW5nZScgfTtcblx0dmFyIHN0YXJ0RXZlbnQgPSB7IHR5cGU6ICdzdGFydCcgfTtcblx0dmFyIGVuZEV2ZW50ID0geyB0eXBlOiAnZW5kJyB9O1xuXG5cdHZhciBTVEFURSA9IHsgTk9ORSA6IC0gMSwgUk9UQVRFIDogMCwgRE9MTFkgOiAxLCBQQU4gOiAyLCBUT1VDSF9ST1RBVEUgOiAzLCBUT1VDSF9ET0xMWSA6IDQsIFRPVUNIX1BBTiA6IDUgfTtcblxuXHR2YXIgc3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdHZhciBFUFMgPSAwLjAwMDAwMTtcblxuXHQvLyBjdXJyZW50IHBvc2l0aW9uIGluIHNwaGVyaWNhbCBjb29yZGluYXRlc1xuXHR2YXIgc3BoZXJpY2FsID0gbmV3IFRIUkVFLlNwaGVyaWNhbCgpO1xuXHR2YXIgc3BoZXJpY2FsRGVsdGEgPSBuZXcgVEhSRUUuU3BoZXJpY2FsKCk7XG5cblx0dmFyIHNjYWxlID0gMTtcblx0dmFyIHBhbk9mZnNldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cdHZhciB6b29tQ2hhbmdlZCA9IGZhbHNlO1xuXG5cdHZhciByb3RhdGVTdGFydCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdHZhciByb3RhdGVFbmQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXHR2YXIgcm90YXRlRGVsdGEgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXG5cdHZhciBwYW5TdGFydCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdHZhciBwYW5FbmQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXHR2YXIgcGFuRGVsdGEgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXG5cdHZhciBkb2xseVN0YXJ0ID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblx0dmFyIGRvbGx5RW5kID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblx0dmFyIGRvbGx5RGVsdGEgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXG5cdGZ1bmN0aW9uIGdldEF1dG9Sb3RhdGlvbkFuZ2xlKCkge1xuXG5cdFx0cmV0dXJuIDIgKiBNYXRoLlBJIC8gNjAgLyA2MCAqIHNjb3BlLmF1dG9Sb3RhdGVTcGVlZDtcblxuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0Wm9vbVNjYWxlKCkge1xuXG5cdFx0cmV0dXJuIE1hdGgucG93KCAwLjk1LCBzY29wZS56b29tU3BlZWQgKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gcm90YXRlTGVmdCggYW5nbGUgKSB7XG5cblx0XHRzcGhlcmljYWxEZWx0YS50aGV0YSAtPSBhbmdsZTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gcm90YXRlVXAoIGFuZ2xlICkge1xuXG5cdFx0c3BoZXJpY2FsRGVsdGEucGhpIC09IGFuZ2xlO1xuXG5cdH1cblxuXHR2YXIgcGFuTGVmdCA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0dmFyIHYgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG5cdFx0cmV0dXJuIGZ1bmN0aW9uIHBhbkxlZnQoIGRpc3RhbmNlLCBvYmplY3RNYXRyaXggKSB7XG5cblx0XHRcdHYuc2V0RnJvbU1hdHJpeENvbHVtbiggb2JqZWN0TWF0cml4LCAwICk7IC8vIGdldCBYIGNvbHVtbiBvZiBvYmplY3RNYXRyaXhcblx0XHRcdHYubXVsdGlwbHlTY2FsYXIoIC0gZGlzdGFuY2UgKTtcblxuXHRcdFx0cGFuT2Zmc2V0LmFkZCggdiApO1xuXG5cdFx0fTtcblxuXHR9KCk7XG5cblx0dmFyIHBhblVwID0gZnVuY3Rpb24oKSB7XG5cblx0XHR2YXIgdiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cblx0XHRyZXR1cm4gZnVuY3Rpb24gcGFuVXAoIGRpc3RhbmNlLCBvYmplY3RNYXRyaXggKSB7XG5cblx0XHRcdHYuc2V0RnJvbU1hdHJpeENvbHVtbiggb2JqZWN0TWF0cml4LCAxICk7IC8vIGdldCBZIGNvbHVtbiBvZiBvYmplY3RNYXRyaXhcblx0XHRcdHYubXVsdGlwbHlTY2FsYXIoIGRpc3RhbmNlICk7XG5cblx0XHRcdHBhbk9mZnNldC5hZGQoIHYgKTtcblxuXHRcdH07XG5cblx0fSgpO1xuXG5cdC8vIGRlbHRhWCBhbmQgZGVsdGFZIGFyZSBpbiBwaXhlbHM7IHJpZ2h0IGFuZCBkb3duIGFyZSBwb3NpdGl2ZVxuXHR2YXIgcGFuID0gZnVuY3Rpb24oKSB7XG5cblx0XHR2YXIgb2Zmc2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuXHRcdHJldHVybiBmdW5jdGlvbiBwYW4gKCBkZWx0YVgsIGRlbHRhWSApIHtcblxuXHRcdFx0dmFyIGVsZW1lbnQgPSBzY29wZS5kb21FbGVtZW50ID09PSBkb2N1bWVudCA/IHNjb3BlLmRvbUVsZW1lbnQuYm9keSA6IHNjb3BlLmRvbUVsZW1lbnQ7XG5cblx0XHRcdGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEgKSB7XG5cblx0XHRcdFx0Ly8gcGVyc3BlY3RpdmVcblx0XHRcdFx0dmFyIHBvc2l0aW9uID0gc2NvcGUub2JqZWN0LnBvc2l0aW9uO1xuXHRcdFx0XHRvZmZzZXQuY29weSggcG9zaXRpb24gKS5zdWIoIHNjb3BlLnRhcmdldCApO1xuXHRcdFx0XHR2YXIgdGFyZ2V0RGlzdGFuY2UgPSBvZmZzZXQubGVuZ3RoKCk7XG5cblx0XHRcdFx0Ly8gaGFsZiBvZiB0aGUgZm92IGlzIGNlbnRlciB0byB0b3Agb2Ygc2NyZWVuXG5cdFx0XHRcdHRhcmdldERpc3RhbmNlICo9IE1hdGgudGFuKCAoIHNjb3BlLm9iamVjdC5mb3YgLyAyICkgKiBNYXRoLlBJIC8gMTgwLjAgKTtcblxuXHRcdFx0XHQvLyB3ZSBhY3R1YWxseSBkb24ndCB1c2Ugc2NyZWVuV2lkdGgsIHNpbmNlIHBlcnNwZWN0aXZlIGNhbWVyYSBpcyBmaXhlZCB0byBzY3JlZW4gaGVpZ2h0XG5cdFx0XHRcdHBhbkxlZnQoIDIgKiBkZWx0YVggKiB0YXJnZXREaXN0YW5jZSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0LCBzY29wZS5vYmplY3QubWF0cml4ICk7XG5cdFx0XHRcdHBhblVwKCAyICogZGVsdGFZICogdGFyZ2V0RGlzdGFuY2UgLyBlbGVtZW50LmNsaWVudEhlaWdodCwgc2NvcGUub2JqZWN0Lm1hdHJpeCApO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEgKSB7XG5cblx0XHRcdFx0Ly8gb3J0aG9ncmFwaGljXG5cdFx0XHRcdHBhbkxlZnQoIGRlbHRhWCAqICggc2NvcGUub2JqZWN0LnJpZ2h0IC0gc2NvcGUub2JqZWN0LmxlZnQgKSAvIHNjb3BlLm9iamVjdC56b29tIC8gZWxlbWVudC5jbGllbnRXaWR0aCwgc2NvcGUub2JqZWN0Lm1hdHJpeCApO1xuXHRcdFx0XHRwYW5VcCggZGVsdGFZICogKCBzY29wZS5vYmplY3QudG9wIC0gc2NvcGUub2JqZWN0LmJvdHRvbSApIC8gc2NvcGUub2JqZWN0Lnpvb20gLyBlbGVtZW50LmNsaWVudEhlaWdodCwgc2NvcGUub2JqZWN0Lm1hdHJpeCApO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdC8vIGNhbWVyYSBuZWl0aGVyIG9ydGhvZ3JhcGhpYyBub3IgcGVyc3BlY3RpdmVcblx0XHRcdFx0Y29uc29sZS53YXJuKCAnV0FSTklORzogT3JiaXRDb250cm9scy5qcyBlbmNvdW50ZXJlZCBhbiB1bmtub3duIGNhbWVyYSB0eXBlIC0gcGFuIGRpc2FibGVkLicgKTtcblx0XHRcdFx0c2NvcGUuZW5hYmxlUGFuID0gZmFsc2U7XG5cblx0XHRcdH1cblxuXHRcdH07XG5cblx0fSgpO1xuXG5cdGZ1bmN0aW9uIGRvbGx5SW4oIGRvbGx5U2NhbGUgKSB7XG5cblx0XHRpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhICkge1xuXG5cdFx0XHRzY2FsZSAvPSBkb2xseVNjYWxlO1xuXG5cdFx0fSBlbHNlIGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhICkge1xuXG5cdFx0XHRzY29wZS5vYmplY3Quem9vbSA9IE1hdGgubWF4KCBzY29wZS5taW5ab29tLCBNYXRoLm1pbiggc2NvcGUubWF4Wm9vbSwgc2NvcGUub2JqZWN0Lnpvb20gKiBkb2xseVNjYWxlICkgKTtcblx0XHRcdHNjb3BlLm9iamVjdC51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cdFx0XHR6b29tQ2hhbmdlZCA9IHRydWU7XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdXQVJOSU5HOiBPcmJpdENvbnRyb2xzLmpzIGVuY291bnRlcmVkIGFuIHVua25vd24gY2FtZXJhIHR5cGUgLSBkb2xseS96b29tIGRpc2FibGVkLicgKTtcblx0XHRcdHNjb3BlLmVuYWJsZVpvb20gPSBmYWxzZTtcblxuXHRcdH1cblxuXHR9XG5cblx0ZnVuY3Rpb24gZG9sbHlPdXQoIGRvbGx5U2NhbGUgKSB7XG5cblx0XHRpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhICkge1xuXG5cdFx0XHRzY2FsZSAqPSBkb2xseVNjYWxlO1xuXG5cdFx0fSBlbHNlIGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhICkge1xuXG5cdFx0XHRzY29wZS5vYmplY3Quem9vbSA9IE1hdGgubWF4KCBzY29wZS5taW5ab29tLCBNYXRoLm1pbiggc2NvcGUubWF4Wm9vbSwgc2NvcGUub2JqZWN0Lnpvb20gLyBkb2xseVNjYWxlICkgKTtcblx0XHRcdHNjb3BlLm9iamVjdC51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cdFx0XHR6b29tQ2hhbmdlZCA9IHRydWU7XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdXQVJOSU5HOiBPcmJpdENvbnRyb2xzLmpzIGVuY291bnRlcmVkIGFuIHVua25vd24gY2FtZXJhIHR5cGUgLSBkb2xseS96b29tIGRpc2FibGVkLicgKTtcblx0XHRcdHNjb3BlLmVuYWJsZVpvb20gPSBmYWxzZTtcblxuXHRcdH1cblxuXHR9XG5cblx0Ly9cblx0Ly8gZXZlbnQgY2FsbGJhY2tzIC0gdXBkYXRlIHRoZSBvYmplY3Qgc3RhdGVcblx0Ly9cblxuXHRmdW5jdGlvbiBoYW5kbGVNb3VzZURvd25Sb3RhdGUoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlRG93blJvdGF0ZScgKTtcblxuXHRcdHJvdGF0ZVN0YXJ0LnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVNb3VzZURvd25Eb2xseSggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VEb3duRG9sbHknICk7XG5cblx0XHRkb2xseVN0YXJ0LnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVNb3VzZURvd25QYW4oIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlRG93blBhbicgKTtcblxuXHRcdHBhblN0YXJ0LnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVNb3VzZU1vdmVSb3RhdGUoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlTW92ZVJvdGF0ZScgKTtcblxuXHRcdHJvdGF0ZUVuZC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblx0XHRyb3RhdGVEZWx0YS5zdWJWZWN0b3JzKCByb3RhdGVFbmQsIHJvdGF0ZVN0YXJ0ICk7XG5cblx0XHR2YXIgZWxlbWVudCA9IHNjb3BlLmRvbUVsZW1lbnQgPT09IGRvY3VtZW50ID8gc2NvcGUuZG9tRWxlbWVudC5ib2R5IDogc2NvcGUuZG9tRWxlbWVudDtcblxuXHRcdC8vIHJvdGF0aW5nIGFjcm9zcyB3aG9sZSBzY3JlZW4gZ29lcyAzNjAgZGVncmVlcyBhcm91bmRcblx0XHRyb3RhdGVMZWZ0KCAyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnggLyBlbGVtZW50LmNsaWVudFdpZHRoICogc2NvcGUucm90YXRlU3BlZWQgKTtcblxuXHRcdC8vIHJvdGF0aW5nIHVwIGFuZCBkb3duIGFsb25nIHdob2xlIHNjcmVlbiBhdHRlbXB0cyB0byBnbyAzNjAsIGJ1dCBsaW1pdGVkIHRvIDE4MFxuXHRcdHJvdGF0ZVVwKCAyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnkgLyBlbGVtZW50LmNsaWVudEhlaWdodCAqIHNjb3BlLnJvdGF0ZVNwZWVkICk7XG5cblx0XHRyb3RhdGVTdGFydC5jb3B5KCByb3RhdGVFbmQgKTtcblxuXHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVNb3VzZU1vdmVEb2xseSggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VNb3ZlRG9sbHknICk7XG5cblx0XHRkb2xseUVuZC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuXHRcdGRvbGx5RGVsdGEuc3ViVmVjdG9ycyggZG9sbHlFbmQsIGRvbGx5U3RhcnQgKTtcblxuXHRcdGlmICggZG9sbHlEZWx0YS55ID4gMCApIHtcblxuXHRcdFx0ZG9sbHlJbiggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdH0gZWxzZSBpZiAoIGRvbGx5RGVsdGEueSA8IDAgKSB7XG5cblx0XHRcdGRvbGx5T3V0KCBnZXRab29tU2NhbGUoKSApO1xuXG5cdFx0fVxuXG5cdFx0ZG9sbHlTdGFydC5jb3B5KCBkb2xseUVuZCApO1xuXG5cdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZU1vdXNlTW92ZVBhbiggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VNb3ZlUGFuJyApO1xuXG5cdFx0cGFuRW5kLnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG5cdFx0cGFuRGVsdGEuc3ViVmVjdG9ycyggcGFuRW5kLCBwYW5TdGFydCApO1xuXG5cdFx0cGFuKCBwYW5EZWx0YS54LCBwYW5EZWx0YS55ICk7XG5cblx0XHRwYW5TdGFydC5jb3B5KCBwYW5FbmQgKTtcblxuXHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVNb3VzZVVwKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZVVwJyApO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVNb3VzZVdoZWVsKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZVdoZWVsJyApO1xuXG5cdFx0aWYgKCBldmVudC5kZWx0YVkgPCAwICkge1xuXG5cdFx0XHRkb2xseU91dCggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdH0gZWxzZSBpZiAoIGV2ZW50LmRlbHRhWSA+IDAgKSB7XG5cblx0XHRcdGRvbGx5SW4oIGdldFpvb21TY2FsZSgpICk7XG5cblx0XHR9XG5cblx0XHRzY29wZS51cGRhdGUoKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlS2V5RG93biggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlS2V5RG93bicgKTtcblxuXHRcdHN3aXRjaCAoIGV2ZW50LmtleUNvZGUgKSB7XG5cblx0XHRcdGNhc2Ugc2NvcGUua2V5cy5VUDpcblx0XHRcdFx0cGFuKCAwLCBzY29wZS5rZXlQYW5TcGVlZCApO1xuXHRcdFx0XHRzY29wZS51cGRhdGUoKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2Ugc2NvcGUua2V5cy5CT1RUT006XG5cdFx0XHRcdHBhbiggMCwgLSBzY29wZS5rZXlQYW5TcGVlZCApO1xuXHRcdFx0XHRzY29wZS51cGRhdGUoKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2Ugc2NvcGUua2V5cy5MRUZUOlxuXHRcdFx0XHRwYW4oIHNjb3BlLmtleVBhblNwZWVkLCAwICk7XG5cdFx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBzY29wZS5rZXlzLlJJR0hUOlxuXHRcdFx0XHRwYW4oIC0gc2NvcGUua2V5UGFuU3BlZWQsIDAgKTtcblx0XHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0Um90YXRlKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaFN0YXJ0Um90YXRlJyApO1xuXG5cdFx0cm90YXRlU3RhcnQuc2V0KCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSApO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0RG9sbHkoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoU3RhcnREb2xseScgKTtcblxuXHRcdHZhciBkeCA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCAtIGV2ZW50LnRvdWNoZXNbIDEgXS5wYWdlWDtcblx0XHR2YXIgZHkgPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVk7XG5cblx0XHR2YXIgZGlzdGFuY2UgPSBNYXRoLnNxcnQoIGR4ICogZHggKyBkeSAqIGR5ICk7XG5cblx0XHRkb2xseVN0YXJ0LnNldCggMCwgZGlzdGFuY2UgKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hTdGFydFBhbiggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hTdGFydFBhbicgKTtcblxuXHRcdHBhblN0YXJ0LnNldCggZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYLCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hNb3ZlUm90YXRlKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaE1vdmVSb3RhdGUnICk7XG5cblx0XHRyb3RhdGVFbmQuc2V0KCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSApO1xuXHRcdHJvdGF0ZURlbHRhLnN1YlZlY3RvcnMoIHJvdGF0ZUVuZCwgcm90YXRlU3RhcnQgKTtcblxuXHRcdHZhciBlbGVtZW50ID0gc2NvcGUuZG9tRWxlbWVudCA9PT0gZG9jdW1lbnQgPyBzY29wZS5kb21FbGVtZW50LmJvZHkgOiBzY29wZS5kb21FbGVtZW50O1xuXG5cdFx0Ly8gcm90YXRpbmcgYWNyb3NzIHdob2xlIHNjcmVlbiBnb2VzIDM2MCBkZWdyZWVzIGFyb3VuZFxuXHRcdHJvdGF0ZUxlZnQoIDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueCAvIGVsZW1lbnQuY2xpZW50V2lkdGggKiBzY29wZS5yb3RhdGVTcGVlZCApO1xuXG5cdFx0Ly8gcm90YXRpbmcgdXAgYW5kIGRvd24gYWxvbmcgd2hvbGUgc2NyZWVuIGF0dGVtcHRzIHRvIGdvIDM2MCwgYnV0IGxpbWl0ZWQgdG8gMTgwXG5cdFx0cm90YXRlVXAoIDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0ICogc2NvcGUucm90YXRlU3BlZWQgKTtcblxuXHRcdHJvdGF0ZVN0YXJ0LmNvcHkoIHJvdGF0ZUVuZCApO1xuXG5cdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZVRvdWNoTW92ZURvbGx5KCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaE1vdmVEb2xseScgKTtcblxuXHRcdHZhciBkeCA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCAtIGV2ZW50LnRvdWNoZXNbIDEgXS5wYWdlWDtcblx0XHR2YXIgZHkgPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVk7XG5cblx0XHR2YXIgZGlzdGFuY2UgPSBNYXRoLnNxcnQoIGR4ICogZHggKyBkeSAqIGR5ICk7XG5cblx0XHRkb2xseUVuZC5zZXQoIDAsIGRpc3RhbmNlICk7XG5cblx0XHRkb2xseURlbHRhLnN1YlZlY3RvcnMoIGRvbGx5RW5kLCBkb2xseVN0YXJ0ICk7XG5cblx0XHRpZiAoIGRvbGx5RGVsdGEueSA+IDAgKSB7XG5cblx0XHRcdGRvbGx5T3V0KCBnZXRab29tU2NhbGUoKSApO1xuXG5cdFx0fSBlbHNlIGlmICggZG9sbHlEZWx0YS55IDwgMCApIHtcblxuXHRcdFx0ZG9sbHlJbiggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdH1cblxuXHRcdGRvbGx5U3RhcnQuY29weSggZG9sbHlFbmQgKTtcblxuXHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmVQYW4oIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoTW92ZVBhbicgKTtcblxuXHRcdHBhbkVuZC5zZXQoIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCwgZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZICk7XG5cblx0XHRwYW5EZWx0YS5zdWJWZWN0b3JzKCBwYW5FbmQsIHBhblN0YXJ0ICk7XG5cblx0XHRwYW4oIHBhbkRlbHRhLngsIHBhbkRlbHRhLnkgKTtcblxuXHRcdHBhblN0YXJ0LmNvcHkoIHBhbkVuZCApO1xuXG5cdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZVRvdWNoRW5kKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaEVuZCcgKTtcblxuXHR9XG5cblx0Ly9cblx0Ly8gZXZlbnQgaGFuZGxlcnMgLSBGU006IGxpc3RlbiBmb3IgZXZlbnRzIGFuZCByZXNldCBzdGF0ZVxuXHQvL1xuXG5cdGZ1bmN0aW9uIG9uTW91c2VEb3duKCBldmVudCApIHtcblxuXHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0aWYgKCBldmVudC5idXR0b24gPT09IHNjb3BlLm1vdXNlQnV0dG9ucy5PUkJJVCApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVSb3RhdGUgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRoYW5kbGVNb3VzZURvd25Sb3RhdGUoIGV2ZW50ICk7XG5cblx0XHRcdHN0YXRlID0gU1RBVEUuUk9UQVRFO1xuXG5cdFx0fSBlbHNlIGlmICggZXZlbnQuYnV0dG9uID09PSBzY29wZS5tb3VzZUJ1dHRvbnMuWk9PTSApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVab29tID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0aGFuZGxlTW91c2VEb3duRG9sbHkoIGV2ZW50ICk7XG5cblx0XHRcdHN0YXRlID0gU1RBVEUuRE9MTFk7XG5cblx0XHR9IGVsc2UgaWYgKCBldmVudC5idXR0b24gPT09IHNjb3BlLm1vdXNlQnV0dG9ucy5QQU4gKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlUGFuID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0aGFuZGxlTW91c2VEb3duUGFuKCBldmVudCApO1xuXG5cdFx0XHRzdGF0ZSA9IFNUQVRFLlBBTjtcblxuXHRcdH1cblxuXHRcdGlmICggc3RhdGUgIT09IFNUQVRFLk5PTkUgKSB7XG5cblx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSwgZmFsc2UgKTtcblx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJywgb25Nb3VzZVVwLCBmYWxzZSApO1xuXG5cdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBzdGFydEV2ZW50ICk7XG5cblx0XHR9XG5cblx0fVxuXG5cdGZ1bmN0aW9uIG9uTW91c2VNb3ZlKCBldmVudCApIHtcblxuXHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0aWYgKCBzdGF0ZSA9PT0gU1RBVEUuUk9UQVRFICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVJvdGF0ZSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGhhbmRsZU1vdXNlTW92ZVJvdGF0ZSggZXZlbnQgKTtcblxuXHRcdH0gZWxzZSBpZiAoIHN0YXRlID09PSBTVEFURS5ET0xMWSApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVab29tID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0aGFuZGxlTW91c2VNb3ZlRG9sbHkoIGV2ZW50ICk7XG5cblx0XHR9IGVsc2UgaWYgKCBzdGF0ZSA9PT0gU1RBVEUuUEFOICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGhhbmRsZU1vdXNlTW92ZVBhbiggZXZlbnQgKTtcblxuXHRcdH1cblxuXHR9XG5cblx0ZnVuY3Rpb24gb25Nb3VzZVVwKCBldmVudCApIHtcblxuXHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRoYW5kbGVNb3VzZVVwKCBldmVudCApO1xuXG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlLCBmYWxzZSApO1xuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJywgb25Nb3VzZVVwLCBmYWxzZSApO1xuXG5cdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggZW5kRXZlbnQgKTtcblxuXHRcdHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gb25Nb3VzZVdoZWVsKCBldmVudCApIHtcblxuXHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgfHwgc2NvcGUuZW5hYmxlWm9vbSA9PT0gZmFsc2UgfHwgKCBzdGF0ZSAhPT0gU1RBVEUuTk9ORSAmJiBzdGF0ZSAhPT0gU1RBVEUuUk9UQVRFICkgKSByZXR1cm47XG5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0aGFuZGxlTW91c2VXaGVlbCggZXZlbnQgKTtcblxuXHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIHN0YXJ0RXZlbnQgKTsgLy8gbm90IHN1cmUgd2h5IHRoZXNlIGFyZSBoZXJlLi4uXG5cdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggZW5kRXZlbnQgKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gb25LZXlEb3duKCBldmVudCApIHtcblxuXHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgfHwgc2NvcGUuZW5hYmxlS2V5cyA9PT0gZmFsc2UgfHwgc2NvcGUuZW5hYmxlUGFuID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdGhhbmRsZUtleURvd24oIGV2ZW50ICk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIG9uVG91Y2hTdGFydCggZXZlbnQgKSB7XG5cblx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0c3dpdGNoICggZXZlbnQudG91Y2hlcy5sZW5ndGggKSB7XG5cblx0XHRcdGNhc2UgMTpcdC8vIG9uZS1maW5nZXJlZCB0b3VjaDogcm90YXRlXG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVSb3RhdGUgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdGhhbmRsZVRvdWNoU3RhcnRSb3RhdGUoIGV2ZW50ICk7XG5cblx0XHRcdFx0c3RhdGUgPSBTVEFURS5UT1VDSF9ST1RBVEU7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMjpcdC8vIHR3by1maW5nZXJlZCB0b3VjaDogZG9sbHlcblxuXHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVpvb20gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdGhhbmRsZVRvdWNoU3RhcnREb2xseSggZXZlbnQgKTtcblxuXHRcdFx0XHRzdGF0ZSA9IFNUQVRFLlRPVUNIX0RPTExZO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDM6IC8vIHRocmVlLWZpbmdlcmVkIHRvdWNoOiBwYW5cblxuXHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0aGFuZGxlVG91Y2hTdGFydFBhbiggZXZlbnQgKTtcblxuXHRcdFx0XHRzdGF0ZSA9IFNUQVRFLlRPVUNIX1BBTjtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0ZGVmYXVsdDpcblxuXHRcdFx0XHRzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0XHR9XG5cblx0XHRpZiAoIHN0YXRlICE9PSBTVEFURS5OT05FICkge1xuXG5cdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBzdGFydEV2ZW50ICk7XG5cblx0XHR9XG5cblx0fVxuXG5cdGZ1bmN0aW9uIG9uVG91Y2hNb3ZlKCBldmVudCApIHtcblxuXHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0c3dpdGNoICggZXZlbnQudG91Y2hlcy5sZW5ndGggKSB7XG5cblx0XHRcdGNhc2UgMTogLy8gb25lLWZpbmdlcmVkIHRvdWNoOiByb3RhdGVcblxuXHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVJvdGF0ZSA9PT0gZmFsc2UgKSByZXR1cm47XG5cdFx0XHRcdGlmICggc3RhdGUgIT09IFNUQVRFLlRPVUNIX1JPVEFURSApIHJldHVybjsgLy8gaXMgdGhpcyBuZWVkZWQ/Li4uXG5cblx0XHRcdFx0aGFuZGxlVG91Y2hNb3ZlUm90YXRlKCBldmVudCApO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDI6IC8vIHR3by1maW5nZXJlZCB0b3VjaDogZG9sbHlcblxuXHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVpvb20gPT09IGZhbHNlICkgcmV0dXJuO1xuXHRcdFx0XHRpZiAoIHN0YXRlICE9PSBTVEFURS5UT1VDSF9ET0xMWSApIHJldHVybjsgLy8gaXMgdGhpcyBuZWVkZWQ/Li4uXG5cblx0XHRcdFx0aGFuZGxlVG91Y2hNb3ZlRG9sbHkoIGV2ZW50ICk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMzogLy8gdGhyZWUtZmluZ2VyZWQgdG91Y2g6IHBhblxuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlUGFuID09PSBmYWxzZSApIHJldHVybjtcblx0XHRcdFx0aWYgKCBzdGF0ZSAhPT0gU1RBVEUuVE9VQ0hfUEFOICkgcmV0dXJuOyAvLyBpcyB0aGlzIG5lZWRlZD8uLi5cblxuXHRcdFx0XHRoYW5kbGVUb3VjaE1vdmVQYW4oIGV2ZW50ICk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGRlZmF1bHQ6XG5cblx0XHRcdFx0c3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRmdW5jdGlvbiBvblRvdWNoRW5kKCBldmVudCApIHtcblxuXHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRoYW5kbGVUb3VjaEVuZCggZXZlbnQgKTtcblxuXHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIGVuZEV2ZW50ICk7XG5cblx0XHRzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIG9uQ29udGV4dE1lbnUoIGV2ZW50ICkge1xuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHR9XG5cblx0Ly9cblxuXHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdjb250ZXh0bWVudScsIG9uQ29udGV4dE1lbnUsIGZhbHNlICk7XG5cblx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vkb3duJywgb25Nb3VzZURvd24sIGZhbHNlICk7XG5cdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3doZWVsJywgb25Nb3VzZVdoZWVsLCBmYWxzZSApO1xuXG5cdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnQsIGZhbHNlICk7XG5cdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoZW5kJywgb25Ub3VjaEVuZCwgZmFsc2UgKTtcblx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAndG91Y2htb3ZlJywgb25Ub3VjaE1vdmUsIGZhbHNlICk7XG5cblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgb25LZXlEb3duLCBmYWxzZSApO1xuXG5cdC8vIGZvcmNlIGFuIHVwZGF0ZSBhdCBzdGFydFxuXG5cdHRoaXMudXBkYXRlKCk7XG5cbn07XG5cblRIUkVFLk9yYml0Q29udHJvbHMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggVEhSRUUuRXZlbnREaXNwYXRjaGVyLnByb3RvdHlwZSApO1xuVEhSRUUuT3JiaXRDb250cm9scy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBUSFJFRS5PcmJpdENvbnRyb2xzO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyggVEhSRUUuT3JiaXRDb250cm9scy5wcm90b3R5cGUsIHtcblxuXHRjZW50ZXI6IHtcblxuXHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAuY2VudGVyIGhhcyBiZWVuIHJlbmFtZWQgdG8gLnRhcmdldCcgKTtcblx0XHRcdHJldHVybiB0aGlzLnRhcmdldDtcblxuXHRcdH1cblxuXHR9LFxuXG5cdC8vIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcblxuXHRub1pvb206IHtcblxuXHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9ab29tIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlWm9vbSBpbnN0ZWFkLicgKTtcblx0XHRcdHJldHVybiAhIHRoaXMuZW5hYmxlWm9vbTtcblxuXHRcdH0sXG5cblx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1pvb20gaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVab29tIGluc3RlYWQuJyApO1xuXHRcdFx0dGhpcy5lbmFibGVab29tID0gISB2YWx1ZTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdG5vUm90YXRlOiB7XG5cblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vUm90YXRlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlUm90YXRlIGluc3RlYWQuJyApO1xuXHRcdFx0cmV0dXJuICEgdGhpcy5lbmFibGVSb3RhdGU7XG5cblx0XHR9LFxuXG5cdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9Sb3RhdGUgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVSb3RhdGUgaW5zdGVhZC4nICk7XG5cdFx0XHR0aGlzLmVuYWJsZVJvdGF0ZSA9ICEgdmFsdWU7XG5cblx0XHR9XG5cblx0fSxcblxuXHRub1Bhbjoge1xuXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1BhbiBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVBhbiBpbnN0ZWFkLicgKTtcblx0XHRcdHJldHVybiAhIHRoaXMuZW5hYmxlUGFuO1xuXG5cdFx0fSxcblxuXHRcdHNldDogZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vUGFuIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlUGFuIGluc3RlYWQuJyApO1xuXHRcdFx0dGhpcy5lbmFibGVQYW4gPSAhIHZhbHVlO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0bm9LZXlzOiB7XG5cblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vS2V5cyBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZUtleXMgaW5zdGVhZC4nICk7XG5cdFx0XHRyZXR1cm4gISB0aGlzLmVuYWJsZUtleXM7XG5cblx0XHR9LFxuXG5cdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9LZXlzIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlS2V5cyBpbnN0ZWFkLicgKTtcblx0XHRcdHRoaXMuZW5hYmxlS2V5cyA9ICEgdmFsdWU7XG5cblx0XHR9XG5cblx0fSxcblxuXHRzdGF0aWNNb3ZpbmcgOiB7XG5cblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLnN0YXRpY01vdmluZyBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZURhbXBpbmcgaW5zdGVhZC4nICk7XG5cdFx0XHRyZXR1cm4gISB0aGlzLmVuYWJsZURhbXBpbmc7XG5cblx0XHR9LFxuXG5cdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAuc3RhdGljTW92aW5nIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlRGFtcGluZyBpbnN0ZWFkLicgKTtcblx0XHRcdHRoaXMuZW5hYmxlRGFtcGluZyA9ICEgdmFsdWU7XG5cblx0XHR9XG5cblx0fSxcblxuXHRkeW5hbWljRGFtcGluZ0ZhY3RvciA6IHtcblxuXHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAuZHluYW1pY0RhbXBpbmdGYWN0b3IgaGFzIGJlZW4gcmVuYW1lZC4gVXNlIC5kYW1waW5nRmFjdG9yIGluc3RlYWQuJyApO1xuXHRcdFx0cmV0dXJuIHRoaXMuZGFtcGluZ0ZhY3RvcjtcblxuXHRcdH0sXG5cblx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5keW5hbWljRGFtcGluZ0ZhY3RvciBoYXMgYmVlbiByZW5hbWVkLiBVc2UgLmRhbXBpbmdGYWN0b3IgaW5zdGVhZC4nICk7XG5cdFx0XHR0aGlzLmRhbXBpbmdGYWN0b3IgPSB2YWx1ZTtcblxuXHRcdH1cblxuXHR9XG5cbn0gKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9saWJzL09yYml0Q29udHJvbHMuanMiXSwic291cmNlUm9vdCI6IiJ9