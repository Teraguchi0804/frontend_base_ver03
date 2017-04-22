//--------------------------------------------------
//
//  PageTransitionEffect
//
//--------------------------------------------------

import Point from './Point.js';
import TopOpening from '../TopOpening.js';

export default class PageTransitionEffect {

  constructor($wrap) {

    this.renderer = null;this.stage = null;

    this.$wrap = $wrap;
    this.mx = 0;this.my = 0;
    
    this.radius = 0;
    this.cnt = 0;
    this.points = [];
    this.g = null;

    this.count = 0;
    this.isStart = false;
    this.isCUpdate = true;

    this.secondP = 0;
    this.secondSum = 0;
    this.secondCnt = 0;
    this.secondFlag = false;

    this.targetRadius = Math.sqrt(gb.in.r.ws.w*gb.in.r.ws.w + gb.in.r.ws.h*gb.in.r.ws.h);
    this.hRadius = 0;
    this.mRadius = 0;
    this.sRadius = this.targetRadius;

    this.hHandX = 0;
    this.mHandX = 0;
    this.sHandX = 0;
    this.hHandY = 0;
    this.mHandY = 0;
    this.sHandY = 0;
    this.hHandFlag = false;
    this.mHandFlag = false;
    this.sHandFlag = false;

    this.hRad = 0;
    this.mRad = 0;
    this.sRad = 0;

    this.lineWidth = 1;

    this.startRad01 = Math.PI * 2 / 3 * 0;
    this.startRad02 = Math.PI * 2 / 3 * 1;
    this.startRad03 = Math.PI * 2 / 3 * 2;
    this.startRad04 = Math.PI * 2 / 3 * 0;
    this.startRad05 = Math.PI * 2 / 3 * 1;
    this.startRad06 = Math.PI * 2 / 3 * 2;
    this.endRad01 = Math.PI * 2 / 3 * 0; // pixi.jsは何か描画しないとマスクされない？ 少数の値を入れている
    this.endRad02 = Math.PI * 2 / 3 * 1;
    this.endRad03 = Math.PI * 2 / 3 * 2;
    this.endRad04 = Math.PI * 2 / 3 * 0.00001; // pixi.jsは何か描画しないとマスクされない？ 少数の値を入れている
    this.endRad05 = Math.PI * 2 / 3 * 1;
    this.endRad06 = Math.PI * 2 / 3 * 2;

    this.fillBlack = 0x000000;
    this.fillTiffanyBlue = 0x81d8d0;

    // コールバック
    this.cb = ()=>{}

    this.setup();
    this.setEvents();

  }

  setup () {

    // canvas要素追加
    this.renderer = PIXI.autoDetectRenderer(gb.in.r.ws.w, gb.in.r.ws.h, {antialias: true,transparent: true});
    this.$wrap.append(this.renderer.view);

    // create the root of the scene graph
    this.stage = new PIXI.Container();
    this.stage.interactive = true;

    this.addObject();
  
  }

  addObject() {

    this.container = new PIXI.Container();
    this.container01 = new PIXI.Container();
    this.container02 = new PIXI.Container();
    this.container03 = new PIXI.Container();

    this.mask = new PIXI.Graphics();
    this.color = new PIXI.Graphics();
    this.hHand = new PIXI.Graphics();
    this.mHand = new PIXI.Graphics();
    this.sHand = new PIXI.Graphics();

    this.color.blendMode = PIXI.BLEND_MODES.ADD;

    this.mask.position.x = 0;
    this.mask.position.y = 0;

    // this.container02.mask = this.mask;

    this.stage.addChild(this.mask);
    this.stage.addChild(this.color);
    this.stage.addChild(this.hHand);
    this.stage.addChild(this.mHand);
    this.stage.addChild(this.sHand);

  }

  updateTime() {


    gb.in.u.time();

    this.hour = gb.in.u.hour;          // 時
    this.minute = gb.in.u.minute;      // 分
    this.second = gb.in.u.second;
    this.millSecond = gb.in.u.millSecond / 1000;

    if (this.second == 0 && !this.secondFlag) {
      this.secondFlag = true
      this.secondCnt++;
    };
    if (this.second == 1 && this.secondFlag) {
      this.secondFlag = false;
    };

    var hourTotal = 12;
    var minuteTotal = 60;
    var secondTotal = 60;

    if (this.hour>12) this.hour = this.hour - 12;

    // pはpercent
    this.hourP = this.hour / hourTotal;
    this.minuteP = this.minute / minuteTotal;
    // this.secondP += (( (this.secondCnt * 60 + this.second + this.millSecond) / secondTotal) - this.secondP) * 0.03;
    this.secondP = this.second / secondTotal;

  }

