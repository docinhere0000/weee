// ytc.js - 20210709140535
!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(){if("undefined"==typeof TextEncoder){window.TextEncoder=function(){},window.TextEncoder.prototype.encode=function(e){for(var t=e.length,n=-1,r="undefined"==typeof Uint8Array?new Array(1.5*t):new Uint8Array(3*t),i=0,o=0,a=0;a!==t;){if(i=e.charCodeAt(a),a+=1,i>=55296&&i<=56319){if(a===t){r[n+=1]=239,r[n+=1]=191,r[n+=1]=189;break}if(!((o=e.charCodeAt(a))>=56320&&o<=57343)){r[n+=1]=239,r[n+=1]=191,r[n+=1]=189;continue}if(a+=1,(i=1024*(i-55296)+o-56320+65536)>65535){r[n+=1]=240|i>>>18,r[n+=1]=128|i>>>12&63,r[n+=1]=128|i>>>6&63,r[n+=1]=128|63&i;continue}}i<=127?r[n+=1]=0|i:i<=2047?(r[n+=1]=192|i>>>6,r[n+=1]=128|63&i):(r[n+=1]=224|i>>>12,r[n+=1]=128|i>>>6&63,r[n+=1]=128|63&i)}return"undefined"!=typeof Uint8Array?r.subarray(0,n+1):(r.length=n+1,r)},window.TextEncoder.prototype.toString=function(){return"[object TextEncoder]"};try{Object.defineProperty(window.TextEncoder.prototype,"encoding",{get:function(){if(window.TextEncoder.prototype.isPrototypeOf(this))return"utf-8";throw TypeError("Illegal invocation")}})}catch(e){window.TextEncoder.prototype.encoding="utf-8"}"undefined"!=typeof Symbol&&(window.TextEncoder.prototype[Symbol.toStringTag]="TextEncoder")}var e,t,n,r;Array.from||(Array.from=(e=Object.prototype.toString,t=function(t){return"function"==typeof t||"[object Function]"===e.call(t)},n=Math.pow(2,53)-1,r=function(e){var t=function(e){var t=Number(e);return isNaN(t)?0:0!==t&&isFinite(t)?(t>0?1:-1)*Math.floor(Math.abs(t)):t}(e);return Math.min(Math.max(t,0),n)},function(e){var n=this,i=Object(e);if(null==e)throw new TypeError("Array.from requires an array-like object - not null or undefined");var o,a=arguments.length>1?arguments[1]:void 0;if(void 0!==a){if(!t(a))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(o=arguments[2])}for(var c,s=r(i.length),d=t(n)?Object(new n(s)):new Array(s),u=0;u<s;)c=i[u],d[u]=a?void 0===o?a(c,u):a.call(o,c,u):c,u+=1;return d.length=s,d})),String.prototype.padStart||(String.prototype.padStart=function(e,t){return e>>=0,t=String(void 0!==t?t:" "),this.length>=e?String(this):((e-=this.length)>t.length&&(t+=t.repeat(e/t.length)),t.slice(0,e)+String(this))})}n.r(t);var i,o,a=function(){return window.location.hostname},c=function(){return window.location.search},s=function(e){return window.frames[e]},d=function(e,t,n){window.__cmp(e,t,n)},u=function(e,t,n){window.__uspapi(e,t,n)},p=function(e,t,n,r){window.__tcfapi(e,t,n,r)},f=function(e,t,n){e.postMessage(t,n)};var l=function(e){"__tcfapi"===e||"__cmp"===e?i=!0:"__uspapi"===e&&(o=!0),re()},m=function(e){te.gdpr_consent=e.tcString,te.gdpr=!0===e.gdprApplies?1:0,te.isOathFirstParty=!0===e.isOathFirstParty?1:0},v=function(e,t,n,r){if(!window[e]){var i=function(e){for(var t,n=window;n;){try{if(s(e)){t=n;break}}catch(e){}if(n===window.top)break;n=n.parent}return t}(t);if(!i)return void l(e);var o={},a=Math.random()+"";"__tcfapiLocator"===t?function(e,t,n,r){window[e]=function(e,i,o,a){var c={__tcfapiCall:{command:e,parameter:a,version:i,callId:r}};n[r]=o,f(t,c,"*")}}(e,i,o,a):function(e,t,n,r,i){window[e]=function(e,o,a){var c={};c[t]={command:e,parameter:o,callId:i},r[i]=a,f(n,c,"*")}}(e,n,i,o,a),window.addEventListener("message",function(e){!function(e,t,n){var r={};try{r="string"==typeof e.data?JSON.parse(e.data):e.data}catch(e){}var i=r[t];i&&"function"==typeof n[i.callId]&&(n[i.callId](i.returnValue,i.success),n[i.callId]=null)}(e,r,o)},!1)}},g=function(){var e,t;v("__cmp","__cmpLocator","__cmpCall","__cmpReturn"),window.__cmp&&(e=function(e,t){t&&m(e),l("__cmp")},t=setTimeout(function(){e(void 0,!1)},1e3),d("getConsentData",null,function(n,r){clearTimeout(t),r?e({tcString:n.consentData,gdprApplies:n.gdprApplies,isOathFirstParty:n.isOathFirstParty},!0):e(void 0,!1)}))},h=function(){var e,t;v("__uspapi","__uspapiLocator","__uspapiCall","__uspapiReturn"),window.__uspapi&&(e=function(e,t){t&&(te.us_privacy=void 0===e.uspString?"":e.uspString),l("__uspapi")},t=setTimeout(function(){e(void 0,!1)},1e3),u("getUSPData",1,function(n,r){clearTimeout(t),r?e({uspVersion:n.version,uspString:n.uspString,isOathFirstParty:n.isOathFirstParty},!0):e(void 0,!1)}))},y=function(){var e,t;v("__tcfapi","__tcfapiLocator","__tcfapiCall","__tcfapiReturn"),window.__tcfapi?(e=function(e,t){t?(m(e),l("__tcfapi")):g()},t=setTimeout(function(){e(void 0,!1)},1e3),p("addEventListener",2,function(n,r){clearTimeout(t),r&&"error"!==n.cmpStatus?"tcloaded"!==n.eventStatus&&"useractioncomplete"!==n.eventStatus||e({tcString:n.tcString,gdprApplies:n.gdprApplies,isOathFirstParty:14===n.cmpId},!0):e(void 0,!1)})):g()};function w(){if(void 0===O?j:O.use1stPartyCookies){var e=T(c().substring(1),"vmcid","&");if(void 0===e||""===e)return;b("vmcid",e);var t=S("vmuuid");void 0!==t&&""!==t||(t=I()),b("vmuuid",t)}}var _,O,E=function(e,t,n){var r;if(void 0!==n&&""!==n)for(r=0;r<e.length;r+=1){var i=e[r].properties;i.qstrings=i.qstrings||{},i.qstrings[t]=n}},S=function(e){var t=(document.cookie||"").replace(/\s/g,""),n=T(t,e,";");if(void 0===n||""===n){var r=localStorage.getItem(e);if(null!==r){try{r=JSON.parse(r)}catch(e){return}(new Date).getTime()<=r.timestamp+6048e5&&(n=r.id)}}return n},b=function(e,t){x({name:e,value:t,expiryOffset:604800,domain:a(),path:"/"});var n={id:t,timestamp:(new Date).getTime()};localStorage.setItem(e,JSON.stringify(n))},x=function(e){var t,n,r;arguments.length<1||void 0!==e.name&&(e.value=void 0!==e.value?e.value:"true",e.domain=void 0!==e.domain?e.domain:"",e.path=void 0!==e.path?e.path:"/",e.expiryOffset=void 0!==e.expiryOffset?e.expiryOffset:180,(r=new Date).setTime(r.getTime()+1e3*e.expiryOffset),t=e.expiryOffset>=0?"; expires="+r.toGMTString():"; expires=Thu, 01-Jan-1970 00:00:01 GMT",n=e.name+"="+e.value+t+"; path="+e.path+(""!==e.domain?"; domain=."+e.domain:"")+"; SameSite=Lax",document.cookie=n)},I=function(){var e,t,n="";for(e=0;e<32;e++)t=16*Math.random()|0,8!==e&&12!==e&&16!==e&&20!==e||(n+="-"),n+=(12===e?4:16===e?3&t|8:t).toString(16);return n},T=function(e,t,n){var r=new RegExp(n+t+"=([^"+n+"]*)"),i=(n+e).match(r);if(null!==i)return i[1]},j=!1;function P(e){if(void 0!==e){var t=new XMLHttpRequest,n="https://s.yimg.com/wi/config/"+e+".json";t.open("GET",n,!0),t.timeout=2e3,t.ontimeout=function(e){_--,re()},t.send(),t.onreadystatechange=A}}function A(){if(this.readyState===this.DONE){if(200===this.status&&this.responseText&&"{}"!==this.responseText)try{var e=JSON.parse(this.responseText);te.pixelConfigs[e.pixelId]=e,void 0!==O&&!0===O.use1stPartyCookies||(O=e)}catch(e){}_--,re()}}function C(e){var t;e.userEmail?(e.userEmail=e.userEmail.toLowerCase().trim(),t=e.userEmail,new RegExp(['^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@',"((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$"].join("")).test(t)&&(te.emails[e.pixelId]=e.userEmail,e.userHashedEmail&&delete e.userHashedEmail)):delete e.userEmail}function M(e){var t=e.properties;if(t.pixelId&&t.userEmail&&(t.userEmail=te.emails[t.pixelId]),t.userHashedEmail){/^[A-Fa-f0-9]{64}$/.test(t.userHashedEmail)||delete t.userHashedEmail}}var F=function(e,t){var n=function(n){t.push(n.target.result),t.length===e.length&&H(t)};for(var r in e)e[r].oncomplete=n},H=function(e){var t=0;for(var n in te.emails){var r=Array.from(new Uint8Array(e[t])).map(function(e){return e.toString(16).padStart(2,"0")});te.emails[n]=r.join(""),t++}te.emailsAreHashed=!0,re()},N=function(e){var t=(new window.TextEncoder).encode(e);return(window.crypto||window.msCrypto).subtle.digest("SHA-256",t)};var k={};function q(e,t,n){D(e)[t]=n}function L(e){var t,n,r;if(void 0!==e.projectId)for(n=0,r=(t=["documentName","url","referrer"]).length;n<r;n+=1)try{q(e.projectId,t[n],e.properties[t[n]])}catch(e){}}function D(e){return void 0===k[e]&&(k[e]={}),k[e]}function R(e){var t,n,r=[];return r.push("https://sp.analytics.yahoo.com/sp.pl"),r.push("?a="+encodeURIComponent(e.projectId)),t=e.projectId,n="isPageViewTracked",D(t)[n]||r.push(function(){var e,t;return e=[],(t=new Date).ywaStandardTimezoneOffset=function(){var e,t;return e=new Date((new Date).getFullYear(),0,1),t=new Date((new Date).getFullYear(),6,1),Math.max(e.getTimezoneOffset(),t.getTimezoneOffset())}(),e.push("&d="+encodeURIComponent(t.toGMTString())),e.push("&n="+encodeURIComponent(parseInt(t.getTimezoneOffset()/60,10)+(t.getTimezoneOffset()<t.ywaStandardTimezoneOffset?"d":""))),e.join("")}()),r.join("")}var V=[{name:"tealium",interface:"utag_data"},{name:"gtm",interface:"google_tag_manager"},{name:"adobe",interface:"_satellite"},{name:"ensighten",interface:"ensBootstraps"},{name:"signal",interface:"BrightTag"}];var U=function(){return V.filter(function(e){return!!window[e.interface]}).map(function(e){return e.name}).join(",")};function z(e){var t;return e.projects&&e.properties&&(t=[],G(e),J(e),B(e,t),delete(e=t).projects,delete e.properties),Z(e),function(e){var t,n;void 0!==(t=S("vmcid"))&&""!==t&&(void 0!==(n=S("vmuuid"))&&""!==n||(n=I()),E(e,"vmcid",t),E(e,"vmuuid",n))}(e),function(e){var t,n=U();if(n)for(t=0;t<e.length;t+=1){var r=e[t].properties;r.qstrings=r.qstrings||{},r.qstrings.tagmgr=n}}(e),e}var Y,G=function(e){var t;if("string"==typeof(t=e.projects)){try{t=t.join("|")}catch(e){}"string"==typeof t&&(e.projects=t.replace(",","|").split("|"))}},J=function(e){var t,n,r,i;for(t=0,n=(i=e.projects).length;t<n;t+=1)"string"==typeof i[t]&&(r=i[t],i[t]={projectId:r,coloId:"SP"})},B=function(e,t){var n,r,i;for(n=0,r=e.projects.length;n<r;n+=1)(i=e.projects[n]).coloId=i.coloId||"SP",void 0===i.properties&&(i.properties=$(e.properties)),t.push(i)},Z=function(e){var t;for(t=e.length-1;t>=0;t-=1)void 0===e[t].projectId&&e.splice(t,1)},$=function(e){var t,n;for(n in t={},e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t},X=[];function K(e){oe(function(){var t,n,r,i,o,a;for(n=0,r=(t=z(e)).length;n<r;n+=1)i=t[n],o=void 0,a=void 0,void 0!==i.projectId&&(a=D(i.projectId),void 0===(o=i.properties).documentName&&(o.documentName=a.documentName||document.title),void 0===o.url&&(document.URL?o.url=document.URL.split("?")[0]:document.location.href?o.url=document.location.href.split("?")[0]:window.location.href?o.url=window.location.href.split("?")[0]:o.url="",o.url=a.url||o.url.split("?")[0]),void 0===o.referrer&&(o.referrer=a.referrer||document.referrer.split("?")[0]||"")),L(t[n]),M(t[n]),Q(t[n])})}function Q(e){var t,n;se("prerender")?X.push(e):void 0!==(n=function(e){var t,n,r,i,o;if(void 0===e.projectId||null===e.projectId||""===e.projectId)return;t=[],e.properties.pageEncoding=e.properties.pageEncoding||te.pageEncoding,void 0!==te.gdpr&&(e.properties.gdpr=te.gdpr);te.gdpr_consent&&(e.properties.gdpr_consent=te.gdpr_consent);te.isOathFirstParty&&(e.properties.isOathFirstParty=te.isOathFirstParty);te.us_privacy&&(e.properties.us_privacy=te.us_privacy);te.ytcVersion&&(e.properties.ytcVersion=te.ytcVersion);try{t=t.concat(function(e){var t,n,r,i,o,a;if(!e.pixelId)throw new Error("Mandatory 'pixelId' property is missing");for(t={documentName:"b",documentGroup:"c",url:"f",referrer:"e",pageEncoding:"enc",pixelId:".yp",userEmail:"he",userHashedEmail:"he",gdpr:"gdpr",gdpr_consent:"gdpr_consent",isOathFirstParty:"isOathFirstParty",us_privacy:"us_privacy",ytcVersion:"yv"},a=[],r=0,i=(n=["documentName","pixelId","userEmail","userHashedEmail","documentGroup","url","referrer","pageEncoding","gdpr","gdpr_consent","isOathFirstParty","us_privacy","ytcVersion"]).length;r<i;r+=1)o=n[r],e.hasOwnProperty(o)&&t.hasOwnProperty(o)&&""!==e[o]&&a.push({name:t[o],value:e[o]});var c=!1;try{c=window.self!==window.top}catch(e){c=!0}c&&a.push({name:"isIframe",value:1});var s=e.qstrings;for(var d in s)s.hasOwnProperty(d)&&a.push({name:d,value:s[d]});return a}(e.properties))}catch(e){if("Mandatory 'pixelId' property is missing"===e.message)return}for(i=[],n=0,r=t.length;n<r;n+=1)void 0!==(o=t[n]).name&&void 0!==o.value&&i.push(o.name+"="+encodeURIComponent(o.value));return i=i.join("&"),R(e)+"&"+i}(e))&&((t=document.createElement("img")).className="ywa-"+e.projectId,t.style.display="none",t.src=n,q(e.projectId,"isPageViewTracked",!0),null===document.body?document.addEventListener("DOMContentLoaded",function(e){document.body.appendChild(t)}):document.body.appendChild(t))}var W=[],ee=[],te={pixelConfigs:{},emails:{}};function ne(){ae(),ce(),i=!1,o=!1,y(),h(),function(){for(var e in te.pixelConfigs)P(e);oe(w)}()}function re(){if(ie())for(;W.length;)try{W.shift()()}catch(e){}}function ie(){return i&&o&&0===_&&te.emailsAreHashed}function oe(e){ie()?e():W.push(e)}var ae=function(){Y={},function(){if(_=0,O={use1stPartyCookies:!1},window.dotq)for(var e=0;e<window.dotq.length;e++)if(void 0!==window.dotq[e]&&void 0!==window.dotq[e].properties&&void 0!==window.dotq[e].properties.pixelId&&void 0===te.pixelConfigs[window.dotq[e].properties.pixelId]){var t=window.dotq[e].properties;_++,te.pixelConfigs[t.pixelId]={},C(t)}}(),te.ytcVersion="1.9.2",Object.keys(te.emails).length>0?function(){var e=[];for(var t in te.emails){var n=N(te.emails[t]);e.push(n)}if(window.msCrypto){F(e,[])}else Promise.all(e).then(function(e){H(e)})}():te.emailsAreHashed=!0},ce=function(){te.pageEncoding=document.charset||document.characterSet||"",void 0!==Y.pageEncoding&&""!==Y.pageEncoding&&(te.pageEncoding=Y.pageEncoding),te.isInPrerenderPhase=se("prerender"),document.attachEvent&&(document.attachEvent("webkitvisibilitychange",de),document.attachEvent("visibilitychange",de)),document.addEventListener&&(document.addEventListener("webkitvisibilitychange",de,!1),document.addEventListener("visibilitychange",de,!1))};function se(e){return("visible"===e||"hidden"===e||"preview"===e||"prerender"===e)&&(void 0!==document.webkitVisibilityState&&document.webkitVisibilityState===e||void 0!==document.visibilityState&&document.visibilityState===e)}var de=function(){var e,t;if(te.isInPrerenderPhase){for(e=0,t=ee.length;e<t;e+=1)Q(ee[e]);te.isInPrerenderPhase=!1}};window.YAHOO=window.YAHOO||{},window.YAHOO.ywa=window.YAHOO.ywa||{},void 0===window.YAHOO.ywa.I13N&&(window.YAHOO.ywa.I13N=(r(),ne(),{modules:{},version:"1.9.2",fireBeacon:K}))}]);