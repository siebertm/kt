(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,n,t){},15:function(e,n,t){},16:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),r=t(4),i=t.n(r),c=(t(12),t(2)),s=t(1),l=t.n(s),u=t(5),f=t.n(u),d=function(e){var n=e.targetTime,t=e.now,o=l.a.duration(n.diff(t));o.asSeconds()<0&&(o=l.a.duration(0));var r=o.asSeconds()<60,i=[o.hours(),o.minutes(),o.seconds()];return a.a.createElement("div",{className:f()("CountdownClock",!!r&&"blinking")},"88:88:88",a.a.createElement("div",{className:"front"},i.map(function(e){return"".concat(e).padStart(2,"0")}).join(":")))},m=function(e){var n=e.targetTime,t=e.onChange;return a.a.createElement("div",{className:"TargetTimeForm"},a.a.createElement("input",{type:"datetime-local",value:n.format("YYYY-MM-DDTHH:mm"),onChange:function(e){return t(l()(e.target.value))}}))};t(14),t(15);var g=function(e,n){var t=Object(o.useRef)();Object(o.useEffect)(function(){t.current=e},[e]),Object(o.useEffect)(function(){if(null!==n){var e=setInterval(function(){t.current&&t.current()},n);return function(){return clearInterval(e)}}},[n])},v=function(){var e=window.localStorage.getItem("targetTime")||"2019-05-11T00:00:00+02:00",n=Object(o.useState)(l()(e)),t=Object(c.a)(n,2),r=t[0],i=t[1],s=Object(o.useState)(l()()),u=Object(c.a)(s,2),f=u[0],v=u[1];return Object(o.useEffect)(function(){window.localStorage.setItem("targetTime",r.toISOString())}),g(function(){v(l()())},1e3),a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement(d,{now:f,targetTime:r})),a.a.createElement("footer",{className:"App-footer"},a.a.createElement(m,{targetTime:r,onChange:i}),a.a.createElement("button",{onClick:function(){return document.body.requestFullscreen({navigationUI:"hide"})}},"fullscreen")))},w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function h(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(a.a.createElement(v,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/kt",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/kt","/service-worker.js");w?(function(e,n){fetch(e).then(function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):h(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):h(n,e)})}}()},6:function(e,n,t){e.exports=t(16)}},[[6,1,2]]]);
//# sourceMappingURL=main.93ca2022.chunk.js.map