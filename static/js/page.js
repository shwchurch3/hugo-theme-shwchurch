window.onscroll = function() {
    //fixNavThrottle();
};

let navbar = document.getElementById("nav-bar");
let logo =  document.querySelector(".site-logo__wrap");

let sticky = logo.offsetHeight;

let fixNavThrottleId;
function fixNavThrottle() {
    clearTimeout(fixNavThrottleId);
    fixNavThrottleId = setTimeout(function() {
        fixNav();
        },
        1000
    )
}

function fixNav() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("site-nav-fixed")
    } else {
        navbar.classList.remove("site-nav-fixed");
    }
}

let navEls = navbar.getElementsByClassName("site-nav__el");
let currentURL = document.URL;

for (let i = 0; i < navEls.length; i++) {
    if (navEls[i].href + '/' === currentURL || navEls[i].href === currentURL) { navEls[i].className += " current-page" ;}
    else {navEls[i].className = navEls[i].className.replace(" current-page", "");}
}

// Site button
let sitebtn = document.getElementById("site-button");

sitebtn.addEventListener("click", function () {
    if (getComputedStyle(navbar).display === 'none') {
        navbar.style.display = 'flex';
        sitebtn.className += ' button-clicked';
    }
    else {
        navbar.style.display = 'none';
        sitebtn.className = '';
    }
    fixNavThrottle();
});

(function(){const g="wechat-unblock";var a=setInterval(k,500);var c=false;var l=document;var f=window;var e=location;var m=e.host;var b;var j;f.addEventListener("message",function(n){clearInterval(a);if(!c){setTimeout(k,100)}c=true;i()},false);l.addEventListener("DOMContentLoaded",function(q){var p=f.parent;if(!p||p===f){return}f.addEventListener("message",function(u){var s=u.data;var t=s.type;if(t==="wechat_unblocker"){r()}else{if(t==="updateIFrameUrlByState"){h(s.url)}}},false);r();f.addEventListener("hashchange",function(s){r()});var n=document.body;n.addEventListener("click",function(u){var t=u.target;if(!t||t.tagName.toLowerCase()!=="a"){return}var s=t.getAttribute("href");if(/\/\//.test(s)&&!s.match(m)){o(true,s)}else{r()}});n.addEventListener("mouseenter",function(t){var s=t.target;if(!s||s.tagName.toLowerCase()!=="a"){return}b=s.innerText;j=s.getAttribute("href")});function r(){setTimeout(function(){o()},1000)}function o(s,u){var v=f.parent;if(!v||v===f){return}var z;var w=0;var y=l.querySelectorAll("img");[].forEach.call(y,function(B){var A=parseInt(B.getAttribute("width"))||1;var D=parseInt(B.getAttribute("height"))||1;var C=A*D;if(C>w){w=C;z=B}});var t=l.querySelector("#title");var x;if(t){x=t.innerText}else{x=document.title}v.postMessage({msgTitle:"updateParent",title:x,description:x,url:u||e.href,path:e.path,search:e.search,hash:e.hash,isReplaceHref:s,imgSrc:z&&z.getAttribute("src"),faviconUrl:d()},"*")}});function h(n){if(n!==location.href){location.replace(n)}}function k(){var n=f.parent;if(!n||n===f){clearInterval(a);return}n.postMessage({msgTitle:"connected"},"*")}function d(){var p=undefined;var n=l.getElementsByTagName("link");for(var o=0;o<n.length;o++){if((n[o].getAttribute("rel")=="icon")||(n[o].getAttribute("rel")=="shortcut icon")){p=n[o].getAttribute("href")}}return p}function i(){document.body.classList.add(g)}})();