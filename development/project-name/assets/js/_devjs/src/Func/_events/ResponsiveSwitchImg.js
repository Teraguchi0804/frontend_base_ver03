//--------------------------------------------------
//
//  ResponsiveSwitchImg
//
//--------------------------------------------------

export default class ResponsiveSwitchImg {

  constructor() {

    this.setup();
    this.run();
    this.setEvents();

  }

  setup() {

    this.isPCLock = (gb.in.u.isResPC)? false: true;
    this.isSPLock = (gb.in.u.isResSP)? false: true;

    this.$target = $('.responsiveImg');

  }

  run () {

    // ------------------------------------------------------------
    //  ブレイクポイントよりもsp側
    // ------------------------------------------------------------
    if (gb.in.u.isResSP && !this.isSPLock) {
      this.isPCLock = false;
      this.isSPLock = true;

      log(11);

      this.$target.each(function(index, el) {
        
        var src = $(this).attr('src');
        src = gb.in.u.strReplace(src, '_pc', '_sp');
        $(this).off('load');
        $(this).on('load', (event)=>{

          if ($(this).hasClass('spSize')) gb.in.u.setImgSPSize($(this));

        });
        $(this).attr('src',src);

        // $(this).attr('src',src);
        // if ($(this).hasClass('spSize')) gb.in.u.setImgSPSize($(this));

      });

      // responsiveimgがついてないもので、spSizeがついてるものは1/2
      gb.in.u.setImgSPSize($('.spSize').not('.responsiveImg'));

    } 

    // ------------------------------------------------------------
    //  ブレイクポイントよりもpc側
    // ------------------------------------------------------------
    if (gb.in.u.isResPC && !this.isPCLock) {
      this.isPCLock = true;
      this.isSPLock = false;

      log(22);

      this.$target.each(function(index, el) {
        
        var src = $(this).attr('src');
        src = gb.in.u.strReplace(src, '_sp', '_pc');

        $(this).attr({width: 'auto',height: 'auto'});
        $(this).attr('src',src);

      });

      // responsiveimgがついてないもので、spSizeがついてるものはautoに
      $('.spSize').not('.responsiveImg').attr({width: 'auto',height: 'auto'});

      // spはなぜかloadイベントが呼ばれないので、こっちで処理
      // if (gb.in.u.isSP) $('.responsiveImg').attr({width: 'auto',height: 'auto'});

    }

  }
       
  resume() {

    // log('resume');

    this.setup();
    this.run();

    gb.in.r.remove('responsiveSwitchImg');
    gb.in.r.add('responsiveSwitchImg', this.run.bind(this));

  }
       
  setEvents() {

    gb.in.r.add('responsiveSwitchImg', this.run.bind(this));

  }

}