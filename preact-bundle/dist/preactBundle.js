var t,n,e,_,o,r,i,u,f,s={},l=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,h=Array.isArray;function a(t,n){for(var e in n)t[e]=n[e];return t}function p(t){var n=t.parentNode;n&&n.removeChild(t)}function v(n,e,_){var o,r,i,u={};for(i in e)"key"==i?o=e[i]:"ref"==i?r=e[i]:u[i]=e[i];if(arguments.length>2&&(u.children=arguments.length>3?t.call(arguments,2):_),"function"==typeof n&&null!=n.defaultProps)for(i in n.defaultProps)void 0===u[i]&&(u[i]=n.defaultProps[i]);return d(n,u,o,r,null)}function d(t,_,o,r,i){var u={type:t,props:_,key:o,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==i?++e:i,__i:-1,__u:0};return null==i&&null!=n.vnode&&n.vnode(u),u}function y(t){return t.children}function m(t,n){this.props=t,this.context=n}function g(t,n){if(null==n)return t.__?g(t.__,t.__i+1):null;for(var e;n<t.__k.length;n++)if(null!=(e=t.__k[n])&&null!=e.__e)return e.__e;return"function"==typeof t.type?g(t):null}function b(t,e,_){var o,r=t.__v,i=r.__e,u=t.__P;if(u)return(o=a({},r)).__v=r.__v+1,n.vnode&&n.vnode(o),$(u,o,r,t.__n,void 0!==u.ownerSVGElement,32&r.__u?[i]:null,e,null==i?g(r):i,!!(32&r.__u),_),o.__v=r.__v,o.__.__k[o.__i]=o,o.__d=void 0,o.__e!=i&&x(o),o}function x(t){var n,e;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,n=0;n<t.__k.length;n++)if(null!=(e=t.__k[n])&&null!=e.__e){t.__e=t.__c.base=e.__e;break}return x(t)}}function k(t){(!t.__d&&(t.__d=!0)&&o.push(t)&&!S.__r++||r!==n.debounceRendering)&&((r=n.debounceRendering)||i)(S)}function S(){var t,e,_,r=[],i=[];for(o.sort(u);t=o.shift();)t.__d&&(_=o.length,e=b(t,r,i)||e,0===_||o.length>_?(D(r,e,i),i.length=r.length=0,e=void 0,o.sort(u)):e&&n.__c&&n.__c(e,l));e&&D(r,e,i),S.__r=0}function w(t,n,e,_,o,r,i,u,f,c,a){var p,v,m,b,x,k=_&&_.__k||l,S=n.length;for(e.__d=f,function(t,n,e){var _,o,r,i,u,f=n.length,s=e.length,l=s,c=0;for(t.__k=[],_=0;_<f;_++)i=_+c,null!=(o=t.__k[_]=null==(o=n[_])||"boolean"==typeof o||"function"==typeof o?null:"string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?d(null,o,null,null,null):h(o)?d(y,{children:o},null,null,null):void 0===o.constructor&&o.__b>0?d(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)?(o.__=t,o.__b=t.__b+1,u=E(o,e,i,l),o.__i=u,r=null,-1!==u&&(l--,(r=e[u])&&(r.__u|=131072)),null==r||null===r.__v?(-1==u&&c--,"function"!=typeof o.type&&(o.__u|=65536)):u!==i&&(u===i+1?c++:u>i?l>f-i?c+=u-i:c--:u<i?u==i-1&&(c=u-i):c=0,u!==_+c&&(o.__u|=65536))):(r=e[i])&&null==r.key&&r.__e&&0==(131072&r.__u)&&(r.__e==t.__d&&(t.__d=g(r)),A(r,r,!1),e[i]=null,l--);if(l)for(_=0;_<s;_++)null!=(r=e[_])&&0==(131072&r.__u)&&(r.__e==t.__d&&(t.__d=g(r)),A(r,r))}(e,n,k),f=e.__d,p=0;p<S;p++)null!=(m=e.__k[p])&&"boolean"!=typeof m&&"function"!=typeof m&&(v=-1===m.__i?s:k[m.__i]||s,m.__i=p,$(t,m,v,o,r,i,u,f,c,a),b=m.__e,m.ref&&v.ref!=m.ref&&(v.ref&&T(v.ref,null,m),a.push(m.ref,m.__c||b,m)),null==x&&null!=b&&(x=b),65536&m.__u||v.__k===m.__k?f=C(m,f,t):"function"==typeof m.type&&void 0!==m.__d?f=m.__d:b&&(f=b.nextSibling),m.__d=void 0,m.__u&=-196609);e.__d=f,e.__e=x}function C(t,n,e){var _,o;if("function"==typeof t.type){for(_=t.__k,o=0;_&&o<_.length;o++)_[o]&&(_[o].__=t,n=C(_[o],n,e));return n}t.__e!=n&&(e.insertBefore(t.__e,n||null),n=t.__e);do{n=n&&n.nextSibling}while(null!=n&&8===n.nodeType);return n}function E(t,n,e,_){var o=t.key,r=t.type,i=e-1,u=e+1,f=n[e];if(null===f||f&&o==f.key&&r===f.type&&0==(131072&f.__u))return e;if(_>(null!=f&&0==(131072&f.__u)?1:0))for(;i>=0||u<n.length;){if(i>=0){if((f=n[i])&&0==(131072&f.__u)&&o==f.key&&r===f.type)return i;i--}if(u<n.length){if((f=n[u])&&0==(131072&f.__u)&&o==f.key&&r===f.type)return u;u++}}return-1}function U(t,n,e){"-"===n[0]?t.setProperty(n,null==e?"":e):t[n]=null==e?"":"number"!=typeof e||c.test(n)?e:e+"px"}function H(t,n,e,_,o){var r;t:if("style"===n)if("string"==typeof e)t.style.cssText=e;else{if("string"==typeof _&&(t.style.cssText=_=""),_)for(n in _)e&&n in e||U(t.style,n,"");if(e)for(n in e)_&&e[n]===_[n]||U(t.style,n,e[n])}else if("o"===n[0]&&"n"===n[1])r=n!==(n=n.replace(/(PointerCapture)$|Capture$/i,"$1")),n=n.toLowerCase()in t?n.toLowerCase().slice(2):n.slice(2),t.l||(t.l={}),t.l[n+r]=e,e?_?e.u=_.u:(e.u=Date.now(),t.addEventListener(n,r?N:P,r)):t.removeEventListener(n,r?N:P,r);else{if(o)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==n&&"height"!==n&&"href"!==n&&"list"!==n&&"form"!==n&&"tabIndex"!==n&&"download"!==n&&"rowSpan"!==n&&"colSpan"!==n&&"role"!==n&&n in t)try{t[n]=null==e?"":e;break t}catch(t){}"function"==typeof e||(null==e||!1===e&&"-"!==n[4]?t.removeAttribute(n):t.setAttribute(n,e))}}function P(t){if(this.l){var e=this.l[t.type+!1];if(t.t){if(t.t<=e.u)return}else t.t=Date.now();return e(n.event?n.event(t):t)}}function N(t){if(this.l)return this.l[t.type+!0](n.event?n.event(t):t)}function $(e,_,o,r,i,u,f,l,c,v){var d,b,x,k,S,C,E,U,P,N,$,D,T,A,M,W=_.type;if(void 0!==_.constructor)return null;128&o.__u&&(c=!!(32&o.__u),u=[l=_.__e=o.__e]),(d=n.__b)&&d(_);t:if("function"==typeof W)try{if(U=_.props,P=(d=W.contextType)&&r[d.__c],N=d?P?P.props.value:d.__:r,o.__c?E=(b=_.__c=o.__c).__=b.__E:("prototype"in W&&W.prototype.render?_.__c=b=new W(U,N):(_.__c=b=new m(U,N),b.constructor=W,b.render=V),P&&P.sub(b),b.props=U,b.state||(b.state={}),b.context=N,b.__n=r,x=b.__d=!0,b.__h=[],b._sb=[]),null==b.__s&&(b.__s=b.state),null!=W.getDerivedStateFromProps&&(b.__s==b.state&&(b.__s=a({},b.__s)),a(b.__s,W.getDerivedStateFromProps(U,b.__s))),k=b.props,S=b.state,b.__v=_,x)null==W.getDerivedStateFromProps&&null!=b.componentWillMount&&b.componentWillMount(),null!=b.componentDidMount&&b.__h.push(b.componentDidMount);else{if(null==W.getDerivedStateFromProps&&U!==k&&null!=b.componentWillReceiveProps&&b.componentWillReceiveProps(U,N),!b.__e&&(null!=b.shouldComponentUpdate&&!1===b.shouldComponentUpdate(U,b.__s,N)||_.__v===o.__v)){for(_.__v!==o.__v&&(b.props=U,b.state=b.__s,b.__d=!1),_.__e=o.__e,_.__k=o.__k,_.__k.forEach(function(t){t&&(t.__=_)}),$=0;$<b._sb.length;$++)b.__h.push(b._sb[$]);b._sb=[],b.__h.length&&f.push(b);break t}null!=b.componentWillUpdate&&b.componentWillUpdate(U,b.__s,N),null!=b.componentDidUpdate&&b.__h.push(function(){b.componentDidUpdate(k,S,C)})}if(b.context=N,b.props=U,b.__P=e,b.__e=!1,D=n.__r,T=0,"prototype"in W&&W.prototype.render){for(b.state=b.__s,b.__d=!1,D&&D(_),d=b.render(b.props,b.state,b.context),A=0;A<b._sb.length;A++)b.__h.push(b._sb[A]);b._sb=[]}else do{b.__d=!1,D&&D(_),d=b.render(b.props,b.state,b.context),b.state=b.__s}while(b.__d&&++T<25);b.state=b.__s,null!=b.getChildContext&&(r=a(a({},r),b.getChildContext())),x||null==b.getSnapshotBeforeUpdate||(C=b.getSnapshotBeforeUpdate(k,S)),w(e,h(M=null!=d&&d.type===y&&null==d.key?d.props.children:d)?M:[M],_,o,r,i,u,f,l,c,v),b.base=_.__e,_.__u&=-161,b.__h.length&&f.push(b),E&&(b.__E=b.__=null)}catch(e){_.__v=null,c||null!=u?(_.__e=l,_.__u|=c?160:32,u[u.indexOf(l)]=null):(_.__e=o.__e,_.__k=o.__k),n.__e(e,_,o)}else null==u&&_.__v===o.__v?(_.__k=o.__k,_.__e=o.__e):_.__e=function(n,e,_,o,r,i,u,f,l){var c,a,v,d,y,m,b,x=_.props,k=e.props,S=e.type;if("svg"===S&&(r=!0),null!=i)for(c=0;c<i.length;c++)if((y=i[c])&&"setAttribute"in y==!!S&&(S?y.localName===S:3===y.nodeType)){n=y,i[c]=null;break}if(null==n){if(null===S)return document.createTextNode(k);n=r?document.createElementNS("http://www.w3.org/2000/svg",S):document.createElement(S,k.is&&k),i=null,f=!1}if(null===S)x===k||f&&n.data===k||(n.data=k);else{if(i=i&&t.call(n.childNodes),x=_.props||s,!f&&null!=i)for(x={},c=0;c<n.attributes.length;c++)x[(y=n.attributes[c]).name]=y.value;for(c in x)y=x[c],"children"==c||("dangerouslySetInnerHTML"==c?v=y:"key"===c||c in k||H(n,c,null,y,r));for(c in k)y=k[c],"children"==c?d=y:"dangerouslySetInnerHTML"==c?a=y:"value"==c?m=y:"checked"==c?b=y:"key"===c||f&&"function"!=typeof y||x[c]===y||H(n,c,y,x[c],r);if(a)f||v&&(a.__html===v.__html||a.__html===n.innerHTML)||(n.innerHTML=a.__html),e.__k=[];else if(v&&(n.innerHTML=""),w(n,h(d)?d:[d],e,_,o,r&&"foreignObject"!==S,i,u,i?i[0]:_.__k&&g(_,0),f,l),null!=i)for(c=i.length;c--;)null!=i[c]&&p(i[c]);f||(c="value",void 0!==m&&(m!==n[c]||"progress"===S&&!m||"option"===S&&m!==x[c])&&H(n,c,m,x[c],!1),c="checked",void 0!==b&&b!==n[c]&&H(n,c,b,x[c],!1))}return n}(o.__e,_,o,r,i,u,f,c,v);(d=n.diffed)&&d(_)}function D(t,e,_){for(var o=0;o<_.length;o++)T(_[o],_[++o],_[++o]);n.__c&&n.__c(e,t),t.some(function(e){try{t=e.__h,e.__h=[],t.some(function(t){t.call(e)})}catch(t){n.__e(t,e.__v)}})}function T(t,e,_){try{"function"==typeof t?t(e):t.current=e}catch(t){n.__e(t,_)}}function A(t,e,_){var o,r;if(n.unmount&&n.unmount(t),(o=t.ref)&&(o.current&&o.current!==t.__e||T(o,null,e)),null!=(o=t.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(t){n.__e(t,e)}o.base=o.__P=null,t.__c=void 0}if(o=t.__k)for(r=0;r<o.length;r++)o[r]&&A(o[r],e,_||"function"!=typeof t.type);_||null==t.__e||p(t.__e),t.__=t.__e=t.__d=void 0}function V(t,n,e){return this.constructor(t,e)}t=l.slice,n={__e:function(t,n,e,_){for(var o,r,i;n=n.__;)if((o=n.__c)&&!o.__)try{if((r=o.constructor)&&null!=r.getDerivedStateFromError&&(o.setState(r.getDerivedStateFromError(t)),i=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(t,_||{}),i=o.__d),i)return o.__E=o}catch(n){t=n}throw t}},e=0,_=function(t){return null!=t&&null==t.constructor},m.prototype.setState=function(t,n){var e;e=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=a({},this.state),"function"==typeof t&&(t=t(a({},e),this.props)),t&&a(e,t),null!=t&&this.__v&&(n&&this._sb.push(n),k(this))},m.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),k(this))},m.prototype.render=y,o=[],i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,u=function(t,n){return t.__v.__b-n.__v.__b},S.__r=0,f=0;var M,W,F,L,O=0,R=[],j=[],q=n,B=q.__b,I=q.__r,G=q.diffed,z=q.__c,J=q.unmount,K=q.__;function Q(t,n){q.__h&&q.__h(W,t,O||n),O=0;var e=W.__H||(W.__H={__:[],__h:[]});return t>=e.__.length&&e.__.push({__V:j}),e.__[t]}function X(t){return O=1,Y(ft,t)}function Y(t,n,e){var _=Q(M++,2);if(_.t=t,!_.__c&&(_.__=[e?e(n):ft(void 0,n),function(t){var n=_.__N?_.__N[0]:_.__[0],e=_.t(n,t);n!==e&&(_.__N=[e,_.__[1]],_.__c.setState({}))}],_.__c=W,!W.u)){var o=function(t,n,e){if(!_.__c.__H)return!0;var o=_.__c.__H.__.filter(function(t){return!!t.__c});if(o.every(function(t){return!t.__N}))return!r||r.call(this,t,n,e);var i=!1;return o.forEach(function(t){if(t.__N){var n=t.__[0];t.__=t.__N,t.__N=void 0,n!==t.__[0]&&(i=!0)}}),!(!i&&_.__c.props===t)&&(!r||r.call(this,t,n,e))};W.u=!0;var r=W.shouldComponentUpdate,i=W.componentWillUpdate;W.componentWillUpdate=function(t,n,e){if(this.__e){var _=r;r=void 0,o(t,n,e),r=_}i&&i.call(this,t,n,e)},W.shouldComponentUpdate=o}return _.__N||_.__}function Z(t,n){var e=Q(M++,4);!q.__s&&ut(e.__H,n)&&(e.__=t,e.i=n,W.__h.push(e))}function tt(t){return O=5,nt(function(){return{current:t}},[])}function nt(t,n){var e=Q(M++,7);return ut(e.__H,n)?(e.__V=t(),e.i=n,e.__h=t,e.__V):e.__}function et(){for(var t;t=R.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(rt),t.__H.__h.forEach(it),t.__H.__h=[]}catch(n){t.__H.__h=[],q.__e(n,t.__v)}}q.__b=function(t){W=null,B&&B(t)},q.__=function(t,n){t&&n.__k&&n.__k.__m&&(t.__m=n.__k.__m),K&&K(t,n)},q.__r=function(t){I&&I(t),M=0;var n=(W=t.__c).__H;n&&(F===W?(n.__h=[],W.__h=[],n.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=j,t.__N=t.i=void 0})):(n.__h.forEach(rt),n.__h.forEach(it),n.__h=[],M=0)),F=W},q.diffed=function(t){G&&G(t);var n=t.__c;n&&n.__H&&(n.__H.__h.length&&(1!==R.push(n)&&L===q.requestAnimationFrame||((L=q.requestAnimationFrame)||ot)(et)),n.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==j&&(t.__=t.__V),t.i=void 0,t.__V=j})),F=W=null},q.__c=function(t,n){n.some(function(t){try{t.__h.forEach(rt),t.__h=t.__h.filter(function(t){return!t.__||it(t)})}catch(e){n.some(function(t){t.__h&&(t.__h=[])}),n=[],q.__e(e,t.__v)}}),z&&z(t,n)},q.unmount=function(t){J&&J(t);var n,e=t.__c;e&&e.__H&&(e.__H.__.forEach(function(t){try{rt(t)}catch(t){n=t}}),e.__H=void 0,n&&q.__e(n,e.__v))};var _t="function"==typeof requestAnimationFrame;function ot(t){var n,e=function(){clearTimeout(_),_t&&cancelAnimationFrame(n),setTimeout(t)},_=setTimeout(e,100);_t&&(n=requestAnimationFrame(e))}function rt(t){var n=W,e=t.__c;"function"==typeof e&&(t.__c=void 0,e()),W=n}function it(t){var n=W;t.__c=t.__(),W=n}function ut(t,n){return!t||t.length!==n.length||n.some(function(n,e){return n!==t[e]})}function ft(t,n){return"function"==typeof n?n(t):n}var st=function(t,n,e,_){var o;n[0]=0;for(var r=1;r<n.length;r++){var i=n[r++],u=n[r]?(n[0]|=i?1:2,e[n[r++]]):n[++r];3===i?_[0]=u:4===i?_[1]=Object.assign(_[1]||{},u):5===i?(_[1]=_[1]||{})[n[++r]]=u:6===i?_[1][n[++r]]+=u+"":i?(o=t.apply(u,st(t,u,e,["",null])),_.push(o),u[0]?n[0]|=2:(n[r-2]=0,n[r]=o)):_.push(u)}return _},lt=new Map;function ct(t){var n=lt.get(this);return n||(n=new Map,lt.set(this,n)),(n=st(this,n.get(t)||(n.set(t,n=function(t){for(var n,e,_=1,o="",r="",i=[0],u=function(t){1===_&&(t||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?i.push(0,t,o):3===_&&(t||o)?(i.push(3,t,o),_=2):2===_&&"..."===o&&t?i.push(4,t,0):2===_&&o&&!t?i.push(5,0,!0,o):_>=5&&((o||!t&&5===_)&&(i.push(_,0,o,e),_=6),t&&(i.push(_,t,0,e),_=6)),o=""},f=0;f<t.length;f++){f&&(1===_&&u(),u(f));for(var s=0;s<t[f].length;s++)n=t[f][s],1===_?"<"===n?(u(),i=[i],_=3):o+=n:4===_?"--"===o&&">"===n?(_=1,o=""):o=n+o[0]:r?n===r?r="":o+=n:'"'===n||"'"===n?r=n:">"===n?(u(),_=1):_&&("="===n?(_=5,e=o,o=""):"/"===n&&(_<5||">"===t[f][s+1])?(u(),3===_&&(i=i[0]),_=i,(i=i[0]).push(2,0,_),_=0):" "===n||"\t"===n||"\n"===n||"\r"===n?(u(),_=2):o+=n),3===_&&"!--"===o&&(_=4,i=i[0])}return u(),i}(t)),n),arguments,[])).length>1?n:n[0]}function ht(){throw new Error("Cycle detected")}var at=Symbol.for("preact-signals");function pt(){if(gt>1)gt--;else{for(var t,n=!1;void 0!==mt;){var e=mt;for(mt=void 0,bt++;void 0!==e;){var _=e.o;if(e.o=void 0,e.f&=-3,!(8&e.f)&&Ct(e))try{e.c()}catch(e){n||(t=e,n=!0)}e=_}}if(bt=0,gt--,n)throw t}}var vt,dt,yt=void 0,mt=void 0,gt=0,bt=0,xt=0;function kt(t){if(void 0!==yt){var n=t.n;if(void 0===n||n.t!==yt)return n={i:0,S:t,p:yt.s,n:void 0,t:yt,e:void 0,x:void 0,r:n},void 0!==yt.s&&(yt.s.n=n),yt.s=n,t.n=n,32&yt.f&&t.S(n),n;if(-1===n.i)return n.i=0,void 0!==n.n&&(n.n.p=n.p,void 0!==n.p&&(n.p.n=n.n),n.p=yt.s,n.n=void 0,yt.s.n=n,yt.s=n),n}}function St(t){this.v=t,this.i=0,this.n=void 0,this.t=void 0}function wt(t){return new St(t)}function Ct(t){for(var n=t.s;void 0!==n;n=n.n)if(n.S.i!==n.i||!n.S.h()||n.S.i!==n.i)return!0;return!1}function Et(t){for(var n=t.s;void 0!==n;n=n.n){var e=n.S.n;if(void 0!==e&&(n.r=e),n.S.n=n,n.i=-1,void 0===n.n){t.s=n;break}}}function Ut(t){for(var n=t.s,e=void 0;void 0!==n;){var _=n.p;-1===n.i?(n.S.U(n),void 0!==_&&(_.n=n.n),void 0!==n.n&&(n.n.p=_)):e=n,n.S.n=n.r,void 0!==n.r&&(n.r=void 0),n=_}t.s=e}function Ht(t){St.call(this,void 0),this.x=t,this.s=void 0,this.g=xt-1,this.f=4}function Pt(t){return new Ht(t)}function Nt(t){var n=t.u;if(t.u=void 0,"function"==typeof n){gt++;var e=yt;yt=void 0;try{n()}catch(n){throw t.f&=-2,t.f|=8,$t(t),n}finally{yt=e,pt()}}}function $t(t){for(var n=t.s;void 0!==n;n=n.n)n.S.U(n);t.x=void 0,t.s=void 0,Nt(t)}function Dt(t){if(yt!==this)throw new Error("Out-of-order effect");Ut(this),yt=t,this.f&=-2,8&this.f&&$t(this),pt()}function Tt(t){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}function At(t){var n=new Tt(t);try{n.c()}catch(t){throw n.d(),t}return n.d.bind(n)}function Vt(t,e){n[t]=e.bind(null,n[t]||function(){})}function Mt(t){dt&&dt(),dt=t&&t.S()}function Wt(t){var n=this,e=t.data,o=Lt(e);o.value=e;var r=nt(function(){for(var t=n.__v;t=t.__;)if(t.__c){t.__c.__$f|=4;break}return n.__$u.c=function(){var t;_(r.peek())||3!==(null==(t=n.base)?void 0:t.nodeType)?(n.__$f|=1,n.setState({})):n.base.data=r.peek()},Pt(function(){var t=o.value.value;return 0===t?0:!0===t?"":t||""})},[]);return r.value}function Ft(t,n,e,_){var o=n in t&&void 0===t.ownerSVGElement,r=wt(e);return{o:function(t,n){r.value=t,_=n},d:At(function(){var e=r.value.value;_[n]!==e&&(_[n]=e,o?t[n]=e:e?t.setAttribute(n,e):t.removeAttribute(n))})}}function Lt(t){return nt(function(){return wt(t)},[])}St.prototype.brand=at,St.prototype.h=function(){return!0},St.prototype.S=function(t){this.t!==t&&void 0===t.e&&(t.x=this.t,void 0!==this.t&&(this.t.e=t),this.t=t)},St.prototype.U=function(t){if(void 0!==this.t){var n=t.e,e=t.x;void 0!==n&&(n.x=e,t.e=void 0),void 0!==e&&(e.e=n,t.x=void 0),t===this.t&&(this.t=e)}},St.prototype.subscribe=function(t){var n=this;return At(function(){var e=n.value,_=32&this.f;this.f&=-33;try{t(e)}finally{this.f|=_}})},St.prototype.valueOf=function(){return this.value},St.prototype.toString=function(){return this.value+""},St.prototype.toJSON=function(){return this.value},St.prototype.peek=function(){return this.v},Object.defineProperty(St.prototype,"value",{get:function(){var t=kt(this);return void 0!==t&&(t.i=this.i),this.v},set:function(t){if(yt instanceof Ht&&function(){throw new Error("Computed cannot have side-effects")}(),t!==this.v){bt>100&&ht(),this.v=t,this.i++,xt++,gt++;try{for(var n=this.t;void 0!==n;n=n.x)n.t.N()}finally{pt()}}}}),(Ht.prototype=new St).h=function(){if(this.f&=-3,1&this.f)return!1;if(32==(36&this.f))return!0;if(this.f&=-5,this.g===xt)return!0;if(this.g=xt,this.f|=1,this.i>0&&!Ct(this))return this.f&=-2,!0;var t=yt;try{Et(this),yt=this;var n=this.x();(16&this.f||this.v!==n||0===this.i)&&(this.v=n,this.f&=-17,this.i++)}catch(t){this.v=t,this.f|=16,this.i++}return yt=t,Ut(this),this.f&=-2,!0},Ht.prototype.S=function(t){if(void 0===this.t){this.f|=36;for(var n=this.s;void 0!==n;n=n.n)n.S.S(n)}St.prototype.S.call(this,t)},Ht.prototype.U=function(t){if(void 0!==this.t&&(St.prototype.U.call(this,t),void 0===this.t)){this.f&=-33;for(var n=this.s;void 0!==n;n=n.n)n.S.U(n)}},Ht.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;void 0!==t;t=t.x)t.t.N()}},Ht.prototype.peek=function(){if(this.h()||ht(),16&this.f)throw this.v;return this.v},Object.defineProperty(Ht.prototype,"value",{get:function(){1&this.f&&ht();var t=kt(this);if(this.h(),void 0!==t&&(t.i=this.i),16&this.f)throw this.v;return this.v}}),Tt.prototype.c=function(){var t=this.S();try{if(8&this.f)return;if(void 0===this.x)return;var n=this.x();"function"==typeof n&&(this.u=n)}finally{t()}},Tt.prototype.S=function(){1&this.f&&ht(),this.f|=1,this.f&=-9,Nt(this),Et(this),gt++;var t=yt;return yt=this,Dt.bind(this,t)},Tt.prototype.N=function(){2&this.f||(this.f|=2,this.o=mt,mt=this)},Tt.prototype.d=function(){this.f|=8,1&this.f||$t(this)},Wt.displayName="_st",Object.defineProperties(St.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:Wt},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}}),Vt("__b",function(t,n){if("string"==typeof n.type){var e,_=n.props;for(var o in _)if("children"!==o){var r=_[o];r instanceof St&&(e||(n.__np=e={}),e[o]=r,_[o]=r.peek())}}t(n)}),Vt("__r",function(t,n){Mt();var e,_=n.__c;_&&(_.__$f&=-2,void 0===(e=_.__$u)&&(_.__$u=e=function(t){var n;return At(function(){n=this}),n.c=function(){_.__$f|=1,_.setState({})},n}())),vt=_,Mt(e),t(n)}),Vt("__e",function(t,n,e,_){Mt(),vt=void 0,t(n,e,_)}),Vt("diffed",function(t,n){var e;if(Mt(),vt=void 0,"string"==typeof n.type&&(e=n.__e)){var _=n.__np,o=n.props;if(_){var r=e.U;if(r)for(var i in r){var u=r[i];void 0===u||i in _||(u.d(),r[i]=void 0)}else e.U=r={};for(var f in _){var s=r[f],l=_[f];void 0===s?(s=Ft(e,f,l,o),r[f]=s):s.o(l,o)}}}t(n)}),Vt("unmount",function(t,n){if("string"==typeof n.type){var e=n.__e;if(e){var _=e.U;if(_)for(var o in e.U=void 0,_){var r=_[o];r&&r.d()}}}else{var i=n.__c;if(i){var u=i.__$u;u&&(i.__$u=void 0,u.d())}}t(n)}),Vt("__h",function(t,n,e,_){(_<3||9===_)&&(n.__$f|=2),t(n,e,_)}),m.prototype.shouldComponentUpdate=function(t,n){var e=this.__$u;if(!(e&&void 0!==e.s||4&this.__$f))return!0;if(3&this.__$f)return!0;for(var _ in n)return!0;for(var o in t)if("__source"!==o&&t[o]!==this.props[o])return!0;for(var r in this.props)if(!(r in t))return!0;return!1};var Ot=ct.bind(v);exports.Component=m,exports.batch=function(t){if(gt>0)return t();gt++;try{return t()}finally{pt()}},exports.cloneElement=function(n,e,_){var o,r,i,u,f=a({},n.props);for(i in n.type&&n.type.defaultProps&&(u=n.type.defaultProps),e)"key"==i?o=e[i]:"ref"==i?r=e[i]:f[i]=void 0===e[i]&&void 0!==u?u[i]:e[i];return arguments.length>2&&(f.children=arguments.length>3?t.call(arguments,2):_),d(n.type,f,o||n.key,r||n.ref,null)},exports.computed=Pt,exports.createContext=function(t,n){var e={__c:n="__cC"+f++,__:t,Consumer:function(t,n){return t.children(n)},Provider:function(t){var e,_;return this.getChildContext||(e=[],(_={})[n]=this,this.getChildContext=function(){return _},this.shouldComponentUpdate=function(t){this.props.value!==t.value&&e.some(function(t){t.__e=!0,k(t)})},this.sub=function(t){e.push(t);var n=t.componentWillUnmount;t.componentWillUnmount=function(){e.splice(e.indexOf(t),1),n&&n.call(t)}}),t.children}};return e.Provider.__=e.Consumer.contextType=e},exports.createRef=function(){return{current:null}},exports.effect=At,exports.h=v,exports.htm=ct,exports.html=Ot,exports.render=function(e,_,o){var r,i,u,f;n.__&&n.__(e,_),i=(r="function"==typeof o)?null:o&&o.__k||_.__k,u=[],f=[],$(_,e=(!r&&o||_).__k=v(y,null,[e]),i||s,s,void 0!==_.ownerSVGElement,!r&&o?[o]:i?null:_.firstChild?t.call(_.childNodes):null,u,!r&&o?o:i?i.__e:_.firstChild,r,f),e.__d=void 0,D(u,e,f)},exports.signal=wt,exports.toChildArray=function t(n,e){return e=e||[],null==n||"boolean"==typeof n||(h(n)?n.some(function(n){t(n,e)}):e.push(n)),e},exports.useCallback=function(t,n){return O=8,nt(function(){return t},n)},exports.useComputed=function(t){var n=tt(t);return n.current=t,vt.__$f|=4,nt(function(){return Pt(function(){return n.current()})},[])},exports.useContext=function(t){var n=W.context[t.__c],e=Q(M++,9);return e.c=t,n?(null==e.__&&(e.__=!0,n.sub(W)),n.props.value):t.__},exports.useDebugValue=function(t,n){q.useDebugValue&&q.useDebugValue(n?n(t):t)},exports.useEffect=function(t,n){var e=Q(M++,3);!q.__s&&ut(e.__H,n)&&(e.__=t,e.i=n,W.__H.__h.push(e))},exports.useErrorBoundary=function(t){var n=Q(M++,10),e=X();return n.__=t,W.componentDidCatch||(W.componentDidCatch=function(t,_){n.__&&n.__(t,_),e[1](t)}),[e[0],function(){e[1](void 0)}]},exports.useImperativeHandle=function(t,n,e){O=6,Z(function(){return"function"==typeof t?(t(n()),function(){return t(null)}):t?(t.current=n(),function(){return t.current=null}):void 0},null==e?e:e.concat(t))},exports.useLayoutEffect=Z,exports.useMemo=nt,exports.useReducer=Y,exports.useRef=tt,exports.useSignal=Lt,exports.useState=X;
//# sourceMappingURL=preactBundle.js.map
