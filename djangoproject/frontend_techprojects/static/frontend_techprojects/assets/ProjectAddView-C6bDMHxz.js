import{r as b,u as p,o as a,c as m,b as u,_ as f,a as e,w as r,v,d as g,e as i,P as x,F as _,f as w}from"./index-DjV0MZZp.js";const h={class:"bg-white/50"},y={class:"space-y-12 px-8 py-16"},j={class:"border-b border-black/10 pb-12"},k={class:"mt-10 grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-6"},P={class:"sm:col-span-4"},N={class:"mt-2"},B={class:"mt-6 flex items-center justify-center gap-x-16"},C={class:"mt-6 flex items-center justify-center gap-x-16"},S={__name:"ProjectCreate",setup(c){const o=b(""),s=p();async function d(){if(console.log("fetching details"),!o.value){console.log("no url");return}const n=await s.populateNewObjectPreview(o.value);console.log(n),o.value=""}return(n,t)=>(a(),m(_,null,[u(f,{eyebrow:"Contribute",title:"Submit Your Project",description:"paste a github link, maybe add a location, save to the index."}),e("div",h,[e("div",y,[e("div",j,[t[4]||(t[4]=e("div",{class:""},[e("h2",{class:"text-lg font-semibold text-black"},"Register a new open source civic project"),e("p",{class:"mt-1 text-sm text-black"},"Use this form to add any open source project on GitHub to our index.")],-1)),e("div",k,[e("div",P,[t[3]||(t[3]=e("label",{for:"github_url",class:"block font-medium text-black"},"GitHub Repository URL",-1)),e("div",N,[r(e("input",{id:"github_url",name:"github_url",type:"url","onUpdate:modelValue":t[0]||(t[0]=l=>o.value=l),class:"block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-black sm:text-sm/6"},null,512),[[v,o.value]])]),e("div",{class:"mt-4"},[e("button",{type:"button",onClick:d,class:"rounded-md px-3 py-2 font-semibold bg-white/80 hover:bg-white/70"}," Fetch Details ")])])])])]),r(e("div",null,[e("div",B,[e("button",{type:"button",onClick:t[1]||(t[1]=(...l)=>i(s).submitNewProject&&i(s).submitNewProject(...l)),class:"rounded-md bg-green-600 px-4 py-3 text-4xl font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"},"Save")]),t[5]||(t[5]=e("div",{class:"min-h-32"},null,-1)),u(x,{project:i(s).new_object_preview},null,8,["project"]),t[6]||(t[6]=e("div",{class:"min-h-32"},null,-1)),e("div",C,[e("button",{type:"button",onClick:t[2]||(t[2]=(...l)=>i(s).submitNewProject&&i(s).submitNewProject(...l)),class:"rounded-md bg-green-600 px-4 py-3 text-4xl font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"},"Save")]),t[7]||(t[7]=e("div",{class:"min-h-64"},null,-1))],512),[[g,i(s).show_preview]])])],64))}},D={__name:"ProjectAddView",setup(c){return(o,s)=>(a(),w(S))}};export{D as default};
