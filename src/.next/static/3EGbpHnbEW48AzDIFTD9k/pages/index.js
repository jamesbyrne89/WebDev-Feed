(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{139:function(e,t,n){"use strict";var r=n(34),o=n(9);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(140)),i=o(n(66)),l=o(n(13)),c=o(n(14)),s=o(n(29)),u=o(n(30)),d=o(n(31)),m=o(n(67)),p=o(n(25)),f=n(122),h=r(n(0)),g=(o(n(39)),r(n(54))),b=n(38);var v=function(e){function t(){var e,n,r,o,a,c;(0,l.default)(this,t);for(var d=arguments.length,h=new Array(d),v=0;v<d;v++)h[v]=arguments[v];return n=(0,s.default)(this,(e=(0,u.default)(t)).call.apply(e,[this].concat(h))),(0,p.default)((0,m.default)((0,m.default)(n)),"formatUrls",(r=function(e,t){return{href:e&&"object"===(0,i.default)(e)?(0,f.format)(e):e,as:t&&"object"===(0,i.default)(t)?(0,f.format)(t):t}},o=null,a=null,c=null,function(e,t){if(e===o&&t===a)return c;var n=r(e,t);return o=e,a=t,c=n,n})),(0,p.default)((0,m.default)((0,m.default)(n)),"linkClicked",function(e){var t=e.currentTarget,r=t.nodeName,o=t.target;if("A"!==r||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var a=n.formatUrls(n.props.href,n.props.as),i=a.href,l=a.as;if(function(e){var t=(0,f.parse)(e,!1,!0),n=(0,f.parse)((0,b.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(i)){var c=window.location.pathname;i=(0,f.resolve)(c,i),l=l?(0,f.resolve)(c,l):i,e.preventDefault();var s=n.props.scroll;null==s&&(s=l.indexOf("#")<0);var u=n.props.replace?"replace":"push";g.default[u](i,l,{shallow:n.props.shallow}).then(function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())}).catch(function(e){n.props.onError&&n.props.onError(e)})}}}),n}return(0,d.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,a.default)(this.props.href)!==(0,a.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=(0,f.resolve)(e,t);g.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"==typeof t&&(t=h.default.createElement("a",null,t));var a=h.Children.only(t),i={onClick:function(t){a.props&&"function"==typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(i.href=o||r),i.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(i.href=(0,g._rewriteUrlForNextExport)(i.href)),h.default.cloneElement(a,i)}}]),t}(h.Component);t.default=v},140:function(e,t,n){e.exports=n(141)},141:function(e,t,n){var r=n(5),o=r.JSON||(r.JSON={stringify:JSON.stringify});e.exports=function(e){return o.stringify.apply(o,arguments)}},18:function(e,t,n){e.exports=n(139)},33:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return i});var r=n(2),o=n(1),a=r.c.main.withConfig({displayName:"CardContainerStyles",componentId:"sc-1d4sp1d-0"})(["position:relative;-webkit-column-count:4;column-count:4;-webkit-column-gap:2.5em;column-gap:2.5em;border-top:solid 1px ",";padding-top:1.25em;padding-bottom:1em;width:85%;margin:2rem auto;margin-left:calc(7.5% + 2rem);flex-grow:1;@media (max-width:","px){column-gap:1.5rem;}@media (max-width:","px){column-count:3;}@media (max-width:","px){column-count:2;}@media (max-width:","px){column-gap:1rem;width:90%;margin-left:calc(5% + 2rem);}@media (max-width:","px){column-count:1;width:95%;margin-left:auto;}&::after{content:'';width:100%;position:fixed;height:40px;background:",";pointer-events:none;bottom:0;left:0;}"],o.a.text_grey_mid_two,o.d.desktop_lg,o.d.desktop_md,o.d.desktop_sm,o.d.tablet,o.d.mobile,function(e){return e.theme.fade}),i=r.c.div.withConfig({displayName:"CardContainerStyles__StatusMessageStyles",componentId:"sc-1d4sp1d-1"})(["position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;text-align:center;margin-top:200px;svg{height:56px;}span{display:block;}@media (max-width:","px){margin-top:120px;}@media (max-width:","px){margin-top:80px;}"],o.d.tablet,o.d.mobile)},375:function(e,t,n){__NEXT_REGISTER_PAGE("/",function(){return e.exports=n(376),{page:e.exports.default}})},376:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(76),i=n(75),l=n(74);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}t.default=function(e){var t=e.onSearchSubmit,n=e.onAddNewFavourite,r=e.toggleTheme,u=e.themeName,d=e.isAuthenticated,m=e.onLogoutClick,p=s(e,["onSearchSubmit","onAddNewFavourite","toggleTheme","themeName","isAuthenticated","onLogoutClick"]);return o.a.createElement(i.a,{title:"RedditDev - the best of frontend web development on Reddit.",onSearchSubmit:t,onAddNewFavourite:n,toggleTheme:r,themeName:u,isAuthenticated:d,onLogoutClick:m},o.a.createElement(a.a,c({},p,{isAuthenticated:!0,emptyState:o.a.createElement(l.a,null,o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 125"},o.a.createElement("path",{d:"M43.241,40.677l3.315-7.292c-2.651-4.751-7.724-7.966-13.551-7.966c-8.567,0-15.513,6.945-15.513,15.513 c0,17.471,27.078,32.54,29,33.588l-3.25-13.814l6.676-9.537L43.241,40.677z"}),o.a.createElement("path",{d:"M66.996,25.418c-5.864,0-10.966,3.254-13.604,8.054c-0.016-0.03-0.035-0.058-0.052-0.088l-3.315,7.292l6.676,10.491 l-6.676,9.537l3.25,13.814c0.071,0.039,0.116,0.063,0.116,0.063s29.116-15.537,29.116-33.651 C82.509,32.364,75.563,25.418,66.996,25.418z"})),o.a.createElement("span",null,"No posts."))})))}},49:function(e,t,n){var r,o;
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */void 0===(o="function"==typeof(r=function(){var e,t,n={version:"0.2.0"},r=n.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function o(e,t,n){return e<t?t:e>n?n:e}function a(e){return 100*(-1+e)}n.configure=function(e){var t,n;for(t in e)void 0!==(n=e[t])&&e.hasOwnProperty(t)&&(r[t]=n);return this},n.status=null,n.set=function(e){var t=n.isStarted();e=o(e,r.minimum,1),n.status=1===e?null:e;var c=n.render(!t),s=c.querySelector(r.barSelector),u=r.speed,d=r.easing;return c.offsetWidth,i(function(t){""===r.positionUsing&&(r.positionUsing=n.getPositioningCSS()),l(s,function(e,t,n){var o;return(o="translate3d"===r.positionUsing?{transform:"translate3d("+a(e)+"%,0,0)"}:"translate"===r.positionUsing?{transform:"translate("+a(e)+"%,0)"}:{"margin-left":a(e)+"%"}).transition="all "+t+"ms "+n,o}(e,u,d)),1===e?(l(c,{transition:"none",opacity:1}),c.offsetWidth,setTimeout(function(){l(c,{transition:"all "+u+"ms linear",opacity:0}),setTimeout(function(){n.remove(),t()},u)},u)):setTimeout(t,u)}),this},n.isStarted=function(){return"number"==typeof n.status},n.start=function(){n.status||n.set(0);var e=function(){setTimeout(function(){n.status&&(n.trickle(),e())},r.trickleSpeed)};return r.trickle&&e(),this},n.done=function(e){return e||n.status?n.inc(.3+.5*Math.random()).set(1):this},n.inc=function(e){var t=n.status;return t?("number"!=typeof e&&(e=(1-t)*o(Math.random()*t,.1,.95)),t=o(t+e,0,.994),n.set(t)):n.start()},n.trickle=function(){return n.inc(Math.random()*r.trickleRate)},e=0,t=0,n.promise=function(r){return r&&"resolved"!==r.state()?(0===t&&n.start(),e++,t++,r.always(function(){0==--t?(e=0,n.done()):n.set((e-t)/e)}),this):this},n.render=function(e){if(n.isRendered())return document.getElementById("nprogress");s(document.documentElement,"nprogress-busy");var t=document.createElement("div");t.id="nprogress",t.innerHTML=r.template;var o,i=t.querySelector(r.barSelector),c=e?"-100":a(n.status||0),u=document.querySelector(r.parent);return l(i,{transition:"all 0 linear",transform:"translate3d("+c+"%,0,0)"}),r.showSpinner||(o=t.querySelector(r.spinnerSelector))&&m(o),u!=document.body&&s(u,"nprogress-custom-parent"),u.appendChild(t),t},n.remove=function(){u(document.documentElement,"nprogress-busy"),u(document.querySelector(r.parent),"nprogress-custom-parent");var e=document.getElementById("nprogress");e&&m(e)},n.isRendered=function(){return!!document.getElementById("nprogress")},n.getPositioningCSS=function(){var e=document.body.style,t="WebkitTransform"in e?"Webkit":"MozTransform"in e?"Moz":"msTransform"in e?"ms":"OTransform"in e?"O":"";return t+"Perspective"in e?"translate3d":t+"Transform"in e?"translate":"margin"};var i=function(){var e=[];function t(){var n=e.shift();n&&n(t)}return function(n){e.push(n),1==e.length&&t()}}(),l=function(){var e=["Webkit","O","Moz","ms"],t={};function n(n){return n=n.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(e,t){return t.toUpperCase()}),t[n]||(t[n]=function(t){var n=document.body.style;if(t in n)return t;for(var r,o=e.length,a=t.charAt(0).toUpperCase()+t.slice(1);o--;)if((r=e[o]+a)in n)return r;return t}(n))}function r(e,t,r){t=n(t),e.style[t]=r}return function(e,t){var n,o,a=arguments;if(2==a.length)for(n in t)void 0!==(o=t[n])&&t.hasOwnProperty(n)&&r(e,n,o);else r(e,a[1],a[2])}}();function c(e,t){var n="string"==typeof e?e:d(e);return n.indexOf(" "+t+" ")>=0}function s(e,t){var n=d(e),r=n+t;c(n,t)||(e.className=r.substring(1))}function u(e,t){var n,r=d(e);c(e,t)&&(n=r.replace(" "+t+" "," "),e.className=n.substring(1,n.length-1))}function d(e){return(" "+(e.className||"")+" ").replace(/\s+/gi," ")}function m(e){e&&e.parentNode&&e.parentNode.removeChild(e)}return n})?r.call(t,n,t,e):r)||(e.exports=o)},6:function(e,t,n){"use strict";n.d(t,"c",function(){return a}),n.d(t,"e",function(){return i}),n.d(t,"d",function(){return l}),n.d(t,"b",function(){return c}),n.d(t,"a",function(){return s});var r=n(2),o=n(1),a=r.c.article.withConfig({displayName:"CardStyles",componentId:"sc-1on57zg-0"})(["margin:0 0 1.25em 0;width:100%;background:",";break-inside:avoid;overflow-wrap:break-word;padding:1em 0.75em;-webkit-transform:translateY(200px) scale(0.9);transform:translateY(200px) scale(0.9);opacity:0;-webkit-transition:opacity 0.75s ease-in-out 0s,-webkit-transform 0.7s cubic-bezier(0.165,0.84,0.44,1) 0s;transition:opacity 0.75s ease-in-out 0s,-webkit-transform 0.7s cubic-bezier(0.165,0.84,0.44,1) 0s;transition:transform 0.7s cubic-bezier(0.165,0.84,0.44,1) 0s,opacity 0.75s ease-in-out 0s;transition:transform 0.7s cubic-bezier(0.165,0.84,0.44,1) 0s,opacity 0.75s ease-in-out 0s,-webkit-transform 0.7s cubic-bezier(0.165,0.84,0.44,1) 0s;-webkit-column-break-inside:avoid;"," .card-header{width:100%;display:flex;justify-content:space-between;}"],function(e){return e.theme.card_background},function(e){return e.isAnimated&&"transform: translateY(0) scale(1);\n      opacity: 1;"}),i=r.c.h3.withConfig({displayName:"CardStyles__SubRedditNameStyles",componentId:"sc-1on57zg-1"})(["font-family:",";padding:0.5em 0.75em;margin:0;display:inline-block;font-weight:700;text-transform:uppercase;font-size:0.75rem;color:#fff;letter-spacing:1px;cursor:pointer;background:",";"],o.a.sansSerif,function(e){return e.deselected?o.a.background_grey:o.a["subreddit_colour_".concat(e.colour)]}),l=r.c.h2.withConfig({displayName:"CardStyles__PostTitleStyles",componentId:"sc-1on57zg-2"})(["padding:1.5em 0;font-size:1.25rem;margin:0;-webkit-transition:all 0.15s;transition:all 0.15s;text-align:left;color:",";@media (max-width:","px){padding:0.75em 0;}a{font-family:'Tiempos Headline',georgia,serif;font-weight:700;text-decoration:none;line-height:1.3;max-width:100%;-webkit-box-decoration-break:clone;box-decoration-break:clone;-webkit-transition:border 0.15s;transition:border 0.15s;}a:hover{color:inherit;border-bottom:solid 1px #000;}"],function(e){return e.theme.font_colour_primary},o.d.tablet),c=r.c.footer.withConfig({displayName:"CardStyles__CardFooterStyles",componentId:"sc-1on57zg-3"})(["font-weight:400;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap;font-size:0.75rem;letter-spacing:0.02em;color:",";.post-comments{font-family:",";display:block;text-align:left;white-space:nowrap;padding:0 0.75em;-webkit-transition:all 0.15s;transition:all 0.15s;a{-webkit-transition:all 0.15s;transition:all 0.15s;cursor:pointer;}a:hover{color:"," !important;padding-bottom:0.125em;border-bottom:solid 1px;-webkit-transition:all 0.1s;transition:all 0.1s;}}.post-comments,.short-url,.timestamp{padding:0 0.25em;}.card__bar{font-size:0.875em;}"],o.a.text_grey_mid_two,o.a.sansSerif,o.a.nearBlack),s=r.c.button.withConfig({displayName:"CardStyles__AddToFavouritesButtonStyles",componentId:"sc-1on57zg-4"})(["cursor:pointer;height:20px;width:auto;line-height:1;display:flex;align-items:center;svg{fill:",";}@media (max-width:","px){height:24px;}"],function(e){return e.theme.button_colour},o.d.tablet)},73:function(e,t,n){e.exports=n(138)},74:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(33);t.a=function(e){return o.a.createElement(a.b,null,e.children)}},75:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(73),i=n.n(a),l=n(2),c=n(58),s=n(18),u=n.n(s),d=n(15),m=n.n(d),p=n(49),f=n.n(p),h=n(4),g=n(1),b=l.c.div.withConfig({displayName:"SearchStyles",componentId:"km8rng-0"})(["width:300px;position:relative;@media (max-width:","px){width:auto;}.search__input{display:block;font-size:1rem;padding:0.25em;border:none;height:2.75em;background:",";border-radius:6px;width:100%;padding-left:3em;font-family:"," position:relative;color:inherit;&:focus{&::placeholder{opacity:0;}}}.search__icon{position:absolute;top:0.575em;left:0.65em;height:2em;fill:",";}.search__close-btn{display:none;font-size:1rem;background:transparent;border:0;margin-left:1em;cursor:pointer;}::-webkit-input-placeholder{color:",";font-size:1rem;font-weight:300;}:-ms-input-placeholder{color:",";font-size:1rem;font-weight:300;}::placeholder{color:",";font-size:1rem;font-weight:300;}.search-term{font-family:$serif;font-weight:bold;font-size:1.5rem;margin:auto;position:relative;}.search-term .wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;}.clear-search{font-family:",";font-size:1rem;color:",";margin-top:2em;cursor:pointer;display:block;border-bottom:solid 2px transparent;-webkit-transition:all 0.15s;transition:all 0.15s;}"],g.d.tablet,function(e){return e.theme.main_background},g.a.sansSerif,function(e){return e.theme.button_colour},g.a.background_grey,g.a.background_grey,g.a.background_grey,g.a.sansSerif,function(e){return e.theme.button_colour}),v=l.c.div.withConfig({displayName:"SearchStyles__SearchDropdownStyles",componentId:"km8rng-1"})(["padding:0.5em;position:absolute;top:3.5rem;width:300px;background:",";z-index:2;box-shadow:5px 6px 20px 0 rgba(46,61,73,.15);ul{display:flex;justify-content:flex-start;flex-wrap:wrap;padding-bottom:1rem;}.search__sub-list-title{font-size:0.75rem;}.search__dropdown-list{border-bottom:solid 1px ",";}li{margin:0.25rem 0.5rem 0.25rem 0;list-style:none;}"],function(e){return e.theme.header_background},g.a.text_grey_mid_two),y=b,w=n(6);function x(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var k=["webdev","web_design","frontend","css","javascript","reactjs","graphql","node","typescript","vue"],_=function(e){var t=E(Object(r.useState)(""),2),n=t[0],a=t[1],i=E(Object(r.useState)(!1),2),l=i[0],c=i[1],s=E(Object(r.useState)(k),2),u=s[0],d=s[1],m=E(Object(r.useState)([]),2),p=m[0],f=m[1],g=Object(r.useRef)(),b=function(t,n){e.onSearchSubmit(t,n)},_=function(e){g.current&&!g.current.contains(e.target)&&c(!1)},S=function(e){var t;t=u.includes(e)?u.filter(function(t){return t!==e}):[].concat(x(u),[e]);var r=k.filter(function(e){return!t.includes(e)});d(t),f(r),b(n,t)};return Object(r.useEffect)(function(){return document.addEventListener("mousedown",_),function(){document.removeEventListener("mousedown",_)}},[]),o.a.createElement("div",null,o.a.createElement(y,{onSubmit:b,ref:g},o.a.createElement("input",{className:"search__input",type:"search",placeholder:"Search posts",value:n,onChange:function(e){return a(e.target.value),Object(h.a)(b(e.target.value,u),200)},onFocus:function(){c(!0)}}),o.a.createElement("svg",{xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 100 125",enableBackground:"new 0 0 100 100",xmlSpace:"preserve",className:"search__icon"},o.a.createElement("path",{d:"M78.129 78.325L65.121 61.063c8.65-8.773 9.834-22.812 2.203-32.938-4.822-6.396-12.186-10.064-20.203-10.064-5.52 0-10.775 1.762-15.195 5.092-11.131 8.393-13.361 24.271-4.975 35.396 4.822 6.396 12.186 10.066 20.205 10.066 4.74 0 9.25-1.373 13.242-3.848l12.938 17.17 4.793-3.612zM31.742 54.938c-6.395-8.484-4.693-20.594 3.793-26.992a19.114 19.114 0 0 1 11.586-3.885c6.117 0 11.734 2.799 15.41 7.676 6.398 8.49 4.697 20.6-3.793 26.996a19.092 19.092 0 0 1-11.582 3.883c-6.117 0-11.736-2.797-15.414-7.678z"})),o.a.createElement("button",{type:"button",id:"search-close-btn",className:"search__close-btn"}),l&&o.a.createElement(v,null,o.a.createElement("div",{className:"search__sub-list-title"},"Include subreddits:"),o.a.createElement("ul",{className:"search__dropdown-list"},u.map(function(e,t){return o.a.createElement("li",{key:t},o.a.createElement(w.e,{colour:Object(h.f)(e),onClick:function(){return S(e)}},e))})),p.length>0&&o.a.createElement("ul",null,p.map(function(e,t){return o.a.createElement("li",{key:t},o.a.createElement(w.e,{deselected:!0,colour:Object(h.f)(e),onClick:function(){return S(e)}},e))})))))},S=l.c.div.withConfig({displayName:"ThemeTogglerStyles",componentId:"sc-13n4n17-0"})(["display:flex;color:",";font-size:0.875rem;margin:0 1rem;.toggle-container{display:flex;cursor:pointer;border-top-right-radius:10px;border-bottom-right-radius:10px;margin-left:1em;}input[type=checkbox]{height:0;width:0;visibility:hidden;cursor:pointer;}label{cursor:pointer;text-indent:-9999px;width:52px;height:20px;background:",";float:left;border-radius:5px;position:relative;display:flex;justify-content:space-between;div{display:flex;align-items:flex-end;height:100%;padding:0 5px;svg{height:17px;width:auto;fill:",";}}}label:after{content:'';position:absolute;top:2px;right:2px;width:22px;height:16px;background:",";border-radius:3px;transition:transform 0.3s;will-change:transform;}input:checked + label{background:",";}input:checked + label:after{transform:translateX(calc((-100%) - 4px));}html.transition,html.transition *,html.transition *:before,html.transition *:after{transition:all 500ms !important;transition-delay:0 !important;}@media (max-width:","px){span{display:none;}}"],function(e){return e.theme.button_colour},function(e){return e.theme.button_colour},function(e){return e.theme.button_hover_colour},function(e){return e.theme.button_hover_colour},function(e){return e.theme.button_colour},g.d.tablet),C=function(e){return o.a.createElement(S,null,o.a.createElement("span",null,"light"===e.themeName?"Dark mode":"Light mode"),o.a.createElement("div",{className:"toggle-container"},o.a.createElement("input",{type:"checkbox",id:"switch",name:"theme",onClick:e.toggle,defaultChecked:!("dark"!==e.themeName)}),o.a.createElement("label",{htmlFor:"switch"},o.a.createElement("div",{className:"mode-icon--dark-mode"},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 640"},o.a.createElement("path",{d:"M413.9,407.2c28.6-28.6,47.6-63.3,57.1-99.8c-74.3,55.9-180.3,50-247.9-17.6c-67.9-67.9-73.6-174.5-16.9-248.9 C169.1,50.1,134,69.2,105,98.2c-85.3,85.3-85.3,223.6,0,309C190.3,492.5,328.6,492.5,413.9,407.2z"}))),o.a.createElement("div",{className:"mode-icon--light-mode"},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 125"},o.a.createElement("circle",{cx:"50",cy:"50",r:"23.896"}),o.a.createElement("path",{d:"M50,100c-1.827,0-3.308-1.481-3.308-3.308V79.619c0-1.827,1.48-3.308,3.308-3.308s3.308,1.48,3.308,3.308 v17.073C53.308,98.519,51.827,100,50,100z"}),o.a.createElement("path",{d:"M50,23.688c-1.827,0-3.308-1.481-3.308-3.308V3.308C46.692,1.481,48.173,0,50,0s3.308,1.481,3.308,3.308 v17.073C53.308,22.208,51.827,23.688,50,23.688z"}),o.a.createElement("path",{d:"M20.381,53.308H3.308C1.481,53.308,0,51.827,0,50c0-1.827,1.481-3.308,3.308-3.308h17.073 c1.827,0,3.308,1.48,3.308,3.308C23.688,51.827,22.208,53.308,20.381,53.308z"}),o.a.createElement("path",{d:"M96.692,53.308H79.619c-1.827,0-3.308-1.481-3.308-3.308c0-1.827,1.48-3.308,3.308-3.308h17.073 c1.826,0,3.308,1.48,3.308,3.308C100,51.827,98.519,53.308,96.692,53.308z"}),o.a.createElement("path",{d:"M13.254,90.054c-0.847,0-1.693-0.323-2.339-0.969c-1.292-1.292-1.292-3.386,0-4.678l13.437-13.437 c1.292-1.292,3.386-1.292,4.678,0s1.292,3.386,0,4.678L15.593,89.085C14.947,89.731,14.101,90.054,13.254,90.054z"}),o.a.createElement("path",{d:"M73.311,29.998c-0.847,0-1.693-0.323-2.34-0.969c-1.291-1.292-1.291-3.386,0-4.678l13.437-13.437 c1.292-1.292,3.386-1.292,4.679,0c1.291,1.292,1.291,3.386,0,4.678L75.649,29.029C75.003,29.675,74.157,29.998,73.311,29.998z"}),o.a.createElement("path",{d:"M26.69,29.999c-0.847,0-1.692-0.323-2.339-0.969L10.915,15.593c-1.292-1.292-1.292-3.386,0-4.678 c1.293-1.292,3.387-1.292,4.678,0l13.437,13.437c1.292,1.292,1.292,3.386,0,4.678C28.384,29.676,27.537,29.999,26.69,29.999z"}),o.a.createElement("path",{d:"M86.746,90.054c-0.847,0-1.692-0.323-2.339-0.969L70.971,75.648c-1.292-1.292-1.292-3.386,0-4.678 c1.292-1.292,3.386-1.292,4.678,0l13.438,13.437c1.291,1.292,1.291,3.386,0,4.678C88.439,89.731,87.593,90.054,86.746,90.054z"}))))))},O=n(7);m.a.events.on("routeChangeStart",function(){f.a.start()}),m.a.events.on("routeChangeComplete",function(){f.a.done()}),m.a.events.on("routeChangeError",function(){console.log("routeChangeError")});var N=function(e){return o.a.createElement(O.a,null,o.a.createElement(O.c,null,o.a.createElement("div",{className:"header__title-wrapper"},o.a.createElement(O.b,null,o.a.createElement(u.a,{href:"/"},o.a.createElement("a",null,"redditDev.")))),o.a.createElement("div",null,o.a.createElement("div",{className:"header__nav-wrapper"},o.a.createElement(C,{themeName:e.themeName,toggle:e.toggle}),e.isAuthenticated?o.a.createElement(u.a,{href:"."},o.a.createElement("a",{onClick:e.onLogoutClick},"Logout")):o.a.createElement(r.Fragment,null,o.a.createElement(u.a,{href:"/login"},o.a.createElement("a",null,"Login")),o.a.createElement(u.a,{href:"/register"},o.a.createElement("a",null,"Sign Up")))),o.a.createElement("ul",null,e.isAuthenticated&&o.a.createElement(O.d,null,o.a.createElement(u.a,{href:"/favourites"},o.a.createElement("a",null,"Favourites"))),o.a.createElement(O.d,null,o.a.createElement(_,{onSearchSubmit:e.onSearchSubmit}))))))},j=l.c.aside.withConfig({displayName:"SidebarStyles",componentId:"sc-1qdeyni-0"})(["font-size:0.75rem;border-bottom:0;transform:rotate(-90deg);transform-origin:0 0;position:fixed;top:50vh;left:1.25rem;&::before{content:'';display:block;height:1px;width:3rem;right:4rem;bottom:-0.8rem;background:currentColor;position:relative;}@media (max-width:","px){display:none;}.loc-icon{height:1rem;}"],g.d.mobile),z=function(){return o.a.createElement(j,null,"Created in",o.a.createElement("svg",{className:"loc-icon",version:"1.1",id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 19.674 19.674"},o.a.createElement("title",null,"London"),o.a.createElement("g",null,o.a.createElement("path",{d:"M10.804,7.278L9.843,8.237L9.836,8.236c-0.005,0-0.007,0.005-0.013,0.005L9.121,7.535l-0.19,0.193L9.64,8.435\r c0,0.111,0.089,0.2,0.197,0.2c0.11,0,0.199-0.089,0.199-0.2c0-0.001-0.002-0.003-0.002-0.005l0.961-0.96L10.804,7.278z\r M12.017,18.66v-8.442h0.163V6.774h0.057V6.508h-0.379v-0.4l0,0L10.97,4.447h0.004V3.292h-0.017C10.888,3.132,9.95,0.416,9.883,0\r H9.79C9.724,0.416,8.783,3.132,8.718,3.292h-0.02v1.154l0,0l-0.88,1.662H7.816v0.4h-0.38v0.266h0.06v3.443h0.162v8.443h-0.69v1.014\r h5.738V18.66H12.017z M9.836,10.138c-0.939,0-1.701-0.763-1.701-1.703c0-0.939,0.762-1.702,1.701-1.702s1.702,0.762,1.702,1.702\r S10.777,10.138,9.836,10.138z"}))),"by",o.a.createElement("a",{href:"http://jamestbyrne.com"},"James Byrne"))},A=l.c.button.withConfig({displayName:"BackToTopStyles",componentId:"yyrt1m-0"})(["font-weight:bold;padding:0.75em;color:",";cursor:pointer;position:fixed;border:solid 2px currentColor;margin:1px;bottom:2em;right:1.5vw;text-align:center;padding:1em 0.5em;-webkit-transition:all 0.15s;transition:all 0.15s;line-height:1;",";svg{position:relative;top:0;left:0;height:1rem;}}&:hover,&:active{color:",";background:",";border:solid 2px ",";svg{fill:",";}}&:active{-webkit-transform:translateY(4px);transform:translateY(4px);}"],function(e){return e.theme.button_colour},function(e){return e.show?"opacity: 1":"opacity: 0"},function(e){return e.theme.button_hover_colour},function(e){return e.theme.button_colour},function(e){return e.theme.button_colour},function(e){return e.theme.button_hover_colour});function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var L=function(e){return o.a.createElement(A,T({},e,{onClick:function(){window.scrollTo(0,0)}}),o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"},o.a.createElement("path",{d:"M13 5.41V21a1 1 0 0 1-2 0V5.41l-5.3 5.3a1 1 0 1 1-1.4-1.42l7-7a1 1 0 0 1 1.4 0l7 7a1 1 0 1 1-1.4 1.42L13 5.4z"})))};function M(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.a=Object(l.d)(function(e){var t=e.children,n=e.title,a=void 0===n?"redditDev":n,l=e.onSearchSubmit,s=e.onAddNewFavourite,u=e.toggleTheme,d=e.themeName,m=e.isAuthenticated,p=e.onLogoutClick,f=M(Object(r.useState)(!1),2),g=f[0],b=f[1],v=function(){return window.scrollY>500&&!g?b(!0):b(!1)};return Object(r.useEffect)(function(){return window.addEventListener("scroll",Object(h.a)(v)),function(){window.removeEventListener("scroll",Object(h.a)(v))}},[]),o.a.createElement(r.Fragment,null,o.a.createElement(c.a,e),o.a.createElement(i.a,null,o.a.createElement("title",null,a)),o.a.createElement(N,{onSearchSubmit:l,onAddNewFavourite:s,toggle:u,themeName:d,isAuthenticated:m,onLogoutClick:p}),o.a.createElement(z,null),t,o.a.createElement(L,{show:g}))})},76:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(4),i=n(6);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=function(e){function t(e){var n,r,i;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,i=s(t).call(this,e),n=!i||"object"!==l(i)&&"function"!=typeof i?u(r):i,m(u(n),"checkVisible",function(e){if(n.state.isAnimated)return!1;var t=n.cardRef.current;if(n.cardRef.current){var r,o=(r=window.scrollY<0?window.innerHeight:window.scrollY+window.innerHeight-.1*window.innerHeight)>t.offsetTop,a=window.scrollY<r;o&&a&&!n.state.isAnimated&&(n.setState({isAnimated:!0}),window.removeEventListener("scroll",n.onWindowScroll))}}),m(u(n),"addToFavourites",function(){var e=n.props,t=e.subName,r=e.title,o=e.url,a=e.permalink,i=e.num_comments,l=e.created_utc,c=e.id,s=e.doc_id;console.log({doc_id:s});var u=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){m(e,t,n[t])})}return e}({},s&&{doc_id:s},{data:{subreddit_name_prefixed:t,title:r,url:o,permalink:a,num_comments:i,created_utc:l,id:c}});console.log({postData:u}),n.props.onAddToFavourites(u)}),m(u(n),"onWindowScroll",Object(a.a)(function(e){return n.checkVisible(e)},150)),n.cardRef=o.a.createRef(),n.state={isAnimated:!1},n}var n,r,p;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,o.a.Component),n=t,(r=[{key:"componentDidMount",value:function(){this.onWindowScroll(),window.addEventListener("scroll",this.onWindowScroll)}},{key:"componentDidUpdate",value:function(){this.onWindowScroll()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.onWindowScroll)}},{key:"render",value:function(){var e=this.props,t=e.subName,n=e.title,r=e.url,l=e.permalink,c=e.num_comments,s=e.created_utc,u=e.isFavourite,d=this.state.isAnimated;return o.a.createElement(i.c,{ref:this.cardRef,isAnimated:d},o.a.createElement("header",{className:"card-header"},o.a.createElement(i.e,{colour:Object(a.f)(t)},o.a.createElement("a",{href:"https://reddit.com/".concat(t)},t)),o.a.createElement(i.a,{onClick:this.addToFavourites},u?o.a.createElement("svg",{shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",imageRendering:"optimizeQuality",viewBox:"0 0 6.82666 8.533325000000001",x:"0px",y:"0px",fillRule:"evenodd",clipRule:"evenodd",height:"100%"},o.a.createElement("defs",null),o.a.createElement("g",null,o.a.createElement("path",{d:"M3.41333 1.70208c0.371594,-0.557594 0.851559,-0.770898 1.29613,-0.740787 0.23215,0.0157244 0.453988,0.0985315 0.645429,0.234012 0.189815,0.134331 0.349358,0.320457 0.458709,0.544079 0.260024,0.531764 0.238177,1.276 -0.33728,2.03498l0.000397638 0.000299213c-0.00423228,0.00557874 -0.00890945,0.0106181 -0.013937,0.015122l-1.97276 2.0456 -0.0766654 -0.073752 0.0767795 0.0740472c-0.0408937,0.0424016 -0.108425,0.043626 -0.150827,0.00273228 -0.00284646,-0.00274409 -0.00550394,-0.00561417 -0.00797638,-0.00858268l-1.97295 -2.04576 -0.000208661 0.000200787c-0.00567323,-0.00588189 -0.0105315,-0.012252 -0.0145866,-0.0189646 -0.568776,-0.755831 -0.5895,-1.49626 -0.330512,-2.02591 0.109343,-0.223622 0.26889,-0.409748 0.458705,-0.544079 0.191441,-0.13548 0.41328,-0.218287 0.645425,-0.234012 0.444575,-0.0301142 0.924539,0.183193 1.29613,0.74078z"})),o.a.createElement("rect",{fill:"none",width:"6.82666",height:"6.82666"})):o.a.createElement("svg",{shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",imageRendering:"optimizeQuality",viewBox:"0 0 6.82666 8.533325000000001",x:"0px",y:"0px",fillRule:"evenodd",clipRule:"evenodd",height:"100%"},o.a.createElement("defs",null),o.a.createElement("g",null,o.a.createElement("path",{d:"M3.41333 1.70208c0.371594,-0.557594 0.851559,-0.770898 1.29613,-0.740787 0.23215,0.0157244 0.453988,0.0985315 0.645429,0.234012 0.189815,0.134331 0.349358,0.320457 0.458709,0.544079 0.260024,0.531764 0.238177,1.276 -0.33728,2.03498l0.000397638 0.000299213c-0.00423228,0.00557874 -0.00890945,0.0106181 -0.013937,0.015122l-1.97276 2.0456 -0.0766654 -0.073752 0.0767795 0.0740472c-0.0408937,0.0424016 -0.108425,0.043626 -0.150827,0.00273228 -0.00284646,-0.00274409 -0.00550394,-0.00561417 -0.00797638,-0.00858268l-1.97295 -2.04576 -0.000208661 0.000200787c-0.00567323,-0.00588189 -0.0105315,-0.012252 -0.0145866,-0.0189646 -0.568776,-0.755831 -0.5895,-1.49626 -0.330512,-2.02591 0.109343,-0.223622 0.26889,-0.409748 0.458705,-0.544079 0.191441,-0.13548 0.41328,-0.218287 0.645425,-0.234012 0.444575,-0.0301142 0.924539,0.183193 1.29613,0.74078zm1.28196 -0.528283c-0.405449,-0.0274606 -0.85111,0.194484 -1.18585,0.777067 -0.00905118,0.0188425 -0.0237126,0.0352283 -0.0432402,0.046374 -0.0511614,0.0291969 -0.116315,0.0113898 -0.145512,-0.0397717l0.0926417 -0.0528701 -0.0925 0.0525c-0.335138,-0.58726 -0.782563,-0.810854 -1.18947,-0.783291 -0.193067,0.0130748 -0.377673,0.0820236 -0.537087,0.194839 -0.161035,0.113961 -0.296795,0.272701 -0.390374,0.464079 -0.227772,0.465803 -0.203764,1.1245 0.311051,1.80721l1.89839 1.96845 1.89836 -1.96845c0.514811,-0.682709 0.538823,-1.34141 0.311051,-1.80722 -0.0935827,-0.191378 -0.229343,-0.350118 -0.390378,-0.464079 -0.159413,-0.112815 -0.34402,-0.181764 -0.537091,-0.194839z"})),o.a.createElement("rect",{fill:"none",width:"6.82666",height:"6.82666"})))),o.a.createElement(i.d,null,o.a.createElement("a",{href:r,target:"blank"},n)),o.a.createElement(i.b,null,o.a.createElement("span",{className:"short-url"},Object(a.c)(r)),o.a.createElement("span",{className:"card__bar"},"|"),o.a.createElement("time",{className:"timestamp"},Object(a.d)(s)),o.a.createElement("span",{className:"card__bar"},"|"),o.a.createElement("span",{className:"post-comments"},o.a.createElement("a",{href:"https://reddit.com".concat(l),target:"blank"},Object(a.g)(c)))))}}])&&c(n.prototype,r),p&&c(n,p),t}(),f=n(40),h=n(33);t.a=function(e){var t=e.posts,n=e.favourites,r=e.loading,i=e.EmptyState,l=e.onAddToFavourites,c=e.isAuthenticated;return o.a.createElement(h.a,null,r?o.a.createElement(f.a,null):0===t.length&&i?o.a.createElement(i,null):c&&t.map(function(e){var t=n.filter(Object(a.e)({data:{title:e.data.title,id:e.data.id}})),r=t[0]?t[0].doc_id:void 0,i=!!(t.length>0);return o.a.createElement(p,{key:e.data.id,id:e.data.id,doc_id:r,subName:e.data.subreddit_name_prefixed,title:e.data.title,url:e.data.url,permalink:e.data.permalink,num_comments:e.data.num_comments,created_utc:e.data.created_utc,isFavourite:i,onAddToFavourites:l})}))}}},[[375,1,0]]]);