//--------------------------------------------------
//
//  GetData
//
//--------------------------------------------------             

(function(){

  var gb = jp.co.mie;

  function GetData(APIURL) {

    this.APIURL = APIURL;

    // 独自param
    this.page_no = 0;
    this.count = 10;
    this.category_slug = '';
    this.tag_slug = '';
    this.area_slug = '';
    this.author_name = '';
    this.id = -1;

    this.onSuccess = function(){};
    this.onError = function(){};
    this.status = '';

    this.setEvents();

  }

  GetData.prototype = {

    setupTopArticle: function() {

      // param
      this.param = {
                      url: this.APIURL,
                      type: 'get',
                      dataType: 'json',
                      data: {
                        'page_no': this.page_no,
                        'count': this.count,
                        'category_slug': this.category_slug,
                        'tag_slug': this.tag_slug,
                        'area_slug': this.area_slug,
                        'author_name': this.author_name,
                        'search_word': this.search_word,
                      },
                      timeout: 5000,
                      cache:false
                    };

    },

    setupAboutChara: function() {

      // param
      this.param = {
                      url: this.APIURL,
                      type: 'get',
                      dataType: 'json',
                      data: {
                        'id': this.id,
                      },
                      timeout: 5000,
                      cache:false
                    };

    },

    run: function () {

      var self = this;

      log(this.param);

      $.ajax(this.param)
       .then(
        function(data){self.onSuccess.call(self,data)}, // success
        function(data){self.onError.call(self,data)} // error
       );

    },

    setEvents: function () {


    },

  }

  gb.GetData = GetData;

})();