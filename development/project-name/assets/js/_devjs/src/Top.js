/**
 * fileOverview:
 * Project:
 * File: Top
 * Date:
 * Author:
 */

import Common from './Page/Common.js';
import Main from './Page/Main.js';

(()=>{

  // globalオブジェクト
  if (window.gb===undefined) window.gb = {};
  window.gb.in = {}; //instance

  gb.in.common = new Common();
  gb.in.main = new Main();

})();