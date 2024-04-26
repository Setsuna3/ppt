import{d as _,$ as u,y as h,b as a,e as t,x as s,A as r,F as f,Z as v,o as n,a0 as g,l as x,g as b}from"../modules/vue-BvJ_S139.js";import{u as y,h as N,c as m,b as k}from"../index-C7YBJtW7.js";import{N as w}from"./NoteDisplay-Cxae60ad.js";import"../modules/shiki-DuTKT9d9.js";const D={id:"page-root"},L={class:"m-4"},S={class:"mb-10"},T={class:"text-4xl font-bold mt-2"},V={class:"opacity-50"},A={class:"text-lg"},B={class:"font-bold flex gap-2"},C={class:"opacity-50"},H=t("div",{class:"flex-auto"},null,-1),F={key:0,class:"border-main mb-8"},M=_({__name:"print",setup($){const{slides:p,total:d}=y();u(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),N({title:`Notes - ${m.title}`});const i=h(()=>p.value.map(o=>{var l;return(l=o.meta)==null?void 0:l.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,l)=>(n(),a("div",D,[t("div",L,[t("div",S,[t("h1",T,s(r(m).title),1),t("div",V,s(new Date().toLocaleString()),1)]),(n(!0),a(f,null,v(i.value,(e,c)=>(n(),a("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",A,[t("div",B,[t("div",C,s(e==null?void 0:e.no)+"/"+s(r(d)),1),g(" "+s(e==null?void 0:e.title)+" ",1),H])]),x(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<i.value.length-1?(n(),a("hr",F)):b("v-if",!0)]))),128))])]))}}),U=k(M,[["__file","C:/Users/Setsuna/AppData/Roaming/npm/node_modules/@slidev/cli/node_modules/@slidev/client/pages/presenter/print.vue"]]);export{U as default};
