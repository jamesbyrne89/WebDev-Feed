(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{110:function(t,e,n){"use strict";(function(e){var r=n(12),o=n(283),i={"Content-Type":"application/x-www-form-urlencoded"};function a(t,e){!r.isUndefined(t)&&r.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var s,u={adapter:("undefined"!=typeof XMLHttpRequest?s=n(162):void 0!==e&&(s=n(162)),s),transformRequest:[function(t,e){return o(e,"Content-Type"),r.isFormData(t)||r.isArrayBuffer(t)||r.isBuffer(t)||r.isStream(t)||r.isFile(t)||r.isBlob(t)?t:r.isArrayBufferView(t)?t.buffer:r.isURLSearchParams(t)?(a(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):r.isObject(t)?(a(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}};u.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],function(t){u.headers[t]={}}),r.forEach(["post","put","patch"],function(t){u.headers[t]=r.merge(i)}),t.exports=u}).call(this,n(72))},12:function(t,e,n){"use strict";var r=n(161),o=n(281),i=Object.prototype.toString;function a(t){return"[object Array]"===i.call(t)}function s(t){return null!==t&&"object"==typeof t}function u(t){return"[object Function]"===i.call(t)}function c(t,e){if(null!=t)if("object"!=typeof t&&(t=[t]),a(t))for(var n=0,r=t.length;n<r;n++)e.call(null,t[n],n,t);else for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.call(null,t[o],o,t)}t.exports={isArray:a,isArrayBuffer:function(t){return"[object ArrayBuffer]"===i.call(t)},isBuffer:o,isFormData:function(t){return"undefined"!=typeof FormData&&t instanceof FormData},isArrayBufferView:function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer},isString:function(t){return"string"==typeof t},isNumber:function(t){return"number"==typeof t},isObject:s,isUndefined:function(t){return void 0===t},isDate:function(t){return"[object Date]"===i.call(t)},isFile:function(t){return"[object File]"===i.call(t)},isBlob:function(t){return"[object Blob]"===i.call(t)},isFunction:u,isStream:function(t){return s(t)&&u(t.pipe)},isURLSearchParams:function(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:c,merge:function t(){var e={};function n(n,r){"object"==typeof e[r]&&"object"==typeof n?e[r]=t(e[r],n):e[r]=n}for(var r=0,o=arguments.length;r<o;r++)c(arguments[r],n);return e},extend:function(t,e,n){return c(e,function(e,o){t[o]=n&&"function"==typeof e?r(e,n):e}),t},trim:function(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}}},124:function(t,e,n){t.exports=n(278)},125:function(t,e,n){t.exports=n(280)},161:function(t,e,n){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},162:function(t,e,n){"use strict";var r=n(12),o=n(284),i=n(286),a=n(287),s=n(288),u=n(163),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(289);t.exports=function(t){return new Promise(function(e,f){var p=t.data,l=t.headers;r.isFormData(p)&&delete l["Content-Type"];var d=new XMLHttpRequest,h="onreadystatechange",m=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in d||s(t.url)||(d=new window.XDomainRequest,h="onload",m=!0,d.onprogress=function(){},d.ontimeout=function(){}),t.auth){var v=t.auth.username||"",y=t.auth.password||"";l.Authorization="Basic "+c(v+":"+y)}if(d.open(t.method.toUpperCase(),i(t.url,t.params,t.paramsSerializer),!0),d.timeout=t.timeout,d[h]=function(){if(d&&(4===d.readyState||m)&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?a(d.getAllResponseHeaders()):null,r={data:t.responseType&&"text"!==t.responseType?d.response:d.responseText,status:1223===d.status?204:d.status,statusText:1223===d.status?"No Content":d.statusText,headers:n,config:t,request:d};o(e,f,r),d=null}},d.onerror=function(){f(u("Network Error",t,null,d)),d=null},d.ontimeout=function(){f(u("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var w=n(290),g=(t.withCredentials||s(t.url))&&t.xsrfCookieName?w.read(t.xsrfCookieName):void 0;g&&(l[t.xsrfHeaderName]=g)}if("setRequestHeader"in d&&r.forEach(l,function(t,e){void 0===p&&"content-type"===e.toLowerCase()?delete l[e]:d.setRequestHeader(e,t)}),t.withCredentials&&(d.withCredentials=!0),t.responseType)try{d.responseType=t.responseType}catch(e){if("json"!==t.responseType)throw e}"function"==typeof t.onDownloadProgress&&d.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){d&&(d.abort(),f(t),d=null)}),void 0===p&&(p=null),d.send(p)})}},163:function(t,e,n){"use strict";var r=n(285);t.exports=function(t,e,n,o,i){var a=new Error(t);return r(a,e,n,o,i)}},164:function(t,e,n){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},165:function(t,e,n){"use strict";function r(t){this.message=t}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,t.exports=r},277:function(t,e,n){__NEXT_REGISTER_PAGE("/_app",function(){return t.exports=n(373),{page:t.exports.default}})},278:function(t,e,n){"use strict";var r=n(27),o=n(6);Object.defineProperty(e,"__esModule",{value:!0}),e.createUrl=x,e.Container=e.default=void 0;var i=o(n(65)),a=o(n(66)),s=o(n(279)),u=o(n(9)),c=o(n(10)),f=o(n(24)),p=o(n(25)),l=o(n(26)),d=o(n(20)),h=r(n(0)),m=o(n(34)),v=n(33),y=n(54),w=function(t){function e(){return(0,u.default)(this,e),(0,f.default)(this,(0,p.default)(e).apply(this,arguments))}return(0,l.default)(e,t),(0,c.default)(e,[{key:"getChildContext",value:function(){return{headManager:this.props.headManager,router:(0,y.makePublicRouterInstance)(this.props.router)}}},{key:"componentDidCatch",value:function(t){throw t}},{key:"render",value:function(){var t=this.props,e=t.router,n=t.Component,r=t.pageProps,o=x(e);return h.default.createElement(g,null,h.default.createElement(n,(0,s.default)({},r,{url:o})))}}],[{key:"getInitialProps",value:function(){var t=(0,a.default)(i.default.mark(function t(e){var n,r,o;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.Component,e.router,r=e.ctx,t.next=3,(0,v.loadGetInitialProps)(n,r);case 3:return o=t.sent,t.abrupt("return",{pageProps:o});case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}]),e}(h.Component);e.default=w,(0,d.default)(w,"childContextTypes",{headManager:m.default.object,router:m.default.object});var g=function(t){function e(){return(0,u.default)(this,e),(0,f.default)(this,(0,p.default)(e).apply(this,arguments))}return(0,l.default)(e,t),(0,c.default)(e,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var t=window.location.hash;if(t=!!t&&t.substring(1)){var e=document.getElementById(t);e&&setTimeout(function(){return e.scrollIntoView()},0)}}},{key:"render",value:function(){return this.props.children}}]),e}(h.Component);e.Container=g;var b=(0,v.execOnce)(function(){0});function x(t){var e=t.pathname,n=t.asPath,r=t.query;return{get query(){return b(),r},get pathname(){return b(),e},get asPath(){return b(),n},back:function(){b(),t.back()},push:function(e,n){return b(),t.push(e,n)},pushTo:function(e,n){b();var r=n?e:null,o=n||e;return t.push(r,o)},replace:function(e,n){return b(),t.replace(e,n)},replaceTo:function(e,n){b();var r=n?e:null,o=n||e;return t.replace(r,o)}}}},279:function(t,e,n){var r=n(109);function o(){return t.exports=o=r||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o.apply(this,arguments)}t.exports=o},280:function(t,e,n){"use strict";var r=n(12),o=n(161),i=n(282),a=n(110);function s(t){var e=new i(t),n=o(i.prototype.request,e);return r.extend(n,i.prototype,e),r.extend(n,e),n}var u=s(a);u.Axios=i,u.create=function(t){return s(r.merge(a,t))},u.Cancel=n(165),u.CancelToken=n(296),u.isCancel=n(164),u.all=function(t){return Promise.all(t)},u.spread=n(297),t.exports=u,t.exports.default=u},281:function(t,e){function n(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(n(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&n(t.slice(0,0))}(t)||!!t._isBuffer)}},282:function(t,e,n){"use strict";var r=n(110),o=n(12),i=n(291),a=n(292);function s(t){this.defaults=t,this.interceptors={request:new i,response:new i}}s.prototype.request=function(t){"string"==typeof t&&(t=o.merge({url:arguments[0]},arguments[1])),(t=o.merge(r,this.defaults,{method:"get"},t)).method=t.method.toLowerCase();var e=[a,void 0],n=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)n=n.then(e.shift(),e.shift());return n},o.forEach(["delete","get","head","options"],function(t){s.prototype[t]=function(e,n){return this.request(o.merge(n||{},{method:t,url:e}))}}),o.forEach(["post","put","patch"],function(t){s.prototype[t]=function(e,n,r){return this.request(o.merge(r||{},{method:t,url:e,data:n}))}}),t.exports=s},283:function(t,e,n){"use strict";var r=n(12);t.exports=function(t,e){r.forEach(t,function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])})}},284:function(t,e,n){"use strict";var r=n(163);t.exports=function(t,e,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?e(r("Request failed with status code "+n.status,n.config,null,n.request,n)):t(n)}},285:function(t,e,n){"use strict";t.exports=function(t,e,n,r,o){return t.config=e,n&&(t.code=n),t.request=r,t.response=o,t}},286:function(t,e,n){"use strict";var r=n(12);function o(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,n){if(!e)return t;var i;if(n)i=n(e);else if(r.isURLSearchParams(e))i=e.toString();else{var a=[];r.forEach(e,function(t,e){null!=t&&(r.isArray(t)&&(e+="[]"),r.isArray(t)||(t=[t]),r.forEach(t,function(t){r.isDate(t)?t=t.toISOString():r.isObject(t)&&(t=JSON.stringify(t)),a.push(o(e)+"="+o(t))}))}),i=a.join("&")}return i&&(t+=(-1===t.indexOf("?")?"?":"&")+i),t}},287:function(t,e,n){"use strict";var r=n(12),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,n,i,a={};return t?(r.forEach(t.split("\n"),function(t){if(i=t.indexOf(":"),e=r.trim(t.substr(0,i)).toLowerCase(),n=r.trim(t.substr(i+1)),e){if(a[e]&&o.indexOf(e)>=0)return;a[e]="set-cookie"===e?(a[e]?a[e]:[]).concat([n]):a[e]?a[e]+", "+n:n}}),a):a}},288:function(t,e,n){"use strict";var r=n(12);t.exports=r.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(t){var r=t;return e&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return t=o(window.location.href),function(e){var n=r.isString(e)?o(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return!0}},289:function(t,e,n){"use strict";var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function o(){this.message="String contains an invalid character"}o.prototype=new Error,o.prototype.code=5,o.prototype.name="InvalidCharacterError",t.exports=function(t){for(var e,n,i=String(t),a="",s=0,u=r;i.charAt(0|s)||(u="=",s%1);a+=u.charAt(63&e>>8-s%1*8)){if((n=i.charCodeAt(s+=.75))>255)throw new o;e=e<<8|n}return a}},290:function(t,e,n){"use strict";var r=n(12);t.exports=r.isStandardBrowserEnv()?{write:function(t,e,n,o,i,a){var s=[];s.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(i)&&s.push("domain="+i),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},291:function(t,e,n){"use strict";var r=n(12);function o(){this.handlers=[]}o.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},o.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},o.prototype.forEach=function(t){r.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=o},292:function(t,e,n){"use strict";var r=n(12),o=n(293),i=n(164),a=n(110),s=n(294),u=n(295);function c(t){t.cancelToken&&t.cancelToken.throwIfRequested()}t.exports=function(t){return c(t),t.baseURL&&!s(t.url)&&(t.url=u(t.baseURL,t.url)),t.headers=t.headers||{},t.data=o(t.data,t.headers,t.transformRequest),t.headers=r.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||a.adapter)(t).then(function(e){return c(t),e.data=o(e.data,e.headers,t.transformResponse),e},function(e){return i(e)||(c(t),e&&e.response&&(e.response.data=o(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},293:function(t,e,n){"use strict";var r=n(12);t.exports=function(t,e,n){return r.forEach(n,function(n){t=n(t,e)}),t}},294:function(t,e,n){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},295:function(t,e,n){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},296:function(t,e,n){"use strict";var r=n(165);function o(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var n=this;t(function(t){n.reason||(n.reason=new r(t),e(n.reason))})}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var t;return{token:new o(function(e){t=e}),cancel:t}},t.exports=o},297:function(t,e,n){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},373:function(t,e,n){"use strict";n.r(e);var r=n(18),o=n.n(r),i=n(0),a=n.n(i),s=n(124),u=n.n(s),c=n(125),f=n.n(c),p={webdev:"https://www.reddit.com/r/webdev.json?",web_design:"https://www.reddit.com/r/web_design.json?",frontend:"https://www.reddit.com/r/frontend.json?",css:"https://www.reddit.com/r/css.json?",javascript:"https://www.reddit.com/r/javascript.json?",react_js:"https://www.reddit.com/r/reactjs.json?",graphql:"https://www.reddit.com/r/graphql.json?",node:"https://www.reddit.com/r/node.json?",typescript:"https://www.reddit.com/r/typescript.json?",vue:"https://www.reddit.com/r/vuejs.json?"},l=n(11),d=n(46);function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function m(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function v(){return(v=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function y(t,e,n,r,o,i,a){try{var s=t[i](a),u=s.value}catch(t){return void n(t)}s.done?e(u):Promise.resolve(u).then(r,o)}function w(t){return function(){var e=this,n=arguments;return new Promise(function(r,o){var i=t.apply(e,n);function a(t){y(i,r,o,a,s,"next",t)}function s(t){y(i,r,o,a,s,"throw",t)}a(void 0)})}}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){E(t,e,n[e])})}return t}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function x(t){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function j(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function S(t,e){return(S=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function E(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var C=function(t){function e(){var t,n,r,o;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return r=this,o=(t=x(e)).call.apply(t,[this].concat(a)),n=!o||"object"!==h(o)&&"function"!=typeof o?j(r):o,E(j(n),"state",{loading:!0,posts:[],filteredPosts:[],isFiltered:!1,favourites:[]}),E(j(n),"filterPosts",function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(!t)return n.setState({filteredPosts:n.props.posts,isFiltered:!1});n.setState({loading:!0});var e=n.props.posts.filter(Object(l.b)(t));n.setState({filteredPosts:e,loading:!1,isFiltered:!0})}),E(j(n),"addToFavourites",function(t){if(t.doc_id)return n.removeFromFavourites(t);d.a.collection("favourites").add(t).then(function(e){console.log("added",g({},t,{doc_id:e.id}))}).catch(function(t){console.error("Error adding document: ",t)})}),E(j(n),"removeFromFavourites",function(t){d.a.collection("favourites").doc(t.doc_id).delete()}),n}var n,r,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&S(t,e)}(e,u.a),n=e,r=[{key:"componentDidMount",value:function(){var t=w(o.a.mark(function t(){var e,n,r,i,a,s=this;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e=this.props,n=e.posts,r=void 0===n?[]:n,i=e.favourites,a=void 0===i?[]:i,this.setState({loading:!1,posts:r,favourites:a}),d.a.collection("favourites").onSnapshot(function(t){var e=t.docs.map(function(t){return{doc_id:t.id,data:t.data().data}});e.length!==s.state.favourites.length&&s.setState({favourites:e})});case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state,e=t.posts,n=t.filteredPosts,r=t.isFiltered,o=this.props,i=o.Component,u=o.pageProps;return a.a.createElement(s.Container,null,a.a.createElement(i,v({posts:r?n:e,loading:this.state.loading,onSearchSubmit:this.filterPosts,onAddToFavourites:this.addToFavourites,favourites:this.state.favourites},u)))}}],i=[{key:"getInitialProps",value:function(){var t=w(o.a.mark(function t(e){var n,r,i,a,s,u;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.Component,r=e.ctx,i={favourites:[]},!n.getInitialProps){t.next=6;break}return t.next=5,n.getInitialProps(r);case 5:i=t.sent;case 6:return t.next=8,f.a.all(Object.keys(p).map(function(t){return f.a.get(p[t])}));case 8:return a=t.sent,s=a.reduce(function(t,e){return[].concat(m(e.data.data.children),m(t))},[]),u=s.sort(l.h),t.abrupt("return",g({posts:u},i));case 12:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}],r&&b(n.prototype,r),i&&b(n,i),e}();e.default=C}},[[277,1,0]]]);