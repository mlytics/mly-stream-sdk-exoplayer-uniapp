(this["webpackJsonp"]=this["webpackJsonp"]||[]).push([["app-service"],{"0de9":function(t,e,n){"use strict";function r(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function o(){return"string"===typeof __channelId__&&__channelId__}function i(t,e){switch(r(e)){case"Function":return"function() { [native code] }";default:return e}}function u(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];console[t].apply(console,n)}function s(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var u=e.shift();if(o())return e.push(e.pop().replace("at ","uni-app:///")),console[u].apply(console,e);var s=e.map((function(t){var e=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===e||"[object array]"===e)try{t="---BEGIN:JSON---"+JSON.stringify(t,i)+"---END:JSON---"}catch(o){t=e}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=r(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t})),a="";if(s.length>1){var c=s.pop();a=s.join("---COMMA---"),0===c.indexOf(" at ")?a+=c:a+="---COMMA---"+c}else a=s[0];console[u](a)}n.r(e),n.d(e,"log",(function(){return u})),n.d(e,"default",(function(){return s}))},"223f":function(t,e,n){if("undefined"===typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(n){return e.resolve(t()).then((function(){return n}))}),(function(n){return e.resolve(t()).then((function(){throw n}))}))}),"undefined"!==typeof uni&&uni&&uni.requireGlobal){var r=uni.requireGlobal();ArrayBuffer=r.ArrayBuffer,Int8Array=r.Int8Array,Uint8Array=r.Uint8Array,Uint8ClampedArray=r.Uint8ClampedArray,Int16Array=r.Int16Array,Uint16Array=r.Uint16Array,Int32Array=r.Int32Array,Uint32Array=r.Uint32Array,Float32Array=r.Float32Array,Float64Array=r.Float64Array,BigInt64Array=r.BigInt64Array,BigUint64Array=r.BigUint64Array}uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),__definePage("pages/index/index",(function(){return Vue.extend(n("65aa").default)}))},4679:function(t,e,n){"use strict";n.r(e);var r=n("f717"),o=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=o.a},"4e1d":function(t,e,n){"use strict";var r=n("4ea4"),o=r(n("9523"));n("223f");var i=r(n("bcfd")),u=r(n("8bbf"));function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}n("f0c3"),u.default.config.productionTip=!1,i.default.mpType="app";var a=new u.default(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){(0,o.default)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},i.default));a.$mount()},"4ea4":function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}},t.exports.__esModule=!0,t.exports["default"]=t.exports},"65aa":function(t,e,n){"use strict";n.r(e);var r=n("f81b"),o=n("8cf8");for(var i in o)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(i);var u=n("f0c5"),s=Object(u["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],void 0);e["default"]=s.exports},7037:function(t,e){function n(e){return t.exports=n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports["default"]=t.exports,n(e)}t.exports=n,t.exports.__esModule=!0,t.exports["default"]=t.exports},"8bbf":function(t,e){t.exports=Vue},"8cf8":function(t,e,n){"use strict";n.r(e);var r=n("d2f1"),o=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=o.a},9523:function(t,e,n){var r=n("a395");t.exports=function(t,e,n){return e=r(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},t.exports.__esModule=!0,t.exports["default"]=t.exports},a395:function(t,e,n){var r=n("7037")["default"],o=n("e50d");t.exports=function(t){var e=o(t,"string");return"symbol"===r(e)?e:String(e)},t.exports.__esModule=!0,t.exports["default"]=t.exports},bcfd:function(t,e,n){"use strict";n.r(e);var r=n("4679");for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);var i=n("f0c5"),u=Object(i["a"])(r["default"],void 0,void 0,!1,null,null,null,!1,void 0,void 0);e["default"]=u.exports},d2f1:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=uni.requireNativePlugin("UniMlyDriver"),o={data:function(){return{muted:!1,controls:!0}},onLoad:function(){r&&r.initialize({clientID:"cegh8d9j11u91ba1u600"})},onHide:function(){this.pauseClick()},methods:{startClick:function(){uni.$emit("start")},stopClick:function(){uni.$emit("stop")},playClick:function(){uni.$emit("play")},pauseClick:function(){uni.$emit("pause")},mutedClick:function(t){this.muted=t,uni.$emit("muted",t)},controlsClick:function(t){this.controls=t,uni.$emit("controls",t)}}};e.default=o},e50d:function(t,e,n){var r=n("7037")["default"];t.exports=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)},t.exports.__esModule=!0,t.exports["default"]=t.exports},f0c3:function(t,e,n){var r=n("7037");uni.addInterceptor({returnValue:function(t){return!t||"object"!==r(t)&&"function"!==typeof t||"function"!==typeof t.then?t:new Promise((function(e,n){t.then((function(t){return t[0]?n(t[0]):e(t[1])}))}))}})},f0c5:function(t,e,n){"use strict";function r(t,e,n,r,o,i,u,s,a,c){var f,l="function"===typeof t?t.options:t;if(a){l.components||(l.components={});var p=Object.prototype.hasOwnProperty;for(var d in a)p.call(a,d)&&!p.call(l.components,d)&&(l.components[d]=a[d])}if(c&&("function"===typeof c.beforeCreate&&(c.beforeCreate=[c.beforeCreate]),(c.beforeCreate||(c.beforeCreate=[])).unshift((function(){this[c.__module]=this})),(l.mixins||(l.mixins=[])).push(c)),e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),u?(f=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(u)},l._ssrRegister=f):o&&(f=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),f)if(l.functional){l._injectStyles=f;var b=l.render;l.render=function(t,e){return f.call(e),b(t,e)}}else{var v=l.beforeCreate;l.beforeCreate=v?[].concat(v,f):[f]}return{exports:t,options:l}}n.d(e,"a",(function(){return r}))},f717:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={onLaunch:function(){t("log","App Launch"," at App.vue:4")},onShow:function(){t("log","App Show"," at App.vue:7")},onHide:function(){t("log","App Hide"," at App.vue:10")}};e.default=n}).call(this,n("0de9")["default"])},f81b:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:t._$s(0,"sc","content"),attrs:{_i:0}},[n("view",{staticClass:t._$s(1,"sc","box"),attrs:{_i:1}},[n("button",{staticClass:t._$s(2,"sc","button"),attrs:{_i:2},on:{click:t.startClick}}),n("button",{staticClass:t._$s(3,"sc","button"),attrs:{_i:3},on:{click:t.stopClick}}),n("button",{staticClass:t._$s(4,"sc","button"),attrs:{_i:4},on:{click:t.pauseClick}}),n("button",{staticClass:t._$s(5,"sc","button"),attrs:{_i:5},on:{click:t.playClick}})]),n("view",{staticClass:t._$s(6,"sc","btn"),attrs:{_i:6}},[n("view",[t._v(t._$s(7,"t0-0",t._s(t.muted)))]),n("view",{staticClass:t._$s(8,"sc","box"),attrs:{_i:8}},[n("button",{staticClass:t._$s(9,"sc","button"),attrs:{_i:9},on:{click:function(e){return t.mutedClick(!0)}}}),n("button",{staticClass:t._$s(10,"sc","button"),attrs:{_i:10},on:{click:function(e){return t.mutedClick(!1)}}})])]),n("view",{staticClass:t._$s(11,"sc","btn"),attrs:{_i:11}},[n("view",[t._v(t._$s(12,"t0-0",t._s(t.controls)))]),n("view",{staticClass:t._$s(13,"sc","box"),attrs:{_i:13}},[n("button",{staticClass:t._$s(14,"sc","button"),attrs:{_i:14},on:{click:function(e){return t.controlsClick(!0)}}}),n("button",{staticClass:t._$s(15,"sc","button"),attrs:{_i:15},on:{click:function(e){return t.controlsClick(!1)}}})])])])},o=[]}},[["4e1d","app-config"]]]);