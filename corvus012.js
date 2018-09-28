// N.b. 10 lines up from where the console lists is where it means.
// I.e. if it says line 610, it means line 600.
function seed() {
	// Do nothing!
}
//00.1-d3.v3.min.js:
d3=function(){function n(n){return null!=n&&!isNaN(n)}function t(n){return n.length}function e(n){for(var t=1;n*t%1;)t*=10;return t}function r(n,t){try{for(var e in t)Object.defineProperty(n.prototype,e,{value:t[e],enumerable:!1})}catch(r){n.prototype=t}}function i(){}function u(){}function a(n,t,e){return function(){var r=e.apply(t,arguments);return r===t?n:r}}function o(n,t){if(t in n)return t;t=t.charAt(0).toUpperCase()+t.substring(1);for(var e=0,r=Na.length;r>e;++e){var i=Na[e]+t;if(i in n)return i}}function c(n){for(var t=-1,e=n.length,r=[];++t<e;)r.push(n[t]);return r}function l(n){return Array.prototype.slice.call(n)}function s(){}function f(){}function h(n){function t(){for(var t,r=e,i=-1,u=r.length;++i<u;)(t=r[i].on)&&t.apply(this,arguments);return n}var e=[],r=new i;return t.on=function(t,i){var u,a=r.get(t);return arguments.length<2?a&&a.on:(a&&(a.on=null,e=e.slice(0,u=e.indexOf(a)).concat(e.slice(u+1)),r.remove(t)),i&&e.push(r.set(t,{on:i})),n)},t}function g(){da.event.preventDefault()}function p(){for(var n,t=da.event;n=t.sourceEvent;)t=n;return t}function d(n){for(var t=new f,e=0,r=arguments.length;++e<r;)t[arguments[e]]=h(t);return t.of=function(e,r){return function(i){try{var u=i.sourceEvent=da.event;i.target=n,da.event=i,t[i.type].apply(e,r)}finally{da.event=u}}},t}function m(n){return za(n,Fa),n}function v(n){return"function"==typeof n?n:function(){return Da(n,this)}}function y(n){return"function"==typeof n?n:function(){return ja(n,this)}}function M(n,t){function e(){this.removeAttribute(n)}function r(){this.removeAttributeNS(n.space,n.local)}function i(){this.setAttribute(n,t)}function u(){this.setAttributeNS(n.space,n.local,t)}function a(){var e=t.apply(this,arguments);null==e?this.removeAttribute(n):this.setAttribute(n,e)}function o(){var e=t.apply(this,arguments);null==e?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,e)}return n=da.ns.qualify(n),null==t?n.local?r:e:"function"==typeof t?n.local?o:a:n.local?u:i}function x(n){return n.trim().replace(/\s+/g," ")}function b(n){return new RegExp("(?:^|\\s+)"+da.requote(n)+"(?:\\s+|$)","g")}function _(n,t){function e(){for(var e=-1;++e<i;)n[e](this,t)}function r(){for(var e=-1,r=t.apply(this,arguments);++e<i;)n[e](this,r)}n=n.trim().split(/\s+/).map(w);var i=n.length;return"function"==typeof t?r:e}function w(n){var t=b(n);return function(e,r){if(i=e.classList)return r?i.add(n):i.remove(n);var i=e.getAttribute("class")||"";r?(t.lastIndex=0,t.test(i)||e.setAttribute("class",x(i+" "+n))):e.setAttribute("class",x(i.replace(t," ")))}}function S(n,t,e){function r(){this.style.removeProperty(n)}function i(){this.style.setProperty(n,t,e)}function u(){var r=t.apply(this,arguments);null==r?this.style.removeProperty(n):this.style.setProperty(n,r,e)}return null==t?r:"function"==typeof t?u:i}function E(n,t){function e(){delete this[n]}function r(){this[n]=t}function i(){var e=t.apply(this,arguments);null==e?delete this[n]:this[n]=e}return null==t?e:"function"==typeof t?i:r}function k(n){return"function"==typeof n?n:(n=da.ns.qualify(n)).local?function(){return ma.createElementNS(n.space,n.local)}:function(){return ma.createElementNS(this.namespaceURI,n)}}function A(n){return{__data__:n}}function N(n){return function(){return Ha(this,n)}}function q(n){return arguments.length||(n=da.ascending),function(t,e){return!t-!e||n(t.__data__,e.__data__)}}function T(n,t){for(var e=0,r=n.length;r>e;e++)for(var i,u=n[e],a=0,o=u.length;o>a;a++)(i=u[a])&&t(i,a,e);return n}function C(n){return za(n,Oa),n}function z(n){var t,e;return function(r,i,u){var a,o=n[u].update,c=o.length;for(u!=e&&(e=u,t=0),i>=t&&(t=i+1);!(a=o[t])&&++t<c;);return a}}function D(n,t,e){function r(){var t=this[a];t&&(this.removeEventListener(n,t,t.$),delete this[a])}function i(){var i=c(t,qa(arguments));r.call(this),this.addEventListener(n,this[a]=i,i.$=e),i._=t}function u(){var t,e=new RegExp("^__on([^.]+)"+da.requote(n)+"$");for(var r in this)if(t=r.match(e)){var i=this[r];this.removeEventListener(t[1],i,i.$),delete this[r]}}var a="__on"+n,o=n.indexOf("."),c=j;o>0&&(n=n.substring(0,o));var l=Ra.get(n);return l&&(n=l,c=L),o?t?i:r:t?s:u}function j(n,t){return function(e){var r=da.event;da.event=e,t[0]=this.__data__;try{n.apply(this,t)}finally{da.event=r}}}function L(n,t){var e=j(n,t);return function(n){var t=this,r=n.relatedTarget;r&&(r===t||8&r.compareDocumentPosition(t))||e.call(t,n)}}function H(){var n=".dragsuppress-"+ ++Ia,t="touchmove"+n,e="selectstart"+n,r="dragstart"+n,i="click"+n,u=da.select(ya).on(t,g).on(e,g).on(r,g),a=va.style,o=a[Ua];return a[Ua]="none",function(t){function e(){u.on(i,null)}u.on(n,null),a[Ua]=o,t&&(u.on(i,function(){g(),e()},!0),setTimeout(e,0))}}function F(n,t){var e=n.ownerSVGElement||n;if(e.createSVGPoint){var r=e.createSVGPoint();if(0>Va&&(ya.scrollX||ya.scrollY)){e=da.select("body").append("svg").style({position:"absolute",top:0,left:0,margin:0,padding:0,border:"none"},"important");var i=e[0][0].getScreenCTM();Va=!(i.f||i.e),e.remove()}return Va?(r.x=t.pageX,r.y=t.pageY):(r.x=t.clientX,r.y=t.clientY),r=r.matrixTransform(n.getScreenCTM().inverse()),[r.x,r.y]}var u=n.getBoundingClientRect();return[t.clientX-u.left-n.clientLeft,t.clientY-u.top-n.clientTop]}function P(){}function O(n,t,e){return new Y(n,t,e)}function Y(n,t,e){this.h=n,this.s=t,this.l=e}function R(n,t,e){function r(n){return n>360?n-=360:0>n&&(n+=360),60>n?u+(a-u)*n/60:180>n?a:240>n?u+(a-u)*(240-n)/60:u}function i(n){return Math.round(255*r(n))}var u,a;return n=isNaN(n)?0:(n%=360)<0?n+360:n,t=isNaN(t)?0:0>t?0:t>1?1:t,e=0>e?0:e>1?1:e,a=.5>=e?e*(1+t):e+t-e*t,u=2*e-a,it(i(n+120),i(n),i(n-120))}function U(n){return n>0?1:0>n?-1:0}function I(n){return n>1?0:-1>n?Wa:Math.acos(n)}function V(n){return n>1?Wa/2:-1>n?-Wa/2:Math.asin(n)}function X(n){return(Math.exp(n)-Math.exp(-n))/2}function Z(n){return(Math.exp(n)+Math.exp(-n))/2}function B(n){return(n=Math.sin(n/2))*n}function $(n,t,e){return new W(n,t,e)}function W(n,t,e){this.h=n,this.c=t,this.l=e}function J(n,t,e){return isNaN(n)&&(n=0),isNaN(t)&&(t=0),G(e,Math.cos(n*=Ka)*t,Math.sin(n)*t)}function G(n,t,e){return new K(n,t,e)}function K(n,t,e){this.l=n,this.a=t,this.b=e}function Q(n,t,e){var r=(n+16)/116,i=r+t/500,u=r-e/200;return i=tt(i)*eo,r=tt(r)*ro,u=tt(u)*io,it(rt(3.2404542*i-1.5371385*r-.4985314*u),rt(-.969266*i+1.8760108*r+.041556*u),rt(.0556434*i-.2040259*r+1.0572252*u))}function nt(n,t,e){return n>0?$(Math.atan2(e,t)*Qa,Math.sqrt(t*t+e*e),n):$(0/0,0/0,n)}function tt(n){return n>.206893034?n*n*n:(n-4/29)/7.787037}function et(n){return n>.008856?Math.pow(n,1/3):7.787037*n+4/29}function rt(n){return Math.round(255*(.00304>=n?12.92*n:1.055*Math.pow(n,1/2.4)-.055))}function it(n,t,e){return new ut(n,t,e)}function ut(n,t,e){this.r=n,this.g=t,this.b=e}function at(n){return 16>n?"0"+Math.max(0,n).toString(16):Math.min(255,n).toString(16)}function ot(n,t,e){var r,i,u,a=0,o=0,c=0;if(r=/([a-z]+)\((.*)\)/i.exec(n))switch(i=r[2].split(","),r[1]){case"hsl":return e(parseFloat(i[0]),parseFloat(i[1])/100,parseFloat(i[2])/100);case"rgb":return t(ft(i[0]),ft(i[1]),ft(i[2]))}return(u=oo.get(n))?t(u.r,u.g,u.b):(null!=n&&"#"===n.charAt(0)&&(4===n.length?(a=n.charAt(1),a+=a,o=n.charAt(2),o+=o,c=n.charAt(3),c+=c):7===n.length&&(a=n.substring(1,3),o=n.substring(3,5),c=n.substring(5,7)),a=parseInt(a,16),o=parseInt(o,16),c=parseInt(c,16)),t(a,o,c))}function ct(n,t,e){var r,i,u=Math.min(n/=255,t/=255,e/=255),a=Math.max(n,t,e),o=a-u,c=(a+u)/2;return o?(i=.5>c?o/(a+u):o/(2-a-u),r=n==a?(t-e)/o+(e>t?6:0):t==a?(e-n)/o+2:(n-t)/o+4,r*=60):(r=0/0,i=c>0&&1>c?0:r),O(r,i,c)}function lt(n,t,e){n=st(n),t=st(t),e=st(e);var r=et((.4124564*n+.3575761*t+.1804375*e)/eo),i=et((.2126729*n+.7151522*t+.072175*e)/ro),u=et((.0193339*n+.119192*t+.9503041*e)/io);return G(116*i-16,500*(r-i),200*(i-u))}function st(n){return(n/=255)<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)}function ft(n){var t=parseFloat(n);return"%"===n.charAt(n.length-1)?Math.round(2.55*t):t}function ht(n){return"function"==typeof n?n:function(){return n}}function gt(n){return n}function pt(n){return function(t,e,r){return 2===arguments.length&&"function"==typeof e&&(r=e,e=null),dt(t,e,n,r)}}function dt(n,t,e,r){function i(){var n,t=c.status;if(!t&&c.responseText||t>=200&&300>t||304===t){try{n=e.call(u,c)}catch(r){return a.error.call(u,r),void 0}a.load.call(u,n)}else a.error.call(u,c)}var u={},a=da.dispatch("progress","load","error"),o={},c=new XMLHttpRequest,l=null;return!ya.XDomainRequest||"withCredentials"in c||!/^(http(s)?:)?\/\//.test(n)||(c=new XDomainRequest),"onload"in c?c.onload=c.onerror=i:c.onreadystatechange=function(){c.readyState>3&&i()},c.onprogress=function(n){var t=da.event;da.event=n;try{a.progress.call(u,c)}finally{da.event=t}},u.header=function(n,t){return n=(n+"").toLowerCase(),arguments.length<2?o[n]:(null==t?delete o[n]:o[n]=t+"",u)},u.mimeType=function(n){return arguments.length?(t=null==n?null:n+"",u):t},u.responseType=function(n){return arguments.length?(l=n,u):l},u.response=function(n){return e=n,u},["get","post"].forEach(function(n){u[n]=function(){return u.send.apply(u,[n].concat(qa(arguments)))}}),u.send=function(e,r,i){if(2===arguments.length&&"function"==typeof r&&(i=r,r=null),c.open(e,n,!0),null==t||"accept"in o||(o.accept=t+",*/*"),c.setRequestHeader)for(var a in o)c.setRequestHeader(a,o[a]);return null!=t&&c.overrideMimeType&&c.overrideMimeType(t),null!=l&&(c.responseType=l),null!=i&&u.on("error",i).on("load",function(n){i(null,n)}),c.send(null==r?null:r),u},u.abort=function(){return c.abort(),u},da.rebind(u,a,"on"),null==r?u:u.get(mt(r))}function mt(n){return 1===n.length?function(t,e){n(null==t?e:null)}:n}function vt(){var n=yt(),t=Mt()-n;t>24?(isFinite(t)&&(clearTimeout(fo),fo=setTimeout(vt,t)),so=0):(so=1,ho(vt))}function yt(){for(var n=Date.now(),t=co;t;)n>=t.time&&(t.flush=t.callback(n-t.time)),t=t.next;return n}function Mt(){for(var n,t=co,e=1/0;t;)t.flush?t=n?n.next=t.next:co=t.next:(t.time<e&&(e=t.time),t=(n=t).next);return lo=n,e}function xt(n,t){var e=Math.pow(10,3*Math.abs(8-t));return{scale:t>8?function(n){return n/e}:function(n){return n*e},symbol:n}}function bt(n,t){return t-(n?Math.ceil(Math.log(n)/Math.LN10):1)}function _t(n){return n+""}function wt(){}function St(n,t,e){var r=e.s=n+t,i=r-n,u=r-i;e.t=n-u+(t-i)}function Et(n,t){n&&Eo.hasOwnProperty(n.type)&&Eo[n.type](n,t)}function kt(n,t,e){var r,i=-1,u=n.length-e;for(t.lineStart();++i<u;)r=n[i],t.point(r[0],r[1]);t.lineEnd()}function At(n,t){var e=-1,r=n.length;for(t.polygonStart();++e<r;)kt(n[e],t,1);t.polygonEnd()}function Nt(){function n(n,t){n*=Ka,t=t*Ka/2+Wa/4;var e=n-r,a=Math.cos(t),o=Math.sin(t),c=u*o,l=i*a+c*Math.cos(e),s=c*Math.sin(e);Ao.add(Math.atan2(s,l)),r=n,i=a,u=o}var t,e,r,i,u;No.point=function(a,o){No.point=n,r=(t=a)*Ka,i=Math.cos(o=(e=o)*Ka/2+Wa/4),u=Math.sin(o)},No.lineEnd=function(){n(t,e)}}function qt(n){var t=n[0],e=n[1],r=Math.cos(e);return[r*Math.cos(t),r*Math.sin(t),Math.sin(e)]}function Tt(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function Ct(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function zt(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function Dt(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function jt(n){var t=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=t,n[1]/=t,n[2]/=t}function Lt(n){return[Math.atan2(n[1],n[0]),V(n[2])]}function Ht(n,t){return Math.abs(n[0]-t[0])<Ja&&Math.abs(n[1]-t[1])<Ja}function Ft(n,t){n*=Ka;var e=Math.cos(t*=Ka);Pt(e*Math.cos(n),e*Math.sin(n),Math.sin(t))}function Pt(n,t,e){++qo,Co+=(n-Co)/qo,zo+=(t-zo)/qo,Do+=(e-Do)/qo}function Ot(){function n(n,i){n*=Ka;var u=Math.cos(i*=Ka),a=u*Math.cos(n),o=u*Math.sin(n),c=Math.sin(i),l=Math.atan2(Math.sqrt((l=e*c-r*o)*l+(l=r*a-t*c)*l+(l=t*o-e*a)*l),t*a+e*o+r*c);To+=l,jo+=l*(t+(t=a)),Lo+=l*(e+(e=o)),Ho+=l*(r+(r=c)),Pt(t,e,r)}var t,e,r;Yo.point=function(i,u){i*=Ka;var a=Math.cos(u*=Ka);t=a*Math.cos(i),e=a*Math.sin(i),r=Math.sin(u),Yo.point=n,Pt(t,e,r)}}function Yt(){Yo.point=Ft}function Rt(){function n(n,t){n*=Ka;var e=Math.cos(t*=Ka),a=e*Math.cos(n),o=e*Math.sin(n),c=Math.sin(t),l=i*c-u*o,s=u*a-r*c,f=r*o-i*a,h=Math.sqrt(l*l+s*s+f*f),g=r*a+i*o+u*c,p=h&&-I(g)/h,d=Math.atan2(h,g);Fo+=p*l,Po+=p*s,Oo+=p*f,To+=d,jo+=d*(r+(r=a)),Lo+=d*(i+(i=o)),Ho+=d*(u+(u=c)),Pt(r,i,u)}var t,e,r,i,u;Yo.point=function(a,o){t=a,e=o,Yo.point=n,a*=Ka;var c=Math.cos(o*=Ka);r=c*Math.cos(a),i=c*Math.sin(a),u=Math.sin(o),Pt(r,i,u)},Yo.lineEnd=function(){n(t,e),Yo.lineEnd=Yt,Yo.point=Ft}}function Ut(){return!0}function It(n,t,e,r,i){var u=[],a=[];if(n.forEach(function(n){if(!((t=n.length-1)<=0)){var t,e=n[0],r=n[t];if(Ht(e,r)){i.lineStart();for(var o=0;t>o;++o)i.point((e=n[o])[0],e[1]);return i.lineEnd(),void 0}var c={point:e,points:n,other:null,visited:!1,entry:!0,subject:!0},l={point:e,points:[e],other:c,visited:!1,entry:!1,subject:!1};c.other=l,u.push(c),a.push(l),c={point:r,points:[r],other:null,visited:!1,entry:!1,subject:!0},l={point:r,points:[r],other:c,visited:!1,entry:!0,subject:!1},c.other=l,u.push(c),a.push(l)}}),a.sort(t),Vt(u),Vt(a),u.length){if(e)for(var o=1,c=!e(a[0].point),l=a.length;l>o;++o)a[o].entry=c=!c;for(var s,f,h,g=u[0];;){for(s=g;s.visited;)if((s=s.next)===g)return;f=s.points,i.lineStart();do{if(s.visited=s.other.visited=!0,s.entry){if(s.subject)for(var o=0;o<f.length;o++)i.point((h=f[o])[0],h[1]);else r(s.point,s.next.point,1,i);s=s.next}else{if(s.subject){f=s.prev.points;for(var o=f.length;--o>=0;)i.point((h=f[o])[0],h[1])}else r(s.point,s.prev.point,-1,i);s=s.prev}s=s.other,f=s.points}while(!s.visited);i.lineEnd()}}}function Vt(n){if(t=n.length){for(var t,e,r=0,i=n[0];++r<t;)i.next=e=n[r],e.prev=i,i=e;i.next=e=n[0],e.prev=i}}function Xt(n,t,e,r){return function(i){function u(t,e){n(t,e)&&i.point(t,e)}function a(n,t){d.point(n,t)}function o(){m.point=a,d.lineStart()}function c(){m.point=u,d.lineEnd()}function l(n,t){y.point(n,t),p.push([n,t])}function s(){y.lineStart(),p=[]}function f(){l(p[0][0],p[0][1]),y.lineEnd();var n,t=y.clean(),e=v.buffer(),r=e.length;if(p.pop(),g.push(p),p=null,r){if(1&t){n=e[0];var u,r=n.length-1,a=-1;for(i.lineStart();++a<r;)i.point((u=n[a])[0],u[1]);return i.lineEnd(),void 0}r>1&&2&t&&e.push(e.pop().concat(e.shift())),h.push(e.filter(Zt))}}var h,g,p,d=t(i),m={point:u,lineStart:o,lineEnd:c,polygonStart:function(){m.point=l,m.lineStart=s,m.lineEnd=f,h=[],g=[],i.polygonStart()},polygonEnd:function(){m.point=u,m.lineStart=o,m.lineEnd=c,h=da.merge(h),h.length?It(h,$t,null,e,i):r(g)&&(i.lineStart(),e(null,null,1,i),i.lineEnd()),i.polygonEnd(),h=g=null},sphere:function(){i.polygonStart(),i.lineStart(),e(null,null,1,i),i.lineEnd(),i.polygonEnd()}},v=Bt(),y=t(v);return m}}function Zt(n){return n.length>1}function Bt(){var n,t=[];return{lineStart:function(){t.push(n=[])},point:function(t,e){n.push([t,e])},lineEnd:s,buffer:function(){var e=t;return t=[],n=null,e},rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))}}}function $t(n,t){return((n=n.point)[0]<0?n[1]-Wa/2-Ja:Wa/2-n[1])-((t=t.point)[0]<0?t[1]-Wa/2-Ja:Wa/2-t[1])}function Wt(n,t){var e=n[0],r=n[1],i=[Math.sin(e),-Math.cos(e),0],u=0,a=!1,o=!1,c=0;Ao.reset();for(var l=0,s=t.length;s>l;++l){var f=t[l],h=f.length;if(h){for(var g=f[0],p=g[0],d=g[1]/2+Wa/4,m=Math.sin(d),v=Math.cos(d),y=1;;){y===h&&(y=0),n=f[y];var M=n[0],x=n[1]/2+Wa/4,b=Math.sin(x),_=Math.cos(x),w=M-p,S=Math.abs(w)>Wa,E=m*b;if(Ao.add(Math.atan2(E*Math.sin(w),v*_+E*Math.cos(w))),Math.abs(x)<Ja&&(o=!0),u+=S?w+(w>=0?2:-2)*Wa:w,S^p>=e^M>=e){var k=Ct(qt(g),qt(n));jt(k);var A=Ct(i,k);jt(A);var N=(S^w>=0?-1:1)*V(A[2]);r>N&&(c+=S^w>=0?1:-1)}if(!y++)break;p=M,m=b,v=_,g=n}Math.abs(u)>Ja&&(a=!0)}}return(!o&&!a&&0>Ao||-Ja>u)^1&c}function Jt(n){var t,e=0/0,r=0/0,i=0/0;return{lineStart:function(){n.lineStart(),t=1},point:function(u,a){var o=u>0?Wa:-Wa,c=Math.abs(u-e);Math.abs(c-Wa)<Ja?(n.point(e,r=(r+a)/2>0?Wa/2:-Wa/2),n.point(i,r),n.lineEnd(),n.lineStart(),n.point(o,r),n.point(u,r),t=0):i!==o&&c>=Wa&&(Math.abs(e-i)<Ja&&(e-=i*Ja),Math.abs(u-o)<Ja&&(u-=o*Ja),r=Gt(e,r,u,a),n.point(i,r),n.lineEnd(),n.lineStart(),n.point(o,r),t=0),n.point(e=u,r=a),i=o},lineEnd:function(){n.lineEnd(),e=r=0/0},clean:function(){return 2-t}}}function Gt(n,t,e,r){var i,u,a=Math.sin(n-e);return Math.abs(a)>Ja?Math.atan((Math.sin(t)*(u=Math.cos(r))*Math.sin(e)-Math.sin(r)*(i=Math.cos(t))*Math.sin(n))/(i*u*a)):(t+r)/2}function Kt(n,t,e,r){var i;if(null==n)i=e*Wa/2,r.point(-Wa,i),r.point(0,i),r.point(Wa,i),r.point(Wa,0),r.point(Wa,-i),r.point(0,-i),r.point(-Wa,-i),r.point(-Wa,0),r.point(-Wa,i);else if(Math.abs(n[0]-t[0])>Ja){var u=(n[0]<t[0]?1:-1)*Wa;i=e*u/2,r.point(-u,i),r.point(0,i),r.point(u,i)}else r.point(t[0],t[1])}function Qt(n){return Wt(Uo,n)}function ne(n){function t(n,t){return Math.cos(n)*Math.cos(t)>a}function e(n){var e,u,a,c,s;return{lineStart:function(){c=a=!1,s=1},point:function(f,h){var g,p=[f,h],d=t(f,h),m=o?d?0:i(f,h):d?i(f+(0>f?Wa:-Wa),h):0;if(!e&&(c=a=d)&&n.lineStart(),d!==a&&(g=r(e,p),(Ht(e,g)||Ht(p,g))&&(p[0]+=Ja,p[1]+=Ja,d=t(p[0],p[1]))),d!==a)s=0,d?(n.lineStart(),g=r(p,e),n.point(g[0],g[1])):(g=r(e,p),n.point(g[0],g[1]),n.lineEnd()),e=g;else if(l&&e&&o^d){var v;m&u||!(v=r(p,e,!0))||(s=0,o?(n.lineStart(),n.point(v[0][0],v[0][1]),n.point(v[1][0],v[1][1]),n.lineEnd()):(n.point(v[1][0],v[1][1]),n.lineEnd(),n.lineStart(),n.point(v[0][0],v[0][1])))}!d||e&&Ht(e,p)||n.point(p[0],p[1]),e=p,a=d,u=m},lineEnd:function(){a&&n.lineEnd(),e=null},clean:function(){return s|(c&&a)<<1}}}function r(n,t,e){var r=qt(n),i=qt(t),u=[1,0,0],o=Ct(r,i),c=Tt(o,o),l=o[0],s=c-l*l;if(!s)return!e&&n;var f=a*c/s,h=-a*l/s,g=Ct(u,o),p=Dt(u,f),d=Dt(o,h);zt(p,d);var m=g,v=Tt(p,m),y=Tt(m,m),M=v*v-y*(Tt(p,p)-1);if(!(0>M)){var x=Math.sqrt(M),b=Dt(m,(-v-x)/y);if(zt(b,p),b=Lt(b),!e)return b;var _,w=n[0],S=t[0],E=n[1],k=t[1];w>S&&(_=w,w=S,S=_);var A=S-w,N=Math.abs(A-Wa)<Ja,q=N||Ja>A;if(!N&&E>k&&(_=E,E=k,k=_),q?N?E+k>0^b[1]<(Math.abs(b[0]-w)<Ja?E:k):E<=b[1]&&b[1]<=k:A>Wa^(w<=b[0]&&b[0]<=S)){var T=Dt(m,(-v+x)/y);return zt(T,p),[b,Lt(T)]}}}function i(t,e){var r=o?n:Wa-n,i=0;return-r>t?i|=1:t>r&&(i|=2),-r>e?i|=4:e>r&&(i|=8),i}function u(n){return Wt(c,n)}var a=Math.cos(n),o=a>0,c=[n,0],l=Math.abs(a)>Ja,s=Ee(n,6*Ka);return Xt(t,e,s,u)}function te(n,t,e,r){function i(r,i){return Math.abs(r[0]-n)<Ja?i>0?0:3:Math.abs(r[0]-e)<Ja?i>0?2:1:Math.abs(r[1]-t)<Ja?i>0?1:0:i>0?3:2}function u(n,t){return a(n.point,t.point)}function a(n,t){var e=i(n,1),r=i(t,1);return e!==r?e-r:0===e?t[1]-n[1]:1===e?n[0]-t[0]:2===e?n[1]-t[1]:t[0]-n[0]}function o(i,u){var a=u[0]-i[0],o=u[1]-i[1],c=[0,1];return Math.abs(a)<Ja&&Math.abs(o)<Ja?n<=i[0]&&i[0]<=e&&t<=i[1]&&i[1]<=r:ee(n-i[0],a,c)&&ee(i[0]-e,-a,c)&&ee(t-i[1],o,c)&&ee(i[1]-r,-o,c)?(c[1]<1&&(u[0]=i[0]+c[1]*a,u[1]=i[1]+c[1]*o),c[0]>0&&(i[0]+=c[0]*a,i[1]+=c[0]*o),!0):!1}return function(c){function l(u){var a=i(u,-1),o=s([0===a||3===a?n:e,a>1?r:t]);return o}function s(n){for(var t=0,e=M.length,r=n[1],i=0;e>i;++i)for(var u,a=1,o=M[i],c=o.length,l=o[0];c>a;++a)u=o[a],l[1]<=r?u[1]>r&&f(l,u,n)>0&&++t:u[1]<=r&&f(l,u,n)<0&&--t,l=u;return 0!==t}function f(n,t,e){return(t[0]-n[0])*(e[1]-n[1])-(e[0]-n[0])*(t[1]-n[1])}function h(u,o,c,l){var s=0,f=0;if(null==u||(s=i(u,c))!==(f=i(o,c))||a(u,o)<0^c>0){do l.point(0===s||3===s?n:e,s>1?r:t);while((s=(s+c+4)%4)!==f)}else l.point(o[0],o[1])}function g(i,u){return i>=n&&e>=i&&u>=t&&r>=u}function p(n,t){g(n,t)&&c.point(n,t)}function d(){T.point=v,M&&M.push(x=[]),A=!0,k=!1,S=E=0/0}function m(){y&&(v(b,_),w&&k&&q.rejoin(),y.push(q.buffer())),T.point=p,k&&c.lineEnd()}function v(n,t){n=Math.max(-Io,Math.min(Io,n)),t=Math.max(-Io,Math.min(Io,t));var e=g(n,t);if(M&&x.push([n,t]),A)b=n,_=t,w=e,A=!1,e&&(c.lineStart(),c.point(n,t));else if(e&&k)c.point(n,t);else{var r=[S,E],i=[n,t];o(r,i)?(k||(c.lineStart(),c.point(r[0],r[1])),c.point(i[0],i[1]),e||c.lineEnd()):e&&(c.lineStart(),c.point(n,t))}S=n,E=t,k=e}var y,M,x,b,_,w,S,E,k,A,N=c,q=Bt(),T={point:p,lineStart:d,lineEnd:m,polygonStart:function(){c=q,y=[],M=[]},polygonEnd:function(){c=N,(y=da.merge(y)).length?(c.polygonStart(),It(y,u,l,h,c),c.polygonEnd()):s([n,t])&&(c.polygonStart(),c.lineStart(),h(null,null,1,c),c.lineEnd(),c.polygonEnd()),y=M=x=null}};return T}}function ee(n,t,e){if(Math.abs(t)<Ja)return 0>=n;var r=n/t;if(t>0){if(r>e[1])return!1;r>e[0]&&(e[0]=r)}else{if(r<e[0])return!1;r<e[1]&&(e[1]=r)}return!0}function re(n,t){function e(e,r){return e=n(e,r),t(e[0],e[1])}return n.invert&&t.invert&&(e.invert=function(e,r){return e=t.invert(e,r),e&&n.invert(e[0],e[1])}),e}function ie(n){var t=0,e=Wa/3,r=ye(n),i=r(t,e);return i.parallels=function(n){return arguments.length?r(t=n[0]*Wa/180,e=n[1]*Wa/180):[180*(t/Wa),180*(e/Wa)]},i}function ue(n,t){function e(n,t){var e=Math.sqrt(u-2*i*Math.sin(t))/i;return[e*Math.sin(n*=i),a-e*Math.cos(n)]}var r=Math.sin(n),i=(r+Math.sin(t))/2,u=1+r*(2*i-r),a=Math.sqrt(u)/i;return e.invert=function(n,t){var e=a-t;return[Math.atan2(n,e)/i,V((u-(n*n+e*e)*i*i)/(2*i))]},e}function ae(){function n(n,t){Xo+=i*n-r*t,r=n,i=t}var t,e,r,i;Jo.point=function(u,a){Jo.point=n,t=r=u,e=i=a},Jo.lineEnd=function(){n(t,e)}}function oe(n,t){Zo>n&&(Zo=n),n>$o&&($o=n),Bo>t&&(Bo=t),t>Wo&&(Wo=t)}function ce(){function n(n,t){a.push("M",n,",",t,u)}function t(n,t){a.push("M",n,",",t),o.point=e}function e(n,t){a.push("L",n,",",t)}function r(){o.point=n}function i(){a.push("Z")}var u=le(4.5),a=[],o={point:n,lineStart:function(){o.point=t},lineEnd:r,polygonStart:function(){o.lineEnd=i},polygonEnd:function(){o.lineEnd=r,o.point=n},pointRadius:function(n){return u=le(n),o},result:function(){if(a.length){var n=a.join("");return a=[],n}}};return o}function le(n){return"m0,"+n+"a"+n+","+n+" 0 1,1 0,"+-2*n+"a"+n+","+n+" 0 1,1 0,"+2*n+"z"}function se(n,t){Co+=n,zo+=t,++Do}function fe(){function n(n,r){var i=n-t,u=r-e,a=Math.sqrt(i*i+u*u);jo+=a*(t+n)/2,Lo+=a*(e+r)/2,Ho+=a,se(t=n,e=r)}var t,e;Ko.point=function(r,i){Ko.point=n,se(t=r,e=i)}}function he(){Ko.point=se}function ge(){function n(n,t){var e=n-r,u=t-i,a=Math.sqrt(e*e+u*u);jo+=a*(r+n)/2,Lo+=a*(i+t)/2,Ho+=a,a=i*n-r*t,Fo+=a*(r+n),Po+=a*(i+t),Oo+=3*a,se(r=n,i=t)}var t,e,r,i;Ko.point=function(u,a){Ko.point=n,se(t=r=u,e=i=a)},Ko.lineEnd=function(){n(t,e)}}function pe(n){function t(t,e){n.moveTo(t,e),n.arc(t,e,a,0,2*Wa)}function e(t,e){n.moveTo(t,e),o.point=r}function r(t,e){n.lineTo(t,e)}function i(){o.point=t}function u(){n.closePath()}var a=4.5,o={point:t,lineStart:function(){o.point=e},lineEnd:i,polygonStart:function(){o.lineEnd=u},polygonEnd:function(){o.lineEnd=i,o.point=t},pointRadius:function(n){return a=n,o},result:s};return o}function de(n){function t(t){function r(e,r){e=n(e,r),t.point(e[0],e[1])}function i(){M=0/0,S.point=a,t.lineStart()}function a(r,i){var a=qt([r,i]),o=n(r,i);e(M,x,y,b,_,w,M=o[0],x=o[1],y=r,b=a[0],_=a[1],w=a[2],u,t),t.point(M,x)}function o(){S.point=r,t.lineEnd()}function c(){i(),S.point=l,S.lineEnd=s}function l(n,t){a(f=n,h=t),g=M,p=x,d=b,m=_,v=w,S.point=a}function s(){e(M,x,y,b,_,w,g,p,f,d,m,v,u,t),S.lineEnd=o,o()}var f,h,g,p,d,m,v,y,M,x,b,_,w,S={point:r,lineStart:i,lineEnd:o,polygonStart:function(){t.polygonStart(),S.lineStart=c},polygonEnd:function(){t.polygonEnd(),S.lineStart=i}};return S}function e(t,u,a,o,c,l,s,f,h,g,p,d,m,v){var y=s-t,M=f-u,x=y*y+M*M;if(x>4*r&&m--){var b=o+g,_=c+p,w=l+d,S=Math.sqrt(b*b+_*_+w*w),E=Math.asin(w/=S),k=Math.abs(Math.abs(w)-1)<Ja?(a+h)/2:Math.atan2(_,b),A=n(k,E),N=A[0],q=A[1],T=N-t,C=q-u,z=M*T-y*C;(z*z/x>r||Math.abs((y*T+M*C)/x-.5)>.3||i>o*g+c*p+l*d)&&(e(t,u,a,o,c,l,N,q,k,b/=S,_/=S,w,m,v),v.point(N,q),e(N,q,k,b,_,w,s,f,h,g,p,d,m,v))}}var r=.5,i=Math.cos(30*Ka),u=16;return t.precision=function(n){return arguments.length?(u=(r=n*n)>0&&16,t):Math.sqrt(r)},t}function me(n){var t=de(function(t,e){return n([t*Qa,e*Qa])});return function(n){return n=t(n),{point:function(t,e){n.point(t*Ka,e*Ka)},sphere:function(){n.sphere()},lineStart:function(){n.lineStart()},lineEnd:function(){n.lineEnd()},polygonStart:function(){n.polygonStart()},polygonEnd:function(){n.polygonEnd()}}}}function ve(n){return ye(function(){return n})()}function ye(n){function t(n){return n=o(n[0]*Ka,n[1]*Ka),[n[0]*h+c,l-n[1]*h]}function e(n){return n=o.invert((n[0]-c)/h,(l-n[1])/h),n&&[n[0]*Qa,n[1]*Qa]}function r(){o=re(a=be(v,y,M),u);var n=u(d,m);return c=g-n[0]*h,l=p+n[1]*h,i()}function i(){return s&&(s.valid=!1,s=null),t}var u,a,o,c,l,s,f=de(function(n,t){return n=u(n,t),[n[0]*h+c,l-n[1]*h]}),h=150,g=480,p=250,d=0,m=0,v=0,y=0,M=0,x=Ro,b=gt,_=null,w=null;return t.stream=function(n){return s&&(s.valid=!1),s=Me(a,x(f(b(n)))),s.valid=!0,s},t.clipAngle=function(n){return arguments.length?(x=null==n?(_=n,Ro):ne((_=+n)*Ka),i()):_},t.clipExtent=function(n){return arguments.length?(w=n,b=null==n?gt:te(n[0][0],n[0][1],n[1][0],n[1][1]),i()):w},t.scale=function(n){return arguments.length?(h=+n,r()):h},t.translate=function(n){return arguments.length?(g=+n[0],p=+n[1],r()):[g,p]},t.center=function(n){return arguments.length?(d=n[0]%360*Ka,m=n[1]%360*Ka,r()):[d*Qa,m*Qa]},t.rotate=function(n){return arguments.length?(v=n[0]%360*Ka,y=n[1]%360*Ka,M=n.length>2?n[2]%360*Ka:0,r()):[v*Qa,y*Qa,M*Qa]},da.rebind(t,f,"precision"),function(){return u=n.apply(this,arguments),t.invert=u.invert&&e,r()}}function Me(n,t){return{point:function(e,r){r=n(e*Ka,r*Ka),e=r[0],t.point(e>Wa?e-2*Wa:-Wa>e?e+2*Wa:e,r[1])},sphere:function(){t.sphere()},lineStart:function(){t.lineStart()},lineEnd:function(){t.lineEnd()},polygonStart:function(){t.polygonStart()},polygonEnd:function(){t.polygonEnd()}}}function xe(n,t){return[n,t]}function be(n,t,e){return n?t||e?re(we(n),Se(t,e)):we(n):t||e?Se(t,e):xe}function _e(n){return function(t,e){return t+=n,[t>Wa?t-2*Wa:-Wa>t?t+2*Wa:t,e]}}function we(n){var t=_e(n);return t.invert=_e(-n),t}function Se(n,t){function e(n,t){var e=Math.cos(t),o=Math.cos(n)*e,c=Math.sin(n)*e,l=Math.sin(t),s=l*r+o*i;return[Math.atan2(c*u-s*a,o*r-l*i),V(s*u+c*a)]}var r=Math.cos(n),i=Math.sin(n),u=Math.cos(t),a=Math.sin(t);return e.invert=function(n,t){var e=Math.cos(t),o=Math.cos(n)*e,c=Math.sin(n)*e,l=Math.sin(t),s=l*u-c*a;return[Math.atan2(c*u+l*a,o*r+s*i),V(s*r-o*i)]},e}function Ee(n,t){var e=Math.cos(n),r=Math.sin(n);return function(i,u,a,o){null!=i?(i=ke(e,i),u=ke(e,u),(a>0?u>i:i>u)&&(i+=2*a*Wa)):(i=n+2*a*Wa,u=n);for(var c,l=a*t,s=i;a>0?s>u:u>s;s-=l)o.point((c=Lt([e,-r*Math.cos(s),-r*Math.sin(s)]))[0],c[1])}}function ke(n,t){var e=qt(t);e[0]-=n,jt(e);var r=I(-e[1]);return((-e[2]<0?-r:r)+2*Math.PI-Ja)%(2*Math.PI)}function Ae(n,t,e){var r=da.range(n,t-Ja,e).concat(t);return function(n){return r.map(function(t){return[n,t]})}}function Ne(n,t,e){var r=da.range(n,t-Ja,e).concat(t);return function(n){return r.map(function(t){return[t,n]})}}function qe(n){return n.source}function Te(n){return n.target}function Ce(n,t,e,r){var i=Math.cos(t),u=Math.sin(t),a=Math.cos(r),o=Math.sin(r),c=i*Math.cos(n),l=i*Math.sin(n),s=a*Math.cos(e),f=a*Math.sin(e),h=2*Math.asin(Math.sqrt(B(r-t)+i*a*B(e-n))),g=1/Math.sin(h),p=h?function(n){var t=Math.sin(n*=h)*g,e=Math.sin(h-n)*g,r=e*c+t*s,i=e*l+t*f,a=e*u+t*o;return[Math.atan2(i,r)*Qa,Math.atan2(a,Math.sqrt(r*r+i*i))*Qa]}:function(){return[n*Qa,t*Qa]};return p.distance=h,p}function ze(){function n(n,i){var u=Math.sin(i*=Ka),a=Math.cos(i),o=Math.abs((n*=Ka)-t),c=Math.cos(o);Qo+=Math.atan2(Math.sqrt((o=a*Math.sin(o))*o+(o=r*u-e*a*c)*o),e*u+r*a*c),t=n,e=u,r=a}var t,e,r;nc.point=function(i,u){t=i*Ka,e=Math.sin(u*=Ka),r=Math.cos(u),nc.point=n},nc.lineEnd=function(){nc.point=nc.lineEnd=s}}function De(n,t){function e(t,e){var r=Math.cos(t),i=Math.cos(e),u=n(r*i);return[u*i*Math.sin(t),u*Math.sin(e)]}return e.invert=function(n,e){var r=Math.sqrt(n*n+e*e),i=t(r),u=Math.sin(i),a=Math.cos(i);return[Math.atan2(n*u,r*a),Math.asin(r&&e*u/r)]},e}function je(n,t){function e(n,t){var e=Math.abs(Math.abs(t)-Wa/2)<Ja?0:a/Math.pow(i(t),u);return[e*Math.sin(u*n),a-e*Math.cos(u*n)]}var r=Math.cos(n),i=function(n){return Math.tan(Wa/4+n/2)},u=n===t?Math.sin(n):Math.log(r/Math.cos(t))/Math.log(i(t)/i(n)),a=r*Math.pow(i(n),u)/u;return u?(e.invert=function(n,t){var e=a-t,r=U(u)*Math.sqrt(n*n+e*e);return[Math.atan2(n,e)/u,2*Math.atan(Math.pow(a/r,1/u))-Wa/2]},e):He}function Le(n,t){function e(n,t){var e=u-t;return[e*Math.sin(i*n),u-e*Math.cos(i*n)]}var r=Math.cos(n),i=n===t?Math.sin(n):(r-Math.cos(t))/(t-n),u=r/i+n;return Math.abs(i)<Ja?xe:(e.invert=function(n,t){var e=u-t;return[Math.atan2(n,e)/i,u-U(i)*Math.sqrt(n*n+e*e)]},e)}function He(n,t){return[n,Math.log(Math.tan(Wa/4+t/2))]}function Fe(n){var t,e=ve(n),r=e.scale,i=e.translate,u=e.clipExtent;return e.scale=function(){var n=r.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.translate=function(){var n=i.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.clipExtent=function(n){var a=u.apply(e,arguments);if(a===e){if(t=null==n){var o=Wa*r(),c=i();u([[c[0]-o,c[1]-o],[c[0]+o,c[1]+o]])}}else t&&(a=null);return a},e.clipExtent(null)}function Pe(n,t){var e=Math.cos(t)*Math.sin(n);return[Math.log((1+e)/(1-e))/2,Math.atan2(Math.tan(t),Math.cos(n))]}function Oe(n){function t(t){function a(){l.push("M",u(n(s),o))}for(var c,l=[],s=[],f=-1,h=t.length,g=ht(e),p=ht(r);++f<h;)i.call(this,c=t[f],f)?s.push([+g.call(this,c,f),+p.call(this,c,f)]):s.length&&(a(),s=[]);return s.length&&a(),l.length?l.join(""):null}var e=Ye,r=Re,i=Ut,u=Ue,a=u.key,o=.7;return t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t.defined=function(n){return arguments.length?(i=n,t):i},t.interpolate=function(n){return arguments.length?(a="function"==typeof n?u=n:(u=ac.get(n)||Ue).key,t):a},t.tension=function(n){return arguments.length?(o=n,t):o},t}function Ye(n){return n[0]}function Re(n){return n[1]}function Ue(n){return n.join("L")}function Ie(n){return Ue(n)+"Z"}function Ve(n){for(var t=0,e=n.length,r=n[0],i=[r[0],",",r[1]];++t<e;)i.push("H",(r[0]+(r=n[t])[0])/2,"V",r[1]);return e>1&&i.push("H",r[0]),i.join("")}function Xe(n){for(var t=0,e=n.length,r=n[0],i=[r[0],",",r[1]];++t<e;)i.push("V",(r=n[t])[1],"H",r[0]);return i.join("")}function Ze(n){for(var t=0,e=n.length,r=n[0],i=[r[0],",",r[1]];++t<e;)i.push("H",(r=n[t])[0],"V",r[1]);return i.join("")}function Be(n,t){return n.length<4?Ue(n):n[1]+Je(n.slice(1,n.length-1),Ge(n,t))}function $e(n,t){return n.length<3?Ue(n):n[0]+Je((n.push(n[0]),n),Ge([n[n.length-2]].concat(n,[n[1]]),t))}function We(n,t){return n.length<3?Ue(n):n[0]+Je(n,Ge(n,t))}function Je(n,t){if(t.length<1||n.length!=t.length&&n.length!=t.length+2)return Ue(n);var e=n.length!=t.length,r="",i=n[0],u=n[1],a=t[0],o=a,c=1;if(e&&(r+="Q"+(u[0]-2*a[0]/3)+","+(u[1]-2*a[1]/3)+","+u[0]+","+u[1],i=n[1],c=2),t.length>1){o=t[1],u=n[c],c++,r+="C"+(i[0]+a[0])+","+(i[1]+a[1])+","+(u[0]-o[0])+","+(u[1]-o[1])+","+u[0]+","+u[1];for(var l=2;l<t.length;l++,c++)u=n[c],o=t[l],r+="S"+(u[0]-o[0])+","+(u[1]-o[1])+","+u[0]+","+u[1]}if(e){var s=n[c];r+="Q"+(u[0]+2*o[0]/3)+","+(u[1]+2*o[1]/3)+","+s[0]+","+s[1]}return r}function Ge(n,t){for(var e,r=[],i=(1-t)/2,u=n[0],a=n[1],o=1,c=n.length;++o<c;)e=u,u=a,a=n[o],r.push([i*(a[0]-e[0]),i*(a[1]-e[1])]);return r}function Ke(n){if(n.length<3)return Ue(n);var t=1,e=n.length,r=n[0],i=r[0],u=r[1],a=[i,i,i,(r=n[1])[0]],o=[u,u,u,r[1]],c=[i,",",u,"L",er(lc,a),",",er(lc,o)];for(n.push(n[e-1]);++t<=e;)r=n[t],a.shift(),a.push(r[0]),o.shift(),o.push(r[1]),rr(c,a,o);return n.pop(),c.push("L",r),c.join("")}function Qe(n){if(n.length<4)return Ue(n);for(var t,e=[],r=-1,i=n.length,u=[0],a=[0];++r<3;)t=n[r],u.push(t[0]),a.push(t[1]);for(e.push(er(lc,u)+","+er(lc,a)),--r;++r<i;)t=n[r],u.shift(),u.push(t[0]),a.shift(),a.push(t[1]),rr(e,u,a);return e.join("")}function nr(n){for(var t,e,r=-1,i=n.length,u=i+4,a=[],o=[];++r<4;)e=n[r%i],a.push(e[0]),o.push(e[1]);for(t=[er(lc,a),",",er(lc,o)],--r;++r<u;)e=n[r%i],a.shift(),a.push(e[0]),o.shift(),o.push(e[1]),rr(t,a,o);return t.join("")}function tr(n,t){var e=n.length-1;if(e)for(var r,i,u=n[0][0],a=n[0][1],o=n[e][0]-u,c=n[e][1]-a,l=-1;++l<=e;)r=n[l],i=l/e,r[0]=t*r[0]+(1-t)*(u+i*o),r[1]=t*r[1]+(1-t)*(a+i*c);return Ke(n)}function er(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]+n[3]*t[3]}function rr(n,t,e){n.push("C",er(oc,t),",",er(oc,e),",",er(cc,t),",",er(cc,e),",",er(lc,t),",",er(lc,e))}function ir(n,t){return(t[1]-n[1])/(t[0]-n[0])
}function ur(n){for(var t=0,e=n.length-1,r=[],i=n[0],u=n[1],a=r[0]=ir(i,u);++t<e;)r[t]=(a+(a=ir(i=u,u=n[t+1])))/2;return r[t]=a,r}function ar(n){for(var t,e,r,i,u=[],a=ur(n),o=-1,c=n.length-1;++o<c;)t=ir(n[o],n[o+1]),Math.abs(t)<1e-6?a[o]=a[o+1]=0:(e=a[o]/t,r=a[o+1]/t,i=e*e+r*r,i>9&&(i=3*t/Math.sqrt(i),a[o]=i*e,a[o+1]=i*r));for(o=-1;++o<=c;)i=(n[Math.min(c,o+1)][0]-n[Math.max(0,o-1)][0])/(6*(1+a[o]*a[o])),u.push([i||0,a[o]*i||0]);return u}function or(n){return n.length<3?Ue(n):n[0]+Je(n,ar(n))}function cr(n,t,e,r){var i,u,a,o,c,l,s;return i=r[n],u=i[0],a=i[1],i=r[t],o=i[0],c=i[1],i=r[e],l=i[0],s=i[1],(s-a)*(o-u)-(c-a)*(l-u)>0}function lr(n,t,e){return(e[0]-t[0])*(n[1]-t[1])<(e[1]-t[1])*(n[0]-t[0])}function sr(n,t,e,r){var i=n[0],u=e[0],a=t[0]-i,o=r[0]-u,c=n[1],l=e[1],s=t[1]-c,f=r[1]-l,h=(o*(c-l)-f*(i-u))/(f*a-o*s);return[i+h*a,c+h*s]}function fr(n){var t=n[0],e=n[n.length-1];return!(t[0]-e[0]||t[1]-e[1])}function hr(n,t){var e={list:n.map(function(n,t){return{index:t,x:n[0],y:n[1]}}).sort(function(n,t){return n.y<t.y?-1:n.y>t.y?1:n.x<t.x?-1:n.x>t.x?1:0}),bottomSite:null},r={list:[],leftEnd:null,rightEnd:null,init:function(){r.leftEnd=r.createHalfEdge(null,"l"),r.rightEnd=r.createHalfEdge(null,"l"),r.leftEnd.r=r.rightEnd,r.rightEnd.l=r.leftEnd,r.list.unshift(r.leftEnd,r.rightEnd)},createHalfEdge:function(n,t){return{edge:n,side:t,vertex:null,l:null,r:null}},insert:function(n,t){t.l=n,t.r=n.r,n.r.l=t,n.r=t},leftBound:function(n){var t=r.leftEnd;do t=t.r;while(t!=r.rightEnd&&i.rightOf(t,n));return t=t.l},del:function(n){n.l.r=n.r,n.r.l=n.l,n.edge=null},right:function(n){return n.r},left:function(n){return n.l},leftRegion:function(n){return null==n.edge?e.bottomSite:n.edge.region[n.side]},rightRegion:function(n){return null==n.edge?e.bottomSite:n.edge.region[fc[n.side]]}},i={bisect:function(n,t){var e={region:{l:n,r:t},ep:{l:null,r:null}},r=t.x-n.x,i=t.y-n.y,u=r>0?r:-r,a=i>0?i:-i;return e.c=n.x*r+n.y*i+.5*(r*r+i*i),u>a?(e.a=1,e.b=i/r,e.c/=r):(e.b=1,e.a=r/i,e.c/=i),e},intersect:function(n,t){var e=n.edge,r=t.edge;if(!e||!r||e.region.r==r.region.r)return null;var i=e.a*r.b-e.b*r.a;if(Math.abs(i)<1e-10)return null;var u,a,o=(e.c*r.b-r.c*e.b)/i,c=(r.c*e.a-e.c*r.a)/i,l=e.region.r,s=r.region.r;l.y<s.y||l.y==s.y&&l.x<s.x?(u=n,a=e):(u=t,a=r);var f=o>=a.region.r.x;return f&&"l"===u.side||!f&&"r"===u.side?null:{x:o,y:c}},rightOf:function(n,t){var e=n.edge,r=e.region.r,i=t.x>r.x;if(i&&"l"===n.side)return 1;if(!i&&"r"===n.side)return 0;if(1===e.a){var u=t.y-r.y,a=t.x-r.x,o=0,c=0;if(!i&&e.b<0||i&&e.b>=0?c=o=u>=e.b*a:(c=t.x+t.y*e.b>e.c,e.b<0&&(c=!c),c||(o=1)),!o){var l=r.x-e.region.l.x;c=e.b*(a*a-u*u)<l*u*(1+2*a/l+e.b*e.b),e.b<0&&(c=!c)}}else{var s=e.c-e.a*t.x,f=t.y-s,h=t.x-r.x,g=s-r.y;c=f*f>h*h+g*g}return"l"===n.side?c:!c},endPoint:function(n,e,r){n.ep[e]=r,n.ep[fc[e]]&&t(n)},distance:function(n,t){var e=n.x-t.x,r=n.y-t.y;return Math.sqrt(e*e+r*r)}},u={list:[],insert:function(n,t,e){n.vertex=t,n.ystar=t.y+e;for(var r=0,i=u.list,a=i.length;a>r;r++){var o=i[r];if(!(n.ystar>o.ystar||n.ystar==o.ystar&&t.x>o.vertex.x))break}i.splice(r,0,n)},del:function(n){for(var t=0,e=u.list,r=e.length;r>t&&e[t]!=n;++t);e.splice(t,1)},empty:function(){return 0===u.list.length},nextEvent:function(n){for(var t=0,e=u.list,r=e.length;r>t;++t)if(e[t]==n)return e[t+1];return null},min:function(){var n=u.list[0];return{x:n.vertex.x,y:n.ystar}},extractMin:function(){return u.list.shift()}};r.init(),e.bottomSite=e.list.shift();for(var a,o,c,l,s,f,h,g,p,d,m,v,y,M=e.list.shift();;)if(u.empty()||(a=u.min()),M&&(u.empty()||M.y<a.y||M.y==a.y&&M.x<a.x))o=r.leftBound(M),c=r.right(o),h=r.rightRegion(o),v=i.bisect(h,M),f=r.createHalfEdge(v,"l"),r.insert(o,f),d=i.intersect(o,f),d&&(u.del(o),u.insert(o,d,i.distance(d,M))),o=f,f=r.createHalfEdge(v,"r"),r.insert(o,f),d=i.intersect(f,c),d&&u.insert(f,d,i.distance(d,M)),M=e.list.shift();else{if(u.empty())break;o=u.extractMin(),l=r.left(o),c=r.right(o),s=r.right(c),h=r.leftRegion(o),g=r.rightRegion(c),m=o.vertex,i.endPoint(o.edge,o.side,m),i.endPoint(c.edge,c.side,m),r.del(o),u.del(c),r.del(c),y="l",h.y>g.y&&(p=h,h=g,g=p,y="r"),v=i.bisect(h,g),f=r.createHalfEdge(v,y),r.insert(l,f),i.endPoint(v,fc[y],m),d=i.intersect(l,f),d&&(u.del(l),u.insert(l,d,i.distance(d,h))),d=i.intersect(f,s),d&&u.insert(f,d,i.distance(d,h))}for(o=r.right(r.leftEnd);o!=r.rightEnd;o=r.right(o))t(o.edge)}function gr(n){return n.x}function pr(n){return n.y}function dr(){return{leaf:!0,nodes:[],point:null,x:null,y:null}}function mr(n,t,e,r,i,u){if(!n(t,e,r,i,u)){var a=.5*(e+i),o=.5*(r+u),c=t.nodes;c[0]&&mr(n,c[0],e,r,a,o),c[1]&&mr(n,c[1],a,r,i,o),c[2]&&mr(n,c[2],e,o,a,u),c[3]&&mr(n,c[3],a,o,i,u)}}function vr(n,t){n=da.rgb(n),t=da.rgb(t);var e=n.r,r=n.g,i=n.b,u=t.r-e,a=t.g-r,o=t.b-i;return function(t){return n.r=Math.round(e+u*t),n.g=Math.round(r+a*t),n.b=Math.round(i+o*t),n}}function yr(n,t){var e,r={},i={};for(e in n)e in t?r[e]=br(n[e],t[e]):i[e]=n[e];for(e in t)e in n||(i[e]=t[e]);return function(n){for(e in r)i[e]=r[e](n);return i}}function Mr(n,t){return t-=n=+n,function(e){return n+t*e}}function xr(n,t){var e,r,i,u,a,o=0,c=0,l=[],s=[];for(n+="",t+="",hc.lastIndex=0,r=0;e=hc.exec(t);++r)e.index&&l.push(t.substring(o,c=e.index)),s.push({i:l.length,x:e[0]}),l.push(null),o=hc.lastIndex;for(o<t.length&&l.push(t.substring(o)),r=0,u=s.length;(e=hc.exec(n))&&u>r;++r)if(a=s[r],a.x==e[0]){if(a.i)if(null==l[a.i+1])for(l[a.i-1]+=a.x,l.splice(a.i,1),i=r+1;u>i;++i)s[i].i--;else for(l[a.i-1]+=a.x+l[a.i+1],l.splice(a.i,2),i=r+1;u>i;++i)s[i].i-=2;else if(null==l[a.i+1])l[a.i]=a.x;else for(l[a.i]=a.x+l[a.i+1],l.splice(a.i+1,1),i=r+1;u>i;++i)s[i].i--;s.splice(r,1),u--,r--}else a.x=Mr(parseFloat(e[0]),parseFloat(a.x));for(;u>r;)a=s.pop(),null==l[a.i+1]?l[a.i]=a.x:(l[a.i]=a.x+l[a.i+1],l.splice(a.i+1,1)),u--;return 1===l.length?null==l[0]?(a=s[0].x,function(n){return a(n)+""}):function(){return t}:function(n){for(r=0;u>r;++r)l[(a=s[r]).i]=a.x(n);return l.join("")}}function br(n,t){for(var e,r=da.interpolators.length;--r>=0&&!(e=da.interpolators[r](n,t)););return e}function _r(n,t){var e,r=[],i=[],u=n.length,a=t.length,o=Math.min(n.length,t.length);for(e=0;o>e;++e)r.push(br(n[e],t[e]));for(;u>e;++e)i[e]=n[e];for(;a>e;++e)i[e]=t[e];return function(n){for(e=0;o>e;++e)i[e]=r[e](n);return i}}function wr(n){return function(t){return 0>=t?0:t>=1?1:n(t)}}function Sr(n){return function(t){return 1-n(1-t)}}function Er(n){return function(t){return.5*(.5>t?n(2*t):2-n(2-2*t))}}function kr(n){return n*n}function Ar(n){return n*n*n}function Nr(n){if(0>=n)return 0;if(n>=1)return 1;var t=n*n,e=t*n;return 4*(.5>n?e:3*(n-t)+e-.75)}function qr(n){return function(t){return Math.pow(t,n)}}function Tr(n){return 1-Math.cos(n*Wa/2)}function Cr(n){return Math.pow(2,10*(n-1))}function zr(n){return 1-Math.sqrt(1-n*n)}function Dr(n,t){var e;return arguments.length<2&&(t=.45),arguments.length?e=t/(2*Wa)*Math.asin(1/n):(n=1,e=t/4),function(r){return 1+n*Math.pow(2,10*-r)*Math.sin(2*(r-e)*Wa/t)}}function jr(n){return n||(n=1.70158),function(t){return t*t*((n+1)*t-n)}}function Lr(n){return 1/2.75>n?7.5625*n*n:2/2.75>n?7.5625*(n-=1.5/2.75)*n+.75:2.5/2.75>n?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375}function Hr(n,t){n=da.hcl(n),t=da.hcl(t);var e=n.h,r=n.c,i=n.l,u=t.h-e,a=t.c-r,o=t.l-i;return isNaN(a)&&(a=0,r=isNaN(r)?t.c:r),isNaN(u)?(u=0,e=isNaN(e)?t.h:e):u>180?u-=360:-180>u&&(u+=360),function(t){return n.h=e+u*t,n.c=r+a*t,n.l=i+o*t,n}}function Fr(n,t){n=da.hsl(n),t=da.hsl(t);var e=n.h,r=n.s,i=n.l,u=t.h-e,a=t.s-r,o=t.l-i;return isNaN(a)&&(a=0,r=isNaN(r)?t.s:r),isNaN(u)?(u=0,e=isNaN(e)?t.h:e):u>180?u-=360:-180>u&&(u+=360),function(t){return n.h=e+u*t,n.s=r+a*t,n.l=i+o*t,n}}function Pr(n,t){n=da.lab(n),t=da.lab(t);var e=n.l,r=n.a,i=n.b,u=t.l-e,a=t.a-r,o=t.b-i;return function(t){return n.l=e+u*t,n.a=r+a*t,n.b=i+o*t,n}}function Or(n,t){return t-=n,function(e){return Math.round(n+t*e)}}function Yr(n){var t=[n.a,n.b],e=[n.c,n.d],r=Ur(t),i=Rr(t,e),u=Ur(Ir(e,t,-i))||0;t[0]*e[1]<e[0]*t[1]&&(t[0]*=-1,t[1]*=-1,r*=-1,i*=-1),this.rotate=(r?Math.atan2(t[1],t[0]):Math.atan2(-e[0],e[1]))*Qa,this.translate=[n.e,n.f],this.scale=[r,u],this.skew=u?Math.atan2(i,u)*Qa:0}function Rr(n,t){return n[0]*t[0]+n[1]*t[1]}function Ur(n){var t=Math.sqrt(Rr(n,n));return t&&(n[0]/=t,n[1]/=t),t}function Ir(n,t,e){return n[0]+=e*t[0],n[1]+=e*t[1],n}function Vr(n,t){var e,r=[],i=[],u=da.transform(n),a=da.transform(t),o=u.translate,c=a.translate,l=u.rotate,s=a.rotate,f=u.skew,h=a.skew,g=u.scale,p=a.scale;return o[0]!=c[0]||o[1]!=c[1]?(r.push("translate(",null,",",null,")"),i.push({i:1,x:Mr(o[0],c[0])},{i:3,x:Mr(o[1],c[1])})):c[0]||c[1]?r.push("translate("+c+")"):r.push(""),l!=s?(l-s>180?s+=360:s-l>180&&(l+=360),i.push({i:r.push(r.pop()+"rotate(",null,")")-2,x:Mr(l,s)})):s&&r.push(r.pop()+"rotate("+s+")"),f!=h?i.push({i:r.push(r.pop()+"skewX(",null,")")-2,x:Mr(f,h)}):h&&r.push(r.pop()+"skewX("+h+")"),g[0]!=p[0]||g[1]!=p[1]?(e=r.push(r.pop()+"scale(",null,",",null,")"),i.push({i:e-4,x:Mr(g[0],p[0])},{i:e-2,x:Mr(g[1],p[1])})):(1!=p[0]||1!=p[1])&&r.push(r.pop()+"scale("+p+")"),e=i.length,function(n){for(var t,u=-1;++u<e;)r[(t=i[u]).i]=t.x(n);return r.join("")}}function Xr(n,t){return t=t-(n=+n)?1/(t-n):0,function(e){return(e-n)*t}}function Zr(n,t){return t=t-(n=+n)?1/(t-n):0,function(e){return Math.max(0,Math.min(1,(e-n)*t))}}function Br(n){for(var t=n.source,e=n.target,r=Wr(t,e),i=[t];t!==r;)t=t.parent,i.push(t);for(var u=i.length;e!==r;)i.splice(u,0,e),e=e.parent;return i}function $r(n){for(var t=[],e=n.parent;null!=e;)t.push(n),n=e,e=e.parent;return t.push(n),t}function Wr(n,t){if(n===t)return n;for(var e=$r(n),r=$r(t),i=e.pop(),u=r.pop(),a=null;i===u;)a=i,i=e.pop(),u=r.pop();return a}function Jr(n){n.fixed|=2}function Gr(n){n.fixed&=-7}function Kr(n){n.fixed|=4,n.px=n.x,n.py=n.y}function Qr(n){n.fixed&=-5}function ni(n,t,e){var r=0,i=0;if(n.charge=0,!n.leaf)for(var u,a=n.nodes,o=a.length,c=-1;++c<o;)u=a[c],null!=u&&(ni(u,t,e),n.charge+=u.charge,r+=u.charge*u.cx,i+=u.charge*u.cy);if(n.point){n.leaf||(n.point.x+=Math.random()-.5,n.point.y+=Math.random()-.5);var l=t*e[n.point.index];n.charge+=n.pointCharge=l,r+=l*n.point.x,i+=l*n.point.y}n.cx=r/n.charge,n.cy=i/n.charge}function ti(n,t){return da.rebind(n,t,"sort","children","value"),n.nodes=n,n.links=ui,n}function ei(n){return n.children}function ri(n){return n.value}function ii(n,t){return t.value-n.value}function ui(n){return da.merge(n.map(function(n){return(n.children||[]).map(function(t){return{source:n,target:t}})}))}function ai(n){return n.x}function oi(n){return n.y}function ci(n,t,e){n.y0=t,n.y=e}function li(n){return da.range(n.length)}function si(n){for(var t=-1,e=n[0].length,r=[];++t<e;)r[t]=0;return r}function fi(n){for(var t,e=1,r=0,i=n[0][1],u=n.length;u>e;++e)(t=n[e][1])>i&&(r=e,i=t);return r}function hi(n){return n.reduce(gi,0)}function gi(n,t){return n+t[1]}function pi(n,t){return di(n,Math.ceil(Math.log(t.length)/Math.LN2+1))}function di(n,t){for(var e=-1,r=+n[0],i=(n[1]-r)/t,u=[];++e<=t;)u[e]=i*e+r;return u}function mi(n){return[da.min(n),da.max(n)]}function vi(n,t){return n.parent==t.parent?1:2}function yi(n){var t=n.children;return t&&t.length?t[0]:n._tree.thread}function Mi(n){var t,e=n.children;return e&&(t=e.length)?e[t-1]:n._tree.thread}function xi(n,t){var e=n.children;if(e&&(i=e.length))for(var r,i,u=-1;++u<i;)t(r=xi(e[u],t),n)>0&&(n=r);return n}function bi(n,t){return n.x-t.x}function _i(n,t){return t.x-n.x}function wi(n,t){return n.depth-t.depth}function Si(n,t){function e(n,r){var i=n.children;if(i&&(a=i.length))for(var u,a,o=null,c=-1;++c<a;)u=i[c],e(u,o),o=u;t(n,r)}e(n,null)}function Ei(n){for(var t,e=0,r=0,i=n.children,u=i.length;--u>=0;)t=i[u]._tree,t.prelim+=e,t.mod+=e,e+=t.shift+(r+=t.change)}function ki(n,t,e){n=n._tree,t=t._tree;var r=e/(t.number-n.number);n.change+=r,t.change-=r,t.shift+=e,t.prelim+=e,t.mod+=e}function Ai(n,t,e){return n._tree.ancestor.parent==t.parent?n._tree.ancestor:e}function Ni(n,t){return n.value-t.value}function qi(n,t){var e=n._pack_next;n._pack_next=t,t._pack_prev=n,t._pack_next=e,e._pack_prev=t}function Ti(n,t){n._pack_next=t,t._pack_prev=n}function Ci(n,t){var e=t.x-n.x,r=t.y-n.y,i=n.r+t.r;return.999*i*i>e*e+r*r}function zi(n){function t(n){s=Math.min(n.x-n.r,s),f=Math.max(n.x+n.r,f),h=Math.min(n.y-n.r,h),g=Math.max(n.y+n.r,g)}if((e=n.children)&&(l=e.length)){var e,r,i,u,a,o,c,l,s=1/0,f=-1/0,h=1/0,g=-1/0;if(e.forEach(Di),r=e[0],r.x=-r.r,r.y=0,t(r),l>1&&(i=e[1],i.x=i.r,i.y=0,t(i),l>2))for(u=e[2],Hi(r,i,u),t(u),qi(r,u),r._pack_prev=u,qi(u,i),i=r._pack_next,a=3;l>a;a++){Hi(r,i,u=e[a]);var p=0,d=1,m=1;for(o=i._pack_next;o!==i;o=o._pack_next,d++)if(Ci(o,u)){p=1;break}if(1==p)for(c=r._pack_prev;c!==o._pack_prev&&!Ci(c,u);c=c._pack_prev,m++);p?(m>d||d==m&&i.r<r.r?Ti(r,i=o):Ti(r=c,i),a--):(qi(r,u),i=u,t(u))}var v=(s+f)/2,y=(h+g)/2,M=0;for(a=0;l>a;a++)u=e[a],u.x-=v,u.y-=y,M=Math.max(M,u.r+Math.sqrt(u.x*u.x+u.y*u.y));n.r=M,e.forEach(ji)}}function Di(n){n._pack_next=n._pack_prev=n}function ji(n){delete n._pack_next,delete n._pack_prev}function Li(n,t,e,r){var i=n.children;if(n.x=t+=r*n.x,n.y=e+=r*n.y,n.r*=r,i)for(var u=-1,a=i.length;++u<a;)Li(i[u],t,e,r)}function Hi(n,t,e){var r=n.r+e.r,i=t.x-n.x,u=t.y-n.y;if(r&&(i||u)){var a=t.r+e.r,o=i*i+u*u;a*=a,r*=r;var c=.5+(r-a)/(2*o),l=Math.sqrt(Math.max(0,2*a*(r+o)-(r-=o)*r-a*a))/(2*o);e.x=n.x+c*i+l*u,e.y=n.y+c*u-l*i}else e.x=n.x+r,e.y=n.y}function Fi(n){return 1+da.max(n,function(n){return n.y})}function Pi(n){return n.reduce(function(n,t){return n+t.x},0)/n.length}function Oi(n){var t=n.children;return t&&t.length?Oi(t[0]):n}function Yi(n){var t,e=n.children;return e&&(t=e.length)?Yi(e[t-1]):n}function Ri(n){return{x:n.x,y:n.y,dx:n.dx,dy:n.dy}}function Ui(n,t){var e=n.x+t[3],r=n.y+t[0],i=n.dx-t[1]-t[3],u=n.dy-t[0]-t[2];return 0>i&&(e+=i/2,i=0),0>u&&(r+=u/2,u=0),{x:e,y:r,dx:i,dy:u}}function Ii(n){var t=n[0],e=n[n.length-1];return e>t?[t,e]:[e,t]}function Vi(n){return n.rangeExtent?n.rangeExtent():Ii(n.range())}function Xi(n,t,e,r){var i=e(n[0],n[1]),u=r(t[0],t[1]);return function(n){return u(i(n))}}function Zi(n,t){var e,r=0,i=n.length-1,u=n[r],a=n[i];return u>a&&(e=r,r=i,i=e,e=u,u=a,a=e),n[r]=t.floor(u),n[i]=t.ceil(a),n}function Bi(n){return n?{floor:function(t){return Math.floor(t/n)*n},ceil:function(t){return Math.ceil(t/n)*n}}:_c}function $i(n,t,e,r){var i=[],u=[],a=0,o=Math.min(n.length,t.length)-1;for(n[o]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++a<=o;)i.push(e(n[a-1],n[a])),u.push(r(t[a-1],t[a]));return function(t){var e=da.bisect(n,t,1,o)-1;return u[e](i[e](t))}}function Wi(n,t,e,r){function i(){var i=Math.min(n.length,t.length)>2?$i:Xi,c=r?Zr:Xr;return a=i(n,t,c,e),o=i(t,n,c,br),u}function u(n){return a(n)}var a,o;return u.invert=function(n){return o(n)},u.domain=function(t){return arguments.length?(n=t.map(Number),i()):n},u.range=function(n){return arguments.length?(t=n,i()):t},u.rangeRound=function(n){return u.range(n).interpolate(Or)},u.clamp=function(n){return arguments.length?(r=n,i()):r},u.interpolate=function(n){return arguments.length?(e=n,i()):e},u.ticks=function(t){return nu(n,t)},u.tickFormat=function(t,e){return tu(n,t,e)},u.nice=function(t){return Gi(n,t),i()},u.copy=function(){return Wi(n,t,e,r)},i()}function Ji(n,t){return da.rebind(n,t,"range","rangeRound","interpolate","clamp")}function Gi(n,t){return Zi(n,Bi(t?Qi(n,t)[2]:Ki(n)))}function Ki(n){var t=Ii(n),e=t[1]-t[0];return Math.pow(10,Math.round(Math.log(e)/Math.LN10)-1)}function Qi(n,t){var e=Ii(n),r=e[1]-e[0],i=Math.pow(10,Math.floor(Math.log(r/t)/Math.LN10)),u=t/r*i;return.15>=u?i*=10:.35>=u?i*=5:.75>=u&&(i*=2),e[0]=Math.ceil(e[0]/i)*i,e[1]=Math.floor(e[1]/i)*i+.5*i,e[2]=i,e}function nu(n,t){return da.range.apply(da,Qi(n,t))}function tu(n,t,e){var r=-Math.floor(Math.log(Qi(n,t)[2])/Math.LN10+.01);return da.format(e?e.replace(Mo,function(n,t,e,i,u,a,o,c,l,s){return[t,e,i,u,a,o,c,l||"."+(r-2*("%"===s)),s].join("")}):",."+r+"f")}function eu(n,t,e,r){function i(n){return(e?Math.log(0>n?0:n):-Math.log(n>0?0:-n))/Math.log(t)}function u(n){return e?Math.pow(t,n):-Math.pow(t,-n)}function a(t){return n(i(t))}return a.invert=function(t){return u(n.invert(t))},a.domain=function(t){return arguments.length?(e=t[0]>=0,n.domain((r=t.map(Number)).map(i)),a):r},a.base=function(e){return arguments.length?(t=+e,n.domain(r.map(i)),a):t},a.nice=function(){var t=Zi(r.map(i),e?Math:Sc);return n.domain(t),r=t.map(u),a},a.ticks=function(){var n=Ii(r),a=[];if(n.every(isFinite)){var o=n[0],c=n[1],l=Math.floor(i(o)),s=Math.ceil(i(c)),f=t%1?2:t;if(e){for(;s>l;l++)for(var h=1;f>h;h++)a.push(u(l)*h);a.push(u(l))}else for(a.push(u(l));l++<s;)for(var h=f-1;h>0;h--)a.push(u(l)*h);for(l=0;a[l]<o;l++);for(s=a.length;a[s-1]>c;s--);a=a.slice(l,s)}return a},a.tickFormat=function(n,t){if(!arguments.length)return wc;arguments.length<2?t=wc:"function"!=typeof t&&(t=da.format(t));var r,o=Math.max(.1,n/a.ticks().length),c=e?(r=1e-12,Math.ceil):(r=-1e-12,Math.floor);return function(n){return n/u(c(i(n)+r))<=o?t(n):""}},a.copy=function(){return eu(n.copy(),t,e,r)},Ji(a,n)}function ru(n,t,e){function r(t){return n(i(t))}var i=iu(t),u=iu(1/t);return r.invert=function(t){return u(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain((e=t.map(Number)).map(i)),r):e},r.ticks=function(n){return nu(e,n)},r.tickFormat=function(n,t){return tu(e,n,t)},r.nice=function(n){return r.domain(Gi(e,n))},r.exponent=function(a){return arguments.length?(i=iu(t=a),u=iu(1/t),n.domain(e.map(i)),r):t},r.copy=function(){return ru(n.copy(),t,e)},Ji(r,n)}function iu(n){return function(t){return 0>t?-Math.pow(-t,n):Math.pow(t,n)}}function uu(n,t){function e(t){return a[((u.get(t)||u.set(t,n.push(t)))-1)%a.length]}function r(t,e){return da.range(n.length).map(function(n){return t+e*n})}var u,a,o;return e.domain=function(r){if(!arguments.length)return n;n=[],u=new i;for(var a,o=-1,c=r.length;++o<c;)u.has(a=r[o])||u.set(a,n.push(a));return e[t.t].apply(e,t.a)},e.range=function(n){return arguments.length?(a=n,o=0,t={t:"range",a:arguments},e):a},e.rangePoints=function(i,u){arguments.length<2&&(u=0);var c=i[0],l=i[1],s=(l-c)/(Math.max(1,n.length-1)+u);return a=r(n.length<2?(c+l)/2:c+s*u/2,s),o=0,t={t:"rangePoints",a:arguments},e},e.rangeBands=function(i,u,c){arguments.length<2&&(u=0),arguments.length<3&&(c=u);var l=i[1]<i[0],s=i[l-0],f=i[1-l],h=(f-s)/(n.length-u+2*c);return a=r(s+h*c,h),l&&a.reverse(),o=h*(1-u),t={t:"rangeBands",a:arguments},e},e.rangeRoundBands=function(i,u,c){arguments.length<2&&(u=0),arguments.length<3&&(c=u);var l=i[1]<i[0],s=i[l-0],f=i[1-l],h=Math.floor((f-s)/(n.length-u+2*c)),g=f-s-(n.length-u)*h;return a=r(s+Math.round(g/2),h),l&&a.reverse(),o=Math.round(h*(1-u)),t={t:"rangeRoundBands",a:arguments},e},e.rangeBand=function(){return o},e.rangeExtent=function(){return Ii(t.a[0])},e.copy=function(){return uu(n,t)},e.domain(n)}function au(n,t){function e(){var e=0,u=t.length;for(i=[];++e<u;)i[e-1]=da.quantile(n,e/u);return r}function r(n){return isNaN(n=+n)?void 0:t[da.bisect(i,n)]}var i;return r.domain=function(t){return arguments.length?(n=t.filter(function(n){return!isNaN(n)}).sort(da.ascending),e()):n},r.range=function(n){return arguments.length?(t=n,e()):t},r.quantiles=function(){return i},r.invertExtent=function(e){return e=t.indexOf(e),0>e?[0/0,0/0]:[e>0?i[e-1]:n[0],e<i.length?i[e]:n[n.length-1]]},r.copy=function(){return au(n,t)},e()}function ou(n,t,e){function r(t){return e[Math.max(0,Math.min(a,Math.floor(u*(t-n))))]}function i(){return u=e.length/(t-n),a=e.length-1,r}var u,a;return r.domain=function(e){return arguments.length?(n=+e[0],t=+e[e.length-1],i()):[n,t]},r.range=function(n){return arguments.length?(e=n,i()):e},r.invertExtent=function(t){return t=e.indexOf(t),t=0>t?0/0:t/u+n,[t,t+1/u]},r.copy=function(){return ou(n,t,e)},i()}function cu(n,t){function e(e){return e>=e?t[da.bisect(n,e)]:void 0}return e.domain=function(t){return arguments.length?(n=t,e):n},e.range=function(n){return arguments.length?(t=n,e):t},e.invertExtent=function(e){return e=t.indexOf(e),[n[e-1],n[e]]},e.copy=function(){return cu(n,t)},e}function lu(n){function t(n){return+n}return t.invert=t,t.domain=t.range=function(e){return arguments.length?(n=e.map(t),t):n},t.ticks=function(t){return nu(n,t)},t.tickFormat=function(t,e){return tu(n,t,e)},t.copy=function(){return lu(n)},t}function su(n){return n.innerRadius}function fu(n){return n.outerRadius}function hu(n){return n.startAngle}function gu(n){return n.endAngle}function pu(n){for(var t,e,r,i=-1,u=n.length;++i<u;)t=n[i],e=t[0],r=t[1]+qc,t[0]=e*Math.cos(r),t[1]=e*Math.sin(r);return n}function du(n){function t(t){function c(){d.push("M",o(n(v),f),s,l(n(m.reverse()),f),"Z")}for(var h,g,p,d=[],m=[],v=[],y=-1,M=t.length,x=ht(e),b=ht(i),_=e===r?function(){return g}:ht(r),w=i===u?function(){return p}:ht(u);++y<M;)a.call(this,h=t[y],y)?(m.push([g=+x.call(this,h,y),p=+b.call(this,h,y)]),v.push([+_.call(this,h,y),+w.call(this,h,y)])):m.length&&(c(),m=[],v=[]);return m.length&&c(),d.length?d.join(""):null}var e=Ye,r=Ye,i=0,u=Re,a=Ut,o=Ue,c=o.key,l=o,s="L",f=.7;return t.x=function(n){return arguments.length?(e=r=n,t):r},t.x0=function(n){return arguments.length?(e=n,t):e},t.x1=function(n){return arguments.length?(r=n,t):r},t.y=function(n){return arguments.length?(i=u=n,t):u},t.y0=function(n){return arguments.length?(i=n,t):i},t.y1=function(n){return arguments.length?(u=n,t):u},t.defined=function(n){return arguments.length?(a=n,t):a},t.interpolate=function(n){return arguments.length?(c="function"==typeof n?o=n:(o=ac.get(n)||Ue).key,l=o.reverse||o,s=o.closed?"M":"L",t):c},t.tension=function(n){return arguments.length?(f=n,t):f},t}function mu(n){return n.radius}function vu(n){return[n.x,n.y]}function yu(n){return function(){var t=n.apply(this,arguments),e=t[0],r=t[1]+qc;return[e*Math.cos(r),e*Math.sin(r)]}}function Mu(){return 64}function xu(){return"circle"}function bu(n){var t=Math.sqrt(n/Wa);return"M0,"+t+"A"+t+","+t+" 0 1,1 0,"+-t+"A"+t+","+t+" 0 1,1 0,"+t+"Z"}function _u(n,t){return za(n,Hc),n.id=t,n}function wu(n,t,e,r){var i=n.id;return T(n,"function"==typeof e?function(n,u,a){n.__transition__[i].tween.set(t,r(e.call(n,n.__data__,u,a)))}:(e=r(e),function(n){n.__transition__[i].tween.set(t,e)}))}function Su(n){return null==n&&(n=""),function(){this.textContent=n}}function Eu(n,t,e,r){var u=n.__transition__||(n.__transition__={active:0,count:0}),a=u[e];if(!a){var o=r.time;return a=u[e]={tween:new i,time:o,ease:r.ease,delay:r.delay,duration:r.duration},++u.count,da.timer(function(r){function i(r){return u.active>e?l():(u.active=e,a.event&&a.event.start.call(n,s,t),a.tween.forEach(function(e,r){(r=r.call(n,s,t))&&p.push(r)}),c(r)||da.timer(c,0,o),1)}function c(r){if(u.active!==e)return l();for(var i=(r-h)/g,o=f(i),c=p.length;c>0;)p[--c].call(n,o);return i>=1?(l(),a.event&&a.event.end.call(n,s,t),1):void 0}function l(){return--u.count?delete u[e]:delete n.__transition__,1}var s=n.__data__,f=a.ease,h=a.delay,g=a.duration,p=[];return r>=h?i(r):da.timer(i,h,o),1},0,o),a}}function ku(n,t){n.attr("transform",function(n){return"translate("+t(n)+",0)"})}function Au(n,t){n.attr("transform",function(n){return"translate(0,"+t(n)+")"})}function Nu(n,t,e){if(r=[],e&&t.length>1){for(var r,i,u,a=Ii(n.domain()),o=-1,c=t.length,l=(t[1]-t[0])/++e;++o<c;)for(i=e;--i>0;)(u=+t[o]-i*l)>=a[0]&&r.push(u);for(--o,i=0;++i<e&&(u=+t[o]+i*l)<a[1];)r.push(u)}return r}function qu(){this._=new Date(arguments.length>1?Date.UTC.apply(this,arguments):arguments[0])}function Tu(n,t,e){function r(t){var e=n(t),r=u(e,1);return r-t>t-e?e:r}function i(e){return t(e=n(new Uc(e-1)),1),e}function u(n,e){return t(n=new Uc(+n),e),n}function a(n,r,u){var a=i(n),o=[];if(u>1)for(;r>a;)e(a)%u||o.push(new Date(+a)),t(a,1);else for(;r>a;)o.push(new Date(+a)),t(a,1);return o}function o(n,t,e){try{Uc=qu;var r=new qu;return r._=n,a(r,t,e)}finally{Uc=Date}}n.floor=n,n.round=r,n.ceil=i,n.offset=u,n.range=a;var c=n.utc=Cu(n);return c.floor=c,c.round=Cu(r),c.ceil=Cu(i),c.offset=Cu(u),c.range=o,n}function Cu(n){return function(t,e){try{Uc=qu;var r=new qu;return r._=t,n(r,e)._}finally{Uc=Date}}}function zu(n,t,e,r){for(var i,u,a=0,o=t.length,c=e.length;o>a;){if(r>=c)return-1;if(i=t.charCodeAt(a++),37===i){if(u=ll[t.charAt(a++)],!u||(r=u(n,e,r))<0)return-1}else if(i!=e.charCodeAt(r++))return-1}return r}function Du(n){return new RegExp("^(?:"+n.map(da.requote).join("|")+")","i")}function ju(n){for(var t=new i,e=-1,r=n.length;++e<r;)t.set(n[e].toLowerCase(),e);return t}function Lu(n,t,e){var r=0>n?"-":"",i=(r?-n:n)+"",u=i.length;return r+(e>u?new Array(e-u+1).join(t)+i:i)}function Hu(n,t,e){nl.lastIndex=0;var r=nl.exec(t.substring(e));return r?(n.w=tl.get(r[0].toLowerCase()),e+r[0].length):-1}function Fu(n,t,e){Kc.lastIndex=0;var r=Kc.exec(t.substring(e));return r?(n.w=Qc.get(r[0].toLowerCase()),e+r[0].length):-1}function Pu(n,t,e){sl.lastIndex=0;var r=sl.exec(t.substring(e,e+1));return r?(n.w=+r[0],e+r[0].length):-1}function Ou(n,t,e){sl.lastIndex=0;var r=sl.exec(t.substring(e));return r?(n.U=+r[0],e+r[0].length):-1}function Yu(n,t,e){sl.lastIndex=0;var r=sl.exec(t.substring(e));return r?(n.W=+r[0],e+r[0].length):-1}function Ru(n,t,e){il.lastIndex=0;var r=il.exec(t.substring(e));return r?(n.m=ul.get(r[0].toLowerCase()),e+r[0].length):-1}function Uu(n,t,e){el.lastIndex=0;var r=el.exec(t.substring(e));return r?(n.m=rl.get(r[0].toLowerCase()),e+r[0].length):-1}function Iu(n,t,e){return zu(n,cl.c.toString(),t,e)}function Vu(n,t,e){return zu(n,cl.x.toString(),t,e)}function Xu(n,t,e){return zu(n,cl.X.toString(),t,e)}function Zu(n,t,e){sl.lastIndex=0;var r=sl.exec(t.substring(e,e+4));return r?(n.y=+r[0],e+r[0].length):-1}function Bu(n,t,e){sl.lastIndex=0;var r=sl.exec(t.substring(e,e+2));return r?(n.y=$u(+r[0]),e+r[0].length):-1}function $u(n){return n+(n>68?1900:2e3)}function Wu(n,t,e){sl.lastIndex=0;var r=sl.exec(t.substring(e,e+2));return r?(n.m=r[0]-1,e+r[0].length):-1}function Ju(n,t,e){sl.lastIndex=0;var r=sl.exec(t.substring(e,e+2));return r?(n.d=+r[0],e+r[0].length):-1}function Gu(n,t,e){sl.lastIndex=0;var r=sl.exec(t.substring(e,e+3));return r?(n.j=+r[0],e+r[0].length):-1}function Ku(n,t,e){sl.lastIndex=0;var r=sl.exec(t.substring(e,e+2));return r?(n.H=+r[0],e+r[0].length):-1}function Qu(n,t,e){sl.lastIndex=0;var r=sl.exec(t.substring(e,e+2));return r?(n.M=+r[0],e+r[0].length):-1}function na(n,t,e){sl.lastIndex=0;var r=sl.exec(t.substring(e,e+2));return r?(n.S=+r[0],e+r[0].length):-1}function ta(n,t,e){sl.lastIndex=0;var r=sl.exec(t.substring(e,e+3));return r?(n.L=+r[0],e+r[0].length):-1}function ea(n,t,e){var r=fl.get(t.substring(e,e+=2).toLowerCase());return null==r?-1:(n.p=r,e)}function ra(n){var t=n.getTimezoneOffset(),e=t>0?"-":"+",r=~~(Math.abs(t)/60),i=Math.abs(t)%60;return e+Lu(r,"0",2)+Lu(i,"0",2)}function ia(n,t,e){al.lastIndex=0;var r=al.exec(t.substring(e,e+1));return r?e+r[0].length:-1}function ua(n){return n.toISOString()}function aa(n,t,e){function r(t){return n(t)}return r.invert=function(t){return oa(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain(t),r):n.domain().map(oa)},r.nice=function(n){return r.domain(Zi(r.domain(),n))},r.ticks=function(e,i){var u=Ii(r.domain());if("function"!=typeof e){var a=u[1]-u[0],o=a/e,c=da.bisect(gl,o);if(c==gl.length)return t.year(u,e);if(!c)return n.ticks(e).map(oa);Math.log(o/gl[c-1])<Math.log(gl[c]/o)&&--c,e=t[c],i=e[1],e=e[0].range}return e(u[0],new Date(+u[1]+1),i)},r.tickFormat=function(){return e},r.copy=function(){return aa(n.copy(),t,e)},Ji(r,n)}function oa(n){return new Date(n)}function ca(n){return function(t){for(var e=n.length-1,r=n[e];!r[1](t);)r=n[--e];return r[0](t)}}function la(n){var t=new Date(n,0,1);return t.setFullYear(n),t}function sa(n){var t=n.getFullYear(),e=la(t),r=la(t+1);return t+(n-e)/(r-e)}function fa(n){var t=new Date(Date.UTC(n,0,1));return t.setUTCFullYear(n),t}function ha(n){var t=n.getUTCFullYear(),e=fa(t),r=fa(t+1);return t+(n-e)/(r-e)}function ga(n){return JSON.parse(n.responseText)}function pa(n){var t=ma.createRange();return t.selectNode(ma.body),t.createContextualFragment(n.responseText)}var da={version:"3.2.6"};Date.now||(Date.now=function(){return+new Date});var ma=document,va=ma.documentElement,ya=window;try{ma.createElement("div").style.setProperty("opacity",0,"")}catch(Ma){var xa=ya.Element.prototype,ba=xa.setAttribute,_a=xa.setAttributeNS,wa=ya.CSSStyleDeclaration.prototype,Sa=wa.setProperty;xa.setAttribute=function(n,t){ba.call(this,n,t+"")},xa.setAttributeNS=function(n,t,e){_a.call(this,n,t,e+"")},wa.setProperty=function(n,t,e){Sa.call(this,n,t+"",e)}}da.ascending=function(n,t){return t>n?-1:n>t?1:n>=t?0:0/0},da.descending=function(n,t){return n>t?-1:t>n?1:t>=n?0:0/0},da.min=function(n,t){var e,r,i=-1,u=n.length;if(1===arguments.length){for(;++i<u&&!(null!=(e=n[i])&&e>=e);)e=void 0;for(;++i<u;)null!=(r=n[i])&&e>r&&(e=r)}else{for(;++i<u&&!(null!=(e=t.call(n,n[i],i))&&e>=e);)e=void 0;for(;++i<u;)null!=(r=t.call(n,n[i],i))&&e>r&&(e=r)}return e},da.max=function(n,t){var e,r,i=-1,u=n.length;if(1===arguments.length){for(;++i<u&&!(null!=(e=n[i])&&e>=e);)e=void 0;for(;++i<u;)null!=(r=n[i])&&r>e&&(e=r)}else{for(;++i<u&&!(null!=(e=t.call(n,n[i],i))&&e>=e);)e=void 0;for(;++i<u;)null!=(r=t.call(n,n[i],i))&&r>e&&(e=r)}return e},da.extent=function(n,t){var e,r,i,u=-1,a=n.length;if(1===arguments.length){for(;++u<a&&!(null!=(e=i=n[u])&&e>=e);)e=i=void 0;for(;++u<a;)null!=(r=n[u])&&(e>r&&(e=r),r>i&&(i=r))}else{for(;++u<a&&!(null!=(e=i=t.call(n,n[u],u))&&e>=e);)e=void 0;for(;++u<a;)null!=(r=t.call(n,n[u],u))&&(e>r&&(e=r),r>i&&(i=r))}return[e,i]},da.sum=function(n,t){var e,r=0,i=n.length,u=-1;if(1===arguments.length)for(;++u<i;)isNaN(e=+n[u])||(r+=e);else for(;++u<i;)isNaN(e=+t.call(n,n[u],u))||(r+=e);return r},da.mean=function(t,e){var r,i=t.length,u=0,a=-1,o=0;if(1===arguments.length)for(;++a<i;)n(r=t[a])&&(u+=(r-u)/++o);else for(;++a<i;)n(r=e.call(t,t[a],a))&&(u+=(r-u)/++o);return o?u:void 0},da.quantile=function(n,t){var e=(n.length-1)*t+1,r=Math.floor(e),i=+n[r-1],u=e-r;return u?i+u*(n[r]-i):i},da.median=function(t,e){return arguments.length>1&&(t=t.map(e)),t=t.filter(n),t.length?da.quantile(t.sort(da.ascending),.5):void 0},da.bisector=function(n){return{left:function(t,e,r,i){for(arguments.length<3&&(r=0),arguments.length<4&&(i=t.length);i>r;){var u=r+i>>>1;n.call(t,t[u],u)<e?r=u+1:i=u}return r},right:function(t,e,r,i){for(arguments.length<3&&(r=0),arguments.length<4&&(i=t.length);i>r;){var u=r+i>>>1;e<n.call(t,t[u],u)?i=u:r=u+1}return r}}};var Ea=da.bisector(function(n){return n});da.bisectLeft=Ea.left,da.bisect=da.bisectRight=Ea.right,da.shuffle=function(n){for(var t,e,r=n.length;r;)e=0|Math.random()*r--,t=n[r],n[r]=n[e],n[e]=t;return n},da.permute=function(n,t){for(var e=[],r=-1,i=t.length;++r<i;)e[r]=n[t[r]];return e},da.zip=function(){if(!(i=arguments.length))return[];for(var n=-1,e=da.min(arguments,t),r=new Array(e);++n<e;)for(var i,u=-1,a=r[n]=new Array(i);++u<i;)a[u]=arguments[u][n];return r},da.transpose=function(n){return da.zip.apply(da,n)},da.keys=function(n){var t=[];for(var e in n)t.push(e);return t},da.values=function(n){var t=[];for(var e in n)t.push(n[e]);return t},da.entries=function(n){var t=[];for(var e in n)t.push({key:e,value:n[e]});return t},da.merge=function(n){return Array.prototype.concat.apply([],n)},da.range=function(n,t,r){if(arguments.length<3&&(r=1,arguments.length<2&&(t=n,n=0)),1/0===(t-n)/r)throw new Error("infinite range");var i,u=[],a=e(Math.abs(r)),o=-1;if(n*=a,t*=a,r*=a,0>r)for(;(i=n+r*++o)>t;)u.push(i/a);else for(;(i=n+r*++o)<t;)u.push(i/a);return u},da.map=function(n){var t=new i;for(var e in n)t.set(e,n[e]);return t},r(i,{has:function(n){return ka+n in this},get:function(n){return this[ka+n]},set:function(n,t){return this[ka+n]=t},remove:function(n){return n=ka+n,n in this&&delete this[n]},keys:function(){var n=[];return this.forEach(function(t){n.push(t)}),n},values:function(){var n=[];return this.forEach(function(t,e){n.push(e)}),n},entries:function(){var n=[];return this.forEach(function(t,e){n.push({key:t,value:e})}),n},forEach:function(n){for(var t in this)t.charCodeAt(0)===Aa&&n.call(this,t.substring(1),this[t])
}});var ka="\0",Aa=ka.charCodeAt(0);da.nest=function(){function n(t,o,c){if(c>=a.length)return r?r.call(u,o):e?o.sort(e):o;for(var l,s,f,h,g=-1,p=o.length,d=a[c++],m=new i;++g<p;)(h=m.get(l=d(s=o[g])))?h.push(s):m.set(l,[s]);return t?(s=t(),f=function(e,r){s.set(e,n(t,r,c))}):(s={},f=function(e,r){s[e]=n(t,r,c)}),m.forEach(f),s}function t(n,e){if(e>=a.length)return n;var r=[],i=o[e++];return n.forEach(function(n,i){r.push({key:n,values:t(i,e)})}),i?r.sort(function(n,t){return i(n.key,t.key)}):r}var e,r,u={},a=[],o=[];return u.map=function(t,e){return n(e,t,0)},u.entries=function(e){return t(n(da.map,e,0),0)},u.key=function(n){return a.push(n),u},u.sortKeys=function(n){return o[a.length-1]=n,u},u.sortValues=function(n){return e=n,u},u.rollup=function(n){return r=n,u},u},da.set=function(n){var t=new u;if(n)for(var e=0;e<n.length;e++)t.add(n[e]);return t},r(u,{has:function(n){return ka+n in this},add:function(n){return this[ka+n]=!0,n},remove:function(n){return n=ka+n,n in this&&delete this[n]},values:function(){var n=[];return this.forEach(function(t){n.push(t)}),n},forEach:function(n){for(var t in this)t.charCodeAt(0)===Aa&&n.call(this,t.substring(1))}}),da.behavior={},da.rebind=function(n,t){for(var e,r=1,i=arguments.length;++r<i;)n[e=arguments[r]]=a(n,t,t[e]);return n};var Na=["webkit","ms","moz","Moz","o","O"],qa=l;try{qa(va.childNodes)[0].nodeType}catch(Ta){qa=c}da.dispatch=function(){for(var n=new f,t=-1,e=arguments.length;++t<e;)n[arguments[t]]=h(n);return n},f.prototype.on=function(n,t){var e=n.indexOf("."),r="";if(e>=0&&(r=n.substring(e+1),n=n.substring(0,e)),n)return arguments.length<2?this[n].on(r):this[n].on(r,t);if(2===arguments.length){if(null==t)for(n in this)this.hasOwnProperty(n)&&this[n].on(r,null);return this}},da.event=null,da.requote=function(n){return n.replace(Ca,"\\$&")};var Ca=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,za={}.__proto__?function(n,t){n.__proto__=t}:function(n,t){for(var e in t)n[e]=t[e]},Da=function(n,t){return t.querySelector(n)},ja=function(n,t){return t.querySelectorAll(n)},La=va[o(va,"matchesSelector")],Ha=function(n,t){return La.call(n,t)};"function"==typeof Sizzle&&(Da=function(n,t){return Sizzle(n,t)[0]||null},ja=function(n,t){return Sizzle.uniqueSort(Sizzle(n,t))},Ha=Sizzle.matchesSelector),da.selection=function(){return Ya};var Fa=da.selection.prototype=[];Fa.select=function(n){var t,e,r,i,u=[];n=v(n);for(var a=-1,o=this.length;++a<o;){u.push(t=[]),t.parentNode=(r=this[a]).parentNode;for(var c=-1,l=r.length;++c<l;)(i=r[c])?(t.push(e=n.call(i,i.__data__,c,a)),e&&"__data__"in i&&(e.__data__=i.__data__)):t.push(null)}return m(u)},Fa.selectAll=function(n){var t,e,r=[];n=y(n);for(var i=-1,u=this.length;++i<u;)for(var a=this[i],o=-1,c=a.length;++o<c;)(e=a[o])&&(r.push(t=qa(n.call(e,e.__data__,o,i))),t.parentNode=e);return m(r)};var Pa={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};da.ns={prefix:Pa,qualify:function(n){var t=n.indexOf(":"),e=n;return t>=0&&(e=n.substring(0,t),n=n.substring(t+1)),Pa.hasOwnProperty(e)?{space:Pa[e],local:n}:n}},Fa.attr=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node();return n=da.ns.qualify(n),n.local?e.getAttributeNS(n.space,n.local):e.getAttribute(n)}for(t in n)this.each(M(t,n[t]));return this}return this.each(M(n,t))},Fa.classed=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node(),r=(n=n.trim().split(/^|\s+/g)).length,i=-1;if(t=e.classList){for(;++i<r;)if(!t.contains(n[i]))return!1}else for(t=e.getAttribute("class");++i<r;)if(!b(n[i]).test(t))return!1;return!0}for(t in n)this.each(_(t,n[t]));return this}return this.each(_(n,t))},Fa.style=function(n,t,e){var r=arguments.length;if(3>r){if("string"!=typeof n){2>r&&(t="");for(e in n)this.each(S(e,n[e],t));return this}if(2>r)return ya.getComputedStyle(this.node(),null).getPropertyValue(n);e=""}return this.each(S(n,t,e))},Fa.property=function(n,t){if(arguments.length<2){if("string"==typeof n)return this.node()[n];for(t in n)this.each(E(t,n[t]));return this}return this.each(E(n,t))},Fa.text=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.textContent=null==t?"":t}:null==n?function(){this.textContent=""}:function(){this.textContent=n}):this.node().textContent},Fa.html=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.innerHTML=null==t?"":t}:null==n?function(){this.innerHTML=""}:function(){this.innerHTML=n}):this.node().innerHTML},Fa.append=function(n){return n=k(n),this.select(function(){return this.appendChild(n.apply(this,arguments))})},Fa.insert=function(n,t){return n=k(n),t=v(t),this.select(function(){return this.insertBefore(n.apply(this,arguments),t.apply(this,arguments))})},Fa.remove=function(){return this.each(function(){var n=this.parentNode;n&&n.removeChild(this)})},Fa.data=function(n,t){function e(n,e){var r,u,a,o=n.length,f=e.length,h=Math.min(o,f),g=new Array(f),p=new Array(f),d=new Array(o);if(t){var m,v=new i,y=new i,M=[];for(r=-1;++r<o;)m=t.call(u=n[r],u.__data__,r),v.has(m)?d[r]=u:v.set(m,u),M.push(m);for(r=-1;++r<f;)m=t.call(e,a=e[r],r),(u=v.get(m))?(g[r]=u,u.__data__=a):y.has(m)||(p[r]=A(a)),y.set(m,a),v.remove(m);for(r=-1;++r<o;)v.has(M[r])&&(d[r]=n[r])}else{for(r=-1;++r<h;)u=n[r],a=e[r],u?(u.__data__=a,g[r]=u):p[r]=A(a);for(;f>r;++r)p[r]=A(e[r]);for(;o>r;++r)d[r]=n[r]}p.update=g,p.parentNode=g.parentNode=d.parentNode=n.parentNode,c.push(p),l.push(g),s.push(d)}var r,u,a=-1,o=this.length;if(!arguments.length){for(n=new Array(o=(r=this[0]).length);++a<o;)(u=r[a])&&(n[a]=u.__data__);return n}var c=C([]),l=m([]),s=m([]);if("function"==typeof n)for(;++a<o;)e(r=this[a],n.call(r,r.parentNode.__data__,a));else for(;++a<o;)e(r=this[a],n);return l.enter=function(){return c},l.exit=function(){return s},l},Fa.datum=function(n){return arguments.length?this.property("__data__",n):this.property("__data__")},Fa.filter=function(n){var t,e,r,i=[];"function"!=typeof n&&(n=N(n));for(var u=0,a=this.length;a>u;u++){i.push(t=[]),t.parentNode=(e=this[u]).parentNode;for(var o=0,c=e.length;c>o;o++)(r=e[o])&&n.call(r,r.__data__,o)&&t.push(r)}return m(i)},Fa.order=function(){for(var n=-1,t=this.length;++n<t;)for(var e,r=this[n],i=r.length-1,u=r[i];--i>=0;)(e=r[i])&&(u&&u!==e.nextSibling&&u.parentNode.insertBefore(e,u),u=e);return this},Fa.sort=function(n){n=q.apply(this,arguments);for(var t=-1,e=this.length;++t<e;)this[t].sort(n);return this.order()},Fa.each=function(n){return T(this,function(t,e,r){n.call(t,t.__data__,e,r)})},Fa.call=function(n){var t=qa(arguments);return n.apply(t[0]=this,t),this},Fa.empty=function(){return!this.node()},Fa.node=function(){for(var n=0,t=this.length;t>n;n++)for(var e=this[n],r=0,i=e.length;i>r;r++){var u=e[r];if(u)return u}return null},Fa.size=function(){var n=0;return this.each(function(){++n}),n};var Oa=[];da.selection.enter=C,da.selection.enter.prototype=Oa,Oa.append=Fa.append,Oa.empty=Fa.empty,Oa.node=Fa.node,Oa.call=Fa.call,Oa.size=Fa.size,Oa.select=function(n){for(var t,e,r,i,u,a=[],o=-1,c=this.length;++o<c;){r=(i=this[o]).update,a.push(t=[]),t.parentNode=i.parentNode;for(var l=-1,s=i.length;++l<s;)(u=i[l])?(t.push(r[l]=e=n.call(i.parentNode,u.__data__,l,o)),e.__data__=u.__data__):t.push(null)}return m(a)},Oa.insert=function(n,t){return arguments.length<2&&(t=z(this)),Fa.insert.call(this,n,t)},Fa.transition=function(){for(var n,t,e=zc||++Fc,r=[],i=Dc||{time:Date.now(),ease:Nr,delay:0,duration:250},u=-1,a=this.length;++u<a;){r.push(n=[]);for(var o=this[u],c=-1,l=o.length;++c<l;)(t=o[c])&&Eu(t,c,e,i),n.push(t)}return _u(r,e)},da.select=function(n){var t=["string"==typeof n?Da(n,ma):n];return t.parentNode=va,m([t])},da.selectAll=function(n){var t=qa("string"==typeof n?ja(n,ma):n);return t.parentNode=va,m([t])};var Ya=da.select(va);Fa.on=function(n,t,e){var r=arguments.length;if(3>r){if("string"!=typeof n){2>r&&(t=!1);for(e in n)this.each(D(e,n[e],t));return this}if(2>r)return(r=this.node()["__on"+n])&&r._;e=!1}return this.each(D(n,t,e))};var Ra=da.map({mouseenter:"mouseover",mouseleave:"mouseout"});Ra.forEach(function(n){"on"+n in ma&&Ra.remove(n)});var Ua=o(va.style,"userSelect"),Ia=0;da.mouse=function(n){return F(n,p())};var Va=/WebKit/.test(ya.navigator.userAgent)?-1:0;da.touches=function(n,t){return arguments.length<2&&(t=p().touches),t?qa(t).map(function(t){var e=F(n,t);return e.identifier=t.identifier,e}):[]},da.behavior.drag=function(){function n(){this.on("mousedown.drag",a).on("touchstart.drag",o)}function t(){return da.event.changedTouches[0].identifier}function e(n,t){return da.touches(n).filter(function(n){return n.identifier===t})[0]}function r(n,t,e,r){return function(){function a(){if(!s)return o();var n=t(s,g),e=n[0]-d[0],r=n[1]-d[1];m|=e|r,d=n,f({type:"drag",x:n[0]+c[0],y:n[1]+c[1],dx:e,dy:r})}function o(){v.on(e+"."+p,null).on(r+"."+p,null),y(m&&da.event.target===h),f({type:"dragend"})}var c,l=this,s=l.parentNode,f=i.of(l,arguments),h=da.event.target,g=n(),p=null==g?"drag":"drag-"+g,d=t(s,g),m=0,v=da.select(ya).on(e+"."+p,a).on(r+"."+p,o),y=H();u?(c=u.apply(l,arguments),c=[c.x-d[0],c.y-d[1]]):c=[0,0],f({type:"dragstart"})}}var i=d(n,"drag","dragstart","dragend"),u=null,a=r(s,da.mouse,"mousemove","mouseup"),o=r(t,e,"touchmove","touchend");return n.origin=function(t){return arguments.length?(u=t,n):u},da.rebind(n,i,"on")},da.behavior.zoom=function(){function n(){this.on(E,o).on(Ba+".zoom",l).on(k,s).on("dblclick.zoom",f).on("touchstart.zoom",c)}function t(n){return[(n[0]-_[0])/w,(n[1]-_[1])/w]}function e(n){return[n[0]*w+_[0],n[1]*w+_[1]]}function r(n){w=Math.max(S[0],Math.min(S[1],n))}function i(n,t){t=e(t),_[0]+=n[0]-t[0],_[1]+=n[1]-t[1]}function u(){y&&y.domain(v.range().map(function(n){return(n-_[0])/w}).map(v.invert)),x&&x.domain(M.range().map(function(n){return(n-_[1])/w}).map(M.invert))}function a(n){u(),n({type:"zoom",scale:w,translate:_})}function o(){function n(){c=1,i(da.mouse(r),f),a(u)}function e(){l.on(k,ya===r?s:null).on(A,null),h(c&&da.event.target===o)}var r=this,u=N.of(r,arguments),o=da.event.target,c=0,l=da.select(ya).on(k,n).on(A,e),f=t(da.mouse(r)),h=H()}function c(){function n(){var n=da.touches(u),t=n[0],e=h[t.identifier];if(c=n[1]){var c,l=h[c.identifier],s=da.event.scale;if(null==s){var f=(f=c[0]-t[0])*f+(f=c[1]-t[1])*f;s=p&&Math.sqrt(f/p)}t=[(t[0]+c[0])/2,(t[1]+c[1])/2],e=[(e[0]+l[0])/2,(e[1]+l[1])/2],r(s*m)}b=null,i(t,e),a(o)}function e(){v.on(f,null).on(d,null),y()}var u=this,o=N.of(u,arguments),c=da.touches(u),l=Date.now(),s="zoom-"+da.event.changedTouches[0].identifier,f="touchmove."+s,d="touchend."+s,v=da.select(ya).on(f,n).on(d,e).on(E,null).on(k,null),y=H();if(m=w,h={},p=0,c.forEach(function(n){h[n.identifier]=t(n)}),1===c.length){if(500>l-b){var M=c[0],x=t(c[0]);r(2*w),i(M,x),g(),a(o)}b=l}else if(c.length>1){var M=c[0],_=c[1],S=M[0]-_[0],A=M[1]-_[1];p=S*S+A*A}}function l(){g(),h||(h=t(da.mouse(this))),r(Math.pow(2,.002*Xa())*w),i(da.mouse(this),h),a(N.of(this,arguments))}function s(){h=null}function f(){var n=da.mouse(this),e=t(n),u=Math.log(w)/Math.LN2;r(Math.pow(2,da.event.shiftKey?Math.ceil(u)-1:Math.floor(u)+1)),i(n,e),a(N.of(this,arguments))}var h,p,m,v,y,M,x,b,_=[0,0],w=1,S=Za,E="mousedown.zoom",k="mousemove.zoom",A="mouseup.zoom",N=d(n,"zoom");return n.translate=function(t){return arguments.length?(_=t.map(Number),u(),n):_},n.scale=function(t){return arguments.length?(w=+t,u(),n):w},n.scaleExtent=function(t){return arguments.length?(S=null==t?Za:t.map(Number),n):S},n.x=function(t){return arguments.length?(y=t,v=t.copy(),_=[0,0],w=1,n):y},n.y=function(t){return arguments.length?(x=t,M=t.copy(),_=[0,0],w=1,n):x},da.rebind(n,N,"on")};var Xa,Za=[0,1/0],Ba="onwheel"in ma?(Xa=function(){return-da.event.deltaY*(da.event.deltaMode?120:1)},"wheel"):"onmousewheel"in ma?(Xa=function(){return da.event.wheelDelta},"mousewheel"):(Xa=function(){return-da.event.detail},"MozMousePixelScroll");P.prototype.toString=function(){return this.rgb()+""},da.hsl=function(n,t,e){return 1===arguments.length?n instanceof Y?O(n.h,n.s,n.l):ot(""+n,ct,O):O(+n,+t,+e)};var $a=Y.prototype=new P;$a.brighter=function(n){return n=Math.pow(.7,arguments.length?n:1),O(this.h,this.s,this.l/n)},$a.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),O(this.h,this.s,n*this.l)},$a.rgb=function(){return R(this.h,this.s,this.l)};var Wa=Math.PI,Ja=1e-6,Ga=Ja*Ja,Ka=Wa/180,Qa=180/Wa;da.hcl=function(n,t,e){return 1===arguments.length?n instanceof W?$(n.h,n.c,n.l):n instanceof K?nt(n.l,n.a,n.b):nt((n=lt((n=da.rgb(n)).r,n.g,n.b)).l,n.a,n.b):$(+n,+t,+e)};var no=W.prototype=new P;no.brighter=function(n){return $(this.h,this.c,Math.min(100,this.l+to*(arguments.length?n:1)))},no.darker=function(n){return $(this.h,this.c,Math.max(0,this.l-to*(arguments.length?n:1)))},no.rgb=function(){return J(this.h,this.c,this.l).rgb()},da.lab=function(n,t,e){return 1===arguments.length?n instanceof K?G(n.l,n.a,n.b):n instanceof W?J(n.l,n.c,n.h):lt((n=da.rgb(n)).r,n.g,n.b):G(+n,+t,+e)};var to=18,eo=.95047,ro=1,io=1.08883,uo=K.prototype=new P;uo.brighter=function(n){return G(Math.min(100,this.l+to*(arguments.length?n:1)),this.a,this.b)},uo.darker=function(n){return G(Math.max(0,this.l-to*(arguments.length?n:1)),this.a,this.b)},uo.rgb=function(){return Q(this.l,this.a,this.b)},da.rgb=function(n,t,e){return 1===arguments.length?n instanceof ut?it(n.r,n.g,n.b):ot(""+n,it,R):it(~~n,~~t,~~e)};var ao=ut.prototype=new P;ao.brighter=function(n){n=Math.pow(.7,arguments.length?n:1);var t=this.r,e=this.g,r=this.b,i=30;return t||e||r?(t&&i>t&&(t=i),e&&i>e&&(e=i),r&&i>r&&(r=i),it(Math.min(255,Math.floor(t/n)),Math.min(255,Math.floor(e/n)),Math.min(255,Math.floor(r/n)))):it(i,i,i)},ao.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),it(Math.floor(n*this.r),Math.floor(n*this.g),Math.floor(n*this.b))},ao.hsl=function(){return ct(this.r,this.g,this.b)},ao.toString=function(){return"#"+at(this.r)+at(this.g)+at(this.b)};var oo=da.map({aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"});oo.forEach(function(n,t){oo.set(n,ot(t,it,R))}),da.functor=ht,da.xhr=pt(gt),da.dsv=function(n,t){function e(n,e,u){arguments.length<3&&(u=e,e=null);var a=da.xhr(n,t,u);return a.row=function(n){return arguments.length?a.response(null==(e=n)?r:i(n)):e},a.row(e)}function r(n){return e.parse(n.responseText)}function i(n){return function(t){return e.parse(t.responseText,n)}}function a(t){return t.map(o).join(n)}function o(n){return c.test(n)?'"'+n.replace(/\"/g,'""')+'"':n}var c=new RegExp('["'+n+"\n]"),l=n.charCodeAt(0);return e.parse=function(n,t){var r;return e.parseRows(n,function(n,e){if(r)return r(n,e-1);var i=new Function("d","return {"+n.map(function(n,t){return JSON.stringify(n)+": d["+t+"]"}).join(",")+"}");r=t?function(n,e){return t(i(n),e)}:i})},e.parseRows=function(n,t){function e(){if(s>=c)return a;if(i)return i=!1,u;var t=s;if(34===n.charCodeAt(t)){for(var e=t;e++<c;)if(34===n.charCodeAt(e)){if(34!==n.charCodeAt(e+1))break;++e}s=e+2;var r=n.charCodeAt(e+1);return 13===r?(i=!0,10===n.charCodeAt(e+2)&&++s):10===r&&(i=!0),n.substring(t+1,e).replace(/""/g,'"')}for(;c>s;){var r=n.charCodeAt(s++),o=1;if(10===r)i=!0;else if(13===r)i=!0,10===n.charCodeAt(s)&&(++s,++o);else if(r!==l)continue;return n.substring(t,s-o)}return n.substring(t)}for(var r,i,u={},a={},o=[],c=n.length,s=0,f=0;(r=e())!==a;){for(var h=[];r!==u&&r!==a;)h.push(r),r=e();(!t||(h=t(h,f++)))&&o.push(h)}return o},e.format=function(t){if(Array.isArray(t[0]))return e.formatRows(t);var r=new u,i=[];return t.forEach(function(n){for(var t in n)r.has(t)||i.push(r.add(t))}),[i.map(o).join(n)].concat(t.map(function(t){return i.map(function(n){return o(t[n])}).join(n)})).join("\n")},e.formatRows=function(n){return n.map(a).join("\n")},e},da.csv=da.dsv(",","text/csv"),da.tsv=da.dsv("	","text/tab-separated-values");var co,lo,so,fo;da.timer=function(n,t,e){if(arguments.length<3){if(arguments.length<2)t=0;else if(!isFinite(t))return;e=Date.now()}var r=e+t,i={callback:n,time:r,next:null};lo?lo.next=i:co=i,lo=i,so||(fo=clearTimeout(fo),so=1,ho(vt))},da.timer.flush=function(){yt(),Mt()};var ho=ya[o(ya,"requestAnimationFrame")]||function(n){setTimeout(n,17)},go=".",po=",",mo=[3,3],vo="$",yo=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"].map(xt);da.formatPrefix=function(n,t){var e=0;return n&&(0>n&&(n*=-1),t&&(n=da.round(n,bt(n,t))),e=1+Math.floor(1e-12+Math.log(n)/Math.LN10),e=Math.max(-24,Math.min(24,3*Math.floor((0>=e?e+1:e-1)/3)))),yo[8+e/3]},da.round=function(n,t){return t?Math.round(n*(t=Math.pow(10,t)))/t:Math.round(n)},da.format=function(n){var t=Mo.exec(n),e=t[1]||" ",r=t[2]||">",i=t[3]||"",u=t[4]||"",a=t[5],o=+t[6],c=t[7],l=t[8],s=t[9],f=1,h="",g=!1;switch(l&&(l=+l.substring(1)),(a||"0"===e&&"="===r)&&(a=e="0",r="=",c&&(o-=Math.floor((o-1)/4))),s){case"n":c=!0,s="g";break;case"%":f=100,h="%",s="f";break;case"p":f=100,h="%",s="r";break;case"b":case"o":case"x":case"X":"#"===u&&(u="0"+s.toLowerCase());case"c":case"d":g=!0,l=0;break;case"s":f=-1,s="r"}"#"===u?u="":"$"===u&&(u=vo),"r"!=s||l||(s="g"),null!=l&&("g"==s?l=Math.max(1,Math.min(21,l)):("e"==s||"f"==s)&&(l=Math.max(0,Math.min(20,l)))),s=xo.get(s)||_t;var p=a&&c;return function(n){if(g&&n%1)return"";var t=0>n||0===n&&0>1/n?(n=-n,"-"):i;if(0>f){var d=da.formatPrefix(n,l);n=d.scale(n),h=d.symbol}else n*=f;n=s(n,l);var m=n.lastIndexOf("."),v=0>m?n:n.substring(0,m),y=0>m?"":go+n.substring(m+1);!a&&c&&(v=bo(v));var M=u.length+v.length+y.length+(p?0:t.length),x=o>M?new Array(M=o-M+1).join(e):"";return p&&(v=bo(x+v)),t+=u,n=v+y,("<"===r?t+n+x:">"===r?x+t+n:"^"===r?x.substring(0,M>>=1)+t+n+x.substring(M):t+(p?n:x+n))+h}};var Mo=/(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,xo=da.map({b:function(n){return n.toString(2)},c:function(n){return String.fromCharCode(n)},o:function(n){return n.toString(8)},x:function(n){return n.toString(16)},X:function(n){return n.toString(16).toUpperCase()},g:function(n,t){return n.toPrecision(t)},e:function(n,t){return n.toExponential(t)},f:function(n,t){return n.toFixed(t)},r:function(n,t){return(n=da.round(n,bt(n,t))).toFixed(Math.max(0,Math.min(20,bt(n*(1+1e-15),t))))}}),bo=gt;if(mo){var _o=mo.length;bo=function(n){for(var t=n.length,e=[],r=0,i=mo[0];t>0&&i>0;)e.push(n.substring(t-=i,t+i)),i=mo[r=(r+1)%_o];return e.reverse().join(po)}}da.geo={},wt.prototype={s:0,t:0,add:function(n){St(n,this.t,wo),St(wo.s,this.s,this),this.s?this.t+=wo.t:this.s=wo.t},reset:function(){this.s=this.t=0},valueOf:function(){return this.s}};var wo=new wt;da.geo.stream=function(n,t){n&&So.hasOwnProperty(n.type)?So[n.type](n,t):Et(n,t)};var So={Feature:function(n,t){Et(n.geometry,t)},FeatureCollection:function(n,t){for(var e=n.features,r=-1,i=e.length;++r<i;)Et(e[r].geometry,t)}},Eo={Sphere:function(n,t){t.sphere()},Point:function(n,t){var e=n.coordinates;t.point(e[0],e[1])},MultiPoint:function(n,t){for(var e,r=n.coordinates,i=-1,u=r.length;++i<u;)e=r[i],t.point(e[0],e[1])},LineString:function(n,t){kt(n.coordinates,t,0)},MultiLineString:function(n,t){for(var e=n.coordinates,r=-1,i=e.length;++r<i;)kt(e[r],t,0)},Polygon:function(n,t){At(n.coordinates,t)},MultiPolygon:function(n,t){for(var e=n.coordinates,r=-1,i=e.length;++r<i;)At(e[r],t)},GeometryCollection:function(n,t){for(var e=n.geometries,r=-1,i=e.length;++r<i;)Et(e[r],t)}};da.geo.area=function(n){return ko=0,da.geo.stream(n,No),ko};var ko,Ao=new wt,No={sphere:function(){ko+=4*Wa},point:s,lineStart:s,lineEnd:s,polygonStart:function(){Ao.reset(),No.lineStart=Nt},polygonEnd:function(){var n=2*Ao;ko+=0>n?4*Wa+n:n,No.lineStart=No.lineEnd=No.point=s}};da.geo.bounds=function(){function n(n,t){M.push(x=[s=n,h=n]),f>t&&(f=t),t>g&&(g=t)}function t(t,e){var r=qt([t*Ka,e*Ka]);if(v){var i=Ct(v,r),u=[i[1],-i[0],0],a=Ct(u,i);jt(a),a=Lt(a);var c=t-p,l=c>0?1:-1,d=a[0]*Qa*l,m=Math.abs(c)>180;if(m^(d>l*p&&l*t>d)){var y=a[1]*Qa;y>g&&(g=y)}else if(d=(d+360)%360-180,m^(d>l*p&&l*t>d)){var y=-a[1]*Qa;f>y&&(f=y)}else f>e&&(f=e),e>g&&(g=e);m?p>t?o(s,t)>o(s,h)&&(h=t):o(t,h)>o(s,h)&&(s=t):h>=s?(s>t&&(s=t),t>h&&(h=t)):t>p?o(s,t)>o(s,h)&&(h=t):o(t,h)>o(s,h)&&(s=t)}else n(t,e);v=r,p=t}function e(){b.point=t}function r(){x[0]=s,x[1]=h,b.point=n,v=null}function i(n,e){if(v){var r=n-p;y+=Math.abs(r)>180?r+(r>0?360:-360):r}else d=n,m=e;No.point(n,e),t(n,e)}function u(){No.lineStart()}function a(){i(d,m),No.lineEnd(),Math.abs(y)>Ja&&(s=-(h=180)),x[0]=s,x[1]=h,v=null}function o(n,t){return(t-=n)<0?t+360:t}function c(n,t){return n[0]-t[0]}function l(n,t){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}var s,f,h,g,p,d,m,v,y,M,x,b={point:n,lineStart:e,lineEnd:r,polygonStart:function(){b.point=i,b.lineStart=u,b.lineEnd=a,y=0,No.polygonStart()},polygonEnd:function(){No.polygonEnd(),b.point=n,b.lineStart=e,b.lineEnd=r,0>Ao?(s=-(h=180),f=-(g=90)):y>Ja?g=90:-Ja>y&&(f=-90),x[0]=s,x[1]=h}};return function(n){g=h=-(s=f=1/0),M=[],da.geo.stream(n,b);var t=M.length;if(t){M.sort(c);for(var e,r=1,i=M[0],u=[i];t>r;++r)e=M[r],l(e[0],i)||l(e[1],i)?(o(i[0],e[1])>o(i[0],i[1])&&(i[1]=e[1]),o(e[0],i[1])>o(i[0],i[1])&&(i[0]=e[0])):u.push(i=e);for(var a,e,p=-1/0,t=u.length-1,r=0,i=u[t];t>=r;i=e,++r)e=u[r],(a=o(i[1],e[0]))>p&&(p=a,s=e[0],h=i[1])}return M=x=null,1/0===s||1/0===f?[[0/0,0/0],[0/0,0/0]]:[[s,f],[h,g]]}}(),da.geo.centroid=function(n){qo=To=Co=zo=Do=jo=Lo=Ho=Fo=Po=Oo=0,da.geo.stream(n,Yo);var t=Fo,e=Po,r=Oo,i=t*t+e*e+r*r;return Ga>i&&(t=jo,e=Lo,r=Ho,Ja>To&&(t=Co,e=zo,r=Do),i=t*t+e*e+r*r,Ga>i)?[0/0,0/0]:[Math.atan2(e,t)*Qa,V(r/Math.sqrt(i))*Qa]};var qo,To,Co,zo,Do,jo,Lo,Ho,Fo,Po,Oo,Yo={sphere:s,point:Ft,lineStart:Ot,lineEnd:Yt,polygonStart:function(){Yo.lineStart=Rt},polygonEnd:function(){Yo.lineStart=Ot}},Ro=Xt(Ut,Jt,Kt,Qt),Uo=[-Wa,0],Io=1e9;(da.geo.conicEqualArea=function(){return ie(ue)}).raw=ue,da.geo.albers=function(){return da.geo.conicEqualArea().rotate([96,0]).center([-.6,38.7]).parallels([29.5,45.5]).scale(1070)},da.geo.albersUsa=function(){function n(n){var u=n[0],a=n[1];return t=null,e(u,a),t||(r(u,a),t)||i(u,a),t}var t,e,r,i,u=da.geo.albers(),a=da.geo.conicEqualArea().rotate([154,0]).center([-2,58.5]).parallels([55,65]),o=da.geo.conicEqualArea().rotate([157,0]).center([-3,19.9]).parallels([8,18]),c={point:function(n,e){t=[n,e]}};return n.invert=function(n){var t=u.scale(),e=u.translate(),r=(n[0]-e[0])/t,i=(n[1]-e[1])/t;return(i>=.12&&.234>i&&r>=-.425&&-.214>r?a:i>=.166&&.234>i&&r>=-.214&&-.115>r?o:u).invert(n)},n.stream=function(n){var t=u.stream(n),e=a.stream(n),r=o.stream(n);return{point:function(n,i){t.point(n,i),e.point(n,i),r.point(n,i)},sphere:function(){t.sphere(),e.sphere(),r.sphere()},lineStart:function(){t.lineStart(),e.lineStart(),r.lineStart()},lineEnd:function(){t.lineEnd(),e.lineEnd(),r.lineEnd()},polygonStart:function(){t.polygonStart(),e.polygonStart(),r.polygonStart()},polygonEnd:function(){t.polygonEnd(),e.polygonEnd(),r.polygonEnd()}}},n.precision=function(t){return arguments.length?(u.precision(t),a.precision(t),o.precision(t),n):u.precision()},n.scale=function(t){return arguments.length?(u.scale(t),a.scale(.35*t),o.scale(t),n.translate(u.translate())):u.scale()},n.translate=function(t){if(!arguments.length)return u.translate();var l=u.scale(),s=+t[0],f=+t[1];return e=u.translate(t).clipExtent([[s-.455*l,f-.238*l],[s+.455*l,f+.238*l]]).stream(c).point,r=a.translate([s-.307*l,f+.201*l]).clipExtent([[s-.425*l+Ja,f+.12*l+Ja],[s-.214*l-Ja,f+.234*l-Ja]]).stream(c).point,i=o.translate([s-.205*l,f+.212*l]).clipExtent([[s-.214*l+Ja,f+.166*l+Ja],[s-.115*l-Ja,f+.234*l-Ja]]).stream(c).point,n},n.scale(1070)};var Vo,Xo,Zo,Bo,$o,Wo,Jo={point:s,lineStart:s,lineEnd:s,polygonStart:function(){Xo=0,Jo.lineStart=ae},polygonEnd:function(){Jo.lineStart=Jo.lineEnd=Jo.point=s,Vo+=Math.abs(Xo/2)}},Go={point:oe,lineStart:s,lineEnd:s,polygonStart:s,polygonEnd:s},Ko={point:se,lineStart:fe,lineEnd:he,polygonStart:function(){Ko.lineStart=ge},polygonEnd:function(){Ko.point=se,Ko.lineStart=fe,Ko.lineEnd=he}};da.geo.path=function(){function n(n){return n&&("function"==typeof o&&u.pointRadius(+o.apply(this,arguments)),a&&a.valid||(a=i(u)),da.geo.stream(n,a)),u.result()}function t(){return a=null,n}var e,r,i,u,a,o=4.5;return n.area=function(n){return Vo=0,da.geo.stream(n,i(Jo)),Vo},n.centroid=function(n){return Co=zo=Do=jo=Lo=Ho=Fo=Po=Oo=0,da.geo.stream(n,i(Ko)),Oo?[Fo/Oo,Po/Oo]:Ho?[jo/Ho,Lo/Ho]:Do?[Co/Do,zo/Do]:[0/0,0/0]},n.bounds=function(n){return $o=Wo=-(Zo=Bo=1/0),da.geo.stream(n,i(Go)),[[Zo,Bo],[$o,Wo]]},n.projection=function(n){return arguments.length?(i=(e=n)?n.stream||me(n):gt,t()):e},n.context=function(n){return arguments.length?(u=null==(r=n)?new ce:new pe(n),"function"!=typeof o&&u.pointRadius(o),t()):r},n.pointRadius=function(t){return arguments.length?(o="function"==typeof t?t:(u.pointRadius(+t),+t),n):o},n.projection(da.geo.albersUsa()).context(null)},da.geo.projection=ve,da.geo.projectionMutator=ye,(da.geo.equirectangular=function(){return ve(xe)}).raw=xe.invert=xe,da.geo.rotation=function(n){function t(t){return t=n(t[0]*Ka,t[1]*Ka),t[0]*=Qa,t[1]*=Qa,t}return n=be(n[0]%360*Ka,n[1]*Ka,n.length>2?n[2]*Ka:0),t.invert=function(t){return t=n.invert(t[0]*Ka,t[1]*Ka),t[0]*=Qa,t[1]*=Qa,t},t},da.geo.circle=function(){function n(){var n="function"==typeof r?r.apply(this,arguments):r,t=be(-n[0]*Ka,-n[1]*Ka,0).invert,i=[];return e(null,null,1,{point:function(n,e){i.push(n=t(n,e)),n[0]*=Qa,n[1]*=Qa}}),{type:"Polygon",coordinates:[i]}}var t,e,r=[0,0],i=6;return n.origin=function(t){return arguments.length?(r=t,n):r},n.angle=function(r){return arguments.length?(e=Ee((t=+r)*Ka,i*Ka),n):t},n.precision=function(r){return arguments.length?(e=Ee(t*Ka,(i=+r)*Ka),n):i},n.angle(90)},da.geo.distance=function(n,t){var e,r=(t[0]-n[0])*Ka,i=n[1]*Ka,u=t[1]*Ka,a=Math.sin(r),o=Math.cos(r),c=Math.sin(i),l=Math.cos(i),s=Math.sin(u),f=Math.cos(u);return Math.atan2(Math.sqrt((e=f*a)*e+(e=l*s-c*f*o)*e),c*s+l*f*o)},da.geo.graticule=function(){function n(){return{type:"MultiLineString",coordinates:t()}}function t(){return da.range(Math.ceil(u/m)*m,i,m).map(h).concat(da.range(Math.ceil(l/v)*v,c,v).map(g)).concat(da.range(Math.ceil(r/p)*p,e,p).filter(function(n){return Math.abs(n%m)>Ja}).map(s)).concat(da.range(Math.ceil(o/d)*d,a,d).filter(function(n){return Math.abs(n%v)>Ja}).map(f))}var e,r,i,u,a,o,c,l,s,f,h,g,p=10,d=p,m=90,v=360,y=2.5;return n.lines=function(){return t().map(function(n){return{type:"LineString",coordinates:n}})},n.outline=function(){return{type:"Polygon",coordinates:[h(u).concat(g(c).slice(1),h(i).reverse().slice(1),g(l).reverse().slice(1))]}},n.extent=function(t){return arguments.length?n.majorExtent(t).minorExtent(t):n.minorExtent()},n.majorExtent=function(t){return arguments.length?(u=+t[0][0],i=+t[1][0],l=+t[0][1],c=+t[1][1],u>i&&(t=u,u=i,i=t),l>c&&(t=l,l=c,c=t),n.precision(y)):[[u,l],[i,c]]},n.minorExtent=function(t){return arguments.length?(r=+t[0][0],e=+t[1][0],o=+t[0][1],a=+t[1][1],r>e&&(t=r,r=e,e=t),o>a&&(t=o,o=a,a=t),n.precision(y)):[[r,o],[e,a]]},n.step=function(t){return arguments.length?n.majorStep(t).minorStep(t):n.minorStep()},n.majorStep=function(t){return arguments.length?(m=+t[0],v=+t[1],n):[m,v]},n.minorStep=function(t){return arguments.length?(p=+t[0],d=+t[1],n):[p,d]},n.precision=function(t){return arguments.length?(y=+t,s=Ae(o,a,90),f=Ne(r,e,y),h=Ae(l,c,90),g=Ne(u,i,y),n):y},n.majorExtent([[-180,-90+Ja],[180,90-Ja]]).minorExtent([[-180,-80-Ja],[180,80+Ja]])},da.geo.greatArc=function(){function n(){return{type:"LineString",coordinates:[t||r.apply(this,arguments),e||i.apply(this,arguments)]}}var t,e,r=qe,i=Te;return n.distance=function(){return da.geo.distance(t||r.apply(this,arguments),e||i.apply(this,arguments))},n.source=function(e){return arguments.length?(r=e,t="function"==typeof e?null:e,n):r},n.target=function(t){return arguments.length?(i=t,e="function"==typeof t?null:t,n):i},n.precision=function(){return arguments.length?n:0},n},da.geo.interpolate=function(n,t){return Ce(n[0]*Ka,n[1]*Ka,t[0]*Ka,t[1]*Ka)},da.geo.length=function(n){return Qo=0,da.geo.stream(n,nc),Qo};var Qo,nc={sphere:s,point:s,lineStart:ze,lineEnd:s,polygonStart:s,polygonEnd:s},tc=De(function(n){return Math.sqrt(2/(1+n))},function(n){return 2*Math.asin(n/2)});(da.geo.azimuthalEqualArea=function(){return ve(tc)}).raw=tc;var ec=De(function(n){var t=Math.acos(n);return t&&t/Math.sin(t)},gt);(da.geo.azimuthalEquidistant=function(){return ve(ec)}).raw=ec,(da.geo.conicConformal=function(){return ie(je)}).raw=je,(da.geo.conicEquidistant=function(){return ie(Le)}).raw=Le;var rc=De(function(n){return 1/n},Math.atan);(da.geo.gnomonic=function(){return ve(rc)}).raw=rc,He.invert=function(n,t){return[n,2*Math.atan(Math.exp(t))-Wa/2]},(da.geo.mercator=function(){return Fe(He)}).raw=He;var ic=De(function(){return 1},Math.asin);(da.geo.orthographic=function(){return ve(ic)}).raw=ic;var uc=De(function(n){return 1/(1+n)},function(n){return 2*Math.atan(n)});(da.geo.stereographic=function(){return ve(uc)}).raw=uc,Pe.invert=function(n,t){return[Math.atan2(X(n),Math.cos(t)),V(Math.sin(t)/Z(n))]},(da.geo.transverseMercator=function(){return Fe(Pe)}).raw=Pe,da.geom={},da.svg={},da.svg.line=function(){return Oe(gt)
};var ac=da.map({linear:Ue,"linear-closed":Ie,step:Ve,"step-before":Xe,"step-after":Ze,basis:Ke,"basis-open":Qe,"basis-closed":nr,bundle:tr,cardinal:We,"cardinal-open":Be,"cardinal-closed":$e,monotone:or});ac.forEach(function(n,t){t.key=n,t.closed=/-closed$/.test(n)});var oc=[0,2/3,1/3,0],cc=[0,1/3,2/3,0],lc=[0,1/6,2/3,1/6];da.geom.hull=function(n){function t(n){if(n.length<3)return[];var t,i,u,a,o,c,l,s,f,h,g,p,d=ht(e),m=ht(r),v=n.length,y=v-1,M=[],x=[],b=0;if(d===Ye&&r===Re)t=n;else for(u=0,t=[];v>u;++u)t.push([+d.call(this,i=n[u],u),+m.call(this,i,u)]);for(u=1;v>u;++u)(t[u][1]<t[b][1]||t[u][1]==t[b][1]&&t[u][0]<t[b][0])&&(b=u);for(u=0;v>u;++u)u!==b&&(c=t[u][1]-t[b][1],o=t[u][0]-t[b][0],M.push({angle:Math.atan2(c,o),index:u}));for(M.sort(function(n,t){return n.angle-t.angle}),g=M[0].angle,h=M[0].index,f=0,u=1;y>u;++u){if(a=M[u].index,g==M[u].angle){if(o=t[h][0]-t[b][0],c=t[h][1]-t[b][1],l=t[a][0]-t[b][0],s=t[a][1]-t[b][1],o*o+c*c>=l*l+s*s){M[u].index=-1;continue}M[f].index=-1}g=M[u].angle,f=u,h=a}for(x.push(b),u=0,a=0;2>u;++a)M[a].index>-1&&(x.push(M[a].index),u++);for(p=x.length;y>a;++a)if(!(M[a].index<0)){for(;!cr(x[p-2],x[p-1],M[a].index,t);)--p;x[p++]=M[a].index}var _=[];for(u=p-1;u>=0;--u)_.push(n[x[u]]);return _}var e=Ye,r=Re;return arguments.length?t(n):(t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t)},da.geom.polygon=function(n){return za(n,sc),n};var sc=da.geom.polygon.prototype=[];sc.area=function(){for(var n,t=-1,e=this.length,r=this[e-1],i=0;++t<e;)n=r,r=this[t],i+=n[1]*r[0]-n[0]*r[1];return.5*i},sc.centroid=function(n){var t,e,r=-1,i=this.length,u=0,a=0,o=this[i-1];for(arguments.length||(n=-1/(6*this.area()));++r<i;)t=o,o=this[r],e=t[0]*o[1]-o[0]*t[1],u+=(t[0]+o[0])*e,a+=(t[1]+o[1])*e;return[u*n,a*n]},sc.clip=function(n){for(var t,e,r,i,u,a,o=fr(n),c=-1,l=this.length-fr(this),s=this[l-1];++c<l;){for(t=n.slice(),n.length=0,i=this[c],u=t[(r=t.length-o)-1],e=-1;++e<r;)a=t[e],lr(a,s,i)?(lr(u,s,i)||n.push(sr(u,a,s,i)),n.push(a)):lr(u,s,i)&&n.push(sr(u,a,s,i)),u=a;o&&n.push(n[0]),s=i}return n},da.geom.delaunay=function(n){var t=n.map(function(){return[]}),e=[];return hr(n,function(e){t[e.region.l.index].push(n[e.region.r.index])}),t.forEach(function(t,r){var i=n[r],u=i[0],a=i[1];t.forEach(function(n){n.angle=Math.atan2(n[0]-u,n[1]-a)}),t.sort(function(n,t){return n.angle-t.angle});for(var o=0,c=t.length-1;c>o;o++)e.push([i,t[o],t[o+1]])}),e},da.geom.voronoi=function(n){function t(n){var t,u,a,o=n.map(function(){return[]}),c=ht(e),l=ht(r),s=n.length,f=1e6;if(c===Ye&&l===Re)t=n;else for(t=new Array(s),a=0;s>a;++a)t[a]=[+c.call(this,u=n[a],a),+l.call(this,u,a)];if(hr(t,function(n){var t,e,r,i,u,a;1===n.a&&n.b>=0?(t=n.ep.r,e=n.ep.l):(t=n.ep.l,e=n.ep.r),1===n.a?(u=t?t.y:-f,r=n.c-n.b*u,a=e?e.y:f,i=n.c-n.b*a):(r=t?t.x:-f,u=n.c-n.a*r,i=e?e.x:f,a=n.c-n.a*i);var c=[r,u],l=[i,a];o[n.region.l.index].push(c,l),o[n.region.r.index].push(c,l)}),o=o.map(function(n,e){var r=t[e][0],i=t[e][1],u=n.map(function(n){return Math.atan2(n[0]-r,n[1]-i)}),a=da.range(n.length).sort(function(n,t){return u[n]-u[t]});return a.filter(function(n,t){return!t||u[n]-u[a[t-1]]>Ja}).map(function(t){return n[t]})}),o.forEach(function(n,e){var r=n.length;if(!r)return n.push([-f,-f],[-f,f],[f,f],[f,-f]);if(!(r>2)){var i=t[e],u=n[0],a=n[1],o=i[0],c=i[1],l=u[0],s=u[1],h=a[0],g=a[1],p=Math.abs(h-l),d=g-s;if(Math.abs(d)<Ja){var m=s>c?-f:f;n.push([-f,m],[f,m])}else if(Ja>p){var v=l>o?-f:f;n.push([v,-f],[v,f])}else{var m=(l-o)*(g-s)>(h-l)*(s-c)?f:-f,y=Math.abs(d)-p;Math.abs(y)<Ja?n.push([0>d?m:-m,m]):(y>0&&(m*=-1),n.push([-f,m],[f,m]))}}}),i)for(a=0;s>a;++a)i.clip(o[a]);for(a=0;s>a;++a)o[a].point=n[a];return o}var e=Ye,r=Re,i=null;return arguments.length?t(n):(t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t.clipExtent=function(n){if(!arguments.length)return i&&[i[0],i[2]];if(null==n)i=null;else{var e=+n[0][0],r=+n[0][1],u=+n[1][0],a=+n[1][1];i=da.geom.polygon([[e,r],[e,a],[u,a],[u,r]])}return t},t.size=function(n){return arguments.length?t.clipExtent(n&&[[0,0],n]):i&&i[2]},t.links=function(n){var t,i,u,a=n.map(function(){return[]}),o=[],c=ht(e),l=ht(r),s=n.length;if(c===Ye&&l===Re)t=n;else for(t=new Array(s),u=0;s>u;++u)t[u]=[+c.call(this,i=n[u],u),+l.call(this,i,u)];return hr(t,function(t){var e=t.region.l.index,r=t.region.r.index;a[e][r]||(a[e][r]=a[r][e]=!0,o.push({source:n[e],target:n[r]}))}),o},t.triangles=function(n){if(e===Ye&&r===Re)return da.geom.delaunay(n);for(var t,i=new Array(c),u=ht(e),a=ht(r),o=-1,c=n.length;++o<c;)(i[o]=[+u.call(this,t=n[o],o),+a.call(this,t,o)]).data=t;return da.geom.delaunay(i).map(function(n){return n.map(function(n){return n.data})})},t)};var fc={l:"r",r:"l"};da.geom.quadtree=function(n,t,e,r,i){function u(n){function u(n,t,e,r,i,u,a,o){if(!isNaN(e)&&!isNaN(r))if(n.leaf){var c=n.x,s=n.y;if(null!=c)if(Math.abs(c-e)+Math.abs(s-r)<.01)l(n,t,e,r,i,u,a,o);else{var f=n.point;n.x=n.y=n.point=null,l(n,f,c,s,i,u,a,o),l(n,t,e,r,i,u,a,o)}else n.x=e,n.y=r,n.point=t}else l(n,t,e,r,i,u,a,o)}function l(n,t,e,r,i,a,o,c){var l=.5*(i+o),s=.5*(a+c),f=e>=l,h=r>=s,g=(h<<1)+f;n.leaf=!1,n=n.nodes[g]||(n.nodes[g]=dr()),f?i=l:o=l,h?a=s:c=s,u(n,t,e,r,i,a,o,c)}var s,f,h,g,p,d,m,v,y,M=ht(o),x=ht(c);if(null!=t)d=t,m=e,v=r,y=i;else if(v=y=-(d=m=1/0),f=[],h=[],p=n.length,a)for(g=0;p>g;++g)s=n[g],s.x<d&&(d=s.x),s.y<m&&(m=s.y),s.x>v&&(v=s.x),s.y>y&&(y=s.y),f.push(s.x),h.push(s.y);else for(g=0;p>g;++g){var b=+M(s=n[g],g),_=+x(s,g);d>b&&(d=b),m>_&&(m=_),b>v&&(v=b),_>y&&(y=_),f.push(b),h.push(_)}var w=v-d,S=y-m;w>S?y=m+w:v=d+S;var E=dr();if(E.add=function(n){u(E,n,+M(n,++g),+x(n,g),d,m,v,y)},E.visit=function(n){mr(n,E,d,m,v,y)},g=-1,null==t){for(;++g<p;)u(E,n[g],f[g],h[g],d,m,v,y);--g}else n.forEach(E.add);return f=h=n=s=null,E}var a,o=Ye,c=Re;return(a=arguments.length)?(o=gr,c=pr,3===a&&(i=e,r=t,e=t=0),u(n)):(u.x=function(n){return arguments.length?(o=n,u):o},u.y=function(n){return arguments.length?(c=n,u):c},u.extent=function(n){return arguments.length?(null==n?t=e=r=i=null:(t=+n[0][0],e=+n[0][1],r=+n[1][0],i=+n[1][1]),u):null==t?null:[[t,e],[r,i]]},u.size=function(n){return arguments.length?(null==n?t=e=r=i=null:(t=e=0,r=+n[0],i=+n[1]),u):null==t?null:[r-t,i-e]},u)},da.interpolateRgb=vr,da.interpolateObject=yr,da.interpolateNumber=Mr,da.interpolateString=xr;var hc=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;da.interpolate=br,da.interpolators=[function(n,t){var e=typeof t;return("string"===e?oo.has(t)||/^(#|rgb\(|hsl\()/.test(t)?vr:xr:t instanceof P?vr:"object"===e?Array.isArray(t)?_r:yr:Mr)(n,t)}],da.interpolateArray=_r;var gc=function(){return gt},pc=da.map({linear:gc,poly:qr,quad:function(){return kr},cubic:function(){return Ar},sin:function(){return Tr},exp:function(){return Cr},circle:function(){return zr},elastic:Dr,back:jr,bounce:function(){return Lr}}),dc=da.map({"in":gt,out:Sr,"in-out":Er,"out-in":function(n){return Er(Sr(n))}});da.ease=function(n){var t=n.indexOf("-"),e=t>=0?n.substring(0,t):n,r=t>=0?n.substring(t+1):"in";return e=pc.get(e)||gc,r=dc.get(r)||gt,wr(r(e.apply(null,Array.prototype.slice.call(arguments,1))))},da.interpolateHcl=Hr,da.interpolateHsl=Fr,da.interpolateLab=Pr,da.interpolateRound=Or,da.transform=function(n){var t=ma.createElementNS(da.ns.prefix.svg,"g");return(da.transform=function(n){if(null!=n){t.setAttribute("transform",n);var e=t.transform.baseVal.consolidate()}return new Yr(e?e.matrix:mc)})(n)},Yr.prototype.toString=function(){return"translate("+this.translate+")rotate("+this.rotate+")skewX("+this.skew+")scale("+this.scale+")"};var mc={a:1,b:0,c:0,d:1,e:0,f:0};da.interpolateTransform=Vr,da.layout={},da.layout.bundle=function(){return function(n){for(var t=[],e=-1,r=n.length;++e<r;)t.push(Br(n[e]));return t}},da.layout.chord=function(){function n(){var n,l,f,h,g,p={},d=[],m=da.range(u),v=[];for(e=[],r=[],n=0,h=-1;++h<u;){for(l=0,g=-1;++g<u;)l+=i[h][g];d.push(l),v.push(da.range(u)),n+=l}for(a&&m.sort(function(n,t){return a(d[n],d[t])}),o&&v.forEach(function(n,t){n.sort(function(n,e){return o(i[t][n],i[t][e])})}),n=(2*Wa-s*u)/n,l=0,h=-1;++h<u;){for(f=l,g=-1;++g<u;){var y=m[h],M=v[y][g],x=i[y][M],b=l,_=l+=x*n;p[y+"-"+M]={index:y,subindex:M,startAngle:b,endAngle:_,value:x}}r[y]={index:y,startAngle:f,endAngle:l,value:(l-f)/n},l+=s}for(h=-1;++h<u;)for(g=h-1;++g<u;){var w=p[h+"-"+g],S=p[g+"-"+h];(w.value||S.value)&&e.push(w.value<S.value?{source:S,target:w}:{source:w,target:S})}c&&t()}function t(){e.sort(function(n,t){return c((n.source.value+n.target.value)/2,(t.source.value+t.target.value)/2)})}var e,r,i,u,a,o,c,l={},s=0;return l.matrix=function(n){return arguments.length?(u=(i=n)&&i.length,e=r=null,l):i},l.padding=function(n){return arguments.length?(s=n,e=r=null,l):s},l.sortGroups=function(n){return arguments.length?(a=n,e=r=null,l):a},l.sortSubgroups=function(n){return arguments.length?(o=n,e=null,l):o},l.sortChords=function(n){return arguments.length?(c=n,e&&t(),l):c},l.chords=function(){return e||n(),e},l.groups=function(){return r||n(),r},l},da.layout.force=function(){function n(n){return function(t,e,r,i){if(t.point!==n){var u=t.cx-n.x,a=t.cy-n.y,o=1/Math.sqrt(u*u+a*a);if(d>(i-e)*o){var c=t.charge*o*o;return n.px-=u*c,n.py-=a*c,!0}if(t.point&&isFinite(o)){var c=t.pointCharge*o*o;n.px-=u*c,n.py-=a*c}}return!t.charge}}function t(n){n.px=da.event.x,n.py=da.event.y,o.resume()}var e,r,i,u,a,o={},c=da.dispatch("start","tick","end"),l=[1,1],s=.9,f=vc,h=yc,g=-30,p=.1,d=.8,m=[],v=[];return o.tick=function(){if((r*=.99)<.005)return c.end({type:"end",alpha:r=0}),!0;var t,e,o,f,h,d,y,M,x,b=m.length,_=v.length;for(e=0;_>e;++e)o=v[e],f=o.source,h=o.target,M=h.x-f.x,x=h.y-f.y,(d=M*M+x*x)&&(d=r*u[e]*((d=Math.sqrt(d))-i[e])/d,M*=d,x*=d,h.x-=M*(y=f.weight/(h.weight+f.weight)),h.y-=x*y,f.x+=M*(y=1-y),f.y+=x*y);if((y=r*p)&&(M=l[0]/2,x=l[1]/2,e=-1,y))for(;++e<b;)o=m[e],o.x+=(M-o.x)*y,o.y+=(x-o.y)*y;if(g)for(ni(t=da.geom.quadtree(m),r,a),e=-1;++e<b;)(o=m[e]).fixed||t.visit(n(o));for(e=-1;++e<b;)o=m[e],o.fixed?(o.x=o.px,o.y=o.py):(o.x-=(o.px-(o.px=o.x))*s,o.y-=(o.py-(o.py=o.y))*s);c.tick({type:"tick",alpha:r})},o.nodes=function(n){return arguments.length?(m=n,o):m},o.links=function(n){return arguments.length?(v=n,o):v},o.size=function(n){return arguments.length?(l=n,o):l},o.linkDistance=function(n){return arguments.length?(f="function"==typeof n?n:+n,o):f},o.distance=o.linkDistance,o.linkStrength=function(n){return arguments.length?(h="function"==typeof n?n:+n,o):h},o.friction=function(n){return arguments.length?(s=+n,o):s},o.charge=function(n){return arguments.length?(g="function"==typeof n?n:+n,o):g},o.gravity=function(n){return arguments.length?(p=+n,o):p},o.theta=function(n){return arguments.length?(d=+n,o):d},o.alpha=function(n){return arguments.length?(n=+n,r?r=n>0?n:0:n>0&&(c.start({type:"start",alpha:r=n}),da.timer(o.tick)),o):r},o.start=function(){function n(n,r){for(var i,u=t(e),a=-1,o=u.length;++a<o;)if(!isNaN(i=u[a][n]))return i;return Math.random()*r}function t(){if(!c){for(c=[],r=0;p>r;++r)c[r]=[];for(r=0;d>r;++r){var n=v[r];c[n.source.index].push(n.target),c[n.target.index].push(n.source)}}return c[e]}var e,r,c,s,p=m.length,d=v.length,y=l[0],M=l[1];for(e=0;p>e;++e)(s=m[e]).index=e,s.weight=0;for(e=0;d>e;++e)s=v[e],"number"==typeof s.source&&(s.source=m[s.source]),"number"==typeof s.target&&(s.target=m[s.target]),++s.source.weight,++s.target.weight;for(e=0;p>e;++e)s=m[e],isNaN(s.x)&&(s.x=n("x",y)),isNaN(s.y)&&(s.y=n("y",M)),isNaN(s.px)&&(s.px=s.x),isNaN(s.py)&&(s.py=s.y);if(i=[],"function"==typeof f)for(e=0;d>e;++e)i[e]=+f.call(this,v[e],e);else for(e=0;d>e;++e)i[e]=f;if(u=[],"function"==typeof h)for(e=0;d>e;++e)u[e]=+h.call(this,v[e],e);else for(e=0;d>e;++e)u[e]=h;if(a=[],"function"==typeof g)for(e=0;p>e;++e)a[e]=+g.call(this,m[e],e);else for(e=0;p>e;++e)a[e]=g;return o.resume()},o.resume=function(){return o.alpha(.1)},o.stop=function(){return o.alpha(0)},o.drag=function(){return e||(e=da.behavior.drag().origin(gt).on("dragstart.force",Jr).on("drag.force",t).on("dragend.force",Gr)),arguments.length?(this.on("mouseover.force",Kr).on("mouseout.force",Qr).call(e),void 0):e},da.rebind(o,c,"on")};var vc=20,yc=1;da.layout.hierarchy=function(){function n(t,a,o){var c=i.call(e,t,a);if(t.depth=a,o.push(t),c&&(l=c.length)){for(var l,s,f=-1,h=t.children=[],g=0,p=a+1;++f<l;)s=n(c[f],p,o),s.parent=t,h.push(s),g+=s.value;r&&h.sort(r),u&&(t.value=g)}else u&&(t.value=+u.call(e,t,a)||0);return t}function t(n,r){var i=n.children,a=0;if(i&&(o=i.length))for(var o,c=-1,l=r+1;++c<o;)a+=t(i[c],l);else u&&(a=+u.call(e,n,r)||0);return u&&(n.value=a),a}function e(t){var e=[];return n(t,0,e),e}var r=ii,i=ei,u=ri;return e.sort=function(n){return arguments.length?(r=n,e):r},e.children=function(n){return arguments.length?(i=n,e):i},e.value=function(n){return arguments.length?(u=n,e):u},e.revalue=function(n){return t(n,0),n},e},da.layout.partition=function(){function n(t,e,r,i){var u=t.children;if(t.x=e,t.y=t.depth*i,t.dx=r,t.dy=i,u&&(a=u.length)){var a,o,c,l=-1;for(r=t.value?r/t.value:0;++l<a;)n(o=u[l],e,c=o.value*r,i),e+=c}}function t(n){var e=n.children,r=0;if(e&&(i=e.length))for(var i,u=-1;++u<i;)r=Math.max(r,t(e[u]));return 1+r}function e(e,u){var a=r.call(this,e,u);return n(a[0],0,i[0],i[1]/t(a[0])),a}var r=da.layout.hierarchy(),i=[1,1];return e.size=function(n){return arguments.length?(i=n,e):i},ti(e,r)},da.layout.pie=function(){function n(u){var a=u.map(function(e,r){return+t.call(n,e,r)}),o=+("function"==typeof r?r.apply(this,arguments):r),c=(("function"==typeof i?i.apply(this,arguments):i)-o)/da.sum(a),l=da.range(u.length);null!=e&&l.sort(e===Mc?function(n,t){return a[t]-a[n]}:function(n,t){return e(u[n],u[t])});var s=[];return l.forEach(function(n){var t;s[n]={data:u[n],value:t=a[n],startAngle:o,endAngle:o+=t*c}}),s}var t=Number,e=Mc,r=0,i=2*Wa;return n.value=function(e){return arguments.length?(t=e,n):t},n.sort=function(t){return arguments.length?(e=t,n):e},n.startAngle=function(t){return arguments.length?(r=t,n):r},n.endAngle=function(t){return arguments.length?(i=t,n):i},n};var Mc={};da.layout.stack=function(){function n(o,c){var l=o.map(function(e,r){return t.call(n,e,r)}),s=l.map(function(t){return t.map(function(t,e){return[u.call(n,t,e),a.call(n,t,e)]})}),f=e.call(n,s,c);l=da.permute(l,f),s=da.permute(s,f);var h,g,p,d=r.call(n,s,c),m=l.length,v=l[0].length;for(g=0;v>g;++g)for(i.call(n,l[0][g],p=d[g],s[0][g][1]),h=1;m>h;++h)i.call(n,l[h][g],p+=s[h-1][g][1],s[h][g][1]);return o}var t=gt,e=li,r=si,i=ci,u=ai,a=oi;return n.values=function(e){return arguments.length?(t=e,n):t},n.order=function(t){return arguments.length?(e="function"==typeof t?t:xc.get(t)||li,n):e},n.offset=function(t){return arguments.length?(r="function"==typeof t?t:bc.get(t)||si,n):r},n.x=function(t){return arguments.length?(u=t,n):u},n.y=function(t){return arguments.length?(a=t,n):a},n.out=function(t){return arguments.length?(i=t,n):i},n};var xc=da.map({"inside-out":function(n){var t,e,r=n.length,i=n.map(fi),u=n.map(hi),a=da.range(r).sort(function(n,t){return i[n]-i[t]}),o=0,c=0,l=[],s=[];for(t=0;r>t;++t)e=a[t],c>o?(o+=u[e],l.push(e)):(c+=u[e],s.push(e));return s.reverse().concat(l)},reverse:function(n){return da.range(n.length).reverse()},"default":li}),bc=da.map({silhouette:function(n){var t,e,r,i=n.length,u=n[0].length,a=[],o=0,c=[];for(e=0;u>e;++e){for(t=0,r=0;i>t;t++)r+=n[t][e][1];r>o&&(o=r),a.push(r)}for(e=0;u>e;++e)c[e]=(o-a[e])/2;return c},wiggle:function(n){var t,e,r,i,u,a,o,c,l,s=n.length,f=n[0],h=f.length,g=[];for(g[0]=c=l=0,e=1;h>e;++e){for(t=0,i=0;s>t;++t)i+=n[t][e][1];for(t=0,u=0,o=f[e][0]-f[e-1][0];s>t;++t){for(r=0,a=(n[t][e][1]-n[t][e-1][1])/(2*o);t>r;++r)a+=(n[r][e][1]-n[r][e-1][1])/o;u+=a*n[t][e][1]}g[e]=c-=i?u/i*o:0,l>c&&(l=c)}for(e=0;h>e;++e)g[e]-=l;return g},expand:function(n){var t,e,r,i=n.length,u=n[0].length,a=1/i,o=[];for(e=0;u>e;++e){for(t=0,r=0;i>t;t++)r+=n[t][e][1];if(r)for(t=0;i>t;t++)n[t][e][1]/=r;else for(t=0;i>t;t++)n[t][e][1]=a}for(e=0;u>e;++e)o[e]=0;return o},zero:si});da.layout.histogram=function(){function n(n,u){for(var a,o,c=[],l=n.map(e,this),s=r.call(this,l,u),f=i.call(this,s,l,u),u=-1,h=l.length,g=f.length-1,p=t?1:1/h;++u<g;)a=c[u]=[],a.dx=f[u+1]-(a.x=f[u]),a.y=0;if(g>0)for(u=-1;++u<h;)o=l[u],o>=s[0]&&o<=s[1]&&(a=c[da.bisect(f,o,1,g)-1],a.y+=p,a.push(n[u]));return c}var t=!0,e=Number,r=mi,i=pi;return n.value=function(t){return arguments.length?(e=t,n):e},n.range=function(t){return arguments.length?(r=ht(t),n):r},n.bins=function(t){return arguments.length?(i="number"==typeof t?function(n){return di(n,t)}:ht(t),n):i},n.frequency=function(e){return arguments.length?(t=!!e,n):t},n},da.layout.tree=function(){function n(n,u){function a(n,t){var r=n.children,i=n._tree;if(r&&(u=r.length)){for(var u,o,l,s=r[0],f=s,h=-1;++h<u;)l=r[h],a(l,o),f=c(l,o,f),o=l;Ei(n);var g=.5*(s._tree.prelim+l._tree.prelim);t?(i.prelim=t._tree.prelim+e(n,t),i.mod=i.prelim-g):i.prelim=g}else t&&(i.prelim=t._tree.prelim+e(n,t))}function o(n,t){n.x=n._tree.prelim+t;var e=n.children;if(e&&(r=e.length)){var r,i=-1;for(t+=n._tree.mod;++i<r;)o(e[i],t)}}function c(n,t,r){if(t){for(var i,u=n,a=n,o=t,c=n.parent.children[0],l=u._tree.mod,s=a._tree.mod,f=o._tree.mod,h=c._tree.mod;o=Mi(o),u=yi(u),o&&u;)c=yi(c),a=Mi(a),a._tree.ancestor=n,i=o._tree.prelim+f-u._tree.prelim-l+e(o,u),i>0&&(ki(Ai(o,n,r),n,i),l+=i,s+=i),f+=o._tree.mod,l+=u._tree.mod,h+=c._tree.mod,s+=a._tree.mod;o&&!Mi(a)&&(a._tree.thread=o,a._tree.mod+=f-s),u&&!yi(c)&&(c._tree.thread=u,c._tree.mod+=l-h,r=n)}return r}var l=t.call(this,n,u),s=l[0];Si(s,function(n,t){n._tree={ancestor:n,prelim:0,mod:0,change:0,shift:0,number:t?t._tree.number+1:0}}),a(s),o(s,-s._tree.prelim);var f=xi(s,_i),h=xi(s,bi),g=xi(s,wi),p=f.x-e(f,h)/2,d=h.x+e(h,f)/2,m=g.depth||1;return Si(s,i?function(n){n.x*=r[0],n.y=n.depth*r[1],delete n._tree}:function(n){n.x=(n.x-p)/(d-p)*r[0],n.y=n.depth/m*r[1],delete n._tree}),l}var t=da.layout.hierarchy().sort(null).value(null),e=vi,r=[1,1],i=!1;return n.separation=function(t){return arguments.length?(e=t,n):e},n.size=function(t){return arguments.length?(i=null==(r=t),n):i?null:r},n.nodeSize=function(t){return arguments.length?(i=null!=(r=t),n):i?r:null},ti(n,t)},da.layout.pack=function(){function n(n,u){var a=e.call(this,n,u),o=a[0],c=i[0],l=i[1],s=null==t?Math.sqrt:"function"==typeof t?t:function(){return t};if(o.x=o.y=0,Si(o,function(n){n.r=+s(n.value)}),Si(o,zi),r){var f=r*(t?1:Math.max(2*o.r/c,2*o.r/l))/2;Si(o,function(n){n.r+=f}),Si(o,zi),Si(o,function(n){n.r-=f})}return Li(o,c/2,l/2,t?1:1/Math.max(2*o.r/c,2*o.r/l)),a}var t,e=da.layout.hierarchy().sort(Ni),r=0,i=[1,1];return n.size=function(t){return arguments.length?(i=t,n):i},n.radius=function(e){return arguments.length?(t=null==e||"function"==typeof e?e:+e,n):t},n.padding=function(t){return arguments.length?(r=+t,n):r},ti(n,e)},da.layout.cluster=function(){function n(n,u){var a,o=t.call(this,n,u),c=o[0],l=0;Si(c,function(n){var t=n.children;t&&t.length?(n.x=Pi(t),n.y=Fi(t)):(n.x=a?l+=e(n,a):0,n.y=0,a=n)});var s=Oi(c),f=Yi(c),h=s.x-e(s,f)/2,g=f.x+e(f,s)/2;return Si(c,i?function(n){n.x=(n.x-c.x)*r[0],n.y=(c.y-n.y)*r[1]}:function(n){n.x=(n.x-h)/(g-h)*r[0],n.y=(1-(c.y?n.y/c.y:1))*r[1]}),o}var t=da.layout.hierarchy().sort(null).value(null),e=vi,r=[1,1],i=!1;return n.separation=function(t){return arguments.length?(e=t,n):e},n.size=function(t){return arguments.length?(i=null==(r=t),n):i?null:r},n.nodeSize=function(t){return arguments.length?(i=null!=(r=t),n):i?r:null},ti(n,t)},da.layout.treemap=function(){function n(n,t){for(var e,r,i=-1,u=n.length;++i<u;)r=(e=n[i]).value*(0>t?0:t),e.area=isNaN(r)||0>=r?0:r}function t(e){var u=e.children;if(u&&u.length){var a,o,c,l=f(e),s=[],h=u.slice(),p=1/0,d="slice"===g?l.dx:"dice"===g?l.dy:"slice-dice"===g?1&e.depth?l.dy:l.dx:Math.min(l.dx,l.dy);for(n(h,l.dx*l.dy/e.value),s.area=0;(c=h.length)>0;)s.push(a=h[c-1]),s.area+=a.area,"squarify"!==g||(o=r(s,d))<=p?(h.pop(),p=o):(s.area-=s.pop().area,i(s,d,l,!1),d=Math.min(l.dx,l.dy),s.length=s.area=0,p=1/0);s.length&&(i(s,d,l,!0),s.length=s.area=0),u.forEach(t)}}function e(t){var r=t.children;if(r&&r.length){var u,a=f(t),o=r.slice(),c=[];for(n(o,a.dx*a.dy/t.value),c.area=0;u=o.pop();)c.push(u),c.area+=u.area,null!=u.z&&(i(c,u.z?a.dx:a.dy,a,!o.length),c.length=c.area=0);r.forEach(e)}}function r(n,t){for(var e,r=n.area,i=0,u=1/0,a=-1,o=n.length;++a<o;)(e=n[a].area)&&(u>e&&(u=e),e>i&&(i=e));return r*=r,t*=t,r?Math.max(t*i*p/r,r/(t*u*p)):1/0}function i(n,t,e,r){var i,u=-1,a=n.length,o=e.x,l=e.y,s=t?c(n.area/t):0;if(t==e.dx){for((r||s>e.dy)&&(s=e.dy);++u<a;)i=n[u],i.x=o,i.y=l,i.dy=s,o+=i.dx=Math.min(e.x+e.dx-o,s?c(i.area/s):0);i.z=!0,i.dx+=e.x+e.dx-o,e.y+=s,e.dy-=s}else{for((r||s>e.dx)&&(s=e.dx);++u<a;)i=n[u],i.x=o,i.y=l,i.dx=s,l+=i.dy=Math.min(e.y+e.dy-l,s?c(i.area/s):0);i.z=!1,i.dy+=e.y+e.dy-l,e.x+=s,e.dx-=s}}function u(r){var i=a||o(r),u=i[0];return u.x=0,u.y=0,u.dx=l[0],u.dy=l[1],a&&o.revalue(u),n([u],u.dx*u.dy/u.value),(a?e:t)(u),h&&(a=i),i}var a,o=da.layout.hierarchy(),c=Math.round,l=[1,1],s=null,f=Ri,h=!1,g="squarify",p=.5*(1+Math.sqrt(5));return u.size=function(n){return arguments.length?(l=n,u):l},u.padding=function(n){function t(t){var e=n.call(u,t,t.depth);return null==e?Ri(t):Ui(t,"number"==typeof e?[e,e,e,e]:e)}function e(t){return Ui(t,n)}if(!arguments.length)return s;var r;return f=null==(s=n)?Ri:"function"==(r=typeof n)?t:"number"===r?(n=[n,n,n,n],e):e,u},u.round=function(n){return arguments.length?(c=n?Math.round:Number,u):c!=Number},u.sticky=function(n){return arguments.length?(h=n,a=null,u):h},u.ratio=function(n){return arguments.length?(p=n,u):p},u.mode=function(n){return arguments.length?(g=n+"",u):g},ti(u,o)},da.random={normal:function(n,t){var e=arguments.length;return 2>e&&(t=1),1>e&&(n=0),function(){var e,r,i;do e=2*Math.random()-1,r=2*Math.random()-1,i=e*e+r*r;while(!i||i>1);return n+t*e*Math.sqrt(-2*Math.log(i)/i)}},logNormal:function(){var n=da.random.normal.apply(da,arguments);return function(){return Math.exp(n())}},irwinHall:function(n){return function(){for(var t=0,e=0;n>e;e++)t+=Math.random();return t/n}}},da.scale={};var _c={floor:gt,ceil:gt};da.scale.linear=function(){return Wi([0,1],[0,1],br,!1)},da.scale.log=function(){return eu(da.scale.linear().domain([0,1]),10,!0,[1,10])};var wc=da.format(".0e"),Sc={floor:function(n){return-Math.ceil(-n)},ceil:function(n){return-Math.floor(-n)}};da.scale.pow=function(){return ru(da.scale.linear(),1,[0,1])},da.scale.sqrt=function(){return da.scale.pow().exponent(.5)},da.scale.ordinal=function(){return uu([],{t:"range",a:[[]]})},da.scale.category10=function(){return da.scale.ordinal().range(Ec)},da.scale.category20=function(){return da.scale.ordinal().range(kc)},da.scale.category20b=function(){return da.scale.ordinal().range(Ac)},da.scale.category20c=function(){return da.scale.ordinal().range(Nc)};var Ec=["#1f77b4","#ff7f0e","#2ca02c","#d62728","#9467bd","#8c564b","#e377c2","#7f7f7f","#bcbd22","#17becf"],kc=["#1f77b4","#aec7e8","#ff7f0e","#ffbb78","#2ca02c","#98df8a","#d62728","#ff9896","#9467bd","#c5b0d5","#8c564b","#c49c94","#e377c2","#f7b6d2","#7f7f7f","#c7c7c7","#bcbd22","#dbdb8d","#17becf","#9edae5"],Ac=["#393b79","#5254a3","#6b6ecf","#9c9ede","#637939","#8ca252","#b5cf6b","#cedb9c","#8c6d31","#bd9e39","#e7ba52","#e7cb94","#843c39","#ad494a","#d6616b","#e7969c","#7b4173","#a55194","#ce6dbd","#de9ed6"],Nc=["#3182bd","#6baed6","#9ecae1","#c6dbef","#e6550d","#fd8d3c","#fdae6b","#fdd0a2","#31a354","#74c476","#a1d99b","#c7e9c0","#756bb1","#9e9ac8","#bcbddc","#dadaeb","#636363","#969696","#bdbdbd","#d9d9d9"];da.scale.quantile=function(){return au([],[])},da.scale.quantize=function(){return ou(0,1,[0,1])},da.scale.threshold=function(){return cu([.5],[0,1])},da.scale.identity=function(){return lu([0,1])},da.svg.arc=function(){function n(){var n=t.apply(this,arguments),u=e.apply(this,arguments),a=r.apply(this,arguments)+qc,o=i.apply(this,arguments)+qc,c=(a>o&&(c=a,a=o,o=c),o-a),l=Wa>c?"0":"1",s=Math.cos(a),f=Math.sin(a),h=Math.cos(o),g=Math.sin(o);return c>=Tc?n?"M0,"+u+"A"+u+","+u+" 0 1,1 0,"+-u+"A"+u+","+u+" 0 1,1 0,"+u+"M0,"+n+"A"+n+","+n+" 0 1,0 0,"+-n+"A"+n+","+n+" 0 1,0 0,"+n+"Z":"M0,"+u+"A"+u+","+u+" 0 1,1 0,"+-u+"A"+u+","+u+" 0 1,1 0,"+u+"Z":n?"M"+u*s+","+u*f+"A"+u+","+u+" 0 "+l+",1 "+u*h+","+u*g+"L"+n*h+","+n*g+"A"+n+","+n+" 0 "+l+",0 "+n*s+","+n*f+"Z":"M"+u*s+","+u*f+"A"+u+","+u+" 0 "+l+",1 "+u*h+","+u*g+"L0,0"+"Z"}var t=su,e=fu,r=hu,i=gu;return n.innerRadius=function(e){return arguments.length?(t=ht(e),n):t},n.outerRadius=function(t){return arguments.length?(e=ht(t),n):e},n.startAngle=function(t){return arguments.length?(r=ht(t),n):r},n.endAngle=function(t){return arguments.length?(i=ht(t),n):i},n.centroid=function(){var n=(t.apply(this,arguments)+e.apply(this,arguments))/2,u=(r.apply(this,arguments)+i.apply(this,arguments))/2+qc;return[Math.cos(u)*n,Math.sin(u)*n]},n};var qc=-Wa/2,Tc=2*Wa-1e-6;da.svg.line.radial=function(){var n=Oe(pu);return n.radius=n.x,delete n.x,n.angle=n.y,delete n.y,n},Xe.reverse=Ze,Ze.reverse=Xe,da.svg.area=function(){return du(gt)},da.svg.area.radial=function(){var n=du(pu);return n.radius=n.x,delete n.x,n.innerRadius=n.x0,delete n.x0,n.outerRadius=n.x1,delete n.x1,n.angle=n.y,delete n.y,n.startAngle=n.y0,delete n.y0,n.endAngle=n.y1,delete n.y1,n},da.svg.chord=function(){function n(n,o){var c=t(this,u,n,o),l=t(this,a,n,o);return"M"+c.p0+r(c.r,c.p1,c.a1-c.a0)+(e(c,l)?i(c.r,c.p1,c.r,c.p0):i(c.r,c.p1,l.r,l.p0)+r(l.r,l.p1,l.a1-l.a0)+i(l.r,l.p1,c.r,c.p0))+"Z"}function t(n,t,e,r){var i=t.call(n,e,r),u=o.call(n,i,r),a=c.call(n,i,r)+qc,s=l.call(n,i,r)+qc;return{r:u,a0:a,a1:s,p0:[u*Math.cos(a),u*Math.sin(a)],p1:[u*Math.cos(s),u*Math.sin(s)]}}function e(n,t){return n.a0==t.a0&&n.a1==t.a1}function r(n,t,e){return"A"+n+","+n+" 0 "+ +(e>Wa)+",1 "+t}function i(n,t,e,r){return"Q 0,0 "+r}var u=qe,a=Te,o=mu,c=hu,l=gu;return n.radius=function(t){return arguments.length?(o=ht(t),n):o},n.source=function(t){return arguments.length?(u=ht(t),n):u},n.target=function(t){return arguments.length?(a=ht(t),n):a},n.startAngle=function(t){return arguments.length?(c=ht(t),n):c},n.endAngle=function(t){return arguments.length?(l=ht(t),n):l},n},da.svg.diagonal=function(){function n(n,i){var u=t.call(this,n,i),a=e.call(this,n,i),o=(u.y+a.y)/2,c=[u,{x:u.x,y:o},{x:a.x,y:o},a];return c=c.map(r),"M"+c[0]+"C"+c[1]+" "+c[2]+" "+c[3]}var t=qe,e=Te,r=vu;return n.source=function(e){return arguments.length?(t=ht(e),n):t},n.target=function(t){return arguments.length?(e=ht(t),n):e},n.projection=function(t){return arguments.length?(r=t,n):r},n},da.svg.diagonal.radial=function(){var n=da.svg.diagonal(),t=vu,e=n.projection;return n.projection=function(n){return arguments.length?e(yu(t=n)):t},n},da.svg.symbol=function(){function n(n,r){return(Cc.get(t.call(this,n,r))||bu)(e.call(this,n,r))}var t=xu,e=Mu;return n.type=function(e){return arguments.length?(t=ht(e),n):t},n.size=function(t){return arguments.length?(e=ht(t),n):e},n};var Cc=da.map({circle:bu,cross:function(n){var t=Math.sqrt(n/5)/2;return"M"+-3*t+","+-t+"H"+-t+"V"+-3*t+"H"+t+"V"+-t+"H"+3*t+"V"+t+"H"+t+"V"+3*t+"H"+-t+"V"+t+"H"+-3*t+"Z"},diamond:function(n){var t=Math.sqrt(n/(2*Lc)),e=t*Lc;return"M0,"+-t+"L"+e+",0"+" 0,"+t+" "+-e+",0"+"Z"},square:function(n){var t=Math.sqrt(n)/2;return"M"+-t+","+-t+"L"+t+","+-t+" "+t+","+t+" "+-t+","+t+"Z"},"triangle-down":function(n){var t=Math.sqrt(n/jc),e=t*jc/2;return"M0,"+e+"L"+t+","+-e+" "+-t+","+-e+"Z"},"triangle-up":function(n){var t=Math.sqrt(n/jc),e=t*jc/2;return"M0,"+-e+"L"+t+","+e+" "+-t+","+e+"Z"}});da.svg.symbolTypes=Cc.keys();var zc,Dc,jc=Math.sqrt(3),Lc=Math.tan(30*Ka),Hc=[],Fc=0;Hc.call=Fa.call,Hc.empty=Fa.empty,Hc.node=Fa.node,Hc.size=Fa.size,da.transition=function(n){return arguments.length?zc?n.transition():n:Ya.transition()},da.transition.prototype=Hc,Hc.select=function(n){var t,e,r,i=this.id,u=[];n=v(n);for(var a=-1,o=this.length;++a<o;){u.push(t=[]);for(var c=this[a],l=-1,s=c.length;++l<s;)(r=c[l])&&(e=n.call(r,r.__data__,l,a))?("__data__"in r&&(e.__data__=r.__data__),Eu(e,l,i,r.__transition__[i]),t.push(e)):t.push(null)}return _u(u,i)},Hc.selectAll=function(n){var t,e,r,i,u,a=this.id,o=[];n=y(n);for(var c=-1,l=this.length;++c<l;)for(var s=this[c],f=-1,h=s.length;++f<h;)if(r=s[f]){u=r.__transition__[a],e=n.call(r,r.__data__,f,c),o.push(t=[]);for(var g=-1,p=e.length;++g<p;)(i=e[g])&&Eu(i,g,a,u),t.push(i)}return _u(o,a)},Hc.filter=function(n){var t,e,r,i=[];"function"!=typeof n&&(n=N(n));for(var u=0,a=this.length;a>u;u++){i.push(t=[]);for(var e=this[u],o=0,c=e.length;c>o;o++)(r=e[o])&&n.call(r,r.__data__,o)&&t.push(r)}return _u(i,this.id,this.time).ease(this.ease())},Hc.tween=function(n,t){var e=this.id;return arguments.length<2?this.node().__transition__[e].tween.get(n):T(this,null==t?function(t){t.__transition__[e].tween.remove(n)}:function(r){r.__transition__[e].tween.set(n,t)})},Hc.attr=function(n,t){function e(){this.removeAttribute(o)}function r(){this.removeAttributeNS(o.space,o.local)}function i(n){return null==n?e:(n+="",function(){var t,e=this.getAttribute(o);return e!==n&&(t=a(e,n),function(n){this.setAttribute(o,t(n))})})}function u(n){return null==n?r:(n+="",function(){var t,e=this.getAttributeNS(o.space,o.local);return e!==n&&(t=a(e,n),function(n){this.setAttributeNS(o.space,o.local,t(n))})})}if(arguments.length<2){for(t in n)this.attr(t,n[t]);return this}var a="transform"==n?Vr:br,o=da.ns.qualify(n);return wu(this,"attr."+n,t,o.local?u:i)},Hc.attrTween=function(n,t){function e(n,e){var r=t.call(this,n,e,this.getAttribute(i));return r&&function(n){this.setAttribute(i,r(n))}}function r(n,e){var r=t.call(this,n,e,this.getAttributeNS(i.space,i.local));return r&&function(n){this.setAttributeNS(i.space,i.local,r(n))}}var i=da.ns.qualify(n);return this.tween("attr."+n,i.local?r:e)},Hc.style=function(n,t,e){function r(){this.style.removeProperty(n)}function i(t){return null==t?r:(t+="",function(){var r,i=ya.getComputedStyle(this,null).getPropertyValue(n);return i!==t&&(r=br(i,t),function(t){this.style.setProperty(n,r(t),e)})})}var u=arguments.length;if(3>u){if("string"!=typeof n){2>u&&(t="");for(e in n)this.style(e,n[e],t);return this}e=""}return wu(this,"style."+n,t,i)},Hc.styleTween=function(n,t,e){function r(r,i){var u=t.call(this,r,i,ya.getComputedStyle(this,null).getPropertyValue(n));return u&&function(t){this.style.setProperty(n,u(t),e)}}return arguments.length<3&&(e=""),this.tween("style."+n,r)},Hc.text=function(n){return wu(this,"text",n,Su)},Hc.remove=function(){return this.each("end.transition",function(){var n;!this.__transition__&&(n=this.parentNode)&&n.removeChild(this)})},Hc.ease=function(n){var t=this.id;return arguments.length<1?this.node().__transition__[t].ease:("function"!=typeof n&&(n=da.ease.apply(da,arguments)),T(this,function(e){e.__transition__[t].ease=n}))},Hc.delay=function(n){var t=this.id;return T(this,"function"==typeof n?function(e,r,i){e.__transition__[t].delay=0|n.call(e,e.__data__,r,i)}:(n|=0,function(e){e.__transition__[t].delay=n}))},Hc.duration=function(n){var t=this.id;return T(this,"function"==typeof n?function(e,r,i){e.__transition__[t].duration=Math.max(1,0|n.call(e,e.__data__,r,i))}:(n=Math.max(1,0|n),function(e){e.__transition__[t].duration=n}))},Hc.each=function(n,t){var e=this.id;if(arguments.length<2){var r=Dc,i=zc;zc=e,T(this,function(t,r,i){Dc=t.__transition__[e],n.call(t,t.__data__,r,i)}),Dc=r,zc=i}else T(this,function(r){var i=r.__transition__[e];(i.event||(i.event=da.dispatch("start","end"))).on(n,t)});return this},Hc.transition=function(){for(var n,t,e,r,i=this.id,u=++Fc,a=[],o=0,c=this.length;c>o;o++){a.push(n=[]);for(var t=this[o],l=0,s=t.length;s>l;l++)(e=t[l])&&(r=Object.create(e.__transition__[i]),r.delay+=r.duration,Eu(e,l,u,r)),n.push(e)}return _u(a,u)},da.svg.axis=function(){function n(n){n.each(function(){var n,f=da.select(this),h=null==l?e.ticks?e.ticks.apply(e,c):e.domain():l,g=null==t?e.tickFormat?e.tickFormat.apply(e,c):String:t,p=Nu(e,h,s),d=f.selectAll(".tick.minor").data(p,String),m=d.enter().insert("line",".tick").attr("class","tick minor").style("opacity",1e-6),v=da.transition(d.exit()).style("opacity",1e-6).remove(),y=da.transition(d).style("opacity",1),M=f.selectAll(".tick.major").data(h,String),x=M.enter().insert("g",".domain").attr("class","tick major").style("opacity",1e-6),b=da.transition(M.exit()).style("opacity",1e-6).remove(),_=da.transition(M).style("opacity",1),w=Vi(e),S=f.selectAll(".domain").data([0]),E=(S.enter().append("path").attr("class","domain"),da.transition(S)),k=e.copy(),A=this.__chart__||k;
this.__chart__=k,x.append("line"),x.append("text");var N=x.select("line"),q=_.select("line"),T=M.select("text").text(g),C=x.select("text"),z=_.select("text");switch(r){case"bottom":n=ku,m.attr("y2",u),y.attr("x2",0).attr("y2",u),N.attr("y2",i),C.attr("y",Math.max(i,0)+o),q.attr("x2",0).attr("y2",i),z.attr("x",0).attr("y",Math.max(i,0)+o),T.attr("dy",".71em").style("text-anchor","middle"),E.attr("d","M"+w[0]+","+a+"V0H"+w[1]+"V"+a);break;case"top":n=ku,m.attr("y2",-u),y.attr("x2",0).attr("y2",-u),N.attr("y2",-i),C.attr("y",-(Math.max(i,0)+o)),q.attr("x2",0).attr("y2",-i),z.attr("x",0).attr("y",-(Math.max(i,0)+o)),T.attr("dy","0em").style("text-anchor","middle"),E.attr("d","M"+w[0]+","+-a+"V0H"+w[1]+"V"+-a);break;case"left":n=Au,m.attr("x2",-u),y.attr("x2",-u).attr("y2",0),N.attr("x2",-i),C.attr("x",-(Math.max(i,0)+o)),q.attr("x2",-i).attr("y2",0),z.attr("x",-(Math.max(i,0)+o)).attr("y",0),T.attr("dy",".32em").style("text-anchor","end"),E.attr("d","M"+-a+","+w[0]+"H0V"+w[1]+"H"+-a);break;case"right":n=Au,m.attr("x2",u),y.attr("x2",u).attr("y2",0),N.attr("x2",i),C.attr("x",Math.max(i,0)+o),q.attr("x2",i).attr("y2",0),z.attr("x",Math.max(i,0)+o).attr("y",0),T.attr("dy",".32em").style("text-anchor","start"),E.attr("d","M"+a+","+w[0]+"H0V"+w[1]+"H"+a)}if(e.rangeBand){var D=k.rangeBand()/2,j=function(n){return k(n)+D};x.call(n,j),_.call(n,j)}else x.call(n,A),_.call(n,k),b.call(n,k),m.call(n,A),y.call(n,k),v.call(n,k)})}var t,e=da.scale.linear(),r=Pc,i=6,u=6,a=6,o=3,c=[10],l=null,s=0;return n.scale=function(t){return arguments.length?(e=t,n):e},n.orient=function(t){return arguments.length?(r=t in Oc?t+"":Pc,n):r},n.ticks=function(){return arguments.length?(c=arguments,n):c},n.tickValues=function(t){return arguments.length?(l=t,n):l},n.tickFormat=function(e){return arguments.length?(t=e,n):t},n.tickSize=function(t,e){if(!arguments.length)return i;var r=arguments.length-1;return i=+t,u=r>1?+e:i,a=r>0?+arguments[r]:i,n},n.tickPadding=function(t){return arguments.length?(o=+t,n):o},n.tickSubdivide=function(t){return arguments.length?(s=+t,n):s},n};var Pc="bottom",Oc={top:1,right:1,bottom:1,left:1};da.svg.brush=function(){function n(u){u.each(function(){var u,a=da.select(this),s=a.selectAll(".background").data([0]),f=a.selectAll(".extent").data([0]),h=a.selectAll(".resize").data(l,String);a.style("pointer-events","all").on("mousedown.brush",i).on("touchstart.brush",i),s.enter().append("rect").attr("class","background").style("visibility","hidden").style("cursor","crosshair"),f.enter().append("rect").attr("class","extent").style("cursor","move"),h.enter().append("g").attr("class",function(n){return"resize "+n}).style("cursor",function(n){return Yc[n]}).append("rect").attr("x",function(n){return/[ew]$/.test(n)?-3:null}).attr("y",function(n){return/^[ns]/.test(n)?-3:null}).attr("width",6).attr("height",6).style("visibility","hidden"),h.style("display",n.empty()?"none":null),h.exit().remove(),o&&(u=Vi(o),s.attr("x",u[0]).attr("width",u[1]-u[0]),e(a)),c&&(u=Vi(c),s.attr("y",u[0]).attr("height",u[1]-u[0]),r(a)),t(a)})}function t(n){n.selectAll(".resize").attr("transform",function(n){return"translate("+s[+/e$/.test(n)][0]+","+s[+/^s/.test(n)][1]+")"})}function e(n){n.select(".extent").attr("x",s[0][0]),n.selectAll(".extent,.n>rect,.s>rect").attr("width",s[1][0]-s[0][0])}function r(n){n.select(".extent").attr("y",s[0][1]),n.selectAll(".extent,.e>rect,.w>rect").attr("height",s[1][1]-s[0][1])}function i(){function i(){var n=da.event.changedTouches;return n?da.touches(M,n)[0]:da.mouse(M)}function l(){32==da.event.keyCode&&(k||(v=null,N[0]-=s[1][0],N[1]-=s[1][1],k=2),g())}function h(){32==da.event.keyCode&&2==k&&(N[0]+=s[1][0],N[1]+=s[1][1],k=0,g())}function p(){var n=i(),u=!1;y&&(n[0]+=y[0],n[1]+=y[1]),k||(da.event.altKey?(v||(v=[(s[0][0]+s[1][0])/2,(s[0][1]+s[1][1])/2]),N[0]=s[+(n[0]<v[0])][0],N[1]=s[+(n[1]<v[1])][1]):v=null),S&&d(n,o,0)&&(e(_),u=!0),E&&d(n,c,1)&&(r(_),u=!0),u&&(t(_),b({type:"brush",mode:k?"move":"resize"}))}function d(n,t,e){var r,i,a=Vi(t),o=a[0],c=a[1],l=N[e],h=s[1][e]-s[0][e];return k&&(o-=l,c-=h+l),r=f[e]?Math.max(o,Math.min(c,n[e])):n[e],k?i=(r+=l)+h:(v&&(l=Math.max(o,Math.min(c,2*v[e]-r))),r>l?(i=r,r=l):i=l),s[0][e]!==r||s[1][e]!==i?(u=null,s[0][e]=r,s[1][e]=i,!0):void 0}function m(){p(),_.style("pointer-events","all").selectAll(".resize").style("display",n.empty()?"none":null),da.select("body").style("cursor",null),q.on("mousemove.brush",null).on("mouseup.brush",null).on("touchmove.brush",null).on("touchend.brush",null).on("keydown.brush",null).on("keyup.brush",null),A(),b({type:"brushend"})}var v,y,M=this,x=da.select(da.event.target),b=a.of(M,arguments),_=da.select(M),w=x.datum(),S=!/^(n|s)$/.test(w)&&o,E=!/^(e|w)$/.test(w)&&c,k=x.classed("extent"),A=H(),N=i(),q=da.select(ya).on("keydown.brush",l).on("keyup.brush",h);if(da.event.changedTouches?q.on("touchmove.brush",p).on("touchend.brush",m):q.on("mousemove.brush",p).on("mouseup.brush",m),k)N[0]=s[0][0]-N[0],N[1]=s[0][1]-N[1];else if(w){var T=+/w$/.test(w),C=+/^n/.test(w);y=[s[1-T][0]-N[0],s[1-C][1]-N[1]],N[0]=s[T][0],N[1]=s[C][1]}else da.event.altKey&&(v=N.slice());_.style("pointer-events","none").selectAll(".resize").style("display",null),da.select("body").style("cursor",x.style("cursor")),b({type:"brushstart"}),p()}var u,a=d(n,"brushstart","brush","brushend"),o=null,c=null,l=Rc[0],s=[[0,0],[0,0]],f=[!0,!0];return n.x=function(t){return arguments.length?(o=t,l=Rc[!o<<1|!c],n):o},n.y=function(t){return arguments.length?(c=t,l=Rc[!o<<1|!c],n):c},n.clamp=function(t){return arguments.length?(o&&c?f=[!!t[0],!!t[1]]:(o||c)&&(f[+!o]=!!t),n):o&&c?f:o||c?f[+!o]:null},n.extent=function(t){var e,r,i,a,l;return arguments.length?(u=[[0,0],[0,0]],o&&(e=t[0],r=t[1],c&&(e=e[0],r=r[0]),u[0][0]=e,u[1][0]=r,o.invert&&(e=o(e),r=o(r)),e>r&&(l=e,e=r,r=l),s[0][0]=0|e,s[1][0]=0|r),c&&(i=t[0],a=t[1],o&&(i=i[1],a=a[1]),u[0][1]=i,u[1][1]=a,c.invert&&(i=c(i),a=c(a)),i>a&&(l=i,i=a,a=l),s[0][1]=0|i,s[1][1]=0|a),n):(t=u||s,o&&(e=t[0][0],r=t[1][0],u||(e=s[0][0],r=s[1][0],o.invert&&(e=o.invert(e),r=o.invert(r)),e>r&&(l=e,e=r,r=l))),c&&(i=t[0][1],a=t[1][1],u||(i=s[0][1],a=s[1][1],c.invert&&(i=c.invert(i),a=c.invert(a)),i>a&&(l=i,i=a,a=l))),o&&c?[[e,i],[r,a]]:o?[e,r]:c&&[i,a])},n.clear=function(){return u=null,s[0][0]=s[0][1]=s[1][0]=s[1][1]=0,n},n.empty=function(){return o&&s[0][0]===s[1][0]||c&&s[0][1]===s[1][1]},da.rebind(n,a,"on")};var Yc={n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},Rc=[["n","e","s","w","nw","ne","se","sw"],["e","w"],["n","s"],[]];da.time={};var Uc=Date,Ic=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];qu.prototype={getDate:function(){return this._.getUTCDate()},getDay:function(){return this._.getUTCDay()},getFullYear:function(){return this._.getUTCFullYear()},getHours:function(){return this._.getUTCHours()},getMilliseconds:function(){return this._.getUTCMilliseconds()},getMinutes:function(){return this._.getUTCMinutes()},getMonth:function(){return this._.getUTCMonth()},getSeconds:function(){return this._.getUTCSeconds()},getTime:function(){return this._.getTime()},getTimezoneOffset:function(){return 0},valueOf:function(){return this._.valueOf()},setDate:function(){Vc.setUTCDate.apply(this._,arguments)},setDay:function(){Vc.setUTCDay.apply(this._,arguments)},setFullYear:function(){Vc.setUTCFullYear.apply(this._,arguments)},setHours:function(){Vc.setUTCHours.apply(this._,arguments)},setMilliseconds:function(){Vc.setUTCMilliseconds.apply(this._,arguments)},setMinutes:function(){Vc.setUTCMinutes.apply(this._,arguments)},setMonth:function(){Vc.setUTCMonth.apply(this._,arguments)},setSeconds:function(){Vc.setUTCSeconds.apply(this._,arguments)},setTime:function(){Vc.setTime.apply(this._,arguments)}};var Vc=Date.prototype,Xc="%a %b %e %X %Y",Zc="%m/%d/%Y",Bc="%H:%M:%S",$c=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Wc=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],Jc=["January","February","March","April","May","June","July","August","September","October","November","December"],Gc=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];da.time.year=Tu(function(n){return n=da.time.day(n),n.setMonth(0,1),n},function(n,t){n.setFullYear(n.getFullYear()+t)},function(n){return n.getFullYear()}),da.time.years=da.time.year.range,da.time.years.utc=da.time.year.utc.range,da.time.day=Tu(function(n){var t=new Uc(2e3,0);return t.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),t},function(n,t){n.setDate(n.getDate()+t)},function(n){return n.getDate()-1}),da.time.days=da.time.day.range,da.time.days.utc=da.time.day.utc.range,da.time.dayOfYear=function(n){var t=da.time.year(n);return Math.floor((n-t-6e4*(n.getTimezoneOffset()-t.getTimezoneOffset()))/864e5)},Ic.forEach(function(n,t){n=n.toLowerCase(),t=7-t;var e=da.time[n]=Tu(function(n){return(n=da.time.day(n)).setDate(n.getDate()-(n.getDay()+t)%7),n},function(n,t){n.setDate(n.getDate()+7*Math.floor(t))},function(n){var e=da.time.year(n).getDay();return Math.floor((da.time.dayOfYear(n)+(e+t)%7)/7)-(e!==t)});da.time[n+"s"]=e.range,da.time[n+"s"].utc=e.utc.range,da.time[n+"OfYear"]=function(n){var e=da.time.year(n).getDay();return Math.floor((da.time.dayOfYear(n)+(e+t)%7)/7)}}),da.time.week=da.time.sunday,da.time.weeks=da.time.sunday.range,da.time.weeks.utc=da.time.sunday.utc.range,da.time.weekOfYear=da.time.sundayOfYear,da.time.format=function(n){function t(t){for(var r,i,u,a=[],o=-1,c=0;++o<e;)37===n.charCodeAt(o)&&(a.push(n.substring(c,o)),null!=(i=ol[r=n.charAt(++o)])&&(r=n.charAt(++o)),(u=cl[r])&&(r=u(t,null==i?"e"===r?" ":"0":i)),a.push(r),c=o+1);return a.push(n.substring(c,o)),a.join("")}var e=n.length;return t.parse=function(t){var e={y:1900,m:0,d:1,H:0,M:0,S:0,L:0},r=zu(e,n,t,0);if(r!=t.length)return null;"p"in e&&(e.H=e.H%12+12*e.p);var i=new Uc;return"j"in e?i.setFullYear(e.y,0,e.j):"w"in e&&("W"in e||"U"in e)?(i.setFullYear(e.y,0,1),i.setFullYear(e.y,0,"W"in e?(e.w+6)%7+7*e.W-(i.getDay()+5)%7:e.w+7*e.U-(i.getDay()+6)%7)):i.setFullYear(e.y,e.m,e.d),i.setHours(e.H,e.M,e.S,e.L),i},t.toString=function(){return n},t};var Kc=Du($c),Qc=ju($c),nl=Du(Wc),tl=ju(Wc),el=Du(Jc),rl=ju(Jc),il=Du(Gc),ul=ju(Gc),al=/^%/,ol={"-":"",_:" ",0:"0"},cl={a:function(n){return Wc[n.getDay()]},A:function(n){return $c[n.getDay()]},b:function(n){return Gc[n.getMonth()]},B:function(n){return Jc[n.getMonth()]},c:da.time.format(Xc),d:function(n,t){return Lu(n.getDate(),t,2)},e:function(n,t){return Lu(n.getDate(),t,2)},H:function(n,t){return Lu(n.getHours(),t,2)},I:function(n,t){return Lu(n.getHours()%12||12,t,2)},j:function(n,t){return Lu(1+da.time.dayOfYear(n),t,3)},L:function(n,t){return Lu(n.getMilliseconds(),t,3)},m:function(n,t){return Lu(n.getMonth()+1,t,2)},M:function(n,t){return Lu(n.getMinutes(),t,2)},p:function(n){return n.getHours()>=12?"PM":"AM"},S:function(n,t){return Lu(n.getSeconds(),t,2)},U:function(n,t){return Lu(da.time.sundayOfYear(n),t,2)},w:function(n){return n.getDay()},W:function(n,t){return Lu(da.time.mondayOfYear(n),t,2)},x:da.time.format(Zc),X:da.time.format(Bc),y:function(n,t){return Lu(n.getFullYear()%100,t,2)},Y:function(n,t){return Lu(n.getFullYear()%1e4,t,4)},Z:ra,"%":function(){return"%"}},ll={a:Hu,A:Fu,b:Ru,B:Uu,c:Iu,d:Ju,e:Ju,H:Ku,I:Ku,j:Gu,L:ta,m:Wu,M:Qu,p:ea,S:na,U:Ou,w:Pu,W:Yu,x:Vu,X:Xu,y:Bu,Y:Zu,"%":ia},sl=/^\s*\d+/,fl=da.map({am:0,pm:1});da.time.format.utc=function(n){function t(n){try{Uc=qu;var t=new Uc;return t._=n,e(t)}finally{Uc=Date}}var e=da.time.format(n);return t.parse=function(n){try{Uc=qu;var t=e.parse(n);return t&&t._}finally{Uc=Date}},t.toString=e.toString,t};var hl=da.time.format.utc("%Y-%m-%dT%H:%M:%S.%LZ");da.time.format.iso=Date.prototype.toISOString&&+new Date("2000-01-01T00:00:00.000Z")?ua:hl,ua.parse=function(n){var t=new Date(n);return isNaN(t)?null:t},ua.toString=hl.toString,da.time.second=Tu(function(n){return new Uc(1e3*Math.floor(n/1e3))},function(n,t){n.setTime(n.getTime()+1e3*Math.floor(t))},function(n){return n.getSeconds()}),da.time.seconds=da.time.second.range,da.time.seconds.utc=da.time.second.utc.range,da.time.minute=Tu(function(n){return new Uc(6e4*Math.floor(n/6e4))},function(n,t){n.setTime(n.getTime()+6e4*Math.floor(t))},function(n){return n.getMinutes()}),da.time.minutes=da.time.minute.range,da.time.minutes.utc=da.time.minute.utc.range,da.time.hour=Tu(function(n){var t=n.getTimezoneOffset()/60;return new Uc(36e5*(Math.floor(n/36e5-t)+t))},function(n,t){n.setTime(n.getTime()+36e5*Math.floor(t))},function(n){return n.getHours()}),da.time.hours=da.time.hour.range,da.time.hours.utc=da.time.hour.utc.range,da.time.month=Tu(function(n){return n=da.time.day(n),n.setDate(1),n},function(n,t){n.setMonth(n.getMonth()+t)},function(n){return n.getMonth()}),da.time.months=da.time.month.range,da.time.months.utc=da.time.month.utc.range;var gl=[1e3,5e3,15e3,3e4,6e4,3e5,9e5,18e5,36e5,108e5,216e5,432e5,864e5,1728e5,6048e5,2592e6,7776e6,31536e6],pl=[[da.time.second,1],[da.time.second,5],[da.time.second,15],[da.time.second,30],[da.time.minute,1],[da.time.minute,5],[da.time.minute,15],[da.time.minute,30],[da.time.hour,1],[da.time.hour,3],[da.time.hour,6],[da.time.hour,12],[da.time.day,1],[da.time.day,2],[da.time.week,1],[da.time.month,1],[da.time.month,3],[da.time.year,1]],dl=[[da.time.format("%Y"),Ut],[da.time.format("%B"),function(n){return n.getMonth()}],[da.time.format("%b %d"),function(n){return 1!=n.getDate()}],[da.time.format("%a %d"),function(n){return n.getDay()&&1!=n.getDate()}],[da.time.format("%I %p"),function(n){return n.getHours()}],[da.time.format("%I:%M"),function(n){return n.getMinutes()}],[da.time.format(":%S"),function(n){return n.getSeconds()}],[da.time.format(".%L"),function(n){return n.getMilliseconds()}]],ml=da.scale.linear(),vl=ca(dl);pl.year=function(n,t){return ml.domain(n.map(sa)).ticks(t).map(la)},da.time.scale=function(){return aa(da.scale.linear(),pl,vl)};var yl=pl.map(function(n){return[n[0].utc,n[1]]}),Ml=[[da.time.format.utc("%Y"),Ut],[da.time.format.utc("%B"),function(n){return n.getUTCMonth()}],[da.time.format.utc("%b %d"),function(n){return 1!=n.getUTCDate()}],[da.time.format.utc("%a %d"),function(n){return n.getUTCDay()&&1!=n.getUTCDate()}],[da.time.format.utc("%I %p"),function(n){return n.getUTCHours()}],[da.time.format.utc("%I:%M"),function(n){return n.getUTCMinutes()}],[da.time.format.utc(":%S"),function(n){return n.getUTCSeconds()}],[da.time.format.utc(".%L"),function(n){return n.getUTCMilliseconds()}]],xl=ca(Ml);return yl.year=function(n,t){return ml.domain(n.map(ha)).ticks(t).map(fa)},da.time.scale.utc=function(){return aa(da.scale.linear(),yl,xl)},da.text=pt(function(n){return n.responseText}),da.json=function(n,t){return dt(n,"application/json",ga,t)},da.html=function(n,t){return dt(n,"text/html",pa,t)},da.xml=pt(function(n){return n.responseXML}),da}();//00.2-seedrandom.js:
// seedrandom.js version 2.2.
// Author: David Bau
// Date: 2013 Jun 15
// Copyright 2013 David Bau, all rights reserved.
// BSD LICENSE
//
// Defines a method Math.seedrandom() that, when called, substitutes
// an explicitly seeded RC4-based algorithm for Math.random().  Also
// supports automatic seeding from local or network sources of entropy.
//
// http://davidbau.com/encode/seedrandom.js
// http://davidbau.com/encode/seedrandom-min.js
//
// Usage:
//
//   <script src=http://davidbau.com/encode/seedrandom-min.js></script>
//
//   Math.seedrandom('yay.');  Sets Math.random to a function that is
//                             initialized using the given explicit seed.
//
//   Math.seedrandom();        Sets Math.random to a function that is
//                             seeded using the current time, dom state,
//                             and other accumulated local entropy.
//                             The generated seed string is returned.
//
//   Math.seedrandom('yowza.', true);
//                             Seeds using the given explicit seed mixed
//                             together with accumulated entropy.
//
//   <script src="https://jsonlib.appspot.com/urandom?callback=Math.seedrandom">
//   </script>                 Seeds using urandom bits from a server.
//
// More advanced examples:
//
//   Math.seedrandom("hello.");           // Use "hello." as the seed.
//   document.write(Math.random());       // Always 0.9282578795792454
//   document.write(Math.random());       // Always 0.3752569768646784
//   var rng1 = Math.random;              // Remember the current prng.
//
//   var autoseed = Math.seedrandom();    // New prng with an automatic seed.
//   document.write(Math.random());       // Pretty much unpredictable x.
//
//   Math.random = rng1;                  // Continue "hello." prng sequence.
//   document.write(Math.random());       // Always 0.7316977468919549
//
//   Math.seedrandom(autoseed);           // Restart at the previous seed.
//   document.write(Math.random());       // Repeat the 'unpredictable' x.
//
//   function reseed(event, count) {      // Define a custom entropy collector.
//     var t = [];
//     function w(e) {
//       t.push([e.pageX, e.pageY, +new Date]);
//       if (t.length < count) { return; }
//       document.removeEventListener(event, w);
//       Math.seedrandom(t, true);        // Mix in any previous entropy.
//     }
//     document.addEventListener(event, w);
//   }
//   reseed('mousemove', 100);            // Reseed after 100 mouse moves.
//
// Version notes:
//
// The random number sequence is the same as version 1.0 for string seeds.
// Version 2.0 changed the sequence for non-string seeds.
// Version 2.1 speeds seeding and uses window.crypto to autoseed if present.
// Version 2.2 alters non-crypto autoseeding to sweep up entropy from plugins.
//
// The standard ARC4 key scheduler cycles short keys, which means that
// seedrandom('ab') is equivalent to seedrandom('abab') and 'ababab'.
// Therefore it is a good idea to add a terminator to avoid trivial
// equivalences on short string seeds, e.g., Math.seedrandom(str + '\0').
// Starting with version 2.0, a terminator is added automatically for
// non-string seeds, so seeding with the number 111 is the same as seeding
// with '111\0'.
//
// When seedrandom() is called with zero args, it uses a seed
// drawn from the browser crypto object if present.  If there is no
// crypto support, seedrandom() uses the current time, the native rng,
// and a walk of several DOM objects to collect a few bits of entropy.
//
// Each time the one- or two-argument forms of seedrandom are called,
// entropy from the passed seed is accumulated in a pool to help generate
// future seeds for the zero- and two-argument forms of seedrandom.
//
// On speed - This javascript implementation of Math.random() is about
// 3-10x slower than the built-in Math.random() because it is not native
// code, but that is typically fast enough.  Some details (timings on
// Chrome 25 on a 2010 vintage macbook):
//
// seeded Math.random()          - avg less than 0.0002 milliseconds per call
// seedrandom('explicit.')       - avg less than 0.2 milliseconds per call
// seedrandom('explicit.', true) - avg less than 0.2 milliseconds per call
// seedrandom() with crypto      - avg less than 0.2 milliseconds per call
//
// Autoseeding without crypto is somewhat slower, about 20-30 milliseconds on
// a 2012 windows 7 1.5ghz i5 laptop, as seen on Firefox 19, IE 10, and Opera.
// Seeded rng calls themselves are fast across these browsers, with slowest
// numbers on Opera at about 0.0005 ms per seeded Math.random().
//
// LICENSE (BSD):
//
// Copyright 2013 David Bau, all rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//   1. Redistributions of source code must retain the above copyright
//      notice, this list of conditions and the following disclaimer.
//
//   2. Redistributions in binary form must reproduce the above copyright
//      notice, this list of conditions and the following disclaimer in the
//      documentation and/or other materials provided with the distribution.
//
//   3. Neither the name of this module nor the names of its contributors may
//      be used to endorse or promote products derived from this software
//      without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
/**
 * All code is in an anonymous closure to keep the global namespace clean.
 */
(function (
    global, pool, math, width, chunks, digits) {

//
// The following constants are related to IEEE 754 limits.
//
var startdenom = math.pow(width, chunks),
    significance = math.pow(2, digits),
    overflow = significance * 2,
    mask = width - 1;

//
// seedrandom()
// This is the seedrandom function described above.
//
math['seedrandom'] = function(seed, use_entropy) {
  var key = [];

  // Flatten the seed string or build one from local entropy if needed.
  var shortseed = mixkey(flatten(
    use_entropy ? [seed, tostring(pool)] :
    0 in arguments ? seed : autoseed(), 3), key);

  // Use the seed to initialize an ARC4 generator.
  var arc4 = new ARC4(key);

  // Mix the randomness into accumulated entropy.
  mixkey(tostring(arc4.S), pool);

  // Override Math.random

  // This function returns a random double in [0, 1) that contains
  // randomness in every bit of the mantissa of the IEEE 754 value.

  math['random'] = function() {         // Closure to return a random double:
    var n = arc4.g(chunks),             // Start with a numerator n < 2 ^ 48
        d = startdenom,                 //   and denominator d = 2 ^ 48.
        x = 0;                          //   and no 'extra last byte'.
    while (n < significance) {          // Fill up all significant digits by
      n = (n + x) * width;              //   shifting numerator and
      d *= width;                       //   denominator and generating a
      x = arc4.g(1);                    //   new least-significant-byte.
    }
    while (n >= overflow) {             // To avoid rounding up, before adding
      n /= 2;                           //   last byte, shift everything
      d /= 2;                           //   right using integer math until
      x >>>= 1;                         //   we have exactly the desired bits.
    }
    return (n + x) / d;                 // Form the number within [0, 1).
  };

  // Return the seed that was used
  return shortseed;
};

//
// ARC4
//
// An ARC4 implementation.  The constructor takes a key in the form of
// an array of at most (width) integers that should be 0 <= x < (width).
//
// The g(count) method returns a pseudorandom integer that concatenates
// the next (count) outputs from ARC4.  Its return value is a number x
// that is in the range 0 <= x < (width ^ count).
//
/** @constructor */
function ARC4(key) {
  var t, keylen = key.length,
      me = this, i = 0, j = me.i = me.j = 0, s = me.S = [];

  // The empty key [] is treated as [0].
  if (!keylen) { key = [keylen++]; }

  // Set up S using the standard key scheduling algorithm.
  while (i < width) {
    s[i] = i++;
  }
  for (i = 0; i < width; i++) {
    s[i] = s[j = mask & (j + key[i % keylen] + (t = s[i]))];
    s[j] = t;
  }

  // The "g" method returns the next (count) outputs as one number.
  (me.g = function(count) {
    // Using instance members instead of closure state nearly doubles speed.
    var t, r = 0,
        i = me.i, j = me.j, s = me.S;
    while (count--) {
      t = s[i = mask & (i + 1)];
      r = r * width + s[mask & ((s[i] = s[j = mask & (j + t)]) + (s[j] = t))];
    }
    me.i = i; me.j = j;
    return r;
    // For robust unpredictability discard an initial batch of values.
    // See http://www.rsa.com/rsalabs/node.asp?id=2009
  })(width);
}

//
// flatten()
// Converts an object tree to nested arrays of strings.
//
function flatten(obj, depth) {
  var result = [], typ = (typeof obj)[0], prop;
  if (depth && typ == 'o') {
    for (prop in obj) {
      try { result.push(flatten(obj[prop], depth - 1)); } catch (e) {}
    }
  }
  return (result.length ? result : typ == 's' ? obj : obj + '\0');
}

//
// mixkey()
// Mixes a string seed into a key that is an array of integers, and
// returns a shortened string seed that is equivalent to the result key.
//
function mixkey(seed, key) {
  var stringseed = seed + '', smear, j = 0;
  while (j < stringseed.length) {
    key[mask & j] =
      mask & ((smear ^= key[mask & j] * 19) + stringseed.charCodeAt(j++));
  }
  return tostring(key);
}

//
// autoseed()
// Returns an object for autoseeding, using window.crypto if available.
//
/** @param {Uint8Array=} seed */
function autoseed(seed) {
  try {
    global.crypto.getRandomValues(seed = new Uint8Array(width));
    return tostring(seed);
  } catch (e) {
    return [+new Date, global, global.navigator.plugins,
            global.screen, tostring(pool)];
  }
}

//
// tostring()
// Converts an array of charcodes to a string
//
function tostring(a) {
  return String.fromCharCode.apply(0, a);
}

//
// When seedrandom.js is loaded, we immediately mix a few bits
// from the built-in RNG into the entropy pool.  Because we do
// not want to intefere with determinstic PRNG state later,
// seedrandom will not call math.random on its own again after
// initialization.
//
mixkey(math.random(), pool);

// End anonymous scope, and pass initial values.
})(
  this,   // global window object
  [],     // pool: entropy pool starts empty
  Math,   // math: package containing random, pow, and seedrandom
  256,    // width: each RC4 output is 0 <= x < 256
  6,      // chunks: at least six RC4 outputs for each double
  52      // digits: there are 52 significant digits in a double
);
//---------------------------------------------------------------------------------- 
//	ver   	date        rfc     auth    comments                                         
// --------------------------------------------------------------------------------- 
//	0.8.6   20170927    IT      IT       Mouseover Off
/* ************ © Copyright 2017 Isaac Thimbleby ******** */
//
//
function createClass(name,rules){
    var style = document.createElement('style');
    style.type = 'text/css';
    document.getElementsByTagName('head')[0].appendChild(style);
    if(!(style.sheet||{}).insertRule) 
        (style.styleSheet || style.sheet).addRule(name, rules);
    else
        style.sheet.insertRule(name+"{"+rules+"}",0);
}
createClass('.svgtxt',	"-webkit-touch-callout:none; -webkit-user-select:none; -khtml-user-select:none; -moz-user-select:none; -ms-user-select:none; -o-user-select:none; user-select:none;");

// Start time;
var TESTTYPE = "standard";
var d = new Date();
var startTime = d.getTime();
//
var lineThickness = 1;
if (($(window).height() > 552) && ($(window).width() > 820)) {
	if ($(window).width()/20 < $(window).height()/12-lineThickness*5) {
		cx = $(window).width()/20-lineThickness;
		cy = cx;
	} else {
		cy = $(window).height()/12-lineThickness-lineThickness*5;
		cx = cy;
	}
} else {
	cx = 40; 
	cy = cx;
}
d3.select(window).on('resize', resize);
// Horizontal and vertical radii for icons
// Note to self: Change name of cx/cy
function resize() {	
	d3.select("#myCanvas").remove();
	d3.select("#myQuestions").remove();
	d3.select("#skipText").remove();

	if (($(window).height() > 552) && ($(window).width() > 820)) {
		if ($(window).width()/20 < $(window).height()/12-lineThickness*5) {
			cx = $(window).width()/20-lineThickness;
			cy = cx;
		} else {
			cy = $(window).height()/12-lineThickness-lineThickness*5;
			cx = cy;
		}
	} else {
		cx = 40; 
		cy = cx;
	}
	spacing = cx*1.00;
	iconSizeX = 2*(cx+lineThickness+spacing);
	iconSizeY = 2*(cy+lineThickness+spacing);
	aw = maxG*iconSizeX;
	ah = maxG*iconSizeY;
	w = aw+iconSizeX*2;
	h = aw+lineThickness*6;
	draw1();
	draw2();
	draw3();
	updateRadii();
}

// Mouse-over
var mouseOrder = [0,1,2];
var currentSet = 0;
// Spacing
var spacing = cx*1.00;
var interSpacing = 0.15;
// total icon size
var iconSizeX = 2*(cx+lineThickness+spacing);
var iconSizeY = 2*(cy+lineThickness+spacing);
// Grid size
var maxG = 3 
// Available width and height of canvas for question icons
var aw = maxG*iconSizeX;
var ah = maxG*iconSizeY;
//Width and height of 'canvas'
var w = aw+lineThickness*6+iconSizeX*2;
var h = aw;
// Max Difficulty
//var maxDifficulty = allPuzzleTypes.length;
var difficulty = 0;
// Annulus width
var annulusWidth = 1.5;
var radii = [];
// Number of possible answers
var maxNAnswers = 6;
var lessAnswers = 4;
// Grid size
var maxG = 3; //allPuzzleTypes[0][0][0];
// Question Storage
//var mt = [[],[]];
var questionsAsked = [startTime,[],[],[],[],[]];
var propertyStorage = [[],[],[],[],[],[],[],[],[],[]];
var iconProperties = [];
/*for (var x = 0; x < maxDifficulty; x++) {
	iconProperties[x] = "";
}*/
// Maximum number of interlocking shapes (this should probably really be called maxAnulli)
var maxShapes = 2; //3;
// difficulty category at which a rotation offset is used;
var rotationOffset = 0.6;
// difficulty category at which clear wrong answers are not presented (e.g. wrong annuli or shade)
var noClearlyWrong = 0.7;
var clearlyWrong = 0.2;
// difficulty category at which more answers are presented & how many if less.
//var moreOptions = 0.5;
// difficulty category at which harder layouts are used
var harderLayouts = 2/5;
var bothHarderLayouts = 3/5;
// Quantity of inter-item variety attempted
var varietyValue = 1;
// timer for controlling mouseovers
var timer = true;
if (mouseOrder[currentSet] == 1) {
	timer = false;
}
// 		0-1/5: 	 0 patterns 
//		1/5-2/5: 1 pattern
//		2/5-3/5: 2 patterns
//		3/5-4/5: 3 patterns
//		4/5-1:	 4 patterns
//var arrgh = [0,0,0,0]
//console.log(arrgh);
//for (x = 0; x < arrgh.length; x++) {
//	arrgh[x] += arrgh[(x-1)%arrgh.length];
//}

/*var	svg = d3.select("body")
				.append("svg:svg")
				.attr("width", w)
				.attr("height", h)
				.attr("id", "myCanvas");*/	
				
				//function to print self.numberGridArray during construction
				
function returnStringArray (Arr) {
	if (!(Object.prototype.toString.call( Arr ) === '[object Array]'))
		return "Not an Array!: '"+Arr+"'";
	var temp = "[";
	for (var x = 0; x < Arr.length; x++) {
		if (Object.prototype.toString.call( Arr[x] ) === '[object Array]')
			temp+=returnStringArray(Arr[x]);
		else
			temp+=Arr[x]
		if (x < Arr.length - 1)
			temp+=", "
	}
	temp+="]"
	return temp;
}
//02-orders.js:
//
//
// 02-orders.js
//
//
//
// allPuzzleTypes format: [[GridSizeX, GridSizeY], [Graphical Options], [Logical options], [Layouts], [Answer Layouts], [# starter/full grid], [Answer #variations], #Concealed, Type]
// Graphical Options.length = Logical Options.length = Number of Pattern types used.
//
// *****
// Graphical Options
// 0 - Annulus
// 1 - Dice
// 2 - Petals
// 3 - Spike Rings
// 4 - Tessellating Squares
// 5 - Tessellating Triangles
// 6 - BoxLines
//
// *****
// Logical Options
// 0 - Identity
//
// 1 - 123
// 2 - 112
//
// 3 - Addition
//
// 4 - AND						Commutative
// 5 - OR						Commutative
// 6 - XOR						Commutative
// 7 - XNOR						Commutative
// 8 - NOR						Symmetric
// 9 - NAND						Symmetric
// 10 - ANDNOT					Non-trivial
// 11 - NANDNOT					Non-trivial
// 12 - ORNOT					Non-trivial
// 13 - NORNOT					Non-trivial
// 14 - IFY						Non-trivial
// 15 - IFNY					Non-trivial
// 16 - IFX						Non-trivial
// 17 - IFNX					Non-trivial
// 
// 18 - Magic Squares
// 19 - Basic Symmetry
// 20 - Rotational Symmetry
// 21 - Tessellation
// 22 - Karnaugh Maps
//
// For logic gates: Commutative >> Symmetric >> Non-trivial
//
// *****
// Layout
// One large uncertainty in the order of possibleLayouts is whether [threeOrFour()] is more 
// complex than [1,2] or not. Screen complexity vs puzzle complexity.
// For further uncertainties, see the 'Odd Ball' categories.
// 			
// Uses the format [Scale,[Colour, Form, Rotation],[Colour, Form, Rotation]]
// The outer annuli uses the first array [Colour, Form, Rotation], and the inner annulus uses the second array
// Scale is uniform across annuli
//
// *****
// Number of elements in central icon - determines size of Number grid.
// Mostly used for logic gate Rules.
//
// *****
// Number grid
// THIS TEXT IS INSUFFICIENT OR WRONG
// ALL number patterns must have more than 1 example. 3-4 examples should be better.
// Columns and rows must sum |x| < 9 & total sum must be |x| < 9
// Combined with shade alterations, negatives can be quite hard.
//
// *****
// #Concealed
// 0 = No missing Icons
// 1 = Up to 1 missing Icon
// 2 = Up to 2 missing Icons 
// 3 = Up to 3 missing Icons
// 4 = Up to 4 missing Icons
// NOT INCLUDING '?'
//
// *****
// Type
// 0 - Missing Icon
// 1 - Wrong Icon
// 
// N.b. Grid size is currently fixed as square.
//
// random generators
//maxDif = 10;
//anomUpperBound = 0.6*maxDif; // (inverted)
//anulusUpperBound = 0.2*maxDif; // (inverted)
//difficulty = 3300;

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// the following quote calculates annulusRuleArray, 
// however as generally it doesn't change, annulusRuleArray has been hard coded 
// to the result of that calculation following this comment.
// anulusRuleArray currently doesn't generate identities. It aught to at some point, but this will be added manually for the moment.
/*annulusRuleArray = [];

var done = false;
var loopWarning = 0;
function uniq(value, index, self) { 
	//console.log(self);
	//console.log(value + ", "+ self.length);
	var firstIndex = -1;
	for (var x = 0; x < index; x++) {
		var stop = true;
		for (var y = 0; y < value.length; y++) {
			if (self[x][y] != value[y]) {
				stop = false;
				break;
			}
		}
		if (stop) {
			firstIndex = x
			break;
		}
	}
	if (firstIndex == -1){
		return true;
	}
    return false;
}
function permutator(inputArr) {
  var results = [];

  function permute(arr, memo) {
    var cur, memo = memo || [];

    for (var i = 0; i < arr.length; i++) {
      cur = arr.splice(i, 1);
      if (arr.length === 0) {
        results.push(memo.concat(cur));
      }
      permute(arr.slice(), memo.concat(cur));
      arr.splice(i, 0, cur[0]);
    }
	results = results.filter(uniq)
    return results;
  }

  return permute(inputArr);
}

function annulusIsSame (array1, array2) {
	if (array1.length != array2.length)
		return false;
	if (array1[0] != array2[0])
		return false;
	for (var x = 1; x < array1.length; x++) {
		if (Array.isArray(array1[x]) && Array.isArray(array2[x]))
			return false;
		if (array1[x].length != array2[x].length)
			return false;
		for (var y = 0; y < array1[x].length; y++) {
			if (array1[x][y] != array2[x][y])
				return false;
		}
	}
	return true;
}

function araPush (array) {
	//console.log("array: "+array);
	// formats and pushes unique test item designs to the array
	a = array[0];
	s = array[1];
	c1 = array[2];
	f1 = array[3];
	r1 = array[4];
	c2 = array[5];
	f2 = array[6];
	r2 = array[7];
	if (a < 2)
			var temp2 = [s,[c1,f1,r1]];
		else
			var temp2 = [s,[c1,f1,r1],[c2,f2,r2]];
	//console.log("temp2: "+ returnStringArray(temp2));
	// double check if annulus Rule Array already contains temp2
	var isntAlreadyDone = true;
	for (var x = 0; x < annulusRuleArray.length; x++) {
		if (annulusIsSame(annulusRuleArray[x], temp2)) {
			isntAlreadyDone = false;
			break;
		}
	}
	// if then add temp2 to the array
	if (isntAlreadyDone) {
		annulusRuleArray.push(temp2);
		//console.log(annulusRuleArray);
	}
}

function sumTemp (temporary) {
	console.log("sumTemp");
	// improved sumTemp - handles Identity, H/V & DD/ID.
	var tempCounter = [0,0,0];
	var tempLength = 4;
	if (a == 2)
		tempLength = 7;
	for (var x = 0; x < tempLength; x++) {
		if (temporary[x] == 1)
			tempCounter[1]++;
		else if (temporary[x] == 2)
			tempCounter[2]++;
		else if (temporary[x] == 0)
			tempCounter[0]++;
	}
	return tempCounter;
}

var a = 1;
var s = 0;
var c1 = 0;
var f1 = 0;
var r1 = 0;
var c2 = 0;
var f2 = 0;
var r2 = 0;
var tempAnnulus = [a,s,c1,f1,r1,c2,f2,r2];
console.log("identity");
console.log(tempAnnulus);
//araPush(tempAnnulus); // identity
//console.log(returnStringArray(annulusRuleArray));
console.log("for loop");
for (var z = 2; z < tempAnnulus.length; z++) {
	// first ele. of tempAnnulus is the number of annuli.
	// make n. of H/V equal to z, from left to right - overwriting anything else.
	for (var y = 1; y < tempAnnulus.length; y++) {
		if (y < z)
			tempAnnulus[y] = 1;
		else
			tempAnnulus[y] = 0;
	}
	// remove the number of annuli from the array, so that it isn't shuffled in via permute.
	var tempNumberlessAnnulus = tempAnnulus.slice(1);
	// Permute, push then increment n. of DD/ID, and repeat until equal to x.
	for (var x = 0; x <= z; x++) {
		// Permute tempAnnulus
		var arrayOfShuffledTA = permutator(tempNumberlessAnnulus);
		for (var n = 0; n < arrayOfShuffledTA.length; n++) {
			// Add the number of annuli back in.
			arrayOfShuffledTA[n].unshift(0);
			// Set the number of annuli, when the second annuli aren't used
			// push once with a second set using identity and once with one set of annuli.
			for (var l = 4; l < arrayOfShuffledTA[n].length; l++) {
				if (arrayOfShuffledTA[n][l] != 0) {
					arrayOfShuffledTA[n][0] = 2;
					break;
				}
				arrayOfShuffledTA[n][0] = 1;
			}
			if (arrayOfShuffledTA[n][0] == 1) {
				// push with one annuli
				araPush(arrayOfShuffledTA[n]);
				arrayOfShuffledTA[n][0] = 2;
			}
			// push each permutation of tempAnnulus with two annuli
			araPush(arrayOfShuffledTA[n]);
		}
		// swap an additional H/V for DD/ID
		tempNumberlessAnnulus[x] = 2;
	}
	
	// increment z
	if (tempAnnulus.length > 10) {
		console.warn ("Something is adding elements to tempAnnulus.");
		break;
	}
}
console.log("annulusRuleArray:");
console.log(annulusRuleArray);
document.write(returnStringArray(annulusRuleArray));*/

annulusRuleArray = [[0,[0,0,0]],[0,[0,0,0],[0,0,0]],[1, [0, 0, 0]], [1, [0, 0, 0], [0, 0, 0]], [0, [1, 0, 0]], [0, [1, 0, 0], [0, 0, 0]], [0, [0, 1, 0]], [0, [0, 1, 0], [0, 0, 0]], [0, [0, 0, 1], [0, 0, 0]], [0, [0, 0, 0], [1, 0, 0]], [0, [0, 0, 0], [0, 1, 0]], [0, [0, 0, 0], [0, 0, 1]], [2, [0, 0, 0]], [2, [0, 0, 0], [0, 0, 0]], [0, [2, 0, 0]], [0, [2, 0, 0], [0, 0, 0]], [0, [0, 2, 0]], [0, [0, 2, 0], [0, 0, 0]], [0, [0, 0, 2], [0, 0, 0]], [0, [0, 0, 0], [2, 0, 0]], [0, [0, 0, 0], [0, 2, 0]], [0, [0, 0, 0], [0, 0, 2]], [2, [2, 0, 0]], [2, [2, 0, 0], [0, 0, 0]], [2, [0, 2, 0]], [2, [0, 2, 0], [0, 0, 0]], [2, [0, 0, 2], [0, 0, 0]], [2, [0, 0, 0], [2, 0, 0]], [2, [0, 0, 0], [0, 2, 0]], [2, [0, 0, 0], [0, 0, 2]], [0, [2, 2, 0]], [0, [2, 2, 0], [0, 0, 0]], [0, [2, 0, 2], [0, 0, 0]], [0, [2, 0, 0], [2, 0, 0]], [0, [2, 0, 0], [0, 2, 0]], [0, [2, 0, 0], [0, 0, 2]], [0, [0, 2, 2], [0, 0, 0]], [0, [0, 2, 0], [2, 0, 0]], [0, [0, 2, 0], [0, 2, 0]], [0, [0, 2, 0], [0, 0, 2]], [0, [0, 0, 2], [2, 0, 0]], [0, [0, 0, 2], [0, 2, 0]], [0, [0, 0, 2], [0, 0, 2]], [0, [0, 0, 0], [2, 2, 0]], [0, [0, 0, 0], [2, 0, 2]], [0, [0, 0, 0], [0, 2, 2]], [1, [1, 0, 0]], [1, [1, 0, 0], [0, 0, 0]], [1, [0, 1, 0]], [1, [0, 1, 0], [0, 0, 0]], [1, [0, 0, 1], [0, 0, 0]], [1, [0, 0, 0], [1, 0, 0]], [1, [0, 0, 0], [0, 1, 0]], [1, [0, 0, 0], [0, 0, 1]], [0, [1, 1, 0]], [0, [1, 1, 0], [0, 0, 0]], [0, [1, 0, 1], [0, 0, 0]], [0, [1, 0, 0], [1, 0, 0]], [0, [1, 0, 0], [0, 1, 0]], [0, [1, 0, 0], [0, 0, 1]], [0, [0, 1, 1], [0, 0, 0]], [0, [0, 1, 0], [1, 0, 0]], [0, [0, 1, 0], [0, 1, 0]], [0, [0, 1, 0], [0, 0, 1]], [0, [0, 0, 1], [1, 0, 0]], [0, [0, 0, 1], [0, 1, 0]], [0, [0, 0, 1], [0, 0, 1]], [0, [0, 0, 0], [1, 1, 0]], [0, [0, 0, 0], [1, 0, 1]], [0, [0, 0, 0], [0, 1, 1]], [2, [1, 0, 0]], [2, [1, 0, 0], [0, 0, 0]], [2, [0, 1, 0]], [2, [0, 1, 0], [0, 0, 0]], [2, [0, 0, 1], [0, 0, 0]], [2, [0, 0, 0], [1, 0, 0]], [2, [0, 0, 0], [0, 1, 0]], [2, [0, 0, 0], [0, 0, 1]], [1, [2, 0, 0]], [1, [2, 0, 0], [0, 0, 0]], [1, [0, 2, 0]], [1, [0, 2, 0], [0, 0, 0]], [1, [0, 0, 2], [0, 0, 0]], [1, [0, 0, 0], [2, 0, 0]], [1, [0, 0, 0], [0, 2, 0]], [1, [0, 0, 0], [0, 0, 2]], [0, [2, 1, 0]], [0, [2, 1, 0], [0, 0, 0]], [0, [2, 0, 1], [0, 0, 0]], [0, [2, 0, 0], [1, 0, 0]], [0, [2, 0, 0], [0, 1, 0]], [0, [2, 0, 0], [0, 0, 1]], [0, [1, 2, 0]], [0, [1, 2, 0], [0, 0, 0]], [0, [1, 0, 2], [0, 0, 0]], [0, [1, 0, 0], [2, 0, 0]], [0, [1, 0, 0], [0, 2, 0]], [0, [1, 0, 0], [0, 0, 2]], [0, [0, 2, 1], [0, 0, 0]], [0, [0, 2, 0], [1, 0, 0]], [0, [0, 2, 0], [0, 1, 0]], [0, [0, 2, 0], [0, 0, 1]], [0, [0, 1, 2], [0, 0, 0]], [0, [0, 1, 0], [2, 0, 0]], [0, [0, 1, 0], [0, 2, 0]], [0, [0, 1, 0], [0, 0, 2]], [0, [0, 0, 2], [1, 0, 0]], [0, [0, 0, 2], [0, 1, 0]], [0, [0, 0, 2], [0, 0, 1]], [0, [0, 0, 1], [2, 0, 0]], [0, [0, 0, 1], [0, 2, 0]], [0, [0, 0, 1], [0, 0, 2]], [0, [0, 0, 0], [2, 1, 0]], [0, [0, 0, 0], [2, 0, 1]], [0, [0, 0, 0], [1, 2, 0]], [0, [0, 0, 0], [1, 0, 2]], [0, [0, 0, 0], [0, 2, 1]], [0, [0, 0, 0], [0, 1, 2]], [2, [2, 0, 0]], [2, [2, 0, 0], [0, 0, 0]], [2, [0, 2, 0]], [2, [0, 2, 0], [0, 0, 0]], [2, [0, 0, 2], [0, 0, 0]], [2, [0, 0, 0], [2, 0, 0]], [2, [0, 0, 0], [0, 2, 0]], [2, [0, 0, 0], [0, 0, 2]], [0, [2, 2, 0]], [0, [2, 2, 0], [0, 0, 0]], [0, [2, 0, 2], [0, 0, 0]], [0, [2, 0, 0], [2, 0, 0]], [0, [2, 0, 0], [0, 2, 0]], [0, [2, 0, 0], [0, 0, 2]], [0, [0, 2, 2], [0, 0, 0]], [0, [0, 2, 0], [2, 0, 0]], [0, [0, 2, 0], [0, 2, 0]], [0, [0, 2, 0], [0, 0, 2]], [0, [0, 0, 2], [2, 0, 0]], [0, [0, 0, 2], [0, 2, 0]], [0, [0, 0, 2], [0, 0, 2]], [0, [0, 0, 0], [2, 2, 0]], [0, [0, 0, 0], [2, 0, 2]], [0, [0, 0, 0], [0, 2, 2]], [2, [2, 2, 0]], [2, [2, 2, 0], [0, 0, 0]], [2, [2, 0, 2], [0, 0, 0]], [2, [2, 0, 0], [2, 0, 0]], [2, [2, 0, 0], [0, 2, 0]], [2, [2, 0, 0], [0, 0, 2]], [2, [0, 2, 2], [0, 0, 0]], [2, [0, 2, 0], [2, 0, 0]], [2, [0, 2, 0], [0, 2, 0]], [2, [0, 2, 0], [0, 0, 2]], [2, [0, 0, 2], [2, 0, 0]], [2, [0, 0, 2], [0, 2, 0]], [2, [0, 0, 2], [0, 0, 2]], [2, [0, 0, 0], [2, 2, 0]], [2, [0, 0, 0], [2, 0, 2]], [2, [0, 0, 0], [0, 2, 2]], [0, [2, 2, 2], [0, 0, 0]], [0, [2, 2, 0], [2, 0, 0]], [0, [2, 2, 0], [0, 2, 0]], [0, [2, 2, 0], [0, 0, 2]], [0, [2, 0, 2], [2, 0, 0]], [0, [2, 0, 2], [0, 2, 0]], [0, [2, 0, 2], [0, 0, 2]], [0, [2, 0, 0], [2, 2, 0]], [0, [2, 0, 0], [2, 0, 2]], [0, [2, 0, 0], [0, 2, 2]], [0, [0, 2, 2], [2, 0, 0]], [0, [0, 2, 2], [0, 2, 0]], [0, [0, 2, 2], [0, 0, 2]], [0, [0, 2, 0], [2, 2, 0]], [0, [0, 2, 0], [2, 0, 2]], [0, [0, 2, 0], [0, 2, 2]], [0, [0, 0, 2], [2, 2, 0]], [0, [0, 0, 2], [2, 0, 2]], [0, [0, 0, 2], [0, 2, 2]], [0, [0, 0, 0], [2, 2, 2]], [1, [1, 1, 0]], [1, [1, 1, 0], [0, 0, 0]], [1, [1, 0, 1], [0, 0, 0]], [1, [1, 0, 0], [1, 0, 0]], [1, [1, 0, 0], [0, 1, 0]], [1, [1, 0, 0], [0, 0, 1]], [1, [0, 1, 1], [0, 0, 0]], [1, [0, 1, 0], [1, 0, 0]], [1, [0, 1, 0], [0, 1, 0]], [1, [0, 1, 0], [0, 0, 1]], [1, [0, 0, 1], [1, 0, 0]], [1, [0, 0, 1], [0, 1, 0]], [1, [0, 0, 1], [0, 0, 1]], [1, [0, 0, 0], [1, 1, 0]], [1, [0, 0, 0], [1, 0, 1]], [1, [0, 0, 0], [0, 1, 1]], [0, [1, 1, 1], [0, 0, 0]], [0, [1, 1, 0], [1, 0, 0]], [0, [1, 1, 0], [0, 1, 0]], [0, [1, 1, 0], [0, 0, 1]], [0, [1, 0, 1], [1, 0, 0]], [0, [1, 0, 1], [0, 1, 0]], [0, [1, 0, 1], [0, 0, 1]], [0, [1, 0, 0], [1, 1, 0]], [0, [1, 0, 0], [1, 0, 1]], [0, [1, 0, 0], [0, 1, 1]], [0, [0, 1, 1], [1, 0, 0]], [0, [0, 1, 1], [0, 1, 0]], [0, [0, 1, 1], [0, 0, 1]], [0, [0, 1, 0], [1, 1, 0]], [0, [0, 1, 0], [1, 0, 1]], [0, [0, 1, 0], [0, 1, 1]], [0, [0, 0, 1], [1, 1, 0]], [0, [0, 0, 1], [1, 0, 1]], [0, [0, 0, 1], [0, 1, 1]], [0, [0, 0, 0], [1, 1, 1]], [2, [1, 1, 0]], [2, [1, 1, 0], [0, 0, 0]], [2, [1, 0, 1], [0, 0, 0]], [2, [1, 0, 0], [1, 0, 0]], [2, [1, 0, 0], [0, 1, 0]], [2, [1, 0, 0], [0, 0, 1]], [2, [0, 1, 1], [0, 0, 0]], [2, [0, 1, 0], [1, 0, 0]], [2, [0, 1, 0], [0, 1, 0]], [2, [0, 1, 0], [0, 0, 1]], [2, [0, 0, 1], [1, 0, 0]], [2, [0, 0, 1], [0, 1, 0]], [2, [0, 0, 1], [0, 0, 1]], [2, [0, 0, 0], [1, 1, 0]], [2, [0, 0, 0], [1, 0, 1]], [2, [0, 0, 0], [0, 1, 1]], [1, [2, 1, 0]], [1, [2, 1, 0], [0, 0, 0]], [1, [2, 0, 1], [0, 0, 0]], [1, [2, 0, 0], [1, 0, 0]], [1, [2, 0, 0], [0, 1, 0]], [1, [2, 0, 0], [0, 0, 1]], [1, [1, 2, 0]], [1, [1, 2, 0], [0, 0, 0]], [1, [1, 0, 2], [0, 0, 0]], [1, [1, 0, 0], [2, 0, 0]], [1, [1, 0, 0], [0, 2, 0]], [1, [1, 0, 0], [0, 0, 2]], [1, [0, 2, 1], [0, 0, 0]], [1, [0, 2, 0], [1, 0, 0]], [1, [0, 2, 0], [0, 1, 0]], [1, [0, 2, 0], [0, 0, 1]], [1, [0, 1, 2], [0, 0, 0]], [1, [0, 1, 0], [2, 0, 0]], [1, [0, 1, 0], [0, 2, 0]], [1, [0, 1, 0], [0, 0, 2]], [1, [0, 0, 2], [1, 0, 0]], [1, [0, 0, 2], [0, 1, 0]], [1, [0, 0, 2], [0, 0, 1]], [1, [0, 0, 1], [2, 0, 0]], [1, [0, 0, 1], [0, 2, 0]], [1, [0, 0, 1], [0, 0, 2]], [1, [0, 0, 0], [2, 1, 0]], [1, [0, 0, 0], [2, 0, 1]], [1, [0, 0, 0], [1, 2, 0]], [1, [0, 0, 0], [1, 0, 2]], [1, [0, 0, 0], [0, 2, 1]], [1, [0, 0, 0], [0, 1, 2]], [0, [2, 1, 1], [0, 0, 0]], [0, [2, 1, 0], [1, 0, 0]], [0, [2, 1, 0], [0, 1, 0]], [0, [2, 1, 0], [0, 0, 1]], [0, [2, 0, 1], [1, 0, 0]], [0, [2, 0, 1], [0, 1, 0]], [0, [2, 0, 1], [0, 0, 1]], [0, [2, 0, 0], [1, 1, 0]], [0, [2, 0, 0], [1, 0, 1]], [0, [2, 0, 0], [0, 1, 1]], [0, [1, 2, 1], [0, 0, 0]], [0, [1, 2, 0], [1, 0, 0]], [0, [1, 2, 0], [0, 1, 0]], [0, [1, 2, 0], [0, 0, 1]], [0, [1, 1, 2], [0, 0, 0]], [0, [1, 1, 0], [2, 0, 0]], [0, [1, 1, 0], [0, 2, 0]], [0, [1, 1, 0], [0, 0, 2]], [0, [1, 0, 2], [1, 0, 0]], [0, [1, 0, 2], [0, 1, 0]], [0, [1, 0, 2], [0, 0, 1]], [0, [1, 0, 1], [2, 0, 0]], [0, [1, 0, 1], [0, 2, 0]], [0, [1, 0, 1], [0, 0, 2]], [0, [1, 0, 0], [2, 1, 0]], [0, [1, 0, 0], [2, 0, 1]], [0, [1, 0, 0], [1, 2, 0]], [0, [1, 0, 0], [1, 0, 2]], [0, [1, 0, 0], [0, 2, 1]], [0, [1, 0, 0], [0, 1, 2]], [0, [0, 2, 1], [1, 0, 0]], [0, [0, 2, 1], [0, 1, 0]], [0, [0, 2, 1], [0, 0, 1]], [0, [0, 2, 0], [1, 1, 0]], [0, [0, 2, 0], [1, 0, 1]], [0, [0, 2, 0], [0, 1, 1]], [0, [0, 1, 2], [1, 0, 0]], [0, [0, 1, 2], [0, 1, 0]], [0, [0, 1, 2], [0, 0, 1]], [0, [0, 1, 1], [2, 0, 0]], [0, [0, 1, 1], [0, 2, 0]], [0, [0, 1, 1], [0, 0, 2]], [0, [0, 1, 0], [2, 1, 0]], [0, [0, 1, 0], [2, 0, 1]], [0, [0, 1, 0], [1, 2, 0]], [0, [0, 1, 0], [1, 0, 2]], [0, [0, 1, 0], [0, 2, 1]], [0, [0, 1, 0], [0, 1, 2]], [0, [0, 0, 2], [1, 1, 0]], [0, [0, 0, 2], [1, 0, 1]], [0, [0, 0, 2], [0, 1, 1]], [0, [0, 0, 1], [2, 1, 0]], [0, [0, 0, 1], [2, 0, 1]], [0, [0, 0, 1], [1, 2, 0]], [0, [0, 0, 1], [1, 0, 2]], [0, [0, 0, 1], [0, 2, 1]], [0, [0, 0, 1], [0, 1, 2]], [0, [0, 0, 0], [2, 1, 1]], [0, [0, 0, 0], [1, 2, 1]], [0, [0, 0, 0], [1, 1, 2]], [2, [2, 1, 0]], [2, [2, 1, 0], [0, 0, 0]], [2, [2, 0, 1], [0, 0, 0]], [2, [2, 0, 0], [1, 0, 0]], [2, [2, 0, 0], [0, 1, 0]], [2, [2, 0, 0], [0, 0, 1]], [2, [1, 2, 0]], [2, [1, 2, 0], [0, 0, 0]], [2, [1, 0, 2], [0, 0, 0]], [2, [1, 0, 0], [2, 0, 0]], [2, [1, 0, 0], [0, 2, 0]], [2, [1, 0, 0], [0, 0, 2]], [2, [0, 2, 1], [0, 0, 0]], [2, [0, 2, 0], [1, 0, 0]], [2, [0, 2, 0], [0, 1, 0]], [2, [0, 2, 0], [0, 0, 1]], [2, [0, 1, 2], [0, 0, 0]], [2, [0, 1, 0], [2, 0, 0]], [2, [0, 1, 0], [0, 2, 0]], [2, [0, 1, 0], [0, 0, 2]], [2, [0, 0, 2], [1, 0, 0]], [2, [0, 0, 2], [0, 1, 0]], [2, [0, 0, 2], [0, 0, 1]], [2, [0, 0, 1], [2, 0, 0]], [2, [0, 0, 1], [0, 2, 0]], [2, [0, 0, 1], [0, 0, 2]], [2, [0, 0, 0], [2, 1, 0]], [2, [0, 0, 0], [2, 0, 1]], [2, [0, 0, 0], [1, 2, 0]], [2, [0, 0, 0], [1, 0, 2]], [2, [0, 0, 0], [0, 2, 1]], [2, [0, 0, 0], [0, 1, 2]], [1, [2, 2, 0]], [1, [2, 2, 0], [0, 0, 0]], [1, [2, 0, 2], [0, 0, 0]], [1, [2, 0, 0], [2, 0, 0]], [1, [2, 0, 0], [0, 2, 0]], [1, [2, 0, 0], [0, 0, 2]], [1, [0, 2, 2], [0, 0, 0]], [1, [0, 2, 0], [2, 0, 0]], [1, [0, 2, 0], [0, 2, 0]], [1, [0, 2, 0], [0, 0, 2]], [1, [0, 0, 2], [2, 0, 0]], [1, [0, 0, 2], [0, 2, 0]], [1, [0, 0, 2], [0, 0, 2]], [1, [0, 0, 0], [2, 2, 0]], [1, [0, 0, 0], [2, 0, 2]], [1, [0, 0, 0], [0, 2, 2]], [0, [2, 2, 1], [0, 0, 0]], [0, [2, 2, 0], [1, 0, 0]], [0, [2, 2, 0], [0, 1, 0]], [0, [2, 2, 0], [0, 0, 1]], [0, [2, 1, 2], [0, 0, 0]], [0, [2, 1, 0], [2, 0, 0]], [0, [2, 1, 0], [0, 2, 0]], [0, [2, 1, 0], [0, 0, 2]], [0, [2, 0, 2], [1, 0, 0]], [0, [2, 0, 2], [0, 1, 0]], [0, [2, 0, 2], [0, 0, 1]], [0, [2, 0, 1], [2, 0, 0]], [0, [2, 0, 1], [0, 2, 0]], [0, [2, 0, 1], [0, 0, 2]], [0, [2, 0, 0], [2, 1, 0]], [0, [2, 0, 0], [2, 0, 1]], [0, [2, 0, 0], [1, 2, 0]], [0, [2, 0, 0], [1, 0, 2]], [0, [2, 0, 0], [0, 2, 1]], [0, [2, 0, 0], [0, 1, 2]], [0, [1, 2, 2], [0, 0, 0]], [0, [1, 2, 0], [2, 0, 0]], [0, [1, 2, 0], [0, 2, 0]], [0, [1, 2, 0], [0, 0, 2]], [0, [1, 0, 2], [2, 0, 0]], [0, [1, 0, 2], [0, 2, 0]], [0, [1, 0, 2], [0, 0, 2]], [0, [1, 0, 0], [2, 2, 0]], [0, [1, 0, 0], [2, 0, 2]], [0, [1, 0, 0], [0, 2, 2]], [0, [0, 2, 2], [1, 0, 0]], [0, [0, 2, 2], [0, 1, 0]], [0, [0, 2, 2], [0, 0, 1]], [0, [0, 2, 1], [2, 0, 0]], [0, [0, 2, 1], [0, 2, 0]], [0, [0, 2, 1], [0, 0, 2]], [0, [0, 2, 0], [2, 1, 0]], [0, [0, 2, 0], [2, 0, 1]], [0, [0, 2, 0], [1, 2, 0]], [0, [0, 2, 0], [1, 0, 2]], [0, [0, 2, 0], [0, 2, 1]], [0, [0, 2, 0], [0, 1, 2]], [0, [0, 1, 2], [2, 0, 0]], [0, [0, 1, 2], [0, 2, 0]], [0, [0, 1, 2], [0, 0, 2]], [0, [0, 1, 0], [2, 2, 0]], [0, [0, 1, 0], [2, 0, 2]], [0, [0, 1, 0], [0, 2, 2]], [0, [0, 0, 2], [2, 1, 0]], [0, [0, 0, 2], [2, 0, 1]], [0, [0, 0, 2], [1, 2, 0]], [0, [0, 0, 2], [1, 0, 2]], [0, [0, 0, 2], [0, 2, 1]], [0, [0, 0, 2], [0, 1, 2]], [0, [0, 0, 1], [2, 2, 0]], [0, [0, 0, 1], [2, 0, 2]], [0, [0, 0, 1], [0, 2, 2]], [0, [0, 0, 0], [2, 2, 1]], [0, [0, 0, 0], [2, 1, 2]], [0, [0, 0, 0], [1, 2, 2]], [2, [2, 2, 0]], [2, [2, 2, 0], [0, 0, 0]], [2, [2, 0, 2], [0, 0, 0]], [2, [2, 0, 0], [2, 0, 0]], [2, [2, 0, 0], [0, 2, 0]], [2, [2, 0, 0], [0, 0, 2]], [2, [0, 2, 2], [0, 0, 0]], [2, [0, 2, 0], [2, 0, 0]], [2, [0, 2, 0], [0, 2, 0]], [2, [0, 2, 0], [0, 0, 2]], [2, [0, 0, 2], [2, 0, 0]], [2, [0, 0, 2], [0, 2, 0]], [2, [0, 0, 2], [0, 0, 2]], [2, [0, 0, 0], [2, 2, 0]], [2, [0, 0, 0], [2, 0, 2]], [2, [0, 0, 0], [0, 2, 2]], [0, [2, 2, 2], [0, 0, 0]], [0, [2, 2, 0], [2, 0, 0]], [0, [2, 2, 0], [0, 2, 0]], [0, [2, 2, 0], [0, 0, 2]], [0, [2, 0, 2], [2, 0, 0]], [0, [2, 0, 2], [0, 2, 0]], [0, [2, 0, 2], [0, 0, 2]], [0, [2, 0, 0], [2, 2, 0]], [0, [2, 0, 0], [2, 0, 2]], [0, [2, 0, 0], [0, 2, 2]], [0, [0, 2, 2], [2, 0, 0]], [0, [0, 2, 2], [0, 2, 0]], [0, [0, 2, 2], [0, 0, 2]], [0, [0, 2, 0], [2, 2, 0]], [0, [0, 2, 0], [2, 0, 2]], [0, [0, 2, 0], [0, 2, 2]], [0, [0, 0, 2], [2, 2, 0]], [0, [0, 0, 2], [2, 0, 2]], [0, [0, 0, 2], [0, 2, 2]], [0, [0, 0, 0], [2, 2, 2]], [2, [2, 2, 2], [0, 0, 0]], [2, [2, 2, 0], [2, 0, 0]], [2, [2, 2, 0], [0, 2, 0]], [2, [2, 2, 0], [0, 0, 2]], [2, [2, 0, 2], [2, 0, 0]], [2, [2, 0, 2], [0, 2, 0]], [2, [2, 0, 2], [0, 0, 2]], [2, [2, 0, 0], [2, 2, 0]], [2, [2, 0, 0], [2, 0, 2]], [2, [2, 0, 0], [0, 2, 2]], [2, [0, 2, 2], [2, 0, 0]], [2, [0, 2, 2], [0, 2, 0]], [2, [0, 2, 2], [0, 0, 2]], [2, [0, 2, 0], [2, 2, 0]], [2, [0, 2, 0], [2, 0, 2]], [2, [0, 2, 0], [0, 2, 2]], [2, [0, 0, 2], [2, 2, 0]], [2, [0, 0, 2], [2, 0, 2]], [2, [0, 0, 2], [0, 2, 2]], [2, [0, 0, 0], [2, 2, 2]], [0, [2, 2, 2], [2, 0, 0]], [0, [2, 2, 2], [0, 2, 0]], [0, [2, 2, 2], [0, 0, 2]], [0, [2, 2, 0], [2, 2, 0]], [0, [2, 2, 0], [2, 0, 2]], [0, [2, 2, 0], [0, 2, 2]], [0, [2, 0, 2], [2, 2, 0]], [0, [2, 0, 2], [2, 0, 2]], [0, [2, 0, 2], [0, 2, 2]], [0, [2, 0, 0], [2, 2, 2]], [0, [0, 2, 2], [2, 2, 0]], [0, [0, 2, 2], [2, 0, 2]], [0, [0, 2, 2], [0, 2, 2]], [0, [0, 2, 0], [2, 2, 2]], [0, [0, 0, 2], [2, 2, 2]], [1, [1, 1, 1], [0, 0, 0]], [1, [1, 1, 0], [1, 0, 0]], [1, [1, 1, 0], [0, 1, 0]], [1, [1, 1, 0], [0, 0, 1]], [1, [1, 0, 1], [1, 0, 0]], [1, [1, 0, 1], [0, 1, 0]], [1, [1, 0, 1], [0, 0, 1]], [1, [1, 0, 0], [1, 1, 0]], [1, [1, 0, 0], [1, 0, 1]], [1, [1, 0, 0], [0, 1, 1]], [1, [0, 1, 1], [1, 0, 0]], [1, [0, 1, 1], [0, 1, 0]], [1, [0, 1, 1], [0, 0, 1]], [1, [0, 1, 0], [1, 1, 0]], [1, [0, 1, 0], [1, 0, 1]], [1, [0, 1, 0], [0, 1, 1]], [1, [0, 0, 1], [1, 1, 0]], [1, [0, 0, 1], [1, 0, 1]], [1, [0, 0, 1], [0, 1, 1]], [1, [0, 0, 0], [1, 1, 1]], [0, [1, 1, 1], [1, 0, 0]], [0, [1, 1, 1], [0, 1, 0]], [0, [1, 1, 1], [0, 0, 1]], [0, [1, 1, 0], [1, 1, 0]], [0, [1, 1, 0], [1, 0, 1]], [0, [1, 1, 0], [0, 1, 1]], [0, [1, 0, 1], [1, 1, 0]], [0, [1, 0, 1], [1, 0, 1]], [0, [1, 0, 1], [0, 1, 1]], [0, [1, 0, 0], [1, 1, 1]], [0, [0, 1, 1], [1, 1, 0]], [0, [0, 1, 1], [1, 0, 1]], [0, [0, 1, 1], [0, 1, 1]], [0, [0, 1, 0], [1, 1, 1]], [0, [0, 0, 1], [1, 1, 1]], [2, [1, 1, 1], [0, 0, 0]], [2, [1, 1, 0], [1, 0, 0]], [2, [1, 1, 0], [0, 1, 0]], [2, [1, 1, 0], [0, 0, 1]], [2, [1, 0, 1], [1, 0, 0]], [2, [1, 0, 1], [0, 1, 0]], [2, [1, 0, 1], [0, 0, 1]], [2, [1, 0, 0], [1, 1, 0]], [2, [1, 0, 0], [1, 0, 1]], [2, [1, 0, 0], [0, 1, 1]], [2, [0, 1, 1], [1, 0, 0]], [2, [0, 1, 1], [0, 1, 0]], [2, [0, 1, 1], [0, 0, 1]], [2, [0, 1, 0], [1, 1, 0]], [2, [0, 1, 0], [1, 0, 1]], [2, [0, 1, 0], [0, 1, 1]], [2, [0, 0, 1], [1, 1, 0]], [2, [0, 0, 1], [1, 0, 1]], [2, [0, 0, 1], [0, 1, 1]], [2, [0, 0, 0], [1, 1, 1]], [1, [2, 1, 1], [0, 0, 0]], [1, [2, 1, 0], [1, 0, 0]], [1, [2, 1, 0], [0, 1, 0]], [1, [2, 1, 0], [0, 0, 1]], [1, [2, 0, 1], [1, 0, 0]], [1, [2, 0, 1], [0, 1, 0]], [1, [2, 0, 1], [0, 0, 1]], [1, [2, 0, 0], [1, 1, 0]], [1, [2, 0, 0], [1, 0, 1]], [1, [2, 0, 0], [0, 1, 1]], [1, [1, 2, 1], [0, 0, 0]], [1, [1, 2, 0], [1, 0, 0]], [1, [1, 2, 0], [0, 1, 0]], [1, [1, 2, 0], [0, 0, 1]], [1, [1, 1, 2], [0, 0, 0]], [1, [1, 1, 0], [2, 0, 0]], [1, [1, 1, 0], [0, 2, 0]], [1, [1, 1, 0], [0, 0, 2]], [1, [1, 0, 2], [1, 0, 0]], [1, [1, 0, 2], [0, 1, 0]], [1, [1, 0, 2], [0, 0, 1]], [1, [1, 0, 1], [2, 0, 0]], [1, [1, 0, 1], [0, 2, 0]], [1, [1, 0, 1], [0, 0, 2]], [1, [1, 0, 0], [2, 1, 0]], [1, [1, 0, 0], [2, 0, 1]], [1, [1, 0, 0], [1, 2, 0]], [1, [1, 0, 0], [1, 0, 2]], [1, [1, 0, 0], [0, 2, 1]], [1, [1, 0, 0], [0, 1, 2]], [1, [0, 2, 1], [1, 0, 0]], [1, [0, 2, 1], [0, 1, 0]], [1, [0, 2, 1], [0, 0, 1]], [1, [0, 2, 0], [1, 1, 0]], [1, [0, 2, 0], [1, 0, 1]], [1, [0, 2, 0], [0, 1, 1]], [1, [0, 1, 2], [1, 0, 0]], [1, [0, 1, 2], [0, 1, 0]], [1, [0, 1, 2], [0, 0, 1]], [1, [0, 1, 1], [2, 0, 0]], [1, [0, 1, 1], [0, 2, 0]], [1, [0, 1, 1], [0, 0, 2]], [1, [0, 1, 0], [2, 1, 0]], [1, [0, 1, 0], [2, 0, 1]], [1, [0, 1, 0], [1, 2, 0]], [1, [0, 1, 0], [1, 0, 2]], [1, [0, 1, 0], [0, 2, 1]], [1, [0, 1, 0], [0, 1, 2]], [1, [0, 0, 2], [1, 1, 0]], [1, [0, 0, 2], [1, 0, 1]], [1, [0, 0, 2], [0, 1, 1]], [1, [0, 0, 1], [2, 1, 0]], [1, [0, 0, 1], [2, 0, 1]], [1, [0, 0, 1], [1, 2, 0]], [1, [0, 0, 1], [1, 0, 2]], [1, [0, 0, 1], [0, 2, 1]], [1, [0, 0, 1], [0, 1, 2]], [1, [0, 0, 0], [2, 1, 1]], [1, [0, 0, 0], [1, 2, 1]], [1, [0, 0, 0], [1, 1, 2]], [0, [2, 1, 1], [1, 0, 0]], [0, [2, 1, 1], [0, 1, 0]], [0, [2, 1, 1], [0, 0, 1]], [0, [2, 1, 0], [1, 1, 0]], [0, [2, 1, 0], [1, 0, 1]], [0, [2, 1, 0], [0, 1, 1]], [0, [2, 0, 1], [1, 1, 0]], [0, [2, 0, 1], [1, 0, 1]], [0, [2, 0, 1], [0, 1, 1]], [0, [2, 0, 0], [1, 1, 1]], [0, [1, 2, 1], [1, 0, 0]], [0, [1, 2, 1], [0, 1, 0]], [0, [1, 2, 1], [0, 0, 1]], [0, [1, 2, 0], [1, 1, 0]], [0, [1, 2, 0], [1, 0, 1]], [0, [1, 2, 0], [0, 1, 1]], [0, [1, 1, 2], [1, 0, 0]], [0, [1, 1, 2], [0, 1, 0]], [0, [1, 1, 2], [0, 0, 1]], [0, [1, 1, 1], [2, 0, 0]], [0, [1, 1, 1], [0, 2, 0]], [0, [1, 1, 1], [0, 0, 2]], [0, [1, 1, 0], [2, 1, 0]], [0, [1, 1, 0], [2, 0, 1]], [0, [1, 1, 0], [1, 2, 0]], [0, [1, 1, 0], [1, 0, 2]], [0, [1, 1, 0], [0, 2, 1]], [0, [1, 1, 0], [0, 1, 2]], [0, [1, 0, 2], [1, 1, 0]], [0, [1, 0, 2], [1, 0, 1]], [0, [1, 0, 2], [0, 1, 1]], [0, [1, 0, 1], [2, 1, 0]], [0, [1, 0, 1], [2, 0, 1]], [0, [1, 0, 1], [1, 2, 0]], [0, [1, 0, 1], [1, 0, 2]], [0, [1, 0, 1], [0, 2, 1]], [0, [1, 0, 1], [0, 1, 2]], [0, [1, 0, 0], [2, 1, 1]], [0, [1, 0, 0], [1, 2, 1]], [0, [1, 0, 0], [1, 1, 2]], [0, [0, 2, 1], [1, 1, 0]], [0, [0, 2, 1], [1, 0, 1]], [0, [0, 2, 1], [0, 1, 1]], [0, [0, 2, 0], [1, 1, 1]], [0, [0, 1, 2], [1, 1, 0]], [0, [0, 1, 2], [1, 0, 1]], [0, [0, 1, 2], [0, 1, 1]], [0, [0, 1, 1], [2, 1, 0]], [0, [0, 1, 1], [2, 0, 1]], [0, [0, 1, 1], [1, 2, 0]], [0, [0, 1, 1], [1, 0, 2]], [0, [0, 1, 1], [0, 2, 1]], [0, [0, 1, 1], [0, 1, 2]], [0, [0, 1, 0], [2, 1, 1]], [0, [0, 1, 0], [1, 2, 1]], [0, [0, 1, 0], [1, 1, 2]], [0, [0, 0, 2], [1, 1, 1]], [0, [0, 0, 1], [2, 1, 1]], [0, [0, 0, 1], [1, 2, 1]], [0, [0, 0, 1], [1, 1, 2]], [2, [2, 1, 1], [0, 0, 0]], [2, [2, 1, 0], [1, 0, 0]], [2, [2, 1, 0], [0, 1, 0]], [2, [2, 1, 0], [0, 0, 1]], [2, [2, 0, 1], [1, 0, 0]], [2, [2, 0, 1], [0, 1, 0]], [2, [2, 0, 1], [0, 0, 1]], [2, [2, 0, 0], [1, 1, 0]], [2, [2, 0, 0], [1, 0, 1]], [2, [2, 0, 0], [0, 1, 1]], [2, [1, 2, 1], [0, 0, 0]], [2, [1, 2, 0], [1, 0, 0]], [2, [1, 2, 0], [0, 1, 0]], [2, [1, 2, 0], [0, 0, 1]], [2, [1, 1, 2], [0, 0, 0]], [2, [1, 1, 0], [2, 0, 0]], [2, [1, 1, 0], [0, 2, 0]], [2, [1, 1, 0], [0, 0, 2]], [2, [1, 0, 2], [1, 0, 0]], [2, [1, 0, 2], [0, 1, 0]], [2, [1, 0, 2], [0, 0, 1]], [2, [1, 0, 1], [2, 0, 0]], [2, [1, 0, 1], [0, 2, 0]], [2, [1, 0, 1], [0, 0, 2]], [2, [1, 0, 0], [2, 1, 0]], [2, [1, 0, 0], [2, 0, 1]], [2, [1, 0, 0], [1, 2, 0]], [2, [1, 0, 0], [1, 0, 2]], [2, [1, 0, 0], [0, 2, 1]], [2, [1, 0, 0], [0, 1, 2]], [2, [0, 2, 1], [1, 0, 0]], [2, [0, 2, 1], [0, 1, 0]], [2, [0, 2, 1], [0, 0, 1]], [2, [0, 2, 0], [1, 1, 0]], [2, [0, 2, 0], [1, 0, 1]], [2, [0, 2, 0], [0, 1, 1]], [2, [0, 1, 2], [1, 0, 0]], [2, [0, 1, 2], [0, 1, 0]], [2, [0, 1, 2], [0, 0, 1]], [2, [0, 1, 1], [2, 0, 0]], [2, [0, 1, 1], [0, 2, 0]], [2, [0, 1, 1], [0, 0, 2]], [2, [0, 1, 0], [2, 1, 0]], [2, [0, 1, 0], [2, 0, 1]], [2, [0, 1, 0], [1, 2, 0]], [2, [0, 1, 0], [1, 0, 2]], [2, [0, 1, 0], [0, 2, 1]], [2, [0, 1, 0], [0, 1, 2]], [2, [0, 0, 2], [1, 1, 0]], [2, [0, 0, 2], [1, 0, 1]], [2, [0, 0, 2], [0, 1, 1]], [2, [0, 0, 1], [2, 1, 0]], [2, [0, 0, 1], [2, 0, 1]], [2, [0, 0, 1], [1, 2, 0]], [2, [0, 0, 1], [1, 0, 2]], [2, [0, 0, 1], [0, 2, 1]], [2, [0, 0, 1], [0, 1, 2]], [2, [0, 0, 0], [2, 1, 1]], [2, [0, 0, 0], [1, 2, 1]], [2, [0, 0, 0], [1, 1, 2]], [1, [2, 2, 1], [0, 0, 0]], [1, [2, 2, 0], [1, 0, 0]], [1, [2, 2, 0], [0, 1, 0]], [1, [2, 2, 0], [0, 0, 1]], [1, [2, 1, 2], [0, 0, 0]], [1, [2, 1, 0], [2, 0, 0]], [1, [2, 1, 0], [0, 2, 0]], [1, [2, 1, 0], [0, 0, 2]], [1, [2, 0, 2], [1, 0, 0]], [1, [2, 0, 2], [0, 1, 0]], [1, [2, 0, 2], [0, 0, 1]], [1, [2, 0, 1], [2, 0, 0]], [1, [2, 0, 1], [0, 2, 0]], [1, [2, 0, 1], [0, 0, 2]], [1, [2, 0, 0], [2, 1, 0]], [1, [2, 0, 0], [2, 0, 1]], [1, [2, 0, 0], [1, 2, 0]], [1, [2, 0, 0], [1, 0, 2]], [1, [2, 0, 0], [0, 2, 1]], [1, [2, 0, 0], [0, 1, 2]], [1, [1, 2, 2], [0, 0, 0]], [1, [1, 2, 0], [2, 0, 0]], [1, [1, 2, 0], [0, 2, 0]], [1, [1, 2, 0], [0, 0, 2]], [1, [1, 0, 2], [2, 0, 0]], [1, [1, 0, 2], [0, 2, 0]], [1, [1, 0, 2], [0, 0, 2]], [1, [1, 0, 0], [2, 2, 0]], [1, [1, 0, 0], [2, 0, 2]], [1, [1, 0, 0], [0, 2, 2]], [1, [0, 2, 2], [1, 0, 0]], [1, [0, 2, 2], [0, 1, 0]], [1, [0, 2, 2], [0, 0, 1]], [1, [0, 2, 1], [2, 0, 0]], [1, [0, 2, 1], [0, 2, 0]], [1, [0, 2, 1], [0, 0, 2]], [1, [0, 2, 0], [2, 1, 0]], [1, [0, 2, 0], [2, 0, 1]], [1, [0, 2, 0], [1, 2, 0]], [1, [0, 2, 0], [1, 0, 2]], [1, [0, 2, 0], [0, 2, 1]], [1, [0, 2, 0], [0, 1, 2]], [1, [0, 1, 2], [2, 0, 0]], [1, [0, 1, 2], [0, 2, 0]], [1, [0, 1, 2], [0, 0, 2]], [1, [0, 1, 0], [2, 2, 0]], [1, [0, 1, 0], [2, 0, 2]], [1, [0, 1, 0], [0, 2, 2]], [1, [0, 0, 2], [2, 1, 0]], [1, [0, 0, 2], [2, 0, 1]], [1, [0, 0, 2], [1, 2, 0]], [1, [0, 0, 2], [1, 0, 2]], [1, [0, 0, 2], [0, 2, 1]], [1, [0, 0, 2], [0, 1, 2]], [1, [0, 0, 1], [2, 2, 0]], [1, [0, 0, 1], [2, 0, 2]], [1, [0, 0, 1], [0, 2, 2]], [1, [0, 0, 0], [2, 2, 1]], [1, [0, 0, 0], [2, 1, 2]], [1, [0, 0, 0], [1, 2, 2]], [0, [2, 2, 1], [1, 0, 0]], [0, [2, 2, 1], [0, 1, 0]], [0, [2, 2, 1], [0, 0, 1]], [0, [2, 2, 0], [1, 1, 0]], [0, [2, 2, 0], [1, 0, 1]], [0, [2, 2, 0], [0, 1, 1]], [0, [2, 1, 2], [1, 0, 0]], [0, [2, 1, 2], [0, 1, 0]], [0, [2, 1, 2], [0, 0, 1]], [0, [2, 1, 1], [2, 0, 0]], [0, [2, 1, 1], [0, 2, 0]], [0, [2, 1, 1], [0, 0, 2]], [0, [2, 1, 0], [2, 1, 0]], [0, [2, 1, 0], [2, 0, 1]], [0, [2, 1, 0], [1, 2, 0]], [0, [2, 1, 0], [1, 0, 2]], [0, [2, 1, 0], [0, 2, 1]], [0, [2, 1, 0], [0, 1, 2]], [0, [2, 0, 2], [1, 1, 0]], [0, [2, 0, 2], [1, 0, 1]], [0, [2, 0, 2], [0, 1, 1]], [0, [2, 0, 1], [2, 1, 0]], [0, [2, 0, 1], [2, 0, 1]], [0, [2, 0, 1], [1, 2, 0]], [0, [2, 0, 1], [1, 0, 2]], [0, [2, 0, 1], [0, 2, 1]], [0, [2, 0, 1], [0, 1, 2]], [0, [2, 0, 0], [2, 1, 1]], [0, [2, 0, 0], [1, 2, 1]], [0, [2, 0, 0], [1, 1, 2]], [0, [1, 2, 2], [1, 0, 0]], [0, [1, 2, 2], [0, 1, 0]], [0, [1, 2, 2], [0, 0, 1]], [0, [1, 2, 1], [2, 0, 0]], [0, [1, 2, 1], [0, 2, 0]], [0, [1, 2, 1], [0, 0, 2]], [0, [1, 2, 0], [2, 1, 0]], [0, [1, 2, 0], [2, 0, 1]], [0, [1, 2, 0], [1, 2, 0]], [0, [1, 2, 0], [1, 0, 2]], [0, [1, 2, 0], [0, 2, 1]], [0, [1, 2, 0], [0, 1, 2]], [0, [1, 1, 2], [2, 0, 0]], [0, [1, 1, 2], [0, 2, 0]], [0, [1, 1, 2], [0, 0, 2]], [0, [1, 1, 0], [2, 2, 0]], [0, [1, 1, 0], [2, 0, 2]], [0, [1, 1, 0], [0, 2, 2]], [0, [1, 0, 2], [2, 1, 0]], [0, [1, 0, 2], [2, 0, 1]], [0, [1, 0, 2], [1, 2, 0]], [0, [1, 0, 2], [1, 0, 2]], [0, [1, 0, 2], [0, 2, 1]], [0, [1, 0, 2], [0, 1, 2]], [0, [1, 0, 1], [2, 2, 0]], [0, [1, 0, 1], [2, 0, 2]], [0, [1, 0, 1], [0, 2, 2]], [0, [1, 0, 0], [2, 2, 1]], [0, [1, 0, 0], [2, 1, 2]], [0, [1, 0, 0], [1, 2, 2]], [0, [0, 2, 2], [1, 1, 0]], [0, [0, 2, 2], [1, 0, 1]], [0, [0, 2, 2], [0, 1, 1]], [0, [0, 2, 1], [2, 1, 0]], [0, [0, 2, 1], [2, 0, 1]], [0, [0, 2, 1], [1, 2, 0]], [0, [0, 2, 1], [1, 0, 2]], [0, [0, 2, 1], [0, 2, 1]], [0, [0, 2, 1], [0, 1, 2]], [0, [0, 2, 0], [2, 1, 1]], [0, [0, 2, 0], [1, 2, 1]], [0, [0, 2, 0], [1, 1, 2]], [0, [0, 1, 2], [2, 1, 0]], [0, [0, 1, 2], [2, 0, 1]], [0, [0, 1, 2], [1, 2, 0]], [0, [0, 1, 2], [1, 0, 2]], [0, [0, 1, 2], [0, 2, 1]], [0, [0, 1, 2], [0, 1, 2]], [0, [0, 1, 1], [2, 2, 0]], [0, [0, 1, 1], [2, 0, 2]], [0, [0, 1, 1], [0, 2, 2]], [0, [0, 1, 0], [2, 2, 1]], [0, [0, 1, 0], [2, 1, 2]], [0, [0, 1, 0], [1, 2, 2]], [0, [0, 0, 2], [2, 1, 1]], [0, [0, 0, 2], [1, 2, 1]], [0, [0, 0, 2], [1, 1, 2]], [0, [0, 0, 1], [2, 2, 1]], [0, [0, 0, 1], [2, 1, 2]], [0, [0, 0, 1], [1, 2, 2]], [2, [2, 2, 1], [0, 0, 0]], [2, [2, 2, 0], [1, 0, 0]], [2, [2, 2, 0], [0, 1, 0]], [2, [2, 2, 0], [0, 0, 1]], [2, [2, 1, 2], [0, 0, 0]], [2, [2, 1, 0], [2, 0, 0]], [2, [2, 1, 0], [0, 2, 0]], [2, [2, 1, 0], [0, 0, 2]], [2, [2, 0, 2], [1, 0, 0]], [2, [2, 0, 2], [0, 1, 0]], [2, [2, 0, 2], [0, 0, 1]], [2, [2, 0, 1], [2, 0, 0]], [2, [2, 0, 1], [0, 2, 0]], [2, [2, 0, 1], [0, 0, 2]], [2, [2, 0, 0], [2, 1, 0]], [2, [2, 0, 0], [2, 0, 1]], [2, [2, 0, 0], [1, 2, 0]], [2, [2, 0, 0], [1, 0, 2]], [2, [2, 0, 0], [0, 2, 1]], [2, [2, 0, 0], [0, 1, 2]], [2, [1, 2, 2], [0, 0, 0]], [2, [1, 2, 0], [2, 0, 0]], [2, [1, 2, 0], [0, 2, 0]], [2, [1, 2, 0], [0, 0, 2]], [2, [1, 0, 2], [2, 0, 0]], [2, [1, 0, 2], [0, 2, 0]], [2, [1, 0, 2], [0, 0, 2]], [2, [1, 0, 0], [2, 2, 0]], [2, [1, 0, 0], [2, 0, 2]], [2, [1, 0, 0], [0, 2, 2]], [2, [0, 2, 2], [1, 0, 0]], [2, [0, 2, 2], [0, 1, 0]], [2, [0, 2, 2], [0, 0, 1]], [2, [0, 2, 1], [2, 0, 0]], [2, [0, 2, 1], [0, 2, 0]], [2, [0, 2, 1], [0, 0, 2]], [2, [0, 2, 0], [2, 1, 0]], [2, [0, 2, 0], [2, 0, 1]], [2, [0, 2, 0], [1, 2, 0]], [2, [0, 2, 0], [1, 0, 2]], [2, [0, 2, 0], [0, 2, 1]], [2, [0, 2, 0], [0, 1, 2]], [2, [0, 1, 2], [2, 0, 0]], [2, [0, 1, 2], [0, 2, 0]], [2, [0, 1, 2], [0, 0, 2]], [2, [0, 1, 0], [2, 2, 0]], [2, [0, 1, 0], [2, 0, 2]], [2, [0, 1, 0], [0, 2, 2]], [2, [0, 0, 2], [2, 1, 0]], [2, [0, 0, 2], [2, 0, 1]], [2, [0, 0, 2], [1, 2, 0]], [2, [0, 0, 2], [1, 0, 2]], [2, [0, 0, 2], [0, 2, 1]], [2, [0, 0, 2], [0, 1, 2]], [2, [0, 0, 1], [2, 2, 0]], [2, [0, 0, 1], [2, 0, 2]], [2, [0, 0, 1], [0, 2, 2]], [2, [0, 0, 0], [2, 2, 1]], [2, [0, 0, 0], [2, 1, 2]], [2, [0, 0, 0], [1, 2, 2]], [1, [2, 2, 2], [0, 0, 0]], [1, [2, 2, 0], [2, 0, 0]], [1, [2, 2, 0], [0, 2, 0]], [1, [2, 2, 0], [0, 0, 2]], [1, [2, 0, 2], [2, 0, 0]], [1, [2, 0, 2], [0, 2, 0]], [1, [2, 0, 2], [0, 0, 2]], [1, [2, 0, 0], [2, 2, 0]], [1, [2, 0, 0], [2, 0, 2]], [1, [2, 0, 0], [0, 2, 2]], [1, [0, 2, 2], [2, 0, 0]], [1, [0, 2, 2], [0, 2, 0]], [1, [0, 2, 2], [0, 0, 2]], [1, [0, 2, 0], [2, 2, 0]], [1, [0, 2, 0], [2, 0, 2]], [1, [0, 2, 0], [0, 2, 2]], [1, [0, 0, 2], [2, 2, 0]], [1, [0, 0, 2], [2, 0, 2]], [1, [0, 0, 2], [0, 2, 2]], [1, [0, 0, 0], [2, 2, 2]], [0, [2, 2, 2], [1, 0, 0]], [0, [2, 2, 2], [0, 1, 0]], [0, [2, 2, 2], [0, 0, 1]], [0, [2, 2, 1], [2, 0, 0]], [0, [2, 2, 1], [0, 2, 0]], [0, [2, 2, 1], [0, 0, 2]], [0, [2, 2, 0], [2, 1, 0]], [0, [2, 2, 0], [2, 0, 1]], [0, [2, 2, 0], [1, 2, 0]], [0, [2, 2, 0], [1, 0, 2]], [0, [2, 2, 0], [0, 2, 1]], [0, [2, 2, 0], [0, 1, 2]], [0, [2, 1, 2], [2, 0, 0]], [0, [2, 1, 2], [0, 2, 0]], [0, [2, 1, 2], [0, 0, 2]], [0, [2, 1, 0], [2, 2, 0]], [0, [2, 1, 0], [2, 0, 2]], [0, [2, 1, 0], [0, 2, 2]], [0, [2, 0, 2], [2, 1, 0]], [0, [2, 0, 2], [2, 0, 1]], [0, [2, 0, 2], [1, 2, 0]], [0, [2, 0, 2], [1, 0, 2]], [0, [2, 0, 2], [0, 2, 1]], [0, [2, 0, 2], [0, 1, 2]], [0, [2, 0, 1], [2, 2, 0]], [0, [2, 0, 1], [2, 0, 2]], [0, [2, 0, 1], [0, 2, 2]], [0, [2, 0, 0], [2, 2, 1]], [0, [2, 0, 0], [2, 1, 2]], [0, [2, 0, 0], [1, 2, 2]], [0, [1, 2, 2], [2, 0, 0]], [0, [1, 2, 2], [0, 2, 0]], [0, [1, 2, 2], [0, 0, 2]], [0, [1, 2, 0], [2, 2, 0]], [0, [1, 2, 0], [2, 0, 2]], [0, [1, 2, 0], [0, 2, 2]], [0, [1, 0, 2], [2, 2, 0]], [0, [1, 0, 2], [2, 0, 2]], [0, [1, 0, 2], [0, 2, 2]], [0, [1, 0, 0], [2, 2, 2]], [0, [0, 2, 2], [2, 1, 0]], [0, [0, 2, 2], [2, 0, 1]], [0, [0, 2, 2], [1, 2, 0]], [0, [0, 2, 2], [1, 0, 2]], [0, [0, 2, 2], [0, 2, 1]], [0, [0, 2, 2], [0, 1, 2]], [0, [0, 2, 1], [2, 2, 0]], [0, [0, 2, 1], [2, 0, 2]], [0, [0, 2, 1], [0, 2, 2]], [0, [0, 2, 0], [2, 2, 1]], [0, [0, 2, 0], [2, 1, 2]], [0, [0, 2, 0], [1, 2, 2]], [0, [0, 1, 2], [2, 2, 0]], [0, [0, 1, 2], [2, 0, 2]], [0, [0, 1, 2], [0, 2, 2]], [0, [0, 1, 0], [2, 2, 2]], [0, [0, 0, 2], [2, 2, 1]], [0, [0, 0, 2], [2, 1, 2]], [0, [0, 0, 2], [1, 2, 2]], [0, [0, 0, 1], [2, 2, 2]], [2, [2, 2, 2], [0, 0, 0]], [2, [2, 2, 0], [2, 0, 0]], [2, [2, 2, 0], [0, 2, 0]], [2, [2, 2, 0], [0, 0, 2]], [2, [2, 0, 2], [2, 0, 0]], [2, [2, 0, 2], [0, 2, 0]], [2, [2, 0, 2], [0, 0, 2]], [2, [2, 0, 0], [2, 2, 0]], [2, [2, 0, 0], [2, 0, 2]], [2, [2, 0, 0], [0, 2, 2]], [2, [0, 2, 2], [2, 0, 0]], [2, [0, 2, 2], [0, 2, 0]], [2, [0, 2, 2], [0, 0, 2]], [2, [0, 2, 0], [2, 2, 0]], [2, [0, 2, 0], [2, 0, 2]], [2, [0, 2, 0], [0, 2, 2]], [2, [0, 0, 2], [2, 2, 0]], [2, [0, 0, 2], [2, 0, 2]], [2, [0, 0, 2], [0, 2, 2]], [2, [0, 0, 0], [2, 2, 2]], [0, [2, 2, 2], [2, 0, 0]], [0, [2, 2, 2], [0, 2, 0]], [0, [2, 2, 2], [0, 0, 2]], [0, [2, 2, 0], [2, 2, 0]], [0, [2, 2, 0], [2, 0, 2]], [0, [2, 2, 0], [0, 2, 2]], [0, [2, 0, 2], [2, 2, 0]], [0, [2, 0, 2], [2, 0, 2]], [0, [2, 0, 2], [0, 2, 2]], [0, [2, 0, 0], [2, 2, 2]], [0, [0, 2, 2], [2, 2, 0]], [0, [0, 2, 2], [2, 0, 2]], [0, [0, 2, 2], [0, 2, 2]], [0, [0, 2, 0], [2, 2, 2]], [0, [0, 0, 2], [2, 2, 2]], [2, [2, 2, 2], [2, 0, 0]], [2, [2, 2, 2], [0, 2, 0]], [2, [2, 2, 2], [0, 0, 2]], [2, [2, 2, 0], [2, 2, 0]], [2, [2, 2, 0], [2, 0, 2]], [2, [2, 2, 0], [0, 2, 2]], [2, [2, 0, 2], [2, 2, 0]], [2, [2, 0, 2], [2, 0, 2]], [2, [2, 0, 2], [0, 2, 2]], [2, [2, 0, 0], [2, 2, 2]], [2, [0, 2, 2], [2, 2, 0]], [2, [0, 2, 2], [2, 0, 2]], [2, [0, 2, 2], [0, 2, 2]], [2, [0, 2, 0], [2, 2, 2]], [2, [0, 0, 2], [2, 2, 2]], [0, [2, 2, 2], [2, 2, 0]], [0, [2, 2, 2], [2, 0, 2]], [0, [2, 2, 2], [0, 2, 2]], [0, [2, 2, 0], [2, 2, 2]], [0, [2, 0, 2], [2, 2, 2]], [0, [0, 2, 2], [2, 2, 2]], [1, [1, 1, 1], [1, 0, 0]], [1, [1, 1, 1], [0, 1, 0]], [1, [1, 1, 1], [0, 0, 1]], [1, [1, 1, 0], [1, 1, 0]], [1, [1, 1, 0], [1, 0, 1]], [1, [1, 1, 0], [0, 1, 1]], [1, [1, 0, 1], [1, 1, 0]], [1, [1, 0, 1], [1, 0, 1]], [1, [1, 0, 1], [0, 1, 1]], [1, [1, 0, 0], [1, 1, 1]], [1, [0, 1, 1], [1, 1, 0]], [1, [0, 1, 1], [1, 0, 1]], [1, [0, 1, 1], [0, 1, 1]], [1, [0, 1, 0], [1, 1, 1]], [1, [0, 0, 1], [1, 1, 1]], [0, [1, 1, 1], [1, 1, 0]], [0, [1, 1, 1], [1, 0, 1]], [0, [1, 1, 1], [0, 1, 1]], [0, [1, 1, 0], [1, 1, 1]], [0, [1, 0, 1], [1, 1, 1]], [0, [0, 1, 1], [1, 1, 1]], [2, [1, 1, 1], [1, 0, 0]], [2, [1, 1, 1], [0, 1, 0]], [2, [1, 1, 1], [0, 0, 1]], [2, [1, 1, 0], [1, 1, 0]], [2, [1, 1, 0], [1, 0, 1]], [2, [1, 1, 0], [0, 1, 1]], [2, [1, 0, 1], [1, 1, 0]], [2, [1, 0, 1], [1, 0, 1]], [2, [1, 0, 1], [0, 1, 1]], [2, [1, 0, 0], [1, 1, 1]], [2, [0, 1, 1], [1, 1, 0]], [2, [0, 1, 1], [1, 0, 1]], [2, [0, 1, 1], [0, 1, 1]], [2, [0, 1, 0], [1, 1, 1]], [2, [0, 0, 1], [1, 1, 1]], [1, [2, 1, 1], [1, 0, 0]], [1, [2, 1, 1], [0, 1, 0]], [1, [2, 1, 1], [0, 0, 1]], [1, [2, 1, 0], [1, 1, 0]], [1, [2, 1, 0], [1, 0, 1]], [1, [2, 1, 0], [0, 1, 1]], [1, [2, 0, 1], [1, 1, 0]], [1, [2, 0, 1], [1, 0, 1]], [1, [2, 0, 1], [0, 1, 1]], [1, [2, 0, 0], [1, 1, 1]], [1, [1, 2, 1], [1, 0, 0]], [1, [1, 2, 1], [0, 1, 0]], [1, [1, 2, 1], [0, 0, 1]], [1, [1, 2, 0], [1, 1, 0]], [1, [1, 2, 0], [1, 0, 1]], [1, [1, 2, 0], [0, 1, 1]], [1, [1, 1, 2], [1, 0, 0]], [1, [1, 1, 2], [0, 1, 0]], [1, [1, 1, 2], [0, 0, 1]], [1, [1, 1, 1], [2, 0, 0]], [1, [1, 1, 1], [0, 2, 0]], [1, [1, 1, 1], [0, 0, 2]], [1, [1, 1, 0], [2, 1, 0]], [1, [1, 1, 0], [2, 0, 1]], [1, [1, 1, 0], [1, 2, 0]], [1, [1, 1, 0], [1, 0, 2]], [1, [1, 1, 0], [0, 2, 1]], [1, [1, 1, 0], [0, 1, 2]], [1, [1, 0, 2], [1, 1, 0]], [1, [1, 0, 2], [1, 0, 1]], [1, [1, 0, 2], [0, 1, 1]], [1, [1, 0, 1], [2, 1, 0]], [1, [1, 0, 1], [2, 0, 1]], [1, [1, 0, 1], [1, 2, 0]], [1, [1, 0, 1], [1, 0, 2]], [1, [1, 0, 1], [0, 2, 1]], [1, [1, 0, 1], [0, 1, 2]], [1, [1, 0, 0], [2, 1, 1]], [1, [1, 0, 0], [1, 2, 1]], [1, [1, 0, 0], [1, 1, 2]], [1, [0, 2, 1], [1, 1, 0]], [1, [0, 2, 1], [1, 0, 1]], [1, [0, 2, 1], [0, 1, 1]], [1, [0, 2, 0], [1, 1, 1]], [1, [0, 1, 2], [1, 1, 0]], [1, [0, 1, 2], [1, 0, 1]], [1, [0, 1, 2], [0, 1, 1]], [1, [0, 1, 1], [2, 1, 0]], [1, [0, 1, 1], [2, 0, 1]], [1, [0, 1, 1], [1, 2, 0]], [1, [0, 1, 1], [1, 0, 2]], [1, [0, 1, 1], [0, 2, 1]], [1, [0, 1, 1], [0, 1, 2]], [1, [0, 1, 0], [2, 1, 1]], [1, [0, 1, 0], [1, 2, 1]], [1, [0, 1, 0], [1, 1, 2]], [1, [0, 0, 2], [1, 1, 1]], [1, [0, 0, 1], [2, 1, 1]], [1, [0, 0, 1], [1, 2, 1]], [1, [0, 0, 1], [1, 1, 2]], [0, [2, 1, 1], [1, 1, 0]], [0, [2, 1, 1], [1, 0, 1]], [0, [2, 1, 1], [0, 1, 1]], [0, [2, 1, 0], [1, 1, 1]], [0, [2, 0, 1], [1, 1, 1]], [0, [1, 2, 1], [1, 1, 0]], [0, [1, 2, 1], [1, 0, 1]], [0, [1, 2, 1], [0, 1, 1]], [0, [1, 2, 0], [1, 1, 1]], [0, [1, 1, 2], [1, 1, 0]], [0, [1, 1, 2], [1, 0, 1]], [0, [1, 1, 2], [0, 1, 1]], [0, [1, 1, 1], [2, 1, 0]], [0, [1, 1, 1], [2, 0, 1]], [0, [1, 1, 1], [1, 2, 0]], [0, [1, 1, 1], [1, 0, 2]], [0, [1, 1, 1], [0, 2, 1]], [0, [1, 1, 1], [0, 1, 2]], [0, [1, 1, 0], [2, 1, 1]], [0, [1, 1, 0], [1, 2, 1]], [0, [1, 1, 0], [1, 1, 2]], [0, [1, 0, 2], [1, 1, 1]], [0, [1, 0, 1], [2, 1, 1]], [0, [1, 0, 1], [1, 2, 1]], [0, [1, 0, 1], [1, 1, 2]], [0, [0, 2, 1], [1, 1, 1]], [0, [0, 1, 2], [1, 1, 1]], [0, [0, 1, 1], [2, 1, 1]], [0, [0, 1, 1], [1, 2, 1]], [0, [0, 1, 1], [1, 1, 2]], [2, [2, 1, 1], [1, 0, 0]], [2, [2, 1, 1], [0, 1, 0]], [2, [2, 1, 1], [0, 0, 1]], [2, [2, 1, 0], [1, 1, 0]], [2, [2, 1, 0], [1, 0, 1]], [2, [2, 1, 0], [0, 1, 1]], [2, [2, 0, 1], [1, 1, 0]], [2, [2, 0, 1], [1, 0, 1]], [2, [2, 0, 1], [0, 1, 1]], [2, [2, 0, 0], [1, 1, 1]], [2, [1, 2, 1], [1, 0, 0]], [2, [1, 2, 1], [0, 1, 0]], [2, [1, 2, 1], [0, 0, 1]], [2, [1, 2, 0], [1, 1, 0]], [2, [1, 2, 0], [1, 0, 1]], [2, [1, 2, 0], [0, 1, 1]], [2, [1, 1, 2], [1, 0, 0]], [2, [1, 1, 2], [0, 1, 0]], [2, [1, 1, 2], [0, 0, 1]], [2, [1, 1, 1], [2, 0, 0]], [2, [1, 1, 1], [0, 2, 0]], [2, [1, 1, 1], [0, 0, 2]], [2, [1, 1, 0], [2, 1, 0]], [2, [1, 1, 0], [2, 0, 1]], [2, [1, 1, 0], [1, 2, 0]], [2, [1, 1, 0], [1, 0, 2]], [2, [1, 1, 0], [0, 2, 1]], [2, [1, 1, 0], [0, 1, 2]], [2, [1, 0, 2], [1, 1, 0]], [2, [1, 0, 2], [1, 0, 1]], [2, [1, 0, 2], [0, 1, 1]], [2, [1, 0, 1], [2, 1, 0]], [2, [1, 0, 1], [2, 0, 1]], [2, [1, 0, 1], [1, 2, 0]], [2, [1, 0, 1], [1, 0, 2]], [2, [1, 0, 1], [0, 2, 1]], [2, [1, 0, 1], [0, 1, 2]], [2, [1, 0, 0], [2, 1, 1]], [2, [1, 0, 0], [1, 2, 1]], [2, [1, 0, 0], [1, 1, 2]], [2, [0, 2, 1], [1, 1, 0]], [2, [0, 2, 1], [1, 0, 1]], [2, [0, 2, 1], [0, 1, 1]], [2, [0, 2, 0], [1, 1, 1]], [2, [0, 1, 2], [1, 1, 0]], [2, [0, 1, 2], [1, 0, 1]], [2, [0, 1, 2], [0, 1, 1]], [2, [0, 1, 1], [2, 1, 0]], [2, [0, 1, 1], [2, 0, 1]], [2, [0, 1, 1], [1, 2, 0]], [2, [0, 1, 1], [1, 0, 2]], [2, [0, 1, 1], [0, 2, 1]], [2, [0, 1, 1], [0, 1, 2]], [2, [0, 1, 0], [2, 1, 1]], [2, [0, 1, 0], [1, 2, 1]], [2, [0, 1, 0], [1, 1, 2]], [2, [0, 0, 2], [1, 1, 1]], [2, [0, 0, 1], [2, 1, 1]], [2, [0, 0, 1], [1, 2, 1]], [2, [0, 0, 1], [1, 1, 2]], [1, [2, 2, 1], [1, 0, 0]], [1, [2, 2, 1], [0, 1, 0]], [1, [2, 2, 1], [0, 0, 1]], [1, [2, 2, 0], [1, 1, 0]], [1, [2, 2, 0], [1, 0, 1]], [1, [2, 2, 0], [0, 1, 1]], [1, [2, 1, 2], [1, 0, 0]], [1, [2, 1, 2], [0, 1, 0]], [1, [2, 1, 2], [0, 0, 1]], [1, [2, 1, 1], [2, 0, 0]], [1, [2, 1, 1], [0, 2, 0]], [1, [2, 1, 1], [0, 0, 2]], [1, [2, 1, 0], [2, 1, 0]], [1, [2, 1, 0], [2, 0, 1]], [1, [2, 1, 0], [1, 2, 0]], [1, [2, 1, 0], [1, 0, 2]], [1, [2, 1, 0], [0, 2, 1]], [1, [2, 1, 0], [0, 1, 2]], [1, [2, 0, 2], [1, 1, 0]], [1, [2, 0, 2], [1, 0, 1]], [1, [2, 0, 2], [0, 1, 1]], [1, [2, 0, 1], [2, 1, 0]], [1, [2, 0, 1], [2, 0, 1]], [1, [2, 0, 1], [1, 2, 0]], [1, [2, 0, 1], [1, 0, 2]], [1, [2, 0, 1], [0, 2, 1]], [1, [2, 0, 1], [0, 1, 2]], [1, [2, 0, 0], [2, 1, 1]], [1, [2, 0, 0], [1, 2, 1]], [1, [2, 0, 0], [1, 1, 2]], [1, [1, 2, 2], [1, 0, 0]], [1, [1, 2, 2], [0, 1, 0]], [1, [1, 2, 2], [0, 0, 1]], [1, [1, 2, 1], [2, 0, 0]], [1, [1, 2, 1], [0, 2, 0]], [1, [1, 2, 1], [0, 0, 2]], [1, [1, 2, 0], [2, 1, 0]], [1, [1, 2, 0], [2, 0, 1]], [1, [1, 2, 0], [1, 2, 0]], [1, [1, 2, 0], [1, 0, 2]], [1, [1, 2, 0], [0, 2, 1]], [1, [1, 2, 0], [0, 1, 2]], [1, [1, 1, 2], [2, 0, 0]], [1, [1, 1, 2], [0, 2, 0]], [1, [1, 1, 2], [0, 0, 2]], [1, [1, 1, 0], [2, 2, 0]], [1, [1, 1, 0], [2, 0, 2]], [1, [1, 1, 0], [0, 2, 2]], [1, [1, 0, 2], [2, 1, 0]], [1, [1, 0, 2], [2, 0, 1]], [1, [1, 0, 2], [1, 2, 0]], [1, [1, 0, 2], [1, 0, 2]], [1, [1, 0, 2], [0, 2, 1]], [1, [1, 0, 2], [0, 1, 2]], [1, [1, 0, 1], [2, 2, 0]], [1, [1, 0, 1], [2, 0, 2]], [1, [1, 0, 1], [0, 2, 2]], [1, [1, 0, 0], [2, 2, 1]], [1, [1, 0, 0], [2, 1, 2]], [1, [1, 0, 0], [1, 2, 2]], [1, [0, 2, 2], [1, 1, 0]], [1, [0, 2, 2], [1, 0, 1]], [1, [0, 2, 2], [0, 1, 1]], [1, [0, 2, 1], [2, 1, 0]], [1, [0, 2, 1], [2, 0, 1]], [1, [0, 2, 1], [1, 2, 0]], [1, [0, 2, 1], [1, 0, 2]], [1, [0, 2, 1], [0, 2, 1]], [1, [0, 2, 1], [0, 1, 2]], [1, [0, 2, 0], [2, 1, 1]], [1, [0, 2, 0], [1, 2, 1]], [1, [0, 2, 0], [1, 1, 2]], [1, [0, 1, 2], [2, 1, 0]], [1, [0, 1, 2], [2, 0, 1]], [1, [0, 1, 2], [1, 2, 0]], [1, [0, 1, 2], [1, 0, 2]], [1, [0, 1, 2], [0, 2, 1]], [1, [0, 1, 2], [0, 1, 2]], [1, [0, 1, 1], [2, 2, 0]], [1, [0, 1, 1], [2, 0, 2]], [1, [0, 1, 1], [0, 2, 2]], [1, [0, 1, 0], [2, 2, 1]], [1, [0, 1, 0], [2, 1, 2]], [1, [0, 1, 0], [1, 2, 2]], [1, [0, 0, 2], [2, 1, 1]], [1, [0, 0, 2], [1, 2, 1]], [1, [0, 0, 2], [1, 1, 2]], [1, [0, 0, 1], [2, 2, 1]], [1, [0, 0, 1], [2, 1, 2]], [1, [0, 0, 1], [1, 2, 2]], [0, [2, 2, 1], [1, 1, 0]], [0, [2, 2, 1], [1, 0, 1]], [0, [2, 2, 1], [0, 1, 1]], [0, [2, 2, 0], [1, 1, 1]], [0, [2, 1, 2], [1, 1, 0]], [0, [2, 1, 2], [1, 0, 1]], [0, [2, 1, 2], [0, 1, 1]], [0, [2, 1, 1], [2, 1, 0]], [0, [2, 1, 1], [2, 0, 1]], [0, [2, 1, 1], [1, 2, 0]], [0, [2, 1, 1], [1, 0, 2]], [0, [2, 1, 1], [0, 2, 1]], [0, [2, 1, 1], [0, 1, 2]], [0, [2, 1, 0], [2, 1, 1]], [0, [2, 1, 0], [1, 2, 1]], [0, [2, 1, 0], [1, 1, 2]], [0, [2, 0, 2], [1, 1, 1]], [0, [2, 0, 1], [2, 1, 1]], [0, [2, 0, 1], [1, 2, 1]], [0, [2, 0, 1], [1, 1, 2]], [0, [1, 2, 2], [1, 1, 0]], [0, [1, 2, 2], [1, 0, 1]], [0, [1, 2, 2], [0, 1, 1]], [0, [1, 2, 1], [2, 1, 0]], [0, [1, 2, 1], [2, 0, 1]], [0, [1, 2, 1], [1, 2, 0]], [0, [1, 2, 1], [1, 0, 2]], [0, [1, 2, 1], [0, 2, 1]], [0, [1, 2, 1], [0, 1, 2]], [0, [1, 2, 0], [2, 1, 1]], [0, [1, 2, 0], [1, 2, 1]], [0, [1, 2, 0], [1, 1, 2]], [0, [1, 1, 2], [2, 1, 0]], [0, [1, 1, 2], [2, 0, 1]], [0, [1, 1, 2], [1, 2, 0]], [0, [1, 1, 2], [1, 0, 2]], [0, [1, 1, 2], [0, 2, 1]], [0, [1, 1, 2], [0, 1, 2]], [0, [1, 1, 1], [2, 2, 0]], [0, [1, 1, 1], [2, 0, 2]], [0, [1, 1, 1], [0, 2, 2]], [0, [1, 1, 0], [2, 2, 1]], [0, [1, 1, 0], [2, 1, 2]], [0, [1, 1, 0], [1, 2, 2]], [0, [1, 0, 2], [2, 1, 1]], [0, [1, 0, 2], [1, 2, 1]], [0, [1, 0, 2], [1, 1, 2]], [0, [1, 0, 1], [2, 2, 1]], [0, [1, 0, 1], [2, 1, 2]], [0, [1, 0, 1], [1, 2, 2]], [0, [0, 2, 2], [1, 1, 1]], [0, [0, 2, 1], [2, 1, 1]], [0, [0, 2, 1], [1, 2, 1]], [0, [0, 2, 1], [1, 1, 2]], [0, [0, 1, 2], [2, 1, 1]], [0, [0, 1, 2], [1, 2, 1]], [0, [0, 1, 2], [1, 1, 2]], [0, [0, 1, 1], [2, 2, 1]], [0, [0, 1, 1], [2, 1, 2]], [0, [0, 1, 1], [1, 2, 2]], [2, [2, 2, 1], [1, 0, 0]], [2, [2, 2, 1], [0, 1, 0]], [2, [2, 2, 1], [0, 0, 1]], [2, [2, 2, 0], [1, 1, 0]], [2, [2, 2, 0], [1, 0, 1]], [2, [2, 2, 0], [0, 1, 1]], [2, [2, 1, 2], [1, 0, 0]], [2, [2, 1, 2], [0, 1, 0]], [2, [2, 1, 2], [0, 0, 1]], [2, [2, 1, 1], [2, 0, 0]], [2, [2, 1, 1], [0, 2, 0]], [2, [2, 1, 1], [0, 0, 2]], [2, [2, 1, 0], [2, 1, 0]], [2, [2, 1, 0], [2, 0, 1]], [2, [2, 1, 0], [1, 2, 0]], [2, [2, 1, 0], [1, 0, 2]], [2, [2, 1, 0], [0, 2, 1]], [2, [2, 1, 0], [0, 1, 2]], [2, [2, 0, 2], [1, 1, 0]], [2, [2, 0, 2], [1, 0, 1]], [2, [2, 0, 2], [0, 1, 1]], [2, [2, 0, 1], [2, 1, 0]], [2, [2, 0, 1], [2, 0, 1]], [2, [2, 0, 1], [1, 2, 0]], [2, [2, 0, 1], [1, 0, 2]], [2, [2, 0, 1], [0, 2, 1]], [2, [2, 0, 1], [0, 1, 2]], [2, [2, 0, 0], [2, 1, 1]], [2, [2, 0, 0], [1, 2, 1]], [2, [2, 0, 0], [1, 1, 2]], [2, [1, 2, 2], [1, 0, 0]], [2, [1, 2, 2], [0, 1, 0]], [2, [1, 2, 2], [0, 0, 1]], [2, [1, 2, 1], [2, 0, 0]], [2, [1, 2, 1], [0, 2, 0]], [2, [1, 2, 1], [0, 0, 2]], [2, [1, 2, 0], [2, 1, 0]], [2, [1, 2, 0], [2, 0, 1]], [2, [1, 2, 0], [1, 2, 0]], [2, [1, 2, 0], [1, 0, 2]], [2, [1, 2, 0], [0, 2, 1]], [2, [1, 2, 0], [0, 1, 2]], [2, [1, 1, 2], [2, 0, 0]], [2, [1, 1, 2], [0, 2, 0]], [2, [1, 1, 2], [0, 0, 2]], [2, [1, 1, 0], [2, 2, 0]], [2, [1, 1, 0], [2, 0, 2]], [2, [1, 1, 0], [0, 2, 2]], [2, [1, 0, 2], [2, 1, 0]], [2, [1, 0, 2], [2, 0, 1]], [2, [1, 0, 2], [1, 2, 0]], [2, [1, 0, 2], [1, 0, 2]], [2, [1, 0, 2], [0, 2, 1]], [2, [1, 0, 2], [0, 1, 2]], [2, [1, 0, 1], [2, 2, 0]], [2, [1, 0, 1], [2, 0, 2]], [2, [1, 0, 1], [0, 2, 2]], [2, [1, 0, 0], [2, 2, 1]], [2, [1, 0, 0], [2, 1, 2]], [2, [1, 0, 0], [1, 2, 2]], [2, [0, 2, 2], [1, 1, 0]], [2, [0, 2, 2], [1, 0, 1]], [2, [0, 2, 2], [0, 1, 1]], [2, [0, 2, 1], [2, 1, 0]], [2, [0, 2, 1], [2, 0, 1]], [2, [0, 2, 1], [1, 2, 0]], [2, [0, 2, 1], [1, 0, 2]], [2, [0, 2, 1], [0, 2, 1]], [2, [0, 2, 1], [0, 1, 2]], [2, [0, 2, 0], [2, 1, 1]], [2, [0, 2, 0], [1, 2, 1]], [2, [0, 2, 0], [1, 1, 2]], [2, [0, 1, 2], [2, 1, 0]], [2, [0, 1, 2], [2, 0, 1]], [2, [0, 1, 2], [1, 2, 0]], [2, [0, 1, 2], [1, 0, 2]], [2, [0, 1, 2], [0, 2, 1]], [2, [0, 1, 2], [0, 1, 2]], [2, [0, 1, 1], [2, 2, 0]], [2, [0, 1, 1], [2, 0, 2]], [2, [0, 1, 1], [0, 2, 2]], [2, [0, 1, 0], [2, 2, 1]], [2, [0, 1, 0], [2, 1, 2]], [2, [0, 1, 0], [1, 2, 2]], [2, [0, 0, 2], [2, 1, 1]], [2, [0, 0, 2], [1, 2, 1]], [2, [0, 0, 2], [1, 1, 2]], [2, [0, 0, 1], [2, 2, 1]], [2, [0, 0, 1], [2, 1, 2]], [2, [0, 0, 1], [1, 2, 2]], [1, [2, 2, 2], [1, 0, 0]], [1, [2, 2, 2], [0, 1, 0]], [1, [2, 2, 2], [0, 0, 1]], [1, [2, 2, 1], [2, 0, 0]], [1, [2, 2, 1], [0, 2, 0]], [1, [2, 2, 1], [0, 0, 2]], [1, [2, 2, 0], [2, 1, 0]], [1, [2, 2, 0], [2, 0, 1]], [1, [2, 2, 0], [1, 2, 0]], [1, [2, 2, 0], [1, 0, 2]], [1, [2, 2, 0], [0, 2, 1]], [1, [2, 2, 0], [0, 1, 2]], [1, [2, 1, 2], [2, 0, 0]], [1, [2, 1, 2], [0, 2, 0]], [1, [2, 1, 2], [0, 0, 2]], [1, [2, 1, 0], [2, 2, 0]], [1, [2, 1, 0], [2, 0, 2]], [1, [2, 1, 0], [0, 2, 2]], [1, [2, 0, 2], [2, 1, 0]], [1, [2, 0, 2], [2, 0, 1]], [1, [2, 0, 2], [1, 2, 0]], [1, [2, 0, 2], [1, 0, 2]], [1, [2, 0, 2], [0, 2, 1]], [1, [2, 0, 2], [0, 1, 2]], [1, [2, 0, 1], [2, 2, 0]], [1, [2, 0, 1], [2, 0, 2]], [1, [2, 0, 1], [0, 2, 2]], [1, [2, 0, 0], [2, 2, 1]], [1, [2, 0, 0], [2, 1, 2]], [1, [2, 0, 0], [1, 2, 2]], [1, [1, 2, 2], [2, 0, 0]], [1, [1, 2, 2], [0, 2, 0]], [1, [1, 2, 2], [0, 0, 2]], [1, [1, 2, 0], [2, 2, 0]], [1, [1, 2, 0], [2, 0, 2]], [1, [1, 2, 0], [0, 2, 2]], [1, [1, 0, 2], [2, 2, 0]], [1, [1, 0, 2], [2, 0, 2]], [1, [1, 0, 2], [0, 2, 2]], [1, [1, 0, 0], [2, 2, 2]], [1, [0, 2, 2], [2, 1, 0]], [1, [0, 2, 2], [2, 0, 1]], [1, [0, 2, 2], [1, 2, 0]], [1, [0, 2, 2], [1, 0, 2]], [1, [0, 2, 2], [0, 2, 1]], [1, [0, 2, 2], [0, 1, 2]], [1, [0, 2, 1], [2, 2, 0]], [1, [0, 2, 1], [2, 0, 2]], [1, [0, 2, 1], [0, 2, 2]], [1, [0, 2, 0], [2, 2, 1]], [1, [0, 2, 0], [2, 1, 2]], [1, [0, 2, 0], [1, 2, 2]], [1, [0, 1, 2], [2, 2, 0]], [1, [0, 1, 2], [2, 0, 2]], [1, [0, 1, 2], [0, 2, 2]], [1, [0, 1, 0], [2, 2, 2]], [1, [0, 0, 2], [2, 2, 1]], [1, [0, 0, 2], [2, 1, 2]], [1, [0, 0, 2], [1, 2, 2]], [1, [0, 0, 1], [2, 2, 2]], [0, [2, 2, 2], [1, 1, 0]], [0, [2, 2, 2], [1, 0, 1]], [0, [2, 2, 2], [0, 1, 1]], [0, [2, 2, 1], [2, 1, 0]], [0, [2, 2, 1], [2, 0, 1]], [0, [2, 2, 1], [1, 2, 0]], [0, [2, 2, 1], [1, 0, 2]], [0, [2, 2, 1], [0, 2, 1]], [0, [2, 2, 1], [0, 1, 2]], [0, [2, 2, 0], [2, 1, 1]], [0, [2, 2, 0], [1, 2, 1]], [0, [2, 2, 0], [1, 1, 2]], [0, [2, 1, 2], [2, 1, 0]], [0, [2, 1, 2], [2, 0, 1]], [0, [2, 1, 2], [1, 2, 0]], [0, [2, 1, 2], [1, 0, 2]], [0, [2, 1, 2], [0, 2, 1]], [0, [2, 1, 2], [0, 1, 2]], [0, [2, 1, 1], [2, 2, 0]], [0, [2, 1, 1], [2, 0, 2]], [0, [2, 1, 1], [0, 2, 2]], [0, [2, 1, 0], [2, 2, 1]], [0, [2, 1, 0], [2, 1, 2]], [0, [2, 1, 0], [1, 2, 2]], [0, [2, 0, 2], [2, 1, 1]], [0, [2, 0, 2], [1, 2, 1]], [0, [2, 0, 2], [1, 1, 2]], [0, [2, 0, 1], [2, 2, 1]], [0, [2, 0, 1], [2, 1, 2]], [0, [2, 0, 1], [1, 2, 2]], [0, [1, 2, 2], [2, 1, 0]], [0, [1, 2, 2], [2, 0, 1]], [0, [1, 2, 2], [1, 2, 0]], [0, [1, 2, 2], [1, 0, 2]], [0, [1, 2, 2], [0, 2, 1]], [0, [1, 2, 2], [0, 1, 2]], [0, [1, 2, 1], [2, 2, 0]], [0, [1, 2, 1], [2, 0, 2]], [0, [1, 2, 1], [0, 2, 2]], [0, [1, 2, 0], [2, 2, 1]], [0, [1, 2, 0], [2, 1, 2]], [0, [1, 2, 0], [1, 2, 2]], [0, [1, 1, 2], [2, 2, 0]], [0, [1, 1, 2], [2, 0, 2]], [0, [1, 1, 2], [0, 2, 2]], [0, [1, 1, 0], [2, 2, 2]], [0, [1, 0, 2], [2, 2, 1]], [0, [1, 0, 2], [2, 1, 2]], [0, [1, 0, 2], [1, 2, 2]], [0, [1, 0, 1], [2, 2, 2]], [0, [0, 2, 2], [2, 1, 1]], [0, [0, 2, 2], [1, 2, 1]], [0, [0, 2, 2], [1, 1, 2]], [0, [0, 2, 1], [2, 2, 1]], [0, [0, 2, 1], [2, 1, 2]], [0, [0, 2, 1], [1, 2, 2]], [0, [0, 1, 2], [2, 2, 1]], [0, [0, 1, 2], [2, 1, 2]], [0, [0, 1, 2], [1, 2, 2]], [0, [0, 1, 1], [2, 2, 2]], [2, [2, 2, 2], [1, 0, 0]], [2, [2, 2, 2], [0, 1, 0]], [2, [2, 2, 2], [0, 0, 1]], [2, [2, 2, 1], [2, 0, 0]], [2, [2, 2, 1], [0, 2, 0]], [2, [2, 2, 1], [0, 0, 2]], [2, [2, 2, 0], [2, 1, 0]], [2, [2, 2, 0], [2, 0, 1]], [2, [2, 2, 0], [1, 2, 0]], [2, [2, 2, 0], [1, 0, 2]], [2, [2, 2, 0], [0, 2, 1]], [2, [2, 2, 0], [0, 1, 2]], [2, [2, 1, 2], [2, 0, 0]], [2, [2, 1, 2], [0, 2, 0]], [2, [2, 1, 2], [0, 0, 2]], [2, [2, 1, 0], [2, 2, 0]], [2, [2, 1, 0], [2, 0, 2]], [2, [2, 1, 0], [0, 2, 2]], [2, [2, 0, 2], [2, 1, 0]], [2, [2, 0, 2], [2, 0, 1]], [2, [2, 0, 2], [1, 2, 0]], [2, [2, 0, 2], [1, 0, 2]], [2, [2, 0, 2], [0, 2, 1]], [2, [2, 0, 2], [0, 1, 2]], [2, [2, 0, 1], [2, 2, 0]], [2, [2, 0, 1], [2, 0, 2]], [2, [2, 0, 1], [0, 2, 2]], [2, [2, 0, 0], [2, 2, 1]], [2, [2, 0, 0], [2, 1, 2]], [2, [2, 0, 0], [1, 2, 2]], [2, [1, 2, 2], [2, 0, 0]], [2, [1, 2, 2], [0, 2, 0]], [2, [1, 2, 2], [0, 0, 2]], [2, [1, 2, 0], [2, 2, 0]], [2, [1, 2, 0], [2, 0, 2]], [2, [1, 2, 0], [0, 2, 2]], [2, [1, 0, 2], [2, 2, 0]], [2, [1, 0, 2], [2, 0, 2]], [2, [1, 0, 2], [0, 2, 2]], [2, [1, 0, 0], [2, 2, 2]], [2, [0, 2, 2], [2, 1, 0]], [2, [0, 2, 2], [2, 0, 1]], [2, [0, 2, 2], [1, 2, 0]], [2, [0, 2, 2], [1, 0, 2]], [2, [0, 2, 2], [0, 2, 1]], [2, [0, 2, 2], [0, 1, 2]], [2, [0, 2, 1], [2, 2, 0]], [2, [0, 2, 1], [2, 0, 2]], [2, [0, 2, 1], [0, 2, 2]], [2, [0, 2, 0], [2, 2, 1]], [2, [0, 2, 0], [2, 1, 2]], [2, [0, 2, 0], [1, 2, 2]], [2, [0, 1, 2], [2, 2, 0]], [2, [0, 1, 2], [2, 0, 2]], [2, [0, 1, 2], [0, 2, 2]], [2, [0, 1, 0], [2, 2, 2]], [2, [0, 0, 2], [2, 2, 1]], [2, [0, 0, 2], [2, 1, 2]], [2, [0, 0, 2], [1, 2, 2]], [2, [0, 0, 1], [2, 2, 2]], [1, [2, 2, 2], [2, 0, 0]], [1, [2, 2, 2], [0, 2, 0]], [1, [2, 2, 2], [0, 0, 2]], [1, [2, 2, 0], [2, 2, 0]], [1, [2, 2, 0], [2, 0, 2]], [1, [2, 2, 0], [0, 2, 2]], [1, [2, 0, 2], [2, 2, 0]], [1, [2, 0, 2], [2, 0, 2]], [1, [2, 0, 2], [0, 2, 2]], [1, [2, 0, 0], [2, 2, 2]], [1, [0, 2, 2], [2, 2, 0]], [1, [0, 2, 2], [2, 0, 2]], [1, [0, 2, 2], [0, 2, 2]], [1, [0, 2, 0], [2, 2, 2]], [1, [0, 0, 2], [2, 2, 2]], [0, [2, 2, 2], [2, 1, 0]], [0, [2, 2, 2], [2, 0, 1]], [0, [2, 2, 2], [1, 2, 0]], [0, [2, 2, 2], [1, 0, 2]], [0, [2, 2, 2], [0, 2, 1]], [0, [2, 2, 2], [0, 1, 2]], [0, [2, 2, 1], [2, 2, 0]], [0, [2, 2, 1], [2, 0, 2]], [0, [2, 2, 1], [0, 2, 2]], [0, [2, 2, 0], [2, 2, 1]], [0, [2, 2, 0], [2, 1, 2]], [0, [2, 2, 0], [1, 2, 2]], [0, [2, 1, 2], [2, 2, 0]], [0, [2, 1, 2], [2, 0, 2]], [0, [2, 1, 2], [0, 2, 2]], [0, [2, 1, 0], [2, 2, 2]], [0, [2, 0, 2], [2, 2, 1]], [0, [2, 0, 2], [2, 1, 2]], [0, [2, 0, 2], [1, 2, 2]], [0, [2, 0, 1], [2, 2, 2]], [0, [1, 2, 2], [2, 2, 0]], [0, [1, 2, 2], [2, 0, 2]], [0, [1, 2, 2], [0, 2, 2]], [0, [1, 2, 0], [2, 2, 2]], [0, [1, 0, 2], [2, 2, 2]], [0, [0, 2, 2], [2, 2, 1]], [0, [0, 2, 2], [2, 1, 2]], [0, [0, 2, 2], [1, 2, 2]], [0, [0, 2, 1], [2, 2, 2]], [0, [0, 1, 2], [2, 2, 2]], [2, [2, 2, 2], [2, 0, 0]], [2, [2, 2, 2], [0, 2, 0]], [2, [2, 2, 2], [0, 0, 2]], [2, [2, 2, 0], [2, 2, 0]], [2, [2, 2, 0], [2, 0, 2]], [2, [2, 2, 0], [0, 2, 2]], [2, [2, 0, 2], [2, 2, 0]], [2, [2, 0, 2], [2, 0, 2]], [2, [2, 0, 2], [0, 2, 2]], [2, [2, 0, 0], [2, 2, 2]], [2, [0, 2, 2], [2, 2, 0]], [2, [0, 2, 2], [2, 0, 2]], [2, [0, 2, 2], [0, 2, 2]], [2, [0, 2, 0], [2, 2, 2]], [2, [0, 0, 2], [2, 2, 2]], [0, [2, 2, 2], [2, 2, 0]], [0, [2, 2, 2], [2, 0, 2]], [0, [2, 2, 2], [0, 2, 2]], [0, [2, 2, 0], [2, 2, 2]], [0, [2, 0, 2], [2, 2, 2]], [0, [0, 2, 2], [2, 2, 2]], [2, [2, 2, 2], [2, 2, 0]], [2, [2, 2, 2], [2, 0, 2]], [2, [2, 2, 2], [0, 2, 2]], [2, [2, 2, 0], [2, 2, 2]], [2, [2, 0, 2], [2, 2, 2]], [2, [0, 2, 2], [2, 2, 2]], [0, [2, 2, 2], [2, 2, 2]], [1, [1, 1, 1], [1, 1, 0]], [1, [1, 1, 1], [1, 0, 1]], [1, [1, 1, 1], [0, 1, 1]], [1, [1, 1, 0], [1, 1, 1]], [1, [1, 0, 1], [1, 1, 1]], [1, [0, 1, 1], [1, 1, 1]], [0, [1, 1, 1], [1, 1, 1]], [2, [1, 1, 1], [1, 1, 0]], [2, [1, 1, 1], [1, 0, 1]], [2, [1, 1, 1], [0, 1, 1]], [2, [1, 1, 0], [1, 1, 1]], [2, [1, 0, 1], [1, 1, 1]], [2, [0, 1, 1], [1, 1, 1]], [1, [2, 1, 1], [1, 1, 0]], [1, [2, 1, 1], [1, 0, 1]], [1, [2, 1, 1], [0, 1, 1]], [1, [2, 1, 0], [1, 1, 1]], [1, [2, 0, 1], [1, 1, 1]], [1, [1, 2, 1], [1, 1, 0]], [1, [1, 2, 1], [1, 0, 1]], [1, [1, 2, 1], [0, 1, 1]], [1, [1, 2, 0], [1, 1, 1]], [1, [1, 1, 2], [1, 1, 0]], [1, [1, 1, 2], [1, 0, 1]], [1, [1, 1, 2], [0, 1, 1]], [1, [1, 1, 1], [2, 1, 0]], [1, [1, 1, 1], [2, 0, 1]], [1, [1, 1, 1], [1, 2, 0]], [1, [1, 1, 1], [1, 0, 2]], [1, [1, 1, 1], [0, 2, 1]], [1, [1, 1, 1], [0, 1, 2]], [1, [1, 1, 0], [2, 1, 1]], [1, [1, 1, 0], [1, 2, 1]], [1, [1, 1, 0], [1, 1, 2]], [1, [1, 0, 2], [1, 1, 1]], [1, [1, 0, 1], [2, 1, 1]], [1, [1, 0, 1], [1, 2, 1]], [1, [1, 0, 1], [1, 1, 2]], [1, [0, 2, 1], [1, 1, 1]], [1, [0, 1, 2], [1, 1, 1]], [1, [0, 1, 1], [2, 1, 1]], [1, [0, 1, 1], [1, 2, 1]], [1, [0, 1, 1], [1, 1, 2]], [0, [2, 1, 1], [1, 1, 1]], [0, [1, 2, 1], [1, 1, 1]], [0, [1, 1, 2], [1, 1, 1]], [0, [1, 1, 1], [2, 1, 1]], [0, [1, 1, 1], [1, 2, 1]], [0, [1, 1, 1], [1, 1, 2]], [2, [2, 1, 1], [1, 1, 0]], [2, [2, 1, 1], [1, 0, 1]], [2, [2, 1, 1], [0, 1, 1]], [2, [2, 1, 0], [1, 1, 1]], [2, [2, 0, 1], [1, 1, 1]], [2, [1, 2, 1], [1, 1, 0]], [2, [1, 2, 1], [1, 0, 1]], [2, [1, 2, 1], [0, 1, 1]], [2, [1, 2, 0], [1, 1, 1]], [2, [1, 1, 2], [1, 1, 0]], [2, [1, 1, 2], [1, 0, 1]], [2, [1, 1, 2], [0, 1, 1]], [2, [1, 1, 1], [2, 1, 0]], [2, [1, 1, 1], [2, 0, 1]], [2, [1, 1, 1], [1, 2, 0]], [2, [1, 1, 1], [1, 0, 2]], [2, [1, 1, 1], [0, 2, 1]], [2, [1, 1, 1], [0, 1, 2]], [2, [1, 1, 0], [2, 1, 1]], [2, [1, 1, 0], [1, 2, 1]], [2, [1, 1, 0], [1, 1, 2]], [2, [1, 0, 2], [1, 1, 1]], [2, [1, 0, 1], [2, 1, 1]], [2, [1, 0, 1], [1, 2, 1]], [2, [1, 0, 1], [1, 1, 2]], [2, [0, 2, 1], [1, 1, 1]], [2, [0, 1, 2], [1, 1, 1]], [2, [0, 1, 1], [2, 1, 1]], [2, [0, 1, 1], [1, 2, 1]], [2, [0, 1, 1], [1, 1, 2]], [1, [2, 2, 1], [1, 1, 0]], [1, [2, 2, 1], [1, 0, 1]], [1, [2, 2, 1], [0, 1, 1]], [1, [2, 2, 0], [1, 1, 1]], [1, [2, 1, 2], [1, 1, 0]], [1, [2, 1, 2], [1, 0, 1]], [1, [2, 1, 2], [0, 1, 1]], [1, [2, 1, 1], [2, 1, 0]], [1, [2, 1, 1], [2, 0, 1]], [1, [2, 1, 1], [1, 2, 0]], [1, [2, 1, 1], [1, 0, 2]], [1, [2, 1, 1], [0, 2, 1]], [1, [2, 1, 1], [0, 1, 2]], [1, [2, 1, 0], [2, 1, 1]], [1, [2, 1, 0], [1, 2, 1]], [1, [2, 1, 0], [1, 1, 2]], [1, [2, 0, 2], [1, 1, 1]], [1, [2, 0, 1], [2, 1, 1]], [1, [2, 0, 1], [1, 2, 1]], [1, [2, 0, 1], [1, 1, 2]], [1, [1, 2, 2], [1, 1, 0]], [1, [1, 2, 2], [1, 0, 1]], [1, [1, 2, 2], [0, 1, 1]], [1, [1, 2, 1], [2, 1, 0]], [1, [1, 2, 1], [2, 0, 1]], [1, [1, 2, 1], [1, 2, 0]], [1, [1, 2, 1], [1, 0, 2]], [1, [1, 2, 1], [0, 2, 1]], [1, [1, 2, 1], [0, 1, 2]], [1, [1, 2, 0], [2, 1, 1]], [1, [1, 2, 0], [1, 2, 1]], [1, [1, 2, 0], [1, 1, 2]], [1, [1, 1, 2], [2, 1, 0]], [1, [1, 1, 2], [2, 0, 1]], [1, [1, 1, 2], [1, 2, 0]], [1, [1, 1, 2], [1, 0, 2]], [1, [1, 1, 2], [0, 2, 1]], [1, [1, 1, 2], [0, 1, 2]], [1, [1, 1, 1], [2, 2, 0]], [1, [1, 1, 1], [2, 0, 2]], [1, [1, 1, 1], [0, 2, 2]], [1, [1, 1, 0], [2, 2, 1]], [1, [1, 1, 0], [2, 1, 2]], [1, [1, 1, 0], [1, 2, 2]], [1, [1, 0, 2], [2, 1, 1]], [1, [1, 0, 2], [1, 2, 1]], [1, [1, 0, 2], [1, 1, 2]], [1, [1, 0, 1], [2, 2, 1]], [1, [1, 0, 1], [2, 1, 2]], [1, [1, 0, 1], [1, 2, 2]], [1, [0, 2, 2], [1, 1, 1]], [1, [0, 2, 1], [2, 1, 1]], [1, [0, 2, 1], [1, 2, 1]], [1, [0, 2, 1], [1, 1, 2]], [1, [0, 1, 2], [2, 1, 1]], [1, [0, 1, 2], [1, 2, 1]], [1, [0, 1, 2], [1, 1, 2]], [1, [0, 1, 1], [2, 2, 1]], [1, [0, 1, 1], [2, 1, 2]], [1, [0, 1, 1], [1, 2, 2]], [0, [2, 2, 1], [1, 1, 1]], [0, [2, 1, 2], [1, 1, 1]], [0, [2, 1, 1], [2, 1, 1]], [0, [2, 1, 1], [1, 2, 1]], [0, [2, 1, 1], [1, 1, 2]], [0, [1, 2, 2], [1, 1, 1]], [0, [1, 2, 1], [2, 1, 1]], [0, [1, 2, 1], [1, 2, 1]], [0, [1, 2, 1], [1, 1, 2]], [0, [1, 1, 2], [2, 1, 1]], [0, [1, 1, 2], [1, 2, 1]], [0, [1, 1, 2], [1, 1, 2]], [0, [1, 1, 1], [2, 2, 1]], [0, [1, 1, 1], [2, 1, 2]], [0, [1, 1, 1], [1, 2, 2]], [2, [2, 2, 1], [1, 1, 0]], [2, [2, 2, 1], [1, 0, 1]], [2, [2, 2, 1], [0, 1, 1]], [2, [2, 2, 0], [1, 1, 1]], [2, [2, 1, 2], [1, 1, 0]], [2, [2, 1, 2], [1, 0, 1]], [2, [2, 1, 2], [0, 1, 1]], [2, [2, 1, 1], [2, 1, 0]], [2, [2, 1, 1], [2, 0, 1]], [2, [2, 1, 1], [1, 2, 0]], [2, [2, 1, 1], [1, 0, 2]], [2, [2, 1, 1], [0, 2, 1]], [2, [2, 1, 1], [0, 1, 2]], [2, [2, 1, 0], [2, 1, 1]], [2, [2, 1, 0], [1, 2, 1]], [2, [2, 1, 0], [1, 1, 2]], [2, [2, 0, 2], [1, 1, 1]], [2, [2, 0, 1], [2, 1, 1]], [2, [2, 0, 1], [1, 2, 1]], [2, [2, 0, 1], [1, 1, 2]], [2, [1, 2, 2], [1, 1, 0]], [2, [1, 2, 2], [1, 0, 1]], [2, [1, 2, 2], [0, 1, 1]], [2, [1, 2, 1], [2, 1, 0]], [2, [1, 2, 1], [2, 0, 1]], [2, [1, 2, 1], [1, 2, 0]], [2, [1, 2, 1], [1, 0, 2]], [2, [1, 2, 1], [0, 2, 1]], [2, [1, 2, 1], [0, 1, 2]], [2, [1, 2, 0], [2, 1, 1]], [2, [1, 2, 0], [1, 2, 1]], [2, [1, 2, 0], [1, 1, 2]], [2, [1, 1, 2], [2, 1, 0]], [2, [1, 1, 2], [2, 0, 1]], [2, [1, 1, 2], [1, 2, 0]], [2, [1, 1, 2], [1, 0, 2]], [2, [1, 1, 2], [0, 2, 1]], [2, [1, 1, 2], [0, 1, 2]], [2, [1, 1, 1], [2, 2, 0]], [2, [1, 1, 1], [2, 0, 2]], [2, [1, 1, 1], [0, 2, 2]], [2, [1, 1, 0], [2, 2, 1]], [2, [1, 1, 0], [2, 1, 2]], [2, [1, 1, 0], [1, 2, 2]], [2, [1, 0, 2], [2, 1, 1]], [2, [1, 0, 2], [1, 2, 1]], [2, [1, 0, 2], [1, 1, 2]], [2, [1, 0, 1], [2, 2, 1]], [2, [1, 0, 1], [2, 1, 2]], [2, [1, 0, 1], [1, 2, 2]], [2, [0, 2, 2], [1, 1, 1]], [2, [0, 2, 1], [2, 1, 1]], [2, [0, 2, 1], [1, 2, 1]], [2, [0, 2, 1], [1, 1, 2]], [2, [0, 1, 2], [2, 1, 1]], [2, [0, 1, 2], [1, 2, 1]], [2, [0, 1, 2], [1, 1, 2]], [2, [0, 1, 1], [2, 2, 1]], [2, [0, 1, 1], [2, 1, 2]], [2, [0, 1, 1], [1, 2, 2]], [1, [2, 2, 2], [1, 1, 0]], [1, [2, 2, 2], [1, 0, 1]], [1, [2, 2, 2], [0, 1, 1]], [1, [2, 2, 1], [2, 1, 0]], [1, [2, 2, 1], [2, 0, 1]], [1, [2, 2, 1], [1, 2, 0]], [1, [2, 2, 1], [1, 0, 2]], [1, [2, 2, 1], [0, 2, 1]], [1, [2, 2, 1], [0, 1, 2]], [1, [2, 2, 0], [2, 1, 1]], [1, [2, 2, 0], [1, 2, 1]], [1, [2, 2, 0], [1, 1, 2]], [1, [2, 1, 2], [2, 1, 0]], [1, [2, 1, 2], [2, 0, 1]], [1, [2, 1, 2], [1, 2, 0]], [1, [2, 1, 2], [1, 0, 2]], [1, [2, 1, 2], [0, 2, 1]], [1, [2, 1, 2], [0, 1, 2]], [1, [2, 1, 1], [2, 2, 0]], [1, [2, 1, 1], [2, 0, 2]], [1, [2, 1, 1], [0, 2, 2]], [1, [2, 1, 0], [2, 2, 1]], [1, [2, 1, 0], [2, 1, 2]], [1, [2, 1, 0], [1, 2, 2]], [1, [2, 0, 2], [2, 1, 1]], [1, [2, 0, 2], [1, 2, 1]], [1, [2, 0, 2], [1, 1, 2]], [1, [2, 0, 1], [2, 2, 1]], [1, [2, 0, 1], [2, 1, 2]], [1, [2, 0, 1], [1, 2, 2]], [1, [1, 2, 2], [2, 1, 0]], [1, [1, 2, 2], [2, 0, 1]], [1, [1, 2, 2], [1, 2, 0]], [1, [1, 2, 2], [1, 0, 2]], [1, [1, 2, 2], [0, 2, 1]], [1, [1, 2, 2], [0, 1, 2]], [1, [1, 2, 1], [2, 2, 0]], [1, [1, 2, 1], [2, 0, 2]], [1, [1, 2, 1], [0, 2, 2]], [1, [1, 2, 0], [2, 2, 1]], [1, [1, 2, 0], [2, 1, 2]], [1, [1, 2, 0], [1, 2, 2]], [1, [1, 1, 2], [2, 2, 0]], [1, [1, 1, 2], [2, 0, 2]], [1, [1, 1, 2], [0, 2, 2]], [1, [1, 1, 0], [2, 2, 2]], [1, [1, 0, 2], [2, 2, 1]], [1, [1, 0, 2], [2, 1, 2]], [1, [1, 0, 2], [1, 2, 2]], [1, [1, 0, 1], [2, 2, 2]], [1, [0, 2, 2], [2, 1, 1]], [1, [0, 2, 2], [1, 2, 1]], [1, [0, 2, 2], [1, 1, 2]], [1, [0, 2, 1], [2, 2, 1]], [1, [0, 2, 1], [2, 1, 2]], [1, [0, 2, 1], [1, 2, 2]], [1, [0, 1, 2], [2, 2, 1]], [1, [0, 1, 2], [2, 1, 2]], [1, [0, 1, 2], [1, 2, 2]], [1, [0, 1, 1], [2, 2, 2]], [0, [2, 2, 2], [1, 1, 1]], [0, [2, 2, 1], [2, 1, 1]], [0, [2, 2, 1], [1, 2, 1]], [0, [2, 2, 1], [1, 1, 2]], [0, [2, 1, 2], [2, 1, 1]], [0, [2, 1, 2], [1, 2, 1]], [0, [2, 1, 2], [1, 1, 2]], [0, [2, 1, 1], [2, 2, 1]], [0, [2, 1, 1], [2, 1, 2]], [0, [2, 1, 1], [1, 2, 2]], [0, [1, 2, 2], [2, 1, 1]], [0, [1, 2, 2], [1, 2, 1]], [0, [1, 2, 2], [1, 1, 2]], [0, [1, 2, 1], [2, 2, 1]], [0, [1, 2, 1], [2, 1, 2]], [0, [1, 2, 1], [1, 2, 2]], [0, [1, 1, 2], [2, 2, 1]], [0, [1, 1, 2], [2, 1, 2]], [0, [1, 1, 2], [1, 2, 2]], [0, [1, 1, 1], [2, 2, 2]], [2, [2, 2, 2], [1, 1, 0]], [2, [2, 2, 2], [1, 0, 1]], [2, [2, 2, 2], [0, 1, 1]], [2, [2, 2, 1], [2, 1, 0]], [2, [2, 2, 1], [2, 0, 1]], [2, [2, 2, 1], [1, 2, 0]], [2, [2, 2, 1], [1, 0, 2]], [2, [2, 2, 1], [0, 2, 1]], [2, [2, 2, 1], [0, 1, 2]], [2, [2, 2, 0], [2, 1, 1]], [2, [2, 2, 0], [1, 2, 1]], [2, [2, 2, 0], [1, 1, 2]], [2, [2, 1, 2], [2, 1, 0]], [2, [2, 1, 2], [2, 0, 1]], [2, [2, 1, 2], [1, 2, 0]], [2, [2, 1, 2], [1, 0, 2]], [2, [2, 1, 2], [0, 2, 1]], [2, [2, 1, 2], [0, 1, 2]], [2, [2, 1, 1], [2, 2, 0]], [2, [2, 1, 1], [2, 0, 2]], [2, [2, 1, 1], [0, 2, 2]], [2, [2, 1, 0], [2, 2, 1]], [2, [2, 1, 0], [2, 1, 2]], [2, [2, 1, 0], [1, 2, 2]], [2, [2, 0, 2], [2, 1, 1]], [2, [2, 0, 2], [1, 2, 1]], [2, [2, 0, 2], [1, 1, 2]], [2, [2, 0, 1], [2, 2, 1]], [2, [2, 0, 1], [2, 1, 2]], [2, [2, 0, 1], [1, 2, 2]], [2, [1, 2, 2], [2, 1, 0]], [2, [1, 2, 2], [2, 0, 1]], [2, [1, 2, 2], [1, 2, 0]], [2, [1, 2, 2], [1, 0, 2]], [2, [1, 2, 2], [0, 2, 1]], [2, [1, 2, 2], [0, 1, 2]], [2, [1, 2, 1], [2, 2, 0]], [2, [1, 2, 1], [2, 0, 2]], [2, [1, 2, 1], [0, 2, 2]], [2, [1, 2, 0], [2, 2, 1]], [2, [1, 2, 0], [2, 1, 2]], [2, [1, 2, 0], [1, 2, 2]], [2, [1, 1, 2], [2, 2, 0]], [2, [1, 1, 2], [2, 0, 2]], [2, [1, 1, 2], [0, 2, 2]], [2, [1, 1, 0], [2, 2, 2]], [2, [1, 0, 2], [2, 2, 1]], [2, [1, 0, 2], [2, 1, 2]], [2, [1, 0, 2], [1, 2, 2]], [2, [1, 0, 1], [2, 2, 2]], [2, [0, 2, 2], [2, 1, 1]], [2, [0, 2, 2], [1, 2, 1]], [2, [0, 2, 2], [1, 1, 2]], [2, [0, 2, 1], [2, 2, 1]], [2, [0, 2, 1], [2, 1, 2]], [2, [0, 2, 1], [1, 2, 2]], [2, [0, 1, 2], [2, 2, 1]], [2, [0, 1, 2], [2, 1, 2]], [2, [0, 1, 2], [1, 2, 2]], [2, [0, 1, 1], [2, 2, 2]], [1, [2, 2, 2], [2, 1, 0]], [1, [2, 2, 2], [2, 0, 1]], [1, [2, 2, 2], [1, 2, 0]], [1, [2, 2, 2], [1, 0, 2]], [1, [2, 2, 2], [0, 2, 1]], [1, [2, 2, 2], [0, 1, 2]], [1, [2, 2, 1], [2, 2, 0]], [1, [2, 2, 1], [2, 0, 2]], [1, [2, 2, 1], [0, 2, 2]], [1, [2, 2, 0], [2, 2, 1]], [1, [2, 2, 0], [2, 1, 2]], [1, [2, 2, 0], [1, 2, 2]], [1, [2, 1, 2], [2, 2, 0]], [1, [2, 1, 2], [2, 0, 2]], [1, [2, 1, 2], [0, 2, 2]], [1, [2, 1, 0], [2, 2, 2]], [1, [2, 0, 2], [2, 2, 1]], [1, [2, 0, 2], [2, 1, 2]], [1, [2, 0, 2], [1, 2, 2]], [1, [2, 0, 1], [2, 2, 2]], [1, [1, 2, 2], [2, 2, 0]], [1, [1, 2, 2], [2, 0, 2]], [1, [1, 2, 2], [0, 2, 2]], [1, [1, 2, 0], [2, 2, 2]], [1, [1, 0, 2], [2, 2, 2]], [1, [0, 2, 2], [2, 2, 1]], [1, [0, 2, 2], [2, 1, 2]], [1, [0, 2, 2], [1, 2, 2]], [1, [0, 2, 1], [2, 2, 2]], [1, [0, 1, 2], [2, 2, 2]], [0, [2, 2, 2], [2, 1, 1]], [0, [2, 2, 2], [1, 2, 1]], [0, [2, 2, 2], [1, 1, 2]], [0, [2, 2, 1], [2, 2, 1]], [0, [2, 2, 1], [2, 1, 2]], [0, [2, 2, 1], [1, 2, 2]], [0, [2, 1, 2], [2, 2, 1]], [0, [2, 1, 2], [2, 1, 2]], [0, [2, 1, 2], [1, 2, 2]], [0, [2, 1, 1], [2, 2, 2]], [0, [1, 2, 2], [2, 2, 1]], [0, [1, 2, 2], [2, 1, 2]], [0, [1, 2, 2], [1, 2, 2]], [0, [1, 2, 1], [2, 2, 2]], [0, [1, 1, 2], [2, 2, 2]], [2, [2, 2, 2], [2, 1, 0]], [2, [2, 2, 2], [2, 0, 1]], [2, [2, 2, 2], [1, 2, 0]], [2, [2, 2, 2], [1, 0, 2]], [2, [2, 2, 2], [0, 2, 1]], [2, [2, 2, 2], [0, 1, 2]], [2, [2, 2, 1], [2, 2, 0]], [2, [2, 2, 1], [2, 0, 2]], [2, [2, 2, 1], [0, 2, 2]], [2, [2, 2, 0], [2, 2, 1]], [2, [2, 2, 0], [2, 1, 2]], [2, [2, 2, 0], [1, 2, 2]], [2, [2, 1, 2], [2, 2, 0]], [2, [2, 1, 2], [2, 0, 2]], [2, [2, 1, 2], [0, 2, 2]], [2, [2, 1, 0], [2, 2, 2]], [2, [2, 0, 2], [2, 2, 1]], [2, [2, 0, 2], [2, 1, 2]], [2, [2, 0, 2], [1, 2, 2]], [2, [2, 0, 1], [2, 2, 2]], [2, [1, 2, 2], [2, 2, 0]], [2, [1, 2, 2], [2, 0, 2]], [2, [1, 2, 2], [0, 2, 2]], [2, [1, 2, 0], [2, 2, 2]], [2, [1, 0, 2], [2, 2, 2]], [2, [0, 2, 2], [2, 2, 1]], [2, [0, 2, 2], [2, 1, 2]], [2, [0, 2, 2], [1, 2, 2]], [2, [0, 2, 1], [2, 2, 2]], [2, [0, 1, 2], [2, 2, 2]], [1, [2, 2, 2], [2, 2, 0]], [1, [2, 2, 2], [2, 0, 2]], [1, [2, 2, 2], [0, 2, 2]], [1, [2, 2, 0], [2, 2, 2]], [1, [2, 0, 2], [2, 2, 2]], [1, [0, 2, 2], [2, 2, 2]], [0, [2, 2, 2], [2, 2, 1]], [0, [2, 2, 2], [2, 1, 2]], [0, [2, 2, 2], [1, 2, 2]], [0, [2, 2, 1], [2, 2, 2]], [0, [2, 1, 2], [2, 2, 2]], [0, [1, 2, 2], [2, 2, 2]], [2, [2, 2, 2], [2, 2, 0]], [2, [2, 2, 2], [2, 0, 2]], [2, [2, 2, 2], [0, 2, 2]], [2, [2, 2, 0], [2, 2, 2]], [2, [2, 0, 2], [2, 2, 2]], [2, [0, 2, 2], [2, 2, 2]], [0, [2, 2, 2], [2, 2, 2]], [2, [2, 2, 2], [2, 2, 2]]];
//console.log(annulusRuleArray[0].toString());
function AnulusRNGQu(dif, maxDif) {
	var tempVal12 = Math.floor(Math.random()*2)+1;
	var bool12 = false;
	var tempVal34 = Math.floor(Math.random()*2)+3;
	var bool34 = false;
	
	var temp = annulusRuleArray[Math.floor(dif/maxDif)];
	
	var result = [];
	
	if (temp[0] == 1) {
		result[0] = tempVal12;
		bool12 = true;
	} else if (temp[0] == 2) {
		result[0] = tempVal34;
		bool34 = true;
	} else { 
		result[0] = 0;
	}
	for (var x = 1; x < temp.length; x++) {
		result[x] = [];
		if (temp[x][0] == 1 && bool12) {
			result[x][0] = tempVal12;
			bool12 = !bool12;
		} else if (temp[x][0] == 1) {
			result[x][0] = 2-tempVal12+1;
		} else if (temp[x][0] == 2 && bool34) {
			result[x][0] = tempVal34;
			bool34 = !bool34;
		} else if (temp[x][0] == 2) {
			result[x][0] = 4-tempVal34+3;
		} else {
			result[x][0] = 0;
		}
		if (temp[x][1] == 1 && bool12) {
			result[x][1] = tempVal12;
			bool12 = !bool12;
		} else if (temp[x][1] == 1) {
			result[x][1] = 2-tempVal12+1;
		} else if (temp[x][1] == 2 && bool34) {
			result[x][1] = tempVal34;
			bool34 = !bool34;
		} else if (temp[x][1] == 2) {
			result[x][1] = 4-tempVal34+3;
		} else {
			result[x][1] = 0;
		}
		if (temp[x][2] == 1 && bool12) {
			result[x][2] = tempVal12;
			bool12 = !bool12;
		} else if (temp[x][2] == 1) {
			result[x][2] = 2-tempVal12+1;
		} else if (temp[x][2] == 2 && bool34) {
			result[x][2] = tempVal34;
			bool34 = !bool34;
		} else if (temp[x][2] == 2) {
			result[x][2] = 4-tempVal34+3;
		} else {
			result[x][2] = 0;
		}
	}
	return result;
}
//console.log("difficulty :: Anulus Qu");
//console.log(difficulty + " :: " + returnStringArray(AnulusRNGQu(difficulty)));
			
function AnulusRNGAns(rule, noAns) {	
	//console.log("AnulusRNGAns");
	//console.log("Difficulty: "+dif+" |  Rule: "+returnStringArray(rule));
	//console.log("Number of Answers: "+noAns);
	//
	// count possible non-anomalous answers
	var count = 0;
	if (rule[0])
		count++;
	for (var An = 1; An < rule.length; An++) {
		for (var y = 0; y < rule[An].length; y++) {
			if (rule[An][y]) {
				count++;
			}  
		}
	}
	//console.log("rule count: "+count);
	if (count == 0)
		var noAnomalies = noAns;
	else if (count == 1)
		var noAnomalies = noAns - 2;
	else if (count == 2)
		var noAnomalies = noAns -8;
	else
		var noAnomalies = 0;
	// count = 0: noA = noAns - 0
	// count = 1: noA = noAns - 2
	// count = 2: noA = noAns - 8
	// 1,1, 1,2, 2,1, 2,2, 0,1, 0,2, 1,0, 2,0
	
	// increase anomalous answers proportionally to difficulty
	//
	// maxDif = 10;
	// anomUpperBound = 0.6*MaxDif (inverted)
	// anulusUpperBound = 0.2*maxDif; // (inverted)
	noAnomalies = Math.max(/*Math.floor(noAns*((maxDif - anomUpperBound) - dif)/maxDif),*/ noAnomalies, 0);
	//console.log("noAnomalies: " + noAnomalies);

	// set tempArr to [0,[0,0,0]]
	// this is the default no anomalies, no rules yet.
	var tempArr = [];
	for (var y = 0; y < noAns; y++) {
		tempA = [];
		tempArr.push(tempA);
		tempArr[y].push(0);
		for (var An = 1; An < rule.length; An++) {
			tempA2 = [];
			tempArr[y].push(tempA2);
			for (var x = 0; x < rule[An].length; x++) {
				tempArr[y][An].push(0);
			}
		}
	}
	// MUST NOT BE ANY [0,[0,0,0]]s — Minimum necessary requirement for functioning
	// Frequency analysis stuff goes here
	// i.e. clues & anti-clues
	// Anomalies dealt with further down
	
	// next generate as if no anomalies, but incorporate the rules
	//
	// make a table of each possible permutation of 0,1,2 per rule.
	
	var ansTable = [];
	if (count) {
		var ansTable = [[0],[1],[2]];
		for (var z = 1; z < count; z++) {
			var tempOldLength = 0;
			for (var y = 0; y < 3; y++) {
				var tempLength = ansTable.length;
				for (var x = tempOldLength; x < tempLength; x++) {
					if (y < 2)
						ansTable.push(JSON.parse(JSON.stringify(ansTable[x])));
					ansTable[x].push(y);
					//console.log(returnStringArray(ansTable));
				}
				tempOldLength = tempLength;
			}
		}
	}
	//console.log("Initial ansTable:");
	//console.log(returnStringArray(ansTable));
	// Expand ansTable entries to fit the standard format
	if (!rule[0]) {
		for (var x = 0; x < ansTable.length; x++) {
			// add 0 to the beginning of the array
			ansTable[x].unshift(0);
		}
	}
	for (var An = 1; An < rule.length; An++) {
		for (var y = 0; y < rule[An].length; y++) {
			if (!rule[An][y]) {
				for (var x = 0; x < ansTable.length; x++) {
					// add 0 to pos y of the array
					ansTable[x].splice(1+(An-1)*rule[An].length+y, 0, 0);
				}
			}
		}
	}
	//console.log("Expanded ansTable:")
	//console.log(returnStringArray(ansTable));
	 	
	
	// adds in anomalies, which enables situations where ansTable.length < noAns, including Identity
	// and could allow for any other situation that calls for anomalies.
	if (ansTable.length != 0) {
		//var RNGAnomAdjust = Math.floor(Math.random()*(noAnomalies%ansTable.length));
		for (var x = 0; x < noAnomalies; x++) {
			var notUnique = true;
			var temploopcounter = 0;
			while (notUnique) {
				temploopcounter ++;
				// choose an item already in ansTable to 'edit'.
				tempAnom = JSON.parse(JSON.stringify(ansTable[Math.floor(Math.random()*ansTable.length)]));
				//console.log("tempAnom: "+tempAnom);
				// chooses an element to alter
				var tempAnomAlteredEle = Math.floor(Math.random()*tempAnom.length);
				//console.log("alteredEle: "+tempAnomAlteredEle)
				// Adds a single anomaly to that element.
				tempAnom[tempAnomAlteredEle] = Math.floor(Math.random()*2)+1;
				var tempChecker = true;
				for (var z = 0; z < ansTable.length; z++) {
					var tempbool = true;
					for (var m = 0; m < ansTable[z].length; m++) {
						if (ansTable[z][m] != tempAnom[m]) {
							tempbool = false;
							break;
						}
					}
					if (tempbool) {
						//console.log("tempbool"); 
						//console.log(returnStringArray(ansTable[z]));
						//console.log(returnStringArray(tempAnom));
						tempChecker = false;
						break;
					}
				}
				if (tempChecker) {
					ansTable.push(tempAnom);
					notUnique = false;	
				}
				if (temploopcounter > 150) {
					console.warn ("unique distractor generation failing; counter > "+temploopcounter);
					notUnique = true;
					break;
				}
			}
			
		}
	} else {
		for (var nA = 0; nA < noAnomalies; nA++) {
			var notUnique = true;
			var temploopcounter = 0;
			if (ansTable.length > 0) {
				while (notUnique) {
					temploopcounter ++;
					// choose the correct answer to 'edit'.
					var tALength = 1+(rule.length-1)*rule[1].length;
					var tempAnom = [];
					for (var x = 0; x < tALength; x++) {
						tempAnom.push(0);
					}
					// Adds a single anomaly to one element.
					tempAnom[Math.floor(Math.random()*tempAnom.length)] = Math.floor(Math.random()*2)+1;
					
					// check if this change is unique
					var tempChecker = true;
					for (var z = 0; z < ansTable.length; z++) {
						var tempbool = true;
						for (var m = 0; m < ansTable[z].length; m++) {
							if (ansTable[z][m] != tempAnom[m]) {
								tempbool = false;
								break;
							}
						}
						if (tempbool) {
							//console.log("tempbool"); 
							//console.log(returnStringArray(ansTable[z]));
							//console.log(returnStringArray(tempAnom));
							tempChecker = false;
							break;
						}
					}
					if (tempChecker) {
						ansTable.push(tempAnom);
						notUnique = false;	
					}
					if (temploopcounter > 150) {
						console.warn ("unique distractor generation failing (All distractors are anomalies); counter > "+temploopcounter);
						notUnique = true;
						break;
					}
				}
			} else {
				// choose the correct answer to 'edit'.
				var tALength = 1+(rule.length-1)*rule[1].length;
				var tempAnom = [];
				for (var x = 0; x < tALength; x++) {
					tempAnom.push(0);
				}
				// Adds a single anomaly to one element.
				tempAnom[Math.floor(Math.random()*tempAnom.length)] = Math.floor(Math.random()*2)+1;
				// push the anomaly
				ansTable.push(tempAnom);
			}
		}
		
	}
	//console.log("With Anom ansTable:")
	//console.log(returnStringArray(ansTable));
	// remove 0,0,0,0 (the correct answer);
	for (var x = 0; x < ansTable.length; x++) {
		var isAnswer = true;
		for (var y = 0; y < ansTable[x].length; y++) {
			if (ansTable[x][y])
				isAnswer = false;
		}
		if (isAnswer) {
			ansTable.splice(x, 1);
			break;
		}
	}
	//console.log("ansTable: "+ returnStringArray(ansTable));
	// Select noAns ans from ansTable.
	if (ansTable.length < noAns)
		console.warn ("ansTable shortness problem observed");
	
	// This handles situations where the ansTable.length > noAns
	var itemDistractors = [];
	// RNGAdjustment is at most just less than ansTable.length/noAns, as Math.random = 0 -> 0.99999...
	var RNGAdjustment = Math.random()*(ansTable.length/noAns);
	var increment = ansTable.length/noAns
	var tempDistVal = RNGAdjustment;
	//console.log("RNGAdjustments: "+RNGAdjustment);
	//console.log("tempDistVals:");
	for (var x = 0; x < noAns; x++) {
		// divide the length of ansTable by the number of answers.
		// multiply by x, and add the offset RNGAdjustment
		/*// Some examples:
		// ansTable.length = 8, noAns = 4
		// aT/nA = 8/2 = 1.99 - 0
		// 0,2,4,6
		// 1,3,5,7
		// 2,4,
		// ansTable.length = 7, noAns = 4
		// aT/nA = 7/4 = 1.749 - 0
		// 0, 1.75, 3.50, 5.25
		// 0,1,3,5
		// 1, 2.75, 4.5, 6.25
		// 1,2,4,6
		// 1.74, 3.49, 5.24, 6.99
		// 1,3,5,6
		
		// ansTable.length = 6, noAns = 4
		// aT/nA = 6/4 = 1.49 - 0
		// 0, 1.5, 3, 4.5
		// 1, 2.5, 4, 5.5
		// 
		// ansTable.length = 6, noAns = 3
		// 0,2,4
		// 1,3,5
		// ansTable.length = 6, noAns = 2
		// 0,3
		// 1,4
		// 2,5
		*/
		tempDistVal = RNGAdjustment+x*increment;
		//console.log(tempDistVal);
		var tempVal = Math.floor(tempDistVal);
		if (tempVal > ansTable.length) {
			tempVal = ansTable.length;
			console.warn("Overflow in itemDistractors");	
		}
		itemDistractors.push(tempVal);
	}
	//console.log("itemDistractors");
	//console.log(itemDistractors);
	
	// Construct final table & correct formatting
	var finalAnsTable = [];
	for (var i = 0; i < itemDistractors.length; i++) {
		var tempTableItemI = ansTable[itemDistractors[i]];
		var temp = [];
		finalAnsTable.push(temp);
		/*console.log("i: "+i);
		console.log("itemDistractors"+itemDistractors);
		console.log("iD[i]: "+ itemDistractors[i]);
		console.log(tempTableItemI[0]);
		console.log(returnStringArray(tempTableItemI));*/
		finalAnsTable[i][0] = tempTableItemI[0];
		for (var An = 1; An < rule.length; An++) {
			var temp2 = [];
			finalAnsTable[i].push(temp2);
		}
		for (var x = 1; x < tempTableItemI.length; x++) {
			finalAnsTable[i][Math.floor((x-1)/3)+1][(x-1)%3] = tempTableItemI[x];
		}
	}
	//console.log("difficulty :: finalAnsTable");
	/*
	// This is random generation with no duplicate false answer checking. It does however have duplicate answer checking.
	if (count != 0) {
		for (var a = 0; a < noAns; a++) {
			isIdentity = true;
			isIdentityLoopCounter = 0;
			while (isIdentity) {
				isIdentityLoopCounter++;
				//console.log("isIdentity loop: "+isIdentityLoopCounter); 
				if (rule[0]) {	
						// inserts a value of 0, 1 or 2, which are the three different possible values each element attribute can take.
						tempArr[a][0] = Math.floor(Math.random()*3);
					}
				for (var An = 1; An < rule.length; An++) {
					for (var x = 0; x < rule[An].length; x++) {
						if (rule[An][x]) {
								tempArr[a][An][x] = Math.floor(Math.random()*3);
						}
					}
				}
				if (tempArr[a][0])
					isIdentity = false;
				for (var An = 1; An < rule.length; An++) {
					for (var x = 0; x < rule[An].length; x++) {
						if (tempArr[a][An][x])
							isIdentity = false;
					}
				}
				if (isIdentityLoopCounter > 100) {
					console.warn("isIdentity loop is probably infinite");
					isIdentity = false;
					break;
				}
			}
		}
	} */
	
	return finalAnsTable;
}

//console.log("Difficulty: "+difficulty+ " | Rule: " + returnStringArray(AnulusRNGQu(difficulty))+ " | Distractor set: " + returnStringArray(AnulusRNGAns(AnulusRNGQu(difficulty), 3, difficulty)));

// Logic Gates (commutative)
// Example:
/*
					     [8],
					     [[1,1,1,0,1,0,0,0],
					      [0,0,0,1,1,1,1,1],
					      [0,0,1,0,1,0,1,0],
					      [0,1,0,0,1,1,0,0]],
					     [[1,0,0,1,0,0,0,1],
					      [0,0,0,0,0,0,0,1],
					      [1,0,1,0,0,1,0,0],
					      [1,0,1,1,0,1,0,0]], 
*/
// 4 - AND
// 5 - OR
// 6 - XOR
// 7 - XNOR (Not used in Ravens)
// >7 - Not Commutative/Not yet implemented

function CLGateRNGQu (noEle) {
	// noEle is the number of binary attributes used in this matrix.
	// Generate 2x2 matrix, from which the rest of the matrix is formed. 
	// This 2x2 matrix need not be the four top left elements, although in Raven's they would always be so.
	// These are instead always the four elements wich do not share a row or column with the missing answer.
	var tempQuArray = [];
	for (var x = 0; x < 4 /*(maxG-1)*(maxG-1)*/; x++) {
		tempArray1 = [];
		tempQuArray.push(tempArray1);
		for (var z = 0; z < noEle; z++) {
			tempQuArray[x].push(0);
		}
	}
	// The final array requires at least one of each of the following:
	// 0,0 -> w
	// 1,0 -> x
	// 0,1 -> y
	// 1,1 -> z
	// It would have at least one of all of these in both the rows and the columns.
	// thus the final array should be considered as four vertical pairs.
	// First-Second, First-third, Second-last, third-last.
	// the 'diagonals' need not be considered (first-last & second-third)
	// N.b. Technically this would be sufficient for non-commutative logic gates.
	//
	// This means the following are required (these requirements are orthogonal to the array):
	// [1,1,X,X]
	// [0,1,X,X]
	// [1,0,X,X]
	// [0,0,X,X]
	// [1,X,1,X]
	// [0,X,1,X]
	// [1,X,0,X]
	// [0,X,0,X]
	// [X,1,X,1]
	// [X,0,X,1]
	// [X,1,X,0]
	// [X,0,X,0]
	// [X,X,1,1]
	// [X,X,0,1]
	// [X,X,1,0]
	// [X,X,0,0]
	// The orthogonal pairs:
	var pairs = [[0,1],[0,2],[1,3],[2,3]];
	// The requirements:
	var required = [[1,1],[1,0],[0,1],[0,0]];
	// construction
	var tempEles = [];
	var tempValLeft = pairs.length*required.length%noEle;
	//console.log("tempValLeft: "+tempValLeft);
	var helpVal = Math.floor(noEle/tempValLeft);
	for (var x = 0; x < pairs.length*required.length; x++) {
		if (x > pairs.length*required.length-tempValLeft) {
			//console.log(x+" > "+(pairs.length*required.length-tempValLeft))
			tempEles.push(Math.floor(helpVal));
			helpVal += noEle/tempValLeft;
			if (helpVal > noEle) {
				helpVal -= noEle;
			}
			//console.log(helpVal);
		} else {
			tempEles.push(x%noEle);
		}
		//console.log(x);
		//console.log(tempEles);
	}
	// shuffles the location of the missing element
	shuffle(tempEles);
	//console.log(tempEles);
	//
	for (var p = 0; p < pairs.length; p++) {
		for (var r = 0; r < required.length; r++) {
			tempQuArray[pairs[p][0]][tempEles[p+r*pairs.length]] = required[r][0];
			tempQuArray[pairs[p][1]][tempEles[p+r*pairs.length]] = required[r][1];
		}
	}
	
	//console.log("tempQuArray: ");
	//console.log(returnStringArray(tempQuArray));
	return tempQuArray;
}
//
function CLGateRNGAns (rule, noEle, noAns, dif, maxDif) {
	// this is never identity
	// generate ansTable as all correct
	var ansTable = [];
	for (var x = 0; x < noAns; x++) {
		var tempArray = [];
		ansTable.push(tempArray);
		for (var y = 0; y < noEle; y++) {
			ansTable[x].push(0);
		}
	}
	// alter all distractors to be incorrect (no Anomalies)
	// this is way simpler than with Annuli, due to the fact 
	// that the matrix needs to have all possible combinations.
	var MAD = Math.ceil(noEle/2);
	var maxAnswerDelta = Math.max(MAD-MAD*dif/maxDif,1);
	//console.log("maxAnswerDelta: "+maxAnswerDelta);
	//console.log(returnStringArray(ansTable));
	for (var x = 0; x < ansTable.length; x++) {
		var answerDelta = Math.floor(Math.random()*maxAnswerDelta)+1;
		var RNGAdjust = Math.random()*(noEle/maxAnswerDelta);
		//console.log("RNGAdjust: "+RNGAdjust);
	//console.log("answerDelta: "+answerDelta);
		for (y = 0; y < answerDelta; y++) {
			if (Math.floor(noEle*y/answerDelta+RNGAdjust) > noEle) {
				console.warn("Help! complex thingy: "+Math.floor(noEle*y/answerDelta+RNGAdjust)+" > noEle: "+noEle);
			}
			ansTable[x][Math.floor(noEle*y/answerDelta+RNGAdjust)] = 1;
			
	//console.log(returnStringArray(ansTable));
		}
	}
	// if repeats, replace repeat with random unique
	var ansChecker = [];
	for (var i = 0; i < ansTable[0].length; i++) {
		ansChecker[i] = 0;
	}
	for (var x = 0; x < ansTable.length; x++) {
		for (var y = 0; y < ansTable.length; y++) {
			if (y != x && ansTable[x].toString() == ansTable[y].toString()) {
				var tempLoopCounter = 0;
				var replace = true;
				while (replace) {
					var unique = true;
					tempLoopCounter ++;
					var tempReplacement = [];
					for (var z = 0; z < ansTable[x].length; z++) {
						tempReplacement[z] = Math.floor(Math.random()*1.5);
					}
					if (tempReplacement.toString() == ansChecker.toString()) {
							unique = false;
					} else {
						for (var k = 0; k < ansTable.length; k++) {
							if (tempReplacement.toString() == ansTable[k].toString()) {
								unique = false;
							}
						}
					}
					if (unique) {
						ansTable[x] = tempReplacement;
						replace = false;
						break;
					}
					if (tempLoopCounter > 100) {
						console.warn("random replacement in LGate ansTable generation looping");
						replace = false;
						break;
					}
				}
			}
		}
	}
	//console.log(returnStringArray(ansTable));
	shuffle(ansTable);
	
	//console.log(returnStringArray(ansTable));
	return ansTable;
}
// 3 - ADD
	/* Example: 
					     [1],
					     [-9,6,
					      7,-2],
					     [2,3,1,-4,-5],*/ 
function AddRNGQu () {
	// 1 and 0 sometimes don't look as good. But that isn't a problem with this function per say - 
	// it's a problem with those graphical encodings.
	// 
	// It would however be better to resist having diagonal symmetry.
	//
	// Generate 2x2 matrix, from which the rest of the matrix is formed. 
	// This 2x2 matrix need not be the four top left elements, although in Raven's they would always be so.
	// These are instead always the four elements wich do not share a row or column with the missing answer.
	var tempQuArray = [];
	for (var x = 0; x < 4 /*(maxG-1)*(maxG-1)*/; x++) {
		tempQuArray.push(0);
	}
	// Each column, row and the combined total (also generally the answer) of all 4 elements must not exceed |9|.
	var combinedTotal = Math.floor(Math.random()*(9*2+1))-9; // 0 to 18 -9 = -9 to 9.
	var verti = [0];
	var horiz = [0];
	while (verti[0] == horiz[0] || verti[0] == Math.abs(combinedTotal) - horiz[0]) {
		verti[0] = Math.floor(Math.random()*(9+1)); // 0 to 9
		horiz[0] = Math.floor(Math.random()*(9+1));
	}
	if (combinedTotal < 0) {
		verti[0] = -verti[0];
		horiz[0] = -horiz[0];
	} else if (combinedTotal == 0) {
		// 0.5 chances
		if (Math.floor(Math.random()*2) == 0) {
			verti[0] = -verti[0];
		}
		if (Math.floor(Math.random()*2) == 0) {
			horiz[0] = -horiz[0];
		}
	} 
	verti[1] = combinedTotal - verti[0];
	horiz[1] = combinedTotal - horiz[0];
	
	// not 0 in top left. This might be worth changing when the graphical encoding improves.
	var allNotLessThanTen = true;
	var alTTCounter = 0;
	while (allNotLessThanTen) {
		var allLessThanTen = true;
		alTTCounter++;
		tempQuArray[0] = Math.floor(Math.random()*(9)+1);
	
		if (verti[0] < 0) {
			tempQuArray[0] = -tempQuArray[0];
		} else if (combinedTotal == 0) {
			// 0.5 chance
			if (Math.floor(Math.random()*2) == 0) {
				tempQuArray[0] = -tempQuArray[0];
			}
		} 
	
		tempQuArray[1] = verti[0]-tempQuArray[0];
		tempQuArray[2] = horiz[0]-tempQuArray[0];
		tempQuArray[3] = horiz[1]-tempQuArray[1];	
		for (var x = 0; x < tempQuArray.length; x++) {
			if (Math.abs(tempQuArray[x]) > 9) {
				allLessThanTen = false;
			}
		}
		if (allLessThanTen) {
			allNotLessThanTen = false;
			break;
		}
		if (alTTCounter > 100) {
			console.warn("Failed to generate an Add test item with all answers less than 10. alTTCounter: "+alTTCounter);
			allNotLessThanTen = false;
			break;
		}
	}	
	return tempQuArray;
}
function AddRNGAns (rule, noAns) {
	// answer is 0;
	var answer = 0;
	// absoluteAnswerVal
	var absoluteAnswerVal = rule[0]+rule[1]+rule[2]+rule[3];
	//console.log("ADD answer:");
	//console.log (answer);
	var ansTable = [];
	
	// tempOrigin = +/-(answer +/- 1 to 2), with a bias for results closer to answer.
	// Considering -answer to be a delta of 1, answer+1 a delta of 1, and -answer+1 a delta of 2.
	// tempOrigin != answer
	var tempOrigin = (answer+Math.floor(Math.random()*1.5+1)*(Math.floor(Math.random()*2)*2-1))*(-Math.floor(Math.random()*1.5)*2+1);
	var loopCounter = 0;
	while (ansTable.length < noAns) {
		var unique = true;
		// tempNewAns clouds around tempOrigin
		var tempNewAns = (tempOrigin+Math.floor(Math.random()*2.5)*(Math.floor(Math.random()*2)*2-1))*(-Math.floor(Math.random()*1.5)*2+1);
		// Modifies by 2-3, as this way the cloud behaves relatively sensibly at extremes.
		// 1-2, 1-3 and 3-4 produce worse clouds. Other ranges not checked.
		var subloop1 = 0;
		var subloop2 = 0;
		while ((tempNewAns+absoluteAnswerVal) > 9) {
			subloop1++;
			tempNewAns -= Math.floor(Math.random()*2)+2;
			if (subloop1 > 50) {
				console.warn("subloop1 broken");
				break;	
			}
		}
		while ((tempNewAns+absoluteAnswerVal) < -9) {
			subloop2++;
			tempNewAns += Math.floor(Math.random()*2)+2;
			if (subloop2 > 50) {
				console.warn("subloop2 broken");
				break;	
			}
		}
		//console.log(tempNewAns);
		if (answer == tempNewAns) {
				unique = false;
		} else {
			for (var y = 0; y < ansTable.length; y++) {
				if (ansTable[y] == tempNewAns) {
					unique = false;
					break;
				}
			}
		}
		if (unique) {
			ansTable.push(tempNewAns);
		}
		if (loopCounter > 100) {
			console.warn("ADD ansTable Loop exceeded bounds");
			break;
		}
	}
	
	return ansTable;
}
							//1
var allPuzzleTypes = [[[3,3],													// 0. [Grid Size]
					     [0],													// 1. [Graphic Options] // can only be 2 - at most???
					     [0],		 											// 2. [Logic Options]
					     [0,[0,0,0]],											// 3. [Layout]
					     [[0,[1,1,0]],[2,[2,0,0]],[1,[0,2,0]]],					// 4. [Answer Layout]
					     [0],													// 5. [Number of elements in centre]
					     [0,0,
					      0,0],													// 6. [Number Layout]
					     [0,0,0],												// 7. [Number Answer Layout]
					      0,													// 8. #Concealed
					      0],													// 9. Type
					      //2
					  [[3,3],
					     [0],
					     [2],
					     [1,[2,0,0]],
					     [[0,[0,1,0]],[1,[1,0,0]],[0,[2,0,0]]],
					     [0],
					     [0,0,
					      0,0],
					     [0,0,0],
					      0,
					      0],
					      //3
					  [[3,3],
					     [0],
					     [1],
					     [1,[2,2,0]],
					     [[0,[0,1,1]],[1,[1,1,0]],[0,[1,0,0]],[0,[0,1,0]]],
					     [0],
					     [0,0,
					      0,0],
					     [0,0,0,0],
					      0,
					      0],
					      //4
					  [[3,3],
					     [0],
					     [1],
					     [0,[2,0,1]],
					     [[0,[1,0,0]],[0,[2,0,0]],[1,[1,0,0]]],
					     [0],
					     [0,0,
					      0,0],
					     [0,0,0],
					      0,
					      0],
					      //5
					  [[3,3],
					     [0],
					     [1],
					     [1,[2,2,1],[2,0,1]],
					     [[1,[0,0,0],[0,0,1]],[2,[0,0,0],[0,0,0]],[0,[0,1,0],[0,0,0]],[0,[0,0,0],[0,0,2]]],
					     [0],
					     [0,0,
					      0,0],
					     [0,0,0,0],
					      0,
					      0],
					      //6
					  [[3,3],
					     [0],
					     [1],
					     [0,[0,4,3],[0,3,4]],
					     [[0,[0,0,1],[0,0,0]],[0,[0,0,0],[0,0,1]],[0,[0,0,0],[0,1,0]],[0,[0,1,0],[0,0,0]],[0,[0,0,2],[0,0,1]]],
					     [0],
					     [0,0,
					      0,0],
					     [0,0,0,0,0],
					      0,
					      0],
					      //7
					  [[3,3],
					     [6],
					     [5],
					     [0,[0,0,0]],
					     [[0,[0,0,0]],[0,[0,0,0]],[0,[0,0,0]]],
					     [8],
					     [[0,0,0,1,0,0,0,1],
					      [0,0,1,0,0,0,1,0],
					      [0,1,0,0,0,1,0,0],
					      [1,0,0,1,1,1,0,0]],
					     [[1,0,0,0,0,0,0,0],
					      [0,0,0,0,0,0,0,1],
					      [0,0,0,1,0,0,0,0]],
					      0,
					      0],
					      //8
					  [[3,3],
					     [6],
					     [5],
					     [0,[0,0,0]],
					     [[0,[0,0,0]],[0,[0,0,0]],[0,[0,0,0]],[0,[0,0,0]],[0,[0,0,0]]],
					     [10],
					     [[1,0,0,0,0,0,0,0,1,1],
					      [0,0,0,1,0,0,1,1,1,1],
					      [0,0,0,0,0,0,1,0,0,0],
					      [0,1,1,0,1,1,0,0,1,0]],
					     [[1,0,0,1,1,0,0,1,0,0],
					      [0,0,0,0,0,0,0,1,1,1],
					      [1,0,1,1,0,1,0,0,0,1],
					      [0,0,1,0,0,1,0,0,1,0],
					      [0,0,0,1,0,0,0,0,0,0]],
					      0,
					      0],
					      //9
					  [[3,3],
					     [6],
					     [6],
					     [0,[0,0,4]],
					     [[0,[0,0,1]],[0,[0,0,1]],[0,[0,0,0]],[0,[0,0,0]],[0,[0,0,0]]],
					     [10],
					     [[0,1,0,0,1,1,0,1,1,0],
					      [0,0,0,1,0,1,0,1,0,0],
					      [1,1,0,0,0,1,0,1,0,0],
					      [0,1,0,1,1,1,0,0,0,1]],
					     [[0,0,0,0,0,1,0,0,0,0],
					      [1,0,1,0,0,0,0,0,0,0],
					      [0,0,0,1,0,0,0,0,1,1],
					      [1,0,1,0,0,0,0,1,0,0],
					      [1,0,0,0,0,0,0,0,1,0]],
					      0,
					      0],
					      //10
					  [[3,3],
					     [2],
					     [3],
					     [0,[0,0,0]],
					     [[0,[0,0,0]],[0,[0,0,0]],[0,[0,0,0]],[0,[0,0,0]],[0,[0,0,0]]],
					     [1],
					     [-9,6,
					      7,-2],
					     [2,3,1,-4,-5],
					      0,
					      0]];
var logicOptionStringTranslate = ["Identity", "123", "112", "Add", "AND", "OR", "XOR", "XNOR"]
for (var x = 0; x < allPuzzleTypes.length; x++) {
	var dif = annulusRuleArray.length*x/allPuzzleTypes.length;
	// Identity
	if (allPuzzleTypes[x][2] == 0) {
		//allPuzzleTypes[x][3] = AnulusRNGQu(dif);
		var noAnsX = JSON.parse(JSON.stringify(allPuzzleTypes[x][4].length));
		allPuzzleTypes[x][4] = AnulusRNGAns(allPuzzleTypes[x][3], noAnsX);
		console.log("itemNo: "+x+" Logic Option: "+logicOptionStringTranslate[allPuzzleTypes[x][2]]+": Difficulty: "+dif+ " | Rule: " + returnStringArray(allPuzzleTypes[x][3])+ " | Distractor set: " + returnStringArray(allPuzzleTypes[x][4]));
	}
	// 123
	if (allPuzzleTypes[x][2] == 1) {
		allPuzzleTypes[x][3] = AnulusRNGQu(dif, allPuzzleTypes.length);
		var noAnsX = JSON.parse(JSON.stringify(allPuzzleTypes[x][4].length));
		allPuzzleTypes[x][4] = AnulusRNGAns(AnulusRNGQu(dif, allPuzzleTypes.length), noAnsX);
		console.log("itemNo: "+x+" Logic Option: "+logicOptionStringTranslate[allPuzzleTypes[x][2]]+": Difficulty: "+dif+ " | Rule: " + returnStringArray(allPuzzleTypes[x][3])+ " | Distractor set: " + returnStringArray(allPuzzleTypes[x][4]));
	}
	// 112
	if (allPuzzleTypes[x][2] == 2) {
		allPuzzleTypes[x][3] = AnulusRNGQu(dif, allPuzzleTypes.length);
		var noAnsX = JSON.parse(JSON.stringify(allPuzzleTypes[x][4].length));
		allPuzzleTypes[x][4] = AnulusRNGAns(AnulusRNGQu(dif, allPuzzleTypes.length), noAnsX);
		console.log("itemNo: "+x+" Logic Option: "+logicOptionStringTranslate[allPuzzleTypes[x][2]]+": Difficulty: "+dif+ " | Rule: " + returnStringArray(allPuzzleTypes[x][3])+ " | Distractor set: " + returnStringArray(allPuzzleTypes[x][4]));
	}
	// Addition
	if (allPuzzleTypes[x][2] == 3) {
		allPuzzleTypes[x][6] = AddRNGQu();
		var noAnsX = JSON.parse(JSON.stringify(allPuzzleTypes[x][4].length));
		allPuzzleTypes[x][7] = AddRNGAns(allPuzzleTypes[x][6],noAnsX);
		console.log("itemNo: "+x+" Logic Option: "+logicOptionStringTranslate[allPuzzleTypes[x][2]]+": Difficulty: "+dif+ " | Rule: " + returnStringArray(allPuzzleTypes[x][6])+ " | Answer: "+(allPuzzleTypes[x][6][0]+allPuzzleTypes[x][6][1]+allPuzzleTypes[x][6][2]+allPuzzleTypes[x][6][3])+ " | Distractor set: " + returnStringArray(allPuzzleTypes[x][7]));
	}
	// AND
	if (allPuzzleTypes[x][2] == 4) {
		allPuzzleTypes[x][6] = CLGateRNGQu(allPuzzleTypes[x][5]);
		var noAnsX = JSON.parse(JSON.stringify(allPuzzleTypes[x][4].length));
		allPuzzleTypes[x][7] = CLGateRNGAns(CLGateRNGQu(allPuzzleTypes[x][5]),allPuzzleTypes[x][5],noAnsX,x,allPuzzleTypes.length)
		console.log("itemNo: "+x+" Logic Option: "+logicOptionStringTranslate[allPuzzleTypes[x][2]]+": Difficulty: "+dif+ " | Rule: " + returnStringArray(allPuzzleTypes[x][6])+ " | Distractor set: " + returnStringArray(allPuzzleTypes[x][7]));
	}
	// OR
	if (allPuzzleTypes[x][2] == 5) {
		var noEle = allPuzzleTypes[x][5][0];
		allPuzzleTypes[x][6] = CLGateRNGQu(noEle);
		var noAnsX = JSON.parse(JSON.stringify(allPuzzleTypes[x][4].length));
		allPuzzleTypes[x][7] = CLGateRNGAns(CLGateRNGQu(noEle),noEle,noAnsX,x,allPuzzleTypes.length)
		console.log("itemNo: "+x+" Logic Option: "+logicOptionStringTranslate[allPuzzleTypes[x][2]]+": Difficulty: "+dif+ " | Rule: " + returnStringArray(allPuzzleTypes[x][6])+ " | Distractor set: " + returnStringArray(allPuzzleTypes[x][7]));
	}
	// XOR
	if (allPuzzleTypes[x][2] == 6) {
		var noEle = allPuzzleTypes[x][5][0];
		allPuzzleTypes[x][6] = CLGateRNGQu(noEle);
		var noAnsX = JSON.parse(JSON.stringify(allPuzzleTypes[x][4].length));
		allPuzzleTypes[x][7] = CLGateRNGAns(CLGateRNGQu(noEle),noEle,noAnsX,x,allPuzzleTypes.length)
		console.log("itemNo: "+x+" Logic Option: "+logicOptionStringTranslate[allPuzzleTypes[x][2]]+": Difficulty: "+dif+ " | Rule: " + returnStringArray(allPuzzleTypes[x][6])+ " | Distractor set: " + returnStringArray(allPuzzleTypes[x][7]));
	}
	// XNOR
	if (allPuzzleTypes[x][2] == 7) {
		var noEle = allPuzzleTypes[x][5][0];
		allPuzzleTypes[x][6] = CLGateRNGQu(noEle);
		var noAnsX = JSON.parse(JSON.stringify(allPuzzleTypes[x][4].length));
		allPuzzleTypes[x][7] = CLGateRNGAns(CLGateRNGQu(noEle),noEle,noAnsX,x,allPuzzleTypes.length)
		console.log("itemNo: "+x+" Logic Option: "+logicOptionStringTranslate[allPuzzleTypes[x][2]]+": Difficulty: "+dif+ " | Rule: " + returnStringArray(allPuzzleTypes[x][6])+ " | Distractor set: " + returnStringArray(allPuzzleTypes[x][7]));
	}
	// Unimplemented
	if (allPuzzleTypes[x][2] > 7) {
		console.warn("Isaac, what are you doing?");
		console.warn("itemNo: "+x+" not randomised yet:: " + allPuzzleTypes[x][2])
	}
}
for (var x = 0; x < allPuzzleTypes.length; x++) {
	if (allPuzzleTypes[x][5][0] == allPuzzleTypes[x][5][4] && allPuzzleTypes[x][5][1] == allPuzzleTypes[x][5][2]) {
		throw new Error("Initial numArray symmetric in the negative diagonal");
	}
}
//
/*var allMissingIcons = [0,
					   0,
					   0,
					   1,
					   1,
					   0,
					   2,
					   3,
					   0];*/
// One large uncertainty in the order of possibleLayouts is whether [threeOrFour()] is more 
// complex than [1,2] or not. Screen complexity vs puzzle complexity.
// For further uncertainties, see the 'Odd Ball' categories.
// 			
// Uses the format [Scale,[Colour, Form, Rotation],[Colour, Form, Rotation]]
// The outer annuli uses the first array [Colour, Form, Rotation], and the inner annulus uses the second array
// Scale is uniform across annuli
/*var shapeGridLayouts = [[0,[0,0,0]],
					  [0,[0,0,0]],
					  [0,[0,0,0]],				
					  [0,[0,2,3],[1,0,4]],
					  [3,[2,0,3]],
					  [3,[0,0,0],[0,0,1]],
					  [0,[3,1,0],[3,1,0]],				
					  [0,[0,4,1]],
					  [4,[0,0,3]]];*/
// Uses the same format as allGridLayouts - the correct answer, which would be [0,[0,0,0]], is added afterwards
// 0 is the correct answer for that attribute
// 1 & 2 are the two alternatives
/*var answerShapeArray = [
				   
				   [[0,[0,0,0]],[0,[0,0,0]],[0,[0,0,0]]],				
				   [[0,[2,0,0],[0,0,1]],[0,[0,0,0],[0,0,1]],[0,[2,0,0],[0,0,0]],[0,[0,0,0],[0,0,1]]],
				   [[1,[0,0,0]],[0,[0,1,0]],[2,[0,0,0]]],
				   [[0,[1,0,0],[0,0,0]],[0,[0,0,0],[0,0,1]],[2,[0,0,0],[0,0,0]]],
				   [[0,[1,0,0],[0,0,0]],[0,[2,0,0],[0,0,0]],[0,[0,1,0],[1,0,0]],[0,[0,1,0],[1,0,0]]],				
				   [[0,[0,0,1]],[0,[0,0,2]],[0,[0,3,1]],[0,[0,3,0]]],
				   [[2,[0,0,0]],[2,[0,0,0]],[0,[0,0,1]],[0,[0,0,0]],[0,[0,0,1]]]];
//
//
/*var numberGridLayouts = [[0,[1,3,5,2]],
						 [0,[1,-3,6,1]],
						 [0,[1,3,2,2]],
						 [0,[1,7,-1,2]],
						 [0,[6,1,-6,3]],
						 [0,[-5,3,8,1]],
						 [0,[-7,9,9,-1]],
						 [0,[-2,9,3,-8]],
						 [0,[-1,4,-5,2]]];*/
//
/*var answerNumberArray = [
						 [1,2,3],
						 [8,1,4],
						 [7,4,8,1,2],
						 [2,6,3],
						 [1,4,5,2],
						 [2,0,4,5],
						 [2,0,4,0],
						 [0,-1,-1,1,0]];
*/
//
//
/*if (allPuzzleTypes.length != allMissingIcons.length && 
			allMissingIcons.length != allGridLayouts.length && 
					allGridLayouts.length != answerArray.length) {
	console.warn("Data sets not all equal length");
}*/
// var allTestItems = [allPuzzleTypes,allMissingIcons,allGridLayouts,answerArray];
var maxDifficulty = allPuzzleTypes.length;
for (var x = 0; x < maxDifficulty; x++) {
	iconProperties[x] = "";
}//03-logicGates.js:
//
//
// 03-logicGates.js
//
//
//Standard Logic Gates
AND = function (x,y) {
	if (!x && !y)
		return 0;
	if (x && y)
		return 1;
	if (x || y)
		return 0;
}
AND.toString = function() {
	return "AND";
}
//console.log("AND Test");
//console.log("0+0: "+AND(0,0));
//console.log("0+1: "+AND(1,0));
//console.log("1+0: "+AND(0,1));
//console.log("1+1: "+AND(1,1));
NAND = function (x,y) {
	if (!x && !y)
		return 1;
	if (x && y)
		return 0;
	if (x || y)
		return 1;
}
NAND.toString = function() {
	return "NAND";
}
//console.log("NAND Test");
//console.log("0+0: "+NAND(0,0));
//console.log("0+1: "+NAND(1,0));
//console.log("1+0: "+NAND(0,1));
//console.log("1+1: "+NAND(1,1));
OR = function (x,y) {
	if (!x && !y)
		return 0;
	if (x && y)
		return 1;
	if (x || y)
		return 1;
}
OR.toString = function() {
	return "OR";
}
//console.log("OR Test");
//console.log("0+0: "+OR(0,0));
//console.log("0+1: "+OR(1,0));
//console.log("1+0: "+OR(0,1));
//console.log("1+1: "+OR(1,1));
XOR = function (x,y) {
	if (!x && !y)
		return 0;
	if (x && y)
		return 0;
	if (x || y)
		return 1;
}
XOR.toString = function() {
	return "XOR";
}
//console.log("XOR Test");
//console.log("0+0: "+XOR(0,0));
//console.log("0+1: "+XOR(1,0));
//console.log("1+0: "+XOR(0,1));
//console.log("1+1: "+XOR(1,1));
NOR = function (x,y) {
	if (!x && !y)
		return 1;
	if (x && y)
		return 0;
	if (x || y)
		return 0;
}
NOR.toString = function() {
	return "NOR";
}
//console.log("NOR Test");
//console.log("0+0: "+NOR(0,0));
//console.log("0+1: "+NOR(1,0));
//console.log("1+0: "+NOR(0,1));
//console.log("1+1: "+NOR(1,1));
XNOR = function (x,y) {
	if (!x && !y)
		return 1;
	if (x && y)
		return 1;
	if (x || y)
		return 0;
}
XNOR.toString = function() {
	return "XNOR";
}
//console.log("XNOR Test");
//console.log("0+0: "+XNOR(0,0));
//console.log("0+1: "+XNOR(1,0));
//console.log("1+0: "+XNOR(0,1));
//console.log("1+1: "+XNOR(1,1));
// Non-Commutative Logic Gates
ANDNOT = function (x,y) {
	return AND(x,!y);
	// 0,0 - 0
	// 1,1 - 0
	// 0,1 - 0
	// 1,0 - 1
}
ANDNOT.toString = function() {
	return "ANDNOT";
}
//console.log("ANDNOT Test");
//console.log("0+0: "+ANDNOT(0,0));
//console.log("0+1: "+ANDNOT(1,0));
//console.log("1+0: "+ANDNOT(0,1));
//console.log("1+1: "+ANDNOT(1,1));
NANDNOT = function (x,y) {
	return NAND(x,!y);
	// 0,0 - 1
	// 1,1 - 1
	// 0,1 - 1
	// 1,0 - 0
}
NANDNOT.toString = function() {
	return "NANDNOT";
}
//console.log("NANDNOT Test");
//console.log("0+0: "+NANDNOT(0,0));
//console.log("0+1: "+NANDNOT(1,0));
//console.log("1+0: "+NANDNOT(0,1));
//console.log("1+1: "+NANDNOT(1,1));
ORNOT = function (x,y) {
	return OR(x,!y);
	// 0,0 - 1
	// 1,1 - 1
	// 0,1 - 0
	// 1,0 - 1
}
ORNOT.toString = function() {
	return "ORNOT";
}
//console.log("ORNOT Test");
//console.log("0+0: "+ORNOT(0,0));
//console.log("0+1: "+ORNOT(1,0));
//console.log("1+0: "+ORNOT(0,1));
//console.log("1+1: "+ORNOT(1,1));
NORNOT = function (x,y) {
	return NOR(x,!y);
	// 0,0 - 0
	// 1,1 - 0
	// 0,1 - 1
	// 1,0 - 0
}
NORNOT.toString = function() {
	return "NORNOT";
}
//console.log("NORNOT Test");
//console.log("0+0: "+NORNOT(0,0));
//console.log("0+1: "+NORNOT(1,0));
//console.log("1+0: "+NORNOT(0,1));
//console.log("1+1: "+NORNOT(1,1));
// XORNOT = XNOR && XNORNOT = XOR
IFY = function (x,y) {
	if (y)
		return 1;
	else
		return 0;
	// 0,0 - 0
	// 1,1 - 1
	// 0,1 - 1
	// 1,0 - 0
}
IFY.toString = function() {
	return "IFY";
}
//console.log("IFY Test");
//console.log("0+0: "+IFY(0,0));
//console.log("0+1: "+IFY(1,0));
//console.log("1+0: "+IFY(0,1));
//console.log("1+1: "+IFY(1,1));
IFNY = function (x,y) {
	if (!y)
		return 1;
	else
		return 0;
	// 0,0 - 1
	// 1,1 - 0
	// 0,1 - 0
	// 1,0 - 1
}
IFNY.toString = function() {
	return "IFNY";
}
//console.log("IFNY Test");
//console.log("0+0: "+IFNY(0,0));
//console.log("0+1: "+IFNY(1,0));
//console.log("1+0: "+IFNY(0,1));
//console.log("1+1: "+IFNY(1,1));
IFX = function (x,y) {
	// Also ANDOR
	if (x)
		return 1;
	else
		return 0;
	// 0,0 - 1
	// 1,1 - 0
	// 0,1 - 1
	// 1,0 - 0
}
IFX.toString = function() {
	return "IFX";
}
//console.log("IFX Test");
//console.log("0+0: "+IFX(0,0));
//console.log("0+1: "+IFX(1,0));
//console.log("1+0: "+IFX(0,1));
//console.log("1+1: "+IFX(1,1));
IFNX = function (x,y) {
	if (!x)
		return 1;
	else
		return 0;
	// 0,0 - 0
	// 1,1 - 1
	// 0,1 - 0
	// 1,0 - 1
}
IFNX.toString = function() {
	return "IFNX";
}
//console.log("IFNX Test");
//console.log("0+0: "+IFNX(0,0));
//console.log("0+1: "+IFNX(1,0));
//console.log("1+0: "+IFNX(0,1));
//console.log("1+1: "+IFNX(1,1));
// 'Trivial' Logic Gates
YES = function (x,y) {
	return 1;
	// 0,0 - 1
	// 1,1 - 1
	// 0,1 - 1
	// 1,0 - 1
}
YES.toString = function() {
	return "YES";
}
 NO = function (x,y) {
	return 0;
	// 0,0 - 0
	// 1,1 - 0
	// 0,1 - 0
	// 1,0 - 0
}
NO.toString = function() {
	return "NO";
}
var commutativeLGA = [AND, OR, XOR, XNOR];
var symmetricLGA = [AND,OR,XOR,XNOR,NOR,NAND];
var nonTrivialLGA = [AND,OR,XOR,XNOR,NOR,NAND,ANDNOT,NANDNOT,ORNOT,NORNOT,IFY,IFNY,IFX,IFNX];
var LGA = [AND,NAND,OR,XOR,NOR,XNOR,ANDNOT,NANDNOT,ORNOT,NORNOT,IFY,IFNY,IFX,IFNX,YES,NO];
var logicGateArray = commutativeLGA;
var totalLGLayouts = [];
for (var x = 0; x < logicGateArray.length; x++) {
	totalLGLayouts[x] = [];
	for (var y = 0; y < logicGateArray.length; y++) {
		totalLGLayouts[x][y] = 0;
	}	
}
function gateMatrix (a,b,c,d) {
 	var LHS = null;
 	var RHS = null;
 	var temp = []
	for (var n = 0; n < logicGateArray.length; n++) {
		for (var m = 0; m < logicGateArray.length; m++) {
			LHS = logicGateArray[m](logicGateArray[n](a,b),logicGateArray[n](c,d));
			RHS = logicGateArray[n](logicGateArray[m](a,c),logicGateArray[m](b,d));
			//console.log(LHS == RHS);
			if (LHS == RHS) { 
				//console.log(a + " " + b + " " +logicGateArray[n](a,b));
				//console.log(c + " " + d + " " +logicGateArray[n](c,d));
				//console.log(logicGateArray[m](a,c) + " " + logicGateArray[m](b,d) +" "+LHS+"/"+RHS);
				//console.log(logicGateArray[n].name+" : "+logicGateArray[m].name)
				temp.push([logicGateArray[n],logicGateArray[m]]);
				totalLGLayouts[n][m]++;
			}
		} 
	}
	//console.log(temp);
	return temp;
} 
function simplerGateMatrix (a,b,c,d) {
 	var LHS = null;
 	var RHS = null;
 	var temp = []
	for (var n = 0; n < logicGateArray.length; n++) {
		LHS = logicGateArray[n](logicGateArray[n](a,b),logicGateArray[n](c,d));
		RHS = logicGateArray[n](logicGateArray[n](a,c),logicGateArray[n](b,d));
		//console.log(LHS == RHS);
		if (LHS == RHS) { 
			temp.push([logicGateArray[n],logicGateArray[n]]);
			totalLGLayouts[n][n]++;
		}
	}
	//console.log(temp);
	return temp;
} 
function logicGateLayouts() {
	var truthArray = [];
	for (var a = 0; a < 2; a++) {
		truthArray [a] = [];
		for (var b = 0; b < 2; b++) {
			truthArray [a][b] = [];
			for (var c = 0; c < 2; c++) {
				truthArray [a][b][c] = [];
				for (var d = 0; d < 2; d++) {
					truthArray[a][b][c][d] = gateMatrix(a,b,c,d);
				}
			}
		}
	}
	return truthArray;
}
function compareArray(arrayX,arrayY) {
	var tempX = [];
	var tempY = [];
	for (var x = 0; x < arrayX.length; x++) {
		tempX[x] = [arrayX[x][0].name,arrayX[x][1].name];
	}
	for (var x = 0; x < arrayY.length; x++) {
		tempY[x] = [arrayY[x][0].name,arrayY[x][1].name];
	}
	temp2X = tempX;
	temp2Y = tempY;
	//if (tempX.length < tempY.length)
	for (var x = 0; x < tempX.length; x++) {
		for (var y = 0; y < tempY.length; y++) {
			if (tempX[x][0] == tempY[y][0] && tempX[x][1] == tempY[y][1]) {
				temp2X[x] = [];
				temp2Y[y] = [];
			}
		}
	}
	var temp3X = [];
	for (var x = 0; x < temp2X.length; x++) {
		if (temp2X[x].length != 0)
			temp3X.push(temp2X[x]);
	}
	var temp3Y = [];
	for (var y = 0; y < temp2Y.length; y++) {
		if (temp2Y[y].length != 0)
			temp3Y.push(temp2Y[y]);
	}
	console.log("Compare arrays:");
	console.log(temp3X);
	console.log(temp3X.length);
	console.log(temp3Y);
	console.log(temp3Y.length);
}
var gateLayout = logicGateLayouts();
compareArray(gateLayout[0][0][0][0],gateLayout[0][0][0][1]);
console.log("Gate Layouts");
console.log(gateLayout);
console.log("Total possible layouts per Logic Gate: ");
for (var i = 0; i < totalLGLayouts.length; i++)
	console.log(returnStringArray(totalLGLayouts[i]));
console.log("Number of logic gate combinations per layout: ");
console.log("(This tabulates the conflux of 4 binary variables; a,b,c & d)");
var tempStringGate = " d     c\nb "
for (var a = 0; a < 2; a++) {
	for (var b = 0; b < 2; b++) {
		for (var c = 0; c < 2; c++) {
			for (var d = 0; d < 2; d++) {
				tempStringGate += (gateLayout[a][b][c][d].length);
				if (d==0) tempStringGate += " ";
			}
		if (c==0) tempStringGate += " | ";
		}
	if (a==0 && b==1) tempStringGate += "\na —————————————\n  ";
	else tempStringGate += "\n  ";
	}
}
console.log(tempStringGate);
//04-pattern.js:
//
//
// 04-pattern.js
//
//
function linearDifficulty (maximum) {
	return Math.floor(maximum*difficulty/maxDifficulty);
	// Range of results = 0 to (maximum - 1) :: useful for array.length situations;
}
function linearSubDifficulty (valueMaximum, rangeMinimum, rangeMaximum) {
	if (!(difficulty >= rangeMinimum) && !(difficulty < rangeMaximum)) {
		console.error("Difficulty outside bounds of linearSubDifficulty method; D:"
				+difficulty+" rMin: "+ rangeMinimum + " rMax: "+rangeMaximum);
	}
	return Math.floor(valueMaximum*(difficulty-rangeMinimum)/(rangeMaximum-rangeMinimum));
}
function inverseDifficulty1 (maximum) {
	return Math.max(Math.ceil(maximum*(1-(maxDifficulty/6)/difficulty)),1);
	// maximum = 3:
	// 0   <= difficulty < 1/4 : 1
	// 1/4 <= difficulty < 1/2 : 2
	// 1/2 <= difficulty <= 1  : 3
}
function choosePattern() {
	var self = this // !
	//
	self.includeAnnuli = true;
	// pattern type
	// choses the question from the puzzle array based on the current difficulty (Theta) level
	self.patternType = allPuzzleTypes[linearDifficulty(allPuzzleTypes.length)];
	if (self.patternType[2] == 2) {
		self.patDupIcon = Math.floor(Math.random()*2);
	}
	self.numberGridArray = [];
	var numberTempArray = [];
	//console.log(self.patternType);
	// sets a binary to determine if multiple annuli are used or not
	if (self.patternType[2].indexOf(0) > -1 || self.patternType[2].indexOf(1) > -1 || self.patternType[2].indexOf(2) > -1)
		self.includeAnnuli = true;
	else
		self.includeAnnuli = false;
		
	console.log("The Puzzle in an array (self.patternType): ");
	console.log(self.patternType);
	// self.parternType[0] defines the size of the matrix. It is a placeholder currently as
	// matrices other than 3x3 are not fully implemented.
	// self.patternType[1] defines the graphical elements used; for example spike rings, dice faces, etc...
	// Currently this is mutually exclusive with multiple annuli NON-URGENT FIX WANTED
	switch (self.patternType[1][0]) {
		case 0:
		case 1:
		case 2:
			self.includeAnnuli = true;
			break;
		default:
			break;
	} 	
	// Boolean to determine whether the puzzle use graphics with multiple binary elements
	self.isBinary = false;
	// What rules are used in the puzzle?
	// self.patternType[2] contains the list of rules used for a particular puzzle. 
	for (var t = 0; t < self.patternType[2].length; t++) {
		if (self.patternType[2][t] > 2 && self.patternType[2][t] < 17)
			self.isBinary = true;
	}
	for (var t = 0; t < self.patternType[2].length; t++) {
		switch (self.patternType[2][t]) {
			// Addition
			case 3:
				for (var y = 0; y < maxG-1; y++) {
					self.numberGridArray[y] = [];
					for (var x = 0; x < maxG-1; x++) {
						self.numberGridArray[y][x] = self.patternType[6][y+(maxG-1)*x];
					}
				}
				self.numberGridArray[maxG-1] = [];
				for (var x = 0; x < maxG-1; x++) {
					self.numberGridArray[maxG-1][x] = self.numberGridArray[0][x]+self.numberGridArray[1][x];
					if (self.numberGridArray[maxG-1][x] > 9 || self.numberGridArray[maxG-1][x] < -9)
						console.warn("|Num| >9: "+ (maxG-1) + ", "+ x);
				}
				for (var y = 0; y < maxG; y++) {
					self.numberGridArray[y][maxG-1] = self.numberGridArray[y][0]+self.numberGridArray[y][1];
					if (self.numberGridArray[y][maxG-1] > 9 ||self.numberGridArray[y][maxG-1] < -9)
						console.warn("|Num| >9: "+ y + ", "+ (maxG-1));
				}
				self.numberGridArray.push
				//console.log("NumberGridArray");
				//console.log(self.numberGridArray);
				//console.log(self.numberAnswerArray);
				break;
			//Logic Gates (Presently discounting YES and NO)
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:
				// y is vertical matrix element location
				// x is horizontal matrix element location
				// r is the selected sub element
				// self.patternType[6] is arranged [y+(maxG-1)*x][sub elements of matrix element]
				//
				// fill in the pre-seeded matrix elements.
				for (var y = 0; y < maxG-1; y++) {
					self.numberGridArray[y] = [];
					for (var x = 0; x < maxG-1; x++) {
						self.numberGridArray[y][x] = [];
						for (r = 0; r < self.patternType[6][(y+(maxG-1)*x)%self.patternType[6].length].length; r++) {
							self.numberGridArray[y][x][r] = Math.abs(self.patternType[6][(y+(maxG-1)*x)%self.patternType[6].length][r]%2);
						}
					}
				}
				// select the right logic gate.
				if ((self.patternType[2][t]-3) < logicGateArray.length) {
					logicGate = logicGateArray[self.patternType[2][t]-3];
					console.log("patternType: "+(self.patternType[2][t]-3)+" LGA: "+logicGateArray);
				} else {
					console.warn("Logic not in logicGateArray");
				}
				//console.log(returnStringArray(self.numberGridArray));
				// this is a 2x2->3x3 expansion form. It could potentially be shuffled after being built.
				// Make the first two elements
				self.numberGridArray[maxG-1] = [];
				//console.log(self.numberGridArray[0][0]); // This is a NaN
				for (var x = 0; x < maxG-1; x++) {
					// Expand the first two elements to the first 2x2 sub-grid of elements
					self.numberGridArray[maxG-1][x] = [];
					for (var r = 0; r < self.numberGridArray[0][x].length; r++) {
						// Add the 3rd column via logicGate
						self.numberGridArray[maxG-1][x][r] = logicGate(self.numberGridArray[0][x][r],self.numberGridArray[1][x][r]);
						// Can only take binary input
						if (self.numberGridArray[maxG-1][x][r] > 1 || self.numberGridArray[maxG-1][x][r] < 0)
							console.warn("|Num| >1: "+ (maxG-1) + ", "+ x);
					}
				}
				//console.log(returnStringArray(self.numberGridArray));
				for (var y = 0; y < maxG; y++) {
					// add the third row
					self.numberGridArray[y][maxG-1] = [];
					for (var r = 0; r < self.numberGridArray[y][0].length; r++) {
						//fill in the third row via logicGate
						self.numberGridArray[y][maxG-1][r] = logicGate(self.numberGridArray[y][0][r],self.numberGridArray[y][1][r]);
						// can only take binary input
						if (self.numberGridArray[y][maxG-1][r] > 1 ||self.numberGridArray[y][maxG-1][r] < 0)
							console.warn("|Num| >1: "+ y + ", "+ (maxG-1));
					}
				}
				//console.log("self.numberGridArray:")
				//console.log(returnStringArray(self.numberGridArray));
				break;
			/*case 5:
			// Both XOR and AND
				for (var y = 0; y < maxG-1; y++) {
					self.numberGridArray[y] = [];
					var temp = 4;
					for (var x = 0; x < maxG-1; x++) {
						self.numberGridArray[y][x] = [0,[],[]];
						self.numberGridArray[y][x][0] = self.patternType[6][(y+(maxG-1)*x)%self.patternType[6].length];
						//console.log (y+" : "+x);
						for (var z = 0; z < temp; z++) {
							if (self.numberGridArray[y][x][0]%Math.ceil(temp) == z) {
								self.numberGridArray[y][x][1][z] = 0;
								self.numberGridArray[y][x][2][z] = 0;
							} else {
								self.numberGridArray[y][x][1][z] = 1;
								self.numberGridArray[y][x][2][z] = 1;
							}
						}
					}
				}
				self.numberGridArray[maxG-1] = [];
				for (var x = 0; x < maxG-1; x++) {
					self.numberGridArray[maxG-1][x] = [-1,[],[]];
				
					for (var z = 0; z < temp; z++) {
						self.numberGridArray[maxG-1][x][1][z] = (self.numberGridArray[0][x][1][z]+self.numberGridArray[1][x][1][z])%2;
						self.numberGridArray[maxG-1][x][2][z] = (self.numberGridArray[0][x][2][z]*self.numberGridArray[1][x][2][z])%2;
					}
				}
				for (var y = 0; y < maxG; y++) {
					self.numberGridArray[y][maxG-1] = [-1,[],[]];
				
					for (var z = 0; z < temp; z++) {
						self.numberGridArray[y][maxG-1][1][z] = (self.numberGridArray[y][0][1][z]+self.numberGridArray[y][1][1][z])%2;
						self.numberGridArray[y][maxG-1][2][z] = (self.numberGridArray[y][0][2][z]*self.numberGridArray[y][1][2][z])%2;
					}
				}
			
			
				//console.log("kk");
				//console.log(self.numberGridArray[0][2][1][0]+", "+self.numberGridArray[0][2][1][1]+", "+self.numberGridArray[0][2][1][2]+", "+self.numberGridArray[0][2][1][3]);
				//console.log(self.numberGridArray[0][2][2][0]+", "+self.numberGridArray[0][2][2][1]+", "+self.numberGridArray[0][2][2][2]+", "+self.numberGridArray[0][2][2][3]);
				//console.log(self.numberGridArray);
				//console.log(self.numberAnswerArray);
			
				break;*/
			// No use of central icon
			default:
				//console.log("CH1")
				//console.log(self.numberGridArray)
				if (self.numberGridArray.length == 0) {
					//console.log("CH2")
					for (var y = 0; y < maxG; y++) {
						self.numberGridArray[y] = [];
						for (var x = 0; x < maxG; x++) {
							self.numberGridArray[y][x] = 0;
						}
					}
				}
			break;
		}
	}
	self.numberAnswerArray = self.patternType[7];
	//
	// radii defines the size of annuli
	self.radii = [];
	window.updateRadii = function() {
		var tempAnulliWidth = cx;
		if(self.includeAnnuli) {
			for (var i=0;i< maxShapes;i++) {
				self.radii[i] = tempAnulliWidth;
				tempAnulliWidth = tempAnulliWidth-tempAnulliWidth/4-interSpacing*self.radii[i];
			}
		} else {
			for (var i=0;i< maxShapes;i++) {
				self.radii[i] = 1.50*cx;
				//tempAnulliWidth = tempAnulliWidth-tempAnulliWidth/4-interSpacing*self.radii[i];
			}
		}
	}
	
	updateRadii();
	// Attributes for annuli
	self.patterns = ["shade", 
					 "shape", 
					 "size", 
					 /*"dasharray", */
					 "rotation"];
	// available regular shapes for annuli attributes
	self.availableSides = [0,3,4,5,6]; //2,"pentagon" // N.B. Pentagons work, 2 doesn't quite.
	// available colours for annuli attributes - also used for inner shapes also.
	self.availableColours = ["White","DarkGrey","Black"];
	// available scales for annuli attributes
	self.availableScales = [0.8, 1, 1.2];
	// Dashes is not currently used due to visibility issues
	self.availableDashes = ["none"];
	// available rotations for annuli attributes
	// only used for distributions of 2 or 3 values
	self.availableRotations = [0, 1/7, 2/7];
	
	var tempAXX = Math.floor(Math.random()*2);
	//
	//console.log("s.pT[3].l: "+self.patternType[3].length);
	//console.log("s.pT[3]: "+returnStringArray(self.patternType[3]));
	if (self.patternType[2]!=0) {
		self.gridLayout = self.patternType[3];
	} else {
		if (self.patternType[3].length == 2)
			self.gridLayout = [0,[0,0,0]];
		else
			self.gridLayout = [0,[0,0,0],[0,0,0]];
	}
	//console.log(returnStringArray(self.gridLayout));
	//
	self.missingIcons = self.patternType[8];
	//
	//self.layout = [];
	// value containing the number of layouts, plus some console printouts with the grid layout for each annuli.
	if(self.includeAnnuli) {
		self.noAnnuli = self.gridLayout.length-1;
	} else {
		self.noAnnuli = 1;
	}
	console.log("No. Annuli: "+self.noAnnuli);
	console.log("size layout: "+self.gridLayout[0]);
	if (self.includeAnnuli) {
		console.log("annulus 1 layout: "+self.gridLayout[1]);
		if (self.noAnnuli > 1)
			console.log("annulus 2 layout: "+self.gridLayout[2]);
	}
	// Accessible booleans describing whether a particular pattern is used or not
	self.usingRegPolyShape = [];
	self.usingColour = [];
	self.usingScale = 0;
	self.usingRotation = [];
	self.usingDashes = [];
	self.usingWidth = [];
	for (var z = 0; z < self.noAnnuli; z++) {
		self.usingRegPolyShape[z] = 0;
		self.usingColour[z] = 0;
		//self.usingScale = 0;
		self.usingRotation[z] = 0;
		self.usingDashes[z] = 0;
		self.usingWidth[z] = 0;
	}
	
	self.usingScale = self.gridLayout[0];
	for (var z = 0; z < self.noAnnuli; z++) {
		self.usingColour[z] = self.gridLayout[z+1][0];//convert(self.gridLayout[z+1][1]);
		self.usingRegPolyShape[z] = self.gridLayout[z+1][1];//convert(self.gridLayout[z+1][0]);
		self.usingRotation[z] = self.gridLayout[z+1][2];//convert(self.gridLayout[z+1][2]);
		//self.usingDashes[z] = self.gridLayout[z+1][3];//convert(self.gridLayout[z+1][3]);
	}
	//
	self.basicShade = [];
	for (var a = 0; a < maxShapes; a++) {
		self.basicShade[a] = self.availableColours[Math.floor(Math.random()*self.availableColours.length)];
	}
	//propertyStorage[5].push(self.basicShade);
	
	self.defaultPolySides = [];
	for (var z = 0; z < self.noAnnuli; z++) {
		self.defaultPolySides[z] = self.availableSides[Math.floor(Math.random()*self.availableSides.length)];
	}
	//propertyStorage[6].push(self.defaultPolySides);
	// rotation offset - ostensibly for higher difficulties. Originally written
	// for an old version of the code; may need updating at a later date.
	if (difficulty/maxDifficulty >= rotationOffset)
		self.rotOffset = Math.random();
	else
		self.rotOffset = 0;
	//propertyStorage[7].push(self.rotOffset);
	self.rotDirection = [];
	for (var z = 0; z < self.noAnnuli; z++) {
		self.rotDirection[z] = Math.floor(Math.random()*2);
	}
	// shuffle the patterns - this is distributions of 3/2 atm. No progressions used.
	// Altering this will be required if progressions are to be used
	// disabled if rotation is used as rotation is more naturally sequential (and harder) than other attributes
	var usingRotationTemp = false;
	for (var z = 0; z < self.noAnnuli; z++) {
		if (self.usingRotation[z] > 0) {
			usingRotationTemp = true;
			break;
		}
	}
	if (!usingRotationTemp) {
		self.shuffle = [Math.floor(Math.random()*maxG),
						Math.floor(Math.random()*maxG)];
	} else {
		self.shuffle = [0,0];
	}

	
	// The grid
	self.grid = [];
	//
	//
			console.log("self.numberGridArray: ");
			console.log(self.numberGridArray)
	for (var x = 0; x < maxG; x++) {
		self.grid[x] = [];
		for (var y = 0; y < maxG; y++) {
		//console.log(self.numberGridArray);
			var tempIcon = [];
			for (var z = 0; z < self.noAnnuli; z++) {
				tempIcon[z] = {"polyForm": regPolySides(x,y,z),
							   "polyShape": regPolyShape(x,y,z),
							   "shade": shade(x,y,z),
							   "strokeColour": strokeColour(x,y,z),
							   "lineWidth": z,
							   "dashForm": choosedasharray(x,y,z),
							   "dasharray": dashing(choosedasharray(x,y,z),z),
							   "rotation": rotation(x,y,z)};
			}
			self.grid[x][y] = {"scale": scale(x,y,z),
							   "a": tempIcon,
							   "diceNum": self.numberGridArray[x][y]};
			// a contains the annuli.
		}
	}
	//self.VV.watch("diceNum", function() {
	//	alert("Finally!");
	//});
	/*function observer(changes) {	
		console.log("All Change1!")
		console.log(change.type, change.name, change.oldValue);
	}
	//self.VV.diceNum = [1,0,0,0];
	Object.observe(self.VV, function(changes) {
		changes.forEach(function(change){
			console.log("All Change2!")
			console.log(change.type, change.name, change.object[change.name], change.oldValue);
		});
	});*/
	/*self.VV.diceNum = [1,0,0,0];
	console.log(self.VV.diceNum);
	self.VV.diceNum = [0,1,1,1];
	console.log(self.VV.diceNum);
	self.VV.diceNum = [0,1,1,1];
	console.log(self.VV.diceNum);
	self.VV.diceNum = [0,1,1,0];
	console.log(self.VV.diceNum);	*/
	//
	// Checking for identicallity;
	// compares arrays
	function arraysEqual(a, b) {
		if (a === b) return true;
		if (a == null || b == null) return false;
		if (a.length != b.length) return false;

		for (var i = 0; i < a.length; ++i) {
			if (a[i] !== b[i]) return false;
		}
		return true;
	}
	// compares matrix elements/response alternatives or distractors (formerly called icons)
	function equivalency(A,B) {
		// A/B = an array of JSON objects that represent each annuli in an object.
		// A/B = pat.answers[x] or pat.grid[x][y]
		//console.log("Equivalency (A, B)")
		//console.log("A");
		//console.log(A);
		//console.log("B");
		//console.log(B);
		if (A === B)
			return true;
		if (A.diceNum instanceof Array) {
			if (B.diceNum instanceof Array) {
				if (A.diceNum.length != B.diceNum.length)
					return false;
				for (var x = 0; x < A.diceNum.length; x++) {
					if (A.diceNum[x] != B.diceNum[x])
						return false;
				}
			} else 
				return false;
		} else if (B.diceNum instanceof Array)
			return false;
		else
			if (A.diceNum != B.diceNum)
				return false;
		if(self.includeAnnuli) {
			if (A.scale != B.scale)
				return false;
			for (var z = 0; z < A.a.length; z++) {
				if (!arraysEqual(A.a[z].polyShape, B.a[z].polyShape)) 
					return false;
				if (A.a[z].shade != B.a[z].shade) 
					return false;
				if (A.a[z].dashForm != B.a[z].dashForm) 
					return false;
				if (Math.round(100000*(A.a[z].rotation%1)) != Math.round((100000*(B.a[z].rotation%1)))) 
					return false;
			}
		}
		return true;
	}	
	// Is it symmetric?	
	function symmetryChecker() {
		// Does not handle rotational symmetry yet.
		// Does not handle manipulations of elements yet. 
		// Should potentially be per attribute - not sure.
		// Some logic gates being N->1 maps is handled by restricting v to [maxG-1, maxG-1]
		// which may be able to then be shuffled for additional complexity. (Not implemented or theory-checked yet)
		var symmetric = [];
		// [vertical, horizontal, increasing diagonal, decreasing diagonal]
		// Vertical line of symmetry.
		var tempSymmetry = true;
		for (var y = 0; y < maxG; y++) {
			/*console.log("Vertical")
			console.log(0+" :: "+y)
			console.log(self.grid[0][y])
			console.log(2+" :: "+y)
			console.log(self.grid[2][y])
			console.log(equivalency(self.grid[0][y],self.grid[2][y]));
			console.log(arraysEqual(self.grid[0][y].a[0].polyShape,self.grid[2][y].a[0].polyShape))
			*/
			if (!equivalency(self.grid[0][y],self.grid[2][y]))
				tempSymmetry = false;
		}
		if (tempSymmetry) 
			symmetric.push("vertical");
		// Horizontal line of symmetry.
		var tempSymmetry = true;
		for (var x = 0; x < maxG; x++) {
			/*console.log("Horizontal")
			console.log(x+" :: "+0)
			console.log(self.grid[x][0])
			console.log(x+" :: "+2)
			console.log(self.grid[x][2])
			console.log(equivalency(self.grid[x][0],self.grid[x][2]));
			console.log(arraysEqual(self.grid[x][0].a[0].polyShape,self.grid[x][2].a[0].polyShape))
			*/
			if (!equivalency(self.grid[x][0], self.grid[x][2])) {
				tempSymmetry = false;
			}
		}
		if (tempSymmetry) 
			symmetric.push("horizontal");
		// Increasing Diagonal line of symmetry.
		var tempSymmetry = true;
		for (var x = 0, y = 1; y < maxG ;x++,y++) {
			/*console.log("Decreasing Diagonal")
			console.log(x+" :: "+y)
			console.log(self.grid[x][y])
			console.log((x+1)+" :: "+(y-1))
			console.log(self.grid[x+1][y-1])
			console.log(equivalency(self.grid[x][y],self.grid[x+1][y-1]));
			console.log(arraysEqual(self.grid[x][y].a[0].polyShape,self.grid[x+1][y-1].a[0].polyShape))
			*/
			if (!equivalency(self.grid[x][y],self.grid[x+1][y-1]))
				tempSymmetry = false;
		}
		if (!equivalency(self.grid[0][maxG-1],self.grid[maxG-1][0]))
			tempSymmetry = false;
		if (tempSymmetry) 
			symmetric.push("decreasingDiagonal");
		// Decreasing Diagonal line of symmetry.
		var tempSymmetry = true;
		for (var x = 0, y = 1; y >= 0 ;x++,y--) {
			/*console.log("Increasing Diagonal")
			console.log(x+" :: "+y)
			console.log(self.grid[x][y])
			console.log((x+1)+" :: "+(y+1))
			console.log(self.grid[x+1][y+1])
			console.log(equivalency(self.grid[x][y],self.grid[x+1][y+1]));
			console.log(arraysEqual(self.grid[x][y].a[0].polyShape,self.grid[x+1][y+1].a[0].polyShape))
			*/
			if (!equivalency(self.grid[x][y],self.grid[x+1][y+1]))
				tempSymmetry = false;
		}
		/*console.log("Increasing Diagonal")
		console.log(0+" :: "+0)
		console.log(self.grid[0][0])
		console.log(2+" :: "+2)
		console.log(self.grid[2][2])
		console.log(equivalency(self.grid[0][0],self.grid[2][2]));
		console.log(arraysEqual(self.grid[0][0].a[0].polyShape,self.grid[2][2].a[0].polyShape))
		*/
		if (!equivalency(self.grid[0][0],self.grid[maxG-1][maxG-1]))
			tempSymmetry = false;
		//console.log("ts: "+ tempSymmetry);
		if (tempSymmetry) 
			symmetric.push("increasingDiagonal");
		// Rotational symmetries
	
		return symmetric;
	}
	console.log("Initial identified symmetries: " +symmetryChecker());
	if (self.patternType[2]!=0) 
		self.symmetry = symmetryChecker();
	else
		self.symmetry = [];
	//console.log("s.sym.length: "+self.symmetry.length);
	//console.log("s.sym: "+self.symmetry);
	//
	// location of answer
	// _Capital V_ : Contains the properties of the correct answer
	// _Lowercase v_ : Contains the location on the grid of the correct answer
	// Non bottom right locations are arguably more complex, for english speakers.
	if (self.isBinary) {
		if (self.symmetry.indexOf("decreasingDiagonal")>=0) 
			console.warn("Potentially graphically ambiguous matrix")
		self.v = [maxG-1,maxG-1];
		// This can be subsequently shuffled to be anywhere, but the form needs to be built around it first.
		// May need to symmetry check after shuffling.
	} else if (self.symmetry.length > 0) {
		validVVArray = [];
		for (var i = 0; i < maxG; i++) {
			validVVArray[i] = [];
			for (var j = 0; j < maxG; j++) {
				validVVArray[i].push(j);
			}
		}
		if (maxG == 3) {
			// if maxG == 2 or 4, then the line of symmetry passes between elements.
			// and all elements have another element that defines them, according to the symmetry.
			//console.log("1. validVVArray: ");
			//console.log(returnStringArray(validVVArray));
			if (self.symmetry.indexOf("horizontal")>=0) {
				validVVArray[1] = [];
			}
			//console.log("2. validVVArray: ");
			//console.log(returnStringArray(validVVArray));
			if (self.symmetry.indexOf("vertical")>=0) {
				for (var i = 0; i < validVVArray.length; i++) {
					validVVArray[i].splice(1,1);
				}
			}
			//console.log("3. validVVArray: ");
			//console.log(returnStringArray(validVVArray));
			if (self.symmetry.indexOf("decreasingDiagonal")>=0) {
				for (var i = 0; i < validVVArray.length; i++) {
					validVVArray[i].splice(i,1);
				}
			}
			//console.log("4. validVVArray: ");
			//console.log(returnStringArray(validVVArray));
			if (self.symmetry.indexOf("increasingDiagonal")>=0) {
				for (var i = 0; i < validVVArray.length; i++) {
					validVVArray[i].splice(validVVArray-i-1,1);
				}
			}
			//console.log("5. validVVArray: ");
			//console.log(returnStringArray(validVVArray));
		}
		var tempCounter = 0;
		for (var i = 0; i < validVVArray.length; i++) {
			for (var j = 0; j < validVVArray[i].length; j++) {
				tempCounter ++;
			}
		}
		tempVval = Math.floor(Math.random()*tempCounter);
		tempCounter = 0;
		loop1:
			for (var i = 0; i < validVVArray.length; i++) {
				for (var j = 0; j < validVVArray[i].length; j++) {
					//console.log(tempCounter+" :: "+tempVval);
					if (tempCounter == tempVval) {
						self.v = [i,j];
						break loop1;
					}
					tempCounter ++;
				}
			}
	} else {
		self.v = [Math.floor(Math.random()*maxG),Math.floor(Math.random()*maxG)];
	}
	//
	//console.log(self.v)
	propertyStorage[3].push(self.v);
	self.VV = self.grid[self.v[0]][self.v[1]];	
	//console.log(self.VV.diceNum);
	console.log("Grid: ");
	console.log(self.grid)
	//
	/*function diagonal(A, B, pos) {
		// diagonal (a,b,pos) returns true if a and b are on the same positive or negative diagonal
		// pos is a multiplier defining whether the diagonal checked is positive or negative.
		if (arraysEqual(A,B)) {
			return true;
		}
		for (var x = 1; x < maxG; x++) {
			if ((A[0]+pos*x)%maxG == B[0] && (A[1]+x)%maxG == B[1]) {
				return true;
			}
		}
		return false;
	}*/
	// Visibility
	// code that determines which matrix elements are required for working out the answer for
	// distributions of 3 and 2.
	self.vis = [];
	self.layoutsUsed = [];
	self.visArray = [];
	for (var k = 1; k<=4; k++) {
		if (self.gridLayout[0] == k) {
			self.layoutsUsed.push(k);
		}
		for (var z = 0; z < self.noAnnuli; z++) {
			//console.log("K: "+k+" lay.push: "+self.gridLayout[z+1].indexOf(k));
			if (self.gridLayout[z+1].indexOf(k) >= 0) {
				self.layoutsUsed.push(k);
				break;
			}
		}
	}
	//console.log("s.lU: "+self.layoutsUsed);
	function invisible() {
		//requires self.visArray.length == 2 (but can also be 3 because of code structure: do...while (not invis))
		if (self.visArray.length != 2 && self.visArray.length != 3) {
			console.warn ("Invisible() called on self.visArray.length != 2 OR 3; self.visArray: "+ self.visArray);
		}
		var invis = [];
		for (var k = 0; k < 2; k++) {
			switch(self.visArray[0][k]) {
				case 0:
					switch(self.visArray[1][k]) {
						case 0:
							invis[k] = 0;
							break;
						case 1:
							invis[k] = 2;
							break;
						case 2:
							invis[k] = 1;
							break;
					}
					break;
				case 1:
					switch(self.visArray[1][k]) {
						case 0:
							invis[k] = 2;
							break;
						case 1:
							invis[k] = 1;
							break;
						case 2:
							invis[k] = 0;
							break;
					}
					break;
				case 2:
					switch(self.visArray[1][k]) {
						case 0:
							invis[k] = 1;
							break;
						case 1:
							invis[k] = 0;
							break;
						case 2:
							invis[k] = 2;
							break;
					}
					break;
			}
		}
		return invis;
	}
	function requiredVisSet () {
		// This function returns a list of coordinates that form the remaining required set.
		// This function assumes the following:
		// self.layoutsUsed.length > 0
		// self.visArray.length >= 2 ???
		//
		//console.log ("LayoutsUsed: "+self.layoutsUsed);
		//console.log("Running: RequiredVisSet");
		//console.log ("VisArray: "+self.visArray);
		//console.log("0");
		var fullSet = [];
		for (var x = 0; x < maxG; x++) {
			fullSet[x] = [];
			for (var y = 0; y < maxG; y++) {
					fullSet[x][y] = 0;
			}
		}
		
		// console output showing the full set of visible items and how required they are.
		function printFullSet () {
			var tempArray = [];
			for (var y = 0; y < maxG; y++) {
				tempArray[y] = [];
			}
			for (var x = 0; x < maxG; x++) {
				for (var y = 0; y < maxG; y++) {
					tempArray[y][x] = fullSet[x][y];
				}
			}
			for (var y = 0; y < maxG; y++) {
				console.log("fullSet[y = "+y+"]: "+ tempArray[y]);
			}
		}
		//printFullSet();
		//console.log("1");
		// array sequenceNeeded is used to make sure that each attribute layout is sufficiently represented
		// in the visible matrix to enable the test item to be solved.
		var sequenceNeeded = [false,false,false,false];
		for (var k = 0; k < self.layoutsUsed.length; k++) {
			sequenceNeeded[self.layoutsUsed[k]-1] = true;
		}
		var tempBool = true;
		//console.log("AAA");
		// increments elements of the matrix according to need.
		// Horizontal (well, uses the variable X)
		for (var x = 0; x < maxG; x++) {
			tempBool = true;
			for (var k = 0, counter = 0; k < self.visArray.length; k++) {
				if (self.visArray[k][0] == x) {
					//console.log("AAB. x: "+x+" k: "+k);
					tempBool = false;
					counter++;
				} 
				if (counter > 1) {
					sequenceNeeded[0] = false;
				}
			}
			if (tempBool && self.layoutsUsed.indexOf(1) >= 0) {
				//console.log("AAC");
				for (var y = 0; y < maxG; y++) {
					fullSet[x][y] ++;
					//console.log("FS[x = "+x+"][y = "+y+"]: " + fullSet[x][y]);
				}
			}
		}
		//printFullSet();
		//console.log("2");
		// Vertical (well, uses the variable Y)
		for (var y = 0; y < maxG; y++) {
			tempBool = true;
			for (var k = 0, counter = 0; k < self.visArray.length; k++) {
				if (self.visArray[k][1] == y) {
					tempBool = false;
					counter++;
				}
				if (counter > 1) {
					sequenceNeeded[1] = false;
				}
			}
			if (tempBool && self.layoutsUsed.indexOf(2) >= 0) {
			//console.log("counter: "+ counter+" sN[1]: "+sequenceNeeded[1]);
				for (var x = 0; x < maxG; x++) {
					fullSet[x][y] ++;
				}
			}
		}
		//printFullSet();
		//console.log("3");
		// Diagonal 1
		for (var i = 0; i < maxG; i++) {
			tempBool = true;
			//checkVA:
			for (var k = 0, counter = 0; k < self.visArray.length; k++) {
				for (var x = i, y = 0, n = 0; n < maxG; n++) {
					var temp = [x,y] 
					if (arraysEqual(self.visArray[k],temp)) {
						tempBool = false;
						counter++;
					}
					x = (x+1)%maxG;
					y = (y+1)%maxG;
				}
				if (counter > 1) {
					sequenceNeeded[2] = false;
				}
			}
			if (tempBool && self.layoutsUsed.indexOf(3) >= 0) {
			//console.log("counter: "+ counter+" sN[2]: "+sequenceNeeded[2]);
				for (var x = i, y = 0, n = 0; n < maxG; n++) {
					//console.log("x: "+x+" y: "+y+ " n: " +n)
					fullSet[x][y] ++;
					x = (x+1)%maxG;
					y = (y+1)%maxG;
				}
			}
		}
		//printFullSet();
		//console.log("4");
		// Diagonal 2
		for (var i = 0; i < maxG; i++) {
			tempBool = true;
			//checkVA:
			for (var k = 0, counter = 0; k < self.visArray.length; k++) {
				for (var x = 0, y = i, n = 0; n < maxG; n++) {
					var temp = [x,y]
					if (arraysEqual(self.visArray[k],temp)) {
						tempBool = false;
						counter++;
					}
					//console.log("["+x+","+y+"]");
					x = (x+1)%maxG;
					y = (y+maxG-1)%maxG;
				}
				if (counter > 1) {
					sequenceNeeded[3] = false;
				}
			}
			if (tempBool && self.layoutsUsed.indexOf(4) >= 0) {
			//console.log("counter: "+ counter+" sN[3]: "+sequenceNeeded[3]);
				for (var x = 0, y = i, n = 0; n < maxG; n++) {
					fullSet[x][y] ++;
					x = (x+1)%maxG;
					y = (y+maxG-1)%maxG;
				}
			}
		}
		//printFullSet();
		//console.log("SN 0");
		//console.log(sequenceNeeded[0]);
		// 4 scans through each element of sequenceNeeded 
		// to make sure everything is present and correct.
		// The structures of these loops are distinct from one another.
		if (sequenceNeeded[0]) {
			for (var x = 0; x < maxG; x++) {
				var oneMoreNeeded = false;
				for (var k = 0; k < self.visArray.length; k++) {
					if (self.visArray[k][0] == x) {
						//console.log("AAB. x: "+x+" k: "+k);
						oneMoreNeeded = true;
						break;
					}
				} 
				if (oneMoreNeeded) {
					//console.log("AAC");
					for (var y = 0; y < maxG; y++) {
						fullSet[x][y] ++;
						//console.log("FS[x = "+x+"][y = "+y+"]: " + fullSet[x][y]);
					}
				}
			}
		}
		//printFullSet();
		//console.log("SN 1");
		if (sequenceNeeded[1]) {
			for (var y = 0; y < maxG; y++) {
				var oneMoreNeeded = false;
				for (var k = 0; k < self.visArray.length; k++) {
					if (self.visArray[k][1] == y) {
						//console.log("AAB. x: "+x+" k: "+k);
						oneMoreNeeded = true;
						break;
					}
				} 
				if (oneMoreNeeded) {
					//console.log("AAC");
					for (var x = 0; x < maxG; x++) {
						fullSet[x][y] ++;
						//console.log("FS[x = "+x+"][y = "+y+"]: " + fullSet[x][y]);
					}
				}
			}
		}
		//printFullSet();
		//console.log("SN 2");
		if (sequenceNeeded[2]) {
			for (var i = 0; i < maxG; i++) {
				var oneMoreNeeded = false;
				vAloop:
				for (var k = 0; k < self.visArray.length; k++) {
					for (var x = i, y = 0, n = 0; n < maxG; n++) {
						var temp = [x,y] 
						if (arraysEqual(self.visArray[k],temp)) {
							oneMoreNeeded = true;
							break vAloop;
						}
						x = (x+1)%maxG;
						y = (y+1)%maxG;
					}
				}
					//console.log("AAC");
				if (oneMoreNeeded) {
					for (var x = i, y = 0, n = 0; n < maxG; n++) {
						fullSet[x][y] ++;
						x = (x+1)%maxG;
						y = (y+1)%maxG;
						//console.log("FS[x = "+x+"][y = "+y+"]: " + fullSet[x][y]);
					}
				}
			}
		}
		//printFullSet();
		//console.log("SN 3");
		if (sequenceNeeded[3]) {
			for (var i = 0; i < maxG; i++) {
				var oneMoreNeeded = false;
				vAloop2:
				for (var k = 0; k < self.visArray.length; k++) {
					for (var x = 0, y = i, n = 0; n < maxG; n++) {
						var temp = [x,y] 
						if (arraysEqual(self.visArray[k],temp)) {
							oneMoreNeeded = true;
							break vAloop2;
						}
						x = (x+1)%maxG;
						y = (y+maxG-1)%maxG;
					}
				}
				//console.log("counter: "+ counter+" sN[0]: "+sequenceNeeded[0]);
					//console.log("AAC");
				if (oneMoreNeeded) {
					for (var x = 0, y = i, n = 0; n < maxG; n++) {
						fullSet[x][y] ++;
						x = (x+1)%maxG;
						y = (y+maxG-1)%maxG;
						//console.log("FS[x = "+x+"][y = "+y+"]: " + fullSet[x][y]);
					}
				}
			}
		}
		// Fill the grid until only self.missingIcons+1 icons are hidden. (? is always hidden!)
		if (self.visArray.length < maxG*maxG-(self.missingIcons+1)) {
			for (var x = 0; x < maxG; x++) {
				for (var y = 0; y < maxG; y++) {
					fullSet[x][y]++;
				}
			}
		}
		//printFullSet();
		fullSet[self.v[0]][self.v[1]] = -1;
		var tempList = []
		if (self.visArray.length == 2) {
			var tempLoc = invisible();
			fullSet[tempLoc[0]][tempLoc[1]] = -2;
		}
		for (var k = 0; k < self.visArray.length; k++) {
			fullSet[self.visArray[k][0]][self.visArray[k][1]] = -3;
		}
		//console.log("FF");
		//printFullSet();
		// if any location on the grid satisfies more requirements only those locations will be returned.
		//
		var maxValue = 0;
		// set maxValue to the highest need on the grid
		for (var i = 0; i < maxG; i++)
    		for (var j = 0; j < maxG; j++)
        		if (fullSet[i][j] > maxValue)
          			maxValue = fullSet[i][j];
        //console.log("maxV: "+maxValue);
        // continue adding elements to the visible set until maxValue = 0
		if (maxValue > 0) {
			for (var x = 0; x < maxG; x++) {
				for (var y = 0; y < maxG; y++) {
					if (fullSet[x][y] == maxValue) {
						var tempIcon = [x,y];
						tempList.push(tempIcon);
					}
				}
			}
		} 
		//console.log("tempList: "+tempList);
		return tempList;
	}
	if (self.missingIcons > 0) {
		var tempList = requiredVisSet();
		while (tempList.length > 0) {
			var temp = Math.floor(Math.random()*tempList.length);
			self.visArray[self.visArray.length] = tempList[temp];
			tempList = requiredVisSet();
			//n.b. requiredVisSet() will run without making any additions!
		} 
	} else {
		for (var x = 0; x < maxG; x++) {
			for (var y = 0; y < maxG; y++) {
				self.visArray[self.visArray.length] = [x,y];
			}
		}
	}
	
	// alters the list of visible locations (self.visArray) into a grid of booleans determining visibility (self.vis)
	for (var i = 0; i < maxG; i++) {
		self.vis[i] = [];
		for (var j = 0; j < maxG; j++) {
			var tempbool = true;
			var temp = [i,j];
			//console.log(temp);
			for (var k = 0; k < self.visArray.length; k++) {
				//console.log(k+ ": "+self.visArray[k]);
				if (arraysEqual(self.visArray[k], temp)) {
					tempbool = false;
					k = self.visArray.length;
				}
			}
			if (!tempbool)
				self.vis[i][j] = true;
			else
				self.vis[i][j] = false;
		}
	}
	//console.log("e");

	// dasharray values
	// Discontinued due to disability issues, kept in code due to dependancies and incase it
	// becomes useful again in the future. Could be used for an attribute with 2 values for example.
	function dashing(dasharray,LW) {
		if (dasharray == 0) {
			return "none";
		} else if (dasharray == 1) {
			return ""+(LW*4)+",3";
		} else if (dasharray == 2) {
			return ""+LW+","+LW/2+"";
		}
	}
	// The answers
	// Number of answers
	
	self.answers = [];
	
	self.testItemAnswers = self.patternType[4];
	
	//console.log("s.tia: "+self.testItemAnswers+" : "+self.testItemAnswers.length);
	self.nAnswers = self.testItemAnswers.length+1;//+1;
	//var repAlt = false;
	// Error: answers the same as the correct answer could produce infinite loops.
	// This will happen whenever an element of numberAnswerArray in orders.js = 0, and includeAnnulus is false.
	//if (self.numberAnswerArray.indexOf(0) > 0 &&)
	//	throw new Error("numberAnswerArray contains 0, and includeAnnuli is false. indexOf(0): "+self.numberAnswerArray.indexOf(0)+" iA: "+self.includeAnnuli);
	//
	//Loop attempting to make distractors to be presented along with the correct answer.
	// also known as response alternatives depending on the literature viewed
	// Distractors must be:
	// different from the correct answer (self.VV)
	// different from each other
	// 
	//
	// Distractors should be:  ***(not yet implemented/though about sufficiently)***
	// Plausible if possible
	// Have an appropriate form or structure
	// Have a controlable Delta
	// Fit a specifiable set of rules
	for (var i = 0, tempAnswersCounter = 0, loopCounter = 0; i < self.testItemAnswers.length; i++) {
		do {
			// booleans to determine if any two answers are the same as each other, or if they are the same as self.VV
			//  at the end of the loop, if they are evaluated as true then the loop repeats, attempting to generate a distractor again.
			var repeatAnswers = false;
			var duplicateAnswer = false;
			//repAlt = false;
			//console.log ("ANSWER::: "+ i);
			/*do {
				tempXY = [Math.floor(Math.random()*maxG),
						  Math.floor(Math.random()*maxG)];
						  	
			} while (tempXY == self.v);*/
			//console.log("before diceNum call");
			//console.log(self.numberGridArray[0][2][1][0]+", "+self.numberGridArray[0][2][1][1]+", "+self.numberGridArray[0][2][1][2]+", "+self.numberGridArray[0][2][1][3]);
			//console.log(self.numberGridArray[0][2][2][0]+", "+self.numberGridArray[0][2][2][1]+", "+self.numberGridArray[0][2][2][2]+", "+self.numberGridArray[0][2][2][3]);
			
			//var tempXY = self.v;
			//
			// JSON containing the generated distractor's attribute values
			var tempIcon = [];
			for (var z = 0; z < self.noAnnuli; z++) {
				tempIcon[z] = {"polyForm": selectNewForm(i, z),
							   "shade": selectNewColour(i, z),
							   "dashForm": selectNewDash(i, z),
							   "rotation": selectNewRotation(i, z),
							   "lineWidth": z};
			}
			self.answers[i] = {"scale": selectNewScale(i),//self.grid[self.v[0]][self.v[1]].scale,
							   "a": tempIcon,
							   "diceNum": selectNewDice(i)};
			// format: [S,[C,F,R],[C,F,R]]
			//console.log("after diceNum call");
			//console.log(self.numberGridArray[0][2][1][0]+", "+self.numberGridArray[0][2][1][1]+", "+self.numberGridArray[0][2][1][2]+", "+self.numberGridArray[0][2][1][3]);
			//console.log(self.numberGridArray[0][2][2][0]+", "+self.numberGridArray[0][2][2][1]+", "+self.numberGridArray[0][2][2][2]+", "+self.numberGridArray[0][2][2][3]);
			// 
			// fills in the derivative attribute values of the distractor 
			// (those determined or influenced by the other attribute values)
			for (var z = 0; z < self.noAnnuli; z++) {
				self.answers[i].a[z].lineWidth = z;
				self.answers[i].a[z].dasharray = dashing(self.answers[i].a[z].dashForm, 
														self.answers[i].a[z].lineWidth);
				self.answers[i].a[z].polyShape = chooseRegPolyShape(self.answers[i].a[z].polyForm);
				if (z>0)
					self.answers[i].a[z].strokeColour = chooseStrokeColour(self.answers[i].a[z].shade,
																		   self.answers[i].a[z-1].shade);
				else
					self.answers[i].a[z].strokeColour = chooseStrokeColour(self.answers[i].a[z].shade,"White");
			}
			// dublicatedA is used in a console warning to help diagnostics
			// it helps identify which two distractors are involved when duplicate answers occur
			// n.b. when more than two are involved the console warning sometimes misses the others out.
			var duplicatedA = -1;
			//console.log("counter1, i:"+ i);
			//
			// checks if any two distractors are the same
			// if they insist on being the same it will give up after 30 attempts and continue with the rest of the code
			for (var j = 0; j < i; j++) {
				//console.log("counter2, j: "+ j);
				if (equivalency(self.answers[j],self.answers[i])) {
					repeatAnswers = true;
					duplicatedA = j; 
					tempAnswersCounter++;
					break;
				}
			}
			//console.log(self.answers[i])
			// checks if the generated distractor is the same as the correct answer
			// if they insist on the same it will give up after 1000 attempts and throw an error.
			if (equivalency(self.VV,self.answers[i]))
				duplicateAnswer = true;
			else
				duplicateAnswer = false;
			//console.log("tempAnswersCounter = "+tempAnswersCounter);
			//console.log(tempAnswersCounter);
			// warning incase duplicate distractors are produced; but allows the test item to continue to be generated
			// is bad if it happens, but not fatal to the test.
			if (tempAnswersCounter == 30 && !duplicateAnswer) {
				console.warn("Repeat Answers: "+i+" and "+duplicatedA);
				
				/*console.log (self.answers[i].a[0].shade);
				console.log (self.answers[i].a[0].polyShape);
				console.log (self.answers[i].a[0].dasharray);
				console.log (self.answers[i].scale);
				console.log ("----");
				console.log (self.answers[duplicatedA].a[0].shade);
				console.log (self.answers[duplicatedA].a[0].polyShape);
				console.log (self.answers[duplicatedA].a[0].dasharray);
				console.log (self.answers[duplicatedA].scale);*/
			}
			//console.log("self.VV");
			//console.log(JSON.stringify(self.VV));
			
			console.log("self.VV.diceNum:");
			console.log(returnStringArray(self.VV.diceNum));
			
			//console.log(self.VV.diceNum.toString());
			//console.log("Generated distractor:");
			//console.log(JSON.stringify(self.answers[i]));
			
			console.log("Generated distractor.diceNum:");
			console.log(returnStringArray(self.answers[i].diceNum));
			
			//console.log(self.answers[i].diceNum.toString());
			//console.log("GRID")
			//console.log(JSON.stringify(self.grid));
			// Escape incase errors mean the code is incapable of creating different distractors,
			// incapable of differentiating different distractors,
			// incapable of keeping the answer unique
			// or some weird bug involving the answer changing...
			// prevents the test freezing in these circumstances.
			// if allowed to happen, having a distractor the same as the correct answer would be
			// fatal to the test item.
			if (loopCounter >= 1000) {
				throw new Error("Error! - loopCounter: "+loopCounter+" - Check order.js first");
				// Likely causes: order.js, generation or distinguishing.
			}
			// increment the number of attempts to make a distractor by 1.
			console.log("****----****LOOP****----****")
			loopCounter ++;
		} while ((repeatAnswers && tempAnswersCounter < 30) || duplicateAnswer) 
		/*if (repAlt)
			console.warn("Duplicate Alterations!");*/
		// a contains the annuli.
	}
	function selectNewScale(i) {
		var val = -10;
		for (var m = 0; m < self.availableScales.length; m++) {
			if (self.availableScales[m] == self.grid[self.v[0]][self.v[1]].scale) 
				val = m;
		}
		if (val == -10)
			console.warn("Error indexing self.v's Scale");
		val+=self.testItemAnswers[i][0];
		val%=self.availableScales.length;
		return self.availableScales[val];
	}
	function selectNewDice(i) {
	// attempts to generate new number values for distractors.
	// the addition of logic gates and thus graphics with multiple binary values has
	// required substantial changes to this function, and to the structure of test item specification.
		//console.log (newDiceVal)
		//console.log("i: "+i);
		//console.log(self.patternType[2][0])
		// generally works by setting newDiceVal to the value of the answer's number attribute.
		// then altering it by the appropriate value in self.numberAnswerArray
		switch (self.patternType[2][0]) {
			case 3:		
			// simple addition
				//console.log("SADD");
				var newDiceVal = self.VV.diceNum;
				console.log(newDiceVal);
				if ((Object.prototype.toString.call( newDiceVal ) === '[object Array]')) {
					for (var x = 0; x < newDiceVal.length; x++) {
						newDiceVal[x]+=self.numberAnswerArray[i][x];
					}
				} else {
					newDiceVal+=self.numberAnswerArray[i];
				}
				var temp = maxG*maxG+1;
				newDiceVal=(newDiceVal+temp)%(temp*2)-temp;
				break;
			// AND
			case 4:
			// NAND
			case 5:
			// OR
			case 6:
			// XOR
			case 7:
			// NOR
			case 8:
			// XNOR
			case 9:
				// all logic gates have distractors generated in the same way
				// = would assign newDiceVal as pointing to the same object self.VV.diceNum points at
				// newDiceVal needs to clone self.VV.diceNum
				var newDiceVal = [];
				for (var r = 0; r < self.VV.diceNum.length; r++) {
					newDiceVal[r] = self.VV.diceNum[r];
				}
				console.log("newDieVal: "+returnStringArray(newDiceVal))
				//console.log("numberAnswerArray: "+returnStringArray(self.numberAnswerArray))
				for (var r = 0; r < newDiceVal.length; r++) {
					newDiceVal[r]+=self.numberAnswerArray[i][r];
					newDiceVal[r]=Math.abs(newDiceVal[r]%2);
				}
				console.log("seed: "+returnStringArray(self.numberAnswerArray[i]));
				console.log("Gen: "+returnStringArray(newDiceVal));
				break;
			//case 5:
				// XOR and AND
				/*var newDiceVal = [];
				newDiceVal[0] = self.VV.diceNum[0];
				newDiceVal[1] = self.VV.diceNum[1].slice();
				newDiceVal[2] = self.VV.diceNum[2].slice();
				for (var z = 0; z < newDiceVal[1].length; z++) { 
				//console.log(i*3+z);
					if (z == self.numberAnswerArray[i]%newDiceVal[1].length) { 
					//console.log("z==a")
						newDiceVal[1][z] = 1;
						newDiceVal[2][z] = 1;
					} else { 
						newDiceVal[1][z] = 0;
						newDiceVal[2][z] = 0;
					}
				//console.log("aaa111");
				//console.log(self.numberGridArray[0][2][1][0]+", "+self.numberGridArray[0][2][1][1]+", "+self.numberGridArray[0][2][1][2]+", "+self.numberGridArray[0][2][1][3]);
				//console.log(self.numberGridArray[0][2][2][0]+", "+self.numberGridArray[0][2][2][1]+", "+self.numberGridArray[0][2][2][2]+", "+self.numberGridArray[0][2][2][3]);
				//newDiceVal[1][z]=self.numberAnswerArray[(i+z)%self.numberAnswerArray.length];
					//newDiceVal[1][z]=Math.abs(newDiceVal[1][z]%2);
					//newDiceVal[2][z]=self.numberAnswerArray[(i+z)%self.numberAnswerArray.length];
					//newDiceVal[2][z]=Math.abs(newDiceVal[2][z]%2);
				}
				//console.log("b");
				//console.log(newDiceVal[1][0]+", "+newDiceVal[1][1]+", "+newDiceVal[1][2]+", "+newDiceVal[1][3]);
				//console.log(newDiceVal[2][0]+", "+newDiceVal[2][1]+", "+newDiceVal[2][2]+", "+newDiceVal[2][3]);
				break;*/
			default:
			// for test items that do not vary diceNum
			// should only be altered in these cases for test items where obviously
			// incorrect distractors are required (which should be rare and 
			// is currently done in other ways anyway).
				var newDiceVal = self.VV.diceNum;
				break;
		}
		//console.log("c");
		//console.log(newDiceVal[1][0]+", "+newDiceVal[1][1]+", "+newDiceVal[1][2]+", "+newDiceVal[1][3]);
		//console.log(newDiceVal[2][0]+", "+newDiceVal[2][1]+", "+newDiceVal[2][2]+", "+newDiceVal[2][3]);
		return newDiceVal;
	}
	function selectNewColour(i, z) {
		var val = -10;
		for (var m = 0; m < self.availableColours.length; m++) {
			if (self.availableColours[m] == self.grid[self.v[0]][self.v[1]].a[z].shade) 
				val = m;
		}
		if (self.testItemAnswers[i][z+1][0] > self.availableColours.length)
			console.warn("Odd newColour value");
		if (val == -10)
			console.warn("Error indexing self.v's Colour");
		val+=self.testItemAnswers[i][z+1][0];
		val%=self.availableColours.length;
		return self.availableColours[val];
	}
	function selectNewDash(i, z) {
		return "none";
	}
	function selectNewForm(i, z) {
		var val = -10;
		for (var m = 0; m < self.availableSides.length; m++) {
			if (self.availableSides[m] == self.grid[self.v[0]][self.v[1]].a[z].polyForm) 
				val = m;
		}
		if (val == -10)
			console.warn("Error indexing self.v's Form");
			//console.log(self.testItemAnswers[i]);
			//console.log(self.testItemAnswers[i][z+1]);
			//console.log("#Annuli: "+self.noAnnuli)
			//console.log(z+1)
			//console.log(self.testItemAnswers[i][z+1][1])
		val+=self.testItemAnswers[i][z+1][1];
		val%=self.availableSides.length;
		return self.availableSides[val];
	}
	function selectNewRotation(i, z) {
		var val = -10;
		for (var m = 0; m < self.availableRotations.length; m++) {
			if (self.availableRotations[m] == self.grid[self.v[0]][self.v[1]].a[z].rotation) 
				val = m;
		}
		if (val == -10)
			console.warn("Error indexing self.v's Rotation");
		val+=self.testItemAnswers[i][z+1][2];
		val%=self.availableRotations.length;
		return self.availableRotations[val];
	}
	
	function xyCalc(x,y,layout) {
		// Takes the x and y values, together with the layout to give 
		// a value from 0-2, determining the value of the attribute this
		// function is called by.
		//console.log(x+", "+y+", "+n);
		if (layout == 0) {
			var xc = 0;
			var yc = 0;
			//console.log("layout = 0:"+layout+"xc: "+xc);
		} 
		
		switch (layout) {
			case 1:
				var xc = (x+self.shuffle[0])%maxG;
				var yc = 0;
				//console.log("layout = 0:"+layout+"xc: "+xc);
				break;
			case 2:
				var xc = 0;
				var yc = (y+self.shuffle[1])%maxG;
				break;
			case 3:
				var xc = (x+self.shuffle[0])%maxG;
				var yc = (y+self.shuffle[1])%maxG;
				break;
			case 4:
				var xc = (maxG-1)-(x+self.shuffle[0])%maxG;
				var yc = (y+self.shuffle[1])%maxG;
				break;
		}

		//console.log(xc+", "+yc+", "+nc);
		//console.log("equ: "+self.equation);
		
		var tempXYN = (xc+yc)%maxG;
		if (self.patternType[2][0] == 2) {
			if (self.patDupIcon == 0 && tempXYN == 1)
				tempXYN = 0;
			else if (self.patDupIcon == 1 && tempXYN == 1)
				tempXYN = 2;
		}
		//console.log(tempXYN);
		return tempXYN;
	}
	function regPolySides(x,y,n) {
		if (self.usingRegPolyShape[n]>0) {
			switch (xyCalc(x,y,self.usingRegPolyShape[n])) {
				case 0: return 3;
				case 1: return 4;
				case 2: return 5;
				case 3: return 6;
				case 4: return 7;
			}
		}
		return self.defaultPolySides[n];
	}
	function regPolyShape (x,y,n) {
		return chooseRegPolyShape (regPolySides(x,y,n))
	}
	function chooseRegPolyShape (sides) {
		var shape = [];
		if (sides == "pentagon") {
			for (var j = 0; j < 5;j++) {
				shape.push(((j * 2) % 5)/5-1/10);
			}
			return shape;
		}
		for (var j = 0; j < sides;j++) {
			shape.push(j/sides);
		}
		return shape;
	}
	/*function regPolyShape (x,y,n) {
		var shape = [];
		for (var j = 0; j < regPolySides(x,y,n); j ++) {
			shape.push(((self.random[j]+j*9)/10)/regPolySides(x,y,n));
		}
		return shape;
	}*/
	function shade (x,y,n) {
		if (self.usingColour[n]>0) {
			return self.availableColours[xyCalc(x,y,self.usingColour[n])];
		} 
		return self.basicShade[n];
	}
	function strokeColour(x,y,n) {
		if (n>0)
			return chooseStrokeColour(shade (x,y,n),shade (x,y,n-1));
		else
			return chooseStrokeColour(shade (x,y,n),self.availableColours[0]);
	}
	function chooseStrokeColour (colour1, colour2) {
		if (colour2 == self.availableColours[0]) { 
			if (colour1 == self.availableColours[2])
				return self.availableColours[1];
			else
				return self.availableColours[2];
		} else {
			if (colour1 == self.availableColours[2] && colour2 == self.availableColours[2])
				return self.availableColours[1];
			else if (colour1 == self.availableColours[1] && colour2 == self.availableColours[2] || 
					colour2 == self.availableColours[1] && colour1 == self.availableColours[2])
				return self.availableColours[0];
			else if (colour1 == self.availableColours[0] && colour2 == self.availableColours[2])
				return self.availableColours[1];
			else
				return self.availableColours[2];
		}
	}
	this.chooseStrokeColour = chooseStrokeColour;
	function scale (x,y,z) {
		if (self.usingScale>0) {
			return self.availableScales[xyCalc(x,y,self.usingScale)]
		}
		return 1;
	}
	function choosedasharray(x,y,z) {
		if (self.usingDashes[z]>0) {
			return xyCalc(x,y,self.usingDashes[z]);
		}
		return 0;
	}
	function rotation (x,y,z) {
		if (self.usingRotation[z]>0) {
			return self.availableRotations[xyCalc(x,y,self.usingRotation[z])];
			/*if (self.rotDirection[z] == 0) {
				return (x/8+y/3);
			} else {
				return (x/3+y/8);
			}*/
		}
		return 0;
	}
	function offsetRotation (x,y,n) {
		if (regPolySides(x,y,n) != 0)
			return self.rotOffset/(1+n)-1/(regPolySides (x,y,n)*2);
		else
			return self.rotOffset/(1+n);
	}
	
	self.usingANYrot = false;
	for (var x = 0; x < self.answers.length; x++) {
		for (var z = 0; z < self.noAnnuli; z++) {
			if (self.answers[x].a[z].rotation > 0) {
				self.usingANYrot = true;
			}
		}
	}
}
// 05-icon.js
//
//
//Draw polygon
polyFunction = d3.svg.line()
             .x(function(d) { return d.x; })
             .y(function(d) { return d.y; })
             .interpolate("cardinal-closed");
curveFunction = d3.svg.line()
             .x(function(d) { return d.x; })
             .y(function(d) { return d.y; })
             .interpolate("cardinal-open");
curvedPolyFunction = d3.svg.line()
             .x(function(d) { return d.x; })
             .y(function(d) { return d.y; })
             .interpolate("basis-closed");
lineFunction = d3.svg.line()
             .x(function(d) { return d.x; })
             .y(function(d) { return d.y; })
             .interpolate("linear-closed");
// https://github.com/wbkd/d3-extended
d3.selection.prototype.moveToFront = function() {  
  return this.each(function(){
	this.parentNode.appendChild(this);
  });
};
d3.selection.prototype.moveToBack = function() {  
	return this.each(function() { 
		var firstChild = this.parentNode.firstChild; 
		if (firstChild) { 
			this.parentNode.insertBefore(this, firstChild); 
		} 
	});
};
function Icon (type,x,y) {
	function answerYPos() {
		var temp = (x%Math.ceil(pat.nAnswers/2))*h/3
							+h/(3*2);
		return temp;
	}
	function answerXPos() {
		var temp = w-iconSizeX/2;
		if (x < pat.nAnswers/2) {
			temp = w-iconSizeX/2-iconSizeX;
		}
		return temp;
	}
	switch (type) {
		case 0:
			// grid
			shape(
				x*aw/maxG+aw/(maxG*2),
				y*ah/maxG+ah/(maxG*2),
				x,y,false, "")
			break;	
		case 1:
			// correct
			gx = pat.v[0];
			gy = pat.v[1];
			if (mouseOrder[currentSet] < 2) {
				shape(
					answerXPos(),
					answerYPos(),
					gx,gy,false, "na")
			} 
			if (mouseOrder[currentSet] == 2) {
				var answer = svg.append("image")
								.attr("xlink:href",pathPrefix+"/img/corvus/images.png")
								.attr("x", answerXPos()-cx)
								.attr("y", answerYPos()-cy)
								.attr("width", cx*2)
								.attr("height", cy*2)
								.attr("id", "missingOptionA")
			}
			var clickRectangle = svg.append("rect")
									.style("opacity", 0)
									.attr("x", answerXPos()-(pat.radii[0]+annulusWidth)*pat.VV.scale)
									.attr("y", answerYPos()-(pat.radii[0]+annulusWidth)*pat.VV.scale)
									.attr("width", (pat.radii[0]+annulusWidth)*2*pat.grid[gx][gy].scale)
									.attr("height", (pat.radii[0]+annulusWidth)*2*pat.grid[gx][gy].scale)
									.on("mouseenter", function() {
										var dMouseOver = new Date();
										var mtOutput =[dMouseOver.getTime(),x,type];
										console.log(mtOutput);
										questionsAsked[5][questionsAsked[5].length-1][0].push(mtOutput);
										if (timer && mouseOrder[currentSet] != 1) {
											d3.selectAll("#missingElement").remove();
											shape(
												pat.v[0]*aw/maxG+aw/(maxG*2),
												pat.v[1]*ah/maxG+ah/(maxG*2),
												gx,gy,true,"answer");
											if (mouseOrder[currentSet] == 2) {
												d3.selectAll("#missingOptionA").remove();
												shape(
													answerXPos(),
													answerYPos(),
													gx,gy,true, "optionAnswer")
											}
										}
										d3.select(this).moveToFront();
									})
									.on("mouseleave", function() {
										var dMouseOut = new Date();
										var mtOutput =[dMouseOut.getTime(),x,type];
										questionsAsked[5][questionsAsked[5].length-1][1].push(mtOutput);
										d3.selectAll("#shapeV").remove();
										d3.selectAll("#answer").remove();
										if (mouseOrder[currentSet] == 2) {
											console.log("2")
											d3.select("svg").selectAll("#optionAnswer").remove();
										}
										var answer = svg.append("image")
														.attr("xlink:href",pathPrefix+"/img/corvus/images.png")
														.attr("x", pat.v[0]*aw/maxG+aw/(maxG*2)-cx)
														.attr("y", pat.v[1]*ah/maxG+ah/(maxG*2)-cx)
														.attr("width", cx*2)
														.attr("height", cy*2)
														.attr("id", "missingElement");
										if (mouseOrder[currentSet] == 2) {										
											var answer = svg.append("image")
															.attr("xlink:href",pathPrefix+"/img/corvus/images.png")
															.attr("x", answerXPos()-cx)
															.attr("y", answerYPos()-cy)
															.attr("width", cx*2)
															.attr("height", cy*2)
															.attr("id", "missingOptionA")
										}
										d3.select(this).moveToFront();
									})
									.on("click", function() {
										if (timer) {
											timer = false;
											setTimeout(function(){timer = true;},500);
											//$.cookie("correct", parseInt($.cookie("correct"))+1, { path: '/' });
											d3.select("#myCanvas").remove();
											d3.select("#myQuestions").remove();
											d3.select("#skipText").remove();
											var dAnswered = new Date();
											questionsAsked[2].push(dAnswered.getTime());
											questionsAsked[3].push(1);
											questionsAsked[4].push(x);
											if (TESTTYPE == "random") {
												Math.seedrandom(""+dAnswered.getTime());
											}
											main();
										}
									});
			break;	
		default:
			// wrong
			var T = type - 2;
			//addToIconProperties(x,gy,x);
			if (mouseOrder[currentSet] < 2) {
				answerShape(
					answerXPos(),
					answerYPos(),
					T,false,"na");
			} 
			if (mouseOrder[currentSet] == 2) {
				var answer = svg.append("image")
								.attr("xlink:href",pathPrefix+"/img/corvus/images.png")
								.attr("x", answerXPos()-cx)
								.attr("y", answerYPos()-cy)
								.attr("width", cx*2)
								.attr("height", cy*2)
								.attr("id", "missingOption"+x+""+y)
			}
			var clickRectangle = svg.append("rect")
									.style("opacity", 0)
									.attr("x", answerXPos()-(pat.radii[0]+annulusWidth)*pat.answers[T].scale)
									.attr("y", answerYPos()-(pat.radii[0]+annulusWidth)*pat.answers[T].scale)
									.attr("width", (pat.radii[0]+annulusWidth)*2*pat.answers[T].scale)
									.attr("height", (pat.radii[0]+annulusWidth)*2*pat.answers[T].scale)
									.on("mouseenter", function() {
										var dMouseOver = new Date();
										var mtOutput = [dMouseOver.getTime(),x,type];
										console.log(mtOutput);
										questionsAsked[5][questionsAsked[5].length-1][0].push(mtOutput);
										if (timer && mouseOrder[currentSet] != 1) {
											d3.selectAll("#missingElement").remove();
											answerShape(
												pat.v[0]*aw/maxG+aw/(maxG*2),
												pat.v[1]*ah/maxG+ah/(maxG*2),
												T,true,"shapeV");
											if (mouseOrder[currentSet] == 2) {	
												d3.selectAll("#missingOption"+x+""+y).remove();							
												answerShape(
													answerXPos(),
													answerYPos(),
													T,true,"optionShapeV");
											}
										} 
       									d3.select(this).moveToFront();
									})
									.on("mouseleave", function() {
										var dMouseOut = new Date();
										var mtOutput =[dMouseOut.getTime(),x,type];
										//console.log(questionsAsked[1].length);
										questionsAsked[5][questionsAsked[5].length-1][1].push(mtOutput);
										d3.selectAll("#shapeV").remove();
										d3.selectAll("#answer").remove();
										if (mouseOrder[currentSet] == 2) {
											console.log("2")
											d3.select("svg").selectAll("#optionShapeV").remove();
										}
										var answer = svg.append("image")
														.attr("xlink:href",pathPrefix+"/img/corvus/images.png")
														.attr("x", pat.v[0]*aw/maxG+aw/(maxG*2)-cx)
														.attr("y", pat.v[1]*ah/maxG+ah/(maxG*2)-cx)
														.attr("width", cx*2)
														.attr("height", cy*2)
														.attr("id", "missingElement");
										if (mouseOrder[currentSet] == 2) {										
											var answer = svg.append("image")
															.attr("xlink:href",pathPrefix+"/img/corvus/images.png")
															.attr("x", answerXPos()-cx)
															.attr("y", answerYPos()-cy)
															.attr("width", cx*2)
															.attr("height", cy*2)
															.attr("id", "missingOption"+x+""+y)
										}
										 d3.select(this).moveToFront();
									})
									.on("click", function() {
										if (timer) {
											timer = false;
											setTimeout(function(){timer = true;},500);
											d3.select("#myCanvas").remove();
											d3.select("#myQuestions").remove();
											d3.select("#skipText").remove();
											var dAnswered = new Date();
											questionsAsked[2].push(dAnswered.getTime());
											questionsAsked[3].push(0);
											questionsAsked[4].push(x);
											seed(dAnswered);
											main();
										}
									});
			break;	
	}
}
function skipButton (xloc,yloc) {
	// N.B. Positioning of text is altered to accomodate text size manually. 
	// This is not ideal, but the so-far attempted automatic methods are unsatisfactory.
	var skipText = svg
					.append("text")
					.attr("x", xloc-146/2)
					.attr("y", yloc+20)
					.text("Skip this question")
					.attr("font", "ariel")
					.attr("font-size", "20px")
					.attr("fill","blue")
					.attr("class","svgtxt")
					.attr("id", "skipText")
					.on("click", function() {
						d3.select("#myCanvas").remove();
						d3.select("#myQuestions").remove();
						d3.select("#skipText").remove();
						setTimeout(function(){timer = true;},500);
						d3.select("#myCanvas").remove();
						d3.select("#myQuestions").remove();
						var dAnswered = new Date();
						questionsAsked[2].push(dAnswered.getTime());
						questionsAsked[3].push(0);
						questionsAsked[4].push(-1);
						seed(dAnswered);
						main();
					});
}//06-dice.js:
//
//
// 06-dice.js
//
//
// Draw 'dice sides' from 1-9
//
function dice(centx,centy,x,y,removable,name) {
	//var data = [];
	var scale = pat.grid[x][y].scale;
	var n = pat.noAnnuli-1;
	var a = (pat.grid[x][y].a[n].rotation+pat.rotOffset)*2*Math.PI+Math.PI/4;
	var LW = (lineThickness)*(pat.radii[pat.grid[x][y].a[n].lineWidth]+30)/10*scale/4;
	var r = pat.radii[pat.noAnnuli-1]*pat.grid[x][y].scale-LW*2;
	var num = pat.grid[x][y].diceNum;
	if (num < 0) {
		var fillShade = pat.availableColours[2];
		var strokeShade = pat.chooseStrokeColour(pat.grid[x][y].a[n].shade,fillShade);
	} else {
		var fillShade = pat.availableColours[0];
		var strokeShade = pat.chooseStrokeColour(pat.grid[x][y].a[n].shade,fillShade);
	}
	var rad = r/8+LW/2;
	var longerDiceRad = r*Math.SQRT1_2;
	var shorterDiceRad = r/2;
	switch(num) {
		case 9:
		case -9:
			if (removable) {
				var drawAnnuli = svg.append("circle")
					  				.attr("cx", centx)
					  				.attr("cy", centy)
					  				.attr("r", rad)
									.attr("stroke", strokeShade)
									.attr("fill", fillShade)
									.attr("stroke-width", LW)
									.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
									.attr("id", name);
			} else {
				var drawAnnuli = svg.append("circle")
					  				.attr("cx", centx)
					  				.attr("cy", centy)
					  				.attr("r", rad)
									.attr("stroke", strokeShade)
									.attr("fill", fillShade)
									.attr("stroke-width", LW)
									.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray);
			}
		case 8:
		case -8:
			for (var k = -1; k < 2; k+=2) {
				if (removable) {
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+longerDiceRad*Math.sin(a+Math.PI*(k+1)/2))
										.attr("cy", centy-longerDiceRad*Math.cos(a+Math.PI*(k+1)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
										.attr("id", name);
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+longerDiceRad*Math.sin(a+Math.PI*(k+2)/2))
										.attr("cy", centy-longerDiceRad*Math.cos(a+Math.PI*(k+2)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
										.attr("id", name);
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+shorterDiceRad*Math.sin(a+Math.PI*(k+1/2)/2))
										.attr("cy", centy-shorterDiceRad*Math.cos(a+Math.PI*(k+1/2)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
										.attr("id", name);
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+shorterDiceRad*Math.sin(a+Math.PI*(k+3/2)/2))
										.attr("cy", centy-shorterDiceRad*Math.cos(a+Math.PI*(k+3/2)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
										.attr("id", name);
				} else {
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+longerDiceRad*Math.sin(a+Math.PI*(k+1)/2))
										.attr("cy", centy-longerDiceRad*Math.cos(a+Math.PI*(k+1)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray);
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+longerDiceRad*Math.sin(a+Math.PI*(k+2)/2))
										.attr("cy", centy-longerDiceRad*Math.cos(a+Math.PI*(k+2)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray);
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+shorterDiceRad*Math.sin(a+Math.PI*(k+1/2)/2))
										.attr("cy", centy-shorterDiceRad*Math.cos(a+Math.PI*(k+1/2)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray);
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+shorterDiceRad*Math.sin(a+Math.PI*(k+3/2)/2))
										.attr("cy", centy-shorterDiceRad*Math.cos(a+Math.PI*(k+3/2)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray);
				}
			}
			break;
		case 7:
		case -7:
			if (removable) {
				var drawAnnuli = svg.append("circle")
					  				.attr("cx", centx)
					  				.attr("cy", centy)
					  				.attr("r", rad)
									.attr("stroke", strokeShade)
									.attr("fill", fillShade)
									.attr("stroke-width", LW)
									.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
									.attr("id", name);
			} else {
				var drawAnnuli = svg.append("circle")
					  				.attr("cx", centx)
					  				.attr("cy", centy)
					  				.attr("r", rad)
									.attr("stroke", strokeShade)
									.attr("fill", fillShade)
									.attr("stroke-width", LW)
									.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray);
			}
		case 6:
		case -6:
			for (var k = -1; k < 2; k+=2) {
				if (removable) {
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+longerDiceRad*Math.sin(a+Math.PI*(k+1)/2))
										.attr("cy", centy-longerDiceRad*Math.cos(a+Math.PI*(k+1)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
										.attr("id", name);
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+longerDiceRad*Math.sin(a+Math.PI*(k+2)/2))
										.attr("cy", centy-longerDiceRad*Math.cos(a+Math.PI*(k+2)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
										.attr("id", name);
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+shorterDiceRad*Math.sin(a+Math.PI*(k+3/2)/2))
										.attr("cy", centy-shorterDiceRad*Math.cos(a+Math.PI*(k+3/2)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
										.attr("id", name);
				} else {
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+longerDiceRad*Math.sin(a+Math.PI*(k+1)/2))
										.attr("cy", centy-longerDiceRad*Math.cos(a+Math.PI*(k+1)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray);
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+longerDiceRad*Math.sin(a+Math.PI*(k+2)/2))
										.attr("cy", centy-longerDiceRad*Math.cos(a+Math.PI*(k+2)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray);
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+shorterDiceRad*Math.sin(a+Math.PI*(k+3/2)/2))
										.attr("cy", centy-shorterDiceRad*Math.cos(a+Math.PI*(k+3/2)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray);
				}
			}
			break;
		case 5:
		case -5:
			if (removable) {
				var drawAnnuli = svg.append("circle")
					  				.attr("cx", centx)
					  				.attr("cy", centy)
					  				.attr("r", rad)
									.attr("stroke", strokeShade)
									.attr("fill", fillShade)
									.attr("stroke-width", LW)
									.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
									.attr("id", name);
			} else {
				var drawAnnuli = svg.append("circle")
					  				.attr("cx", centx)
					  				.attr("cy", centy)
					  				.attr("r", rad)
									.attr("stroke", strokeShade)
									.attr("fill", fillShade)
									.attr("stroke-width", LW)
									.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray);
			}
		case 4:
		case -4:
			for (var k = -1; k < 2; k+=2) {
				if (removable) {
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+longerDiceRad*Math.sin(a+Math.PI*(k+1)/2))
										.attr("cy", centy-longerDiceRad*Math.cos(a+Math.PI*(k+1)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
										.attr("id", name);
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+longerDiceRad*Math.sin(a+Math.PI*(k+2)/2))
										.attr("cy", centy-longerDiceRad*Math.cos(a+Math.PI*(k+2)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
										.attr("id", name);
				} else {
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+longerDiceRad*Math.sin(a+Math.PI*(k+1)/2))
										.attr("cy", centy-longerDiceRad*Math.cos(a+Math.PI*(k+1)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray);
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+longerDiceRad*Math.sin(a+Math.PI*(k+2)/2))
										.attr("cy", centy-longerDiceRad*Math.cos(a+Math.PI*(k+2)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray);
				}
			}
			break;
		case 3:
		case -3:
			if (removable) {
				var drawAnnuli = svg.append("circle")
					  				.attr("cx", centx)
					  				.attr("cy", centy)
					  				.attr("r", rad)
									.attr("stroke", strokeShade)
									.attr("fill", fillShade)
									.attr("stroke-width", LW)
									.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
									.attr("id", name);
			} else {
				var drawAnnuli = svg.append("circle")
					  				.attr("cx", centx)
					  				.attr("cy", centy)
					  				.attr("r", rad)
									.attr("stroke", strokeShade)
									.attr("fill", fillShade)
									.attr("stroke-width", LW)
									.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray);
			}
		case 2:
		case -2:
			for (var k = -1; k < 2; k+=2) {
				if (removable) {
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+longerDiceRad*Math.sin(a+Math.PI*(k+2)/2))
										.attr("cy", centy-longerDiceRad*Math.cos(a+Math.PI*(k+2)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
										.attr("id", name);
				} else {
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+longerDiceRad*Math.sin(a+Math.PI*(k+2)/2))
										.attr("cy", centy-longerDiceRad*Math.cos(a+Math.PI*(k+2)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray);
				}
			}
			break;
		case 1:
		case -1:
			if (removable) {
				var drawAnnuli = svg.append("circle")
					  				.attr("cx", centx)
					  				.attr("cy", centy)
					  				.attr("r", rad)
									.attr("stroke", strokeShade)
									.attr("fill", fillShade)
									.attr("stroke-width", LW)
									.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
									.attr("id", name);
			} else {
				var drawAnnuli = svg.append("circle")
					  				.attr("cx", centx)
					  				.attr("cy", centy)
					  				.attr("r", rad)
									.attr("stroke", strokeShade)
									.attr("fill", fillShade)
									.attr("stroke-width", LW)
									.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray);
			}
			break;
		case 0:
			break;
	}
}
function answerDice(centx,centy,x,removable,name) {
	//var data = [];
	var scale = pat.answers[x].scale;
	var n = pat.noAnnuli-1;
	var a = (pat.answers[x].a[n].rotation+pat.rotOffset)*2*Math.PI+Math.PI/4;
	var LW = (lineThickness)*(pat.radii[pat.answers[x].a[n].lineWidth]+30)/10*scale/4;
	var r = pat.radii[pat.noAnnuli-1]*pat.answers[x].scale-LW*2;
	var num = pat.answers[x].diceNum;
	if (num < 0) {
		var fillShade = pat.availableColours[2];
		var strokeShade = pat.chooseStrokeColour(pat.answers[x].a[n].shade,fillShade);
	} else {
		var fillShade = pat.availableColours[0];
		var strokeShade = pat.chooseStrokeColour(pat.answers[x].a[n].shade,fillShade);
	}
	var rad = r/8+LW/2;
	var longerDiceRad = r*Math.SQRT1_2;
	var shorterDiceRad = r/2;
	switch(num) {
		case 9:
		case -9:
			if (removable) {
				var drawAnnuli = svg.append("circle")
					  				.attr("cx", centx)
					  				.attr("cy", centy)
					  				.attr("r", rad)
									.attr("stroke", strokeShade)
									.attr("fill", fillShade)
									.attr("stroke-width", LW)
									.style("stroke-dasharray", pat.answers[x].a[n].dasharray)
									.attr("id", name);
			} else {
				var drawAnnuli = svg.append("circle")
					  				.attr("cx", centx)
					  				.attr("cy", centy)
					  				.attr("r", rad)
									.attr("stroke", strokeShade)
									.attr("fill", fillShade)
									.attr("stroke-width", LW)
									.style("stroke-dasharray", pat.answers[x].a[n].dasharray);
			}
		case 8:
		case -8:
			for (var k = -1; k < 2; k+=2) {
				if (removable) {
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+longerDiceRad*Math.sin(a+Math.PI*(k+1)/2))
										.attr("cy", centy-longerDiceRad*Math.cos(a+Math.PI*(k+1)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.answers[x].a[n].dasharray)
										.attr("id", name);
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+longerDiceRad*Math.sin(a+Math.PI*(k+2)/2))
										.attr("cy", centy-longerDiceRad*Math.cos(a+Math.PI*(k+2)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.answers[x].a[n].dasharray)
										.attr("id", name);
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+shorterDiceRad*Math.sin(a+Math.PI*(k+1/2)/2))
										.attr("cy", centy-shorterDiceRad*Math.cos(a+Math.PI*(k+1/2)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.answers[x].a[n].dasharray)
										.attr("id", name);
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+shorterDiceRad*Math.sin(a+Math.PI*(k+3/2)/2))
										.attr("cy", centy-shorterDiceRad*Math.cos(a+Math.PI*(k+3/2)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.answers[x].a[n].dasharray)
										.attr("id", name);
				} else {
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+longerDiceRad*Math.sin(a+Math.PI*(k+1)/2))
										.attr("cy", centy-longerDiceRad*Math.cos(a+Math.PI*(k+1)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.answers[x].a[n].dasharray);
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+longerDiceRad*Math.sin(a+Math.PI*(k+2)/2))
										.attr("cy", centy-longerDiceRad*Math.cos(a+Math.PI*(k+2)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.answers[x].a[n].dasharray);
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+shorterDiceRad*Math.sin(a+Math.PI*(k+1/2)/2))
										.attr("cy", centy-shorterDiceRad*Math.cos(a+Math.PI*(k+1/2)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.answers[x].a[n].dasharray);
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+shorterDiceRad*Math.sin(a+Math.PI*(k+3/2)/2))
										.attr("cy", centy-shorterDiceRad*Math.cos(a+Math.PI*(k+3/2)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.answers[x].a[n].dasharray);
				}
			}
			break;
		case 7:
		case -7:
			if (removable) {
				var drawAnnuli = svg.append("circle")
					  				.attr("cx", centx)
					  				.attr("cy", centy)
					  				.attr("r", rad)
									.attr("stroke", strokeShade)
									.attr("fill", fillShade)
									.attr("stroke-width", LW)
									.style("stroke-dasharray", pat.answers[x].a[n].dasharray)
									.attr("id", name);
			} else {
				var drawAnnuli = svg.append("circle")
					  				.attr("cx", centx)
					  				.attr("cy", centy)
					  				.attr("r", rad)
									.attr("stroke", strokeShade)
									.attr("fill", fillShade)
									.attr("stroke-width", LW)
									.style("stroke-dasharray", pat.answers[x].a[n].dasharray);
			}
		case 6:
		case -6:
			for (var k = -1; k < 2; k+=2) {
				if (removable) {
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+longerDiceRad*Math.sin(a+Math.PI*(k+1)/2))
										.attr("cy", centy-longerDiceRad*Math.cos(a+Math.PI*(k+1)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.answers[x].a[n].dasharray)
										.attr("id", name);
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+longerDiceRad*Math.sin(a+Math.PI*(k+2)/2))
										.attr("cy", centy-longerDiceRad*Math.cos(a+Math.PI*(k+2)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.answers[x].a[n].dasharray)
										.attr("id", name);
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+shorterDiceRad*Math.sin(a+Math.PI*(k+3/2)/2))
										.attr("cy", centy-shorterDiceRad*Math.cos(a+Math.PI*(k+3/2)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.answers[x].a[n].dasharray)
										.attr("id", name);
				} else {
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+longerDiceRad*Math.sin(a+Math.PI*(k+1)/2))
										.attr("cy", centy-longerDiceRad*Math.cos(a+Math.PI*(k+1)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.answers[x].a[n].dasharray);
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+longerDiceRad*Math.sin(a+Math.PI*(k+2)/2))
										.attr("cy", centy-longerDiceRad*Math.cos(a+Math.PI*(k+2)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.answers[x].a[n].dasharray);
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+shorterDiceRad*Math.sin(a+Math.PI*(k+3/2)/2))
										.attr("cy", centy-shorterDiceRad*Math.cos(a+Math.PI*(k+3/2)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.answers[x].a[n].dasharray);
				}
			}
			break;
		case 5:
		case -5:
			if (removable) {
				var drawAnnuli = svg.append("circle")
					  				.attr("cx", centx)
					  				.attr("cy", centy)
					  				.attr("r", rad)
									.attr("stroke", strokeShade)
									.attr("fill", fillShade)
									.attr("stroke-width", LW)
									.style("stroke-dasharray", pat.answers[x].a[n].dasharray)
									.attr("id", name);
			} else {
				var drawAnnuli = svg.append("circle")
					  				.attr("cx", centx)
					  				.attr("cy", centy)
					  				.attr("r", rad)
									.attr("stroke", strokeShade)
									.attr("fill", fillShade)
									.attr("stroke-width", LW)
									.style("stroke-dasharray", pat.answers[x].a[n].dasharray);
			}
		case 4:
		case -4:
			for (var k = -1; k < 2; k+=2) {
				if (removable) {
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+longerDiceRad*Math.sin(a+Math.PI*(k+1)/2))
										.attr("cy", centy-longerDiceRad*Math.cos(a+Math.PI*(k+1)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.answers[x].a[n].dasharray)
										.attr("id", name);
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+longerDiceRad*Math.sin(a+Math.PI*(k+2)/2))
										.attr("cy", centy-longerDiceRad*Math.cos(a+Math.PI*(k+2)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.answers[x].a[n].dasharray)
										.attr("id", name);
				} else {
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+longerDiceRad*Math.sin(a+Math.PI*(k+1)/2))
										.attr("cy", centy-longerDiceRad*Math.cos(a+Math.PI*(k+1)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.answers[x].a[n].dasharray);
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+longerDiceRad*Math.sin(a+Math.PI*(k+2)/2))
										.attr("cy", centy-longerDiceRad*Math.cos(a+Math.PI*(k+2)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.answers[x].a[n].dasharray);
				}
			}
			break;
		case 3:
		case -3:
			if (removable) {
				var drawAnnuli = svg.append("circle")
					  				.attr("cx", centx)
					  				.attr("cy", centy)
					  				.attr("r", rad)
									.attr("stroke", strokeShade)
									.attr("fill", fillShade)
									.attr("stroke-width", LW)
									.style("stroke-dasharray", pat.answers[x].a[n].dasharray)
									.attr("id", name);
			} else {
				var drawAnnuli = svg.append("circle")
					  				.attr("cx", centx)
					  				.attr("cy", centy)
					  				.attr("r", rad)
									.attr("stroke", strokeShade)
									.attr("fill", fillShade)
									.attr("stroke-width", LW)
									.style("stroke-dasharray", pat.answers[x].a[n].dasharray);
			}
		case 2:
		case -2:
			for (var k = -1; k < 2; k+=2) {
				if (removable) {
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+longerDiceRad*Math.sin(a+Math.PI*(k+2)/2))
										.attr("cy", centy-longerDiceRad*Math.cos(a+Math.PI*(k+2)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.answers[x].a[n].dasharray)
										.attr("id", name);
				} else {
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+longerDiceRad*Math.sin(a+Math.PI*(k+2)/2))
										.attr("cy", centy-longerDiceRad*Math.cos(a+Math.PI*(k+2)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.answers[x].a[n].dasharray);
				}
			}
			break;
		case 1:
		case -1:
			if (removable) {
				var drawAnnuli = svg.append("circle")
					  				.attr("cx", centx)
					  				.attr("cy", centy)
					  				.attr("r", rad)
									.attr("stroke", strokeShade)
									.attr("fill", fillShade)
									.attr("stroke-width", LW)
									.style("stroke-dasharray", pat.answers[x].a[n].dasharray)
									.attr("id", name);
			} else {
				var drawAnnuli = svg.append("circle")
					  				.attr("cx", centx)
					  				.attr("cy", centy)
					  				.attr("r", rad)
									.attr("stroke", strokeShade)
									.attr("fill", fillShade)
									.attr("stroke-width", LW)
									.style("stroke-dasharray", pat.answers[x].a[n].dasharray);
			}
			break;
		case 0:
			break;
	}
}           //07-petals.js:
//
//
// 07-petals.js
//
//
//
function starPetal(centx,centy,x,y,removable,name) {
	var dataSL = [];
	var scale = pat.grid[x][y].scale;
	var n = pat.noAnnuli-1;
	var a = -(pat.grid[x][y].a[n].rotation+pat.rotOffset)*2*Math.PI;
	var LW = (lineThickness)*(pat.radii[pat.grid[x][y].a[n].lineWidth]+30)/10*scale/4;
	var r = pat.radii[pat.noAnnuli-1]*pat.grid[x][y].scale-LW*2;
	var num = pat.grid[x][y].diceNum;
	var vertices = [];
	for (var j = 0; j < Math.abs(num);j++) {
		vertices.push(j/Math.abs(num));
	}
	//console.log(num+" v: "+vertices);
	if (num < 0) {
		var fillShade = pat.availableColours[2];
		var strokeShade = pat.chooseStrokeColour(pat.grid[x][y].a[n].shade,fillShade);
	} else {
		var fillShade = pat.availableColours[0];
		var strokeShade = pat.chooseStrokeColour(pat.grid[x][y].a[n].shade,fillShade);
	}
	//
	dataASL = [];
	for (var i = 0; i < vertices.length; i++) {
		dataASL[i] = [];
		dataASL[i].push({"x":centx,"y":centy})
		dataASL[i].push({"x":centx+r/8*Math.sin(a+vertices[i]*2*Math.PI-Math.PI/8),"y":centy+r/8*Math.cos(a+vertices[i]*2*Math.PI-Math.PI/8)})
		dataASL[i].push({"x":centx+r/2*Math.sin(a+vertices[i]*2*Math.PI-Math.PI/20),"y":centy+r/2*Math.cos(a+vertices[i]*2*Math.PI-Math.PI/20)})
		dataASL[i].push({"x":centx+r*Math.sin(a+vertices[i]*2*Math.PI),"y":centy+r*Math.cos(a+vertices[i]*2*Math.PI)})
		dataASL[i].push({"x":centx+r/2*Math.sin(a+vertices[i]*2*Math.PI+Math.PI/20),"y":centy+r/2*Math.cos(a+vertices[i]*2*Math.PI+Math.PI/20)})
		dataASL[i].push({"x":centx+r/8*Math.sin(a+vertices[i]*2*Math.PI+Math.PI/8),"y":centy+r/8*Math.cos(a+vertices[i]*2*Math.PI+Math.PI/8)})
		dataASL[i].push({"x":centx,"y":centy})
	}
	//for (var nV = 0; nV < num%vertices.length; nV++) {
	//	dataASL.splice(nV,1);
	//}
    //console.log(dataASL);
		for (var j = 0; j < dataASL.length; j++) {
				if (removable) {
					var drawAnnuli = svg.append("path")
									.attr("d", polyFunction(dataASL[j]))
									.attr("stroke", strokeShade)
									.attr("fill", fillShade)
									.attr("stroke-width", LW)
									.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
									.attr("id", name);
				} else {
					var drawAnnuli = svg.append("path")
									.attr("d", polyFunction(dataASL[j]))
									.attr("stroke", strokeShade)
									.attr("fill", fillShade)
									.attr("stroke-width", LW)
									.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray);
				}
		}
	/* switch(num) {
		case 4:
		case -4:
			for (var k = -1; k < 2; k+=2) {
				if (removable) {
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+longerDiceRad*Math.sin(a+Math.PI*(k+1)/2))
										.attr("cy", centy-longerDiceRad*Math.cos(a+Math.PI*(k+1)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
										.attr("id", name);
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+longerDiceRad*Math.sin(a+Math.PI*(k+2)/2))
										.attr("cy", centy-longerDiceRad*Math.cos(a+Math.PI*(k+2)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
										.attr("id", name);
				} else {
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+longerDiceRad*Math.sin(a+Math.PI*(k+1)/2))
										.attr("cy", centy-longerDiceRad*Math.cos(a+Math.PI*(k+1)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray);
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+longerDiceRad*Math.sin(a+Math.PI*(k+2)/2))
										.attr("cy", centy-longerDiceRad*Math.cos(a+Math.PI*(k+2)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray);
				}
			}
			break;
		case 3:
		case -3:
			if (removable) {
				var drawAnnuli = svg.append("circle")
					  				.attr("cx", centx)
					  				.attr("cy", centy)
					  				.attr("r", rad)
									.attr("stroke", strokeShade)
									.attr("fill", fillShade)
									.attr("stroke-width", LW)
									.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
									.attr("id", name);
			} else {
				var drawAnnuli = svg.append("circle")
					  				.attr("cx", centx)
					  				.attr("cy", centy)
					  				.attr("r", rad)
									.attr("stroke", strokeShade)
									.attr("fill", fillShade)
									.attr("stroke-width", LW)
									.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray);
			}
		case 2:
		case -2:
			for (var k = -1; k < 2; k+=2) {
				if (removable) {
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+longerDiceRad*Math.sin(a+Math.PI*(k+2)/2))
										.attr("cy", centy-longerDiceRad*Math.cos(a+Math.PI*(k+2)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
										.attr("id", name);
				} else {
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+longerDiceRad*Math.sin(a+Math.PI*(k+2)/2))
										.attr("cy", centy-longerDiceRad*Math.cos(a+Math.PI*(k+2)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray);
				}
			}
			break;
		case 1:
		case -1:
			if (removable) {
				var drawAnnuli = svg.append("circle")
					  				.attr("cx", centx)
					  				.attr("cy", centy)
					  				.attr("r", rad)
									.attr("stroke", strokeShade)
									.attr("fill", fillShade)
									.attr("stroke-width", LW)
									.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
									.attr("id", name);
			} else {
				var drawAnnuli = svg.append("circle")
					  				.attr("cx", centx)
					  				.attr("cy", centy)
					  				.attr("r", rad)
									.attr("stroke", strokeShade)
									.attr("fill", fillShade)
									.attr("stroke-width", LW)
									.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray);
			}
			break;
		case 0:
			break;
	}*/
}
function answerStarPetal(centx,centy,x,removable,name) {
	var dataSL = [];
	var scale = pat.answers[x].scale;
	var n = pat.noAnnuli-1;
	var a = -(pat.answers[x].a[n].rotation+pat.rotOffset)*2*Math.PI;
	var LW = (lineThickness)*(pat.radii[pat.answers[x].a[n].lineWidth]+30)/10*scale/4;
	var r = pat.radii[pat.noAnnuli-1]*pat.answers[x].scale-LW*2;
	var num = pat.answers[x].diceNum;
	// - change this!
	var vertices = [];
	for (var j = 0; j < Math.abs(num);j++) {
		vertices.push(j/Math.abs(num));
	}
	//
	if (num < 0) {
		var fillShade = pat.availableColours[2];
		var strokeShade = pat.chooseStrokeColour(pat.answers[x].a[n].shade,fillShade);
	} else {
		var fillShade = pat.availableColours[0];
		var strokeShade = pat.chooseStrokeColour(pat.answers[x].a[n].shade,fillShade);
	}
	//
	dataASL = [];
	for (var i = 0; i < vertices.length; i++) {
		dataASL[i] = [];
		dataASL[i].push({"x":centx,"y":centy})
		dataASL[i].push({"x":centx+r/8*Math.sin(a+vertices[i]*2*Math.PI-Math.PI/8),"y":centy+r/8*Math.cos(a+vertices[i]*2*Math.PI-Math.PI/8)})
		dataASL[i].push({"x":centx+r/2*Math.sin(a+vertices[i]*2*Math.PI-Math.PI/20),"y":centy+r/2*Math.cos(a+vertices[i]*2*Math.PI-Math.PI/20)})
		dataASL[i].push({"x":centx+r*Math.sin(a+vertices[i]*2*Math.PI),"y":centy+r*Math.cos(a+vertices[i]*2*Math.PI)})
		dataASL[i].push({"x":centx+r/2*Math.sin(a+vertices[i]*2*Math.PI+Math.PI/20),"y":centy+r/2*Math.cos(a+vertices[i]*2*Math.PI+Math.PI/20)})
		dataASL[i].push({"x":centx+r/8*Math.sin(a+vertices[i]*2*Math.PI+Math.PI/8),"y":centy+r/8*Math.cos(a+vertices[i]*2*Math.PI+Math.PI/8)})
		dataASL[i].push({"x":centx,"y":centy})
	}
	//for (var nV = 0; nV < num%vertices.length; nV++) {
	//	dataASL.splice(nV,1);
	//}
    //console.log(dataASL);
		for (var j = 0; j < dataASL.length; j++) {
				if (removable) {
					var drawAnnuli = svg.append("path")
									.attr("d", polyFunction(dataASL[j]))
									.attr("stroke", strokeShade)
									.attr("fill", fillShade)
									.attr("stroke-width", LW)
									.style("stroke-dasharray", pat.answers[x].a[n].dasharray)
									.attr("id", name);
				} else {
					var drawAnnuli = svg.append("path")
									.attr("d", polyFunction(dataASL[j]))
									.attr("stroke", strokeShade)
									.attr("fill", fillShade)
									.attr("stroke-width", LW)
									.style("stroke-dasharray", pat.answers[x].a[n].dasharray);
				}
		}
}            //08-spikeRings.js:
//
//
// 08-spikeRings.js
//
//
//
// Draws a ring of triangles alternately pointing inwards and outwards
// Triangles can be paired by direction...
function spikeRings(centx,centy,x,y,removable,name) {
	var dataSL = [];
	var scale = pat.grid[x][y].scale;
	var n = pat.noAnnuli-1;
	var num = pat.grid[x][y].diceNum;
	var posNum = Math.abs(num);
	var a = -(pat.grid[x][y].a[n].rotation+pat.rotOffset)*2*Math.PI;
	var LW = (lineThickness)*(pat.radii[pat.grid[x][y].a[n].lineWidth]+30)/10*scale/4;
	var r = pat.radii[pat.noAnnuli-1]*pat.grid[x][y].scale-LW*2;
	var tempMultiplier = (17+3*posNum)/(18+2*posNum);
	var innerR = r/tempMultiplier;
	var ytoInnerChord = innerR*Math.cos(Math.PI/posNum-Math.PI/20);
	//console.log(tempMultiplier);
	var vertices = [];
	for (var j = 0; j < posNum;j++) {
		vertices.push(j/posNum);
	}
	//
	if (num < 0) {
		var fillShade = pat.availableColours[2];
		var strokeShade = pat.chooseStrokeColour(pat.grid[x][y].a[n].shade,fillShade);
	} else {
		var fillShade = pat.availableColours[0];
		var strokeShade = pat.chooseStrokeColour(pat.grid[x][y].a[n].shade,fillShade);
	}
	//
	dataASL = [];
	dataASL2 = [];
	if (posNum > 2) {
		for (var i = 0; i < vertices.length; i++) {
			dataASL[i] = [];
			dataASL[i].push({"x":centx+r/1.5*Math.sin(vertices[i]*2*Math.PI-Math.PI/20),"y":centy+r/1.5*Math.cos(vertices[i]*2*Math.PI-Math.PI/20)})
			dataASL[i].push({"x":centx+r*Math.sin(vertices[i]*2*Math.PI),"y":centy+r*Math.cos(vertices[i]*2*Math.PI)})
			dataASL[i].push({"x":centx+r/1.5*Math.sin(vertices[i]*2*Math.PI+Math.PI/20),"y":centy+r/1.5*Math.cos(vertices[i]*2*Math.PI+Math.PI/20)})
		}
		for (var i = 0; i < vertices.length; i++) {
			dataASL2[i] = [];
			dataASL2[i].push({"x":centx+innerR*Math.sin(vertices[i]*2*Math.PI+Math.PI/20),"y":centy+innerR*Math.cos(vertices[i]*2*Math.PI+Math.PI/20)})
			dataASL2[i].push({"x":centx+0.5*(innerR+ytoInnerChord+8)*Math.sin(vertices[i]*2*Math.PI+Math.PI*2/vertices.length/2),"y":centy+0.5*(innerR+ytoInnerChord+8)*Math.cos(vertices[i]*2*Math.PI+Math.PI*2/vertices.length/2)})
			dataASL2[i].push({"x":centx+innerR*Math.sin(vertices[i]*2*Math.PI-Math.PI/20+Math.PI*2/vertices.length),"y":centy+innerR*Math.cos(vertices[i]*2*Math.PI-Math.PI/20+Math.PI*2/vertices.length)})
			dataASL2[i].push({"x":centx+0.5*(3*ytoInnerChord-innerR-8)/tempMultiplier*Math.sin(vertices[i]*2*Math.PI+Math.PI*2/vertices.length/2),"y":centy+0.5*(3*ytoInnerChord-innerR-8)/tempMultiplier*Math.cos(vertices[i]*2*Math.PI+Math.PI*2/vertices.length/2)})
		}
	} else if (posNum == 2) {
		for (var i = 0; i < vertices.length; i++) {
			dataASL[i] = [];
			dataASL[i].push({"x":centx+r/1.5*Math.sin(vertices[i]*2*Math.PI-Math.PI/20),"y":centy+r/1.5*Math.cos(vertices[i]*2*Math.PI-Math.PI/20)})
			dataASL[i].push({"x":centx+r*Math.sin(vertices[i]*2*Math.PI),"y":centy+r*Math.cos(vertices[i]*2*Math.PI)})
			dataASL[i].push({"x":centx+r/1.5*Math.sin(vertices[i]*2*Math.PI+Math.PI/20),"y":centy+r/1.5*Math.cos(vertices[i]*2*Math.PI+Math.PI/20)})
		}
		for (var i = 0; i < vertices.length; i++) {
			dataASL2[i] = [];
			dataASL2[i].push({"x":centx+r/(tempMultiplier)*Math.sin(vertices[i]*2*Math.PI+Math.PI/10),"y":centy+r/(tempMultiplier)*Math.cos(vertices[i]*2*Math.PI+Math.PI/10)})
			dataASL2[i].push({"x":centx+(30)/(tempMultiplier)*Math.sin(vertices[i]*2*Math.PI+Math.PI*2/vertices.length/2),"y":centy+(30)/(tempMultiplier)*Math.cos(vertices[i]*2*Math.PI+Math.PI*2/vertices.length/2)})
			dataASL2[i].push({"x":centx+r/(tempMultiplier)*Math.sin(vertices[i]*2*Math.PI-Math.PI/10+Math.PI*2/vertices.length),"y":centy+r/(tempMultiplier)*Math.cos(vertices[i]*2*Math.PI-Math.PI/10+Math.PI*2/vertices.length)})
			dataASL2[i].push({"x":centx+(10)/(tempMultiplier)*Math.sin(vertices[i]*2*Math.PI+Math.PI*2/vertices.length/2),"y":centy+(10)/(tempMultiplier)*Math.cos(vertices[i]*2*Math.PI+Math.PI*2/vertices.length/2)})
		}
	} else if (posNum == 1) {
		dataASL[0] = [];
		dataASL[0].push({"x":centx+r/1.5*Math.sin(Math.PI/20),"y":centy+r/1.5*Math.cos(Math.PI/20)})
		dataASL[0].push({"x":centx,"y":centy+r})
		dataASL[0].push({"x":centx+r/1.5*Math.sin(-Math.PI/20),"y":centy+r/1.5*Math.cos(-Math.PI/20)})
		dataASL2[0] = [];
		dataASL2[0].push({"x":centx+(r/2)*Math.sin(Math.PI/5),"y":centy+r/2})
		dataASL2[0].push({"x":centx,"y":centy+7*r/12})
		dataASL2[0].push({"x":centx+(r/2)*Math.sin(-Math.PI/5),"y":centy+r/2})
		dataASL2[0].push({"x":centx,"y":centy+r/3})
	}
	//for (var nV = 0; nV < num%vertices.length; nV++) {
	//	dataASL.splice(nV,1);
	//}
    //console.log(dataASL);
	for (var k = 0; k < dataASL.length; k++) {
		if (removable) {
			var drawAnnuli = svg.append("path")
							.attr("d", lineFunction(dataASL[k]))
							.attr("stroke", strokeShade)
							.attr("fill", fillShade)
							.attr("stroke-width", LW)
							.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
							.attr("id", name)
							.attr("transform", "rotate("+(-a*180/Math.PI)+","+centx+","+centy+")");
			var drawAnnuli = svg.append("path")
							.attr("d", lineFunction(dataASL2[k]))
							.attr("stroke", strokeShade)
							.attr("fill", fillShade)
							.attr("stroke-width", LW)
							.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
							.attr("id", name)
							.attr("transform", "rotate("+(-a*180/Math.PI)+","+centx+","+centy+")");
		} else {
			var drawAnnuli = svg.append("path")
							.attr("d", lineFunction(dataASL[k]))
							.attr("stroke", strokeShade)
							.attr("fill", fillShade)
							.attr("stroke-width", LW)
							.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
							.attr("transform", "rotate("+(-a*180/Math.PI)+","+centx+","+centy+")");
			var drawAnnuli = svg.append("path")
							.attr("d", lineFunction(dataASL2[k]))
							.attr("stroke", strokeShade)
							.attr("fill", fillShade)
							.attr("stroke-width", LW)
							.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
							.attr("transform", "rotate("+(-a*180/Math.PI)+","+centx+","+centy+")");
		}
	}
	/* switch(num) {
		case 4:
		case -4:
			for (var k = -1; k < 2; k+=2) {
				if (removable) {
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+longerDiceRad*Math.sin(a+Math.PI*(k+1)/2))
										.attr("cy", centy-longerDiceRad*Math.cos(a+Math.PI*(k+1)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
										.attr("id", name);
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+longerDiceRad*Math.sin(a+Math.PI*(k+2)/2))
										.attr("cy", centy-longerDiceRad*Math.cos(a+Math.PI*(k+2)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
										.attr("id", name);
				} else {
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+longerDiceRad*Math.sin(a+Math.PI*(k+1)/2))
										.attr("cy", centy-longerDiceRad*Math.cos(a+Math.PI*(k+1)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray);
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+longerDiceRad*Math.sin(a+Math.PI*(k+2)/2))
										.attr("cy", centy-longerDiceRad*Math.cos(a+Math.PI*(k+2)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray);
				}
			}
			break;
		case 3:
		case -3:
			if (removable) {
				var drawAnnuli = svg.append("circle")
					  				.attr("cx", centx)
					  				.attr("cy", centy)
					  				.attr("r", rad)
									.attr("stroke", strokeShade)
									.attr("fill", fillShade)
									.attr("stroke-width", LW)
									.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
									.attr("id", name);
			} else {
				var drawAnnuli = svg.append("circle")
					  				.attr("cx", centx)
					  				.attr("cy", centy)
					  				.attr("r", rad)
									.attr("stroke", strokeShade)
									.attr("fill", fillShade)
									.attr("stroke-width", LW)
									.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray);
			}
		case 2:
		case -2:
			for (var k = -1; k < 2; k+=2) {
				if (removable) {
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+longerDiceRad*Math.sin(a+Math.PI*(k+2)/2))
										.attr("cy", centy-longerDiceRad*Math.cos(a+Math.PI*(k+2)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
										.attr("id", name);
				} else {
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+longerDiceRad*Math.sin(a+Math.PI*(k+2)/2))
										.attr("cy", centy-longerDiceRad*Math.cos(a+Math.PI*(k+2)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray);
				}
			}
			break;
		case 1:
		case -1:
			if (removable) {
				var drawAnnuli = svg.append("circle")
					  				.attr("cx", centx)
					  				.attr("cy", centy)
					  				.attr("r", rad)
									.attr("stroke", strokeShade)
									.attr("fill", fillShade)
									.attr("stroke-width", LW)
									.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
									.attr("id", name);
			} else {
				var drawAnnuli = svg.append("circle")
					  				.attr("cx", centx)
					  				.attr("cy", centy)
					  				.attr("r", rad)
									.attr("stroke", strokeShade)
									.attr("fill", fillShade)
									.attr("stroke-width", LW)
									.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray);
			}
			break;
		case 0:
			break;
	}*/
}
function answerSpikeRings(centx,centy,x,removable,name) {
	var dataSL = [];
	var scale = pat.answers[x].scale;
	var n = pat.noAnnuli-1;
	var num = pat.answers[x].diceNum;
	var posNum = Math.abs(num);
	var a = (pat.answers[x].a[n].rotation+pat.rotOffset)*2*Math.PI;
	var LW = (lineThickness)*(pat.radii[pat.answers[x].a[n].lineWidth]+30)/10*scale/4;
	var r = (pat.radii[pat.noAnnuli-1]*pat.answers[x].scale-LW*2);
	var tempMultiplier = (17+3*posNum)/(18+2*posNum);
	var innerR = r/tempMultiplier;
	var ytoInnerChord = innerR*Math.cos(Math.PI/posNum-Math.PI/20);
	// - change this!
	var vertices = [];
	for (var j = 0; j < Math.abs(num);j++) {
		vertices.push(j/Math.abs(num));
	}
	//
	if (num < 0) {
		var fillShade = pat.availableColours[2];
		var strokeShade = pat.chooseStrokeColour(pat.answers[x].a[n].shade,fillShade);
	} else {
		var fillShade = pat.availableColours[0];
		var strokeShade = pat.chooseStrokeColour(pat.answers[x].a[n].shade,fillShade);
	}
	//
	dataASL = [];
	dataASL2 = [];
	if (posNum > 2) {
		for (var i = 0; i < vertices.length; i++) {
			dataASL[i] = [];
			dataASL[i].push({"x":centx+r/1.5*Math.sin(vertices[i]*2*Math.PI-Math.PI/20),"y":centy+r/1.5*Math.cos(vertices[i]*2*Math.PI-Math.PI/20)})
			dataASL[i].push({"x":centx+r*Math.sin(vertices[i]*2*Math.PI),"y":centy+r*Math.cos(vertices[i]*2*Math.PI)})
			dataASL[i].push({"x":centx+r/1.5*Math.sin(vertices[i]*2*Math.PI+Math.PI/20),"y":centy+r/1.5*Math.cos(vertices[i]*2*Math.PI+Math.PI/20)})
		}
		for (var i = 0; i < vertices.length; i++) {
			dataASL2[i] = [];
			dataASL2[i].push({"x":centx+innerR*Math.sin(vertices[i]*2*Math.PI+Math.PI/20),"y":centy+innerR*Math.cos(vertices[i]*2*Math.PI+Math.PI/20)})
			dataASL2[i].push({"x":centx+0.5*(innerR+ytoInnerChord+8)*Math.sin(vertices[i]*2*Math.PI+Math.PI*2/vertices.length/2),"y":centy+0.5*(innerR+ytoInnerChord+8)*Math.cos(vertices[i]*2*Math.PI+Math.PI*2/vertices.length/2)})
			dataASL2[i].push({"x":centx+innerR*Math.sin(vertices[i]*2*Math.PI-Math.PI/20+Math.PI*2/vertices.length),"y":centy+innerR*Math.cos(vertices[i]*2*Math.PI-Math.PI/20+Math.PI*2/vertices.length)})
			dataASL2[i].push({"x":centx+0.5*(3*ytoInnerChord-innerR-8)/tempMultiplier*Math.sin(vertices[i]*2*Math.PI+Math.PI*2/vertices.length/2),"y":centy+0.5*(3*ytoInnerChord-innerR-8)/tempMultiplier*Math.cos(vertices[i]*2*Math.PI+Math.PI*2/vertices.length/2)})
		}
	} else if (posNum == 2) {
		for (var i = 0; i < vertices.length; i++) {
			dataASL[i] = [];
			dataASL[i].push({"x":centx+r/1.5*Math.sin(vertices[i]*2*Math.PI-Math.PI/20),"y":centy+r/1.5*Math.cos(vertices[i]*2*Math.PI-Math.PI/20)})
			dataASL[i].push({"x":centx+r*Math.sin(vertices[i]*2*Math.PI),"y":centy+r*Math.cos(vertices[i]*2*Math.PI)})
			dataASL[i].push({"x":centx+r/1.5*Math.sin(vertices[i]*2*Math.PI+Math.PI/20),"y":centy+r/1.5*Math.cos(vertices[i]*2*Math.PI+Math.PI/20)})
		}
		for (var i = 0; i < vertices.length; i++) {
			dataASL2[i] = [];
			dataASL2[i].push({"x":centx+r/(tempMultiplier)*Math.sin(vertices[i]*2*Math.PI+Math.PI/10),"y":centy+r/(tempMultiplier)*Math.cos(vertices[i]*2*Math.PI+Math.PI/10)})
			dataASL2[i].push({"x":centx+(30)/(tempMultiplier)*Math.sin(vertices[i]*2*Math.PI+Math.PI*2/vertices.length/2),"y":centy+(30)/(tempMultiplier)*Math.cos(vertices[i]*2*Math.PI+Math.PI*2/vertices.length/2)})
			dataASL2[i].push({"x":centx+r/(tempMultiplier)*Math.sin(vertices[i]*2*Math.PI-Math.PI/10+Math.PI*2/vertices.length),"y":centy+r/(tempMultiplier)*Math.cos(vertices[i]*2*Math.PI-Math.PI/10+Math.PI*2/vertices.length)})
			dataASL2[i].push({"x":centx+(10)/(tempMultiplier)*Math.sin(vertices[i]*2*Math.PI+Math.PI*2/vertices.length/2),"y":centy+(10)/(tempMultiplier)*Math.cos(vertices[i]*2*Math.PI+Math.PI*2/vertices.length/2)})
		}
	} else if (posNum == 1) {
		dataASL[0] = [];
		dataASL[0].push({"x":centx+r/1.5*Math.sin(Math.PI/20),"y":centy+r/1.5*Math.cos(Math.PI/20)})
		dataASL[0].push({"x":centx,"y":centy+r})
		dataASL[0].push({"x":centx+r/1.5*Math.sin(-Math.PI/20),"y":centy+r/1.5*Math.cos(-Math.PI/20)})
		dataASL2[0] = [];
		dataASL2[0].push({"x":centx+(r/2)*Math.sin(Math.PI/5),"y":centy+r/2})
		dataASL2[0].push({"x":centx,"y":centy+7*r/12})
		dataASL2[0].push({"x":centx+(r/2)*Math.sin(-Math.PI/5),"y":centy+r/2})
		dataASL2[0].push({"x":centx,"y":centy+r/3})
	}
	//for (var nV = 0; nV < num%vertices.length; nV++) {
	//	dataASL.splice(nV,1);
	//}
    //console.log(dataASL);
	for (var k = 0; k < dataASL.length; k++) {
		if (removable) {
			var drawAnnuli = svg.append("path")
							.attr("d", lineFunction(dataASL[k]))
							.attr("stroke", strokeShade)
							.attr("fill", fillShade)
							.attr("stroke-width", LW)
							.style("stroke-dasharray", pat.answers[x].a[n].dasharray)
							.attr("id", name)
							.attr("transform", "rotate("+(a*180/Math.PI)+","+centx+","+centy+")");
			var drawAnnuli = svg.append("path")
							.attr("d", lineFunction(dataASL2[k]))
							.attr("stroke", strokeShade)
							.attr("fill", fillShade)
							.attr("stroke-width", LW)
							.style("stroke-dasharray", pat.answers[x].a[n].dasharray)
							.attr("id", name)
							.attr("transform", "rotate("+(a*180/Math.PI)+","+centx+","+centy+")");
		} else {
			var drawAnnuli = svg.append("path")
							.attr("d", lineFunction(dataASL[k]))
							.attr("stroke", strokeShade)
							.attr("fill", fillShade)
							.attr("stroke-width", LW)
							.style("stroke-dasharray", pat.answers[x].a[n].dasharray)
							.attr("transform", "rotate("+(a*180/Math.PI)+","+centx+","+centy+")");
			var drawAnnuli = svg.append("path")
							.attr("d", lineFunction(dataASL2[k]))
							.attr("stroke", strokeShade)
							.attr("fill", fillShade)
							.attr("stroke-width", LW)
							.style("stroke-dasharray", pat.answers[x].a[n].dasharray)
							.attr("transform", "rotate("+(a*180/Math.PI)+","+centx+","+centy+")");
		}
	}
}            //09-boxes.js:
//
//
// 09-boxes.js
//
//
//
function boxes(centx,centy,x,y,removable,name) {
	var dataSL = [];
	var scale = pat.grid[x][y].scale;
	var n = pat.noAnnuli-1;
	var a = -(pat.grid[x][y].a[n].rotation+pat.rotOffset)*2*Math.PI;
	var LW = (lineThickness)*(pat.radii[pat.grid[x][y].a[n].lineWidth]+30)/10*scale/4;
	var r = (pat.radii[pat.noAnnuli-1]*pat.grid[x][y].scale-LW*2)*Math.SQRT1_2;
	var num = pat.grid[x][y].diceNum;
	var vertices = [];
	for (var j = 0; j <= Math.abs(num)+1;j++) {
		vertices.push(j*r*2/Math.abs(num));
	}
	//console.log(num+" v: "+vertices);
	if (num < 0) {
		var fillShade = pat.availableColours[2];
		var strokeShade = pat.chooseStrokeColour(pat.grid[x][y].a[n].shade,fillShade);
	} else {
		var fillShade = pat.availableColours[0];
		var strokeShade = pat.chooseStrokeColour(pat.grid[x][y].a[n].shade,fillShade);
	}
	//
	dataASL = [];
	for (var j = 0; j < vertices.length-1; j++) {
		var boxx = centx-r;
		var boxy = centy-vertices[j]+r;
		dataASL[j] = [];
		for (var l = 0; l < vertices.length-1; l++) {
			dataASL[j][l] = [];
			dataASL[j][l].push({"x":boxx+vertices[l],"y":boxy})
			dataASL[j][l].push({"x":boxx+vertices[l+1],"y":boxy})
			dataASL[j][l].push({"x":boxx+vertices[l+1],"y":boxy-r*2/Math.abs(num)})
			dataASL[j][l].push({"x":boxx+vertices[l],"y":boxy-r*2/Math.abs(num)})
		}
	}
	//for (var nV = 0; nV < num%vertices.length; nV++) {
	//	dataASL.splice(nV,1);
	//}
    //console.log(dataASL);
		for (var j = 0; j < dataASL.length-1; j++) {
			for (var k = 0; k < dataASL[0].length-1; k++) {
				if (removable) {
					var drawAnnuli = svg.append("path")
									.attr("d", lineFunction(dataASL[k][j]))
									.attr("stroke", strokeShade)
									.attr("fill", fillShade)
									.attr("stroke-width", LW)
									.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
									.attr("id", name)
    								.attr("transform", "rotate("+(-a*180/Math.PI)+","+centx+","+centy+")");
				} else {
					var drawAnnuli = svg.append("path")
									.attr("d", lineFunction(dataASL[k][j]))
									.attr("stroke", strokeShade)
									.attr("fill", fillShade)
									.attr("stroke-width", LW)
									.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
    								.attr("transform", "rotate("+(-a*180/Math.PI)+","+centx+","+centy+")");
				}
			}
		}
	/* switch(num) {
		case 4:
		case -4:
			for (var k = -1; k < 2; k+=2) {
				if (removable) {
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+longerDiceRad*Math.sin(a+Math.PI*(k+1)/2))
										.attr("cy", centy-longerDiceRad*Math.cos(a+Math.PI*(k+1)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
										.attr("id", name);
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+longerDiceRad*Math.sin(a+Math.PI*(k+2)/2))
										.attr("cy", centy-longerDiceRad*Math.cos(a+Math.PI*(k+2)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
										.attr("id", name);
				} else {
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+longerDiceRad*Math.sin(a+Math.PI*(k+1)/2))
										.attr("cy", centy-longerDiceRad*Math.cos(a+Math.PI*(k+1)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray);
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+longerDiceRad*Math.sin(a+Math.PI*(k+2)/2))
										.attr("cy", centy-longerDiceRad*Math.cos(a+Math.PI*(k+2)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray);
				}
			}
			break;
		case 3:
		case -3:
			if (removable) {
				var drawAnnuli = svg.append("circle")
					  				.attr("cx", centx)
					  				.attr("cy", centy)
					  				.attr("r", rad)
									.attr("stroke", strokeShade)
									.attr("fill", fillShade)
									.attr("stroke-width", LW)
									.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
									.attr("id", name);
			} else {
				var drawAnnuli = svg.append("circle")
					  				.attr("cx", centx)
					  				.attr("cy", centy)
					  				.attr("r", rad)
									.attr("stroke", strokeShade)
									.attr("fill", fillShade)
									.attr("stroke-width", LW)
									.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray);
			}
		case 2:
		case -2:
			for (var k = -1; k < 2; k+=2) {
				if (removable) {
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+longerDiceRad*Math.sin(a+Math.PI*(k+2)/2))
										.attr("cy", centy-longerDiceRad*Math.cos(a+Math.PI*(k+2)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
										.attr("id", name);
				} else {
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+longerDiceRad*Math.sin(a+Math.PI*(k+2)/2))
										.attr("cy", centy-longerDiceRad*Math.cos(a+Math.PI*(k+2)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray);
				}
			}
			break;
		case 1:
		case -1:
			if (removable) {
				var drawAnnuli = svg.append("circle")
					  				.attr("cx", centx)
					  				.attr("cy", centy)
					  				.attr("r", rad)
									.attr("stroke", strokeShade)
									.attr("fill", fillShade)
									.attr("stroke-width", LW)
									.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
									.attr("id", name);
			} else {
				var drawAnnuli = svg.append("circle")
					  				.attr("cx", centx)
					  				.attr("cy", centy)
					  				.attr("r", rad)
									.attr("stroke", strokeShade)
									.attr("fill", fillShade)
									.attr("stroke-width", LW)
									.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray);
			}
			break;
		case 0:
			break;
	}*/
}
function answerBoxes(centx,centy,x,removable,name) {
	var dataSL = [];
	var scale = pat.answers[x].scale;
	var n = pat.noAnnuli-1;
	var a = (pat.answers[x].a[n].rotation+pat.rotOffset)*2*Math.PI;
	var LW = (lineThickness)*(pat.radii[pat.answers[x].a[n].lineWidth]+30)/10*scale/4;
	var r = (pat.radii[pat.noAnnuli-1]*pat.answers[x].scale-LW*2)*Math.SQRT1_2;
	var num = pat.answers[x].diceNum;
	// - change this!
	var vertices = [];
	for (var j = 0; j <= Math.abs(num)+1;j++) {
		vertices.push(j*r*2/Math.abs(num));
	}
	//
	if (num < 0) {
		var fillShade = pat.availableColours[2];
		var strokeShade = pat.chooseStrokeColour(pat.answers[x].a[n].shade,fillShade);
	} else {
		var fillShade = pat.availableColours[0];
		var strokeShade = pat.chooseStrokeColour(pat.answers[x].a[n].shade,fillShade);
	}
	//
	dataASL = [];
	for (var j = 0; j < vertices.length-1; j++) {
		var boxx = centx-r;
		var boxy = centy-vertices[j]+r;
		dataASL[j] = [];
		for (var l = 0; l < vertices.length-1; l++) {
			dataASL[j][l] = [];
			dataASL[j][l].push({"x":boxx+vertices[l],"y":boxy})
			dataASL[j][l].push({"x":boxx+vertices[l+1],"y":boxy})
			dataASL[j][l].push({"x":boxx+vertices[l+1],"y":boxy-r*2/Math.abs(num)})
			dataASL[j][l].push({"x":boxx+vertices[l],"y":boxy-r*2/Math.abs(num)})
		}
	}
	//for (var nV = 0; nV < num%vertices.length; nV++) {
	//	dataASL.splice(nV,1);
	//}
    //console.log(dataASL);
		for (var j = 0; j < dataASL.length-1; j++) {
			for (var k = 0; k < dataASL[0].length-1; k++) {
				if (removable) {
					var drawAnnuli = svg.append("path")
									.attr("d", lineFunction(dataASL[k][j]))
									.attr("stroke", strokeShade)
									.attr("fill", fillShade)
									.attr("stroke-width", LW)
									.style("stroke-dasharray", pat.answers[x].a[n].dasharray)
									.attr("id", name)
    								.attr("transform", "rotate("+(a*180/Math.PI)+","+centx+","+centy+")");
				} else {
					var drawAnnuli = svg.append("path")
									.attr("d", lineFunction(dataASL[k][j]))
									.attr("stroke", strokeShade)
									.attr("fill", fillShade)
									.attr("stroke-width", LW)
									.style("stroke-dasharray", pat.answers[x].a[n].dasharray)
    								.attr("transform", "rotate("+(a*180/Math.PI)+","+centx+","+centy+")");
				}
			}
		}
}            //10-triangles.js:
//
//
// 10-triangles.js
//
//
//
function triangles(centx,centy,x,y,removable,name) {
	var dataSL = [];
	var scale = pat.grid[x][y].scale;
	var n = pat.noAnnuli-1;
	var a = -(pat.grid[x][y].a[n].rotation+pat.rotOffset)*2*Math.PI;
	var LW = (lineThickness)*(pat.radii[pat.grid[x][y].a[n].lineWidth]+30)/10*scale/4;
	var r = (pat.radii[pat.noAnnuli-1]*pat.grid[x][y].scale-LW*2);
	var chord = r*Math.sqrt(3);
	var ytoChord = r/2;
	var num = pat.grid[x][y].diceNum;
	var posNum = Math.abs(num);
	var triHeight = (ytoChord+r)/(posNum);
	var triSide = chord/(posNum);
	//console.log(num+" v: "+vertices);
	if (num < 0) {
		var fillShade = pat.availableColours[2];
		var strokeShade = pat.chooseStrokeColour(pat.grid[x][y].a[n].shade,fillShade);
	} else {
		var fillShade = pat.availableColours[0];
		var strokeShade = pat.chooseStrokeColour(pat.grid[x][y].a[n].shade,fillShade);
	}
	var fillShade2 = pat.availableColours[(pat.availableColours.indexOf(fillShade)+1)%pat.availableColours.length];
	//
	dataASL = [];
	for (var j = 0; j < posNum; j++) {
		var boxx = centx-j*triSide*1/2;
		var boxy = centy-j*triHeight+r;
		dataASL[j] = [];
		for (var l = 0; l+j < posNum; l++) {
			dataASL[j][l] = [];
			dataASL[j][l].push({"x":boxx+triSide*l*1/2,"y":boxy-triHeight*l})
			dataASL[j][l].push({"x":boxx+triSide*(l+1)*1/2,"y":boxy-triHeight*(l+1)})
			dataASL[j][l].push({"x":boxx+triSide*(l-1)*1/2,"y":boxy-triHeight*(l+1)})
		}
	}
	//console.log(dataASL);
	dataASL2 = [];
	for (var j = 0; j < posNum-1; j++) {
		var boxx = centx-j*triSide*1/2;
		var boxy = centy-j*triHeight+r-triHeight;
		dataASL2[j] = [];
		for (var l = 0; l+j < posNum-1; l++) {
			dataASL2[j][l] = [];
			dataASL2[j][l].push({"x":boxx+triSide*(l)*1/2,"y":boxy-triHeight*(l+1)})
			dataASL2[j][l].push({"x":boxx+triSide*(l-1)*1/2,"y":boxy-triHeight*(l)})
			dataASL2[j][l].push({"x":boxx+triSide*(l+1)*1/2,"y":boxy-triHeight*(l)})
		}
	}
	
	for (var j = 0; j < dataASL.length; j++) {
		for (var k = 0; k+j < dataASL[0].length; k++) {
			if (removable) {
				var drawAnnuli = svg.append("path")
								.attr("d", lineFunction(dataASL[j][k]))
								.attr("stroke", strokeShade)
								.attr("fill", fillShade)
								.attr("stroke-width", LW)
								.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
								.attr("id", name)
								.attr("transform", "rotate("+(-a*180/Math.PI)+","+centx+","+centy+")");
			} else {
				var drawAnnuli = svg.append("path")
								.attr("d", lineFunction(dataASL[j][k]))
								.attr("stroke", strokeShade)
								.attr("fill", fillShade)
								.attr("stroke-width", LW)
								.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
								.attr("transform", "rotate("+(-a*180/Math.PI)+","+centx+","+centy+")");
			}
		}
	}
	//console.log(dataASL);
	for (var j = 0; j < dataASL2.length; j++) {
		for (var k = 0; k+j < dataASL2[0].length; k++) {
			if (removable) {
				var drawAnnuli = svg.append("path")
								.attr("d", lineFunction(dataASL2[j][k]))
								.attr("stroke", strokeShade)
								.attr("fill", fillShade2)
								.attr("stroke-width", LW)
								.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
								.attr("id", name)
								.attr("transform", "rotate("+(-a*180/Math.PI)+","+centx+","+centy+")");
			} else {
				var drawAnnuli = svg.append("path")
								.attr("d", lineFunction(dataASL2[j][k]))
								.attr("stroke", strokeShade)
								.attr("fill", fillShade2)
								.attr("stroke-width", LW)
								.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
								.attr("transform", "rotate("+(-a*180/Math.PI)+","+centx+","+centy+")");
			}
		}
	}
	/*			var drawTemp = svg.append("path")
								.attr("d", lineFunction(dataTemp))
								.attr("stroke", pat.availableColours[2])
								.attr("stroke-width", LW)
								.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
								.attr("id", name);*/

	/* switch(num) {
		case 4:
		case -4:
			for (var k = -1; k < 2; k+=2) {
				if (removable) {
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+longerDiceRad*Math.sin(a+Math.PI*(k+1)/2))
										.attr("cy", centy-longerDiceRad*Math.cos(a+Math.PI*(k+1)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
										.attr("id", name);
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+longerDiceRad*Math.sin(a+Math.PI*(k+2)/2))
										.attr("cy", centy-longerDiceRad*Math.cos(a+Math.PI*(k+2)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
										.attr("id", name);
				} else {
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+longerDiceRad*Math.sin(a+Math.PI*(k+1)/2))
										.attr("cy", centy-longerDiceRad*Math.cos(a+Math.PI*(k+1)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray);
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+longerDiceRad*Math.sin(a+Math.PI*(k+2)/2))
										.attr("cy", centy-longerDiceRad*Math.cos(a+Math.PI*(k+2)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray);
				}
			}
			break;
		case 3:
		case -3:
			if (removable) {
				var drawAnnuli = svg.append("circle")
					  				.attr("cx", centx)
					  				.attr("cy", centy)
					  				.attr("r", rad)
									.attr("stroke", strokeShade)
									.attr("fill", fillShade)
									.attr("stroke-width", LW)
									.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
									.attr("id", name);
			} else {
				var drawAnnuli = svg.append("circle")
					  				.attr("cx", centx)
					  				.attr("cy", centy)
					  				.attr("r", rad)
									.attr("stroke", strokeShade)
									.attr("fill", fillShade)
									.attr("stroke-width", LW)
									.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray);
			}
		case 2:
		case -2:
			for (var k = -1; k < 2; k+=2) {
				if (removable) {
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+longerDiceRad*Math.sin(a+Math.PI*(k+2)/2))
										.attr("cy", centy-longerDiceRad*Math.cos(a+Math.PI*(k+2)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
										.attr("id", name);
				} else {
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+longerDiceRad*Math.sin(a+Math.PI*(k+2)/2))
										.attr("cy", centy-longerDiceRad*Math.cos(a+Math.PI*(k+2)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray);
				}
			}
			break;
		case 1:
		case -1:
			if (removable) {
				var drawAnnuli = svg.append("circle")
					  				.attr("cx", centx)
					  				.attr("cy", centy)
					  				.attr("r", rad)
									.attr("stroke", strokeShade)
									.attr("fill", fillShade)
									.attr("stroke-width", LW)
									.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
									.attr("id", name);
			} else {
				var drawAnnuli = svg.append("circle")
					  				.attr("cx", centx)
					  				.attr("cy", centy)
					  				.attr("r", rad)
									.attr("stroke", strokeShade)
									.attr("fill", fillShade)
									.attr("stroke-width", LW)
									.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray);
			}
			break;
		case 0:
			break;
	}*/
}
function answerTriangles(centx,centy,x,removable,name) {
	var dataSL = [];
	var scale = pat.answers[x].scale;
	var n = pat.noAnnuli-1;
	var a = -(pat.answers[x].a[n].rotation+pat.rotOffset)*2*Math.PI;
	var LW = (lineThickness)*(pat.radii[pat.answers[x].a[n].lineWidth]+30)/10*scale/4;
	var r = (pat.radii[pat.noAnnuli-1]*pat.answers[x].scale-LW*2);
	var chord = r*Math.sqrt(3);
	var ytoChord = r/2;
	var num = pat.answers[x].diceNum;
	var posNum = Math.abs(num);
	var triHeight = (ytoChord+r)/(posNum);
	var triSide = chord/(posNum);
	if (num < 0) {
		var fillShade = pat.availableColours[2];
		var strokeShade = pat.chooseStrokeColour(pat.answers[x].a[n].shade,fillShade);
	} else {
		var fillShade = pat.availableColours[0];
		var strokeShade = pat.chooseStrokeColour(pat.answers[x].a[n].shade,fillShade);
	}
	var fillShade2 = pat.availableColours[(pat.availableColours.indexOf(fillShade)+1)%pat.availableColours.length];
	//
	dataASL = [];
	for (var j = 0; j < posNum; j++) {
		var boxx = centx-j*triSide*1/2;
		var boxy = centy-j*triHeight+r;
		dataASL[j] = [];
		for (var l = 0; l+j < posNum; l++) {
			dataASL[j][l] = [];
			dataASL[j][l].push({"x":boxx+triSide*l*1/2,"y":boxy-triHeight*l})
			dataASL[j][l].push({"x":boxx+triSide*(l+1)*1/2,"y":boxy-triHeight*(l+1)})
			dataASL[j][l].push({"x":boxx+triSide*(l-1)*1/2,"y":boxy-triHeight*(l+1)})
		}
	}
	//console.log(dataASL);
	dataASL2 = [];
	for (var j = 0; j < posNum-1; j++) {
		var boxx = centx-j*triSide*1/2;
		var boxy = centy-j*triHeight+r-triHeight;
		dataASL2[j] = [];
		for (var l = 0; l+j < posNum-1; l++) {
			dataASL2[j][l] = [];
			dataASL2[j][l].push({"x":boxx+triSide*(l)*1/2,"y":boxy-triHeight*(l+1)})
			dataASL2[j][l].push({"x":boxx+triSide*(l-1)*1/2,"y":boxy-triHeight*(l)})
			dataASL2[j][l].push({"x":boxx+triSide*(l+1)*1/2,"y":boxy-triHeight*(l)})
		}
	}
	//for (var nV = 0; nV < num%vertices.length; nV++) {
	//	dataASL.splice(nV,1);
	//}
	for (var j = 0; j < dataASL.length; j++) {
		for (var k = 0; k+j < dataASL[0].length; k++) {
			if (removable) {
				var drawAnnuli = svg.append("path")
								.attr("d", lineFunction(dataASL[j][k]))
								.attr("stroke", strokeShade)
								.attr("fill", fillShade)
								.attr("stroke-width", LW)
								.style("stroke-dasharray", pat.answers[x].a[n].dasharray)
								.attr("id", name)
								.attr("transform", "rotate("+(-a*180/Math.PI)+","+centx+","+centy+")");
			} else {
				var drawAnnuli = svg.append("path")
								.attr("d", lineFunction(dataASL[j][k]))
								.attr("stroke", strokeShade)
								.attr("fill", fillShade)
								.attr("stroke-width", LW)
								.style("stroke-dasharray", pat.answers[x].a[n].dasharray)
								.attr("transform", "rotate("+(-a*180/Math.PI)+","+centx+","+centy+")");
			}
		}
	}
	//console.log(dataASL);
	for (var j = 0; j < dataASL2.length; j++) {
		for (var k = 0; k+j < dataASL2[0].length; k++) {
			if (removable) {
				var drawAnnuli = svg.append("path")
								.attr("d", lineFunction(dataASL2[j][k]))
								.attr("stroke", strokeShade)
								.attr("fill", fillShade2)
								.attr("stroke-width", LW)
								.style("stroke-dasharray", pat.answers[x].a[n].dasharray)
								.attr("id", name)
								.attr("transform", "rotate("+(-a*180/Math.PI)+","+centx+","+centy+")");
			} else {
				var drawAnnuli = svg.append("path")
								.attr("d", lineFunction(dataASL2[j][k]))
								.attr("stroke", strokeShade)
								.attr("fill", fillShade2)
								.attr("stroke-width", LW)
								.style("stroke-dasharray", pat.answers[x].a[n].dasharray)
								.attr("transform", "rotate("+(-a*180/Math.PI)+","+centx+","+centy+")");
			}
		}
	}

}            //11-boxLines.js:
//
//
// 11-boxLines.js
//
//
// Formed from two sets of lines
//
// First set of lines:
//		N radial lines out from the centre
// Second set of lines:
//		N lines connecting the outer ends of the first set together
//
//
// Two functions - one calls the superFunction SFboxLines to draw
// the boxLines in the matrix, the other does so to draw the boxLines in the answer set.
// 
function SFboxLines (centx,centy,removable,dataSource,name) {
	
	// Encoding type or style
	if (pat.isBinary) {
		// How many different rules act on the encoding?
		// BoxLines with isBinary can cope with 1, 2 or possibly 3 sets of rules.
		//console.log(pat.patternType)
		// Switch (How many rules?) -- Makes sense to handle this earlier?
		switch (pat.patternType[2].length) {
			case 1:
				// How many elements are involved? 
				// For 1 rule, N can be 3,4,5,6,8 or 10 easily. 9 is possible, for 7; Petals or equivalent is recommended. For 1 or 2, rings would work [not yet coded].
				var num = pat.patternType[6][0].length
				//
				var dataSL = [];
				// various parameters defining the size of the encoding graphic
				var scale = dataSource.scale;
				var n = pat.noAnnuli-1;
				var a = -(dataSource.a[n].rotation+pat.rotOffset)*2*Math.PI;
				var LW = (lineThickness)*(pat.radii[dataSource.a[n].lineWidth]+30)/10*scale/4;
				var r = pat.radii[pat.noAnnuli-1]*dataSource.scale-LW*2;
				//
				var vertices = [];
				var evenNum = [6,8,10,12];
				var oddNum = [3,4,5]
				if (evenNum.indexOf(num) >= 0) {
					for (var j = 0; j < (num/2);j++) {
						vertices.push(j/(num/2));
					}
				} else if (oddNum.indexOf(num) >= 0) {
					for (var j = 0; j < (num);j++) {
						vertices.push(j/(num));
					}
				} else {
					console.warn("Invalid num value passed to boxLines.js");
				}
				//console.log("num: "+num);
				//
				//
				//console.log(num+" v: "+vertices);
				if (num < 0) {
					var fillShade = pat.availableColours[2];
					var strokeShade = pat.chooseStrokeColour(dataSource.a[n].shade,fillShade);
				} else {
					var fillShade = pat.availableColours[0];
					var strokeShade = pat.chooseStrokeColour(dataSource.a[n].shade,fillShade);
				}
				//
				//console.log("num: "+num);
				//console.log(evenNum.indexOf(num));
				if (evenNum.indexOf(num) >= 0) {
					dataASL = [];
					for (var i = 0; i < vertices.length; i++) {
						dataASL[i] = [];
						dataASL[i].push({"x":centx,"y":centy})
						dataASL[i].push({"x":centx+r*Math.sin(a+vertices[i]*2*Math.PI),"y":centy+r*Math.cos(a+vertices[i]*2*Math.PI)})
						//console.log("x1: "+centx+" to x2: "+(centx+r*Math.sin(a+vertices[i]*2*Math.PI)));
						//console.log("y1: "+centy+" to y2: "+(centy+r*Math.cos(a+vertices[i]*2*Math.PI)));
					}
				}
				dataASL2 = [];
				for (var i = 0; i < vertices.length; i++) {
					dataASL2[i] = [];
					dataASL2[i].push({"x":centx+r*Math.sin(a+vertices[i]*2*Math.PI),"y":centy+r*Math.cos(a+vertices[i]*2*Math.PI)})
					//dataASL2[i].push({"x":centx+0.75*r*Math.sin(a+vertices[i]*2*Math.PI+Math.PI/vertices.length),"y":centy+.75*r*Math.cos(a+vertices[i]*2*Math.PI+Math.PI/vertices.length)});
					dataASL2[i].push({"x":centx+r*Math.sin(a+vertices[i]*2*Math.PI+Math.PI*2/vertices.length),"y":centy+r*Math.cos(a+vertices[i]*2*Math.PI+Math.PI*2/vertices.length)})
				}
				//console.log("DataASL1/2");
				//for (var i = 0; i < dataASL.length; i++)
				//	console.log(dataASL[i])
				//for (var i = 0; i < dataASL2.length; i++)
				//	console.log(dataASL2[i])
				//console.log("Vert");
				//console.log(vertices)
				// bob
				//
				//
				//	console.log(x +" : "+ y);
				//	console.log(dataSource);
				
				for (var z = 0; z < dataSource.diceNum.length; z++) {
					if (evenNum.indexOf(num) >= 0) {
						if (dataSource.diceNum[z] == 0)
							if (z < num/2) {
								dataASL[z] = [];
							} else {
								dataASL2[z-num/2] = [];
								//console.log ("z: "+z+", num: "+num+", z-num: "+(z-num/2));
							}
					} else if (dataSource.diceNum[z] == 0)
						dataASL2[z] = [];
				}
				//console.log(dataASL);
	
				//console.log(dataASL2);
	
				//for (var nV = 0; nV < num%vertices.length; nV++) {
				//	dataASL2.splice(nV,1);
				//}
				//console.log(dataASL);
				if (evenNum.indexOf(num) >= 0) {
					for (var j = 0; j < dataASL.length; j++) {
							if (removable) {
								var drawAnnuli = svg.append("path")
												.attr("d", curveFunction(dataASL[j]))
												.attr("stroke", strokeShade)
												.attr("fill", fillShade)
												.attr("stroke-width", LW)
												.style("stroke-dasharray", dataSource.a[n].dasharray)
												.attr("id", name);
							} else {
								var drawAnnuli = svg.append("path")
												.attr("d", curveFunction(dataASL[j]))
												.attr("stroke", strokeShade)
												.attr("fill", fillShade)
												.attr("stroke-width", LW)
												.style("stroke-dasharray", dataSource.a[n].dasharray);
							}
					}	
				}
				for (var j = 0; j < dataASL2.length; j++) {
						if (removable) {
							var drawAnnuli = svg.append("path")
											.attr("d", curveFunction(dataASL2[j]))
											.attr("stroke", strokeShade)
											.attr("fill", fillShade)
											.attr("stroke-width", LW)
											.style("stroke-dasharray", dataSource.a[n].dasharray)
											.attr("id", name);
						} else {
							var drawAnnuli = svg.append("path")
											.attr("d", curveFunction(dataASL2[j]))
											.attr("stroke", strokeShade)
											.attr("fill", fillShade)
											.attr("stroke-width", LW)
											.style("stroke-dasharray", dataSource.a[n].dasharray);
						}
				}
				if (removable) {
					if (evenNum.indexOf(num) >= 0) {
						var circle = svg.append("circle")
										.attr("cx", centx)
										.attr("cy", centy)
										.attr("r", LW*2)
										.attr("stroke", "none")
										.attr("fill", strokeShade)
										.attr("id", name); 
						for (var i = 0; i < (num/2); i++) {		
							var circle = svg.append("circle")
											.attr("cx", centx+r*Math.sin(a+vertices[i]*2*Math.PI))
											.attr("cy", centy+r*Math.cos(a+vertices[i]*2*Math.PI))
											.attr("r", LW*2)
											.attr("stroke", "none")
											.attr("fill", strokeShade)
											.attr("id", name);   
						}
					} else {
						for (var i = 0; i < num; i++) {		
							var circle = svg.append("circle")
											.attr("cx", centx+r*Math.sin(a+vertices[i]*2*Math.PI))
											.attr("cy", centy+r*Math.cos(a+vertices[i]*2*Math.PI))
											.attr("r", LW*2)
											.attr("stroke", "none")
											.attr("fill", strokeShade)
											.attr("id", name);   
						}
					}
				} else {
					if (evenNum.indexOf(num) >= 0) {
						var circle = svg.append("circle")
										.attr("cx", centx)
										.attr("cy", centy)
										.attr("r", LW*2)
										.attr("stroke", "none")
										.attr("fill", strokeShade);   
						for (var i = 0; i < (num/2); i++) {	
							var circle = svg.append("circle")
											.attr("cx", centx+r*Math.sin(a+vertices[i]*2*Math.PI))
											.attr("cy", centy+r*Math.cos(a+vertices[i]*2*Math.PI))
											.attr("r", LW*2)
											.attr("stroke", "none")
											.attr("fill", strokeShade);  
						} 
					} else {
						for (var i = 0; i < num; i++) {		
							var circle = svg.append("circle")
											.attr("cx", centx+r*Math.sin(a+vertices[i]*2*Math.PI))
											.attr("cy", centy+r*Math.cos(a+vertices[i]*2*Math.PI))
											.attr("r", LW*2)
											.attr("stroke", "none")
											.attr("fill", strokeShade);  
						} 
					}
				}

				break;
			case 2:
				console.warn("Not yet coded!");
				break;
			default:
				console.warn("This shouldn't happen!");
				break;
		}
	} else {
		console.warn("Not yet coded!");
	}
}
function boxLines(centx,centy,x,y,removable,name) {
	SFboxLines (centx,centy,removable,pat.grid[x][y],name)
}
function answerBoxLines(centx,centy,x,removable,name) {
	SFboxLines (centx,centy,removable,pat.answers[x],name);
}            //12-shape.js:
//
//
// 12-shape.js
//
//
function outerPoint(x1,y1,x2,y2,centx,centy,r,LW) {
	// t is the midpoint of the chord between x1,y1 and x2,y2
	var tx = (x2+x1)/2;
	var ty = (y2+y1)/2;
	// Extending the line ct by extMult to get the point o on the outer rim of the annulus.
	var dctx = centx-tx;
	var dcty = centy-ty;
	var dct = Math.sqrt(Math.pow(dctx,2)+Math.pow(dcty,2));
	var extMult = -(r*annulusWidth-LW/2)/(dct);
	var ox = dctx*extMult+centx;
	var oy = dcty*extMult+centy;
	
	return {"x":ox,"y":oy};
}
function outerPoint2(x1,y1,centx,centy,r,LW,right) {
	var dx = x1-centx;
	var dy = y1-centy;
	if (right) {
		//var xunit = - Math.sqrt(1-(dx/r)*(dx/r));
		//var yunit = + Math.sqrt(1-(dy/r)*(dy/r));
		var xunit = dy;
		var yunit = -dx;
	} else {
		var xunit = -dy;
		var yunit = dx;
		//var xunit = + Math.sqrt(1-(dx/r)*(dx/r));
		//var yunit = - Math.sqrt(1-(dy/r)*(dy/r));
	}
	var ox = centx + (r*annulusWidth-LW/2)/r*xunit;
	var oy = centy + (r*annulusWidth-LW/2)/r*yunit;
	
	return {"x":ox,"y":oy};
}
// Shape functions
function indecatorSize (r,LW) {
	return (r*annulusWidth-r-LW/2);
	//return 0.4*(1.25*maxShapes+1*z)*pat.grid[x][y].a[z].lineWidth;
	//pat.grid[x][y].a[n].strokeColour -- Old Colour —— Colour of lines
}
function indecatorSizeAn (r,LW) {
	return (r*annulusWidth-r-LW/2);
	//return 0.4*(1.25*maxShapes+1*z)*pat.answers[x].a[z].lineWidth;
	//pat.grid[x][y].a[n].strokeColour -- Old Colour —— Colour of lines
}
function shape(centx,centy,x,y,removable,name) {
	//	console.error("shape: "+ax+" x: "+x);
	for (var n=0;n<pat.radii.length && n < pat.noAnnuli;n++) {
		var data = [];
		var vertices = pat.grid[x][y].a[n].polyShape;
		var scale = pat.grid[x][y].scale;
		var r = pat.radii[n]*pat.grid[x][y].scale;
		var a = (pat.grid[x][y].a[n].rotation+pat.rotOffset)*2*Math.PI;
		var LW = (lineThickness)*(pat.radii[pat.grid[x][y].a[n].lineWidth]+30)/10*scale;
		if (pat.usingANYrot) {
			if(pat.includeAnnuli) {
				if (removable) {
					var circle = svg.append("circle")
									.attr("cx", centx+(r+LW/2)*Math.sin(a))
									.attr("cy", centy-(r+LW/2)*Math.cos(a))
									.attr("r", indecatorSize(r,LW))
									.attr("stroke", "none")
									.attr("fill", "LightGray")
									.attr("id", name);    
				} else {
					var circle = svg.append("circle")
									.attr("cx", centx+(r+LW/2)*Math.sin(a))
									.attr("cy", centy-(r+LW/2)*Math.cos(a))
									.attr("r", indecatorSize(r,LW))
									.attr("stroke", "none")
									.attr("fill", name);    
				}  
			} else {
				if (removable) {
					var circle = svg.append("circle")
									.attr("cx", centx+(r-LW/2)*Math.sin(a))
									.attr("cy", centy-(r-LW/2)*Math.cos(a))
									.attr("r", indecatorSize(r*2/3,LW))
									.attr("stroke", "none")
									.attr("fill", "LightGray")
									.attr("id", name); 
					var square = svg.append("path")
									.attr("d", polyFunction([{"x": centx+(r-LW/2)*Math.sin(a-Math.PI/4),
															 "y": centy-(r-LW/2)*Math.cos(a-Math.PI/4)},
															 {"x": centx+(r-LW/2)*Math.sin(a-Math.PI/4+Math.PI/2),
															 "y": centy-(r-LW/2)*Math.cos(a-Math.PI/4+Math.PI/2)},
															 {"x": centx+(r-LW/2)*Math.sin(a-Math.PI/4+Math.PI),
															 "y": centy-(r-LW/2)*Math.cos(a-Math.PI/4+Math.PI)},
															 {"x": centx+(r-LW/2)*Math.sin(a-Math.PI/4+3*Math.PI/2),
															 "y": centy-(r-LW/2)*Math.cos(a-Math.PI/4+3*Math.PI/2)}]))
									.attr("stroke", "LightGray")
									.attr("fill", "White")
									.attr("stroke-width", LW)
									.attr("id", name);
				} else {
					var circle = svg.append("circle")
									.attr("cx", centx+(r-LW/2)*Math.sin(a))
									.attr("cy", centy-(r-LW/2)*Math.cos(a))
									.attr("r", indecatorSize(r*2/3,LW))
									.attr("stroke", "none")
									.attr("fill", "LightGray");    
					var square = svg.append("path")
									.attr("d", polyFunction([{"x": centx+(r-LW/2)*Math.sin(a-Math.PI/4),
															 "y": centy-(r-LW/2)*Math.cos(a-Math.PI/4)},
															 {"x": centx+(r-LW/2)*Math.sin(a-Math.PI/4+Math.PI/2),
															 "y": centy-(r-LW/2)*Math.cos(a-Math.PI/4+Math.PI/2)},
															 {"x": centx+(r-LW/2)*Math.sin(a-Math.PI/4+Math.PI),
															 "y": centy-(r-LW/2)*Math.cos(a-Math.PI/4+Math.PI)},
															 {"x": centx+(r-LW/2)*Math.sin(a-Math.PI/4+3*Math.PI/2),
															 "y": centy-(r-LW/2)*Math.cos(a-Math.PI/4+3*Math.PI/2)}]))
									.attr("stroke", "LightGray")
									.attr("fill", "White")
									.attr("stroke-width", LW);
				}  
			}
		} 
		if (pat.includeAnnuli) {
			switch (vertices.length) {
			case 0: // Circle/D0
			//console.log("centx: "+centx+" "+r+" "+Math.sin(a)+ " " +a)
				if (removable) {
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx)
										.attr("cy", centy)
										.attr("r", r+LW/2)
										.attr("stroke", pat.grid[x][y].a[n].strokeColour)
										.attr("fill", pat.grid[x][y].a[n].shade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
										.attr("id", name);
				} else {
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx)
										.attr("cy", centy)
										.attr("r", r+LW/2)
										.attr("stroke", pat.grid[x][y].a[n].strokeColour)
										.attr("fill", pat.grid[x][y].a[n].shade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray);
				}
				break;
			case 2:
				for (var i = 0; i < vertices.length; i++) {
					data.push({"x":centx+(r+LW/2)*Math.sin(a+vertices[i]*2*Math.PI),"y":centy-(r+LW/2)*Math.cos(a+vertices[i]*2*Math.PI)})
				}
				var l = data.length;
			
				data.splice(2,0,outerPoint2(data[1].x,data[1].y,centx,centy,r,LW,true));
				data.splice(1,0,outerPoint2(data[0].x,data[0].y,centx,centy,r,LW,false));
			
				console.log(data);
				if (removable) {  
					var drawAnnuli = svg.append("path")
										.attr("d", polyFunction(data))
										.attr("stroke", pat.grid[x][y].a[n].strokeColour)
										.attr("fill", pat.grid[x][y].a[n].shade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
										.attr("id", name);
				} else {
					var drawAnnuli = svg.append("path")
										.attr("d", polyFunction(data))
										.attr("stroke", pat.grid[x][y].a[n].strokeColour)
										.attr("fill", pat.grid[x][y].a[n].shade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray);
				}
				break;
			default: // DX 
				for (var i = 0; i < vertices.length; i++) {
					data.push({"x":centx+(r+LW/2)*Math.sin(a+vertices[i]*2*Math.PI),"y":centy-(r+LW/2)*Math.cos(a+vertices[i]*2*Math.PI)})
				}
				data.push({"x":centx+(r+LW/2)*Math.sin(a+vertices[0]*2*Math.PI),"y":centy-(r+LW/2)*Math.cos(a+vertices[0]*2*Math.PI)})
				var l = data.length;
				for (var m=l-1;m>0;m--) {
					data.splice(m,0,outerPoint(data[m-1].x,data[m-1].y,data[m].x,data[m].y,centx,centy,r,LW));
				}
				data.pop();	
				if (removable) {
					if (pat.usingANYrot) {
						if (pat.grid[x][y].a[n].polyForm == "pentagon") {
							var circle = svg.append("circle")
											.attr("cx", (data[1].x+data[5].x)/2)
											.attr("cy", (data[1].y+data[5].y)/2)
											.attr("r", indecatorSize(r,LW))
											.attr("stroke", "none")
											.attr("fill", "LightGray") 
											.attr("id", name);
						} else {
							var circle = svg.append("circle")
												.attr("cx", data[0].x)
												.attr("cy", data[0].y)
												.attr("r", indecatorSize(r,LW))
												.attr("stroke", "none")
												.attr("fill", "LightGray") 
												.attr("id", name);
						}
					}   
					var drawAnnuli = svg.append("path")
										.attr("d", polyFunction(data))
										.attr("stroke", pat.grid[x][y].a[n].strokeColour)
										.attr("fill", pat.grid[x][y].a[n].shade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
										.attr("id", name);
				} else {
					if (pat.usingANYrot) {
						if (pat.grid[x][y].a[n].polyForm == "pentagon") {
							var circle = svg.append("circle")
											.attr("cx", (data[1].x+data[5].x)/2)
											.attr("cy", (data[1].y+data[5].y)/2)
											.attr("r", indecatorSize(r,LW))
											.attr("stroke", "none")
											.attr("fill", "LightGray");
						} else {
							var circle = svg.append("circle")
												.attr("cx", data[0].x)
												.attr("cy", data[0].y)
												.attr("r", indecatorSize(r,LW))
												.attr("stroke", "none")
												.attr("fill", "LightGray");
						}
					}   
					var drawAnnuli = svg.append("path")
										.attr("d", polyFunction(data))
										.attr("stroke", pat.grid[x][y].a[n].strokeColour)
										.attr("fill", pat.grid[x][y].a[n].shade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray);
				}
			}
	
		/*var drawAnnuliB = svg.append("circle")
							.attr("cx", centx)
							.attr("cy", centy)
							.attr("r", r)
							.attr("stroke", "Red")
							.attr("stroke-width", 1)
							.attr("fill", "none")
							.style("stroke-dasharray","none");
		var drawAnnuliB = svg.append("circle")
							.attr("cx", centx)
							.attr("cy", centy)
							.attr("r", r*annulusWidth)
							.attr("stroke", "Red")
							.attr("stroke-width", 1)
							.attr("fill", "none")
							.style("stroke-dasharray","none");*/
		}
	}
	switch (pat.patternType[1][0]) {
		case 1:
			dice(centx,centy,x,y,removable,name);
			break;
		case 2:
			starPetal(centx,centy,x,y,removable,name);
			break;
		case 3:
			spikeRings(centx,centy,x,y,removable,name);
			break;
		case 4:
			boxes(centx,centy,x,y,removable,name);
			break;
		case 5:
			triangles(centx,centy,x,y,removable,name);
			break;
		case 6:
			boxLines(centx,centy,x,y,removable,name);
			break;
		default:
			break;
	}
}
function answerShape(centx,centy,x,removable,name) {
	//	console.error("shape: "+ax+" x: "+x);
	for (var n=0; n < pat.radii.length && n < pat.noAnnuli; n++) {
		var data = [];
		var vertices = pat.answers[x].a[n].polyShape;
		var scale = pat.answers[x].scale;
		var r = pat.radii[n]*pat.answers[x].scale;
		var a = (pat.answers[x].a[n].rotation+pat.rotOffset)*2*Math.PI;
		var LW = (lineThickness)*(pat.radii[pat.answers[x].a[n].lineWidth]+30)/10*scale;
		
		if (pat.usingANYrot) {
			if(pat.includeAnnuli) {
				if (removable) {
					var circle = svg.append("circle")
									.attr("cx", centx+(r+LW/2)*Math.sin(a))
									.attr("cy", centy-(r+LW/2)*Math.cos(a))
									.attr("r", indecatorSize(r,LW))
									.attr("stroke", "none")
									.attr("fill", "LightGray")
									.attr("id", name);    
				} else {
					var circle = svg.append("circle")
									.attr("cx", centx+(r+LW/2)*Math.sin(a))
									.attr("cy", centy-(r+LW/2)*Math.cos(a))
									.attr("r", indecatorSize(r,LW))
									.attr("stroke", "none")
									.attr("fill", "LightGray");    
				}  
			} else {
				if (removable) {
					var circle = svg.append("circle")
									.attr("cx", centx+(r-LW/2)*Math.sin(a))
									.attr("cy", centy-(r-LW/2)*Math.cos(a))
									.attr("r", indecatorSize(r*2/3,LW))
									.attr("stroke", "none")
									.attr("fill", "LightGray")
									.attr("id", name);   
					var square = svg.append("path")
									.attr("d", polyFunction([{"x": centx+(r-LW/2)*Math.sin(a-Math.PI/4),
															 "y": centy-(r-LW/2)*Math.cos(a-Math.PI/4)},
															 {"x": centx+(r-LW/2)*Math.sin(a-Math.PI/4+Math.PI/2),
															 "y": centy-(r-LW/2)*Math.cos(a-Math.PI/4+Math.PI/2)},
															 {"x": centx+(r-LW/2)*Math.sin(a-Math.PI/4+Math.PI),
															 "y": centy-(r-LW/2)*Math.cos(a-Math.PI/4+Math.PI)},
															 {"x": centx+(r-LW/2)*Math.sin(a-Math.PI/4+3*Math.PI/2),
															 "y": centy-(r-LW/2)*Math.cos(a-Math.PI/4+3*Math.PI/2)}]))
									.attr("stroke", "LightGray")
									.attr("fill", "White")
									.attr("stroke-width", LW)
									.attr("id", name); 
				} else {
					var circle = svg.append("circle")
									.attr("cx", centx+(r-LW/2)*Math.sin(a))
									.attr("cy", centy-(r-LW/2)*Math.cos(a))
									.attr("r", indecatorSize(r*2/3,LW))
									.attr("stroke", "none")
									.attr("fill", "LightGray"); 
					var square = svg.append("path")
									.attr("d", polyFunction([{"x": centx+(r-LW/2)*Math.sin(a-Math.PI/4),
															 "y": centy-(r-LW/2)*Math.cos(a-Math.PI/4)},
															 {"x": centx+(r-LW/2)*Math.sin(a-Math.PI/4+Math.PI/2),
															 "y": centy-(r-LW/2)*Math.cos(a-Math.PI/4+Math.PI/2)},
															 {"x": centx+(r-LW/2)*Math.sin(a-Math.PI/4+Math.PI),
															 "y": centy-(r-LW/2)*Math.cos(a-Math.PI/4+Math.PI)},
															 {"x": centx+(r-LW/2)*Math.sin(a-Math.PI/4+3*Math.PI/2),
															 "y": centy-(r-LW/2)*Math.cos(a-Math.PI/4+3*Math.PI/2)}]))
									.attr("stroke", "LightGray")
									.attr("fill", "White")
									.attr("stroke-width", LW);   
				}  
			}
		} 
		if (pat.includeAnnuli) {
			switch (vertices.length) {
			case 0: // Circle/D0
			//console.log("centx: "+centx+" "+r+" "+Math.sin(a)+ " " +a)
			
		
				if (removable) {
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx)
										.attr("cy", centy)
										.attr("r", r+LW/2)
										.attr("stroke", pat.answers[x].a[n].strokeColour)
										.attr("fill", pat.answers[x].a[n].shade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.answers[x].a[n].dasharray)
										.attr("id", name);
				} else {
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx)
										.attr("cy", centy)
										.attr("r", r+LW/2)
										.attr("stroke", pat.answers[x].a[n].strokeColour)
										.attr("fill", pat.answers[x].a[n].shade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.answers[x].a[n].dasharray);
					}
			
				break;
			case 2:
				for (var i = 0; i < vertices.length; i++) {
					data.push({"x":centx+(r+LW/2)*Math.sin(a+vertices[i]*2*Math.PI),"y":centy-(r+LW/2)*Math.cos(a+vertices[i]*2*Math.PI)})
				}
				var l = data.length;
			
				data.splice(2,0,outerPoint2(data[1].x,data[1].y,centx,centy,r,LW,true));
				data.splice(1,0,outerPoint2(data[0].x,data[0].y,centx,centy,r,LW,false));
			
				console.log(data);
				if (removable) {
					var drawAnnuli = svg.append("path")
										.attr("d", polyFunction(data))
										.attr("stroke", pat.answers[x].a[n].strokeColour)
										.attr("fill", pat.answers[x].a[n].shade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.answers[x].a[n].dasharray)
										.attr("id", name);
				} else { 
					var drawAnnuli = svg.append("path")
										.attr("d", polyFunction(data))
										.attr("stroke", pat.answers[x].a[n].strokeColour)
										.attr("fill", pat.answers[x].a[n].shade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.answers[x].a[n].dasharray);
				}
				break;
			default: // DX 
				for (var i = 0; i < vertices.length; i++) {
					data.push({"x":centx+(r+LW/2)*Math.sin(a+vertices[i]*2*Math.PI),"y":centy-(r+LW/2)*Math.cos(a+vertices[i]*2*Math.PI)})
				}
				data.push({"x":centx+(r+LW/2)*Math.sin(a+vertices[0]*2*Math.PI),"y":centy-(r+LW/2)*Math.cos(a+vertices[0]*2*Math.PI)})
				var l = data.length;
				for (var m=l-1;m>0;m--) {
					data.splice(m,0,outerPoint(data[m-1].x,data[m-1].y,data[m].x,data[m].y,centx,centy,r,LW));
				}
				data.pop();	
				if (removable) {
					var drawAnnuli = svg.append("path")
										.attr("d", polyFunction(data))
										.attr("stroke", pat.answers[x].a[n].strokeColour)
										.attr("fill", pat.answers[x].a[n].shade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.answers[x].a[n].dasharray)
										.attr("id", name);
				} else { 
					var drawAnnuli = svg.append("path")
										.attr("d", polyFunction(data))
										.attr("stroke", pat.answers[x].a[n].strokeColour)
										.attr("fill", pat.answers[x].a[n].shade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.answers[x].a[n].dasharray);
				}			
			}
		/*var drawAnnuliB = svg.append("circle")
							.attr("cx", centx)
							.attr("cy", centy)
							.attr("r", r)
							.attr("stroke", "Red")
							.attr("stroke-width", 1)
							.attr("fill", "none")
							.style("stroke-dasharray","none");
		var drawAnnuliB = svg.append("circle")
							.attr("cx", centx)
							.attr("cy", centy)
							.attr("r", r*annulusWidth)
							.attr("stroke", "Red")
							.attr("stroke-width", 1)
							.attr("fill", "none")
							.style("stroke-dasharray","none");*/
		}
	}
	switch (pat.patternType[1][0]) {
		case 1:
			answerDice(centx,centy,x,removable,name);
			break;
		case 2:
			answerStarPetal(centx,centy,x,removable,name);
			break;
		case 3:
			answerSpikeRings(centx,centy,x,removable,name);
			break;
		case 4:
			answerBoxes(centx,centy,x,removable);
			break;
		case 5:
			answerTriangles(centx,centy,x,removable,name);
			break;
		case 6:
			answerBoxLines(centx,centy,x,removable,name);
			break;
		default:
			break;
	}
}
//13-main.js:
//
//
// 13-main.js
//
//
// Math.seedrandom(""+0);

function draw1() {
	svg = d3.select("#thirdpartyDiv")
			.append("svg:svg")
			.attr("width", w)
			.attr("height", (h+lineThickness*10))
			.attr("id", "myCanvas");		
	var answerBackground = svg.append("rect")
					.attr("x",w-iconSizeX*2)
					.attr("y",0)
					.attr("width",iconSizeX*2)
					.attr("height",h)
					.attr("fill","Azure");
	var line = svg.append("line")
			  .attr("y1",h+lineThickness*10/2)
			  .attr("y2",h+lineThickness*10/2)
			  .attr("x1",0)
			  .attr("x2",w)
			  .attr("stroke-width", lineThickness*10)
			  .attr("stroke", "black");
	var progressBar = svg.append("line")
					 .attr("y1",h+lineThickness*10/2)
					 .attr("y2",h+lineThickness*10/2)
					 .attr("x1",w*difficulty/maxDifficulty+4)
					 .attr("x2",2)
					 .attr("stroke-width", lineThickness*6)
					 .attr("stroke", "DarkGray");
}
function draw2() {
	skipButton (w-iconSizeX,0);
	for (var i=0, y=0; y < maxG ; y++) {
		for (var x=0;x < maxG ;x++) {
			if (x != pat.v[0] || y != pat.v[1]) {
				if (pat.vis[x][y])
					Icon(0,x,y);
				else {
					var answer = svg.append("image")
								.attr("xlink:href",pathPrefix + "/img/corvus/paperOver.jpg")
								.attr("x", x*aw/maxG+aw/(maxG*2)-cx*2)//4/2)
								.attr("y", y*ah/maxG+ah/(maxG*2)-cx*2)//4/2)
								.attr("width", cx*4)
								.attr("height", cy*4)
								.attr("id", "paperOver");
				}
			} else {
				var answer = svg.append("image")
								.attr("xlink:href",pathPrefix + "/img/corvus/images.png")
								.attr("x", x*aw/maxG+aw/(maxG*2)-cx)
								.attr("y", y*ah/maxG+ah/(maxG*2)-cx)
								.attr("width", cx*2)
								.attr("height", cy*2)
								.attr("id", "missingElement");
			}
			i++;
		}
	}
}
function draw3() {
	var An = 2;
	for (var x=0;x < pat.nAnswers; x++) {
			if (x==answerVal) {
				Icon(1,x,null);
			} else {
				Icon(An,x,null);
				An++;
			}
	}
}

function runScript() {
  $('#thirdpartyCanvas').remove();
main(); };
//$(document).ready(main());

//$(document).ready(main());
function main() {
	questionsAsked[5].push([[],[]]);
	console.log(questionsAsked);
	//difficulty = questionsAsked[1].length;
	if (difficulty >= maxDifficulty && currentSet < mouseOrder.length-1) {
		currentSet++;
		difficulty = 0;
	} 
	function testItem () {
		if (difficulty >= maxDifficulty && currentSet >= mouseOrder.length-1) {
			d3.select("#thirdpartyDiv")
				  //.append("p")
				  //.attr("id", "version")
				  //.text("v0.6.2")
				  .append("p")
				  .attr("id", "thanks")
				  .html("<font size=\"15\">Thank you very much for participating!</font>");
			var dFinished = new Date();
			questionsAsked.push(dFinished.getTime());
			/*d3.select("body")
				 .append("p")
				 .attr("id", "results1")
				 .html(document.title+": </br>{startTime: "+questionsAsked[0]+","+
				  "</br>onLoad: ["+questionsAsked[1]+"],"+
				  "</br>onClick: ["+questionsAsked[2]+"],"+
				  "</br>correct: ["+questionsAsked[3]+"],"+
				  "</br>answerClicked: ["+questionsAsked[4]+"],"+
				  "</br>endTime: "+questionsAsked[5]+"}");*/
			dataToSubmit = {"version" : "v0.8.6 ", "startTime" : questionsAsked[0],
			"onLoad" : [questionsAsked[1]],
			"onClick" : [questionsAsked[2]],
			"mouseOver" : [questionsAsked[5]],
			"mouseOrder" : mouseOrder,
			"correct" : [questionsAsked[3]],
			"answerClicked" : [questionsAsked[4]],
			"endTime" : questionsAsked[6]};


			console.log(dataToSubmit);
			finishScript(dataToSubmit);
		} else {
			var correctAnswers = 0;
			for (var i = 0; i < questionsAsked[3].length; i++) {
				correctAnswers += questionsAsked[3][i];
			}
			function nC(number) {
				var text = "-";
				number = Math.floor(number/10);
				while (number > 0) {
					text = text.concat("-");
					number = Math.floor(number/10);
				}
				return text;
			}
			console.log(nC(difficulty)+nC(difficulty)+nC(difficulty)+"—————————-———--———————-———--———--—----—————-————————————");
			console.log("————————————"+difficulty+"————-—---———————"+difficulty+"————-—--——-—————"+difficulty+"————————————");
			console.log(nC(difficulty)+nC(difficulty)+nC(difficulty)+"——————————-—--————————-—————--————------———-————————————");
	
			// 'canvas'
			draw1();
	
			/*d3.select("#thirdpartyDiv")
				  .append("p")
				  .attr("id", "myQuestions")
				  .text("Questions asked: " + questionsAsked[1].length
						+" out of " + maxDifficulty
						+" ——— Correct answers: " + correctAnswers);*/
			//$.cookie("asked", parseInt($.cookie("asked"))+1, { path: '/' });
		
		
			pat = new choosePattern();
		
			//console.log("Radii: "+ radii);
			propertyStorage[8].push(pat.nAnswers);
		
		
			//var missingIcon = Math.floor(Math.random()*maxG*maxG);
			// Draw question icons
			draw2();

			// The answer
			answerVal = Math.floor(Math.random()*pat.nAnswers);
			propertyStorage[2].push(answerVal);
			// Not answers!
			// Draw answer icons
			draw3();
		
			var dGenerated = new Date();
			questionsAsked[1].push(dGenerated.getTime());
		}
		difficulty++;
	
			// For DEBUGGING & TESTING
			/*d3.select("#thirdpartyDiv")
				  .append("p")
				  .attr("id", "skipText")
				  .html("<font size=\"2\">Question: "+difficulty);*/
	}
	if (difficulty == 0) {
		var MOText = "";
		switch (mouseOrder[currentSet]) {
			case 0:
				MOText = "<b>active</b> and the options are otherwise <b>visible</b>";
				break;
			case 1:
				MOText = "<b>deactive</b> and the options are <b>visible</b>";
				break;
			case 2:
				MOText = "<b>active</b> and the options are otherwise <b>hidden</b>";
				break;
			default:
				console.error("Unknown mouseOrder");
		}
		d3.select("#thirdpartyDiv")
				  .append("p")
				  .attr("id", "newSet")
				  .html("<font size=\"5\"><br/><br/><br/><center>Beginning set "+(currentSet+1)+"<br/>The Mouse-over functionality is "+MOText+"<center></font>");
			
		setTimeout(function() {
			d3.select("#newSet").remove();
			testItem();}, 3000)
	} else {
		testItem();
	}
}