function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/slidev/DrawingPreview-B52gvRs3.js","assets/modules/vue-R_M4Yk7U.js","assets/index-DCFaiZ02.js","assets/modules/shiki-DY4Y_Q5a.js","assets/modules/shiki-BSchMNmt.css","assets/index-Brl29k_y.css","assets/slidev/bottom-BVGAHeUN.js","assets/bottom-D70dUSbP.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{d as _,y as o,M as E,Y as R,J as F,o as l,b as c,l as d,A as e,i as D,c as m,g as C,h as L,F as v,Z as q,e as k,f as M,C as U,_ as V}from"../modules/vue-R_M4Yk7U.js";import{t as j}from"../modules/shiki-DY4Y_Q5a.js";import{G as z,g as G,S as W,a as I,w as O}from"./bottom-BVGAHeUN.js";import{s as T,a as g,_ as H,c as S,i as J,b as f,u as y,d as $,C as K,e as A,f as h,p as X,g as Y}from"../index-DCFaiZ02.js";import{P as Z}from"./PrintStyle-CjZ5e9Gs.js";const Q=["id"],ee=_({__name:"PrintSlideClick",props:{nav:{type:Object,required:!0}},setup(r){const{nav:t}=r,s=o(()=>t.currentSlideRoute.value),i=o(()=>({height:`${T.value}px`,width:`${g.value}px`})),n=E();H(()=>import("./DrawingPreview-B52gvRs3.js").then(a=>a.a),__vite__mapDeps([0,1,2,3,4,5,6,7])).then(a=>n.value=a.default);const u=o(()=>`${s.value.no.toString().padStart(3,"0")}-${(t.clicks.value+1).toString().padStart(2,"0")}`);return R(J,F({nav:t,configs:S,themeConfigs:o(()=>S.themeConfig)})),(a,w)=>(l(),c("div",{id:u.value,class:"print-slide-container",style:L(i.value)},[d(e(z)),d(W,{is:s.value.component,"clicks-context":a.nav.clicksContext.value,class:D(e(G)(s.value)),route:s.value},null,8,["is","clicks-context","class","route"]),n.value?(l(),m(e(n),{key:0,page:s.value.no},null,8,["page"])):C("v-if",!0),d(e(I))],12,Q))}}),N=f(ee,[["__file","C:/Users/Setsuna/AppData/Roaming/npm/node_modules/@slidev/cli/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),te=_({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(r){const{route:t}=r,{isPrintWithClicks:s}=y(),i=$(t,s.value?0:K);return(n,u)=>(l(),c(v,null,[d(N,{"clicks-context":e(i),nav:e(A)(n.route,e(i))},null,8,["clicks-context","nav"]),e(s)?(l(!0),c(v,{key:0},q(e(i).total,a=>(l(),m(N,{key:a,nav:e(A)(n.route,e($)(n.route,a))},null,8,["nav"]))),128)):C("v-if",!0)],64))}}),se=f(te,[["__file","C:/Users/Setsuna/AppData/Roaming/npm/node_modules/@slidev/cli/node_modules/@slidev/client/internals/PrintSlide.vue"]]),ne={id:"print-content"},ae=_({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(r){const t=r,{slides:s,currentRoute:i}=y(),n=o(()=>t.width),u=o(()=>t.width/h.value),a=o(()=>n.value/u.value),w=o(()=>a.value<h.value?n.value/g.value:u.value*h.value/g.value);let p=s.value;i.value.query.range&&(p=X(p.length,i.value.query.range).map(b=>p[b-1]));const B=o(()=>({"select-none":!S.selectable}));return R(Y,w),(P,b)=>(l(),c("div",{id:"print-container",class:D(B.value)},[k("div",ne,[(l(!0),c(v,null,q(e(p),x=>(l(),m(se,{key:x.no,route:x},null,8,["route"]))),128))]),M(P.$slots,"controls")],2))}}),le=f(ae,[["__file","C:/Users/Setsuna/AppData/Roaming/npm/node_modules/@slidev/cli/node_modules/@slidev/client/internals/PrintContainer.vue"]]),ie={id:"page-root",class:"grid grid-cols-[1fr_max-content]"},oe=k("div",{id:"twoslash-container"},null,-1),re=_({__name:"print",setup(r){const{isPrintMode:t}=y();return U(()=>{t?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),V(()=>{j()}),(s,i)=>(l(),c(v,null,[e(t)?(l(),m(Z,{key:0})):C("v-if",!0),k("div",ie,[d(le,{class:"w-full h-full",style:L({background:"var(--slidev-slide-container-background, black)"}),width:e(O).width.value},null,8,["style","width"])]),oe],64))}}),_e=f(re,[["__file","C:/Users/Setsuna/AppData/Roaming/npm/node_modules/@slidev/cli/node_modules/@slidev/client/pages/print.vue"]]);export{_e as default};