(function(){
shadow$provide[0]=function(b,c,a,d){a.exports=React};
shadow$provide[1]=function(b,c,a,d){a.exports=ReactDOM};
'use strict';var z8=function(a,b){var c=w8[a];if(void 0!==c)return c;try{x8.push(a);var d=y8[a],e=shadow$provide[a];if(void 0===d){if(void 0===e)throw"Module not provided: "+a;d={exports:{}};y8[a]=d}if(e){delete shadow$provide[a];try{e.call(d,$APP.kX,z8,d,d.exports)}catch(l){throw console.warn("shadow-cljs - failed to load",a),l;}if(b){var f=b.globals;if(f)for(a=0;a<f.length;a++)window[f[a]]=d.exports}}}finally{x8.pop()}return d.exports},A8=function(a){return 2>$APP.Je(a)?$APP.fT(a):[$APP.fT($APP.Ch.Lf(a,
0,1)),$APP.Ch.h(a,1)].join("")},C8=function(a){if("string"===typeof a)return a;a=$APP.Wh(a);var b=$APP.jT.h(a,/-/),c=$APP.z(b);b=$APP.r(c);c=$APP.t(c);return $APP.n(B8.g?B8.g(b):B8.call(null,b))?a:$APP.Yb.Lf($APP.q,b,$APP.Yi.h(A8,c))},D8=function(a){var b=function(){var c=function(){var d=$APP.jf(a);if(d){d=a.displayName;if($APP.n(d))return d;d=a.name;return"string"===typeof d&&$APP.z(d)?d:null}return d}();if($APP.n(c))return c;c=function(){var d=null!=a?a.J&4096||$APP.Ua===a.Nd?!0:!1:!1;return d?
$APP.Wh(a):d}();if($APP.n(c))return c;c=$APP.F(a);return $APP.vf(c)?$APP.T.g(c):null}();return $APP.n(b)?$APP.cT($APP.q.g(b),"$","."):null},E8=function(a){return a instanceof $APP.ee||a instanceof $APP.x},G8=function(a){if($APP.vf(a))try{var b=$APP.ce.h(a,F8)}catch(c){b=null}else b=null;return b},H8=function(a){var b=F8.g($APP.F(a));if($APP.n(b))return b;b=G8($APP.B.Lf(a,1,null));if($APP.n(b))return b;b=$APP.B.Lf(a,0,null);switch(b instanceof $APP.ee?b.fb:null){case "\x3e":case "f\x3e":return G8($APP.B.Lf(a,
2,null));case "r\x3e":return a=$APP.B.Lf(a,2,null),null==a?null:a.key;default:return null}},I8=function(a){return setTimeout(a,16)},J8=function(a,b){return a.pf-b.pf},K8=function(){return null},L8=function(a){for(var b=a.length,c=0;;)if(c<b){var d=a[c];d.s?d.s():d.call(null);c+=1}else return null},M8=function(a,b,c){b.push(c);return a.schedule()},N8=function(){this.jf=!1},P8=function(a){if($APP.n(a.cljsIsDirty))return null;a.cljsIsDirty=!0;return O8.queue_render(a)},Q8=function(a){if(null!=a&&null!=
a.If)a=a.id;else{var b=Q8[$APP.pa(null==a?null:a)];if(null!=b)a=b.g?b.g(a):b.call(null,a);else if(b=Q8._,null!=b)a=b.g?b.g(a):b.call(null,a);else throw $APP.Rb("Compiler.get-id",a);}return a},R8=function(a,b){if(null!=a&&null!=a.xf)a=a.xf(a,b);else{var c=R8[$APP.pa(null==a?null:a)];if(null!=c)a=c.h?c.h(a,b):c.call(null,a,b);else if(c=R8._,null!=c)a=c.h?c.h(a,b):c.call(null,a,b);else throw $APP.Rb("Compiler.as-element",a);}return a},S8=function(a,b,c,d,e){if(null!=a&&null!=a.yf)a=a.yf(a,b,c,d,e);else{var f=
S8[$APP.pa(null==a?null:a)];if(null!=f)a=f.I?f.I(a,b,c,d,e):f.call(null,a,b,c,d,e);else if(f=S8._,null!=f)a=f.I?f.I(a,b,c,d,e):f.call(null,a,b,c,d,e);else throw $APP.Rb("Compiler.make-element",a);}return a},U8=function(a,b){b.kf=null;a:{var c=T8;T8=b;try{var d=a.s?a.s():a.call(null);break a}finally{T8=c}d=void 0}a=b.kf;b.bf=!1;a:{c=b.df;var e=null==a?0:a.length,f=e===(null==c?0:c.length);if(f)for(f=0;;){var l=f===e;if(l){c=l;break a}if(a[f]===c[f])f+=1;else{c=!1;break a}}else c=f}c||b._update_watching(a);
return d},V8=function(a){var b=T8;if(null!=b){var c=b.kf;null==c?b.kf=[a]:c.push(a)}},W8=function(a,b,c){a.Bc=$APP.E.Lf(a.Bc,b,c);return a.sf=null},X8=function(a,b){a.Bc=$APP.hf.h(a.Bc,b);return a.sf=null},Y8=function(a,b,c){var d=a.sf;d=null==d?a.sf=$APP.fg(function(p,w,A){p.push(w);p.push(A);return p},[],a.Bc):d;for(var e=d.length,f=0;;)if(f<e){var l=d[f],g=d[f+1];g.B?g.B(l,a,b,c):g.call(null,l,a,b,c);f=2+f}else break},Z8=function(a,b,c,d){$APP.od(a,["#object[reagent.ratom.",$APP.q.g(c)," "].join(""));
a:{c=T8;T8=null;try{var e=d;break a}finally{T8=c}e=void 0}$APP.gn(e,a,b);return $APP.od(a,"]")},$8=function(a,b,c,d){this.state=a;this.D=b;this.Fe=c;this.Bc=d;this.C=2154201088;this.J=114690},a9=function(a){if(null!=a&&null!=a.rf)a=a.rf(a);else{var b=a9[$APP.pa(null==a?null:a)];if(null!=b)a=b.g?b.g(a):b.call(null,a);else if(b=a9._,null!=b)a=b.g?b.g(a):b.call(null,a);else throw $APP.Rb("IDisposable.dispose!",a);}return a},b9=function(a,b,c,d){return a._handle_change(b,c,d)},c9=function(a){this.f=a;
this.state=null;this.bf=!0;this.vf=!1;this.lf=this.af=this.Bc=this.df=null;this.C=2153807872;this.J=114690},e9=function(){for(;;){var a=d9;if(null==a)return null;d9=null;for(var b=a.length,c=0;;)if(c<b)a[c]._queued_run(),c+=1;else break}},i9=function(a){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;c=arguments[0];var e=$APP.Ai(1<b.length?new $APP.Xb(b.slice(1),0,null):null);b=$APP.ce.h(e,f9);d=$APP.ce.h(e,g9);e=$APP.ce.h(e,h9);c=new c9(c);c._set_opts(new $APP.m(null,
3,[f9,b,g9,d,h9,e],null));return c},l9=function(a,b){var c=j9,d=k9,e=U8(a,d);null!=d.df&&(k9=i9(null),d._set_opts(c),d.f=a,d.af=function(){return P8.g?P8.g(b):P8.call(null,b)},b.cljsRatom=d);return e},m9=function(a,b){var c=b.argv;if(null==c){c=$APP.P;a=a.constructor;a:for(var d=$APP.xa(b),e=d.length,f=$APP.Hi,l=0;;)if(l<e){var g=d[l];f=$APP.E.Lf(f,$APP.Vh.g(g),$APP.Aa(b,g));l+=1}else break a;b=new $APP.O(null,2,5,c,[a,f],null)}else b=c;return b},n9=function(a){var b;if(b=$APP.jf(a))a=null==a?null:
a.prototype,b=null!=(null==a?null:a.cf);return b},o9=function(a,b){for(;;){var c=a.cf,d=!0===a.Af?c.call(a,a):function(){var e=m9(a,a.props);switch($APP.Je(e)){case 1:return c.call(a);case 2:return c.call(a,$APP.B.h(e,1));case 3:return c.call(a,$APP.B.h(e,1),$APP.B.h(e,2));case 4:return c.call(a,$APP.B.h(e,1),$APP.B.h(e,2),$APP.B.h(e,3));case 5:return c.call(a,$APP.B.h(e,1),$APP.B.h(e,2),$APP.B.h(e,3),$APP.B.h(e,4));default:return c.apply(a,$APP.cc.g(e).slice(1))}}();if($APP.xf(d))return R8(b,d);
if($APP.If(d))a.cf=n9(d)?function(e,f,l,g,p){return function(){function w(D){var G=null;if(0<arguments.length){G=0;for(var J=Array(arguments.length-0);G<J.length;)J[G]=arguments[G+0],++G;G=new $APP.Xb(J,0,null)}return A.call(this,G)}function A(D){return R8(f,$APP.Yb.Lf($APP.Ck,p,D))}w.o=0;w.Mf=function(D){D=$APP.z(D);return A(D)};w.j=A;return w}()}(a,b,c,null,d):d;else return d}},r9=function(a,b){switch(a instanceof $APP.ee?a.fb:null){case "getDefaultProps":throw Error("getDefaultProps not supported");
case "getDerivedStateFromProps":return function(c,d){var e=b.call,f=c.argv;null!=f&&(c=$APP.B.Lf(f,1,null),c=$APP.vf(c)?c:null);return e.call(b,null,c,d)};case "getInitialState":return function(c){var d=c.Cf;d=null!=d?d:c.Cf=p9.g(null);return $APP.pj(d,b.call(c,c))};case "getSnapshotBeforeUpdate":return function(c,d){return b.call(this,this,m9(this,c),d)};case "componentWillReceiveProps":return function(c){return b.call(this,this,m9(this,c))};case "UNSAFE_componentWillReceiveProps":return function(c){return b.call(this,
this,m9(this,c))};case "shouldComponentUpdate":return function(c){var d=q9;if($APP.n(d))return d;d=this.props.argv;var e=c.argv,f=null==d||null==e;if(null==b){if(f)return f;try{return $APP.Di.h(d,e)}catch(l){return!1}}else return f?b.call(this,this,m9(this,this.props),m9(this,c)):b.call(this,this,d,e)};case "componentWillUpdate":return function(c,d){return b.call(this,this,m9(this,c),d)};case "UNSAFE_componentWillUpdate":return function(c,d){return b.call(this,this,m9(this,c),d)};case "componentDidUpdate":return function(c,
d,e){return b.call(this,this,m9(this,c),d,e)};case "componentWillMount":return function(){return b.call(this,this)};case "UNSAFE_componentWillMount":return function(){return b.call(this,this)};case "componentDidMount":return function(){return b.call(this,this)};case "componentWillUnmount":return function(){var c=$APP.Aa(this,"cljsRatom");null!=c&&a9(c);this.cljsIsDirty=!1;return null==b?null:b.call(this,this)};case "componentDidCatch":return function(c,d){return b.call(this,this,c,d)};default:return null}},
t9=function(a){return $APP.fg(function(b,c,d){return $APP.E.Lf(b,$APP.Vh.g(s9(c)),d)},$APP.Hi,a)},z9=function(a,b){var c=function(){var l=u9.g(a);return $APP.n(l)?l:v9.g(a)}(),d=null==u9.g(a),e=function(){var l=w9.g(a);if($APP.n(l))return l;l=D8(c);return $APP.n(l)?l:$APP.q.g($APP.Cn.g("reagent"))}(),f=$APP.fg(function(l,g,p){var w=$APP.E.Lf,A=r9(g,p);return w.call($APP.E,l,g,$APP.n(A)?A:p)},$APP.Hi,a);return $APP.E.j(f,w9,e,$APP.Pe([x9,d,u9,c,v9,function(){var l=this,g=$APP.Aa(l,"cljsRatom");l.cljsIsDirty=
!1;return null==g?l9(function(){a:{var p=y9;y9=l;try{var w=o9(l,b);break a}finally{y9=p}w=void 0}return w},l):g._run(!1)}]))},A9=function(a){return $APP.fg(function(b,c,d){c=$APP.Wh(c);b[c]=d;return b},{},a)},C9=function(a,b){return z9($APP.em.j($APP.Pe([B9,t9(a)])),b)},H9=function(a,b){function c(g,p,w){e8.Component.call(this,g,p,w);$APP.n(l)&&(l.h?l.h(this,g):l.call(null,this,g));$APP.n(f)&&(this.state=f.g?f.g(this):f.call(null,this));this.pf=E9+=1;return this}a=C9(a,b);b=A9($APP.Yb.j($APP.hf,a,
w9,F9,$APP.sA,$APP.Pe([v9,u9,G9])));var d=A9($APP.im(a,G9)),e=w9.g(a),f=F9.g(a),l=$APP.sA.g(a);$APP.v8(c.prototype,e8.Component.prototype,b);$APP.n(v9.g(a))&&(c.prototype.render=v9.g(a));$APP.n(u9.g(a))&&(c.prototype.cf=u9.g(a));$APP.n(x9.g(a))&&(c.prototype.Af=x9.g(a));$APP.v8(c,e8.Component,d);$APP.n(e)&&(c.displayName=e,c.$c=e,c.ue=function(g){return $APP.od(g,e)});c.Td=!0;return c.prototype.constructor=c},I9=function(a,b,c){a=Q8(a);return b[a]=c},J9=function(a,b){for(;;){var c=b.cf,d=b.argv,e=
$APP.Yb.h(c,d);if($APP.xf(e))return R8(a,e);if($APP.If(e))b.cf=n9(e)?function(f,l,g,p,w,A){return function(){function D(J){var R=null;if(0<arguments.length){R=0;for(var W=Array(arguments.length-0);R<W.length;)W[R]=arguments[R+0],++R;R=new $APP.Xb(W,0,null)}return G.call(this,R)}function G(J){return R8(f,$APP.Yb.Lf($APP.Ck,A,J))}D.o=0;D.Mf=function(J){J=$APP.z(J);return G(J)};D.j=G;return D}()}(a,b,c,null,d,e):e;else return e}},K9=function(a,b){var c=b.argv,d=b.cf;b=e8.useState(0);$APP.B.Lf(b,0,null);
var e=$APP.B.Lf(b,1,null),f=e8.useRef();$APP.n(f.current)||function(){var g={forceUpdate:function(){return e.g?e.g($APP.te):e.call(null,$APP.te)}};g.pf=E9+=1;g.constructor=d;g.cf=d;return f.current=g}();var l=f.current;b=$APP.Aa(l,"cljsRatom");e8.useEffect(function(){return function(){var g=$APP.Aa(l,"cljsRatom");return null==g?null:a9(g)}},[]);l.argv=c;l.cljsIsDirty=!1;return null==b?l9(function(){a:{var g=y9;y9=l;try{var p=J9(a,l);break a}finally{y9=g}p=void 0}return p},l):b._run(!1)},L9=function(a,
b){a=a.argv;b=b.argv;var c=!1===q9;if(c)try{return $APP.fe.h(a,b)}catch(d){return!1}else return c},M9=function(a,b){function c(e){return K9(a,e)}var d=$APP.Aa(b,Q8(a));if($APP.n(d))return d;c.displayName=D8(b);d=e8.memo(c,L9);I9(a,b,d);return d},Q9=function(a,b,c,d){var e=$APP.Ai($APP.Hi);e=$APP.ce.h(e,N9);if(a===document.activeElement&&$APP.H(O9,a.type)&&"string"===typeof b&&"string"===typeof c){var f=a.value;if($APP.Di.h(f,c))return O8.add_after_render(function(){return P9.g?P9.g(d):P9.call(null,
d)});c=$APP.Je(f)-a.selectionStart;c=$APP.Je(b)-c;d.gf=b;a.value=b;$APP.jf(e)&&(e.g?e.g(b):e.call(null,b));a.selectionStart=c;return a.selectionEnd=c}d.gf=b;a.value=b;return $APP.jf(e)?e.g?e.g(b):e.call(null,b):null},P9=function(a){if($APP.n(a.nf)){a.tf=!1;var b=a.Bf,c=a.gf,d=a.qf;return $APP.Di.h(b,c)?Q9(d,b,c,a):null}return null},R9=function(a,b,c){a.gf=c.target.value;$APP.n(a.tf)||(a.tf=!0,O8.add_after_render(function(){return P9(a)}));return b.g?b.g(c):b.call(null,c)},S9=function(a){var b=y9;
if($APP.n(function(){var f=null!=a;return f?(f=a.hasOwnProperty("onChange"),$APP.n(f)?a.hasOwnProperty("value"):f):f}())){var c=a.value;c=null==c?"":c;var d=a.onChange,e=a.ref;$APP.n(b.nf)||(b.nf=!0,b.gf=c);$APP.n(b.zf)||(b.zf=$APP.jf(e)?function(f){b.qf=f;return e.g?e.g(f):e.call(null,f)}:$APP.n($APP.n(e)?e.hasOwnProperty("current"):e)?function(f){b.qf=f;return e.current=f}:function(f){return b.qf=f});b.Bf=c;delete a.value;a.defaultValue=c;a.onChange=function(f){return R9(b,d,f)};a.ref=b.zf}},T9=
function(a,b){return a.hasOwnProperty(b)?$APP.Aa(a,b):null},W9=function(a,b,c){if(E8(b)){var d=T9(U9,$APP.Wh(b));null==d?(d=C8(b),b=$APP.Wh(b),b=U9[b]=d):b=d}c=V9.g?V9.g(c):V9.call(null,c);a[b]=c;return a},V9=function(a){return"object"!==$APP.pa(a)?a:E8(a)?$APP.Wh(a):$APP.vf(a)?$APP.fg(W9,{},a):$APP.qf(a)?$APP.Un(a):$APP.If(a)?function(){function b(d){var e=null;if(0<arguments.length){e=0;for(var f=Array(arguments.length-0);e<f.length;)f[e]=arguments[e+0],++e;e=new $APP.Xb(f,0,null)}return c.call(this,
e)}function c(d){return $APP.Yb.h(a,d)}b.o=0;b.Mf=function(d){d=$APP.z(d);return c(d)};b.j=c;return b}():$APP.Un(a)},Y9=function(a,b,c){if(E8(b)){var d=T9(X9,$APP.Wh(b));null==d?(d=C8(b),b=$APP.Wh(b),b=X9[b]=d):b=d}c=V9(c);a[b]=c;return a},Z9=function(a){return"object"!==$APP.pa(a)?a:E8(a)?$APP.Wh(a):$APP.vf(a)?$APP.fg(Y9,{},a):$APP.qf(a)?$APP.Un(a):$APP.If(a)?function(){function b(d){var e=null;if(0<arguments.length){e=0;for(var f=Array(arguments.length-0);e<f.length;)f[e]=arguments[e+0],++e;e=new $APP.Xb(f,
0,null)}return c.call(this,e)}function c(d){return $APP.Yb.h(a,d)}b.o=0;b.Mf=function(d){d=$APP.z(d);return c(d)};b.j=c;return b}():$APP.Un(a)},$9=function(a,b,c,d,e){switch($APP.Je(b)-e){case 0:return e8.createElement(c,d);case 1:return e8.createElement(c,d,R8(a,$APP.B.Lf(b,e,null)));default:return e8.createElement.apply(null,$APP.fg(function(f,l,g){l>=e&&f.push(R8(a,g));return f},[c,d],b))}},a$=function(a,b,c,d){this.tag=a;this.id=b;this.className=c;this.Df=d},c$=function(a,b,c){var d=$APP.Aa(a,
Q8(c));null==d?n9(a)?a=I9(c,a,a):(d=$APP.F(a),d=$APP.E.Lf(d,b$,a),d=H9(d,c),a=I9(c,a,d)):a=d;c={};c.argv=b;b=H8(b);null!=b&&(c.key=b);return e8.createElement(a,c)},d$=function(a,b,c,d){var e={};e.cf=a;e.argv=$APP.Hk.h(b,c);b=H8(b);null!=b&&(e.key=b);return e8.createElement(M9(d,a),e)},e$=function(a,b,c){var d;if(d=$APP.jf(a))d=null==a?null:a.prototype,d=null!=(null==d?null:d.render);return d?c$(a,b,c):d$(a,b,1,c)},i$=function(a,b,c,d){var e=a.tag,f=$APP.B.Lf(b,c,null),l=null==f||$APP.vf(f),g=function(){var w=
l?f:null;var A=$APP.NQ.g(w);A=$APP.n(A)?$APP.E.Lf(w,$APP.NQ,f$.g(A)):w;var D=a.id;w=a.className;D=null!=D&&null==$APP.BS.g(A)?$APP.E.Lf(A,$APP.BS,D):A;if($APP.n(w)){var G=$APP.E.Lf,J=f$.h,R=$APP.NQ.g(A);A=$APP.n(R)?R:g$.g(A);w=G.call($APP.E,D,$APP.NQ,J.call(f$,w,A))}else w=D;w=$APP.n(a.Df)?Z9(w):V9(w);return $APP.n(w)?w:{}}();c+=l?1:0;a:switch(e){case "input":case "textarea":var p=!0;break a;default:p=!1}if(p)return p=function(){var w=d.Jf;if($APP.n(w))return w;w=H9(h$,d);return d.Jf=w}(),R8(d,$APP.lf(new $APP.O(null,
6,5,$APP.P,[p,b,e,g,c,d],null),$APP.F(b)));p=G8($APP.F(b));null!=p&&(g.key=p);return S8(d,b,e,g,c)},j$=function(a,b){return $APP.cc.g($APP.Yi.h(function(c){return R8(b,c)},a))},m$=function(a,b,c){null==b&&console.error("vec-to-elem",$APP.on.j($APP.Pe([a])));var d=$APP.B.Lf(a,0,null);switch(d instanceof $APP.ee?d.fb:null){case "\x3e":return c=$APP.B.Lf(a,1,null),i$(new a$(c,null,null,null),a,2,b);case "r\x3e":c=$APP.B.Lf(a,1,null);d=$APP.B.Lf(a,2,null);d=$APP.n(d)?d:{};var e=G8($APP.F(a));null!=e&&
(d.key=e);return S8(b,a,c,d,3);case "f\x3e":return d$($APP.B.Lf(a,1,null),a,2,b);case "\x3c\x3e":return d=$APP.B.Lf(a,1,null),c=null==d||$APP.vf(d),d=V9(c?d:null),d=$APP.n(d)?d:{},c=1+(c?1:0),e=H8(a),null!=e&&(d.key=e),S8(b,a,e8.Fragment,d,c);default:if(E8(d)||"string"===typeof d)a:for(;;)switch(c=$APP.B.Lf(a,0,null),c=$APP.Wh(c),d=c.indexOf("\x3e"),d){case -1:d=T9(k$,c);if(null==d){var f=$APP.t($APP.Um(l$,$APP.Wh(c)));d=$APP.B.Lf(f,0,null);e=$APP.B.Lf(f,1,null);f=$APP.B.Lf(f,2,null);f=null==f?null:
$APP.cT(f,/\./," ");var l=$APP.Di.h(-1,d.indexOf("-"));d=new a$(d,e,f,l);c=k$[c]=d}else c=d;a=i$(c,a,1,b);break a;case 0:a=null;break a;default:a=$APP.lf(new $APP.O(null,2,5,$APP.P,[$APP.Ch.Lf(c,0,d),$APP.E.Lf($APP.lf(a,null),0,$APP.Ch.h(c,d+1))],null),$APP.F(a))}else a=c.Lf?c.Lf(d,a,b):c.call(null,d,a,b);return a}},p$=function(a,b,c){var d=q9;q9=!0;try{return f8.render(a.s?a.s():a.call(null),b,function(){var e=q9;q9=!1;try{return $APP.qj.B(o$,$APP.E,b,a),O8.flush_after_render(),null!=c?c.s?c.s():
c.call(null):null}finally{q9=e}})}finally{q9=d}},x$=new $APP.x(null,"reagent.core","reagent.core",1841519592,null),Ls=new $APP.x(null,"compiler","compiler",1372604796,null),h9=new $APP.ee(null,"on-dispose","on-dispose",2105306360),F9=new $APP.ee(null,"getInitialState","getInitialState",1541760916),y$=new $APP.ee(null,"no-cache","no-cache",1588056370),z$=new $APP.ee(null,"function-components","function-components",1492814963),A$=new $APP.x(null,"reagent.dom","reagent.dom",-2138920962,null),q$=new $APP.ee(null,
"component-will-unmount","component-will-unmount",-2058314698),B$=new $APP.ee(null,"callback","callback",-705136228),ct=new $APP.x(null,"x","x",-555367584,null),x9=new $APP.ee(null,"cljsLegacyRender","cljsLegacyRender",-1527295613),u9=new $APP.ee(null,"reagentRender","reagentRender",-358306383),r$=new $APP.x(null,"container","container",-96406180,null),N9=new $APP.ee(null,"on-write","on-write",31519475),C$=new $APP.ee(null,"contextTypes","contextTypes",-2023853910),D$=new $APP.x(null,"render","render",
232498073,null),v9=new $APP.ee(null,"render","render",-1408033454),f9=new $APP.ee(null,"auto-run","auto-run",1958400437),E$=new $APP.ee(null,"childContextTypes","childContextTypes",578717991),b$=new $APP.ee(null,"reagent-render","reagent-render",-985383853),F$=new $APP.x("reagent.core","atom","reagent.core/atom",1748890217,null),Ns=new $APP.x("reagent.core","as-element","reagent.core/as-element",-1369748434,null),G$=new $APP.ee(null,"componentWillUnmount","componentWillUnmount",1573788814),s$=new $APP.ee(null,
"contextType","contextType",1033066077),Rs=new $APP.x(null,"as-element","as-element",-2139409597,null),t$=new $APP.ee(null,"getDerivedStateFromProps","getDerivedStateFromProps",-991834739),u$=new $APP.ee(null,"display-name","display-name",694513143),g$=new $APP.ee(null,"className","className",-1983287057),w9=new $APP.ee(null,"displayName","displayName",-809144601),H$=new $APP.ee(null,"getDerivedStateFromError","getDerivedStateFromError",166658477),v$=new $APP.x("reagent.dom","render","reagent.dom/render",
-1216356973,null),g9=new $APP.ee(null,"on-set","on-set",-140953470),I$=new $APP.ee(null,"component-did-update","component-did-update",-1468549173),F8=new $APP.ee(null,"key","key",-1516042587),J$=new $APP.ee(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),w$=new $APP.x(null,"callback-or-compiler","callback-or-compiler",90200066,null);var y8={},w8={},x8=[];z8.cache={};z8.resolve=function(a){return a};var e8=z8(0,{});var K$={};$APP.nj.g(null);var L$={},M$="undefined"!==typeof window&&null!=window.document,B8=new $APP.lm(null,new $APP.m(null,2,["aria",null,"data",null],null),null),f$=function f$(a){switch(arguments.length){case 0:return f$.s();case 1:return f$.g(arguments[0]);case 2:return f$.h(arguments[0],arguments[1]);default:for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return f$.j(arguments[0],arguments[1],new $APP.Xb(c.slice(2),0,null))}};f$.s=function(){return null};
f$.g=function(a){return $APP.qf(a)?(a=$APP.lj.h(function(b){return $APP.n(b)?E8(b)?$APP.Wh(b):b:null},a),$APP.z(a)?$APP.eT.h(" ",a):null):E8(a)?$APP.Wh(a):a};f$.h=function(a,b){return $APP.n(a)?$APP.n(b)?[$APP.q.g(f$.g(a))," ",$APP.q.g(f$.g(b))].join(""):f$.g(a):f$.g(b)};f$.j=function(a,b,c){return $APP.dc.Lf(f$,f$.h(a,b),c)};f$.Mf=function(a){var b=$APP.r(a),c=$APP.t(a);a=$APP.r(c);c=$APP.t(c);return this.j(b,a,c)};f$.o=2;var q9=!1;var E9=0,N$=M$?function(){var a=window;return function(){var b=a.requestAnimationFrame;if($APP.n(b))return b;b=a.webkitRequestAnimationFrame;if($APP.n(b))return b;b=a.mozRequestAnimationFrame;if($APP.n(b))return b;b=a.msRequestAnimationFrame;return $APP.n(b)?b:I8}().bind(a)}():I8;$APP.k=N8.prototype;$APP.k.flush_after_render=function(){var a=this.ef;if(null==a)return null;this.ef=null;return L8(a)};$APP.k.queue_render=function(a){null==this.hf&&(this.hf=[]);return M8(this,this.hf,a)};
$APP.k.schedule=function(){function a(){return b.run_queues()}var b=this;if(this.jf)return null;this.jf=!0;return N$.g?N$.g(a):N$.call(null,a)};$APP.k.flush_before_flush=function(){var a=this.ff;if(null==a)return null;this.ff=null;return L8(a)};$APP.k.flush_queues=function(){this.flush_before_flush();K8();this.flush_render();return this.flush_after_render()};$APP.k.run_queues=function(){this.jf=!1;return this.flush_queues()};
$APP.k.add_before_flush=function(a){null==this.ff&&(this.ff=[]);return M8(this,this.ff,a)};$APP.k.add_after_render=function(a){null==this.ef&&(this.ef=[]);return M8(this,this.ef,a)};$APP.k.flush_render=function(){var a=this.hf;if(null==a)return null;this.hf=null;a:{a.sort(J8);for(var b=a.length,c=0;;)if(c<b){var d=a[c];!0===d.cljsIsDirty&&d.forceUpdate();c+=1}else break a}return null};var O8=new N8;var T8;$APP.nj.g(0);var d9=null;$APP.k=$8.prototype;$APP.k.O=function(a,b,c){return Z8(b,c,"RAtom",new $APP.m(null,1,[$APP.wn,this.jb(null)],null))};$APP.k.T=function(){return this.D};$APP.k.X=function(){return $APP.qa(this)};$APP.k.W=function(a,b){return this===b};$APP.k.ne=function(a,b){a=this.state;this.state=b;null!=this.Bc&&Y8(this,a,b);return b};$APP.k.oe=function(a,b){return this.ne(null,b.g?b.g(this.state):b.call(null,this.state))};
$APP.k.pe=function(a,b,c){return this.ne(null,b.h?b.h(this.state,c):b.call(null,this.state,c))};$APP.k.qe=function(a,b,c,d){return this.ne(null,b.Lf?b.Lf(this.state,c,d):b.call(null,this.state,c,d))};$APP.k.re=function(a,b,c,d,e){return this.ne(null,$APP.Yb.I(b,this.state,c,d,e))};$APP.k.mf=function(a,b){Y8(this,a,b)};$APP.k.Qd=function(a,b,c){return W8(this,b,c)};$APP.k.Rd=function(a,b){return X8(this,b)};$APP.k.Z=function(a,b){return new $8(this.state,b,this.Fe,this.Bc)};
$APP.k.jb=function(){V8(this);return this.state};var p9=function p9(a){switch(arguments.length){case 1:return p9.g(arguments[0]);default:for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return p9.j(arguments[0],new $APP.Xb(c.slice(1),0,null))}};p9.g=function(a){return new $8(a,null,null,null)};p9.j=function(a,b){var c=$APP.Ai(b);b=$APP.ce.h(c,$APP.ub);c=$APP.ce.h(c,$APP.oj);return new $8(a,b,c,null)};p9.Mf=function(a){var b=$APP.r(a);a=$APP.t(a);return this.j(b,a)};
p9.o=1;$APP.k=c9.prototype;$APP.k._peek_at=function(){var a=T8;T8=null;try{return this.jb(null)}finally{T8=a}};$APP.k._handle_change=function(a,b,c){return b===c||this.bf?null:null==this.af?(this.bf=!0,null==d9&&(d9=[],!1===O8.jf&&O8.schedule()),d9.push(this)):!0===this.af?this._run(!1):this.af.g?this.af.g(this):this.af.call(null,this)};
$APP.k._update_watching=function(a){var b=$APP.qm(a),c=$APP.qm(this.df);this.df=a;a=$APP.z($APP.yY.h(b,c));for(var d=null,e=0,f=0;;)if(f<e){var l=d.S(null,f);$APP.td(l,this,b9);f+=1}else if(a=$APP.z(a))d=a,$APP.yf(d)?(a=$APP.Dd(d),f=$APP.Ed(d),d=a,e=$APP.Je(a),a=f):(a=$APP.r(d),$APP.td(a,this,b9),a=$APP.t(d),d=null,e=0),f=0;else break;b=$APP.z($APP.yY.h(c,b));c=null;for(e=d=0;;)if(e<d)a=c.S(null,e),$APP.ud(a,this),e+=1;else if(b=$APP.z(b))c=b,$APP.yf(c)?(b=$APP.Dd(c),d=$APP.Ed(c),c=b,a=$APP.Je(b),
b=d,d=a):(a=$APP.r(c),$APP.ud(a,this),b=$APP.t(c),c=null,d=0),e=0;else return null};$APP.k._queued_run=function(){return this.bf&&null!=this.df?this._run(!0):null};$APP.k._try_capture=function(a){try{return this.lf=null,U8(a,this)}catch(b){return this.lf=this.state=a=b,this.bf=!1}};$APP.k._run=function(a){var b=this.state;a=$APP.n(a)?this._try_capture(this.f):U8(this.f,this);this.vf||(this.state=a,null==this.Bc||$APP.fe.h(b,a)||Y8(this,b,a));return a};
$APP.k._set_opts=function(a){var b=$APP.Ai(a);a=$APP.ce.h(b,f9);var c=$APP.ce.h(b,g9),d=$APP.ce.h(b,h9);b=$APP.ce.h(b,y$);null!=a&&(this.af=a);null!=c&&(this.Gf=c);null!=d&&(this.wf=d);return null!=b?this.vf=b:null};$APP.k.O=function(a,b,c){return Z8(b,c,"Reaction",new $APP.m(null,1,[$APP.wn,this.jb(null)],null))};$APP.k.X=function(){return $APP.qa(this)};$APP.k.W=function(a,b){return this===b};
$APP.k.rf=function(){var a=this.state,b=this.df;this.af=this.state=this.df=null;this.bf=!0;b=$APP.z($APP.qm(b));for(var c=null,d=0,e=0;;)if(e<d){var f=c.S(null,e);$APP.ud(f,this);e+=1}else if(b=$APP.z(b))c=b,$APP.yf(c)?(b=$APP.Dd(c),e=$APP.Ed(c),c=b,d=$APP.Je(b),b=e):(b=$APP.r(c),$APP.ud(b,this),b=$APP.t(c),c=null,d=0),e=0;else break;null!=this.wf&&this.wf(a);a=this.Kf;if(null==a)return null;b=a.length;for(c=0;;)if(c<b)d=a[c],d.g?d.g(this):d.call(null,this),c+=1;else return null};
$APP.k.ne=function(a,b){a=this.state;this.state=b;this.Gf(a,b);Y8(this,a,b);return b};$APP.k.oe=function(a,b){a=this.ne;var c=this._peek_at();b=b.g?b.g(c):b.call(null,c);return a.call(this,null,b)};$APP.k.pe=function(a,b,c){a=this.ne;var d=this._peek_at();b=b.h?b.h(d,c):b.call(null,d,c);return a.call(this,null,b)};$APP.k.qe=function(a,b,c,d){a=this.ne;var e=this._peek_at();b=b.Lf?b.Lf(e,c,d):b.call(null,e,c,d);return a.call(this,null,b)};
$APP.k.re=function(a,b,c,d,e){return this.ne(null,$APP.Yb.I(b,this._peek_at(),c,d,e))};$APP.k.mf=function(a,b){Y8(this,a,b)};$APP.k.Qd=function(a,b,c){return W8(this,b,c)};$APP.k.Rd=function(a,b){a=$APP.pf(this.Bc);X8(this,b);return!a&&$APP.pf(this.Bc)&&null==this.af?this.rf(null):null};
$APP.k.jb=function(){var a=this.lf;if(null!=a)throw a;(a=null==T8)&&(e9.s?e9.s():e9.call(null));a&&null==this.af?this.bf&&(a=this.state,this.state=this.f.s?this.f.s():this.f.call(null),null==this.Bc||$APP.fe.h(a,this.state)||Y8(this,a,this.state)):(V8(this),this.bf&&this._run(!1));return this.state};K8=e9;var k9=i9(null);var y9,j9=new $APP.m(null,1,[y$,!0],null),B9=new $APP.m(null,2,[J$,null,G$,null],null),s9=function(a){var b=$APP.nj.g($APP.Hi);return function(c){var d=$APP.ce.h($APP.Oc(b),c);if(null!=d)return d;d=a.g?a.g(c):a.call(null,c);$APP.qj.B(b,$APP.E,c,d);return d}}(function(a){if("string"===typeof a)return a;a=$APP.Wh(a);a=$APP.cT(a,/(unsafe|UNSAFE)[-_]/,"UNSAFE_");a=$APP.jT.h(a,/-/);var b=$APP.z(a);a=$APP.r(b);b=$APP.t(b);return $APP.Yb.Lf($APP.q,a,$APP.Yi.h(A8,b))}),G9=new $APP.O(null,5,5,$APP.P,[E$,C$,
s$,t$,H$],null);var O9=new $APP.lm(null,new $APP.m(null,6,["url",null,"tel",null,"text",null,"textarea",null,"password",null,"search",null],null),null),h$=new $APP.m(null,4,[u$,"ReagentInput",I$,P9,q$,function(a){return a.nf=null},b$,function(a,b,c,d,e){S9(c);return S8(e,a,b,c,d)}],null);var O$={},g8,l$=/([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/,U9={"class":"className","for":"htmlFor",charset:"charSet"},X9={},k$={},R$=function(a){var b=$APP.Cn.s(),c=$APP.n(z$.g(a))?e$:c$;if("undefined"===typeof K$||"undefined"===typeof L$||"undefined"===typeof O$||"undefined"===typeof g8)g8=function(d,e,f,l){this.Hf=d;this.id=e;this.uf=f;this.Ff=l;this.C=393216;this.J=0},g8.prototype.Z=function(d,e){return new g8(this.Hf,this.id,this.uf,e)},g8.prototype.T=function(){return this.Ff},g8.prototype.If=
function(){return this.id},g8.prototype.xf=function(d,e){return"object"!==$APP.pa(e)?e:$APP.xf(e)?m$(e,this,this.uf):$APP.Ff(e)?j$(e,this):E8(e)?$APP.Wh(e):(null!=e?e.C&2147483648||$APP.Ua===e.ba||(e.C?0:$APP.Pb($APP.qd,e)):$APP.Pb($APP.qd,e))?$APP.on.j($APP.Pe([e])):e},g8.prototype.yf=function(d,e,f,l,g){return $9(this,e,f,l,g)},g8.Td=!0,g8.$c="reagent.impl.template/t_reagent$impl$template35072",g8.ue=function(d){return $APP.od(d,"reagent.impl.template/t_reagent$impl$template35072")};return new g8(a,
b,c,$APP.Hi)}($APP.Hi);var Ss=function Ss(a){switch(arguments.length){case 1:return Ss.g(arguments[0]);case 2:return Ss.h(arguments[0],arguments[1]);default:throw Error(["Invalid arity: ",$APP.q.g(arguments.length)].join(""));}};Ss.g=function(a){return R8(R$,a)};Ss.h=function(a,b){return R8(b,a)};Ss.o=2;
var S$=function S$(a){switch(arguments.length){case 1:return S$.g(arguments[0]);default:for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return S$.j(arguments[0],new $APP.Xb(c.slice(1),0,null))}};S$.g=function(a){return p9.g(a)};S$.j=function(a,b){return $APP.Yb.Lf(p9,a,b)};S$.Mf=function(a){var b=$APP.r(a);a=$APP.t(a);return this.j(b,a)};S$.o=1;var f8=z8(1,{});var o$=$APP.nj.g($APP.Hi),T$=function T$(a){switch(arguments.length){case 2:return T$.h(arguments[0],arguments[1]);case 3:return T$.Lf(arguments[0],arguments[1],arguments[2]);default:throw Error(["Invalid arity: ",$APP.q.g(arguments.length)].join(""));}};T$.h=function(a,b){return T$.Lf(a,b,R$)};
T$.Lf=function(a,b,c){e9();c=$APP.jf(c)?new $APP.O(null,2,5,$APP.P,[R$,c],null):new $APP.O(null,2,5,$APP.P,[c,B$.g(c)],null);var d=$APP.B.Lf(c,0,null);c=$APP.B.Lf(c,1,null);return p$(function(){return R8(d,$APP.jf(a)?a.s?a.s():a.call(null):a)},b,c)};T$.o=3;var i8=$APP.gU(x$,null),j8=new $APP.m(null,2,[$APP.YI,function(){var a=new $APP.de(function(){return S$},F$,$APP.Hl([$APP.U,$APP.T,$APP.xM,$APP.Tq,$APP.By,$APP.oF,$APP.Xp,$APP.dH,$APP.V,$APP.S,$APP.WN],[x$,$APP.YI,"reagent/core.cljs",11,new $APP.m(null,6,[$APP.aO,!0,$APP.Cs,1,$APP.Mt,1,$APP.hu,new $APP.O(null,1,5,$APP.P,[new $APP.O(null,1,5,$APP.P,[ct],null)],null),$APP.V,$APP.I(new $APP.O(null,1,5,$APP.P,[ct],null),new $APP.O(null,3,5,$APP.P,[ct,$APP.Wo,$APP.xL],null)),$APP.tC,$APP.I(null,null)],
null),1,211,211,$APP.I(new $APP.O(null,1,5,$APP.P,[ct],null),new $APP.O(null,3,5,$APP.P,[ct,$APP.Wo,$APP.xL],null)),"Like clojure.core/atom, except that it keeps track of derefs.\n  Reagent components that derefs one of these are automatically\n  re-rendered.",$APP.n(S$)?S$.fg:null])),b=$APP.Oc(a);a=$APP.F(a);var c=i8.l(null),d=$APP.T.g(a);$APP.y.h($APP.q.g(c),$APP.q.g(d));c=new $APP.m(null,4,[$APP.U,i8,$APP.T,d,$APP.V,$APP.V.g(a),$APP.S,$APP.S.g(a)],null);return $APP.n($APP.yQ.g(a))?$APP.bj(d,b,
c):$APP.n($APP.hq.g(a))?$APP.k8(d,b,c):new $APP.BU(b,d,c)}(),Rs,function(){var a=new $APP.de(function(){return Ss},Ns,$APP.Hl([$APP.U,$APP.T,$APP.xM,$APP.Tq,$APP.By,$APP.oF,$APP.Xp,$APP.dH,$APP.V,$APP.S,$APP.WN],[x$,Rs,"reagent/core.cljs",17,new $APP.m(null,6,[$APP.aO,!1,$APP.Cs,2,$APP.Mt,2,$APP.hu,new $APP.O(null,2,5,$APP.P,[new $APP.O(null,1,5,$APP.P,[$APP.Ho],null),new $APP.O(null,2,5,$APP.P,[$APP.Ho,Ls],null)],null),$APP.V,$APP.I(new $APP.O(null,1,5,$APP.P,[$APP.Ho],null),new $APP.O(null,2,5,
$APP.P,[$APP.Ho,Ls],null)),$APP.tC,$APP.I(null,null)],null),1,46,46,$APP.I(new $APP.O(null,1,5,$APP.P,[$APP.Ho],null),new $APP.O(null,2,5,$APP.P,[$APP.Ho,Ls],null)),"Turns a vector of Hiccup syntax into a React element. Returns form\n  unchanged if it is not a vector.",$APP.n(Ss)?Ss.fg:null])),b=$APP.Oc(a);a=$APP.F(a);var c=i8.l(null),d=$APP.T.g(a);$APP.y.h($APP.q.g(c),$APP.q.g(d));c=new $APP.m(null,4,[$APP.U,i8,$APP.T,d,$APP.V,$APP.V.g(a),$APP.S,$APP.S.g(a)],null);return $APP.n($APP.yQ.g(a))?$APP.bj(d,
b,c):$APP.n($APP.hq.g(a))?$APP.k8(d,b,c):new $APP.BU(b,d,c)}()],null),l8=$APP.gU(A$,null),m8=new $APP.m(null,1,[D$,function(){var a=new $APP.de(function(){return T$},v$,$APP.Hl([$APP.U,$APP.T,$APP.xM,$APP.Tq,$APP.By,$APP.oF,$APP.Xp,$APP.dH,$APP.V,$APP.S,$APP.WN],[A$,D$,"reagent/dom.cljs",13,new $APP.m(null,6,[$APP.aO,!1,$APP.Cs,3,$APP.Mt,3,$APP.hu,new $APP.O(null,2,5,$APP.P,[new $APP.O(null,2,5,$APP.P,[$APP.wQ,r$],null),new $APP.O(null,3,5,$APP.P,[$APP.wQ,r$,w$],null)],null),$APP.V,$APP.I(new $APP.O(null,
2,5,$APP.P,[$APP.wQ,r$],null),new $APP.O(null,3,5,$APP.P,[$APP.wQ,r$,w$],null)),$APP.tC,$APP.I(null,null)],null),1,29,29,$APP.I(new $APP.O(null,2,5,$APP.P,[$APP.wQ,r$],null),new $APP.O(null,3,5,$APP.P,[$APP.wQ,r$,w$],null)),"Render a Reagent component into the DOM. The first argument may be\n  either a vector (using Reagent's Hiccup syntax), or a React element.\n  The second argument should be a DOM node.\n\n  Optionally takes a callback that is called when the component is in place.\n\n  Returns the mounted component instance.",
$APP.n(T$)?T$.fg:null])),b=$APP.Oc(a);a=$APP.F(a);var c=l8.l(null),d=$APP.T.g(a);$APP.y.h($APP.q.g(c),$APP.q.g(d));c=new $APP.m(null,4,[$APP.U,l8,$APP.T,d,$APP.V,$APP.V.g(a),$APP.S,$APP.S.g(a)],null);return $APP.n($APP.yQ.g(a))?$APP.bj(d,b,c):$APP.n($APP.hq.g(a))?$APP.k8(d,b,c):new $APP.BU(b,d,c)}()],null);$APP.qj.Lf($APP.nc,$APP.dj,new $APP.m(null,1,[$APP.Cr,new $APP.m(null,2,[x$,j8,A$,m8],null)],null));
}).call(this);