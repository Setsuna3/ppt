import{d as N,y as q,t as M,D as H,n as B,_ as T,b as m,i as p,e as L,x as A,o as d}from"../modules/vue-CICrxepS.js";import{C as D,b as $}from"../index-DQvcnrOV.js";const I=["innerHTML"],P=["textContent"],R=["textContent"],k="slidev-note-fade",r="slidev-note-click-mark",K=N({__name:"NoteDisplay",props:{class:{type:String,required:!1},noteHtml:{type:String,required:!1},note:{type:String,required:!1},placeholder:{type:String,required:!1},clicksContext:{type:null,required:!1},autoScroll:{type:Boolean,required:!1}},emits:["markerDblclick","markerClick"],setup(b,{emit:w}){const l=b,v=w,g=q(()=>{var o,n;return((o=l.clicksContext)==null?void 0:o.current)!=null&&((n=l.noteHtml)==null?void 0:n.includes("slidev-note-click-mark"))}),a=M(null);function y(){var S;if(!a.value||!g.value)return;const o=Array.from(a.value.querySelectorAll(`.${r}`)),n=+(((S=l.clicksContext)==null?void 0:S.current)??D),c=n<0||n>=D,h=new Set;function C(e){!e||e===a.value||(h.add(e),e.parentElement&&C(e.parentElement))}const _=new Map;for(const e of o){const t=e.parentElement,s=Number(e.dataset.clicks);_.set(s,e),C(t),Array.from(t.childNodes).forEach(f=>{if(f.nodeType===3){const x=document.createElement("span");x.textContent=f.textContent,t.insertBefore(x,f),f.remove()}})}const E=Array.from(a.value.querySelectorAll("*"));let i=0;const u=new Map;for(const e of E)u.has(i)||u.set(i,[]),u.get(i).push(e),e.classList.contains(r)&&(i=Number(e.dataset.clicks)||i+1);for(const[e,t]of u)c?t.forEach(s=>s.classList.remove(k)):t.forEach(s=>s.classList.toggle(k,h.has(s)?!1:e!==n));for(const[e,t]of _)t.classList.remove(k),t.classList.toggle(`${r}-past`,c?!1:e<n),t.classList.toggle(`${r}-active`,c?!1:e===n),t.classList.toggle(`${r}-next`,c?!1:e===n+1),t.classList.toggle(`${r}-future`,c?!1:e>n+1),t.ondblclick=s=>{v("markerDblclick",s,e),!s.defaultPrevented&&(l.clicksContext.current=e,s.stopPropagation(),s.stopImmediatePropagation())},t.onclick=s=>{v("markerClick",s,e)},l.autoScroll&&e===n&&t.scrollIntoView({block:"center",behavior:"smooth"})}return H(()=>{var o;return[l.noteHtml,(o=l.clicksContext)==null?void 0:o.current]},()=>{B(()=>{y()})},{immediate:!0}),T(()=>{y()}),(o,n)=>o.noteHtml?(d(),m("div",{key:0,ref_key:"noteDisplay",ref:a,class:p(["prose overflow-auto outline-none slidev-note",[l.class,g.value?"slidev-note-with-clicks":""]]),innerHTML:o.noteHtml},null,10,I)):o.note?(d(),m("div",{key:1,class:p(["prose overflow-auto outline-none slidev-note",l.class])},[L("p",{textContent:A(o.note)},null,8,P)],2)):(d(),m("div",{key:2,class:p(["prose overflow-auto outline-none opacity-50 italic select-none slidev-note",l.class])},[L("p",{textContent:A(l.placeholder||"No notes.")},null,8,R)],2))}}),F=$(K,[["__file","C:/Users/Setsuna/AppData/Roaming/npm/node_modules/@slidev/cli/node_modules/@slidev/client/internals/NoteDisplay.vue"]]);export{F as N};
