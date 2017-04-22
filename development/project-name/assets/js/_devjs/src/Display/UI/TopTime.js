//--------------------------------------------------
//
//  TopTime
//
//--------------------------------------------------

// 500px以下になったら表示
//   時計count
//   canvas表示

export default class TopTime {

  constructor(){

    this.$target = $('.timeWrap');
    this.$h01 = this.$target.find('.h01');
    this.$h02 = this.$target.find('.h02');
    this.$m01 = this.$target.find('.m01');
    this.$m02 = this.$target.find('.m02');

    this.nyH = 0;

    this.isAlert = (gb.in.r.ws.h < 500)? true: false;

    this.dis = 14; //時差

    this.setup();
    this.run();
    this.setEvents();

  }

  setup() {

    gb.in.u.time();
    var h = gb.in.u.hour - this.dis;
    if (h<0) h = 24 + h;
    this.nyH = h;

  }

  update() {

    // 間引き
    if (gb.in.up.cnt%60!==0) return;


    gb.in.u.time();

    var h = gb.in.u.hour - this.dis;
    if (h<0) h = 24 + h;

    this.nyH = h;

    h = gb.in.u.add0(h).split('');
    var m = gb.in.u.add0(gb.in.u.minute).split('');
    var s = gb.in.u.add0(gb.in.u.second).split('');

    this.$h01.text(h[0])
    this.$h02.text(h[1])
    this.$m01.text(m[0])
    this.$m02.text(m[1])

    // this.$h01.text(s[0])
    // this.$h02.text(s[1])
    // this.$m01.text(s[0]);
    // this.$m02.text(s[1]);

  }

  run() {

    gb.in.up.add('TopTime', this.update.bind(this));

    // コンマの表示非表示
    var tl = new TimelineMax({repeat: -1});

    tl
      .set(this.$target.find('.colon'), {opacity: 0})
      .to(this.$target.find('.colon'), 0.5, {opacity: 1,ease: Power2.easeInOut})
      .to(this.$target.find('.colon'), 0.5, {opacity: 0,ease: Power2.easeInOut})

  }

  setEvents() {



  }

  removeEvents() {

    gb.in.up.remove('TopTime');

  }

}