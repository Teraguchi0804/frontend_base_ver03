//--------------------------------------------------
//
//  BgVideoTile
//
//--------------------------------------------------

export default class BgVideoTile {

  constructor(param){


    this.setup();
    this.setEvents();

  }

  setup() {

    var id = 'UAWcs5H-qgQ';

    $('.videoTile').each(function(index, el) {

      var i = gb.in.u.add0(index + 1);
      // if (index > 8) return;

      gb.in.youtube.createIframe('videoTile'+i, id);
      
    });

  }

  setEvents() {


  }

}