import{b as s,i as a}from"./index-DCFaiZ02.js";import{o as n,b as u,i as m}from"./modules/vue-R_M4Yk7U.js";const c={inject:{$slidev:{from:a}},props:{layout:{type:String,required:!1,default:"center"},url:{type:String,required:!1,default:"https://cn.sli.dev/logo.svg"},h:{type:String,required:!1}},setup(t){let o="";t.h&&(o=`h-${t.h} `);let e="";return t.layout=="right"||t.layout=="r"?e="float-right":t.layout=="center"||t.layout=="c"?e="mx-auto":t.layout=="rt"&&(e="absolute top-10 right-10 -z-1"),e=o+e,{imagepos:e}},methods:{show(){window.open(this.url)}}},d=["src","href"];function f(t,o,e,r,h,i){return n(),u("img",{src:e.url,href:e.url,alt:"image",class:m([r.imagepos,"shadow-md cursor-pointer rounded-xl border-image"]),onClick:o[0]||(o[0]=(...l)=>i.show&&i.show(...l))},null,10,d)}const p=s(c,[["render",f],["__file","C:/Users/Setsuna/AppData/Roaming/npm/node_modules/slidev-theme-prussianblue/components/mimage.vue"]]);export{p as _};