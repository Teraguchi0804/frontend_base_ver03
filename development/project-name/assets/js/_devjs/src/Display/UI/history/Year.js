//--------------------------------------------------
//
//  Year
//
//--------------------------------------------------

export default class Year {

  constructor($target,showST,hideST,startDate,targetDate,right) {

    this.$target = $target;

    this.showST = showST; //1200
    this.hideST = hideST; //2200

    this.isShow = false;
    this.isHide = false;

    this.right = right;
    this.preST = 0;

    this.cnt = 0;

    this.startDate = startDate; //2016
    this.targetDate = targetDate; //1940

    this.setup();
    this.setEvents();

  }

  setup() {
    
    if (this.right=='right') {

      TweenMax.set(this.$target, {opacity: 0,x: 200,y: 100});

    } else {

      TweenMax.set(this.$target, {opacity: 0,x: -200,y: 100});

    }    

  }

  run() {




  }

  onScroll() {

    // log('st',gb.in.s.st);;

    // log(gb.in.s.sb);

    if (gb.in.s.st > this.showST && gb.in.s.st < this.hideST) {

      if (gb.in.s.st % 100 == 0) {
        this.cnt++;
      };

      // log(gb.in.s.st % 100);
      // log(this.cnt);      


    };
    

    if (gb.in.s.sb > this.showST && !this.isShow) {
      this.isShow = true;

      log('show!!!');

      var tl = new TimelineMax();

      tl
        // 横からふわっと
        .add(()=>{

          var tl = new TimelineMax();

          tl.to(this.$target, 3.0, {
            opacity: 1,
            x: 0,
            y: 0,
            ease: Power4.easeOut
          });

        })
        // count up
        .add(()=>{

          // TweenMax.to(this, 3, {
          //   startDate: this.targetDate,
          //   ease: Power2.easeOut,
          //   onUpdate: ()=>{
                          
          //     var d = Math.floor(this.startDate)
          //     this.$target.text(d);

          //   }
          // });



        })

    };


    // // hide
    // if (gb.in.s.sb > this.hideST && !this.isHide) {
    //   this.isHide = true;

    //   log('hide!!!');

    //   // var tl = new TimelineMax();

    //   // tl
    //   //   // 横からふわっと消える
    //   //   .add(()=>{

    //   //     var tl = new TimelineMax();

    //   //     tl.to(this.$target, 3.0, {
    //   //       opacity: 0,
    //   //       y: -100,
    //   //       x: -200,
    //   //       ease: Power2.easeOut
    //   //     });

    //   //   })

    // };

    this.preST = gb.in.s.st;
    // log('pre',this.preST);

  }

  setEvents() {

    gb.in.s.add('Countup', this.onScroll.bind(this));

  }
  
}