// ------------------------------------------------------------
//
//  Circle
//
// ------------------------------------------------------------

(function(){

  function Circle(ctx,fillStyle) {

    this.ctx = ctx;

    this.r = 10;
    this.fillStyle = fillStyle;
    this.op = {val:1};

    this.cList = [];
    this.imgList = [];
    this.imgSrcList = [
      '/project-name/assets/resource/img/01.png',
      '/project-name/assets/resource/img/02.png',
      '/project-name/assets/resource/img/03.png',
      '/project-name/assets/resource/img/04.png',
      '/project-name/assets/resource/img/05.png',
      '/project-name/assets/resource/img/06.png',
      '/project-name/assets/resource/img/07.png',
      '/project-name/assets/resource/img/08_color1.png',
      '/project-name/assets/resource/img/08_color2.png',
    ];
    this.total = 40;

    this.H = gb.in.r.H();

    this.setup();
    this.create();

  }

  Circle.prototype = {

    setup: function () {

      // 画像の読み込み
      for (var i = 0; i < this.imgSrcList.length; i++) {

        var img = new Image();
            img.src = this.imgSrcList[i];

        this.imgList.push(img);

      };

      for (var i = 0; i < this.total; i++) {

        var x = this.r * i - this.r/2;
        
        var c = new gb.Point(x, Math.random()*this.H);
        c.vy = 2;
        c.ay = 0.1;
        var num = i%this.imgSrcList.length;
        c.img = this.imgList[num];

        this.cList.push(c);

      };    

      
    },

    create: function () {


    },

    update: function () {

      for(var i = 0; i < this.total; i++){

        // update
        var c = this.cList[i];
        c.vy += c.ay;
        c.y += c.vy; 

        // draw        
        // this.ctx.fillStyle = 'hsla('+ ((i*3)%360) + ', 80%, 50%,'+this.op.val+')';
        // this.ctx.beginPath();
        // this.ctx.arc(c.x, c.y, this.r, 0, Math.PI*2, false);
        // this.ctx.fill();
        // this.ctx.closePath();

        this.ctx.drawImage(c.img, c.x, c.y, 100, 100);
        
        // edge
        if(c.y > this.H){
          c.y = -100 + -Math.random() * this.H/4;
          c.vy = 0;
        }

      }
      
    },

    draw: function () {

    },

    loop: function () {

      this.update();
      this.draw();
      
    },

    clear: function() {


    },

  }

  gb.Circle = Circle;

})();