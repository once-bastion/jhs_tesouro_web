(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tarefa-index"],{"04b7":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".tarefa-con[data-v-511ad8f7]{height:%?80?%;display:flex;align-items:center;padding:0 %?25?%;justify-content:space-between;color:#fff;font-size:%?24?%;background-color:#3ea0dc}.tarefa-header[data-v-511ad8f7]{background-image:linear-gradient(135.48deg,#419fd9,#71caee);background-size:100% 100%}.tarefa-header .header-row[data-v-511ad8f7]{display:flex;align-items:center;padding:%?10?% 0}.tarefa-header .header-row .header-row-item[data-v-511ad8f7]{width:calc(50% - %?60?%);margin:0 %?5?%;text-align:left;color:#fff;padding:%?10?% %?25?%}.tarefa-header .header-row .header-row-item .top[data-v-511ad8f7]{color:#afe4cd;font-size:%?24?%;padding:%?15?% 0;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tarefa-header .header-row .header-row-item .bottom[data-v-511ad8f7]{font-size:%?24?%;padding:%?5?% 0;color:#fff}.tarefa-header .header-row .header-row-item .bottom .bottom-txt[data-v-511ad8f7]{font-size:%?32?%;font-weight:600;margin:0 %?8?%}",""]),t.exports=e},2080:function(t,e,a){"use strict";a.r(e);var i=a("f869"),s=a("9abd");for(var n in s)"default"!==n&&function(t){a.d(e,t,(function(){return s[t]}))}(n);a("8b0a");var r,o=a("f0c5"),c=Object(o["a"])(s["default"],i["b"],i["c"],!1,null,"511ad8f7",null,!1,i["a"],r);e["default"]=c.exports},"2e4d":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"box-item",data:function(){return{currency:""}},props:{list:{type:Array,default:function(){return[]}}},mounted:function(){var t=JSON.parse(uni.getStorageSync("userInfo"));this.currency=t.area.currency},methods:{Jump:function(t){this.$mRouter.push({path:"/pages/tarefa/orderdetail",query:{order_id:t.id}})},copy:function(t){var e=this;uni.setClipboardData({data:t,success:function(){e.$toast("copy Success")}})}}};e.default=i},"46c2":function(t,e,a){"use strict";a.r(e);var i=a("2e4d"),s=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=s.a},"4b42":function(t,e,a){var i=a("e287");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=a("4f06").default;s("d4fb7784",i,!0,{sourceMap:!1,shadowMode:!1})},"597d":function(t,e,a){var i=a("04b7");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=a("4f06").default;s("c0e81a50",i,!0,{sourceMap:!1,shadowMode:!1})},"6ae5":function(t,e,a){"use strict";var i=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i(a("9304")),n={name:"box-header",data:function(){return{statistics:{fulfill_order_count:0,order_count:0,bonus:0,money:0,freeze:0,future_bonus:0}}},created:function(){this.getOrderInfo()},activated:function(){this.getOrderInfo()},methods:{getOrderInfo:function(){var t=this;s.default.orderStatistics(this,{},(function(e){1==e.code&&(t.statistics=e.data)}))}}};e.default=n},"82f1":function(t,e,a){"use strict";a.r(e);var i=a("99ad"),s=a("835a");for(var n in s)"default"!==n&&function(t){a.d(e,t,(function(){return s[t]}))}(n);a("ebe9");var r,o=a("f0c5"),c=Object(o["a"])(s["default"],i["b"],i["c"],!1,null,"4292de91",null,!1,i["a"],r);e["default"]=c.exports},"835a":function(t,e,a){"use strict";a.r(e);var i=a("c031"),s=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=s.a},"8b0a":function(t,e,a){"use strict";var i=a("597d"),s=a.n(i);s.a},"99ad":function(t,e,a){"use strict";a.d(e,"b",(function(){return s})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var i={uNavbar:a("a0ce").default,uTabs:a("014d").default,uEmpty:a("6484").default},s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"tarefa-page"},[i("u-navbar",{attrs:{leftIcon:"",title:t.$t("tarefa.rwlb")}}),i("box-header"),i("v-uni-view",{staticStyle:{"background-color":"#FFFFFF"}},[i("u-tabs",{attrs:{itemStyle:"width:27%;height:45px",current:t.current,lineWidth:"60",lineColor:"#429EDA",activeStyle:t.activeStyle,list:t.tabsList},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}}})],1),t.list.length?i("box-item",{attrs:{list:t.list}}):i("u-empty",{attrs:{text:"No data",mode:"data",icon:a("9051")}})],1)},n=[]},"9abd":function(t,e,a){"use strict";a.r(e);var i=a("6ae5"),s=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=s.a},a0bc:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".box-item[data-v-dc549c9c]{background-color:#fff;overflow:hidden;padding:%?15?% 0;margin-bottom:%?25?%}.box-item .list[data-v-dc549c9c]{padding:%?15?%;display:flex;align-items:center;justify-content:space-between;font-size:%?28?%;color:#333}.box-item .list .list-left[data-v-dc549c9c]{color:#999;font-size:%?24?%}.box-item .list .list-right[data-v-dc549c9c]{margin-left:%?20?%;display:flex;justify-content:flex-end;align-items:center;color:#444;font-size:%?24?%}.box-item .list .list-right .list-right-btn[data-v-dc549c9c]{width:%?80?%;height:%?40?%;border-radius:%?40?%;background-color:#cecece;color:#fff;text-align:center;line-height:%?40?%;margin-left:%?10?%}.box-item .paca-btn[data-v-dc549c9c]{\n  /*rectangle 139*/width:%?252?%;height:%?70?%;background:#fff;border:%?1?% solid #307a59;border-radius:%?70?%;margin:%?25?% auto;color:#429eda}",""]),t.exports=e},a57d:function(t,e,a){"use strict";var i=a("a6eb"),s=a.n(i);s.a},a6eb:function(t,e,a){var i=a("a0bc");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=a("4f06").default;s("5cfb0ee3",i,!0,{sourceMap:!1,shadowMode:!1})},ab3f:function(t,e,a){"use strict";a.d(e,"b",(function(){return s})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var i={uButton:a("57e6").default},s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[t._l(t.list,(function(e,i){return a("v-uni-view",{key:i,staticClass:"box-item"},[a("v-uni-view",{staticClass:"list"},[a("v-uni-view",{staticClass:"list-left"},[t._v(t._s(t.$t("tarefa.ddh")))]),a("v-uni-view",{staticClass:"list-right"},[t._v(t._s(e.order_sn)),a("v-uni-view",{staticClass:"list-right-btn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.copy(e.order_sn)}}},[t._v("copy")])],1)],1),a("v-uni-view",{staticClass:"list"},[a("v-uni-view",{staticClass:"list-left"},[t._v(t._s(t.$t("tarefa.cjsj")))]),a("v-uni-view",{staticClass:"list-right"},[t._v(t._s(t._f("dataFormat")(e.createtime,"YYYY-MM-DD HH:mm:ss")))])],1),a("v-uni-view",{staticClass:"list"},[a("v-uni-view",{staticClass:"list-left"},[t._v(t._s(t.$t("tarefa.yjbl")))]),a("v-uni-view",{staticClass:"list-right"},[t._v(t._s(e.bonus_ratio)+"%")])],1),a("v-uni-view",{staticClass:"list"},[a("v-uni-view",{staticClass:"list-left"},[t._v(t._s(t.$t("tarefa.ljyj")))]),a("v-uni-view",{staticClass:"list-right"},[t._v(t._s(t.currency)+" "+t._s(e.total_bonus))])],1),a("v-uni-view",{staticClass:"list"},[a("v-uni-view",{staticClass:"list-left"},[t._v(t._s(t.$t("tarefa.cjje")))]),a("v-uni-view",{staticClass:"list-right"},[t._v(t._s(t.currency)+" "+t._s(e.turnover))])],1),a("v-uni-view",{staticClass:"list"},[a("v-uni-view",{staticClass:"list-left"},[t._v(t._s(t.$t("tarefa.ddzt")))]),a("v-uni-view",{staticClass:"list-right"},[1==e.status?a("v-uni-text",{staticStyle:{color:"#E5B01A"}},[t._v(t._s(t.$t("tarefa.jxz")))]):2==e.status?a("v-uni-text",{staticStyle:{color:"#39e355"}},[t._v(t._s(t.$t("tarefa.ywc")))]):t._e()],1)],1),a("u-button",{staticClass:"paca-btn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.Jump(e)}}},[t._v(t._s(t.$t("tarefa.xq")))])],1)})),a("v-uni-view",{staticStyle:{padding:"25rpx"}})],2)},n=[]},acea:function(t,e,a){"use strict";a.r(e);var i=a("ab3f"),s=a("46c2");for(var n in s)"default"!==n&&function(t){a.d(e,t,(function(){return s[t]}))}(n);a("a57d");var r,o=a("f0c5"),c=Object(o["a"])(s["default"],i["b"],i["c"],!1,null,"dc549c9c",null,!1,i["a"],r);e["default"]=c.exports},c031:function(t,e,a){"use strict";var i=a("4ea4");a("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s,n=i(a("ade3")),r=i(a("2080")),o=i(a("acea")),c=i(a("9304")),u={data:function(){return{list:[],activeStyle:{color:"#444444",fontWeight:700},current:0,page:1}},computed:{tabsList:function(){return[{name:this.$t("tarefa.jxz")},{name:this.$t("tarefa.ywc")},{name:this.$t("tarefa.djz")}]}},onShow:function(){this.page=1,this.list=[],this.orderList(),this.$setTar()},onReachBottom:function(){this.page++,this.orderList()},components:(s={},(0,n.default)(s,r.default.name,r.default),(0,n.default)(s,o.default.name,o.default),s),methods:{change:function(t){this.list=[],this.current=t.index,this.page=1,this.orderList()},orderList:function(){var t=this;this.$showLoading();var e={};0==this.current?e={page:this.page,status:1,freeze:0}:1==this.current?e={page:this.page,status:2,freeze:0}:2==this.current&&(e={page:this.page,status:1,freeze:1}),c.default.orderList(this,e,(function(e){t.$hiddenLoading(),1==e.code&&(t.list=t.list.concat(e.data.data))}))}}};e.default=u},e287:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".tarefa-page[data-v-4292de91]{min-height:100vh;background-color:#eff3f2}",""]),t.exports=e},ebe9:function(t,e,a){"use strict";var i=a("4b42"),s=a.n(i);s.a},f869:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return s})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"tarefa-header"},[a("v-uni-view",{staticClass:"header-row"},[a("v-uni-view",{staticClass:"header-row-item"},[a("v-uni-view",{staticClass:"top"},[t._v(t._s(t.$t("tarefa.ye")))]),a("v-uni-view",{staticClass:"bottom"},[t._v("R$"),a("v-uni-text",{staticClass:"bottom-txt"},[t._v(t._s(t.statistics.money))])],1)],1),a("v-uni-view",{staticClass:"header-row-item"},[a("v-uni-view",{staticClass:"top"},[t._v(t._s(t.$t("tarefa.dfbj")))]),a("v-uni-view",{staticClass:"bottom"},[t._v("R$"),a("v-uni-text",{staticClass:"bottom-txt"},[t._v(t._s(t.statistics.freeze))])],1)],1)],1),a("v-uni-view",{staticClass:"header-row"},[a("v-uni-view",{staticClass:"header-row-item"},[a("v-uni-view",{staticClass:"top"},[t._v(t._s(t.$t("tarefa.yj")))]),a("v-uni-view",{staticClass:"bottom"},[t._v("R$"),a("v-uni-text",{staticClass:"bottom-txt"},[t._v(t._s(t.statistics.bonus))])],1)],1),a("v-uni-view",{staticClass:"header-row-item"},[a("v-uni-view",{staticClass:"top"},[t._v(t._s(t.$t("tarefa.dfyj")))]),a("v-uni-view",{staticClass:"bottom"},[t._v("R$"),a("v-uni-text",{staticClass:"bottom-txt"},[t._v(t._s(t.statistics.future_bonus))])],1)],1)],1),a("v-uni-view",{staticClass:"tarefa-con"},[t._v(t._s(t.$t("tarefa.rw"))),a("v-uni-text",[t._v(t._s(t.statistics.fulfill_order_count)+"/"+t._s(t.statistics.order_count))])],1)],1)},n=[]}}]);