  update() {

    this.updateTime();


  }

  draw(){

    this.mask.clear();
    this.color.clear();
    this.hHand.clear();
    this.mHand.clear();
    this.sHand.clear();

    // 何か描かないとマスクが効かないため描く いらないかも
    this.mask.drawRect(0, 0, 1, 1);

    // 時計
    this.drawCircle();

    // マスク
    this.drawCircle01(this.startRad01,this.endRad01);
    this.drawCircle02(this.startRad02,this.endRad02);
    this.drawCircle03(this.startRad03,this.endRad03);

    this.drawCircle04(this.startRad04,this.endRad04);
    this.drawCircle05(this.startRad05,this.endRad05);
    this.drawCircle06(this.startRad06,this.endRad06);


    // render the stage
    this.renderer.render(this.stage);    

  }

  openingEffect() {

    var tlMain = new TimelineMax();

    // this.setParamInEf();

    tlMain      
      // 線が伸びる
      .add(()=>{

        var tl = new TimelineMax();

        tl
          // color
          // .to(this, 1.3, {
          //   hRadius: this.getSHandLength(this.hRad),
          //   ease: Power3.easeInOut
          // })
          // // .to(this, 1.0, {
          // //   mRadius: this.getSHandLength(this.mRad),
          // //   ease: Power3.easeInOut
          // // },'-=1.0')
          // .to(this, 1.0, {
          //   mRadius: this.getSHandLength(this.mRad),
          //   ease: Power3.easeInOut
          // },'=0.0')


          // .set(this.mHand, {alpha: 0})
          // .set(this.sHand, {alpha: 0})
          // .set(this, {
          //   hRadius: this.getSHandLength(this.hRad),
          // })
          // .to(this, {
          //   mRadius: this.getSHandLength(this.mRad),
          // })
          // .to(this.mHand, 1.5, {
          //   alpha: 1,
          //   ease: Power3.easeInOut
          // })
          // .to(this.sHand, 1.5, {
          //   alpha: 1,
          //   ease: Power3.easeInOut
          // },'-=1.5')


      })

      // 定位置に
      .add(()=>{

        var tl = new TimelineMax();

        // tl
        //   // color
        //   .to(this, 1.0, {
        //     hRad: Math.PI * 2 / 3 * 0,
        //     hRad: Math.PI * 2 / 3 * 0,
        //     ease: Power4.easeOut
        //   })
        //   .to(this, 1.0, {
        //     mRad: Math.PI * 2 / 3 * 1,
        //     mRad: Math.PI * 2 / 3 * 1,
        //     ease: Power4.easeOut
        //   },'-=1.0')
        //   .to(this, 1.0, {
        //     sRad: Math.PI * 2 / 3 * 2,
        //     sRad: Math.PI * 2 / 3 * 2,
        //     ease: Power4.easeOut,
        //     onStart: ()=>{

        //     }
        //   },'-=1.0')

        // setTimeout(()=>{

        //   // 下記の更新を止める
        //   this.hHandFlag=true;
        //   this.mHandFlag=true;
        //   this.sHandFlag=true;

        // },0.3)


      },'+=0.0')

      // ぐわ
     .add(()=>{

      var tl = new TimelineMax();
      var tl02 = new TimelineMax();
      var tl03 = new TimelineMax();

      // ぐわのまえに秒針を消す
      tl
        // color
        // .to(this.hHand, 1.5, {
        //   alpha: 0,
        //   ease: Expo.easeInOut
        // })
        // .to(this.mHand, 1.5, {
        //   alpha: 0,
        //   ease: Expo.easeInOut
        // },'-=1.5')
        .to(this.sHand, 1.6, {
          alpha: 0,
          ease: Power4.easeInOut
        })

      // ぐわ
      tl02
        // color
        .to(this, 1.8, {
          startRad04: Math.PI * 2 / 3 * 1,
          startRad05: Math.PI * 2 / 3 * 2,
          startRad06: Math.PI * 2 / 3 * 3,
          ease: Expo.easeInOut,
          onStart: ()=>{

            // 各UI表示
            this.to = new TopOpening();
            if (gb.in.pjax.id == 'top') this.to.runTop();
            else this.to.runOther();

          },
          onComplete: ()=>{

            this.$wrap.hide(); // ページ遷移エフェクトレイヤーを隠す
            this.isStart=false; // ループを止める 

            gb.in.pjax.isPjaxLock = false;

          }
        })


    },'+=3.0')

  }

