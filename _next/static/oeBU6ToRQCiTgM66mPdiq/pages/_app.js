(window.webpackJsonp=window.webpackJsonp||[]).push([["f496"],{"74v/":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){var t=n("cha2");return{page:t.default||t}}])},"8Bbg":function(t,e,n){t.exports=n("B5Ud")},B5Ud:function(t,e,n){"use strict";var r=n("KI45"),a=r(n("eVuF")),o=r(n("UXZV")),i=r(n("/HRN")),u=r(n("WaGi")),c=r(n("ZDA2")),l=r(n("/+P4")),s=r(n("N9n2")),p=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e},f=function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var d=p(n("q1tI")),h=f(n("lgD3")),v=n("Bu4q"),y=n("nOHt"),b=function(t){function e(){return(0,i.default)(this,e),(0,c.default)(this,(0,l.default)(e).apply(this,arguments))}return(0,s.default)(e,t),(0,u.default)(e,[{key:"getChildContext",value:function(){return{router:y.makePublicRouterInstance(this.props.router)}}},{key:"componentDidCatch",value:function(t){throw t}},{key:"render",value:function(){var t=this.props,e=t.router,n=t.Component,r=t.pageProps,a=g(e);return d.default.createElement(w,null,d.default.createElement(n,(0,o.default)({},r,{url:a})))}}],[{key:"getInitialProps",value:function(t){var e=t.Component,n=(t.router,t.ctx);try{return a.default.resolve(v.loadGetInitialProps(e,n)).then(function(t){return{pageProps:t}})}catch(r){return a.default.reject(r)}}}]),e}(d.Component);b.childContextTypes={router:h.default.object},e.default=b;var w=function(t){function e(){return(0,i.default)(this,e),(0,c.default)(this,(0,l.default)(e).apply(this,arguments))}return(0,s.default)(e,t),(0,u.default)(e,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var t=window.location.hash;if(t=!!t&&t.substring(1)){var e=document.getElementById(t);e&&setTimeout(function(){return e.scrollIntoView()},0)}}},{key:"render",value:function(){return this.props.children}}]),e}(d.Component);e.Container=w;var O=v.execOnce(function(){0});function g(t){var e=t.pathname,n=t.asPath,r=t.query;return{get query(){return O(),r},get pathname(){return O(),e},get asPath(){return O(),n},back:function(){O(),t.back()},push:function(e,n){return O(),t.push(e,n)},pushTo:function(e,n){O();var r=n?e:null,a=n||e;return t.push(r,a)},replace:function(e,n){return O(),t.replace(e,n)},replaceTo:function(e,n){O();var r=n?e:null,a=n||e;return t.replace(r,a)}}}e.createUrl=g},Mon7:function(t,e,n){"use strict";n.d(e,"a",function(){return f}),n.d(e,"b",function(){return d});var r=n("ln6h"),a=n.n(r),o=n("O40h"),i=n("zrwo"),u=n("9UR+"),c="tinlake-ui/investments/LOAD_INVESTOR",l="tinlake-ui/investments/INVESTOR_NOT_FOUND",s="tinlake-ui/investments/RECEIVE_INVESTOR",p={investorState:null,investor:null};function f(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{type:""};switch(e.type){case c:return Object(i.a)({},t,{investorState:"loading",investor:null});case l:return Object(i.a)({},t,{investorState:"not found"});case s:return Object(i.a)({},t,{investorState:"found",investor:e.investor});default:return t}}function d(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(){var r=Object(o.default)(a.a.mark(function r(o){var i;return a.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return n||o({type:c}),r.next=3,Object(u.c)(t,e);case 3:(i=r.sent).errorMsg&&o({type:l}),o({type:s,investor:i.data});case 6:case"end":return r.stop()}},r)}));return function(t){return r.apply(this,arguments)}}()}},cha2:function(t,e,n){"use strict";n.r(e);var r,a=n("ln6h"),o=n.n(a),i=n("O40h"),u=n("0iUn"),c=n("sLSF"),l=n("MI3g"),s=n("a7VT"),p=n("Tit0"),f=n("q1tI"),d=n.n(f),h=n("/MKj"),v=n("8Bbg"),y=n.n(v),b=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),w=function(){return(w=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)},O=function(t,e,n,r){return new(n||(n=Promise))(function(a,o){function i(t){try{c(r.next(t))}catch(e){o(e)}}function u(t){try{c(r.throw(t))}catch(e){o(e)}}function c(t){t.done?a(t.value):new n(function(e){e(t.value)}).then(i,u)}c((r=r.apply(t,e||[])).next())})},g=function(t,e){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=(a=i.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=e.call(t,i)}catch(u){o=[6,u],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}},_=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(n[r[a]]=t[r[a]])}return n},m={storeKey:"__NEXT_REDUX_STORE__",debug:!1,serializeState:function(t){return t},deserializeState:function(t){return t}},S=n("ANjH"),E=n("xy4l"),P=n("Mon7"),x=n("go9o"),j=n("2PWv"),k=n("r6I4");function I(t){return function(e){var n=e.dispatch,r=e.getState;return function(e){return function(a){return"function"==typeof a?a(n,r,t):e(a)}}}}var T=I();T.withExtraArgument=I;var N=T,C="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:S.d,D=function(t){return Object(S.e)(Object(S.c)({loans:E.a,investments:P.a,analytics:x.a,auth:j.a,transactions:k.a}),t,C(Object(S.a)(N)))},R=n("Oe+p"),M=n("wZwN"),U=n("2+e4"),V=n("rt45");function A(){var t=Object(V.a)(["\n  /*\n   * Workaround for too light input:disabled text. Should be fixed by using a\n   * dedicated component at some point for displaying readonly values.\n   */\n  input:disabled {\n    opacity: 0.5;\n  }\n"]);return A=function(){return t},t}var X=n("vOnD").default.div(A()),B=function(t){function e(){return Object(u.default)(this,e),Object(l.default)(this,Object(s.default)(e).apply(this,arguments))}return Object(p.default)(e,t),Object(c.default)(e,[{key:"render",value:function(){var t=this.props,e=t.Component,n=t.pageProps,r=t.store;return d.a.createElement(R.a,{full:!0},d.a.createElement(X,null,d.a.createElement(v.Container,null,d.a.createElement(h.a,{store:r},d.a.createElement(U.a,{render:function(t){return d.a.createElement(M.a,{tinlake:t,render:function(){return d.a.createElement(e,n)}})}})))))}}],[{key:"getInitialProps",value:function(){var t=Object(i.default)(o.a.mark(function t(e){var n,r,a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.Component,r=e.ctx,!n.getInitialProps){t.next=7;break}return t.next=4,n.getInitialProps(r);case 4:t.t0=t.sent,t.next=8;break;case 7:t.t0={};case 8:return a=t.t0,t.abrupt("return",{pageProps:a});case 10:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}]),e}(y.a);e.default=function(t,e){e=w({},m,e);var n="undefined"==typeof window,r=function(r){var a=r.initialState,o=r.ctx,i=e.storeKey,u=function(){return t(e.deserializeState(a),w({},o,e,{isServer:n}))};return n?u():(window.hasOwnProperty(i)||(window[i]=u()),window[i])};return function(t){var a;return(a=function(n){function a(t,a){var o=n.call(this,t,a)||this,i=t.initialState;return e.debug&&console.log("4. WrappedApp.render created new store with initialState",i),o.store=r({initialState:i}),o}return b(a,n),a.prototype.render=function(){var e=this.props,n=e.initialProps,r=(e.initialState,_(e,["initialProps","initialState"]));return d.a.createElement(t,w({},r,n,{store:this.store}))},a}(f.Component)).displayName="withRedux("+(t.displayName||t.name||"App")+")",a.getInitialProps=function(a){return O(void 0,void 0,void 0,function(){var o,i;return g(this,function(u){switch(u.label){case 0:if(!a)throw new Error("No app context");if(!a.ctx)throw new Error("No page context");return o=r({ctx:a.ctx}),e.debug&&console.log("1. WrappedApp.getInitialProps wrapper got the store with state",o.getState()),a.ctx.store=o,a.ctx.isServer=n,i={},"getInitialProps"in t?[4,t.getInitialProps.call(t,a)]:[3,2];case 1:i=u.sent(),u.label=2;case 2:return e.debug&&console.log("3. WrappedApp.getInitialProps has store state",o.getState()),[2,{isServer:n,initialState:e.serializeState(o.getState()),initialProps:i}]}})})},a}}(D)(B)}},[["74v/","5d41","9da1"]]]);