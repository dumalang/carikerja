function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function n(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}}(t,e)||n(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o,a=function(t,e){return t(e={exports:{}},e.exports),e.exports}((function(e){var n=function(e){var n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,n,r){var o=e&&e.prototype instanceof l?e:l,a=Object.create(o.prototype),i=new E(r||[]);return a._invoke=function(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return _()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=w(i,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=f(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,i),a}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=u;var s={};function l(){}function p(){}function h(){}var v={};v[a]=function(){return this};var d=Object.getPrototypeOf,m=d&&d(d(S([])));m&&m!==n&&r.call(m,a)&&(v=m);var y=h.prototype=l.prototype=Object.create(v);function g(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function b(e,n){var o;this._invoke=function(a,i){function c(){return new n((function(o,c){!function o(a,i,c,u){var s=f(e[a],e,i);if("throw"!==s.type){var l=s.arg,p=l.value;return p&&"object"===t(p)&&r.call(p,"__await")?n.resolve(p.__await).then((function(t){o("next",t,c,u)}),(function(t){o("throw",t,c,u)})):n.resolve(p).then((function(t){l.value=t,c(l)}),(function(t){return o("throw",t,c,u)}))}u(s.arg)}(a,i,o,c)}))}return o=o?o.then(c,c):c()}}function w(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=f(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,s;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function $(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach($,this),this.reset(!0)}function S(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return p.prototype=y.constructor=h,h.constructor=p,h[c]=p.displayName="GeneratorFunction",e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(y),t},e.awrap=function(t){return{__await:t}},g(b.prototype),b.prototype[i]=function(){return this},e.AsyncIterator=b,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new b(u(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},g(y),y[c]="Generator",y[a]=function(){return this},y.toString=function(){return"[object Generator]"},e.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=S,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;x(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},e}(e.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}}));function i(t,e,n,r,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function c(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function c(t){i(a,r,o,c,u,"next",t)}function u(t){i(a,r,o,c,u,"throw",t)}c(void 0)}))}}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?l(e):n}function h(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||n(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function m(){}function y(t,e){for(var n in e)t[n]=e[n];return t}function g(t){return t()}function b(){return Object.create(null)}function w(t){t.forEach(g)}function $(t){return"function"==typeof t}function x(e,n){return e!=e?n==n:e!==n||e&&"object"===t(e)||"function"==typeof e}function E(t,e,n,r){return t[1]&&r?y(n.ctx.slice(),t[1](r(e))):n.ctx}function S(t,e){t.appendChild(e)}function _(t,e,n){t.insertBefore(e,n||null)}function L(t){t.parentNode.removeChild(t)}function R(t,e){for(var n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function k(t){return document.createElement(t)}function O(t){return document.createTextNode(t)}function P(){return O(" ")}function j(){return O("")}function A(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function N(t){return Array.from(t.childNodes)}function C(t,e,n,r){for(var o=0;o<t.length;o+=1){var a=t[o];if(a.nodeName===e){for(var i=0;i<a.attributes.length;){var c=a.attributes[i];n[c.name]?i++:a.removeAttribute(c.name)}return t.splice(o,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):k(e)}function I(t,e){for(var n=0;n<t.length;n+=1){var r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return O(e)}function T(t){return I(t," ")}function q(t,e){e=""+e,t.data!==e&&(t.data=e)}function D(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;return Array.from(e.querySelectorAll(t))}function U(t){o=t}function G(){if(!o)throw new Error("Function called outside component initialization");return o}var F=[],H=[],V=[],B=[],K=Promise.resolve(),J=!1;function M(t){V.push(t)}var Y=!1,z=new Set;function W(){if(!Y){Y=!0;do{for(var t=0;t<F.length;t+=1){var e=F[t];U(e),X(e.$$)}for(F.length=0;H.length;)H.pop()();for(var n=0;n<V.length;n+=1){var r=V[n];z.has(r)||(z.add(r),r())}V.length=0}while(F.length);for(;B.length;)B.pop()();J=!1,Y=!1,z.clear()}}function X(t){if(null!==t.fragment){t.update(),w(t.before_update);var e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}var Q,Z=new Set;function tt(){Q={r:0,c:[],p:Q}}function et(){Q.r||w(Q.c),Q=Q.p}function nt(t,e){t&&t.i&&(Z.delete(t),t.i(e))}function rt(t,e,n,r){if(t&&t.o){if(Z.has(t))return;Z.add(t),Q.c.push((function(){Z.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function ot(t,e){for(var n={},r={},o={$$scope:1},a=t.length;a--;){var i=t[a],c=e[a];if(c){for(var u in i)u in c||(r[u]=1);for(var f in c)o[f]||(n[f]=c[f],o[f]=1);t[a]=c}else for(var s in i)o[s]=1}for(var l in r)l in n||(n[l]=void 0);return n}function at(e){return"object"===t(e)&&null!==e?e:{}}function it(t){t&&t.c()}function ct(t,e){t&&t.l(e)}function ut(t,e,n){var r=t.$$,o=r.fragment,a=r.on_mount,i=r.on_destroy,c=r.after_update;o&&o.m(e,n),M((function(){var e=a.map(g).filter($);i?i.push.apply(i,h(e)):w(e),t.$$.on_mount=[]})),c.forEach(M)}function ft(t,e){var n=t.$$;null!==n.fragment&&(w(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function st(t,e){-1===t.$$.dirty[0]&&(F.push(t),J||(J=!0,K.then(W)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function lt(t,e,n,r,a,i){var c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[-1],u=o;U(t);var f=e.props||{},s=t.$$={fragment:null,ctx:null,props:i,update:m,not_equal:a,bound:b(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:b(),dirty:c},l=!1;if(s.ctx=n?n(t,f,(function(e,n){var r=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:n;return s.ctx&&a(s.ctx[e],s.ctx[e]=r)&&(s.bound[e]&&s.bound[e](r),l&&st(t,e)),n})):[],s.update(),l=!0,w(s.before_update),s.fragment=!!r&&r(s.ctx),e.target){if(e.hydrate){var p=N(e.target);s.fragment&&s.fragment.l(p),p.forEach(L)}else s.fragment&&s.fragment.c();e.intro&&nt(t.$$.fragment),ut(t,e.target,e.anchor),W()}U(u)}var pt=function(){function t(){v(this,t)}var e,n,r;return e=t,(n=[{key:"$destroy",value:function(){ft(this,1),this.$destroy=m}},{key:"$on",value:function(t,e){var n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),function(){var t=n.indexOf(e);-1!==t&&n.splice(t,1)}}},{key:"$set",value:function(){}}])&&d(e.prototype,n),r&&d(e,r),t}(),ht=[];function vt(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,r=[];function o(n){if(x(t,n)&&(t=n,e)){for(var o=!ht.length,a=0;a<r.length;a+=1){var i=r[a];i[1](),ht.push(i,t)}if(o){for(var c=0;c<ht.length;c+=2)ht[c][0](ht[c+1]);ht.length=0}}}function a(e){o(e(t))}function i(a){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,c=[a,i];return r.push(c),1===r.length&&(e=n(o)||m),a(t),function(){var t=r.indexOf(c);-1!==t&&r.splice(t,1),0===r.length&&(e(),e=null)}}return{set:o,update:a,subscribe:i}}var dt={},mt=function(){return{}};function yt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function gt(t){var e,n,o,a,i,c,u,f,s,l,p,h;return{c:function(){e=k("nav"),n=k("header"),o=k("div"),a=k("a"),i=O("PHK.id"),c=P(),u=k("div"),f=k("ul"),s=k("li"),l=k("a"),p=O("Tentang"),this.h()},l:function(t){var r=N(e=C(t,"NAV",{class:!0})),h=N(n=C(r,"HEADER",{class:!0})),v=N(o=C(h,"DIV",{class:!0})),d=N(a=C(v,"A",{href:!0,class:!0}));i=I(d,"PHK.id"),d.forEach(L),v.forEach(L),h.forEach(L),c=T(r);var m=N(u=C(r,"DIV",{class:!0})),y=N(f=C(m,"UL",{typeof:!0})),g=N(s=C(y,"LI",{})),b=N(l=C(g,"A",{"aria-current":!0,href:!0}));p=I(b,"Tentang"),b.forEach(L),g.forEach(L),y.forEach(L),m.forEach(L),r.forEach(L),this.h()},h:function(){A(a,"href","/"),A(a,"class","no-style"),A(o,"class","terminal-prompt"),A(n,"class","terminal-logo"),A(l,"aria-current",h="about"===t[0]?"page":void 0),A(l,"href","about"),A(f,"typeof","BreadcrumbList"),A(u,"class","terminal-menu"),A(e,"class","terminal-nav")},m:function(t,r){_(t,e,r),S(e,n),S(n,o),S(o,a),S(a,i),S(e,c),S(e,u),S(u,f),S(f,s),S(s,l),S(l,p)},p:function(t,e){1&r(e,1)[0]&&h!==(h="about"===t[0]?"page":void 0)&&A(l,"aria-current",h)},i:m,o:m,d:function(t){t&&L(e)}}}function bt(t,e,n){var r=e.segment;return t.$set=function(t){"segment"in t&&n(0,r=t.segment)},[r]}var wt=function(t){s(n,pt);var e=yt(n);function n(t){var r;return v(this,n),lt(l(r=e.call(this)),t,bt,gt,x,{segment:0}),r}return n}();function $t(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function xt(e){var n,o,a,i=new wt({props:{segment:e[0]}}),c=e[2].default,u=function(t,e,n,r){if(t){var o=E(t,e,n,r);return t[0](o)}}(c,e,e[1],null);return{c:function(){n=k("main"),it(i.$$.fragment),o=P(),u&&u.c(),this.h()},l:function(t){var e=N(n=C(t,"MAIN",{class:!0}));ct(i.$$.fragment,e),o=T(e),u&&u.l(e),e.forEach(L),this.h()},h:function(){A(n,"class","svelte-oosp9s")},m:function(t,e){_(t,n,e),ut(i,n,null),S(n,o),u&&u.m(n,null),a=!0},p:function(e,n){var o=r(n,1)[0],a={};1&o&&(a.segment=e[0]),i.$set(a),u&&u.p&&2&o&&u.p(E(c,e,e[1],null),function(e,n,r,o){if(e[2]&&o){var a=e[2](o(r));if(void 0===n.dirty)return a;if("object"===t(a)){for(var i=[],c=Math.max(n.dirty.length,a.length),u=0;u<c;u+=1)i[u]=n.dirty[u]|a[u];return i}return n.dirty|a}return n.dirty}(c,e[1],o,null))},i:function(t){a||(nt(i.$$.fragment,t),nt(u,t),a=!0)},o:function(t){rt(i.$$.fragment,t),rt(u,t),a=!1},d:function(t){t&&L(n),ft(i),u&&u.d(t)}}}function Et(t,e,n){var r=e.segment,o=e.$$slots,a=void 0===o?{}:o,i=e.$$scope;return t.$set=function(t){"segment"in t&&n(0,r=t.segment),"$$scope"in t&&n(1,i=t.$$scope)},[r,i,a]}var St=function(t){s(n,pt);var e=$t(n);function n(t){var r;return v(this,n),lt(l(r=e.call(this)),t,Et,xt,x,{segment:0}),r}return n}();function _t(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function Lt(t){var e,n,r=t[1].stack+"";return{c:function(){e=k("pre"),n=O(r)},l:function(t){var o=N(e=C(t,"PRE",{}));n=I(o,r),o.forEach(L)},m:function(t,r){_(t,e,r),S(e,n)},p:function(t,e){2&e&&r!==(r=t[1].stack+"")&&q(n,r)},d:function(t){t&&L(e)}}}function Rt(t){var e,n,o,a,i,c,u,f,s,l=t[1].message+"";document.title=e=t[0];var p=t[2]&&t[1].stack&&Lt(t);return{c:function(){n=P(),o=k("h1"),a=O(t[0]),i=P(),c=k("p"),u=O(l),f=P(),p&&p.c(),s=j(),this.h()},l:function(e){D('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(L),n=T(e);var r=N(o=C(e,"H1",{class:!0}));a=I(r,t[0]),r.forEach(L),i=T(e);var h=N(c=C(e,"P",{class:!0}));u=I(h,l),h.forEach(L),f=T(e),p&&p.l(e),s=j(),this.h()},h:function(){A(o,"class","svelte-8od9u6"),A(c,"class","svelte-8od9u6")},m:function(t,e){_(t,n,e),_(t,o,e),S(o,a),_(t,i,e),_(t,c,e),S(c,u),_(t,f,e),p&&p.m(t,e),_(t,s,e)},p:function(t,n){var o=r(n,1)[0];1&o&&e!==(e=t[0])&&(document.title=e),1&o&&q(a,t[0]),2&o&&l!==(l=t[1].message+"")&&q(u,l),t[2]&&t[1].stack?p?p.p(t,o):((p=Lt(t)).c(),p.m(s.parentNode,s)):p&&(p.d(1),p=null)},i:m,o:m,d:function(t){t&&L(n),t&&L(o),t&&L(i),t&&L(c),t&&L(f),p&&p.d(t),t&&L(s)}}}function kt(t,e,n){var r=e.status,o=e.error;return t.$set=function(t){"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,!1]}var Ot=function(t){s(n,pt);var e=_t(n);function n(t){var r;return v(this,n),lt(l(r=e.call(this)),t,kt,Rt,x,{status:0,error:1}),r}return n}();function Pt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function jt(t){var e,n,r=[t[4].props],o=t[4].component;function a(t){for(var e={},n=0;n<r.length;n+=1)e=y(e,r[n]);return{props:e}}if(o)var i=new o(a());return{c:function(){i&&it(i.$$.fragment),e=j()},l:function(t){i&&ct(i.$$.fragment,t),e=j()},m:function(t,r){i&&ut(i,t,r),_(t,e,r),n=!0},p:function(t,n){var c=16&n?ot(r,[at(t[4].props)]):{};if(o!==(o=t[4].component)){if(i){tt();var u=i;rt(u.$$.fragment,1,0,(function(){ft(u,1)})),et()}o?(it((i=new o(a())).$$.fragment),nt(i.$$.fragment,1),ut(i,e.parentNode,e)):i=null}else o&&i.$set(c)},i:function(t){n||(i&&nt(i.$$.fragment,t),n=!0)},o:function(t){i&&rt(i.$$.fragment,t),n=!1},d:function(t){t&&L(e),i&&ft(i,t)}}}function At(t){var e,n=new Ot({props:{error:t[0],status:t[1]}});return{c:function(){it(n.$$.fragment)},l:function(t){ct(n.$$.fragment,t)},m:function(t,r){ut(n,t,r),e=!0},p:function(t,e){var r={};1&e&&(r.error=t[0]),2&e&&(r.status=t[1]),n.$set(r)},i:function(t){e||(nt(n.$$.fragment,t),e=!0)},o:function(t){rt(n.$$.fragment,t),e=!1},d:function(t){ft(n,t)}}}function Nt(t){var e,n,r,o,a=[At,jt],i=[];function c(t,e){return t[0]?0:1}return e=c(t),n=i[e]=a[e](t),{c:function(){n.c(),r=j()},l:function(t){n.l(t),r=j()},m:function(t,n){i[e].m(t,n),_(t,r,n),o=!0},p:function(t,o){var u=e;(e=c(t))===u?i[e].p(t,o):(tt(),rt(i[u],1,1,(function(){i[u]=null})),et(),(n=i[e])||(n=i[e]=a[e](t)).c(),nt(n,1),n.m(r.parentNode,r))},i:function(t){o||(nt(n),o=!0)},o:function(t){rt(n),o=!1},d:function(t){i[e].d(t),t&&L(r)}}}function Ct(t){for(var e,n=[{segment:t[2][0]},t[3].props],o={$$slots:{default:[Nt]},$$scope:{ctx:t}},a=0;a<n.length;a+=1)o=y(o,n[a]);var i=new St({props:o});return{c:function(){it(i.$$.fragment)},l:function(t){ct(i.$$.fragment,t)},m:function(t,n){ut(i,t,n),e=!0},p:function(t,e){var o=r(e,1)[0],a=12&o?ot(n,[4&o&&{segment:t[2][0]},8&o&&at(t[3].props)]):{};147&o&&(a.$$scope={dirty:o,ctx:t}),i.$set(a)},i:function(t){e||(nt(i.$$.fragment,t),e=!0)},o:function(t){rt(i.$$.fragment,t),e=!1},d:function(t){ft(i,t)}}}function It(t,e,n){var r,o,a,i=e.stores,c=e.error,u=e.status,f=e.segments,s=e.level0,l=e.level1,p=void 0===l?null:l,h=e.notify;return r=h,G().$$.after_update.push(r),o=dt,a=i,G().$$.context.set(o,a),t.$set=function(t){"stores"in t&&n(5,i=t.stores),"error"in t&&n(0,c=t.error),"status"in t&&n(1,u=t.status),"segments"in t&&n(2,f=t.segments),"level0"in t&&n(3,s=t.level0),"level1"in t&&n(4,p=t.level1),"notify"in t&&n(6,h=t.notify)},[c,u,f,s,p,i,h]}var Tt=function(t){s(n,pt);var e=Pt(n);function n(t){var r;return v(this,n),lt(l(r=e.call(this)),t,It,Ct,x,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6}),r}return n}(),qt=[],Dt=[{js:function(){return import("./index.5d5100fb.js")},css:[]},{js:function(){return import("./about.3f364bcc.js")},css:[]}],Ut=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]}];function Gt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{replaceState:!1},n=ie(new URL(t,document.baseURI));return n?(re[e.replaceState?"replaceState":"pushState"]({id:Zt},"",t),ue(n,null).then((function(){}))):(location.href=t,new Promise((function(t){})))}var Ft,Ht,Vt,Bt,Kt,Jt="undefined"!=typeof __SAPPER__&&__SAPPER__,Mt=!1,Yt=[],zt="{}",Wt={page:function(t){var e=vt(t),n=!0;return{notify:function(){n=!0,e.update((function(t){return t}))},set:function(t){n=!1,e.set(t)},subscribe:function(t){var r;return e.subscribe((function(e){(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:vt(null),session:vt(Jt&&Jt.session)};Wt.session.subscribe(function(){var t=c(a.mark((function t(e){var n,r,o,i,c,u;return a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Bt=e,Mt){t.next=3;break}return t.abrupt("return");case 3:return Kt=!0,n=ie(new URL(location.href)),r=Ht={},t.next=8,he(n);case 8:if(o=t.sent,i=o.redirect,c=o.props,u=o.branch,r===Ht){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,se(i,u,c,n.page);case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());var Xt,Qt=null;var Zt,te=1;var ee,ne,re="undefined"!=typeof history?history:{pushState:function(t,e,n){},replaceState:function(t,e,n){},scrollRestoration:""},oe={};function ae(e){var n=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach((function(e){var o=r(/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," "))),3),a=o[1],i=o[2],c=void 0===i?"":i;"string"==typeof n[a]&&(n[a]=[n[a]]),"object"===t(n[a])?n[a].push(c):n[a]=c})),n}function ie(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Jt.baseUrl))return null;var e=t.pathname.slice(Jt.baseUrl.length);if(""===e&&(e="/"),!qt.some((function(t){return t.test(e)})))for(var n=0;n<Ut.length;n+=1){var r=Ut[n],o=r.pattern.exec(e);if(o){var a=ae(t.search),i=r.parts[r.parts.length-1],c=i.params?i.params(o):{},u={host:location.host,path:e,query:a,params:c};return{href:t.href,route:r,match:o,page:u}}}}function ce(){return{x:pageXOffset,y:pageYOffset}}function ue(t,e,n,r){return fe.apply(this,arguments)}function fe(){return(fe=c(a.mark((function t(e,n,r,o){var i,c,u,f,s,l,p,h,v;return a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n?Zt=n:(i=ce(),oe[Zt]=i,n=Zt=++te,oe[Zt]=r?i:{x:0,y:0}),Zt=n,Ft&&Wt.preloading.set(!0),c=Qt&&Qt.href===e.href?Qt.promise:he(e),Qt=null,u=Ht={},t.next=8,c;case 8:if(f=t.sent,s=f.redirect,l=f.props,p=f.branch,u===Ht){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,se(s,p,l,e.page);case 16:document.activeElement&&document.activeElement.blur(),r||(h=oe[n],o&&(v=document.getElementById(o.slice(1)))&&(h={x:0,y:v.getBoundingClientRect().top+scrollY}),oe[Zt]=h,h&&scrollTo(h.x,h.y));case 18:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function se(t,e,n,r){return le.apply(this,arguments)}function le(){return(le=c(a.mark((function t(e,n,r,o){var i,c;return a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=2;break}return t.abrupt("return",Gt(e.location,{replaceState:!0}));case 2:if(Wt.page.set(o),Wt.preloading.set(!1),!Ft){t.next=8;break}Ft.$set(r),t.next=18;break;case 8:return r.stores={page:{subscribe:Wt.page.subscribe},preloading:{subscribe:Wt.preloading.subscribe},session:Wt.session},t.next=11,Vt;case 11:if(t.t0=t.sent,r.level0={props:t.t0},r.notify=Wt.page.notify,i=document.querySelector("#sapper-head-start"),c=document.querySelector("#sapper-head-end"),i&&c){for(;i.nextSibling!==c;)ye(i.nextSibling);ye(i),ye(c)}Ft=new Tt({target:Xt,props:r,hydrate:!0});case 18:Yt=n,zt=JSON.stringify(o.query),Mt=!0,Kt=!1;case 22:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function pe(t,e,n,r){if(r!==zt)return!0;var o=Yt[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}function he(t){return ve.apply(this,arguments)}function ve(){return(ve=c(a.mark((function t(e){var n,r,o,i,u,f,s,l,p,h,v;return a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.route,r=e.page,o=r.path.split("/").filter(Boolean),i=null,u={error:null,status:200,segments:[o[0]]},f={fetch:function(t){function e(e,n){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e){return fetch(t,e)})),redirect:function(t,e){if(i&&(i.statusCode!==t||i.location!==e))throw new Error("Conflicting redirects");i={statusCode:t,location:e}},error:function(t,e){u.error="string"==typeof e?new Error(e):e,u.status=t}},Vt||(Vt=Jt.preloaded[0]||mt.call(f,{host:r.host,path:r.path,query:r.query,params:{}},Bt)),l=1,t.prev=7,p=JSON.stringify(r.query),h=n.pattern.exec(r.path),v=!1,t.next=13,Promise.all(n.parts.map(function(){var t=c(a.mark((function t(n,i){var c,s,d,m,y,g;return a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=o[i],pe(i,c,h,p)&&(v=!0),u.segments[l]=o[i+1],n){t.next=5;break}return t.abrupt("return",{segment:c});case 5:if(s=l++,Kt||v||!Yt[i]||Yt[i].part!==n.i){t.next=8;break}return t.abrupt("return",Yt[i]);case 8:return v=!1,t.next=11,me(Dt[n.i]);case 11:if(d=t.sent,m=d.default,y=d.preload,!Mt&&Jt.preloaded[i+1]){t.next=25;break}if(!y){t.next=21;break}return t.next=18,y.call(f,{host:r.host,path:r.path,query:r.query,params:n.params?n.params(e.match):{}},Bt);case 18:t.t0=t.sent,t.next=22;break;case 21:t.t0={};case 22:g=t.t0,t.next=26;break;case 25:g=Jt.preloaded[i+1];case 26:return t.abrupt("return",u["level".concat(s)]={component:m,props:g,segment:c,match:h,part:n.i});case 27:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()));case 13:s=t.sent,t.next=21;break;case 16:t.prev=16,t.t0=t.catch(7),u.error=t.t0,u.status=500,s=[];case 21:return t.abrupt("return",{redirect:i,props:u,branch:s});case 22:case"end":return t.stop()}}),t,null,[[7,16]])})))).apply(this,arguments)}function de(t){var e="client/".concat(t);if(!document.querySelector('link[href="'.concat(e,'"]')))return new Promise((function(t,n){var r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=function(){return t()},r.onerror=n,document.head.appendChild(r)}))}function me(t){var e="string"==typeof t.css?[]:t.css.map(de);return e.unshift(t.js()),Promise.all(e).then((function(t){return t[0]}))}function ye(t){t.parentNode.removeChild(t)}function ge(t){var e=ie(new URL(t,document.baseURI));if(e)return Qt&&t===Qt.href||function(t,e){Qt={href:t,promise:e}}(t,he(e)),Qt.promise}function be(t){clearTimeout(ee),ee=setTimeout((function(){we(t)}),20)}function we(t){var e=xe(t.target);e&&"prefetch"===e.rel&&ge(e.href)}function $e(e){if(1===function(t){return null===t.which?t.button:t.which}(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.defaultPrevented)){var n=xe(e.target);if(n&&n.href){var r="object"===t(n.href)&&"SVGAnimatedString"===n.href.constructor.name,o=String(r?n.href.baseVal:n.href);if(o!==location.href){if(!n.hasAttribute("download")&&"external"!==n.getAttribute("rel")&&!(r?n.target.baseVal:n.target)){var a=new URL(o);if(a.pathname!==location.pathname||a.search!==location.search){var i=ie(a);if(i)ue(i,null,n.hasAttribute("sapper-noscroll"),a.hash),e.preventDefault(),re.pushState({id:Zt},"",a.href)}}}else location.hash||e.preventDefault()}}}function xe(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function Ee(t){if(oe[Zt]=ce(),t.state){var e=ie(new URL(location.href));e?ue(e,t.state.id):location.href=location.href}else(function(t){Zt=t})(te=te+1),re.replaceState({id:Zt},"",location.href)}ne={target:document.querySelector("#sapper")},"scrollRestoration"in re&&(re.scrollRestoration="manual"),addEventListener("beforeunload",(function(){re.scrollRestoration="auto"})),addEventListener("load",(function(){re.scrollRestoration="manual"})),function(t){Xt=t}(ne.target),addEventListener("click",$e),addEventListener("popstate",Ee),addEventListener("touchstart",we),addEventListener("mousemove",be),Promise.resolve().then((function(){var t=location,e=t.hash,n=t.href;re.replaceState({id:te},"",n);var r,o,a,i,c,u,f,s,l=new URL(location.href);if(Jt.error)return r=location,o=r.host,a=r.pathname,i=r.search,c=Jt.session,u=Jt.preloaded,f=Jt.status,s=Jt.error,Vt||(Vt=u&&u[0]),void se(null,[],{error:s,status:f,session:c,level0:{props:Vt},level1:{props:{status:f,error:s},component:Ot},segments:u},{host:o,path:a,query:ae(i),params:{}});var p=ie(l);return p?ue(p,te,!0,e):void 0}));export{pt as S,s as _,u as a,p as b,v as c,l as d,k as e,P as f,C as g,N as h,lt as i,I as j,L as k,T as l,A as m,_ as n,S as o,m as p,D as q,r,x as s,O as t,R as u};
