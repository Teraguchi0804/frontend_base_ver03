//--------------------------------------------------
//
//  Display
//
//--------------------------------------------------
import Effects from './Effects/Effects.js';
import Layout from '../Display/Layout/LayoutInterview.js';
import HoverEffectSNSSPFooter from '../Display/Effects/03_effects/HoverEffectSNSSPFooter.js';
import Move3D from '../Display/UI/interview/Move3D.js';
import Move2D from '../Display/UI/history/Move2D.js';
import InterviewTopEf from '../Display/UI/interview/InterviewTopEf.js';

export default class DisplayTop {

  constructor(){

    this.onImmediate();
    this.setEvents();

  }

  onImmediate() {

    // ループスタート
    gb.in.up.loop();
    
  }

  onLoad() {


    // ------------------------------------------------------------
    //  UI / Layout
    // ------------------------------------------------------------
    Layout.run();

    // ------------------------------------------------------------
    //  Effects
    // ------------------------------------------------------------
    // sp
    gb.in.snsSPHoverEf = new HoverEffectSNSSPFooter($('.snsWrap'));

    // pc
    new InterviewTopEf();

    // $('.move3D').each(function(index, el) {

    //     new Move3D($(this));
        
    // });
    // $('.move2D').each(function(index, el) {

    //     new Move2D($(this));
        
    // });

  }

  static run() {


    // ------------------------------------------------------------
    //  UI / Layout
    // ------------------------------------------------------------
    Layout.run();

    // ------------------------------------------------------------
    //  Effects
    // ------------------------------------------------------------
    // sp
    gb.in.snsSPHoverEf = new HoverEffectSNSSPFooter($('.snsWrap'));

    // pc
    new InterviewTopEf();

    // $('.move3D').each(function(index, el) {

    //     new Move3D($(this));
        
    // });
    // $('.move2D').each(function(index, el) {

    //     new Move2D($(this));
        
    // });

  }

  setEvents() {

    $(window).on('load', this.onLoad.bind(this));        

  }

}