//--------------------------------------------------
//
//  Ajax
//
//--------------------------------------------------

(function(){

  function Ajax(APIURL) {

    this.APIURL = APIURL;

    this.successFunc = null;
    this.errorFunc = null;
    this.status = '';    

  }

  Ajax.prototype = {

    run: function (param) {

      var self = this;

      $.ajax(this.APIURL, param)
      .then(
        function(data){self.successFunc.call(self,data)}, // success
        function(data){self.errorFunc.call(self,data)} // error
      );

    },

    setEvents: function () {

    },

  }

  gb.Ajax = Ajax;

})();