  inEffect() {

    var tl = new TimelineMax();
    var tl02 = new TimelineMax();

    this.setParamInEf();

    tl
      // color
      .to(this, 1.8, {
        startRad04: Math.PI * 2 / 3 * 1,
        startRad05: Math.PI * 2 / 3 * 2,
        startRad06: Math.PI * 2 / 3 * 3,
        ease: Expo.easeInOut,
        onComplete: ()=>{
          this.$wrap.hide(); // ページ遷移エフェクトレイヤーを隠す
          this.isStart=false; // ループを止める         
          gb.in.pjax.isPjaxLock = false;

          if (gb.in.u.isResPC) {
            TweenMax.to($('#nav'), 1.2, {opacity: 1,ease: Power3.easeOut});
          } else {
            // nav
            if (gb.in.pjax.id=='top') {
              TweenMax.to($('#nav'), 1.2, {opacity: 1,ease: Power3.easeOut});
            };           
          }
          

        }
      })

  }

  outEffect() {

    var tl = new TimelineMax();
    var tl02 = new TimelineMax();

    this.setParamOutEf();

    // // 案1
    tl
      // color
      // .to(this, 1.8, {
      //   endRad01: Math.PI * 2 / 3 * 0 + Math.PI * 0.7,
      //   endRad02: Math.PI * 2 / 3 * 1 + Math.PI * 0.7,
      //   endRad03: Math.PI * 2 / 3 * 2 + Math.PI * 0.7,
      //   ease: Expo.easeInOut
      // })
      // .to(this, 1.8, {
      //   startRad01: Math.PI * 2 / 3 * 0 + Math.PI * 0.35,
      //   startRad02: Math.PI * 2 / 3 * 1 + Math.PI * 0.35,
      //   startRad03: Math.PI * 2 / 3 * 2 + Math.PI * 0.35,
      //   ease: Power3.easeOut
      // },'-=0.9')
      .to(this, 1.0, {
        endRad04: Math.PI * 2 / 3 * 1,
        endRad05: Math.PI * 2 / 3 * 2,
        endRad06: Math.PI * 2 / 3 * 3,
        ease: Expo.easeInOut,
        onComplete: ()=>{

          this.cb();

        }
      },'-=0.0')

    tl02
      // .to(this, 1.35, {
      //   endRad01: Math.PI * 2 / 3 * 1,
      //   endRad02: Math.PI * 2 / 3 * 2,
      //   endRad03: Math.PI * 2 / 3 * 3,
      //   ease: Power4.easeOut
      // },'+=0.95')
      // .to(this, 1.35, {
      //   startRad01: Math.PI * 2 / 3 * 1,
      //   startRad02: Math.PI * 2 / 3 * 2,
      //   startRad03: Math.PI * 2 / 3 * 3,
      //   ease: Power4.easeOut
      // },'-=1.35')
      // .to(this, 1.35, {
      //   endRad04: Math.PI * 2 / 3 * 1,
      //   endRad05: Math.PI * 2 / 3 * 2,
      //   endRad06: Math.PI * 2 / 3 * 3,
      //   ease: Power4.easeOut,
      //   onComplete: ()=>{

      //     this.cb();

      //   }
      // },'-=1.35')

  }

  setParamOutEf () {

    this.startRad01 = Math.PI * 2 / 3 * 0;
    this.startRad02 = Math.PI * 2 / 3 * 1;
    this.startRad03 = Math.PI * 2 / 3 * 2;
    this.startRad04 = Math.PI * 2 / 3 * 0;
    this.startRad05 = Math.PI * 2 / 3 * 1;
    this.startRad06 = Math.PI * 2 / 3 * 2;
    this.endRad01 = Math.PI * 2 / 3 * 0; // pixi.jsは何か描画しないとマスクされない？ 少数の値を入れている
    this.endRad02 = Math.PI * 2 / 3 * 1;
    this.endRad03 = Math.PI * 2 / 3 * 2;
    this.endRad04 = Math.PI * 2 / 3 * 0.00001; // pixi.jsは何か描画しないとマスクされない？ 少数の値を入れている
    this.endRad05 = Math.PI * 2 / 3 * 1;
    this.endRad06 = Math.PI * 2 / 3 * 2;

  }

