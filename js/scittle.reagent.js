(function(){
shadow$provide[0]=function(b,c,a,d){a.exports=React};
shadow$provide[1]=function(b,c,a,d){a.exports=ReactDOM};
'use strict';var TW=function(a,b){var c=QW[a];if(void 0!==c)return c;try{RW.push(a);var d=SW[a],e=shadow$provide[a];if(void 0===d){if(void 0===e)throw"Module not provided: "+a;d={exports:{}};SW[a]=d}if(e){delete shadow$provide[a];try{e.call(d,$APP.ca,TW,d,d.exports)}catch(g){throw console.warn("shadow-cljs - failed to load",a),g;}if(b){var f=b.globals;if(f)for(a=0;a<f.length;a++)window[f[a]]=d.exports}}}finally{RW.pop()}return d.exports},UW=function(a){return 2>$APP.he(a)?$APP.ol(a):[$APP.ol($APP.kj.j(a,
0,1)),$APP.kj.g(a,1)].join("")},WW=function(a){if("string"===typeof a)return a;a=$APP.Xi(a);var b=$APP.sl.g(a,/-/),c=$APP.z(b);b=$APP.A(c);c=$APP.G(c);return $APP.p(VW.h?VW.h(b):VW.call(null,b))?a:$APP.bg.j($APP.q,b,$APP.vj.g(UW,c))},XW=function(a){var b=function(){var c=function(){var d=$APP.ve(a);if(d){d=a.displayName;if($APP.p(d))return d;d=a.name;return"string"===typeof d&&$APP.z(d)?d:null}return d}();if($APP.p(c))return c;c=function(){var d=null!=a?a.M&4096||$APP.Cd===a.ef?!0:!1:!1;return d?
$APP.Xi(a):d}();if($APP.p(c))return c;c=$APP.ye(a);return $APP.He(c)?$APP.sn.h(c):null}();return $APP.p(b)?$APP.nl($APP.q.h(b),"$","."):null},YW=function(a){return a instanceof $APP.S||a instanceof $APP.y},$W=function(a){if($APP.He(a))try{var b=$APP.Q.g(a,ZW)}catch(c){b=null}else b=null;return b},aX=function(a){var b=ZW.h($APP.ye(a));if($APP.p(b))return b;b=$W($APP.M.j(a,1,null));if($APP.p(b))return b;b=$APP.M.j(a,0,null);switch(b instanceof $APP.S?b.na:null){case "\x3e":case "f\x3e":return $W($APP.M.j(a,
2,null));case "r\x3e":return a=$APP.M.j(a,2,null),null==a?null:a.key;default:return null}},bX=function(a){return setTimeout(a,16)},cX=function(a,b){return a.vf-b.vf},dX=function(){return null},eX=function(a){for(var b=a.length,c=0;;)if(c<b){var d=a[c];d.s?d.s():d.call(null);c+=1}else return null},fX=function(a,b,c){b.push(c);return a.schedule()},gX=function(){this.Ee=!1},iX=function(a){if($APP.p(a.cljsIsDirty))return null;a.cljsIsDirty=!0;return hX.queue_render(a)},jX=function(a){if(null!=a&&null!=
a.Bh)a=a.id;else{var b=jX[$APP.na(null==a?null:a)];if(null!=b)a=b.h?b.h(a):b.call(null,a);else if(b=jX._,null!=b)a=b.h?b.h(a):b.call(null,a);else throw $APP.Nb("Compiler.get-id",a);}return a},kX=function(a,b){if(null!=a&&null!=a.Gg)a=a.Gg(a,b);else{var c=kX[$APP.na(null==a?null:a)];if(null!=c)a=c.g?c.g(a,b):c.call(null,a,b);else if(c=kX._,null!=c)a=c.g?c.g(a,b):c.call(null,a,b);else throw $APP.Nb("Compiler.as-element",a);}return a},lX=function(a,b,c,d,e){if(null!=a&&null!=a.Hg)a=a.Hg(a,b,c,d,e);else{var f=
lX[$APP.na(null==a?null:a)];if(null!=f)a=f.J?f.J(a,b,c,d,e):f.call(null,a,b,c,d,e);else if(f=lX._,null!=f)a=f.J?f.J(a,b,c,d,e):f.call(null,a,b,c,d,e);else throw $APP.Nb("Compiler.make-element",a);}return a},nX=function(a,b){b.We=null;a:{var c=mX;mX=b;try{var d=a.s?a.s():a.call(null);break a}finally{mX=c}d=void 0}a=b.We;b.Qc=!1;a:{c=b.gd;var e=null==a?0:a.length,f=e===(null==c?0:c.length);if(f)for(f=0;;){var g=f===e;if(g){c=g;break a}if(a[f]===c[f])f+=1;else{c=!1;break a}}else c=f}c||b._update_watching(a);
return d},oX=function(a){var b=mX;if(null!=b){var c=b.We;null==c?b.We=[a]:c.push(a)}},pX=function(a,b,c){a.ub=$APP.Ni.j(a.ub,b,c);return a.Uf=null},qX=function(a,b){a.ub=$APP.$l.g(a.ub,b);return a.Uf=null},rX=function(a,b,c){var d=a.Uf;d=null==d?a.Uf=$APP.jf(function(n,k,r){n.push(k);n.push(r);return n},[],a.ub):d;for(var e=d.length,f=0;;)if(f<e){var g=d[f],l=d[f+1];l.C?l.C(g,a,b,c):l.call(null,g,a,b,c);f=2+f}else break},sX=function(a,b,c,d){$APP.Vc(a,["#object[reagent.ratom.",$APP.q.h(c)," "].join(""));
a:{c=mX;mX=null;try{var e=d;break a}finally{mX=c}e=void 0}$APP.uj(e,a,b);return $APP.Vc(a,"]")},tX=function(a,b,c,d){this.state=a;this.F=b;this.Sf=c;this.ub=d;this.D=2154201088;this.M=114690},uX=function(a){if(null!=a&&null!=a.Mf)a=a.Mf(a);else{var b=uX[$APP.na(null==a?null:a)];if(null!=b)a=b.h?b.h(a):b.call(null,a);else if(b=uX._,null!=b)a=b.h?b.h(a):b.call(null,a);else throw $APP.Nb("IDisposable.dispose!",a);}return a},vX=function(a,b,c,d){return a._handle_change(b,c,d)},wX=function(a){this.f=a;
this.state=null;this.Qc=!0;this.Ag=!1;this.Xe=this.rc=this.ub=this.gd=null;this.D=2153807872;this.M=114690},yX=function(){for(;;){var a=xX;if(null==a)return null;xX=null;for(var b=a.length,c=0;;)if(c<b)a[c]._queued_run(),c+=1;else break}},CX=function(a){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;c=arguments[0];var e=$APP.dg(1<b.length?new $APP.Kd(b.slice(1),0,null):null);b=$APP.Q.g(e,zX);d=$APP.Q.g(e,AX);e=$APP.Q.g(e,BX);c=new wX(c);c._set_opts(new $APP.vb(null,
3,[zX,b,AX,d,BX,e],null));return c},FX=function(a,b){var c=DX,d=EX,e=nX(a,d);null!=d.gd&&(EX=CX(null),d._set_opts(c),d.f=a,d.rc=function(){return iX.h?iX.h(b):iX.call(null,b)},b.cljsRatom=d);return e},GX=function(a,b){var c=b.argv;if(null==c){c=$APP.V;a=a.constructor;a:for(var d=$APP.kb(b),e=d.length,f=$APP.ig,g=0;;)if(g<e){var l=d[g];f=$APP.Ni.j(f,$APP.wj.h(l),$APP.mb(b,l));g+=1}else break a;b=new $APP.T(null,2,5,c,[a,f],null)}else b=c;return b},HX=function(a){var b;if(b=$APP.ve(a))a=null==a?null:
a.prototype,b=null!=(null==a?null:a.Tc);return b},IX=function(a,b){for(;;){var c=a.Tc,d=!0===a.lh?c.call(a,a):function(){var e=GX(a,a.props);switch($APP.he(e)){case 1:return c.call(a);case 2:return c.call(a,$APP.M.g(e,1));case 3:return c.call(a,$APP.M.g(e,1),$APP.M.g(e,2));case 4:return c.call(a,$APP.M.g(e,1),$APP.M.g(e,2),$APP.M.g(e,3));case 5:return c.call(a,$APP.M.g(e,1),$APP.M.g(e,2),$APP.M.g(e,3),$APP.M.g(e,4));default:return c.apply(a,$APP.HA.h(e).slice(1))}}();if($APP.Je(d))return kX(b,d);
if($APP.Re(d))a.Tc=HX(d)?function(e,f,g,l,n){return function(){function k(v){var w=null;if(0<arguments.length){w=0;for(var B=Array(arguments.length-0);w<B.length;)B[w]=arguments[w+0],++w;w=new $APP.Kd(B,0,null)}return r.call(this,w)}function r(v){return kX(f,$APP.bg.j($APP.Oq,n,v))}k.o=0;k.v=function(v){v=$APP.z(v);return r(v)};k.l=r;return k}()}(a,b,c,null,d):d;else return d}},LX=function(a,b){switch(a instanceof $APP.S?a.na:null){case "getDefaultProps":throw Error("getDefaultProps not supported");
case "getDerivedStateFromProps":return function(c,d){var e=b.call,f=c.argv;null!=f&&(c=$APP.M.j(f,1,null),c=$APP.He(c)?c:null);return e.call(b,null,c,d)};case "getInitialState":return function(c){var d=c.nh;d=null!=d?d:c.nh=JX.h(null);return $APP.Dg(d,b.call(c,c))};case "getSnapshotBeforeUpdate":return function(c,d){return b.call(this,this,GX(this,c),d)};case "componentWillReceiveProps":return function(c){return b.call(this,this,GX(this,c))};case "UNSAFE_componentWillReceiveProps":return function(c){return b.call(this,
this,GX(this,c))};case "shouldComponentUpdate":return function(c){var d=KX;if($APP.p(d))return d;d=this.props.argv;var e=c.argv,f=null==d||null==e;if(null==b){if(f)return f;try{return $APP.Mi.g(d,e)}catch(g){return!1}}else return f?b.call(this,this,GX(this,this.props),GX(this,c)):b.call(this,this,d,e)};case "componentWillUpdate":return function(c,d){return b.call(this,this,GX(this,c),d)};case "UNSAFE_componentWillUpdate":return function(c,d){return b.call(this,this,GX(this,c),d)};case "componentDidUpdate":return function(c,
d,e){return b.call(this,this,GX(this,c),d,e)};case "componentWillMount":return function(){return b.call(this,this)};case "UNSAFE_componentWillMount":return function(){return b.call(this,this)};case "componentDidMount":return function(){return b.call(this,this)};case "componentWillUnmount":return function(){var c=$APP.mb(this,"cljsRatom");null!=c&&uX(c);this.cljsIsDirty=!1;return null==b?null:b.call(this,this)};case "componentDidCatch":return function(c,d){return b.call(this,this,c,d)};default:return null}},
NX=function(a){return $APP.jf(function(b,c,d){return $APP.Ni.j(b,$APP.wj.h(MX(c)),d)},$APP.ig,a)},TX=function(a,b){var c=function(){var g=OX.h(a);return $APP.p(g)?g:PX.h(a)}(),d=null==OX.h(a),e=function(){var g=QX.h(a);if($APP.p(g))return g;g=XW(c);return $APP.p(g)?g:$APP.q.h($APP.cm.h("reagent"))}(),f=$APP.jf(function(g,l,n){var k=$APP.Ni.j,r=LX(l,n);return k.call($APP.Ni,g,l,$APP.p(r)?r:n)},$APP.ig,a);return $APP.Ni.l(f,QX,e,$APP.N([RX,d,OX,c,PX,function(){var g=this,l=$APP.mb(g,"cljsRatom");g.cljsIsDirty=
!1;return null==l?FX(function(){a:{var n=SX;SX=g;try{var k=IX(g,b);break a}finally{SX=n}k=void 0}return k},g):l._run(!1)}]))},UX=function(a){return $APP.jf(function(b,c,d){c=$APP.Xi(c);b[c]=d;return b},{},a)},WX=function(a,b){return TX($APP.Zl.l($APP.N([VX,NX(a)])),b)},aY=function(a,b){function c(l,n,k){XX.Component.call(this,l,n,k);$APP.p(g)&&(g.g?g.g(this,l):g.call(null,this,l));$APP.p(f)&&(this.state=f.h?f.h(this):f.call(null,this));this.vf=YX+=1;return this}a=WX(a,b);b=UX($APP.bg.l($APP.$l,a,
QX,ZX,$APP.lo,$APP.N([PX,OX,$X])));var d=UX($APP.Oi(a,$X)),e=QX.h(a),f=ZX.h(a),g=$APP.lo.h(a);$APP.pb(c.prototype,XX.Component.prototype,b);$APP.p(PX.h(a))&&(c.prototype.render=PX.h(a));$APP.p(OX.h(a))&&(c.prototype.Tc=OX.h(a));$APP.p(RX.h(a))&&(c.prototype.lh=RX.h(a));$APP.pb(c,XX.Component,d);$APP.p(e)&&(c.displayName=e,c.qd=e,c.tf=function(l){return $APP.Vc(l,e)});c.ve=!0;return c.prototype.constructor=c},bY=function(a,b,c){a=jX(a);return b[a]=c},cY=function(a,b){for(;;){var c=b.Tc,d=b.argv,e=
$APP.bg.g(c,d);if($APP.Je(e))return kX(a,e);if($APP.Re(e))b.Tc=HX(e)?function(f,g,l,n,k,r){return function(){function v(B){var H=null;if(0<arguments.length){H=0;for(var J=Array(arguments.length-0);H<J.length;)J[H]=arguments[H+0],++H;H=new $APP.Kd(J,0,null)}return w.call(this,H)}function w(B){return kX(f,$APP.bg.j($APP.Oq,r,B))}v.o=0;v.v=function(B){B=$APP.z(B);return w(B)};v.l=w;return v}()}(a,b,c,null,d,e):e;else return e}},dY=function(a,b){var c=b.argv,d=b.Tc;b=XX.useState(0);$APP.M.j(b,0,null);
var e=$APP.M.j(b,1,null),f=XX.useRef();$APP.p(f.current)||function(){var l={forceUpdate:function(){return e.h?e.h($APP.Ud):e.call(null,$APP.Ud)}};l.vf=YX+=1;l.constructor=d;l.Tc=d;return f.current=l}();var g=f.current;b=$APP.mb(g,"cljsRatom");XX.useEffect(function(){return function(){var l=$APP.mb(g,"cljsRatom");return null==l?null:uX(l)}},[]);g.argv=c;g.cljsIsDirty=!1;return null==b?FX(function(){a:{var l=SX;SX=g;try{var n=cY(a,g);break a}finally{SX=l}n=void 0}return n},g):b._run(!1)},eY=function(a,
b){a=a.argv;b=b.argv;var c=!1===KX;if(c)try{return $APP.K.g(a,b)}catch(d){return!1}else return c},fY=function(a,b){function c(e){return dY(a,e)}var d=$APP.mb(b,jX(a));if($APP.p(d))return d;c.displayName=XW(b);d=XX.memo(c,eY);bY(a,b,d);return d},jY=function(a,b,c,d){var e=$APP.dg($APP.ig);e=$APP.Q.g(e,gY);if(a===document.activeElement&&$APP.Xe(hY,a.type)&&"string"===typeof b&&"string"===typeof c){var f=a.value;if($APP.Mi.g(f,c))return hX.add_after_render(function(){return iY.h?iY.h(d):iY.call(null,
d)});c=$APP.he(f)-a.selectionStart;c=$APP.he(b)-c;d.we=b;a.value=b;$APP.ve(e)&&(e.h?e.h(b):e.call(null,b));a.selectionStart=c;return a.selectionEnd=c}d.we=b;a.value=b;return $APP.ve(e)?e.h?e.h(b):e.call(null,b):null},iY=function(a){if($APP.p(a.uf)){a.pg=!1;var b=a.mh,c=a.we,d=a.Ff;return $APP.Mi.g(b,c)?jY(d,b,c,a):null}return null},kY=function(a,b,c){a.we=c.target.value;$APP.p(a.pg)||(a.pg=!0,hX.add_after_render(function(){return iY(a)}));return b.h?b.h(c):b.call(null,c)},lY=function(a){var b=SX;
if($APP.p(function(){var f=null!=a;return f?(f=a.hasOwnProperty("onChange"),$APP.p(f)?a.hasOwnProperty("value"):f):f}())){var c=a.value;c=null==c?"":c;var d=a.onChange,e=a.ref;$APP.p(b.uf)||(b.uf=!0,b.we=c);$APP.p(b.Ig)||(b.Ig=$APP.ve(e)?function(f){b.Ff=f;return e.h?e.h(f):e.call(null,f)}:$APP.p($APP.p(e)?e.hasOwnProperty("current"):e)?function(f){b.Ff=f;return e.current=f}:function(f){return b.Ff=f});b.mh=c;delete a.value;a.defaultValue=c;a.onChange=function(f){return kY(b,d,f)};a.ref=b.Ig}},mY=
function(a,b){return a.hasOwnProperty(b)?$APP.mb(a,b):null},pY=function(a,b,c){if(YW(b)){var d=mY(nY,$APP.Xi(b));null==d?(d=WW(b),b=$APP.Xi(b),b=nY[b]=d):b=d}c=oY.h?oY.h(c):oY.call(null,c);a[b]=c;return a},oY=function(a){return"object"!==$APP.na(a)?a:YW(a)?$APP.Xi(a):$APP.He(a)?$APP.jf(pY,{},a):$APP.De(a)?$APP.ho(a):$APP.Re(a)?function(){function b(d){var e=null;if(0<arguments.length){e=0;for(var f=Array(arguments.length-0);e<f.length;)f[e]=arguments[e+0],++e;e=new $APP.Kd(f,0,null)}return c.call(this,
e)}function c(d){return $APP.bg.g(a,d)}b.o=0;b.v=function(d){d=$APP.z(d);return c(d)};b.l=c;return b}():$APP.ho(a)},rY=function(a,b,c){if(YW(b)){var d=mY(qY,$APP.Xi(b));null==d?(d=WW(b),b=$APP.Xi(b),b=qY[b]=d):b=d}c=oY(c);a[b]=c;return a},sY=function(a){return"object"!==$APP.na(a)?a:YW(a)?$APP.Xi(a):$APP.He(a)?$APP.jf(rY,{},a):$APP.De(a)?$APP.ho(a):$APP.Re(a)?function(){function b(d){var e=null;if(0<arguments.length){e=0;for(var f=Array(arguments.length-0);e<f.length;)f[e]=arguments[e+0],++e;e=new $APP.Kd(f,
0,null)}return c.call(this,e)}function c(d){return $APP.bg.g(a,d)}b.o=0;b.v=function(d){d=$APP.z(d);return c(d)};b.l=c;return b}():$APP.ho(a)},tY=function(a,b,c,d,e){switch($APP.he(b)-e){case 0:return XX.createElement(c,d);case 1:return XX.createElement(c,d,kX(a,$APP.M.j(b,e,null)));default:return XX.createElement.apply(null,$APP.jf(function(f,g,l){g>=e&&f.push(kX(a,l));return f},[c,d],b))}},uY=function(a,b,c,d){this.tag=a;this.id=b;this.className=c;this.ph=d},wY=function(a,b,c){var d=$APP.mb(a,jX(c));
null==d?HX(a)?a=bY(c,a,a):(d=$APP.ye(a),d=$APP.Ni.j(d,vY,a),d=aY(d,c),a=bY(c,a,d)):a=d;c={};c.argv=b;b=aX(b);null!=b&&(c.key=b);return XX.createElement(a,c)},xY=function(a,b,c,d){var e={};e.Tc=a;e.argv=$APP.ql.g(b,c);b=aX(b);null!=b&&(e.key=b);return XX.createElement(fY(d,a),e)},yY=function(a,b,c){var d;if(d=$APP.ve(a))d=null==a?null:a.prototype,d=null!=(null==d?null:d.render);return d?wY(a,b,c):xY(a,b,1,c)},CY=function(a,b,c,d){var e=a.tag,f=$APP.M.j(b,c,null),g=null==f||$APP.He(f),l=function(){var k=
g?f:null;var r=$APP.Eo.h(k);r=$APP.p(r)?$APP.Ni.j(k,$APP.Eo,zY.h(r)):k;var v=a.id;k=a.className;v=null!=v&&null==$APP.pn.h(r)?$APP.Ni.j(r,$APP.pn,v):r;if($APP.p(k)){var w=$APP.Ni.j,B=zY.g,H=$APP.Eo.h(r);r=$APP.p(H)?H:AY.h(r);k=w.call($APP.Ni,v,$APP.Eo,B.call(zY,k,r))}else k=v;k=$APP.p(a.ph)?sY(k):oY(k);return $APP.p(k)?k:{}}();c+=g?1:0;a:switch(e){case "input":case "textarea":var n=!0;break a;default:n=!1}if(n)return n=function(){var k=d.Ch;if($APP.p(k))return k;k=aY(BY,d);return d.Ch=k}(),kX(d,$APP.xe(new $APP.T(null,
6,5,$APP.V,[n,b,e,l,c,d],null),$APP.ye(b)));n=$W($APP.ye(b));null!=n&&(l.key=n);return lX(d,b,e,l,c)},DY=function(a,b){return $APP.HA.h($APP.vj.g(function(c){return kX(b,c)},a))},GY=function(a,b,c){null==b&&console.error("vec-to-elem",$APP.Tj.l($APP.N([a])));var d=$APP.M.j(a,0,null);switch(d instanceof $APP.S?d.na:null){case "\x3e":return c=$APP.M.j(a,1,null),CY(new uY(c,null,null,null),a,2,b);case "r\x3e":c=$APP.M.j(a,1,null);d=$APP.M.j(a,2,null);d=$APP.p(d)?d:{};var e=$W($APP.ye(a));null!=e&&(d.key=
e);return lX(b,a,c,d,3);case "f\x3e":return xY($APP.M.j(a,1,null),a,2,b);case "\x3c\x3e":return d=$APP.M.j(a,1,null),c=null==d||$APP.He(d),d=oY(c?d:null),d=$APP.p(d)?d:{},c=1+(c?1:0),e=aX(a),null!=e&&(d.key=e),lX(b,a,XX.Fragment,d,c);default:if(YW(d)||"string"===typeof d)a:for(;;)switch(c=$APP.M.j(a,0,null),c=$APP.Xi(c),d=c.indexOf("\x3e"),d){case -1:d=mY(EY,c);if(null==d){var f=$APP.G($APP.ij(FY,$APP.Xi(c)));d=$APP.M.j(f,0,null);e=$APP.M.j(f,1,null);f=$APP.M.j(f,2,null);f=null==f?null:$APP.nl(f,
/\./," ");var g=$APP.Mi.g(-1,d.indexOf("-"));d=new uY(d,e,f,g);c=EY[c]=d}else c=d;a=CY(c,a,1,b);break a;case 0:a=null;break a;default:a=$APP.xe(new $APP.T(null,2,5,$APP.V,[$APP.kj.j(c,0,d),$APP.Ni.j($APP.xe(a,null),0,$APP.kj.g(c,d+1))],null),$APP.ye(a))}else a=c.j?c.j(d,a,b):c.call(null,d,a,b);return a}},JY=function(a,b,c){var d=KX;KX=!0;try{return HY.render(a.s?a.s():a.call(null),b,function(){var e=KX;KX=!1;try{return $APP.nk.C(IY,$APP.Ni,b,a),hX.flush_after_render(),null!=c?c.s?c.s():c.call(null):
null}finally{KX=e}})}finally{KX=d}},KY=new $APP.y(null,"reagent.core","reagent.core",1841519592,null),LY=new $APP.y(null,"compiler","compiler",1372604796,null),BX=new $APP.S(null,"on-dispose","on-dispose",2105306360),ZX=new $APP.S(null,"getInitialState","getInitialState",1541760916),MY=new $APP.S(null,"no-cache","no-cache",1588056370),NY=new $APP.S(null,"function-components","function-components",1492814963),OY=new $APP.y(null,"reagent.dom","reagent.dom",-2138920962,null),PY=new $APP.S(null,"component-will-unmount",
"component-will-unmount",-2058314698),QY=new $APP.S(null,"callback","callback",-705136228),RY=new $APP.y(null,"x","x",-555367584,null),RX=new $APP.S(null,"cljsLegacyRender","cljsLegacyRender",-1527295613),OX=new $APP.S(null,"reagentRender","reagentRender",-358306383),SY=new $APP.y(null,"container","container",-96406180,null),gY=new $APP.S(null,"on-write","on-write",31519475),TY=new $APP.S(null,"contextTypes","contextTypes",-2023853910),UY=new $APP.y(null,"render","render",232498073,null),PX=new $APP.S(null,
"render","render",-1408033454),zX=new $APP.S(null,"auto-run","auto-run",1958400437),VY=new $APP.S(null,"childContextTypes","childContextTypes",578717991),vY=new $APP.S(null,"reagent-render","reagent-render",-985383853),WY=new $APP.y("reagent.core","atom","reagent.core/atom",1748890217,null),XY=new $APP.y("reagent.core","as-element","reagent.core/as-element",-1369748434,null),YY=new $APP.S(null,"componentWillUnmount","componentWillUnmount",1573788814),ZY=new $APP.S(null,"contextType","contextType",
1033066077),$Y=new $APP.y(null,"as-element","as-element",-2139409597,null),aZ=new $APP.S(null,"getDerivedStateFromProps","getDerivedStateFromProps",-991834739),bZ=new $APP.S(null,"display-name","display-name",694513143),AY=new $APP.S(null,"className","className",-1983287057),QX=new $APP.S(null,"displayName","displayName",-809144601),cZ=new $APP.S(null,"getDerivedStateFromError","getDerivedStateFromError",166658477),dZ=new $APP.y("reagent.dom","render","reagent.dom/render",-1216356973,null),AX=new $APP.S(null,
"on-set","on-set",-140953470),eZ=new $APP.S(null,"component-did-update","component-did-update",-1468549173),ZW=new $APP.S(null,"key","key",-1516042587),fZ=new $APP.S(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),gZ=new $APP.y(null,"callback-or-compiler","callback-or-compiler",90200066,null);var SW={},QW={},RW=[];TW.cache={};TW.resolve=function(a){return a};var XX=TW(0,{});var hZ={};$APP.ek.h(null);var iZ={},jZ="undefined"!==typeof window&&null!=window.document,VW=new $APP.Qi(null,new $APP.vb(null,2,["aria",null,"data",null],null),null),zY=function zY(a){switch(arguments.length){case 0:return zY.s();case 1:return zY.h(arguments[0]);case 2:return zY.g(arguments[0],arguments[1]);default:for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return zY.l(arguments[0],arguments[1],new $APP.Kd(c.slice(2),0,null))}};zY.s=function(){return null};
zY.h=function(a){return $APP.De(a)?(a=$APP.xz.g(function(b){return $APP.p(b)?YW(b)?$APP.Xi(b):b:null},a),$APP.z(a)?$APP.Sp.g(" ",a):null):YW(a)?$APP.Xi(a):a};zY.g=function(a,b){return $APP.p(a)?$APP.p(b)?[$APP.q.h(zY.h(a))," ",$APP.q.h(zY.h(b))].join(""):zY.h(a):zY.h(b)};zY.l=function(a,b,c){return $APP.ff.j(zY,zY.g(a,b),c)};zY.v=function(a){var b=$APP.A(a),c=$APP.G(a);a=$APP.A(c);c=$APP.G(c);return this.l(b,a,c)};zY.o=2;var KX=!1;var YX=0,kZ=jZ?function(){var a=window;return function(){var b=a.requestAnimationFrame;if($APP.p(b))return b;b=a.webkitRequestAnimationFrame;if($APP.p(b))return b;b=a.mozRequestAnimationFrame;if($APP.p(b))return b;b=a.msRequestAnimationFrame;return $APP.p(b)?b:bX}().bind(a)}():bX;$APP.h=gX.prototype;$APP.h.flush_after_render=function(){var a=this.ne;if(null==a)return null;this.ne=null;return eX(a)};$APP.h.queue_render=function(a){null==this.ye&&(this.ye=[]);return fX(this,this.ye,a)};
$APP.h.schedule=function(){function a(){return b.run_queues()}var b=this;if(this.Ee)return null;this.Ee=!0;return kZ.h?kZ.h(a):kZ.call(null,a)};$APP.h.flush_before_flush=function(){var a=this.pe;if(null==a)return null;this.pe=null;return eX(a)};$APP.h.flush_queues=function(){this.flush_before_flush();dX();this.flush_render();return this.flush_after_render()};$APP.h.run_queues=function(){this.Ee=!1;return this.flush_queues()};
$APP.h.add_before_flush=function(a){null==this.pe&&(this.pe=[]);return fX(this,this.pe,a)};$APP.h.add_after_render=function(a){null==this.ne&&(this.ne=[]);return fX(this,this.ne,a)};$APP.h.flush_render=function(){var a=this.ye;if(null==a)return null;this.ye=null;a:{a.sort(cX);for(var b=a.length,c=0;;)if(c<b){var d=a[c];!0===d.cljsIsDirty&&d.forceUpdate();c+=1}else break a}return null};var hX=new gX;var mX;$APP.ek.h(0);var xX=null;$APP.h=tX.prototype;$APP.h.S=function(a,b,c){return sX(b,c,"RAtom",new $APP.vb(null,1,[$APP.eC,this.nb(null)],null))};$APP.h.W=function(){return this.F};$APP.h.V=function(){return $APP.Ha(this)};$APP.h.N=function(a,b){return this===b};$APP.h.Xb=function(a,b){a=this.state;this.state=b;null!=this.ub&&rX(this,a,b);return b};$APP.h.lf=function(a,b){return this.Xb(null,b.h?b.h(this.state):b.call(null,this.state))};
$APP.h.mf=function(a,b,c){return this.Xb(null,b.g?b.g(this.state,c):b.call(null,this.state,c))};$APP.h.nf=function(a,b,c,d){return this.Xb(null,b.j?b.j(this.state,c,d):b.call(null,this.state,c,d))};$APP.h.pf=function(a,b,c,d,e){return this.Xb(null,$APP.bg.J(b,this.state,c,d,e))};$APP.h.rf=function(a,b){rX(this,a,b)};$APP.h.te=function(a,b,c){return pX(this,b,c)};$APP.h.ue=function(a,b){return qX(this,b)};$APP.h.Y=function(a,b){return new tX(this.state,b,this.Sf,this.ub)};
$APP.h.nb=function(){oX(this);return this.state};var JX=function JX(a){switch(arguments.length){case 1:return JX.h(arguments[0]);default:for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return JX.l(arguments[0],new $APP.Kd(c.slice(1),0,null))}};JX.h=function(a){return new tX(a,null,null,null)};JX.l=function(a,b){var c=$APP.dg(b);b=$APP.Q.g(c,$APP.zb);c=$APP.Q.g(c,$APP.wB);return new tX(a,b,c,null)};JX.v=function(a){var b=$APP.A(a);a=$APP.G(a);return this.l(b,a)};
JX.o=1;$APP.h=wX.prototype;$APP.h._peek_at=function(){var a=mX;mX=null;try{return this.nb(null)}finally{mX=a}};$APP.h._handle_change=function(a,b,c){return b===c||this.Qc?null:null==this.rc?(this.Qc=!0,null==xX&&(xX=[],!1===hX.Ee&&hX.schedule()),xX.push(this)):!0===this.rc?this._run(!1):this.rc.h?this.rc.h(this):this.rc.call(null,this)};
$APP.h._update_watching=function(a){var b=$APP.Vi(a),c=$APP.Vi(this.gd);this.gd=a;a=$APP.z($APP.FT.g(b,c));for(var d=null,e=0,f=0;;)if(f<e){var g=d.U(null,f);$APP.Zc(g,this,vX);f+=1}else if(a=$APP.z(a))d=a,$APP.Ke(d)?(a=$APP.jd(d),f=$APP.kd(d),d=a,e=$APP.he(a),a=f):(a=$APP.A(d),$APP.Zc(a,this,vX),a=$APP.G(d),d=null,e=0),f=0;else break;b=$APP.z($APP.FT.g(c,b));c=null;for(e=d=0;;)if(e<d)a=c.U(null,e),$APP.ad(a,this),e+=1;else if(b=$APP.z(b))c=b,$APP.Ke(c)?(b=$APP.jd(c),d=$APP.kd(c),c=b,a=$APP.he(b),
b=d,d=a):(a=$APP.A(c),$APP.ad(a,this),b=$APP.G(c),c=null,d=0),e=0;else return null};$APP.h._queued_run=function(){return this.Qc&&null!=this.gd?this._run(!0):null};$APP.h._try_capture=function(a){try{return this.Xe=null,nX(a,this)}catch(b){return this.Xe=this.state=a=b,this.Qc=!1}};$APP.h._run=function(a){var b=this.state;a=$APP.p(a)?this._try_capture(this.f):nX(this.f,this);this.Ag||(this.state=a,null==this.ub||$APP.K.g(b,a)||rX(this,b,a));return a};
$APP.h._set_opts=function(a){var b=$APP.dg(a);a=$APP.Q.g(b,zX);var c=$APP.Q.g(b,AX),d=$APP.Q.g(b,BX);b=$APP.Q.g(b,MY);null!=a&&(this.rc=a);null!=c&&(this.zh=c);null!=d&&(this.Eg=d);return null!=b?this.Ag=b:null};$APP.h.S=function(a,b,c){return sX(b,c,"Reaction",new $APP.vb(null,1,[$APP.eC,this.nb(null)],null))};$APP.h.V=function(){return $APP.Ha(this)};$APP.h.N=function(a,b){return this===b};
$APP.h.Mf=function(){var a=this.state,b=this.gd;this.rc=this.state=this.gd=null;this.Qc=!0;b=$APP.z($APP.Vi(b));for(var c=null,d=0,e=0;;)if(e<d){var f=c.U(null,e);$APP.ad(f,this);e+=1}else if(b=$APP.z(b))c=b,$APP.Ke(c)?(b=$APP.jd(c),e=$APP.kd(c),c=b,d=$APP.he(b),b=e):(b=$APP.A(c),$APP.ad(b,this),b=$APP.G(c),c=null,d=0),e=0;else break;null!=this.Eg&&this.Eg(a);a=this.ei;if(null==a)return null;b=a.length;for(c=0;;)if(c<b)d=a[c],d.h?d.h(this):d.call(null,this),c+=1;else return null};
$APP.h.Xb=function(a,b){a=this.state;this.state=b;this.zh(a,b);rX(this,a,b);return b};$APP.h.lf=function(a,b){a=this.Xb;var c=this._peek_at();b=b.h?b.h(c):b.call(null,c);return a.call(this,null,b)};$APP.h.mf=function(a,b,c){a=this.Xb;var d=this._peek_at();b=b.g?b.g(d,c):b.call(null,d,c);return a.call(this,null,b)};$APP.h.nf=function(a,b,c,d){a=this.Xb;var e=this._peek_at();b=b.j?b.j(e,c,d):b.call(null,e,c,d);return a.call(this,null,b)};
$APP.h.pf=function(a,b,c,d,e){return this.Xb(null,$APP.bg.J(b,this._peek_at(),c,d,e))};$APP.h.rf=function(a,b){rX(this,a,b)};$APP.h.te=function(a,b,c){return pX(this,b,c)};$APP.h.ue=function(a,b){a=$APP.Be(this.ub);qX(this,b);return!a&&$APP.Be(this.ub)&&null==this.rc?this.Mf(null):null};
$APP.h.nb=function(){var a=this.Xe;if(null!=a)throw a;(a=null==mX)&&(yX.s?yX.s():yX.call(null));a&&null==this.rc?this.Qc&&(a=this.state,this.state=this.f.s?this.f.s():this.f.call(null),null==this.ub||$APP.K.g(a,this.state)||rX(this,a,this.state)):(oX(this),this.Qc&&this._run(!1));return this.state};dX=yX;var EX=CX(null);var SX,DX=new $APP.vb(null,1,[MY,!0],null),VX=new $APP.vb(null,2,[fZ,null,YY,null],null),MX=function(a){var b=$APP.ek.h($APP.ig);return function(c){var d=$APP.Q.g($APP.u(b),c);if(null!=d)return d;d=a.h?a.h(c):a.call(null,c);$APP.nk.C(b,$APP.Ni,c,d);return d}}(function(a){if("string"===typeof a)return a;a=$APP.Xi(a);a=$APP.nl(a,/(unsafe|UNSAFE)[-_]/,"UNSAFE_");a=$APP.sl.g(a,/-/);var b=$APP.z(a);a=$APP.A(b);b=$APP.G(b);return $APP.bg.j($APP.q,a,$APP.vj.g(UW,b))}),$X=new $APP.T(null,5,5,$APP.V,[VY,TY,
ZY,aZ,cZ],null);var hY=new $APP.Qi(null,new $APP.vb(null,6,["url",null,"tel",null,"text",null,"textarea",null,"password",null,"search",null],null),null),BY=new $APP.vb(null,4,[bZ,"ReagentInput",eZ,iY,PY,function(a){return a.uf=null},vY,function(a,b,c,d,e){lY(c);return lX(e,a,b,c,d)}],null);var lZ={},P4,FY=/([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/,nY={"class":"className","for":"htmlFor",charset:"charSet"},qY={},EY={},nZ=function(a){var b=$APP.cm.s(),c=$APP.p(NY.h(a))?yY:wY;if("undefined"===typeof hZ||"undefined"===typeof iZ||"undefined"===typeof lZ||"undefined"===typeof P4)P4=function(d,e,f,g){this.kc=d;this.id=e;this.vg=f;this.vh=g;this.D=393216;this.M=0},P4.prototype.Y=function(d,e){return new P4(this.kc,this.id,this.vg,e)},P4.prototype.W=function(){return this.vh},P4.prototype.Bh=
function(){return this.id},P4.prototype.Gg=function(d,e){return"object"!==$APP.na(e)?e:$APP.Je(e)?GY(e,this,this.vg):$APP.Oe(e)?DY(e,this):YW(e)?$APP.Xi(e):(null!=e?e.D&2147483648||$APP.Cd===e.ga||(e.D?0:$APP.Lb($APP.Wc,e)):$APP.Lb($APP.Wc,e))?$APP.Tj.l($APP.N([e])):e},P4.prototype.Hg=function(d,e,f,g,l){return tY(this,e,f,g,l)},P4.ve=!0,P4.qd="reagent.impl.template/t_reagent$impl$template31470",P4.tf=function(d){return $APP.Vc(d,"reagent.impl.template/t_reagent$impl$template31470")};return new P4(a,
b,c,$APP.ig)}($APP.ig);var oZ=function oZ(a){switch(arguments.length){case 1:return oZ.h(arguments[0]);case 2:return oZ.g(arguments[0],arguments[1]);default:throw Error(["Invalid arity: ",$APP.q.h(arguments.length)].join(""));}};oZ.h=function(a){return kX(nZ,a)};oZ.g=function(a,b){return kX(b,a)};oZ.o=2;
var pZ=function pZ(a){switch(arguments.length){case 1:return pZ.h(arguments[0]);default:for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return pZ.l(arguments[0],new $APP.Kd(c.slice(1),0,null))}};pZ.h=function(a){return JX.h(a)};pZ.l=function(a,b){return $APP.bg.j(JX,a,b)};pZ.v=function(a){var b=$APP.A(a);a=$APP.G(a);return this.l(b,a)};pZ.o=1;var HY=TW(1,{});var IY=$APP.ek.h($APP.ig),qZ=function qZ(a){switch(arguments.length){case 2:return qZ.g(arguments[0],arguments[1]);case 3:return qZ.j(arguments[0],arguments[1],arguments[2]);default:throw Error(["Invalid arity: ",$APP.q.h(arguments.length)].join(""));}};qZ.g=function(a,b){return qZ.j(a,b,nZ)};
qZ.j=function(a,b,c){yX();c=$APP.ve(c)?new $APP.T(null,2,5,$APP.V,[nZ,c],null):new $APP.T(null,2,5,$APP.V,[c,QY.h(c)],null);var d=$APP.M.j(c,0,null);c=$APP.M.j(c,1,null);return JY(function(){return kX(d,$APP.ve(a)?a.s?a.s():a.call(null):a)},b,c)};qZ.o=3;var rZ=$APP.tm(KY,null),sZ=new $APP.vb(null,2,[$APP.nF,function(){var a=new $APP.Id(function(){return pZ},WY,$APP.ri([$APP.tn,$APP.sn,$APP.bn,$APP.ir,$APP.XH,$APP.an,$APP.$m,$APP.hr,$APP.fr,$APP.vr,$APP.UJ],[KY,$APP.nF,"reagent/core.cljs",11,new $APP.vb(null,6,[$APP.aK,!0,$APP.Xo,1,$APP.hG,1,$APP.yG,new $APP.T(null,1,5,$APP.V,[new $APP.T(null,1,5,$APP.V,[RY],null)],null),$APP.fr,$APP.Sl(new $APP.T(null,1,5,$APP.V,[RY],null),new $APP.T(null,3,5,$APP.V,[RY,$APP.Gk,$APP.qH],null)),$APP.qP,$APP.Sl(null,
null)],null),1,211,211,$APP.Sl(new $APP.T(null,1,5,$APP.V,[RY],null),new $APP.T(null,3,5,$APP.V,[RY,$APP.Gk,$APP.qH],null)),"Like clojure.core/atom, except that it keeps track of derefs.\n  Reagent components that derefs one of these are automatically\n  re-rendered.",$APP.p(pZ)?pZ.uc:null])),b=$APP.u(a);a=$APP.ye(a);var c=rZ.Mb(null),d=$APP.sn.h(a);$APP.Gj.g($APP.q.h(c),$APP.q.h(d));c=new $APP.vb(null,4,[$APP.tn,rZ,$APP.sn,d,$APP.fr,$APP.fr.h(a),$APP.vr,$APP.vr.h(a)],null);return $APP.p($APP.Hm.h(a))?
$APP.Rz(d,b,c):$APP.p($APP.gn.h(a))?$APP.Sz(d,b,c):$APP.KA(d,b,c)}(),$Y,function(){var a=new $APP.Id(function(){return oZ},XY,$APP.ri([$APP.tn,$APP.sn,$APP.bn,$APP.ir,$APP.XH,$APP.an,$APP.$m,$APP.hr,$APP.fr,$APP.vr,$APP.UJ],[KY,$Y,"reagent/core.cljs",17,new $APP.vb(null,6,[$APP.aK,!1,$APP.Xo,2,$APP.hG,2,$APP.yG,new $APP.T(null,2,5,$APP.V,[new $APP.T(null,1,5,$APP.V,[$APP.xO],null),new $APP.T(null,2,5,$APP.V,[$APP.xO,LY],null)],null),$APP.fr,$APP.Sl(new $APP.T(null,1,5,$APP.V,[$APP.xO],null),new $APP.T(null,
2,5,$APP.V,[$APP.xO,LY],null)),$APP.qP,$APP.Sl(null,null)],null),1,46,46,$APP.Sl(new $APP.T(null,1,5,$APP.V,[$APP.xO],null),new $APP.T(null,2,5,$APP.V,[$APP.xO,LY],null)),"Turns a vector of Hiccup syntax into a React element. Returns form\n  unchanged if it is not a vector.",$APP.p(oZ)?oZ.uc:null])),b=$APP.u(a);a=$APP.ye(a);var c=rZ.Mb(null),d=$APP.sn.h(a);$APP.Gj.g($APP.q.h(c),$APP.q.h(d));c=new $APP.vb(null,4,[$APP.tn,rZ,$APP.sn,d,$APP.fr,$APP.fr.h(a),$APP.vr,$APP.vr.h(a)],null);return $APP.p($APP.Hm.h(a))?
$APP.Rz(d,b,c):$APP.p($APP.gn.h(a))?$APP.Sz(d,b,c):$APP.KA(d,b,c)}()],null),tZ=$APP.tm(OY,null),uZ=new $APP.vb(null,1,[UY,function(){var a=new $APP.Id(function(){return qZ},dZ,$APP.ri([$APP.tn,$APP.sn,$APP.bn,$APP.ir,$APP.XH,$APP.an,$APP.$m,$APP.hr,$APP.fr,$APP.vr,$APP.UJ],[OY,UY,"reagent/dom.cljs",13,new $APP.vb(null,6,[$APP.aK,!1,$APP.Xo,3,$APP.hG,3,$APP.yG,new $APP.T(null,2,5,$APP.V,[new $APP.T(null,2,5,$APP.V,[$APP.EQ,SY],null),new $APP.T(null,3,5,$APP.V,[$APP.EQ,SY,gZ],null)],null),$APP.fr,$APP.Sl(new $APP.T(null,
2,5,$APP.V,[$APP.EQ,SY],null),new $APP.T(null,3,5,$APP.V,[$APP.EQ,SY,gZ],null)),$APP.qP,$APP.Sl(null,null)],null),1,29,29,$APP.Sl(new $APP.T(null,2,5,$APP.V,[$APP.EQ,SY],null),new $APP.T(null,3,5,$APP.V,[$APP.EQ,SY,gZ],null)),"Render a Reagent component into the DOM. The first argument may be\n  either a vector (using Reagent's Hiccup syntax), or a React element.\n  The second argument should be a DOM node.\n\n  Optionally takes a callback that is called when the component is in place.\n\n  Returns the mounted component instance.",
$APP.p(qZ)?qZ.uc:null])),b=$APP.u(a);a=$APP.ye(a);var c=tZ.Mb(null),d=$APP.sn.h(a);$APP.Gj.g($APP.q.h(c),$APP.q.h(d));c=new $APP.vb(null,4,[$APP.tn,tZ,$APP.sn,d,$APP.fr,$APP.fr.h(a),$APP.vr,$APP.vr.h(a)],null);return $APP.p($APP.Hm.h(a))?$APP.Rz(d,b,c):$APP.p($APP.gn.h(a))?$APP.Sz(d,b,c):$APP.KA(d,b,c)}()],null);$APP.nk.j($APP.qA,$APP.Wz,new $APP.vb(null,1,[$APP.An,new $APP.vb(null,2,[KY,sZ,OY,uZ],null)],null));
}).call(this);