import{d as l,t as i,_ as u,D as m,E as c,o as p,b as d,i as f,A as s}from"../modules/vue-R_M4Yk7U.js";import{u as _}from"./context-8hd1kDyW.js";import{u as v}from"./DrawingPreview-dD_zDgxc.js";import{b as g}from"../index-BOLyj661.js";import"./bottom-B0RrAJUT.js";import"../modules/shiki-DY4Y_Q5a.js";const w=l({__name:"DrawingLayer",setup(D){const{drauu:e,drawingEnabled:a,loadCanvas:t}=v(),r=_().$scale,n=i();return u(()=>{e.mount(n.value,n.value.parentElement),m(r,o=>e.options.coordinateScale=1/o,{immediate:!0}),t()}),c(()=>{e.unmount()}),(o,C)=>(p(),d("svg",{ref_key:"svg",ref:n,class:f(["w-full h-full absolute top-0",{"pointer-events-none":!s(a),"touch-none":s(a)}])},null,2))}}),B=g(w,[["__file","C:/Users/Setsuna/AppData/Roaming/npm/node_modules/@slidev/cli/node_modules/@slidev/client/internals/DrawingLayer.vue"]]);export{B as default};
