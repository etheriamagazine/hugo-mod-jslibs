var t,n,e,_,i,o,r,u,f,s={},l=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,a=Array.isArray;function h(t,n){for(var e in n)t[e]=n[e];return t}function p(t){var n=t.parentNode;n&&n.removeChild(t)}function v(n,e,_){var i,o,r,u={};for(r in e)"key"==r?i=e[r]:"ref"==r?o=e[r]:u[r]=e[r];if(arguments.length>2&&(u.children=arguments.length>3?t.call(arguments,2):_),"function"==typeof n&&null!=n.defaultProps)for(r in n.defaultProps)void 0===u[r]&&(u[r]=n.defaultProps[r]);return d(n,u,i,o,null)}function d(t,_,i,o,r){var u={type:t,props:_,key:i,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==r?++e:r,__i:-1,__u:0};return null==r&&null!=n.vnode&&n.vnode(u),u}function y(){return{current:null}}function m(t){return t.children}function g(t,n){this.props=t,this.context=n}function b(t,n){if(null==n)return t.__?b(t.__,t.__i+1):null;for(var e;n<t.__k.length;n++)if(null!=(e=t.__k[n])&&null!=e.__e)return e.__e;return"function"==typeof t.type?b(t):null}function k(t,e,_){var i,o=t.__v,r=o.__e,u=t.__P;if(u)return(i=h({},o)).__v=o.__v+1,n.vnode&&n.vnode(i),T(u,i,o,t.__n,void 0!==u.ownerSVGElement,32&o.__u?[r]:null,e,null==r?b(o):r,!!(32&o.__u),_),i.__v=o.__v,i.__.__k[i.__i]=i,i.__d=void 0,i.__e!=r&&S(i),i}function S(t){var n,e;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,n=0;n<t.__k.length;n++)if(null!=(e=t.__k[n])&&null!=e.__e){t.__e=t.__c.base=e.__e;break}return S(t)}}function x(t){(!t.__d&&(t.__d=!0)&&i.push(t)&&!w.__r++||o!==n.debounceRendering)&&((o=n.debounceRendering)||r)(w)}function w(){var t,e,_,o=[],r=[];for(i.sort(u);t=i.shift();)t.__d&&(_=i.length,e=k(t,o,r)||e,0===_||i.length>_?(A(o,e,r),r.length=o.length=0,e=void 0,i.sort(u)):e&&n.__c&&n.__c(e,l));e&&A(o,e,r),w.__r=0}function C(t,n,e,_,i,o,r,u,f,c,h){var p,v,y,g,k,S=_&&_.__k||l,x=n.length;for(e.__d=f,function(t,n,e){var _,i,o,r,u,f=n.length,s=e.length,l=s,c=0;for(t.__k=[],_=0;_<f;_++)r=_+c,null!=(i=t.__k[_]=null==(i=n[_])||"boolean"==typeof i||"function"==typeof i?null:"string"==typeof i||"number"==typeof i||"bigint"==typeof i||i.constructor==String?d(null,i,null,null,null):a(i)?d(m,{children:i},null,null,null):void 0===i.constructor&&i.__b>0?d(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i)?(i.__=t,i.__b=t.__b+1,u=H(i,e,r,l),i.__i=u,o=null,-1!==u&&(l--,(o=e[u])&&(o.__u|=131072)),null==o||null===o.__v?(-1==u&&c--,"function"!=typeof i.type&&(i.__u|=65536)):u!==r&&(u===r+1?c++:u>r?l>f-r?c+=u-r:c--:u<r?u==r-1&&(c=u-r):c=0,u!==_+c&&(i.__u|=65536))):(o=e[r])&&null==o.key&&o.__e&&0==(131072&o.__u)&&(o.__e==t.__d&&(t.__d=b(o)),M(o,o,!1),e[r]=null,l--);if(l)for(_=0;_<s;_++)null!=(o=e[_])&&0==(131072&o.__u)&&(o.__e==t.__d&&(t.__d=b(o)),M(o,o))}(e,n,S),f=e.__d,p=0;p<x;p++)null!=(y=e.__k[p])&&"boolean"!=typeof y&&"function"!=typeof y&&(v=-1===y.__i?s:S[y.__i]||s,y.__i=p,T(t,y,v,i,o,r,u,f,c,h),g=y.__e,y.ref&&v.ref!=y.ref&&(v.ref&&V(v.ref,null,y),h.push(y.ref,y.__c||g,y)),null==k&&null!=g&&(k=g),65536&y.__u||v.__k===y.__k?f=E(y,f,t):"function"==typeof y.type&&void 0!==y.__d?f=y.__d:g&&(f=g.nextSibling),y.__d=void 0,y.__u&=-196609);e.__d=f,e.__e=k}function E(t,n,e){var _,i;if("function"==typeof t.type){for(_=t.__k,i=0;_&&i<_.length;i++)_[i]&&(_[i].__=t,n=E(_[i],n,e));return n}t.__e!=n&&(e.insertBefore(t.__e,n||null),n=t.__e);do{n=n&&n.nextSibling}while(null!=n&&8===n.nodeType);return n}function U(t,n){return n=n||[],null==t||"boolean"==typeof t||(a(t)?t.some(function(t){U(t,n)}):n.push(t)),n}function H(t,n,e,_){var i=t.key,o=t.type,r=e-1,u=e+1,f=n[e];if(null===f||f&&i==f.key&&o===f.type&&0==(131072&f.__u))return e;if(_>(null!=f&&0==(131072&f.__u)?1:0))for(;r>=0||u<n.length;){if(r>=0){if((f=n[r])&&0==(131072&f.__u)&&i==f.key&&o===f.type)return r;r--}if(u<n.length){if((f=n[u])&&0==(131072&f.__u)&&i==f.key&&o===f.type)return u;u++}}return-1}function P(t,n,e){"-"===n[0]?t.setProperty(n,null==e?"":e):t[n]=null==e?"":"number"!=typeof e||c.test(n)?e:e+"px"}function N(t,n,e,_,i){var o;t:if("style"===n)if("string"==typeof e)t.style.cssText=e;else{if("string"==typeof _&&(t.style.cssText=_=""),_)for(n in _)e&&n in e||P(t.style,n,"");if(e)for(n in e)_&&e[n]===_[n]||P(t.style,n,e[n])}else if("o"===n[0]&&"n"===n[1])o=n!==(n=n.replace(/(PointerCapture)$|Capture$/i,"$1")),n=n.toLowerCase()in t?n.toLowerCase().slice(2):n.slice(2),t.l||(t.l={}),t.l[n+o]=e,e?_?e.u=_.u:(e.u=Date.now(),t.addEventListener(n,o?D:$,o)):t.removeEventListener(n,o?D:$,o);else{if(i)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==n&&"height"!==n&&"href"!==n&&"list"!==n&&"form"!==n&&"tabIndex"!==n&&"download"!==n&&"rowSpan"!==n&&"colSpan"!==n&&"role"!==n&&n in t)try{t[n]=null==e?"":e;break t}catch(t){}"function"==typeof e||(null==e||!1===e&&"-"!==n[4]?t.removeAttribute(n):t.setAttribute(n,e))}}function $(t){if(this.l){var e=this.l[t.type+!1];if(t.t){if(t.t<=e.u)return}else t.t=Date.now();return e(n.event?n.event(t):t)}}function D(t){if(this.l)return this.l[t.type+!0](n.event?n.event(t):t)}function T(e,_,i,o,r,u,f,l,c,v){var d,y,k,S,x,w,E,U,H,P,$,D,T,A,V,M=_.type;if(void 0!==_.constructor)return null;128&i.__u&&(c=!!(32&i.__u),u=[l=_.__e=i.__e]),(d=n.__b)&&d(_);t:if("function"==typeof M)try{if(U=_.props,H=(d=M.contextType)&&o[d.__c],P=d?H?H.props.value:d.__:o,i.__c?E=(y=_.__c=i.__c).__=y.__E:("prototype"in M&&M.prototype.render?_.__c=y=new M(U,P):(_.__c=y=new g(U,P),y.constructor=M,y.render=W),H&&H.sub(y),y.props=U,y.state||(y.state={}),y.context=P,y.__n=o,k=y.__d=!0,y.__h=[],y._sb=[]),null==y.__s&&(y.__s=y.state),null!=M.getDerivedStateFromProps&&(y.__s==y.state&&(y.__s=h({},y.__s)),h(y.__s,M.getDerivedStateFromProps(U,y.__s))),S=y.props,x=y.state,y.__v=_,k)null==M.getDerivedStateFromProps&&null!=y.componentWillMount&&y.componentWillMount(),null!=y.componentDidMount&&y.__h.push(y.componentDidMount);else{if(null==M.getDerivedStateFromProps&&U!==S&&null!=y.componentWillReceiveProps&&y.componentWillReceiveProps(U,P),!y.__e&&(null!=y.shouldComponentUpdate&&!1===y.shouldComponentUpdate(U,y.__s,P)||_.__v===i.__v)){for(_.__v!==i.__v&&(y.props=U,y.state=y.__s,y.__d=!1),_.__e=i.__e,_.__k=i.__k,_.__k.forEach(function(t){t&&(t.__=_)}),$=0;$<y._sb.length;$++)y.__h.push(y._sb[$]);y._sb=[],y.__h.length&&f.push(y);break t}null!=y.componentWillUpdate&&y.componentWillUpdate(U,y.__s,P),null!=y.componentDidUpdate&&y.__h.push(function(){y.componentDidUpdate(S,x,w)})}if(y.context=P,y.props=U,y.__P=e,y.__e=!1,D=n.__r,T=0,"prototype"in M&&M.prototype.render){for(y.state=y.__s,y.__d=!1,D&&D(_),d=y.render(y.props,y.state,y.context),A=0;A<y._sb.length;A++)y.__h.push(y._sb[A]);y._sb=[]}else do{y.__d=!1,D&&D(_),d=y.render(y.props,y.state,y.context),y.state=y.__s}while(y.__d&&++T<25);y.state=y.__s,null!=y.getChildContext&&(o=h(h({},o),y.getChildContext())),k||null==y.getSnapshotBeforeUpdate||(w=y.getSnapshotBeforeUpdate(S,x)),C(e,a(V=null!=d&&d.type===m&&null==d.key?d.props.children:d)?V:[V],_,i,o,r,u,f,l,c,v),y.base=_.__e,_.__u&=-161,y.__h.length&&f.push(y),E&&(y.__E=y.__=null)}catch(e){_.__v=null,c||null!=u?(_.__e=l,_.__u|=c?160:32,u[u.indexOf(l)]=null):(_.__e=i.__e,_.__k=i.__k),n.__e(e,_,i)}else null==u&&_.__v===i.__v?(_.__k=i.__k,_.__e=i.__e):_.__e=function(n,e,_,i,o,r,u,f,l){var c,h,v,d,y,m,g,k=_.props,S=e.props,x=e.type;if("svg"===x&&(o=!0),null!=r)for(c=0;c<r.length;c++)if((y=r[c])&&"setAttribute"in y==!!x&&(x?y.localName===x:3===y.nodeType)){n=y,r[c]=null;break}if(null==n){if(null===x)return document.createTextNode(S);n=o?document.createElementNS("http://www.w3.org/2000/svg",x):document.createElement(x,S.is&&S),r=null,f=!1}if(null===x)k===S||f&&n.data===S||(n.data=S);else{if(r=r&&t.call(n.childNodes),k=_.props||s,!f&&null!=r)for(k={},c=0;c<n.attributes.length;c++)k[(y=n.attributes[c]).name]=y.value;for(c in k)y=k[c],"children"==c||("dangerouslySetInnerHTML"==c?v=y:"key"===c||c in S||N(n,c,null,y,o));for(c in S)y=S[c],"children"==c?d=y:"dangerouslySetInnerHTML"==c?h=y:"value"==c?m=y:"checked"==c?g=y:"key"===c||f&&"function"!=typeof y||k[c]===y||N(n,c,y,k[c],o);if(h)f||v&&(h.__html===v.__html||h.__html===n.innerHTML)||(n.innerHTML=h.__html),e.__k=[];else if(v&&(n.innerHTML=""),C(n,a(d)?d:[d],e,_,i,o&&"foreignObject"!==x,r,u,r?r[0]:_.__k&&b(_,0),f,l),null!=r)for(c=r.length;c--;)null!=r[c]&&p(r[c]);f||(c="value",void 0!==m&&(m!==n[c]||"progress"===x&&!m||"option"===x&&m!==k[c])&&N(n,c,m,k[c],!1),c="checked",void 0!==g&&g!==n[c]&&N(n,c,g,k[c],!1))}return n}(i.__e,_,i,o,r,u,f,c,v);(d=n.diffed)&&d(_)}function A(t,e,_){for(var i=0;i<_.length;i++)V(_[i],_[++i],_[++i]);n.__c&&n.__c(e,t),t.some(function(e){try{t=e.__h,e.__h=[],t.some(function(t){t.call(e)})}catch(t){n.__e(t,e.__v)}})}function V(t,e,_){try{"function"==typeof t?t(e):t.current=e}catch(t){n.__e(t,_)}}function M(t,e,_){var i,o;if(n.unmount&&n.unmount(t),(i=t.ref)&&(i.current&&i.current!==t.__e||V(i,null,e)),null!=(i=t.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(t){n.__e(t,e)}i.base=i.__P=null,t.__c=void 0}if(i=t.__k)for(o=0;o<i.length;o++)i[o]&&M(i[o],e,_||"function"!=typeof t.type);_||null==t.__e||p(t.__e),t.__=t.__e=t.__d=void 0}function W(t,n,e){return this.constructor(t,e)}function F(e,_,i){var o,r,u,f;n.__&&n.__(e,_),r=(o="function"==typeof i)?null:i&&i.__k||_.__k,u=[],f=[],T(_,e=(!o&&i||_).__k=v(m,null,[e]),r||s,s,void 0!==_.ownerSVGElement,!o&&i?[i]:r?null:_.firstChild?t.call(_.childNodes):null,u,!o&&i?i:r?r.__e:_.firstChild,o,f),e.__d=void 0,A(u,e,f)}function L(n,e,_){var i,o,r,u,f=h({},n.props);for(r in n.type&&n.type.defaultProps&&(u=n.type.defaultProps),e)"key"==r?i=e[r]:"ref"==r?o=e[r]:f[r]=void 0===e[r]&&void 0!==u?u[r]:e[r];return arguments.length>2&&(f.children=arguments.length>3?t.call(arguments,2):_),d(n.type,f,i||n.key,o||n.ref,null)}function O(t,n){var e={__c:n="__cC"+f++,__:t,Consumer:function(t,n){return t.children(n)},Provider:function(t){var e,_;return this.getChildContext||(e=[],(_={})[n]=this,this.getChildContext=function(){return _},this.shouldComponentUpdate=function(t){this.props.value!==t.value&&e.some(function(t){t.__e=!0,x(t)})},this.sub=function(t){e.push(t);var n=t.componentWillUnmount;t.componentWillUnmount=function(){e.splice(e.indexOf(t),1),n&&n.call(t)}}),t.children}};return e.Provider.__=e.Consumer.contextType=e}t=l.slice,n={__e:function(t,n,e,_){for(var i,o,r;n=n.__;)if((i=n.__c)&&!i.__)try{if((o=i.constructor)&&null!=o.getDerivedStateFromError&&(i.setState(o.getDerivedStateFromError(t)),r=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(t,_||{}),r=i.__d),r)return i.__E=i}catch(n){t=n}throw t}},e=0,_=function(t){return null!=t&&null==t.constructor},g.prototype.setState=function(t,n){var e;e=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=h({},this.state),"function"==typeof t&&(t=t(h({},e),this.props)),t&&h(e,t),null!=t&&this.__v&&(n&&this._sb.push(n),x(this))},g.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),x(this))},g.prototype.render=m,i=[],r="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,u=function(t,n){return t.__v.__b-n.__v.__b},w.__r=0,f=0;var R,j,q,B,I=0,G=[],z=[],J=n,K=J.__b,Q=J.__r,X=J.diffed,Y=J.__c,Z=J.unmount,tt=J.__;function nt(t,n){J.__h&&J.__h(j,t,I||n),I=0;var e=j.__H||(j.__H={__:[],__h:[]});return t>=e.__.length&&e.__.push({__V:z}),e.__[t]}function et(t){return I=1,_t(gt,t)}function _t(t,n,e){var _=nt(R++,2);if(_.t=t,!_.__c&&(_.__=[e?e(n):gt(void 0,n),function(t){var n=_.__N?_.__N[0]:_.__[0],e=_.t(n,t);n!==e&&(_.__N=[e,_.__[1]],_.__c.setState({}))}],_.__c=j,!j.u)){var i=function(t,n,e){if(!_.__c.__H)return!0;var i=_.__c.__H.__.filter(function(t){return!!t.__c});if(i.every(function(t){return!t.__N}))return!o||o.call(this,t,n,e);var r=!1;return i.forEach(function(t){if(t.__N){var n=t.__[0];t.__=t.__N,t.__N=void 0,n!==t.__[0]&&(r=!0)}}),!(!r&&_.__c.props===t)&&(!o||o.call(this,t,n,e))};j.u=!0;var o=j.shouldComponentUpdate,r=j.componentWillUpdate;j.componentWillUpdate=function(t,n,e){if(this.__e){var _=o;o=void 0,i(t,n,e),o=_}r&&r.call(this,t,n,e)},j.shouldComponentUpdate=i}return _.__N||_.__}function it(t,n){var e=nt(R++,3);!J.__s&&mt(e.__H,n)&&(e.__=t,e.i=n,j.__H.__h.push(e))}function ot(t,n){var e=nt(R++,4);!J.__s&&mt(e.__H,n)&&(e.__=t,e.i=n,j.__h.push(e))}function rt(t){return I=5,ft(function(){return{current:t}},[])}function ut(t,n,e){I=6,ot(function(){return"function"==typeof t?(t(n()),function(){return t(null)}):t?(t.current=n(),function(){return t.current=null}):void 0},null==e?e:e.concat(t))}function ft(t,n){var e=nt(R++,7);return mt(e.__H,n)?(e.__V=t(),e.i=n,e.__h=t,e.__V):e.__}function st(t,n){return I=8,ft(function(){return t},n)}function lt(t){var n=j.context[t.__c],e=nt(R++,9);return e.c=t,n?(null==e.__&&(e.__=!0,n.sub(j)),n.props.value):t.__}function ct(t,n){J.useDebugValue&&J.useDebugValue(n?n(t):t)}function at(t){var n=nt(R++,10),e=et();return n.__=t,j.componentDidCatch||(j.componentDidCatch=function(t,_){n.__&&n.__(t,_),e[1](t)}),[e[0],function(){e[1](void 0)}]}function ht(){for(var t;t=G.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(dt),t.__H.__h.forEach(yt),t.__H.__h=[]}catch(n){t.__H.__h=[],J.__e(n,t.__v)}}J.__b=function(t){j=null,K&&K(t)},J.__=function(t,n){t&&n.__k&&n.__k.__m&&(t.__m=n.__k.__m),tt&&tt(t,n)},J.__r=function(t){Q&&Q(t),R=0;var n=(j=t.__c).__H;n&&(q===j?(n.__h=[],j.__h=[],n.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=z,t.__N=t.i=void 0})):(n.__h.forEach(dt),n.__h.forEach(yt),n.__h=[],R=0)),q=j},J.diffed=function(t){X&&X(t);var n=t.__c;n&&n.__H&&(n.__H.__h.length&&(1!==G.push(n)&&B===J.requestAnimationFrame||((B=J.requestAnimationFrame)||vt)(ht)),n.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==z&&(t.__=t.__V),t.i=void 0,t.__V=z})),q=j=null},J.__c=function(t,n){n.some(function(t){try{t.__h.forEach(dt),t.__h=t.__h.filter(function(t){return!t.__||yt(t)})}catch(e){n.some(function(t){t.__h&&(t.__h=[])}),n=[],J.__e(e,t.__v)}}),Y&&Y(t,n)},J.unmount=function(t){Z&&Z(t);var n,e=t.__c;e&&e.__H&&(e.__H.__.forEach(function(t){try{dt(t)}catch(t){n=t}}),e.__H=void 0,n&&J.__e(n,e.__v))};var pt="function"==typeof requestAnimationFrame;function vt(t){var n,e=function(){clearTimeout(_),pt&&cancelAnimationFrame(n),setTimeout(t)},_=setTimeout(e,100);pt&&(n=requestAnimationFrame(e))}function dt(t){var n=j,e=t.__c;"function"==typeof e&&(t.__c=void 0,e()),j=n}function yt(t){var n=j;t.__c=t.__(),j=n}function mt(t,n){return!t||t.length!==n.length||n.some(function(n,e){return n!==t[e]})}function gt(t,n){return"function"==typeof n?n(t):n}function bt(){throw new Error("Cycle detected")}var kt=Symbol.for("preact-signals");function St(){if(Ht>1)Ht--;else{for(var t,n=!1;void 0!==Ut;){var e=Ut;for(Ut=void 0,Pt++;void 0!==e;){var _=e.o;if(e.o=void 0,e.f&=-3,!(8&e.f)&&At(e))try{e.c()}catch(e){n||(t=e,n=!0)}e=_}}if(Pt=0,Ht--,n)throw t}}function xt(t){if(Ht>0)return t();Ht++;try{return t()}finally{St()}}var wt,Ct,Et=void 0,Ut=void 0,Ht=0,Pt=0,Nt=0;function $t(t){if(void 0!==Et){var n=t.n;if(void 0===n||n.t!==Et)return n={i:0,S:t,p:Et.s,n:void 0,t:Et,e:void 0,x:void 0,r:n},void 0!==Et.s&&(Et.s.n=n),Et.s=n,t.n=n,32&Et.f&&t.S(n),n;if(-1===n.i)return n.i=0,void 0!==n.n&&(n.n.p=n.p,void 0!==n.p&&(n.p.n=n.n),n.p=Et.s,n.n=void 0,Et.s.n=n,Et.s=n),n}}function Dt(t){this.v=t,this.i=0,this.n=void 0,this.t=void 0}function Tt(t){return new Dt(t)}function At(t){for(var n=t.s;void 0!==n;n=n.n)if(n.S.i!==n.i||!n.S.h()||n.S.i!==n.i)return!0;return!1}function Vt(t){for(var n=t.s;void 0!==n;n=n.n){var e=n.S.n;if(void 0!==e&&(n.r=e),n.S.n=n,n.i=-1,void 0===n.n){t.s=n;break}}}function Mt(t){for(var n=t.s,e=void 0;void 0!==n;){var _=n.p;-1===n.i?(n.S.U(n),void 0!==_&&(_.n=n.n),void 0!==n.n&&(n.n.p=_)):e=n,n.S.n=n.r,void 0!==n.r&&(n.r=void 0),n=_}t.s=e}function Wt(t){Dt.call(this,void 0),this.x=t,this.s=void 0,this.g=Nt-1,this.f=4}function Ft(t){return new Wt(t)}function Lt(t){var n=t.u;if(t.u=void 0,"function"==typeof n){Ht++;var e=Et;Et=void 0;try{n()}catch(n){throw t.f&=-2,t.f|=8,Ot(t),n}finally{Et=e,St()}}}function Ot(t){for(var n=t.s;void 0!==n;n=n.n)n.S.U(n);t.x=void 0,t.s=void 0,Lt(t)}function Rt(t){if(Et!==this)throw new Error("Out-of-order effect");Mt(this),Et=t,this.f&=-2,8&this.f&&Ot(this),St()}function jt(t){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}function qt(t){var n=new jt(t);try{n.c()}catch(t){throw n.d(),t}return n.d.bind(n)}function Bt(t,e){n[t]=e.bind(null,n[t]||function(){})}function It(t){Ct&&Ct(),Ct=t&&t.S()}function Gt(t){var n=this,e=t.data,i=Jt(e);i.value=e;var o=ft(function(){for(var t=n.__v;t=t.__;)if(t.__c){t.__c.__$f|=4;break}return n.__$u.c=function(){var t;_(o.peek())||3!==(null==(t=n.base)?void 0:t.nodeType)?(n.__$f|=1,n.setState({})):n.base.data=o.peek()},Ft(function(){var t=i.value.value;return 0===t?0:!0===t?"":t||""})},[]);return o.value}function zt(t,n,e,_){var i=n in t&&void 0===t.ownerSVGElement,o=Tt(e);return{o:function(t,n){o.value=t,_=n},d:qt(function(){var e=o.value.value;_[n]!==e&&(_[n]=e,i?t[n]=e:e?t.setAttribute(n,e):t.removeAttribute(n))})}}function Jt(t){return ft(function(){return Tt(t)},[])}function Kt(t){var n=rt(t);return n.current=t,wt.__$f|=4,ft(function(){return Ft(function(){return n.current()})},[])}Dt.prototype.brand=kt,Dt.prototype.h=function(){return!0},Dt.prototype.S=function(t){this.t!==t&&void 0===t.e&&(t.x=this.t,void 0!==this.t&&(this.t.e=t),this.t=t)},Dt.prototype.U=function(t){if(void 0!==this.t){var n=t.e,e=t.x;void 0!==n&&(n.x=e,t.e=void 0),void 0!==e&&(e.e=n,t.x=void 0),t===this.t&&(this.t=e)}},Dt.prototype.subscribe=function(t){var n=this;return qt(function(){var e=n.value,_=32&this.f;this.f&=-33;try{t(e)}finally{this.f|=_}})},Dt.prototype.valueOf=function(){return this.value},Dt.prototype.toString=function(){return this.value+""},Dt.prototype.toJSON=function(){return this.value},Dt.prototype.peek=function(){return this.v},Object.defineProperty(Dt.prototype,"value",{get:function(){var t=$t(this);return void 0!==t&&(t.i=this.i),this.v},set:function(t){if(Et instanceof Wt&&function(){throw new Error("Computed cannot have side-effects")}(),t!==this.v){Pt>100&&bt(),this.v=t,this.i++,Nt++,Ht++;try{for(var n=this.t;void 0!==n;n=n.x)n.t.N()}finally{St()}}}}),(Wt.prototype=new Dt).h=function(){if(this.f&=-3,1&this.f)return!1;if(32==(36&this.f))return!0;if(this.f&=-5,this.g===Nt)return!0;if(this.g=Nt,this.f|=1,this.i>0&&!At(this))return this.f&=-2,!0;var t=Et;try{Vt(this),Et=this;var n=this.x();(16&this.f||this.v!==n||0===this.i)&&(this.v=n,this.f&=-17,this.i++)}catch(t){this.v=t,this.f|=16,this.i++}return Et=t,Mt(this),this.f&=-2,!0},Wt.prototype.S=function(t){if(void 0===this.t){this.f|=36;for(var n=this.s;void 0!==n;n=n.n)n.S.S(n)}Dt.prototype.S.call(this,t)},Wt.prototype.U=function(t){if(void 0!==this.t&&(Dt.prototype.U.call(this,t),void 0===this.t)){this.f&=-33;for(var n=this.s;void 0!==n;n=n.n)n.S.U(n)}},Wt.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;void 0!==t;t=t.x)t.t.N()}},Wt.prototype.peek=function(){if(this.h()||bt(),16&this.f)throw this.v;return this.v},Object.defineProperty(Wt.prototype,"value",{get:function(){1&this.f&&bt();var t=$t(this);if(this.h(),void 0!==t&&(t.i=this.i),16&this.f)throw this.v;return this.v}}),jt.prototype.c=function(){var t=this.S();try{if(8&this.f)return;if(void 0===this.x)return;var n=this.x();"function"==typeof n&&(this.u=n)}finally{t()}},jt.prototype.S=function(){1&this.f&&bt(),this.f|=1,this.f&=-9,Lt(this),Vt(this),Ht++;var t=Et;return Et=this,Rt.bind(this,t)},jt.prototype.N=function(){2&this.f||(this.f|=2,this.o=Ut,Ut=this)},jt.prototype.d=function(){this.f|=8,1&this.f||Ot(this)},Gt.displayName="_st",Object.defineProperties(Dt.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:Gt},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}}),Bt("__b",function(t,n){if("string"==typeof n.type){var e,_=n.props;for(var i in _)if("children"!==i){var o=_[i];o instanceof Dt&&(e||(n.__np=e={}),e[i]=o,_[i]=o.peek())}}t(n)}),Bt("__r",function(t,n){It();var e,_=n.__c;_&&(_.__$f&=-2,void 0===(e=_.__$u)&&(_.__$u=e=function(t){var n;return qt(function(){n=this}),n.c=function(){_.__$f|=1,_.setState({})},n}())),wt=_,It(e),t(n)}),Bt("__e",function(t,n,e,_){It(),wt=void 0,t(n,e,_)}),Bt("diffed",function(t,n){var e;if(It(),wt=void 0,"string"==typeof n.type&&(e=n.__e)){var _=n.__np,i=n.props;if(_){var o=e.U;if(o)for(var r in o){var u=o[r];void 0===u||r in _||(u.d(),o[r]=void 0)}else e.U=o={};for(var f in _){var s=o[f],l=_[f];void 0===s?(s=zt(e,f,l,i),o[f]=s):s.o(l,i)}}}t(n)}),Bt("unmount",function(t,n){if("string"==typeof n.type){var e=n.__e;if(e){var _=e.U;if(_)for(var i in e.U=void 0,_){var o=_[i];o&&o.d()}}}else{var r=n.__c;if(r){var u=r.__$u;u&&(r.__$u=void 0,u.d())}}t(n)}),Bt("__h",function(t,n,e,_){(_<3||9===_)&&(n.__$f|=2),t(n,e,_)}),g.prototype.shouldComponentUpdate=function(t,n){var e=this.__$u;if(!(e&&void 0!==e.s||4&this.__$f))return!0;if(3&this.__$f)return!0;for(var _ in n)return!0;for(var i in t)if("__source"!==i&&t[i]!==this.props[i])return!0;for(var o in this.props)if(!(o in t))return!0;return!1};var Qt=function(t,n,e,_){var i;n[0]=0;for(var o=1;o<n.length;o++){var r=n[o++],u=n[o]?(n[0]|=r?1:2,e[n[o++]]):n[++o];3===r?_[0]=u:4===r?_[1]=Object.assign(_[1]||{},u):5===r?(_[1]=_[1]||{})[n[++o]]=u:6===r?_[1][n[++o]]+=u+"":r?(i=t.apply(u,Qt(t,u,e,["",null])),_.push(i),u[0]?n[0]|=2:(n[o-2]=0,n[o]=i)):_.push(u)}return _},Xt=new Map;function Yt(t){var n=Xt.get(this);return n||(n=new Map,Xt.set(this,n)),(n=Qt(this,n.get(t)||(n.set(t,n=function(t){for(var n,e,_=1,i="",o="",r=[0],u=function(t){1===_&&(t||(i=i.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?r.push(0,t,i):3===_&&(t||i)?(r.push(3,t,i),_=2):2===_&&"..."===i&&t?r.push(4,t,0):2===_&&i&&!t?r.push(5,0,!0,i):_>=5&&((i||!t&&5===_)&&(r.push(_,0,i,e),_=6),t&&(r.push(_,t,0,e),_=6)),i=""},f=0;f<t.length;f++){f&&(1===_&&u(),u(f));for(var s=0;s<t[f].length;s++)n=t[f][s],1===_?"<"===n?(u(),r=[r],_=3):i+=n:4===_?"--"===i&&">"===n?(_=1,i=""):i=n+i[0]:o?n===o?o="":i+=n:'"'===n||"'"===n?o=n:">"===n?(u(),_=1):_&&("="===n?(_=5,e=i,i=""):"/"===n&&(_<5||">"===t[f][s+1])?(u(),3===_&&(r=r[0]),_=r,(r=r[0]).push(2,0,_),_=0):" "===n||"\t"===n||"\n"===n||"\r"===n?(u(),_=2):i+=n),3===_&&"!--"===i&&(_=4,r=r[0])}return u(),r}(t)),n),arguments,[])).length>1?n:n[0]}const Zt=Yt.bind(v);export{g as Component,xt as batch,L as cloneElement,Ft as computed,O as createContext,y as createRef,qt as effect,v as h,Yt as htm,Zt as html,F as render,Tt as signal,U as toChildArray,st as useCallback,Kt as useComputed,lt as useContext,ct as useDebugValue,it as useEffect,at as useErrorBoundary,ut as useImperativeHandle,ot as useLayoutEffect,ft as useMemo,_t as useReducer,rt as useRef,Jt as useSignal,et as useState};
//# sourceMappingURL=preact-bundle.js.map