function Cu(r){var e=this.constructor;return this.then(function(t){return e.resolve(r()).then(function(){return t})},function(t){return e.resolve(r()).then(function(){return e.reject(t)})})}function wu(r){var e=this;return new e(function(t,i){if(!(r&&typeof r.length!="undefined"))return i(new TypeError(typeof r+" "+r+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var n=Array.prototype.slice.call(r);if(n.length===0)return t([]);var o=n.length;function a(u,h){if(h&&(typeof h=="object"||typeof h=="function")){var l=h.then;if(typeof l=="function"){l.call(h,function(f){a(u,f)},function(f){n[u]={status:"rejected",reason:f},--o==0&&t(n)});return}}n[u]={status:"fulfilled",value:h},--o==0&&t(n)}for(var s=0;s<n.length;s++)a(s,n[s])})}var Pu=setTimeout;function lo(r){return Boolean(r&&typeof r.length!="undefined")}function Iu(){}function Su(r,e){return function(){r.apply(e,arguments)}}function ut(r){if(!(this instanceof ut))throw new TypeError("Promises must be constructed via new");if(typeof r!="function")throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],co(r,this)}function fo(r,e){for(;r._state===3;)r=r._value;if(r._state===0){r._deferreds.push(e);return}r._handled=!0,ut._immediateFn(function(){var t=r._state===1?e.onFulfilled:e.onRejected;if(t===null){(r._state===1?Wr:Oe)(e.promise,r._value);return}var i;try{i=t(r._value)}catch(n){Oe(e.promise,n);return}Wr(e.promise,i)})}function Wr(r,e){try{if(e===r)throw new TypeError("A promise cannot be resolved with itself.");if(e&&(typeof e=="object"||typeof e=="function")){var t=e.then;if(e instanceof ut){r._state=3,r._value=e,Yr(r);return}else if(typeof t=="function"){co(Su(t,e),r);return}}r._state=1,r._value=e,Yr(r)}catch(i){Oe(r,i)}}function Oe(r,e){r._state=2,r._value=e,Yr(r)}function Yr(r){r._state===2&&r._deferreds.length===0&&ut._immediateFn(function(){r._handled||ut._unhandledRejectionFn(r._value)});for(var e=0,t=r._deferreds.length;e<t;e++)fo(r,r._deferreds[e]);r._deferreds=null}function Ru(r,e,t){this.onFulfilled=typeof r=="function"?r:null,this.onRejected=typeof e=="function"?e:null,this.promise=t}function co(r,e){var t=!1;try{r(function(i){t||(t=!0,Wr(e,i))},function(i){t||(t=!0,Oe(e,i))})}catch(i){if(t)return;t=!0,Oe(e,i)}}ut.prototype.catch=function(r){return this.then(null,r)};ut.prototype.then=function(r,e){var t=new this.constructor(Iu);return fo(this,new Ru(r,e,t)),t};ut.prototype.finally=Cu;ut.all=function(r){return new ut(function(e,t){if(!lo(r))return t(new TypeError("Promise.all accepts an array"));var i=Array.prototype.slice.call(r);if(i.length===0)return e([]);var n=i.length;function o(s,u){try{if(u&&(typeof u=="object"||typeof u=="function")){var h=u.then;if(typeof h=="function"){h.call(u,function(l){o(s,l)},t);return}}i[s]=u,--n==0&&e(i)}catch(l){t(l)}}for(var a=0;a<i.length;a++)o(a,i[a])})};ut.allSettled=wu;ut.resolve=function(r){return r&&typeof r=="object"&&r.constructor===ut?r:new ut(function(e){e(r)})};ut.reject=function(r){return new ut(function(e,t){t(r)})};ut.race=function(r){return new ut(function(e,t){if(!lo(r))return t(new TypeError("Promise.race accepts an array"));for(var i=0,n=r.length;i<n;i++)ut.resolve(r[i]).then(e,t)})};ut._immediateFn=typeof setImmediate=="function"&&function(r){setImmediate(r)}||function(r){Pu(r,0)};ut._unhandledRejectionFn=function(e){typeof console!="undefined"&&console&&console.warn("Possible Unhandled Promise Rejection:",e)};var qr=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var po=Object.getOwnPropertySymbols,Au=Object.prototype.hasOwnProperty,Ou=Object.prototype.propertyIsEnumerable;function Nu(r){if(r==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(r)}function Fu(){try{if(!Object.assign)return!1;var r=new String("abc");if(r[5]="de",Object.getOwnPropertyNames(r)[0]==="5")return!1;for(var e={},t=0;t<10;t++)e["_"+String.fromCharCode(t)]=t;var i=Object.getOwnPropertyNames(e).map(function(o){return e[o]});if(i.join("")!=="0123456789")return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(o){n[o]=o}),Object.keys(Object.assign({},n)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var Uu=Fu()?Object.assign:function(r,e){for(var t,i=Nu(r),n,o=1;o<arguments.length;o++){t=Object(arguments[o]);for(var a in t)Au.call(t,a)&&(i[a]=t[a]);if(po){n=po(t);for(var s=0;s<n.length;s++)Ou.call(t,n[s])&&(i[n[s]]=t[n[s]])}}return i};/*!
 * @pixi/polyfill - v6.1.3
 * Compiled Mon, 13 Sep 2021 15:29:31 UTC
 *
 * @pixi/polyfill is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */self.Promise||(self.Promise=ut);Object.assign||(Object.assign=Uu);var Lu=16;Date.now&&Date.prototype.getTime||(Date.now=function(){return new Date().getTime()});if(!(self.performance&&self.performance.now)){var Mu=Date.now();self.performance||(self.performance={}),self.performance.now=function(){return Date.now()-Mu}}var Kr=Date.now(),vo=["ms","moz","webkit","o"];for(var Zr=0;Zr<vo.length&&!self.requestAnimationFrame;++Zr){var Jr=vo[Zr];self.requestAnimationFrame=self[Jr+"RequestAnimationFrame"],self.cancelAnimationFrame=self[Jr+"CancelAnimationFrame"]||self[Jr+"CancelRequestAnimationFrame"]}self.requestAnimationFrame||(self.requestAnimationFrame=function(r){if(typeof r!="function")throw new TypeError(r+"is not a function");var e=Date.now(),t=Lu+Kr-e;return t<0&&(t=0),Kr=e,self.setTimeout(function(){Kr=Date.now(),r(performance.now())},t)});self.cancelAnimationFrame||(self.cancelAnimationFrame=function(r){return clearTimeout(r)});Math.sign||(Math.sign=function(e){return e=Number(e),e===0||isNaN(e)?e:e>0?1:-1});Number.isInteger||(Number.isInteger=function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e});self.ArrayBuffer||(self.ArrayBuffer=Array);self.Float32Array||(self.Float32Array=Array);self.Uint32Array||(self.Uint32Array=Array);self.Uint16Array||(self.Uint16Array=Array);self.Uint8Array||(self.Uint8Array=Array);self.Int32Array||(self.Int32Array=Array);var Qr=/iPhone/i,_o=/iPod/i,mo=/iPad/i,go=/\biOS-universal(?:.+)Mac\b/i,ti=/\bAndroid(?:.+)Mobile\b/i,yo=/Android/i,_e=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,ir=/Silk/i,Gt=/Windows Phone/i,xo=/\bWindows(?:.+)ARM\b/i,bo=/BlackBerry/i,To=/BB10/i,Eo=/Opera Mini/i,Co=/\b(CriOS|Chrome)(?:.+)Mobile/i,wo=/Mobile(?:.+)Firefox\b/i,Po=function(r){return typeof r!="undefined"&&r.platform==="MacIntel"&&typeof r.maxTouchPoints=="number"&&r.maxTouchPoints>1&&typeof MSStream=="undefined"};function Bu(r){return function(e){return e.test(r)}}function Du(r){var e={userAgent:"",platform:"",maxTouchPoints:0};!r&&typeof navigator!="undefined"?e={userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints||0}:typeof r=="string"?e.userAgent=r:r&&r.userAgent&&(e={userAgent:r.userAgent,platform:r.platform,maxTouchPoints:r.maxTouchPoints||0});var t=e.userAgent,i=t.split("[FBAN");typeof i[1]!="undefined"&&(t=i[0]),i=t.split("Twitter"),typeof i[1]!="undefined"&&(t=i[0]);var n=Bu(t),o={apple:{phone:n(Qr)&&!n(Gt),ipod:n(_o),tablet:!n(Qr)&&(n(mo)||Po(e))&&!n(Gt),universal:n(go),device:(n(Qr)||n(_o)||n(mo)||n(go)||Po(e))&&!n(Gt)},amazon:{phone:n(_e),tablet:!n(_e)&&n(ir),device:n(_e)||n(ir)},android:{phone:!n(Gt)&&n(_e)||!n(Gt)&&n(ti),tablet:!n(Gt)&&!n(_e)&&!n(ti)&&(n(ir)||n(yo)),device:!n(Gt)&&(n(_e)||n(ir)||n(ti)||n(yo))||n(/\bokhttp\b/i)},windows:{phone:n(Gt),tablet:n(xo),device:n(Gt)||n(xo)},other:{blackberry:n(bo),blackberry10:n(To),opera:n(Eo),firefox:n(wo),chrome:n(Co),device:n(bo)||n(To)||n(Eo)||n(wo)||n(Co)},any:!1,phone:!1,tablet:!1};return o.any=o.apple.device||o.android.device||o.windows.device||o.other.device,o.phone=o.apple.phone||o.android.phone||o.windows.phone,o.tablet=o.apple.tablet||o.android.tablet||o.windows.tablet,o}/*!
 * @pixi/settings - v6.1.3
 * Compiled Mon, 13 Sep 2021 15:29:31 UTC
 *
 * @pixi/settings is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Nt=Du(self.navigator);function Gu(r){var e=!0;if(Nt.tablet||Nt.phone){if(Nt.apple.device){var t=navigator.userAgent.match(/OS (\d+)_(\d+)?/);if(t){var i=parseInt(t[1],10);i<11&&(e=!1)}}if(Nt.android.device){var t=navigator.userAgent.match(/Android\s([0-9.]*)/);if(t){var i=parseInt(t[1],10);i<7&&(e=!1)}}}return e?r:4}function ku(){return!Nt.apple.device}/*!
 * @pixi/constants - v6.1.3
 * Compiled Mon, 13 Sep 2021 15:29:31 UTC
 *
 * @pixi/constants is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Io;(function(r){r[r.WEBGL_LEGACY=0]="WEBGL_LEGACY",r[r.WEBGL=1]="WEBGL",r[r.WEBGL2=2]="WEBGL2"})(Io||(Io={}));var So;(function(r){r[r.UNKNOWN=0]="UNKNOWN",r[r.WEBGL=1]="WEBGL",r[r.CANVAS=2]="CANVAS"})(So||(So={}));var Ro;(function(r){r[r.COLOR=16384]="COLOR",r[r.DEPTH=256]="DEPTH",r[r.STENCIL=1024]="STENCIL"})(Ro||(Ro={}));var Ao;(function(r){r[r.NORMAL=0]="NORMAL",r[r.ADD=1]="ADD",r[r.MULTIPLY=2]="MULTIPLY",r[r.SCREEN=3]="SCREEN",r[r.OVERLAY=4]="OVERLAY",r[r.DARKEN=5]="DARKEN",r[r.LIGHTEN=6]="LIGHTEN",r[r.COLOR_DODGE=7]="COLOR_DODGE",r[r.COLOR_BURN=8]="COLOR_BURN",r[r.HARD_LIGHT=9]="HARD_LIGHT",r[r.SOFT_LIGHT=10]="SOFT_LIGHT",r[r.DIFFERENCE=11]="DIFFERENCE",r[r.EXCLUSION=12]="EXCLUSION",r[r.HUE=13]="HUE",r[r.SATURATION=14]="SATURATION",r[r.COLOR=15]="COLOR",r[r.LUMINOSITY=16]="LUMINOSITY",r[r.NORMAL_NPM=17]="NORMAL_NPM",r[r.ADD_NPM=18]="ADD_NPM",r[r.SCREEN_NPM=19]="SCREEN_NPM",r[r.NONE=20]="NONE",r[r.SRC_OVER=0]="SRC_OVER",r[r.SRC_IN=21]="SRC_IN",r[r.SRC_OUT=22]="SRC_OUT",r[r.SRC_ATOP=23]="SRC_ATOP",r[r.DST_OVER=24]="DST_OVER",r[r.DST_IN=25]="DST_IN",r[r.DST_OUT=26]="DST_OUT",r[r.DST_ATOP=27]="DST_ATOP",r[r.ERASE=26]="ERASE",r[r.SUBTRACT=28]="SUBTRACT",r[r.XOR=29]="XOR"})(Ao||(Ao={}));var Oo;(function(r){r[r.POINTS=0]="POINTS",r[r.LINES=1]="LINES",r[r.LINE_LOOP=2]="LINE_LOOP",r[r.LINE_STRIP=3]="LINE_STRIP",r[r.TRIANGLES=4]="TRIANGLES",r[r.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",r[r.TRIANGLE_FAN=6]="TRIANGLE_FAN"})(Oo||(Oo={}));var No;(function(r){r[r.RGBA=6408]="RGBA",r[r.RGB=6407]="RGB",r[r.RG=33319]="RG",r[r.RED=6403]="RED",r[r.RGBA_INTEGER=36249]="RGBA_INTEGER",r[r.RGB_INTEGER=36248]="RGB_INTEGER",r[r.RG_INTEGER=33320]="RG_INTEGER",r[r.RED_INTEGER=36244]="RED_INTEGER",r[r.ALPHA=6406]="ALPHA",r[r.LUMINANCE=6409]="LUMINANCE",r[r.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",r[r.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",r[r.DEPTH_STENCIL=34041]="DEPTH_STENCIL"})(No||(No={}));var Fo;(function(r){r[r.TEXTURE_2D=3553]="TEXTURE_2D",r[r.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",r[r.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY",r[r.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",r[r.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",r[r.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",r[r.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",r[r.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",r[r.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z"})(Fo||(Fo={}));var Uo;(function(r){r[r.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",r[r.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",r[r.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",r[r.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",r[r.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",r[r.UNSIGNED_INT=5125]="UNSIGNED_INT",r[r.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",r[r.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",r[r.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",r[r.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",r[r.BYTE=5120]="BYTE",r[r.SHORT=5122]="SHORT",r[r.INT=5124]="INT",r[r.FLOAT=5126]="FLOAT",r[r.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV",r[r.HALF_FLOAT=36193]="HALF_FLOAT"})(Uo||(Uo={}));var Lo;(function(r){r[r.FLOAT=0]="FLOAT",r[r.INT=1]="INT",r[r.UINT=2]="UINT"})(Lo||(Lo={}));var ei;(function(r){r[r.NEAREST=0]="NEAREST",r[r.LINEAR=1]="LINEAR"})(ei||(ei={}));var ri;(function(r){r[r.CLAMP=33071]="CLAMP",r[r.REPEAT=10497]="REPEAT",r[r.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"})(ri||(ri={}));var ii;(function(r){r[r.OFF=0]="OFF",r[r.POW2=1]="POW2",r[r.ON=2]="ON",r[r.ON_MANUAL=3]="ON_MANUAL"})(ii||(ii={}));var Mo;(function(r){r[r.NPM=0]="NPM",r[r.UNPACK=1]="UNPACK",r[r.PMA=2]="PMA",r[r.NO_PREMULTIPLIED_ALPHA=0]="NO_PREMULTIPLIED_ALPHA",r[r.PREMULTIPLY_ON_UPLOAD=1]="PREMULTIPLY_ON_UPLOAD",r[r.PREMULTIPLY_ALPHA=2]="PREMULTIPLY_ALPHA"})(Mo||(Mo={}));var Bo;(function(r){r[r.NO=0]="NO",r[r.YES=1]="YES",r[r.AUTO=2]="AUTO",r[r.BLEND=0]="BLEND",r[r.CLEAR=1]="CLEAR",r[r.BLIT=2]="BLIT"})(Bo||(Bo={}));var ni;(function(r){r[r.AUTO=0]="AUTO",r[r.MANUAL=1]="MANUAL"})(ni||(ni={}));var Ne;(function(r){r.LOW="lowp",r.MEDIUM="mediump",r.HIGH="highp"})(Ne||(Ne={}));var Do;(function(r){r[r.NONE=0]="NONE",r[r.SCISSOR=1]="SCISSOR",r[r.STENCIL=2]="STENCIL",r[r.SPRITE=3]="SPRITE"})(Do||(Do={}));var oi;(function(r){r[r.NONE=0]="NONE",r[r.LOW=2]="LOW",r[r.MEDIUM=4]="MEDIUM",r[r.HIGH=8]="HIGH"})(oi||(oi={}));var Go;(function(r){r[r.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",r[r.ARRAY_BUFFER=34962]="ARRAY_BUFFER",r[r.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER"})(Go||(Go={}));var O={MIPMAP_TEXTURES:ii.POW2,ANISOTROPIC_LEVEL:0,RESOLUTION:1,FILTER_RESOLUTION:1,FILTER_MULTISAMPLE:oi.NONE,SPRITE_MAX_TEXTURES:Gu(32),SPRITE_BATCH_SIZE:4096,RENDER_OPTIONS:{view:null,antialias:!1,autoDensity:!1,backgroundColor:0,backgroundAlpha:1,useContextAlpha:!0,clearBeforeRender:!0,preserveDrawingBuffer:!1,width:800,height:600,legacy:!1},GC_MODE:ni.AUTO,GC_MAX_IDLE:60*60,GC_MAX_CHECK_COUNT:60*10,WRAP_MODE:ri.CLAMP,SCALE_MODE:ei.LINEAR,PRECISION_VERTEX:Ne.HIGH,PRECISION_FRAGMENT:Nt.apple.device?Ne.HIGH:Ne.MEDIUM,CAN_UPLOAD_SAME_BUFFER:ku(),CREATE_IMAGE_BITMAP:!1,ROUND_PIXELS:!1},ko={exports:{}};(function(r){var e=Object.prototype.hasOwnProperty,t="~";function i(){}Object.create&&(i.prototype=Object.create(null),new i().__proto__||(t=!1));function n(u,h,l){this.fn=u,this.context=h,this.once=l||!1}function o(u,h,l,f,c){if(typeof l!="function")throw new TypeError("The listener must be a function");var d=new n(l,f||u,c),p=t?t+h:h;return u._events[p]?u._events[p].fn?u._events[p]=[u._events[p],d]:u._events[p].push(d):(u._events[p]=d,u._eventsCount++),u}function a(u,h){--u._eventsCount==0?u._events=new i:delete u._events[h]}function s(){this._events=new i,this._eventsCount=0}s.prototype.eventNames=function(){var h=[],l,f;if(this._eventsCount===0)return h;for(f in l=this._events)e.call(l,f)&&h.push(t?f.slice(1):f);return Object.getOwnPropertySymbols?h.concat(Object.getOwnPropertySymbols(l)):h},s.prototype.listeners=function(h){var l=t?t+h:h,f=this._events[l];if(!f)return[];if(f.fn)return[f.fn];for(var c=0,d=f.length,p=new Array(d);c<d;c++)p[c]=f[c].fn;return p},s.prototype.listenerCount=function(h){var l=t?t+h:h,f=this._events[l];return f?f.fn?1:f.length:0},s.prototype.emit=function(h,l,f,c,d,p){var _=t?t+h:h;if(!this._events[_])return!1;var v=this._events[_],g=arguments.length,y,x;if(v.fn){switch(v.once&&this.removeListener(h,v.fn,void 0,!0),g){case 1:return v.fn.call(v.context),!0;case 2:return v.fn.call(v.context,l),!0;case 3:return v.fn.call(v.context,l,f),!0;case 4:return v.fn.call(v.context,l,f,c),!0;case 5:return v.fn.call(v.context,l,f,c,d),!0;case 6:return v.fn.call(v.context,l,f,c,d,p),!0}for(x=1,y=new Array(g-1);x<g;x++)y[x-1]=arguments[x];v.fn.apply(v.context,y)}else{var T=v.length,m;for(x=0;x<T;x++)switch(v[x].once&&this.removeListener(h,v[x].fn,void 0,!0),g){case 1:v[x].fn.call(v[x].context);break;case 2:v[x].fn.call(v[x].context,l);break;case 3:v[x].fn.call(v[x].context,l,f);break;case 4:v[x].fn.call(v[x].context,l,f,c);break;default:if(!y)for(m=1,y=new Array(g-1);m<g;m++)y[m-1]=arguments[m];v[x].fn.apply(v[x].context,y)}}return!0},s.prototype.on=function(h,l,f){return o(this,h,l,f,!1)},s.prototype.once=function(h,l,f){return o(this,h,l,f,!0)},s.prototype.removeListener=function(h,l,f,c){var d=t?t+h:h;if(!this._events[d])return this;if(!l)return a(this,d),this;var p=this._events[d];if(p.fn)p.fn===l&&(!c||p.once)&&(!f||p.context===f)&&a(this,d);else{for(var _=0,v=[],g=p.length;_<g;_++)(p[_].fn!==l||c&&!p[_].once||f&&p[_].context!==f)&&v.push(p[_]);v.length?this._events[d]=v.length===1?v[0]:v:a(this,d)}return this},s.prototype.removeAllListeners=function(h){var l;return h?(l=t?t+h:h,this._events[l]&&a(this,l)):(this._events=new i,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=t,s.EventEmitter=s,r.exports=s})(ko);var Fe=ko.exports,ai={exports:{}};ai.exports=nr;ai.exports.default=nr;function nr(r,e,t){t=t||2;var i=e&&e.length,n=i?e[0]*t:r.length,o=jo(r,0,n,t,!0),a=[];if(!o||o.next===o.prev)return a;var s,u,h,l,f,c,d;if(i&&(o=Vu(r,e,o,t)),r.length>80*t){s=h=r[0],u=l=r[1];for(var p=t;p<n;p+=t)f=r[p],c=r[p+1],f<s&&(s=f),c<u&&(u=c),f>h&&(h=f),c>l&&(l=c);d=Math.max(h-s,l-u),d=d!==0?1/d:0}return Ue(o,a,t,s,u,d),a}function jo(r,e,t,i,n){var o,a;if(n===hi(r,e,t,i)>0)for(o=e;o<t;o+=i)a=zo(o,r[o],r[o+1],a);else for(o=t-i;o>=e;o-=i)a=zo(o,r[o],r[o+1],a);return a&&or(a,a.next)&&(Me(a),a=a.next),a}function Wt(r,e){if(!r)return r;e||(e=r);var t=r,i;do if(i=!1,!t.steiner&&(or(t,t.next)||it(t.prev,t,t.next)===0)){if(Me(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Ue(r,e,t,i,n,o,a){if(!!r){!a&&o&&Ku(r,i,n,o);for(var s=r,u,h;r.prev!==r.next;){if(u=r.prev,h=r.next,o?Xu(r,i,n,o):ju(r)){e.push(u.i/t),e.push(r.i/t),e.push(h.i/t),Me(r),r=h.next,s=h.next;continue}if(r=h,r===s){a?a===1?(r=Hu(Wt(r),e,t),Ue(r,e,t,i,n,o,2)):a===2&&zu(r,e,t,i,n,o):Ue(Wt(r),e,t,i,n,o,1);break}}}}function ju(r){var e=r.prev,t=r,i=r.next;if(it(e,t,i)>=0)return!1;for(var n=r.next.next;n!==r.prev;){if(me(e.x,e.y,t.x,t.y,i.x,i.y,n.x,n.y)&&it(n.prev,n,n.next)>=0)return!1;n=n.next}return!0}function Xu(r,e,t,i){var n=r.prev,o=r,a=r.next;if(it(n,o,a)>=0)return!1;for(var s=n.x<o.x?n.x<a.x?n.x:a.x:o.x<a.x?o.x:a.x,u=n.y<o.y?n.y<a.y?n.y:a.y:o.y<a.y?o.y:a.y,h=n.x>o.x?n.x>a.x?n.x:a.x:o.x>a.x?o.x:a.x,l=n.y>o.y?n.y>a.y?n.y:a.y:o.y>a.y?o.y:a.y,f=si(s,u,e,t,i),c=si(h,l,e,t,i),d=r.prevZ,p=r.nextZ;d&&d.z>=f&&p&&p.z<=c;){if(d!==r.prev&&d!==r.next&&me(n.x,n.y,o.x,o.y,a.x,a.y,d.x,d.y)&&it(d.prev,d,d.next)>=0||(d=d.prevZ,p!==r.prev&&p!==r.next&&me(n.x,n.y,o.x,o.y,a.x,a.y,p.x,p.y)&&it(p.prev,p,p.next)>=0))return!1;p=p.nextZ}for(;d&&d.z>=f;){if(d!==r.prev&&d!==r.next&&me(n.x,n.y,o.x,o.y,a.x,a.y,d.x,d.y)&&it(d.prev,d,d.next)>=0)return!1;d=d.prevZ}for(;p&&p.z<=c;){if(p!==r.prev&&p!==r.next&&me(n.x,n.y,o.x,o.y,a.x,a.y,p.x,p.y)&&it(p.prev,p,p.next)>=0)return!1;p=p.nextZ}return!0}function Hu(r,e,t){var i=r;do{var n=i.prev,o=i.next.next;!or(n,o)&&Xo(n,i,i.next,o)&&Le(n,o)&&Le(o,n)&&(e.push(n.i/t),e.push(i.i/t),e.push(o.i/t),Me(i),Me(i.next),i=r=o),i=i.next}while(i!==r);return Wt(i)}function zu(r,e,t,i,n,o){var a=r;do{for(var s=a.next.next;s!==a.prev;){if(a.i!==s.i&&Qu(a,s)){var u=Ho(a,s);a=Wt(a,a.next),u=Wt(u,u.next),Ue(a,e,t,i,n,o),Ue(u,e,t,i,n,o);return}s=s.next}a=a.next}while(a!==r)}function Vu(r,e,t,i){var n=[],o,a,s,u,h;for(o=0,a=e.length;o<a;o++)s=e[o]*i,u=o<a-1?e[o+1]*i:r.length,h=jo(r,s,u,i,!1),h===h.next&&(h.steiner=!0),n.push(Ju(h));for(n.sort($u),o=0;o<n.length;o++)t=Wu(n[o],t),t=Wt(t,t.next);return t}function $u(r,e){return r.x-e.x}function Wu(r,e){var t=Yu(r,e);if(!t)return e;var i=Ho(t,r),n=Wt(t,t.next);return Wt(i,i.next),e===t?n:e}function Yu(r,e){var t=e,i=r.x,n=r.y,o=-1/0,a;do{if(n<=t.y&&n>=t.next.y&&t.next.y!==t.y){var s=t.x+(n-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(s<=i&&s>o){if(o=s,s===i){if(n===t.y)return t;if(n===t.next.y)return t.next}a=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!a)return null;if(i===o)return a;var u=a,h=a.x,l=a.y,f=1/0,c;t=a;do i>=t.x&&t.x>=h&&i!==t.x&&me(n<l?i:o,n,h,l,n<l?o:i,n,t.x,t.y)&&(c=Math.abs(n-t.y)/(i-t.x),Le(t,r)&&(c<f||c===f&&(t.x>a.x||t.x===a.x&&qu(a,t)))&&(a=t,f=c)),t=t.next;while(t!==u);return a}function qu(r,e){return it(r.prev,r,e.prev)<0&&it(e.next,r,r.next)<0}function Ku(r,e,t,i){var n=r;do n.z===null&&(n.z=si(n.x,n.y,e,t,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==r);n.prevZ.nextZ=null,n.prevZ=null,Zu(n)}function Zu(r){var e,t,i,n,o,a,s,u,h=1;do{for(t=r,r=null,o=null,a=0;t;){for(a++,i=t,s=0,e=0;e<h&&(s++,i=i.nextZ,!!i);e++);for(u=h;s>0||u>0&&i;)s!==0&&(u===0||!i||t.z<=i.z)?(n=t,t=t.nextZ,s--):(n=i,i=i.nextZ,u--),o?o.nextZ=n:r=n,n.prevZ=o,o=n;t=i}o.nextZ=null,h*=2}while(a>1);return r}function si(r,e,t,i,n){return r=32767*(r-t)*n,e=32767*(e-i)*n,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function Ju(r){var e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function me(r,e,t,i,n,o,a,s){return(n-a)*(e-s)-(r-a)*(o-s)>=0&&(r-a)*(i-s)-(t-a)*(e-s)>=0&&(t-a)*(o-s)-(n-a)*(i-s)>=0}function Qu(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!th(r,e)&&(Le(r,e)&&Le(e,r)&&eh(r,e)&&(it(r.prev,r,e.prev)||it(r,e.prev,e))||or(r,e)&&it(r.prev,r,r.next)>0&&it(e.prev,e,e.next)>0)}function it(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function or(r,e){return r.x===e.x&&r.y===e.y}function Xo(r,e,t,i){var n=sr(it(r,e,t)),o=sr(it(r,e,i)),a=sr(it(t,i,r)),s=sr(it(t,i,e));return!!(n!==o&&a!==s||n===0&&ar(r,t,e)||o===0&&ar(r,i,e)||a===0&&ar(t,r,i)||s===0&&ar(t,e,i))}function ar(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function sr(r){return r>0?1:r<0?-1:0}function th(r,e){var t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Xo(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Le(r,e){return it(r.prev,r,r.next)<0?it(r,e,r.next)>=0&&it(r,r.prev,e)>=0:it(r,e,r.prev)<0||it(r,r.next,e)<0}function eh(r,e){var t=r,i=!1,n=(r.x+e.x)/2,o=(r.y+e.y)/2;do t.y>o!=t.next.y>o&&t.next.y!==t.y&&n<(t.next.x-t.x)*(o-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==r);return i}function Ho(r,e){var t=new ui(r.i,r.x,r.y),i=new ui(e.i,e.x,e.y),n=r.next,o=e.prev;return r.next=e,e.prev=r,t.next=n,n.prev=t,i.next=t,t.prev=i,o.next=i,i.prev=o,i}function zo(r,e,t,i){var n=new ui(r,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function Me(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function ui(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}nr.deviation=function(r,e,t,i){var n=e&&e.length,o=n?e[0]*t:r.length,a=Math.abs(hi(r,0,o,t));if(n)for(var s=0,u=e.length;s<u;s++){var h=e[s]*t,l=s<u-1?e[s+1]*t:r.length;a-=Math.abs(hi(r,h,l,t))}var f=0;for(s=0;s<i.length;s+=3){var c=i[s]*t,d=i[s+1]*t,p=i[s+2]*t;f+=Math.abs((r[c]-r[p])*(r[d+1]-r[c+1])-(r[c]-r[d])*(r[p+1]-r[c+1]))}return a===0&&f===0?0:Math.abs((f-a)/a)};function hi(r,e,t,i){for(var n=0,o=e,a=t-i;o<t;o+=i)n+=(r[a]-r[o])*(r[o+1]+r[a+1]),a=o;return n}nr.flatten=function(r){for(var e=r[0][0].length,t={vertices:[],holes:[],dimensions:e},i=0,n=0;n<r.length;n++){for(var o=0;o<r[n].length;o++)for(var a=0;a<e;a++)t.vertices.push(r[n][o][a]);n>0&&(i+=r[n-1].length,t.holes.push(i))}return t};var Vo=ai.exports,li={exports:{}};/*! https://mths.be/punycode v1.3.2 by @mathias */(function(r,e){(function(t){var i=e&&!e.nodeType&&e,n=r&&!r.nodeType&&r,o=typeof qr=="object"&&qr;(o.global===o||o.window===o||o.self===o)&&(t=o);var a,s=2147483647,u=36,h=1,l=26,f=38,c=700,d=72,p=128,_="-",v=/^xn--/,g=/[^\x20-\x7E]/,y=/[\x2E\u3002\uFF0E\uFF61]/g,x={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},T=u-h,m=Math.floor,b=String.fromCharCode,w;function S(R){throw RangeError(x[R])}function E(R,M){for(var z=R.length,$=[];z--;)$[z]=M(R[z]);return $}function C(R,M){var z=R.split("@"),$="";z.length>1&&($=z[0]+"@",R=z[1]),R=R.replace(y,".");var q=R.split("."),ct=E(q,M).join(".");return $+ct}function U(R){for(var M=[],z=0,$=R.length,q,ct;z<$;)q=R.charCodeAt(z++),q>=55296&&q<=56319&&z<$?(ct=R.charCodeAt(z++),(ct&64512)==56320?M.push(((q&1023)<<10)+(ct&1023)+65536):(M.push(q),z--)):M.push(q);return M}function N(R){return E(R,function(M){var z="";return M>65535&&(M-=65536,z+=b(M>>>10&1023|55296),M=56320|M&1023),z+=b(M),z}).join("")}function V(R){return R-48<10?R-22:R-65<26?R-65:R-97<26?R-97:u}function J(R,M){return R+22+75*(R<26)-((M!=0)<<5)}function A(R,M,z){var $=0;for(R=z?m(R/c):R>>1,R+=m(R/M);R>T*l>>1;$+=u)R=m(R/T);return m($+(T+1)*R/(R+f))}function I(R){var M=[],z=R.length,$,q=0,ct=p,tt=d,ot,vt,rt,at,B,et,st,X,gt;for(ot=R.lastIndexOf(_),ot<0&&(ot=0),vt=0;vt<ot;++vt)R.charCodeAt(vt)>=128&&S("not-basic"),M.push(R.charCodeAt(vt));for(rt=ot>0?ot+1:0;rt<z;){for(at=q,B=1,et=u;rt>=z&&S("invalid-input"),st=V(R.charCodeAt(rt++)),(st>=u||st>m((s-q)/B))&&S("overflow"),q+=st*B,X=et<=tt?h:et>=tt+l?l:et-tt,!(st<X);et+=u)gt=u-X,B>m(s/gt)&&S("overflow"),B*=gt;$=M.length+1,tt=A(q-at,$,at==0),m(q/$)>s-ct&&S("overflow"),ct+=m(q/$),q%=$,M.splice(q++,0,ct)}return N(M)}function j(R){var M,z,$,q,ct,tt,ot,vt,rt,at,B,et=[],st,X,gt,Ot;for(R=U(R),st=R.length,M=p,z=0,ct=d,tt=0;tt<st;++tt)B=R[tt],B<128&&et.push(b(B));for($=q=et.length,q&&et.push(_);$<st;){for(ot=s,tt=0;tt<st;++tt)B=R[tt],B>=M&&B<ot&&(ot=B);for(X=$+1,ot-M>m((s-z)/X)&&S("overflow"),z+=(ot-M)*X,M=ot,tt=0;tt<st;++tt)if(B=R[tt],B<M&&++z>s&&S("overflow"),B==M){for(vt=z,rt=u;at=rt<=ct?h:rt>=ct+l?l:rt-ct,!(vt<at);rt+=u)Ot=vt-at,gt=u-at,et.push(b(J(at+Ot%gt,0))),vt=m(Ot/gt);et.push(b(J(vt,0))),ct=A(z,X,$==q),z=0,++$}++z,++M}return et.join("")}function mt(R){return C(R,function(M){return v.test(M)?I(M.slice(4).toLowerCase()):M})}function G(R){return C(R,function(M){return g.test(M)?"xn--"+j(M):M})}if(a={version:"1.3.2",ucs2:{decode:U,encode:N},decode:I,encode:j,toASCII:G,toUnicode:mt},i&&n)if(r.exports==i)n.exports=a;else for(w in a)a.hasOwnProperty(w)&&(i[w]=a[w]);else t.punycode=a})(qr)})(li,li.exports);var rh={isString:function(r){return typeof r=="string"},isObject:function(r){return typeof r=="object"&&r!==null},isNull:function(r){return r===null},isNullOrUndefined:function(r){return r==null}},Be={};function ih(r,e){return Object.prototype.hasOwnProperty.call(r,e)}var nh=function(r,e,t,i){e=e||"&",t=t||"=";var n={};if(typeof r!="string"||r.length===0)return n;var o=/\+/g;r=r.split(e);var a=1e3;i&&typeof i.maxKeys=="number"&&(a=i.maxKeys);var s=r.length;a>0&&s>a&&(s=a);for(var u=0;u<s;++u){var h=r[u].replace(o,"%20"),l=h.indexOf(t),f,c,d,p;l>=0?(f=h.substr(0,l),c=h.substr(l+1)):(f=h,c=""),d=decodeURIComponent(f),p=decodeURIComponent(c),ih(n,d)?Array.isArray(n[d])?n[d].push(p):n[d]=[n[d],p]:n[d]=p}return n},De=function(r){switch(typeof r){case"string":return r;case"boolean":return r?"true":"false";case"number":return isFinite(r)?r:"";default:return""}},oh=function(r,e,t,i){return e=e||"&",t=t||"=",r===null&&(r=void 0),typeof r=="object"?Object.keys(r).map(function(n){var o=encodeURIComponent(De(n))+t;return Array.isArray(r[n])?r[n].map(function(a){return o+encodeURIComponent(De(a))}).join(e):o+encodeURIComponent(De(r[n]))}).join(e):i?encodeURIComponent(De(i))+t+encodeURIComponent(De(r)):""};Be.decode=Be.parse=nh;Be.encode=Be.stringify=oh;var ah=li.exports,Ft=rh,sh=ur,uh=yh,hh=gh;function wt(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}var lh=/^([a-z0-9.+-]+:)/i,fh=/:[0-9]*$/,ch=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,dh=["<",">",'"',"`"," ","\r",`
`,"	"],ph=["{","}","|","\\","^","`"].concat(dh),fi=["'"].concat(ph),$o=["%","/","?",";","#"].concat(fi),Wo=["/","?","#"],vh=255,Yo=/^[+a-z0-9A-Z_-]{0,63}$/,_h=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,mh={javascript:!0,"javascript:":!0},ci={javascript:!0,"javascript:":!0},ge={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},di=Be;function ur(r,e,t){if(r&&Ft.isObject(r)&&r instanceof wt)return r;var i=new wt;return i.parse(r,e,t),i}wt.prototype.parse=function(r,e,t){if(!Ft.isString(r))throw new TypeError("Parameter 'url' must be a string, not "+typeof r);var i=r.indexOf("?"),n=i!==-1&&i<r.indexOf("#")?"?":"#",o=r.split(n),a=/\\/g;o[0]=o[0].replace(a,"/"),r=o.join(n);var s=r;if(s=s.trim(),!t&&r.split("#").length===1){var u=ch.exec(s);if(u)return this.path=s,this.href=s,this.pathname=u[1],u[2]?(this.search=u[2],e?this.query=di.parse(this.search.substr(1)):this.query=this.search.substr(1)):e&&(this.search="",this.query={}),this}var h=lh.exec(s);if(h){h=h[0];var l=h.toLowerCase();this.protocol=l,s=s.substr(h.length)}if(t||h||s.match(/^\/\/[^@\/]+@[^@\/]+/)){var f=s.substr(0,2)==="//";f&&!(h&&ci[h])&&(s=s.substr(2),this.slashes=!0)}if(!ci[h]&&(f||h&&!ge[h])){for(var c=-1,d=0;d<Wo.length;d++){var p=s.indexOf(Wo[d]);p!==-1&&(c===-1||p<c)&&(c=p)}var _,v;c===-1?v=s.lastIndexOf("@"):v=s.lastIndexOf("@",c),v!==-1&&(_=s.slice(0,v),s=s.slice(v+1),this.auth=decodeURIComponent(_)),c=-1;for(var d=0;d<$o.length;d++){var p=s.indexOf($o[d]);p!==-1&&(c===-1||p<c)&&(c=p)}c===-1&&(c=s.length),this.host=s.slice(0,c),s=s.slice(c),this.parseHost(),this.hostname=this.hostname||"";var g=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!g)for(var y=this.hostname.split(/\./),d=0,x=y.length;d<x;d++){var T=y[d];if(!!T&&!T.match(Yo)){for(var m="",b=0,w=T.length;b<w;b++)T.charCodeAt(b)>127?m+="x":m+=T[b];if(!m.match(Yo)){var S=y.slice(0,d),E=y.slice(d+1),C=T.match(_h);C&&(S.push(C[1]),E.unshift(C[2])),E.length&&(s="/"+E.join(".")+s),this.hostname=S.join(".");break}}}this.hostname.length>vh?this.hostname="":this.hostname=this.hostname.toLowerCase(),g||(this.hostname=ah.toASCII(this.hostname));var U=this.port?":"+this.port:"",N=this.hostname||"";this.host=N+U,this.href+=this.host,g&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),s[0]!=="/"&&(s="/"+s))}if(!mh[l])for(var d=0,x=fi.length;d<x;d++){var V=fi[d];if(s.indexOf(V)!==-1){var J=encodeURIComponent(V);J===V&&(J=escape(V)),s=s.split(V).join(J)}}var A=s.indexOf("#");A!==-1&&(this.hash=s.substr(A),s=s.slice(0,A));var I=s.indexOf("?");if(I!==-1?(this.search=s.substr(I),this.query=s.substr(I+1),e&&(this.query=di.parse(this.query)),s=s.slice(0,I)):e&&(this.search="",this.query={}),s&&(this.pathname=s),ge[l]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var U=this.pathname||"",j=this.search||"";this.path=U+j}return this.href=this.format(),this};function gh(r){return Ft.isString(r)&&(r=ur(r)),r instanceof wt?r.format():wt.prototype.format.call(r)}wt.prototype.format=function(){var r=this.auth||"";r&&(r=encodeURIComponent(r),r=r.replace(/%3A/i,":"),r+="@");var e=this.protocol||"",t=this.pathname||"",i=this.hash||"",n=!1,o="";this.host?n=r+this.host:this.hostname&&(n=r+(this.hostname.indexOf(":")===-1?this.hostname:"["+this.hostname+"]"),this.port&&(n+=":"+this.port)),this.query&&Ft.isObject(this.query)&&Object.keys(this.query).length&&(o=di.stringify(this.query));var a=this.search||o&&"?"+o||"";return e&&e.substr(-1)!==":"&&(e+=":"),this.slashes||(!e||ge[e])&&n!==!1?(n="//"+(n||""),t&&t.charAt(0)!=="/"&&(t="/"+t)):n||(n=""),i&&i.charAt(0)!=="#"&&(i="#"+i),a&&a.charAt(0)!=="?"&&(a="?"+a),t=t.replace(/[?#]/g,function(s){return encodeURIComponent(s)}),a=a.replace("#","%23"),e+n+t+a+i};function yh(r,e){return ur(r,!1,!0).resolve(e)}wt.prototype.resolve=function(r){return this.resolveObject(ur(r,!1,!0)).format()};wt.prototype.resolveObject=function(r){if(Ft.isString(r)){var e=new wt;e.parse(r,!1,!0),r=e}for(var t=new wt,i=Object.keys(this),n=0;n<i.length;n++){var o=i[n];t[o]=this[o]}if(t.hash=r.hash,r.href==="")return t.href=t.format(),t;if(r.slashes&&!r.protocol){for(var a=Object.keys(r),s=0;s<a.length;s++){var u=a[s];u!=="protocol"&&(t[u]=r[u])}return ge[t.protocol]&&t.hostname&&!t.pathname&&(t.path=t.pathname="/"),t.href=t.format(),t}if(r.protocol&&r.protocol!==t.protocol){if(!ge[r.protocol]){for(var h=Object.keys(r),l=0;l<h.length;l++){var f=h[l];t[f]=r[f]}return t.href=t.format(),t}if(t.protocol=r.protocol,!r.host&&!ci[r.protocol]){for(var x=(r.pathname||"").split("/");x.length&&!(r.host=x.shift()););r.host||(r.host=""),r.hostname||(r.hostname=""),x[0]!==""&&x.unshift(""),x.length<2&&x.unshift(""),t.pathname=x.join("/")}else t.pathname=r.pathname;if(t.search=r.search,t.query=r.query,t.host=r.host||"",t.auth=r.auth,t.hostname=r.hostname||r.host,t.port=r.port,t.pathname||t.search){var c=t.pathname||"",d=t.search||"";t.path=c+d}return t.slashes=t.slashes||r.slashes,t.href=t.format(),t}var p=t.pathname&&t.pathname.charAt(0)==="/",_=r.host||r.pathname&&r.pathname.charAt(0)==="/",v=_||p||t.host&&r.pathname,g=v,y=t.pathname&&t.pathname.split("/")||[],x=r.pathname&&r.pathname.split("/")||[],T=t.protocol&&!ge[t.protocol];if(T&&(t.hostname="",t.port=null,t.host&&(y[0]===""?y[0]=t.host:y.unshift(t.host)),t.host="",r.protocol&&(r.hostname=null,r.port=null,r.host&&(x[0]===""?x[0]=r.host:x.unshift(r.host)),r.host=null),v=v&&(x[0]===""||y[0]==="")),_)t.host=r.host||r.host===""?r.host:t.host,t.hostname=r.hostname||r.hostname===""?r.hostname:t.hostname,t.search=r.search,t.query=r.query,y=x;else if(x.length)y||(y=[]),y.pop(),y=y.concat(x),t.search=r.search,t.query=r.query;else if(!Ft.isNullOrUndefined(r.search)){if(T){t.hostname=t.host=y.shift();var m=t.host&&t.host.indexOf("@")>0?t.host.split("@"):!1;m&&(t.auth=m.shift(),t.host=t.hostname=m.shift())}return t.search=r.search,t.query=r.query,(!Ft.isNull(t.pathname)||!Ft.isNull(t.search))&&(t.path=(t.pathname?t.pathname:"")+(t.search?t.search:"")),t.href=t.format(),t}if(!y.length)return t.pathname=null,t.search?t.path="/"+t.search:t.path=null,t.href=t.format(),t;for(var b=y.slice(-1)[0],w=(t.host||r.host||y.length>1)&&(b==="."||b==="..")||b==="",S=0,E=y.length;E>=0;E--)b=y[E],b==="."?y.splice(E,1):b===".."?(y.splice(E,1),S++):S&&(y.splice(E,1),S--);if(!v&&!g)for(;S--;S)y.unshift("..");v&&y[0]!==""&&(!y[0]||y[0].charAt(0)!=="/")&&y.unshift(""),w&&y.join("/").substr(-1)!=="/"&&y.push("");var C=y[0]===""||y[0]&&y[0].charAt(0)==="/";if(T){t.hostname=t.host=C?"":y.length?y.shift():"";var m=t.host&&t.host.indexOf("@")>0?t.host.split("@"):!1;m&&(t.auth=m.shift(),t.host=t.hostname=m.shift())}return v=v||t.host&&y.length,v&&!C&&y.unshift(""),y.length?t.pathname=y.join("/"):(t.pathname=null,t.path=null),(!Ft.isNull(t.pathname)||!Ft.isNull(t.search))&&(t.path=(t.pathname?t.pathname:"")+(t.search?t.search:"")),t.auth=r.auth||t.auth,t.slashes=t.slashes||r.slashes,t.href=t.format(),t};wt.prototype.parseHost=function(){var r=this.host,e=fh.exec(r);e&&(e=e[0],e!==":"&&(this.port=e.substr(1)),r=r.substr(0,r.length-e.length)),r&&(this.hostname=r)};/*!
 * @pixi/constants - v6.1.3
 * Compiled Mon, 13 Sep 2021 15:29:31 UTC
 *
 * @pixi/constants is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var kt;(function(r){r[r.WEBGL_LEGACY=0]="WEBGL_LEGACY",r[r.WEBGL=1]="WEBGL",r[r.WEBGL2=2]="WEBGL2"})(kt||(kt={}));var Ge;(function(r){r[r.UNKNOWN=0]="UNKNOWN",r[r.WEBGL=1]="WEBGL",r[r.CANVAS=2]="CANVAS"})(Ge||(Ge={}));var hr;(function(r){r[r.COLOR=16384]="COLOR",r[r.DEPTH=256]="DEPTH",r[r.STENCIL=1024]="STENCIL"})(hr||(hr={}));var F;(function(r){r[r.NORMAL=0]="NORMAL",r[r.ADD=1]="ADD",r[r.MULTIPLY=2]="MULTIPLY",r[r.SCREEN=3]="SCREEN",r[r.OVERLAY=4]="OVERLAY",r[r.DARKEN=5]="DARKEN",r[r.LIGHTEN=6]="LIGHTEN",r[r.COLOR_DODGE=7]="COLOR_DODGE",r[r.COLOR_BURN=8]="COLOR_BURN",r[r.HARD_LIGHT=9]="HARD_LIGHT",r[r.SOFT_LIGHT=10]="SOFT_LIGHT",r[r.DIFFERENCE=11]="DIFFERENCE",r[r.EXCLUSION=12]="EXCLUSION",r[r.HUE=13]="HUE",r[r.SATURATION=14]="SATURATION",r[r.COLOR=15]="COLOR",r[r.LUMINOSITY=16]="LUMINOSITY",r[r.NORMAL_NPM=17]="NORMAL_NPM",r[r.ADD_NPM=18]="ADD_NPM",r[r.SCREEN_NPM=19]="SCREEN_NPM",r[r.NONE=20]="NONE",r[r.SRC_OVER=0]="SRC_OVER",r[r.SRC_IN=21]="SRC_IN",r[r.SRC_OUT=22]="SRC_OUT",r[r.SRC_ATOP=23]="SRC_ATOP",r[r.DST_OVER=24]="DST_OVER",r[r.DST_IN=25]="DST_IN",r[r.DST_OUT=26]="DST_OUT",r[r.DST_ATOP=27]="DST_ATOP",r[r.ERASE=26]="ERASE",r[r.SUBTRACT=28]="SUBTRACT",r[r.XOR=29]="XOR"})(F||(F={}));var Pt;(function(r){r[r.POINTS=0]="POINTS",r[r.LINES=1]="LINES",r[r.LINE_LOOP=2]="LINE_LOOP",r[r.LINE_STRIP=3]="LINE_STRIP",r[r.TRIANGLES=4]="TRIANGLES",r[r.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",r[r.TRIANGLE_FAN=6]="TRIANGLE_FAN"})(Pt||(Pt={}));var P;(function(r){r[r.RGBA=6408]="RGBA",r[r.RGB=6407]="RGB",r[r.RG=33319]="RG",r[r.RED=6403]="RED",r[r.RGBA_INTEGER=36249]="RGBA_INTEGER",r[r.RGB_INTEGER=36248]="RGB_INTEGER",r[r.RG_INTEGER=33320]="RG_INTEGER",r[r.RED_INTEGER=36244]="RED_INTEGER",r[r.ALPHA=6406]="ALPHA",r[r.LUMINANCE=6409]="LUMINANCE",r[r.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",r[r.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",r[r.DEPTH_STENCIL=34041]="DEPTH_STENCIL"})(P||(P={}));var Jt;(function(r){r[r.TEXTURE_2D=3553]="TEXTURE_2D",r[r.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",r[r.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY",r[r.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",r[r.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",r[r.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",r[r.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",r[r.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",r[r.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z"})(Jt||(Jt={}));var D;(function(r){r[r.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",r[r.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",r[r.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",r[r.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",r[r.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",r[r.UNSIGNED_INT=5125]="UNSIGNED_INT",r[r.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",r[r.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",r[r.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",r[r.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",r[r.BYTE=5120]="BYTE",r[r.SHORT=5122]="SHORT",r[r.INT=5124]="INT",r[r.FLOAT=5126]="FLOAT",r[r.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV",r[r.HALF_FLOAT=36193]="HALF_FLOAT"})(D||(D={}));var lr;(function(r){r[r.FLOAT=0]="FLOAT",r[r.INT=1]="INT",r[r.UINT=2]="UINT"})(lr||(lr={}));var Et;(function(r){r[r.NEAREST=0]="NEAREST",r[r.LINEAR=1]="LINEAR"})(Et||(Et={}));var jt;(function(r){r[r.CLAMP=33071]="CLAMP",r[r.REPEAT=10497]="REPEAT",r[r.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"})(jt||(jt={}));var Ut;(function(r){r[r.OFF=0]="OFF",r[r.POW2=1]="POW2",r[r.ON=2]="ON",r[r.ON_MANUAL=3]="ON_MANUAL"})(Ut||(Ut={}));var Xt;(function(r){r[r.NPM=0]="NPM",r[r.UNPACK=1]="UNPACK",r[r.PMA=2]="PMA",r[r.NO_PREMULTIPLIED_ALPHA=0]="NO_PREMULTIPLIED_ALPHA",r[r.PREMULTIPLY_ON_UPLOAD=1]="PREMULTIPLY_ON_UPLOAD",r[r.PREMULTIPLY_ALPHA=2]="PREMULTIPLY_ALPHA"})(Xt||(Xt={}));var Yt;(function(r){r[r.NO=0]="NO",r[r.YES=1]="YES",r[r.AUTO=2]="AUTO",r[r.BLEND=0]="BLEND",r[r.CLEAR=1]="CLEAR",r[r.BLIT=2]="BLIT"})(Yt||(Yt={}));var pi;(function(r){r[r.AUTO=0]="AUTO",r[r.MANUAL=1]="MANUAL"})(pi||(pi={}));var Lt;(function(r){r.LOW="lowp",r.MEDIUM="mediump",r.HIGH="highp"})(Lt||(Lt={}));var Tt;(function(r){r[r.NONE=0]="NONE",r[r.SCISSOR=1]="SCISSOR",r[r.STENCIL=2]="STENCIL",r[r.SPRITE=3]="SPRITE"})(Tt||(Tt={}));var dt;(function(r){r[r.NONE=0]="NONE",r[r.LOW=2]="LOW",r[r.MEDIUM=4]="MEDIUM",r[r.HIGH=8]="HIGH"})(dt||(dt={}));var Mt;(function(r){r[r.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",r[r.ARRAY_BUFFER=34962]="ARRAY_BUFFER",r[r.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER"})(Mt||(Mt={}));/*!
 * @pixi/utils - v6.1.3
 * Compiled Mon, 13 Sep 2021 15:29:31 UTC
 *
 * @pixi/utils is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var ye={parse:sh,format:hh,resolve:uh};O.RETINA_PREFIX=/@([0-9\.]+)x/;O.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT=!1;var qo=!1,Ko="6.1.3";function xh(r){var e;if(!qo){if(navigator.userAgent.toLowerCase().indexOf("chrome")>-1){var t=[`
 %c %c %c PixiJS `+Ko+" - \u2730 "+r+` \u2730  %c  %c  http://www.pixijs.com/  %c %c \u2665%c\u2665%c\u2665 

`,"background: #ff66a5; padding:5px 0;","background: #ff66a5; padding:5px 0;","color: #ff66a5; background: #030307; padding:5px 0;","background: #ff66a5; padding:5px 0;","background: #ffc3dc; padding:5px 0;","background: #ff66a5; padding:5px 0;","color: #ff2424; background: #fff; padding:5px 0;","color: #ff2424; background: #fff; padding:5px 0;","color: #ff2424; background: #fff; padding:5px 0;"];(e=self.console).log.apply(e,t)}else self.console&&self.console.log("PixiJS "+Ko+" - "+r+" - http://www.pixijs.com/");qo=!0}}var vi;function bh(){return typeof vi=="undefined"&&(vi=function(){var e={stencil:!0,failIfMajorPerformanceCaveat:O.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT};try{if(!self.WebGLRenderingContext)return!1;var t=document.createElement("canvas"),i=t.getContext("webgl",e)||t.getContext("experimental-webgl",e),n=!!(i&&i.getContextAttributes().stencil);if(i){var o=i.getExtension("WEBGL_lose_context");o&&o.loseContext()}return i=null,n}catch{return!1}}()),vi}var Th="#f0f8ff",Eh="#faebd7",Ch="#00ffff",wh="#7fffd4",Ph="#f0ffff",Ih="#f5f5dc",Sh="#ffe4c4",Rh="#000000",Ah="#ffebcd",Oh="#0000ff",Nh="#8a2be2",Fh="#a52a2a",Uh="#deb887",Lh="#5f9ea0",Mh="#7fff00",Bh="#d2691e",Dh="#ff7f50",Gh="#6495ed",kh="#fff8dc",jh="#dc143c",Xh="#00ffff",Hh="#00008b",zh="#008b8b",Vh="#b8860b",$h="#a9a9a9",Wh="#006400",Yh="#a9a9a9",qh="#bdb76b",Kh="#8b008b",Zh="#556b2f",Jh="#ff8c00",Qh="#9932cc",tl="#8b0000",el="#e9967a",rl="#8fbc8f",il="#483d8b",nl="#2f4f4f",ol="#2f4f4f",al="#00ced1",sl="#9400d3",ul="#ff1493",hl="#00bfff",ll="#696969",fl="#696969",cl="#1e90ff",dl="#b22222",pl="#fffaf0",vl="#228b22",_l="#ff00ff",ml="#dcdcdc",gl="#f8f8ff",yl="#daa520",xl="#ffd700",bl="#808080",Tl="#008000",El="#adff2f",Cl="#808080",wl="#f0fff0",Pl="#ff69b4",Il="#cd5c5c",Sl="#4b0082",Rl="#fffff0",Al="#f0e68c",Ol="#fff0f5",Nl="#e6e6fa",Fl="#7cfc00",Ul="#fffacd",Ll="#add8e6",Ml="#f08080",Bl="#e0ffff",Dl="#fafad2",Gl="#d3d3d3",kl="#90ee90",jl="#d3d3d3",Xl="#ffb6c1",Hl="#ffa07a",zl="#20b2aa",Vl="#87cefa",$l="#778899",Wl="#778899",Yl="#b0c4de",ql="#ffffe0",Kl="#00ff00",Zl="#32cd32",Jl="#faf0e6",Ql="#ff00ff",tf="#800000",ef="#66cdaa",rf="#0000cd",nf="#ba55d3",of="#9370db",af="#3cb371",sf="#7b68ee",uf="#00fa9a",hf="#48d1cc",lf="#c71585",ff="#191970",cf="#f5fffa",df="#ffe4e1",pf="#ffe4b5",vf="#ffdead",_f="#000080",mf="#fdf5e6",gf="#808000",yf="#6b8e23",xf="#ffa500",bf="#ff4500",Tf="#da70d6",Ef="#eee8aa",Cf="#98fb98",wf="#afeeee",Pf="#db7093",If="#ffefd5",Sf="#ffdab9",Rf="#cd853f",Af="#ffc0cb",Of="#dda0dd",Nf="#b0e0e6",Ff="#800080",Uf="#663399",Lf="#ff0000",Mf="#bc8f8f",Bf="#4169e1",Df="#8b4513",Gf="#fa8072",kf="#f4a460",jf="#2e8b57",Xf="#fff5ee",Hf="#a0522d",zf="#c0c0c0",Vf="#87ceeb",$f="#6a5acd",Wf="#708090",Yf="#708090",qf="#fffafa",Kf="#00ff7f",Zf="#4682b4",Jf="#d2b48c",Qf="#008080",tc="#d8bfd8",ec="#ff6347",rc="#40e0d0",ic="#ee82ee",nc="#f5deb3",oc="#ffffff",ac="#f5f5f5",sc="#ffff00",uc="#9acd32",hc={aliceblue:Th,antiquewhite:Eh,aqua:Ch,aquamarine:wh,azure:Ph,beige:Ih,bisque:Sh,black:Rh,blanchedalmond:Ah,blue:Oh,blueviolet:Nh,brown:Fh,burlywood:Uh,cadetblue:Lh,chartreuse:Mh,chocolate:Bh,coral:Dh,cornflowerblue:Gh,cornsilk:kh,crimson:jh,cyan:Xh,darkblue:Hh,darkcyan:zh,darkgoldenrod:Vh,darkgray:$h,darkgreen:Wh,darkgrey:Yh,darkkhaki:qh,darkmagenta:Kh,darkolivegreen:Zh,darkorange:Jh,darkorchid:Qh,darkred:tl,darksalmon:el,darkseagreen:rl,darkslateblue:il,darkslategray:nl,darkslategrey:ol,darkturquoise:al,darkviolet:sl,deeppink:ul,deepskyblue:hl,dimgray:ll,dimgrey:fl,dodgerblue:cl,firebrick:dl,floralwhite:pl,forestgreen:vl,fuchsia:_l,gainsboro:ml,ghostwhite:gl,goldenrod:yl,gold:xl,gray:bl,green:Tl,greenyellow:El,grey:Cl,honeydew:wl,hotpink:Pl,indianred:Il,indigo:Sl,ivory:Rl,khaki:Al,lavenderblush:Ol,lavender:Nl,lawngreen:Fl,lemonchiffon:Ul,lightblue:Ll,lightcoral:Ml,lightcyan:Bl,lightgoldenrodyellow:Dl,lightgray:Gl,lightgreen:kl,lightgrey:jl,lightpink:Xl,lightsalmon:Hl,lightseagreen:zl,lightskyblue:Vl,lightslategray:$l,lightslategrey:Wl,lightsteelblue:Yl,lightyellow:ql,lime:Kl,limegreen:Zl,linen:Jl,magenta:Ql,maroon:tf,mediumaquamarine:ef,mediumblue:rf,mediumorchid:nf,mediumpurple:of,mediumseagreen:af,mediumslateblue:sf,mediumspringgreen:uf,mediumturquoise:hf,mediumvioletred:lf,midnightblue:ff,mintcream:cf,mistyrose:df,moccasin:pf,navajowhite:vf,navy:_f,oldlace:mf,olive:gf,olivedrab:yf,orange:xf,orangered:bf,orchid:Tf,palegoldenrod:Ef,palegreen:Cf,paleturquoise:wf,palevioletred:Pf,papayawhip:If,peachpuff:Sf,peru:Rf,pink:Af,plum:Of,powderblue:Nf,purple:Ff,rebeccapurple:Uf,red:Lf,rosybrown:Mf,royalblue:Bf,saddlebrown:Df,salmon:Gf,sandybrown:kf,seagreen:jf,seashell:Xf,sienna:Hf,silver:zf,skyblue:Vf,slateblue:$f,slategray:Wf,slategrey:Yf,snow:qf,springgreen:Kf,steelblue:Zf,tan:Jf,teal:Qf,thistle:tc,tomato:ec,turquoise:rc,violet:ic,wheat:nc,white:oc,whitesmoke:ac,yellow:sc,yellowgreen:uc};function yt(r,e){return e===void 0&&(e=[]),e[0]=(r>>16&255)/255,e[1]=(r>>8&255)/255,e[2]=(r&255)/255,e}function Zo(r){var e=r.toString(16);return e="000000".substr(0,6-e.length)+e,"#"+e}function Jo(r){return typeof r=="string"&&(r=hc[r.toLowerCase()]||r,r[0]==="#"&&(r=r.substr(1))),parseInt(r,16)}function It(r){return(r[0]*255<<16)+(r[1]*255<<8)+(r[2]*255|0)}function lc(){for(var r=[],e=[],t=0;t<32;t++)r[t]=t,e[t]=t;r[F.NORMAL_NPM]=F.NORMAL,r[F.ADD_NPM]=F.ADD,r[F.SCREEN_NPM]=F.SCREEN,e[F.NORMAL]=F.NORMAL_NPM,e[F.ADD]=F.ADD_NPM,e[F.SCREEN]=F.SCREEN_NPM;var i=[];return i.push(e),i.push(r),i}var Qo=lc();function ta(r,e){return Qo[e?1:0][r]}function fc(r,e,t,i){return t=t||new Float32Array(4),i||i===void 0?(t[0]=r[0]*e,t[1]=r[1]*e,t[2]=r[2]*e):(t[0]=r[0],t[1]=r[1],t[2]=r[2]),t[3]=e,t}function _i(r,e){if(e===1)return(e*255<<24)+r;if(e===0)return 0;var t=r>>16&255,i=r>>8&255,n=r&255;return t=t*e+.5|0,i=i*e+.5|0,n=n*e+.5|0,(e*255<<24)+(t<<16)+(i<<8)+n}function ea(r,e,t,i){return t=t||new Float32Array(4),t[0]=(r>>16&255)/255,t[1]=(r>>8&255)/255,t[2]=(r&255)/255,(i||i===void 0)&&(t[0]*=e,t[1]*=e,t[2]*=e),t[3]=e,t}function cc(r,e){e===void 0&&(e=null);var t=r*6;if(e=e||new Uint16Array(t),e.length!==t)throw new Error("Out buffer length is incorrect, got "+e.length+" and expected "+t);for(var i=0,n=0;i<t;i+=6,n+=4)e[i+0]=n+0,e[i+1]=n+1,e[i+2]=n+2,e[i+3]=n+0,e[i+4]=n+2,e[i+5]=n+3;return e}function ra(r){if(r.BYTES_PER_ELEMENT===4)return r instanceof Float32Array?"Float32Array":r instanceof Uint32Array?"Uint32Array":"Int32Array";if(r.BYTES_PER_ELEMENT===2){if(r instanceof Uint16Array)return"Uint16Array"}else if(r.BYTES_PER_ELEMENT===1&&r instanceof Uint8Array)return"Uint8Array";return null}function fr(r){return r+=r===0?1:0,--r,r|=r>>>1,r|=r>>>2,r|=r>>>4,r|=r>>>8,r|=r>>>16,r+1}function ia(r){return!(r&r-1)&&!!r}function na(r){var e=(r>65535?1:0)<<4;r>>>=e;var t=(r>255?1:0)<<3;return r>>>=t,e|=t,t=(r>15?1:0)<<2,r>>>=t,e|=t,t=(r>3?1:0)<<1,r>>>=t,e|=t,e|r>>1}function xe(r,e,t){var i=r.length,n;if(!(e>=i||t===0)){t=e+t>i?i-e:t;var o=i-t;for(n=e;n<o;++n)r[n]=r[n+t];r.length=o}}function be(r){return r===0?0:r<0?-1:1}var dc=0;function Te(){return++dc}var oa={};function Qt(r,e,t){if(t===void 0&&(t=3),!oa[e]){var i=new Error().stack;typeof i=="undefined"?console.warn("PixiJS Deprecation Warning: ",e+`
Deprecated since v`+r):(i=i.split(`
`).splice(t).join(`
`),console.groupCollapsed?(console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s","color:#614108;background:#fffbe6","font-weight:normal;color:#614108;background:#fffbe6",e+`
Deprecated since v`+r),console.warn(i),console.groupEnd()):(console.warn("PixiJS Deprecation Warning: ",e+`
Deprecated since v`+r),console.warn(i))),oa[e]=!0}}var aa={},Ht=Object.create(null),te=Object.create(null),sa=function(){function r(e,t,i){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.resolution=i||O.RESOLUTION,this.resize(e,t)}return r.prototype.clear=function(){this.context.setTransform(1,0,0,1,0,0),this.context.clearRect(0,0,this.canvas.width,this.canvas.height)},r.prototype.resize=function(e,t){this.canvas.width=Math.round(e*this.resolution),this.canvas.height=Math.round(t*this.resolution)},r.prototype.destroy=function(){this.context=null,this.canvas=null},Object.defineProperty(r.prototype,"width",{get:function(){return this.canvas.width},set:function(e){this.canvas.width=Math.round(e)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return this.canvas.height},set:function(e){this.canvas.height=Math.round(e)},enumerable:!1,configurable:!0}),r}();function pc(r){var e=r.width,t=r.height,i=r.getContext("2d"),n=i.getImageData(0,0,e,t),o=n.data,a=o.length,s={top:null,left:null,right:null,bottom:null},u=null,h,l,f;for(h=0;h<a;h+=4)o[h+3]!==0&&(l=h/4%e,f=~~(h/4/e),s.top===null&&(s.top=f),(s.left===null||l<s.left)&&(s.left=l),(s.right===null||s.right<l)&&(s.right=l+1),(s.bottom===null||s.bottom<f)&&(s.bottom=f));return s.top!==null&&(e=s.right-s.left,t=s.bottom-s.top+1,u=i.getImageData(s.left,s.top,e,t)),{height:t,width:e,data:u}}var cr;function vc(r,e){if(e===void 0&&(e=self.location),r.indexOf("data:")===0)return"";e=e||self.location,cr||(cr=document.createElement("a")),cr.href=r;var t=ye.parse(cr.href),i=!t.port&&e.port===""||t.port===e.port;return t.hostname!==e.hostname||!i||t.protocol!==e.protocol?"anonymous":""}function dr(r,e){var t=O.RETINA_PREFIX.exec(r);return t?parseFloat(t[1]):e!==void 0?e:1}/*!
 * @pixi/math - v6.1.3
 * Compiled Mon, 13 Sep 2021 15:29:31 UTC
 *
 * @pixi/math is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var pr=Math.PI*2,_c=180/Math.PI,ee=Math.PI/180,lt;(function(r){r[r.POLY=0]="POLY",r[r.RECT=1]="RECT",r[r.CIRC=2]="CIRC",r[r.ELIP=3]="ELIP",r[r.RREC=4]="RREC"})(lt||(lt={}));var W=function(){function r(e,t,i,n){e===void 0&&(e=0),t===void 0&&(t=0),i===void 0&&(i=0),n===void 0&&(n=0),this.x=Number(e),this.y=Number(t),this.width=Number(i),this.height=Number(n),this.type=lt.RECT}return Object.defineProperty(r.prototype,"left",{get:function(){return this.x},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"right",{get:function(){return this.x+this.width},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"top",{get:function(){return this.y},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"bottom",{get:function(){return this.y+this.height},enumerable:!1,configurable:!0}),Object.defineProperty(r,"EMPTY",{get:function(){return new r(0,0,0,0)},enumerable:!1,configurable:!0}),r.prototype.clone=function(){return new r(this.x,this.y,this.width,this.height)},r.prototype.copyFrom=function(e){return this.x=e.x,this.y=e.y,this.width=e.width,this.height=e.height,this},r.prototype.copyTo=function(e){return e.x=this.x,e.y=this.y,e.width=this.width,e.height=this.height,e},r.prototype.contains=function(e,t){return this.width<=0||this.height<=0?!1:e>=this.x&&e<this.x+this.width&&t>=this.y&&t<this.y+this.height},r.prototype.pad=function(e,t){return e===void 0&&(e=0),t===void 0&&(t=e),this.x-=e,this.y-=t,this.width+=e*2,this.height+=t*2,this},r.prototype.fit=function(e){var t=Math.max(this.x,e.x),i=Math.min(this.x+this.width,e.x+e.width),n=Math.max(this.y,e.y),o=Math.min(this.y+this.height,e.y+e.height);return this.x=t,this.width=Math.max(i-t,0),this.y=n,this.height=Math.max(o-n,0),this},r.prototype.ceil=function(e,t){e===void 0&&(e=1),t===void 0&&(t=.001);var i=Math.ceil((this.x+this.width-t)*e)/e,n=Math.ceil((this.y+this.height-t)*e)/e;return this.x=Math.floor((this.x+t)*e)/e,this.y=Math.floor((this.y+t)*e)/e,this.width=i-this.x,this.height=n-this.y,this},r.prototype.enlarge=function(e){var t=Math.min(this.x,e.x),i=Math.max(this.x+this.width,e.x+e.width),n=Math.min(this.y,e.y),o=Math.max(this.y+this.height,e.y+e.height);return this.x=t,this.width=i-t,this.y=n,this.height=o-n,this},r.prototype.toString=function(){return"[@pixi/math:Rectangle x="+this.x+" y="+this.y+" width="+this.width+" height="+this.height+"]"},r}(),mc=function(){function r(e,t,i){e===void 0&&(e=0),t===void 0&&(t=0),i===void 0&&(i=0),this.x=e,this.y=t,this.radius=i,this.type=lt.CIRC}return r.prototype.clone=function(){return new r(this.x,this.y,this.radius)},r.prototype.contains=function(e,t){if(this.radius<=0)return!1;var i=this.radius*this.radius,n=this.x-e,o=this.y-t;return n*=n,o*=o,n+o<=i},r.prototype.getBounds=function(){return new W(this.x-this.radius,this.y-this.radius,this.radius*2,this.radius*2)},r.prototype.toString=function(){return"[@pixi/math:Circle x="+this.x+" y="+this.y+" radius="+this.radius+"]"},r}(),gc=function(){function r(e,t,i,n){e===void 0&&(e=0),t===void 0&&(t=0),i===void 0&&(i=0),n===void 0&&(n=0),this.x=e,this.y=t,this.width=i,this.height=n,this.type=lt.ELIP}return r.prototype.clone=function(){return new r(this.x,this.y,this.width,this.height)},r.prototype.contains=function(e,t){if(this.width<=0||this.height<=0)return!1;var i=(e-this.x)/this.width,n=(t-this.y)/this.height;return i*=i,n*=n,i+n<=1},r.prototype.getBounds=function(){return new W(this.x-this.width,this.y-this.height,this.width,this.height)},r.prototype.toString=function(){return"[@pixi/math:Ellipse x="+this.x+" y="+this.y+" width="+this.width+" height="+this.height+"]"},r}(),vr=function(){function r(){for(var e=arguments,t=[],i=0;i<arguments.length;i++)t[i]=e[i];var n=Array.isArray(t[0])?t[0]:t;if(typeof n[0]!="number"){for(var o=[],a=0,s=n.length;a<s;a++)o.push(n[a].x,n[a].y);n=o}this.points=n,this.type=lt.POLY,this.closeStroke=!0}return r.prototype.clone=function(){var e=this.points.slice(),t=new r(e);return t.closeStroke=this.closeStroke,t},r.prototype.contains=function(e,t){for(var i=!1,n=this.points.length/2,o=0,a=n-1;o<n;a=o++){var s=this.points[o*2],u=this.points[o*2+1],h=this.points[a*2],l=this.points[a*2+1],f=u>t!=l>t&&e<(h-s)*((t-u)/(l-u))+s;f&&(i=!i)}return i},r.prototype.toString=function(){return"[@pixi/math:Polygon"+("closeStroke="+this.closeStroke)+("points="+this.points.reduce(function(e,t){return e+", "+t},"")+"]")},r}(),yc=function(){function r(e,t,i,n,o){e===void 0&&(e=0),t===void 0&&(t=0),i===void 0&&(i=0),n===void 0&&(n=0),o===void 0&&(o=20),this.x=e,this.y=t,this.width=i,this.height=n,this.radius=o,this.type=lt.RREC}return r.prototype.clone=function(){return new r(this.x,this.y,this.width,this.height,this.radius)},r.prototype.contains=function(e,t){if(this.width<=0||this.height<=0)return!1;if(e>=this.x&&e<=this.x+this.width&&t>=this.y&&t<=this.y+this.height){if(t>=this.y+this.radius&&t<=this.y+this.height-this.radius||e>=this.x+this.radius&&e<=this.x+this.width-this.radius)return!0;var i=e-(this.x+this.radius),n=t-(this.y+this.radius),o=this.radius*this.radius;if(i*i+n*n<=o||(i=e-(this.x+this.width-this.radius),i*i+n*n<=o)||(n=t-(this.y+this.height-this.radius),i*i+n*n<=o)||(i=e-(this.x+this.radius),i*i+n*n<=o))return!0}return!1},r.prototype.toString=function(){return"[@pixi/math:RoundedRectangle x="+this.x+" y="+this.y+("width="+this.width+" height="+this.height+" radius="+this.radius+"]")},r}(),Y=function(){function r(e,t){e===void 0&&(e=0),t===void 0&&(t=0),this.x=0,this.y=0,this.x=e,this.y=t}return r.prototype.clone=function(){return new r(this.x,this.y)},r.prototype.copyFrom=function(e){return this.set(e.x,e.y),this},r.prototype.copyTo=function(e){return e.set(this.x,this.y),e},r.prototype.equals=function(e){return e.x===this.x&&e.y===this.y},r.prototype.set=function(e,t){return e===void 0&&(e=0),t===void 0&&(t=e),this.x=e,this.y=t,this},r.prototype.toString=function(){return"[@pixi/math:Point x="+this.x+" y="+this.y+"]"},r}(),re=function(){function r(e,t,i,n){i===void 0&&(i=0),n===void 0&&(n=0),this._x=i,this._y=n,this.cb=e,this.scope=t}return r.prototype.clone=function(e,t){return e===void 0&&(e=this.cb),t===void 0&&(t=this.scope),new r(e,t,this._x,this._y)},r.prototype.set=function(e,t){return e===void 0&&(e=0),t===void 0&&(t=e),(this._x!==e||this._y!==t)&&(this._x=e,this._y=t,this.cb.call(this.scope)),this},r.prototype.copyFrom=function(e){return(this._x!==e.x||this._y!==e.y)&&(this._x=e.x,this._y=e.y,this.cb.call(this.scope)),this},r.prototype.copyTo=function(e){return e.set(this._x,this._y),e},r.prototype.equals=function(e){return e.x===this._x&&e.y===this._y},r.prototype.toString=function(){return"[@pixi/math:ObservablePoint x="+0+" y="+0+" scope="+this.scope+"]"},Object.defineProperty(r.prototype,"x",{get:function(){return this._x},set:function(e){this._x!==e&&(this._x=e,this.cb.call(this.scope))},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"y",{get:function(){return this._y},set:function(e){this._y!==e&&(this._y=e,this.cb.call(this.scope))},enumerable:!1,configurable:!0}),r}(),pt=function(){function r(e,t,i,n,o,a){e===void 0&&(e=1),t===void 0&&(t=0),i===void 0&&(i=0),n===void 0&&(n=1),o===void 0&&(o=0),a===void 0&&(a=0),this.array=null,this.a=e,this.b=t,this.c=i,this.d=n,this.tx=o,this.ty=a}return r.prototype.fromArray=function(e){this.a=e[0],this.b=e[1],this.c=e[3],this.d=e[4],this.tx=e[2],this.ty=e[5]},r.prototype.set=function(e,t,i,n,o,a){return this.a=e,this.b=t,this.c=i,this.d=n,this.tx=o,this.ty=a,this},r.prototype.toArray=function(e,t){this.array||(this.array=new Float32Array(9));var i=t||this.array;return e?(i[0]=this.a,i[1]=this.b,i[2]=0,i[3]=this.c,i[4]=this.d,i[5]=0,i[6]=this.tx,i[7]=this.ty,i[8]=1):(i[0]=this.a,i[1]=this.c,i[2]=this.tx,i[3]=this.b,i[4]=this.d,i[5]=this.ty,i[6]=0,i[7]=0,i[8]=1),i},r.prototype.apply=function(e,t){t=t||new Y;var i=e.x,n=e.y;return t.x=this.a*i+this.c*n+this.tx,t.y=this.b*i+this.d*n+this.ty,t},r.prototype.applyInverse=function(e,t){t=t||new Y;var i=1/(this.a*this.d+this.c*-this.b),n=e.x,o=e.y;return t.x=this.d*i*n+-this.c*i*o+(this.ty*this.c-this.tx*this.d)*i,t.y=this.a*i*o+-this.b*i*n+(-this.ty*this.a+this.tx*this.b)*i,t},r.prototype.translate=function(e,t){return this.tx+=e,this.ty+=t,this},r.prototype.scale=function(e,t){return this.a*=e,this.d*=t,this.c*=e,this.b*=t,this.tx*=e,this.ty*=t,this},r.prototype.rotate=function(e){var t=Math.cos(e),i=Math.sin(e),n=this.a,o=this.c,a=this.tx;return this.a=n*t-this.b*i,this.b=n*i+this.b*t,this.c=o*t-this.d*i,this.d=o*i+this.d*t,this.tx=a*t-this.ty*i,this.ty=a*i+this.ty*t,this},r.prototype.append=function(e){var t=this.a,i=this.b,n=this.c,o=this.d;return this.a=e.a*t+e.b*n,this.b=e.a*i+e.b*o,this.c=e.c*t+e.d*n,this.d=e.c*i+e.d*o,this.tx=e.tx*t+e.ty*n+this.tx,this.ty=e.tx*i+e.ty*o+this.ty,this},r.prototype.setTransform=function(e,t,i,n,o,a,s,u,h){return this.a=Math.cos(s+h)*o,this.b=Math.sin(s+h)*o,this.c=-Math.sin(s-u)*a,this.d=Math.cos(s-u)*a,this.tx=e-(i*this.a+n*this.c),this.ty=t-(i*this.b+n*this.d),this},r.prototype.prepend=function(e){var t=this.tx;if(e.a!==1||e.b!==0||e.c!==0||e.d!==1){var i=this.a,n=this.c;this.a=i*e.a+this.b*e.c,this.b=i*e.b+this.b*e.d,this.c=n*e.a+this.d*e.c,this.d=n*e.b+this.d*e.d}return this.tx=t*e.a+this.ty*e.c+e.tx,this.ty=t*e.b+this.ty*e.d+e.ty,this},r.prototype.decompose=function(e){var t=this.a,i=this.b,n=this.c,o=this.d,a=e.pivot,s=-Math.atan2(-n,o),u=Math.atan2(i,t),h=Math.abs(s+u);return h<1e-5||Math.abs(pr-h)<1e-5?(e.rotation=u,e.skew.x=e.skew.y=0):(e.rotation=0,e.skew.x=s,e.skew.y=u),e.scale.x=Math.sqrt(t*t+i*i),e.scale.y=Math.sqrt(n*n+o*o),e.position.x=this.tx+(a.x*t+a.y*n),e.position.y=this.ty+(a.x*i+a.y*o),e},r.prototype.invert=function(){var e=this.a,t=this.b,i=this.c,n=this.d,o=this.tx,a=e*n-t*i;return this.a=n/a,this.b=-t/a,this.c=-i/a,this.d=e/a,this.tx=(i*this.ty-n*o)/a,this.ty=-(e*this.ty-t*o)/a,this},r.prototype.identity=function(){return this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0,this},r.prototype.clone=function(){var e=new r;return e.a=this.a,e.b=this.b,e.c=this.c,e.d=this.d,e.tx=this.tx,e.ty=this.ty,e},r.prototype.copyTo=function(e){return e.a=this.a,e.b=this.b,e.c=this.c,e.d=this.d,e.tx=this.tx,e.ty=this.ty,e},r.prototype.copyFrom=function(e){return this.a=e.a,this.b=e.b,this.c=e.c,this.d=e.d,this.tx=e.tx,this.ty=e.ty,this},r.prototype.toString=function(){return"[@pixi/math:Matrix a="+this.a+" b="+this.b+" c="+this.c+" d="+this.d+" tx="+this.tx+" ty="+this.ty+"]"},Object.defineProperty(r,"IDENTITY",{get:function(){return new r},enumerable:!1,configurable:!0}),Object.defineProperty(r,"TEMP_MATRIX",{get:function(){return new r},enumerable:!1,configurable:!0}),r}(),ie=[1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1,0,1],ne=[0,1,1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1],oe=[0,-1,-1,-1,0,1,1,1,0,1,1,1,0,-1,-1,-1],ae=[1,1,0,-1,-1,-1,0,1,-1,-1,0,1,1,1,0,-1],mi=[],ua=[],_r=Math.sign;function xc(){for(var r=0;r<16;r++){var e=[];mi.push(e);for(var t=0;t<16;t++)for(var i=_r(ie[r]*ie[t]+oe[r]*ne[t]),n=_r(ne[r]*ie[t]+ae[r]*ne[t]),o=_r(ie[r]*oe[t]+oe[r]*ae[t]),a=_r(ne[r]*oe[t]+ae[r]*ae[t]),s=0;s<16;s++)if(ie[s]===i&&ne[s]===n&&oe[s]===o&&ae[s]===a){e.push(s);break}}for(var r=0;r<16;r++){var u=new pt;u.set(ie[r],ne[r],oe[r],ae[r],0,0),ua.push(u)}}xc();var nt={E:0,SE:1,S:2,SW:3,W:4,NW:5,N:6,NE:7,MIRROR_VERTICAL:8,MAIN_DIAGONAL:10,MIRROR_HORIZONTAL:12,REVERSE_DIAGONAL:14,uX:function(r){return ie[r]},uY:function(r){return ne[r]},vX:function(r){return oe[r]},vY:function(r){return ae[r]},inv:function(r){return r&8?r&15:-r&7},add:function(r,e){return mi[r][e]},sub:function(r,e){return mi[r][nt.inv(e)]},rotate180:function(r){return r^4},isVertical:function(r){return(r&3)==2},byDirection:function(r,e){return Math.abs(r)*2<=Math.abs(e)?e>=0?nt.S:nt.N:Math.abs(e)*2<=Math.abs(r)?r>0?nt.E:nt.W:e>0?r>0?nt.SE:nt.SW:r>0?nt.NE:nt.NW},matrixAppendRotationInv:function(r,e,t,i){t===void 0&&(t=0),i===void 0&&(i=0);var n=ua[nt.inv(e)];n.tx=t,n.ty=i,r.append(n)}},ha=function(){function r(){this.worldTransform=new pt,this.localTransform=new pt,this.position=new re(this.onChange,this,0,0),this.scale=new re(this.onChange,this,1,1),this.pivot=new re(this.onChange,this,0,0),this.skew=new re(this.updateSkew,this,0,0),this._rotation=0,this._cx=1,this._sx=0,this._cy=0,this._sy=1,this._localID=0,this._currentLocalID=0,this._worldID=0,this._parentID=0}return r.prototype.onChange=function(){this._localID++},r.prototype.updateSkew=function(){this._cx=Math.cos(this._rotation+this.skew.y),this._sx=Math.sin(this._rotation+this.skew.y),this._cy=-Math.sin(this._rotation-this.skew.x),this._sy=Math.cos(this._rotation-this.skew.x),this._localID++},r.prototype.toString=function(){return"[@pixi/math:Transform "+("position=("+this.position.x+", "+this.position.y+") ")+("rotation="+this.rotation+" ")+("scale=("+this.scale.x+", "+this.scale.y+") ")+("skew=("+this.skew.x+", "+this.skew.y+") ")+"]"},r.prototype.updateLocalTransform=function(){var e=this.localTransform;this._localID!==this._currentLocalID&&(e.a=this._cx*this.scale.x,e.b=this._sx*this.scale.x,e.c=this._cy*this.scale.y,e.d=this._sy*this.scale.y,e.tx=this.position.x-(this.pivot.x*e.a+this.pivot.y*e.c),e.ty=this.position.y-(this.pivot.x*e.b+this.pivot.y*e.d),this._currentLocalID=this._localID,this._parentID=-1)},r.prototype.updateTransform=function(e){var t=this.localTransform;if(this._localID!==this._currentLocalID&&(t.a=this._cx*this.scale.x,t.b=this._sx*this.scale.x,t.c=this._cy*this.scale.y,t.d=this._sy*this.scale.y,t.tx=this.position.x-(this.pivot.x*t.a+this.pivot.y*t.c),t.ty=this.position.y-(this.pivot.x*t.b+this.pivot.y*t.d),this._currentLocalID=this._localID,this._parentID=-1),this._parentID!==e._worldID){var i=e.worldTransform,n=this.worldTransform;n.a=t.a*i.a+t.b*i.c,n.b=t.a*i.b+t.b*i.d,n.c=t.c*i.a+t.d*i.c,n.d=t.c*i.b+t.d*i.d,n.tx=t.tx*i.a+t.ty*i.c+i.tx,n.ty=t.tx*i.b+t.ty*i.d+i.ty,this._parentID=e._worldID,this._worldID++}},r.prototype.setFromMatrix=function(e){e.decompose(this),this._localID++},Object.defineProperty(r.prototype,"rotation",{get:function(){return this._rotation},set:function(e){this._rotation!==e&&(this._rotation=e,this.updateSkew())},enumerable:!1,configurable:!0}),r.IDENTITY=new r,r}();/*!
 * @pixi/display - v6.1.3
 * Compiled Mon, 13 Sep 2021 15:29:31 UTC
 *
 * @pixi/display is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */O.SORTABLE_CHILDREN=!1;var mr=function(){function r(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.rect=null,this.updateID=-1}return r.prototype.isEmpty=function(){return this.minX>this.maxX||this.minY>this.maxY},r.prototype.clear=function(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0},r.prototype.getRectangle=function(e){return this.minX>this.maxX||this.minY>this.maxY?W.EMPTY:(e=e||new W(0,0,1,1),e.x=this.minX,e.y=this.minY,e.width=this.maxX-this.minX,e.height=this.maxY-this.minY,e)},r.prototype.addPoint=function(e){this.minX=Math.min(this.minX,e.x),this.maxX=Math.max(this.maxX,e.x),this.minY=Math.min(this.minY,e.y),this.maxY=Math.max(this.maxY,e.y)},r.prototype.addPointMatrix=function(e,t){var i=e.a,n=e.b,o=e.c,a=e.d,s=e.tx,u=e.ty,h=i*t.x+o*t.y+s,l=n*t.x+a*t.y+u;this.minX=Math.min(this.minX,h),this.maxX=Math.max(this.maxX,h),this.minY=Math.min(this.minY,l),this.maxY=Math.max(this.maxY,l)},r.prototype.addQuad=function(e){var t=this.minX,i=this.minY,n=this.maxX,o=this.maxY,a=e[0],s=e[1];t=a<t?a:t,i=s<i?s:i,n=a>n?a:n,o=s>o?s:o,a=e[2],s=e[3],t=a<t?a:t,i=s<i?s:i,n=a>n?a:n,o=s>o?s:o,a=e[4],s=e[5],t=a<t?a:t,i=s<i?s:i,n=a>n?a:n,o=s>o?s:o,a=e[6],s=e[7],t=a<t?a:t,i=s<i?s:i,n=a>n?a:n,o=s>o?s:o,this.minX=t,this.minY=i,this.maxX=n,this.maxY=o},r.prototype.addFrame=function(e,t,i,n,o){this.addFrameMatrix(e.worldTransform,t,i,n,o)},r.prototype.addFrameMatrix=function(e,t,i,n,o){var a=e.a,s=e.b,u=e.c,h=e.d,l=e.tx,f=e.ty,c=this.minX,d=this.minY,p=this.maxX,_=this.maxY,v=a*t+u*i+l,g=s*t+h*i+f;c=v<c?v:c,d=g<d?g:d,p=v>p?v:p,_=g>_?g:_,v=a*n+u*i+l,g=s*n+h*i+f,c=v<c?v:c,d=g<d?g:d,p=v>p?v:p,_=g>_?g:_,v=a*t+u*o+l,g=s*t+h*o+f,c=v<c?v:c,d=g<d?g:d,p=v>p?v:p,_=g>_?g:_,v=a*n+u*o+l,g=s*n+h*o+f,c=v<c?v:c,d=g<d?g:d,p=v>p?v:p,_=g>_?g:_,this.minX=c,this.minY=d,this.maxX=p,this.maxY=_},r.prototype.addVertexData=function(e,t,i){for(var n=this.minX,o=this.minY,a=this.maxX,s=this.maxY,u=t;u<i;u+=2){var h=e[u],l=e[u+1];n=h<n?h:n,o=l<o?l:o,a=h>a?h:a,s=l>s?l:s}this.minX=n,this.minY=o,this.maxX=a,this.maxY=s},r.prototype.addVertices=function(e,t,i,n){this.addVerticesMatrix(e.worldTransform,t,i,n)},r.prototype.addVerticesMatrix=function(e,t,i,n,o,a){o===void 0&&(o=0),a===void 0&&(a=o);for(var s=e.a,u=e.b,h=e.c,l=e.d,f=e.tx,c=e.ty,d=this.minX,p=this.minY,_=this.maxX,v=this.maxY,g=i;g<n;g+=2){var y=t[g],x=t[g+1],T=s*y+h*x+f,m=l*x+u*y+c;d=Math.min(d,T-o),_=Math.max(_,T+o),p=Math.min(p,m-a),v=Math.max(v,m+a)}this.minX=d,this.minY=p,this.maxX=_,this.maxY=v},r.prototype.addBounds=function(e){var t=this.minX,i=this.minY,n=this.maxX,o=this.maxY;this.minX=e.minX<t?e.minX:t,this.minY=e.minY<i?e.minY:i,this.maxX=e.maxX>n?e.maxX:n,this.maxY=e.maxY>o?e.maxY:o},r.prototype.addBoundsMask=function(e,t){var i=e.minX>t.minX?e.minX:t.minX,n=e.minY>t.minY?e.minY:t.minY,o=e.maxX<t.maxX?e.maxX:t.maxX,a=e.maxY<t.maxY?e.maxY:t.maxY;if(i<=o&&n<=a){var s=this.minX,u=this.minY,h=this.maxX,l=this.maxY;this.minX=i<s?i:s,this.minY=n<u?n:u,this.maxX=o>h?o:h,this.maxY=a>l?a:l}},r.prototype.addBoundsMatrix=function(e,t){this.addFrameMatrix(t,e.minX,e.minY,e.maxX,e.maxY)},r.prototype.addBoundsArea=function(e,t){var i=e.minX>t.x?e.minX:t.x,n=e.minY>t.y?e.minY:t.y,o=e.maxX<t.x+t.width?e.maxX:t.x+t.width,a=e.maxY<t.y+t.height?e.maxY:t.y+t.height;if(i<=o&&n<=a){var s=this.minX,u=this.minY,h=this.maxX,l=this.maxY;this.minX=i<s?i:s,this.minY=n<u?n:u,this.maxX=o>h?o:h,this.maxY=a>l?a:l}},r.prototype.pad=function(e,t){e===void 0&&(e=0),t===void 0&&(t=e),this.isEmpty()||(this.minX-=e,this.maxX+=e,this.minY-=t,this.maxY+=t)},r.prototype.addFramePad=function(e,t,i,n,o,a){e-=o,t-=a,i+=o,n+=a,this.minX=this.minX<e?this.minX:e,this.maxX=this.maxX>i?this.maxX:i,this.minY=this.minY<t?this.minY:t,this.maxY=this.maxY>n?this.maxY:n},r}();/*! *****************************************************************************
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
***************************************************************************** */var gi=function(r,e){return gi=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])},gi(r,e)};function yi(r,e){gi(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var ft=function(r){yi(e,r);function e(){var t=r.call(this)||this;return t.tempDisplayObjectParent=null,t.transform=new ha,t.alpha=1,t.visible=!0,t.renderable=!0,t.parent=null,t.worldAlpha=1,t._lastSortedIndex=0,t._zIndex=0,t.filterArea=null,t.filters=null,t._enabledFilters=null,t._bounds=new mr,t._localBounds=null,t._boundsID=0,t._boundsRect=null,t._localBoundsRect=null,t._mask=null,t._destroyed=!1,t.isSprite=!1,t.isMask=!1,t}return e.mixin=function(t){for(var i=Object.keys(t),n=0;n<i.length;++n){var o=i[n];Object.defineProperty(e.prototype,o,Object.getOwnPropertyDescriptor(t,o))}},Object.defineProperty(e.prototype,"destroyed",{get:function(){return this._destroyed},enumerable:!1,configurable:!0}),e.prototype._recursivePostUpdateTransform=function(){this.parent?(this.parent._recursivePostUpdateTransform(),this.transform.updateTransform(this.parent.transform)):this.transform.updateTransform(this._tempDisplayObjectParent.transform)},e.prototype.updateTransform=function(){this._boundsID++,this.transform.updateTransform(this.parent.transform),this.worldAlpha=this.alpha*this.parent.worldAlpha},e.prototype.getBounds=function(t,i){return t||(this.parent?(this._recursivePostUpdateTransform(),this.updateTransform()):(this.parent=this._tempDisplayObjectParent,this.updateTransform(),this.parent=null)),this._bounds.updateID!==this._boundsID&&(this.calculateBounds(),this._bounds.updateID=this._boundsID),i||(this._boundsRect||(this._boundsRect=new W),i=this._boundsRect),this._bounds.getRectangle(i)},e.prototype.getLocalBounds=function(t){t||(this._localBoundsRect||(this._localBoundsRect=new W),t=this._localBoundsRect),this._localBounds||(this._localBounds=new mr);var i=this.transform,n=this.parent;this.parent=null,this.transform=this._tempDisplayObjectParent.transform;var o=this._bounds,a=this._boundsID;this._bounds=this._localBounds;var s=this.getBounds(!1,t);return this.parent=n,this.transform=i,this._bounds=o,this._bounds.updateID+=this._boundsID-a,s},e.prototype.toGlobal=function(t,i,n){return n===void 0&&(n=!1),n||(this._recursivePostUpdateTransform(),this.parent?this.displayObjectUpdateTransform():(this.parent=this._tempDisplayObjectParent,this.displayObjectUpdateTransform(),this.parent=null)),this.worldTransform.apply(t,i)},e.prototype.toLocal=function(t,i,n,o){return i&&(t=i.toGlobal(t,n,o)),o||(this._recursivePostUpdateTransform(),this.parent?this.displayObjectUpdateTransform():(this.parent=this._tempDisplayObjectParent,this.displayObjectUpdateTransform(),this.parent=null)),this.worldTransform.applyInverse(t,n)},e.prototype.setParent=function(t){if(!t||!t.addChild)throw new Error("setParent: Argument must be a Container");return t.addChild(this),t},e.prototype.setTransform=function(t,i,n,o,a,s,u,h,l){return t===void 0&&(t=0),i===void 0&&(i=0),n===void 0&&(n=1),o===void 0&&(o=1),a===void 0&&(a=0),s===void 0&&(s=0),u===void 0&&(u=0),h===void 0&&(h=0),l===void 0&&(l=0),this.position.x=t,this.position.y=i,this.scale.x=n||1,this.scale.y=o||1,this.rotation=a,this.skew.x=s,this.skew.y=u,this.pivot.x=h,this.pivot.y=l,this},e.prototype.destroy=function(t){this.parent&&this.parent.removeChild(this),this.emit("destroyed"),this.removeAllListeners(),this.transform=null,this.parent=null,this._bounds=null,this._mask=null,this.filters=null,this.filterArea=null,this.hitArea=null,this.interactive=!1,this.interactiveChildren=!1,this._destroyed=!0},Object.defineProperty(e.prototype,"_tempDisplayObjectParent",{get:function(){return this.tempDisplayObjectParent===null&&(this.tempDisplayObjectParent=new la),this.tempDisplayObjectParent},enumerable:!1,configurable:!0}),e.prototype.enableTempParent=function(){var t=this.parent;return this.parent=this._tempDisplayObjectParent,t},e.prototype.disableTempParent=function(t){this.parent=t},Object.defineProperty(e.prototype,"x",{get:function(){return this.position.x},set:function(t){this.transform.position.x=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"y",{get:function(){return this.position.y},set:function(t){this.transform.position.y=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"worldTransform",{get:function(){return this.transform.worldTransform},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"localTransform",{get:function(){return this.transform.localTransform},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"position",{get:function(){return this.transform.position},set:function(t){this.transform.position.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"scale",{get:function(){return this.transform.scale},set:function(t){this.transform.scale.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"pivot",{get:function(){return this.transform.pivot},set:function(t){this.transform.pivot.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"skew",{get:function(){return this.transform.skew},set:function(t){this.transform.skew.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"rotation",{get:function(){return this.transform.rotation},set:function(t){this.transform.rotation=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"angle",{get:function(){return this.transform.rotation*_c},set:function(t){this.transform.rotation=t*ee},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"zIndex",{get:function(){return this._zIndex},set:function(t){this._zIndex=t,this.parent&&(this.parent.sortDirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"worldVisible",{get:function(){var t=this;do{if(!t.visible)return!1;t=t.parent}while(t);return!0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"mask",{get:function(){return this._mask},set:function(t){if(this._mask){var i=this._mask.maskObject||this._mask;i.renderable=!0,i.isMask=!1}if(this._mask=t,this._mask){var i=this._mask.maskObject||this._mask;i.renderable=!1,i.isMask=!0}},enumerable:!1,configurable:!0}),e}(Fe),la=function(r){yi(e,r);function e(){var t=r!==null&&r.apply(this,arguments)||this;return t.sortDirty=null,t}return e}(ft);ft.prototype.displayObjectUpdateTransform=ft.prototype.updateTransform;function bc(r,e){return r.zIndex===e.zIndex?r._lastSortedIndex-e._lastSortedIndex:r.zIndex-e.zIndex}var Bt=function(r){yi(e,r);function e(){var t=r.call(this)||this;return t.children=[],t.sortableChildren=O.SORTABLE_CHILDREN,t.sortDirty=!1,t}return e.prototype.onChildrenChange=function(t){},e.prototype.addChild=function(){for(var t=arguments,i=[],n=0;n<arguments.length;n++)i[n]=t[n];if(i.length>1)for(var o=0;o<i.length;o++)this.addChild(i[o]);else{var a=i[0];a.parent&&a.parent.removeChild(a),a.parent=this,this.sortDirty=!0,a.transform._parentID=-1,this.children.push(a),this._boundsID++,this.onChildrenChange(this.children.length-1),this.emit("childAdded",a,this,this.children.length-1),a.emit("added",this)}return i[0]},e.prototype.addChildAt=function(t,i){if(i<0||i>this.children.length)throw new Error(t+"addChildAt: The index "+i+" supplied is out of bounds "+this.children.length);return t.parent&&t.parent.removeChild(t),t.parent=this,this.sortDirty=!0,t.transform._parentID=-1,this.children.splice(i,0,t),this._boundsID++,this.onChildrenChange(i),t.emit("added",this),this.emit("childAdded",t,this,i),t},e.prototype.swapChildren=function(t,i){if(t!==i){var n=this.getChildIndex(t),o=this.getChildIndex(i);this.children[n]=i,this.children[o]=t,this.onChildrenChange(n<o?n:o)}},e.prototype.getChildIndex=function(t){var i=this.children.indexOf(t);if(i===-1)throw new Error("The supplied DisplayObject must be a child of the caller");return i},e.prototype.setChildIndex=function(t,i){if(i<0||i>=this.children.length)throw new Error("The index "+i+" supplied is out of bounds "+this.children.length);var n=this.getChildIndex(t);xe(this.children,n,1),this.children.splice(i,0,t),this.onChildrenChange(i)},e.prototype.getChildAt=function(t){if(t<0||t>=this.children.length)throw new Error("getChildAt: Index ("+t+") does not exist.");return this.children[t]},e.prototype.removeChild=function(){for(var t=arguments,i=[],n=0;n<arguments.length;n++)i[n]=t[n];if(i.length>1)for(var o=0;o<i.length;o++)this.removeChild(i[o]);else{var a=i[0],s=this.children.indexOf(a);if(s===-1)return null;a.parent=null,a.transform._parentID=-1,xe(this.children,s,1),this._boundsID++,this.onChildrenChange(s),a.emit("removed",this),this.emit("childRemoved",a,this,s)}return i[0]},e.prototype.removeChildAt=function(t){var i=this.getChildAt(t);return i.parent=null,i.transform._parentID=-1,xe(this.children,t,1),this._boundsID++,this.onChildrenChange(t),i.emit("removed",this),this.emit("childRemoved",i,this,t),i},e.prototype.removeChildren=function(t,i){t===void 0&&(t=0),i===void 0&&(i=this.children.length);var n=t,o=i,a=o-n,s;if(a>0&&a<=o){s=this.children.splice(n,a);for(var u=0;u<s.length;++u)s[u].parent=null,s[u].transform&&(s[u].transform._parentID=-1);this._boundsID++,this.onChildrenChange(t);for(var u=0;u<s.length;++u)s[u].emit("removed",this),this.emit("childRemoved",s[u],this,u);return s}else if(a===0&&this.children.length===0)return[];throw new RangeError("removeChildren: numeric values are outside the acceptable range.")},e.prototype.sortChildren=function(){for(var t=!1,i=0,n=this.children.length;i<n;++i){var o=this.children[i];o._lastSortedIndex=i,!t&&o.zIndex!==0&&(t=!0)}t&&this.children.length>1&&this.children.sort(bc),this.sortDirty=!1},e.prototype.updateTransform=function(){this.sortableChildren&&this.sortDirty&&this.sortChildren(),this._boundsID++,this.transform.updateTransform(this.parent.transform),this.worldAlpha=this.alpha*this.parent.worldAlpha;for(var t=0,i=this.children.length;t<i;++t){var n=this.children[t];n.visible&&n.updateTransform()}},e.prototype.calculateBounds=function(){this._bounds.clear(),this._calculateBounds();for(var t=0;t<this.children.length;t++){var i=this.children[t];if(!(!i.visible||!i.renderable))if(i.calculateBounds(),i._mask){var n=i._mask.maskObject||i._mask;n.calculateBounds(),this._bounds.addBoundsMask(i._bounds,n._bounds)}else i.filterArea?this._bounds.addBoundsArea(i._bounds,i.filterArea):this._bounds.addBounds(i._bounds)}this._bounds.updateID=this._boundsID},e.prototype.getLocalBounds=function(t,i){i===void 0&&(i=!1);var n=r.prototype.getLocalBounds.call(this,t);if(!i)for(var o=0,a=this.children.length;o<a;++o){var s=this.children[o];s.visible&&s.updateTransform()}return n},e.prototype._calculateBounds=function(){},e.prototype.render=function(t){if(!(!this.visible||this.worldAlpha<=0||!this.renderable))if(this._mask||this.filters&&this.filters.length)this.renderAdvanced(t);else{this._render(t);for(var i=0,n=this.children.length;i<n;++i)this.children[i].render(t)}},e.prototype.renderAdvanced=function(t){t.batch.flush();var i=this.filters,n=this._mask;if(i){this._enabledFilters||(this._enabledFilters=[]),this._enabledFilters.length=0;for(var o=0;o<i.length;o++)i[o].enabled&&this._enabledFilters.push(i[o]);this._enabledFilters.length&&t.filter.push(this,this._enabledFilters)}n&&t.mask.push(this,this._mask),this._render(t);for(var o=0,a=this.children.length;o<a;o++)this.children[o].render(t);t.batch.flush(),n&&t.mask.pop(this),i&&this._enabledFilters&&this._enabledFilters.length&&t.filter.pop()},e.prototype._render=function(t){},e.prototype.destroy=function(t){r.prototype.destroy.call(this),this.sortDirty=!1;var i=typeof t=="boolean"?t:t&&t.children,n=this.removeChildren(0,this.children.length);if(i)for(var o=0;o<n.length;++o)n[o].destroy(t)},Object.defineProperty(e.prototype,"width",{get:function(){return this.scale.x*this.getLocalBounds().width},set:function(t){var i=this.getLocalBounds().width;i!==0?this.scale.x=t/i:this.scale.x=1,this._width=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this.scale.y*this.getLocalBounds().height},set:function(t){var i=this.getLocalBounds().height;i!==0?this.scale.y=t/i:this.scale.y=1,this._height=t},enumerable:!1,configurable:!0}),e}(ft);Bt.prototype.containerUpdateTransform=Bt.prototype.updateTransform;/*!
 * @pixi/accessibility - v6.1.3
 * Compiled Mon, 13 Sep 2021 15:29:31 UTC
 *
 * @pixi/accessibility is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Tc={accessible:!1,accessibleTitle:null,accessibleHint:null,tabIndex:0,_accessibleActive:!1,_accessibleDiv:null,accessibleType:"button",accessiblePointerEvents:"auto",accessibleChildren:!0,renderId:-1};ft.mixin(Tc);var Ec=9,gr=100,Cc=0,wc=0,fa=2,ca=1,Pc=-1e3,Ic=-1e3,Sc=2,Rc=function(){function r(e){this.debug=!1,this._isActive=!1,this._isMobileAccessibility=!1,this.pool=[],this.renderId=0,this.children=[],this.androidUpdateCount=0,this.androidUpdateFrequency=500,this._hookDiv=null,(Nt.tablet||Nt.phone)&&this.createTouchHook();var t=document.createElement("div");t.style.width=gr+"px",t.style.height=gr+"px",t.style.position="absolute",t.style.top=Cc+"px",t.style.left=wc+"px",t.style.zIndex=fa.toString(),this.div=t,this.renderer=e,this._onKeyDown=this._onKeyDown.bind(this),this._onMouseMove=this._onMouseMove.bind(this),self.addEventListener("keydown",this._onKeyDown,!1)}return Object.defineProperty(r.prototype,"isActive",{get:function(){return this._isActive},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"isMobileAccessibility",{get:function(){return this._isMobileAccessibility},enumerable:!1,configurable:!0}),r.prototype.createTouchHook=function(){var e=this,t=document.createElement("button");t.style.width=ca+"px",t.style.height=ca+"px",t.style.position="absolute",t.style.top=Pc+"px",t.style.left=Ic+"px",t.style.zIndex=Sc.toString(),t.style.backgroundColor="#FF0000",t.title="select to enable accessibility for this content",t.addEventListener("focus",function(){e._isMobileAccessibility=!0,e.activate(),e.destroyTouchHook()}),document.body.appendChild(t),this._hookDiv=t},r.prototype.destroyTouchHook=function(){!this._hookDiv||(document.body.removeChild(this._hookDiv),this._hookDiv=null)},r.prototype.activate=function(){var e;this._isActive||(this._isActive=!0,self.document.addEventListener("mousemove",this._onMouseMove,!0),self.removeEventListener("keydown",this._onKeyDown,!1),this.renderer.on("postrender",this.update,this),(e=this.renderer.view.parentNode)===null||e===void 0||e.appendChild(this.div))},r.prototype.deactivate=function(){var e;!this._isActive||this._isMobileAccessibility||(this._isActive=!1,self.document.removeEventListener("mousemove",this._onMouseMove,!0),self.addEventListener("keydown",this._onKeyDown,!1),this.renderer.off("postrender",this.update),(e=this.div.parentNode)===null||e===void 0||e.removeChild(this.div))},r.prototype.updateAccessibleObjects=function(e){if(!(!e.visible||!e.accessibleChildren)){e.accessible&&e.interactive&&(e._accessibleActive||this.addChild(e),e.renderId=this.renderId);for(var t=e.children,i=0;i<t.length;i++)this.updateAccessibleObjects(t[i])}},r.prototype.update=function(){var e=performance.now();if(!(Nt.android.device&&e<this.androidUpdateCount)&&(this.androidUpdateCount=e+this.androidUpdateFrequency,!!this.renderer.renderingToScreen)){this.renderer._lastObjectRendered&&this.updateAccessibleObjects(this.renderer._lastObjectRendered);var t=this.renderer.view.getBoundingClientRect(),i=t.left,n=t.top,o=t.width,a=t.height,s=this.renderer,u=s.width,h=s.height,l=s.resolution,f=o/u*l,c=a/h*l,d=this.div;d.style.left=i+"px",d.style.top=n+"px",d.style.width=u+"px",d.style.height=h+"px";for(var p=0;p<this.children.length;p++){var _=this.children[p];if(_.renderId!==this.renderId)_._accessibleActive=!1,xe(this.children,p,1),this.div.removeChild(_._accessibleDiv),this.pool.push(_._accessibleDiv),_._accessibleDiv=null,p--;else{d=_._accessibleDiv;var v=_.hitArea,g=_.worldTransform;_.hitArea?(d.style.left=(g.tx+v.x*g.a)*f+"px",d.style.top=(g.ty+v.y*g.d)*c+"px",d.style.width=v.width*g.a*f+"px",d.style.height=v.height*g.d*c+"px"):(v=_.getBounds(),this.capHitArea(v),d.style.left=v.x*f+"px",d.style.top=v.y*c+"px",d.style.width=v.width*f+"px",d.style.height=v.height*c+"px",d.title!==_.accessibleTitle&&_.accessibleTitle!==null&&(d.title=_.accessibleTitle),d.getAttribute("aria-label")!==_.accessibleHint&&_.accessibleHint!==null&&d.setAttribute("aria-label",_.accessibleHint)),(_.accessibleTitle!==d.title||_.tabIndex!==d.tabIndex)&&(d.title=_.accessibleTitle,d.tabIndex=_.tabIndex,this.debug&&this.updateDebugHTML(d))}}this.renderId++}},r.prototype.updateDebugHTML=function(e){e.innerHTML="type: "+e.type+"</br> title : "+e.title+"</br> tabIndex: "+e.tabIndex},r.prototype.capHitArea=function(e){e.x<0&&(e.width+=e.x,e.x=0),e.y<0&&(e.height+=e.y,e.y=0);var t=this.renderer,i=t.width,n=t.height;e.x+e.width>i&&(e.width=i-e.x),e.y+e.height>n&&(e.height=n-e.y)},r.prototype.addChild=function(e){var t=this.pool.pop();t||(t=document.createElement("button"),t.style.width=gr+"px",t.style.height=gr+"px",t.style.backgroundColor=this.debug?"rgba(255,255,255,0.5)":"transparent",t.style.position="absolute",t.style.zIndex=fa.toString(),t.style.borderStyle="none",navigator.userAgent.toLowerCase().indexOf("chrome")>-1?t.setAttribute("aria-live","off"):t.setAttribute("aria-live","polite"),navigator.userAgent.match(/rv:.*Gecko\//)?t.setAttribute("aria-relevant","additions"):t.setAttribute("aria-relevant","text"),t.addEventListener("click",this._onClick.bind(this)),t.addEventListener("focus",this._onFocus.bind(this)),t.addEventListener("focusout",this._onFocusOut.bind(this))),t.style.pointerEvents=e.accessiblePointerEvents,t.type=e.accessibleType,e.accessibleTitle&&e.accessibleTitle!==null?t.title=e.accessibleTitle:(!e.accessibleHint||e.accessibleHint===null)&&(t.title="displayObject "+e.tabIndex),e.accessibleHint&&e.accessibleHint!==null&&t.setAttribute("aria-label",e.accessibleHint),this.debug&&this.updateDebugHTML(t),e._accessibleActive=!0,e._accessibleDiv=t,t.displayObject=e,this.children.push(e),this.div.appendChild(e._accessibleDiv),e._accessibleDiv.tabIndex=e.tabIndex},r.prototype._onClick=function(e){var t=this.renderer.plugins.interaction,i=e.target.displayObject,n=t.eventData;t.dispatchEvent(i,"click",n),t.dispatchEvent(i,"pointertap",n),t.dispatchEvent(i,"tap",n)},r.prototype._onFocus=function(e){e.target.getAttribute("aria-live")||e.target.setAttribute("aria-live","assertive");var t=this.renderer.plugins.interaction,i=e.target.displayObject,n=t.eventData;t.dispatchEvent(i,"mouseover",n)},r.prototype._onFocusOut=function(e){e.target.getAttribute("aria-live")||e.target.setAttribute("aria-live","polite");var t=this.renderer.plugins.interaction,i=e.target.displayObject,n=t.eventData;t.dispatchEvent(i,"mouseout",n)},r.prototype._onKeyDown=function(e){e.keyCode===Ec&&this.activate()},r.prototype._onMouseMove=function(e){e.movementX===0&&e.movementY===0||this.deactivate()},r.prototype.destroy=function(){this.destroyTouchHook(),this.div=null,self.document.removeEventListener("mousemove",this._onMouseMove,!0),self.removeEventListener("keydown",this._onKeyDown),this.pool=null,this.children=null,this.renderer=null},r}();/*!
 * @pixi/ticker - v6.1.3
 * Compiled Mon, 13 Sep 2021 15:29:31 UTC
 *
 * @pixi/ticker is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */O.TARGET_FPMS=.06;var zt;(function(r){r[r.INTERACTION=50]="INTERACTION",r[r.HIGH=25]="HIGH",r[r.NORMAL=0]="NORMAL",r[r.LOW=-25]="LOW",r[r.UTILITY=-50]="UTILITY"})(zt||(zt={}));var xi=function(){function r(e,t,i,n){t===void 0&&(t=null),i===void 0&&(i=0),n===void 0&&(n=!1),this.next=null,this.previous=null,this._destroyed=!1,this.fn=e,this.context=t,this.priority=i,this.once=n}return r.prototype.match=function(e,t){return t===void 0&&(t=null),this.fn===e&&this.context===t},r.prototype.emit=function(e){this.fn&&(this.context?this.fn.call(this.context,e):this.fn(e));var t=this.next;return this.once&&this.destroy(!0),this._destroyed&&(this.next=null),t},r.prototype.connect=function(e){this.previous=e,e.next&&(e.next.previous=this),this.next=e.next,e.next=this},r.prototype.destroy=function(e){e===void 0&&(e=!1),this._destroyed=!0,this.fn=null,this.context=null,this.previous&&(this.previous.next=this.next),this.next&&(this.next.previous=this.previous);var t=this.next;return this.next=e?null:t,this.previous=null,t},r}(),xt=function(){function r(){var e=this;this.autoStart=!1,this.deltaTime=1,this.lastTime=-1,this.speed=1,this.started=!1,this._requestId=null,this._maxElapsedMS=100,this._minElapsedMS=0,this._protected=!1,this._lastFrame=-1,this._head=new xi(null,null,1/0),this.deltaMS=1/O.TARGET_FPMS,this.elapsedMS=1/O.TARGET_FPMS,this._tick=function(t){e._requestId=null,e.started&&(e.update(t),e.started&&e._requestId===null&&e._head.next&&(e._requestId=requestAnimationFrame(e._tick)))}}return r.prototype._requestIfNeeded=function(){this._requestId===null&&this._head.next&&(this.lastTime=performance.now(),this._lastFrame=this.lastTime,this._requestId=requestAnimationFrame(this._tick))},r.prototype._cancelIfNeeded=function(){this._requestId!==null&&(cancelAnimationFrame(this._requestId),this._requestId=null)},r.prototype._startIfPossible=function(){this.started?this._requestIfNeeded():this.autoStart&&this.start()},r.prototype.add=function(e,t,i){return i===void 0&&(i=zt.NORMAL),this._addListener(new xi(e,t,i))},r.prototype.addOnce=function(e,t,i){return i===void 0&&(i=zt.NORMAL),this._addListener(new xi(e,t,i,!0))},r.prototype._addListener=function(e){var t=this._head.next,i=this._head;if(!t)e.connect(i);else{for(;t;){if(e.priority>t.priority){e.connect(i);break}i=t,t=t.next}e.previous||e.connect(i)}return this._startIfPossible(),this},r.prototype.remove=function(e,t){for(var i=this._head.next;i;)i.match(e,t)?i=i.destroy():i=i.next;return this._head.next||this._cancelIfNeeded(),this},Object.defineProperty(r.prototype,"count",{get:function(){if(!this._head)return 0;for(var e=0,t=this._head;t=t.next;)e++;return e},enumerable:!1,configurable:!0}),r.prototype.start=function(){this.started||(this.started=!0,this._requestIfNeeded())},r.prototype.stop=function(){this.started&&(this.started=!1,this._cancelIfNeeded())},r.prototype.destroy=function(){if(!this._protected){this.stop();for(var e=this._head.next;e;)e=e.destroy(!0);this._head.destroy(),this._head=null}},r.prototype.update=function(e){e===void 0&&(e=performance.now());var t;if(e>this.lastTime){if(t=this.elapsedMS=e-this.lastTime,t>this._maxElapsedMS&&(t=this._maxElapsedMS),t*=this.speed,this._minElapsedMS){var i=e-this._lastFrame|0;if(i<this._minElapsedMS)return;this._lastFrame=e-i%this._minElapsedMS}this.deltaMS=t,this.deltaTime=this.deltaMS*O.TARGET_FPMS;for(var n=this._head,o=n.next;o;)o=o.emit(this.deltaTime);n.next||this._cancelIfNeeded()}else this.deltaTime=this.deltaMS=this.elapsedMS=0;this.lastTime=e},Object.defineProperty(r.prototype,"FPS",{get:function(){return 1e3/this.elapsedMS},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"minFPS",{get:function(){return 1e3/this._maxElapsedMS},set:function(e){var t=Math.min(this.maxFPS,e),i=Math.min(Math.max(0,t)/1e3,O.TARGET_FPMS);this._maxElapsedMS=1/i},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"maxFPS",{get:function(){return this._minElapsedMS?Math.round(1e3/this._minElapsedMS):0},set:function(e){if(e===0)this._minElapsedMS=0;else{var t=Math.max(this.minFPS,e);this._minElapsedMS=1/(t/1e3)}},enumerable:!1,configurable:!0}),Object.defineProperty(r,"shared",{get:function(){if(!r._shared){var e=r._shared=new r;e.autoStart=!0,e._protected=!0}return r._shared},enumerable:!1,configurable:!0}),Object.defineProperty(r,"system",{get:function(){if(!r._system){var e=r._system=new r;e.autoStart=!0,e._protected=!0}return r._system},enumerable:!1,configurable:!0}),r}(),Ac=function(){function r(){}return r.init=function(e){var t=this;e=Object.assign({autoStart:!0,sharedTicker:!1},e),Object.defineProperty(this,"ticker",{set:function(i){this._ticker&&this._ticker.remove(this.render,this),this._ticker=i,i&&i.add(this.render,this,zt.LOW)},get:function(){return this._ticker}}),this.stop=function(){t._ticker.stop()},this.start=function(){t._ticker.start()},this._ticker=null,this.ticker=e.sharedTicker?xt.shared:new xt,e.autoStart&&this.start()},r.destroy=function(){if(this._ticker){var e=this._ticker;this.ticker=null,e.destroy()}},r}();/*!
 * @pixi/interaction - v6.1.3
 * Compiled Mon, 13 Sep 2021 15:29:31 UTC
 *
 * @pixi/interaction is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var da=function(){function r(){this.pressure=0,this.rotationAngle=0,this.twist=0,this.tangentialPressure=0,this.global=new Y,this.target=null,this.originalEvent=null,this.identifier=null,this.isPrimary=!1,this.button=0,this.buttons=0,this.width=0,this.height=0,this.tiltX=0,this.tiltY=0,this.pointerType=null,this.pressure=0,this.rotationAngle=0,this.twist=0,this.tangentialPressure=0}return Object.defineProperty(r.prototype,"pointerId",{get:function(){return this.identifier},enumerable:!1,configurable:!0}),r.prototype.getLocalPosition=function(e,t,i){return e.worldTransform.applyInverse(i||this.global,t)},r.prototype.copyEvent=function(e){"isPrimary"in e&&e.isPrimary&&(this.isPrimary=!0),this.button="button"in e&&e.button;var t="buttons"in e&&e.buttons;this.buttons=Number.isInteger(t)?t:"which"in e&&e.which,this.width="width"in e&&e.width,this.height="height"in e&&e.height,this.tiltX="tiltX"in e&&e.tiltX,this.tiltY="tiltY"in e&&e.tiltY,this.pointerType="pointerType"in e&&e.pointerType,this.pressure="pressure"in e&&e.pressure,this.rotationAngle="rotationAngle"in e&&e.rotationAngle,this.twist="twist"in e&&e.twist||0,this.tangentialPressure="tangentialPressure"in e&&e.tangentialPressure||0},r.prototype.reset=function(){this.isPrimary=!1},r}();/*! *****************************************************************************
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
***************************************************************************** */var bi=function(r,e){return bi=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])},bi(r,e)};function Oc(r,e){bi(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Nc=function(){function r(){this.stopped=!1,this.stopsPropagatingAt=null,this.stopPropagationHint=!1,this.target=null,this.currentTarget=null,this.type=null,this.data=null}return r.prototype.stopPropagation=function(){this.stopped=!0,this.stopPropagationHint=!0,this.stopsPropagatingAt=this.currentTarget},r.prototype.reset=function(){this.stopped=!1,this.stopsPropagatingAt=null,this.stopPropagationHint=!1,this.currentTarget=null,this.target=null},r}(),Ti=function(){function r(e){this._pointerId=e,this._flags=r.FLAGS.NONE}return r.prototype._doSet=function(e,t){t?this._flags=this._flags|e:this._flags=this._flags&~e},Object.defineProperty(r.prototype,"pointerId",{get:function(){return this._pointerId},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"flags",{get:function(){return this._flags},set:function(e){this._flags=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"none",{get:function(){return this._flags===r.FLAGS.NONE},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"over",{get:function(){return(this._flags&r.FLAGS.OVER)!=0},set:function(e){this._doSet(r.FLAGS.OVER,e)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"rightDown",{get:function(){return(this._flags&r.FLAGS.RIGHT_DOWN)!=0},set:function(e){this._doSet(r.FLAGS.RIGHT_DOWN,e)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"leftDown",{get:function(){return(this._flags&r.FLAGS.LEFT_DOWN)!=0},set:function(e){this._doSet(r.FLAGS.LEFT_DOWN,e)},enumerable:!1,configurable:!0}),r.FLAGS=Object.freeze({NONE:0,OVER:1<<0,LEFT_DOWN:1<<1,RIGHT_DOWN:1<<2}),r}(),Fc=function(){function r(){this._tempPoint=new Y}return r.prototype.recursiveFindHit=function(e,t,i,n,o){if(!t||!t.visible)return!1;var a=e.data.global;o=t.interactive||o;var s=!1,u=o,h=!0;if(t.hitArea?(n&&(t.worldTransform.applyInverse(a,this._tempPoint),t.hitArea.contains(this._tempPoint.x,this._tempPoint.y)?s=!0:(n=!1,h=!1)),u=!1):t._mask&&n&&(t._mask.containsPoint&&t._mask.containsPoint(a)||(n=!1)),h&&t.interactiveChildren&&t.children)for(var l=t.children,f=l.length-1;f>=0;f--){var c=l[f],d=this.recursiveFindHit(e,c,i,n,u);if(d){if(!c.parent)continue;u=!1,d&&(e.target&&(n=!1),s=!0)}}return o&&(n&&!e.target&&!t.hitArea&&t.containsPoint&&t.containsPoint(a)&&(s=!0),t.interactive&&(s&&!e.target&&(e.target=t),i&&i(e,t,!!s))),s},r.prototype.findHit=function(e,t,i,n){this.recursiveFindHit(e,t,i,n,!1)},r}(),Uc={interactive:!1,interactiveChildren:!0,hitArea:null,get buttonMode(){return this.cursor==="pointer"},set buttonMode(r){r?this.cursor="pointer":this.cursor==="pointer"&&(this.cursor=null)},cursor:null,get trackedPointers(){return this._trackedPointers===void 0&&(this._trackedPointers={}),this._trackedPointers},_trackedPointers:void 0};ft.mixin(Uc);var yr=1,xr={target:null,data:{global:null}},Lc=function(r){Oc(e,r);function e(t,i){var n=r.call(this)||this;return i=i||{},n.renderer=t,n.autoPreventDefault=i.autoPreventDefault!==void 0?i.autoPreventDefault:!0,n.interactionFrequency=i.interactionFrequency||10,n.mouse=new da,n.mouse.identifier=yr,n.mouse.global.set(-999999),n.activeInteractionData={},n.activeInteractionData[yr]=n.mouse,n.interactionDataPool=[],n.eventData=new Nc,n.interactionDOMElement=null,n.moveWhenInside=!1,n.eventsAdded=!1,n.tickerAdded=!1,n.mouseOverRenderer=!("PointerEvent"in self),n.supportsTouchEvents="ontouchstart"in self,n.supportsPointerEvents=!!self.PointerEvent,n.onPointerUp=n.onPointerUp.bind(n),n.processPointerUp=n.processPointerUp.bind(n),n.onPointerCancel=n.onPointerCancel.bind(n),n.processPointerCancel=n.processPointerCancel.bind(n),n.onPointerDown=n.onPointerDown.bind(n),n.processPointerDown=n.processPointerDown.bind(n),n.onPointerMove=n.onPointerMove.bind(n),n.processPointerMove=n.processPointerMove.bind(n),n.onPointerOut=n.onPointerOut.bind(n),n.processPointerOverOut=n.processPointerOverOut.bind(n),n.onPointerOver=n.onPointerOver.bind(n),n.cursorStyles={default:"inherit",pointer:"pointer"},n.currentCursorMode=null,n.cursor=null,n.resolution=1,n.delayedEvents=[],n.search=new Fc,n._tempDisplayObject=new la,n._eventListenerOptions={capture:!0,passive:!1},n._useSystemTicker=i.useSystemTicker!==void 0?i.useSystemTicker:!0,n.setTargetElement(n.renderer.view,n.renderer.resolution),n}return Object.defineProperty(e.prototype,"useSystemTicker",{get:function(){return this._useSystemTicker},set:function(t){this._useSystemTicker=t,t?this.addTickerListener():this.removeTickerListener()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"lastObjectRendered",{get:function(){return this.renderer._lastObjectRendered||this._tempDisplayObject},enumerable:!1,configurable:!0}),e.prototype.hitTest=function(t,i){return xr.target=null,xr.data.global=t,i||(i=this.lastObjectRendered),this.processInteractive(xr,i,null,!0),xr.target},e.prototype.setTargetElement=function(t,i){i===void 0&&(i=1),this.removeTickerListener(),this.removeEvents(),this.interactionDOMElement=t,this.resolution=i,this.addEvents(),this.addTickerListener()},e.prototype.addTickerListener=function(){this.tickerAdded||!this.interactionDOMElement||!this._useSystemTicker||(xt.system.add(this.tickerUpdate,this,zt.INTERACTION),this.tickerAdded=!0)},e.prototype.removeTickerListener=function(){!this.tickerAdded||(xt.system.remove(this.tickerUpdate,this),this.tickerAdded=!1)},e.prototype.addEvents=function(){if(!(this.eventsAdded||!this.interactionDOMElement)){var t=this.interactionDOMElement.style;self.navigator.msPointerEnabled?(t.msContentZooming="none",t.msTouchAction="none"):this.supportsPointerEvents&&(t.touchAction="none"),this.supportsPointerEvents?(self.document.addEventListener("pointermove",this.onPointerMove,this._eventListenerOptions),this.interactionDOMElement.addEventListener("pointerdown",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.addEventListener("pointerleave",this.onPointerOut,this._eventListenerOptions),this.interactionDOMElement.addEventListener("pointerover",this.onPointerOver,this._eventListenerOptions),self.addEventListener("pointercancel",this.onPointerCancel,this._eventListenerOptions),self.addEventListener("pointerup",this.onPointerUp,this._eventListenerOptions)):(self.document.addEventListener("mousemove",this.onPointerMove,this._eventListenerOptions),this.interactionDOMElement.addEventListener("mousedown",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.addEventListener("mouseout",this.onPointerOut,this._eventListenerOptions),this.interactionDOMElement.addEventListener("mouseover",this.onPointerOver,this._eventListenerOptions),self.addEventListener("mouseup",this.onPointerUp,this._eventListenerOptions)),this.supportsTouchEvents&&(this.interactionDOMElement.addEventListener("touchstart",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.addEventListener("touchcancel",this.onPointerCancel,this._eventListenerOptions),this.interactionDOMElement.addEventListener("touchend",this.onPointerUp,this._eventListenerOptions),this.interactionDOMElement.addEventListener("touchmove",this.onPointerMove,this._eventListenerOptions)),this.eventsAdded=!0}},e.prototype.removeEvents=function(){if(!(!this.eventsAdded||!this.interactionDOMElement)){var t=this.interactionDOMElement.style;self.navigator.msPointerEnabled?(t.msContentZooming="",t.msTouchAction=""):this.supportsPointerEvents&&(t.touchAction=""),this.supportsPointerEvents?(self.document.removeEventListener("pointermove",this.onPointerMove,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("pointerdown",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("pointerleave",this.onPointerOut,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("pointerover",this.onPointerOver,this._eventListenerOptions),self.removeEventListener("pointercancel",this.onPointerCancel,this._eventListenerOptions),self.removeEventListener("pointerup",this.onPointerUp,this._eventListenerOptions)):(self.document.removeEventListener("mousemove",this.onPointerMove,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("mousedown",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("mouseout",this.onPointerOut,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("mouseover",this.onPointerOver,this._eventListenerOptions),self.removeEventListener("mouseup",this.onPointerUp,this._eventListenerOptions)),this.supportsTouchEvents&&(this.interactionDOMElement.removeEventListener("touchstart",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("touchcancel",this.onPointerCancel,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("touchend",this.onPointerUp,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("touchmove",this.onPointerMove,this._eventListenerOptions)),this.interactionDOMElement=null,this.eventsAdded=!1}},e.prototype.tickerUpdate=function(t){this._deltaTime+=t,!(this._deltaTime<this.interactionFrequency)&&(this._deltaTime=0,this.update())},e.prototype.update=function(){if(!!this.interactionDOMElement){if(this._didMove){this._didMove=!1;return}this.cursor=null;for(var t in this.activeInteractionData)if(this.activeInteractionData.hasOwnProperty(t)){var i=this.activeInteractionData[t];if(i.originalEvent&&i.pointerType!=="touch"){var n=this.configureInteractionEventForDOMEvent(this.eventData,i.originalEvent,i);this.processInteractive(n,this.lastObjectRendered,this.processPointerOverOut,!0)}}this.setCursorMode(this.cursor)}},e.prototype.setCursorMode=function(t){t=t||"default";var i=!0;if(self.OffscreenCanvas&&this.interactionDOMElement instanceof OffscreenCanvas&&(i=!1),this.currentCursorMode!==t){this.currentCursorMode=t;var n=this.cursorStyles[t];if(n)switch(typeof n){case"string":i&&(this.interactionDOMElement.style.cursor=n);break;case"function":n(t);break;case"object":i&&Object.assign(this.interactionDOMElement.style,n);break}else i&&typeof t=="string"&&!Object.prototype.hasOwnProperty.call(this.cursorStyles,t)&&(this.interactionDOMElement.style.cursor=t)}},e.prototype.dispatchEvent=function(t,i,n){(!n.stopPropagationHint||t===n.stopsPropagatingAt)&&(n.currentTarget=t,n.type=i,t.emit(i,n),t[i]&&t[i](n))},e.prototype.delayDispatchEvent=function(t,i,n){this.delayedEvents.push({displayObject:t,eventString:i,eventData:n})},e.prototype.mapPositionToPoint=function(t,i,n){var o;this.interactionDOMElement.parentElement?o=this.interactionDOMElement.getBoundingClientRect():o={x:0,y:0,width:this.interactionDOMElement.width,height:this.interactionDOMElement.height,left:0,top:0};var a=1/this.resolution;t.x=(i-o.left)*(this.interactionDOMElement.width/o.width)*a,t.y=(n-o.top)*(this.interactionDOMElement.height/o.height)*a},e.prototype.processInteractive=function(t,i,n,o){var a=this.search.findHit(t,i,n,o),s=this.delayedEvents;if(!s.length)return a;t.stopPropagationHint=!1;var u=s.length;this.delayedEvents=[];for(var h=0;h<u;h++){var l=s[h],f=l.displayObject,c=l.eventString,d=l.eventData;d.stopsPropagatingAt===f&&(d.stopPropagationHint=!0),this.dispatchEvent(f,c,d)}return a},e.prototype.onPointerDown=function(t){if(!(this.supportsTouchEvents&&t.pointerType==="touch")){var i=this.normalizeToPointerData(t);if(this.autoPreventDefault&&i[0].isNormalized){var n=t.cancelable||!("cancelable"in t);n&&t.preventDefault()}for(var o=i.length,a=0;a<o;a++){var s=i[a],u=this.getInteractionDataForPointerId(s),h=this.configureInteractionEventForDOMEvent(this.eventData,s,u);if(h.data.originalEvent=t,this.processInteractive(h,this.lastObjectRendered,this.processPointerDown,!0),this.emit("pointerdown",h),s.pointerType==="touch")this.emit("touchstart",h);else if(s.pointerType==="mouse"||s.pointerType==="pen"){var l=s.button===2;this.emit(l?"rightdown":"mousedown",this.eventData)}}}},e.prototype.processPointerDown=function(t,i,n){var o=t.data,a=t.data.identifier;if(n){if(i.trackedPointers[a]||(i.trackedPointers[a]=new Ti(a)),this.dispatchEvent(i,"pointerdown",t),o.pointerType==="touch")this.dispatchEvent(i,"touchstart",t);else if(o.pointerType==="mouse"||o.pointerType==="pen"){var s=o.button===2;s?i.trackedPointers[a].rightDown=!0:i.trackedPointers[a].leftDown=!0,this.dispatchEvent(i,s?"rightdown":"mousedown",t)}}},e.prototype.onPointerComplete=function(t,i,n){for(var o=this.normalizeToPointerData(t),a=o.length,s=t.target!==this.interactionDOMElement?"outside":"",u=0;u<a;u++){var h=o[u],l=this.getInteractionDataForPointerId(h),f=this.configureInteractionEventForDOMEvent(this.eventData,h,l);if(f.data.originalEvent=t,this.processInteractive(f,this.lastObjectRendered,n,i||!s),this.emit(i?"pointercancel":"pointerup"+s,f),h.pointerType==="mouse"||h.pointerType==="pen"){var c=h.button===2;this.emit(c?"rightup"+s:"mouseup"+s,f)}else h.pointerType==="touch"&&(this.emit(i?"touchcancel":"touchend"+s,f),this.releaseInteractionDataForPointerId(h.pointerId))}},e.prototype.onPointerCancel=function(t){this.supportsTouchEvents&&t.pointerType==="touch"||this.onPointerComplete(t,!0,this.processPointerCancel)},e.prototype.processPointerCancel=function(t,i){var n=t.data,o=t.data.identifier;i.trackedPointers[o]!==void 0&&(delete i.trackedPointers[o],this.dispatchEvent(i,"pointercancel",t),n.pointerType==="touch"&&this.dispatchEvent(i,"touchcancel",t))},e.prototype.onPointerUp=function(t){this.supportsTouchEvents&&t.pointerType==="touch"||this.onPointerComplete(t,!1,this.processPointerUp)},e.prototype.processPointerUp=function(t,i,n){var o=t.data,a=t.data.identifier,s=i.trackedPointers[a],u=o.pointerType==="touch",h=o.pointerType==="mouse"||o.pointerType==="pen",l=!1;if(h){var f=o.button===2,c=Ti.FLAGS,d=f?c.RIGHT_DOWN:c.LEFT_DOWN,p=s!==void 0&&s.flags&d;n?(this.dispatchEvent(i,f?"rightup":"mouseup",t),p&&(this.dispatchEvent(i,f?"rightclick":"click",t),l=!0)):p&&this.dispatchEvent(i,f?"rightupoutside":"mouseupoutside",t),s&&(f?s.rightDown=!1:s.leftDown=!1)}n?(this.dispatchEvent(i,"pointerup",t),u&&this.dispatchEvent(i,"touchend",t),s&&((!h||l)&&this.dispatchEvent(i,"pointertap",t),u&&(this.dispatchEvent(i,"tap",t),s.over=!1))):s&&(this.dispatchEvent(i,"pointerupoutside",t),u&&this.dispatchEvent(i,"touchendoutside",t)),s&&s.none&&delete i.trackedPointers[a]},e.prototype.onPointerMove=function(t){if(!(this.supportsTouchEvents&&t.pointerType==="touch")){var i=this.normalizeToPointerData(t);(i[0].pointerType==="mouse"||i[0].pointerType==="pen")&&(this._didMove=!0,this.cursor=null);for(var n=i.length,o=0;o<n;o++){var a=i[o],s=this.getInteractionDataForPointerId(a),u=this.configureInteractionEventForDOMEvent(this.eventData,a,s);u.data.originalEvent=t,this.processInteractive(u,this.lastObjectRendered,this.processPointerMove,!0),this.emit("pointermove",u),a.pointerType==="touch"&&this.emit("touchmove",u),(a.pointerType==="mouse"||a.pointerType==="pen")&&this.emit("mousemove",u)}i[0].pointerType==="mouse"&&this.setCursorMode(this.cursor)}},e.prototype.processPointerMove=function(t,i,n){var o=t.data,a=o.pointerType==="touch",s=o.pointerType==="mouse"||o.pointerType==="pen";s&&this.processPointerOverOut(t,i,n),(!this.moveWhenInside||n)&&(this.dispatchEvent(i,"pointermove",t),a&&this.dispatchEvent(i,"touchmove",t),s&&this.dispatchEvent(i,"mousemove",t))},e.prototype.onPointerOut=function(t){if(!(this.supportsTouchEvents&&t.pointerType==="touch")){var i=this.normalizeToPointerData(t),n=i[0];n.pointerType==="mouse"&&(this.mouseOverRenderer=!1,this.setCursorMode(null));var o=this.getInteractionDataForPointerId(n),a=this.configureInteractionEventForDOMEvent(this.eventData,n,o);a.data.originalEvent=n,this.processInteractive(a,this.lastObjectRendered,this.processPointerOverOut,!1),this.emit("pointerout",a),n.pointerType==="mouse"||n.pointerType==="pen"?this.emit("mouseout",a):this.releaseInteractionDataForPointerId(o.identifier)}},e.prototype.processPointerOverOut=function(t,i,n){var o=t.data,a=t.data.identifier,s=o.pointerType==="mouse"||o.pointerType==="pen",u=i.trackedPointers[a];n&&!u&&(u=i.trackedPointers[a]=new Ti(a)),u!==void 0&&(n&&this.mouseOverRenderer?(u.over||(u.over=!0,this.delayDispatchEvent(i,"pointerover",t),s&&this.delayDispatchEvent(i,"mouseover",t)),s&&this.cursor===null&&(this.cursor=i.cursor)):u.over&&(u.over=!1,this.dispatchEvent(i,"pointerout",this.eventData),s&&this.dispatchEvent(i,"mouseout",t),u.none&&delete i.trackedPointers[a]))},e.prototype.onPointerOver=function(t){var i=this.normalizeToPointerData(t),n=i[0],o=this.getInteractionDataForPointerId(n),a=this.configureInteractionEventForDOMEvent(this.eventData,n,o);a.data.originalEvent=n,n.pointerType==="mouse"&&(this.mouseOverRenderer=!0),this.emit("pointerover",a),(n.pointerType==="mouse"||n.pointerType==="pen")&&this.emit("mouseover",a)},e.prototype.getInteractionDataForPointerId=function(t){var i=t.pointerId,n;return i===yr||t.pointerType==="mouse"?n=this.mouse:this.activeInteractionData[i]?n=this.activeInteractionData[i]:(n=this.interactionDataPool.pop()||new da,n.identifier=i,this.activeInteractionData[i]=n),n.copyEvent(t),n},e.prototype.releaseInteractionDataForPointerId=function(t){var i=this.activeInteractionData[t];i&&(delete this.activeInteractionData[t],i.reset(),this.interactionDataPool.push(i))},e.prototype.configureInteractionEventForDOMEvent=function(t,i,n){return t.data=n,this.mapPositionToPoint(n.global,i.clientX,i.clientY),i.pointerType==="touch"&&(i.globalX=n.global.x,i.globalY=n.global.y),n.originalEvent=i,t.reset(),t},e.prototype.normalizeToPointerData=function(t){var i=[];if(this.supportsTouchEvents&&t instanceof TouchEvent)for(var n=0,o=t.changedTouches.length;n<o;n++){var a=t.changedTouches[n];typeof a.button=="undefined"&&(a.button=t.touches.length?1:0),typeof a.buttons=="undefined"&&(a.buttons=t.touches.length?1:0),typeof a.isPrimary=="undefined"&&(a.isPrimary=t.touches.length===1&&t.type==="touchstart"),typeof a.width=="undefined"&&(a.width=a.radiusX||1),typeof a.height=="undefined"&&(a.height=a.radiusY||1),typeof a.tiltX=="undefined"&&(a.tiltX=0),typeof a.tiltY=="undefined"&&(a.tiltY=0),typeof a.pointerType=="undefined"&&(a.pointerType="touch"),typeof a.pointerId=="undefined"&&(a.pointerId=a.identifier||0),typeof a.pressure=="undefined"&&(a.pressure=a.force||.5),typeof a.twist=="undefined"&&(a.twist=0),typeof a.tangentialPressure=="undefined"&&(a.tangentialPressure=0),typeof a.layerX=="undefined"&&(a.layerX=a.offsetX=a.clientX),typeof a.layerY=="undefined"&&(a.layerY=a.offsetY=a.clientY),a.isNormalized=!0,i.push(a)}else if(!self.MouseEvent||t instanceof MouseEvent&&(!this.supportsPointerEvents||!(t instanceof self.PointerEvent))){var s=t;typeof s.isPrimary=="undefined"&&(s.isPrimary=!0),typeof s.width=="undefined"&&(s.width=1),typeof s.height=="undefined"&&(s.height=1),typeof s.tiltX=="undefined"&&(s.tiltX=0),typeof s.tiltY=="undefined"&&(s.tiltY=0),typeof s.pointerType=="undefined"&&(s.pointerType="mouse"),typeof s.pointerId=="undefined"&&(s.pointerId=yr),typeof s.pressure=="undefined"&&(s.pressure=.5),typeof s.twist=="undefined"&&(s.twist=0),typeof s.tangentialPressure=="undefined"&&(s.tangentialPressure=0),s.isNormalized=!0,i.push(s)}else i.push(t);return i},e.prototype.destroy=function(){this.removeEvents(),this.removeTickerListener(),this.removeAllListeners(),this.renderer=null,this.mouse=null,this.eventData=null,this.interactionDOMElement=null,this.onPointerDown=null,this.processPointerDown=null,this.onPointerUp=null,this.processPointerUp=null,this.onPointerCancel=null,this.processPointerCancel=null,this.onPointerMove=null,this.processPointerMove=null,this.onPointerOut=null,this.processPointerOverOut=null,this.onPointerOver=null,this.search=null},e}(Fe);/*!
 * @pixi/runner - v6.1.3
 * Compiled Mon, 13 Sep 2021 15:29:31 UTC
 *
 * @pixi/runner is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var bt=function(){function r(e){this.items=[],this._name=e,this._aliasCount=0}return r.prototype.emit=function(e,t,i,n,o,a,s,u){if(arguments.length>8)throw new Error("max arguments reached");var h=this,l=h.name,f=h.items;this._aliasCount++;for(var c=0,d=f.length;c<d;c++)f[c][l](e,t,i,n,o,a,s,u);return f===this.items&&this._aliasCount--,this},r.prototype.ensureNonAliasedItems=function(){this._aliasCount>0&&this.items.length>1&&(this._aliasCount=0,this.items=this.items.slice(0))},r.prototype.add=function(e){return e[this._name]&&(this.ensureNonAliasedItems(),this.remove(e),this.items.push(e)),this},r.prototype.remove=function(e){var t=this.items.indexOf(e);return t!==-1&&(this.ensureNonAliasedItems(),this.items.splice(t,1)),this},r.prototype.contains=function(e){return this.items.indexOf(e)!==-1},r.prototype.removeAll=function(){return this.ensureNonAliasedItems(),this.items.length=0,this},r.prototype.destroy=function(){this.removeAll(),this.items=null,this._name=null},Object.defineProperty(r.prototype,"empty",{get:function(){return this.items.length===0},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"name",{get:function(){return this._name},enumerable:!1,configurable:!0}),r}();Object.defineProperties(bt.prototype,{dispatch:{value:bt.prototype.emit},run:{value:bt.prototype.emit}});/*!
 * @pixi/core - v6.1.3
 * Compiled Mon, 13 Sep 2021 15:29:31 UTC
 *
 * @pixi/core is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */O.PREFER_ENV=Nt.any?kt.WEBGL:kt.WEBGL2;O.STRICT_TEXTURE_CACHE=!1;var br=[];function Ei(r,e){if(!r)return null;var t="";if(typeof r=="string"){var i=/\.(\w{3,4})(?:$|\?|#)/i.exec(r);i&&(t=i[1].toLowerCase())}for(var n=br.length-1;n>=0;--n){var o=br[n];if(o.test&&o.test(r,t))return new o(r,e)}throw new Error("Unrecognized source type to auto-detect Resource")}/*! *****************************************************************************
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
***************************************************************************** */var Ci=function(r,e){return Ci=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])},Ci(r,e)};function Q(r,e){Ci(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var wi=function(){return wi=Object.assign||function(e){for(var t=arguments,i,n=1,o=arguments.length;n<o;n++){i=t[n];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},wi.apply(this,arguments)};function Mc(r,e){var t={};for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&e.indexOf(i)<0&&(t[i]=r[i]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,i=Object.getOwnPropertySymbols(r);n<i.length;n++)e.indexOf(i[n])<0&&(t[i[n]]=r[i[n]]);return t}var Ee=function(){function r(e,t){e===void 0&&(e=0),t===void 0&&(t=0),this._width=e,this._height=t,this.destroyed=!1,this.internal=!1,this.onResize=new bt("setRealSize"),this.onUpdate=new bt("update"),this.onError=new bt("onError")}return r.prototype.bind=function(e){this.onResize.add(e),this.onUpdate.add(e),this.onError.add(e),(this._width||this._height)&&this.onResize.emit(this._width,this._height)},r.prototype.unbind=function(e){this.onResize.remove(e),this.onUpdate.remove(e),this.onError.remove(e)},r.prototype.resize=function(e,t){(e!==this._width||t!==this._height)&&(this._width=e,this._height=t,this.onResize.emit(e,t))},Object.defineProperty(r.prototype,"valid",{get:function(){return!!this._width&&!!this._height},enumerable:!1,configurable:!0}),r.prototype.update=function(){this.destroyed||this.onUpdate.emit()},r.prototype.load=function(){return Promise.resolve(this)},Object.defineProperty(r.prototype,"width",{get:function(){return this._width},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return this._height},enumerable:!1,configurable:!0}),r.prototype.style=function(e,t,i){return!1},r.prototype.dispose=function(){},r.prototype.destroy=function(){this.destroyed||(this.destroyed=!0,this.dispose(),this.onError.removeAll(),this.onError=null,this.onResize.removeAll(),this.onResize=null,this.onUpdate.removeAll(),this.onUpdate=null)},r.test=function(e,t){return!1},r}(),ke=function(r){Q(e,r);function e(t,i){var n=this,o=i||{},a=o.width,s=o.height;if(!a||!s)throw new Error("BufferResource width or height invalid");return n=r.call(this,a,s)||this,n.data=t,n}return e.prototype.upload=function(t,i,n){var o=t.gl;o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,i.alphaMode===Xt.UNPACK);var a=i.realWidth,s=i.realHeight;return n.width===a&&n.height===s?o.texSubImage2D(i.target,0,0,0,a,s,i.format,n.type,this.data):(n.width=a,n.height=s,o.texImage2D(i.target,0,n.internalFormat,a,s,0,i.format,n.type,this.data)),!0},e.prototype.dispose=function(){this.data=null},e.test=function(t){return t instanceof Float32Array||t instanceof Uint8Array||t instanceof Uint32Array},e}(Ee),Bc={scaleMode:Et.NEAREST,format:P.RGBA,alphaMode:Xt.NPM},Z=function(r){Q(e,r);function e(t,i){t===void 0&&(t=null),i===void 0&&(i=null);var n=r.call(this)||this;i=i||{};var o=i.alphaMode,a=i.mipmap,s=i.anisotropicLevel,u=i.scaleMode,h=i.width,l=i.height,f=i.wrapMode,c=i.format,d=i.type,p=i.target,_=i.resolution,v=i.resourceOptions;return t&&!(t instanceof Ee)&&(t=Ei(t,v),t.internal=!0),n.resolution=_||O.RESOLUTION,n.width=Math.round((h||0)*n.resolution)/n.resolution,n.height=Math.round((l||0)*n.resolution)/n.resolution,n._mipmap=a!==void 0?a:O.MIPMAP_TEXTURES,n.anisotropicLevel=s!==void 0?s:O.ANISOTROPIC_LEVEL,n._wrapMode=f||O.WRAP_MODE,n._scaleMode=u!==void 0?u:O.SCALE_MODE,n.format=c||P.RGBA,n.type=d||D.UNSIGNED_BYTE,n.target=p||Jt.TEXTURE_2D,n.alphaMode=o!==void 0?o:Xt.UNPACK,n.uid=Te(),n.touched=0,n.isPowerOfTwo=!1,n._refreshPOT(),n._glTextures={},n.dirtyId=0,n.dirtyStyleId=0,n.cacheId=null,n.valid=h>0&&l>0,n.textureCacheIds=[],n.destroyed=!1,n.resource=null,n._batchEnabled=0,n._batchLocation=0,n.parentTextureArray=null,n.setResource(t),n}return Object.defineProperty(e.prototype,"realWidth",{get:function(){return Math.round(this.width*this.resolution)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"realHeight",{get:function(){return Math.round(this.height*this.resolution)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"mipmap",{get:function(){return this._mipmap},set:function(t){this._mipmap!==t&&(this._mipmap=t,this.dirtyStyleId++)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"scaleMode",{get:function(){return this._scaleMode},set:function(t){this._scaleMode!==t&&(this._scaleMode=t,this.dirtyStyleId++)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"wrapMode",{get:function(){return this._wrapMode},set:function(t){this._wrapMode!==t&&(this._wrapMode=t,this.dirtyStyleId++)},enumerable:!1,configurable:!0}),e.prototype.setStyle=function(t,i){var n;return t!==void 0&&t!==this.scaleMode&&(this.scaleMode=t,n=!0),i!==void 0&&i!==this.mipmap&&(this.mipmap=i,n=!0),n&&this.dirtyStyleId++,this},e.prototype.setSize=function(t,i,n){return n=n||this.resolution,this.setRealSize(t*n,i*n,n)},e.prototype.setRealSize=function(t,i,n){return this.resolution=n||this.resolution,this.width=Math.round(t)/this.resolution,this.height=Math.round(i)/this.resolution,this._refreshPOT(),this.update(),this},e.prototype._refreshPOT=function(){this.isPowerOfTwo=ia(this.realWidth)&&ia(this.realHeight)},e.prototype.setResolution=function(t){var i=this.resolution;return i===t?this:(this.resolution=t,this.valid&&(this.width=Math.round(this.width*i)/t,this.height=Math.round(this.height*i)/t,this.emit("update",this)),this._refreshPOT(),this)},e.prototype.setResource=function(t){if(this.resource===t)return this;if(this.resource)throw new Error("Resource can be set only once");return t.bind(this),this.resource=t,this},e.prototype.update=function(){this.valid?(this.dirtyId++,this.dirtyStyleId++,this.emit("update",this)):this.width>0&&this.height>0&&(this.valid=!0,this.emit("loaded",this),this.emit("update",this))},e.prototype.onError=function(t){this.emit("error",this,t)},e.prototype.destroy=function(){this.resource&&(this.resource.unbind(this),this.resource.internal&&this.resource.destroy(),this.resource=null),this.cacheId&&(delete te[this.cacheId],delete Ht[this.cacheId],this.cacheId=null),this.dispose(),e.removeFromCache(this),this.textureCacheIds=null,this.destroyed=!0},e.prototype.dispose=function(){this.emit("dispose",this)},e.prototype.castToBaseTexture=function(){return this},e.from=function(t,i,n){n===void 0&&(n=O.STRICT_TEXTURE_CACHE);var o=typeof t=="string",a=null;if(o)a=t;else{if(!t._pixiId){var s=i&&i.pixiIdPrefix||"pixiid";t._pixiId=s+"_"+Te()}a=t._pixiId}var u=te[a];if(o&&n&&!u)throw new Error('The cacheId "'+a+'" does not exist in BaseTextureCache.');return u||(u=new e(t,i),u.cacheId=a,e.addToCache(u,a)),u},e.fromBuffer=function(t,i,n,o){t=t||new Float32Array(i*n*4);var a=new ke(t,{width:i,height:n}),s=t instanceof Float32Array?D.FLOAT:D.UNSIGNED_BYTE;return new e(a,Object.assign(Bc,o||{width:i,height:n,type:s}))},e.addToCache=function(t,i){i&&(t.textureCacheIds.indexOf(i)===-1&&t.textureCacheIds.push(i),te[i]&&console.warn("BaseTexture added to the cache with an id ["+i+"] that already had an entry"),te[i]=t)},e.removeFromCache=function(t){if(typeof t=="string"){var i=te[t];if(i){var n=i.textureCacheIds.indexOf(t);return n>-1&&i.textureCacheIds.splice(n,1),delete te[t],i}}else if(t&&t.textureCacheIds){for(var o=0;o<t.textureCacheIds.length;++o)delete te[t.textureCacheIds[o]];return t.textureCacheIds.length=0,t}return null},e._globalBatch=0,e}(Fe),Pi=function(r){Q(e,r);function e(t,i){var n=this,o=i||{},a=o.width,s=o.height;n=r.call(this,a,s)||this,n.items=[],n.itemDirtyIds=[];for(var u=0;u<t;u++){var h=new Z;n.items.push(h),n.itemDirtyIds.push(-2)}return n.length=t,n._load=null,n.baseTexture=null,n}return e.prototype.initFromArray=function(t,i){for(var n=0;n<this.length;n++)!t[n]||(t[n].castToBaseTexture?this.addBaseTextureAt(t[n].castToBaseTexture(),n):t[n]instanceof Ee?this.addResourceAt(t[n],n):this.addResourceAt(Ei(t[n],i),n))},e.prototype.dispose=function(){for(var t=0,i=this.length;t<i;t++)this.items[t].destroy();this.items=null,this.itemDirtyIds=null,this._load=null},e.prototype.addResourceAt=function(t,i){if(!this.items[i])throw new Error("Index "+i+" is out of bounds");return t.valid&&!this.valid&&this.resize(t.width,t.height),this.items[i].setResource(t),this},e.prototype.bind=function(t){if(this.baseTexture!==null)throw new Error("Only one base texture per TextureArray is allowed");r.prototype.bind.call(this,t);for(var i=0;i<this.length;i++)this.items[i].parentTextureArray=t,this.items[i].on("update",t.update,t)},e.prototype.unbind=function(t){r.prototype.unbind.call(this,t);for(var i=0;i<this.length;i++)this.items[i].parentTextureArray=null,this.items[i].off("update",t.update,t)},e.prototype.load=function(){var t=this;if(this._load)return this._load;var i=this.items.map(function(o){return o.resource}).filter(function(o){return o}),n=i.map(function(o){return o.load()});return this._load=Promise.all(n).then(function(){var o=t.items[0],a=o.realWidth,s=o.realHeight;return t.resize(a,s),Promise.resolve(t)}),this._load},e}(Ee),pa=function(r){Q(e,r);function e(t,i){var n=this,o=i||{},a=o.width,s=o.height,u,h;return Array.isArray(t)?(u=t,h=t.length):h=t,n=r.call(this,h,{width:a,height:s})||this,u&&n.initFromArray(u,i),n}return e.prototype.addBaseTextureAt=function(t,i){if(t.resource)this.addResourceAt(t.resource,i);else throw new Error("ArrayResource does not support RenderTexture");return this},e.prototype.bind=function(t){r.prototype.bind.call(this,t),t.target=Jt.TEXTURE_2D_ARRAY},e.prototype.upload=function(t,i,n){var o=this,a=o.length,s=o.itemDirtyIds,u=o.items,h=t.gl;n.dirtyId<0&&h.texImage3D(h.TEXTURE_2D_ARRAY,0,n.internalFormat,this._width,this._height,a,0,i.format,n.type,null);for(var l=0;l<a;l++){var f=u[l];s[l]<f.dirtyId&&(s[l]=f.dirtyId,f.valid&&h.texSubImage3D(h.TEXTURE_2D_ARRAY,0,0,0,l,f.resource.width,f.resource.height,1,i.format,n.type,f.resource.source))}return!0},e}(Pi),Vt=function(r){Q(e,r);function e(t){var i=this,n=t,o=n.naturalWidth||n.videoWidth||n.width,a=n.naturalHeight||n.videoHeight||n.height;return i=r.call(this,o,a)||this,i.source=t,i.noSubImage=!1,i}return e.crossOrigin=function(t,i,n){n===void 0&&i.indexOf("data:")!==0?t.crossOrigin=vc(i):n!==!1&&(t.crossOrigin=typeof n=="string"?n:"anonymous")},e.prototype.upload=function(t,i,n,o){var a=t.gl,s=i.realWidth,u=i.realHeight;return o=o||this.source,a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,i.alphaMode===Xt.UNPACK),!this.noSubImage&&i.target===a.TEXTURE_2D&&n.width===s&&n.height===u?a.texSubImage2D(a.TEXTURE_2D,0,0,0,i.format,n.type,o):(n.width=s,n.height=u,a.texImage2D(i.target,0,n.internalFormat,i.format,n.type,o)),!0},e.prototype.update=function(){if(!this.destroyed){var t=this.source,i=t.naturalWidth||t.videoWidth||t.width,n=t.naturalHeight||t.videoHeight||t.height;this.resize(i,n),r.prototype.update.call(this)}},e.prototype.dispose=function(){this.source=null},e}(Ee),Ii=function(r){Q(e,r);function e(t){return r.call(this,t)||this}return e.test=function(t){var i=self.OffscreenCanvas;return i&&t instanceof i?!0:self.HTMLCanvasElement&&t instanceof HTMLCanvasElement},e}(Vt),va=function(r){Q(e,r);function e(t,i){var n=this,o=i||{},a=o.width,s=o.height,u=o.autoLoad,h=o.linkBaseTexture;if(t&&t.length!==e.SIDES)throw new Error("Invalid length. Got "+t.length+", expected 6");n=r.call(this,6,{width:a,height:s})||this;for(var l=0;l<e.SIDES;l++)n.items[l].target=Jt.TEXTURE_CUBE_MAP_POSITIVE_X+l;return n.linkBaseTexture=h!==!1,t&&n.initFromArray(t,i),u!==!1&&n.load(),n}return e.prototype.bind=function(t){r.prototype.bind.call(this,t),t.target=Jt.TEXTURE_CUBE_MAP},e.prototype.addBaseTextureAt=function(t,i,n){if(!this.items[i])throw new Error("Index "+i+" is out of bounds");if(!this.linkBaseTexture||t.parentTextureArray||Object.keys(t._glTextures).length>0)if(t.resource)this.addResourceAt(t.resource,i);else throw new Error("CubeResource does not support copying of renderTexture.");else t.target=Jt.TEXTURE_CUBE_MAP_POSITIVE_X+i,t.parentTextureArray=this.baseTexture,this.items[i]=t;return t.valid&&!this.valid&&this.resize(t.realWidth,t.realHeight),this.items[i]=t,this},e.prototype.upload=function(t,i,n){for(var o=this.itemDirtyIds,a=0;a<e.SIDES;a++){var s=this.items[a];o[a]<s.dirtyId&&(s.valid&&s.resource?(s.resource.upload(t,s,n),o[a]=s.dirtyId):o[a]<-1&&(t.gl.texImage2D(s.target,0,n.internalFormat,i.realWidth,i.realHeight,0,i.format,n.type,null),o[a]=-1))}return!0},e.test=function(t){return Array.isArray(t)&&t.length===e.SIDES},e.SIDES=6,e}(Pi),Si=function(r){Q(e,r);function e(t,i){var n=this;if(i=i||{},!(t instanceof HTMLImageElement)){var o=new Image;Vt.crossOrigin(o,t,i.crossorigin),o.src=t,t=o}return n=r.call(this,t)||this,!t.complete&&!!n._width&&!!n._height&&(n._width=0,n._height=0),n.url=t.src,n._process=null,n.preserveBitmap=!1,n.createBitmap=(i.createBitmap!==void 0?i.createBitmap:O.CREATE_IMAGE_BITMAP)&&!!self.createImageBitmap,n.alphaMode=typeof i.alphaMode=="number"?i.alphaMode:null,n.bitmap=null,n._load=null,i.autoLoad!==!1&&n.load(),n}return e.prototype.load=function(t){var i=this;return this._load?this._load:(t!==void 0&&(this.createBitmap=t),this._load=new Promise(function(n,o){var a=i.source;i.url=a.src;var s=function(){i.destroyed||(a.onload=null,a.onerror=null,i.resize(a.width,a.height),i._load=null,i.createBitmap?n(i.process()):n(i))};a.complete&&a.src?s():(a.onload=s,a.onerror=function(u){o(u),i.onError.emit(u)})}),this._load)},e.prototype.process=function(){var t=this,i=this.source;if(this._process!==null)return this._process;if(this.bitmap!==null||!self.createImageBitmap)return Promise.resolve(this);var n=self.createImageBitmap,o=!i.crossOrigin||i.crossOrigin==="anonymous";return this._process=fetch(i.src,{mode:o?"cors":"no-cors"}).then(function(a){return a.blob()}).then(function(a){return n(a,0,0,i.width,i.height,{premultiplyAlpha:t.alphaMode===Xt.UNPACK?"premultiply":"none"})}).then(function(a){return t.destroyed?Promise.reject():(t.bitmap=a,t.update(),t._process=null,Promise.resolve(t))}),this._process},e.prototype.upload=function(t,i,n){if(typeof this.alphaMode=="number"&&(i.alphaMode=this.alphaMode),!this.createBitmap)return r.prototype.upload.call(this,t,i,n);if(!this.bitmap&&(this.process(),!this.bitmap))return!1;if(r.prototype.upload.call(this,t,i,n,this.bitmap),!this.preserveBitmap){var o=!0,a=i._glTextures;for(var s in a){var u=a[s];if(u!==n&&u.dirtyId!==i.dirtyId){o=!1;break}}o&&(this.bitmap.close&&this.bitmap.close(),this.bitmap=null)}return!0},e.prototype.dispose=function(){this.source.onload=null,this.source.onerror=null,r.prototype.dispose.call(this),this.bitmap&&(this.bitmap.close(),this.bitmap=null),this._process=null,this._load=null},e.test=function(t){return typeof t=="string"||t instanceof HTMLImageElement},e}(Vt),_a=function(r){Q(e,r);function e(t,i){var n=this;return i=i||{},n=r.call(this,document.createElement("canvas"))||this,n._width=0,n._height=0,n.svg=t,n.scale=i.scale||1,n._overrideWidth=i.width,n._overrideHeight=i.height,n._resolve=null,n._crossorigin=i.crossorigin,n._load=null,i.autoLoad!==!1&&n.load(),n}return e.prototype.load=function(){var t=this;return this._load?this._load:(this._load=new Promise(function(i){if(t._resolve=function(){t.resize(t.source.width,t.source.height),i(t)},/^\<svg/.test(t.svg.trim())){if(!btoa)throw new Error("Your browser doesn't support base64 conversions.");t.svg="data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(t.svg)))}t._loadSvg()}),this._load)},e.prototype._loadSvg=function(){var t=this,i=new Image;Vt.crossOrigin(i,this.svg,this._crossorigin),i.src=this.svg,i.onerror=function(n){!t._resolve||(i.onerror=null,t.onError.emit(n))},i.onload=function(){if(!!t._resolve){var n=i.width,o=i.height;if(!n||!o)throw new Error("The SVG image must have width and height defined (in pixels), canvas API needs them.");var a=n*t.scale,s=o*t.scale;(t._overrideWidth||t._overrideHeight)&&(a=t._overrideWidth||t._overrideHeight/o*n,s=t._overrideHeight||t._overrideWidth/n*o),a=Math.round(a),s=Math.round(s);var u=t.source;u.width=a,u.height=s,u._pixiId="canvas_"+Te(),u.getContext("2d").drawImage(i,0,0,n,o,0,0,a,s),t._resolve(),t._resolve=null}}},e.getSize=function(t){var i=e.SVG_SIZE.exec(t),n={};return i&&(n[i[1]]=Math.round(parseFloat(i[3])),n[i[5]]=Math.round(parseFloat(i[7]))),n},e.prototype.dispose=function(){r.prototype.dispose.call(this),this._resolve=null,this._crossorigin=null},e.test=function(t,i){return i==="svg"||typeof t=="string"&&/^data:image\/svg\+xml(;(charset=utf8|utf8))?;base64/.test(t)||typeof t=="string"&&e.SVG_XML.test(t)},e.SVG_XML=/^(<\?xml[^?]+\?>)?\s*(<!--[^(-->)]*-->)?\s*\<svg/m,e.SVG_SIZE=/<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i,e}(Vt),ma=function(r){Q(e,r);function e(t,i){var n=this;if(i=i||{},!(t instanceof HTMLVideoElement)){var o=document.createElement("video");o.setAttribute("preload","auto"),o.setAttribute("webkit-playsinline",""),o.setAttribute("playsinline",""),typeof t=="string"&&(t=[t]);var a=t[0].src||t[0];Vt.crossOrigin(o,a,i.crossorigin);for(var s=0;s<t.length;++s){var u=document.createElement("source"),h=t[s],l=h.src,f=h.mime;l=l||t[s];var c=l.split("?").shift().toLowerCase(),d=c.substr(c.lastIndexOf(".")+1);f=f||e.MIME_TYPES[d]||"video/"+d,u.src=l,u.type=f,o.appendChild(u)}t=o}return n=r.call(this,t)||this,n.noSubImage=!0,n._autoUpdate=!0,n._isConnectedToTicker=!1,n._updateFPS=i.updateFPS||0,n._msToNextUpdate=0,n.autoPlay=i.autoPlay!==!1,n._load=null,n._resolve=null,n._onCanPlay=n._onCanPlay.bind(n),n._onError=n._onError.bind(n),i.autoLoad!==!1&&n.load(),n}return e.prototype.update=function(t){if(!this.destroyed){var i=xt.shared.elapsedMS*this.source.playbackRate;this._msToNextUpdate=Math.floor(this._msToNextUpdate-i),(!this._updateFPS||this._msToNextUpdate<=0)&&(r.prototype.update.call(this),this._msToNextUpdate=this._updateFPS?Math.floor(1e3/this._updateFPS):0)}},e.prototype.load=function(){var t=this;if(this._load)return this._load;var i=this.source;return(i.readyState===i.HAVE_ENOUGH_DATA||i.readyState===i.HAVE_FUTURE_DATA)&&i.width&&i.height&&(i.complete=!0),i.addEventListener("play",this._onPlayStart.bind(this)),i.addEventListener("pause",this._onPlayStop.bind(this)),this._isSourceReady()?this._onCanPlay():(i.addEventListener("canplay",this._onCanPlay),i.addEventListener("canplaythrough",this._onCanPlay),i.addEventListener("error",this._onError,!0)),this._load=new Promise(function(n){t.valid?n(t):(t._resolve=n,i.load())}),this._load},e.prototype._onError=function(t){this.source.removeEventListener("error",this._onError,!0),this.onError.emit(t)},e.prototype._isSourcePlaying=function(){var t=this.source;return t.currentTime>0&&t.paused===!1&&t.ended===!1&&t.readyState>2},e.prototype._isSourceReady=function(){var t=this.source;return t.readyState===3||t.readyState===4},e.prototype._onPlayStart=function(){this.valid||this._onCanPlay(),this.autoUpdate&&!this._isConnectedToTicker&&(xt.shared.add(this.update,this),this._isConnectedToTicker=!0)},e.prototype._onPlayStop=function(){this._isConnectedToTicker&&(xt.shared.remove(this.update,this),this._isConnectedToTicker=!1)},e.prototype._onCanPlay=function(){var t=this.source;t.removeEventListener("canplay",this._onCanPlay),t.removeEventListener("canplaythrough",this._onCanPlay);var i=this.valid;this.resize(t.videoWidth,t.videoHeight),!i&&this._resolve&&(this._resolve(this),this._resolve=null),this._isSourcePlaying()?this._onPlayStart():this.autoPlay&&t.play()},e.prototype.dispose=function(){this._isConnectedToTicker&&(xt.shared.remove(this.update,this),this._isConnectedToTicker=!1);var t=this.source;t&&(t.removeEventListener("error",this._onError,!0),t.pause(),t.src="",t.load()),r.prototype.dispose.call(this)},Object.defineProperty(e.prototype,"autoUpdate",{get:function(){return this._autoUpdate},set:function(t){t!==this._autoUpdate&&(this._autoUpdate=t,!this._autoUpdate&&this._isConnectedToTicker?(xt.shared.remove(this.update,this),this._isConnectedToTicker=!1):this._autoUpdate&&!this._isConnectedToTicker&&this._isSourcePlaying()&&(xt.shared.add(this.update,this),this._isConnectedToTicker=!0))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"updateFPS",{get:function(){return this._updateFPS},set:function(t){t!==this._updateFPS&&(this._updateFPS=t)},enumerable:!1,configurable:!0}),e.test=function(t,i){return self.HTMLVideoElement&&t instanceof HTMLVideoElement||e.TYPES.indexOf(i)>-1},e.TYPES=["mp4","m4v","webm","ogg","ogv","h264","avi","mov"],e.MIME_TYPES={ogv:"video/ogg",mov:"video/quicktime",m4v:"video/mp4"},e}(Vt),ga=function(r){Q(e,r);function e(t){return r.call(this,t)||this}return e.test=function(t){return!!self.createImageBitmap&&t instanceof ImageBitmap},e}(Vt);br.push(Si,ga,Ii,ma,_a,ke,va,pa);var ya={__proto__:null,Resource:Ee,BaseImageResource:Vt,INSTALLED:br,autoDetectResource:Ei,AbstractMultiResource:Pi,ArrayResource:pa,BufferResource:ke,CanvasResource:Ii,CubeResource:va,ImageResource:Si,SVGResource:_a,VideoResource:ma,ImageBitmapResource:ga},Dc=function(r){Q(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.upload=function(t,i,n){var o=t.gl;o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,i.alphaMode===Xt.UNPACK);var a=i.realWidth,s=i.realHeight;return n.width===a&&n.height===s?o.texSubImage2D(i.target,0,0,0,a,s,i.format,n.type,this.data):(n.width=a,n.height=s,o.texImage2D(i.target,0,n.internalFormat,a,s,0,i.format,n.type,this.data)),!0},e}(ke),Ri=function(){function r(e,t){this.width=Math.round(e||100),this.height=Math.round(t||100),this.stencil=!1,this.depth=!1,this.dirtyId=0,this.dirtyFormat=0,this.dirtySize=0,this.depthTexture=null,this.colorTextures=[],this.glFramebuffers={},this.disposeRunner=new bt("disposeFramebuffer"),this.multisample=dt.NONE}return Object.defineProperty(r.prototype,"colorTexture",{get:function(){return this.colorTextures[0]},enumerable:!1,configurable:!0}),r.prototype.addColorTexture=function(e,t){return e===void 0&&(e=0),this.colorTextures[e]=t||new Z(null,{scaleMode:Et.NEAREST,resolution:1,mipmap:Ut.OFF,width:this.width,height:this.height}),this.dirtyId++,this.dirtyFormat++,this},r.prototype.addDepthTexture=function(e){return this.depthTexture=e||new Z(new Dc(null,{width:this.width,height:this.height}),{scaleMode:Et.NEAREST,resolution:1,width:this.width,height:this.height,mipmap:Ut.OFF,format:P.DEPTH_COMPONENT,type:D.UNSIGNED_SHORT}),this.dirtyId++,this.dirtyFormat++,this},r.prototype.enableDepth=function(){return this.depth=!0,this.dirtyId++,this.dirtyFormat++,this},r.prototype.enableStencil=function(){return this.stencil=!0,this.dirtyId++,this.dirtyFormat++,this},r.prototype.resize=function(e,t){if(e=Math.round(e),t=Math.round(t),!(e===this.width&&t===this.height)){this.width=e,this.height=t,this.dirtyId++,this.dirtySize++;for(var i=0;i<this.colorTextures.length;i++){var n=this.colorTextures[i],o=n.resolution;n.setSize(e/o,t/o)}if(this.depthTexture){var o=this.depthTexture.resolution;this.depthTexture.setSize(e/o,t/o)}}},r.prototype.dispose=function(){this.disposeRunner.emit(this,!1)},r.prototype.destroyDepthTexture=function(){this.depthTexture&&(this.depthTexture.destroy(),this.depthTexture=null,++this.dirtyId,++this.dirtyFormat)},r}(),xa=function(r){Q(e,r);function e(t){var i=this;if(typeof t=="number"){var n=arguments[0],o=arguments[1],a=arguments[2],s=arguments[3];t={width:n,height:o,scaleMode:a,resolution:s}}return t.width=t.width||100,t.height=t.height||100,t.multisample=t.multisample!==void 0?t.multisample:dt.NONE,i=r.call(this,null,t)||this,i.mipmap=Ut.OFF,i.valid=!0,i.clearColor=[0,0,0,0],i.framebuffer=new Ri(i.realWidth,i.realHeight).addColorTexture(0,i),i.framebuffer.multisample=t.multisample,i.maskStack=[],i.filterStack=[{}],i}return e.prototype.resize=function(t,i){this.framebuffer.resize(t*this.resolution,i*this.resolution),this.setRealSize(this.framebuffer.width,this.framebuffer.height)},e.prototype.dispose=function(){this.framebuffer.dispose(),r.prototype.dispose.call(this)},e.prototype.destroy=function(){r.prototype.destroy.call(this),this.framebuffer.destroyDepthTexture(),this.framebuffer=null},e}(Z),ba=function(){function r(){this.x0=0,this.y0=0,this.x1=1,this.y1=0,this.x2=1,this.y2=1,this.x3=0,this.y3=1,this.uvsFloat32=new Float32Array(8)}return r.prototype.set=function(e,t,i){var n=t.width,o=t.height;if(i){var a=e.width/2/n,s=e.height/2/o,u=e.x/n+a,h=e.y/o+s;i=nt.add(i,nt.NW),this.x0=u+a*nt.uX(i),this.y0=h+s*nt.uY(i),i=nt.add(i,2),this.x1=u+a*nt.uX(i),this.y1=h+s*nt.uY(i),i=nt.add(i,2),this.x2=u+a*nt.uX(i),this.y2=h+s*nt.uY(i),i=nt.add(i,2),this.x3=u+a*nt.uX(i),this.y3=h+s*nt.uY(i)}else this.x0=e.x/n,this.y0=e.y/o,this.x1=(e.x+e.width)/n,this.y1=e.y/o,this.x2=(e.x+e.width)/n,this.y2=(e.y+e.height)/o,this.x3=e.x/n,this.y3=(e.y+e.height)/o;this.uvsFloat32[0]=this.x0,this.uvsFloat32[1]=this.y0,this.uvsFloat32[2]=this.x1,this.uvsFloat32[3]=this.y1,this.uvsFloat32[4]=this.x2,this.uvsFloat32[5]=this.y2,this.uvsFloat32[6]=this.x3,this.uvsFloat32[7]=this.y3},r.prototype.toString=function(){return"[@pixi/core:TextureUvs "+("x0="+this.x0+" y0="+this.y0+" ")+("x1="+this.x1+" y1="+this.y1+" x2="+this.x2+" ")+("y2="+this.y2+" x3="+this.x3+" y3="+this.y3)+"]"},r}(),Ta=new ba,L=function(r){Q(e,r);function e(t,i,n,o,a,s){var u=r.call(this)||this;if(u.noFrame=!1,i||(u.noFrame=!0,i=new W(0,0,1,1)),t instanceof e&&(t=t.baseTexture),u.baseTexture=t,u._frame=i,u.trim=o,u.valid=!1,u._uvs=Ta,u.uvMatrix=null,u.orig=n||i,u._rotate=Number(a||0),a===!0)u._rotate=2;else if(u._rotate%2!=0)throw new Error("attempt to use diamond-shaped UVs. If you are sure, set rotation manually");return u.defaultAnchor=s?new Y(s.x,s.y):new Y(0,0),u._updateID=0,u.textureCacheIds=[],t.valid?u.noFrame?t.valid&&u.onBaseTextureUpdated(t):u.frame=i:t.once("loaded",u.onBaseTextureUpdated,u),u.noFrame&&t.on("update",u.onBaseTextureUpdated,u),u}return e.prototype.update=function(){this.baseTexture.resource&&this.baseTexture.resource.update()},e.prototype.onBaseTextureUpdated=function(t){if(this.noFrame){if(!this.baseTexture.valid)return;this._frame.width=t.width,this._frame.height=t.height,this.valid=!0,this.updateUvs()}else this.frame=this._frame;this.emit("update",this)},e.prototype.destroy=function(t){if(this.baseTexture){if(t){var i=this.baseTexture.resource;i&&i.url&&Ht[i.url]&&e.removeFromCache(i.url),this.baseTexture.destroy()}this.baseTexture.off("loaded",this.onBaseTextureUpdated,this),this.baseTexture.off("update",this.onBaseTextureUpdated,this),this.baseTexture=null}this._frame=null,this._uvs=null,this.trim=null,this.orig=null,this.valid=!1,e.removeFromCache(this),this.textureCacheIds=null},e.prototype.clone=function(){var t=this._frame.clone(),i=this._frame===this.orig?t:this.orig.clone(),n=new e(this.baseTexture,!this.noFrame&&t,i,this.trim&&this.trim.clone(),this.rotate,this.defaultAnchor);return this.noFrame&&(n._frame=t),n},e.prototype.updateUvs=function(){this._uvs===Ta&&(this._uvs=new ba),this._uvs.set(this._frame,this.baseTexture,this.rotate),this._updateID++},e.from=function(t,i,n){i===void 0&&(i={}),n===void 0&&(n=O.STRICT_TEXTURE_CACHE);var o=typeof t=="string",a=null;if(o)a=t;else{if(!t._pixiId){var s=i&&i.pixiIdPrefix||"pixiid";t._pixiId=s+"_"+Te()}a=t._pixiId}var u=Ht[a];if(o&&n&&!u)throw new Error('The cacheId "'+a+'" does not exist in TextureCache.');return u||(i.resolution||(i.resolution=dr(t)),u=new e(new Z(t,i)),u.baseTexture.cacheId=a,Z.addToCache(u.baseTexture,a),e.addToCache(u,a)),u},e.fromURL=function(t,i){var n=Object.assign({autoLoad:!1},i==null?void 0:i.resourceOptions),o=e.from(t,Object.assign({resourceOptions:n},i),!1),a=o.baseTexture.resource;return o.baseTexture.valid?Promise.resolve(o):a.load().then(function(){return Promise.resolve(o)})},e.fromBuffer=function(t,i,n,o){return new e(Z.fromBuffer(t,i,n,o))},e.fromLoader=function(t,i,n,o){var a=new Z(t,Object.assign({scaleMode:O.SCALE_MODE,resolution:dr(i)},o)),s=a.resource;s instanceof Si&&(s.url=i);var u=new e(a);return n||(n=i),Z.addToCache(u.baseTexture,n),e.addToCache(u,n),n!==i&&(Z.addToCache(u.baseTexture,i),e.addToCache(u,i)),u.baseTexture.valid?Promise.resolve(u):new Promise(function(h){u.baseTexture.once("loaded",function(){return h(u)})})},e.addToCache=function(t,i){i&&(t.textureCacheIds.indexOf(i)===-1&&t.textureCacheIds.push(i),Ht[i]&&console.warn("Texture added to the cache with an id ["+i+"] that already had an entry"),Ht[i]=t)},e.removeFromCache=function(t){if(typeof t=="string"){var i=Ht[t];if(i){var n=i.textureCacheIds.indexOf(t);return n>-1&&i.textureCacheIds.splice(n,1),delete Ht[t],i}}else if(t&&t.textureCacheIds){for(var o=0;o<t.textureCacheIds.length;++o)Ht[t.textureCacheIds[o]]===t&&delete Ht[t.textureCacheIds[o]];return t.textureCacheIds.length=0,t}return null},Object.defineProperty(e.prototype,"resolution",{get:function(){return this.baseTexture.resolution},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"frame",{get:function(){return this._frame},set:function(t){this._frame=t,this.noFrame=!1;var i=t.x,n=t.y,o=t.width,a=t.height,s=i+o>this.baseTexture.width,u=n+a>this.baseTexture.height;if(s||u){var h=s&&u?"and":"or",l="X: "+i+" + "+o+" = "+(i+o)+" > "+this.baseTexture.width,f="Y: "+n+" + "+a+" = "+(n+a)+" > "+this.baseTexture.height;throw new Error("Texture Error: frame does not fit inside the base Texture dimensions: "+(l+" "+h+" "+f))}this.valid=o&&a&&this.baseTexture.valid,!this.trim&&!this.rotate&&(this.orig=t),this.valid&&this.updateUvs()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"rotate",{get:function(){return this._rotate},set:function(t){this._rotate=t,this.valid&&this.updateUvs()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"width",{get:function(){return this.orig.width},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this.orig.height},enumerable:!1,configurable:!0}),e.prototype.castToBaseTexture=function(){return this.baseTexture},e}(Fe);function Gc(){var r=document.createElement("canvas");r.width=16,r.height=16;var e=r.getContext("2d");return e.fillStyle="white",e.fillRect(0,0,16,16),new L(new Z(new Ii(r)))}function Tr(r){r.destroy=function(){},r.on=function(){},r.once=function(){},r.emit=function(){}}L.EMPTY=new L(new Z);Tr(L.EMPTY);Tr(L.EMPTY.baseTexture);L.WHITE=Gc();Tr(L.WHITE);Tr(L.WHITE.baseTexture);var se=function(r){Q(e,r);function e(t,i){var n=r.call(this,t,i)||this;return n.valid=!0,n.filterFrame=null,n.filterPoolKey=null,n.updateUvs(),n}return Object.defineProperty(e.prototype,"framebuffer",{get:function(){return this.baseTexture.framebuffer},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"multisample",{get:function(){return this.framebuffer.multisample},set:function(t){this.framebuffer.multisample=t},enumerable:!1,configurable:!0}),e.prototype.resize=function(t,i,n){n===void 0&&(n=!0);var o=this.baseTexture.resolution,a=Math.round(t*o)/o,s=Math.round(i*o)/o;this.valid=a>0&&s>0,this._frame.width=this.orig.width=a,this._frame.height=this.orig.height=s,n&&this.baseTexture.resize(a,s),this.updateUvs()},e.prototype.setResolution=function(t){var i=this.baseTexture;i.resolution!==t&&(i.setResolution(t),this.resize(i.width,i.height,!1))},e.create=function(t){for(var i=arguments,n=[],o=1;o<arguments.length;o++)n[o-1]=i[o];return typeof t=="number"&&(Qt("6.0.0","Arguments (width, height, scaleMode, resolution) have been deprecated."),t={width:t,height:n[0],scaleMode:n[1],resolution:n[2]}),new e(new xa(t))},e}(L),kc=function(){function r(e){this.texturePool={},this.textureOptions=e||{},this.enableFullScreen=!1,this._pixelsWidth=0,this._pixelsHeight=0}return r.prototype.createTexture=function(e,t,i){i===void 0&&(i=dt.NONE);var n=new xa(Object.assign({width:e,height:t,resolution:1,multisample:i},this.textureOptions));return new se(n)},r.prototype.getOptimalTexture=function(e,t,i,n){i===void 0&&(i=1),n===void 0&&(n=dt.NONE);var o;e=Math.ceil(e*i),t=Math.ceil(t*i),!this.enableFullScreen||e!==this._pixelsWidth||t!==this._pixelsHeight?(e=fr(e),t=fr(t),o=((e&65535)<<16|t&65535)>>>0,n>1&&(o+=n*4294967296)):o=n>1?-n:-1,this.texturePool[o]||(this.texturePool[o]=[]);var a=this.texturePool[o].pop();return a||(a=this.createTexture(e,t,n)),a.filterPoolKey=o,a.setResolution(i),a},r.prototype.getFilterTexture=function(e,t,i){var n=this.getOptimalTexture(e.width,e.height,t||e.resolution,i||dt.NONE);return n.filterFrame=e.filterFrame,n},r.prototype.returnTexture=function(e){var t=e.filterPoolKey;e.filterFrame=null,this.texturePool[t].push(e)},r.prototype.returnFilterTexture=function(e){this.returnTexture(e)},r.prototype.clear=function(e){if(e=e!==!1,e)for(var t in this.texturePool){var i=this.texturePool[t];if(i)for(var n=0;n<i.length;n++)i[n].destroy(!0)}this.texturePool={}},r.prototype.setScreenSize=function(e){if(!(e.width===this._pixelsWidth&&e.height===this._pixelsHeight)){this.enableFullScreen=e.width>0&&e.height>0;for(var t in this.texturePool)if(Number(t)<0){var i=this.texturePool[t];if(i)for(var n=0;n<i.length;n++)i[n].destroy(!0);this.texturePool[t]=[]}this._pixelsWidth=e.width,this._pixelsHeight=e.height}},r.SCREEN_KEY=-1,r}(),Ea=function(){function r(e,t,i,n,o,a,s){t===void 0&&(t=0),i===void 0&&(i=!1),n===void 0&&(n=D.FLOAT),this.buffer=e,this.size=t,this.normalized=i,this.type=n,this.stride=o,this.start=a,this.instance=s}return r.prototype.destroy=function(){this.buffer=null},r.from=function(e,t,i,n,o){return new r(e,t,i,n,o)},r}(),jc=0,_t=function(){function r(e,t,i){t===void 0&&(t=!0),i===void 0&&(i=!1),this.data=e||new Float32Array(1),this._glBuffers={},this._updateID=0,this.index=i,this.static=t,this.id=jc++,this.disposeRunner=new bt("disposeBuffer")}return r.prototype.update=function(e){e instanceof Array&&(e=new Float32Array(e)),this.data=e||this.data,this._updateID++},r.prototype.dispose=function(){this.disposeRunner.emit(this,!1)},r.prototype.destroy=function(){this.dispose(),this.data=null},Object.defineProperty(r.prototype,"index",{get:function(){return this.type===Mt.ELEMENT_ARRAY_BUFFER},set:function(e){this.type=e?Mt.ELEMENT_ARRAY_BUFFER:Mt.ARRAY_BUFFER},enumerable:!1,configurable:!0}),r.from=function(e){return e instanceof Array&&(e=new Float32Array(e)),new r(e)},r}(),Xc={Float32Array,Uint32Array,Int32Array,Uint8Array};function Hc(r,e){for(var t=0,i=0,n={},o=0;o<r.length;o++)i+=e[o],t+=r[o].length;for(var a=new ArrayBuffer(t*4),s=null,u=0,o=0;o<r.length;o++){var h=e[o],l=r[o],f=ra(l);n[f]||(n[f]=new Xc[f](a)),s=n[f];for(var c=0;c<l.length;c++){var d=(c/h|0)*i+u,p=c%h;s[d+p]=l[c]}u+=h}return new Float32Array(a)}var Ca={5126:4,5123:2,5121:1},zc=0,Vc={Float32Array,Uint32Array,Int32Array,Uint8Array,Uint16Array},je=function(){function r(e,t){e===void 0&&(e=[]),t===void 0&&(t={}),this.buffers=e,this.indexBuffer=null,this.attributes=t,this.glVertexArrayObjects={},this.id=zc++,this.instanced=!1,this.instanceCount=1,this.disposeRunner=new bt("disposeGeometry"),this.refCount=0}return r.prototype.addAttribute=function(e,t,i,n,o,a,s,u){if(i===void 0&&(i=0),n===void 0&&(n=!1),u===void 0&&(u=!1),!t)throw new Error("You must pass a buffer when creating an attribute");t instanceof _t||(t instanceof Array&&(t=new Float32Array(t)),t=new _t(t));var h=e.split("|");if(h.length>1){for(var l=0;l<h.length;l++)this.addAttribute(h[l],t,i,n,o);return this}var f=this.buffers.indexOf(t);return f===-1&&(this.buffers.push(t),f=this.buffers.length-1),this.attributes[e]=new Ea(f,i,n,o,a,s,u),this.instanced=this.instanced||u,this},r.prototype.getAttribute=function(e){return this.attributes[e]},r.prototype.getBuffer=function(e){return this.buffers[this.getAttribute(e).buffer]},r.prototype.addIndex=function(e){return e instanceof _t||(e instanceof Array&&(e=new Uint16Array(e)),e=new _t(e)),e.type=Mt.ELEMENT_ARRAY_BUFFER,this.indexBuffer=e,this.buffers.indexOf(e)===-1&&this.buffers.push(e),this},r.prototype.getIndex=function(){return this.indexBuffer},r.prototype.interleave=function(){if(this.buffers.length===1||this.buffers.length===2&&this.indexBuffer)return this;var e=[],t=[],i=new _t,n;for(n in this.attributes){var o=this.attributes[n],a=this.buffers[o.buffer];e.push(a.data),t.push(o.size*Ca[o.type]/4),o.buffer=0}for(i.data=Hc(e,t),n=0;n<this.buffers.length;n++)this.buffers[n]!==this.indexBuffer&&this.buffers[n].destroy();return this.buffers=[i],this.indexBuffer&&this.buffers.push(this.indexBuffer),this},r.prototype.getSize=function(){for(var e in this.attributes){var t=this.attributes[e],i=this.buffers[t.buffer];return i.data.length/(t.stride/4||t.size)}return 0},r.prototype.dispose=function(){this.disposeRunner.emit(this,!1)},r.prototype.destroy=function(){this.dispose(),this.buffers=null,this.indexBuffer=null,this.attributes=null},r.prototype.clone=function(){for(var e=new r,t=0;t<this.buffers.length;t++)e.buffers[t]=new _t(this.buffers[t].data.slice(0));for(var t in this.attributes){var i=this.attributes[t];e.attributes[t]=new Ea(i.buffer,i.size,i.normalized,i.type,i.stride,i.start,i.instance)}return this.indexBuffer&&(e.indexBuffer=e.buffers[this.buffers.indexOf(this.indexBuffer)],e.indexBuffer.type=Mt.ELEMENT_ARRAY_BUFFER),e},r.merge=function(e){for(var t=new r,i=[],n=[],o=[],a,s=0;s<e.length;s++){a=e[s];for(var u=0;u<a.buffers.length;u++)n[u]=n[u]||0,n[u]+=a.buffers[u].data.length,o[u]=0}for(var s=0;s<a.buffers.length;s++)i[s]=new Vc[ra(a.buffers[s].data)](n[s]),t.buffers[s]=new _t(i[s]);for(var s=0;s<e.length;s++){a=e[s];for(var u=0;u<a.buffers.length;u++)i[u].set(a.buffers[u].data,o[u]),o[u]+=a.buffers[u].data.length}if(t.attributes=a.attributes,a.indexBuffer){t.indexBuffer=t.buffers[a.buffers.indexOf(a.indexBuffer)],t.indexBuffer.type=Mt.ELEMENT_ARRAY_BUFFER;for(var h=0,l=0,f=0,c=0,s=0;s<a.buffers.length;s++)if(a.buffers[s]!==a.indexBuffer){c=s;break}for(var s in a.attributes){var d=a.attributes[s];(d.buffer|0)===c&&(l+=d.size*Ca[d.type]/4)}for(var s=0;s<e.length;s++){for(var p=e[s].indexBuffer.data,u=0;u<p.length;u++)t.indexBuffer.data[u+f]+=h;h+=e[s].buffers[c].data.length/l,f+=p.length}}return t},r}(),$c=function(r){Q(e,r);function e(){var t=r.call(this)||this;return t.addAttribute("aVertexPosition",new Float32Array([0,0,1,0,1,1,0,1])).addIndex([0,1,3,2]),t}return e}(je),wa=function(r){Q(e,r);function e(){var t=r.call(this)||this;return t.vertices=new Float32Array([-1,-1,1,-1,1,1,-1,1]),t.uvs=new Float32Array([0,0,1,0,1,1,0,1]),t.vertexBuffer=new _t(t.vertices),t.uvBuffer=new _t(t.uvs),t.addAttribute("aVertexPosition",t.vertexBuffer).addAttribute("aTextureCoord",t.uvBuffer).addIndex([0,1,2,0,2,3]),t}return e.prototype.map=function(t,i){var n=0,o=0;return this.uvs[0]=n,this.uvs[1]=o,this.uvs[2]=n+i.width/t.width,this.uvs[3]=o,this.uvs[4]=n+i.width/t.width,this.uvs[5]=o+i.height/t.height,this.uvs[6]=n,this.uvs[7]=o+i.height/t.height,n=i.x,o=i.y,this.vertices[0]=n,this.vertices[1]=o,this.vertices[2]=n+i.width,this.vertices[3]=o,this.vertices[4]=n+i.width,this.vertices[5]=o+i.height,this.vertices[6]=n,this.vertices[7]=o+i.height,this.invalidate(),this},e.prototype.invalidate=function(){return this.vertexBuffer._updateID++,this.uvBuffer._updateID++,this},e}(je),Wc=0,ue=function(){function r(e,t,i){this.group=!0,this.syncUniforms={},this.dirtyId=0,this.id=Wc++,this.static=!!t,this.ubo=!!i,e instanceof _t?(this.buffer=e,this.buffer.type=Mt.UNIFORM_BUFFER,this.autoManage=!1,this.ubo=!0):(this.uniforms=e,this.ubo&&(this.buffer=new _t(new Float32Array(1)),this.buffer.type=Mt.UNIFORM_BUFFER,this.autoManage=!0))}return r.prototype.update=function(){this.dirtyId++,!this.autoManage&&this.buffer&&this.buffer.update()},r.prototype.add=function(e,t,i){if(!this.ubo)this.uniforms[e]=new r(t,i);else throw new Error("[UniformGroup] uniform groups in ubo mode cannot be modified, or have uniform groups nested in them")},r.from=function(e,t,i){return new r(e,t,i)},r.uboFrom=function(e,t){return new r(e,t!=null?t:!0,!0)},r}(),Yc=function(){function r(){this.renderTexture=null,this.target=null,this.legacy=!1,this.resolution=1,this.multisample=dt.NONE,this.sourceFrame=new W,this.destinationFrame=new W,this.bindingSourceFrame=new W,this.bindingDestinationFrame=new W,this.filters=[],this.transform=null}return r.prototype.clear=function(){this.target=null,this.filters=null,this.renderTexture=null},r}(),Er=[new Y,new Y,new Y,new Y],Ai=new pt,Pa=function(){function r(e){this.renderer=e,this.defaultFilterStack=[{}],this.texturePool=new kc,this.texturePool.setScreenSize(e.view),this.statePool=[],this.quad=new $c,this.quadUv=new wa,this.tempRect=new W,this.activeState={},this.globalUniforms=new ue({outputFrame:new W,inputSize:new Float32Array(4),inputPixel:new Float32Array(4),inputClamp:new Float32Array(4),resolution:1,filterArea:new Float32Array(4),filterClamp:new Float32Array(4)},!0),this.forceClear=!1,this.useMaxPadding=!1}return r.prototype.push=function(e,t){for(var i=this.renderer,n=this.defaultFilterStack,o=this.statePool.pop()||new Yc,a=this.renderer.renderTexture,s=t[0].resolution,u=t[0].multisample,h=t[0].padding,l=t[0].autoFit,f=t[0].legacy,c=1;c<t.length;c++){var d=t[c];s=Math.min(s,d.resolution),u=Math.min(u,d.multisample),h=this.useMaxPadding?Math.max(h,d.padding):h+d.padding,l=l&&d.autoFit,f=f||d.legacy}if(n.length===1&&(this.defaultFilterStack[0].renderTexture=a.current),n.push(o),o.resolution=s,o.multisample=u,o.legacy=f,o.target=e,o.sourceFrame.copyFrom(e.filterArea||e.getBounds(!0)),o.sourceFrame.pad(h),l){var p=this.tempRect.copyFrom(a.sourceFrame);i.projection.transform&&this.transformAABB(Ai.copyFrom(i.projection.transform).invert(),p),o.sourceFrame.fit(p)}this.roundFrame(o.sourceFrame,a.current?a.current.resolution:i.resolution,a.sourceFrame,a.destinationFrame,i.projection.transform),o.renderTexture=this.getOptimalFilterTexture(o.sourceFrame.width,o.sourceFrame.height,s,u),o.filters=t,o.destinationFrame.width=o.renderTexture.width,o.destinationFrame.height=o.renderTexture.height;var _=this.tempRect;_.x=0,_.y=0,_.width=o.sourceFrame.width,_.height=o.sourceFrame.height,o.renderTexture.filterFrame=o.sourceFrame,o.bindingSourceFrame.copyFrom(a.sourceFrame),o.bindingDestinationFrame.copyFrom(a.destinationFrame),o.transform=i.projection.transform,i.projection.transform=null,a.bind(o.renderTexture,o.sourceFrame,_),i.framebuffer.clear(0,0,0,0)},r.prototype.pop=function(){var e=this.defaultFilterStack,t=e.pop(),i=t.filters;this.activeState=t;var n=this.globalUniforms.uniforms;n.outputFrame=t.sourceFrame,n.resolution=t.resolution;var o=n.inputSize,a=n.inputPixel,s=n.inputClamp;if(o[0]=t.destinationFrame.width,o[1]=t.destinationFrame.height,o[2]=1/o[0],o[3]=1/o[1],a[0]=Math.round(o[0]*t.resolution),a[1]=Math.round(o[1]*t.resolution),a[2]=1/a[0],a[3]=1/a[1],s[0]=.5*a[2],s[1]=.5*a[3],s[2]=t.sourceFrame.width*o[2]-.5*a[2],s[3]=t.sourceFrame.height*o[3]-.5*a[3],t.legacy){var u=n.filterArea;u[0]=t.destinationFrame.width,u[1]=t.destinationFrame.height,u[2]=t.sourceFrame.x,u[3]=t.sourceFrame.y,n.filterClamp=n.inputClamp}this.globalUniforms.update();var h=e[e.length-1];if(this.renderer.framebuffer.blit(),i.length===1)i[0].apply(this,t.renderTexture,h.renderTexture,Yt.BLEND,t),this.returnFilterTexture(t.renderTexture);else{var l=t.renderTexture,f=this.getOptimalFilterTexture(l.width,l.height,t.resolution);f.filterFrame=l.filterFrame;var c=0;for(c=0;c<i.length-1;++c){c===1&&t.multisample>1&&(f=this.getOptimalFilterTexture(l.width,l.height,t.resolution),f.filterFrame=l.filterFrame),i[c].apply(this,l,f,Yt.CLEAR,t);var d=l;l=f,f=d}i[c].apply(this,l,h.renderTexture,Yt.BLEND,t),c>1&&t.multisample>1&&this.returnFilterTexture(t.renderTexture),this.returnFilterTexture(l),this.returnFilterTexture(f)}t.clear(),this.statePool.push(t)},r.prototype.bindAndClear=function(e,t){t===void 0&&(t=Yt.CLEAR);var i=this.renderer,n=i.renderTexture,o=i.state;if(e===this.defaultFilterStack[this.defaultFilterStack.length-1].renderTexture?this.renderer.projection.transform=this.activeState.transform:this.renderer.projection.transform=null,e&&e.filterFrame){var a=this.tempRect;a.x=0,a.y=0,a.width=e.filterFrame.width,a.height=e.filterFrame.height,n.bind(e,e.filterFrame,a)}else e!==this.defaultFilterStack[this.defaultFilterStack.length-1].renderTexture?n.bind(e):this.renderer.renderTexture.bind(e,this.activeState.bindingSourceFrame,this.activeState.bindingDestinationFrame);var s=o.stateId&1||this.forceClear;(t===Yt.CLEAR||t===Yt.BLIT&&s)&&this.renderer.framebuffer.clear(0,0,0,0)},r.prototype.applyFilter=function(e,t,i,n){var o=this.renderer;o.state.set(e.state),this.bindAndClear(i,n),e.uniforms.uSampler=t,e.uniforms.filterGlobals=this.globalUniforms,o.shader.bind(e),e.legacy=!!e.program.attributeData.aTextureCoord,e.legacy?(this.quadUv.map(t._frame,t.filterFrame),o.geometry.bind(this.quadUv),o.geometry.draw(Pt.TRIANGLES)):(o.geometry.bind(this.quad),o.geometry.draw(Pt.TRIANGLE_STRIP))},r.prototype.calculateSpriteMatrix=function(e,t){var i=this.activeState,n=i.sourceFrame,o=i.destinationFrame,a=t._texture.orig,s=e.set(o.width,0,0,o.height,n.x,n.y),u=t.worldTransform.copyTo(pt.TEMP_MATRIX);return u.invert(),s.prepend(u),s.scale(1/a.width,1/a.height),s.translate(t.anchor.x,t.anchor.y),s},r.prototype.destroy=function(){this.renderer=null,this.texturePool.clear(!1)},r.prototype.getOptimalFilterTexture=function(e,t,i,n){return i===void 0&&(i=1),n===void 0&&(n=dt.NONE),this.texturePool.getOptimalTexture(e,t,i,n)},r.prototype.getFilterTexture=function(e,t,i){if(typeof e=="number"){var n=e;e=t,t=n}e=e||this.activeState.renderTexture;var o=this.texturePool.getOptimalTexture(e.width,e.height,t||e.resolution,i||dt.NONE);return o.filterFrame=e.filterFrame,o},r.prototype.returnFilterTexture=function(e){this.texturePool.returnTexture(e)},r.prototype.emptyPool=function(){this.texturePool.clear(!0)},r.prototype.resize=function(){this.texturePool.setScreenSize(this.renderer.view)},r.prototype.transformAABB=function(e,t){var i=Er[0],n=Er[1],o=Er[2],a=Er[3];i.set(t.left,t.top),n.set(t.left,t.bottom),o.set(t.right,t.top),a.set(t.right,t.bottom),e.apply(i,i),e.apply(n,n),e.apply(o,o),e.apply(a,a);var s=Math.min(i.x,n.x,o.x,a.x),u=Math.min(i.y,n.y,o.y,a.y),h=Math.max(i.x,n.x,o.x,a.x),l=Math.max(i.y,n.y,o.y,a.y);t.x=s,t.y=u,t.width=h-s,t.height=l-u},r.prototype.roundFrame=function(e,t,i,n,o){if(o){var a=o.a,s=o.b,u=o.c,h=o.d;if((Math.abs(s)>1e-4||Math.abs(u)>1e-4)&&(Math.abs(a)>1e-4||Math.abs(h)>1e-4))return}o=o?Ai.copyFrom(o):Ai.identity(),o.translate(-i.x,-i.y).scale(n.width/i.width,n.height/i.height).translate(n.x,n.y),this.transformAABB(o,e),e.ceil(t),this.transformAABB(o.invert(),e)},r}(),Cr=function(){function r(e){this.renderer=e}return r.prototype.flush=function(){},r.prototype.destroy=function(){this.renderer=null},r.prototype.start=function(){},r.prototype.stop=function(){this.flush()},r.prototype.render=function(e){},r}(),Ia=function(){function r(e){this.renderer=e,this.emptyRenderer=new Cr(e),this.currentRenderer=this.emptyRenderer}return r.prototype.setObjectRenderer=function(e){this.currentRenderer!==e&&(this.currentRenderer.stop(),this.currentRenderer=e,this.currentRenderer.start())},r.prototype.flush=function(){this.setObjectRenderer(this.emptyRenderer)},r.prototype.reset=function(){this.setObjectRenderer(this.emptyRenderer)},r.prototype.copyBoundTextures=function(e,t){for(var i=this.renderer.texture.boundTextures,n=t-1;n>=0;--n)e[n]=i[n]||null,e[n]&&(e[n]._batchLocation=n)},r.prototype.boundArray=function(e,t,i,n){for(var o=e.elements,a=e.ids,s=e.count,u=0,h=0;h<s;h++){var l=o[h],f=l._batchLocation;if(f>=0&&f<n&&t[f]===l){a[h]=f;continue}for(;u<n;){var c=t[u];if(c&&c._batchEnabled===i&&c._batchLocation===u){u++;continue}a[h]=u,l._batchLocation=u,t[u]=l;break}}},r.prototype.destroy=function(){this.renderer=null},r}(),Sa=0,Ra=function(){function r(e){this.renderer=e,this.webGLVersion=1,this.extensions={},this.supports={uint32Indices:!1},this.handleContextLost=this.handleContextLost.bind(this),this.handleContextRestored=this.handleContextRestored.bind(this),e.view.addEventListener("webglcontextlost",this.handleContextLost,!1),e.view.addEventListener("webglcontextrestored",this.handleContextRestored,!1)}return Object.defineProperty(r.prototype,"isLost",{get:function(){return!this.gl||this.gl.isContextLost()},enumerable:!1,configurable:!0}),r.prototype.contextChange=function(e){this.gl=e,this.renderer.gl=e,this.renderer.CONTEXT_UID=Sa++,e.isContextLost()&&e.getExtension("WEBGL_lose_context")&&e.getExtension("WEBGL_lose_context").restoreContext()},r.prototype.initFromContext=function(e){this.gl=e,this.validateContext(e),this.renderer.gl=e,this.renderer.CONTEXT_UID=Sa++,this.renderer.runners.contextChange.emit(e)},r.prototype.initFromOptions=function(e){var t=this.createContext(this.renderer.view,e);this.initFromContext(t)},r.prototype.createContext=function(e,t){var i;if(O.PREFER_ENV>=kt.WEBGL2&&(i=e.getContext("webgl2",t)),i)this.webGLVersion=2;else if(this.webGLVersion=1,i=e.getContext("webgl",t)||e.getContext("experimental-webgl",t),!i)throw new Error("This browser does not support WebGL. Try using the canvas renderer");return this.gl=i,this.getExtensions(),this.gl},r.prototype.getExtensions=function(){var e=this.gl,t={anisotropicFiltering:e.getExtension("EXT_texture_filter_anisotropic"),floatTextureLinear:e.getExtension("OES_texture_float_linear"),s3tc:e.getExtension("WEBGL_compressed_texture_s3tc"),s3tc_sRGB:e.getExtension("WEBGL_compressed_texture_s3tc_srgb"),etc:e.getExtension("WEBGL_compressed_texture_etc"),etc1:e.getExtension("WEBGL_compressed_texture_etc1"),pvrtc:e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),atc:e.getExtension("WEBGL_compressed_texture_atc"),astc:e.getExtension("WEBGL_compressed_texture_astc")};this.webGLVersion===1?Object.assign(this.extensions,t,{drawBuffers:e.getExtension("WEBGL_draw_buffers"),depthTexture:e.getExtension("WEBGL_depth_texture"),loseContext:e.getExtension("WEBGL_lose_context"),vertexArrayObject:e.getExtension("OES_vertex_array_object")||e.getExtension("MOZ_OES_vertex_array_object")||e.getExtension("WEBKIT_OES_vertex_array_object"),uint32ElementIndex:e.getExtension("OES_element_index_uint"),floatTexture:e.getExtension("OES_texture_float"),floatTextureLinear:e.getExtension("OES_texture_float_linear"),textureHalfFloat:e.getExtension("OES_texture_half_float"),textureHalfFloatLinear:e.getExtension("OES_texture_half_float_linear")}):this.webGLVersion===2&&Object.assign(this.extensions,t,{colorBufferFloat:e.getExtension("EXT_color_buffer_float")})},r.prototype.handleContextLost=function(e){e.preventDefault()},r.prototype.handleContextRestored=function(){this.renderer.runners.contextChange.emit(this.gl)},r.prototype.destroy=function(){var e=this.renderer.view;this.renderer=null,e.removeEventListener("webglcontextlost",this.handleContextLost),e.removeEventListener("webglcontextrestored",this.handleContextRestored),this.gl.useProgram(null),this.extensions.loseContext&&this.extensions.loseContext.loseContext()},r.prototype.postrender=function(){this.renderer.renderingToScreen&&this.gl.flush()},r.prototype.validateContext=function(e){var t=e.getContextAttributes(),i="WebGL2RenderingContext"in self&&e instanceof self.WebGL2RenderingContext;i&&(this.webGLVersion=2),t.stencil||console.warn("Provided WebGL context does not have a stencil buffer, masks may not render correctly");var n=i||!!e.getExtension("OES_element_index_uint");this.supports.uint32Indices=n,n||console.warn("Provided WebGL context does not support 32 index buffer, complex graphics may not render correctly")},r}(),qc=function(){function r(e){this.framebuffer=e,this.stencil=null,this.dirtyId=-1,this.dirtyFormat=-1,this.dirtySize=-1,this.multisample=dt.NONE,this.msaaBuffer=null,this.blitFramebuffer=null,this.mipLevel=0}return r}(),Kc=new W,Aa=function(){function r(e){this.renderer=e,this.managedFramebuffers=[],this.unknownFramebuffer=new Ri(10,10),this.msaaSamples=null}return r.prototype.contextChange=function(){var e=this.gl=this.renderer.gl;if(this.CONTEXT_UID=this.renderer.CONTEXT_UID,this.current=this.unknownFramebuffer,this.viewport=new W,this.hasMRT=!0,this.writeDepthTexture=!0,this.disposeAll(!0),this.renderer.context.webGLVersion===1){var t=this.renderer.context.extensions.drawBuffers,i=this.renderer.context.extensions.depthTexture;O.PREFER_ENV===kt.WEBGL_LEGACY&&(t=null,i=null),t?e.drawBuffers=function(n){return t.drawBuffersWEBGL(n)}:(this.hasMRT=!1,e.drawBuffers=function(){}),i||(this.writeDepthTexture=!1)}else this.msaaSamples=e.getInternalformatParameter(e.RENDERBUFFER,e.RGBA8,e.SAMPLES)},r.prototype.bind=function(e,t,i){i===void 0&&(i=0);var n=this.gl;if(e){var o=e.glFramebuffers[this.CONTEXT_UID]||this.initFramebuffer(e);this.current!==e&&(this.current=e,n.bindFramebuffer(n.FRAMEBUFFER,o.framebuffer)),o.mipLevel!==i&&(e.dirtyId++,e.dirtyFormat++,o.mipLevel=i),o.dirtyId!==e.dirtyId&&(o.dirtyId=e.dirtyId,o.dirtyFormat!==e.dirtyFormat?(o.dirtyFormat=e.dirtyFormat,o.dirtySize=e.dirtySize,this.updateFramebuffer(e,i)):o.dirtySize!==e.dirtySize&&(o.dirtySize=e.dirtySize,this.resizeFramebuffer(e)));for(var a=0;a<e.colorTextures.length;a++){var s=e.colorTextures[a];this.renderer.texture.unbind(s.parentTextureArray||s)}if(e.depthTexture&&this.renderer.texture.unbind(e.depthTexture),t){var u=t.width>>i,h=t.height>>i,l=u/t.width;this.setViewport(t.x*l,t.y*l,u,h)}else{var u=e.width>>i,h=e.height>>i;this.setViewport(0,0,u,h)}}else this.current&&(this.current=null,n.bindFramebuffer(n.FRAMEBUFFER,null)),t?this.setViewport(t.x,t.y,t.width,t.height):this.setViewport(0,0,this.renderer.width,this.renderer.height)},r.prototype.setViewport=function(e,t,i,n){var o=this.viewport;e=Math.round(e),t=Math.round(t),i=Math.round(i),n=Math.round(n),(o.width!==i||o.height!==n||o.x!==e||o.y!==t)&&(o.x=e,o.y=t,o.width=i,o.height=n,this.gl.viewport(e,t,i,n))},Object.defineProperty(r.prototype,"size",{get:function(){return this.current?{x:0,y:0,width:this.current.width,height:this.current.height}:{x:0,y:0,width:this.renderer.width,height:this.renderer.height}},enumerable:!1,configurable:!0}),r.prototype.clear=function(e,t,i,n,o){o===void 0&&(o=hr.COLOR|hr.DEPTH);var a=this.gl;a.clearColor(e,t,i,n),a.clear(o)},r.prototype.initFramebuffer=function(e){var t=this.gl,i=new qc(t.createFramebuffer());return i.multisample=this.detectSamples(e.multisample),e.glFramebuffers[this.CONTEXT_UID]=i,this.managedFramebuffers.push(e),e.disposeRunner.add(this),i},r.prototype.resizeFramebuffer=function(e){var t=this.gl,i=e.glFramebuffers[this.CONTEXT_UID];i.msaaBuffer&&(t.bindRenderbuffer(t.RENDERBUFFER,i.msaaBuffer),t.renderbufferStorageMultisample(t.RENDERBUFFER,i.multisample,t.RGBA8,e.width,e.height)),i.stencil&&(t.bindRenderbuffer(t.RENDERBUFFER,i.stencil),i.msaaBuffer?t.renderbufferStorageMultisample(t.RENDERBUFFER,i.multisample,t.DEPTH24_STENCIL8,e.width,e.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,e.width,e.height));var n=e.colorTextures,o=n.length;t.drawBuffers||(o=Math.min(o,1));for(var a=0;a<o;a++){var s=n[a],u=s.parentTextureArray||s;this.renderer.texture.bind(u,0)}e.depthTexture&&this.writeDepthTexture&&this.renderer.texture.bind(e.depthTexture,0)},r.prototype.updateFramebuffer=function(e,t){var i=this.gl,n=e.glFramebuffers[this.CONTEXT_UID],o=e.colorTextures,a=o.length;i.drawBuffers||(a=Math.min(a,1)),n.multisample>1&&this.canMultisampleFramebuffer(e)?(n.msaaBuffer=n.msaaBuffer||i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,n.msaaBuffer),i.renderbufferStorageMultisample(i.RENDERBUFFER,n.multisample,i.RGBA8,e.width,e.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,n.msaaBuffer)):n.msaaBuffer&&(i.deleteRenderbuffer(n.msaaBuffer),n.msaaBuffer=null,n.blitFramebuffer&&(n.blitFramebuffer.dispose(),n.blitFramebuffer=null));for(var s=[],u=0;u<a;u++){var h=o[u],l=h.parentTextureArray||h;this.renderer.texture.bind(l,0),!(u===0&&n.msaaBuffer)&&(i.framebufferTexture2D(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+u,h.target,l._glTextures[this.CONTEXT_UID].texture,t),s.push(i.COLOR_ATTACHMENT0+u))}if(s.length>1&&i.drawBuffers(s),e.depthTexture){var f=this.writeDepthTexture;if(f){var c=e.depthTexture;this.renderer.texture.bind(c,0),i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,c._glTextures[this.CONTEXT_UID].texture,t)}}(e.stencil||e.depth)&&!(e.depthTexture&&this.writeDepthTexture)?(n.stencil=n.stencil||i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,n.stencil),n.msaaBuffer?i.renderbufferStorageMultisample(i.RENDERBUFFER,n.multisample,i.DEPTH24_STENCIL8,e.width,e.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,e.width,e.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,n.stencil)):n.stencil&&(i.deleteRenderbuffer(n.stencil),n.stencil=null)},r.prototype.canMultisampleFramebuffer=function(e){return this.renderer.context.webGLVersion!==1&&e.colorTextures.length<=1&&!e.depthTexture},r.prototype.detectSamples=function(e){var t=this.msaaSamples,i=dt.NONE;if(e<=1||t===null)return i;for(var n=0;n<t.length;n++)if(t[n]<=e){i=t[n];break}return i===1&&(i=dt.NONE),i},r.prototype.blit=function(e,t,i){var n=this,o=n.current,a=n.renderer,s=n.gl,u=n.CONTEXT_UID;if(a.context.webGLVersion===2&&!!o){var h=o.glFramebuffers[u];if(!!h){if(!e){if(!h.msaaBuffer)return;var l=o.colorTextures[0];if(!l)return;h.blitFramebuffer||(h.blitFramebuffer=new Ri(o.width,o.height),h.blitFramebuffer.addColorTexture(0,l)),e=h.blitFramebuffer,e.colorTextures[0]!==l&&(e.colorTextures[0]=l,e.dirtyId++,e.dirtyFormat++),(e.width!==o.width||e.height!==o.height)&&(e.width=o.width,e.height=o.height,e.dirtyId++,e.dirtySize++)}t||(t=Kc,t.width=o.width,t.height=o.height),i||(i=t);var f=t.width===i.width&&t.height===i.height;this.bind(e),s.bindFramebuffer(s.READ_FRAMEBUFFER,h.framebuffer),s.blitFramebuffer(t.x,t.y,t.width,t.height,i.x,i.y,i.width,i.height,s.COLOR_BUFFER_BIT,f?s.NEAREST:s.LINEAR)}}},r.prototype.disposeFramebuffer=function(e,t){var i=e.glFramebuffers[this.CONTEXT_UID],n=this.gl;if(!!i){delete e.glFramebuffers[this.CONTEXT_UID];var o=this.managedFramebuffers.indexOf(e);o>=0&&this.managedFramebuffers.splice(o,1),e.disposeRunner.remove(this),t||(n.deleteFramebuffer(i.framebuffer),i.msaaBuffer&&n.deleteRenderbuffer(i.msaaBuffer),i.stencil&&n.deleteRenderbuffer(i.stencil)),i.blitFramebuffer&&i.blitFramebuffer.dispose()}},r.prototype.disposeAll=function(e){var t=this.managedFramebuffers;this.managedFramebuffers=[];for(var i=0;i<t.length;i++)this.disposeFramebuffer(t[i],e)},r.prototype.forceStencil=function(){var e=this.current;if(!!e){var t=e.glFramebuffers[this.CONTEXT_UID];if(!(!t||t.stencil)){e.stencil=!0;var i=e.width,n=e.height,o=this.gl,a=o.createRenderbuffer();o.bindRenderbuffer(o.RENDERBUFFER,a),t.msaaBuffer?o.renderbufferStorageMultisample(o.RENDERBUFFER,t.multisample,o.DEPTH24_STENCIL8,i,n):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,i,n),t.stencil=a,o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,a)}}},r.prototype.reset=function(){this.current=this.unknownFramebuffer,this.viewport=new W},r.prototype.destroy=function(){this.renderer=null},r}(),Oi={5126:4,5123:2,5121:1},Oa=function(){function r(e){this.renderer=e,this._activeGeometry=null,this._activeVao=null,this.hasVao=!0,this.hasInstance=!0,this.canUseUInt32ElementIndex=!1,this.managedGeometries={}}return r.prototype.contextChange=function(){this.disposeAll(!0);var e=this.gl=this.renderer.gl,t=this.renderer.context;if(this.CONTEXT_UID=this.renderer.CONTEXT_UID,t.webGLVersion!==2){var i=this.renderer.context.extensions.vertexArrayObject;O.PREFER_ENV===kt.WEBGL_LEGACY&&(i=null),i?(e.createVertexArray=function(){return i.createVertexArrayOES()},e.bindVertexArray=function(o){return i.bindVertexArrayOES(o)},e.deleteVertexArray=function(o){return i.deleteVertexArrayOES(o)}):(this.hasVao=!1,e.createVertexArray=function(){return null},e.bindVertexArray=function(){return null},e.deleteVertexArray=function(){return null})}if(t.webGLVersion!==2){var n=e.getExtension("ANGLE_instanced_arrays");n?(e.vertexAttribDivisor=function(o,a){return n.vertexAttribDivisorANGLE(o,a)},e.drawElementsInstanced=function(o,a,s,u,h){return n.drawElementsInstancedANGLE(o,a,s,u,h)},e.drawArraysInstanced=function(o,a,s,u){return n.drawArraysInstancedANGLE(o,a,s,u)}):this.hasInstance=!1}this.canUseUInt32ElementIndex=t.webGLVersion===2||!!t.extensions.uint32ElementIndex},r.prototype.bind=function(e,t){t=t||this.renderer.shader.shader;var i=this.gl,n=e.glVertexArrayObjects[this.CONTEXT_UID],o=!1;n||(this.managedGeometries[e.id]=e,e.disposeRunner.add(this),e.glVertexArrayObjects[this.CONTEXT_UID]=n={},o=!0);var a=n[t.program.id]||this.initGeometryVao(e,t,o);this._activeGeometry=e,this._activeVao!==a&&(this._activeVao=a,this.hasVao?i.bindVertexArray(a):this.activateVao(e,t.program)),this.updateBuffers()},r.prototype.reset=function(){this.unbind()},r.prototype.updateBuffers=function(){for(var e=this._activeGeometry,t=this.renderer.buffer,i=0;i<e.buffers.length;i++){var n=e.buffers[i];t.update(n)}},r.prototype.checkCompatibility=function(e,t){var i=e.attributes,n=t.attributeData;for(var o in n)if(!i[o])throw new Error('shader and geometry incompatible, geometry missing the "'+o+'" attribute')},r.prototype.getSignature=function(e,t){var i=e.attributes,n=t.attributeData,o=["g",e.id];for(var a in i)n[a]&&o.push(a);return o.join("-")},r.prototype.initGeometryVao=function(e,t,i){i===void 0&&(i=!0);var n=this.gl,o=this.CONTEXT_UID,a=this.renderer.buffer,s=t.program;s.glPrograms[o]||this.renderer.shader.generateProgram(t),this.checkCompatibility(e,s);var u=this.getSignature(e,s),h=e.glVertexArrayObjects[this.CONTEXT_UID],l=h[u];if(l)return h[s.id]=l,l;var f=e.buffers,c=e.attributes,d={},p={};for(var _ in f)d[_]=0,p[_]=0;for(var _ in c)!c[_].size&&s.attributeData[_]?c[_].size=s.attributeData[_].size:c[_].size||console.warn("PIXI Geometry attribute '"+_+"' size cannot be determined (likely the bound shader does not have the attribute)"),d[c[_].buffer]+=c[_].size*Oi[c[_].type];for(var _ in c){var v=c[_],g=v.size;v.stride===void 0&&(d[v.buffer]===g*Oi[v.type]?v.stride=0:v.stride=d[v.buffer]),v.start===void 0&&(v.start=p[v.buffer],p[v.buffer]+=g*Oi[v.type])}l=n.createVertexArray(),n.bindVertexArray(l);for(var y=0;y<f.length;y++){var x=f[y];a.bind(x),i&&x._glBuffers[o].refCount++}return this.activateVao(e,s),this._activeVao=l,h[s.id]=l,h[u]=l,l},r.prototype.disposeGeometry=function(e,t){var i;if(!!this.managedGeometries[e.id]){delete this.managedGeometries[e.id];var n=e.glVertexArrayObjects[this.CONTEXT_UID],o=this.gl,a=e.buffers,s=(i=this.renderer)===null||i===void 0?void 0:i.buffer;if(e.disposeRunner.remove(this),!!n){if(s)for(var u=0;u<a.length;u++){var h=a[u]._glBuffers[this.CONTEXT_UID];h&&(h.refCount--,h.refCount===0&&!t&&s.dispose(a[u],t))}if(!t){for(var l in n)if(l[0]==="g"){var f=n[l];this._activeVao===f&&this.unbind(),o.deleteVertexArray(f)}}delete e.glVertexArrayObjects[this.CONTEXT_UID]}}},r.prototype.disposeAll=function(e){for(var t=Object.keys(this.managedGeometries),i=0;i<t.length;i++)this.disposeGeometry(this.managedGeometries[t[i]],e)},r.prototype.activateVao=function(e,t){var i=this.gl,n=this.CONTEXT_UID,o=this.renderer.buffer,a=e.buffers,s=e.attributes;e.indexBuffer&&o.bind(e.indexBuffer);var u=null;for(var h in s){var l=s[h],f=a[l.buffer],c=f._glBuffers[n];if(t.attributeData[h]){u!==c&&(o.bind(f),u=c);var d=t.attributeData[h].location;if(i.enableVertexAttribArray(d),i.vertexAttribPointer(d,l.size,l.type||i.FLOAT,l.normalized,l.stride,l.start),l.instance)if(this.hasInstance)i.vertexAttribDivisor(d,1);else throw new Error("geometry error, GPU Instancing is not supported on this device")}}},r.prototype.draw=function(e,t,i,n){var o=this.gl,a=this._activeGeometry;if(a.indexBuffer){var s=a.indexBuffer.data.BYTES_PER_ELEMENT,u=s===2?o.UNSIGNED_SHORT:o.UNSIGNED_INT;s===2||s===4&&this.canUseUInt32ElementIndex?a.instanced?o.drawElementsInstanced(e,t||a.indexBuffer.data.length,u,(i||0)*s,n||1):o.drawElements(e,t||a.indexBuffer.data.length,u,(i||0)*s):console.warn("unsupported index buffer type: uint32")}else a.instanced?o.drawArraysInstanced(e,i,t||a.getSize(),n||1):o.drawArrays(e,i,t||a.getSize());return this},r.prototype.unbind=function(){this.gl.bindVertexArray(null),this._activeVao=null,this._activeGeometry=null},r.prototype.destroy=function(){this.renderer=null},r}(),Zc=function(){function r(e){e===void 0&&(e=null),this.type=Tt.NONE,this.autoDetect=!0,this.maskObject=e||null,this.pooled=!1,this.isMaskData=!0,this.resolution=null,this.multisample=O.FILTER_MULTISAMPLE,this._stencilCounter=0,this._scissorCounter=0,this._scissorRect=null,this._target=null}return r.prototype.reset=function(){this.pooled&&(this.maskObject=null,this.type=Tt.NONE,this.autoDetect=!0),this._target=null},r.prototype.copyCountersOrReset=function(e){e?(this._stencilCounter=e._stencilCounter,this._scissorCounter=e._scissorCounter,this._scissorRect=e._scissorRect):(this._stencilCounter=0,this._scissorCounter=0,this._scissorRect=null)},r}();function Na(r,e,t){var i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}function Fa(r,e){var t=r.getShaderSource(e).split(`
`).map(function(h,l){return l+": "+h}),i=r.getShaderInfoLog(e),n=i.split(`
`),o={},a=n.map(function(h){return parseFloat(h.replace(/^ERROR\: 0\:([\d]+)\:.*$/,"$1"))}).filter(function(h){return h&&!o[h]?(o[h]=!0,!0):!1}),s=[""];a.forEach(function(h){t[h-1]="%c"+t[h-1]+"%c",s.push("background: #FF0000; color:#FFFFFF; font-size: 10px","font-size: 10px")});var u=t.join(`
`);s[0]=u,console.error(i),console.groupCollapsed("click to view full shader code"),console.warn.apply(console,s),console.groupEnd()}function Jc(r,e,t,i){r.getProgramParameter(e,r.LINK_STATUS)||(r.getShaderParameter(t,r.COMPILE_STATUS)||Fa(r,t),r.getShaderParameter(i,r.COMPILE_STATUS)||Fa(r,i),console.error("PixiJS Error: Could not initialize shader."),r.getProgramInfoLog(e)!==""&&console.warn("PixiJS Warning: gl.getProgramInfoLog()",r.getProgramInfoLog(e)))}function Ni(r){for(var e=new Array(r),t=0;t<e.length;t++)e[t]=!1;return e}function Ua(r,e){switch(r){case"float":return 0;case"vec2":return new Float32Array(2*e);case"vec3":return new Float32Array(3*e);case"vec4":return new Float32Array(4*e);case"int":case"uint":case"sampler2D":case"sampler2DArray":return 0;case"ivec2":return new Int32Array(2*e);case"ivec3":return new Int32Array(3*e);case"ivec4":return new Int32Array(4*e);case"uvec2":return new Uint32Array(2*e);case"uvec3":return new Uint32Array(3*e);case"uvec4":return new Uint32Array(4*e);case"bool":return!1;case"bvec2":return Ni(2*e);case"bvec3":return Ni(3*e);case"bvec4":return Ni(4*e);case"mat2":return new Float32Array([1,0,0,1]);case"mat3":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return null}var La={},Xe=La;function Qc(){if(Xe===La||Xe&&Xe.isContextLost()){var r=document.createElement("canvas"),e=void 0;O.PREFER_ENV>=kt.WEBGL2&&(e=r.getContext("webgl2",{})),e||(e=r.getContext("webgl",{})||r.getContext("experimental-webgl",{}),e?e.getExtension("WEBGL_draw_buffers"):e=null),Xe=e}return Xe}var wr;function td(){if(!wr){wr=Lt.MEDIUM;var r=Qc();if(r&&r.getShaderPrecisionFormat){var e=r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT);wr=e.precision?Lt.HIGH:Lt.MEDIUM}}return wr}function Ma(r,e,t){if(r.substring(0,9)!=="precision"){var i=e;return e===Lt.HIGH&&t!==Lt.HIGH&&(i=Lt.MEDIUM),"precision "+i+` float;
`+r}else if(t!==Lt.HIGH&&r.substring(0,15)==="precision highp")return r.replace("precision highp","precision mediump");return r}var ed={float:1,vec2:2,vec3:3,vec4:4,int:1,ivec2:2,ivec3:3,ivec4:4,uint:1,uvec2:2,uvec3:3,uvec4:4,bool:1,bvec2:2,bvec3:3,bvec4:4,mat2:4,mat3:9,mat4:16,sampler2D:1};function Ba(r){return ed[r]}var Pr=null,Da={FLOAT:"float",FLOAT_VEC2:"vec2",FLOAT_VEC3:"vec3",FLOAT_VEC4:"vec4",INT:"int",INT_VEC2:"ivec2",INT_VEC3:"ivec3",INT_VEC4:"ivec4",UNSIGNED_INT:"uint",UNSIGNED_INT_VEC2:"uvec2",UNSIGNED_INT_VEC3:"uvec3",UNSIGNED_INT_VEC4:"uvec4",BOOL:"bool",BOOL_VEC2:"bvec2",BOOL_VEC3:"bvec3",BOOL_VEC4:"bvec4",FLOAT_MAT2:"mat2",FLOAT_MAT3:"mat3",FLOAT_MAT4:"mat4",SAMPLER_2D:"sampler2D",INT_SAMPLER_2D:"sampler2D",UNSIGNED_INT_SAMPLER_2D:"sampler2D",SAMPLER_CUBE:"samplerCube",INT_SAMPLER_CUBE:"samplerCube",UNSIGNED_INT_SAMPLER_CUBE:"samplerCube",SAMPLER_2D_ARRAY:"sampler2DArray",INT_SAMPLER_2D_ARRAY:"sampler2DArray",UNSIGNED_INT_SAMPLER_2D_ARRAY:"sampler2DArray"};function Ga(r,e){if(!Pr){var t=Object.keys(Da);Pr={};for(var i=0;i<t.length;++i){var n=t[i];Pr[r[n]]=Da[n]}}return Pr[e]}var Ce=[{test:function(r){return r.type==="float"&&r.size===1},code:function(r){return`
            if(uv["`+r+'"] !== ud["'+r+`"].value)
            {
                ud["`+r+'"].value = uv["'+r+`"]
                gl.uniform1f(ud["`+r+'"].location, uv["'+r+`"])
            }
            `}},{test:function(r){return(r.type==="sampler2D"||r.type==="samplerCube"||r.type==="sampler2DArray")&&r.size===1&&!r.isArray},code:function(r){return`t = syncData.textureCount++;

            renderer.texture.bind(uv["`+r+`"], t);

            if(ud["`+r+`"].value !== t)
            {
                ud["`+r+`"].value = t;
                gl.uniform1i(ud["`+r+`"].location, t);
; // eslint-disable-line max-len
            }`}},{test:function(r,e){return r.type==="mat3"&&r.size===1&&e.a!==void 0},code:function(r){return`
            gl.uniformMatrix3fv(ud["`+r+'"].location, false, uv["'+r+`"].toArray(true));
            `},codeUbo:function(r){return`
                var `+r+"_matrix = uv."+r+`.toArray(true);

                data[offset] = `+r+`_matrix[0];
                data[offset+1] = `+r+`_matrix[1];
                data[offset+2] = `+r+`_matrix[2];
        
                data[offset + 4] = `+r+`_matrix[3];
                data[offset + 5] = `+r+`_matrix[4];
                data[offset + 6] = `+r+`_matrix[5];
        
                data[offset + 8] = `+r+`_matrix[6];
                data[offset + 9] = `+r+`_matrix[7];
                data[offset + 10] = `+r+`_matrix[8];
            `}},{test:function(r,e){return r.type==="vec2"&&r.size===1&&e.x!==void 0},code:function(r){return`
                cv = ud["`+r+`"].value;
                v = uv["`+r+`"];

                if(cv[0] !== v.x || cv[1] !== v.y)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    gl.uniform2f(ud["`+r+`"].location, v.x, v.y);
                }`},codeUbo:function(r){return`
                v = uv.`+r+`;

                data[offset] = v.x;
                data[offset+1] = v.y;
            `}},{test:function(r){return r.type==="vec2"&&r.size===1},code:function(r){return`
                cv = ud["`+r+`"].value;
                v = uv["`+r+`"];

                if(cv[0] !== v[0] || cv[1] !== v[1])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    gl.uniform2f(ud["`+r+`"].location, v[0], v[1]);
                }
            `}},{test:function(r,e){return r.type==="vec4"&&r.size===1&&e.width!==void 0},code:function(r){return`
                cv = ud["`+r+`"].value;
                v = uv["`+r+`"];

                if(cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    cv[2] = v.width;
                    cv[3] = v.height;
                    gl.uniform4f(ud["`+r+`"].location, v.x, v.y, v.width, v.height)
                }`},codeUbo:function(r){return`
                    v = uv.`+r+`;

                    data[offset] = v.x;
                    data[offset+1] = v.y;
                    data[offset+2] = v.width;
                    data[offset+3] = v.height;
                `}},{test:function(r){return r.type==="vec4"&&r.size===1},code:function(r){return`
                cv = ud["`+r+`"].value;
                v = uv["`+r+`"];

                if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    cv[2] = v[2];
                    cv[3] = v[3];

                    gl.uniform4f(ud["`+r+`"].location, v[0], v[1], v[2], v[3])
                }`}}],rd={float:`
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
    }`,bvec2:"gl.uniform2i(location, v[0], v[1])",bvec3:"gl.uniform3i(location, v[0], v[1], v[2])",bvec4:"gl.uniform4i(location, v[0], v[1], v[2], v[3])",mat2:"gl.uniformMatrix2fv(location, false, v)",mat3:"gl.uniformMatrix3fv(location, false, v)",mat4:"gl.uniformMatrix4fv(location, false, v)",sampler2D:"gl.uniform1i(location, v)",samplerCube:"gl.uniform1i(location, v)",sampler2DArray:"gl.uniform1i(location, v)"},id={float:"gl.uniform1fv(location, v)",vec2:"gl.uniform2fv(location, v)",vec3:"gl.uniform3fv(location, v)",vec4:"gl.uniform4fv(location, v)",mat4:"gl.uniformMatrix4fv(location, false, v)",mat3:"gl.uniformMatrix3fv(location, false, v)",mat2:"gl.uniformMatrix2fv(location, false, v)",int:"gl.uniform1iv(location, v)",ivec2:"gl.uniform2iv(location, v)",ivec3:"gl.uniform3iv(location, v)",ivec4:"gl.uniform4iv(location, v)",uint:"gl.uniform1uiv(location, v)",uvec2:"gl.uniform2uiv(location, v)",uvec3:"gl.uniform3uiv(location, v)",uvec4:"gl.uniform4uiv(location, v)",bool:"gl.uniform1iv(location, v)",bvec2:"gl.uniform2iv(location, v)",bvec3:"gl.uniform3iv(location, v)",bvec4:"gl.uniform4iv(location, v)",sampler2D:"gl.uniform1iv(location, v)",samplerCube:"gl.uniform1iv(location, v)",sampler2DArray:"gl.uniform1iv(location, v)"};function nd(r,e){var t=[`
        var v = null;
        var cv = null
        var t = 0;
        var gl = renderer.gl
    `];for(var i in r.uniforms){var n=e[i];if(!n){r.uniforms[i].group&&(r.uniforms[i].ubo?t.push(`
                        renderer.shader.syncUniformBufferGroup(uv.`+i+", '"+i+`');
                    `):t.push(`
                        renderer.shader.syncUniformGroup(uv.`+i+`, syncData);
                    `));continue}for(var o=r.uniforms[i],a=!1,s=0;s<Ce.length;s++)if(Ce[s].test(n,o)){t.push(Ce[s].code(i,o)),a=!0;break}if(!a){var u=n.size===1?rd:id,h=u[n.type].replace("location",'ud["'+i+'"].location');t.push(`
            cv = ud["`+i+`"].value;
            v = uv["`+i+`"];
            `+h+";")}}return new Function("ud","uv","renderer","syncData",t.join(`
`))}var od=["precision mediump float;","void main(void){","float test = 0.1;","%forloop%","gl_FragColor = vec4(0.0);","}"].join(`
`);function ad(r){for(var e="",t=0;t<r;++t)t>0&&(e+=`
else `),t<r-1&&(e+="if(test == "+t+".0){}");return e}function sd(r,e){if(r===0)throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");for(var t=e.createShader(e.FRAGMENT_SHADER);;){var i=od.replace(/%forloop%/gi,ad(r));if(e.shaderSource(t,i),e.compileShader(t),!e.getShaderParameter(t,e.COMPILE_STATUS))r=r/2|0;else break}return r}var He;function ud(){if(typeof He=="boolean")return He;try{var r=new Function("param1","param2","param3","return param1[param2] === param3;");He=r({a:"b"},"a","b")===!0}catch{He=!1}return He}var hd=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor *= texture2D(uSampler, vTextureCoord);
}`,ld=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void){
   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
   vTextureCoord = aTextureCoord;
}
`,fd=0,Ir={},Sr=function(){function r(e,t,i){i===void 0&&(i="pixi-shader"),this.id=fd++,this.vertexSrc=e||r.defaultVertexSrc,this.fragmentSrc=t||r.defaultFragmentSrc,this.vertexSrc=this.vertexSrc.trim(),this.fragmentSrc=this.fragmentSrc.trim(),this.vertexSrc.substring(0,8)!=="#version"&&(i=i.replace(/\s+/g,"-"),Ir[i]?(Ir[i]++,i+="-"+Ir[i]):Ir[i]=1,this.vertexSrc="#define SHADER_NAME "+i+`
`+this.vertexSrc,this.fragmentSrc="#define SHADER_NAME "+i+`
`+this.fragmentSrc,this.vertexSrc=Ma(this.vertexSrc,O.PRECISION_VERTEX,Lt.HIGH),this.fragmentSrc=Ma(this.fragmentSrc,O.PRECISION_FRAGMENT,td())),this.glPrograms={},this.syncUniforms=null}return Object.defineProperty(r,"defaultVertexSrc",{get:function(){return ld},enumerable:!1,configurable:!0}),Object.defineProperty(r,"defaultFragmentSrc",{get:function(){return hd},enumerable:!1,configurable:!0}),r.from=function(e,t,i){var n=e+t,o=aa[n];return o||(aa[n]=o=new r(e,t,i)),o},r}(),he=function(){function r(e,t){this.uniformBindCount=0,this.program=e,t?t instanceof ue?this.uniformGroup=t:this.uniformGroup=new ue(t):this.uniformGroup=new ue({})}return r.prototype.checkUniformExists=function(e,t){if(t.uniforms[e])return!0;for(var i in t.uniforms){var n=t.uniforms[i];if(n.group&&this.checkUniformExists(e,n))return!0}return!1},r.prototype.destroy=function(){this.uniformGroup=null},Object.defineProperty(r.prototype,"uniforms",{get:function(){return this.uniformGroup.uniforms},enumerable:!1,configurable:!0}),r.from=function(e,t,i){var n=Sr.from(e,t);return new r(n,i)},r}(),Fi=0,Ui=1,Li=2,Mi=3,Bi=4,Di=5,le=function(){function r(){this.data=0,this.blendMode=F.NORMAL,this.polygonOffset=0,this.blend=!0,this.depthMask=!0}return Object.defineProperty(r.prototype,"blend",{get:function(){return!!(this.data&1<<Fi)},set:function(e){!!(this.data&1<<Fi)!==e&&(this.data^=1<<Fi)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"offsets",{get:function(){return!!(this.data&1<<Ui)},set:function(e){!!(this.data&1<<Ui)!==e&&(this.data^=1<<Ui)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"culling",{get:function(){return!!(this.data&1<<Li)},set:function(e){!!(this.data&1<<Li)!==e&&(this.data^=1<<Li)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"depthTest",{get:function(){return!!(this.data&1<<Mi)},set:function(e){!!(this.data&1<<Mi)!==e&&(this.data^=1<<Mi)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"depthMask",{get:function(){return!!(this.data&1<<Di)},set:function(e){!!(this.data&1<<Di)!==e&&(this.data^=1<<Di)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"clockwiseFrontFace",{get:function(){return!!(this.data&1<<Bi)},set:function(e){!!(this.data&1<<Bi)!==e&&(this.data^=1<<Bi)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"blendMode",{get:function(){return this._blendMode},set:function(e){this.blend=e!==F.NONE,this._blendMode=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"polygonOffset",{get:function(){return this._polygonOffset},set:function(e){this.offsets=!!e,this._polygonOffset=e},enumerable:!1,configurable:!0}),r.prototype.toString=function(){return"[@pixi/core:State "+("blendMode="+this.blendMode+" ")+("clockwiseFrontFace="+this.clockwiseFrontFace+" ")+("culling="+this.culling+" ")+("depthMask="+this.depthMask+" ")+("polygonOffset="+this.polygonOffset)+"]"},r.for2d=function(){var e=new r;return e.depthTest=!1,e.blend=!0,e},r}(),cd=`attribute vec2 aVertexPosition;

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
`,dd=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor = texture2D(uSampler, vTextureCoord);
}
`,k=function(r){Q(e,r);function e(t,i,n){var o=this,a=Sr.from(t||e.defaultVertexSrc,i||e.defaultFragmentSrc);return o=r.call(this,a,n)||this,o.padding=0,o.resolution=O.FILTER_RESOLUTION,o.multisample=O.FILTER_MULTISAMPLE,o.enabled=!0,o.autoFit=!0,o.state=new le,o}return e.prototype.apply=function(t,i,n,o,a){t.applyFilter(this,i,n,o)},Object.defineProperty(e.prototype,"blendMode",{get:function(){return this.state.blendMode},set:function(t){this.state.blendMode=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"resolution",{get:function(){return this._resolution},set:function(t){this._resolution=t},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultVertexSrc",{get:function(){return cd},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultFragmentSrc",{get:function(){return dd},enumerable:!1,configurable:!0}),e}(he),pd=`attribute vec2 aVertexPosition;
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
`,vd=`varying vec2 vMaskCoord;
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
`,ka=new pt,Gi=function(){function r(e,t){this._texture=e,this.mapCoord=new pt,this.uClampFrame=new Float32Array(4),this.uClampOffset=new Float32Array(2),this._textureID=-1,this._updateID=0,this.clampOffset=0,this.clampMargin=typeof t=="undefined"?.5:t,this.isSimple=!1}return Object.defineProperty(r.prototype,"texture",{get:function(){return this._texture},set:function(e){this._texture=e,this._textureID=-1},enumerable:!1,configurable:!0}),r.prototype.multiplyUvs=function(e,t){t===void 0&&(t=e);for(var i=this.mapCoord,n=0;n<e.length;n+=2){var o=e[n],a=e[n+1];t[n]=o*i.a+a*i.c+i.tx,t[n+1]=o*i.b+a*i.d+i.ty}return t},r.prototype.update=function(e){var t=this._texture;if(!t||!t.valid||!e&&this._textureID===t._updateID)return!1;this._textureID=t._updateID,this._updateID++;var i=t._uvs;this.mapCoord.set(i.x1-i.x0,i.y1-i.y0,i.x3-i.x0,i.y3-i.y0,i.x0,i.y0);var n=t.orig,o=t.trim;o&&(ka.set(n.width/o.width,0,0,n.height/o.height,-o.x/o.width,-o.y/o.height),this.mapCoord.append(ka));var a=t.baseTexture,s=this.uClampFrame,u=this.clampMargin/a.resolution,h=this.clampOffset;return s[0]=(t._frame.x+u+h)/a.width,s[1]=(t._frame.y+u+h)/a.height,s[2]=(t._frame.x+t._frame.width-u+h)/a.width,s[3]=(t._frame.y+t._frame.height-u+h)/a.height,this.uClampOffset[0]=h/a.realWidth,this.uClampOffset[1]=h/a.realHeight,this.isSimple=t._frame.width===a.width&&t._frame.height===a.height&&t.rotate===0,!0},r}(),_d=function(r){Q(e,r);function e(t){var i=this,n=new pt;return i=r.call(this,pd,vd)||this,t.renderable=!1,i.maskSprite=t,i.maskMatrix=n,i}return e.prototype.apply=function(t,i,n,o){var a=this.maskSprite,s=a._texture;!s.valid||(s.uvMatrix||(s.uvMatrix=new Gi(s,0)),s.uvMatrix.update(),this.uniforms.npmAlpha=s.baseTexture.alphaMode?0:1,this.uniforms.mask=s,this.uniforms.otherMatrix=t.calculateSpriteMatrix(this.maskMatrix,a).prepend(s.uvMatrix.mapCoord),this.uniforms.alpha=a.worldAlpha,this.uniforms.maskClamp=s.uvMatrix.uClampFrame,t.applyFilter(this,i,n,o))},e}(k),ja=function(){function r(e){this.renderer=e,this.enableScissor=!0,this.alphaMaskPool=[],this.maskDataPool=[],this.maskStack=[],this.alphaMaskIndex=0}return r.prototype.setMaskStack=function(e){this.maskStack=e,this.renderer.scissor.setMaskStack(e),this.renderer.stencil.setMaskStack(e)},r.prototype.push=function(e,t){var i=t;if(!i.isMaskData){var n=this.maskDataPool.pop()||new Zc;n.pooled=!0,n.maskObject=t,i=n}switch(i.autoDetect&&this.detect(i),i.copyCountersOrReset(this.maskStack[this.maskStack.length-1]),i._target=e,i.type){case Tt.SCISSOR:this.maskStack.push(i),this.renderer.scissor.push(i);break;case Tt.STENCIL:this.maskStack.push(i),this.renderer.stencil.push(i);break;case Tt.SPRITE:i.copyCountersOrReset(null),this.pushSpriteMask(i),this.maskStack.push(i);break}},r.prototype.pop=function(e){var t=this.maskStack.pop();if(!(!t||t._target!==e)){switch(t.type){case Tt.SCISSOR:this.renderer.scissor.pop();break;case Tt.STENCIL:this.renderer.stencil.pop(t.maskObject);break;case Tt.SPRITE:this.popSpriteMask();break}t.reset(),t.pooled&&this.maskDataPool.push(t)}},r.prototype.detect=function(e){var t=e.maskObject;if(t.isSprite){e.type=Tt.SPRITE;return}if(e.type=Tt.STENCIL,this.enableScissor&&t.isFastRect&&t.isFastRect()){var i=t.worldTransform,n=Math.atan2(i.b,i.a),o=Math.atan2(i.d,i.c);n=Math.round(n*(180/Math.PI)*100),o=Math.round(o*(180/Math.PI)*100)-n,n=(n%9e3+9e3)%9e3,o=(o%18e3+18e3)%18e3,n===0&&o===9e3&&(e.type=Tt.SCISSOR)}},r.prototype.pushSpriteMask=function(e){var t,i,n=e.maskObject,o=e._target,a=this.alphaMaskPool[this.alphaMaskIndex];a||(a=this.alphaMaskPool[this.alphaMaskIndex]=[new _d(n)]);var s=this.renderer,u=s.renderTexture,h,l;if(u.current){var f=u.current;h=e.resolution||f.resolution,l=(t=e.multisample)!==null&&t!==void 0?t:f.multisample}else h=e.resolution||s.resolution,l=(i=e.multisample)!==null&&i!==void 0?i:s.multisample;a[0].resolution=h,a[0].multisample=l,a[0].maskSprite=n;var c=o.filterArea;o.filterArea=n.getBounds(!0),s.filter.push(o,a),o.filterArea=c,this.alphaMaskIndex++},r.prototype.popSpriteMask=function(){this.renderer.filter.pop(),this.alphaMaskIndex--},r.prototype.destroy=function(){this.renderer=null},r}(),Xa=function(){function r(e){this.renderer=e,this.maskStack=[],this.glConst=0}return r.prototype.getStackLength=function(){return this.maskStack.length},r.prototype.setMaskStack=function(e){var t=this.renderer.gl,i=this.getStackLength();this.maskStack=e;var n=this.getStackLength();n!==i&&(n===0?t.disable(this.glConst):(t.enable(this.glConst),this._useCurrent()))},r.prototype._useCurrent=function(){},r.prototype.destroy=function(){this.renderer=null,this.maskStack=null},r}(),Ha=function(r){Q(e,r);function e(t){var i=r.call(this,t)||this;return i.glConst=WebGLRenderingContext.SCISSOR_TEST,i}return e.prototype.getStackLength=function(){var t=this.maskStack[this.maskStack.length-1];return t?t._scissorCounter:0},e.prototype.push=function(t){var i=t.maskObject;i.renderable=!0;var n=t._scissorRect,o=i.getBounds(!0),a=this.renderer.gl;i.renderable=!1,n?o.fit(n):a.enable(a.SCISSOR_TEST),t._scissorCounter++,t._scissorRect=o,this._useCurrent()},e.prototype.pop=function(){var t=this.renderer.gl;this.getStackLength()>0?this._useCurrent():t.disable(t.SCISSOR_TEST)},e.prototype._useCurrent=function(){var t=this.maskStack[this.maskStack.length-1]._scissorRect,i=this.renderer.renderTexture.current,n=this.renderer.projection,o=n.transform,a=n.sourceFrame,s=n.destinationFrame,u=i?i.resolution:this.renderer.resolution,h=s.width/a.width,l=s.height/a.height,f=((t.x-a.x)*h+s.x)*u,c=((t.y-a.y)*l+s.y)*u,d=t.width*h*u,p=t.height*l*u;o&&(f+=o.tx*u,c+=o.ty*u),i||(c=this.renderer.height-p-c),f=Math.round(f),c=Math.round(c),d=Math.round(d),p=Math.round(p),this.renderer.gl.scissor(f,c,d,p)},e}(Xa),za=function(r){Q(e,r);function e(t){var i=r.call(this,t)||this;return i.glConst=WebGLRenderingContext.STENCIL_TEST,i}return e.prototype.getStackLength=function(){var t=this.maskStack[this.maskStack.length-1];return t?t._stencilCounter:0},e.prototype.push=function(t){var i=t.maskObject,n=this.renderer.gl,o=t._stencilCounter;o===0&&(this.renderer.framebuffer.forceStencil(),n.enable(n.STENCIL_TEST)),t._stencilCounter++,n.colorMask(!1,!1,!1,!1),n.stencilFunc(n.EQUAL,o,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.INCR),i.renderable=!0,i.render(this.renderer),this.renderer.batch.flush(),i.renderable=!1,this._useCurrent()},e.prototype.pop=function(t){var i=this.renderer.gl;this.getStackLength()===0?(i.disable(i.STENCIL_TEST),i.clearStencil(0),i.clear(i.STENCIL_BUFFER_BIT)):(i.colorMask(!1,!1,!1,!1),i.stencilOp(i.KEEP,i.KEEP,i.DECR),t.renderable=!0,t.render(this.renderer),this.renderer.batch.flush(),t.renderable=!1,this._useCurrent())},e.prototype._useCurrent=function(){var t=this.renderer.gl;t.colorMask(!0,!0,!0,!0),t.stencilFunc(t.EQUAL,this.getStackLength(),4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP)},e}(Xa),Va=function(){function r(e){this.renderer=e,this.destinationFrame=null,this.sourceFrame=null,this.defaultFrame=null,this.projectionMatrix=new pt,this.transform=null}return r.prototype.update=function(e,t,i,n){this.destinationFrame=e||this.destinationFrame||this.defaultFrame,this.sourceFrame=t||this.sourceFrame||e,this.calculateProjection(this.destinationFrame,this.sourceFrame,i,n),this.transform&&this.projectionMatrix.append(this.transform);var o=this.renderer;o.globalUniforms.uniforms.projectionMatrix=this.projectionMatrix,o.globalUniforms.update(),o.shader.shader&&o.shader.syncUniformGroup(o.shader.shader.uniforms.globals)},r.prototype.calculateProjection=function(e,t,i,n){var o=this.projectionMatrix,a=n?-1:1;o.identity(),o.a=1/t.width*2,o.d=a*(1/t.height*2),o.tx=-1-t.x*o.a,o.ty=-a-t.y*o.d},r.prototype.setTransform=function(e){},r.prototype.destroy=function(){this.renderer=null},r}(),fe=new W,ze=new W,$a=function(){function r(e){this.renderer=e,this.clearColor=e._backgroundColorRgba,this.defaultMaskStack=[],this.current=null,this.sourceFrame=new W,this.destinationFrame=new W,this.viewportFrame=new W}return r.prototype.bind=function(e,t,i){e===void 0&&(e=null);var n=this.renderer;this.current=e;var o,a,s;e?(o=e.baseTexture,s=o.resolution,t||(fe.width=e.frame.width,fe.height=e.frame.height,t=fe),i||(ze.x=e.frame.x,ze.y=e.frame.y,ze.width=t.width,ze.height=t.height,i=ze),a=o.framebuffer):(s=n.resolution,t||(fe.width=n.screen.width,fe.height=n.screen.height,t=fe),i||(i=fe,i.width=t.width,i.height=t.height));var u=this.viewportFrame;u.x=i.x*s,u.y=i.y*s,u.width=i.width*s,u.height=i.height*s,e||(u.y=n.view.height-(u.y+u.height)),u.ceil(),this.renderer.framebuffer.bind(a,u),this.renderer.projection.update(i,t,s,!a),e?this.renderer.mask.setMaskStack(o.maskStack):this.renderer.mask.setMaskStack(this.defaultMaskStack),this.sourceFrame.copyFrom(t),this.destinationFrame.copyFrom(i)},r.prototype.clear=function(e,t){this.current?e=e||this.current.baseTexture.clearColor:e=e||this.clearColor;var i=this.destinationFrame,n=this.current?this.current.baseTexture:this.renderer.screen,o=i.width!==n.width||i.height!==n.height;if(o){var a=this.viewportFrame,s=a.x,u=a.y,h=a.width,l=a.height;s=Math.round(s),u=Math.round(u),h=Math.round(h),l=Math.round(l),this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST),this.renderer.gl.scissor(s,u,h,l)}this.renderer.framebuffer.clear(e[0],e[1],e[2],e[3],t),o&&this.renderer.scissor.pop()},r.prototype.resize=function(){this.bind(null)},r.prototype.reset=function(){this.bind(null)},r.prototype.destroy=function(){this.renderer=null},r}();function md(r,e,t,i,n){t.buffer.update(n)}var gd={float:`
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
    `},Wa={float:4,vec2:8,vec3:12,vec4:16,int:4,ivec2:8,ivec3:12,ivec4:16,uint:4,uvec2:8,uvec3:12,uvec4:16,bool:4,bvec2:8,bvec3:12,bvec4:16,mat2:16*2,mat3:16*3,mat4:16*4};function yd(r){for(var e=r.map(function(u){return{data:u,offset:0,dataLen:0,dirty:0}}),t=0,i=0,n=0,o=0;o<e.length;o++){var a=e[o];if(t=Wa[a.data.type],a.data.size>1&&(t=Math.max(t,16)*a.data.size),a.dataLen=t,i%t!=0&&i<16){var s=i%t%16;i+=s,n+=s}i+t>16?(n=Math.ceil(n/16)*16,a.offset=n,n+=t,i=t):(a.offset=n,i+=t,n+=t)}return n=Math.ceil(n/16)*16,{uboElements:e,size:n}}function xd(r,e){var t=[];for(var i in r)e[i]&&t.push(e[i]);return t.sort(function(n,o){return n.index-o.index}),t}function bd(r,e){if(!r.autoManage)return{size:0,syncFunc:md};for(var t=xd(r.uniforms,e),i=yd(t),n=i.uboElements,o=i.size,a=[`
    var v = null;
    var v2 = null;
    var cv = null;
    var t = 0;
    var gl = renderer.gl
    var index = 0;
    var data = buffer.data;
    `],s=0;s<n.length;s++){for(var u=n[s],h=r.uniforms[u.data.name],l=u.data.name,f=!1,c=0;c<Ce.length;c++){var d=Ce[c];if(d.codeUbo&&d.test(u.data,h)){a.push("offset = "+u.offset/4+";",Ce[c].codeUbo(u.data.name,h)),f=!0;break}}if(!f)if(u.data.size>1){var p=Ba(u.data.type),_=Math.max(Wa[u.data.type]/16,1),v=p/_,g=(4-v%4)%4;a.push(`
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
                    offset += `+g+`;
                }

                `)}else{var y=gd[u.data.type];a.push(`
                cv = ud.`+l+`.value;
                v = uv.`+l+`;
                offset = `+u.offset/4+`;
                `+y+`;
                `)}}return a.push(`
       renderer.buffer.update(buffer);
    `),{size:o,syncFunc:new Function("ud","uv","renderer","syncData","buffer",a.join(`
`))}}var Td=function(){function r(e,t){this.program=e,this.uniformData=t,this.uniformGroups={},this.uniformDirtyGroups={},this.uniformBufferBindings={}}return r.prototype.destroy=function(){this.uniformData=null,this.uniformGroups=null,this.uniformDirtyGroups=null,this.uniformBufferBindings=null,this.program=null},r}();function Ed(r,e){for(var t={},i=e.getProgramParameter(r,e.ACTIVE_ATTRIBUTES),n=0;n<i;n++){var o=e.getActiveAttrib(r,n);if(o.name.indexOf("gl_")!==0){var a=Ga(e,o.type),s={type:a,name:o.name,size:Ba(a),location:n};t[o.name]=s}}return t}function Cd(r,e){for(var t={},i=e.getProgramParameter(r,e.ACTIVE_UNIFORMS),n=0;n<i;n++){var o=e.getActiveUniform(r,n),a=o.name.replace(/\[.*?\]$/,""),s=!!o.name.match(/\[.*?\]$/),u=Ga(e,o.type);t[a]={name:a,index:n,type:u,size:o.size,isArray:s,value:Ua(u,o.size)}}return t}function wd(r,e){var t=Na(r,r.VERTEX_SHADER,e.vertexSrc),i=Na(r,r.FRAGMENT_SHADER,e.fragmentSrc),n=r.createProgram();r.attachShader(n,t),r.attachShader(n,i),r.linkProgram(n),r.getProgramParameter(n,r.LINK_STATUS)||Jc(r,n,t,i),e.attributeData=Ed(n,r),e.uniformData=Cd(n,r);var o=Object.keys(e.attributeData);o.sort(function(l,f){return l>f?1:-1});for(var a=0;a<o.length;a++)e.attributeData[o[a]].location=a,r.bindAttribLocation(n,a,o[a]);r.linkProgram(n),r.deleteShader(t),r.deleteShader(i);var s={};for(var a in e.uniformData){var u=e.uniformData[a];s[a]={location:r.getUniformLocation(n,a),value:Ua(u.type,u.size)}}var h=new Td(n,s);return h}var Pd=0,Rr={textureCount:0,uboCount:0},Ya=function(){function r(e){this.destroyed=!1,this.renderer=e,this.systemCheck(),this.gl=null,this.shader=null,this.program=null,this.cache={},this._uboCache={},this.id=Pd++}return r.prototype.systemCheck=function(){if(!ud())throw new Error("Current environment does not allow unsafe-eval, please use @pixi/unsafe-eval module to enable support.")},r.prototype.contextChange=function(e){this.gl=e,this.reset()},r.prototype.bind=function(e,t){e.uniforms.globals=this.renderer.globalUniforms;var i=e.program,n=i.glPrograms[this.renderer.CONTEXT_UID]||this.generateProgram(e);return this.shader=e,this.program!==i&&(this.program=i,this.gl.useProgram(n.program)),t||(Rr.textureCount=0,Rr.uboCount=0,this.syncUniformGroup(e.uniformGroup,Rr)),n},r.prototype.setUniforms=function(e){var t=this.shader.program,i=t.glPrograms[this.renderer.CONTEXT_UID];t.syncUniforms(i.uniformData,e,this.renderer)},r.prototype.syncUniformGroup=function(e,t){var i=this.getGlProgram();(!e.static||e.dirtyId!==i.uniformDirtyGroups[e.id])&&(i.uniformDirtyGroups[e.id]=e.dirtyId,this.syncUniforms(e,i,t))},r.prototype.syncUniforms=function(e,t,i){var n=e.syncUniforms[this.shader.program.id]||this.createSyncGroups(e);n(t.uniformData,e.uniforms,this.renderer,i)},r.prototype.createSyncGroups=function(e){var t=this.getSignature(e,this.shader.program.uniformData,"u");return this.cache[t]||(this.cache[t]=nd(e,this.shader.program.uniformData)),e.syncUniforms[this.shader.program.id]=this.cache[t],e.syncUniforms[this.shader.program.id]},r.prototype.syncUniformBufferGroup=function(e,t){var i=this.getGlProgram();if(!e.static||e.dirtyId!==0||!i.uniformGroups[e.id]){e.dirtyId=0;var n=i.uniformGroups[e.id]||this.createSyncBufferGroup(e,i,t);e.buffer.update(),n(i.uniformData,e.uniforms,this.renderer,Rr,e.buffer)}this.renderer.buffer.bindBufferBase(e.buffer,i.uniformBufferBindings[t])},r.prototype.createSyncBufferGroup=function(e,t,i){var n=this.renderer.gl;this.renderer.buffer.bind(e.buffer);var o=this.gl.getUniformBlockIndex(t.program,i);t.uniformBufferBindings[i]=this.shader.uniformBindCount,n.uniformBlockBinding(t.program,o,this.shader.uniformBindCount),this.shader.uniformBindCount++;var a=this.getSignature(e,this.shader.program.uniformData,"ubo"),s=this._uboCache[a];if(s||(s=this._uboCache[a]=bd(e,this.shader.program.uniformData)),e.autoManage){var u=new Float32Array(s.size/4);e.buffer.update(u)}return t.uniformGroups[e.id]=s.syncFunc,t.uniformGroups[e.id]},r.prototype.getSignature=function(e,t,i){var n=e.uniforms,o=[i+"-"];for(var a in n)o.push(a),t[a]&&o.push(t[a].type);return o.join("-")},r.prototype.getGlProgram=function(){return this.shader?this.shader.program.glPrograms[this.renderer.CONTEXT_UID]:null},r.prototype.generateProgram=function(e){var t=this.gl,i=e.program,n=wd(t,i);return i.glPrograms[this.renderer.CONTEXT_UID]=n,n},r.prototype.reset=function(){this.program=null,this.shader=null},r.prototype.destroy=function(){this.renderer=null,this.destroyed=!0},r}();function Id(r,e){return e===void 0&&(e=[]),e[F.NORMAL]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[F.ADD]=[r.ONE,r.ONE],e[F.MULTIPLY]=[r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA],e[F.SCREEN]=[r.ONE,r.ONE_MINUS_SRC_COLOR,r.ONE,r.ONE_MINUS_SRC_ALPHA],e[F.OVERLAY]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[F.DARKEN]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[F.LIGHTEN]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[F.COLOR_DODGE]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[F.COLOR_BURN]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[F.HARD_LIGHT]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[F.SOFT_LIGHT]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[F.DIFFERENCE]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[F.EXCLUSION]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[F.HUE]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[F.SATURATION]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[F.COLOR]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[F.LUMINOSITY]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[F.NONE]=[0,0],e[F.NORMAL_NPM]=[r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA],e[F.ADD_NPM]=[r.SRC_ALPHA,r.ONE,r.ONE,r.ONE],e[F.SCREEN_NPM]=[r.SRC_ALPHA,r.ONE_MINUS_SRC_COLOR,r.ONE,r.ONE_MINUS_SRC_ALPHA],e[F.SRC_IN]=[r.DST_ALPHA,r.ZERO],e[F.SRC_OUT]=[r.ONE_MINUS_DST_ALPHA,r.ZERO],e[F.SRC_ATOP]=[r.DST_ALPHA,r.ONE_MINUS_SRC_ALPHA],e[F.DST_OVER]=[r.ONE_MINUS_DST_ALPHA,r.ONE],e[F.DST_IN]=[r.ZERO,r.SRC_ALPHA],e[F.DST_OUT]=[r.ZERO,r.ONE_MINUS_SRC_ALPHA],e[F.DST_ATOP]=[r.ONE_MINUS_DST_ALPHA,r.SRC_ALPHA],e[F.XOR]=[r.ONE_MINUS_DST_ALPHA,r.ONE_MINUS_SRC_ALPHA],e[F.SUBTRACT]=[r.ONE,r.ONE,r.ONE,r.ONE,r.FUNC_REVERSE_SUBTRACT,r.FUNC_ADD],e}var Sd=0,Rd=1,Ad=2,Od=3,Nd=4,Fd=5,qa=function(){function r(){this.gl=null,this.stateId=0,this.polygonOffset=0,this.blendMode=F.NONE,this._blendEq=!1,this.map=[],this.map[Sd]=this.setBlend,this.map[Rd]=this.setOffset,this.map[Ad]=this.setCullFace,this.map[Od]=this.setDepthTest,this.map[Nd]=this.setFrontFace,this.map[Fd]=this.setDepthMask,this.checks=[],this.defaultState=new le,this.defaultState.blend=!0}return r.prototype.contextChange=function(e){this.gl=e,this.blendModes=Id(e),this.set(this.defaultState),this.reset()},r.prototype.set=function(e){if(e=e||this.defaultState,this.stateId!==e.data){for(var t=this.stateId^e.data,i=0;t;)t&1&&this.map[i].call(this,!!(e.data&1<<i)),t=t>>1,i++;this.stateId=e.data}for(var i=0;i<this.checks.length;i++)this.checks[i](this,e)},r.prototype.forceState=function(e){e=e||this.defaultState;for(var t=0;t<this.map.length;t++)this.map[t].call(this,!!(e.data&1<<t));for(var t=0;t<this.checks.length;t++)this.checks[t](this,e);this.stateId=e.data},r.prototype.setBlend=function(e){this.updateCheck(r.checkBlendMode,e),this.gl[e?"enable":"disable"](this.gl.BLEND)},r.prototype.setOffset=function(e){this.updateCheck(r.checkPolygonOffset,e),this.gl[e?"enable":"disable"](this.gl.POLYGON_OFFSET_FILL)},r.prototype.setDepthTest=function(e){this.gl[e?"enable":"disable"](this.gl.DEPTH_TEST)},r.prototype.setDepthMask=function(e){this.gl.depthMask(e)},r.prototype.setCullFace=function(e){this.gl[e?"enable":"disable"](this.gl.CULL_FACE)},r.prototype.setFrontFace=function(e){this.gl.frontFace(this.gl[e?"CW":"CCW"])},r.prototype.setBlendMode=function(e){if(e!==this.blendMode){this.blendMode=e;var t=this.blendModes[e],i=this.gl;t.length===2?i.blendFunc(t[0],t[1]):i.blendFuncSeparate(t[0],t[1],t[2],t[3]),t.length===6?(this._blendEq=!0,i.blendEquationSeparate(t[4],t[5])):this._blendEq&&(this._blendEq=!1,i.blendEquationSeparate(i.FUNC_ADD,i.FUNC_ADD))}},r.prototype.setPolygonOffset=function(e,t){this.gl.polygonOffset(e,t)},r.prototype.reset=function(){this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!1),this.forceState(this.defaultState),this._blendEq=!0,this.blendMode=-1,this.setBlendMode(0)},r.prototype.updateCheck=function(e,t){var i=this.checks.indexOf(e);t&&i===-1?this.checks.push(e):!t&&i!==-1&&this.checks.splice(i,1)},r.checkBlendMode=function(e,t){e.setBlendMode(t.blendMode)},r.checkPolygonOffset=function(e,t){e.setPolygonOffset(1,t.polygonOffset)},r.prototype.destroy=function(){this.gl=null},r}(),Ka=function(){function r(e){this.renderer=e,this.count=0,this.checkCount=0,this.maxIdle=O.GC_MAX_IDLE,this.checkCountMax=O.GC_MAX_CHECK_COUNT,this.mode=O.GC_MODE}return r.prototype.postrender=function(){!this.renderer.renderingToScreen||(this.count++,this.mode!==pi.MANUAL&&(this.checkCount++,this.checkCount>this.checkCountMax&&(this.checkCount=0,this.run())))},r.prototype.run=function(){for(var e=this.renderer.texture,t=e.managedTextures,i=!1,n=0;n<t.length;n++){var o=t[n];!o.framebuffer&&this.count-o.touched>this.maxIdle&&(e.destroyTexture(o,!0),t[n]=null,i=!0)}if(i){for(var a=0,n=0;n<t.length;n++)t[n]!==null&&(t[a++]=t[n]);t.length=a}},r.prototype.unload=function(e){var t=this.renderer.texture,i=e._texture;i&&!i.framebuffer&&t.destroyTexture(i);for(var n=e.children.length-1;n>=0;n--)this.unload(e.children[n])},r.prototype.destroy=function(){this.renderer=null},r}();function Ud(r){var e,t,i,n,o,a,s,u,h,l,f,c,d,p,_,v,g,y,x,T,m,b,w;return"WebGL2RenderingContext"in self&&r instanceof self.WebGL2RenderingContext?w=(e={},e[D.UNSIGNED_BYTE]=(t={},t[P.RGBA]=r.RGBA8,t[P.RGB]=r.RGB8,t[P.RG]=r.RG8,t[P.RED]=r.R8,t[P.RGBA_INTEGER]=r.RGBA8UI,t[P.RGB_INTEGER]=r.RGB8UI,t[P.RG_INTEGER]=r.RG8UI,t[P.RED_INTEGER]=r.R8UI,t[P.ALPHA]=r.ALPHA,t[P.LUMINANCE]=r.LUMINANCE,t[P.LUMINANCE_ALPHA]=r.LUMINANCE_ALPHA,t),e[D.BYTE]=(i={},i[P.RGBA]=r.RGBA8_SNORM,i[P.RGB]=r.RGB8_SNORM,i[P.RG]=r.RG8_SNORM,i[P.RED]=r.R8_SNORM,i[P.RGBA_INTEGER]=r.RGBA8I,i[P.RGB_INTEGER]=r.RGB8I,i[P.RG_INTEGER]=r.RG8I,i[P.RED_INTEGER]=r.R8I,i),e[D.UNSIGNED_SHORT]=(n={},n[P.RGBA_INTEGER]=r.RGBA16UI,n[P.RGB_INTEGER]=r.RGB16UI,n[P.RG_INTEGER]=r.RG16UI,n[P.RED_INTEGER]=r.R16UI,n[P.DEPTH_COMPONENT]=r.DEPTH_COMPONENT16,n),e[D.SHORT]=(o={},o[P.RGBA_INTEGER]=r.RGBA16I,o[P.RGB_INTEGER]=r.RGB16I,o[P.RG_INTEGER]=r.RG16I,o[P.RED_INTEGER]=r.R16I,o),e[D.UNSIGNED_INT]=(a={},a[P.RGBA_INTEGER]=r.RGBA32UI,a[P.RGB_INTEGER]=r.RGB32UI,a[P.RG_INTEGER]=r.RG32UI,a[P.RED_INTEGER]=r.R32UI,a[P.DEPTH_COMPONENT]=r.DEPTH_COMPONENT24,a),e[D.INT]=(s={},s[P.RGBA_INTEGER]=r.RGBA32I,s[P.RGB_INTEGER]=r.RGB32I,s[P.RG_INTEGER]=r.RG32I,s[P.RED_INTEGER]=r.R32I,s),e[D.FLOAT]=(u={},u[P.RGBA]=r.RGBA32F,u[P.RGB]=r.RGB32F,u[P.RG]=r.RG32F,u[P.RED]=r.R32F,u[P.DEPTH_COMPONENT]=r.DEPTH_COMPONENT32F,u),e[D.HALF_FLOAT]=(h={},h[P.RGBA]=r.RGBA16F,h[P.RGB]=r.RGB16F,h[P.RG]=r.RG16F,h[P.RED]=r.R16F,h),e[D.UNSIGNED_SHORT_5_6_5]=(l={},l[P.RGB]=r.RGB565,l),e[D.UNSIGNED_SHORT_4_4_4_4]=(f={},f[P.RGBA]=r.RGBA4,f),e[D.UNSIGNED_SHORT_5_5_5_1]=(c={},c[P.RGBA]=r.RGB5_A1,c),e[D.UNSIGNED_INT_2_10_10_10_REV]=(d={},d[P.RGBA]=r.RGB10_A2,d[P.RGBA_INTEGER]=r.RGB10_A2UI,d),e[D.UNSIGNED_INT_10F_11F_11F_REV]=(p={},p[P.RGB]=r.R11F_G11F_B10F,p),e[D.UNSIGNED_INT_5_9_9_9_REV]=(_={},_[P.RGB]=r.RGB9_E5,_),e[D.UNSIGNED_INT_24_8]=(v={},v[P.DEPTH_STENCIL]=r.DEPTH24_STENCIL8,v),e[D.FLOAT_32_UNSIGNED_INT_24_8_REV]=(g={},g[P.DEPTH_STENCIL]=r.DEPTH32F_STENCIL8,g),e):w=(y={},y[D.UNSIGNED_BYTE]=(x={},x[P.RGBA]=r.RGBA,x[P.RGB]=r.RGB,x[P.ALPHA]=r.ALPHA,x[P.LUMINANCE]=r.LUMINANCE,x[P.LUMINANCE_ALPHA]=r.LUMINANCE_ALPHA,x),y[D.UNSIGNED_SHORT_5_6_5]=(T={},T[P.RGB]=r.RGB,T),y[D.UNSIGNED_SHORT_4_4_4_4]=(m={},m[P.RGBA]=r.RGBA,m),y[D.UNSIGNED_SHORT_5_5_5_1]=(b={},b[P.RGBA]=r.RGBA,b),y),w}var ki=function(){function r(e){this.texture=e,this.width=-1,this.height=-1,this.dirtyId=-1,this.dirtyStyleId=-1,this.mipmap=!1,this.wrapMode=33071,this.type=D.UNSIGNED_BYTE,this.internalFormat=P.RGBA,this.samplerType=0}return r}(),Za=function(){function r(e){this.renderer=e,this.boundTextures=[],this.currentLocation=-1,this.managedTextures=[],this._unknownBoundTextures=!1,this.unknownTexture=new Z,this.hasIntegerTextures=!1}return r.prototype.contextChange=function(){var e=this.gl=this.renderer.gl;this.CONTEXT_UID=this.renderer.CONTEXT_UID,this.webGLVersion=this.renderer.context.webGLVersion,this.internalFormats=Ud(e);var t=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS);this.boundTextures.length=t;for(var i=0;i<t;i++)this.boundTextures[i]=null;this.emptyTextures={};var n=new ki(e.createTexture());e.bindTexture(e.TEXTURE_2D,n.texture),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array(4)),this.emptyTextures[e.TEXTURE_2D]=n,this.emptyTextures[e.TEXTURE_CUBE_MAP]=new ki(e.createTexture()),e.bindTexture(e.TEXTURE_CUBE_MAP,this.emptyTextures[e.TEXTURE_CUBE_MAP].texture);for(var i=0;i<6;i++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,null);e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MIN_FILTER,e.LINEAR);for(var i=0;i<this.boundTextures.length;i++)this.bind(null,i)},r.prototype.bind=function(e,t){t===void 0&&(t=0);var i=this.gl;if(e=e==null?void 0:e.castToBaseTexture(),e&&e.valid&&!e.parentTextureArray){e.touched=this.renderer.textureGC.count;var n=e._glTextures[this.CONTEXT_UID]||this.initTexture(e);this.boundTextures[t]!==e&&(this.currentLocation!==t&&(this.currentLocation=t,i.activeTexture(i.TEXTURE0+t)),i.bindTexture(e.target,n.texture)),n.dirtyId!==e.dirtyId&&(this.currentLocation!==t&&(this.currentLocation=t,i.activeTexture(i.TEXTURE0+t)),this.updateTexture(e)),this.boundTextures[t]=e}else this.currentLocation!==t&&(this.currentLocation=t,i.activeTexture(i.TEXTURE0+t)),i.bindTexture(i.TEXTURE_2D,this.emptyTextures[i.TEXTURE_2D].texture),this.boundTextures[t]=null},r.prototype.reset=function(){this._unknownBoundTextures=!0,this.hasIntegerTextures=!1,this.currentLocation=-1;for(var e=0;e<this.boundTextures.length;e++)this.boundTextures[e]=this.unknownTexture},r.prototype.unbind=function(e){var t=this,i=t.gl,n=t.boundTextures;if(this._unknownBoundTextures){this._unknownBoundTextures=!1;for(var o=0;o<n.length;o++)n[o]===this.unknownTexture&&this.bind(null,o)}for(var o=0;o<n.length;o++)n[o]===e&&(this.currentLocation!==o&&(i.activeTexture(i.TEXTURE0+o),this.currentLocation=o),i.bindTexture(e.target,this.emptyTextures[e.target].texture),n[o]=null)},r.prototype.ensureSamplerType=function(e){var t=this,i=t.boundTextures,n=t.hasIntegerTextures,o=t.CONTEXT_UID;if(!!n)for(var a=e-1;a>=0;--a){var s=i[a];if(s){var u=s._glTextures[o];u.samplerType!==lr.FLOAT&&this.renderer.texture.unbind(s)}}},r.prototype.initTexture=function(e){var t=new ki(this.gl.createTexture());return t.dirtyId=-1,e._glTextures[this.CONTEXT_UID]=t,this.managedTextures.push(e),e.on("dispose",this.destroyTexture,this),t},r.prototype.initTextureType=function(e,t){var i,n;t.internalFormat=(n=(i=this.internalFormats[e.type])===null||i===void 0?void 0:i[e.format])!==null&&n!==void 0?n:e.format,this.webGLVersion===2&&e.type===D.HALF_FLOAT?t.type=this.gl.HALF_FLOAT:t.type=e.type},r.prototype.updateTexture=function(e){var t=e._glTextures[this.CONTEXT_UID];if(!!t){var i=this.renderer;if(this.initTextureType(e,t),e.resource&&e.resource.upload(i,e,t))t.samplerType!==lr.FLOAT&&(this.hasIntegerTextures=!0);else{var n=e.realWidth,o=e.realHeight,a=i.gl;(t.width!==n||t.height!==o||t.dirtyId<0)&&(t.width=n,t.height=o,a.texImage2D(e.target,0,t.internalFormat,n,o,0,e.format,t.type,null))}e.dirtyStyleId!==t.dirtyStyleId&&this.updateTextureStyle(e),t.dirtyId=e.dirtyId}},r.prototype.destroyTexture=function(e,t){var i=this.gl;if(e=e.castToBaseTexture(),e._glTextures[this.CONTEXT_UID]&&(this.unbind(e),i.deleteTexture(e._glTextures[this.CONTEXT_UID].texture),e.off("dispose",this.destroyTexture,this),delete e._glTextures[this.CONTEXT_UID],!t)){var n=this.managedTextures.indexOf(e);n!==-1&&xe(this.managedTextures,n,1)}},r.prototype.updateTextureStyle=function(e){var t=e._glTextures[this.CONTEXT_UID];!t||((e.mipmap===Ut.POW2||this.webGLVersion!==2)&&!e.isPowerOfTwo?t.mipmap=!1:t.mipmap=e.mipmap>=1,this.webGLVersion!==2&&!e.isPowerOfTwo?t.wrapMode=jt.CLAMP:t.wrapMode=e.wrapMode,e.resource&&e.resource.style(this.renderer,e,t)||this.setStyle(e,t),t.dirtyStyleId=e.dirtyStyleId)},r.prototype.setStyle=function(e,t){var i=this.gl;if(t.mipmap&&e.mipmap!==Ut.ON_MANUAL&&i.generateMipmap(e.target),i.texParameteri(e.target,i.TEXTURE_WRAP_S,t.wrapMode),i.texParameteri(e.target,i.TEXTURE_WRAP_T,t.wrapMode),t.mipmap){i.texParameteri(e.target,i.TEXTURE_MIN_FILTER,e.scaleMode===Et.LINEAR?i.LINEAR_MIPMAP_LINEAR:i.NEAREST_MIPMAP_NEAREST);var n=this.renderer.context.extensions.anisotropicFiltering;if(n&&e.anisotropicLevel>0&&e.scaleMode===Et.LINEAR){var o=Math.min(e.anisotropicLevel,i.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT));i.texParameterf(e.target,n.TEXTURE_MAX_ANISOTROPY_EXT,o)}}else i.texParameteri(e.target,i.TEXTURE_MIN_FILTER,e.scaleMode===Et.LINEAR?i.LINEAR:i.NEAREST);i.texParameteri(e.target,i.TEXTURE_MAG_FILTER,e.scaleMode===Et.LINEAR?i.LINEAR:i.NEAREST)},r.prototype.destroy=function(){this.renderer=null},r}(),Ja={__proto__:null,FilterSystem:Pa,BatchSystem:Ia,ContextSystem:Ra,FramebufferSystem:Aa,GeometrySystem:Oa,MaskSystem:ja,ScissorSystem:Ha,StencilSystem:za,ProjectionSystem:Va,RenderTextureSystem:$a,ShaderSystem:Ya,StateSystem:qa,TextureGCSystem:Ka,TextureSystem:Za},ji=new pt,Ld=function(r){Q(e,r);function e(t,i){t===void 0&&(t=Ge.UNKNOWN);var n=r.call(this)||this;return i=Object.assign({},O.RENDER_OPTIONS,i),n.options=i,n.type=t,n.screen=new W(0,0,i.width,i.height),n.view=i.view||document.createElement("canvas"),n.resolution=i.resolution||O.RESOLUTION,n.useContextAlpha=i.useContextAlpha,n.autoDensity=!!i.autoDensity,n.preserveDrawingBuffer=i.preserveDrawingBuffer,n.clearBeforeRender=i.clearBeforeRender,n._backgroundColor=0,n._backgroundColorRgba=[0,0,0,1],n._backgroundColorString="#000000",n.backgroundColor=i.backgroundColor||n._backgroundColor,n.backgroundAlpha=i.backgroundAlpha,i.transparent!==void 0&&(Qt("6.0.0","Option transparent is deprecated, please use backgroundAlpha instead."),n.useContextAlpha=i.transparent,n.backgroundAlpha=i.transparent?0:1),n._lastObjectRendered=null,n.plugins={},n}return e.prototype.initPlugins=function(t){for(var i in t)this.plugins[i]=new t[i](this)},Object.defineProperty(e.prototype,"width",{get:function(){return this.view.width},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this.view.height},enumerable:!1,configurable:!0}),e.prototype.resize=function(t,i){this.view.width=Math.round(t*this.resolution),this.view.height=Math.round(i*this.resolution);var n=this.view.width/this.resolution,o=this.view.height/this.resolution;this.screen.width=n,this.screen.height=o,this.autoDensity&&(this.view.style.width=n+"px",this.view.style.height=o+"px"),this.emit("resize",n,o)},e.prototype.generateTexture=function(t,i,n,o){i===void 0&&(i={}),typeof i=="number"&&(Qt("6.1.0","generateTexture options (scaleMode, resolution, region) are now object options."),i={scaleMode:i,resolution:n,region:o});var a=i.region,s=Mc(i,["region"]);o=a||t.getLocalBounds(null,!0),o.width===0&&(o.width=1),o.height===0&&(o.height=1);var u=se.create(wi({width:o.width,height:o.height},s));return ji.tx=-o.x,ji.ty=-o.y,this.render(t,{renderTexture:u,clear:!1,transform:ji,skipUpdateTransform:!!t.parent}),u},e.prototype.destroy=function(t){for(var i in this.plugins)this.plugins[i].destroy(),this.plugins[i]=null;t&&this.view.parentNode&&this.view.parentNode.removeChild(this.view);var n=this;n.plugins=null,n.type=Ge.UNKNOWN,n.view=null,n.screen=null,n._tempDisplayObjectParent=null,n.options=null,this._backgroundColorRgba=null,this._backgroundColorString=null,this._lastObjectRendered=null},Object.defineProperty(e.prototype,"backgroundColor",{get:function(){return this._backgroundColor},set:function(t){this._backgroundColor=t,this._backgroundColorString=Zo(t),yt(t,this._backgroundColorRgba)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"backgroundAlpha",{get:function(){return this._backgroundColorRgba[3]},set:function(t){this._backgroundColorRgba[3]=t},enumerable:!1,configurable:!0}),e}(Fe),Md=function(){function r(e){this.buffer=e||null,this.updateID=-1,this.byteLength=-1,this.refCount=0}return r}(),Bd=function(){function r(e){this.renderer=e,this.managedBuffers={},this.boundBufferBases={}}return r.prototype.destroy=function(){this.renderer=null},r.prototype.contextChange=function(){this.disposeAll(!0),this.gl=this.renderer.gl,this.CONTEXT_UID=this.renderer.CONTEXT_UID},r.prototype.bind=function(e){var t=this,i=t.gl,n=t.CONTEXT_UID,o=e._glBuffers[n]||this.createGLBuffer(e);i.bindBuffer(e.type,o.buffer)},r.prototype.bindBufferBase=function(e,t){var i=this,n=i.gl,o=i.CONTEXT_UID;if(this.boundBufferBases[t]!==e){var a=e._glBuffers[o]||this.createGLBuffer(e);this.boundBufferBases[t]=e,n.bindBufferBase(n.UNIFORM_BUFFER,t,a.buffer)}},r.prototype.bindBufferRange=function(e,t,i){var n=this,o=n.gl,a=n.CONTEXT_UID;i=i||0;var s=e._glBuffers[a]||this.createGLBuffer(e);o.bindBufferRange(o.UNIFORM_BUFFER,t||0,s.buffer,i*256,256)},r.prototype.update=function(e){var t=this,i=t.gl,n=t.CONTEXT_UID,o=e._glBuffers[n];if(e._updateID!==o.updateID)if(o.updateID=e._updateID,i.bindBuffer(e.type,o.buffer),o.byteLength>=e.data.byteLength)i.bufferSubData(e.type,0,e.data);else{var a=e.static?i.STATIC_DRAW:i.DYNAMIC_DRAW;o.byteLength=e.data.byteLength,i.bufferData(e.type,e.data,a)}},r.prototype.dispose=function(e,t){if(!!this.managedBuffers[e.id]){delete this.managedBuffers[e.id];var i=e._glBuffers[this.CONTEXT_UID],n=this.gl;e.disposeRunner.remove(this),!!i&&(t||n.deleteBuffer(i.buffer),delete e._glBuffers[this.CONTEXT_UID])}},r.prototype.disposeAll=function(e){for(var t=Object.keys(this.managedBuffers),i=0;i<t.length;i++)this.dispose(this.managedBuffers[t[i]],e)},r.prototype.createGLBuffer=function(e){var t=this,i=t.CONTEXT_UID,n=t.gl;return e._glBuffers[i]=new Md(n.createBuffer()),this.managedBuffers[e.id]=e,e.disposeRunner.add(this),e._glBuffers[i]},r}(),qt=function(r){Q(e,r);function e(t){var i=r.call(this,Ge.WEBGL,t)||this;return t=i.options,i.gl=null,i.CONTEXT_UID=0,i.runners={destroy:new bt("destroy"),contextChange:new bt("contextChange"),reset:new bt("reset"),update:new bt("update"),postrender:new bt("postrender"),prerender:new bt("prerender"),resize:new bt("resize")},i.runners.contextChange.add(i),i.globalUniforms=new ue({projectionMatrix:new pt},!0),i.addSystem(ja,"mask").addSystem(Ra,"context").addSystem(qa,"state").addSystem(Ya,"shader").addSystem(Za,"texture").addSystem(Bd,"buffer").addSystem(Oa,"geometry").addSystem(Aa,"framebuffer").addSystem(Ha,"scissor").addSystem(za,"stencil").addSystem(Va,"projection").addSystem(Ka,"textureGC").addSystem(Pa,"filter").addSystem($a,"renderTexture").addSystem(Ia,"batch"),i.initPlugins(e.__plugins),i.multisample=void 0,t.context?i.context.initFromContext(t.context):i.context.initFromOptions({alpha:!!i.useContextAlpha,antialias:t.antialias,premultipliedAlpha:i.useContextAlpha&&i.useContextAlpha!=="notMultiplied",stencil:!0,preserveDrawingBuffer:t.preserveDrawingBuffer,powerPreference:i.options.powerPreference}),i.renderingToScreen=!0,xh(i.context.webGLVersion===2?"WebGL 2":"WebGL 1"),i.resize(i.options.width,i.options.height),i}return e.create=function(t){if(bh())return new e(t);throw new Error('WebGL unsupported in this browser, use "pixi.js-legacy" for fallback canvas2d support.')},e.prototype.contextChange=function(){var t=this.gl,i;if(this.context.webGLVersion===1){var n=t.getParameter(t.FRAMEBUFFER_BINDING);t.bindFramebuffer(t.FRAMEBUFFER,null),i=t.getParameter(t.SAMPLES),t.bindFramebuffer(t.FRAMEBUFFER,n)}else{var n=t.getParameter(t.DRAW_FRAMEBUFFER_BINDING);t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),i=t.getParameter(t.SAMPLES),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,n)}i>=dt.HIGH?this.multisample=dt.HIGH:i>=dt.MEDIUM?this.multisample=dt.MEDIUM:i>=dt.LOW?this.multisample=dt.LOW:this.multisample=dt.NONE},e.prototype.addSystem=function(t,i){var n=new t(this);if(this[i])throw new Error('Whoops! The name "'+i+'" is already in use');this[i]=n;for(var o in this.runners)this.runners[o].add(n);return this},e.prototype.render=function(t,i){var n,o,a,s;if(i&&(i instanceof se?(Qt("6.0.0","Renderer#render arguments changed, use options instead."),n=i,o=arguments[2],a=arguments[3],s=arguments[4]):(n=i.renderTexture,o=i.clear,a=i.transform,s=i.skipUpdateTransform)),this.renderingToScreen=!n,this.runners.prerender.emit(),this.emit("prerender"),this.projection.transform=a,!this.context.isLost){if(n||(this._lastObjectRendered=t),!s){var u=t.enableTempParent();t.updateTransform(),t.disableTempParent(u)}this.renderTexture.bind(n),this.batch.currentRenderer.start(),(o!==void 0?o:this.clearBeforeRender)&&this.renderTexture.clear(),t.render(this),this.batch.currentRenderer.flush(),n&&n.baseTexture.update(),this.runners.postrender.emit(),this.projection.transform=null,this.emit("postrender")}},e.prototype.generateTexture=function(t,i,n,o){i===void 0&&(i={});var a=r.prototype.generateTexture.call(this,t,i,n,o);return this.framebuffer.blit(),a},e.prototype.resize=function(t,i){r.prototype.resize.call(this,t,i),this.runners.resize.emit(this.screen.height,this.screen.width)},e.prototype.reset=function(){return this.runners.reset.emit(),this},e.prototype.clear=function(){this.renderTexture.bind(),this.renderTexture.clear()},e.prototype.destroy=function(t){this.runners.destroy.emit();for(var i in this.runners)this.runners[i].destroy();r.prototype.destroy.call(this,t),this.gl=null},Object.defineProperty(e.prototype,"extract",{get:function(){return Qt("6.0.0","Renderer#extract has been deprecated, please use Renderer#plugins.extract instead."),this.plugins.extract},enumerable:!1,configurable:!0}),e.registerPlugin=function(t,i){e.__plugins=e.__plugins||{},e.__plugins[t]=i},e}(Ld);function Dd(r){return qt.create(r)}var Gd=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,kd=`attribute vec2 aVertexPosition;

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
`,jd=Gd,Qa=kd,Xi=function(){function r(){this.texArray=null,this.blend=0,this.type=Pt.TRIANGLES,this.start=0,this.size=0,this.data=null}return r}(),Hi=function(){function r(){this.elements=[],this.ids=[],this.count=0}return r.prototype.clear=function(){for(var e=0;e<this.count;e++)this.elements[e]=null;this.count=0},r}(),zi=function(){function r(e){typeof e=="number"?this.rawBinaryData=new ArrayBuffer(e):e instanceof Uint8Array?this.rawBinaryData=e.buffer:this.rawBinaryData=e,this.uint32View=new Uint32Array(this.rawBinaryData),this.float32View=new Float32Array(this.rawBinaryData)}return Object.defineProperty(r.prototype,"int8View",{get:function(){return this._int8View||(this._int8View=new Int8Array(this.rawBinaryData)),this._int8View},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"uint8View",{get:function(){return this._uint8View||(this._uint8View=new Uint8Array(this.rawBinaryData)),this._uint8View},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"int16View",{get:function(){return this._int16View||(this._int16View=new Int16Array(this.rawBinaryData)),this._int16View},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"uint16View",{get:function(){return this._uint16View||(this._uint16View=new Uint16Array(this.rawBinaryData)),this._uint16View},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"int32View",{get:function(){return this._int32View||(this._int32View=new Int32Array(this.rawBinaryData)),this._int32View},enumerable:!1,configurable:!0}),r.prototype.view=function(e){return this[e+"View"]},r.prototype.destroy=function(){this.rawBinaryData=null,this._int8View=null,this._uint8View=null,this._int16View=null,this._uint16View=null,this._int32View=null,this.uint32View=null,this.float32View=null},r.sizeOf=function(e){switch(e){case"int8":case"uint8":return 1;case"int16":case"uint16":return 2;case"int32":case"uint32":case"float32":return 4;default:throw new Error(e+" isn't a valid view type")}},r}(),Xd=function(r){Q(e,r);function e(t){var i=r.call(this,t)||this;return i.shaderGenerator=null,i.geometryClass=null,i.vertexSize=null,i.state=le.for2d(),i.size=O.SPRITE_BATCH_SIZE*4,i._vertexCount=0,i._indexCount=0,i._bufferedElements=[],i._bufferedTextures=[],i._bufferSize=0,i._shader=null,i._packedGeometries=[],i._packedGeometryPoolSize=2,i._flushId=0,i._aBuffers={},i._iBuffers={},i.MAX_TEXTURES=1,i.renderer.on("prerender",i.onPrerender,i),t.runners.contextChange.add(i),i._dcIndex=0,i._aIndex=0,i._iIndex=0,i._attributeBuffer=null,i._indexBuffer=null,i._tempBoundTextures=[],i}return e.prototype.contextChange=function(){var t=this.renderer.gl;O.PREFER_ENV===kt.WEBGL_LEGACY?this.MAX_TEXTURES=1:(this.MAX_TEXTURES=Math.min(t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),O.SPRITE_MAX_TEXTURES),this.MAX_TEXTURES=sd(this.MAX_TEXTURES,t)),this._shader=this.shaderGenerator.generateShader(this.MAX_TEXTURES);for(var i=0;i<this._packedGeometryPoolSize;i++)this._packedGeometries[i]=new this.geometryClass;this.initFlushBuffers()},e.prototype.initFlushBuffers=function(){for(var t=e._drawCallPool,i=e._textureArrayPool,n=this.size/4,o=Math.floor(n/this.MAX_TEXTURES)+1;t.length<n;)t.push(new Xi);for(;i.length<o;)i.push(new Hi);for(var a=0;a<this.MAX_TEXTURES;a++)this._tempBoundTextures[a]=null},e.prototype.onPrerender=function(){this._flushId=0},e.prototype.render=function(t){!t._texture.valid||(this._vertexCount+t.vertexData.length/2>this.size&&this.flush(),this._vertexCount+=t.vertexData.length/2,this._indexCount+=t.indices.length,this._bufferedTextures[this._bufferSize]=t._texture.baseTexture,this._bufferedElements[this._bufferSize++]=t)},e.prototype.buildTexturesAndDrawCalls=function(){var t=this,i=t._bufferedTextures,n=t.MAX_TEXTURES,o=e._textureArrayPool,a=this.renderer.batch,s=this._tempBoundTextures,u=this.renderer.textureGC.count,h=++Z._globalBatch,l=0,f=o[0],c=0;a.copyBoundTextures(s,n);for(var d=0;d<this._bufferSize;++d){var p=i[d];i[d]=null,p._batchEnabled!==h&&(f.count>=n&&(a.boundArray(f,s,h,n),this.buildDrawCalls(f,c,d),c=d,f=o[++l],++h),p._batchEnabled=h,p.touched=u,f.elements[f.count++]=p)}f.count>0&&(a.boundArray(f,s,h,n),this.buildDrawCalls(f,c,this._bufferSize),++l,++h);for(var d=0;d<s.length;d++)s[d]=null;Z._globalBatch=h},e.prototype.buildDrawCalls=function(t,i,n){var o=this,a=o._bufferedElements,s=o._attributeBuffer,u=o._indexBuffer,h=o.vertexSize,l=e._drawCallPool,f=this._dcIndex,c=this._aIndex,d=this._iIndex,p=l[f];p.start=this._iIndex,p.texArray=t;for(var _=i;_<n;++_){var v=a[_],g=v._texture.baseTexture,y=Qo[g.alphaMode?1:0][v.blendMode];a[_]=null,i<_&&p.blend!==y&&(p.size=d-p.start,i=_,p=l[++f],p.texArray=t,p.start=d),this.packInterleavedGeometry(v,s,u,c,d),c+=v.vertexData.length/2*h,d+=v.indices.length,p.blend=y}i<n&&(p.size=d-p.start,++f),this._dcIndex=f,this._aIndex=c,this._iIndex=d},e.prototype.bindAndClearTexArray=function(t){for(var i=this.renderer.texture,n=0;n<t.count;n++)i.bind(t.elements[n],t.ids[n]),t.elements[n]=null;t.count=0},e.prototype.updateGeometry=function(){var t=this,i=t._packedGeometries,n=t._attributeBuffer,o=t._indexBuffer;O.CAN_UPLOAD_SAME_BUFFER?(i[this._flushId]._buffer.update(n.rawBinaryData),i[this._flushId]._indexBuffer.update(o),this.renderer.geometry.updateBuffers()):(this._packedGeometryPoolSize<=this._flushId&&(this._packedGeometryPoolSize++,i[this._flushId]=new this.geometryClass),i[this._flushId]._buffer.update(n.rawBinaryData),i[this._flushId]._indexBuffer.update(o),this.renderer.geometry.bind(i[this._flushId]),this.renderer.geometry.updateBuffers(),this._flushId++)},e.prototype.drawBatches=function(){for(var t=this._dcIndex,i=this.renderer,n=i.gl,o=i.state,a=e._drawCallPool,s=null,u=0;u<t;u++){var h=a[u],l=h.texArray,f=h.type,c=h.size,d=h.start,p=h.blend;s!==l&&(s=l,this.bindAndClearTexArray(l)),this.state.blendMode=p,o.set(this.state),n.drawElements(f,c,n.UNSIGNED_SHORT,d*2)}},e.prototype.flush=function(){this._vertexCount!==0&&(this._attributeBuffer=this.getAttributeBuffer(this._vertexCount),this._indexBuffer=this.getIndexBuffer(this._indexCount),this._aIndex=0,this._iIndex=0,this._dcIndex=0,this.buildTexturesAndDrawCalls(),this.updateGeometry(),this.drawBatches(),this._bufferSize=0,this._vertexCount=0,this._indexCount=0)},e.prototype.start=function(){this.renderer.state.set(this.state),this.renderer.texture.ensureSamplerType(this.MAX_TEXTURES),this.renderer.shader.bind(this._shader),O.CAN_UPLOAD_SAME_BUFFER&&this.renderer.geometry.bind(this._packedGeometries[this._flushId])},e.prototype.stop=function(){this.flush()},e.prototype.destroy=function(){for(var t=0;t<this._packedGeometryPoolSize;t++)this._packedGeometries[t]&&this._packedGeometries[t].destroy();this.renderer.off("prerender",this.onPrerender,this),this._aBuffers=null,this._iBuffers=null,this._packedGeometries=null,this._attributeBuffer=null,this._indexBuffer=null,this._shader&&(this._shader.destroy(),this._shader=null),r.prototype.destroy.call(this)},e.prototype.getAttributeBuffer=function(t){var i=fr(Math.ceil(t/8)),n=na(i),o=i*8;this._aBuffers.length<=n&&(this._iBuffers.length=n+1);var a=this._aBuffers[o];return a||(this._aBuffers[o]=a=new zi(o*this.vertexSize*4)),a},e.prototype.getIndexBuffer=function(t){var i=fr(Math.ceil(t/12)),n=na(i),o=i*12;this._iBuffers.length<=n&&(this._iBuffers.length=n+1);var a=this._iBuffers[n];return a||(this._iBuffers[n]=a=new Uint16Array(o)),a},e.prototype.packInterleavedGeometry=function(t,i,n,o,a){for(var s=i.uint32View,u=i.float32View,h=o/this.vertexSize,l=t.uvs,f=t.indices,c=t.vertexData,d=t._texture.baseTexture._batchLocation,p=Math.min(t.worldAlpha,1),_=p<1&&t._texture.baseTexture.alphaMode?_i(t._tintRGB,p):t._tintRGB+(p*255<<24),v=0;v<c.length;v+=2)u[o++]=c[v],u[o++]=c[v+1],u[o++]=l[v],u[o++]=l[v+1],s[o++]=_,u[o++]=d;for(var v=0;v<f.length;v++)n[a++]=h+f[v]},e._drawCallPool=[],e._textureArrayPool=[],e}(Cr),Hd=function(){function r(e,t){if(this.vertexSrc=e,this.fragTemplate=t,this.programCache={},this.defaultGroupCache={},t.indexOf("%count%")<0)throw new Error('Fragment template must contain "%count%".');if(t.indexOf("%forloop%")<0)throw new Error('Fragment template must contain "%forloop%".')}return r.prototype.generateShader=function(e){if(!this.programCache[e]){for(var t=new Int32Array(e),i=0;i<e;i++)t[i]=i;this.defaultGroupCache[e]=ue.from({uSamplers:t},!0);var n=this.fragTemplate;n=n.replace(/%count%/gi,""+e),n=n.replace(/%forloop%/gi,this.generateSampleSrc(e)),this.programCache[e]=new Sr(this.vertexSrc,n)}var o={tint:new Float32Array([1,1,1,1]),translationMatrix:new pt,default:this.defaultGroupCache[e]};return new he(this.programCache[e],o)},r.prototype.generateSampleSrc=function(e){var t="";t+=`
`,t+=`
`;for(var i=0;i<e;i++)i>0&&(t+=`
else `),i<e-1&&(t+="if(vTextureId < "+i+".5)"),t+=`
{`,t+=`
	color = texture2D(uSamplers[`+i+"], vTextureCoord);",t+=`
}`;return t+=`
`,t+=`
`,t},r}(),ts=function(r){Q(e,r);function e(t){t===void 0&&(t=!1);var i=r.call(this)||this;return i._buffer=new _t(null,t,!1),i._indexBuffer=new _t(null,t,!0),i.addAttribute("aVertexPosition",i._buffer,2,!1,D.FLOAT).addAttribute("aTextureCoord",i._buffer,2,!1,D.FLOAT).addAttribute("aColor",i._buffer,4,!0,D.UNSIGNED_BYTE).addAttribute("aTextureId",i._buffer,1,!0,D.FLOAT).addIndex(i._indexBuffer),i}return e}(je),es=`precision highp float;
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
`,rs=`varying vec2 vTextureCoord;
varying vec4 vColor;
varying float vTextureId;
uniform sampler2D uSamplers[%count%];

void main(void){
    vec4 color;
    %forloop%
    gl_FragColor = color * vColor;
}
`,zd=function(){function r(){}return r.create=function(e){var t=Object.assign({vertex:es,fragment:rs,geometryClass:ts,vertexSize:6},e),i=t.vertex,n=t.fragment,o=t.vertexSize,a=t.geometryClass;return function(s){Q(u,s);function u(h){var l=s.call(this,h)||this;return l.shaderGenerator=new Hd(i,n),l.geometryClass=a,l.vertexSize=o,l}return u}(Xd)},Object.defineProperty(r,"defaultVertexSrc",{get:function(){return es},enumerable:!1,configurable:!0}),Object.defineProperty(r,"defaultFragmentTemplate",{get:function(){return rs},enumerable:!1,configurable:!0}),r}(),Vd=zd.create(),$d={},Wd=function(r){Object.defineProperty($d,r,{get:function(){return Qt("6.0.0","PIXI.systems."+r+" has moved to PIXI."+r),ya[r]}})};for(var Vi in ya)Wd(Vi);var Yd={},qd=function(r){Object.defineProperty(Yd,r,{get:function(){return Qt("6.0.0","PIXI.resources."+r+" has moved to PIXI."+r),Ja[r]}})};for(var Vi in Ja)qd(Vi);/*!
 * @pixi/app - v6.1.3
 * Compiled Mon, 13 Sep 2021 15:29:31 UTC
 *
 * @pixi/app is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var $i=function(){function r(e){var t=this;this.stage=new Bt,e=Object.assign({forceCanvas:!1},e),this.renderer=Dd(e),r._plugins.forEach(function(i){i.init.call(t,e)})}return r.registerPlugin=function(e){r._plugins.push(e)},r.prototype.render=function(){this.renderer.render(this.stage)},Object.defineProperty(r.prototype,"view",{get:function(){return this.renderer.view},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"screen",{get:function(){return this.renderer.screen},enumerable:!1,configurable:!0}),r.prototype.destroy=function(e,t){var i=this,n=r._plugins.slice(0);n.reverse(),n.forEach(function(o){o.destroy.call(i)}),this.stage.destroy(t),this.stage=null,this.renderer.destroy(e),this.renderer=null},r._plugins=[],r}(),Kd=function(){function r(){}return r.init=function(e){var t=this;Object.defineProperty(this,"resizeTo",{set:function(i){self.removeEventListener("resize",this.queueResize),this._resizeTo=i,i&&(self.addEventListener("resize",this.queueResize),this.resize())},get:function(){return this._resizeTo}}),this.queueResize=function(){!t._resizeTo||(t.cancelResize(),t._resizeId=requestAnimationFrame(function(){return t.resize()}))},this.cancelResize=function(){t._resizeId&&(cancelAnimationFrame(t._resizeId),t._resizeId=null)},this.resize=function(){if(!!t._resizeTo){t.cancelResize();var i,n;if(t._resizeTo===self)i=self.innerWidth,n=self.innerHeight;else{var o=t._resizeTo,a=o.clientWidth,s=o.clientHeight;i=a,n=s}t.renderer.resize(i,n)}},this._resizeId=null,this._resizeTo=null,this.resizeTo=e.resizeTo||null},r.destroy=function(){self.removeEventListener("resize",this.queueResize),this.cancelResize(),this.cancelResize=null,this.queueResize=null,this.resizeTo=null,this.resize=null},r}();$i.registerPlugin(Kd);/*!
 * @pixi/extract - v6.1.3
 * Compiled Mon, 13 Sep 2021 15:29:31 UTC
 *
 * @pixi/extract is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var is=new W,ns=4,Zd=function(){function r(e){this.renderer=e}return r.prototype.image=function(e,t,i){var n=new Image;return n.src=this.base64(e,t,i),n},r.prototype.base64=function(e,t,i){return this.canvas(e).toDataURL(t,i)},r.prototype.canvas=function(e){var t=this.renderer,i,n,o=!1,a,s=!1;e&&(e instanceof se?a=e:(a=this.renderer.generateTexture(e),s=!0)),a?(i=a.baseTexture.resolution,n=a.frame,o=!1,t.renderTexture.bind(a)):(i=this.renderer.resolution,o=!0,n=is,n.width=this.renderer.width,n.height=this.renderer.height,t.renderTexture.bind(null));var u=Math.floor(n.width*i+1e-4),h=Math.floor(n.height*i+1e-4),l=new sa(u,h,1),f=new Uint8Array(ns*u*h),c=t.gl;c.readPixels(n.x*i,n.y*i,u,h,c.RGBA,c.UNSIGNED_BYTE,f);var d=l.context.getImageData(0,0,u,h);if(r.arrayPostDivide(f,d.data),l.context.putImageData(d,0,0),o){var p=new sa(l.width,l.height,1);p.context.scale(1,-1),p.context.drawImage(l.canvas,0,-h),l.destroy(),l=p}return s&&a.destroy(!0),l.canvas},r.prototype.pixels=function(e){var t=this.renderer,i,n,o,a=!1;e&&(e instanceof se?o=e:(o=this.renderer.generateTexture(e),a=!0)),o?(i=o.baseTexture.resolution,n=o.frame,t.renderTexture.bind(o)):(i=t.resolution,n=is,n.width=t.width,n.height=t.height,t.renderTexture.bind(null));var s=n.width*i,u=n.height*i,h=new Uint8Array(ns*s*u),l=t.gl;return l.readPixels(n.x*i,n.y*i,s,u,l.RGBA,l.UNSIGNED_BYTE,h),a&&o.destroy(!0),r.arrayPostDivide(h,h),h},r.prototype.destroy=function(){this.renderer=null},r.arrayPostDivide=function(e,t){for(var i=0;i<e.length;i+=4){var n=t[i+3]=e[i+3];n!==0?(t[i]=Math.round(Math.min(e[i]*255/n,255)),t[i+1]=Math.round(Math.min(e[i+1]*255/n,255)),t[i+2]=Math.round(Math.min(e[i+2]*255/n,255))):(t[i]=e[i],t[i+1]=e[i+1],t[i+2]=e[i+2])}},r}();/*!
 * @pixi/loaders - v6.1.3
 * Compiled Mon, 13 Sep 2021 15:29:31 UTC
 *
 * @pixi/loaders is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Ar=function(){function r(e,t,i){t===void 0&&(t=!1),this._fn=e,this._once=t,this._thisArg=i,this._next=this._prev=this._owner=null}return r.prototype.detach=function(){return this._owner===null?!1:(this._owner.detach(this),!0)},r}();function os(r,e){return r._head?(r._tail._next=e,e._prev=r._tail,r._tail=e):(r._head=e,r._tail=e),e._owner=r,e}var $t=function(){function r(){this._head=this._tail=void 0}return r.prototype.handlers=function(e){e===void 0&&(e=!1);var t=this._head;if(e)return!!t;for(var i=[];t;)i.push(t),t=t._next;return i},r.prototype.has=function(e){if(!(e instanceof Ar))throw new Error("MiniSignal#has(): First arg must be a SignalBinding object.");return e._owner===this},r.prototype.dispatch=function(){for(var e=arguments,t=[],i=0;i<arguments.length;i++)t[i]=e[i];var n=this._head;if(!n)return!1;for(;n;)n._once&&this.detach(n),n._fn.apply(n._thisArg,t),n=n._next;return!0},r.prototype.add=function(e,t){if(t===void 0&&(t=null),typeof e!="function")throw new Error("MiniSignal#add(): First arg must be a Function.");return os(this,new Ar(e,!1,t))},r.prototype.once=function(e,t){if(t===void 0&&(t=null),typeof e!="function")throw new Error("MiniSignal#once(): First arg must be a Function.");return os(this,new Ar(e,!0,t))},r.prototype.detach=function(e){if(!(e instanceof Ar))throw new Error("MiniSignal#detach(): First arg must be a SignalBinding object.");return e._owner!==this?this:(e._prev&&(e._prev._next=e._next),e._next&&(e._next._prev=e._prev),e===this._head?(this._head=e._next,e._next===null&&(this._tail=null)):e===this._tail&&(this._tail=e._prev,this._tail._next=null),e._owner=null,this)},r.prototype.detachAll=function(){var e=this._head;if(!e)return this;for(this._head=this._tail=null;e;)e._owner=null,e=e._next;return this},r}();function as(r,e){e=e||{};for(var t={key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}},i=t.parser[e.strictMode?"strict":"loose"].exec(r),n={},o=14;o--;)n[t.key[o]]=i[o]||"";return n[t.q.name]={},n[t.key[12]].replace(t.q.parser,function(a,s,u){s&&(n[t.q.name][s]=u)}),n}var Jd=!!(self.XDomainRequest&&!("withCredentials"in new XMLHttpRequest)),Or=null,Qd=0,ss=200,tp=204,ep=1223,rp=2;function us(){}function hs(r,e,t){e&&e.indexOf(".")===0&&(e=e.substring(1)),!!e&&(r[e]=t)}function Wi(r){return r.toString().replace("object ","")}var ht=function(){function r(e,t,i){if(this._dequeue=us,this._onLoadBinding=null,this._elementTimer=0,this._boundComplete=null,this._boundOnError=null,this._boundOnProgress=null,this._boundOnTimeout=null,this._boundXhrOnError=null,this._boundXhrOnTimeout=null,this._boundXhrOnAbort=null,this._boundXhrOnLoad=null,typeof e!="string"||typeof t!="string")throw new Error("Both name and url are required for constructing a resource.");i=i||{},this._flags=0,this._setFlag(r.STATUS_FLAGS.DATA_URL,t.indexOf("data:")===0),this.name=e,this.url=t,this.extension=this._getExtension(),this.data=null,this.crossOrigin=i.crossOrigin===!0?"anonymous":i.crossOrigin,this.timeout=i.timeout||0,this.loadType=i.loadType||this._determineLoadType(),this.xhrType=i.xhrType,this.metadata=i.metadata||{},this.error=null,this.xhr=null,this.children=[],this.type=r.TYPE.UNKNOWN,this.progressChunk=0,this._dequeue=us,this._onLoadBinding=null,this._elementTimer=0,this._boundComplete=this.complete.bind(this),this._boundOnError=this._onError.bind(this),this._boundOnProgress=this._onProgress.bind(this),this._boundOnTimeout=this._onTimeout.bind(this),this._boundXhrOnError=this._xhrOnError.bind(this),this._boundXhrOnTimeout=this._xhrOnTimeout.bind(this),this._boundXhrOnAbort=this._xhrOnAbort.bind(this),this._boundXhrOnLoad=this._xhrOnLoad.bind(this),this.onStart=new $t,this.onProgress=new $t,this.onComplete=new $t,this.onAfterMiddleware=new $t}return r.setExtensionLoadType=function(e,t){hs(r._loadTypeMap,e,t)},r.setExtensionXhrType=function(e,t){hs(r._xhrTypeMap,e,t)},Object.defineProperty(r.prototype,"isDataUrl",{get:function(){return this._hasFlag(r.STATUS_FLAGS.DATA_URL)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"isComplete",{get:function(){return this._hasFlag(r.STATUS_FLAGS.COMPLETE)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"isLoading",{get:function(){return this._hasFlag(r.STATUS_FLAGS.LOADING)},enumerable:!1,configurable:!0}),r.prototype.complete=function(){this._clearEvents(),this._finish()},r.prototype.abort=function(e){if(!this.error){if(this.error=new Error(e),this._clearEvents(),this.xhr)this.xhr.abort();else if(this.xdr)this.xdr.abort();else if(this.data)if(this.data.src)this.data.src=r.EMPTY_GIF;else for(;this.data.firstChild;)this.data.removeChild(this.data.firstChild);this._finish()}},r.prototype.load=function(e){var t=this;if(!this.isLoading){if(this.isComplete){e&&setTimeout(function(){return e(t)},1);return}else e&&this.onComplete.once(e);switch(this._setFlag(r.STATUS_FLAGS.LOADING,!0),this.onStart.dispatch(this),(this.crossOrigin===!1||typeof this.crossOrigin!="string")&&(this.crossOrigin=this._determineCrossOrigin(this.url)),this.loadType){case r.LOAD_TYPE.IMAGE:this.type=r.TYPE.IMAGE,this._loadElement("image");break;case r.LOAD_TYPE.AUDIO:this.type=r.TYPE.AUDIO,this._loadSourceElement("audio");break;case r.LOAD_TYPE.VIDEO:this.type=r.TYPE.VIDEO,this._loadSourceElement("video");break;case r.LOAD_TYPE.XHR:default:Jd&&this.crossOrigin?this._loadXdr():this._loadXhr();break}}},r.prototype._hasFlag=function(e){return(this._flags&e)!=0},r.prototype._setFlag=function(e,t){this._flags=t?this._flags|e:this._flags&~e},r.prototype._clearEvents=function(){clearTimeout(this._elementTimer),this.data&&this.data.removeEventListener&&(this.data.removeEventListener("error",this._boundOnError,!1),this.data.removeEventListener("load",this._boundComplete,!1),this.data.removeEventListener("progress",this._boundOnProgress,!1),this.data.removeEventListener("canplaythrough",this._boundComplete,!1)),this.xhr&&(this.xhr.removeEventListener?(this.xhr.removeEventListener("error",this._boundXhrOnError,!1),this.xhr.removeEventListener("timeout",this._boundXhrOnTimeout,!1),this.xhr.removeEventListener("abort",this._boundXhrOnAbort,!1),this.xhr.removeEventListener("progress",this._boundOnProgress,!1),this.xhr.removeEventListener("load",this._boundXhrOnLoad,!1)):(this.xhr.onerror=null,this.xhr.ontimeout=null,this.xhr.onprogress=null,this.xhr.onload=null))},r.prototype._finish=function(){if(this.isComplete)throw new Error("Complete called again for an already completed resource.");this._setFlag(r.STATUS_FLAGS.COMPLETE,!0),this._setFlag(r.STATUS_FLAGS.LOADING,!1),this.onComplete.dispatch(this)},r.prototype._loadElement=function(e){this.metadata.loadElement?this.data=this.metadata.loadElement:e==="image"&&typeof self.Image!="undefined"?this.data=new Image:this.data=document.createElement(e),this.crossOrigin&&(this.data.crossOrigin=this.crossOrigin),this.metadata.skipSource||(this.data.src=this.url),this.data.addEventListener("error",this._boundOnError,!1),this.data.addEventListener("load",this._boundComplete,!1),this.data.addEventListener("progress",this._boundOnProgress,!1),this.timeout&&(this._elementTimer=setTimeout(this._boundOnTimeout,this.timeout))},r.prototype._loadSourceElement=function(e){if(this.metadata.loadElement?this.data=this.metadata.loadElement:e==="audio"&&typeof self.Audio!="undefined"?this.data=new Audio:this.data=document.createElement(e),this.data===null){this.abort("Unsupported element: "+e);return}if(this.crossOrigin&&(this.data.crossOrigin=this.crossOrigin),!this.metadata.skipSource)if(navigator.isCocoonJS)this.data.src=Array.isArray(this.url)?this.url[0]:this.url;else if(Array.isArray(this.url))for(var t=this.metadata.mimeType,i=0;i<this.url.length;++i)this.data.appendChild(this._createSource(e,this.url[i],Array.isArray(t)?t[i]:t));else{var t=this.metadata.mimeType;this.data.appendChild(this._createSource(e,this.url,Array.isArray(t)?t[0]:t))}this.data.addEventListener("error",this._boundOnError,!1),this.data.addEventListener("load",this._boundComplete,!1),this.data.addEventListener("progress",this._boundOnProgress,!1),this.data.addEventListener("canplaythrough",this._boundComplete,!1),this.data.load(),this.timeout&&(this._elementTimer=setTimeout(this._boundOnTimeout,this.timeout))},r.prototype._loadXhr=function(){typeof this.xhrType!="string"&&(this.xhrType=this._determineXhrType());var e=this.xhr=new XMLHttpRequest;e.open("GET",this.url,!0),e.timeout=this.timeout,this.xhrType===r.XHR_RESPONSE_TYPE.JSON||this.xhrType===r.XHR_RESPONSE_TYPE.DOCUMENT?e.responseType=r.XHR_RESPONSE_TYPE.TEXT:e.responseType=this.xhrType,e.addEventListener("error",this._boundXhrOnError,!1),e.addEventListener("timeout",this._boundXhrOnTimeout,!1),e.addEventListener("abort",this._boundXhrOnAbort,!1),e.addEventListener("progress",this._boundOnProgress,!1),e.addEventListener("load",this._boundXhrOnLoad,!1),e.send()},r.prototype._loadXdr=function(){typeof this.xhrType!="string"&&(this.xhrType=this._determineXhrType());var e=this.xhr=new self.XDomainRequest;e.timeout=this.timeout||5e3,e.onerror=this._boundXhrOnError,e.ontimeout=this._boundXhrOnTimeout,e.onprogress=this._boundOnProgress,e.onload=this._boundXhrOnLoad,e.open("GET",this.url,!0),setTimeout(function(){return e.send()},1)},r.prototype._createSource=function(e,t,i){i||(i=e+"/"+this._getExtension(t));var n=document.createElement("source");return n.src=t,n.type=i,n},r.prototype._onError=function(e){this.abort("Failed to load element using: "+e.target.nodeName)},r.prototype._onProgress=function(e){e&&e.lengthComputable&&this.onProgress.dispatch(this,e.loaded/e.total)},r.prototype._onTimeout=function(){this.abort("Load timed out.")},r.prototype._xhrOnError=function(){var e=this.xhr;this.abort(Wi(e)+" Request failed. Status: "+e.status+', text: "'+e.statusText+'"')},r.prototype._xhrOnTimeout=function(){var e=this.xhr;this.abort(Wi(e)+" Request timed out.")},r.prototype._xhrOnAbort=function(){var e=this.xhr;this.abort(Wi(e)+" Request was aborted by the user.")},r.prototype._xhrOnLoad=function(){var e=this.xhr,t="",i=typeof e.status=="undefined"?ss:e.status;(e.responseType===""||e.responseType==="text"||typeof e.responseType=="undefined")&&(t=e.responseText),i===Qd&&(t.length>0||e.responseType===r.XHR_RESPONSE_TYPE.BUFFER)?i=ss:i===ep&&(i=tp);var n=i/100|0;if(n===rp)if(this.xhrType===r.XHR_RESPONSE_TYPE.TEXT)this.data=t,this.type=r.TYPE.TEXT;else if(this.xhrType===r.XHR_RESPONSE_TYPE.JSON)try{this.data=JSON.parse(t),this.type=r.TYPE.JSON}catch(s){this.abort("Error trying to parse loaded json: "+s);return}else if(this.xhrType===r.XHR_RESPONSE_TYPE.DOCUMENT)try{if(self.DOMParser){var o=new DOMParser;this.data=o.parseFromString(t,"text/xml")}else{var a=document.createElement("div");a.innerHTML=t,this.data=a}this.type=r.TYPE.XML}catch(s){this.abort("Error trying to parse loaded xml: "+s);return}else this.data=e.response||t;else{this.abort("["+e.status+"] "+e.statusText+": "+e.responseURL);return}this.complete()},r.prototype._determineCrossOrigin=function(e,t){if(e.indexOf("data:")===0)return"";if(self.origin!==self.location.origin)return"anonymous";t=t||self.location,Or||(Or=document.createElement("a")),Or.href=e;var i=as(Or.href,{strictMode:!0}),n=!i.port&&t.port===""||i.port===t.port,o=i.protocol?i.protocol+":":"";return i.host!==t.hostname||!n||o!==t.protocol?"anonymous":""},r.prototype._determineXhrType=function(){return r._xhrTypeMap[this.extension]||r.XHR_RESPONSE_TYPE.TEXT},r.prototype._determineLoadType=function(){return r._loadTypeMap[this.extension]||r.LOAD_TYPE.XHR},r.prototype._getExtension=function(e){e===void 0&&(e=this.url);var t="";if(this.isDataUrl){var i=e.indexOf("/");t=e.substring(i+1,e.indexOf(";",i))}else{var n=e.indexOf("?"),o=e.indexOf("#"),a=Math.min(n>-1?n:e.length,o>-1?o:e.length);e=e.substring(0,a),t=e.substring(e.lastIndexOf(".")+1)}return t.toLowerCase()},r.prototype._getMimeFromXhrType=function(e){switch(e){case r.XHR_RESPONSE_TYPE.BUFFER:return"application/octet-binary";case r.XHR_RESPONSE_TYPE.BLOB:return"application/blob";case r.XHR_RESPONSE_TYPE.DOCUMENT:return"application/xml";case r.XHR_RESPONSE_TYPE.JSON:return"application/json";case r.XHR_RESPONSE_TYPE.DEFAULT:case r.XHR_RESPONSE_TYPE.TEXT:default:return"text/plain"}},r}();(function(r){(function(e){e[e.NONE=0]="NONE",e[e.DATA_URL=1]="DATA_URL",e[e.COMPLETE=2]="COMPLETE",e[e.LOADING=4]="LOADING"})(r.STATUS_FLAGS||(r.STATUS_FLAGS={})),function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.JSON=1]="JSON",e[e.XML=2]="XML",e[e.IMAGE=3]="IMAGE",e[e.AUDIO=4]="AUDIO",e[e.VIDEO=5]="VIDEO",e[e.TEXT=6]="TEXT"}(r.TYPE||(r.TYPE={})),function(e){e[e.XHR=1]="XHR",e[e.IMAGE=2]="IMAGE",e[e.AUDIO=3]="AUDIO",e[e.VIDEO=4]="VIDEO"}(r.LOAD_TYPE||(r.LOAD_TYPE={})),function(e){e.DEFAULT="text",e.BUFFER="arraybuffer",e.BLOB="blob",e.DOCUMENT="document",e.JSON="json",e.TEXT="text"}(r.XHR_RESPONSE_TYPE||(r.XHR_RESPONSE_TYPE={})),r._loadTypeMap={gif:r.LOAD_TYPE.IMAGE,png:r.LOAD_TYPE.IMAGE,bmp:r.LOAD_TYPE.IMAGE,jpg:r.LOAD_TYPE.IMAGE,jpeg:r.LOAD_TYPE.IMAGE,tif:r.LOAD_TYPE.IMAGE,tiff:r.LOAD_TYPE.IMAGE,webp:r.LOAD_TYPE.IMAGE,tga:r.LOAD_TYPE.IMAGE,svg:r.LOAD_TYPE.IMAGE,"svg+xml":r.LOAD_TYPE.IMAGE,mp3:r.LOAD_TYPE.AUDIO,ogg:r.LOAD_TYPE.AUDIO,wav:r.LOAD_TYPE.AUDIO,mp4:r.LOAD_TYPE.VIDEO,webm:r.LOAD_TYPE.VIDEO},r._xhrTypeMap={xhtml:r.XHR_RESPONSE_TYPE.DOCUMENT,html:r.XHR_RESPONSE_TYPE.DOCUMENT,htm:r.XHR_RESPONSE_TYPE.DOCUMENT,xml:r.XHR_RESPONSE_TYPE.DOCUMENT,tmx:r.XHR_RESPONSE_TYPE.DOCUMENT,svg:r.XHR_RESPONSE_TYPE.DOCUMENT,tsx:r.XHR_RESPONSE_TYPE.DOCUMENT,gif:r.XHR_RESPONSE_TYPE.BLOB,png:r.XHR_RESPONSE_TYPE.BLOB,bmp:r.XHR_RESPONSE_TYPE.BLOB,jpg:r.XHR_RESPONSE_TYPE.BLOB,jpeg:r.XHR_RESPONSE_TYPE.BLOB,tif:r.XHR_RESPONSE_TYPE.BLOB,tiff:r.XHR_RESPONSE_TYPE.BLOB,webp:r.XHR_RESPONSE_TYPE.BLOB,tga:r.XHR_RESPONSE_TYPE.BLOB,json:r.XHR_RESPONSE_TYPE.JSON,text:r.XHR_RESPONSE_TYPE.TEXT,txt:r.XHR_RESPONSE_TYPE.TEXT,ttf:r.XHR_RESPONSE_TYPE.BUFFER,otf:r.XHR_RESPONSE_TYPE.BUFFER},r.EMPTY_GIF="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="})(ht||(ht={}));function ce(){}function ip(r){return function(){for(var t=arguments,i=[],n=0;n<arguments.length;n++)i[n]=t[n];if(r===null)throw new Error("Callback was already called.");var o=r;r=null,o.apply(this,i)}}var np=function(){function r(e,t){this.data=e,this.callback=t}return r}(),Yi=function(){function r(e,t){var i=this;if(t===void 0&&(t=1),this.workers=0,this.saturated=ce,this.unsaturated=ce,this.empty=ce,this.drain=ce,this.error=ce,this.started=!1,this.paused=!1,this._tasks=[],this._insert=function(n,o,a){if(a&&typeof a!="function")throw new Error("task callback must be a function");if(i.started=!0,n==null&&i.idle()){setTimeout(function(){return i.drain()},1);return}var s=new np(n,typeof a=="function"?a:ce);o?i._tasks.unshift(s):i._tasks.push(s),setTimeout(i.process,1)},this.process=function(){for(;!i.paused&&i.workers<i.concurrency&&i._tasks.length;){var n=i._tasks.shift();i._tasks.length===0&&i.empty(),i.workers+=1,i.workers===i.concurrency&&i.saturated(),i._worker(n.data,ip(i._next(n)))}},this._worker=e,t===0)throw new Error("Concurrency must not be zero");this.concurrency=t,this.buffer=t/4}return r.prototype._next=function(e){var t=this;return function(){for(var i=arguments,n=[],o=0;o<arguments.length;o++)n[o]=i[o];t.workers-=1,e.callback.apply(e,n),n[0]!=null&&t.error(n[0],e.data),t.workers<=t.concurrency-t.buffer&&t.unsaturated(),t.idle()&&t.drain(),t.process()}},r.prototype.push=function(e,t){this._insert(e,!1,t)},r.prototype.kill=function(){this.workers=0,this.drain=ce,this.started=!1,this._tasks=[]},r.prototype.unshift=function(e,t){this._insert(e,!0,t)},r.prototype.length=function(){return this._tasks.length},r.prototype.running=function(){return this.workers},r.prototype.idle=function(){return this._tasks.length+this.workers===0},r.prototype.pause=function(){this.paused!==!0&&(this.paused=!0)},r.prototype.resume=function(){if(this.paused!==!1){this.paused=!1;for(var e=1;e<=this.concurrency;e++)this.process()}},r.eachSeries=function(e,t,i,n){var o=0,a=e.length;function s(u){if(u||o===a){i&&i(u);return}n?setTimeout(function(){t(e[o++],s)},1):t(e[o++],s)}s()},r.queue=function(e,t){return new r(e,t)},r}(),qi=100,op=/(#[\w-]+)?$/,Dt=function(){function r(e,t){var i=this;e===void 0&&(e=""),t===void 0&&(t=10),this._beforeMiddleware=[],this._afterMiddleware=[],this._resourcesParsing=[],this._boundLoadResource=function(u,h){return i._loadResource(u,h)},this.resources={},this.baseUrl=e,this.progress=0,this.loading=!1,this.defaultQueryString="",this._beforeMiddleware=[],this._afterMiddleware=[],this._resourcesParsing=[],this._boundLoadResource=function(u,h){return i._loadResource(u,h)},this._queue=Yi.queue(this._boundLoadResource,t),this._queue.pause(),this.resources={},this.onProgress=new $t,this.onError=new $t,this.onLoad=new $t,this.onStart=new $t,this.onComplete=new $t;for(var n=0;n<r._plugins.length;++n){var o=r._plugins[n],a=o.pre,s=o.use;a&&this.pre(a),s&&this.use(s)}this._protected=!1}return r.prototype._add=function(e,t,i,n){if(this.loading&&(!i||!i.parentResource))throw new Error("Cannot add resources while the loader is running.");if(this.resources[e])throw new Error('Resource named "'+e+'" already exists.');if(t=this._prepareUrl(t),this.resources[e]=new ht(e,t,i),typeof n=="function"&&this.resources[e].onAfterMiddleware.once(n),this.loading){for(var o=i.parentResource,a=[],s=0;s<o.children.length;++s)o.children[s].isComplete||a.push(o.children[s]);var u=o.progressChunk*(a.length+1),h=u/(a.length+2);o.children.push(this.resources[e]),o.progressChunk=h;for(var s=0;s<a.length;++s)a[s].progressChunk=h;this.resources[e].progressChunk=h}return this._queue.push(this.resources[e]),this},r.prototype.pre=function(e){return this._beforeMiddleware.push(e),this},r.prototype.use=function(e){return this._afterMiddleware.push(e),this},r.prototype.reset=function(){this.progress=0,this.loading=!1,this._queue.kill(),this._queue.pause();for(var e in this.resources){var t=this.resources[e];t._onLoadBinding&&t._onLoadBinding.detach(),t.isLoading&&t.abort("loader reset")}return this.resources={},this},r.prototype.load=function(e){if(typeof e=="function"&&this.onComplete.once(e),this.loading)return this;if(this._queue.idle())this._onStart(),this._onComplete();else{for(var t=this._queue._tasks.length,i=qi/t,n=0;n<this._queue._tasks.length;++n)this._queue._tasks[n].data.progressChunk=i;this._onStart(),this._queue.resume()}return this},Object.defineProperty(r.prototype,"concurrency",{get:function(){return this._queue.concurrency},set:function(e){this._queue.concurrency=e},enumerable:!1,configurable:!0}),r.prototype._prepareUrl=function(e){var t=as(e,{strictMode:!0}),i;if(t.protocol||!t.path||e.indexOf("//")===0?i=e:this.baseUrl.length&&this.baseUrl.lastIndexOf("/")!==this.baseUrl.length-1&&e.charAt(0)!=="/"?i=this.baseUrl+"/"+e:i=this.baseUrl+e,this.defaultQueryString){var n=op.exec(i)[0];i=i.substr(0,i.length-n.length),i.indexOf("?")!==-1?i+="&"+this.defaultQueryString:i+="?"+this.defaultQueryString,i+=n}return i},r.prototype._loadResource=function(e,t){var i=this;e._dequeue=t,Yi.eachSeries(this._beforeMiddleware,function(n,o){n.call(i,e,function(){o(e.isComplete?{}:null)})},function(){e.isComplete?i._onLoad(e):(e._onLoadBinding=e.onComplete.once(i._onLoad,i),e.load())},!0)},r.prototype._onStart=function(){this.progress=0,this.loading=!0,this.onStart.dispatch(this)},r.prototype._onComplete=function(){this.progress=qi,this.loading=!1,this.onComplete.dispatch(this,this.resources)},r.prototype._onLoad=function(e){var t=this;e._onLoadBinding=null,this._resourcesParsing.push(e),e._dequeue(),Yi.eachSeries(this._afterMiddleware,function(i,n){i.call(t,e,n)},function(){e.onAfterMiddleware.dispatch(e),t.progress=Math.min(qi,t.progress+e.progressChunk),t.onProgress.dispatch(t,e),e.error?t.onError.dispatch(e.error,t,e):t.onLoad.dispatch(t,e),t._resourcesParsing.splice(t._resourcesParsing.indexOf(e),1),t._queue.idle()&&t._resourcesParsing.length===0&&t._onComplete()},!0)},r.prototype.destroy=function(){this._protected||this.reset()},Object.defineProperty(r,"shared",{get:function(){var e=r._shared;return e||(e=new r,e._protected=!0,r._shared=e),e},enumerable:!1,configurable:!0}),r.registerPlugin=function(e){return r._plugins.push(e),e.add&&e.add(),r},r._plugins=[],r}();Dt.prototype.add=function(e,t,i,n){if(Array.isArray(e)){for(var o=0;o<e.length;++o)this.add(e[o]);return this}if(typeof e=="object"&&(i=e,n=t||i.callback||i.onComplete,t=i.url,e=i.name||i.key||i.url),typeof t!="string"&&(n=i,i=t,t=e),typeof t!="string")throw new Error("No url passed to add resource to loader.");return typeof i=="function"&&(n=i,i=null),this._add(e,t,i,n)};var ap=function(){function r(){}return r.init=function(e){e=Object.assign({sharedLoader:!1},e),this.loader=e.sharedLoader?Dt.shared:new Dt},r.destroy=function(){this.loader&&(this.loader.destroy(),this.loader=null)},r}(),sp=function(){function r(){}return r.add=function(){ht.setExtensionLoadType("svg",ht.LOAD_TYPE.XHR),ht.setExtensionXhrType("svg",ht.XHR_RESPONSE_TYPE.TEXT)},r.use=function(e,t){if(e.data&&(e.type===ht.TYPE.IMAGE||e.extension==="svg")){var i=e.data,n=e.url,o=e.name,a=e.metadata;L.fromLoader(i,n,o,a).then(function(s){e.texture=s,t()}).catch(t)}else t()},r}(),up="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function hp(r){for(var e="",t=0;t<r.length;){for(var i=[0,0,0],n=[0,0,0,0],o=0;o<i.length;++o)t<r.length?i[o]=r.charCodeAt(t++)&255:i[o]=0;n[0]=i[0]>>2,n[1]=(i[0]&3)<<4|i[1]>>4,n[2]=(i[1]&15)<<2|i[2]>>6,n[3]=i[2]&63;var a=t-(r.length-1);switch(a){case 2:n[3]=64,n[2]=64;break;case 1:n[3]=64;break}for(var o=0;o<n.length;++o)e+=up.charAt(n[o])}return e}var ls=self.URL||self.webkitURL;function lp(r,e){if(!r.data){e();return}if(r.xhr&&r.xhrType===ht.XHR_RESPONSE_TYPE.BLOB){if(!self.Blob||typeof r.data=="string"){var t=r.xhr.getResponseHeader("content-type");if(t&&t.indexOf("image")===0){r.data=new Image,r.data.src="data:"+t+";base64,"+hp(r.xhr.responseText),r.type=ht.TYPE.IMAGE,r.data.onload=function(){r.data.onload=null,e()};return}}else if(r.data.type.indexOf("image")===0){var i=ls.createObjectURL(r.data);r.blob=r.data,r.data=new Image,r.data.src=i,r.type=ht.TYPE.IMAGE,r.data.onload=function(){ls.revokeObjectURL(i),r.data.onload=null,e()};return}}e()}Dt.registerPlugin({use:lp});Dt.registerPlugin(sp);/*!
 * @pixi/compressed-textures - v6.1.3
 * Compiled Mon, 13 Sep 2021 15:29:31 UTC
 *
 * @pixi/compressed-textures is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var K,H;(function(r){r[r.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",r[r.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",r[r.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",r[r.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",r[r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT=35917]="COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT",r[r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT=35918]="COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT",r[r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT=35919]="COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT",r[r.COMPRESSED_SRGB_S3TC_DXT1_EXT=35916]="COMPRESSED_SRGB_S3TC_DXT1_EXT",r[r.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",r[r.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",r[r.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",r[r.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",r[r.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",r[r.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",r[r.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",r[r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC",r[r.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",r[r.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",r[r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG=35840]="COMPRESSED_RGB_PVRTC_4BPPV1_IMG",r[r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG=35842]="COMPRESSED_RGBA_PVRTC_4BPPV1_IMG",r[r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG=35841]="COMPRESSED_RGB_PVRTC_2BPPV1_IMG",r[r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG=35843]="COMPRESSED_RGBA_PVRTC_2BPPV1_IMG",r[r.COMPRESSED_RGB_ETC1_WEBGL=36196]="COMPRESSED_RGB_ETC1_WEBGL",r[r.COMPRESSED_RGB_ATC_WEBGL=35986]="COMPRESSED_RGB_ATC_WEBGL",r[r.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL=35986]="COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL",r[r.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL=34798]="COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL"})(H||(H={}));var Nr=(K={},K[H.COMPRESSED_RGB_S3TC_DXT1_EXT]=.5,K[H.COMPRESSED_RGBA_S3TC_DXT1_EXT]=.5,K[H.COMPRESSED_RGBA_S3TC_DXT3_EXT]=1,K[H.COMPRESSED_RGBA_S3TC_DXT5_EXT]=1,K[H.COMPRESSED_SRGB_S3TC_DXT1_EXT]=.5,K[H.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT]=.5,K[H.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT]=1,K[H.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT]=1,K[H.COMPRESSED_R11_EAC]=.5,K[H.COMPRESSED_SIGNED_R11_EAC]=.5,K[H.COMPRESSED_RG11_EAC]=1,K[H.COMPRESSED_SIGNED_RG11_EAC]=1,K[H.COMPRESSED_RGB8_ETC2]=.5,K[H.COMPRESSED_RGBA8_ETC2_EAC]=1,K[H.COMPRESSED_SRGB8_ETC2]=.5,K[H.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC]=1,K[H.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2]=.5,K[H.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2]=.5,K[H.COMPRESSED_RGB_PVRTC_4BPPV1_IMG]=.5,K[H.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG]=.5,K[H.COMPRESSED_RGB_PVRTC_2BPPV1_IMG]=.25,K[H.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG]=.25,K[H.COMPRESSED_RGB_ETC1_WEBGL]=.5,K[H.COMPRESSED_RGB_ATC_WEBGL]=.5,K[H.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL]=1,K[H.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL]=1,K);/*! *****************************************************************************
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
***************************************************************************** */var Ki=function(r,e){return Ki=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])},Ki(r,e)};function fs(r,e){Ki(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}function fp(r,e,t,i){return new(t||(t=Promise))(function(n,o){function a(h){try{u(i.next(h))}catch(l){o(l)}}function s(h){try{u(i.throw(h))}catch(l){o(l)}}function u(h){h.done?n(h.value):new t(function(l){l(h.value)}).then(a,s)}u((i=i.apply(r,e||[])).next())})}function cp(r,e){var t={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},i,n,o,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(h){return function(l){return u([h,l])}}function u(h){if(i)throw new TypeError("Generator is already executing.");for(;t;)try{if(i=1,n&&(o=h[0]&2?n.return:h[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,h[1])).done)return o;switch(n=0,o&&(h=[h[0]&2,o.value]),h[0]){case 0:case 1:o=h;break;case 4:return t.label++,{value:h[1],done:!1};case 5:t.label++,n=h[1],h=[0];continue;case 7:h=t.ops.pop(),t.trys.pop();continue;default:if(o=t.trys,!(o=o.length>0&&o[o.length-1])&&(h[0]===6||h[0]===2)){t=0;continue}if(h[0]===3&&(!o||h[1]>o[0]&&h[1]<o[3])){t.label=h[1];break}if(h[0]===6&&t.label<o[1]){t.label=o[1],o=h;break}if(o&&t.label<o[2]){t.label=o[2],t.ops.push(h);break}o[2]&&t.ops.pop(),t.trys.pop();continue}h=e.call(r,t)}catch(l){h=[6,l],n=0}finally{i=o=0}if(h[0]&5)throw h[1];return{value:h[0]?h[1]:void 0,done:!0}}}var dp=function(r){fs(e,r);function e(t,i){i===void 0&&(i={width:1,height:1,autoLoad:!0});var n=this,o,a;return typeof t=="string"?(o=t,a=new Uint8Array):(o=null,a=t),n=r.call(this,a,i)||this,n.origin=o,n.buffer=a?new zi(a):null,n.origin&&i.autoLoad!==!1&&n.load(),a&&a.length&&(n.loaded=!0,n.onBlobLoaded(n.buffer.rawBinaryData)),n}return e.prototype.onBlobLoaded=function(t){},e.prototype.load=function(){return fp(this,void 0,Promise,function(){var t,i,n;return cp(this,function(o){switch(o.label){case 0:return[4,fetch(this.origin)];case 1:return t=o.sent(),[4,t.blob()];case 2:return i=o.sent(),[4,i.arrayBuffer()];case 3:return n=o.sent(),this.data=new Uint32Array(n),this.buffer=new zi(n),this.loaded=!0,this.onBlobLoaded(n),this.update(),[2,this]}})})},e}(ke),Zi=function(r){fs(e,r);function e(t,i){var n=r.call(this,t,i)||this;return n.format=i.format,n.levels=i.levels||1,n._width=i.width,n._height=i.height,n._extension=e._formatToExtension(n.format),(i.levelBuffers||n.buffer)&&(n._levelBuffers=i.levelBuffers||e._createLevelBuffers(t instanceof Uint8Array?t:n.buffer.uint8View,n.format,n.levels,4,4,n.width,n.height)),n}return e.prototype.upload=function(t,i,n){var o=t.gl,a=t.context.extensions[this._extension];if(!a)throw new Error(this._extension+" textures are not supported on the current machine");if(!this._levelBuffers)return!1;for(var s=0,u=this.levels;s<u;s++){var h=this._levelBuffers[s],l=h.levelID,f=h.levelWidth,c=h.levelHeight,d=h.levelBuffer;o.compressedTexImage2D(o.TEXTURE_2D,l,this.format,f,c,0,d)}return!0},e.prototype.onBlobLoaded=function(){this._levelBuffers=e._createLevelBuffers(this.buffer.uint8View,this.format,this.levels,4,4,this.width,this.height)},e._formatToExtension=function(t){if(t>=33776&&t<=33779)return"s3tc";if(t>=37488&&t<=37497)return"etc";if(t>=35840&&t<=35843)return"pvrtc";if(t>=36196)return"etc1";if(t>=35986&&t<=34798)return"atc";throw new Error("Invalid (compressed) texture format given!")},e._createLevelBuffers=function(t,i,n,o,a,s,u){for(var h=new Array(n),l=t.byteOffset,f=s,c=u,d=f+o-1&~(o-1),p=c+a-1&~(a-1),_=d*p*Nr[i],v=0;v<n;v++)h[v]={levelID:v,levelWidth:n>1?f:d,levelHeight:n>1?c:p,levelBuffer:new Uint8Array(t.buffer,l,_)},l+=_,f=f>>1||1,c=c>>1||1,d=f+o-1&~(o-1),p=c+a-1&~(a-1),_=d*p*Nr[i];return h},e}(dp),pp=function(){function r(){}return r.use=function(e,t){var i=e.data,n=this;if(e.type===ht.TYPE.JSON&&i&&i.cacheID&&i.textures){for(var o=i.textures,a=void 0,s=void 0,u=0,h=o.length;u<h;u++){var l=o[u],f=l.src,c=l.format;if(c||(s=f),r.textureFormats[c]){a=f;break}}if(a=a||s,!a){t(new Error("Cannot load compressed-textures in "+e.url+", make sure you provide a fallback"));return}if(a===e.url){t(new Error("URL of compressed texture cannot be the same as the manifest's URL"));return}var d={crossOrigin:e.crossOrigin,metadata:e.metadata.imageMetadata,parentResource:e},p=ye.resolve(e.url.replace(n.baseUrl,""),a),_=i.cacheID;n.add(_,p,d,function(v){if(v.error){t(v.error);return}var g=v.texture,y=g===void 0?null:g,x=v.textures,T=x===void 0?{}:x;Object.assign(e,{texture:y,textures:T}),t()})}else t()},r.add=function(){var e=document.createElement("canvas"),t=e.getContext("webgl");if(!t){console.warn("WebGL not available for compressed textures. Silently failing.");return}var i={s3tc:t.getExtension("WEBGL_compressed_texture_s3tc"),s3tc_sRGB:t.getExtension("WEBGL_compressed_texture_s3tc_srgb"),etc:t.getExtension("WEBGL_compressed_texture_etc"),etc1:t.getExtension("WEBGL_compressed_texture_etc1"),pvrtc:t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),atc:t.getExtension("WEBGL_compressed_texture_atc"),astc:t.getExtension("WEBGL_compressed_texture_astc")};r.textureExtensions=i,r.textureFormats={};for(var n in i){var o=i[n];!o||Object.assign(r.textureFormats,Object.getPrototypeOf(o))}},r}();function cs(r,e,t){var i={textures:{},texture:null};if(!e)return i;var n=e.map(function(o){return new L(new Z(o,Object.assign({mipmap:Ut.OFF,alphaMode:Xt.NO_PREMULTIPLIED_ALPHA},t)))});return n.forEach(function(o,a){var s=o.baseTexture,u=r+"-"+(a+1);Z.addToCache(s,u),L.addToCache(o,u),a===0&&(Z.addToCache(s,r),L.addToCache(o,r),i.texture=o),i.textures[u]=o}),i}var Ve,St;ht.setExtensionXhrType("dds",ht.XHR_RESPONSE_TYPE.BUFFER);var Ji=4,Fr=124,vp=32,ds=20,_p=542327876,Ur={SIZE:1,FLAGS:2,HEIGHT:3,WIDTH:4,MIPMAP_COUNT:7,PIXEL_FORMAT:19},mp={SIZE:0,FLAGS:1,FOURCC:2,RGB_BITCOUNT:3,R_BIT_MASK:4,G_BIT_MASK:5,B_BIT_MASK:6,A_BIT_MASK:7},Lr={DXGI_FORMAT:0,RESOURCE_DIMENSION:1,MISC_FLAG:2,ARRAY_SIZE:3,MISC_FLAGS2:4},Rt;(function(r){r[r.DXGI_FORMAT_UNKNOWN=0]="DXGI_FORMAT_UNKNOWN",r[r.DXGI_FORMAT_R32G32B32A32_TYPELESS=1]="DXGI_FORMAT_R32G32B32A32_TYPELESS",r[r.DXGI_FORMAT_R32G32B32A32_FLOAT=2]="DXGI_FORMAT_R32G32B32A32_FLOAT",r[r.DXGI_FORMAT_R32G32B32A32_UINT=3]="DXGI_FORMAT_R32G32B32A32_UINT",r[r.DXGI_FORMAT_R32G32B32A32_SINT=4]="DXGI_FORMAT_R32G32B32A32_SINT",r[r.DXGI_FORMAT_R32G32B32_TYPELESS=5]="DXGI_FORMAT_R32G32B32_TYPELESS",r[r.DXGI_FORMAT_R32G32B32_FLOAT=6]="DXGI_FORMAT_R32G32B32_FLOAT",r[r.DXGI_FORMAT_R32G32B32_UINT=7]="DXGI_FORMAT_R32G32B32_UINT",r[r.DXGI_FORMAT_R32G32B32_SINT=8]="DXGI_FORMAT_R32G32B32_SINT",r[r.DXGI_FORMAT_R16G16B16A16_TYPELESS=9]="DXGI_FORMAT_R16G16B16A16_TYPELESS",r[r.DXGI_FORMAT_R16G16B16A16_FLOAT=10]="DXGI_FORMAT_R16G16B16A16_FLOAT",r[r.DXGI_FORMAT_R16G16B16A16_UNORM=11]="DXGI_FORMAT_R16G16B16A16_UNORM",r[r.DXGI_FORMAT_R16G16B16A16_UINT=12]="DXGI_FORMAT_R16G16B16A16_UINT",r[r.DXGI_FORMAT_R16G16B16A16_SNORM=13]="DXGI_FORMAT_R16G16B16A16_SNORM",r[r.DXGI_FORMAT_R16G16B16A16_SINT=14]="DXGI_FORMAT_R16G16B16A16_SINT",r[r.DXGI_FORMAT_R32G32_TYPELESS=15]="DXGI_FORMAT_R32G32_TYPELESS",r[r.DXGI_FORMAT_R32G32_FLOAT=16]="DXGI_FORMAT_R32G32_FLOAT",r[r.DXGI_FORMAT_R32G32_UINT=17]="DXGI_FORMAT_R32G32_UINT",r[r.DXGI_FORMAT_R32G32_SINT=18]="DXGI_FORMAT_R32G32_SINT",r[r.DXGI_FORMAT_R32G8X24_TYPELESS=19]="DXGI_FORMAT_R32G8X24_TYPELESS",r[r.DXGI_FORMAT_D32_FLOAT_S8X24_UINT=20]="DXGI_FORMAT_D32_FLOAT_S8X24_UINT",r[r.DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS=21]="DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS",r[r.DXGI_FORMAT_X32_TYPELESS_G8X24_UINT=22]="DXGI_FORMAT_X32_TYPELESS_G8X24_UINT",r[r.DXGI_FORMAT_R10G10B10A2_TYPELESS=23]="DXGI_FORMAT_R10G10B10A2_TYPELESS",r[r.DXGI_FORMAT_R10G10B10A2_UNORM=24]="DXGI_FORMAT_R10G10B10A2_UNORM",r[r.DXGI_FORMAT_R10G10B10A2_UINT=25]="DXGI_FORMAT_R10G10B10A2_UINT",r[r.DXGI_FORMAT_R11G11B10_FLOAT=26]="DXGI_FORMAT_R11G11B10_FLOAT",r[r.DXGI_FORMAT_R8G8B8A8_TYPELESS=27]="DXGI_FORMAT_R8G8B8A8_TYPELESS",r[r.DXGI_FORMAT_R8G8B8A8_UNORM=28]="DXGI_FORMAT_R8G8B8A8_UNORM",r[r.DXGI_FORMAT_R8G8B8A8_UNORM_SRGB=29]="DXGI_FORMAT_R8G8B8A8_UNORM_SRGB",r[r.DXGI_FORMAT_R8G8B8A8_UINT=30]="DXGI_FORMAT_R8G8B8A8_UINT",r[r.DXGI_FORMAT_R8G8B8A8_SNORM=31]="DXGI_FORMAT_R8G8B8A8_SNORM",r[r.DXGI_FORMAT_R8G8B8A8_SINT=32]="DXGI_FORMAT_R8G8B8A8_SINT",r[r.DXGI_FORMAT_R16G16_TYPELESS=33]="DXGI_FORMAT_R16G16_TYPELESS",r[r.DXGI_FORMAT_R16G16_FLOAT=34]="DXGI_FORMAT_R16G16_FLOAT",r[r.DXGI_FORMAT_R16G16_UNORM=35]="DXGI_FORMAT_R16G16_UNORM",r[r.DXGI_FORMAT_R16G16_UINT=36]="DXGI_FORMAT_R16G16_UINT",r[r.DXGI_FORMAT_R16G16_SNORM=37]="DXGI_FORMAT_R16G16_SNORM",r[r.DXGI_FORMAT_R16G16_SINT=38]="DXGI_FORMAT_R16G16_SINT",r[r.DXGI_FORMAT_R32_TYPELESS=39]="DXGI_FORMAT_R32_TYPELESS",r[r.DXGI_FORMAT_D32_FLOAT=40]="DXGI_FORMAT_D32_FLOAT",r[r.DXGI_FORMAT_R32_FLOAT=41]="DXGI_FORMAT_R32_FLOAT",r[r.DXGI_FORMAT_R32_UINT=42]="DXGI_FORMAT_R32_UINT",r[r.DXGI_FORMAT_R32_SINT=43]="DXGI_FORMAT_R32_SINT",r[r.DXGI_FORMAT_R24G8_TYPELESS=44]="DXGI_FORMAT_R24G8_TYPELESS",r[r.DXGI_FORMAT_D24_UNORM_S8_UINT=45]="DXGI_FORMAT_D24_UNORM_S8_UINT",r[r.DXGI_FORMAT_R24_UNORM_X8_TYPELESS=46]="DXGI_FORMAT_R24_UNORM_X8_TYPELESS",r[r.DXGI_FORMAT_X24_TYPELESS_G8_UINT=47]="DXGI_FORMAT_X24_TYPELESS_G8_UINT",r[r.DXGI_FORMAT_R8G8_TYPELESS=48]="DXGI_FORMAT_R8G8_TYPELESS",r[r.DXGI_FORMAT_R8G8_UNORM=49]="DXGI_FORMAT_R8G8_UNORM",r[r.DXGI_FORMAT_R8G8_UINT=50]="DXGI_FORMAT_R8G8_UINT",r[r.DXGI_FORMAT_R8G8_SNORM=51]="DXGI_FORMAT_R8G8_SNORM",r[r.DXGI_FORMAT_R8G8_SINT=52]="DXGI_FORMAT_R8G8_SINT",r[r.DXGI_FORMAT_R16_TYPELESS=53]="DXGI_FORMAT_R16_TYPELESS",r[r.DXGI_FORMAT_R16_FLOAT=54]="DXGI_FORMAT_R16_FLOAT",r[r.DXGI_FORMAT_D16_UNORM=55]="DXGI_FORMAT_D16_UNORM",r[r.DXGI_FORMAT_R16_UNORM=56]="DXGI_FORMAT_R16_UNORM",r[r.DXGI_FORMAT_R16_UINT=57]="DXGI_FORMAT_R16_UINT",r[r.DXGI_FORMAT_R16_SNORM=58]="DXGI_FORMAT_R16_SNORM",r[r.DXGI_FORMAT_R16_SINT=59]="DXGI_FORMAT_R16_SINT",r[r.DXGI_FORMAT_R8_TYPELESS=60]="DXGI_FORMAT_R8_TYPELESS",r[r.DXGI_FORMAT_R8_UNORM=61]="DXGI_FORMAT_R8_UNORM",r[r.DXGI_FORMAT_R8_UINT=62]="DXGI_FORMAT_R8_UINT",r[r.DXGI_FORMAT_R8_SNORM=63]="DXGI_FORMAT_R8_SNORM",r[r.DXGI_FORMAT_R8_SINT=64]="DXGI_FORMAT_R8_SINT",r[r.DXGI_FORMAT_A8_UNORM=65]="DXGI_FORMAT_A8_UNORM",r[r.DXGI_FORMAT_R1_UNORM=66]="DXGI_FORMAT_R1_UNORM",r[r.DXGI_FORMAT_R9G9B9E5_SHAREDEXP=67]="DXGI_FORMAT_R9G9B9E5_SHAREDEXP",r[r.DXGI_FORMAT_R8G8_B8G8_UNORM=68]="DXGI_FORMAT_R8G8_B8G8_UNORM",r[r.DXGI_FORMAT_G8R8_G8B8_UNORM=69]="DXGI_FORMAT_G8R8_G8B8_UNORM",r[r.DXGI_FORMAT_BC1_TYPELESS=70]="DXGI_FORMAT_BC1_TYPELESS",r[r.DXGI_FORMAT_BC1_UNORM=71]="DXGI_FORMAT_BC1_UNORM",r[r.DXGI_FORMAT_BC1_UNORM_SRGB=72]="DXGI_FORMAT_BC1_UNORM_SRGB",r[r.DXGI_FORMAT_BC2_TYPELESS=73]="DXGI_FORMAT_BC2_TYPELESS",r[r.DXGI_FORMAT_BC2_UNORM=74]="DXGI_FORMAT_BC2_UNORM",r[r.DXGI_FORMAT_BC2_UNORM_SRGB=75]="DXGI_FORMAT_BC2_UNORM_SRGB",r[r.DXGI_FORMAT_BC3_TYPELESS=76]="DXGI_FORMAT_BC3_TYPELESS",r[r.DXGI_FORMAT_BC3_UNORM=77]="DXGI_FORMAT_BC3_UNORM",r[r.DXGI_FORMAT_BC3_UNORM_SRGB=78]="DXGI_FORMAT_BC3_UNORM_SRGB",r[r.DXGI_FORMAT_BC4_TYPELESS=79]="DXGI_FORMAT_BC4_TYPELESS",r[r.DXGI_FORMAT_BC4_UNORM=80]="DXGI_FORMAT_BC4_UNORM",r[r.DXGI_FORMAT_BC4_SNORM=81]="DXGI_FORMAT_BC4_SNORM",r[r.DXGI_FORMAT_BC5_TYPELESS=82]="DXGI_FORMAT_BC5_TYPELESS",r[r.DXGI_FORMAT_BC5_UNORM=83]="DXGI_FORMAT_BC5_UNORM",r[r.DXGI_FORMAT_BC5_SNORM=84]="DXGI_FORMAT_BC5_SNORM",r[r.DXGI_FORMAT_B5G6R5_UNORM=85]="DXGI_FORMAT_B5G6R5_UNORM",r[r.DXGI_FORMAT_B5G5R5A1_UNORM=86]="DXGI_FORMAT_B5G5R5A1_UNORM",r[r.DXGI_FORMAT_B8G8R8A8_UNORM=87]="DXGI_FORMAT_B8G8R8A8_UNORM",r[r.DXGI_FORMAT_B8G8R8X8_UNORM=88]="DXGI_FORMAT_B8G8R8X8_UNORM",r[r.DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM=89]="DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM",r[r.DXGI_FORMAT_B8G8R8A8_TYPELESS=90]="DXGI_FORMAT_B8G8R8A8_TYPELESS",r[r.DXGI_FORMAT_B8G8R8A8_UNORM_SRGB=91]="DXGI_FORMAT_B8G8R8A8_UNORM_SRGB",r[r.DXGI_FORMAT_B8G8R8X8_TYPELESS=92]="DXGI_FORMAT_B8G8R8X8_TYPELESS",r[r.DXGI_FORMAT_B8G8R8X8_UNORM_SRGB=93]="DXGI_FORMAT_B8G8R8X8_UNORM_SRGB",r[r.DXGI_FORMAT_BC6H_TYPELESS=94]="DXGI_FORMAT_BC6H_TYPELESS",r[r.DXGI_FORMAT_BC6H_UF16=95]="DXGI_FORMAT_BC6H_UF16",r[r.DXGI_FORMAT_BC6H_SF16=96]="DXGI_FORMAT_BC6H_SF16",r[r.DXGI_FORMAT_BC7_TYPELESS=97]="DXGI_FORMAT_BC7_TYPELESS",r[r.DXGI_FORMAT_BC7_UNORM=98]="DXGI_FORMAT_BC7_UNORM",r[r.DXGI_FORMAT_BC7_UNORM_SRGB=99]="DXGI_FORMAT_BC7_UNORM_SRGB",r[r.DXGI_FORMAT_AYUV=100]="DXGI_FORMAT_AYUV",r[r.DXGI_FORMAT_Y410=101]="DXGI_FORMAT_Y410",r[r.DXGI_FORMAT_Y416=102]="DXGI_FORMAT_Y416",r[r.DXGI_FORMAT_NV12=103]="DXGI_FORMAT_NV12",r[r.DXGI_FORMAT_P010=104]="DXGI_FORMAT_P010",r[r.DXGI_FORMAT_P016=105]="DXGI_FORMAT_P016",r[r.DXGI_FORMAT_420_OPAQUE=106]="DXGI_FORMAT_420_OPAQUE",r[r.DXGI_FORMAT_YUY2=107]="DXGI_FORMAT_YUY2",r[r.DXGI_FORMAT_Y210=108]="DXGI_FORMAT_Y210",r[r.DXGI_FORMAT_Y216=109]="DXGI_FORMAT_Y216",r[r.DXGI_FORMAT_NV11=110]="DXGI_FORMAT_NV11",r[r.DXGI_FORMAT_AI44=111]="DXGI_FORMAT_AI44",r[r.DXGI_FORMAT_IA44=112]="DXGI_FORMAT_IA44",r[r.DXGI_FORMAT_P8=113]="DXGI_FORMAT_P8",r[r.DXGI_FORMAT_A8P8=114]="DXGI_FORMAT_A8P8",r[r.DXGI_FORMAT_B4G4R4A4_UNORM=115]="DXGI_FORMAT_B4G4R4A4_UNORM",r[r.DXGI_FORMAT_P208=116]="DXGI_FORMAT_P208",r[r.DXGI_FORMAT_V208=117]="DXGI_FORMAT_V208",r[r.DXGI_FORMAT_V408=118]="DXGI_FORMAT_V408",r[r.DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE=119]="DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE",r[r.DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE=120]="DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE",r[r.DXGI_FORMAT_FORCE_UINT=121]="DXGI_FORMAT_FORCE_UINT"})(Rt||(Rt={}));var Qi;(function(r){r[r.DDS_DIMENSION_TEXTURE1D=2]="DDS_DIMENSION_TEXTURE1D",r[r.DDS_DIMENSION_TEXTURE2D=3]="DDS_DIMENSION_TEXTURE2D",r[r.DDS_DIMENSION_TEXTURE3D=6]="DDS_DIMENSION_TEXTURE3D"})(Qi||(Qi={}));var gp=1,yp=2,xp=4,bp=64,Tp=512,Ep=131072,Cp=827611204,wp=861165636,Pp=894720068,Ip=808540228,Sp=4,Rp=(Ve={},Ve[Cp]=H.COMPRESSED_RGBA_S3TC_DXT1_EXT,Ve[wp]=H.COMPRESSED_RGBA_S3TC_DXT3_EXT,Ve[Pp]=H.COMPRESSED_RGBA_S3TC_DXT5_EXT,Ve),Ap=(St={},St[Rt.DXGI_FORMAT_BC1_TYPELESS]=H.COMPRESSED_RGBA_S3TC_DXT1_EXT,St[Rt.DXGI_FORMAT_BC1_UNORM]=H.COMPRESSED_RGBA_S3TC_DXT1_EXT,St[Rt.DXGI_FORMAT_BC2_TYPELESS]=H.COMPRESSED_RGBA_S3TC_DXT3_EXT,St[Rt.DXGI_FORMAT_BC2_UNORM]=H.COMPRESSED_RGBA_S3TC_DXT3_EXT,St[Rt.DXGI_FORMAT_BC3_TYPELESS]=H.COMPRESSED_RGBA_S3TC_DXT5_EXT,St[Rt.DXGI_FORMAT_BC3_UNORM]=H.COMPRESSED_RGBA_S3TC_DXT5_EXT,St[Rt.DXGI_FORMAT_BC1_UNORM_SRGB]=H.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT,St[Rt.DXGI_FORMAT_BC2_UNORM_SRGB]=H.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT,St[Rt.DXGI_FORMAT_BC3_UNORM_SRGB]=H.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT,St),Op=function(){function r(){}return r.use=function(e,t){if(e.extension==="dds"&&e.data)try{Object.assign(e,cs(e.name||e.url,r.parse(e.data),e.metadata))}catch(i){t(i);return}t()},r.parse=function(e){var t=new Uint32Array(e),i=t[0];if(i!==_p)throw new Error("Invalid DDS file magic word");var n=new Uint32Array(e,0,Fr/Uint32Array.BYTES_PER_ELEMENT),o=n[Ur.HEIGHT],a=n[Ur.WIDTH],s=n[Ur.MIPMAP_COUNT],u=new Uint32Array(e,Ur.PIXEL_FORMAT*Uint32Array.BYTES_PER_ELEMENT,vp/Uint32Array.BYTES_PER_ELEMENT),h=u[gp];if(h&xp){var l=u[mp.FOURCC];if(l!==Ip){var f=Rp[l],c=Ji+Fr,d=new Uint8Array(e,c),p=new Zi(d,{format:f,width:a,height:o,levels:s});return[p]}var _=Ji+Fr,v=new Uint32Array(t.buffer,_,ds/Uint32Array.BYTES_PER_ELEMENT),g=v[Lr.DXGI_FORMAT],y=v[Lr.RESOURCE_DIMENSION],x=v[Lr.MISC_FLAG],T=v[Lr.ARRAY_SIZE],m=Ap[g];if(m===void 0)throw new Error("DDSLoader cannot parse texture data with DXGI format "+g);if(x===Sp)throw new Error("DDSLoader does not support cubemap textures");if(y===Qi.DDS_DIMENSION_TEXTURE3D)throw new Error("DDSLoader does not supported 3D texture data");var b=new Array,w=Ji+Fr+ds;if(T===1)b.push(new Uint8Array(e,w));else{for(var S=Nr[m],E=0,C=a,U=o,N=0;N<s;N++){var V=Math.max(1,C+3&~3),J=Math.max(1,U+3&~3),A=V*J*S;E+=A,C=C>>>1,U=U>>>1}for(var I=w,N=0;N<T;N++)b.push(new Uint8Array(e,I,E)),I+=E}return b.map(function(j){return new Zi(j,{format:m,width:a,height:o,levels:s})})}throw h&bp?new Error("DDSLoader does not support uncompressed texture data."):h&Tp?new Error("DDSLoader does not supported YUV uncompressed texture data."):h&Ep?new Error("DDSLoader does not support single-channel (lumninance) texture data!"):h&yp?new Error("DDSLoader does not support single-channel (alpha) texture data!"):new Error("DDSLoader failed to load a texture file due to an unknown reason!")},r}(),we,de,$e;ht.setExtensionXhrType("ktx",ht.XHR_RESPONSE_TYPE.BUFFER);var ps=[171,75,84,88,32,49,49,187,13,10,26,10],Np=67305985,At={FILE_IDENTIFIER:0,ENDIANNESS:12,GL_TYPE:16,GL_TYPE_SIZE:20,GL_FORMAT:24,GL_INTERNAL_FORMAT:28,GL_BASE_INTERNAL_FORMAT:32,PIXEL_WIDTH:36,PIXEL_HEIGHT:40,PIXEL_DEPTH:44,NUMBER_OF_ARRAY_ELEMENTS:48,NUMBER_OF_FACES:52,NUMBER_OF_MIPMAP_LEVELS:56,BYTES_OF_KEY_VALUE_DATA:60},Fp=64,vs=(we={},we[D.UNSIGNED_BYTE]=1,we[D.UNSIGNED_SHORT]=2,we[D.FLOAT]=4,we[D.HALF_FLOAT]=8,we),Up=(de={},de[P.RGBA]=4,de[P.RGB]=3,de[P.LUMINANCE]=1,de[P.LUMINANCE_ALPHA]=2,de[P.ALPHA]=1,de),Lp=($e={},$e[D.UNSIGNED_SHORT_4_4_4_4]=2,$e[D.UNSIGNED_SHORT_5_5_5_1]=2,$e[D.UNSIGNED_SHORT_5_6_5]=2,$e),Mp=function(){function r(){}return r.use=function(e,t){if(e.extension==="ktx"&&e.data)try{var i=e.name||e.url;Object.assign(e,cs(i,r.parse(i,e.data),e.metadata))}catch(n){t(n);return}t()},r.parse=function(e,t){var i=new DataView(t);if(!r.validate(e,i))return null;var n=i.getUint32(At.ENDIANNESS,!0)===Np,o=i.getUint32(At.GL_TYPE,n),a=i.getUint32(At.GL_FORMAT,n),s=i.getUint32(At.GL_INTERNAL_FORMAT,n),u=i.getUint32(At.PIXEL_WIDTH,n),h=i.getUint32(At.PIXEL_HEIGHT,n)||1,l=i.getUint32(At.PIXEL_DEPTH,n)||1,f=i.getUint32(At.NUMBER_OF_ARRAY_ELEMENTS,n)||1,c=i.getUint32(At.NUMBER_OF_FACES,n),d=i.getUint32(At.NUMBER_OF_MIPMAP_LEVELS,n),p=i.getUint32(At.BYTES_OF_KEY_VALUE_DATA,n);if(h===0||l!==1)throw new Error("Only 2D textures are supported");if(c!==1)throw new Error("CubeTextures are not supported by KTXLoader yet!");if(f!==1)throw new Error("WebGL does not support array textures");var _=4,v=4,g=u+3&~3,y=h+3&~3,x=new Array(f),T=u*h;o===0&&(T=g*y);var m;if(o!==0?vs[o]?m=vs[o]*Up[a]:m=Lp[o]:m=Nr[s],m===void 0)throw new Error("Unable to resolve the pixel format stored in the *.ktx file!");for(var b=T*m,w=b,S=u,E=h,C=g,U=y,N=Fp+p,V=0;V<d;V++){for(var J=i.getUint32(N,n),A=N+4,I=0;I<f;I++){var j=x[I];j||(j=x[I]=new Array(d)),j[V]={levelID:V,levelWidth:d>1?S:C,levelHeight:d>1?E:U,levelBuffer:new Uint8Array(t,A,w)},A+=w}N+=J+4,N=N%4!=0?N+4-N%4:N,S=S>>1||1,E=E>>1||1,C=S+_-1&~(_-1),U=E+v-1&~(v-1),w=C*U*m}if(o!==0)throw new Error("TODO: Uncompressed");return x.map(function(mt){return new Zi(null,{format:s,width:u,height:h,levels:d,levelBuffers:mt})})},r.validate=function(e,t){for(var i=0;i<ps.length;i++)if(t.getUint8(i)!==ps[i])return console.error(e+" is not a valid *.ktx file!"),!1;return!0},r}();/*!
 * @pixi/particle-container - v6.1.3
 * Compiled Mon, 13 Sep 2021 15:29:31 UTC
 *
 * @pixi/particle-container is licensed under the MIT License.
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
***************************************************************************** */var tn=function(r,e){return tn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])},tn(r,e)};function _s(r,e){tn(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}(function(r){_s(e,r);function e(t,i,n,o){t===void 0&&(t=1500),n===void 0&&(n=16384),o===void 0&&(o=!1);var a=r.call(this)||this,s=16384;return n>s&&(n=s),a._properties=[!1,!0,!1,!1,!1],a._maxSize=t,a._batchSize=n,a._buffers=null,a._bufferUpdateIDs=[],a._updateID=0,a.interactiveChildren=!1,a.blendMode=F.NORMAL,a.autoResize=o,a.roundPixels=!0,a.baseTexture=null,a.setProperties(i),a._tint=0,a.tintRgb=new Float32Array(4),a.tint=16777215,a}return e.prototype.setProperties=function(t){t&&(this._properties[0]="vertices"in t||"scale"in t?!!t.vertices||!!t.scale:this._properties[0],this._properties[1]="position"in t?!!t.position:this._properties[1],this._properties[2]="rotation"in t?!!t.rotation:this._properties[2],this._properties[3]="uvs"in t?!!t.uvs:this._properties[3],this._properties[4]="tint"in t||"alpha"in t?!!t.tint||!!t.alpha:this._properties[4])},e.prototype.updateTransform=function(){this.displayObjectUpdateTransform()},Object.defineProperty(e.prototype,"tint",{get:function(){return this._tint},set:function(t){this._tint=t,yt(t,this.tintRgb)},enumerable:!1,configurable:!0}),e.prototype.render=function(t){var i=this;!this.visible||this.worldAlpha<=0||!this.children.length||!this.renderable||(this.baseTexture||(this.baseTexture=this.children[0]._texture.baseTexture,this.baseTexture.valid||this.baseTexture.once("update",function(){return i.onChildrenChange(0)})),t.batch.setObjectRenderer(t.plugins.particle),t.plugins.particle.render(this))},e.prototype.onChildrenChange=function(t){for(var i=Math.floor(t/this._batchSize);this._bufferUpdateIDs.length<i;)this._bufferUpdateIDs.push(0);this._bufferUpdateIDs[i]=++this._updateID},e.prototype.dispose=function(){if(this._buffers){for(var t=0;t<this._buffers.length;++t)this._buffers[t].destroy();this._buffers=null}},e.prototype.destroy=function(t){r.prototype.destroy.call(this,t),this.dispose(),this._properties=null,this._buffers=null,this._bufferUpdateIDs=null},e})(Bt);var ms=function(){function r(e,t,i){this.geometry=new je,this.indexBuffer=null,this.size=i,this.dynamicProperties=[],this.staticProperties=[];for(var n=0;n<e.length;++n){var o=e[n];o={attributeName:o.attributeName,size:o.size,uploadFunction:o.uploadFunction,type:o.type||D.FLOAT,offset:o.offset},t[n]?this.dynamicProperties.push(o):this.staticProperties.push(o)}this.staticStride=0,this.staticBuffer=null,this.staticData=null,this.staticDataUint32=null,this.dynamicStride=0,this.dynamicBuffer=null,this.dynamicData=null,this.dynamicDataUint32=null,this._updateID=0,this.initBuffers()}return r.prototype.initBuffers=function(){var e=this.geometry,t=0;this.indexBuffer=new _t(cc(this.size),!0,!0),e.addIndex(this.indexBuffer),this.dynamicStride=0;for(var i=0;i<this.dynamicProperties.length;++i){var n=this.dynamicProperties[i];n.offset=t,t+=n.size,this.dynamicStride+=n.size}var o=new ArrayBuffer(this.size*this.dynamicStride*4*4);this.dynamicData=new Float32Array(o),this.dynamicDataUint32=new Uint32Array(o),this.dynamicBuffer=new _t(this.dynamicData,!1,!1);var a=0;this.staticStride=0;for(var i=0;i<this.staticProperties.length;++i){var n=this.staticProperties[i];n.offset=a,a+=n.size,this.staticStride+=n.size}var s=new ArrayBuffer(this.size*this.staticStride*4*4);this.staticData=new Float32Array(s),this.staticDataUint32=new Uint32Array(s),this.staticBuffer=new _t(this.staticData,!0,!1);for(var i=0;i<this.dynamicProperties.length;++i){var n=this.dynamicProperties[i];e.addAttribute(n.attributeName,this.dynamicBuffer,0,n.type===D.UNSIGNED_BYTE,n.type,this.dynamicStride*4,n.offset*4)}for(var i=0;i<this.staticProperties.length;++i){var n=this.staticProperties[i];e.addAttribute(n.attributeName,this.staticBuffer,0,n.type===D.UNSIGNED_BYTE,n.type,this.staticStride*4,n.offset*4)}},r.prototype.uploadDynamic=function(e,t,i){for(var n=0;n<this.dynamicProperties.length;n++){var o=this.dynamicProperties[n];o.uploadFunction(e,t,i,o.type===D.UNSIGNED_BYTE?this.dynamicDataUint32:this.dynamicData,this.dynamicStride,o.offset)}this.dynamicBuffer._updateID++},r.prototype.uploadStatic=function(e,t,i){for(var n=0;n<this.staticProperties.length;n++){var o=this.staticProperties[n];o.uploadFunction(e,t,i,o.type===D.UNSIGNED_BYTE?this.staticDataUint32:this.staticData,this.staticStride,o.offset)}this.staticBuffer._updateID++},r.prototype.destroy=function(){this.indexBuffer=null,this.dynamicProperties=null,this.dynamicBuffer=null,this.dynamicData=null,this.dynamicDataUint32=null,this.staticProperties=null,this.staticBuffer=null,this.staticData=null,this.staticDataUint32=null,this.geometry.destroy()},r}(),Bp=`varying vec2 vTextureCoord;
varying vec4 vColor;

uniform sampler2D uSampler;

void main(void){
    vec4 color = texture2D(uSampler, vTextureCoord) * vColor;
    gl_FragColor = color;
}`,Dp=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;

attribute vec2 aPositionCoord;
attribute float aRotation;

uniform mat3 translationMatrix;
uniform vec4 uColor;

varying vec2 vTextureCoord;
varying vec4 vColor;

void main(void){
    float x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);
    float y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);

    vec2 v = vec2(x, y);
    v = v + aPositionCoord;

    gl_Position = vec4((translationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vColor = aColor * uColor;
}
`,Gp=function(r){_s(e,r);function e(t){var i=r.call(this,t)||this;return i.shader=null,i.properties=null,i.tempMatrix=new pt,i.properties=[{attributeName:"aVertexPosition",size:2,uploadFunction:i.uploadVertices,offset:0},{attributeName:"aPositionCoord",size:2,uploadFunction:i.uploadPosition,offset:0},{attributeName:"aRotation",size:1,uploadFunction:i.uploadRotation,offset:0},{attributeName:"aTextureCoord",size:2,uploadFunction:i.uploadUvs,offset:0},{attributeName:"aColor",size:1,type:D.UNSIGNED_BYTE,uploadFunction:i.uploadTint,offset:0}],i.shader=he.from(Dp,Bp,{}),i.state=le.for2d(),i}return e.prototype.render=function(t){var i=t.children,n=t._maxSize,o=t._batchSize,a=this.renderer,s=i.length;if(s!==0){s>n&&!t.autoResize&&(s=n);var u=t._buffers;u||(u=t._buffers=this.generateBuffers(t));var h=i[0]._texture.baseTexture;this.state.blendMode=ta(t.blendMode,h.alphaMode),a.state.set(this.state);var l=a.gl,f=t.worldTransform.copyTo(this.tempMatrix);f.prepend(a.globalUniforms.uniforms.projectionMatrix),this.shader.uniforms.translationMatrix=f.toArray(!0),this.shader.uniforms.uColor=fc(t.tintRgb,t.worldAlpha,this.shader.uniforms.uColor,h.alphaMode),this.shader.uniforms.uSampler=h,this.renderer.shader.bind(this.shader);for(var c=!1,d=0,p=0;d<s;d+=o,p+=1){var _=s-d;_>o&&(_=o),p>=u.length&&u.push(this._generateOneMoreBuffer(t));var v=u[p];v.uploadDynamic(i,d,_);var g=t._bufferUpdateIDs[p]||0;c=c||v._updateID<g,c&&(v._updateID=t._updateID,v.uploadStatic(i,d,_)),a.geometry.bind(v.geometry),l.drawElements(l.TRIANGLES,_*6,l.UNSIGNED_SHORT,0)}}},e.prototype.generateBuffers=function(t){for(var i=[],n=t._maxSize,o=t._batchSize,a=t._properties,s=0;s<n;s+=o)i.push(new ms(this.properties,a,o));return i},e.prototype._generateOneMoreBuffer=function(t){var i=t._batchSize,n=t._properties;return new ms(this.properties,n,i)},e.prototype.uploadVertices=function(t,i,n,o,a,s){for(var u=0,h=0,l=0,f=0,c=0;c<n;++c){var d=t[i+c],p=d._texture,_=d.scale.x,v=d.scale.y,g=p.trim,y=p.orig;g?(h=g.x-d.anchor.x*y.width,u=h+g.width,f=g.y-d.anchor.y*y.height,l=f+g.height):(u=y.width*(1-d.anchor.x),h=y.width*-d.anchor.x,l=y.height*(1-d.anchor.y),f=y.height*-d.anchor.y),o[s]=h*_,o[s+1]=f*v,o[s+a]=u*_,o[s+a+1]=f*v,o[s+a*2]=u*_,o[s+a*2+1]=l*v,o[s+a*3]=h*_,o[s+a*3+1]=l*v,s+=a*4}},e.prototype.uploadPosition=function(t,i,n,o,a,s){for(var u=0;u<n;u++){var h=t[i+u].position;o[s]=h.x,o[s+1]=h.y,o[s+a]=h.x,o[s+a+1]=h.y,o[s+a*2]=h.x,o[s+a*2+1]=h.y,o[s+a*3]=h.x,o[s+a*3+1]=h.y,s+=a*4}},e.prototype.uploadRotation=function(t,i,n,o,a,s){for(var u=0;u<n;u++){var h=t[i+u].rotation;o[s]=h,o[s+a]=h,o[s+a*2]=h,o[s+a*3]=h,s+=a*4}},e.prototype.uploadUvs=function(t,i,n,o,a,s){for(var u=0;u<n;++u){var h=t[i+u]._texture._uvs;h?(o[s]=h.x0,o[s+1]=h.y0,o[s+a]=h.x1,o[s+a+1]=h.y1,o[s+a*2]=h.x2,o[s+a*2+1]=h.y2,o[s+a*3]=h.x3,o[s+a*3+1]=h.y3,s+=a*4):(o[s]=0,o[s+1]=0,o[s+a]=0,o[s+a+1]=0,o[s+a*2]=0,o[s+a*2+1]=0,o[s+a*3]=0,o[s+a*3+1]=0,s+=a*4)}},e.prototype.uploadTint=function(t,i,n,o,a,s){for(var u=0;u<n;++u){var h=t[i+u],l=h._texture.baseTexture.alphaMode>0,f=h.alpha,c=f<1&&l?_i(h._tintRGB,f):h._tintRGB+(f*255<<24);o[s]=c,o[s+a]=c,o[s+a*2]=c,o[s+a*3]=c,s+=a*4}},e.prototype.destroy=function(){r.prototype.destroy.call(this),this.shader&&(this.shader.destroy(),this.shader=null),this.tempMatrix=null},e}(Cr);/*!
 * @pixi/graphics - v6.1.3
 * Compiled Mon, 13 Sep 2021 15:29:31 UTC
 *
 * @pixi/graphics is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Kt;(function(r){r.MITER="miter",r.BEVEL="bevel",r.ROUND="round"})(Kt||(Kt={}));var Zt;(function(r){r.BUTT="butt",r.ROUND="round",r.SQUARE="square"})(Zt||(Zt={}));var We={adaptive:!0,maxLength:10,minSegments:8,maxSegments:2048,epsilon:1e-4,_segmentsCount:function(r,e){if(e===void 0&&(e=20),!this.adaptive||!r||isNaN(r))return e;var t=Math.ceil(r/this.maxLength);return t<this.minSegments?t=this.minSegments:t>this.maxSegments&&(t=this.maxSegments),t}},gs=function(){function r(){this.color=16777215,this.alpha=1,this.texture=L.WHITE,this.matrix=null,this.visible=!1,this.reset()}return r.prototype.clone=function(){var e=new r;return e.color=this.color,e.alpha=this.alpha,e.texture=this.texture,e.matrix=this.matrix,e.visible=this.visible,e},r.prototype.reset=function(){this.color=16777215,this.alpha=1,this.texture=L.WHITE,this.matrix=null,this.visible=!1},r.prototype.destroy=function(){this.texture=null,this.matrix=null},r}();/*! *****************************************************************************
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
***************************************************************************** */var en=function(r,e){return en=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])},en(r,e)};function rn(r,e){en(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var ys={build:function(r){r.points=r.shape.points.slice()},triangulate:function(r,e){var t=r.points,i=r.holes,n=e.points,o=e.indices;if(t.length>=6){for(var a=[],s=0;s<i.length;s++){var u=i[s];a.push(t.length/2),t=t.concat(u.points)}var h=Vo(t,a,2);if(!h)return;for(var l=n.length/2,s=0;s<h.length;s+=3)o.push(h[s]+l),o.push(h[s+1]+l),o.push(h[s+2]+l);for(var s=0;s<t.length;s++)n.push(t[s])}}},xs={build:function(r){var e=r.shape,t=r.points,i=e.x,n=e.y,o,a;if(t.length=0,r.type===lt.CIRC)o=e.radius,a=e.radius;else{var s=r.shape;o=s.width,a=s.height}if(!(o===0||a===0)){var u=Math.floor(30*Math.sqrt(e.radius))||Math.floor(15*Math.sqrt(o+a));u/=2.3;for(var h=Math.PI*2/u,l=0;l<u-.5;l++)t.push(i+Math.sin(-h*l)*o,n+Math.cos(-h*l)*a);t.push(t[0],t[1])}},triangulate:function(r,e){var t=r.points,i=e.points,n=e.indices,o=i.length/2,a=o,s=r.shape,u=r.matrix,h=s.x,l=s.y;i.push(r.matrix?u.a*h+u.c*l+u.tx:h,r.matrix?u.b*h+u.d*l+u.ty:l);for(var f=0;f<t.length;f+=2)i.push(t[f],t[f+1]),n.push(o++,a,o)}},kp={build:function(r){var e=r.shape,t=e.x,i=e.y,n=e.width,o=e.height,a=r.points;a.length=0,a.push(t,i,t+n,i,t+n,i+o,t,i+o)},triangulate:function(r,e){var t=r.points,i=e.points,n=i.length/2;i.push(t[0],t[1],t[2],t[3],t[6],t[7],t[4],t[5]),e.indices.push(n,n+1,n+2,n+1,n+2,n+3)}};function Pe(r,e,t){var i=e-r;return r+i*t}function Mr(r,e,t,i,n,o,a){a===void 0&&(a=[]);for(var s=20,u=a,h=0,l=0,f=0,c=0,d=0,p=0,_=0,v=0;_<=s;++_)v=_/s,h=Pe(r,t,v),l=Pe(e,i,v),f=Pe(t,n,v),c=Pe(i,o,v),d=Pe(h,f,v),p=Pe(l,c,v),!(_===0&&u[u.length-2]===d&&u[u.length-1]===p)&&u.push(d,p);return u}var jp={build:function(r){var e=r.shape,t=r.points,i=e.x,n=e.y,o=e.width,a=e.height,s=Math.max(0,Math.min(e.radius,Math.min(o,a)/2));t.length=0,s?(Mr(i,n+s,i,n,i+s,n,t),Mr(i+o-s,n,i+o,n,i+o,n+s,t),Mr(i+o,n+a-s,i+o,n+a,i+o-s,n+a,t),Mr(i+s,n+a,i,n+a,i,n+a-s,t)):t.push(i,n,i+o,n,i+o,n+a,i,n+a)},triangulate:function(r,e){for(var t=r.points,i=e.points,n=e.indices,o=i.length/2,a=Vo(t,null,2),s=0,u=a.length;s<u;s+=3)n.push(a[s]+o),n.push(a[s+1]+o),n.push(a[s+2]+o);for(var s=0,u=t.length;s<u;s++)i.push(t[s],t[++s])}};function bs(r,e,t,i,n,o,a,s){var u=r-t*n,h=e-i*n,l=r+t*o,f=e+i*o,c,d;a?(c=i,d=-t):(c=-i,d=t);var p=u+c,_=h+d,v=l+c,g=f+d;return s.push(p,_),s.push(v,g),2}function Ie(r,e,t,i,n,o,a,s){var u=t-r,h=i-e,l=Math.atan2(u,h),f=Math.atan2(n-r,o-e);s&&l<f?l+=Math.PI*2:!s&&l>f&&(f+=Math.PI*2);var c=l,d=f-l,p=Math.abs(d),_=Math.sqrt(u*u+h*h),v=(15*p*Math.sqrt(_)/Math.PI>>0)+1,g=d/v;if(c+=g,s){a.push(r,e),a.push(t,i);for(var y=1,x=c;y<v;y++,x+=g)a.push(r,e),a.push(r+Math.sin(x)*_,e+Math.cos(x)*_);a.push(r,e),a.push(n,o)}else{a.push(t,i),a.push(r,e);for(var y=1,x=c;y<v;y++,x+=g)a.push(r+Math.sin(x)*_,e+Math.cos(x)*_),a.push(r,e);a.push(n,o),a.push(r,e)}return v*2}function Xp(r,e){var t=r.shape,i=r.points||t.points.slice(),n=e.closePointEps;if(i.length!==0){var o=r.lineStyle,a=new Y(i[0],i[1]),s=new Y(i[i.length-2],i[i.length-1]),u=t.type!==lt.POLY||t.closeStroke,h=Math.abs(a.x-s.x)<n&&Math.abs(a.y-s.y)<n;if(u){i=i.slice(),h&&(i.pop(),i.pop(),s.set(i[i.length-2],i[i.length-1]));var l=(a.x+s.x)*.5,f=(s.y+a.y)*.5;i.unshift(l,f),i.push(l,f)}var c=e.points,d=i.length/2,p=i.length,_=c.length/2,v=o.width/2,g=v*v,y=o.miterLimit*o.miterLimit,x=i[0],T=i[1],m=i[2],b=i[3],w=0,S=0,E=-(T-b),C=x-m,U=0,N=0,V=Math.sqrt(E*E+C*C);E/=V,C/=V,E*=v,C*=v;var J=o.alignment,A=(1-J)*2,I=J*2;u||(o.cap===Zt.ROUND?p+=Ie(x-E*(A-I)*.5,T-C*(A-I)*.5,x-E*A,T-C*A,x+E*I,T+C*I,c,!0)+2:o.cap===Zt.SQUARE&&(p+=bs(x,T,E,C,A,I,!0,c))),c.push(x-E*A,T-C*A),c.push(x+E*I,T+C*I);for(var j=1;j<d-1;++j){x=i[(j-1)*2],T=i[(j-1)*2+1],m=i[j*2],b=i[j*2+1],w=i[(j+1)*2],S=i[(j+1)*2+1],E=-(T-b),C=x-m,V=Math.sqrt(E*E+C*C),E/=V,C/=V,E*=v,C*=v,U=-(b-S),N=m-w,V=Math.sqrt(U*U+N*N),U/=V,N/=V,U*=v,N*=v;var mt=m-x,G=T-b,R=m-w,M=S-b,z=G*R-M*mt,$=z<0;if(Math.abs(z)<.1){c.push(m-E*A,b-C*A),c.push(m+E*I,b+C*I);continue}var q=(-E+x)*(-C+b)-(-E+m)*(-C+T),ct=(-U+w)*(-N+b)-(-U+m)*(-N+S),tt=(mt*ct-R*q)/z,ot=(M*q-G*ct)/z,vt=(tt-m)*(tt-m)+(ot-b)*(ot-b),rt=m+(tt-m)*A,at=b+(ot-b)*A,B=m-(tt-m)*I,et=b-(ot-b)*I,st=Math.min(mt*mt+G*G,R*R+M*M),X=$?A:I,gt=st+X*X*g,Ot=vt<=gt;Ot?o.join===Kt.BEVEL||vt/g>y?($?(c.push(rt,at),c.push(m+E*I,b+C*I),c.push(rt,at),c.push(m+U*I,b+N*I)):(c.push(m-E*A,b-C*A),c.push(B,et),c.push(m-U*A,b-N*A),c.push(B,et)),p+=2):o.join===Kt.ROUND?$?(c.push(rt,at),c.push(m+E*I,b+C*I),p+=Ie(m,b,m+E*I,b+C*I,m+U*I,b+N*I,c,!0)+4,c.push(rt,at),c.push(m+U*I,b+N*I)):(c.push(m-E*A,b-C*A),c.push(B,et),p+=Ie(m,b,m-E*A,b-C*A,m-U*A,b-N*A,c,!1)+4,c.push(m-U*A,b-N*A),c.push(B,et)):(c.push(rt,at),c.push(B,et)):(c.push(m-E*A,b-C*A),c.push(m+E*I,b+C*I),o.join===Kt.BEVEL||vt/g>y||(o.join===Kt.ROUND?$?p+=Ie(m,b,m+E*I,b+C*I,m+U*I,b+N*I,c,!0)+2:p+=Ie(m,b,m-E*A,b-C*A,m-U*A,b-N*A,c,!1)+2:($?(c.push(B,et),c.push(B,et)):(c.push(rt,at),c.push(rt,at)),p+=2)),c.push(m-U*A,b-N*A),c.push(m+U*I,b+N*I),p+=2)}x=i[(d-2)*2],T=i[(d-2)*2+1],m=i[(d-1)*2],b=i[(d-1)*2+1],E=-(T-b),C=x-m,V=Math.sqrt(E*E+C*C),E/=V,C/=V,E*=v,C*=v,c.push(m-E*A,b-C*A),c.push(m+E*I,b+C*I),u||(o.cap===Zt.ROUND?p+=Ie(m-E*(A-I)*.5,b-C*(A-I)*.5,m-E*A,b-C*A,m+E*I,b+C*I,c,!1)+2:o.cap===Zt.SQUARE&&(p+=bs(m,b,E,C,A,I,!1,c)));for(var ve=e.indices,rr=We.epsilon*We.epsilon,j=_;j<p+_-2;++j)x=c[j*2],T=c[j*2+1],m=c[(j+1)*2],b=c[(j+1)*2+1],w=c[(j+2)*2],S=c[(j+2)*2+1],!(Math.abs(x*(b-S)+m*(S-T)+w*(T-b))<rr)&&ve.push(j,j+1,j+2)}}function Hp(r,e){var t=0,i=r.shape,n=r.points||i.points,o=i.type!==lt.POLY||i.closeStroke;if(n.length!==0){var a=e.points,s=e.indices,u=n.length/2,h=a.length/2,l=h;for(a.push(n[0],n[1]),t=1;t<u;t++)a.push(n[t*2],n[t*2+1]),s.push(l,l+1),l++;o&&s.push(l,h)}}function Ts(r,e){r.lineStyle.native?Hp(r,e):Xp(r,e)}var Es=function(){function r(){}return r.curveTo=function(e,t,i,n,o,a){var s=a[a.length-2],u=a[a.length-1],h=u-t,l=s-e,f=n-t,c=i-e,d=Math.abs(h*c-l*f);if(d<1e-8||o===0)return(a[a.length-2]!==e||a[a.length-1]!==t)&&a.push(e,t),null;var p=h*h+l*l,_=f*f+c*c,v=h*f+l*c,g=o*Math.sqrt(p)/d,y=o*Math.sqrt(_)/d,x=g*v/p,T=y*v/_,m=g*c+y*l,b=g*f+y*h,w=l*(y+x),S=h*(y+x),E=c*(g+T),C=f*(g+T),U=Math.atan2(S-b,w-m),N=Math.atan2(C-b,E-m);return{cx:m+e,cy:b+t,radius:o,startAngle:U,endAngle:N,anticlockwise:l*f>c*h}},r.arc=function(e,t,i,n,o,a,s,u,h){for(var l=s-a,f=We._segmentsCount(Math.abs(l)*o,Math.ceil(Math.abs(l)/pr)*40),c=l/(f*2),d=c*2,p=Math.cos(c),_=Math.sin(c),v=f-1,g=v%1/v,y=0;y<=v;++y){var x=y+g*y,T=c+a+d*x,m=Math.cos(T),b=-Math.sin(T);h.push((p*m+_*b)*o+i,(p*-b+_*m)*o+n)}},r}(),zp=function(){function r(){}return r.curveLength=function(e,t,i,n,o,a,s,u){for(var h=10,l=0,f=0,c=0,d=0,p=0,_=0,v=0,g=0,y=0,x=0,T=0,m=e,b=t,w=1;w<=h;++w)f=w/h,c=f*f,d=c*f,p=1-f,_=p*p,v=_*p,g=v*e+3*_*f*i+3*p*c*o+d*s,y=v*t+3*_*f*n+3*p*c*a+d*u,x=m-g,T=b-y,m=g,b=y,l+=Math.sqrt(x*x+T*T);return l},r.curveTo=function(e,t,i,n,o,a,s){var u=s[s.length-2],h=s[s.length-1];s.length-=2;var l=We._segmentsCount(r.curveLength(u,h,e,t,i,n,o,a)),f=0,c=0,d=0,p=0,_=0;s.push(u,h);for(var v=1,g=0;v<=l;++v)g=v/l,f=1-g,c=f*f,d=c*f,p=g*g,_=p*g,s.push(d*u+3*c*g*e+3*f*p*i+_*o,d*h+3*c*g*t+3*f*p*n+_*a)},r}(),Vp=function(){function r(){}return r.curveLength=function(e,t,i,n,o,a){var s=e-2*i+o,u=t-2*n+a,h=2*i-2*e,l=2*n-2*t,f=4*(s*s+u*u),c=4*(s*h+u*l),d=h*h+l*l,p=2*Math.sqrt(f+c+d),_=Math.sqrt(f),v=2*f*_,g=2*Math.sqrt(d),y=c/_;return(v*p+_*c*(p-g)+(4*d*f-c*c)*Math.log((2*_+y+p)/(y+g)))/(4*v)},r.curveTo=function(e,t,i,n,o){for(var a=o[o.length-2],s=o[o.length-1],u=We._segmentsCount(r.curveLength(a,s,e,t,i,n)),h=0,l=0,f=1;f<=u;++f){var c=f/u;h=a+(e-a)*c,l=s+(t-s)*c,o.push(h+(e+(i-e)*c-h)*c,l+(t+(n-t)*c-l)*c)}},r}(),$p=function(){function r(){this.reset()}return r.prototype.begin=function(e,t,i){this.reset(),this.style=e,this.start=t,this.attribStart=i},r.prototype.end=function(e,t){this.attribSize=t-this.attribStart,this.size=e-this.start},r.prototype.reset=function(){this.style=null,this.size=0,this.start=0,this.attribStart=0,this.attribSize=0},r}(),pe,nn=(pe={},pe[lt.POLY]=ys,pe[lt.CIRC]=xs,pe[lt.ELIP]=xs,pe[lt.RECT]=kp,pe[lt.RREC]=jp,pe),Cs=[],Br=[];function Wp(r){for(var e=r.points,t=0,i=0;i<e.length-2;i+=2)t+=(e[i+2]-e[i])*(e[i+3]+e[i+1]);return t>0}var ws=function(){function r(e,t,i,n){t===void 0&&(t=null),i===void 0&&(i=null),n===void 0&&(n=null),this.points=[],this.holes=[],this.shape=e,this.lineStyle=i,this.fillStyle=t,this.matrix=n,this.type=e.type}return r.prototype.clone=function(){return new r(this.shape,this.fillStyle,this.lineStyle,this.matrix)},r.prototype.destroy=function(){this.shape=null,this.holes.length=0,this.holes=null,this.points.length=0,this.points=null,this.lineStyle=null,this.fillStyle=null},r}(),Se=new Y,Yp=new mr,qp=function(r){rn(e,r);function e(){var t=r.call(this)||this;return t.closePointEps=1e-4,t.boundsPadding=0,t.uvsFloat32=null,t.indicesUint16=null,t.batchable=!1,t.points=[],t.colors=[],t.uvs=[],t.indices=[],t.textureIds=[],t.graphicsData=[],t.drawCalls=[],t.batchDirty=-1,t.batches=[],t.dirty=0,t.cacheDirty=-1,t.clearDirty=0,t.shapeIndex=0,t._bounds=new mr,t.boundsDirty=-1,t}return Object.defineProperty(e.prototype,"bounds",{get:function(){return this.boundsDirty!==this.dirty&&(this.boundsDirty=this.dirty,this.calculateBounds()),this._bounds},enumerable:!1,configurable:!0}),e.prototype.invalidate=function(){this.boundsDirty=-1,this.dirty++,this.batchDirty++,this.shapeIndex=0,this.points.length=0,this.colors.length=0,this.uvs.length=0,this.indices.length=0,this.textureIds.length=0;for(var t=0;t<this.drawCalls.length;t++)this.drawCalls[t].texArray.clear(),Br.push(this.drawCalls[t]);this.drawCalls.length=0;for(var t=0;t<this.batches.length;t++){var i=this.batches[t];i.reset(),Cs.push(i)}this.batches.length=0},e.prototype.clear=function(){return this.graphicsData.length>0&&(this.invalidate(),this.clearDirty++,this.graphicsData.length=0),this},e.prototype.drawShape=function(t,i,n,o){i===void 0&&(i=null),n===void 0&&(n=null),o===void 0&&(o=null);var a=new ws(t,i,n,o);return this.graphicsData.push(a),this.dirty++,this},e.prototype.drawHole=function(t,i){if(i===void 0&&(i=null),!this.graphicsData.length)return null;var n=new ws(t,null,null,i),o=this.graphicsData[this.graphicsData.length-1];return n.lineStyle=o.lineStyle,o.holes.push(n),this.dirty++,this},e.prototype.destroy=function(){r.prototype.destroy.call(this);for(var t=0;t<this.graphicsData.length;++t)this.graphicsData[t].destroy();this.points.length=0,this.points=null,this.colors.length=0,this.colors=null,this.uvs.length=0,this.uvs=null,this.indices.length=0,this.indices=null,this.indexBuffer.destroy(),this.indexBuffer=null,this.graphicsData.length=0,this.graphicsData=null,this.drawCalls.length=0,this.drawCalls=null,this.batches.length=0,this.batches=null,this._bounds=null},e.prototype.containsPoint=function(t){for(var i=this.graphicsData,n=0;n<i.length;++n){var o=i[n];if(!!o.fillStyle.visible&&o.shape&&(o.matrix?o.matrix.applyInverse(t,Se):Se.copyFrom(t),o.shape.contains(Se.x,Se.y))){var a=!1;if(o.holes)for(var s=0;s<o.holes.length;s++){var u=o.holes[s];if(u.shape.contains(Se.x,Se.y)){a=!0;break}}if(!a)return!0}}return!1},e.prototype.updateBatches=function(t){if(!this.graphicsData.length){this.batchable=!0;return}if(!!this.validateBatching()){this.cacheDirty=this.dirty;var i=this.uvs,n=this.graphicsData,o=null,a=null;this.batches.length>0&&(o=this.batches[this.batches.length-1],a=o.style);for(var s=this.shapeIndex;s<n.length;s++){this.shapeIndex++;var u=n[s],h=u.fillStyle,l=u.lineStyle,f=nn[u.type];f.build(u),u.matrix&&this.transformPoints(u.points,u.matrix);for(var c=0;c<2;c++){var d=c===0?h:l;if(!!d.visible){var p=d.texture.baseTexture,_=this.indices.length,v=this.points.length/2;p.wrapMode=jt.REPEAT,c===0?this.processFill(u):this.processLine(u);var g=this.points.length/2-v;g!==0&&(o&&!this._compareStyles(a,d)&&(o.end(_,v),o=null),o||(o=Cs.pop()||new $p,o.begin(d,_,v),this.batches.push(o),a=d),this.addUvs(this.points,i,d.texture,v,g,d.matrix))}}}var y=this.indices.length,x=this.points.length/2;if(o&&o.end(y,x),this.batches.length===0){this.batchable=!0;return}if(this.indicesUint16&&this.indices.length===this.indicesUint16.length)this.indicesUint16.set(this.indices);else{var T=x>65535&&t;this.indicesUint16=T?new Uint32Array(this.indices):new Uint16Array(this.indices)}this.batchable=this.isBatchable(),this.batchable?this.packBatches():this.buildDrawCalls()}},e.prototype._compareStyles=function(t,i){return!(!t||!i||t.texture.baseTexture!==i.texture.baseTexture||t.color+t.alpha!==i.color+i.alpha||!!t.native!=!!i.native)},e.prototype.validateBatching=function(){if(this.dirty===this.cacheDirty||!this.graphicsData.length)return!1;for(var t=0,i=this.graphicsData.length;t<i;t++){var n=this.graphicsData[t],o=n.fillStyle,a=n.lineStyle;if(o&&!o.texture.baseTexture.valid||a&&!a.texture.baseTexture.valid)return!1}return!0},e.prototype.packBatches=function(){this.batchDirty++,this.uvsFloat32=new Float32Array(this.uvs);for(var t=this.batches,i=0,n=t.length;i<n;i++)for(var o=t[i],a=0;a<o.size;a++){var s=o.start+a;this.indicesUint16[s]=this.indicesUint16[s]-o.attribStart}},e.prototype.isBatchable=function(){if(this.points.length>65535*2)return!1;for(var t=this.batches,i=0;i<t.length;i++)if(t[i].style.native)return!1;return this.points.length<e.BATCHABLE_SIZE*2},e.prototype.buildDrawCalls=function(){for(var t=++Z._globalBatch,i=0;i<this.drawCalls.length;i++)this.drawCalls[i].texArray.clear(),Br.push(this.drawCalls[i]);this.drawCalls.length=0;var n=this.colors,o=this.textureIds,a=Br.pop();a||(a=new Xi,a.texArray=new Hi),a.texArray.count=0,a.start=0,a.size=0,a.type=Pt.TRIANGLES;var s=0,u=null,h=0,l=!1,f=Pt.TRIANGLES,c=0;this.drawCalls.push(a);for(var i=0;i<this.batches.length;i++){var d=this.batches[i],p=8,_=d.style,v=_.texture.baseTexture;l!==!!_.native&&(l=!!_.native,f=l?Pt.LINES:Pt.TRIANGLES,u=null,s=p,t++),u!==v&&(u=v,v._batchEnabled!==t&&(s===p&&(t++,s=0,a.size>0&&(a=Br.pop(),a||(a=new Xi,a.texArray=new Hi),this.drawCalls.push(a)),a.start=c,a.size=0,a.texArray.count=0,a.type=f),v.touched=1,v._batchEnabled=t,v._batchLocation=s,v.wrapMode=jt.REPEAT,a.texArray.elements[a.texArray.count++]=v,s++)),a.size+=d.size,c+=d.size,h=v._batchLocation,this.addColors(n,_.color,_.alpha,d.attribSize,d.attribStart),this.addTextureIds(o,h,d.attribSize,d.attribStart)}Z._globalBatch=t,this.packAttributes()},e.prototype.packAttributes=function(){for(var t=this.points,i=this.uvs,n=this.colors,o=this.textureIds,a=new ArrayBuffer(t.length*3*4),s=new Float32Array(a),u=new Uint32Array(a),h=0,l=0;l<t.length/2;l++)s[h++]=t[l*2],s[h++]=t[l*2+1],s[h++]=i[l*2],s[h++]=i[l*2+1],u[h++]=n[l],s[h++]=o[l];this._buffer.update(a),this._indexBuffer.update(this.indicesUint16)},e.prototype.processFill=function(t){if(t.holes.length)this.processHoles(t.holes),ys.triangulate(t,this);else{var i=nn[t.type];i.triangulate(t,this)}},e.prototype.processLine=function(t){Ts(t,this);for(var i=0;i<t.holes.length;i++)Ts(t.holes[i],this)},e.prototype.processHoles=function(t){for(var i=0;i<t.length;i++){var n=t[i],o=nn[n.type];o.build(n),n.matrix&&this.transformPoints(n.points,n.matrix)}},e.prototype.calculateBounds=function(){var t=this._bounds,i=Yp,n=pt.IDENTITY;this._bounds.clear(),i.clear();for(var o=0;o<this.graphicsData.length;o++){var a=this.graphicsData[o],s=a.shape,u=a.type,h=a.lineStyle,l=a.matrix||pt.IDENTITY,f=0;if(h&&h.visible){var c=h.alignment;f=h.width,u===lt.POLY?Wp(s)?f=f*(1-c):f=f*c:f=f*Math.max(0,c)}if(n!==l&&(i.isEmpty()||(t.addBoundsMatrix(i,n),i.clear()),n=l),u===lt.RECT||u===lt.RREC){var d=s;i.addFramePad(d.x,d.y,d.x+d.width,d.y+d.height,f,f)}else if(u===lt.CIRC){var p=s;i.addFramePad(p.x,p.y,p.x,p.y,p.radius+f,p.radius+f)}else if(u===lt.ELIP){var _=s;i.addFramePad(_.x,_.y,_.x,_.y,_.width+f,_.height+f)}else{var v=s;t.addVerticesMatrix(n,v.points,0,v.points.length,f,f)}}i.isEmpty()||t.addBoundsMatrix(i,n),t.pad(this.boundsPadding,this.boundsPadding)},e.prototype.transformPoints=function(t,i){for(var n=0;n<t.length/2;n++){var o=t[n*2],a=t[n*2+1];t[n*2]=i.a*o+i.c*a+i.tx,t[n*2+1]=i.b*o+i.d*a+i.ty}},e.prototype.addColors=function(t,i,n,o,a){a===void 0&&(a=0);var s=(i>>16)+(i&65280)+((i&255)<<16),u=_i(s,n);t.length=Math.max(t.length,a+o);for(var h=0;h<o;h++)t[a+h]=u},e.prototype.addTextureIds=function(t,i,n,o){o===void 0&&(o=0),t.length=Math.max(t.length,o+n);for(var a=0;a<n;a++)t[o+a]=i},e.prototype.addUvs=function(t,i,n,o,a,s){s===void 0&&(s=null);for(var u=0,h=i.length,l=n.frame;u<a;){var f=t[(o+u)*2],c=t[(o+u)*2+1];if(s){var d=s.a*f+s.c*c+s.tx;c=s.b*f+s.d*c+s.ty,f=d}u++,i.push(f/l.width,c/l.height)}var p=n.baseTexture;(l.width<p.width||l.height<p.height)&&this.adjustUvs(i,n,h,a)},e.prototype.adjustUvs=function(t,i,n,o){for(var a=i.baseTexture,s=1e-6,u=n+o*2,h=i.frame,l=h.width/a.width,f=h.height/a.height,c=h.x/h.width,d=h.y/h.height,p=Math.floor(t[n]+s),_=Math.floor(t[n+1]+s),v=n+2;v<u;v+=2)p=Math.min(p,Math.floor(t[v]+s)),_=Math.min(_,Math.floor(t[v+1]+s));c-=p,d-=_;for(var v=n;v<u;v+=2)t[v]=(t[v]+c)*l,t[v+1]=(t[v+1]+d)*f},e.BATCHABLE_SIZE=100,e}(ts),Kp=function(r){rn(e,r);function e(){var t=r!==null&&r.apply(this,arguments)||this;return t.width=0,t.alignment=.5,t.native=!1,t.cap=Zt.BUTT,t.join=Kt.MITER,t.miterLimit=10,t}return e.prototype.clone=function(){var t=new e;return t.color=this.color,t.alpha=this.alpha,t.texture=this.texture,t.matrix=this.matrix,t.visible=this.visible,t.width=this.width,t.alignment=this.alignment,t.native=this.native,t.cap=this.cap,t.join=this.join,t.miterLimit=this.miterLimit,t},e.prototype.reset=function(){r.prototype.reset.call(this),this.color=0,this.alignment=.5,this.width=0,this.native=!1},e}(gs),Zp=new Float32Array(3),on={},Ps=function(r){rn(e,r);function e(t){t===void 0&&(t=null);var i=r.call(this)||this;return i.shader=null,i.pluginName="batch",i.currentPath=null,i.batches=[],i.batchTint=-1,i.batchDirty=-1,i.vertexData=null,i._fillStyle=new gs,i._lineStyle=new Kp,i._matrix=null,i._holeMode=!1,i.state=le.for2d(),i._geometry=t||new qp,i._geometry.refCount++,i._transformID=-1,i.tint=16777215,i.blendMode=F.NORMAL,i}return Object.defineProperty(e.prototype,"geometry",{get:function(){return this._geometry},enumerable:!1,configurable:!0}),e.prototype.clone=function(){return this.finishPoly(),new e(this._geometry)},Object.defineProperty(e.prototype,"blendMode",{get:function(){return this.state.blendMode},set:function(t){this.state.blendMode=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"tint",{get:function(){return this._tint},set:function(t){this._tint=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fill",{get:function(){return this._fillStyle},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"line",{get:function(){return this._lineStyle},enumerable:!1,configurable:!0}),e.prototype.lineStyle=function(t,i,n,o,a){return t===void 0&&(t=null),i===void 0&&(i=0),n===void 0&&(n=1),o===void 0&&(o=.5),a===void 0&&(a=!1),typeof t=="number"&&(t={width:t,color:i,alpha:n,alignment:o,native:a}),this.lineTextureStyle(t)},e.prototype.lineTextureStyle=function(t){t=Object.assign({width:0,texture:L.WHITE,color:t&&t.texture?16777215:0,alpha:1,matrix:null,alignment:.5,native:!1,cap:Zt.BUTT,join:Kt.MITER,miterLimit:10},t),this.currentPath&&this.startPoly();var i=t.width>0&&t.alpha>0;return i?(t.matrix&&(t.matrix=t.matrix.clone(),t.matrix.invert()),Object.assign(this._lineStyle,{visible:i},t)):this._lineStyle.reset(),this},e.prototype.startPoly=function(){if(this.currentPath){var t=this.currentPath.points,i=this.currentPath.points.length;i>2&&(this.drawShape(this.currentPath),this.currentPath=new vr,this.currentPath.closeStroke=!1,this.currentPath.points.push(t[i-2],t[i-1]))}else this.currentPath=new vr,this.currentPath.closeStroke=!1},e.prototype.finishPoly=function(){this.currentPath&&(this.currentPath.points.length>2?(this.drawShape(this.currentPath),this.currentPath=null):this.currentPath.points.length=0)},e.prototype.moveTo=function(t,i){return this.startPoly(),this.currentPath.points[0]=t,this.currentPath.points[1]=i,this},e.prototype.lineTo=function(t,i){this.currentPath||this.moveTo(0,0);var n=this.currentPath.points,o=n[n.length-2],a=n[n.length-1];return(o!==t||a!==i)&&n.push(t,i),this},e.prototype._initCurve=function(t,i){t===void 0&&(t=0),i===void 0&&(i=0),this.currentPath?this.currentPath.points.length===0&&(this.currentPath.points=[t,i]):this.moveTo(t,i)},e.prototype.quadraticCurveTo=function(t,i,n,o){this._initCurve();var a=this.currentPath.points;return a.length===0&&this.moveTo(0,0),Vp.curveTo(t,i,n,o,a),this},e.prototype.bezierCurveTo=function(t,i,n,o,a,s){return this._initCurve(),zp.curveTo(t,i,n,o,a,s,this.currentPath.points),this},e.prototype.arcTo=function(t,i,n,o,a){this._initCurve(t,i);var s=this.currentPath.points,u=Es.curveTo(t,i,n,o,a,s);if(u){var h=u.cx,l=u.cy,f=u.radius,c=u.startAngle,d=u.endAngle,p=u.anticlockwise;this.arc(h,l,f,c,d,p)}return this},e.prototype.arc=function(t,i,n,o,a,s){if(s===void 0&&(s=!1),o===a)return this;!s&&a<=o?a+=pr:s&&o<=a&&(o+=pr);var u=a-o;if(u===0)return this;var h=t+Math.cos(o)*n,l=i+Math.sin(o)*n,f=this._geometry.closePointEps,c=this.currentPath?this.currentPath.points:null;if(c){var d=Math.abs(c[c.length-2]-h),p=Math.abs(c[c.length-1]-l);d<f&&p<f||c.push(h,l)}else this.moveTo(h,l),c=this.currentPath.points;return Es.arc(h,l,t,i,n,o,a,s,c),this},e.prototype.beginFill=function(t,i){return t===void 0&&(t=0),i===void 0&&(i=1),this.beginTextureFill({texture:L.WHITE,color:t,alpha:i})},e.prototype.beginTextureFill=function(t){t=Object.assign({texture:L.WHITE,color:16777215,alpha:1,matrix:null},t),this.currentPath&&this.startPoly();var i=t.alpha>0;return i?(t.matrix&&(t.matrix=t.matrix.clone(),t.matrix.invert()),Object.assign(this._fillStyle,{visible:i},t)):this._fillStyle.reset(),this},e.prototype.endFill=function(){return this.finishPoly(),this._fillStyle.reset(),this},e.prototype.drawRect=function(t,i,n,o){return this.drawShape(new W(t,i,n,o))},e.prototype.drawRoundedRect=function(t,i,n,o,a){return this.drawShape(new yc(t,i,n,o,a))},e.prototype.drawCircle=function(t,i,n){return this.drawShape(new mc(t,i,n))},e.prototype.drawEllipse=function(t,i,n,o){return this.drawShape(new gc(t,i,n,o))},e.prototype.drawPolygon=function(){for(var t=arguments,i=[],n=0;n<arguments.length;n++)i[n]=t[n];var o,a=!0,s=i[0];s.points?(a=s.closeStroke,o=s.points):Array.isArray(i[0])?o=i[0]:o=i;var u=new vr(o);return u.closeStroke=a,this.drawShape(u),this},e.prototype.drawShape=function(t){return this._holeMode?this._geometry.drawHole(t,this._matrix):this._geometry.drawShape(t,this._fillStyle.clone(),this._lineStyle.clone(),this._matrix),this},e.prototype.clear=function(){return this._geometry.clear(),this._lineStyle.reset(),this._fillStyle.reset(),this._boundsID++,this._matrix=null,this._holeMode=!1,this.currentPath=null,this},e.prototype.isFastRect=function(){var t=this._geometry.graphicsData;return t.length===1&&t[0].shape.type===lt.RECT&&!t[0].holes.length&&!(t[0].lineStyle.visible&&t[0].lineStyle.width)},e.prototype._render=function(t){this.finishPoly();var i=this._geometry,n=t.context.supports.uint32Indices;i.updateBatches(n),i.batchable?(this.batchDirty!==i.batchDirty&&this._populateBatches(),this._renderBatched(t)):(t.batch.flush(),this._renderDirect(t))},e.prototype._populateBatches=function(){var t=this._geometry,i=this.blendMode,n=t.batches.length;this.batchTint=-1,this._transformID=-1,this.batchDirty=t.batchDirty,this.batches.length=n,this.vertexData=new Float32Array(t.points);for(var o=0;o<n;o++){var a=t.batches[o],s=a.style.color,u=new Float32Array(this.vertexData.buffer,a.attribStart*4*2,a.attribSize*2),h=new Float32Array(t.uvsFloat32.buffer,a.attribStart*4*2,a.attribSize*2),l=new Uint16Array(t.indicesUint16.buffer,a.start*2,a.size),f={vertexData:u,blendMode:i,indices:l,uvs:h,_batchRGB:yt(s),_tintRGB:s,_texture:a.style.texture,alpha:a.style.alpha,worldAlpha:1};this.batches[o]=f}},e.prototype._renderBatched=function(t){if(!!this.batches.length){t.batch.setObjectRenderer(t.plugins[this.pluginName]),this.calculateVertices(),this.calculateTints();for(var i=0,n=this.batches.length;i<n;i++){var o=this.batches[i];o.worldAlpha=this.worldAlpha*o.alpha,t.plugins[this.pluginName].render(o)}}},e.prototype._renderDirect=function(t){var i=this._resolveDirectShader(t),n=this._geometry,o=this.tint,a=this.worldAlpha,s=i.uniforms,u=n.drawCalls;s.translationMatrix=this.transform.worldTransform,s.tint[0]=(o>>16&255)/255*a,s.tint[1]=(o>>8&255)/255*a,s.tint[2]=(o&255)/255*a,s.tint[3]=a,t.shader.bind(i),t.geometry.bind(n,i),t.state.set(this.state);for(var h=0,l=u.length;h<l;h++)this._renderDrawCallDirect(t,n.drawCalls[h])},e.prototype._renderDrawCallDirect=function(t,i){for(var n=i.texArray,o=i.type,a=i.size,s=i.start,u=n.count,h=0;h<u;h++)t.texture.bind(n.elements[h],h);t.geometry.draw(o,a,s)},e.prototype._resolveDirectShader=function(t){var i=this.shader,n=this.pluginName;if(!i){if(!on[n]){for(var o=t.plugins.batch.MAX_TEXTURES,a=new Int32Array(o),s=0;s<o;s++)a[s]=s;var u={tint:new Float32Array([1,1,1,1]),translationMatrix:new pt,default:ue.from({uSamplers:a},!0)},h=t.plugins[n]._shader.program;on[n]=new he(h,u)}i=on[n]}return i},e.prototype._calculateBounds=function(){this.finishPoly();var t=this._geometry;if(!!t.graphicsData.length){var i=t.bounds,n=i.minX,o=i.minY,a=i.maxX,s=i.maxY;this._bounds.addFrame(this.transform,n,o,a,s)}},e.prototype.containsPoint=function(t){return this.worldTransform.applyInverse(t,e._TEMP_POINT),this._geometry.containsPoint(e._TEMP_POINT)},e.prototype.calculateTints=function(){if(this.batchTint!==this.tint){this.batchTint=this.tint;for(var t=yt(this.tint,Zp),i=0;i<this.batches.length;i++){var n=this.batches[i],o=n._batchRGB,a=t[0]*o[0]*255,s=t[1]*o[1]*255,u=t[2]*o[2]*255,h=(a<<16)+(s<<8)+(u|0);n._tintRGB=(h>>16)+(h&65280)+((h&255)<<16)}}},e.prototype.calculateVertices=function(){var t=this.transform._worldID;if(this._transformID!==t){this._transformID=t;for(var i=this.transform.worldTransform,n=i.a,o=i.b,a=i.c,s=i.d,u=i.tx,h=i.ty,l=this._geometry.points,f=this.vertexData,c=0,d=0;d<l.length;d+=2){var p=l[d],_=l[d+1];f[c++]=n*p+a*_+u,f[c++]=s*_+o*p+h}}},e.prototype.closePath=function(){var t=this.currentPath;return t&&(t.closeStroke=!0,this.finishPoly()),this},e.prototype.setMatrix=function(t){return this._matrix=t,this},e.prototype.beginHole=function(){return this.finishPoly(),this._holeMode=!0,this},e.prototype.endHole=function(){return this.finishPoly(),this._holeMode=!1,this},e.prototype.destroy=function(t){this._geometry.refCount--,this._geometry.refCount===0&&this._geometry.dispose(),this._matrix=null,this.currentPath=null,this._lineStyle.destroy(),this._lineStyle=null,this._fillStyle.destroy(),this._fillStyle=null,this._geometry=null,this.shader=null,this.vertexData=null,this.batches.length=0,this.batches=null,r.prototype.destroy.call(this,t)},e._TEMP_POINT=new Y,e}(Bt);/*!
 * @pixi/sprite - v6.1.3
 * Compiled Mon, 13 Sep 2021 15:29:31 UTC
 *
 * @pixi/sprite is licensed under the MIT License.
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
***************************************************************************** */var an=function(r,e){return an=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])},an(r,e)};function Jp(r,e){an(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Ye=new Y,Qp=new Uint16Array([0,1,2,0,2,3]),qe=function(r){Jp(e,r);function e(t){var i=r.call(this)||this;return i._anchor=new re(i._onAnchorUpdate,i,t?t.defaultAnchor.x:0,t?t.defaultAnchor.y:0),i._texture=null,i._width=0,i._height=0,i._tint=null,i._tintRGB=null,i.tint=16777215,i.blendMode=F.NORMAL,i._cachedTint=16777215,i.uvs=null,i.texture=t||L.EMPTY,i.vertexData=new Float32Array(8),i.vertexTrimmedData=null,i._transformID=-1,i._textureID=-1,i._transformTrimmedID=-1,i._textureTrimmedID=-1,i.indices=Qp,i.pluginName="batch",i.isSprite=!0,i._roundPixels=O.ROUND_PIXELS,i}return e.prototype._onTextureUpdate=function(){this._textureID=-1,this._textureTrimmedID=-1,this._cachedTint=16777215,this._width&&(this.scale.x=be(this.scale.x)*this._width/this._texture.orig.width),this._height&&(this.scale.y=be(this.scale.y)*this._height/this._texture.orig.height)},e.prototype._onAnchorUpdate=function(){this._transformID=-1,this._transformTrimmedID=-1},e.prototype.calculateVertices=function(){var t=this._texture;if(!(this._transformID===this.transform._worldID&&this._textureID===t._updateID)){this._textureID!==t._updateID&&(this.uvs=this._texture._uvs.uvsFloat32),this._transformID=this.transform._worldID,this._textureID=t._updateID;var i=this.transform.worldTransform,n=i.a,o=i.b,a=i.c,s=i.d,u=i.tx,h=i.ty,l=this.vertexData,f=t.trim,c=t.orig,d=this._anchor,p=0,_=0,v=0,g=0;if(f?(_=f.x-d._x*c.width,p=_+f.width,g=f.y-d._y*c.height,v=g+f.height):(_=-d._x*c.width,p=_+c.width,g=-d._y*c.height,v=g+c.height),l[0]=n*_+a*g+u,l[1]=s*g+o*_+h,l[2]=n*p+a*g+u,l[3]=s*g+o*p+h,l[4]=n*p+a*v+u,l[5]=s*v+o*p+h,l[6]=n*_+a*v+u,l[7]=s*v+o*_+h,this._roundPixels)for(var y=O.RESOLUTION,x=0;x<l.length;++x)l[x]=Math.round((l[x]*y|0)/y)}},e.prototype.calculateTrimmedVertices=function(){if(!this.vertexTrimmedData)this.vertexTrimmedData=new Float32Array(8);else if(this._transformTrimmedID===this.transform._worldID&&this._textureTrimmedID===this._texture._updateID)return;this._transformTrimmedID=this.transform._worldID,this._textureTrimmedID=this._texture._updateID;var t=this._texture,i=this.vertexTrimmedData,n=t.orig,o=this._anchor,a=this.transform.worldTransform,s=a.a,u=a.b,h=a.c,l=a.d,f=a.tx,c=a.ty,d=-o._x*n.width,p=d+n.width,_=-o._y*n.height,v=_+n.height;i[0]=s*d+h*_+f,i[1]=l*_+u*d+c,i[2]=s*p+h*_+f,i[3]=l*_+u*p+c,i[4]=s*p+h*v+f,i[5]=l*v+u*p+c,i[6]=s*d+h*v+f,i[7]=l*v+u*d+c},e.prototype._render=function(t){this.calculateVertices(),t.batch.setObjectRenderer(t.plugins[this.pluginName]),t.plugins[this.pluginName].render(this)},e.prototype._calculateBounds=function(){var t=this._texture.trim,i=this._texture.orig;!t||t.width===i.width&&t.height===i.height?(this.calculateVertices(),this._bounds.addQuad(this.vertexData)):(this.calculateTrimmedVertices(),this._bounds.addQuad(this.vertexTrimmedData))},e.prototype.getLocalBounds=function(t){return this.children.length===0?(this._bounds.minX=this._texture.orig.width*-this._anchor._x,this._bounds.minY=this._texture.orig.height*-this._anchor._y,this._bounds.maxX=this._texture.orig.width*(1-this._anchor._x),this._bounds.maxY=this._texture.orig.height*(1-this._anchor._y),t||(this._localBoundsRect||(this._localBoundsRect=new W),t=this._localBoundsRect),this._bounds.getRectangle(t)):r.prototype.getLocalBounds.call(this,t)},e.prototype.containsPoint=function(t){this.worldTransform.applyInverse(t,Ye);var i=this._texture.orig.width,n=this._texture.orig.height,o=-i*this.anchor.x,a=0;return!!(Ye.x>=o&&Ye.x<o+i&&(a=-n*this.anchor.y,Ye.y>=a&&Ye.y<a+n))},e.prototype.destroy=function(t){r.prototype.destroy.call(this,t),this._texture.off("update",this._onTextureUpdate,this),this._anchor=null;var i=typeof t=="boolean"?t:t&&t.texture;if(i){var n=typeof t=="boolean"?t:t&&t.baseTexture;this._texture.destroy(!!n)}this._texture=null},e.from=function(t,i){var n=t instanceof L?t:L.from(t,i);return new e(n)},Object.defineProperty(e.prototype,"roundPixels",{get:function(){return this._roundPixels},set:function(t){this._roundPixels!==t&&(this._transformID=-1),this._roundPixels=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"width",{get:function(){return Math.abs(this.scale.x)*this._texture.orig.width},set:function(t){var i=be(this.scale.x)||1;this.scale.x=i*t/this._texture.orig.width,this._width=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return Math.abs(this.scale.y)*this._texture.orig.height},set:function(t){var i=be(this.scale.y)||1;this.scale.y=i*t/this._texture.orig.height,this._height=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"anchor",{get:function(){return this._anchor},set:function(t){this._anchor.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"tint",{get:function(){return this._tint},set:function(t){this._tint=t,this._tintRGB=(t>>16)+(t&65280)+((t&255)<<16)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"texture",{get:function(){return this._texture},set:function(t){this._texture!==t&&(this._texture&&this._texture.off("update",this._onTextureUpdate,this),this._texture=t||L.EMPTY,this._cachedTint=16777215,this._textureID=-1,this._textureTrimmedID=-1,t&&(t.baseTexture.valid?this._onTextureUpdate():t.once("update",this._onTextureUpdate,this)))},enumerable:!1,configurable:!0}),e}(Bt);/*!
 * @pixi/text - v6.1.3
 * Compiled Mon, 13 Sep 2021 15:29:31 UTC
 *
 * @pixi/text is licensed under the MIT License.
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
***************************************************************************** */var sn=function(r,e){return sn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])},sn(r,e)};function tv(r,e){sn(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Ke;(function(r){r[r.LINEAR_VERTICAL=0]="LINEAR_VERTICAL",r[r.LINEAR_HORIZONTAL=1]="LINEAR_HORIZONTAL"})(Ke||(Ke={}));var un={align:"left",breakWords:!1,dropShadow:!1,dropShadowAlpha:1,dropShadowAngle:Math.PI/6,dropShadowBlur:0,dropShadowColor:"black",dropShadowDistance:5,fill:"black",fillGradientType:Ke.LINEAR_VERTICAL,fillGradientStops:[],fontFamily:"Arial",fontSize:26,fontStyle:"normal",fontVariant:"normal",fontWeight:"normal",letterSpacing:0,lineHeight:0,lineJoin:"miter",miterLimit:10,padding:0,stroke:"black",strokeThickness:0,textBaseline:"alphabetic",trim:!1,whiteSpace:"pre",wordWrap:!1,wordWrapWidth:100,leading:0},ev=["serif","sans-serif","monospace","cursive","fantasy","system-ui"],Re=function(){function r(e){this.styleID=0,this.reset(),ln(this,e,e)}return r.prototype.clone=function(){var e={};return ln(e,this,un),new r(e)},r.prototype.reset=function(){ln(this,un,un)},Object.defineProperty(r.prototype,"align",{get:function(){return this._align},set:function(e){this._align!==e&&(this._align=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"breakWords",{get:function(){return this._breakWords},set:function(e){this._breakWords!==e&&(this._breakWords=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"dropShadow",{get:function(){return this._dropShadow},set:function(e){this._dropShadow!==e&&(this._dropShadow=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"dropShadowAlpha",{get:function(){return this._dropShadowAlpha},set:function(e){this._dropShadowAlpha!==e&&(this._dropShadowAlpha=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"dropShadowAngle",{get:function(){return this._dropShadowAngle},set:function(e){this._dropShadowAngle!==e&&(this._dropShadowAngle=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"dropShadowBlur",{get:function(){return this._dropShadowBlur},set:function(e){this._dropShadowBlur!==e&&(this._dropShadowBlur=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"dropShadowColor",{get:function(){return this._dropShadowColor},set:function(e){var t=hn(e);this._dropShadowColor!==t&&(this._dropShadowColor=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"dropShadowDistance",{get:function(){return this._dropShadowDistance},set:function(e){this._dropShadowDistance!==e&&(this._dropShadowDistance=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"fill",{get:function(){return this._fill},set:function(e){var t=hn(e);this._fill!==t&&(this._fill=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"fillGradientType",{get:function(){return this._fillGradientType},set:function(e){this._fillGradientType!==e&&(this._fillGradientType=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"fillGradientStops",{get:function(){return this._fillGradientStops},set:function(e){rv(this._fillGradientStops,e)||(this._fillGradientStops=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"fontFamily",{get:function(){return this._fontFamily},set:function(e){this.fontFamily!==e&&(this._fontFamily=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"fontSize",{get:function(){return this._fontSize},set:function(e){this._fontSize!==e&&(this._fontSize=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"fontStyle",{get:function(){return this._fontStyle},set:function(e){this._fontStyle!==e&&(this._fontStyle=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"fontVariant",{get:function(){return this._fontVariant},set:function(e){this._fontVariant!==e&&(this._fontVariant=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"fontWeight",{get:function(){return this._fontWeight},set:function(e){this._fontWeight!==e&&(this._fontWeight=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"letterSpacing",{get:function(){return this._letterSpacing},set:function(e){this._letterSpacing!==e&&(this._letterSpacing=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"lineHeight",{get:function(){return this._lineHeight},set:function(e){this._lineHeight!==e&&(this._lineHeight=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"leading",{get:function(){return this._leading},set:function(e){this._leading!==e&&(this._leading=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"lineJoin",{get:function(){return this._lineJoin},set:function(e){this._lineJoin!==e&&(this._lineJoin=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"miterLimit",{get:function(){return this._miterLimit},set:function(e){this._miterLimit!==e&&(this._miterLimit=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"padding",{get:function(){return this._padding},set:function(e){this._padding!==e&&(this._padding=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"stroke",{get:function(){return this._stroke},set:function(e){var t=hn(e);this._stroke!==t&&(this._stroke=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"strokeThickness",{get:function(){return this._strokeThickness},set:function(e){this._strokeThickness!==e&&(this._strokeThickness=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"textBaseline",{get:function(){return this._textBaseline},set:function(e){this._textBaseline!==e&&(this._textBaseline=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"trim",{get:function(){return this._trim},set:function(e){this._trim!==e&&(this._trim=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"whiteSpace",{get:function(){return this._whiteSpace},set:function(e){this._whiteSpace!==e&&(this._whiteSpace=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"wordWrap",{get:function(){return this._wordWrap},set:function(e){this._wordWrap!==e&&(this._wordWrap=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"wordWrapWidth",{get:function(){return this._wordWrapWidth},set:function(e){this._wordWrapWidth!==e&&(this._wordWrapWidth=e,this.styleID++)},enumerable:!1,configurable:!0}),r.prototype.toFontString=function(){var e=typeof this.fontSize=="number"?this.fontSize+"px":this.fontSize,t=this.fontFamily;Array.isArray(this.fontFamily)||(t=this.fontFamily.split(","));for(var i=t.length-1;i>=0;i--){var n=t[i].trim();!/([\"\'])[^\'\"]+\1/.test(n)&&ev.indexOf(n)<0&&(n='"'+n+'"'),t[i]=n}return this.fontStyle+" "+this.fontVariant+" "+this.fontWeight+" "+e+" "+t.join(",")},r}();function Is(r){return typeof r=="number"?Zo(r):(typeof r=="string"&&r.indexOf("0x")===0&&(r=r.replace("0x","#")),r)}function hn(r){if(Array.isArray(r)){for(var e=0;e<r.length;++e)r[e]=Is(r[e]);return r}else return Is(r)}function rv(r,e){if(!Array.isArray(r)||!Array.isArray(e)||r.length!==e.length)return!1;for(var t=0;t<r.length;++t)if(r[t]!==e[t])return!1;return!0}function ln(r,e,t){for(var i in t)Array.isArray(e[i])?r[i]=e[i].slice():r[i]=e[i]}var Ct=function(){function r(e,t,i,n,o,a,s,u,h){this.text=e,this.style=t,this.width=i,this.height=n,this.lines=o,this.lineWidths=a,this.lineHeight=s,this.maxLineWidth=u,this.fontProperties=h}return r.measureText=function(e,t,i,n){n===void 0&&(n=r._canvas),i=i==null?t.wordWrap:i;var o=t.toFontString(),a=r.measureFont(o);a.fontSize===0&&(a.fontSize=t.fontSize,a.ascent=t.fontSize);var s=n.getContext("2d");s.font=o;for(var u=i?r.wordWrap(e,t,n):e,h=u.split(/(?:\r\n|\r|\n)/),l=new Array(h.length),f=0,c=0;c<h.length;c++){var d=s.measureText(h[c]).width+(h[c].length-1)*t.letterSpacing;l[c]=d,f=Math.max(f,d)}var p=f+t.strokeThickness;t.dropShadow&&(p+=t.dropShadowDistance);var _=t.lineHeight||a.fontSize+t.strokeThickness,v=Math.max(_,a.fontSize+t.strokeThickness)+(h.length-1)*(_+t.leading);return t.dropShadow&&(v+=t.dropShadowDistance),new r(e,t,p,v,h,l,_+t.leading,f,a)},r.wordWrap=function(e,t,i){i===void 0&&(i=r._canvas);for(var n=i.getContext("2d"),o=0,a="",s="",u=Object.create(null),h=t.letterSpacing,l=t.whiteSpace,f=r.collapseSpaces(l),c=r.collapseNewlines(l),d=!f,p=t.wordWrapWidth+h,_=r.tokenize(e),v=0;v<_.length;v++){var g=_[v];if(r.isNewline(g)){if(!c){s+=r.addLine(a),d=!f,a="",o=0;continue}g=" "}if(f){var y=r.isBreakingSpace(g),x=r.isBreakingSpace(a[a.length-1]);if(y&&x)continue}var T=r.getFromCache(g,h,u,n);if(T>p)if(a!==""&&(s+=r.addLine(a),a="",o=0),r.canBreakWords(g,t.breakWords))for(var m=r.wordWrapSplit(g),b=0;b<m.length;b++){for(var w=m[b],S=1;m[b+S];){var E=m[b+S],C=w[w.length-1];if(!r.canBreakChars(C,E,g,b,t.breakWords))w+=E;else break;S++}b+=w.length-1;var U=r.getFromCache(w,h,u,n);U+o>p&&(s+=r.addLine(a),d=!1,a="",o=0),a+=w,o+=U}else{a.length>0&&(s+=r.addLine(a),a="",o=0);var N=v===_.length-1;s+=r.addLine(g,!N),d=!1,a="",o=0}else T+o>p&&(d=!1,s+=r.addLine(a),a="",o=0),(a.length>0||!r.isBreakingSpace(g)||d)&&(a+=g,o+=T)}return s+=r.addLine(a,!1),s},r.addLine=function(e,t){return t===void 0&&(t=!0),e=r.trimRight(e),e=t?e+`
`:e,e},r.getFromCache=function(e,t,i,n){var o=i[e];if(typeof o!="number"){var a=e.length*t;o=n.measureText(e).width+a,i[e]=o}return o},r.collapseSpaces=function(e){return e==="normal"||e==="pre-line"},r.collapseNewlines=function(e){return e==="normal"},r.trimRight=function(e){if(typeof e!="string")return"";for(var t=e.length-1;t>=0;t--){var i=e[t];if(!r.isBreakingSpace(i))break;e=e.slice(0,-1)}return e},r.isNewline=function(e){return typeof e!="string"?!1:r._newlines.indexOf(e.charCodeAt(0))>=0},r.isBreakingSpace=function(e,t){return typeof e!="string"?!1:r._breakingSpaces.indexOf(e.charCodeAt(0))>=0},r.tokenize=function(e){var t=[],i="";if(typeof e!="string")return t;for(var n=0;n<e.length;n++){var o=e[n],a=e[n+1];if(r.isBreakingSpace(o,a)||r.isNewline(o)){i!==""&&(t.push(i),i=""),t.push(o);continue}i+=o}return i!==""&&t.push(i),t},r.canBreakWords=function(e,t){return t},r.canBreakChars=function(e,t,i,n,o){return!0},r.wordWrapSplit=function(e){return e.split("")},r.measureFont=function(e){if(r._fonts[e])return r._fonts[e];var t={ascent:0,descent:0,fontSize:0},i=r._canvas,n=r._context;n.font=e;var o=r.METRICS_STRING+r.BASELINE_SYMBOL,a=Math.ceil(n.measureText(o).width),s=Math.ceil(n.measureText(r.BASELINE_SYMBOL).width),u=Math.ceil(r.HEIGHT_MULTIPLIER*s);s=s*r.BASELINE_MULTIPLIER|0,i.width=a,i.height=u,n.fillStyle="#f00",n.fillRect(0,0,a,u),n.font=e,n.textBaseline="alphabetic",n.fillStyle="#000",n.fillText(o,0,s);var h=n.getImageData(0,0,a,u).data,l=h.length,f=a*4,c=0,d=0,p=!1;for(c=0;c<s;++c){for(var _=0;_<f;_+=4)if(h[d+_]!==255){p=!0;break}if(!p)d+=f;else break}for(t.ascent=s-c,d=l-f,p=!1,c=u;c>s;--c){for(var _=0;_<f;_+=4)if(h[d+_]!==255){p=!0;break}if(!p)d-=f;else break}return t.descent=c-s,t.fontSize=t.ascent+t.descent,r._fonts[e]=t,t},r.clearMetrics=function(e){e===void 0&&(e=""),e?delete r._fonts[e]:r._fonts={}},r}(),Dr=function(){try{var r=new OffscreenCanvas(0,0),e=r.getContext("2d");return e&&e.measureText?r:document.createElement("canvas")}catch{return document.createElement("canvas")}}();Dr.width=Dr.height=10;Ct._canvas=Dr;Ct._context=Dr.getContext("2d");Ct._fonts={};Ct.METRICS_STRING="|\xC9q\xC5";Ct.BASELINE_SYMBOL="M";Ct.BASELINE_MULTIPLIER=1.4;Ct.HEIGHT_MULTIPLIER=2;Ct._newlines=[10,13];Ct._breakingSpaces=[9,32,8192,8193,8194,8195,8196,8197,8198,8200,8201,8202,8287,12288];var iv={texture:!0,children:!1,baseTexture:!0},Ss=function(r){tv(e,r);function e(t,i,n){var o=this,a=!1;n||(n=document.createElement("canvas"),a=!0),n.width=3,n.height=3;var s=L.from(n);return s.orig=new W,s.trim=new W,o=r.call(this,s)||this,o._ownCanvas=a,o.canvas=n,o.context=o.canvas.getContext("2d"),o._resolution=O.RESOLUTION,o._autoResolution=!0,o._text=null,o._style=null,o._styleListener=null,o._font="",o.text=t,o.style=i,o.localStyleID=-1,o}return e.prototype.updateText=function(t){var i=this._style;if(this.localStyleID!==i.styleID&&(this.dirty=!0,this.localStyleID=i.styleID),!(!this.dirty&&t)){this._font=this._style.toFontString();var n=this.context,o=Ct.measureText(this._text||" ",this._style,this._style.wordWrap,this.canvas),a=o.width,s=o.height,u=o.lines,h=o.lineHeight,l=o.lineWidths,f=o.maxLineWidth,c=o.fontProperties;this.canvas.width=Math.ceil(Math.ceil(Math.max(1,a)+i.padding*2)*this._resolution),this.canvas.height=Math.ceil(Math.ceil(Math.max(1,s)+i.padding*2)*this._resolution),n.scale(this._resolution,this._resolution),n.clearRect(0,0,this.canvas.width,this.canvas.height),n.font=this._font,n.lineWidth=i.strokeThickness,n.textBaseline=i.textBaseline,n.lineJoin=i.lineJoin,n.miterLimit=i.miterLimit;for(var d,p,_=i.dropShadow?2:1,v=0;v<_;++v){var g=i.dropShadow&&v===0,y=g?Math.ceil(Math.max(1,s)+i.padding*2):0,x=y*this._resolution;if(g){n.fillStyle="black",n.strokeStyle="black";var T=i.dropShadowColor,m=yt(typeof T=="number"?T:Jo(T));n.shadowColor="rgba("+m[0]*255+","+m[1]*255+","+m[2]*255+","+i.dropShadowAlpha+")",n.shadowBlur=i.dropShadowBlur,n.shadowOffsetX=Math.cos(i.dropShadowAngle)*i.dropShadowDistance,n.shadowOffsetY=Math.sin(i.dropShadowAngle)*i.dropShadowDistance+x}else n.fillStyle=this._generateFillStyle(i,u,o),n.strokeStyle=i.stroke,n.shadowColor="black",n.shadowBlur=0,n.shadowOffsetX=0,n.shadowOffsetY=0;var b=(h-c.fontSize)/2;(!e.nextLineHeightBehavior||h-c.fontSize<0)&&(b=0);for(var w=0;w<u.length;w++)d=i.strokeThickness/2,p=i.strokeThickness/2+w*h+c.ascent+b,i.align==="right"?d+=f-l[w]:i.align==="center"&&(d+=(f-l[w])/2),i.stroke&&i.strokeThickness&&this.drawLetterSpacing(u[w],d+i.padding,p+i.padding-y,!0),i.fill&&this.drawLetterSpacing(u[w],d+i.padding,p+i.padding-y)}this.updateTexture()}},e.prototype.drawLetterSpacing=function(t,i,n,o){o===void 0&&(o=!1);var a=this._style,s=a.letterSpacing;if(s===0){o?this.context.strokeText(t,i,n):this.context.fillText(t,i,n);return}for(var u=i,h=Array.from?Array.from(t):t.split(""),l=this.context.measureText(t).width,f=0,c=0;c<h.length;++c){var d=h[c];o?this.context.strokeText(d,u,n):this.context.fillText(d,u,n),f=this.context.measureText(t.substring(c+1)).width,u+=l-f+s,l=f}},e.prototype.updateTexture=function(){var t=this.canvas;if(this._style.trim){var i=pc(t);i.data&&(t.width=i.width,t.height=i.height,this.context.putImageData(i.data,0,0))}var n=this._texture,o=this._style,a=o.trim?0:o.padding,s=n.baseTexture;n.trim.width=n._frame.width=t.width/this._resolution,n.trim.height=n._frame.height=t.height/this._resolution,n.trim.x=-a,n.trim.y=-a,n.orig.width=n._frame.width-a*2,n.orig.height=n._frame.height-a*2,this._onTextureUpdate(),s.setRealSize(t.width,t.height,this._resolution),n.updateUvs(),this._recursivePostUpdateTransform(),this.dirty=!1},e.prototype._render=function(t){this._autoResolution&&this._resolution!==t.resolution&&(this._resolution=t.resolution,this.dirty=!0),this.updateText(!0),r.prototype._render.call(this,t)},e.prototype.getLocalBounds=function(t){return this.updateText(!0),r.prototype.getLocalBounds.call(this,t)},e.prototype._calculateBounds=function(){this.updateText(!0),this.calculateVertices(),this._bounds.addQuad(this.vertexData)},e.prototype._generateFillStyle=function(t,i,n){var o=t.fill;if(Array.isArray(o)){if(o.length===1)return o[0]}else return o;var a,s=t.dropShadow?t.dropShadowDistance:0,u=t.padding||0,h=this.canvas.width/this._resolution-s-u*2,l=this.canvas.height/this._resolution-s-u*2,f=o.slice(),c=t.fillGradientStops.slice();if(!c.length)for(var d=f.length+1,p=1;p<d;++p)c.push(p/d);if(f.unshift(o[0]),c.unshift(0),f.push(o[o.length-1]),c.push(1),t.fillGradientType===Ke.LINEAR_VERTICAL){a=this.context.createLinearGradient(h/2,u,h/2,l+u);for(var _=n.fontProperties.fontSize+t.strokeThickness,p=0;p<i.length;p++){var v=n.lineHeight*(p-1)+_,g=n.lineHeight*p,y=g;p>0&&v>g&&(y=(g+v)/2);var x=g+_,T=n.lineHeight*(p+1),m=x;p+1<i.length&&T<x&&(m=(x+T)/2);for(var b=(m-y)/l,w=0;w<f.length;w++){var S=0;typeof c[w]=="number"?S=c[w]:S=w/f.length;var E=Math.min(1,Math.max(0,y/l+S*b));E=Number(E.toFixed(5)),a.addColorStop(E,f[w])}}}else{a=this.context.createLinearGradient(u,l/2,h+u,l/2);for(var C=f.length+1,U=1,p=0;p<f.length;p++){var N=void 0;typeof c[p]=="number"?N=c[p]:N=U/C,a.addColorStop(N,f[p]),U++}}return a},e.prototype.destroy=function(t){typeof t=="boolean"&&(t={children:t}),t=Object.assign({},iv,t),r.prototype.destroy.call(this,t),this._ownCanvas&&(this.canvas.height=this.canvas.width=0),this.context=null,this.canvas=null,this._style=null},Object.defineProperty(e.prototype,"width",{get:function(){return this.updateText(!0),Math.abs(this.scale.x)*this._texture.orig.width},set:function(t){this.updateText(!0);var i=be(this.scale.x)||1;this.scale.x=i*t/this._texture.orig.width,this._width=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this.updateText(!0),Math.abs(this.scale.y)*this._texture.orig.height},set:function(t){this.updateText(!0);var i=be(this.scale.y)||1;this.scale.y=i*t/this._texture.orig.height,this._height=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"style",{get:function(){return this._style},set:function(t){t=t||{},t instanceof Re?this._style=t:this._style=new Re(t),this.localStyleID=-1,this.dirty=!0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"text",{get:function(){return this._text},set:function(t){t=String(t==null?"":t),this._text!==t&&(this._text=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"resolution",{get:function(){return this._resolution},set:function(t){this._autoResolution=!1,this._resolution!==t&&(this._resolution=t,this.dirty=!0)},enumerable:!1,configurable:!0}),e.nextLineHeightBehavior=!1,e}(qe);/*!
 * @pixi/prepare - v6.1.3
 * Compiled Mon, 13 Sep 2021 15:29:31 UTC
 *
 * @pixi/prepare is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */O.UPLOADS_PER_FRAME=4;/*! *****************************************************************************
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
***************************************************************************** */var fn=function(r,e){return fn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])},fn(r,e)};function nv(r,e){fn(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var ov=function(){function r(e){this.maxItemsPerFrame=e,this.itemsLeft=0}return r.prototype.beginFrame=function(){this.itemsLeft=this.maxItemsPerFrame},r.prototype.allowedToUpload=function(){return this.itemsLeft-- >0},r}();function av(r,e){var t=!1;if(r&&r._textures&&r._textures.length){for(var i=0;i<r._textures.length;i++)if(r._textures[i]instanceof L){var n=r._textures[i].baseTexture;e.indexOf(n)===-1&&(e.push(n),t=!0)}}return t}function sv(r,e){if(r.baseTexture instanceof Z){var t=r.baseTexture;return e.indexOf(t)===-1&&e.push(t),!0}return!1}function uv(r,e){if(r._texture&&r._texture instanceof L){var t=r._texture.baseTexture;return e.indexOf(t)===-1&&e.push(t),!0}return!1}function hv(r,e){return e instanceof Ss?(e.updateText(!0),!0):!1}function lv(r,e){if(e instanceof Re){var t=e.toFontString();return Ct.measureFont(t),!0}return!1}function fv(r,e){if(r instanceof Ss){e.indexOf(r.style)===-1&&e.push(r.style),e.indexOf(r)===-1&&e.push(r);var t=r._texture.baseTexture;return e.indexOf(t)===-1&&e.push(t),!0}return!1}function cv(r,e){return r instanceof Re?(e.indexOf(r)===-1&&e.push(r),!0):!1}var dv=function(){function r(e){var t=this;this.limiter=new ov(O.UPLOADS_PER_FRAME),this.renderer=e,this.uploadHookHelper=null,this.queue=[],this.addHooks=[],this.uploadHooks=[],this.completes=[],this.ticking=!1,this.delayedTick=function(){!t.queue||t.prepareItems()},this.registerFindHook(fv),this.registerFindHook(cv),this.registerFindHook(av),this.registerFindHook(sv),this.registerFindHook(uv),this.registerUploadHook(hv),this.registerUploadHook(lv)}return r.prototype.upload=function(e,t){typeof e=="function"&&(t=e,e=null),e&&this.add(e),this.queue.length?(t&&this.completes.push(t),this.ticking||(this.ticking=!0,xt.system.addOnce(this.tick,this,zt.UTILITY))):t&&t()},r.prototype.tick=function(){setTimeout(this.delayedTick,0)},r.prototype.prepareItems=function(){for(this.limiter.beginFrame();this.queue.length&&this.limiter.allowedToUpload();){var e=this.queue[0],t=!1;if(e&&!e._destroyed){for(var i=0,n=this.uploadHooks.length;i<n;i++)if(this.uploadHooks[i](this.uploadHookHelper,e)){this.queue.shift(),t=!0;break}}t||this.queue.shift()}if(this.queue.length)xt.system.addOnce(this.tick,this,zt.UTILITY);else{this.ticking=!1;var o=this.completes.slice(0);this.completes.length=0;for(var i=0,n=o.length;i<n;i++)o[i]()}},r.prototype.registerFindHook=function(e){return e&&this.addHooks.push(e),this},r.prototype.registerUploadHook=function(e){return e&&this.uploadHooks.push(e),this},r.prototype.add=function(e){for(var t=0,i=this.addHooks.length;t<i&&!this.addHooks[t](e,this.queue);t++);if(e instanceof Bt)for(var t=e.children.length-1;t>=0;t--)this.add(e.children[t]);return this},r.prototype.destroy=function(){this.ticking&&xt.system.remove(this.tick,this),this.ticking=!1,this.addHooks=null,this.uploadHooks=null,this.renderer=null,this.completes=null,this.queue=null,this.limiter=null,this.uploadHookHelper=null},r}();function Rs(r,e){return e instanceof Z?(e._glTextures[r.CONTEXT_UID]||r.texture.bind(e),!0):!1}function pv(r,e){if(!(e instanceof Ps))return!1;var t=e.geometry;e.finishPoly(),t.updateBatches();for(var i=t.batches,n=0;n<i.length;n++){var o=i[n].style.texture;o&&Rs(r,o.baseTexture)}return t.batchable||r.geometry.bind(t,e._resolveDirectShader(r)),!0}function vv(r,e){return r instanceof Ps?(e.push(r),!0):!1}var _v=function(r){nv(e,r);function e(t){var i=r.call(this,t)||this;return i.uploadHookHelper=i.renderer,i.registerFindHook(vv),i.registerUploadHook(Rs),i.registerUploadHook(pv),i}return e}(dv);/*!
 * @pixi/spritesheet - v6.1.3
 * Compiled Mon, 13 Sep 2021 15:29:31 UTC
 *
 * @pixi/spritesheet is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var mv=function(){function r(e,t,i){i===void 0&&(i=null),this._texture=e instanceof L?e:null,this.baseTexture=e instanceof Z?e:this._texture.baseTexture,this.textures={},this.animations={},this.data=t;var n=this.baseTexture.resource;this.resolution=this._updateResolution(i||(n?n.url:null)),this._frames=this.data.frames,this._frameKeys=Object.keys(this._frames),this._batchIndex=0,this._callback=null}return r.prototype._updateResolution=function(e){e===void 0&&(e=null);var t=this.data.meta.scale,i=dr(e,null);return i===null&&(i=t!==void 0?parseFloat(t):1),i!==1&&this.baseTexture.setResolution(i),i},r.prototype.parse=function(e){this._batchIndex=0,this._callback=e,this._frameKeys.length<=r.BATCH_SIZE?(this._processFrames(0),this._processAnimations(),this._parseComplete()):this._nextBatch()},r.prototype._processFrames=function(e){for(var t=e,i=r.BATCH_SIZE;t-e<i&&t<this._frameKeys.length;){var n=this._frameKeys[t],o=this._frames[n],a=o.frame;if(a){var s=null,u=null,h=o.trimmed!==!1&&o.sourceSize?o.sourceSize:o.frame,l=new W(0,0,Math.floor(h.w)/this.resolution,Math.floor(h.h)/this.resolution);o.rotated?s=new W(Math.floor(a.x)/this.resolution,Math.floor(a.y)/this.resolution,Math.floor(a.h)/this.resolution,Math.floor(a.w)/this.resolution):s=new W(Math.floor(a.x)/this.resolution,Math.floor(a.y)/this.resolution,Math.floor(a.w)/this.resolution,Math.floor(a.h)/this.resolution),o.trimmed!==!1&&o.spriteSourceSize&&(u=new W(Math.floor(o.spriteSourceSize.x)/this.resolution,Math.floor(o.spriteSourceSize.y)/this.resolution,Math.floor(a.w)/this.resolution,Math.floor(a.h)/this.resolution)),this.textures[n]=new L(this.baseTexture,s,l,u,o.rotated?2:0,o.anchor),L.addToCache(this.textures[n],n)}t++}},r.prototype._processAnimations=function(){var e=this.data.animations||{};for(var t in e){this.animations[t]=[];for(var i=0;i<e[t].length;i++){var n=e[t][i];this.animations[t].push(this.textures[n])}}},r.prototype._parseComplete=function(){var e=this._callback;this._callback=null,this._batchIndex=0,e.call(this,this.textures)},r.prototype._nextBatch=function(){var e=this;this._processFrames(this._batchIndex*r.BATCH_SIZE),this._batchIndex++,setTimeout(function(){e._batchIndex*r.BATCH_SIZE<e._frameKeys.length?e._nextBatch():(e._processAnimations(),e._parseComplete())},0)},r.prototype.destroy=function(e){var t;e===void 0&&(e=!1);for(var i in this.textures)this.textures[i].destroy();this._frames=null,this._frameKeys=null,this.data=null,this.textures=null,e&&((t=this._texture)===null||t===void 0||t.destroy(),this.baseTexture.destroy()),this._texture=null,this.baseTexture=null},r.BATCH_SIZE=1e3,r}(),gv=function(){function r(){}return r.use=function(e,t){var i,n,o=this,a=e.name+"_image";if(!e.data||e.type!==ht.TYPE.JSON||!e.data.frames||o.resources[a]){t();return}var s=(n=(i=e.data)===null||i===void 0?void 0:i.meta)===null||n===void 0?void 0:n.related_multi_packs;if(Array.isArray(s))for(var u=function(p){if(typeof p!="string")return"continue";var _=p.replace(".json",""),v=ye.resolve(e.url.replace(o.baseUrl,""),p);if(o.resources[_]||Object.values(o.resources).some(function(y){return ye.format(ye.parse(y.url))===v}))return"continue";var g={crossOrigin:e.crossOrigin,loadType:ht.LOAD_TYPE.XHR,xhrType:ht.XHR_RESPONSE_TYPE.JSON,parentResource:e,metadata:e.metadata};o.add(_,v,g)},h=0,l=s;h<l.length;h++){var f=l[h];u(f)}var c={crossOrigin:e.crossOrigin,metadata:e.metadata.imageMetadata,parentResource:e},d=r.getResourcePath(e,o.baseUrl);o.add(a,d,c,function(_){if(_.error){t(_.error);return}var v=new mv(_.texture,e.data,e.url);v.parse(function(){e.spritesheet=v,e.textures=v.textures,t()})})},r.getResourcePath=function(e,t){return e.isDataUrl?e.data.meta.image:ye.resolve(e.url.replace(t,""),e.data.meta.image)},r}();/*!
 * @pixi/sprite-tiling - v6.1.3
 * Compiled Mon, 13 Sep 2021 15:29:31 UTC
 *
 * @pixi/sprite-tiling is licensed under the MIT License.
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
***************************************************************************** */var cn=function(r,e){return cn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])},cn(r,e)};function As(r,e){cn(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Ze=new Y;(function(r){As(e,r);function e(t,i,n){i===void 0&&(i=100),n===void 0&&(n=100);var o=r.call(this,t)||this;return o.tileTransform=new ha,o._width=i,o._height=n,o.uvMatrix=o.texture.uvMatrix||new Gi(t),o.pluginName="tilingSprite",o.uvRespectAnchor=!1,o}return Object.defineProperty(e.prototype,"clampMargin",{get:function(){return this.uvMatrix.clampMargin},set:function(t){this.uvMatrix.clampMargin=t,this.uvMatrix.update(!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"tileScale",{get:function(){return this.tileTransform.scale},set:function(t){this.tileTransform.scale.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"tilePosition",{get:function(){return this.tileTransform.position},set:function(t){this.tileTransform.position.copyFrom(t)},enumerable:!1,configurable:!0}),e.prototype._onTextureUpdate=function(){this.uvMatrix&&(this.uvMatrix.texture=this._texture),this._cachedTint=16777215},e.prototype._render=function(t){var i=this._texture;!i||!i.valid||(this.tileTransform.updateLocalTransform(),this.uvMatrix.update(),t.batch.setObjectRenderer(t.plugins[this.pluginName]),t.plugins[this.pluginName].render(this))},e.prototype._calculateBounds=function(){var t=this._width*-this._anchor._x,i=this._height*-this._anchor._y,n=this._width*(1-this._anchor._x),o=this._height*(1-this._anchor._y);this._bounds.addFrame(this.transform,t,i,n,o)},e.prototype.getLocalBounds=function(t){return this.children.length===0?(this._bounds.minX=this._width*-this._anchor._x,this._bounds.minY=this._height*-this._anchor._y,this._bounds.maxX=this._width*(1-this._anchor._x),this._bounds.maxY=this._height*(1-this._anchor._y),t||(this._localBoundsRect||(this._localBoundsRect=new W),t=this._localBoundsRect),this._bounds.getRectangle(t)):r.prototype.getLocalBounds.call(this,t)},e.prototype.containsPoint=function(t){this.worldTransform.applyInverse(t,Ze);var i=this._width,n=this._height,o=-i*this.anchor._x;if(Ze.x>=o&&Ze.x<o+i){var a=-n*this.anchor._y;if(Ze.y>=a&&Ze.y<a+n)return!0}return!1},e.prototype.destroy=function(t){r.prototype.destroy.call(this,t),this.tileTransform=null,this.uvMatrix=null},e.from=function(t,i){var n=t instanceof L?t:L.from(t,i);return new e(n,i.width,i.height)},Object.defineProperty(e.prototype,"width",{get:function(){return this._width},set:function(t){this._width=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this._height},set:function(t){this._height=t},enumerable:!1,configurable:!0}),e})(qe);var Os=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTransform;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;
}
`,yv=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uColor;
uniform mat3 uMapCoord;
uniform vec4 uClampFrame;
uniform vec2 uClampOffset;

void main(void)
{
    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);
    coord = (uMapCoord * vec3(coord, 1.0)).xy;
    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

    vec4 texSample = texture2D(uSampler, coord);
    gl_FragColor = texSample * uColor;
}
`,xv=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uColor;

void main(void)
{
    vec4 sample = texture2D(uSampler, vTextureCoord);
    gl_FragColor = sample * uColor;
}
`,Gr=new pt,bv=function(r){As(e,r);function e(t){var i=r.call(this,t)||this,n={globals:i.renderer.globalUniforms};return i.shader=he.from(Os,yv,n),i.simpleShader=he.from(Os,xv,n),i.quad=new wa,i.state=le.for2d(),i}return e.prototype.render=function(t){var i=this.renderer,n=this.quad,o=n.vertices;o[0]=o[6]=t._width*-t.anchor.x,o[1]=o[3]=t._height*-t.anchor.y,o[2]=o[4]=t._width*(1-t.anchor.x),o[5]=o[7]=t._height*(1-t.anchor.y);var a=t.uvRespectAnchor?t.anchor.x:0,s=t.uvRespectAnchor?t.anchor.y:0;o=n.uvs,o[0]=o[6]=-a,o[1]=o[3]=-s,o[2]=o[4]=1-a,o[5]=o[7]=1-s,n.invalidate();var u=t._texture,h=u.baseTexture,l=t.tileTransform.localTransform,f=t.uvMatrix,c=h.isPowerOfTwo&&u.frame.width===h.width&&u.frame.height===h.height;c&&(h._glTextures[i.CONTEXT_UID]?c=h.wrapMode!==jt.CLAMP:h.wrapMode===jt.CLAMP&&(h.wrapMode=jt.REPEAT));var d=c?this.simpleShader:this.shader,p=u.width,_=u.height,v=t._width,g=t._height;Gr.set(l.a*p/v,l.b*p/g,l.c*_/v,l.d*_/g,l.tx/v,l.ty/g),Gr.invert(),c?Gr.prepend(f.mapCoord):(d.uniforms.uMapCoord=f.mapCoord.toArray(!0),d.uniforms.uClampFrame=f.uClampFrame,d.uniforms.uClampOffset=f.uClampOffset),d.uniforms.uTransform=Gr.toArray(!0),d.uniforms.uColor=ea(t.tint,t.worldAlpha,d.uniforms.uColor,h.alphaMode),d.uniforms.translationMatrix=t.transform.worldTransform.toArray(!0),d.uniforms.uSampler=u,i.shader.bind(d),i.geometry.bind(n),this.state.blendMode=ta(t.blendMode,h.alphaMode),i.state.set(this.state),i.geometry.draw(this.renderer.gl.TRIANGLES,6,0)},e}(Cr);/*!
 * @pixi/mesh - v6.1.3
 * Compiled Mon, 13 Sep 2021 15:29:31 UTC
 *
 * @pixi/mesh is licensed under the MIT License.
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
***************************************************************************** */var dn=function(r,e){return dn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])},dn(r,e)};function pn(r,e){dn(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Tv=function(){function r(e,t){this.uvBuffer=e,this.uvMatrix=t,this.data=null,this._bufferUpdateId=-1,this._textureUpdateId=-1,this._updateID=0}return r.prototype.update=function(e){if(!(!e&&this._bufferUpdateId===this.uvBuffer._updateID&&this._textureUpdateId===this.uvMatrix._updateID)){this._bufferUpdateId=this.uvBuffer._updateID,this._textureUpdateId=this.uvMatrix._updateID;var t=this.uvBuffer.data;(!this.data||this.data.length!==t.length)&&(this.data=new Float32Array(t.length)),this.uvMatrix.multiplyUvs(t,this.data),this._updateID++}},r}(),vn=new Y,Ns=new vr,Je=function(r){pn(e,r);function e(t,i,n,o){o===void 0&&(o=Pt.TRIANGLES);var a=r.call(this)||this;return a.geometry=t,t.refCount++,a.shader=i,a.state=n||le.for2d(),a.drawMode=o,a.start=0,a.size=0,a.uvs=null,a.indices=null,a.vertexData=new Float32Array(1),a.vertexDirty=-1,a._transformID=-1,a._roundPixels=O.ROUND_PIXELS,a.batchUvs=null,a}return Object.defineProperty(e.prototype,"uvBuffer",{get:function(){return this.geometry.buffers[1]},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"verticesBuffer",{get:function(){return this.geometry.buffers[0]},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"material",{get:function(){return this.shader},set:function(t){this.shader=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blendMode",{get:function(){return this.state.blendMode},set:function(t){this.state.blendMode=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"roundPixels",{get:function(){return this._roundPixels},set:function(t){this._roundPixels!==t&&(this._transformID=-1),this._roundPixels=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"tint",{get:function(){return"tint"in this.shader?this.shader.tint:null},set:function(t){this.shader.tint=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"texture",{get:function(){return"texture"in this.shader?this.shader.texture:null},set:function(t){this.shader.texture=t},enumerable:!1,configurable:!0}),e.prototype._render=function(t){var i=this.geometry.buffers[0].data,n=this.shader;n.batchable&&this.drawMode===Pt.TRIANGLES&&i.length<e.BATCHABLE_SIZE*2?this._renderToBatch(t):this._renderDefault(t)},e.prototype._renderDefault=function(t){var i=this.shader;i.alpha=this.worldAlpha,i.update&&i.update(),t.batch.flush(),i.uniforms.translationMatrix=this.transform.worldTransform.toArray(!0),t.shader.bind(i),t.state.set(this.state),t.geometry.bind(this.geometry,i),t.geometry.draw(this.drawMode,this.size,this.start,this.geometry.instanceCount)},e.prototype._renderToBatch=function(t){var i=this.geometry,n=this.shader;n.uvMatrix&&(n.uvMatrix.update(),this.calculateUvs()),this.calculateVertices(),this.indices=i.indexBuffer.data,this._tintRGB=n._tintRGB,this._texture=n.texture;var o=this.material.pluginName;t.batch.setObjectRenderer(t.plugins[o]),t.plugins[o].render(this)},e.prototype.calculateVertices=function(){var t=this.geometry,i=t.buffers[0],n=i.data,o=i._updateID;if(!(o===this.vertexDirty&&this._transformID===this.transform._worldID)){this._transformID=this.transform._worldID,this.vertexData.length!==n.length&&(this.vertexData=new Float32Array(n.length));for(var a=this.transform.worldTransform,s=a.a,u=a.b,h=a.c,l=a.d,f=a.tx,c=a.ty,d=this.vertexData,p=0;p<d.length/2;p++){var _=n[p*2],v=n[p*2+1];d[p*2]=s*_+h*v+f,d[p*2+1]=u*_+l*v+c}if(this._roundPixels)for(var g=O.RESOLUTION,p=0;p<d.length;++p)d[p]=Math.round((d[p]*g|0)/g);this.vertexDirty=o}},e.prototype.calculateUvs=function(){var t=this.geometry.buffers[1],i=this.shader;i.uvMatrix.isSimple?this.uvs=t.data:(this.batchUvs||(this.batchUvs=new Tv(t,i.uvMatrix)),this.batchUvs.update(),this.uvs=this.batchUvs.data)},e.prototype._calculateBounds=function(){this.calculateVertices(),this._bounds.addVertexData(this.vertexData,0,this.vertexData.length)},e.prototype.containsPoint=function(t){if(!this.getBounds().contains(t.x,t.y))return!1;this.worldTransform.applyInverse(t,vn);for(var i=this.geometry.getBuffer("aVertexPosition").data,n=Ns.points,o=this.geometry.getIndex().data,a=o.length,s=this.drawMode===4?3:1,u=0;u+2<a;u+=s){var h=o[u]*2,l=o[u+1]*2,f=o[u+2]*2;if(n[0]=i[h],n[1]=i[h+1],n[2]=i[l],n[3]=i[l+1],n[4]=i[f],n[5]=i[f+1],Ns.contains(vn.x,vn.y))return!0}return!1},e.prototype.destroy=function(t){r.prototype.destroy.call(this,t),this.geometry.refCount--,this.geometry.refCount===0&&this.geometry.dispose(),this._cachedTexture&&(this._cachedTexture.destroy(),this._cachedTexture=null),this.geometry=null,this.shader=null,this.state=null,this.uvs=null,this.indices=null,this.vertexData=null},e.BATCHABLE_SIZE=100,e}(Bt),Ev=`varying vec2 vTextureCoord;
uniform vec4 uColor;

uniform sampler2D uSampler;

void main(void)
{
    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;
}
`,Cv=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTextureMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;
}
`,kr=function(r){pn(e,r);function e(t,i){var n=this,o={uSampler:t,alpha:1,uTextureMatrix:pt.IDENTITY,uColor:new Float32Array([1,1,1,1])};return i=Object.assign({tint:16777215,alpha:1,pluginName:"batch"},i),i.uniforms&&Object.assign(o,i.uniforms),n=r.call(this,i.program||Sr.from(Cv,Ev),o)||this,n._colorDirty=!1,n.uvMatrix=new Gi(t),n.batchable=i.program===void 0,n.pluginName=i.pluginName,n.tint=i.tint,n.alpha=i.alpha,n}return Object.defineProperty(e.prototype,"texture",{get:function(){return this.uniforms.uSampler},set:function(t){this.uniforms.uSampler!==t&&(this.uniforms.uSampler=t,this.uvMatrix.texture=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"alpha",{get:function(){return this._alpha},set:function(t){t!==this._alpha&&(this._alpha=t,this._colorDirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"tint",{get:function(){return this._tint},set:function(t){t!==this._tint&&(this._tint=t,this._tintRGB=(t>>16)+(t&65280)+((t&255)<<16),this._colorDirty=!0)},enumerable:!1,configurable:!0}),e.prototype.update=function(){if(this._colorDirty){this._colorDirty=!1;var t=this.texture.baseTexture;ea(this._tint,this._alpha,this.uniforms.uColor,t.alphaMode)}this.uvMatrix.update()&&(this.uniforms.uTextureMatrix=this.uvMatrix.mapCoord)},e}(he),jr=function(r){pn(e,r);function e(t,i,n){var o=r.call(this)||this,a=new _t(t),s=new _t(i,!0),u=new _t(n,!0,!0);return o.addAttribute("aVertexPosition",a,2,!1,D.FLOAT).addAttribute("aTextureCoord",s,2,!1,D.FLOAT).addIndex(u),o._updateId=-1,o}return Object.defineProperty(e.prototype,"vertexDirtyId",{get:function(){return this.buffers[0]._updateID},enumerable:!1,configurable:!0}),e}(je);/*!
 * @pixi/text-bitmap - v6.1.3
 * Compiled Mon, 13 Sep 2021 15:29:31 UTC
 *
 * @pixi/text-bitmap is licensed under the MIT License.
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
***************************************************************************** */var _n=function(r,e){return _n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])},_n(r,e)};function wv(r,e){_n(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Xr=function(){function r(){this.info=[],this.common=[],this.page=[],this.char=[],this.kerning=[]}return r}(),Pv=function(){function r(){}return r.test=function(e){return typeof e=="string"&&e.indexOf("info face=")===0},r.parse=function(e){var t=e.match(/^[a-z]+\s+.+$/gm),i={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[]};for(var n in t){var o=t[n].match(/^[a-z]+/gm)[0],a=t[n].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),s={};for(var u in a){var h=a[u].split("="),l=h[0],f=h[1].replace(/"/gm,""),c=parseFloat(f),d=isNaN(c)?f:c;s[l]=d}i[o].push(s)}var p=new Xr;return i.info.forEach(function(_){return p.info.push({face:_.face,size:parseInt(_.size,10)})}),i.common.forEach(function(_){return p.common.push({lineHeight:parseInt(_.lineHeight,10)})}),i.page.forEach(function(_){return p.page.push({id:parseInt(_.id,10),file:_.file})}),i.char.forEach(function(_){return p.char.push({id:parseInt(_.id,10),page:parseInt(_.page,10),x:parseInt(_.x,10),y:parseInt(_.y,10),width:parseInt(_.width,10),height:parseInt(_.height,10),xoffset:parseInt(_.xoffset,10),yoffset:parseInt(_.yoffset,10),xadvance:parseInt(_.xadvance,10)})}),i.kerning.forEach(function(_){return p.kerning.push({first:parseInt(_.first,10),second:parseInt(_.second,10),amount:parseInt(_.amount,10)})}),p},r}(),mn=function(){function r(){}return r.test=function(e){return e instanceof XMLDocument&&e.getElementsByTagName("page").length&&e.getElementsByTagName("info")[0].getAttribute("face")!==null},r.parse=function(e){for(var t=new Xr,i=e.getElementsByTagName("info"),n=e.getElementsByTagName("common"),o=e.getElementsByTagName("page"),a=e.getElementsByTagName("char"),s=e.getElementsByTagName("kerning"),u=0;u<i.length;u++)t.info.push({face:i[u].getAttribute("face"),size:parseInt(i[u].getAttribute("size"),10)});for(var u=0;u<n.length;u++)t.common.push({lineHeight:parseInt(n[u].getAttribute("lineHeight"),10)});for(var u=0;u<o.length;u++)t.page.push({id:parseInt(o[u].getAttribute("id"),10)||0,file:o[u].getAttribute("file")});for(var u=0;u<a.length;u++){var h=a[u];t.char.push({id:parseInt(h.getAttribute("id"),10),page:parseInt(h.getAttribute("page"),10)||0,x:parseInt(h.getAttribute("x"),10),y:parseInt(h.getAttribute("y"),10),width:parseInt(h.getAttribute("width"),10),height:parseInt(h.getAttribute("height"),10),xoffset:parseInt(h.getAttribute("xoffset"),10),yoffset:parseInt(h.getAttribute("yoffset"),10),xadvance:parseInt(h.getAttribute("xadvance"),10)})}for(var u=0;u<s.length;u++)t.kerning.push({first:parseInt(s[u].getAttribute("first"),10),second:parseInt(s[u].getAttribute("second"),10),amount:parseInt(s[u].getAttribute("amount"),10)});return t},r}(),Iv=function(){function r(){}return r.test=function(e){if(typeof e=="string"&&e.indexOf("<font>")>-1){var t=new self.DOMParser().parseFromString(e,"text/xml");return mn.test(t)}return!1},r.parse=function(e){var t=new self.DOMParser().parseFromString(e,"text/xml");return mn.parse(t)},r}(),gn=[Pv,mn,Iv];function Fs(r){for(var e=0;e<gn.length;e++)if(gn[e].test(r))return gn[e];return null}function Sv(r,e,t,i,n,o){var a=t.fill;if(Array.isArray(a)){if(a.length===1)return a[0]}else return a;var s,u=t.dropShadow?t.dropShadowDistance:0,h=t.padding||0,l=r.width/i-u-h*2,f=r.height/i-u-h*2,c=a.slice(),d=t.fillGradientStops.slice();if(!d.length)for(var p=c.length+1,_=1;_<p;++_)d.push(_/p);if(c.unshift(a[0]),d.unshift(0),c.push(a[a.length-1]),d.push(1),t.fillGradientType===Ke.LINEAR_VERTICAL){s=e.createLinearGradient(l/2,h,l/2,f+h);for(var v=0,g=o.fontProperties.fontSize+t.strokeThickness,y=g/f,_=0;_<n.length;_++)for(var x=o.lineHeight*_,T=0;T<c.length;T++){var m=0;typeof d[T]=="number"?m=d[T]:m=T/c.length;var b=x/f+m*y,w=Math.max(v,b);w=Math.min(w,1),s.addColorStop(w,c[T]),v=w}}else{s=e.createLinearGradient(h,f/2,l+h,f/2);for(var S=c.length+1,E=1,_=0;_<c.length;_++){var C=void 0;typeof d[_]=="number"?C=d[_]:C=E/S,s.addColorStop(C,c[_]),E++}}return s}function Rv(r,e,t,i,n,o,a){var s=t.text,u=t.fontProperties;e.translate(i,n),e.scale(o,o);var h=a.strokeThickness/2,l=-(a.strokeThickness/2);e.font=a.toFontString(),e.lineWidth=a.strokeThickness,e.textBaseline=a.textBaseline,e.lineJoin=a.lineJoin,e.miterLimit=a.miterLimit,e.fillStyle=Sv(r,e,a,o,[s],t),e.strokeStyle=a.stroke;var f=a.dropShadowColor,c=yt(typeof f=="number"?f:Jo(f));a.dropShadow?(e.shadowColor="rgba("+c[0]*255+","+c[1]*255+","+c[2]*255+","+a.dropShadowAlpha+")",e.shadowBlur=a.dropShadowBlur,e.shadowOffsetX=Math.cos(a.dropShadowAngle)*a.dropShadowDistance,e.shadowOffsetY=Math.sin(a.dropShadowAngle)*a.dropShadowDistance):(e.shadowColor="black",e.shadowBlur=0,e.shadowOffsetX=0,e.shadowOffsetY=0),a.stroke&&a.strokeThickness&&e.strokeText(s,h,l+t.lineHeight-u.descent),a.fill&&e.fillText(s,h,l+t.lineHeight-u.descent),e.setTransform(1,0,0,1,0,0),e.fillStyle="rgba(0, 0, 0, 0)"}function Av(r){typeof r=="string"&&(r=[r]);for(var e=[],t=0,i=r.length;t<i;t++){var n=r[t];if(Array.isArray(n)){if(n.length!==2)throw new Error("[BitmapFont]: Invalid character range length, expecting 2 got "+n.length+".");var o=n[0].charCodeAt(0),a=n[1].charCodeAt(0);if(a<o)throw new Error("[BitmapFont]: Invalid character range.");for(var s=o,u=a;s<=u;s++)e.push(String.fromCharCode(s))}else e.push.apply(e,n.split(""))}if(e.length===0)throw new Error("[BitmapFont]: Empty set when resolving characters.");return e}var Qe=function(){function r(e,t,i){var n=e.info[0],o=e.common[0],a=e.page[0],s=dr(a.file),u={};this._ownsTextures=i,this.font=n.face,this.size=n.size,this.lineHeight=o.lineHeight/s,this.chars={},this.pageTextures=u;for(var h=0;h<e.page.length;h++){var l=e.page[h],f=l.id,c=l.file;u[f]=t instanceof Array?t[h]:t[c]}for(var h=0;h<e.char.length;h++){var d=e.char[h],f=d.id,p=d.page,_=e.char[h],v=_.x,g=_.y,y=_.width,x=_.height,T=_.xoffset,m=_.yoffset,b=_.xadvance;v/=s,g/=s,y/=s,x/=s,T/=s,m/=s,b/=s;var w=new W(v+u[p].frame.x/s,g+u[p].frame.y/s,y,x);this.chars[f]={xOffset:T,yOffset:m,xAdvance:b,kerning:{},texture:new L(u[p].baseTexture,w),page:p}}for(var h=0;h<e.kerning.length;h++){var S=e.kerning[h],E=S.first,C=S.second,U=S.amount;E/=s,C/=s,U/=s,this.chars[C]&&(this.chars[C].kerning[E]=U)}}return r.prototype.destroy=function(){for(var e in this.chars)this.chars[e].texture.destroy(),this.chars[e].texture=null;for(var e in this.pageTextures)this._ownsTextures&&this.pageTextures[e].destroy(!0),this.pageTextures[e]=null;this.chars=null,this.pageTextures=null},r.install=function(e,t,i){var n;if(e instanceof Xr)n=e;else{var o=Fs(e);if(!o)throw new Error("Unrecognized data format for font.");n=o.parse(e)}t instanceof L&&(t=[t]);var a=new r(n,t,i);return r.available[a.font]=a,a},r.uninstall=function(e){var t=r.available[e];if(!t)throw new Error("No font found named '"+e+"'");t.destroy(),delete r.available[e]},r.from=function(e,t,i){if(!e)throw new Error("[BitmapFont] Property `name` is required.");var n=Object.assign({},r.defaultOptions,i),o=n.chars,a=n.padding,s=n.resolution,u=n.textureWidth,h=n.textureHeight,l=Av(o),f=t instanceof Re?t:new Re(t),c=u,d=new Xr;d.info[0]={face:f.fontFamily,size:f.fontSize},d.common[0]={lineHeight:f.fontSize};for(var p=0,_=0,v,g,y,x=0,T=[],m=0;m<l.length;m++){v||(v=document.createElement("canvas"),v.width=u,v.height=h,g=v.getContext("2d"),y=new Z(v,{resolution:s}),T.push(new L(y)),d.page.push({id:T.length-1,file:""}));var b=Ct.measureText(l[m],f,!1,v),w=b.width,S=Math.ceil(b.height),E=Math.ceil((f.fontStyle==="italic"?2:1)*w);if(_>=h-S*s){if(_===0)throw new Error("[BitmapFont] textureHeight "+h+"px is "+("too small for "+f.fontSize+"px fonts"));--m,v=null,g=null,y=null,_=0,p=0,x=0;continue}if(x=Math.max(S+b.fontProperties.descent,x),E*s+p>=c){--m,_+=x*s,_=Math.ceil(_),p=0,x=0;continue}Rv(v,g,b,p,_,s,f);var C=b.text.charCodeAt(0);d.char.push({id:C,page:T.length-1,x:p/s,y:_/s,width:E,height:S,xoffset:0,yoffset:0,xadvance:Math.ceil(w-(f.dropShadow?f.dropShadowDistance:0)-(f.stroke?f.strokeThickness:0))}),p+=(E+2*a)*s,p=Math.ceil(p)}for(var m=0,U=l.length;m<U;m++)for(var N=l[m],V=0;V<U;V++){var J=l[V],A=g.measureText(N).width,I=g.measureText(J).width,j=g.measureText(N+J).width,mt=j-(A+I);mt&&d.kerning.push({first:N.charCodeAt(0),second:J.charCodeAt(0),amount:mt})}var G=new r(d,T,!0);return r.available[e]!==void 0&&r.uninstall(e),r.available[e]=G,G},r.ALPHA=[["a","z"],["A","Z"]," "],r.NUMERIC=[["0","9"]],r.ALPHANUMERIC=[["a","z"],["A","Z"],["0","9"]," "],r.ASCII=[[" ","~"]],r.defaultOptions={resolution:1,textureWidth:512,textureHeight:512,padding:4,chars:r.ALPHANUMERIC},r.available={},r}(),Us=[],Ls=[];(function(r){wv(e,r);function e(t,i){i===void 0&&(i={});var n=r.call(this)||this;n._tint=16777215;var o=Object.assign({},e.styleDefaults,i),a=o.align,s=o.tint,u=o.maxWidth,h=o.letterSpacing,l=o.fontName,f=o.fontSize;if(!Qe.available[l])throw new Error('Missing BitmapFont "'+l+'"');return n._activePagesMeshData=[],n._textWidth=0,n._textHeight=0,n._align=a,n._tint=s,n._fontName=l,n._fontSize=f||Qe.available[l].size,n._text=t,n._maxWidth=u,n._maxLineHeight=0,n._letterSpacing=h,n._anchor=new re(function(){n.dirty=!0},n,0,0),n._roundPixels=O.ROUND_PIXELS,n.dirty=!0,n._textureCache={},n}return e.prototype.updateText=function(){for(var t,i=Qe.available[this._fontName],n=this._fontSize/i.size,o=new Y,a=[],s=[],u=[],h=this._text.replace(/(?:\r\n|\r)/g,`
`)||" ",l=h.length,f=this._maxWidth*i.size/this._fontSize,c=null,d=0,p=0,_=0,v=-1,g=0,y=0,x=0,T=0,m=0;m<l;m++){var b=h.charCodeAt(m),w=h.charAt(m);if(/(?:\s)/.test(w)&&(v=m,g=d,T++),w==="\r"||w===`
`){s.push(d),u.push(-1),p=Math.max(p,d),++_,++y,o.x=0,o.y+=i.lineHeight,c=null,T=0;continue}var S=i.chars[b];if(!!S){c&&S.kerning[c]&&(o.x+=S.kerning[c]);var E=Ls.pop()||{texture:L.EMPTY,line:0,charCode:0,prevSpaces:0,position:new Y};E.texture=S.texture,E.line=_,E.charCode=b,E.position.x=o.x+S.xOffset+this._letterSpacing/2,E.position.y=o.y+S.yOffset,E.prevSpaces=T,a.push(E),d=E.position.x+S.texture.orig.width,o.x+=S.xAdvance+this._letterSpacing,x=Math.max(x,S.yOffset+S.texture.height),c=b,v!==-1&&f>0&&o.x>f&&(++y,xe(a,1+v-y,1+m-v),m=v,v=-1,s.push(g),u.push(a.length>0?a[a.length-1].prevSpaces:0),p=Math.max(p,g),_++,o.x=0,o.y+=i.lineHeight,c=null,T=0)}}var C=h.charAt(h.length-1);C!=="\r"&&C!==`
`&&(/(?:\s)/.test(C)&&(d=g),s.push(d),p=Math.max(p,d),u.push(-1));for(var U=[],m=0;m<=_;m++){var N=0;this._align==="right"?N=p-s[m]:this._align==="center"?N=(p-s[m])/2:this._align==="justify"&&(N=u[m]<0?0:(p-s[m])/u[m]),U.push(N)}for(var V=a.length,J={},A=[],I=this._activePagesMeshData,m=0;m<I.length;m++)Us.push(I[m]);for(var m=0;m<V;m++){var j=a[m].texture,mt=j.baseTexture.uid;if(!J[mt]){var G=Us.pop();if(!G){var R=new jr,M=new kr(L.EMPTY),z=new Je(R,M);G={index:0,indexCount:0,vertexCount:0,uvsCount:0,total:0,mesh:z,vertices:null,uvs:null,indices:null}}G.index=0,G.indexCount=0,G.vertexCount=0,G.uvsCount=0,G.total=0;var $=this._textureCache;$[mt]=$[mt]||new L(j.baseTexture),G.mesh.texture=$[mt],G.mesh.tint=this._tint,A.push(G),J[mt]=G}J[mt].total++}for(var m=0;m<I.length;m++)A.indexOf(I[m])===-1&&this.removeChild(I[m].mesh);for(var m=0;m<A.length;m++)A[m].mesh.parent!==this&&this.addChild(A[m].mesh);this._activePagesMeshData=A;for(var m in J){var G=J[m],q=G.total;if(!(((t=G.indices)===null||t===void 0?void 0:t.length)>6*q)||G.vertices.length<Je.BATCHABLE_SIZE*2)G.vertices=new Float32Array(4*2*q),G.uvs=new Float32Array(4*2*q),G.indices=new Uint16Array(6*q);else for(var ct=G.total,tt=G.vertices,ot=ct*4*2;ot<tt.length;ot++)tt[ot]=0;G.mesh.size=6*q}for(var m=0;m<V;m++){var w=a[m],vt=w.position.x+U[w.line]*(this._align==="justify"?w.prevSpaces:1);this._roundPixels&&(vt=Math.round(vt));var rt=vt*n,at=w.position.y*n,j=w.texture,B=J[j.baseTexture.uid],et=j.frame,st=j._uvs,X=B.index++;B.indices[X*6+0]=0+X*4,B.indices[X*6+1]=1+X*4,B.indices[X*6+2]=2+X*4,B.indices[X*6+3]=0+X*4,B.indices[X*6+4]=2+X*4,B.indices[X*6+5]=3+X*4,B.vertices[X*8+0]=rt,B.vertices[X*8+1]=at,B.vertices[X*8+2]=rt+et.width*n,B.vertices[X*8+3]=at,B.vertices[X*8+4]=rt+et.width*n,B.vertices[X*8+5]=at+et.height*n,B.vertices[X*8+6]=rt,B.vertices[X*8+7]=at+et.height*n,B.uvs[X*8+0]=st.x0,B.uvs[X*8+1]=st.y0,B.uvs[X*8+2]=st.x1,B.uvs[X*8+3]=st.y1,B.uvs[X*8+4]=st.x2,B.uvs[X*8+5]=st.y2,B.uvs[X*8+6]=st.x3,B.uvs[X*8+7]=st.y3}this._textWidth=p*n,this._textHeight=(o.y+i.lineHeight)*n;for(var m in J){var G=J[m];if(this.anchor.x!==0||this.anchor.y!==0)for(var gt=0,Ot=this._textWidth*this.anchor.x,ve=this._textHeight*this.anchor.y,rr=0;rr<G.total;rr++)G.vertices[gt++]-=Ot,G.vertices[gt++]-=ve,G.vertices[gt++]-=Ot,G.vertices[gt++]-=ve,G.vertices[gt++]-=Ot,G.vertices[gt++]-=ve,G.vertices[gt++]-=Ot,G.vertices[gt++]-=ve;this._maxLineHeight=x*n;var so=G.mesh.geometry.getBuffer("aVertexPosition"),uo=G.mesh.geometry.getBuffer("aTextureCoord"),ho=G.mesh.geometry.getIndex();so.data=G.vertices,uo.data=G.uvs,ho.data=G.indices,so.update(),uo.update(),ho.update()}for(var m=0;m<a.length;m++)Ls.push(a[m])},e.prototype.updateTransform=function(){this.validate(),this.containerUpdateTransform()},e.prototype.getLocalBounds=function(){return this.validate(),r.prototype.getLocalBounds.call(this)},e.prototype.validate=function(){this.dirty&&(this.updateText(),this.dirty=!1)},Object.defineProperty(e.prototype,"tint",{get:function(){return this._tint},set:function(t){if(this._tint!==t){this._tint=t;for(var i=0;i<this._activePagesMeshData.length;i++)this._activePagesMeshData[i].mesh.tint=t}},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"align",{get:function(){return this._align},set:function(t){this._align!==t&&(this._align=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fontName",{get:function(){return this._fontName},set:function(t){if(!Qe.available[t])throw new Error('Missing BitmapFont "'+t+'"');this._fontName!==t&&(this._fontName=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fontSize",{get:function(){return this._fontSize},set:function(t){this._fontSize!==t&&(this._fontSize=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"anchor",{get:function(){return this._anchor},set:function(t){typeof t=="number"?this._anchor.set(t):this._anchor.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"text",{get:function(){return this._text},set:function(t){t=String(t==null?"":t),this._text!==t&&(this._text=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"maxWidth",{get:function(){return this._maxWidth},set:function(t){this._maxWidth!==t&&(this._maxWidth=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"maxLineHeight",{get:function(){return this.validate(),this._maxLineHeight},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"textWidth",{get:function(){return this.validate(),this._textWidth},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"letterSpacing",{get:function(){return this._letterSpacing},set:function(t){this._letterSpacing!==t&&(this._letterSpacing=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"roundPixels",{get:function(){return this._roundPixels},set:function(t){t!==this._roundPixels&&(this._roundPixels=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"textHeight",{get:function(){return this.validate(),this._textHeight},enumerable:!1,configurable:!0}),e.prototype.destroy=function(t){var i=this._textureCache;for(var n in i){var o=i[n];o.destroy(),delete i[n]}this._textureCache=null,r.prototype.destroy.call(this,t)},e.styleDefaults={align:"left",tint:16777215,maxWidth:0,letterSpacing:0},e})(Bt);var Ov=function(){function r(){}return r.add=function(){ht.setExtensionXhrType("fnt",ht.XHR_RESPONSE_TYPE.TEXT)},r.use=function(e,t){var i=Fs(e.data);if(!i){t();return}for(var n=r.getBaseUrl(this,e),o=i.parse(e.data),a={},s=function(_){a[_.metadata.pageFile]=_.texture,Object.keys(a).length===o.page.length&&(e.bitmapFont=Qe.install(o,a,!0),t())},u=0;u<o.page.length;++u){var h=o.page[u].file,l=n+h,f=!1;for(var c in this.resources){var d=this.resources[c];if(d.url===l){d.metadata.pageFile=h,d.texture?s(d):d.onAfterMiddleware.add(s),f=!0;break}}if(!f){var p={crossOrigin:e.crossOrigin,loadType:ht.LOAD_TYPE.IMAGE,metadata:Object.assign({pageFile:h},e.metadata.imageMetadata),parentResource:e};this.add(l,p,s)}}},r.getBaseUrl=function(e,t){var i=t.isDataUrl?"":r.dirname(t.url);return t.isDataUrl&&(i==="."&&(i=""),e.baseUrl&&i&&e.baseUrl.charAt(e.baseUrl.length-1)==="/"&&(i+="/")),i=i.replace(e.baseUrl,""),i&&i.charAt(i.length-1)!=="/"&&(i+="/"),i},r.dirname=function(e){var t=e.replace(/\\/g,"/").replace(/\/$/,"").replace(/\/[^\/]*$/,"");return t===e?".":t===""?"/":t},r}();/*!
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
***************************************************************************** */var yn=function(r,e){return yn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])},yn(r,e)};function Nv(r,e){yn(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Fv=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float uAlpha;

void main(void)
{
   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;
}
`,Ms=function(r){Nv(e,r);function e(t){t===void 0&&(t=1);var i=r.call(this,jd,Fv,{uAlpha:1})||this;return i.alpha=t,i}return Object.defineProperty(e.prototype,"alpha",{get:function(){return this.uniforms.uAlpha},set:function(t){this.uniforms.uAlpha=t},enumerable:!1,configurable:!0}),e}(k);/*!
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
***************************************************************************** */var xn=function(r,e){return xn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])},xn(r,e)};function Bs(r,e){xn(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Uv=`
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
    }`;function Lv(r,e){var t=Math.ceil(r/2),i=Uv,n="",o;e?o="vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * strength, 0.0);":o="vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * strength);";for(var a=0;a<r;a++){var s=o.replace("%index%",a.toString());s=s.replace("%sampleIndex%",a-(t-1)+".0"),n+=s,n+=`
`}return i=i.replace("%blur%",n),i=i.replace("%size%",r.toString()),i}var Mv={5:[.153388,.221461,.250301],7:[.071303,.131514,.189879,.214607],9:[.028532,.067234,.124009,.179044,.20236],11:[.0093,.028002,.065984,.121703,.175713,.198596],13:[.002406,.009255,.027867,.065666,.121117,.174868,.197641],15:[489e-6,.002403,.009246,.02784,.065602,.120999,.174697,.197448]},Bv=["varying vec2 vBlurTexCoords[%size%];","uniform sampler2D uSampler;","void main(void)","{","    gl_FragColor = vec4(0.0);","    %blur%","}"].join(`
`);function Dv(r){for(var e=Mv[r],t=e.length,i=Bv,n="",o="gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;",a,s=0;s<r;s++){var u=o.replace("%index%",s.toString());a=s,s>=t&&(a=r-s-1),u=u.replace("%value%",e[a].toString()),n+=u,n+=`
`}return i=i.replace("%blur%",n),i=i.replace("%size%",r.toString()),i}/*!
 * @pixi/constants - v6.1.3
 * Compiled Mon, 13 Sep 2021 15:29:31 UTC
 *
 * @pixi/constants is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Ds;(function(r){r[r.WEBGL_LEGACY=0]="WEBGL_LEGACY",r[r.WEBGL=1]="WEBGL",r[r.WEBGL2=2]="WEBGL2"})(Ds||(Ds={}));var Gs;(function(r){r[r.UNKNOWN=0]="UNKNOWN",r[r.WEBGL=1]="WEBGL",r[r.CANVAS=2]="CANVAS"})(Gs||(Gs={}));var ks;(function(r){r[r.COLOR=16384]="COLOR",r[r.DEPTH=256]="DEPTH",r[r.STENCIL=1024]="STENCIL"})(ks||(ks={}));var js;(function(r){r[r.NORMAL=0]="NORMAL",r[r.ADD=1]="ADD",r[r.MULTIPLY=2]="MULTIPLY",r[r.SCREEN=3]="SCREEN",r[r.OVERLAY=4]="OVERLAY",r[r.DARKEN=5]="DARKEN",r[r.LIGHTEN=6]="LIGHTEN",r[r.COLOR_DODGE=7]="COLOR_DODGE",r[r.COLOR_BURN=8]="COLOR_BURN",r[r.HARD_LIGHT=9]="HARD_LIGHT",r[r.SOFT_LIGHT=10]="SOFT_LIGHT",r[r.DIFFERENCE=11]="DIFFERENCE",r[r.EXCLUSION=12]="EXCLUSION",r[r.HUE=13]="HUE",r[r.SATURATION=14]="SATURATION",r[r.COLOR=15]="COLOR",r[r.LUMINOSITY=16]="LUMINOSITY",r[r.NORMAL_NPM=17]="NORMAL_NPM",r[r.ADD_NPM=18]="ADD_NPM",r[r.SCREEN_NPM=19]="SCREEN_NPM",r[r.NONE=20]="NONE",r[r.SRC_OVER=0]="SRC_OVER",r[r.SRC_IN=21]="SRC_IN",r[r.SRC_OUT=22]="SRC_OUT",r[r.SRC_ATOP=23]="SRC_ATOP",r[r.DST_OVER=24]="DST_OVER",r[r.DST_IN=25]="DST_IN",r[r.DST_OUT=26]="DST_OUT",r[r.DST_ATOP=27]="DST_ATOP",r[r.ERASE=26]="ERASE",r[r.SUBTRACT=28]="SUBTRACT",r[r.XOR=29]="XOR"})(js||(js={}));var Xs;(function(r){r[r.POINTS=0]="POINTS",r[r.LINES=1]="LINES",r[r.LINE_LOOP=2]="LINE_LOOP",r[r.LINE_STRIP=3]="LINE_STRIP",r[r.TRIANGLES=4]="TRIANGLES",r[r.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",r[r.TRIANGLE_FAN=6]="TRIANGLE_FAN"})(Xs||(Xs={}));var Hs;(function(r){r[r.RGBA=6408]="RGBA",r[r.RGB=6407]="RGB",r[r.RG=33319]="RG",r[r.RED=6403]="RED",r[r.RGBA_INTEGER=36249]="RGBA_INTEGER",r[r.RGB_INTEGER=36248]="RGB_INTEGER",r[r.RG_INTEGER=33320]="RG_INTEGER",r[r.RED_INTEGER=36244]="RED_INTEGER",r[r.ALPHA=6406]="ALPHA",r[r.LUMINANCE=6409]="LUMINANCE",r[r.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",r[r.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",r[r.DEPTH_STENCIL=34041]="DEPTH_STENCIL"})(Hs||(Hs={}));var zs;(function(r){r[r.TEXTURE_2D=3553]="TEXTURE_2D",r[r.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",r[r.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY",r[r.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",r[r.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",r[r.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",r[r.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",r[r.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",r[r.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z"})(zs||(zs={}));var Vs;(function(r){r[r.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",r[r.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",r[r.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",r[r.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",r[r.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",r[r.UNSIGNED_INT=5125]="UNSIGNED_INT",r[r.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",r[r.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",r[r.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",r[r.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",r[r.BYTE=5120]="BYTE",r[r.SHORT=5122]="SHORT",r[r.INT=5124]="INT",r[r.FLOAT=5126]="FLOAT",r[r.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV",r[r.HALF_FLOAT=36193]="HALF_FLOAT"})(Vs||(Vs={}));var $s;(function(r){r[r.FLOAT=0]="FLOAT",r[r.INT=1]="INT",r[r.UINT=2]="UINT"})($s||($s={}));var Ws;(function(r){r[r.NEAREST=0]="NEAREST",r[r.LINEAR=1]="LINEAR"})(Ws||(Ws={}));var Ys;(function(r){r[r.CLAMP=33071]="CLAMP",r[r.REPEAT=10497]="REPEAT",r[r.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"})(Ys||(Ys={}));var qs;(function(r){r[r.OFF=0]="OFF",r[r.POW2=1]="POW2",r[r.ON=2]="ON",r[r.ON_MANUAL=3]="ON_MANUAL"})(qs||(qs={}));var Ks;(function(r){r[r.NPM=0]="NPM",r[r.UNPACK=1]="UNPACK",r[r.PMA=2]="PMA",r[r.NO_PREMULTIPLIED_ALPHA=0]="NO_PREMULTIPLIED_ALPHA",r[r.PREMULTIPLY_ON_UPLOAD=1]="PREMULTIPLY_ON_UPLOAD",r[r.PREMULTIPLY_ALPHA=2]="PREMULTIPLY_ALPHA"})(Ks||(Ks={}));var tr;(function(r){r[r.NO=0]="NO",r[r.YES=1]="YES",r[r.AUTO=2]="AUTO",r[r.BLEND=0]="BLEND",r[r.CLEAR=1]="CLEAR",r[r.BLIT=2]="BLIT"})(tr||(tr={}));var Zs;(function(r){r[r.AUTO=0]="AUTO",r[r.MANUAL=1]="MANUAL"})(Zs||(Zs={}));var Js;(function(r){r.LOW="lowp",r.MEDIUM="mediump",r.HIGH="highp"})(Js||(Js={}));var Qs;(function(r){r[r.NONE=0]="NONE",r[r.SCISSOR=1]="SCISSOR",r[r.STENCIL=2]="STENCIL",r[r.SPRITE=3]="SPRITE"})(Qs||(Qs={}));var tu;(function(r){r[r.NONE=0]="NONE",r[r.LOW=2]="LOW",r[r.MEDIUM=4]="MEDIUM",r[r.HIGH=8]="HIGH"})(tu||(tu={}));var eu;(function(r){r[r.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",r[r.ARRAY_BUFFER=34962]="ARRAY_BUFFER",r[r.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER"})(eu||(eu={}));var er=function(r){Bs(e,r);function e(t,i,n,o,a){i===void 0&&(i=8),n===void 0&&(n=4),o===void 0&&(o=O.FILTER_RESOLUTION),a===void 0&&(a=5);var s=this,u=Lv(a,t),h=Dv(a);return s=r.call(this,u,h)||this,s.horizontal=t,s.resolution=o,s._quality=0,s.quality=n,s.blur=i,s}return e.prototype.apply=function(t,i,n,o){if(n?this.horizontal?this.uniforms.strength=1/n.width*(n.width/i.width):this.uniforms.strength=1/n.height*(n.height/i.height):this.horizontal?this.uniforms.strength=1/t.renderer.width*(t.renderer.width/i.width):this.uniforms.strength=1/t.renderer.height*(t.renderer.height/i.height),this.uniforms.strength*=this.strength,this.uniforms.strength/=this.passes,this.passes===1)t.applyFilter(this,i,n,o);else{var a=t.getFilterTexture(),s=t.renderer,u=i,h=a;this.state.blend=!1,t.applyFilter(this,u,h,tr.CLEAR);for(var l=1;l<this.passes-1;l++){t.bindAndClear(u,tr.BLIT),this.uniforms.uSampler=h;var f=h;h=u,u=f,s.shader.bind(this),s.geometry.draw(5)}this.state.blend=!0,t.applyFilter(this,h,n,o),t.returnFilterTexture(a)}},Object.defineProperty(e.prototype,"blur",{get:function(){return this.strength},set:function(t){this.padding=1+Math.abs(t)*2,this.strength=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"quality",{get:function(){return this._quality},set:function(t){this._quality=t,this.passes=t},enumerable:!1,configurable:!0}),e}(k),Gv=function(r){Bs(e,r);function e(t,i,n,o){t===void 0&&(t=8),i===void 0&&(i=4),n===void 0&&(n=O.FILTER_RESOLUTION),o===void 0&&(o=5);var a=r.call(this)||this;return a.blurXFilter=new er(!0,t,i,n,o),a.blurYFilter=new er(!1,t,i,n,o),a.resolution=n,a.quality=i,a.blur=t,a.repeatEdgePixels=!1,a}return e.prototype.apply=function(t,i,n,o){var a=Math.abs(this.blurXFilter.strength),s=Math.abs(this.blurYFilter.strength);if(a&&s){var u=t.getFilterTexture();this.blurXFilter.apply(t,i,u,tr.CLEAR),this.blurYFilter.apply(t,u,n,o),t.returnFilterTexture(u)}else s?this.blurYFilter.apply(t,i,n,o):this.blurXFilter.apply(t,i,n,o)},e.prototype.updatePadding=function(){this._repeatEdgePixels?this.padding=0:this.padding=Math.max(Math.abs(this.blurXFilter.strength),Math.abs(this.blurYFilter.strength))*2},Object.defineProperty(e.prototype,"blur",{get:function(){return this.blurXFilter.blur},set:function(t){this.blurXFilter.blur=this.blurYFilter.blur=t,this.updatePadding()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"quality",{get:function(){return this.blurXFilter.quality},set:function(t){this.blurXFilter.quality=this.blurYFilter.quality=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blurX",{get:function(){return this.blurXFilter.blur},set:function(t){this.blurXFilter.blur=t,this.updatePadding()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blurY",{get:function(){return this.blurYFilter.blur},set:function(t){this.blurYFilter.blur=t,this.updatePadding()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blendMode",{get:function(){return this.blurYFilter.blendMode},set:function(t){this.blurYFilter.blendMode=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"repeatEdgePixels",{get:function(){return this._repeatEdgePixels},set:function(t){this._repeatEdgePixels=t,this.updatePadding()},enumerable:!1,configurable:!0}),e}(k);/*!
 * @pixi/filter-color-matrix - v6.1.3
 * Compiled Mon, 13 Sep 2021 15:29:31 UTC
 *
 * @pixi/filter-color-matrix is licensed under the MIT License.
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
***************************************************************************** */var bn=function(r,e){return bn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])},bn(r,e)};function kv(r,e){bn(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var jv=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float m[20];
uniform float uAlpha;

void main(void)
{
    vec4 c = texture2D(uSampler, vTextureCoord);

    if (uAlpha == 0.0) {
        gl_FragColor = c;
        return;
    }

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (c.a > 0.0) {
      c.rgb /= c.a;
    }

    vec4 result;

    result.r = (m[0] * c.r);
        result.r += (m[1] * c.g);
        result.r += (m[2] * c.b);
        result.r += (m[3] * c.a);
        result.r += m[4];

    result.g = (m[5] * c.r);
        result.g += (m[6] * c.g);
        result.g += (m[7] * c.b);
        result.g += (m[8] * c.a);
        result.g += m[9];

    result.b = (m[10] * c.r);
       result.b += (m[11] * c.g);
       result.b += (m[12] * c.b);
       result.b += (m[13] * c.a);
       result.b += m[14];

    result.a = (m[15] * c.r);
       result.a += (m[16] * c.g);
       result.a += (m[17] * c.b);
       result.a += (m[18] * c.a);
       result.a += m[19];

    vec3 rgb = mix(c.rgb, result.rgb, uAlpha);

    // Premultiply alpha again.
    rgb *= result.a;

    gl_FragColor = vec4(rgb, result.a);
}
`,Tn=function(r){kv(e,r);function e(){var t=this,i={m:new Float32Array([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0]),uAlpha:1};return t=r.call(this,Qa,jv,i)||this,t.alpha=1,t}return e.prototype._loadMatrix=function(t,i){i===void 0&&(i=!1);var n=t;i&&(this._multiply(n,this.uniforms.m,t),n=this._colorMatrix(n)),this.uniforms.m=n},e.prototype._multiply=function(t,i,n){return t[0]=i[0]*n[0]+i[1]*n[5]+i[2]*n[10]+i[3]*n[15],t[1]=i[0]*n[1]+i[1]*n[6]+i[2]*n[11]+i[3]*n[16],t[2]=i[0]*n[2]+i[1]*n[7]+i[2]*n[12]+i[3]*n[17],t[3]=i[0]*n[3]+i[1]*n[8]+i[2]*n[13]+i[3]*n[18],t[4]=i[0]*n[4]+i[1]*n[9]+i[2]*n[14]+i[3]*n[19]+i[4],t[5]=i[5]*n[0]+i[6]*n[5]+i[7]*n[10]+i[8]*n[15],t[6]=i[5]*n[1]+i[6]*n[6]+i[7]*n[11]+i[8]*n[16],t[7]=i[5]*n[2]+i[6]*n[7]+i[7]*n[12]+i[8]*n[17],t[8]=i[5]*n[3]+i[6]*n[8]+i[7]*n[13]+i[8]*n[18],t[9]=i[5]*n[4]+i[6]*n[9]+i[7]*n[14]+i[8]*n[19]+i[9],t[10]=i[10]*n[0]+i[11]*n[5]+i[12]*n[10]+i[13]*n[15],t[11]=i[10]*n[1]+i[11]*n[6]+i[12]*n[11]+i[13]*n[16],t[12]=i[10]*n[2]+i[11]*n[7]+i[12]*n[12]+i[13]*n[17],t[13]=i[10]*n[3]+i[11]*n[8]+i[12]*n[13]+i[13]*n[18],t[14]=i[10]*n[4]+i[11]*n[9]+i[12]*n[14]+i[13]*n[19]+i[14],t[15]=i[15]*n[0]+i[16]*n[5]+i[17]*n[10]+i[18]*n[15],t[16]=i[15]*n[1]+i[16]*n[6]+i[17]*n[11]+i[18]*n[16],t[17]=i[15]*n[2]+i[16]*n[7]+i[17]*n[12]+i[18]*n[17],t[18]=i[15]*n[3]+i[16]*n[8]+i[17]*n[13]+i[18]*n[18],t[19]=i[15]*n[4]+i[16]*n[9]+i[17]*n[14]+i[18]*n[19]+i[19],t},e.prototype._colorMatrix=function(t){var i=new Float32Array(t);return i[4]/=255,i[9]/=255,i[14]/=255,i[19]/=255,i},e.prototype.brightness=function(t,i){var n=[t,0,0,0,0,0,t,0,0,0,0,0,t,0,0,0,0,0,1,0];this._loadMatrix(n,i)},e.prototype.tint=function(t,i){var n=t>>16&255,o=t>>8&255,a=t&255,s=[n/255,0,0,0,0,0,o/255,0,0,0,0,0,a/255,0,0,0,0,0,1,0];this._loadMatrix(s,i)},e.prototype.greyscale=function(t,i){var n=[t,t,t,0,0,t,t,t,0,0,t,t,t,0,0,0,0,0,1,0];this._loadMatrix(n,i)},e.prototype.blackAndWhite=function(t){var i=[.3,.6,.1,0,0,.3,.6,.1,0,0,.3,.6,.1,0,0,0,0,0,1,0];this._loadMatrix(i,t)},e.prototype.hue=function(t,i){t=(t||0)/180*Math.PI;var n=Math.cos(t),o=Math.sin(t),a=Math.sqrt,s=1/3,u=a(s),h=n+(1-n)*s,l=s*(1-n)-u*o,f=s*(1-n)+u*o,c=s*(1-n)+u*o,d=n+s*(1-n),p=s*(1-n)-u*o,_=s*(1-n)-u*o,v=s*(1-n)+u*o,g=n+s*(1-n),y=[h,l,f,0,0,c,d,p,0,0,_,v,g,0,0,0,0,0,1,0];this._loadMatrix(y,i)},e.prototype.contrast=function(t,i){var n=(t||0)+1,o=-.5*(n-1),a=[n,0,0,0,o,0,n,0,0,o,0,0,n,0,o,0,0,0,1,0];this._loadMatrix(a,i)},e.prototype.saturate=function(t,i){t===void 0&&(t=0);var n=t*2/3+1,o=(n-1)*-.5,a=[n,o,o,0,0,o,n,o,0,0,o,o,n,0,0,0,0,0,1,0];this._loadMatrix(a,i)},e.prototype.desaturate=function(){this.saturate(-1)},e.prototype.negative=function(t){var i=[-1,0,0,1,0,0,-1,0,1,0,0,0,-1,1,0,0,0,0,1,0];this._loadMatrix(i,t)},e.prototype.sepia=function(t){var i=[.393,.7689999,.18899999,0,0,.349,.6859999,.16799999,0,0,.272,.5339999,.13099999,0,0,0,0,0,1,0];this._loadMatrix(i,t)},e.prototype.technicolor=function(t){var i=[1.9125277891456083,-.8545344976951645,-.09155508482755585,0,11.793603434377337,-.3087833385928097,1.7658908555458428,-.10601743074722245,0,-70.35205161461398,-.231103377548616,-.7501899197440212,1.847597816108189,0,30.950940869491138,0,0,0,1,0];this._loadMatrix(i,t)},e.prototype.polaroid=function(t){var i=[1.438,-.062,-.062,0,0,-.122,1.378,-.122,0,0,-.016,-.016,1.483,0,0,0,0,0,1,0];this._loadMatrix(i,t)},e.prototype.toBGR=function(t){var i=[0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0];this._loadMatrix(i,t)},e.prototype.kodachrome=function(t){var i=[1.1285582396593525,-.3967382283601348,-.03992559172921793,0,63.72958762196502,-.16404339962244616,1.0835251566291304,-.05498805115633132,0,24.732407896706203,-.16786010706155763,-.5603416277695248,1.6014850761964943,0,35.62982807460946,0,0,0,1,0];this._loadMatrix(i,t)},e.prototype.browni=function(t){var i=[.5997023498159715,.34553243048391263,-.2708298674538042,0,47.43192855600873,-.037703249837783157,.8609577587992641,.15059552388459913,0,-36.96841498319127,.24113635128153335,-.07441037908422492,.44972182064877153,0,-7.562075277591283,0,0,0,1,0];this._loadMatrix(i,t)},e.prototype.vintage=function(t){var i=[.6279345635605994,.3202183420819367,-.03965408211312453,0,9.651285835294123,.02578397704808868,.6441188644374771,.03259127616149294,0,7.462829176470591,.0466055556782719,-.0851232987247891,.5241648018700465,0,5.159190588235296,0,0,0,1,0];this._loadMatrix(i,t)},e.prototype.colorTone=function(t,i,n,o,a){t=t||.2,i=i||.15,n=n||16770432,o=o||3375104;var s=(n>>16&255)/255,u=(n>>8&255)/255,h=(n&255)/255,l=(o>>16&255)/255,f=(o>>8&255)/255,c=(o&255)/255,d=[.3,.59,.11,0,0,s,u,h,t,0,l,f,c,i,0,s-l,u-f,h-c,0,0];this._loadMatrix(d,a)},e.prototype.night=function(t,i){t=t||.1;var n=[t*-2,-t,0,0,0,-t,0,t,0,0,0,t,t*2,0,0,0,0,0,1,0];this._loadMatrix(n,i)},e.prototype.predator=function(t,i){var n=[11.224130630493164*t,-4.794486999511719*t,-2.8746118545532227*t,0*t,.40342438220977783*t,-3.6330697536468506*t,9.193157196044922*t,-2.951810836791992*t,0*t,-1.316135048866272*t,-3.2184197902679443*t,-4.2375030517578125*t,7.476448059082031*t,0*t,.8044459223747253*t,0,0,0,1,0];this._loadMatrix(n,i)},e.prototype.lsd=function(t){var i=[2,-.4,.5,0,0,-.5,2,-.4,0,0,-.4,-.5,3,0,0,0,0,0,1,0];this._loadMatrix(i,t)},e.prototype.reset=function(){var t=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0];this._loadMatrix(t,!1)},Object.defineProperty(e.prototype,"matrix",{get:function(){return this.uniforms.m},set:function(t){this.uniforms.m=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"alpha",{get:function(){return this.uniforms.uAlpha},set:function(t){this.uniforms.uAlpha=t},enumerable:!1,configurable:!0}),e}(k);Tn.prototype.grayscale=Tn.prototype.greyscale;/*!
 * @pixi/filter-displacement - v6.1.3
 * Compiled Mon, 13 Sep 2021 15:29:31 UTC
 *
 * @pixi/filter-displacement is licensed under the MIT License.
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
***************************************************************************** */var En=function(r,e){return En=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])},En(r,e)};function Xv(r,e){En(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Hv=`varying vec2 vFilterCoord;
varying vec2 vTextureCoord;

uniform vec2 scale;
uniform mat2 rotation;
uniform sampler2D uSampler;
uniform sampler2D mapSampler;

uniform highp vec4 inputSize;
uniform vec4 inputClamp;

void main(void)
{
  vec4 map =  texture2D(mapSampler, vFilterCoord);

  map -= 0.5;
  map.xy = scale * inputSize.zw * (rotation * map.xy);

  gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), inputClamp.xy, inputClamp.zw));
}
`,zv=`attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;
uniform mat3 filterMatrix;

varying vec2 vTextureCoord;
varying vec2 vFilterCoord;

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
	vFilterCoord = ( filterMatrix * vec3( vTextureCoord, 1.0)  ).xy;
}
`,Vv=function(r){Xv(e,r);function e(t,i){var n=this,o=new pt;return t.renderable=!1,n=r.call(this,zv,Hv,{mapSampler:t._texture,filterMatrix:o,scale:{x:1,y:1},rotation:new Float32Array([1,0,0,1])})||this,n.maskSprite=t,n.maskMatrix=o,i==null&&(i=20),n.scale=new Y(i,i),n}return e.prototype.apply=function(t,i,n,o){this.uniforms.filterMatrix=t.calculateSpriteMatrix(this.maskMatrix,this.maskSprite),this.uniforms.scale.x=this.scale.x,this.uniforms.scale.y=this.scale.y;var a=this.maskSprite.worldTransform,s=Math.sqrt(a.a*a.a+a.b*a.b),u=Math.sqrt(a.c*a.c+a.d*a.d);s!==0&&u!==0&&(this.uniforms.rotation[0]=a.a/s,this.uniforms.rotation[1]=a.b/s,this.uniforms.rotation[2]=a.c/u,this.uniforms.rotation[3]=a.d/u),t.applyFilter(this,i,n,o)},Object.defineProperty(e.prototype,"map",{get:function(){return this.uniforms.mapSampler},set:function(t){this.uniforms.mapSampler=t},enumerable:!1,configurable:!0}),e}(k);/*!
 * @pixi/filter-fxaa - v6.1.3
 * Compiled Mon, 13 Sep 2021 15:29:31 UTC
 *
 * @pixi/filter-fxaa is licensed under the MIT License.
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
***************************************************************************** */var Cn=function(r,e){return Cn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])},Cn(r,e)};function $v(r,e){Cn(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Wv=`
attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 v_rgbNW;
varying vec2 v_rgbNE;
varying vec2 v_rgbSW;
varying vec2 v_rgbSE;
varying vec2 v_rgbM;

varying vec2 vFragCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

void texcoords(vec2 fragCoord, vec2 inverseVP,
               out vec2 v_rgbNW, out vec2 v_rgbNE,
               out vec2 v_rgbSW, out vec2 v_rgbSE,
               out vec2 v_rgbM) {
    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;
    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;
    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;
    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;
    v_rgbM = vec2(fragCoord * inverseVP);
}

void main(void) {

   gl_Position = filterVertexPosition();

   vFragCoord = aVertexPosition * outputFrame.zw;

   texcoords(vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);
}
`,Yv=`varying vec2 v_rgbNW;
varying vec2 v_rgbNE;
varying vec2 v_rgbSW;
varying vec2 v_rgbSE;
varying vec2 v_rgbM;

varying vec2 vFragCoord;
uniform sampler2D uSampler;
uniform highp vec4 inputSize;


/**
 Basic FXAA implementation based on the code on geeks3d.com with the
 modification that the texture2DLod stuff was removed since it's
 unsupported by WebGL.

 --

 From:
 https://github.com/mitsuhiko/webgl-meincraft

 Copyright (c) 2011 by Armin Ronacher.

 Some rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are
 met:

 * Redistributions of source code must retain the above copyright
 notice, this list of conditions and the following disclaimer.

 * Redistributions in binary form must reproduce the above
 copyright notice, this list of conditions and the following
 disclaimer in the documentation and/or other materials provided
 with the distribution.

 * The names of the contributors may not be used to endorse or
 promote products derived from this software without specific
 prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

#ifndef FXAA_REDUCE_MIN
#define FXAA_REDUCE_MIN   (1.0/ 128.0)
#endif
#ifndef FXAA_REDUCE_MUL
#define FXAA_REDUCE_MUL   (1.0 / 8.0)
#endif
#ifndef FXAA_SPAN_MAX
#define FXAA_SPAN_MAX     8.0
#endif

//optimized version for mobile, where dependent
//texture reads can be a bottleneck
vec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 inverseVP,
          vec2 v_rgbNW, vec2 v_rgbNE,
          vec2 v_rgbSW, vec2 v_rgbSE,
          vec2 v_rgbM) {
    vec4 color;
    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;
    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;
    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;
    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;
    vec4 texColor = texture2D(tex, v_rgbM);
    vec3 rgbM  = texColor.xyz;
    vec3 luma = vec3(0.299, 0.587, 0.114);
    float lumaNW = dot(rgbNW, luma);
    float lumaNE = dot(rgbNE, luma);
    float lumaSW = dot(rgbSW, luma);
    float lumaSE = dot(rgbSE, luma);
    float lumaM  = dot(rgbM,  luma);
    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));
    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));

    mediump vec2 dir;
    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));

    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *
                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);

    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);
    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),
              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),
                  dir * rcpDirMin)) * inverseVP;

    vec3 rgbA = 0.5 * (
                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +
                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);
    vec3 rgbB = rgbA * 0.5 + 0.25 * (
                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +
                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);

    float lumaB = dot(rgbB, luma);
    if ((lumaB < lumaMin) || (lumaB > lumaMax))
        color = vec4(rgbA, texColor.a);
    else
        color = vec4(rgbB, texColor.a);
    return color;
}

void main() {

      vec4 color;

      color = fxaa(uSampler, vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);

      gl_FragColor = color;
}
`,qv=function(r){$v(e,r);function e(){return r.call(this,Wv,Yv)||this}return e}(k);/*!
 * @pixi/filter-noise - v6.1.3
 * Compiled Mon, 13 Sep 2021 15:29:31 UTC
 *
 * @pixi/filter-noise is licensed under the MIT License.
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
***************************************************************************** */var wn=function(r,e){return wn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])},wn(r,e)};function Kv(r,e){wn(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Zv=`precision highp float;

varying vec2 vTextureCoord;
varying vec4 vColor;

uniform float uNoise;
uniform float uSeed;
uniform sampler2D uSampler;

float rand(vec2 co)
{
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main()
{
    vec4 color = texture2D(uSampler, vTextureCoord);
    float randomValue = rand(gl_FragCoord.xy * uSeed);
    float diff = (randomValue - 0.5) * uNoise;

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (color.a > 0.0) {
        color.rgb /= color.a;
    }

    color.r += diff;
    color.g += diff;
    color.b += diff;

    // Premultiply alpha again.
    color.rgb *= color.a;

    gl_FragColor = color;
}
`,Jv=function(r){Kv(e,r);function e(t,i){t===void 0&&(t=.5),i===void 0&&(i=Math.random());var n=r.call(this,Qa,Zv,{uNoise:0,uSeed:0})||this;return n.noise=t,n.seed=i,n}return Object.defineProperty(e.prototype,"noise",{get:function(){return this.uniforms.uNoise},set:function(t){this.uniforms.uNoise=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"seed",{get:function(){return this.uniforms.uSeed},set:function(t){this.uniforms.uSeed=t},enumerable:!1,configurable:!0}),e}(k);/*!
 * @pixi/mixin-cache-as-bitmap - v6.1.3
 * Compiled Mon, 13 Sep 2021 15:29:31 UTC
 *
 * @pixi/mixin-cache-as-bitmap is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*!
 * @pixi/constants - v6.1.3
 * Compiled Mon, 13 Sep 2021 15:29:31 UTC
 *
 * @pixi/constants is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var ru;(function(r){r[r.WEBGL_LEGACY=0]="WEBGL_LEGACY",r[r.WEBGL=1]="WEBGL",r[r.WEBGL2=2]="WEBGL2"})(ru||(ru={}));var iu;(function(r){r[r.UNKNOWN=0]="UNKNOWN",r[r.WEBGL=1]="WEBGL",r[r.CANVAS=2]="CANVAS"})(iu||(iu={}));var nu;(function(r){r[r.COLOR=16384]="COLOR",r[r.DEPTH=256]="DEPTH",r[r.STENCIL=1024]="STENCIL"})(nu||(nu={}));var ou;(function(r){r[r.NORMAL=0]="NORMAL",r[r.ADD=1]="ADD",r[r.MULTIPLY=2]="MULTIPLY",r[r.SCREEN=3]="SCREEN",r[r.OVERLAY=4]="OVERLAY",r[r.DARKEN=5]="DARKEN",r[r.LIGHTEN=6]="LIGHTEN",r[r.COLOR_DODGE=7]="COLOR_DODGE",r[r.COLOR_BURN=8]="COLOR_BURN",r[r.HARD_LIGHT=9]="HARD_LIGHT",r[r.SOFT_LIGHT=10]="SOFT_LIGHT",r[r.DIFFERENCE=11]="DIFFERENCE",r[r.EXCLUSION=12]="EXCLUSION",r[r.HUE=13]="HUE",r[r.SATURATION=14]="SATURATION",r[r.COLOR=15]="COLOR",r[r.LUMINOSITY=16]="LUMINOSITY",r[r.NORMAL_NPM=17]="NORMAL_NPM",r[r.ADD_NPM=18]="ADD_NPM",r[r.SCREEN_NPM=19]="SCREEN_NPM",r[r.NONE=20]="NONE",r[r.SRC_OVER=0]="SRC_OVER",r[r.SRC_IN=21]="SRC_IN",r[r.SRC_OUT=22]="SRC_OUT",r[r.SRC_ATOP=23]="SRC_ATOP",r[r.DST_OVER=24]="DST_OVER",r[r.DST_IN=25]="DST_IN",r[r.DST_OUT=26]="DST_OUT",r[r.DST_ATOP=27]="DST_ATOP",r[r.ERASE=26]="ERASE",r[r.SUBTRACT=28]="SUBTRACT",r[r.XOR=29]="XOR"})(ou||(ou={}));var au;(function(r){r[r.POINTS=0]="POINTS",r[r.LINES=1]="LINES",r[r.LINE_LOOP=2]="LINE_LOOP",r[r.LINE_STRIP=3]="LINE_STRIP",r[r.TRIANGLES=4]="TRIANGLES",r[r.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",r[r.TRIANGLE_FAN=6]="TRIANGLE_FAN"})(au||(au={}));var su;(function(r){r[r.RGBA=6408]="RGBA",r[r.RGB=6407]="RGB",r[r.RG=33319]="RG",r[r.RED=6403]="RED",r[r.RGBA_INTEGER=36249]="RGBA_INTEGER",r[r.RGB_INTEGER=36248]="RGB_INTEGER",r[r.RG_INTEGER=33320]="RG_INTEGER",r[r.RED_INTEGER=36244]="RED_INTEGER",r[r.ALPHA=6406]="ALPHA",r[r.LUMINANCE=6409]="LUMINANCE",r[r.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",r[r.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",r[r.DEPTH_STENCIL=34041]="DEPTH_STENCIL"})(su||(su={}));var uu;(function(r){r[r.TEXTURE_2D=3553]="TEXTURE_2D",r[r.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",r[r.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY",r[r.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",r[r.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",r[r.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",r[r.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",r[r.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",r[r.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z"})(uu||(uu={}));var hu;(function(r){r[r.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",r[r.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",r[r.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",r[r.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",r[r.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",r[r.UNSIGNED_INT=5125]="UNSIGNED_INT",r[r.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",r[r.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",r[r.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",r[r.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",r[r.BYTE=5120]="BYTE",r[r.SHORT=5122]="SHORT",r[r.INT=5124]="INT",r[r.FLOAT=5126]="FLOAT",r[r.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV",r[r.HALF_FLOAT=36193]="HALF_FLOAT"})(hu||(hu={}));var lu;(function(r){r[r.FLOAT=0]="FLOAT",r[r.INT=1]="INT",r[r.UINT=2]="UINT"})(lu||(lu={}));var fu;(function(r){r[r.NEAREST=0]="NEAREST",r[r.LINEAR=1]="LINEAR"})(fu||(fu={}));var cu;(function(r){r[r.CLAMP=33071]="CLAMP",r[r.REPEAT=10497]="REPEAT",r[r.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"})(cu||(cu={}));var du;(function(r){r[r.OFF=0]="OFF",r[r.POW2=1]="POW2",r[r.ON=2]="ON",r[r.ON_MANUAL=3]="ON_MANUAL"})(du||(du={}));var pu;(function(r){r[r.NPM=0]="NPM",r[r.UNPACK=1]="UNPACK",r[r.PMA=2]="PMA",r[r.NO_PREMULTIPLIED_ALPHA=0]="NO_PREMULTIPLIED_ALPHA",r[r.PREMULTIPLY_ON_UPLOAD=1]="PREMULTIPLY_ON_UPLOAD",r[r.PREMULTIPLY_ALPHA=2]="PREMULTIPLY_ALPHA"})(pu||(pu={}));var vu;(function(r){r[r.NO=0]="NO",r[r.YES=1]="YES",r[r.AUTO=2]="AUTO",r[r.BLEND=0]="BLEND",r[r.CLEAR=1]="CLEAR",r[r.BLIT=2]="BLIT"})(vu||(vu={}));var _u;(function(r){r[r.AUTO=0]="AUTO",r[r.MANUAL=1]="MANUAL"})(_u||(_u={}));var mu;(function(r){r.LOW="lowp",r.MEDIUM="mediump",r.HIGH="highp"})(mu||(mu={}));var gu;(function(r){r[r.NONE=0]="NONE",r[r.SCISSOR=1]="SCISSOR",r[r.STENCIL=2]="STENCIL",r[r.SPRITE=3]="SPRITE"})(gu||(gu={}));var Pn;(function(r){r[r.NONE=0]="NONE",r[r.LOW=2]="LOW",r[r.MEDIUM=4]="MEDIUM",r[r.HIGH=8]="HIGH"})(Pn||(Pn={}));var yu;(function(r){r[r.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",r[r.ARRAY_BUFFER=34962]="ARRAY_BUFFER",r[r.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER"})(yu||(yu={}));var xu=new pt;ft.prototype._cacheAsBitmap=!1;ft.prototype._cacheData=null;ft.prototype._cacheAsBitmapResolution=null;ft.prototype._cacheAsBitmapMultisample=Pn.NONE;var Qv=function(){function r(){this.textureCacheId=null,this.originalRender=null,this.originalRenderCanvas=null,this.originalCalculateBounds=null,this.originalGetLocalBounds=null,this.originalUpdateTransform=null,this.originalDestroy=null,this.originalMask=null,this.originalFilterArea=null,this.originalContainsPoint=null,this.sprite=null}return r}();Object.defineProperties(ft.prototype,{cacheAsBitmapResolution:{get:function(){return this._cacheAsBitmapResolution},set:function(r){r!==this._cacheAsBitmapResolution&&(this._cacheAsBitmapResolution=r,this.cacheAsBitmap&&(this.cacheAsBitmap=!1,this.cacheAsBitmap=!0))}},cacheAsBitmapMultisample:{get:function(){return this._cacheAsBitmapMultisample},set:function(r){r!==this._cacheAsBitmapMultisample&&(this._cacheAsBitmapMultisample=r,this.cacheAsBitmap&&(this.cacheAsBitmap=!1,this.cacheAsBitmap=!0))}},cacheAsBitmap:{get:function(){return this._cacheAsBitmap},set:function(r){if(this._cacheAsBitmap!==r){this._cacheAsBitmap=r;var e;r?(this._cacheData||(this._cacheData=new Qv),e=this._cacheData,e.originalRender=this.render,e.originalRenderCanvas=this.renderCanvas,e.originalUpdateTransform=this.updateTransform,e.originalCalculateBounds=this.calculateBounds,e.originalGetLocalBounds=this.getLocalBounds,e.originalDestroy=this.destroy,e.originalContainsPoint=this.containsPoint,e.originalMask=this._mask,e.originalFilterArea=this.filterArea,this.render=this._renderCached,this.renderCanvas=this._renderCachedCanvas,this.destroy=this._cacheAsBitmapDestroy):(e=this._cacheData,e.sprite&&this._destroyCachedDisplayObject(),this.render=e.originalRender,this.renderCanvas=e.originalRenderCanvas,this.calculateBounds=e.originalCalculateBounds,this.getLocalBounds=e.originalGetLocalBounds,this.destroy=e.originalDestroy,this.updateTransform=e.originalUpdateTransform,this.containsPoint=e.originalContainsPoint,this._mask=e.originalMask,this.filterArea=e.originalFilterArea)}}}});ft.prototype._renderCached=function(e){!this.visible||this.worldAlpha<=0||!this.renderable||(this._initCachedDisplayObject(e),this._cacheData.sprite.transform._worldID=this.transform._worldID,this._cacheData.sprite.worldAlpha=this.worldAlpha,this._cacheData.sprite._render(e))};ft.prototype._initCachedDisplayObject=function(e){var t;if(!(this._cacheData&&this._cacheData.sprite)){var i=this.alpha;this.alpha=1,e.batch.flush();var n=this.getLocalBounds(null,!0).clone();if(this.filters){var o=this.filters[0].padding;n.pad(o)}n.ceil(O.RESOLUTION);var a=e.renderTexture.current,s=e.renderTexture.sourceFrame.clone(),u=e.renderTexture.destinationFrame.clone(),h=e.projection.transform,l=se.create({width:n.width,height:n.height,resolution:this.cacheAsBitmapResolution||e.resolution,multisample:(t=this.cacheAsBitmapMultisample)!==null&&t!==void 0?t:e.multisample}),f="cacheAsBitmap_"+Te();this._cacheData.textureCacheId=f,Z.addToCache(l.baseTexture,f),L.addToCache(l,f);var c=this.transform.localTransform.copyTo(xu).invert().translate(-n.x,-n.y);this.render=this._cacheData.originalRender,e.render(this,{renderTexture:l,clear:!0,transform:c,skipUpdateTransform:!1}),e.framebuffer.blit(),e.projection.transform=h,e.renderTexture.bind(a,s,u),this.render=this._renderCached,this.updateTransform=this.displayObjectUpdateTransform,this.calculateBounds=this._calculateCachedBounds,this.getLocalBounds=this._getCachedLocalBounds,this._mask=null,this.filterArea=null,this.alpha=i;var d=new qe(l);d.transform.worldTransform=this.transform.worldTransform,d.anchor.x=-(n.x/n.width),d.anchor.y=-(n.y/n.height),d.alpha=i,d._bounds=this._bounds,this._cacheData.sprite=d,this.transform._parentID=-1,this.parent?this.updateTransform():(this.enableTempParent(),this.updateTransform(),this.disableTempParent(null)),this.containsPoint=d.containsPoint.bind(d)}};ft.prototype._renderCachedCanvas=function(e){!this.visible||this.worldAlpha<=0||!this.renderable||(this._initCachedDisplayObjectCanvas(e),this._cacheData.sprite.worldAlpha=this.worldAlpha,this._cacheData.sprite._renderCanvas(e))};ft.prototype._initCachedDisplayObjectCanvas=function(e){if(!(this._cacheData&&this._cacheData.sprite)){var t=this.getLocalBounds(null,!0),i=this.alpha;this.alpha=1;var n=e.context,o=e._projTransform;t.ceil(O.RESOLUTION);var a=se.create({width:t.width,height:t.height}),s="cacheAsBitmap_"+Te();this._cacheData.textureCacheId=s,Z.addToCache(a.baseTexture,s),L.addToCache(a,s);var u=xu;this.transform.localTransform.copyTo(u),u.invert(),u.tx-=t.x,u.ty-=t.y,this.renderCanvas=this._cacheData.originalRenderCanvas,e.render(this,{renderTexture:a,clear:!0,transform:u,skipUpdateTransform:!1}),e.context=n,e._projTransform=o,this.renderCanvas=this._renderCachedCanvas,this.updateTransform=this.displayObjectUpdateTransform,this.calculateBounds=this._calculateCachedBounds,this.getLocalBounds=this._getCachedLocalBounds,this._mask=null,this.filterArea=null,this.alpha=i;var h=new qe(a);h.transform.worldTransform=this.transform.worldTransform,h.anchor.x=-(t.x/t.width),h.anchor.y=-(t.y/t.height),h.alpha=i,h._bounds=this._bounds,this._cacheData.sprite=h,this.transform._parentID=-1,this.parent?this.updateTransform():(this.parent=e._tempDisplayObjectParent,this.updateTransform(),this.parent=null),this.containsPoint=h.containsPoint.bind(h)}};ft.prototype._calculateCachedBounds=function(){this._bounds.clear(),this._cacheData.sprite.transform._worldID=this.transform._worldID,this._cacheData.sprite._calculateBounds(),this._bounds.updateID=this._boundsID};ft.prototype._getCachedLocalBounds=function(){return this._cacheData.sprite.getLocalBounds(null)};ft.prototype._destroyCachedDisplayObject=function(){this._cacheData.sprite._texture.destroy(!0),this._cacheData.sprite=null,Z.removeFromCache(this._cacheData.textureCacheId),L.removeFromCache(this._cacheData.textureCacheId),this._cacheData.textureCacheId=null};ft.prototype._cacheAsBitmapDestroy=function(e){this.cacheAsBitmap=!1,this.destroy(e)};/*!
 * @pixi/mixin-get-child-by-name - v6.1.3
 * Compiled Mon, 13 Sep 2021 15:29:31 UTC
 *
 * @pixi/mixin-get-child-by-name is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */ft.prototype.name=null;Bt.prototype.getChildByName=function(e,t){for(var i=0,n=this.children.length;i<n;i++)if(this.children[i].name===e)return this.children[i];if(t)for(var i=0,n=this.children.length;i<n;i++){var o=this.children[i];if(!!o.getChildByName){var a=this.children[i].getChildByName(e,!0);if(a)return a}}return null};/*!
 * @pixi/mixin-get-global-position - v6.1.3
 * Compiled Mon, 13 Sep 2021 15:29:31 UTC
 *
 * @pixi/mixin-get-global-position is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */ft.prototype.getGlobalPosition=function(e,t){return e===void 0&&(e=new Y),t===void 0&&(t=!1),this.parent?this.parent.toGlobal(this.position,e,t):(e.x=this.position.x,e.y=this.position.y),e};/*!
 * @pixi/mesh-extras - v6.1.3
 * Compiled Mon, 13 Sep 2021 15:29:31 UTC
 *
 * @pixi/mesh-extras is licensed under the MIT License.
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
***************************************************************************** */var In=function(r,e){return In=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])},In(r,e)};function Ae(r,e){In(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var t_=function(r){Ae(e,r);function e(t,i,n,o){t===void 0&&(t=100),i===void 0&&(i=100),n===void 0&&(n=10),o===void 0&&(o=10);var a=r.call(this)||this;return a.segWidth=n,a.segHeight=o,a.width=t,a.height=i,a.build(),a}return e.prototype.build=function(){for(var t=this.segWidth*this.segHeight,i=[],n=[],o=[],a=this.segWidth-1,s=this.segHeight-1,u=this.width/a,h=this.height/s,l=0;l<t;l++){var f=l%this.segWidth,c=l/this.segWidth|0;i.push(f*u,c*h),n.push(f/a,c/s)}for(var d=a*s,l=0;l<d;l++){var p=l%a,_=l/a|0,v=_*this.segWidth+p,g=_*this.segWidth+p+1,y=(_+1)*this.segWidth+p,x=(_+1)*this.segWidth+p+1;o.push(v,g,y,g,x,y)}this.buffers[0].data=new Float32Array(i),this.buffers[1].data=new Float32Array(n),this.indexBuffer.data=new Uint16Array(o),this.buffers[0].update(),this.buffers[1].update(),this.indexBuffer.update()},e}(jr),e_=function(r){Ae(e,r);function e(t,i,n){t===void 0&&(t=200),n===void 0&&(n=0);var o=r.call(this,new Float32Array(i.length*4),new Float32Array(i.length*4),new Uint16Array((i.length-1)*6))||this;return o.points=i,o._width=t,o.textureScale=n,o.build(),o}return Object.defineProperty(e.prototype,"width",{get:function(){return this._width},enumerable:!1,configurable:!0}),e.prototype.build=function(){var t=this.points;if(!!t){var i=this.getBuffer("aVertexPosition"),n=this.getBuffer("aTextureCoord"),o=this.getIndex();if(!(t.length<1)){i.data.length/4!==t.length&&(i.data=new Float32Array(t.length*4),n.data=new Float32Array(t.length*4),o.data=new Uint16Array((t.length-1)*6));var a=n.data,s=o.data;a[0]=0,a[1]=0,a[2]=0,a[3]=1;for(var u=0,h=t[0],l=this._width*this.textureScale,f=t.length,c=0;c<f;c++){var d=c*4;if(this.textureScale>0){var p=h.x-t[c].x,_=h.y-t[c].y,v=Math.sqrt(p*p+_*_);h=t[c],u+=v/l}else u=c/(f-1);a[d]=u,a[d+1]=0,a[d+2]=u,a[d+3]=1}for(var g=0,c=0;c<f-1;c++){var d=c*2;s[g++]=d,s[g++]=d+1,s[g++]=d+2,s[g++]=d+2,s[g++]=d+1,s[g++]=d+3}n.update(),o.update(),this.updateVertices()}}},e.prototype.updateVertices=function(){var t=this.points;if(!(t.length<1)){for(var i=t[0],n,o=0,a=0,s=this.buffers[0].data,u=t.length,h=0;h<u;h++){var l=t[h],f=h*4;h<t.length-1?n=t[h+1]:n=l,a=-(n.x-i.x),o=n.y-i.y;var c=Math.sqrt(o*o+a*a),d=this.textureScale>0?this.textureScale*this._width/2:this._width/2;o/=c,a/=c,o*=d,a*=d,s[f]=l.x+o,s[f+1]=l.y+a,s[f+2]=l.x-o,s[f+3]=l.y-a,i=l}this.buffers[0].update()}},e.prototype.update=function(){this.textureScale>0?this.build():this.updateVertices()},e}(jr);(function(r){Ae(e,r);function e(t,i,n){n===void 0&&(n=0);var o=this,a=new e_(t.height,i,n),s=new kr(t);return n>0&&(t.baseTexture.wrapMode=jt.REPEAT),o=r.call(this,a,s)||this,o.autoUpdate=!0,o}return e.prototype._render=function(t){var i=this.geometry;(this.autoUpdate||i._width!==this.shader.texture.height)&&(i._width=this.shader.texture.height,i.update()),r.prototype._render.call(this,t)},e})(Je);var r_=function(r){Ae(e,r);function e(t,i,n){var o=this,a=new t_(t.width,t.height,i,n),s=new kr(L.WHITE);return o=r.call(this,a,s)||this,o.texture=t,o.autoResize=!0,o}return e.prototype.textureUpdated=function(){this._textureID=this.shader.texture._updateID;var t=this.geometry,i=this.shader.texture,n=i.width,o=i.height;this.autoResize&&(t.width!==n||t.height!==o)&&(t.width=this.shader.texture.width,t.height=this.shader.texture.height,t.build())},Object.defineProperty(e.prototype,"texture",{get:function(){return this.shader.texture},set:function(t){this.shader.texture!==t&&(this.shader.texture=t,this._textureID=-1,t.baseTexture.valid?this.textureUpdated():t.once("update",this.textureUpdated,this))},enumerable:!1,configurable:!0}),e.prototype._render=function(t){this._textureID!==this.shader.texture._updateID&&this.textureUpdated(),r.prototype._render.call(this,t)},e.prototype.destroy=function(t){this.shader.texture.off("update",this.textureUpdated,this),r.prototype.destroy.call(this,t)},e}(Je);(function(r){Ae(e,r);function e(t,i,n,o,a){t===void 0&&(t=L.EMPTY);var s=this,u=new jr(i,n,o);u.getBuffer("aVertexPosition").static=!1;var h=new kr(t);return s=r.call(this,u,h,null,a)||this,s.autoUpdate=!0,s}return Object.defineProperty(e.prototype,"vertices",{get:function(){return this.geometry.getBuffer("aVertexPosition").data},set:function(t){this.geometry.getBuffer("aVertexPosition").data=t},enumerable:!1,configurable:!0}),e.prototype._render=function(t){this.autoUpdate&&this.geometry.getBuffer("aVertexPosition").update(),r.prototype._render.call(this,t)},e})(Je);var Hr=10;(function(r){Ae(e,r);function e(t,i,n,o,a){i===void 0&&(i=Hr),n===void 0&&(n=Hr),o===void 0&&(o=Hr),a===void 0&&(a=Hr);var s=r.call(this,L.WHITE,4,4)||this;return s._origWidth=t.orig.width,s._origHeight=t.orig.height,s._width=s._origWidth,s._height=s._origHeight,s._leftWidth=i,s._rightWidth=o,s._topHeight=n,s._bottomHeight=a,s.texture=t,s}return e.prototype.textureUpdated=function(){this._textureID=this.shader.texture._updateID,this._refresh()},Object.defineProperty(e.prototype,"vertices",{get:function(){return this.geometry.getBuffer("aVertexPosition").data},set:function(t){this.geometry.getBuffer("aVertexPosition").data=t},enumerable:!1,configurable:!0}),e.prototype.updateHorizontalVertices=function(){var t=this.vertices,i=this._getMinScale();t[9]=t[11]=t[13]=t[15]=this._topHeight*i,t[17]=t[19]=t[21]=t[23]=this._height-this._bottomHeight*i,t[25]=t[27]=t[29]=t[31]=this._height},e.prototype.updateVerticalVertices=function(){var t=this.vertices,i=this._getMinScale();t[2]=t[10]=t[18]=t[26]=this._leftWidth*i,t[4]=t[12]=t[20]=t[28]=this._width-this._rightWidth*i,t[6]=t[14]=t[22]=t[30]=this._width},e.prototype._getMinScale=function(){var t=this._leftWidth+this._rightWidth,i=this._width>t?1:this._width/t,n=this._topHeight+this._bottomHeight,o=this._height>n?1:this._height/n,a=Math.min(i,o);return a},Object.defineProperty(e.prototype,"width",{get:function(){return this._width},set:function(t){this._width=t,this._refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this._height},set:function(t){this._height=t,this._refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"leftWidth",{get:function(){return this._leftWidth},set:function(t){this._leftWidth=t,this._refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"rightWidth",{get:function(){return this._rightWidth},set:function(t){this._rightWidth=t,this._refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"topHeight",{get:function(){return this._topHeight},set:function(t){this._topHeight=t,this._refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"bottomHeight",{get:function(){return this._bottomHeight},set:function(t){this._bottomHeight=t,this._refresh()},enumerable:!1,configurable:!0}),e.prototype._refresh=function(){var t=this.texture,i=this.geometry.buffers[1].data;this._origWidth=t.orig.width,this._origHeight=t.orig.height;var n=1/this._origWidth,o=1/this._origHeight;i[0]=i[8]=i[16]=i[24]=0,i[1]=i[3]=i[5]=i[7]=0,i[6]=i[14]=i[22]=i[30]=1,i[25]=i[27]=i[29]=i[31]=1,i[2]=i[10]=i[18]=i[26]=n*this._leftWidth,i[4]=i[12]=i[20]=i[28]=1-n*this._rightWidth,i[9]=i[11]=i[13]=i[15]=o*this._topHeight,i[17]=i[19]=i[21]=i[23]=1-o*this._bottomHeight,this.updateHorizontalVertices(),this.updateVerticalVertices(),this.geometry.buffers[0].update(),this.geometry.buffers[1].update()},e})(r_);/*!
 * @pixi/sprite-animated - v6.1.3
 * Compiled Mon, 13 Sep 2021 15:29:31 UTC
 *
 * @pixi/sprite-animated is licensed under the MIT License.
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
***************************************************************************** */var Sn=function(r,e){return Sn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])},Sn(r,e)};function i_(r,e){Sn(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}(function(r){i_(e,r);function e(t,i){i===void 0&&(i=!0);var n=r.call(this,t[0]instanceof L?t[0]:t[0].texture)||this;return n._textures=null,n._durations=null,n._autoUpdate=i,n._isConnectedToTicker=!1,n.animationSpeed=1,n.loop=!0,n.updateAnchor=!1,n.onComplete=null,n.onFrameChange=null,n.onLoop=null,n._currentTime=0,n._playing=!1,n._previousFrame=null,n.textures=t,n}return e.prototype.stop=function(){!this._playing||(this._playing=!1,this._autoUpdate&&this._isConnectedToTicker&&(xt.shared.remove(this.update,this),this._isConnectedToTicker=!1))},e.prototype.play=function(){this._playing||(this._playing=!0,this._autoUpdate&&!this._isConnectedToTicker&&(xt.shared.add(this.update,this,zt.HIGH),this._isConnectedToTicker=!0))},e.prototype.gotoAndStop=function(t){this.stop();var i=this.currentFrame;this._currentTime=t,i!==this.currentFrame&&this.updateTexture()},e.prototype.gotoAndPlay=function(t){var i=this.currentFrame;this._currentTime=t,i!==this.currentFrame&&this.updateTexture(),this.play()},e.prototype.update=function(t){if(!!this._playing){var i=this.animationSpeed*t,n=this.currentFrame;if(this._durations!==null){var o=this._currentTime%1*this._durations[this.currentFrame];for(o+=i/60*1e3;o<0;)this._currentTime--,o+=this._durations[this.currentFrame];var a=Math.sign(this.animationSpeed*t);for(this._currentTime=Math.floor(this._currentTime);o>=this._durations[this.currentFrame];)o-=this._durations[this.currentFrame]*a,this._currentTime+=a;this._currentTime+=o/this._durations[this.currentFrame]}else this._currentTime+=i;this._currentTime<0&&!this.loop?(this.gotoAndStop(0),this.onComplete&&this.onComplete()):this._currentTime>=this._textures.length&&!this.loop?(this.gotoAndStop(this._textures.length-1),this.onComplete&&this.onComplete()):n!==this.currentFrame&&(this.loop&&this.onLoop&&(this.animationSpeed>0&&this.currentFrame<n?this.onLoop():this.animationSpeed<0&&this.currentFrame>n&&this.onLoop()),this.updateTexture())}},e.prototype.updateTexture=function(){var t=this.currentFrame;this._previousFrame!==t&&(this._previousFrame=t,this._texture=this._textures[t],this._textureID=-1,this._textureTrimmedID=-1,this._cachedTint=16777215,this.uvs=this._texture._uvs.uvsFloat32,this.updateAnchor&&this._anchor.copyFrom(this._texture.defaultAnchor),this.onFrameChange&&this.onFrameChange(this.currentFrame))},e.prototype.destroy=function(t){this.stop(),r.prototype.destroy.call(this,t),this.onComplete=null,this.onFrameChange=null,this.onLoop=null},e.fromFrames=function(t){for(var i=[],n=0;n<t.length;++n)i.push(L.from(t[n]));return new e(i)},e.fromImages=function(t){for(var i=[],n=0;n<t.length;++n)i.push(L.from(t[n]));return new e(i)},Object.defineProperty(e.prototype,"totalFrames",{get:function(){return this._textures.length},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"textures",{get:function(){return this._textures},set:function(t){if(t[0]instanceof L)this._textures=t,this._durations=null;else{this._textures=[],this._durations=[];for(var i=0;i<t.length;i++)this._textures.push(t[i].texture),this._durations.push(t[i].time)}this._previousFrame=null,this.gotoAndStop(0),this.updateTexture()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"currentFrame",{get:function(){var t=Math.floor(this._currentTime)%this._textures.length;return t<0&&(t+=this._textures.length),t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"playing",{get:function(){return this._playing},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"autoUpdate",{get:function(){return this._autoUpdate},set:function(t){t!==this._autoUpdate&&(this._autoUpdate=t,!this._autoUpdate&&this._isConnectedToTicker?(xt.shared.remove(this.update,this),this._isConnectedToTicker=!1):this._autoUpdate&&!this._isConnectedToTicker&&this._playing&&(xt.shared.add(this.update,this),this._isConnectedToTicker=!0))},enumerable:!1,configurable:!0}),e})(qe);/*!
 * pixi.js - v6.1.3
 * Compiled Mon, 13 Sep 2021 15:29:31 UTC
 *
 * pixi.js is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */qt.registerPlugin("accessibility",Rc);qt.registerPlugin("extract",Zd);qt.registerPlugin("interaction",Lc);qt.registerPlugin("particle",Gp);qt.registerPlugin("prepare",_v);qt.registerPlugin("batch",Vd);qt.registerPlugin("tilingSprite",bv);Dt.registerPlugin(Ov);Dt.registerPlugin(pp);Dt.registerPlugin(Op);Dt.registerPlugin(Mp);Dt.registerPlugin(gv);$i.registerPlugin(Ac);$i.registerPlugin(ap);var Ym={AlphaFilter:Ms,BlurFilter:Gv,BlurFilterPass:er,ColorMatrixFilter:Tn,DisplacementFilter:Vv,FXAAFilter:qv,NoiseFilter:Jv};/*!
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
***************************************************************************** */var Rn=function(r,e){return Rn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},Rn(r,e)};function n_(r,e){Rn(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var o_=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,a_=`varying vec2 vTextureCoord;
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
`;(function(r){n_(e,r);function e(t){var i=r.call(this,o_,a_)||this;return i.gamma=1,i.saturation=1,i.contrast=1,i.brightness=1,i.red=1,i.green=1,i.blue=1,i.alpha=1,Object.assign(i,t),i}return e.prototype.apply=function(t,i,n,o){this.uniforms.gamma=Math.max(this.gamma,1e-4),this.uniforms.saturation=this.saturation,this.uniforms.contrast=this.contrast,this.uniforms.brightness=this.brightness,this.uniforms.red=this.red,this.uniforms.green=this.green,this.uniforms.blue=this.blue,this.uniforms.alpha=this.alpha,t.applyFilter(this,i,n,o)},e})(k);/*!
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
***************************************************************************** */var An=function(r,e){return An=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},An(r,e)};function s_(r,e){An(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var u_=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,h_=`
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
}`,l_=`
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
`,zr=function(r){s_(e,r);function e(t,i,n){t===void 0&&(t=4),i===void 0&&(i=3),n===void 0&&(n=!1);var o=r.call(this,u_,n?l_:h_)||this;return o._kernels=[],o._blur=4,o._quality=3,o.uniforms.uOffset=new Float32Array(2),o._pixelSize=new Y,o.pixelSize=1,o._clamp=n,Array.isArray(t)?o.kernels=t:(o._blur=t,o.quality=i),o}return e.prototype.apply=function(t,i,n,o){var a=this._pixelSize.x/i._frame.width,s=this._pixelSize.y/i._frame.height,u;if(this._quality===1||this._blur===0)u=this._kernels[0]+.5,this.uniforms.uOffset[0]=u*a,this.uniforms.uOffset[1]=u*s,t.applyFilter(this,i,n,o);else{for(var h=t.getFilterTexture(),l=i,f=h,c=void 0,d=this._quality-1,p=0;p<d;p++)u=this._kernels[p]+.5,this.uniforms.uOffset[0]=u*a,this.uniforms.uOffset[1]=u*s,t.applyFilter(this,l,f,1),c=l,l=f,f=c;u=this._kernels[d]+.5,this.uniforms.uOffset[0]=u*a,this.uniforms.uOffset[1]=u*s,t.applyFilter(this,l,n,o),t.returnFilterTexture(h)}},e.prototype._updatePadding=function(){this.padding=Math.ceil(this._kernels.reduce(function(t,i){return t+i+.5},0))},e.prototype._generateKernels=function(){var t=this._blur,i=this._quality,n=[t];if(t>0)for(var o=t,a=t/i,s=1;s<i;s++)o-=a,n.push(o);this._kernels=n,this._updatePadding()},Object.defineProperty(e.prototype,"kernels",{get:function(){return this._kernels},set:function(t){Array.isArray(t)&&t.length>0?(this._kernels=t,this._quality=t.length,this._blur=Math.max.apply(Math,t)):(this._kernels=[0],this._quality=1)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"clamp",{get:function(){return this._clamp},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"pixelSize",{get:function(){return this._pixelSize},set:function(t){typeof t=="number"?(this._pixelSize.x=t,this._pixelSize.y=t):Array.isArray(t)?(this._pixelSize.x=t[0],this._pixelSize.y=t[1]):t instanceof Y?(this._pixelSize.x=t.x,this._pixelSize.y=t.y):(this._pixelSize.x=1,this._pixelSize.y=1)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"quality",{get:function(){return this._quality},set:function(t){this._quality=Math.max(1,Math.round(t)),this._generateKernels()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blur",{get:function(){return this._blur},set:function(t){this._blur=t,this._generateKernels()},enumerable:!1,configurable:!0}),e}(k);/*!
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
***************************************************************************** */var On=function(r,e){return On=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},On(r,e)};function bu(r,e){On(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Tu=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,f_=`
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
`,c_=function(r){bu(e,r);function e(t){t===void 0&&(t=.5);var i=r.call(this,Tu,f_)||this;return i.threshold=t,i}return Object.defineProperty(e.prototype,"threshold",{get:function(){return this.uniforms.threshold},set:function(t){this.uniforms.threshold=t},enumerable:!1,configurable:!0}),e}(k),d_=`uniform sampler2D uSampler;
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
`;(function(r){bu(e,r);function e(t){var i=r.call(this,Tu,d_)||this;i.bloomScale=1,i.brightness=1,i._resolution=O.FILTER_RESOLUTION,typeof t=="number"&&(t={threshold:t});var n=Object.assign(e.defaults,t);i.bloomScale=n.bloomScale,i.brightness=n.brightness;var o=n.kernels,a=n.blur,s=n.quality,u=n.pixelSize,h=n.resolution;return i._extractFilter=new c_(n.threshold),i._extractFilter.resolution=h,i._blurFilter=o?new zr(o):new zr(a,s),i.pixelSize=u,i.resolution=h,i}return e.prototype.apply=function(t,i,n,o,a){var s=t.getFilterTexture();this._extractFilter.apply(t,i,s,1,a);var u=t.getFilterTexture();this._blurFilter.apply(t,s,u,1),this.uniforms.bloomScale=this.bloomScale,this.uniforms.brightness=this.brightness,this.uniforms.bloomTexture=u,t.applyFilter(this,i,n,o),t.returnFilterTexture(u),t.returnFilterTexture(s)},Object.defineProperty(e.prototype,"resolution",{get:function(){return this._resolution},set:function(t){this._resolution=t,this._extractFilter&&(this._extractFilter.resolution=t),this._blurFilter&&(this._blurFilter.resolution=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"threshold",{get:function(){return this._extractFilter.threshold},set:function(t){this._extractFilter.threshold=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"kernels",{get:function(){return this._blurFilter.kernels},set:function(t){this._blurFilter.kernels=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blur",{get:function(){return this._blurFilter.blur},set:function(t){this._blurFilter.blur=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"quality",{get:function(){return this._blurFilter.quality},set:function(t){this._blurFilter.quality=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"pixelSize",{get:function(){return this._blurFilter.pixelSize},set:function(t){this._blurFilter.pixelSize=t},enumerable:!1,configurable:!0}),e.defaults={threshold:.5,bloomScale:1,brightness:1,kernels:null,blur:8,quality:4,pixelSize:1,resolution:O.FILTER_RESOLUTION},e})(k);/*!
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
***************************************************************************** */var Nn=function(r,e){return Nn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},Nn(r,e)};function p_(r,e){Nn(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var v_=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,__=`varying vec2 vTextureCoord;

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
`;(function(r){p_(e,r);function e(t){t===void 0&&(t=8);var i=r.call(this,v_,__)||this;return i.size=t,i}return Object.defineProperty(e.prototype,"size",{get:function(){return this.uniforms.pixelSize},set:function(t){this.uniforms.pixelSize=t},enumerable:!1,configurable:!0}),e})(k);/*!
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
***************************************************************************** */var Fn=function(r,e){return Fn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},Fn(r,e)};function m_(r,e){Fn(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var g_=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,y_=`precision mediump float;

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
`;(function(r){m_(e,r);function e(t){var i=r.call(this,g_,y_)||this;return i._thickness=2,i._angle=0,i.uniforms.lightColor=new Float32Array(3),i.uniforms.shadowColor=new Float32Array(3),Object.assign(i,{rotation:45,thickness:2,lightColor:16777215,lightAlpha:.7,shadowColor:0,shadowAlpha:.7},t),i.padding=1,i}return e.prototype._updateTransform=function(){this.uniforms.transformX=this._thickness*Math.cos(this._angle),this.uniforms.transformY=this._thickness*Math.sin(this._angle)},Object.defineProperty(e.prototype,"rotation",{get:function(){return this._angle/ee},set:function(t){this._angle=t*ee,this._updateTransform()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"thickness",{get:function(){return this._thickness},set:function(t){this._thickness=t,this._updateTransform()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"lightColor",{get:function(){return It(this.uniforms.lightColor)},set:function(t){yt(t,this.uniforms.lightColor)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"lightAlpha",{get:function(){return this.uniforms.lightAlpha},set:function(t){this.uniforms.lightAlpha=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shadowColor",{get:function(){return It(this.uniforms.shadowColor)},set:function(t){yt(t,this.uniforms.shadowColor)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shadowAlpha",{get:function(){return this.uniforms.shadowAlpha},set:function(t){this.uniforms.shadowAlpha=t},enumerable:!1,configurable:!0}),e})(k);/*!
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
***************************************************************************** */var Un=function(r,e){return Un=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},Un(r,e)};function x_(r,e){Un(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}(function(r){x_(e,r);function e(t,i,n,o){t===void 0&&(t=2),i===void 0&&(i=4),n===void 0&&(n=O.FILTER_RESOLUTION),o===void 0&&(o=5);var a=r.call(this)||this,s,u;return typeof t=="number"?(s=t,u=t):t instanceof Y?(s=t.x,u=t.y):Array.isArray(t)&&(s=t[0],u=t[1]),a.blurXFilter=new er(!0,s,i,n,o),a.blurYFilter=new er(!1,u,i,n,o),a.blurYFilter.blendMode=F.SCREEN,a.defaultFilter=new Ms,a}return e.prototype.apply=function(t,i,n,o){var a=t.getFilterTexture();this.defaultFilter.apply(t,i,n,o),this.blurXFilter.apply(t,i,a,1),this.blurYFilter.apply(t,a,n,0),t.returnFilterTexture(a)},Object.defineProperty(e.prototype,"blur",{get:function(){return this.blurXFilter.blur},set:function(t){this.blurXFilter.blur=this.blurYFilter.blur=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blurX",{get:function(){return this.blurXFilter.blur},set:function(t){this.blurXFilter.blur=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blurY",{get:function(){return this.blurYFilter.blur},set:function(t){this.blurYFilter.blur=t},enumerable:!1,configurable:!0}),e})(k);/*!
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
***************************************************************************** */var Ln=function(r,e){return Ln=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},Ln(r,e)};function b_(r,e){Ln(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var T_=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,E_=`uniform float radius;
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
`;(function(r){b_(e,r);function e(t){var i=r.call(this,T_,E_)||this;return i.uniforms.dimensions=new Float32Array(2),Object.assign(i,e.defaults,t),i}return e.prototype.apply=function(t,i,n,o){var a=i.filterFrame,s=a.width,u=a.height;this.uniforms.dimensions[0]=s,this.uniforms.dimensions[1]=u,t.applyFilter(this,i,n,o)},Object.defineProperty(e.prototype,"radius",{get:function(){return this.uniforms.radius},set:function(t){this.uniforms.radius=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"strength",{get:function(){return this.uniforms.strength},set:function(t){this.uniforms.strength=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"center",{get:function(){return this.uniforms.center},set:function(t){this.uniforms.center=t},enumerable:!1,configurable:!0}),e.defaults={center:[.5,.5],radius:100,strength:1},e})(k);/*!
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
***************************************************************************** */var Mn=function(r,e){return Mn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},Mn(r,e)};function C_(r,e){Mn(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var w_=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,P_=`varying vec2 vTextureCoord;
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

}`;(function(r){C_(e,r);function e(t,i,n){i===void 0&&(i=!1),n===void 0&&(n=1);var o=r.call(this,w_,P_)||this;return o.mix=1,o._size=0,o._sliceSize=0,o._slicePixelSize=0,o._sliceInnerSize=0,o._nearest=!1,o._scaleMode=null,o._colorMap=null,o._scaleMode=null,o.nearest=i,o.mix=n,o.colorMap=t,o}return e.prototype.apply=function(t,i,n,o){this.uniforms._mix=this.mix,t.applyFilter(this,i,n,o)},Object.defineProperty(e.prototype,"colorSize",{get:function(){return this._size},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"colorMap",{get:function(){return this._colorMap},set:function(t){var i;!t||(t instanceof L||(t=L.from(t)),((i=t)===null||i===void 0?void 0:i.baseTexture)&&(t.baseTexture.scaleMode=this._scaleMode,t.baseTexture.mipmap=Ut.OFF,this._size=t.height,this._sliceSize=1/this._size,this._slicePixelSize=this._sliceSize/this._size,this._sliceInnerSize=this._slicePixelSize*(this._size-1),this.uniforms._size=this._size,this.uniforms._sliceSize=this._sliceSize,this.uniforms._slicePixelSize=this._slicePixelSize,this.uniforms._sliceInnerSize=this._sliceInnerSize,this.uniforms.colorMap=t),this._colorMap=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"nearest",{get:function(){return this._nearest},set:function(t){this._nearest=t,this._scaleMode=t?Et.NEAREST:Et.LINEAR;var i=this._colorMap;i&&i.baseTexture&&(i.baseTexture._glTextures={},i.baseTexture.scaleMode=this._scaleMode,i.baseTexture.mipmap=Ut.OFF,i._updateID++,i.baseTexture.emit("update",i.baseTexture))},enumerable:!1,configurable:!0}),e.prototype.updateColorMap=function(){var t=this._colorMap;t&&t.baseTexture&&(t._updateID++,t.baseTexture.emit("update",t.baseTexture),this.colorMap=t)},e.prototype.destroy=function(t){t===void 0&&(t=!1),this._colorMap&&this._colorMap.destroy(t),r.prototype.destroy.call(this)},e})(k);/*!
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
***************************************************************************** */var Bn=function(r,e){return Bn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},Bn(r,e)};function I_(r,e){Bn(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var S_=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,R_=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec3 color;
uniform float alpha;

void main(void) {
    vec4 currentColor = texture2D(uSampler, vTextureCoord);
    gl_FragColor = vec4(mix(currentColor.rgb, color.rgb, currentColor.a * alpha), currentColor.a);
}
`;(function(r){I_(e,r);function e(t,i){t===void 0&&(t=0),i===void 0&&(i=1);var n=r.call(this,S_,R_)||this;return n._color=0,n._alpha=1,n.uniforms.color=new Float32Array(3),n.color=t,n.alpha=i,n}return Object.defineProperty(e.prototype,"color",{get:function(){return this._color},set:function(t){var i=this.uniforms.color;typeof t=="number"?(yt(t,i),this._color=t):(i[0]=t[0],i[1]=t[1],i[2]=t[2],this._color=It(i))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"alpha",{get:function(){return this._alpha},set:function(t){this.uniforms.alpha=t,this._alpha=t},enumerable:!1,configurable:!0}),e})(k);/*!
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
***************************************************************************** */var Dn=function(r,e){return Dn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},Dn(r,e)};function A_(r,e){Dn(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var O_=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,N_=`varying vec2 vTextureCoord;
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
`;(function(r){A_(e,r);function e(t,i,n){t===void 0&&(t=16711680),i===void 0&&(i=0),n===void 0&&(n=.4);var o=r.call(this,O_,N_)||this;return o._originalColor=16711680,o._newColor=0,o.uniforms.originalColor=new Float32Array(3),o.uniforms.newColor=new Float32Array(3),o.originalColor=t,o.newColor=i,o.epsilon=n,o}return Object.defineProperty(e.prototype,"originalColor",{get:function(){return this._originalColor},set:function(t){var i=this.uniforms.originalColor;typeof t=="number"?(yt(t,i),this._originalColor=t):(i[0]=t[0],i[1]=t[1],i[2]=t[2],this._originalColor=It(i))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"newColor",{get:function(){return this._newColor},set:function(t){var i=this.uniforms.newColor;typeof t=="number"?(yt(t,i),this._newColor=t):(i[0]=t[0],i[1]=t[1],i[2]=t[2],this._newColor=It(i))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"epsilon",{get:function(){return this.uniforms.epsilon},set:function(t){this.uniforms.epsilon=t},enumerable:!1,configurable:!0}),e})(k);/*!
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
***************************************************************************** */var Gn=function(r,e){return Gn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},Gn(r,e)};function F_(r,e){Gn(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var U_=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,L_=`precision mediump float;

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
`;(function(r){F_(e,r);function e(t,i,n){i===void 0&&(i=200),n===void 0&&(n=200);var o=r.call(this,U_,L_)||this;return o.uniforms.texelSize=new Float32Array(2),o.uniforms.matrix=new Float32Array(9),t!==void 0&&(o.matrix=t),o.width=i,o.height=n,o}return Object.defineProperty(e.prototype,"matrix",{get:function(){return this.uniforms.matrix},set:function(t){var i=this;t.forEach(function(n,o){i.uniforms.matrix[o]=n})},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"width",{get:function(){return 1/this.uniforms.texelSize[0]},set:function(t){this.uniforms.texelSize[0]=1/t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return 1/this.uniforms.texelSize[1]},set:function(t){this.uniforms.texelSize[1]=1/t},enumerable:!1,configurable:!0}),e})(k);/*!
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
***************************************************************************** */var kn=function(r,e){return kn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},kn(r,e)};function M_(r,e){kn(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var B_=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,D_=`precision mediump float;

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
`;(function(r){M_(e,r);function e(){return r.call(this,B_,D_)||this}return e})(k);/*!
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
***************************************************************************** */var jn=function(r,e){return jn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},jn(r,e)};function G_(r,e){jn(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var k_=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,j_=`varying vec2 vTextureCoord;
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
`;(function(r){G_(e,r);function e(t){var i=r.call(this,k_,j_)||this;return i.time=0,i.seed=0,i.uniforms.dimensions=new Float32Array(2),Object.assign(i,e.defaults,t),i}return e.prototype.apply=function(t,i,n,o){var a=i.filterFrame,s=a.width,u=a.height;this.uniforms.dimensions[0]=s,this.uniforms.dimensions[1]=u,this.uniforms.seed=this.seed,this.uniforms.time=this.time,t.applyFilter(this,i,n,o)},Object.defineProperty(e.prototype,"curvature",{get:function(){return this.uniforms.curvature},set:function(t){this.uniforms.curvature=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"lineWidth",{get:function(){return this.uniforms.lineWidth},set:function(t){this.uniforms.lineWidth=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"lineContrast",{get:function(){return this.uniforms.lineContrast},set:function(t){this.uniforms.lineContrast=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"verticalLine",{get:function(){return this.uniforms.verticalLine},set:function(t){this.uniforms.verticalLine=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"noise",{get:function(){return this.uniforms.noise},set:function(t){this.uniforms.noise=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"noiseSize",{get:function(){return this.uniforms.noiseSize},set:function(t){this.uniforms.noiseSize=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignetting",{get:function(){return this.uniforms.vignetting},set:function(t){this.uniforms.vignetting=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignettingAlpha",{get:function(){return this.uniforms.vignettingAlpha},set:function(t){this.uniforms.vignettingAlpha=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignettingBlur",{get:function(){return this.uniforms.vignettingBlur},set:function(t){this.uniforms.vignettingBlur=t},enumerable:!1,configurable:!0}),e.defaults={curvature:1,lineWidth:1,lineContrast:.25,verticalLine:!1,noise:0,noiseSize:1,seed:0,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,time:0},e})(k);/*!
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
***************************************************************************** */var Xn=function(r,e){return Xn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},Xn(r,e)};function X_(r,e){Xn(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var H_=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,z_=`precision mediump float;

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
`;(function(r){X_(e,r);function e(t,i){t===void 0&&(t=1),i===void 0&&(i=5);var n=r.call(this,H_,z_)||this;return n.scale=t,n.angle=i,n}return Object.defineProperty(e.prototype,"scale",{get:function(){return this.uniforms.scale},set:function(t){this.uniforms.scale=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"angle",{get:function(){return this.uniforms.angle},set:function(t){this.uniforms.angle=t},enumerable:!1,configurable:!0}),e})(k);/*!
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
***************************************************************************** */var Hn=function(r,e){return Hn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},Hn(r,e)};function V_(r,e){Hn(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Vr=function(){return Vr=Object.assign||function(e){for(var t=arguments,i,n=1,o=arguments.length;n<o;n++){i=t[n];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},Vr.apply(this,arguments)},$_=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,W_=`varying vec2 vTextureCoord;
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
}`;(function(r){V_(e,r);function e(t){var i=r.call(this)||this;i.angle=45,i._distance=5,i._resolution=O.FILTER_RESOLUTION;var n=t?Vr(Vr({},e.defaults),t):e.defaults,o=n.kernels,a=n.blur,s=n.quality,u=n.pixelSize,h=n.resolution;i._tintFilter=new k($_,W_),i._tintFilter.uniforms.color=new Float32Array(4),i._tintFilter.uniforms.shift=new Y,i._tintFilter.resolution=h,i._blurFilter=o?new zr(o):new zr(a,s),i.pixelSize=u,i.resolution=h;var l=n.shadowOnly,f=n.rotation,c=n.distance,d=n.alpha,p=n.color;return i.shadowOnly=l,i.rotation=f,i.distance=c,i.alpha=d,i.color=p,i._updatePadding(),i}return e.prototype.apply=function(t,i,n,o){var a=t.getFilterTexture();this._tintFilter.apply(t,i,a,1),this._blurFilter.apply(t,a,n,o),this.shadowOnly!==!0&&t.applyFilter(this,i,n,0),t.returnFilterTexture(a)},e.prototype._updatePadding=function(){this.padding=this.distance+this.blur*2},e.prototype._updateShift=function(){this._tintFilter.uniforms.shift.set(this.distance*Math.cos(this.angle),this.distance*Math.sin(this.angle))},Object.defineProperty(e.prototype,"resolution",{get:function(){return this._resolution},set:function(t){this._resolution=t,this._tintFilter&&(this._tintFilter.resolution=t),this._blurFilter&&(this._blurFilter.resolution=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"distance",{get:function(){return this._distance},set:function(t){this._distance=t,this._updatePadding(),this._updateShift()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"rotation",{get:function(){return this.angle/ee},set:function(t){this.angle=t*ee,this._updateShift()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"alpha",{get:function(){return this._tintFilter.uniforms.alpha},set:function(t){this._tintFilter.uniforms.alpha=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"color",{get:function(){return It(this._tintFilter.uniforms.color)},set:function(t){yt(t,this._tintFilter.uniforms.color)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"kernels",{get:function(){return this._blurFilter.kernels},set:function(t){this._blurFilter.kernels=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blur",{get:function(){return this._blurFilter.blur},set:function(t){this._blurFilter.blur=t,this._updatePadding()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"quality",{get:function(){return this._blurFilter.quality},set:function(t){this._blurFilter.quality=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"pixelSize",{get:function(){return this._blurFilter.pixelSize},set:function(t){this._blurFilter.pixelSize=t},enumerable:!1,configurable:!0}),e.defaults={rotation:45,distance:5,color:0,alpha:.5,shadowOnly:!1,kernels:null,blur:2,quality:3,pixelSize:1,resolution:O.FILTER_RESOLUTION},e})(k);/*!
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
***************************************************************************** */var zn=function(r,e){return zn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},zn(r,e)};function Y_(r,e){zn(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var q_=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,K_=`precision mediump float;

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
`;(function(r){Y_(e,r);function e(t){t===void 0&&(t=5);var i=r.call(this,q_,K_)||this;return i.strength=t,i}return Object.defineProperty(e.prototype,"strength",{get:function(){return this.uniforms.strength},set:function(t){this.uniforms.strength=t},enumerable:!1,configurable:!0}),e})(k);/*!
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
***************************************************************************** */var Vn=function(r,e){return Vn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},Vn(r,e)};function Z_(r,e){Vn(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var J_=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Q_=`// precision highp float;

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
`;(function(r){Z_(e,r);function e(t){var i=r.call(this,J_,Q_)||this;return i.offset=100,i.fillMode=e.TRANSPARENT,i.average=!1,i.seed=0,i.minSize=8,i.sampleSize=512,i._slices=0,i._offsets=new Float32Array(1),i._sizes=new Float32Array(1),i._direction=-1,i.uniforms.dimensions=new Float32Array(2),i._canvas=document.createElement("canvas"),i._canvas.width=4,i._canvas.height=i.sampleSize,i.texture=L.from(i._canvas,{scaleMode:Et.NEAREST}),Object.assign(i,e.defaults,t),i}return e.prototype.apply=function(t,i,n,o){var a=i.filterFrame,s=a.width,u=a.height;this.uniforms.dimensions[0]=s,this.uniforms.dimensions[1]=u,this.uniforms.aspect=u/s,this.uniforms.seed=this.seed,this.uniforms.offset=this.offset,this.uniforms.fillMode=this.fillMode,t.applyFilter(this,i,n,o)},e.prototype._randomizeSizes=function(){var t=this._sizes,i=this._slices-1,n=this.sampleSize,o=Math.min(this.minSize/n,.9/this._slices);if(this.average){for(var a=this._slices,s=1,u=0;u<i;u++){var h=s/(a-u),l=Math.max(h*(1-Math.random()*.6),o);t[u]=l,s-=l}t[i]=s}else{for(var s=1,f=Math.sqrt(1/this._slices),u=0;u<i;u++){var l=Math.max(f*s*Math.random(),o);t[u]=l,s-=l}t[i]=s}this.shuffle()},e.prototype.shuffle=function(){for(var t=this._sizes,i=this._slices-1,n=i;n>0;n--){var o=Math.random()*n>>0,a=t[n];t[n]=t[o],t[o]=a}},e.prototype._randomizeOffsets=function(){for(var t=0;t<this._slices;t++)this._offsets[t]=Math.random()*(Math.random()<.5?-1:1)},e.prototype.refresh=function(){this._randomizeSizes(),this._randomizeOffsets(),this.redraw()},e.prototype.redraw=function(){var t=this.sampleSize,i=this.texture,n=this._canvas.getContext("2d");n.clearRect(0,0,8,t);for(var o,a=0,s=0;s<this._slices;s++){o=Math.floor(this._offsets[s]*256);var u=this._sizes[s]*t,h=o>0?o:0,l=o<0?-o:0;n.fillStyle="rgba("+h+", "+l+", 0, 1)",n.fillRect(0,a>>0,t,u+1>>0),a+=u}i.baseTexture.update(),this.uniforms.displacementMap=i},Object.defineProperty(e.prototype,"sizes",{get:function(){return this._sizes},set:function(t){for(var i=Math.min(this._slices,t.length),n=0;n<i;n++)this._sizes[n]=t[n]},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"offsets",{get:function(){return this._offsets},set:function(t){for(var i=Math.min(this._slices,t.length),n=0;n<i;n++)this._offsets[n]=t[n]},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"slices",{get:function(){return this._slices},set:function(t){this._slices!==t&&(this._slices=t,this.uniforms.slices=t,this._sizes=this.uniforms.slicesWidth=new Float32Array(t),this._offsets=this.uniforms.slicesOffset=new Float32Array(t),this.refresh())},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"direction",{get:function(){return this._direction},set:function(t){if(this._direction!==t){this._direction=t;var i=t*ee;this.uniforms.sinDir=Math.sin(i),this.uniforms.cosDir=Math.cos(i)}},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"red",{get:function(){return this.uniforms.red},set:function(t){this.uniforms.red=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"green",{get:function(){return this.uniforms.green},set:function(t){this.uniforms.green=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blue",{get:function(){return this.uniforms.blue},set:function(t){this.uniforms.blue=t},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){var t;(t=this.texture)===null||t===void 0||t.destroy(!0),this.texture=this._canvas=this.red=this.green=this.blue=this._sizes=this._offsets=null},e.defaults={slices:5,offset:100,direction:0,fillMode:0,average:!1,seed:0,red:[0,0],green:[0,0],blue:[0,0],minSize:8,sampleSize:512},e.TRANSPARENT=0,e.ORIGINAL=1,e.LOOP=2,e.CLAMP=3,e.MIRROR=4,e})(k);/*!
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
***************************************************************************** */var $n=function(r,e){return $n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},$n(r,e)};function tm(r,e){$n(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var em=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,rm=`varying vec2 vTextureCoord;
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
`;(function(r){tm(e,r);function e(t){var i=this,n=Object.assign({},e.defaults,t),o=n.outerStrength,a=n.innerStrength,s=n.color,u=n.knockout,h=n.quality,l=Math.round(n.distance);return i=r.call(this,em,rm.replace(/__ANGLE_STEP_SIZE__/gi,""+(1/h/l).toFixed(7)).replace(/__DIST__/gi,l.toFixed(0)+".0"))||this,i.uniforms.glowColor=new Float32Array([0,0,0,1]),Object.assign(i,{color:s,outerStrength:o,innerStrength:a,padding:l,knockout:u}),i}return Object.defineProperty(e.prototype,"color",{get:function(){return It(this.uniforms.glowColor)},set:function(t){yt(t,this.uniforms.glowColor)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"outerStrength",{get:function(){return this.uniforms.outerStrength},set:function(t){this.uniforms.outerStrength=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"innerStrength",{get:function(){return this.uniforms.innerStrength},set:function(t){this.uniforms.innerStrength=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"knockout",{get:function(){return this.uniforms.knockout},set:function(t){this.uniforms.knockout=t},enumerable:!1,configurable:!0}),e.defaults={distance:10,outerStrength:4,innerStrength:0,color:16777215,quality:.1,knockout:!1},e})(k);/*!
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
***************************************************************************** */var Wn=function(r,e){return Wn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},Wn(r,e)};function im(r,e){Wn(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var nm=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,om=`vec3 mod289(vec3 x)
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
`,am=`varying vec2 vTextureCoord;
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
`,qm=function(r){im(e,r);function e(t){var i=r.call(this,nm,am.replace("${perlin}",om))||this;i.parallel=!0,i.time=0,i._angle=0,i.uniforms.dimensions=new Float32Array(2);var n=Object.assign(e.defaults,t);return i._angleLight=new Y,i.angle=n.angle,i.gain=n.gain,i.lacunarity=n.lacunarity,i.alpha=n.alpha,i.parallel=n.parallel,i.center=n.center,i.time=n.time,i}return e.prototype.apply=function(t,i,n,o){var a=i.filterFrame,s=a.width,u=a.height;this.uniforms.light=this.parallel?this._angleLight:this.center,this.uniforms.parallel=this.parallel,this.uniforms.dimensions[0]=s,this.uniforms.dimensions[1]=u,this.uniforms.aspect=u/s,this.uniforms.time=this.time,this.uniforms.alpha=this.alpha,t.applyFilter(this,i,n,o)},Object.defineProperty(e.prototype,"angle",{get:function(){return this._angle},set:function(t){this._angle=t;var i=t*ee;this._angleLight.x=Math.cos(i),this._angleLight.y=Math.sin(i)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"gain",{get:function(){return this.uniforms.gain},set:function(t){this.uniforms.gain=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"lacunarity",{get:function(){return this.uniforms.lacunarity},set:function(t){this.uniforms.lacunarity=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"alpha",{get:function(){return this.uniforms.alpha},set:function(t){this.uniforms.alpha=t},enumerable:!1,configurable:!0}),e.defaults={angle:30,gain:.5,lacunarity:2.5,time:0,parallel:!0,center:[0,0],alpha:1},e}(k);/*!
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
***************************************************************************** */var Yn=function(r,e){return Yn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},Yn(r,e)};function sm(r,e){Yn(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var um=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,hm=`varying vec2 vTextureCoord;
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
`;(function(r){sm(e,r);function e(t,i,n){t===void 0&&(t=[0,0]),i===void 0&&(i=5),n===void 0&&(n=0);var o=r.call(this,um,hm)||this;return o.kernelSize=5,o.uniforms.uVelocity=new Float32Array(2),o._velocity=new re(o.velocityChanged,o),o.setVelocity(t),o.kernelSize=i,o.offset=n,o}return e.prototype.apply=function(t,i,n,o){var a=this.velocity,s=a.x,u=a.y;this.uniforms.uKernelSize=s!==0||u!==0?this.kernelSize:0,t.applyFilter(this,i,n,o)},Object.defineProperty(e.prototype,"velocity",{get:function(){return this._velocity},set:function(t){this.setVelocity(t)},enumerable:!1,configurable:!0}),e.prototype.setVelocity=function(t){if(Array.isArray(t)){var i=t[0],n=t[1];this._velocity.set(i,n)}else this._velocity.copyFrom(t)},e.prototype.velocityChanged=function(){this.uniforms.uVelocity[0]=this._velocity.x,this.uniforms.uVelocity[1]=this._velocity.y,this.padding=(Math.max(Math.abs(this._velocity.x),Math.abs(this._velocity.y))>>0)+1},Object.defineProperty(e.prototype,"offset",{get:function(){return this.uniforms.uOffset},set:function(t){this.uniforms.uOffset=t},enumerable:!1,configurable:!0}),e})(k);/*!
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
***************************************************************************** */var qn=function(r,e){return qn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},qn(r,e)};function lm(r,e){qn(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var fm=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,cm=`varying vec2 vTextureCoord;
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
`;(function(r){lm(e,r);function e(t,i,n){i===void 0&&(i=.05),n===void 0&&(n=t.length);var o=r.call(this,fm,cm.replace(/%maxColors%/g,n.toFixed(0)))||this;return o._replacements=[],o._maxColors=0,o.epsilon=i,o._maxColors=n,o.uniforms.originalColors=new Float32Array(n*3),o.uniforms.targetColors=new Float32Array(n*3),o.replacements=t,o}return Object.defineProperty(e.prototype,"replacements",{get:function(){return this._replacements},set:function(t){var i=this.uniforms.originalColors,n=this.uniforms.targetColors,o=t.length;if(o>this._maxColors)throw new Error("Length of replacements ("+o+") exceeds the maximum colors length ("+this._maxColors+")");i[o*3]=-1;for(var a=0;a<o;a++){var s=t[a],u=s[0];typeof u=="number"?u=yt(u):s[0]=It(u),i[a*3]=u[0],i[a*3+1]=u[1],i[a*3+2]=u[2];var h=s[1];typeof h=="number"?h=yt(h):s[1]=It(h),n[a*3]=h[0],n[a*3+1]=h[1],n[a*3+2]=h[2]}this._replacements=t},enumerable:!1,configurable:!0}),e.prototype.refresh=function(){this.replacements=this._replacements},Object.defineProperty(e.prototype,"maxColors",{get:function(){return this._maxColors},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"epsilon",{get:function(){return this.uniforms.epsilon},set:function(t){this.uniforms.epsilon=t},enumerable:!1,configurable:!0}),e})(k);/*!
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
***************************************************************************** */var Kn=function(r,e){return Kn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},Kn(r,e)};function dm(r,e){Kn(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var pm=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,vm=`varying vec2 vTextureCoord;
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
`,Km=function(r){dm(e,r);function e(t,i){i===void 0&&(i=0);var n=r.call(this,pm,vm)||this;return n.seed=0,n.uniforms.dimensions=new Float32Array(2),typeof t=="number"?(n.seed=t,t=void 0):n.seed=i,Object.assign(n,e.defaults,t),n}return e.prototype.apply=function(t,i,n,o){var a,s;this.uniforms.dimensions[0]=(a=i.filterFrame)===null||a===void 0?void 0:a.width,this.uniforms.dimensions[1]=(s=i.filterFrame)===null||s===void 0?void 0:s.height,this.uniforms.seed=this.seed,t.applyFilter(this,i,n,o)},Object.defineProperty(e.prototype,"sepia",{get:function(){return this.uniforms.sepia},set:function(t){this.uniforms.sepia=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"noise",{get:function(){return this.uniforms.noise},set:function(t){this.uniforms.noise=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"noiseSize",{get:function(){return this.uniforms.noiseSize},set:function(t){this.uniforms.noiseSize=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"scratch",{get:function(){return this.uniforms.scratch},set:function(t){this.uniforms.scratch=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"scratchDensity",{get:function(){return this.uniforms.scratchDensity},set:function(t){this.uniforms.scratchDensity=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"scratchWidth",{get:function(){return this.uniforms.scratchWidth},set:function(t){this.uniforms.scratchWidth=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignetting",{get:function(){return this.uniforms.vignetting},set:function(t){this.uniforms.vignetting=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignettingAlpha",{get:function(){return this.uniforms.vignettingAlpha},set:function(t){this.uniforms.vignettingAlpha=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignettingBlur",{get:function(){return this.uniforms.vignettingBlur},set:function(t){this.uniforms.vignettingBlur=t},enumerable:!1,configurable:!0}),e.defaults={sepia:.3,noise:.3,noiseSize:1,scratch:.5,scratchDensity:.3,scratchWidth:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3},e}(k);/*!
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
***************************************************************************** */var Zn=function(r,e){return Zn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},Zn(r,e)};function _m(r,e){Zn(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var mm=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,gm=`varying vec2 vTextureCoord;
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
`;(function(r){_m(e,r);function e(t,i,n){t===void 0&&(t=1),i===void 0&&(i=0),n===void 0&&(n=.1);var o=r.call(this,mm,gm.replace(/\$\{angleStep\}/,e.getAngleStep(n)))||this;return o._thickness=1,o.uniforms.thickness=new Float32Array([0,0]),o.uniforms.outlineColor=new Float32Array([0,0,0,1]),Object.assign(o,{thickness:t,color:i,quality:n}),o}return e.getAngleStep=function(t){var i=Math.max(t*e.MAX_SAMPLES,e.MIN_SAMPLES);return(Math.PI*2/i).toFixed(7)},e.prototype.apply=function(t,i,n,o){this.uniforms.thickness[0]=this._thickness/i._frame.width,this.uniforms.thickness[1]=this._thickness/i._frame.height,t.applyFilter(this,i,n,o)},Object.defineProperty(e.prototype,"color",{get:function(){return It(this.uniforms.outlineColor)},set:function(t){yt(t,this.uniforms.outlineColor)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"thickness",{get:function(){return this._thickness},set:function(t){this._thickness=t,this.padding=t},enumerable:!1,configurable:!0}),e.MIN_SAMPLES=1,e.MAX_SAMPLES=100,e})(k);/*!
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
***************************************************************************** */var Jn=function(r,e){return Jn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},Jn(r,e)};function ym(r,e){Jn(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var xm=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,bm=`precision mediump float;

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
`;(function(r){ym(e,r);function e(t){t===void 0&&(t=10);var i=r.call(this,xm,bm)||this;return i.size=t,i}return Object.defineProperty(e.prototype,"size",{get:function(){return this.uniforms.size},set:function(t){typeof t=="number"&&(t=[t,t]),this.uniforms.size=t},enumerable:!1,configurable:!0}),e})(k);/*!
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
***************************************************************************** */var Qn=function(r,e){return Qn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},Qn(r,e)};function Tm(r,e){Qn(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Em=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Cm=`varying vec2 vTextureCoord;
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
`;(function(r){Tm(e,r);function e(t,i,n,o){t===void 0&&(t=0),i===void 0&&(i=[0,0]),n===void 0&&(n=5),o===void 0&&(o=-1);var a=r.call(this,Em,Cm)||this;return a._angle=0,a.angle=t,a.center=i,a.kernelSize=n,a.radius=o,a}return e.prototype.apply=function(t,i,n,o){this.uniforms.uKernelSize=this._angle!==0?this.kernelSize:0,t.applyFilter(this,i,n,o)},Object.defineProperty(e.prototype,"angle",{get:function(){return this._angle},set:function(t){this._angle=t,this.uniforms.uRadian=t*Math.PI/180},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"center",{get:function(){return this.uniforms.uCenter},set:function(t){this.uniforms.uCenter=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"radius",{get:function(){return this.uniforms.uRadius},set:function(t){(t<0||t===1/0)&&(t=-1),this.uniforms.uRadius=t},enumerable:!1,configurable:!0}),e})(k);/*!
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
***************************************************************************** */var to=function(r,e){return to=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},to(r,e)};function wm(r,e){to(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Pm=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Im=`varying vec2 vTextureCoord;
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
`;(function(r){wm(e,r);function e(t){var i=r.call(this,Pm,Im)||this;return i.time=0,i.uniforms.amplitude=new Float32Array(2),i.uniforms.waveLength=new Float32Array(2),i.uniforms.alpha=new Float32Array(2),i.uniforms.dimensions=new Float32Array(2),Object.assign(i,e.defaults,t),i}return e.prototype.apply=function(t,i,n,o){var a,s;this.uniforms.dimensions[0]=(a=i.filterFrame)===null||a===void 0?void 0:a.width,this.uniforms.dimensions[1]=(s=i.filterFrame)===null||s===void 0?void 0:s.height,this.uniforms.time=this.time,t.applyFilter(this,i,n,o)},Object.defineProperty(e.prototype,"mirror",{get:function(){return this.uniforms.mirror},set:function(t){this.uniforms.mirror=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"boundary",{get:function(){return this.uniforms.boundary},set:function(t){this.uniforms.boundary=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"amplitude",{get:function(){return this.uniforms.amplitude},set:function(t){this.uniforms.amplitude[0]=t[0],this.uniforms.amplitude[1]=t[1]},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"waveLength",{get:function(){return this.uniforms.waveLength},set:function(t){this.uniforms.waveLength[0]=t[0],this.uniforms.waveLength[1]=t[1]},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"alpha",{get:function(){return this.uniforms.alpha},set:function(t){this.uniforms.alpha[0]=t[0],this.uniforms.alpha[1]=t[1]},enumerable:!1,configurable:!0}),e.defaults={mirror:!0,boundary:.5,amplitude:[0,20],waveLength:[30,100],alpha:[1,1],time:0},e})(k);/*!
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
***************************************************************************** */var eo=function(r,e){return eo=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},eo(r,e)};function Sm(r,e){eo(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Rm=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Am=`precision mediump float;

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
`;(function(r){Sm(e,r);function e(t,i,n){t===void 0&&(t=[-10,0]),i===void 0&&(i=[0,10]),n===void 0&&(n=[0,0]);var o=r.call(this,Rm,Am)||this;return o.red=t,o.green=i,o.blue=n,o}return Object.defineProperty(e.prototype,"red",{get:function(){return this.uniforms.red},set:function(t){this.uniforms.red=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"green",{get:function(){return this.uniforms.green},set:function(t){this.uniforms.green=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blue",{get:function(){return this.uniforms.blue},set:function(t){this.uniforms.blue=t},enumerable:!1,configurable:!0}),e})(k);/*!
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
***************************************************************************** */var ro=function(r,e){return ro=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},ro(r,e)};function Om(r,e){ro(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Nm=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Fm=`varying vec2 vTextureCoord;
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
`;(function(r){Om(e,r);function e(t,i,n){t===void 0&&(t=[0,0]),n===void 0&&(n=0);var o=r.call(this,Nm,Fm)||this;return o.center=t,Object.assign(o,e.defaults,i),o.time=n,o}return e.prototype.apply=function(t,i,n,o){this.uniforms.time=this.time,t.applyFilter(this,i,n,o)},Object.defineProperty(e.prototype,"center",{get:function(){return this.uniforms.center},set:function(t){this.uniforms.center=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"amplitude",{get:function(){return this.uniforms.amplitude},set:function(t){this.uniforms.amplitude=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"wavelength",{get:function(){return this.uniforms.wavelength},set:function(t){this.uniforms.wavelength=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"brightness",{get:function(){return this.uniforms.brightness},set:function(t){this.uniforms.brightness=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"speed",{get:function(){return this.uniforms.speed},set:function(t){this.uniforms.speed=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"radius",{get:function(){return this.uniforms.radius},set:function(t){this.uniforms.radius=t},enumerable:!1,configurable:!0}),e.defaults={amplitude:30,wavelength:160,brightness:1,speed:500,radius:-1},e})(k);/*!
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
***************************************************************************** */var io=function(r,e){return io=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},io(r,e)};function Um(r,e){io(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Lm=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Mm=`varying vec2 vTextureCoord;
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
`;(function(r){Um(e,r);function e(t,i,n){i===void 0&&(i=0),n===void 0&&(n=1);var o=r.call(this,Lm,Mm)||this;return o._color=0,o.uniforms.dimensions=new Float32Array(2),o.uniforms.ambientColor=new Float32Array([0,0,0,n]),o.texture=t,o.color=i,o}return e.prototype.apply=function(t,i,n,o){var a,s;this.uniforms.dimensions[0]=(a=i.filterFrame)===null||a===void 0?void 0:a.width,this.uniforms.dimensions[1]=(s=i.filterFrame)===null||s===void 0?void 0:s.height,t.applyFilter(this,i,n,o)},Object.defineProperty(e.prototype,"texture",{get:function(){return this.uniforms.uLightmap},set:function(t){this.uniforms.uLightmap=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"color",{get:function(){return this._color},set:function(t){var i=this.uniforms.ambientColor;typeof t=="number"?(yt(t,i),this._color=t):(i[0]=t[0],i[1]=t[1],i[2]=t[2],i[3]=t[3],this._color=It(i))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"alpha",{get:function(){return this.uniforms.ambientColor[3]},set:function(t){this.uniforms.ambientColor[3]=t},enumerable:!1,configurable:!0}),e})(k);/*!
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
***************************************************************************** */var no=function(r,e){return no=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},no(r,e)};function $r(r,e){no(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Bm=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Dm=`varying vec2 vTextureCoord;

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
`,Eu=function(r){$r(e,r);function e(t,i,n,o){t===void 0&&(t=100),i===void 0&&(i=600);var a=r.call(this,Bm,Dm)||this;return a.uniforms.blur=t,a.uniforms.gradientBlur=i,a.uniforms.start=n||new Y(0,window.innerHeight/2),a.uniforms.end=o||new Y(600,window.innerHeight/2),a.uniforms.delta=new Y(30,30),a.uniforms.texSize=new Y(window.innerWidth,window.innerHeight),a.updateDelta(),a}return e.prototype.updateDelta=function(){this.uniforms.delta.x=0,this.uniforms.delta.y=0},Object.defineProperty(e.prototype,"blur",{get:function(){return this.uniforms.blur},set:function(t){this.uniforms.blur=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"gradientBlur",{get:function(){return this.uniforms.gradientBlur},set:function(t){this.uniforms.gradientBlur=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"start",{get:function(){return this.uniforms.start},set:function(t){this.uniforms.start=t,this.updateDelta()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"end",{get:function(){return this.uniforms.end},set:function(t){this.uniforms.end=t,this.updateDelta()},enumerable:!1,configurable:!0}),e}(k),Gm=function(r){$r(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.updateDelta=function(){var t=this.uniforms.end.x-this.uniforms.start.x,i=this.uniforms.end.y-this.uniforms.start.y,n=Math.sqrt(t*t+i*i);this.uniforms.delta.x=t/n,this.uniforms.delta.y=i/n},e}(Eu),km=function(r){$r(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.updateDelta=function(){var t=this.uniforms.end.x-this.uniforms.start.x,i=this.uniforms.end.y-this.uniforms.start.y,n=Math.sqrt(t*t+i*i);this.uniforms.delta.x=-i/n,this.uniforms.delta.y=t/n},e}(Eu);(function(r){$r(e,r);function e(t,i,n,o){t===void 0&&(t=100),i===void 0&&(i=600);var a=r.call(this)||this;return a.tiltShiftXFilter=new Gm(t,i,n,o),a.tiltShiftYFilter=new km(t,i,n,o),a}return e.prototype.apply=function(t,i,n,o){var a=t.getFilterTexture();this.tiltShiftXFilter.apply(t,i,a,1),this.tiltShiftYFilter.apply(t,a,n,o),t.returnFilterTexture(a)},Object.defineProperty(e.prototype,"blur",{get:function(){return this.tiltShiftXFilter.blur},set:function(t){this.tiltShiftXFilter.blur=this.tiltShiftYFilter.blur=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"gradientBlur",{get:function(){return this.tiltShiftXFilter.gradientBlur},set:function(t){this.tiltShiftXFilter.gradientBlur=this.tiltShiftYFilter.gradientBlur=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"start",{get:function(){return this.tiltShiftXFilter.start},set:function(t){this.tiltShiftXFilter.start=this.tiltShiftYFilter.start=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"end",{get:function(){return this.tiltShiftXFilter.end},set:function(t){this.tiltShiftXFilter.end=this.tiltShiftYFilter.end=t},enumerable:!1,configurable:!0}),e})(k);/*!
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
***************************************************************************** */var oo=function(r,e){return oo=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},oo(r,e)};function jm(r,e){oo(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Xm=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Hm=`varying vec2 vTextureCoord;

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
`;(function(r){jm(e,r);function e(t){var i=r.call(this,Xm,Hm)||this;return Object.assign(i,e.defaults,t),i}return Object.defineProperty(e.prototype,"offset",{get:function(){return this.uniforms.offset},set:function(t){this.uniforms.offset=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"radius",{get:function(){return this.uniforms.radius},set:function(t){this.uniforms.radius=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"angle",{get:function(){return this.uniforms.angle},set:function(t){this.uniforms.angle=t},enumerable:!1,configurable:!0}),e.defaults={radius:200,angle:4,padding:20,offset:new Y},e})(k);/*!
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
***************************************************************************** */var ao=function(r,e){return ao=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},ao(r,e)};function zm(r,e){ao(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}function Vm(r,e){var t={};for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&e.indexOf(i)<0&&(t[i]=r[i]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,i=Object.getOwnPropertySymbols(r);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(r,i[n])&&(t[i[n]]=r[i[n]]);return t}var $m=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Wm=`varying vec2 vTextureCoord;
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
`;(function(r){zm(e,r);function e(t){var i=this,n=Object.assign(e.defaults,t),o=n.maxKernelSize,a=Vm(n,["maxKernelSize"]);return i=r.call(this,$m,Wm.replace("${maxKernelSize}",o.toFixed(1)))||this,Object.assign(i,a),i}return Object.defineProperty(e.prototype,"center",{get:function(){return this.uniforms.uCenter},set:function(t){this.uniforms.uCenter=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"strength",{get:function(){return this.uniforms.uStrength},set:function(t){this.uniforms.uStrength=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"innerRadius",{get:function(){return this.uniforms.uInnerRadius},set:function(t){this.uniforms.uInnerRadius=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"radius",{get:function(){return this.uniforms.uRadius},set:function(t){(t<0||t===1/0)&&(t=-1),this.uniforms.uRadius=t},enumerable:!1,configurable:!0}),e.defaults={strength:.1,center:[0,0],innerRadius:0,radius:-1,maxKernelSize:32},e})(k);export{$i as A,qm as G,Km as O,qe as S,jt as W,Ym as f};
