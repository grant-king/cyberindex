import{d as T,r as c,o as j,w as x,c as m,e as t,F as z,g as B,n as g,h as y,v as h,u as n,i as k,b as f,t as U}from"./index-BEuX0Jok.js";import{c8 as D,ca as F}from"./voxel-Dr5A4w3Y.js";const R=T("builder",()=>{const v=window.location.origin,u=`${v}/apiv1/placements/`;c(`${u}?page=1`);const o=`${v}/apiv1/builders/`;c(`${o}?page=1`);const p=`${o}my_builder/`;c([]);const a=c({session_id:0,x:0,y:0,z:0,edit_plane:"xy"});async function _(){const r=await fetch(p,{method:"GET",headers:{"X-CSRFToken":window.csrf_token}}),d=await r.json();r.ok?(console.log("my builder",d),a.value=d):(console.error("failed to fetch my builder"),console.error(r))}async function w(){const r=new FormData;r.append("x",a.value.x),r.append("y",a.value.y),r.append("z",a.value.z),r.append("edit_plane",a.value.edit_plane);const d=await fetch(p,{method:"PUT",headers:{"X-CSRFToken":window.csrf_token},body:r}),b=await d.json();d.ok?(console.log("updated builder",b),a.value=b):(console.error("failed to update builder"),console.error(d))}return{fetchMyBuilder:_,my_builder:a,updateBuilder:w}}),A={class:"bg-black overflow-auto max-w-4xl mx-auto p-4"},q={class:"grid grid-cols-8 gap-4"},E=["onClick"],G={class:"flex flex-wrap justify-center object-center"},I={class:"p-4 text-white"},W={class:"p-2"},X={class:"p-2"},L={class:"p-2"},N={class:"p-4 text-white"},P={class:"p-2 flex objects-center"},H={class:"p-2 flex objects-center"},J={class:"p-2 flex objects-center"},K={class:"mx-auto"},O={class:"flex-wrap flex p-4"},Z={__name:"BuildView",setup(v){const u=D(),o=R(),p=F(),a=c("001100");c(0);const _=c({});c({});const w=c(Array.from({length:64},(s,e)=>e)),r=c(Array.from({length:64},(s,e)=>"000200"));j(async()=>{await u.fetchClaims(),C(),await o.fetchMyBuilder(),await d()}),x(()=>o.my_builder.x,async()=>{await d(),await o.updateBuilder()}),x(()=>o.my_builder.y,async()=>{await d(),await o.updateBuilder()}),x(()=>o.my_builder.z,async()=>{await d(),await o.updateBuilder()}),x(()=>o.my_builder.edit_plane,async()=>{await d(),await o.updateBuilder()});async function d(){_.value=await p.fetchVoxelsInSlice(o.my_builder.x,o.my_builder.y,o.my_builder.z,8,o.my_builder.edit_plane);const s=$(_.value);console.log("original",_.value),console.log("relative",s),r.value=M(s)}async function b(s){r.value[s]=a.value;const e=u.claim_list.shift(),{off_x:l,off_y:i,off_z:S}=V(s);console.log(l,i,S),await p.placeVoxel(e.voxel.pk,o.my_builder.x+l,o.my_builder.y+i,o.my_builder.z+S),await u.unholdClaim(e.pk,e.voxel.pk),C()}function V(s){if(o.my_builder.edit_plane==="xy"){const e=s%8,l=Math.floor(s/8),i=0;return console.log(e,l,i),{off_x:e,off_y:l,off_z:i}}if(o.my_builder.edit_plane==="yz"){const l=s%8,i=Math.floor(s/8);return{off_x:0,off_y:l,off_z:i}}if(o.my_builder.edit_plane==="zx"){const e=Math.floor(s/8),l=0,i=s%8;return{off_x:e,off_y:l,off_z:i}}}function C(){u.claim_list.length===0&&u.fetchClaims(),u.claim_list.length>0?a.value=u.claim_list[0].voxel.color:a.value="000200"}function $(s){return s.map(l=>({x:l.x-o.my_builder.x,y:l.y-o.my_builder.y,z:l.z-o.my_builder.z,color:l.color}))}function M(s){const e=Array.from({length:64},(l,i)=>"000200");for(let l of s){if(o.my_builder.edit_plane==="xy"){const i=l.x+l.y*8;e[i]=l.color}if(o.my_builder.edit_plane==="yz"){const i=l.y+l.z*8;e[i]=l.color}if(o.my_builder.edit_plane==="zx"){const i=l.z+l.x*8;e[i]=l.color}}return e}return(s,e)=>(f(),m(z,null,[t("div",{class:"border-16 border-dotted",style:g({borderColor:`#${a.value}`})},[t("div",A,[t("div",q,[(f(!0),m(z,null,B(w.value,l=>(f(),m("div",{key:l,class:"column"},[t("div",{class:"text-white text-xs aspect-square w-auto border border-white/50",style:g({backgroundColor:`#${r.value[l]}`}),onClick:i=>b(l)},U(l),13,E)]))),128))])])],4),e[15]||(e[15]=t("div",null,null,-1)),e[16]||(e[16]=t("div",null,null,-1)),t("div",G,[t("div",I,[e[9]||(e[9]=t("div",null,"set builder origin",-1)),t("div",W,[e[6]||(e[6]=t("label",{for:"x",class:"mr-2"},"set x",-1)),y(t("input",{type:"number",id:"x",class:"bg-white/50 h-8 w-16 rounded-sm","onUpdate:modelValue":e[0]||(e[0]=l=>n(o).my_builder.x=l)},null,512),[[h,n(o).my_builder.x]])]),t("div",X,[e[7]||(e[7]=t("label",{for:"y",class:"mr-2"},"set y",-1)),y(t("input",{type:"number",id:"y",class:"bg-white/50 h-8 w-16 rounded-sm","onUpdate:modelValue":e[1]||(e[1]=l=>n(o).my_builder.y=l)},null,512),[[h,n(o).my_builder.y]])]),t("div",L,[e[8]||(e[8]=t("label",{for:"z",class:"mr-2"},"set z",-1)),y(t("input",{type:"number",id:"z",class:"bg-white/50 h-8 w-16 rounded-sm","onUpdate:modelValue":e[2]||(e[2]=l=>n(o).my_builder.z=l)},null,512),[[h,n(o).my_builder.z]])])]),t("div",N,[e[13]||(e[13]=t("div",null,"set build plane",-1)),t("div",P,[e[10]||(e[10]=t("label",{for:"xy",class:"mr-2"},"select xy",-1)),y(t("input",{type:"radio",id:"xy",value:"xy",name:"plane","onUpdate:modelValue":e[3]||(e[3]=l=>n(o).my_builder.edit_plane=l),class:"h-8 w-8 rounded-sm"},null,512),[[k,n(o).my_builder.edit_plane]])]),t("div",H,[e[11]||(e[11]=t("label",{for:"yz",class:"mr-2"},"select yz",-1)),y(t("input",{type:"radio",id:"yz",value:"yz",name:"plane","onUpdate:modelValue":e[4]||(e[4]=l=>n(o).my_builder.edit_plane=l),class:"h-8 w-8 rounded-sm"},null,512),[[k,n(o).my_builder.edit_plane]])]),t("div",J,[e[12]||(e[12]=t("label",{for:"zx",class:"mr-2"},"select zx",-1)),y(t("input",{type:"radio",id:"zx",value:"zx",name:"plane","onUpdate:modelValue":e[5]||(e[5]=l=>n(o).my_builder.edit_plane=l),class:"h-8 w-8 rounded-sm"},null,512),[[k,n(o).my_builder.edit_plane]])])])]),t("div",K,[t("div",O,[(f(!0),m(z,null,B(n(u).claim_list,l=>(f(),m("div",{class:"p-1",key:l.voxel.pk},[t("div",{style:g({backgroundColor:`#${l.voxel.color}`}),class:"aspect-square w-auto border border-black"},e[14]||(e[14]=[t("div",{class:"w-4 h-4"},null,-1)]),4)]))),128))])])],64))}};export{Z as default};
