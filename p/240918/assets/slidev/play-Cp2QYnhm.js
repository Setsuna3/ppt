const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/slidev/DrawingControls-DOq9U0y0.js","assets/slidev/DrawingControls.vue_vue_type_style_index_0_lang-CWOpdINW.js","assets/modules/unplugin-icons-dW3qM7YX.js","assets/modules/vue-CZkfEai8.js","assets/modules/shiki-2px8ptvS.js","assets/modules/shiki-BPvBenZD.css","assets/slidev/DrawingPreview.vue_vue_type_script_setup_true_lang-B9kitutl.js","assets/index-CNwydhLj.js","assets/index-B4nyUU7h.css","assets/DrawingPreview-CPm06Y95.css","assets/slidev/useWakeLock-_lWXKb8K.js","assets/slidev/IconButton.vue_vue_type_script_setup_true_lang-QFPhiD3Y.js","assets/slidev/context-D6gx_9d-.js","assets/useWakeLock-Ddjg6k1w.css","assets/DrawingControls-C5T1oZL5.css"])))=>i.map(i=>d[i]);
import{d as v,ab as z,o,c as u,B as e,b as f,e as n,f as N,i as C,g as r,ai as R,z as E,k as x,aa as B,aj as $,R as k,l as p,F as M,x as D,v as W,h as A,t as H}from"../modules/vue-CZkfEai8.js";import{v as b,a as P,w as I,x as h,y as w,z as L,A as T,d as V,B as O,l as S,D as U,E as j}from"../index-CNwydhLj.js";import{b as F,G,c as K,u as X,r as Y,a as q,S as J,_ as Q,o as Z}from"./useWakeLock-_lWXKb8K.js";import{c as ee,a as te}from"./DrawingPreview.vue_vue_type_script_setup_true_lang-B9kitutl.js";import{n as oe}from"../modules/unplugin-icons-dW3qM7YX.js";import"../modules/shiki-2px8ptvS.js";import"./IconButton.vue_vue_type_script_setup_true_lang-QFPhiD3Y.js";import"./context-D6gx_9d-.js";const se="/p/240918/assets/logo-BYkHSa_O.png",ae={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},le=v({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(m,{emit:i}){const a=m,l=z(a,"modelValue",i);function d(){l.value=!1}return(_,s)=>(o(),u(R,null,[e(l)?(o(),f("div",ae,[n("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:s[0]||(s[0]=c=>d())}),n("div",{class:C(["m-auto rounded-md bg-main shadow",a.class]),"dark:border":"~ main"},[N(_.$slots,"default")],2)])):r("",!0)],1024))}}),ne={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},re=["innerHTML"],ie=v({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(m,{emit:i}){const l=z(m,"modelValue",i),d=E(()=>typeof b.info=="string");return(_,s)=>(o(),u(le,{modelValue:e(l),"onUpdate:modelValue":s[0]||(s[0]=c=>$(l)?l.value=c:null),class:"px-6 py-4"},{default:x(()=>[n("div",ne,[d.value?(o(),f("div",{key:0,class:"mb-4",innerHTML:e(b).info},null,8,re)):r("",!0),s[1]||(s[1]=n("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[n("div",{class:"flex gap-1 children:my-auto"},[n("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),n("img",{class:"w-5 h-5",src:se,alt:"Slidev logo"}),n("div",{style:{color:"#2082A6"}},[n("b",null,"Sli"),B("dev ")])])],-1))])]),_:1},8,["modelValue"]))}}),ue=v({__name:"Controls",setup(m){const{isEmbedded:i}=P(),a=!b.drawings.presenterOnly&&!i.value,t=k();a&&I(()=>import("./DrawingControls-DOq9U0y0.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14])).then(_=>t.value=_.default);const l=k(),d=k();return(_,s)=>(o(),f(M,null,[e(a)&&t.value?(o(),u(e(t),{key:0})):r("",!0),p(F),p(G),l.value?(o(),u(e(l),{key:1})):r("",!0),d.value?(o(),u(e(d),{key:2,modelValue:e(h),"onUpdate:modelValue":s[0]||(s[0]=c=>$(h)?h.value=c:null)},null,8,["modelValue"])):r("",!0),e(b).info?(o(),u(ie,{key:3,modelValue:e(w),"onUpdate:modelValue":s[1]||(s[1]=c=>$(w)?w.value=c:null)},null,8,["modelValue"])):r("",!0),p(K)],64))}}),de=v({__name:"PrintStyle",setup(m){function i(a,{slots:t}){if(t.default)return W("style",t.default())}return(a,t)=>(o(),u(i,null,{default:x(()=>[B(" @page { size: "+D(e(L))+"px "+D(e(T))+"px; margin: 0px; } ",1)]),_:1}))}}),ce={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},pe=v({__name:"PresenterMouse",setup(m){return(i,a)=>{const t=oe;return e(V).cursor?(o(),f("div",ce,[p(t,{class:"absolute stroke-white dark:stroke-black",style:A({left:`${e(V).cursor.x}%`,top:`${e(V).cursor.y}%`,strokeWidth:16})},null,8,["style"])])):r("",!0)}}}),be=v({__name:"play",setup(m){const{next:i,prev:a,isPrintMode:t}=P(),{isDrawing:l}=ee(),d=H();function _(y){var g;S.value||y.button===0&&((g=y.target)==null?void 0:g.id)==="slide-container"&&(y.pageX/window.innerWidth>.5?i():a())}X(d),Y(),q();const s=E(()=>O.value||S.value),c=k();return(y,g)=>(o(),f(M,null,[e(t)?(o(),u(de,{key:0})):r("",!0),n("div",{id:"page-root",ref_key:"root",ref:d,class:C(["grid",e(j)?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"])},[p(te,{style:{background:"var(--slidev-slide-container-background, black)"},width:e(t)?e(U).width.value:void 0,"is-main":"",onPointerdown:_,onContextmenu:e(Z)},{default:x(()=>[p(J,{"render-context":"slide"}),p(pe)]),controls:x(()=>[e(t)?r("",!0):(o(),f("div",{key:0,class:C(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[s.value?"!opacity-100 right-0":"opacity-0 p-2",e(l)?"pointer-events-none":""]])},[p(Q,{persist:s.value},null,8,["persist"])],2))]),_:1},8,["width","onContextmenu"]),c.value&&e(S)?(o(),u(e(c),{key:0,resize:!0})):r("",!0)],2),e(t)?r("",!0):(o(),u(ue,{key:1})),g[0]||(g[0]=n("div",{id:"twoslash-container"},null,-1))],64))}});export{be as default};