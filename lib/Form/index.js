(function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports["one-ui-element"]=t():e["one-ui-element"]=t()})(self,(function(){return function(){"use strict";var e=[,function(e,t,n){function o(e,t,n,o,r,i,s,f){var u,a="function"===typeof e?e.options:e;if(t&&(a.render=t,a.staticRenderFns=n,a._compiled=!0),o&&(a.functional=!0),i&&(a._scopeId="data-v-"+i),s?(u=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},a._ssrRegister=u):r&&(u=f?function(){r.call(this,(a.functional?this.parent:this).$root.$options.shadowRoot)}:r),u)if(a.functional){a._injectStyles=u;var c=a.render;a.render=function(e,t){return u.call(t),c(e,t)}}else{var d=a.beforeCreate;a.beforeCreate=d?[].concat(d,u):[u]}return{exports:e,options:a}}n.d(t,{Z:function(){return o}})}],t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}!function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}();var o={};return function(){n.d(o,{default:function(){return a}});var e=function(){var e=this,t=e._self._c;return t("div",{staticClass:"vt-item"},[e._t("default")],2)},t=[],r={name:"vtForm",provide(){return{Form:this}},props:{model:{type:Object,required:!0},labelWidth:{type:String,default:"80px"}}},i=r,s=n(1),f=(0,s.Z)(i,e,t,!1,null,"6d66d9ff",null),u=f.exports;u.install=function(e){e.component(u.name,u)};var a=u}(),o=o["default"],o}()}));
//# sourceMappingURL=index.js.map