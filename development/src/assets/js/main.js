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
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 2 */
/***/ (function(module, exports) {

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

/***/ }),
/* 3 */
/***/ (function(module, exports) {

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

/***/ }),
/* 4 */
/***/ (function(module, exports) {

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

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 9 */
/***/ (function(module, exports) {

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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjI4ZGJkOGJiZTAyOWY1NjhiYWQiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9Ub3AuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9wYWdlL0NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0NvcmUvQ29uZi5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL215bGlicy9VdGlsLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvbXlsaWJzL0Z1bmMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9wYWdlL01haW4uanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0Rpc3BsYXlUb3AuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy92aXN1YWwvQ2FudmFzLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvQ29yZS9FbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvbGlicy9PcmJpdENvbnRyb2xzLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsImdiIiwidW5kZWZpbmVkIiwiaW4iLCJjb21tb24iLCJtYWluIiwiQ29tbW9uIiwic2V0dXAiLCJzZXRFdmVudHMiLCJjb25mIiwidSIsImYiLCIkIiwiZG9jdW1lbnQiLCJvbiIsIm9uUmVhZHkiLCJiaW5kIiwib25Mb2FkIiwiQ29uZiIsIlJFTEVBU0UiLCJGTEciLCJMT0ciLCJQQVJBTSIsIlNUQVRTIiwiZGVmVyIsImRlZkgiLCJXIiwiSCIsInNwVyIsInNwSCIsImJwIiwibW9kZSIsImtleXMiLCJzd2l0Y2hNb2RlIiwic2VjMDJJbWdOdW0iLCJ5b3V0dWJlSUQwMSIsInlvdXR1YmVJRDAyIiwid2ViRm9udExvYWRlZCIsImkiLCJrZXkiLCJsZW4iLCJwYXJhbSIsInJlZiIsInJlZjEiLCJ2YWx1ZSIsImxvY2F0aW9uIiwic2VhcmNoIiwicmVwbGFjZSIsInNwbGl0IiwibGVuZ3RoIiwiaiIsIm9iaiIsImsiLCJ2YWwiLCJVdGlsIiwidWEiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJ0b0xvd2VyQ2FzZSIsImFwcFYiLCJhcHBWZXJzaW9uIiwiaXNSZXNTUCIsImlzUmVzUEMiLCJpc1BDIiwiaXNTUCIsImlzVEFCIiwiaXNNQiIsImlzSUUiLCJpc1NldFNQU2l6ZSIsInN0YXJ0VGltZSIsImVsYXBzZWRUaW1lIiwibm93IiwiRGF0ZSIsIm1pbiIsIm1heCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIm1pbjEiLCJtYXgxIiwibWluMiIsIm1heDIiLCJoaXQiLCJyYW5nZSIsIm51bSIsInJlc01pbiIsInJlc01heCIsImJhc2VNaW4iLCJiYXNlTWF4IiwicCIsIm4iLCJwb3MiLCJTdHJpbmciLCJpbmRleE9mIiwic3Vic3RyIiwibnVtZXJhdG9yIiwiZGVub21pbmF0b3IiLCJyYWRpYW5zIiwiUEkiLCJhbmdsZSIsInAxIiwicDIiLCJzcXJ0IiwicG93IiwieCIsInkiLCJhcnIiLCJzb3J0IiwiYSIsImIiLCJnZXRUaW1lIiwiZmxnIiwiY3NzIiwibWVkaWEiLCJwYXR0ZXJuIiwiUmVnRXhwIiwiam9pbiIsInRlc3QiLCJhZGRDbGFzcyIsImlzSXBhZCIsImlzQW5kcm9pZCIsInBsYXRmb3JtIiwiaXNJb3MiLCJtc2llIiwicGFyc2VJbnQiLCJtYXRjaCIsImlzSWUxMFVuZGVyIiwibG9nIiwiaXNJRTExIiwicmVtb3ZlQ2xhc3MiLCJ2ZXJzaW9uIiwicGFyc2VGbG9hdCIsInNsaWNlIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwidXJsIiwiaHJlZiIsInBhcmFtSXRlbXMiLCJsaXN0IiwicGFyYW1JdGVtIiwiaGFzaCIsImwiLCJsZW4xIiwiY29va2llIiwiaXNDb250YWluIiwiciIsImciLCJzdHIiLCJ0b1N0cmluZyIsIkFycmF5IiwiY29udGFpbiIsIm51bWJlciIsIl9wb3ciLCJyb3VuZCIsInJlcyIsIm9yZyIsImRlc3QiLCJiZWZvcmUiLCJhZnRlciIsImdldE5vdyIsImhvdXIiLCJnZXRIb3VycyIsIm1pbnV0ZSIsImdldE1pbnV0ZXMiLCJzZWNvbmQiLCJnZXRTZWNvbmRzIiwibWlsbFNlY29uZCIsImdldE1pbGxpc2Vjb25kcyIsImdldERhdGUiLCJtb250aGRheXMiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwid2Vla0RheUpQIiwid0RKIiwiZ2V0RGF5Iiwid2Vla0RheUVOIiwid0RFIiwiZGF0ZSIsIk51bWJlciIsImlnbm9yZUFycmF5IiwiT2JqZWN0IiwicHJvdG90eXBlIiwiY2FsbCIsIiR0YXJnZXQiLCIkaW1nIiwiZWFjaCIsInciLCJ3aWR0aCIsImgiLCJoZWlnaHQiLCJhdHRyIiwidHJpZ2dlciIsInNlbGYiLCJlIiwicHJldmVudERlZmF1bHQiLCJvZmYiLCJwcm90b2NvbCIsImhvc3RuYW1lIiwicG9ydCIsInBhdGhuYW1lIiwiZXZlbnQiLCJyZXR1cm5WYWx1ZSIsImtleUNvZGUiLCJhZGRFdmVudExpc3RlbmVyIiwib253aGVlbCIsIm9ubW91c2V3aGVlbCIsIm9udG91Y2htb3ZlIiwib25rZXlkb3duIiwicHJldmVudERlZmF1bHRGb3JTY3JvbGxLZXlzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkZ1bmMiLCJibGFuayIsImRlYnVnZ2VyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZXhwYW5kalF1ZXJ5IiwibWV0aG9kcyIsImNvbnNvbGUiLCJtIiwicHJlcGVuZCIsIkZQUyIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbGxiYWNrIiwic2V0VGltZW91dCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwibW96Q2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSIsInRpbWVyIiwiY2xlYXJUaW1lb3V0IiwialF1ZXJ5IiwiZm4iLCJleHRlbmQiLCJhZGp1c3QiLCJhZGp1c3RXIiwiYWRqdXN0SCIsIkNTUyIsInN1cHBvcnRzIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwidiIsImlzQW5kcm9pZFZlcnNpb24iLCJhbGVydCIsIk1haW4iLCJvbkltbWVkaWF0ZSIsInBhZ2UiLCJkYXRhIiwiRGlzcGxheVRvcCIsImNhbnZhcyIsIm91dHB1dCIsImdldEVsZW1lbnRCeUlkIiwiQ2FudmFzIiwib3B0cyIsImNyZWF0ZUVsZW1lbnQiLCJjYW1lcmEiLCJyZW5kZXJlciIsInNjZW5lIiwiY3ViZSIsImNyZWF0ZUNhbWVyYSIsIl9jcmVhdGVDYW1lcmEiLCJjcmVhdGVSZW5kZXJlciIsIl9jcmVhdGVSZW5kZXJlciIsImNyZWF0ZVNjZW5lIiwiX2NyZWF0ZVNjZW5lIiwiY3JlYXRlT2JqZWN0IiwiX2NyZWF0ZU9iamVjdCIsIm9yYml0Q29udHJvbHMiLCJfb3JiaXRDb250cm9scyIsIm9uUmVzaXplIiwiX29uUmVzaXplIiwiVXBkYXRlIiwiX1VwZGF0ZSIsIlRIUkVFIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJwb3NpdGlvbiIsInoiLCJsb29rQXQiLCJWZWN0b3IzIiwiV2ViR0xSZW5kZXJlciIsImFscGhhIiwiYW50aWFsaWFzIiwic3RlbmNpbCIsImRlcHRoIiwicHJlbXVsdGlwbGllZEFscGhhIiwic2V0Q2xlYXJDb2xvciIsInNldFBpeGVsUmF0aW8iLCJkZXZpY2VQaXhlbFJhdGlvIiwic2V0U2l6ZSIsImFwcGVuZENoaWxkIiwiZG9tRWxlbWVudCIsIlNjZW5lIiwiY3ViZUdlb21ldHJ5IiwiQm94R2VvbWV0cnkiLCJjdWJlTWF0ZXJpYWwiLCJNZXNoQmFzaWNNYXRlcmlhbCIsImNvbG9yIiwid2lyZWZyYW1lIiwiTWVzaCIsInJlbmRlciIsImFzcGVjdCIsInVwZGF0ZVByb2plY3Rpb25NYXRyaXgiLCJjb250cm9scyIsIk9yYml0Q29udHJvbHMiLCJhdXRvUm90YXRlIiwiY2xvY2siLCJDbG9jayIsImRlbHRhIiwiZ2V0RGVsdGEiLCJ1cGRhdGUiLCJyZXF1aXJlIiwiRW50cnkiLCJvYmplY3QiLCJlbmFibGVkIiwidGFyZ2V0IiwibWluRGlzdGFuY2UiLCJtYXhEaXN0YW5jZSIsIkluZmluaXR5IiwibWluWm9vbSIsIm1heFpvb20iLCJtaW5Qb2xhckFuZ2xlIiwibWF4UG9sYXJBbmdsZSIsIm1pbkF6aW11dGhBbmdsZSIsIm1heEF6aW11dGhBbmdsZSIsImVuYWJsZURhbXBpbmciLCJkYW1waW5nRmFjdG9yIiwiZW5hYmxlWm9vbSIsInpvb21TcGVlZCIsImVuYWJsZVJvdGF0ZSIsInJvdGF0ZVNwZWVkIiwiZW5hYmxlUGFuIiwia2V5UGFuU3BlZWQiLCJhdXRvUm90YXRlU3BlZWQiLCJlbmFibGVLZXlzIiwiTEVGVCIsIlVQIiwiUklHSFQiLCJCT1RUT00iLCJtb3VzZUJ1dHRvbnMiLCJPUkJJVCIsIk1PVVNFIiwiWk9PTSIsIk1JRERMRSIsIlBBTiIsInRhcmdldDAiLCJjbG9uZSIsInBvc2l0aW9uMCIsInpvb20wIiwiem9vbSIsImdldFBvbGFyQW5nbGUiLCJzcGhlcmljYWwiLCJwaGkiLCJnZXRBemltdXRoYWxBbmdsZSIsInRoZXRhIiwicmVzZXQiLCJzY29wZSIsImNvcHkiLCJkaXNwYXRjaEV2ZW50IiwiY2hhbmdlRXZlbnQiLCJzdGF0ZSIsIlNUQVRFIiwiTk9ORSIsIm9mZnNldCIsInF1YXQiLCJRdWF0ZXJuaW9uIiwic2V0RnJvbVVuaXRWZWN0b3JzIiwidXAiLCJxdWF0SW52ZXJzZSIsImludmVyc2UiLCJsYXN0UG9zaXRpb24iLCJsYXN0UXVhdGVybmlvbiIsInN1YiIsImFwcGx5UXVhdGVybmlvbiIsInNldEZyb21WZWN0b3IzIiwicm90YXRlTGVmdCIsImdldEF1dG9Sb3RhdGlvbkFuZ2xlIiwic3BoZXJpY2FsRGVsdGEiLCJtYWtlU2FmZSIsInJhZGl1cyIsInNjYWxlIiwicGFuT2Zmc2V0Iiwic2V0RnJvbVNwaGVyaWNhbCIsInNldCIsInpvb21DaGFuZ2VkIiwiZGlzdGFuY2VUb1NxdWFyZWQiLCJFUFMiLCJkb3QiLCJxdWF0ZXJuaW9uIiwiZGlzcG9zZSIsIm9uQ29udGV4dE1lbnUiLCJvbk1vdXNlRG93biIsIm9uTW91c2VXaGVlbCIsIm9uVG91Y2hTdGFydCIsIm9uVG91Y2hFbmQiLCJvblRvdWNoTW92ZSIsIm9uTW91c2VNb3ZlIiwib25Nb3VzZVVwIiwib25LZXlEb3duIiwidHlwZSIsInN0YXJ0RXZlbnQiLCJlbmRFdmVudCIsIlJPVEFURSIsIkRPTExZIiwiVE9VQ0hfUk9UQVRFIiwiVE9VQ0hfRE9MTFkiLCJUT1VDSF9QQU4iLCJTcGhlcmljYWwiLCJyb3RhdGVTdGFydCIsIlZlY3RvcjIiLCJyb3RhdGVFbmQiLCJyb3RhdGVEZWx0YSIsInBhblN0YXJ0IiwicGFuRW5kIiwicGFuRGVsdGEiLCJkb2xseVN0YXJ0IiwiZG9sbHlFbmQiLCJkb2xseURlbHRhIiwiZ2V0Wm9vbVNjYWxlIiwicm90YXRlVXAiLCJwYW5MZWZ0IiwiZGlzdGFuY2UiLCJvYmplY3RNYXRyaXgiLCJzZXRGcm9tTWF0cml4Q29sdW1uIiwibXVsdGlwbHlTY2FsYXIiLCJwYW5VcCIsInBhbiIsImRlbHRhWCIsImRlbHRhWSIsImVsZW1lbnQiLCJib2R5IiwidGFyZ2V0RGlzdGFuY2UiLCJ0YW4iLCJmb3YiLCJjbGllbnRIZWlnaHQiLCJtYXRyaXgiLCJPcnRob2dyYXBoaWNDYW1lcmEiLCJyaWdodCIsImxlZnQiLCJjbGllbnRXaWR0aCIsInRvcCIsImJvdHRvbSIsIndhcm4iLCJkb2xseUluIiwiZG9sbHlTY2FsZSIsImRvbGx5T3V0IiwiaGFuZGxlTW91c2VEb3duUm90YXRlIiwiY2xpZW50WCIsImNsaWVudFkiLCJoYW5kbGVNb3VzZURvd25Eb2xseSIsImhhbmRsZU1vdXNlRG93blBhbiIsImhhbmRsZU1vdXNlTW92ZVJvdGF0ZSIsInN1YlZlY3RvcnMiLCJoYW5kbGVNb3VzZU1vdmVEb2xseSIsImhhbmRsZU1vdXNlTW92ZVBhbiIsImhhbmRsZU1vdXNlVXAiLCJoYW5kbGVNb3VzZVdoZWVsIiwiaGFuZGxlS2V5RG93biIsImhhbmRsZVRvdWNoU3RhcnRSb3RhdGUiLCJ0b3VjaGVzIiwicGFnZVgiLCJwYWdlWSIsImhhbmRsZVRvdWNoU3RhcnREb2xseSIsImR4IiwiZHkiLCJoYW5kbGVUb3VjaFN0YXJ0UGFuIiwiaGFuZGxlVG91Y2hNb3ZlUm90YXRlIiwiaGFuZGxlVG91Y2hNb3ZlRG9sbHkiLCJoYW5kbGVUb3VjaE1vdmVQYW4iLCJoYW5kbGVUb3VjaEVuZCIsImJ1dHRvbiIsInN0b3BQcm9wYWdhdGlvbiIsImNyZWF0ZSIsIkV2ZW50RGlzcGF0Y2hlciIsImNvbnN0cnVjdG9yIiwiZGVmaW5lUHJvcGVydGllcyIsImNlbnRlciIsImdldCIsIm5vWm9vbSIsIm5vUm90YXRlIiwibm9QYW4iLCJub0tleXMiLCJzdGF0aWNNb3ZpbmciLCJkeW5hbWljRGFtcGluZ0ZhY3RvciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQzlCQTs7OztBQUNBOzs7Ozs7QUFUQTs7Ozs7Ozs7QUFXQSxFQUFDLFlBQUk7O0FBRUg7QUFDQSxPQUFJQSxPQUFPQyxFQUFQLEtBQVlDLFNBQWhCLEVBQTJCRixPQUFPQyxFQUFQLEdBQVksRUFBWjtBQUMzQkQsVUFBT0MsRUFBUCxDQUFVRSxFQUFWLEdBQWUsRUFBZixDQUpHLENBSWdCOztBQUVuQkYsTUFBR0UsRUFBSCxDQUFNQyxNQUFOLEdBQWUsc0JBQWY7QUFDQUgsTUFBR0UsRUFBSCxDQUFNRSxJQUFOLEdBQWEsb0JBQWI7QUFFRCxFQVRE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QUFDQSxXQUFPLENBQUUsS0FBSy9HLFNBQWQ7QUFFQSxJQVBLOztBQVNOb0QsUUFBSyxhQUFXalYsS0FBWCxFQUFtQjs7QUFFdkI0SyxZQUFRZ08sSUFBUixDQUFjLDBFQUFkO0FBQ0EsU0FBSy9HLFNBQUwsR0FBaUIsQ0FBRTdSLEtBQW5CO0FBRUE7O0FBZEssR0FuRGdEOztBQXFFdkRtYixVQUFROztBQUVQSixRQUFLLGVBQVk7O0FBRWhCblEsWUFBUWdPLElBQVIsQ0FBYyw0RUFBZDtBQUNBLFdBQU8sQ0FBRSxLQUFLNUcsVUFBZDtBQUVBLElBUE07O0FBU1BpRCxRQUFLLGFBQVdqVixLQUFYLEVBQW1COztBQUV2QjRLLFlBQVFnTyxJQUFSLENBQWMsNEVBQWQ7QUFDQSxTQUFLNUcsVUFBTCxHQUFrQixDQUFFaFMsS0FBcEI7QUFFQTs7QUFkTSxHQXJFK0M7O0FBdUZ2RG9iLGdCQUFlOztBQUVkTCxRQUFLLGVBQVk7O0FBRWhCblEsWUFBUWdPLElBQVIsQ0FBYyxxRkFBZDtBQUNBLFdBQU8sQ0FBRSxLQUFLckgsYUFBZDtBQUVBLElBUGE7O0FBU2QwRCxRQUFLLGFBQVdqVixLQUFYLEVBQW1COztBQUV2QjRLLFlBQVFnTyxJQUFSLENBQWMscUZBQWQ7QUFDQSxTQUFLckgsYUFBTCxHQUFxQixDQUFFdlIsS0FBdkI7QUFFQTs7QUFkYSxHQXZGd0M7O0FBeUd2RHFiLHdCQUF1Qjs7QUFFdEJOLFFBQUssZUFBWTs7QUFFaEJuUSxZQUFRZ08sSUFBUixDQUFjLDBGQUFkO0FBQ0EsV0FBTyxLQUFLcEgsYUFBWjtBQUVBLElBUHFCOztBQVN0QnlELFFBQUssYUFBV2pWLEtBQVgsRUFBbUI7O0FBRXZCNEssWUFBUWdPLElBQVIsQ0FBYywwRkFBZDtBQUNBLFNBQUtwSCxhQUFMLEdBQXFCeFIsS0FBckI7QUFFQTs7QUFkcUI7O0FBekdnQyxFQUF4RCxFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBiMjhkYmQ4YmJlMDI5ZjU2OGJhZCIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IFRvcFxuICogRGF0ZTpcbiAqIEF1dGhvcjpcbiAqL1xuXG5pbXBvcnQgQ29tbW9uIGZyb20gJy4vcGFnZS9Db21tb24nO1xuaW1wb3J0IE1haW4gZnJvbSAnLi9wYWdlL01haW4nO1xuXG4oKCk9PntcblxuICAvLyBnbG9iYWzjgqrjg5bjgrjjgqfjgq/jg4hcbiAgaWYgKHdpbmRvdy5nYj09PXVuZGVmaW5lZCkgd2luZG93LmdiID0ge307XG4gIHdpbmRvdy5nYi5pbiA9IHt9OyAvL2luc3RhbmNlXG5cbiAgZ2IuaW4uY29tbW9uID0gbmV3IENvbW1vbigpO1xuICBnYi5pbi5tYWluID0gbmV3IE1haW4oKTtcblxufSkoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL1RvcC5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IENvbW1vblxuICogRGF0ZTpcbiAqIEF1dGhvcjpcbiAqL1xuXG5pbXBvcnQgQ29uZiBmcm9tICcuLi9Db3JlL0NvbmYnO1xuaW1wb3J0IFV0aWwgZnJvbSAnLi4vbXlsaWJzL1V0aWwnO1xuaW1wb3J0IEZ1bmMgZnJvbSAnLi4vbXlsaWJzL0Z1bmMnO1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1vbiB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cblx0c2V0dXAoKSB7XG5cblx0XHQvKipcbiAgICAgKiBAdHlwZSB7Q29uZn0gOiDliJ3mnJ/lgKTjga7oqK3lrprjg7vjg4fjg7zjgr/jga7phY3nva5cblx0XHQgKiBAdHlwZSB7VXRpbH0gOiBVdGls6Zai5pWw44Gu5Yid5pyf5YyWXG5cdFx0ICogQHR5cGUge0Z1bmN9IDog44Kk44OZ44Oz44OI44Oe44ON44O844K444Oj44O844Gu6Kit572uXG5cdFx0ICovXG4gICAgZ2IuaW4uY29uZiA9IG5ldyBDb25mKCk7XG4gICAgZ2IuaW4udSA9IG5ldyBVdGlsKCk7XG4gICAgZ2IuaW4uZiA9IG5ldyBGdW5jKCk7XG5cbiAgfVxuXG4gIG9uUmVhZHkoKSB7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAg44OH44OQ44Kk44K544O744OW44Op44Km44K25Yik5a6aXG4gICAgLy8gIOOCueODnuODm+OBruWQkeOBjeWIpOWumlxuICAgIC8vICDjg5rjg7zjgrjmg4XloLHlj5blvpdcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG5cbiAgfVxuXG4gIG9uTG9hZCgpIHtcblxuICAgIFxuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICAkKGRvY3VtZW50KS5vbigncmVhZHknLCB0aGlzLm9uUmVhZHkuYmluZCh0aGlzKSk7XG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgdGhpcy5vbkxvYWQuYmluZCh0aGlzKSk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9wYWdlL0NvbW1vbi5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IENvbmZcbiAqIERhdGU6XG4gKiBBdXRob3I6XG4gKi9cblxuLy8gaW1wb3J0IFNvdW5kRGF0YSBmcm9tICcuL0RhdGEvU291bmQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25mIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICDmnKznlarjg5Xjg6njgrBcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gICAgXG4gICAgdGhpcy5SRUxFQVNFID0gdHJ1ZTtcbiAgICAvLyB0aGlzLlJFTEVBU0UgPSBmYWxzZTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICDjg5Xjg6njgrDplqLpgKNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLkZMRyA9IHtcbiAgICAgIExPRzp0cnVlLCAgLy8g44Ot44Kw5Ye65YqbXG4gICAgICBQQVJBTTp0cnVlLCAvLyDjg5Hjg6njg6Hjg7zjgr/jg4Hjgqfjg4Pjgq9cbiAgICAgIFNUQVRTOnRydWUgIC8vIFN0YXRz6KGo56S6XG4gICAgfTtcbiAgICBpZiAoIXRoaXMuUkVMRUFTRSkge1xuICAgICAgdGhpcy5GTEcgPSB7XG4gICAgICAgIExPRzpmYWxzZSxcbiAgICAgICAgUEFSQU06ZmFsc2UsXG4gICAgICAgIFNUQVRTOmZhbHNlIFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAg5Z+65pysIHdpZHRoIGhlaWdodFxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuZGVmVyA9IDEzMDA7XG4gICAgdGhpcy5kZWZIID0gODUwO1xuXG4gICAgdGhpcy5XID0gMTIwMDtcbiAgICB0aGlzLkggPSA3NTA7XG5cbiAgICB0aGlzLnNwVyA9IDM3NTtcbiAgICB0aGlzLnNwSCA9IDY2NztcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICDjg5bjg6zjgqTjgq/jg53jgqTjg7Pjg4hcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLmJwID0gNzY4O1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIG1vZGVcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLm1vZGUgPSBudWxsO1xuICAgIHRoaXMua2V5cyA9IFtcbiAgICAgIHtcbiAgICAgICAgICAna2V5JzogJ21vdmllJyxcbiAgICAgICAgICAndmFsdWUnOiBbJ21vcm5pbmcnLCdhZnRlcm5vb24nLCduaWdodCddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgICAna2V5JzogJ2RhdGEnLFxuICAgICAgICAgICd2YWx1ZSc6IFsnZGF0YTAxJywnZGF0YTAyJywnZGF0YTAzJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAgICdrZXknOiAncHJvZHVjdCcsXG4gICAgICAgICAgJ3ZhbHVlJzogWycwMSddLFxuICAgICAgfSxcbiAgICBdXG4gICAgdGhpcy5zd2l0Y2hNb2RlKCk7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgc291bmQgZGF0YVxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIHRoaXMuc291bmREYXRhID0gbmV3IFNvdW5kRGF0YSgpO1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIHNlYzAyIGJnIEltZyBOdW1cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLnNlYzAySW1nTnVtID0gMzk2O1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIHlvdXR1YmUgSURcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLnlvdXR1YmVJRDAxID0gJ3hXMm9OcE5yS2QwJztcbiAgICB0aGlzLnlvdXR1YmVJRDAyID0gJ3QyV2VSUmRBRmVJJztcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICB3ZWIgZm9udCBsb2FkZWRcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLndlYkZvbnRMb2FkZWQgPSBmYWxzZTtcblxuICB9XG5cblxuICBzd2l0Y2hNb2RlKCl7XG5cbiAgICB2YXIgaSwga2V5LCBsZW4sIHBhcmFtLCByZWYsIHJlZjEsIHZhbHVlO1xuXG4gICAgcmVmID0gbG9jYXRpb24uc2VhcmNoLnJlcGxhY2UoJz8nLCAnJykuc3BsaXQoJyYnKTtcblxuICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgcGFyYW0gPSByZWZbaV07XG4gICAgICByZWYxID0gcGFyYW0uc3BsaXQoJz0nKSwga2V5ID0gcmVmMVswXSwgdmFsdWUgPSByZWYxWzFdO1xuXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMua2V5cy5sZW5ndGg7IGorKykge1xuXG4gICAgICAgIHZhciBvYmogPSB0aGlzLmtleXNbal07XG5cbiAgICAgICAgLy8g44OR44Op44Oh44O844K/44GM44Kt44O844Go5LiA57eS44Gg44Gj44Gf44KJXG4gICAgICAgIGlmIChvYmoua2V5ID09PSBrZXkpIHtcblxuICAgICAgICAgIC8vIOWQhOWApOOBqOavlOi8g1xuICAgICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgb2JqLnZhbHVlLmxlbmd0aDsgaysrKSB7XG5cbiAgICAgICAgICAgIHZhciB2YWwgPSBvYmoudmFsdWVba107XG5cbiAgICAgICAgICAgIC8vIOOCreODvOOCknRoaXMua2V5c+OBrmtleeOBq+OAgXZhbHVl44KS5q+U6LyD44GX44Gm5ZCM5YCk44Gg44Gj44Gf44KC44Gu44GrXG4gICAgICAgICAgICBpZiAodmFsID09PSB2YWx1ZSkgdGhpc1tvYmoua2V5XSA9IHZhbDtcbiAgICAgICAgICAgIFxuICAgICAgICAgIH07XG5cblxuICAgICAgICB9O1xuXG4gICAgICAgIFxuICAgICAgfTtcblxuICAgIH1cblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0NvcmUvQ29uZi5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OiDkvr/liKnplqLmlbDjgq/jg6njgrlcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBVdGlsXG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFV0aWwge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy51YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7IC8vdXNlcmFnZW50XG4gICAgdGhpcy5hcHBWID0gd2luZG93Lm5hdmlnYXRvci5hcHBWZXJzaW9uLnRvTG93ZXJDYXNlKCk7IC8vYXBwVmVyc2lvblxuICAgIHRoaXMuaXNSZXNTUCA9IG51bGw7IC8vIHJlc3BvbnNpdmUgc3BcbiAgICB0aGlzLmlzUmVzUEMgPSBudWxsOyAvLyByZXNwb25zaXZlIHBjXG5cbiAgICB0aGlzLmlzUEMgPSBudWxsO1xuICAgIHRoaXMuaXNTUCA9IG51bGw7XG4gICAgdGhpcy5pc1RBQiA9IG51bGw7XG4gICAgdGhpcy5pc01CID0gbnVsbDtcblxuICAgIHRoaXMuaXNJRSA9IG51bGw7XG5cbiAgICB0aGlzLmlzU2V0U1BTaXplID0gZmFsc2U7XG5cblxuICAgIHRoaXMuc3RhcnRUaW1lID0gbnVsbDtcbiAgICB0aGlzLmVsYXBzZWRUaW1lID0gbnVsbDtcbiAgICB0aGlzLm5vdyA9IG5ldyBEYXRlKCk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBNYXRoXG4gICAqL1xuXG5cbiAgLyoqXG4gICAqIOODqeODs+ODgOODoOOBquWApOOCkui/lOOBmVxuICAgKiBAcGFyYW0gbWluIDog5pyA5bCP5YCkKGludClcbiAgICogQHBhcmFtIG1heCA6IOacgOWkp+WApChpbnQpXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IDogbWlu44GL44KJbWF444G+44Gn44Gu44Op44Oz44OA44Og44Gq5pW05pWwKGludClcbiAgICovXG4gIHJhbmRvbShtaW4sIG1heCkge1xuXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAoKG1heCArIDEpIC0gbWluKSArIG1pbikpO1xuXG4gIH1cblxuICAvKipcbiAgICog44Op44Oz44OA44Og44Gq5pW05pWw44KSMuOBpOOBruevhOWbsuOBi+OCieWPluW+l1xuICAgKiBAcGFyYW0gbWluMSA6IOacgOWwj+WApDEoaW50KVxuICAgKiBAcGFyYW0gbWF4MSA6IOacgOWkp+WApDEoaW50KVxuICAgKiBAcGFyYW0gbWluMiA6IOacgOWwj+WApDIoaW50KVxuICAgKiBAcGFyYW0gbWF4MiA6IOacgOWkp+WApDIoaW50KVxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSA6IG1pbuOBi+OCiW1heOOBvuOBp+OBruODqeODs+ODgOODoOOBquaVtOaVsChpbnQpXG4gICAqL1xuICByYW5kb20yKG1pbjEsIG1heDEsIG1pbjIsIG1heDIpIHtcbiAgICBcbiAgICBpZiAodGhpcy5oaXQoMikpIHtcbiAgICAgIHJldHVybiB0aGlzLnJhbmRvbShtaW4xLCBtYXgxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMucmFuZG9tKG1pbjIsIG1heDIpO1xuICAgIH1cblxuICB9XG5cbiAgLyoqXG4gICAqIDEvQHJhbmdl44Gu56K6546H44GndHJ1ZeOCkuWPluW+l1xuICAgKiBAcGFyYW0gcmFuZ2UgOiDmr43mlbAoaW50KVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gICAqL1xuICBoaXQocmFuZ2UpIHtcblxuICAgIHJldHVybiB0aGlzLnJhbmRvbSgwLCByYW5nZSAtIDEpID09PSAwO1xuXG4gIH1cbiAgXG4gIC8vIDDjgYvjgonnr4Tlm7LlhoXjgafjg6njg7Pjg4Djg6DjgarmlbTmlbDjgpLlj5blvpdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQHZhbCA6IOevhOWbsihpbnQpXG4gIC8vIHJldHVybiA6IOODqeODs+ODgOODoOOBquaVtOaVsChpbnQpXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJhbmdlKHZhbCkge1xuXG4gICAgcmV0dXJuIHRoaXMucmFuZG9tKC12YWwsIHZhbCk7XG5cbiAgfVxuICBcbiAgLy8g5YCk44KS44Oe44OD44OU44Oz44KwXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEBudW0gOiDjg57jg4Pjg5Tjg7PjgrDjgZnjgovlgKQoTnVtYmVyKVxuICAvLyBAcmVzTWluIDog57WQ5p6c44Go44Gq44KL5YCk44Gu5pyA5bCP5YCkKE51bWJlcilcbiAgLy8gQHJlc01heCA6IOe1kOaenOOBqOOBquOCi+WApOOBruacgOWkp+WApChOdW1iZXIpXG4gIC8vIEBiYXNlTWluIDog5YWD44Go44Gq44KL5YCk44Gu5pyA5bCP5YCkKE51bWJlcilcbiAgLy8gQGJhc2VNYXggOiDlhYPjgajjgarjgovlgKTjga7mnIDlpKflgKQoTnVtYmVyKVxuICAvLyByZXR1cm4gOiDjg57jg4Pjg5Tjg7PjgrDjgZXjgozjgZ/lgKQoTnVtYmVyKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBtYXAobnVtLCByZXNNaW4sIHJlc01heCwgYmFzZU1pbiwgYmFzZU1heCkge1xuXG4gICAgdmFyIHA7XG4gICAgaWYgKG51bSA8IGJhc2VNaW4pIHtcbiAgICAgIHJldHVybiByZXNNaW47XG4gICAgfVxuICAgIGlmIChudW0gPiBiYXNlTWF4KSB7XG4gICAgICByZXR1cm4gcmVzTWF4O1xuICAgIH1cbiAgICBwID0gKHJlc01heCAtIHJlc01pbikgLyAoYmFzZU1heCAtIGJhc2VNaW4pO1xuXG4gICAgcmV0dXJuICgobnVtIC0gYmFzZU1pbikgKiBwKSArIHJlc01pbjtcblxuICB9ICAgIFxuICBcbiAgLy8g5pWw5YCk44Gr5bCP5pWw54K556ysQG7kvY3jgb7jgafjgpLjgaTjgZHjgZ/mloflrZfliJfjgpLov5TjgZlcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQG51bSA6IOWApChOdW1iZXIpXG4gIC8vIEBuIDog5bCP5pWw54K544Gu5L2NKGludClcbiAgLy8gcmV0dXJuIDog5aSJ5o+b44GV44KM44Gf5YCkKFN0cmluZylcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZGVjaW1hbChudW0sIG4pIHtcbiAgICB2YXIgaSwgcG9zO1xuICAgIG51bSA9IFN0cmluZyhudW0pO1xuICAgIHBvcyA9IG51bS5pbmRleE9mKFwiLlwiKTtcbiAgICBpZiAobiA9PT0gMCkge1xuICAgICAgcmV0dXJuIG51bS5zcGxpdChcIi5cIilbMF07XG4gICAgfVxuICAgIGlmIChwb3MgPT09IC0xKSB7XG4gICAgICBudW0gKz0gXCIuXCI7XG4gICAgICBpID0gMDtcbiAgICAgIHdoaWxlIChpIDwgbikge1xuICAgICAgICBudW0gKz0gXCIwXCI7XG4gICAgICAgIGkrKztcbiAgICAgIH1cbiAgICAgIHJldHVybiBudW07XG4gICAgfVxuICAgIG51bSA9IG51bS5zdWJzdHIoMCwgcG9zKSArIG51bS5zdWJzdHIocG9zLCBuICsgMSk7XG4gICAgcmV0dXJuIG51bTtcbiAgfVxuXG4gIGNsYW1wKG51bWVyYXRvcixkZW5vbWluYXRvcix2YWwpIHtcblxuICAgIHJldHVybiB2YWwgKiAobnVtZXJhdG9yIC8gZGVub21pbmF0b3IpO1xuXG4gIH1cblxuXHQvKipcbiAgICog44Op44K444Ki44Oz44KS6KeS5bqm44Gr5aSJ5o+bXG5cdCAqIEBwYXJhbSByYWRpYW5zXG5cdCAqIEByZXR1cm5zIHtudW1iZXJ9XG5cdCAqL1xuICBkZWdyZWUocmFkaWFucykge1xuXG4gICAgcmV0dXJuIHJhZGlhbnMgKiAxODAgLyBNYXRoLlBJO1xuXG4gIH1cblxuICAvLyB0byByYWRpYW5zXG4gIHJhZGlhbihhbmdsZSkgeyBcblxuICAgIHJldHVybiBhbmdsZSAqIE1hdGguUEkgLyAxODA7IC8vMeW6puS9leODqeOCuOOCouODs+OBi1xuXG4gIH1cblxuICBkaXN0KHAxLCBwMikge1xuXG4gICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhwMi54IC0gcDEueCwgMikgKyBNYXRoLnBvdyhwMi55IC0gcDEueSwgMikpO1xuXG4gIH1cblxuICBhc2NlbmQoYXJyKSB7XG5cbiAgICBhcnIuc29ydChmdW5jdGlvbihhLGIpe1xuICAgICAgaWYoIGEgPiBiICkgcmV0dXJuIC0xO1xuICAgICAgaWYoIGEgPCBiICkgcmV0dXJuIDE7XG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcbiAgICAvLyB2YXIgYSA9IFs1LDMsOSwxLDEwXVxuICAgIC8vIOe1kOaenDoxMCw5LDUsMywxXG5cbiAgfVxuXG4gIGRlc2NlbmQoYXJyKSB7XG5cbiAgICBhcnIuc29ydChmdW5jdGlvbihhLGIpe1xuICAgICAgaWYoIGEgPCBiICkgcmV0dXJuIC0xO1xuICAgICAgaWYoIGEgPiBiICkgcmV0dXJuIDE7XG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcblxuICAgIC8vIHZhciBhID0gWzUsMyw5LDEsMTBdXG4gICAgLy8g57WQ5p6cOjEsMyw1LDksMTBcblxuICB9XG5cbiAgLy8gbWFwKHZhbHVlLCBtaW4wMSwgbWF4MDEsIG1pbjAyLCBtYXgwMikge1xuXG4gIC8vICAgdmFyIGRpczAxID0gbWF4MDEgLSBtaW4wMTtcbiAgLy8gICB2YXIgZGlzMDIgPSBtYXgwMiAtIG1pbjAyXG5cbiAgLy8gICB2YXIgcmF0ZSA9IGRpczAyIC8gZGlzMDE7XG5cbiAgLy8gICB2YWx1ZSA9IHZhbHVlICogcmF0ZTtcblxuICAvLyAgIHJldHVybiB2YWx1ZTtcbiAgLy8gfVxuXG4gIGNvbnN0cmFpbih2YWx1ZSwgbWluLCBtYXgpIHtcblxuICAgIHJldHVybiBNYXRoLm1pbihtYXgsIE1hdGgubWF4KHZhbHVlLCBtaW4pKTtcblxuICAgIC8vIGlmICh2YWx1ZSA8PSBsb3cpIHZhbHVlID0gbG93O1xuICAgIC8vIGlmICh2YWx1ZSA+PSBoaWdoKSB2YWx1ZSA9IGhpZ2g7ICAgICBcbiAgICAvLyByZXR1cm4gdmFsdWU7XG5cbiAgfVxuXG4gIC8vIOODpuODi+ODvOOCr0lE44KS5Y+W5b6XXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHVuaXF1ZSgpIHtcblxuICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICB9XG4gIFxuICAvLyAqKmpxdWFyeeS9v+eUqFxuICAvLyDjg5zjgr/jg7Pjg6Ljg7zjg4nlpInmm7RcbiAgLy8gdHJ1ZeOBquOCieOCq+ODvOOCveODq+OBjOODneOCpOODs+OCv+ODvOOBruW9ouOBq1xuICAvLyBmYWxzZeOBquOCieODh+ODleOCqeODq+ODiOOBruOCq+ODvOOCveODq+OBq1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAZmxnIDog6YGp55So44GZ44KL44GL44Gp44GG44GLKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGJ1dHRvbk1vZGUoZmxnKSB7XG5cbiAgICBpZiAoZmxnKSB7XG4gICAgICByZXR1cm4gJChcImJvZHlcIikuY3NzKFwiY3Vyc29yXCIsIFwicG9pbnRlclwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICQoXCJib2R5XCIpLmNzcyhcImN1cnNvclwiLCBcImRlZmF1bHRcIik7XG4gICAgfVxuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIGRldmljZVxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBpc0RldmljZVNQKCl7XG5cbiAgICB2YXIgbWVkaWEgPSBbXCJpcGhvbmVcIixcImlwb2RcIixcImlwYWRcIixcImFuZHJvaWRcIixcImRyZWFtXCIsXCJjdXBjYWtlXCIsXCJibGFja2JlcnJ5OTUwMFwiLFwiYmxhY2tiZXJyeTk1MzBcIixcImJsYWNrYmVycnk5NTIwXCIsXCJibGFja2JlcnJ5OTU1MFwiLFwiYmxhY2tiZXJyeTk4MDBcIixcIndlYm9zXCIsXCJpbmNvZ25pdG9cIixcIndlYm1hdGVcIl07XG4gICAgdmFyIHBhdHRlcm4gPSBuZXcgUmVnRXhwKG1lZGlhLmpvaW4oXCJ8XCIpLFwiaVwiKTtcblxuICAgIHZhciBiID0gcGF0dGVybi50ZXN0KHRoaXMudWEpO1xuICAgIGlmIChiKSAkKCdib2R5JykuYWRkQ2xhc3MoJ2lzRGV2aWNlU1AnKTtcblxuICAgIHRoaXMuaXNTUCA9IGI7XG5cbiAgfVxuICBpc0RldmljZVRBQigpe1xuXG4gICAgdmFyIGIgPSAodGhpcy51YS5pbmRleE9mKFwid2luZG93c1wiKSAhPSAtMSAmJiB0aGlzLnVhLmluZGV4T2YoXCJ0b3VjaFwiKSAhPSAtMSlcbiAgICAgIHx8IHRoaXMudWEuaW5kZXhPZihcImlwYWRcIikgIT0gLTFcbiAgICAgIHx8ICh0aGlzLnVhLmluZGV4T2YoXCJhbmRyb2lkXCIpICE9IC0xICYmIHRoaXMudWEuaW5kZXhPZihcIm1vYmlsZVwiKSA9PSAtMSlcbiAgICAgIHx8ICh0aGlzLnVhLmluZGV4T2YoXCJmaXJlZm94XCIpICE9IC0xICYmIHRoaXMudWEuaW5kZXhPZihcInRhYmxldFwiKSAhPSAtMSlcbiAgICAgIHx8IHRoaXMudWEuaW5kZXhPZihcImtpbmRsZVwiKSAhPSAtMVxuICAgICAgfHwgdGhpcy51YS5pbmRleE9mKFwic2lsa1wiKSAhPSAtMVxuICAgICAgfHwgdGhpcy51YS5pbmRleE9mKFwicGxheWJvb2tcIikgIT0gLTE7XG4gICAgaWYgKGIpICQoJ2JvZHknKS5hZGRDbGFzcygnaXNEZXZpY2VUQUInKTtcblxuICAgIHRoaXMuaXNUQUIgPSBiO1xuXG4gIH1cblxuICBpc0RldmljZU1CKCl7XG5cbiAgICB2YXIgYiA9ICh0aGlzLnVhLmluZGV4T2YoXCJ3aW5kb3dzXCIpICE9IC0xICYmIHRoaXMudWEuaW5kZXhPZihcInBob25lXCIpICE9IC0xKVxuICAgICAgfHwgdGhpcy51YS5pbmRleE9mKFwiaXBob25lXCIpICE9IC0xXG4gICAgICB8fCB0aGlzLnVhLmluZGV4T2YoXCJpcG9kXCIpICE9IC0xXG4gICAgICB8fCAodGhpcy51YS5pbmRleE9mKFwiYW5kcm9pZFwiKSAhPSAtMSAmJiB0aGlzLnVhLmluZGV4T2YoXCJtb2JpbGVcIikgIT0gLTEpXG4gICAgICB8fCAodGhpcy51YS5pbmRleE9mKFwiZmlyZWZveFwiKSAhPSAtMSAmJiB0aGlzLnVhLmluZGV4T2YoXCJtb2JpbGVcIikgIT0gLTEpXG4gICAgICB8fCB0aGlzLnVhLmluZGV4T2YoXCJibGFja2JlcnJ5XCIpICE9IC0xO1xuICAgIGlmIChiKSAkKCdib2R5JykuYWRkQ2xhc3MoJ2lzRGV2aWNlTUInKTtcblxuICAgIHRoaXMuaXNNQiA9IGI7XG5cbiAgfVxuXG4gIGlzRGV2aWNlUEMoKXtcblxuICAgIGlmICghKHRoaXMuaXNTUCB8fCB0aGlzLmlzVEFCIHx8IHRoaXMuaXNNQikpIHtcbiAgICAgIFxuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdpc0RldmljZVBDJyk7XG4gICAgICB0aGlzLmlzUEMgPSB0cnVlO1xuICAgICAgcmV0dXJuO1xuXG4gICAgfVxuXG4gICAgdGhpcy5pc1BDID0gZmFsc2U7XG5cbiAgfVxuXG4gIC8vIOOCueODnuODleOCqeWIpOWumlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzU210KCkge1xuXG4gICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignaVBhZCcpID4gMCB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ2lQaG9uZScpID4gMCB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ2lQb2QnKSA+IDAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdBbmRyb2lkJykgPiAwO1xuXG4gIH1cblxuICAvLyDjgr/jg5bjg6zjg4Pjg4jnq6/mnKvjgYvjganjgYbjgYtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc1RhYmxldCgpIHtcblxuICAgIHJldHVybiB0aGlzLmlzSXBhZCgpIHx8ICh0aGlzLmlzQW5kcm9pZCgpICYmIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignTW9iaWxlJykgPT09IC0xKTtcblxuICB9XG5cbiAgLy8gaVBhZOWIpOWumlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzSXBhZCgpIHtcblxuICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ2lQYWQnKSA+IDA7XG5cbiAgfVxuXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBPU1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyBBbmRyb2lk5Yik5a6aXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNBbmRyb2lkKCkge1xuXG4gICAgdmFyIHU7XG4gICAgdSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gICAgcmV0dXJuIHUuaW5kZXhPZignQmxhY2tCZXJyeScpID4gMCB8fCB1LmluZGV4T2YoJ0FuZHJvaWQnKSA+IDAgfHwgdS5pbmRleE9mKCdXaW5kb3dzIFBob25lJykgPiAwO1xuXG4gIH1cblxuICBpc2lQaG9uZSgpe1xuICAgIHZhciBwYXR0ZXJuID0gbmV3IFJlZ0V4cChcImlwaG9uZVwiLFwiaVwiKTtcbiAgICByZXR1cm4gcGF0dGVybi50ZXN0KHRoaXMudWEpO1xuICB9XG5cbiAgLy8gaU9T5Yik5a6aXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNJb3MoKSB7XG5cbiAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdpUGFkJykgPiAwIHx8IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignaVBob25lJykgPiAwIHx8IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignaVBvZCcpID4gMDtcblxuICB9XG5cbiAgLy8gUFMz5Yik5a6aXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNQczMoKSB7XG5cbiAgICB2YXIgdTtcbiAgICB1ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgICByZXR1cm4gdS5pbmRleE9mKCdQTEFZU1RBVElPTiAzJykgPiAwO1xuXG4gIH1cbiAgICBcbiAgLy8gVklUQeWIpOWumlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzVml0YSgpIHtcblxuICAgIHZhciB1O1xuICAgIHUgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICAgIHJldHVybiB1LmluZGV4T2YoJ1BsYXlTdGF0aW9uIFZpdGEnKSA+IDA7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgYnJvd3NlclxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gSUXjgYvjganjgYbjgYtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc0llKCkge1xuXG4gICAgdmFyIHVhO1xuICAgIHVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcbiAgICByZXR1cm4gdWEuaW5kZXhPZignbXNpZScpICE9PSAtMSB8fCB1YS5pbmRleE9mKCd0cmlkZW50LzcnKSAhPT0gLTE7XG5cbiAgfVxuXG4gIC8vIFdJTuOBi+OBqeOBhuOBi1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzV2luKCkge1xuXG4gICAgcmV0dXJuIG5hdmlnYXRvci5wbGF0Zm9ybS5pbmRleE9mKFwiV2luXCIpICE9PSAtMTtcblxuICB9XG5cbiAgLy8gZ29vZ2xlQ2hyb21l44GL44Gp44GG44GLXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNDaHJvbWUoKSB7XG5cbiAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdDaHJvbWUnKSA+IDA7XG5cbiAgfSAgICBcbiAgXG4gIC8vIEZpcmVGb3jjgYvjganjgYbjgYtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc0ZGKCkge1xuXG4gICAgcmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignZmlyZWZveCcpICE9PSAtMTtcblxuICB9XG5cbiAgaXNTYWZhcmkoKXtcblxuICAgIGlmKHRoaXMudWEuaW5kZXhPZihcImNocm9tZVwiKSAhPSAtMSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmKHRoaXMudWEuaW5kZXhPZihcImx1bmFzY2FwZVwiKSAhPSAtMSkgcmV0dXJuIGZhbHNlO1xuICAgIHZhciBwYXR0ZXJuID0gbmV3IFJlZ0V4cChcInNhZmFyaVwiLFwiaVwiKTtcbiAgICByZXR1cm4gcGF0dGVybi50ZXN0KHRoaXMudWEpO1xuXG4gIH1cblxuICBpc09wZXJhKCl7XG5cbiAgICAgIHZhciBwYXR0ZXJuID0gbmV3IFJlZ0V4cChcIm9wZXJhXCIsXCJpXCIpO1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdCh0aGlzLnVhKTtcblxuICB9XG5cbiAgLy8gaU9T44Guc2FmYXJp5Lul5aSW44GL44Gp44GG44GLXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNJT1NVaVZpZXcoKSB7XG5cbiAgICB2YXIgYTtcbiAgICBhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcbiAgICByZXR1cm4gKHRoaXMuaXNJb3MoKSAmJiBhLmluZGV4T2YoJ3NhZmFyaScpID09PSAtMSkgfHwgKHRoaXMuaXNJb3MoKSAmJiBhLmluZGV4T2YoJ2NyaW9zJykgPiAwKSB8fCAodGhpcy5pc0lvcygpICYmIGEuaW5kZXhPZignZ3NhJykgPiAwKTtcblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICB2ZXJzaW9uXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBJRTjku6XkuIvjgYvjganjgYbjgYtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc0llOFVuZGVyKCkge1xuXG4gICAgdmFyIG1zaWU7XG4gICAgbXNpZSA9IG5hdmlnYXRvci5hcHBWZXJzaW9uLnRvTG93ZXJDYXNlKCk7XG4gICAgbXNpZSA9IG1zaWUuaW5kZXhPZignbXNpZScpID4gLTEgPyBwYXJzZUludChtc2llLnJlcGxhY2UoLy4qbXNpZVsgXS8sICcnKS5tYXRjaCgvXlswLTldKy8pKSA6IDA7XG4gICAgcmV0dXJuIG1zaWUgPD0gOCAmJiBtc2llICE9PSAwO1xuXG4gIH1cbiAgICBcbiAgLy8gSUU55Lul5LiL44GL44Gp44GG44GLXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNJZTlVbmRlcigpIHtcblxuICAgIHZhciBtc2llO1xuICAgIG1zaWUgPSBuYXZpZ2F0b3IuYXBwVmVyc2lvbi50b0xvd2VyQ2FzZSgpO1xuICAgIG1zaWUgPSBtc2llLmluZGV4T2YoJ21zaWUnKSA+IC0xID8gcGFyc2VJbnQobXNpZS5yZXBsYWNlKC8uKm1zaWVbIF0vLCAnJykubWF0Y2goL15bMC05XSsvKSkgOiAwO1xuICAgIHJldHVybiBtc2llIDw9IDkgJiYgbXNpZSAhPT0gMDtcblxuICB9XG5cbiAgLy8gSUUxMOS7peS4i+OBi+OBqeOBhuOBi1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzSWUxMFVuZGVyKCkge1xuXG4gICAgdmFyIG1zaWU7XG4gICAgbXNpZSA9IG5hdmlnYXRvci5hcHBWZXJzaW9uLnRvTG93ZXJDYXNlKCk7XG4gICAgbXNpZSA9IG1zaWUuaW5kZXhPZignbXNpZScpID4gLTEgPyBwYXJzZUludChtc2llLnJlcGxhY2UoLy4qbXNpZVsgXS8sICcnKS5tYXRjaCgvXlswLTldKy8pKSA6IDA7XG4gICAgcmV0dXJuIG1zaWUgPD0gMTAgJiYgbXNpZSAhPT0gMDtcblxuICB9XG5cbiAgLy8gSUUxMeS7peS4i+OBi+OBqeOBhuOBi1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzSWUxMVVuZGVyKCkge1xuXG4gICAgdmFyIGIgPSB0aGlzLmlzSWUxMFVuZGVyKCkgfHwgKHRoaXMudWEuaW5kZXhPZihcInRyaWRlbnRcIikgIT0gLTEpO1xuICAgIHJldHVybiBiO1xuICAgIC8vIHJldHVybiB0cnVlO1xuXG4gIH1cblxuICAvLyBlZGdl44GL44Gp44GG44GLXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNFZGdlKCkge1xuXG4gICAgbG9nKHRoaXMudWEuaW5kZXhPZihcIkFwcGxlV2Via2l0XCIpLHRoaXMudWEuaW5kZXhPZihcIkVkZ2VcIiksdGhpcy51YSx0aGlzLmFwcFYpO1xuICAgIHZhciBiID0gKHRoaXMudWEuaW5kZXhPZihcImFwcGxld2Via2l0XCIpID49IDAgJiYgdGhpcy51YS5pbmRleE9mKFwiZWRnZVwiKSAhPSAtMSk7XG4gICAgcmV0dXJuIGI7XG4gICAgLy8gcmV0dXJuIHRydWU7XG5cbiAgfVxuXG4gIGlzSUVWZXJzaW9uKCl7XG5cbiAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2llJyk7XG4gICAgdGhpcy5pc0lFID0gdHJ1ZTtcbiAgICAgIFxuICAgIGlmICh0aGlzLmFwcFYuaW5kZXhPZihcIm1zaWUgMTAuXCIpICE9IC0xKSB7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2llMTAnKTtcbiAgICAgIHJldHVybiAnaWUxMCc7XG4gICAgfSBlbHNlIGlmICh0aGlzLmFwcFYuaW5kZXhPZihcIm1zaWUgOS5cIikgIT0gLTEpIHtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaWU5Jyk7XG4gICAgICByZXR1cm4gJ2llOSc7XG4gICAgfSBlbHNlIGlmICh0aGlzLmFwcFYuaW5kZXhPZihcIm1zaWUgOC5cIikgIT0gLTEpIHtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaWU4Jyk7ICBcbiAgICAgIHJldHVybiAnaWU4JztcbiAgICB9IGVsc2UgaWYgKHRoaXMuYXBwVi5pbmRleE9mKFwibXNpZSA3LlwiKSAhPSAtMSkge1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdpZTcnKTtcbiAgICAgIHJldHVybiAnaWU3JztcbiAgICB9IGVsc2UgaWYgKHRoaXMuYXBwVi5pbmRleE9mKFwibXNpZSA2LlwiKSAhPSAtMSkge1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdpZTYnKTtcbiAgICAgIHJldHVybiAnaWU2JztcbiAgICB9IGVsc2UgaWYgKHRoaXMuYXBwVi5pbmRleE9mKFwidHJpZGVudFwiKSAhPSAtMSkge1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdpZTExJyk7XG4gICAgICB0aGlzLmlzSUUxMSA9IHRydWU7XG4gICAgICByZXR1cm4gJ2llMTEnO1xuICAgIH0gZWxzZSBpZiAodGhpcy51YS5pbmRleE9mKFwiYXBwbGV3ZWJraXRcIikgPj0gMCAmJiB0aGlzLnVhLmluZGV4T2YoXCJlZGdlXCIpICE9IC0xKSB7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2lzRWRnZScpO1xuICAgICAgcmV0dXJuICdlZGdlJztcbiAgICB9XG5cblxuICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnaWUnKTtcbiAgICB0aGlzLmlzSUUgPSBmYWxzZTtcblxuICB9XG5cbiAgaXNBbmRyb2lkVmVyc2lvbigpIHtcblxuICAgIGlmKCB0aGlzLnVhLmluZGV4T2YoXCJhbmRyb2lkXCIpID4gMCApIHtcblxuICAgICAgICB2YXIgdmVyc2lvbiA9IHBhcnNlRmxvYXQodGhpcy51YS5zbGljZSh0aGlzLnVhLmluZGV4T2YoXCJhbmRyb2lkXCIpKzgpKTtcbiAgICAgICAgcmV0dXJuIHZlcnNpb247XG4gICAgICAgIFxuICAgIH1cblxuICB9XG5cbiAgaXNpcGhvbmVWZXJzaW9uKCkge1xuXG4gICAgaWYoIHRoaXMudWEuaW5kZXhPZihcImlQaG9uZSBPU1wiKSA+IDAgKSB7XG5cbiAgICAgICAgdmFyIHZlcnNpb24gPSBwYXJzZUZsb2F0KHRoaXMudWEuc2xpY2UodGhpcy51YS5pbmRleE9mKFwiaVBob25lIE9TXCIpKzEwKSk7XG4gICAgICAgIHJldHVybiB2ZXJzaW9uO1xuXG4gICAgfVxuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIHBvcnRyYWl0IC8gbGFuZHNjYXBlXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc0RpcmVjdGlvbiAoKSB7XG5cbiAgICB2YXIgVyA9IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICBIID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgaWYgKEggPiBXKSB7XG4gICAgICAkKFwiYm9keVwiKS5hZGRDbGFzcyhcInBvcnRyYWl0XCIpO1xuICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJsYW5kc2NhcGVcIik7XG4gICAgfWVsc2V7XG4gICAgICAkKFwiYm9keVwiKS5hZGRDbGFzcyhcImxhbmRzY2FwZVwiKTtcbiAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwicG9ydHJhaXRcIik7XG4gICAgfVxuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIHJlc3BvbnNpdmUg5qiq5bmF44KS6KaL44KLXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc1Jlc3BvbnNpdmUgKGJwKSB7XG5cbiAgICBpZiAoYnA9PXVuZGVmaW5lZCkgYnA9Mzc1O1xuXG4gICAgdmFyIFcgPSB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgICAgSCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgIGlmIChXID4gYnApIHtcbiAgICAgIHRoaXMuaXNSZXNTUCA9IGZhbHNlO1xuICAgICAgdGhpcy5pc1Jlc1BDID0gdHJ1ZTtcbiAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnaXNSZXNwb25zaXZlU1AnKTtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaXNSZXNwb25zaXZlUEMnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc1Jlc1NQID0gdHJ1ZTtcbiAgICAgIHRoaXMuaXNSZXNQQyA9IGZhbHNlO1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdpc1Jlc3BvbnNpdmVTUCcpO1xuICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdpc1Jlc3BvbnNpdmVQQycpO1xuICAgIH1cblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBVUkxcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8g44Kv44Ko44Oq5oqc44GN5Ye644GXXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEBrZXkgOiDmipzjgY3lh7rjgZnjg5Hjg6njg6Hjg7zjgr/lkI0oU3RyaW5nKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBnZXRRdWVyeShrZXkpIHtcblxuICAvLyAgIHZhciBxcywgcmVnZXg7XG4gIC8vICAga2V5ID0ga2V5LnJlcGxhY2UoL1vigqxbXS8sIFwi4oKs4oKs4oKsW1wiKS5yZXBsYWNlKC9b4oKsXV0vLCBcIuKCrOKCrOKCrF1cIik7XG4gIC8vICAgcmVnZXggPSBuZXcgUmVnRXhwKFwiW+KCrOKCrD8mXVwiICsga2V5ICsgXCI9KFteJiNdKilcIik7XG4gIC8vICAgcXMgPSByZWdleC5leGVjKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgLy8gICBpZiAocXMgPT09IG51bGwpIHtcbiAgLy8gICAgIHJldHVybiBcIlwiO1xuICAvLyAgIH0gZWxzZSB7XG4gIC8vICAgICByZXR1cm4gcXNbMV07XG4gIC8vICAgfVxuXG4gIC8vIH1cblxuICBnZXRQYXJhbSgpIHtcblxuICAgIHZhciB1cmwgPSBsb2NhdGlvbi5ocmVmO1xuICAgIHZhciBwYXJhbSA9IHVybC5zcGxpdCgnPycpWzFdO1xuICAgIGlmIChwYXJhbT09dW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIHZhciBwYXJhbUl0ZW1zID0gcGFyYW0uc3BsaXQoJyYnKTtcbiAgICB2YXIgbGlzdCA9IHt9O1xuICBcbiAgICBmb3IoIHZhciBpID0gMDsgaTxwYXJhbUl0ZW1zLmxlbmd0aDsgaSsrICl7XG5cbiAgICAgICAgcGFyYW1JdGVtID0gcGFyYW1JdGVtc1tpXS5zcGxpdCgnPScpO1xuICAgICAgICBsaXN0W3BhcmFtSXRlbVswXV0gPSBwYXJhbUl0ZW1bMV07XG5cbiAgICB9XG5cbiAgICByZXR1cm4gbGlzdDtcblxuICB9XG4gIFxuICAvLyDjg4/jg4Pjgrfjg6Xlj5blvpdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogbG9jYXRpb24uaGFzaOOBriPjgpLliYrpmaTjgZfjgZ/jgoTjgaRcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaGFzaCgpIHtcblxuICAgIHJldHVybiBsb2NhdGlvbi5oYXNoLnJlcGxhY2UoXCIjXCIsIFwiXCIpO1xuXG4gIH1cblxuICAvLyBjb29raWXlj5blvpdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQGtleSA6IOODkeODqeODoeODvOOCv+WQjVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBnZXRDb29raWUoa2V5KSB7XG5cbiAgICB2YXIgYSwgYXJyLCBpLCBsLCBsZW4xLCB2YWw7XG4gICAgaWYgKGRvY3VtZW50LmNvb2tpZSA9PT0gdm9pZCAwIHx8IGRvY3VtZW50LmNvb2tpZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGFyciA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjsgXCIpO1xuICAgIGZvciAoaSA9IGwgPSAwLCBsZW4xID0gYXJyLmxlbmd0aDsgbCA8IGxlbjE7IGkgPSArK2wpIHtcbiAgICAgIHZhbCA9IGFycltpXTtcbiAgICAgIGEgPSB2YWwuc3BsaXQoXCI9XCIpO1xuICAgICAgaWYgKGFbMF0gPT09IGtleSkge1xuICAgICAgICByZXR1cm4gYVsxXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG5cbiAgfSAgICAgIFxuXG4gIC8vIGNvb2tpZeioreWumlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAa2V5IDog44OR44Op44Oh44O844K/5ZCNXG4gIC8vIEB2YWwgOiDlgKRcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc2V0Q29va2llKGtleSwgdmFsKSB7XG5cbiAgICByZXR1cm4gZG9jdW1lbnQuY29va2llID0ga2V5ICsgXCI9XCIgKyB2YWw7XG5cbiAgfVxuICBcbiAgaXNQQ1NQKCkge1xuXG4gICAgdmFyIHVybCA9IGxvY2F0aW9uLmhyZWY7XG5cbiAgICBpZiAoIXRoaXMuaXNQQyAmJiAhdGhpcy5pc1RBQiAmJiAodXJsLmluZGV4T2YoJ3BjJykgIT0gLTEpKSB7XG5cbiAgICAgIGxvY2F0aW9uLmhyZWYgPSAnL29wX2dvbGRlbic7XG4gICAgXG4gICAgfSBcblxuICAgIGlmICh0aGlzLmlzUEMgJiYgdXJsLmluZGV4T2YoJ3BjJykgPT0gLTEpIHtcblxuICAgICAgbG9jYXRpb24uaHJlZiA9ICcvb3BfZ29sZGVuL3BjLyc7XG4gICAgXG4gICAgfSBcblxuICAgIGlmICh0aGlzLmlzVEFCICYmIHVybC5pbmRleE9mKCdwYycpID09IC0xKSB7XG5cbiAgICAgIGxvY2F0aW9uLmhyZWYgPSAnL29wX2dvbGRlbi9wYy8nO1xuICAgIFxuICAgIH0gXG5cbiAgICBpZiAodGhpcy5pc0NvbnRhaW4odXJsLCdyb3VsZXR0ZScpKSBsb2NhdGlvbi5ocmVmID0gJy9vcF9nb2xkZW4nO1xuICAgIGlmICh0aGlzLmlzQ29udGFpbih1cmwsJ3RvcGljcycpKSBsb2NhdGlvbi5ocmVmID0gJy9vcF9nb2xkZW4nO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIENvbG9yXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIHJnYuOBi+OCiUhFWOOCq+ODqeODvOWPluW+l1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAciA6IDB+MjU1XG4gIC8vIEBnIDogMH4yNTVcbiAgLy8gQGIgOiAwfjI1NVxuICAvLyByZXR1cm4gOiBleCBcIiNGRkZGRkZcIlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBnZXRIZXhDb2xvcihyLGcsYikge1xuICAgICAgdmFyIHN0cjtcbiAgICAgIHN0ciA9IChyIDw8IDE2IHwgZyA8PCA4IHwgYikudG9TdHJpbmcoMTYpO1xuICAgICAgcmV0dXJuIFwiI1wiICsgbmV3IEFycmF5KDcgLSBzdHIubGVuZ3RoKS5qb2luKFwiMFwiKSArIHN0cjtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgU3RyaW5nXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIGlzQ29udGFpbihzdHIsY29udGFpbikge1xuXG4gICAgLy8gc3Ry44Gu5Lit44GrLGNvbnRhaW7jgYzlrZjlnKjjgZfjgZ/jgolcbiAgICBpZiAoIHN0ci5pbmRleE9mKGNvbnRhaW4pICE9IC0xICkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIH1cblxuICAvLyAw5Z+L44KB44GnMuahgeOBq+OBmeOCi+mWouaVsFxuICBhZGQwKHN0cixudW09LTIpe1xuICAgIFxuICAgIHJldHVybiAoIFwiMDAwMDAwMDAwMDAwXCIgKyBzdHIgKS5zdWJzdHIoIG51bSApO1xuXG4gIH1cblxuICBmbG9hdEZvcm1hdCggbnVtYmVyLCBuICkge1xuXG4gICAgdmFyIF9wb3cgPSBNYXRoLnBvdyggMTAgLCBuICkgO1xuICAgIHJldHVybiBNYXRoLnJvdW5kKCBudW1iZXIgKiBfcG93ICkgLyBfcG93IDtcblxuICB9XG4gICAgXG4gIC8vIOWApOauteihqOiomFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBwcmljZShudW0pIHtcblxuICAgIHJldHVybiBTdHJpbmcobnVtKS5yZXBsYWNlKC8oXFxkKSg/PShcXGRcXGRcXGQpKyg/IVxcZCkpL2csICckMSwnKTtcblxuICB9XG5cbiAgLy8g5paH5a2X5YiX44KS5Y+N6LuiXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEBzdHIgOiDmloflrZfliJcoU3RyaW5nKVxuICAvLyByZXR1cm4gOiDmloflrZfliJcoU3RyaW5nKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzdHJSZXZlcnNlKHN0cikge1xuXG4gICAgdmFyIGksIGxlbiwgcmVzO1xuICAgIHJlcyA9IFwiXCI7XG4gICAgbGVuID0gc3RyLmxlbmd0aDtcbiAgICBpID0gMTtcbiAgICB3aGlsZSAoaSA8PSBsZW4pIHtcbiAgICAgIHJlcyArPSBzdHIuc3Vic3RyKC1pLCAxKTtcbiAgICAgIGkrKztcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcblxuICB9XG4gIFxuICAvLyDmloflrZfliJfjga7lhajnva7mj5tcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQHZhbCAgOiDmloflrZfliJdcbiAgLy8gQG9lZyAgOiDnva7mj5vliY3jga7mloflrZfliJdcbiAgLy8gQGRlc3QgOiDnva7mj5vlvozjga7mloflrZfliJdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVwbGFjZUFsbCh2YWwsIG9yZywgZGVzdCkge1xuXG4gICAgcmV0dXJuIHZhbC5zcGxpdChvcmcpLmpvaW4oZGVzdCk7XG5cbiAgfSAgICBcbiAgXG4gIHN0clJlcGxhY2Uoc3RyLCBiZWZvcmUsIGFmdGVyKSB7XG5cbiAgICB2YXIgciA9IG5ldyBSZWdFeHAoIGJlZm9yZSwgJ2cnKTtcblxuICAgIHJldHVybiBzdHIucmVwbGFjZSggciAsIGFmdGVyICk7XG5cbiAgfSAgICBcbiAgXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgRGF0ZVxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBnZXROb3coKSB7XG5cbiAgICB0aGlzLm5vdyA9IG5ldyBEYXRlKCk7XG5cbiAgfVxuXG4gIHN0YXJ0KCkge1xuXG4gICAgdGhpcy5zdGFydFRpbWUgPSB0aGlzLm5vdy5nZXRUaW1lKCk7XG5cbiAgfVxuXG4gIGVsYXBzZWQoKSB7XG5cbiAgICB0aGlzLmVsYXBzZWRUaW1lID0gdGhpcy5ub3cuZ2V0VGltZSgpIC0gdGhpcy5zdGFydFRpbWU7XG5cbiAgfVxuXG4gIG0oKSB7XG5cbiAgICByZXR1cm4gTWF0aC5mbG9vciggdGhpcy5lbGFwc2VkVGltZSArIDEwMCAvIDYwICk7XG5cbiAgfVxuXG4gIHMoKSB7XG5cbiAgICByZXR1cm4gTWF0aC5mbG9vcih0aGlzLmVsYXBzZWRUaW1lIC8gMTAwMCk7XG5cbiAgfVxuXG4gIG1zKCkge1xuXG4gICAgcmV0dXJuIHRoaXMuZWxhcHNlZFRpbWU7XG4gICAgXG4gIH1cblxuICB0aW1lKCkge1xuXG4gICAgdGhpcy5nZXROb3coKTtcblxuICAgIHRoaXMuaG91ciA9IHRoaXMubm93LmdldEhvdXJzKCk7ICAgICAgICAgIC8vIOaZglxuICAgIHRoaXMubWludXRlID0gdGhpcy5ub3cuZ2V0TWludXRlcygpOyAgICAgIC8vIOWIhlxuICAgIHRoaXMuc2Vjb25kID0gdGhpcy5ub3cuZ2V0U2Vjb25kcygpO1xuICAgIHRoaXMubWlsbFNlY29uZCA9IHRoaXMubm93LmdldE1pbGxpc2Vjb25kcygpO1xuXG4gIH1cblxuICBkYXRlKCkge1xuXG4gICAgcmV0dXJuIHRoaXMubm93LmdldERhdGUoKTtcblxuICB9XG5cbiAgbW9udGhzKCkge1xuXG4gICAgdmFyIG1vbnRoZGF5cyA9IG5ldyBBcnJheSgzMSwgMjgsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxKTtcblxuICAgIHJldHVybiB0aGlzLm5vdy5nZXRNb250aCgpICsgMTtcblxuICB9XG5cbiAgeWVhcigpIHtcblxuICAgIHJldHVybiB0aGlzLm5vdy5nZXRGdWxsWWVhcigpO1xuXG4gIH1cblxuICBkYXkoKSB7XG5cbiAgICAvLyDmm5zml6UgKOaXpeacrOiqnilcbiAgICB2YXIgd2Vla0RheUpQID0gW1wi5pelXCIsXCLmnIhcIixcIueBq1wiLFwi5rC0XCIsXCLmnKhcIixcIumHkVwiLFwi5ZyfXCJdIDtcbiAgICB2YXIgd0RKID0gd2Vla0RheUpQW3RoaXMubm93LmdldERheSgpXSA7XG5cbiAgICAvLyDmm5zml6UgKOiLseiqnilcbiAgICB2YXIgd2Vla0RheUVOID0gW1wiU3VuXCIsXCJNb25cIixcIlR1ZVwiLFwiV2VkXCIsXCJUaHVcIixcIkZyaVwiLFwiU2F0XCJdIDtcbiAgICB2YXIgd0RFID0gd2Vla0RheUVOW3RoaXMubm93LmdldERheSgpXSA7XG5cbiAgfVxuICBcbiAgLy8g5pWw5pel5b6M44GuRGF0ZeOCquODluOCuOOCp+OCr+ODiOWPluW+l1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBhZnRlckRheShkYXRlLCBudW0pIHtcblxuICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSArIE51bWJlcihudW0pICogMjQgKiA2MCAqIDYwICogMTAwMCk7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgRGF0YSB0eXBlIGNoZWNrXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIGlzT2JqZWN0KHZhbHVlLCBpZ25vcmVBcnJheSkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGw7XG4gIH1cblxuICBpc051bWJlcih2YWx1ZSkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7XG4gIH1cblxuICBpc1N0cmluZyh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7XG4gIH1cblxuICBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xuICB9XG5cbiAgaXNBcnJheSh2YWx1ZSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gIH1cblxuICBpc051bGwodmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbDtcbiAgfVxuXG4gIGlzVW5kZWZpbmVkKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJztcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgb3RoZXJcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHNldEltZ1NQU2l6ZSAoJHRhcmdldCl7XG5cbiAgICAvLyByZXNwb25zaXZlIHNw44Gu44Go44GN5Yem55CGXG4gICAgaWYgKCF0aGlzLmlzUmVzU1ApIHJldHVybjtcbiAgICAvLyDkuIDluqbjgaDjgZHlh6bnkIZcbiAgICAvLyBpZiAodGhpcy5pc1NldFNQU2l6ZSkgcmV0dXJuO1xuICAgIC8vIHRoaXMuaXNTZXRTUFNpemUgPSB0cnVlO1xuXG4gICAgdmFyICRpbWcgPSAkdGFyZ2V0LFxuICAgICAgICBsZW4gPSAkaW1nLmxlbmd0aDtcblxuICAgICRpbWcuZWFjaChmdW5jdGlvbihpKSB7XG5cbiAgICAgICAgdmFyIHcgPSBNYXRoLmZsb29yKCQodGhpcykud2lkdGgoKSAvIDIpLFxuICAgICAgICAgICAgaCA9IE1hdGguZmxvb3IoJCh0aGlzKS5oZWlnaHQoKSAvIDIpO1xuXG4gICAgICAgICQodGhpcykuYXR0cih7XG4gICAgICAgICAgICAnd2lkdGgnOiB3LFxuICAgICAgICAgICAgJ2hlaWdodCc6IGgsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChsZW4gPT0gaSArIDEpICQod2luZG93KS50cmlnZ2VyKCdzZXRTcFppZUVuZCcpO1xuXG4gICAgfSk7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyAg44K544Oe44Ob5pON5L2c54Sh5Yq5XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzZXRQcmV2ZW50KCkge1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgJCh3aW5kb3cpLm9uKCd0b3VjaG1vdmUubm9Db250cm9sJywgZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpO30pO1xuXG4gIH1cblxuICByZW1vdmVQcmV2ZW50KCkge1xuXG4gICAgJCh3aW5kb3cpLm9mZigndG91Y2htb3ZlLm5vQ29udHJvbCcpO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gIGhvc3QscHJvdGNvbFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcHJvdG9jb2woKSB7XG5cbiAgICByZXR1cm4gbG9jYXRpb24ucHJvdG9jb2w7XG5cbiAgfVxuICAgIFxuICBob3N0KCkge1xuXG4gICAgcmV0dXJuIGxvY2F0aW9uLmhvc3RuYW1lO1xuICAgIC8vIHJldHVybiBsb2NhdGlvbi5ob3N0XG5cbiAgfVxuXG4gIHBvcnQoKSB7XG5cbiAgICByZXR1cm4gbG9jYXRpb24ucG9ydDtcblxuICB9XG4gICAgICAgIFxuICBwYXRoKCkge1xuXG4gICAgcmV0dXJuIGxvY2F0aW9uLnBhdGhuYW1lO1xuXG4gIH1cblxuICBwcmV2ZW50RGVmYXVsdChlKSB7XG5cbiAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgaWYgKGUucHJldmVudERlZmF1bHQpXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnJldHVyblZhbHVlID0gZmFsc2U7XG5cbiAgfVxuXG4gIHByZXZlbnREZWZhdWx0Rm9yU2Nyb2xsS2V5cyhlKSB7XG5cbiAgICBpZiAoa2V5c1tlLmtleUNvZGVdKSB7XG4gICAgICAgIHByZXZlbnREZWZhdWx0KGUpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gIH1cblxuICBkaXNhYmxlU2Nyb2xsKCkge1xuXG4gICAgaWYgKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSAvLyBvbGRlciBGRlxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NTW91c2VTY3JvbGwnLCB0aGlzLnByZXZlbnREZWZhdWx0LCBmYWxzZSk7XG4gICAgd2luZG93Lm9ud2hlZWwgPSB0aGlzLnByZXZlbnREZWZhdWx0OyAvLyBtb2Rlcm4gc3RhbmRhcmRcbiAgICB3aW5kb3cub25tb3VzZXdoZWVsID0gZG9jdW1lbnQub25tb3VzZXdoZWVsID0gdGhpcy5wcmV2ZW50RGVmYXVsdDsgLy8gb2xkZXIgYnJvd3NlcnMsIElFXG4gICAgd2luZG93Lm9udG91Y2htb3ZlICA9IHRoaXMucHJldmVudERlZmF1bHQ7IC8vIG1vYmlsZVxuICAgIGRvY3VtZW50Lm9ua2V5ZG93biAgPSB0aGlzLnByZXZlbnREZWZhdWx0Rm9yU2Nyb2xsS2V5cztcblxuICB9XG5cbiAgZW5hYmxlU2Nyb2xsKCkge1xuXG4gICAgaWYgKHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKVxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NTW91c2VTY3JvbGwnLCB0aGlzLnByZXZlbnREZWZhdWx0LCBmYWxzZSk7XG4gICAgd2luZG93Lm9ubW91c2V3aGVlbCA9IGRvY3VtZW50Lm9ubW91c2V3aGVlbCA9IG51bGw7IFxuICAgIHdpbmRvdy5vbndoZWVsID0gbnVsbDsgXG4gICAgd2luZG93Lm9udG91Y2htb3ZlID0gbnVsbDtcbiAgICBkb2N1bWVudC5vbmtleWRvd24gPSBudWxsO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvbXlsaWJzL1V0aWwuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBGdW5jXG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1bmMge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5ibGFuaygpO1xuICAgIHRoaXMuZGVidWdnZXIoKTtcbiAgICB0aGlzLnJlcXVlc3RBbmltYXRpb25GcmFtZSgpO1xuICAgIHRoaXMuZXhwYW5kalF1ZXJ5KCk7XG5cbiAgfVxuXG4gIGJsYW5rKCkge1xuXG4gICAgJCgoKT0+eyQoJy5ibGFuaycpLmF0dHIoJ3RhcmdldCcsICdfYmxhbmsnKTt9KTtcblxuICB9XG5cbiAgZGVidWdnZXIoKSB7XG5cbiAgICAvLyDjg4fjg5Djg4PjgrDjg6Ljg7zjg4nliIfmm79cbiAgICB2YXIgUkVMRUFTRSA9IGdiLmluLmNvbmYuUkVMRUFTRTtcblxuICAgIC8vIOe9ruaPm+WvvuixoeOBruODoeOCveODg+ODieOCkumFjeWIl+OBqOOBl+OBpuS/neaMgeOBmeOCi1xuICAgIHZhciBtZXRob2RzID0gW1xuICAgICAgJ2xvZycsXG4gICAgICAnZGVidWcnLFxuICAgICAgJ2luZm8nLFxuICAgICAgJ3dhcm4nLFxuICAgICAgJ2Vycm9yJyxcbiAgICAgICdkaXInLFxuICAgICAgJ3RyYWNlJyxcbiAgICAgICdhc3NlcnQnLFxuICAgICAgJ2RpcnhtbCcsXG4gICAgICAnZ3JvdXAnLFxuICAgICAgJ2dyb3VwRW5kJyxcbiAgICAgICd0aW1lJyxcbiAgICAgICd0aW1lRW5kJyxcbiAgICAgICdjb3VudCcsXG4gICAgICAncHJvZmlsZScsXG4gICAgICAncHJvZmlsZUVuZCdcbiAgICBdO1xuXG4gICAgLy8gY29uc29sZeOBjOS9v+OBiOOBquOBhOWgtOWQiOOBr+epuuOBruOCquODluOCuOOCp+OCr+ODiOOCkuioreWumuOBl+OBpuOBiuOBj1xuICAgIGlmKCB0eXBlb2Ygd2luZG93LmNvbnNvbGUgPT09IFwidW5kZWZpbmVkXCIgKXtcbiAgICAgIHdpbmRvdy5jb25zb2xlID0ge307XG4gICAgfVxuXG4gICAgLy8g5ZCE44Oh44K944OD44OJ44KSd2luZG9344G455u05o6l6L+95Yqg44GX44Gm6KGM44GPXG4gICAgZm9yKCB2YXIgaSBpbiBtZXRob2RzICl7XG4gICAgICAoZnVuY3Rpb24oIG0gKXtcblxuICAgICAgIC8vIGNvbnNvbGXjgavjgYLjgovvvJ/jg4fjg5Djg4PjgrDjg6Ljg7zjg4njga/mnInlirnvvJ9jb25zb2xl44Gu44KC44Gu44Gv6Zai5pWw77yfXG4gICAgICAgaWYoIGNvbnNvbGVbbV0gJiYgIVJFTEVBU0UgJiYgdHlwZW9mIGNvbnNvbGVbbV0gPT09IFwiZnVuY3Rpb25cIiApe1xuICAgICAgICB3aW5kb3dbbV0gPSBjb25zb2xlW21dLmJpbmQoY29uc29sZSk7XG4gICAgICAgfSBlbHNlIHvjgIAvLyBkZWJ1Z01vZGXjgYxmYWxzZSzjgoLjgZfjgY/jga/oqbLlvZPjg6Hjgr3jg4Pjg4njgYzlrZjlnKjjgZfjgarjgYTloLTlkIjjga/jgIHnqbrjga7jg6Hjgr3jg4Pjg4njgpLnlKjmhI/jgZnjgotcbiAgICAgICAgd2luZG93W21dID0gZnVuY3Rpb24oKXt9O1xuICAgICAgIH1cblxuICAgICAgfSkoIG1ldGhvZHNbaV0gKTtcbiAgICB9XG5cbiAgfVxuXG4gIHByZXBlbmQocGFyYW0pIHtcblxuICAgICQoJ2JvZHknKS5wcmVwZW5kKHBhcmFtKTtcblxuICB9XG5cbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCkge1xuXG4gICAgdmFyIEZQUyA9IDEwMDAvNjA7XG5cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCAvLyBjaHJvbWXjgoTmnIDmlrDjga5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCAvLyDlj6TjgYRmaXJlZm9455SoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgIC8vIHNhZmFyaTbku6XliY3jgIFpT1M2IHNhZmFyaeeUqFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiggY2FsbGJhY2sgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIEZQUyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubW96Q2FuY2VsQW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiggdGltZXIgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9OyAgICAgIFxuXG4gIH1cblxuICBleHBhbmRqUXVlcnkoKSB7XG5cbiAgICBqUXVlcnkuZm4uZXh0ZW5kKHtcbiAgICAgIHc6MCwgXG4gICAgICBoOjAsIFxuICAgICAgYWRqdXN0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgdyA9ICQodGhpcykuaW5uZXJXaWR0aCgpO1xuICAgICAgICAgIHZhciBoID0gJCh0aGlzKS5pbm5lckhlaWdodCgpO1xuICAgICAgICAgICQodGhpcykuY3NzKHtcbiAgICAgICAgICAgICdwb3NpdGlvbic6J2Fic29sdXRlJyxcbiAgICAgICAgICAgICdsZWZ0JzonNTAlJyxcbiAgICAgICAgICAgICd0b3AnOic1MCUnLFxuICAgICAgICAgICAgJ21hcmdpbi1sZWZ0JzonLScgKyAodyAvIDIpICsgJ3B4JyxcbiAgICAgICAgICAgICdtYXJnaW4tdG9wJzonLScgKyAoaCAvIDIpICsgJ3B4J1xuICAgICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGFkanVzdFc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciB3ID0gJCh0aGlzKS5pbm5lcldpZHRoKCk7XG4gICAgICAgICAgdmFyIGggPSAkKHRoaXMpLmlubmVySGVpZ2h0KCk7XG4gICAgICAgICAgJCh0aGlzKS5jc3Moe1xuICAgICAgICAgICAgJ3Bvc2l0aW9uJzonYWJzb2x1dGUnLFxuICAgICAgICAgICAgJ2xlZnQnOic1MCUnLFxuICAgICAgICAgICAgJ21hcmdpbi1sZWZ0JzonLScgKyAodyAvIDIpICsgJ3B4J1xuICAgICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGFkanVzdEg6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciB3ID0gJCh0aGlzKS5pbm5lcldpZHRoKCk7XG4gICAgICAgICAgdmFyIGggPSAkKHRoaXMpLmlubmVySGVpZ2h0KCk7XG4gICAgICAgICAgJCh0aGlzKS5jc3Moe1xuICAgICAgICAgICAgJ3Bvc2l0aW9uJzonYWJzb2x1dGUnLFxuICAgICAgICAgICAgJ3RvcCc6JzUwJScsXG4gICAgICAgICAgICAnbWFyZ2luLXRvcCc6Jy0nICsgKGggLyAyKSArICdweCdcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICB9XG5cbiAgY2hlY2tDc3NCbGVuZCgpIHtcblxuICAgIGlmICgnQ1NTJyBpbiB3aW5kb3cgJiYgJ3N1cHBvcnRzJyBpbiB3aW5kb3cuQ1NTKSB7XG4gICAgICBpZiAoIXdpbmRvdy5DU1Muc3VwcG9ydHMoJ21peC1ibGVuZC1tb2RlJywgJ3NvZnQtbGlnaHQnKSkge1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbm90LW1peC1ibGVuZC1tb2RlJylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsb2coZ2IuaW4udS5pc0lFKTtcblxuICAgIGlmIChnYi5pbi51LmlzSUUpIHtcbiAgICAgIFxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25vdC1taXgtYmxlbmQtbW9kZScpXG4gICAgICBcbiAgICB9O1xuXG4gIH1cblxuICBub3RTYXZlSW1nKCkge1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgcGNcbiAgICAvL1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgaWYgKGdiLmluLnUuaXNQQykge1xuXG4gICAgICAkKCgpPT57XG4gICAgICAgICQoXCJpbWdcIikub24oXCJjb250ZXh0bWVudVwiLCgpPT57XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KVxuICAgICAgfSlcblxuICAgIH1cblxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgc3AgYW5kcm9pZFxuICAgIC8vXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdmFyIHYgPSBnYi5pbi51LmlzQW5kcm9pZFZlcnNpb24oKTtcblxuICAgIGlmICh2PT11bmRlZmluZWQpIHJldHVybjtcbiAgICBpZiAodjw1KSB7XG5cbiAgICAgIHZhciB0aW1lcjtcbiAgICAgICQoXCJpbWdcIikub24oXCJ0b3VjaHN0YXJ0XCIsKCk9PntcbiAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgYWxlcnQoXCLnlLvlg4/jga/kv53lrZjjgafjgY3jgb7jgZvjgpNcIilcbiAgICAgICAgfSw1MDApXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pXG4gICAgICAkKFwiaW1nXCIpLm9uKFwidG91Y2hlbmRcIiwoKT0+e1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KSAgICAgIFxuXG4gICAgfVxuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvbXlsaWJzL0Z1bmMuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBNYWluXG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbmltcG9ydCBEaXNwbGF5VG9wIGZyb20gJy4uL0Rpc3BsYXkvRGlzcGxheVRvcCc7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLm9uSW1tZWRpYXRlKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgb25JbW1lZGlhdGUoKSB7XG5cbiAgfVxuXG4gIG9uUmVhZHkoKSB7XG5cbiAgICAvL3BhZ2Xjg5rjg7zjgrjliKXjga5JROOCkuWPluW+l1xuICAgIHZhciBwYWdlID0gJCgnYm9keScpLmRhdGEoJ2lkJyk7XG5cbiAgICB3aW5kb3cuY29uc29sZS5sb2coJ+ePvuWcqOOBruODmuODvOOCuElE44GvICcsIHBhZ2UpO1xuXG5cdFx0Ly9wYWdl44GuSUTjgZTjgajjgavnmbrngavjgZnjgovjgq/jg6njgrnjga7mjK/jgorliIbjgZFcbiAgICBzd2l0Y2ggKHBhZ2UpIHtcblxuICAgICAgY2FzZSAndG9wJzpcblxuICAgICAgICBuZXcgRGlzcGxheVRvcCgpO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgfVxuXG4gIH1cblxuICBvbkxvYWQoKSB7XG5cbiAgICBcbiAgfVxuXG4gIG9uUmVuZGVyKCkge1xuXG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdyZWFkeScsIHRoaXMub25SZWFkeS5iaW5kKHRoaXMpKTtcbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCB0aGlzLm9uTG9hZC5iaW5kKHRoaXMpKTsgICAgICAgIFxuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvcGFnZS9NYWluLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogRGlzcGxheVxuICogRGF0ZTpcbiAqIEF1dGhvcjpcbiAqL1xuXG4vLyBpbXBvcnQgV2ViR0xpbml0IGZyb20gJy4vV2ViR0xpbml0LmpzJztcblxuaW1wb3J0IENhbnZhcyBmcm9tIFwiLi4vdmlzdWFsL0NhbnZhc1wiO1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3BsYXlUb3Age1xuXG4gIGNvbnN0cnVjdG9yKCl7XG5cbiAgICB0aGlzLm9uSW1tZWRpYXRlKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgb25JbW1lZGlhdGUoKSB7XG5cbiAgICAvLyDjgqLjg4vjg6Hjg7zjgrfjg6fjg7Pjg6vjg7zjg5fjgrnjgr/jg7zjg4hcbiAgICAvLyBnYi5pbi51cC5sb29wKCk7XG4gICAgXG4gIH1cblxuICBvbkxvYWQoKSB7XG5cbiAgICBnYi5pbi5jYW52YXMgPSBuZXcgQ2FudmFzKHtcbiAgICAgIG91dHB1dDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYmdsLW91dHB1dCcpXG4gICAgfSk7XG5cbiAgICAvLyBnYi5pbi5jYW52YXMuaW5pdCgpO1xuXG5cbiAgfVxuXG4gIHN0YXRpYyBydW4oKSB7XG5cblx0XHQvLyB3aW5kb3cuY29uc29sZS5sb2coJ3N0YXRpY19SdW4nKTtcblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgdGhpcy5vbkxvYWQuYmluZCh0aGlzKSk7ICAgICAgICBcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRGlzcGxheVRvcC5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IENhbnZhc1xuICogRGF0ZTpcbiAqIEF1dGhvcjpcbiAqL1xuXG5pbXBvcnQgRW50cnkgZnJvbSAnLi4vQ29yZS9FbnRyeSc7XG4vLyBpbXBvcnQgQ2FtZXJhIGZyb20gJy4vVXRpbHMvQ2FtZXJhLmpzJztcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMgZXh0ZW5kcyBFbnRyeXtcblxuICBjb25zdHJ1Y3RvcihvcHRzID0ge30pIHtcblxuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgdGhpcy5vdXRwdXQgPSBvcHRzLm91dHB1dCB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHRoaXMuY2FtZXJhID0gbnVsbDtcbiAgICB0aGlzLnJlbmRlcmVyID0gbnVsbDtcbiAgICB0aGlzLnNjZW5lID0gbnVsbDtcblx0XHR0aGlzLmN1YmUgPSBudWxsO1xuXG4gICAgdGhpcy5jcmVhdGVDYW1lcmEgPSB0aGlzLl9jcmVhdGVDYW1lcmEuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNyZWF0ZVJlbmRlcmVyID0gdGhpcy5fY3JlYXRlUmVuZGVyZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNyZWF0ZVNjZW5lID0gdGhpcy5fY3JlYXRlU2NlbmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNyZWF0ZU9iamVjdCA9IHRoaXMuX2NyZWF0ZU9iamVjdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMub3JiaXRDb250cm9scyA9IHRoaXMuX29yYml0Q29udHJvbHMuYmluZCh0aGlzKTtcblxuICAgIHRoaXMub25SZXNpemUgPSB0aGlzLl9vblJlc2l6ZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5VcGRhdGUgPSB0aGlzLl9VcGRhdGUuYmluZCh0aGlzKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIOWIneacn+WMllxuICAgKi9cbiAgaW5pdCgpe1xuXG4gICAgdGhpcy5jcmVhdGVDYW1lcmEoKTtcblx0XHR0aGlzLmNyZWF0ZVNjZW5lKCk7XG4gICAgdGhpcy5jcmVhdGVSZW5kZXJlcigpO1xuXG5cdFx0dGhpcy5vcmJpdENvbnRyb2xzKCk7XG5cblx0XHR0aGlzLmNyZWF0ZU9iamVjdCgpO1xuXG4gICAgdGhpcy5VcGRhdGUoKTtcblxuICAgIC8v44Oq44K144Kk44K644Kk44OZ44Oz44OI55m654GrXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgIHRoaXMub25SZXNpemUoKTtcbiAgICB9LCBmYWxzZSk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiDjgqvjg6Hjg6nkvZzmiJBcbiAgICovXG4gIF9jcmVhdGVDYW1lcmEoKXtcblxuICAgIHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDQ1LCB0aGlzLndpZHRoIC8gdGhpcy5oZWlnaHQsIDAuMSwgMTAwMCk7XG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueCA9IC0zMDtcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi55ID0gNDA7XG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IDMwO1xuXG4gICAgdGhpcy5jYW1lcmEubG9va0F0KG5ldyBUSFJFRS5WZWN0b3IzKDAsMCwwKSk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiDjg6zjg7Pjg4Djg6njg7zkvZzmiJBcbiAgICovXG4gIF9jcmVhdGVSZW5kZXJlcigpe1xuXG5cdFx0dGhpcy5yZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHtcbiAgICAgIGFscGhhICAgICAgICAgICAgICA6IGZhbHNlLFxuICAgICAgYW50aWFsaWFzICAgICAgICAgIDogZmFsc2UsXG4gICAgICBzdGVuY2lsICAgICAgICAgICAgOiBmYWxzZSxcbiAgICAgIGRlcHRoICAgICAgICAgICAgICA6IHRydWUsXG4gICAgICBwcmVtdWx0aXBsaWVkQWxwaGEgOiBmYWxzZVxuXHRcdH0pO1xuXG4gICAgdGhpcy5yZW5kZXJlci5zZXRDbGVhckNvbG9yKDB4ZmZmZmZmKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFBpeGVsUmF0aW8od2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMSk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB0aGlzLm91dHB1dC5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQpO1xuXG4gIH1cblxuICAvKipcbiAgICrjgIDjgrfjg7zjg7PkvZzmiJBcbiAgICovXG4gIF9jcmVhdGVTY2VuZSgpe1xuXG5cdFx0dGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuXG4gIH1cblxuXHQvKipcblx0ICrjgIBPYmplY3TkvZzmiJBcblx0ICovXG5cdF9jcmVhdGVPYmplY3QoKXtcblxuICAgIHZhciBjdWJlR2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoNCwgNCwgNCk7XG4gICAgdmFyIGN1YmVNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7XG4gICAgICBjb2xvcjogMHgwMDAwMDAsXG4gICAgICB3aXJlZnJhbWU6IHRydWVcbiAgICB9KTtcblxuICAgIHRoaXMuY3ViZSA9IG5ldyBUSFJFRS5NZXNoKGN1YmVHZW9tZXRyeSwgY3ViZU1hdGVyaWFsKTtcbiAgICB0aGlzLmN1YmUucG9zaXRpb24ueCA9IDM7XG4gICAgdGhpcy5jdWJlLnBvc2l0aW9uLnkgPSAzO1xuICAgIHRoaXMuY3ViZS5wb3NpdGlvbi56ID0gMztcblxuICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMuY3ViZSk7XG5cblx0fVxuXG4gIC8qKlxuICAgKuOAgOabtOaWsFxuICAgKi9cbiAgX1VwZGF0ZSgpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICgpID0+IHtcbiAgICAgIHRoaXMuVXBkYXRlKCk7XG4gICAgfSk7XG4gICAgLy8gdGhpcy5jb250cm9scy51cGRhdGUoKTtcbiAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSk7XG4gIH1cblxuICAvKipcbiAgICrjgIDnlLvpnaLjg6rjgrXjgqTjgrpcbiAgICovXG4gIF9vblJlc2l6ZSgpIHtcbiAgICB0aGlzLmNhbWVyYS5hc3BlY3QgPSB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICB0aGlzLmNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICB9XG5cblx0LyoqXG4gICAqIOOCq+ODoeODqeOCs+ODs+ODiOODreODvOODq1xuXHQgKi9cblx0X29yYml0Q29udHJvbHMoKXtcblx0XHR0aGlzLmNvbnRyb2xzID0gbmV3IFRIUkVFLk9yYml0Q29udHJvbHModGhpcy5jYW1lcmEpO1xuXHRcdHRoaXMuY29udHJvbHMuYXV0b1JvdGF0ZSA9IHRydWU7XG5cdFx0dmFyIGNsb2NrID0gbmV3IFRIUkVFLkNsb2NrKCk7XG5cblx0XHR2YXIgZGVsdGEgPSBjbG9jay5nZXREZWx0YSgpO1xuXHRcdHRoaXMuY29udHJvbHMudXBkYXRlKGRlbHRhKTtcbiAgfVxuXG5cdHNldEV2ZW50cygpIHtcblxuICAgICQod2luZG93KS5vbignbG9hZCcsIHRoaXMub25Mb2FkLmJpbmQodGhpcykpO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdmlzdWFsL0NhbnZhcy5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IEVudHJ5XG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbnJlcXVpcmUoJy4uLy4uL2xpYnMvT3JiaXRDb250cm9scy5qcycpO1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVudHJ5IHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblxuXHR9XG5cblx0LyoqXG5cdCAqIOWIneacn+WMllxuXHQgKi9cblx0aW5pdCgpe1xuXG5cdH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvQ29yZS9FbnRyeS5qcyIsIi8qKlxuICogQGF1dGhvciBxaWFvIC8gaHR0cHM6Ly9naXRodWIuY29tL3FpYW9cbiAqIEBhdXRob3IgbXJkb29iIC8gaHR0cDovL21yZG9vYi5jb21cbiAqIEBhdXRob3IgYWx0ZXJlZHEgLyBodHRwOi8vYWx0ZXJlZHF1YWxpYS5jb20vXG4gKiBAYXV0aG9yIFdlc3RMYW5nbGV5IC8gaHR0cDovL2dpdGh1Yi5jb20vV2VzdExhbmdsZXlcbiAqIEBhdXRob3IgZXJpY2g2NjYgLyBodHRwOi8vZXJpY2hhaW5lcy5jb21cbiAqL1xuXG4vLyBUaGlzIHNldCBvZiBjb250cm9scyBwZXJmb3JtcyBvcmJpdGluZywgZG9sbHlpbmcgKHpvb21pbmcpLCBhbmQgcGFubmluZy5cbi8vIFVubGlrZSBUcmFja2JhbGxDb250cm9scywgaXQgbWFpbnRhaW5zIHRoZSBcInVwXCIgZGlyZWN0aW9uIG9iamVjdC51cCAoK1kgYnkgZGVmYXVsdCkuXG4vL1xuLy8gICAgT3JiaXQgLSBsZWZ0IG1vdXNlIC8gdG91Y2g6IG9uZSBmaW5nZXIgbW92ZVxuLy8gICAgWm9vbSAtIG1pZGRsZSBtb3VzZSwgb3IgbW91c2V3aGVlbCAvIHRvdWNoOiB0d28gZmluZ2VyIHNwcmVhZCBvciBzcXVpc2hcbi8vICAgIFBhbiAtIHJpZ2h0IG1vdXNlLCBvciBhcnJvdyBrZXlzIC8gdG91Y2g6IHRocmVlIGZpbnRlciBzd2lwZVxuXG5USFJFRS5PcmJpdENvbnRyb2xzID0gZnVuY3Rpb24gKCBvYmplY3QsIGRvbUVsZW1lbnQgKSB7XG5cblx0dGhpcy5vYmplY3QgPSBvYmplY3Q7XG5cblx0dGhpcy5kb21FbGVtZW50ID0gKCBkb21FbGVtZW50ICE9PSB1bmRlZmluZWQgKSA/IGRvbUVsZW1lbnQgOiBkb2N1bWVudDtcblxuXHQvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSB0aGlzIGNvbnRyb2xcblx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcblxuXHQvLyBcInRhcmdldFwiIHNldHMgdGhlIGxvY2F0aW9uIG9mIGZvY3VzLCB3aGVyZSB0aGUgb2JqZWN0IG9yYml0cyBhcm91bmRcblx0dGhpcy50YXJnZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG5cdC8vIEhvdyBmYXIgeW91IGNhbiBkb2xseSBpbiBhbmQgb3V0ICggUGVyc3BlY3RpdmVDYW1lcmEgb25seSApXG5cdHRoaXMubWluRGlzdGFuY2UgPSAwO1xuXHR0aGlzLm1heERpc3RhbmNlID0gSW5maW5pdHk7XG5cblx0Ly8gSG93IGZhciB5b3UgY2FuIHpvb20gaW4gYW5kIG91dCAoIE9ydGhvZ3JhcGhpY0NhbWVyYSBvbmx5IClcblx0dGhpcy5taW5ab29tID0gMDtcblx0dGhpcy5tYXhab29tID0gSW5maW5pdHk7XG5cblx0Ly8gSG93IGZhciB5b3UgY2FuIG9yYml0IHZlcnRpY2FsbHksIHVwcGVyIGFuZCBsb3dlciBsaW1pdHMuXG5cdC8vIFJhbmdlIGlzIDAgdG8gTWF0aC5QSSByYWRpYW5zLlxuXHR0aGlzLm1pblBvbGFyQW5nbGUgPSAwOyAvLyByYWRpYW5zXG5cdHRoaXMubWF4UG9sYXJBbmdsZSA9IE1hdGguUEk7IC8vIHJhZGlhbnNcblxuXHQvLyBIb3cgZmFyIHlvdSBjYW4gb3JiaXQgaG9yaXpvbnRhbGx5LCB1cHBlciBhbmQgbG93ZXIgbGltaXRzLlxuXHQvLyBJZiBzZXQsIG11c3QgYmUgYSBzdWItaW50ZXJ2YWwgb2YgdGhlIGludGVydmFsIFsgLSBNYXRoLlBJLCBNYXRoLlBJIF0uXG5cdHRoaXMubWluQXppbXV0aEFuZ2xlID0gLSBJbmZpbml0eTsgLy8gcmFkaWFuc1xuXHR0aGlzLm1heEF6aW11dGhBbmdsZSA9IEluZmluaXR5OyAvLyByYWRpYW5zXG5cblx0Ly8gU2V0IHRvIHRydWUgdG8gZW5hYmxlIGRhbXBpbmcgKGluZXJ0aWEpXG5cdC8vIElmIGRhbXBpbmcgaXMgZW5hYmxlZCwgeW91IG11c3QgY2FsbCBjb250cm9scy51cGRhdGUoKSBpbiB5b3VyIGFuaW1hdGlvbiBsb29wXG5cdHRoaXMuZW5hYmxlRGFtcGluZyA9IGZhbHNlO1xuXHR0aGlzLmRhbXBpbmdGYWN0b3IgPSAwLjI1O1xuXG5cdC8vIFRoaXMgb3B0aW9uIGFjdHVhbGx5IGVuYWJsZXMgZG9sbHlpbmcgaW4gYW5kIG91dDsgbGVmdCBhcyBcInpvb21cIiBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG5cdC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHpvb21pbmdcblx0dGhpcy5lbmFibGVab29tID0gdHJ1ZTtcblx0dGhpcy56b29tU3BlZWQgPSAxLjA7XG5cblx0Ly8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgcm90YXRpbmdcblx0dGhpcy5lbmFibGVSb3RhdGUgPSB0cnVlO1xuXHR0aGlzLnJvdGF0ZVNwZWVkID0gMS4wO1xuXG5cdC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHBhbm5pbmdcblx0dGhpcy5lbmFibGVQYW4gPSB0cnVlO1xuXHR0aGlzLmtleVBhblNwZWVkID0gNy4wO1x0Ly8gcGl4ZWxzIG1vdmVkIHBlciBhcnJvdyBrZXkgcHVzaFxuXG5cdC8vIFNldCB0byB0cnVlIHRvIGF1dG9tYXRpY2FsbHkgcm90YXRlIGFyb3VuZCB0aGUgdGFyZ2V0XG5cdC8vIElmIGF1dG8tcm90YXRlIGlzIGVuYWJsZWQsIHlvdSBtdXN0IGNhbGwgY29udHJvbHMudXBkYXRlKCkgaW4geW91ciBhbmltYXRpb24gbG9vcFxuXHR0aGlzLmF1dG9Sb3RhdGUgPSBmYWxzZTtcblx0dGhpcy5hdXRvUm90YXRlU3BlZWQgPSAyLjA7IC8vIDMwIHNlY29uZHMgcGVyIHJvdW5kIHdoZW4gZnBzIGlzIDYwXG5cblx0Ly8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgdXNlIG9mIHRoZSBrZXlzXG5cdHRoaXMuZW5hYmxlS2V5cyA9IHRydWU7XG5cblx0Ly8gVGhlIGZvdXIgYXJyb3cga2V5c1xuXHR0aGlzLmtleXMgPSB7IExFRlQ6IDM3LCBVUDogMzgsIFJJR0hUOiAzOSwgQk9UVE9NOiA0MCB9O1xuXG5cdC8vIE1vdXNlIGJ1dHRvbnNcblx0dGhpcy5tb3VzZUJ1dHRvbnMgPSB7IE9SQklUOiBUSFJFRS5NT1VTRS5MRUZULCBaT09NOiBUSFJFRS5NT1VTRS5NSURETEUsIFBBTjogVEhSRUUuTU9VU0UuUklHSFQgfTtcblxuXHQvLyBmb3IgcmVzZXRcblx0dGhpcy50YXJnZXQwID0gdGhpcy50YXJnZXQuY2xvbmUoKTtcblx0dGhpcy5wb3NpdGlvbjAgPSB0aGlzLm9iamVjdC5wb3NpdGlvbi5jbG9uZSgpO1xuXHR0aGlzLnpvb20wID0gdGhpcy5vYmplY3Quem9vbTtcblxuXHQvL1xuXHQvLyBwdWJsaWMgbWV0aG9kc1xuXHQvL1xuXG5cdHRoaXMuZ2V0UG9sYXJBbmdsZSA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdHJldHVybiBzcGhlcmljYWwucGhpO1xuXG5cdH07XG5cblx0dGhpcy5nZXRBemltdXRoYWxBbmdsZSA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdHJldHVybiBzcGhlcmljYWwudGhldGE7XG5cblx0fTtcblxuXHR0aGlzLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0c2NvcGUudGFyZ2V0LmNvcHkoIHNjb3BlLnRhcmdldDAgKTtcblx0XHRzY29wZS5vYmplY3QucG9zaXRpb24uY29weSggc2NvcGUucG9zaXRpb24wICk7XG5cdFx0c2NvcGUub2JqZWN0Lnpvb20gPSBzY29wZS56b29tMDtcblxuXHRcdHNjb3BlLm9iamVjdC51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggY2hhbmdlRXZlbnQgKTtcblxuXHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdFx0c3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdH07XG5cblx0Ly8gdGhpcyBtZXRob2QgaXMgZXhwb3NlZCwgYnV0IHBlcmhhcHMgaXQgd291bGQgYmUgYmV0dGVyIGlmIHdlIGNhbiBtYWtlIGl0IHByaXZhdGUuLi5cblx0dGhpcy51cGRhdGUgPSBmdW5jdGlvbigpIHtcblxuXHRcdHZhciBvZmZzZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG5cdFx0Ly8gc28gY2FtZXJhLnVwIGlzIHRoZSBvcmJpdCBheGlzXG5cdFx0dmFyIHF1YXQgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpLnNldEZyb21Vbml0VmVjdG9ycyggb2JqZWN0LnVwLCBuZXcgVEhSRUUuVmVjdG9yMyggMCwgMSwgMCApICk7XG5cdFx0dmFyIHF1YXRJbnZlcnNlID0gcXVhdC5jbG9uZSgpLmludmVyc2UoKTtcblxuXHRcdHZhciBsYXN0UG9zaXRpb24gPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXHRcdHZhciBsYXN0UXVhdGVybmlvbiA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XG5cblx0XHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlICgpIHtcblxuXHRcdFx0dmFyIHBvc2l0aW9uID0gc2NvcGUub2JqZWN0LnBvc2l0aW9uO1xuXG5cdFx0XHRvZmZzZXQuY29weSggcG9zaXRpb24gKS5zdWIoIHNjb3BlLnRhcmdldCApO1xuXG5cdFx0XHQvLyByb3RhdGUgb2Zmc2V0IHRvIFwieS1heGlzLWlzLXVwXCIgc3BhY2Vcblx0XHRcdG9mZnNldC5hcHBseVF1YXRlcm5pb24oIHF1YXQgKTtcblxuXHRcdFx0Ly8gYW5nbGUgZnJvbSB6LWF4aXMgYXJvdW5kIHktYXhpc1xuXHRcdFx0c3BoZXJpY2FsLnNldEZyb21WZWN0b3IzKCBvZmZzZXQgKTtcblxuXHRcdFx0aWYgKCBzY29wZS5hdXRvUm90YXRlICYmIHN0YXRlID09PSBTVEFURS5OT05FICkge1xuXG5cdFx0XHRcdHJvdGF0ZUxlZnQoIGdldEF1dG9Sb3RhdGlvbkFuZ2xlKCkgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRzcGhlcmljYWwudGhldGEgKz0gc3BoZXJpY2FsRGVsdGEudGhldGE7XG5cdFx0XHRzcGhlcmljYWwucGhpICs9IHNwaGVyaWNhbERlbHRhLnBoaTtcblxuXHRcdFx0Ly8gcmVzdHJpY3QgdGhldGEgdG8gYmUgYmV0d2VlbiBkZXNpcmVkIGxpbWl0c1xuXHRcdFx0c3BoZXJpY2FsLnRoZXRhID0gTWF0aC5tYXgoIHNjb3BlLm1pbkF6aW11dGhBbmdsZSwgTWF0aC5taW4oIHNjb3BlLm1heEF6aW11dGhBbmdsZSwgc3BoZXJpY2FsLnRoZXRhICkgKTtcblxuXHRcdFx0Ly8gcmVzdHJpY3QgcGhpIHRvIGJlIGJldHdlZW4gZGVzaXJlZCBsaW1pdHNcblx0XHRcdHNwaGVyaWNhbC5waGkgPSBNYXRoLm1heCggc2NvcGUubWluUG9sYXJBbmdsZSwgTWF0aC5taW4oIHNjb3BlLm1heFBvbGFyQW5nbGUsIHNwaGVyaWNhbC5waGkgKSApO1xuXG5cdFx0XHRzcGhlcmljYWwubWFrZVNhZmUoKTtcblxuXG5cdFx0XHRzcGhlcmljYWwucmFkaXVzICo9IHNjYWxlO1xuXG5cdFx0XHQvLyByZXN0cmljdCByYWRpdXMgdG8gYmUgYmV0d2VlbiBkZXNpcmVkIGxpbWl0c1xuXHRcdFx0c3BoZXJpY2FsLnJhZGl1cyA9IE1hdGgubWF4KCBzY29wZS5taW5EaXN0YW5jZSwgTWF0aC5taW4oIHNjb3BlLm1heERpc3RhbmNlLCBzcGhlcmljYWwucmFkaXVzICkgKTtcblxuXHRcdFx0Ly8gbW92ZSB0YXJnZXQgdG8gcGFubmVkIGxvY2F0aW9uXG5cdFx0XHRzY29wZS50YXJnZXQuYWRkKCBwYW5PZmZzZXQgKTtcblxuXHRcdFx0b2Zmc2V0LnNldEZyb21TcGhlcmljYWwoIHNwaGVyaWNhbCApO1xuXG5cdFx0XHQvLyByb3RhdGUgb2Zmc2V0IGJhY2sgdG8gXCJjYW1lcmEtdXAtdmVjdG9yLWlzLXVwXCIgc3BhY2Vcblx0XHRcdG9mZnNldC5hcHBseVF1YXRlcm5pb24oIHF1YXRJbnZlcnNlICk7XG5cblx0XHRcdHBvc2l0aW9uLmNvcHkoIHNjb3BlLnRhcmdldCApLmFkZCggb2Zmc2V0ICk7XG5cblx0XHRcdHNjb3BlLm9iamVjdC5sb29rQXQoIHNjb3BlLnRhcmdldCApO1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZURhbXBpbmcgPT09IHRydWUgKSB7XG5cblx0XHRcdFx0c3BoZXJpY2FsRGVsdGEudGhldGEgKj0gKCAxIC0gc2NvcGUuZGFtcGluZ0ZhY3RvciApO1xuXHRcdFx0XHRzcGhlcmljYWxEZWx0YS5waGkgKj0gKCAxIC0gc2NvcGUuZGFtcGluZ0ZhY3RvciApO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdHNwaGVyaWNhbERlbHRhLnNldCggMCwgMCwgMCApO1xuXG5cdFx0XHR9XG5cblx0XHRcdHNjYWxlID0gMTtcblx0XHRcdHBhbk9mZnNldC5zZXQoIDAsIDAsIDAgKTtcblxuXHRcdFx0Ly8gdXBkYXRlIGNvbmRpdGlvbiBpczpcblx0XHRcdC8vIG1pbihjYW1lcmEgZGlzcGxhY2VtZW50LCBjYW1lcmEgcm90YXRpb24gaW4gcmFkaWFucyleMiA+IEVQU1xuXHRcdFx0Ly8gdXNpbmcgc21hbGwtYW5nbGUgYXBwcm94aW1hdGlvbiBjb3MoeC8yKSA9IDEgLSB4XjIgLyA4XG5cblx0XHRcdGlmICggem9vbUNoYW5nZWQgfHxcblx0XHRcdFx0bGFzdFBvc2l0aW9uLmRpc3RhbmNlVG9TcXVhcmVkKCBzY29wZS5vYmplY3QucG9zaXRpb24gKSA+IEVQUyB8fFxuXHRcdFx0XHQ4ICogKCAxIC0gbGFzdFF1YXRlcm5pb24uZG90KCBzY29wZS5vYmplY3QucXVhdGVybmlvbiApICkgPiBFUFMgKSB7XG5cblx0XHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggY2hhbmdlRXZlbnQgKTtcblxuXHRcdFx0XHRsYXN0UG9zaXRpb24uY29weSggc2NvcGUub2JqZWN0LnBvc2l0aW9uICk7XG5cdFx0XHRcdGxhc3RRdWF0ZXJuaW9uLmNvcHkoIHNjb3BlLm9iamVjdC5xdWF0ZXJuaW9uICk7XG5cdFx0XHRcdHpvb21DaGFuZ2VkID0gZmFsc2U7XG5cblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXG5cdFx0fTtcblxuXHR9KCk7XG5cblx0dGhpcy5kaXNwb3NlID0gZnVuY3Rpb24oKSB7XG5cblx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdjb250ZXh0bWVudScsIG9uQ29udGV4dE1lbnUsIGZhbHNlICk7XG5cdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2Vkb3duJywgb25Nb3VzZURvd24sIGZhbHNlICk7XG5cdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnd2hlZWwnLCBvbk1vdXNlV2hlZWwsIGZhbHNlICk7XG5cblx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0LCBmYWxzZSApO1xuXHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNoZW5kJywgb25Ub3VjaEVuZCwgZmFsc2UgKTtcblx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSwgZmFsc2UgKTtcblxuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSwgZmFsc2UgKTtcblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2V1cCcsIG9uTW91c2VVcCwgZmFsc2UgKTtcblxuXHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCAna2V5ZG93bicsIG9uS2V5RG93biwgZmFsc2UgKTtcblxuXHRcdC8vc2NvcGUuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnZGlzcG9zZScgfSApOyAvLyBzaG91bGQgdGhpcyBiZSBhZGRlZCBoZXJlP1xuXG5cdH07XG5cblx0Ly9cblx0Ly8gaW50ZXJuYWxzXG5cdC8vXG5cblx0dmFyIHNjb3BlID0gdGhpcztcblxuXHR2YXIgY2hhbmdlRXZlbnQgPSB7IHR5cGU6ICdjaGFuZ2UnIH07XG5cdHZhciBzdGFydEV2ZW50ID0geyB0eXBlOiAnc3RhcnQnIH07XG5cdHZhciBlbmRFdmVudCA9IHsgdHlwZTogJ2VuZCcgfTtcblxuXHR2YXIgU1RBVEUgPSB7IE5PTkUgOiAtIDEsIFJPVEFURSA6IDAsIERPTExZIDogMSwgUEFOIDogMiwgVE9VQ0hfUk9UQVRFIDogMywgVE9VQ0hfRE9MTFkgOiA0LCBUT1VDSF9QQU4gOiA1IH07XG5cblx0dmFyIHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHR2YXIgRVBTID0gMC4wMDAwMDE7XG5cblx0Ly8gY3VycmVudCBwb3NpdGlvbiBpbiBzcGhlcmljYWwgY29vcmRpbmF0ZXNcblx0dmFyIHNwaGVyaWNhbCA9IG5ldyBUSFJFRS5TcGhlcmljYWwoKTtcblx0dmFyIHNwaGVyaWNhbERlbHRhID0gbmV3IFRIUkVFLlNwaGVyaWNhbCgpO1xuXG5cdHZhciBzY2FsZSA9IDE7XG5cdHZhciBwYW5PZmZzZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXHR2YXIgem9vbUNoYW5nZWQgPSBmYWxzZTtcblxuXHR2YXIgcm90YXRlU3RhcnQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXHR2YXIgcm90YXRlRW5kID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblx0dmFyIHJvdGF0ZURlbHRhID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblxuXHR2YXIgcGFuU3RhcnQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXHR2YXIgcGFuRW5kID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblx0dmFyIHBhbkRlbHRhID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblxuXHR2YXIgZG9sbHlTdGFydCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdHZhciBkb2xseUVuZCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdHZhciBkb2xseURlbHRhID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblxuXHRmdW5jdGlvbiBnZXRBdXRvUm90YXRpb25BbmdsZSgpIHtcblxuXHRcdHJldHVybiAyICogTWF0aC5QSSAvIDYwIC8gNjAgKiBzY29wZS5hdXRvUm90YXRlU3BlZWQ7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGdldFpvb21TY2FsZSgpIHtcblxuXHRcdHJldHVybiBNYXRoLnBvdyggMC45NSwgc2NvcGUuem9vbVNwZWVkICk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIHJvdGF0ZUxlZnQoIGFuZ2xlICkge1xuXG5cdFx0c3BoZXJpY2FsRGVsdGEudGhldGEgLT0gYW5nbGU7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIHJvdGF0ZVVwKCBhbmdsZSApIHtcblxuXHRcdHNwaGVyaWNhbERlbHRhLnBoaSAtPSBhbmdsZTtcblxuXHR9XG5cblx0dmFyIHBhbkxlZnQgPSBmdW5jdGlvbigpIHtcblxuXHRcdHZhciB2ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuXHRcdHJldHVybiBmdW5jdGlvbiBwYW5MZWZ0KCBkaXN0YW5jZSwgb2JqZWN0TWF0cml4ICkge1xuXG5cdFx0XHR2LnNldEZyb21NYXRyaXhDb2x1bW4oIG9iamVjdE1hdHJpeCwgMCApOyAvLyBnZXQgWCBjb2x1bW4gb2Ygb2JqZWN0TWF0cml4XG5cdFx0XHR2Lm11bHRpcGx5U2NhbGFyKCAtIGRpc3RhbmNlICk7XG5cblx0XHRcdHBhbk9mZnNldC5hZGQoIHYgKTtcblxuXHRcdH07XG5cblx0fSgpO1xuXG5cdHZhciBwYW5VcCA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0dmFyIHYgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG5cdFx0cmV0dXJuIGZ1bmN0aW9uIHBhblVwKCBkaXN0YW5jZSwgb2JqZWN0TWF0cml4ICkge1xuXG5cdFx0XHR2LnNldEZyb21NYXRyaXhDb2x1bW4oIG9iamVjdE1hdHJpeCwgMSApOyAvLyBnZXQgWSBjb2x1bW4gb2Ygb2JqZWN0TWF0cml4XG5cdFx0XHR2Lm11bHRpcGx5U2NhbGFyKCBkaXN0YW5jZSApO1xuXG5cdFx0XHRwYW5PZmZzZXQuYWRkKCB2ICk7XG5cblx0XHR9O1xuXG5cdH0oKTtcblxuXHQvLyBkZWx0YVggYW5kIGRlbHRhWSBhcmUgaW4gcGl4ZWxzOyByaWdodCBhbmQgZG93biBhcmUgcG9zaXRpdmVcblx0dmFyIHBhbiA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0dmFyIG9mZnNldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cblx0XHRyZXR1cm4gZnVuY3Rpb24gcGFuICggZGVsdGFYLCBkZWx0YVkgKSB7XG5cblx0XHRcdHZhciBlbGVtZW50ID0gc2NvcGUuZG9tRWxlbWVudCA9PT0gZG9jdW1lbnQgPyBzY29wZS5kb21FbGVtZW50LmJvZHkgOiBzY29wZS5kb21FbGVtZW50O1xuXG5cdFx0XHRpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhICkge1xuXG5cdFx0XHRcdC8vIHBlcnNwZWN0aXZlXG5cdFx0XHRcdHZhciBwb3NpdGlvbiA9IHNjb3BlLm9iamVjdC5wb3NpdGlvbjtcblx0XHRcdFx0b2Zmc2V0LmNvcHkoIHBvc2l0aW9uICkuc3ViKCBzY29wZS50YXJnZXQgKTtcblx0XHRcdFx0dmFyIHRhcmdldERpc3RhbmNlID0gb2Zmc2V0Lmxlbmd0aCgpO1xuXG5cdFx0XHRcdC8vIGhhbGYgb2YgdGhlIGZvdiBpcyBjZW50ZXIgdG8gdG9wIG9mIHNjcmVlblxuXHRcdFx0XHR0YXJnZXREaXN0YW5jZSAqPSBNYXRoLnRhbiggKCBzY29wZS5vYmplY3QuZm92IC8gMiApICogTWF0aC5QSSAvIDE4MC4wICk7XG5cblx0XHRcdFx0Ly8gd2UgYWN0dWFsbHkgZG9uJ3QgdXNlIHNjcmVlbldpZHRoLCBzaW5jZSBwZXJzcGVjdGl2ZSBjYW1lcmEgaXMgZml4ZWQgdG8gc2NyZWVuIGhlaWdodFxuXHRcdFx0XHRwYW5MZWZ0KCAyICogZGVsdGFYICogdGFyZ2V0RGlzdGFuY2UgLyBlbGVtZW50LmNsaWVudEhlaWdodCwgc2NvcGUub2JqZWN0Lm1hdHJpeCApO1xuXHRcdFx0XHRwYW5VcCggMiAqIGRlbHRhWSAqIHRhcmdldERpc3RhbmNlIC8gZWxlbWVudC5jbGllbnRIZWlnaHQsIHNjb3BlLm9iamVjdC5tYXRyaXggKTtcblxuXHRcdFx0fSBlbHNlIGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhICkge1xuXG5cdFx0XHRcdC8vIG9ydGhvZ3JhcGhpY1xuXHRcdFx0XHRwYW5MZWZ0KCBkZWx0YVggKiAoIHNjb3BlLm9iamVjdC5yaWdodCAtIHNjb3BlLm9iamVjdC5sZWZ0ICkgLyBzY29wZS5vYmplY3Quem9vbSAvIGVsZW1lbnQuY2xpZW50V2lkdGgsIHNjb3BlLm9iamVjdC5tYXRyaXggKTtcblx0XHRcdFx0cGFuVXAoIGRlbHRhWSAqICggc2NvcGUub2JqZWN0LnRvcCAtIHNjb3BlLm9iamVjdC5ib3R0b20gKSAvIHNjb3BlLm9iamVjdC56b29tIC8gZWxlbWVudC5jbGllbnRIZWlnaHQsIHNjb3BlLm9iamVjdC5tYXRyaXggKTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHQvLyBjYW1lcmEgbmVpdGhlciBvcnRob2dyYXBoaWMgbm9yIHBlcnNwZWN0aXZlXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1dBUk5JTkc6IE9yYml0Q29udHJvbHMuanMgZW5jb3VudGVyZWQgYW4gdW5rbm93biBjYW1lcmEgdHlwZSAtIHBhbiBkaXNhYmxlZC4nICk7XG5cdFx0XHRcdHNjb3BlLmVuYWJsZVBhbiA9IGZhbHNlO1xuXG5cdFx0XHR9XG5cblx0XHR9O1xuXG5cdH0oKTtcblxuXHRmdW5jdGlvbiBkb2xseUluKCBkb2xseVNjYWxlICkge1xuXG5cdFx0aWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSApIHtcblxuXHRcdFx0c2NhbGUgLz0gZG9sbHlTY2FsZTtcblxuXHRcdH0gZWxzZSBpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYSApIHtcblxuXHRcdFx0c2NvcGUub2JqZWN0Lnpvb20gPSBNYXRoLm1heCggc2NvcGUubWluWm9vbSwgTWF0aC5taW4oIHNjb3BlLm1heFpvb20sIHNjb3BlLm9iamVjdC56b29tICogZG9sbHlTY2FsZSApICk7XG5cdFx0XHRzY29wZS5vYmplY3QudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXHRcdFx0em9vbUNoYW5nZWQgPSB0cnVlO1xuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnV0FSTklORzogT3JiaXRDb250cm9scy5qcyBlbmNvdW50ZXJlZCBhbiB1bmtub3duIGNhbWVyYSB0eXBlIC0gZG9sbHkvem9vbSBkaXNhYmxlZC4nICk7XG5cdFx0XHRzY29wZS5lbmFibGVab29tID0gZmFsc2U7XG5cblx0XHR9XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGRvbGx5T3V0KCBkb2xseVNjYWxlICkge1xuXG5cdFx0aWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSApIHtcblxuXHRcdFx0c2NhbGUgKj0gZG9sbHlTY2FsZTtcblxuXHRcdH0gZWxzZSBpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYSApIHtcblxuXHRcdFx0c2NvcGUub2JqZWN0Lnpvb20gPSBNYXRoLm1heCggc2NvcGUubWluWm9vbSwgTWF0aC5taW4oIHNjb3BlLm1heFpvb20sIHNjb3BlLm9iamVjdC56b29tIC8gZG9sbHlTY2FsZSApICk7XG5cdFx0XHRzY29wZS5vYmplY3QudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXHRcdFx0em9vbUNoYW5nZWQgPSB0cnVlO1xuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnV0FSTklORzogT3JiaXRDb250cm9scy5qcyBlbmNvdW50ZXJlZCBhbiB1bmtub3duIGNhbWVyYSB0eXBlIC0gZG9sbHkvem9vbSBkaXNhYmxlZC4nICk7XG5cdFx0XHRzY29wZS5lbmFibGVab29tID0gZmFsc2U7XG5cblx0XHR9XG5cblx0fVxuXG5cdC8vXG5cdC8vIGV2ZW50IGNhbGxiYWNrcyAtIHVwZGF0ZSB0aGUgb2JqZWN0IHN0YXRlXG5cdC8vXG5cblx0ZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duUm90YXRlKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZURvd25Sb3RhdGUnICk7XG5cblx0XHRyb3RhdGVTdGFydC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duRG9sbHkoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlRG93bkRvbGx5JyApO1xuXG5cdFx0ZG9sbHlTdGFydC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duUGFuKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZURvd25QYW4nICk7XG5cblx0XHRwYW5TdGFydC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlTW91c2VNb3ZlUm90YXRlKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZU1vdmVSb3RhdGUnICk7XG5cblx0XHRyb3RhdGVFbmQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cdFx0cm90YXRlRGVsdGEuc3ViVmVjdG9ycyggcm90YXRlRW5kLCByb3RhdGVTdGFydCApO1xuXG5cdFx0dmFyIGVsZW1lbnQgPSBzY29wZS5kb21FbGVtZW50ID09PSBkb2N1bWVudCA/IHNjb3BlLmRvbUVsZW1lbnQuYm9keSA6IHNjb3BlLmRvbUVsZW1lbnQ7XG5cblx0XHQvLyByb3RhdGluZyBhY3Jvc3Mgd2hvbGUgc2NyZWVuIGdvZXMgMzYwIGRlZ3JlZXMgYXJvdW5kXG5cdFx0cm90YXRlTGVmdCggMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS54IC8gZWxlbWVudC5jbGllbnRXaWR0aCAqIHNjb3BlLnJvdGF0ZVNwZWVkICk7XG5cblx0XHQvLyByb3RhdGluZyB1cCBhbmQgZG93biBhbG9uZyB3aG9sZSBzY3JlZW4gYXR0ZW1wdHMgdG8gZ28gMzYwLCBidXQgbGltaXRlZCB0byAxODBcblx0XHRyb3RhdGVVcCggMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS55IC8gZWxlbWVudC5jbGllbnRIZWlnaHQgKiBzY29wZS5yb3RhdGVTcGVlZCApO1xuXG5cdFx0cm90YXRlU3RhcnQuY29weSggcm90YXRlRW5kICk7XG5cblx0XHRzY29wZS51cGRhdGUoKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlTW91c2VNb3ZlRG9sbHkoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlTW92ZURvbGx5JyApO1xuXG5cdFx0ZG9sbHlFbmQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cblx0XHRkb2xseURlbHRhLnN1YlZlY3RvcnMoIGRvbGx5RW5kLCBkb2xseVN0YXJ0ICk7XG5cblx0XHRpZiAoIGRvbGx5RGVsdGEueSA+IDAgKSB7XG5cblx0XHRcdGRvbGx5SW4oIGdldFpvb21TY2FsZSgpICk7XG5cblx0XHR9IGVsc2UgaWYgKCBkb2xseURlbHRhLnkgPCAwICkge1xuXG5cdFx0XHRkb2xseU91dCggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdH1cblxuXHRcdGRvbGx5U3RhcnQuY29weSggZG9sbHlFbmQgKTtcblxuXHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVNb3VzZU1vdmVQYW4oIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlTW92ZVBhbicgKTtcblxuXHRcdHBhbkVuZC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuXHRcdHBhbkRlbHRhLnN1YlZlY3RvcnMoIHBhbkVuZCwgcGFuU3RhcnQgKTtcblxuXHRcdHBhbiggcGFuRGVsdGEueCwgcGFuRGVsdGEueSApO1xuXG5cdFx0cGFuU3RhcnQuY29weSggcGFuRW5kICk7XG5cblx0XHRzY29wZS51cGRhdGUoKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlTW91c2VVcCggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VVcCcgKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlTW91c2VXaGVlbCggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VXaGVlbCcgKTtcblxuXHRcdGlmICggZXZlbnQuZGVsdGFZIDwgMCApIHtcblxuXHRcdFx0ZG9sbHlPdXQoIGdldFpvb21TY2FsZSgpICk7XG5cblx0XHR9IGVsc2UgaWYgKCBldmVudC5kZWx0YVkgPiAwICkge1xuXG5cdFx0XHRkb2xseUluKCBnZXRab29tU2NhbGUoKSApO1xuXG5cdFx0fVxuXG5cdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZUtleURvd24oIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZUtleURvd24nICk7XG5cblx0XHRzd2l0Y2ggKCBldmVudC5rZXlDb2RlICkge1xuXG5cdFx0XHRjYXNlIHNjb3BlLmtleXMuVVA6XG5cdFx0XHRcdHBhbiggMCwgc2NvcGUua2V5UGFuU3BlZWQgKTtcblx0XHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIHNjb3BlLmtleXMuQk9UVE9NOlxuXHRcdFx0XHRwYW4oIDAsIC0gc2NvcGUua2V5UGFuU3BlZWQgKTtcblx0XHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIHNjb3BlLmtleXMuTEVGVDpcblx0XHRcdFx0cGFuKCBzY29wZS5rZXlQYW5TcGVlZCwgMCApO1xuXHRcdFx0XHRzY29wZS51cGRhdGUoKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2Ugc2NvcGUua2V5cy5SSUdIVDpcblx0XHRcdFx0cGFuKCAtIHNjb3BlLmtleVBhblNwZWVkLCAwICk7XG5cdFx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdH1cblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hTdGFydFJvdGF0ZSggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hTdGFydFJvdGF0ZScgKTtcblxuXHRcdHJvdGF0ZVN0YXJ0LnNldCggZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYLCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hTdGFydERvbGx5KCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaFN0YXJ0RG9sbHknICk7XG5cblx0XHR2YXIgZHggPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVggLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVg7XG5cdFx0dmFyIGR5ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VZO1xuXG5cdFx0dmFyIGRpc3RhbmNlID0gTWF0aC5zcXJ0KCBkeCAqIGR4ICsgZHkgKiBkeSApO1xuXG5cdFx0ZG9sbHlTdGFydC5zZXQoIDAsIGRpc3RhbmNlICk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZVRvdWNoU3RhcnRQYW4oIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoU3RhcnRQYW4nICk7XG5cblx0XHRwYW5TdGFydC5zZXQoIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCwgZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZICk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZVRvdWNoTW92ZVJvdGF0ZSggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hNb3ZlUm90YXRlJyApO1xuXG5cdFx0cm90YXRlRW5kLnNldCggZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYLCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgKTtcblx0XHRyb3RhdGVEZWx0YS5zdWJWZWN0b3JzKCByb3RhdGVFbmQsIHJvdGF0ZVN0YXJ0ICk7XG5cblx0XHR2YXIgZWxlbWVudCA9IHNjb3BlLmRvbUVsZW1lbnQgPT09IGRvY3VtZW50ID8gc2NvcGUuZG9tRWxlbWVudC5ib2R5IDogc2NvcGUuZG9tRWxlbWVudDtcblxuXHRcdC8vIHJvdGF0aW5nIGFjcm9zcyB3aG9sZSBzY3JlZW4gZ29lcyAzNjAgZGVncmVlcyBhcm91bmRcblx0XHRyb3RhdGVMZWZ0KCAyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnggLyBlbGVtZW50LmNsaWVudFdpZHRoICogc2NvcGUucm90YXRlU3BlZWQgKTtcblxuXHRcdC8vIHJvdGF0aW5nIHVwIGFuZCBkb3duIGFsb25nIHdob2xlIHNjcmVlbiBhdHRlbXB0cyB0byBnbyAzNjAsIGJ1dCBsaW1pdGVkIHRvIDE4MFxuXHRcdHJvdGF0ZVVwKCAyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnkgLyBlbGVtZW50LmNsaWVudEhlaWdodCAqIHNjb3BlLnJvdGF0ZVNwZWVkICk7XG5cblx0XHRyb3RhdGVTdGFydC5jb3B5KCByb3RhdGVFbmQgKTtcblxuXHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmVEb2xseSggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hNb3ZlRG9sbHknICk7XG5cblx0XHR2YXIgZHggPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVggLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVg7XG5cdFx0dmFyIGR5ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VZO1xuXG5cdFx0dmFyIGRpc3RhbmNlID0gTWF0aC5zcXJ0KCBkeCAqIGR4ICsgZHkgKiBkeSApO1xuXG5cdFx0ZG9sbHlFbmQuc2V0KCAwLCBkaXN0YW5jZSApO1xuXG5cdFx0ZG9sbHlEZWx0YS5zdWJWZWN0b3JzKCBkb2xseUVuZCwgZG9sbHlTdGFydCApO1xuXG5cdFx0aWYgKCBkb2xseURlbHRhLnkgPiAwICkge1xuXG5cdFx0XHRkb2xseU91dCggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdH0gZWxzZSBpZiAoIGRvbGx5RGVsdGEueSA8IDAgKSB7XG5cblx0XHRcdGRvbGx5SW4oIGdldFpvb21TY2FsZSgpICk7XG5cblx0XHR9XG5cblx0XHRkb2xseVN0YXJ0LmNvcHkoIGRvbGx5RW5kICk7XG5cblx0XHRzY29wZS51cGRhdGUoKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hNb3ZlUGFuKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaE1vdmVQYW4nICk7XG5cblx0XHRwYW5FbmQuc2V0KCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSApO1xuXG5cdFx0cGFuRGVsdGEuc3ViVmVjdG9ycyggcGFuRW5kLCBwYW5TdGFydCApO1xuXG5cdFx0cGFuKCBwYW5EZWx0YS54LCBwYW5EZWx0YS55ICk7XG5cblx0XHRwYW5TdGFydC5jb3B5KCBwYW5FbmQgKTtcblxuXHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVUb3VjaEVuZCggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hFbmQnICk7XG5cblx0fVxuXG5cdC8vXG5cdC8vIGV2ZW50IGhhbmRsZXJzIC0gRlNNOiBsaXN0ZW4gZm9yIGV2ZW50cyBhbmQgcmVzZXQgc3RhdGVcblx0Ly9cblxuXHRmdW5jdGlvbiBvbk1vdXNlRG93biggZXZlbnQgKSB7XG5cblx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGlmICggZXZlbnQuYnV0dG9uID09PSBzY29wZS5tb3VzZUJ1dHRvbnMuT1JCSVQgKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlUm90YXRlID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0aGFuZGxlTW91c2VEb3duUm90YXRlKCBldmVudCApO1xuXG5cdFx0XHRzdGF0ZSA9IFNUQVRFLlJPVEFURTtcblxuXHRcdH0gZWxzZSBpZiAoIGV2ZW50LmJ1dHRvbiA9PT0gc2NvcGUubW91c2VCdXR0b25zLlpPT00gKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlWm9vbSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGhhbmRsZU1vdXNlRG93bkRvbGx5KCBldmVudCApO1xuXG5cdFx0XHRzdGF0ZSA9IFNUQVRFLkRPTExZO1xuXG5cdFx0fSBlbHNlIGlmICggZXZlbnQuYnV0dG9uID09PSBzY29wZS5tb3VzZUJ1dHRvbnMuUEFOICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGhhbmRsZU1vdXNlRG93blBhbiggZXZlbnQgKTtcblxuXHRcdFx0c3RhdGUgPSBTVEFURS5QQU47XG5cblx0XHR9XG5cblx0XHRpZiAoIHN0YXRlICE9PSBTVEFURS5OT05FICkge1xuXG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUsIGZhbHNlICk7XG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2V1cCcsIG9uTW91c2VVcCwgZmFsc2UgKTtcblxuXHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggc3RhcnRFdmVudCApO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRmdW5jdGlvbiBvbk1vdXNlTW92ZSggZXZlbnQgKSB7XG5cblx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGlmICggc3RhdGUgPT09IFNUQVRFLlJPVEFURSApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVSb3RhdGUgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRoYW5kbGVNb3VzZU1vdmVSb3RhdGUoIGV2ZW50ICk7XG5cblx0XHR9IGVsc2UgaWYgKCBzdGF0ZSA9PT0gU1RBVEUuRE9MTFkgKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlWm9vbSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGhhbmRsZU1vdXNlTW92ZURvbGx5KCBldmVudCApO1xuXG5cdFx0fSBlbHNlIGlmICggc3RhdGUgPT09IFNUQVRFLlBBTiApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRoYW5kbGVNb3VzZU1vdmVQYW4oIGV2ZW50ICk7XG5cblx0XHR9XG5cblx0fVxuXG5cdGZ1bmN0aW9uIG9uTW91c2VVcCggZXZlbnQgKSB7XG5cblx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0aGFuZGxlTW91c2VVcCggZXZlbnQgKTtcblxuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSwgZmFsc2UgKTtcblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2V1cCcsIG9uTW91c2VVcCwgZmFsc2UgKTtcblxuXHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIGVuZEV2ZW50ICk7XG5cblx0XHRzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIG9uTW91c2VXaGVlbCggZXZlbnQgKSB7XG5cblx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlIHx8IHNjb3BlLmVuYWJsZVpvb20gPT09IGZhbHNlIHx8ICggc3RhdGUgIT09IFNUQVRFLk5PTkUgJiYgc3RhdGUgIT09IFNUQVRFLlJPVEFURSApICkgcmV0dXJuO1xuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdGhhbmRsZU1vdXNlV2hlZWwoIGV2ZW50ICk7XG5cblx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBzdGFydEV2ZW50ICk7IC8vIG5vdCBzdXJlIHdoeSB0aGVzZSBhcmUgaGVyZS4uLlxuXHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIGVuZEV2ZW50ICk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIG9uS2V5RG93biggZXZlbnQgKSB7XG5cblx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlIHx8IHNjb3BlLmVuYWJsZUtleXMgPT09IGZhbHNlIHx8IHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRoYW5kbGVLZXlEb3duKCBldmVudCApO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBvblRvdWNoU3RhcnQoIGV2ZW50ICkge1xuXG5cdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdHN3aXRjaCAoIGV2ZW50LnRvdWNoZXMubGVuZ3RoICkge1xuXG5cdFx0XHRjYXNlIDE6XHQvLyBvbmUtZmluZ2VyZWQgdG91Y2g6IHJvdGF0ZVxuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlUm90YXRlID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRoYW5kbGVUb3VjaFN0YXJ0Um90YXRlKCBldmVudCApO1xuXG5cdFx0XHRcdHN0YXRlID0gU1RBVEUuVE9VQ0hfUk9UQVRFO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDI6XHQvLyB0d28tZmluZ2VyZWQgdG91Y2g6IGRvbGx5XG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVab29tID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRoYW5kbGVUb3VjaFN0YXJ0RG9sbHkoIGV2ZW50ICk7XG5cblx0XHRcdFx0c3RhdGUgPSBTVEFURS5UT1VDSF9ET0xMWTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAzOiAvLyB0aHJlZS1maW5nZXJlZCB0b3VjaDogcGFuXG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdGhhbmRsZVRvdWNoU3RhcnRQYW4oIGV2ZW50ICk7XG5cblx0XHRcdFx0c3RhdGUgPSBTVEFURS5UT1VDSF9QQU47XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGRlZmF1bHQ6XG5cblx0XHRcdFx0c3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBzdGF0ZSAhPT0gU1RBVEUuTk9ORSApIHtcblxuXHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggc3RhcnRFdmVudCApO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRmdW5jdGlvbiBvblRvdWNoTW92ZSggZXZlbnQgKSB7XG5cblx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdHN3aXRjaCAoIGV2ZW50LnRvdWNoZXMubGVuZ3RoICkge1xuXG5cdFx0XHRjYXNlIDE6IC8vIG9uZS1maW5nZXJlZCB0b3VjaDogcm90YXRlXG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVSb3RhdGUgPT09IGZhbHNlICkgcmV0dXJuO1xuXHRcdFx0XHRpZiAoIHN0YXRlICE9PSBTVEFURS5UT1VDSF9ST1RBVEUgKSByZXR1cm47IC8vIGlzIHRoaXMgbmVlZGVkPy4uLlxuXG5cdFx0XHRcdGhhbmRsZVRvdWNoTW92ZVJvdGF0ZSggZXZlbnQgKTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAyOiAvLyB0d28tZmluZ2VyZWQgdG91Y2g6IGRvbGx5XG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVab29tID09PSBmYWxzZSApIHJldHVybjtcblx0XHRcdFx0aWYgKCBzdGF0ZSAhPT0gU1RBVEUuVE9VQ0hfRE9MTFkgKSByZXR1cm47IC8vIGlzIHRoaXMgbmVlZGVkPy4uLlxuXG5cdFx0XHRcdGhhbmRsZVRvdWNoTW92ZURvbGx5KCBldmVudCApO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDM6IC8vIHRocmVlLWZpbmdlcmVkIHRvdWNoOiBwYW5cblxuXHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UgKSByZXR1cm47XG5cdFx0XHRcdGlmICggc3RhdGUgIT09IFNUQVRFLlRPVUNIX1BBTiApIHJldHVybjsgLy8gaXMgdGhpcyBuZWVkZWQ/Li4uXG5cblx0XHRcdFx0aGFuZGxlVG91Y2hNb3ZlUGFuKCBldmVudCApO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRkZWZhdWx0OlxuXG5cdFx0XHRcdHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHRcdH1cblxuXHR9XG5cblx0ZnVuY3Rpb24gb25Ub3VjaEVuZCggZXZlbnQgKSB7XG5cblx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0aGFuZGxlVG91Y2hFbmQoIGV2ZW50ICk7XG5cblx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBlbmRFdmVudCApO1xuXG5cdFx0c3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBvbkNvbnRleHRNZW51KCBldmVudCApIHtcblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0fVxuXG5cdC8vXG5cblx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnY29udGV4dG1lbnUnLCBvbkNvbnRleHRNZW51LCBmYWxzZSApO1xuXG5cdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlZG93bicsIG9uTW91c2VEb3duLCBmYWxzZSApO1xuXHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd3aGVlbCcsIG9uTW91c2VXaGVlbCwgZmFsc2UgKTtcblxuXHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0LCBmYWxzZSApO1xuXHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaGVuZCcsIG9uVG91Y2hFbmQsIGZhbHNlICk7XG5cdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlLCBmYWxzZSApO1xuXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAna2V5ZG93bicsIG9uS2V5RG93biwgZmFsc2UgKTtcblxuXHQvLyBmb3JjZSBhbiB1cGRhdGUgYXQgc3RhcnRcblxuXHR0aGlzLnVwZGF0ZSgpO1xuXG59O1xuXG5USFJFRS5PcmJpdENvbnRyb2xzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIFRIUkVFLkV2ZW50RGlzcGF0Y2hlci5wcm90b3R5cGUgKTtcblRIUkVFLk9yYml0Q29udHJvbHMucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gVEhSRUUuT3JiaXRDb250cm9scztcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoIFRIUkVFLk9yYml0Q29udHJvbHMucHJvdG90eXBlLCB7XG5cblx0Y2VudGVyOiB7XG5cblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLmNlbnRlciBoYXMgYmVlbiByZW5hbWVkIHRvIC50YXJnZXQnICk7XG5cdFx0XHRyZXR1cm4gdGhpcy50YXJnZXQ7XG5cblx0XHR9XG5cblx0fSxcblxuXHQvLyBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG5cblx0bm9ab29tOiB7XG5cblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vWm9vbSBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVpvb20gaW5zdGVhZC4nICk7XG5cdFx0XHRyZXR1cm4gISB0aGlzLmVuYWJsZVpvb207XG5cblx0XHR9LFxuXG5cdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9ab29tIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlWm9vbSBpbnN0ZWFkLicgKTtcblx0XHRcdHRoaXMuZW5hYmxlWm9vbSA9ICEgdmFsdWU7XG5cblx0XHR9XG5cblx0fSxcblxuXHRub1JvdGF0ZToge1xuXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1JvdGF0ZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVJvdGF0ZSBpbnN0ZWFkLicgKTtcblx0XHRcdHJldHVybiAhIHRoaXMuZW5hYmxlUm90YXRlO1xuXG5cdFx0fSxcblxuXHRcdHNldDogZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vUm90YXRlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlUm90YXRlIGluc3RlYWQuJyApO1xuXHRcdFx0dGhpcy5lbmFibGVSb3RhdGUgPSAhIHZhbHVlO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0bm9QYW46IHtcblxuXHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9QYW4gaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVQYW4gaW5zdGVhZC4nICk7XG5cdFx0XHRyZXR1cm4gISB0aGlzLmVuYWJsZVBhbjtcblxuXHRcdH0sXG5cblx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1BhbiBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVBhbiBpbnN0ZWFkLicgKTtcblx0XHRcdHRoaXMuZW5hYmxlUGFuID0gISB2YWx1ZTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdG5vS2V5czoge1xuXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub0tleXMgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVLZXlzIGluc3RlYWQuJyApO1xuXHRcdFx0cmV0dXJuICEgdGhpcy5lbmFibGVLZXlzO1xuXG5cdFx0fSxcblxuXHRcdHNldDogZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vS2V5cyBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZUtleXMgaW5zdGVhZC4nICk7XG5cdFx0XHR0aGlzLmVuYWJsZUtleXMgPSAhIHZhbHVlO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0c3RhdGljTW92aW5nIDoge1xuXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5zdGF0aWNNb3ZpbmcgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVEYW1waW5nIGluc3RlYWQuJyApO1xuXHRcdFx0cmV0dXJuICEgdGhpcy5lbmFibGVEYW1waW5nO1xuXG5cdFx0fSxcblxuXHRcdHNldDogZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLnN0YXRpY01vdmluZyBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZURhbXBpbmcgaW5zdGVhZC4nICk7XG5cdFx0XHR0aGlzLmVuYWJsZURhbXBpbmcgPSAhIHZhbHVlO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0ZHluYW1pY0RhbXBpbmdGYWN0b3IgOiB7XG5cblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLmR5bmFtaWNEYW1waW5nRmFjdG9yIGhhcyBiZWVuIHJlbmFtZWQuIFVzZSAuZGFtcGluZ0ZhY3RvciBpbnN0ZWFkLicgKTtcblx0XHRcdHJldHVybiB0aGlzLmRhbXBpbmdGYWN0b3I7XG5cblx0XHR9LFxuXG5cdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAuZHluYW1pY0RhbXBpbmdGYWN0b3IgaGFzIGJlZW4gcmVuYW1lZC4gVXNlIC5kYW1waW5nRmFjdG9yIGluc3RlYWQuJyApO1xuXHRcdFx0dGhpcy5kYW1waW5nRmFjdG9yID0gdmFsdWU7XG5cblx0XHR9XG5cblx0fVxuXG59ICk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvbGlicy9PcmJpdENvbnRyb2xzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==