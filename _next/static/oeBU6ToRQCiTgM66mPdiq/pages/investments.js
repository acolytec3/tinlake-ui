(window.webpackJsonp=window.webpackJsonp||[]).push([["0b4d"],{"5Ptj":function(e,t,n){"use strict";function r(e){switch(e){case"lakh":return/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;case"wan":return/(\d)(?=(\d{4})+(?!\d))/g;case"thousand":default:return/(\d)(?=(\d{3})+(?!\d))/g}}function i(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n="-"===e[0],r=n&&t,i=(e=e.replace("-","")).split(".");return{beforeDecimal:i[0],afterDecimal:i[1]||"",hasNagation:n,addNegation:r}}function a(e,t,n){for(var r="",i=n?"0":"",a=0;a<=t-1;a++)r+=e[a]||i;return r}Object.defineProperty(t,"__esModule",{value:!0}),t.noop=function(){},t.returnTrue=function(){return!0},t.charIsNumber=function(e){return!!(e||"").match(/\d/)},t.escapeRegExp=function(e){return e.replace(/[-[\]\/{}()*+?.\\^$|]/g,"\\$&")},t.getThousandsGroupRegex=r,t.applyThousandSeparator=function(e,t,n){var i=r(n),a=e.search(/[1-9]/);return e.substring(0,a)+e.substring(a,e.length).replace(i,"$1"+t)},t.splitDecimal=i,t.fixLeadingZero=function(e){if(!e)return e;var t="-"===e[0];t&&(e=e.substring(1,e.length));var n=e.split("."),r=n[0].replace(/^0+/,"")||"0",i=n[1]||"";return"".concat(t?"-":"").concat(r).concat(i?".".concat(i):"")},t.limitToScale=a,t.roundToPrecision=function(e,t,n){if(-1!==["","-"].indexOf(e))return e;var r=-1!==e.indexOf(".")&&t,o=i(e),s=o.beforeDecimal,u=o.afterDecimal,l=o.hasNagation,c=parseFloat("0.".concat(u||"0")).toFixed(t).split("."),f=s.split("").reverse().reduce(function(e,t,n){return e.length>n?(Number(e[0])+Number(t)).toString()+e.substring(1,e.length):t+e},c[0]),d=a(c[1]||"",Math.min(t,u.length),n),h=r?".":"";return"".concat(l?"-":"").concat(f).concat(h).concat(d)},t.omit=function(e,t){var n={};return Object.keys(e).forEach(function(r){t[r]||(n[r]=e[r])}),n},t.setCaretPosition=function(e,t){if(e.value=e.value,null!==e){if(e.createTextRange){var n=e.createTextRange();return n.move("character",t),n.select(),!0}return e.selectionStart||0===e.selectionStart?(e.focus(),e.setSelectionRange(t,t),!0):(e.focus(),!1)}},t.findChangedIndex=function(e,t){var n=0,r=0,i=e.length,a=t.length;for(;e[n]===t[n]&&n<i;)n++;for(;e[i-1-r]===t[a-1-r]&&a-r>n&&i-r>n;)r++;return{start:n,end:i-r}},t.clamp=function(e,t,n){return Math.min(Math.max(e,t),n)},t.getCurrentCaretPosition=function(e){return Math.max(e.selectionStart,e.selectionEnd)}},CjtE:function(e,t,n){"use strict";var r=n("q1tI"),i=n.n(r),a=n("otPn"),o=n("XDYV");t.a=function(e){var t=e.label,n=e.children;return i.a.createElement(a.a,{pad:"small",background:"white",elevation:"small",gap:"xsmall",margin:"small",flex:"grow",align:"center"},i.a.createElement(o.a,{textAlign:"center",truncate:!0,weight:"bold",style:{fontSize:"1.2em",lineHeight:"40px",textOverflow:"clip"}},n),i.a.createElement(o.a,{textAlign:"center"},t))}},GMAW:function(e,t,n){"use strict";var r=n("q1tI"),i=n.n(r),a=n("haXk"),o=function(e){var t=e.value,n=e.precision,r=e.prefix,o=e.suffix;t.toString().includes("-")&&(t="0"),a.Decimal.set({precision:n});var s=new a.Decimal(t.toString()).toFixed(n).toString();return i.a.createElement("span",null,r,s,o)};o.defaultProps={value:"0",precision:2,prefix:"",suffix:""},t.a=o},Oy3s:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n("ETH1");function i(e){try{r.toChecksumAddress(e)}catch(t){return!1}return!0}},Zkvi:function(e,t,n){"use strict";n.r(t);var r=n("0iUn"),i=n("sLSF"),a=n("MI3g"),o=n("a7VT"),s=n("Tit0"),u=n("q1tI"),l=n("/MKj"),c=n("YFqc"),f=n.n(c),d=n("otPn"),h=n("ACV0"),p=n("IIBO"),m=n("P3Am"),g=n("463D"),v=n("T1Te"),b=n("Oy3s"),w=n("ln6h"),y=n.n(w),E=n("O40h"),x=n("AT/M"),S=n("vYYK"),O=n("1OXE"),N=n("hGzJ"),k=n("9UR+"),P=n("r6I4"),j=n("go9o"),D=n("haXk");D.Decimal.set({precision:27,toExpNeg:-7,toExpPos:30});var C=function(e){function t(){var e,n;Object(r.default)(this,t);for(var i=arguments.length,s=new Array(i),u=0;u<i;u++)s[u]=arguments[u];return n=Object(a.default)(this,(e=Object(o.default)(t)).call.apply(e,[this].concat(s))),Object(S.a)(Object(x.default)(n),"setMinJuniorRatio",Object(E.default)(y.a.mark(function e(){var t,r,i,a,o,s,u,l;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state.minJuniorRatio,r=new D.Decimal(t).div(100).toString(),i=n.props,a=i.tinlake,o=i.loadAnalyticsData,s=i.responseReceived,(u=i.transactionSubmitted)&&u("Setting mininum TIN ratio initiated. Please confirm the pending transactions in MetaMask. Processing may take a few seconds."),e.prev=4,e.next=7,Object(k.j)(a,r);case 7:if(!(l=e.sent)||!l.errorMsg){e.next=11;break}return s&&s(null,"Setting minimun TIN ratio failed. ".concat(l.errorMsg)),e.abrupt("return");case 11:s&&s("Minimum TIN ratio set successfully.",null),o&&o(a),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(4),s&&s(null,"Changing minimum TIN ratio failed. ".concat(e.t0)),console.log(e.t0);case 19:case"end":return e.stop()}},e,null,[[4,15]])}))),n}return Object(s.default)(t,e),Object(i.default)(t,[{key:"componentWillMount",value:function(){var e=this.props.minJuniorRatio,t=e&&new D.Decimal(e.toString()).mul(100);this.setState({minJuniorRatio:t&&t.toString()||"0"})}},{key:"render",value:function(){var e=this,t=this.state.minJuniorRatio;return u.createElement(d.a,{pad:{horizontal:"medium"}},u.createElement(d.a,{direction:"row",margin:{top:"medium"}},u.createElement(h.a,{level:"4"},"Set minimum TIN ratio")),u.createElement(d.a,{direction:"row",gap:"medium"},u.createElement(d.a,{basis:"1/3"},u.createElement(p.a,{label:"Min TIN ratio"},u.createElement(N.a,{value:Object(O.a)(t,27),precision:2,onValueChange:function(t){var n=t.value;return e.setState({minJuniorRatio:Object(O.d)(n,27)})}}))),u.createElement(d.a,{align:"start"},u.createElement(v.a,{primary:!0,label:"Set min TIN ratio",onClick:this.setMinJuniorRatio}))))}}]),t}(u.Component),I=Object(l.b)(function(e){return e},{loadAnalyticsData:j.b,transactionSubmitted:P.d,responseReceived:P.c})(C),A=n("OZ/i"),T=n.n(A),R=n("GMAW"),M=n("CjtE"),F=function(e){function t(){return Object(r.default)(this,t),Object(a.default)(this,Object(o.default)(t).apply(this,arguments))}return Object(s.default)(t,e),Object(i.default)(t,[{key:"render",value:function(){var e=this.props.data,t=e.minJuniorRatio,n=e.currentJuniorRatio,r=e.senior,i=r&&r.interestRate||new T.a(0);return u.createElement(d.a,null,u.createElement(d.a,{direction:"row"},u.createElement(d.a,{basis:"1/3"},u.createElement(M.a,{label:"Current TIN ratio"},u.createElement(R.a,{value:Object(O.a)(n,25),suffix:" %",precision:2}))),u.createElement(d.a,{basis:"1/3"},u.createElement(M.a,{label:"Minimum TIN ratio"},u.createElement(R.a,{value:Object(O.a)(t,25),suffix:" %",precision:2}))),u.createElement(d.a,{basis:"1/3"},u.createElement(M.a,{label:"DROP interest rate"},u.createElement(R.a,{value:Object(O.e)(i),suffix:" %",precision:2}," ")))))}}]),t}(u.Component),V=n("5vTU"),_=function(e){function t(){return Object(r.default)(this,t),Object(a.default)(this,Object(o.default)(t).apply(this,arguments))}return Object(s.default)(t,e),Object(i.default)(t,[{key:"componentWillMount",value:function(){var e=this.props,t=e.loadAnalyticsData,n=e.tinlake;this.setState({investorAddress:""}),t&&t(n)}},{key:"componentWillUnmount",value:function(){var e=this.props.resetTransactionState;e&&e()}},{key:"render",value:function(){var e=this,t=this.state,n=t.investorAddress,r=t.is,i=this.props,a=i.analytics,o=i.auth,s=i.tinlake,l=i.transactions,c="loading"!==r&&""!==n&&Object(b.a)(n);return u.createElement(d.a,null,a&&a.data&&u.createElement(d.a,{margin:{bottom:"medium"}}," ",u.createElement(F,{data:a&&a.data})," "),l&&l.errorMessage&&u.createElement(d.a,{pad:{horizontal:"medium"},margin:{bottom:"small"}},u.createElement(V.a,{type:"error"},l.errorMessage)),a&&a.data&&o&&o.user&&o.user.permissions.canSetMinimumJuniorRatio&&u.createElement(I,{tinlake:s,minJuniorRatio:a.data.minJuniorRatio}," "),u.createElement(d.a,{margin:{top:"large"},pad:{horizontal:"medium"}},u.createElement(d.a,{direction:"row",gap:"medium",margin:{top:"medium"}},u.createElement(h.a,{level:"4"},"Load investor details"))),u.createElement(d.a,{pad:{horizontal:"medium"}},u.createElement(d.a,{direction:"row",gap:"medium",margin:{bottom:"medium"}},u.createElement(d.a,{basis:"1/3"},u.createElement(p.a,{label:"Investor Address"},u.createElement(m.a,{value:n,onChange:function(t){return e.setState({investorAddress:t.currentTarget.value})}}))),u.createElement(d.a,{align:"start"},u.createElement(f.a,{href:{pathname:"/investments/investor",query:{investorAddress:this.state.investorAddress}}},u.createElement(g.a,null,u.createElement(v.a,{primary:!0,label:"Load investor details",disabled:!c})))))))}}]),t}(u.Component),L=Object(l.b)(function(e){return e},{loadAnalyticsData:j.b,resetTransactionState:P.b})(_),q=n("2+e4"),U=n("Gb8u"),J=n("vnk9"),B=n("xJFt"),G=n("wZwN"),K=function(e){function t(){return Object(r.default)(this,t),Object(a.default)(this,Object(o.default)(t).apply(this,arguments))}return Object(s.default)(t,e),Object(i.default)(t,[{key:"render",value:function(){return u.createElement(d.a,{align:"center",pad:{horizontal:"small"}},u.createElement(U.a,{selectedRoute:"/investments",menuItems:J.a}),u.createElement(d.a,{justify:"center",direction:"row"},u.createElement(d.a,{width:"xlarge"},u.createElement(q.a,{render:function(e){return u.createElement(G.a,{tinlake:e,waitForAuthentication:!0,waitForAuthorization:!0,render:function(t){return t&&"loaded"===t.state&&t.user?u.createElement(d.a,null,u.createElement(B.a,null,u.createElement(h.a,{level:"3"},"Investments")),u.createElement(L,{tinlake:e,auth:t})):u.createElement(V.a,{margin:"medium",type:"error"},"Please authenticate to access this page ")}})}}))))}}]),t}(u.Component);t.default=K},aVHG:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/investments",function(){var e=n("Zkvi");return{page:e.default||e}}])},hGzJ:function(e,t,n){"use strict";var r=n("kOwS"),i=n("qNsG"),a=n("q1tI"),o=n.n(a),s=n("mDiV"),u=n.n(s),l=n("P3Am"),c=function(e){var t=e.value,n=e.precision,a=e.prefix,s=e.suffix,c=e.onValueChange,f=Object(i.a)(e,["value","precision","prefix","suffix","onValueChange"]);return o.a.createElement(u.a,Object(r.a)({thousandSeparator:",",decimalScale:n,fixedDecimalScale:!0,allowNegative:!1,prefix:a,suffix:s,customInput:l.a,value:t,onValueChange:c},f))};c.defaultProps={value:"0",precision:2,prefix:"",suffix:""},t.a=c},haXk:function(e,t,n){var r;!function(i){"use strict";var a,o=1e9,s={precision:20,rounding:4,toExpNeg:-7,toExpPos:21,LN10:"2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"},u=!0,l="[DecimalError] ",c=l+"Invalid argument: ",f=l+"Exponent out of range: ",d=Math.floor,h=Math.pow,p=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,m=1e7,g=7,v=d(9007199254740991/g),b={};function w(e,t){var n,r,i,a,o,s,l,c,f=e.constructor,d=f.precision;if(!e.s||!t.s)return t.s||(t=new f(e)),u?D(t,d):t;if(l=e.d,c=t.d,o=e.e,i=t.e,l=l.slice(),a=o-i){for(a<0?(r=l,a=-a,s=c.length):(r=c,i=o,s=l.length),a>(s=(o=Math.ceil(d/g))>s?o+1:s+1)&&(a=s,r.length=1),r.reverse();a--;)r.push(0);r.reverse()}for((s=l.length)-(a=c.length)<0&&(a=s,r=c,c=l,l=r),n=0;a;)n=(l[--a]=l[a]+c[a]+n)/m|0,l[a]%=m;for(n&&(l.unshift(n),++i),s=l.length;0==l[--s];)l.pop();return t.d=l,t.e=i,u?D(t,d):t}function y(e,t,n){if(e!==~~e||e<t||e>n)throw Error(c+e)}function E(e){var t,n,r,i=e.length-1,a="",o=e[0];if(i>0){for(a+=o,t=1;t<i;t++)r=e[t]+"",(n=g-r.length)&&(a+=k(n)),a+=r;o=e[t],(n=g-(r=o+"").length)&&(a+=k(n))}else if(0===o)return"0";for(;o%10==0;)o/=10;return a+o}b.absoluteValue=b.abs=function(){var e=new this.constructor(this);return e.s&&(e.s=1),e},b.comparedTo=b.cmp=function(e){var t,n,r,i,a=this;if(e=new a.constructor(e),a.s!==e.s)return a.s||-e.s;if(a.e!==e.e)return a.e>e.e^a.s<0?1:-1;for(t=0,n=(r=a.d.length)<(i=e.d.length)?r:i;t<n;++t)if(a.d[t]!==e.d[t])return a.d[t]>e.d[t]^a.s<0?1:-1;return r===i?0:r>i^a.s<0?1:-1},b.decimalPlaces=b.dp=function(){var e=this,t=e.d.length-1,n=(t-e.e)*g;if(t=e.d[t])for(;t%10==0;t/=10)n--;return n<0?0:n},b.dividedBy=b.div=function(e){return x(this,new this.constructor(e))},b.dividedToIntegerBy=b.idiv=function(e){var t=this.constructor;return D(x(this,new t(e),0,1),t.precision)},b.equals=b.eq=function(e){return!this.cmp(e)},b.exponent=function(){return O(this)},b.greaterThan=b.gt=function(e){return this.cmp(e)>0},b.greaterThanOrEqualTo=b.gte=function(e){return this.cmp(e)>=0},b.isInteger=b.isint=function(){return this.e>this.d.length-2},b.isNegative=b.isneg=function(){return this.s<0},b.isPositive=b.ispos=function(){return this.s>0},b.isZero=function(){return 0===this.s},b.lessThan=b.lt=function(e){return this.cmp(e)<0},b.lessThanOrEqualTo=b.lte=function(e){return this.cmp(e)<1},b.logarithm=b.log=function(e){var t,n=this,r=n.constructor,i=r.precision,o=i+5;if(void 0===e)e=new r(10);else if((e=new r(e)).s<1||e.eq(a))throw Error(l+"NaN");if(n.s<1)throw Error(l+(n.s?"NaN":"-Infinity"));return n.eq(a)?new r(0):(u=!1,t=x(P(n,o),P(e,o),o),u=!0,D(t,i))},b.minus=b.sub=function(e){var t=this;return e=new t.constructor(e),t.s==e.s?C(t,e):w(t,(e.s=-e.s,e))},b.modulo=b.mod=function(e){var t,n=this,r=n.constructor,i=r.precision;if(!(e=new r(e)).s)throw Error(l+"NaN");return n.s?(u=!1,t=x(n,e,0,1).times(e),u=!0,n.minus(t)):D(new r(n),i)},b.naturalExponential=b.exp=function(){return S(this)},b.naturalLogarithm=b.ln=function(){return P(this)},b.negated=b.neg=function(){var e=new this.constructor(this);return e.s=-e.s||0,e},b.plus=b.add=function(e){var t=this;return e=new t.constructor(e),t.s==e.s?w(t,e):C(t,(e.s=-e.s,e))},b.precision=b.sd=function(e){var t,n,r,i=this;if(void 0!==e&&e!==!!e&&1!==e&&0!==e)throw Error(c+e);if(t=O(i)+1,n=(r=i.d.length-1)*g+1,r=i.d[r]){for(;r%10==0;r/=10)n--;for(r=i.d[0];r>=10;r/=10)n++}return e&&t>n?t:n},b.squareRoot=b.sqrt=function(){var e,t,n,r,i,a,o,s=this,c=s.constructor;if(s.s<1){if(!s.s)return new c(0);throw Error(l+"NaN")}for(e=O(s),u=!1,0==(i=Math.sqrt(+s))||i==1/0?(((t=E(s.d)).length+e)%2==0&&(t+="0"),i=Math.sqrt(t),e=d((e+1)/2)-(e<0||e%2),r=new c(t=i==1/0?"1e"+e:(t=i.toExponential()).slice(0,t.indexOf("e")+1)+e)):r=new c(i.toString()),i=o=(n=c.precision)+3;;)if(r=(a=r).plus(x(s,a,o+2)).times(.5),E(a.d).slice(0,o)===(t=E(r.d)).slice(0,o)){if(t=t.slice(o-3,o+1),i==o&&"4999"==t){if(D(a,n+1,0),a.times(a).eq(s)){r=a;break}}else if("9999"!=t)break;o+=4}return u=!0,D(r,n)},b.times=b.mul=function(e){var t,n,r,i,a,o,s,l,c,f=this,d=f.constructor,h=f.d,p=(e=new d(e)).d;if(!f.s||!e.s)return new d(0);for(e.s*=f.s,n=f.e+e.e,(l=h.length)<(c=p.length)&&(a=h,h=p,p=a,o=l,l=c,c=o),a=[],r=o=l+c;r--;)a.push(0);for(r=c;--r>=0;){for(t=0,i=l+r;i>r;)s=a[i]+p[r]*h[i-r-1]+t,a[i--]=s%m|0,t=s/m|0;a[i]=(a[i]+t)%m|0}for(;!a[--o];)a.pop();return t?++n:a.shift(),e.d=a,e.e=n,u?D(e,d.precision):e},b.toDecimalPlaces=b.todp=function(e,t){var n=this,r=n.constructor;return n=new r(n),void 0===e?n:(y(e,0,o),void 0===t?t=r.rounding:y(t,0,8),D(n,e+O(n)+1,t))},b.toExponential=function(e,t){var n,r=this,i=r.constructor;return void 0===e?n=I(r,!0):(y(e,0,o),void 0===t?t=i.rounding:y(t,0,8),n=I(r=D(new i(r),e+1,t),!0,e+1)),n},b.toFixed=function(e,t){var n,r,i=this,a=i.constructor;return void 0===e?I(i):(y(e,0,o),void 0===t?t=a.rounding:y(t,0,8),n=I((r=D(new a(i),e+O(i)+1,t)).abs(),!1,e+O(r)+1),i.isneg()&&!i.isZero()?"-"+n:n)},b.toInteger=b.toint=function(){var e=this,t=e.constructor;return D(new t(e),O(e)+1,t.rounding)},b.toNumber=function(){return+this},b.toPower=b.pow=function(e){var t,n,r,i,o,s,c=this,f=c.constructor,h=+(e=new f(e));if(!e.s)return new f(a);if(!(c=new f(c)).s){if(e.s<1)throw Error(l+"Infinity");return c}if(c.eq(a))return c;if(r=f.precision,e.eq(a))return D(c,r);if(s=(t=e.e)>=(n=e.d.length-1),o=c.s,s){if((n=h<0?-h:h)<=9007199254740991){for(i=new f(a),t=Math.ceil(r/g+4),u=!1;n%2&&A((i=i.times(c)).d,t),0!==(n=d(n/2));)A((c=c.times(c)).d,t);return u=!0,e.s<0?new f(a).div(i):D(i,r)}}else if(o<0)throw Error(l+"NaN");return o=o<0&&1&e.d[Math.max(t,n)]?-1:1,c.s=1,u=!1,i=e.times(P(c,r+12)),u=!0,(i=S(i)).s=o,i},b.toPrecision=function(e,t){var n,r,i=this,a=i.constructor;return void 0===e?r=I(i,(n=O(i))<=a.toExpNeg||n>=a.toExpPos):(y(e,1,o),void 0===t?t=a.rounding:y(t,0,8),r=I(i=D(new a(i),e,t),e<=(n=O(i))||n<=a.toExpNeg,e)),r},b.toSignificantDigits=b.tosd=function(e,t){var n=this.constructor;return void 0===e?(e=n.precision,t=n.rounding):(y(e,1,o),void 0===t?t=n.rounding:y(t,0,8)),D(new n(this),e,t)},b.toString=b.valueOf=b.val=b.toJSON=function(){var e=this,t=O(e),n=e.constructor;return I(e,t<=n.toExpNeg||t>=n.toExpPos)};var x=function(){function e(e,t){var n,r=0,i=e.length;for(e=e.slice();i--;)n=e[i]*t+r,e[i]=n%m|0,r=n/m|0;return r&&e.unshift(r),e}function t(e,t,n,r){var i,a;if(n!=r)a=n>r?1:-1;else for(i=a=0;i<n;i++)if(e[i]!=t[i]){a=e[i]>t[i]?1:-1;break}return a}function n(e,t,n){for(var r=0;n--;)e[n]-=r,r=e[n]<t[n]?1:0,e[n]=r*m+e[n]-t[n];for(;!e[0]&&e.length>1;)e.shift()}return function(r,i,a,o){var s,u,c,f,d,h,p,v,b,w,y,E,x,S,N,k,P,j,C=r.constructor,I=r.s==i.s?1:-1,A=r.d,T=i.d;if(!r.s)return new C(r);if(!i.s)throw Error(l+"Division by zero");for(u=r.e-i.e,P=T.length,N=A.length,v=(p=new C(I)).d=[],c=0;T[c]==(A[c]||0);)++c;if(T[c]>(A[c]||0)&&--u,(E=null==a?a=C.precision:o?a+(O(r)-O(i))+1:a)<0)return new C(0);if(E=E/g+2|0,c=0,1==P)for(f=0,T=T[0],E++;(c<N||f)&&E--;c++)x=f*m+(A[c]||0),v[c]=x/T|0,f=x%T|0;else{for((f=m/(T[0]+1)|0)>1&&(T=e(T,f),A=e(A,f),P=T.length,N=A.length),S=P,w=(b=A.slice(0,P)).length;w<P;)b[w++]=0;(j=T.slice()).unshift(0),k=T[0],T[1]>=m/2&&++k;do{f=0,(s=t(T,b,P,w))<0?(y=b[0],P!=w&&(y=y*m+(b[1]||0)),(f=y/k|0)>1?(f>=m&&(f=m-1),1==(s=t(d=e(T,f),b,h=d.length,w=b.length))&&(f--,n(d,P<h?j:T,h))):(0==f&&(s=f=1),d=T.slice()),(h=d.length)<w&&d.unshift(0),n(b,d,w),-1==s&&(s=t(T,b,P,w=b.length))<1&&(f++,n(b,P<w?j:T,w)),w=b.length):0===s&&(f++,b=[0]),v[c++]=f,s&&b[0]?b[w++]=A[S]||0:(b=[A[S]],w=1)}while((S++<N||void 0!==b[0])&&E--)}return v[0]||v.shift(),p.e=u,D(p,o?a+O(p)+1:a)}}();function S(e,t){var n,r,i,o,s,l=0,c=0,d=e.constructor,p=d.precision;if(O(e)>16)throw Error(f+O(e));if(!e.s)return new d(a);for(null==t?(u=!1,s=p):s=t,o=new d(.03125);e.abs().gte(.1);)e=e.times(o),c+=5;for(s+=Math.log(h(2,c))/Math.LN10*2+5|0,n=r=i=new d(a),d.precision=s;;){if(r=D(r.times(e),s),n=n.times(++l),E((o=i.plus(x(r,n,s))).d).slice(0,s)===E(i.d).slice(0,s)){for(;c--;)i=D(i.times(i),s);return d.precision=p,null==t?(u=!0,D(i,p)):i}i=o}}function O(e){for(var t=e.e*g,n=e.d[0];n>=10;n/=10)t++;return t}function N(e,t,n){if(t>e.LN10.sd())throw u=!0,n&&(e.precision=n),Error(l+"LN10 precision limit exceeded");return D(new e(e.LN10),t)}function k(e){for(var t="";e--;)t+="0";return t}function P(e,t){var n,r,i,o,s,c,f,d,h,p=1,m=e,g=m.d,v=m.constructor,b=v.precision;if(m.s<1)throw Error(l+(m.s?"NaN":"-Infinity"));if(m.eq(a))return new v(0);if(null==t?(u=!1,d=b):d=t,m.eq(10))return null==t&&(u=!0),N(v,d);if(d+=10,v.precision=d,r=(n=E(g)).charAt(0),o=O(m),!(Math.abs(o)<15e14))return f=N(v,d+2,b).times(o+""),m=P(new v(r+"."+n.slice(1)),d-10).plus(f),v.precision=b,null==t?(u=!0,D(m,b)):m;for(;r<7&&1!=r||1==r&&n.charAt(1)>3;)r=(n=E((m=m.times(e)).d)).charAt(0),p++;for(o=O(m),r>1?(m=new v("0."+n),o++):m=new v(r+"."+n.slice(1)),c=s=m=x(m.minus(a),m.plus(a),d),h=D(m.times(m),d),i=3;;){if(s=D(s.times(h),d),E((f=c.plus(x(s,new v(i),d))).d).slice(0,d)===E(c.d).slice(0,d))return c=c.times(2),0!==o&&(c=c.plus(N(v,d+2,b).times(o+""))),c=x(c,new v(p),d),v.precision=b,null==t?(u=!0,D(c,b)):c;c=f,i+=2}}function j(e,t){var n,r,i;for((n=t.indexOf("."))>-1&&(t=t.replace(".","")),(r=t.search(/e/i))>0?(n<0&&(n=r),n+=+t.slice(r+1),t=t.substring(0,r)):n<0&&(n=t.length),r=0;48===t.charCodeAt(r);)++r;for(i=t.length;48===t.charCodeAt(i-1);)--i;if(t=t.slice(r,i)){if(i-=r,n=n-r-1,e.e=d(n/g),e.d=[],r=(n+1)%g,n<0&&(r+=g),r<i){for(r&&e.d.push(+t.slice(0,r)),i-=g;r<i;)e.d.push(+t.slice(r,r+=g));t=t.slice(r),r=g-t.length}else r-=i;for(;r--;)t+="0";if(e.d.push(+t),u&&(e.e>v||e.e<-v))throw Error(f+n)}else e.s=0,e.e=0,e.d=[0];return e}function D(e,t,n){var r,i,a,o,s,l,c,p,b=e.d;for(o=1,a=b[0];a>=10;a/=10)o++;if((r=t-o)<0)r+=g,i=t,c=b[p=0];else{if((p=Math.ceil((r+1)/g))>=(a=b.length))return e;for(c=a=b[p],o=1;a>=10;a/=10)o++;i=(r%=g)-g+o}if(void 0!==n&&(s=c/(a=h(10,o-i-1))%10|0,l=t<0||void 0!==b[p+1]||c%a,l=n<4?(s||l)&&(0==n||n==(e.s<0?3:2)):s>5||5==s&&(4==n||l||6==n&&(r>0?i>0?c/h(10,o-i):0:b[p-1])%10&1||n==(e.s<0?8:7))),t<1||!b[0])return l?(a=O(e),b.length=1,t=t-a-1,b[0]=h(10,(g-t%g)%g),e.e=d(-t/g)||0):(b.length=1,b[0]=e.e=e.s=0),e;if(0==r?(b.length=p,a=1,p--):(b.length=p+1,a=h(10,g-r),b[p]=i>0?(c/h(10,o-i)%h(10,i)|0)*a:0),l)for(;;){if(0==p){(b[0]+=a)==m&&(b[0]=1,++e.e);break}if(b[p]+=a,b[p]!=m)break;b[p--]=0,a=1}for(r=b.length;0===b[--r];)b.pop();if(u&&(e.e>v||e.e<-v))throw Error(f+O(e));return e}function C(e,t){var n,r,i,a,o,s,l,c,f,d,h=e.constructor,p=h.precision;if(!e.s||!t.s)return t.s?t.s=-t.s:t=new h(e),u?D(t,p):t;if(l=e.d,d=t.d,r=t.e,c=e.e,l=l.slice(),o=c-r){for((f=o<0)?(n=l,o=-o,s=d.length):(n=d,r=c,s=l.length),o>(i=Math.max(Math.ceil(p/g),s)+2)&&(o=i,n.length=1),n.reverse(),i=o;i--;)n.push(0);n.reverse()}else{for((f=(i=l.length)<(s=d.length))&&(s=i),i=0;i<s;i++)if(l[i]!=d[i]){f=l[i]<d[i];break}o=0}for(f&&(n=l,l=d,d=n,t.s=-t.s),s=l.length,i=d.length-s;i>0;--i)l[s++]=0;for(i=d.length;i>o;){if(l[--i]<d[i]){for(a=i;a&&0===l[--a];)l[a]=m-1;--l[a],l[i]+=m}l[i]-=d[i]}for(;0===l[--s];)l.pop();for(;0===l[0];l.shift())--r;return l[0]?(t.d=l,t.e=r,u?D(t,p):t):new h(0)}function I(e,t,n){var r,i=O(e),a=E(e.d),o=a.length;return t?(n&&(r=n-o)>0?a=a.charAt(0)+"."+a.slice(1)+k(r):o>1&&(a=a.charAt(0)+"."+a.slice(1)),a=a+(i<0?"e":"e+")+i):i<0?(a="0."+k(-i-1)+a,n&&(r=n-o)>0&&(a+=k(r))):i>=o?(a+=k(i+1-o),n&&(r=n-i-1)>0&&(a=a+"."+k(r))):((r=i+1)<o&&(a=a.slice(0,r)+"."+a.slice(r)),n&&(r=n-o)>0&&(i+1===o&&(a+="."),a+=k(r))),e.s<0?"-"+a:a}function A(e,t){if(e.length>t)return e.length=t,!0}function T(e){if(!e||"object"!=typeof e)throw Error(l+"Object expected");var t,n,r,i=["precision",1,o,"rounding",0,8,"toExpNeg",-1/0,0,"toExpPos",0,1/0];for(t=0;t<i.length;t+=3)if(void 0!==(r=e[n=i[t]])){if(!(d(r)===r&&r>=i[t+1]&&r<=i[t+2]))throw Error(c+n+": "+r);this[n]=r}if(void 0!==(r=e[n="LN10"])){if(r!=Math.LN10)throw Error(c+n+": "+r);this[n]=new this(r)}return this}(s=function e(t){var n,r,i;function a(e){var t=this;if(!(t instanceof a))return new a(e);if(t.constructor=a,e instanceof a)return t.s=e.s,t.e=e.e,void(t.d=(e=e.d)?e.slice():e);if("number"==typeof e){if(0*e!=0)throw Error(c+e);if(e>0)t.s=1;else{if(!(e<0))return t.s=0,t.e=0,void(t.d=[0]);e=-e,t.s=-1}return e===~~e&&e<1e7?(t.e=0,void(t.d=[e])):j(t,e.toString())}if("string"!=typeof e)throw Error(c+e);if(45===e.charCodeAt(0)?(e=e.slice(1),t.s=-1):t.s=1,!p.test(e))throw Error(c+e);j(t,e)}if(a.prototype=b,a.ROUND_UP=0,a.ROUND_DOWN=1,a.ROUND_CEIL=2,a.ROUND_FLOOR=3,a.ROUND_HALF_UP=4,a.ROUND_HALF_DOWN=5,a.ROUND_HALF_EVEN=6,a.ROUND_HALF_CEIL=7,a.ROUND_HALF_FLOOR=8,a.clone=e,a.config=a.set=T,void 0===t&&(t={}),t)for(i=["precision","rounding","toExpNeg","toExpPos","LN10"],n=0;n<i.length;)t.hasOwnProperty(r=i[n++])||(t[r]=this[r]);return a.config(t),a}(s)).default=s.Decimal=s,a=new s(1),void 0===(r=function(){return s}.call(t,n,t,e))||(e.exports=r)}()},mDiV:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n("17x9")),i=o(n("q1tI")),a=n("5Ptj");function o(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var h={thousandSeparator:r.default.oneOfType([r.default.string,r.default.oneOf([!0])]),decimalSeparator:r.default.string,thousandsGroupStyle:r.default.oneOf(["thousand","lakh","wan"]),decimalScale:r.default.number,fixedDecimalScale:r.default.bool,displayType:r.default.oneOf(["input","text"]),prefix:r.default.string,suffix:r.default.string,format:r.default.oneOfType([r.default.string,r.default.func]),removeFormatting:r.default.func,mask:r.default.oneOfType([r.default.string,r.default.arrayOf(r.default.string)]),value:r.default.oneOfType([r.default.number,r.default.string]),defaultValue:r.default.oneOfType([r.default.number,r.default.string]),isNumericString:r.default.bool,customInput:r.default.elementType,allowNegative:r.default.bool,allowEmptyFormatting:r.default.bool,onValueChange:r.default.func,onKeyDown:r.default.func,onMouseUp:r.default.func,onChange:r.default.func,onFocus:r.default.func,onBlur:r.default.func,type:r.default.oneOf(["text","tel","password"]),isAllowed:r.default.func,renderText:r.default.func,getInputRef:r.default.func},p={displayType:"input",decimalSeparator:".",thousandsGroupStyle:"thousand",fixedDecimalScale:!1,prefix:"",suffix:"",allowNegative:!0,allowEmptyFormatting:!1,isNumericString:!1,type:"text",onValueChange:a.noop,onChange:a.noop,onKeyDown:a.noop,onMouseUp:a.noop,onFocus:a.noop,onBlur:a.noop,isAllowed:a.returnTrue,getInputRef:a.noop},m=function(e){function t(e){var n,r,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,n=!(i=c(t).call(this,e))||"object"!==s(i)&&"function"!=typeof i?d(r):i;var a=e.defaultValue;n.validateProps();var o=n.formatValueProp(a);return n.state={value:o,numAsString:n.removeFormatting(o)},n.selectionBeforeInput={selectionStart:0,selectionEnd:0},n.onChange=n.onChange.bind(d(d(n))),n.onKeyDown=n.onKeyDown.bind(d(d(n))),n.onMouseUp=n.onMouseUp.bind(d(d(n))),n.onFocus=n.onFocus.bind(d(d(n))),n.onBlur=n.onBlur.bind(d(d(n))),n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,i.default.Component),n=t,(r=[{key:"componentDidUpdate",value:function(e){this.updateValueIfRequired(e)}},{key:"updateValueIfRequired",value:function(e){var t=this.props,n=this.state,r=this.focusedElm,i=n.value,a=n.numAsString,o=void 0===a?"":a;if(e!==t){this.validateProps();var s=this.formatNumString(o),u=void 0===t.value?s:this.formatValueProp(),l=this.removeFormatting(u),c=parseFloat(l),f=parseFloat(o);(isNaN(c)&&isNaN(f)||c===f)&&s===i&&(null!==r||u===i)||this.updateValue({formattedValue:u,numAsString:l,input:r})}}},{key:"getFloatString",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=this.props.decimalScale,n=this.getSeparators().decimalSeparator,r=this.getNumberRegex(!0),i="-"===e[0];i&&(e=e.replace("-","")),n&&0===t&&(e=e.split(n)[0]);var o=(e=(e.match(r)||[]).join("").replace(n,".")).indexOf(".");return-1!==o&&(e="".concat(e.substring(0,o),".").concat(e.substring(o+1,e.length).replace(new RegExp((0,a.escapeRegExp)(n),"g"),""))),i&&(e="-"+e),e}},{key:"getNumberRegex",value:function(e,t){var n=this.props,r=n.format,i=n.decimalScale,o=this.getSeparators().decimalSeparator;return new RegExp("\\d"+(!o||0===i||t||r?"":"|"+(0,a.escapeRegExp)(o)),e?"g":void 0)}},{key:"getSeparators",value:function(){var e=this.props.decimalSeparator,t=this.props.thousandSeparator;return!0===t&&(t=","),{decimalSeparator:e,thousandSeparator:t}}},{key:"getMaskAtIndex",value:function(e){var t=this.props.mask,n=void 0===t?" ":t;return"string"==typeof n?n:n[e]||" "}},{key:"getValueObject",value:function(e,t){var n=parseFloat(t);return{formattedValue:e,value:t,floatValue:isNaN(n)?void 0:n}}},{key:"validateProps",value:function(){var e=this.props.mask,t=this.getSeparators(),n=t.decimalSeparator,r=t.thousandSeparator;if(n===r)throw new Error("\n          Decimal separator can't be same as thousand separator.\n          thousandSeparator: ".concat(r,' (thousandSeparator = {true} is same as thousandSeparator = ",")\n          decimalSeparator: ').concat(n," (default value for decimalSeparator is .)\n       "));if(e&&("string"===e?e:e.toString()).match(/\d/g))throw new Error("\n          Mask ".concat(e," should not contain numeric character;\n        "))}},{key:"setPatchedCaretPosition",value:function(e,t,n){(0,a.setCaretPosition)(e,t),setTimeout(function(){e.value===n&&(0,a.setCaretPosition)(e,t)},0)}},{key:"correctCaretPosition",value:function(e,t,n){var r=this.props,i=r.prefix,o=r.suffix,s=r.format;if(""===e)return 0;if(t=(0,a.clamp)(t,0,e.length),!s){var u="-"===e[0];return(0,a.clamp)(t,i.length+(u?1:0),e.length-o.length)}if("function"==typeof s)return t;if("#"===s[t]&&(0,a.charIsNumber)(e[t]))return t;if("#"===s[t-1]&&(0,a.charIsNumber)(e[t-1]))return t;var l=s.indexOf("#"),c=s.lastIndexOf("#");t=(0,a.clamp)(t,l,c+1);for(var f=s.substring(t,s.length).indexOf("#"),d=t,h=t+(-1===f?0:f);d>l&&("#"!==s[d]||!(0,a.charIsNumber)(e[d]));)d-=1;return!(0,a.charIsNumber)(e[h])||"left"===n&&t!==l||t-d<h-t?(0,a.charIsNumber)(e[d])?d+1:d:h}},{key:"getCaretPosition",value:function(e,t,n){var r,i,a=this.props.format,o=this.state.value,s=this.getNumberRegex(!0),u=(e.match(s)||[]).join(""),l=(t.match(s)||[]).join("");for(r=0,i=0;i<n;i++){var c=e[i]||"",f=t[r]||"";if((c.match(s)||c===f)&&("0"!==c||!f.match(s)||"0"===f||u.length===l.length)){for(;c!==t[r]&&r<t.length;)r++;r++}}return"string"!=typeof a||o||(r=t.length),r=this.correctCaretPosition(t,r)}},{key:"removePrefixAndSuffix",value:function(e){var t=this.props,n=t.format,r=t.prefix,i=t.suffix;if(!n&&e){var a="-"===e[0];a&&(e=e.substring(1,e.length));var o=(e=r&&0===e.indexOf(r)?e.substring(r.length,e.length):e).lastIndexOf(i);e=i&&-1!==o&&o===e.length-i.length?e.substring(0,o):e,a&&(e="-"+e)}return e}},{key:"removePatternFormatting",value:function(e){for(var t=this.props.format.split("#").filter(function(e){return""!==e}),n=0,r="",i=0,a=t.length;i<=a;i++){var o=t[i]||"",s=i===a?e.length:e.indexOf(o,n);if(-1===s){r=e;break}r+=e.substring(n,s),n=s+o.length}return(r.match(/\d/g)||[]).join("")}},{key:"removeFormatting",value:function(e){var t=this.props,n=t.format,r=t.removeFormatting;return e?(n?e="string"==typeof n?this.removePatternFormatting(e):"function"==typeof r?r(e):(e.match(/\d/g)||[]).join(""):(e=this.removePrefixAndSuffix(e),e=this.getFloatString(e)),e):e}},{key:"formatWithPattern",value:function(e){for(var t=this.props.format,n=0,r=t.split(""),i=0,a=t.length;i<a;i++)"#"===t[i]&&(r[i]=e[n]||this.getMaskAtIndex(n),n+=1);return r.join("")}},{key:"formatAsNumber",value:function(e){var t=this.props,n=t.decimalScale,r=t.fixedDecimalScale,i=t.prefix,o=t.suffix,s=t.allowNegative,u=t.thousandsGroupStyle,l=this.getSeparators(),c=l.thousandSeparator,f=l.decimalSeparator,d=-1!==e.indexOf(".")||n&&r,h=(0,a.splitDecimal)(e,s),p=h.beforeDecimal,m=h.afterDecimal,g=h.addNegation;return void 0!==n&&(m=(0,a.limitToScale)(m,n,r)),c&&(p=(0,a.applyThousandSeparator)(p,c,u)),i&&(p=i+p),o&&(m+=o),g&&(p="-"+p),e=p+(d&&f||"")+m}},{key:"formatNumString",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=this.props,n=t.format,r=t.allowEmptyFormatting,i=e;return i=""!==e||r?"-"!==e||n?"string"==typeof n?this.formatWithPattern(i):"function"==typeof n?n(i):this.formatAsNumber(i):"-":""}},{key:"formatValueProp",value:function(e){var t=this.props,n=t.format,r=t.decimalScale,i=t.fixedDecimalScale,o=t.allowEmptyFormatting,s=this.props,u=s.value,l=void 0===u?e:u,c=s.isNumericString,f=!l&&0!==l;return f&&o&&(l=""),f&&!o?"":("number"==typeof l&&(l=l.toString(),c=!0),"Infinity"===l&&c&&(l=""),c&&!n&&"number"==typeof r&&(l=(0,a.roundToPrecision)(l,r,i)),c?this.formatNumString(l):this.formatInput(l))}},{key:"formatNegation",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=this.props.allowNegative,n=new RegExp("(-)"),r=new RegExp("(-)(.)*(-)"),i=n.test(e),a=r.test(e);return e=e.replace(/-/g,""),i&&!a&&t&&(e="-"+e),e}},{key:"formatInput",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return this.props.format||(e=this.removePrefixAndSuffix(e),e=this.formatNegation(e)),e=this.removeFormatting(e),this.formatNumString(e)}},{key:"isCharacterAFormat",value:function(e,t){var n=this.props,r=n.format,i=n.prefix,a=n.suffix,o=n.decimalScale,s=n.fixedDecimalScale,u=this.getSeparators().decimalSeparator;return"string"==typeof r&&"#"!==r[e]||!(r||!(e<i.length||e>=t.length-a.length||o&&s&&t[e]===u))}},{key:"checkIfFormatGotDeleted",value:function(e,t,n){for(var r=e;r<t;r++)if(this.isCharacterAFormat(r,n))return!0;return!1}},{key:"correctInputValue",value:function(e,t,n){var r=this.props,i=r.format,o=r.allowNegative,s=r.prefix,u=r.suffix,l=this.getSeparators().decimalSeparator,c=this.state.numAsString||"",f=this.selectionBeforeInput,d=f.selectionStart,h=f.selectionEnd,p=(0,a.findChangedIndex)(t,n),m=p.start,g=p.end;if(!i&&"."!==l&&m===g&&"."===n[d])return n.substr(0,d)+l+n.substr(d+1,n.length);var v=i?0:s.length,b=t.length-(i?0:u.length);if(n.length>t.length||!n.length||m===g||0===d&&h===t.length||d===v&&h===b)return n;if(this.checkIfFormatGotDeleted(m,g,t)&&(n=t),!i){var w=this.removeFormatting(n),y=(0,a.splitDecimal)(w,o),E=y.beforeDecimal,x=y.afterDecimal,S=y.addNegation,O=e<n.indexOf(l)+1;if(w.length<c.length&&O&&""===E&&!parseFloat(x))return S?"-":""}return n}},{key:"updateValue",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.noop,r=e.formattedValue,i=e.input,o=e.numAsString,s=e.caretPos,u=this.props.onValueChange,l=this.state.value;if(i){if(!s){var c=e.inputValue||i.value,f=(0,a.getCurrentCaretPosition)(i);s=this.getCaretPosition(c,r,f)}i.value=r,this.setPatchedCaretPosition(i,s,r)}void 0===o&&(o=this.removeFormatting(r)),r!==l?this.setState({value:r,numAsString:o},function(){u(t.getValueObject(r,o)),n()}):n()}},{key:"onChange",value:function(e){e.persist();var t=e.target,n=t.value,r=this.state,i=this.props,o=i.isAllowed,s=r.value||"",u=(0,a.getCurrentCaretPosition)(t);n=this.correctInputValue(u,s,n);var l=this.formatInput(n)||"",c=this.removeFormatting(l);o(this.getValueObject(l,c))||(l=s),this.updateValue({formattedValue:l,numAsString:c,inputValue:n,input:t},function(){i.onChange(e)})}},{key:"onBlur",value:function(e){var t=this.props,n=this.state,r=t.format,i=t.onBlur,o=n.numAsString,s=n.value;if(this.focusedElm=null,!r){o=(0,a.fixLeadingZero)(o);var u=this.formatNumString(o);if(u!==s)return e.persist(),void this.updateValue({formattedValue:u,numAsString:o},function(){i(e)})}i(e)}},{key:"onKeyDown",value:function(e){var t,n=e.target,r=e.key,i=n.selectionStart,a=n.selectionEnd,o=n.value,s=void 0===o?"":o,u=this.props,l=u.decimalScale,c=u.fixedDecimalScale,f=u.prefix,d=u.suffix,h=u.format,p=u.onKeyDown,m=(u.onValueChange,void 0!==l&&c),g=this.getNumberRegex(!1,m),v=new RegExp("-"),b="string"==typeof h;if(this.selectionBeforeInput={selectionStart:i,selectionEnd:a},"ArrowLeft"===r||"Backspace"===r?t=i-1:"ArrowRight"===r?t=i+1:"Delete"===r&&(t=i),void 0!==t&&i===a){var w=t,y=b?h.indexOf("#"):f.length,E=b?h.lastIndexOf("#")+1:s.length-d.length;if("ArrowLeft"===r||"ArrowRight"===r){var x="ArrowLeft"===r?"left":"right";w=this.correctCaretPosition(s,t,x)}else if("Delete"!==r||g.test(s[t])||v.test(s[t])){if("Backspace"===r&&!g.test(s[t]))if(i<=y+1&&"-"===s[0]&&void 0===h){var S=s.substring(1);e.persist(),this.updateValue({formattedValue:S,caretPos:w,input:n})}else if(!v.test(s[t])){for(;!g.test(s[w-1])&&w>y;)w--;w=this.correctCaretPosition(s,w,"left")}}else for(;!g.test(s[w])&&w<E;)w++;(w!==t||t<y||t>E)&&(e.preventDefault(),this.setPatchedCaretPosition(n,w,s)),e.isUnitTestRun&&this.setPatchedCaretPosition(n,w,s),this.props.onKeyDown(e)}else p(e)}},{key:"onMouseUp",value:function(e){var t=e.target,n=t.selectionStart,r=t.selectionEnd,i=t.value,a=void 0===i?"":i;if(n===r){var o=this.correctCaretPosition(a,n);o!==n&&this.setPatchedCaretPosition(t,o,a)}this.props.onMouseUp(e)}},{key:"onFocus",value:function(e){var t=this;e.persist(),this.focusedElm=e.target,setTimeout(function(){var n=e.target,r=n.selectionStart,i=n.selectionEnd,a=n.value,o=void 0===a?"":a,s=t.correctCaretPosition(o,r);s===r||0===r&&i===o.length||t.setPatchedCaretPosition(n,s,o),t.props.onFocus(e)},0)}},{key:"render",value:function(){var e=this.props,t=e.type,n=e.displayType,r=e.customInput,o=e.renderText,s=e.getInputRef,l=this.state.value,c=(0,a.omit)(this.props,h),f=u({},c,{type:t,value:l,onChange:this.onChange,onKeyDown:this.onKeyDown,onMouseUp:this.onMouseUp,onFocus:this.onFocus,onBlur:this.onBlur});if("text"===n)return o?o(l)||null:i.default.createElement("span",u({},c,{ref:s}),l);if(r){var d=r;return i.default.createElement(d,f)}return i.default.createElement("input",u({},f,{ref:s}))}}])&&l(n.prototype,r),o&&l(n,o),t}();m.propTypes=h,m.defaultProps=p;var g=m;t.default=g,e.exports=t.default}},[["aVHG","5d41","9da1"]]]);