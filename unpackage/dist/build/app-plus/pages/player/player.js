!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=8)}([function(t,e,n){"use strict";var r=n(5),o=n(2),i=n(7);var u=Object(i.a)(o.default,r.b,r.c,!1,null,null,"4f3c0c23",!1,r.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(n(6).default,this.options.style):Object.assign(this.options.style,n(6).default)}).call(u),e.default=u.exports},function(t,e){t.exports={"@VERSION":2}},function(t,e,n){"use strict";var r=n(3),o=n.n(r);e.default=o.a},function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=!1,r=!1,o={data:function(){return{width:"750rpx",height:"421.875rpx",src:"https://vsp-stream.s3.ap-northeast-1.amazonaws.com/HLS/raw/SpaceX.m3u8",autoplay:!0,muted:!1,controls:!0}},onReady:function(){this.videosize()},destroyed:function(){uni.$off("start",this.onStart),uni.$off("stop",this.onStop),uni.$off("play",this.onplay),uni.$off("pause",this.onpause),uni.$off("muted",this.onMuted),uni.$off("controls",this.onControls)},created:function(){uni.$on("start",this.onStart),uni.$on("stop",this.onStop),uni.$on("play",this.onplay),uni.$on("pause",this.onpause),uni.$on("muted",this.onMuted),uni.$on("controls",this.onControls)},methods:{onStart:function(){this.$refs.player.start()},onStop:function(){this.$refs.player.stop()},onplay:function(){this.$refs.player.play()},onpause:function(){this.$refs.player.pause()},onMuted:function(t){this.muted=t},onControls:function(t){this.controls=t},videosize:function(){var e=(n=uni.getSystemInfoSync()).windowWidth<n.windowHeight;r=r||t();var o=n.windowWidth,i=e?.5625*o:n.windowHeight,u=e?n.statusBarHeight+49:0;this.width=o+"px",this.height=i+"px",this.top=u+"px",r.setStyle({width:this.width,height:this.height,top:this.top})}}};e.default=o}).call(this,n(12).default)},function(t,e){t.exports={".player-wrapper":{"":{position:["fixed",0,0,0],left:[0,0,0,0],right:[0,0,0,0],top:[0,0,0,0],bottom:[0,0,0,0],backgroundColor:["#000000",0,0,0]}},".button":{"":{marginTop:["20",0,0,2]}},"@VERSION":2}},function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var r=function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:["player-wrapper"]},[e("mlyplayer",{ref:"player",style:{width:this.width,height:this.height},attrs:{src:this.src,autoplay:this.autoplay,muted:this.muted,controls:this.controls}})],1)},o=[]},function(t,e,n){"use strict";n.r(e);var r=n(4),o=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e.default=o.a},function(t,e,n){"use strict";function r(t,e,n,r,o,i,u,s,a,f){var l,p="function"==typeof t?t.options:t;if(a){p.components||(p.components={});var c=Object.prototype.hasOwnProperty;for(var d in a)c.call(a,d)&&!c.call(p.components,d)&&(p.components[d]=a[d])}if(f&&("function"==typeof f.beforeCreate&&(f.beforeCreate=[f.beforeCreate]),(f.beforeCreate||(f.beforeCreate=[])).unshift((function(){this[f.__module]=this})),(p.mixins||(p.mixins=[])).push(f)),e&&(p.render=e,p.staticRenderFns=n,p._compiled=!0),r&&(p.functional=!0),i&&(p._scopeId="data-v-"+i),u?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(u)},p._ssrRegister=l):o&&(l=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),l)if(p.functional){p._injectStyles=l;var y=p.render;p.render=function(t,e){return l.call(e),y(t,e)}}else{var h=p.beforeCreate;p.beforeCreate=h?[].concat(h,l):[l]}return{exports:t,options:p}}n.d(e,"a",(function(){return r}))},function(t,e,n){"use strict";n.r(e);n(9),n(11);var r=n(0);r.default.mpType="page",r.default.route="pages/player/player",r.default.el="#root",new Vue(r.default)},function(t,e,n){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(n(10).default,Vue.prototype.__$appStyle__)},function(t,e,n){"use strict";n.r(e);var r=n(1),o=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e.default=o.a},function(t,e){if("undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(n){return e.resolve(t()).then((function(){return n}))}),(function(n){return e.resolve(t()).then((function(){throw n}))}))}),"undefined"!=typeof uni&&uni&&uni.requireGlobal){var n=uni.requireGlobal();ArrayBuffer=n.ArrayBuffer,Int8Array=n.Int8Array,Uint8Array=n.Uint8Array,Uint8ClampedArray=n.Uint8ClampedArray,Int16Array=n.Int16Array,Uint16Array=n.Uint16Array,Int32Array=n.Int32Array,Uint32Array=n.Uint32Array,Float32Array=n.Float32Array,Float64Array=n.Float64Array,BigInt64Array=n.BigInt64Array,BigUint64Array=n.BigUint64Array}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return uni.getSubNVueById(plus.webview.currentWebview().id)}}]);