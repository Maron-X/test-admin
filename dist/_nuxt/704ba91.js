(window.webpackJsonp=window.webpackJsonp||[]).push([[14,15],{325:function(t,e,l){"use strict";l.r(e);var o={},n=l(15),component=Object(n.a)(o,(function(){var t=this;return(0,t._self._c)("div",{on:{click:function(e){return t.$emit("click")}}},[t._m(0)])}),[function(){var t=this._self._c;return t("div",{staticClass:"button rounded-full w-8 h-8 bg-error cursor-pointer flex justify-center items-center",attrs:{title:"Remove this item"}},[t("i",{staticClass:"fa-solid fa-trash"})])}],!1,null,null,null);e.default=component.exports},341:function(t,e,l){"use strict";l.r(e);l(30),l(47),l(70),l(71);var o=l(337),n={props:["index","work"],data:function(){return{editIcon:!1,category:"",client:"",cover:"",description:"",image:"",skills:[],title:"",url:""}},mounted:function(){var t=this;setTimeout((function(){t.updateLocalData()}),1e3)},methods:{chooseImage:function(t){t.target.nextElementSibling.click()},updateImage:function(t,e){var l=this;if(console.log("update type: ",e),t.target.files.length){var n=t.target.files[0],r=Object(o.b)(),c=Object(o.c)(r,"work-".concat(e,"-").concat(this.getTimestampInSeconds));Object(o.d)(c,n).then((function(t){Object(o.a)(c).then((function(t){"image"==e&&(l.image=t),"cover"==e&&(l.cover=t),l.updateWorks()}))}))}},updateLocalData:function(){this.category=this.work.category,this.cover=this.work.cover,this.client=this.work.client,this.description=this.work.description,this.image=this.work.image,this.skills=this.work.skills,this.title=this.work.title,this.url=this.work.url},updateCategory:function(t){this.category=t.target.value,this.updateWorks()},updateClient:function(t){this.client=t.target.value,this.updateWorks()},updateDescription:function(t){this.description=t.target.value,this.updateWorks()},updateSkills:function(t){this.skills=t.target.value,this.updateWorks()},updateTitle:function(t){this.title=t.target.value,this.updateWorks()},updateUrl:function(t){this.url=t.target.value,this.updateWorks()},updateWorks:function(){var t={category:this.category,cover:this.cover,client:this.client,description:this.description,image:this.image,skills:this.skills,title:this.title,url:this.url,id:this.work.id};console.log("updatedWorks: ",t),this.$emit("updateWorks",{index:this.index,works:t})}},getTimestampInSeconds:function(){return Math.floor(Date.now()/1e3)}},r=l(15),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full flex flex-wrap pb-2 border-bborder-gray-400 mb-3 relative"},[e("RemoveButton",{staticClass:"absolute right-2 -top-2",on:{click:function(e){return t.$emit("removeWorks",t.index)}}}),t._v(" "),e("div",{staticClass:"w-full flex"},[e("div",{staticClass:"w-full md:w-1/2 mb-2 md:pr-4"},[e("label",{staticClass:"block mb-2 text-sm font-medium",attrs:{for:"name"}},[t._v("image")]),t._v(" "),e("div",{staticClass:"w-full text-center"},[e("img",{staticClass:"avatar w-40 h-40 mb-2 mx-auto cursor-pointer",staticStyle:{"object-fit":"contain"},attrs:{src:t.work.image,alt:""},on:{click:t.chooseImage}}),t._v(" "),e("input",{staticClass:"absolute top-0 left-0 z-0 opacity-0",attrs:{accept:"image/png, image/gif, image/jpeg",type:"file",name:"",id:""},on:{change:function(e){return t.updateImage(e,"image")}}})])]),t._v(" "),e("div",{staticClass:"mb-3 w-full md:w-1/2"},[e("label",{staticClass:"block mb-2 text-sm font-medium",attrs:{for:"name"}},[t._v("Cover")]),t._v(" "),e("div",{staticClass:"w-full text-center"},[e("img",{staticClass:"avatar w-40 h-40 mb-2 mx-auto cursor-pointer",staticStyle:{"object-fit":"contain"},attrs:{src:t.work.cover,alt:""},on:{click:t.chooseImage}}),t._v(" "),e("input",{staticClass:"absolute top-0 left-0 z-0 opacity-0",attrs:{accept:"image/png, image/gif, image/jpeg",type:"file",name:"",id:""},on:{change:function(e){return t.updateImage(e,"cover")}}})])])]),t._v(" "),e("div",{staticClass:"mb-3 w-full md:w-1/2 md:pr-4"},[e("label",{staticClass:"block mb-2 text-sm font-medium",attrs:{for:"name"}},[t._v("Category")]),t._v(" "),e("input",{staticClass:"text-sm rounded-lg input input-bordered block w-full p-2.5 mr-3",attrs:{type:"name",id:"name",placeholder:"PersonX"},domProps:{value:t.work.category},on:{change:function(e){return t.updateCategory(e)}}})]),t._v(" "),e("div",{staticClass:"mb-3 md:w-1/2 w-full"},[e("label",{staticClass:"block mb-2 text-sm font-medium",attrs:{for:"name"}},[t._v("title")]),t._v(" "),e("input",{staticClass:"text-sm rounded-lg input input-bordered block w-full p-2.5",attrs:{type:"name",id:"name",placeholder:"PersonX"},domProps:{value:t.work.title},on:{change:function(e){return t.updateTitle(e)}}})]),t._v(" "),e("div",{staticClass:"mb-3 w-full"},[e("label",{staticClass:"block mb-2 text-sm font-medium",attrs:{for:"name"}},[t._v("Client")]),t._v(" "),e("input",{staticClass:"text-sm rounded-lg input input-bordered block w-full p-2.5",attrs:{type:"name",id:"name",placeholder:"PersonX"},domProps:{value:t.work.client},on:{change:function(e){return t.updateClient(e)}}})]),t._v(" "),e("div",{staticClass:"mb-3 w-full"},[e("label",{staticClass:"block mb-2 text-sm font-medium",attrs:{for:"name"}},[t._v("skills")]),t._v(" "),e("input",{staticClass:"text-sm rounded-lg input input-bordered block w-full p-2.5",attrs:{type:"name",id:"name",placeholder:"PersonX"},domProps:{value:t.work.skills},on:{change:function(e){return t.updateSkills(e)}}})]),t._v(" "),e("div",{staticClass:"mb-3 w-full"},[e("label",{staticClass:"block mb-2 text-sm font-medium",attrs:{for:"name"}},[t._v("url")]),t._v(" "),e("input",{staticClass:"text-sm rounded-lg input input-bordered block w-full p-2.5",attrs:{type:"name",id:"name",placeholder:"PersonX"},domProps:{value:t.work.url},on:{change:function(e){return t.updateUrl(e)}}})]),t._v(" "),e("div",{staticClass:"mb-3 w-full"},[e("label",{staticClass:"block mb-2 text-sm font-medium",attrs:{for:"name"}},[t._v("Description")]),t._v(" "),e("textarea",{staticClass:"leading-loose text-sm rounded-lg textarea textarea-bordered block w-full p-2.5",attrs:{rows:"2",type:"name",id:"name",placeholder:"PersonX"},domProps:{value:t.work.description},on:{change:function(e){return t.updateDescription(e)}}})])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{RemoveButton:l(325).default})}}]);