// ------------------------------------------------------------
//
//  Other
//
// ------------------------------------------------------------

export default class Other {

  constructor() {

  }

  // ------------------------------------------------------------
  //  getPageID
  // ------------------------------------------------------------
  getPageID() {

    this.pageID = $('body').attr('id');

  }

  // ------------------------------------------------------------
  //
  //  Data type check
  //
  // ------------------------------------------------------------

  isObject(value, ignoreArray) {
      return typeof value === 'object' && value !== null;
  }

  isNumber(value) {
      return typeof value === 'number';
  }

  isString(value) {
      return typeof value === 'string';
  }

  isFunction(value) {
      return typeof value === 'function';
  }

  isArray(value) {
      return Object.prototype.toString.call(value) === '[object Array]';
  }

  isNull(value) {
      return value === null;
  }

  isUndefined(value) {
      return typeof value === 'undefined';
  }

  // ------------------------------------------------------------
  //
  //  other
  //
  // ------------------------------------------------------------
  setImgSPSize ($target){

    // responsive spのとき処理
    // if (!this.isResSP) return;
    // 一度だけ処理
    if (this.isSetSPSize) return;
    this.isSetSPSize = true;

    var $img = $target,
        len = $img.length;

    $img.each(function(i) {

        var w = Math.floor($(this).width() / 2),
            h = Math.floor($(this).height() / 2);

        $(this).attr({
            'width': w,
            'height': h,
        });

        if (len == i + 1) $(window).trigger('setSpZieEnd');

    });

  }

  // ------------------------------------------------------------
  //  スマホ操作無効
  // ------------------------------------------------------------
  setPrevent() {

    var self = this;

    this.removePrevent();
    $(window).on('touchstart.noControl touchmove.noControl touchend.noControl click.noControl', function(e){e.preventDefault();});

  }

  removePrevent() {

    $(window).off('touchstart.noControl touchmove.noControl touchend.noControl click.noControl');

  }


  setPreventMousemove() {

    var self = this;

    this.removePrevent();
    $(window).on('touchmove.noControl', function(e){e.preventDefault();});

  }

  preventDefault(e) {

    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;

  }

  preventDefaultForScrollKeys(e) {

    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }

  }

  disableScroll() {

    if (window.addEventListener) // older FF
        window.addEventListener('DOMMouseScroll', this.preventDefault, false);
    window.onwheel = this.preventDefault; // modern standard
    window.onmousewheel = document.onmousewheel = this.preventDefault; // older browsers, IE
    window.ontouchmove  = this.preventDefault; // mobile
    document.onkeydown  = this.preventDefaultForScrollKeys;

  }

  enableScroll() {

    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', this.preventDefault, false);
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;
    document.onkeydown = null;

  }

}