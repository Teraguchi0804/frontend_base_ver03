//--------------------------------------------------
//
//  GetDataTopArticle s
//
//--------------------------------------------------

(function(){

  var gb = jp.co.mie;

  function GetDataTopArticle() {

    this.$spTarget = $('.section02 .more.sp');
    this.$pcTarget = $('.section02 .more.pc');
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
    this.len = 14;
    
    this.setupSP();
    this.setupPC();
    this.setEvents();

  }

  GetDataTopArticle.prototype = {


    setupSP: function () {

      var self = this;
      
      this.gdSP = new gb.GetData(this.APIURL);

      this.gdSP.page_no = 1;
      this.gdSP.count = 14;

      // ajax成功時の処理
      this.gdSP.onSuccess = function(data) {

        self.gdSP.page_no = data.next_page_no

        // 0だったら、ロードするコンテンツ無し処理
        if (self.gdSP.page_no == 0) self.onEnd();

        var posts = data.posts_data;
        var html = '';

        $.each(posts, function(index, p) {

          html += '<!-- article -->' +
                   '<div class="article getDataArticle getDataArticle' + self.gdSP.page_no + '">' +
                   '<a href="'+p.post_url+'">' +
            
                     '<!-- categoryParts -->' +
                     '<div class="categoryParts category_'+p.category+'">'+self.categroyNameList[p.category]+'</div>' +
            
                     '<!-- img -->' +
                     '<div class="flex" style="background-image: url('+p.thumbnail_image+')"></div>' +
            
                     '<!-- titleWrap -->' +
                     '<div class="titleWrap">' +
                       '<h3>'+p.title+'</h3>' +
                       '<img src="'+p.author_image+'" height="50" width="50" alt="" class="writer">' +
                     '</div>' +
            
                   '</a>' +
                   '</div>';
          
        });

        $('.section02 .articleWrap').append(html);

        // ふわっと表示させる
        var ga = new gb.ShowContents($('.section02 .articleWrap .getDataArticle' + self.gdSP.page_no));
        ga.runAll();
 
        // layout 画像がloadされるのを待ってlayout処理
        $('.section02 .articleWrap img').on('load', function() {new gb.Section02ArticleHeightSP($('.section02 .articleWrap .article'));});

      }

    },

    setupPC: function () {

      var self = this;
      
      this.gdPC = new gb.GetData(this.APIURL);

      this.gdPC.page_no = 1;
      this.gdPC.count = 14;

      // ajax成功時の処理
      this.gdPC.onSuccess = function(data) {

        self.gdPC.page_no = data.next_page_no

        // 0だったら、ロードするコンテンツ無し処理
        if (self.gdPC.page_no == 0) self.onEnd();

        var posts = data.posts_data;
        // 上段左
        self.htmlBigArticle01 = '';
        // 上段右
        self.htmlBigArticle02 = '';
        self.htmlSmallArticleTop = '';
        self.htmlSmallArticleMid = '';
        self.htmlSmallArticleBtm = '';

        $.each(posts, function(index, p) {

          self.pcCur++;
          self.pcCur = self.pcCur % self.len;

          // 上段左ブロック
          if (self.pcCur == 0) {
          
            self.htmlBigArticle01 += '<!-- article -->' +
                                '<div class="article getDataArticle getDataArticle' + self.gdPC.page_no + '">' +
                                '<a href="'+p.post_url+'">' +

                                  '<!-- categoryParts -->' +
                                  '<div class="categoryParts category_'+p.category+'">'+self.categroyNameList[p.category]+'</div>' +
                                   
                                  '<!-- img -->' +
                                  '<div class="flex">' +
                                  '<div class="scaleImg" style="background-image: url('+p.thumbnail_image+')"></div>' +
                                  '</div>' +

                                  '<!-- titleWrap -->' +
                                  '<div class="titleWrap">' +
                                    '<h3 class="fontResponsive">'+p.title+'</h3>' +
                                    '<img src="'+p.author_image+'" height="50" width="50" alt="" class="writer">' +
                                  '</div>' +

                                '</a>' +
                                '</div>';

          };

          // 下段右ブロック
          if (self.pcCur == 13) {
          
            self.htmlBigArticle02 += '<!-- article -->' +
                                '<div class="article getDataArticle getDataArticle' + self.gdPC.page_no + '">' +
                                '<a href="'+p.post_url+'">' +

                                  '<!-- categoryParts -->' +
                                  '<div class="categoryParts category_'+p.category+'">'+self.categroyNameList[p.category]+'</div>' +
                                   
                                  '<!-- img -->' +
                                  '<div class="flex">' +
                                  '<div class="scaleImg" style="background-image: url('+p.thumbnail_image+')"></div>' +
                                  '</div>' +

                                  '<!-- titleWrap -->' +
                                  '<div class="titleWrap">' +
                                    '<h3 class="fontResponsive">'+p.title+'</h3>' +
                                    '<img src="'+p.author_image+'" height="50" width="50" alt="" class="writer">' +
                                  '</div>' +

                                '</a>' +
                                '</div>';

          };

          // 上段右ブロック
          if (self.pcCur >= 1 && self.pcCur <= 4) {
          
            self.htmlSmallArticleTop += '<!-- article -->' +
                                        '<div class="article item getDataArticle getDataArticle' + self.gdPC.page_no + '">' +
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

          };

          // 中段ブロック
          if (self.pcCur >= 5 && self.pcCur <= 8) {
          
            self.htmlSmallArticleMid += '<!-- article -->' +
                                        '<div class="article item getDataArticle getDataArticle' + self.gdPC.page_no + '">' +
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

          };

          // 下段左ブロック
          if (self.pcCur >= 9 && self.pcCur <= 12) {
          
            self.htmlSmallArticleBtm += '<!-- article -->' +
                                        '<div class="article item getDataArticle getDataArticle' + self.gdPC.page_no + '">' +
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

          };

          
        });

        // htmlの生成
        self.createHtmlPC();
        
        // append
        $('.section02 .articleWrap_pc').append(self.htmlPC);

        // ふわっと表示させる
        var ga = new gb.ShowContents($('.section02 .articleWrap_pc .getDataArticle' + self.gdPC.page_no));
        ga.runAll();

        // ie対策
        if ($('body').hasClass('ie')) new gb.ForIE();

        // layout 画像がloadされるのを待ってlayout処理
        $('.section02 .articleWrap_pc img').on('load', function() {new gb.Section02ArticleHeightPC();});

      }

    },

    createHtmlPC: function() {

      this.htmlPCTop =  '<!-- ***********' + 
                        '//  block上段' + 
                        '// *********** -->' + 
                        '<div class="blockTop fBoth">' + 

                          '<!-- 左ブロック -->' + 
                          '<div class="block item">' + 

                            this.htmlBigArticle01 + 

                          '</div>' + 

                          '<!-- 右ブロック -->' + 
                          '<div class="block item fList">' + 

                            this.htmlSmallArticleTop + 

                          '</div>' + 

                        '</div>';

      this.htmlPCMid =  '<!-- ***********' + 
                        '//  block中段' + 
                        '// *********** -->' + 
                        '<div class="blockMid fList">' + 

                          this.htmlSmallArticleMid + 

                        '</div>';

      this.htmlPCBtm =  '<!-- ***********' + 
                        '//  block下段' + 
                        '// *********** -->' + 
                        '<div class="blockBottom fBoth">' + 

                          '<!-- 左ブロック -->' + 
                          '<div class="block item fList">' + 

                            this.htmlSmallArticleBtm + 

                          '</div>' + 

                          '<!-- 右ブロック -->' + 
                          '<div class="block item">' + 

                            this.htmlBigArticle02 + 

                          '</div>' + 

                        '</div>';

      this.htmlPC = this.htmlPCTop + this.htmlPCMid + this.htmlPCBtm;

    },

    runSP: function() {

      // パラメータのセット
      this.gdSP.setupTopArticle();

      // get ajax実行
      this.gdSP.run();

    },

    runPC: function() {

      // パラメータのセット
      this.gdPC.setupTopArticle();

      // get ajax実行
      this.gdPC.run();

    },

    onEnd: function() {

      $('.section02 .btnWrap').hide();

    },

    setEvents: function () {

      this.$spTarget.on('click', this.runSP.bind(this));
      this.$pcTarget.on('click', this.runPC.bind(this));

    },

  }

  gb.GetDataTopArticle = GetDataTopArticle;

})();