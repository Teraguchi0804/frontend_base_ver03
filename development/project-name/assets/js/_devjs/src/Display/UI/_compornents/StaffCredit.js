//--------------------------------------------------
//
//  StaffCredit
//
//--------------------------------------------------
export default class StaffCredit {

  constructor($btn,$close,$contents){

    this.$btn = $btn;
    this.$close = $close;
    this.$contents = $contents;

    this.setEvents();
    this.setup();

  }

  setup() {

  }

  toggle() {

    if (this.$btn.hasClass('on')) {

      this.close();

    } else {

      this.open();

    };

    this.$btn.toggleClass('on');

  }

  open() {

    $('#sideR').css('z-index', 3);

    // モーダル表示
    this.$contents.show();

    gb.in.sec02Video.video.player.pauseVideo();
    gb.in.sec02Video.isPlaying = false;
    TweenMax.to($('.ui_close'), 0.3, {opacity: 0});
    
  }

  close() {

    $('#sideR').css('z-index', 7);
    
    // モーダル非表示
    this.$contents.hide();

    gb.in.sec02Video.video.player.playVideo();
    gb.in.sec02Video.isPlaying = true;
    TweenMax.to($('.ui_close'), 0.3, {opacity: 1});


  }

  onResize () {

    // this.getWindowSize();

  }

  setEvents() {

    this.$btn.on('click', this.open.bind(this));
    this.$close.on('click', this.close.bind(this));

  }

}