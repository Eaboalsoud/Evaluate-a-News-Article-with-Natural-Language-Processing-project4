var Client=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";function r(e){e.preventDefault();var t=document.getElementById("url").value;console.log(t);let n=document.getElementById("name").value;if(Client.checkForName(n),Client.ValidURL(t))console.log("::: FORM userURL VALID :::"),console.log("BUILDING REQUEST"),fetch("http://localhost:8081/article",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:t})}).then(e=>e.json()).then(e=>{document.getElementById("polarity").innerHTML=e.polarity,document.getElementById("subjectivity").innerHTML=e.subjectivity,document.getElementById("text").innerHTML=e.text,console.log(e)});else{var r=document.querySelector("section.errors");document.querySelector("section.errors #error").innerHTML="The URL:["+t+"] is not valide. Please enter a valid url",r.style.display="block"}}function o(e){return!!/(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/.test(e)}function u(e){console.log("::: Running checkForName :::",e);if(["Picard","Janeway","Kirk","Archer","Georgiou"].includes(e))return!0}n.r(t),n.d(t,"checkForName",(function(){return u})),n.d(t,"handleSubmit",(function(){return r})),n.d(t,"ValidURL",(function(){return o}));n(0),n(1),n(2),n(3),n(4);console.log(u)}]);