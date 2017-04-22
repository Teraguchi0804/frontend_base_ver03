//--------------------------------------------------
//
//  GetDataListArticleForArea s
//
//--------------------------------------------------

(function(){

  var gb = jp.co.mie;

  function GetDataListArticleForArea() {

    this.$target = $('.getAreaArticle');
    this.APIURL = '/getNextPosts.php'
    this.page_no = 0;

    this.categroyNameList = {
      eat: 'たべる', 
      play: 'あそぶ',
      work: 'はたらく',
      live: 'くらす',
      common: 'あるある',
      feature: '特集'
    }
    this.pcCur = -1;
    
    this.setup();
    this.setEvents();

  }

  GetDataListArticleForArea.prototype = {


    setup: function () {

      var self = this;
      
      this.gd = new gb.GetData(this.APIURL);

      this.gd.page_no = 0;
      this.gd.count = 16 ;

      // ajax成功時の処理
      this.gd.onSuccess = function(data) {

        self.gd.page_no = data.next_page_no

        // 0だったら、ロードするコンテンツ無し処理
        if (self.gd.page_no == 0) self.onEnd();
        else self.onNotEnd();

        var posts = data.posts_data;
        var html = '';

        $.each(posts, function(index, p) {

          html += '<!-- article -->' +
                   '<div class="article getDataArticle getDataArticle' + self.gd.page_no + '">' +
                   '<a href="'+p.post_url+'">' +
            
                     '<!-- categoryParts -->' +
                     '<div class="categoryParts category_'+p.category+'">'+self.categroyNameList[p.category]+'</div>' +
            
                     '<!-- img -->' +
                     '<div class="flex scaleImg" style="background-image: url('+p.thumbnail_image+')"></div>' +
            
                     '<!-- titleWrap -->' +
                     '<div class="titleWrap">' +
                       '<h3 class="fontResponsive">'+p.title+'</h3>' +
                       '<img src="'+p.author_image+'" height="50" width="50" alt="" class="writer">' +
                     '</div>' +
            
                   '</a>' +
                   '</div>';
          
        });

        // リフレッシュなので、articleWrap内のhtmlを削除
        $('.section01 .articleWrap').html('');

        // append
        $('.section01 .articleWrap').append(html);

        // ふわっと表示させる
        var ga = new gb.ShowContents($('.section01 .articleWrap .getDataArticle' + self.gd.page_no));
        ga.runAll();

        // ie対策
        if ($('body').hasClass('ie')) new gb.ForIE();
 
        // layout 画像がloadされるのを待ってlayout処理
        $('.section01 .articleWrap img').on('load', function() {new gb.Section02ArticleHeightSP($('.articleWrap .article'));});

      }

    },

    run: function() {

      // パラメータのセット
      this.gd.setupTopArticle();

      // get ajax実行
      this.gd.run();

    },

    onEnd: function() {

      $('.section01 .btnWrap').hide();

    },

    onNotEnd: function() {

      $('.section01 .btnWrap').show();

    },

    onChange: function(that) {

      var value = $(that).val();
      var areaName = $(".areaBlockWrap option:selected").text();

      // 最初のページを表示するようにする
      this.gd.page_no = 0;
      // もっと見るボタン取得ページ数を最初にする
      gb.in.GDLA.gd.page_no = 1;

      // // パラメータのセット
      window.getDataSlug.area_slug = this.gd.area_slug = value;

      // エリア以外のパラメータ
      this.gd.category_slug = window.getDataSlug.category_slug;
      this.gd.tag_slug = window.getDataSlug.tag_slug;

      // 名称の変更
      $('.selectArea span').text(areaName);

      // // 実行
      this.run();

    },

    setEvents: function () {

      var self = this;

      this.$target.on('change', function() {self.onChange.call(self, this);});

    },

  }

  gb.GetDataListArticleForArea = GetDataListArticleForArea;

})();