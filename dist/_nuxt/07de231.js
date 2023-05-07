(window.webpackJsonp=window.webpackJsonp||[]).push([[23,4,5,12,13,14,15,18],{325:function(t,e,r){"use strict";r.r(e);var o={},n=r(15),component=Object(n.a)(o,(function(){var t=this;return(0,t._self._c)("div",{on:{click:function(e){return t.$emit("click")}}},[t._m(0)])}),[function(){var t=this._self._c;return t("div",{staticClass:"button rounded-full w-8 h-8 bg-error cursor-pointer flex justify-center items-center",attrs:{title:"Remove this item"}},[t("i",{staticClass:"fa-solid fa-trash"})])}],!1,null,null,null);e.default=component.exports},327:function(t,e,r){"use strict";r.r(e);var o=r(15),component=Object(o.a)({},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full text-left mt-0 px-6"},[e("p",{staticClass:"text-xl font-bold border-b border-gray-400 pb-4"},[t._t("title")],2),t._v(" "),e("div",{staticClass:"my-5 mx-auto flex flex-wrap"},[t._t("content")],2)])}),[],!1,null,null,null);e.default=component.exports},330:function(t,e,r){"use strict";r.r(e);var o={props:["label"]},n=r(15),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full flex justify-center mr-2 my-4"},[e("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.$emit("click")}}},[e("i",{staticClass:"fa-solid fa-save mr-2"}),t._v("\n    "+t._s(t.label))])])}),[],!1,null,null,null);e.default=component.exports},332:function(t,e,r){"use strict";r.r(e);var o={props:{text:{Type:String,default:""},buttonText:{Type:String,default:""}}},n=r(15),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mt-2 mb-4 w-full border-b border-gray-500 font-bold pb-2 flex justify-between"},[e("h3",{staticClass:"text-lg w-4/5"},[t._v(t._s(t.text))]),t._v(" "),t.buttonText?e("button",{staticClass:"btn btn-sm rounded-full btn-accent",on:{click:function(e){return t.$emit("click")}}},[e("i",{staticClass:"fa-solid fa-plus mr-2"}),t._v(" "+t._s(t.buttonText)+"\n  ")]):t._e()])}),[],!1,null,null,null);e.default=component.exports},335:function(t,e,r){"use strict";r.r(e);var o={props:["showModal","index"],methods:{deleteItem:function(){this.$emit("delete",this.index)}}},n=r(15),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-screen flex",class:t.showModal?"":"hidden",staticStyle:{background:"rgba(0, 0, 0, 0.8)","z-index":"9999999999"},attrs:{id:"deleteModal",tabindex:"-1","aria-hidden":"true"}},[e("div",{staticClass:"relative p-4 w-full max-w-md h-full md:h-auto mt-40 md:mt-0"},[e("div",{staticClass:"relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5"},[e("button",{staticClass:"text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover: rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white",attrs:{type:"button"},on:{click:function(e){return t.$emit("cancel")}}},[e("svg",{staticClass:"w-5 h-5",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"}})]),t._v(" "),e("span",{staticClass:"sr-only"},[t._v("Close modal")])]),t._v(" "),e("svg",{staticClass:"text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z","clip-rule":"evenodd"}})]),t._v(" "),e("p",{staticClass:"mb-4 text-gray-500 dark:text-gray-300"},[t._v("\n        Are you sure you want to delete this item?\n      ")]),t._v(" "),e("div",{staticClass:"flex justify-center items-center space-x-4"},[e("button",{staticClass:"py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover: focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600",attrs:{"data-modal-toggle":"deleteModal",type:"button"},on:{click:function(e){return t.$emit("cancel")}}},[t._v("\n          No, cancel\n        ")]),t._v(" "),e("button",{staticClass:"py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900",attrs:{type:"submit"},on:{click:t.deleteItem}},[t._v("\n          Yes, Delete\n        ")])])])])])}),[],!1,null,null,null);e.default=component.exports},336:function(t,e,r){"use strict";r.r(e);var o={props:["type"]},n=r(15),component=Object(n.a)(o,(function(){var t=this;return(0,t._self._c)("div",{staticClass:"w-full text-center text-3xl font-bold text-gray-300 h-32 pt-8 pb-8 border-b border-gray-400 mb-2"},[t._v("\n  No "+t._s(t.type)+" yet to display\n")])}),[],!1,null,null,null);e.default=component.exports},338:function(t,e,r){var o=r(3),n=r(206).values;o({target:"Object",stat:!0},{values:function(t){return n(t)}})},339:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var o=r(111);var n=r(137),l=r(85);function c(t){return function(t){if(Array.isArray(t))return Object(o.a)(t)}(t)||Object(n.a)(t)||Object(l.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},341:function(t,e,r){"use strict";r.r(e);r(30),r(47),r(70),r(71);var o=r(337),n={props:["index","work"],data:function(){return{editIcon:!1,category:"",client:"",cover:"",description:"",image:"",skills:[],title:"",url:""}},mounted:function(){var t=this;setTimeout((function(){t.updateLocalData()}),1e3)},methods:{chooseImage:function(t){t.target.nextElementSibling.click()},updateImage:function(t,e){var r=this;if(console.log("update type: ",e),t.target.files.length){var n=t.target.files[0],l=Object(o.b)(),c=Object(o.c)(l,"work-".concat(e,"-").concat(this.getTimestampInSeconds));Object(o.d)(c,n).then((function(t){Object(o.a)(c).then((function(t){"image"==e&&(r.image=t),"cover"==e&&(r.cover=t),r.updateWorks()}))}))}},updateLocalData:function(){this.category=this.work.category,this.cover=this.work.cover,this.client=this.work.client,this.description=this.work.description,this.image=this.work.image,this.skills=this.work.skills,this.title=this.work.title,this.url=this.work.url},updateCategory:function(t){this.category=t.target.value,this.updateWorks()},updateClient:function(t){this.client=t.target.value,this.updateWorks()},updateDescription:function(t){this.description=t.target.value,this.updateWorks()},updateSkills:function(t){this.skills=t.target.value,this.updateWorks()},updateTitle:function(t){this.title=t.target.value,this.updateWorks()},updateUrl:function(t){this.url=t.target.value,this.updateWorks()},updateWorks:function(){var t={category:this.category,cover:this.cover,client:this.client,description:this.description,image:this.image,skills:this.skills,title:this.title,url:this.url,id:this.work.id};console.log("updatedWorks: ",t),this.$emit("updateWorks",{index:this.index,works:t})}},getTimestampInSeconds:function(){return Math.floor(Date.now()/1e3)}},l=r(15),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full flex flex-wrap pb-2 border-bborder-gray-400 mb-3 relative"},[e("RemoveButton",{staticClass:"absolute right-2 -top-2",on:{click:function(e){return t.$emit("removeWorks",t.index)}}}),t._v(" "),e("div",{staticClass:"w-full flex"},[e("div",{staticClass:"w-full md:w-1/2 mb-2 md:pr-4"},[e("label",{staticClass:"block mb-2 text-sm font-medium",attrs:{for:"name"}},[t._v("image")]),t._v(" "),e("div",{staticClass:"w-full text-center"},[e("img",{staticClass:"avatar w-40 h-40 mb-2 mx-auto cursor-pointer",staticStyle:{"object-fit":"contain"},attrs:{src:t.work.image,alt:""},on:{click:t.chooseImage}}),t._v(" "),e("input",{staticClass:"absolute top-0 left-0 z-0 opacity-0",attrs:{accept:"image/png, image/gif, image/jpeg",type:"file",name:"",id:""},on:{change:function(e){return t.updateImage(e,"image")}}})])]),t._v(" "),e("div",{staticClass:"mb-3 w-full md:w-1/2"},[e("label",{staticClass:"block mb-2 text-sm font-medium",attrs:{for:"name"}},[t._v("Cover")]),t._v(" "),e("div",{staticClass:"w-full text-center"},[e("img",{staticClass:"avatar w-40 h-40 mb-2 mx-auto cursor-pointer",staticStyle:{"object-fit":"contain"},attrs:{src:t.work.cover,alt:""},on:{click:t.chooseImage}}),t._v(" "),e("input",{staticClass:"absolute top-0 left-0 z-0 opacity-0",attrs:{accept:"image/png, image/gif, image/jpeg",type:"file",name:"",id:""},on:{change:function(e){return t.updateImage(e,"cover")}}})])])]),t._v(" "),e("div",{staticClass:"mb-3 w-full md:w-1/2 md:pr-4"},[e("label",{staticClass:"block mb-2 text-sm font-medium",attrs:{for:"name"}},[t._v("Category")]),t._v(" "),e("input",{staticClass:"text-sm rounded-lg input input-bordered block w-full p-2.5 mr-3",attrs:{type:"name",id:"name",placeholder:"PersonX"},domProps:{value:t.work.category},on:{change:function(e){return t.updateCategory(e)}}})]),t._v(" "),e("div",{staticClass:"mb-3 md:w-1/2 w-full"},[e("label",{staticClass:"block mb-2 text-sm font-medium",attrs:{for:"name"}},[t._v("title")]),t._v(" "),e("input",{staticClass:"text-sm rounded-lg input input-bordered block w-full p-2.5",attrs:{type:"name",id:"name",placeholder:"PersonX"},domProps:{value:t.work.title},on:{change:function(e){return t.updateTitle(e)}}})]),t._v(" "),e("div",{staticClass:"mb-3 w-full"},[e("label",{staticClass:"block mb-2 text-sm font-medium",attrs:{for:"name"}},[t._v("Client")]),t._v(" "),e("input",{staticClass:"text-sm rounded-lg input input-bordered block w-full p-2.5",attrs:{type:"name",id:"name",placeholder:"PersonX"},domProps:{value:t.work.client},on:{change:function(e){return t.updateClient(e)}}})]),t._v(" "),e("div",{staticClass:"mb-3 w-full"},[e("label",{staticClass:"block mb-2 text-sm font-medium",attrs:{for:"name"}},[t._v("skills")]),t._v(" "),e("input",{staticClass:"text-sm rounded-lg input input-bordered block w-full p-2.5",attrs:{type:"name",id:"name",placeholder:"PersonX"},domProps:{value:t.work.skills},on:{change:function(e){return t.updateSkills(e)}}})]),t._v(" "),e("div",{staticClass:"mb-3 w-full"},[e("label",{staticClass:"block mb-2 text-sm font-medium",attrs:{for:"name"}},[t._v("url")]),t._v(" "),e("input",{staticClass:"text-sm rounded-lg input input-bordered block w-full p-2.5",attrs:{type:"name",id:"name",placeholder:"PersonX"},domProps:{value:t.work.url},on:{change:function(e){return t.updateUrl(e)}}})]),t._v(" "),e("div",{staticClass:"mb-3 w-full"},[e("label",{staticClass:"block mb-2 text-sm font-medium",attrs:{for:"name"}},[t._v("Description")]),t._v(" "),e("textarea",{staticClass:"leading-loose text-sm rounded-lg textarea textarea-bordered block w-full p-2.5",attrs:{rows:"2",type:"name",id:"name",placeholder:"PersonX"},domProps:{value:t.work.description},on:{change:function(e){return t.updateDescription(e)}}})])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{RemoveButton:r(325).default})},357:function(t,e,r){"use strict";r.r(e);r(39),r(48),r(32),r(49);var o=r(339),n=r(24);r(338),r(30),r(47),r(71),r(207),r(9),r(38);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={layout:"panel",beforeMount:function(){this.$store.dispatch("fetchFromCollection",{name:"works",setter:"updateWorks"})},asyncData:function(t){var e=t.$fire,r=t.redirect;e.auth.currentUser||(console.log("logenIn already"),r("/"))},data:function(){return{showDeleteModal:!1,indexToRemove:null}},methods:{addNewWork:function(){console.log("add New Work");var t=this.$store.getters.worksGetter,e=c({},t[t.length-1]);console.log("lastWork: ",e),(!Object.values(e).length||e.title&&e.description)&&this.$store.dispatch("updateWorks",[].concat(Object(o.a)(this.$store.getters.worksGetter),[{category:"",client:"",cover:"",description:"",image:"",skills:"",title:"",url:""}]))},updateWorks:function(t){var e=t.index,r=t.works,o=this.cloneStoreArray();o[e]=c({},r),console.log("updatedWorks from emit:",o),this.$store.dispatch("updateWorks",o)},removeWorks:function(t){var e=this.cloneStoreArray(),r=e.find((function(e,i){return i==t})).id||null;e=e.filter((function(e,i){return i!=t})),this.$store.dispatch("updateWorks",e),this.closeDeleteConfirm(),r&&this.$fire.firestore.collection("works").doc(r).delete()},cloneStoreArray:function(){var t=this.$store.getters.worksGetter;console.log("storedWorks :",t);for(var e=[],i=0;i<t.length;i++)e[i]=t[i];return e},showDeleteConfirm:function(t){this.indexToRemove=t,this.showDeleteModal=!0},closeDeleteConfirm:function(){this.showDeleteModal=!1}}},f=r(15),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("PageLayout",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Show your best!")]},proxy:!0},{key:"content",fn:function(){return[e("SubTitle",{attrs:{text:"Portfolio",buttonText:"Add"},on:{click:t.addNewWork}}),t._v(" "),t._l(t.$store.getters.worksGetter,(function(r,o){return e("PortfolioInputs",{key:o,attrs:{index:o,work:r},on:{updateWorks:t.updateWorks,removeWorks:t.showDeleteConfirm}})})),t._v(" "),e("DeleteConfirm",{attrs:{index:t.indexToRemove,showModal:t.showDeleteModal},on:{delete:t.removeWorks,cancel:t.closeDeleteConfirm}}),t._v(" "),t.$store.getters.worksGetter.length?t._e():e("NoDataFound",{attrs:{type:"portfolio items"}}),t._v(" "),e("ActionButton",{attrs:{label:"Save"},on:{click:function(e){return t.$store.dispatch("updateFirebase","works")}}})]},proxy:!0}])})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SubTitle:r(332).default,PortfolioInputs:r(341).default,DeleteConfirm:r(335).default,NoDataFound:r(336).default,ActionButton:r(330).default,PageLayout:r(327).default})}}]);