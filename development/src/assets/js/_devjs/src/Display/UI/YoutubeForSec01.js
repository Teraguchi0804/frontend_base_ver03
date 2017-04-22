//--------------------------------------------------
//
//  YoutubeForSec01
//
//--------------------------------------------------

import FullSize from '../../MyLibs/Display/Layout/FullSize.js';
import TopTime from '../../Display/UI/TopTime.js';

export default class YoutubeForSec01 {

  constructor(id,videoID,videoList) {

    this.player = null;

    this.isFirst = true;
    this.isSeekLock = false;
    this.isSeekLock02 = false;

    this.setup(id,videoID,videoList);

  }

  setup(id,videoID,videoList) {

    // yt.player��load����Ƥ��ʤ����Ϥ򿼑]����
    if((typeof YT !== "undefined") && YT && YT.Player){

        // create
        this.player = new YT.Player(id, {
            width: '100%', // �ץ�`��`�η�
            height: '100%', // �ץ�`��`�θߤ�
            videoId: videoID, // YouTube��ID
            events: {
              'onReady': this.onReady.bind(this), // �ץ�`��`�Μʂ䤬�Ǥ����Ȥ��ˌg��
              'onStateChange': this.onPlayerStateChange.bind(this)
            },
            playerVars: {
              autoplay: 1,
              controls: 0,
              showinfo: 0,
              autohide: 1,
              rel: 0,
              enablejsapi: 1,
              iv_load_policy: 3,
              disablekb:1,
              modestbranding: 1,
              start: 2,
              loop: 1,
              // playlist: videoList
            }
        });

        // layout
        var l = new FullSize($('#bgWrap'),$('#sec01Video'),0,'FullSizeSec01Video');
        l.targetDefW = 1920;
        l.targetDefH = 1080;
        l.run();

    }else{

        setTimeout(this.setup.bind(this,id,videoID,videoList), 100);

    }


  }

  onReady (e) {

    // �߽���Ȥ�
    e.target.setPlaybackQuality('highres');

    // this.player.playVideo();
    this.setEvents();

    // play
    gb.in.time = new TopTime();
    gb.in.sec01Video.video.playByNYTime();

  }

  onPlayerStateChange (e) {

    var status = e.data;

    // �����K�ˤ����Ȥ� 0
    if (status == window.YT.PlayerState.ENDED) {
     
        // �ӻ�����
        this.player.playVideo();
        
    }

    // // �����ФΤȤ� 1
    if (status == window.YT.PlayerState.PLAYING) {

      if (this.isFirst) {
        this.isFirst = false;
        gb.in.rm.completed++;
      }

      // e.target.pauseVideo();

    }

    // // ֹͣ�ФΤȤ� 2
    // if (status == window.YT.PlayerState.PAUSED) {
    //     console.log('ֹͣ��');
    // }

    // // �Хåե�����ФΤȤ� 3
    // if (status == window.YT.PlayerState.BUFFERING) {
    //     console.log('�Хåե������');
    // }

    // // �^�����g�ߤΤȤ� 5 5��ֹ�ޤ�Ȥ����뤫�顢�����Ǥ�play
    if (status == window.YT.PlayerState.CUED) {

        this.playByNYTime();

    }


    // for safari �ե����륵�����ؤ���
    if (gb.in.u.isSafari() && status == window.YT.PlayerState.BUFFERING) this.player.seekTo(this.player.getCurrentTime() + 0.1);

  }

  playByNYTime() {

    var h = gb.in.time.nyH;

    if (h >= 5 && h < 13) {

      this.player.seekTo(0);

    } else if (h >= 13 && h < 18) {

      this.player.seekTo(36);

    } else {

      this.player.seekTo(66);

    }

    this.player.playVideo();


  }

  onSeek() {

    var now = this.player.getCurrentTime();    

    if (now < 1.0) {
      this.isSeekLock = false;
      this.isSeekLock02 = false;
    };

    if (now > 90 && !this.isSeekLock) {
    this.isSeekLock = true;

      TweenMax.to($('.bgOverlayImg'), 3.0, {
          opacity: 1, 
          ease:Power3.easeInOut,
        })

    }
    
    if (now > 1.0 && !this.isSeekLock02) {
    this.isSeekLock02 = true;

      TweenMax.to($('.bgOverlayImg'), 3.0, {
          opacity: 0, 
          ease:Power3.easeInOut,
        })

    }
    
  }

  setEvents() {

    gb.in.up.add('YoutubeForSec01',this.onSeek.bind(this));

  }

  removeEvents() {

    gb.in.up.remove('YoutubeForSec01');

  }

}