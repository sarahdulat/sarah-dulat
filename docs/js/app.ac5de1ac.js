(function(t){function a(a){for(var s,n,l=a[0],o=a[1],c=a[2],d=0,v=[];d<l.length;d++)n=l[d],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&v.push(i[n][0]),i[n]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(a);while(v.length)v.shift()();return r.push.apply(r,c||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],s=!0,l=1;l<e.length;l++){var o=e[l];0!==i[o]&&(s=!1)}s&&(r.splice(a--,1),t=n(n.s=e[0]))}return t}var s={},i={app:0},r=[];function n(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=t,n.c=s,n.d=function(t,a,e){n.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,a){if(1&a&&(t=n(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)n.d(e,s,function(a){return t[a]}.bind(null,s));return e},n.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(a,"a",a),a},n.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},n.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=a,l=l.slice();for(var c=0;c<l.length;c++)a(l[c]);var u=o;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),i=e("2f62"),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("Hero"),e("About"),e("Skills"),e("Contact"),e("Footer")],1)},n=[],l=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"sherbert",attrs:{id:"hero"}},[e("div",{staticClass:"container"},[e("h2",{staticClass:"animated hero-fade"},[t._v(" Started with GeoCities now I'm here. ")]),e("h1",{staticClass:"animated hero-fade delay1 no-wrap"},[t._v(" Hi there, my name is"),e("br"),e("span",{staticClass:"name"},[t._v("Sarah Dulat")]),t._v(". ")]),e("h2",{staticClass:"animated hero-fade delay2"},[t._v(" I am a "),e("strong",[t._v("product-minded frontend engineer")]),t._v(" at "),e("a",{attrs:{href:"http://www.brightfunds.org",target:"_blank"}},[t._v("Bright Funds")]),t._v(". Former designer turned developer who loves good UI/UX, clean architecture and VueJS (Stimulus is cool too). ")])])])}],c={name:"Hero"},u=c,d=e("2877"),v=Object(d["a"])(u,l,o,!1,null,null,null),f=v.exports,p=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"about"}},[e("div",{staticClass:"row header"},[e("h1",[t._v("ABOUT")])]),e("div",{staticClass:"container"},[e("div",{staticClass:"row",attrs:{id:"values"}},[e("div",{staticClass:"column"},[e("span",{attrs:{id:"product"}},[t._v("PRODUCT")]),e("span",{attrs:{id:"focused"}},[t._v("FOCUSED")])]),e("div",{staticClass:"column"},[e("span",{attrs:{id:"intuitive"}},[t._v("INTUITIVE")]),e("span",{attrs:{id:"ui"}},[t._v("UI/UX")])]),e("div",{staticClass:"column"},[e("span",{attrs:{id:"functional"}},[t._v("FUNCTIONAL")]),e("span",{attrs:{id:"components"}},[t._v("COMPONENTS")])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"column"},[e("p",[t._v(" As a product-minded developer I am curious about seeking to understand the project in order to see all the options and edge cases before writing any code. From mock-ups to architecture I like organized and consistent structure that won't make a user second guess what to do next. I find there are always ways to speed things up and do regular refactors as I learn and grow. ")]),e("p",[t._v(" I am a digital nomad based in Chicago and Poland, working remotely full-time in beautiful places. My travels since June 2021 have included Malta, Egypt, Croatia, Portugal, Colombia, Mexico, Belize and Kenya. I love to snorkle and am working on getting my diving certification. ")])])])])])}],_={name:"About",mounted:function(){}},m=_,C=Object(d["a"])(m,p,h,!1,null,null,null),b=C.exports,g=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},w=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"skills"}},[e("div",{staticClass:"row header"},[e("h1",[t._v("TOOLBOX")])]),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"column"},[e("div",{staticClass:"skill"},[e("i",{staticClass:"fab fa-2x fa-vuejs"}),t._v(" Vue.js")]),e("div",{staticClass:"skill"},[e("i",{staticClass:"fab fa-2x fa-js"}),t._v(" JavaScript")]),e("div",{staticClass:"skill"},[e("i",{staticClass:"fa fa-2x fa-gem"}),t._v(" Ruby")])]),e("div",{staticClass:"column"},[e("div",{staticClass:"skill"},[e("i",{staticClass:"fab fa-2x fa-sass"}),t._v(" Sass")]),e("div",{staticClass:"skill"},[e("i",{staticClass:"fab fa-2x fa-bootstrap"}),t._v(" Bootstrap")]),e("div",{staticClass:"skill"},[e("img",{attrs:{src:"/assets/d3.png",height:"37",width:"37"}}),t._v(" D3.js")])]),e("div",{staticClass:"column"},[e("div",{staticClass:"skill"},[e("i",{staticClass:"fas fa-2x fa-database"}),t._v(" MySQL")]),e("div",{staticClass:"skill"},[e("i",{staticClass:"fab fa-2x fa-github"}),t._v(" GitHub")]),e("div",{staticClass:"skill"},[e("i",{staticClass:"fab fa-2x fa-git-alt"}),t._v(" Git")])]),e("div",{staticClass:"column",attrs:{alt:"Icons made by Freepik from www.flaticon.com"}},[e("div",{staticClass:"skill"},[e("i",{staticClass:"fi adobe-indesign"}),t._v(" InDesign")]),e("div",{staticClass:"skill"},[e("i",{staticClass:"fi adobe-photoshop"}),t._v(" Photoshop")]),e("div",{staticClass:"skill"},[e("i",{staticClass:"fi adobe-illustrator"}),t._v(" Illustrator")])])])])])}],k={name:"Skills"},y=k,O=Object(d["a"])(y,g,w,!1,null,null,null),x=O.exports,S=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"contact"}},[e("div",{staticClass:"row header"},[e("h1",[t._v("CONTACT")])]),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"column"},[e("div",{staticClass:"photo"},[e("img",{attrs:{src:"/assets/ProfilePic.jpg",alt:"Photo of Sarah Dulat"}})])]),e("div",{staticClass:"column"},[e("h2",[t._v("Thanks for stopping by.")]),e("p",[t._v(" Keep in "),e("a",{attrs:{href:"mailto: sarah@sarahdulat.com",target:"_blank"}},[t._v("touch")]),t._v(", find me on "),e("a",{attrs:{href:"https://www.linkedin.com/in/sarahdulat/",target:"_blank"}},[t._v("LinkedIn")]),t._v(" or take a look at my "),e("a",{attrs:{href:"/assets/SarahDulat.pdf",target:"_blank"}},[t._v("resume"),e("i",{staticClass:"fas fa-file-pdf"})]),t._v(". ")])])])])])}],I={name:"Contact"},E=I,P=Object(d["a"])(E,S,j,!1,null,null,null),T=P.exports,$=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"sherbert",attrs:{id:"footer"}},[e("div",{staticClass:"row"},[e("span",[t._v("© "+t._s(t.currentYear)+" Sarah Dulat")]),t._m(0)])])},F=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"social"},[e("a",{attrs:{href:"https://github.com/sarahdulat",target:"_blank"}},[t._v("GitHub")]),t._v(" | "),e("a",{attrs:{href:"https://www.linkedin.com/in/sarahdulat/",target:"_blank"}},[t._v("LinkedIn")]),t._v(" | "),e("a",{attrs:{href:"https://twitter.com/sarahdulat",target:"_blank"}},[t._v("Twitter")])])}],D={name:"Footer",data:function(){return{currentYear:(new Date).getFullYear()}}},M=D,U=Object(d["a"])(M,$,F,!1,null,null,null),A=U.exports,H={name:"App",components:{Hero:f,About:b,Skills:x,Contact:T,Footer:A}},N=H,B=Object(d["a"])(N,r,n,!1,null,null,null),J=B.exports;s["a"].config.productionTip=!1,new s["a"]({el:"#app",store:L,render:function(t){return t(J)}}).$mount("#app"),s["a"].use(i["a"]);var L=new i["a"].Store({state:{},mutations:{}});a["default"]=new i["a"].Store(L)}});
//# sourceMappingURL=app.ac5de1ac.js.map