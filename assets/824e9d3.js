(window.webpackJsonp=window.webpackJsonp||[]).push([[14,6],{270:function(t,e,r){"use strict";r.r(e);var c=r(19),n={data:function(){return{config:c}}},o=r(16),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row gy-2 gx-4 mb-4 mt-5"},t._l(t.config.checklist,(function(e,c){return r("div",{key:c,staticClass:"col-sm-6"},[r("p",{staticClass:"mb-0"},[r("i",{staticClass:"fa fa-arrow-right text-primary me-2"}),t._v(t._s(e)+"\n    ")])])})),0)}),[],!1,null,null,null);e.default=component.exports},274:function(t,e,r){var content=r(278);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(57).default)("160ece17",content,!0,{sourceMap:!1})},277:function(t,e,r){"use strict";r(274)},278:function(t,e,r){var c=r(56)(!1);c.push([t.i,".carousel-control-next-icon[data-v-5393bb9c],.carousel-control-prev-icon[data-v-5393bb9c]{background-color:rgba(0,0,0,.5);width:50px;height:50px;border-radius:50%}.carousel-control-next-icon[data-v-5393bb9c]:hover,.carousel-control-prev-icon[data-v-5393bb9c]:hover{background-color:rgba(0,0,0,.7)}",""]),t.exports=c},281:function(t,e,r){"use strict";r.r(e);var c=r(19),n=r(268),o={name:"productheader",props:{product:Object},data:function(){return{config:c}},methods:{decode:function(t){return n.decode(t)}}},l=(r(277),r(16)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"container-xxl py-5"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row g-5"},[r("div",{staticClass:"col-lg-6 fadeInUp",staticStyle:{"min-height":"400px"}},[r("div",{staticClass:"position-relative h-100"},[r("div",{staticClass:"carousel slide h-100",attrs:{id:"headerCarousel","data-bs-ride":"carousel"}},[r("div",{staticClass:"carousel-inner h-100"},t._l(t.product.localThumbs,(function(image,e){return r("div",{key:e,class:{"carousel-item":!0,active:0===e,"h-100":!0}},[r("nuxt-img",{staticClass:"img-fluid position-absolute w-100 h-100",staticStyle:{"object-fit":"cover","object-position":"center bottom"},attrs:{src:""+t.config.imageFolder+image,alt:t.product.name,preset:"productHeader"}})],1)})),0),t._v(" "),t._m(0),t._v(" "),t._m(1)])])]),t._v(" "),r("div",{staticClass:"col-lg-6 fadeInUp"},[r("div",{staticClass:"section-title bg-white text-start text-primary pe-3 h6"},[t._v("\n            "+t._s(t.product.category)+"\n          ")]),t._v(" "),r("h1",{staticClass:"mb-4"},[t._v(t._s(t.product.name))]),t._v(" "),r("p",{staticClass:"mb-4"},[t._v("\n            Die "+t._s(t.product.name)+" ist eine\n            "+t._s(t.product.categories[this.product.categories.length-2].slice(0,-1))+"\n            von der Marke "+t._s(t.decode(t.product.brand))+". Sie ist für einen Preis\n            von "+t._s(t.product.price)+" EUR verfügbar und ist sofort lieferbar.\n            Die "+t._s(t.decode(t.product.name))+" hat eine Gesamtbewertung von\n            "+t._s(t.product.stars)+"/5.\n          ")]),t._v(" "),r("p",{staticClass:"mb-4"},[t._v("\n            Das Produkt "),r("strong",[t._v(t._s(t.product.name))]),t._v(" bestand folgende\n            Testkriterien:\n          ")]),t._v(" "),r("Checklist"),t._v(" "),r("a",{staticClass:"btn btn-primary py-3 px-5 mt-2",attrs:{href:"#testbericht"}},[t._v("Zum Produkt")])],1)])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"carousel-control-prev",attrs:{type:"button","data-bs-target":"#headerCarousel","data-bs-slide":"prev"}},[r("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),t._v(" "),r("span",{staticClass:"visually-hidden"},[t._v("Previous")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"carousel-control-next",attrs:{type:"button","data-bs-target":"#headerCarousel","data-bs-slide":"next"}},[r("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),t._v(" "),r("span",{staticClass:"visually-hidden"},[t._v("Next")])])}],!1,null,"5393bb9c",null);e.default=component.exports;installComponents(component,{Checklist:r(270).default})}}]);