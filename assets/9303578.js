(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{268:function(t,e,n){"use strict";var r=n(5),c=n(1),o=n(3),l=n(57),f=n(194),d=n(193),v=n(4),_=c.RangeError,m=c.String,y=Math.floor,h=o(d),w=o("".slice),C=o(1..toFixed),k=function(t,e,n){return 0===e?n:e%2==1?k(t,e-1,n*t):k(t*t,e/2,n)},x=function(data,t,e){for(var n=-1,r=e;++n<6;)r+=t*data[n],data[n]=r%1e7,r=y(r/1e7)},j=function(data,t){for(var e=6,n=0;--e>=0;)n+=data[e],data[e]=y(n/t),n=n%t*1e7},D=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=m(data[t]);s=""===s?e:s+h("0",7-e.length)+e}return s};r({target:"Number",proto:!0,forced:v((function(){return"0.000"!==C(8e-5,3)||"1"!==C(.9,0)||"1.25"!==C(1.255,2)||"1000000000000000128"!==C(0xde0b6b3a7640080,0)}))||!v((function(){C({})}))},{toFixed:function(t){var e,n,r,c,o=f(this),d=l(t),data=[0,0,0,0,0,0],v="",y="0";if(d<0||d>20)throw _("Incorrect fraction digits");if(o!=o)return"NaN";if(o<=-1e21||o>=1e21)return m(o);if(o<0&&(v="-",o=-o),o>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(o*k(2,69,1))-69)<0?o*k(2,-e,1):o/k(2,e,1),n*=4503599627370496,(e=52-e)>0){for(x(data,0,n),r=d;r>=7;)x(data,1e7,0),r-=7;for(x(data,k(10,r,1),0),r=e-1;r>=23;)j(data,1<<23),r-=23;j(data,1<<r),x(data,1,1),j(data,2),y=D(data)}else x(data,0,n),x(data,1<<-e,0),y=D(data)+h("0",d);return y=d>0?v+((c=y.length)<=d?"0."+h("0",d-c)+y:w(y,0,c-d)+"."+w(y,c-d)):v+y}})},269:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));n(268);var r=n(19);function c(t){return(t*r.snipcart.factor).toFixed(2)}},276:function(t,e,n){"use strict";n.r(e);n(141),n(10),n(30);var r=n(19),c=n(70),o=n(140),l=n(269),f=n(260),d={name:"productcard",props:{product:Object},data:function(){var t=this,e=this.product.category,n=c.find((function(t){return t.key===e.toLowerCase()}));n.key===e.toLowerCase()||(n=n.subCategories.find((function(t){return t.key===e.toLowerCase()})));var l=o.find((function(e){return e.name===t.product.brand}));return{config:r,categoryData:n,brandData:l}},computed:{calculatedPrice:function(){return Object(l.a)(this.product.price)}},methods:{decode:function(t){return f.decode(t)}}},v=n(18),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"sidebar-widget schedule-widget mt-5"},[n("div",{staticClass:"mb-4 h5"},[t._v(t._s(t.product.name))]),t._v(" "),n("ul",{staticClass:"list-unstyled"},[n("li",{staticClass:"d-flex justify-content-between align-items-center"},[n("span",[t._v("Marke")]),t._v(" "),n("span",[n("nuxt-link",{attrs:{title:t.config.seo.mainKeyword+" von "+t.decode(t.product.brand),to:"/marken/"+t.brandData.slug+"/"},domProps:{innerHTML:t._s(t.product.brand)}})],1)]),t._v(" "),n("hr"),t._v(" "),n("li",{staticClass:"d-flex justify-content-between align-items-center"},[n("span",[t._v("Kategorie")]),t._v(" "),n("nuxt-link",{attrs:{to:"/kategorie/"+t.categoryData.slug+"/",title:t.categoryData.name}},[n("span",[t._v(t._s(t.categoryData.name))])])],1),t._v(" "),n("hr"),t._v(" "),t._l(t.product.specifications,(function(e,r){return n("div",{key:r},[n("li",{staticClass:"d-flex justify-content-between align-items-center"},[n("span",[t._v(t._s(Object.keys(e)[0]))]),t._v(" "),n("span",[t._v(t._s(Object.values(e)[0]))])]),t._v(" "),n("hr")])})),t._v(" "),n("li",{staticClass:"d-flex justify-content-between align-items-center"},[n("span",[t._v("Bewertung")]),t._v(" "),n("div",{staticClass:"mb-1 mt-3"},[t._l(t.product.stars,(function(t){return n("small",{key:t,staticClass:"pl-3 fa fa-star text-primary"})})),t._v(" "),t._l(5-t.product.stars,(function(t){return n("small",{key:t,staticClass:"fa fa-star text-default"})}))],2)]),t._v(" "),n("hr")],2),t._v(" "),n("div",{staticClass:"sidebar-contact-info mt-4"},[n("p",{staticClass:"mb-0"},[t._v("Preis")]),t._v(" "),n("div",{staticClass:"h3"},[t._v("\n        "+t._s(t.calculatedPrice)+"\n        EUR\n      ")])])])])}),[],!1,null,null,null);e.default=component.exports}}]);