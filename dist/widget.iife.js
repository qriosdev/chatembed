var qt=Object.defineProperty;var Bt=(d,$,b)=>$ in d?qt(d,$,{enumerable:!0,configurable:!0,writable:!0,value:b}):d[$]=b;var a=(d,$,b)=>(Bt(d,typeof $!="symbol"?$+"":$,b),b);(function(){"use strict";function d(){}function $(e){return e()}function b(){return Object.create(null)}function A(e){e.forEach($)}function G(e){return typeof e=="function"}function S(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let k;function ut(e,t){return e===t?!0:(k||(k=document.createElement("a")),k.href=t,e===k.href)}function lt(e){return Object.keys(e).length===0}function dt(e,...t){if(e==null){for(const s of t)s(void 0);return d}const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function N(e,t,n){e.$$.on_destroy.push(dt(t,n))}function ht(e,t,n){return e.set(n),t}function j(e,t){e.appendChild(t)}function K(e,t,n){const s=at(e);if(!s.getElementById(t)){const r=_("style");r.id=t,r.textContent=n,$t(s,r)}}function at(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function $t(e,t){return j(e.head||e,t),t.sheet}function z(e,t,n){e.insertBefore(t,n||null)}function y(e){e.parentNode&&e.parentNode.removeChild(e)}function _(e){return document.createElement(e)}function Q(e){return document.createTextNode(e)}function gt(){return Q(" ")}function L(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function g(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function bt(e){return Array.from(e.childNodes)}function mt(e,t){t=""+t,e.data!==t&&(e.data=t)}function p(e,t,n,s){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,s?"important":"")}let H;function _t(){if(H===void 0){H=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{H=!0}}return H}function yt(e,t){getComputedStyle(e).position==="static"&&(e.style.position="relative");const s=_("iframe");s.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),s.setAttribute("aria-hidden","true"),s.tabIndex=-1;const r=_t();let i;return r?(s.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",i=L(window,"message",o=>{o.source===s.contentWindow&&t()})):(s.src="about:blank",s.onload=()=>{i=L(s.contentWindow,"resize",t),t()}),j(e,s),()=>{(r||i&&s.contentWindow)&&i(),y(s)}}function X(e,t,n){e.classList.toggle(t,!!n)}function pt(e){const t={};return e.childNodes.forEach(n=>{t[n.slot||"default"]=!0}),t}let q;function C(e){q=e}const w=[],Y=[];let x=[];const Z=[],wt=Promise.resolve();let B=!1;function xt(){B||(B=!0,wt.then(h))}function O(e){x.push(e)}const M=new Set;let v=0;function h(){if(v!==0)return;const e=q;do{try{for(;v<w.length;){const t=w[v];v++,C(t),vt(t.$$)}}catch(t){throw w.length=0,v=0,t}for(C(null),w.length=0,v=0;Y.length;)Y.pop()();for(let t=0;t<x.length;t+=1){const n=x[t];M.has(n)||(M.add(n),n())}x.length=0}while(w.length);for(;Z.length;)Z.pop()();B=!1,M.clear(),C(e)}function vt(e){if(e.fragment!==null){e.update(),A(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(O)}}function Et(e){const t=[],n=[];x.forEach(s=>e.indexOf(s)===-1?t.push(s):n.push(s)),n.forEach(s=>s()),x=t}const P=new Set;let jt;function R(e,t){e&&e.i&&(P.delete(e),e.i(t))}function tt(e,t,n,s){if(e&&e.o){if(P.has(e))return;P.add(e),jt.c.push(()=>{P.delete(e),s&&(n&&e.d(1),s())}),e.o(t)}else s&&s()}function et(e){e&&e.c()}function T(e,t,n){const{fragment:s,after_update:r}=e.$$;s&&s.m(t,n),O(()=>{const i=e.$$.on_mount.map($).filter(G);e.$$.on_destroy?e.$$.on_destroy.push(...i):A(i),e.$$.on_mount=[]}),r.forEach(O)}function W(e,t){const n=e.$$;n.fragment!==null&&(Et(n.after_update),A(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ct(e,t){e.$$.dirty[0]===-1&&(w.push(e),xt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function U(e,t,n,s,r,i,o=null,f=[-1]){const c=q;C(e);const u=e.$$={fragment:null,ctx:[],props:i,update:d,not_equal:r,bound:b(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:b(),dirty:f,skip_bound:!1,root:t.target||c.$$.root};o&&o(u.root);let m=!1;if(u.ctx=n?n(e,t.props||{},(l,ot,...ft)=>{const ct=ft.length?ft[0]:ot;return u.ctx&&r(u.ctx[l],u.ctx[l]=ct)&&(!u.skip_bound&&u.bound[l]&&u.bound[l](ct),m&&Ct(e,l)),ot}):[],u.update(),m=!0,A(u.before_update),u.fragment=s?s(u.ctx):!1,t.target){if(t.hydrate){const l=bt(t.target);u.fragment&&u.fragment.l(l),l.forEach(y)}else u.fragment&&u.fragment.c();t.intro&&R(e.$$.fragment),T(e,t.target,t.anchor),h()}C(c)}let nt;typeof HTMLElement=="function"&&(nt=class extends HTMLElement{constructor(t,n,s){super();a(this,"$$ctor");a(this,"$$s");a(this,"$$c");a(this,"$$cn",!1);a(this,"$$d",{});a(this,"$$r",!1);a(this,"$$p_d",{});a(this,"$$l",{});a(this,"$$l_u",new Map);this.$$ctor=t,this.$$s=n,s&&this.attachShadow({mode:"open"})}addEventListener(t,n,s){if(this.$$l[t]=this.$$l[t]||[],this.$$l[t].push(n),this.$$c){const r=this.$$c.$on(t,n);this.$$l_u.set(n,r)}super.addEventListener(t,n,s)}removeEventListener(t,n,s){if(super.removeEventListener(t,n,s),this.$$c){const r=this.$$l_u.get(n);r&&(r(),this.$$l_u.delete(n))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let t=function(i){return()=>{let o;return{c:function(){o=_("slot"),i!=="default"&&g(o,"name",i)},m:function(u,m){z(u,o,m)},d:function(u){u&&y(o)}}}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;const n={},s=pt(this);for(const i of this.$$s)i in s&&(n[i]=[t(i)]);for(const i of this.attributes){const o=this.$$g_p(i.name);o in this.$$d||(this.$$d[o]=I(o,i.value,this.$$p_d,"toProp"))}for(const i in this.$$p_d)!(i in this.$$d)&&this[i]!==void 0&&(this.$$d[i]=this[i],delete this[i]);this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:n,$$scope:{ctx:[]}}});const r=()=>{this.$$r=!0;for(const i in this.$$p_d)if(this.$$d[i]=this.$$c.$$.ctx[this.$$c.$$.props[i]],this.$$p_d[i].reflect){const o=I(i,this.$$d[i],this.$$p_d,"toAttribute");o==null?this.removeAttribute(this.$$p_d[i].attribute||i):this.setAttribute(this.$$p_d[i].attribute||i,o)}this.$$r=!1};this.$$c.$$.after_update.push(r),r();for(const i in this.$$l)for(const o of this.$$l[i]){const f=this.$$c.$on(i,o);this.$$l_u.set(o,f)}this.$$l={}}}attributeChangedCallback(t,n,s){var r;this.$$r||(t=this.$$g_p(t),this.$$d[t]=I(t,s,this.$$p_d,"toProp"),(r=this.$$c)==null||r.$set({[t]:this.$$d[t]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{this.$$cn||(this.$$c.$destroy(),this.$$c=void 0)})}$$g_p(t){return Object.keys(this.$$p_d).find(n=>this.$$p_d[n].attribute===t||!this.$$p_d[n].attribute&&n.toLowerCase()===t)||t}});function I(e,t,n,s){var i;const r=(i=n[e])==null?void 0:i.type;if(t=r==="Boolean"&&typeof t!="boolean"?t!=null:t,!s||!n[e])return t;if(s==="toAttribute")switch(r){case"Object":case"Array":return t==null?null:JSON.stringify(t);case"Boolean":return t?"":null;case"Number":return t??null;default:return t}else switch(r){case"Object":case"Array":return t&&JSON.parse(t);case"Boolean":return t;case"Number":return t!=null?+t:t;default:return t}}function D(e,t,n,s,r,i){let o=class extends nt{constructor(){super(e,n,r),this.$$p_d=t}static get observedAttributes(){return Object.keys(t).map(f=>(t[f].attribute||f).toLowerCase())}};return Object.keys(t).forEach(f=>{Object.defineProperty(o.prototype,f,{get(){return this.$$c&&f in this.$$c?this.$$c[f]:this.$$d[f]},set(c){var u;c=I(f,c,t),this.$$d[f]=c,(u=this.$$c)==null||u.$set({[f]:c})}})}),s.forEach(f=>{Object.defineProperty(o.prototype,f,{get(){var c;return(c=this.$$c)==null?void 0:c[f]}})}),i&&(o=i(o)),e.element=o,o}class J{constructor(){a(this,"$$");a(this,"$$set")}$destroy(){W(this,1),this.$destroy=d}$on(t,n){if(!G(n))return d;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(t){this.$$set&&!lt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Ot="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ot);const E=[];function st(e,t=d){let n;const s=new Set;function r(f){if(S(e,f)&&(e=f,n)){const c=!E.length;for(const u of s)u[1](),E.push(u,e);if(c){for(let u=0;u<E.length;u+=2)E[u][0](E[u+1]);E.length=0}}}function i(f){r(f(e))}function o(f,c=d){const u=[f,c];return s.add(u),s.size===1&&(n=t(r,i)||d),f(e),()=>{s.delete(u),s.size===0&&n&&(n(),n=null)}}return{set:r,update:i,subscribe:o}}const V=st(!1),F=st(0);function At(e){K(e,"svelte-19d2vvc",`div.svelte-19d2vvc.svelte-19d2vvc{position:fixed;bottom:0.5rem;right:0.5rem;text-align:right;transition:all 0.3s;z-index:99999}div.svelte-19d2vvc>button.svelte-19d2vvc{position:relative;border-radius:100rem;padding:1rem 2rem;box-shadow:0 0 0.5rem rgba(0, 0, 0, 0.1);font-family:ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
			'Segoe UI Symbol', 'Noto Color Emoji';font-size:16px;font-weight:500;border:none;outline:none}`)}function St(e){let t,n,s,r,i,o;return{c(){t=_("div"),n=_("button"),s=Q(e[2]),g(n,"class","svelte-19d2vvc"),p(n,"background",e[0]),p(n,"color",e[1]),g(t,"class","svelte-19d2vvc"),O(()=>e[7].call(t))},m(f,c){z(f,t,c),j(t,n),j(n,s),r=yt(t,e[7].bind(t)),i||(o=L(n,"click",e[4]),i=!0)},p(f,[c]){c&4&&mt(s,f[2]),c&1&&p(n,"background",f[0]),c&2&&p(n,"color",f[1])},i:d,o:d,d(f){f&&y(t),r(),i=!1,o()}}}function kt(e,t,n){let s,r,i;N(e,V,l=>n(6,r=l)),N(e,F,l=>n(3,i=l));let{text:o="Have questions?"}=t,{bg:f="#000000"}=t,{fg:c="#ffffff"}=t;function u(){ht(V,r=!r,r)}function m(){i=this.offsetHeight,F.set(i)}return e.$$set=l=>{"text"in l&&n(5,o=l.text),"bg"in l&&n(0,f=l.bg),"fg"in l&&n(1,c=l.fg)},e.$$.update=()=>{e.$$.dirty&96&&n(2,s=r?"Close":o)},[f,c,s,i,u,o,r,m]}class it extends J{constructor(t){super(),U(this,t,kt,St,S,{text:5,bg:0,fg:1},At)}get text(){return this.$$.ctx[5]}set text(t){this.$$set({text:t}),h()}get bg(){return this.$$.ctx[0]}set bg(t){this.$$set({bg:t}),h()}get fg(){return this.$$.ctx[1]}set fg(t){this.$$set({fg:t}),h()}}D(it,{text:{},bg:{},fg:{}},[],[],!0);function Nt(e){K(e,"svelte-1y6xmlf","div.svelte-1y6xmlf.svelte-1y6xmlf{position:fixed;bottom:4.5rem;left:0.5rem;right:0.5rem;overflow:hidden;display:flex;justify-content:flex-end;border-radius:0.5rem;box-shadow:0 0 0.5rem rgba(0, 0, 0, 0.1);transition:all 0.3s}div.svelte-1y6xmlf iframe.svelte-1y6xmlf{overflow:hidden;width:100%;min-height:60vh}.hidden.svelte-1y6xmlf.svelte-1y6xmlf{display:none}@media(min-width: 768px){div.svelte-1y6xmlf.svelte-1y6xmlf{left:auto}div.svelte-1y6xmlf iframe.svelte-1y6xmlf{width:400px}}")}function zt(e){let t,n,s,r,i;return O(e[7]),{c(){t=_("div"),n=_("iframe"),ut(n.src,s=e[3])||g(n,"src",s),g(n,"frameborder","0"),g(n,"scrolling","no"),g(n,"title","chat widget"),g(n,"class","svelte-1y6xmlf"),p(n,"height",e[1]),g(t,"class","svelte-1y6xmlf"),X(t,"hidden",!e[2])},m(o,f){z(o,t,f),j(t,n),r||(i=L(window,"resize",e[7]),r=!0)},p(o,[f]){f&2&&p(n,"height",o[1]),f&4&&X(t,"hidden",!o[2])},i:d,o:d,d(o){o&&y(t),r=!1,i()}}}function Lt(e,t,n){let s,r,i,o;N(e,F,l=>n(6,i=l)),N(e,V,l=>n(2,o=l));let{host:f=""}=t,{id:c=""}=t;const u=`${f}${c}`;function m(){n(0,s=window.innerHeight)}return e.$$set=l=>{"host"in l&&n(4,f=l.host),"id"in l&&n(5,c=l.id)},e.$$.update=()=>{e.$$.dirty&1&&console.log(s),e.$$.dirty&65&&n(1,r=s<1e3?s-i-25+"px":"60vh")},n(0,s=0),[s,r,o,u,f,c,i,m]}class rt extends J{constructor(t){super(),U(this,t,Lt,zt,S,{host:4,id:5},Nt)}get host(){return this.$$.ctx[4]}set host(t){this.$$set({host:t}),h()}get id(){return this.$$.ctx[5]}set id(t){this.$$set({id:t}),h()}}D(rt,{host:{},id:{}},[],[],!0);function Ht(e){let t,n,s,r;return t=new rt({props:{host:e[3],id:e[4]}}),s=new it({props:{text:e[0],bg:e[1],fg:e[2]}}),{c(){et(t.$$.fragment),n=gt(),et(s.$$.fragment)},m(i,o){T(t,i,o),z(i,n,o),T(s,i,o),r=!0},p(i,[o]){const f={};o&8&&(f.host=i[3]),o&16&&(f.id=i[4]),t.$set(f);const c={};o&1&&(c.text=i[0]),o&2&&(c.bg=i[1]),o&4&&(c.fg=i[2]),s.$set(c)},i(i){r||(R(t.$$.fragment,i),R(s.$$.fragment,i),r=!0)},o(i){tt(t.$$.fragment,i),tt(s.$$.fragment,i),r=!1},d(i){i&&y(n),W(t,i),W(s,i)}}}function Pt(e,t,n){let{text:s="Have questions?"}=t,{bg:r="#000000"}=t,{fg:i="#ffffff"}=t,{host:o=""}=t,{id:f=""}=t;return e.$$set=c=>{"text"in c&&n(0,s=c.text),"bg"in c&&n(1,r=c.bg),"fg"in c&&n(2,i=c.fg),"host"in c&&n(3,o=c.host),"id"in c&&n(4,f=c.id)},[s,r,i,o,f]}class It extends J{constructor(t){super(),U(this,t,Pt,Ht,S,{text:0,bg:1,fg:2,host:3,id:4})}get text(){return this.$$.ctx[0]}set text(t){this.$$set({text:t}),h()}get bg(){return this.$$.ctx[1]}set bg(t){this.$$set({bg:t}),h()}get fg(){return this.$$.ctx[2]}set fg(t){this.$$set({fg:t}),h()}get host(){return this.$$.ctx[3]}set host(t){this.$$set({host:t}),h()}get id(){return this.$$.ctx[4]}set id(t){this.$$set({id:t}),h()}}customElements.define("qchat-widget",D(It,{text:{},bg:{},fg:{},host:{},id:{}},[],[],!0))})();
