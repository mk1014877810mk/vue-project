webpackJsonp([9],{260:function(n,t,r){"use strict";function o(n){i||r(309)}Object.defineProperty(t,"__esModule",{value:!0});var a=r(311),d=r.n(a),s=r(312),i=!1,e=r(4),l=o,p=e(d.a,s.a,l,"data-v-240db455",null);p.options.__file="src\\components\\goods\\GoodsDetail.vue",p.esModule&&Object.keys(p.esModule).some(function(n){return"default"!==n&&"__"!==n.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),p.options.functional&&console.error("[vue-loader] GoodsDetail.vue: functional components are not supported with templates, they should use render functions."),t.default=p.exports},309:function(n,t,r){var o=r(310);"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);r(3)("7782f8cc",o,!1)},310:function(n,t,r){t=n.exports=r(2)(void 0),t.push([n.i,"\n.ball-enter-active[data-v-240db455] {\r\n    animation: bounce-in-data-v-240db455 1s;\n}\n@keyframes bounce-in-data-v-240db455 {\n0% {\r\n        /*translate3d硬件加速，流畅一些*/\r\n        transform: translate3d(0, 0, 0);\n}\n50% {\r\n        transform: translate3d(140px, -50px, 0);\n}\n75% {\r\n        transform: translate3d(160px, 0px, 0);\n}\n100% {\r\n        transform: translate3d(140px, 300px, 0);\n}\n}\n.swiper[data-v-240db455] {\r\n    border: 1px solid rgba(0, 0, 0, 0.2);\r\n    margin: 8px;\r\n    width: 95%;\r\n    border-radius: 15px;\r\n    overflow: hidden;\n}\n.outer-swiper[data-v-240db455],\r\n.product-desc[data-v-240db455],\r\n.product-props[data-v-240db455],\r\n.product-info[data-v-240db455] {\r\n    border-radius: 5px;\r\n    border: 1px solid rgba(0, 0, 0, 0.2);\r\n    margin: 3px;\n}\r\n\r\n\r\n/*请ulpadding*/\n.outer-swiper ul[data-v-240db455],\r\n.product-desc ul[data-v-240db455],\r\n.product-props ul[data-v-240db455],\r\n.product-info ul[data-v-240db455] {\r\n    padding: 0;\n}\n.product-desc ul li[data-v-240db455],\r\n.product-props ul li[data-v-240db455],\r\n.product-info ul li[data-v-240db455] {\r\n    list-style: none;\r\n    font-size: 15px;\r\n    color: rgba(0, 0, 0, 0.5);\r\n    margin-top: 8px;\n}\n.product-desc ul >:nth-child(1) span[data-v-240db455] {\r\n    color: blue;\r\n    font-size: 22px;\r\n    font-weight: bold;\n}\n.product-desc ul[data-v-240db455] >:nth-child(1) {\r\n    border-bottom: 1px solid rgba(0, 0, 0, 0.5);\n}\n.product-desc ul[data-v-240db455],\r\n.product-info ul[data-v-240db455],\r\n.product-props ul[data-v-240db455] {\r\n    padding-left: 10px;\n}\n.price-li span[data-v-240db455] {\r\n    color: red;\r\n    font-size: 25px;\n}\n.price-li s[data-v-240db455] {\r\n    margin-right: 16px;\n}\r\n\r\n\r\n/*加减*/\n.number-li span[data-v-240db455] {\r\n    display: inline-block;\r\n    border: 2px solid rgba(0, 0, 0, 0.1);\r\n    width: 25px;\n}\r\n\r\n\r\n/*商品参数*/\n.product-props ul[data-v-240db455] >:nth-child(1) {\r\n    text-align: left;\n}\n.product-props ul[data-v-240db455]:not(:nth-child(1)) {\r\n    margin-left: 40px;\n}\n.product-info ul[data-v-240db455] {\r\n    margin-bottom: 70px;\r\n    padding: 0 5;\n}\n.number-li span[data-v-240db455] {\r\n    text-align: center;\n}\n.number-li[data-v-240db455] >:nth-child(2) {\r\n    width: 40px;\n}\n.ball[data-v-240db455] {\r\n    border-radius: 50%;\r\n    background-color: red;\r\n    width: 24px;\r\n    height: 24px;\r\n    position: absolute;\r\n    top: 440px;\r\n    left: 120px;\r\n    display: inline-block;\r\n    z-index: 9999;\n}\r\n",""])},311:function(n,t,r){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(139),d=o(a),s=r(140),i=o(s);t.default={data:function(){return{pickNum:1,isShow:!1,goodsInfo:{}}},created:function(){var n=this,t=this.$route.params.goodsId;this.$ajax.get("goods/getinfo/"+t).then(function(t){n.goodsInfo=t.data.message[0]}).catch(function(n){console.log("获取商品信息失败",n)})},methods:{addShopcart:function(){this.isShow=!0,d.default.$emit("changeShopcart",this.pickNum),i.default.addOrUpdate({id:this.goodsInfo.id,num:this.pickNum})},afterEnter:function(){this.isShow=!1},add:function(){this.goodsInfo.stock_quantity<=this.pickNum||this.pickNum++},sub:function(){this.pickNum<=1||this.pickNum--},showGoodsComment:function(){this.$router.push({name:"goods.comment",query:{goodsId:this.goodsInfo.id}})},showPhotoInfo:function(){this.$router.push({name:"goods.PhotoDetail",query:{newsId:this.goodsInfo.id}})}}}},312:function(n,t,r){"use strict";var o=function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("div",[r("nav-bar",{attrs:{title:"商品详情"}}),n._v(" "),r("div",{staticClass:"outer-swiper"},[r("div",{staticClass:"swiper"},[r("my-swipe",{attrs:{url:"getthumimages/"+n.$route.params.goodsId}})],1)]),n._v(" "),r("div",{staticClass:"product-desc"},[r("ul",[r("li",[r("span",{staticClass:"product-desc-span"},[n._v("\n                "+n._s(n.goodsInfo.title)+"\n            ")])]),n._v(" "),r("li",{staticClass:"price-li"},[n._v("市场价：\n                "),r("s",[n._v("￥"+n._s(n.goodsInfo.market_price))]),n._v(" 销售价："),r("span",[n._v("￥"+n._s(n.goodsInfo.sell_price))])]),n._v(" "),r("li",{staticClass:"number-li"},[n._v("购买数量："),r("span",{on:{click:n.sub}},[n._v("-")]),r("span",[n._v(n._s(n.pickNum))]),r("span",{on:{click:n.add}},[n._v("+")])]),n._v(" "),r("li",[r("mt-button",{attrs:{type:"primary"}},[n._v("立即购买")]),n._v(" "),r("mt-button",{attrs:{type:"danger"},on:{click:n.addShopcart}},[n._v("加入购物车")])],1)])]),n._v(" "),r("transition",{attrs:{name:"ball"},on:{"after-enter":n.afterEnter}},[n.isShow?r("div",{staticClass:"ball"}):n._e()]),n._v(" "),r("div",{staticClass:"product-props"},[r("ul",[r("li",[n._v("商品参数")]),n._v(" "),r("li",[n._v("商品货号："+n._s(n.goodsInfo.goods_no))]),n._v(" "),r("li",[n._v("库存情况："+n._s(n.goodsInfo.stock_quantity)+"件")]),n._v(" "),r("li",[n._v("上架时间："+n._s(n._f("convertDate")(n.goodsInfo.add_time)))])])]),n._v(" "),r("div",{staticClass:"product-info"},[r("ul",[r("li",[r("mt-button",{attrs:{type:"primary",size:"large",plain:""},on:{click:n.showPhotoInfo}},[n._v("图文介绍")])],1),n._v(" "),r("li",[r("mt-button",{attrs:{type:"danger",size:"large",plain:""},on:{click:n.showGoodsComment}},[n._v("商品评论")])],1)])])],1)},a=[];o._withStripped=!0;var d={render:o,staticRenderFns:a};t.a=d}});