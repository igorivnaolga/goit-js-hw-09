function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequired7c6=r);var o,u=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,s="object"==typeof t&&t&&t.Object===Object&&t,d="object"==typeof self&&self&&self.Object===Object&&self,p=s||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,y=Math.min,g=function(){return p.Date.now()};function b(e,t,n){var i,r,o,u,a,f,c=0,l=!1,s=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=i,o=r;return i=r=void 0,c=t,u=e.apply(o,n)}function v(e){return c=e,a=setTimeout(x,t),l?p(e):u}function b(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=o}function x(){var e=g();if(b(e))return j(e);a=setTimeout(x,function(e){var n=t-(e-f);return s?y(n,o-(e-c)):n}(e))}function j(e){return a=void 0,d&&i?p(e):(i=r=void 0,u)}function T(){var e=g(),n=b(e);if(i=arguments,r=this,f=e,n){if(void 0===a)return v(f);if(s)return a=setTimeout(x,t),p(f)}return void 0===a&&(a=setTimeout(x,t)),u}return t=w(t)||0,h(n)&&(l=!!n.leading,o=(s="maxWait"in n)?m(w(n.maxWait)||0,t):o,d="trailing"in n?!!n.trailing:d),T.cancel=function(){void 0!==a&&clearTimeout(a),c=0,i=f=r=a=void 0},T.flush=function(){return void 0===a?u:j(g())},T}function h(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function w(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(h(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=h(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var n=f.test(e);return n||c.test(e)?l(e.slice(2),n?2:8):a.test(e)?NaN:+e}o=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return h(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),b(e,t,{leading:i,maxWait:t,trailing:r})};var x=r("iQIUW");const j={},T=document.querySelector(".form");function O(e,t){return new Promise(((n,i)=>{setTimeout((r=>{Math.random()>.3?n({position:e,delay:t}):i({position:e,delay:t})}),t)}))}T.addEventListener("input",e(o)((function(e){"delay"===e.target.name&&(j.delay=+e.target.value);"step"===e.target.name&&(j.step=+e.target.value);"amount"===e.target.name&&(j.amount=+e.target.value)}),500)),T.addEventListener("submit",(function(e){e.preventDefault();for(let e=0;e<j.amount;e+=1){const t=j.delay+j.step*e;O(e+1,t).then((({position:e,delay:t})=>{x.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{x.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)}))}}));
//# sourceMappingURL=03-promises.dd0a1b5e.js.map
