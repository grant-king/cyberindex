import{e as a,z as V,o as y,c as h,a as s,d as O,F as T,b as q}from"./index-CjaT8QIT.js";const R=`struct VertexInput {\r
    @location(0) pos: vec2f,\r
    @builtin(instance_index) instance: u32,\r
};\r
\r
struct VertexOutput {\r
    @builtin(position) pos: vec4f,\r
    @location(0) cell: vec2f,\r
};\r
\r
@group(0) @binding(0) var<uniform> grid: vec2f;\r
@group(0) @binding(1) var<storage> cell_state: array<u32>;\r
\r
@vertex\r
fn vertexMain(input: VertexInput) -> VertexOutput {\r
    // cast to float as shader operating on floats\r
    let idx = f32(input.instance); \r
    // compute cell coordinate from instance_index\r
    let cell = vec2f(idx % grid.x, floor(idx / grid.x));\r
    let state = f32(cell_state[input.instance]);\r
    let cell_offset = cell / grid * 2;\r
    // too dense:\r
    // pos / grid => centered square\r
    // pos + 1 / grid => corner-centered square\r
    // grid_pos = (pos + 1) / grid - 1 => aligned with grid location\r
    // let grid_pos = (input.pos + 1) / grid - 1 + cell_offset => aligned with grid at cell location\r
    let grid_pos = (state*input.pos + 1) / grid - 1 + cell_offset; // show if active\r
    var output: VertexOutput;\r
    output.pos = vec4f(grid_pos.x, grid_pos.y, 0, 1);\r
    output.cell = cell;\r
    return output;\r
}`,A=`@fragment\r
fn fragmentMain(input: VertexOutput) -> @location(0) vec4f {\r
    return vec4f(input.cell.x/grid.x, input.cell.y/grid.y, 0.4-input.cell.x/grid.x, 1);\r
}\r
`,u=8,C=800,D={__name:"WebGPUDemo",setup(w){const i=a(0),c=a(null),l=a(null),e=a(null),f=a(null),d=a(null),g=a(null),p=new Float32Array([-.8,-.8,.8,-.8,.8,.8,-.8,-.8,.8,.8,-.8,.8]);return V(async()=>{if(c.value=document.getElementById("gpu-demo-canvas"),!navigator.gpu)throw new Error("WebGPU not supported");if(l.value=await navigator.gpu.requestAdapter(),!l.value)throw new Error("No adapter found");console.log(l.value),e.value=await l.value.requestDevice();const r=new Uint32Array(u*u),n=e.value.createBuffer({label:"cell state a",size:r.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),b=e.value.createBuffer({label:"cell state b",size:r.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});for(let t=0;t<r.length;t+=3)r[t]=1;e.value.queue.writeBuffer(n,0,r);for(let t=0;t<r.length;t+=2)r[t]=1;e.value.queue.writeBuffer(b,0,r);const m=new Float32Array([u,u]),v=e.value.createBuffer({label:"grid uniforms",size:m.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});e.value.queue.writeBuffer(v,0,m);const x=e.value.createBuffer({label:"cell verticies",size:p.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST});e.value.queue.writeBuffer(x,0,p);const P={arrayStride:8,attributes:[{format:"float32x2",offset:0,shaderLocation:0}]},B=e.value.createShaderModule({label:"cell shader",code:R+A});f.value=c.value.getContext("webgpu"),d.value=navigator.gpu.getPreferredCanvasFormat();const _=e.value.createRenderPipeline({label:"cell pipeline",layout:"auto",vertex:{module:B,entryPoint:"vertexMain",buffers:[P]},fragment:{module:B,entryPoint:"fragmentMain",targets:[{format:d.value}]}}),U=e.value.createBindGroup({label:"cell renderer bind group",layout:_.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:v}},{binding:1,resource:{buffer:n}}]}),G=e.value.createBindGroup({label:"cell renderer bind group",layout:_.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:v}},{binding:1,resource:{buffer:b}}]});f.value.configure({device:e.value,format:d.value});function E(){i.value++;const t=[U,G];g.value=e.value.createCommandEncoder();const o=g.value.beginRenderPass({colorAttachments:[{view:f.value.getCurrentTexture().createView(),loadOp:"clear",clearValue:{r:0,g:.2,b:0,a:1},storeOp:"store"}]});o.setPipeline(_),o.setBindGroup(0,t[i.value%2]),o.setVertexBuffer(0,x),o.draw(p.length/2,u*u),o.end(),e.value.queue.submit([g.value.finish()])}setInterval(E,C)}),(r,n)=>(y(),h(T,null,[n[0]||(n[0]=s("div",null,[O(" WEB GPU DEMO "),s("a",{href:"https://codelabs.developers.google.com/your-first-webgpu-app"},":: REFERENCE ::")],-1)),n[1]||(n[1]=s("div",{class:""},[s("canvas",{id:"gpu-demo-canvas",class:"min-w-full aspect-square"})],-1))],64))}},S={class:"bg-white/50 min-h-screen"},L={__name:"WebGPUView",setup(w){return(i,c)=>(y(),h("div",S,[q(D)]))}};export{L as default};
