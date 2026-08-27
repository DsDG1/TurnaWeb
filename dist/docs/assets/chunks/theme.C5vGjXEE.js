const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/VPLocalSearchBox.BtTFDVWK.js","assets/chunks/framework.BW2T23B9.js"])))=>i.map(i=>d[i]);
import{d as p,c as d,r as v,n as N,o as i,a as D,t as A,b as _,w as m,T as fn,e as h,_ as y,u as Ln,i as Hn,f as Bn,g as C,h as S,j as a,k as l,l as G,m as ln,p as P,q as H,s as X,v as j,x as mn,y as hn,z as Un,A as Jn,F as T,B as x,C as W,D as Y,E as g,G as In,H as F,I as Pn,J as Z,K as J,L as nn,M as jn,N as Tn,O as cn,P as Vn,Q as Nn,R as en,S as Gn,U as Wn,V as zn,W as On,X as xn,Y as Kn,Z as qn,$ as wn,a0 as Qn,a1 as Xn,a2 as an,a3 as Sn}from"./framework.BW2T23B9.js";const Yn=p({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(n){return(e,t)=>(i(),d("span",{class:N(["VPBadge",n.type])},[v(e.$slots,"default",{},()=>[D(A(n.text),1)])],2))}}),Zn={key:0,class:"VPBackdrop"},ne=p({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(n){return(e,t)=>(i(),_(fn,{name:"fade"},{default:m(()=>[n.show?(i(),d("div",Zn)):h("",!0)]),_:1}))}}),ee=y(ne,[["__scopeId","data-v-54a304ca"]]),L=Ln;function te(n,e){let t,s=!1;return()=>{t&&clearTimeout(t),s?t=setTimeout(n,e):(n(),(s=!0)&&setTimeout(()=>s=!1,e))}}function un(n){return n.startsWith("/")?n:`/${n}`}function pn(n){const{pathname:e,search:t,hash:s,protocol:o}=new URL(n,"http://a.com");if(Hn(n)||n.startsWith("#")||!o.startsWith("http")||!Bn(e))return n;const{site:c}=L(),r=e.endsWith("/")||e.endsWith(".html")?n:n.replace(/(?:(^\.+)\/)?.*$/,`$1${e.replace(/(\.md)?$/,c.value.cleanUrls?"":".html")}${t}${s}`);return C(r)}function K({correspondingLink:n=!1}={}){const{site:e,localeIndex:t,page:s,theme:o,hash:c}=L(),r=S(()=>{var f,b;return{label:(f=e.value.locales[t.value])==null?void 0:f.label,link:((b=e.value.locales[t.value])==null?void 0:b.link)||(t.value==="root"?"/":`/${t.value}/`)}});return{localeLinks:S(()=>Object.entries(e.value.locales).flatMap(([f,b])=>r.value.label===b.label?[]:{text:b.label,link:se(b.link||(f==="root"?"/":`/${f}/`),o.value.i18nRouting!==!1&&n,s.value.relativePath.slice(r.value.link.length-1),!e.value.cleanUrls)+c.value})),currentLang:r}}function se(n,e,t,s){return e?n.replace(/\/$/,"")+un(t.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,s?".html":"")):n}const oe={class:"NotFound"},ae={class:"code"},ie={class:"title"},re={class:"quote"},le={class:"action"},ce=["href","aria-label"],ue=p({__name:"NotFound",setup(n){const{theme:e}=L(),{currentLang:t}=K();return(s,o)=>{var c,r,u,f,b;return i(),d("div",oe,[a("p",ae,A(((c=l(e).notFound)==null?void 0:c.code)??"404"),1),a("h1",ie,A(((r=l(e).notFound)==null?void 0:r.title)??"PAGE NOT FOUND"),1),o[0]||(o[0]=a("div",{class:"divider"},null,-1)),a("blockquote",re,A(((u=l(e).notFound)==null?void 0:u.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),a("div",le,[a("a",{class:"link",href:l(C)(l(t).link),"aria-label":((f=l(e).notFound)==null?void 0:f.linkLabel)??"go to home"},A(((b=l(e).notFound)==null?void 0:b.linkText)??"Take me home"),9,ce)])])}}}),de=y(ue,[["__scopeId","data-v-6ff51ddd"]]);function Cn(n,e){if(Array.isArray(n))return q(n);if(n==null)return[];e=un(e);const t=Object.keys(n).sort((o,c)=>c.split("/").length-o.split("/").length).find(o=>e.startsWith(un(o))),s=t?n[t]:[];return Array.isArray(s)?q(s):q(s.items,s.base)}function ve(n){const e=[];let t=0;for(const s in n){const o=n[s];if(o.items){t=e.push(o);continue}e[t]||e.push({items:[]}),e[t].items.push(o)}return e}function fe(n){const e=[];function t(s){for(const o of s)o.text&&o.link&&e.push({text:o.text,link:o.link,docFooterText:o.docFooterText}),o.items&&t(o.items)}return t(n),e}function dn(n,e){return Array.isArray(e)?e.some(t=>dn(n,t)):G(n,e.link)?!0:e.items?dn(n,e.items):!1}function q(n,e){return[...n].map(t=>{const s={...t},o=s.base||e;return o&&s.link&&(s.link=o+s.link),s.items&&(s.items=q(s.items,o)),s})}function B(){const{frontmatter:n,page:e,theme:t}=L(),s=ln("(min-width: 960px)"),o=P(!1),c=S(()=>{const w=t.value.sidebar,M=e.value.relativePath;return w?Cn(w,M):[]}),r=P(c.value);H(c,(w,M)=>{JSON.stringify(w)!==JSON.stringify(M)&&(r.value=c.value)});const u=S(()=>n.value.sidebar!==!1&&r.value.length>0&&n.value.layout!=="home"),f=S(()=>b?n.value.aside==null?t.value.aside==="left":n.value.aside==="left":!1),b=S(()=>n.value.layout==="home"?!1:n.value.aside!=null?!!n.value.aside:t.value.aside!==!1),I=S(()=>u.value&&s.value),k=S(()=>u.value?ve(r.value):[]);function $(){o.value=!0}function V(){o.value=!1}function O(){o.value?V():$()}return{isOpen:o,sidebar:r,sidebarGroups:k,hasSidebar:u,hasAside:b,leftAside:f,isSidebarEnabled:I,open:$,close:V,toggle:O}}function me(n,e){let t;X(()=>{t=n.value?document.activeElement:void 0}),j(()=>{window.addEventListener("keyup",s)}),mn(()=>{window.removeEventListener("keyup",s)});function s(o){o.key==="Escape"&&n.value&&(e(),t==null||t.focus())}}function he(n){const{page:e,hash:t}=L(),s=P(!1),o=S(()=>n.value.collapsed!=null),c=S(()=>!!n.value.link),r=P(!1),u=()=>{r.value=G(e.value.relativePath,n.value.link)};H([e,n,t],u),j(u);const f=S(()=>r.value?!0:n.value.items?dn(e.value.relativePath,n.value.items):!1),b=S(()=>!!(n.value.items&&n.value.items.length));X(()=>{s.value=!!(o.value&&n.value.collapsed)}),hn(()=>{(r.value||f.value)&&(s.value=!1)});function I(){o.value&&(s.value=!s.value)}return{collapsed:s,collapsible:o,isLink:c,isActiveLink:r,hasActiveLink:f,hasChildren:b,toggle:I}}function pe(){const{hasSidebar:n}=B(),e=ln("(min-width: 960px)"),t=ln("(min-width: 1280px)");return{isAsideEnabled:S(()=>!t.value&&!e.value?!1:n.value?t.value:e.value)}}const ge=/\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/,vn=[];function Mn(n){return typeof n.outline=="object"&&!Array.isArray(n.outline)&&n.outline.label||n.outlineTitle||"On this page"}function gn(n){const e=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(t=>t.id&&t.hasChildNodes()).map(t=>{const s=Number(t.tagName[1]);return{element:t,title:_e(t),link:"#"+t.id,level:s}});return be(e,n)}function _e(n){let e="";for(const t of n.childNodes)if(t.nodeType===1){if(ge.test(t.className))continue;e+=t.textContent}else t.nodeType===3&&(e+=t.textContent);return e.trim()}function be(n,e){if(e===!1)return[];const t=(typeof e=="object"&&!Array.isArray(e)?e.level:e)||2,[s,o]=typeof t=="number"?[t,t]:t==="deep"?[2,6]:t;return Se(n,s,o)}function ke(n,e){const{isAsideEnabled:t}=pe(),s=te(c,100);let o=null;j(()=>{requestAnimationFrame(c),window.addEventListener("scroll",s)}),Un(()=>{r(location.hash)}),mn(()=>{window.removeEventListener("scroll",s)});function c(){if(!t.value)return;const u=window.scrollY,f=window.innerHeight,b=document.body.offsetHeight,I=Math.abs(u+f-b)<1,k=vn.map(({element:V,link:O})=>({link:O,top:ye(V)})).filter(({top:V})=>!Number.isNaN(V)).sort((V,O)=>V.top-O.top);if(!k.length){r(null);return}if(u<1){r(null);return}if(I){r(k[k.length-1].link);return}let $=null;for(const{link:V,top:O}of k){if(O>u+Jn()+4)break;$=V}r($)}function r(u){o&&o.classList.remove("active"),u==null?o=null:o=n.value.querySelector(`a[href="${decodeURIComponent(u)}"]`);const f=o;f?(f.classList.add("active"),e.value.style.top=f.offsetTop+39+"px",e.value.style.opacity="1"):(e.value.style.top="33px",e.value.style.opacity="0")}}function ye(n){let e=0;for(;n!==document.body;){if(n===null)return NaN;e+=n.offsetTop,n=n.offsetParent}return e}function Se(n,e,t){vn.length=0;const s=[],o=[];return n.forEach(c=>{const r={...c,children:[]};let u=o[o.length-1];for(;u&&u.level>=r.level;)o.pop(),u=o[o.length-1];if(r.element.classList.contains("ignore-header")||u&&"shouldIgnore"in u){o.push({level:r.level,shouldIgnore:!0});return}r.level>t||r.level<e||(vn.push({element:r.element,link:r.link}),u?u.children.push(r):s.push(r),o.push(r))}),s}const Ae=["href","title"],$e=p({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(n){function e({target:t}){const s=t.href.split("#")[1],o=document.getElementById(decodeURIComponent(s));o==null||o.focus({preventScroll:!0})}return(t,s)=>{const o=W("VPDocOutlineItem",!0);return i(),d("ul",{class:N(["VPDocOutlineItem",n.root?"root":"nested"])},[(i(!0),d(T,null,x(n.headers,({children:c,link:r,title:u})=>(i(),d("li",null,[a("a",{class:"outline-link",href:r,onClick:e,title:u},A(u),9,Ae),c!=null&&c.length?(i(),_(o,{key:0,headers:c},null,8,["headers"])):h("",!0)]))),256))],2)}}}),Rn=y($e,[["__scopeId","data-v-53c99d69"]]),Le={class:"content"},Ie={"aria-level":"2",class:"outline-title",id:"doc-outline-aria-label",role:"heading"},Pe=p({__name:"VPDocAsideOutline",setup(n){const{frontmatter:e,theme:t}=L(),s=In([]);Y(()=>{s.value=gn(e.value.outline??t.value.outline)});const o=P(),c=P();return ke(o,c),(r,u)=>(i(),d("nav",{"aria-labelledby":"doc-outline-aria-label",class:N(["VPDocAsideOutline",{"has-outline":s.value.length>0}]),ref_key:"container",ref:o},[a("div",Le,[a("div",{class:"outline-marker",ref_key:"marker",ref:c},null,512),a("div",Ie,A(l(Mn)(l(t))),1),g(Rn,{headers:s.value,root:!0},null,8,["headers"])])],2))}}),Te=y(Pe,[["__scopeId","data-v-f610f197"]]),Ve={class:"VPDocAsideCarbonAds"},Ne=p({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(n){const e=()=>null;return(t,s)=>(i(),d("div",Ve,[g(l(e),{"carbon-ads":n.carbonAds},null,8,["carbon-ads"])]))}}),Oe={class:"VPDocAside"},xe=p({__name:"VPDocAside",setup(n){const{theme:e}=L();return(t,s)=>(i(),d("div",Oe,[v(t.$slots,"aside-top",{},void 0,!0),v(t.$slots,"aside-outline-before",{},void 0,!0),g(Te),v(t.$slots,"aside-outline-after",{},void 0,!0),s[0]||(s[0]=a("div",{class:"spacer"},null,-1)),v(t.$slots,"aside-ads-before",{},void 0,!0),l(e).carbonAds?(i(),_(Ne,{key:0,"carbon-ads":l(e).carbonAds},null,8,["carbon-ads"])):h("",!0),v(t.$slots,"aside-ads-after",{},void 0,!0),v(t.$slots,"aside-bottom",{},void 0,!0)]))}}),we=y(xe,[["__scopeId","data-v-cb998dce"]]);function Ce(){const{theme:n,page:e}=L();return S(()=>{const{text:t="Edit this page",pattern:s=""}=n.value.editLink||{};let o;return typeof s=="function"?o=s(e.value):o=s.replace(/:path/g,e.value.filePath),{url:o,text:t}})}function Me(){const{page:n,theme:e,frontmatter:t}=L();return S(()=>{var b,I,k,$,V,O,w,M;const s=Cn(e.value.sidebar,n.value.relativePath),o=fe(s),c=Re(o,R=>R.link.replace(/[?#].*$/,"")),r=c.findIndex(R=>G(n.value.relativePath,R.link)),u=((b=e.value.docFooter)==null?void 0:b.prev)===!1&&!t.value.prev||t.value.prev===!1,f=((I=e.value.docFooter)==null?void 0:I.next)===!1&&!t.value.next||t.value.next===!1;return{prev:u?void 0:{text:(typeof t.value.prev=="string"?t.value.prev:typeof t.value.prev=="object"?t.value.prev.text:void 0)??((k=c[r-1])==null?void 0:k.docFooterText)??(($=c[r-1])==null?void 0:$.text),link:(typeof t.value.prev=="object"?t.value.prev.link:void 0)??((V=c[r-1])==null?void 0:V.link)},next:f?void 0:{text:(typeof t.value.next=="string"?t.value.next:typeof t.value.next=="object"?t.value.next.text:void 0)??((O=c[r+1])==null?void 0:O.docFooterText)??((w=c[r+1])==null?void 0:w.text),link:(typeof t.value.next=="object"?t.value.next.link:void 0)??((M=c[r+1])==null?void 0:M.link)}}})}function Re(n,e){const t=new Set;return n.filter(s=>{const o=e(s);return t.has(o)?!1:t.add(o)})}const E=p({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(n){const e=n,t=S(()=>e.tag??(e.href?"a":"span")),s=S(()=>e.href&&Pn.test(e.href)||e.target==="_blank");return(o,c)=>(i(),_(F(t.value),{class:N(["VPLink",{link:n.href,"vp-external-link-icon":s.value,"no-icon":n.noIcon}]),href:n.href?l(pn)(n.href):void 0,target:n.target??(s.value?"_blank":void 0),rel:n.rel??(s.value?"noreferrer":void 0)},{default:m(()=>[v(o.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),De={class:"VPLastUpdated"},Fe=["datetime"],Ee=p({__name:"VPDocFooterLastUpdated",setup(n){const{theme:e,page:t,lang:s}=L(),o=S(()=>new Date(t.value.lastUpdated)),c=S(()=>o.value.toISOString()),r=P("");return j(()=>{X(()=>{var u,f,b;r.value=new Intl.DateTimeFormat((f=(u=e.value.lastUpdated)==null?void 0:u.formatOptions)!=null&&f.forceLocale?s.value:void 0,((b=e.value.lastUpdated)==null?void 0:b.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(o.value)})}),(u,f)=>{var b;return i(),d("p",De,[D(A(((b=l(e).lastUpdated)==null?void 0:b.text)||l(e).lastUpdatedText||"Last updated")+": ",1),a("time",{datetime:c.value},A(r.value),9,Fe)])}}}),He=y(Ee,[["__scopeId","data-v-1bb0c8a8"]]),Be={key:0,class:"VPDocFooter"},Ue={key:0,class:"edit-info"},Je={key:0,class:"edit-link"},je={key:1,class:"last-updated"},Ge={key:1,class:"prev-next","aria-labelledby":"doc-footer-aria-label"},We={class:"pager"},ze=["innerHTML"],Ke=["innerHTML"],qe={class:"pager"},Qe=["innerHTML"],Xe=["innerHTML"],Ye=p({__name:"VPDocFooter",setup(n){const{theme:e,page:t,frontmatter:s}=L(),o=Ce(),c=Me(),r=S(()=>e.value.editLink&&s.value.editLink!==!1),u=S(()=>t.value.lastUpdated),f=S(()=>r.value||u.value||c.value.prev||c.value.next);return(b,I)=>{var k,$,V,O;return f.value?(i(),d("footer",Be,[v(b.$slots,"doc-footer-before",{},void 0,!0),r.value||u.value?(i(),d("div",Ue,[r.value?(i(),d("div",Je,[g(E,{class:"edit-link-button",href:l(o).url,"no-icon":!0},{default:m(()=>[I[0]||(I[0]=a("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),D(" "+A(l(o).text),1)]),_:1},8,["href"])])):h("",!0),u.value?(i(),d("div",je,[g(He)])):h("",!0)])):h("",!0),(k=l(c).prev)!=null&&k.link||($=l(c).next)!=null&&$.link?(i(),d("nav",Ge,[I[1]||(I[1]=a("span",{class:"visually-hidden",id:"doc-footer-aria-label"},"Pager",-1)),a("div",We,[(V=l(c).prev)!=null&&V.link?(i(),_(E,{key:0,class:"pager-link prev",href:l(c).prev.link},{default:m(()=>{var w;return[a("span",{class:"desc",innerHTML:((w=l(e).docFooter)==null?void 0:w.prev)||"Previous page"},null,8,ze),a("span",{class:"title",innerHTML:l(c).prev.text},null,8,Ke)]}),_:1},8,["href"])):h("",!0)]),a("div",qe,[(O=l(c).next)!=null&&O.link?(i(),_(E,{key:0,class:"pager-link next",href:l(c).next.link},{default:m(()=>{var w;return[a("span",{class:"desc",innerHTML:((w=l(e).docFooter)==null?void 0:w.next)||"Next page"},null,8,Qe),a("span",{class:"title",innerHTML:l(c).next.text},null,8,Xe)]}),_:1},8,["href"])):h("",!0)])])):h("",!0)])):h("",!0)}}}),Ze=y(Ye,[["__scopeId","data-v-1bcd8184"]]),nt={class:"container"},et={class:"aside-container"},tt={class:"aside-content"},st={class:"content"},ot={class:"content-container"},at={class:"main"},it=p({__name:"VPDoc",setup(n){const{theme:e}=L(),t=Z(),{hasSidebar:s,hasAside:o,leftAside:c}=B(),r=S(()=>t.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(u,f)=>{const b=W("Content");return i(),d("div",{class:N(["VPDoc",{"has-sidebar":l(s),"has-aside":l(o)}])},[v(u.$slots,"doc-top",{},void 0,!0),a("div",nt,[l(o)?(i(),d("div",{key:0,class:N(["aside",{"left-aside":l(c)}])},[f[0]||(f[0]=a("div",{class:"aside-curtain"},null,-1)),a("div",et,[a("div",tt,[g(we,null,{"aside-top":m(()=>[v(u.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":m(()=>[v(u.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":m(()=>[v(u.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":m(()=>[v(u.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":m(()=>[v(u.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":m(()=>[v(u.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):h("",!0),a("div",st,[a("div",ot,[v(u.$slots,"doc-before",{},void 0,!0),a("main",at,[g(b,{class:N(["vp-doc",[r.value,l(e).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),g(Ze,null,{"doc-footer-before":m(()=>[v(u.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),v(u.$slots,"doc-after",{},void 0,!0)])])]),v(u.$slots,"doc-bottom",{},void 0,!0)],2)}}}),rt=y(it,[["__scopeId","data-v-e6f2a212"]]),lt=p({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(n){const e=n,t=S(()=>e.href&&Pn.test(e.href)),s=S(()=>e.tag||(e.href?"a":"button"));return(o,c)=>(i(),_(F(s.value),{class:N(["VPButton",[n.size,n.theme]]),href:n.href?l(pn)(n.href):void 0,target:e.target??(t.value?"_blank":void 0),rel:e.rel??(t.value?"noreferrer":void 0)},{default:m(()=>[D(A(n.text),1)]),_:1},8,["class","href","target","rel"]))}}),ct=y(lt,[["__scopeId","data-v-93dc4167"]]),ut=["src","alt"],dt=p({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(n){return(e,t)=>{const s=W("VPImage",!0);return n.image?(i(),d(T,{key:0},[typeof n.image=="string"||"src"in n.image?(i(),d("img",J({key:0,class:"VPImage"},typeof n.image=="string"?e.$attrs:{...n.image,...e.$attrs},{src:l(C)(typeof n.image=="string"?n.image:n.image.src),alt:n.alt??(typeof n.image=="string"?"":n.image.alt||"")}),null,16,ut)):(i(),d(T,{key:1},[g(s,J({class:"dark",image:n.image.dark,alt:n.image.alt},e.$attrs),null,16,["image","alt"]),g(s,J({class:"light",image:n.image.light,alt:n.image.alt},e.$attrs),null,16,["image","alt"])],64))],64)):h("",!0)}}}),Q=y(dt,[["__scopeId","data-v-ab19afbb"]]),vt={class:"container"},ft={class:"main"},mt={class:"heading"},ht=["innerHTML"],pt=["innerHTML"],gt=["innerHTML"],_t={key:0,class:"actions"},bt={key:0,class:"image"},kt={class:"image-container"},yt=p({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(n){const e=nn("hero-image-slot-exists");return(t,s)=>(i(),d("div",{class:N(["VPHero",{"has-image":n.image||l(e)}])},[a("div",vt,[a("div",ft,[v(t.$slots,"home-hero-info-before",{},void 0,!0),v(t.$slots,"home-hero-info",{},()=>[a("h1",mt,[n.name?(i(),d("span",{key:0,innerHTML:n.name,class:"name clip"},null,8,ht)):h("",!0),n.text?(i(),d("span",{key:1,innerHTML:n.text,class:"text"},null,8,pt)):h("",!0)]),n.tagline?(i(),d("p",{key:0,innerHTML:n.tagline,class:"tagline"},null,8,gt)):h("",!0)],!0),v(t.$slots,"home-hero-info-after",{},void 0,!0),n.actions?(i(),d("div",_t,[(i(!0),d(T,null,x(n.actions,o=>(i(),d("div",{key:o.link,class:"action"},[g(ct,{tag:"a",size:"medium",theme:o.theme,text:o.text,href:o.link,target:o.target,rel:o.rel},null,8,["theme","text","href","target","rel"])]))),128))])):h("",!0),v(t.$slots,"home-hero-actions-after",{},void 0,!0)]),n.image||l(e)?(i(),d("div",bt,[a("div",kt,[s[0]||(s[0]=a("div",{class:"image-bg"},null,-1)),v(t.$slots,"home-hero-image",{},()=>[n.image?(i(),_(Q,{key:0,class:"image-src",image:n.image},null,8,["image"])):h("",!0)],!0)])])):h("",!0)])],2))}}),St=y(yt,[["__scopeId","data-v-dd8814ff"]]),At=p({__name:"VPHomeHero",setup(n){const{frontmatter:e}=L();return(t,s)=>l(e).hero?(i(),_(St,{key:0,class:"VPHomeHero",name:l(e).hero.name,text:l(e).hero.text,tagline:l(e).hero.tagline,image:l(e).hero.image,actions:l(e).hero.actions},{"home-hero-info-before":m(()=>[v(t.$slots,"home-hero-info-before")]),"home-hero-info":m(()=>[v(t.$slots,"home-hero-info")]),"home-hero-info-after":m(()=>[v(t.$slots,"home-hero-info-after")]),"home-hero-actions-after":m(()=>[v(t.$slots,"home-hero-actions-after")]),"home-hero-image":m(()=>[v(t.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):h("",!0)}}),$t={class:"box"},Lt={key:0,class:"icon"},It=["innerHTML"],Pt=["innerHTML"],Tt=["innerHTML"],Vt={key:4,class:"link-text"},Nt={class:"link-text-value"},Ot=p({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(n){return(e,t)=>(i(),_(E,{class:"VPFeature",href:n.link,rel:n.rel,target:n.target,"no-icon":!0,tag:n.link?"a":"div"},{default:m(()=>[a("article",$t,[typeof n.icon=="object"&&n.icon.wrap?(i(),d("div",Lt,[g(Q,{image:n.icon,alt:n.icon.alt,height:n.icon.height||48,width:n.icon.width||48},null,8,["image","alt","height","width"])])):typeof n.icon=="object"?(i(),_(Q,{key:1,image:n.icon,alt:n.icon.alt,height:n.icon.height||48,width:n.icon.width||48},null,8,["image","alt","height","width"])):n.icon?(i(),d("div",{key:2,class:"icon",innerHTML:n.icon},null,8,It)):h("",!0),a("h2",{class:"title",innerHTML:n.title},null,8,Pt),n.details?(i(),d("p",{key:3,class:"details",innerHTML:n.details},null,8,Tt)):h("",!0),n.linkText?(i(),d("div",Vt,[a("p",Nt,[D(A(n.linkText)+" ",1),t[0]||(t[0]=a("span",{class:"vpi-arrow-right link-text-icon"},null,-1))])])):h("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),xt=y(Ot,[["__scopeId","data-v-bd37d1a2"]]),wt={key:0,class:"VPFeatures"},Ct={class:"container"},Mt={class:"items"},Rt=p({__name:"VPFeatures",props:{features:{}},setup(n){const e=n,t=S(()=>{const s=e.features.length;if(s){if(s===2)return"grid-2";if(s===3)return"grid-3";if(s%3===0)return"grid-6";if(s>3)return"grid-4"}else return});return(s,o)=>n.features?(i(),d("div",wt,[a("div",Ct,[a("div",Mt,[(i(!0),d(T,null,x(n.features,c=>(i(),d("div",{key:c.title,class:N(["item",[t.value]])},[g(xt,{icon:c.icon,title:c.title,details:c.details,link:c.link,"link-text":c.linkText,rel:c.rel,target:c.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):h("",!0)}}),Dt=y(Rt,[["__scopeId","data-v-b1eea84a"]]),Ft=p({__name:"VPHomeFeatures",setup(n){const{frontmatter:e}=L();return(t,s)=>l(e).features?(i(),_(Dt,{key:0,class:"VPHomeFeatures",features:l(e).features},null,8,["features"])):h("",!0)}}),Et=p({__name:"VPHomeContent",setup(n){const{width:e}=jn({initialWidth:0,includeScrollbar:!1});return(t,s)=>(i(),d("div",{class:"vp-doc container",style:Tn(l(e)?{"--vp-offset":`calc(50% - ${l(e)/2}px)`}:{})},[v(t.$slots,"default",{},void 0,!0)],4))}}),Ht=y(Et,[["__scopeId","data-v-c141a4bd"]]),Bt=p({__name:"VPHome",setup(n){const{frontmatter:e,theme:t}=L();return(s,o)=>{const c=W("Content");return i(),d("div",{class:N(["VPHome",{"external-link-icon-enabled":l(t).externalLinkIcon}])},[v(s.$slots,"home-hero-before",{},void 0,!0),g(At,null,{"home-hero-info-before":m(()=>[v(s.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":m(()=>[v(s.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":m(()=>[v(s.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":m(()=>[v(s.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":m(()=>[v(s.$slots,"home-hero-image",{},void 0,!0)]),_:3}),v(s.$slots,"home-hero-after",{},void 0,!0),v(s.$slots,"home-features-before",{},void 0,!0),g(Ft),v(s.$slots,"home-features-after",{},void 0,!0),l(e).markdownStyles!==!1?(i(),_(Ht,{key:0},{default:m(()=>[g(c)]),_:1})):(i(),_(c,{key:1}))],2)}}}),Ut=y(Bt,[["__scopeId","data-v-e07eaea7"]]),Jt={},jt={class:"VPPage"};function Gt(n,e){const t=W("Content");return i(),d("div",jt,[v(n.$slots,"page-top"),g(t),v(n.$slots,"page-bottom")])}const Wt=y(Jt,[["render",Gt]]),zt=p({__name:"VPContent",setup(n){const{page:e,frontmatter:t}=L(),{hasSidebar:s}=B();return(o,c)=>(i(),d("div",{class:N(["VPContent",{"has-sidebar":l(s),"is-home":l(t).layout==="home"}]),id:"VPContent"},[l(e).isNotFound?v(o.$slots,"not-found",{},()=>[g(de)],!0,0):l(t).layout==="page"?(i(),_(Wt,{key:1},{"page-top":m(()=>[v(o.$slots,"page-top",{},void 0,!0)]),"page-bottom":m(()=>[v(o.$slots,"page-bottom",{},void 0,!0)]),_:3})):l(t).layout==="home"?(i(),_(Ut,{key:2},{"home-hero-before":m(()=>[v(o.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":m(()=>[v(o.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":m(()=>[v(o.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":m(()=>[v(o.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":m(()=>[v(o.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":m(()=>[v(o.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":m(()=>[v(o.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":m(()=>[v(o.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":m(()=>[v(o.$slots,"home-features-after",{},void 0,!0)]),_:3})):l(t).layout&&l(t).layout!=="doc"?(i(),_(F(l(t).layout),{key:3})):(i(),_(rt,{key:4},{"doc-top":m(()=>[v(o.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":m(()=>[v(o.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":m(()=>[v(o.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":m(()=>[v(o.$slots,"doc-before",{},void 0,!0)]),"doc-after":m(()=>[v(o.$slots,"doc-after",{},void 0,!0)]),"aside-top":m(()=>[v(o.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":m(()=>[v(o.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":m(()=>[v(o.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":m(()=>[v(o.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":m(()=>[v(o.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":m(()=>[v(o.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),Kt=y(zt,[["__scopeId","data-v-9a6c75ad"]]),qt={class:"container"},Qt=["innerHTML"],Xt=["innerHTML"],Yt=p({__name:"VPFooter",setup(n){const{theme:e,frontmatter:t}=L(),{hasSidebar:s}=B();return(o,c)=>l(e).footer&&l(t).footer!==!1?(i(),d("footer",{key:0,class:N(["VPFooter",{"has-sidebar":l(s)}])},[a("div",qt,[l(e).footer.message?(i(),d("p",{key:0,class:"message",innerHTML:l(e).footer.message},null,8,Qt)):h("",!0),l(e).footer.copyright?(i(),d("p",{key:1,class:"copyright",innerHTML:l(e).footer.copyright},null,8,Xt)):h("",!0)])],2)):h("",!0)}}),Zt=y(Yt,[["__scopeId","data-v-566314d4"]]);function ns(){const{theme:n,frontmatter:e}=L(),t=In([]),s=S(()=>t.value.length>0);return Y(()=>{t.value=gn(e.value.outline??n.value.outline)}),{headers:t,hasLocalNav:s}}const es={class:"menu-text"},ts={class:"header"},ss={class:"outline"},os=p({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(n){const e=n,{theme:t}=L(),s=P(!1),o=P(0),c=P(),r=P();function u(k){var $;($=c.value)!=null&&$.contains(k.target)||(s.value=!1)}H(s,k=>{if(k){document.addEventListener("click",u);return}document.removeEventListener("click",u)}),cn("Escape",()=>{s.value=!1}),Y(()=>{s.value=!1});function f(){s.value=!s.value,o.value=window.innerHeight+Math.min(window.scrollY-e.navHeight,0)}function b(k){k.target.classList.contains("outline-link")&&(r.value&&(r.value.style.transition="none"),Vn(()=>{s.value=!1}))}function I(){s.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(k,$)=>(i(),d("div",{class:"VPLocalNavOutlineDropdown",style:Tn({"--vp-vh":o.value+"px"}),ref_key:"main",ref:c},[n.headers.length>0?(i(),d("button",{key:0,onClick:f,class:N({open:s.value})},[a("span",es,A(l(Mn)(l(t))),1),$[0]||($[0]=a("span",{class:"vpi-chevron-right icon"},null,-1))],2)):(i(),d("button",{key:1,onClick:I},A(l(t).returnToTopLabel||"Return to top"),1)),g(fn,{name:"flyout"},{default:m(()=>[s.value?(i(),d("div",{key:0,ref_key:"items",ref:r,class:"items",onClick:b},[a("div",ts,[a("a",{class:"top-link",href:"#",onClick:I},A(l(t).returnToTopLabel||"Return to top"),1)]),a("div",ss,[g(Rn,{headers:n.headers},null,8,["headers"])])],512)):h("",!0)]),_:1})],4))}}),as=y(os,[["__scopeId","data-v-6b867909"]]),is={class:"container"},rs=["aria-expanded"],ls={class:"menu-text"},cs=p({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(n){const{theme:e,frontmatter:t}=L(),{hasSidebar:s}=B(),{headers:o}=ns(),{y:c}=Nn(),r=P(0);j(()=>{r.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),Y(()=>{o.value=gn(t.value.outline??e.value.outline)});const u=S(()=>o.value.length===0),f=S(()=>u.value&&!s.value),b=S(()=>({VPLocalNav:!0,"has-sidebar":s.value,empty:u.value,fixed:f.value}));return(I,k)=>l(t).layout!=="home"&&(!f.value||l(c)>=r.value)?(i(),d("div",{key:0,class:N(b.value)},[a("div",is,[l(s)?(i(),d("button",{key:0,class:"menu","aria-expanded":n.open,"aria-controls":"VPSidebarNav",onClick:k[0]||(k[0]=$=>I.$emit("open-menu"))},[k[1]||(k[1]=a("span",{class:"vpi-align-left menu-icon"},null,-1)),a("span",ls,A(l(e).sidebarMenuLabel||"Menu"),1)],8,rs)):h("",!0),g(as,{headers:l(o),navHeight:r.value},null,8,["headers","navHeight"])])],2)):h("",!0)}}),us=y(cs,[["__scopeId","data-v-2488c25a"]]);function ds(){const n=P(!1);function e(){n.value=!0,window.addEventListener("resize",o)}function t(){n.value=!1,window.removeEventListener("resize",o)}function s(){n.value?t():e()}function o(){window.outerWidth>=768&&t()}const c=Z();return H(()=>c.path,t),{isScreenOpen:n,openScreen:e,closeScreen:t,toggleScreen:s}}const vs={},fs={class:"VPSwitch",type:"button",role:"switch"},ms={class:"check"},hs={key:0,class:"icon"};function ps(n,e){return i(),d("button",fs,[a("span",ms,[n.$slots.default?(i(),d("span",hs,[v(n.$slots,"default",{},void 0,!0)])):h("",!0)])])}const gs=y(vs,[["render",ps],["__scopeId","data-v-b4ccac88"]]),_s=p({__name:"VPSwitchAppearance",setup(n){const{isDark:e,theme:t}=L(),s=nn("toggle-appearance",()=>{e.value=!e.value}),o=P("");return hn(()=>{o.value=e.value?t.value.lightModeSwitchTitle||"Switch to light theme":t.value.darkModeSwitchTitle||"Switch to dark theme"}),(c,r)=>(i(),_(gs,{title:o.value,class:"VPSwitchAppearance","aria-checked":l(e),onClick:l(s)},{default:m(()=>[...r[0]||(r[0]=[a("span",{class:"vpi-sun sun"},null,-1),a("span",{class:"vpi-moon moon"},null,-1)])]),_:1},8,["title","aria-checked","onClick"]))}}),_n=y(_s,[["__scopeId","data-v-be9742d9"]]),bs={key:0,class:"VPNavBarAppearance"},ks=p({__name:"VPNavBarAppearance",setup(n){const{site:e}=L();return(t,s)=>l(e).appearance&&l(e).appearance!=="force-dark"&&l(e).appearance!=="force-auto"?(i(),d("div",bs,[g(_n)])):h("",!0)}}),ys=y(ks,[["__scopeId","data-v-3f90c1a5"]]),bn=P();let Dn=!1,rn=0;function Ss(n){const e=P(!1);if(en){!Dn&&As(),rn++;const t=H(bn,s=>{var o,c,r;s===n.el.value||(o=n.el.value)!=null&&o.contains(s)?(e.value=!0,(c=n.onFocus)==null||c.call(n)):(e.value=!1,(r=n.onBlur)==null||r.call(n))});mn(()=>{t(),rn--,rn||$s()})}return Gn(e)}function As(){document.addEventListener("focusin",Fn),Dn=!0,bn.value=document.activeElement}function $s(){document.removeEventListener("focusin",Fn)}function Fn(){bn.value=document.activeElement}const Ls={class:"VPMenuLink"},Is=["innerHTML"],Ps=p({__name:"VPMenuLink",props:{item:{}},setup(n){const{page:e}=L();return(t,s)=>(i(),d("div",Ls,[g(E,{class:N({active:l(G)(l(e).relativePath,n.item.activeMatch||n.item.link,!!n.item.activeMatch)}),href:n.item.link,target:n.item.target,rel:n.item.rel,"no-icon":n.item.noIcon},{default:m(()=>[a("span",{innerHTML:n.item.text},null,8,Is)]),_:1},8,["class","href","target","rel","no-icon"])]))}}),tn=y(Ps,[["__scopeId","data-v-7eeeb2dc"]]),Ts={class:"VPMenuGroup"},Vs={key:0,class:"title"},Ns=p({__name:"VPMenuGroup",props:{text:{},items:{}},setup(n){return(e,t)=>(i(),d("div",Ts,[n.text?(i(),d("p",Vs,A(n.text),1)):h("",!0),(i(!0),d(T,null,x(n.items,s=>(i(),d(T,null,["link"in s?(i(),_(tn,{key:0,item:s},null,8,["item"])):h("",!0)],64))),256))]))}}),Os=y(Ns,[["__scopeId","data-v-a6b0397c"]]),xs={class:"VPMenu"},ws={key:0,class:"items"},Cs=p({__name:"VPMenu",props:{items:{}},setup(n){return(e,t)=>(i(),d("div",xs,[n.items?(i(),d("div",ws,[(i(!0),d(T,null,x(n.items,s=>(i(),d(T,{key:JSON.stringify(s)},["link"in s?(i(),_(tn,{key:0,item:s},null,8,["item"])):"component"in s?(i(),_(F(s.component),J({key:1,ref_for:!0},s.props),null,16)):(i(),_(Os,{key:2,text:s.text,items:s.items},null,8,["text","items"]))],64))),128))])):h("",!0),v(e.$slots,"default",{},void 0,!0)]))}}),Ms=y(Cs,[["__scopeId","data-v-20ed86d6"]]),Rs=["aria-expanded","aria-label"],Ds={key:0,class:"text"},Fs=["innerHTML"],Es={key:1,class:"vpi-more-horizontal icon"},Hs={class:"menu"},Bs=p({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(n){const e=P(!1),t=P();Ss({el:t,onBlur:s});function s(){e.value=!1}return(o,c)=>(i(),d("div",{class:"VPFlyout",ref_key:"el",ref:t,onMouseenter:c[1]||(c[1]=r=>e.value=!0),onMouseleave:c[2]||(c[2]=r=>e.value=!1)},[a("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":e.value,"aria-label":n.label,onClick:c[0]||(c[0]=r=>e.value=!e.value)},[n.button||n.icon?(i(),d("span",Ds,[n.icon?(i(),d("span",{key:0,class:N([n.icon,"option-icon"])},null,2)):h("",!0),n.button?(i(),d("span",{key:1,innerHTML:n.button},null,8,Fs)):h("",!0),c[3]||(c[3]=a("span",{class:"vpi-chevron-down text-icon"},null,-1))])):(i(),d("span",Es))],8,Rs),a("div",Hs,[g(Ms,{items:n.items},{default:m(()=>[v(o.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),kn=y(Bs,[["__scopeId","data-v-bfe7971f"]]),Us=["href","aria-label","innerHTML"],Js=p({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(n){const e=n,t=P();j(async()=>{var c;await Vn();const o=(c=t.value)==null?void 0:c.children[0];o instanceof HTMLElement&&o.className.startsWith("vpi-social-")&&(getComputedStyle(o).maskImage||getComputedStyle(o).webkitMaskImage)==="none"&&o.style.setProperty("--icon",`url('https://api.iconify.design/simple-icons/${e.icon}.svg')`)});const s=S(()=>typeof e.icon=="object"?e.icon.svg:`<span class="vpi-social-${e.icon}"></span>`);return(o,c)=>(i(),d("a",{ref_key:"el",ref:t,class:"VPSocialLink no-icon",href:n.link,"aria-label":n.ariaLabel??(typeof n.icon=="string"?n.icon:""),target:"_blank",rel:"noopener",innerHTML:s.value},null,8,Us))}}),js=y(Js,[["__scopeId","data-v-60a9a2d3"]]),Gs={class:"VPSocialLinks"},Ws=p({__name:"VPSocialLinks",props:{links:{}},setup(n){return(e,t)=>(i(),d("div",Gs,[(i(!0),d(T,null,x(n.links,({link:s,icon:o,ariaLabel:c})=>(i(),_(js,{key:s,icon:o,link:s,ariaLabel:c},null,8,["icon","link","ariaLabel"]))),128))]))}}),yn=y(Ws,[["__scopeId","data-v-e71e869c"]]),zs={key:0,class:"group translations"},Ks={class:"trans-title"},qs={key:1,class:"group"},Qs={class:"item appearance"},Xs={class:"label"},Ys={class:"appearance-action"},Zs={key:2,class:"group"},no={class:"item social-links"},eo=p({__name:"VPNavBarExtra",setup(n){const{site:e,theme:t}=L(),{localeLinks:s,currentLang:o}=K({correspondingLink:!0}),c=S(()=>s.value.length&&o.value.label||e.value.appearance||t.value.socialLinks);return(r,u)=>c.value?(i(),_(kn,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:m(()=>[l(s).length&&l(o).label?(i(),d("div",zs,[a("p",Ks,A(l(o).label),1),(i(!0),d(T,null,x(l(s),f=>(i(),_(tn,{key:f.link,item:f},null,8,["item"]))),128))])):h("",!0),l(e).appearance&&l(e).appearance!=="force-dark"&&l(e).appearance!=="force-auto"?(i(),d("div",qs,[a("div",Qs,[a("p",Xs,A(l(t).darkModeSwitchLabel||"Appearance"),1),a("div",Ys,[g(_n)])])])):h("",!0),l(t).socialLinks?(i(),d("div",Zs,[a("div",no,[g(yn,{class:"social-links-list",links:l(t).socialLinks},null,8,["links"])])])):h("",!0)]),_:1})):h("",!0)}}),to=y(eo,[["__scopeId","data-v-f953d92f"]]),so=["aria-expanded"],oo=p({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(n){return(e,t)=>(i(),d("button",{type:"button",class:N(["VPNavBarHamburger",{active:n.active}]),"aria-label":"mobile navigation","aria-expanded":n.active,"aria-controls":"VPNavScreen",onClick:t[0]||(t[0]=s=>e.$emit("click"))},[...t[1]||(t[1]=[a("span",{class:"container"},[a("span",{class:"top"}),a("span",{class:"middle"}),a("span",{class:"bottom"})],-1)])],10,so))}}),ao=y(oo,[["__scopeId","data-v-6bee1efd"]]),io=["innerHTML"],ro=p({__name:"VPNavBarMenuLink",props:{item:{}},setup(n){const{page:e}=L();return(t,s)=>(i(),_(E,{class:N({VPNavBarMenuLink:!0,active:l(G)(l(e).relativePath,n.item.activeMatch||n.item.link,!!n.item.activeMatch)}),href:n.item.link,target:n.item.target,rel:n.item.rel,"no-icon":n.item.noIcon,tabindex:"0"},{default:m(()=>[a("span",{innerHTML:n.item.text},null,8,io)]),_:1},8,["class","href","target","rel","no-icon"]))}}),lo=y(ro,[["__scopeId","data-v-815115f5"]]),co=p({__name:"VPNavBarMenuGroup",props:{item:{}},setup(n){const e=n,{page:t}=L(),s=c=>"component"in c?!1:"link"in c?G(t.value.relativePath,c.link,!!e.item.activeMatch):c.items.some(s),o=S(()=>s(e.item));return(c,r)=>(i(),_(kn,{class:N({VPNavBarMenuGroup:!0,active:l(G)(l(t).relativePath,n.item.activeMatch,!!n.item.activeMatch)||o.value}),button:n.item.text,items:n.item.items},null,8,["class","button","items"]))}}),uo={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},vo=p({__name:"VPNavBarMenu",setup(n){const{theme:e}=L();return(t,s)=>l(e).nav?(i(),d("nav",uo,[s[0]||(s[0]=a("span",{id:"main-nav-aria-label",class:"visually-hidden"}," Main Navigation ",-1)),(i(!0),d(T,null,x(l(e).nav,o=>(i(),d(T,{key:JSON.stringify(o)},["link"in o?(i(),_(lo,{key:0,item:o},null,8,["item"])):"component"in o?(i(),_(F(o.component),J({key:1,ref_for:!0},o.props),null,16)):(i(),_(co,{key:2,item:o},null,8,["item"]))],64))),128))])):h("",!0)}}),fo=y(vo,[["__scopeId","data-v-afb2845e"]]);function mo(n){const{localeIndex:e,theme:t}=L();function s(o){var O,w,M;const c=o.split("."),r=(O=t.value.search)==null?void 0:O.options,u=r&&typeof r=="object",f=u&&((M=(w=r.locales)==null?void 0:w[e.value])==null?void 0:M.translations)||null,b=u&&r.translations||null;let I=f,k=b,$=n;const V=c.pop();for(const R of c){let U=null;const z=$==null?void 0:$[R];z&&(U=$=z);const sn=k==null?void 0:k[R];sn&&(U=k=sn);const on=I==null?void 0:I[R];on&&(U=I=on),z||($=U),sn||(k=U),on||(I=U)}return(I==null?void 0:I[V])??(k==null?void 0:k[V])??($==null?void 0:$[V])??""}return s}const ho=["aria-label"],po={class:"DocSearch-Button-Container"},go={class:"DocSearch-Button-Placeholder"},An=p({__name:"VPNavBarSearchButton",setup(n){const t=mo({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(s,o)=>(i(),d("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":l(t)("button.buttonAriaLabel")},[a("span",po,[o[0]||(o[0]=a("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1)),a("span",go,A(l(t)("button.buttonText")),1)]),o[1]||(o[1]=a("span",{class:"DocSearch-Button-Keys"},[a("kbd",{class:"DocSearch-Button-Key"}),a("kbd",{class:"DocSearch-Button-Key"},"K")],-1))],8,ho))}}),_o={class:"VPNavBarSearch"},bo={id:"local-search"},ko={key:1,id:"docsearch"},yo=p({__name:"VPNavBarSearch",setup(n){const e=Wn(()=>zn(()=>import("./VPLocalSearchBox.BtTFDVWK.js"),__vite__mapDeps([0,1]))),t=()=>null,{theme:s}=L(),o=P(!1),c=P(!1);j(()=>{});function r(){o.value||(o.value=!0,setTimeout(u,16))}function u(){const k=new Event("keydown");k.key="k",k.metaKey=!0,window.dispatchEvent(k),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||u()},16)}function f(k){const $=k.target,V=$.tagName;return $.isContentEditable||V==="INPUT"||V==="SELECT"||V==="TEXTAREA"}const b=P(!1);cn("k",k=>{(k.ctrlKey||k.metaKey)&&(k.preventDefault(),b.value=!0)}),cn("/",k=>{f(k)||(k.preventDefault(),b.value=!0)});const I="local";return(k,$)=>{var V;return i(),d("div",_o,[l(I)==="local"?(i(),d(T,{key:0},[b.value?(i(),_(l(e),{key:0,onClose:$[0]||($[0]=O=>b.value=!1)})):h("",!0),a("div",bo,[g(An,{onClick:$[1]||($[1]=O=>b.value=!0)})])],64)):l(I)==="algolia"?(i(),d(T,{key:1},[o.value?(i(),_(l(t),{key:0,algolia:((V=l(s).search)==null?void 0:V.options)??l(s).algolia,onVnodeBeforeMount:$[2]||($[2]=O=>c.value=!0)},null,8,["algolia"])):h("",!0),c.value?h("",!0):(i(),d("div",ko,[g(An,{onClick:r})]))],64)):h("",!0)])}}}),So=p({__name:"VPNavBarSocialLinks",setup(n){const{theme:e}=L();return(t,s)=>l(e).socialLinks?(i(),_(yn,{key:0,class:"VPNavBarSocialLinks",links:l(e).socialLinks},null,8,["links"])):h("",!0)}}),Ao=y(So,[["__scopeId","data-v-ef6192dc"]]),$o=["href","rel","target"],Lo=["innerHTML"],Io={key:2},Po=p({__name:"VPNavBarTitle",setup(n){const{site:e,theme:t}=L(),{hasSidebar:s}=B(),{currentLang:o}=K(),c=S(()=>{var f;return typeof t.value.logoLink=="string"?t.value.logoLink:(f=t.value.logoLink)==null?void 0:f.link}),r=S(()=>{var f;return typeof t.value.logoLink=="string"||(f=t.value.logoLink)==null?void 0:f.rel}),u=S(()=>{var f;return typeof t.value.logoLink=="string"||(f=t.value.logoLink)==null?void 0:f.target});return(f,b)=>(i(),d("div",{class:N(["VPNavBarTitle",{"has-sidebar":l(s)}])},[a("a",{class:"title",href:c.value??l(pn)(l(o).link),rel:r.value,target:u.value},[v(f.$slots,"nav-bar-title-before",{},void 0,!0),l(t).logo?(i(),_(Q,{key:0,class:"logo",image:l(t).logo},null,8,["image"])):h("",!0),l(t).siteTitle?(i(),d("span",{key:1,innerHTML:l(t).siteTitle},null,8,Lo)):l(t).siteTitle===void 0?(i(),d("span",Io,A(l(e).title),1)):h("",!0),v(f.$slots,"nav-bar-title-after",{},void 0,!0)],8,$o)],2))}}),To=y(Po,[["__scopeId","data-v-9f43907a"]]),Vo={class:"items"},No={class:"title"},Oo=p({__name:"VPNavBarTranslations",setup(n){const{theme:e}=L(),{localeLinks:t,currentLang:s}=K({correspondingLink:!0});return(o,c)=>l(t).length&&l(s).label?(i(),_(kn,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:l(e).langMenuLabel||"Change language"},{default:m(()=>[a("div",Vo,[a("p",No,A(l(s).label),1),(i(!0),d(T,null,x(l(t),r=>(i(),_(tn,{key:r.link,item:r},null,8,["item"]))),128))])]),_:1},8,["label"])):h("",!0)}}),xo=y(Oo,[["__scopeId","data-v-acee064b"]]),wo={class:"wrapper"},Co={class:"container"},Mo={class:"title"},Ro={class:"content"},Do={class:"content-body"},Fo=p({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(n){const e=n,{y:t}=Nn(),{hasSidebar:s}=B(),{frontmatter:o}=L(),c=P({});return hn(()=>{c.value={"has-sidebar":s.value,home:o.value.layout==="home",top:t.value===0,"screen-open":e.isScreenOpen}}),(r,u)=>(i(),d("div",{class:N(["VPNavBar",c.value])},[a("div",wo,[a("div",Co,[a("div",Mo,[g(To,null,{"nav-bar-title-before":m(()=>[v(r.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":m(()=>[v(r.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),a("div",Ro,[a("div",Do,[v(r.$slots,"nav-bar-content-before",{},void 0,!0),g(yo,{class:"search"}),g(fo,{class:"menu"}),g(xo,{class:"translations"}),g(ys,{class:"appearance"}),g(Ao,{class:"social-links"}),g(to,{class:"extra"}),v(r.$slots,"nav-bar-content-after",{},void 0,!0),g(ao,{class:"hamburger",active:n.isScreenOpen,onClick:u[0]||(u[0]=f=>r.$emit("toggle-screen"))},null,8,["active"])])])])]),u[1]||(u[1]=a("div",{class:"divider"},[a("div",{class:"divider-line"})],-1))],2))}}),Eo=y(Fo,[["__scopeId","data-v-9fd4d1dd"]]),Ho={key:0,class:"VPNavScreenAppearance"},Bo={class:"text"},Uo=p({__name:"VPNavScreenAppearance",setup(n){const{site:e,theme:t}=L();return(s,o)=>l(e).appearance&&l(e).appearance!=="force-dark"&&l(e).appearance!=="force-auto"?(i(),d("div",Ho,[a("p",Bo,A(l(t).darkModeSwitchLabel||"Appearance"),1),g(_n)])):h("",!0)}}),Jo=y(Uo,[["__scopeId","data-v-a3e2920d"]]),jo=["innerHTML"],Go=p({__name:"VPNavScreenMenuLink",props:{item:{}},setup(n){const e=nn("close-screen");return(t,s)=>(i(),_(E,{class:"VPNavScreenMenuLink",href:n.item.link,target:n.item.target,rel:n.item.rel,"no-icon":n.item.noIcon,onClick:l(e)},{default:m(()=>[a("span",{innerHTML:n.item.text},null,8,jo)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),Wo=y(Go,[["__scopeId","data-v-fa963d97"]]),zo=["innerHTML"],Ko=p({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(n){const e=nn("close-screen");return(t,s)=>(i(),_(E,{class:"VPNavScreenMenuGroupLink",href:n.item.link,target:n.item.target,rel:n.item.rel,"no-icon":n.item.noIcon,onClick:l(e)},{default:m(()=>[a("span",{innerHTML:n.item.text},null,8,zo)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),En=y(Ko,[["__scopeId","data-v-e04f3e85"]]),qo={class:"VPNavScreenMenuGroupSection"},Qo={key:0,class:"title"},Xo=p({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(n){return(e,t)=>(i(),d("div",qo,[n.text?(i(),d("p",Qo,A(n.text),1)):h("",!0),(i(!0),d(T,null,x(n.items,s=>(i(),_(En,{key:s.text,item:s},null,8,["item"]))),128))]))}}),Yo=y(Xo,[["__scopeId","data-v-f60dbfa7"]]),Zo=["aria-controls","aria-expanded"],na=["innerHTML"],ea=["id"],ta={key:0,class:"item"},sa={key:1,class:"item"},oa={key:2,class:"group"},aa=p({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(n){const e=n,t=P(!1),s=S(()=>`NavScreenGroup-${e.text.replace(" ","-").toLowerCase()}`);function o(){t.value=!t.value}return(c,r)=>(i(),d("div",{class:N(["VPNavScreenMenuGroup",{open:t.value}])},[a("button",{class:"button","aria-controls":s.value,"aria-expanded":t.value,onClick:o},[a("span",{class:"button-text",innerHTML:n.text},null,8,na),r[0]||(r[0]=a("span",{class:"vpi-plus button-icon"},null,-1))],8,Zo),a("div",{id:s.value,class:"items"},[(i(!0),d(T,null,x(n.items,u=>(i(),d(T,{key:JSON.stringify(u)},["link"in u?(i(),d("div",ta,[g(En,{item:u},null,8,["item"])])):"component"in u?(i(),d("div",sa,[(i(),_(F(u.component),J({ref_for:!0},u.props,{"screen-menu":""}),null,16))])):(i(),d("div",oa,[g(Yo,{text:u.text,items:u.items},null,8,["text","items"])]))],64))),128))],8,ea)],2))}}),ia=y(aa,[["__scopeId","data-v-d99bfeec"]]),ra={key:0,class:"VPNavScreenMenu"},la=p({__name:"VPNavScreenMenu",setup(n){const{theme:e}=L();return(t,s)=>l(e).nav?(i(),d("nav",ra,[(i(!0),d(T,null,x(l(e).nav,o=>(i(),d(T,{key:JSON.stringify(o)},["link"in o?(i(),_(Wo,{key:0,item:o},null,8,["item"])):"component"in o?(i(),_(F(o.component),J({key:1,ref_for:!0},o.props,{"screen-menu":""}),null,16)):(i(),_(ia,{key:2,text:o.text||"",items:o.items},null,8,["text","items"]))],64))),128))])):h("",!0)}}),ca=p({__name:"VPNavScreenSocialLinks",setup(n){const{theme:e}=L();return(t,s)=>l(e).socialLinks?(i(),_(yn,{key:0,class:"VPNavScreenSocialLinks",links:l(e).socialLinks},null,8,["links"])):h("",!0)}}),ua={class:"list"},da=p({__name:"VPNavScreenTranslations",setup(n){const{localeLinks:e,currentLang:t}=K({correspondingLink:!0}),s=P(!1);function o(){s.value=!s.value}return(c,r)=>l(e).length&&l(t).label?(i(),d("div",{key:0,class:N(["VPNavScreenTranslations",{open:s.value}])},[a("button",{class:"title",onClick:o},[r[0]||(r[0]=a("span",{class:"vpi-languages icon lang"},null,-1)),D(" "+A(l(t).label)+" ",1),r[1]||(r[1]=a("span",{class:"vpi-chevron-down icon chevron"},null,-1))]),a("ul",ua,[(i(!0),d(T,null,x(l(e),u=>(i(),d("li",{key:u.link,class:"item"},[g(E,{class:"link",href:u.link},{default:m(()=>[D(A(u.text),1)]),_:2},1032,["href"])]))),128))])],2)):h("",!0)}}),va=y(da,[["__scopeId","data-v-516e4bc3"]]),fa={class:"container"},ma=p({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(n){const e=P(null),t=On(en?document.body:null);return(s,o)=>(i(),_(fn,{name:"fade",onEnter:o[0]||(o[0]=c=>t.value=!0),onAfterLeave:o[1]||(o[1]=c=>t.value=!1)},{default:m(()=>[n.open?(i(),d("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:e,id:"VPNavScreen"},[a("div",fa,[v(s.$slots,"nav-screen-content-before",{},void 0,!0),g(la,{class:"menu"}),g(va,{class:"translations"}),g(Jo,{class:"appearance"}),g(ca,{class:"social-links"}),v(s.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):h("",!0)]),_:3}))}}),ha=y(ma,[["__scopeId","data-v-2dd6d0c7"]]),pa={key:0,class:"VPNav"},ga=p({__name:"VPNav",setup(n){const{isScreenOpen:e,closeScreen:t,toggleScreen:s}=ds(),{frontmatter:o}=L(),c=S(()=>o.value.navbar!==!1);return xn("close-screen",t),X(()=>{en&&document.documentElement.classList.toggle("hide-nav",!c.value)}),(r,u)=>c.value?(i(),d("header",pa,[g(Eo,{"is-screen-open":l(e),onToggleScreen:l(s)},{"nav-bar-title-before":m(()=>[v(r.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":m(()=>[v(r.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":m(()=>[v(r.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":m(()=>[v(r.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),g(ha,{open:l(e)},{"nav-screen-content-before":m(()=>[v(r.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":m(()=>[v(r.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):h("",!0)}}),_a=y(ga,[["__scopeId","data-v-7ad780c2"]]),ba=["role","tabindex"],ka={key:1,class:"items"},ya=p({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(n){const e=n,{collapsed:t,collapsible:s,isLink:o,isActiveLink:c,hasActiveLink:r,hasChildren:u,toggle:f}=he(S(()=>e.item)),b=S(()=>u.value?"section":"div"),I=S(()=>o.value?"a":"div"),k=S(()=>u.value?e.depth+2===7?"p":`h${e.depth+2}`:"p"),$=S(()=>o.value?void 0:"button"),V=S(()=>[[`level-${e.depth}`],{collapsible:s.value},{collapsed:t.value},{"is-link":o.value},{"is-active":c.value},{"has-active":r.value}]);function O(M){"key"in M&&M.key!=="Enter"||!e.item.link&&f()}function w(){e.item.link&&f()}return(M,R)=>{const U=W("VPSidebarItem",!0);return i(),_(F(b.value),{class:N(["VPSidebarItem",V.value])},{default:m(()=>[n.item.text?(i(),d("div",J({key:0,class:"item",role:$.value},Kn(n.item.items?{click:O,keydown:O}:{},!0),{tabindex:n.item.items&&0}),[R[1]||(R[1]=a("div",{class:"indicator"},null,-1)),n.item.link?(i(),_(E,{key:0,tag:I.value,class:"link",href:n.item.link,rel:n.item.rel,target:n.item.target},{default:m(()=>[(i(),_(F(k.value),{class:"text",innerHTML:n.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(i(),_(F(k.value),{key:1,class:"text",innerHTML:n.item.text},null,8,["innerHTML"])),n.item.collapsed!=null&&n.item.items&&n.item.items.length?(i(),d("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:w,onKeydown:qn(w,["enter"]),tabindex:"0"},[...R[0]||(R[0]=[a("span",{class:"vpi-chevron-right caret-icon"},null,-1)])],32)):h("",!0)],16,ba)):h("",!0),n.item.items&&n.item.items.length?(i(),d("div",ka,[n.depth<5?(i(!0),d(T,{key:0},x(n.item.items,z=>(i(),_(U,{key:z.text,item:z,depth:n.depth+1},null,8,["item","depth"]))),128)):h("",!0)])):h("",!0)]),_:1},8,["class"])}}}),Sa=y(ya,[["__scopeId","data-v-0009425e"]]),Aa=p({__name:"VPSidebarGroup",props:{items:{}},setup(n){const e=P(!0);let t=null;return j(()=>{t=setTimeout(()=>{t=null,e.value=!1},300)}),wn(()=>{t!=null&&(clearTimeout(t),t=null)}),(s,o)=>(i(!0),d(T,null,x(n.items,c=>(i(),d("div",{key:c.text,class:N(["group",{"no-transition":e.value}])},[g(Sa,{item:c,depth:0},null,8,["item"])],2))),128))}}),$a=y(Aa,[["__scopeId","data-v-51288d80"]]),La={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},Ia=p({__name:"VPSidebar",props:{open:{type:Boolean}},setup(n){const{sidebarGroups:e,hasSidebar:t}=B(),s=n,o=P(null),c=On(en?document.body:null);H([s,o],()=>{var u;s.open?(c.value=!0,(u=o.value)==null||u.focus()):c.value=!1},{immediate:!0,flush:"post"});const r=P(0);return H(e,()=>{r.value+=1},{deep:!0}),(u,f)=>l(t)?(i(),d("aside",{key:0,class:N(["VPSidebar",{open:n.open}]),ref_key:"navEl",ref:o,onClick:f[0]||(f[0]=Qn(()=>{},["stop"]))},[f[2]||(f[2]=a("div",{class:"curtain"},null,-1)),a("nav",La,[f[1]||(f[1]=a("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),v(u.$slots,"sidebar-nav-before",{},void 0,!0),(i(),_($a,{items:l(e),key:r.value},null,8,["items"])),v(u.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):h("",!0)}}),Pa=y(Ia,[["__scopeId","data-v-42c4c606"]]),Ta=p({__name:"VPSkipLink",setup(n){const{theme:e}=L(),t=Z(),s=P();H(()=>t.path,()=>s.value.focus());function o({target:c}){const r=document.getElementById(decodeURIComponent(c.hash).slice(1));if(r){const u=()=>{r.removeAttribute("tabindex"),r.removeEventListener("blur",u)};r.setAttribute("tabindex","-1"),r.addEventListener("blur",u),r.focus(),window.scrollTo(0,0)}}return(c,r)=>(i(),d(T,null,[a("span",{ref_key:"backToTop",ref:s,tabindex:"-1"},null,512),a("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:o},A(l(e).skipToContentLabel||"Skip to content"),1)],64))}}),Va=y(Ta,[["__scopeId","data-v-fcbfc0e0"]]),Na=p({__name:"Layout",setup(n){const{isOpen:e,open:t,close:s}=B(),o=Z();H(()=>o.path,s),me(e,s);const{frontmatter:c}=L(),r=Xn(),u=S(()=>!!r["home-hero-image"]);return xn("hero-image-slot-exists",u),(f,b)=>{const I=W("Content");return l(c).layout!==!1?(i(),d("div",{key:0,class:N(["Layout",l(c).pageClass])},[v(f.$slots,"layout-top",{},void 0,!0),g(Va),g(ee,{class:"backdrop",show:l(e),onClick:l(s)},null,8,["show","onClick"]),g(_a,null,{"nav-bar-title-before":m(()=>[v(f.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":m(()=>[v(f.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":m(()=>[v(f.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":m(()=>[v(f.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":m(()=>[v(f.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":m(()=>[v(f.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),g(us,{open:l(e),onOpenMenu:l(t)},null,8,["open","onOpenMenu"]),g(Pa,{open:l(e)},{"sidebar-nav-before":m(()=>[v(f.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":m(()=>[v(f.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),g(Kt,null,{"page-top":m(()=>[v(f.$slots,"page-top",{},void 0,!0)]),"page-bottom":m(()=>[v(f.$slots,"page-bottom",{},void 0,!0)]),"not-found":m(()=>[v(f.$slots,"not-found",{},void 0,!0)]),"home-hero-before":m(()=>[v(f.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":m(()=>[v(f.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":m(()=>[v(f.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":m(()=>[v(f.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":m(()=>[v(f.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":m(()=>[v(f.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":m(()=>[v(f.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":m(()=>[v(f.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":m(()=>[v(f.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":m(()=>[v(f.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":m(()=>[v(f.$slots,"doc-before",{},void 0,!0)]),"doc-after":m(()=>[v(f.$slots,"doc-after",{},void 0,!0)]),"doc-top":m(()=>[v(f.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":m(()=>[v(f.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":m(()=>[v(f.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":m(()=>[v(f.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":m(()=>[v(f.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":m(()=>[v(f.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":m(()=>[v(f.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":m(()=>[v(f.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),g(Zt),v(f.$slots,"layout-bottom",{},void 0,!0)],2)):(i(),_(I,{key:1}))}}}),Oa=y(Na,[["__scopeId","data-v-d8b57b2d"]]),$n={Layout:Oa,enhanceApp:({app:n})=>{n.component("Badge",Yn)}},xa={class:"turna-home"},wa={class:"home-section","aria-labelledby":"route-title"},Ca={class:"route-grid"},Ma=["aria-label"],Ra=["href"],Da={class:"home-section capability-section","aria-labelledby":"capability-title"},Fa={class:"capability-grid glass-panel"},Ea=["href"],Ha={class:"capability-code"},Ba={class:"home-section","aria-labelledby":"loop-title"},Ua={class:"loop-list"},Ja={class:"inline-actions"},ja=["href"],Ga=["href"],Wa={class:"home-section data-section","aria-labelledby":"data-title"},za={class:"data-copy"},Ka=["href"],qa={class:"home-section","aria-labelledby":"snapshot-title"},Qa={class:"snapshot-grid"},Xa={class:"section-intro"},Ya=["href"],Za={class:"facts-panel glass-panel"},ni={class:"home-section author-banner glass-panel","aria-labelledby":"author-title"},ei=["href"],ti=["href"],si={class:"home-section quick-links","aria-labelledby":"quick-title"},oi={class:"reference-grid"},ai=["href"],ii=["href"],ri=["href"],li=["href"],ci=p({__name:"HomeContent",setup(n){const e=[{index:"01",label:"LEARNING",title:"学习与复习",copy:"确认运行要求，了解课程组织与每日复习流程，然后开始第一节课程。",links:[{text:"Turna 是什么",href:"/guide/what-is-turna"},{text:"快速开始",href:"/guide/getting-started"},{text:"课程结构",href:"/guide/curriculum"}]},{index:"02",label:"MIGRATION",title:"Anki 牌组迁移",copy:"检查 .apkg 导入、Official Collection 所有权、卡片渲染方式与正式调度边界。",links:[{text:"导入牌组",href:"/guide/anki-import"},{text:"渲染与隔离",href:"/guide/anki-rendering"},{text:"复习系统",href:"/guide/review-system"}]},{index:"03",label:"AUTHORING",title:"课程生产",copy:"按 Section、Unit、Lesson 三级结构组织内容，并通过编辑器完成校验与验收。",links:[{text:"教师指南",href:"/authoring/teacher-guide"},{text:"课型说明",href:"/guide/lesson-types"},{text:"目录约定",href:"/authoring/course-layout"}]},{index:"04",label:"ENGINEERING",title:"开发与构建",copy:"检查客户端分层、本地数据所有权、Android 发布、Web 构建与质量门禁。",links:[{text:"架构总览",href:"/developer/architecture"},{text:"Android 构建",href:"/developer/android-build"},{text:"测试门禁",href:"/developer/testing"}]}],t=[{code:"LOCAL",title:"本地数据层",copy:"课程、牌组与学习记录默认保存在设备上；离线状态下保留完整学习与复习能力。",href:"/guide/features#离线与本地优先"},{code:"FSRS",title:"记忆调度器",copy:"使用 21 参数 FSRS-6 更新记忆状态，并计算下一次复习时间。",href:"/guide/fsrs"},{code:"ANKI",title:"Anki 兼容层",copy:"Android 生产路径导入 .apkg，由 Official Collection 持有卡片和调度状态。",href:"/guide/anki"},{code:"PATH",title:"课程路径",copy:"按 CEFR A1–B2 组织内容，通过先修关系连接可独立完成的短课时。",href:"/guide/curriculum"},{code:"ASSIST",title:"上下文辅助",copy:"基于当前句子、语法和错题提供分层提示；关闭 AI 不影响核心流程。",href:"/guide/ai"},{code:"STUDIO",title:"课程编辑器",copy:"在桌面端编辑课程结构与内容，保存前执行校验，并通过教师模式验收。",href:"/guide/editor"}],s=[{n:"01",title:"选择课时",copy:"根据 CEFR 等级、完成状态与先修关系确定下一课。"},{n:"02",title:"输入内容",copy:"通过词汇、示例、听力与分层提示建立初始理解。"},{n:"03",title:"执行检索",copy:"使用选择、填空、翻译或听写验证知识提取能力。"},{n:"04",title:"更新状态",copy:"根据结果更新难度、稳定度与本地学习记录。"},{n:"05",title:"调度复习",copy:"FSRS 计算复习时间，并将薄弱内容重新接入练习流程。"}],o=[["课程范围","土耳其语 CEFR A1–B2"],["内容结构","8 Section · 11 Unit · 54 Lesson"],["学习素材","148 词汇 · 18 表达 · 37 音频"],["复习引擎","FSRS-6 · 21 参数"]];return(c,r)=>(i(),d("div",xa,[r[22]||(r[22]=an('<section class="home-signal glass-panel" aria-label="文档概览"><div class="signal-copy"><span class="micro-label">DOCUMENT INDEX / REV.01</span><h2>从系统运行到课程生产，<br>按任务查阅。</h2><p>文档按学习者、Anki 用户、课程作者和开发者四类任务组织，提供操作步骤、行为说明与数据约束。</p></div><dl class="signal-stats"><div><dt>41</dt><dd>技术文档</dd></div><div><dt>04</dt><dd>任务入口</dd></div><div><dt>100%</dt><dd>离线主流程</dd></div></dl></section>',1)),a("section",wa,[r[1]||(r[1]=a("div",{class:"section-kicker"},[a("span",null,"START HERE"),a("i")],-1)),r[2]||(r[2]=a("div",{class:"section-intro"},[a("h2",{id:"route-title"},"选择任务入口"),a("p",null,"每条路径只包含完成当前任务所需的核心页面，无需顺序阅读全部文档。")],-1)),a("div",Ca,[(i(),d(T,null,x(e,u=>a("article",{key:u.title,class:"route-card glass-panel"},[a("header",null,[a("span",null,A(u.index),1),a("small",null,A(u.label),1)]),a("h3",null,A(u.title),1),a("p",null,A(u.copy),1),a("nav",{"aria-label":`${u.title}推荐阅读`},[(i(!0),d(T,null,x(u.links,f=>(i(),d("a",{key:f.href,href:l(C)(f.href)},[D(A(f.text),1),r[0]||(r[0]=a("span",{"aria-hidden":"true"},"↗",-1))],8,Ra))),128))],8,Ma)])),64))])]),a("section",Da,[r[4]||(r[4]=a("div",{class:"section-kicker"},[a("span",null,"SYSTEM MAP"),a("i")],-1)),r[5]||(r[5]=a("div",{class:"section-intro split-intro"},[a("h2",{id:"capability-title"},"系统能力与职责边界"),a("p",null,"课程提供输入，练习执行检索，FSRS 负责调度。Anki、AI 与编辑器分别处理内容迁移、上下文辅助和课程生产。")],-1)),a("div",Fa,[(i(),d(T,null,x(t,u=>a("a",{key:u.code,href:l(C)(u.href),class:"capability-item"},[a("span",Ha,A(u.code),1),a("h3",null,A(u.title),1),a("p",null,A(u.copy),1),r[3]||(r[3]=a("span",{class:"text-link"},[D("查看规格 "),a("b",{"aria-hidden":"true"},"→")],-1))],8,Ea)),64))])]),a("section",Ba,[r[6]||(r[6]=a("div",{class:"section-kicker"},[a("span",null,"LEARNING LOOP"),a("i")],-1)),r[7]||(r[7]=a("div",{class:"section-intro"},[a("h2",{id:"loop-title"},"课程学习与记忆调度闭环"),a("p",null,"新内容学习与旧内容复习共享同一学习状态，系统据此连续更新课程进度与调度结果。")],-1)),a("ol",Ua,[(i(),d(T,null,x(s,u=>a("li",{key:u.n},[a("span",null,A(u.n),1),a("div",null,[a("h3",null,A(u.title),1),a("p",null,A(u.copy),1)])])),64))]),a("div",Ja,[a("a",{class:"glass-button primary",href:l(C)("/guide/fsrs")},"理解 FSRS 调度",8,ja),a("a",{class:"glass-button",href:l(C)("/guide/lesson-types")},"查看六种课型",8,Ga)])]),a("section",Wa,[a("div",za,[r[9]||(r[9]=an('<div class="section-kicker"><span>DATA BOUNDARY</span><i></i></div><h2 id="data-title">核心状态默认保留在本地设备。</h2><p>离线运行是默认模式。课程、牌组、复习状态和进度不依赖账号或持续网络连接。</p><ul><li><span>01</span>核心功能无需账号</li><li><span>02</span>学习记录默认不上行</li><li><span>03</span>未配置 AI 时使用本地内容</li><li><span>04</span>同步与更新由用户主动触发</li></ul>',4)),a("a",{class:"text-link standalone",href:l(C)("/guide/features#离线与本地优先")},[...r[8]||(r[8]=[D("了解本地优先原则 ",-1),a("b",{"aria-hidden":"true"},"→",-1)])],8,Ka)]),r[10]||(r[10]=an('<div class="data-window glass-panel" aria-label="数据流向示意"><div class="window-bar"><span></span><span></span><span></span><small>turna / local workspace</small></div><div class="data-node device"><small>YOUR DEVICE</small><strong>学习工作区</strong><p>课程 · 牌组 · 记忆状态 · 设置</p></div><div class="data-connector"><i></i><span>主动选择时</span><i></i></div><div class="data-optional"><div><small>OPTIONAL</small><strong>课程更新</strong></div><div><small>OPTIONAL</small><strong>AI 服务</strong></div></div></div>',1))]),a("section",qa,[r[13]||(r[13]=a("div",{class:"section-kicker"},[a("span",null,"CURRICULUM SNAPSHOT"),a("i")],-1)),a("div",Qa,[a("div",Xa,[r[11]||(r[11]=a("h2",{id:"snapshot-title"},"课程范围与当前数据快照",-1)),r[12]||(r[12]=a("p",null,"当前课程以土耳其语为主，按 CEFR 分级，通过短课时与先修关系控制学习顺序。以下数据来自当前课程清单。",-1)),a("a",{class:"glass-button primary",href:l(C)("/guide/curriculum")},"打开课程结构",8,Ya)]),a("dl",Za,[(i(),d(T,null,x(o,u=>a("div",{key:u[0]},[a("dt",null,A(u[0]),1),a("dd",null,A(u[1]),1)])),64))])])]),a("section",ni,[r[14]||(r[14]=a("div",null,[a("span",{class:"micro-label"},"COURSE PRODUCTION"),a("h2",{id:"author-title"},"建立可校验、可验收的课程单元。"),a("p",null,"教师指南覆盖目录准备、课时创建、词汇引用、题目配置、保存校验与教师模式验收，不要求预先理解完整代码库。")],-1)),r[15]||(r[15]=a("div",{class:"author-steps","aria-label":"课程创作步骤"},[a("span",null,"结构"),a("i"),a("span",null,"内容"),a("i"),a("span",null,"校验"),a("i"),a("span",null,"试听")],-1)),a("nav",null,[a("a",{class:"glass-button primary",href:l(C)("/authoring/teacher-guide")},"开始创作课程",8,ei),a("a",{class:"glass-button",href:l(C)("/guide/editor")},"认识编辑器",8,ti)])]),a("section",si,[r[20]||(r[20]=a("div",{class:"section-kicker"},[a("span",null,"REFERENCE"),a("i")],-1)),r[21]||(r[21]=a("h2",{id:"quick-title"},"常用操作索引",-1)),a("div",oi,[a("a",{href:l(C)("/guide/getting-started")},[...r[16]||(r[16]=[a("small",null,"SETUP",-1),a("strong",null,"安装、启动与构建",-1),a("span",null,"→",-1)])],8,ai),a("a",{href:l(C)("/guide/anki-import")},[...r[17]||(r[17]=[a("small",null,"IMPORT",-1),a("strong",null,"导入现有 Anki 牌组",-1),a("span",null,"→",-1)])],8,ii),a("a",{href:l(C)("/guide/ai")},[...r[18]||(r[18]=[a("small",null,"ASSIST",-1),a("strong",null,"配置或关闭 AI 伴学",-1),a("span",null,"→",-1)])],8,ri),a("a",{href:l(C)("/guide/writing-docs")},[...r[19]||(r[19]=[a("small",null,"CONTRIBUTE",-1),a("strong",null,"为文档增加新页面",-1),a("span",null,"→",-1)])],8,li)])])]))}}),ui=`# 音频资产

人工录音用于听力课、长短语和对话。单词与短表达保持运行时 TTS，不为每个词捆绑独立录音。

## 格式

| 属性 | 要求 |
| --- | --- |
| 容器 | MP3 |
| 采样率 | 44.1 kHz |
| 声道 | 单声道优先，接受立体声 |
| 比特率 | 至少 128 kbps |
| 前后静音 | 各不超过 0.3 秒 |

## 路径

\`\`\`text
assets/sounds/turkish/listening/
\`\`\`

文件名必须与课程 JSON 中 \`audioAsset\` 的标识符一致并加 \`.mp3\`。不要仅添加文件而不更新引用，也不要仅添加引用而不提交文件。

\`bgm/\`、\`debut/\` 和 \`fin/\` 用于听力节目格式的混音资产。普通人工对话录音放在 listening 根目录。

## 录音要求

- 使用土耳其语母语者或达到流利程度的说话者。
- 环境噪声保持低且稳定。
- 麦克风距离约 10–20 cm，并控制爆破音。
- 使用自然、清晰、面向学习者的速度。
- 不使用夸张语调。
- 峰值不得削波。
- 不包含未经许可的音乐或第三方内容。

## 替换生成音频

人工录音可以覆盖同 ID 的 TTS 生成文件。提交说明中标记替换关系。ID 保持不变，因此 Lesson JSON 无需因音质替换而修改。

## 校验

\`\`\`bash
python tool/course_cli.py validate --course-dir assets/courses/turkish
python tool/course_cli.py audio-manifest --output /tmp/manifest.csv
\`\`\`

检查清单：

- 资产在 manifest 中出现。
- JSON 引用与文件名一致。
- 文件可在目标设备解码。
- 音量与相邻素材接近。
- 无超长静音。
- 听力题有重播和必要文本边界。

## 授权

提交者必须拥有录音版权或授权，并允许项目长期、免版税地随 Turna 分发。录音不得包含未授权背景音乐。

## 相关文档

- [音频、TTS 与朗读](/guide/audio-and-tts)
- [Lesson JSON 结构](/authoring/lesson-schema)
- [发布检查表](/authoring/release-checklist)
`,di="# 课程目录约定\n\nApp **不以 SQLite 为真理源**。课程是磁盘上的 JSON；数据库只是启动后的派生缓存。编辑器、CLI 和 CI 都按同一套目录读写。\n\n完整字段合同见应用仓库 `docs/authoring/course-layout.md`。\n\n## 目录\n\n```text\nassets/courses/<lang>/\n  index.json                 # 版本、语言、Section 列表与文件指针\n  vocab.json                 # 词表\n  expressions.json           # 表达\n  grammar_points.json        # 语法点\n  sections/\n    section1.json            # 该 Section 的 Unit → Lesson → 内容\n    ...\n```\n\n土耳其语默认目录是 `assets/courses/turkish/`。\n\n## 关键字段\n\n`index.json`：\n\n- `version`：课程语义一变就加一，App 按版本决定是否重新导入。\n- `sections[]`：`id`、`name`、`description`、`level`、`prerequisiteSectionIds`、`file`。\n- `file` 相对课程根目录，例如 `sections/section1.json`。\n\nSection 文件：\n\n- Section → Unit → Lesson。\n- Lesson 含 `id`、`name`、`type`、`template`、`content`、先修等。\n- 新内容用规范形状：`stages` / `subLessons` / `listeningPhases`。扁平 `questions` 仅兼容旧课。\n\n## 规模上限\n\n| 限制 | 值 |\n| --- | ---: |\n| 每个 Section 的 Unit | ≤ 60 |\n| 每个 Unit 的 Lesson | ≤ 40（生产目标大约 30） |\n\n保存时编辑器、`course_cli validate` 和 App 导入会检查这些上限。\n\n## 校验\n\n改完 JSON 后在应用仓库执行：\n\n```bash\npython tool/course_cli.py validate --course-dir assets/courses/turkish\npython tool/course_cli.py lint --course-dir assets/courses/turkish\n```\n\n## 下一步\n\n- [教师指南](/authoring/teacher-guide)\n- [课型说明](/guide/lesson-types)\n",vi='# Lesson JSON 结构\n\nLesson 是课程发布和运行时加载的基本内容单元。新内容使用 canonical shape，不使用扁平 `questions` 作为主要结构。\n\n## 顶层字段\n\n```json\n{\n  "id": "l-u1-greetings-intro",\n  "name": "Greetings / Intro",\n  "description": "Introduce greeting forms.",\n  "type": "normal",\n  "template": "intro",\n  "prerequisiteLessonIds": [],\n  "linkedGrammarPointIds": [],\n  "content": {\n    "subLessons": []\n  }\n}\n```\n\n| 字段 | 要求 |\n| --- | --- |\n| `id` | 全课程稳定且唯一；发布后不可因重排修改 |\n| `name` | 用户可见名称，可修改 |\n| `description` | 描述本课的可验证目标 |\n| `type` | `normal`、`listening`、`reading`、`review`、`challenge` |\n| `template` | `intro`、`practice`、`listening`、`reading`、`review`、`mastery`、`legacy` |\n| `prerequisiteLessonIds` | 先修 Lesson ID 列表 |\n| `content` | 与模板匹配的 canonical 内容 |\n\n## Canonical content\n\n| 模板 | 首选字段 |\n| --- | --- |\n| `intro` / `practice` | `subLessons[].stages[]` |\n| `listening` | `listeningPhases[]` |\n| `reading` | `readingPassage` + `stages[]` |\n| `review` | `subLessons[]` 或 `stages[]` |\n| `mastery` | `stages[]` |\n| `legacy` | 仅兼容已有数据 |\n\n## Stage\n\n```json\n{\n  "id": "st-greetings-recognition",\n  "name": "Recognition",\n  "items": [\n    {\n      "runtimeType": "multipleChoice",\n      "id": "q-greetings-meaning-1",\n      "prompt": "Select the matching meaning.",\n      "options": ["Hello", "Thanks", "Goodbye"],\n      "correctAnswer": "Hello"\n    }\n  ]\n}\n```\n\nStage ID 和 Interaction ID 应具备稳定语义。不要使用数组索引作为发布 ID。\n\n## 先修规则\n\n- 同 Unit 内的 Lesson 可以引用先修 Lesson。\n- 引用目标必须存在。\n- 依赖图不得形成环。\n- 显示顺序不等于先修关系。\n- 跨 Unit 或 Section 的流程优先在更高层定义。\n\n## 引用规则\n\n`wordId`、`expressionId`、`grammarPointId` 必须来自课程级资源文件。题目中可以出现文本，但不得用重复文本替代需要长期追踪的资源 ID。\n\n## 禁止形状\n\n- 未注册的 `runtimeType`。\n- 新 Lesson 使用旧扁平 `questions` 而无兼容理由。\n- 同 ID 的不同语义对象。\n- 在 Lesson 内复制整份词表。\n- 引用不存在的音频或资源。\n- 将编辑器临时状态写入课程 JSON。\n\n## 相关文档\n\n- [交互题型](/guide/interaction-types)\n- [资源文件](/authoring/resource-files)\n- [课型说明](/guide/lesson-types)\n',fi=`# 发布检查表

课程发布是可重复流程。完成编辑不等于可以发布。

## 1. 变更范围

- 只修改目标 Section 和必要资源文件。
- 不格式化或重排无关大文件。
- 不修改已发布 ID。
- 新增 ID 全局唯一。
- 删除资源前已处理全部引用。

## 2. 内容结构

- Lesson type 与 template 匹配。
- 新 Lesson 使用 canonical content shape。
- 先修依赖存在且无环。
- 每个 Unit 与 Section 未超过规模上限。
- Interaction 使用已注册 runtimeType。
- 正确答案、选项与音频引用完整。

## 3. 自动检查

\`\`\`bash
python tool/course_cli.py validate --course-dir assets/courses/turkish
python tool/course_cli.py lint --course-dir assets/courses/turkish
python tool/export_content_inventory.py
flutter test
\`\`\`

任何非零退出码阻止发布。

## 4. 教师试做

- 按学员顺序完成受影响 Lesson。
- 检查首次输入、产出难度和提示顺序。
- 播放全部新音频。
- 故意提交错误答案，检查反馈与错题。
- 检查 Lesson 结束和下一课解锁。
- 在至少一种小屏设备上检查长文本。

## 5. 版本

- 课程语义变化增加 \`index.json\` version。
- 表达文件变化按合同增加 expressions version。
- 版本只递增，不复用已发布版本。
- 客户端重新启动后实际执行 reseed。

## 6. 数据验证

- 现有用户进度不因 ID 改写而孤立。
- reseed 后课程树数量正确。
- 新资源可从 Lesson 解析。
- 复习状态未被课程缓存清理误删。
- 内容清单规模变化与预期一致。

## 7. 提交说明

记录：

- 修改的 Section / Unit / Lesson。
- 新增和删除的资源数。
- 版本变化。
- 校验命令结果。
- 人工试做范围。
- 音频来源与授权（如适用）。

## 8. 回滚

发布前保留上一个可用 JSON 版本。回滚内容时仍需使用新的、递增的内容版本，不能简单恢复旧版本号并假设客户端会重新导入。

## 相关文档

- [校验与 Lint](/authoring/validation)
- [课程目录约定](/authoring/course-layout)
- [教师指南](/authoring/teacher-guide)
`,mi=`# 资源文件

课程级资源与 Lesson 分离。Lesson 使用稳定 ID 引用词汇、表达和语法点，不在每节课中复制完整资源对象。

## 文件

\`\`\`text
assets/courses/<lang>/
  vocab.json
  expressions.json
  grammar_points.json
\`\`\`

## 词汇

词汇对象至少需要稳定 \`id\`、目标语形式和释义。可选内容包括例句、词性、音频引用和附加标签。确切字段以当前应用模型和校验器为准。

规则：

- 相同词项不要因为出现在不同 Lesson 而创建多个 ID。
- 同形异义项需要在释义或语法功能确实不同且运行时需要区分时拆分。
- 发布后的 ID 不随显示名称调整。
- Lesson 的 \`wordId\` 必须指向已有对象。

## 表达

\`expressions.json\` 有独立版本。表达是多词单位、固定搭配或需要整体学习的结构。单个普通词不应为了添加例句而升级为 expression。

课程重新导入键由课程索引版本与表达版本组合。修改表达语义时同时处理版本。

## 语法点

语法点使用稳定 ID 被 Lesson 的 \`linkedGrammarPointIds\` 等字段引用。语法点描述规则；练习题仍位于 Lesson 内容中。

一个语法点应包含：

- 可检索标题。
- 明确规则范围。
- 目标级别或使用条件。
- 足够但有限的例子。
- 与其它语法点不重叠的边界。

## 引用完整性

\`\`\`text
resource file owns object
  <- Lesson references stable id
  <- Interaction references stable id
  <- validator checks existence
\`\`\`

删除资源前必须先查询所有引用。自动修复可以对齐明确的重复 ID，不得凭相似字符串静默改写引用。

## 去重

教材导入使用规范化 key 检测项目内重复和与现有课程碰撞。推荐人工确认：

1. 比较 term 与 translation。
2. 检查词性和实际语义。
3. 选择保留已有 ID 或建立新义项。
4. 重写草稿引用。
5. 运行 validate 与 lint。

## 变更步骤

1. 修改资源文件。
2. 更新所有受影响 Lesson 引用。
3. 运行校验。
4. 生成内容清单检查规模和孤立项。
5. 增加相应内容版本。
6. 在客户端执行重新导入验证。

## 相关文档

- [课程目录约定](/authoring/course-layout)
- [Lesson JSON 结构](/authoring/lesson-schema)
- [校验与 Lint](/authoring/validation)
`,hi=`# 教师指南

面向不写代码的老师：用桌面编辑器打开课程文件夹，新增或改一节「认识新词」（intro）课，保存前用教师模式把题目点一遍。

编辑器能力总览见 [课程编辑器](/guide/editor)。完整逐步说明（含验收标准）在应用仓库 \`docs/authoring/teacher-guide.md\`。

## 准备一次即可

1. 拿到 \`turna-gui.exe\`（或对应平台的可执行文件），双击运行，不需要安装 Python。
2. 向技术人员要一份课程目录副本，例如桌面上的 \`我的课程/turkish/\`。不要直接改团队共享目录，改完再合并。

## 产出一节 intro 课

1. 打开课程目录。左侧出现 Section → Unit → Lesson。
2. 在目标 Unit 上右键 →「新增 Lesson」。程序会生成 id，老师只填名称。
3. 填写名称、一句话描述，以及同 Unit 内必须先完成的课。
4. 课型选 **intro（认识新词）**。模板会生成默认结构：展示新词 → 选择释义 → 填空巩固。
5. 把词汇和题目填进各阶段。词汇应来自课程的 \`vocab.json\`，不要在课时里发明另一套词表。
6. 保存。校验失败会回滚，不会留下半截 JSON。
7. 打开教师模式，按学员顺序做一遍，确认音频、正确答案和先修关系。

## 常见约束

- 每个 Section 的 Unit 数、每个 Unit 的课时数有上限（见 [课程目录约定](/authoring/course-layout)）。
- 先修只在同 Unit 内勾选，跨 Unit / Section 的解锁由课程树更高层处理。
- 听力课需要音频资源；没有音频时先做 intro / practice，再补听力。

## 下一步

- [课程目录约定](/authoring/course-layout)
- [课型说明](/guide/lesson-types)
`,pi=`# 教材导入

教材导入是半自动课程生产流程。模型负责抽取和生成草稿；课程作者负责审校、冲突处理、验证与发布。

## 支持输入

| 类型 | 支持范围 |
| --- | --- |
| Markdown / 文本 | UTF-8，按标题切章 |
| PDF | 文本原生 PDF；扫描 PDF 不承诺 OCR |
| Word | \`.doc\` / \`.docx\`，需要 python-docx |
| 图片 | 作为 vision 附件；取决于所配置模型 |

源文件保留在作者控制的位置。项目文件只保存引用与抽取结果，不复制源文件本体。

## 工作区

课程工坊由项目库和三栏创作画布组成：

- 左栏：教材、章节、知识点审校与资源池。
- 中栏：AI 轨道、主题、级别、模板与生成控制。
- 右栏：结构大纲、草稿、diff、局部重生成和导入。

项目保存到 \`tool/gui/var/textbooks/{project_id}/project.json\`，允许中断后恢复。

## 流程

1. 选择文件并提取文本。
2. 按章节切分。
3. 选择教材预设与并发数。
4. 抽取词汇、表达、语法点和对话。
5. 处理红色错误和黄色警告。
6. 将确认资源加入资源池。
7. 生成 Section 与 Lesson 草稿。
8. 查看结构、覆盖率和 JSON diff。
9. 选择冲突策略。
10. 导入到内存课程项目。
11. 手动保存并运行 validate、lint。

## 预设

| 预设 | 目标 | 默认倾向 |
| --- | --- | --- |
| general | 通用教材 | 均衡抽取 |
| grammar | 语法书 | 低温度、强调规则 |
| dialogue | 对话书 | 强调表达与口语 |
| reading | 阅读材料 | 以词汇抽取为主 |

预设影响抽取参数，不免除审校。

## 冲突策略

| 策略 | 行为 |
| --- | --- |
| 合并预览 | 显示差异并逐项决定，默认 |
| 跳过已存在 | 保留现有 Section |
| 覆盖已存在 | 整体替换，风险最高 |
| 作为新 Section | 生成新 ID 后并存 |

## 去重

项目内相同知识点统一到首次 ID；与现有课程碰撞时可以对齐已有 ID。自动去重依据规范化 key，作者必须检查同形异义和释义冲突。

## 失败处理

- 未切章：检查 Markdown 标题层级。
- PDF 无文本：在外部完成 OCR 并转为 Markdown。
- 单章抽取失败：重试、仅抽词汇或跳过。
- JSON 不通过：返回草稿修复，不直接覆盖课程。
- 价格未知：只显示 Token，不生成误导性成本。

## 相关文档

- [课程编辑器](/guide/editor)
- [资源文件](/authoring/resource-files)
- [校验与 Lint](/authoring/validation)
`,gi=`# 校验与 Lint

课程发布前同时执行结构校验和内容 lint。结构校验回答“能否安全加载”；lint 回答“是否符合生产约定”。两者不能互相替代。

## 命令

\`\`\`bash
python tool/course_cli.py validate --course-dir assets/courses/turkish
python tool/course_cli.py lint --course-dir assets/courses/turkish
\`\`\`

GUI 和 CI 使用机器可读输出：

\`\`\`bash
python tool/course_cli.py validate \\
  --format json \\
  --course-dir assets/courses/turkish
\`\`\`

退出码 0 表示通过，非 0 表示存在错误。

## JSON 输出

\`\`\`json
{
  "ok": false,
  "errorCount": 1,
  "problems": [
    {
      "level": "error",
      "message": "...",
      "path": "section:section4/unit:u-1"
    }
  ]
}
\`\`\`

调用方应根据退出码和 \`ok\` 判定结果，不通过解析自然语言日志推断成功。

## 结构校验范围

- 所有 JSON 可解析。
- 索引文件指向存在的 Section 文件。
- Section、Unit、Lesson 层级合法。
- Unit 和 Lesson 不超过规模上限。
- ID 唯一。
- 先修引用存在且无明显环。
- Lesson type、template 与 content shape 相容。
- Interaction runtimeType 已知。
- 资源和音频引用可解析。

## Lint 范围

- 命名和 ID 模式一致性。
- 新内容是否使用 canonical shape。
- 孤立或重复资源。
- 空描述、空选项和低质量占位内容。
- 可能错误但不一定阻止加载的生产问题。

## GUI 保存

编辑器保存前调用相同规则。验证失败时：

1. 禁用最终保存。
2. 标记问题节点。
3. 保留内存中的用户编辑。
4. 不留下半写 JSON。
5. 允许修复后重新验证。

## 与 Dart 对齐

Flutter 测试同时覆盖 Dart validator，防止 Python CLI 与应用 seeder 规则分叉。修改规模上限或内容合同，需要同步修改两端并增加测试。

## 发布门禁

通过 validate 与 lint 只是必要条件。还需执行教师试做、版本增加、内容清单检查和客户端重新导入。

## 相关文档

- [发布检查表](/authoring/release-checklist)
- [课程目录约定](/authoring/course-layout)
- [测试与质量门禁](/developer/testing)
`,_i=`# Android 构建

Android 是当前主力发布平台。构建使用官方 Flutter SDK 与 JDK 17。OHOS fork、OHOS target 和相关补丁不属于当前构建链。

## 环境

\`\`\`bash
flutter --version
java -version
flutter doctor
\`\`\`

要求：

- Flutter 官方 stable，满足项目 \`pubspec.yaml\` SDK 范围。
- JDK 17。
- Android SDK、platform-tools、build-tools 和项目要求的 NDK。
- \`android/local.properties\` 中的 SDK 路径有效。

## 首次构建

\`\`\`bash
flutter pub get
flutter build apk --debug
\`\`\`

生成代码已提交。只有修改 Freezed、JsonSerializable、AutoRoute 或 Injectable 注解时执行：

\`\`\`bash
flutter pub run build_runner build --delete-conflicting-outputs
\`\`\`

## 发布 ABI

Official Anki native 库当前按 arm64-v8a 交付。发布命令：

\`\`\`bash
flutter build apk \\
  --release \\
  --split-per-abi \\
  --target-platform android-arm64
\`\`\`

未包含匹配 native 库时，不发布声称支持其它 ABI 的 fat APK。Official runtime 缺失时 fail closed，不回退到 Legacy scheduler。

## 质量命令

\`\`\`bash
flutter analyze
flutter test
make test-python
make ci
\`\`\`

\`make ci\` 聚合 analyze、Dart 测试、Python 工具测试和 release smoke。

## 常见错误

| 错误 | 原因 | 处理 |
| --- | --- | --- |
| JVM runtime 过旧 | \`JAVA_HOME\` 指向 Java 8/11 | 改为 JDK 17并重启终端 |
| \`sdk.dir\` 缺失 | Android SDK 未配置 | 用 Android Studio 初始化或写 local.properties |
| NDK / license 错误 | SDK 组件不完整 | 安装项目要求版本并接受许可 |
| native library 缺失 | ABI 与 Official 库不匹配 | 使用 arm64 发布命令 |
| 生成文件冲突 | 注解模型变更未生成 | 执行 build_runner 并检查 diff |

## 发布脚本

\`\`\`bash
python tool/build_release.py --version <version>
# 或
make build-release VERSION=<version>
\`\`\`

版本值由发布流程决定，不复制文档中的示例版本作为新版本。

## 相关文档

- [安装应用](/guide/install-app)
- [测试与质量门禁](/developer/testing)
- [故障排查](/guide/troubleshooting)
`,bi=`# 架构总览

Turna 客户端采用 Clean Architecture 风格分层，并使用 Provider、ChangeNotifier、GetIt / Injectable 和 Auto Route。分层目标是限制数据所有权和依赖方向，不是增加形式目录。

## 目录职责

\`\`\`text
lib/
  application/   状态容器、应用服务、工作流编排
  core/          FSRS、语言检测、纯函数与基础策略
  courses/       课程 loader 与 validator
  data/          drift 数据库、DAO、Repository 实现
  di/            GetIt / Injectable 注册
  domain/        不可变领域模型与 Repository 接口
  routing/       Auto Route 与启动守卫
  service/       偏好、TTS、本地服务
  views/         页面与组件
\`\`\`

## 依赖方向

\`\`\`text
views
  -> application
  -> domain <- data
  -> core

application -> domain / core
data -> domain
domain -> no UI dependency
\`\`\`

界面不直接执行数据库迁移或课程文件写入。领域模型不依赖 Flutter Widget。

## 状态管理

Provider + ChangeNotifier 同时承担状态广播和应用服务注入。复杂功能拆分为专用 provider，\`GameProvider\` 等 facade 只负责聚合和转发，不复制状态。

并发状态必须显式表示。例如复习评分使用 in-flight 集合阻止评分与撤销竞态，AI 使用取消令牌和幂等键控制在途请求。

## 依赖注入

GetIt 与 Injectable 注册 renderer、service 和 repository。生成文件由 \`build_runner\` 产生并提交。新增注解后需要重新生成；普通业务代码修改不需要。

## 路由

全屏页面使用 Auto Route。\`CourseReadyGuard\` 在课程数据库未准备完成时重定向到启动页。底部主 Tab 使用 IndexedStack，不伪装为 push/pop 路由。

平台默认：

- Android：Material 路由和预测返回。
- iOS / macOS：Cupertino 路由和边缘返回。
- Web：无页面转场。

调用点不直接构造任意 \`MaterialPageRoute\`、\`CupertinoPageRoute\` 或自定义 PageRouteBuilder。

## 渲染插件

13 种 Interaction renderer 通过 Injectable 注册并按 \`runtimeType\` 查找。新增题型需要同时修改：

1. 领域 union / 序列化。
2. renderer。
3. DI 生成。
4. Python 与 Dart validator。
5. JSON 示例和测试。
6. 文档。

## AI 边界

\`application/ai/engine/\` 是唯一 LLM 流量出口。引擎只暴露 chat 与结构化请求；课程、提示、SRS 和教材导入分别持有领域 Prompt 和解析规则。

## Anki 边界

Android 生产 Official-first 路径位于 \`application/anki_official/\`。Collection 与 scheduler 拥有正式卡片状态。Legacy 路径只承担受控迁移与测试，不是生产自动降级。

## 相关文档

- [本地数据模型](/developer/local-data)
- [测试与质量门禁](/developer/testing)
- [核心能力一览](/guide/features)
`,ki=`# 术语表

| 术语 | 定义 |
| --- | --- |
| Again | 本次未成功提取；进入失败或重学路径 |
| AI Hub | AI 功能的集中入口，不是独立聊天后端 |
| Canonical shape | 新课程内容应写入的标准 JSON 结构 |
| Course scope | 标识当前课程或导入来源的数据作用域 |
| D / Difficulty | FSRS 估计的项目难度 |
| Derived cache | 可由真理源重新生成的数据 |
| due | 项目下一次可进入正式复习的时间 |
| Fidelity rendering | 保留原 Anki HTML/CSS/必要模板行为的渲染路径 |
| FSRS | Free Spaced Repetition Scheduler |
| Full mode | 为较小 Anki 牌组生成完整课程树投影 |
| Interaction | Lesson 中最小可执行题目或展示单元 |
| Lesson | Unit 下的单次学习单元 |
| Lite mode | 大牌组的轻量课程投影模式 |
| Local-first | 核心状态默认在本地，网络是可选能力 |
| Notetype | Anki note 的字段和卡片模板定义 |
| Official owner | 由 Official Anki Collection 和 scheduler 持有状态的来源 |
| Pre-render cache | 执行一次模板脚本后保存的无脚本纯 HTML |
| R / Retrievability | 当前时刻成功提取的估计概率 |
| reseed | 根据课程内容版本重建数据库课程投影 |
| Review event | 一次评分及其前后调度状态记录 |
| runtimeType | Interaction JSON 的变体标识 |
| S / Stability | FSRS 估计的记忆保持时间尺度 |
| Safe mode | 临时关闭实验、脚本和外部卡片网络的运行时覆盖 |
| Section | 课程最高内容层级，通常对应 CEFR 范围 |
| Sibling cards | 同一 Anki note 生成的多张 card |
| Source of truth | 对某类数据具有最终所有权的存储 |
| Stage | 按顺序包含多个 Interaction 的执行阶段 |
| Structured rendering | 将卡片或课程内容映射为原生结构化控件 |
| Unit | Section 下的主题分组 |
| Weak item | 由多次学习证据推导出的高风险项目 |

## 术语边界

- “课程缓存”不等于“学习状态”。
- “AI 缓存”不等于“AI 会话”。
- “导入成功”不等于“所有媒体完整”。
- “卡片可显示”不等于“卡片允许联网”。
- “Lesson 完成”不等于“项目已长期掌握”。
- “错误一次”不等于“弱项”。
- “目标保持率”不等于测验正确率。

## 相关文档

- [架构总览](/developer/architecture)
- [记忆状态与评分](/guide/memory-state)
- [常见问题](/guide/faq)
`,yi=`# 本地数据模型

Turna 同时包含内容真理源、派生缓存和用户状态。维护操作必须先区分三者。

## 分层

\`\`\`text
bundle course JSON        authoritative content
        |
        | versioned seed
        v
drift course database     runtime projection/cache
        +
user progress / SRS       authoritative local user state
        +
Official Anki Collection  authoritative imported-card state
\`\`\`

## 课程导入

应用启动先加载 \`index.json\` 的 Section shell。打开 Section 时加载 Unit / Lesson 元数据，打开 Lesson 时加载内容。作者仍编辑完整 JSON；分层加载只是运行策略。

内容版本变化触发 reseed。reseed 更新课程投影，不应清除独立的用户复习历史。

## 主要数据域

| 数据域 | 示例 | 维护方式 |
| --- | --- | --- |
| 课程投影 | Section、Unit、Lesson、资源 | 由 JSON reseed |
| 学习进度 | completed Lesson、统计 | 应用事务 |
| SRS | state、due、review event | 调度事务 |
| 错题 | interaction snapshot | 错误事件写入 |
| Official Anki | notes、cards、revlog、scheduler | Official Core |
| AI | 会话、消息、诊断、指标 | AI 工作流 |
| 设置 | 主题、无障碍、课程 TTS | 本地偏好 |
| 缓存 | AI cache、预渲染 HTML | 可再生成 |

## 事务边界

一次复习评分应原子地更新当前状态和历史记录。媒体复制、外部 AI 请求或长耗时解析不能被伪装成同一个数据库事务；失败时使用明确的阶段状态和补偿策略。

## Schema 迁移

数据库 schema 只向前迁移。遇到未来 schema 版本时拒绝降级打开，防止旧客户端破坏新数据。迁移测试必须覆盖现有旧版本到当前版本的路径。

文档中的具体 schemaVersion 是时间敏感实现细节。诊断报告应读取运行版本，不硬编码文档数值作为判断依据。

## 完整性与优化

\`\`\`sql
PRAGMA integrity_check;
REINDEX;
PRAGMA optimize;
\`\`\`

完整性检查是只读操作。REINDEX 与 optimize 维护索引和查询计划，不删除业务数据。

## 缓存清理

允许直接再生成的典型数据：

- Anki 预渲染纯 HTML。
- AI 响应缓存。
- 可重新导入的课程投影，但执行前必须保护用户状态。

不属于普通缓存：SRS、review history、Official Collection、错题、AI 会话、用户设置。

## 相关文档

- [本地数据与隐私](/guide/data-and-privacy)
- [课程目录约定](/authoring/course-layout)
- [架构总览](/developer/architecture)
`,Si=`# 测试与质量门禁

测试按数据合同、纯逻辑、应用状态、UI、构建和人工验收分层。单一测试命令不能证明全部路径成立。

## 客户端基线

\`\`\`bash
flutter analyze
flutter test
python -m pytest
make ci
\`\`\`

具体 Python 测试范围由项目 Makefile 和工具目录定义。不要用“命令执行但未收集测试”替代通过。

## 课程门禁

\`\`\`bash
python tool/course_cli.py validate --course-dir assets/courses/turkish
python tool/course_cli.py lint --course-dir assets/courses/turkish
python tool/export_content_inventory.py
\`\`\`

Dart validator 测试与 Python CLI 同时存在，用于防止规则分叉。

## Web 与 docs

\`\`\`bash
npx tsc -b --pretty false
npm test
npm run build
\`\`\`

当前 React 测试覆盖页面入口、导航合同和主要链接。VitePress 构建用于发现 Markdown、Vue 主题和资源打包错误。

## 测试层级

| 层级 | 目标 |
| --- | --- |
| Pure logic | FSRS、语言检测、解析、去重、ID 规则 |
| Repository / DAO | 事务、迁移、查询和状态恢复 |
| Provider | 队列、并发、取消、状态通知 |
| Widget | 可访问名称、交互和页面状态 |
| Contract | 路由、课程 schema、平台门控 |
| Integration | 导入、reseed、正式复习、构建产物 |
| Manual | 音频、真实设备、复杂 WebView、教师试做 |

## 高风险回归

- Official Anki owner 被错误降级。
- 评分事务部分写入。
- 课程 ID 修改导致进度孤立。
- 安全模式改写用户永久设置。
- 缓存清理删除业务状态。
- AI 输出绕过 schema 直接写入。
- 高对比或 200% 文本缩放阻断核心操作。

## 失败处理

1. 保存完整失败命令和退出码。
2. 确认首次失败，不只记录重跑成功。
3. 缩小到最小测试或 fixture。
4. 判断是测试不稳定、环境问题还是产品回归。
5. 修复后运行最小测试和受影响完整测试组。
6. 发布前运行聚合门禁。

## 证据格式

发布或变更说明至少记录：命令、平台、结果、失败数、跳过数和已知限制。不要只写“测试通过”而无范围。

## 相关文档

- [架构总览](/developer/architecture)
- [校验与 Lint](/authoring/validation)
- [发布检查表](/authoring/release-checklist)
`,Ai=`# Web 与文档站构建

TurnaWeb 包含两个前端：React + Vite 产品主站，以及 VitePress 文档站。生产构建将两者合并到同一个 \`dist/\`。

## 目录

\`\`\`text
TurnaWeb/
  index.html              产品主页
  *.html                  功能专题页
  src/                    React 页面
  docs/                   Markdown 与 VitePress
  dist/
    index.html
    *.html
    assets/
    docs/                 文档构建产物
\`\`\`

## 安装

\`\`\`bash
npm install
npm --prefix docs install
\`\`\`

主站与 docs 使用独立 package-lock。更新依赖时在对应目录执行安装，不手工拼接 lockfile。

## 联合开发

\`\`\`bash
npm run dev
\`\`\`

启动器执行以下操作：

1. 从 5173 和 5174 开始查找两个不同的空闲端口。
2. 将主站和 VitePress 统一绑定到 \`127.0.0.1\`。
3. 启动主站和内部 docs 服务。
4. 将主站 \`/docs\` 代理到 docs 内部端口。
5. 只显示应由用户打开的主站 URL。

使用输出中的 \`Open the Turna site at ...\`。根路径是主站，\`/docs/\` 是文档。

可选起始端口：

\`\`\`bash
SITE_DEV_PORT=5273 DOCS_DEV_PORT=5274 npm run dev
\`\`\`

## 构建

\`\`\`bash
npm run build
\`\`\`

顺序为 TypeScript project build、Vite 多页面构建、VitePress 构建。VitePress \`outDir\` 为 \`../dist/docs\`，且不清空主站已生成文件。

## 子目录部署

根域部署直接构建。Pages 类子目录部署需要设置站点 base：

\`\`\`bash
SITE_BASE=/turna-web/ npm run build
\`\`\`

文档 base 自动成为 \`/turna-web/docs/\`。如有独立文档路径：

\`\`\`bash
DOCS_BASE=/custom/docs/ npm run docs:build
\`\`\`

## 路由合同

- 主站到文档使用相对链接 \`./docs/\`。
- 文档内部使用 VitePress \`withBase\`。
- 文档返回产品主页通过 docs base 的上一级解析。
- 不把开发内部端口写入页面链接。

## 验证

\`\`\`bash
npm test
npm run build
npm run preview
\`\`\`

检查根路径、所有专题 HTML、\`/docs/\`、文档资源、站内链接和返回主页链接。

## 相关文档

- [快速开始](/guide/getting-started)
- [文档维护规范](/guide/writing-docs)
- [测试与质量门禁](/developer/testing)
`,$i=`# 可访问性

可访问性偏好由根应用壳统一应用，并持久化到本地设置。组件不得在局部重新解释同名设置。

## 偏好

| 偏好 | 范围 | 运行时效果 |
| --- | --- | --- |
| \`textScale\` | 100%–200% | 覆盖根文本缩放 |
| \`reducedMotion\` | 布尔 | 设置 disableAnimations，减少非必要动画 |
| \`highContrast\` | 布尔 | 使用高对比明暗主题 |
| \`dyslexiaFont\` | 布尔 | 切换到 Lexend 字体体系 |
| \`sensoryReduce\` | 布尔 | 关闭音效和触觉反馈 |
| \`focusMode\` | 布尔 | 关闭旋转图、计时器等分心元素 |

## 组件要求

- 文本在 200% 缩放下不得被固定高度裁切。
- 交互元素需要可读名称和稳定焦点顺序。
- 颜色不能作为唯一状态信号。
- 高对比模式必须保留错误、成功和当前选择的语义区分。
- 减少动态效果时关闭视差、持续旋转、复杂页面过渡和非必要 3D 运动。
- 键盘和辅助技术应能完成与触摸相同的核心流程。

## 主题关系

应用提供 light、dark、highContrastLight、highContrastDark。高对比是主题变体，不是简单提高饱和度。系统主题决定明暗时，高对比设置仍选择对应的高对比变体。

## 音频关系

\`sensoryReduce\` 主要控制装饰音效和触觉。课程中作为题目必要输入的音频需要明确的替代方式，例如文字稿或重播控制。不能通过静音装饰效果同时让听力题失去完成路径。

## Web 产品页

产品页单独遵循浏览器偏好：触屏设备和 \`prefers-reduced-motion\` 会关闭指针追踪、视差与卡片倾斜。该行为不修改客户端设置。

## 检查表

- 使用键盘依次访问导航、主要按钮和弹层。
- 在 200% 文本缩放下执行一节课。
- 在高对比明暗主题下检查表单和错误状态。
- 开启 reduced motion 后确认无持续装饰动画。
- 开启 sensory reduce 后确认无装饰音效与触觉。
- 使用屏幕阅读器确认题干、选项、评分和进度具有名称。

## 相关文档

- [设置系统](/guide/settings)
- [音频、TTS 与朗读](/guide/audio-and-tts)
- [测试与质量门禁](/developer/testing)
`,Li=`# 配置 AI

AI 不是核心学习流程的前置条件。未配置模型时，课程、复习、错题和本地课程检索继续可用。

## 配置项

| 字段 | 含义 |
| --- | --- |
| Provider preset | 服务商预设或 custom |
| Base URL | API 根地址 |
| API key | 服务凭据 |
| Chat model | 流式对话与解释模型 |
| JSON model | 结构化生成模型 |
| Strict schema mode | 对 JSON schema 的要求与回退策略 |

预设包括 DeepSeek、OpenAI、Moonshot、Ollama 和 Custom。具体模型名由用户配置，文档不假设远端默认值长期有效。

## 配置顺序

1. 打开设置中的 AI Tools。
2. 选择 provider preset。
3. 输入 base URL 与 API key；本地 Ollama 可按本地服务配置处理。
4. 分别选择 Chat model 与 JSON model。
5. 执行连接测试。
6. 检查延迟和错误信息。
7. 保存后从 AI Hub 发起最小文本请求。

## 连接测试

连接测试只证明当前 endpoint、凭据和最小请求可达，不证明所有结构化生成功能都受支持。JSON schema 不受支持时，引擎可按配置回退到 JSON object；结果仍需本地解析和校验。

## 密钥存储

原生平台使用可用的安全存储实现。Web 或缺少安全存储插件的平台仅在会话内持有凭据，并在界面中显示限制。

密钥不得进入：

- 普通日志。
- Prompt 缓存键。
- 脱敏报告。
- 课程 JSON。
- 文档或截图。

## 超时、重试与取消

请求包含功能名、Prompt 版本、输出上限、超时、幂等键和取消令牌。安全重试最多执行受控次数。取消是协作式操作：客户端停止接收和处理结果，不保证远端立即停止计费。

## 预算

AI 预算由统一管理器判断，可配置每日软限制与硬限制。软限制用于提示，硬限制阻止新请求。Token 和成本显示是本地估算时，应明确不等于服务商账单。

## 故障判定

| 错误 | 处理 |
| --- | --- |
| 401 / 403 | 检查 key、权限和 base URL |
| 模型不存在 | 检查模型名与 endpoint |
| schema 不支持 | 允许受控回退或更换 JSON model |
| 超时 | 降低输入规模、检查网络或本地服务 |
| 输出不可解析 | 保留原始错误状态，不直接写入课程 |

## 相关文档

- [AI 伴学](/guide/ai)
- [AI 工作流](/guide/ai-workflows)
- [本地数据与隐私](/guide/data-and-privacy)
`,Ii=`# AI 工作流

所有 LLM 请求经过统一 AI 引擎。领域模块构造 Prompt、解析结果并执行本地校验。AI 输出不是直接可执行状态。

## 功能矩阵

| 工作流 | 输入 | 输出 | 写入边界 |
| --- | --- | --- | --- |
| 提示助手 | 当前题目与允许的课程上下文 | 分层提示 | 会话与学习证据 |
| 深度讲解 | 句子、语法点或错误 | 结构化解释 | 可选知识笔记 |
| SRS 导师 | 错题、弱词、近期复习 | 临时复习课 | 校验后进入课程流程 |
| 许愿生成 | 多轮需求、附件 | Section JSON 草稿 | 人工确认后写入 |
| 教材导入 | 文本章节与预设 | 资源和课时草稿 | 审校、合并后写入 |
| Lesson 助手 | 当前 Lesson | 修改建议或内容 | 经 schema 校验后应用 |

## 分层提示状态机

提示按固定顺序升级：

\`\`\`text
conceptCue
  -> ruleCue
  -> contrastCue
  -> partialReveal
  -> fullExplain
  -> verify
\`\`\`

模型不得自行跳过状态。状态机由本地逻辑控制。这样可以避免首次请求直接泄露完整答案。

## 课程检索

检索器只返回经过白名单校验的课程来源，并限制 Top-K。未配置模型时，仍可将本地片段作为确定性答疑材料。引用不存在或不属于当前课程时，不进入 Prompt。

## 学习者画像

\`LearnerProfileSnapshot\` 从本地证据生成最小摘要。关闭个性化后：

- 不发送画像。
- 不发送旧会话摘要。
- 不发送错题历史。
- 当前用户主动输入仍按本次请求发送。

## 结构化输出

AI 生成课程或题目时执行以下门禁：

1. 解析 JSON。
2. 应用 schema。
3. 修复允许自动修复的 ID 冲突或引用断裂。
4. 运行课程 validator。
5. 显示 diff 或预览。
6. 等待用户确认。
7. 写入 JSON 真理源。

无法解析的输出不做部分写入。

## 会话数据

原生平台可保存会话、消息、诊断、计划、笔记和请求指标。会话支持恢复、重命名、删除和纯文本导出。历史过长时使用摘要裁剪，不无上限拼接原始消息。

## 明确不提供

- 未经可靠模型验证的口音分数或音素分数。
- 在用户不知情时上传完整学习数据库。
- 让远端模型直接写 SQLite。
- 绕过课程校验器的自动发布。

## 相关文档

- [配置 AI](/guide/ai-configuration)
- [错题与弱项](/guide/mistakes-and-weak-items)
- [教材导入](/authoring/textbook-import)
`,Pi=`# AI 伴学

AI 跟的是你正在学的句子、语法和错题，不是通用聊天窗口。没有配置模型时，Turna 仍可用本地课程片段做讲解；关掉 AI 也不影响学习和复习。

产品页演示见 [ai.html](../../ai.html)。

## 能做什么

- **跟课答疑**：问正在学的那句、那个词缀，而不是「随便聊聊土耳其语」。
- **先提示，后揭晓**：从概念到规则再到完整讲解，避免一次把答案倒完。
- **按错题和弱词练**：用最近的错题、记得不稳的词生成一次短练习。
- **情景对话**：在 A1–B1 场景里开口，结束有复盘。

## 和复习的关系

弱词、错题来自 FSRS 与课程记录。AI 只是读取这些本地数据来出题或解释，不把学习记录上传到「必须在线才能学」的后端。未配置密钥时走本地片段，有密钥时走统一 AI 引擎层（流式、可取消、可缓存）。

## 下一步

- [FSRS 复习](/guide/fsrs)
- [课程结构](/guide/curriculum)
`,Ti=`# 导入 Anki 牌组

本页描述 Android 生产路径中的 Official-first 导入。导入对象是 \`.apkg\`。\`.colpkg\` 和内存示例牌组不属于当前生产导入合同。

## 导入前检查

- 保留原始牌组文件作为备份。
- 确认文件可以在桌面 Anki 中打开。
- 检查可用存储空间，媒体牌组需要额外空间。
- 复杂模板默认不获得网络访问权限。
- 大于 2,000 张卡片的牌组可能进入 Lite 组织模式。

## 执行路径

\`\`\`text
选择 .apkg
  -> 解析导入元数据
  -> 生成一次 AnkiImportExecutionPlan
  -> 写入 Official Collection
  -> 建立课程投影
  -> 注册 sourceId 与复习入口
\`\`\`

生产 Android 不同时写入 Legacy NoteStore 和 Turna Anki SRS。正式卡片由 Official Collection 持有，正式评分由 Official scheduler 处理。

## 组织预览

智能组织尝试从字段与标签中读取以下信息：

- Unit、Chapter、Section、单元、章。
- Lesson、Topic、Subunit、课、节。
- \`unit::\`、\`chapter:\`、\`单元::\` 等标签。

字段优先于标签。无有效元数据时使用 deck 名和稳定分块。关闭智能组织后，应保留旧的确定性分组行为。

## Notetype 映射

导入预览可将 notetype 映射到：

\`ankiCard\`、\`wordEntry\`、\`expression\`、\`fillBlank\`、\`typeAnswer\`、\`listenPick\`、\`cloze\`、\`multipleChoice\`、\`multiSelect\`。

操作顺序：

1. 检查自动识别类型。
2. 检查 front / back 字段索引。
3. 查看首张 note 的文本预览。
4. 必要时手动覆盖。
5. 配置 AI 时可请求批量识别；AI 输出仍需人工确认。

## Full 与 Lite

| 模式 | 默认条件 | 课程投影 |
| --- | --- | --- |
| Full | 少于 2,000 卡 | 生成完整 Section、Unit、Lesson |
| Lite | 至少 2,000 卡 | 生成轻量 Section shell，正式复习走保真路径 |

阈值用于限制课程树规模，不改变牌组中的卡片总数。

## 调度继承

导入预览可以提供三种策略：

- 保留 Anki 调度。
- 保留复习历史并建立 Turna FSRS 状态。
- 全部作为新卡。

Official 生产路径应优先保持 Official 所有权。策略页必须显示受影响卡片数与历史条数。

## 失败处理

导入失败时不要重复快速点击导入。先检查错误发生在解析、Official runtime、媒体复制还是课程投影阶段。媒体复制可 best-effort；Collection 写入失败必须明确回滚或标记失败。

## 相关文档

- [Anki 集成](/guide/anki)
- [卡片渲染与网络隔离](/guide/anki-rendering)
- [故障排查](/guide/troubleshooting#anki)
`,Vi=`# 卡片渲染与网络隔离

Anki 卡片可能包含 HTML、CSS、JavaScript、媒体引用和 cloze 模板。Turna 按卡片能力选择渲染路径，并将网络与脚本视为独立权限。

## 渲染路径

| 路径 | 用途 | 平台 |
| --- | --- | --- |
| Flutter HTML | 默认卡面 | 支持的客户端平台 |
| WebView | 需要现场 JavaScript、MathJax 或用户强制时 | Android / iOS |
| 纯文本 | HTML 路径不可用时的最终降级 | 全平台 |

Web 与桌面不实例化移动 WebView。降级必须保留可读内容和评分入口，不应显示空白卡。

## 自动判定

\`AnkiRenderPolicy\` 根据 notetype 和卡片能力选择 structured、fidelity 或文本降级。选择结果可以持久化到卡片元数据。用户的全局设置和单牌组覆盖可改变策略，但不能扩大平台不存在的能力。

## JavaScript

JavaScript 默认关闭。以下场景可能需要临时执行：

- notetype 明确声明 \`allowJs\`。
- 卡片依赖现场解密。
- 模板要求浏览器执行才能产生正文。

执行 JavaScript 不等于开放网络。两项权限分别判定。

## 网络策略

| 策略 | 行为 |
| --- | --- |
| 完全离线 | 通过 CSP 阻断 fetch、XHR、WebSocket 和远程资源 |
| 询问 | 首次仍阻断；用户明确允许后仅本次放行 |
| 允许 | 按用户设置执行；仍受平台与页面导航限制 |

默认值为完全离线。页面跳转拦截不能替代网络拦截，因为脚本可以在不跳转页面的情况下请求外部资源。

## 预渲染缓存

某些模板需要执行一次混淆脚本才能得到正文。流程如下：

1. 在 WebView 中执行模板。
2. 延时读取 \`document.body.innerHTML\`。
3. 移除 \`<script>\`。
4. 将纯 HTML 写入预渲染缓存。
5. 后续以 \`allowJs=false\` 使用缓存。

清除此缓存不会删除 note、card、媒体或复习状态。下次复习时按需重新生成。

## 媒体

- 缺失图片显示占位，不阻塞评分。
- 原音频失败时可以对卡片文本执行系统 TTS。
- 可配置去重、未引用媒体过滤和大图片压缩。
- 为兼容旧牌组，导入未引用媒体默认开启。

## 安全模式

安全模式是运行时覆盖：强制关闭模板脚本和外部网络，但不改写用户保存的设置。退出安全模式后恢复进入前的配置。

## 相关文档

- [导入 Anki 牌组](/guide/anki-import)
- [设置系统](/guide/settings)
- [本地数据与隐私](/guide/data-and-privacy)
`,Ni=`# Anki 集成

Turna 的 Android 生产路径内嵌 Official Anki Core（rslib FFI）。\`.apkg\` 导入后由 Official Collection 持有 note、card、revlog 与正式调度状态。\`.colpkg\` 当前不属于生产导入合同。

产品页演示见 [anki.html](../../anki.html)。

## 数据所有权

| 对象 | 所有者 |
| --- | --- |
| Official note / card / revlog | Official Collection |
| Official 正式评分 | Official scheduler |
| 课程树展示 | 从 Official 来源建立的投影 |
| 课程原生词汇与表达 | Turna 课程数据库与 Dart FSRS |

两类项目可显示在统一复习入口，但不混写调度状态。Official runtime 不可用时，Official 来源必须 fail closed。

## 导入阶段

1. 选择 \`.apkg\`。
2. 生成一次导入执行计划。
3. 检查 notetype 映射与组织预览。
4. 写入 Official Collection。
5. 建立课程投影与 source scope。
6. 通过共享复习入口启动 Official review session。

## 渲染

- 默认使用 Flutter HTML。
- 需要 JavaScript、MathJax 或现场解密时才使用移动 WebView。
- 网络与 JavaScript 分别授权，网络默认完全离线。
- 渲染失败依次降级，不能让复习停在空白卡。

## 数据在哪

牌组、媒体与复习记录保存在设备本地，不要求账号或 AnkiWeb。删除牌组、清缓存和清除应用数据是不同操作。

## 下一步

- [导入 Anki 牌组](/guide/anki-import)
- [卡片渲染与网络隔离](/guide/anki-rendering)
`,Oi=`# 音频、TTS 与朗读

Turna 区分运行时 TTS 与预录听力资产。单词和短表达优先使用系统 TTS；长对话和听力节目使用 bundle 内 MP3。

## 音频来源

| 来源 | 适用内容 | 网络要求 |
| --- | --- | --- |
| 系统 / Google TTS | 单词、短表达、卡片文本降级 | 取决于设备语音包 |
| 预录 MP3 | 对话、长短语、听力阶段 | 无 |
| Anki 媒体 | 导入卡片中的音频 | 导入后本地 |

Android 优先使用 \`com.google.android.tts\`，目标语言码为 \`tr\`。项目不捆绑离线神经 TTS 模型。

## 语言检测

智能朗读按脚本推断 BCP-47 基础语言码。Han、Kana、Hangul、Cyrillic、Arabic、Thai、Devanagari、Greek 和 Hebrew 有明确分支。土耳其语特有字符 \`ğ ı ş İ\` 提供强信号；普通 Latin 文本使用课程母语配置回退。

\`ç ö ü\` 不单独判定为土耳其语，因为其它欧洲语言也使用这些字符。

## 触发点

- 词汇和表达的手动朗读。
- 选择题选项点击时的自动朗读。
- Anki 翻牌前后朗读。
- 听力 Interaction 播放。
- 原 Anki 音频缺失时的文本 TTS。

每课程可分别设置自动朗读和母语语言。已知目标语的调用点直接使用目标语言，不重复检测。

## 无障碍覆盖

开启 \`sensoryReduce\` 后，音效和触觉反馈提前返回。该设置不应删除音频文件，也不修改课程内容。用户主动触发的必要语音与装饰性音效应保持可区分。

## 故障处理

| 症状 | 检查 |
| --- | --- |
| 无声音 | 系统媒体音量、TTS 引擎、语言包、sensoryReduce |
| 发音语言错误 | 当前课程母语设置、文本脚本、目标语言标记 |
| Anki 音频缺失 | 媒体导入记录、文件名、卡片字段引用 |
| 听力课空白 | \`audioAsset\`、bundle 声明、资产清单 |
| 播放被截断 | 连续触发、页面离开、系统音频焦点 |

## 相关文档

- [音频资产](/authoring/audio-assets)
- [可访问性](/guide/accessibility)
- [交互题型](/guide/interaction-types)
`,xi=`# 课程结构

土耳其语课程按 CEFR 分成 8 个 Section（A1→B2）。每个 Section 下是主题 Unit，Unit 下是约 5 分钟一节的 Lesson，并按先修关系解锁。

产品页演示见 [curriculum.html](../../curriculum.html)。

## 当前规模

内容仍在缓慢扩充。当前土耳其语课大约是：

| 项 | 数量 |
| --- | ---: |
| 分级 Section | 8 |
| 主题 Unit | 11 |
| 课时 | 54 |
| 词汇 | 148 |
| 表达 | 18 |
| 配套音频 | 37 |
| 语法点 | 8 |

完整词表和引用关系在应用仓库的 \`docs/content_inventory_current.md\`，由导出脚本根据课程 JSON 生成，不在本站维护一份副本。

## 分级

| 级别 | 含义 | Section |
| --- | --- | --- |
| A1 | 入门 | 1–2 |
| A2 | 基础 | 3–4 |
| B1 | 进阶 | 5–6 |
| B2 | 自如 | 7–8 |

较低等级要达到一定掌握度后，才会解锁下一等级，对应可理解输入里的 i+1：先接触略高于当前水平的内容。

## 题目形态

课程里会出现认词卡、单选 / 多选、填空、句子翻译、听音选词、听写、听音理解等。它们都是检索练习，而不只是「考试」。

## 下一步

- [六种课型](/guide/lesson-types)
- [教师如何改一课](/authoring/teacher-guide)
`,wi=`# 本地数据与隐私

Turna 的默认运行模型是单人、本地、离线。不存在必需的账号、云后端、排行榜或推送依赖。启用外部 AI 或卡片网络访问时，数据边界发生变化，必须由用户显式配置。

## 数据分类

| 数据 | 默认位置 | 真理源 / 派生 |
| --- | --- | --- |
| 课程内容 | bundle JSON | 真理源 |
| 课程运行缓存 | drift SQLite | 派生 |
| Lesson 进度 | 本地数据库 / 偏好 | 用户状态 |
| SRS 状态与历史 | 本地数据库 | 用户状态 |
| Official Anki Collection | 本地应用存储 | 导入数据与用户状态 |
| Anki 媒体 | 本地文件 | 导入资产 |
| 设置 | 本地偏好 | 用户配置 |
| AI 凭据 | 原生安全存储或会话内 | 敏感配置 |
| AI 缓存 | 内存或本地缓存 | 可再生成 |
| 日志与健康摘要 | 本地 | 诊断数据 |

## 不自动上传的数据

- 完整课程数据库。
- 复习历史。
- 错题正文。
- Anki 卡片正文和媒体。
- API key。
- 原始日志正文。

AI 请求会发送完成当前功能所需的文本和上下文。关闭个性化后，不附加学习者画像、旧会话和错题历史。

## 外部网络入口

| 入口 | 启用条件 | 发送内容 |
| --- | --- | --- |
| AI Provider | 用户配置并发起请求 | Prompt、必要上下文、附件 |
| Anki 卡片远程资源 | 用户允许卡片网络策略 | 模板发起的远程请求 |
| 代码和课程更新 | 用户主动执行 | 标准下载请求 |

Anki 卡片网络默认完全离线。AI 与卡片网络是独立开关。

## 导出与报告

脱敏系统报告可以包含版本、数据库结构版本、平台、WebView/TTS 能力、错误等级和关键高级设置。报告不得包含：

- 原始错误正文。
- API key。
- 卡片或课程正文。
- 用户输入。
- AI 对话。

报告在分享前提供预览，并从内存文件导出。

## 删除语义

“清缓存”只处理可再生成缓存。“清除 AI 学习数据”“删除牌组”“清除应用数据”是不同操作，必须分别确认。删除操作不得使用含糊的统一按钮。

## 备份原则

应用数据是本地数据。卸载、系统清理或设备故障可能造成丢失。导入源文件、课程 JSON 和需要保留的导出文件应放在应用私有目录之外的受控备份位置。

## 相关文档

- [本地数据模型](/developer/local-data)
- [配置 AI](/guide/ai-configuration)
- [卡片渲染与网络隔离](/guide/anki-rendering)
`,Ci=`# 课程编辑器

课程编辑器是桌面工具（\`tool/gui\`），不进 App 本体。老师或作者在本机打开课程文件夹，改 Section / Unit / Lesson，保存时走同一套校验。

产品页演示见 [editor.html](../../editor.html)。教师逐步操作见 [教师指南](/authoring/teacher-guide)。

## 能改什么

- **三级课程树**：拖拽、复制、套用预设，结构和 App 里看到的一致。
- **课时蓝图**：intro / practice / listening / reading 等模板用表单和流程图编。
- **课程工坊**：从教材抽知识点，或从空白生成一节课，导入前先看 diff。
- **教师试做**：在桌面上把学员会做到的题点一遍。

## 推荐流程

1. 打开本地课程目录（例如 \`turkish/\`）。
2. 在树里选一课，改名称、先修、题型和题目。
3. 保存并校验；失败会回滚，避免写出坏 JSON。
4. 用教师模式试做，再发布。

课程内容的真理源是 JSON 文件，编辑器只是可视化前端。App 启动时把 JSON 写入本地 SQLite 缓存；改了内容版本号后会重新导入。

## 下一步

- [课程目录约定](/authoring/course-layout)
- [课型说明](/guide/lesson-types)
`,Mi=`# 常见问题

## Turna 是否需要账号

不需要。核心课程、复习和学习状态在本地运行。

## 没有网络能否学习

可以。已安装课程和本地复习不依赖网络。外部 AI、远程卡片资源和主动更新需要网络。

## Web 产品主页是否就是学习应用

不是。TurnaWeb 提供产品页和技术文档。学习客户端是 Flutter 应用。

## 为什么有两套 FSRS

课程项目由 Dart FSRS 调度。Official Anki 卡由 Official Anki scheduler 调度。两者算法概念相近，但状态所有者不同。

## 能否把 Official Anki 卡静默改用 Turna FSRS

不能。Official runtime 不可用时应明确关闭相关功能，避免分叉复习历史。

## 支持哪些 Anki 文件

Android 生产导入合同以 \`.apkg\` 为主。\`.colpkg\` 当前不作为正式导入路径。

## 为什么复杂 Anki 卡片没有网络

卡片网络默认关闭。HTML 模板可能包含未知脚本和远程请求。用户可以按策略显式允许，但不应默认开放。

## AI 是否必需

不是。未配置 AI 时，课程、FSRS、Anki 正式复习和本地课程片段答疑仍可工作。

## API key 保存在哪里

原生平台使用可用的安全存储。缺少安全存储能力的平台只在当前会话保留，并显示限制。

## SQLite 是课程真理源吗

不是。课程 JSON 是真理源，SQLite 是应用启动后生成的缓存。学习进度和复习状态则是用户本地状态。

## 修改 JSON 后为什么应用没有变化

检查 \`index.json\` 的内容版本。语义变化需要增加版本以触发重新导入。

## 可以直接修改数据库来编辑课程吗

不可以。编辑器、CLI 和人工修改都应写课程 JSON，再通过校验与版本导入。

## 清缓存会删除学习进度吗

正常的缓存清理只删除可再生成的预渲染与 AI 缓存。清除应用数据、数据库或牌组是不同操作。

## docs 页面如何复制

每篇正文顶部有“复制全文”。按钮复制当前页面的 Markdown 原文，包括标题、表格、代码块和链接，不包含站点导航。

## 如何构建文档子目录

\`\`\`bash
SITE_BASE=/turna-web/ npm run build
\`\`\`

文档资源会生成到 \`/turna-web/docs/\` 对应路径。

## 相关文档

- [快速开始](/guide/getting-started)
- [故障排查](/guide/troubleshooting)
- [术语表](/developer/glossary)
`,Ri=`# 核心能力一览

先看这一页建立地图，细节进各功能页。产品主页的卡片和预览对应同一套能力。

## 离线与本地优先

- 课程与学习记录存在设备上，关掉网络也能学和复习。
- 只在你主动同步或更新时联网，默认不上传学习记录。
- 无需账号，没有广告、排行榜或付费墙。

## FSRS 智能复习

内置开源 FSRS：Anki 牌组走 \`fsrs-rs\`，课程词走 Dart 实现，都是 21 参数的 FSRS-6。详见 [FSRS 复习](/guide/fsrs)。

## Anki 兼容

复用官方 Anki 内核。\`.apkg\` 导入后进入课程路径，并与复习共用学习记录。详见 [Anki 集成](/guide/anki)。

## AI 伴学

跟课答疑、分层提示、按错题和弱词出练习。不配模型时用本地课程片段讲解。详见 [AI 伴学](/guide/ai)。

## 课程编辑器

桌面 \`tool/gui\` 编辑 Section / Unit / Lesson，保存时校验 JSON。详见 [课程编辑器](/guide/editor) 与 [教师指南](/authoring/teacher-guide)。

## 开源与可定制

MIT 协议，源自 [rshrc/Varnamala](https://github.com/rshrc/Varnamala)。主题「晨雾 / 夕光」可在产品主页切换。

## 推荐阅读顺序

1. [快速开始](/guide/getting-started)
2. [课程结构](/guide/curriculum)
3. 按需要进入 FSRS / Anki / AI / 编辑器

`,Di=`# FSRS 复习

FSRS（Free Spaced Repetition Scheduler）按你的记忆状态安排下一次复习。Turna 不会在固定天数后机械重现卡片，而是估计「现在还记得的概率」，在快要忘记时再拿出来。

产品页演示见 [fsrs.html](../../fsrs.html)。

## 三个变量

每张待复习的内容用三个数描述：

| 符号 | 名称 | 含义 |
| --- | --- | --- |
| D | 难度 Difficulty | 这张卡对你有多难，约 1–10。答得越好难度越低，连续答错则升高。 |
| S | 稳定度 Stability | 记忆的半衰期尺度：经过 S 天后，留存率降到目标值（默认 90%）。 |
| R | 可提取性 Retrievability | 此刻还能想起来的概率，随时间沿幂函数下降。 |

复习时你给出「重来 / 困难 / 良好 / 简单」，FSRS 更新 D 和 S，并算出下一次间隔。

## 两条引擎，同一套算法

Turna 里有两处 FSRS，参数语义一致，服务不同内容：

- **官方 Anki 牌组**：走 Anki 内核里的 \`fsrs-rs\`，与桌面版 Anki 的调度一致。
- **课程词、表达、语法**：走应用内的 Dart \`FsrsEngine\`（FSRS-6，21 个参数）。

课程练习的对错会映射到四个评分：判错 → 重来，打分 3 → 困难，判对或打分 4 → 良好，打分 ≥ 5 → 简单。

## 默认可调项

| 项 | 默认 |
| --- | --- |
| 目标留存率 | 0.9（可在 0.8–0.95 间调整） |
| 间隔上限 | 730 天 |
| 学习 / 重学短步进 | 10 分钟 |
| 同日容错 | 同一天最多 4 次失败 |

完整参数分组（w0–w20）见产品页；日常使用不必改权重。

## 下一步

- [把已有 Anki 牌组导入 Turna](/guide/anki)
- [按当前进度使用 AI 答疑](/guide/ai)
`,Fi=`# 快速开始

本文带你 5 分钟把 Turna Web 在本地跑起来。

## 环境要求

- Node.js **20** 或更高版本
- npm 10+（随 Node 一起安装即可）
- 任意现代浏览器（Chrome / Edge / Firefox / Safari）

## 获取代码

\`\`\`bash
git clone https://github.com/Varnamalaplus/TurnaWeb.git
cd TurnaWeb
\`\`\`

## 安装依赖

\`\`\`bash
npm install
\`\`\`

如果你只跑 Web 端，不需要安装桌面端的 Rust 工具链。

## 启动开发服务器

\`\`\`bash
npm run dev
\`\`\`

终端会输出 \`Open the Turna site at http://127.0.0.1:<port>/\`。启动器会自动避开占用端口。只打开这条主站地址；文档通过同一地址的 \`/docs/\` 访问。

> 触屏设备和开启了「减少动态效果」的系统会自动关闭指针追踪、视差与 3D 倾斜。

## 跑测试与生产构建

\`\`\`bash
# 单元测试
npm test

# 类型检查 + 生产构建
npm run build

# 本地预览构建产物
npm run preview
\`\`\`

构建产物输出到 \`dist/\`，Vite 已使用**相对资源路径**，可以把整个 \`dist/\` 部署到 Gitee Pages、GitHub Pages 或任意静态服务器的子目录。

## 页面一览

启动后默认进入产品主页。顶部只保留 **功能 / 课程 / 文档**；Anki、FSRS、AI、编辑器在页脚和功能卡片里。

| 页面 | 入口 | 内容 |
| --- | --- | --- |
| 主页 | \`index.html\` | 湿地晨雾首屏、功能卡片、三种交互预览 |
| 课程内容 | \`curriculum.html\` | CEFR A1–B2 课程结构、六种课时类型 |
| 文档 | \`docs/\` | 本站：指南、功能说明、课程创作 |
| Anki 集成 | \`anki.html\` | 官方 Anki 内核、牌组课程化、FSRS 调度 |
| FSRS 算法 | \`fsrs.html\` | 记忆三变量、幂函数遗忘曲线、双实现 |
| AI 伴学 | \`ai.html\` | 跟课答疑、分层提示、按错题与弱词练习 |
| 课程编辑器 | \`editor.html\` | 桌面 tool/gui 的两栏窗口、课时蓝图 |

多页入口注册在 \`vite.config.ts\` 的 \`build.rollupOptions.input\` 中。文档由 VitePress 构建到 \`dist/docs/\`。

## 主题

主题按钮会在「**晨雾**」和「**夕光**」之间切换：

- 首次访问根据本地时间自动选择主题。
- 手动选择后会保存在浏览器中。
- 触屏设备与「减少动态效果」系统会自动关闭部分视觉效果。

## 文档站点

\`\`\`bash
cd docs
npm install
npm run docs:dev
\`\`\`

只调试文档时，开发服务器默认是 <http://localhost:5174/docs/>。日常联调请在仓库根目录执行 \`npm run dev\`，它会同时启动主站与文档站；从主站打开 \`/docs/\` 即可，不需要跨端口跳转。

## 下一步

- [核心能力一览](/guide/features)
- [如何给文档加页](/guide/writing-docs)
`,Ei=`# 安装应用

本文描述 Turna 客户端的安装边界。Web 产品主页与 VitePress 文档站不是学习客户端，不保存课程进度，也不执行复习调度。

## 平台状态

| 平台 | 状态 | 能力边界 |
| --- | --- | --- |
| Android | 主力平台 | 支持课程、SQLite、TTS、Official Anki Core 与正式发布产物 |
| iOS | 保留支持 | 支持基础课程与 WebView；Official Anki Core 不作同等承诺 |
| Web | 有限支持 | 不提供原生 WebView 保真；本地数据库与原生插件能力受浏览器限制 |
| HarmonyOS / OHOS | 已停止 | 不再生成产品构建，不再增加适配 |

## 从源码运行

环境要求：官方 Flutter SDK \`>=3.2.3 <4.0.0\`。Android 构建使用 JDK 17。

\`\`\`bash
git clone git@gitee.com:dhwdwf3/Varnamalaplus.git
cd Varnamalaplus
flutter pub get
flutter run
\`\`\`

生成文件已经提交到仓库。普通克隆不执行 \`build_runner\`。仅当 Freezed、JsonSerializable、AutoRoute 或 Injectable 注解发生变化时重新生成：

\`\`\`bash
flutter pub run build_runner build --delete-conflicting-outputs
\`\`\`

## Android 构建

调试 APK：

\`\`\`bash
flutter build apk --debug
\`\`\`

发布包使用 arm64。Official Anki native 库当前按 arm64-v8a 打包；不要发布宣称支持其它 ABI、但未包含对应 native 库的产物。

\`\`\`bash
flutter build apk --release --split-per-abi --target-platform android-arm64
\`\`\`

## 安装后状态

首次启动执行以下操作：

1. 读取 bundle 内的课程索引。
2. 检查课程内容版本。
3. 将 JSON 派生为本地 SQLite 缓存。
4. 完成数据库准备后进入课程界面。

课程 JSON 是内容真理源。SQLite 是运行缓存。清除应用数据会移除本地进度、设置与派生缓存；重新安装前应先完成需要的数据导出。

## 验证

- 首页可进入课程树。
- 无网络时可打开已安装课程。
- 系统 TTS 可用时，土耳其语词项能够朗读。
- Android Official Anki runtime 不可用时，相关入口应明确失败，不应静默切换到另一套调度器。

## 相关文档

- [本地数据与隐私](/guide/data-and-privacy)
- [Android 构建](/developer/android-build)
- [故障排查](/guide/troubleshooting)
`,Hi=`# 交互题型

Interaction 是课程运行时的最小可执行单元。每种 Interaction 使用 \`runtimeType\` 选择专用渲染器。新增未注册的 \`runtimeType\` 会构成数据错误。

## 已定义类型

| 能力维度 | \`runtimeType\` | 输入 | 结果 |
| --- | --- | --- | --- |
| 词汇呈现 | \`showWord\` | 词项、释义、音频 | 展示完成 |
| 接受性词汇 | \`multipleChoice\` | 单个答案 | 正误 |
| 接受性词汇 | \`multiSelect\` | 多个答案 | 集合匹配结果 |
| 产出 | \`fillBlank\` | 文本 | 标准化后匹配 |
| 产出 | \`translateSentence\` | 翻译文本 | 规则或配置判定 |
| 句法 | \`reorderSentence\` | 词块顺序 | 顺序匹配 |
| 听写 | \`typeTheWord\` | 听到的词 | 拼写匹配 |
| 听力 | \`listenAndPick\` | 音频后的选择 | 正误 |
| 听力 | \`listenOnly\` | 音频 | 播放完成 |
| 阅读 | \`readingMcq\` | 篇章后的选择 | 正误 |
| 阅读 | \`readingTrueFalse\` | 真 / 假 | 正误 |
| 阅读 | \`readingShortAnswer\` | 简答 | 配置判定 |
| Anki 保真 | \`ankiHtmlCard\` | 原卡 HTML | 四档评分或课程结果 |

## 设计规则

### 先呈现，后检索

新词首次出现时先使用 \`showWord\` 或具有明确上下文的输入。不得在没有任何输入的情况下把陌生项目直接作为高强度产出题。

### 每题只验证一个主要目标

题干可以包含上下文，但评分目标必须明确。例如听力题验证语音识别时，不同时要求复杂拼写和语法变形，除非课时目标明确要求组合能力。

### 干扰项必须可解释

选择题干扰项应来自真实易混项、相近形式或当前课程范围。随机无关词会提高表面难度，但不提供有效诊断。

### 标识符保持稳定

Interaction \`id\` 用于定位、错误记录和测试。发布后不得因排序调整自动重编号。

## 评分映射

普通课程题通常使用二元结果：

\`\`\`text
pass -> Good
fail -> Again
\`\`\`

显式量表可以映射为四档评分。Anki 正式复习直接使用 Again、Hard、Good、Easy。显示文本可以本地化，调度枚举不可重新定义。

## 内容检查

- \`runtimeType\` 已在应用模型中存在。
- \`id\` 在目标作用域内唯一且稳定。
- 引用的 \`wordId\`、\`expressionId\`、\`grammarPointId\` 存在。
- 音频题的 \`audioAsset\` 可解析或具有明确 TTS 降级。
- 正确答案实际存在于 options 中。
- 空字符串、重复选项和无解题目被校验器拒绝。

## 相关文档

- [Lesson JSON 结构](/authoring/lesson-schema)
- [课型说明](/guide/lesson-types)
- [校验与 Lint](/authoring/validation)
`,Bi=`# 标准学习流程

Turna 将课程学习、检索练习、错误记录和间隔复习视为一条连续状态机。界面可以变化，状态转换顺序不应变化。

## 流程

\`\`\`text
选择课程
  -> 检查 Section / Unit / Lesson 先修条件
  -> 加载单节 Lesson 内容
  -> 执行 Stage 与 Interaction
  -> 写入答题结果和 Lesson 进度
  -> 更新错题、弱项与 SRS 状态
  -> 生成后续复习队列
\`\`\`

## 课程选择

课程树采用 \`Section -> Unit -> Lesson\`。Section 对应 CEFR 范围，Unit 对应主题，Lesson 对应可在短时间内完成的学习单元。

解锁条件来自两处：

- \`prerequisiteSectionIds\`：Section 级依赖。
- \`prerequisiteLessonIds\`：Lesson 级依赖。

未满足依赖的内容不应被伪装成可执行内容。作者不得通过修改显示顺序替代依赖关系。

## Lesson 执行

客户端按 Lesson 模板读取 \`subLessons\`、\`listeningPhases\`、\`readingPassage\` 或 \`stages\`。运行时将结构展平为可遍历的 Stage 序列，再按 Interaction 类型选择渲染器。

每个 Interaction 产生结构化结果。结果至少需要区分正确、错误和可选评分，不以页面停留时间替代学习结果。

## 状态写入

一次作答可能影响以下状态：

| 状态 | 写入条件 | 后续用途 |
| --- | --- | --- |
| Lesson 进度 | 完成课时步骤 | 解锁后续内容 |
| 错题快照 | 回答错误 | 重做、错误分析、AI 上下文 |
| SRS 状态 | 可复习项目获得评分 | 计算下次到期时间 |
| 复习历史 | 调度结果落盘 | 统计、撤销、参数分析 |
| 学习统计 | 完成事件 | 本地聚合展示 |

## 中断与恢复

- 课程内容按单节加载，不要求把整个课程常驻内存。
- 已提交的评分应先持久化，再更新界面完成态。
- 在途评分期间禁止同时撤销同一项目。
- 应用异常退出后，以已落盘状态为准，不根据动画或页面位置推断完成状态。

## 结束条件

Lesson 结束不等于记忆完成。新项目进入 SRS 后，由到期时间决定后续复习。复习失败会进入当日重学阶梯；连续失败达到限制后可推迟到次日。

## 相关文档

- [课程结构](/guide/curriculum)
- [交互题型](/guide/interaction-types)
- [复习系统](/guide/review-system)
`,Ui=`# 课型说明

一节 Lesson 有「类型」和「模板」。类型决定这节课在课程树里扮演什么角色，模板决定内容怎么组织。

编写 JSON 时的合同见 [课程目录约定](/authoring/course-layout)。更细的字段示例在应用仓库 \`docs/authoring/lesson-type-templates.md\`。

## 六种课

| 课型 | 模板 | 做什么 |
| --- | --- | --- |
| 新知课 | \`intro\` | 4 个子课时依次引入词汇、表达与语法，是每个主题的起点。 |
| 练习课 | \`practice\` | 用更高难度复练新知课内容，巩固而不是重复。 |
| 听力课 | \`listening\` | 先辨音，再理解，最后整体听懂一段。 |
| 阅读课 | \`reading\` | 一篇短文加理解题，把词汇和语法放进语境。 |
| 复习课 | \`review\` | 混合复习已学内容，由课程树按先修解锁。 |
| 挑战课 | \`mastery\` | 单次掌握度检验，通过才能继续往后。 |

对应到 JSON 里的 \`type\`：\`normal\`（intro / practice）、\`listening\`、\`reading\`、\`review\`、\`challenge\`。

## 怎么选

- 第一次出现的词和句 → 新知课。
- 同一批材料加难再练 → 练习课。
- 需要听音或读短文 → 听力课 / 阅读课。
- Unit 或 Section 收尾 → 复习课，必要时加挑战课。

教师在编辑器里选模板后，会生成默认结构（子课、阶段），再往里填词和题目即可。

## 下一步

- [教师指南](/authoring/teacher-guide)
- [课程结构](/guide/curriculum)
`,Ji=`# 记忆状态与评分

本页定义 FSRS 状态和评分语义。界面措辞可以翻译，状态含义不可改变。

## 状态量

| 状态 | 符号 | 解释 |
| --- | --- | --- |
| Difficulty | D | 项目的固有和个体难度，通常约束在 1–10 |
| Stability | S | 记忆保持的时间尺度，单位为天 |
| Retrievability | R | 当前时刻成功提取的估计概率 |

R 随时间下降。一次复习根据评分更新 D 与 S，再由目标保持率计算下次间隔。R 是时变估计，不应作为固定字段向用户解释。

## 四档评分

| 评分 | 用户行为 | 调度含义 |
| --- | --- | --- |
| Again | 未能回忆或答案错误 | 进入重学，稳定度显著调整 |
| Hard | 回忆成功但困难或不完整 | 使用保守间隔 |
| Good | 正常回忆成功 | 使用标准间隔 |
| Easy | 快速、确定且无提示地回忆 | 使用更长间隔 |

评分描述的是本次提取质量，不是对词条重要性的评价。不得因为“喜欢这个词”选择 Easy，也不得因为“希望多见几次”选择 Again。

## 二元题映射

课程 Interaction 常只有判对与判错：

\`\`\`text
incorrect -> Again
correct   -> Good
\`\`\`

部分显式分值可映射为 Hard 或 Easy。映射规则由应用层集中处理，课程 JSON 不应为同一种题型重新定义评分枚举。

## 关键参数

| 参数 | 默认值 | 影响 |
| --- | ---: | --- |
| \`desiredRetention\` | 0.90 | 越高则复习更频繁 |
| \`maximumIntervalDays\` | 730 | 限制最长间隔 |
| \`enableFuzzing\` | \`true\` | 对间隔施加小幅抖动，分散队列 |
| \`maxSameDayFails\` | 4 | 限制当日失败循环 |
| FSRS parameters | 21 个权重 | 控制状态更新模型 |

目标保持率不是正确率目标。提高它会增加工作量。参数变化只影响调度计算，不修改课程内容。

## 参数调整边界

- 普通用户优先调整目标保持率，不直接修改 21 个权重。
- 个性化参数需要足够且一致的复习历史。
- 预览计算关闭 fuzzing，以获得确定性结果。
- 修改最大间隔后，已有卡片不会被解释为新卡。
- Official Anki 卡使用 Official scheduler 的配置和状态。

## 相关文档

- [FSRS 复习](/guide/fsrs)
- [复习系统](/guide/review-system)
- [本地数据模型](/developer/local-data)
`,ji=`# 错题与弱项

错题和弱项是两种不同的数据视图。错题描述发生过的错误事件；弱项描述由多次事件推导出的当前风险。

## 错题记录

一次错误可保存以下快照：

- Interaction 标识符。
- 题干与必要上下文。
- 正确答案。
- 用户答案。
- 来源课程、Lesson 或 Anki 卡片。
- 发生时间。

快照用于重做和错误分析。它不替代原课程数据，也不应包含无关页面状态。

## 弱项判定

弱项可由以下信号组合：

- 近期 Again 或连续错误。
- Stability 偏低。
- 到期后长期未复习。
- 同一语法点的多题错误。
- 课程提示使用层级持续升高。

单次错误不等于长期弱项。诊断必须保留置信度，并在证据不足时明确返回低置信度。

## 专项流程

\`\`\`text
读取错题 / SRS / 课程证据
  -> 去重并按知识点归组
  -> 选择有限数量的目标
  -> 组装本地练习或 AI 练习
  -> 执行并写入新证据
  -> 更新弱项状态
\`\`\`

专项练习不能绕过正式评分事务。由 AI 生成的内容仍需符合题型和课程 schema。

## 数据控制

- 删除错题记录不应删除课程资源。
- 清理可再生成缓存不应清除错题和 SRS。
- 关闭 AI 个性化后，不向 AI 请求附加旧会话或错题摘要。
- 脱敏报告不得包含原始题干、用户输入或 AI 对话。

## 使用建议

1. 先处理到期复习。
2. 再处理重复出现的错题组。
3. 对单个高频失败项目检查内容质量和答案配置。
4. 连续失败不一定是记忆问题，也可能是音频缺失、题干歧义或错误映射。

## 相关文档

- [复习系统](/guide/review-system)
- [AI 工作流](/guide/ai-workflows)
- [本地数据与隐私](/guide/data-and-privacy)
`,Gi=`# 复习系统

复习系统负责从本地状态中选择到期项目、提交评分、更新记忆状态并记录历史。它不负责定义课程内容。

## 项目来源

| 来源 | 调度所有者 | 说明 |
| --- | --- | --- |
| 课程词汇、表达、语法 | Turna FSRS | 使用 Dart \`FsrsEngine\` |
| Official Anki 卡片 | Official Anki scheduler | 使用 rslib FFI 会话 |
| 错题专项 | 错题与课程状态 | 可重新组装练习，不替代正式 SRS |
| 弱词专项 | SRS 与学习证据 | 选择稳定度低或近期失败项目 |

不同所有者不得在运行时混写同一张卡片的调度状态。Official owner 不可用时应关闭相关复习，而不是静默改用 Turna FSRS。

## 队列生命周期

1. 读取当前时间与本地到期状态。
2. 按来源和配置构造队列。
3. 展示题目或卡片正面。
4. 接收二元或四档评分。
5. 调度器计算新状态和 due。
6. 在事务边界内写入状态与历史。
7. 从队列移除或按重学规则重新插入。

## 当日重学

失败项目进入短间隔重学。默认短步进为 10 分钟。当日失败次数达到 \`maxSameDayFails\` 后，due 推迟到次日，避免在单日内无限循环同一项目。

## 撤销

撤销依赖上一条复习历史和评分前状态。评分写入期间，该项目处于 in-flight 状态，不接受并发撤销。写入完成后才允许恢复。

## 同胞卡

Anki 同一 note 生成的多张 card 可以按 \`importId + noteId\` 归组。设置允许分别隐藏同日新卡和同日复习卡。该策略减少答案泄漏，不删除卡片。

## 难卡

失败阈值可配置为 2–20 次。达到阈值后可执行：

- 仅标记和提醒。
- 进入难卡专项视图。
- 自动暂停。

默认阈值为 5 次，默认不自动暂停。

## 队列异常

| 症状 | 检查 |
| --- | --- |
| 今日无卡 | 检查系统时间、目标课程、due 与筛选规则 |
| 同一卡重复出现 | 检查重学阶梯和提交事务是否成功 |
| Anki 评分不更新 | 检查 Official runtime 与 owner |
| 撤销不可用 | 等待在途评分完成，检查历史是否存在 |
| 新卡过多 | 调整新卡顺序、上限或同胞卡规则 |

## 相关文档

- [FSRS 复习](/guide/fsrs)
- [记忆状态与评分](/guide/memory-state)
- [错题与弱项](/guide/mistakes-and-weak-items)
`,Wi=`# 设置系统

设置分为学习、音频、可访问性、AI、数据、Anki 引擎以及系统与实验。设置项必须连接到运行时行为；尚未接入的实验项应禁用并标注状态。

## 设置分区

| 分区 | 典型内容 |
| --- | --- |
| Learning | 目标保持率、学习与复习偏好 |
| Audio & Haptics | 自动朗读、母语、音效、触觉 |
| Accessibility | 文本缩放、减少动态、高对比等 |
| AI Tools | Provider、模型、凭据、预算与数据清理 |
| Data | 缓存、导出、存储维护 |
| Anki Engine | 渲染、网络、解密、媒体和牌组覆盖 |
| System & Experiments | 系统健康、安全模式、调度实验和已接入实验项 |

## Anki 引擎设置

全局默认可以被单牌组覆盖。覆盖项包括：

- 渲染模式。
- JavaScript。
- 智能预渲染。
- 抓取延时。
- 网络策略。

删除覆盖后立即继承全局值。恢复默认值只重置高级偏好与牌组覆盖，不修改复习历史、导入数据、AI 配置、主题或无障碍偏好。

## 存储维护

存储页区分不可再生成数据和可再生成数据：

| 数据 | 清理行为 |
| --- | --- |
| 课程数据库 | 不在普通缓存清理中删除 |
| Anki Collection / 学习状态 | 不在普通缓存清理中删除 |
| Anki 媒体 | 仅通过明确的牌组或媒体维护操作处理 |
| 预渲染缓存 | 可清理，下次按需生成 |
| AI 缓存 | 可清理，不删除课程和会话真相源 |
| 日志 | 可独立清理，不自动改变系统健康分数 |

数据库完整性检查使用只读 \`PRAGMA integrity_check\`。索引维护使用 \`REINDEX\` 和 \`PRAGMA optimize\`。这些操作不得附带删除学习数据。

## 系统健康

本地监控按最近 24 小时事件评分：warning 计 1，error 计 3，fatal 至少提升到 40。同一指纹 60 秒内只累计一次分，但保留真实次数。

| 分数 | 状态 |
| ---: | --- |
| 0–9 | 正常 |
| 10–39 | 需要注意 |
| ≥40 或 fatal | 严重 |

严重状态会进入系统健康页面。确认处理使分数降低 40，最低为 0。新事件仍可再次触发。

## 安全模式

安全模式临时关闭实验功能、模板脚本和外部卡片网络。它不覆盖已保存偏好。退出后恢复原配置。

## 相关文档

- [卡片渲染与网络隔离](/guide/anki-rendering)
- [可访问性](/guide/accessibility)
- [本地数据与隐私](/guide/data-and-privacy)
`,zi=`# 故障排查

排查顺序固定为：确认入口、确认平台、确认数据所有者、读取可见错误、执行最小复现。不要先清除应用数据。

## 启动

### 应用停留在启动页

1. 检查课程 JSON 是否通过校验。
2. 检查内容版本与数据库 schema。
3. 检查可用存储空间。
4. 读取 seed 或 migration 错误。
5. 仅在已有备份时考虑清除派生缓存。

### Web 主站打开成文档站

使用 \`npm run dev\` 输出的 \`Open the Turna site at ...\` 地址。不要使用 docs 内部端口。根路径 \`/\` 是产品主站，\`/docs/\` 是文档站。

## 课程

| 症状 | 可能原因 | 操作 |
| --- | --- | --- |
| Lesson 不显示 | 先修未满足或 section 文件未加载 | 检查依赖 ID 和文件指针 |
| 修改内容未出现 | \`index.json\` version 未增加 | 增加版本并重新导入 |
| 题目空白 | 未注册 runtimeType 或字段缺失 | 运行 validate 与 lint |
| 音频不播放 | 资产缺失或 TTS 不可用 | 检查 manifest、引擎和语言包 |

## 复习

| 症状 | 检查 |
| --- | --- |
| 无到期项目 | 系统时钟、due、课程 scope、筛选规则 |
| 项目无限重复 | 当日重学配置、评分事务、失败计数 |
| 评分后回退 | 数据库写入错误或并发撤销 |
| 间隔异常 | 目标保持率、最大间隔、调度所有者 |

## Anki

### 导入失败

确认文件为 \`.apkg\`、Official runtime 可用、ABI 匹配、存储足够。\`.colpkg\` 在当前 Android 生产路径中 fail-closed。

### 卡片空白

依次切换自动渲染、Flutter HTML 和纯文本。检查模板字段、媒体、JavaScript、预渲染失败记录。不要直接开放网络作为第一处理步骤。

### Official 卡无法复习

检查 source owner 和 scheduler runtime。Official owner 不得降级到 Turna SRS。

## AI

1. 执行连接测试。
2. 检查 base URL、key 和模型名。
3. 使用最小纯文本请求。
4. 再测试 JSON 请求。
5. 检查预算、超时与输出解析错误。

生成课程失败时保留草稿和验证报告，不手工把不完整 JSON 写入课程目录。

## 系统健康

严重页面中的建议是只读诊断。可先启用安全模式，再导出脱敏报告。清空日志不会自动恢复健康分数；必须确认已处理问题。

## Web 与 docs 开发

\`\`\`bash
npm install
npm --prefix docs install
npm run dev
\`\`\`

启动器自动选择两个空闲端口。只访问输出的主站地址。构建失败时分别执行：

\`\`\`bash
npx tsc -b --pretty false
npm test
npm run docs:build
\`\`\`

## 升级前证据

- 错误全文或脱敏报告。
- 平台与版本。
- 最小复现步骤。
- 数据来源与 owner。
- 是否在安全模式下复现。
- 最近修改的设置或课程版本。

## 相关文档

- [设置系统](/guide/settings)
- [测试与质量门禁](/developer/testing)
- [常见问题](/guide/faq)
`,Ki=`# 什么是 Turna？

Turna（土耳其语中意为「鹤」）是一款**本地优先、离线可用**的开源语言学习应用，目前专注土耳其语。

## 解决的问题

很多语言学习工具强依赖云端：没网就停摆、课程固定不能改、复习节奏全靠服务器决定。Turna 走的是相反的路：

- **离线能用**：课程数据存在本地，无网络时照常学习与复习。
- **节奏可调**：内置开源 FSRS 算法，按你的真实记忆曲线安排复习。
- **课程可改**：桌面端提供课程编辑器，课时蓝图与内容可双向编辑。
- **不锁数据**：复用官方 Anki 内核，牌组可导入导出。

## 适合谁

- 想系统学习土耳其语、但不想被网络与订阅绑住的人。
- 已经在用 Anki 复习、希望牌组「课程化」、按课时推进的人。
- 喜欢研究记忆算法、对 FSRS 的工程实现感兴趣的人。
- 想二次开发或自部署语言学习工具的开发者。

## 当前阶段

Turna 是**持续开发中的开源项目**，课程内容还在缓慢扩充中。功能上，「离线学习 + FSRS 复习 + Anki 导入 + AI 伴学 + 课程编辑器」已经可用。

## 下一步

- [5 分钟本地跑起来](/guide/getting-started)
- [核心能力一览](/guide/features)
- [课程结构](/guide/curriculum)
`,qi=`# 如何丰富文档

文档要变多，靠的是**固定目录 + 改写已有材料 + 按读者分层**，不是把应用仓库里的 Markdown 整盘搬过来。

Turna 已经有两处现成的内容源：

| 来源 | 适合变成什么 | 不该原样公开的 |
| --- | --- | --- |
| 本仓库专题页（\`anki.html\`、\`fsrs.html\`、\`ai.html\`、\`editor.html\`、\`curriculum.html\`） | 功能说明、概念入门 | 纯视觉演示代码 |
| 应用仓库 \`Varnamalaplus/docs/\` | 教师指南、课程约定、架构摘要 | ADR、迁移计划、审计报告、施工 playbook |

应用仓库里目前大约有 70+ 篇 Markdown。其中大部分是一次性工程文档（\`official-anki-migration/\`、\`*-plan.md\`、\`decisions/\`）。这些对贡献者有用，对产品文档站点有害：会过期、难检索、读起来像工单。

## 先定读者，再开目录

每一页只服务一类人：

1. **学习者 / 访客**：Turna 是什么、怎么跑起来、FSRS / Anki / AI 能做什么。
2. **老师 / 课程作者**：怎么用编辑器改一课、JSON 目录怎么摆。
3. **开发者**：架构从哪读、文档怎么加，而不是把 \`project-guide.md\` 整篇贴进来。

对应到本站目录：

\`\`\`text
docs/
  index.md                 # 文档门户
  guide/                   # 学习者与访客
    what-is-turna.md
    getting-started.md
    features.md
    fsrs.md
    anki.md
    …
  authoring/               # 老师与课程作者
    teacher-guide.md
    course-layout.md
\`\`\`

新页面先问：它属于哪一类？然后只改对应 sidebar，不要另起一个平行站点。

## 从已有材料改写，不要从零写

推荐顺序：

1. **专题页 → \`guide/\`**  
   产品主页上的 Anki / FSRS / AI / 编辑器 / 课程页已经写过面向用户的句子。文档页用同样的事实，补上步骤、限制和链接，不要再写一套营销文案。
2. **\`project-guide.md\` → 拆章节**  
   应用仓库的项目指南是单一事实来源。按「复习 / Anki / AI / 编辑器 / 课程格式」各抽一章，改写成 1 屏能读完的文档页。不要整篇镜像。
3. **\`docs/authoring/\` → \`authoring/\`**  
   教师指南、课型模板、课程目录约定已经是给人看的，几乎可以直接搬，只需改掉指向源码的相对路径。
4. **内容清单 → 课程页附录**  
   \`content_inventory_current.md\` 适合摘要（Section 数、词汇数），不适合把 148 行词表贴进 VitePress。

改写时保留：概念、步骤、限制、指向代码或专题页的链接。删掉：日期快照、测试计数、内部 ticket 号、已经做完的迁移阶段。

## 一页一条任务

- 标题用读者会搜的词：「如何导入 Anki 牌组」，不要用「P5D remainder」。
- 开头三行说清楚「这页解决什么」。
- 步骤用编号列表；概念用短表。
- 文末只留 1–2 个「下一步」，把人送到下一层，而不是链到十个相关页。
- 过期的计划文档不要改写成指南，直接不收录。

## 加一篇新文档的步骤

1. 在 \`docs/guide/\` 或 \`docs/authoring/\` 新建 Markdown。
2. 在 \`docs/.vitepress/config.mts\` 的 \`sidebar\` 里加一条。
3. 从相关旧页链过来（\`features.md\`、文档首页、或专题 HTML）。
4. 本地检查：

\`\`\`bash
npm run dev
\`\`\`

从终端给出的主站地址点击「文档」，确认主站往返、侧栏、搜索和站内链接都通。只调试文档时可运行 \`npm run docs:dev\`，并打开 <http://localhost:5174/docs/>。

5. \`npm run build\` 会把文档打进 \`dist/docs/\`，产品主页顶部的「文档」指向这里。

## 刻意不收录的内容

- \`docs/decisions/00xx-*.md\`：ADR 留在应用仓库。
- \`docs/official-anki-migration/\`：施工过程，不是产品说明。
- 各类 \`*-plan.md\` / \`*-audit.md\` / \`*-result-report.md\`：做完即过期。
- 截图夹、fixture、CI 产物。

如果贡献者需要这些，在开发者页用一句话链到应用仓库路径即可。

## 让「量大」可检索

页面变多之后，发现比写作更重要：

- 打开 VitePress 本地搜索（本站已启用），标题和正文都能搜到。
- 同一件事只在一页讲透，其它页只链过去，避免三份互相打架的 FSRS 说明。
- 侧栏分组保持浅：开始 / 功能 / 课程 / 创作。超过两层读者就不会点。

## 和代码同步

文档不是第二个事实来源。行为变了，先改应用仓库的 \`project-guide.md\` 或 \`authoring/\`，再改本站对应页。本站负责「读得快」，应用仓库负责「写得全」。
`,Qi=`---
layout: home

hero:
  name: TURNA / DOCUMENTATION / 01
  text: Turna 系统文档
  tagline: 41 篇技术文档。覆盖部署、课程结构、记忆调度、Anki、AI、数据边界、课程生产、构建与质量门禁。
  actions:
    - theme: brand
      text: 开始部署
      link: /guide/getting-started
    - theme: alt
      text: 查看系统能力
      link: /guide/features
---

<HomeContent />
`;async function Xi(n,e=navigator.clipboard,t=document){if(e)try{return await e.writeText(n),!0}catch{}try{const s=t.createElement("textarea");s.value=n,s.style.position="fixed",s.style.opacity="0",t.body.appendChild(s),s.select();const o=t.execCommand("copy");return s.remove(),o}catch{return!1}}const Yi={key:0,class:"copy-page-source"},Zi=p({__name:"CopyPage",setup(n){const{page:e}=Ln(),t=Object.assign({"../../authoring/audio-assets.md":ui,"../../authoring/course-layout.md":di,"../../authoring/lesson-schema.md":vi,"../../authoring/release-checklist.md":fi,"../../authoring/resource-files.md":mi,"../../authoring/teacher-guide.md":hi,"../../authoring/textbook-import.md":pi,"../../authoring/validation.md":gi,"../../developer/android-build.md":_i,"../../developer/architecture.md":bi,"../../developer/glossary.md":ki,"../../developer/local-data.md":yi,"../../developer/testing.md":Si,"../../developer/web-docs-build.md":Ai,"../../guide/accessibility.md":$i,"../../guide/ai-configuration.md":Li,"../../guide/ai-workflows.md":Ii,"../../guide/ai.md":Pi,"../../guide/anki-import.md":Ti,"../../guide/anki-rendering.md":Vi,"../../guide/anki.md":Ni,"../../guide/audio-and-tts.md":Oi,"../../guide/curriculum.md":xi,"../../guide/data-and-privacy.md":wi,"../../guide/editor.md":Ci,"../../guide/faq.md":Mi,"../../guide/features.md":Ri,"../../guide/fsrs.md":Di,"../../guide/getting-started.md":Fi,"../../guide/install-app.md":Ei,"../../guide/interaction-types.md":Hi,"../../guide/learning-workflow.md":Bi,"../../guide/lesson-types.md":Ui,"../../guide/memory-state.md":Ji,"../../guide/mistakes-and-weak-items.md":ji,"../../guide/review-system.md":Gi,"../../guide/settings.md":Wi,"../../guide/troubleshooting.md":zi,"../../guide/what-is-turna.md":Ki,"../../guide/writing-docs.md":qi,"../../index.md":Qi}),s=P("idle");let o;const c=S(()=>t[`../../${e.value.relativePath}`]||""),r=S(()=>s.value==="copied"?"已复制全文":s.value==="failed"?"复制失败":"复制全文");async function u(){c.value&&(s.value=await Xi(c.value)?"copied":"failed",o&&clearTimeout(o),o=setTimeout(()=>{s.value="idle"},1800))}return wn(()=>{o&&clearTimeout(o)}),(f,b)=>c.value?(i(),d("div",Yi,[b[1]||(b[1]=a("span",null,"FORMAT / MARKDOWN · SCOPE / CURRENT PAGE",-1)),a("button",{type:"button",class:N({copied:s.value==="copied"}),onClick:u},[b[0]||(b[0]=a("svg",{viewBox:"0 0 24 24","aria-hidden":"true"},[a("path",{d:"M8 7V5.8C8 4.8 8.8 4 9.8 4h8.4c1 0 1.8.8 1.8 1.8v8.4c0 1-.8 1.8-1.8 1.8H17M5.8 8h8.4c1 0 1.8.8 1.8 1.8v8.4c0 1-.8 1.8-1.8 1.8H5.8c-1 0-1.8-.8-1.8-1.8V9.8C4 8.8 4.8 8 5.8 8Z"})],-1)),D(" "+A(r.value),1)],2)])):h("",!0)}}),er={extends:$n,Layout:()=>Sn($n.Layout,null,{"doc-before":()=>Sn(Zi)}),enhanceApp({app:n}){n.component("HomeContent",ci)}};export{er as R,mo as c,L as u};
