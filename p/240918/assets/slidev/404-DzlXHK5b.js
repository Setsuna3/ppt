import{d as m,N as f,z as _,r as x,o as n,b as v,e as o,aa as a,x as r,B as g,c as u,k as c,g as i}from"../modules/vue-CZkfEai8.js";import{a as k,_ as h}from"../index-uQvL5w7O.js";import"../modules/shiki-2px8ptvS.js";const N={class:"grid justify-center text-center pt-15% gap-5"},B={class:"text-2xl"},y={class:"op-60"},C={class:"mt-3 flex flex-col gap-2 max-w-xs mx-auto w-full"},R=m({__name:"404",setup(w){const{currentRoute:l}=f(),{total:d}=k(),s=_(()=>{const t=l.value.path.match(/\d+/);if(t){const e=+t[0];if(e>0&&e<=d.value)return e}return null});return(p,t)=>{const e=x("RouterLink");return n(),v("div",N,[o("div",null,[t[2]||(t[2]=o("h1",{class:"text-9xl font-light"}," 404 ",-1)),o("p",B,[t[0]||(t[0]=a(" Page ")),o("code",y,r(g(l).path),1),t[1]||(t[1]=a(" not found "))])]),o("div",C,[s.value!==1?(n(),u(e,{key:0,to:"/",class:"page-link"},{default:c(()=>t[3]||(t[3]=[a(" Go Home ")])),_:1})):i("",!0),s.value?(n(),u(e,{key:1,to:`/${s.value}`,class:"page-link"},{default:c(()=>[a(" Go to Slide "+r(s.value),1)]),_:1},8,["to"])):i("",!0)])])}}}),L=h(R,[["__scopeId","data-v-9f258f78"]]);export{L as default};
