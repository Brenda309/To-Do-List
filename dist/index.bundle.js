"use strict";(self.webpackChunkTo_do_list=self.webpackChunkTo_do_list||[]).push([[826],{424:(e,n,t)=>{t.d(n,{Z:()=>i});var o=t(537),r=t.n(o),a=t(645),c=t.n(a)()(r());c.push([e.id,"body {\n   border-left:3px solid black;\n    border-right:3px solid black;\n    border-top: 20px solid black;\n    border-bottom: 20px solid black;\n    max-width: 500px;\n    margin: auto;\n    \n}\n\n.mylist{\n    display: flex;\n    flex-direction: column;\n    padding: 50px;\n    \n}\n\ninput {\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n  border-bottom-style: hidden;\n  background-color: #eee;\n}\n\n.no-outline:focus {\n  outline: none;\n}\n\nform{\n    border: 2px solid rgb(182, 176, 176);\n}","",{version:3,sources:["webpack://./src/index.css"],names:[],mappings:"AAAA;GACG,2BAA2B;IAC1B,4BAA4B;IAC5B,4BAA4B;IAC5B,+BAA+B;IAC/B,gBAAgB;IAChB,YAAY;;AAEhB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,aAAa;;AAEjB;;AAEA;EACE,wBAAwB;EACxB,0BAA0B;EAC1B,yBAAyB;EACzB,2BAA2B;EAC3B,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf;;AAEA;IACI,oCAAoC;AACxC",sourcesContent:["body {\n   border-left:3px solid black;\n    border-right:3px solid black;\n    border-top: 20px solid black;\n    border-bottom: 20px solid black;\n    max-width: 500px;\n    margin: auto;\n    \n}\n\n.mylist{\n    display: flex;\n    flex-direction: column;\n    padding: 50px;\n    \n}\n\ninput {\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n  border-bottom-style: hidden;\n  background-color: #eee;\n}\n\n.no-outline:focus {\n  outline: none;\n}\n\nform{\n    border: 2px solid rgb(182, 176, 176);\n}"],sourceRoot:""}]);const i=c},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},537:e=>{e.exports=function(e){var n=e[1],t=e[3];if(!t)return n;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(r," */"),c=t.sources.map((function(e){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(e," */")}));return[n].concat(c).concat([a]).join("\n")}return[n].join("\n")}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],d=o.base?s[0]+o.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),A={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(A);else{var f=r(A,o);o.byIndex=i,n.splice(i,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=t(a[c]);n[i].references--}for(var s=o(e,r),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},57:(e,n,t)=>{var o=t(379),r=t.n(o),a=t(795),c=t.n(a),i=t(569),s=t.n(i),d=t(565),l=t.n(d),u=t(216),p=t.n(u),A=t(589),f=t.n(A),b=t(424),m={};m.styleTagTransform=f(),m.setAttributes=l(),m.insert=s().bind(null,"head"),m.domAPI=c(),m.insertStyleElement=p(),r()(b.Z,m),b.Z&&b.Z.locals&&b.Z.locals;const h=document.getElementById("form"),v=[{desc:"microverse recap",completed:!0,index:0},{desc:"reading",completed:!1,index:1},{desc:"exercises",completed:!1,index:0}];for(let e=0;e<v.length;e+=1){const n=document.createElement("input");n.setAttribute("type","checkbox"),n.setAttribute("id","checkbox");const t=document.createElement("label");t.setAttribute("for","checkbox"),t.innerHTML=v[e].desc;const o=document.createElement("br"),r=document.createElement("hr");h.appendChild(r),h.appendChild(o),h.appendChild(n),h.appendChild(t)}}},e=>{e(e.s=57)}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVlzQixHQUNqQixFQUFLdEIsWUFBWXVCLE0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Uby1kby1saXN0Ly4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9Uby1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9Uby1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vVG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9Uby1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9Uby1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL1RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vVG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL1RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9Uby1kby1saXN0Ly4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL1RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICBib3JkZXItbGVmdDozcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yaWdodDozcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci10b3A6IDIwcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1ib3R0b206IDIwcHggc29saWQgYmxhY2s7XFxuICAgIG1heC13aWR0aDogNTAwcHg7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgXFxufVxcblxcbi5teWxpc3R7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDUwcHg7XFxuICAgIFxcbn1cXG5cXG5pbnB1dCB7XFxuICBib3JkZXItdG9wLXN0eWxlOiBoaWRkZW47XFxuICBib3JkZXItcmlnaHQtc3R5bGU6IGhpZGRlbjtcXG4gIGJvcmRlci1sZWZ0LXN0eWxlOiBoaWRkZW47XFxuICBib3JkZXItYm90dG9tLXN0eWxlOiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbn1cXG5cXG4ubm8tb3V0bGluZTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5mb3Jte1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTgyLCAxNzYsIDE3Nik7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7R0FDRywyQkFBMkI7SUFDMUIsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1QiwrQkFBK0I7SUFDL0IsZ0JBQWdCO0lBQ2hCLFlBQVk7O0FBRWhCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhOztBQUVqQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QiwwQkFBMEI7RUFDMUIseUJBQXlCO0VBQ3pCLDJCQUEyQjtFQUMzQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgYm9yZGVyLWxlZnQ6M3B4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmlnaHQ6M3B4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItdG9wOiAyMHB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItYm90dG9tOiAyMHB4IHNvbGlkIGJsYWNrO1xcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIFxcbn1cXG5cXG4ubXlsaXN0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiA1MHB4O1xcbiAgICBcXG59XFxuXFxuaW5wdXQge1xcbiAgYm9yZGVyLXRvcC1zdHlsZTogaGlkZGVuO1xcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBoaWRkZW47XFxuICBib3JkZXItbGVmdC1zdHlsZTogaGlkZGVuO1xcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogaGlkZGVuO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG59XFxuXFxuLm5vLW91dGxpbmU6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuZm9ybXtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDE4MiwgMTc2LCAxNzYpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCAnLi9pbmRleC5jc3MnO1xuXG5jb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0nKTtcbmNvbnN0IHRhc2tzID0gW1xuICB7XG4gICAgZGVzYzogJ21pY3JvdmVyc2UgcmVjYXAnLFxuICAgIGNvbXBsZXRlZDogdHJ1ZSxcbiAgICBpbmRleDogMCxcbiAgfSxcbiAge1xuICAgIGRlc2M6ICdyZWFkaW5nJyxcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgIGluZGV4OiAxLFxuICB9LFxuICB7XG4gICAgZGVzYzogJ2V4ZXJjaXNlcycsXG4gICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICBpbmRleDogMCxcbiAgfSxcbl07XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgY29uc3QgbmV3Q2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBuZXdDaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgbmV3Q2hlY2tib3guc2V0QXR0cmlidXRlKCdpZCcsICdjaGVja2JveCcpO1xuICBjb25zdCBuZXdMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIG5ld0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2NoZWNrYm94Jyk7XG4gIG5ld0xhYmVsLmlubmVySFRNTCA9IHRhc2tzW2ldLmRlc2M7XG4gIGNvbnN0IGxpbmVCcmVhayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG4gIGNvbnN0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpO1xuICBmb3JtLmFwcGVuZENoaWxkKGxpbmUpO1xuICBmb3JtLmFwcGVuZENoaWxkKGxpbmVCcmVhayk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQobmV3Q2hlY2tib3gpO1xuICBmb3JtLmFwcGVuZENoaWxkKG5ld0xhYmVsKTtcbn0iXSwibmFtZXMiOlsiX19fQ1NTX0xPQURFUl9FWFBPUlRfX18iLCJwdXNoIiwibW9kdWxlIiwiaWQiLCJleHBvcnRzIiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImxpc3QiLCJ0b1N0cmluZyIsInRoaXMiLCJtYXAiLCJpdGVtIiwiY29udGVudCIsIm5lZWRMYXllciIsImNvbmNhdCIsImxlbmd0aCIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhIiwiZGVkdXBlIiwic3VwcG9ydHMiLCJsYXllciIsInVuZGVmaW5lZCIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJrIiwiX2siLCJjc3NNYXBwaW5nIiwiYnRvYSIsImJhc2U2NCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJzb3VyY2VNYXBwaW5nIiwic291cmNlVVJMcyIsInNvdXJjZXMiLCJzb3VyY2UiLCJzb3VyY2VSb290Iiwic3R5bGVzSW5ET00iLCJnZXRJbmRleEJ5SWRlbnRpZmllciIsImlkZW50aWZpZXIiLCJyZXN1bHQiLCJtb2R1bGVzVG9Eb20iLCJvcHRpb25zIiwiaWRDb3VudE1hcCIsImlkZW50aWZpZXJzIiwiYmFzZSIsImNvdW50IiwiaW5kZXhCeUlkZW50aWZpZXIiLCJvYmoiLCJjc3MiLCJzb3VyY2VNYXAiLCJyZWZlcmVuY2VzIiwidXBkYXRlciIsImFkZEVsZW1lbnRTdHlsZSIsImJ5SW5kZXgiLCJzcGxpY2UiLCJhcGkiLCJkb21BUEkiLCJ1cGRhdGUiLCJuZXdPYmoiLCJyZW1vdmUiLCJsYXN0SWRlbnRpZmllcnMiLCJuZXdMaXN0IiwiaW5kZXgiLCJuZXdMYXN0SWRlbnRpZmllcnMiLCJfaSIsIl9pbmRleCIsIm1lbW8iLCJpbnNlcnQiLCJzdHlsZSIsInRhcmdldCIsInN0eWxlVGFyZ2V0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwid2luZG93IiwiSFRNTElGcmFtZUVsZW1lbnQiLCJjb250ZW50RG9jdW1lbnQiLCJoZWFkIiwiZSIsImdldFRhcmdldCIsIkVycm9yIiwiYXBwZW5kQ2hpbGQiLCJlbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZXMiLCJhdHRyaWJ1dGVzIiwic3R5bGVFbGVtZW50Iiwibm9uY2UiLCJzZXRBdHRyaWJ1dGUiLCJpbnNlcnRTdHlsZUVsZW1lbnQiLCJzdHlsZVRhZ1RyYW5zZm9ybSIsImFwcGx5IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwicmVtb3ZlU3R5bGVFbGVtZW50Iiwic3R5bGVTaGVldCIsImNzc1RleHQiLCJmaXJzdENoaWxkIiwiY3JlYXRlVGV4dE5vZGUiLCJnZXRFbGVtZW50QnlJZCIsInRhc2tzIiwiZGVzYyIsImNvbXBsZXRlZCIsIm5ld0NoZWNrYm94IiwibmV3TGFiZWwiLCJpbm5lckhUTUwiLCJsaW5lQnJlYWsiLCJsaW5lIl0sInNvdXJjZVJvb3QiOiIifQ==