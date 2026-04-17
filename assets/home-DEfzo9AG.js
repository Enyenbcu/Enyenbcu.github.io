import{A as e,B as t,C as n,D as r,E as i,F as a,G as o,H as s,I as c,L as l,M as u,N as d,O as f,P as p,Q as m,R as h,S as g,U as _,V as v,W as y,X as b,Y as x,Z as S,a as C,c as w,d as T,j as E,k as D,l as O,m as k,n as A,o as j,q as M,r as N,t as P,u as F,w as I,x as L,z as R}from"./vendor-BnkuSvMY.js";import{t as z}from"./plugin-vue_export-helper.js";var B=e({__name:`targetCursor`,props:{targetSelector:{default:`.cursor-target`},spinDuration:{default:2},hideDefaultCursor:{type:Boolean,default:!0}},setup(e){let t=e,n=s(`cursorRef`),o=M(null),c=M(null),l={borderWidth:3,cornerSize:12,parallaxStrength:5e-5},f=(e,t)=>{n.value&&k.to(n.value,{x:e,y:t,duration:.1,ease:`power3.out`})},p=()=>{},m=()=>{if(!n.value)return;let e=document.body.style.cursor,r=n.value;o.value=r.querySelectorAll(`.target-cursor-corner`);let i=null,a=null,s=null,u=!1,d=null,m=e=>{a&&e.removeEventListener(`mousemove`,a),s&&e.removeEventListener(`mouseleave`,s),a=null,s=null};k.set(r,{xPercent:-50,yPercent:-50,x:window.innerWidth/2,y:window.innerHeight/2,opacity:0,display:`none`}),c.value&&c.value.kill(),c.value=k.timeline({repeat:-1}).to(r,{rotation:`+=360`,duration:t.spinDuration,ease:`none`});let h=e=>f(e.clientX,e.clientY);window.addEventListener(`mousemove`,h);let g=e=>{let r=e.target,f=[],p=r;for(;p&&p!==document.body;)p.matches(t.targetSelector)&&f.push(p),p=p.parentElement;let h=f[0]||null;if(t.hideDefaultCursor&&h instanceof HTMLElement&&(h.style.cursor=`none`),!h||!n.value||!o.value||i===h)return;i&&m(i),d&&=(clearTimeout(d),null),i=h,Array.from(o.value).forEach(e=>{k.killTweensOf(e)}),k.killTweensOf(n.value,`rotation`),c.value?.pause(),k.set(n.value,{rotation:0}),k.set(n.value,{opacity:1,display:`block`});let g=(e,t)=>{let r=h.getBoundingClientRect(),i=n.value.getBoundingClientRect(),a=i.left+i.width/2,s=i.top+i.height/2,[c,u,d,f]=Array.from(o.value),{borderWidth:p,cornerSize:m,parallaxStrength:g}=l,_={x:r.left-a-p,y:r.top-s-p},v={x:r.right-a+p-m,y:r.top-s-p},y={x:r.right-a+p-m,y:r.bottom-s+p-m},b={x:r.left-a-p,y:r.bottom-s+p-m};if(e!==void 0&&t!==void 0){let n=r.left+r.width/2,i=r.top+r.height/2,a=(e-n)*g,o=(t-i)*g;_.x+=a,_.y+=o,v.x+=a,v.y+=o,y.x+=a,y.y+=o,b.x+=a,b.y+=o}let x=k.timeline(),S=[c,u,d,f],C=[_,v,y,b];S.forEach((e,t)=>{let n=C[t];n&&x.to(e,{x:n.x,y:n.y,duration:.2,ease:`power2.out`},0)})};u=!0,g(),setTimeout(()=>{u=!1},1);let _=null,v=e=>{_||u||(_=requestAnimationFrame(()=>{let t=e;g(t.clientX,t.clientY),_=null}))},y=()=>{if(t.hideDefaultCursor&&h instanceof HTMLElement&&(h.style.cursor=``),i=null,u=!1,o.value){let e=Array.from(o.value);k.killTweensOf(e);let{cornerSize:t}=l,r=[{x:-t*1.5,y:-t*1.5},{x:t*.5,y:-t*1.5},{x:t*.5,y:t*.5},{x:-t*1.5,y:t*.5}],i=k.timeline();e.forEach((e,t)=>{let n=r[t];n&&i.to(e,{x:n.x,y:n.y,duration:.3,ease:`power3.out`},0)}),k.set(n.value,{opacity:0,display:`none`})}d=setTimeout(()=>{if(!i&&n.value&&c.value){let e=k.getProperty(n.value,`rotation`)%360;c.value.kill(),c.value=k.timeline({repeat:-1}).to(n.value,{rotation:`+=360`,duration:t.spinDuration,ease:`none`}),k.to(n.value,{rotation:e+360,duration:t.spinDuration*(1-e/360),ease:`none`,onComplete:()=>{c.value?.restart()}})}d=null},50),m(h)};a=v,s=y,h.addEventListener(`mousemove`,v),h.addEventListener(`mouseleave`,y)};window.addEventListener(`mouseover`,g,{passive:!0}),p=()=>{window.removeEventListener(`mousemove`,h),window.removeEventListener(`mouseover`,g),i&&m(i),d&&=(clearTimeout(d),null),c.value?.kill(),c.value=null,n.value&&k.killTweensOf(n.value),o.value&&k.killTweensOf(Array.from(o.value)),n.value&&k.set(n.value,{x:0,y:0,rotation:0,opacity:0,display:`none`}),document.body.style.cursor=e,i=null}};return d(()=>{m()}),u(()=>{p()}),_(()=>[t.targetSelector,t.spinDuration,t.hideDefaultCursor],()=>{p(),m()}),_(()=>t.spinDuration,()=>{!n.value||!c.value||c.value.isActive()&&(c.value.kill(),c.value=k.timeline({repeat:-1}).to(n.value,{rotation:`+=360`,duration:t.spinDuration,ease:`none`}))},{immediate:!0}),(e,t)=>(a(),i(`div`,{ref_key:`cursorRef`,ref:n,class:`top-0 left-0 z-[9999] fixed w-0 h-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none mix-blend-difference transform opacity-0`,style:{willChange:`transform`}},[...t[0]||=[r(`<div class="top-1/2 left-1/2 absolute bg-white rounded-full w-1 h-1 -translate-x-1/2 -translate-y-1/2 transform" style="will-change:transform;"></div><div class="top-1/2 left-1/2 absolute border-[3px] border-green-400 border-r-0 border-b-0 w-3 h-3 -translate-x-[150%] -translate-y-[150%] target-cursor-corner transform" style="will-change:transform;"></div><div class="top-1/2 left-1/2 absolute border-[3px] border-green-400 border-b-0 border-l-0 w-3 h-3 -translate-y-[150%] translate-x-1/2 target-cursor-corner transform" style="will-change:transform;"></div><div class="top-1/2 left-1/2 absolute border-[3px] border-green-400 border-t-0 border-l-0 w-3 h-3 translate-x-1/2 translate-y-1/2 target-cursor-corner transform" style="will-change:transform;"></div><div class="top-1/2 left-1/2 absolute border-[3px] border-green-400 border-t-0 border-r-0 w-3 h-3 -translate-x-[150%] translate-y-1/2 target-cursor-corner transform" style="will-change:transform;"></div>`,5)]],512))}}),V=e({__name:`shinyText`,props:{text:{},disabled:{type:Boolean,default:!1},speed:{default:2},className:{default:``},color:{default:`#b5b5b5`},shineColor:{default:`#ffffff`},spread:{default:120},yoyo:{type:Boolean,default:!1},pauseOnHover:{type:Boolean,default:!1},direction:{default:`left`},delay:{default:0}},setup(e){let t=e,n=M(!1),r=T(0),i=M(0),o=M(null),s=M(t.direction===`left`?1:-1),c=g(()=>t.speed*1e3),l=g(()=>t.delay*1e3);F(e=>{if(t.disabled||n.value){o.value=null;return}if(o.value===null){o.value=e;return}let a=e-o.value;if(o.value=e,i.value+=a,t.yoyo){let e=c.value+l.value,t=e*2,n=i.value%t;if(n<c.value){let e=n/c.value*100;r.set(s.value===1?e:100-e)}else if(n<e)r.set(s.value===1?100:0);else if(n<e+c.value){let t=100-(n-e)/c.value*100;r.set(s.value===1?t:100-t)}else r.set(s.value===1?0:100)}else{let e=c.value+l.value,t=i.value%e;if(t<c.value){let e=t/c.value*100;r.set(s.value===1?e:100-e)}else r.set(s.value===1?100:0)}}),_(()=>t.direction,()=>{s.value=t.direction===`left`?1:-1,i.value=0,r.set(0)},{immediate:!0});let u=w(r,e=>`${150-e*2}% center`),d=()=>{t.pauseOnHover&&(n.value=!0)},p=()=>{t.pauseOnHover&&(n.value=!1)},h=g(()=>({backgroundImage:`linear-gradient(${t.spread}deg, ${t.color} 0%, ${t.color} 35%, ${t.shineColor} 50%, ${t.color} 65%, ${t.color} 100%)`,backgroundSize:`200% auto`,WebkitBackgroundClip:`text`,backgroundClip:`text`,WebkitTextFillColor:`transparent`}));return(t,n)=>(a(),I(x(O),{tag:`span`,class:b([`inline-block`,e.className]),style:S({...h.value,backgroundPosition:x(u)}),onMouseenter:d,onMouseleave:p},{default:y(()=>[f(m(e.text),1)]),_:1},8,[`class`,`style`]))}}),H={class:`relative z-10 border border-[#333] bg-[#0b0b0b] text-white text-[16px] text-center px-[64px] py-[24px] rounded-[20px]`},U=z(e({__name:`starBorder`,props:{as:{default:`button`},customClass:{default:``},color:{default:`white`},speed:{default:`6s`},thickness:{default:1}},setup(e){let r=e,i=v(),o=g(()=>{let e={padding:`${r.thickness}px 0`},t=i.style||{};return{...e,...t}});return(r,s)=>(a(),I(t(e.as),E({class:[`relative inline-block overflow-hidden !bg-transparent !border-none !rounded-[20px]`,e.customClass]},x(i),{style:o.value}),{default:y(()=>[n(`div`,{class:`absolute w-[300%] h-[50%] opacity-70 bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0`,style:S({background:`radial-gradient(circle, ${e.color}, transparent 10%)`,animationDuration:e.speed})},null,4),n(`div`,{class:`absolute w-[300%] h-[50%] opacity-70 top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0`,style:S({background:`radial-gradient(circle, ${e.color}, transparent 10%)`,animationDuration:e.speed})},null,4),n(`div`,H,[l(r.$slots,`default`,{},void 0,!0)])]),_:3},16,[`class`,`style`]))}}),[[`__scopeId`,`data-v-2bbbcb5c`]]),W=`
attribute vec2 uv;
attribute vec2 position;

varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`,G=`
precision highp float;

uniform float uTime;
uniform vec3 uResolution;
uniform vec2 uFocal;
uniform vec2 uRotation;
uniform float uStarSpeed;
uniform float uDensity;
uniform float uHueShift;
uniform float uSpeed;
uniform vec2 uMouse;
uniform float uGlowIntensity;
uniform float uSaturation;
uniform bool uMouseRepulsion;
uniform float uTwinkleIntensity;
uniform float uRotationSpeed;
uniform float uRepulsionStrength;
uniform float uMouseActiveFactor;
uniform float uAutoCenterRepulsion;
uniform bool uTransparent;

varying vec2 vUv;

#define NUM_LAYER 4.0
#define STAR_COLOR_CUTOFF 0.2
#define MAT45 mat2(0.7071, -0.7071, 0.7071, 0.7071)
#define PERIOD 3.0

float Hash21(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float tri(float x) {
  return abs(fract(x) * 2.0 - 1.0);
}

float tris(float x) {
  float t = fract(x);
  return 1.0 - smoothstep(0.0, 1.0, abs(2.0 * t - 1.0));
}

float trisn(float x) {
  float t = fract(x);
  return 2.0 * (1.0 - smoothstep(0.0, 1.0, abs(2.0 * t - 1.0))) - 1.0;
}

vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

float Star(vec2 uv, float flare) {
  float d = length(uv);
  float m = (0.05 * uGlowIntensity) / d;
  float rays = smoothstep(0.0, 1.0, 1.0 - abs(uv.x * uv.y * 1000.0));
  m += rays * flare * uGlowIntensity;
  uv *= MAT45;
  rays = smoothstep(0.0, 1.0, 1.0 - abs(uv.x * uv.y * 1000.0));
  m += rays * 0.3 * flare * uGlowIntensity;
  m *= smoothstep(1.0, 0.2, d);
  return m;
}

vec3 StarLayer(vec2 uv) {
  vec3 col = vec3(0.0);

  vec2 gv = fract(uv) - 0.5; 
  vec2 id = floor(uv);

  for (int y = -1; y <= 1; y++) {
    for (int x = -1; x <= 1; x++) {
      vec2 offset = vec2(float(x), float(y));
      vec2 si = id + vec2(float(x), float(y));
      float seed = Hash21(si);
      float size = fract(seed * 345.32);
      float glossLocal = tri(uStarSpeed / (PERIOD * seed + 1.0));
      float flareSize = smoothstep(0.9, 1.0, size) * glossLocal;

      float red = smoothstep(STAR_COLOR_CUTOFF, 1.0, Hash21(si + 1.0)) + STAR_COLOR_CUTOFF;
      float blu = smoothstep(STAR_COLOR_CUTOFF, 1.0, Hash21(si + 3.0)) + STAR_COLOR_CUTOFF;
      float grn = min(red, blu) * seed;
      vec3 base = vec3(red, grn, blu);
      
      float hue = atan(base.g - base.r, base.b - base.r) / (2.0 * 3.14159) + 0.5;
      hue = fract(hue + uHueShift / 360.0);
      float sat = length(base - vec3(dot(base, vec3(0.299, 0.587, 0.114)))) * uSaturation;
      float val = max(max(base.r, base.g), base.b);
      base = hsv2rgb(vec3(hue, sat, val));

      vec2 pad = vec2(tris(seed * 34.0 + uTime * uSpeed / 10.0), tris(seed * 38.0 + uTime * uSpeed / 30.0)) - 0.5;

      float star = Star(gv - offset - pad, flareSize);
      vec3 color = base;

      float twinkle = trisn(uTime * uSpeed + seed * 6.2831) * 0.5 + 1.0;
      twinkle = mix(1.0, twinkle, uTwinkleIntensity);
      star *= twinkle;
      
      col += star * size * color;
    }
  }

  return col;
}

void main() {
  vec2 focalPx = uFocal * uResolution.xy;
  vec2 uv = (vUv * uResolution.xy - focalPx) / uResolution.y;

  vec2 mouseNorm = uMouse - vec2(0.5);
  
  if (uAutoCenterRepulsion > 0.0) {
    vec2 centerUV = vec2(0.0, 0.0); // Center in UV space
    float centerDist = length(uv - centerUV);
    vec2 repulsion = normalize(uv - centerUV) * (uAutoCenterRepulsion / (centerDist + 0.1));
    uv += repulsion * 0.05;
  } else if (uMouseRepulsion) {
    vec2 mousePosUV = (uMouse * uResolution.xy - focalPx) / uResolution.y;
    float mouseDist = length(uv - mousePosUV);
    vec2 repulsion = normalize(uv - mousePosUV) * (uRepulsionStrength / (mouseDist + 0.1));
    uv += repulsion * 0.05 * uMouseActiveFactor;
  } else {
    vec2 mouseOffset = mouseNorm * 0.1 * uMouseActiveFactor;
    uv += mouseOffset;
  }

  float autoRotAngle = uTime * uRotationSpeed;
  mat2 autoRot = mat2(cos(autoRotAngle), -sin(autoRotAngle), sin(autoRotAngle), cos(autoRotAngle));
  uv = autoRot * uv;

  uv = mat2(uRotation.x, -uRotation.y, uRotation.y, uRotation.x) * uv;

  vec3 col = vec3(0.0);

  for (float i = 0.0; i < 1.0; i += 1.0 / NUM_LAYER) {
    float depth = fract(i + uStarSpeed * uSpeed);
    float scale = mix(20.0 * uDensity, 0.5 * uDensity, depth);
    float fade = depth * smoothstep(1.0, 0.9, depth);
    col += StarLayer(uv * scale + i * 453.32) * fade;
  }

  if (uTransparent) {
    float alpha = length(col);
    alpha = smoothstep(0.0, 0.3, alpha); // Enhance contrast
    alpha = min(alpha, 1.0); // Clamp to maximum 1.0
    gl_FragColor = vec4(col, alpha);
  } else {
    gl_FragColor = vec4(col, 1.0);
  }
}
`,K=e({__name:`galaxy`,props:{focal:{default:()=>[.5,.5]},rotation:{default:()=>[1,0]},starSpeed:{default:.5},density:{default:1},hueShift:{default:140},disableAnimation:{type:Boolean,default:!1},speed:{default:1},mouseInteraction:{type:Boolean,default:!0},glowIntensity:{default:.3},saturation:{default:0},mouseRepulsion:{type:Boolean,default:!0},twinkleIntensity:{default:.3},rotationSpeed:{default:.1},repulsionStrength:{default:2},autoCenterRepulsion:{default:0},transparent:{type:Boolean,default:!0}},setup(e){let t=e,n=s(`ctnDom`),r=M({x:.5,y:.5}),o=M({x:.5,y:.5}),c=M(0),l=M(0),u=null,f=()=>{if(!n.value)return;let e=n.value,i=new C({alpha:t.transparent,premultipliedAlpha:!1}),a=i.gl;t.transparent?(a.enable(a.BLEND),a.blendFunc(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA),a.clearColor(0,0,0,0)):a.clearColor(0,0,0,1);let s;function d(){i.setSize(e.offsetWidth*1,e.offsetHeight*1),s&&(s.uniforms.uResolution.value=new A(a.canvas.width,a.canvas.height,a.canvas.width/a.canvas.height))}window.addEventListener(`resize`,d,!1),d();let f=new P(a);s=new j(a,{vertex:W,fragment:G,uniforms:{uTime:{value:0},uResolution:{value:new A(a.canvas.width,a.canvas.height,a.canvas.width/a.canvas.height)},uFocal:{value:new Float32Array(t.focal)},uRotation:{value:new Float32Array(t.rotation)},uStarSpeed:{value:t.starSpeed},uDensity:{value:t.density},uHueShift:{value:t.hueShift},uSpeed:{value:t.speed},uMouse:{value:new Float32Array([o.value.x,o.value.y])},uGlowIntensity:{value:t.glowIntensity},uSaturation:{value:t.saturation},uMouseRepulsion:{value:t.mouseRepulsion},uTwinkleIntensity:{value:t.twinkleIntensity},uRotationSpeed:{value:t.rotationSpeed},uRepulsionStrength:{value:t.repulsionStrength},uMouseActiveFactor:{value:0},uAutoCenterRepulsion:{value:t.autoCenterRepulsion},uTransparent:{value:t.transparent}}});let p=new N(a,{geometry:f,program:s}),m;function h(e){m=requestAnimationFrame(h),t.disableAnimation||(s.uniforms.uTime.value=e*.001,s.uniforms.uStarSpeed.value=e*.001*t.starSpeed/10);let n=.05;o.value.x+=(r.value.x-o.value.x)*n,o.value.y+=(r.value.y-o.value.y)*n,l.value+=(c.value-l.value)*n,s.uniforms.uMouse.value[0]=o.value.x,s.uniforms.uMouse.value[1]=o.value.y,s.uniforms.uMouseActiveFactor.value=l.value,i.render({scene:p})}m=requestAnimationFrame(h),e.appendChild(a.canvas);function g(t){let n=e.getBoundingClientRect();r.value={x:(t.clientX-n.left)/n.width,y:1-(t.clientY-n.top)/n.height},c.value=1}function _(){c.value=0}t.mouseInteraction&&(e.addEventListener(`mousemove`,g),e.addEventListener(`mouseleave`,_)),u=()=>{cancelAnimationFrame(m),window.removeEventListener(`resize`,d),t.mouseInteraction&&(e.removeEventListener(`mousemove`,g),e.removeEventListener(`mouseleave`,_)),e.removeChild(a.canvas),a.getExtension(`WEBGL_lose_context`)?.loseContext()}};return d(()=>{u?.(),f()}),p(()=>{u?.()}),_(()=>t,()=>{u?.(),f()},{deep:!0}),(e,t)=>(a(),i(`div`,E({ref_key:`ctnDom`,ref:n,class:`relative w-full h-full`},e.$attrs),null,16))}}),q={class:`relative min-h-screen text-white overflow-hidden`},J={class:`custom-dot-grid`},Y={class:`relative z-10`},X={class:`relative flex flex-col items-center justify-center h-screen text-center px-6`},Z={initial:{opacity:0,y:-510},enter:{opacity:1,y:0}},Q={class:`flex gap-6 justify-center`},$={class:`py-40 px-6 mx-auto text-center`},ee={class:`text-3xl font-bold mb-8`},te={class:`text-3xl font-bold mb-8 mt-12`},ne={class:`text-3xl font-bold mb-8 mt-12`},re={class:`py-20`},ie={class:`flex flex-wrap justify-center gap-4 max-w-5xl mx-auto`},ae={class:`py-20`},oe={class:`flex flex-wrap justify-center gap-4 max-w-4xl mx-auto`},se=z(e({__name:`home`,setup(e){let t=[`Vue3`,`nuxt4`,`git`,`uni-app`,`UnoCSS`,`scss`,`less`,`Webpack`,`ECharts`,`TypeScript`,`Vite`,`Pinia`,`TailwindCSS`,`Element Plus`,`Axios`,`router`,`高德地图APl`,`Ruoyi`,`Element-Admin`],s=[`FastAPI`,`MySQL`,`PostgreSQL`,`MongoDB`,`Redis`,`Docker`,`Nginx`,`Gunicorn`];return(e,l)=>{let u=h(`el-button`),d=R(`motion`);return a(),i(`div`,q,[n(`div`,J,[D(K,{"mouse-repulsion":!0,"mouse-interaction":!0,density:4,"glow-intensity":.6,saturation:.8,"hue-shift":180})]),n(`div`,Y,[n(`section`,X,[o((a(),i(`div`,Z,[l[2]||=r(`<h1 class="text-6xl font-bold mb-6 leading-tight" data-v-dd2a5a04> 👋 我是 <span class="text-blue-400" data-v-dd2a5a04>前端开发工程师</span></h1><p class="mb-8 text-lg leading-relaxed text-[#fff]" data-v-dd2a5a04> 后台管理系统、博客网站、数据可视化大屏、微信小程序、响应式开发、ERP系统等。 </p><p class="text-[#fff] mb-8 text-lg" data-v-dd2a5a04> 熟练使用 Vue3、TypeScript、TailwindCSS、Element Plus、Pinia、Axios 等技术栈。 </p><p class="text-[#fff] mb-8 text-lg" data-v-dd2a5a04> Python、FastAPI、MySQL、Docker 等后端技术也有一定经验，能够独立完成全栈项目开发。 </p>`,4),n(`div`,Q,[D(u,{size:`large`,type:`primary`},{default:y(()=>[...l[0]||=[f(`查看项目`,-1)]]),_:1}),D(u,{size:`large`,plain:``},{default:y(()=>[...l[1]||=[f(`联系我`,-1)]]),_:1})])])),[[d]])]),n(`section`,$,[n(`h2`,ee,[l[3]||=f(` 💻 `,-1),D(V,{text:`前端开发`,speed:2,delay:.5,disabled:!1,color:`#EAF2FD`,"shine-color":`#27ff64`,spread:120,direction:`left`,yoyo:!1,"pause-on-hover":!1})]),l[6]||=n(`p`,{class:`text-[#fff] leading-8`},[f(` 熟练使用 Vue3 + TypeScript、Vue2、Nuxt、UniApp 进行业务开发，能够独立完成模块设计与落地`),n(`br`),f(` 熟练掌握 SCSS / Less / Tailwind CSS / UnoCSS，具备组件化开发与响应式布局能力`),n(`br`),f(` 熟练使用 Axios 进行前后端数据交互，具备接口联调、错误处理与请求封装经验`),n(`br`),f(` 熟悉 Element Plus、Element UI、RuoYi、Element Admin 等后台管理模板，具备二次开发能力`),n(`br`),f(` 熟练使用 ECharts、高德地图 API，能够实现数据可视化及地图类业务场景 `),n(`br`),f(` 具备 微信小程序 / UniApp 开发经验，能够完成页面开发与业务逻辑实现 `)],-1),n(`h2`,te,[l[4]||=f(` ⚙️ `,-1),D(V,{text:`工程化与工具`,speed:2,delay:.5,disabled:!1,color:`#EAF2FD`,"shine-color":`#27ff64`,spread:120,direction:`left`,yoyo:!1,"pause-on-hover":!1})]),l[7]||=n(`p`,{class:`text-[#fff] leading-8`},[f(` 熟悉 Vite、Webpack 构建流程，能够处理常见打包、代理、性能优化问题 `),n(`br`),f(` 熟练使用 Git 进行版本管理，具备分支管理与 Code Review 经验 `),n(`br`),f(` 具备良好的代码规范意识，能够保证代码可维护性与浏览器兼容性 `)],-1),n(`h2`,ne,[l[5]||=f(` 🧩 `,-1),D(V,{text:`后端开发`,speed:2,delay:.5,disabled:!1,color:`#EAF2FD`,"shine-color":`#27ff64`,spread:120,direction:`left`,yoyo:!1,"pause-on-hover":!1})]),l[8]||=n(`p`,{class:`text-[#fff] leading-8`},[f(` 熟悉使用 FastAPI 构建后端服务，能够完成接口设计、开发与调试`),n(`br`),f(` 掌握 MySQL 数据库设计与基本优化，具备表结构设计与 CRUD 开发能力 `),n(`br`),f(` 熟悉 SQLAlchemy（ORM） 进行数据库操作，支持异步接口开发 `),n(`br`),f(` 具备前后端联调经验，能够独立完成简单全栈项目开发 `)],-1)]),n(`section`,re,[l[9]||=n(`h2`,{class:`text-3xl font-bold text-center mb-12`},`🚀 前端技术栈`,-1),n(`div`,ie,[(a(),i(L,null,c(t,e=>n(`span`,{key:e,class:`cursor-target`},[D(U,{as:`button`,color:`#2463EB`,speed:`5s`,thickness:2},{default:y(()=>[f(m(e),1)]),_:2},1024)])),64))])]),n(`section`,ae,[l[10]||=n(`h2`,{class:`text-3xl font-bold text-center mb-12`},`🚀 后端技术栈`,-1),n(`div`,oe,[D(B,{"spin-duration":2,"hide-default-cursor":!1}),(a(),i(L,null,c(s,e=>n(`span`,{class:`cursor-target font-bold text-lg`,key:e},[D(U,{as:`button`,color:`#2463EB`,speed:`5s`,thickness:2},{default:y(()=>[f(m(e),1)]),_:2},1024)])),64))])]),l[11]||=r(`<section class="py-20" data-v-dd2a5a04><div class="grid grid-cols-2 md:grid-cols-4 text-center gap-8 max-w-6xl mx-auto" data-v-dd2a5a04><div data-v-dd2a5a04><h3 class="text-3xl font-bold text-blue-400" data-v-dd2a5a04>20+</h3><p class="text-[#fff]" data-v-dd2a5a04>完整项目经验（Web / 后台 / 小程序）</p></div><div data-v-dd2a5a04><h3 class="text-3xl font-bold text-purple-400" data-v-dd2a5a04>5年+</h3><p class="text-[#fff]" data-v-dd2a5a04>前端开发经验（Vue 体系）</p></div><div data-v-dd2a5a04><h3 class="text-3xl font-bold text-pink-400" data-v-dd2a5a04>100%</h3><p class="text-[#fff]" data-v-dd2a5a04>响应式布局 &amp; 多端适配能力</p></div><div data-v-dd2a5a04><h3 class="text-3xl font-bold text-green-400" data-v-dd2a5a04>高性能</h3><p class="text-[#fff]" data-v-dd2a5a04>性能优化（首屏/打包/请求优化）</p></div><div data-v-dd2a5a04><h3 class="text-3xl font-bold text-yellow-400" data-v-dd2a5a04>10+</h3><p class="text-[#fff]" data-v-dd2a5a04>全栈项目（FastAPI + MySQL）</p></div><div data-v-dd2a5a04><h3 class="text-3xl font-bold text-red-400" data-v-dd2a5a04>规范化</h3><p class="text-[#fff]" data-v-dd2a5a04>高质量代码（TS + 组件化 + 规范）</p></div><div data-v-dd2a5a04><h3 class="text-3xl font-bold text-cyan-400" data-v-dd2a5a04>50K+</h3><p class="text-[#fff]" data-v-dd2a5a04>代码沉淀（工程化开发经验）</p></div><div data-v-dd2a5a04><h3 class="text-3xl font-bold text-indigo-400" data-v-dd2a5a04>协作强</h3><p class="text-[#fff]" data-v-dd2a5a04>跨团队协作（产品 / 后端 / UI）</p></div></div></section>`,1)])])}}}),[[`__scopeId`,`data-v-dd2a5a04`]]);export{se as default};
