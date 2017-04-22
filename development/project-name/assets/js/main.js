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
	
	var _Main = __webpack_require__(6);
	
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
	
	var _Util = __webpack_require__(4);
	
	var _Util2 = _interopRequireDefault(_Util);
	
	var _Func = __webpack_require__(5);
	
	var _Func2 = _interopRequireDefault(_Func);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// import ReadyMgr from '../MyLibs/EventMgr/ReadyMgr.js';
	// import UpdateMgr from '../MyLibs/EventMgr/UpdateMgr.js';
	// import ResizeMgr from '../MyLibs/EventMgr/ResizeMgr.js';
	// import ScrollMgr from '../MyLibs/EventMgr/ScrollMgr.js';
	// import MouseMgr from '../MyLibs/EventMgr/MouseMgr.js';
	// import LoadMgr from '../Func/LoadMgr.js';
	
	// import Pjax from '../Func/Pjax.js';
	// import JudgeEnvironment from '../Func/JudgeEnvironment.js';
	// import ResponsiveSwitchImg from '../Func/_events/ResponsiveSwitchImg.js';
	// import SwipeTransition from '../Func/SwipeTransition.js';
	
	// import Menu from '../Display/UI/_compornents/Menu.js';
	// import Nav from '../Display/UI/Nav.js';
	// import Alert from '../Display/UI/Alert.js';
	// import SideR from '../Display/UI/SideR.js';
	// import Time from '../Func/Time.js';
	// import ScrollTransition from '../Func/ScrollTransition.js';
	// import PageTop from '../Display/UI/_parts/PageTop.js';
	// import Sec01Video from '../Display/UI/Sec01Video.js';
	// import Sns from '../Func/Sns.js';
	// import SliderTop from '../Display/UI/SliderTop.js';
	
	
	// import Layout from '../Display/Layout/Layout.js';
	
	'use strict';
	
	var Common = function () {
	  function Common() {
	    _classCallCheck(this, Common);
	
	    this.onImmediate();
	    this.setEvents();
	  }
	
	  _createClass(Common, [{
	    key: 'onImmediate',
	    value: function onImmediate() {
	
	      // ------------------------------------------------------------
	      //  初期値の設定・データの配置
	      //  util関数の初期化
	      //  イベントマネージャーの設置
	      // ------------------------------------------------------------
	      gb.in.conf = new _Conf2.default();
	      gb.in.u = new _Util2.default();
	      gb.in.f = new _Func2.default();
	      // gb.in.up = new UpdateMgr();
	      // gb.in.r = new ResizeMgr();
	      // gb.in.s = new ScrollMgr();
	      // gb.in.m = new MouseMgr();
	      // gb.in.rm = new ReadyMgr();
	      // gb.in.loadMgr = new LoadMgr();
	      // gb.in.sct = new ScrollTransition();
	
	      // ------------------------------------------------------------
	      //
	      //  その他
	      //
	      // ------------------------------------------------------------
	      // pjaxの設定
	      // gb.in.pjax = new Pjax();
	
	      // ------------------------------------------------------------
	      //  Layout
	      // ------------------------------------------------------------
	      // gb.in.Layout = new Layout();
	
	
	      // 準備完了後の処理
	      // gb.in.rm.onCompletedFunc = ()=>{new DisplayOpening();}
	    }
	  }, {
	    key: 'onReady',
	    value: function onReady() {
	
	      // ------------------------------------------------------------
	      //  デバイス・ブラウザ判定
	      //  スマホの向き判定
	      //  ページ情報取得
	      // ------------------------------------------------------------
	      // gb.in.je = new JudgeEnvironment();
	      // gb.in.resImg = new ResponsiveSwitchImg();
	      // gb.in.sns = new Sns($('.fbShare'),$('.twShare'),$('.lineShare'),$('.onMail'))
	      // gb.in.swt = new SwipeTransition();
	
	      // gb.in.f.checkCssBlend();
	
	      // ------------------------------------------------------------
	      //  UI
	      // ------------------------------------------------------------
	      // gb.in.menu = new Menu();
	      // gb.in.nav = new Nav();
	      // gb.in.sideR = new SideR();
	      // gb.in.alert = new Alert();
	      // gb.in.pagetop = new PageTop();
	
	      // bg
	      // gb.in.sliderTop = new SliderTop($('#bgWrap .sec01'));
	
	      // ------------------------------------------------------------
	      //  Effects
	      // ------------------------------------------------------------
	      // gb.in.pageTransitionEffect = new PageTransitionEffect($('#pageTransitionLayer'));
	      // gb.in.sec01Video = new Sec01Video();
	      // gb.in.Sec02Bg = new Section02Bg();
	
	      // gb.in.he01 = new HoverEffectSVG($('.SVGHover'),'#fff','#000');
	      // gb.in.he02 = new HoverEffectSVG($('.SVGHoverW'),'#81d8d0','#fff');
	      // gb.in.he03 = new HoverEffectSVG($('.SVGHoverW02'),'#81d8d0','#000');
	      // gb.in.he04 = new HoverEffectSVGLogo($('#header .logo, #header .subTit'));
	      // gb.in.he05 = new HoverEffectMenuItem($('#menu .menuList .item'));
	      // gb.in.he06 = new HoverEffectSVGArrowSideR($('#sideR .next'));
	      // gb.in.he07 = new HoverEffectMenuBtn($('.menuBtn01'));
	      // gb.in.he08 = new HoverEffectSNSPCFooter($('#sideL .sns.sp'));
	
	      // logo 出す
	      // TweenMax.to($('#header .logo'), 2.2, {opacity: 1, ease: Power2.easeInOut})
	
	      // gb.in.loadMgr.start();
	
	    }
	  }, {
	    key: 'onLoad',
	    value: function onLoad() {
	
	      // ------------------------------------------------------------
	      //
	      //  Func
	      //
	      // ------------------------------------------------------------
	
	
	      // ------------------------------------------------------------
	      //
	      //  Layout
	      //
	      // ------------------------------------------------------------
	
	      // ------------------------------------------------------------
	      //
	      //  Dispaly
	      //
	      // ------------------------------------------------------------
	
	      // ------------------------------------------------------------
	      //
	      //  Motion
	      //
	      // ------------------------------------------------------------
	
	    }
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
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * fileOverview:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Project:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * File: Conf
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Date:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Author:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	var _Sound = __webpack_require__(3);
	
	var _Sound2 = _interopRequireDefault(_Sound);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
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
	    this.soundData = new _Sound2.default();
	
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
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// ------------------------------------------------------------
	//
	//  Data
	//
	// ------------------------------------------------------------
	
	var SoundData = function SoundData() {
	
	  // this.ATARI01 = '/project-name/assets/sound/atari/Atari_04.wav';
	  // this.ATARI02 = '/project-name/assets/sound/atari/Atari_05.wav';
	
	  // this.BAN01 = '/project-name/assets/sound/don/Ba-n_01.wav';
	  // this.BAN02 = '/project-name/assets/sound/don/Ba-n_02.wav';
	  // this.BAN03 = '/project-name/assets/sound/don/Ba-n_03.wav';
	  // this.BAN04 = '/project-name/assets/sound/don/Ba-n_04.wav';
	
	  // this.DON01 = '/project-name/assets/sound/don/Big_Don_01.wav';
	  // this.DON02 = '/project-name/assets/sound/don/Big_Don_02.wav';
	  // this.DON03 = '/project-name/assets/sound/don/Big_Don_03.wav';
	  // this.DON04 = '/project-name/assets/sound/don/Don_04.wav';
	
	  // this.DODN01 = '/project-name/assets/sound/don/Dodon_01.wav';
	  // this.DODN02 = '/project-name/assets/sound/don/Dodon_02.wav';
	
	  // this.Gogogo01 = '/project-name/assets/sound/don/Gogogo_01.wav';
	  // this.Gogogo02 = '/project-name/assets/sound/don/Gogogo_02.wav';
	
	  // this.IKARI = '/project-name/assets/sound/ikari/Ikari_01.wav';
	
	  // this.ROULETTE01 = '/project-name/assets/sound/roulette/Roulette_01.wav';
	  // this.ROULETTE02 = '/project-name/assets/sound/roulette/Roulette_02.wav';
	  // this.ROULETTE03 = '/project-name/assets/sound/roulette/Roulette_03.wav';
	
	  // this.SEA = '/project-name/assets/sound/sea/Sea&kamome_01.wav';
	
	  _classCallCheck(this, SoundData);
	};
	
	exports.default = SoundData;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * fileOverview:
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
	
	
	  _createClass(Util, [{
	    key: "random",
	    value: function random(min, max) {
	
	      return Math.floor(Math.random() * (max + 1 - min) + min);
	    }
	
	    // ランダムな整数を2つの範囲から取得
	    // -----------------------------------
	    // @min1 : 最小値1(int)
	    // @max1 : 最大値1(int)
	    // @min2 : 最小値2(int)
	    // @max2 : 最大値2(int)
	    // return : minからmaxまでのランダムな整数(int)
	    // -----------------------------------
	
	  }, {
	    key: "random2",
	    value: function random2(min1, max1, min2, max2) {
	
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
	  }, {
	    key: "degree",
	    value: function degree(radians) {
	
	      return radians * 180 / Math.PI; //1ラジアンが何度か
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
	
	  }, {
	    key: "arrRand",
	    value: function arrRand(arr) {
	
	      return arr[this.random(0, arr.length - 1)];
	    }
	
	    // 配列をランダムに並べ替え
	    // -----------------------------------
	    // @arr : 配列(Array)
	    // -----------------------------------
	
	  }, {
	    key: "shuffle",
	    value: function shuffle(ary) {
	
	      var arr = [];
	      arr = ary.slice();
	      var i = arr.length;
	      while (i) {
	        var j = Math.floor(Math.random() * i);
	        var t = arr[--i];
	        arr[i] = arr[j];
	        arr[j] = t;
	      }
	      return arr;
	    }
	
	    // ランダムな数値を作る
	
	  }, {
	    key: "randomArr",
	    value: function randomArr(len) {
	
	      var arr = new Array();
	
	      for (var i = 0; i < len; i++) {
	        arr.push(i);
	      }arr = this.shuffleAry(arr);
	
	      return arr;
	    }
	
	    // nullを削除した配列を返す
	    // -----------------------------------
	    // @arr : 配列(Array)
	    // return : null削除した配列(Array)
	    // -----------------------------------
	
	  }, {
	    key: "sliceNull",
	    value: function sliceNull(arr) {
	
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
	
	  }, {
	    key: "sort",
	    value: function sort(arr, para, desc) {
	      if (desc === void 0) {
	        desc = false;
	      }
	      if (desc) {
	        return arr.sort(function (a, b) {
	          return b[para] - a[para];
	        });
	      } else {
	        return arr.sort(function (a, b) {
	          return a[para] - b[para];
	        });
	      }
	    }
	  }, {
	    key: "getKey",
	    value: function getKey(list, value) {
	      var returnKey = [];
	      for (var key in list) {
	        if (list[key] == value) {
	          returnKey.push(key);
	        }
	      }
	      return returnKey;
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
/* 5 */
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
/* 6 */
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
	
	var _DisplayTop = __webpack_require__(7);
	
	var _DisplayTop2 = _interopRequireDefault(_DisplayTop);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// import DisplayMovie from '../Display/DisplayMovie.js';
	// import DisplayInterview from '../Display/DisplayInterview.js';
	// import DisplayInterviewDetail from '../Display/DisplayInterviewDetail.js';
	// import DisplayHistory from '../Display/DisplayHistory.js';
	
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
	
	      //pageのIDごとに発火するクラスの振り分け
	      switch (page) {
	
	        case 'top':
	
	          new _DisplayTop2.default();
	
	          break;
	
	        // case 'movie':
	        //
	        //   new DisplayMovie();
	        //
	        //   break;
	        //
	        // case 'interview':
	        //
	        //   new DisplayInterview();
	        //
	        //   break;
	        //
	        // case 'interview_detail':
	        //
	        //   new DisplayInterviewDetail();
	        //
	        //   break;
	        //
	        // case 'history':
	        //
	        //   new DisplayHistory();
	        //
	        //   break;
	
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
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //--------------------------------------------------
	//
	//  Display
	//
	//--------------------------------------------------
	// import Effects from './Effects/Effects.js';
	// import ScaleTop from '../Display/Layout/Size/ScaleTop.js';
	
	// import WebGLinit from './WebGLinit.js';
	
	var _Canvas = __webpack_require__(8);
	
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
	
	      gb.in.canvas.init();
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
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Entry2 = __webpack_require__(9);
	
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
/* 9 */
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
	
	// window.THREE = require('../libs/three.min.js');
	__webpack_require__(10);
	
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
/* 10 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTUxZTdjZTdmN2QyNDAzYmQxYzAiLCJ3ZWJwYWNrOi8vLy4uL3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9Ub3AuanMiLCJ3ZWJwYWNrOi8vLy4uL3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9QYWdlL0NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi4vcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0NvbmYuanMiLCJ3ZWJwYWNrOi8vLy4uL3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9EYXRhL1NvdW5kLmpzIiwid2VicGFjazovLy8uLi9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvTXlMaWJzL1V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4uL3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9NeUxpYnMvRnVuYy5qcyIsIndlYnBhY2s6Ly8vLi4vcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL1BhZ2UvTWFpbi5qcyIsIndlYnBhY2s6Ly8vLi4vcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRGlzcGxheVRvcC5qcyIsIndlYnBhY2s6Ly8vLi4vcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL1Zpc3VhbC9DYW52YXMuanMiLCJ3ZWJwYWNrOi8vLy4uL3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9FbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi4vcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvbGlicy9PcmJpdENvbnRyb2xzLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsImdiIiwidW5kZWZpbmVkIiwiaW4iLCJjb21tb24iLCJtYWluIiwiQ29tbW9uIiwib25JbW1lZGlhdGUiLCJzZXRFdmVudHMiLCJjb25mIiwidSIsImYiLCIkIiwiZG9jdW1lbnQiLCJvbiIsIm9uUmVhZHkiLCJiaW5kIiwib25Mb2FkIiwiQ29uZiIsIlJFTEVBU0UiLCJGTEciLCJMT0ciLCJQQVJBTSIsIlNUQVRTIiwiZGVmVyIsImRlZkgiLCJXIiwiSCIsInNwVyIsInNwSCIsImJwIiwibW9kZSIsImtleXMiLCJzd2l0Y2hNb2RlIiwic291bmREYXRhIiwic2VjMDJJbWdOdW0iLCJ5b3V0dWJlSUQwMSIsInlvdXR1YmVJRDAyIiwid2ViRm9udExvYWRlZCIsImkiLCJrZXkiLCJsZW4iLCJwYXJhbSIsInJlZiIsInJlZjEiLCJ2YWx1ZSIsImxvY2F0aW9uIiwic2VhcmNoIiwicmVwbGFjZSIsInNwbGl0IiwibGVuZ3RoIiwiaiIsIm9iaiIsImsiLCJ2YWwiLCJTb3VuZERhdGEiLCJVdGlsIiwidWEiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJ0b0xvd2VyQ2FzZSIsImFwcFYiLCJhcHBWZXJzaW9uIiwiaXNSZXNTUCIsImlzUmVzUEMiLCJpc1BDIiwiaXNTUCIsImlzVEFCIiwiaXNNQiIsImlzSUUiLCJpc1NldFNQU2l6ZSIsInN0YXJ0VGltZSIsImVsYXBzZWRUaW1lIiwibm93IiwiRGF0ZSIsIm1pbiIsIm1heCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIm1pbjEiLCJtYXgxIiwibWluMiIsIm1heDIiLCJoaXQiLCJyYW5nZSIsIm51bSIsInJlc01pbiIsInJlc01heCIsImJhc2VNaW4iLCJiYXNlTWF4IiwicCIsIm4iLCJwb3MiLCJTdHJpbmciLCJpbmRleE9mIiwic3Vic3RyIiwibnVtZXJhdG9yIiwiZGVub21pbmF0b3IiLCJyYWRpYW5zIiwiUEkiLCJhbmdsZSIsInAxIiwicDIiLCJzcXJ0IiwicG93IiwieCIsInkiLCJhcnIiLCJzb3J0IiwiYSIsImIiLCJhcnkiLCJzbGljZSIsInQiLCJBcnJheSIsInB1c2giLCJzaHVmZmxlQXJ5IiwibCIsImxlbjEiLCJuZXdBcnIiLCJwYXJhIiwiZGVzYyIsImxpc3QiLCJyZXR1cm5LZXkiLCJnZXRUaW1lIiwiZmxnIiwiY3NzIiwibWVkaWEiLCJwYXR0ZXJuIiwiUmVnRXhwIiwiam9pbiIsInRlc3QiLCJhZGRDbGFzcyIsImlzSXBhZCIsImlzQW5kcm9pZCIsInBsYXRmb3JtIiwiaXNJb3MiLCJtc2llIiwicGFyc2VJbnQiLCJtYXRjaCIsImlzSWUxMFVuZGVyIiwibG9nIiwiaXNJRTExIiwicmVtb3ZlQ2xhc3MiLCJ2ZXJzaW9uIiwicGFyc2VGbG9hdCIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInVybCIsImhyZWYiLCJwYXJhbUl0ZW1zIiwicGFyYW1JdGVtIiwiaGFzaCIsImNvb2tpZSIsImlzQ29udGFpbiIsInIiLCJnIiwic3RyIiwidG9TdHJpbmciLCJjb250YWluIiwibnVtYmVyIiwiX3BvdyIsInJvdW5kIiwicmVzIiwib3JnIiwiZGVzdCIsImJlZm9yZSIsImFmdGVyIiwiZ2V0Tm93IiwiaG91ciIsImdldEhvdXJzIiwibWludXRlIiwiZ2V0TWludXRlcyIsInNlY29uZCIsImdldFNlY29uZHMiLCJtaWxsU2Vjb25kIiwiZ2V0TWlsbGlzZWNvbmRzIiwiZ2V0RGF0ZSIsIm1vbnRoZGF5cyIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJ3ZWVrRGF5SlAiLCJ3REoiLCJnZXREYXkiLCJ3ZWVrRGF5RU4iLCJ3REUiLCJkYXRlIiwiTnVtYmVyIiwiaWdub3JlQXJyYXkiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJjYWxsIiwiJHRhcmdldCIsIiRpbWciLCJlYWNoIiwidyIsIndpZHRoIiwiaCIsImhlaWdodCIsImF0dHIiLCJ0cmlnZ2VyIiwic2VsZiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm9mZiIsInByb3RvY29sIiwiaG9zdG5hbWUiLCJwb3J0IiwicGF0aG5hbWUiLCJldmVudCIsInJldHVyblZhbHVlIiwia2V5Q29kZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbndoZWVsIiwib25tb3VzZXdoZWVsIiwib250b3VjaG1vdmUiLCJvbmtleWRvd24iLCJwcmV2ZW50RGVmYXVsdEZvclNjcm9sbEtleXMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiRnVuYyIsImJsYW5rIiwiZGVidWdnZXIiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJleHBhbmRqUXVlcnkiLCJtZXRob2RzIiwiY29uc29sZSIsIm0iLCJwcmVwZW5kIiwiRlBTIiwibW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FsbGJhY2siLCJzZXRUaW1lb3V0IiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJtb3pDYW5jZWxBbmltYXRpb25GcmFtZSIsIndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lIiwidGltZXIiLCJjbGVhclRpbWVvdXQiLCJqUXVlcnkiLCJmbiIsImV4dGVuZCIsImFkanVzdCIsImFkanVzdFciLCJhZGp1c3RIIiwiQ1NTIiwic3VwcG9ydHMiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ2IiwiaXNBbmRyb2lkVmVyc2lvbiIsImFsZXJ0IiwiTWFpbiIsInBhZ2UiLCJkYXRhIiwiRGlzcGxheVRvcCIsImNhbnZhcyIsIm91dHB1dCIsImdldEVsZW1lbnRCeUlkIiwiaW5pdCIsIkNhbnZhcyIsIm9wdHMiLCJjcmVhdGVFbGVtZW50IiwiY2FtZXJhIiwicmVuZGVyZXIiLCJzY2VuZSIsImN1YmUiLCJjcmVhdGVDYW1lcmEiLCJfY3JlYXRlQ2FtZXJhIiwiY3JlYXRlUmVuZGVyZXIiLCJfY3JlYXRlUmVuZGVyZXIiLCJjcmVhdGVTY2VuZSIsIl9jcmVhdGVTY2VuZSIsImNyZWF0ZU9iamVjdCIsIl9jcmVhdGVPYmplY3QiLCJvcmJpdENvbnRyb2xzIiwiX29yYml0Q29udHJvbHMiLCJvblJlc2l6ZSIsIl9vblJlc2l6ZSIsIlVwZGF0ZSIsIl9VcGRhdGUiLCJUSFJFRSIsIlBlcnNwZWN0aXZlQ2FtZXJhIiwicG9zaXRpb24iLCJ6IiwibG9va0F0IiwiVmVjdG9yMyIsIldlYkdMUmVuZGVyZXIiLCJhbHBoYSIsImFudGlhbGlhcyIsInN0ZW5jaWwiLCJkZXB0aCIsInByZW11bHRpcGxpZWRBbHBoYSIsInNldENsZWFyQ29sb3IiLCJzZXRQaXhlbFJhdGlvIiwiZGV2aWNlUGl4ZWxSYXRpbyIsInNldFNpemUiLCJhcHBlbmRDaGlsZCIsImRvbUVsZW1lbnQiLCJTY2VuZSIsImN1YmVHZW9tZXRyeSIsIkJveEdlb21ldHJ5IiwiY3ViZU1hdGVyaWFsIiwiTWVzaEJhc2ljTWF0ZXJpYWwiLCJjb2xvciIsIndpcmVmcmFtZSIsIk1lc2giLCJyZW5kZXIiLCJhc3BlY3QiLCJ1cGRhdGVQcm9qZWN0aW9uTWF0cml4IiwiY29udHJvbHMiLCJPcmJpdENvbnRyb2xzIiwiYXV0b1JvdGF0ZSIsImNsb2NrIiwiQ2xvY2siLCJkZWx0YSIsImdldERlbHRhIiwidXBkYXRlIiwicmVxdWlyZSIsIkVudHJ5Iiwib2JqZWN0IiwiZW5hYmxlZCIsInRhcmdldCIsIm1pbkRpc3RhbmNlIiwibWF4RGlzdGFuY2UiLCJJbmZpbml0eSIsIm1pblpvb20iLCJtYXhab29tIiwibWluUG9sYXJBbmdsZSIsIm1heFBvbGFyQW5nbGUiLCJtaW5BemltdXRoQW5nbGUiLCJtYXhBemltdXRoQW5nbGUiLCJlbmFibGVEYW1waW5nIiwiZGFtcGluZ0ZhY3RvciIsImVuYWJsZVpvb20iLCJ6b29tU3BlZWQiLCJlbmFibGVSb3RhdGUiLCJyb3RhdGVTcGVlZCIsImVuYWJsZVBhbiIsImtleVBhblNwZWVkIiwiYXV0b1JvdGF0ZVNwZWVkIiwiZW5hYmxlS2V5cyIsIkxFRlQiLCJVUCIsIlJJR0hUIiwiQk9UVE9NIiwibW91c2VCdXR0b25zIiwiT1JCSVQiLCJNT1VTRSIsIlpPT00iLCJNSURETEUiLCJQQU4iLCJ0YXJnZXQwIiwiY2xvbmUiLCJwb3NpdGlvbjAiLCJ6b29tMCIsInpvb20iLCJnZXRQb2xhckFuZ2xlIiwic3BoZXJpY2FsIiwicGhpIiwiZ2V0QXppbXV0aGFsQW5nbGUiLCJ0aGV0YSIsInJlc2V0Iiwic2NvcGUiLCJjb3B5IiwiZGlzcGF0Y2hFdmVudCIsImNoYW5nZUV2ZW50Iiwic3RhdGUiLCJTVEFURSIsIk5PTkUiLCJvZmZzZXQiLCJxdWF0IiwiUXVhdGVybmlvbiIsInNldEZyb21Vbml0VmVjdG9ycyIsInVwIiwicXVhdEludmVyc2UiLCJpbnZlcnNlIiwibGFzdFBvc2l0aW9uIiwibGFzdFF1YXRlcm5pb24iLCJzdWIiLCJhcHBseVF1YXRlcm5pb24iLCJzZXRGcm9tVmVjdG9yMyIsInJvdGF0ZUxlZnQiLCJnZXRBdXRvUm90YXRpb25BbmdsZSIsInNwaGVyaWNhbERlbHRhIiwibWFrZVNhZmUiLCJyYWRpdXMiLCJzY2FsZSIsInBhbk9mZnNldCIsInNldEZyb21TcGhlcmljYWwiLCJzZXQiLCJ6b29tQ2hhbmdlZCIsImRpc3RhbmNlVG9TcXVhcmVkIiwiRVBTIiwiZG90IiwicXVhdGVybmlvbiIsImRpc3Bvc2UiLCJvbkNvbnRleHRNZW51Iiwib25Nb3VzZURvd24iLCJvbk1vdXNlV2hlZWwiLCJvblRvdWNoU3RhcnQiLCJvblRvdWNoRW5kIiwib25Ub3VjaE1vdmUiLCJvbk1vdXNlTW92ZSIsIm9uTW91c2VVcCIsIm9uS2V5RG93biIsInR5cGUiLCJzdGFydEV2ZW50IiwiZW5kRXZlbnQiLCJST1RBVEUiLCJET0xMWSIsIlRPVUNIX1JPVEFURSIsIlRPVUNIX0RPTExZIiwiVE9VQ0hfUEFOIiwiU3BoZXJpY2FsIiwicm90YXRlU3RhcnQiLCJWZWN0b3IyIiwicm90YXRlRW5kIiwicm90YXRlRGVsdGEiLCJwYW5TdGFydCIsInBhbkVuZCIsInBhbkRlbHRhIiwiZG9sbHlTdGFydCIsImRvbGx5RW5kIiwiZG9sbHlEZWx0YSIsImdldFpvb21TY2FsZSIsInJvdGF0ZVVwIiwicGFuTGVmdCIsImRpc3RhbmNlIiwib2JqZWN0TWF0cml4Iiwic2V0RnJvbU1hdHJpeENvbHVtbiIsIm11bHRpcGx5U2NhbGFyIiwicGFuVXAiLCJwYW4iLCJkZWx0YVgiLCJkZWx0YVkiLCJlbGVtZW50IiwiYm9keSIsInRhcmdldERpc3RhbmNlIiwidGFuIiwiZm92IiwiY2xpZW50SGVpZ2h0IiwibWF0cml4IiwiT3J0aG9ncmFwaGljQ2FtZXJhIiwicmlnaHQiLCJsZWZ0IiwiY2xpZW50V2lkdGgiLCJ0b3AiLCJib3R0b20iLCJ3YXJuIiwiZG9sbHlJbiIsImRvbGx5U2NhbGUiLCJkb2xseU91dCIsImhhbmRsZU1vdXNlRG93blJvdGF0ZSIsImNsaWVudFgiLCJjbGllbnRZIiwiaGFuZGxlTW91c2VEb3duRG9sbHkiLCJoYW5kbGVNb3VzZURvd25QYW4iLCJoYW5kbGVNb3VzZU1vdmVSb3RhdGUiLCJzdWJWZWN0b3JzIiwiaGFuZGxlTW91c2VNb3ZlRG9sbHkiLCJoYW5kbGVNb3VzZU1vdmVQYW4iLCJoYW5kbGVNb3VzZVVwIiwiaGFuZGxlTW91c2VXaGVlbCIsImhhbmRsZUtleURvd24iLCJoYW5kbGVUb3VjaFN0YXJ0Um90YXRlIiwidG91Y2hlcyIsInBhZ2VYIiwicGFnZVkiLCJoYW5kbGVUb3VjaFN0YXJ0RG9sbHkiLCJkeCIsImR5IiwiaGFuZGxlVG91Y2hTdGFydFBhbiIsImhhbmRsZVRvdWNoTW92ZVJvdGF0ZSIsImhhbmRsZVRvdWNoTW92ZURvbGx5IiwiaGFuZGxlVG91Y2hNb3ZlUGFuIiwiaGFuZGxlVG91Y2hFbmQiLCJidXR0b24iLCJzdG9wUHJvcGFnYXRpb24iLCJjcmVhdGUiLCJFdmVudERpc3BhdGNoZXIiLCJjb25zdHJ1Y3RvciIsImRlZmluZVByb3BlcnRpZXMiLCJjZW50ZXIiLCJnZXQiLCJub1pvb20iLCJub1JvdGF0ZSIsIm5vUGFuIiwibm9LZXlzIiwic3RhdGljTW92aW5nIiwiZHluYW1pY0RhbXBpbmdGYWN0b3IiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUM5QkE7Ozs7QUFDQTs7Ozs7O0FB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Z08sSUFBUixDQUFjLDBGQUFkO0FBQ0EsU0FBS3BILGFBQUwsR0FBcUJqUyxLQUFyQjtBQUVBOztBQWRxQjs7QUF6R2dDLEVBQXhELEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDU1MWU3Y2U3ZjdkMjQwM2JkMWMwIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogVG9wXG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbmltcG9ydCBDb21tb24gZnJvbSAnLi9QYWdlL0NvbW1vbi5qcyc7XG5pbXBvcnQgTWFpbiBmcm9tICcuL1BhZ2UvTWFpbi5qcyc7XG5cbigoKT0+e1xuXG4gIC8vIGdsb2JhbOOCquODluOCuOOCp+OCr+ODiFxuICBpZiAod2luZG93LmdiPT09dW5kZWZpbmVkKSB3aW5kb3cuZ2IgPSB7fTtcbiAgd2luZG93LmdiLmluID0ge307IC8vaW5zdGFuY2VcblxuICBnYi5pbi5jb21tb24gPSBuZXcgQ29tbW9uKCk7XG4gIGdiLmluLm1haW4gPSBuZXcgTWFpbigpO1xuXG59KSgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvVG9wLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogQ29tbW9uXG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbmltcG9ydCBDb25mIGZyb20gJy4uL0NvbmYuanMnO1xuaW1wb3J0IFV0aWwgZnJvbSAnLi4vTXlMaWJzL1V0aWwuanMnO1xuaW1wb3J0IEZ1bmMgZnJvbSAnLi4vTXlMaWJzL0Z1bmMuanMnO1xuXG4vLyBpbXBvcnQgUmVhZHlNZ3IgZnJvbSAnLi4vTXlMaWJzL0V2ZW50TWdyL1JlYWR5TWdyLmpzJztcbi8vIGltcG9ydCBVcGRhdGVNZ3IgZnJvbSAnLi4vTXlMaWJzL0V2ZW50TWdyL1VwZGF0ZU1nci5qcyc7XG4vLyBpbXBvcnQgUmVzaXplTWdyIGZyb20gJy4uL015TGlicy9FdmVudE1nci9SZXNpemVNZ3IuanMnO1xuLy8gaW1wb3J0IFNjcm9sbE1nciBmcm9tICcuLi9NeUxpYnMvRXZlbnRNZ3IvU2Nyb2xsTWdyLmpzJztcbi8vIGltcG9ydCBNb3VzZU1nciBmcm9tICcuLi9NeUxpYnMvRXZlbnRNZ3IvTW91c2VNZ3IuanMnO1xuLy8gaW1wb3J0IExvYWRNZ3IgZnJvbSAnLi4vRnVuYy9Mb2FkTWdyLmpzJztcblxuLy8gaW1wb3J0IFBqYXggZnJvbSAnLi4vRnVuYy9QamF4LmpzJztcbi8vIGltcG9ydCBKdWRnZUVudmlyb25tZW50IGZyb20gJy4uL0Z1bmMvSnVkZ2VFbnZpcm9ubWVudC5qcyc7XG4vLyBpbXBvcnQgUmVzcG9uc2l2ZVN3aXRjaEltZyBmcm9tICcuLi9GdW5jL19ldmVudHMvUmVzcG9uc2l2ZVN3aXRjaEltZy5qcyc7XG4vLyBpbXBvcnQgU3dpcGVUcmFuc2l0aW9uIGZyb20gJy4uL0Z1bmMvU3dpcGVUcmFuc2l0aW9uLmpzJztcblxuLy8gaW1wb3J0IE1lbnUgZnJvbSAnLi4vRGlzcGxheS9VSS9fY29tcG9ybmVudHMvTWVudS5qcyc7XG4vLyBpbXBvcnQgTmF2IGZyb20gJy4uL0Rpc3BsYXkvVUkvTmF2LmpzJztcbi8vIGltcG9ydCBBbGVydCBmcm9tICcuLi9EaXNwbGF5L1VJL0FsZXJ0LmpzJztcbi8vIGltcG9ydCBTaWRlUiBmcm9tICcuLi9EaXNwbGF5L1VJL1NpZGVSLmpzJztcbi8vIGltcG9ydCBUaW1lIGZyb20gJy4uL0Z1bmMvVGltZS5qcyc7XG4vLyBpbXBvcnQgU2Nyb2xsVHJhbnNpdGlvbiBmcm9tICcuLi9GdW5jL1Njcm9sbFRyYW5zaXRpb24uanMnO1xuLy8gaW1wb3J0IFBhZ2VUb3AgZnJvbSAnLi4vRGlzcGxheS9VSS9fcGFydHMvUGFnZVRvcC5qcyc7XG4vLyBpbXBvcnQgU2VjMDFWaWRlbyBmcm9tICcuLi9EaXNwbGF5L1VJL1NlYzAxVmlkZW8uanMnO1xuLy8gaW1wb3J0IFNucyBmcm9tICcuLi9GdW5jL1Nucy5qcyc7XG4vLyBpbXBvcnQgU2xpZGVyVG9wIGZyb20gJy4uL0Rpc3BsYXkvVUkvU2xpZGVyVG9wLmpzJztcblxuXG4vLyBpbXBvcnQgTGF5b3V0IGZyb20gJy4uL0Rpc3BsYXkvTGF5b3V0L0xheW91dC5qcyc7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tbW9uIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMub25JbW1lZGlhdGUoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBvbkltbWVkaWF0ZSgpIHtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICDliJ3mnJ/lgKTjga7oqK3lrprjg7vjg4fjg7zjgr/jga7phY3nva5cbiAgICAvLyAgdXRpbOmWouaVsOOBruWIneacn+WMllxuICAgIC8vICDjgqTjg5njg7Pjg4jjg57jg43jg7zjgrjjg6Pjg7zjga7oqK3nva5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBnYi5pbi5jb25mID0gbmV3IENvbmYoKTtcbiAgICBnYi5pbi51ID0gbmV3IFV0aWwoKTtcbiAgICBnYi5pbi5mID0gbmV3IEZ1bmMoKTtcbiAgICAvLyBnYi5pbi51cCA9IG5ldyBVcGRhdGVNZ3IoKTtcbiAgICAvLyBnYi5pbi5yID0gbmV3IFJlc2l6ZU1ncigpO1xuICAgIC8vIGdiLmluLnMgPSBuZXcgU2Nyb2xsTWdyKCk7XG4gICAgLy8gZ2IuaW4ubSA9IG5ldyBNb3VzZU1ncigpO1xuICAgIC8vIGdiLmluLnJtID0gbmV3IFJlYWR5TWdyKCk7XG4gICAgLy8gZ2IuaW4ubG9hZE1nciA9IG5ldyBMb2FkTWdyKCk7XG4gICAgLy8gZ2IuaW4uc2N0ID0gbmV3IFNjcm9sbFRyYW5zaXRpb24oKTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIOOBneOBruS7llxuICAgIC8vXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gcGpheOOBruioreWumlxuICAgIC8vIGdiLmluLnBqYXggPSBuZXcgUGpheCgpO1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIExheW91dFxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIGdiLmluLkxheW91dCA9IG5ldyBMYXlvdXQoKTtcblxuXG4gICAgLy8g5rqW5YKZ5a6M5LqG5b6M44Gu5Yem55CGXG4gICAgLy8gZ2IuaW4ucm0ub25Db21wbGV0ZWRGdW5jID0gKCk9PntuZXcgRGlzcGxheU9wZW5pbmcoKTt9XG5cbiAgfVxuXG4gIG9uUmVhZHkoKSB7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAg44OH44OQ44Kk44K544O744OW44Op44Km44K25Yik5a6aXG4gICAgLy8gIOOCueODnuODm+OBruWQkeOBjeWIpOWumlxuICAgIC8vICDjg5rjg7zjgrjmg4XloLHlj5blvpdcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBnYi5pbi5qZSA9IG5ldyBKdWRnZUVudmlyb25tZW50KCk7XG4gICAgLy8gZ2IuaW4ucmVzSW1nID0gbmV3IFJlc3BvbnNpdmVTd2l0Y2hJbWcoKTtcbiAgICAvLyBnYi5pbi5zbnMgPSBuZXcgU25zKCQoJy5mYlNoYXJlJyksJCgnLnR3U2hhcmUnKSwkKCcubGluZVNoYXJlJyksJCgnLm9uTWFpbCcpKVxuICAgIC8vIGdiLmluLnN3dCA9IG5ldyBTd2lwZVRyYW5zaXRpb24oKTtcblxuICAgIC8vIGdiLmluLmYuY2hlY2tDc3NCbGVuZCgpO1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIFVJXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gZ2IuaW4ubWVudSA9IG5ldyBNZW51KCk7XG4gICAgLy8gZ2IuaW4ubmF2ID0gbmV3IE5hdigpO1xuICAgIC8vIGdiLmluLnNpZGVSID0gbmV3IFNpZGVSKCk7XG4gICAgLy8gZ2IuaW4uYWxlcnQgPSBuZXcgQWxlcnQoKTtcbiAgICAvLyBnYi5pbi5wYWdldG9wID0gbmV3IFBhZ2VUb3AoKTtcblxuICAgIC8vIGJnXG4gICAgLy8gZ2IuaW4uc2xpZGVyVG9wID0gbmV3IFNsaWRlclRvcCgkKCcjYmdXcmFwIC5zZWMwMScpKTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICBFZmZlY3RzXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gZ2IuaW4ucGFnZVRyYW5zaXRpb25FZmZlY3QgPSBuZXcgUGFnZVRyYW5zaXRpb25FZmZlY3QoJCgnI3BhZ2VUcmFuc2l0aW9uTGF5ZXInKSk7XG4gICAgLy8gZ2IuaW4uc2VjMDFWaWRlbyA9IG5ldyBTZWMwMVZpZGVvKCk7XG4gICAgLy8gZ2IuaW4uU2VjMDJCZyA9IG5ldyBTZWN0aW9uMDJCZygpO1xuXG4gICAgLy8gZ2IuaW4uaGUwMSA9IG5ldyBIb3ZlckVmZmVjdFNWRygkKCcuU1ZHSG92ZXInKSwnI2ZmZicsJyMwMDAnKTtcbiAgICAvLyBnYi5pbi5oZTAyID0gbmV3IEhvdmVyRWZmZWN0U1ZHKCQoJy5TVkdIb3ZlclcnKSwnIzgxZDhkMCcsJyNmZmYnKTtcbiAgICAvLyBnYi5pbi5oZTAzID0gbmV3IEhvdmVyRWZmZWN0U1ZHKCQoJy5TVkdIb3ZlclcwMicpLCcjODFkOGQwJywnIzAwMCcpO1xuICAgIC8vIGdiLmluLmhlMDQgPSBuZXcgSG92ZXJFZmZlY3RTVkdMb2dvKCQoJyNoZWFkZXIgLmxvZ28sICNoZWFkZXIgLnN1YlRpdCcpKTtcbiAgICAvLyBnYi5pbi5oZTA1ID0gbmV3IEhvdmVyRWZmZWN0TWVudUl0ZW0oJCgnI21lbnUgLm1lbnVMaXN0IC5pdGVtJykpO1xuICAgIC8vIGdiLmluLmhlMDYgPSBuZXcgSG92ZXJFZmZlY3RTVkdBcnJvd1NpZGVSKCQoJyNzaWRlUiAubmV4dCcpKTtcbiAgICAvLyBnYi5pbi5oZTA3ID0gbmV3IEhvdmVyRWZmZWN0TWVudUJ0bigkKCcubWVudUJ0bjAxJykpO1xuICAgIC8vIGdiLmluLmhlMDggPSBuZXcgSG92ZXJFZmZlY3RTTlNQQ0Zvb3RlcigkKCcjc2lkZUwgLnNucy5zcCcpKTtcblxuICAgIC8vIGxvZ28g5Ye644GZXG4gICAgLy8gVHdlZW5NYXgudG8oJCgnI2hlYWRlciAubG9nbycpLCAyLjIsIHtvcGFjaXR5OiAxLCBlYXNlOiBQb3dlcjIuZWFzZUluT3V0fSlcblxuICAgIC8vIGdiLmluLmxvYWRNZ3Iuc3RhcnQoKTtcblxuICB9XG5cbiAgb25Mb2FkKCkge1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgRnVuY1xuICAgIC8vXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIExheW91dFxuICAgIC8vXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBEaXNwYWx5XG4gICAgLy9cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIE1vdGlvblxuICAgIC8vXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdyZWFkeScsIHRoaXMub25SZWFkeS5iaW5kKHRoaXMpKTtcbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCB0aGlzLm9uTG9hZC5iaW5kKHRoaXMpKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL1BhZ2UvQ29tbW9uLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogQ29uZlxuICogRGF0ZTpcbiAqIEF1dGhvcjpcbiAqL1xuXG5pbXBvcnQgU291bmREYXRhIGZyb20gJy4vRGF0YS9Tb3VuZC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmYge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIOacrOeVquODleODqeOCsFxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgICBcbiAgICB0aGlzLlJFTEVBU0UgPSB0cnVlO1xuICAgIC8vIHRoaXMuUkVMRUFTRSA9IGZhbHNlO1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIOODleODqeOCsOmWoumAo1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuRkxHID0ge1xuICAgICAgTE9HOnRydWUsICAvLyDjg63jgrDlh7rliptcbiAgICAgIFBBUkFNOnRydWUsIC8vIOODkeODqeODoeODvOOCv+ODgeOCp+ODg+OCr1xuICAgICAgU1RBVFM6dHJ1ZSAgLy8gU3RhdHPooajnpLpcbiAgICB9O1xuICAgIGlmICghdGhpcy5SRUxFQVNFKSB7XG4gICAgICB0aGlzLkZMRyA9IHtcbiAgICAgICAgTE9HOmZhbHNlLFxuICAgICAgICBQQVJBTTpmYWxzZSxcbiAgICAgICAgU1RBVFM6ZmFsc2UgXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICDln7rmnKwgd2lkdGggaGVpZ2h0XG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5kZWZXID0gMTMwMDtcbiAgICB0aGlzLmRlZkggPSA4NTA7XG5cbiAgICB0aGlzLlcgPSAxMjAwO1xuICAgIHRoaXMuSCA9IDc1MDtcblxuICAgIHRoaXMuc3BXID0gMzc1O1xuICAgIHRoaXMuc3BIID0gNjY3O1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIOODluODrOOCpOOCr+ODneOCpOODs+ODiFxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuYnAgPSA3Njg7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgbW9kZVxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMubW9kZSA9IG51bGw7XG4gICAgdGhpcy5rZXlzID0gW1xuICAgICAge1xuICAgICAgICAgICdrZXknOiAnbW92aWUnLFxuICAgICAgICAgICd2YWx1ZSc6IFsnbW9ybmluZycsJ2FmdGVybm9vbicsJ25pZ2h0J10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAgICdrZXknOiAnZGF0YScsXG4gICAgICAgICAgJ3ZhbHVlJzogWydkYXRhMDEnLCdkYXRhMDInLCdkYXRhMDMnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICAgJ2tleSc6ICdwcm9kdWN0JyxcbiAgICAgICAgICAndmFsdWUnOiBbJzAxJ10sXG4gICAgICB9LFxuICAgIF1cbiAgICB0aGlzLnN3aXRjaE1vZGUoKTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICBzb3VuZCBkYXRhXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5zb3VuZERhdGEgPSBuZXcgU291bmREYXRhKCk7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgc2VjMDIgYmcgSW1nIE51bVxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuc2VjMDJJbWdOdW0gPSAzOTY7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgeW91dHViZSBJRFxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMueW91dHViZUlEMDEgPSAneFcyb05wTnJLZDAnO1xuICAgIHRoaXMueW91dHViZUlEMDIgPSAndDJXZVJSZEFGZUknO1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIHdlYiBmb250IGxvYWRlZFxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMud2ViRm9udExvYWRlZCA9IGZhbHNlO1xuXG4gIH1cblxuXG4gIHN3aXRjaE1vZGUoKXtcblxuICAgIHZhciBpLCBrZXksIGxlbiwgcGFyYW0sIHJlZiwgcmVmMSwgdmFsdWU7XG5cbiAgICByZWYgPSBsb2NhdGlvbi5zZWFyY2gucmVwbGFjZSgnPycsICcnKS5zcGxpdCgnJicpO1xuXG4gICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBwYXJhbSA9IHJlZltpXTtcbiAgICAgIHJlZjEgPSBwYXJhbS5zcGxpdCgnPScpLCBrZXkgPSByZWYxWzBdLCB2YWx1ZSA9IHJlZjFbMV07XG5cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5rZXlzLmxlbmd0aDsgaisrKSB7XG5cbiAgICAgICAgdmFyIG9iaiA9IHRoaXMua2V5c1tqXTtcblxuICAgICAgICAvLyDjg5Hjg6njg6Hjg7zjgr/jgYzjgq3jg7zjgajkuIDnt5LjgaDjgaPjgZ/jgolcbiAgICAgICAgaWYgKG9iai5rZXkgPT09IGtleSkge1xuXG4gICAgICAgICAgLy8g5ZCE5YCk44Go5q+U6LyDXG4gICAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBvYmoudmFsdWUubGVuZ3RoOyBrKyspIHtcblxuICAgICAgICAgICAgdmFyIHZhbCA9IG9iai52YWx1ZVtrXTtcblxuICAgICAgICAgICAgLy8g44Kt44O844KSdGhpcy5rZXlz44Gua2V544Gr44CBdmFsdWXjgpLmr5TovIPjgZfjgablkIzlgKTjgaDjgaPjgZ/jgoLjga7jgatcbiAgICAgICAgICAgIGlmICh2YWwgPT09IHZhbHVlKSB0aGlzW29iai5rZXldID0gdmFsO1xuICAgICAgICAgICAgXG4gICAgICAgICAgfTtcblxuXG4gICAgICAgIH07XG5cbiAgICAgICAgXG4gICAgICB9O1xuXG4gICAgfVxuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvQ29uZi5qcyIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBEYXRhXG4vL1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvdW5kRGF0YSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAvLyB0aGlzLkFUQVJJMDEgPSAnL3Byb2plY3QtbmFtZS9hc3NldHMvc291bmQvYXRhcmkvQXRhcmlfMDQud2F2JztcbiAgICAvLyB0aGlzLkFUQVJJMDIgPSAnL3Byb2plY3QtbmFtZS9hc3NldHMvc291bmQvYXRhcmkvQXRhcmlfMDUud2F2JztcblxuICAgIC8vIHRoaXMuQkFOMDEgPSAnL3Byb2plY3QtbmFtZS9hc3NldHMvc291bmQvZG9uL0JhLW5fMDEud2F2JztcbiAgICAvLyB0aGlzLkJBTjAyID0gJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3NvdW5kL2Rvbi9CYS1uXzAyLndhdic7XG4gICAgLy8gdGhpcy5CQU4wMyA9ICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9zb3VuZC9kb24vQmEtbl8wMy53YXYnO1xuICAgIC8vIHRoaXMuQkFOMDQgPSAnL3Byb2plY3QtbmFtZS9hc3NldHMvc291bmQvZG9uL0JhLW5fMDQud2F2JztcblxuICAgIC8vIHRoaXMuRE9OMDEgPSAnL3Byb2plY3QtbmFtZS9hc3NldHMvc291bmQvZG9uL0JpZ19Eb25fMDEud2F2JztcbiAgICAvLyB0aGlzLkRPTjAyID0gJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3NvdW5kL2Rvbi9CaWdfRG9uXzAyLndhdic7XG4gICAgLy8gdGhpcy5ET04wMyA9ICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9zb3VuZC9kb24vQmlnX0Rvbl8wMy53YXYnO1xuICAgIC8vIHRoaXMuRE9OMDQgPSAnL3Byb2plY3QtbmFtZS9hc3NldHMvc291bmQvZG9uL0Rvbl8wNC53YXYnO1xuXG4gICAgLy8gdGhpcy5ET0ROMDEgPSAnL3Byb2plY3QtbmFtZS9hc3NldHMvc291bmQvZG9uL0RvZG9uXzAxLndhdic7XG4gICAgLy8gdGhpcy5ET0ROMDIgPSAnL3Byb2plY3QtbmFtZS9hc3NldHMvc291bmQvZG9uL0RvZG9uXzAyLndhdic7XG5cbiAgICAvLyB0aGlzLkdvZ29nbzAxID0gJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3NvdW5kL2Rvbi9Hb2dvZ29fMDEud2F2JztcbiAgICAvLyB0aGlzLkdvZ29nbzAyID0gJy9wcm9qZWN0LW5hbWUvYXNzZXRzL3NvdW5kL2Rvbi9Hb2dvZ29fMDIud2F2JztcblxuICAgIC8vIHRoaXMuSUtBUkkgPSAnL3Byb2plY3QtbmFtZS9hc3NldHMvc291bmQvaWthcmkvSWthcmlfMDEud2F2JztcblxuICAgIC8vIHRoaXMuUk9VTEVUVEUwMSA9ICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9zb3VuZC9yb3VsZXR0ZS9Sb3VsZXR0ZV8wMS53YXYnO1xuICAgIC8vIHRoaXMuUk9VTEVUVEUwMiA9ICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9zb3VuZC9yb3VsZXR0ZS9Sb3VsZXR0ZV8wMi53YXYnO1xuICAgIC8vIHRoaXMuUk9VTEVUVEUwMyA9ICcvcHJvamVjdC1uYW1lL2Fzc2V0cy9zb3VuZC9yb3VsZXR0ZS9Sb3VsZXR0ZV8wMy53YXYnO1xuXG4gICAgLy8gdGhpcy5TRUEgPSAnL3Byb2plY3QtbmFtZS9hc3NldHMvc291bmQvc2VhL1NlYSZrYW1vbWVfMDEud2F2JztcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0RhdGEvU291bmQuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBVdGlsXG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFV0aWwge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy51YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7IC8vdXNlcmFnZW50XG4gICAgdGhpcy5hcHBWID0gd2luZG93Lm5hdmlnYXRvci5hcHBWZXJzaW9uLnRvTG93ZXJDYXNlKCk7IC8vYXBwVmVyc2lvblxuICAgIHRoaXMuaXNSZXNTUCA9IG51bGw7IC8vIHJlc3BvbnNpdmUgc3BcbiAgICB0aGlzLmlzUmVzUEMgPSBudWxsOyAvLyByZXNwb25zaXZlIHBjXG5cbiAgICB0aGlzLmlzUEMgPSBudWxsO1xuICAgIHRoaXMuaXNTUCA9IG51bGw7XG4gICAgdGhpcy5pc1RBQiA9IG51bGw7XG4gICAgdGhpcy5pc01CID0gbnVsbDtcblxuICAgIHRoaXMuaXNJRSA9IG51bGw7XG5cbiAgICB0aGlzLmlzU2V0U1BTaXplID0gZmFsc2U7XG5cblxuICAgIHRoaXMuc3RhcnRUaW1lID0gbnVsbDtcbiAgICB0aGlzLmVsYXBzZWRUaW1lID0gbnVsbDtcbiAgICB0aGlzLm5vdyA9IG5ldyBEYXRlKCk7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTWF0aFxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBcbiAgLy8g44Op44Oz44OA44Og44Gq5pW05pWw44KS5Y+W5b6XXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEBtaW4gOiDmnIDlsI/lgKQoaW50KVxuICAvLyBAbWF4IDog5pyA5aSn5YCkKGludClcbiAgLy8gcmV0dXJuIDogbWlu44GL44KJbWF444G+44Gn44Gu44Op44Oz44OA44Og44Gq5pW05pWwKGludClcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmFuZG9tKG1pbiwgbWF4KSB7XG5cbiAgICByZXR1cm4gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqICgobWF4ICsgMSkgLSBtaW4pICsgbWluKSk7XG5cbiAgfVxuICAgICAgXG4gIC8vIOODqeODs+ODgOODoOOBquaVtOaVsOOCkjLjgaTjga7nr4Tlm7LjgYvjgonlj5blvpdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQG1pbjEgOiDmnIDlsI/lgKQxKGludClcbiAgLy8gQG1heDEgOiDmnIDlpKflgKQxKGludClcbiAgLy8gQG1pbjIgOiDmnIDlsI/lgKQyKGludClcbiAgLy8gQG1heDIgOiDmnIDlpKflgKQyKGludClcbiAgLy8gcmV0dXJuIDogbWlu44GL44KJbWF444G+44Gn44Gu44Op44Oz44OA44Og44Gq5pW05pWwKGludClcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmFuZG9tMihtaW4xLCBtYXgxLCBtaW4yLCBtYXgyKSB7XG4gICAgXG4gICAgaWYgKHRoaXMuaGl0KDIpKSB7XG4gICAgICByZXR1cm4gdGhpcy5yYW5kb20obWluMSwgbWF4MSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnJhbmRvbShtaW4yLCBtYXgyKTtcbiAgICB9XG5cbiAgfVxuICAgICAgXG4gIC8vIDEvQHJhbmdl44Gu56K6546H44GndHJ1ZeOCkuWPluW+l1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAcmFuZ2UgOiDmr43mlbAoaW50KVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGhpdChyYW5nZSkge1xuXG4gICAgcmV0dXJuIHRoaXMucmFuZG9tKDAsIHJhbmdlIC0gMSkgPT09IDA7XG5cbiAgfVxuICBcbiAgLy8gMOOBi+OCieevhOWbsuWGheOBp+ODqeODs+ODgOODoOOBquaVtOaVsOOCkuWPluW+l1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAdmFsIDog56+E5ZuyKGludClcbiAgLy8gcmV0dXJuIDog44Op44Oz44OA44Og44Gq5pW05pWwKGludClcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmFuZ2UodmFsKSB7XG5cbiAgICByZXR1cm4gdGhpcy5yYW5kb20oLXZhbCwgdmFsKTtcblxuICB9XG4gIFxuICAvLyDlgKTjgpLjg57jg4Pjg5Tjg7PjgrBcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQG51bSA6IOODnuODg+ODlOODs+OCsOOBmeOCi+WApChOdW1iZXIpXG4gIC8vIEByZXNNaW4gOiDntZDmnpzjgajjgarjgovlgKTjga7mnIDlsI/lgKQoTnVtYmVyKVxuICAvLyBAcmVzTWF4IDog57WQ5p6c44Go44Gq44KL5YCk44Gu5pyA5aSn5YCkKE51bWJlcilcbiAgLy8gQGJhc2VNaW4gOiDlhYPjgajjgarjgovlgKTjga7mnIDlsI/lgKQoTnVtYmVyKVxuICAvLyBAYmFzZU1heCA6IOWFg+OBqOOBquOCi+WApOOBruacgOWkp+WApChOdW1iZXIpXG4gIC8vIHJldHVybiA6IOODnuODg+ODlOODs+OCsOOBleOCjOOBn+WApChOdW1iZXIpXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIG1hcChudW0sIHJlc01pbiwgcmVzTWF4LCBiYXNlTWluLCBiYXNlTWF4KSB7XG5cbiAgICB2YXIgcDtcbiAgICBpZiAobnVtIDwgYmFzZU1pbikge1xuICAgICAgcmV0dXJuIHJlc01pbjtcbiAgICB9XG4gICAgaWYgKG51bSA+IGJhc2VNYXgpIHtcbiAgICAgIHJldHVybiByZXNNYXg7XG4gICAgfVxuICAgIHAgPSAocmVzTWF4IC0gcmVzTWluKSAvIChiYXNlTWF4IC0gYmFzZU1pbik7XG5cbiAgICByZXR1cm4gKChudW0gLSBiYXNlTWluKSAqIHApICsgcmVzTWluO1xuXG4gIH0gICAgXG4gIFxuICAvLyDmlbDlgKTjgavlsI/mlbDngrnnrKxAbuS9jeOBvuOBp+OCkuOBpOOBkeOBn+aWh+Wtl+WIl+OCkui/lOOBmVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAbnVtIDog5YCkKE51bWJlcilcbiAgLy8gQG4gOiDlsI/mlbDngrnjga7kvY0oaW50KVxuICAvLyByZXR1cm4gOiDlpInmj5vjgZXjgozjgZ/lgKQoU3RyaW5nKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBkZWNpbWFsKG51bSwgbikge1xuICAgIHZhciBpLCBwb3M7XG4gICAgbnVtID0gU3RyaW5nKG51bSk7XG4gICAgcG9zID0gbnVtLmluZGV4T2YoXCIuXCIpO1xuICAgIGlmIChuID09PSAwKSB7XG4gICAgICByZXR1cm4gbnVtLnNwbGl0KFwiLlwiKVswXTtcbiAgICB9XG4gICAgaWYgKHBvcyA9PT0gLTEpIHtcbiAgICAgIG51bSArPSBcIi5cIjtcbiAgICAgIGkgPSAwO1xuICAgICAgd2hpbGUgKGkgPCBuKSB7XG4gICAgICAgIG51bSArPSBcIjBcIjtcbiAgICAgICAgaSsrO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bTtcbiAgICB9XG4gICAgbnVtID0gbnVtLnN1YnN0cigwLCBwb3MpICsgbnVtLnN1YnN0cihwb3MsIG4gKyAxKTtcbiAgICByZXR1cm4gbnVtO1xuICB9XG5cbiAgY2xhbXAobnVtZXJhdG9yLGRlbm9taW5hdG9yLHZhbCkge1xuXG4gICAgcmV0dXJuIHZhbCAqIChudW1lcmF0b3IgLyBkZW5vbWluYXRvcik7XG5cbiAgfVxuXG4gIGRlZ3JlZShyYWRpYW5zKSB7XG5cbiAgICByZXR1cm4gcmFkaWFucyAqIDE4MCAvIE1hdGguUEk7IC8vMeODqeOCuOOCouODs+OBjOS9leW6puOBi1xuXG4gIH1cblxuICAvLyB0byByYWRpYW5zXG4gIHJhZGlhbihhbmdsZSkgeyBcblxuICAgIHJldHVybiBhbmdsZSAqIE1hdGguUEkgLyAxODA7IC8vMeW6puS9leODqeOCuOOCouODs+OBi1xuXG4gIH1cblxuICBkaXN0KHAxLCBwMikge1xuXG4gICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhwMi54IC0gcDEueCwgMikgKyBNYXRoLnBvdyhwMi55IC0gcDEueSwgMikpO1xuXG4gIH1cblxuICBhc2NlbmQoYXJyKSB7XG5cbiAgICBhcnIuc29ydChmdW5jdGlvbihhLGIpe1xuICAgICAgaWYoIGEgPiBiICkgcmV0dXJuIC0xO1xuICAgICAgaWYoIGEgPCBiICkgcmV0dXJuIDE7XG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcbiAgICAvLyB2YXIgYSA9IFs1LDMsOSwxLDEwXVxuICAgIC8vIOe1kOaenDoxMCw5LDUsMywxXG5cbiAgfVxuXG4gIGRlc2NlbmQoYXJyKSB7XG5cbiAgICBhcnIuc29ydChmdW5jdGlvbihhLGIpe1xuICAgICAgaWYoIGEgPCBiICkgcmV0dXJuIC0xO1xuICAgICAgaWYoIGEgPiBiICkgcmV0dXJuIDE7XG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcblxuICAgIC8vIHZhciBhID0gWzUsMyw5LDEsMTBdXG4gICAgLy8g57WQ5p6cOjEsMyw1LDksMTBcblxuICB9XG5cbiAgLy8gbWFwKHZhbHVlLCBtaW4wMSwgbWF4MDEsIG1pbjAyLCBtYXgwMikge1xuXG4gIC8vICAgdmFyIGRpczAxID0gbWF4MDEgLSBtaW4wMTtcbiAgLy8gICB2YXIgZGlzMDIgPSBtYXgwMiAtIG1pbjAyXG5cbiAgLy8gICB2YXIgcmF0ZSA9IGRpczAyIC8gZGlzMDE7XG5cbiAgLy8gICB2YWx1ZSA9IHZhbHVlICogcmF0ZTtcblxuICAvLyAgIHJldHVybiB2YWx1ZTtcbiAgLy8gfVxuXG4gIGNvbnN0cmFpbih2YWx1ZSwgbWluLCBtYXgpIHtcblxuICAgIHJldHVybiBNYXRoLm1pbihtYXgsIE1hdGgubWF4KHZhbHVlLCBtaW4pKTtcblxuICAgIC8vIGlmICh2YWx1ZSA8PSBsb3cpIHZhbHVlID0gbG93O1xuICAgIC8vIGlmICh2YWx1ZSA+PSBoaWdoKSB2YWx1ZSA9IGhpZ2g7ICAgICBcbiAgICAvLyByZXR1cm4gdmFsdWU7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgQXJyYXlcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8g6YWN5YiX5YaF44Gu44Op44Oz44OA44Og44Gq5YCk44KS44Gy44Go44Gk5Y+W5b6XXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEBhcnIgOiDphY3liJdcbiAgLy8gcmV0dXJuIDog6YWN5YiX5YaF44Gu5YCkXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGFyclJhbmQoYXJyKSB7XG5cbiAgICByZXR1cm4gYXJyW3RoaXMucmFuZG9tKDAsIGFyci5sZW5ndGggLSAxKV07XG5cbiAgfSAgICBcbiAgICBcbiAgLy8g6YWN5YiX44KS44Op44Oz44OA44Og44Gr5Lim44G55pu/44GIXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEBhcnIgOiDphY3liJcoQXJyYXkpXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHNodWZmbGUoYXJ5KSB7XG5cbiAgICB2YXIgYXJyID0gW107XG4gICAgYXJyID0gYXJ5LnNsaWNlKCk7XG4gICAgdmFyIGkgPSBhcnIubGVuZ3RoO1xuICAgIHdoaWxlKGkpe1xuICAgICAgdmFyIGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqaSk7XG4gICAgICB2YXIgdCA9IGFyclstLWldO1xuICAgICAgYXJyW2ldID0gYXJyW2pdO1xuICAgICAgYXJyW2pdID0gdDtcbiAgICB9XG4gICAgcmV0dXJuIGFycjtcblxuICB9XG5cbiAgLy8g44Op44Oz44OA44Og44Gq5pWw5YCk44KS5L2c44KLXG4gIHJhbmRvbUFyciAobGVuKSB7XG5cbiAgICB2YXIgYXJyID0gbmV3IEFycmF5O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykgYXJyLnB1c2goaSk7XG5cbiAgICBhcnIgPSB0aGlzLnNodWZmbGVBcnkoYXJyKTtcblxuICAgIHJldHVybiBhcnI7XG5cbiAgfVxuXG4gIC8vIG51bGzjgpLliYrpmaTjgZfjgZ/phY3liJfjgpLov5TjgZlcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQGFyciA6IOmFjeWIlyhBcnJheSlcbiAgLy8gcmV0dXJuIDogbnVsbOWJiumZpOOBl+OBn+mFjeWIlyhBcnJheSlcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc2xpY2VOdWxsKGFycikge1xuXG4gICAgdmFyIGksIGwsIGxlbjEsIG5ld0FyciwgdmFsO1xuICAgIG5ld0FyciA9IFtdO1xuICAgIGZvciAoaSA9IGwgPSAwLCBsZW4xID0gYXJyLmxlbmd0aDsgbCA8IGxlbjE7IGkgPSArK2wpIHtcbiAgICAgIHZhbCA9IGFycltpXTtcbiAgICAgIGlmICh2YWwgIT09IG51bGwpIHtcbiAgICAgICAgbmV3QXJyLnB1c2godmFsKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ld0FycjtcblxuICB9ICAgIFxuICBcbiAgLy8g6YWN5YiX5YaF44Gu44OR44Op44Oh44O844K/44KS5q+U6LyD44GX44Gm44K944O844OIXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEBhcnIgOiDphY3liJcoQXJyYXkpXG4gIC8vIEBwYXJhIDog44OR44Op44Oh44O844K/44O85ZCNXG4gIC8vIEBkZXNjIDog6ZmN6aCG44GL44Gp44GG44GLKGJvb2xlYW4pIOODh+ODleOCqeODq+ODiOOBr+aYh+mghlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzb3J0KGFyciwgcGFyYSwgZGVzYykge1xuICAgIGlmIChkZXNjID09PSB2b2lkIDApIHtcbiAgICAgIGRlc2MgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGRlc2MpIHtcbiAgICAgIHJldHVybiBhcnIuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgIHJldHVybiBiW3BhcmFdIC0gYVtwYXJhXTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYXJyLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICByZXR1cm4gYVtwYXJhXSAtIGJbcGFyYV07XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZXRLZXkobGlzdCx2YWx1ZSkge1xuICAgICAgdmFyIHJldHVybktleSA9IFtdO1xuICAgICAgZm9yKHZhciBrZXkgaW4gbGlzdCl7XG4gICAgICAgICAgaWYgKGxpc3Rba2V5XSA9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICByZXR1cm5LZXkucHVzaChrZXkpO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXR1cm5LZXk7XG4gIH1cblxuICAvLyDjg6bjg4vjg7zjgq9JROOCkuWPluW+l1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB1bmlxdWUoKSB7XG5cbiAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgfVxuICBcbiAgLy8gKipqcXVhcnnkvb/nlKhcbiAgLy8g44Oc44K/44Oz44Oi44O844OJ5aSJ5pu0XG4gIC8vIHRydWXjgarjgonjgqvjg7zjgr3jg6vjgYzjg53jgqTjg7Pjgr/jg7zjga7lvaLjgatcbiAgLy8gZmFsc2Xjgarjgonjg4fjg5Xjgqnjg6vjg4jjga7jgqvjg7zjgr3jg6vjgatcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQGZsZyA6IOmBqeeUqOOBmeOCi+OBi+OBqeOBhuOBiyhib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBidXR0b25Nb2RlKGZsZykge1xuXG4gICAgaWYgKGZsZykge1xuICAgICAgcmV0dXJuICQoXCJib2R5XCIpLmNzcyhcImN1cnNvclwiLCBcInBvaW50ZXJcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAkKFwiYm9keVwiKS5jc3MoXCJjdXJzb3JcIiwgXCJkZWZhdWx0XCIpO1xuICAgIH1cblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBkZXZpY2VcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgaXNEZXZpY2VTUCgpe1xuXG4gICAgdmFyIG1lZGlhID0gW1wiaXBob25lXCIsXCJpcG9kXCIsXCJpcGFkXCIsXCJhbmRyb2lkXCIsXCJkcmVhbVwiLFwiY3VwY2FrZVwiLFwiYmxhY2tiZXJyeTk1MDBcIixcImJsYWNrYmVycnk5NTMwXCIsXCJibGFja2JlcnJ5OTUyMFwiLFwiYmxhY2tiZXJyeTk1NTBcIixcImJsYWNrYmVycnk5ODAwXCIsXCJ3ZWJvc1wiLFwiaW5jb2duaXRvXCIsXCJ3ZWJtYXRlXCJdO1xuICAgIHZhciBwYXR0ZXJuID0gbmV3IFJlZ0V4cChtZWRpYS5qb2luKFwifFwiKSxcImlcIik7XG5cbiAgICB2YXIgYiA9IHBhdHRlcm4udGVzdCh0aGlzLnVhKTtcbiAgICBpZiAoYikgJCgnYm9keScpLmFkZENsYXNzKCdpc0RldmljZVNQJyk7XG5cbiAgICB0aGlzLmlzU1AgPSBiO1xuXG4gIH1cbiAgaXNEZXZpY2VUQUIoKXtcblxuICAgIHZhciBiID0gKHRoaXMudWEuaW5kZXhPZihcIndpbmRvd3NcIikgIT0gLTEgJiYgdGhpcy51YS5pbmRleE9mKFwidG91Y2hcIikgIT0gLTEpXG4gICAgICB8fCB0aGlzLnVhLmluZGV4T2YoXCJpcGFkXCIpICE9IC0xXG4gICAgICB8fCAodGhpcy51YS5pbmRleE9mKFwiYW5kcm9pZFwiKSAhPSAtMSAmJiB0aGlzLnVhLmluZGV4T2YoXCJtb2JpbGVcIikgPT0gLTEpXG4gICAgICB8fCAodGhpcy51YS5pbmRleE9mKFwiZmlyZWZveFwiKSAhPSAtMSAmJiB0aGlzLnVhLmluZGV4T2YoXCJ0YWJsZXRcIikgIT0gLTEpXG4gICAgICB8fCB0aGlzLnVhLmluZGV4T2YoXCJraW5kbGVcIikgIT0gLTFcbiAgICAgIHx8IHRoaXMudWEuaW5kZXhPZihcInNpbGtcIikgIT0gLTFcbiAgICAgIHx8IHRoaXMudWEuaW5kZXhPZihcInBsYXlib29rXCIpICE9IC0xO1xuICAgIGlmIChiKSAkKCdib2R5JykuYWRkQ2xhc3MoJ2lzRGV2aWNlVEFCJyk7XG5cbiAgICB0aGlzLmlzVEFCID0gYjtcblxuICB9XG5cbiAgaXNEZXZpY2VNQigpe1xuXG4gICAgdmFyIGIgPSAodGhpcy51YS5pbmRleE9mKFwid2luZG93c1wiKSAhPSAtMSAmJiB0aGlzLnVhLmluZGV4T2YoXCJwaG9uZVwiKSAhPSAtMSlcbiAgICAgIHx8IHRoaXMudWEuaW5kZXhPZihcImlwaG9uZVwiKSAhPSAtMVxuICAgICAgfHwgdGhpcy51YS5pbmRleE9mKFwiaXBvZFwiKSAhPSAtMVxuICAgICAgfHwgKHRoaXMudWEuaW5kZXhPZihcImFuZHJvaWRcIikgIT0gLTEgJiYgdGhpcy51YS5pbmRleE9mKFwibW9iaWxlXCIpICE9IC0xKVxuICAgICAgfHwgKHRoaXMudWEuaW5kZXhPZihcImZpcmVmb3hcIikgIT0gLTEgJiYgdGhpcy51YS5pbmRleE9mKFwibW9iaWxlXCIpICE9IC0xKVxuICAgICAgfHwgdGhpcy51YS5pbmRleE9mKFwiYmxhY2tiZXJyeVwiKSAhPSAtMTtcbiAgICBpZiAoYikgJCgnYm9keScpLmFkZENsYXNzKCdpc0RldmljZU1CJyk7XG5cbiAgICB0aGlzLmlzTUIgPSBiO1xuXG4gIH1cblxuICBpc0RldmljZVBDKCl7XG5cbiAgICBpZiAoISh0aGlzLmlzU1AgfHwgdGhpcy5pc1RBQiB8fCB0aGlzLmlzTUIpKSB7XG4gICAgICBcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaXNEZXZpY2VQQycpO1xuICAgICAgdGhpcy5pc1BDID0gdHJ1ZTtcbiAgICAgIHJldHVybjtcblxuICAgIH1cblxuICAgIHRoaXMuaXNQQyA9IGZhbHNlO1xuXG4gIH1cblxuICAvLyDjgrnjg57jg5XjgqnliKTlrppcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc1NtdCgpIHtcblxuICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ2lQYWQnKSA+IDAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdpUGhvbmUnKSA+IDAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdpUG9kJykgPiAwIHx8IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignQW5kcm9pZCcpID4gMDtcblxuICB9XG5cbiAgLy8g44K/44OW44Os44OD44OI56uv5pyr44GL44Gp44GG44GLXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNUYWJsZXQoKSB7XG5cbiAgICByZXR1cm4gdGhpcy5pc0lwYWQoKSB8fCAodGhpcy5pc0FuZHJvaWQoKSAmJiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ01vYmlsZScpID09PSAtMSk7XG5cbiAgfVxuXG4gIC8vIGlQYWTliKTlrppcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc0lwYWQoKSB7XG5cbiAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdpUGFkJykgPiAwO1xuXG4gIH1cblxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgT1NcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gQW5kcm9pZOWIpOWumlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzQW5kcm9pZCgpIHtcblxuICAgIHZhciB1O1xuICAgIHUgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICAgIHJldHVybiB1LmluZGV4T2YoJ0JsYWNrQmVycnknKSA+IDAgfHwgdS5pbmRleE9mKCdBbmRyb2lkJykgPiAwIHx8IHUuaW5kZXhPZignV2luZG93cyBQaG9uZScpID4gMDtcblxuICB9XG5cbiAgaXNpUGhvbmUoKXtcbiAgICB2YXIgcGF0dGVybiA9IG5ldyBSZWdFeHAoXCJpcGhvbmVcIixcImlcIik7XG4gICAgcmV0dXJuIHBhdHRlcm4udGVzdCh0aGlzLnVhKTtcbiAgfVxuXG4gIC8vIGlPU+WIpOWumlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzSW9zKCkge1xuXG4gICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignaVBhZCcpID4gMCB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ2lQaG9uZScpID4gMCB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ2lQb2QnKSA+IDA7XG5cbiAgfVxuXG4gIC8vIFBTM+WIpOWumlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzUHMzKCkge1xuXG4gICAgdmFyIHU7XG4gICAgdSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gICAgcmV0dXJuIHUuaW5kZXhPZignUExBWVNUQVRJT04gMycpID4gMDtcblxuICB9XG4gICAgXG4gIC8vIFZJVEHliKTlrppcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc1ZpdGEoKSB7XG5cbiAgICB2YXIgdTtcbiAgICB1ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgICByZXR1cm4gdS5pbmRleE9mKCdQbGF5U3RhdGlvbiBWaXRhJykgPiAwO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIGJyb3dzZXJcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIElF44GL44Gp44GG44GLXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNJZSgpIHtcblxuICAgIHZhciB1YTtcbiAgICB1YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIHVhLmluZGV4T2YoJ21zaWUnKSAhPT0gLTEgfHwgdWEuaW5kZXhPZigndHJpZGVudC83JykgIT09IC0xO1xuXG4gIH1cblxuICAvLyBXSU7jgYvjganjgYbjgYtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc1dpbigpIHtcblxuICAgIHJldHVybiBuYXZpZ2F0b3IucGxhdGZvcm0uaW5kZXhPZihcIldpblwiKSAhPT0gLTE7XG5cbiAgfVxuXG4gIC8vIGdvb2dsZUNocm9tZeOBi+OBqeOBhuOBi1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzQ2hyb21lKCkge1xuXG4gICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignQ2hyb21lJykgPiAwO1xuXG4gIH0gICAgXG4gIFxuICAvLyBGaXJlRm9444GL44Gp44GG44GLXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNGRigpIHtcblxuICAgIHJldHVybiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2ZpcmVmb3gnKSAhPT0gLTE7XG5cbiAgfVxuXG4gIGlzU2FmYXJpKCl7XG5cbiAgICBpZih0aGlzLnVhLmluZGV4T2YoXCJjaHJvbWVcIikgIT0gLTEpIHJldHVybiBmYWxzZTtcbiAgICBpZih0aGlzLnVhLmluZGV4T2YoXCJsdW5hc2NhcGVcIikgIT0gLTEpIHJldHVybiBmYWxzZTtcbiAgICB2YXIgcGF0dGVybiA9IG5ldyBSZWdFeHAoXCJzYWZhcmlcIixcImlcIik7XG4gICAgcmV0dXJuIHBhdHRlcm4udGVzdCh0aGlzLnVhKTtcblxuICB9XG5cbiAgaXNPcGVyYSgpe1xuXG4gICAgICB2YXIgcGF0dGVybiA9IG5ldyBSZWdFeHAoXCJvcGVyYVwiLFwiaVwiKTtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QodGhpcy51YSk7XG5cbiAgfVxuXG4gIC8vIGlPU+OBrnNhZmFyaeS7peWkluOBi+OBqeOBhuOBi1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzSU9TVWlWaWV3KCkge1xuXG4gICAgdmFyIGE7XG4gICAgYSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuICh0aGlzLmlzSW9zKCkgJiYgYS5pbmRleE9mKCdzYWZhcmknKSA9PT0gLTEpIHx8ICh0aGlzLmlzSW9zKCkgJiYgYS5pbmRleE9mKCdjcmlvcycpID4gMCkgfHwgKHRoaXMuaXNJb3MoKSAmJiBhLmluZGV4T2YoJ2dzYScpID4gMCk7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgdmVyc2lvblxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gSUU45Lul5LiL44GL44Gp44GG44GLXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNJZThVbmRlcigpIHtcblxuICAgIHZhciBtc2llO1xuICAgIG1zaWUgPSBuYXZpZ2F0b3IuYXBwVmVyc2lvbi50b0xvd2VyQ2FzZSgpO1xuICAgIG1zaWUgPSBtc2llLmluZGV4T2YoJ21zaWUnKSA+IC0xID8gcGFyc2VJbnQobXNpZS5yZXBsYWNlKC8uKm1zaWVbIF0vLCAnJykubWF0Y2goL15bMC05XSsvKSkgOiAwO1xuICAgIHJldHVybiBtc2llIDw9IDggJiYgbXNpZSAhPT0gMDtcblxuICB9XG4gICAgXG4gIC8vIElFOeS7peS4i+OBi+OBqeOBhuOBi1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzSWU5VW5kZXIoKSB7XG5cbiAgICB2YXIgbXNpZTtcbiAgICBtc2llID0gbmF2aWdhdG9yLmFwcFZlcnNpb24udG9Mb3dlckNhc2UoKTtcbiAgICBtc2llID0gbXNpZS5pbmRleE9mKCdtc2llJykgPiAtMSA/IHBhcnNlSW50KG1zaWUucmVwbGFjZSgvLiptc2llWyBdLywgJycpLm1hdGNoKC9eWzAtOV0rLykpIDogMDtcbiAgICByZXR1cm4gbXNpZSA8PSA5ICYmIG1zaWUgIT09IDA7XG5cbiAgfVxuXG4gIC8vIElFMTDku6XkuIvjgYvjganjgYbjgYtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc0llMTBVbmRlcigpIHtcblxuICAgIHZhciBtc2llO1xuICAgIG1zaWUgPSBuYXZpZ2F0b3IuYXBwVmVyc2lvbi50b0xvd2VyQ2FzZSgpO1xuICAgIG1zaWUgPSBtc2llLmluZGV4T2YoJ21zaWUnKSA+IC0xID8gcGFyc2VJbnQobXNpZS5yZXBsYWNlKC8uKm1zaWVbIF0vLCAnJykubWF0Y2goL15bMC05XSsvKSkgOiAwO1xuICAgIHJldHVybiBtc2llIDw9IDEwICYmIG1zaWUgIT09IDA7XG5cbiAgfVxuXG4gIC8vIElFMTHku6XkuIvjgYvjganjgYbjgYtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc0llMTFVbmRlcigpIHtcblxuICAgIHZhciBiID0gdGhpcy5pc0llMTBVbmRlcigpIHx8ICh0aGlzLnVhLmluZGV4T2YoXCJ0cmlkZW50XCIpICE9IC0xKTtcbiAgICByZXR1cm4gYjtcbiAgICAvLyByZXR1cm4gdHJ1ZTtcblxuICB9XG5cbiAgLy8gZWRnZeOBi+OBqeOBhuOBi1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzRWRnZSgpIHtcblxuICAgIGxvZyh0aGlzLnVhLmluZGV4T2YoXCJBcHBsZVdlYmtpdFwiKSx0aGlzLnVhLmluZGV4T2YoXCJFZGdlXCIpLHRoaXMudWEsdGhpcy5hcHBWKTtcbiAgICB2YXIgYiA9ICh0aGlzLnVhLmluZGV4T2YoXCJhcHBsZXdlYmtpdFwiKSA+PSAwICYmIHRoaXMudWEuaW5kZXhPZihcImVkZ2VcIikgIT0gLTEpO1xuICAgIHJldHVybiBiO1xuICAgIC8vIHJldHVybiB0cnVlO1xuXG4gIH1cblxuICBpc0lFVmVyc2lvbigpe1xuXG4gICAgJCgnYm9keScpLmFkZENsYXNzKCdpZScpO1xuICAgIHRoaXMuaXNJRSA9IHRydWU7XG4gICAgICBcbiAgICBpZiAodGhpcy5hcHBWLmluZGV4T2YoXCJtc2llIDEwLlwiKSAhPSAtMSkge1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdpZTEwJyk7XG4gICAgICByZXR1cm4gJ2llMTAnO1xuICAgIH0gZWxzZSBpZiAodGhpcy5hcHBWLmluZGV4T2YoXCJtc2llIDkuXCIpICE9IC0xKSB7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2llOScpO1xuICAgICAgcmV0dXJuICdpZTknO1xuICAgIH0gZWxzZSBpZiAodGhpcy5hcHBWLmluZGV4T2YoXCJtc2llIDguXCIpICE9IC0xKSB7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2llOCcpOyAgXG4gICAgICByZXR1cm4gJ2llOCc7XG4gICAgfSBlbHNlIGlmICh0aGlzLmFwcFYuaW5kZXhPZihcIm1zaWUgNy5cIikgIT0gLTEpIHtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaWU3Jyk7XG4gICAgICByZXR1cm4gJ2llNyc7XG4gICAgfSBlbHNlIGlmICh0aGlzLmFwcFYuaW5kZXhPZihcIm1zaWUgNi5cIikgIT0gLTEpIHtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaWU2Jyk7XG4gICAgICByZXR1cm4gJ2llNic7XG4gICAgfSBlbHNlIGlmICh0aGlzLmFwcFYuaW5kZXhPZihcInRyaWRlbnRcIikgIT0gLTEpIHtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaWUxMScpO1xuICAgICAgdGhpcy5pc0lFMTEgPSB0cnVlO1xuICAgICAgcmV0dXJuICdpZTExJztcbiAgICB9IGVsc2UgaWYgKHRoaXMudWEuaW5kZXhPZihcImFwcGxld2Via2l0XCIpID49IDAgJiYgdGhpcy51YS5pbmRleE9mKFwiZWRnZVwiKSAhPSAtMSkge1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdpc0VkZ2UnKTtcbiAgICAgIHJldHVybiAnZWRnZSc7XG4gICAgfVxuXG5cbiAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2llJyk7XG4gICAgdGhpcy5pc0lFID0gZmFsc2U7XG5cbiAgfVxuXG4gIGlzQW5kcm9pZFZlcnNpb24oKSB7XG5cbiAgICBpZiggdGhpcy51YS5pbmRleE9mKFwiYW5kcm9pZFwiKSA+IDAgKSB7XG5cbiAgICAgICAgdmFyIHZlcnNpb24gPSBwYXJzZUZsb2F0KHRoaXMudWEuc2xpY2UodGhpcy51YS5pbmRleE9mKFwiYW5kcm9pZFwiKSs4KSk7XG4gICAgICAgIHJldHVybiB2ZXJzaW9uO1xuICAgICAgICBcbiAgICB9XG5cbiAgfVxuXG4gIGlzaXBob25lVmVyc2lvbigpIHtcblxuICAgIGlmKCB0aGlzLnVhLmluZGV4T2YoXCJpUGhvbmUgT1NcIikgPiAwICkge1xuXG4gICAgICAgIHZhciB2ZXJzaW9uID0gcGFyc2VGbG9hdCh0aGlzLnVhLnNsaWNlKHRoaXMudWEuaW5kZXhPZihcImlQaG9uZSBPU1wiKSsxMCkpO1xuICAgICAgICByZXR1cm4gdmVyc2lvbjtcblxuICAgIH1cblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBwb3J0cmFpdCAvIGxhbmRzY2FwZVxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNEaXJlY3Rpb24gKCkge1xuXG4gICAgdmFyIFcgPSB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgICAgSCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgIGlmIChIID4gVykge1xuICAgICAgJChcImJvZHlcIikuYWRkQ2xhc3MoXCJwb3J0cmFpdFwiKTtcbiAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwibGFuZHNjYXBlXCIpO1xuICAgIH1lbHNle1xuICAgICAgJChcImJvZHlcIikuYWRkQ2xhc3MoXCJsYW5kc2NhcGVcIik7XG4gICAgICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcInBvcnRyYWl0XCIpO1xuICAgIH1cblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICByZXNwb25zaXZlIOaoquW5heOCkuimi+OCi1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNSZXNwb25zaXZlIChicCkge1xuXG4gICAgaWYgKGJwPT11bmRlZmluZWQpIGJwPTM3NTtcblxuICAgIHZhciBXID0gd2luZG93LmlubmVyV2lkdGgsXG4gICAgICAgIEggPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICBpZiAoVyA+IGJwKSB7XG4gICAgICB0aGlzLmlzUmVzU1AgPSBmYWxzZTtcbiAgICAgIHRoaXMuaXNSZXNQQyA9IHRydWU7XG4gICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2lzUmVzcG9uc2l2ZVNQJyk7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2lzUmVzcG9uc2l2ZVBDJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNSZXNTUCA9IHRydWU7XG4gICAgICB0aGlzLmlzUmVzUEMgPSBmYWxzZTtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaXNSZXNwb25zaXZlU1AnKTtcbiAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnaXNSZXNwb25zaXZlUEMnKTtcbiAgICB9XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgVVJMXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIOOCr+OCqOODquaKnOOBjeWHuuOBl1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAa2V5IDog5oqc44GN5Ye644GZ44OR44Op44Oh44O844K/5ZCNKFN0cmluZylcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gZ2V0UXVlcnkoa2V5KSB7XG5cbiAgLy8gICB2YXIgcXMsIHJlZ2V4O1xuICAvLyAgIGtleSA9IGtleS5yZXBsYWNlKC9b4oKsW10vLCBcIuKCrOKCrOKCrFtcIikucmVwbGFjZSgvW+KCrF1dLywgXCLigqzigqzigqxdXCIpO1xuICAvLyAgIHJlZ2V4ID0gbmV3IFJlZ0V4cChcIlvigqzigqw/Jl1cIiArIGtleSArIFwiPShbXiYjXSopXCIpO1xuICAvLyAgIHFzID0gcmVnZXguZXhlYyh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gIC8vICAgaWYgKHFzID09PSBudWxsKSB7XG4gIC8vICAgICByZXR1cm4gXCJcIjtcbiAgLy8gICB9IGVsc2Uge1xuICAvLyAgICAgcmV0dXJuIHFzWzFdO1xuICAvLyAgIH1cblxuICAvLyB9XG5cbiAgZ2V0UGFyYW0oKSB7XG5cbiAgICB2YXIgdXJsID0gbG9jYXRpb24uaHJlZjtcbiAgICB2YXIgcGFyYW0gPSB1cmwuc3BsaXQoJz8nKVsxXTtcbiAgICBpZiAocGFyYW09PXVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB2YXIgcGFyYW1JdGVtcyA9IHBhcmFtLnNwbGl0KCcmJyk7XG4gICAgdmFyIGxpc3QgPSB7fTtcbiAgXG4gICAgZm9yKCB2YXIgaSA9IDA7IGk8cGFyYW1JdGVtcy5sZW5ndGg7IGkrKyApe1xuXG4gICAgICAgIHBhcmFtSXRlbSA9IHBhcmFtSXRlbXNbaV0uc3BsaXQoJz0nKTtcbiAgICAgICAgbGlzdFtwYXJhbUl0ZW1bMF1dID0gcGFyYW1JdGVtWzFdO1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIGxpc3Q7XG5cbiAgfVxuICBcbiAgLy8g44OP44OD44K344Ol5Y+W5b6XXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IGxvY2F0aW9uLmhhc2jjga4j44KS5YmK6Zmk44GX44Gf44KE44GkXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGhhc2goKSB7XG5cbiAgICByZXR1cm4gbG9jYXRpb24uaGFzaC5yZXBsYWNlKFwiI1wiLCBcIlwiKTtcblxuICB9XG5cbiAgLy8gY29va2ll5Y+W5b6XXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEBrZXkgOiDjg5Hjg6njg6Hjg7zjgr/lkI1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ2V0Q29va2llKGtleSkge1xuXG4gICAgdmFyIGEsIGFyciwgaSwgbCwgbGVuMSwgdmFsO1xuICAgIGlmIChkb2N1bWVudC5jb29raWUgPT09IHZvaWQgMCB8fCBkb2N1bWVudC5jb29raWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBhcnIgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7IFwiKTtcbiAgICBmb3IgKGkgPSBsID0gMCwgbGVuMSA9IGFyci5sZW5ndGg7IGwgPCBsZW4xOyBpID0gKytsKSB7XG4gICAgICB2YWwgPSBhcnJbaV07XG4gICAgICBhID0gdmFsLnNwbGl0KFwiPVwiKTtcbiAgICAgIGlmIChhWzBdID09PSBrZXkpIHtcbiAgICAgICAgcmV0dXJuIGFbMV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuXG4gIH0gICAgICBcblxuICAvLyBjb29raWXoqK3lrppcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQGtleSA6IOODkeODqeODoeODvOOCv+WQjVxuICAvLyBAdmFsIDog5YCkXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHNldENvb2tpZShrZXksIHZhbCkge1xuXG4gICAgcmV0dXJuIGRvY3VtZW50LmNvb2tpZSA9IGtleSArIFwiPVwiICsgdmFsO1xuXG4gIH1cbiAgXG4gIGlzUENTUCgpIHtcblxuICAgIHZhciB1cmwgPSBsb2NhdGlvbi5ocmVmO1xuXG4gICAgaWYgKCF0aGlzLmlzUEMgJiYgIXRoaXMuaXNUQUIgJiYgKHVybC5pbmRleE9mKCdwYycpICE9IC0xKSkge1xuXG4gICAgICBsb2NhdGlvbi5ocmVmID0gJy9vcF9nb2xkZW4nO1xuICAgIFxuICAgIH0gXG5cbiAgICBpZiAodGhpcy5pc1BDICYmIHVybC5pbmRleE9mKCdwYycpID09IC0xKSB7XG5cbiAgICAgIGxvY2F0aW9uLmhyZWYgPSAnL29wX2dvbGRlbi9wYy8nO1xuICAgIFxuICAgIH0gXG5cbiAgICBpZiAodGhpcy5pc1RBQiAmJiB1cmwuaW5kZXhPZigncGMnKSA9PSAtMSkge1xuXG4gICAgICBsb2NhdGlvbi5ocmVmID0gJy9vcF9nb2xkZW4vcGMvJztcbiAgICBcbiAgICB9IFxuXG4gICAgaWYgKHRoaXMuaXNDb250YWluKHVybCwncm91bGV0dGUnKSkgbG9jYXRpb24uaHJlZiA9ICcvb3BfZ29sZGVuJztcbiAgICBpZiAodGhpcy5pc0NvbnRhaW4odXJsLCd0b3BpY3MnKSkgbG9jYXRpb24uaHJlZiA9ICcvb3BfZ29sZGVuJztcblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBDb2xvclxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyByZ2LjgYvjgolIRVjjgqvjg6njg7zlj5blvpdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQHIgOiAwfjI1NVxuICAvLyBAZyA6IDB+MjU1XG4gIC8vIEBiIDogMH4yNTVcbiAgLy8gcmV0dXJuIDogZXggXCIjRkZGRkZGXCJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ2V0SGV4Q29sb3IocixnLGIpIHtcbiAgICAgIHZhciBzdHI7XG4gICAgICBzdHIgPSAociA8PCAxNiB8IGcgPDwgOCB8IGIpLnRvU3RyaW5nKDE2KTtcbiAgICAgIHJldHVybiBcIiNcIiArIG5ldyBBcnJheSg3IC0gc3RyLmxlbmd0aCkuam9pbihcIjBcIikgKyBzdHI7XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFN0cmluZ1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBpc0NvbnRhaW4oc3RyLGNvbnRhaW4pIHtcblxuICAgIC8vIHN0cuOBruS4reOBqyxjb250YWlu44GM5a2Y5Zyo44GX44Gf44KJXG4gICAgaWYgKCBzdHIuaW5kZXhPZihjb250YWluKSAhPSAtMSApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcblxuICB9XG5cbiAgLy8gMOWfi+OCgeOBpzLmoYHjgavjgZnjgovplqLmlbBcbiAgYWRkMChzdHIsbnVtPS0yKXtcbiAgICBcbiAgICByZXR1cm4gKCBcIjAwMDAwMDAwMDAwMFwiICsgc3RyICkuc3Vic3RyKCBudW0gKTtcblxuICB9XG5cbiAgZmxvYXRGb3JtYXQoIG51bWJlciwgbiApIHtcblxuICAgIHZhciBfcG93ID0gTWF0aC5wb3coIDEwICwgbiApIDtcbiAgICByZXR1cm4gTWF0aC5yb3VuZCggbnVtYmVyICogX3BvdyApIC8gX3BvdyA7XG5cbiAgfVxuICAgIFxuICAvLyDlgKTmrrXooajoqJhcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcHJpY2UobnVtKSB7XG5cbiAgICByZXR1cm4gU3RyaW5nKG51bSkucmVwbGFjZSgvKFxcZCkoPz0oXFxkXFxkXFxkKSsoPyFcXGQpKS9nLCAnJDEsJyk7XG5cbiAgfVxuXG4gIC8vIOaWh+Wtl+WIl+OCkuWPjei7olxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAc3RyIDog5paH5a2X5YiXKFN0cmluZylcbiAgLy8gcmV0dXJuIDog5paH5a2X5YiXKFN0cmluZylcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc3RyUmV2ZXJzZShzdHIpIHtcblxuICAgIHZhciBpLCBsZW4sIHJlcztcbiAgICByZXMgPSBcIlwiO1xuICAgIGxlbiA9IHN0ci5sZW5ndGg7XG4gICAgaSA9IDE7XG4gICAgd2hpbGUgKGkgPD0gbGVuKSB7XG4gICAgICByZXMgKz0gc3RyLnN1YnN0cigtaSwgMSk7XG4gICAgICBpKys7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG5cbiAgfVxuICBcbiAgLy8g5paH5a2X5YiX44Gu5YWo572u5o+bXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEB2YWwgIDog5paH5a2X5YiXXG4gIC8vIEBvZWcgIDog572u5o+b5YmN44Gu5paH5a2X5YiXXG4gIC8vIEBkZXN0IDog572u5o+b5b6M44Gu5paH5a2X5YiXXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlcGxhY2VBbGwodmFsLCBvcmcsIGRlc3QpIHtcblxuICAgIHJldHVybiB2YWwuc3BsaXQob3JnKS5qb2luKGRlc3QpO1xuXG4gIH0gICAgXG4gIFxuICBzdHJSZXBsYWNlKHN0ciwgYmVmb3JlLCBhZnRlcikge1xuXG4gICAgdmFyIHIgPSBuZXcgUmVnRXhwKCBiZWZvcmUsICdnJyk7XG5cbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoIHIgLCBhZnRlciApO1xuXG4gIH0gICAgXG4gIFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIERhdGVcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgZ2V0Tm93KCkge1xuXG4gICAgdGhpcy5ub3cgPSBuZXcgRGF0ZSgpO1xuXG4gIH1cblxuICBzdGFydCgpIHtcblxuICAgIHRoaXMuc3RhcnRUaW1lID0gdGhpcy5ub3cuZ2V0VGltZSgpO1xuXG4gIH1cblxuICBlbGFwc2VkKCkge1xuXG4gICAgdGhpcy5lbGFwc2VkVGltZSA9IHRoaXMubm93LmdldFRpbWUoKSAtIHRoaXMuc3RhcnRUaW1lO1xuXG4gIH1cblxuICBtKCkge1xuXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoIHRoaXMuZWxhcHNlZFRpbWUgKyAxMDAgLyA2MCApO1xuXG4gIH1cblxuICBzKCkge1xuXG4gICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy5lbGFwc2VkVGltZSAvIDEwMDApO1xuXG4gIH1cblxuICBtcygpIHtcblxuICAgIHJldHVybiB0aGlzLmVsYXBzZWRUaW1lO1xuICAgIFxuICB9XG5cbiAgdGltZSgpIHtcblxuICAgIHRoaXMuZ2V0Tm93KCk7XG5cbiAgICB0aGlzLmhvdXIgPSB0aGlzLm5vdy5nZXRIb3VycygpOyAgICAgICAgICAvLyDmmYJcbiAgICB0aGlzLm1pbnV0ZSA9IHRoaXMubm93LmdldE1pbnV0ZXMoKTsgICAgICAvLyDliIZcbiAgICB0aGlzLnNlY29uZCA9IHRoaXMubm93LmdldFNlY29uZHMoKTtcbiAgICB0aGlzLm1pbGxTZWNvbmQgPSB0aGlzLm5vdy5nZXRNaWxsaXNlY29uZHMoKTtcblxuICB9XG5cbiAgZGF0ZSgpIHtcblxuICAgIHJldHVybiB0aGlzLm5vdy5nZXREYXRlKCk7XG5cbiAgfVxuXG4gIG1vbnRocygpIHtcblxuICAgIHZhciBtb250aGRheXMgPSBuZXcgQXJyYXkoMzEsIDI4LCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMSk7XG5cbiAgICByZXR1cm4gdGhpcy5ub3cuZ2V0TW9udGgoKSArIDE7XG5cbiAgfVxuXG4gIHllYXIoKSB7XG5cbiAgICByZXR1cm4gdGhpcy5ub3cuZ2V0RnVsbFllYXIoKTtcblxuICB9XG5cbiAgZGF5KCkge1xuXG4gICAgLy8g5puc5pelICjml6XmnKzoqp4pXG4gICAgdmFyIHdlZWtEYXlKUCA9IFtcIuaXpVwiLFwi5pyIXCIsXCLngatcIixcIuawtFwiLFwi5pyoXCIsXCLph5FcIixcIuWcn1wiXSA7XG4gICAgdmFyIHdESiA9IHdlZWtEYXlKUFt0aGlzLm5vdy5nZXREYXkoKV0gO1xuXG4gICAgLy8g5puc5pelICjoi7Hoqp4pXG4gICAgdmFyIHdlZWtEYXlFTiA9IFtcIlN1blwiLFwiTW9uXCIsXCJUdWVcIixcIldlZFwiLFwiVGh1XCIsXCJGcmlcIixcIlNhdFwiXSA7XG4gICAgdmFyIHdERSA9IHdlZWtEYXlFTlt0aGlzLm5vdy5nZXREYXkoKV0gO1xuXG4gIH1cbiAgXG4gIC8vIOaVsOaXpeW+jOOBrkRhdGXjgqrjg5bjgrjjgqfjgq/jg4jlj5blvpdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYWZ0ZXJEYXkoZGF0ZSwgbnVtKSB7XG5cbiAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkgKyBOdW1iZXIobnVtKSAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIERhdGEgdHlwZSBjaGVja1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBpc09iamVjdCh2YWx1ZSwgaWdub3JlQXJyYXkpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICE9PSBudWxsO1xuICB9XG5cbiAgaXNOdW1iZXIodmFsdWUpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInO1xuICB9XG5cbiAgaXNTdHJpbmcodmFsdWUpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnO1xuICB9XG5cbiAgaXNGdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbiAgfVxuXG4gIGlzQXJyYXkodmFsdWUpIHtcbiAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nO1xuICB9XG5cbiAgaXNOdWxsKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgPT09IG51bGw7XG4gIH1cblxuICBpc1VuZGVmaW5lZCh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCc7XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIG90aGVyXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzZXRJbWdTUFNpemUgKCR0YXJnZXQpe1xuXG4gICAgLy8gcmVzcG9uc2l2ZSBzcOOBruOBqOOBjeWHpueQhlxuICAgIGlmICghdGhpcy5pc1Jlc1NQKSByZXR1cm47XG4gICAgLy8g5LiA5bqm44Gg44GR5Yem55CGXG4gICAgLy8gaWYgKHRoaXMuaXNTZXRTUFNpemUpIHJldHVybjtcbiAgICAvLyB0aGlzLmlzU2V0U1BTaXplID0gdHJ1ZTtcblxuICAgIHZhciAkaW1nID0gJHRhcmdldCxcbiAgICAgICAgbGVuID0gJGltZy5sZW5ndGg7XG5cbiAgICAkaW1nLmVhY2goZnVuY3Rpb24oaSkge1xuXG4gICAgICAgIHZhciB3ID0gTWF0aC5mbG9vcigkKHRoaXMpLndpZHRoKCkgLyAyKSxcbiAgICAgICAgICAgIGggPSBNYXRoLmZsb29yKCQodGhpcykuaGVpZ2h0KCkgLyAyKTtcblxuICAgICAgICAkKHRoaXMpLmF0dHIoe1xuICAgICAgICAgICAgJ3dpZHRoJzogdyxcbiAgICAgICAgICAgICdoZWlnaHQnOiBoLFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAobGVuID09IGkgKyAxKSAkKHdpbmRvdykudHJpZ2dlcignc2V0U3BaaWVFbmQnKTtcblxuICAgIH0pO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gIOOCueODnuODm+aTjeS9nOeEoeWKuVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc2V0UHJldmVudCgpIHtcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICQod2luZG93KS5vbigndG91Y2htb3ZlLm5vQ29udHJvbCcsIGZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKTt9KTtcblxuICB9XG5cbiAgcmVtb3ZlUHJldmVudCgpIHtcblxuICAgICQod2luZG93KS5vZmYoJ3RvdWNobW92ZS5ub0NvbnRyb2wnKTtcblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vICBob3N0LHByb3Rjb2xcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHByb3RvY29sKCkge1xuXG4gICAgcmV0dXJuIGxvY2F0aW9uLnByb3RvY29sO1xuXG4gIH1cbiAgICBcbiAgaG9zdCgpIHtcblxuICAgIHJldHVybiBsb2NhdGlvbi5ob3N0bmFtZTtcbiAgICAvLyByZXR1cm4gbG9jYXRpb24uaG9zdFxuXG4gIH1cblxuICBwb3J0KCkge1xuXG4gICAgcmV0dXJuIGxvY2F0aW9uLnBvcnQ7XG5cbiAgfVxuICAgICAgICBcbiAgcGF0aCgpIHtcblxuICAgIHJldHVybiBsb2NhdGlvbi5wYXRobmFtZTtcblxuICB9XG5cbiAgcHJldmVudERlZmF1bHQoZSkge1xuXG4gICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuICAgIGlmIChlLnByZXZlbnREZWZhdWx0KVxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuXG4gIH1cblxuICBwcmV2ZW50RGVmYXVsdEZvclNjcm9sbEtleXMoZSkge1xuXG4gICAgaWYgKGtleXNbZS5rZXlDb2RlXSkge1xuICAgICAgICBwcmV2ZW50RGVmYXVsdChlKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICB9XG5cbiAgZGlzYWJsZVNjcm9sbCgpIHtcblxuICAgIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikgLy8gb2xkZXIgRkZcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTU1vdXNlU2Nyb2xsJywgdGhpcy5wcmV2ZW50RGVmYXVsdCwgZmFsc2UpO1xuICAgIHdpbmRvdy5vbndoZWVsID0gdGhpcy5wcmV2ZW50RGVmYXVsdDsgLy8gbW9kZXJuIHN0YW5kYXJkXG4gICAgd2luZG93Lm9ubW91c2V3aGVlbCA9IGRvY3VtZW50Lm9ubW91c2V3aGVlbCA9IHRoaXMucHJldmVudERlZmF1bHQ7IC8vIG9sZGVyIGJyb3dzZXJzLCBJRVxuICAgIHdpbmRvdy5vbnRvdWNobW92ZSAgPSB0aGlzLnByZXZlbnREZWZhdWx0OyAvLyBtb2JpbGVcbiAgICBkb2N1bWVudC5vbmtleWRvd24gID0gdGhpcy5wcmV2ZW50RGVmYXVsdEZvclNjcm9sbEtleXM7XG5cbiAgfVxuXG4gIGVuYWJsZVNjcm9sbCgpIHtcblxuICAgIGlmICh3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcilcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ0RPTU1vdXNlU2Nyb2xsJywgdGhpcy5wcmV2ZW50RGVmYXVsdCwgZmFsc2UpO1xuICAgIHdpbmRvdy5vbm1vdXNld2hlZWwgPSBkb2N1bWVudC5vbm1vdXNld2hlZWwgPSBudWxsOyBcbiAgICB3aW5kb3cub253aGVlbCA9IG51bGw7IFxuICAgIHdpbmRvdy5vbnRvdWNobW92ZSA9IG51bGw7XG4gICAgZG9jdW1lbnQub25rZXlkb3duID0gbnVsbDtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL015TGlicy9VdGlsLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogRnVuY1xuICogRGF0ZTpcbiAqIEF1dGhvcjpcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdW5jIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuYmxhbmsoKTtcbiAgICB0aGlzLmRlYnVnZ2VyKCk7XG4gICAgdGhpcy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKTtcbiAgICB0aGlzLmV4cGFuZGpRdWVyeSgpO1xuXG4gIH1cblxuICBibGFuaygpIHtcblxuICAgICQoKCk9PnskKCcuYmxhbmsnKS5hdHRyKCd0YXJnZXQnLCAnX2JsYW5rJyk7fSk7XG5cbiAgfVxuXG4gIGRlYnVnZ2VyKCkge1xuXG4gICAgLy8g44OH44OQ44OD44Kw44Oi44O844OJ5YiH5pu/XG4gICAgdmFyIFJFTEVBU0UgPSBnYi5pbi5jb25mLlJFTEVBU0U7XG5cbiAgICAvLyDnva7mj5vlr77osaHjga7jg6Hjgr3jg4Pjg4njgpLphY3liJfjgajjgZfjgabkv53mjIHjgZnjgotcbiAgICB2YXIgbWV0aG9kcyA9IFtcbiAgICAgICdsb2cnLFxuICAgICAgJ2RlYnVnJyxcbiAgICAgICdpbmZvJyxcbiAgICAgICd3YXJuJyxcbiAgICAgICdlcnJvcicsXG4gICAgICAnZGlyJyxcbiAgICAgICd0cmFjZScsXG4gICAgICAnYXNzZXJ0JyxcbiAgICAgICdkaXJ4bWwnLFxuICAgICAgJ2dyb3VwJyxcbiAgICAgICdncm91cEVuZCcsXG4gICAgICAndGltZScsXG4gICAgICAndGltZUVuZCcsXG4gICAgICAnY291bnQnLFxuICAgICAgJ3Byb2ZpbGUnLFxuICAgICAgJ3Byb2ZpbGVFbmQnXG4gICAgXTtcblxuICAgIC8vIGNvbnNvbGXjgYzkvb/jgYjjgarjgYTloLTlkIjjga/nqbrjga7jgqrjg5bjgrjjgqfjgq/jg4jjgpLoqK3lrprjgZfjgabjgYrjgY9cbiAgICBpZiggdHlwZW9mIHdpbmRvdy5jb25zb2xlID09PSBcInVuZGVmaW5lZFwiICl7XG4gICAgICB3aW5kb3cuY29uc29sZSA9IHt9O1xuICAgIH1cblxuICAgIC8vIOWQhOODoeOCveODg+ODieOCkndpbmRvd+OBuOebtOaOpei/veWKoOOBl+OBpuihjOOBj1xuICAgIGZvciggdmFyIGkgaW4gbWV0aG9kcyApe1xuICAgICAgKGZ1bmN0aW9uKCBtICl7XG5cbiAgICAgICAvLyBjb25zb2xl44Gr44GC44KL77yf44OH44OQ44OD44Kw44Oi44O844OJ44Gv5pyJ5Yq577yfY29uc29sZeOBruOCguOBruOBr+mWouaVsO+8n1xuICAgICAgIGlmKCBjb25zb2xlW21dICYmICFSRUxFQVNFICYmIHR5cGVvZiBjb25zb2xlW21dID09PSBcImZ1bmN0aW9uXCIgKXtcbiAgICAgICAgd2luZG93W21dID0gY29uc29sZVttXS5iaW5kKGNvbnNvbGUpO1xuICAgICAgIH0gZWxzZSB744CALy8gZGVidWdNb2Rl44GMZmFsc2Us44KC44GX44GP44Gv6Kmy5b2T44Oh44K944OD44OJ44GM5a2Y5Zyo44GX44Gq44GE5aC05ZCI44Gv44CB56m644Gu44Oh44K944OD44OJ44KS55So5oSP44GZ44KLXG4gICAgICAgIHdpbmRvd1ttXSA9IGZ1bmN0aW9uKCl7fTtcbiAgICAgICB9XG5cbiAgICAgIH0pKCBtZXRob2RzW2ldICk7XG4gICAgfVxuXG4gIH1cblxuICBwcmVwZW5kKHBhcmFtKSB7XG5cbiAgICAkKCdib2R5JykucHJlcGVuZChwYXJhbSk7XG5cbiAgfVxuXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSgpIHtcblxuICAgIHZhciBGUFMgPSAxMDAwLzYwO1xuXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgLy8gY2hyb21l44KE5pyA5paw44GuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgLy8g5Y+k44GEZmlyZWZveOeUqFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8ICAvLyBzYWZhcmk25Lul5YmN44CBaU9TNiBzYWZhcmnnlKhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oIGNhbGxiYWNrICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCBGUFMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Lm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oIHRpbWVyICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTsgICAgICBcblxuICB9XG5cbiAgZXhwYW5kalF1ZXJ5KCkge1xuXG4gICAgalF1ZXJ5LmZuLmV4dGVuZCh7XG4gICAgICB3OjAsIFxuICAgICAgaDowLCBcbiAgICAgIGFkanVzdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIHcgPSAkKHRoaXMpLmlubmVyV2lkdGgoKTtcbiAgICAgICAgICB2YXIgaCA9ICQodGhpcykuaW5uZXJIZWlnaHQoKTtcbiAgICAgICAgICAkKHRoaXMpLmNzcyh7XG4gICAgICAgICAgICAncG9zaXRpb24nOidhYnNvbHV0ZScsXG4gICAgICAgICAgICAnbGVmdCc6JzUwJScsXG4gICAgICAgICAgICAndG9wJzonNTAlJyxcbiAgICAgICAgICAgICdtYXJnaW4tbGVmdCc6Jy0nICsgKHcgLyAyKSArICdweCcsXG4gICAgICAgICAgICAnbWFyZ2luLXRvcCc6Jy0nICsgKGggLyAyKSArICdweCdcbiAgICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBhZGp1c3RXOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgdyA9ICQodGhpcykuaW5uZXJXaWR0aCgpO1xuICAgICAgICAgIHZhciBoID0gJCh0aGlzKS5pbm5lckhlaWdodCgpO1xuICAgICAgICAgICQodGhpcykuY3NzKHtcbiAgICAgICAgICAgICdwb3NpdGlvbic6J2Fic29sdXRlJyxcbiAgICAgICAgICAgICdsZWZ0JzonNTAlJyxcbiAgICAgICAgICAgICdtYXJnaW4tbGVmdCc6Jy0nICsgKHcgLyAyKSArICdweCdcbiAgICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBhZGp1c3RIOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgdyA9ICQodGhpcykuaW5uZXJXaWR0aCgpO1xuICAgICAgICAgIHZhciBoID0gJCh0aGlzKS5pbm5lckhlaWdodCgpO1xuICAgICAgICAgICQodGhpcykuY3NzKHtcbiAgICAgICAgICAgICdwb3NpdGlvbic6J2Fic29sdXRlJyxcbiAgICAgICAgICAgICd0b3AnOic1MCUnLFxuICAgICAgICAgICAgJ21hcmdpbi10b3AnOictJyArIChoIC8gMikgKyAncHgnXG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgfVxuXG4gIGNoZWNrQ3NzQmxlbmQoKSB7XG5cbiAgICBpZiAoJ0NTUycgaW4gd2luZG93ICYmICdzdXBwb3J0cycgaW4gd2luZG93LkNTUykge1xuICAgICAgaWYgKCF3aW5kb3cuQ1NTLnN1cHBvcnRzKCdtaXgtYmxlbmQtbW9kZScsICdzb2Z0LWxpZ2h0JykpIHtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25vdC1taXgtYmxlbmQtbW9kZScpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbG9nKGdiLmluLnUuaXNJRSk7XG5cbiAgICBpZiAoZ2IuaW4udS5pc0lFKSB7XG4gICAgICBcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdub3QtbWl4LWJsZW5kLW1vZGUnKVxuICAgICAgXG4gICAgfTtcblxuICB9XG5cbiAgbm90U2F2ZUltZygpIHtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIHBjXG4gICAgLy9cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIGlmIChnYi5pbi51LmlzUEMpIHtcblxuICAgICAgJCgoKT0+e1xuICAgICAgICAkKFwiaW1nXCIpLm9uKFwiY29udGV4dG1lbnVcIiwoKT0+e1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSlcbiAgICAgIH0pXG5cbiAgICB9XG5cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIHNwIGFuZHJvaWRcbiAgICAvL1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHZhciB2ID0gZ2IuaW4udS5pc0FuZHJvaWRWZXJzaW9uKCk7XG5cbiAgICBpZiAodj09dW5kZWZpbmVkKSByZXR1cm47XG4gICAgaWYgKHY8NSkge1xuXG4gICAgICB2YXIgdGltZXI7XG4gICAgICAkKFwiaW1nXCIpLm9uKFwidG91Y2hzdGFydFwiLCgpPT57XG4gICAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgIGFsZXJ0KFwi55S75YOP44Gv5L+d5a2Y44Gn44GN44G+44Gb44KTXCIpXG4gICAgICAgIH0sNTAwKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KVxuICAgICAgJChcImltZ1wiKS5vbihcInRvdWNoZW5kXCIsKCk9PntcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSkgICAgICBcblxuICAgIH1cblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vcHJvamVjdC1uYW1lL2Fzc2V0cy9qcy9fZGV2anMvc3JjL015TGlicy9GdW5jLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogTWFpblxuICogRGF0ZTpcbiAqIEF1dGhvcjpcbiAqL1xuXG5pbXBvcnQgRGlzcGxheVRvcCBmcm9tICcuLi9EaXNwbGF5L0Rpc3BsYXlUb3AuanMnO1xuLy8gaW1wb3J0IERpc3BsYXlNb3ZpZSBmcm9tICcuLi9EaXNwbGF5L0Rpc3BsYXlNb3ZpZS5qcyc7XG4vLyBpbXBvcnQgRGlzcGxheUludGVydmlldyBmcm9tICcuLi9EaXNwbGF5L0Rpc3BsYXlJbnRlcnZpZXcuanMnO1xuLy8gaW1wb3J0IERpc3BsYXlJbnRlcnZpZXdEZXRhaWwgZnJvbSAnLi4vRGlzcGxheS9EaXNwbGF5SW50ZXJ2aWV3RGV0YWlsLmpzJztcbi8vIGltcG9ydCBEaXNwbGF5SGlzdG9yeSBmcm9tICcuLi9EaXNwbGF5L0Rpc3BsYXlIaXN0b3J5LmpzJztcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMub25JbW1lZGlhdGUoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBvbkltbWVkaWF0ZSgpIHtcblxuICB9XG5cbiAgb25SZWFkeSgpIHtcblxuICAgIC8vcGFnZeODmuODvOOCuOWIpeOBrklE44KS5Y+W5b6XXG4gICAgdmFyIHBhZ2UgPSAkKCdib2R5JykuZGF0YSgnaWQnKTtcblxuXHRcdC8vcGFnZeOBrklE44GU44Go44Gr55m654Gr44GZ44KL44Kv44Op44K544Gu5oyv44KK5YiG44GRXG4gICAgc3dpdGNoIChwYWdlKSB7XG5cbiAgICAgIGNhc2UgJ3RvcCc6XG5cbiAgICAgICAgbmV3IERpc3BsYXlUb3AoKTtcblxuICAgICAgICBicmVhaztcblxuICAgICAgLy8gY2FzZSAnbW92aWUnOlxuICAgICAgLy9cbiAgICAgIC8vICAgbmV3IERpc3BsYXlNb3ZpZSgpO1xuXHRcdFx0Ly9cbiAgICAgIC8vICAgYnJlYWs7XG5cdFx0XHQvL1xuICAgICAgLy8gY2FzZSAnaW50ZXJ2aWV3JzpcbiAgICAgIC8vXG4gICAgICAvLyAgIG5ldyBEaXNwbGF5SW50ZXJ2aWV3KCk7XG5cdFx0XHQvL1xuICAgICAgLy8gICBicmVhaztcblx0XHRcdC8vXG4gICAgICAvLyBjYXNlICdpbnRlcnZpZXdfZGV0YWlsJzpcbiAgICAgIC8vXG4gICAgICAvLyAgIG5ldyBEaXNwbGF5SW50ZXJ2aWV3RGV0YWlsKCk7XG5cdFx0XHQvL1xuICAgICAgLy8gICBicmVhaztcblx0XHRcdC8vXG4gICAgICAvLyBjYXNlICdoaXN0b3J5JzpcbiAgICAgIC8vXG4gICAgICAvLyAgIG5ldyBEaXNwbGF5SGlzdG9yeSgpO1xuXHRcdFx0Ly9cbiAgICAgIC8vICAgYnJlYWs7XG5cbiAgICB9XG5cbiAgfVxuXG4gIG9uTG9hZCgpIHtcblxuICAgIFxuICB9XG5cbiAgb25SZW5kZXIoKSB7XG5cblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgJChkb2N1bWVudCkub24oJ3JlYWR5JywgdGhpcy5vblJlYWR5LmJpbmQodGhpcykpO1xuICAgICQod2luZG93KS5vbignbG9hZCcsIHRoaXMub25Mb2FkLmJpbmQodGhpcykpOyAgICAgICAgXG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL3NyYy9QYWdlL01haW4uanMiLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIERpc3BsYXlcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBpbXBvcnQgRWZmZWN0cyBmcm9tICcuL0VmZmVjdHMvRWZmZWN0cy5qcyc7XG4vLyBpbXBvcnQgU2NhbGVUb3AgZnJvbSAnLi4vRGlzcGxheS9MYXlvdXQvU2l6ZS9TY2FsZVRvcC5qcyc7XG5cbi8vIGltcG9ydCBXZWJHTGluaXQgZnJvbSAnLi9XZWJHTGluaXQuanMnO1xuXG5pbXBvcnQgQ2FudmFzIGZyb20gXCIuLi9WaXN1YWwvQ2FudmFzXCI7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzcGxheVRvcCB7XG5cbiAgY29uc3RydWN0b3IoKXtcblxuICAgIHRoaXMub25JbW1lZGlhdGUoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBvbkltbWVkaWF0ZSgpIHtcblxuICAgIC8vIOOCouODi+ODoeODvOOCt+ODp+ODs+ODq+ODvOODl+OCueOCv+ODvOODiFxuICAgIC8vIGdiLmluLnVwLmxvb3AoKTtcbiAgICBcbiAgfVxuXG4gIG9uTG9hZCgpIHtcblxuICAgIGdiLmluLmNhbnZhcyA9IG5ldyBDYW52YXMoe1xuICAgICAgb3V0cHV0OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2ViZ2wtb3V0cHV0JylcbiAgICB9KTtcblxuICAgIGdiLmluLmNhbnZhcy5pbml0KCk7XG5cblxuICB9XG5cbiAgc3RhdGljIHJ1bigpIHtcblxuXHRcdC8vIHdpbmRvdy5jb25zb2xlLmxvZygnc3RhdGljX1J1bicpO1xuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCB0aGlzLm9uTG9hZC5iaW5kKHRoaXMpKTsgICAgICAgIFxuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9EaXNwbGF5VG9wLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogQ2FudmFzXG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbmltcG9ydCBFbnRyeSBmcm9tICcuLi9FbnRyeS5qcyc7XG4vLyBpbXBvcnQgQ2FtZXJhIGZyb20gJy4vVXRpbHMvQ2FtZXJhLmpzJztcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMgZXh0ZW5kcyBFbnRyeXtcblxuICBjb25zdHJ1Y3RvcihvcHRzID0ge30pIHtcblxuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgdGhpcy5vdXRwdXQgPSBvcHRzLm91dHB1dCB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHRoaXMuY2FtZXJhID0gbnVsbDtcbiAgICB0aGlzLnJlbmRlcmVyID0gbnVsbDtcbiAgICB0aGlzLnNjZW5lID0gbnVsbDtcblx0XHR0aGlzLmN1YmUgPSBudWxsO1xuXG4gICAgdGhpcy5jcmVhdGVDYW1lcmEgPSB0aGlzLl9jcmVhdGVDYW1lcmEuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNyZWF0ZVJlbmRlcmVyID0gdGhpcy5fY3JlYXRlUmVuZGVyZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNyZWF0ZVNjZW5lID0gdGhpcy5fY3JlYXRlU2NlbmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNyZWF0ZU9iamVjdCA9IHRoaXMuX2NyZWF0ZU9iamVjdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMub3JiaXRDb250cm9scyA9IHRoaXMuX29yYml0Q29udHJvbHMuYmluZCh0aGlzKTtcblxuICAgIHRoaXMub25SZXNpemUgPSB0aGlzLl9vblJlc2l6ZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5VcGRhdGUgPSB0aGlzLl9VcGRhdGUuYmluZCh0aGlzKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIOWIneacn+WMllxuICAgKi9cbiAgaW5pdCgpe1xuXG4gICAgdGhpcy5jcmVhdGVDYW1lcmEoKTtcblx0XHR0aGlzLmNyZWF0ZVNjZW5lKCk7XG4gICAgdGhpcy5jcmVhdGVSZW5kZXJlcigpO1xuXG5cdFx0dGhpcy5vcmJpdENvbnRyb2xzKCk7XG5cblx0XHR0aGlzLmNyZWF0ZU9iamVjdCgpO1xuXG4gICAgdGhpcy5VcGRhdGUoKTtcblxuICAgIC8v44Oq44K144Kk44K644Kk44OZ44Oz44OI55m654GrXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgIHRoaXMub25SZXNpemUoKTtcbiAgICB9LCBmYWxzZSk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiDjgqvjg6Hjg6nkvZzmiJBcbiAgICovXG4gIF9jcmVhdGVDYW1lcmEoKXtcblxuICAgIHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDQ1LCB0aGlzLndpZHRoIC8gdGhpcy5oZWlnaHQsIDAuMSwgMTAwMCk7XG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueCA9IC0zMDtcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi55ID0gNDA7XG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IDMwO1xuXG4gICAgdGhpcy5jYW1lcmEubG9va0F0KG5ldyBUSFJFRS5WZWN0b3IzKDAsMCwwKSk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiDjg6zjg7Pjg4Djg6njg7zkvZzmiJBcbiAgICovXG4gIF9jcmVhdGVSZW5kZXJlcigpe1xuXG5cdFx0dGhpcy5yZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHtcbiAgICAgIGFscGhhICAgICAgICAgICAgICA6IGZhbHNlLFxuICAgICAgYW50aWFsaWFzICAgICAgICAgIDogZmFsc2UsXG4gICAgICBzdGVuY2lsICAgICAgICAgICAgOiBmYWxzZSxcbiAgICAgIGRlcHRoICAgICAgICAgICAgICA6IHRydWUsXG4gICAgICBwcmVtdWx0aXBsaWVkQWxwaGEgOiBmYWxzZVxuXHRcdH0pO1xuXG4gICAgdGhpcy5yZW5kZXJlci5zZXRDbGVhckNvbG9yKDB4ZmZmZmZmKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFBpeGVsUmF0aW8od2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMSk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB0aGlzLm91dHB1dC5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQpO1xuXG4gIH1cblxuICAvKipcbiAgICrjgIDjgrfjg7zjg7PkvZzmiJBcbiAgICovXG4gIF9jcmVhdGVTY2VuZSgpe1xuXG5cdFx0dGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuXG4gIH1cblxuXHQvKipcblx0ICrjgIBPYmplY3TkvZzmiJBcblx0ICovXG5cdF9jcmVhdGVPYmplY3QoKXtcblxuICAgIHZhciBjdWJlR2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoNCwgNCwgNCk7XG4gICAgdmFyIGN1YmVNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7XG4gICAgICBjb2xvcjogMHgwMDAwMDAsXG4gICAgICB3aXJlZnJhbWU6IHRydWVcbiAgICB9KTtcblxuICAgIHRoaXMuY3ViZSA9IG5ldyBUSFJFRS5NZXNoKGN1YmVHZW9tZXRyeSwgY3ViZU1hdGVyaWFsKTtcbiAgICB0aGlzLmN1YmUucG9zaXRpb24ueCA9IDM7XG4gICAgdGhpcy5jdWJlLnBvc2l0aW9uLnkgPSAzO1xuICAgIHRoaXMuY3ViZS5wb3NpdGlvbi56ID0gMztcblxuICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMuY3ViZSk7XG5cblx0fVxuXG4gIC8qKlxuICAgKuOAgOabtOaWsFxuICAgKi9cbiAgX1VwZGF0ZSgpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICgpID0+IHtcbiAgICAgIHRoaXMuVXBkYXRlKCk7XG4gICAgfSk7XG4gICAgLy8gdGhpcy5jb250cm9scy51cGRhdGUoKTtcbiAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSk7XG4gIH1cblxuICAvKipcbiAgICrjgIDnlLvpnaLjg6rjgrXjgqTjgrpcbiAgICovXG4gIF9vblJlc2l6ZSgpIHtcbiAgICB0aGlzLmNhbWVyYS5hc3BlY3QgPSB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICB0aGlzLmNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICB9XG5cblx0LyoqXG4gICAqIOOCq+ODoeODqeOCs+ODs+ODiOODreODvOODq1xuXHQgKi9cblx0X29yYml0Q29udHJvbHMoKXtcblx0XHR0aGlzLmNvbnRyb2xzID0gbmV3IFRIUkVFLk9yYml0Q29udHJvbHModGhpcy5jYW1lcmEpO1xuXHRcdHRoaXMuY29udHJvbHMuYXV0b1JvdGF0ZSA9IHRydWU7XG5cdFx0dmFyIGNsb2NrID0gbmV3IFRIUkVFLkNsb2NrKCk7XG5cblx0XHR2YXIgZGVsdGEgPSBjbG9jay5nZXREZWx0YSgpO1xuXHRcdHRoaXMuY29udHJvbHMudXBkYXRlKGRlbHRhKTtcbiAgfVxuXG5cdHNldEV2ZW50cygpIHtcblxuICAgICQod2luZG93KS5vbignbG9hZCcsIHRoaXMub25Mb2FkLmJpbmQodGhpcykpO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvVmlzdWFsL0NhbnZhcy5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IEVudHJ5XG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbi8vIHdpbmRvdy5USFJFRSA9IHJlcXVpcmUoJy4uL2xpYnMvdGhyZWUubWluLmpzJyk7XG5yZXF1aXJlKCcuLi9saWJzL09yYml0Q29udHJvbHMuanMnKTtcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbnRyeSB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiDliJ3mnJ/ljJZcblx0ICovXG5cdGluaXQoKXtcblxuXG5cdH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9wcm9qZWN0LW5hbWUvYXNzZXRzL2pzL19kZXZqcy9zcmMvRW50cnkuanMiLCIvKipcbiAqIEBhdXRob3IgcWlhbyAvIGh0dHBzOi8vZ2l0aHViLmNvbS9xaWFvXG4gKiBAYXV0aG9yIG1yZG9vYiAvIGh0dHA6Ly9tcmRvb2IuY29tXG4gKiBAYXV0aG9yIGFsdGVyZWRxIC8gaHR0cDovL2FsdGVyZWRxdWFsaWEuY29tL1xuICogQGF1dGhvciBXZXN0TGFuZ2xleSAvIGh0dHA6Ly9naXRodWIuY29tL1dlc3RMYW5nbGV5XG4gKiBAYXV0aG9yIGVyaWNoNjY2IC8gaHR0cDovL2VyaWNoYWluZXMuY29tXG4gKi9cblxuLy8gVGhpcyBzZXQgb2YgY29udHJvbHMgcGVyZm9ybXMgb3JiaXRpbmcsIGRvbGx5aW5nICh6b29taW5nKSwgYW5kIHBhbm5pbmcuXG4vLyBVbmxpa2UgVHJhY2tiYWxsQ29udHJvbHMsIGl0IG1haW50YWlucyB0aGUgXCJ1cFwiIGRpcmVjdGlvbiBvYmplY3QudXAgKCtZIGJ5IGRlZmF1bHQpLlxuLy9cbi8vICAgIE9yYml0IC0gbGVmdCBtb3VzZSAvIHRvdWNoOiBvbmUgZmluZ2VyIG1vdmVcbi8vICAgIFpvb20gLSBtaWRkbGUgbW91c2UsIG9yIG1vdXNld2hlZWwgLyB0b3VjaDogdHdvIGZpbmdlciBzcHJlYWQgb3Igc3F1aXNoXG4vLyAgICBQYW4gLSByaWdodCBtb3VzZSwgb3IgYXJyb3cga2V5cyAvIHRvdWNoOiB0aHJlZSBmaW50ZXIgc3dpcGVcblxuVEhSRUUuT3JiaXRDb250cm9scyA9IGZ1bmN0aW9uICggb2JqZWN0LCBkb21FbGVtZW50ICkge1xuXG5cdHRoaXMub2JqZWN0ID0gb2JqZWN0O1xuXG5cdHRoaXMuZG9tRWxlbWVudCA9ICggZG9tRWxlbWVudCAhPT0gdW5kZWZpbmVkICkgPyBkb21FbGVtZW50IDogZG9jdW1lbnQ7XG5cblx0Ly8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgdGhpcyBjb250cm9sXG5cdHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cblx0Ly8gXCJ0YXJnZXRcIiBzZXRzIHRoZSBsb2NhdGlvbiBvZiBmb2N1cywgd2hlcmUgdGhlIG9iamVjdCBvcmJpdHMgYXJvdW5kXG5cdHRoaXMudGFyZ2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuXHQvLyBIb3cgZmFyIHlvdSBjYW4gZG9sbHkgaW4gYW5kIG91dCAoIFBlcnNwZWN0aXZlQ2FtZXJhIG9ubHkgKVxuXHR0aGlzLm1pbkRpc3RhbmNlID0gMDtcblx0dGhpcy5tYXhEaXN0YW5jZSA9IEluZmluaXR5O1xuXG5cdC8vIEhvdyBmYXIgeW91IGNhbiB6b29tIGluIGFuZCBvdXQgKCBPcnRob2dyYXBoaWNDYW1lcmEgb25seSApXG5cdHRoaXMubWluWm9vbSA9IDA7XG5cdHRoaXMubWF4Wm9vbSA9IEluZmluaXR5O1xuXG5cdC8vIEhvdyBmYXIgeW91IGNhbiBvcmJpdCB2ZXJ0aWNhbGx5LCB1cHBlciBhbmQgbG93ZXIgbGltaXRzLlxuXHQvLyBSYW5nZSBpcyAwIHRvIE1hdGguUEkgcmFkaWFucy5cblx0dGhpcy5taW5Qb2xhckFuZ2xlID0gMDsgLy8gcmFkaWFuc1xuXHR0aGlzLm1heFBvbGFyQW5nbGUgPSBNYXRoLlBJOyAvLyByYWRpYW5zXG5cblx0Ly8gSG93IGZhciB5b3UgY2FuIG9yYml0IGhvcml6b250YWxseSwgdXBwZXIgYW5kIGxvd2VyIGxpbWl0cy5cblx0Ly8gSWYgc2V0LCBtdXN0IGJlIGEgc3ViLWludGVydmFsIG9mIHRoZSBpbnRlcnZhbCBbIC0gTWF0aC5QSSwgTWF0aC5QSSBdLlxuXHR0aGlzLm1pbkF6aW11dGhBbmdsZSA9IC0gSW5maW5pdHk7IC8vIHJhZGlhbnNcblx0dGhpcy5tYXhBemltdXRoQW5nbGUgPSBJbmZpbml0eTsgLy8gcmFkaWFuc1xuXG5cdC8vIFNldCB0byB0cnVlIHRvIGVuYWJsZSBkYW1waW5nIChpbmVydGlhKVxuXHQvLyBJZiBkYW1waW5nIGlzIGVuYWJsZWQsIHlvdSBtdXN0IGNhbGwgY29udHJvbHMudXBkYXRlKCkgaW4geW91ciBhbmltYXRpb24gbG9vcFxuXHR0aGlzLmVuYWJsZURhbXBpbmcgPSBmYWxzZTtcblx0dGhpcy5kYW1waW5nRmFjdG9yID0gMC4yNTtcblxuXHQvLyBUaGlzIG9wdGlvbiBhY3R1YWxseSBlbmFibGVzIGRvbGx5aW5nIGluIGFuZCBvdXQ7IGxlZnQgYXMgXCJ6b29tXCIgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuXHQvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSB6b29taW5nXG5cdHRoaXMuZW5hYmxlWm9vbSA9IHRydWU7XG5cdHRoaXMuem9vbVNwZWVkID0gMS4wO1xuXG5cdC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHJvdGF0aW5nXG5cdHRoaXMuZW5hYmxlUm90YXRlID0gdHJ1ZTtcblx0dGhpcy5yb3RhdGVTcGVlZCA9IDEuMDtcblxuXHQvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSBwYW5uaW5nXG5cdHRoaXMuZW5hYmxlUGFuID0gdHJ1ZTtcblx0dGhpcy5rZXlQYW5TcGVlZCA9IDcuMDtcdC8vIHBpeGVscyBtb3ZlZCBwZXIgYXJyb3cga2V5IHB1c2hcblxuXHQvLyBTZXQgdG8gdHJ1ZSB0byBhdXRvbWF0aWNhbGx5IHJvdGF0ZSBhcm91bmQgdGhlIHRhcmdldFxuXHQvLyBJZiBhdXRvLXJvdGF0ZSBpcyBlbmFibGVkLCB5b3UgbXVzdCBjYWxsIGNvbnRyb2xzLnVwZGF0ZSgpIGluIHlvdXIgYW5pbWF0aW9uIGxvb3Bcblx0dGhpcy5hdXRvUm90YXRlID0gZmFsc2U7XG5cdHRoaXMuYXV0b1JvdGF0ZVNwZWVkID0gMi4wOyAvLyAzMCBzZWNvbmRzIHBlciByb3VuZCB3aGVuIGZwcyBpcyA2MFxuXG5cdC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHVzZSBvZiB0aGUga2V5c1xuXHR0aGlzLmVuYWJsZUtleXMgPSB0cnVlO1xuXG5cdC8vIFRoZSBmb3VyIGFycm93IGtleXNcblx0dGhpcy5rZXlzID0geyBMRUZUOiAzNywgVVA6IDM4LCBSSUdIVDogMzksIEJPVFRPTTogNDAgfTtcblxuXHQvLyBNb3VzZSBidXR0b25zXG5cdHRoaXMubW91c2VCdXR0b25zID0geyBPUkJJVDogVEhSRUUuTU9VU0UuTEVGVCwgWk9PTTogVEhSRUUuTU9VU0UuTUlERExFLCBQQU46IFRIUkVFLk1PVVNFLlJJR0hUIH07XG5cblx0Ly8gZm9yIHJlc2V0XG5cdHRoaXMudGFyZ2V0MCA9IHRoaXMudGFyZ2V0LmNsb25lKCk7XG5cdHRoaXMucG9zaXRpb24wID0gdGhpcy5vYmplY3QucG9zaXRpb24uY2xvbmUoKTtcblx0dGhpcy56b29tMCA9IHRoaXMub2JqZWN0Lnpvb207XG5cblx0Ly9cblx0Ly8gcHVibGljIG1ldGhvZHNcblx0Ly9cblxuXHR0aGlzLmdldFBvbGFyQW5nbGUgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRyZXR1cm4gc3BoZXJpY2FsLnBoaTtcblxuXHR9O1xuXG5cdHRoaXMuZ2V0QXppbXV0aGFsQW5nbGUgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRyZXR1cm4gc3BoZXJpY2FsLnRoZXRhO1xuXG5cdH07XG5cblx0dGhpcy5yZXNldCA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdHNjb3BlLnRhcmdldC5jb3B5KCBzY29wZS50YXJnZXQwICk7XG5cdFx0c2NvcGUub2JqZWN0LnBvc2l0aW9uLmNvcHkoIHNjb3BlLnBvc2l0aW9uMCApO1xuXHRcdHNjb3BlLm9iamVjdC56b29tID0gc2NvcGUuem9vbTA7XG5cblx0XHRzY29wZS5vYmplY3QudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIGNoYW5nZUV2ZW50ICk7XG5cblx0XHRzY29wZS51cGRhdGUoKTtcblxuXHRcdHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHR9O1xuXG5cdC8vIHRoaXMgbWV0aG9kIGlzIGV4cG9zZWQsIGJ1dCBwZXJoYXBzIGl0IHdvdWxkIGJlIGJldHRlciBpZiB3ZSBjYW4gbWFrZSBpdCBwcml2YXRlLi4uXG5cdHRoaXMudXBkYXRlID0gZnVuY3Rpb24oKSB7XG5cblx0XHR2YXIgb2Zmc2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuXHRcdC8vIHNvIGNhbWVyYS51cCBpcyB0aGUgb3JiaXQgYXhpc1xuXHRcdHZhciBxdWF0ID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tVW5pdFZlY3RvcnMoIG9iamVjdC51cCwgbmV3IFRIUkVFLlZlY3RvcjMoIDAsIDEsIDAgKSApO1xuXHRcdHZhciBxdWF0SW52ZXJzZSA9IHF1YXQuY2xvbmUoKS5pbnZlcnNlKCk7XG5cblx0XHR2YXIgbGFzdFBvc2l0aW9uID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblx0XHR2YXIgbGFzdFF1YXRlcm5pb24gPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuXG5cdFx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAoKSB7XG5cblx0XHRcdHZhciBwb3NpdGlvbiA9IHNjb3BlLm9iamVjdC5wb3NpdGlvbjtcblxuXHRcdFx0b2Zmc2V0LmNvcHkoIHBvc2l0aW9uICkuc3ViKCBzY29wZS50YXJnZXQgKTtcblxuXHRcdFx0Ly8gcm90YXRlIG9mZnNldCB0byBcInktYXhpcy1pcy11cFwiIHNwYWNlXG5cdFx0XHRvZmZzZXQuYXBwbHlRdWF0ZXJuaW9uKCBxdWF0ICk7XG5cblx0XHRcdC8vIGFuZ2xlIGZyb20gei1heGlzIGFyb3VuZCB5LWF4aXNcblx0XHRcdHNwaGVyaWNhbC5zZXRGcm9tVmVjdG9yMyggb2Zmc2V0ICk7XG5cblx0XHRcdGlmICggc2NvcGUuYXV0b1JvdGF0ZSAmJiBzdGF0ZSA9PT0gU1RBVEUuTk9ORSApIHtcblxuXHRcdFx0XHRyb3RhdGVMZWZ0KCBnZXRBdXRvUm90YXRpb25BbmdsZSgpICk7XG5cblx0XHRcdH1cblxuXHRcdFx0c3BoZXJpY2FsLnRoZXRhICs9IHNwaGVyaWNhbERlbHRhLnRoZXRhO1xuXHRcdFx0c3BoZXJpY2FsLnBoaSArPSBzcGhlcmljYWxEZWx0YS5waGk7XG5cblx0XHRcdC8vIHJlc3RyaWN0IHRoZXRhIHRvIGJlIGJldHdlZW4gZGVzaXJlZCBsaW1pdHNcblx0XHRcdHNwaGVyaWNhbC50aGV0YSA9IE1hdGgubWF4KCBzY29wZS5taW5BemltdXRoQW5nbGUsIE1hdGgubWluKCBzY29wZS5tYXhBemltdXRoQW5nbGUsIHNwaGVyaWNhbC50aGV0YSApICk7XG5cblx0XHRcdC8vIHJlc3RyaWN0IHBoaSB0byBiZSBiZXR3ZWVuIGRlc2lyZWQgbGltaXRzXG5cdFx0XHRzcGhlcmljYWwucGhpID0gTWF0aC5tYXgoIHNjb3BlLm1pblBvbGFyQW5nbGUsIE1hdGgubWluKCBzY29wZS5tYXhQb2xhckFuZ2xlLCBzcGhlcmljYWwucGhpICkgKTtcblxuXHRcdFx0c3BoZXJpY2FsLm1ha2VTYWZlKCk7XG5cblxuXHRcdFx0c3BoZXJpY2FsLnJhZGl1cyAqPSBzY2FsZTtcblxuXHRcdFx0Ly8gcmVzdHJpY3QgcmFkaXVzIHRvIGJlIGJldHdlZW4gZGVzaXJlZCBsaW1pdHNcblx0XHRcdHNwaGVyaWNhbC5yYWRpdXMgPSBNYXRoLm1heCggc2NvcGUubWluRGlzdGFuY2UsIE1hdGgubWluKCBzY29wZS5tYXhEaXN0YW5jZSwgc3BoZXJpY2FsLnJhZGl1cyApICk7XG5cblx0XHRcdC8vIG1vdmUgdGFyZ2V0IHRvIHBhbm5lZCBsb2NhdGlvblxuXHRcdFx0c2NvcGUudGFyZ2V0LmFkZCggcGFuT2Zmc2V0ICk7XG5cblx0XHRcdG9mZnNldC5zZXRGcm9tU3BoZXJpY2FsKCBzcGhlcmljYWwgKTtcblxuXHRcdFx0Ly8gcm90YXRlIG9mZnNldCBiYWNrIHRvIFwiY2FtZXJhLXVwLXZlY3Rvci1pcy11cFwiIHNwYWNlXG5cdFx0XHRvZmZzZXQuYXBwbHlRdWF0ZXJuaW9uKCBxdWF0SW52ZXJzZSApO1xuXG5cdFx0XHRwb3NpdGlvbi5jb3B5KCBzY29wZS50YXJnZXQgKS5hZGQoIG9mZnNldCApO1xuXG5cdFx0XHRzY29wZS5vYmplY3QubG9va0F0KCBzY29wZS50YXJnZXQgKTtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVEYW1waW5nID09PSB0cnVlICkge1xuXG5cdFx0XHRcdHNwaGVyaWNhbERlbHRhLnRoZXRhICo9ICggMSAtIHNjb3BlLmRhbXBpbmdGYWN0b3IgKTtcblx0XHRcdFx0c3BoZXJpY2FsRGVsdGEucGhpICo9ICggMSAtIHNjb3BlLmRhbXBpbmdGYWN0b3IgKTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRzcGhlcmljYWxEZWx0YS5zZXQoIDAsIDAsIDAgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRzY2FsZSA9IDE7XG5cdFx0XHRwYW5PZmZzZXQuc2V0KCAwLCAwLCAwICk7XG5cblx0XHRcdC8vIHVwZGF0ZSBjb25kaXRpb24gaXM6XG5cdFx0XHQvLyBtaW4oY2FtZXJhIGRpc3BsYWNlbWVudCwgY2FtZXJhIHJvdGF0aW9uIGluIHJhZGlhbnMpXjIgPiBFUFNcblx0XHRcdC8vIHVzaW5nIHNtYWxsLWFuZ2xlIGFwcHJveGltYXRpb24gY29zKHgvMikgPSAxIC0geF4yIC8gOFxuXG5cdFx0XHRpZiAoIHpvb21DaGFuZ2VkIHx8XG5cdFx0XHRcdGxhc3RQb3NpdGlvbi5kaXN0YW5jZVRvU3F1YXJlZCggc2NvcGUub2JqZWN0LnBvc2l0aW9uICkgPiBFUFMgfHxcblx0XHRcdFx0OCAqICggMSAtIGxhc3RRdWF0ZXJuaW9uLmRvdCggc2NvcGUub2JqZWN0LnF1YXRlcm5pb24gKSApID4gRVBTICkge1xuXG5cdFx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIGNoYW5nZUV2ZW50ICk7XG5cblx0XHRcdFx0bGFzdFBvc2l0aW9uLmNvcHkoIHNjb3BlLm9iamVjdC5wb3NpdGlvbiApO1xuXHRcdFx0XHRsYXN0UXVhdGVybmlvbi5jb3B5KCBzY29wZS5vYmplY3QucXVhdGVybmlvbiApO1xuXHRcdFx0XHR6b29tQ2hhbmdlZCA9IGZhbHNlO1xuXG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBmYWxzZTtcblxuXHRcdH07XG5cblx0fSgpO1xuXG5cdHRoaXMuZGlzcG9zZSA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnY29udGV4dG1lbnUnLCBvbkNvbnRleHRNZW51LCBmYWxzZSApO1xuXHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNlZG93bicsIG9uTW91c2VEb3duLCBmYWxzZSApO1xuXHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3doZWVsJywgb25Nb3VzZVdoZWVsLCBmYWxzZSApO1xuXG5cdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydCwgZmFsc2UgKTtcblx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaGVuZCcsIG9uVG91Y2hFbmQsIGZhbHNlICk7XG5cdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAndG91Y2htb3ZlJywgb25Ub3VjaE1vdmUsIGZhbHNlICk7XG5cblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUsIGZhbHNlICk7XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnLCBvbk1vdXNlVXAsIGZhbHNlICk7XG5cblx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCBvbktleURvd24sIGZhbHNlICk7XG5cblx0XHQvL3Njb3BlLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2Rpc3Bvc2UnIH0gKTsgLy8gc2hvdWxkIHRoaXMgYmUgYWRkZWQgaGVyZT9cblxuXHR9O1xuXG5cdC8vXG5cdC8vIGludGVybmFsc1xuXHQvL1xuXG5cdHZhciBzY29wZSA9IHRoaXM7XG5cblx0dmFyIGNoYW5nZUV2ZW50ID0geyB0eXBlOiAnY2hhbmdlJyB9O1xuXHR2YXIgc3RhcnRFdmVudCA9IHsgdHlwZTogJ3N0YXJ0JyB9O1xuXHR2YXIgZW5kRXZlbnQgPSB7IHR5cGU6ICdlbmQnIH07XG5cblx0dmFyIFNUQVRFID0geyBOT05FIDogLSAxLCBST1RBVEUgOiAwLCBET0xMWSA6IDEsIFBBTiA6IDIsIFRPVUNIX1JPVEFURSA6IDMsIFRPVUNIX0RPTExZIDogNCwgVE9VQ0hfUEFOIDogNSB9O1xuXG5cdHZhciBzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0dmFyIEVQUyA9IDAuMDAwMDAxO1xuXG5cdC8vIGN1cnJlbnQgcG9zaXRpb24gaW4gc3BoZXJpY2FsIGNvb3JkaW5hdGVzXG5cdHZhciBzcGhlcmljYWwgPSBuZXcgVEhSRUUuU3BoZXJpY2FsKCk7XG5cdHZhciBzcGhlcmljYWxEZWx0YSA9IG5ldyBUSFJFRS5TcGhlcmljYWwoKTtcblxuXHR2YXIgc2NhbGUgPSAxO1xuXHR2YXIgcGFuT2Zmc2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblx0dmFyIHpvb21DaGFuZ2VkID0gZmFsc2U7XG5cblx0dmFyIHJvdGF0ZVN0YXJ0ID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblx0dmFyIHJvdGF0ZUVuZCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdHZhciByb3RhdGVEZWx0YSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cblx0dmFyIHBhblN0YXJ0ID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblx0dmFyIHBhbkVuZCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdHZhciBwYW5EZWx0YSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cblx0dmFyIGRvbGx5U3RhcnQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXHR2YXIgZG9sbHlFbmQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXHR2YXIgZG9sbHlEZWx0YSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cblx0ZnVuY3Rpb24gZ2V0QXV0b1JvdGF0aW9uQW5nbGUoKSB7XG5cblx0XHRyZXR1cm4gMiAqIE1hdGguUEkgLyA2MCAvIDYwICogc2NvcGUuYXV0b1JvdGF0ZVNwZWVkO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBnZXRab29tU2NhbGUoKSB7XG5cblx0XHRyZXR1cm4gTWF0aC5wb3coIDAuOTUsIHNjb3BlLnpvb21TcGVlZCApO1xuXG5cdH1cblxuXHRmdW5jdGlvbiByb3RhdGVMZWZ0KCBhbmdsZSApIHtcblxuXHRcdHNwaGVyaWNhbERlbHRhLnRoZXRhIC09IGFuZ2xlO1xuXG5cdH1cblxuXHRmdW5jdGlvbiByb3RhdGVVcCggYW5nbGUgKSB7XG5cblx0XHRzcGhlcmljYWxEZWx0YS5waGkgLT0gYW5nbGU7XG5cblx0fVxuXG5cdHZhciBwYW5MZWZ0ID0gZnVuY3Rpb24oKSB7XG5cblx0XHR2YXIgdiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cblx0XHRyZXR1cm4gZnVuY3Rpb24gcGFuTGVmdCggZGlzdGFuY2UsIG9iamVjdE1hdHJpeCApIHtcblxuXHRcdFx0di5zZXRGcm9tTWF0cml4Q29sdW1uKCBvYmplY3RNYXRyaXgsIDAgKTsgLy8gZ2V0IFggY29sdW1uIG9mIG9iamVjdE1hdHJpeFxuXHRcdFx0di5tdWx0aXBseVNjYWxhciggLSBkaXN0YW5jZSApO1xuXG5cdFx0XHRwYW5PZmZzZXQuYWRkKCB2ICk7XG5cblx0XHR9O1xuXG5cdH0oKTtcblxuXHR2YXIgcGFuVXAgPSBmdW5jdGlvbigpIHtcblxuXHRcdHZhciB2ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuXHRcdHJldHVybiBmdW5jdGlvbiBwYW5VcCggZGlzdGFuY2UsIG9iamVjdE1hdHJpeCApIHtcblxuXHRcdFx0di5zZXRGcm9tTWF0cml4Q29sdW1uKCBvYmplY3RNYXRyaXgsIDEgKTsgLy8gZ2V0IFkgY29sdW1uIG9mIG9iamVjdE1hdHJpeFxuXHRcdFx0di5tdWx0aXBseVNjYWxhciggZGlzdGFuY2UgKTtcblxuXHRcdFx0cGFuT2Zmc2V0LmFkZCggdiApO1xuXG5cdFx0fTtcblxuXHR9KCk7XG5cblx0Ly8gZGVsdGFYIGFuZCBkZWx0YVkgYXJlIGluIHBpeGVsczsgcmlnaHQgYW5kIGRvd24gYXJlIHBvc2l0aXZlXG5cdHZhciBwYW4gPSBmdW5jdGlvbigpIHtcblxuXHRcdHZhciBvZmZzZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG5cdFx0cmV0dXJuIGZ1bmN0aW9uIHBhbiAoIGRlbHRhWCwgZGVsdGFZICkge1xuXG5cdFx0XHR2YXIgZWxlbWVudCA9IHNjb3BlLmRvbUVsZW1lbnQgPT09IGRvY3VtZW50ID8gc2NvcGUuZG9tRWxlbWVudC5ib2R5IDogc2NvcGUuZG9tRWxlbWVudDtcblxuXHRcdFx0aWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSApIHtcblxuXHRcdFx0XHQvLyBwZXJzcGVjdGl2ZVxuXHRcdFx0XHR2YXIgcG9zaXRpb24gPSBzY29wZS5vYmplY3QucG9zaXRpb247XG5cdFx0XHRcdG9mZnNldC5jb3B5KCBwb3NpdGlvbiApLnN1Yiggc2NvcGUudGFyZ2V0ICk7XG5cdFx0XHRcdHZhciB0YXJnZXREaXN0YW5jZSA9IG9mZnNldC5sZW5ndGgoKTtcblxuXHRcdFx0XHQvLyBoYWxmIG9mIHRoZSBmb3YgaXMgY2VudGVyIHRvIHRvcCBvZiBzY3JlZW5cblx0XHRcdFx0dGFyZ2V0RGlzdGFuY2UgKj0gTWF0aC50YW4oICggc2NvcGUub2JqZWN0LmZvdiAvIDIgKSAqIE1hdGguUEkgLyAxODAuMCApO1xuXG5cdFx0XHRcdC8vIHdlIGFjdHVhbGx5IGRvbid0IHVzZSBzY3JlZW5XaWR0aCwgc2luY2UgcGVyc3BlY3RpdmUgY2FtZXJhIGlzIGZpeGVkIHRvIHNjcmVlbiBoZWlnaHRcblx0XHRcdFx0cGFuTGVmdCggMiAqIGRlbHRhWCAqIHRhcmdldERpc3RhbmNlIC8gZWxlbWVudC5jbGllbnRIZWlnaHQsIHNjb3BlLm9iamVjdC5tYXRyaXggKTtcblx0XHRcdFx0cGFuVXAoIDIgKiBkZWx0YVkgKiB0YXJnZXREaXN0YW5jZSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0LCBzY29wZS5vYmplY3QubWF0cml4ICk7XG5cblx0XHRcdH0gZWxzZSBpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYSApIHtcblxuXHRcdFx0XHQvLyBvcnRob2dyYXBoaWNcblx0XHRcdFx0cGFuTGVmdCggZGVsdGFYICogKCBzY29wZS5vYmplY3QucmlnaHQgLSBzY29wZS5vYmplY3QubGVmdCApIC8gc2NvcGUub2JqZWN0Lnpvb20gLyBlbGVtZW50LmNsaWVudFdpZHRoLCBzY29wZS5vYmplY3QubWF0cml4ICk7XG5cdFx0XHRcdHBhblVwKCBkZWx0YVkgKiAoIHNjb3BlLm9iamVjdC50b3AgLSBzY29wZS5vYmplY3QuYm90dG9tICkgLyBzY29wZS5vYmplY3Quem9vbSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0LCBzY29wZS5vYmplY3QubWF0cml4ICk7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Ly8gY2FtZXJhIG5laXRoZXIgb3J0aG9ncmFwaGljIG5vciBwZXJzcGVjdGl2ZVxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdXQVJOSU5HOiBPcmJpdENvbnRyb2xzLmpzIGVuY291bnRlcmVkIGFuIHVua25vd24gY2FtZXJhIHR5cGUgLSBwYW4gZGlzYWJsZWQuJyApO1xuXHRcdFx0XHRzY29wZS5lbmFibGVQYW4gPSBmYWxzZTtcblxuXHRcdFx0fVxuXG5cdFx0fTtcblxuXHR9KCk7XG5cblx0ZnVuY3Rpb24gZG9sbHlJbiggZG9sbHlTY2FsZSApIHtcblxuXHRcdGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEgKSB7XG5cblx0XHRcdHNjYWxlIC89IGRvbGx5U2NhbGU7XG5cblx0XHR9IGVsc2UgaWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEgKSB7XG5cblx0XHRcdHNjb3BlLm9iamVjdC56b29tID0gTWF0aC5tYXgoIHNjb3BlLm1pblpvb20sIE1hdGgubWluKCBzY29wZS5tYXhab29tLCBzY29wZS5vYmplY3Quem9vbSAqIGRvbGx5U2NhbGUgKSApO1xuXHRcdFx0c2NvcGUub2JqZWN0LnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblx0XHRcdHpvb21DaGFuZ2VkID0gdHJ1ZTtcblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1dBUk5JTkc6IE9yYml0Q29udHJvbHMuanMgZW5jb3VudGVyZWQgYW4gdW5rbm93biBjYW1lcmEgdHlwZSAtIGRvbGx5L3pvb20gZGlzYWJsZWQuJyApO1xuXHRcdFx0c2NvcGUuZW5hYmxlWm9vbSA9IGZhbHNlO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRmdW5jdGlvbiBkb2xseU91dCggZG9sbHlTY2FsZSApIHtcblxuXHRcdGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEgKSB7XG5cblx0XHRcdHNjYWxlICo9IGRvbGx5U2NhbGU7XG5cblx0XHR9IGVsc2UgaWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEgKSB7XG5cblx0XHRcdHNjb3BlLm9iamVjdC56b29tID0gTWF0aC5tYXgoIHNjb3BlLm1pblpvb20sIE1hdGgubWluKCBzY29wZS5tYXhab29tLCBzY29wZS5vYmplY3Quem9vbSAvIGRvbGx5U2NhbGUgKSApO1xuXHRcdFx0c2NvcGUub2JqZWN0LnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblx0XHRcdHpvb21DaGFuZ2VkID0gdHJ1ZTtcblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1dBUk5JTkc6IE9yYml0Q29udHJvbHMuanMgZW5jb3VudGVyZWQgYW4gdW5rbm93biBjYW1lcmEgdHlwZSAtIGRvbGx5L3pvb20gZGlzYWJsZWQuJyApO1xuXHRcdFx0c2NvcGUuZW5hYmxlWm9vbSA9IGZhbHNlO1xuXG5cdFx0fVxuXG5cdH1cblxuXHQvL1xuXHQvLyBldmVudCBjYWxsYmFja3MgLSB1cGRhdGUgdGhlIG9iamVjdCBzdGF0ZVxuXHQvL1xuXG5cdGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93blJvdGF0ZSggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VEb3duUm90YXRlJyApO1xuXG5cdFx0cm90YXRlU3RhcnQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93bkRvbGx5KCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZURvd25Eb2xseScgKTtcblxuXHRcdGRvbGx5U3RhcnQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93blBhbiggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VEb3duUGFuJyApO1xuXG5cdFx0cGFuU3RhcnQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZU1vdXNlTW92ZVJvdGF0ZSggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VNb3ZlUm90YXRlJyApO1xuXG5cdFx0cm90YXRlRW5kLnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXHRcdHJvdGF0ZURlbHRhLnN1YlZlY3RvcnMoIHJvdGF0ZUVuZCwgcm90YXRlU3RhcnQgKTtcblxuXHRcdHZhciBlbGVtZW50ID0gc2NvcGUuZG9tRWxlbWVudCA9PT0gZG9jdW1lbnQgPyBzY29wZS5kb21FbGVtZW50LmJvZHkgOiBzY29wZS5kb21FbGVtZW50O1xuXG5cdFx0Ly8gcm90YXRpbmcgYWNyb3NzIHdob2xlIHNjcmVlbiBnb2VzIDM2MCBkZWdyZWVzIGFyb3VuZFxuXHRcdHJvdGF0ZUxlZnQoIDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueCAvIGVsZW1lbnQuY2xpZW50V2lkdGggKiBzY29wZS5yb3RhdGVTcGVlZCApO1xuXG5cdFx0Ly8gcm90YXRpbmcgdXAgYW5kIGRvd24gYWxvbmcgd2hvbGUgc2NyZWVuIGF0dGVtcHRzIHRvIGdvIDM2MCwgYnV0IGxpbWl0ZWQgdG8gMTgwXG5cdFx0cm90YXRlVXAoIDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0ICogc2NvcGUucm90YXRlU3BlZWQgKTtcblxuXHRcdHJvdGF0ZVN0YXJ0LmNvcHkoIHJvdGF0ZUVuZCApO1xuXG5cdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZU1vdXNlTW92ZURvbGx5KCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZU1vdmVEb2xseScgKTtcblxuXHRcdGRvbGx5RW5kLnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG5cdFx0ZG9sbHlEZWx0YS5zdWJWZWN0b3JzKCBkb2xseUVuZCwgZG9sbHlTdGFydCApO1xuXG5cdFx0aWYgKCBkb2xseURlbHRhLnkgPiAwICkge1xuXG5cdFx0XHRkb2xseUluKCBnZXRab29tU2NhbGUoKSApO1xuXG5cdFx0fSBlbHNlIGlmICggZG9sbHlEZWx0YS55IDwgMCApIHtcblxuXHRcdFx0ZG9sbHlPdXQoIGdldFpvb21TY2FsZSgpICk7XG5cblx0XHR9XG5cblx0XHRkb2xseVN0YXJ0LmNvcHkoIGRvbGx5RW5kICk7XG5cblx0XHRzY29wZS51cGRhdGUoKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlTW91c2VNb3ZlUGFuKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZU1vdmVQYW4nICk7XG5cblx0XHRwYW5FbmQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cblx0XHRwYW5EZWx0YS5zdWJWZWN0b3JzKCBwYW5FbmQsIHBhblN0YXJ0ICk7XG5cblx0XHRwYW4oIHBhbkRlbHRhLngsIHBhbkRlbHRhLnkgKTtcblxuXHRcdHBhblN0YXJ0LmNvcHkoIHBhbkVuZCApO1xuXG5cdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZU1vdXNlVXAoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlVXAnICk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZU1vdXNlV2hlZWwoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlV2hlZWwnICk7XG5cblx0XHRpZiAoIGV2ZW50LmRlbHRhWSA8IDAgKSB7XG5cblx0XHRcdGRvbGx5T3V0KCBnZXRab29tU2NhbGUoKSApO1xuXG5cdFx0fSBlbHNlIGlmICggZXZlbnQuZGVsdGFZID4gMCApIHtcblxuXHRcdFx0ZG9sbHlJbiggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdH1cblxuXHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVLZXlEb3duKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVLZXlEb3duJyApO1xuXG5cdFx0c3dpdGNoICggZXZlbnQua2V5Q29kZSApIHtcblxuXHRcdFx0Y2FzZSBzY29wZS5rZXlzLlVQOlxuXHRcdFx0XHRwYW4oIDAsIHNjb3BlLmtleVBhblNwZWVkICk7XG5cdFx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBzY29wZS5rZXlzLkJPVFRPTTpcblx0XHRcdFx0cGFuKCAwLCAtIHNjb3BlLmtleVBhblNwZWVkICk7XG5cdFx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBzY29wZS5rZXlzLkxFRlQ6XG5cdFx0XHRcdHBhbiggc2NvcGUua2V5UGFuU3BlZWQsIDAgKTtcblx0XHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIHNjb3BlLmtleXMuUklHSFQ6XG5cdFx0XHRcdHBhbiggLSBzY29wZS5rZXlQYW5TcGVlZCwgMCApO1xuXHRcdFx0XHRzY29wZS51cGRhdGUoKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHR9XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZVRvdWNoU3RhcnRSb3RhdGUoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoU3RhcnRSb3RhdGUnICk7XG5cblx0XHRyb3RhdGVTdGFydC5zZXQoIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCwgZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZICk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZVRvdWNoU3RhcnREb2xseSggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hTdGFydERvbGx5JyApO1xuXG5cdFx0dmFyIGR4ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VYO1xuXHRcdHZhciBkeSA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSAtIGV2ZW50LnRvdWNoZXNbIDEgXS5wYWdlWTtcblxuXHRcdHZhciBkaXN0YW5jZSA9IE1hdGguc3FydCggZHggKiBkeCArIGR5ICogZHkgKTtcblxuXHRcdGRvbGx5U3RhcnQuc2V0KCAwLCBkaXN0YW5jZSApO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0UGFuKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaFN0YXJ0UGFuJyApO1xuXG5cdFx0cGFuU3RhcnQuc2V0KCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSApO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmVSb3RhdGUoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoTW92ZVJvdGF0ZScgKTtcblxuXHRcdHJvdGF0ZUVuZC5zZXQoIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCwgZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZICk7XG5cdFx0cm90YXRlRGVsdGEuc3ViVmVjdG9ycyggcm90YXRlRW5kLCByb3RhdGVTdGFydCApO1xuXG5cdFx0dmFyIGVsZW1lbnQgPSBzY29wZS5kb21FbGVtZW50ID09PSBkb2N1bWVudCA/IHNjb3BlLmRvbUVsZW1lbnQuYm9keSA6IHNjb3BlLmRvbUVsZW1lbnQ7XG5cblx0XHQvLyByb3RhdGluZyBhY3Jvc3Mgd2hvbGUgc2NyZWVuIGdvZXMgMzYwIGRlZ3JlZXMgYXJvdW5kXG5cdFx0cm90YXRlTGVmdCggMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS54IC8gZWxlbWVudC5jbGllbnRXaWR0aCAqIHNjb3BlLnJvdGF0ZVNwZWVkICk7XG5cblx0XHQvLyByb3RhdGluZyB1cCBhbmQgZG93biBhbG9uZyB3aG9sZSBzY3JlZW4gYXR0ZW1wdHMgdG8gZ28gMzYwLCBidXQgbGltaXRlZCB0byAxODBcblx0XHRyb3RhdGVVcCggMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS55IC8gZWxlbWVudC5jbGllbnRIZWlnaHQgKiBzY29wZS5yb3RhdGVTcGVlZCApO1xuXG5cdFx0cm90YXRlU3RhcnQuY29weSggcm90YXRlRW5kICk7XG5cblx0XHRzY29wZS51cGRhdGUoKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hNb3ZlRG9sbHkoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoTW92ZURvbGx5JyApO1xuXG5cdFx0dmFyIGR4ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VYO1xuXHRcdHZhciBkeSA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSAtIGV2ZW50LnRvdWNoZXNbIDEgXS5wYWdlWTtcblxuXHRcdHZhciBkaXN0YW5jZSA9IE1hdGguc3FydCggZHggKiBkeCArIGR5ICogZHkgKTtcblxuXHRcdGRvbGx5RW5kLnNldCggMCwgZGlzdGFuY2UgKTtcblxuXHRcdGRvbGx5RGVsdGEuc3ViVmVjdG9ycyggZG9sbHlFbmQsIGRvbGx5U3RhcnQgKTtcblxuXHRcdGlmICggZG9sbHlEZWx0YS55ID4gMCApIHtcblxuXHRcdFx0ZG9sbHlPdXQoIGdldFpvb21TY2FsZSgpICk7XG5cblx0XHR9IGVsc2UgaWYgKCBkb2xseURlbHRhLnkgPCAwICkge1xuXG5cdFx0XHRkb2xseUluKCBnZXRab29tU2NhbGUoKSApO1xuXG5cdFx0fVxuXG5cdFx0ZG9sbHlTdGFydC5jb3B5KCBkb2xseUVuZCApO1xuXG5cdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZVRvdWNoTW92ZVBhbiggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hNb3ZlUGFuJyApO1xuXG5cdFx0cGFuRW5kLnNldCggZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYLCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgKTtcblxuXHRcdHBhbkRlbHRhLnN1YlZlY3RvcnMoIHBhbkVuZCwgcGFuU3RhcnQgKTtcblxuXHRcdHBhbiggcGFuRGVsdGEueCwgcGFuRGVsdGEueSApO1xuXG5cdFx0cGFuU3RhcnQuY29weSggcGFuRW5kICk7XG5cblx0XHRzY29wZS51cGRhdGUoKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hFbmQoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoRW5kJyApO1xuXG5cdH1cblxuXHQvL1xuXHQvLyBldmVudCBoYW5kbGVycyAtIEZTTTogbGlzdGVuIGZvciBldmVudHMgYW5kIHJlc2V0IHN0YXRlXG5cdC8vXG5cblx0ZnVuY3Rpb24gb25Nb3VzZURvd24oIGV2ZW50ICkge1xuXG5cdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRpZiAoIGV2ZW50LmJ1dHRvbiA9PT0gc2NvcGUubW91c2VCdXR0b25zLk9SQklUICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVJvdGF0ZSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGhhbmRsZU1vdXNlRG93blJvdGF0ZSggZXZlbnQgKTtcblxuXHRcdFx0c3RhdGUgPSBTVEFURS5ST1RBVEU7XG5cblx0XHR9IGVsc2UgaWYgKCBldmVudC5idXR0b24gPT09IHNjb3BlLm1vdXNlQnV0dG9ucy5aT09NICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVpvb20gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRoYW5kbGVNb3VzZURvd25Eb2xseSggZXZlbnQgKTtcblxuXHRcdFx0c3RhdGUgPSBTVEFURS5ET0xMWTtcblxuXHRcdH0gZWxzZSBpZiAoIGV2ZW50LmJ1dHRvbiA9PT0gc2NvcGUubW91c2VCdXR0b25zLlBBTiApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRoYW5kbGVNb3VzZURvd25QYW4oIGV2ZW50ICk7XG5cblx0XHRcdHN0YXRlID0gU1RBVEUuUEFOO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBzdGF0ZSAhPT0gU1RBVEUuTk9ORSApIHtcblxuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlLCBmYWxzZSApO1xuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnLCBvbk1vdXNlVXAsIGZhbHNlICk7XG5cblx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIHN0YXJ0RXZlbnQgKTtcblxuXHRcdH1cblxuXHR9XG5cblx0ZnVuY3Rpb24gb25Nb3VzZU1vdmUoIGV2ZW50ICkge1xuXG5cdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRpZiAoIHN0YXRlID09PSBTVEFURS5ST1RBVEUgKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlUm90YXRlID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0aGFuZGxlTW91c2VNb3ZlUm90YXRlKCBldmVudCApO1xuXG5cdFx0fSBlbHNlIGlmICggc3RhdGUgPT09IFNUQVRFLkRPTExZICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVpvb20gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRoYW5kbGVNb3VzZU1vdmVEb2xseSggZXZlbnQgKTtcblxuXHRcdH0gZWxzZSBpZiAoIHN0YXRlID09PSBTVEFURS5QQU4gKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlUGFuID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0aGFuZGxlTW91c2VNb3ZlUGFuKCBldmVudCApO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRmdW5jdGlvbiBvbk1vdXNlVXAoIGV2ZW50ICkge1xuXG5cdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdGhhbmRsZU1vdXNlVXAoIGV2ZW50ICk7XG5cblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUsIGZhbHNlICk7XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnLCBvbk1vdXNlVXAsIGZhbHNlICk7XG5cblx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBlbmRFdmVudCApO1xuXG5cdFx0c3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBvbk1vdXNlV2hlZWwoIGV2ZW50ICkge1xuXG5cdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSB8fCBzY29wZS5lbmFibGVab29tID09PSBmYWxzZSB8fCAoIHN0YXRlICE9PSBTVEFURS5OT05FICYmIHN0YXRlICE9PSBTVEFURS5ST1RBVEUgKSApIHJldHVybjtcblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRoYW5kbGVNb3VzZVdoZWVsKCBldmVudCApO1xuXG5cdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggc3RhcnRFdmVudCApOyAvLyBub3Qgc3VyZSB3aHkgdGhlc2UgYXJlIGhlcmUuLi5cblx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBlbmRFdmVudCApO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBvbktleURvd24oIGV2ZW50ICkge1xuXG5cdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSB8fCBzY29wZS5lbmFibGVLZXlzID09PSBmYWxzZSB8fCBzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0aGFuZGxlS2V5RG93biggZXZlbnQgKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gb25Ub3VjaFN0YXJ0KCBldmVudCApIHtcblxuXHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRzd2l0Y2ggKCBldmVudC50b3VjaGVzLmxlbmd0aCApIHtcblxuXHRcdFx0Y2FzZSAxOlx0Ly8gb25lLWZpbmdlcmVkIHRvdWNoOiByb3RhdGVcblxuXHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVJvdGF0ZSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0aGFuZGxlVG91Y2hTdGFydFJvdGF0ZSggZXZlbnQgKTtcblxuXHRcdFx0XHRzdGF0ZSA9IFNUQVRFLlRPVUNIX1JPVEFURTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAyOlx0Ly8gdHdvLWZpbmdlcmVkIHRvdWNoOiBkb2xseVxuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlWm9vbSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0aGFuZGxlVG91Y2hTdGFydERvbGx5KCBldmVudCApO1xuXG5cdFx0XHRcdHN0YXRlID0gU1RBVEUuVE9VQ0hfRE9MTFk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMzogLy8gdGhyZWUtZmluZ2VyZWQgdG91Y2g6IHBhblxuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlUGFuID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRoYW5kbGVUb3VjaFN0YXJ0UGFuKCBldmVudCApO1xuXG5cdFx0XHRcdHN0YXRlID0gU1RBVEUuVE9VQ0hfUEFOO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRkZWZhdWx0OlxuXG5cdFx0XHRcdHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHRcdH1cblxuXHRcdGlmICggc3RhdGUgIT09IFNUQVRFLk5PTkUgKSB7XG5cblx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIHN0YXJ0RXZlbnQgKTtcblxuXHRcdH1cblxuXHR9XG5cblx0ZnVuY3Rpb24gb25Ub3VjaE1vdmUoIGV2ZW50ICkge1xuXG5cdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRzd2l0Y2ggKCBldmVudC50b3VjaGVzLmxlbmd0aCApIHtcblxuXHRcdFx0Y2FzZSAxOiAvLyBvbmUtZmluZ2VyZWQgdG91Y2g6IHJvdGF0ZVxuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlUm90YXRlID09PSBmYWxzZSApIHJldHVybjtcblx0XHRcdFx0aWYgKCBzdGF0ZSAhPT0gU1RBVEUuVE9VQ0hfUk9UQVRFICkgcmV0dXJuOyAvLyBpcyB0aGlzIG5lZWRlZD8uLi5cblxuXHRcdFx0XHRoYW5kbGVUb3VjaE1vdmVSb3RhdGUoIGV2ZW50ICk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMjogLy8gdHdvLWZpbmdlcmVkIHRvdWNoOiBkb2xseVxuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlWm9vbSA9PT0gZmFsc2UgKSByZXR1cm47XG5cdFx0XHRcdGlmICggc3RhdGUgIT09IFNUQVRFLlRPVUNIX0RPTExZICkgcmV0dXJuOyAvLyBpcyB0aGlzIG5lZWRlZD8uLi5cblxuXHRcdFx0XHRoYW5kbGVUb3VjaE1vdmVEb2xseSggZXZlbnQgKTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAzOiAvLyB0aHJlZS1maW5nZXJlZCB0b3VjaDogcGFuXG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlICkgcmV0dXJuO1xuXHRcdFx0XHRpZiAoIHN0YXRlICE9PSBTVEFURS5UT1VDSF9QQU4gKSByZXR1cm47IC8vIGlzIHRoaXMgbmVlZGVkPy4uLlxuXG5cdFx0XHRcdGhhbmRsZVRvdWNoTW92ZVBhbiggZXZlbnQgKTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0ZGVmYXVsdDpcblxuXHRcdFx0XHRzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0XHR9XG5cblx0fVxuXG5cdGZ1bmN0aW9uIG9uVG91Y2hFbmQoIGV2ZW50ICkge1xuXG5cdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdGhhbmRsZVRvdWNoRW5kKCBldmVudCApO1xuXG5cdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggZW5kRXZlbnQgKTtcblxuXHRcdHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gb25Db250ZXh0TWVudSggZXZlbnQgKSB7XG5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdH1cblxuXHQvL1xuXG5cdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ2NvbnRleHRtZW51Jywgb25Db250ZXh0TWVudSwgZmFsc2UgKTtcblxuXHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZWRvd24nLCBvbk1vdXNlRG93biwgZmFsc2UgKTtcblx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnd2hlZWwnLCBvbk1vdXNlV2hlZWwsIGZhbHNlICk7XG5cblx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydCwgZmFsc2UgKTtcblx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hlbmQnLCBvblRvdWNoRW5kLCBmYWxzZSApO1xuXHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSwgZmFsc2UgKTtcblxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCBvbktleURvd24sIGZhbHNlICk7XG5cblx0Ly8gZm9yY2UgYW4gdXBkYXRlIGF0IHN0YXJ0XG5cblx0dGhpcy51cGRhdGUoKTtcblxufTtcblxuVEhSRUUuT3JiaXRDb250cm9scy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBUSFJFRS5FdmVudERpc3BhdGNoZXIucHJvdG90eXBlICk7XG5USFJFRS5PcmJpdENvbnRyb2xzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFRIUkVFLk9yYml0Q29udHJvbHM7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCBUSFJFRS5PcmJpdENvbnRyb2xzLnByb3RvdHlwZSwge1xuXG5cdGNlbnRlcjoge1xuXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5jZW50ZXIgaGFzIGJlZW4gcmVuYW1lZCB0byAudGFyZ2V0JyApO1xuXHRcdFx0cmV0dXJuIHRoaXMudGFyZ2V0O1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0Ly8gYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuXG5cdG5vWm9vbToge1xuXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1pvb20gaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVab29tIGluc3RlYWQuJyApO1xuXHRcdFx0cmV0dXJuICEgdGhpcy5lbmFibGVab29tO1xuXG5cdFx0fSxcblxuXHRcdHNldDogZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vWm9vbSBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVpvb20gaW5zdGVhZC4nICk7XG5cdFx0XHR0aGlzLmVuYWJsZVpvb20gPSAhIHZhbHVlO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0bm9Sb3RhdGU6IHtcblxuXHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9Sb3RhdGUgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVSb3RhdGUgaW5zdGVhZC4nICk7XG5cdFx0XHRyZXR1cm4gISB0aGlzLmVuYWJsZVJvdGF0ZTtcblxuXHRcdH0sXG5cblx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1JvdGF0ZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVJvdGF0ZSBpbnN0ZWFkLicgKTtcblx0XHRcdHRoaXMuZW5hYmxlUm90YXRlID0gISB2YWx1ZTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdG5vUGFuOiB7XG5cblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vUGFuIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlUGFuIGluc3RlYWQuJyApO1xuXHRcdFx0cmV0dXJuICEgdGhpcy5lbmFibGVQYW47XG5cblx0XHR9LFxuXG5cdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9QYW4gaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVQYW4gaW5zdGVhZC4nICk7XG5cdFx0XHR0aGlzLmVuYWJsZVBhbiA9ICEgdmFsdWU7XG5cblx0XHR9XG5cblx0fSxcblxuXHRub0tleXM6IHtcblxuXHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9LZXlzIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlS2V5cyBpbnN0ZWFkLicgKTtcblx0XHRcdHJldHVybiAhIHRoaXMuZW5hYmxlS2V5cztcblxuXHRcdH0sXG5cblx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub0tleXMgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVLZXlzIGluc3RlYWQuJyApO1xuXHRcdFx0dGhpcy5lbmFibGVLZXlzID0gISB2YWx1ZTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdHN0YXRpY01vdmluZyA6IHtcblxuXHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAuc3RhdGljTW92aW5nIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlRGFtcGluZyBpbnN0ZWFkLicgKTtcblx0XHRcdHJldHVybiAhIHRoaXMuZW5hYmxlRGFtcGluZztcblxuXHRcdH0sXG5cblx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5zdGF0aWNNb3ZpbmcgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVEYW1waW5nIGluc3RlYWQuJyApO1xuXHRcdFx0dGhpcy5lbmFibGVEYW1waW5nID0gISB2YWx1ZTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdGR5bmFtaWNEYW1waW5nRmFjdG9yIDoge1xuXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5keW5hbWljRGFtcGluZ0ZhY3RvciBoYXMgYmVlbiByZW5hbWVkLiBVc2UgLmRhbXBpbmdGYWN0b3IgaW5zdGVhZC4nICk7XG5cdFx0XHRyZXR1cm4gdGhpcy5kYW1waW5nRmFjdG9yO1xuXG5cdFx0fSxcblxuXHRcdHNldDogZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLmR5bmFtaWNEYW1waW5nRmFjdG9yIGhhcyBiZWVuIHJlbmFtZWQuIFVzZSAuZGFtcGluZ0ZhY3RvciBpbnN0ZWFkLicgKTtcblx0XHRcdHRoaXMuZGFtcGluZ0ZhY3RvciA9IHZhbHVlO1xuXG5cdFx0fVxuXG5cdH1cblxufSApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3Byb2plY3QtbmFtZS9hc3NldHMvanMvX2RldmpzL2xpYnMvT3JiaXRDb250cm9scy5qcyJdLCJzb3VyY2VSb290IjoiIn0=