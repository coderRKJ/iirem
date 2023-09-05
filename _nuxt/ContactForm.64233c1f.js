import h from"./Input.dfbd7d7e.js";import b from"./Button.7de49a85.js";import{d as x,x as v,m as S,r as F,a3 as w,b as l,c as u,e as d,F as B,Y as C,X as R,M as s,g as T,w as V,D as E,t as j,l as k}from"./entry.32e47a9a.js";const M=["action"],N={class:"inputs"},O=x({__name:"ContactForm",props:{submitButtonText:{type:String,default:"Send message"},fields:{type:Array,default:()=>[{type:"text",model:"name",name:"Name",placeholder:"Your name",required:!0,layout:"default"},{type:"email",model:"email",name:"Email",placeholder:"Your email",required:!0,layout:"default"},{type:"text",model:"text",name:"Subject",required:!1,layout:"default"},{type:"textarea",model:"message",name:"Message",placeholder:"Your message",required:!0,layout:"big"}]}},setup(m){const i=m,p=v().alpine,{FORMSPREE_URL:n}=S().public;n||console.warn("No FORMSPREE_URL provided");const t=F(),_=w(i.fields.map(e=>({...e,data:""}))),f=async e=>{e.preventDefault();const c=new FormData(e.target);t.value="Sending...",fetch(e.target.action,{method:e.target.method,body:c,headers:{Accept:"application/json"}}).then(r=>{r.ok?(t.value=p.form.successMessage,e.target.reset()):r.json().then(a=>{Object.hasOwn(a,"errors")?(t.value=a.errors[0].message,console.error(a.errors.map(o=>o.message).join(", ")),setTimeout(()=>{t.value="Send message"},2e3)):console.error("There was a problem submitting your form")})}).catch(()=>{console.error("There was a problem submitting your form")})};return(e,c)=>{const r=h,a=b;return l(),u("form",{class:"contact-form",method:"POST",action:s(n),onSubmit:f},[d("div",N,[(l(!0),u(B,null,C(s(_),(o,g)=>(l(),R(r,{key:g,modelValue:o.data,"onUpdate:modelValue":y=>o.data=y,field:o},null,8,["modelValue","onUpdate:modelValue","field"]))),128))]),d("div",null,[T(a,{type:"submit",disabled:!s(n)},{default:V(()=>[E(j(s(t)?s(t):m.submitButtonText),1)]),_:1},8,["disabled"])])],40,M)}}});const Y=k(O,[["__scopeId","data-v-7f28306c"]]);export{Y as default};
