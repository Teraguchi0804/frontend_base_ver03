//--------------------------------------------------
//
//  Nav
//
//--------------------------------------------------

export default class Nav {

  constructor(param){

    this.isLock = (gb.in.u.isResSP)? false: true;

    this.setup();
    this.setEvents();

  }

  setup() {


  }

  run() {

  }

  // ページから離れるとき
  outPage() {

    if (gb.in.u.isResPC) {

      // nav barも
      TweenMax.to($('#nav .bar'), 0.75, {x: 120, ease: Expo.easeInOut});

    } 

  }

  inPage() {

    // nav barの変更
    if (gb.in.u.isResPC) {

      var id = gb.in.pjax.id;

      switch (id) {
        case 'top':
          this.cur = 1;
          break;
        case 'movie':
          this.cur = 2;
          break;
        case 'interview':
          this.cur = 3;
          break;
        case 'interview_detail':          
          this.cur = 3;
          break;
        case 'history':
          this.cur = 4;
          break;
      }

      if (this.cur==1) var w = 40;
      if (this.cur==2) var w = 42;
      if (this.cur==3) var w = 64;
      if (this.cur==4) var w = 112;

      // nav barも
      var tl = new TimelineMax();

      // active変更
      $('#nav .item')
        .removeClass('isActive')
        .eq(this.cur-1).addClass('isActive');

      tl    
        .set($('#nav .isActive .bar'), {x: 0, width: 0, ease: Expo.easeInOut})
        .to($('#nav .isActive .bar'), 0.75, {width: w, ease: Expo.easeInOut});

    }
    
  }

  onResize() {

    if (gb.in.u.isResSP && !this.isLock) {
      this.isLock = true;

      var id = gb.in.pjax.id;

      switch (id) {

        case 'top':

          var op = 1;

          break;

        case 'movie':
          
          var op = 0;

          break;

        case 'interview':
          
          var op = 0;

          break;

        case 'interview_detail':
          
          var op = 0;

          break;

        case 'history':
          
          var op = 0;

          break;

      }

      TweenMax.set($('#nav'), {opacity: op});

    };

    if (gb.in.u.isResPC && this.isLock) {
      this.isLock = false;

      var id = gb.in.pjax.id;

      switch (id) {

        case 'top':

          var op = 1;

          break;

        case 'movie':
          
          var op = 1;

          break;

        case 'interview':
          
          var op = 1;

          break;

        case 'interview_detail':
          
          var op = 1;

          break;

        case 'history':
          
          var op = 1;

          break;

      }

      TweenMax.set($('#nav'), {opacity: op});

    };

  
  }

  setEvents() {

    gb.in.r.add('Nav',this.onResize.bind(this));

  }

}