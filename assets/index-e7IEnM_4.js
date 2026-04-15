const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./home-DEfzo9AG.js","./_plugin-vue_export-helper-S3RvzygF.js","./vendor-BnkuSvMY.js","./rolldown-runtime-DF2fYuay.js","./vendor-CtXWf5sU.css","./home-BPGO-uzZ.css","./project-BD2jn5TK.js","./project-Bjsn4xet.css","./login-CgSr84xd.js","./login-B6sGBQlh.css"])))=>i.map(i=>d[i]);
import{A as e,B as t,C as n,E as r,F as i,H as a,I as o,L as s,M as c,N as l,O as u,P as d,Q as f,R as p,S as m,T as h,U as g,W as _,X as v,Y as y,Z as b,_ as x,f as S,g as C,h as w,k as T,m as E,p as D,q as O,v as k,w as A,x as j}from"./vendor-BnkuSvMY.js";import{t as M}from"./_plugin-vue_export-helper-S3RvzygF.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var N=e({__name:`clickSpark`,props:{sparkColor:{default:`#fff`},sparkSize:{default:10},sparkRadius:{default:15},sparkCount:{default:8},duration:{default:400},easing:{default:`ease-out`},extraScale:{default:1}},setup(e){let t=e,o=a(`canvasRef`),c=O([]),u=O(null),f=O(null),p=m(()=>e=>{switch(t.easing){case`linear`:return e;case`ease-in`:return e*e;case`ease-in-out`:return e<.5?2*e*e:-1+(4-2*e)*e;default:return e*(2-e)}}),h=e=>{let n=o.value;if(!n)return;let r=n.getBoundingClientRect(),i=e.clientX-r.left,a=e.clientY-r.top,s=performance.now(),l=Array.from({length:t.sparkCount},(e,n)=>({x:i,y:a,angle:2*Math.PI*n/t.sparkCount,startTime:s}));c.value.push(...l)},_=e=>{u.value||=e;let n=o.value,r=n?.getContext(`2d`);!r||!n||(r.clearRect(0,0,n.width,n.height),c.value=c.value.filter(n=>{let i=e-n.startTime;if(i>=t.duration)return!1;let a=i/t.duration,o=p.value(a),s=o*t.sparkRadius*t.extraScale,c=t.sparkSize*(1-o),l=n.x+s*Math.cos(n.angle),u=n.y+s*Math.sin(n.angle),d=n.x+(s+c)*Math.cos(n.angle),f=n.y+(s+c)*Math.sin(n.angle);return r.strokeStyle=t.sparkColor,r.lineWidth=2,r.beginPath(),r.moveTo(l,u),r.lineTo(d,f),r.stroke(),!0}),f.value=requestAnimationFrame(_))},v=()=>{let e=o.value;if(!e)return;let t=e.parentElement;if(!t)return;let{width:n,height:r}=t.getBoundingClientRect();(e.width!==n||e.height!==r)&&(e.width=n,e.height=r)},y,b=()=>{clearTimeout(y),y=setTimeout(v,100)},x=null;return l(()=>{let e=o.value;if(!e)return;let t=e.parentElement;t&&(x=new ResizeObserver(b),x.observe(t),v(),f.value=requestAnimationFrame(_))}),d(()=>{x&&x.disconnect(),clearTimeout(y),f.value&&cancelAnimationFrame(f.value)}),g([()=>t.sparkColor,()=>t.sparkSize,()=>t.sparkRadius,()=>t.sparkCount,()=>t.duration,p,()=>t.extraScale],()=>{f.value&&cancelAnimationFrame(f.value),f.value=requestAnimationFrame(_)}),(e,t)=>(i(),r(`div`,{ref:`containerRef`,class:`relative w-full h-full`,onClick:h},[n(`canvas`,{ref_key:`canvasRef`,ref:o,class:`absolute inset-0 pointer-events-none`},null,512),s(e.$slots,`default`)],512))}}),P={class:`fixed top-0 left-0 z-50 pointer-events-none w-full h-full`},F=e({__name:`splashCursor`,props:{SIM_RESOLUTION:{default:128},DYE_RESOLUTION:{default:1440},CAPTURE_RESOLUTION:{default:512},DENSITY_DISSIPATION:{default:3.5},VELOCITY_DISSIPATION:{default:2},PRESSURE:{default:.1},PRESSURE_ITERATIONS:{default:20},CURL:{default:3},SPLAT_RADIUS:{default:.2},SPLAT_FORCE:{default:6e3},SHADING:{type:Boolean,default:!0},COLOR_UPDATE_SPEED:{default:10},BACK_COLOR:{default:()=>({r:.5,g:0,b:0})},TRANSPARENT:{type:Boolean,default:!0}},setup(e){let t=e,o=a(`canvasRef`);function s(){return{id:-1,texcoordX:0,texcoordY:0,prevTexcoordX:0,prevTexcoordY:0,deltaX:0,deltaY:0,down:!1,moved:!1,color:{r:0,g:0,b:0}}}return l(()=>{let e=o.value;if(!e)return;let n=[s()],r={SIM_RESOLUTION:t.SIM_RESOLUTION,DYE_RESOLUTION:t.DYE_RESOLUTION,CAPTURE_RESOLUTION:t.CAPTURE_RESOLUTION,DENSITY_DISSIPATION:t.DENSITY_DISSIPATION,VELOCITY_DISSIPATION:t.VELOCITY_DISSIPATION,PRESSURE:t.PRESSURE,PRESSURE_ITERATIONS:t.PRESSURE_ITERATIONS,CURL:t.CURL,SPLAT_RADIUS:t.SPLAT_RADIUS,SPLAT_FORCE:t.SPLAT_FORCE,SHADING:t.SHADING,COLOR_UPDATE_SPEED:t.COLOR_UPDATE_SPEED,PAUSED:!1,BACK_COLOR:t.BACK_COLOR,TRANSPARENT:t.TRANSPARENT},{gl:i,ext:a}=c(e);if(!i||!a)return;a.supportLinearFiltering||(r.DYE_RESOLUTION=256,r.SHADING=!1);function c(e){let t={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1},n=e.getContext(`webgl2`,t);if(n||=e.getContext(`webgl`,t)||e.getContext(`experimental-webgl`,t),!n)throw Error(`Unable to initialize WebGL.`);let r=`drawBuffers`in n,i=!1,a=null;r?(n.getExtension(`EXT_color_buffer_float`),i=!!n.getExtension(`OES_texture_float_linear`)):(a=n.getExtension(`OES_texture_half_float`),i=!!n.getExtension(`OES_texture_half_float_linear`)),n.clearColor(0,0,0,1);let o=r?n.HALF_FLOAT:a&&a.HALF_FLOAT_OES||0,s,c,u;return r?(s=l(n,n.RGBA16F,n.RGBA,o),c=l(n,n.RG16F,n.RG,o),u=l(n,n.R16F,n.RED,o)):(s=l(n,n.RGBA,n.RGBA,o),c=l(n,n.RGBA,n.RGBA,o),u=l(n,n.RGBA,n.RGBA,o)),{gl:n,ext:{formatRGBA:s,formatRG:c,formatR:u,halfFloatTexType:o,supportLinearFiltering:i}}}function l(e,t,n,r){if(!u(e,t,n,r)){if(`drawBuffers`in e){let n=e;switch(t){case n.R16F:return l(n,n.RG16F,n.RG,r);case n.RG16F:return l(n,n.RGBA16F,n.RGBA,r);default:return null}}return null}return{internalFormat:t,format:n}}function u(e,t,n,r){let i=e.createTexture();if(!i)return!1;e.bindTexture(e.TEXTURE_2D,i),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,t,4,4,0,n,r,null);let a=e.createFramebuffer();return a?(e.bindFramebuffer(e.FRAMEBUFFER,a),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,i,0),e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE):!1}function d(e){if(!e.length)return 0;let t=0;for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return t}function f(e,t){if(!t)return e;let n=``;for(let e of t)n+=`#define ${e}\n`;return n+e}function p(e,t,n=null){let r=f(t,n),a=i.createShader(e);return a?(i.shaderSource(a,r),i.compileShader(a),i.getShaderParameter(a,i.COMPILE_STATUS)||console.trace(i.getShaderInfoLog(a)),a):null}function m(e,t){if(!e||!t)return null;let n=i.createProgram();return n?(i.attachShader(n,e),i.attachShader(n,t),i.linkProgram(n),i.getProgramParameter(n,i.LINK_STATUS)||console.trace(i.getProgramInfoLog(n)),n):null}function h(e){let t={},n=i.getProgramParameter(e,i.ACTIVE_UNIFORMS);for(let r=0;r<n;r++){let n=i.getActiveUniform(e,r);n&&(t[n.name]=i.getUniformLocation(e,n.name))}return t}class g{program;uniforms;constructor(e,t){this.program=m(e,t),this.uniforms=this.program?h(this.program):{}}bind(){this.program&&i.useProgram(this.program)}}class _{vertexShader;fragmentShaderSource;programs;activeProgram;uniforms;constructor(e,t){this.vertexShader=e,this.fragmentShaderSource=t,this.programs={},this.activeProgram=null,this.uniforms={}}setKeywords(e){let t=0;for(let n of e)t+=d(n);let n=this.programs[t];if(n==null){let r=p(i.FRAGMENT_SHADER,this.fragmentShaderSource,e);n=m(this.vertexShader,r),this.programs[t]=n}n!==this.activeProgram&&(n&&(this.uniforms=h(n)),this.activeProgram=n)}bind(){this.activeProgram&&i.useProgram(this.activeProgram)}}let v=p(i.VERTEX_SHADER,`
      precision highp float;
      attribute vec2 aPosition;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform vec2 texelSize;
      void main () {
        vUv = aPosition * 0.5 + 0.5;
        vL = vUv - vec2(texelSize.x, 0.0);
        vR = vUv + vec2(texelSize.x, 0.0);
        vT = vUv + vec2(0.0, texelSize.y);
        vB = vUv - vec2(0.0, texelSize.y);
        gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `),y=p(i.FRAGMENT_SHADER,`
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      uniform sampler2D uTexture;
      void main () {
        gl_FragColor = texture2D(uTexture, vUv);
      }
    `),b=p(i.FRAGMENT_SHADER,`
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      uniform sampler2D uTexture;
      uniform float value;
      void main () {
        gl_FragColor = value * texture2D(uTexture, vUv);
      }
    `),x=p(i.FRAGMENT_SHADER,`
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      uniform sampler2D uTarget;
      uniform float aspectRatio;
      uniform vec3 color;
      uniform vec2 point;
      uniform float radius;
      void main () {
          vec2 p = vUv - point.xy;
          p.x *= aspectRatio;
          vec3 splat = exp(-dot(p, p) / radius) * color;
          vec3 base = texture2D(uTarget, vUv).xyz;
          gl_FragColor = vec4(base + splat, 1.0);
      }
    `),S=p(i.FRAGMENT_SHADER,`
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      uniform sampler2D uVelocity;
      uniform sampler2D uSource;
      uniform vec2 texelSize;
      uniform vec2 dyeTexelSize;
      uniform float dt;
      uniform float dissipation;
      vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
          vec2 st = uv / tsize - 0.5;
          vec2 iuv = floor(st);
          vec2 fuv = fract(st);
          vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
          vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
          vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
          vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);
          return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
      }
      void main () {
          #ifdef MANUAL_FILTERING
              vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
              vec4 result = bilerp(uSource, coord, dyeTexelSize);
          #else
              vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
              vec4 result = texture2D(uSource, coord);
          #endif
          float decay = 1.0 + dissipation * dt;
          gl_FragColor = result / decay;
      }
    `,a.supportLinearFiltering?null:[`MANUAL_FILTERING`]),C=p(i.FRAGMENT_SHADER,`
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      varying highp vec2 vL;
      varying highp vec2 vR;
      varying highp vec2 vT;
      varying highp vec2 vB;
      uniform sampler2D uVelocity;
      void main () {
          float L = texture2D(uVelocity, vL).x;
          float R = texture2D(uVelocity, vR).x;
          float T = texture2D(uVelocity, vT).y;
          float B = texture2D(uVelocity, vB).y;
          vec2 C = texture2D(uVelocity, vUv).xy;
          if (vL.x < 0.0) { L = -C.x; }
          if (vR.x > 1.0) { R = -C.x; }
          if (vT.y > 1.0) { T = -C.y; }
          if (vB.y < 0.0) { B = -C.y; }
          float div = 0.5 * (R - L + T - B);
          gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
      }
    `),w=p(i.FRAGMENT_SHADER,`
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      varying highp vec2 vL;
      varying highp vec2 vR;
      varying highp vec2 vT;
      varying highp vec2 vB;
      uniform sampler2D uVelocity;
      void main () {
          float L = texture2D(uVelocity, vL).y;
          float R = texture2D(uVelocity, vR).y;
          float T = texture2D(uVelocity, vT).x;
          float B = texture2D(uVelocity, vB).x;
          float vorticity = R - L - T + B;
          gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
      }
    `),T=p(i.FRAGMENT_SHADER,`
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uVelocity;
      uniform sampler2D uCurl;
      uniform float curl;
      uniform float dt;
      void main () {
          float L = texture2D(uCurl, vL).x;
          float R = texture2D(uCurl, vR).x;
          float T = texture2D(uCurl, vT).x;
          float B = texture2D(uCurl, vB).x;
          float C = texture2D(uCurl, vUv).x;
          vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
          force /= length(force) + 0.0001;
          force *= curl * C;
          force.y *= -1.0;
          vec2 velocity = texture2D(uVelocity, vUv).xy;
          velocity += force * dt;
          velocity = min(max(velocity, -1000.0), 1000.0);
          gl_FragColor = vec4(velocity, 0.0, 1.0);
      }
    `),E=p(i.FRAGMENT_SHADER,`
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      varying highp vec2 vL;
      varying highp vec2 vR;
      varying highp vec2 vT;
      varying highp vec2 vB;
      uniform sampler2D uPressure;
      uniform sampler2D uDivergence;
      void main () {
          float L = texture2D(uPressure, vL).x;
          float R = texture2D(uPressure, vR).x;
          float T = texture2D(uPressure, vT).x;
          float B = texture2D(uPressure, vB).x;
          float C = texture2D(uPressure, vUv).x;
          float divergence = texture2D(uDivergence, vUv).x;
          float pressure = (L + R + B + T - divergence) * 0.25;
          gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
      }
    `),D=p(i.FRAGMENT_SHADER,`
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      varying highp vec2 vL;
      varying highp vec2 vR;
      varying highp vec2 vT;
      varying highp vec2 vB;
      uniform sampler2D uPressure;
      uniform sampler2D uVelocity;
      void main () {
          float L = texture2D(uPressure, vL).x;
          float R = texture2D(uPressure, vR).x;
          float T = texture2D(uPressure, vT).x;
          float B = texture2D(uPressure, vB).x;
          vec2 velocity = texture2D(uVelocity, vUv).xy;
          velocity.xy -= vec2(R - L, T - B);
          gl_FragColor = vec4(velocity, 0.0, 1.0);
      }
    `),O=(()=>{let e=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,e),i.bufferData(i.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),i.STATIC_DRAW);let t=i.createBuffer();return i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t),i.bufferData(i.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),i.STATIC_DRAW),i.vertexAttribPointer(0,2,i.FLOAT,!1,0,0),i.enableVertexAttribArray(0),(e,t=!1)=>{i&&(e?(i.viewport(0,0,e.width,e.height),i.bindFramebuffer(i.FRAMEBUFFER,e.fbo)):(i.viewport(0,0,i.drawingBufferWidth,i.drawingBufferHeight),i.bindFramebuffer(i.FRAMEBUFFER,null)),t&&(i.clearColor(0,0,0,1),i.clear(i.COLOR_BUFFER_BIT)),i.drawElements(i.TRIANGLES,6,i.UNSIGNED_SHORT,0))}})(),k,A,j,M,N,P=new g(v,y),F=new g(v,b),I=new g(v,x),L=new g(v,S),R=new g(v,C),z=new g(v,w),B=new g(v,T),V=new g(v,E),H=new g(v,D),U=new _(v,`
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uTexture;
      uniform sampler2D uDithering;
      uniform vec2 ditherScale;
      uniform vec2 texelSize;
      vec3 linearToGamma (vec3 color) {
          color = max(color, vec3(0));
          return max(1.055 * pow(color, vec3(0.416666667)) - 0.055, vec3(0));
      }
      void main () {
          vec3 c = texture2D(uTexture, vUv).rgb;
          #ifdef SHADING
              vec3 lc = texture2D(uTexture, vL).rgb;
              vec3 rc = texture2D(uTexture, vR).rgb;
              vec3 tc = texture2D(uTexture, vT).rgb;
              vec3 bc = texture2D(uTexture, vB).rgb;
              float dx = length(rc) - length(lc);
              float dy = length(tc) - length(bc);
              vec3 n = normalize(vec3(dx, dy, length(texelSize)));
              vec3 l = vec3(0.0, 0.0, 1.0);
              float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
              c *= diffuse;
          #endif
          float a = max(c.r, max(c.g, c.b));
          gl_FragColor = vec4(c, a);
      }
    `);function W(e,t,n,r,a,o){i.activeTexture(i.TEXTURE0);let s=i.createTexture();i.bindTexture(i.TEXTURE_2D,s),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,o),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,o),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),i.texImage2D(i.TEXTURE_2D,0,n,e,t,0,r,a,null);let c=i.createFramebuffer();return i.bindFramebuffer(i.FRAMEBUFFER,c),i.framebufferTexture2D(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,s,0),i.viewport(0,0,e,t),i.clear(i.COLOR_BUFFER_BIT),{texture:s,fbo:c,width:e,height:t,texelSizeX:1/e,texelSizeY:1/t,attach(e){return i.activeTexture(i.TEXTURE0+e),i.bindTexture(i.TEXTURE_2D,s),e}}}function G(e,t,n,r,i,a){let o=W(e,t,n,r,i,a),s=W(e,t,n,r,i,a);return{width:e,height:t,texelSizeX:o.texelSizeX,texelSizeY:o.texelSizeY,read:o,write:s,swap(){let e=this.read;this.read=this.write,this.write=e}}}function ee(e,t,n,r,a,o,s){let c=W(t,n,r,a,o,s);return P.bind(),P.uniforms.uTexture&&i.uniform1i(P.uniforms.uTexture,e.attach(0)),O(c,!1),c}function K(e,t,n,r,i,a,o){return e.width===t&&e.height===n?e:(e.read=ee(e.read,t,n,r,i,a,o),e.write=W(t,n,r,i,a,o),e.width=t,e.height=n,e.texelSizeX=1/t,e.texelSizeY=1/n,e)}function q(){let e=Y(r.SIM_RESOLUTION),t=Y(r.DYE_RESOLUTION),n=a.halfFloatTexType,o=a.formatRGBA,s=a.formatRG,c=a.formatR,l=a.supportLinearFiltering?i.LINEAR:i.NEAREST;i.disable(i.BLEND),o&&(k=k?K(k,t.width,t.height,o.internalFormat,o.format,n,l):G(t.width,t.height,o.internalFormat,o.format,n,l),s&&(A=A?K(A,e.width,e.height,s.internalFormat,s.format,n,l):G(e.width,e.height,s.internalFormat,s.format,n,l),c&&(j=W(e.width,e.height,c.internalFormat,c.format,n,i.NEAREST),M=W(e.width,e.height,c.internalFormat,c.format,n,i.NEAREST),N=G(e.width,e.height,c.internalFormat,c.format,n,i.NEAREST))))}function J(){let e=[];r.SHADING&&e.push(`SHADING`),U.setKeywords(e)}function Y(e){let t=i.drawingBufferWidth,n=i.drawingBufferHeight,r=t/n,a=r<1?1/r:r,o=Math.round(e),s=Math.round(e*a);return t>n?{width:s,height:o}:{width:o,height:s}}function X(e){let t=window.devicePixelRatio||1;return Math.floor(e*t)}J(),q();let Z=Date.now(),Q=0;function te(){let e=$();ne()&&q(),re(e),ie(),ae(e),oe(null),requestAnimationFrame(te)}function $(){let e=Date.now(),t=(e-Z)/1e3;return t=Math.min(t,.016666),Z=e,t}function ne(){let t=X(e.clientWidth),n=X(e.clientHeight);return e.width!==t||e.height!==n?(e.width=t,e.height=n,!0):!1}function re(e){Q+=e*r.COLOR_UPDATE_SPEED,Q>=1&&(Q=ye(Q,0,1),n.forEach(e=>{e.color=_e()}))}function ie(){for(let e of n)e.moved&&(e.moved=!1,ce(e))}function ae(e){i.disable(i.BLEND),z.bind(),z.uniforms.texelSize&&i.uniform2f(z.uniforms.texelSize,A.texelSizeX,A.texelSizeY),z.uniforms.uVelocity&&i.uniform1i(z.uniforms.uVelocity,A.read.attach(0)),O(M),B.bind(),B.uniforms.texelSize&&i.uniform2f(B.uniforms.texelSize,A.texelSizeX,A.texelSizeY),B.uniforms.uVelocity&&i.uniform1i(B.uniforms.uVelocity,A.read.attach(0)),B.uniforms.uCurl&&i.uniform1i(B.uniforms.uCurl,M.attach(1)),B.uniforms.curl&&i.uniform1f(B.uniforms.curl,r.CURL),B.uniforms.dt&&i.uniform1f(B.uniforms.dt,e),O(A.write),A.swap(),R.bind(),R.uniforms.texelSize&&i.uniform2f(R.uniforms.texelSize,A.texelSizeX,A.texelSizeY),R.uniforms.uVelocity&&i.uniform1i(R.uniforms.uVelocity,A.read.attach(0)),O(j),F.bind(),F.uniforms.uTexture&&i.uniform1i(F.uniforms.uTexture,N.read.attach(0)),F.uniforms.value&&i.uniform1f(F.uniforms.value,r.PRESSURE),O(N.write),N.swap(),V.bind(),V.uniforms.texelSize&&i.uniform2f(V.uniforms.texelSize,A.texelSizeX,A.texelSizeY),V.uniforms.uDivergence&&i.uniform1i(V.uniforms.uDivergence,j.attach(0));for(let e=0;e<r.PRESSURE_ITERATIONS;e++)V.uniforms.uPressure&&i.uniform1i(V.uniforms.uPressure,N.read.attach(1)),O(N.write),N.swap();H.bind(),H.uniforms.texelSize&&i.uniform2f(H.uniforms.texelSize,A.texelSizeX,A.texelSizeY),H.uniforms.uPressure&&i.uniform1i(H.uniforms.uPressure,N.read.attach(0)),H.uniforms.uVelocity&&i.uniform1i(H.uniforms.uVelocity,A.read.attach(1)),O(A.write),A.swap(),L.bind(),L.uniforms.texelSize&&i.uniform2f(L.uniforms.texelSize,A.texelSizeX,A.texelSizeY),!a.supportLinearFiltering&&L.uniforms.dyeTexelSize&&i.uniform2f(L.uniforms.dyeTexelSize,A.texelSizeX,A.texelSizeY);let t=A.read.attach(0);L.uniforms.uVelocity&&i.uniform1i(L.uniforms.uVelocity,t),L.uniforms.uSource&&i.uniform1i(L.uniforms.uSource,t),L.uniforms.dt&&i.uniform1f(L.uniforms.dt,e),L.uniforms.dissipation&&i.uniform1f(L.uniforms.dissipation,r.VELOCITY_DISSIPATION),O(A.write),A.swap(),!a.supportLinearFiltering&&L.uniforms.dyeTexelSize&&i.uniform2f(L.uniforms.dyeTexelSize,k.texelSizeX,k.texelSizeY),L.uniforms.uVelocity&&i.uniform1i(L.uniforms.uVelocity,A.read.attach(0)),L.uniforms.uSource&&i.uniform1i(L.uniforms.uSource,k.read.attach(1)),L.uniforms.dissipation&&i.uniform1f(L.uniforms.dissipation,r.DENSITY_DISSIPATION),O(k.write),k.swap()}function oe(e){i.blendFunc(i.ONE,i.ONE_MINUS_SRC_ALPHA),i.enable(i.BLEND),se(e)}function se(e){let t=e?e.width:i.drawingBufferWidth,n=e?e.height:i.drawingBufferHeight;U.bind(),r.SHADING&&U.uniforms.texelSize&&i.uniform2f(U.uniforms.texelSize,1/t,1/n),U.uniforms.uTexture&&i.uniform1i(U.uniforms.uTexture,k.read.attach(0)),O(e,!1)}function ce(e){let t=e.deltaX*r.SPLAT_FORCE,n=e.deltaY*r.SPLAT_FORCE;ue(e.texcoordX,e.texcoordY,t,n,e.color)}function le(e){let t=_e();t.r*=10,t.g*=10,t.b*=10;let n=10*(Math.random()-.5),r=30*(Math.random()-.5);ue(e.texcoordX,e.texcoordY,n,r,t)}function ue(t,n,a,o,s){I.bind(),I.uniforms.uTarget&&i.uniform1i(I.uniforms.uTarget,A.read.attach(0)),I.uniforms.aspectRatio&&i.uniform1f(I.uniforms.aspectRatio,e.width/e.height),I.uniforms.point&&i.uniform2f(I.uniforms.point,t,n),I.uniforms.color&&i.uniform3f(I.uniforms.color,a,o,0),I.uniforms.radius&&i.uniform1f(I.uniforms.radius,de(r.SPLAT_RADIUS/100)),O(A.write),A.swap(),I.uniforms.uTarget&&i.uniform1i(I.uniforms.uTarget,k.read.attach(0)),I.uniforms.color&&i.uniform3f(I.uniforms.color,s.r,s.g,s.b),O(k.write),k.swap()}function de(t){let n=e.width/e.height;return n>1&&(t*=n),t}function fe(t,n,r,i){t.id=n,t.down=!0,t.moved=!1,t.texcoordX=r/e.width,t.texcoordY=1-i/e.height,t.prevTexcoordX=t.texcoordX,t.prevTexcoordY=t.texcoordY,t.deltaX=0,t.deltaY=0,t.color=_e()}function pe(t,n,r,i){t.prevTexcoordX=t.texcoordX,t.prevTexcoordY=t.texcoordY,t.texcoordX=n/e.width,t.texcoordY=1-r/e.height,t.deltaX=he(t.texcoordX-t.prevTexcoordX),t.deltaY=ge(t.texcoordY-t.prevTexcoordY),t.moved=Math.abs(t.deltaX)>0||Math.abs(t.deltaY)>0,t.color=i}function me(e){e.down=!1}function he(t){let n=e.width/e.height;return n<1&&(t*=n),t}function ge(t){let n=e.width/e.height;return n>1&&(t/=n),t}function _e(){let e=ve(Math.random(),1,1);return e.r*=.15,e.g*=.15,e.b*=.15,e}function ve(e,t,n){let r=0,i=0,a=0,o=Math.floor(e*6),s=e*6-o,c=n*(1-t),l=n*(1-s*t),u=n*(1-(1-s)*t);switch(o%6){case 0:r=n,i=u,a=c;break;case 1:r=l,i=n,a=c;break;case 2:r=c,i=n,a=u;break;case 3:r=c,i=l,a=n;break;case 4:r=u,i=c,a=n;break;case 5:r=n,i=c,a=l;break}return{r,g:i,b:a}}function ye(e,t,n){let r=n-t;return r===0?t:(e-t)%r+t}window.addEventListener(`mousedown`,e=>{let t=n[0];fe(t,-1,X(e.clientX),X(e.clientY)),le(t)});function be(e){let t=n[0],r=X(e.clientX),i=X(e.clientY),a=_e();te(),pe(t,r,i,a),document.body.removeEventListener(`mousemove`,be)}document.body.addEventListener(`mousemove`,be),window.addEventListener(`mousemove`,e=>{let t=n[0],r=X(e.clientX),i=X(e.clientY),a=t.color;pe(t,r,i,a)});function xe(e){let t=e.targetTouches,r=n[0];for(let e=0;e<t.length;e++){let n=X(t[e].clientX),i=X(t[e].clientY);te(),fe(r,t[e].identifier,n,i)}document.body.removeEventListener(`touchstart`,xe)}document.body.addEventListener(`touchstart`,xe),window.addEventListener(`touchstart`,e=>{let t=e.targetTouches,r=n[0];for(let e=0;e<t.length;e++){let n=X(t[e].clientX),i=X(t[e].clientY);fe(r,t[e].identifier,n,i)}},!1),window.addEventListener(`touchmove`,e=>{let t=e.targetTouches,r=n[0];for(let e=0;e<t.length;e++)pe(r,X(t[e].clientX),X(t[e].clientY),r.color)},!1),window.addEventListener(`touchend`,e=>{let t=e.changedTouches,r=n[0];for(let e=0;e<t.length;e++)me(r)})}),(e,t)=>(i(),r(`div`,P,[n(`canvas`,{ref_key:`canvasRef`,ref:o,id:`fluid`,class:`w-screen h-screen block`},null,512)]))}}),I={class:`top-[1em] left-0 md:left-auto z-[1000] absolute w-full md:w-auto`},L=[`src`,`alt`],R={role:`menubar`,class:`flex items-stretch m-0 p-[3px] h-full list-none`,style:{gap:`var(--pill-gap)`}},z={class:`inline-block z-[2] relative leading-[1] label-stack`},B={class:`inline-block z-[2] relative leading-[1] pill-label`,style:{willChange:`transform`}},V={class:`inline-block top-0 left-0 z-[3] absolute pill-label-hover`,style:{color:`var(--hover-text, #fff)`,willChange:`transform, opacity`},"aria-hidden":`true`},H={key:0,class:`-bottom-[6px] left-1/2 z-[4] absolute rounded-full w-3 h-3 -translate-x-1/2`,style:{background:`var(--base, #000)`},"aria-hidden":`true`},U=[`aria-expanded`],W={class:`flex flex-col gap-[3px] m-0 p-[3px] list-none`},G=e({__name:`pillNav`,props:{logo:{},logoAlt:{default:`Logo`},items:{},activeHref:{},className:{default:``},ease:{default:`power3.easeOut`},baseColor:{default:`#fff`},pillColor:{default:`#060010`},hoveredPillTextColor:{default:`#060010`},pillTextColor:{},onMobileMenuClick:{},initialLoadAnimation:{type:Boolean,default:!0}},setup(e){let s=e,d=s.pillTextColor??s.baseColor,p=O(!1),y=O([]),x=O([]),S=O([]),C=a(`logoImgRef`),w=O(null),T=a(`hamburgerRef`),D=a(`mobileMenuRef`),k=a(`navItemsRef`),M=a(`logoRef`);g(()=>s.items,e=>{y.value=Array(e.length).fill(null),x.value=Array(e.length).fill(null),S.value=Array(e.length).fill(null)},{immediate:!0});let N=()=>{y.value.forEach(e=>{if(!e?.parentElement)return;let t=e.parentElement,{width:n,height:r}=t.getBoundingClientRect(),i=(n*n/4+r*r)/(2*r),a=Math.ceil(2*i)+2,o=Math.ceil(i-Math.sqrt(Math.max(0,i*i-n*n/4)))+1,c=a-o;e.style.width=`${a}px`,e.style.height=`${a}px`,e.style.bottom=`-${o}px`,E.set(e,{xPercent:-50,scale:0,transformOrigin:`50% ${c}px`});let l=t.querySelector(`.pill-label`),u=t.querySelector(`.pill-label-hover`);l&&E.set(l,{y:0}),u&&E.set(u,{y:r+12,opacity:0});let d=y.value.indexOf(e);if(d===-1)return;x.value[d]?.kill();let f=E.timeline({paused:!0});f.to(e,{scale:1.2,xPercent:-50,duration:2,ease:s.ease,overwrite:`auto`},0),l&&f.to(l,{y:-(r+8),duration:2,ease:s.ease,overwrite:`auto`},0),u&&(E.set(u,{y:Math.ceil(r+100),opacity:0}),f.to(u,{y:0,opacity:1,duration:2,ease:s.ease,overwrite:`auto`},0)),x.value[d]=f})},P=()=>N();l(()=>{N(),window.addEventListener(`resize`,P),document.fonts&&document.fonts.ready.then(N).catch(()=>{});let e=D.value;if(e&&E.set(e,{visibility:`hidden`,opacity:0,scaleY:1,y:0}),s.initialLoadAnimation){let e=M.value,t=k.value;e&&(E.set(e,{scale:0}),E.to(e,{scale:1,duration:.6,ease:s.ease})),t&&(E.set(t,{width:0,overflow:`hidden`}),E.to(t,{width:`auto`,duration:.6,ease:s.ease}))}}),c(()=>{window.removeEventListener(`resize`,P)}),g(()=>[s.items,s.ease,s.initialLoadAnimation],()=>{N()},{deep:!0});let F=e=>{let t=x.value[e];t&&(S.value[e]?.kill(),S.value[e]=t.tweenTo(t.duration(),{duration:.3,ease:s.ease,overwrite:`auto`}))},G=e=>{let t=x.value[e];t&&(S.value[e]?.kill(),S.value[e]=t.tweenTo(0,{duration:.2,ease:s.ease,overwrite:`auto`}))},ee=()=>{let e=C.value;e&&(w.value?.kill(),E.set(e,{rotate:0}),w.value=E.to(e,{rotate:360,duration:.2,ease:s.ease,overwrite:`auto`}))},K=()=>{let e=!p.value;p.value=e;let t=T.value,n=D.value;if(t){let n=t.querySelectorAll(`.hamburger-line`);e?(E.to(n[0],{rotation:45,y:3,duration:.3,ease:s.ease}),E.to(n[1],{rotation:-45,y:-3,duration:.3,ease:s.ease})):(E.to(n[0],{rotation:0,y:0,duration:.3,ease:s.ease}),E.to(n[1],{rotation:0,y:0,duration:.3,ease:s.ease}))}n&&(e?(E.set(n,{visibility:`visible`}),E.fromTo(n,{opacity:0,y:10,scaleY:1},{opacity:1,y:0,scaleY:1,duration:.3,ease:s.ease,transformOrigin:`top center`})):E.to(n,{opacity:0,y:10,scaleY:1,duration:.2,ease:s.ease,transformOrigin:`top center`,onComplete:()=>{E.set(n,{visibility:`hidden`})}})),s.onMobileMenuClick?.()},q=e=>e.startsWith(`http://`)||e.startsWith(`https://`)||e.startsWith(`//`)||e.startsWith(`mailto:`)||e.startsWith(`tel:`)||e.startsWith(`#`),J=e=>e&&!q(e),Y=m(()=>({"--base":s.baseColor,"--pill-bg":s.pillColor,"--hover-text":s.hoveredPillTextColor,"--pill-text":d,"--nav-h":`42px`,"--logo":`36px`,"--pill-pad-x":`18px`,"--pill-gap":`3px`})),X=(e,t)=>{y.value.length>t&&(y.value[t]=e)};return(a,s)=>(i(),r(`div`,I,[n(`nav`,{class:v([`w-full md:w-max flex items-center justify-between md:justify-start box-border px-4 md:px-0`,e.className]),"aria-label":`Primary`,style:b(Y.value)},[(i(),A(t(J(e.items?.[0]?.href)?`RouterLink`:`a`),{to:J(e.items?.[0]?.href)?e.items[0].href:void 0,href:J(e.items?.[0]?.href)?void 0:e.items?.[0]?.href||`#`,"aria-label":`Home`,role:`menuitem`,ref_key:`logoRef`,ref:M,class:`inline-flex justify-center items-center p-2 rounded-full overflow-hidden`,style:{width:`var(--nav-h)`,height:`var(--nav-h)`,background:`var(--base, #000)`},onMouseenter:ee},{default:_(()=>[n(`img`,{src:e.logo,alt:e.logoAlt,ref_key:`logoImgRef`,ref:C,class:`block w-full h-full object-cover`},null,8,L)]),_:1},40,[`to`,`href`])),n(`div`,{ref_key:`navItemsRef`,ref:k,class:`hidden relative md:flex items-center ml-2 rounded-full`,style:{height:`var(--nav-h)`,background:`var(--base, #000)`}},[n(`ul`,R,[(i(!0),r(j,null,o(e.items,(a,o)=>(i(),r(`li`,{key:a.href||`item-${o}`,class:`flex h-full`,role:`none`},[(i(),A(t(J(a.href)?`RouterLink`:`a`),{to:J(a.href)?a.href:void 0,href:J(a.href)?void 0:a.href,class:`inline-flex box-border relative justify-center items-center px-0 rounded-full h-full overflow-hidden font-semibold text-[16px] no-underline uppercase leading-[0] tracking-[0.2px] whitespace-nowrap cursor-pointer`,style:{background:`var(--pill-bg, #fff)`,color:`var(--pill-text, var(--base, #000))`,paddingLeft:`var(--pill-pad-x)`,paddingRight:`var(--pill-pad-x)`},"aria-label":a.ariaLabel||a.label,onMouseenter:e=>F(o),onMouseleave:e=>G(o)},{default:_(()=>[n(`span`,{class:`block bottom-0 left-1/2 z-[1] absolute rounded-full pointer-events-none hover-circle`,style:{background:`var(--base, #000)`,willChange:`transform`},"aria-hidden":`true`,ref_for:!0,ref:e=>X(e,o)},null,512),n(`span`,z,[n(`span`,B,f(a.label),1),n(`span`,V,f(a.label),1)]),e.activeHref===a.href?(i(),r(`span`,H)):h(``,!0)]),_:2},1064,[`to`,`href`,`aria-label`,`onMouseenter`,`onMouseleave`]))]))),128))])],512),n(`button`,{ref_key:`hamburgerRef`,ref:T,onClick:K,"aria-label":`Toggle menu`,"aria-expanded":p.value,class:`md:hidden relative flex flex-col justify-center items-center gap-1 p-0 border-0 rounded-full cursor-pointer`,style:{width:`var(--nav-h)`,height:`var(--nav-h)`,background:`var(--base, #000)`}},[...s[2]||=[n(`span`,{class:`rounded w-4 h-0.5 origin-center transition-all duration-[10ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] hamburger-line`,style:{background:`var(--pill-bg, #fff)`}},null,-1),n(`span`,{class:`rounded w-4 h-0.5 origin-center transition-all duration-[10ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] hamburger-line`,style:{background:`var(--pill-bg, #fff)`}},null,-1)]],8,U)],6),n(`div`,{ref_key:`mobileMenuRef`,ref:D,class:`md:hidden top-[3em] right-4 left-4 z-[998] absolute shadow-[0_8px_32px_rgba(0,0,0,0.12)] rounded-[27px] origin-top`,style:b({...Y.value,background:`var(--base, #f0f0f0)`})},[n(`ul`,W,[(i(!0),r(j,null,o(e.items,e=>(i(),r(`li`,{key:e.href||`mobile-${e.label}`},[(i(),A(t(J(e.href)?`RouterLink`:`a`),{to:J(e.href)?e.href:void 0,href:J(e.href)?void 0:e.href,class:`block px-4 py-3 rounded-[50px] font-medium text-[16px] transition-all duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]`,style:{background:`var(--pill-bg, #fff)`,color:`var(--pill-text, #fff)`},onMouseenter:s[0]||=e=>{e.currentTarget.style.background=`var(--base)`,e.currentTarget.style.color=`var(--hover-text, #fff)`},onMouseleave:s[1]||=e=>{e.currentTarget.style.background=`var(--pill-bg, #fff)`,e.currentTarget.style.color=`var(--pill-text, #fff)`}},{default:_(()=>[u(f(e.label),1)]),_:2},1064,[`to`,`href`]))]))),128))])],4)]))}}),ee=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='37.07'%20height='36'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20198'%3e%3cpath%20fill='%2341B883'%20d='M204.8%200H256L128%20220.8L0%200h97.92L128%2051.2L157.44%200h47.36Z'%3e%3c/path%3e%3cpath%20fill='%2341B883'%20d='m0%200l128%20220.8L256%200h-51.2L128%20132.48L50.56%200H0Z'%3e%3c/path%3e%3cpath%20fill='%2335495E'%20d='M50.56%200L128%20133.12L204.8%200h-47.36L128%2051.2L97.92%200H50.56Z'%3e%3c/path%3e%3c/svg%3e`,K={class:`flex justify-center items-center w-screen fixed top-0 left-0 w-full z-50`},q=e({__name:`top`,setup(e){let t=O(`/`);return g(x(),e=>{t.value=e.path}),(e,n)=>(i(),r(`div`,K,[T(G,{logo:y(ee),logoAlt:`Company Logo`,items:[{label:`首页`,href:`/`},{label:`项目`,href:`/project`},{label:`登录`,href:`/login`}],activeHref:t.value,class:`custom-nav`,ease:`power2.easeOut`,baseColor:`#ffffff `,pillColor:`#000000`,hoveredPillTextColor:`#000000 `,pillTextColor:`#ffffff`},null,8,[`logo`,`activeHref`])]))}}),J=M(e({__name:`App`,setup(e){return(e,t)=>{let n=p(`router-view`);return i(),r(j,null,[T(F,{SIM_RESOLUTION:128,DYE_RESOLUTION:1440,CAPTURE_RESOLUTION:512,DENSITY_DISSIPATION:3.5,VELOCITY_DISSIPATION:2,PRESSURE:.1,PRESSURE_ITERATIONS:20,CURL:3,SPLAT_RADIUS:.2,SPLAT_FORCE:6e3,SHADING:!0,COLOR_UPDATE_SPEED:10,BACK_COLOR:{r:.5,g:0,b:0},TRANSPARENT:!0}),T(N,{"spark-color":`#ff6b6b`,"spark-size":12,"spark-radius":25,"spark-count":12,duration:600,easing:`ease-out`,"extra-scale":1.2,class:`interactive-area`},{default:_(()=>[T(q),T(n)]),_:1})],64)}}}),[[`__scopeId`,`data-v-38639d47`]]),Y=`modulepreload`,X=function(e,t){return new URL(e,t).href},Z={},Q=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=X(t,n),t in Z)return;Z[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:Y,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},te=w({history:C(),routes:[{path:`/`,component:()=>Q(()=>import(`./home-DEfzo9AG.js`),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url)},{path:`/project`,component:()=>Q(()=>import(`./project-BD2jn5TK.js`),__vite__mapDeps([6,1,2,3,4,7]),import.meta.url)},{path:`/login`,component:()=>Q(()=>import(`./login-CgSr84xd.js`),__vite__mapDeps([8,1,2,3,4,9]),import.meta.url)}]}),$=k(J);$.use(te),$.use(D),$.use(S),$.mount(`#app`);