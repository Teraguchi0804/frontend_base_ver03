//--------------------------------------------------
//
//  Sec01Video
//
//--------------------------------------------------
import YoutubeForSec01 from './YoutubeForSec01.js';

export default class Sec01Video {

  constructor(param){

    this.setup();
    this.setEvents();

  }

  setup() {

    // var id = 'xW2oNpNrKd0';
    var videoList = [];
    // // var id = 'VbfpW0pbvaU';

    // if (gb.in.conf.RELEASE) {

    //   if (gb.in.time.isState == 'morning') {
        
    //     id = 'fBKPkTq-qZs';
    //     videoList = [
    //       'dKkvR-ZOeQA',
    //       'MfQ-zqrf29g',
    //     ].join(',')

    //   } else if (gb.in.time.isState == 'afternoon') {

    //     id = 'EcFM37GnuMA';
    //     videoList = [
    //       'X6yBpyyzRA4',
    //       'wxS4xeBhp4Q',
    //     ].join(',')

    //   } else if (gb.in.time.isState == 'night') {

    //     id = '7agAKPJY-10';
    //     videoList = [
    //       'ANgcR7t2GxQ',
    //       'KkGPdREmj0A',
    //     ].join(',')

    //   }

    // } else {

    //   id = 'fBKPkTq-qZs';
    //   videoList = [
    //     'dKkvR-ZOeQA',
    //     'MfQ-zqrf29g',
    //     'EcFM37GnuMA',
    //     'X6yBpyyzRA4',
    //     'wxS4xeBhp4Q',
    //     '7agAKPJY-10',
    //     'ANgcR7t2GxQ',
    //     'KkGPdREmj0A',
    //   ].join(',')

    // }

    // // debug
    // if (gb.in.conf.movie == 'morning') {
    //   id = 'fBKPkTq-qZs';
    //   videoList = [
    //     'dKkvR-ZOeQA',
    //     'MfQ-zqrf29g',
    //   ].join(',')
    // };
    // if (gb.in.conf.movie == 'afternoon') {
    //   id = 'EcFM37GnuMA';
    //   videoList = [
    //     'X6yBpyyzRA4',
    //     'wxS4xeBhp4Q',
    //   ].join(',')
    // };
    // if (gb.in.conf.movie == 'night') {
    //   id = '7agAKPJY-10';
    //   videoList = [
    //     'ANgcR7t2GxQ',
    //     'KkGPdREmj0A',
    //   ].join(',')
    // };


    // 一本の長い動画
    // videoList.push('V7Q73letvGM');
    videoList.push('xW2oNpNrKd0');

    this.video = new YoutubeForSec01('sec01Video', gb.in.conf.youtubeID01, videoList);
    
  }

  onSection01(cur,prev) {

    if (cur == 'top') {

      gb.in.sec01Video.video.player.playVideo();

    } else {

      gb.in.sec01Video.video.player.pauseVideo();

    }

  }

  setEvents() {

    // gb.in.hash.onChangeFuncList.push(this.onSection01.bind(this));

  }

}