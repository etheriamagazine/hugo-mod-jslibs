!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t||self)["preact-bundle"]={})}(this,function(t){var n,e,_,i,o,r,u,f,l,s={},c=[],h=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,a=Array.isArray;function p(t,n){for(var e in n)t[e]=n[e];return t}function v(t){var n=t.parentNode;n&&n.removeChild(t)}function d(t,e,_){var i,o,r,u={};for(r in e)"key"==r?i=e[r]:"ref"==r?o=e[r]:u[r]=e[r];if(arguments.length>2&&(u.children=arguments.length>3?n.call(arguments,2):_),"function"==typeof t&&null!=t.defaultProps)for(r in t.defaultProps)void 0===u[r]&&(u[r]=t.defaultProps[r]);return y(t,u,i,o,null)}function y(t,n,i,o,r){var u={type:t,props:n,key:i,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==r?++_:r,__i:-1,__u:0};return null==r&&null!=e.vnode&&e.vnode(u),u}function m(t){return t.children}function g(t,n){this.props=t,this.context=n}function b(t,n){if(null==n)return t.__?b(t.__,t.__i+1):null;for(var e;n<t.__k.length;n++)if(null!=(e=t.__k[n])&&null!=e.__e)return e.__e;return"function"==typeof t.type?b(t):null}function k(t,n,_){var i,o=t.__v,r=o.__e,u=t.__P;if(u)return(i=p({},o)).__v=o.__v+1,e.vnode&&e.vnode(i),D(u,i,o,t.__n,void 0!==u.ownerSVGElement,32&o.__u?[r]:null,n,null==r?b(o):r,!!(32&o.__u),_),i.__v=o.__v,i.__.__k[i.__i]=i,i.__d=void 0,i.__e!=r&&S(i),i}function S(t){var n,e;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,n=0;n<t.__k.length;n++)if(null!=(e=t.__k[n])&&null!=e.__e){t.__e=t.__c.base=e.__e;break}return S(t)}}function x(t){(!t.__d&&(t.__d=!0)&&o.push(t)&&!w.__r++||r!==e.debounceRendering)&&((r=e.debounceRendering)||u)(w)}function w(){var t,n,_,i=[],r=[];for(o.sort(f);t=o.shift();)t.__d&&(_=o.length,n=k(t,i,r)||n,0===_||o.length>_?(T(i,n,r),r.length=i.length=0,n=void 0,o.sort(f)):n&&e.__c&&e.__c(n,c));n&&T(i,n,r),w.__r=0}function C(t,n,e,_,i,o,r,u,f,l,h){var p,v,d,g,k,S=_&&_.__k||c,x=n.length;for(e.__d=f,function(t,n,e){var _,i,o,r,u,f=n.length,l=e.length,s=l,c=0;for(t.__k=[],_=0;_<f;_++)r=_+c,null!=(i=t.__k[_]=null==(i=n[_])||"boolean"==typeof i||"function"==typeof i?null:"string"==typeof i||"number"==typeof i||"bigint"==typeof i||i.constructor==String?y(null,i,null,null,null):a(i)?y(m,{children:i},null,null,null):void 0===i.constructor&&i.__b>0?y(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i)?(i.__=t,i.__b=t.__b+1,u=U(i,e,r,s),i.__i=u,o=null,-1!==u&&(s--,(o=e[u])&&(o.__u|=131072)),null==o||null===o.__v?(-1==u&&c--,"function"!=typeof i.type&&(i.__u|=65536)):u!==r&&(u===r+1?c++:u>r?s>f-r?c+=u-r:c--:u<r?u==r-1&&(c=u-r):c=0,u!==_+c&&(i.__u|=65536))):(o=e[r])&&null==o.key&&o.__e&&0==(131072&o.__u)&&(o.__e==t.__d&&(t.__d=b(o)),V(o,o,!1),e[r]=null,s--);if(s)for(_=0;_<l;_++)null!=(o=e[_])&&0==(131072&o.__u)&&(o.__e==t.__d&&(t.__d=b(o)),V(o,o))}(e,n,S),f=e.__d,p=0;p<x;p++)null!=(d=e.__k[p])&&"boolean"!=typeof d&&"function"!=typeof d&&(v=-1===d.__i?s:S[d.__i]||s,d.__i=p,D(t,d,v,i,o,r,u,f,l,h),g=d.__e,d.ref&&v.ref!=d.ref&&(v.ref&&A(v.ref,null,d),h.push(d.ref,d.__c||g,d)),null==k&&null!=g&&(k=g),65536&d.__u||v.__k===d.__k?f=E(d,f,t):"function"==typeof d.type&&void 0!==d.__d?f=d.__d:g&&(f=g.nextSibling),d.__d=void 0,d.__u&=-196609);e.__d=f,e.__e=k}function E(t,n,e){var _,i;if("function"==typeof t.type){for(_=t.__k,i=0;_&&i<_.length;i++)_[i]&&(_[i].__=t,n=E(_[i],n,e));return n}t.__e!=n&&(e.insertBefore(t.__e,n||null),n=t.__e);do{n=n&&n.nextSibling}while(null!=n&&8===n.nodeType);return n}function U(t,n,e,_){var i=t.key,o=t.type,r=e-1,u=e+1,f=n[e];if(null===f||f&&i==f.key&&o===f.type&&0==(131072&f.__u))return e;if(_>(null!=f&&0==(131072&f.__u)?1:0))for(;r>=0||u<n.length;){if(r>=0){if((f=n[r])&&0==(131072&f.__u)&&i==f.key&&o===f.type)return r;r--}if(u<n.length){if((f=n[u])&&0==(131072&f.__u)&&i==f.key&&o===f.type)return u;u++}}return-1}function H(t,n,e){"-"===n[0]?t.setProperty(n,null==e?"":e):t[n]=null==e?"":"number"!=typeof e||h.test(n)?e:e+"px"}function P(t,n,e,_,i){var o;t:if("style"===n)if("string"==typeof e)t.style.cssText=e;else{if("string"==typeof _&&(t.style.cssText=_=""),_)for(n in _)e&&n in e||H(t.style,n,"");if(e)for(n in e)_&&e[n]===_[n]||H(t.style,n,e[n])}else if("o"===n[0]&&"n"===n[1])o=n!==(n=n.replace(/(PointerCapture)$|Capture$/i,"$1")),n=n.toLowerCase()in t?n.toLowerCase().slice(2):n.slice(2),t.l||(t.l={}),t.l[n+o]=e,e?_?e.u=_.u:(e.u=Date.now(),t.addEventListener(n,o?$:N,o)):t.removeEventListener(n,o?$:N,o);else{if(i)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==n&&"height"!==n&&"href"!==n&&"list"!==n&&"form"!==n&&"tabIndex"!==n&&"download"!==n&&"rowSpan"!==n&&"colSpan"!==n&&"role"!==n&&n in t)try{t[n]=null==e?"":e;break t}catch(t){}"function"==typeof e||(null==e||!1===e&&"-"!==n[4]?t.removeAttribute(n):t.setAttribute(n,e))}}function N(t){if(this.l){var n=this.l[t.type+!1];if(t.t){if(t.t<=n.u)return}else t.t=Date.now();return n(e.event?e.event(t):t)}}function $(t){if(this.l)return this.l[t.type+!0](e.event?e.event(t):t)}function D(t,_,i,o,r,u,f,l,c,h){var d,y,k,S,x,w,E,U,H,N,$,D,T,A,V,W=_.type;if(void 0!==_.constructor)return null;128&i.__u&&(c=!!(32&i.__u),u=[l=_.__e=i.__e]),(d=e.__b)&&d(_);t:if("function"==typeof W)try{if(U=_.props,H=(d=W.contextType)&&o[d.__c],N=d?H?H.props.value:d.__:o,i.__c?E=(y=_.__c=i.__c).__=y.__E:("prototype"in W&&W.prototype.render?_.__c=y=new W(U,N):(_.__c=y=new g(U,N),y.constructor=W,y.render=M),H&&H.sub(y),y.props=U,y.state||(y.state={}),y.context=N,y.__n=o,k=y.__d=!0,y.__h=[],y._sb=[]),null==y.__s&&(y.__s=y.state),null!=W.getDerivedStateFromProps&&(y.__s==y.state&&(y.__s=p({},y.__s)),p(y.__s,W.getDerivedStateFromProps(U,y.__s))),S=y.props,x=y.state,y.__v=_,k)null==W.getDerivedStateFromProps&&null!=y.componentWillMount&&y.componentWillMount(),null!=y.componentDidMount&&y.__h.push(y.componentDidMount);else{if(null==W.getDerivedStateFromProps&&U!==S&&null!=y.componentWillReceiveProps&&y.componentWillReceiveProps(U,N),!y.__e&&(null!=y.shouldComponentUpdate&&!1===y.shouldComponentUpdate(U,y.__s,N)||_.__v===i.__v)){for(_.__v!==i.__v&&(y.props=U,y.state=y.__s,y.__d=!1),_.__e=i.__e,_.__k=i.__k,_.__k.forEach(function(t){t&&(t.__=_)}),$=0;$<y._sb.length;$++)y.__h.push(y._sb[$]);y._sb=[],y.__h.length&&f.push(y);break t}null!=y.componentWillUpdate&&y.componentWillUpdate(U,y.__s,N),null!=y.componentDidUpdate&&y.__h.push(function(){y.componentDidUpdate(S,x,w)})}if(y.context=N,y.props=U,y.__P=t,y.__e=!1,D=e.__r,T=0,"prototype"in W&&W.prototype.render){for(y.state=y.__s,y.__d=!1,D&&D(_),d=y.render(y.props,y.state,y.context),A=0;A<y._sb.length;A++)y.__h.push(y._sb[A]);y._sb=[]}else do{y.__d=!1,D&&D(_),d=y.render(y.props,y.state,y.context),y.state=y.__s}while(y.__d&&++T<25);y.state=y.__s,null!=y.getChildContext&&(o=p(p({},o),y.getChildContext())),k||null==y.getSnapshotBeforeUpdate||(w=y.getSnapshotBeforeUpdate(S,x)),C(t,a(V=null!=d&&d.type===m&&null==d.key?d.props.children:d)?V:[V],_,i,o,r,u,f,l,c,h),y.base=_.__e,_.__u&=-161,y.__h.length&&f.push(y),E&&(y.__E=y.__=null)}catch(t){_.__v=null,c||null!=u?(_.__e=l,_.__u|=c?160:32,u[u.indexOf(l)]=null):(_.__e=i.__e,_.__k=i.__k),e.__e(t,_,i)}else null==u&&_.__v===i.__v?(_.__k=i.__k,_.__e=i.__e):_.__e=function(t,e,_,i,o,r,u,f,l){var c,h,p,d,y,m,g,k=_.props,S=e.props,x=e.type;if("svg"===x&&(o=!0),null!=r)for(c=0;c<r.length;c++)if((y=r[c])&&"setAttribute"in y==!!x&&(x?y.localName===x:3===y.nodeType)){t=y,r[c]=null;break}if(null==t){if(null===x)return document.createTextNode(S);t=o?document.createElementNS("http://www.w3.org/2000/svg",x):document.createElement(x,S.is&&S),r=null,f=!1}if(null===x)k===S||f&&t.data===S||(t.data=S);else{if(r=r&&n.call(t.childNodes),k=_.props||s,!f&&null!=r)for(k={},c=0;c<t.attributes.length;c++)k[(y=t.attributes[c]).name]=y.value;for(c in k)y=k[c],"children"==c||("dangerouslySetInnerHTML"==c?p=y:"key"===c||c in S||P(t,c,null,y,o));for(c in S)y=S[c],"children"==c?d=y:"dangerouslySetInnerHTML"==c?h=y:"value"==c?m=y:"checked"==c?g=y:"key"===c||f&&"function"!=typeof y||k[c]===y||P(t,c,y,k[c],o);if(h)f||p&&(h.__html===p.__html||h.__html===t.innerHTML)||(t.innerHTML=h.__html),e.__k=[];else if(p&&(t.innerHTML=""),C(t,a(d)?d:[d],e,_,i,o&&"foreignObject"!==x,r,u,r?r[0]:_.__k&&b(_,0),f,l),null!=r)for(c=r.length;c--;)null!=r[c]&&v(r[c]);f||(c="value",void 0!==m&&(m!==t[c]||"progress"===x&&!m||"option"===x&&m!==k[c])&&P(t,c,m,k[c],!1),c="checked",void 0!==g&&g!==t[c]&&P(t,c,g,k[c],!1))}return t}(i.__e,_,i,o,r,u,f,c,h);(d=e.diffed)&&d(_)}function T(t,n,_){for(var i=0;i<_.length;i++)A(_[i],_[++i],_[++i]);e.__c&&e.__c(n,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(t){t.call(n)})}catch(t){e.__e(t,n.__v)}})}function A(t,n,_){try{"function"==typeof t?t(n):t.current=n}catch(t){e.__e(t,_)}}function V(t,n,_){var i,o;if(e.unmount&&e.unmount(t),(i=t.ref)&&(i.current&&i.current!==t.__e||A(i,null,n)),null!=(i=t.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(t){e.__e(t,n)}i.base=i.__P=null,t.__c=void 0}if(i=t.__k)for(o=0;o<i.length;o++)i[o]&&V(i[o],n,_||"function"!=typeof t.type);_||null==t.__e||v(t.__e),t.__=t.__e=t.__d=void 0}function M(t,n,e){return this.constructor(t,e)}n=c.slice,e={__e:function(t,n,e,_){for(var i,o,r;n=n.__;)if((i=n.__c)&&!i.__)try{if((o=i.constructor)&&null!=o.getDerivedStateFromError&&(i.setState(o.getDerivedStateFromError(t)),r=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(t,_||{}),r=i.__d),r)return i.__E=i}catch(n){t=n}throw t}},_=0,i=function(t){return null!=t&&null==t.constructor},g.prototype.setState=function(t,n){var e;e=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=p({},this.state),"function"==typeof t&&(t=t(p({},e),this.props)),t&&p(e,t),null!=t&&this.__v&&(n&&this._sb.push(n),x(this))},g.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),x(this))},g.prototype.render=m,o=[],u="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,f=function(t,n){return t.__v.__b-n.__v.__b},w.__r=0,l=0;var W,F,L,O,R=0,j=[],q=[],B=e,I=B.__b,G=B.__r,z=B.diffed,J=B.__c,K=B.unmount,Q=B.__;function X(t,n){B.__h&&B.__h(F,t,R||n),R=0;var e=F.__H||(F.__H={__:[],__h:[]});return t>=e.__.length&&e.__.push({__V:q}),e.__[t]}function Y(t){return R=1,Z(lt,t)}function Z(t,n,e){var _=X(W++,2);if(_.t=t,!_.__c&&(_.__=[e?e(n):lt(void 0,n),function(t){var n=_.__N?_.__N[0]:_.__[0],e=_.t(n,t);n!==e&&(_.__N=[e,_.__[1]],_.__c.setState({}))}],_.__c=F,!F.u)){var i=function(t,n,e){if(!_.__c.__H)return!0;var i=_.__c.__H.__.filter(function(t){return!!t.__c});if(i.every(function(t){return!t.__N}))return!o||o.call(this,t,n,e);var r=!1;return i.forEach(function(t){if(t.__N){var n=t.__[0];t.__=t.__N,t.__N=void 0,n!==t.__[0]&&(r=!0)}}),!(!r&&_.__c.props===t)&&(!o||o.call(this,t,n,e))};F.u=!0;var o=F.shouldComponentUpdate,r=F.componentWillUpdate;F.componentWillUpdate=function(t,n,e){if(this.__e){var _=o;o=void 0,i(t,n,e),o=_}r&&r.call(this,t,n,e)},F.shouldComponentUpdate=i}return _.__N||_.__}function tt(t,n){var e=X(W++,4);!B.__s&&ft(e.__H,n)&&(e.__=t,e.i=n,F.__h.push(e))}function nt(t){return R=5,et(function(){return{current:t}},[])}function et(t,n){var e=X(W++,7);return ft(e.__H,n)?(e.__V=t(),e.i=n,e.__h=t,e.__V):e.__}function _t(){for(var t;t=j.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(rt),t.__H.__h.forEach(ut),t.__H.__h=[]}catch(n){t.__H.__h=[],B.__e(n,t.__v)}}B.__b=function(t){F=null,I&&I(t)},B.__=function(t,n){t&&n.__k&&n.__k.__m&&(t.__m=n.__k.__m),Q&&Q(t,n)},B.__r=function(t){G&&G(t),W=0;var n=(F=t.__c).__H;n&&(L===F?(n.__h=[],F.__h=[],n.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=q,t.__N=t.i=void 0})):(n.__h.forEach(rt),n.__h.forEach(ut),n.__h=[],W=0)),L=F},B.diffed=function(t){z&&z(t);var n=t.__c;n&&n.__H&&(n.__H.__h.length&&(1!==j.push(n)&&O===B.requestAnimationFrame||((O=B.requestAnimationFrame)||ot)(_t)),n.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==q&&(t.__=t.__V),t.i=void 0,t.__V=q})),L=F=null},B.__c=function(t,n){n.some(function(t){try{t.__h.forEach(rt),t.__h=t.__h.filter(function(t){return!t.__||ut(t)})}catch(e){n.some(function(t){t.__h&&(t.__h=[])}),n=[],B.__e(e,t.__v)}}),J&&J(t,n)},B.unmount=function(t){K&&K(t);var n,e=t.__c;e&&e.__H&&(e.__H.__.forEach(function(t){try{rt(t)}catch(t){n=t}}),e.__H=void 0,n&&B.__e(n,e.__v))};var it="function"==typeof requestAnimationFrame;function ot(t){var n,e=function(){clearTimeout(_),it&&cancelAnimationFrame(n),setTimeout(t)},_=setTimeout(e,100);it&&(n=requestAnimationFrame(e))}function rt(t){var n=F,e=t.__c;"function"==typeof e&&(t.__c=void 0,e()),F=n}function ut(t){var n=F;t.__c=t.__(),F=n}function ft(t,n){return!t||t.length!==n.length||n.some(function(n,e){return n!==t[e]})}function lt(t,n){return"function"==typeof n?n(t):n}var st=function(t,n,e,_){var i;n[0]=0;for(var o=1;o<n.length;o++){var r=n[o++],u=n[o]?(n[0]|=r?1:2,e[n[o++]]):n[++o];3===r?_[0]=u:4===r?_[1]=Object.assign(_[1]||{},u):5===r?(_[1]=_[1]||{})[n[++o]]=u:6===r?_[1][n[++o]]+=u+"":r?(i=t.apply(u,st(t,u,e,["",null])),_.push(i),u[0]?n[0]|=2:(n[o-2]=0,n[o]=i)):_.push(u)}return _},ct=new Map;function ht(t){var n=ct.get(this);return n||(n=new Map,ct.set(this,n)),(n=st(this,n.get(t)||(n.set(t,n=function(t){for(var n,e,_=1,i="",o="",r=[0],u=function(t){1===_&&(t||(i=i.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?r.push(0,t,i):3===_&&(t||i)?(r.push(3,t,i),_=2):2===_&&"..."===i&&t?r.push(4,t,0):2===_&&i&&!t?r.push(5,0,!0,i):_>=5&&((i||!t&&5===_)&&(r.push(_,0,i,e),_=6),t&&(r.push(_,t,0,e),_=6)),i=""},f=0;f<t.length;f++){f&&(1===_&&u(),u(f));for(var l=0;l<t[f].length;l++)n=t[f][l],1===_?"<"===n?(u(),r=[r],_=3):i+=n:4===_?"--"===i&&">"===n?(_=1,i=""):i=n+i[0]:o?n===o?o="":i+=n:'"'===n||"'"===n?o=n:">"===n?(u(),_=1):_&&("="===n?(_=5,e=i,i=""):"/"===n&&(_<5||">"===t[f][l+1])?(u(),3===_&&(r=r[0]),_=r,(r=r[0]).push(2,0,_),_=0):" "===n||"\t"===n||"\n"===n||"\r"===n?(u(),_=2):i+=n),3===_&&"!--"===i&&(_=4,r=r[0])}return u(),r}(t)),n),arguments,[])).length>1?n:n[0]}function at(){throw new Error("Cycle detected")}var pt=Symbol.for("preact-signals");function vt(){if(bt>1)bt--;else{for(var t,n=!1;void 0!==gt;){var e=gt;for(gt=void 0,kt++;void 0!==e;){var _=e.o;if(e.o=void 0,e.f&=-3,!(8&e.f)&&Et(e))try{e.c()}catch(e){n||(t=e,n=!0)}e=_}}if(kt=0,bt--,n)throw t}}var dt,yt,mt=void 0,gt=void 0,bt=0,kt=0,St=0;function xt(t){if(void 0!==mt){var n=t.n;if(void 0===n||n.t!==mt)return n={i:0,S:t,p:mt.s,n:void 0,t:mt,e:void 0,x:void 0,r:n},void 0!==mt.s&&(mt.s.n=n),mt.s=n,t.n=n,32&mt.f&&t.S(n),n;if(-1===n.i)return n.i=0,void 0!==n.n&&(n.n.p=n.p,void 0!==n.p&&(n.p.n=n.n),n.p=mt.s,n.n=void 0,mt.s.n=n,mt.s=n),n}}function wt(t){this.v=t,this.i=0,this.n=void 0,this.t=void 0}function Ct(t){return new wt(t)}function Et(t){for(var n=t.s;void 0!==n;n=n.n)if(n.S.i!==n.i||!n.S.h()||n.S.i!==n.i)return!0;return!1}function Ut(t){for(var n=t.s;void 0!==n;n=n.n){var e=n.S.n;if(void 0!==e&&(n.r=e),n.S.n=n,n.i=-1,void 0===n.n){t.s=n;break}}}function Ht(t){for(var n=t.s,e=void 0;void 0!==n;){var _=n.p;-1===n.i?(n.S.U(n),void 0!==_&&(_.n=n.n),void 0!==n.n&&(n.n.p=_)):e=n,n.S.n=n.r,void 0!==n.r&&(n.r=void 0),n=_}t.s=e}function Pt(t){wt.call(this,void 0),this.x=t,this.s=void 0,this.g=St-1,this.f=4}function Nt(t){return new Pt(t)}function $t(t){var n=t.u;if(t.u=void 0,"function"==typeof n){bt++;var e=mt;mt=void 0;try{n()}catch(n){throw t.f&=-2,t.f|=8,Dt(t),n}finally{mt=e,vt()}}}function Dt(t){for(var n=t.s;void 0!==n;n=n.n)n.S.U(n);t.x=void 0,t.s=void 0,$t(t)}function Tt(t){if(mt!==this)throw new Error("Out-of-order effect");Ht(this),mt=t,this.f&=-2,8&this.f&&Dt(this),vt()}function At(t){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}function Vt(t){var n=new At(t);try{n.c()}catch(t){throw n.d(),t}return n.d.bind(n)}function Mt(t,n){e[t]=n.bind(null,e[t]||function(){})}function Wt(t){yt&&yt(),yt=t&&t.S()}function Ft(t){var n=this,e=t.data,_=Ot(e);_.value=e;var o=et(function(){for(var t=n.__v;t=t.__;)if(t.__c){t.__c.__$f|=4;break}return n.__$u.c=function(){var t;i(o.peek())||3!==(null==(t=n.base)?void 0:t.nodeType)?(n.__$f|=1,n.setState({})):n.base.data=o.peek()},Nt(function(){var t=_.value.value;return 0===t?0:!0===t?"":t||""})},[]);return o.value}function Lt(t,n,e,_){var i=n in t&&void 0===t.ownerSVGElement,o=Ct(e);return{o:function(t,n){o.value=t,_=n},d:Vt(function(){var e=o.value.value;_[n]!==e&&(_[n]=e,i?t[n]=e:e?t.setAttribute(n,e):t.removeAttribute(n))})}}function Ot(t){return et(function(){return Ct(t)},[])}wt.prototype.brand=pt,wt.prototype.h=function(){return!0},wt.prototype.S=function(t){this.t!==t&&void 0===t.e&&(t.x=this.t,void 0!==this.t&&(this.t.e=t),this.t=t)},wt.prototype.U=function(t){if(void 0!==this.t){var n=t.e,e=t.x;void 0!==n&&(n.x=e,t.e=void 0),void 0!==e&&(e.e=n,t.x=void 0),t===this.t&&(this.t=e)}},wt.prototype.subscribe=function(t){var n=this;return Vt(function(){var e=n.value,_=32&this.f;this.f&=-33;try{t(e)}finally{this.f|=_}})},wt.prototype.valueOf=function(){return this.value},wt.prototype.toString=function(){return this.value+""},wt.prototype.toJSON=function(){return this.value},wt.prototype.peek=function(){return this.v},Object.defineProperty(wt.prototype,"value",{get:function(){var t=xt(this);return void 0!==t&&(t.i=this.i),this.v},set:function(t){if(mt instanceof Pt&&function(){throw new Error("Computed cannot have side-effects")}(),t!==this.v){kt>100&&at(),this.v=t,this.i++,St++,bt++;try{for(var n=this.t;void 0!==n;n=n.x)n.t.N()}finally{vt()}}}}),(Pt.prototype=new wt).h=function(){if(this.f&=-3,1&this.f)return!1;if(32==(36&this.f))return!0;if(this.f&=-5,this.g===St)return!0;if(this.g=St,this.f|=1,this.i>0&&!Et(this))return this.f&=-2,!0;var t=mt;try{Ut(this),mt=this;var n=this.x();(16&this.f||this.v!==n||0===this.i)&&(this.v=n,this.f&=-17,this.i++)}catch(t){this.v=t,this.f|=16,this.i++}return mt=t,Ht(this),this.f&=-2,!0},Pt.prototype.S=function(t){if(void 0===this.t){this.f|=36;for(var n=this.s;void 0!==n;n=n.n)n.S.S(n)}wt.prototype.S.call(this,t)},Pt.prototype.U=function(t){if(void 0!==this.t&&(wt.prototype.U.call(this,t),void 0===this.t)){this.f&=-33;for(var n=this.s;void 0!==n;n=n.n)n.S.U(n)}},Pt.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;void 0!==t;t=t.x)t.t.N()}},Pt.prototype.peek=function(){if(this.h()||at(),16&this.f)throw this.v;return this.v},Object.defineProperty(Pt.prototype,"value",{get:function(){1&this.f&&at();var t=xt(this);if(this.h(),void 0!==t&&(t.i=this.i),16&this.f)throw this.v;return this.v}}),At.prototype.c=function(){var t=this.S();try{if(8&this.f)return;if(void 0===this.x)return;var n=this.x();"function"==typeof n&&(this.u=n)}finally{t()}},At.prototype.S=function(){1&this.f&&at(),this.f|=1,this.f&=-9,$t(this),Ut(this),bt++;var t=mt;return mt=this,Tt.bind(this,t)},At.prototype.N=function(){2&this.f||(this.f|=2,this.o=gt,gt=this)},At.prototype.d=function(){this.f|=8,1&this.f||Dt(this)},Ft.displayName="_st",Object.defineProperties(wt.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:Ft},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}}),Mt("__b",function(t,n){if("string"==typeof n.type){var e,_=n.props;for(var i in _)if("children"!==i){var o=_[i];o instanceof wt&&(e||(n.__np=e={}),e[i]=o,_[i]=o.peek())}}t(n)}),Mt("__r",function(t,n){Wt();var e,_=n.__c;_&&(_.__$f&=-2,void 0===(e=_.__$u)&&(_.__$u=e=function(t){var n;return Vt(function(){n=this}),n.c=function(){_.__$f|=1,_.setState({})},n}())),dt=_,Wt(e),t(n)}),Mt("__e",function(t,n,e,_){Wt(),dt=void 0,t(n,e,_)}),Mt("diffed",function(t,n){var e;if(Wt(),dt=void 0,"string"==typeof n.type&&(e=n.__e)){var _=n.__np,i=n.props;if(_){var o=e.U;if(o)for(var r in o){var u=o[r];void 0===u||r in _||(u.d(),o[r]=void 0)}else e.U=o={};for(var f in _){var l=o[f],s=_[f];void 0===l?(l=Lt(e,f,s,i),o[f]=l):l.o(s,i)}}}t(n)}),Mt("unmount",function(t,n){if("string"==typeof n.type){var e=n.__e;if(e){var _=e.U;if(_)for(var i in e.U=void 0,_){var o=_[i];o&&o.d()}}}else{var r=n.__c;if(r){var u=r.__$u;u&&(r.__$u=void 0,u.d())}}t(n)}),Mt("__h",function(t,n,e,_){(_<3||9===_)&&(n.__$f|=2),t(n,e,_)}),g.prototype.shouldComponentUpdate=function(t,n){var e=this.__$u;if(!(e&&void 0!==e.s||4&this.__$f))return!0;if(3&this.__$f)return!0;for(var _ in n)return!0;for(var i in t)if("__source"!==i&&t[i]!==this.props[i])return!0;for(var o in this.props)if(!(o in t))return!0;return!1};var Rt=ht.bind(d);t.Component=g,t.batch=function(t){if(bt>0)return t();bt++;try{return t()}finally{vt()}},t.cloneElement=function(t,e,_){var i,o,r,u,f=p({},t.props);for(r in t.type&&t.type.defaultProps&&(u=t.type.defaultProps),e)"key"==r?i=e[r]:"ref"==r?o=e[r]:f[r]=void 0===e[r]&&void 0!==u?u[r]:e[r];return arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):_),y(t.type,f,i||t.key,o||t.ref,null)},t.computed=Nt,t.createContext=function(t,n){var e={__c:n="__cC"+l++,__:t,Consumer:function(t,n){return t.children(n)},Provider:function(t){var e,_;return this.getChildContext||(e=[],(_={})[n]=this,this.getChildContext=function(){return _},this.shouldComponentUpdate=function(t){this.props.value!==t.value&&e.some(function(t){t.__e=!0,x(t)})},this.sub=function(t){e.push(t);var n=t.componentWillUnmount;t.componentWillUnmount=function(){e.splice(e.indexOf(t),1),n&&n.call(t)}}),t.children}};return e.Provider.__=e.Consumer.contextType=e},t.createRef=function(){return{current:null}},t.effect=Vt,t.h=d,t.htm=ht,t.html=Rt,t.render=function(t,_,i){var o,r,u,f;e.__&&e.__(t,_),r=(o="function"==typeof i)?null:i&&i.__k||_.__k,u=[],f=[],D(_,t=(!o&&i||_).__k=d(m,null,[t]),r||s,s,void 0!==_.ownerSVGElement,!o&&i?[i]:r?null:_.firstChild?n.call(_.childNodes):null,u,!o&&i?i:r?r.__e:_.firstChild,o,f),t.__d=void 0,T(u,t,f)},t.signal=Ct,t.toChildArray=function t(n,e){return e=e||[],null==n||"boolean"==typeof n||(a(n)?n.some(function(n){t(n,e)}):e.push(n)),e},t.useCallback=function(t,n){return R=8,et(function(){return t},n)},t.useComputed=function(t){var n=nt(t);return n.current=t,dt.__$f|=4,et(function(){return Nt(function(){return n.current()})},[])},t.useContext=function(t){var n=F.context[t.__c],e=X(W++,9);return e.c=t,n?(null==e.__&&(e.__=!0,n.sub(F)),n.props.value):t.__},t.useDebugValue=function(t,n){B.useDebugValue&&B.useDebugValue(n?n(t):t)},t.useEffect=function(t,n){var e=X(W++,3);!B.__s&&ft(e.__H,n)&&(e.__=t,e.i=n,F.__H.__h.push(e))},t.useErrorBoundary=function(t){var n=X(W++,10),e=Y();return n.__=t,F.componentDidCatch||(F.componentDidCatch=function(t,_){n.__&&n.__(t,_),e[1](t)}),[e[0],function(){e[1](void 0)}]},t.useImperativeHandle=function(t,n,e){R=6,tt(function(){return"function"==typeof t?(t(n()),function(){return t(null)}):t?(t.current=n(),function(){return t.current=null}):void 0},null==e?e:e.concat(t))},t.useLayoutEffect=tt,t.useMemo=et,t.useReducer=Z,t.useRef=nt,t.useSignal=Ot,t.useState=Y});
//# sourceMappingURL=preactBundle.umd.js.map
