!function(e){var n={};function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(a,r,function(n){return e[n]}.bind(null,r));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=15)}([function(e,n,t){var a=t(2);e.exports=function(e){var n=new XMLHttpRequest;n.onreadystatechange=function(){4==this.readyState&&a(JSON.parse(this.responseText))},n.open("Get","http://localhost:4000"),n.send()}},function(e,n){e.exports=function(){var e=document.getElementById("content");e.innerHTML="";let n=document.createElement("div");n.className="w3-bar w3-blue";let t=document.createElement("a");t.className="w3-bar-item w3-button",t.href="#",t.innerHTML="Home",n.append(t);let a=document.createElement("a");a.className="w3-bar-item w3-button",a.href="#/avengers",a.innerHTML="Heroes",n.append(a),e.append(n);let r=document.createElement("a");r.className="w3-bar-item w3-button",r.href="#/avengers/spiderman",r.innerHTML="Spiderman",n.append(r),e.append(n);let c=document.createElement("a");c.className="w3-bar-item w3-button",c.href="#/avengers/wolverine",c.innerHTML="Wolverine",n.append(c),e.append(n);let o=document.createElement("a");o.className="w3-bar-item w3-button",o.href="#/avengers/ironman",o.innerHTML="Ironman",n.append(o),e.append(n);let i=document.createElement("a");i.className="w3-bar-item w3-button",i.href="#/avengers/daredevil",i.innerHTML="Daredevil",n.append(i);let s=document.createElement("a");s.className="w3-bar-item w3-button",s.href="#/avengers/hulk",s.innerHTML="Hulk",n.append(s),e.append(n)}},function(e,n){e.exports=function(e){for(var n=0;n<e.length;n++){var t=document.createElement("div");t.className="w3-card-4",t.style.width="50%";let i=document.createElement("a");i.className="w3-bar-item w3-button","Iron Man"==e[n].name?i.href="#/avengers/ironman":"Wolverine"==e[n].name?i.href="#/avengers/wolverine":"Daredevil"==e[n].name?i.href="#/avengers/daredevil":"Hulk"==e[n].name?i.href="#/avengers/hulk":"Spider-Man"==e[n].name&&(i.href="#/avengers/spiderman"),i.innerHTML="Get Details";var a=document.createElement("img");a.style.width="100%","Iron Man"==e[n].name?a.src="/assets/ironman.jpg":"Wolverine"==e[n].name?a.src="/assets/wolverine.jpg":"Daredevil"==e[n].name?a.src="/assets/daredevil.jpg":"Hulk"==e[n].name?a.src="/assets/incredible-hulk.png":"Spider-Man"==e[n].name&&(a.src="/assets/spiderman.jpg"),t.append(a);var r=document.createElement("div");r.className="w3-container w3-center",t.append(r);var c=document.createElement("p");c.innerHTML=e[n].name;var o=document.createElement("p");o.innerHTML=e[n].description,t.append(c),t.append(o),t.append(i),content.append(t)}}},function(e,n){var t=function(e){for(var n=0;n<e.length;n++)if("Wolverine"==e[n].name){var t=document.createElement("div");t.className="w3-card-4",t.style.width="50%";var a=document.createElement("button");a.innerHTML="Get Details",a.className="w3-button w3-black";var r=document.createElement("img");r.style.width="100%",r.src="/assets/wolverine.jpg",t.append(r);var c=document.createElement("div");c.className="w3-container w3-center",t.append(c);var o=document.createElement("p");o.innerHTML=e[n].name;var i=document.createElement("p");i.innerHTML=e[n].description,t.append(o),t.append(i),content.append(t);var s=document.createElement("p");s.innerHTML="Actual Name:  James Howlett";var p=document.createElement("p");p.innerHTML="First Appearance: (As Wolverine, cameo) Incredible Hulk #180 (1974), (as Wolverine, fully) Incredible Hulk #181 (1974), (as Patch) Marvel Comics Presents #1 (1988), (as Weapon X) Marvel Comics Presents #72 (1991), (as Death) Astonishing X-Men #1 (1999",t.append(s),t.append(p),content.append(t)}};e.exports=function(){var e=new XMLHttpRequest;e.onreadystatechange=function(){4==this.readyState&&t(JSON.parse(this.responseText))},e.open("Get","http://localhost:4000"),e.send()}},function(e,n,t){var a=t(1),r=(t(0),t(3));e.exports=function(){a(),r()}},function(e,n){var t=function(e){for(var n=0;n<e.length;n++)if("Daredevil"==e[n].name){var t=document.createElement("div");t.className="w3-card-4",t.style.width="50%";var a=document.createElement("button");a.innerHTML="Get Details",a.className="w3-button w3-black";var r=document.createElement("img");r.style.width="100%",r.src="/assets/daredevil.jpg",t.append(r);var c=document.createElement("div");c.className="w3-container w3-center",t.append(c);var o=document.createElement("p");o.innerHTML=e[n].name;var i=document.createElement("p");i.innerHTML=e[n].description,t.append(o),t.append(i),content.append(t);var s=document.createElement("p");s.innerHTML="Actual Name:  Matthew Michael Murdock";var p=document.createElement("p");p.innerHTML="First Appearance:  Daredevil #1 (1964)",t.append(s),t.append(p),content.append(t)}};e.exports=function(){var e=new XMLHttpRequest;e.onreadystatechange=function(){4==this.readyState&&t(JSON.parse(this.responseText))},e.open("Get","http://localhost:4000"),e.send()}},function(e,n,t){var a=t(1),r=(t(0),t(5));e.exports=function(){a(),r()}},function(e,n){var t=function(e){for(var n=0;n<e.length;n++)if("Iron Man"==e[n].name){var t=document.createElement("div");t.className="w3-card-4",t.style.width="50%";var a=document.createElement("button");a.innerHTML="Get Details",a.className="w3-button w3-black";var r=document.createElement("img");r.style.width="100%",r.src="/assets/ironman.jpg",t.append(r);var c=document.createElement("div");c.className="w3-container w3-center",t.append(c);var o=document.createElement("p");o.innerHTML=e[n].name;var i=document.createElement("p");i.innerHTML=e[n].description,t.append(o),t.append(i),content.append(t);var s=document.createElement("p");s.innerHTML='Actual Name:  Anthony Edward "Tony" Stark';var p=document.createElement("p");p.innerHTML="First Appearance: Tales of Suspense #39 (1963)",t.append(s),t.append(p),content.append(t)}};e.exports=function(e){var n=new XMLHttpRequest;n.onreadystatechange=function(){4==this.readyState&&t(JSON.parse(this.responseText))},n.open("Get","http://localhost:4000"),n.send()}},function(e,n,t){var a=t(1),r=(t(0),t(7));e.exports=function(){a(),r()}},function(e,n,t){t(2);var a=function(e){for(var n=0;n<e.length;n++)if("Hulk"==e[n].name){var t=document.createElement("div");t.className="w3-card-4",t.style.width="50%";var a=document.createElement("button");a.innerHTML="Get Details",a.className="w3-button w3-black";var r=document.createElement("img");r.style.width="100%",r.src="/assets/incredible-hulk.png",t.append(r);var c=document.createElement("div");c.className="w3-container w3-center",t.append(c);var o=document.createElement("p");o.innerHTML=e[n].name;var i=document.createElement("p");i.innerHTML=e[n].description,t.append(o),t.append(i),content.append(t);var s=document.createElement("p");s.innerHTML="Actual Name: Bruce Banner";var p=document.createElement("p");p.innerHTML="First Appearance: Incredible Hulk #1 (1962)",t.append(s),t.append(p),content.append(t)}};e.exports=function(){var e=new XMLHttpRequest;e.onreadystatechange=function(){4==this.readyState&&a(JSON.parse(this.responseText))},e.open("Get","http://localhost:4000"),e.send()}},function(e,n,t){var a=t(1),r=(t(0),t(9));e.exports=function(){a(),r()}},function(e,n){var t=function(e){for(var n=0;n<e.length;n++)if("Spider-Man"==e[n].name){var t=document.createElement("div");t.className="w3-card-4",t.style.width="50%";var a=document.createElement("button");a.innerHTML="Get Details",a.className="w3-button w3-black";var r=document.createElement("img");r.style.width="100%",r.src="/assets/spiderman.jpg",t.append(r);var c=document.createElement("div");c.className="w3-container w3-center",t.append(c);var o=document.createElement("p");o.innerHTML=e[n].name;var i=document.createElement("p");i.innerHTML=e[n].description,t.append(o),t.append(i),content.append(t);var s=document.createElement("p");s.innerHTML="Actual Name: Peter Benjamin Parker";var p=document.createElement("p");p.innerHTML="First Appearance: Amazing Fantasy #15 (1962)",t.append(s),t.append(p),content.append(t)}};e.exports=function(e){var n=new XMLHttpRequest;n.onreadystatechange=function(){4==this.readyState&&t(JSON.parse(this.responseText))},n.open("Get","http://localhost:4000"),n.send()}},function(e,n,t){var a=t(1),r=(t(0),t(11));e.exports=function(){a(),r()}},function(e,n,t){var a=t(1),r=t(0);e.exports=function(){a(),r()}},function(e,n,t){var a=t(1);t(0);e.exports=function(){a()}},function(e,n,t){var a=new Navigo("http:///localhost:3000/#",!0,"#"),r=t(14),c=t(13),o=t(12),i=t(10),s=t(8),p=t(6),d=t(4);a.on(function(){document.getElementById("content").innerHMTL="",r()}).on({avengers:function(){document.getElementById("content").innerHMTL="",c()},"avengers/spiderman":function(){document.getElementById("content").innerHMTL="",o()},"avengers/hulk":function(){document.getElementById("content").innerHMTL="",i()},"avengers/wolverine":function(){document.getElementById("content").innerHMTL="",d()},"avengers/daredevil":function(){document.getElementById("content").innerHMTL="",p()},"avengers/ironman":function(){document.getElementById("content").innerHMTL="",s()}}).resolve()}]);