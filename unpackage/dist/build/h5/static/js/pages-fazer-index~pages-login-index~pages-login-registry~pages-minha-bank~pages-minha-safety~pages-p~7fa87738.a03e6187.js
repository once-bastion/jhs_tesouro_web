(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-fazer-index~pages-login-index~pages-login-registry~pages-minha-bank~pages-minha-safety~pages-p~7fa87738"],{"14bd":function(t,e,o){var n=o("24fb");e=n(!1),e.push([t.i,'uni-view[data-v-3062117e], uni-scroll-view[data-v-3062117e], uni-swiper-item[data-v-3062117e]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-button[data-v-3062117e]{width:100%}.u-button__text[data-v-3062117e]{white-space:nowrap;line-height:1}.u-button[data-v-3062117e]:before{position:absolute;top:50%;left:50%;width:100%;height:100%;border:inherit;border-radius:inherit;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);opacity:0;content:" ";background-color:#000;border-color:#000}.u-button--active[data-v-3062117e]:before{opacity:.15}.u-button__icon + .u-button__text[data-v-3062117e]:not(:empty), .u-button__loading-text[data-v-3062117e]{margin-left:4px}.u-button--plain.u-button--primary[data-v-3062117e]{color:#3c9cff}.u-button--plain.u-button--info[data-v-3062117e]{color:#909399}.u-button--plain.u-button--success[data-v-3062117e]{color:#5ac725}.u-button--plain.u-button--error[data-v-3062117e]{color:#f56c6c}.u-button--plain.u-button--warning[data-v-3062117e]{color:#f56c6c}.u-button[data-v-3062117e]{height:50px;position:relative;align-items:center;justify-content:center;display:flex;flex-direction:row;box-sizing:border-box;flex-direction:row}.u-button__text[data-v-3062117e]{font-size:15px}.u-button__loading-text[data-v-3062117e]{font-size:15px;margin-left:4px}.u-button--large[data-v-3062117e]{width:100%;height:50px;padding:0 15px}.u-button--normal[data-v-3062117e]{padding:0 12px;font-size:14px}.u-button--small[data-v-3062117e]{min-width:60px;height:30px;padding:0 8px;font-size:12px}.u-button--mini[data-v-3062117e]{height:22px;font-size:10px;min-width:50px;padding:0 8px}.u-button--disabled[data-v-3062117e]{opacity:.5}.u-button--info[data-v-3062117e]{color:#323233;background-color:#fff;border-color:#ebedf0;border-width:1px;border-style:solid}.u-button--success[data-v-3062117e]{color:#fff;background-color:#5ac725;border-color:#5ac725;border-width:1px;border-style:solid}.u-button--primary[data-v-3062117e]{color:#fff;background-color:#3c9cff;border-color:#3c9cff;border-width:1px;border-style:solid}.u-button--error[data-v-3062117e]{color:#fff;background-color:#f56c6c;border-color:#f56c6c;border-width:1px;border-style:solid}.u-button--warning[data-v-3062117e]{color:#fff;background-color:#f9ae3d;border-color:#f9ae3d;border-width:1px;border-style:solid}.u-button--block[data-v-3062117e]{display:flex;flex-direction:row;width:100%}.u-button--circle[data-v-3062117e]{border-top-right-radius:100px;border-top-left-radius:100px;border-bottom-left-radius:100px;border-bottom-right-radius:100px}.u-button--square[data-v-3062117e]{border-bottom-left-radius:3px;border-bottom-right-radius:3px;border-top-left-radius:3px;border-top-right-radius:3px}.u-button__icon[data-v-3062117e]{min-width:1em;line-height:inherit!important;vertical-align:top}.u-button--plain[data-v-3062117e]{background-color:#fff}.u-button--hairline[data-v-3062117e]{border-width:.5px!important}',""]),t.exports=e},"1b59":function(t,e,o){"use strict";o.d(e,"b",(function(){return i})),o.d(e,"c",(function(){return r})),o.d(e,"a",(function(){return n}));var n={uLoadingIcon:o("ef00").default,uIcon:o("c51a").default},i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-button",{staticClass:"u-button u-reset-button",class:t.bemClass,style:[t.baseColor,t.$u.addStyle(t.customStyle)],attrs:{"hover-start-time":Number(t.hoverStartTime),"hover-stay-time":Number(t.hoverStayTime),"form-type":t.formType,"open-type":t.openType,"app-parameter":t.appParameter,"hover-stop-propagation":t.hoverStopPropagation,"send-message-title":t.sendMessageTitle,"send-message-path":t.sendMessagePath,lang:t.lang,"data-name":t.dataName,"session-from":t.sessionFrom,"send-message-img":t.sendMessageImg,"show-message-card":t.showMessageCard,"hover-class":t.disabled||t.loading?"":"u-button--active"},on:{getphonenumber:function(e){arguments[0]=e=t.$handleEvent(e),t.getphonenumber.apply(void 0,arguments)},getuserinfo:function(e){arguments[0]=e=t.$handleEvent(e),t.getuserinfo.apply(void 0,arguments)},error:function(e){arguments[0]=e=t.$handleEvent(e),t.error.apply(void 0,arguments)},opensetting:function(e){arguments[0]=e=t.$handleEvent(e),t.opensetting.apply(void 0,arguments)},launchapp:function(e){arguments[0]=e=t.$handleEvent(e),t.launchapp.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickHandler.apply(void 0,arguments)}}},[t.loading?[o("u-loading-icon",{attrs:{mode:t.loadingMode,size:1.15*t.textSize,color:t.loadingColor}}),o("v-uni-text",{staticClass:"u-button__loading-text",style:[{fontSize:t.textSize+"px"}]},[t._v(t._s(t.loadingText||t.text))])]:[t.icon?o("u-icon",{attrs:{name:t.icon,color:t.iconColorCom,size:1.35*t.textSize,customStyle:{marginRight:"2px"}}}):t._e(),t._t("default",[o("v-uni-text",{staticClass:"u-button__text",style:[{fontSize:t.textSize+"px"}]},[t._v(t._s(t.text))])])]],2)},r=[]},"32e1":function(t,e,o){var n=o("9f02");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=o("4f06").default;i("62fd63bb",n,!0,{sourceMap:!1,shadowMode:!1})},"57e6":function(t,e,o){"use strict";o.r(e);var n=o("1b59"),i=o("6e89d");for(var r in i)"default"!==r&&function(t){o.d(e,t,(function(){return i[t]}))}(r);o("79d3");var a,d=o("f0c5"),u=Object(d["a"])(i["default"],n["b"],n["c"],!1,null,"3062117e",null,!1,n["a"],a);e["default"]=u.exports},"63bd":function(t,e,o){"use strict";var n;o.d(e,"b",(function(){return i})),o.d(e,"c",(function(){return r})),o.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.show?o("v-uni-view",{staticClass:"u-loading-icon",class:[t.vertical&&"u-loading-icon--vertical"],style:[t.$u.addStyle(t.customStyle)]},[t.webviewHide?t._e():o("v-uni-view",{ref:"ani",staticClass:"u-loading-icon__spinner",class:["u-loading-icon__spinner--"+t.mode],style:{color:t.color,width:t.$u.addUnit(t.size),height:t.$u.addUnit(t.size),borderTopColor:t.color,borderBottomColor:t.otherBorderColor,borderLeftColor:t.otherBorderColor,borderRightColor:t.otherBorderColor,"animation-duration":t.duration+"ms","animation-timing-function":"semicircle"===t.mode||"circle"===t.mode?t.timingFunction:""}},["spinner"===t.mode?t._l(t.array12,(function(t,e){return o("v-uni-view",{key:e,staticClass:"u-loading-icon__dot"})})):t._e()],2),t.text?o("v-uni-text",{staticClass:"u-loading-icon__text",style:{fontSize:t.$u.addUnit(t.textSize),color:t.textColor}},[t._v(t._s(t.text))]):t._e()],1):t._e()},r=[]},"6e89d":function(t,e,o){"use strict";o.r(e);var n=o("a131"),i=o.n(n);for(var r in n)"default"!==r&&function(t){o.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"79d3":function(t,e,o){"use strict";var n=o("939d"),i=o.n(n);i.a},"939d":function(t,e,o){var n=o("14bd");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=o("4f06").default;i("87d2678e",n,!0,{sourceMap:!1,shadowMode:!1})},"9f02":function(t,e,o){var n=o("24fb");e=n(!1),e.push([t.i,'uni-view[data-v-d78e66de], uni-scroll-view[data-v-d78e66de], uni-swiper-item[data-v-d78e66de]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-loading-icon[data-v-d78e66de]{flex-direction:row;align-items:center;justify-content:center;color:#c8c9cc}.u-loading-icon__text[data-v-d78e66de]{margin-left:4px;color:#606266;font-size:14px;line-height:20px}.u-loading-icon__spinner[data-v-d78e66de]{width:30px;height:30px;position:relative;box-sizing:border-box;max-width:100%;max-height:100%;-webkit-animation:u-rotate-data-v-d78e66de 1s linear infinite;animation:u-rotate-data-v-d78e66de 1s linear infinite}.u-loading-icon__spinner--semicircle[data-v-d78e66de]{border-width:2px;border-color:transparent;border-top-right-radius:100px;border-top-left-radius:100px;border-bottom-left-radius:100px;border-bottom-right-radius:100px;border-style:solid}.u-loading-icon__spinner--circle[data-v-d78e66de]{border-top-right-radius:100px;border-top-left-radius:100px;border-bottom-left-radius:100px;border-bottom-right-radius:100px;border-width:2px;border-top-color:#e5e5e5;border-right-color:#e5e5e5;border-bottom-color:#e5e5e5;border-left-color:#e5e5e5;border-style:solid}.u-loading-icon--vertical[data-v-d78e66de]{flex-direction:column}[data-v-d78e66de]:host{font-size:0;line-height:1}.u-loading-icon__spinner--spinner[data-v-d78e66de]{-webkit-animation-timing-function:steps(12);animation-timing-function:steps(12)}.u-loading-icon__text[data-v-d78e66de]:empty{display:none}.u-loading-icon--vertical .u-loading-icon__text[data-v-d78e66de]{margin:6px 0 0;color:#606266}.u-loading-icon__dot[data-v-d78e66de]{position:absolute;top:0;left:0;width:100%;height:100%}.u-loading-icon__dot[data-v-d78e66de]:before{display:block;width:2px;height:25%;margin:0 auto;background-color:currentColor;border-radius:40%;content:" "}.u-loading-icon__dot[data-v-d78e66de]:nth-of-type(1){-webkit-transform:rotate(30deg);transform:rotate(30deg);opacity:1}.u-loading-icon__dot[data-v-d78e66de]:nth-of-type(2){-webkit-transform:rotate(60deg);transform:rotate(60deg);opacity:.9375}.u-loading-icon__dot[data-v-d78e66de]:nth-of-type(3){-webkit-transform:rotate(90deg);transform:rotate(90deg);opacity:.875}.u-loading-icon__dot[data-v-d78e66de]:nth-of-type(4){-webkit-transform:rotate(120deg);transform:rotate(120deg);opacity:.8125}.u-loading-icon__dot[data-v-d78e66de]:nth-of-type(5){-webkit-transform:rotate(150deg);transform:rotate(150deg);opacity:.75}.u-loading-icon__dot[data-v-d78e66de]:nth-of-type(6){-webkit-transform:rotate(180deg);transform:rotate(180deg);opacity:.6875}.u-loading-icon__dot[data-v-d78e66de]:nth-of-type(7){-webkit-transform:rotate(210deg);transform:rotate(210deg);opacity:.625}.u-loading-icon__dot[data-v-d78e66de]:nth-of-type(8){-webkit-transform:rotate(240deg);transform:rotate(240deg);opacity:.5625}.u-loading-icon__dot[data-v-d78e66de]:nth-of-type(9){-webkit-transform:rotate(270deg);transform:rotate(270deg);opacity:.5}.u-loading-icon__dot[data-v-d78e66de]:nth-of-type(10){-webkit-transform:rotate(300deg);transform:rotate(300deg);opacity:.4375}.u-loading-icon__dot[data-v-d78e66de]:nth-of-type(11){-webkit-transform:rotate(330deg);transform:rotate(330deg);opacity:.375}.u-loading-icon__dot[data-v-d78e66de]:nth-of-type(12){-webkit-transform:rotate(1turn);transform:rotate(1turn);opacity:.3125}@-webkit-keyframes u-rotate-data-v-d78e66de{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes u-rotate-data-v-d78e66de{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}',""]),t.exports=e},a131:function(t,e,o){"use strict";var n=o("4ea4");o("c975"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;n(o("aeaf")),n(o("a449"));var i=n(o("d66c")),r={name:"u-button",mixins:[uni.$u.mpMixin,uni.$u.mixin,i.default],data:function(){return{}},computed:{bemClass:function(){return this.color?this.bem("button",["shape","size"],["disabled","plain","hairline"]):this.bem("button",["type","shape","size"],["disabled","plain","hairline"])},loadingColor:function(){return this.plain?this.color?this.color:uni.$u.config.color["u-".concat(this.type)]:"info"===this.type?"#c9c9c9":"rgb(200, 200, 200)"},iconColorCom:function(){return this.iconColor?this.iconColor:this.plain?this.color?this.color:this.type:"info"===this.type?"#000000":"#ffffff"},baseColor:function(){var t={};return this.color&&(t.color=this.plain?this.color:"white",this.plain||(t["background-color"]=this.color),-1!==this.color.indexOf("gradient")?(t.borderTopWidth=0,t.borderRightWidth=0,t.borderBottomWidth=0,t.borderLeftWidth=0,this.plain||(t.backgroundImage=this.color)):(t.borderColor=this.color,t.borderWidth="1px",t.borderStyle="solid")),t},nvueTextStyle:function(){var t={};return"info"===this.type&&(t.color="#323233"),this.color&&(t.color=this.plain?this.color:"white"),t.fontSize=this.textSize+"px",t},textSize:function(){var t=14,e=this.size;return"large"===e&&(t=16),"normal"===e&&(t=14),"small"===e&&(t=12),"mini"===e&&(t=10),t}},methods:{clickHandler:function(){var t=this;this.disabled||this.loading||uni.$u.throttle((function(){t.$emit("click")}),this.throttleTime)},getphonenumber:function(t){this.$emit("getphonenumber",t)},getuserinfo:function(t){this.$emit("getuserinfo",t)},error:function(t){this.$emit("error",t)},opensetting:function(t){this.$emit("opensetting",t)},launchapp:function(t){this.$emit("launchapp",t)}}};e.default=r},a449:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{openType:String},methods:{onGetUserInfo:function(t){this.$emit("getuserinfo",t.detail)},onContact:function(t){this.$emit("contact",t.detail)},onGetPhoneNumber:function(t){this.$emit("getphonenumber",t.detail)},onError:function(t){this.$emit("error",t.detail)},onLaunchApp:function(t){this.$emit("launchapp",t.detail)},onOpenSetting:function(t){this.$emit("opensetting",t.detail)}}};e.default=n},aeaf:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{lang:String,sessionFrom:String,sendMessageTitle:String,sendMessagePath:String,sendMessageImg:String,showMessageCard:Boolean,appParameter:String,formType:String,openType:String}};e.default=n},b0e8:function(t,e,o){"use strict";var n=o("4ea4");o("a630"),o("3ca3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(o("bf40")),r={name:"u-loading-icon",mixins:[uni.$u.mpMixin,uni.$u.mixin,i.default],data:function(){return{array12:Array.from({length:12}),aniAngel:360,webviewHide:!1,loading:!1}},computed:{otherBorderColor:function(){var t=uni.$u.colorGradient(this.color,"#ffffff",100)[80];return"circle"===this.mode?this.inactiveColor?this.inactiveColor:t:"transparent"}},watch:{show:function(t){}},mounted:function(){this.init()},methods:{init:function(){setTimeout((function(){}),20)},addEventListenerToWebview:function(){var t=this,e=getCurrentPages(),o=e[e.length-1],n=o.$getAppWebview();n.addEventListener("hide",(function(){t.webviewHide=!0})),n.addEventListener("show",(function(){t.webviewHide=!1}))}}};e.default=r},b812:function(t,e,o){"use strict";o.r(e);var n=o("b0e8"),i=o.n(n);for(var r in n)"default"!==r&&function(t){o.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},bf40:function(t,e,o){"use strict";o("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{show:{type:Boolean,default:uni.$u.props.loadingIcon.show},color:{type:String,default:uni.$u.props.loadingIcon.color},textColor:{type:String,default:uni.$u.props.loadingIcon.textColor},vertical:{type:Boolean,default:uni.$u.props.loadingIcon.vertical},mode:{type:String,default:uni.$u.props.loadingIcon.mode},size:{type:[String,Number],default:uni.$u.props.loadingIcon.size},textSize:{type:[String,Number],default:uni.$u.props.loadingIcon.textSize},text:{type:[String,Number],default:uni.$u.props.loadingIcon.text},timingFunction:{type:String,default:uni.$u.props.loadingIcon.timingFunction},duration:{type:[String,Number],default:uni.$u.props.loadingIcon.duration},inactiveColor:{type:String,default:uni.$u.props.loadingIcon.inactiveColor}}};e.default=n},d66c:function(t,e,o){"use strict";o("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{hairline:{type:Boolean,default:uni.$u.props.button.hairline},type:{type:String,default:uni.$u.props.button.type},size:{type:String,default:uni.$u.props.button.size},shape:{type:String,default:uni.$u.props.button.shape},plain:{type:Boolean,default:uni.$u.props.button.plain},disabled:{type:Boolean,default:uni.$u.props.button.disabled},loading:{type:Boolean,default:uni.$u.props.button.loading},loadingText:{type:[String,Number],default:uni.$u.props.button.loadingText},loadingMode:{type:String,default:uni.$u.props.button.loadingMode},loadingSize:{type:[String,Number],default:uni.$u.props.button.loadingSize},openType:{type:String,default:uni.$u.props.button.openType},formType:{type:String,default:uni.$u.props.button.formType},appParameter:{type:String,default:uni.$u.props.button.appParameter},hoverStopPropagation:{type:Boolean,default:uni.$u.props.button.hoverStopPropagation},lang:{type:String,default:uni.$u.props.button.lang},sessionFrom:{type:String,default:uni.$u.props.button.sessionFrom},sendMessageTitle:{type:String,default:uni.$u.props.button.sendMessageTitle},sendMessagePath:{type:String,default:uni.$u.props.button.sendMessagePath},sendMessageImg:{type:String,default:uni.$u.props.button.sendMessageImg},showMessageCard:{type:Boolean,default:uni.$u.props.button.showMessageCard},dataName:{type:String,default:uni.$u.props.button.dataName},throttleTime:{type:[String,Number],default:uni.$u.props.button.throttleTime},hoverStartTime:{type:[String,Number],default:uni.$u.props.button.hoverStartTime},hoverStayTime:{type:[String,Number],default:uni.$u.props.button.hoverStayTime},text:{type:[String,Number],default:uni.$u.props.button.text},icon:{type:String,default:uni.$u.props.button.icon},iconColor:{type:String,default:uni.$u.props.button.icon},color:{type:String,default:uni.$u.props.button.color}}};e.default=n},ef00:function(t,e,o){"use strict";o.r(e);var n=o("63bd"),i=o("b812");for(var r in i)"default"!==r&&function(t){o.d(e,t,(function(){return i[t]}))}(r);o("fa14");var a,d=o("f0c5"),u=Object(d["a"])(i["default"],n["b"],n["c"],!1,null,"d78e66de",null,!1,n["a"],a);e["default"]=u.exports},fa14:function(t,e,o){"use strict";var n=o("32e1"),i=o.n(n);i.a}}]);