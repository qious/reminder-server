webpackJsonp([1],{100:function(t,i,e){e(90);var a=e(10)(e(48),e(106),"data-v-426c7dda",null);t.exports=a.exports},101:function(t,i,e){e(89);var a=e(10)(e(49),e(105),"data-v-29302146",null);t.exports=a.exports},102:function(t,i,e){e(92);var a=e(10)(e(50),e(108),"data-v-b6a120fa",null);t.exports=a.exports},103:function(t,i,e){e(93);var a=e(10)(e(51),e(109),"data-v-d6722e82",null);t.exports=a.exports},104:function(t,i,e){e(91);var a=e(10)(e(52),e(107),"data-v-66479dfd",null);t.exports=a.exports},105:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"births"},[e("filter-bar",{model:{value:t.filter,callback:function(i){t.filter=i},expression:"filter"}}),t._v(" "),t.loading?e("div",{staticClass:"weui-loadmore"},[e("i",{staticClass:"weui-loading"}),t._v(" "),e("span",{staticClass:"weui-loadmore__tips"},[t._v("加载中...")])]):t.filteredItems&&t.filteredItems.length?e("div",{staticClass:"weui-panel weui-panel_access"},[e("div",{staticClass:"weui-panel__bd"},t._l(t.filteredItems,function(i){return e("router-link",{key:i.birthId,staticClass:"weui-media-box weui-media-box_appmsg",attrs:{to:{name:"detail",params:{birthId:i.birthId},query:{bgColor:i.bgColor}}}},[e("div",{staticClass:"weui-media-box__hd",style:{"background-color":i.bgColor}},[e("span",[t._v(t._s(i.lastWord))])]),t._v(" "),e("div",{staticClass:"weui-media-box__bd"},[e("h4",{staticClass:"weui-media-box__title"},[e("span",[t._v(t._s(i.title))]),t._v(" "),e("span",{staticClass:"countdown"},[i.countdown?e("span",[t._v(t._s(i.countdown))]):e("span",[t._v("今")]),t._v(" "),e("span",[t._v("天")])])]),t._v(" "),e("ul",{staticClass:"weui-media-box__info"},["SOLAR"===i.type?e("li",{staticClass:"weui-media-box__info__meta"},[t._v("\n              "+t._s(i.month+"月"+i.day+"日")+"\n            ")]):t._e(),t._v(" "),"LUNAR"===i.type?e("li",{staticClass:"weui-media-box__info__meta"},[t._v("\n              "+t._s(""+i.month+i.day)+"\n            ")]):t._e(),t._v(" "),e("li",{staticClass:"weui-media-box__info__meta"},[t._v(t._s(i.zodiac))]),t._v(" "),e("li",{staticClass:"weui-media-box__info__meta"},[t._v(t._s(i.constellation))]),t._v(" "),e("li",{staticClass:"weui-media-box__info__meta"},[0===i.countdown?e("span",[t._v(t._s(i.age)+" 岁")]):e("span",[t._v("后 "+t._s(i.age+1)+" 岁")])])])])])}))]):e("div",{staticClass:"weui-loadmore weui-loadmore_line"},[e("span",{staticClass:"weui-loadmore__tips"},[t._v("暂无数据")])])],1)},staticRenderFns:[]}},106:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"weui-search-bar",class:{"weui-search-bar_focusing":t.focusing||!!t.filter}},[e("form",{staticClass:"weui-search-bar__form",on:{submit:t.submit}},[e("div",{staticClass:"weui-search-bar__box"},[e("i",{staticClass:"weui-icon-search"}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.filter,expression:"filter"}],ref:"input",staticClass:"weui-search-bar__input",attrs:{type:"search",placeholder:"搜索"},domProps:{value:t.filter},on:{blur:function(i){t.focusing=!1},input:[function(i){i.target.composing||(t.filter=i.target.value)},function(i){t.update(i.target.value)}]}}),t._v(" "),e("a",{staticClass:"weui-icon-clear",attrs:{href:"javascript:"},on:{click:t.clear}})]),t._v(" "),e("label",{staticClass:"weui-search-bar__label",attrs:{for:"search_input"},on:{click:function(i){t.focus()}}},[e("i",{staticClass:"weui-icon-search"}),t._v(" "),e("span",[t._v("搜索")])])]),t._v(" "),e("router-link",{staticClass:"weui-search-bar__cancel-btn",attrs:{to:{name:"edit"}}},[e("i",{staticClass:"fa fa-plus fa-lg"})])],1)},staticRenderFns:[]}},107:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("div",{staticClass:"weui-cells__title"},[t._v("提醒信息")]),t._v(" "),e("div",{staticClass:"weui-cells weui-cells_form weui-panel__bd"},[e("div",{staticClass:"weui-cell",class:{"weui-cell_warn":t.isAdvanceError}},[t._m(0),t._v(" "),e("div",{staticClass:"weui-cell__bd"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.advance,expression:"advance"}],staticClass:"weui-input",attrs:{type:"number",placeholder:"请输入提前天数"},domProps:{value:t.advance},on:{input:function(i){i.target.composing||(t.advance=i.target.value)},blur:function(i){t.$forceUpdate()}}})]),t._v(" "),t.isLoading?e("div",{staticClass:"weui-cell__ft"},[e("i",{staticClass:"weui-loading"})]):t._e(),t._v(" "),t.isAdvanceError?e("div",{staticClass:"weui-cell__ft"},[e("i",{staticClass:"weui-icon-warn"})]):t._e()]),t._v(" "),e("div",{staticClass:"weui-cell"},[t._m(1),t._v(" "),e("div",{staticClass:"weui-cell__bd"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.time,expression:"time"}],staticClass:"weui-input",attrs:{type:"time",placeholder:"请输入提醒时间"},domProps:{value:t.time},on:{input:function(i){i.target.composing||(t.time=i.target.value)}}})]),t._v(" "),t.isLoading?e("div",{staticClass:"weui-cell__ft"},[e("i",{staticClass:"weui-loading"})]):t._e()])]),t._v(" "),e("div",{staticClass:"weui-btn-area"},[e("div",{staticClass:"weui-flex"},[e("div",{staticClass:"weui-flex__item"},[e("div",{staticClass:"weui-btn weui-btn_primary",class:{"weui-btn_disabled":!t.isValid,"weui-btn_loading":t.isValid&&(t.isSubmit||t.isRemove)},on:{click:function(i){t.submit()}}},[t.isSubmit?e("span",[e("i",{staticClass:"weui-loading"}),t._v(" 保存中\n          ")]):e("span",[t._v("保存")])])]),t._v(" "),t.settingId?e("div",{staticClass:"weui-flex__item"},[e("div",{staticClass:"weui-btn weui-btn_warn",class:{"weui-btn_loading":t.isSubmit||t.isRemove},on:{click:function(i){t.remove()}}},[t.isRemove?e("span",[e("i",{staticClass:"weui-loading"}),t._v(" 删除中\n          ")]):e("span",[t._v("删除")])])]):e("div",{staticClass:"weui-flex__item"},[e("router-link",{staticClass:"weui-btn weui-btn_default",class:{"weui-btn_loading":t.isSubmit},attrs:{to:{name:"detail"}}},[t._v("\n          返回\n        ")])],1)])])])},staticRenderFns:[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"weui-cell__hd"},[e("label",{staticClass:"weui-label"},[t._v("提前天数")])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"weui-cell__hd"},[e("label",{staticClass:"weui-label"},[t._v("提醒时间")])])}]}},108:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("div",{staticClass:"head",style:{background:"url("+t.bgImg+") center"}},[e("div",{staticClass:"navbar"},[e("router-link",{staticClass:"back",attrs:{to:{name:"births"}}},[e("i",{staticClass:"fa fa-angle-left fa-lg"})]),t._v(" "),e("router-link",{staticClass:"edit",attrs:{to:{name:"edit"}}},[e("i",{staticClass:"fa fa-edit fa-lg"})])],1),t._v(" "),e("div",{staticClass:"avatar",style:{"background-color":t.bgColor}},[t.birthLoading?e("i",{staticClass:"weui-loading"}):e("span",[t._v(t._s(t.birth.title&&t.birth.title.slice(-1)||"日"))])]),t._v(" "),e("div",{staticClass:"title"},[t.birthLoading?e("i",{staticClass:"weui-loading"}):e("span",[t._v(t._s(t.birth.title||t.生日))])]),t._v(" "),e("div",{staticClass:"date"},[t.birthLoading?e("i",{staticClass:"weui-loading"}):"SOLAR"===t.birth.type?e("span",[t._v("\n        "+t._s(t.birth.year+"年 "+t.birth.month+"月"+t.birth.day+"日")+"\n      ")]):"LUNAR"===t.birth.type?e("span",[t._v("\n        "+t._s(t.birth.year+"年 "+t.birth.month+t.birth.day)+"\n      ")]):e("span",[t._v("未知出生日期")])])]),t._v(" "),e("div",{staticClass:"weui-cells detail"},[e("div",{staticClass:"weui-cell"},[t._m(0),t._v(" "),e("div",{staticClass:"weui-cell__ft"},[t.birthLoading?e("i",{staticClass:"weui-loading"}):e("span",[t._v(t._s((t.birth.age||0)+"岁"))])])]),t._v(" "),e("div",{staticClass:"weui-cell"},[t._m(1),t._v(" "),e("div",{staticClass:"weui-cell__ft"},[t.birthLoading?e("i",{staticClass:"weui-loading"}):e("span",[t._v(t._s(t.birth.zodiac||"无"))])])]),t._v(" "),e("div",{staticClass:"weui-cell"},[t._m(2),t._v(" "),e("div",{staticClass:"weui-cell__ft"},[t.birthLoading?e("i",{staticClass:"weui-loading"}):e("span",[t._v(t._s(t.birth.constellation||"无"))])])]),t._v(" "),e("div",{staticClass:"weui-cell"},[t._m(3),t._v(" "),e("div",{staticClass:"weui-cell__ft"},[t.birthLoading?e("i",{staticClass:"weui-loading"}):e("span",[t._v(t._s((t.birth.days||-1)+"天"))])])]),t._v(" "),e("div",{staticClass:"weui-cell"},[t._m(4),t._v(" "),e("div",{staticClass:"weui-cell__ft"},[t.birthLoading?e("i",{staticClass:"weui-loading"}):0===t.birth.countdown?e("span",[t._v("今天")]):e("span",[t._v(t._s((t.birth.countdown||-1)+"天"))])])])]),t._v(" "),e("div",{staticClass:"weui-cells__title"},[t._v("\n    提醒设置\n    "),e("router-link",{attrs:{to:{name:"setting-edit"}}},[e("i",{staticClass:"fa fa-plus fa-lg",staticStyle:{float:"right"}})])],1),t._v(" "),t.settingLoading?e("div",{staticClass:"weui-loadmore"},[e("i",{staticClass:"weui-loading"}),t._v(" "),e("span",{staticClass:"weui-loadmore__tips"},[t._v("正在加载")])]):t.setting&&t.setting.length?e("div",{staticClass:"weui-cells"},t._l(t.setting,function(i){return e("router-link",{key:i.settingId,staticClass:"weui-cell weui-cell_access",attrs:{to:{name:"setting-edit",params:{settingId:i.settingId}}}},[e("div",{staticClass:"weui-cell__bd"},[i.advance?e("p",[t._v(t._s("提前"+i.advance+"天"))]):e("p",[t._v("当天")])]),t._v(" "),e("div",{staticClass:"weui-cell__ft"},[t._v(t._s(i.time))])])})):e("div",{staticClass:"weui-loadmore weui-loadmore_line"},[e("span",{staticClass:"weui-loadmore__tips"},[t._v("暂无提醒")])])])},staticRenderFns:[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"weui-cell__bd"},[e("p",[t._v("年龄")])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"weui-cell__bd"},[e("p",[t._v("生肖")])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"weui-cell__bd"},[e("p",[t._v("星座")])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"weui-cell__bd"},[e("p",[t._v("出生天数")])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"weui-cell__bd"},[e("p",[t._v("生日倒计时")])])}]}},109:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("div",{staticClass:"weui-cells__title"},[t._v("生日信息")]),t._v(" "),e("div",{staticClass:"weui-cells weui-cells_form weui-panel__bd"},[e("div",{staticClass:"weui-cell"},[t._m(0),t._v(" "),e("div",{staticClass:"weui-cell__bd"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"weui-input",attrs:{type:"text",placeholder:"请输入姓名"},domProps:{value:t.title},on:{input:function(i){i.target.composing||(t.title=i.target.value)}}})]),t._v(" "),t.isLoading?e("div",{staticClass:"weui-cell__ft"},[e("i",{staticClass:"weui-loading"})]):t._e()]),t._v(" "),e("div",{staticClass:"weui-cell weui-cell_select weui-cell_select-after"},[t._m(1),t._v(" "),e("div",{staticClass:"weui-cell__bd"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],staticClass:"weui-select",on:{change:function(i){var e=Array.prototype.filter.call(i.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.type=i.target.multiple?e:e[0]}}},[e("option",{attrs:{value:"SOLAR"}},[t._v("公历")]),t._v(" "),e("option",{attrs:{value:"LUNAR"}},[t._v("农历")])])])]),t._v(" "),e("div",{staticClass:"weui-cell",class:{"weui-cell_warn":t.isYearError}},[t._m(2),t._v(" "),e("div",{staticClass:"weui-cell__bd"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.year,expression:"year"}],staticClass:"weui-input",attrs:{type:"number",placeholder:"请输入年份"},domProps:{value:t.year},on:{input:function(i){i.target.composing||(t.year=i.target.value)},blur:function(i){t.$forceUpdate()}}})]),t._v(" "),t.isYearError?e("div",{staticClass:"weui-cell__ft"},[e("i",{staticClass:"weui-icon-warn"})]):t._e()]),t._v(" "),e("div",{staticClass:"weui-cell weui-cell_select weui-cell_select-after"},[t._m(3),t._v(" "),e("div",{staticClass:"weui-cell__bd"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.month,expression:"month"}],staticClass:"weui-select",on:{change:function(i){var e=Array.prototype.filter.call(i.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.month=i.target.multiple?e:e[0]}}},t._l(t.months,function(i,a){return e("option",{domProps:{value:a+1}},[t._v(t._s(i)+"月")])}))])]),t._v(" "),e("div",{staticClass:"weui-cell weui-cell_select weui-cell_select-after"},[t._m(4),t._v(" "),e("div",{staticClass:"weui-cell__bd"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.day,expression:"day"}],staticClass:"weui-select",on:{change:function(i){var e=Array.prototype.filter.call(i.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.day=i.target.multiple?e:e[0]}}},t._l(t.days,function(i,a){return e("option",{domProps:{value:a+1}},[t._v(t._s(i))])}))])])]),t._v(" "),e("div",{staticClass:"weui-btn-area"},[e("div",{staticClass:"weui-flex"},[e("div",{staticClass:"weui-flex__item"},[e("div",{staticClass:"weui-btn weui-btn_primary",class:{"weui-btn_disabled":!t.isValid,"weui-btn_loading":t.isValid&&(t.isSubmit||t.isRemove)},on:{click:function(i){t.submit()}}},[t.isSubmit?e("span",[e("i",{staticClass:"weui-loading"}),t._v(" 保存中\n          ")]):e("span",[t._v("保存")])])]),t._v(" "),t.birthId?e("div",{staticClass:"weui-flex__item"},[e("div",{staticClass:"weui-btn weui-btn_warn",class:{"weui-btn_loading":t.isSubmit||t.isRemove},on:{click:function(i){t.remove()}}},[t.isRemove?e("span",[e("i",{staticClass:"weui-loading"}),t._v(" 删除中\n          ")]):e("span",[t._v("删除")])])]):e("div",{staticClass:"weui-flex__item"},[e("router-link",{staticClass:"weui-btn weui-btn_default",class:{"weui-btn_loading":t.isSubmit},attrs:{to:{name:"births"}}},[t._v("\n          返回\n        ")])],1)])])])},staticRenderFns:[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"weui-cell__hd"},[e("label",{staticClass:"weui-label"},[t._v("姓名")])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"weui-cell__hd"},[e("label",{staticClass:"weui-label"},[t._v("类型")])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"weui-cell__hd"},[e("label",{staticClass:"weui-label"},[t._v("年份")])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"weui-cell__hd"},[e("label",{staticClass:"weui-label"},[t._v("月份")])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"weui-cell__hd"},[e("label",{staticClass:"weui-label"},[t._v("日期")])])}]}},11:function(t,i,e){"use strict";var a=e(57),s=e.n(a),n=e(53),l=e.n(n),r=e(54),c=e.n(r),o=e(111),u=(e.n(o),e(98)),d=e.n(u),_=function(t){return d.a.format({protocol:"https",host:"open.weixin.qq.com",pathname:"/connect/oauth2/authorize",query:c()(t,{state:location.href}),hash:"#wechat_redirect"})},v=function(t,i){switch(t){case 401:return location.href=_(i.extra),!0;default:return alert(i.message),!1}};i.a=function(t,i){i=i||{},i.method=i.method||"GET",i.credentials="same-origin",-1!==["POST","PUT"].indexOf(i.method)&&(i.headers=i.headers||{},i.body instanceof FormData||i.headers["Content-Type"]||i.headers["content-type"]||(i.headers["Content-Type"]="application/json",i.body&&"string"!=typeof body&&(i.body=l()(i.body)))),t+=d.a.format({query:i.query}),i.query=void 0;var e=void 0,a=void 0;return fetch(t,i).then(function(t){return e=t.status,t.json()}).then(function(t){if(a=t,e>=400)throw new Error(a.message);return{status:e,data:a}}).catch(function(t){throw"object"!==(void 0===a?"undefined":s()(a))&&(a={message:t.message}),v(e,a),t})}},43:function(t,i,e){"use strict";var a=e(101),s=e.n(a),n=e(102),l=e.n(n),r=e(103),c=e.n(r),o=e(104),u=e.n(o),d={template:"<p>Page Not Found</p>"},_=" - 生日管家";i.a={routes:[{path:"/",name:"births",component:s.a,meta:{title:"列表"+_}},{path:"/add",name:"edit",component:c.a,meta:{title:"添加"+_}},{path:"/:birthId",name:"detail",component:l.a,meta:{title:"详情"+_}},{path:"/:birthId/edit",name:"edit",component:c.a,meta:{title:"编辑"+_}},{path:"/:birthId/settings/:settingId?",name:"setting-edit",component:u.a,meta:{title:"提醒"+_}},{path:"*",component:d,meta:{title:"页面未找到"}}]}},46:function(t,i,e){"use strict";e.d(i,"a",function(){return l});var a=e(41),s=e.n(a),n=["#fdbe53","#b590d2","#da767c","#f88c96","#fed486","#fe966e","#fb7886","#61b8fa"],l=function(t){var i=void 0;do{i=s.a.sample(n)}while(i===t);return i}},47:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=e(45),s=e(44),n=e(43);a.a.use(s.a);var l=new s.a({mode:"history",routes:n.a.routes});l.beforeEach(function(t,i,e){document.title=t.meta.title||"",e()}),new a.a({el:"#app",router:l})},48:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={data:function(){return{filter:"",loading:!1,focusing:!1}},methods:{clear:function(){this.filter="",this.focus()},focus:function(){this.focusing=!0,this.$refs.input.focus()},submit:function(t){t.preventDefault()},update:function(t){this.$emit("input",t.trim())}}}},49:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=e(11),s=e(46),n=e(100),l=e.n(n);i.default={data:function(){return{filter:"",loading:!1,items:[]}},components:{FilterBar:l.a},created:function(){this.fetch()},methods:{fetch:function(){var t=this;this.loading=!0,e.i(a.a)("/api/births").then(function(i){var a=i.data;t.loading=!1;var n=void 0;a.map(function(t){n=e.i(s.a)(n),t.bgColor=n,t.lastWord=t.title.slice(-1)}),t.items=a}).catch(function(){t.loading=!1})}},computed:{filteredItems:function(){if(!this.filter||!this.items)return this.items;var t=new RegExp(this.filter);return this.items.filter(function(i){return i.title.match(t)||i.constellation.match(t)||i.zodiac.match(t)||i.date.match(t)})}}}},50:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=e(11);i.default={data:function(){return{bgImg:null,bgColor:"#FB7886",birthId:null,birthLoading:!1,birth:{},settingLoading:!1,setting:{}}},created:function(){var t=Math.floor(4*Math.random());this.bgImg="//cdn.qiujun.me/images/birthday/bg-"+t+".jpg!birthday",this.birthId=this.$route.params.birthId,this.bgColor=this.$route.query.bgColor||this.bgColor,this.fetchBirth(),this.fetchSetting()},methods:{fetchBirth:function(){var t=this;this.birthLoading=!0;var i=this.birthId;e.i(a.a)("/api/births/detail",{query:{birthId:i}}).then(function(i){var e=i.data;t.birthLoading=!1,t.birth=e}).catch(function(){t.birthLoading=!1})},fetchSetting:function(){var t=this;this.settingLoading=!0;var i=this.birthId;e.i(a.a)("/api/settings",{query:{birthId:i}}).then(function(i){var e=i.data;t.settingLoading=!1,t.setting=e}).catch(function(){t.settingLoading=!1})}}}},51:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=e(41),s=e.n(a),n=e(11);i.default={data:function(){return{birthId:null,title:"",type:"",year:1990,months:[],month:1,days:[],day:1,isLoading:!1,isSubmit:!1,isRemove:!1}},computed:{isYearError:function(){return this.year&&(isNaN(this.year)||this.year>2100||this.year<1900)},isValid:function(){return this.title&&this.type&&this.year&&!this.isYearError&&this.month&&this.day}},created:function(){this.type="LUNAR",this.birthId=Number(this.$route.params.birthId||0)||null,this.birthId&&this.fetch()},watch:{type:function(t){"LUNAR"===t?(this.months="正二三四五六七八九十冬腊",this.days=["初一","初二","初三","初四","初五","初六","初七","初八","初九","初十","十一","十二","十三","十四","十五","十六","十七","十八","十九","二十","廿一","廿二","廿三","廿四","廿五","廿六","廿七","廿八","廿九","三十"]):(this.months=s.a.range(1,12),this.days=s.a.map(s.a.range(1,31),function(t){return t+"日"}))}},methods:{format:function(t,i){return(s.a.repeat("0",i)+t).slice(-i)},fetch:function(){var t=this;this.isLoading=!0;var i=this.birthId;e.i(n.a)("/api/births/detail",{query:{birthId:i}}).then(function(i){var e=i.data;t.isLoading=!1,t.title=e.title,t.type=e.type;var a=e.date.split("-");t.year=Number(a[0]),t.month=Number(a[1]),t.day=Number(a[2])}).catch(function(){t.isLoading=!1})},submit:function(){var t=this;if(!this.isValid||this.isSubmit||this.isRemove)return!1;this.isSubmit=!0;var i="POST",a={title:this.title,type:this.type,date:this.year+"-"+this.format(this.month,2)+"-"+this.format(this.day,2)};this.birthId&&(i="PUT",a.birthId=this.birthId),e.i(n.a)("/api/births",{method:i,body:a}).then(function(i){var e=i.data;t.isSubmit=!1,console.log(e),t.$router.push({name:"detail",params:{birthId:e.birthId}})}).catch(function(){t.isSubmit=!1})},remove:function(){var t=this;if(this.isSubmit||this.isRemove)return!1;if(!confirm("你确定要删除当前生日信息吗?"))return!1;this.isRemove=!0;var i=this.birthId;e.i(n.a)("/api/births",{method:"DELETE",query:{birthId:i}}).then(function(i){t.isRemove=!1,t.$router.push({name:"births"})}).catch(function(){t.isRemove=!1})}}}},52:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=e(11);i.default={data:function(){return{birthId:null,settingId:null,advance:null,time:null,isLoading:!1,isSubmit:!1,isRemove:!1}},computed:{isAdvanceError:function(){return this.advance&&(isNaN(this.advance)||this.advance>365||this.advance<0)},isValid:function(){return!(0!==this.advance&&!this.advance)&&(!this.isAdvanceError&&this.time)}},created:function(){var t=this.$route.params;this.birthId=Number(t.birthId||0)||null,this.settingId=Number(t.settingId||0)||null,this.settingId&&this.fetch()},methods:{fetch:function(){var t=this;this.isLoading=!0;var i=this.settingId;e.i(a.a)("/api/settings/detail",{query:{settingId:i}}).then(function(i){t.isLoading=!1,t.advance=i.data.advance,t.time=i.data.time}).catch(function(){t.isLoading=!1})},submit:function(){var t=this;if(!this.isValid||this.isSubmit||this.isRemove)return!1;this.isSubmit=!0;var i="POST",s={birthId:this.birthId,advance:this.advance,time:this.time};this.settingId&&(i="PUT",s.settingId=this.settingId),e.i(a.a)("/api/settings",{method:i,body:s}).then(function(i){t.isSubmit=!1,t.$router.push({name:"detail"})}).catch(function(){t.isSubmit=!1})},remove:function(){var t=this;if(this.isSubmit||this.isRemove)return!1;if(!confirm("你确定要删除当前提醒信息吗?"))return!1;this.isRemove=!0;var i=this.settingId;e.i(a.a)("/api/settings",{method:"DELETE",query:{settingId:i}}).then(function(i){t.isRemove=!1,t.$router.push({name:"detail"})}).catch(function(){t.isRemove=!1})}}}},89:function(t,i){},90:function(t,i){},91:function(t,i){},92:function(t,i){},93:function(t,i){}},[47]);
//# sourceMappingURL=app.5141747123550239eb45.js.map