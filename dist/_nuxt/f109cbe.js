(window.webpackJsonp=window.webpackJsonp||[]).push([[16,15],{325:function(t,e,n){"use strict";n.r(e);var c={},r=n(15),component=Object(r.a)(c,(function(){var t=this;return(0,t._self._c)("div",{on:{click:function(e){return t.$emit("click")}}},[t._m(0)])}),[function(){var t=this._self._c;return t("div",{staticClass:"button rounded-full w-8 h-8 bg-error cursor-pointer flex justify-center items-center",attrs:{title:"Remove this item"}},[t("i",{staticClass:"fa-solid fa-trash"})])}],!1,null,null,null);e.default=component.exports},346:function(t,e,n){"use strict";n.r(e);n(30),n(47);var c=n(337),r={props:["index","service"],data:function(){return{editIcon:!1,title:"",description:"",icon:""}},mounted:function(){this.title=this.service.title,this.description=this.service.description,this.icon=this.service.icon},methods:{chooseImage:function(t){t.target.nextElementSibling.click()},updateImage:function(t){var e=this;if(t.target.files.length){var n=t.target.files[0],r=Object(c.b)(),o=Object(c.c)(r,"icon-".concat(this.getTimestampInSeconds()));Object(c.d)(o,n).then((function(t){Object(c.a)(o).then((function(t){e.icon=t,e.updateService()}))}))}},updateTitle:function(t){this.title=t.target.value,this.updateService()},updateDescription:function(t){this.description=t.target.value,this.updateService()},updateService:function(){var t={title:this.title,description:this.description,icon:this.icon,id:this.service.id};this.$emit("updateService",{index:this.index,service:t})},getTimestampInSeconds:function(){return Math.floor(Date.now()/1e3)}}},o=n(15),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full flex flex-wrap pb-2 border-b border-gray-400 mb-3 relative"},[e("RemoveButton",{staticClass:"absolute right-0 lg:right-10",on:{click:function(e){return t.$emit("removeService",t.index)}}}),t._v(" "),e("div",{staticClass:"flex md:w-1/2"},[e("div",{staticClass:"mb-3 w-full"},[e("label",{staticClass:"block mb-2 text-sm font-medium",attrs:{for:"name"}},[t._v("Title ")]),t._v(" "),e("input",{staticClass:"text-sm rounded-lg input input-bordered block w-full p-2.5",attrs:{type:"name",id:"name",placeholder:"PersonX"},domProps:{value:t.service.title},on:{change:function(e){return t.updateTitle(e)}}})]),t._v(" "),e("div",{staticClass:"mb-2 mx-4"},[e("label",{staticClass:"block mb-2 text-sm font-medium",attrs:{for:"name"}},[t._v("Icon")]),t._v(" "),e("div",{staticClass:"w-full text-center"},[e("img",{staticClass:"avatar w-10 h-10 mb-2 mx-auto cursor-pointer",staticStyle:{"object-fit":"contain"},attrs:{src:t.service.icon,alt:""},on:{click:t.chooseImage}}),t._v(" "),e("input",{staticClass:"absolute top-0 left-0 z-0 opacity-0",attrs:{accept:"image/png, image/gif, image/jpeg",type:"file",name:"",id:""},on:{change:t.updateImage}})])])]),t._v(" "),e("div",{staticClass:"mb-3 w-full"},[e("label",{staticClass:"block mb-2 text-sm font-medium",attrs:{for:"name"}},[t._v("Description")]),t._v(" "),e("textarea",{staticClass:"leading-loose text-sm rounded-lg textarea textarea-bordered block w-full p-2.5",attrs:{rows:"2",type:"name",id:"name",placeholder:"PersonX"},domProps:{value:t.service.description},on:{change:function(e){return t.updateDescription(e)}}})])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{RemoveButton:n(325).default})}}]);