import{i as t}from"./init.0b4a962a.js";function n(t,n){return null==t||null==n?NaN:t<n?-1:t>n?1:t>=n?0:NaN}function r(t,n){return null==t||null==n?NaN:n<t?-1:n>t?1:n>=t?0:NaN}function e(t){let e,a,o;function u(t,n,r=0,i=t.length){if(r<i){if(0!==e(n,n))return i;do{const e=r+i>>>1;a(t[e],n)<0?r=e+1:i=e}while(r<i)}return r}return 2!==t.length?(e=n,a=(r,e)=>n(t(r),e),o=(n,r)=>t(n)-r):(e=t===n||t===r?t:i,a=t,o=t),{left:u,center:function(t,n,r=0,e=t.length){const i=u(t,n,r,e-1);return i>r&&o(t[i-1],n)>-o(t[i],n)?i-1:i},right:function(t,n,r=0,i=t.length){if(r<i){if(0!==e(n,n))return i;do{const e=r+i>>>1;a(t[e],n)<=0?r=e+1:i=e}while(r<i)}return r}}}function i(){return 0}const a=e(n).right;e((function(t){return null===t?NaN:+t})).center;var o=Math.sqrt(50),u=Math.sqrt(10),s=Math.sqrt(2);function l(t,n,r){var e=(n-t)/Math.max(0,r),i=Math.floor(Math.log(e)/Math.LN10),a=e/Math.pow(10,i);return i>=0?(a>=o?10:a>=u?5:a>=s?2:1)*Math.pow(10,i):-Math.pow(10,-i)/(a>=o?10:a>=u?5:a>=s?2:1)}function h(t,n,r){var e=Math.abs(n-t)/Math.max(0,r),i=Math.pow(10,Math.floor(Math.log(e)/Math.LN10)),a=e/i;return a>=o?i*=10:a>=u?i*=5:a>=s&&(i*=2),n<t?-i:i}function c(t,n,r){t.prototype=n.prototype=r,r.constructor=t}function f(t,n){var r=Object.create(t.prototype);for(var e in n)r[e]=n[e];return r}function g(){}var p=1/.7,d="\\s*([+-]?\\d+)\\s*",m="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",y="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",b=/^#([0-9a-f]{3,8})$/,w=new RegExp(`^rgb\\(${d},${d},${d}\\)$`),v=new RegExp(`^rgb\\(${y},${y},${y}\\)$`),M=new RegExp(`^rgba\\(${d},${d},${d},${m}\\)$`),x=new RegExp(`^rgba\\(${y},${y},${y},${m}\\)$`),N=new RegExp(`^hsl\\(${m},${y},${y}\\)$`),$=new RegExp(`^hsla\\(${m},${y},${y},${m}\\)$`),k={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function A(){return this.rgb().formatHex()}function E(){return this.rgb().formatRgb()}function j(t){var n,r;return t=(t+"").trim().toLowerCase(),(n=b.exec(t))?(r=n[1].length,n=parseInt(n[1],16),6===r?S(n):3===r?new z(n>>8&15|n>>4&240,n>>4&15|240&n,(15&n)<<4|15&n,1):8===r?q(n>>24&255,n>>16&255,n>>8&255,(255&n)/255):4===r?q(n>>12&15|n>>8&240,n>>8&15|n>>4&240,n>>4&15|240&n,((15&n)<<4|15&n)/255):null):(n=w.exec(t))?new z(n[1],n[2],n[3],1):(n=v.exec(t))?new z(255*n[1]/100,255*n[2]/100,255*n[3]/100,1):(n=M.exec(t))?q(n[1],n[2],n[3],n[4]):(n=x.exec(t))?q(255*n[1]/100,255*n[2]/100,255*n[3]/100,n[4]):(n=N.exec(t))?I(n[1],n[2]/100,n[3]/100,1):(n=$.exec(t))?I(n[1],n[2]/100,n[3]/100,n[4]):k.hasOwnProperty(t)?S(k[t]):"transparent"===t?new z(NaN,NaN,NaN,0):null}function S(t){return new z(t>>16&255,t>>8&255,255&t,1)}function q(t,n,r,e){return e<=0&&(t=n=r=NaN),new z(t,n,r,e)}function R(t){return t instanceof g||(t=j(t)),t?new z((t=t.rgb()).r,t.g,t.b,t.opacity):new z}function H(t,n,r,e){return 1===arguments.length?R(t):new z(t,n,r,null==e?1:e)}function z(t,n,r,e){this.r=+t,this.g=+n,this.b=+r,this.opacity=+e}function L(){return`#${F(this.r)}${F(this.g)}${F(this.b)}`}function O(){const t=P(this.opacity);return`${1===t?"rgb(":"rgba("}${C(this.r)}, ${C(this.g)}, ${C(this.b)}${1===t?")":`, ${t})`}`}function P(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function C(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function F(t){return((t=C(t))<16?"0":"")+t.toString(16)}function I(t,n,r,e){return e<=0?t=n=r=NaN:r<=0||r>=1?t=n=NaN:n<=0&&(t=NaN),new T(t,n,r,e)}function D(t){if(t instanceof T)return new T(t.h,t.s,t.l,t.opacity);if(t instanceof g||(t=j(t)),!t)return new T;if(t instanceof T)return t;var n=(t=t.rgb()).r/255,r=t.g/255,e=t.b/255,i=Math.min(n,r,e),a=Math.max(n,r,e),o=NaN,u=a-i,s=(a+i)/2;return u?(o=n===a?(r-e)/u+6*(r<e):r===a?(e-n)/u+2:(n-r)/u+4,u/=s<.5?a+i:2-a-i,o*=60):u=s>0&&s<1?0:o,new T(o,u,s,t.opacity)}function T(t,n,r,e){this.h=+t,this.s=+n,this.l=+r,this.opacity=+e}function V(t){return(t=(t||0)%360)<0?t+360:t}function X(t){return Math.max(0,Math.min(1,t||0))}function B(t,n,r){return 255*(t<60?n+(r-n)*t/60:t<180?r:t<240?n+(r-n)*(240-t)/60:n)}c(g,j,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:A,formatHex:A,formatHex8:function(){return this.rgb().formatHex8()},formatHsl:function(){return D(this).formatHsl()},formatRgb:E,toString:E}),c(z,H,f(g,{brighter(t){return t=null==t?p:Math.pow(p,t),new z(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=null==t?.7:Math.pow(.7,t),new z(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new z(C(this.r),C(this.g),C(this.b),P(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:L,formatHex:L,formatHex8:function(){return`#${F(this.r)}${F(this.g)}${F(this.b)}${F(255*(isNaN(this.opacity)?1:this.opacity))}`},formatRgb:O,toString:O})),c(T,(function(t,n,r,e){return 1===arguments.length?D(t):new T(t,n,r,null==e?1:e)}),f(g,{brighter(t){return t=null==t?p:Math.pow(p,t),new T(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=null==t?.7:Math.pow(.7,t),new T(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+360*(this.h<0),n=isNaN(t)||isNaN(this.s)?0:this.s,r=this.l,e=r+(r<.5?r:1-r)*n,i=2*r-e;return new z(B(t>=240?t-240:t+120,i,e),B(t,i,e),B(t<120?t+240:t-120,i,e),this.opacity)},clamp(){return new T(V(this.h),X(this.s),X(this.l),P(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=P(this.opacity);return`${1===t?"hsl(":"hsla("}${V(this.h)}, ${100*X(this.s)}%, ${100*X(this.l)}%${1===t?")":`, ${t})`}`}}));var G=t=>()=>t;function U(t){return 1==(t=+t)?Y:function(n,r){return r-n?function(t,n,r){return t=Math.pow(t,r),n=Math.pow(n,r)-t,r=1/r,function(e){return Math.pow(t+e*n,r)}}(n,r,t):G(isNaN(n)?r:n)}}function Y(t,n){var r=n-t;return r?function(t,n){return function(r){return t+r*n}}(t,r):G(isNaN(t)?n:t)}var Z=function t(n){var r=U(n);function e(t,n){var e=r((t=H(t)).r,(n=H(n)).r),i=r(t.g,n.g),a=r(t.b,n.b),o=Y(t.opacity,n.opacity);return function(n){return t.r=e(n),t.g=i(n),t.b=a(n),t.opacity=o(n),t+""}}return e.gamma=t,e}(1);function J(t,n){n||(n=[]);var r,e=t?Math.min(n.length,t.length):0,i=n.slice();return function(a){for(r=0;r<e;++r)i[r]=t[r]*(1-a)+n[r]*a;return i}}function K(t,n){var r,e=n?n.length:0,i=t?Math.min(e,t.length):0,a=new Array(i),o=new Array(e);for(r=0;r<i;++r)a[r]=et(t[r],n[r]);for(;r<e;++r)o[r]=n[r];return function(t){for(r=0;r<i;++r)o[r]=a[r](t);return o}}function Q(t,n){var r=new Date;return t=+t,n=+n,function(e){return r.setTime(t*(1-e)+n*e),r}}function W(t,n){return t=+t,n=+n,function(r){return t*(1-r)+n*r}}function _(t,n){var r,e={},i={};for(r in null!==t&&"object"==typeof t||(t={}),null!==n&&"object"==typeof n||(n={}),n)r in t?e[r]=et(t[r],n[r]):i[r]=n[r];return function(t){for(r in e)i[r]=e[r](t);return i}}var tt=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,nt=new RegExp(tt.source,"g");function rt(t,n){var r,e,i,a=tt.lastIndex=nt.lastIndex=0,o=-1,u=[],s=[];for(t+="",n+="";(r=tt.exec(t))&&(e=nt.exec(n));)(i=e.index)>a&&(i=n.slice(a,i),u[o]?u[o]+=i:u[++o]=i),(r=r[0])===(e=e[0])?u[o]?u[o]+=e:u[++o]=e:(u[++o]=null,s.push({i:o,x:W(r,e)})),a=nt.lastIndex;return a<n.length&&(i=n.slice(a),u[o]?u[o]+=i:u[++o]=i),u.length<2?s[0]?function(t){return function(n){return t(n)+""}}(s[0].x):function(t){return function(){return t}}(n):(n=s.length,function(t){for(var r,e=0;e<n;++e)u[(r=s[e]).i]=r.x(t);return u.join("")})}function et(t,n){var r,e,i=typeof n;return null==n||"boolean"===i?G(n):("number"===i?W:"string"===i?(r=j(n))?(n=r,Z):rt:n instanceof j?Z:n instanceof Date?Q:(e=n,!ArrayBuffer.isView(e)||e instanceof DataView?Array.isArray(n)?K:"function"!=typeof n.valueOf&&"function"!=typeof n.toString||isNaN(n)?_:W:J))(t,n)}function it(t,n){return t=+t,n=+n,function(r){return Math.round(t*(1-r)+n*r)}}function at(t){return+t}var ot=[0,1];function ut(t){return t}function st(t,n){return(n-=t=+t)?function(r){return(r-t)/n}:(r=isNaN(n)?NaN:.5,function(){return r});var r}function lt(t,n,r){var e=t[0],i=t[1],a=n[0],o=n[1];return i<e?(e=st(i,e),a=r(o,a)):(e=st(e,i),a=r(a,o)),function(t){return a(e(t))}}function ht(t,n,r){var e=Math.min(t.length,n.length)-1,i=new Array(e),o=new Array(e),u=-1;for(t[e]<t[0]&&(t=t.slice().reverse(),n=n.slice().reverse());++u<e;)i[u]=st(t[u],t[u+1]),o[u]=r(n[u],n[u+1]);return function(n){var r=a(t,n,1,e)-1;return o[r](i[r](n))}}function ct(t,n){return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())}function ft(){var t,n,r,e,i,a,o=ot,u=ot,s=et,l=ut;function h(){var t,n,r,s=Math.min(o.length,u.length);return l!==ut&&(t=o[0],n=o[s-1],t>n&&(r=t,t=n,n=r),l=function(r){return Math.max(t,Math.min(n,r))}),e=s>2?ht:lt,i=a=null,c}function c(n){return null==n||isNaN(n=+n)?r:(i||(i=e(o.map(t),u,s)))(t(l(n)))}return c.invert=function(r){return l(n((a||(a=e(u,o.map(t),W)))(r)))},c.domain=function(t){return arguments.length?(o=Array.from(t,at),h()):o.slice()},c.range=function(t){return arguments.length?(u=Array.from(t),h()):u.slice()},c.rangeRound=function(t){return u=Array.from(t),s=it,h()},c.clamp=function(t){return arguments.length?(l=!!t||ut,h()):l!==ut},c.interpolate=function(t){return arguments.length?(s=t,h()):s},c.unknown=function(t){return arguments.length?(r=t,c):r},function(r,e){return t=r,n=e,h()}}function gt(){return ft()(ut,ut)}function pt(t,n){if((r=(t=n?t.toExponential(n-1):t.toExponential()).indexOf("e"))<0)return null;var r,e=t.slice(0,r);return[e.length>1?e[0]+e.slice(2):e,+t.slice(r+1)]}function dt(t){return(t=pt(Math.abs(t)))?t[1]:NaN}var mt,yt=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function bt(t){if(!(n=yt.exec(t)))throw new Error("invalid format: "+t);var n;return new wt({fill:n[1],align:n[2],sign:n[3],symbol:n[4],zero:n[5],width:n[6],comma:n[7],precision:n[8]&&n[8].slice(1),trim:n[9],type:n[10]})}function wt(t){this.fill=void 0===t.fill?" ":t.fill+"",this.align=void 0===t.align?">":t.align+"",this.sign=void 0===t.sign?"-":t.sign+"",this.symbol=void 0===t.symbol?"":t.symbol+"",this.zero=!!t.zero,this.width=void 0===t.width?void 0:+t.width,this.comma=!!t.comma,this.precision=void 0===t.precision?void 0:+t.precision,this.trim=!!t.trim,this.type=void 0===t.type?"":t.type+""}function vt(t,n){var r=pt(t,n);if(!r)return t+"";var e=r[0],i=r[1];return i<0?"0."+new Array(-i).join("0")+e:e.length>i+1?e.slice(0,i+1)+"."+e.slice(i+1):e+new Array(i-e.length+2).join("0")}bt.prototype=wt.prototype,wt.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type};var Mt={"%":(t,n)=>(100*t).toFixed(n),b:t=>Math.round(t).toString(2),c:t=>t+"",d:function(t){return Math.abs(t=Math.round(t))>=1e21?t.toLocaleString("en").replace(/,/g,""):t.toString(10)},e:(t,n)=>t.toExponential(n),f:(t,n)=>t.toFixed(n),g:(t,n)=>t.toPrecision(n),o:t=>Math.round(t).toString(8),p:(t,n)=>vt(100*t,n),r:vt,s:function(t,n){var r=pt(t,n);if(!r)return t+"";var e=r[0],i=r[1],a=i-(mt=3*Math.max(-8,Math.min(8,Math.floor(i/3))))+1,o=e.length;return a===o?e:a>o?e+new Array(a-o+1).join("0"):a>0?e.slice(0,a)+"."+e.slice(a):"0."+new Array(1-a).join("0")+pt(t,Math.max(0,n+a-1))[0]},X:t=>Math.round(t).toString(16).toUpperCase(),x:t=>Math.round(t).toString(16)};function xt(t){return t}var Nt,$t,kt,At=Array.prototype.map,Et=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function jt(t){var n,r,e=void 0===t.grouping||void 0===t.thousands?xt:(n=At.call(t.grouping,Number),r=t.thousands+"",function(t,e){for(var i=t.length,a=[],o=0,u=n[0],s=0;i>0&&u>0&&(s+u+1>e&&(u=Math.max(1,e-s)),a.push(t.substring(i-=u,i+u)),!((s+=u+1)>e));)u=n[o=(o+1)%n.length];return a.reverse().join(r)}),i=void 0===t.currency?"":t.currency[0]+"",a=void 0===t.currency?"":t.currency[1]+"",o=void 0===t.decimal?".":t.decimal+"",u=void 0===t.numerals?xt:function(t){return function(n){return n.replace(/[0-9]/g,(function(n){return t[+n]}))}}(At.call(t.numerals,String)),s=void 0===t.percent?"%":t.percent+"",l=void 0===t.minus?"−":t.minus+"",h=void 0===t.nan?"NaN":t.nan+"";function c(t){var n=(t=bt(t)).fill,r=t.align,c=t.sign,f=t.symbol,g=t.zero,p=t.width,d=t.comma,m=t.precision,y=t.trim,b=t.type;"n"===b?(d=!0,b="g"):Mt[b]||(void 0===m&&(m=12),y=!0,b="g"),(g||"0"===n&&"="===r)&&(g=!0,n="0",r="=");var w="$"===f?i:"#"===f&&/[boxX]/.test(b)?"0"+b.toLowerCase():"",v="$"===f?a:/[%p]/.test(b)?s:"",M=Mt[b],x=/[defgprs%]/.test(b);function N(t){var i,a,s,f=w,N=v;if("c"===b)N=M(t)+N,t="";else{var $=(t=+t)<0||1/t<0;if(t=isNaN(t)?h:M(Math.abs(t),m),y&&(t=function(t){t:for(var n,r=t.length,e=1,i=-1;e<r;++e)switch(t[e]){case".":i=n=e;break;case"0":0===i&&(i=e),n=e;break;default:if(!+t[e])break t;i>0&&(i=0)}return i>0?t.slice(0,i)+t.slice(n+1):t}(t)),$&&0==+t&&"+"!==c&&($=!1),f=($?"("===c?c:l:"-"===c||"("===c?"":c)+f,N=("s"===b?Et[8+mt/3]:"")+N+($&&"("===c?")":""),x)for(i=-1,a=t.length;++i<a;)if(48>(s=t.charCodeAt(i))||s>57){N=(46===s?o+t.slice(i+1):t.slice(i))+N,t=t.slice(0,i);break}}d&&!g&&(t=e(t,1/0));var k=f.length+t.length+N.length,A=k<p?new Array(p-k+1).join(n):"";switch(d&&g&&(t=e(A+t,A.length?p-N.length:1/0),A=""),r){case"<":t=f+t+N+A;break;case"=":t=f+A+t+N;break;case"^":t=A.slice(0,k=A.length>>1)+f+t+N+A.slice(k);break;default:t=A+f+t+N}return u(t)}return m=void 0===m?6:/[gprs]/.test(b)?Math.max(1,Math.min(21,m)):Math.max(0,Math.min(20,m)),N.toString=function(){return t+""},N}return{format:c,formatPrefix:function(t,n){var r=c(((t=bt(t)).type="f",t)),e=3*Math.max(-8,Math.min(8,Math.floor(dt(n)/3))),i=Math.pow(10,-e),a=Et[8+e/3];return function(t){return r(i*t)+a}}}}function St(t,n,r,e){var i,a=h(t,n,r);switch((e=bt(null==e?",f":e)).type){case"s":var o=Math.max(Math.abs(t),Math.abs(n));return null!=e.precision||isNaN(i=function(t,n){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(dt(n)/3)))-dt(Math.abs(t)))}(a,o))||(e.precision=i),kt(e,o);case"":case"e":case"g":case"p":case"r":null!=e.precision||isNaN(i=function(t,n){return t=Math.abs(t),n=Math.abs(n)-t,Math.max(0,dt(n)-dt(t))+1}(a,Math.max(Math.abs(t),Math.abs(n))))||(e.precision=i-("e"===e.type));break;case"f":case"%":null!=e.precision||isNaN(i=function(t){return Math.max(0,-dt(Math.abs(t)))}(a))||(e.precision=i-2*("%"===e.type))}return $t(e)}function qt(t){var n=t.domain;return t.ticks=function(t){var r=n();return function(t,n,r){var e,i,a,o,u=-1;if(r=+r,(t=+t)==(n=+n)&&r>0)return[t];if((e=n<t)&&(i=t,t=n,n=i),0===(o=l(t,n,r))||!isFinite(o))return[];if(o>0){let r=Math.round(t/o),e=Math.round(n/o);for(r*o<t&&++r,e*o>n&&--e,a=new Array(i=e-r+1);++u<i;)a[u]=(r+u)*o}else{o=-o;let r=Math.round(t*o),e=Math.round(n*o);for(r/o<t&&++r,e/o>n&&--e,a=new Array(i=e-r+1);++u<i;)a[u]=(r+u)/o}return e&&a.reverse(),a}(r[0],r[r.length-1],null==t?10:t)},t.tickFormat=function(t,r){var e=n();return St(e[0],e[e.length-1],null==t?10:t,r)},t.nice=function(r){null==r&&(r=10);var e,i,a=n(),o=0,u=a.length-1,s=a[o],h=a[u],c=10;for(h<s&&(i=s,s=h,h=i,i=o,o=u,u=i);c-- >0;){if((i=l(s,h,r))===e)return a[o]=s,a[u]=h,n(a);if(i>0)s=Math.floor(s/i)*i,h=Math.ceil(h/i)*i;else{if(!(i<0))break;s=Math.ceil(s*i)/i,h=Math.floor(h*i)/i}e=i}return t},t}function Rt(){var n=gt();return n.copy=function(){return ct(n,Rt())},t.apply(n,arguments),qt(n)}Nt=jt({thousands:",",grouping:[3],currency:["$",""]}),$t=Nt.format,kt=Nt.formatPrefix;export{ct as a,e as b,gt as c,Rt as l,h as t};