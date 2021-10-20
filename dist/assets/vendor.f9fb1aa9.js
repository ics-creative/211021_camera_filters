var Oe=/iPhone/i,en=/iPod/i,rn=/iPad/i,nn=/\biOS-universal(?:.+)Mac\b/i,Pe=/\bAndroid(?:.+)Mobile\b/i,on=/Android/i,Lt=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,ie=/Silk/i,ht=/Windows Phone/i,an=/\bWindows(?:.+)ARM\b/i,sn=/BlackBerry/i,un=/BB10/i,fn=/Opera Mini/i,ln=/\b(CriOS|Chrome)(?:.+)Mobile/i,hn=/Mobile(?:.+)Firefox\b/i,cn=function(e){return typeof e!="undefined"&&e.platform==="MacIntel"&&typeof e.maxTouchPoints=="number"&&e.maxTouchPoints>1&&typeof MSStream=="undefined"};function ro(e){return function(r){return r.test(e)}}function no(e){var r={userAgent:"",platform:"",maxTouchPoints:0};!e&&typeof navigator!="undefined"?r={userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints||0}:typeof e=="string"?r.userAgent=e:e&&e.userAgent&&(r={userAgent:e.userAgent,platform:e.platform,maxTouchPoints:e.maxTouchPoints||0});var t=r.userAgent,n=t.split("[FBAN");typeof n[1]!="undefined"&&(t=n[0]),n=t.split("Twitter"),typeof n[1]!="undefined"&&(t=n[0]);var i=ro(t),o={apple:{phone:i(Oe)&&!i(ht),ipod:i(en),tablet:!i(Oe)&&(i(rn)||cn(r))&&!i(ht),universal:i(nn),device:(i(Oe)||i(en)||i(rn)||i(nn)||cn(r))&&!i(ht)},amazon:{phone:i(Lt),tablet:!i(Lt)&&i(ie),device:i(Lt)||i(ie)},android:{phone:!i(ht)&&i(Lt)||!i(ht)&&i(Pe),tablet:!i(ht)&&!i(Lt)&&!i(Pe)&&(i(ie)||i(on)),device:!i(ht)&&(i(Lt)||i(ie)||i(Pe)||i(on))||i(/\bokhttp\b/i)},windows:{phone:i(ht),tablet:i(an),device:i(ht)||i(an)},other:{blackberry:i(sn),blackberry10:i(un),opera:i(fn),firefox:i(hn),chrome:i(ln),device:i(sn)||i(un)||i(fn)||i(hn)||i(ln)},any:!1,phone:!1,tablet:!1};return o.any=o.apple.device||o.android.device||o.windows.device||o.other.device,o.phone=o.apple.phone||o.android.phone||o.windows.phone,o.tablet=o.apple.tablet||o.android.tablet||o.windows.tablet,o}/*!
 * @pixi/settings - v6.1.3
 * Compiled Mon, 13 Sep 2021 15:29:31 UTC
 *
 * @pixi/settings is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Ct=no(self.navigator);function io(e){var r=!0;if(Ct.tablet||Ct.phone){if(Ct.apple.device){var t=navigator.userAgent.match(/OS (\d+)_(\d+)?/);if(t){var n=parseInt(t[1],10);n<11&&(r=!1)}}if(Ct.android.device){var t=navigator.userAgent.match(/Android\s([0-9.]*)/);if(t){var n=parseInt(t[1],10);n<7&&(r=!1)}}}return r?e:4}function oo(){return!Ct.apple.device}/*!
 * @pixi/constants - v6.1.3
 * Compiled Mon, 13 Sep 2021 15:29:31 UTC
 *
 * @pixi/constants is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var dn;(function(e){e[e.WEBGL_LEGACY=0]="WEBGL_LEGACY",e[e.WEBGL=1]="WEBGL",e[e.WEBGL2=2]="WEBGL2"})(dn||(dn={}));var pn;(function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.WEBGL=1]="WEBGL",e[e.CANVAS=2]="CANVAS"})(pn||(pn={}));var vn;(function(e){e[e.COLOR=16384]="COLOR",e[e.DEPTH=256]="DEPTH",e[e.STENCIL=1024]="STENCIL"})(vn||(vn={}));var mn;(function(e){e[e.NORMAL=0]="NORMAL",e[e.ADD=1]="ADD",e[e.MULTIPLY=2]="MULTIPLY",e[e.SCREEN=3]="SCREEN",e[e.OVERLAY=4]="OVERLAY",e[e.DARKEN=5]="DARKEN",e[e.LIGHTEN=6]="LIGHTEN",e[e.COLOR_DODGE=7]="COLOR_DODGE",e[e.COLOR_BURN=8]="COLOR_BURN",e[e.HARD_LIGHT=9]="HARD_LIGHT",e[e.SOFT_LIGHT=10]="SOFT_LIGHT",e[e.DIFFERENCE=11]="DIFFERENCE",e[e.EXCLUSION=12]="EXCLUSION",e[e.HUE=13]="HUE",e[e.SATURATION=14]="SATURATION",e[e.COLOR=15]="COLOR",e[e.LUMINOSITY=16]="LUMINOSITY",e[e.NORMAL_NPM=17]="NORMAL_NPM",e[e.ADD_NPM=18]="ADD_NPM",e[e.SCREEN_NPM=19]="SCREEN_NPM",e[e.NONE=20]="NONE",e[e.SRC_OVER=0]="SRC_OVER",e[e.SRC_IN=21]="SRC_IN",e[e.SRC_OUT=22]="SRC_OUT",e[e.SRC_ATOP=23]="SRC_ATOP",e[e.DST_OVER=24]="DST_OVER",e[e.DST_IN=25]="DST_IN",e[e.DST_OUT=26]="DST_OUT",e[e.DST_ATOP=27]="DST_ATOP",e[e.ERASE=26]="ERASE",e[e.SUBTRACT=28]="SUBTRACT",e[e.XOR=29]="XOR"})(mn||(mn={}));var yn;(function(e){e[e.POINTS=0]="POINTS",e[e.LINES=1]="LINES",e[e.LINE_LOOP=2]="LINE_LOOP",e[e.LINE_STRIP=3]="LINE_STRIP",e[e.TRIANGLES=4]="TRIANGLES",e[e.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",e[e.TRIANGLE_FAN=6]="TRIANGLE_FAN"})(yn||(yn={}));var _n;(function(e){e[e.RGBA=6408]="RGBA",e[e.RGB=6407]="RGB",e[e.RG=33319]="RG",e[e.RED=6403]="RED",e[e.RGBA_INTEGER=36249]="RGBA_INTEGER",e[e.RGB_INTEGER=36248]="RGB_INTEGER",e[e.RG_INTEGER=33320]="RG_INTEGER",e[e.RED_INTEGER=36244]="RED_INTEGER",e[e.ALPHA=6406]="ALPHA",e[e.LUMINANCE=6409]="LUMINANCE",e[e.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",e[e.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",e[e.DEPTH_STENCIL=34041]="DEPTH_STENCIL"})(_n||(_n={}));var gn;(function(e){e[e.TEXTURE_2D=3553]="TEXTURE_2D",e[e.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",e[e.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY",e[e.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",e[e.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",e[e.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",e[e.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",e[e.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",e[e.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z"})(gn||(gn={}));var xn;(function(e){e[e.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",e[e.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",e[e.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",e[e.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",e[e.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",e[e.UNSIGNED_INT=5125]="UNSIGNED_INT",e[e.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",e[e.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",e[e.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",e[e.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",e[e.BYTE=5120]="BYTE",e[e.SHORT=5122]="SHORT",e[e.INT=5124]="INT",e[e.FLOAT=5126]="FLOAT",e[e.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV",e[e.HALF_FLOAT=36193]="HALF_FLOAT"})(xn||(xn={}));var bn;(function(e){e[e.FLOAT=0]="FLOAT",e[e.INT=1]="INT",e[e.UINT=2]="UINT"})(bn||(bn={}));var Fe;(function(e){e[e.NEAREST=0]="NEAREST",e[e.LINEAR=1]="LINEAR"})(Fe||(Fe={}));var Se;(function(e){e[e.CLAMP=33071]="CLAMP",e[e.REPEAT=10497]="REPEAT",e[e.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"})(Se||(Se={}));var Ue;(function(e){e[e.OFF=0]="OFF",e[e.POW2=1]="POW2",e[e.ON=2]="ON",e[e.ON_MANUAL=3]="ON_MANUAL"})(Ue||(Ue={}));var Tn;(function(e){e[e.NPM=0]="NPM",e[e.UNPACK=1]="UNPACK",e[e.PMA=2]="PMA",e[e.NO_PREMULTIPLIED_ALPHA=0]="NO_PREMULTIPLIED_ALPHA",e[e.PREMULTIPLY_ON_UPLOAD=1]="PREMULTIPLY_ON_UPLOAD",e[e.PREMULTIPLY_ALPHA=2]="PREMULTIPLY_ALPHA"})(Tn||(Tn={}));var Cn;(function(e){e[e.NO=0]="NO",e[e.YES=1]="YES",e[e.AUTO=2]="AUTO",e[e.BLEND=0]="BLEND",e[e.CLEAR=1]="CLEAR",e[e.BLIT=2]="BLIT"})(Cn||(Cn={}));var Le;(function(e){e[e.AUTO=0]="AUTO",e[e.MANUAL=1]="MANUAL"})(Le||(Le={}));var Xt;(function(e){e.LOW="lowp",e.MEDIUM="mediump",e.HIGH="highp"})(Xt||(Xt={}));var In;(function(e){e[e.NONE=0]="NONE",e[e.SCISSOR=1]="SCISSOR",e[e.STENCIL=2]="STENCIL",e[e.SPRITE=3]="SPRITE"})(In||(In={}));var Ge;(function(e){e[e.NONE=0]="NONE",e[e.LOW=2]="LOW",e[e.MEDIUM=4]="MEDIUM",e[e.HIGH=8]="HIGH"})(Ge||(Ge={}));var Rn;(function(e){e[e.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",e[e.ARRAY_BUFFER=34962]="ARRAY_BUFFER",e[e.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER"})(Rn||(Rn={}));var T={MIPMAP_TEXTURES:Ue.POW2,ANISOTROPIC_LEVEL:0,RESOLUTION:1,FILTER_RESOLUTION:1,FILTER_MULTISAMPLE:Ge.NONE,SPRITE_MAX_TEXTURES:io(32),SPRITE_BATCH_SIZE:4096,RENDER_OPTIONS:{view:null,antialias:!1,autoDensity:!1,backgroundColor:0,backgroundAlpha:1,useContextAlpha:!0,clearBeforeRender:!0,preserveDrawingBuffer:!1,width:800,height:600,legacy:!1},GC_MODE:Le.AUTO,GC_MAX_IDLE:60*60,GC_MAX_CHECK_COUNT:60*10,WRAP_MODE:Se.CLAMP,SCALE_MODE:Fe.LINEAR,PRECISION_VERTEX:Xt.HIGH,PRECISION_FRAGMENT:Ct.apple.device?Xt.HIGH:Xt.MEDIUM,CAN_UPLOAD_SAME_BUFFER:oo(),CREATE_IMAGE_BITMAP:!1,ROUND_PIXELS:!1};/*!
 * @pixi/constants - v6.1.3
 * Compiled Mon, 13 Sep 2021 15:29:31 UTC
 *
 * @pixi/constants is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var ct;(function(e){e[e.WEBGL_LEGACY=0]="WEBGL_LEGACY",e[e.WEBGL=1]="WEBGL",e[e.WEBGL2=2]="WEBGL2"})(ct||(ct={}));var Ht;(function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.WEBGL=1]="WEBGL",e[e.CANVAS=2]="CANVAS"})(Ht||(Ht={}));var oe;(function(e){e[e.COLOR=16384]="COLOR",e[e.DEPTH=256]="DEPTH",e[e.STENCIL=1024]="STENCIL"})(oe||(oe={}));var b;(function(e){e[e.NORMAL=0]="NORMAL",e[e.ADD=1]="ADD",e[e.MULTIPLY=2]="MULTIPLY",e[e.SCREEN=3]="SCREEN",e[e.OVERLAY=4]="OVERLAY",e[e.DARKEN=5]="DARKEN",e[e.LIGHTEN=6]="LIGHTEN",e[e.COLOR_DODGE=7]="COLOR_DODGE",e[e.COLOR_BURN=8]="COLOR_BURN",e[e.HARD_LIGHT=9]="HARD_LIGHT",e[e.SOFT_LIGHT=10]="SOFT_LIGHT",e[e.DIFFERENCE=11]="DIFFERENCE",e[e.EXCLUSION=12]="EXCLUSION",e[e.HUE=13]="HUE",e[e.SATURATION=14]="SATURATION",e[e.COLOR=15]="COLOR",e[e.LUMINOSITY=16]="LUMINOSITY",e[e.NORMAL_NPM=17]="NORMAL_NPM",e[e.ADD_NPM=18]="ADD_NPM",e[e.SCREEN_NPM=19]="SCREEN_NPM",e[e.NONE=20]="NONE",e[e.SRC_OVER=0]="SRC_OVER",e[e.SRC_IN=21]="SRC_IN",e[e.SRC_OUT=22]="SRC_OUT",e[e.SRC_ATOP=23]="SRC_ATOP",e[e.DST_OVER=24]="DST_OVER",e[e.DST_IN=25]="DST_IN",e[e.DST_OUT=26]="DST_OUT",e[e.DST_ATOP=27]="DST_ATOP",e[e.ERASE=26]="ERASE",e[e.SUBTRACT=28]="SUBTRACT",e[e.XOR=29]="XOR"})(b||(b={}));var Dt;(function(e){e[e.POINTS=0]="POINTS",e[e.LINES=1]="LINES",e[e.LINE_LOOP=2]="LINE_LOOP",e[e.LINE_STRIP=3]="LINE_STRIP",e[e.TRIANGLES=4]="TRIANGLES",e[e.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",e[e.TRIANGLE_FAN=6]="TRIANGLE_FAN"})(Dt||(Dt={}));var m;(function(e){e[e.RGBA=6408]="RGBA",e[e.RGB=6407]="RGB",e[e.RG=33319]="RG",e[e.RED=6403]="RED",e[e.RGBA_INTEGER=36249]="RGBA_INTEGER",e[e.RGB_INTEGER=36248]="RGB_INTEGER",e[e.RG_INTEGER=33320]="RG_INTEGER",e[e.RED_INTEGER=36244]="RED_INTEGER",e[e.ALPHA=6406]="ALPHA",e[e.LUMINANCE=6409]="LUMINANCE",e[e.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",e[e.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",e[e.DEPTH_STENCIL=34041]="DEPTH_STENCIL"})(m||(m={}));var It;(function(e){e[e.TEXTURE_2D=3553]="TEXTURE_2D",e[e.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",e[e.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY",e[e.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",e[e.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",e[e.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",e[e.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",e[e.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",e[e.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z"})(It||(It={}));var R;(function(e){e[e.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",e[e.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",e[e.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",e[e.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",e[e.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",e[e.UNSIGNED_INT=5125]="UNSIGNED_INT",e[e.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",e[e.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",e[e.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",e[e.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",e[e.BYTE=5120]="BYTE",e[e.SHORT=5122]="SHORT",e[e.INT=5124]="INT",e[e.FLOAT=5126]="FLOAT",e[e.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV",e[e.HALF_FLOAT=36193]="HALF_FLOAT"})(R||(R={}));var ae;(function(e){e[e.FLOAT=0]="FLOAT",e[e.INT=1]="INT",e[e.UINT=2]="UINT"})(ae||(ae={}));var J;(function(e){e[e.NEAREST=0]="NEAREST",e[e.LINEAR=1]="LINEAR"})(J||(J={}));var Me;(function(e){e[e.CLAMP=33071]="CLAMP",e[e.REPEAT=10497]="REPEAT",e[e.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"})(Me||(Me={}));var dt;(function(e){e[e.OFF=0]="OFF",e[e.POW2=1]="POW2",e[e.ON=2]="ON",e[e.ON_MANUAL=3]="ON_MANUAL"})(dt||(dt={}));var yt;(function(e){e[e.NPM=0]="NPM",e[e.UNPACK=1]="UNPACK",e[e.PMA=2]="PMA",e[e.NO_PREMULTIPLIED_ALPHA=0]="NO_PREMULTIPLIED_ALPHA",e[e.PREMULTIPLY_ON_UPLOAD=1]="PREMULTIPLY_ON_UPLOAD",e[e.PREMULTIPLY_ALPHA=2]="PREMULTIPLY_ALPHA"})(yt||(yt={}));var _t;(function(e){e[e.NO=0]="NO",e[e.YES=1]="YES",e[e.AUTO=2]="AUTO",e[e.BLEND=0]="BLEND",e[e.CLEAR=1]="CLEAR",e[e.BLIT=2]="BLIT"})(_t||(_t={}));var je;(function(e){e[e.AUTO=0]="AUTO",e[e.MANUAL=1]="MANUAL"})(je||(je={}));var at;(function(e){e.LOW="lowp",e.MEDIUM="mediump",e.HIGH="highp"})(at||(at={}));var W;(function(e){e[e.NONE=0]="NONE",e[e.SCISSOR=1]="SCISSOR",e[e.STENCIL=2]="STENCIL",e[e.SPRITE=3]="SPRITE"})(W||(W={}));var G;(function(e){e[e.NONE=0]="NONE",e[e.LOW=2]="LOW",e[e.MEDIUM=4]="MEDIUM",e[e.HIGH=8]="HIGH"})(G||(G={}));var st;(function(e){e[e.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",e[e.ARRAY_BUFFER=34962]="ARRAY_BUFFER",e[e.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER"})(st||(st={}));var Be=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},wn={exports:{}};(function(e){var r=Object.prototype.hasOwnProperty,t="~";function n(){}Object.create&&(n.prototype=Object.create(null),new n().__proto__||(t=!1));function i(u,f,l){this.fn=u,this.context=f,this.once=l||!1}function o(u,f,l,h,d){if(typeof l!="function")throw new TypeError("The listener must be a function");var c=new i(l,h||u,d),p=t?t+f:f;return u._events[p]?u._events[p].fn?u._events[p]=[u._events[p],c]:u._events[p].push(c):(u._events[p]=c,u._eventsCount++),u}function a(u,f){--u._eventsCount==0?u._events=new n:delete u._events[f]}function s(){this._events=new n,this._eventsCount=0}s.prototype.eventNames=function(){var f=[],l,h;if(this._eventsCount===0)return f;for(h in l=this._events)r.call(l,h)&&f.push(t?h.slice(1):h);return Object.getOwnPropertySymbols?f.concat(Object.getOwnPropertySymbols(l)):f},s.prototype.listeners=function(f){var l=t?t+f:f,h=this._events[l];if(!h)return[];if(h.fn)return[h.fn];for(var d=0,c=h.length,p=new Array(c);d<c;d++)p[d]=h[d].fn;return p},s.prototype.listenerCount=function(f){var l=t?t+f:f,h=this._events[l];return h?h.fn?1:h.length:0},s.prototype.emit=function(f,l,h,d,c,p){var _=t?t+f:f;if(!this._events[_])return!1;var v=this._events[_],E=arguments.length,y,x;if(v.fn){switch(v.once&&this.removeListener(f,v.fn,void 0,!0),E){case 1:return v.fn.call(v.context),!0;case 2:return v.fn.call(v.context,l),!0;case 3:return v.fn.call(v.context,l,h),!0;case 4:return v.fn.call(v.context,l,h,d),!0;case 5:return v.fn.call(v.context,l,h,d,c),!0;case 6:return v.fn.call(v.context,l,h,d,c,p),!0}for(x=1,y=new Array(E-1);x<E;x++)y[x-1]=arguments[x];v.fn.apply(v.context,y)}else{var L=v.length,w;for(x=0;x<L;x++)switch(v[x].once&&this.removeListener(f,v[x].fn,void 0,!0),E){case 1:v[x].fn.call(v[x].context);break;case 2:v[x].fn.call(v[x].context,l);break;case 3:v[x].fn.call(v[x].context,l,h);break;case 4:v[x].fn.call(v[x].context,l,h,d);break;default:if(!y)for(w=1,y=new Array(E-1);w<E;w++)y[w-1]=arguments[w];v[x].fn.apply(v[x].context,y)}}return!0},s.prototype.on=function(f,l,h){return o(this,f,l,h,!1)},s.prototype.once=function(f,l,h){return o(this,f,l,h,!0)},s.prototype.removeListener=function(f,l,h,d){var c=t?t+f:f;if(!this._events[c])return this;if(!l)return a(this,c),this;var p=this._events[c];if(p.fn)p.fn===l&&(!d||p.once)&&(!h||p.context===h)&&a(this,c);else{for(var _=0,v=[],E=p.length;_<E;_++)(p[_].fn!==l||d&&!p[_].once||h&&p[_].context!==h)&&v.push(p[_]);v.length?this._events[c]=v.length===1?v[0]:v:a(this,c)}return this},s.prototype.removeAllListeners=function(f){var l;return f?(l=t?t+f:f,this._events[l]&&a(this,l)):(this._events=new n,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=t,s.EventEmitter=s,e.exports=s})(wn);var ke=wn.exports,An={exports:{}};An.exports=se;An.exports.default=se;function se(e,r,t){t=t||2;var n=r&&r.length,i=n?r[0]*t:e.length,o=En(e,0,i,t,!0),a=[];if(!o||o.next===o.prev)return a;var s,u,f,l,h,d,c;if(n&&(o=lo(e,r,o,t)),e.length>80*t){s=f=e[0],u=l=e[1];for(var p=t;p<i;p+=t)h=e[p],d=e[p+1],h<s&&(s=h),d<u&&(u=d),h>f&&(f=h),d>l&&(l=d);c=Math.max(f-s,l-u),c=c!==0?1/c:0}return $t(o,a,t,s,u,c),a}function En(e,r,t,n,i){var o,a;if(i===Xe(e,r,t,n)>0)for(o=r;o<t;o+=n)a=Pn(o,e[o],e[o+1],a);else for(o=t-n;o>=r;o-=n)a=Pn(o,e[o],e[o+1],a);return a&&ue(a,a.next)&&(qt(a),a=a.next),a}function gt(e,r){if(!e)return e;r||(r=e);var t=e,n;do if(n=!1,!t.steiner&&(ue(t,t.next)||P(t.prev,t,t.next)===0)){if(qt(t),t=r=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==r);return r}function $t(e,r,t,n,i,o,a){if(!!e){!a&&o&&mo(e,n,i,o);for(var s=e,u,f;e.prev!==e.next;){if(u=e.prev,f=e.next,o?so(e,n,i,o):ao(e)){r.push(u.i/t),r.push(e.i/t),r.push(f.i/t),qt(e),e=f.next,s=f.next;continue}if(e=f,e===s){a?a===1?(e=uo(gt(e),r,t),$t(e,r,t,n,i,o,2)):a===2&&fo(e,r,t,n,i,o):$t(gt(e),r,t,n,i,o,1);break}}}}function ao(e){var r=e.prev,t=e,n=e.next;if(P(r,t,n)>=0)return!1;for(var i=e.next.next;i!==e.prev;){if(Gt(r.x,r.y,t.x,t.y,n.x,n.y,i.x,i.y)&&P(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function so(e,r,t,n){var i=e.prev,o=e,a=e.next;if(P(i,o,a)>=0)return!1;for(var s=i.x<o.x?i.x<a.x?i.x:a.x:o.x<a.x?o.x:a.x,u=i.y<o.y?i.y<a.y?i.y:a.y:o.y<a.y?o.y:a.y,f=i.x>o.x?i.x>a.x?i.x:a.x:o.x>a.x?o.x:a.x,l=i.y>o.y?i.y>a.y?i.y:a.y:o.y>a.y?o.y:a.y,h=ze(s,u,r,t,n),d=ze(f,l,r,t,n),c=e.prevZ,p=e.nextZ;c&&c.z>=h&&p&&p.z<=d;){if(c!==e.prev&&c!==e.next&&Gt(i.x,i.y,o.x,o.y,a.x,a.y,c.x,c.y)&&P(c.prev,c,c.next)>=0||(c=c.prevZ,p!==e.prev&&p!==e.next&&Gt(i.x,i.y,o.x,o.y,a.x,a.y,p.x,p.y)&&P(p.prev,p,p.next)>=0))return!1;p=p.nextZ}for(;c&&c.z>=h;){if(c!==e.prev&&c!==e.next&&Gt(i.x,i.y,o.x,o.y,a.x,a.y,c.x,c.y)&&P(c.prev,c,c.next)>=0)return!1;c=c.prevZ}for(;p&&p.z<=d;){if(p!==e.prev&&p!==e.next&&Gt(i.x,i.y,o.x,o.y,a.x,a.y,p.x,p.y)&&P(p.prev,p,p.next)>=0)return!1;p=p.nextZ}return!0}function uo(e,r,t){var n=e;do{var i=n.prev,o=n.next.next;!ue(i,o)&&Nn(i,n,n.next,o)&&Wt(i,o)&&Wt(o,i)&&(r.push(i.i/t),r.push(n.i/t),r.push(o.i/t),qt(n),qt(n.next),n=e=o),n=n.next}while(n!==e);return gt(n)}function fo(e,r,t,n,i,o){var a=e;do{for(var s=a.next.next;s!==a.prev;){if(a.i!==s.i&&go(a,s)){var u=On(a,s);a=gt(a,a.next),u=gt(u,u.next),$t(a,r,t,n,i,o),$t(u,r,t,n,i,o);return}s=s.next}a=a.next}while(a!==e)}function lo(e,r,t,n){var i=[],o,a,s,u,f;for(o=0,a=r.length;o<a;o++)s=r[o]*n,u=o<a-1?r[o+1]*n:e.length,f=En(e,s,u,n,!1),f===f.next&&(f.steiner=!0),i.push(_o(f));for(i.sort(ho),o=0;o<i.length;o++)t=co(i[o],t),t=gt(t,t.next);return t}function ho(e,r){return e.x-r.x}function co(e,r){var t=po(e,r);if(!t)return r;var n=On(t,e),i=gt(t,t.next);return gt(n,n.next),r===t?i:r}function po(e,r){var t=r,n=e.x,i=e.y,o=-1/0,a;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){var s=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(s<=n&&s>o){if(o=s,s===n){if(i===t.y)return t;if(i===t.next.y)return t.next}a=t.x<t.next.x?t:t.next}}t=t.next}while(t!==r);if(!a)return null;if(n===o)return a;var u=a,f=a.x,l=a.y,h=1/0,d;t=a;do n>=t.x&&t.x>=f&&n!==t.x&&Gt(i<l?n:o,i,f,l,i<l?o:n,i,t.x,t.y)&&(d=Math.abs(i-t.y)/(n-t.x),Wt(t,e)&&(d<h||d===h&&(t.x>a.x||t.x===a.x&&vo(a,t)))&&(a=t,h=d)),t=t.next;while(t!==u);return a}function vo(e,r){return P(e.prev,e,r.prev)<0&&P(r.next,e,e.next)<0}function mo(e,r,t,n){var i=e;do i.z===null&&(i.z=ze(i.x,i.y,r,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,yo(i)}function yo(e){var r,t,n,i,o,a,s,u,f=1;do{for(t=e,e=null,o=null,a=0;t;){for(a++,n=t,s=0,r=0;r<f&&(s++,n=n.nextZ,!!n);r++);for(u=f;s>0||u>0&&n;)s!==0&&(u===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,s--):(i=n,n=n.nextZ,u--),o?o.nextZ=i:e=i,i.prevZ=o,o=i;t=n}o.nextZ=null,f*=2}while(a>1);return e}function ze(e,r,t,n,i){return e=32767*(e-t)*i,r=32767*(r-n)*i,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e|r<<1}function _o(e){var r=e,t=e;do(r.x<t.x||r.x===t.x&&r.y<t.y)&&(t=r),r=r.next;while(r!==e);return t}function Gt(e,r,t,n,i,o,a,s){return(i-a)*(r-s)-(e-a)*(o-s)>=0&&(e-a)*(n-s)-(t-a)*(r-s)>=0&&(t-a)*(o-s)-(i-a)*(n-s)>=0}function go(e,r){return e.next.i!==r.i&&e.prev.i!==r.i&&!xo(e,r)&&(Wt(e,r)&&Wt(r,e)&&bo(e,r)&&(P(e.prev,e,r.prev)||P(e,r.prev,r))||ue(e,r)&&P(e.prev,e,e.next)>0&&P(r.prev,r,r.next)>0)}function P(e,r,t){return(r.y-e.y)*(t.x-r.x)-(r.x-e.x)*(t.y-r.y)}function ue(e,r){return e.x===r.x&&e.y===r.y}function Nn(e,r,t,n){var i=le(P(e,r,t)),o=le(P(e,r,n)),a=le(P(t,n,e)),s=le(P(t,n,r));return!!(i!==o&&a!==s||i===0&&fe(e,t,r)||o===0&&fe(e,n,r)||a===0&&fe(t,e,n)||s===0&&fe(t,r,n))}function fe(e,r,t){return r.x<=Math.max(e.x,t.x)&&r.x>=Math.min(e.x,t.x)&&r.y<=Math.max(e.y,t.y)&&r.y>=Math.min(e.y,t.y)}function le(e){return e>0?1:e<0?-1:0}function xo(e,r){var t=e;do{if(t.i!==e.i&&t.next.i!==e.i&&t.i!==r.i&&t.next.i!==r.i&&Nn(t,t.next,e,r))return!0;t=t.next}while(t!==e);return!1}function Wt(e,r){return P(e.prev,e,e.next)<0?P(e,r,e.next)>=0&&P(e,e.prev,r)>=0:P(e,r,e.prev)<0||P(e,e.next,r)<0}function bo(e,r){var t=e,n=!1,i=(e.x+r.x)/2,o=(e.y+r.y)/2;do t.y>o!=t.next.y>o&&t.next.y!==t.y&&i<(t.next.x-t.x)*(o-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==e);return n}function On(e,r){var t=new Ve(e.i,e.x,e.y),n=new Ve(r.i,r.x,r.y),i=e.next,o=r.prev;return e.next=r,r.prev=e,t.next=i,i.prev=t,n.next=t,t.prev=n,o.next=n,n.prev=o,n}function Pn(e,r,t,n){var i=new Ve(e,r,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function qt(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Ve(e,r,t){this.i=e,this.x=r,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}se.deviation=function(e,r,t,n){var i=r&&r.length,o=i?r[0]*t:e.length,a=Math.abs(Xe(e,0,o,t));if(i)for(var s=0,u=r.length;s<u;s++){var f=r[s]*t,l=s<u-1?r[s+1]*t:e.length;a-=Math.abs(Xe(e,f,l,t))}var h=0;for(s=0;s<n.length;s+=3){var d=n[s]*t,c=n[s+1]*t,p=n[s+2]*t;h+=Math.abs((e[d]-e[p])*(e[c+1]-e[d+1])-(e[d]-e[c])*(e[p+1]-e[d+1]))}return a===0&&h===0?0:Math.abs((h-a)/a)};function Xe(e,r,t,n){for(var i=0,o=r,a=t-n;o<t;o+=n)i+=(e[a]-e[o])*(e[o+1]+e[a+1]),a=o;return i}se.flatten=function(e){for(var r=e[0][0].length,t={vertices:[],holes:[],dimensions:r},n=0,i=0;i<e.length;i++){for(var o=0;o<e[i].length;o++)for(var a=0;a<r;a++)t.vertices.push(e[i][o][a]);i>0&&(n+=e[i-1].length,t.holes.push(n))}return t};var He={exports:{}};/*! https://mths.be/punycode v1.3.2 by @mathias */(function(e,r){(function(t){var n=r&&!r.nodeType&&r,i=e&&!e.nodeType&&e,o=typeof Be=="object"&&Be;(o.global===o||o.window===o||o.self===o)&&(t=o);var a,s=2147483647,u=36,f=1,l=26,h=38,d=700,c=72,p=128,_="-",v=/^xn--/,E=/[^\x20-\x7E]/,y=/[\x2E\u3002\uFF0E\uFF61]/g,x={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},L=u-f,w=Math.floor,S=String.fromCharCode,Z;function B(g){throw RangeError(x[g])}function D(g,C){for(var A=g.length,O=[];A--;)O[A]=C(g[A]);return O}function ft(g,C){var A=g.split("@"),O="";A.length>1&&(O=A[0]+"@",g=A[1]),g=g.replace(y,".");var U=g.split("."),X=D(U,C).join(".");return O+X}function Ft(g){for(var C=[],A=0,O=g.length,U,X;A<O;)U=g.charCodeAt(A++),U>=55296&&U<=56319&&A<O?(X=g.charCodeAt(A++),(X&64512)==56320?C.push(((U&1023)<<10)+(X&1023)+65536):(C.push(U),A--)):C.push(U);return C}function re(g){return D(g,function(C){var A="";return C>65535&&(C-=65536,A+=S(C>>>10&1023|55296),C=56320|C&1023),A+=S(C),A}).join("")}function xt(g){return g-48<10?g-22:g-65<26?g-65:g-97<26?g-97:u}function St(g,C){return g+22+75*(g<26)-((C!=0)<<5)}function Ut(g,C,A){var O=0;for(g=A?w(g/d):g>>1,g+=w(g/C);g>L*l>>1;O+=u)g=w(g/L);return w(O+(L+1)*g/(g+h))}function bt(g){var C=[],A=g.length,O,U=0,X=p,j=c,$,et,ot,lt,k,K,rt,mt,Tt;for($=g.lastIndexOf(_),$<0&&($=0),et=0;et<$;++et)g.charCodeAt(et)>=128&&B("not-basic"),C.push(g.charCodeAt(et));for(ot=$>0?$+1:0;ot<A;){for(lt=U,k=1,K=u;ot>=A&&B("invalid-input"),rt=xt(g.charCodeAt(ot++)),(rt>=u||rt>w((s-U)/k))&&B("overflow"),U+=rt*k,mt=K<=j?f:K>=j+l?l:K-j,!(rt<mt);K+=u)Tt=u-mt,k>w(s/Tt)&&B("overflow"),k*=Tt;O=C.length+1,j=Ut(U-lt,O,lt==0),w(U/O)>s-X&&B("overflow"),X+=w(U/O),U%=O,C.splice(U++,0,X)}return re(C)}function ne(g){var C,A,O,U,X,j,$,et,ot,lt,k,K=[],rt,mt,Tt,Ne;for(g=Ft(g),rt=g.length,C=p,A=0,X=c,j=0;j<rt;++j)k=g[j],k<128&&K.push(S(k));for(O=U=K.length,U&&K.push(_);O<rt;){for($=s,j=0;j<rt;++j)k=g[j],k>=C&&k<$&&($=k);for(mt=O+1,$-C>w((s-A)/mt)&&B("overflow"),A+=($-C)*mt,C=$,j=0;j<rt;++j)if(k=g[j],k<C&&++A>s&&B("overflow"),k==C){for(et=A,ot=u;lt=ot<=X?f:ot>=X+l?l:ot-X,!(et<lt);ot+=u)Ne=et-lt,Tt=u-lt,K.push(S(St(lt+Ne%Tt,0))),et=w(Ne/Tt);K.push(S(St(et,0))),X=Ut(A,mt,O==U),A=0,++O}++A,++C}return K.join("")}function to(g){return ft(g,function(C){return v.test(C)?bt(C.slice(4).toLowerCase()):C})}function eo(g){return ft(g,function(C){return E.test(C)?"xn--"+ne(C):C})}if(a={version:"1.3.2",ucs2:{decode:Ft,encode:re},decode:bt,encode:ne,toASCII:eo,toUnicode:to},n&&i)if(e.exports==n)i.exports=a;else for(Z in a)a.hasOwnProperty(Z)&&(n[Z]=a[Z]);else t.punycode=a})(Be)})(He,He.exports);var To={isString:function(e){return typeof e=="string"},isObject:function(e){return typeof e=="object"&&e!==null},isNull:function(e){return e===null},isNullOrUndefined:function(e){return e==null}},Zt={};function Co(e,r){return Object.prototype.hasOwnProperty.call(e,r)}var Io=function(e,r,t,n){r=r||"&",t=t||"=";var i={};if(typeof e!="string"||e.length===0)return i;var o=/\+/g;e=e.split(r);var a=1e3;n&&typeof n.maxKeys=="number"&&(a=n.maxKeys);var s=e.length;a>0&&s>a&&(s=a);for(var u=0;u<s;++u){var f=e[u].replace(o,"%20"),l=f.indexOf(t),h,d,c,p;l>=0?(h=f.substr(0,l),d=f.substr(l+1)):(h=f,d=""),c=decodeURIComponent(h),p=decodeURIComponent(d),Co(i,c)?Array.isArray(i[c])?i[c].push(p):i[c]=[i[c],p]:i[c]=p}return i},Kt=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}},Ro=function(e,r,t,n){return r=r||"&",t=t||"=",e===null&&(e=void 0),typeof e=="object"?Object.keys(e).map(function(i){var o=encodeURIComponent(Kt(i))+t;return Array.isArray(e[i])?e[i].map(function(a){return o+encodeURIComponent(Kt(a))}).join(r):o+encodeURIComponent(Kt(e[i]))}).join(r):n?encodeURIComponent(Kt(n))+t+encodeURIComponent(Kt(e)):""};Zt.decode=Zt.parse=Io;Zt.encode=Zt.stringify=Ro;var wo=He.exports,ut=To,Ao=he,Eo=Bo,No=jo;function nt(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}var Oo=/^([a-z0-9.+-]+:)/i,Po=/:[0-9]*$/,Fo=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,So=["<",">",'"',"`"," ","\r",`
`,"	"],Uo=["{","}","|","\\","^","`"].concat(So),De=["'"].concat(Uo),Fn=["%","/","?",";","#"].concat(De),Sn=["/","?","#"],Lo=255,Un=/^[+a-z0-9A-Z_-]{0,63}$/,Go=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,Mo={javascript:!0,"javascript:":!0},$e={javascript:!0,"javascript:":!0},Mt={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},We=Zt;function he(e,r,t){if(e&&ut.isObject(e)&&e instanceof nt)return e;var n=new nt;return n.parse(e,r,t),n}nt.prototype.parse=function(e,r,t){if(!ut.isString(e))throw new TypeError("Parameter 'url' must be a string, not "+typeof e);var n=e.indexOf("?"),i=n!==-1&&n<e.indexOf("#")?"?":"#",o=e.split(i),a=/\\/g;o[0]=o[0].replace(a,"/"),e=o.join(i);var s=e;if(s=s.trim(),!t&&e.split("#").length===1){var u=Fo.exec(s);if(u)return this.path=s,this.href=s,this.pathname=u[1],u[2]?(this.search=u[2],r?this.query=We.parse(this.search.substr(1)):this.query=this.search.substr(1)):r&&(this.search="",this.query={}),this}var f=Oo.exec(s);if(f){f=f[0];var l=f.toLowerCase();this.protocol=l,s=s.substr(f.length)}if(t||f||s.match(/^\/\/[^@\/]+@[^@\/]+/)){var h=s.substr(0,2)==="//";h&&!(f&&$e[f])&&(s=s.substr(2),this.slashes=!0)}if(!$e[f]&&(h||f&&!Mt[f])){for(var d=-1,c=0;c<Sn.length;c++){var p=s.indexOf(Sn[c]);p!==-1&&(d===-1||p<d)&&(d=p)}var _,v;d===-1?v=s.lastIndexOf("@"):v=s.lastIndexOf("@",d),v!==-1&&(_=s.slice(0,v),s=s.slice(v+1),this.auth=decodeURIComponent(_)),d=-1;for(var c=0;c<Fn.length;c++){var p=s.indexOf(Fn[c]);p!==-1&&(d===-1||p<d)&&(d=p)}d===-1&&(d=s.length),this.host=s.slice(0,d),s=s.slice(d),this.parseHost(),this.hostname=this.hostname||"";var E=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!E)for(var y=this.hostname.split(/\./),c=0,x=y.length;c<x;c++){var L=y[c];if(!!L&&!L.match(Un)){for(var w="",S=0,Z=L.length;S<Z;S++)L.charCodeAt(S)>127?w+="x":w+=L[S];if(!w.match(Un)){var B=y.slice(0,c),D=y.slice(c+1),ft=L.match(Go);ft&&(B.push(ft[1]),D.unshift(ft[2])),D.length&&(s="/"+D.join(".")+s),this.hostname=B.join(".");break}}}this.hostname.length>Lo?this.hostname="":this.hostname=this.hostname.toLowerCase(),E||(this.hostname=wo.toASCII(this.hostname));var Ft=this.port?":"+this.port:"",re=this.hostname||"";this.host=re+Ft,this.href+=this.host,E&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),s[0]!=="/"&&(s="/"+s))}if(!Mo[l])for(var c=0,x=De.length;c<x;c++){var xt=De[c];if(s.indexOf(xt)!==-1){var St=encodeURIComponent(xt);St===xt&&(St=escape(xt)),s=s.split(xt).join(St)}}var Ut=s.indexOf("#");Ut!==-1&&(this.hash=s.substr(Ut),s=s.slice(0,Ut));var bt=s.indexOf("?");if(bt!==-1?(this.search=s.substr(bt),this.query=s.substr(bt+1),r&&(this.query=We.parse(this.query)),s=s.slice(0,bt)):r&&(this.search="",this.query={}),s&&(this.pathname=s),Mt[l]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var Ft=this.pathname||"",ne=this.search||"";this.path=Ft+ne}return this.href=this.format(),this};function jo(e){return ut.isString(e)&&(e=he(e)),e instanceof nt?e.format():nt.prototype.format.call(e)}nt.prototype.format=function(){var e=this.auth||"";e&&(e=encodeURIComponent(e),e=e.replace(/%3A/i,":"),e+="@");var r=this.protocol||"",t=this.pathname||"",n=this.hash||"",i=!1,o="";this.host?i=e+this.host:this.hostname&&(i=e+(this.hostname.indexOf(":")===-1?this.hostname:"["+this.hostname+"]"),this.port&&(i+=":"+this.port)),this.query&&ut.isObject(this.query)&&Object.keys(this.query).length&&(o=We.stringify(this.query));var a=this.search||o&&"?"+o||"";return r&&r.substr(-1)!==":"&&(r+=":"),this.slashes||(!r||Mt[r])&&i!==!1?(i="//"+(i||""),t&&t.charAt(0)!=="/"&&(t="/"+t)):i||(i=""),n&&n.charAt(0)!=="#"&&(n="#"+n),a&&a.charAt(0)!=="?"&&(a="?"+a),t=t.replace(/[?#]/g,function(s){return encodeURIComponent(s)}),a=a.replace("#","%23"),r+i+t+a+n};function Bo(e,r){return he(e,!1,!0).resolve(r)}nt.prototype.resolve=function(e){return this.resolveObject(he(e,!1,!0)).format()};nt.prototype.resolveObject=function(e){if(ut.isString(e)){var r=new nt;r.parse(e,!1,!0),e=r}for(var t=new nt,n=Object.keys(this),i=0;i<n.length;i++){var o=n[i];t[o]=this[o]}if(t.hash=e.hash,e.href==="")return t.href=t.format(),t;if(e.slashes&&!e.protocol){for(var a=Object.keys(e),s=0;s<a.length;s++){var u=a[s];u!=="protocol"&&(t[u]=e[u])}return Mt[t.protocol]&&t.hostname&&!t.pathname&&(t.path=t.pathname="/"),t.href=t.format(),t}if(e.protocol&&e.protocol!==t.protocol){if(!Mt[e.protocol]){for(var f=Object.keys(e),l=0;l<f.length;l++){var h=f[l];t[h]=e[h]}return t.href=t.format(),t}if(t.protocol=e.protocol,!e.host&&!$e[e.protocol]){for(var x=(e.pathname||"").split("/");x.length&&!(e.host=x.shift()););e.host||(e.host=""),e.hostname||(e.hostname=""),x[0]!==""&&x.unshift(""),x.length<2&&x.unshift(""),t.pathname=x.join("/")}else t.pathname=e.pathname;if(t.search=e.search,t.query=e.query,t.host=e.host||"",t.auth=e.auth,t.hostname=e.hostname||e.host,t.port=e.port,t.pathname||t.search){var d=t.pathname||"",c=t.search||"";t.path=d+c}return t.slashes=t.slashes||e.slashes,t.href=t.format(),t}var p=t.pathname&&t.pathname.charAt(0)==="/",_=e.host||e.pathname&&e.pathname.charAt(0)==="/",v=_||p||t.host&&e.pathname,E=v,y=t.pathname&&t.pathname.split("/")||[],x=e.pathname&&e.pathname.split("/")||[],L=t.protocol&&!Mt[t.protocol];if(L&&(t.hostname="",t.port=null,t.host&&(y[0]===""?y[0]=t.host:y.unshift(t.host)),t.host="",e.protocol&&(e.hostname=null,e.port=null,e.host&&(x[0]===""?x[0]=e.host:x.unshift(e.host)),e.host=null),v=v&&(x[0]===""||y[0]==="")),_)t.host=e.host||e.host===""?e.host:t.host,t.hostname=e.hostname||e.hostname===""?e.hostname:t.hostname,t.search=e.search,t.query=e.query,y=x;else if(x.length)y||(y=[]),y.pop(),y=y.concat(x),t.search=e.search,t.query=e.query;else if(!ut.isNullOrUndefined(e.search)){if(L){t.hostname=t.host=y.shift();var w=t.host&&t.host.indexOf("@")>0?t.host.split("@"):!1;w&&(t.auth=w.shift(),t.host=t.hostname=w.shift())}return t.search=e.search,t.query=e.query,(!ut.isNull(t.pathname)||!ut.isNull(t.search))&&(t.path=(t.pathname?t.pathname:"")+(t.search?t.search:"")),t.href=t.format(),t}if(!y.length)return t.pathname=null,t.search?t.path="/"+t.search:t.path=null,t.href=t.format(),t;for(var S=y.slice(-1)[0],Z=(t.host||e.host||y.length>1)&&(S==="."||S==="..")||S==="",B=0,D=y.length;D>=0;D--)S=y[D],S==="."?y.splice(D,1):S===".."?(y.splice(D,1),B++):B&&(y.splice(D,1),B--);if(!v&&!E)for(;B--;B)y.unshift("..");v&&y[0]!==""&&(!y[0]||y[0].charAt(0)!=="/")&&y.unshift(""),Z&&y.join("/").substr(-1)!=="/"&&y.push("");var ft=y[0]===""||y[0]&&y[0].charAt(0)==="/";if(L){t.hostname=t.host=ft?"":y.length?y.shift():"";var w=t.host&&t.host.indexOf("@")>0?t.host.split("@"):!1;w&&(t.auth=w.shift(),t.host=t.hostname=w.shift())}return v=v||t.host&&y.length,v&&!ft&&y.unshift(""),y.length?t.pathname=y.join("/"):(t.pathname=null,t.path=null),(!ut.isNull(t.pathname)||!ut.isNull(t.search))&&(t.path=(t.pathname?t.pathname:"")+(t.search?t.search:"")),t.auth=e.auth||t.auth,t.slashes=t.slashes||e.slashes,t.href=t.format(),t};nt.prototype.parseHost=function(){var e=this.host,r=Po.exec(e);r&&(r=r[0],r!==":"&&(this.port=r.substr(1)),e=e.substr(0,e.length-r.length)),e&&(this.hostname=e)};/*!
 * @pixi/utils - v6.1.3
 * Compiled Mon, 13 Sep 2021 15:29:31 UTC
 *
 * @pixi/utils is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var ko={parse:Ao,format:No,resolve:Eo};T.RETINA_PREFIX=/@([0-9\.]+)x/;T.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT=!1;var Ln=!1,Gn="6.1.3";function zo(e){var r;if(!Ln){if(navigator.userAgent.toLowerCase().indexOf("chrome")>-1){var t=[`
 %c %c %c PixiJS `+Gn+" - \u2730 "+e+` \u2730  %c  %c  http://www.pixijs.com/  %c %c \u2665%c\u2665%c\u2665 

`,"background: #ff66a5; padding:5px 0;","background: #ff66a5; padding:5px 0;","color: #ff66a5; background: #030307; padding:5px 0;","background: #ff66a5; padding:5px 0;","background: #ffc3dc; padding:5px 0;","background: #ff66a5; padding:5px 0;","color: #ff2424; background: #fff; padding:5px 0;","color: #ff2424; background: #fff; padding:5px 0;","color: #ff2424; background: #fff; padding:5px 0;"];(r=self.console).log.apply(r,t)}else self.console&&self.console.log("PixiJS "+Gn+" - "+e+" - http://www.pixijs.com/");Ln=!0}}var qe;function Vo(){return typeof qe=="undefined"&&(qe=function(){var r={stencil:!0,failIfMajorPerformanceCaveat:T.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT};try{if(!self.WebGLRenderingContext)return!1;var t=document.createElement("canvas"),n=t.getContext("webgl",r)||t.getContext("experimental-webgl",r),i=!!(n&&n.getContextAttributes().stencil);if(n){var o=n.getExtension("WEBGL_lose_context");o&&o.loseContext()}return n=null,i}catch{return!1}}()),qe}function Y(e,r){return r===void 0&&(r=[]),r[0]=(e>>16&255)/255,r[1]=(e>>8&255)/255,r[2]=(e&255)/255,r}function Xo(e){var r=e.toString(16);return r="000000".substr(0,6-r.length)+r,"#"+r}function it(e){return(e[0]*255<<16)+(e[1]*255<<8)+(e[2]*255|0)}function Ho(){for(var e=[],r=[],t=0;t<32;t++)e[t]=t,r[t]=t;e[b.NORMAL_NPM]=b.NORMAL,e[b.ADD_NPM]=b.ADD,e[b.SCREEN_NPM]=b.SCREEN,r[b.NORMAL]=b.NORMAL_NPM,r[b.ADD]=b.ADD_NPM,r[b.SCREEN]=b.SCREEN_NPM;var n=[];return n.push(r),n.push(e),n}var Do=Ho();function $o(e,r){if(r===1)return(r*255<<24)+e;if(r===0)return 0;var t=e>>16&255,n=e>>8&255,i=e&255;return t=t*r+.5|0,n=n*r+.5|0,i=i*r+.5|0,(r*255<<24)+(t<<16)+(n<<8)+i}function Mn(e){if(e.BYTES_PER_ELEMENT===4)return e instanceof Float32Array?"Float32Array":e instanceof Uint32Array?"Uint32Array":"Int32Array";if(e.BYTES_PER_ELEMENT===2){if(e instanceof Uint16Array)return"Uint16Array"}else if(e.BYTES_PER_ELEMENT===1&&e instanceof Uint8Array)return"Uint8Array";return null}function ce(e){return e+=e===0?1:0,--e,e|=e>>>1,e|=e>>>2,e|=e>>>4,e|=e>>>8,e|=e>>>16,e+1}function jn(e){return!(e&e-1)&&!!e}function Bn(e){var r=(e>65535?1:0)<<4;e>>>=r;var t=(e>255?1:0)<<3;return e>>>=t,r|=t,t=(e>15?1:0)<<2,e>>>=t,r|=t,t=(e>3?1:0)<<1,e>>>=t,r|=t,r|e>>1}function Wo(e,r,t){var n=e.length,i;if(!(r>=n||t===0)){t=r+t>n?n-r:t;var o=n-t;for(i=r;i<o;++i)e[i]=e[i+t];e.length=o}}var qo=0;function de(){return++qo}var kn={};function Rt(e,r,t){if(t===void 0&&(t=3),!kn[r]){var n=new Error().stack;typeof n=="undefined"?console.warn("PixiJS Deprecation Warning: ",r+`
Deprecated since v`+e):(n=n.split(`
`).splice(t).join(`
`),console.groupCollapsed?(console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s","color:#614108;background:#fffbe6","font-weight:normal;color:#614108;background:#fffbe6",r+`
Deprecated since v`+e),console.warn(n),console.groupEnd()):(console.warn("PixiJS Deprecation Warning: ",r+`
Deprecated since v`+e),console.warn(n))),kn[r]=!0}}var zn={},pt=Object.create(null),wt=Object.create(null);(function(){function e(r,t,n){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.resolution=n||T.RESOLUTION,this.resize(r,t)}return e.prototype.clear=function(){this.context.setTransform(1,0,0,1,0,0),this.context.clearRect(0,0,this.canvas.width,this.canvas.height)},e.prototype.resize=function(r,t){this.canvas.width=Math.round(r*this.resolution),this.canvas.height=Math.round(t*this.resolution)},e.prototype.destroy=function(){this.context=null,this.canvas=null},Object.defineProperty(e.prototype,"width",{get:function(){return this.canvas.width},set:function(r){this.canvas.width=Math.round(r)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this.canvas.height},set:function(r){this.canvas.height=Math.round(r)},enumerable:!1,configurable:!0}),e})();var pe;function Zo(e,r){if(r===void 0&&(r=self.location),e.indexOf("data:")===0)return"";r=r||self.location,pe||(pe=document.createElement("a")),pe.href=e;var t=ko.parse(pe.href),n=!t.port&&r.port===""||t.port===r.port;return t.hostname!==r.hostname||!n||t.protocol!==r.protocol?"anonymous":""}function Vn(e,r){var t=T.RETINA_PREFIX.exec(e);return t?parseFloat(t[1]):r!==void 0?r:1}/*!
 * @pixi/runner - v6.1.3
 * Compiled Mon, 13 Sep 2021 15:29:31 UTC
 *
 * @pixi/runner is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var z=function(){function e(r){this.items=[],this._name=r,this._aliasCount=0}return e.prototype.emit=function(r,t,n,i,o,a,s,u){if(arguments.length>8)throw new Error("max arguments reached");var f=this,l=f.name,h=f.items;this._aliasCount++;for(var d=0,c=h.length;d<c;d++)h[d][l](r,t,n,i,o,a,s,u);return h===this.items&&this._aliasCount--,this},e.prototype.ensureNonAliasedItems=function(){this._aliasCount>0&&this.items.length>1&&(this._aliasCount=0,this.items=this.items.slice(0))},e.prototype.add=function(r){return r[this._name]&&(this.ensureNonAliasedItems(),this.remove(r),this.items.push(r)),this},e.prototype.remove=function(r){var t=this.items.indexOf(r);return t!==-1&&(this.ensureNonAliasedItems(),this.items.splice(t,1)),this},e.prototype.contains=function(r){return this.items.indexOf(r)!==-1},e.prototype.removeAll=function(){return this.ensureNonAliasedItems(),this.items.length=0,this},e.prototype.destroy=function(){this.removeAll(),this.items=null,this._name=null},Object.defineProperty(e.prototype,"empty",{get:function(){return this.items.length===0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return this._name},enumerable:!1,configurable:!0}),e}();Object.defineProperties(z.prototype,{dispatch:{value:z.prototype.emit},run:{value:z.prototype.emit}});/*!
 * @pixi/ticker - v6.1.3
 * Compiled Mon, 13 Sep 2021 15:29:31 UTC
 *
 * @pixi/ticker is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */T.TARGET_FPMS=.06;var ve;(function(e){e[e.INTERACTION=50]="INTERACTION",e[e.HIGH=25]="HIGH",e[e.NORMAL=0]="NORMAL",e[e.LOW=-25]="LOW",e[e.UTILITY=-50]="UTILITY"})(ve||(ve={}));var Ze=function(){function e(r,t,n,i){t===void 0&&(t=null),n===void 0&&(n=0),i===void 0&&(i=!1),this.next=null,this.previous=null,this._destroyed=!1,this.fn=r,this.context=t,this.priority=n,this.once=i}return e.prototype.match=function(r,t){return t===void 0&&(t=null),this.fn===r&&this.context===t},e.prototype.emit=function(r){this.fn&&(this.context?this.fn.call(this.context,r):this.fn(r));var t=this.next;return this.once&&this.destroy(!0),this._destroyed&&(this.next=null),t},e.prototype.connect=function(r){this.previous=r,r.next&&(r.next.previous=this),this.next=r.next,r.next=this},e.prototype.destroy=function(r){r===void 0&&(r=!1),this._destroyed=!0,this.fn=null,this.context=null,this.previous&&(this.previous.next=this.next),this.next&&(this.next.previous=this.previous);var t=this.next;return this.next=r?null:t,this.previous=null,t},e}(),jt=function(){function e(){var r=this;this.autoStart=!1,this.deltaTime=1,this.lastTime=-1,this.speed=1,this.started=!1,this._requestId=null,this._maxElapsedMS=100,this._minElapsedMS=0,this._protected=!1,this._lastFrame=-1,this._head=new Ze(null,null,1/0),this.deltaMS=1/T.TARGET_FPMS,this.elapsedMS=1/T.TARGET_FPMS,this._tick=function(t){r._requestId=null,r.started&&(r.update(t),r.started&&r._requestId===null&&r._head.next&&(r._requestId=requestAnimationFrame(r._tick)))}}return e.prototype._requestIfNeeded=function(){this._requestId===null&&this._head.next&&(this.lastTime=performance.now(),this._lastFrame=this.lastTime,this._requestId=requestAnimationFrame(this._tick))},e.prototype._cancelIfNeeded=function(){this._requestId!==null&&(cancelAnimationFrame(this._requestId),this._requestId=null)},e.prototype._startIfPossible=function(){this.started?this._requestIfNeeded():this.autoStart&&this.start()},e.prototype.add=function(r,t,n){return n===void 0&&(n=ve.NORMAL),this._addListener(new Ze(r,t,n))},e.prototype.addOnce=function(r,t,n){return n===void 0&&(n=ve.NORMAL),this._addListener(new Ze(r,t,n,!0))},e.prototype._addListener=function(r){var t=this._head.next,n=this._head;if(!t)r.connect(n);else{for(;t;){if(r.priority>t.priority){r.connect(n);break}n=t,t=t.next}r.previous||r.connect(n)}return this._startIfPossible(),this},e.prototype.remove=function(r,t){for(var n=this._head.next;n;)n.match(r,t)?n=n.destroy():n=n.next;return this._head.next||this._cancelIfNeeded(),this},Object.defineProperty(e.prototype,"count",{get:function(){if(!this._head)return 0;for(var r=0,t=this._head;t=t.next;)r++;return r},enumerable:!1,configurable:!0}),e.prototype.start=function(){this.started||(this.started=!0,this._requestIfNeeded())},e.prototype.stop=function(){this.started&&(this.started=!1,this._cancelIfNeeded())},e.prototype.destroy=function(){if(!this._protected){this.stop();for(var r=this._head.next;r;)r=r.destroy(!0);this._head.destroy(),this._head=null}},e.prototype.update=function(r){r===void 0&&(r=performance.now());var t;if(r>this.lastTime){if(t=this.elapsedMS=r-this.lastTime,t>this._maxElapsedMS&&(t=this._maxElapsedMS),t*=this.speed,this._minElapsedMS){var n=r-this._lastFrame|0;if(n<this._minElapsedMS)return;this._lastFrame=r-n%this._minElapsedMS}this.deltaMS=t,this.deltaTime=this.deltaMS*T.TARGET_FPMS;for(var i=this._head,o=i.next;o;)o=o.emit(this.deltaTime);i.next||this._cancelIfNeeded()}else this.deltaTime=this.deltaMS=this.elapsedMS=0;this.lastTime=r},Object.defineProperty(e.prototype,"FPS",{get:function(){return 1e3/this.elapsedMS},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"minFPS",{get:function(){return 1e3/this._maxElapsedMS},set:function(r){var t=Math.min(this.maxFPS,r),n=Math.min(Math.max(0,t)/1e3,T.TARGET_FPMS);this._maxElapsedMS=1/n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"maxFPS",{get:function(){return this._minElapsedMS?Math.round(1e3/this._minElapsedMS):0},set:function(r){if(r===0)this._minElapsedMS=0;else{var t=Math.max(this.minFPS,r);this._minElapsedMS=1/(t/1e3)}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"shared",{get:function(){if(!e._shared){var r=e._shared=new e;r.autoStart=!0,r._protected=!0}return e._shared},enumerable:!1,configurable:!0}),Object.defineProperty(e,"system",{get:function(){if(!e._system){var r=e._system=new e;r.autoStart=!0,r._protected=!0}return e._system},enumerable:!1,configurable:!0}),e}();/*!
 * @pixi/math - v6.1.3
 * Compiled Mon, 13 Sep 2021 15:29:31 UTC
 *
 * @pixi/math is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Ko=Math.PI*2,Bt=Math.PI/180,Ke;(function(e){e[e.POLY=0]="POLY",e[e.RECT=1]="RECT",e[e.CIRC=2]="CIRC",e[e.ELIP=3]="ELIP",e[e.RREC=4]="RREC"})(Ke||(Ke={}));var V=function(){function e(r,t,n,i){r===void 0&&(r=0),t===void 0&&(t=0),n===void 0&&(n=0),i===void 0&&(i=0),this.x=Number(r),this.y=Number(t),this.width=Number(n),this.height=Number(i),this.type=Ke.RECT}return Object.defineProperty(e.prototype,"left",{get:function(){return this.x},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"right",{get:function(){return this.x+this.width},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"top",{get:function(){return this.y},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"bottom",{get:function(){return this.y+this.height},enumerable:!1,configurable:!0}),Object.defineProperty(e,"EMPTY",{get:function(){return new e(0,0,0,0)},enumerable:!1,configurable:!0}),e.prototype.clone=function(){return new e(this.x,this.y,this.width,this.height)},e.prototype.copyFrom=function(r){return this.x=r.x,this.y=r.y,this.width=r.width,this.height=r.height,this},e.prototype.copyTo=function(r){return r.x=this.x,r.y=this.y,r.width=this.width,r.height=this.height,r},e.prototype.contains=function(r,t){return this.width<=0||this.height<=0?!1:r>=this.x&&r<this.x+this.width&&t>=this.y&&t<this.y+this.height},e.prototype.pad=function(r,t){return r===void 0&&(r=0),t===void 0&&(t=r),this.x-=r,this.y-=t,this.width+=r*2,this.height+=t*2,this},e.prototype.fit=function(r){var t=Math.max(this.x,r.x),n=Math.min(this.x+this.width,r.x+r.width),i=Math.max(this.y,r.y),o=Math.min(this.y+this.height,r.y+r.height);return this.x=t,this.width=Math.max(n-t,0),this.y=i,this.height=Math.max(o-i,0),this},e.prototype.ceil=function(r,t){r===void 0&&(r=1),t===void 0&&(t=.001);var n=Math.ceil((this.x+this.width-t)*r)/r,i=Math.ceil((this.y+this.height-t)*r)/r;return this.x=Math.floor((this.x+t)*r)/r,this.y=Math.floor((this.y+t)*r)/r,this.width=n-this.x,this.height=i-this.y,this},e.prototype.enlarge=function(r){var t=Math.min(this.x,r.x),n=Math.max(this.x+this.width,r.x+r.width),i=Math.min(this.y,r.y),o=Math.max(this.y+this.height,r.y+r.height);return this.x=t,this.width=n-t,this.y=i,this.height=o-i,this},e.prototype.toString=function(){return"[@pixi/math:Rectangle x="+this.x+" y="+this.y+" width="+this.width+" height="+this.height+"]"},e}(),M=function(){function e(r,t){r===void 0&&(r=0),t===void 0&&(t=0),this.x=0,this.y=0,this.x=r,this.y=t}return e.prototype.clone=function(){return new e(this.x,this.y)},e.prototype.copyFrom=function(r){return this.set(r.x,r.y),this},e.prototype.copyTo=function(r){return r.set(this.x,this.y),r},e.prototype.equals=function(r){return r.x===this.x&&r.y===this.y},e.prototype.set=function(r,t){return r===void 0&&(r=0),t===void 0&&(t=r),this.x=r,this.y=t,this},e.prototype.toString=function(){return"[@pixi/math:Point x="+this.x+" y="+this.y+"]"},e}(),Jt=function(){function e(r,t,n,i){n===void 0&&(n=0),i===void 0&&(i=0),this._x=n,this._y=i,this.cb=r,this.scope=t}return e.prototype.clone=function(r,t){return r===void 0&&(r=this.cb),t===void 0&&(t=this.scope),new e(r,t,this._x,this._y)},e.prototype.set=function(r,t){return r===void 0&&(r=0),t===void 0&&(t=r),(this._x!==r||this._y!==t)&&(this._x=r,this._y=t,this.cb.call(this.scope)),this},e.prototype.copyFrom=function(r){return(this._x!==r.x||this._y!==r.y)&&(this._x=r.x,this._y=r.y,this.cb.call(this.scope)),this},e.prototype.copyTo=function(r){return r.set(this._x,this._y),r},e.prototype.equals=function(r){return r.x===this._x&&r.y===this._y},e.prototype.toString=function(){return"[@pixi/math:ObservablePoint x="+0+" y="+0+" scope="+this.scope+"]"},Object.defineProperty(e.prototype,"x",{get:function(){return this._x},set:function(r){this._x!==r&&(this._x=r,this.cb.call(this.scope))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"y",{get:function(){return this._y},set:function(r){this._y!==r&&(this._y=r,this.cb.call(this.scope))},enumerable:!1,configurable:!0}),e}(),Q=function(){function e(r,t,n,i,o,a){r===void 0&&(r=1),t===void 0&&(t=0),n===void 0&&(n=0),i===void 0&&(i=1),o===void 0&&(o=0),a===void 0&&(a=0),this.array=null,this.a=r,this.b=t,this.c=n,this.d=i,this.tx=o,this.ty=a}return e.prototype.fromArray=function(r){this.a=r[0],this.b=r[1],this.c=r[3],this.d=r[4],this.tx=r[2],this.ty=r[5]},e.prototype.set=function(r,t,n,i,o,a){return this.a=r,this.b=t,this.c=n,this.d=i,this.tx=o,this.ty=a,this},e.prototype.toArray=function(r,t){this.array||(this.array=new Float32Array(9));var n=t||this.array;return r?(n[0]=this.a,n[1]=this.b,n[2]=0,n[3]=this.c,n[4]=this.d,n[5]=0,n[6]=this.tx,n[7]=this.ty,n[8]=1):(n[0]=this.a,n[1]=this.c,n[2]=this.tx,n[3]=this.b,n[4]=this.d,n[5]=this.ty,n[6]=0,n[7]=0,n[8]=1),n},e.prototype.apply=function(r,t){t=t||new M;var n=r.x,i=r.y;return t.x=this.a*n+this.c*i+this.tx,t.y=this.b*n+this.d*i+this.ty,t},e.prototype.applyInverse=function(r,t){t=t||new M;var n=1/(this.a*this.d+this.c*-this.b),i=r.x,o=r.y;return t.x=this.d*n*i+-this.c*n*o+(this.ty*this.c-this.tx*this.d)*n,t.y=this.a*n*o+-this.b*n*i+(-this.ty*this.a+this.tx*this.b)*n,t},e.prototype.translate=function(r,t){return this.tx+=r,this.ty+=t,this},e.prototype.scale=function(r,t){return this.a*=r,this.d*=t,this.c*=r,this.b*=t,this.tx*=r,this.ty*=t,this},e.prototype.rotate=function(r){var t=Math.cos(r),n=Math.sin(r),i=this.a,o=this.c,a=this.tx;return this.a=i*t-this.b*n,this.b=i*n+this.b*t,this.c=o*t-this.d*n,this.d=o*n+this.d*t,this.tx=a*t-this.ty*n,this.ty=a*n+this.ty*t,this},e.prototype.append=function(r){var t=this.a,n=this.b,i=this.c,o=this.d;return this.a=r.a*t+r.b*i,this.b=r.a*n+r.b*o,this.c=r.c*t+r.d*i,this.d=r.c*n+r.d*o,this.tx=r.tx*t+r.ty*i+this.tx,this.ty=r.tx*n+r.ty*o+this.ty,this},e.prototype.setTransform=function(r,t,n,i,o,a,s,u,f){return this.a=Math.cos(s+f)*o,this.b=Math.sin(s+f)*o,this.c=-Math.sin(s-u)*a,this.d=Math.cos(s-u)*a,this.tx=r-(n*this.a+i*this.c),this.ty=t-(n*this.b+i*this.d),this},e.prototype.prepend=function(r){var t=this.tx;if(r.a!==1||r.b!==0||r.c!==0||r.d!==1){var n=this.a,i=this.c;this.a=n*r.a+this.b*r.c,this.b=n*r.b+this.b*r.d,this.c=i*r.a+this.d*r.c,this.d=i*r.b+this.d*r.d}return this.tx=t*r.a+this.ty*r.c+r.tx,this.ty=t*r.b+this.ty*r.d+r.ty,this},e.prototype.decompose=function(r){var t=this.a,n=this.b,i=this.c,o=this.d,a=r.pivot,s=-Math.atan2(-i,o),u=Math.atan2(n,t),f=Math.abs(s+u);return f<1e-5||Math.abs(Ko-f)<1e-5?(r.rotation=u,r.skew.x=r.skew.y=0):(r.rotation=0,r.skew.x=s,r.skew.y=u),r.scale.x=Math.sqrt(t*t+n*n),r.scale.y=Math.sqrt(i*i+o*o),r.position.x=this.tx+(a.x*t+a.y*i),r.position.y=this.ty+(a.x*n+a.y*o),r},e.prototype.invert=function(){var r=this.a,t=this.b,n=this.c,i=this.d,o=this.tx,a=r*i-t*n;return this.a=i/a,this.b=-t/a,this.c=-n/a,this.d=r/a,this.tx=(n*this.ty-i*o)/a,this.ty=-(r*this.ty-t*o)/a,this},e.prototype.identity=function(){return this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0,this},e.prototype.clone=function(){var r=new e;return r.a=this.a,r.b=this.b,r.c=this.c,r.d=this.d,r.tx=this.tx,r.ty=this.ty,r},e.prototype.copyTo=function(r){return r.a=this.a,r.b=this.b,r.c=this.c,r.d=this.d,r.tx=this.tx,r.ty=this.ty,r},e.prototype.copyFrom=function(r){return this.a=r.a,this.b=r.b,this.c=r.c,this.d=r.d,this.tx=r.tx,this.ty=r.ty,this},e.prototype.toString=function(){return"[@pixi/math:Matrix a="+this.a+" b="+this.b+" c="+this.c+" d="+this.d+" tx="+this.tx+" ty="+this.ty+"]"},Object.defineProperty(e,"IDENTITY",{get:function(){return new e},enumerable:!1,configurable:!0}),Object.defineProperty(e,"TEMP_MATRIX",{get:function(){return new e},enumerable:!1,configurable:!0}),e}(),At=[1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1,0,1],Et=[0,1,1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1],Nt=[0,-1,-1,-1,0,1,1,1,0,1,1,1,0,-1,-1,-1],Ot=[1,1,0,-1,-1,-1,0,1,-1,-1,0,1,1,1,0,-1],Je=[],Xn=[],me=Math.sign;function Jo(){for(var e=0;e<16;e++){var r=[];Je.push(r);for(var t=0;t<16;t++)for(var n=me(At[e]*At[t]+Nt[e]*Et[t]),i=me(Et[e]*At[t]+Ot[e]*Et[t]),o=me(At[e]*Nt[t]+Nt[e]*Ot[t]),a=me(Et[e]*Nt[t]+Ot[e]*Ot[t]),s=0;s<16;s++)if(At[s]===n&&Et[s]===i&&Nt[s]===o&&Ot[s]===a){r.push(s);break}}for(var e=0;e<16;e++){var u=new Q;u.set(At[e],Et[e],Nt[e],Ot[e],0,0),Xn.push(u)}}Jo();var F={E:0,SE:1,S:2,SW:3,W:4,NW:5,N:6,NE:7,MIRROR_VERTICAL:8,MAIN_DIAGONAL:10,MIRROR_HORIZONTAL:12,REVERSE_DIAGONAL:14,uX:function(e){return At[e]},uY:function(e){return Et[e]},vX:function(e){return Nt[e]},vY:function(e){return Ot[e]},inv:function(e){return e&8?e&15:-e&7},add:function(e,r){return Je[e][r]},sub:function(e,r){return Je[e][F.inv(r)]},rotate180:function(e){return e^4},isVertical:function(e){return(e&3)==2},byDirection:function(e,r){return Math.abs(e)*2<=Math.abs(r)?r>=0?F.S:F.N:Math.abs(r)*2<=Math.abs(e)?e>0?F.E:F.W:r>0?e>0?F.SE:F.SW:e>0?F.NE:F.NW},matrixAppendRotationInv:function(e,r,t,n){t===void 0&&(t=0),n===void 0&&(n=0);var i=Xn[F.inv(r)];i.tx=t,i.ty=n,e.append(i)}};(function(){function e(){this.worldTransform=new Q,this.localTransform=new Q,this.position=new Jt(this.onChange,this,0,0),this.scale=new Jt(this.onChange,this,1,1),this.pivot=new Jt(this.onChange,this,0,0),this.skew=new Jt(this.updateSkew,this,0,0),this._rotation=0,this._cx=1,this._sx=0,this._cy=0,this._sy=1,this._localID=0,this._currentLocalID=0,this._worldID=0,this._parentID=0}return e.prototype.onChange=function(){this._localID++},e.prototype.updateSkew=function(){this._cx=Math.cos(this._rotation+this.skew.y),this._sx=Math.sin(this._rotation+this.skew.y),this._cy=-Math.sin(this._rotation-this.skew.x),this._sy=Math.cos(this._rotation-this.skew.x),this._localID++},e.prototype.toString=function(){return"[@pixi/math:Transform "+("position=("+this.position.x+", "+this.position.y+") ")+("rotation="+this.rotation+" ")+("scale=("+this.scale.x+", "+this.scale.y+") ")+("skew=("+this.skew.x+", "+this.skew.y+") ")+"]"},e.prototype.updateLocalTransform=function(){var r=this.localTransform;this._localID!==this._currentLocalID&&(r.a=this._cx*this.scale.x,r.b=this._sx*this.scale.x,r.c=this._cy*this.scale.y,r.d=this._sy*this.scale.y,r.tx=this.position.x-(this.pivot.x*r.a+this.pivot.y*r.c),r.ty=this.position.y-(this.pivot.x*r.b+this.pivot.y*r.d),this._currentLocalID=this._localID,this._parentID=-1)},e.prototype.updateTransform=function(r){var t=this.localTransform;if(this._localID!==this._currentLocalID&&(t.a=this._cx*this.scale.x,t.b=this._sx*this.scale.x,t.c=this._cy*this.scale.y,t.d=this._sy*this.scale.y,t.tx=this.position.x-(this.pivot.x*t.a+this.pivot.y*t.c),t.ty=this.position.y-(this.pivot.x*t.b+this.pivot.y*t.d),this._currentLocalID=this._localID,this._parentID=-1),this._parentID!==r._worldID){var n=r.worldTransform,i=this.worldTransform;i.a=t.a*n.a+t.b*n.c,i.b=t.a*n.b+t.b*n.d,i.c=t.c*n.a+t.d*n.c,i.d=t.c*n.b+t.d*n.d,i.tx=t.tx*n.a+t.ty*n.c+n.tx,i.ty=t.tx*n.b+t.ty*n.d+n.ty,this._parentID=r._worldID,this._worldID++}},e.prototype.setFromMatrix=function(r){r.decompose(this),this._localID++},Object.defineProperty(e.prototype,"rotation",{get:function(){return this._rotation},set:function(r){this._rotation!==r&&(this._rotation=r,this.updateSkew())},enumerable:!1,configurable:!0}),e.IDENTITY=new e,e})();/*!
 * @pixi/core - v6.1.3
 * Compiled Mon, 13 Sep 2021 15:29:31 UTC
 *
 * @pixi/core is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */T.PREFER_ENV=Ct.any?ct.WEBGL:ct.WEBGL2;T.STRICT_TEXTURE_CACHE=!1;var ye=[];function Ye(e,r){if(!e)return null;var t="";if(typeof e=="string"){var n=/\.(\w{3,4})(?:$|\?|#)/i.exec(e);n&&(t=n[1].toLowerCase())}for(var i=ye.length-1;i>=0;--i){var o=ye[i];if(o.test&&o.test(e,t))return new o(e,r)}throw new Error("Unrecognized source type to auto-detect Resource")}/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Qe=function(e,r){return Qe=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},Qe(e,r)};function N(e,r){Qe(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var tr=function(){return tr=Object.assign||function(r){for(var t=arguments,n,i=1,o=arguments.length;i<o;i++){n=t[i];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])}return r},tr.apply(this,arguments)};function Yo(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&(t[n[i]]=e[n[i]]);return t}var kt=function(){function e(r,t){r===void 0&&(r=0),t===void 0&&(t=0),this._width=r,this._height=t,this.destroyed=!1,this.internal=!1,this.onResize=new z("setRealSize"),this.onUpdate=new z("update"),this.onError=new z("onError")}return e.prototype.bind=function(r){this.onResize.add(r),this.onUpdate.add(r),this.onError.add(r),(this._width||this._height)&&this.onResize.emit(this._width,this._height)},e.prototype.unbind=function(r){this.onResize.remove(r),this.onUpdate.remove(r),this.onError.remove(r)},e.prototype.resize=function(r,t){(r!==this._width||t!==this._height)&&(this._width=r,this._height=t,this.onResize.emit(r,t))},Object.defineProperty(e.prototype,"valid",{get:function(){return!!this._width&&!!this._height},enumerable:!1,configurable:!0}),e.prototype.update=function(){this.destroyed||this.onUpdate.emit()},e.prototype.load=function(){return Promise.resolve(this)},Object.defineProperty(e.prototype,"width",{get:function(){return this._width},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this._height},enumerable:!1,configurable:!0}),e.prototype.style=function(r,t,n){return!1},e.prototype.dispose=function(){},e.prototype.destroy=function(){this.destroyed||(this.destroyed=!0,this.dispose(),this.onError.removeAll(),this.onError=null,this.onResize.removeAll(),this.onResize=null,this.onUpdate.removeAll(),this.onUpdate=null)},e.test=function(r,t){return!1},e}(),_e=function(e){N(r,e);function r(t,n){var i=this,o=n||{},a=o.width,s=o.height;if(!a||!s)throw new Error("BufferResource width or height invalid");return i=e.call(this,a,s)||this,i.data=t,i}return r.prototype.upload=function(t,n,i){var o=t.gl;o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.alphaMode===yt.UNPACK);var a=n.realWidth,s=n.realHeight;return i.width===a&&i.height===s?o.texSubImage2D(n.target,0,0,0,a,s,n.format,i.type,this.data):(i.width=a,i.height=s,o.texImage2D(n.target,0,i.internalFormat,a,s,0,n.format,i.type,this.data)),!0},r.prototype.dispose=function(){this.data=null},r.test=function(t){return t instanceof Float32Array||t instanceof Uint8Array||t instanceof Uint32Array},r}(kt),Qo={scaleMode:J.NEAREST,format:m.RGBA,alphaMode:yt.NPM},H=function(e){N(r,e);function r(t,n){t===void 0&&(t=null),n===void 0&&(n=null);var i=e.call(this)||this;n=n||{};var o=n.alphaMode,a=n.mipmap,s=n.anisotropicLevel,u=n.scaleMode,f=n.width,l=n.height,h=n.wrapMode,d=n.format,c=n.type,p=n.target,_=n.resolution,v=n.resourceOptions;return t&&!(t instanceof kt)&&(t=Ye(t,v),t.internal=!0),i.resolution=_||T.RESOLUTION,i.width=Math.round((f||0)*i.resolution)/i.resolution,i.height=Math.round((l||0)*i.resolution)/i.resolution,i._mipmap=a!==void 0?a:T.MIPMAP_TEXTURES,i.anisotropicLevel=s!==void 0?s:T.ANISOTROPIC_LEVEL,i._wrapMode=h||T.WRAP_MODE,i._scaleMode=u!==void 0?u:T.SCALE_MODE,i.format=d||m.RGBA,i.type=c||R.UNSIGNED_BYTE,i.target=p||It.TEXTURE_2D,i.alphaMode=o!==void 0?o:yt.UNPACK,i.uid=de(),i.touched=0,i.isPowerOfTwo=!1,i._refreshPOT(),i._glTextures={},i.dirtyId=0,i.dirtyStyleId=0,i.cacheId=null,i.valid=f>0&&l>0,i.textureCacheIds=[],i.destroyed=!1,i.resource=null,i._batchEnabled=0,i._batchLocation=0,i.parentTextureArray=null,i.setResource(t),i}return Object.defineProperty(r.prototype,"realWidth",{get:function(){return Math.round(this.width*this.resolution)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"realHeight",{get:function(){return Math.round(this.height*this.resolution)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"mipmap",{get:function(){return this._mipmap},set:function(t){this._mipmap!==t&&(this._mipmap=t,this.dirtyStyleId++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"scaleMode",{get:function(){return this._scaleMode},set:function(t){this._scaleMode!==t&&(this._scaleMode=t,this.dirtyStyleId++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"wrapMode",{get:function(){return this._wrapMode},set:function(t){this._wrapMode!==t&&(this._wrapMode=t,this.dirtyStyleId++)},enumerable:!1,configurable:!0}),r.prototype.setStyle=function(t,n){var i;return t!==void 0&&t!==this.scaleMode&&(this.scaleMode=t,i=!0),n!==void 0&&n!==this.mipmap&&(this.mipmap=n,i=!0),i&&this.dirtyStyleId++,this},r.prototype.setSize=function(t,n,i){return i=i||this.resolution,this.setRealSize(t*i,n*i,i)},r.prototype.setRealSize=function(t,n,i){return this.resolution=i||this.resolution,this.width=Math.round(t)/this.resolution,this.height=Math.round(n)/this.resolution,this._refreshPOT(),this.update(),this},r.prototype._refreshPOT=function(){this.isPowerOfTwo=jn(this.realWidth)&&jn(this.realHeight)},r.prototype.setResolution=function(t){var n=this.resolution;return n===t?this:(this.resolution=t,this.valid&&(this.width=Math.round(this.width*n)/t,this.height=Math.round(this.height*n)/t,this.emit("update",this)),this._refreshPOT(),this)},r.prototype.setResource=function(t){if(this.resource===t)return this;if(this.resource)throw new Error("Resource can be set only once");return t.bind(this),this.resource=t,this},r.prototype.update=function(){this.valid?(this.dirtyId++,this.dirtyStyleId++,this.emit("update",this)):this.width>0&&this.height>0&&(this.valid=!0,this.emit("loaded",this),this.emit("update",this))},r.prototype.onError=function(t){this.emit("error",this,t)},r.prototype.destroy=function(){this.resource&&(this.resource.unbind(this),this.resource.internal&&this.resource.destroy(),this.resource=null),this.cacheId&&(delete wt[this.cacheId],delete pt[this.cacheId],this.cacheId=null),this.dispose(),r.removeFromCache(this),this.textureCacheIds=null,this.destroyed=!0},r.prototype.dispose=function(){this.emit("dispose",this)},r.prototype.castToBaseTexture=function(){return this},r.from=function(t,n,i){i===void 0&&(i=T.STRICT_TEXTURE_CACHE);var o=typeof t=="string",a=null;if(o)a=t;else{if(!t._pixiId){var s=n&&n.pixiIdPrefix||"pixiid";t._pixiId=s+"_"+de()}a=t._pixiId}var u=wt[a];if(o&&i&&!u)throw new Error('The cacheId "'+a+'" does not exist in BaseTextureCache.');return u||(u=new r(t,n),u.cacheId=a,r.addToCache(u,a)),u},r.fromBuffer=function(t,n,i,o){t=t||new Float32Array(n*i*4);var a=new _e(t,{width:n,height:i}),s=t instanceof Float32Array?R.FLOAT:R.UNSIGNED_BYTE;return new r(a,Object.assign(Qo,o||{width:n,height:i,type:s}))},r.addToCache=function(t,n){n&&(t.textureCacheIds.indexOf(n)===-1&&t.textureCacheIds.push(n),wt[n]&&console.warn("BaseTexture added to the cache with an id ["+n+"] that already had an entry"),wt[n]=t)},r.removeFromCache=function(t){if(typeof t=="string"){var n=wt[t];if(n){var i=n.textureCacheIds.indexOf(t);return i>-1&&n.textureCacheIds.splice(i,1),delete wt[t],n}}else if(t&&t.textureCacheIds){for(var o=0;o<t.textureCacheIds.length;++o)delete wt[t.textureCacheIds[o]];return t.textureCacheIds.length=0,t}return null},r._globalBatch=0,r}(ke),er=function(e){N(r,e);function r(t,n){var i=this,o=n||{},a=o.width,s=o.height;i=e.call(this,a,s)||this,i.items=[],i.itemDirtyIds=[];for(var u=0;u<t;u++){var f=new H;i.items.push(f),i.itemDirtyIds.push(-2)}return i.length=t,i._load=null,i.baseTexture=null,i}return r.prototype.initFromArray=function(t,n){for(var i=0;i<this.length;i++)!t[i]||(t[i].castToBaseTexture?this.addBaseTextureAt(t[i].castToBaseTexture(),i):t[i]instanceof kt?this.addResourceAt(t[i],i):this.addResourceAt(Ye(t[i],n),i))},r.prototype.dispose=function(){for(var t=0,n=this.length;t<n;t++)this.items[t].destroy();this.items=null,this.itemDirtyIds=null,this._load=null},r.prototype.addResourceAt=function(t,n){if(!this.items[n])throw new Error("Index "+n+" is out of bounds");return t.valid&&!this.valid&&this.resize(t.width,t.height),this.items[n].setResource(t),this},r.prototype.bind=function(t){if(this.baseTexture!==null)throw new Error("Only one base texture per TextureArray is allowed");e.prototype.bind.call(this,t);for(var n=0;n<this.length;n++)this.items[n].parentTextureArray=t,this.items[n].on("update",t.update,t)},r.prototype.unbind=function(t){e.prototype.unbind.call(this,t);for(var n=0;n<this.length;n++)this.items[n].parentTextureArray=null,this.items[n].off("update",t.update,t)},r.prototype.load=function(){var t=this;if(this._load)return this._load;var n=this.items.map(function(o){return o.resource}).filter(function(o){return o}),i=n.map(function(o){return o.load()});return this._load=Promise.all(i).then(function(){var o=t.items[0],a=o.realWidth,s=o.realHeight;return t.resize(a,s),Promise.resolve(t)}),this._load},r}(kt),Hn=function(e){N(r,e);function r(t,n){var i=this,o=n||{},a=o.width,s=o.height,u,f;return Array.isArray(t)?(u=t,f=t.length):f=t,i=e.call(this,f,{width:a,height:s})||this,u&&i.initFromArray(u,n),i}return r.prototype.addBaseTextureAt=function(t,n){if(t.resource)this.addResourceAt(t.resource,n);else throw new Error("ArrayResource does not support RenderTexture");return this},r.prototype.bind=function(t){e.prototype.bind.call(this,t),t.target=It.TEXTURE_2D_ARRAY},r.prototype.upload=function(t,n,i){var o=this,a=o.length,s=o.itemDirtyIds,u=o.items,f=t.gl;i.dirtyId<0&&f.texImage3D(f.TEXTURE_2D_ARRAY,0,i.internalFormat,this._width,this._height,a,0,n.format,i.type,null);for(var l=0;l<a;l++){var h=u[l];s[l]<h.dirtyId&&(s[l]=h.dirtyId,h.valid&&f.texSubImage3D(f.TEXTURE_2D_ARRAY,0,0,0,l,h.resource.width,h.resource.height,1,n.format,i.type,h.resource.source))}return!0},r}(er),vt=function(e){N(r,e);function r(t){var n=this,i=t,o=i.naturalWidth||i.videoWidth||i.width,a=i.naturalHeight||i.videoHeight||i.height;return n=e.call(this,o,a)||this,n.source=t,n.noSubImage=!1,n}return r.crossOrigin=function(t,n,i){i===void 0&&n.indexOf("data:")!==0?t.crossOrigin=Zo(n):i!==!1&&(t.crossOrigin=typeof i=="string"?i:"anonymous")},r.prototype.upload=function(t,n,i,o){var a=t.gl,s=n.realWidth,u=n.realHeight;return o=o||this.source,a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.alphaMode===yt.UNPACK),!this.noSubImage&&n.target===a.TEXTURE_2D&&i.width===s&&i.height===u?a.texSubImage2D(a.TEXTURE_2D,0,0,0,n.format,i.type,o):(i.width=s,i.height=u,a.texImage2D(n.target,0,i.internalFormat,n.format,i.type,o)),!0},r.prototype.update=function(){if(!this.destroyed){var t=this.source,n=t.naturalWidth||t.videoWidth||t.width,i=t.naturalHeight||t.videoHeight||t.height;this.resize(n,i),e.prototype.update.call(this)}},r.prototype.dispose=function(){this.source=null},r}(kt),rr=function(e){N(r,e);function r(t){return e.call(this,t)||this}return r.test=function(t){var n=self.OffscreenCanvas;return n&&t instanceof n?!0:self.HTMLCanvasElement&&t instanceof HTMLCanvasElement},r}(vt),Dn=function(e){N(r,e);function r(t,n){var i=this,o=n||{},a=o.width,s=o.height,u=o.autoLoad,f=o.linkBaseTexture;if(t&&t.length!==r.SIDES)throw new Error("Invalid length. Got "+t.length+", expected 6");i=e.call(this,6,{width:a,height:s})||this;for(var l=0;l<r.SIDES;l++)i.items[l].target=It.TEXTURE_CUBE_MAP_POSITIVE_X+l;return i.linkBaseTexture=f!==!1,t&&i.initFromArray(t,n),u!==!1&&i.load(),i}return r.prototype.bind=function(t){e.prototype.bind.call(this,t),t.target=It.TEXTURE_CUBE_MAP},r.prototype.addBaseTextureAt=function(t,n,i){if(!this.items[n])throw new Error("Index "+n+" is out of bounds");if(!this.linkBaseTexture||t.parentTextureArray||Object.keys(t._glTextures).length>0)if(t.resource)this.addResourceAt(t.resource,n);else throw new Error("CubeResource does not support copying of renderTexture.");else t.target=It.TEXTURE_CUBE_MAP_POSITIVE_X+n,t.parentTextureArray=this.baseTexture,this.items[n]=t;return t.valid&&!this.valid&&this.resize(t.realWidth,t.realHeight),this.items[n]=t,this},r.prototype.upload=function(t,n,i){for(var o=this.itemDirtyIds,a=0;a<r.SIDES;a++){var s=this.items[a];o[a]<s.dirtyId&&(s.valid&&s.resource?(s.resource.upload(t,s,i),o[a]=s.dirtyId):o[a]<-1&&(t.gl.texImage2D(s.target,0,i.internalFormat,n.realWidth,n.realHeight,0,n.format,i.type,null),o[a]=-1))}return!0},r.test=function(t){return Array.isArray(t)&&t.length===r.SIDES},r.SIDES=6,r}(er),nr=function(e){N(r,e);function r(t,n){var i=this;if(n=n||{},!(t instanceof HTMLImageElement)){var o=new Image;vt.crossOrigin(o,t,n.crossorigin),o.src=t,t=o}return i=e.call(this,t)||this,!t.complete&&!!i._width&&!!i._height&&(i._width=0,i._height=0),i.url=t.src,i._process=null,i.preserveBitmap=!1,i.createBitmap=(n.createBitmap!==void 0?n.createBitmap:T.CREATE_IMAGE_BITMAP)&&!!self.createImageBitmap,i.alphaMode=typeof n.alphaMode=="number"?n.alphaMode:null,i.bitmap=null,i._load=null,n.autoLoad!==!1&&i.load(),i}return r.prototype.load=function(t){var n=this;return this._load?this._load:(t!==void 0&&(this.createBitmap=t),this._load=new Promise(function(i,o){var a=n.source;n.url=a.src;var s=function(){n.destroyed||(a.onload=null,a.onerror=null,n.resize(a.width,a.height),n._load=null,n.createBitmap?i(n.process()):i(n))};a.complete&&a.src?s():(a.onload=s,a.onerror=function(u){o(u),n.onError.emit(u)})}),this._load)},r.prototype.process=function(){var t=this,n=this.source;if(this._process!==null)return this._process;if(this.bitmap!==null||!self.createImageBitmap)return Promise.resolve(this);var i=self.createImageBitmap,o=!n.crossOrigin||n.crossOrigin==="anonymous";return this._process=fetch(n.src,{mode:o?"cors":"no-cors"}).then(function(a){return a.blob()}).then(function(a){return i(a,0,0,n.width,n.height,{premultiplyAlpha:t.alphaMode===yt.UNPACK?"premultiply":"none"})}).then(function(a){return t.destroyed?Promise.reject():(t.bitmap=a,t.update(),t._process=null,Promise.resolve(t))}),this._process},r.prototype.upload=function(t,n,i){if(typeof this.alphaMode=="number"&&(n.alphaMode=this.alphaMode),!this.createBitmap)return e.prototype.upload.call(this,t,n,i);if(!this.bitmap&&(this.process(),!this.bitmap))return!1;if(e.prototype.upload.call(this,t,n,i,this.bitmap),!this.preserveBitmap){var o=!0,a=n._glTextures;for(var s in a){var u=a[s];if(u!==i&&u.dirtyId!==n.dirtyId){o=!1;break}}o&&(this.bitmap.close&&this.bitmap.close(),this.bitmap=null)}return!0},r.prototype.dispose=function(){this.source.onload=null,this.source.onerror=null,e.prototype.dispose.call(this),this.bitmap&&(this.bitmap.close(),this.bitmap=null),this._process=null,this._load=null},r.test=function(t){return typeof t=="string"||t instanceof HTMLImageElement},r}(vt),$n=function(e){N(r,e);function r(t,n){var i=this;return n=n||{},i=e.call(this,document.createElement("canvas"))||this,i._width=0,i._height=0,i.svg=t,i.scale=n.scale||1,i._overrideWidth=n.width,i._overrideHeight=n.height,i._resolve=null,i._crossorigin=n.crossorigin,i._load=null,n.autoLoad!==!1&&i.load(),i}return r.prototype.load=function(){var t=this;return this._load?this._load:(this._load=new Promise(function(n){if(t._resolve=function(){t.resize(t.source.width,t.source.height),n(t)},/^\<svg/.test(t.svg.trim())){if(!btoa)throw new Error("Your browser doesn't support base64 conversions.");t.svg="data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(t.svg)))}t._loadSvg()}),this._load)},r.prototype._loadSvg=function(){var t=this,n=new Image;vt.crossOrigin(n,this.svg,this._crossorigin),n.src=this.svg,n.onerror=function(i){!t._resolve||(n.onerror=null,t.onError.emit(i))},n.onload=function(){if(!!t._resolve){var i=n.width,o=n.height;if(!i||!o)throw new Error("The SVG image must have width and height defined (in pixels), canvas API needs them.");var a=i*t.scale,s=o*t.scale;(t._overrideWidth||t._overrideHeight)&&(a=t._overrideWidth||t._overrideHeight/o*i,s=t._overrideHeight||t._overrideWidth/i*o),a=Math.round(a),s=Math.round(s);var u=t.source;u.width=a,u.height=s,u._pixiId="canvas_"+de(),u.getContext("2d").drawImage(n,0,0,i,o,0,0,a,s),t._resolve(),t._resolve=null}}},r.getSize=function(t){var n=r.SVG_SIZE.exec(t),i={};return n&&(i[n[1]]=Math.round(parseFloat(n[3])),i[n[5]]=Math.round(parseFloat(n[7]))),i},r.prototype.dispose=function(){e.prototype.dispose.call(this),this._resolve=null,this._crossorigin=null},r.test=function(t,n){return n==="svg"||typeof t=="string"&&/^data:image\/svg\+xml(;(charset=utf8|utf8))?;base64/.test(t)||typeof t=="string"&&r.SVG_XML.test(t)},r.SVG_XML=/^(<\?xml[^?]+\?>)?\s*(<!--[^(-->)]*-->)?\s*\<svg/m,r.SVG_SIZE=/<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i,r}(vt),Wn=function(e){N(r,e);function r(t,n){var i=this;if(n=n||{},!(t instanceof HTMLVideoElement)){var o=document.createElement("video");o.setAttribute("preload","auto"),o.setAttribute("webkit-playsinline",""),o.setAttribute("playsinline",""),typeof t=="string"&&(t=[t]);var a=t[0].src||t[0];vt.crossOrigin(o,a,n.crossorigin);for(var s=0;s<t.length;++s){var u=document.createElement("source"),f=t[s],l=f.src,h=f.mime;l=l||t[s];var d=l.split("?").shift().toLowerCase(),c=d.substr(d.lastIndexOf(".")+1);h=h||r.MIME_TYPES[c]||"video/"+c,u.src=l,u.type=h,o.appendChild(u)}t=o}return i=e.call(this,t)||this,i.noSubImage=!0,i._autoUpdate=!0,i._isConnectedToTicker=!1,i._updateFPS=n.updateFPS||0,i._msToNextUpdate=0,i.autoPlay=n.autoPlay!==!1,i._load=null,i._resolve=null,i._onCanPlay=i._onCanPlay.bind(i),i._onError=i._onError.bind(i),n.autoLoad!==!1&&i.load(),i}return r.prototype.update=function(t){if(!this.destroyed){var n=jt.shared.elapsedMS*this.source.playbackRate;this._msToNextUpdate=Math.floor(this._msToNextUpdate-n),(!this._updateFPS||this._msToNextUpdate<=0)&&(e.prototype.update.call(this),this._msToNextUpdate=this._updateFPS?Math.floor(1e3/this._updateFPS):0)}},r.prototype.load=function(){var t=this;if(this._load)return this._load;var n=this.source;return(n.readyState===n.HAVE_ENOUGH_DATA||n.readyState===n.HAVE_FUTURE_DATA)&&n.width&&n.height&&(n.complete=!0),n.addEventListener("play",this._onPlayStart.bind(this)),n.addEventListener("pause",this._onPlayStop.bind(this)),this._isSourceReady()?this._onCanPlay():(n.addEventListener("canplay",this._onCanPlay),n.addEventListener("canplaythrough",this._onCanPlay),n.addEventListener("error",this._onError,!0)),this._load=new Promise(function(i){t.valid?i(t):(t._resolve=i,n.load())}),this._load},r.prototype._onError=function(t){this.source.removeEventListener("error",this._onError,!0),this.onError.emit(t)},r.prototype._isSourcePlaying=function(){var t=this.source;return t.currentTime>0&&t.paused===!1&&t.ended===!1&&t.readyState>2},r.prototype._isSourceReady=function(){var t=this.source;return t.readyState===3||t.readyState===4},r.prototype._onPlayStart=function(){this.valid||this._onCanPlay(),this.autoUpdate&&!this._isConnectedToTicker&&(jt.shared.add(this.update,this),this._isConnectedToTicker=!0)},r.prototype._onPlayStop=function(){this._isConnectedToTicker&&(jt.shared.remove(this.update,this),this._isConnectedToTicker=!1)},r.prototype._onCanPlay=function(){var t=this.source;t.removeEventListener("canplay",this._onCanPlay),t.removeEventListener("canplaythrough",this._onCanPlay);var n=this.valid;this.resize(t.videoWidth,t.videoHeight),!n&&this._resolve&&(this._resolve(this),this._resolve=null),this._isSourcePlaying()?this._onPlayStart():this.autoPlay&&t.play()},r.prototype.dispose=function(){this._isConnectedToTicker&&(jt.shared.remove(this.update,this),this._isConnectedToTicker=!1);var t=this.source;t&&(t.removeEventListener("error",this._onError,!0),t.pause(),t.src="",t.load()),e.prototype.dispose.call(this)},Object.defineProperty(r.prototype,"autoUpdate",{get:function(){return this._autoUpdate},set:function(t){t!==this._autoUpdate&&(this._autoUpdate=t,!this._autoUpdate&&this._isConnectedToTicker?(jt.shared.remove(this.update,this),this._isConnectedToTicker=!1):this._autoUpdate&&!this._isConnectedToTicker&&this._isSourcePlaying()&&(jt.shared.add(this.update,this),this._isConnectedToTicker=!0))},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"updateFPS",{get:function(){return this._updateFPS},set:function(t){t!==this._updateFPS&&(this._updateFPS=t)},enumerable:!1,configurable:!0}),r.test=function(t,n){return self.HTMLVideoElement&&t instanceof HTMLVideoElement||r.TYPES.indexOf(n)>-1},r.TYPES=["mp4","m4v","webm","ogg","ogv","h264","avi","mov"],r.MIME_TYPES={ogv:"video/ogg",mov:"video/quicktime",m4v:"video/mp4"},r}(vt),qn=function(e){N(r,e);function r(t){return e.call(this,t)||this}return r.test=function(t){return!!self.createImageBitmap&&t instanceof ImageBitmap},r}(vt);ye.push(nr,qn,rr,Wn,$n,_e,Dn,Hn);var Zn={__proto__:null,Resource:kt,BaseImageResource:vt,INSTALLED:ye,autoDetectResource:Ye,AbstractMultiResource:er,ArrayResource:Hn,BufferResource:_e,CanvasResource:rr,CubeResource:Dn,ImageResource:nr,SVGResource:$n,VideoResource:Wn,ImageBitmapResource:qn},ta=function(e){N(r,e);function r(){return e!==null&&e.apply(this,arguments)||this}return r.prototype.upload=function(t,n,i){var o=t.gl;o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.alphaMode===yt.UNPACK);var a=n.realWidth,s=n.realHeight;return i.width===a&&i.height===s?o.texSubImage2D(n.target,0,0,0,a,s,n.format,i.type,this.data):(i.width=a,i.height=s,o.texImage2D(n.target,0,i.internalFormat,a,s,0,n.format,i.type,this.data)),!0},r}(_e),ir=function(){function e(r,t){this.width=Math.round(r||100),this.height=Math.round(t||100),this.stencil=!1,this.depth=!1,this.dirtyId=0,this.dirtyFormat=0,this.dirtySize=0,this.depthTexture=null,this.colorTextures=[],this.glFramebuffers={},this.disposeRunner=new z("disposeFramebuffer"),this.multisample=G.NONE}return Object.defineProperty(e.prototype,"colorTexture",{get:function(){return this.colorTextures[0]},enumerable:!1,configurable:!0}),e.prototype.addColorTexture=function(r,t){return r===void 0&&(r=0),this.colorTextures[r]=t||new H(null,{scaleMode:J.NEAREST,resolution:1,mipmap:dt.OFF,width:this.width,height:this.height}),this.dirtyId++,this.dirtyFormat++,this},e.prototype.addDepthTexture=function(r){return this.depthTexture=r||new H(new ta(null,{width:this.width,height:this.height}),{scaleMode:J.NEAREST,resolution:1,width:this.width,height:this.height,mipmap:dt.OFF,format:m.DEPTH_COMPONENT,type:R.UNSIGNED_SHORT}),this.dirtyId++,this.dirtyFormat++,this},e.prototype.enableDepth=function(){return this.depth=!0,this.dirtyId++,this.dirtyFormat++,this},e.prototype.enableStencil=function(){return this.stencil=!0,this.dirtyId++,this.dirtyFormat++,this},e.prototype.resize=function(r,t){if(r=Math.round(r),t=Math.round(t),!(r===this.width&&t===this.height)){this.width=r,this.height=t,this.dirtyId++,this.dirtySize++;for(var n=0;n<this.colorTextures.length;n++){var i=this.colorTextures[n],o=i.resolution;i.setSize(r/o,t/o)}if(this.depthTexture){var o=this.depthTexture.resolution;this.depthTexture.setSize(r/o,t/o)}}},e.prototype.dispose=function(){this.disposeRunner.emit(this,!1)},e.prototype.destroyDepthTexture=function(){this.depthTexture&&(this.depthTexture.destroy(),this.depthTexture=null,++this.dirtyId,++this.dirtyFormat)},e}(),Kn=function(e){N(r,e);function r(t){var n=this;if(typeof t=="number"){var i=arguments[0],o=arguments[1],a=arguments[2],s=arguments[3];t={width:i,height:o,scaleMode:a,resolution:s}}return t.width=t.width||100,t.height=t.height||100,t.multisample=t.multisample!==void 0?t.multisample:G.NONE,n=e.call(this,null,t)||this,n.mipmap=dt.OFF,n.valid=!0,n.clearColor=[0,0,0,0],n.framebuffer=new ir(n.realWidth,n.realHeight).addColorTexture(0,n),n.framebuffer.multisample=t.multisample,n.maskStack=[],n.filterStack=[{}],n}return r.prototype.resize=function(t,n){this.framebuffer.resize(t*this.resolution,n*this.resolution),this.setRealSize(this.framebuffer.width,this.framebuffer.height)},r.prototype.dispose=function(){this.framebuffer.dispose(),e.prototype.dispose.call(this)},r.prototype.destroy=function(){e.prototype.destroy.call(this),this.framebuffer.destroyDepthTexture(),this.framebuffer=null},r}(H),Jn=function(){function e(){this.x0=0,this.y0=0,this.x1=1,this.y1=0,this.x2=1,this.y2=1,this.x3=0,this.y3=1,this.uvsFloat32=new Float32Array(8)}return e.prototype.set=function(r,t,n){var i=t.width,o=t.height;if(n){var a=r.width/2/i,s=r.height/2/o,u=r.x/i+a,f=r.y/o+s;n=F.add(n,F.NW),this.x0=u+a*F.uX(n),this.y0=f+s*F.uY(n),n=F.add(n,2),this.x1=u+a*F.uX(n),this.y1=f+s*F.uY(n),n=F.add(n,2),this.x2=u+a*F.uX(n),this.y2=f+s*F.uY(n),n=F.add(n,2),this.x3=u+a*F.uX(n),this.y3=f+s*F.uY(n)}else this.x0=r.x/i,this.y0=r.y/o,this.x1=(r.x+r.width)/i,this.y1=r.y/o,this.x2=(r.x+r.width)/i,this.y2=(r.y+r.height)/o,this.x3=r.x/i,this.y3=(r.y+r.height)/o;this.uvsFloat32[0]=this.x0,this.uvsFloat32[1]=this.y0,this.uvsFloat32[2]=this.x1,this.uvsFloat32[3]=this.y1,this.uvsFloat32[4]=this.x2,this.uvsFloat32[5]=this.y2,this.uvsFloat32[6]=this.x3,this.uvsFloat32[7]=this.y3},e.prototype.toString=function(){return"[@pixi/core:TextureUvs "+("x0="+this.x0+" y0="+this.y0+" ")+("x1="+this.x1+" y1="+this.y1+" x2="+this.x2+" ")+("y2="+this.y2+" x3="+this.x3+" y3="+this.y3)+"]"},e}(),Yn=new Jn,tt=function(e){N(r,e);function r(t,n,i,o,a,s){var u=e.call(this)||this;if(u.noFrame=!1,n||(u.noFrame=!0,n=new V(0,0,1,1)),t instanceof r&&(t=t.baseTexture),u.baseTexture=t,u._frame=n,u.trim=o,u.valid=!1,u._uvs=Yn,u.uvMatrix=null,u.orig=i||n,u._rotate=Number(a||0),a===!0)u._rotate=2;else if(u._rotate%2!=0)throw new Error("attempt to use diamond-shaped UVs. If you are sure, set rotation manually");return u.defaultAnchor=s?new M(s.x,s.y):new M(0,0),u._updateID=0,u.textureCacheIds=[],t.valid?u.noFrame?t.valid&&u.onBaseTextureUpdated(t):u.frame=n:t.once("loaded",u.onBaseTextureUpdated,u),u.noFrame&&t.on("update",u.onBaseTextureUpdated,u),u}return r.prototype.update=function(){this.baseTexture.resource&&this.baseTexture.resource.update()},r.prototype.onBaseTextureUpdated=function(t){if(this.noFrame){if(!this.baseTexture.valid)return;this._frame.width=t.width,this._frame.height=t.height,this.valid=!0,this.updateUvs()}else this.frame=this._frame;this.emit("update",this)},r.prototype.destroy=function(t){if(this.baseTexture){if(t){var n=this.baseTexture.resource;n&&n.url&&pt[n.url]&&r.removeFromCache(n.url),this.baseTexture.destroy()}this.baseTexture.off("loaded",this.onBaseTextureUpdated,this),this.baseTexture.off("update",this.onBaseTextureUpdated,this),this.baseTexture=null}this._frame=null,this._uvs=null,this.trim=null,this.orig=null,this.valid=!1,r.removeFromCache(this),this.textureCacheIds=null},r.prototype.clone=function(){var t=this._frame.clone(),n=this._frame===this.orig?t:this.orig.clone(),i=new r(this.baseTexture,!this.noFrame&&t,n,this.trim&&this.trim.clone(),this.rotate,this.defaultAnchor);return this.noFrame&&(i._frame=t),i},r.prototype.updateUvs=function(){this._uvs===Yn&&(this._uvs=new Jn),this._uvs.set(this._frame,this.baseTexture,this.rotate),this._updateID++},r.from=function(t,n,i){n===void 0&&(n={}),i===void 0&&(i=T.STRICT_TEXTURE_CACHE);var o=typeof t=="string",a=null;if(o)a=t;else{if(!t._pixiId){var s=n&&n.pixiIdPrefix||"pixiid";t._pixiId=s+"_"+de()}a=t._pixiId}var u=pt[a];if(o&&i&&!u)throw new Error('The cacheId "'+a+'" does not exist in TextureCache.');return u||(n.resolution||(n.resolution=Vn(t)),u=new r(new H(t,n)),u.baseTexture.cacheId=a,H.addToCache(u.baseTexture,a),r.addToCache(u,a)),u},r.fromURL=function(t,n){var i=Object.assign({autoLoad:!1},n==null?void 0:n.resourceOptions),o=r.from(t,Object.assign({resourceOptions:i},n),!1),a=o.baseTexture.resource;return o.baseTexture.valid?Promise.resolve(o):a.load().then(function(){return Promise.resolve(o)})},r.fromBuffer=function(t,n,i,o){return new r(H.fromBuffer(t,n,i,o))},r.fromLoader=function(t,n,i,o){var a=new H(t,Object.assign({scaleMode:T.SCALE_MODE,resolution:Vn(n)},o)),s=a.resource;s instanceof nr&&(s.url=n);var u=new r(a);return i||(i=n),H.addToCache(u.baseTexture,i),r.addToCache(u,i),i!==n&&(H.addToCache(u.baseTexture,n),r.addToCache(u,n)),u.baseTexture.valid?Promise.resolve(u):new Promise(function(f){u.baseTexture.once("loaded",function(){return f(u)})})},r.addToCache=function(t,n){n&&(t.textureCacheIds.indexOf(n)===-1&&t.textureCacheIds.push(n),pt[n]&&console.warn("Texture added to the cache with an id ["+n+"] that already had an entry"),pt[n]=t)},r.removeFromCache=function(t){if(typeof t=="string"){var n=pt[t];if(n){var i=n.textureCacheIds.indexOf(t);return i>-1&&n.textureCacheIds.splice(i,1),delete pt[t],n}}else if(t&&t.textureCacheIds){for(var o=0;o<t.textureCacheIds.length;++o)pt[t.textureCacheIds[o]]===t&&delete pt[t.textureCacheIds[o]];return t.textureCacheIds.length=0,t}return null},Object.defineProperty(r.prototype,"resolution",{get:function(){return this.baseTexture.resolution},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"frame",{get:function(){return this._frame},set:function(t){this._frame=t,this.noFrame=!1;var n=t.x,i=t.y,o=t.width,a=t.height,s=n+o>this.baseTexture.width,u=i+a>this.baseTexture.height;if(s||u){var f=s&&u?"and":"or",l="X: "+n+" + "+o+" = "+(n+o)+" > "+this.baseTexture.width,h="Y: "+i+" + "+a+" = "+(i+a)+" > "+this.baseTexture.height;throw new Error("Texture Error: frame does not fit inside the base Texture dimensions: "+(l+" "+f+" "+h))}this.valid=o&&a&&this.baseTexture.valid,!this.trim&&!this.rotate&&(this.orig=t),this.valid&&this.updateUvs()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"rotate",{get:function(){return this._rotate},set:function(t){this._rotate=t,this.valid&&this.updateUvs()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"width",{get:function(){return this.orig.width},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return this.orig.height},enumerable:!1,configurable:!0}),r.prototype.castToBaseTexture=function(){return this.baseTexture},r}(ke);function ea(){var e=document.createElement("canvas");e.width=16,e.height=16;var r=e.getContext("2d");return r.fillStyle="white",r.fillRect(0,0,16,16),new tt(new H(new rr(e)))}function ge(e){e.destroy=function(){},e.on=function(){},e.once=function(){},e.emit=function(){}}tt.EMPTY=new tt(new H);ge(tt.EMPTY);ge(tt.EMPTY.baseTexture);tt.WHITE=ea();ge(tt.WHITE);ge(tt.WHITE.baseTexture);var or=function(e){N(r,e);function r(t,n){var i=e.call(this,t,n)||this;return i.valid=!0,i.filterFrame=null,i.filterPoolKey=null,i.updateUvs(),i}return Object.defineProperty(r.prototype,"framebuffer",{get:function(){return this.baseTexture.framebuffer},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"multisample",{get:function(){return this.framebuffer.multisample},set:function(t){this.framebuffer.multisample=t},enumerable:!1,configurable:!0}),r.prototype.resize=function(t,n,i){i===void 0&&(i=!0);var o=this.baseTexture.resolution,a=Math.round(t*o)/o,s=Math.round(n*o)/o;this.valid=a>0&&s>0,this._frame.width=this.orig.width=a,this._frame.height=this.orig.height=s,i&&this.baseTexture.resize(a,s),this.updateUvs()},r.prototype.setResolution=function(t){var n=this.baseTexture;n.resolution!==t&&(n.setResolution(t),this.resize(n.width,n.height,!1))},r.create=function(t){for(var n=arguments,i=[],o=1;o<arguments.length;o++)i[o-1]=n[o];return typeof t=="number"&&(Rt("6.0.0","Arguments (width, height, scaleMode, resolution) have been deprecated."),t={width:t,height:i[0],scaleMode:i[1],resolution:i[2]}),new r(new Kn(t))},r}(tt),ra=function(){function e(r){this.texturePool={},this.textureOptions=r||{},this.enableFullScreen=!1,this._pixelsWidth=0,this._pixelsHeight=0}return e.prototype.createTexture=function(r,t,n){n===void 0&&(n=G.NONE);var i=new Kn(Object.assign({width:r,height:t,resolution:1,multisample:n},this.textureOptions));return new or(i)},e.prototype.getOptimalTexture=function(r,t,n,i){n===void 0&&(n=1),i===void 0&&(i=G.NONE);var o;r=Math.ceil(r*n),t=Math.ceil(t*n),!this.enableFullScreen||r!==this._pixelsWidth||t!==this._pixelsHeight?(r=ce(r),t=ce(t),o=((r&65535)<<16|t&65535)>>>0,i>1&&(o+=i*4294967296)):o=i>1?-i:-1,this.texturePool[o]||(this.texturePool[o]=[]);var a=this.texturePool[o].pop();return a||(a=this.createTexture(r,t,i)),a.filterPoolKey=o,a.setResolution(n),a},e.prototype.getFilterTexture=function(r,t,n){var i=this.getOptimalTexture(r.width,r.height,t||r.resolution,n||G.NONE);return i.filterFrame=r.filterFrame,i},e.prototype.returnTexture=function(r){var t=r.filterPoolKey;r.filterFrame=null,this.texturePool[t].push(r)},e.prototype.returnFilterTexture=function(r){this.returnTexture(r)},e.prototype.clear=function(r){if(r=r!==!1,r)for(var t in this.texturePool){var n=this.texturePool[t];if(n)for(var i=0;i<n.length;i++)n[i].destroy(!0)}this.texturePool={}},e.prototype.setScreenSize=function(r){if(!(r.width===this._pixelsWidth&&r.height===this._pixelsHeight)){this.enableFullScreen=r.width>0&&r.height>0;for(var t in this.texturePool)if(Number(t)<0){var n=this.texturePool[t];if(n)for(var i=0;i<n.length;i++)n[i].destroy(!0);this.texturePool[t]=[]}this._pixelsWidth=r.width,this._pixelsHeight=r.height}},e.SCREEN_KEY=-1,e}(),Qn=function(){function e(r,t,n,i,o,a,s){t===void 0&&(t=0),n===void 0&&(n=!1),i===void 0&&(i=R.FLOAT),this.buffer=r,this.size=t,this.normalized=n,this.type=i,this.stride=o,this.start=a,this.instance=s}return e.prototype.destroy=function(){this.buffer=null},e.from=function(r,t,n,i,o){return new e(r,t,n,i,o)},e}(),na=0,q=function(){function e(r,t,n){t===void 0&&(t=!0),n===void 0&&(n=!1),this.data=r||new Float32Array(1),this._glBuffers={},this._updateID=0,this.index=n,this.static=t,this.id=na++,this.disposeRunner=new z("disposeBuffer")}return e.prototype.update=function(r){r instanceof Array&&(r=new Float32Array(r)),this.data=r||this.data,this._updateID++},e.prototype.dispose=function(){this.disposeRunner.emit(this,!1)},e.prototype.destroy=function(){this.dispose(),this.data=null},Object.defineProperty(e.prototype,"index",{get:function(){return this.type===st.ELEMENT_ARRAY_BUFFER},set:function(r){this.type=r?st.ELEMENT_ARRAY_BUFFER:st.ARRAY_BUFFER},enumerable:!1,configurable:!0}),e.from=function(r){return r instanceof Array&&(r=new Float32Array(r)),new e(r)},e}(),ia={Float32Array,Uint32Array,Int32Array,Uint8Array};function oa(e,r){for(var t=0,n=0,i={},o=0;o<e.length;o++)n+=r[o],t+=e[o].length;for(var a=new ArrayBuffer(t*4),s=null,u=0,o=0;o<e.length;o++){var f=r[o],l=e[o],h=Mn(l);i[h]||(i[h]=new ia[h](a)),s=i[h];for(var d=0;d<l.length;d++){var c=(d/f|0)*n+u,p=d%f;s[c+p]=l[d]}u+=f}return new Float32Array(a)}var ti={5126:4,5123:2,5121:1},aa=0,sa={Float32Array,Uint32Array,Int32Array,Uint8Array,Uint16Array},ar=function(){function e(r,t){r===void 0&&(r=[]),t===void 0&&(t={}),this.buffers=r,this.indexBuffer=null,this.attributes=t,this.glVertexArrayObjects={},this.id=aa++,this.instanced=!1,this.instanceCount=1,this.disposeRunner=new z("disposeGeometry"),this.refCount=0}return e.prototype.addAttribute=function(r,t,n,i,o,a,s,u){if(n===void 0&&(n=0),i===void 0&&(i=!1),u===void 0&&(u=!1),!t)throw new Error("You must pass a buffer when creating an attribute");t instanceof q||(t instanceof Array&&(t=new Float32Array(t)),t=new q(t));var f=r.split("|");if(f.length>1){for(var l=0;l<f.length;l++)this.addAttribute(f[l],t,n,i,o);return this}var h=this.buffers.indexOf(t);return h===-1&&(this.buffers.push(t),h=this.buffers.length-1),this.attributes[r]=new Qn(h,n,i,o,a,s,u),this.instanced=this.instanced||u,this},e.prototype.getAttribute=function(r){return this.attributes[r]},e.prototype.getBuffer=function(r){return this.buffers[this.getAttribute(r).buffer]},e.prototype.addIndex=function(r){return r instanceof q||(r instanceof Array&&(r=new Uint16Array(r)),r=new q(r)),r.type=st.ELEMENT_ARRAY_BUFFER,this.indexBuffer=r,this.buffers.indexOf(r)===-1&&this.buffers.push(r),this},e.prototype.getIndex=function(){return this.indexBuffer},e.prototype.interleave=function(){if(this.buffers.length===1||this.buffers.length===2&&this.indexBuffer)return this;var r=[],t=[],n=new q,i;for(i in this.attributes){var o=this.attributes[i],a=this.buffers[o.buffer];r.push(a.data),t.push(o.size*ti[o.type]/4),o.buffer=0}for(n.data=oa(r,t),i=0;i<this.buffers.length;i++)this.buffers[i]!==this.indexBuffer&&this.buffers[i].destroy();return this.buffers=[n],this.indexBuffer&&this.buffers.push(this.indexBuffer),this},e.prototype.getSize=function(){for(var r in this.attributes){var t=this.attributes[r],n=this.buffers[t.buffer];return n.data.length/(t.stride/4||t.size)}return 0},e.prototype.dispose=function(){this.disposeRunner.emit(this,!1)},e.prototype.destroy=function(){this.dispose(),this.buffers=null,this.indexBuffer=null,this.attributes=null},e.prototype.clone=function(){for(var r=new e,t=0;t<this.buffers.length;t++)r.buffers[t]=new q(this.buffers[t].data.slice(0));for(var t in this.attributes){var n=this.attributes[t];r.attributes[t]=new Qn(n.buffer,n.size,n.normalized,n.type,n.stride,n.start,n.instance)}return this.indexBuffer&&(r.indexBuffer=r.buffers[this.buffers.indexOf(this.indexBuffer)],r.indexBuffer.type=st.ELEMENT_ARRAY_BUFFER),r},e.merge=function(r){for(var t=new e,n=[],i=[],o=[],a,s=0;s<r.length;s++){a=r[s];for(var u=0;u<a.buffers.length;u++)i[u]=i[u]||0,i[u]+=a.buffers[u].data.length,o[u]=0}for(var s=0;s<a.buffers.length;s++)n[s]=new sa[Mn(a.buffers[s].data)](i[s]),t.buffers[s]=new q(n[s]);for(var s=0;s<r.length;s++){a=r[s];for(var u=0;u<a.buffers.length;u++)n[u].set(a.buffers[u].data,o[u]),o[u]+=a.buffers[u].data.length}if(t.attributes=a.attributes,a.indexBuffer){t.indexBuffer=t.buffers[a.buffers.indexOf(a.indexBuffer)],t.indexBuffer.type=st.ELEMENT_ARRAY_BUFFER;for(var f=0,l=0,h=0,d=0,s=0;s<a.buffers.length;s++)if(a.buffers[s]!==a.indexBuffer){d=s;break}for(var s in a.attributes){var c=a.attributes[s];(c.buffer|0)===d&&(l+=c.size*ti[c.type]/4)}for(var s=0;s<r.length;s++){for(var p=r[s].indexBuffer.data,u=0;u<p.length;u++)t.indexBuffer.data[u+h]+=f;f+=r[s].buffers[d].data.length/l,h+=p.length}}return t},e}(),ua=function(e){N(r,e);function r(){var t=e.call(this)||this;return t.addAttribute("aVertexPosition",new Float32Array([0,0,1,0,1,1,0,1])).addIndex([0,1,3,2]),t}return r}(ar),fa=function(e){N(r,e);function r(){var t=e.call(this)||this;return t.vertices=new Float32Array([-1,-1,1,-1,1,1,-1,1]),t.uvs=new Float32Array([0,0,1,0,1,1,0,1]),t.vertexBuffer=new q(t.vertices),t.uvBuffer=new q(t.uvs),t.addAttribute("aVertexPosition",t.vertexBuffer).addAttribute("aTextureCoord",t.uvBuffer).addIndex([0,1,2,0,2,3]),t}return r.prototype.map=function(t,n){var i=0,o=0;return this.uvs[0]=i,this.uvs[1]=o,this.uvs[2]=i+n.width/t.width,this.uvs[3]=o,this.uvs[4]=i+n.width/t.width,this.uvs[5]=o+n.height/t.height,this.uvs[6]=i,this.uvs[7]=o+n.height/t.height,i=n.x,o=n.y,this.vertices[0]=i,this.vertices[1]=o,this.vertices[2]=i+n.width,this.vertices[3]=o,this.vertices[4]=i+n.width,this.vertices[5]=o+n.height,this.vertices[6]=i,this.vertices[7]=o+n.height,this.invalidate(),this},r.prototype.invalidate=function(){return this.vertexBuffer._updateID++,this.uvBuffer._updateID++,this},r}(ar),la=0,zt=function(){function e(r,t,n){this.group=!0,this.syncUniforms={},this.dirtyId=0,this.id=la++,this.static=!!t,this.ubo=!!n,r instanceof q?(this.buffer=r,this.buffer.type=st.UNIFORM_BUFFER,this.autoManage=!1,this.ubo=!0):(this.uniforms=r,this.ubo&&(this.buffer=new q(new Float32Array(1)),this.buffer.type=st.UNIFORM_BUFFER,this.autoManage=!0))}return e.prototype.update=function(){this.dirtyId++,!this.autoManage&&this.buffer&&this.buffer.update()},e.prototype.add=function(r,t,n){if(!this.ubo)this.uniforms[r]=new e(t,n);else throw new Error("[UniformGroup] uniform groups in ubo mode cannot be modified, or have uniform groups nested in them")},e.from=function(r,t,n){return new e(r,t,n)},e.uboFrom=function(r,t){return new e(r,t!=null?t:!0,!0)},e}(),ha=function(){function e(){this.renderTexture=null,this.target=null,this.legacy=!1,this.resolution=1,this.multisample=G.NONE,this.sourceFrame=new V,this.destinationFrame=new V,this.bindingSourceFrame=new V,this.bindingDestinationFrame=new V,this.filters=[],this.transform=null}return e.prototype.clear=function(){this.target=null,this.filters=null,this.renderTexture=null},e}(),xe=[new M,new M,new M,new M],sr=new Q,ei=function(){function e(r){this.renderer=r,this.defaultFilterStack=[{}],this.texturePool=new ra,this.texturePool.setScreenSize(r.view),this.statePool=[],this.quad=new ua,this.quadUv=new fa,this.tempRect=new V,this.activeState={},this.globalUniforms=new zt({outputFrame:new V,inputSize:new Float32Array(4),inputPixel:new Float32Array(4),inputClamp:new Float32Array(4),resolution:1,filterArea:new Float32Array(4),filterClamp:new Float32Array(4)},!0),this.forceClear=!1,this.useMaxPadding=!1}return e.prototype.push=function(r,t){for(var n=this.renderer,i=this.defaultFilterStack,o=this.statePool.pop()||new ha,a=this.renderer.renderTexture,s=t[0].resolution,u=t[0].multisample,f=t[0].padding,l=t[0].autoFit,h=t[0].legacy,d=1;d<t.length;d++){var c=t[d];s=Math.min(s,c.resolution),u=Math.min(u,c.multisample),f=this.useMaxPadding?Math.max(f,c.padding):f+c.padding,l=l&&c.autoFit,h=h||c.legacy}if(i.length===1&&(this.defaultFilterStack[0].renderTexture=a.current),i.push(o),o.resolution=s,o.multisample=u,o.legacy=h,o.target=r,o.sourceFrame.copyFrom(r.filterArea||r.getBounds(!0)),o.sourceFrame.pad(f),l){var p=this.tempRect.copyFrom(a.sourceFrame);n.projection.transform&&this.transformAABB(sr.copyFrom(n.projection.transform).invert(),p),o.sourceFrame.fit(p)}this.roundFrame(o.sourceFrame,a.current?a.current.resolution:n.resolution,a.sourceFrame,a.destinationFrame,n.projection.transform),o.renderTexture=this.getOptimalFilterTexture(o.sourceFrame.width,o.sourceFrame.height,s,u),o.filters=t,o.destinationFrame.width=o.renderTexture.width,o.destinationFrame.height=o.renderTexture.height;var _=this.tempRect;_.x=0,_.y=0,_.width=o.sourceFrame.width,_.height=o.sourceFrame.height,o.renderTexture.filterFrame=o.sourceFrame,o.bindingSourceFrame.copyFrom(a.sourceFrame),o.bindingDestinationFrame.copyFrom(a.destinationFrame),o.transform=n.projection.transform,n.projection.transform=null,a.bind(o.renderTexture,o.sourceFrame,_),n.framebuffer.clear(0,0,0,0)},e.prototype.pop=function(){var r=this.defaultFilterStack,t=r.pop(),n=t.filters;this.activeState=t;var i=this.globalUniforms.uniforms;i.outputFrame=t.sourceFrame,i.resolution=t.resolution;var o=i.inputSize,a=i.inputPixel,s=i.inputClamp;if(o[0]=t.destinationFrame.width,o[1]=t.destinationFrame.height,o[2]=1/o[0],o[3]=1/o[1],a[0]=Math.round(o[0]*t.resolution),a[1]=Math.round(o[1]*t.resolution),a[2]=1/a[0],a[3]=1/a[1],s[0]=.5*a[2],s[1]=.5*a[3],s[2]=t.sourceFrame.width*o[2]-.5*a[2],s[3]=t.sourceFrame.height*o[3]-.5*a[3],t.legacy){var u=i.filterArea;u[0]=t.destinationFrame.width,u[1]=t.destinationFrame.height,u[2]=t.sourceFrame.x,u[3]=t.sourceFrame.y,i.filterClamp=i.inputClamp}this.globalUniforms.update();var f=r[r.length-1];if(this.renderer.framebuffer.blit(),n.length===1)n[0].apply(this,t.renderTexture,f.renderTexture,_t.BLEND,t),this.returnFilterTexture(t.renderTexture);else{var l=t.renderTexture,h=this.getOptimalFilterTexture(l.width,l.height,t.resolution);h.filterFrame=l.filterFrame;var d=0;for(d=0;d<n.length-1;++d){d===1&&t.multisample>1&&(h=this.getOptimalFilterTexture(l.width,l.height,t.resolution),h.filterFrame=l.filterFrame),n[d].apply(this,l,h,_t.CLEAR,t);var c=l;l=h,h=c}n[d].apply(this,l,f.renderTexture,_t.BLEND,t),d>1&&t.multisample>1&&this.returnFilterTexture(t.renderTexture),this.returnFilterTexture(l),this.returnFilterTexture(h)}t.clear(),this.statePool.push(t)},e.prototype.bindAndClear=function(r,t){t===void 0&&(t=_t.CLEAR);var n=this.renderer,i=n.renderTexture,o=n.state;if(r===this.defaultFilterStack[this.defaultFilterStack.length-1].renderTexture?this.renderer.projection.transform=this.activeState.transform:this.renderer.projection.transform=null,r&&r.filterFrame){var a=this.tempRect;a.x=0,a.y=0,a.width=r.filterFrame.width,a.height=r.filterFrame.height,i.bind(r,r.filterFrame,a)}else r!==this.defaultFilterStack[this.defaultFilterStack.length-1].renderTexture?i.bind(r):this.renderer.renderTexture.bind(r,this.activeState.bindingSourceFrame,this.activeState.bindingDestinationFrame);var s=o.stateId&1||this.forceClear;(t===_t.CLEAR||t===_t.BLIT&&s)&&this.renderer.framebuffer.clear(0,0,0,0)},e.prototype.applyFilter=function(r,t,n,i){var o=this.renderer;o.state.set(r.state),this.bindAndClear(n,i),r.uniforms.uSampler=t,r.uniforms.filterGlobals=this.globalUniforms,o.shader.bind(r),r.legacy=!!r.program.attributeData.aTextureCoord,r.legacy?(this.quadUv.map(t._frame,t.filterFrame),o.geometry.bind(this.quadUv),o.geometry.draw(Dt.TRIANGLES)):(o.geometry.bind(this.quad),o.geometry.draw(Dt.TRIANGLE_STRIP))},e.prototype.calculateSpriteMatrix=function(r,t){var n=this.activeState,i=n.sourceFrame,o=n.destinationFrame,a=t._texture.orig,s=r.set(o.width,0,0,o.height,i.x,i.y),u=t.worldTransform.copyTo(Q.TEMP_MATRIX);return u.invert(),s.prepend(u),s.scale(1/a.width,1/a.height),s.translate(t.anchor.x,t.anchor.y),s},e.prototype.destroy=function(){this.renderer=null,this.texturePool.clear(!1)},e.prototype.getOptimalFilterTexture=function(r,t,n,i){return n===void 0&&(n=1),i===void 0&&(i=G.NONE),this.texturePool.getOptimalTexture(r,t,n,i)},e.prototype.getFilterTexture=function(r,t,n){if(typeof r=="number"){var i=r;r=t,t=i}r=r||this.activeState.renderTexture;var o=this.texturePool.getOptimalTexture(r.width,r.height,t||r.resolution,n||G.NONE);return o.filterFrame=r.filterFrame,o},e.prototype.returnFilterTexture=function(r){this.texturePool.returnTexture(r)},e.prototype.emptyPool=function(){this.texturePool.clear(!0)},e.prototype.resize=function(){this.texturePool.setScreenSize(this.renderer.view)},e.prototype.transformAABB=function(r,t){var n=xe[0],i=xe[1],o=xe[2],a=xe[3];n.set(t.left,t.top),i.set(t.left,t.bottom),o.set(t.right,t.top),a.set(t.right,t.bottom),r.apply(n,n),r.apply(i,i),r.apply(o,o),r.apply(a,a);var s=Math.min(n.x,i.x,o.x,a.x),u=Math.min(n.y,i.y,o.y,a.y),f=Math.max(n.x,i.x,o.x,a.x),l=Math.max(n.y,i.y,o.y,a.y);t.x=s,t.y=u,t.width=f-s,t.height=l-u},e.prototype.roundFrame=function(r,t,n,i,o){if(o){var a=o.a,s=o.b,u=o.c,f=o.d;if((Math.abs(s)>1e-4||Math.abs(u)>1e-4)&&(Math.abs(a)>1e-4||Math.abs(f)>1e-4))return}o=o?sr.copyFrom(o):sr.identity(),o.translate(-n.x,-n.y).scale(i.width/n.width,i.height/n.height).translate(i.x,i.y),this.transformAABB(o,r),r.ceil(t),this.transformAABB(o.invert(),r)},e}(),ri=function(){function e(r){this.renderer=r}return e.prototype.flush=function(){},e.prototype.destroy=function(){this.renderer=null},e.prototype.start=function(){},e.prototype.stop=function(){this.flush()},e.prototype.render=function(r){},e}(),ni=function(){function e(r){this.renderer=r,this.emptyRenderer=new ri(r),this.currentRenderer=this.emptyRenderer}return e.prototype.setObjectRenderer=function(r){this.currentRenderer!==r&&(this.currentRenderer.stop(),this.currentRenderer=r,this.currentRenderer.start())},e.prototype.flush=function(){this.setObjectRenderer(this.emptyRenderer)},e.prototype.reset=function(){this.setObjectRenderer(this.emptyRenderer)},e.prototype.copyBoundTextures=function(r,t){for(var n=this.renderer.texture.boundTextures,i=t-1;i>=0;--i)r[i]=n[i]||null,r[i]&&(r[i]._batchLocation=i)},e.prototype.boundArray=function(r,t,n,i){for(var o=r.elements,a=r.ids,s=r.count,u=0,f=0;f<s;f++){var l=o[f],h=l._batchLocation;if(h>=0&&h<i&&t[h]===l){a[f]=h;continue}for(;u<i;){var d=t[u];if(d&&d._batchEnabled===n&&d._batchLocation===u){u++;continue}a[f]=u,l._batchLocation=u,t[u]=l;break}}},e.prototype.destroy=function(){this.renderer=null},e}(),ii=0,oi=function(){function e(r){this.renderer=r,this.webGLVersion=1,this.extensions={},this.supports={uint32Indices:!1},this.handleContextLost=this.handleContextLost.bind(this),this.handleContextRestored=this.handleContextRestored.bind(this),r.view.addEventListener("webglcontextlost",this.handleContextLost,!1),r.view.addEventListener("webglcontextrestored",this.handleContextRestored,!1)}return Object.defineProperty(e.prototype,"isLost",{get:function(){return!this.gl||this.gl.isContextLost()},enumerable:!1,configurable:!0}),e.prototype.contextChange=function(r){this.gl=r,this.renderer.gl=r,this.renderer.CONTEXT_UID=ii++,r.isContextLost()&&r.getExtension("WEBGL_lose_context")&&r.getExtension("WEBGL_lose_context").restoreContext()},e.prototype.initFromContext=function(r){this.gl=r,this.validateContext(r),this.renderer.gl=r,this.renderer.CONTEXT_UID=ii++,this.renderer.runners.contextChange.emit(r)},e.prototype.initFromOptions=function(r){var t=this.createContext(this.renderer.view,r);this.initFromContext(t)},e.prototype.createContext=function(r,t){var n;if(T.PREFER_ENV>=ct.WEBGL2&&(n=r.getContext("webgl2",t)),n)this.webGLVersion=2;else if(this.webGLVersion=1,n=r.getContext("webgl",t)||r.getContext("experimental-webgl",t),!n)throw new Error("This browser does not support WebGL. Try using the canvas renderer");return this.gl=n,this.getExtensions(),this.gl},e.prototype.getExtensions=function(){var r=this.gl,t={anisotropicFiltering:r.getExtension("EXT_texture_filter_anisotropic"),floatTextureLinear:r.getExtension("OES_texture_float_linear"),s3tc:r.getExtension("WEBGL_compressed_texture_s3tc"),s3tc_sRGB:r.getExtension("WEBGL_compressed_texture_s3tc_srgb"),etc:r.getExtension("WEBGL_compressed_texture_etc"),etc1:r.getExtension("WEBGL_compressed_texture_etc1"),pvrtc:r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),atc:r.getExtension("WEBGL_compressed_texture_atc"),astc:r.getExtension("WEBGL_compressed_texture_astc")};this.webGLVersion===1?Object.assign(this.extensions,t,{drawBuffers:r.getExtension("WEBGL_draw_buffers"),depthTexture:r.getExtension("WEBGL_depth_texture"),loseContext:r.getExtension("WEBGL_lose_context"),vertexArrayObject:r.getExtension("OES_vertex_array_object")||r.getExtension("MOZ_OES_vertex_array_object")||r.getExtension("WEBKIT_OES_vertex_array_object"),uint32ElementIndex:r.getExtension("OES_element_index_uint"),floatTexture:r.getExtension("OES_texture_float"),floatTextureLinear:r.getExtension("OES_texture_float_linear"),textureHalfFloat:r.getExtension("OES_texture_half_float"),textureHalfFloatLinear:r.getExtension("OES_texture_half_float_linear")}):this.webGLVersion===2&&Object.assign(this.extensions,t,{colorBufferFloat:r.getExtension("EXT_color_buffer_float")})},e.prototype.handleContextLost=function(r){r.preventDefault()},e.prototype.handleContextRestored=function(){this.renderer.runners.contextChange.emit(this.gl)},e.prototype.destroy=function(){var r=this.renderer.view;this.renderer=null,r.removeEventListener("webglcontextlost",this.handleContextLost),r.removeEventListener("webglcontextrestored",this.handleContextRestored),this.gl.useProgram(null),this.extensions.loseContext&&this.extensions.loseContext.loseContext()},e.prototype.postrender=function(){this.renderer.renderingToScreen&&this.gl.flush()},e.prototype.validateContext=function(r){var t=r.getContextAttributes(),n="WebGL2RenderingContext"in self&&r instanceof self.WebGL2RenderingContext;n&&(this.webGLVersion=2),t.stencil||console.warn("Provided WebGL context does not have a stencil buffer, masks may not render correctly");var i=n||!!r.getExtension("OES_element_index_uint");this.supports.uint32Indices=i,i||console.warn("Provided WebGL context does not support 32 index buffer, complex graphics may not render correctly")},e}(),ca=function(){function e(r){this.framebuffer=r,this.stencil=null,this.dirtyId=-1,this.dirtyFormat=-1,this.dirtySize=-1,this.multisample=G.NONE,this.msaaBuffer=null,this.blitFramebuffer=null,this.mipLevel=0}return e}(),da=new V,ai=function(){function e(r){this.renderer=r,this.managedFramebuffers=[],this.unknownFramebuffer=new ir(10,10),this.msaaSamples=null}return e.prototype.contextChange=function(){var r=this.gl=this.renderer.gl;if(this.CONTEXT_UID=this.renderer.CONTEXT_UID,this.current=this.unknownFramebuffer,this.viewport=new V,this.hasMRT=!0,this.writeDepthTexture=!0,this.disposeAll(!0),this.renderer.context.webGLVersion===1){var t=this.renderer.context.extensions.drawBuffers,n=this.renderer.context.extensions.depthTexture;T.PREFER_ENV===ct.WEBGL_LEGACY&&(t=null,n=null),t?r.drawBuffers=function(i){return t.drawBuffersWEBGL(i)}:(this.hasMRT=!1,r.drawBuffers=function(){}),n||(this.writeDepthTexture=!1)}else this.msaaSamples=r.getInternalformatParameter(r.RENDERBUFFER,r.RGBA8,r.SAMPLES)},e.prototype.bind=function(r,t,n){n===void 0&&(n=0);var i=this.gl;if(r){var o=r.glFramebuffers[this.CONTEXT_UID]||this.initFramebuffer(r);this.current!==r&&(this.current=r,i.bindFramebuffer(i.FRAMEBUFFER,o.framebuffer)),o.mipLevel!==n&&(r.dirtyId++,r.dirtyFormat++,o.mipLevel=n),o.dirtyId!==r.dirtyId&&(o.dirtyId=r.dirtyId,o.dirtyFormat!==r.dirtyFormat?(o.dirtyFormat=r.dirtyFormat,o.dirtySize=r.dirtySize,this.updateFramebuffer(r,n)):o.dirtySize!==r.dirtySize&&(o.dirtySize=r.dirtySize,this.resizeFramebuffer(r)));for(var a=0;a<r.colorTextures.length;a++){var s=r.colorTextures[a];this.renderer.texture.unbind(s.parentTextureArray||s)}if(r.depthTexture&&this.renderer.texture.unbind(r.depthTexture),t){var u=t.width>>n,f=t.height>>n,l=u/t.width;this.setViewport(t.x*l,t.y*l,u,f)}else{var u=r.width>>n,f=r.height>>n;this.setViewport(0,0,u,f)}}else this.current&&(this.current=null,i.bindFramebuffer(i.FRAMEBUFFER,null)),t?this.setViewport(t.x,t.y,t.width,t.height):this.setViewport(0,0,this.renderer.width,this.renderer.height)},e.prototype.setViewport=function(r,t,n,i){var o=this.viewport;r=Math.round(r),t=Math.round(t),n=Math.round(n),i=Math.round(i),(o.width!==n||o.height!==i||o.x!==r||o.y!==t)&&(o.x=r,o.y=t,o.width=n,o.height=i,this.gl.viewport(r,t,n,i))},Object.defineProperty(e.prototype,"size",{get:function(){return this.current?{x:0,y:0,width:this.current.width,height:this.current.height}:{x:0,y:0,width:this.renderer.width,height:this.renderer.height}},enumerable:!1,configurable:!0}),e.prototype.clear=function(r,t,n,i,o){o===void 0&&(o=oe.COLOR|oe.DEPTH);var a=this.gl;a.clearColor(r,t,n,i),a.clear(o)},e.prototype.initFramebuffer=function(r){var t=this.gl,n=new ca(t.createFramebuffer());return n.multisample=this.detectSamples(r.multisample),r.glFramebuffers[this.CONTEXT_UID]=n,this.managedFramebuffers.push(r),r.disposeRunner.add(this),n},e.prototype.resizeFramebuffer=function(r){var t=this.gl,n=r.glFramebuffers[this.CONTEXT_UID];n.msaaBuffer&&(t.bindRenderbuffer(t.RENDERBUFFER,n.msaaBuffer),t.renderbufferStorageMultisample(t.RENDERBUFFER,n.multisample,t.RGBA8,r.width,r.height)),n.stencil&&(t.bindRenderbuffer(t.RENDERBUFFER,n.stencil),n.msaaBuffer?t.renderbufferStorageMultisample(t.RENDERBUFFER,n.multisample,t.DEPTH24_STENCIL8,r.width,r.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,r.width,r.height));var i=r.colorTextures,o=i.length;t.drawBuffers||(o=Math.min(o,1));for(var a=0;a<o;a++){var s=i[a],u=s.parentTextureArray||s;this.renderer.texture.bind(u,0)}r.depthTexture&&this.writeDepthTexture&&this.renderer.texture.bind(r.depthTexture,0)},e.prototype.updateFramebuffer=function(r,t){var n=this.gl,i=r.glFramebuffers[this.CONTEXT_UID],o=r.colorTextures,a=o.length;n.drawBuffers||(a=Math.min(a,1)),i.multisample>1&&this.canMultisampleFramebuffer(r)?(i.msaaBuffer=i.msaaBuffer||n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,i.msaaBuffer),n.renderbufferStorageMultisample(n.RENDERBUFFER,i.multisample,n.RGBA8,r.width,r.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,i.msaaBuffer)):i.msaaBuffer&&(n.deleteRenderbuffer(i.msaaBuffer),i.msaaBuffer=null,i.blitFramebuffer&&(i.blitFramebuffer.dispose(),i.blitFramebuffer=null));for(var s=[],u=0;u<a;u++){var f=o[u],l=f.parentTextureArray||f;this.renderer.texture.bind(l,0),!(u===0&&i.msaaBuffer)&&(n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+u,f.target,l._glTextures[this.CONTEXT_UID].texture,t),s.push(n.COLOR_ATTACHMENT0+u))}if(s.length>1&&n.drawBuffers(s),r.depthTexture){var h=this.writeDepthTexture;if(h){var d=r.depthTexture;this.renderer.texture.bind(d,0),n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,d._glTextures[this.CONTEXT_UID].texture,t)}}(r.stencil||r.depth)&&!(r.depthTexture&&this.writeDepthTexture)?(i.stencil=i.stencil||n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,i.stencil),i.msaaBuffer?n.renderbufferStorageMultisample(n.RENDERBUFFER,i.multisample,n.DEPTH24_STENCIL8,r.width,r.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,r.width,r.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,i.stencil)):i.stencil&&(n.deleteRenderbuffer(i.stencil),i.stencil=null)},e.prototype.canMultisampleFramebuffer=function(r){return this.renderer.context.webGLVersion!==1&&r.colorTextures.length<=1&&!r.depthTexture},e.prototype.detectSamples=function(r){var t=this.msaaSamples,n=G.NONE;if(r<=1||t===null)return n;for(var i=0;i<t.length;i++)if(t[i]<=r){n=t[i];break}return n===1&&(n=G.NONE),n},e.prototype.blit=function(r,t,n){var i=this,o=i.current,a=i.renderer,s=i.gl,u=i.CONTEXT_UID;if(a.context.webGLVersion===2&&!!o){var f=o.glFramebuffers[u];if(!!f){if(!r){if(!f.msaaBuffer)return;var l=o.colorTextures[0];if(!l)return;f.blitFramebuffer||(f.blitFramebuffer=new ir(o.width,o.height),f.blitFramebuffer.addColorTexture(0,l)),r=f.blitFramebuffer,r.colorTextures[0]!==l&&(r.colorTextures[0]=l,r.dirtyId++,r.dirtyFormat++),(r.width!==o.width||r.height!==o.height)&&(r.width=o.width,r.height=o.height,r.dirtyId++,r.dirtySize++)}t||(t=da,t.width=o.width,t.height=o.height),n||(n=t);var h=t.width===n.width&&t.height===n.height;this.bind(r),s.bindFramebuffer(s.READ_FRAMEBUFFER,f.framebuffer),s.blitFramebuffer(t.x,t.y,t.width,t.height,n.x,n.y,n.width,n.height,s.COLOR_BUFFER_BIT,h?s.NEAREST:s.LINEAR)}}},e.prototype.disposeFramebuffer=function(r,t){var n=r.glFramebuffers[this.CONTEXT_UID],i=this.gl;if(!!n){delete r.glFramebuffers[this.CONTEXT_UID];var o=this.managedFramebuffers.indexOf(r);o>=0&&this.managedFramebuffers.splice(o,1),r.disposeRunner.remove(this),t||(i.deleteFramebuffer(n.framebuffer),n.msaaBuffer&&i.deleteRenderbuffer(n.msaaBuffer),n.stencil&&i.deleteRenderbuffer(n.stencil)),n.blitFramebuffer&&n.blitFramebuffer.dispose()}},e.prototype.disposeAll=function(r){var t=this.managedFramebuffers;this.managedFramebuffers=[];for(var n=0;n<t.length;n++)this.disposeFramebuffer(t[n],r)},e.prototype.forceStencil=function(){var r=this.current;if(!!r){var t=r.glFramebuffers[this.CONTEXT_UID];if(!(!t||t.stencil)){r.stencil=!0;var n=r.width,i=r.height,o=this.gl,a=o.createRenderbuffer();o.bindRenderbuffer(o.RENDERBUFFER,a),t.msaaBuffer?o.renderbufferStorageMultisample(o.RENDERBUFFER,t.multisample,o.DEPTH24_STENCIL8,n,i):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,n,i),t.stencil=a,o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,a)}}},e.prototype.reset=function(){this.current=this.unknownFramebuffer,this.viewport=new V},e.prototype.destroy=function(){this.renderer=null},e}(),ur={5126:4,5123:2,5121:1},si=function(){function e(r){this.renderer=r,this._activeGeometry=null,this._activeVao=null,this.hasVao=!0,this.hasInstance=!0,this.canUseUInt32ElementIndex=!1,this.managedGeometries={}}return e.prototype.contextChange=function(){this.disposeAll(!0);var r=this.gl=this.renderer.gl,t=this.renderer.context;if(this.CONTEXT_UID=this.renderer.CONTEXT_UID,t.webGLVersion!==2){var n=this.renderer.context.extensions.vertexArrayObject;T.PREFER_ENV===ct.WEBGL_LEGACY&&(n=null),n?(r.createVertexArray=function(){return n.createVertexArrayOES()},r.bindVertexArray=function(o){return n.bindVertexArrayOES(o)},r.deleteVertexArray=function(o){return n.deleteVertexArrayOES(o)}):(this.hasVao=!1,r.createVertexArray=function(){return null},r.bindVertexArray=function(){return null},r.deleteVertexArray=function(){return null})}if(t.webGLVersion!==2){var i=r.getExtension("ANGLE_instanced_arrays");i?(r.vertexAttribDivisor=function(o,a){return i.vertexAttribDivisorANGLE(o,a)},r.drawElementsInstanced=function(o,a,s,u,f){return i.drawElementsInstancedANGLE(o,a,s,u,f)},r.drawArraysInstanced=function(o,a,s,u){return i.drawArraysInstancedANGLE(o,a,s,u)}):this.hasInstance=!1}this.canUseUInt32ElementIndex=t.webGLVersion===2||!!t.extensions.uint32ElementIndex},e.prototype.bind=function(r,t){t=t||this.renderer.shader.shader;var n=this.gl,i=r.glVertexArrayObjects[this.CONTEXT_UID],o=!1;i||(this.managedGeometries[r.id]=r,r.disposeRunner.add(this),r.glVertexArrayObjects[this.CONTEXT_UID]=i={},o=!0);var a=i[t.program.id]||this.initGeometryVao(r,t,o);this._activeGeometry=r,this._activeVao!==a&&(this._activeVao=a,this.hasVao?n.bindVertexArray(a):this.activateVao(r,t.program)),this.updateBuffers()},e.prototype.reset=function(){this.unbind()},e.prototype.updateBuffers=function(){for(var r=this._activeGeometry,t=this.renderer.buffer,n=0;n<r.buffers.length;n++){var i=r.buffers[n];t.update(i)}},e.prototype.checkCompatibility=function(r,t){var n=r.attributes,i=t.attributeData;for(var o in i)if(!n[o])throw new Error('shader and geometry incompatible, geometry missing the "'+o+'" attribute')},e.prototype.getSignature=function(r,t){var n=r.attributes,i=t.attributeData,o=["g",r.id];for(var a in n)i[a]&&o.push(a);return o.join("-")},e.prototype.initGeometryVao=function(r,t,n){n===void 0&&(n=!0);var i=this.gl,o=this.CONTEXT_UID,a=this.renderer.buffer,s=t.program;s.glPrograms[o]||this.renderer.shader.generateProgram(t),this.checkCompatibility(r,s);var u=this.getSignature(r,s),f=r.glVertexArrayObjects[this.CONTEXT_UID],l=f[u];if(l)return f[s.id]=l,l;var h=r.buffers,d=r.attributes,c={},p={};for(var _ in h)c[_]=0,p[_]=0;for(var _ in d)!d[_].size&&s.attributeData[_]?d[_].size=s.attributeData[_].size:d[_].size||console.warn("PIXI Geometry attribute '"+_+"' size cannot be determined (likely the bound shader does not have the attribute)"),c[d[_].buffer]+=d[_].size*ur[d[_].type];for(var _ in d){var v=d[_],E=v.size;v.stride===void 0&&(c[v.buffer]===E*ur[v.type]?v.stride=0:v.stride=c[v.buffer]),v.start===void 0&&(v.start=p[v.buffer],p[v.buffer]+=E*ur[v.type])}l=i.createVertexArray(),i.bindVertexArray(l);for(var y=0;y<h.length;y++){var x=h[y];a.bind(x),n&&x._glBuffers[o].refCount++}return this.activateVao(r,s),this._activeVao=l,f[s.id]=l,f[u]=l,l},e.prototype.disposeGeometry=function(r,t){var n;if(!!this.managedGeometries[r.id]){delete this.managedGeometries[r.id];var i=r.glVertexArrayObjects[this.CONTEXT_UID],o=this.gl,a=r.buffers,s=(n=this.renderer)===null||n===void 0?void 0:n.buffer;if(r.disposeRunner.remove(this),!!i){if(s)for(var u=0;u<a.length;u++){var f=a[u]._glBuffers[this.CONTEXT_UID];f&&(f.refCount--,f.refCount===0&&!t&&s.dispose(a[u],t))}if(!t){for(var l in i)if(l[0]==="g"){var h=i[l];this._activeVao===h&&this.unbind(),o.deleteVertexArray(h)}}delete r.glVertexArrayObjects[this.CONTEXT_UID]}}},e.prototype.disposeAll=function(r){for(var t=Object.keys(this.managedGeometries),n=0;n<t.length;n++)this.disposeGeometry(this.managedGeometries[t[n]],r)},e.prototype.activateVao=function(r,t){var n=this.gl,i=this.CONTEXT_UID,o=this.renderer.buffer,a=r.buffers,s=r.attributes;r.indexBuffer&&o.bind(r.indexBuffer);var u=null;for(var f in s){var l=s[f],h=a[l.buffer],d=h._glBuffers[i];if(t.attributeData[f]){u!==d&&(o.bind(h),u=d);var c=t.attributeData[f].location;if(n.enableVertexAttribArray(c),n.vertexAttribPointer(c,l.size,l.type||n.FLOAT,l.normalized,l.stride,l.start),l.instance)if(this.hasInstance)n.vertexAttribDivisor(c,1);else throw new Error("geometry error, GPU Instancing is not supported on this device")}}},e.prototype.draw=function(r,t,n,i){var o=this.gl,a=this._activeGeometry;if(a.indexBuffer){var s=a.indexBuffer.data.BYTES_PER_ELEMENT,u=s===2?o.UNSIGNED_SHORT:o.UNSIGNED_INT;s===2||s===4&&this.canUseUInt32ElementIndex?a.instanced?o.drawElementsInstanced(r,t||a.indexBuffer.data.length,u,(n||0)*s,i||1):o.drawElements(r,t||a.indexBuffer.data.length,u,(n||0)*s):console.warn("unsupported index buffer type: uint32")}else a.instanced?o.drawArraysInstanced(r,n,t||a.getSize(),i||1):o.drawArrays(r,n,t||a.getSize());return this},e.prototype.unbind=function(){this.gl.bindVertexArray(null),this._activeVao=null,this._activeGeometry=null},e.prototype.destroy=function(){this.renderer=null},e}(),pa=function(){function e(r){r===void 0&&(r=null),this.type=W.NONE,this.autoDetect=!0,this.maskObject=r||null,this.pooled=!1,this.isMaskData=!0,this.resolution=null,this.multisample=T.FILTER_MULTISAMPLE,this._stencilCounter=0,this._scissorCounter=0,this._scissorRect=null,this._target=null}return e.prototype.reset=function(){this.pooled&&(this.maskObject=null,this.type=W.NONE,this.autoDetect=!0),this._target=null},e.prototype.copyCountersOrReset=function(r){r?(this._stencilCounter=r._stencilCounter,this._scissorCounter=r._scissorCounter,this._scissorRect=r._scissorRect):(this._stencilCounter=0,this._scissorCounter=0,this._scissorRect=null)},e}();function ui(e,r,t){var n=e.createShader(r);return e.shaderSource(n,t),e.compileShader(n),n}function fi(e,r){var t=e.getShaderSource(r).split(`
`).map(function(f,l){return l+": "+f}),n=e.getShaderInfoLog(r),i=n.split(`
`),o={},a=i.map(function(f){return parseFloat(f.replace(/^ERROR\: 0\:([\d]+)\:.*$/,"$1"))}).filter(function(f){return f&&!o[f]?(o[f]=!0,!0):!1}),s=[""];a.forEach(function(f){t[f-1]="%c"+t[f-1]+"%c",s.push("background: #FF0000; color:#FFFFFF; font-size: 10px","font-size: 10px")});var u=t.join(`
`);s[0]=u,console.error(n),console.groupCollapsed("click to view full shader code"),console.warn.apply(console,s),console.groupEnd()}function va(e,r,t,n){e.getProgramParameter(r,e.LINK_STATUS)||(e.getShaderParameter(t,e.COMPILE_STATUS)||fi(e,t),e.getShaderParameter(n,e.COMPILE_STATUS)||fi(e,n),console.error("PixiJS Error: Could not initialize shader."),e.getProgramInfoLog(r)!==""&&console.warn("PixiJS Warning: gl.getProgramInfoLog()",e.getProgramInfoLog(r)))}function fr(e){for(var r=new Array(e),t=0;t<r.length;t++)r[t]=!1;return r}function li(e,r){switch(e){case"float":return 0;case"vec2":return new Float32Array(2*r);case"vec3":return new Float32Array(3*r);case"vec4":return new Float32Array(4*r);case"int":case"uint":case"sampler2D":case"sampler2DArray":return 0;case"ivec2":return new Int32Array(2*r);case"ivec3":return new Int32Array(3*r);case"ivec4":return new Int32Array(4*r);case"uvec2":return new Uint32Array(2*r);case"uvec3":return new Uint32Array(3*r);case"uvec4":return new Uint32Array(4*r);case"bool":return!1;case"bvec2":return fr(2*r);case"bvec3":return fr(3*r);case"bvec4":return fr(4*r);case"mat2":return new Float32Array([1,0,0,1]);case"mat3":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return null}var hi={},Yt=hi;function ma(){if(Yt===hi||Yt&&Yt.isContextLost()){var e=document.createElement("canvas"),r=void 0;T.PREFER_ENV>=ct.WEBGL2&&(r=e.getContext("webgl2",{})),r||(r=e.getContext("webgl",{})||e.getContext("experimental-webgl",{}),r?r.getExtension("WEBGL_draw_buffers"):r=null),Yt=r}return Yt}var be;function ya(){if(!be){be=at.MEDIUM;var e=ma();if(e&&e.getShaderPrecisionFormat){var r=e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT);be=r.precision?at.HIGH:at.MEDIUM}}return be}function ci(e,r,t){if(e.substring(0,9)!=="precision"){var n=r;return r===at.HIGH&&t!==at.HIGH&&(n=at.MEDIUM),"precision "+n+` float;
`+e}else if(t!==at.HIGH&&e.substring(0,15)==="precision highp")return e.replace("precision highp","precision mediump");return e}var _a={float:1,vec2:2,vec3:3,vec4:4,int:1,ivec2:2,ivec3:3,ivec4:4,uint:1,uvec2:2,uvec3:3,uvec4:4,bool:1,bvec2:2,bvec3:3,bvec4:4,mat2:4,mat3:9,mat4:16,sampler2D:1};function di(e){return _a[e]}var Te=null,pi={FLOAT:"float",FLOAT_VEC2:"vec2",FLOAT_VEC3:"vec3",FLOAT_VEC4:"vec4",INT:"int",INT_VEC2:"ivec2",INT_VEC3:"ivec3",INT_VEC4:"ivec4",UNSIGNED_INT:"uint",UNSIGNED_INT_VEC2:"uvec2",UNSIGNED_INT_VEC3:"uvec3",UNSIGNED_INT_VEC4:"uvec4",BOOL:"bool",BOOL_VEC2:"bvec2",BOOL_VEC3:"bvec3",BOOL_VEC4:"bvec4",FLOAT_MAT2:"mat2",FLOAT_MAT3:"mat3",FLOAT_MAT4:"mat4",SAMPLER_2D:"sampler2D",INT_SAMPLER_2D:"sampler2D",UNSIGNED_INT_SAMPLER_2D:"sampler2D",SAMPLER_CUBE:"samplerCube",INT_SAMPLER_CUBE:"samplerCube",UNSIGNED_INT_SAMPLER_CUBE:"samplerCube",SAMPLER_2D_ARRAY:"sampler2DArray",INT_SAMPLER_2D_ARRAY:"sampler2DArray",UNSIGNED_INT_SAMPLER_2D_ARRAY:"sampler2DArray"};function vi(e,r){if(!Te){var t=Object.keys(pi);Te={};for(var n=0;n<t.length;++n){var i=t[n];Te[e[i]]=pi[i]}}return Te[r]}var Vt=[{test:function(e){return e.type==="float"&&e.size===1},code:function(e){return`
            if(uv["`+e+'"] !== ud["'+e+`"].value)
            {
                ud["`+e+'"].value = uv["'+e+`"]
                gl.uniform1f(ud["`+e+'"].location, uv["'+e+`"])
            }
            `}},{test:function(e){return(e.type==="sampler2D"||e.type==="samplerCube"||e.type==="sampler2DArray")&&e.size===1&&!e.isArray},code:function(e){return`t = syncData.textureCount++;

            renderer.texture.bind(uv["`+e+`"], t);

            if(ud["`+e+`"].value !== t)
            {
                ud["`+e+`"].value = t;
                gl.uniform1i(ud["`+e+`"].location, t);
; // eslint-disable-line max-len
            }`}},{test:function(e,r){return e.type==="mat3"&&e.size===1&&r.a!==void 0},code:function(e){return`
            gl.uniformMatrix3fv(ud["`+e+'"].location, false, uv["'+e+`"].toArray(true));
            `},codeUbo:function(e){return`
                var `+e+"_matrix = uv."+e+`.toArray(true);

                data[offset] = `+e+`_matrix[0];
                data[offset+1] = `+e+`_matrix[1];
                data[offset+2] = `+e+`_matrix[2];
        
                data[offset + 4] = `+e+`_matrix[3];
                data[offset + 5] = `+e+`_matrix[4];
                data[offset + 6] = `+e+`_matrix[5];
        
                data[offset + 8] = `+e+`_matrix[6];
                data[offset + 9] = `+e+`_matrix[7];
                data[offset + 10] = `+e+`_matrix[8];
            `}},{test:function(e,r){return e.type==="vec2"&&e.size===1&&r.x!==void 0},code:function(e){return`
                cv = ud["`+e+`"].value;
                v = uv["`+e+`"];

                if(cv[0] !== v.x || cv[1] !== v.y)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    gl.uniform2f(ud["`+e+`"].location, v.x, v.y);
                }`},codeUbo:function(e){return`
                v = uv.`+e+`;

                data[offset] = v.x;
                data[offset+1] = v.y;
            `}},{test:function(e){return e.type==="vec2"&&e.size===1},code:function(e){return`
                cv = ud["`+e+`"].value;
                v = uv["`+e+`"];

                if(cv[0] !== v[0] || cv[1] !== v[1])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    gl.uniform2f(ud["`+e+`"].location, v[0], v[1]);
                }
            `}},{test:function(e,r){return e.type==="vec4"&&e.size===1&&r.width!==void 0},code:function(e){return`
                cv = ud["`+e+`"].value;
                v = uv["`+e+`"];

                if(cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    cv[2] = v.width;
                    cv[3] = v.height;
                    gl.uniform4f(ud["`+e+`"].location, v.x, v.y, v.width, v.height)
                }`},codeUbo:function(e){return`
                    v = uv.`+e+`;

                    data[offset] = v.x;
                    data[offset+1] = v.y;
                    data[offset+2] = v.width;
                    data[offset+3] = v.height;
                `}},{test:function(e){return e.type==="vec4"&&e.size===1},code:function(e){return`
                cv = ud["`+e+`"].value;
                v = uv["`+e+`"];

                if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    cv[2] = v[2];
                    cv[3] = v[3];

                    gl.uniform4f(ud["`+e+`"].location, v[0], v[1], v[2], v[3])
                }`}}],ga={float:`
    if(cv !== v)
    {
        cv.v = v;
        gl.uniform1f(location, v)
    }`,vec2:`
    if(cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        gl.uniform2f(location, v[0], v[1])
    }`,vec3:`
    if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3f(location, v[0], v[1], v[2])
    }`,vec4:"gl.uniform4f(location, v[0], v[1], v[2], v[3])",int:"gl.uniform1i(location, v)",ivec2:"gl.uniform2i(location, v[0], v[1])",ivec3:"gl.uniform3i(location, v[0], v[1], v[2])",ivec4:"gl.uniform4i(location, v[0], v[1], v[2], v[3])",uint:"gl.uniform1ui(location, v)",uvec2:"gl.uniform2ui(location, v[0], v[1])",uvec3:"gl.uniform3ui(location, v[0], v[1], v[2])",uvec4:"gl.uniform4ui(location, v[0], v[1], v[2], v[3])",bool:`
    if(cv !== v)
    {
        cv.v = v;
        gl.uniform1i(location, v)
    }`,bvec2:"gl.uniform2i(location, v[0], v[1])",bvec3:"gl.uniform3i(location, v[0], v[1], v[2])",bvec4:"gl.uniform4i(location, v[0], v[1], v[2], v[3])",mat2:"gl.uniformMatrix2fv(location, false, v)",mat3:"gl.uniformMatrix3fv(location, false, v)",mat4:"gl.uniformMatrix4fv(location, false, v)",sampler2D:"gl.uniform1i(location, v)",samplerCube:"gl.uniform1i(location, v)",sampler2DArray:"gl.uniform1i(location, v)"},xa={float:"gl.uniform1fv(location, v)",vec2:"gl.uniform2fv(location, v)",vec3:"gl.uniform3fv(location, v)",vec4:"gl.uniform4fv(location, v)",mat4:"gl.uniformMatrix4fv(location, false, v)",mat3:"gl.uniformMatrix3fv(location, false, v)",mat2:"gl.uniformMatrix2fv(location, false, v)",int:"gl.uniform1iv(location, v)",ivec2:"gl.uniform2iv(location, v)",ivec3:"gl.uniform3iv(location, v)",ivec4:"gl.uniform4iv(location, v)",uint:"gl.uniform1uiv(location, v)",uvec2:"gl.uniform2uiv(location, v)",uvec3:"gl.uniform3uiv(location, v)",uvec4:"gl.uniform4uiv(location, v)",bool:"gl.uniform1iv(location, v)",bvec2:"gl.uniform2iv(location, v)",bvec3:"gl.uniform3iv(location, v)",bvec4:"gl.uniform4iv(location, v)",sampler2D:"gl.uniform1iv(location, v)",samplerCube:"gl.uniform1iv(location, v)",sampler2DArray:"gl.uniform1iv(location, v)"};function ba(e,r){var t=[`
        var v = null;
        var cv = null
        var t = 0;
        var gl = renderer.gl
    `];for(var n in e.uniforms){var i=r[n];if(!i){e.uniforms[n].group&&(e.uniforms[n].ubo?t.push(`
                        renderer.shader.syncUniformBufferGroup(uv.`+n+", '"+n+`');
                    `):t.push(`
                        renderer.shader.syncUniformGroup(uv.`+n+`, syncData);
                    `));continue}for(var o=e.uniforms[n],a=!1,s=0;s<Vt.length;s++)if(Vt[s].test(i,o)){t.push(Vt[s].code(n,o)),a=!0;break}if(!a){var u=i.size===1?ga:xa,f=u[i.type].replace("location",'ud["'+n+'"].location');t.push(`
            cv = ud["`+n+`"].value;
            v = uv["`+n+`"];
            `+f+";")}}return new Function("ud","uv","renderer","syncData",t.join(`
`))}var Ta=["precision mediump float;","void main(void){","float test = 0.1;","%forloop%","gl_FragColor = vec4(0.0);","}"].join(`
`);function Ca(e){for(var r="",t=0;t<e;++t)t>0&&(r+=`
else `),t<e-1&&(r+="if(test == "+t+".0){}");return r}function Ia(e,r){if(e===0)throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");for(var t=r.createShader(r.FRAGMENT_SHADER);;){var n=Ta.replace(/%forloop%/gi,Ca(e));if(r.shaderSource(t,n),r.compileShader(t),!r.getShaderParameter(t,r.COMPILE_STATUS))e=e/2|0;else break}return e}var Qt;function Ra(){if(typeof Qt=="boolean")return Qt;try{var e=new Function("param1","param2","param3","return param1[param2] === param3;");Qt=e({a:"b"},"a","b")===!0}catch{Qt=!1}return Qt}var wa=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor *= texture2D(uSampler, vTextureCoord);
}`,Aa=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void){
   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
   vTextureCoord = aTextureCoord;
}
`,Ea=0,Ce={},lr=function(){function e(r,t,n){n===void 0&&(n="pixi-shader"),this.id=Ea++,this.vertexSrc=r||e.defaultVertexSrc,this.fragmentSrc=t||e.defaultFragmentSrc,this.vertexSrc=this.vertexSrc.trim(),this.fragmentSrc=this.fragmentSrc.trim(),this.vertexSrc.substring(0,8)!=="#version"&&(n=n.replace(/\s+/g,"-"),Ce[n]?(Ce[n]++,n+="-"+Ce[n]):Ce[n]=1,this.vertexSrc="#define SHADER_NAME "+n+`
`+this.vertexSrc,this.fragmentSrc="#define SHADER_NAME "+n+`
`+this.fragmentSrc,this.vertexSrc=ci(this.vertexSrc,T.PRECISION_VERTEX,at.HIGH),this.fragmentSrc=ci(this.fragmentSrc,T.PRECISION_FRAGMENT,ya())),this.glPrograms={},this.syncUniforms=null}return Object.defineProperty(e,"defaultVertexSrc",{get:function(){return Aa},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultFragmentSrc",{get:function(){return wa},enumerable:!1,configurable:!0}),e.from=function(r,t,n){var i=r+t,o=zn[i];return o||(zn[i]=o=new e(r,t,n)),o},e}(),mi=function(){function e(r,t){this.uniformBindCount=0,this.program=r,t?t instanceof zt?this.uniformGroup=t:this.uniformGroup=new zt(t):this.uniformGroup=new zt({})}return e.prototype.checkUniformExists=function(r,t){if(t.uniforms[r])return!0;for(var n in t.uniforms){var i=t.uniforms[n];if(i.group&&this.checkUniformExists(r,i))return!0}return!1},e.prototype.destroy=function(){this.uniformGroup=null},Object.defineProperty(e.prototype,"uniforms",{get:function(){return this.uniformGroup.uniforms},enumerable:!1,configurable:!0}),e.from=function(r,t,n){var i=lr.from(r,t);return new e(i,n)},e}(),hr=0,cr=1,dr=2,pr=3,vr=4,mr=5,yr=function(){function e(){this.data=0,this.blendMode=b.NORMAL,this.polygonOffset=0,this.blend=!0,this.depthMask=!0}return Object.defineProperty(e.prototype,"blend",{get:function(){return!!(this.data&1<<hr)},set:function(r){!!(this.data&1<<hr)!==r&&(this.data^=1<<hr)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"offsets",{get:function(){return!!(this.data&1<<cr)},set:function(r){!!(this.data&1<<cr)!==r&&(this.data^=1<<cr)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"culling",{get:function(){return!!(this.data&1<<dr)},set:function(r){!!(this.data&1<<dr)!==r&&(this.data^=1<<dr)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"depthTest",{get:function(){return!!(this.data&1<<pr)},set:function(r){!!(this.data&1<<pr)!==r&&(this.data^=1<<pr)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"depthMask",{get:function(){return!!(this.data&1<<mr)},set:function(r){!!(this.data&1<<mr)!==r&&(this.data^=1<<mr)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"clockwiseFrontFace",{get:function(){return!!(this.data&1<<vr)},set:function(r){!!(this.data&1<<vr)!==r&&(this.data^=1<<vr)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blendMode",{get:function(){return this._blendMode},set:function(r){this.blend=r!==b.NONE,this._blendMode=r},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"polygonOffset",{get:function(){return this._polygonOffset},set:function(r){this.offsets=!!r,this._polygonOffset=r},enumerable:!1,configurable:!0}),e.prototype.toString=function(){return"[@pixi/core:State "+("blendMode="+this.blendMode+" ")+("clockwiseFrontFace="+this.clockwiseFrontFace+" ")+("culling="+this.culling+" ")+("depthMask="+this.depthMask+" ")+("polygonOffset="+this.polygonOffset)+"]"},e.for2d=function(){var r=new e;return r.depthTest=!1,r.blend=!0,r},e}(),Na=`attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`,Oa=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor = texture2D(uSampler, vTextureCoord);
}
`,I=function(e){N(r,e);function r(t,n,i){var o=this,a=lr.from(t||r.defaultVertexSrc,n||r.defaultFragmentSrc);return o=e.call(this,a,i)||this,o.padding=0,o.resolution=T.FILTER_RESOLUTION,o.multisample=T.FILTER_MULTISAMPLE,o.enabled=!0,o.autoFit=!0,o.state=new yr,o}return r.prototype.apply=function(t,n,i,o,a){t.applyFilter(this,n,i,o)},Object.defineProperty(r.prototype,"blendMode",{get:function(){return this.state.blendMode},set:function(t){this.state.blendMode=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"resolution",{get:function(){return this._resolution},set:function(t){this._resolution=t},enumerable:!1,configurable:!0}),Object.defineProperty(r,"defaultVertexSrc",{get:function(){return Na},enumerable:!1,configurable:!0}),Object.defineProperty(r,"defaultFragmentSrc",{get:function(){return Oa},enumerable:!1,configurable:!0}),r}(mi),Pa=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 otherMatrix;

varying vec2 vMaskCoord;
varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;
}
`,Fa=`varying vec2 vMaskCoord;
varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform sampler2D mask;
uniform float alpha;
uniform float npmAlpha;
uniform vec4 maskClamp;

void main(void)
{
    float clip = step(3.5,
        step(maskClamp.x, vMaskCoord.x) +
        step(maskClamp.y, vMaskCoord.y) +
        step(vMaskCoord.x, maskClamp.z) +
        step(vMaskCoord.y, maskClamp.w));

    vec4 original = texture2D(uSampler, vTextureCoord);
    vec4 masky = texture2D(mask, vMaskCoord);
    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);

    original *= (alphaMul * masky.r * alpha * clip);

    gl_FragColor = original;
}
`,yi=new Q,Sa=function(){function e(r,t){this._texture=r,this.mapCoord=new Q,this.uClampFrame=new Float32Array(4),this.uClampOffset=new Float32Array(2),this._textureID=-1,this._updateID=0,this.clampOffset=0,this.clampMargin=typeof t=="undefined"?.5:t,this.isSimple=!1}return Object.defineProperty(e.prototype,"texture",{get:function(){return this._texture},set:function(r){this._texture=r,this._textureID=-1},enumerable:!1,configurable:!0}),e.prototype.multiplyUvs=function(r,t){t===void 0&&(t=r);for(var n=this.mapCoord,i=0;i<r.length;i+=2){var o=r[i],a=r[i+1];t[i]=o*n.a+a*n.c+n.tx,t[i+1]=o*n.b+a*n.d+n.ty}return t},e.prototype.update=function(r){var t=this._texture;if(!t||!t.valid||!r&&this._textureID===t._updateID)return!1;this._textureID=t._updateID,this._updateID++;var n=t._uvs;this.mapCoord.set(n.x1-n.x0,n.y1-n.y0,n.x3-n.x0,n.y3-n.y0,n.x0,n.y0);var i=t.orig,o=t.trim;o&&(yi.set(i.width/o.width,0,0,i.height/o.height,-o.x/o.width,-o.y/o.height),this.mapCoord.append(yi));var a=t.baseTexture,s=this.uClampFrame,u=this.clampMargin/a.resolution,f=this.clampOffset;return s[0]=(t._frame.x+u+f)/a.width,s[1]=(t._frame.y+u+f)/a.height,s[2]=(t._frame.x+t._frame.width-u+f)/a.width,s[3]=(t._frame.y+t._frame.height-u+f)/a.height,this.uClampOffset[0]=f/a.realWidth,this.uClampOffset[1]=f/a.realHeight,this.isSimple=t._frame.width===a.width&&t._frame.height===a.height&&t.rotate===0,!0},e}(),Ua=function(e){N(r,e);function r(t){var n=this,i=new Q;return n=e.call(this,Pa,Fa)||this,t.renderable=!1,n.maskSprite=t,n.maskMatrix=i,n}return r.prototype.apply=function(t,n,i,o){var a=this.maskSprite,s=a._texture;!s.valid||(s.uvMatrix||(s.uvMatrix=new Sa(s,0)),s.uvMatrix.update(),this.uniforms.npmAlpha=s.baseTexture.alphaMode?0:1,this.uniforms.mask=s,this.uniforms.otherMatrix=t.calculateSpriteMatrix(this.maskMatrix,a).prepend(s.uvMatrix.mapCoord),this.uniforms.alpha=a.worldAlpha,this.uniforms.maskClamp=s.uvMatrix.uClampFrame,t.applyFilter(this,n,i,o))},r}(I),_i=function(){function e(r){this.renderer=r,this.enableScissor=!0,this.alphaMaskPool=[],this.maskDataPool=[],this.maskStack=[],this.alphaMaskIndex=0}return e.prototype.setMaskStack=function(r){this.maskStack=r,this.renderer.scissor.setMaskStack(r),this.renderer.stencil.setMaskStack(r)},e.prototype.push=function(r,t){var n=t;if(!n.isMaskData){var i=this.maskDataPool.pop()||new pa;i.pooled=!0,i.maskObject=t,n=i}switch(n.autoDetect&&this.detect(n),n.copyCountersOrReset(this.maskStack[this.maskStack.length-1]),n._target=r,n.type){case W.SCISSOR:this.maskStack.push(n),this.renderer.scissor.push(n);break;case W.STENCIL:this.maskStack.push(n),this.renderer.stencil.push(n);break;case W.SPRITE:n.copyCountersOrReset(null),this.pushSpriteMask(n),this.maskStack.push(n);break}},e.prototype.pop=function(r){var t=this.maskStack.pop();if(!(!t||t._target!==r)){switch(t.type){case W.SCISSOR:this.renderer.scissor.pop();break;case W.STENCIL:this.renderer.stencil.pop(t.maskObject);break;case W.SPRITE:this.popSpriteMask();break}t.reset(),t.pooled&&this.maskDataPool.push(t)}},e.prototype.detect=function(r){var t=r.maskObject;if(t.isSprite){r.type=W.SPRITE;return}if(r.type=W.STENCIL,this.enableScissor&&t.isFastRect&&t.isFastRect()){var n=t.worldTransform,i=Math.atan2(n.b,n.a),o=Math.atan2(n.d,n.c);i=Math.round(i*(180/Math.PI)*100),o=Math.round(o*(180/Math.PI)*100)-i,i=(i%9e3+9e3)%9e3,o=(o%18e3+18e3)%18e3,i===0&&o===9e3&&(r.type=W.SCISSOR)}},e.prototype.pushSpriteMask=function(r){var t,n,i=r.maskObject,o=r._target,a=this.alphaMaskPool[this.alphaMaskIndex];a||(a=this.alphaMaskPool[this.alphaMaskIndex]=[new Ua(i)]);var s=this.renderer,u=s.renderTexture,f,l;if(u.current){var h=u.current;f=r.resolution||h.resolution,l=(t=r.multisample)!==null&&t!==void 0?t:h.multisample}else f=r.resolution||s.resolution,l=(n=r.multisample)!==null&&n!==void 0?n:s.multisample;a[0].resolution=f,a[0].multisample=l,a[0].maskSprite=i;var d=o.filterArea;o.filterArea=i.getBounds(!0),s.filter.push(o,a),o.filterArea=d,this.alphaMaskIndex++},e.prototype.popSpriteMask=function(){this.renderer.filter.pop(),this.alphaMaskIndex--},e.prototype.destroy=function(){this.renderer=null},e}(),gi=function(){function e(r){this.renderer=r,this.maskStack=[],this.glConst=0}return e.prototype.getStackLength=function(){return this.maskStack.length},e.prototype.setMaskStack=function(r){var t=this.renderer.gl,n=this.getStackLength();this.maskStack=r;var i=this.getStackLength();i!==n&&(i===0?t.disable(this.glConst):(t.enable(this.glConst),this._useCurrent()))},e.prototype._useCurrent=function(){},e.prototype.destroy=function(){this.renderer=null,this.maskStack=null},e}(),xi=function(e){N(r,e);function r(t){var n=e.call(this,t)||this;return n.glConst=WebGLRenderingContext.SCISSOR_TEST,n}return r.prototype.getStackLength=function(){var t=this.maskStack[this.maskStack.length-1];return t?t._scissorCounter:0},r.prototype.push=function(t){var n=t.maskObject;n.renderable=!0;var i=t._scissorRect,o=n.getBounds(!0),a=this.renderer.gl;n.renderable=!1,i?o.fit(i):a.enable(a.SCISSOR_TEST),t._scissorCounter++,t._scissorRect=o,this._useCurrent()},r.prototype.pop=function(){var t=this.renderer.gl;this.getStackLength()>0?this._useCurrent():t.disable(t.SCISSOR_TEST)},r.prototype._useCurrent=function(){var t=this.maskStack[this.maskStack.length-1]._scissorRect,n=this.renderer.renderTexture.current,i=this.renderer.projection,o=i.transform,a=i.sourceFrame,s=i.destinationFrame,u=n?n.resolution:this.renderer.resolution,f=s.width/a.width,l=s.height/a.height,h=((t.x-a.x)*f+s.x)*u,d=((t.y-a.y)*l+s.y)*u,c=t.width*f*u,p=t.height*l*u;o&&(h+=o.tx*u,d+=o.ty*u),n||(d=this.renderer.height-p-d),h=Math.round(h),d=Math.round(d),c=Math.round(c),p=Math.round(p),this.renderer.gl.scissor(h,d,c,p)},r}(gi),bi=function(e){N(r,e);function r(t){var n=e.call(this,t)||this;return n.glConst=WebGLRenderingContext.STENCIL_TEST,n}return r.prototype.getStackLength=function(){var t=this.maskStack[this.maskStack.length-1];return t?t._stencilCounter:0},r.prototype.push=function(t){var n=t.maskObject,i=this.renderer.gl,o=t._stencilCounter;o===0&&(this.renderer.framebuffer.forceStencil(),i.enable(i.STENCIL_TEST)),t._stencilCounter++,i.colorMask(!1,!1,!1,!1),i.stencilFunc(i.EQUAL,o,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.INCR),n.renderable=!0,n.render(this.renderer),this.renderer.batch.flush(),n.renderable=!1,this._useCurrent()},r.prototype.pop=function(t){var n=this.renderer.gl;this.getStackLength()===0?(n.disable(n.STENCIL_TEST),n.clearStencil(0),n.clear(n.STENCIL_BUFFER_BIT)):(n.colorMask(!1,!1,!1,!1),n.stencilOp(n.KEEP,n.KEEP,n.DECR),t.renderable=!0,t.render(this.renderer),this.renderer.batch.flush(),t.renderable=!1,this._useCurrent())},r.prototype._useCurrent=function(){var t=this.renderer.gl;t.colorMask(!0,!0,!0,!0),t.stencilFunc(t.EQUAL,this.getStackLength(),4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP)},r}(gi),Ti=function(){function e(r){this.renderer=r,this.destinationFrame=null,this.sourceFrame=null,this.defaultFrame=null,this.projectionMatrix=new Q,this.transform=null}return e.prototype.update=function(r,t,n,i){this.destinationFrame=r||this.destinationFrame||this.defaultFrame,this.sourceFrame=t||this.sourceFrame||r,this.calculateProjection(this.destinationFrame,this.sourceFrame,n,i),this.transform&&this.projectionMatrix.append(this.transform);var o=this.renderer;o.globalUniforms.uniforms.projectionMatrix=this.projectionMatrix,o.globalUniforms.update(),o.shader.shader&&o.shader.syncUniformGroup(o.shader.shader.uniforms.globals)},e.prototype.calculateProjection=function(r,t,n,i){var o=this.projectionMatrix,a=i?-1:1;o.identity(),o.a=1/t.width*2,o.d=a*(1/t.height*2),o.tx=-1-t.x*o.a,o.ty=-a-t.y*o.d},e.prototype.setTransform=function(r){},e.prototype.destroy=function(){this.renderer=null},e}(),Pt=new V,te=new V,Ci=function(){function e(r){this.renderer=r,this.clearColor=r._backgroundColorRgba,this.defaultMaskStack=[],this.current=null,this.sourceFrame=new V,this.destinationFrame=new V,this.viewportFrame=new V}return e.prototype.bind=function(r,t,n){r===void 0&&(r=null);var i=this.renderer;this.current=r;var o,a,s;r?(o=r.baseTexture,s=o.resolution,t||(Pt.width=r.frame.width,Pt.height=r.frame.height,t=Pt),n||(te.x=r.frame.x,te.y=r.frame.y,te.width=t.width,te.height=t.height,n=te),a=o.framebuffer):(s=i.resolution,t||(Pt.width=i.screen.width,Pt.height=i.screen.height,t=Pt),n||(n=Pt,n.width=t.width,n.height=t.height));var u=this.viewportFrame;u.x=n.x*s,u.y=n.y*s,u.width=n.width*s,u.height=n.height*s,r||(u.y=i.view.height-(u.y+u.height)),u.ceil(),this.renderer.framebuffer.bind(a,u),this.renderer.projection.update(n,t,s,!a),r?this.renderer.mask.setMaskStack(o.maskStack):this.renderer.mask.setMaskStack(this.defaultMaskStack),this.sourceFrame.copyFrom(t),this.destinationFrame.copyFrom(n)},e.prototype.clear=function(r,t){this.current?r=r||this.current.baseTexture.clearColor:r=r||this.clearColor;var n=this.destinationFrame,i=this.current?this.current.baseTexture:this.renderer.screen,o=n.width!==i.width||n.height!==i.height;if(o){var a=this.viewportFrame,s=a.x,u=a.y,f=a.width,l=a.height;s=Math.round(s),u=Math.round(u),f=Math.round(f),l=Math.round(l),this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST),this.renderer.gl.scissor(s,u,f,l)}this.renderer.framebuffer.clear(r[0],r[1],r[2],r[3],t),o&&this.renderer.scissor.pop()},e.prototype.resize=function(){this.bind(null)},e.prototype.reset=function(){this.bind(null)},e.prototype.destroy=function(){this.renderer=null},e}();function La(e,r,t,n,i){t.buffer.update(i)}var Ga={float:`
        data[offset] = v;
    `,vec2:`
        data[offset] = v[0];
        data[offset+1] = v[1];
    `,vec3:`
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];

    `,vec4:`
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];
        data[offset+3] = v[3];
    `,mat2:`
        data[offset] = v[0];
        data[offset+1] = v[1];

        data[offset+4] = v[2];
        data[offset+5] = v[3];
    `,mat3:`
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];

        data[offset + 4] = v[3];
        data[offset + 5] = v[4];
        data[offset + 6] = v[5];

        data[offset + 8] = v[6];
        data[offset + 9] = v[7];
        data[offset + 10] = v[8];
    `,mat4:`
        for(var i = 0; i < 16; i++)
        {
            data[offset + i] = v[i];
        }
    `},Ii={float:4,vec2:8,vec3:12,vec4:16,int:4,ivec2:8,ivec3:12,ivec4:16,uint:4,uvec2:8,uvec3:12,uvec4:16,bool:4,bvec2:8,bvec3:12,bvec4:16,mat2:16*2,mat3:16*3,mat4:16*4};function Ma(e){for(var r=e.map(function(u){return{data:u,offset:0,dataLen:0,dirty:0}}),t=0,n=0,i=0,o=0;o<r.length;o++){var a=r[o];if(t=Ii[a.data.type],a.data.size>1&&(t=Math.max(t,16)*a.data.size),a.dataLen=t,n%t!=0&&n<16){var s=n%t%16;n+=s,i+=s}n+t>16?(i=Math.ceil(i/16)*16,a.offset=i,i+=t,n=t):(a.offset=i,n+=t,i+=t)}return i=Math.ceil(i/16)*16,{uboElements:r,size:i}}function ja(e,r){var t=[];for(var n in e)r[n]&&t.push(r[n]);return t.sort(function(i,o){return i.index-o.index}),t}function Ba(e,r){if(!e.autoManage)return{size:0,syncFunc:La};for(var t=ja(e.uniforms,r),n=Ma(t),i=n.uboElements,o=n.size,a=[`
    var v = null;
    var v2 = null;
    var cv = null;
    var t = 0;
    var gl = renderer.gl
    var index = 0;
    var data = buffer.data;
    `],s=0;s<i.length;s++){for(var u=i[s],f=e.uniforms[u.data.name],l=u.data.name,h=!1,d=0;d<Vt.length;d++){var c=Vt[d];if(c.codeUbo&&c.test(u.data,f)){a.push("offset = "+u.offset/4+";",Vt[d].codeUbo(u.data.name,f)),h=!0;break}}if(!h)if(u.data.size>1){var p=di(u.data.type),_=Math.max(Ii[u.data.type]/16,1),v=p/_,E=(4-v%4)%4;a.push(`
                cv = ud.`+l+`.value;
                v = uv.`+l+`;
                offset = `+u.offset/4+`;

                t = 0;

                for(var i=0; i < `+u.data.size*_+`; i++)
                {
                    for(var j = 0; j < `+v+`; j++)
                    {
                        data[offset++] = v[t++];
                    }
                    offset += `+E+`;
                }

                `)}else{var y=Ga[u.data.type];a.push(`
                cv = ud.`+l+`.value;
                v = uv.`+l+`;
                offset = `+u.offset/4+`;
                `+y+`;
                `)}}return a.push(`
       renderer.buffer.update(buffer);
    `),{size:o,syncFunc:new Function("ud","uv","renderer","syncData","buffer",a.join(`
`))}}var ka=function(){function e(r,t){this.program=r,this.uniformData=t,this.uniformGroups={},this.uniformDirtyGroups={},this.uniformBufferBindings={}}return e.prototype.destroy=function(){this.uniformData=null,this.uniformGroups=null,this.uniformDirtyGroups=null,this.uniformBufferBindings=null,this.program=null},e}();function za(e,r){for(var t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES),i=0;i<n;i++){var o=r.getActiveAttrib(e,i);if(o.name.indexOf("gl_")!==0){var a=vi(r,o.type),s={type:a,name:o.name,size:di(a),location:i};t[o.name]=s}}return t}function Va(e,r){for(var t={},n=r.getProgramParameter(e,r.ACTIVE_UNIFORMS),i=0;i<n;i++){var o=r.getActiveUniform(e,i),a=o.name.replace(/\[.*?\]$/,""),s=!!o.name.match(/\[.*?\]$/),u=vi(r,o.type);t[a]={name:a,index:i,type:u,size:o.size,isArray:s,value:li(u,o.size)}}return t}function Xa(e,r){var t=ui(e,e.VERTEX_SHADER,r.vertexSrc),n=ui(e,e.FRAGMENT_SHADER,r.fragmentSrc),i=e.createProgram();e.attachShader(i,t),e.attachShader(i,n),e.linkProgram(i),e.getProgramParameter(i,e.LINK_STATUS)||va(e,i,t,n),r.attributeData=za(i,e),r.uniformData=Va(i,e);var o=Object.keys(r.attributeData);o.sort(function(l,h){return l>h?1:-1});for(var a=0;a<o.length;a++)r.attributeData[o[a]].location=a,e.bindAttribLocation(i,a,o[a]);e.linkProgram(i),e.deleteShader(t),e.deleteShader(n);var s={};for(var a in r.uniformData){var u=r.uniformData[a];s[a]={location:e.getUniformLocation(i,a),value:li(u.type,u.size)}}var f=new ka(i,s);return f}var Ha=0,Ie={textureCount:0,uboCount:0},Ri=function(){function e(r){this.destroyed=!1,this.renderer=r,this.systemCheck(),this.gl=null,this.shader=null,this.program=null,this.cache={},this._uboCache={},this.id=Ha++}return e.prototype.systemCheck=function(){if(!Ra())throw new Error("Current environment does not allow unsafe-eval, please use @pixi/unsafe-eval module to enable support.")},e.prototype.contextChange=function(r){this.gl=r,this.reset()},e.prototype.bind=function(r,t){r.uniforms.globals=this.renderer.globalUniforms;var n=r.program,i=n.glPrograms[this.renderer.CONTEXT_UID]||this.generateProgram(r);return this.shader=r,this.program!==n&&(this.program=n,this.gl.useProgram(i.program)),t||(Ie.textureCount=0,Ie.uboCount=0,this.syncUniformGroup(r.uniformGroup,Ie)),i},e.prototype.setUniforms=function(r){var t=this.shader.program,n=t.glPrograms[this.renderer.CONTEXT_UID];t.syncUniforms(n.uniformData,r,this.renderer)},e.prototype.syncUniformGroup=function(r,t){var n=this.getGlProgram();(!r.static||r.dirtyId!==n.uniformDirtyGroups[r.id])&&(n.uniformDirtyGroups[r.id]=r.dirtyId,this.syncUniforms(r,n,t))},e.prototype.syncUniforms=function(r,t,n){var i=r.syncUniforms[this.shader.program.id]||this.createSyncGroups(r);i(t.uniformData,r.uniforms,this.renderer,n)},e.prototype.createSyncGroups=function(r){var t=this.getSignature(r,this.shader.program.uniformData,"u");return this.cache[t]||(this.cache[t]=ba(r,this.shader.program.uniformData)),r.syncUniforms[this.shader.program.id]=this.cache[t],r.syncUniforms[this.shader.program.id]},e.prototype.syncUniformBufferGroup=function(r,t){var n=this.getGlProgram();if(!r.static||r.dirtyId!==0||!n.uniformGroups[r.id]){r.dirtyId=0;var i=n.uniformGroups[r.id]||this.createSyncBufferGroup(r,n,t);r.buffer.update(),i(n.uniformData,r.uniforms,this.renderer,Ie,r.buffer)}this.renderer.buffer.bindBufferBase(r.buffer,n.uniformBufferBindings[t])},e.prototype.createSyncBufferGroup=function(r,t,n){var i=this.renderer.gl;this.renderer.buffer.bind(r.buffer);var o=this.gl.getUniformBlockIndex(t.program,n);t.uniformBufferBindings[n]=this.shader.uniformBindCount,i.uniformBlockBinding(t.program,o,this.shader.uniformBindCount),this.shader.uniformBindCount++;var a=this.getSignature(r,this.shader.program.uniformData,"ubo"),s=this._uboCache[a];if(s||(s=this._uboCache[a]=Ba(r,this.shader.program.uniformData)),r.autoManage){var u=new Float32Array(s.size/4);r.buffer.update(u)}return t.uniformGroups[r.id]=s.syncFunc,t.uniformGroups[r.id]},e.prototype.getSignature=function(r,t,n){var i=r.uniforms,o=[n+"-"];for(var a in i)o.push(a),t[a]&&o.push(t[a].type);return o.join("-")},e.prototype.getGlProgram=function(){return this.shader?this.shader.program.glPrograms[this.renderer.CONTEXT_UID]:null},e.prototype.generateProgram=function(r){var t=this.gl,n=r.program,i=Xa(t,n);return n.glPrograms[this.renderer.CONTEXT_UID]=i,i},e.prototype.reset=function(){this.program=null,this.shader=null},e.prototype.destroy=function(){this.renderer=null,this.destroyed=!0},e}();function Da(e,r){return r===void 0&&(r=[]),r[b.NORMAL]=[e.ONE,e.ONE_MINUS_SRC_ALPHA],r[b.ADD]=[e.ONE,e.ONE],r[b.MULTIPLY]=[e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA],r[b.SCREEN]=[e.ONE,e.ONE_MINUS_SRC_COLOR,e.ONE,e.ONE_MINUS_SRC_ALPHA],r[b.OVERLAY]=[e.ONE,e.ONE_MINUS_SRC_ALPHA],r[b.DARKEN]=[e.ONE,e.ONE_MINUS_SRC_ALPHA],r[b.LIGHTEN]=[e.ONE,e.ONE_MINUS_SRC_ALPHA],r[b.COLOR_DODGE]=[e.ONE,e.ONE_MINUS_SRC_ALPHA],r[b.COLOR_BURN]=[e.ONE,e.ONE_MINUS_SRC_ALPHA],r[b.HARD_LIGHT]=[e.ONE,e.ONE_MINUS_SRC_ALPHA],r[b.SOFT_LIGHT]=[e.ONE,e.ONE_MINUS_SRC_ALPHA],r[b.DIFFERENCE]=[e.ONE,e.ONE_MINUS_SRC_ALPHA],r[b.EXCLUSION]=[e.ONE,e.ONE_MINUS_SRC_ALPHA],r[b.HUE]=[e.ONE,e.ONE_MINUS_SRC_ALPHA],r[b.SATURATION]=[e.ONE,e.ONE_MINUS_SRC_ALPHA],r[b.COLOR]=[e.ONE,e.ONE_MINUS_SRC_ALPHA],r[b.LUMINOSITY]=[e.ONE,e.ONE_MINUS_SRC_ALPHA],r[b.NONE]=[0,0],r[b.NORMAL_NPM]=[e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA],r[b.ADD_NPM]=[e.SRC_ALPHA,e.ONE,e.ONE,e.ONE],r[b.SCREEN_NPM]=[e.SRC_ALPHA,e.ONE_MINUS_SRC_COLOR,e.ONE,e.ONE_MINUS_SRC_ALPHA],r[b.SRC_IN]=[e.DST_ALPHA,e.ZERO],r[b.SRC_OUT]=[e.ONE_MINUS_DST_ALPHA,e.ZERO],r[b.SRC_ATOP]=[e.DST_ALPHA,e.ONE_MINUS_SRC_ALPHA],r[b.DST_OVER]=[e.ONE_MINUS_DST_ALPHA,e.ONE],r[b.DST_IN]=[e.ZERO,e.SRC_ALPHA],r[b.DST_OUT]=[e.ZERO,e.ONE_MINUS_SRC_ALPHA],r[b.DST_ATOP]=[e.ONE_MINUS_DST_ALPHA,e.SRC_ALPHA],r[b.XOR]=[e.ONE_MINUS_DST_ALPHA,e.ONE_MINUS_SRC_ALPHA],r[b.SUBTRACT]=[e.ONE,e.ONE,e.ONE,e.ONE,e.FUNC_REVERSE_SUBTRACT,e.FUNC_ADD],r}var $a=0,Wa=1,qa=2,Za=3,Ka=4,Ja=5,wi=function(){function e(){this.gl=null,this.stateId=0,this.polygonOffset=0,this.blendMode=b.NONE,this._blendEq=!1,this.map=[],this.map[$a]=this.setBlend,this.map[Wa]=this.setOffset,this.map[qa]=this.setCullFace,this.map[Za]=this.setDepthTest,this.map[Ka]=this.setFrontFace,this.map[Ja]=this.setDepthMask,this.checks=[],this.defaultState=new yr,this.defaultState.blend=!0}return e.prototype.contextChange=function(r){this.gl=r,this.blendModes=Da(r),this.set(this.defaultState),this.reset()},e.prototype.set=function(r){if(r=r||this.defaultState,this.stateId!==r.data){for(var t=this.stateId^r.data,n=0;t;)t&1&&this.map[n].call(this,!!(r.data&1<<n)),t=t>>1,n++;this.stateId=r.data}for(var n=0;n<this.checks.length;n++)this.checks[n](this,r)},e.prototype.forceState=function(r){r=r||this.defaultState;for(var t=0;t<this.map.length;t++)this.map[t].call(this,!!(r.data&1<<t));for(var t=0;t<this.checks.length;t++)this.checks[t](this,r);this.stateId=r.data},e.prototype.setBlend=function(r){this.updateCheck(e.checkBlendMode,r),this.gl[r?"enable":"disable"](this.gl.BLEND)},e.prototype.setOffset=function(r){this.updateCheck(e.checkPolygonOffset,r),this.gl[r?"enable":"disable"](this.gl.POLYGON_OFFSET_FILL)},e.prototype.setDepthTest=function(r){this.gl[r?"enable":"disable"](this.gl.DEPTH_TEST)},e.prototype.setDepthMask=function(r){this.gl.depthMask(r)},e.prototype.setCullFace=function(r){this.gl[r?"enable":"disable"](this.gl.CULL_FACE)},e.prototype.setFrontFace=function(r){this.gl.frontFace(this.gl[r?"CW":"CCW"])},e.prototype.setBlendMode=function(r){if(r!==this.blendMode){this.blendMode=r;var t=this.blendModes[r],n=this.gl;t.length===2?n.blendFunc(t[0],t[1]):n.blendFuncSeparate(t[0],t[1],t[2],t[3]),t.length===6?(this._blendEq=!0,n.blendEquationSeparate(t[4],t[5])):this._blendEq&&(this._blendEq=!1,n.blendEquationSeparate(n.FUNC_ADD,n.FUNC_ADD))}},e.prototype.setPolygonOffset=function(r,t){this.gl.polygonOffset(r,t)},e.prototype.reset=function(){this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!1),this.forceState(this.defaultState),this._blendEq=!0,this.blendMode=-1,this.setBlendMode(0)},e.prototype.updateCheck=function(r,t){var n=this.checks.indexOf(r);t&&n===-1?this.checks.push(r):!t&&n!==-1&&this.checks.splice(n,1)},e.checkBlendMode=function(r,t){r.setBlendMode(t.blendMode)},e.checkPolygonOffset=function(r,t){r.setPolygonOffset(1,t.polygonOffset)},e.prototype.destroy=function(){this.gl=null},e}(),Ai=function(){function e(r){this.renderer=r,this.count=0,this.checkCount=0,this.maxIdle=T.GC_MAX_IDLE,this.checkCountMax=T.GC_MAX_CHECK_COUNT,this.mode=T.GC_MODE}return e.prototype.postrender=function(){!this.renderer.renderingToScreen||(this.count++,this.mode!==je.MANUAL&&(this.checkCount++,this.checkCount>this.checkCountMax&&(this.checkCount=0,this.run())))},e.prototype.run=function(){for(var r=this.renderer.texture,t=r.managedTextures,n=!1,i=0;i<t.length;i++){var o=t[i];!o.framebuffer&&this.count-o.touched>this.maxIdle&&(r.destroyTexture(o,!0),t[i]=null,n=!0)}if(n){for(var a=0,i=0;i<t.length;i++)t[i]!==null&&(t[a++]=t[i]);t.length=a}},e.prototype.unload=function(r){var t=this.renderer.texture,n=r._texture;n&&!n.framebuffer&&t.destroyTexture(n);for(var i=r.children.length-1;i>=0;i--)this.unload(r.children[i])},e.prototype.destroy=function(){this.renderer=null},e}();function Ya(e){var r,t,n,i,o,a,s,u,f,l,h,d,c,p,_,v,E,y,x,L,w,S,Z;return"WebGL2RenderingContext"in self&&e instanceof self.WebGL2RenderingContext?Z=(r={},r[R.UNSIGNED_BYTE]=(t={},t[m.RGBA]=e.RGBA8,t[m.RGB]=e.RGB8,t[m.RG]=e.RG8,t[m.RED]=e.R8,t[m.RGBA_INTEGER]=e.RGBA8UI,t[m.RGB_INTEGER]=e.RGB8UI,t[m.RG_INTEGER]=e.RG8UI,t[m.RED_INTEGER]=e.R8UI,t[m.ALPHA]=e.ALPHA,t[m.LUMINANCE]=e.LUMINANCE,t[m.LUMINANCE_ALPHA]=e.LUMINANCE_ALPHA,t),r[R.BYTE]=(n={},n[m.RGBA]=e.RGBA8_SNORM,n[m.RGB]=e.RGB8_SNORM,n[m.RG]=e.RG8_SNORM,n[m.RED]=e.R8_SNORM,n[m.RGBA_INTEGER]=e.RGBA8I,n[m.RGB_INTEGER]=e.RGB8I,n[m.RG_INTEGER]=e.RG8I,n[m.RED_INTEGER]=e.R8I,n),r[R.UNSIGNED_SHORT]=(i={},i[m.RGBA_INTEGER]=e.RGBA16UI,i[m.RGB_INTEGER]=e.RGB16UI,i[m.RG_INTEGER]=e.RG16UI,i[m.RED_INTEGER]=e.R16UI,i[m.DEPTH_COMPONENT]=e.DEPTH_COMPONENT16,i),r[R.SHORT]=(o={},o[m.RGBA_INTEGER]=e.RGBA16I,o[m.RGB_INTEGER]=e.RGB16I,o[m.RG_INTEGER]=e.RG16I,o[m.RED_INTEGER]=e.R16I,o),r[R.UNSIGNED_INT]=(a={},a[m.RGBA_INTEGER]=e.RGBA32UI,a[m.RGB_INTEGER]=e.RGB32UI,a[m.RG_INTEGER]=e.RG32UI,a[m.RED_INTEGER]=e.R32UI,a[m.DEPTH_COMPONENT]=e.DEPTH_COMPONENT24,a),r[R.INT]=(s={},s[m.RGBA_INTEGER]=e.RGBA32I,s[m.RGB_INTEGER]=e.RGB32I,s[m.RG_INTEGER]=e.RG32I,s[m.RED_INTEGER]=e.R32I,s),r[R.FLOAT]=(u={},u[m.RGBA]=e.RGBA32F,u[m.RGB]=e.RGB32F,u[m.RG]=e.RG32F,u[m.RED]=e.R32F,u[m.DEPTH_COMPONENT]=e.DEPTH_COMPONENT32F,u),r[R.HALF_FLOAT]=(f={},f[m.RGBA]=e.RGBA16F,f[m.RGB]=e.RGB16F,f[m.RG]=e.RG16F,f[m.RED]=e.R16F,f),r[R.UNSIGNED_SHORT_5_6_5]=(l={},l[m.RGB]=e.RGB565,l),r[R.UNSIGNED_SHORT_4_4_4_4]=(h={},h[m.RGBA]=e.RGBA4,h),r[R.UNSIGNED_SHORT_5_5_5_1]=(d={},d[m.RGBA]=e.RGB5_A1,d),r[R.UNSIGNED_INT_2_10_10_10_REV]=(c={},c[m.RGBA]=e.RGB10_A2,c[m.RGBA_INTEGER]=e.RGB10_A2UI,c),r[R.UNSIGNED_INT_10F_11F_11F_REV]=(p={},p[m.RGB]=e.R11F_G11F_B10F,p),r[R.UNSIGNED_INT_5_9_9_9_REV]=(_={},_[m.RGB]=e.RGB9_E5,_),r[R.UNSIGNED_INT_24_8]=(v={},v[m.DEPTH_STENCIL]=e.DEPTH24_STENCIL8,v),r[R.FLOAT_32_UNSIGNED_INT_24_8_REV]=(E={},E[m.DEPTH_STENCIL]=e.DEPTH32F_STENCIL8,E),r):Z=(y={},y[R.UNSIGNED_BYTE]=(x={},x[m.RGBA]=e.RGBA,x[m.RGB]=e.RGB,x[m.ALPHA]=e.ALPHA,x[m.LUMINANCE]=e.LUMINANCE,x[m.LUMINANCE_ALPHA]=e.LUMINANCE_ALPHA,x),y[R.UNSIGNED_SHORT_5_6_5]=(L={},L[m.RGB]=e.RGB,L),y[R.UNSIGNED_SHORT_4_4_4_4]=(w={},w[m.RGBA]=e.RGBA,w),y[R.UNSIGNED_SHORT_5_5_5_1]=(S={},S[m.RGBA]=e.RGBA,S),y),Z}var _r=function(){function e(r){this.texture=r,this.width=-1,this.height=-1,this.dirtyId=-1,this.dirtyStyleId=-1,this.mipmap=!1,this.wrapMode=33071,this.type=R.UNSIGNED_BYTE,this.internalFormat=m.RGBA,this.samplerType=0}return e}(),Ei=function(){function e(r){this.renderer=r,this.boundTextures=[],this.currentLocation=-1,this.managedTextures=[],this._unknownBoundTextures=!1,this.unknownTexture=new H,this.hasIntegerTextures=!1}return e.prototype.contextChange=function(){var r=this.gl=this.renderer.gl;this.CONTEXT_UID=this.renderer.CONTEXT_UID,this.webGLVersion=this.renderer.context.webGLVersion,this.internalFormats=Ya(r);var t=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS);this.boundTextures.length=t;for(var n=0;n<t;n++)this.boundTextures[n]=null;this.emptyTextures={};var i=new _r(r.createTexture());r.bindTexture(r.TEXTURE_2D,i.texture),r.texImage2D(r.TEXTURE_2D,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,new Uint8Array(4)),this.emptyTextures[r.TEXTURE_2D]=i,this.emptyTextures[r.TEXTURE_CUBE_MAP]=new _r(r.createTexture()),r.bindTexture(r.TEXTURE_CUBE_MAP,this.emptyTextures[r.TEXTURE_CUBE_MAP].texture);for(var n=0;n<6;n++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,null);r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAG_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MIN_FILTER,r.LINEAR);for(var n=0;n<this.boundTextures.length;n++)this.bind(null,n)},e.prototype.bind=function(r,t){t===void 0&&(t=0);var n=this.gl;if(r=r==null?void 0:r.castToBaseTexture(),r&&r.valid&&!r.parentTextureArray){r.touched=this.renderer.textureGC.count;var i=r._glTextures[this.CONTEXT_UID]||this.initTexture(r);this.boundTextures[t]!==r&&(this.currentLocation!==t&&(this.currentLocation=t,n.activeTexture(n.TEXTURE0+t)),n.bindTexture(r.target,i.texture)),i.dirtyId!==r.dirtyId&&(this.currentLocation!==t&&(this.currentLocation=t,n.activeTexture(n.TEXTURE0+t)),this.updateTexture(r)),this.boundTextures[t]=r}else this.currentLocation!==t&&(this.currentLocation=t,n.activeTexture(n.TEXTURE0+t)),n.bindTexture(n.TEXTURE_2D,this.emptyTextures[n.TEXTURE_2D].texture),this.boundTextures[t]=null},e.prototype.reset=function(){this._unknownBoundTextures=!0,this.hasIntegerTextures=!1,this.currentLocation=-1;for(var r=0;r<this.boundTextures.length;r++)this.boundTextures[r]=this.unknownTexture},e.prototype.unbind=function(r){var t=this,n=t.gl,i=t.boundTextures;if(this._unknownBoundTextures){this._unknownBoundTextures=!1;for(var o=0;o<i.length;o++)i[o]===this.unknownTexture&&this.bind(null,o)}for(var o=0;o<i.length;o++)i[o]===r&&(this.currentLocation!==o&&(n.activeTexture(n.TEXTURE0+o),this.currentLocation=o),n.bindTexture(r.target,this.emptyTextures[r.target].texture),i[o]=null)},e.prototype.ensureSamplerType=function(r){var t=this,n=t.boundTextures,i=t.hasIntegerTextures,o=t.CONTEXT_UID;if(!!i)for(var a=r-1;a>=0;--a){var s=n[a];if(s){var u=s._glTextures[o];u.samplerType!==ae.FLOAT&&this.renderer.texture.unbind(s)}}},e.prototype.initTexture=function(r){var t=new _r(this.gl.createTexture());return t.dirtyId=-1,r._glTextures[this.CONTEXT_UID]=t,this.managedTextures.push(r),r.on("dispose",this.destroyTexture,this),t},e.prototype.initTextureType=function(r,t){var n,i;t.internalFormat=(i=(n=this.internalFormats[r.type])===null||n===void 0?void 0:n[r.format])!==null&&i!==void 0?i:r.format,this.webGLVersion===2&&r.type===R.HALF_FLOAT?t.type=this.gl.HALF_FLOAT:t.type=r.type},e.prototype.updateTexture=function(r){var t=r._glTextures[this.CONTEXT_UID];if(!!t){var n=this.renderer;if(this.initTextureType(r,t),r.resource&&r.resource.upload(n,r,t))t.samplerType!==ae.FLOAT&&(this.hasIntegerTextures=!0);else{var i=r.realWidth,o=r.realHeight,a=n.gl;(t.width!==i||t.height!==o||t.dirtyId<0)&&(t.width=i,t.height=o,a.texImage2D(r.target,0,t.internalFormat,i,o,0,r.format,t.type,null))}r.dirtyStyleId!==t.dirtyStyleId&&this.updateTextureStyle(r),t.dirtyId=r.dirtyId}},e.prototype.destroyTexture=function(r,t){var n=this.gl;if(r=r.castToBaseTexture(),r._glTextures[this.CONTEXT_UID]&&(this.unbind(r),n.deleteTexture(r._glTextures[this.CONTEXT_UID].texture),r.off("dispose",this.destroyTexture,this),delete r._glTextures[this.CONTEXT_UID],!t)){var i=this.managedTextures.indexOf(r);i!==-1&&Wo(this.managedTextures,i,1)}},e.prototype.updateTextureStyle=function(r){var t=r._glTextures[this.CONTEXT_UID];!t||((r.mipmap===dt.POW2||this.webGLVersion!==2)&&!r.isPowerOfTwo?t.mipmap=!1:t.mipmap=r.mipmap>=1,this.webGLVersion!==2&&!r.isPowerOfTwo?t.wrapMode=Me.CLAMP:t.wrapMode=r.wrapMode,r.resource&&r.resource.style(this.renderer,r,t)||this.setStyle(r,t),t.dirtyStyleId=r.dirtyStyleId)},e.prototype.setStyle=function(r,t){var n=this.gl;if(t.mipmap&&r.mipmap!==dt.ON_MANUAL&&n.generateMipmap(r.target),n.texParameteri(r.target,n.TEXTURE_WRAP_S,t.wrapMode),n.texParameteri(r.target,n.TEXTURE_WRAP_T,t.wrapMode),t.mipmap){n.texParameteri(r.target,n.TEXTURE_MIN_FILTER,r.scaleMode===J.LINEAR?n.LINEAR_MIPMAP_LINEAR:n.NEAREST_MIPMAP_NEAREST);var i=this.renderer.context.extensions.anisotropicFiltering;if(i&&r.anisotropicLevel>0&&r.scaleMode===J.LINEAR){var o=Math.min(r.anisotropicLevel,n.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT));n.texParameterf(r.target,i.TEXTURE_MAX_ANISOTROPY_EXT,o)}}else n.texParameteri(r.target,n.TEXTURE_MIN_FILTER,r.scaleMode===J.LINEAR?n.LINEAR:n.NEAREST);n.texParameteri(r.target,n.TEXTURE_MAG_FILTER,r.scaleMode===J.LINEAR?n.LINEAR:n.NEAREST)},e.prototype.destroy=function(){this.renderer=null},e}(),Ni={__proto__:null,FilterSystem:ei,BatchSystem:ni,ContextSystem:oi,FramebufferSystem:ai,GeometrySystem:si,MaskSystem:_i,ScissorSystem:xi,StencilSystem:bi,ProjectionSystem:Ti,RenderTextureSystem:Ci,ShaderSystem:Ri,StateSystem:wi,TextureGCSystem:Ai,TextureSystem:Ei},gr=new Q,Qa=function(e){N(r,e);function r(t,n){t===void 0&&(t=Ht.UNKNOWN);var i=e.call(this)||this;return n=Object.assign({},T.RENDER_OPTIONS,n),i.options=n,i.type=t,i.screen=new V(0,0,n.width,n.height),i.view=n.view||document.createElement("canvas"),i.resolution=n.resolution||T.RESOLUTION,i.useContextAlpha=n.useContextAlpha,i.autoDensity=!!n.autoDensity,i.preserveDrawingBuffer=n.preserveDrawingBuffer,i.clearBeforeRender=n.clearBeforeRender,i._backgroundColor=0,i._backgroundColorRgba=[0,0,0,1],i._backgroundColorString="#000000",i.backgroundColor=n.backgroundColor||i._backgroundColor,i.backgroundAlpha=n.backgroundAlpha,n.transparent!==void 0&&(Rt("6.0.0","Option transparent is deprecated, please use backgroundAlpha instead."),i.useContextAlpha=n.transparent,i.backgroundAlpha=n.transparent?0:1),i._lastObjectRendered=null,i.plugins={},i}return r.prototype.initPlugins=function(t){for(var n in t)this.plugins[n]=new t[n](this)},Object.defineProperty(r.prototype,"width",{get:function(){return this.view.width},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return this.view.height},enumerable:!1,configurable:!0}),r.prototype.resize=function(t,n){this.view.width=Math.round(t*this.resolution),this.view.height=Math.round(n*this.resolution);var i=this.view.width/this.resolution,o=this.view.height/this.resolution;this.screen.width=i,this.screen.height=o,this.autoDensity&&(this.view.style.width=i+"px",this.view.style.height=o+"px"),this.emit("resize",i,o)},r.prototype.generateTexture=function(t,n,i,o){n===void 0&&(n={}),typeof n=="number"&&(Rt("6.1.0","generateTexture options (scaleMode, resolution, region) are now object options."),n={scaleMode:n,resolution:i,region:o});var a=n.region,s=Yo(n,["region"]);o=a||t.getLocalBounds(null,!0),o.width===0&&(o.width=1),o.height===0&&(o.height=1);var u=or.create(tr({width:o.width,height:o.height},s));return gr.tx=-o.x,gr.ty=-o.y,this.render(t,{renderTexture:u,clear:!1,transform:gr,skipUpdateTransform:!!t.parent}),u},r.prototype.destroy=function(t){for(var n in this.plugins)this.plugins[n].destroy(),this.plugins[n]=null;t&&this.view.parentNode&&this.view.parentNode.removeChild(this.view);var i=this;i.plugins=null,i.type=Ht.UNKNOWN,i.view=null,i.screen=null,i._tempDisplayObjectParent=null,i.options=null,this._backgroundColorRgba=null,this._backgroundColorString=null,this._lastObjectRendered=null},Object.defineProperty(r.prototype,"backgroundColor",{get:function(){return this._backgroundColor},set:function(t){this._backgroundColor=t,this._backgroundColorString=Xo(t),Y(t,this._backgroundColorRgba)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"backgroundAlpha",{get:function(){return this._backgroundColorRgba[3]},set:function(t){this._backgroundColorRgba[3]=t},enumerable:!1,configurable:!0}),r}(ke),ts=function(){function e(r){this.buffer=r||null,this.updateID=-1,this.byteLength=-1,this.refCount=0}return e}(),es=function(){function e(r){this.renderer=r,this.managedBuffers={},this.boundBufferBases={}}return e.prototype.destroy=function(){this.renderer=null},e.prototype.contextChange=function(){this.disposeAll(!0),this.gl=this.renderer.gl,this.CONTEXT_UID=this.renderer.CONTEXT_UID},e.prototype.bind=function(r){var t=this,n=t.gl,i=t.CONTEXT_UID,o=r._glBuffers[i]||this.createGLBuffer(r);n.bindBuffer(r.type,o.buffer)},e.prototype.bindBufferBase=function(r,t){var n=this,i=n.gl,o=n.CONTEXT_UID;if(this.boundBufferBases[t]!==r){var a=r._glBuffers[o]||this.createGLBuffer(r);this.boundBufferBases[t]=r,i.bindBufferBase(i.UNIFORM_BUFFER,t,a.buffer)}},e.prototype.bindBufferRange=function(r,t,n){var i=this,o=i.gl,a=i.CONTEXT_UID;n=n||0;var s=r._glBuffers[a]||this.createGLBuffer(r);o.bindBufferRange(o.UNIFORM_BUFFER,t||0,s.buffer,n*256,256)},e.prototype.update=function(r){var t=this,n=t.gl,i=t.CONTEXT_UID,o=r._glBuffers[i];if(r._updateID!==o.updateID)if(o.updateID=r._updateID,n.bindBuffer(r.type,o.buffer),o.byteLength>=r.data.byteLength)n.bufferSubData(r.type,0,r.data);else{var a=r.static?n.STATIC_DRAW:n.DYNAMIC_DRAW;o.byteLength=r.data.byteLength,n.bufferData(r.type,r.data,a)}},e.prototype.dispose=function(r,t){if(!!this.managedBuffers[r.id]){delete this.managedBuffers[r.id];var n=r._glBuffers[this.CONTEXT_UID],i=this.gl;r.disposeRunner.remove(this),!!n&&(t||i.deleteBuffer(n.buffer),delete r._glBuffers[this.CONTEXT_UID])}},e.prototype.disposeAll=function(r){for(var t=Object.keys(this.managedBuffers),n=0;n<t.length;n++)this.dispose(this.managedBuffers[t[n]],r)},e.prototype.createGLBuffer=function(r){var t=this,n=t.CONTEXT_UID,i=t.gl;return r._glBuffers[n]=new ts(i.createBuffer()),this.managedBuffers[r.id]=r,r.disposeRunner.add(this),r._glBuffers[n]},e}();(function(e){N(r,e);function r(t){var n=e.call(this,Ht.WEBGL,t)||this;return t=n.options,n.gl=null,n.CONTEXT_UID=0,n.runners={destroy:new z("destroy"),contextChange:new z("contextChange"),reset:new z("reset"),update:new z("update"),postrender:new z("postrender"),prerender:new z("prerender"),resize:new z("resize")},n.runners.contextChange.add(n),n.globalUniforms=new zt({projectionMatrix:new Q},!0),n.addSystem(_i,"mask").addSystem(oi,"context").addSystem(wi,"state").addSystem(Ri,"shader").addSystem(Ei,"texture").addSystem(es,"buffer").addSystem(si,"geometry").addSystem(ai,"framebuffer").addSystem(xi,"scissor").addSystem(bi,"stencil").addSystem(Ti,"projection").addSystem(Ai,"textureGC").addSystem(ei,"filter").addSystem(Ci,"renderTexture").addSystem(ni,"batch"),n.initPlugins(r.__plugins),n.multisample=void 0,t.context?n.context.initFromContext(t.context):n.context.initFromOptions({alpha:!!n.useContextAlpha,antialias:t.antialias,premultipliedAlpha:n.useContextAlpha&&n.useContextAlpha!=="notMultiplied",stencil:!0,preserveDrawingBuffer:t.preserveDrawingBuffer,powerPreference:n.options.powerPreference}),n.renderingToScreen=!0,zo(n.context.webGLVersion===2?"WebGL 2":"WebGL 1"),n.resize(n.options.width,n.options.height),n}return r.create=function(t){if(Vo())return new r(t);throw new Error('WebGL unsupported in this browser, use "pixi.js-legacy" for fallback canvas2d support.')},r.prototype.contextChange=function(){var t=this.gl,n;if(this.context.webGLVersion===1){var i=t.getParameter(t.FRAMEBUFFER_BINDING);t.bindFramebuffer(t.FRAMEBUFFER,null),n=t.getParameter(t.SAMPLES),t.bindFramebuffer(t.FRAMEBUFFER,i)}else{var i=t.getParameter(t.DRAW_FRAMEBUFFER_BINDING);t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),n=t.getParameter(t.SAMPLES),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,i)}n>=G.HIGH?this.multisample=G.HIGH:n>=G.MEDIUM?this.multisample=G.MEDIUM:n>=G.LOW?this.multisample=G.LOW:this.multisample=G.NONE},r.prototype.addSystem=function(t,n){var i=new t(this);if(this[n])throw new Error('Whoops! The name "'+n+'" is already in use');this[n]=i;for(var o in this.runners)this.runners[o].add(i);return this},r.prototype.render=function(t,n){var i,o,a,s;if(n&&(n instanceof or?(Rt("6.0.0","Renderer#render arguments changed, use options instead."),i=n,o=arguments[2],a=arguments[3],s=arguments[4]):(i=n.renderTexture,o=n.clear,a=n.transform,s=n.skipUpdateTransform)),this.renderingToScreen=!i,this.runners.prerender.emit(),this.emit("prerender"),this.projection.transform=a,!this.context.isLost){if(i||(this._lastObjectRendered=t),!s){var u=t.enableTempParent();t.updateTransform(),t.disableTempParent(u)}this.renderTexture.bind(i),this.batch.currentRenderer.start(),(o!==void 0?o:this.clearBeforeRender)&&this.renderTexture.clear(),t.render(this),this.batch.currentRenderer.flush(),i&&i.baseTexture.update(),this.runners.postrender.emit(),this.projection.transform=null,this.emit("postrender")}},r.prototype.generateTexture=function(t,n,i,o){n===void 0&&(n={});var a=e.prototype.generateTexture.call(this,t,n,i,o);return this.framebuffer.blit(),a},r.prototype.resize=function(t,n){e.prototype.resize.call(this,t,n),this.runners.resize.emit(this.screen.height,this.screen.width)},r.prototype.reset=function(){return this.runners.reset.emit(),this},r.prototype.clear=function(){this.renderTexture.bind(),this.renderTexture.clear()},r.prototype.destroy=function(t){this.runners.destroy.emit();for(var n in this.runners)this.runners[n].destroy();e.prototype.destroy.call(this,t),this.gl=null},Object.defineProperty(r.prototype,"extract",{get:function(){return Rt("6.0.0","Renderer#extract has been deprecated, please use Renderer#plugins.extract instead."),this.plugins.extract},enumerable:!1,configurable:!0}),r.registerPlugin=function(t,n){r.__plugins=r.__plugins||{},r.__plugins[t]=n},r})(Qa);var rs=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,ns=rs,is=function(){function e(){this.texArray=null,this.blend=0,this.type=Dt.TRIANGLES,this.start=0,this.size=0,this.data=null}return e}(),os=function(){function e(){this.elements=[],this.ids=[],this.count=0}return e.prototype.clear=function(){for(var r=0;r<this.count;r++)this.elements[r]=null;this.count=0},e}(),as=function(){function e(r){typeof r=="number"?this.rawBinaryData=new ArrayBuffer(r):r instanceof Uint8Array?this.rawBinaryData=r.buffer:this.rawBinaryData=r,this.uint32View=new Uint32Array(this.rawBinaryData),this.float32View=new Float32Array(this.rawBinaryData)}return Object.defineProperty(e.prototype,"int8View",{get:function(){return this._int8View||(this._int8View=new Int8Array(this.rawBinaryData)),this._int8View},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"uint8View",{get:function(){return this._uint8View||(this._uint8View=new Uint8Array(this.rawBinaryData)),this._uint8View},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"int16View",{get:function(){return this._int16View||(this._int16View=new Int16Array(this.rawBinaryData)),this._int16View},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"uint16View",{get:function(){return this._uint16View||(this._uint16View=new Uint16Array(this.rawBinaryData)),this._uint16View},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"int32View",{get:function(){return this._int32View||(this._int32View=new Int32Array(this.rawBinaryData)),this._int32View},enumerable:!1,configurable:!0}),e.prototype.view=function(r){return this[r+"View"]},e.prototype.destroy=function(){this.rawBinaryData=null,this._int8View=null,this._uint8View=null,this._int16View=null,this._uint16View=null,this._int32View=null,this.uint32View=null,this.float32View=null},e.sizeOf=function(r){switch(r){case"int8":case"uint8":return 1;case"int16":case"uint16":return 2;case"int32":case"uint32":case"float32":return 4;default:throw new Error(r+" isn't a valid view type")}},e}(),ss=function(e){N(r,e);function r(t){var n=e.call(this,t)||this;return n.shaderGenerator=null,n.geometryClass=null,n.vertexSize=null,n.state=yr.for2d(),n.size=T.SPRITE_BATCH_SIZE*4,n._vertexCount=0,n._indexCount=0,n._bufferedElements=[],n._bufferedTextures=[],n._bufferSize=0,n._shader=null,n._packedGeometries=[],n._packedGeometryPoolSize=2,n._flushId=0,n._aBuffers={},n._iBuffers={},n.MAX_TEXTURES=1,n.renderer.on("prerender",n.onPrerender,n),t.runners.contextChange.add(n),n._dcIndex=0,n._aIndex=0,n._iIndex=0,n._attributeBuffer=null,n._indexBuffer=null,n._tempBoundTextures=[],n}return r.prototype.contextChange=function(){var t=this.renderer.gl;T.PREFER_ENV===ct.WEBGL_LEGACY?this.MAX_TEXTURES=1:(this.MAX_TEXTURES=Math.min(t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),T.SPRITE_MAX_TEXTURES),this.MAX_TEXTURES=Ia(this.MAX_TEXTURES,t)),this._shader=this.shaderGenerator.generateShader(this.MAX_TEXTURES);for(var n=0;n<this._packedGeometryPoolSize;n++)this._packedGeometries[n]=new this.geometryClass;this.initFlushBuffers()},r.prototype.initFlushBuffers=function(){for(var t=r._drawCallPool,n=r._textureArrayPool,i=this.size/4,o=Math.floor(i/this.MAX_TEXTURES)+1;t.length<i;)t.push(new is);for(;n.length<o;)n.push(new os);for(var a=0;a<this.MAX_TEXTURES;a++)this._tempBoundTextures[a]=null},r.prototype.onPrerender=function(){this._flushId=0},r.prototype.render=function(t){!t._texture.valid||(this._vertexCount+t.vertexData.length/2>this.size&&this.flush(),this._vertexCount+=t.vertexData.length/2,this._indexCount+=t.indices.length,this._bufferedTextures[this._bufferSize]=t._texture.baseTexture,this._bufferedElements[this._bufferSize++]=t)},r.prototype.buildTexturesAndDrawCalls=function(){var t=this,n=t._bufferedTextures,i=t.MAX_TEXTURES,o=r._textureArrayPool,a=this.renderer.batch,s=this._tempBoundTextures,u=this.renderer.textureGC.count,f=++H._globalBatch,l=0,h=o[0],d=0;a.copyBoundTextures(s,i);for(var c=0;c<this._bufferSize;++c){var p=n[c];n[c]=null,p._batchEnabled!==f&&(h.count>=i&&(a.boundArray(h,s,f,i),this.buildDrawCalls(h,d,c),d=c,h=o[++l],++f),p._batchEnabled=f,p.touched=u,h.elements[h.count++]=p)}h.count>0&&(a.boundArray(h,s,f,i),this.buildDrawCalls(h,d,this._bufferSize),++l,++f);for(var c=0;c<s.length;c++)s[c]=null;H._globalBatch=f},r.prototype.buildDrawCalls=function(t,n,i){var o=this,a=o._bufferedElements,s=o._attributeBuffer,u=o._indexBuffer,f=o.vertexSize,l=r._drawCallPool,h=this._dcIndex,d=this._aIndex,c=this._iIndex,p=l[h];p.start=this._iIndex,p.texArray=t;for(var _=n;_<i;++_){var v=a[_],E=v._texture.baseTexture,y=Do[E.alphaMode?1:0][v.blendMode];a[_]=null,n<_&&p.blend!==y&&(p.size=c-p.start,n=_,p=l[++h],p.texArray=t,p.start=c),this.packInterleavedGeometry(v,s,u,d,c),d+=v.vertexData.length/2*f,c+=v.indices.length,p.blend=y}n<i&&(p.size=c-p.start,++h),this._dcIndex=h,this._aIndex=d,this._iIndex=c},r.prototype.bindAndClearTexArray=function(t){for(var n=this.renderer.texture,i=0;i<t.count;i++)n.bind(t.elements[i],t.ids[i]),t.elements[i]=null;t.count=0},r.prototype.updateGeometry=function(){var t=this,n=t._packedGeometries,i=t._attributeBuffer,o=t._indexBuffer;T.CAN_UPLOAD_SAME_BUFFER?(n[this._flushId]._buffer.update(i.rawBinaryData),n[this._flushId]._indexBuffer.update(o),this.renderer.geometry.updateBuffers()):(this._packedGeometryPoolSize<=this._flushId&&(this._packedGeometryPoolSize++,n[this._flushId]=new this.geometryClass),n[this._flushId]._buffer.update(i.rawBinaryData),n[this._flushId]._indexBuffer.update(o),this.renderer.geometry.bind(n[this._flushId]),this.renderer.geometry.updateBuffers(),this._flushId++)},r.prototype.drawBatches=function(){for(var t=this._dcIndex,n=this.renderer,i=n.gl,o=n.state,a=r._drawCallPool,s=null,u=0;u<t;u++){var f=a[u],l=f.texArray,h=f.type,d=f.size,c=f.start,p=f.blend;s!==l&&(s=l,this.bindAndClearTexArray(l)),this.state.blendMode=p,o.set(this.state),i.drawElements(h,d,i.UNSIGNED_SHORT,c*2)}},r.prototype.flush=function(){this._vertexCount!==0&&(this._attributeBuffer=this.getAttributeBuffer(this._vertexCount),this._indexBuffer=this.getIndexBuffer(this._indexCount),this._aIndex=0,this._iIndex=0,this._dcIndex=0,this.buildTexturesAndDrawCalls(),this.updateGeometry(),this.drawBatches(),this._bufferSize=0,this._vertexCount=0,this._indexCount=0)},r.prototype.start=function(){this.renderer.state.set(this.state),this.renderer.texture.ensureSamplerType(this.MAX_TEXTURES),this.renderer.shader.bind(this._shader),T.CAN_UPLOAD_SAME_BUFFER&&this.renderer.geometry.bind(this._packedGeometries[this._flushId])},r.prototype.stop=function(){this.flush()},r.prototype.destroy=function(){for(var t=0;t<this._packedGeometryPoolSize;t++)this._packedGeometries[t]&&this._packedGeometries[t].destroy();this.renderer.off("prerender",this.onPrerender,this),this._aBuffers=null,this._iBuffers=null,this._packedGeometries=null,this._attributeBuffer=null,this._indexBuffer=null,this._shader&&(this._shader.destroy(),this._shader=null),e.prototype.destroy.call(this)},r.prototype.getAttributeBuffer=function(t){var n=ce(Math.ceil(t/8)),i=Bn(n),o=n*8;this._aBuffers.length<=i&&(this._iBuffers.length=i+1);var a=this._aBuffers[o];return a||(this._aBuffers[o]=a=new as(o*this.vertexSize*4)),a},r.prototype.getIndexBuffer=function(t){var n=ce(Math.ceil(t/12)),i=Bn(n),o=n*12;this._iBuffers.length<=i&&(this._iBuffers.length=i+1);var a=this._iBuffers[i];return a||(this._iBuffers[i]=a=new Uint16Array(o)),a},r.prototype.packInterleavedGeometry=function(t,n,i,o,a){for(var s=n.uint32View,u=n.float32View,f=o/this.vertexSize,l=t.uvs,h=t.indices,d=t.vertexData,c=t._texture.baseTexture._batchLocation,p=Math.min(t.worldAlpha,1),_=p<1&&t._texture.baseTexture.alphaMode?$o(t._tintRGB,p):t._tintRGB+(p*255<<24),v=0;v<d.length;v+=2)u[o++]=d[v],u[o++]=d[v+1],u[o++]=l[v],u[o++]=l[v+1],s[o++]=_,u[o++]=c;for(var v=0;v<h.length;v++)i[a++]=f+h[v]},r._drawCallPool=[],r._textureArrayPool=[],r}(ri),us=function(){function e(r,t){if(this.vertexSrc=r,this.fragTemplate=t,this.programCache={},this.defaultGroupCache={},t.indexOf("%count%")<0)throw new Error('Fragment template must contain "%count%".');if(t.indexOf("%forloop%")<0)throw new Error('Fragment template must contain "%forloop%".')}return e.prototype.generateShader=function(r){if(!this.programCache[r]){for(var t=new Int32Array(r),n=0;n<r;n++)t[n]=n;this.defaultGroupCache[r]=zt.from({uSamplers:t},!0);var i=this.fragTemplate;i=i.replace(/%count%/gi,""+r),i=i.replace(/%forloop%/gi,this.generateSampleSrc(r)),this.programCache[r]=new lr(this.vertexSrc,i)}var o={tint:new Float32Array([1,1,1,1]),translationMatrix:new Q,default:this.defaultGroupCache[r]};return new mi(this.programCache[r],o)},e.prototype.generateSampleSrc=function(r){var t="";t+=`
`,t+=`
`;for(var n=0;n<r;n++)n>0&&(t+=`
else `),n<r-1&&(t+="if(vTextureId < "+n+".5)"),t+=`
{`,t+=`
	color = texture2D(uSamplers[`+n+"], vTextureCoord);",t+=`
}`;return t+=`
`,t+=`
`,t},e}(),fs=function(e){N(r,e);function r(t){t===void 0&&(t=!1);var n=e.call(this)||this;return n._buffer=new q(null,t,!1),n._indexBuffer=new q(null,t,!0),n.addAttribute("aVertexPosition",n._buffer,2,!1,R.FLOAT).addAttribute("aTextureCoord",n._buffer,2,!1,R.FLOAT).addAttribute("aColor",n._buffer,4,!0,R.UNSIGNED_BYTE).addAttribute("aTextureId",n._buffer,1,!0,R.FLOAT).addIndex(n._indexBuffer),n}return r}(ar),Oi=`precision highp float;
attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;
attribute float aTextureId;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform vec4 tint;

varying vec2 vTextureCoord;
varying vec4 vColor;
varying float vTextureId;

void main(void){
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vTextureId = aTextureId;
    vColor = aColor * tint;
}
`,Pi=`varying vec2 vTextureCoord;
varying vec4 vColor;
varying float vTextureId;
uniform sampler2D uSamplers[%count%];

void main(void){
    vec4 color;
    %forloop%
    gl_FragColor = color * vColor;
}
`,ls=function(){function e(){}return e.create=function(r){var t=Object.assign({vertex:Oi,fragment:Pi,geometryClass:fs,vertexSize:6},r),n=t.vertex,i=t.fragment,o=t.vertexSize,a=t.geometryClass;return function(s){N(u,s);function u(f){var l=s.call(this,f)||this;return l.shaderGenerator=new us(n,i),l.geometryClass=a,l.vertexSize=o,l}return u}(ss)},Object.defineProperty(e,"defaultVertexSrc",{get:function(){return Oi},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultFragmentTemplate",{get:function(){return Pi},enumerable:!1,configurable:!0}),e}();ls.create();var hs={},cs=function(e){Object.defineProperty(hs,e,{get:function(){return Rt("6.0.0","PIXI.systems."+e+" has moved to PIXI."+e),Zn[e]}})};for(var xr in Zn)cs(xr);var ds={},ps=function(e){Object.defineProperty(ds,e,{get:function(){return Rt("6.0.0","PIXI.resources."+e+" has moved to PIXI."+e),Ni[e]}})};for(var xr in Ni)ps(xr);/*!
 * @pixi/filter-adjustment - v4.1.3
 * Compiled Thu, 17 Jun 2021 19:33:56 UTC
 *
 * @pixi/filter-adjustment is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var br=function(e,r){return br=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},br(e,r)};function vs(e,r){br(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var ms=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,ys=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform float gamma;
uniform float contrast;
uniform float saturation;
uniform float brightness;
uniform float red;
uniform float green;
uniform float blue;
uniform float alpha;

void main(void)
{
    vec4 c = texture2D(uSampler, vTextureCoord);

    if (c.a > 0.0) {
        c.rgb /= c.a;

        vec3 rgb = pow(c.rgb, vec3(1. / gamma));
        rgb = mix(vec3(.5), mix(vec3(dot(vec3(.2125, .7154, .0721), rgb)), rgb, saturation), contrast);
        rgb.r *= red;
        rgb.g *= green;
        rgb.b *= blue;
        c.rgb = rgb * brightness;

        c.rgb *= c.a;
    }

    gl_FragColor = c * alpha;
}
`;(function(e){vs(r,e);function r(t){var n=e.call(this,ms,ys)||this;return n.gamma=1,n.saturation=1,n.contrast=1,n.brightness=1,n.red=1,n.green=1,n.blue=1,n.alpha=1,Object.assign(n,t),n}return r.prototype.apply=function(t,n,i,o){this.uniforms.gamma=Math.max(this.gamma,1e-4),this.uniforms.saturation=this.saturation,this.uniforms.contrast=this.contrast,this.uniforms.brightness=this.brightness,this.uniforms.red=this.red,this.uniforms.green=this.green,this.uniforms.blue=this.blue,this.uniforms.alpha=this.alpha,t.applyFilter(this,n,i,o)},r})(I);/*!
 * @pixi/filter-kawase-blur - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-kawase-blur is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Tr=function(e,r){return Tr=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},Tr(e,r)};function _s(e,r){Tr(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var gs=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,xs=`
varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec2 uOffset;

void main(void)
{
    vec4 color = vec4(0.0);

    // Sample top left pixel
    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample top right pixel
    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample bottom right pixel
    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y));

    // Sample bottom left pixel
    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y));

    // Average
    color *= 0.25;

    gl_FragColor = color;
}`,bs=`
varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec2 uOffset;
uniform vec4 filterClamp;

void main(void)
{
    vec4 color = vec4(0.0);

    // Sample top left pixel
    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));

    // Sample top right pixel
    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));

    // Sample bottom right pixel
    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));

    // Sample bottom left pixel
    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));

    // Average
    color *= 0.25;

    gl_FragColor = color;
}
`,Re=function(e){_s(r,e);function r(t,n,i){t===void 0&&(t=4),n===void 0&&(n=3),i===void 0&&(i=!1);var o=e.call(this,gs,i?bs:xs)||this;return o._kernels=[],o._blur=4,o._quality=3,o.uniforms.uOffset=new Float32Array(2),o._pixelSize=new M,o.pixelSize=1,o._clamp=i,Array.isArray(t)?o.kernels=t:(o._blur=t,o.quality=n),o}return r.prototype.apply=function(t,n,i,o){var a=this._pixelSize.x/n._frame.width,s=this._pixelSize.y/n._frame.height,u;if(this._quality===1||this._blur===0)u=this._kernels[0]+.5,this.uniforms.uOffset[0]=u*a,this.uniforms.uOffset[1]=u*s,t.applyFilter(this,n,i,o);else{for(var f=t.getFilterTexture(),l=n,h=f,d=void 0,c=this._quality-1,p=0;p<c;p++)u=this._kernels[p]+.5,this.uniforms.uOffset[0]=u*a,this.uniforms.uOffset[1]=u*s,t.applyFilter(this,l,h,1),d=l,l=h,h=d;u=this._kernels[c]+.5,this.uniforms.uOffset[0]=u*a,this.uniforms.uOffset[1]=u*s,t.applyFilter(this,l,i,o),t.returnFilterTexture(f)}},r.prototype._updatePadding=function(){this.padding=Math.ceil(this._kernels.reduce(function(t,n){return t+n+.5},0))},r.prototype._generateKernels=function(){var t=this._blur,n=this._quality,i=[t];if(t>0)for(var o=t,a=t/n,s=1;s<n;s++)o-=a,i.push(o);this._kernels=i,this._updatePadding()},Object.defineProperty(r.prototype,"kernels",{get:function(){return this._kernels},set:function(t){Array.isArray(t)&&t.length>0?(this._kernels=t,this._quality=t.length,this._blur=Math.max.apply(Math,t)):(this._kernels=[0],this._quality=1)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"clamp",{get:function(){return this._clamp},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"pixelSize",{get:function(){return this._pixelSize},set:function(t){typeof t=="number"?(this._pixelSize.x=t,this._pixelSize.y=t):Array.isArray(t)?(this._pixelSize.x=t[0],this._pixelSize.y=t[1]):t instanceof M?(this._pixelSize.x=t.x,this._pixelSize.y=t.y):(this._pixelSize.x=1,this._pixelSize.y=1)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"quality",{get:function(){return this._quality},set:function(t){this._quality=Math.max(1,Math.round(t)),this._generateKernels()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"blur",{get:function(){return this._blur},set:function(t){this._blur=t,this._generateKernels()},enumerable:!1,configurable:!0}),r}(I);/*!
 * @pixi/filter-advanced-bloom - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-advanced-bloom is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Cr=function(e,r){return Cr=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},Cr(e,r)};function Fi(e,r){Cr(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var Si=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Ts=`
uniform sampler2D uSampler;
varying vec2 vTextureCoord;

uniform float threshold;

void main() {
    vec4 color = texture2D(uSampler, vTextureCoord);

    // A simple & fast algorithm for getting brightness.
    // It's inaccuracy , but good enought for this feature.
    float _max = max(max(color.r, color.g), color.b);
    float _min = min(min(color.r, color.g), color.b);
    float brightness = (_max + _min) * 0.5;

    if(brightness > threshold) {
        gl_FragColor = color;
    } else {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
    }
}
`,Cs=function(e){Fi(r,e);function r(t){t===void 0&&(t=.5);var n=e.call(this,Si,Ts)||this;return n.threshold=t,n}return Object.defineProperty(r.prototype,"threshold",{get:function(){return this.uniforms.threshold},set:function(t){this.uniforms.threshold=t},enumerable:!1,configurable:!0}),r}(I),Is=`uniform sampler2D uSampler;
varying vec2 vTextureCoord;

uniform sampler2D bloomTexture;
uniform float bloomScale;
uniform float brightness;

void main() {
    vec4 color = texture2D(uSampler, vTextureCoord);
    color.rgb *= brightness;
    vec4 bloomColor = vec4(texture2D(bloomTexture, vTextureCoord).rgb, 0.0);
    bloomColor.rgb *= bloomScale;
    gl_FragColor = color + bloomColor;
}
`;(function(e){Fi(r,e);function r(t){var n=e.call(this,Si,Is)||this;n.bloomScale=1,n.brightness=1,n._resolution=T.FILTER_RESOLUTION,typeof t=="number"&&(t={threshold:t});var i=Object.assign(r.defaults,t);n.bloomScale=i.bloomScale,n.brightness=i.brightness;var o=i.kernels,a=i.blur,s=i.quality,u=i.pixelSize,f=i.resolution;return n._extractFilter=new Cs(i.threshold),n._extractFilter.resolution=f,n._blurFilter=o?new Re(o):new Re(a,s),n.pixelSize=u,n.resolution=f,n}return r.prototype.apply=function(t,n,i,o,a){var s=t.getFilterTexture();this._extractFilter.apply(t,n,s,1,a);var u=t.getFilterTexture();this._blurFilter.apply(t,s,u,1),this.uniforms.bloomScale=this.bloomScale,this.uniforms.brightness=this.brightness,this.uniforms.bloomTexture=u,t.applyFilter(this,n,i,o),t.returnFilterTexture(u),t.returnFilterTexture(s)},Object.defineProperty(r.prototype,"resolution",{get:function(){return this._resolution},set:function(t){this._resolution=t,this._extractFilter&&(this._extractFilter.resolution=t),this._blurFilter&&(this._blurFilter.resolution=t)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"threshold",{get:function(){return this._extractFilter.threshold},set:function(t){this._extractFilter.threshold=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"kernels",{get:function(){return this._blurFilter.kernels},set:function(t){this._blurFilter.kernels=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"blur",{get:function(){return this._blurFilter.blur},set:function(t){this._blurFilter.blur=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"quality",{get:function(){return this._blurFilter.quality},set:function(t){this._blurFilter.quality=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"pixelSize",{get:function(){return this._blurFilter.pixelSize},set:function(t){this._blurFilter.pixelSize=t},enumerable:!1,configurable:!0}),r.defaults={threshold:.5,bloomScale:1,brightness:1,kernels:null,blur:8,quality:4,pixelSize:1,resolution:T.FILTER_RESOLUTION},r})(I);/*!
 * @pixi/filter-ascii - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-ascii is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Ir=function(e,r){return Ir=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},Ir(e,r)};function Rs(e,r){Ir(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var ws=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,As=`varying vec2 vTextureCoord;

uniform vec4 filterArea;
uniform float pixelSize;
uniform sampler2D uSampler;

vec2 mapCoord( vec2 coord )
{
    coord *= filterArea.xy;
    coord += filterArea.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= filterArea.zw;
    coord /= filterArea.xy;

    return coord;
}

vec2 pixelate(vec2 coord, vec2 size)
{
    return floor( coord / size ) * size;
}

vec2 getMod(vec2 coord, vec2 size)
{
    return mod( coord , size) / size;
}

float character(float n, vec2 p)
{
    p = floor(p*vec2(4.0, -4.0) + 2.5);

    if (clamp(p.x, 0.0, 4.0) == p.x)
    {
        if (clamp(p.y, 0.0, 4.0) == p.y)
        {
            if (int(mod(n/exp2(p.x + 5.0*p.y), 2.0)) == 1) return 1.0;
        }
    }
    return 0.0;
}

void main()
{
    vec2 coord = mapCoord(vTextureCoord);

    // get the rounded color..
    vec2 pixCoord = pixelate(coord, vec2(pixelSize));
    pixCoord = unmapCoord(pixCoord);

    vec4 color = texture2D(uSampler, pixCoord);

    // determine the character to use
    float gray = (color.r + color.g + color.b) / 3.0;

    float n =  65536.0;             // .
    if (gray > 0.2) n = 65600.0;    // :
    if (gray > 0.3) n = 332772.0;   // *
    if (gray > 0.4) n = 15255086.0; // o
    if (gray > 0.5) n = 23385164.0; // &
    if (gray > 0.6) n = 15252014.0; // 8
    if (gray > 0.7) n = 13199452.0; // @
    if (gray > 0.8) n = 11512810.0; // #

    // get the mod..
    vec2 modd = getMod(coord, vec2(pixelSize));

    gl_FragColor = color * character( n, vec2(-1.0) + modd * 2.0);

}
`;(function(e){Rs(r,e);function r(t){t===void 0&&(t=8);var n=e.call(this,ws,As)||this;return n.size=t,n}return Object.defineProperty(r.prototype,"size",{get:function(){return this.uniforms.pixelSize},set:function(t){this.uniforms.pixelSize=t},enumerable:!1,configurable:!0}),r})(I);/*!
 * @pixi/filter-bevel - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-bevel is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Rr=function(e,r){return Rr=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},Rr(e,r)};function Es(e,r){Rr(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var Ns=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Os=`precision mediump float;

varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;

uniform float transformX;
uniform float transformY;
uniform vec3 lightColor;
uniform float lightAlpha;
uniform vec3 shadowColor;
uniform float shadowAlpha;

void main(void) {
    vec2 transform = vec2(1.0 / filterArea) * vec2(transformX, transformY);
    vec4 color = texture2D(uSampler, vTextureCoord);
    float light = texture2D(uSampler, vTextureCoord - transform).a;
    float shadow = texture2D(uSampler, vTextureCoord + transform).a;

    color.rgb = mix(color.rgb, lightColor, clamp((color.a - light) * lightAlpha, 0.0, 1.0));
    color.rgb = mix(color.rgb, shadowColor, clamp((color.a - shadow) * shadowAlpha, 0.0, 1.0));
    gl_FragColor = vec4(color.rgb * color.a, color.a);
}
`;(function(e){Es(r,e);function r(t){var n=e.call(this,Ns,Os)||this;return n._thickness=2,n._angle=0,n.uniforms.lightColor=new Float32Array(3),n.uniforms.shadowColor=new Float32Array(3),Object.assign(n,{rotation:45,thickness:2,lightColor:16777215,lightAlpha:.7,shadowColor:0,shadowAlpha:.7},t),n.padding=1,n}return r.prototype._updateTransform=function(){this.uniforms.transformX=this._thickness*Math.cos(this._angle),this.uniforms.transformY=this._thickness*Math.sin(this._angle)},Object.defineProperty(r.prototype,"rotation",{get:function(){return this._angle/Bt},set:function(t){this._angle=t*Bt,this._updateTransform()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"thickness",{get:function(){return this._thickness},set:function(t){this._thickness=t,this._updateTransform()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"lightColor",{get:function(){return it(this.uniforms.lightColor)},set:function(t){Y(t,this.uniforms.lightColor)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"lightAlpha",{get:function(){return this.uniforms.lightAlpha},set:function(t){this.uniforms.lightAlpha=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"shadowColor",{get:function(){return it(this.uniforms.shadowColor)},set:function(t){Y(t,this.uniforms.shadowColor)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"shadowAlpha",{get:function(){return this.uniforms.shadowAlpha},set:function(t){this.uniforms.shadowAlpha=t},enumerable:!1,configurable:!0}),r})(I);/*!
 * @pixi/filter-alpha - v6.1.3
 * Compiled Mon, 13 Sep 2021 15:29:31 UTC
 *
 * @pixi/filter-alpha is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var wr=function(e,r){return wr=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},wr(e,r)};function Ps(e,r){wr(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var Fs=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float uAlpha;

void main(void)
{
   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;
}
`,Ss=function(e){Ps(r,e);function r(t){t===void 0&&(t=1);var n=e.call(this,ns,Fs,{uAlpha:1})||this;return n.alpha=t,n}return Object.defineProperty(r.prototype,"alpha",{get:function(){return this.uniforms.uAlpha},set:function(t){this.uniforms.uAlpha=t},enumerable:!1,configurable:!0}),r}(I);/*!
 * @pixi/filter-blur - v6.1.3
 * Compiled Mon, 13 Sep 2021 15:29:31 UTC
 *
 * @pixi/filter-blur is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Ar=function(e,r){return Ar=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},Ar(e,r)};function Ui(e,r){Ar(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var Us=`
    attribute vec2 aVertexPosition;

    uniform mat3 projectionMatrix;

    uniform float strength;

    varying vec2 vBlurTexCoords[%size%];

    uniform vec4 inputSize;
    uniform vec4 outputFrame;

    vec4 filterVertexPosition( void )
    {
        vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

        return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
    }

    vec2 filterTextureCoord( void )
    {
        return aVertexPosition * (outputFrame.zw * inputSize.zw);
    }

    void main(void)
    {
        gl_Position = filterVertexPosition();

        vec2 textureCoord = filterTextureCoord();
        %blur%
    }`;function Ls(e,r){var t=Math.ceil(e/2),n=Us,i="",o;r?o="vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * strength, 0.0);":o="vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * strength);";for(var a=0;a<e;a++){var s=o.replace("%index%",a.toString());s=s.replace("%sampleIndex%",a-(t-1)+".0"),i+=s,i+=`
`}return n=n.replace("%blur%",i),n=n.replace("%size%",e.toString()),n}var Gs={5:[.153388,.221461,.250301],7:[.071303,.131514,.189879,.214607],9:[.028532,.067234,.124009,.179044,.20236],11:[.0093,.028002,.065984,.121703,.175713,.198596],13:[.002406,.009255,.027867,.065666,.121117,.174868,.197641],15:[489e-6,.002403,.009246,.02784,.065602,.120999,.174697,.197448]},Ms=["varying vec2 vBlurTexCoords[%size%];","uniform sampler2D uSampler;","void main(void)","{","    gl_FragColor = vec4(0.0);","    %blur%","}"].join(`
`);function js(e){for(var r=Gs[e],t=r.length,n=Ms,i="",o="gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;",a,s=0;s<e;s++){var u=o.replace("%index%",s.toString());a=s,s>=t&&(a=e-s-1),u=u.replace("%value%",r[a].toString()),i+=u,i+=`
`}return n=n.replace("%blur%",i),n=n.replace("%size%",e.toString()),n}/*!
 * @pixi/constants - v6.1.3
 * Compiled Mon, 13 Sep 2021 15:29:31 UTC
 *
 * @pixi/constants is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Li;(function(e){e[e.WEBGL_LEGACY=0]="WEBGL_LEGACY",e[e.WEBGL=1]="WEBGL",e[e.WEBGL2=2]="WEBGL2"})(Li||(Li={}));var Gi;(function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.WEBGL=1]="WEBGL",e[e.CANVAS=2]="CANVAS"})(Gi||(Gi={}));var Mi;(function(e){e[e.COLOR=16384]="COLOR",e[e.DEPTH=256]="DEPTH",e[e.STENCIL=1024]="STENCIL"})(Mi||(Mi={}));var ji;(function(e){e[e.NORMAL=0]="NORMAL",e[e.ADD=1]="ADD",e[e.MULTIPLY=2]="MULTIPLY",e[e.SCREEN=3]="SCREEN",e[e.OVERLAY=4]="OVERLAY",e[e.DARKEN=5]="DARKEN",e[e.LIGHTEN=6]="LIGHTEN",e[e.COLOR_DODGE=7]="COLOR_DODGE",e[e.COLOR_BURN=8]="COLOR_BURN",e[e.HARD_LIGHT=9]="HARD_LIGHT",e[e.SOFT_LIGHT=10]="SOFT_LIGHT",e[e.DIFFERENCE=11]="DIFFERENCE",e[e.EXCLUSION=12]="EXCLUSION",e[e.HUE=13]="HUE",e[e.SATURATION=14]="SATURATION",e[e.COLOR=15]="COLOR",e[e.LUMINOSITY=16]="LUMINOSITY",e[e.NORMAL_NPM=17]="NORMAL_NPM",e[e.ADD_NPM=18]="ADD_NPM",e[e.SCREEN_NPM=19]="SCREEN_NPM",e[e.NONE=20]="NONE",e[e.SRC_OVER=0]="SRC_OVER",e[e.SRC_IN=21]="SRC_IN",e[e.SRC_OUT=22]="SRC_OUT",e[e.SRC_ATOP=23]="SRC_ATOP",e[e.DST_OVER=24]="DST_OVER",e[e.DST_IN=25]="DST_IN",e[e.DST_OUT=26]="DST_OUT",e[e.DST_ATOP=27]="DST_ATOP",e[e.ERASE=26]="ERASE",e[e.SUBTRACT=28]="SUBTRACT",e[e.XOR=29]="XOR"})(ji||(ji={}));var Bi;(function(e){e[e.POINTS=0]="POINTS",e[e.LINES=1]="LINES",e[e.LINE_LOOP=2]="LINE_LOOP",e[e.LINE_STRIP=3]="LINE_STRIP",e[e.TRIANGLES=4]="TRIANGLES",e[e.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",e[e.TRIANGLE_FAN=6]="TRIANGLE_FAN"})(Bi||(Bi={}));var ki;(function(e){e[e.RGBA=6408]="RGBA",e[e.RGB=6407]="RGB",e[e.RG=33319]="RG",e[e.RED=6403]="RED",e[e.RGBA_INTEGER=36249]="RGBA_INTEGER",e[e.RGB_INTEGER=36248]="RGB_INTEGER",e[e.RG_INTEGER=33320]="RG_INTEGER",e[e.RED_INTEGER=36244]="RED_INTEGER",e[e.ALPHA=6406]="ALPHA",e[e.LUMINANCE=6409]="LUMINANCE",e[e.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",e[e.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",e[e.DEPTH_STENCIL=34041]="DEPTH_STENCIL"})(ki||(ki={}));var zi;(function(e){e[e.TEXTURE_2D=3553]="TEXTURE_2D",e[e.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",e[e.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY",e[e.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",e[e.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",e[e.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",e[e.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",e[e.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",e[e.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z"})(zi||(zi={}));var Vi;(function(e){e[e.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",e[e.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",e[e.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",e[e.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",e[e.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",e[e.UNSIGNED_INT=5125]="UNSIGNED_INT",e[e.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",e[e.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",e[e.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",e[e.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",e[e.BYTE=5120]="BYTE",e[e.SHORT=5122]="SHORT",e[e.INT=5124]="INT",e[e.FLOAT=5126]="FLOAT",e[e.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV",e[e.HALF_FLOAT=36193]="HALF_FLOAT"})(Vi||(Vi={}));var Xi;(function(e){e[e.FLOAT=0]="FLOAT",e[e.INT=1]="INT",e[e.UINT=2]="UINT"})(Xi||(Xi={}));var Hi;(function(e){e[e.NEAREST=0]="NEAREST",e[e.LINEAR=1]="LINEAR"})(Hi||(Hi={}));var Di;(function(e){e[e.CLAMP=33071]="CLAMP",e[e.REPEAT=10497]="REPEAT",e[e.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"})(Di||(Di={}));var $i;(function(e){e[e.OFF=0]="OFF",e[e.POW2=1]="POW2",e[e.ON=2]="ON",e[e.ON_MANUAL=3]="ON_MANUAL"})($i||($i={}));var Wi;(function(e){e[e.NPM=0]="NPM",e[e.UNPACK=1]="UNPACK",e[e.PMA=2]="PMA",e[e.NO_PREMULTIPLIED_ALPHA=0]="NO_PREMULTIPLIED_ALPHA",e[e.PREMULTIPLY_ON_UPLOAD=1]="PREMULTIPLY_ON_UPLOAD",e[e.PREMULTIPLY_ALPHA=2]="PREMULTIPLY_ALPHA"})(Wi||(Wi={}));var ee;(function(e){e[e.NO=0]="NO",e[e.YES=1]="YES",e[e.AUTO=2]="AUTO",e[e.BLEND=0]="BLEND",e[e.CLEAR=1]="CLEAR",e[e.BLIT=2]="BLIT"})(ee||(ee={}));var qi;(function(e){e[e.AUTO=0]="AUTO",e[e.MANUAL=1]="MANUAL"})(qi||(qi={}));var Zi;(function(e){e.LOW="lowp",e.MEDIUM="mediump",e.HIGH="highp"})(Zi||(Zi={}));var Ki;(function(e){e[e.NONE=0]="NONE",e[e.SCISSOR=1]="SCISSOR",e[e.STENCIL=2]="STENCIL",e[e.SPRITE=3]="SPRITE"})(Ki||(Ki={}));var Ji;(function(e){e[e.NONE=0]="NONE",e[e.LOW=2]="LOW",e[e.MEDIUM=4]="MEDIUM",e[e.HIGH=8]="HIGH"})(Ji||(Ji={}));var Yi;(function(e){e[e.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",e[e.ARRAY_BUFFER=34962]="ARRAY_BUFFER",e[e.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER"})(Yi||(Yi={}));var we=function(e){Ui(r,e);function r(t,n,i,o,a){n===void 0&&(n=8),i===void 0&&(i=4),o===void 0&&(o=T.FILTER_RESOLUTION),a===void 0&&(a=5);var s=this,u=Ls(a,t),f=js(a);return s=e.call(this,u,f)||this,s.horizontal=t,s.resolution=o,s._quality=0,s.quality=i,s.blur=n,s}return r.prototype.apply=function(t,n,i,o){if(i?this.horizontal?this.uniforms.strength=1/i.width*(i.width/n.width):this.uniforms.strength=1/i.height*(i.height/n.height):this.horizontal?this.uniforms.strength=1/t.renderer.width*(t.renderer.width/n.width):this.uniforms.strength=1/t.renderer.height*(t.renderer.height/n.height),this.uniforms.strength*=this.strength,this.uniforms.strength/=this.passes,this.passes===1)t.applyFilter(this,n,i,o);else{var a=t.getFilterTexture(),s=t.renderer,u=n,f=a;this.state.blend=!1,t.applyFilter(this,u,f,ee.CLEAR);for(var l=1;l<this.passes-1;l++){t.bindAndClear(u,ee.BLIT),this.uniforms.uSampler=f;var h=f;f=u,u=h,s.shader.bind(this),s.geometry.draw(5)}this.state.blend=!0,t.applyFilter(this,f,i,o),t.returnFilterTexture(a)}},Object.defineProperty(r.prototype,"blur",{get:function(){return this.strength},set:function(t){this.padding=1+Math.abs(t)*2,this.strength=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"quality",{get:function(){return this._quality},set:function(t){this._quality=t,this.passes=t},enumerable:!1,configurable:!0}),r}(I);(function(e){Ui(r,e);function r(t,n,i,o){t===void 0&&(t=8),n===void 0&&(n=4),i===void 0&&(i=T.FILTER_RESOLUTION),o===void 0&&(o=5);var a=e.call(this)||this;return a.blurXFilter=new we(!0,t,n,i,o),a.blurYFilter=new we(!1,t,n,i,o),a.resolution=i,a.quality=n,a.blur=t,a.repeatEdgePixels=!1,a}return r.prototype.apply=function(t,n,i,o){var a=Math.abs(this.blurXFilter.strength),s=Math.abs(this.blurYFilter.strength);if(a&&s){var u=t.getFilterTexture();this.blurXFilter.apply(t,n,u,ee.CLEAR),this.blurYFilter.apply(t,u,i,o),t.returnFilterTexture(u)}else s?this.blurYFilter.apply(t,n,i,o):this.blurXFilter.apply(t,n,i,o)},r.prototype.updatePadding=function(){this._repeatEdgePixels?this.padding=0:this.padding=Math.max(Math.abs(this.blurXFilter.strength),Math.abs(this.blurYFilter.strength))*2},Object.defineProperty(r.prototype,"blur",{get:function(){return this.blurXFilter.blur},set:function(t){this.blurXFilter.blur=this.blurYFilter.blur=t,this.updatePadding()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"quality",{get:function(){return this.blurXFilter.quality},set:function(t){this.blurXFilter.quality=this.blurYFilter.quality=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"blurX",{get:function(){return this.blurXFilter.blur},set:function(t){this.blurXFilter.blur=t,this.updatePadding()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"blurY",{get:function(){return this.blurYFilter.blur},set:function(t){this.blurYFilter.blur=t,this.updatePadding()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"blendMode",{get:function(){return this.blurYFilter.blendMode},set:function(t){this.blurYFilter.blendMode=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"repeatEdgePixels",{get:function(){return this._repeatEdgePixels},set:function(t){this._repeatEdgePixels=t,this.updatePadding()},enumerable:!1,configurable:!0}),r})(I);/*!
 * @pixi/filter-bloom - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-bloom is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Er=function(e,r){return Er=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},Er(e,r)};function Bs(e,r){Er(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}(function(e){Bs(r,e);function r(t,n,i,o){t===void 0&&(t=2),n===void 0&&(n=4),i===void 0&&(i=T.FILTER_RESOLUTION),o===void 0&&(o=5);var a=e.call(this)||this,s,u;return typeof t=="number"?(s=t,u=t):t instanceof M?(s=t.x,u=t.y):Array.isArray(t)&&(s=t[0],u=t[1]),a.blurXFilter=new we(!0,s,n,i,o),a.blurYFilter=new we(!1,u,n,i,o),a.blurYFilter.blendMode=b.SCREEN,a.defaultFilter=new Ss,a}return r.prototype.apply=function(t,n,i,o){var a=t.getFilterTexture();this.defaultFilter.apply(t,n,i,o),this.blurXFilter.apply(t,n,a,1),this.blurYFilter.apply(t,a,i,0),t.returnFilterTexture(a)},Object.defineProperty(r.prototype,"blur",{get:function(){return this.blurXFilter.blur},set:function(t){this.blurXFilter.blur=this.blurYFilter.blur=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"blurX",{get:function(){return this.blurXFilter.blur},set:function(t){this.blurXFilter.blur=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"blurY",{get:function(){return this.blurYFilter.blur},set:function(t){this.blurYFilter.blur=t},enumerable:!1,configurable:!0}),r})(I);/*!
 * @pixi/filter-bulge-pinch - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-bulge-pinch is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Nr=function(e,r){return Nr=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},Nr(e,r)};function ks(e,r){Nr(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var zs=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Vs=`uniform float radius;
uniform float strength;
uniform vec2 center;
uniform sampler2D uSampler;
varying vec2 vTextureCoord;

uniform vec4 filterArea;
uniform vec4 filterClamp;
uniform vec2 dimensions;

void main()
{
    vec2 coord = vTextureCoord * filterArea.xy;
    coord -= center * dimensions.xy;
    float distance = length(coord);
    if (distance < radius) {
        float percent = distance / radius;
        if (strength > 0.0) {
            coord *= mix(1.0, smoothstep(0.0, radius / distance, percent), strength * 0.75);
        } else {
            coord *= mix(1.0, pow(percent, 1.0 + strength * 0.75) * radius / distance, 1.0 - percent);
        }
    }
    coord += center * dimensions.xy;
    coord /= filterArea.xy;
    vec2 clampedCoord = clamp(coord, filterClamp.xy, filterClamp.zw);
    vec4 color = texture2D(uSampler, clampedCoord);
    if (coord != clampedCoord) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    gl_FragColor = color;
}
`;(function(e){ks(r,e);function r(t){var n=e.call(this,zs,Vs)||this;return n.uniforms.dimensions=new Float32Array(2),Object.assign(n,r.defaults,t),n}return r.prototype.apply=function(t,n,i,o){var a=n.filterFrame,s=a.width,u=a.height;this.uniforms.dimensions[0]=s,this.uniforms.dimensions[1]=u,t.applyFilter(this,n,i,o)},Object.defineProperty(r.prototype,"radius",{get:function(){return this.uniforms.radius},set:function(t){this.uniforms.radius=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"strength",{get:function(){return this.uniforms.strength},set:function(t){this.uniforms.strength=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"center",{get:function(){return this.uniforms.center},set:function(t){this.uniforms.center=t},enumerable:!1,configurable:!0}),r.defaults={center:[.5,.5],radius:100,strength:1},r})(I);/*!
 * @pixi/filter-color-map - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-color-map is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Or=function(e,r){return Or=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},Or(e,r)};function Xs(e,r){Or(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var Hs=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Ds=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform sampler2D colorMap;
uniform float _mix;
uniform float _size;
uniform float _sliceSize;
uniform float _slicePixelSize;
uniform float _sliceInnerSize;
void main() {
    vec4 color = texture2D(uSampler, vTextureCoord.xy);

    vec4 adjusted;
    if (color.a > 0.0) {
        color.rgb /= color.a;
        float innerWidth = _size - 1.0;
        float zSlice0 = min(floor(color.b * innerWidth), innerWidth);
        float zSlice1 = min(zSlice0 + 1.0, innerWidth);
        float xOffset = _slicePixelSize * 0.5 + color.r * _sliceInnerSize;
        float s0 = xOffset + (zSlice0 * _sliceSize);
        float s1 = xOffset + (zSlice1 * _sliceSize);
        float yOffset = _sliceSize * 0.5 + color.g * (1.0 - _sliceSize);
        vec4 slice0Color = texture2D(colorMap, vec2(s0,yOffset));
        vec4 slice1Color = texture2D(colorMap, vec2(s1,yOffset));
        float zOffset = fract(color.b * innerWidth);
        adjusted = mix(slice0Color, slice1Color, zOffset);

        color.rgb *= color.a;
    }
    gl_FragColor = vec4(mix(color, adjusted, _mix).rgb, color.a);

}`;(function(e){Xs(r,e);function r(t,n,i){n===void 0&&(n=!1),i===void 0&&(i=1);var o=e.call(this,Hs,Ds)||this;return o.mix=1,o._size=0,o._sliceSize=0,o._slicePixelSize=0,o._sliceInnerSize=0,o._nearest=!1,o._scaleMode=null,o._colorMap=null,o._scaleMode=null,o.nearest=n,o.mix=i,o.colorMap=t,o}return r.prototype.apply=function(t,n,i,o){this.uniforms._mix=this.mix,t.applyFilter(this,n,i,o)},Object.defineProperty(r.prototype,"colorSize",{get:function(){return this._size},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"colorMap",{get:function(){return this._colorMap},set:function(t){var n;!t||(t instanceof tt||(t=tt.from(t)),((n=t)===null||n===void 0?void 0:n.baseTexture)&&(t.baseTexture.scaleMode=this._scaleMode,t.baseTexture.mipmap=dt.OFF,this._size=t.height,this._sliceSize=1/this._size,this._slicePixelSize=this._sliceSize/this._size,this._sliceInnerSize=this._slicePixelSize*(this._size-1),this.uniforms._size=this._size,this.uniforms._sliceSize=this._sliceSize,this.uniforms._slicePixelSize=this._slicePixelSize,this.uniforms._sliceInnerSize=this._sliceInnerSize,this.uniforms.colorMap=t),this._colorMap=t)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"nearest",{get:function(){return this._nearest},set:function(t){this._nearest=t,this._scaleMode=t?J.NEAREST:J.LINEAR;var n=this._colorMap;n&&n.baseTexture&&(n.baseTexture._glTextures={},n.baseTexture.scaleMode=this._scaleMode,n.baseTexture.mipmap=dt.OFF,n._updateID++,n.baseTexture.emit("update",n.baseTexture))},enumerable:!1,configurable:!0}),r.prototype.updateColorMap=function(){var t=this._colorMap;t&&t.baseTexture&&(t._updateID++,t.baseTexture.emit("update",t.baseTexture),this.colorMap=t)},r.prototype.destroy=function(t){t===void 0&&(t=!1),this._colorMap&&this._colorMap.destroy(t),e.prototype.destroy.call(this)},r})(I);/*!
 * @pixi/filter-color-overlay - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-color-overlay is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Pr=function(e,r){return Pr=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},Pr(e,r)};function $s(e,r){Pr(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var Ws=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,qs=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec3 color;
uniform float alpha;

void main(void) {
    vec4 currentColor = texture2D(uSampler, vTextureCoord);
    gl_FragColor = vec4(mix(currentColor.rgb, color.rgb, currentColor.a * alpha), currentColor.a);
}
`;(function(e){$s(r,e);function r(t,n){t===void 0&&(t=0),n===void 0&&(n=1);var i=e.call(this,Ws,qs)||this;return i._color=0,i._alpha=1,i.uniforms.color=new Float32Array(3),i.color=t,i.alpha=n,i}return Object.defineProperty(r.prototype,"color",{get:function(){return this._color},set:function(t){var n=this.uniforms.color;typeof t=="number"?(Y(t,n),this._color=t):(n[0]=t[0],n[1]=t[1],n[2]=t[2],this._color=it(n))},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"alpha",{get:function(){return this._alpha},set:function(t){this.uniforms.alpha=t,this._alpha=t},enumerable:!1,configurable:!0}),r})(I);/*!
 * @pixi/filter-color-replace - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-color-replace is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Fr=function(e,r){return Fr=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},Fr(e,r)};function Zs(e,r){Fr(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var Ks=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Js=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec3 originalColor;
uniform vec3 newColor;
uniform float epsilon;
void main(void) {
    vec4 currentColor = texture2D(uSampler, vTextureCoord);
    vec3 colorDiff = originalColor - (currentColor.rgb / max(currentColor.a, 0.0000000001));
    float colorDistance = length(colorDiff);
    float doReplace = step(colorDistance, epsilon);
    gl_FragColor = vec4(mix(currentColor.rgb, (newColor + colorDiff) * currentColor.a, doReplace), currentColor.a);
}
`;(function(e){Zs(r,e);function r(t,n,i){t===void 0&&(t=16711680),n===void 0&&(n=0),i===void 0&&(i=.4);var o=e.call(this,Ks,Js)||this;return o._originalColor=16711680,o._newColor=0,o.uniforms.originalColor=new Float32Array(3),o.uniforms.newColor=new Float32Array(3),o.originalColor=t,o.newColor=n,o.epsilon=i,o}return Object.defineProperty(r.prototype,"originalColor",{get:function(){return this._originalColor},set:function(t){var n=this.uniforms.originalColor;typeof t=="number"?(Y(t,n),this._originalColor=t):(n[0]=t[0],n[1]=t[1],n[2]=t[2],this._originalColor=it(n))},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"newColor",{get:function(){return this._newColor},set:function(t){var n=this.uniforms.newColor;typeof t=="number"?(Y(t,n),this._newColor=t):(n[0]=t[0],n[1]=t[1],n[2]=t[2],this._newColor=it(n))},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"epsilon",{get:function(){return this.uniforms.epsilon},set:function(t){this.uniforms.epsilon=t},enumerable:!1,configurable:!0}),r})(I);/*!
 * @pixi/filter-convolution - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-convolution is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Sr=function(e,r){return Sr=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},Sr(e,r)};function Ys(e,r){Sr(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var Qs=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,tu=`precision mediump float;

varying mediump vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec2 texelSize;
uniform float matrix[9];

void main(void)
{
   vec4 c11 = texture2D(uSampler, vTextureCoord - texelSize); // top left
   vec4 c12 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - texelSize.y)); // top center
   vec4 c13 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y - texelSize.y)); // top right

   vec4 c21 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y)); // mid left
   vec4 c22 = texture2D(uSampler, vTextureCoord); // mid center
   vec4 c23 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y)); // mid right

   vec4 c31 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y + texelSize.y)); // bottom left
   vec4 c32 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + texelSize.y)); // bottom center
   vec4 c33 = texture2D(uSampler, vTextureCoord + texelSize); // bottom right

   gl_FragColor =
       c11 * matrix[0] + c12 * matrix[1] + c13 * matrix[2] +
       c21 * matrix[3] + c22 * matrix[4] + c23 * matrix[5] +
       c31 * matrix[6] + c32 * matrix[7] + c33 * matrix[8];

   gl_FragColor.a = c22.a;
}
`;(function(e){Ys(r,e);function r(t,n,i){n===void 0&&(n=200),i===void 0&&(i=200);var o=e.call(this,Qs,tu)||this;return o.uniforms.texelSize=new Float32Array(2),o.uniforms.matrix=new Float32Array(9),t!==void 0&&(o.matrix=t),o.width=n,o.height=i,o}return Object.defineProperty(r.prototype,"matrix",{get:function(){return this.uniforms.matrix},set:function(t){var n=this;t.forEach(function(i,o){n.uniforms.matrix[o]=i})},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"width",{get:function(){return 1/this.uniforms.texelSize[0]},set:function(t){this.uniforms.texelSize[0]=1/t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return 1/this.uniforms.texelSize[1]},set:function(t){this.uniforms.texelSize[1]=1/t},enumerable:!1,configurable:!0}),r})(I);/*!
 * @pixi/filter-cross-hatch - v4.1.3
 * Compiled Thu, 17 Jun 2021 19:33:56 UTC
 *
 * @pixi/filter-cross-hatch is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Ur=function(e,r){return Ur=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},Ur(e,r)};function eu(e,r){Ur(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var ru=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,nu=`precision mediump float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void)
{
    float lum = length(texture2D(uSampler, vTextureCoord.xy).rgb);

    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);

    if (lum < 1.00)
    {
        if (mod(gl_FragCoord.x + gl_FragCoord.y, 10.0) == 0.0)
        {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    }

    if (lum < 0.75)
    {
        if (mod(gl_FragCoord.x - gl_FragCoord.y, 10.0) == 0.0)
        {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    }

    if (lum < 0.50)
    {
        if (mod(gl_FragCoord.x + gl_FragCoord.y - 5.0, 10.0) == 0.0)
        {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    }

    if (lum < 0.3)
    {
        if (mod(gl_FragCoord.x - gl_FragCoord.y - 5.0, 10.0) == 0.0)
        {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    }
}
`;(function(e){eu(r,e);function r(){return e.call(this,ru,nu)||this}return r})(I);/*!
 * @pixi/filter-crt - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-crt is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Lr=function(e,r){return Lr=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},Lr(e,r)};function iu(e,r){Lr(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var ou=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,au=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec4 filterArea;
uniform vec2 dimensions;

const float SQRT_2 = 1.414213;

const float light = 1.0;

uniform float curvature;
uniform float lineWidth;
uniform float lineContrast;
uniform bool verticalLine;
uniform float noise;
uniform float noiseSize;

uniform float vignetting;
uniform float vignettingAlpha;
uniform float vignettingBlur;

uniform float seed;
uniform float time;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main(void)
{
    vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;
    vec2 dir = vec2(vTextureCoord.xy - vec2(0.5, 0.5)) * filterArea.xy / dimensions;

    gl_FragColor = texture2D(uSampler, vTextureCoord);
    vec3 rgb = gl_FragColor.rgb;

    if (noise > 0.0 && noiseSize > 0.0)
    {
        pixelCoord.x = floor(pixelCoord.x / noiseSize);
        pixelCoord.y = floor(pixelCoord.y / noiseSize);
        float _noise = rand(pixelCoord * noiseSize * seed) - 0.5;
        rgb += _noise * noise;
    }

    if (lineWidth > 0.0)
    {
        float _c = curvature > 0. ? curvature : 1.;
        float k = curvature > 0. ?(length(dir * dir) * 0.25 * _c * _c + 0.935 * _c) : 1.;
        vec2 uv = dir * k;

        float v = (verticalLine ? uv.x * dimensions.x : uv.y * dimensions.y) * min(1.0, 2.0 / lineWidth ) / _c;
        float j = 1. + cos(v * 1.2 - time) * 0.5 * lineContrast;
        rgb *= j;
        float segment = verticalLine ? mod((dir.x + .5) * dimensions.x, 4.) : mod((dir.y + .5) * dimensions.y, 4.);
        rgb *= 0.99 + ceil(segment) * 0.015;
    }

    if (vignetting > 0.0)
    {
        float outter = SQRT_2 - vignetting * SQRT_2;
        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignettingBlur * SQRT_2), 0.0, 1.0);
        rgb *= darker + (1.0 - darker) * (1.0 - vignettingAlpha);
    }

    gl_FragColor.rgb = rgb;
}
`;(function(e){iu(r,e);function r(t){var n=e.call(this,ou,au)||this;return n.time=0,n.seed=0,n.uniforms.dimensions=new Float32Array(2),Object.assign(n,r.defaults,t),n}return r.prototype.apply=function(t,n,i,o){var a=n.filterFrame,s=a.width,u=a.height;this.uniforms.dimensions[0]=s,this.uniforms.dimensions[1]=u,this.uniforms.seed=this.seed,this.uniforms.time=this.time,t.applyFilter(this,n,i,o)},Object.defineProperty(r.prototype,"curvature",{get:function(){return this.uniforms.curvature},set:function(t){this.uniforms.curvature=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"lineWidth",{get:function(){return this.uniforms.lineWidth},set:function(t){this.uniforms.lineWidth=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"lineContrast",{get:function(){return this.uniforms.lineContrast},set:function(t){this.uniforms.lineContrast=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"verticalLine",{get:function(){return this.uniforms.verticalLine},set:function(t){this.uniforms.verticalLine=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"noise",{get:function(){return this.uniforms.noise},set:function(t){this.uniforms.noise=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"noiseSize",{get:function(){return this.uniforms.noiseSize},set:function(t){this.uniforms.noiseSize=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"vignetting",{get:function(){return this.uniforms.vignetting},set:function(t){this.uniforms.vignetting=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"vignettingAlpha",{get:function(){return this.uniforms.vignettingAlpha},set:function(t){this.uniforms.vignettingAlpha=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"vignettingBlur",{get:function(){return this.uniforms.vignettingBlur},set:function(t){this.uniforms.vignettingBlur=t},enumerable:!1,configurable:!0}),r.defaults={curvature:1,lineWidth:1,lineContrast:.25,verticalLine:!1,noise:0,noiseSize:1,seed:0,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,time:0},r})(I);/*!
 * @pixi/filter-dot - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-dot is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Gr=function(e,r){return Gr=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},Gr(e,r)};function su(e,r){Gr(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var uu=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,fu=`precision mediump float;

varying vec2 vTextureCoord;
varying vec4 vColor;

uniform vec4 filterArea;
uniform sampler2D uSampler;

uniform float angle;
uniform float scale;

float pattern()
{
   float s = sin(angle), c = cos(angle);
   vec2 tex = vTextureCoord * filterArea.xy;
   vec2 point = vec2(
       c * tex.x - s * tex.y,
       s * tex.x + c * tex.y
   ) * scale;
   return (sin(point.x) * sin(point.y)) * 4.0;
}

void main()
{
   vec4 color = texture2D(uSampler, vTextureCoord);
   float average = (color.r + color.g + color.b) / 3.0;
   gl_FragColor = vec4(vec3(average * 10.0 - 5.0 + pattern()), color.a);
}
`;(function(e){su(r,e);function r(t,n){t===void 0&&(t=1),n===void 0&&(n=5);var i=e.call(this,uu,fu)||this;return i.scale=t,i.angle=n,i}return Object.defineProperty(r.prototype,"scale",{get:function(){return this.uniforms.scale},set:function(t){this.uniforms.scale=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"angle",{get:function(){return this.uniforms.angle},set:function(t){this.uniforms.angle=t},enumerable:!1,configurable:!0}),r})(I);/*!
 * @pixi/filter-drop-shadow - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-drop-shadow is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Mr=function(e,r){return Mr=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},Mr(e,r)};function lu(e,r){Mr(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var Ae=function(){return Ae=Object.assign||function(r){for(var t=arguments,n,i=1,o=arguments.length;i<o;i++){n=t[i];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])}return r},Ae.apply(this,arguments)},hu=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,cu=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float alpha;
uniform vec3 color;

uniform vec2 shift;
uniform vec4 inputSize;

void main(void){
    vec4 sample = texture2D(uSampler, vTextureCoord - shift * inputSize.zw);

    // Premultiply alpha
    sample.rgb = color.rgb * sample.a;

    // alpha user alpha
    sample *= alpha;

    gl_FragColor = sample;
}`;(function(e){lu(r,e);function r(t){var n=e.call(this)||this;n.angle=45,n._distance=5,n._resolution=T.FILTER_RESOLUTION;var i=t?Ae(Ae({},r.defaults),t):r.defaults,o=i.kernels,a=i.blur,s=i.quality,u=i.pixelSize,f=i.resolution;n._tintFilter=new I(hu,cu),n._tintFilter.uniforms.color=new Float32Array(4),n._tintFilter.uniforms.shift=new M,n._tintFilter.resolution=f,n._blurFilter=o?new Re(o):new Re(a,s),n.pixelSize=u,n.resolution=f;var l=i.shadowOnly,h=i.rotation,d=i.distance,c=i.alpha,p=i.color;return n.shadowOnly=l,n.rotation=h,n.distance=d,n.alpha=c,n.color=p,n._updatePadding(),n}return r.prototype.apply=function(t,n,i,o){var a=t.getFilterTexture();this._tintFilter.apply(t,n,a,1),this._blurFilter.apply(t,a,i,o),this.shadowOnly!==!0&&t.applyFilter(this,n,i,0),t.returnFilterTexture(a)},r.prototype._updatePadding=function(){this.padding=this.distance+this.blur*2},r.prototype._updateShift=function(){this._tintFilter.uniforms.shift.set(this.distance*Math.cos(this.angle),this.distance*Math.sin(this.angle))},Object.defineProperty(r.prototype,"resolution",{get:function(){return this._resolution},set:function(t){this._resolution=t,this._tintFilter&&(this._tintFilter.resolution=t),this._blurFilter&&(this._blurFilter.resolution=t)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"distance",{get:function(){return this._distance},set:function(t){this._distance=t,this._updatePadding(),this._updateShift()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"rotation",{get:function(){return this.angle/Bt},set:function(t){this.angle=t*Bt,this._updateShift()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"alpha",{get:function(){return this._tintFilter.uniforms.alpha},set:function(t){this._tintFilter.uniforms.alpha=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"color",{get:function(){return it(this._tintFilter.uniforms.color)},set:function(t){Y(t,this._tintFilter.uniforms.color)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"kernels",{get:function(){return this._blurFilter.kernels},set:function(t){this._blurFilter.kernels=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"blur",{get:function(){return this._blurFilter.blur},set:function(t){this._blurFilter.blur=t,this._updatePadding()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"quality",{get:function(){return this._blurFilter.quality},set:function(t){this._blurFilter.quality=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"pixelSize",{get:function(){return this._blurFilter.pixelSize},set:function(t){this._blurFilter.pixelSize=t},enumerable:!1,configurable:!0}),r.defaults={rotation:45,distance:5,color:0,alpha:.5,shadowOnly:!1,kernels:null,blur:2,quality:3,pixelSize:1,resolution:T.FILTER_RESOLUTION},r})(I);/*!
 * @pixi/filter-emboss - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-emboss is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var jr=function(e,r){return jr=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},jr(e,r)};function du(e,r){jr(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var pu=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,vu=`precision mediump float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float strength;
uniform vec4 filterArea;


void main(void)
{
	vec2 onePixel = vec2(1.0 / filterArea);

	vec4 color;

	color.rgb = vec3(0.5);

	color -= texture2D(uSampler, vTextureCoord - onePixel) * strength;
	color += texture2D(uSampler, vTextureCoord + onePixel) * strength;

	color.rgb = vec3((color.r + color.g + color.b) / 3.0);

	float alpha = texture2D(uSampler, vTextureCoord).a;

	gl_FragColor = vec4(color.rgb * alpha, alpha);
}
`;(function(e){du(r,e);function r(t){t===void 0&&(t=5);var n=e.call(this,pu,vu)||this;return n.strength=t,n}return Object.defineProperty(r.prototype,"strength",{get:function(){return this.uniforms.strength},set:function(t){this.uniforms.strength=t},enumerable:!1,configurable:!0}),r})(I);/*!
 * @pixi/filter-glitch - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-glitch is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Br=function(e,r){return Br=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},Br(e,r)};function mu(e,r){Br(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var yu=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,_u=`// precision highp float;

varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec4 filterArea;
uniform vec4 filterClamp;
uniform vec2 dimensions;
uniform float aspect;

uniform sampler2D displacementMap;
uniform float offset;
uniform float sinDir;
uniform float cosDir;
uniform int fillMode;

uniform float seed;
uniform vec2 red;
uniform vec2 green;
uniform vec2 blue;

const int TRANSPARENT = 0;
const int ORIGINAL = 1;
const int LOOP = 2;
const int CLAMP = 3;
const int MIRROR = 4;

void main(void)
{
    vec2 coord = (vTextureCoord * filterArea.xy) / dimensions;

    if (coord.x > 1.0 || coord.y > 1.0) {
        return;
    }

    float cx = coord.x - 0.5;
    float cy = (coord.y - 0.5) * aspect;
    float ny = (-sinDir * cx + cosDir * cy) / aspect + 0.5;

    // displacementMap: repeat
    // ny = ny > 1.0 ? ny - 1.0 : (ny < 0.0 ? 1.0 + ny : ny);

    // displacementMap: mirror
    ny = ny > 1.0 ? 2.0 - ny : (ny < 0.0 ? -ny : ny);

    vec4 dc = texture2D(displacementMap, vec2(0.5, ny));

    float displacement = (dc.r - dc.g) * (offset / filterArea.x);

    coord = vTextureCoord + vec2(cosDir * displacement, sinDir * displacement * aspect);

    if (fillMode == CLAMP) {
        coord = clamp(coord, filterClamp.xy, filterClamp.zw);
    } else {
        if( coord.x > filterClamp.z ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.x -= filterClamp.z;
            } else if (fillMode == MIRROR) {
                coord.x = filterClamp.z * 2.0 - coord.x;
            }
        } else if( coord.x < filterClamp.x ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.x += filterClamp.z;
            } else if (fillMode == MIRROR) {
                coord.x *= -filterClamp.z;
            }
        }

        if( coord.y > filterClamp.w ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.y -= filterClamp.w;
            } else if (fillMode == MIRROR) {
                coord.y = filterClamp.w * 2.0 - coord.y;
            }
        } else if( coord.y < filterClamp.y ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.y += filterClamp.w;
            } else if (fillMode == MIRROR) {
                coord.y *= -filterClamp.w;
            }
        }
    }

    gl_FragColor.r = texture2D(uSampler, coord + red * (1.0 - seed * 0.4) / filterArea.xy).r;
    gl_FragColor.g = texture2D(uSampler, coord + green * (1.0 - seed * 0.3) / filterArea.xy).g;
    gl_FragColor.b = texture2D(uSampler, coord + blue * (1.0 - seed * 0.2) / filterArea.xy).b;
    gl_FragColor.a = texture2D(uSampler, coord).a;
}
`;(function(e){mu(r,e);function r(t){var n=e.call(this,yu,_u)||this;return n.offset=100,n.fillMode=r.TRANSPARENT,n.average=!1,n.seed=0,n.minSize=8,n.sampleSize=512,n._slices=0,n._offsets=new Float32Array(1),n._sizes=new Float32Array(1),n._direction=-1,n.uniforms.dimensions=new Float32Array(2),n._canvas=document.createElement("canvas"),n._canvas.width=4,n._canvas.height=n.sampleSize,n.texture=tt.from(n._canvas,{scaleMode:J.NEAREST}),Object.assign(n,r.defaults,t),n}return r.prototype.apply=function(t,n,i,o){var a=n.filterFrame,s=a.width,u=a.height;this.uniforms.dimensions[0]=s,this.uniforms.dimensions[1]=u,this.uniforms.aspect=u/s,this.uniforms.seed=this.seed,this.uniforms.offset=this.offset,this.uniforms.fillMode=this.fillMode,t.applyFilter(this,n,i,o)},r.prototype._randomizeSizes=function(){var t=this._sizes,n=this._slices-1,i=this.sampleSize,o=Math.min(this.minSize/i,.9/this._slices);if(this.average){for(var a=this._slices,s=1,u=0;u<n;u++){var f=s/(a-u),l=Math.max(f*(1-Math.random()*.6),o);t[u]=l,s-=l}t[n]=s}else{for(var s=1,h=Math.sqrt(1/this._slices),u=0;u<n;u++){var l=Math.max(h*s*Math.random(),o);t[u]=l,s-=l}t[n]=s}this.shuffle()},r.prototype.shuffle=function(){for(var t=this._sizes,n=this._slices-1,i=n;i>0;i--){var o=Math.random()*i>>0,a=t[i];t[i]=t[o],t[o]=a}},r.prototype._randomizeOffsets=function(){for(var t=0;t<this._slices;t++)this._offsets[t]=Math.random()*(Math.random()<.5?-1:1)},r.prototype.refresh=function(){this._randomizeSizes(),this._randomizeOffsets(),this.redraw()},r.prototype.redraw=function(){var t=this.sampleSize,n=this.texture,i=this._canvas.getContext("2d");i.clearRect(0,0,8,t);for(var o,a=0,s=0;s<this._slices;s++){o=Math.floor(this._offsets[s]*256);var u=this._sizes[s]*t,f=o>0?o:0,l=o<0?-o:0;i.fillStyle="rgba("+f+", "+l+", 0, 1)",i.fillRect(0,a>>0,t,u+1>>0),a+=u}n.baseTexture.update(),this.uniforms.displacementMap=n},Object.defineProperty(r.prototype,"sizes",{get:function(){return this._sizes},set:function(t){for(var n=Math.min(this._slices,t.length),i=0;i<n;i++)this._sizes[i]=t[i]},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"offsets",{get:function(){return this._offsets},set:function(t){for(var n=Math.min(this._slices,t.length),i=0;i<n;i++)this._offsets[i]=t[i]},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"slices",{get:function(){return this._slices},set:function(t){this._slices!==t&&(this._slices=t,this.uniforms.slices=t,this._sizes=this.uniforms.slicesWidth=new Float32Array(t),this._offsets=this.uniforms.slicesOffset=new Float32Array(t),this.refresh())},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"direction",{get:function(){return this._direction},set:function(t){if(this._direction!==t){this._direction=t;var n=t*Bt;this.uniforms.sinDir=Math.sin(n),this.uniforms.cosDir=Math.cos(n)}},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"red",{get:function(){return this.uniforms.red},set:function(t){this.uniforms.red=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"green",{get:function(){return this.uniforms.green},set:function(t){this.uniforms.green=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"blue",{get:function(){return this.uniforms.blue},set:function(t){this.uniforms.blue=t},enumerable:!1,configurable:!0}),r.prototype.destroy=function(){var t;(t=this.texture)===null||t===void 0||t.destroy(!0),this.texture=this._canvas=this.red=this.green=this.blue=this._sizes=this._offsets=null},r.defaults={slices:5,offset:100,direction:0,fillMode:0,average:!1,seed:0,red:[0,0],green:[0,0],blue:[0,0],minSize:8,sampleSize:512},r.TRANSPARENT=0,r.ORIGINAL=1,r.LOOP=2,r.CLAMP=3,r.MIRROR=4,r})(I);/*!
 * @pixi/filter-glow - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-glow is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var kr=function(e,r){return kr=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},kr(e,r)};function gu(e,r){kr(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var xu=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,bu=`varying vec2 vTextureCoord;
varying vec4 vColor;

uniform sampler2D uSampler;

uniform float outerStrength;
uniform float innerStrength;

uniform vec4 glowColor;

uniform vec4 filterArea;
uniform vec4 filterClamp;
uniform bool knockout;

const float PI = 3.14159265358979323846264;

const float DIST = __DIST__;
const float ANGLE_STEP_SIZE = min(__ANGLE_STEP_SIZE__, PI * 2.0);
const float ANGLE_STEP_NUM = ceil(PI * 2.0 / ANGLE_STEP_SIZE);

const float MAX_TOTAL_ALPHA = ANGLE_STEP_NUM * DIST * (DIST + 1.0) / 2.0;

void main(void) {
    vec2 px = vec2(1.0 / filterArea.x, 1.0 / filterArea.y);

    float totalAlpha = 0.0;

    vec2 direction;
    vec2 displaced;
    vec4 curColor;

    for (float angle = 0.0; angle < PI * 2.0; angle += ANGLE_STEP_SIZE) {
       direction = vec2(cos(angle), sin(angle)) * px;

       for (float curDistance = 0.0; curDistance < DIST; curDistance++) {
           displaced = clamp(vTextureCoord + direction * 
                   (curDistance + 1.0), filterClamp.xy, filterClamp.zw);

           curColor = texture2D(uSampler, displaced);

           totalAlpha += (DIST - curDistance) * curColor.a;
       }
    }
    
    curColor = texture2D(uSampler, vTextureCoord);

    float alphaRatio = (totalAlpha / MAX_TOTAL_ALPHA);

    float innerGlowAlpha = (1.0 - alphaRatio) * innerStrength * curColor.a;
    float innerGlowStrength = min(1.0, innerGlowAlpha);
    
    vec4 innerColor = mix(curColor, glowColor, innerGlowStrength);

    float outerGlowAlpha = alphaRatio * outerStrength * (1. - curColor.a);
    float outerGlowStrength = min(1.0 - innerColor.a, outerGlowAlpha);

    vec4 outerGlowColor = outerGlowStrength * glowColor.rgba;
    
    if (knockout) {
      float resultAlpha = outerGlowAlpha + innerGlowAlpha;
      gl_FragColor = vec4(glowColor.rgb * resultAlpha, resultAlpha);
    }
    else {
      gl_FragColor = innerColor + outerGlowColor;
    }
}
`;(function(e){gu(r,e);function r(t){var n=this,i=Object.assign({},r.defaults,t),o=i.outerStrength,a=i.innerStrength,s=i.color,u=i.knockout,f=i.quality,l=Math.round(i.distance);return n=e.call(this,xu,bu.replace(/__ANGLE_STEP_SIZE__/gi,""+(1/f/l).toFixed(7)).replace(/__DIST__/gi,l.toFixed(0)+".0"))||this,n.uniforms.glowColor=new Float32Array([0,0,0,1]),Object.assign(n,{color:s,outerStrength:o,innerStrength:a,padding:l,knockout:u}),n}return Object.defineProperty(r.prototype,"color",{get:function(){return it(this.uniforms.glowColor)},set:function(t){Y(t,this.uniforms.glowColor)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"outerStrength",{get:function(){return this.uniforms.outerStrength},set:function(t){this.uniforms.outerStrength=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"innerStrength",{get:function(){return this.uniforms.innerStrength},set:function(t){this.uniforms.innerStrength=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"knockout",{get:function(){return this.uniforms.knockout},set:function(t){this.uniforms.knockout=t},enumerable:!1,configurable:!0}),r.defaults={distance:10,outerStrength:4,innerStrength:0,color:16777215,quality:.1,knockout:!1},r})(I);/*!
 * @pixi/filter-godray - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-godray is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var zr=function(e,r){return zr=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},zr(e,r)};function Tu(e,r){zr(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var Cu=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Iu=`vec3 mod289(vec3 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 mod289(vec4 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 permute(vec4 x)
{
    return mod289(((x * 34.0) + 1.0) * x);
}
vec4 taylorInvSqrt(vec4 r)
{
    return 1.79284291400159 - 0.85373472095314 * r;
}
vec3 fade(vec3 t)
{
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}
// Classic Perlin noise, periodic variant
float pnoise(vec3 P, vec3 rep)
{
    vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
    vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
    Pi0 = mod289(Pi0);
    Pi1 = mod289(Pi1);
    vec3 Pf0 = fract(P); // Fractional part for interpolation
    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;
    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);
    vec4 gx0 = ixy0 * (1.0 / 7.0);
    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);
    vec4 gx1 = ixy1 * (1.0 / 7.0);
    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);
    vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
    vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
    vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
    vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
    vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
    vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
    vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
    vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);
    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;
    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);
    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}
float turb(vec3 P, vec3 rep, float lacunarity, float gain)
{
    float sum = 0.0;
    float sc = 1.0;
    float totalgain = 1.0;
    for (float i = 0.0; i < 6.0; i++)
    {
        sum += totalgain * pnoise(P * sc, rep);
        sc *= lacunarity;
        totalgain *= gain;
    }
    return abs(sum);
}
`,Ru=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;
uniform vec2 dimensions;

uniform vec2 light;
uniform bool parallel;
uniform float aspect;

uniform float gain;
uniform float lacunarity;
uniform float time;
uniform float alpha;

\${perlin}

void main(void) {
    vec2 coord = vTextureCoord * filterArea.xy / dimensions.xy;

    float d;

    if (parallel) {
        float _cos = light.x;
        float _sin = light.y;
        d = (_cos * coord.x) + (_sin * coord.y * aspect);
    } else {
        float dx = coord.x - light.x / dimensions.x;
        float dy = (coord.y - light.y / dimensions.y) * aspect;
        float dis = sqrt(dx * dx + dy * dy) + 0.00001;
        d = dy / dis;
    }

    vec3 dir = vec3(d, d, 0.0);

    float noise = turb(dir + vec3(time, 0.0, 62.1 + time) * 0.05, vec3(480.0, 320.0, 480.0), lacunarity, gain);
    noise = mix(noise, 0.0, 0.3);
    //fade vertically.
    vec4 mist = vec4(noise, noise, noise, 1.0) * (1.0 - coord.y);
    mist.a = 1.0;
    // apply user alpha
    mist *= alpha;

    gl_FragColor = texture2D(uSampler, vTextureCoord) + mist;

}
`,pf=function(e){Tu(r,e);function r(t){var n=e.call(this,Cu,Ru.replace("${perlin}",Iu))||this;n.parallel=!0,n.time=0,n._angle=0,n.uniforms.dimensions=new Float32Array(2);var i=Object.assign(r.defaults,t);return n._angleLight=new M,n.angle=i.angle,n.gain=i.gain,n.lacunarity=i.lacunarity,n.alpha=i.alpha,n.parallel=i.parallel,n.center=i.center,n.time=i.time,n}return r.prototype.apply=function(t,n,i,o){var a=n.filterFrame,s=a.width,u=a.height;this.uniforms.light=this.parallel?this._angleLight:this.center,this.uniforms.parallel=this.parallel,this.uniforms.dimensions[0]=s,this.uniforms.dimensions[1]=u,this.uniforms.aspect=u/s,this.uniforms.time=this.time,this.uniforms.alpha=this.alpha,t.applyFilter(this,n,i,o)},Object.defineProperty(r.prototype,"angle",{get:function(){return this._angle},set:function(t){this._angle=t;var n=t*Bt;this._angleLight.x=Math.cos(n),this._angleLight.y=Math.sin(n)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"gain",{get:function(){return this.uniforms.gain},set:function(t){this.uniforms.gain=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"lacunarity",{get:function(){return this.uniforms.lacunarity},set:function(t){this.uniforms.lacunarity=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"alpha",{get:function(){return this.uniforms.alpha},set:function(t){this.uniforms.alpha=t},enumerable:!1,configurable:!0}),r.defaults={angle:30,gain:.5,lacunarity:2.5,time:0,parallel:!0,center:[0,0],alpha:1},r}(I);/*!
 * @pixi/filter-motion-blur - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-motion-blur is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Vr=function(e,r){return Vr=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},Vr(e,r)};function wu(e,r){Vr(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var Au=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Eu=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;

uniform vec2 uVelocity;
uniform int uKernelSize;
uniform float uOffset;

const int MAX_KERNEL_SIZE = 2048;

// Notice:
// the perfect way:
//    int kernelSize = min(uKernelSize, MAX_KERNELSIZE);
// BUT in real use-case , uKernelSize < MAX_KERNELSIZE almost always.
// So use uKernelSize directly.

void main(void)
{
    vec4 color = texture2D(uSampler, vTextureCoord);

    if (uKernelSize == 0)
    {
        gl_FragColor = color;
        return;
    }

    vec2 velocity = uVelocity / filterArea.xy;
    float offset = -uOffset / length(uVelocity) - 0.5;
    int k = uKernelSize - 1;

    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {
        if (i == k) {
            break;
        }
        vec2 bias = velocity * (float(i) / float(k) + offset);
        color += texture2D(uSampler, vTextureCoord + bias);
    }
    gl_FragColor = color / float(uKernelSize);
}
`;(function(e){wu(r,e);function r(t,n,i){t===void 0&&(t=[0,0]),n===void 0&&(n=5),i===void 0&&(i=0);var o=e.call(this,Au,Eu)||this;return o.kernelSize=5,o.uniforms.uVelocity=new Float32Array(2),o._velocity=new Jt(o.velocityChanged,o),o.setVelocity(t),o.kernelSize=n,o.offset=i,o}return r.prototype.apply=function(t,n,i,o){var a=this.velocity,s=a.x,u=a.y;this.uniforms.uKernelSize=s!==0||u!==0?this.kernelSize:0,t.applyFilter(this,n,i,o)},Object.defineProperty(r.prototype,"velocity",{get:function(){return this._velocity},set:function(t){this.setVelocity(t)},enumerable:!1,configurable:!0}),r.prototype.setVelocity=function(t){if(Array.isArray(t)){var n=t[0],i=t[1];this._velocity.set(n,i)}else this._velocity.copyFrom(t)},r.prototype.velocityChanged=function(){this.uniforms.uVelocity[0]=this._velocity.x,this.uniforms.uVelocity[1]=this._velocity.y,this.padding=(Math.max(Math.abs(this._velocity.x),Math.abs(this._velocity.y))>>0)+1},Object.defineProperty(r.prototype,"offset",{get:function(){return this.uniforms.uOffset},set:function(t){this.uniforms.uOffset=t},enumerable:!1,configurable:!0}),r})(I);/*!
 * @pixi/filter-multi-color-replace - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-multi-color-replace is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Xr=function(e,r){return Xr=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},Xr(e,r)};function Nu(e,r){Xr(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var Ou=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Pu=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform float epsilon;

const int MAX_COLORS = %maxColors%;

uniform vec3 originalColors[MAX_COLORS];
uniform vec3 targetColors[MAX_COLORS];

void main(void)
{
    gl_FragColor = texture2D(uSampler, vTextureCoord);

    float alpha = gl_FragColor.a;
    if (alpha < 0.0001)
    {
      return;
    }

    vec3 color = gl_FragColor.rgb / alpha;

    for(int i = 0; i < MAX_COLORS; i++)
    {
      vec3 origColor = originalColors[i];
      if (origColor.r < 0.0)
      {
        break;
      }
      vec3 colorDiff = origColor - color;
      if (length(colorDiff) < epsilon)
      {
        vec3 targetColor = targetColors[i];
        gl_FragColor = vec4((targetColor + colorDiff) * alpha, alpha);
        return;
      }
    }
}
`;(function(e){Nu(r,e);function r(t,n,i){n===void 0&&(n=.05),i===void 0&&(i=t.length);var o=e.call(this,Ou,Pu.replace(/%maxColors%/g,i.toFixed(0)))||this;return o._replacements=[],o._maxColors=0,o.epsilon=n,o._maxColors=i,o.uniforms.originalColors=new Float32Array(i*3),o.uniforms.targetColors=new Float32Array(i*3),o.replacements=t,o}return Object.defineProperty(r.prototype,"replacements",{get:function(){return this._replacements},set:function(t){var n=this.uniforms.originalColors,i=this.uniforms.targetColors,o=t.length;if(o>this._maxColors)throw new Error("Length of replacements ("+o+") exceeds the maximum colors length ("+this._maxColors+")");n[o*3]=-1;for(var a=0;a<o;a++){var s=t[a],u=s[0];typeof u=="number"?u=Y(u):s[0]=it(u),n[a*3]=u[0],n[a*3+1]=u[1],n[a*3+2]=u[2];var f=s[1];typeof f=="number"?f=Y(f):s[1]=it(f),i[a*3]=f[0],i[a*3+1]=f[1],i[a*3+2]=f[2]}this._replacements=t},enumerable:!1,configurable:!0}),r.prototype.refresh=function(){this.replacements=this._replacements},Object.defineProperty(r.prototype,"maxColors",{get:function(){return this._maxColors},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"epsilon",{get:function(){return this.uniforms.epsilon},set:function(t){this.uniforms.epsilon=t},enumerable:!1,configurable:!0}),r})(I);/*!
 * @pixi/filter-old-film - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-old-film is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Hr=function(e,r){return Hr=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},Hr(e,r)};function Fu(e,r){Hr(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var Su=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Uu=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;
uniform vec2 dimensions;

uniform float sepia;
uniform float noise;
uniform float noiseSize;
uniform float scratch;
uniform float scratchDensity;
uniform float scratchWidth;
uniform float vignetting;
uniform float vignettingAlpha;
uniform float vignettingBlur;
uniform float seed;

const float SQRT_2 = 1.414213;
const vec3 SEPIA_RGB = vec3(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

vec3 Overlay(vec3 src, vec3 dst)
{
    // if (dst <= 0.5) then: 2 * src * dst
    // if (dst > 0.5) then: 1 - 2 * (1 - dst) * (1 - src)
    return vec3((dst.x <= 0.5) ? (2.0 * src.x * dst.x) : (1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)),
                (dst.y <= 0.5) ? (2.0 * src.y * dst.y) : (1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)),
                (dst.z <= 0.5) ? (2.0 * src.z * dst.z) : (1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)));
}


void main()
{
    gl_FragColor = texture2D(uSampler, vTextureCoord);
    vec3 color = gl_FragColor.rgb;

    if (sepia > 0.0)
    {
        float gray = (color.x + color.y + color.z) / 3.0;
        vec3 grayscale = vec3(gray);

        color = Overlay(SEPIA_RGB, grayscale);

        color = grayscale + sepia * (color - grayscale);
    }

    vec2 coord = vTextureCoord * filterArea.xy / dimensions.xy;

    if (vignetting > 0.0)
    {
        float outter = SQRT_2 - vignetting * SQRT_2;
        vec2 dir = vec2(vec2(0.5, 0.5) - coord);
        dir.y *= dimensions.y / dimensions.x;
        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignettingBlur * SQRT_2), 0.0, 1.0);
        color.rgb *= darker + (1.0 - darker) * (1.0 - vignettingAlpha);
    }

    if (scratchDensity > seed && scratch != 0.0)
    {
        float phase = seed * 256.0;
        float s = mod(floor(phase), 2.0);
        float dist = 1.0 / scratchDensity;
        float d = distance(coord, vec2(seed * dist, abs(s - seed * dist)));
        if (d < seed * 0.6 + 0.4)
        {
            highp float period = scratchDensity * 10.0;

            float xx = coord.x * period + phase;
            float aa = abs(mod(xx, 0.5) * 4.0);
            float bb = mod(floor(xx / 0.5), 2.0);
            float yy = (1.0 - bb) * aa + bb * (2.0 - aa);

            float kk = 2.0 * period;
            float dw = scratchWidth / dimensions.x * (0.75 + seed);
            float dh = dw * kk;

            float tine = (yy - (2.0 - dh));

            if (tine > 0.0) {
                float _sign = sign(scratch);

                tine = s * tine / period + scratch + 0.1;
                tine = clamp(tine + 1.0, 0.5 + _sign * 0.5, 1.5 + _sign * 0.5);

                color.rgb *= tine;
            }
        }
    }

    if (noise > 0.0 && noiseSize > 0.0)
    {
        vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;
        pixelCoord.x = floor(pixelCoord.x / noiseSize);
        pixelCoord.y = floor(pixelCoord.y / noiseSize);
        // vec2 d = pixelCoord * noiseSize * vec2(1024.0 + seed * 512.0, 1024.0 - seed * 512.0);
        // float _noise = snoise(d) * 0.5;
        float _noise = rand(pixelCoord * noiseSize * seed) - 0.5;
        color += _noise * noise;
    }

    gl_FragColor.rgb = color;
}
`,vf=function(e){Fu(r,e);function r(t,n){n===void 0&&(n=0);var i=e.call(this,Su,Uu)||this;return i.seed=0,i.uniforms.dimensions=new Float32Array(2),typeof t=="number"?(i.seed=t,t=void 0):i.seed=n,Object.assign(i,r.defaults,t),i}return r.prototype.apply=function(t,n,i,o){var a,s;this.uniforms.dimensions[0]=(a=n.filterFrame)===null||a===void 0?void 0:a.width,this.uniforms.dimensions[1]=(s=n.filterFrame)===null||s===void 0?void 0:s.height,this.uniforms.seed=this.seed,t.applyFilter(this,n,i,o)},Object.defineProperty(r.prototype,"sepia",{get:function(){return this.uniforms.sepia},set:function(t){this.uniforms.sepia=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"noise",{get:function(){return this.uniforms.noise},set:function(t){this.uniforms.noise=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"noiseSize",{get:function(){return this.uniforms.noiseSize},set:function(t){this.uniforms.noiseSize=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"scratch",{get:function(){return this.uniforms.scratch},set:function(t){this.uniforms.scratch=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"scratchDensity",{get:function(){return this.uniforms.scratchDensity},set:function(t){this.uniforms.scratchDensity=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"scratchWidth",{get:function(){return this.uniforms.scratchWidth},set:function(t){this.uniforms.scratchWidth=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"vignetting",{get:function(){return this.uniforms.vignetting},set:function(t){this.uniforms.vignetting=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"vignettingAlpha",{get:function(){return this.uniforms.vignettingAlpha},set:function(t){this.uniforms.vignettingAlpha=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"vignettingBlur",{get:function(){return this.uniforms.vignettingBlur},set:function(t){this.uniforms.vignettingBlur=t},enumerable:!1,configurable:!0}),r.defaults={sepia:.3,noise:.3,noiseSize:1,scratch:.5,scratchDensity:.3,scratchWidth:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3},r}(I);/*!
 * @pixi/filter-outline - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-outline is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Dr=function(e,r){return Dr=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},Dr(e,r)};function Lu(e,r){Dr(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var Gu=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Mu=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec2 thickness;
uniform vec4 outlineColor;
uniform vec4 filterClamp;

const float DOUBLE_PI = 3.14159265358979323846264 * 2.;

void main(void) {
    vec4 ownColor = texture2D(uSampler, vTextureCoord);
    vec4 curColor;
    float maxAlpha = 0.;
    vec2 displaced;
    for (float angle = 0.; angle <= DOUBLE_PI; angle += \${angleStep}) {
        displaced.x = vTextureCoord.x + thickness.x * cos(angle);
        displaced.y = vTextureCoord.y + thickness.y * sin(angle);
        curColor = texture2D(uSampler, clamp(displaced, filterClamp.xy, filterClamp.zw));
        maxAlpha = max(maxAlpha, curColor.a);
    }
    float resultAlpha = max(maxAlpha, ownColor.a);
    gl_FragColor = vec4((ownColor.rgb + outlineColor.rgb * (1. - ownColor.a)) * resultAlpha, resultAlpha);
}
`;(function(e){Lu(r,e);function r(t,n,i){t===void 0&&(t=1),n===void 0&&(n=0),i===void 0&&(i=.1);var o=e.call(this,Gu,Mu.replace(/\$\{angleStep\}/,r.getAngleStep(i)))||this;return o._thickness=1,o.uniforms.thickness=new Float32Array([0,0]),o.uniforms.outlineColor=new Float32Array([0,0,0,1]),Object.assign(o,{thickness:t,color:n,quality:i}),o}return r.getAngleStep=function(t){var n=Math.max(t*r.MAX_SAMPLES,r.MIN_SAMPLES);return(Math.PI*2/n).toFixed(7)},r.prototype.apply=function(t,n,i,o){this.uniforms.thickness[0]=this._thickness/n._frame.width,this.uniforms.thickness[1]=this._thickness/n._frame.height,t.applyFilter(this,n,i,o)},Object.defineProperty(r.prototype,"color",{get:function(){return it(this.uniforms.outlineColor)},set:function(t){Y(t,this.uniforms.outlineColor)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"thickness",{get:function(){return this._thickness},set:function(t){this._thickness=t,this.padding=t},enumerable:!1,configurable:!0}),r.MIN_SAMPLES=1,r.MAX_SAMPLES=100,r})(I);/*!
 * @pixi/filter-pixelate - v4.1.3
 * Compiled Thu, 17 Jun 2021 19:33:56 UTC
 *
 * @pixi/filter-pixelate is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var $r=function(e,r){return $r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},$r(e,r)};function ju(e,r){$r(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var Bu=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,ku=`precision mediump float;

varying vec2 vTextureCoord;

uniform vec2 size;
uniform sampler2D uSampler;

uniform vec4 filterArea;

vec2 mapCoord( vec2 coord )
{
    coord *= filterArea.xy;
    coord += filterArea.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= filterArea.zw;
    coord /= filterArea.xy;

    return coord;
}

vec2 pixelate(vec2 coord, vec2 size)
{
	return floor( coord / size ) * size;
}

void main(void)
{
    vec2 coord = mapCoord(vTextureCoord);

    coord = pixelate(coord, size);

    coord = unmapCoord(coord);

    gl_FragColor = texture2D(uSampler, coord);
}
`;(function(e){ju(r,e);function r(t){t===void 0&&(t=10);var n=e.call(this,Bu,ku)||this;return n.size=t,n}return Object.defineProperty(r.prototype,"size",{get:function(){return this.uniforms.size},set:function(t){typeof t=="number"&&(t=[t,t]),this.uniforms.size=t},enumerable:!1,configurable:!0}),r})(I);/*!
 * @pixi/filter-radial-blur - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-radial-blur is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Wr=function(e,r){return Wr=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},Wr(e,r)};function zu(e,r){Wr(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var Vu=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Xu=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;

uniform float uRadian;
uniform vec2 uCenter;
uniform float uRadius;
uniform int uKernelSize;

const int MAX_KERNEL_SIZE = 2048;

void main(void)
{
    vec4 color = texture2D(uSampler, vTextureCoord);

    if (uKernelSize == 0)
    {
        gl_FragColor = color;
        return;
    }

    float aspect = filterArea.y / filterArea.x;
    vec2 center = uCenter.xy / filterArea.xy;
    float gradient = uRadius / filterArea.x * 0.3;
    float radius = uRadius / filterArea.x - gradient * 0.5;
    int k = uKernelSize - 1;

    vec2 coord = vTextureCoord;
    vec2 dir = vec2(center - coord);
    float dist = length(vec2(dir.x, dir.y * aspect));

    float radianStep = uRadian;
    if (radius >= 0.0 && dist > radius) {
        float delta = dist - radius;
        float gap = gradient;
        float scale = 1.0 - abs(delta / gap);
        if (scale <= 0.0) {
            gl_FragColor = color;
            return;
        }
        radianStep *= scale;
    }
    radianStep /= float(k);

    float s = sin(radianStep);
    float c = cos(radianStep);
    mat2 rotationMatrix = mat2(vec2(c, -s), vec2(s, c));

    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {
        if (i == k) {
            break;
        }

        coord -= center;
        coord.y *= aspect;
        coord = rotationMatrix * coord;
        coord.y /= aspect;
        coord += center;

        vec4 sample = texture2D(uSampler, coord);

        // switch to pre-multiplied alpha to correctly blur transparent images
        // sample.rgb *= sample.a;

        color += sample;
    }

    gl_FragColor = color / float(uKernelSize);
}
`;(function(e){zu(r,e);function r(t,n,i,o){t===void 0&&(t=0),n===void 0&&(n=[0,0]),i===void 0&&(i=5),o===void 0&&(o=-1);var a=e.call(this,Vu,Xu)||this;return a._angle=0,a.angle=t,a.center=n,a.kernelSize=i,a.radius=o,a}return r.prototype.apply=function(t,n,i,o){this.uniforms.uKernelSize=this._angle!==0?this.kernelSize:0,t.applyFilter(this,n,i,o)},Object.defineProperty(r.prototype,"angle",{get:function(){return this._angle},set:function(t){this._angle=t,this.uniforms.uRadian=t*Math.PI/180},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"center",{get:function(){return this.uniforms.uCenter},set:function(t){this.uniforms.uCenter=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"radius",{get:function(){return this.uniforms.uRadius},set:function(t){(t<0||t===1/0)&&(t=-1),this.uniforms.uRadius=t},enumerable:!1,configurable:!0}),r})(I);/*!
 * @pixi/filter-reflection - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-reflection is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var qr=function(e,r){return qr=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},qr(e,r)};function Hu(e,r){qr(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var Du=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,$u=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec4 filterArea;
uniform vec4 filterClamp;
uniform vec2 dimensions;

uniform bool mirror;
uniform float boundary;
uniform vec2 amplitude;
uniform vec2 waveLength;
uniform vec2 alpha;
uniform float time;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main(void)
{
    vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;
    vec2 coord = pixelCoord / dimensions;

    if (coord.y < boundary) {
        gl_FragColor = texture2D(uSampler, vTextureCoord);
        return;
    }

    float k = (coord.y - boundary) / (1. - boundary + 0.0001);
    float areaY = boundary * dimensions.y / filterArea.y;
    float v = areaY + areaY - vTextureCoord.y;
    float y = mirror ? v : vTextureCoord.y;

    float _amplitude = ((amplitude.y - amplitude.x) * k + amplitude.x ) / filterArea.x;
    float _waveLength = ((waveLength.y - waveLength.x) * k + waveLength.x) / filterArea.y;
    float _alpha = (alpha.y - alpha.x) * k + alpha.x;

    float x = vTextureCoord.x + cos(v * 6.28 / _waveLength - time) * _amplitude;
    x = clamp(x, filterClamp.x, filterClamp.z);

    vec4 color = texture2D(uSampler, vec2(x, y));

    gl_FragColor = color * _alpha;
}
`;(function(e){Hu(r,e);function r(t){var n=e.call(this,Du,$u)||this;return n.time=0,n.uniforms.amplitude=new Float32Array(2),n.uniforms.waveLength=new Float32Array(2),n.uniforms.alpha=new Float32Array(2),n.uniforms.dimensions=new Float32Array(2),Object.assign(n,r.defaults,t),n}return r.prototype.apply=function(t,n,i,o){var a,s;this.uniforms.dimensions[0]=(a=n.filterFrame)===null||a===void 0?void 0:a.width,this.uniforms.dimensions[1]=(s=n.filterFrame)===null||s===void 0?void 0:s.height,this.uniforms.time=this.time,t.applyFilter(this,n,i,o)},Object.defineProperty(r.prototype,"mirror",{get:function(){return this.uniforms.mirror},set:function(t){this.uniforms.mirror=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"boundary",{get:function(){return this.uniforms.boundary},set:function(t){this.uniforms.boundary=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"amplitude",{get:function(){return this.uniforms.amplitude},set:function(t){this.uniforms.amplitude[0]=t[0],this.uniforms.amplitude[1]=t[1]},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"waveLength",{get:function(){return this.uniforms.waveLength},set:function(t){this.uniforms.waveLength[0]=t[0],this.uniforms.waveLength[1]=t[1]},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"alpha",{get:function(){return this.uniforms.alpha},set:function(t){this.uniforms.alpha[0]=t[0],this.uniforms.alpha[1]=t[1]},enumerable:!1,configurable:!0}),r.defaults={mirror:!0,boundary:.5,amplitude:[0,20],waveLength:[30,100],alpha:[1,1],time:0},r})(I);/*!
 * @pixi/filter-rgb-split - v4.1.3
 * Compiled Thu, 17 Jun 2021 19:33:56 UTC
 *
 * @pixi/filter-rgb-split is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Zr=function(e,r){return Zr=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},Zr(e,r)};function Wu(e,r){Zr(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var qu=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Zu=`precision mediump float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 filterArea;
uniform vec2 red;
uniform vec2 green;
uniform vec2 blue;

void main(void)
{
   gl_FragColor.r = texture2D(uSampler, vTextureCoord + red/filterArea.xy).r;
   gl_FragColor.g = texture2D(uSampler, vTextureCoord + green/filterArea.xy).g;
   gl_FragColor.b = texture2D(uSampler, vTextureCoord + blue/filterArea.xy).b;
   gl_FragColor.a = texture2D(uSampler, vTextureCoord).a;
}
`;(function(e){Wu(r,e);function r(t,n,i){t===void 0&&(t=[-10,0]),n===void 0&&(n=[0,10]),i===void 0&&(i=[0,0]);var o=e.call(this,qu,Zu)||this;return o.red=t,o.green=n,o.blue=i,o}return Object.defineProperty(r.prototype,"red",{get:function(){return this.uniforms.red},set:function(t){this.uniforms.red=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"green",{get:function(){return this.uniforms.green},set:function(t){this.uniforms.green=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"blue",{get:function(){return this.uniforms.blue},set:function(t){this.uniforms.blue=t},enumerable:!1,configurable:!0}),r})(I);/*!
 * @pixi/filter-shockwave - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-shockwave is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Kr=function(e,r){return Kr=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},Kr(e,r)};function Ku(e,r){Kr(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var Ju=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Yu=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;
uniform vec4 filterClamp;

uniform vec2 center;

uniform float amplitude;
uniform float wavelength;
// uniform float power;
uniform float brightness;
uniform float speed;
uniform float radius;

uniform float time;

const float PI = 3.14159;

void main()
{
    float halfWavelength = wavelength * 0.5 / filterArea.x;
    float maxRadius = radius / filterArea.x;
    float currentRadius = time * speed / filterArea.x;

    float fade = 1.0;

    if (maxRadius > 0.0) {
        if (currentRadius > maxRadius) {
            gl_FragColor = texture2D(uSampler, vTextureCoord);
            return;
        }
        fade = 1.0 - pow(currentRadius / maxRadius, 2.0);
    }

    vec2 dir = vec2(vTextureCoord - center / filterArea.xy);
    dir.y *= filterArea.y / filterArea.x;
    float dist = length(dir);

    if (dist <= 0.0 || dist < currentRadius - halfWavelength || dist > currentRadius + halfWavelength) {
        gl_FragColor = texture2D(uSampler, vTextureCoord);
        return;
    }

    vec2 diffUV = normalize(dir);

    float diff = (dist - currentRadius) / halfWavelength;

    float p = 1.0 - pow(abs(diff), 2.0);

    // float powDiff = diff * pow(p, 2.0) * ( amplitude * fade );
    float powDiff = 1.25 * sin(diff * PI) * p * ( amplitude * fade );

    vec2 offset = diffUV * powDiff / filterArea.xy;

    // Do clamp :
    vec2 coord = vTextureCoord + offset;
    vec2 clampedCoord = clamp(coord, filterClamp.xy, filterClamp.zw);
    vec4 color = texture2D(uSampler, clampedCoord);
    if (coord != clampedCoord) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    // No clamp :
    // gl_FragColor = texture2D(uSampler, vTextureCoord + offset);

    color.rgb *= 1.0 + (brightness - 1.0) * p * fade;

    gl_FragColor = color;
}
`;(function(e){Ku(r,e);function r(t,n,i){t===void 0&&(t=[0,0]),i===void 0&&(i=0);var o=e.call(this,Ju,Yu)||this;return o.center=t,Object.assign(o,r.defaults,n),o.time=i,o}return r.prototype.apply=function(t,n,i,o){this.uniforms.time=this.time,t.applyFilter(this,n,i,o)},Object.defineProperty(r.prototype,"center",{get:function(){return this.uniforms.center},set:function(t){this.uniforms.center=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"amplitude",{get:function(){return this.uniforms.amplitude},set:function(t){this.uniforms.amplitude=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"wavelength",{get:function(){return this.uniforms.wavelength},set:function(t){this.uniforms.wavelength=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"brightness",{get:function(){return this.uniforms.brightness},set:function(t){this.uniforms.brightness=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"speed",{get:function(){return this.uniforms.speed},set:function(t){this.uniforms.speed=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"radius",{get:function(){return this.uniforms.radius},set:function(t){this.uniforms.radius=t},enumerable:!1,configurable:!0}),r.defaults={amplitude:30,wavelength:160,brightness:1,speed:500,radius:-1},r})(I);/*!
 * @pixi/filter-simple-lightmap - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-simple-lightmap is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Jr=function(e,r){return Jr=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},Jr(e,r)};function Qu(e,r){Jr(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var tf=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,ef=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform sampler2D uLightmap;
uniform vec4 filterArea;
uniform vec2 dimensions;
uniform vec4 ambientColor;
void main() {
    vec4 diffuseColor = texture2D(uSampler, vTextureCoord);
    vec2 lightCoord = (vTextureCoord * filterArea.xy) / dimensions;
    vec4 light = texture2D(uLightmap, lightCoord);
    vec3 ambient = ambientColor.rgb * ambientColor.a;
    vec3 intensity = ambient + light.rgb;
    vec3 finalColor = diffuseColor.rgb * intensity;
    gl_FragColor = vec4(finalColor, diffuseColor.a);
}
`;(function(e){Qu(r,e);function r(t,n,i){n===void 0&&(n=0),i===void 0&&(i=1);var o=e.call(this,tf,ef)||this;return o._color=0,o.uniforms.dimensions=new Float32Array(2),o.uniforms.ambientColor=new Float32Array([0,0,0,i]),o.texture=t,o.color=n,o}return r.prototype.apply=function(t,n,i,o){var a,s;this.uniforms.dimensions[0]=(a=n.filterFrame)===null||a===void 0?void 0:a.width,this.uniforms.dimensions[1]=(s=n.filterFrame)===null||s===void 0?void 0:s.height,t.applyFilter(this,n,i,o)},Object.defineProperty(r.prototype,"texture",{get:function(){return this.uniforms.uLightmap},set:function(t){this.uniforms.uLightmap=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"color",{get:function(){return this._color},set:function(t){var n=this.uniforms.ambientColor;typeof t=="number"?(Y(t,n),this._color=t):(n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],this._color=it(n))},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"alpha",{get:function(){return this.uniforms.ambientColor[3]},set:function(t){this.uniforms.ambientColor[3]=t},enumerable:!1,configurable:!0}),r})(I);/*!
 * @pixi/filter-tilt-shift - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-tilt-shift is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Yr=function(e,r){return Yr=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},Yr(e,r)};function Ee(e,r){Yr(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var rf=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,nf=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float blur;
uniform float gradientBlur;
uniform vec2 start;
uniform vec2 end;
uniform vec2 delta;
uniform vec2 texSize;

float random(vec3 scale, float seed)
{
    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);
}

void main(void)
{
    vec4 color = vec4(0.0);
    float total = 0.0;

    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);
    vec2 normal = normalize(vec2(start.y - end.y, end.x - start.x));
    float radius = smoothstep(0.0, 1.0, abs(dot(vTextureCoord * texSize - start, normal)) / gradientBlur) * blur;

    for (float t = -30.0; t <= 30.0; t++)
    {
        float percent = (t + offset - 0.5) / 30.0;
        float weight = 1.0 - abs(percent);
        vec4 sample = texture2D(uSampler, vTextureCoord + delta / texSize * percent * radius);
        sample.rgb *= sample.a;
        color += sample * weight;
        total += weight;
    }

    color /= total;
    color.rgb /= color.a + 0.00001;

    gl_FragColor = color;
}
`,Qi=function(e){Ee(r,e);function r(t,n,i,o){t===void 0&&(t=100),n===void 0&&(n=600);var a=e.call(this,rf,nf)||this;return a.uniforms.blur=t,a.uniforms.gradientBlur=n,a.uniforms.start=i||new M(0,window.innerHeight/2),a.uniforms.end=o||new M(600,window.innerHeight/2),a.uniforms.delta=new M(30,30),a.uniforms.texSize=new M(window.innerWidth,window.innerHeight),a.updateDelta(),a}return r.prototype.updateDelta=function(){this.uniforms.delta.x=0,this.uniforms.delta.y=0},Object.defineProperty(r.prototype,"blur",{get:function(){return this.uniforms.blur},set:function(t){this.uniforms.blur=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"gradientBlur",{get:function(){return this.uniforms.gradientBlur},set:function(t){this.uniforms.gradientBlur=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"start",{get:function(){return this.uniforms.start},set:function(t){this.uniforms.start=t,this.updateDelta()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"end",{get:function(){return this.uniforms.end},set:function(t){this.uniforms.end=t,this.updateDelta()},enumerable:!1,configurable:!0}),r}(I),of=function(e){Ee(r,e);function r(){return e!==null&&e.apply(this,arguments)||this}return r.prototype.updateDelta=function(){var t=this.uniforms.end.x-this.uniforms.start.x,n=this.uniforms.end.y-this.uniforms.start.y,i=Math.sqrt(t*t+n*n);this.uniforms.delta.x=t/i,this.uniforms.delta.y=n/i},r}(Qi),af=function(e){Ee(r,e);function r(){return e!==null&&e.apply(this,arguments)||this}return r.prototype.updateDelta=function(){var t=this.uniforms.end.x-this.uniforms.start.x,n=this.uniforms.end.y-this.uniforms.start.y,i=Math.sqrt(t*t+n*n);this.uniforms.delta.x=-n/i,this.uniforms.delta.y=t/i},r}(Qi);(function(e){Ee(r,e);function r(t,n,i,o){t===void 0&&(t=100),n===void 0&&(n=600);var a=e.call(this)||this;return a.tiltShiftXFilter=new of(t,n,i,o),a.tiltShiftYFilter=new af(t,n,i,o),a}return r.prototype.apply=function(t,n,i,o){var a=t.getFilterTexture();this.tiltShiftXFilter.apply(t,n,a,1),this.tiltShiftYFilter.apply(t,a,i,o),t.returnFilterTexture(a)},Object.defineProperty(r.prototype,"blur",{get:function(){return this.tiltShiftXFilter.blur},set:function(t){this.tiltShiftXFilter.blur=this.tiltShiftYFilter.blur=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"gradientBlur",{get:function(){return this.tiltShiftXFilter.gradientBlur},set:function(t){this.tiltShiftXFilter.gradientBlur=this.tiltShiftYFilter.gradientBlur=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"start",{get:function(){return this.tiltShiftXFilter.start},set:function(t){this.tiltShiftXFilter.start=this.tiltShiftYFilter.start=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"end",{get:function(){return this.tiltShiftXFilter.end},set:function(t){this.tiltShiftXFilter.end=this.tiltShiftYFilter.end=t},enumerable:!1,configurable:!0}),r})(I);/*!
 * @pixi/filter-twist - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-twist is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Qr=function(e,r){return Qr=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},Qr(e,r)};function sf(e,r){Qr(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var uf=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,ff=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float radius;
uniform float angle;
uniform vec2 offset;
uniform vec4 filterArea;

vec2 mapCoord( vec2 coord )
{
    coord *= filterArea.xy;
    coord += filterArea.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= filterArea.zw;
    coord /= filterArea.xy;

    return coord;
}

vec2 twist(vec2 coord)
{
    coord -= offset;

    float dist = length(coord);

    if (dist < radius)
    {
        float ratioDist = (radius - dist) / radius;
        float angleMod = ratioDist * ratioDist * angle;
        float s = sin(angleMod);
        float c = cos(angleMod);
        coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);
    }

    coord += offset;

    return coord;
}

void main(void)
{

    vec2 coord = mapCoord(vTextureCoord);

    coord = twist(coord);

    coord = unmapCoord(coord);

    gl_FragColor = texture2D(uSampler, coord );

}
`;(function(e){sf(r,e);function r(t){var n=e.call(this,uf,ff)||this;return Object.assign(n,r.defaults,t),n}return Object.defineProperty(r.prototype,"offset",{get:function(){return this.uniforms.offset},set:function(t){this.uniforms.offset=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"radius",{get:function(){return this.uniforms.radius},set:function(t){this.uniforms.radius=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"angle",{get:function(){return this.uniforms.angle},set:function(t){this.uniforms.angle=t},enumerable:!1,configurable:!0}),r.defaults={radius:200,angle:4,padding:20,offset:new M},r})(I);/*!
 * @pixi/filter-zoom-blur - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-zoom-blur is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var tn=function(e,r){return tn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},tn(e,r)};function lf(e,r){tn(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}function hf(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]]);return t}var cf=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,df=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;

uniform vec2 uCenter;
uniform float uStrength;
uniform float uInnerRadius;
uniform float uRadius;

const float MAX_KERNEL_SIZE = \${maxKernelSize};

// author: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
highp float rand(vec2 co, float seed) {
    const highp float a = 12.9898, b = 78.233, c = 43758.5453;
    highp float dt = dot(co + seed, vec2(a, b)), sn = mod(dt, 3.14159);
    return fract(sin(sn) * c + seed);
}

void main() {

    float minGradient = uInnerRadius * 0.3;
    float innerRadius = (uInnerRadius + minGradient * 0.5) / filterArea.x;

    float gradient = uRadius * 0.3;
    float radius = (uRadius - gradient * 0.5) / filterArea.x;

    float countLimit = MAX_KERNEL_SIZE;

    vec2 dir = vec2(uCenter.xy / filterArea.xy - vTextureCoord);
    float dist = length(vec2(dir.x, dir.y * filterArea.y / filterArea.x));

    float strength = uStrength;

    float delta = 0.0;
    float gap;
    if (dist < innerRadius) {
        delta = innerRadius - dist;
        gap = minGradient;
    } else if (radius >= 0.0 && dist > radius) { // radius < 0 means it's infinity
        delta = dist - radius;
        gap = gradient;
    }

    if (delta > 0.0) {
        float normalCount = gap / filterArea.x;
        delta = (normalCount - delta) / normalCount;
        countLimit *= delta;
        strength *= delta;
        if (countLimit < 1.0)
        {
            gl_FragColor = texture2D(uSampler, vTextureCoord);
            return;
        }
    }

    // randomize the lookup values to hide the fixed number of samples
    float offset = rand(vTextureCoord, 0.0);

    float total = 0.0;
    vec4 color = vec4(0.0);

    dir *= strength;

    for (float t = 0.0; t < MAX_KERNEL_SIZE; t++) {
        float percent = (t + offset) / MAX_KERNEL_SIZE;
        float weight = 4.0 * (percent - percent * percent);
        vec2 p = vTextureCoord + dir * percent;
        vec4 sample = texture2D(uSampler, p);

        // switch to pre-multiplied alpha to correctly blur transparent images
        // sample.rgb *= sample.a;

        color += sample * weight;
        total += weight;

        if (t > countLimit){
            break;
        }
    }

    color /= total;
    // switch back from pre-multiplied alpha
    // color.rgb /= color.a + 0.00001;

    gl_FragColor = color;
}
`;(function(e){lf(r,e);function r(t){var n=this,i=Object.assign(r.defaults,t),o=i.maxKernelSize,a=hf(i,["maxKernelSize"]);return n=e.call(this,cf,df.replace("${maxKernelSize}",o.toFixed(1)))||this,Object.assign(n,a),n}return Object.defineProperty(r.prototype,"center",{get:function(){return this.uniforms.uCenter},set:function(t){this.uniforms.uCenter=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"strength",{get:function(){return this.uniforms.uStrength},set:function(t){this.uniforms.uStrength=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"innerRadius",{get:function(){return this.uniforms.uInnerRadius},set:function(t){this.uniforms.uInnerRadius=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"radius",{get:function(){return this.uniforms.uRadius},set:function(t){(t<0||t===1/0)&&(t=-1),this.uniforms.uRadius=t},enumerable:!1,configurable:!0}),r.defaults={strength:.1,center:[0,0],innerRadius:0,radius:-1,maxKernelSize:32},r})(I);export{pf as G,vf as O};
