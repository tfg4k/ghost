/*!
 Lo-Dash 0.9.1 lodash.com/license
 Underscore.js 1.4.2 underscorejs.org/LICENSE
*/
;(function(e,t){function s(e){if(e&&e.__wrapped__)return e;if(!(this instanceof s))return new s(e);this.__wrapped__=e}function o(e,t,n){t||(t=0);var r=e.length,i=r-t>=(n||Q),s=i?{}:e;if(i)for(n=t-1;++n<r;){var o=e[n]+"";(dt.call(s,o)?s[o]:s[o]=[]).push(e[n])}return function(e){if(i){var n=e+"";return dt.call(s,n)&&-1<j(s[n],e)}return-1<j(s,e,t)}}function u(e,n){var r=e.b,i=n.b,e=e.a,n=n.a;if(e!==n){if(e>n||e===t)return 1;if(e<n||n===t)return-1}return r<i?-1:1}function a(e,t,n){function r(){var u=arguments
,a=s?this:t;return i||(e=t[o]),n.length&&(u=u.length?n.concat(gt.call(u)):n),this instanceof r?(p.prototype=e.prototype,a=new p,(u=e.apply(a,u))&&$t[typeof u]?u:a):e.apply(a,u)}var i=S(e),s=!n,o=e;return s&&(n=t),r}function f(e,n){return e?"function"!=typeof e?function(t){return t[e]}:n!==t?function(t,r,i){return e.call(n,t,r,i)}:e:U}function l(){for(var e={b:"",c:"",e:Ht,f:Xt,g:"",h:Ft,i:Rt,j:ft,k:"",l:n},t,r=0;t=arguments[r];r++)for(var i in t)e[i]=t[i];t=e.a,e.d=/^[^,]+/.exec(t)[0],r="var h,w,j="+
e.d+",r="+e.d+";if(!"+e.d+")return r;"+e.k+";",e.b?(r+="var k=j.length;h=-1;if(typeof k=='number'){",e.i&&(r+="if(v.call(j)==t){j=j.split('')}"),r+="while(++h<k){w=j[h];"+e.b+"}}else {"):e.h&&(r+="var k=j.length;h=-1;if(k&&i(j)){while(++h<k){w=j[h+=''];"+e.g+"}}else {"),e.e||(r+="var s=typeof j=='function'&&q.call(j,'prototype');");if(e.f&&e.l)r+="var o=-1,p=n[typeof j]?l(j):[],k=p.length;while(++o<k){h=p[o];",e.e||(r+="if(!(s&&h=='prototype')){"),r+="w=j[h];"+e.g+"",e.e||(r+="}");else{r+="for(h in j){"
;if(!e.e||e.l)r+="if(",e.e||(r+="!(s&&h=='prototype')"),!e.e&&e.l&&(r+="&&"),e.l&&(r+="g.call(j,h)"),r+="){";r+="w=j[h];"+e.g+";";if(!e.e||e.l)r+="}"}r+="}";if(e.e){r+="var f=j.constructor;";for(i=0;7>i;i++)r+="h='"+e.j[i]+"';if(","constructor"==e.j[i]&&(r+="!(f&&f.prototype===j)&&"),r+="g.call(j,h)){w=j[h];"+e.g+"}"}if(e.b||e.h)r+="}";return r+=e.c+";return r",Function("e,g,i,n,l,q,t,v","return function("+t+"){"+r+"}")(f,dt,v,$t,xt,mt,Pt,yt)}function c(e){return"\\"+Jt[e]}function h(e){return en
[e]}function p(){}function d(e){return tn[e]}function v(e){return yt.call(e)==kt}function m(e){var t=i;if(!e||"object"!=typeof e||v(e))return t;var n=e.constructor;return(!Ut||"function"==typeof e.toString||"string"!=typeof (e+""))&&(!S(n)||n instanceof n)?Bt?(Yt(e,function(e,n,r){return t=!dt.call(r,n),i}),t===i):(Yt(e,function(e,n){t=n}),t===i||dt.call(e,t)):t}function g(e){var t=[];return Zt(e,function(e,n){t.push(n)}),t}function y(e,t,n,s,o){if(e==r)return e;n&&(t=i);if(n=$t[typeof e]){var u=
yt.call(e);if(!Vt[u]||It&&v(e))return e;var a=u==Lt,n=a||(u==_t?on(e):n)}if(!n||!t)return n?a?gt.call(e):rn({},e):e;n=e.constructor;switch(u){case At:case Ot:return new n(+e);case Mt:case Pt:return new n(e);case Dt:return n(e.source,rt.exec(e))}s||(s=[]),o||(o=[]);for(u=s.length;u--;)if(s[u]==e)return o[u];var f=a?n(e.length):{};return s.push(e),o.push(f),(a?an:Zt)(e,function(e,n){f[n]=y(e,t,r,s,o)}),f}function b(e){var t=[];return Yt(e,function(e,n){S(e)&&t.push(n)}),t.sort()}function w(e){var t=
{};return Zt(e,function(e,n){t[e]=n}),t}function E(e,t,s,o){if(e===t)return 0!==e||1/e==1/t;if(e==r||t==r)return e===t;var u=yt.call(e);if(u!=yt.call(t))return i;switch(u){case At:case Ot:return+e==+t;case Mt:return e!=+e?t!=+t:0==e?1/e==1/t:e==+t;case Dt:case Pt:return e==t+""}var a=u==Lt||u==kt;if(It&&!a&&(a=v(e))&&!v(t))return i;if(!a){if(e.__wrapped__||t.__wrapped__)return E(e.__wrapped__||e,t.__wrapped__||t);if(u!=_t||Ut&&("function"!=typeof e.toString&&"string"==typeof (e+"")||"function"!=typeof 
t.toString&&"string"==typeof (t+"")))return i;var u=e.constructor,f=t.constructor;if(u!=f&&(!S(u)||!(u instanceof u&&S(f)&&f instanceof f)))return i}s||(s=[]),o||(o=[]);for(u=s.length;u--;)if(s[u]==e)return o[u]==t;var u=-1,f=n,l=0;s.push(e),o.push(t);if(a){l=e.length;if(f=l==t.length)for(;l--&&(f=E(e[l],t[l],s,o)););return f}for(var c in e)if(dt.call(e,c)&&(l++,!dt.call(t,c)||!E(e[c],t[c],s,o)))return i;for(c in t)if(dt.call(t,c)&&!(l--))return i;if(Ht)for(;7>++u;)if(c=ft[u],dt.call(e,c)&&(!dt.call
(t,c)||!E(e[c],t[c],s,o)))return i;return n}function S(e){return"function"==typeof e}function x(e,t,n){var i=arguments,s=0,o=2,u=i[3],a=i[4];n!==K&&(u=[],a=[],o=i.length);for(;++s<o;)Zt(i[s],function(t,n){var i,s,o;if(t&&((s=sn(t))||on(t))){for(var f=u.length;f--;)if(i=u[f]==t)break;i?e[n]=a[f]:(u.push(t),a.push(o=(o=e[n],s)?sn(o)?o:[]:on(o)?o:{}),e[n]=x(o,t,K,u,a))}else t!=r&&(e[n]=t)});return e}function T(e){var t=[];return Zt(e,function(e){t.push(e)}),t}function N(e,t){return"number"==typeof (
e?e.length:0)?-1<(yt.call(e)==Pt?e.indexOf(t):j(e,t)):P(e,function(e){return e===t})}function C(e,t,r){var i=n,t=f(t,r);return an(e,function(e,n,r){return i=!!t(e,n,r)}),i}function k(e,t,n){var r=[],t=f(t,n);return an(e,function(e,n,i){t(e,n,i)&&r.push(e)}),r}function L(e,t,r){var i,t=f(t,r);return P(e,function(e,r,s){return t(e,r,s)&&(i=e,n)}),i}function A(e,t,n){var r=-1,i=e?e.length:0,s=Array("number"==typeof i?i:0),t=f(t,n);if(sn(e))for(;++r<i;)s[r]=t(e[r],r,e);else an(e,function(e,n,i){s[++r
]=t(e,n,i)});return s}function O(e,t,n){var r=-Infinity,i=-1,s=e?e.length:0,o=r;if(t||"number"!=typeof s)t=f(t,n),an(e,function(e,n,i){n=t(e,n,i),n>r&&(r=n,o=e)});else for(;++i<s;)e[i]>o&&(o=e[i]);return o}function M(e,t){var n=[];return an(e,function(e){n.push(e[t])}),n}function _(e,t,n,r){var s=3>arguments.length,t=f(t,r);return an(e,function(e,r,o){n=s?(s=i,e):t(n,e,r,o)}),n}function D(e,t,n,r){var s=e,o=e?e.length:0,u=3>arguments.length;if("number"!=typeof o)var a=un(e),o=a.length;else Rt&&yt
.call(e)==Pt&&(s=e.split(""));return an(e,function(e,f,l){f=a?a[--o]:--o,n=u?(u=i,s[f]):t.call(r,n,s[f],f,l)}),n}function P(e,t,n){var r,t=f(t,n);return an(e,function(e,n,i){return!(r=t(e,n,i))}),!!r}function H(e,t,n){if(e)return t==r||n?e[0]:gt.call(e,0,t)}function B(e,t){for(var n=-1,r=e?e.length:0,i=[];++n<r;){var s=e[n];sn(s)?vt.apply(i,t?s:B(s)):i.push(s)}return i}function j(e,t,n){var r=-1,i=e?e.length:0;if("number"==typeof n)r=(0>n?Tt(0,i+n):n||0)-1;else if(n)return r=I(e,t),e[r]===t?r:-1;
for(;++r<i;)if(e[r]===t)return r;return-1}function F(e,t,n){return e?gt.call(e,t==r||n?1:t):[]}function I(e,t,n,r){for(var i=0,s=e?e.length:i,n=n?f(n,r):U,t=n(t);i<s;)r=i+s>>>1,n(e[r])<t?i=r+1:s=r;return i}function q(e,t,n,r){var s=-1,o=e?e.length:0,u=[],a=u;"function"==typeof t&&(r=n,n=t,t=i),n&&(a=[],n=f(n,r));for(;++s<o;){var r=e[s],l=n?n(r,s,e):r;if(t?!s||a[a.length-1]!==l:0>j(a,l))n&&a.push(l),u.push(r)}return u}function R(e,t){return Wt||bt&&2<arguments.length?bt.call.apply(bt,arguments):a(
e,t,gt.call(arguments,2))}function U(e){return e}function z(e){an(b(e),function(t){var r=s[t]=e[t];s.prototype[t]=function(){var e=[this.__wrapped__];return vt.apply(e,arguments),e=r.apply(s,e),this.__chain__&&(e=new s(e),e.__chain__=n),e}})}var n=!0,r=null,i=!1,W="object"==typeof exports&&exports,X="object"==typeof global&&global;X.global===X&&(e=X);var V=[],$={},J=0,K={},Q=30,G=e._,Y=/[-?+=!~*%&^<>|{(\/]|\[\D|\b(?:delete|in|instanceof|new|typeof|void)\b/,Z=/&(?:amp|lt|gt|quot|#x27);/g,et=/\b__p\+='';/g
,tt=/\b(__p\+=)''\+/g,nt=/(__e\(.*?\)|\b__t\))\+'';/g,rt=/\w*$/,it=/(?:__e|__t=)\(\s*(?![\d\s"']|this\.)/g,st=RegExp("^"+($.valueOf+"").replace(/[.*+?^=!:${}()|[\]\/\\]/g,"\\$&").replace(/valueOf|for [^\]]+/g,".+?")+"$"),ot=/($^)/,ut=/[&<>"']/g,at=/['\n\r\t\u2028\u2029\\]/g,ft="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),lt=Math.ceil,ct=V.concat,ht=Math.floor,pt=st.test(pt=Object.getPrototypeOf)&&pt,dt=$.hasOwnProperty,vt=V.push,mt=$.propertyIsEnumerable
,gt=V.slice,yt=$.toString,bt=st.test(bt=gt.bind)&&bt,wt=st.test(wt=Array.isArray)&&wt,Et=e.isFinite,St=e.isNaN,xt=st.test(xt=Object.keys)&&xt,Tt=Math.max,Nt=Math.min,Ct=Math.random,kt="[object Arguments]",Lt="[object Array]",At="[object Boolean]",Ot="[object Date]",Mt="[object Number]",_t="[object Object]",Dt="[object RegExp]",Pt="[object String]",Ht,Bt,jt=(jt={0:1,length:1},V.splice.call(jt,0,1),jt[0]),Ft=n;(function(){function e(){this.x=1}var t=[];e.prototype={valueOf:1,y:1};for(var n in new e
)t.push(n);for(n in arguments)Ft=!n;Ht=!/valueOf/.test(t),Bt="x"!=t[0]})(1);var It=!v(arguments),qt="x"!=gt.call("x")[0],Rt="xx"!="x"[0]+Object("x")[0];try{var Ut=("[object Object]",yt.call(e.document||0)==_t)}catch(zt){}var Wt=bt&&/\n|Opera/.test(bt+yt.call(e.opera)),Xt=xt&&/^.+$|true/.test(xt+!!e.attachEvent),Vt={};Vt[kt]=Vt["[object Function]"]=i,Vt[Lt]=Vt[At]=Vt[Ot]=Vt[Mt]=Vt[_t]=Vt[Dt]=Vt[Pt]=n;var $t={"boolean":i,"function":n,object:n,number:i,string:i,"undefined":i},Jt={"\\":"\\","'":"'","\n"
:"n","\r":"r","	":"t","\u2028":"u2028","\u2029":"u2029"};s.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,variable:""};var Kt={a:"d,c,u",k:"c=e(c,u)",b:"if(c(w,h,d)===false)return r",g:"if(c(w,h,d)===false)return r"},Qt={l:i,a:"m",k:"for(var a=1,b=arguments.length;a<b;a++){if(j=arguments[a]){",g:"r[h]=w",c:"}}"},Gt={b:r};It&&(v=function(e){return e?dt.call(e,"callee"):i});var Yt=l(Kt,Gt,{l:i}),Zt=l(Kt,Gt),en={"&":"&amp;","<":"&lt;",">":"&gt;"
,'"':"&quot;","'":"&#x27;"},tn=w(en),nn=l(Qt,{g:"if(r[h]==null)"+Qt.g}),rn=l(Qt),sn=wt||function(e){return yt.call(e)==Lt};S(/x/)&&(S=function(e){return"[object Function]"==yt.call(e)});var on=pt?function(e){if(!e||"object"!=typeof e)return i;var t=e.valueOf,n="function"==typeof t&&(n=pt(t))&&pt(n);return n?e==n||pt(e)==n&&!v(e):m(e)}:m,un=xt?function(e){var t=typeof e;return"function"==t&&mt.call(e,"prototype")?g(e):e&&$t[t]?xt(e):[]}:g,an=l(Kt);s.VERSION="0.9.1",s.after=function(e,t){return 1>e?
t():function(){if(1>--e)return t.apply(this,arguments)}},s.bind=R,s.bindAll=function(e){for(var t=arguments,n=1<t.length?0:(t=b(e),-1),r=t.length;++n<r;){var i=t[n];e[i]=R(e[i],e)}return e},s.chain=function(e){return e=new s(e),e.__chain__=n,e},s.clone=y,s.compact=function(e){for(var t=-1,n=e?e.length:0,r=[];++t<n;){var i=e[t];i&&r.push(i)}return r},s.compose=function(){var e=arguments;return function(){for(var t=arguments,n=e.length;n--;)t=[e[n].apply(this,t)];return t[0]}},s.contains=N,s.countBy=
function(e,t,n){var r={},t=f(t,n);return an(e,function(e,n,i){n=t(e,n,i),dt.call(r,n)?r[n]++:r[n]=1}),r},s.debounce=function(e,t,n){function i(){a=r,n||(o=e.apply(u,s))}var s,o,u,a;return function(){var r=n&&!a;return s=arguments,u=this,clearTimeout(a),a=setTimeout(i,t),r&&(o=e.apply(u,s)),o}},s.defaults=nn,s.defer=function(e){var n=gt.call(arguments,1);return setTimeout(function(){e.apply(t,n)},1)},s.delay=function(e,n){var r=gt.call(arguments,2);return setTimeout(function(){e.apply(t,r)},n)},s.
difference=function(e){for(var t=-1,n=e?e.length:0,r=ct.apply(V,arguments),r=o(r,n),i=[];++t<n;){var s=e[t];r(s)||i.push(s)}return i},s.escape=function(e){return e==r?"":(e+"").replace(ut,h)},s.every=C,s.extend=rn,s.filter=k,s.find=L,s.first=H,s.flatten=B,s.forEach=an,s.forIn=Yt,s.forOwn=Zt,s.functions=b,s.groupBy=function(e,t,n){var r={},t=f(t,n);return an(e,function(e,n,i){n=t(e,n,i),(dt.call(r,n)?r[n]:r[n]=[]).push(e)}),r},s.has=function(e,t){return e?dt.call(e,t):i},s.identity=U,s.indexOf=j,s
.initial=function(e,t,n){return e?gt.call(e,0,-(t==r||n?1:t)):[]},s.intersection=function(e){var t=arguments,n=t.length,r={},i=[];return an(e,function(e){if(0>j(i,e)){for(var s=n;--s;)if(!(r[s]||(r[s]=o(t[s])))(e))return;i.push(e)}}),i},s.invert=w,s.invoke=function(e,t){var n=gt.call(arguments,2),r="function"==typeof t,i=[];return an(e,function(e){i.push((r?t:e[t]).apply(e,n))}),i},s.isArguments=v,s.isArray=sn,s.isBoolean=function(e){return e===n||e===i||yt.call(e)==At},s.isDate=function(e){return yt
.call(e)==Ot},s.isElement=function(e){return e?1===e.nodeType:i},s.isEmpty=function(e){var t=n;if(!e)return t;var r=yt.call(e),s=e.length;return r==Lt||r==Pt||r==kt||It&&v(e)||r==_t&&"number"==typeof s&&S(e.splice)?!s:(Zt(e,function(){return t=i}),t)},s.isEqual=E,s.isFinite=function(e){return Et(e)&&!St(parseFloat(e))},s.isFunction=S,s.isNaN=function(e){return yt.call(e)==Mt&&e!=+e},s.isNull=function(e){return e===r},s.isNumber=function(e){return yt.call(e)==Mt},s.isObject=function(e){return e?$t
[typeof e]:i},s.isPlainObject=on,s.isRegExp=function(e){return yt.call(e)==Dt},s.isString=function(e){return yt.call(e)==Pt},s.isUndefined=function(e){return e===t},s.keys=un,s.last=function(e,t,n){if(e){var i=e.length;return t==r||n?e[i-1]:gt.call(e,-t||i)}},s.lastIndexOf=function(e,t,n){var r=e?e.length:0;for("number"==typeof n&&(r=(0>n?Tt(0,r+n):Nt(n,r-1))+1);r--;)if(e[r]===t)return r;return-1},s.lateBind=function(e,t){return a(t,e,gt.call(arguments,2))},s.map=A,s.max=O,s.memoize=function(e,t)
{var n={};return function(){var r=t?t.apply(this,arguments):arguments[0];return dt.call(n,r)?n[r]:n[r]=e.apply(this,arguments)}},s.merge=x,s.min=function(e,t,n){var r=Infinity,i=-1,s=e?e.length:0,o=r;if(t||"number"!=typeof s)t=f(t,n),an(e,function(e,n,i){n=t(e,n,i),n<r&&(r=n,o=e)});else for(;++i<s;)e[i]<o&&(o=e[i]);return o},s.mixin=z,s.noConflict=function(){return e._=G,this},s.object=function(e,t){for(var n=-1,r=e?e.length:0,i={};++n<r;){var s=e[n];t?i[s]=t[n]:i[s[0]]=s[1]}return i},s.omit=function(
e,t,n){var r="function"==typeof t,i={};if(r)t=f(t,n);else var s=ct.apply(V,arguments);return Yt(e,function(e,n,o){if(r?!t(e,n,o):0>j(s,n,1))i[n]=e}),i},s.once=function(e){var t,s=i;return function(){return s?t:(s=n,t=e.apply(this,arguments),e=r,t)}},s.pairs=function(e){var t=[];return Zt(e,function(e,n){t.push([n,e])}),t},s.partial=function(e){return a(e,gt.call(arguments,1))},s.pick=function(e,t,n){var r={};if("function"!=typeof t)for(var i=0,s=ct.apply(V,arguments),o=s.length;++i<o;){var u=s[i]
;u in e&&(r[u]=e[u])}else t=f(t,n),Yt(e,function(e,n,i){t(e,n,i)&&(r[n]=e)});return r},s.pluck=M,s.random=function(e,t){return e==r&&t==r&&(t=1),e=+e||0,t==r&&(t=e,e=0),e+ht(Ct()*((+t||0)-e+1))},s.range=function(e,t,n){e=+e||0,n=+n||1,t==r&&(t=e,e=0);for(var i=-1,t=Tt(0,lt((t-e)/n)),s=Array(t);++i<t;)s[i]=e,e+=n;return s},s.reduce=_,s.reduceRight=D,s.reject=function(e,t,n){return t=f(t,n),k(e,function(e,n,r){return!t(e,n,r)})},s.rest=F,s.result=function(e,t){var n=e?e[t]:r;return S(n)?e[t]():n},s
.shuffle=function(e){var t=-1,n=Array(e?e.length:0);return an(e,function(e){var r=ht(Ct()*(++t+1));n[t]=n[r],n[r]=e}),n},s.size=function(e){var t=e?e.length:0;return"number"==typeof t?t:un(e).length},s.some=P,s.sortBy=function(e,t,n){var r=[],t=f(t,n);an(e,function(e,n,i){r.push({a:t(e,n,i),b:n,c:e})}),e=r.length;for(r.sort(u);e--;)r[e]=r[e].c;return r},s.sortedIndex=I,s.tap=function(e,t){return t(e),e},s.template=function(e,t,n){e||(e=""),n||(n={});var r,i,o=0,u=s.templateSettings,a="__p += '",f=
n.variable||u.variable,l=f;e.replace(RegExp((n.escape||u.escape||ot).source+"|"+(n.interpolate||u.interpolate||ot).source+"|"+(n.evaluate||u.evaluate||ot).source+"|$","g"),function(t,n,i,s,u){a+=e.slice(o,u).replace(at,c),a+=n?"'+__e("+n+")+'":s?"';"+s+";__p+='":i?"'+((__t=("+i+"))==null?'':__t)+'":"",r||(r=s||Y.test(n||i)),o=u+t.length}),a+="';",l||(f="obj",r?a="with("+f+"){"+a+"}":(n=RegExp("(\\(\\s*)"+f+"\\."+f+"\\b","g"),a=a.replace(it,"$&"+f+".").replace(n,"$1__d"))),a=(r?a.replace(et,""):a)
.replace(tt,"$1").replace(nt,"$1;"),a="function("+f+"){"+(l?"":f+"||("+f+"={});")+"var __t,__p='',__e=_.escape"+(r?",__j=[].join;function print(){__p+=__j.call(arguments,'')}":(l?"":",__d="+f+"."+f+"||"+f)+";")+a+"return __p}";try{i=Function("_","return "+a)(s)}catch(h){throw h.source=a,h}return t?i(t):(i.source=a,i)},s.throttle=function(e,t){function n(){a=new Date,u=r,s=e.apply(o,i)}var i,s,o,u,a=0;return function(){var r=new Date,f=t-(r-a);return i=arguments,o=this,0>=f?(clearTimeout
(u),a=r,s=e.apply(o,i)):u||(u=setTimeout(n,f)),s}},s.times=function(e,t,n){for(var e=+e||0,r=-1,i=Array(e);++r<e;)i[r]=t.call(n,r);return i},s.toArray=function(e){return e&&"number"==typeof e.length?(qt?yt.call(e)==Pt:"string"==typeof e)?e.split(""):gt.call(e):T(e)},s.unescape=function(e){return e==r?"":(e+"").replace(Z,d)},s.union=function(){return q(ct.apply(V,arguments))},s.uniq=q,s.uniqueId=function(e){var t=J++;return e?e+t:t},s.values=T,s.where=function(e,t){var n=[];return Yt(t,function(e,
t){n.push(t)}),k(e,function(e){for(var r=n.length;r--;){var i=e[n[r]]===t[n[r]];if(!i)break}return!!i})},s.without=function(e){for(var t=-1,n=e?e.length:0,r=o(arguments,1,20),i=[];++t<n;){var s=e[t];r(s)||i.push(s)}return i},s.wrap=function(e,t){return function(){var n=[e];return vt.apply(n,arguments),t.apply(this,n)}},s.zip=function(e){for(var t=-1,n=e?O(M(arguments,"length")):0,r=Array(n);++t<n;)r[t]=M(arguments,t);return r},s.all=C,s.any=P,s.collect=A,s.detect=L,s.drop=F,s.each=an,s.foldl=_,s.
foldr=D,s.head=H,s.include=N,s.inject=_,s.methods=b,s.select=k,s.tail=F,s.take=H,s.unique=q,z(s),s.prototype.chain=function(){return this.__chain__=n,this},s.prototype.value=function(){return this.__wrapped__},an("pop push reverse shift sort splice unshift".split(" "),function(e){var t=V[e];s.prototype[e]=function(){var e=this.__wrapped__;return t.apply(e,arguments),jt&&e.length===0&&delete e[0],this.__chain__&&(e=new s(e),e.__chain__=n),e}}),an(["concat","join","slice"],function(e){var t=V[e];s.
prototype[e]=function(){var e=t.apply(this.__wrapped__,arguments);return this.__chain__&&(e=new s(e),e.__chain__=n),e}}),typeof define=="function"&&typeof define.amd=="object"&&define.amd?(e._=s,define(function(){return s})):W?"object"==typeof module&&module&&module.exports==W?(module.exports=s)._=s:W._=s:e._=s})(this);