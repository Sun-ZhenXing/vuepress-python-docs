var L=Uint8Array,G=Uint16Array,$t=Uint32Array,gt=new L([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),mt=new L([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),_t=new L([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),pt=function(t,r){for(var e=new G(31),n=0;n<31;++n)e[n]=r+=1<<t[n-1];for(var f=new $t(e[30]),n=1;n<30;++n)for(var d=e[n];d<e[n+1];++d)f[d]=d-e[n]<<5|n;return[e,f]},yt=pt(gt,2),Ot=yt[0],It=yt[1];Ot[28]=258,It[258]=28;for(var Yt=pt(mt,0),kt=Yt[0],at=new G(32768),k=0;k<32768;++k){var V=(k&43690)>>>1|(k&21845)<<1;V=(V&52428)>>>2|(V&13107)<<2,V=(V&61680)>>>4|(V&3855)<<4,at[k]=((V&65280)>>>8|(V&255)<<8)>>>1}for(var X=function(t,r,e){for(var n=t.length,f=0,d=new G(r);f<n;++f)t[f]&&++d[t[f]-1];var $=new G(r);for(f=0;f<r;++f)$[f]=$[f-1]+d[f-1]<<1;var v;if(e){v=new G(1<<r);var a=15-r;for(f=0;f<n;++f)if(t[f])for(var i=f<<4|t[f],b=r-t[f],w=$[t[f]-1]++<<b,l=w|(1<<b)-1;w<=l;++w)v[at[w]>>>a]=i}else for(v=new G(n),f=0;f<n;++f)t[f]&&(v[f]=at[$[t[f]-1]++]>>>15-t[f]);return v},tt=new L(288),k=0;k<144;++k)tt[k]=8;for(var k=144;k<256;++k)tt[k]=9;for(var k=256;k<280;++k)tt[k]=7;for(var k=280;k<288;++k)tt[k]=8;for(var wt=new L(32),k=0;k<32;++k)wt[k]=5;var Ut=X(tt,9,1),zt=X(wt,5,1),ot=function(t){for(var r=t[0],e=1;e<t.length;++e)t[e]>r&&(r=t[e]);return r},j=function(t,r,e){var n=r/8|0;return(t[n]|t[n+1]<<8)>>(r&7)&e},st=function(t,r){var e=r/8|0;return(t[e]|t[e+1]<<8|t[e+2]<<16)>>(r&7)},Ht=function(t){return(t+7)/8|0},ut=function(t,r,e){(r==null||r<0)&&(r=0),(e==null||e>t.length)&&(e=t.length);var n=new(t.BYTES_PER_ELEMENT==2?G:t.BYTES_PER_ELEMENT==4?$t:L)(e-r);return n.set(t.subarray(r,e)),n},Ft=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Q=function(t,r,e){var n=new Error(r||Ft[t]);if(n.code=t,Error.captureStackTrace&&Error.captureStackTrace(n,Q),!e)throw n;return n},At=function(t,r,e){var n=t.length;if(!n||e&&e.f&&!e.l)return r||new L(0);var f=!r||e,d=!e||e.i;e||(e={}),r||(r=new L(n*3));var $=function(R){var J=r.length;if(R>J){var B=new L(Math.max(J*2,R));B.set(r),r=B}},v=e.f||0,a=e.p||0,i=e.b||0,b=e.l,w=e.d,l=e.m,m=e.n,D=n*8;do{if(!b){v=j(t,a,1);var s=j(t,a+1,3);if(a+=3,s)if(s==1)b=Ut,w=zt,l=9,m=5;else if(s==2){var E=j(t,a,31)+257,A=j(t,a+10,15)+4,Y=E+j(t,a+5,31)+1;a+=14;for(var U=new L(Y),H=new L(19),_=0;_<A;++_)H[_t[_]]=j(t,a+_*3,7);a+=A*3;for(var x=ot(H),S=(1<<x)-1,N=X(H,x,1),_=0;_<Y;){var K=N[j(t,a,S)];a+=K&15;var h=K>>>4;if(h<16)U[_++]=h;else{var p=0,u=0;for(h==16?(u=3+j(t,a,3),a+=2,p=U[_-1]):h==17?(u=3+j(t,a,7),a+=3):h==18&&(u=11+j(t,a,127),a+=7);u--;)U[_++]=p}}var o=U.subarray(0,E),g=U.subarray(E);l=ot(o),m=ot(g),b=X(o,l,1),w=X(g,m,1)}else Q(1);else{var h=Ht(a)+4,T=t[h-4]|t[h-3]<<8,C=h+T;if(C>n){d&&Q(0);break}f&&$(i+T),r.set(t.subarray(h,C),i),e.b=i+=T,e.p=a=C*8,e.f=v;continue}if(a>D){d&&Q(0);break}}f&&$(i+131072);for(var c=(1<<l)-1,O=(1<<m)-1,y=a;;y=a){var p=b[st(t,a)&c],M=p>>>4;if(a+=p&15,a>D){d&&Q(0);break}if(p||Q(2),M<256)r[i++]=M;else if(M==256){y=a,b=null;break}else{var z=M-254;if(M>264){var _=M-257,I=gt[_];z=j(t,a,(1<<I)-1)+Ot[_],a+=I}var F=w[st(t,a)&O],P=F>>>4;F||Q(3),a+=F&15;var g=kt[P];if(P>3){var I=mt[P];g+=st(t,a)&(1<<I)-1,a+=I}if(a>D){d&&Q(0);break}f&&$(i+131072);for(var Z=i+z;i<Z;i+=4)r[i]=r[i-g],r[i+1]=r[i+1-g],r[i+2]=r[i+2-g],r[i+3]=r[i+3-g];i=Z}}e.l=b,e.p=y,e.b=i,e.f=v,b&&(v=1,e.m=l,e.d=w,e.n=m)}while(!v);return i==r.length?r:ut(r,0,i)},Lt=new L(0),Nt=function(t){((t[0]&15)!=8||t[0]>>>4>7||(t[0]<<8|t[1])%31)&&Q(6,"invalid zlib data"),t[1]&32&&Q(6,"invalid zlib data: preset dictionaries not supported")};function Wt(t,r){return At((Nt(t),t.subarray(2,-4)),r)}var Dt=typeof TextEncoder<"u"&&new TextEncoder,ft=typeof TextDecoder<"u"&&new TextDecoder;try{ft.decode(Lt,{stream:!0})}catch{}var Pt=function(t){for(var r="",e=0;;){var n=t[e++],f=(n>127)+(n>223)+(n>239);if(e+f>t.length)return[r,ut(t,e-1)];f?f==3?(n=((n&15)<<18|(t[e++]&63)<<12|(t[e++]&63)<<6|t[e++]&63)-65536,r+=String.fromCharCode(55296|n>>10,56320|n&1023)):f&1?r+=String.fromCharCode((n&31)<<6|t[e++]&63):r+=String.fromCharCode((n&15)<<12|(t[e++]&63)<<6|t[e++]&63):r+=String.fromCharCode(n)}};function Zt(t,r){if(r){for(var e=new L(t.length),n=0;n<t.length;++n)e[n]=t.charCodeAt(n);return e}if(Dt)return Dt.encode(t);for(var f=t.length,d=new L(t.length+(t.length>>1)),$=0,v=function(b){d[$++]=b},n=0;n<f;++n){if($+5>d.length){var a=new L($+8+(f-n<<1));a.set(d),d=a}var i=t.charCodeAt(n);i<128||r?v(i):i<2048?(v(192|i>>6),v(128|i&63)):i>55295&&i<57344?(i=65536+(i&1023<<10)|t.charCodeAt(++n)&1023,v(240|i>>18),v(128|i>>12&63),v(128|i>>6&63),v(128|i&63)):(v(224|i>>12),v(128|i>>6&63),v(128|i&63))}return ut(d,0,$)}function jt(t,r){if(r){for(var e="",n=0;n<t.length;n+=16384)e+=String.fromCharCode.apply(null,t.subarray(n,n+16384));return e}else{if(ft)return ft.decode(t);var f=Pt(t),d=f[0],$=f[1];return $.length&&Q(8),d}}function Qt(t){return t}const St=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Mt="__vueuse_ssr_handlers__";St[Mt]=St[Mt]||{};var bt;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(bt||(bt={}));var Bt=Object.defineProperty,xt=Object.getOwnPropertySymbols,Rt=Object.prototype.hasOwnProperty,Jt=Object.prototype.propertyIsEnumerable,Ct=(t,r,e)=>r in t?Bt(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e,qt=(t,r)=>{for(var e in r||(r={}))Rt.call(r,e)&&Ct(t,e,r[e]);if(xt)for(var e of xt(r))Jt.call(r,e)&&Ct(t,e,r[e]);return t};const Vt={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};qt({linear:Qt},Vt);var nt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ct={},Gt={get exports(){return ct},set exports(t){ct=t}};(function(t,r){(function(e,n){t.exports=n()})(nt,function(){var e=1e3,n=6e4,f=36e5,d="millisecond",$="second",v="minute",a="hour",i="day",b="week",w="month",l="quarter",m="year",D="date",s="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,T=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,C={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(p){var u=["th","st","nd","rd"],o=p%100;return"["+p+(u[(o-20)%10]||u[o]||u[0])+"]"}},E=function(p,u,o){var g=String(p);return!g||g.length>=u?p:""+Array(u+1-g.length).join(o)+p},A={s:E,z:function(p){var u=-p.utcOffset(),o=Math.abs(u),g=Math.floor(o/60),c=o%60;return(u<=0?"+":"-")+E(g,2,"0")+":"+E(c,2,"0")},m:function p(u,o){if(u.date()<o.date())return-p(o,u);var g=12*(o.year()-u.year())+(o.month()-u.month()),c=u.clone().add(g,w),O=o-c<0,y=u.clone().add(g+(O?-1:1),w);return+(-(g+(o-c)/(O?c-y:y-c))||0)},a:function(p){return p<0?Math.ceil(p)||0:Math.floor(p)},p:function(p){return{M:w,y:m,w:b,d:i,D,h:a,m:v,s:$,ms:d,Q:l}[p]||String(p||"").toLowerCase().replace(/s$/,"")},u:function(p){return p===void 0}},Y="en",U={};U[Y]=C;var H=function(p){return p instanceof N},_=function p(u,o,g){var c;if(!u)return Y;if(typeof u=="string"){var O=u.toLowerCase();U[O]&&(c=O),o&&(U[O]=o,c=O);var y=u.split("-");if(!c&&y.length>1)return p(y[0])}else{var M=u.name;U[M]=u,c=M}return!g&&c&&(Y=c),c||!g&&Y},x=function(p,u){if(H(p))return p.clone();var o=typeof u=="object"?u:{};return o.date=p,o.args=arguments,new N(o)},S=A;S.l=_,S.i=H,S.w=function(p,u){return x(p,{locale:u.$L,utc:u.$u,x:u.$x,$offset:u.$offset})};var N=function(){function p(o){this.$L=_(o.locale,null,!0),this.parse(o)}var u=p.prototype;return u.parse=function(o){this.$d=function(g){var c=g.date,O=g.utc;if(c===null)return new Date(NaN);if(S.u(c))return new Date;if(c instanceof Date)return new Date(c);if(typeof c=="string"&&!/Z$/i.test(c)){var y=c.match(h);if(y){var M=y[2]-1||0,z=(y[7]||"0").substring(0,3);return O?new Date(Date.UTC(y[1],M,y[3]||1,y[4]||0,y[5]||0,y[6]||0,z)):new Date(y[1],M,y[3]||1,y[4]||0,y[5]||0,y[6]||0,z)}}return new Date(c)}(o),this.$x=o.x||{},this.init()},u.init=function(){var o=this.$d;this.$y=o.getFullYear(),this.$M=o.getMonth(),this.$D=o.getDate(),this.$W=o.getDay(),this.$H=o.getHours(),this.$m=o.getMinutes(),this.$s=o.getSeconds(),this.$ms=o.getMilliseconds()},u.$utils=function(){return S},u.isValid=function(){return this.$d.toString()!==s},u.isSame=function(o,g){var c=x(o);return this.startOf(g)<=c&&c<=this.endOf(g)},u.isAfter=function(o,g){return x(o)<this.startOf(g)},u.isBefore=function(o,g){return this.endOf(g)<x(o)},u.$g=function(o,g,c){return S.u(o)?this[g]:this.set(c,o)},u.unix=function(){return Math.floor(this.valueOf()/1e3)},u.valueOf=function(){return this.$d.getTime()},u.startOf=function(o,g){var c=this,O=!!S.u(g)||g,y=S.p(o),M=function(B,W){var q=S.w(c.$u?Date.UTC(c.$y,W,B):new Date(c.$y,W,B),c);return O?q:q.endOf(i)},z=function(B,W){return S.w(c.toDate()[B].apply(c.toDate("s"),(O?[0,0,0,0]:[23,59,59,999]).slice(W)),c)},I=this.$W,F=this.$M,P=this.$D,Z="set"+(this.$u?"UTC":"");switch(y){case m:return O?M(1,0):M(31,11);case w:return O?M(1,F):M(0,F+1);case b:var R=this.$locale().weekStart||0,J=(I<R?I+7:I)-R;return M(O?P-J:P+(6-J),F);case i:case D:return z(Z+"Hours",0);case a:return z(Z+"Minutes",1);case v:return z(Z+"Seconds",2);case $:return z(Z+"Milliseconds",3);default:return this.clone()}},u.endOf=function(o){return this.startOf(o,!1)},u.$set=function(o,g){var c,O=S.p(o),y="set"+(this.$u?"UTC":""),M=(c={},c[i]=y+"Date",c[D]=y+"Date",c[w]=y+"Month",c[m]=y+"FullYear",c[a]=y+"Hours",c[v]=y+"Minutes",c[$]=y+"Seconds",c[d]=y+"Milliseconds",c)[O],z=O===i?this.$D+(g-this.$W):g;if(O===w||O===m){var I=this.clone().set(D,1);I.$d[M](z),I.init(),this.$d=I.set(D,Math.min(this.$D,I.daysInMonth())).$d}else M&&this.$d[M](z);return this.init(),this},u.set=function(o,g){return this.clone().$set(o,g)},u.get=function(o){return this[S.p(o)]()},u.add=function(o,g){var c,O=this;o=Number(o);var y=S.p(g),M=function(F){var P=x(O);return S.w(P.date(P.date()+Math.round(F*o)),O)};if(y===w)return this.set(w,this.$M+o);if(y===m)return this.set(m,this.$y+o);if(y===i)return M(1);if(y===b)return M(7);var z=(c={},c[v]=n,c[a]=f,c[$]=e,c)[y]||1,I=this.$d.getTime()+o*z;return S.w(I,this)},u.subtract=function(o,g){return this.add(-1*o,g)},u.format=function(o){var g=this,c=this.$locale();if(!this.isValid())return c.invalidDate||s;var O=o||"YYYY-MM-DDTHH:mm:ssZ",y=S.z(this),M=this.$H,z=this.$m,I=this.$M,F=c.weekdays,P=c.months,Z=function(W,q,it,et){return W&&(W[q]||W(g,O))||it[q].slice(0,et)},R=function(W){return S.s(M%12||12,W,"0")},J=c.meridiem||function(W,q,it){var et=W<12?"AM":"PM";return it?et.toLowerCase():et},B={YY:String(this.$y).slice(-2),YYYY:this.$y,M:I+1,MM:S.s(I+1,2,"0"),MMM:Z(c.monthsShort,I,P,3),MMMM:Z(P,I),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:Z(c.weekdaysMin,this.$W,F,2),ddd:Z(c.weekdaysShort,this.$W,F,3),dddd:F[this.$W],H:String(M),HH:S.s(M,2,"0"),h:R(1),hh:R(2),a:J(M,z,!0),A:J(M,z,!1),m:String(z),mm:S.s(z,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:y};return O.replace(T,function(W,q){return q||B[W]||y.replace(":","")})},u.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},u.diff=function(o,g,c){var O,y=S.p(g),M=x(o),z=(M.utcOffset()-this.utcOffset())*n,I=this-M,F=S.m(this,M);return F=(O={},O[m]=F/12,O[w]=F,O[l]=F/3,O[b]=(I-z)/6048e5,O[i]=(I-z)/864e5,O[a]=I/f,O[v]=I/n,O[$]=I/e,O)[y]||I,c?F:S.a(F)},u.daysInMonth=function(){return this.endOf(w).$D},u.$locale=function(){return U[this.$L]},u.locale=function(o,g){if(!o)return this.$L;var c=this.clone(),O=_(o,g,!0);return O&&(c.$L=O),c},u.clone=function(){return S.w(this.$d,this)},u.toDate=function(){return new Date(this.valueOf())},u.toJSON=function(){return this.isValid()?this.toISOString():null},u.toISOString=function(){return this.$d.toISOString()},u.toString=function(){return this.$d.toUTCString()},p}(),K=N.prototype;return x.prototype=K,[["$ms",d],["$s",$],["$m",v],["$H",a],["$W",i],["$M",w],["$y",m],["$D",D]].forEach(function(p){K[p[1]]=function(u){return this.$g(u,p[0],p[1])}}),x.extend=function(p,u){return p.$i||(p(u,N,x),p.$i=!0),x},x.locale=_,x.isDayjs=H,x.unix=function(p){return x(1e3*p)},x.en=U[Y],x.Ls=U,x.p={},x})})(Gt);var lt=ct,ht={},Kt={get exports(){return ht},set exports(t){ht=t}};(function(t,r){(function(e,n){t.exports=n()})(nt,function(){return function(e,n,f){var d=n.prototype,$=function(l){var m,D=l.date,s=l.utc,h={};if(!((m=D)instanceof Date||m instanceof Array||d.$utils().u(m)||m.constructor.name!=="Object")){if(!Object.keys(D).length)return new Date;var T=s?f.utc():f();Object.keys(D).forEach(function(x){var S,N;h[S=x,N=d.$utils().p(S),N==="date"?"day":N]=D[x]});var C=h.day||(h.year||h.month>=0?1:T.date()),E=h.year||T.year(),A=h.month>=0?h.month:h.year||h.day?0:T.month(),Y=h.hour||0,U=h.minute||0,H=h.second||0,_=h.millisecond||0;return s?new Date(Date.UTC(E,A,C,Y,U,H,_)):new Date(E,A,C,Y,U,H,_)}return D},v=d.parse;d.parse=function(l){l.date=$.bind(this)(l),v.bind(this)(l)};var a=d.set,i=d.add,b=d.subtract,w=function(l,m,D,s){s===void 0&&(s=1);var h=Object.keys(m),T=this;return h.forEach(function(C){T=l.bind(T)(m[C]*s,C)}),T};d.set=function(l,m){return m=m===void 0?l:m,l.constructor.name==="Object"?w.bind(this)(function(D,s){return a.bind(this)(s,D)},m,l):a.bind(this)(l,m)},d.add=function(l,m){return l.constructor.name==="Object"?w.bind(this)(i,l,m):i.bind(this)(l,m)},d.subtract=function(l,m){return l.constructor.name==="Object"?w.bind(this)(i,l,m,-1):b.bind(this)(l,m)}}})})(Kt);var Xt=ht,vt={},te={get exports(){return vt},set exports(t){vt=t}};(function(t,r){(function(e,n){t.exports=n()})(nt,function(){var e={year:0,month:1,day:2,hour:3,minute:4,second:5},n={};return function(f,d,$){var v,a=function(l,m,D){D===void 0&&(D={});var s=new Date(l),h=function(T,C){C===void 0&&(C={});var E=C.timeZoneName||"short",A=T+"|"+E,Y=n[A];return Y||(Y=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:T,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:E}),n[A]=Y),Y}(m,D);return h.formatToParts(s)},i=function(l,m){for(var D=a(l,m),s=[],h=0;h<D.length;h+=1){var T=D[h],C=T.type,E=T.value,A=e[C];A>=0&&(s[A]=parseInt(E,10))}var Y=s[3],U=Y===24?0:Y,H=s[0]+"-"+s[1]+"-"+s[2]+" "+U+":"+s[4]+":"+s[5]+":000",_=+l;return($.utc(H).valueOf()-(_-=_%1e3))/6e4},b=d.prototype;b.tz=function(l,m){l===void 0&&(l=v);var D=this.utcOffset(),s=this.toDate(),h=s.toLocaleString("en-US",{timeZone:l}),T=Math.round((s-new Date(h))/1e3/60),C=$(h).$set("millisecond",this.$ms).utcOffset(15*-Math.round(s.getTimezoneOffset()/15)-T,!0);if(m){var E=C.utcOffset();C=C.add(D-E,"minute")}return C.$x.$timezone=l,C},b.offsetName=function(l){var m=this.$x.$timezone||$.tz.guess(),D=a(this.valueOf(),m,{timeZoneName:l}).find(function(s){return s.type.toLowerCase()==="timezonename"});return D&&D.value};var w=b.startOf;b.startOf=function(l,m){if(!this.$x||!this.$x.$timezone)return w.call(this,l,m);var D=$(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return w.call(D,l,m).tz(this.$x.$timezone,!0)},$.tz=function(l,m,D){var s=D&&m,h=D||m||v,T=i(+$(),h);if(typeof l!="string")return $(l).tz(h);var C=function(U,H,_){var x=U-60*H*1e3,S=i(x,_);if(H===S)return[x,H];var N=i(x-=60*(S-H)*1e3,_);return S===N?[x,S]:[U-60*Math.min(S,N)*1e3,Math.max(S,N)]}($.utc(l,s).valueOf(),T,h),E=C[0],A=C[1],Y=$(E).utcOffset(A);return Y.$x.$timezone=h,Y},$.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},$.tz.setDefault=function(l){v=l}}})})(te);var ee=vt,dt={},ne={get exports(){return dt},set exports(t){dt=t}};(function(t,r){(function(e,n){t.exports=n()})(nt,function(){var e="minute",n=/[+-]\d\d(?::?\d\d)?/g,f=/([+-]|\d\d)/g;return function(d,$,v){var a=$.prototype;v.utc=function(s){var h={date:s,utc:!0,args:arguments};return new $(h)},a.utc=function(s){var h=v(this.toDate(),{locale:this.$L,utc:!0});return s?h.add(this.utcOffset(),e):h},a.local=function(){return v(this.toDate(),{locale:this.$L,utc:!1})};var i=a.parse;a.parse=function(s){s.utc&&(this.$u=!0),this.$utils().u(s.$offset)||(this.$offset=s.$offset),i.call(this,s)};var b=a.init;a.init=function(){if(this.$u){var s=this.$d;this.$y=s.getUTCFullYear(),this.$M=s.getUTCMonth(),this.$D=s.getUTCDate(),this.$W=s.getUTCDay(),this.$H=s.getUTCHours(),this.$m=s.getUTCMinutes(),this.$s=s.getUTCSeconds(),this.$ms=s.getUTCMilliseconds()}else b.call(this)};var w=a.utcOffset;a.utcOffset=function(s,h){var T=this.$utils().u;if(T(s))return this.$u?0:T(this.$offset)?w.call(this):this.$offset;if(typeof s=="string"&&(s=function(Y){Y===void 0&&(Y="");var U=Y.match(n);if(!U)return null;var H=(""+U[0]).match(f)||["-",0,0],_=H[0],x=60*+H[1]+ +H[2];return x===0?0:_==="+"?x:-x}(s),s===null))return this;var C=Math.abs(s)<=16?60*s:s,E=this;if(h)return E.$offset=C,E.$u=s===0,E;if(s!==0){var A=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(E=this.local().add(C+A,e)).$offset=C,E.$x.$localOffset=A}else E=this.utc();return E};var l=a.format;a.format=function(s){var h=s||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return l.call(this,h)},a.valueOf=function(){var s=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*s},a.isUTC=function(){return!!this.$u},a.toISOString=function(){return this.toDate().toISOString()},a.toString=function(){return this.toDate().toUTCString()};var m=a.toDate;a.toDate=function(s){return s==="s"&&this.$offset?v(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():m.call(this)};var D=a.diff;a.diff=function(s,h,T){if(s&&this.$u===s.$u)return D.call(this,s,h,T);var C=this.local(),E=v(s).local();return D.call(C,E,h,T)}}})})(ne);var re=dt;lt.extend(Xt),lt.extend(re),lt.extend(ee);const Tt=Object.entries,ie=Object.keys,ae=t=>{const r=atob(t);return jt(Wt(Zt(r,!0)))},rt=(t,r)=>{const e=t.toLowerCase(),n=r.toLowerCase(),f=[];let d=0,$=0;const v=(i,b=!1)=>{let w="";$===0?w=i.length>20?`… ${i.slice(-20)}`:i:b?w=i.length+$>100?`${i.slice(0,100-$)}… `:i:w=i.length>20?`${i.slice(0,20)} … ${i.slice(-20)}`:i,w&&f.push(w),$+=w.length,b||(f.push(["strong",r]),$+=r.length,$>=100&&f.push(" …"))};let a=e.indexOf(n,d);if(a===-1)return null;for(;a>=0;){const i=a+n.length;if(v(t.slice(d,a)),d=i,$>100)break;a=e.indexOf(n,d)}return $<100&&v(t.slice(d),!0),f},Et=t=>t.reduce((r,{type:e})=>r+(e==="title"?50:e==="heading"?20:e==="custom"?10:1),0),oe=(t,r)=>{var e;const n={};for(const[f,d]of Tt(r)){const $=((e=r[f.replace(/\/[^\\]*$/,"")])==null?void 0:e.title)||"",v=`${$?`${$} > `:""}${d.title}`,a=rt(d.title,t);a&&(n[v]=[...n[v]||[],{type:"title",path:f,display:a}]),d.customFields&&Tt(d.customFields).forEach(([i,b])=>{b.forEach(w=>{const l=rt(w,t);l&&(n[v]=[...n[v]||[],{type:"custom",path:f,index:i,display:l}])})});for(const i of d.contents){const b=rt(i.header,t);b&&(n[v]=[...n[v]||[],{type:"heading",path:f+(i.slug?`#${i.slug}`:""),display:b}]);for(const w of i.contents){const l=rt(w,t);l&&(n[v]=[...n[v]||[],{type:"content",header:i.header,path:f+(i.slug?`#${i.slug}`:""),display:l}])}}}return ie(n).sort((f,d)=>Et(n[f])-Et(n[d])).map(f=>({title:f,contents:n[f]}))},se=JSON.parse(ae("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"));self.onmessage=({data:t})=>{self.postMessage(oe(t.query,se[t.routeLocale]))};
//# sourceMappingURL=minify.js.map
