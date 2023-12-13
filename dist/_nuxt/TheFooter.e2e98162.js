import{u as U}from"./vue.f36acd1f.b7ca631c.js";import{y as W,z as k,A as b,B as F,C as P,D as V,E as j,G as C,j as q,m as _,x as G,H as M,I as J,J as Y,_ as B,o as D,c as H,a as p,q as Q,t as N,d as S,b as X,w as Z}from"./entry.88a7fb74.js";import{_ as K}from"./nuxt-link.6873303d.js";async function ee(e,t){return await te(t).catch(i=>(console.error("Failed to get image meta for "+t,i+""),{width:0,height:0,ratio:0}))}async function te(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((t,s)=>{const i=new Image;i.onload=()=>{const n={width:i.width,height:i.height,ratio:i.width/i.height};t(n)},i.onerror=n=>s(n),i.src=e})}function A(e){return t=>t?e[t]||t:e.missingValue}function ie({formatter:e,keyMap:t,joinWith:s="/",valueMap:i}={}){e||(e=(r,o)=>`${r}=${o}`),t&&typeof t!="function"&&(t=A(t));const n=i||{};return Object.keys(n).forEach(r=>{typeof n[r]!="function"&&(n[r]=A(n[r]))}),(r={})=>Object.entries(r).filter(([d,c])=>typeof c<"u").map(([d,c])=>{const l=n[d];return typeof l=="function"&&(c=l(r[d])),d=typeof t=="function"?t(d):d,e(d,c)}).join(s)}function g(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return parseInt(e,10)}function se(e=""){if(e===void 0||!e.length)return[];const t=new Set;for(const s of e.split(" ")){const i=parseInt(s.replace("x",""));i&&t.add(i)}return Array.from(t)}function ne(e){if(e.length===0)throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)")}function re(e){const t={};if(typeof e=="string")for(const s of e.split(/[\s,]+/).filter(i=>i)){const i=s.split(":");i.length!==2?t["1px"]=i[0].trim():t[i[0].trim()]=i[1].trim()}else Object.assign(t,e);return t}function oe(e){const t={options:e},s=(n,r={})=>L(t,n,r),i=(n,r={},o={})=>s(n,{...o,modifiers:P(r,o.modifiers||{})}).url;for(const n in e.presets)i[n]=(r,o,d)=>i(r,o,{...e.presets[n],...d});return i.options=e,i.getImage=s,i.getMeta=(n,r)=>ae(t,n,r),i.getSizes=(n,r)=>le(t,n,r),t.$img=i,i}async function ae(e,t,s){const i=L(e,t,{...s});return typeof i.getMeta=="function"?await i.getMeta():await ee(e,i.url)}function L(e,t,s){var l,u;if(typeof t!="string"||t==="")throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(t.startsWith("data:"))return{url:t};const{provider:i,defaults:n}=de(e,s.provider||e.options.provider),r=ce(e,s.preset);if(t=W(t)?t:k(t),!i.supportsAlias)for(const m in e.options.alias)t.startsWith(m)&&(t=b(e.options.alias[m],t.substr(m.length)));if(i.validateDomains&&W(t)){const m=F(t).host;if(!e.options.domains.find(w=>w===m))return{url:t}}const o=P(s,r,n);o.modifiers={...o.modifiers};const d=o.modifiers.format;(l=o.modifiers)!=null&&l.width&&(o.modifiers.width=g(o.modifiers.width)),(u=o.modifiers)!=null&&u.height&&(o.modifiers.height=g(o.modifiers.height));const c=i.getImage(t,o,e);return c.format=c.format||d||"",c}function de(e,t){const s=e.options.providers[t];if(!s)throw new Error("Unknown provider: "+t);return s}function ce(e,t){if(!t)return{};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}function le(e,t,s){var h,$,x,z,I;const i=g((h=s.modifiers)==null?void 0:h.width),n=g(($=s.modifiers)==null?void 0:$.height),r=re(s.sizes),o=(x=s.densities)!=null&&x.trim()?se(s.densities.trim()):e.options.densities;ne(o);const d=i&&n?n/i:0,c=[],l=[];if(Object.keys(r).length>=1){for(const f in r){const v=E(f,String(r[f]),n,d,e);if(v!==void 0){c.push({size:v.size,screenMaxWidth:v.screenMaxWidth,media:`(max-width: ${v.screenMaxWidth}px)`});for(const y of o)l.push({width:v._cWidth*y,src:O(e,t,s,v,y)})}}ue(c)}else for(const f of o){const v=Object.keys(r)[0];let y=E(v,String(r[v]),n,d,e);y===void 0&&(y={size:"",screenMaxWidth:0,_cWidth:(z=s.modifiers)==null?void 0:z.width,_cHeight:(I=s.modifiers)==null?void 0:I.height}),l.push({width:f,src:O(e,t,s,y,f)})}fe(l);const u=l[l.length-1],m=c.length?c.map(f=>`${f.media?f.media+" ":""}${f.size}`).join(", "):void 0,w=m?"w":"x",a=l.map(f=>`${f.src} ${f.width}${w}`).join(", ");return{sizes:m,srcset:a,src:u==null?void 0:u.src}}function E(e,t,s,i,n){const r=n.options.screens&&n.options.screens[e]||parseInt(e),o=t.endsWith("vw");if(!o&&/^\d+$/.test(t)&&(t=t+"px"),!o&&!t.endsWith("px"))return;let d=parseInt(t);if(!r||!d)return;o&&(d=Math.round(d/100*r));const c=i?Math.round(d*i):s;return{size:t,screenMaxWidth:r,_cWidth:d,_cHeight:c}}function O(e,t,s,i,n){return e.$img(t,{...s.modifiers,width:i._cWidth?i._cWidth*n:void 0,height:i._cHeight?i._cHeight*n:void 0},s)}function ue(e){var s;e.sort((i,n)=>i.screenMaxWidth-n.screenMaxWidth);let t=null;for(let i=e.length-1;i>=0;i--){const n=e[i];n.media===t&&e.splice(i,1),t=n.media}for(let i=0;i<e.length;i++)e[i].media=((s=e[i+1])==null?void 0:s.media)||""}function fe(e){e.sort((s,i)=>s.width-i.width);let t=null;for(let s=e.length-1;s>=0;s--){const i=e[s];i.width===t&&e.splice(s,1),t=i.width}}const he=ie({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(e,t)=>j(e)+"_"+j(t)}),ge=(e,{modifiers:t={},baseURL:s}={},i)=>{t.width&&t.height&&(t.resize=`${t.width}x${t.height}`,delete t.width,delete t.height);const n=he(t)||"_";return s||(s=b(i.options.nuxt.baseURL,"/_ipx")),{url:b(s,n,V(e))}},me=!0,ve=!0,pe=Object.freeze(Object.defineProperty({__proto__:null,getImage:ge,supportsAlias:ve,validateDomains:me},Symbol.toStringTag,{value:"Module"})),R={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"ipxStatic",domains:[],alias:{},densities:[1,2],format:["webp"]};R.providers={ipxStatic:{provider:pe,defaults:{}}};const T=()=>{const e=C(),t=q();return t.$img||t._img||(t._img=oe({...R,nuxt:{baseURL:e.app.baseURL}}))},_e={src:{type:String,required:!0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},densities:{type:String,default:void 0},preload:{type:Boolean,default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0,validator:e=>["lazy","eager"].includes(e)},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)},nonce:{type:[String],default:void 0}},ye=e=>{const t=_(()=>({provider:e.provider,preset:e.preset})),s=_(()=>({width:g(e.width),height:g(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding,nonce:e.nonce})),i=T(),n=_(()=>({...e.modifiers,width:g(e.width),height:g(e.height),format:e.format,quality:e.quality||i.options.quality,background:e.background,fit:e.fit}));return{options:t,attrs:s,modifiers:n}},we={..._e,placeholder:{type:[Boolean,String,Number,Array],default:void 0}},He=G({name:"NuxtImg",props:we,emits:["load","error"],setup:(e,t)=>{const s=T(),i=ye(e),n=M(!1),r=_(()=>s.getSizes(e.src,{...i.options.value,sizes:e.sizes,densities:e.densities,modifiers:{...i.modifiers.value,width:g(e.width),height:g(e.height)}})),o=_(()=>{const a={...i.attrs.value,"data-nuxt-img":""};return(!e.placeholder||n.value)&&(a.sizes=r.value.sizes,a.srcset=r.value.srcset),a}),d=_(()=>{let a=e.placeholder;if(a===""&&(a=!0),!a||n.value)return!1;if(typeof a=="string")return a;const h=Array.isArray(a)?a:typeof a=="number"?[a,a]:[10,10];return s(e.src,{...i.modifiers.value,width:h[0],height:h[1],quality:h[2]||50,blur:h[3]||3},i.options.value)}),c=_(()=>e.sizes?r.value.src:s(e.src,i.modifiers.value,i.options.value)),l=_(()=>d.value?d.value:c.value);if(e.preload){const a=Object.values(r.value).every(h=>h);U({link:[{rel:"preload",as:"image",nonce:e.nonce,...a?{href:r.value.src,imagesizes:r.value.sizes,imagesrcset:r.value.srcset}:{href:l.value}}]})}const u=M(),w=q().isHydrating;return J(()=>{if(d.value){const a=new Image;a.src=c.value,e.sizes&&(a.sizes=r.value.sizes||"",a.srcset=r.value.srcset),a.onload=h=>{n.value=!0,t.emit("load",h)};return}u.value&&(u.value.complete&&w&&(u.value.getAttribute("data-error")?t.emit("error",new Event("error")):t.emit("load",new Event("load"))),u.value.onload=a=>{t.emit("load",a)},u.value.onerror=a=>{t.emit("error",a)})}),()=>Y("img",{ref:u,src:l.value,...o.value,...t.attrs})}}),Se={},be={class:"the-header"},$e={class:"content"},xe={class:"title-group"};function ze(e,t){return D(),H("header",be,[p("div",$e,[Q(e.$slots,"default"),p("hgroup",xe,[p("h1",null,N(e.$siteName),1),p("h2",null,N(e.$siteDesc),1)])])])}const Le=B(Se,[["render",ze]]),Ie=""+globalThis.__publicAssetsURL("img/icon-passaro.png");const We={},je={class:"the-footer"},Me=p("hr",{class:"separator"},null,-1),Ne={class:"content"},Ae={class:"license"},Ee=p("img",{src:Ie},null,-1),Oe=p("br",null,null,-1);function Pe(e,t){const s=K;return D(),H("footer",je,[Me,p("div",Ne,[p("small",Ae,[Ee,S(" © Nenhum direito reservado."),Oe,S(" Feito com NuxtJs. "),X(s,{to:`${e.$urlInstagram}`,target:"_blank"},{default:Z(()=>[S("André Duarte")]),_:1},8,["to"]),S(" 2023. ")])])])}const Re=B(We,[["render",Pe]]);export{Le as _,He as a,Re as b};