  setParamInEf () {

    this.startRad04 = Math.PI * 2 / 3 * 0;
    this.startRad05 = Math.PI * 2 / 3 * 1;
    this.startRad06 = Math.PI * 2 / 3 * 2;
    this.endRad04 = Math.PI * 2 / 3 * 1; // pixi.jsは何か描画しないとマスクされない？ 少数の値を入れている
    this.endRad05 = Math.PI * 2 / 3 * 2;
    this.endRad06 = Math.PI * 2 / 3 * 3;

  }

  loop () {

    if (this.isStart) {

      this.update();
      this.draw();

    };

  }

  drawCircle(rad) {

    this.cx = gb.in.r.ws.w / 2;
    this.cy = gb.in.r.ws.h / 2;

    // 時針

    // flag後こちらでは更新しない
    if (!this.hHandFlag) {

      this.hRad = Math.PI * 2 * this.hourP - Math.PI / 2;

    } else {

    }
    
    this.hHandX = this.cx + Math.cos(this.hRad)* this.hRadius;
    this.hHandY = this.cy + Math.sin(this.hRad)* this.hRadius;

    // this.hHand.lineStyle(this.lineWidth, this.fillTiffanyBlue, 1);
    this.hHand.lineStyle(4, this.fillTiffanyBlue, 1);
    this.hHand.moveTo(this.cx, this.cy);    
    this.hHand.lineTo(this.hHandX, this.hHandY);

    this.hHand.endFill();


    // 分針
    if (!this.mHandFlag) {

      this.mRad = Math.PI * 2 * this.minuteP - Math.PI / 2;

    } else {

    }      

    this.mHandX = this.cx + Math.cos(this.mRad) * this.mRadius;
    this.mHandY = this.cy + Math.sin(this.mRad) * this.mRadius;


    // this.mHand.lineStyle(this.lineWidth, 0x81d8d0, 1);
    this.mHand.lineStyle(2, 0x81d8d0, 1);

    this.mHand.moveTo(this.cx, this.cy);    
    this.mHand.lineTo(this.mHandX, this.mHandY);

    this.mHand.endFill();


    // 秒針
    if (!this.sHandFlag) {
      
      this.sRad = Math.PI * 2 * this.secondP - Math.PI / 2;

    } else {


    }

    this.sRadius = this.getSHandLength(this.sRad);
    // log(this.sRadius);

    this.sHandX = this.cx + Math.cos(this.sRad) * this.sRadius * (gb.in.rm.current / 100);
    this.sHandY = this.cy + Math.sin(this.sRad) * this.sRadius * (gb.in.rm.current / 100);

    // log(this.sRad,this.sRadius,gb.in.rm.current);

    // this.sHand.lineStyle(this.lineWidth, 0x81d8d0, 1);
    this.sHand.lineStyle(1, 0x81d8d0, 1);

    this.sHand.moveTo(this.cx, this.cy);    
    this.sHand.lineTo(this.sHandX, this.sHandY);

    this.sHand.endFill();

  }

  getSHandLength(targetRad) {

    var angle = targetRad * 180 / Math.PI;
    if (angle < 0) angle += 360;
    angle = angle % 360;
    var target = 0;

    // 右下の角度
    var rightBtmAng = Math.atan2(gb.in.r.ws.h - this.cy,gb.in.r.ws.w - this.cx) * 180 / Math.PI;
    var leftBtmAng = 180-rightBtmAng;
    var leftTopAng = rightBtmAng + 180;
    var rightTopAng = 360-rightBtmAng;

    if (angle > rightBtmAng && angle < 90) {

      angle = 90 - angle;
      target = (gb.in.r.ws.h/2) / Math.cos(angle * Math.PI / 180)

    } else if (angle >= 90 && angle < leftBtmAng) {

      angle = angle - 90;
      target = (gb.in.r.ws.h/2) / Math.cos(angle * Math.PI / 180)

    } else if (angle >= leftBtmAng && angle < 180) {

      angle = 180 - angle;
      target = (gb.in.r.ws.w/2) / Math.cos(angle * Math.PI / 180)

    } else if (angle >= 180 && angle < leftTopAng) {

      angle = angle - 180;
      target = (gb.in.r.ws.w/2) / Math.cos(angle * Math.PI / 180)

    } else if (angle >= leftTopAng && angle < 270) {

      angle = 270 - angle;
      // console.log(angle);
      target = (gb.in.r.ws.h/2) / Math.cos(angle * Math.PI / 180)
      // console.log(target);
    } else if (angle >= 270 && angle < rightTopAng) {

      angle = angle - 270;
      // console.log(angle);
      target = (gb.in.r.ws.h/2) / Math.cos(angle * Math.PI / 180)
      // console.log(target);

    } else if (angle >= rightTopAng && angle < 360) {

      angle = 360 - angle;
      target = (gb.in.r.ws.w/2) / Math.cos(angle * Math.PI / 180)

    } else if (angle >= 0 && angle < rightBtmAng) {

      angle = angle;
      target = (gb.in.r.ws.w/2) / Math.cos(angle * Math.PI / 180)

    };

    return target;

  }

