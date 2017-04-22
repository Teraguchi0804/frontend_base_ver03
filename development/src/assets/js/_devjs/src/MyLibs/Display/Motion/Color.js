// ------------------------------------------------------------
//
//  Color
//
// ------------------------------------------------------------

  // ------------------------------------------------------------
  //  RGBA
  // ------------------------------------------------------------
  export class RGBA {

    constructor(r, g, b, a) {

      if (gb.isArray(r)) {
              g = r[1];
              b = r[2];
              a = r[3];
              r = r[0];
          } else if (gb.isObject(r)) {
              g = r.g;
              b = r.b;
              a = r.a;
              r = r.r;
          }
          
          this.r = r || 0;
          this.g = g || 0;
          this.b = b || 0;
          this.a = !isNumber(a) ? 1 : a;
      };

    }

    toHSLA() {
        var hsl = rgbToHsl(Math.round(this.r), Math.round(this.g), Math.round(this.b));
        return new HSLA(hsl[0], hsl[1], hsl[2], this.a);
    }
    
    toArray() {
        return [Math.round(this.r), Math.round(this.g), Math.round(this.b), this.a];
    }
    
    clone() {
        return new Color.RGBA(this);
    }
    
    toString() {
        return 'rgba(' + Math.round(this.r) + ', ' + Math.round(this.g) + ', ' + Math.round(this.b) + ', ' + this.a + ')';
    }

  }
  // ------------------------------------------------------------
  //  HSLA
  // ------------------------------------------------------------
  export class HSLA(h, s, l, a) {

    constructor() {

      if (gb.isArray(h)) {
          s = h[1];
          l = h[2];
          a = h[3];
          h = h[0];
      } else if (gb.isObject(h)) {
          s = h.s;
          l = h.l;
          a = h.a;
          h = h.h;
      }
      
      this.h = h || 0;
      this.s = s || 0;
      this.l = l || 0;
      this.a = !isNumber(a) ? 1 : a;

    }

    toRGBA() {
        var rgb = hslToRgb(this.h, this.s, this.l);
        return new RGBA(rgb[0], rgb[1], rgb[2], this.a);
    }
    
    toArray() {
        return [this.h, this.s, this.l, this.a];
    }
    
    clone() {
        return new Color.HSLA(this);
    }
    
    toString() {
        return 'hsla(' + this.h + ', ' + this.s + '%, ' + this.l + '%, ' + this.a + ')';
    }


    // ------------------------------------------------------------
    //  helpers
    // ------------------------------------------------------------
    static rgbToHsl(r, g, b) {
        r /= 255;
        g /= 255;
        b /= 255;

        var max = Math.max(r, g, b);
        var min = Math.min(r, g, b);
        var h, s, l;

        l = (max + min) / 2;

        if (max === min) {
            h = s = 0;
        } else {
            var d = max - min;
            switch (max) {
                case r: h = ((g - b) / d * 60 + 360) % 360; break;
                case g: h = (b - r) / d * 60 + 120; break;
                case b: h = (r - g) / d * 60 + 240; break;
            }
            s = l <= 0.5 ? d / (max + min) : d / (2 - max  - min);
        }

        return [h, s * 100, l * 100];
    }

    static hslToRgb(h, s, l) {
     s /= 100;
     l /= 100;

        var r, g, b;

        if(s === 0){
            r = g = b = l * 255;
        } else {
            var v2 = l < 0.5 ? l * (1 + s) : l + s - l * s;
            var v1 = 2 * l - v2;
            r = Math.round(hueToRgb(v1, v2, h + 120) * 255);
            g = Math.round(hueToRgb(v1, v2, h) * 255);
            b = Math.round(hueToRgb(v1, v2, h - 120) * 255);
        }

        return [r, g, b];
    }

    static hueToRgb(v1, v2, vh) {
        vh /= 360;
        if (vh < 0) vh++;
        if (vh > 1) vh--;
        if (vh < 1 / 6) return v1 + (v2 - v1) * 6 * vh;
        if (vh < 1 / 2) return v2;
        if (vh < 2 / 3) return v1 + (v2 - v1) * (2 / 3 - vh) * 6;
        return v1;
    }


  }