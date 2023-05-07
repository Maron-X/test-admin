(window.webpackJsonp=window.webpackJsonp||[]).push([[24,4,5,6,7,11,12,13,15,17,18],{325:function(e,t,n){"use strict";n.r(t);var o={},l=n(15),component=Object(l.a)(o,(function(){var e=this;return(0,e._self._c)("div",{on:{click:function(t){return e.$emit("click")}}},[e._m(0)])}),[function(){var e=this._self._c;return e("div",{staticClass:"button rounded-full w-8 h-8 bg-error cursor-pointer flex justify-center items-center",attrs:{title:"Remove this item"}},[e("i",{staticClass:"fa-solid fa-trash"})])}],!1,null,null,null);t.default=component.exports},327:function(e,t,n){"use strict";n.r(t);var o=n(15),component=Object(o.a)({},(function(){var e=this,t=e._self._c;return t("div",{staticClass:"w-full text-left mt-0 px-6"},[t("p",{staticClass:"text-xl font-bold border-b border-gray-400 pb-4"},[e._t("title")],2),e._v(" "),t("div",{staticClass:"my-5 mx-auto flex flex-wrap"},[e._t("content")],2)])}),[],!1,null,null,null);t.default=component.exports},330:function(e,t,n){"use strict";n.r(t);var o={props:["label"]},l=n(15),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"w-full flex justify-center mr-2 my-4"},[t("button",{staticClass:"btn btn-primary",on:{click:function(t){return e.$emit("click")}}},[t("i",{staticClass:"fa-solid fa-save mr-2"}),e._v("\n    "+e._s(e.label))])])}),[],!1,null,null,null);t.default=component.exports},332:function(e,t,n){"use strict";n.r(t);var o={props:{text:{Type:String,default:""},buttonText:{Type:String,default:""}}},l=n(15),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"mt-2 mb-4 w-full border-b border-gray-500 font-bold pb-2 flex justify-between"},[t("h3",{staticClass:"text-lg w-4/5"},[e._v(e._s(e.text))]),e._v(" "),e.buttonText?t("button",{staticClass:"btn btn-sm rounded-full btn-accent",on:{click:function(t){return e.$emit("click")}}},[t("i",{staticClass:"fa-solid fa-plus mr-2"}),e._v(" "+e._s(e.buttonText)+"\n  ")]):e._e()])}),[],!1,null,null,null);t.default=component.exports},335:function(e,t,n){"use strict";n.r(t);var o={props:["showModal","index"],methods:{deleteItem:function(){this.$emit("delete",this.index)}}},l=n(15),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-screen flex",class:e.showModal?"":"hidden",staticStyle:{background:"rgba(0, 0, 0, 0.8)","z-index":"9999999999"},attrs:{id:"deleteModal",tabindex:"-1","aria-hidden":"true"}},[t("div",{staticClass:"relative p-4 w-full max-w-md h-full md:h-auto mt-40 md:mt-0"},[t("div",{staticClass:"relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5"},[t("button",{staticClass:"text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover: rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white",attrs:{type:"button"},on:{click:function(t){return e.$emit("cancel")}}},[t("svg",{staticClass:"w-5 h-5",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"}})]),e._v(" "),t("span",{staticClass:"sr-only"},[e._v("Close modal")])]),e._v(" "),t("svg",{staticClass:"text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"fill-rule":"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z","clip-rule":"evenodd"}})]),e._v(" "),t("p",{staticClass:"mb-4 text-gray-500 dark:text-gray-300"},[e._v("\n        Are you sure you want to delete this item?\n      ")]),e._v(" "),t("div",{staticClass:"flex justify-center items-center space-x-4"},[t("button",{staticClass:"py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover: focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600",attrs:{"data-modal-toggle":"deleteModal",type:"button"},on:{click:function(t){return e.$emit("cancel")}}},[e._v("\n          No, cancel\n        ")]),e._v(" "),t("button",{staticClass:"py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900",attrs:{type:"submit"},on:{click:e.deleteItem}},[e._v("\n          Yes, Delete\n        ")])])])])])}),[],!1,null,null,null);t.default=component.exports},336:function(e,t,n){"use strict";n.r(t);var o={props:["type"]},l=n(15),component=Object(l.a)(o,(function(){var e=this;return(0,e._self._c)("div",{staticClass:"w-full text-center text-3xl font-bold text-gray-300 h-32 pt-8 pb-8 border-b border-gray-400 mb-2"},[e._v("\n  No "+e._s(e.type)+" yet to display\n")])}),[],!1,null,null,null);t.default=component.exports},338:function(e,t,n){var o=n(3),l=n(206).values;o({target:"Object",stat:!0},{values:function(e){return l(e)}})},339:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n(111);var l=n(137),r=n(85);function c(e){return function(e){if(Array.isArray(e))return Object(o.a)(e)}(e)||Object(l.a)(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},342:function(e,t,n){"use strict";n.r(t);n(70);var o={props:["index","education"],data:function(){return{editIcon:!1,year:"",school:"",degree:""}},mounted:function(){var e=this;setTimeout((function(){e.updateLocalData()}),1e3)},methods:{updateLocalData:function(){this.year=this.education.year,this.school=this.education.school,this.degree=this.education.degree},updateYear:function(e){this.year=e.target.value,this.updateEducation()},updateDegree:function(e){this.degree=e.target.value,this.updateEducation()},updateSchool:function(e){this.school=e.target.value,this.updateEducation()},updateEducation:function(){var e={year:this.year,degree:this.degree,school:this.school,id:this.education.id};this.$emit("updateEducation",{index:this.index,education:e})}}},l=n(15),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"w-full flex flex-wrap pb-2 border-b border-gray-400 mb-3 relative"},[t("RemoveButton",{staticClass:"absolute right-2 -top-2",on:{click:function(t){return e.$emit("removeEducation",e.index)}}}),e._v(" "),t("div",{staticClass:"mb-3 w-full md:w-1/2 md:pr-4"},[t("label",{staticClass:"block mb-2 text-sm font-medium",attrs:{for:"name"}},[e._v("Duration")]),e._v(" "),t("input",{staticClass:"text-sm rounded-lg input input-bordered block w-full p-2.5 mr-3",attrs:{type:"name",id:"name",placeholder:"PersonX"},domProps:{value:e.education.year},on:{change:function(t){return e.updateYear(t)}}})]),e._v(" "),t("div",{staticClass:"mb-3 w-full md:w-1/2 md:pr-4"},[t("label",{staticClass:"block mb-2 text-sm font-medium",attrs:{for:"name"}},[e._v("Degree")]),e._v(" "),t("input",{staticClass:"text-sm rounded-lg input input-bordered block w-full p-2.5",attrs:{type:"name",id:"name",placeholder:"PersonX"},domProps:{value:e.education.degree},on:{change:function(t){return e.updateDegree(t)}}})]),e._v(" "),t("div",{staticClass:"mb-3 w-full"},[t("label",{staticClass:"block mb-2 text-sm font-medium",attrs:{for:"name"}},[e._v("School")]),e._v(" "),t("input",{staticClass:"text-sm rounded-lg input input-bordered block w-full p-2.5",attrs:{type:"name",id:"name",placeholder:"PersonX"},domProps:{value:e.education.school},on:{change:function(t){return e.updateSchool(t)}}})])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{RemoveButton:n(325).default})},343:function(e,t,n){"use strict";n.r(t);n(70);var o={props:["index","experience"],data:function(){return{editIcon:!1,year:"",title:"",company:""}},mounted:function(){var e=this;setTimeout((function(){e.updateLocalData()}),1e3)},methods:{updateLocalData:function(){this.year=this.experience.year,this.title=this.experience.title,this.company=this.experience.company},updateYear:function(e){this.year=e.target.value,this.updateExperience()},updateCompany:function(e){this.company=e.target.value,this.updateExperience()},updateTitle:function(e){this.title=e.target.value,this.updateExperience()},updateExperience:function(){var e={year:this.year,company:this.company,title:this.title,id:this.experience.id};this.$emit("updateExperience",{index:this.index,experience:e})}}},l=n(15),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"w-full flex flex-wrap pb-2 border-b border-gray-400 mb-3 relative"},[t("RemoveButton",{staticClass:"absolute right-2 -top-2",on:{click:function(t){return e.$emit("removeExperience",e.index)}}}),e._v(" "),t("div",{staticClass:"mb-3 w-full md:w-1/2 md:pr-4"},[t("label",{staticClass:"block mb-2 text-sm font-medium",attrs:{for:"name"}},[e._v("Duration")]),e._v(" "),t("input",{staticClass:"text-sm rounded-lg input input-bordered block w-full p-2.5",attrs:{type:"name",id:"name",placeholder:"PersonX"},domProps:{value:e.experience.year},on:{change:function(t){return e.updateYear(t)}}})]),e._v(" "),t("div",{staticClass:"mb-3 w-full md:w-1/2"},[t("label",{staticClass:"block mb-2 text-sm font-medium",attrs:{for:"name"}},[e._v("Company")]),e._v(" "),t("input",{staticClass:"text-sm rounded-lg input input-bordered block w-full p-2.5",attrs:{type:"name",id:"name",placeholder:"PersonX"},domProps:{value:e.experience.company},on:{change:function(t){return e.updateCompany(t)}}})]),e._v(" "),t("div",{staticClass:"mb-3 w-full"},[t("label",{staticClass:"block mb-2 text-sm font-medium",attrs:{for:"name"}},[e._v("Job Title")]),e._v(" "),t("input",{staticClass:"text-sm rounded-lg input input-bordered block w-full p-2.5",attrs:{type:"name",id:"name",placeholder:"PersonX"},domProps:{value:e.experience.title},on:{change:function(t){return e.updateTitle(t)}}})])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{RemoveButton:n(325).default})},344:function(e,t,n){"use strict";n.r(t);n(70);var o={props:["index","skill"],data:function(){return{editIcon:!1,title:"",percentage:""}},mounted:function(){var e=this;setTimeout((function(){e.updateLocalData()}),1e3)},methods:{updateLocalData:function(){this.title=this.skill.title,this.percentage=this.skill.percentage},updateTitle:function(e){this.title=e.target.value,this.updateSkills()},updatePercentage:function(e){this.percentage=e.target.value,this.updateSkills()},updateSkills:function(){var e={title:this.title,percentage:this.percentage,id:this.skill.id};this.$emit("updateSkills",{index:this.index,skills:e})}}},l=n(15),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"w-full flex flex-wrap pb-2 border-b border-gray-400 mb-3 relative"},[t("RemoveButton",{staticClass:"absolute right-2 -top-2",on:{click:function(t){return e.$emit("removeSkills",e.index)}}}),e._v(" "),t("div",{staticClass:"mb-3 w-full md:w-4/5 md:pr-4"},[t("label",{staticClass:"block mb-2 text-sm font-medium",attrs:{for:"title"}},[e._v("Title")]),e._v(" "),t("input",{staticClass:"text-sm rounded-lg input input-bordered block w-full p-2.5",attrs:{type:"title",id:"title",placeholder:"PersonX"},domProps:{value:e.skill.title},on:{change:function(t){return e.updateTitle(t)}}})]),e._v(" "),t("div",{staticClass:"mb-3 w-full md:w-1/5"},[t("label",{staticClass:"block mb-2 text-sm font-medium",attrs:{for:"title"}},[e._v("Percentage")]),e._v(" "),t("input",{staticClass:"text-sm rounded-lg input input-bordered block w-full p-2.5",attrs:{type:"title",id:"title",placeholder:"PersonX"},domProps:{value:e.skill.percentage},on:{change:function(t){return e.updatePercentage(t)}}})])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{RemoveButton:n(325).default})},345:function(e,t,n){"use strict";n.r(t);n(70);var o={props:["index","knowlege"],data:function(){return{editIcon:!1,title:""}},mounted:function(){var e=this;setTimeout((function(){e.updateLocalData()}),1e3)},methods:{updateLocalData:function(){this.title=this.knowlege.title},updateTitle:function(e){this.title=e.target.value,this.updateKnowleges()},updateKnowleges:function(){var e={title:this.title,id:this.knowlege.id};this.$emit("updateKnowleges",{index:this.index,knowlege:e})}}},l=n(15),component=Object(l.a)(o,(function(){var e,t=this,n=t._self._c;return n("div",{staticClass:"w-full flex flex-wrap pb-2 border-b border-gray-400 mb-3 relative"},[n("RemoveButton",{staticClass:"absolute right-2 -top-2",on:{click:function(e){return t.$emit("removeKnowleges",t.index)}}}),t._v(" "),n("div",{staticClass:"mb-3 w-full"},[n("label",{staticClass:"block mb-2 text-sm font-medium",attrs:{for:"title"}},[t._v("Title")]),t._v(" "),n("input",{staticClass:"text-sm rounded-lg input input-bordered block w-full p-2.5",attrs:{type:"title",id:"title",placeholder:"PersonX"},domProps:{value:null===(e=t.knowlege)||void 0===e?void 0:e.title},on:{change:function(e){return t.updateTitle(e)}}})])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{RemoveButton:n(325).default})},358:function(e,t,n){"use strict";n.r(t);n(30),n(48),n(32),n(49);var o=n(339),l=n(24);n(38),n(9),n(39),n(338),n(71),n(50);function r(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):r(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={layout:"panel",beforeMount:function(){this.$store.dispatch("fetchFromCollection",{name:"education",setter:"updateEducation"}),this.$store.dispatch("fetchFromCollection",{name:"experience",setter:"updateExperience"}),this.$store.dispatch("fetchFromCollection",{name:"skills",setter:"updateSkills"}),this.$store.dispatch("fetchFromCollection",{name:"knowleges",setter:"updateKnowleges"}),this.$store.dispatch("fetchFromCollection",{name:"skillColors",setter:"updateSkillColors"})},asyncData:function(e){var t=e.$fire,n=e.redirect;t.auth.currentUser||(console.log("logenIn already"),n("/"))},data:function(){return{emptyEducation:{year:"",school:"",degree:""},emptyExperience:{year:"",title:"",company:""},emptySkills:{title:"",percentage:""},emptyKnowlege:{title:""},showEducationDeleteModal:!1,showExperienceDeleteModal:!1,showSkillsDeleteModal:!1,showKnowlegesDeleteModal:!1,indexEducationToDelete:0,indexExperienceToDelete:0,indexSkillsToDelete:0,indexKnowlegesToDelete:0}},methods:{addNewEducation:function(){this.lastStoreElementFilled("education")&&this.addNewElementToStore("education")},updateEducation:function(e){var t=e.index,n=e.education;this.updateType({index:t,array:n},"education")},removeEducation:function(e){this.removeTypeIndex(e,"education")},addNewExperience:function(){this.lastStoreElementFilled("experience")&&this.addNewElementToStore("experience")},updateExperience:function(e){var t=e.index,n=e.experience;this.updateType({index:t,array:n},"experience")},removeExperience:function(e){this.removeTypeIndex(e,"experience")},addNewSkills:function(){this.lastStoreElementFilled("skills")&&this.addNewElementToStore("skills")},updateSkills:function(e){var t=e.index,n=e.skills;this.updateType({index:t,array:n},"skills")},removeSkills:function(e){this.removeTypeIndex(e,"skills")},addNewKnowlege:function(){this.lastStoreElementFilled("knowleges")&&this.addNewElementToStore("knowleges")},updateKnowleges:function(e){var t=e.index,n=e.knowlege;this.updateType({index:t,array:n},"knowleges")},removeKnowleges:function(e){this.removeTypeIndex(e,"knowleges")},removeTypeIndex:function(e,t){var n=this.cloneStoreArray(t);n=n.filter((function(t,i){return i!=e})),console.log("index: ",e);var o=this.capitalizeFirstLetter(t);this.$store.dispatch("update".concat(o),n),this.closeDeleteConfirm()},updateType:function(e,t){var n=e.index,o=e.array,l=this.cloneStoreArray(t);l[n]=c({},o);var r=this.capitalizeFirstLetter(t);this.$store.dispatch("update".concat(r),l)},lastStoreElementFilled:function(e){var t=this.$store.getters["".concat(e,"Getter")];console.log("storedArray: ",t);var n=c({},t[t.length-1]);if(Object.keys(n).length)for(var o=0;o<Object.values(n).length;o++){var element=Object.values(n)[o];if(console.log("element: ",element),!element)return!1}return!0},addNewElementToStore:function(e){var t=this.capitalizeFirstLetter(e);this.$store.dispatch("update".concat(t),[].concat(Object(o.a)(this.$store.getters["".concat(e,"Getter")]),[this.getEmptyObject(e)]))},getEmptyObject:function(e){switch(e){case"education":return this.emptyEducation;case"experience":return this.emptyExperience;case"skills":return this.emptySkills;case"knowleges":return this.emptyKnowlege}},capitalizeFirstLetter:function(e){return e.charAt(0).toUpperCase()+e.slice(1)},cloneStoreArray:function(e){for(var t=this.$store.getters["".concat(e,"Getter")],n=[],i=0;i<t.length;i++)n[i]=t[i];return n},showEducationDeleteConfirm:function(e){this.indexEducationToDelete=e,this.showEducationDeleteModal=!0},showExperienceDeleteConfirm:function(e){this.indexExperienceToDelete=e,this.showExperienceDeleteModal=!0},showSkillsDeleteConfirm:function(e){this.indexSkillsToDelete=e,this.showSkillsDeleteModal=!0},showKnowlegesDeleteConfirm:function(e){this.indexKnowlegesToDelete=e,this.showKnowlegesDeleteModal=!0},closeDeleteConfirm:function(){this.showEducationDeleteModal=!1,this.showExperienceDeleteModal=!1,this.showSkillsDeleteModal=!1,this.showKnowlegesDeleteModal=!1}}},f=n(15),component=Object(f.a)(d,(function(){var e=this,t=e._self._c;return t("PageLayout",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Resume")]},proxy:!0},{key:"content",fn:function(){return[t("SubTitle",{attrs:{text:"Education",buttonText:"Add"},on:{click:e.addNewEducation}}),e._v(" "),e._l(e.$store.getters.educationGetter,(function(n,o){return t("EducationInputs",{key:"ed"+o,attrs:{index:o,education:n},on:{updateEducation:e.updateEducation,removeEducation:e.showEducationDeleteConfirm}})})),e._v(" "),t("DeleteConfirm",{attrs:{index:e.indexEducationToDelete,showModal:e.showEducationDeleteModal},on:{delete:e.removeEducation,cancel:e.closeDeleteConfirm}}),e._v(" "),e.$store.getters.educationGetter.length?e._e():t("NoDataFound",{attrs:{type:"education"}}),e._v(" "),t("SubTitle",{attrs:{text:"Experience",buttonText:"Add"},on:{click:e.addNewExperience}}),e._v(" "),e._l(e.$store.getters.experienceGetter,(function(n,o){return t("ExperienceInputs",{key:"ex"+o,attrs:{index:o,experience:n},on:{updateExperience:e.updateExperience,removeExperience:e.showExperienceDeleteConfirm}})})),e._v(" "),t("DeleteConfirm",{attrs:{index:e.indexExperienceToDelete,showModal:e.showExperienceDeleteModal},on:{delete:e.removeExperience,cancel:e.closeDeleteConfirm}}),e._v(" "),e.$store.getters.experienceGetter.length?e._e():t("NoDataFound",{attrs:{type:"experiences"}}),e._v(" "),t("SubTitle",{attrs:{text:"Skills",buttonText:"Add"},on:{click:e.addNewSkills}}),e._v(" "),e._l(e.$store.getters.skillsGetter,(function(n,o){return t("SkillsInputs",{key:"sk"+o,attrs:{index:o,skill:n},on:{updateSkills:e.updateSkills,removeSkills:e.showSkillsDeleteConfirm}})})),e._v(" "),t("DeleteConfirm",{attrs:{index:e.indexSkillsToDelete,showModal:e.showSkillsDeleteModal},on:{delete:e.removeSkills,cancel:e.closeDeleteConfirm}}),e._v(" "),e.$store.getters.skillsGetter.length?e._e():t("NoDataFound",{attrs:{type:"skills"}}),e._v(" "),t("SubTitle",{attrs:{text:"Knowlege",buttonText:"Add"},on:{click:e.addNewKnowlege}}),e._v(" "),e._l(e.$store.getters.knowlegesGetter,(function(n,o){return t("KnowlegeInputs",{key:"kn"+o,attrs:{index:o,knowlege:n},on:{updateKnowleges:e.updateKnowleges,removeKnowleges:e.showKnowlegesDeleteConfirm}})})),e._v(" "),t("DeleteConfirm",{attrs:{index:e.indexKnowlegesToDelete,showModal:e.showKnowlegesDeleteModal},on:{delete:e.removeKnowleges,cancel:e.closeDeleteConfirm}}),e._v(" "),e.$store.getters.knowlegesGetter.length?e._e():t("NoDataFound",{attrs:{type:"knowleges"}}),e._v(" "),t("ActionButton",{attrs:{label:"Save"},on:{click:function(t){return e.$store.dispatch("updateFirebase","education-experience-skills-knowleges")}}})]},proxy:!0}])})}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{SubTitle:n(332).default,EducationInputs:n(342).default,DeleteConfirm:n(335).default,NoDataFound:n(336).default,ExperienceInputs:n(343).default,SkillsInputs:n(344).default,KnowlegeInputs:n(345).default,ActionButton:n(330).default,PageLayout:n(327).default})}}]);