  drawCircle01(startRad, endRad) {

    var radius = $(window).height() * 10; // 暫定
    // var radian = rad % Math.PI * 2;

    // var rx = Math.cos(radian) * radius;
    // var ry = Math.sin(radian) * radius;

    this.color.beginFill(this.fillTiffanyBlue, 1);
    // this.color.lineStyle(2, 0xFF00FF, 1);

    this.color.moveTo(this.cx, this.cy);
    this.color.arc(this.cx, this.cy, radius, startRad, endRad);

    this.color.endFill();

  }

  drawCircle02(startRad, endRad) {

    var radius = $(window).height() * 10; // 暫定
    // var radian = rad % Math.PI * 2;

    // var rx = Math.cos(radian) * radius;
    // var ry = Math.sin(radian) * radius;

    this.color.beginFill(this.fillTiffanyBlue, 1);
    // this.color.lineStyle(2, 0xFF00FF, 1);

    this.color.moveTo(this.cx, this.cy);
    this.color.arc(this.cx, this.cy, radius, startRad, endRad);

    this.color.endFill();

  }

  drawCircle03(startRad, endRad) {

    var radius = $(window).height() * 10; // 暫定
    // var radian = rad % Math.PI * 2;

    // var rx = Math.cos(radian) * radius;
    // var ry = Math.sin(radian) * radius;

    this.color.beginFill(this.fillTiffanyBlue, 1);
    // this.color.lineStyle(2, 0xFF00FF, 1);

    this.color.moveTo(this.cx, this.cy);
    this.color.arc(this.cx, this.cy, radius, startRad, endRad);

    this.color.endFill();

  }

  drawCircle04(startRad, endRad) {

    var radius = $(window).height() * 10; // 暫定
    // var radian = rad % Math.PI * 2;

    // var rx = Math.cos(radian) * radius;
    // var ry = Math.sin(radian) * radius;

    this.mask.beginFill(this.fillBlack, 1);
    // this.mask.lineStyle(2, 0xFF00FF, 1);

    this.mask.moveTo(this.cx, this.cy);
    this.mask.arc(this.cx, this.cy, radius, startRad, endRad);

    this.mask.endFill();

  }

  drawCircle05(startRad, endRad) {

    var radius = $(window).height() * 10; // 暫定
    // var radian = rad % Math.PI * 2;

    // var rx = Math.cos(radian) * radius;
    // var ry = Math.sin(radian) * radius;

    this.mask.beginFill(this.fillBlack, 1);
    // this.mask.lineStyle(2, 0xFF00FF, 1);

    this.mask.moveTo(this.cx, this.cy);
    this.mask.arc(this.cx, this.cy, radius, startRad, endRad);

    this.mask.endFill();

  }

  drawCircle06(startRad, endRad) {

    var radius = $(window).height() * 10; // 暫定
    // var radian = rad % Math.PI * 2;

    // var rx = Math.cos(radian) * radius;
    // var ry = Math.sin(radian) * radius;

    this.mask.beginFill(this.fillBlack, 1);
    // this.mask.lineStyle(2, 0xFF00FF, 1);

    this.mask.moveTo(this.cx, this.cy);
    this.mask.arc(this.cx, this.cy, radius, startRad, endRad);

    this.mask.endFill();

  }

  onResize() {

    this.renderer.width = gb.in.r.ws.w;
    this.renderer.height = gb.in.r.ws.h;

    this.renderer.resize(gb.in.r.ws.w, gb.in.r.ws.h);

  

    this.sRadius = this.targetRadius = Math.sqrt(gb.in.r.ws.w*gb.in.r.ws.w + gb.in.r.ws.h*gb.in.r.ws.h);

  }

  setEvents () {

    gb.in.r.add('PageTransitionEffect', this.onResize.bind(this));
    gb.in.up.add('PageTransitionEffect', this.loop.bind(this));

  }

}