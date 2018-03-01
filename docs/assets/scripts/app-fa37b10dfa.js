"use strict";function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function getTimeAgo(e){var t=new Date,r=Math.floor(t.getTime()/1e3),s=r-e,n=Math.floor(s/60),o=Math.floor(n/60),a=Math.floor(s/3600/24);return a>=7?"A week ago":s>172800?Math.floor(a)+"d ago":s>86400?"Yesterday":n>60?o+"h ago":2<n<60?n+"m ago":n+"Just now"}function updateView(e){function t(e){var t=e;loadingSpinner.style.display=t?"block":"none"}contentInfo.innerHTML="",redditContent.innerHTML=null,t(!0);var r=document.createDocumentFragment();e.forEach(function(e){var t=e.title,s=e.created_utc,n=e.num_comments,o=e.subreddit,a=e.url,i=e.permalink,c=getTimeAgo(s),d=1===n?n+" comment":d=n+" comments",l=document.createElement("div");l.className="reddit-card reddit-card-"+e.subreddit.toLowerCase(),l.setAttribute("data-sr",o.toLowerCase()),l.innerHTML='<div class="reddit-card-inner">\n        <div class=\'subreddit-wrapper\'>\n            <h3 class="reddit-card__subreddit subreddit-'+o.toLowerCase()+'">r/'+o+'</h3>\n        </div>            \n                      <div class="reddit-card__post-title"><a href="'+a+'" target="blank">\n                      '+t+'</a></div>\n                      <div class="card-footer">\n                      <span class="short-url">'+getHostname(a)+"</span><span class='bar'>|</span> \n                      <time class=\"timestamp\">"+c+'</time></span><span class=\'bar\'>|</span>\n                        <span class="post-comments">\n                          <a href="http://reddit.com'+i+'" target="blank">\n                          '+d+"</a>\n                        </span>     \n                      </div></div>",r.appendChild(l)}),redditContent.appendChild(r),t(!1),checkVisible()}function debounce(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1],!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return function(){}}function checkVisible(e){document.querySelectorAll(".reddit-card").forEach(function(e){var t=void 0;t=window.scrollY<0?window.innerHeight:window.scrollY+window.innerHeight-.1*window.innerHeight;var r=t>e.offsetTop,s=window.scrollY<t;window.scrollY,r&&s?e.classList.add("animate"):e.classList.remove("animate")})}function stickyHeader(){var e=window.scrollY;window.addEventListener("scroll",function(){if(window.scrollY>180&&window.scrollY>e)$(".header").removeClass("is-sticky"),e=window.scrollY;else if(window.scrollY>180&&window.scrollY<e)$(".header").addClass("is-sticky"),e=window.scrollY;else{if(!(window.scrollY<180))return;$(".header").removeClass("is-sticky"),e=window.scrollY}})}function removeSubreddit(){for(var e=document.getElementsByClassName("filters__list-item"),t=0;t<e.length;t++)e[t].classList.remove("subreddit--selected"),e[t].classList.add("subreddit--deselected"),handleShow(e[t],e[t].getAttribute("data-sr"))}function addSubreddit(){for(var e=document.getElementsByClassName("filters__list-item"),t=0;t<e.length;t++)e[t].classList.add("subreddit--selected"),e[t].classList.remove("subreddit--deselected"),handleShow(e[t],e[t].getAttribute("data-sr"))}function handleShow(e,t){e.classList.contains("subreddit--deselected")?$(".reddit-card-"+t).hide():$(".reddit-card-"+t).fadeIn("fast"),handleVisible.updateCards()}function isSearched(e){return function(t){return!e||t.title.toLowerCase().includes(e.toLowerCase())}}function checkForMouseUse(){document.body.classList.add("mouse-user"),document.body.removeEventListener("mousemove",checkForMouseUse)}var dataStore=function(){var e={},t=function(){return e};return{setData:function(t){e=t},getData:t}}(),init=function(){var e=fetch("https://www.reddit.com/r/webdev.json?").then(function(e){return e.json()}).catch(function(e){return console.error("Error fetching data from r/webdev")}),t=fetch("https://www.reddit.com/r/web_design.json?").then(function(e){return e.json()}).catch(function(e){return console.error("Error fetching data from r/web_design")}),r=fetch("https://www.reddit.com/r/frontend.json?").then(function(e){return e.json()}).catch(function(e){return console.error("Error fetching data from r/frontend")}),s=fetch("https://www.reddit.com/r/css.json?").then(function(e){return e.json()}).catch(function(e){return console.error("Error fetching data from r/css")}),n=fetch("https://www.reddit.com/r/javascript.json?").then(function(e){return e.json()}).catch(function(e){return console.error("Error fetching data from r/javascript")}),o=fetch("https://www.reddit.com/r/jquery.json?").then(function(e){return e.json()}).catch(function(e){return console.error("Error fetching data from r/jquery")}),a=fetch("https://www.reddit.com/r/WebdevTutorials.json?").then(function(e){return e.json()}).catch(function(e){return console.error("Error fetching data from r/webdevtutorials")}),i=fetch("https://www.reddit.com/r/reactjs.json?").then(function(e){return e.json()}).catch(function(e){return console.error("Error fetching data from r/reactjs")});Promise.all([e,t,r,s,n,o,a,i]).then(function(e){var t=[],r=[];e.forEach(function(e){t.push.apply(t,_toConsumableArray(e.data.children))}),t.forEach(function(e){var t=e.data;r.push(t)});var s=r.sort(function(e,t){return t.created-e.created});dataStore.setData(s),updateView(s)})},convertTimestamp=function(e){var t=new Date(1e3*e),r=t.getFullYear().toString().substr(2,2),s=t.getMonth()+1,n=t.getDate(),o=t.getHours(),a=o,i=("0"+t.getMinutes()).slice(-2),c="am";return o>12?(a=o-12,c="pm"):12===o?(a=12,c="pm"):0===o&&(a=12),a+":"+i+c+" "+n+"/"+s+"/"+r},getHostname=function(e){var t=document.createElement("a");return t.href=e,0===t.hostname.indexOf("www.")?t.hostname.replace("www.",""):t.hostname},contentInfo=document.getElementById("content-info"),redditContent=document.getElementById("card-container"),loadingSpinner=document.getElementById("loading"),showMessage=function(){var e=document.createElement("div");e.className="empty-message",e.innerHTML="<h3 class='empty-message__header'>Nothing to see here.</h3><span class='empty-message__body'>Please use the filter button to select which subreddits to display</span>";var t=document.createElement("button");t.className="clear-search",t.innerHTML="Clear search",t.addEventListener("click",function(){init(),$(".search-wrapper").removeClass("search-wrapper--opened"),$(".search__close-btn").fadeOut("slow"),$(".search").removeClass("search--opened")});var r=document.createElement("div");return{empty:function(){console.log(e),contentInfo.appendChild(e)},search:function(e){r.className="search-term",r.innerHTML='Results for "'+e+'":',r.appendChild(t),contentInfo.appendChild(r)},noResults:function(e){r.className="search-term",r.innerHTML='No results for "'+e+'".',r.appendChild(t),contentInfo.appendChild(r)},clear:function(){contentInfo.innerHTML=""}}}();window.addEventListener("scroll",checkVisible),window.addEventListener("scroll",stickyHeader);var toggleModal=function(){var e=document.querySelector(".modal"),t=document.querySelector(".header"),r=document.getElementsByTagName("body")[0];$(e).fadeToggle("fast"),$(".filter-overlay").fadeToggle(100),e.classList.toggle("modal--opened"),r.classList.toggle("no-scroll"),t.classList.contains("is-sticky")?e.classList.add("modal--opened--stuck"):e.classList.remove("modal--opened--stuck")},filterBtn=document.querySelector(".filter-btn"),modalCloseBtn=document.querySelector(".modal__close-btn"),filterOverlay=document.getElementById("filter-overlay");filterBtn.addEventListener("click",toggleModal),modalCloseBtn.addEventListener("click",toggleModal);var filterOverlayTap=new Hammer(filterOverlay);filterOverlayTap.on("tap",function(e){toggleModal()});var filters={};filters.all=document.querySelector(".all-filter");var handleVisible=function(){var e=function(){return Array.from(document.querySelectorAll(".filters__list-item")).filter(function(e){return e.classList.contains("subreddit--selected")}).length}();return{numberOfVisible:e,updateCards:function(){return console.log(e),0===e?(filters.all.classList.remove("subreddit--selected"),filters.all.classList.add("subreddit--deselected"),showMessage.empty()):e>0&&e<7?(filters.all.classList.remove("subreddit--selected"),filters.all.classList.add("subreddit--deselected"),showMessage.clear()):(filters.all.classList.remove("subreddit--deselected"),filters.all.classList.add("subreddit--selected")),e}}}();filters.all.addEventListener("click",function(e){0===handleVisible.updateCards()?(this.classList.remove("subreddit--deselected"),this.classList.add("subreddit--selected"),addSubreddit()):7===handleVisible.updateCards()?(this.classList.add("subreddit--deselected"),this.classList.remove("subreddit--selected"),removeSubreddit()):(this.classList.add("subreddit--selected"),this.classList.remove("subreddit--deselected"),addSubreddit())}),filters.webDesign=document.querySelector(".web_design-filter"),filters.frontend=document.querySelector(".frontend-filter"),filters.webDev=document.querySelector(".webdev-filter"),filters.css=document.querySelector(".css-filter"),filters.javascript=document.querySelector(".javascript-filter"),filters.jquery=document.querySelector(".jquery-filter"),filters.webdevTutorials=document.querySelector(".webdevtutorials-filter"),filters.react=document.querySelector(".reactjs-filter"),filters.list=document.querySelector(".filters__list");for(var filter in filters)filters[filter].addEventListener("click",function(e){e.stopPropagation(),this.classList.toggle("subreddit--selected"),this.classList.toggle("subreddit--deselected"),handleShow(this,this.getAttribute("data-sr"))});var backToTopBtn=document.getElementById("back-to-top");window.addEventListener("scroll",function(){var e=document.getElementById("scrolled-bar"),t=document.body.clientHeight-window.innerHeight,r=(window.scrollY/t*100).toFixed(0);e.style.width=r+"%",r>2?$(backToTopBtn).fadeIn("fast"):$(backToTopBtn).fadeOut("fast")});var backToTopTap=new Hammer(backToTopBtn);backToTopTap.on("tap",function(e){window.scrollTo(0,0)});var search=document.getElementById("search"),searchBtn=document.getElementById("search-btn"),searchCloseBtn=document.getElementById("search-close-btn"),searchTap=new Hammer(searchBtn);searchTap.on("tap",function(e){$(".search-wrapper").toggleClass("search-wrapper--opened"),$(".search__close-btn").fadeIn("fast"),$(".search").toggleClass("search--opened"),document.getElementById("search").focus()});var searchCloseTap=new Hammer(searchCloseBtn);searchCloseTap.on("tap",function(e){search.value="",$(".search-wrapper").removeClass("search-wrapper--opened"),$(".search__close-btn").fadeOut("fast"),$(".search").removeClass("search--opened")}),document.body.addEventListener("mousemove",checkForMouseUse),search.addEventListener("change",function(e){var t=void 0;e.target.value.length>0&&"string"==typeof e.target.value&&(t=dataStore.getData().filter(isSearched(e.target.value)),updateView(t),showMessage.search(e.target.value),t.length||showMessage.noResults(e.target.value),e.target.value="")}),function(){document.getElementById("view-btn").addEventListener("click",function(){this.classList.contains("grid")?(this.classList.add("rows"),this.classList.remove("grid"),this.innerHTML="View<i class='fa fa-list'>"):(this.classList.remove("rows"),this.classList.add("grid"),this.innerHTML="View<i class='fa fa-th-large'>"),redditContent.classList.toggle("card-container--rows"),checkVisible()})}(),window.onload=function(){document.body.style.opacity=0,document.body.style.opacity=1,init()},window.addEventListener("resize",checkVisible),"serviceWorker"in navigator&&navigator.serviceWorker.register("temp/assets/scripts/min/serviceworker.js").then(function(e){return console.log("Registered a serviceworker")}).catch(function(e){return console.error(e)});
"use strict";var myCache="myCache";self.addEventListener("install",function(){event.waitUntil(caches.open(myCache).then(function(e){return e.addAll(["/index.html","/temp/assets/styles/styles.css"])}))}),self.addEventListener("fetch",function(e){return e.respondWith(caches.open(myCache).then(function(t){return t.match(e.request)}))});