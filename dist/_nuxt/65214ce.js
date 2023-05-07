(window.webpackJsonp=window.webpackJsonp||[]).push([[25,4,5,12,13,15,16,18],{325:function(t,e,r){"use strict";r.r(e);var n={},o=r(15),component=Object(o.a)(n,(function(){var t=this;return(0,t._self._c)("div",{on:{click:function(e){return t.$emit("click")}}},[t._m(0)])}),[function(){var t=this._self._c;return t("div",{staticClass:"button rounded-full w-8 h-8 bg-error cursor-pointer flex justify-center items-center",attrs:{title:"Remove this item"}},[t("i",{staticClass:"fa-solid fa-trash"})])}],!1,null,null,null);e.default=component.exports},327:function(t,e,r){"use strict";r.r(e);var n=r(15),component=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full text-left mt-0 px-6"},[e("p",{staticClass:"text-xl font-bold border-b border-gray-400 pb-4"},[t._t("title")],2),t._v(" "),e("div",{staticClass:"my-5 mx-auto flex flex-wrap"},[t._t("content")],2)])}),[],!1,null,null,null);e.default=component.exports},330:function(t,e,r){"use strict";r.r(e);var n={props:["label"]},o=r(15),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full flex justify-center mr-2 my-4"},[e("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.$emit("click")}}},[e("i",{staticClass:"fa-solid fa-save mr-2"}),t._v("\n    "+t._s(t.label))])])}),[],!1,null,null,null);e.default=component.exports},332:function(t,e,r){"use strict";r.r(e);var n={props:{text:{Type:String,default:""},buttonText:{Type:String,default:""}}},o=r(15),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mt-2 mb-4 w-full border-b border-gray-500 font-bold pb-2 flex justify-between"},[e("h3",{staticClass:"text-lg w-4/5"},[t._v(t._s(t.text))]),t._v(" "),t.buttonText?e("button",{staticClass:"btn btn-sm rounded-full btn-accent",on:{click:function(e){return t.$emit("click")}}},[e("i",{staticClass:"fa-solid fa-plus mr-2"}),t._v(" "+t._s(t.buttonText)+"\n  ")]):t._e()])}),[],!1,null,null,null);e.default=component.exports},335:function(t,e,r){"use strict";r.r(e);var n={props:["showModal","index"],methods:{deleteItem:function(){this.$emit("delete",this.index)}}},o=r(15),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-screen flex",class:t.showModal?"":"hidden",staticStyle:{background:"rgba(0, 0, 0, 0.8)","z-index":"9999999999"},attrs:{id:"deleteModal",tabindex:"-1","aria-hidden":"true"}},[e("div",{staticClass:"relative p-4 w-full max-w-md h-full md:h-auto mt-40 md:mt-0"},[e("div",{staticClass:"relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5"},[e("button",{staticClass:"text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover: rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white",attrs:{type:"button"},on:{click:function(e){return t.$emit("cancel")}}},[e("svg",{staticClass:"w-5 h-5",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"}})]),t._v(" "),e("span",{staticClass:"sr-only"},[t._v("Close modal")])]),t._v(" "),e("svg",{staticClass:"text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z","clip-rule":"evenodd"}})]),t._v(" "),e("p",{staticClass:"mb-4 text-gray-500 dark:text-gray-300"},[t._v("\n        Are you sure you want to delete this item?\n      ")]),t._v(" "),e("div",{staticClass:"flex justify-center items-center space-x-4"},[e("button",{staticClass:"py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover: focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600",attrs:{"data-modal-toggle":"deleteModal",type:"button"},on:{click:function(e){return t.$emit("cancel")}}},[t._v("\n          No, cancel\n        ")]),t._v(" "),e("button",{staticClass:"py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900",attrs:{type:"submit"},on:{click:t.deleteItem}},[t._v("\n          Yes, Delete\n        ")])])])])])}),[],!1,null,null,null);e.default=component.exports},336:function(t,e,r){"use strict";r.r(e);var n={props:["type"]},o=r(15),component=Object(o.a)(n,(function(){var t=this;return(0,t._self._c)("div",{staticClass:"w-full text-center text-3xl font-bold text-gray-300 h-32 pt-8 pb-8 border-b border-gray-400 mb-2"},[t._v("\n  No "+t._s(t.type)+" yet to display\n")])}),[],!1,null,null,null);e.default=component.exports},338:function(t,e,r){var n=r(3),o=r(206).values;n({target:"Object",stat:!0},{values:function(t){return o(t)}})},339:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(111);var o=r(137),l=r(85);function c(t){return function(t){if(Array.isArray(t))return Object(n.a)(t)}(t)||Object(o.a)(t)||Object(l.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},346:function(t,e,r){"use strict";r.r(e);r(30),r(47);var n=r(337),o={props:["index","service"],data:function(){return{editIcon:!1,title:"",description:"",icon:""}},mounted:function(){this.title=this.service.title,this.description=this.service.description,this.icon=this.service.icon},methods:{chooseImage:function(t){t.target.nextElementSibling.click()},updateImage:function(t){var e=this;if(t.target.files.length){var r=t.target.files[0],o=Object(n.b)(),l=Object(n.c)(o,"icon-".concat(this.getTimestampInSeconds()));Object(n.d)(l,r).then((function(t){Object(n.a)(l).then((function(t){e.icon=t,e.updateService()}))}))}},updateTitle:function(t){this.title=t.target.value,this.updateService()},updateDescription:function(t){this.description=t.target.value,this.updateService()},updateService:function(){var t={title:this.title,description:this.description,icon:this.icon,id:this.service.id};this.$emit("updateService",{index:this.index,service:t})},getTimestampInSeconds:function(){return Math.floor(Date.now()/1e3)}}},l=r(15),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full flex flex-wrap pb-2 border-b border-gray-400 mb-3 relative"},[e("RemoveButton",{staticClass:"absolute right-0 lg:right-10",on:{click:function(e){return t.$emit("removeService",t.index)}}}),t._v(" "),e("div",{staticClass:"flex md:w-1/2"},[e("div",{staticClass:"mb-3 w-full"},[e("label",{staticClass:"block mb-2 text-sm font-medium",attrs:{for:"name"}},[t._v("Title ")]),t._v(" "),e("input",{staticClass:"text-sm rounded-lg input input-bordered block w-full p-2.5",attrs:{type:"name",id:"name",placeholder:"PersonX"},domProps:{value:t.service.title},on:{change:function(e){return t.updateTitle(e)}}})]),t._v(" "),e("div",{staticClass:"mb-2 mx-4"},[e("label",{staticClass:"block mb-2 text-sm font-medium",attrs:{for:"name"}},[t._v("Icon")]),t._v(" "),e("div",{staticClass:"w-full text-center"},[e("img",{staticClass:"avatar w-10 h-10 mb-2 mx-auto cursor-pointer",staticStyle:{"object-fit":"contain"},attrs:{src:t.service.icon,alt:""},on:{click:t.chooseImage}}),t._v(" "),e("input",{staticClass:"absolute top-0 left-0 z-0 opacity-0",attrs:{accept:"image/png, image/gif, image/jpeg",type:"file",name:"",id:""},on:{change:t.updateImage}})])])]),t._v(" "),e("div",{staticClass:"mb-3 w-full"},[e("label",{staticClass:"block mb-2 text-sm font-medium",attrs:{for:"name"}},[t._v("Description")]),t._v(" "),e("textarea",{staticClass:"leading-loose text-sm rounded-lg textarea textarea-bordered block w-full p-2.5",attrs:{rows:"2",type:"name",id:"name",placeholder:"PersonX"},domProps:{value:t.service.description},on:{change:function(e){return t.updateDescription(e)}}})])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{RemoveButton:r(325).default})},359:function(t,e,r){"use strict";r.r(e);r(39),r(48),r(32),r(49);var n=r(339),o=r(24);r(338),r(30),r(47),r(71),r(207),r(9),r(38);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={beforeMount:function(){this.$store.dispatch("fetchFromCollection",{name:"services",setter:"updateServices"})},mounted:function(){},layout:"panel",data:function(){return{services:[],showDeleteModal:!1,indexToRemove:null}},methods:{addNewService:function(){console.log("add New Service");var t=this.$store.getters.servicesGetter,e=c({},t[t.length-1]);console.log("lastService: ",e),(!Object.values(e).length||e.title&&e.description)&&this.$store.dispatch("updateServices",[].concat(Object(n.a)(this.$store.getters.servicesGetter),[{title:"",icon:"",description:""}]))},cloneStoreArray:function(){for(var t=this.$store.getters.servicesGetter,e=[],i=0;i<t.length;i++)e[i]=t[i];return e},updateService:function(t){var e=t.index,r=t.service,n=this.cloneStoreArray();n[e]=c({},r),this.$store.dispatch("updateServices",n)},removeService:function(t){var e=this.cloneStoreArray(),r=e.find((function(e,i){return i==t})).id||null;console.log("id: ",r),e=e.filter((function(e,i){return i!=t})),this.$store.dispatch("updateServices",e),this.closeDeleteConfirm(),r&&this.$fire.firestore.collection("services").doc(r).delete()},showDeleteConfirm:function(t){this.indexToRemove=t,this.showDeleteModal=!0},closeDeleteConfirm:function(){this.showDeleteModal=!1}}},f=r(15),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("PageLayout",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("What I do!")]},proxy:!0},{key:"content",fn:function(){return[e("SubTitle",{attrs:{text:"Services",buttonText:"Add"},on:{click:t.addNewService}}),t._v(" "),t._l(t.$store.getters.servicesGetter,(function(r,n){return e("ServiceInputs",{key:n,attrs:{index:n,service:r},on:{updateService:t.updateService,removeService:t.showDeleteConfirm}})})),t._v(" "),e("DeleteConfirm",{attrs:{index:t.indexToRemove,showModal:t.showDeleteModal},on:{delete:t.removeService,cancel:t.closeDeleteConfirm}}),t._v(" "),t.$store.getters.servicesGetter.length?t._e():e("NoDataFound",{attrs:{type:"services"}}),t._v(" "),e("ActionButton",{attrs:{label:"Save"},on:{click:function(e){return t.$store.dispatch("updateFirebase","services")}}})]},proxy:!0}])})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SubTitle:r(332).default,ServiceInputs:r(346).default,DeleteConfirm:r(335).default,NoDataFound:r(336).default,ActionButton:r(330).default,PageLayout:r(327).default})}}]);