var Dt=Object.defineProperty;var Vt=(d,$,m)=>$ in d?Dt(d,$,{enumerable:!0,configurable:!0,writable:!0,value:m}):d[$]=m;var g=(d,$,m)=>(Vt(d,typeof $!="symbol"?$+"":$,m),m);(function(){"use strict";function d(){}function $(e){return e()}function m(){return Object.create(null)}function A(e){e.forEach($)}function Z(e){return typeof e=="function"}function N(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let S;function ht(e,t){return e===t?!0:(S||(S=document.createElement("a")),S.href=t,e===S.href)}function dt(e){return Object.keys(e).length===0}function at(e,...t){if(e==null){for(const i of t)i(void 0);return d}const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function P(e,t,n){e.$$.on_destroy.push(at(t,n))}function gt(e,t,n){return e.set(n),t}const bt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function L(e,t){e.appendChild(t)}function tt(e,t,n){const i=$t(e);if(!i.getElementById(t)){const o=p("style");o.id=t,o.textContent=n,_t(i,o)}}function $t(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function _t(e,t){return L(e.head||e,t),t.sheet}function q(e,t,n){e.insertBefore(t,n||null)}function y(e){e.parentNode&&e.parentNode.removeChild(e)}function p(e){return document.createElement(e)}function et(e){return document.createTextNode(e)}function mt(){return et(" ")}function H(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function b(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function wt(e){return Array.from(e.childNodes)}function pt(e,t){t=""+t,e.data!==t&&(e.data=t)}function x(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}let B;function yt(){if(B===void 0){B=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{B=!0}}return B}function xt(e,t){getComputedStyle(e).position==="static"&&(e.style.position="relative");const i=p("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const o=yt();let s;return o?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",s=H(window,"message",r=>{r.source===i.contentWindow&&t()})):(i.src="about:blank",i.onload=()=>{s=H(i.contentWindow,"resize",t),t()}),L(e,i),()=>{(o||s&&i.contentWindow)&&s(),y(i)}}function nt(e,t,n){e.classList.toggle(t,!!n)}function zt(e){const t={};return e.childNodes.forEach(n=>{t[n.slot||"default"]=!0}),t}let C;function j(e){C=e}function Et(){if(!C)throw new Error("Function called outside component initialization");return C}function vt(e){Et().$$.on_mount.push(e)}const z=[],R=[];let E=[];const it=[],Ot=Promise.resolve();let J=!1;function Lt(){J||(J=!0,Ot.then(a))}function k(e){E.push(e)}const D=new Set;let v=0;function a(){if(v!==0)return;const e=C;do{try{for(;v<z.length;){const t=z[v];v++,j(t),Ct(t.$$)}}catch(t){throw z.length=0,v=0,t}for(j(null),z.length=0,v=0;R.length;)R.pop()();for(let t=0;t<E.length;t+=1){const n=E[t];D.has(n)||(D.add(n),n())}E.length=0}while(z.length);for(;it.length;)it.pop()();J=!1,D.clear(),j(e)}function Ct(e){if(e.fragment!==null){e.update(),A(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(k)}}function jt(e){const t=[],n=[];E.forEach(i=>e.indexOf(i)===-1?t.push(i):n.push(i)),n.forEach(i=>i()),E=t}const I=new Set;let kt;function V(e,t){e&&e.i&&(I.delete(e),e.i(t))}function st(e,t,n,i){if(e&&e.o){if(I.has(e))return;I.add(e),kt.c.push(()=>{I.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function rt(e){e&&e.c()}function F(e,t,n){const{fragment:i,after_update:o}=e.$$;i&&i.m(t,n),k(()=>{const s=e.$$.on_mount.map($).filter(Z);e.$$.on_destroy?e.$$.on_destroy.push(...s):A(s),e.$$.on_mount=[]}),o.forEach(k)}function U(e,t){const n=e.$$;n.fragment!==null&&(jt(n.after_update),A(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function At(e,t){e.$$.dirty[0]===-1&&(z.push(e),Lt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function G(e,t,n,i,o,s,r=null,f=[-1]){const c=C;j(e);const u=e.$$={fragment:null,ctx:[],props:s,update:d,not_equal:o,bound:m(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:m(),dirty:f,skip_bound:!1,root:t.target||c.$$.root};r&&r(u.root);let _=!1;if(u.ctx=n?n(e,t.props||{},(l,T,...w)=>{const W=w.length?w[0]:T;return u.ctx&&o(u.ctx[l],u.ctx[l]=W)&&(!u.skip_bound&&u.bound[l]&&u.bound[l](W),_&&At(e,l)),T}):[],u.update(),_=!0,A(u.before_update),u.fragment=i?i(u.ctx):!1,t.target){if(t.hydrate){const l=wt(t.target);u.fragment&&u.fragment.l(l),l.forEach(y)}else u.fragment&&u.fragment.c();t.intro&&V(e.$$.fragment),F(e,t.target,t.anchor),a()}j(c)}let ot;typeof HTMLElement=="function"&&(ot=class extends HTMLElement{constructor(t,n,i){super();g(this,"$$ctor");g(this,"$$s");g(this,"$$c");g(this,"$$cn",!1);g(this,"$$d",{});g(this,"$$r",!1);g(this,"$$p_d",{});g(this,"$$l",{});g(this,"$$l_u",new Map);this.$$ctor=t,this.$$s=n,i&&this.attachShadow({mode:"open"})}addEventListener(t,n,i){if(this.$$l[t]=this.$$l[t]||[],this.$$l[t].push(n),this.$$c){const o=this.$$c.$on(t,n);this.$$l_u.set(n,o)}super.addEventListener(t,n,i)}removeEventListener(t,n,i){if(super.removeEventListener(t,n,i),this.$$c){const o=this.$$l_u.get(n);o&&(o(),this.$$l_u.delete(n))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let t=function(s){return()=>{let r;return{c:function(){r=p("slot"),s!=="default"&&b(r,"name",s)},m:function(u,_){q(u,r,_)},d:function(u){u&&y(r)}}}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;const n={},i=zt(this);for(const s of this.$$s)s in i&&(n[s]=[t(s)]);for(const s of this.attributes){const r=this.$$g_p(s.name);r in this.$$d||(this.$$d[r]=M(r,s.value,this.$$p_d,"toProp"))}for(const s in this.$$p_d)!(s in this.$$d)&&this[s]!==void 0&&(this.$$d[s]=this[s],delete this[s]);this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:n,$$scope:{ctx:[]}}});const o=()=>{this.$$r=!0;for(const s in this.$$p_d)if(this.$$d[s]=this.$$c.$$.ctx[this.$$c.$$.props[s]],this.$$p_d[s].reflect){const r=M(s,this.$$d[s],this.$$p_d,"toAttribute");r==null?this.removeAttribute(this.$$p_d[s].attribute||s):this.setAttribute(this.$$p_d[s].attribute||s,r)}this.$$r=!1};this.$$c.$$.after_update.push(o),o();for(const s in this.$$l)for(const r of this.$$l[s]){const f=this.$$c.$on(s,r);this.$$l_u.set(r,f)}this.$$l={}}}attributeChangedCallback(t,n,i){var o;this.$$r||(t=this.$$g_p(t),this.$$d[t]=M(t,i,this.$$p_d,"toProp"),(o=this.$$c)==null||o.$set({[t]:this.$$d[t]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{this.$$cn||(this.$$c.$destroy(),this.$$c=void 0)})}$$g_p(t){return Object.keys(this.$$p_d).find(n=>this.$$p_d[n].attribute===t||!this.$$p_d[n].attribute&&n.toLowerCase()===t)||t}});function M(e,t,n,i){var s;const o=(s=n[e])==null?void 0:s.type;if(t=o==="Boolean"&&typeof t!="boolean"?t!=null:t,!i||!n[e])return t;if(i==="toAttribute")switch(o){case"Object":case"Array":return t==null?null:JSON.stringify(t);case"Boolean":return t?"":null;case"Number":return t??null;default:return t}else switch(o){case"Object":case"Array":return t&&JSON.parse(t);case"Boolean":return t;case"Number":return t!=null?+t:t;default:return t}}function K(e,t,n,i,o,s){let r=class extends ot{constructor(){super(e,n,o),this.$$p_d=t}static get observedAttributes(){return Object.keys(t).map(f=>(t[f].attribute||f).toLowerCase())}};return Object.keys(t).forEach(f=>{Object.defineProperty(r.prototype,f,{get(){return this.$$c&&f in this.$$c?this.$$c[f]:this.$$d[f]},set(c){var u;c=M(f,c,t),this.$$d[f]=c,(u=this.$$c)==null||u.$set({[f]:c})}})}),i.forEach(f=>{Object.defineProperty(r.prototype,f,{get(){var c;return(c=this.$$c)==null?void 0:c[f]}})}),s&&(r=s(r)),e.element=r,r}class Q{constructor(){g(this,"$$");g(this,"$$set")}$destroy(){U(this,1),this.$destroy=d}$on(t,n){if(!Z(n))return d;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const o=i.indexOf(n);o!==-1&&i.splice(o,1)}}$set(t){this.$$set&&!dt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Nt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Nt);const O=[];function ft(e,t=d){let n;const i=new Set;function o(f){if(N(e,f)&&(e=f,n)){const c=!O.length;for(const u of i)u[1](),O.push(u,e);if(c){for(let u=0;u<O.length;u+=2)O[u][0](O[u+1]);O.length=0}}}function s(f){o(f(e))}function r(f,c=d){const u=[f,c];return i.add(u),i.size===1&&(n=t(o,s)||d),f(e),()=>{i.delete(u),i.size===0&&n&&(n(),n=null)}}return{set:o,update:s,subscribe:r}}const X=ft(!1),Y=ft(0);function St(e){tt(e,"svelte-1ioa6ga","div.svelte-1ioa6ga.svelte-1ioa6ga{position:fixed;bottom:0.5rem;right:0.5rem;text-align:right;transition:all 0.3s;z-index:99998}div.svelte-1ioa6ga>button.svelte-1ioa6ga{position:relative;border-radius:100rem;padding:1rem 2rem;box-shadow:0 0 0.5rem rgba(0, 0, 0, 0.1);font-family:inherit;font-size:15px;font-weight:600;border:none;outline:none;cursor:pointer}")}function Pt(e){let t,n,i,o,s,r;return{c(){t=p("div"),n=p("button"),i=et(e[2]),b(n,"aria-label",e[2]),b(n,"class","svelte-1ioa6ga"),x(n,"background",e[0]),x(n,"color",e[1]),b(t,"class","svelte-1ioa6ga"),k(()=>e[7].call(t))},m(f,c){q(f,t,c),L(t,n),L(n,i),o=xt(t,e[7].bind(t)),s||(r=H(n,"click",e[4]),s=!0)},p(f,[c]){c&4&&pt(i,f[2]),c&4&&b(n,"aria-label",f[2]),c&1&&x(n,"background",f[0]),c&2&&x(n,"color",f[1])},i:d,o:d,d(f){f&&y(t),o(),s=!1,r()}}}function qt(e,t,n){let i,o,s;P(e,X,l=>n(6,o=l)),P(e,Y,l=>n(3,s=l));let{btext:r="Have questions?"}=t,{bg:f="#000000"}=t,{fg:c="#ffffff"}=t;function u(){gt(X,o=!o,o)}function _(){s=this.offsetHeight,Y.set(s)}return e.$$set=l=>{"btext"in l&&n(5,r=l.btext),"bg"in l&&n(0,f=l.bg),"fg"in l&&n(1,c=l.fg)},e.$$.update=()=>{e.$$.dirty&96&&n(2,i=o?"Close":r)},[f,c,i,s,u,r,o,_]}class ut extends Q{constructor(t){super(),G(this,t,qt,Pt,N,{btext:5,bg:0,fg:1},St)}get btext(){return this.$$.ctx[5]}set btext(t){this.$$set({btext:t}),a()}get bg(){return this.$$.ctx[0]}set bg(t){this.$$set({bg:t}),a()}get fg(){return this.$$.ctx[1]}set fg(t){this.$$set({fg:t}),a()}}K(ut,{btext:{},bg:{},fg:{}},[],[],!0);const{window:ct}=bt;function Ht(e){tt(e,"svelte-1pobzi0","div.svelte-1pobzi0.svelte-1pobzi0{position:fixed;bottom:4rem;left:0.5rem;right:0.5rem;overflow:hidden;display:flex;justify-content:flex-end;border-radius:0.5rem;box-shadow:0 0 0.5rem rgba(0, 0, 0, 0.1);transition:all 0.3s;z-index:99999}div.svelte-1pobzi0 iframe.svelte-1pobzi0{overflow:hidden;width:100%;min-height:65vh}.hidden.svelte-1pobzi0.svelte-1pobzi0{display:none}@media(min-width: 768px){div.svelte-1pobzi0.svelte-1pobzi0{left:auto}div.svelte-1pobzi0 iframe.svelte-1pobzi0{width:400px}}")}function Bt(e){let t,n,i,o,s;return k(e[11]),{c(){t=p("div"),n=p("iframe"),ht(n.src,i=e[4])||b(n,"src",i),b(n,"frameborder","0"),b(n,"scrolling","no"),b(n,"title","chat widget"),b(n,"class","svelte-1pobzi0"),x(n,"height",e[2]),b(t,"class","svelte-1pobzi0"),nt(t,"hidden",!e[3])},m(r,f){q(r,t,f),L(t,n),e[12](n),o||(s=H(ct,"resize",e[11]),o=!0)},p(r,[f]){f&4&&x(n,"height",r[2]),f&8&&nt(t,"hidden",!r[3])},i:d,o:d,d(r){r&&y(t),e[12](null),o=!1,s()}}}function It(e,t,n){let i,o,s,r;P(e,Y,h=>n(10,s=h)),P(e,X,h=>n(3,r=h));let{host:f="https://qriosai.com"}=t,{id:c}=t,{htext:u}=t,{bg:_}=t,{fg:l}=t;const T=`${f}/embed/${c}`;let w;vt(()=>{window.addEventListener("message",h=>{if(h.origin===f&&typeof h.data=="string"){if(w.contentWindow&&h.data==="qchat_init"){const Jt={url:window.location.href,bg:_,fg:l,htext:u};w.contentWindow.postMessage(JSON.stringify(Jt),"*")}h.data==="qchat_started"&&(window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:h.data}))}})});function W(){n(0,i=ct.innerHeight)}function Rt(h){R[h?"unshift":"push"](()=>{w=h,n(1,w)})}return e.$$set=h=>{"host"in h&&n(5,f=h.host),"id"in h&&n(6,c=h.id),"htext"in h&&n(7,u=h.htext),"bg"in h&&n(8,_=h.bg),"fg"in h&&n(9,l=h.fg)},e.$$.update=()=>{e.$$.dirty&1025&&n(2,o=i<900?i-s-25+"px":"65vh")},n(0,i=0),[i,w,o,r,T,f,c,u,_,l,s,W,Rt]}class lt extends Q{constructor(t){super(),G(this,t,It,Bt,N,{host:5,id:6,htext:7,bg:8,fg:9},Ht)}get host(){return this.$$.ctx[5]}set host(t){this.$$set({host:t}),a()}get id(){return this.$$.ctx[6]}set id(t){this.$$set({id:t}),a()}get htext(){return this.$$.ctx[7]}set htext(t){this.$$set({htext:t}),a()}get bg(){return this.$$.ctx[8]}set bg(t){this.$$set({bg:t}),a()}get fg(){return this.$$.ctx[9]}set fg(t){this.$$set({fg:t}),a()}}K(lt,{host:{},id:{},htext:{},bg:{},fg:{}},[],[],!0);function Mt(e){let t,n,i,o;return t=new lt({props:{host:e[4],id:e[5],htext:e[1],bg:e[2],fg:e[3]}}),i=new ut({props:{btext:e[0],bg:e[2],fg:e[3]}}),{c(){rt(t.$$.fragment),n=mt(),rt(i.$$.fragment)},m(s,r){F(t,s,r),q(s,n,r),F(i,s,r),o=!0},p(s,[r]){const f={};r&16&&(f.host=s[4]),r&32&&(f.id=s[5]),r&2&&(f.htext=s[1]),r&4&&(f.bg=s[2]),r&8&&(f.fg=s[3]),t.$set(f);const c={};r&1&&(c.btext=s[0]),r&4&&(c.bg=s[2]),r&8&&(c.fg=s[3]),i.$set(c)},i(s){o||(V(t.$$.fragment,s),V(i.$$.fragment,s),o=!0)},o(s){st(t.$$.fragment,s),st(i.$$.fragment,s),o=!1},d(s){s&&y(n),U(t,s),U(i,s)}}}function Tt(e,t,n){let{btext:i}=t,{htext:o}=t,{bg:s}=t,{fg:r}=t,{host:f}=t,{id:c}=t;return e.$$set=u=>{"btext"in u&&n(0,i=u.btext),"htext"in u&&n(1,o=u.htext),"bg"in u&&n(2,s=u.bg),"fg"in u&&n(3,r=u.fg),"host"in u&&n(4,f=u.host),"id"in u&&n(5,c=u.id)},[i,o,s,r,f,c]}class Wt extends Q{constructor(t){super(),G(this,t,Tt,Mt,N,{btext:0,htext:1,bg:2,fg:3,host:4,id:5})}get btext(){return this.$$.ctx[0]}set btext(t){this.$$set({btext:t}),a()}get htext(){return this.$$.ctx[1]}set htext(t){this.$$set({htext:t}),a()}get bg(){return this.$$.ctx[2]}set bg(t){this.$$set({bg:t}),a()}get fg(){return this.$$.ctx[3]}set fg(t){this.$$set({fg:t}),a()}get host(){return this.$$.ctx[4]}set host(t){this.$$set({host:t}),a()}get id(){return this.$$.ctx[5]}set id(t){this.$$set({id:t}),a()}}customElements.define("qchat-widget",K(Wt,{btext:{},htext:{},bg:{},fg:{},host:{},id:{}},[],[],!0))})();
