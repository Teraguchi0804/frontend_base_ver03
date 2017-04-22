//--------------------------------------------------
//
//  heightLine
//
//--------------------------------------------------

export default class HeightLine {

  constructor($obj,line) {

    this.setup();
    this.setEvents();

    this.run($obj, line);
 
  }

  setup() {

  }
  
  run($obj,line) {

    var $item = $obj;

    log($item);

    var list = [],
        len = $item.length,
        num = line,
        times,
        rest;

        // ループ回数算出
        times = Math.floor(len / num);
        // 余り算出
        rest = len % num;

    log($obj,len,line,times,rest);

    // 通常ループ
    for (var i = 0; i < times; i++) {
        for (var j = i * num; j < i * num + num; j++) {
          list.push($item.eq(j));
        };      
        this.heightLine(list);
        list = [];
    };

    // 余りループ
    for (var k = num * times; k < num * times + rest; k++) {
        list.push($item.eq(k));
        this.heightLine(list);
    };

  }

  heightLine(list){

    var h = [],maxH;

    $.each(list, function(i) {
        h.push($(this).height());
    });

    // 最大値取得
    maxH = Math.max.apply(null, h);

    $.each(list, function(i) {
        $(this).css('height', maxH);
    });

  }
         
  setEvents() {

    // gb.in.up.add(this.update.bind(this));

  }

}
