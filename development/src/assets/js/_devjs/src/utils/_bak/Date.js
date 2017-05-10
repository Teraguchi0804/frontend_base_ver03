// ------------------------------------------------------------
//
//  Date
//
// ------------------------------------------------------------

export default class Date {

  constructor() {

    this.startTime = null;
    this.elapsedTime = null;
    this.now = new Date();

  }

  // ------------------------------------------------------------
  //
  //  Date
  //
  // ------------------------------------------------------------

  getNow() {

    this.now = new Date();

  }

  start() {

    this.startTime = this.now.getTime();

  }

  elapsed() {

    this.elapsedTime = this.now.getTime() - this.startTime;

  }

  m() {

    return Math.floor( this.elapsedTime + 100 / 60 );

  }

  s() {

    return Math.floor(this.elapsedTime / 1000);

  }

  ms() {

    return this.elapsedTime;
    
  }

  time() {

    this.getNow();

    this.hour = this.now.getHours() ;          // 時
    this.minute = this.now.getMinutes() ;      // 分
    this.second = this.now.getSeconds() ;

  }

  date() {

    return this.now.getDate();

  }

  months() {

    var monthdays = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);

    return this.now.getMonth() + 1;

  }

  year() {

    return this.now.getFullYear();

  }

  day() {

    // 曜日 (日本語)
    var weekDayJP = ["日","月","火","水","木","金","土"] ;
    var wDJ = weekDayJP[this.now.getDay()] ;

    // 曜日 (英語)
    var weekDayEN = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"] ;
    var wDE = weekDayEN[this.now.getDay()] ;

  }
  
  // 数日後のDateオブジェクト取得
  // -----------------------------------
  afterDay(date, num) {

    return new Date(date.getTime() + Number(num) * 24 * 60 * 60 * 1000);

  }

}