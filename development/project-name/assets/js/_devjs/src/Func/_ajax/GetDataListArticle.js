//--------------------------------------------------
//
//  GetDataListArticle s
//
//--------------------------------------------------

(function(){

  var gb = jp.co.mie;

  function GetDataListArticle() {

    this.$target = $('.section01 .btnWrap');
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

  GetDataListArticle.prototype = {


    setup: function () {

      var self = this;
      
      this.gd = new gb.GetData(this.APIURL);

      this.gd.page_no = 1;
      this.gd.count = 16 ;
      this.gd.category_slug = window.getDataSlug.category_slug;
      this.gd.tag_slug = window.getDataSlug.tag_slug;
      this.gd.area_slug = window.getDataSlug.area_slug;
      this.gd.author_name = window.getDataSlug.author_name;
      this.gd.search_word = window.getDataSlug.search_word;

      // ajax成功時の処理
      this.gd.onSuccess = function(data) {

        self.gd.page_no = data.next_page_no

        // 0だったら、ロードするコンテンツ無し処理
        if (self.gd.page_no == 0) self.onEnd();

        var posts = data.posts_data;
        var html = '';

        $.each(posts, function(index, p) {

          html += '<!-- article -->' +
                   '<div class="article getDataArticle getDataArticle' + self.gd.page_no + '">' +
                   '<a href="'+p.post_url+'">' +
            
                     '<!-- categoryParts -->' +
                     '<div class="categoryParts category_'+p.category+'">'+self.categroyNameList[p.category]+'</div>' +
            
                     '<!-- img -->' +
                     '<div class="flex scaleImg" style="background-image: url('+p.thumbnail_image+'"></div>' +
            
                     '<!-- titleWrap -->' +
                     '<div class="titleWrap">' +
                       '<h3 class="fontResponsive">'+p.title+'</h3>' +
                       '<img src="'+p.author_image+'" height="50" width="50" alt="" class="writer">' +
                     '</div>' +
            
                   '</a>' +
                   '</div>';
          
        });

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
      this.gd.category_slug = window.getDataSlug.category_slug;
      this.gd.tag_slug = window.getDataSlug.tag_slug;
      this.gd.area_slug = window.getDataSlug.area_slug;
      this.gd.author_name = window.getDataSlug.author_name;
      this.gd.search_word = window.getDataSlug.search_word;

      this.gd.setupTopArticle();

      // get ajax実行
      this.gd.run();

    },

    onEnd: function() {

      $('.section01 .btnWrap').hide();

    },

    setEvents: function () {

      this.$target.on('click', this.run.bind(this));

    },

  }

  gb.GetDataListArticle = GetDataListArticle;

})();