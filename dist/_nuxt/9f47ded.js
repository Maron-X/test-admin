(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{334:function(t,e,n){"use strict";n.r(e);var l={props:{storeKey:{Type:String},label:{Type:String},isLink:{Type:Boolean,default:!1}},computed:{inputValue:{get:function(){return this.$store.getters["".concat(this.storeKey,"Getter")]},set:function(t){this.$store.commit("".concat(this.storeKey,"Setter"),t)}}}},r=n(15),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{},[e("div",{staticClass:"mb-3 mx-4 relative"},[e("label",{staticClass:"block mb-2 text-sm font-medium dark:text-blue-400",attrs:{for:"name"}},[t._v(t._s(t.label))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],staticClass:"input input-bordered text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-white",attrs:{type:"name",id:"name",placeholder:"PersonX"},domProps:{value:t.inputValue},on:{input:function(e){e.target.composing||(t.inputValue=e.target.value)}}}),t._v(" "),t.isLink?e("a",{staticClass:"absolute right-3",staticStyle:{top:"38px"},attrs:{href:t.inputValue,target:"_blank",title:"Open link"}},[e("i",{staticClass:"fa-solid fa-square-arrow-up-right",staticStyle:{"font-size":"22px"}})]):t._e()])])}),[],!1,null,null,null);e.default=component.exports}}]);