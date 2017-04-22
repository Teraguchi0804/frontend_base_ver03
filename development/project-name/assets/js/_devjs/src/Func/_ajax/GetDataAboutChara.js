//--------------------------------------------------
//
//  GetDataAboutChara
//
//--------------------------------------------------
// {
// area: "四日市市",
// name: "こにゅうどうくん",
// image: "http://www.mie30.jp/wp/wp-content/uploads/2016/09/20130228_34_19_file.jpg",
// born: "平成9年の市制100周年記念事業開催時に、広く事業をPRするために誕生。その後、市制111周年の際もマスコットキャラクターとして活躍し、本市をPRする存在になっています。",
// url: "http://www5.city.yokkaichi.mie.jp/menu78573.html",
// introduction: "大四日市まつりの呼び物の山車「大入道」をモデルに、誰からも親しまれるようなキャラクターとしています。"
// }

(function(){

  var gb = jp.co.mie;

  function GetDataAboutChara() {

    this.APIURL = '/getCharacterData.php'

    this.cb = function(){};

    this.setup();

  }

  GetDataAboutChara.prototype = {

    setup: function () {

      var self = this;
      this.$target = $('.modal');
      
      // api wrapperのインスタンス化
      this.gd = new gb.GetData(this.APIURL);

      // ajax成功時の処理
      this.gd.onSuccess = function(data) {

        // image
        self.$target.find('.block01 img').attr('src', data.image);

        // name
        self.$target.find('.block01 .tit').html(data.name);

        // area
        self.$target.find('.block01 .text').html(data.area);

        // introduction
        self.$target.find('.block02 .text').html(data.introduction);

        // born
        self.$target.find('.block03 .text').html(data.born);

        // url
        self.$target.find('.block04 a').html(data.url).attr('href', data.url);

        // コールバック実行
        self.cb();

      }

    },

    run: function() {

      // パラメータのセット
      this.gd.setupAboutChara();

      // get ajax実行
      this.gd.run();

    },

  }

  gb.GetDataAboutChara = GetDataAboutChara;

})();