(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tarefa-orderdetail"],{"06c2":function(t,e,a){"use strict";var r=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(a("38fe")),o={name:"u-navbar",mixins:[uni.$u.mpMixin,uni.$u.mixin,i.default],data:function(){return{}},methods:{leftClick:function(){this.$emit("leftClick"),this.autoBack&&uni.navigateBack()},rightClick:function(){this.$emit("rightClick")}}};e.default=o},"0fdd":function(t,e,a){t.exports=a.p+"static/img/banner.053b7b4c.jpg"},"13c9":function(t,e,a){"use strict";var r=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,o=r(a("ade3")),n=r(a("4286")),d=r(a("c7ea")),s=r(a("91bc")),l={data:function(){return{diaShow:!1,order_id:"",orderInfo:{},currency:""}},mounted:function(){var t=JSON.parse(uni.getStorageSync("userInfo"));this.currency=t.area.currency},components:(i={},(0,o.default)(i,d.default.name,d.default),(0,o.default)(i,s.default.name,s.default),i),onLoad:function(t){this.order_id=t.order_id,this.detail()},methods:{paysuccess:function(){this.detail()},detail:function(){var t=this;this.$showLoading(),n.default.orderitem(this,"order_id="+this.order_id,(function(e){t.$hiddenLoading(),1==e.code&&(t.orderInfo=e.data)}))}}};e.default=l},"1f62":function(t,e,a){"use strict";a.r(e);var r=a("06c2"),i=a.n(r);for(var o in r)"default"!==o&&function(t){a.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},3002:function(t,e,a){"use strict";var r=a("f63e"),i=a.n(r);i.a},"38fe":function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={props:{safeAreaInsetTop:{type:Boolean,default:uni.$u.props.navbar.safeAreaInsetTop},placeholder:{type:Boolean,default:uni.$u.props.navbar.placeholder},fixed:{type:Boolean,default:uni.$u.props.navbar.fixed},border:{type:Boolean,default:uni.$u.props.navbar.border},leftIcon:{type:String,default:uni.$u.props.navbar.leftIcon},leftText:{type:String,default:uni.$u.props.navbar.leftText},rightText:{type:String,default:uni.$u.props.navbar.rightText},rightIcon:{type:String,default:uni.$u.props.navbar.rightIcon},title:{type:[String,Number],default:uni.$u.props.navbar.title},bgColor:{type:String,default:uni.$u.props.navbar.bgColor},titleWidth:{type:[String,Number],default:uni.$u.props.navbar.titleWidth},height:{type:[String,Number],default:uni.$u.props.navbar.height},leftIconSize:{type:[String,Number],default:uni.$u.props.navbar.leftIconSize},leftIconColor:{type:String,default:uni.$u.props.navbar.leftIconColor},autoBack:{type:Boolean,default:uni.$u.props.navbar.autoBack},titleStyle:{type:[String,Object],default:uni.$u.props.navbar.titleStyle}}};e.default=r},"39ba":function(t,e,a){var r=a("24fb");e=r(!1),e.push([t.i,"[data-v-bfdde7b8] .u-modal__content{padding:%?10?% %?5?%!important}.modal-main-box[data-v-bfdde7b8]{max-height:%?800?%;overflow:auto;position:relative}.close-icon[data-v-bfdde7b8]{position:absolute;right:%?45?%;top:%?25?%;z-index:11222}.order-box[data-v-bfdde7b8]{margin:%?20?%;background-color:#fff;border-radius:%?15?%;padding:%?25?%}.order-box .paca-btn[data-v-bfdde7b8]{width:100%;background-color:#126e82;color:#fff;font-weight:700;margin:%?25?% auto}.order-box .premlo[data-v-bfdde7b8]{display:flex;justify-content:space-between;align-items:center;margin-top:%?20?%}.order-box .premlo .premlo-left[data-v-bfdde7b8]{color:#999}.order-box .premlo .premlo-left uni-text[data-v-bfdde7b8]{font-size:%?24?%;color:#515151}.order-box .premlo .premlo-btn[data-v-bfdde7b8]{\n  /*rectangle 155*/width:%?131?%;height:%?64?%;text-align:center;line-height:%?64?%;background:#fff;border:1px solid #307a59;border-radius:%?66?%;font-size:%?24?%;color:#307a59}.order-box .display[data-v-bfdde7b8]{display:flex;padding-bottom:%?35?%;border-bottom:%?1?% solid #d5deda}.order-box .display .order-box-right[data-v-bfdde7b8]{display:flex;flex-wrap:wrap;justify-content:flex-start}.order-box .display .order-box-right .right-title[data-v-bfdde7b8]{height:%?40?%;padding:0 %?10?%;color:#ff7a00;text-align:center;line-height:%?40?%;background-color:#fff1e4;border-radius:%?8?%}.order-box .display .order-box-right .complete[data-v-bfdde7b8]{color:#009c55;background-color:#d6fada}.order-box .display .order-box-right .right-tip[data-v-bfdde7b8]{text-align:left;padding:%?10?% 0;font-size:%?28?%;color:#444;width:100%;overflow:hidden;text-overflow:ellipsis;word-break:break-all;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical}.order-box .display .order-box-right .right-money[data-v-bfdde7b8]{width:100%;display:flex;justify-content:space-between;font-size:%?24?%;color:#999;align-items:center;margin-top:%?25?%}.order-box .display .order-box-right .right-money .right-money-txt[data-v-bfdde7b8]{color:#444;font-size:%?28?%;font-weight:700;margin:0 %?10?%;font-size:%?32?%}.order-box .display .order-box-right .right-time[data-v-bfdde7b8]{text-align:left}.order-box .display .order-box-left[data-v-bfdde7b8]{margin-right:%?35?%}.order-box .display .order-box-left .left-title[data-v-bfdde7b8]{font-size:%?28?%;font-weight:700;color:#000;height:%?40?%;line-height:%?40?%}.order-box .display .order-box-left uni-image[data-v-bfdde7b8]{width:%?150?%;height:%?150?%}",""]),t.exports=e},"3d76":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return r}));var r={uStatusBar:a("0efb").default,uIcon:a("982b").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"u-navbar"},[t.fixed&&t.placeholder?a("v-uni-view",{staticClass:"u-navbar__placeholder",style:{height:t.$u.addUnit(t.$u.getPx(t.height)+t.$u.sys().statusBarHeight,"px")}}):t._e(),a("v-uni-view",{class:[t.fixed&&"u-navbar--fixed"]},[t.safeAreaInsetTop?a("u-status-bar",{attrs:{bgColor:t.bgColor}}):t._e(),a("v-uni-view",{staticClass:"u-navbar__content",class:[t.border&&"u-border-bottom"],style:{height:t.$u.addUnit(t.height),backgroundColor:t.bgColor}},[a("v-uni-view",{staticClass:"u-navbar__content__left",attrs:{"hover-class":"u-navbar__content__left--hover","hover-start-time":"150"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.leftClick.apply(void 0,arguments)}}},[t._t("left",[t.leftIcon?a("u-icon",{attrs:{name:t.leftIcon,size:t.leftIconSize,color:t.leftIconColor}}):t._e(),t.leftText?a("v-uni-text",{staticClass:"u-navbar__content__left__text",style:{color:t.leftIconColor}},[t._v(t._s(t.leftText))]):t._e()])],2),t._t("center",[a("v-uni-text",{staticClass:"u-line-1 u-navbar__content__title",style:[{width:t.$u.addUnit(t.titleWidth)},t.$u.addStyle(t.titleStyle)]},[t._v(t._s(t.title))])]),t.$slots.right||t.rightIcon||t.rightText?a("v-uni-view",{staticClass:"u-navbar__content__right",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.rightClick.apply(void 0,arguments)}}},[t._t("right",[t.rightIcon?a("u-icon",{attrs:{name:t.rightIcon,size:"20"}}):t._e(),t.rightText?a("v-uni-text",{staticClass:"u-navbar__content__right__text"},[t._v(t._s(t.rightText))]):t._e()])],2):t._e()],2)],1)],1)},o=[]},"42f6":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return r}));var r={uModal:a("2842").default,uIcon:a("982b").default},i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",[r("u-modal",{staticStyle:{position:"relative"},attrs:{showConfirmButton:!1,show:t.show,title:""}},[r("u-icon",{staticClass:"close",attrs:{color:"#fff",size:"24",name:"close"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}}),r("v-uni-image",{attrs:{src:a("0fdd"),mode:"widthFix"}})],1)],1)},o=[]},"4c05":function(t,e,a){"use strict";a.r(e);var r=a("e109"),i=a.n(r);for(var o in r)"default"!==o&&function(t){a.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},"4ed3":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"box-dialog",data:function(){return{}},model:{prop:"show",event:"change"},props:{show:{type:Boolean,default:!1}},methods:{close:function(){this.$emit("change",!1)}}};e.default=r},"60b5":function(t,e,a){"use strict";a.r(e);var r=a("3d76"),i=a("1f62");for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("a661");var n,d=a("f0c5"),s=Object(d["a"])(i["default"],r["b"],r["c"],!1,null,"8f2ab8b2",null,!1,r["a"],n);e["default"]=s.exports},"6b11":function(t,e,a){var r=a("24fb");e=r(!1),e.push([t.i,".close[data-v-a21c05ea]{position:absolute;right:%?25?%;top:%?100?%;z-index:1122222}[data-v-a21c05ea] .u-modal__content{padding:0}[data-v-a21c05ea] .u-popup__content{background-color:initial}",""]),t.exports=e},"70c2":function(t,e,a){var r=a("6b11");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=a("4f06").default;i("3a9c2b0e",r,!0,{sourceMap:!1,shadowMode:!1})},7195:function(t,e,a){"use strict";var r=a("860c"),i=a.n(r);i.a},7424:function(t,e,a){"use strict";var r=a("70c2"),i=a.n(r);i.a},"817e":function(t,e,a){var r=a("24fb");e=r(!1),e.push([t.i,".orderdetail-page[data-v-434da8f9]{height:100vh;background-color:#eff3f2}.orderdetail-tip[data-v-434da8f9]{color:#999;font-size:%?24?%;padding:%?10?% %?25?%;line-height:1.6}.orderdetail-tip uni-text[data-v-434da8f9]{color:#f94545}.orderdetail-row[data-v-434da8f9]{display:flex;align-items:center;padding:%?10?% 0;margin:%?25?%;\n  /*rectangle 148*/background:linear-gradient(166.07deg,#307a59,#73caa3);border-radius:%?20?%}.orderdetail-row .orderdetail-row-item[data-v-434da8f9]{width:calc(50% - %?60?%);margin:0 %?5?%;text-align:left;color:#fff;padding:%?10?% %?25?%}.orderdetail-row .orderdetail-row-item .top[data-v-434da8f9]{color:#afe4cd;font-size:%?24?%;padding:%?15?% 0;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.orderdetail-row .orderdetail-row-item .bottom[data-v-434da8f9]{font-size:%?24?%;padding:%?5?% 0;color:#fff}.orderdetail-row .orderdetail-row-item .bottom .bottom-txt[data-v-434da8f9]{font-size:%?32?%;font-weight:600;margin:0 %?8?%}",""]),t.exports=e},"860c":function(t,e,a){var r=a("9d8c");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=a("4f06").default;i("4bf14a54",r,!0,{sourceMap:!1,shadowMode:!1})},"8a68":function(t,e,a){var r=a("39ba");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=a("4f06").default;i("235a8896",r,!0,{sourceMap:!1,shadowMode:!1})},"8d69":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return r}));var r={uNavbar:a("60b5").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"orderdetail-page"},[a("u-navbar",{attrs:{title:t.$t("tarefa.ddxq")}}),a("v-uni-view",{staticClass:"orderdetail-row"},[a("v-uni-view",{staticClass:"orderdetail-row-item"},[a("v-uni-view",{staticClass:"top"},[t._v(t._s(t.$t("tarefa.fhyj")))]),a("v-uni-view",{staticClass:"bottom"},[t._v(t._s(t.currency)),a("v-uni-text",{staticClass:"bottom-txt"},[t._v(t._s(t.orderInfo.total_bonus))])],1)],1),a("v-uni-view",{staticClass:"orderdetail-row-item"},[a("v-uni-view",{staticClass:"top"},[t._v(t._s(t.$t("tarefa.fhbj")))]),a("v-uni-view",{staticClass:"bottom"},[t._v(t._s(t.currency)),a("v-uni-text",{staticClass:"bottom-txt"},[t._v(t._s(Number(t.orderInfo.turnover-t.orderInfo.freeze).toFixed(2)))])],1)],1)],1),a("v-uni-view",{staticClass:"orderdetail-tip"},[a("v-uni-text",[t._v(t._s(t.$t("tarefa.sm"))+":")]),t._v(t._s(t.$t("tarefa.smxq")))],1),a("box-detail-item",{attrs:{orderInfo:t.orderInfo,order_id:t.order_id},on:{paysuccess:function(e){arguments[0]=e=t.$handleEvent(e),t.paysuccess.apply(void 0,arguments)}}}),a("box-dialog",{model:{value:t.diaShow,callback:function(e){t.diaShow=e},expression:"diaShow"}})],1)},o=[]},"91bc":function(t,e,a){"use strict";a.r(e);var r=a("42f6"),i=a("cf9b");for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("7424");var n,d=a("f0c5"),s=Object(d["a"])(i["default"],r["b"],r["c"],!1,null,"a21c05ea",null,!1,r["a"],n);e["default"]=s.exports},"929a":function(t,e,a){"use strict";var r=a("4ea4");a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(a("4286")),o={name:"box-detail-item",data:function(){return{}},props:{order_id:[String,Number],bonus_ratio:[String,Number],orderInfo:{type:Object,default:function(){}}},methods:{getImg:function(t){return this.basePath+t},pay:function(){var t=this;this.$showLoading(),i.default.orderpay(this,{order_id:this.order_id},(function(e){t.$hiddenLoading(),t.$toast(e.msg),1==e.code&&setTimeout((function(){t.$emit("paysuccess")}),1500)}))}}};e.default=o},9619:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return r}));var r={uModal:a("2842").default,uIcon:a("982b").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[t._l(t.orderInfo.order_item_list,(function(e,r){return a("v-uni-view",{key:r,staticClass:"order-box"},[a("v-uni-view",{staticClass:"display"},[a("v-uni-view",{staticClass:"order-box-left"},[a("v-uni-image",{attrs:{src:t.getImg(e.image),mode:"widthFix"}})],1),a("v-uni-view",{staticClass:"order-box-right"},[0==e.status?a("v-uni-view",{staticClass:"right-title"},[t._v(t._s(t.$t("tarefa.dwc"))),a("span",[t._v(t._s(t.$t("tarefa.ywc")))])]):1==e.status?a("v-uni-view",{staticClass:"right-title complete"},[t._v(t._s(t.$t("tarefa.ywc")))]):t._e(),a("v-uni-view",{staticClass:"right-tip"},[t._v(t._s(e.title))]),a("v-uni-view",{staticClass:"right-money"},[a("v-uni-view",[t._v(t._s(e.currency)),a("v-uni-text",{staticClass:"right-money-txt"},[t._v(t._s(e.money))])],1),a("v-uni-text",[t._v("X"+t._s(e.number))])],1)],1)],1),a("v-uni-view",{staticClass:"premlo"},[a("v-uni-view",{staticClass:"premlo-left"},[a("p",[t._v(t._s(t._f("dataFormat")(e.createtime,"YYYY-MM-DD HH:mm:ss")))]),a("p",{staticStyle:{margin:"10rpx 0"}},[t._v(t._s(t.$t("tarefa.smt")))]),a("v-uni-view",{staticStyle:{display:"flex","align-items":"center"}},[t._v(t._s(t.$t("tarefa.yj"))+":"),a("v-uni-text",[t._v(t._s(e.currency)+t._s(Number(e.money*t.orderInfo.bonus_ratio/100).toFixed(2)))])],1)],1),0==e.status&&0==e.is_freeze?a("v-uni-view",{staticClass:"premlo-btn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.pay(e,t.orderInfo.bonus_ratio)}}},[t._v(t._s(t.$t("tarefa.zf")))]):1==e.is_freeze?a("v-uni-view",{staticClass:"premlo-btn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.pay(e,t.orderInfo.bonus_ratio)}}},[t._v(t._s(t.$t("tarefa.lxkf")))]):t._e()],1)],1)})),a("u-modal",{staticStyle:{position:"relative"},attrs:{show:t.show,showConfirmButton:!1}},[a("u-icon",{staticClass:"close-icon",attrs:{size:"20",name:"close"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.show=!1}}}),a("v-uni-view",{staticClass:"modal-main-box"},[a("box-detail-item1",{attrs:{bonus_ratio:t.orderInfo.bonus_ratio,orderInfo:t.itemInfo,order_id:t.order_id},on:{paysuccess:function(e){arguments[0]=e=t.$handleEvent(e),t.paysuccess.apply(void 0,arguments)}}})],1)],1)],2)},o=[]},"9d8c":function(t,e,a){var r=a("24fb");e=r(!1),e.push([t.i,".paca-btn[data-v-23aeab8c]{width:90%;background-color:#307a59;color:#fff;font-weight:700;margin:%?25?% auto;border-radius:%?88?%;height:%?88?%}.order-box[data-v-23aeab8c]{margin:%?20?%;background-color:#fff;border-radius:%?15?%;padding:%?15?%}.order-box .premlo[data-v-23aeab8c]{display:flex;justify-content:space-between;align-items:center;margin-top:%?20?%}.order-box .premlo .premlo-left[data-v-23aeab8c]{color:#999}.order-box .premlo .premlo-left uni-text[data-v-23aeab8c]{font-size:%?24?%;color:#515151}.order-box .premlo .premlo-btn[data-v-23aeab8c]{\n  /*rectangle 155*/width:%?131?%;height:%?64?%;text-align:center;line-height:%?64?%;background:#fff;border:1px solid #307a59;border-radius:%?66?%;font-size:%?24?%;color:#307a59}.order-box .display[data-v-23aeab8c]{display:flex;padding-bottom:%?35?%;border-bottom:%?1?% solid #d5deda}.order-box .display .order-box-right[data-v-23aeab8c]{display:flex;flex-wrap:wrap;justify-content:flex-start}.order-box .display .order-box-right .right-title[data-v-23aeab8c]{height:%?40?%;padding:0 %?10?%;color:#ff7a00;text-align:center;line-height:%?40?%;background-color:#fff1e4;border-radius:%?8?%}.order-box .display .order-box-right .complete[data-v-23aeab8c]{color:#009c55;background-color:#d6fada}.order-box .display .order-box-right .right-tip[data-v-23aeab8c]{text-align:left;padding:%?10?% 0;font-size:%?28?%;color:#444;width:100%;overflow:hidden;text-overflow:ellipsis;word-break:break-all;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical}.order-box .display .order-box-right .right-money[data-v-23aeab8c]{width:100%;display:flex;justify-content:space-between;font-size:%?24?%;color:#999;margin-top:%?25?%;align-items:center}.order-box .display .order-box-right .right-money .right-money-txt[data-v-23aeab8c]{color:#444;font-size:%?28?%;font-weight:700;margin:0 %?10?%;font-size:%?32?%}.order-box .display .order-box-right .right-time[data-v-23aeab8c]{text-align:left}.order-box .display .order-box-left[data-v-23aeab8c]{margin-right:%?35?%}.order-box .display .order-box-left .left-title[data-v-23aeab8c]{font-size:%?28?%;font-weight:700;color:#000;height:%?40?%;line-height:%?40?%}.order-box .display .order-box-left uni-image[data-v-23aeab8c]{width:%?150?%;height:%?150?%}",""]),t.exports=e},a43a:function(t,e,a){"use strict";a.r(e);var r=a("8d69"),i=a("df2e");for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("3002");var n,d=a("f0c5"),s=Object(d["a"])(i["default"],r["b"],r["c"],!1,null,"434da8f9",null,!1,r["a"],n);e["default"]=s.exports},a661:function(t,e,a){"use strict";var r=a("f285"),i=a.n(r);i.a},c7db:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return r}));var r={uButton:a("150a").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{staticClass:"order-box"},[a("v-uni-view",{staticClass:"display"},[a("v-uni-view",{staticClass:"order-box-left"},[a("v-uni-image",{attrs:{src:t.getImg(t.orderInfo.image),mode:"widthFix"}})],1),a("v-uni-view",{staticClass:"order-box-right"},[0==t.orderInfo.status?a("v-uni-view",{staticClass:"right-title"},[t._v(t._s(t.$t("tarefa.dwc"))),a("span",[t._v(t._s(t.$t("tarefa.ywc")))])]):1==t.orderInfo.status?a("v-uni-view",{staticClass:"right-title complete"},[t._v(t._s(t.$t("tarefa.ywc")))]):t._e(),a("v-uni-view",{staticClass:"right-tip"},[t._v(t._s(t.orderInfo.title))]),a("v-uni-view",{staticClass:"right-money"},[a("v-uni-view",[t._v(t._s(t.orderInfo.currency)),a("v-uni-text",{staticClass:"right-money-txt"},[t._v(t._s(t.orderInfo.money))])],1),a("v-uni-text",[t._v("X"+t._s(t.orderInfo.number))])],1)],1)],1),a("v-uni-view",{staticClass:"premlo"},[a("v-uni-view",{staticClass:"premlo-left"},[a("p",[t._v(t._s(t._f("dataFormat")(t.orderInfo.createtime,"YYYY-MM-DD HH:mm:ss")))]),a("p",{staticStyle:{margin:"10rpx 0"}},[t._v(t._s(t.$t("tarefa.smt")))]),a("v-uni-view",{staticStyle:{display:"flex","align-items":"center"}},[t._v(t._s(t.$t("tarefa.yj"))+":"),a("v-uni-text",[t._v(t._s(t.orderInfo.currency)+t._s(Number(t.orderInfo.money*t.bonus_ratio/100).toFixed(2)))])],1)],1)],1)],1),a("u-button",{staticClass:"paca-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.pay.apply(void 0,arguments)}}},[t._v(t._s(t.$t("fazer.pay")))])],1)},o=[]},c7ea:function(t,e,a){"use strict";a.r(e);var r=a("9619"),i=a("4c05");for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("cdc2");var n,d=a("f0c5"),s=Object(d["a"])(i["default"],r["b"],r["c"],!1,null,"bfdde7b8",null,!1,r["a"],n);e["default"]=s.exports},cdc2:function(t,e,a){"use strict";var r=a("8a68"),i=a.n(r);i.a},cf9b:function(t,e,a){"use strict";a.r(e);var r=a("4ed3"),i=a.n(r);for(var o in r)"default"!==o&&function(t){a.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},d5088:function(t,e,a){"use strict";a.r(e);var r=a("929a"),i=a.n(r);for(var o in r)"default"!==o&&function(t){a.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},df2e:function(t,e,a){"use strict";a.r(e);var r=a("13c9"),i=a.n(r);for(var o in r)"default"!==o&&function(t){a.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},e109:function(t,e,a){"use strict";var r=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;r(a("4286"));var i=r(a("f273")),o={name:"box-detail-item",data:function(){return{show:!1,itemInfo:{}}},components:{boxDetailItem1:i.default},props:{order_id:String,orderInfo:{type:Object,default:function(){}}},methods:{getImg:function(t){return this.basePath+t},paysuccess:function(){this.show=!1,this.$emit("paysuccess")},pay:function(t,e){this.itemInfo=t,this.itemInfo.bonus_ratio=e,console.log(t),this.show=!0}}};e.default=o},f273:function(t,e,a){"use strict";a.r(e);var r=a("c7db"),i=a("d5088");for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("7195");var n,d=a("f0c5"),s=Object(d["a"])(i["default"],r["b"],r["c"],!1,null,"23aeab8c",null,!1,r["a"],n);e["default"]=s.exports},f285:function(t,e,a){var r=a("ffd2");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=a("4f06").default;i("bb913de2",r,!0,{sourceMap:!1,shadowMode:!1})},f63e:function(t,e,a){var r=a("817e");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=a("4f06").default;i("51040845",r,!0,{sourceMap:!1,shadowMode:!1})},ffd2:function(t,e,a){var r=a("24fb");e=r(!1),e.push([t.i,"uni-view[data-v-8f2ab8b2], uni-scroll-view[data-v-8f2ab8b2], uni-swiper-item[data-v-8f2ab8b2]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-navbar--fixed[data-v-8f2ab8b2]{position:fixed;left:0;right:0;top:0;z-index:11}.u-navbar__content[data-v-8f2ab8b2]{display:flex;flex-direction:row;align-items:center;height:44px;background-color:#9acafc;position:relative;justify-content:center}.u-navbar__content__left[data-v-8f2ab8b2], .u-navbar__content__right[data-v-8f2ab8b2]{padding:0 13px;position:absolute;top:0;bottom:0;display:flex;flex-direction:row;align-items:center}.u-navbar__content__left[data-v-8f2ab8b2]{left:0}.u-navbar__content__left--hover[data-v-8f2ab8b2]{opacity:.7}.u-navbar__content__left__text[data-v-8f2ab8b2]{font-size:15px;margin-left:3px}.u-navbar__content__title[data-v-8f2ab8b2]{text-align:center;font-size:16px;color:#303133}.u-navbar__content__right[data-v-8f2ab8b2]{right:0}.u-navbar__content__right__text[data-v-8f2ab8b2]{font-size:15px;margin-left:3px}.u-navbar__content__title[data-v-8f2ab8b2]{font-weight:700!important}",""]),t.exports=e}}]);