import{u as m}from"./asyncData.5dafd2ec.js";import{M as c,I as p,d as i,ai as u,r as l,N as e,l as d}from"./entry.32e47a9a.js";import f from"./Ellipsis.e6180fec.js";import _ from"./ComponentPlaygroundData.83d96613.js";import"./TabsHeader.5e69106f.js";import"./ComponentPlaygroundProps.a26c3920.js";import"./ProseH4.f175a8af.js";import"./ProseCodeInline.ff447bbd.js";import"./Badge.2bf2c545.js";import"./ContentSlot.0c003d3f.js";import"./ProseP.3a78237f.js";import"./index.cce76cba.js";import"./ComponentPlaygroundSlots.vue.b730ca68.js";import"./ComponentPlaygroundTokens.vue.653ae1f2.js";async function y(o){const t=c(o);{const{data:n}=await m(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const g=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>u(o.component)),n=l({...o.props}),r=await y(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(_,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}});const S=d(g,[["__scopeId","data-v-9ca9b996"]]);export{S as default};
