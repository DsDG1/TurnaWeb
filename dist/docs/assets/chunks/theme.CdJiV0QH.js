const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/VPLocalSearchBox.Ch1Tbtsh.js","assets/chunks/framework.XctAhZuT.js"])))=>i.map(i=>d[i]);
import{d as v,c as u,r as p,n as $,o as s,a as R,t as S,b as _,w as g,T as mn,e as h,_ as y,u as Ln,i as Fn,f as Un,g as M,h as A,j as o,k as l,l as G,m as ln,p as w,q as F,s as Y,v as J,x as gn,y as hn,z as Bn,A as Hn,F as P,B as O,C as W,D as X,E as f,G as xn,H as j,I as wn,J as Z,K as H,L as nn,M as Jn,N as Pn,O as cn,P as Tn,Q as $n,R as en,S as Gn,U as Wn,V as qn,W as Cn,X as On,Y as zn,Z as Kn,$ as Nn,a0 as Qn,a1 as Yn,a2 as sn,a3 as An}from"./framework.XctAhZuT.js";const Xn=v({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(n){return(e,t)=>(s(),u("span",{class:$(["VPBadge",n.type])},[p(e.$slots,"default",{},()=>[R(S(n.text),1)])],2))}}),Zn={key:0,class:"VPBackdrop"},ne=v({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(n){return(e,t)=>(s(),_(mn,{name:"fade"},{default:g(()=>[n.show?(s(),u("div",Zn)):h("",!0)]),_:1}))}}),ee=y(ne,[["__scopeId","data-v-54a304ca"]]),L=Ln;function te(n,e){let t,r=!1;return()=>{t&&clearTimeout(t),r?t=setTimeout(n,e):(n(),(r=!0)&&setTimeout(()=>r=!1,e))}}function dn(n){return n.startsWith("/")?n:`/${n}`}function vn(n){const{pathname:e,search:t,hash:r,protocol:i}=new URL(n,"http://a.com");if(Fn(n)||n.startsWith("#")||!i.startsWith("http")||!Un(e))return n;const{site:c}=L(),a=e.endsWith("/")||e.endsWith(".html")?n:n.replace(/(?:(^\.+)\/)?.*$/,`$1${e.replace(/(\.md)?$/,c.value.cleanUrls?"":".html")}${t}${r}`);return M(a)}function z({correspondingLink:n=!1}={}){const{site:e,localeIndex:t,page:r,theme:i,hash:c}=L(),a=A(()=>{var m,b;return{label:(m=e.value.locales[t.value])==null?void 0:m.label,link:((b=e.value.locales[t.value])==null?void 0:b.link)||(t.value==="root"?"/":`/${t.value}/`)}});return{localeLinks:A(()=>Object.entries(e.value.locales).flatMap(([m,b])=>a.value.label===b.label?[]:{text:b.label,link:re(b.link||(m==="root"?"/":`/${m}/`),i.value.i18nRouting!==!1&&n,r.value.relativePath.slice(a.value.link.length-1),!e.value.cleanUrls)+c.value})),currentLang:a}}function re(n,e,t,r){return e?n.replace(/\/$/,"")+dn(t.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,r?".html":"")):n}const ie={class:"NotFound"},oe={class:"code"},se={class:"title"},ae={class:"quote"},le={class:"action"},ce=["href","aria-label"],de=v({__name:"NotFound",setup(n){const{theme:e}=L(),{currentLang:t}=z();return(r,i)=>{var c,a,d,m,b;return s(),u("div",ie,[o("p",oe,S(((c=l(e).notFound)==null?void 0:c.code)??"404"),1),o("h1",se,S(((a=l(e).notFound)==null?void 0:a.title)??"PAGE NOT FOUND"),1),i[0]||(i[0]=o("div",{class:"divider"},null,-1)),o("blockquote",ae,S(((d=l(e).notFound)==null?void 0:d.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),o("div",le,[o("a",{class:"link",href:l(M)(l(t).link),"aria-label":((m=l(e).notFound)==null?void 0:m.linkLabel)??"go to home"},S(((b=l(e).notFound)==null?void 0:b.linkText)??"Take me home"),9,ce)])])}}}),ue=y(de,[["__scopeId","data-v-6ff51ddd"]]);function Mn(n,e){if(Array.isArray(n))return K(n);if(n==null)return[];e=dn(e);const t=Object.keys(n).sort((i,c)=>c.split("/").length-i.split("/").length).find(i=>e.startsWith(dn(i))),r=t?n[t]:[];return Array.isArray(r)?K(r):K(r.items,r.base)}function pe(n){const e=[];let t=0;for(const r in n){const i=n[r];if(i.items){t=e.push(i);continue}e[t]||e.push({items:[]}),e[t].items.push(i)}return e}function me(n){const e=[];function t(r){for(const i of r)i.text&&i.link&&e.push({text:i.text,link:i.link,docFooterText:i.docFooterText}),i.items&&t(i.items)}return t(n),e}function un(n,e){return Array.isArray(e)?e.some(t=>un(n,t)):G(n,e.link)?!0:e.items?un(n,e.items):!1}function K(n,e){return[...n].map(t=>{const r={...t},i=r.base||e;return i&&r.link&&(r.link=i+r.link),r.items&&(r.items=K(r.items,i)),r})}function U(){const{frontmatter:n,page:e,theme:t}=L(),r=ln("(min-width: 960px)"),i=w(!1),c=A(()=>{const N=t.value.sidebar,V=e.value.relativePath;return N?Mn(N,V):[]}),a=w(c.value);F(c,(N,V)=>{JSON.stringify(N)!==JSON.stringify(V)&&(a.value=c.value)});const d=A(()=>n.value.sidebar!==!1&&a.value.length>0&&n.value.layout!=="home"),m=A(()=>b?n.value.aside==null?t.value.aside==="left":n.value.aside==="left":!1),b=A(()=>n.value.layout==="home"?!1:n.value.aside!=null?!!n.value.aside:t.value.aside!==!1),x=A(()=>d.value&&r.value),k=A(()=>d.value?pe(a.value):[]);function I(){i.value=!0}function T(){i.value=!1}function C(){i.value?T():I()}return{isOpen:i,sidebar:a,sidebarGroups:k,hasSidebar:d,hasAside:b,leftAside:m,isSidebarEnabled:x,open:I,close:T,toggle:C}}function ge(n,e){let t;Y(()=>{t=n.value?document.activeElement:void 0}),J(()=>{window.addEventListener("keyup",r)}),gn(()=>{window.removeEventListener("keyup",r)});function r(i){i.key==="Escape"&&n.value&&(e(),t==null||t.focus())}}function he(n){const{page:e,hash:t}=L(),r=w(!1),i=A(()=>n.value.collapsed!=null),c=A(()=>!!n.value.link),a=w(!1),d=()=>{a.value=G(e.value.relativePath,n.value.link)};F([e,n,t],d),J(d);const m=A(()=>a.value?!0:n.value.items?un(e.value.relativePath,n.value.items):!1),b=A(()=>!!(n.value.items&&n.value.items.length));Y(()=>{r.value=!!(i.value&&n.value.collapsed)}),hn(()=>{(a.value||m.value)&&(r.value=!1)});function x(){i.value&&(r.value=!r.value)}return{collapsed:r,collapsible:i,isLink:c,isActiveLink:a,hasActiveLink:m,hasChildren:b,toggle:x}}function ve(){const{hasSidebar:n}=U(),e=ln("(min-width: 960px)"),t=ln("(min-width: 1280px)");return{isAsideEnabled:A(()=>!t.value&&!e.value?!1:n.value?t.value:e.value)}}const fe=/\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/,pn=[];function Vn(n){return typeof n.outline=="object"&&!Array.isArray(n.outline)&&n.outline.label||n.outlineTitle||"On this page"}function fn(n){const e=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(t=>t.id&&t.hasChildNodes()).map(t=>{const r=Number(t.tagName[1]);return{element:t,title:_e(t),link:"#"+t.id,level:r}});return be(e,n)}function _e(n){let e="";for(const t of n.childNodes)if(t.nodeType===1){if(fe.test(t.className))continue;e+=t.textContent}else t.nodeType===3&&(e+=t.textContent);return e.trim()}function be(n,e){if(e===!1)return[];const t=(typeof e=="object"&&!Array.isArray(e)?e.level:e)||2,[r,i]=typeof t=="number"?[t,t]:t==="deep"?[2,6]:t;return Ae(n,r,i)}function ke(n,e){const{isAsideEnabled:t}=ve(),r=te(c,100);let i=null;J(()=>{requestAnimationFrame(c),window.addEventListener("scroll",r)}),Bn(()=>{a(location.hash)}),gn(()=>{window.removeEventListener("scroll",r)});function c(){if(!t.value)return;const d=window.scrollY,m=window.innerHeight,b=document.body.offsetHeight,x=Math.abs(d+m-b)<1,k=pn.map(({element:T,link:C})=>({link:C,top:ye(T)})).filter(({top:T})=>!Number.isNaN(T)).sort((T,C)=>T.top-C.top);if(!k.length){a(null);return}if(d<1){a(null);return}if(x){a(k[k.length-1].link);return}let I=null;for(const{link:T,top:C}of k){if(C>d+Hn()+4)break;I=T}a(I)}function a(d){i&&i.classList.remove("active"),d==null?i=null:i=n.value.querySelector(`a[href="${decodeURIComponent(d)}"]`);const m=i;m?(m.classList.add("active"),e.value.style.top=m.offsetTop+39+"px",e.value.style.opacity="1"):(e.value.style.top="33px",e.value.style.opacity="0")}}function ye(n){let e=0;for(;n!==document.body;){if(n===null)return NaN;e+=n.offsetTop,n=n.offsetParent}return e}function Ae(n,e,t){pn.length=0;const r=[],i=[];return n.forEach(c=>{const a={...c,children:[]};let d=i[i.length-1];for(;d&&d.level>=a.level;)i.pop(),d=i[i.length-1];if(a.element.classList.contains("ignore-header")||d&&"shouldIgnore"in d){i.push({level:a.level,shouldIgnore:!0});return}a.level>t||a.level<e||(pn.push({element:a.element,link:a.link}),d?d.children.push(a):r.push(a),i.push(a))}),r}const Se=["href","title"],Ie=v({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(n){function e({target:t}){const r=t.href.split("#")[1],i=document.getElementById(decodeURIComponent(r));i==null||i.focus({preventScroll:!0})}return(t,r)=>{const i=W("VPDocOutlineItem",!0);return s(),u("ul",{class:$(["VPDocOutlineItem",n.root?"root":"nested"])},[(s(!0),u(P,null,O(n.headers,({children:c,link:a,title:d})=>(s(),u("li",null,[o("a",{class:"outline-link",href:a,onClick:e,title:d},S(d),9,Se),c!=null&&c.length?(s(),_(i,{key:0,headers:c},null,8,["headers"])):h("",!0)]))),256))],2)}}}),Dn=y(Ie,[["__scopeId","data-v-53c99d69"]]),Le={class:"content"},xe={"aria-level":"2",class:"outline-title",id:"doc-outline-aria-label",role:"heading"},we=v({__name:"VPDocAsideOutline",setup(n){const{frontmatter:e,theme:t}=L(),r=xn([]);X(()=>{r.value=fn(e.value.outline??t.value.outline)});const i=w(),c=w();return ke(i,c),(a,d)=>(s(),u("nav",{"aria-labelledby":"doc-outline-aria-label",class:$(["VPDocAsideOutline",{"has-outline":r.value.length>0}]),ref_key:"container",ref:i},[o("div",Le,[o("div",{class:"outline-marker",ref_key:"marker",ref:c},null,512),o("div",xe,S(l(Vn)(l(t))),1),f(Dn,{headers:r.value,root:!0},null,8,["headers"])])],2))}}),Pe=y(we,[["__scopeId","data-v-f610f197"]]),Te={class:"VPDocAsideCarbonAds"},$e=v({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(n){const e=()=>null;return(t,r)=>(s(),u("div",Te,[f(l(e),{"carbon-ads":n.carbonAds},null,8,["carbon-ads"])]))}}),Ce={class:"VPDocAside"},Oe=v({__name:"VPDocAside",setup(n){const{theme:e}=L();return(t,r)=>(s(),u("div",Ce,[p(t.$slots,"aside-top",{},void 0,!0),p(t.$slots,"aside-outline-before",{},void 0,!0),f(Pe),p(t.$slots,"aside-outline-after",{},void 0,!0),r[0]||(r[0]=o("div",{class:"spacer"},null,-1)),p(t.$slots,"aside-ads-before",{},void 0,!0),l(e).carbonAds?(s(),_($e,{key:0,"carbon-ads":l(e).carbonAds},null,8,["carbon-ads"])):h("",!0),p(t.$slots,"aside-ads-after",{},void 0,!0),p(t.$slots,"aside-bottom",{},void 0,!0)]))}}),Ne=y(Oe,[["__scopeId","data-v-cb998dce"]]);function Me(){const{theme:n,page:e}=L();return A(()=>{const{text:t="Edit this page",pattern:r=""}=n.value.editLink||{};let i;return typeof r=="function"?i=r(e.value):i=r.replace(/:path/g,e.value.filePath),{url:i,text:t}})}function Ve(){const{page:n,theme:e,frontmatter:t}=L();return A(()=>{var b,x,k,I,T,C,N,V;const r=Mn(e.value.sidebar,n.value.relativePath),i=me(r),c=De(i,D=>D.link.replace(/[?#].*$/,"")),a=c.findIndex(D=>G(n.value.relativePath,D.link)),d=((b=e.value.docFooter)==null?void 0:b.prev)===!1&&!t.value.prev||t.value.prev===!1,m=((x=e.value.docFooter)==null?void 0:x.next)===!1&&!t.value.next||t.value.next===!1;return{prev:d?void 0:{text:(typeof t.value.prev=="string"?t.value.prev:typeof t.value.prev=="object"?t.value.prev.text:void 0)??((k=c[a-1])==null?void 0:k.docFooterText)??((I=c[a-1])==null?void 0:I.text),link:(typeof t.value.prev=="object"?t.value.prev.link:void 0)??((T=c[a-1])==null?void 0:T.link)},next:m?void 0:{text:(typeof t.value.next=="string"?t.value.next:typeof t.value.next=="object"?t.value.next.text:void 0)??((C=c[a+1])==null?void 0:C.docFooterText)??((N=c[a+1])==null?void 0:N.text),link:(typeof t.value.next=="object"?t.value.next.link:void 0)??((V=c[a+1])==null?void 0:V.link)}}})}function De(n,e){const t=new Set;return n.filter(r=>{const i=e(r);return t.has(i)?!1:t.add(i)})}const E=v({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(n){const e=n,t=A(()=>e.tag??(e.href?"a":"span")),r=A(()=>e.href&&wn.test(e.href)||e.target==="_blank");return(i,c)=>(s(),_(j(t.value),{class:$(["VPLink",{link:n.href,"vp-external-link-icon":r.value,"no-icon":n.noIcon}]),href:n.href?l(vn)(n.href):void 0,target:n.target??(r.value?"_blank":void 0),rel:n.rel??(r.value?"noreferrer":void 0)},{default:g(()=>[p(i.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),Re={class:"VPLastUpdated"},je=["datetime"],Ee=v({__name:"VPDocFooterLastUpdated",setup(n){const{theme:e,page:t,lang:r}=L(),i=A(()=>new Date(t.value.lastUpdated)),c=A(()=>i.value.toISOString()),a=w("");return J(()=>{Y(()=>{var d,m,b;a.value=new Intl.DateTimeFormat((m=(d=e.value.lastUpdated)==null?void 0:d.formatOptions)!=null&&m.forceLocale?r.value:void 0,((b=e.value.lastUpdated)==null?void 0:b.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(i.value)})}),(d,m)=>{var b;return s(),u("p",Re,[R(S(((b=l(e).lastUpdated)==null?void 0:b.text)||l(e).lastUpdatedText||"Last updated")+": ",1),o("time",{datetime:c.value},S(a.value),9,je)])}}}),Fe=y(Ee,[["__scopeId","data-v-1bb0c8a8"]]),Ue={key:0,class:"VPDocFooter"},Be={key:0,class:"edit-info"},He={key:0,class:"edit-link"},Je={key:1,class:"last-updated"},Ge={key:1,class:"prev-next","aria-labelledby":"doc-footer-aria-label"},We={class:"pager"},qe=["innerHTML"],ze=["innerHTML"],Ke={class:"pager"},Qe=["innerHTML"],Ye=["innerHTML"],Xe=v({__name:"VPDocFooter",setup(n){const{theme:e,page:t,frontmatter:r}=L(),i=Me(),c=Ve(),a=A(()=>e.value.editLink&&r.value.editLink!==!1),d=A(()=>t.value.lastUpdated),m=A(()=>a.value||d.value||c.value.prev||c.value.next);return(b,x)=>{var k,I,T,C;return m.value?(s(),u("footer",Ue,[p(b.$slots,"doc-footer-before",{},void 0,!0),a.value||d.value?(s(),u("div",Be,[a.value?(s(),u("div",He,[f(E,{class:"edit-link-button",href:l(i).url,"no-icon":!0},{default:g(()=>[x[0]||(x[0]=o("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),R(" "+S(l(i).text),1)]),_:1},8,["href"])])):h("",!0),d.value?(s(),u("div",Je,[f(Fe)])):h("",!0)])):h("",!0),(k=l(c).prev)!=null&&k.link||(I=l(c).next)!=null&&I.link?(s(),u("nav",Ge,[x[1]||(x[1]=o("span",{class:"visually-hidden",id:"doc-footer-aria-label"},"Pager",-1)),o("div",We,[(T=l(c).prev)!=null&&T.link?(s(),_(E,{key:0,class:"pager-link prev",href:l(c).prev.link},{default:g(()=>{var N;return[o("span",{class:"desc",innerHTML:((N=l(e).docFooter)==null?void 0:N.prev)||"Previous page"},null,8,qe),o("span",{class:"title",innerHTML:l(c).prev.text},null,8,ze)]}),_:1},8,["href"])):h("",!0)]),o("div",Ke,[(C=l(c).next)!=null&&C.link?(s(),_(E,{key:0,class:"pager-link next",href:l(c).next.link},{default:g(()=>{var N;return[o("span",{class:"desc",innerHTML:((N=l(e).docFooter)==null?void 0:N.next)||"Next page"},null,8,Qe),o("span",{class:"title",innerHTML:l(c).next.text},null,8,Ye)]}),_:1},8,["href"])):h("",!0)])])):h("",!0)])):h("",!0)}}}),Ze=y(Xe,[["__scopeId","data-v-1bcd8184"]]),nt={class:"container"},et={class:"aside-container"},tt={class:"aside-content"},rt={class:"content"},it={class:"content-container"},ot={class:"main"},st=v({__name:"VPDoc",setup(n){const{theme:e}=L(),t=Z(),{hasSidebar:r,hasAside:i,leftAside:c}=U(),a=A(()=>t.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(d,m)=>{const b=W("Content");return s(),u("div",{class:$(["VPDoc",{"has-sidebar":l(r),"has-aside":l(i)}])},[p(d.$slots,"doc-top",{},void 0,!0),o("div",nt,[l(i)?(s(),u("div",{key:0,class:$(["aside",{"left-aside":l(c)}])},[m[0]||(m[0]=o("div",{class:"aside-curtain"},null,-1)),o("div",et,[o("div",tt,[f(Ne,null,{"aside-top":g(()=>[p(d.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":g(()=>[p(d.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":g(()=>[p(d.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":g(()=>[p(d.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":g(()=>[p(d.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":g(()=>[p(d.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):h("",!0),o("div",rt,[o("div",it,[p(d.$slots,"doc-before",{},void 0,!0),o("main",ot,[f(b,{class:$(["vp-doc",[a.value,l(e).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),f(Ze,null,{"doc-footer-before":g(()=>[p(d.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),p(d.$slots,"doc-after",{},void 0,!0)])])]),p(d.$slots,"doc-bottom",{},void 0,!0)],2)}}}),at=y(st,[["__scopeId","data-v-e6f2a212"]]),lt=v({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(n){const e=n,t=A(()=>e.href&&wn.test(e.href)),r=A(()=>e.tag||(e.href?"a":"button"));return(i,c)=>(s(),_(j(r.value),{class:$(["VPButton",[n.size,n.theme]]),href:n.href?l(vn)(n.href):void 0,target:e.target??(t.value?"_blank":void 0),rel:e.rel??(t.value?"noreferrer":void 0)},{default:g(()=>[R(S(n.text),1)]),_:1},8,["class","href","target","rel"]))}}),ct=y(lt,[["__scopeId","data-v-93dc4167"]]),dt=["src","alt"],ut=v({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(n){return(e,t)=>{const r=W("VPImage",!0);return n.image?(s(),u(P,{key:0},[typeof n.image=="string"||"src"in n.image?(s(),u("img",H({key:0,class:"VPImage"},typeof n.image=="string"?e.$attrs:{...n.image,...e.$attrs},{src:l(M)(typeof n.image=="string"?n.image:n.image.src),alt:n.alt??(typeof n.image=="string"?"":n.image.alt||"")}),null,16,dt)):(s(),u(P,{key:1},[f(r,H({class:"dark",image:n.image.dark,alt:n.image.alt},e.$attrs),null,16,["image","alt"]),f(r,H({class:"light",image:n.image.light,alt:n.image.alt},e.$attrs),null,16,["image","alt"])],64))],64)):h("",!0)}}}),Q=y(ut,[["__scopeId","data-v-ab19afbb"]]),pt={class:"container"},mt={class:"main"},gt={class:"heading"},ht=["innerHTML"],vt=["innerHTML"],ft=["innerHTML"],_t={key:0,class:"actions"},bt={key:0,class:"image"},kt={class:"image-container"},yt=v({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(n){const e=nn("hero-image-slot-exists");return(t,r)=>(s(),u("div",{class:$(["VPHero",{"has-image":n.image||l(e)}])},[o("div",pt,[o("div",mt,[p(t.$slots,"home-hero-info-before",{},void 0,!0),p(t.$slots,"home-hero-info",{},()=>[o("h1",gt,[n.name?(s(),u("span",{key:0,innerHTML:n.name,class:"name clip"},null,8,ht)):h("",!0),n.text?(s(),u("span",{key:1,innerHTML:n.text,class:"text"},null,8,vt)):h("",!0)]),n.tagline?(s(),u("p",{key:0,innerHTML:n.tagline,class:"tagline"},null,8,ft)):h("",!0)],!0),p(t.$slots,"home-hero-info-after",{},void 0,!0),n.actions?(s(),u("div",_t,[(s(!0),u(P,null,O(n.actions,i=>(s(),u("div",{key:i.link,class:"action"},[f(ct,{tag:"a",size:"medium",theme:i.theme,text:i.text,href:i.link,target:i.target,rel:i.rel},null,8,["theme","text","href","target","rel"])]))),128))])):h("",!0),p(t.$slots,"home-hero-actions-after",{},void 0,!0)]),n.image||l(e)?(s(),u("div",bt,[o("div",kt,[r[0]||(r[0]=o("div",{class:"image-bg"},null,-1)),p(t.$slots,"home-hero-image",{},()=>[n.image?(s(),_(Q,{key:0,class:"image-src",image:n.image},null,8,["image"])):h("",!0)],!0)])])):h("",!0)])],2))}}),At=y(yt,[["__scopeId","data-v-dd8814ff"]]),St=v({__name:"VPHomeHero",setup(n){const{frontmatter:e}=L();return(t,r)=>l(e).hero?(s(),_(At,{key:0,class:"VPHomeHero",name:l(e).hero.name,text:l(e).hero.text,tagline:l(e).hero.tagline,image:l(e).hero.image,actions:l(e).hero.actions},{"home-hero-info-before":g(()=>[p(t.$slots,"home-hero-info-before")]),"home-hero-info":g(()=>[p(t.$slots,"home-hero-info")]),"home-hero-info-after":g(()=>[p(t.$slots,"home-hero-info-after")]),"home-hero-actions-after":g(()=>[p(t.$slots,"home-hero-actions-after")]),"home-hero-image":g(()=>[p(t.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):h("",!0)}}),It={class:"box"},Lt={key:0,class:"icon"},xt=["innerHTML"],wt=["innerHTML"],Pt=["innerHTML"],Tt={key:4,class:"link-text"},$t={class:"link-text-value"},Ct=v({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(n){return(e,t)=>(s(),_(E,{class:"VPFeature",href:n.link,rel:n.rel,target:n.target,"no-icon":!0,tag:n.link?"a":"div"},{default:g(()=>[o("article",It,[typeof n.icon=="object"&&n.icon.wrap?(s(),u("div",Lt,[f(Q,{image:n.icon,alt:n.icon.alt,height:n.icon.height||48,width:n.icon.width||48},null,8,["image","alt","height","width"])])):typeof n.icon=="object"?(s(),_(Q,{key:1,image:n.icon,alt:n.icon.alt,height:n.icon.height||48,width:n.icon.width||48},null,8,["image","alt","height","width"])):n.icon?(s(),u("div",{key:2,class:"icon",innerHTML:n.icon},null,8,xt)):h("",!0),o("h2",{class:"title",innerHTML:n.title},null,8,wt),n.details?(s(),u("p",{key:3,class:"details",innerHTML:n.details},null,8,Pt)):h("",!0),n.linkText?(s(),u("div",Tt,[o("p",$t,[R(S(n.linkText)+" ",1),t[0]||(t[0]=o("span",{class:"vpi-arrow-right link-text-icon"},null,-1))])])):h("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),Ot=y(Ct,[["__scopeId","data-v-bd37d1a2"]]),Nt={key:0,class:"VPFeatures"},Mt={class:"container"},Vt={class:"items"},Dt=v({__name:"VPFeatures",props:{features:{}},setup(n){const e=n,t=A(()=>{const r=e.features.length;if(r){if(r===2)return"grid-2";if(r===3)return"grid-3";if(r%3===0)return"grid-6";if(r>3)return"grid-4"}else return});return(r,i)=>n.features?(s(),u("div",Nt,[o("div",Mt,[o("div",Vt,[(s(!0),u(P,null,O(n.features,c=>(s(),u("div",{key:c.title,class:$(["item",[t.value]])},[f(Ot,{icon:c.icon,title:c.title,details:c.details,link:c.link,"link-text":c.linkText,rel:c.rel,target:c.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):h("",!0)}}),Rt=y(Dt,[["__scopeId","data-v-b1eea84a"]]),jt=v({__name:"VPHomeFeatures",setup(n){const{frontmatter:e}=L();return(t,r)=>l(e).features?(s(),_(Rt,{key:0,class:"VPHomeFeatures",features:l(e).features},null,8,["features"])):h("",!0)}}),Et=v({__name:"VPHomeContent",setup(n){const{width:e}=Jn({initialWidth:0,includeScrollbar:!1});return(t,r)=>(s(),u("div",{class:"vp-doc container",style:Pn(l(e)?{"--vp-offset":`calc(50% - ${l(e)/2}px)`}:{})},[p(t.$slots,"default",{},void 0,!0)],4))}}),Ft=y(Et,[["__scopeId","data-v-c141a4bd"]]),Ut=v({__name:"VPHome",setup(n){const{frontmatter:e,theme:t}=L();return(r,i)=>{const c=W("Content");return s(),u("div",{class:$(["VPHome",{"external-link-icon-enabled":l(t).externalLinkIcon}])},[p(r.$slots,"home-hero-before",{},void 0,!0),f(St,null,{"home-hero-info-before":g(()=>[p(r.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":g(()=>[p(r.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":g(()=>[p(r.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":g(()=>[p(r.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":g(()=>[p(r.$slots,"home-hero-image",{},void 0,!0)]),_:3}),p(r.$slots,"home-hero-after",{},void 0,!0),p(r.$slots,"home-features-before",{},void 0,!0),f(jt),p(r.$slots,"home-features-after",{},void 0,!0),l(e).markdownStyles!==!1?(s(),_(Ft,{key:0},{default:g(()=>[f(c)]),_:1})):(s(),_(c,{key:1}))],2)}}}),Bt=y(Ut,[["__scopeId","data-v-e07eaea7"]]),Ht={},Jt={class:"VPPage"};function Gt(n,e){const t=W("Content");return s(),u("div",Jt,[p(n.$slots,"page-top"),f(t),p(n.$slots,"page-bottom")])}const Wt=y(Ht,[["render",Gt]]),qt=v({__name:"VPContent",setup(n){const{page:e,frontmatter:t}=L(),{hasSidebar:r}=U();return(i,c)=>(s(),u("div",{class:$(["VPContent",{"has-sidebar":l(r),"is-home":l(t).layout==="home"}]),id:"VPContent"},[l(e).isNotFound?p(i.$slots,"not-found",{},()=>[f(ue)],!0,0):l(t).layout==="page"?(s(),_(Wt,{key:1},{"page-top":g(()=>[p(i.$slots,"page-top",{},void 0,!0)]),"page-bottom":g(()=>[p(i.$slots,"page-bottom",{},void 0,!0)]),_:3})):l(t).layout==="home"?(s(),_(Bt,{key:2},{"home-hero-before":g(()=>[p(i.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":g(()=>[p(i.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":g(()=>[p(i.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":g(()=>[p(i.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":g(()=>[p(i.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":g(()=>[p(i.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":g(()=>[p(i.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":g(()=>[p(i.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":g(()=>[p(i.$slots,"home-features-after",{},void 0,!0)]),_:3})):l(t).layout&&l(t).layout!=="doc"?(s(),_(j(l(t).layout),{key:3})):(s(),_(at,{key:4},{"doc-top":g(()=>[p(i.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":g(()=>[p(i.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":g(()=>[p(i.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":g(()=>[p(i.$slots,"doc-before",{},void 0,!0)]),"doc-after":g(()=>[p(i.$slots,"doc-after",{},void 0,!0)]),"aside-top":g(()=>[p(i.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":g(()=>[p(i.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":g(()=>[p(i.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":g(()=>[p(i.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":g(()=>[p(i.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":g(()=>[p(i.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),zt=y(qt,[["__scopeId","data-v-9a6c75ad"]]),Kt={class:"container"},Qt=["innerHTML"],Yt=["innerHTML"],Xt=v({__name:"VPFooter",setup(n){const{theme:e,frontmatter:t}=L(),{hasSidebar:r}=U();return(i,c)=>l(e).footer&&l(t).footer!==!1?(s(),u("footer",{key:0,class:$(["VPFooter",{"has-sidebar":l(r)}])},[o("div",Kt,[l(e).footer.message?(s(),u("p",{key:0,class:"message",innerHTML:l(e).footer.message},null,8,Qt)):h("",!0),l(e).footer.copyright?(s(),u("p",{key:1,class:"copyright",innerHTML:l(e).footer.copyright},null,8,Yt)):h("",!0)])],2)):h("",!0)}}),Zt=y(Xt,[["__scopeId","data-v-566314d4"]]);function nr(){const{theme:n,frontmatter:e}=L(),t=xn([]),r=A(()=>t.value.length>0);return X(()=>{t.value=fn(e.value.outline??n.value.outline)}),{headers:t,hasLocalNav:r}}const er={class:"menu-text"},tr={class:"header"},rr={class:"outline"},ir=v({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(n){const e=n,{theme:t}=L(),r=w(!1),i=w(0),c=w(),a=w();function d(k){var I;(I=c.value)!=null&&I.contains(k.target)||(r.value=!1)}F(r,k=>{if(k){document.addEventListener("click",d);return}document.removeEventListener("click",d)}),cn("Escape",()=>{r.value=!1}),X(()=>{r.value=!1});function m(){r.value=!r.value,i.value=window.innerHeight+Math.min(window.scrollY-e.navHeight,0)}function b(k){k.target.classList.contains("outline-link")&&(a.value&&(a.value.style.transition="none"),Tn(()=>{r.value=!1}))}function x(){r.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(k,I)=>(s(),u("div",{class:"VPLocalNavOutlineDropdown",style:Pn({"--vp-vh":i.value+"px"}),ref_key:"main",ref:c},[n.headers.length>0?(s(),u("button",{key:0,onClick:m,class:$({open:r.value})},[o("span",er,S(l(Vn)(l(t))),1),I[0]||(I[0]=o("span",{class:"vpi-chevron-right icon"},null,-1))],2)):(s(),u("button",{key:1,onClick:x},S(l(t).returnToTopLabel||"Return to top"),1)),f(mn,{name:"flyout"},{default:g(()=>[r.value?(s(),u("div",{key:0,ref_key:"items",ref:a,class:"items",onClick:b},[o("div",tr,[o("a",{class:"top-link",href:"#",onClick:x},S(l(t).returnToTopLabel||"Return to top"),1)]),o("div",rr,[f(Dn,{headers:n.headers},null,8,["headers"])])],512)):h("",!0)]),_:1})],4))}}),or=y(ir,[["__scopeId","data-v-6b867909"]]),sr={class:"container"},ar=["aria-expanded"],lr={class:"menu-text"},cr=v({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(n){const{theme:e,frontmatter:t}=L(),{hasSidebar:r}=U(),{headers:i}=nr(),{y:c}=$n(),a=w(0);J(()=>{a.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),X(()=>{i.value=fn(t.value.outline??e.value.outline)});const d=A(()=>i.value.length===0),m=A(()=>d.value&&!r.value),b=A(()=>({VPLocalNav:!0,"has-sidebar":r.value,empty:d.value,fixed:m.value}));return(x,k)=>l(t).layout!=="home"&&(!m.value||l(c)>=a.value)?(s(),u("div",{key:0,class:$(b.value)},[o("div",sr,[l(r)?(s(),u("button",{key:0,class:"menu","aria-expanded":n.open,"aria-controls":"VPSidebarNav",onClick:k[0]||(k[0]=I=>x.$emit("open-menu"))},[k[1]||(k[1]=o("span",{class:"vpi-align-left menu-icon"},null,-1)),o("span",lr,S(l(e).sidebarMenuLabel||"Menu"),1)],8,ar)):h("",!0),f(or,{headers:l(i),navHeight:a.value},null,8,["headers","navHeight"])])],2)):h("",!0)}}),dr=y(cr,[["__scopeId","data-v-2488c25a"]]);function ur(){const n=w(!1);function e(){n.value=!0,window.addEventListener("resize",i)}function t(){n.value=!1,window.removeEventListener("resize",i)}function r(){n.value?t():e()}function i(){window.outerWidth>=768&&t()}const c=Z();return F(()=>c.path,t),{isScreenOpen:n,openScreen:e,closeScreen:t,toggleScreen:r}}const pr={},mr={class:"VPSwitch",type:"button",role:"switch"},gr={class:"check"},hr={key:0,class:"icon"};function vr(n,e){return s(),u("button",mr,[o("span",gr,[n.$slots.default?(s(),u("span",hr,[p(n.$slots,"default",{},void 0,!0)])):h("",!0)])])}const fr=y(pr,[["render",vr],["__scopeId","data-v-b4ccac88"]]),_r=v({__name:"VPSwitchAppearance",setup(n){const{isDark:e,theme:t}=L(),r=nn("toggle-appearance",()=>{e.value=!e.value}),i=w("");return hn(()=>{i.value=e.value?t.value.lightModeSwitchTitle||"Switch to light theme":t.value.darkModeSwitchTitle||"Switch to dark theme"}),(c,a)=>(s(),_(fr,{title:i.value,class:"VPSwitchAppearance","aria-checked":l(e),onClick:l(r)},{default:g(()=>[...a[0]||(a[0]=[o("span",{class:"vpi-sun sun"},null,-1),o("span",{class:"vpi-moon moon"},null,-1)])]),_:1},8,["title","aria-checked","onClick"]))}}),_n=y(_r,[["__scopeId","data-v-be9742d9"]]),br={key:0,class:"VPNavBarAppearance"},kr=v({__name:"VPNavBarAppearance",setup(n){const{site:e}=L();return(t,r)=>l(e).appearance&&l(e).appearance!=="force-dark"&&l(e).appearance!=="force-auto"?(s(),u("div",br,[f(_n)])):h("",!0)}}),yr=y(kr,[["__scopeId","data-v-3f90c1a5"]]),bn=w();let Rn=!1,an=0;function Ar(n){const e=w(!1);if(en){!Rn&&Sr(),an++;const t=F(bn,r=>{var i,c,a;r===n.el.value||(i=n.el.value)!=null&&i.contains(r)?(e.value=!0,(c=n.onFocus)==null||c.call(n)):(e.value=!1,(a=n.onBlur)==null||a.call(n))});gn(()=>{t(),an--,an||Ir()})}return Gn(e)}function Sr(){document.addEventListener("focusin",jn),Rn=!0,bn.value=document.activeElement}function Ir(){document.removeEventListener("focusin",jn)}function jn(){bn.value=document.activeElement}const Lr={class:"VPMenuLink"},xr=["innerHTML"],wr=v({__name:"VPMenuLink",props:{item:{}},setup(n){const{page:e}=L();return(t,r)=>(s(),u("div",Lr,[f(E,{class:$({active:l(G)(l(e).relativePath,n.item.activeMatch||n.item.link,!!n.item.activeMatch)}),href:n.item.link,target:n.item.target,rel:n.item.rel,"no-icon":n.item.noIcon},{default:g(()=>[o("span",{innerHTML:n.item.text},null,8,xr)]),_:1},8,["class","href","target","rel","no-icon"])]))}}),tn=y(wr,[["__scopeId","data-v-7eeeb2dc"]]),Pr={class:"VPMenuGroup"},Tr={key:0,class:"title"},$r=v({__name:"VPMenuGroup",props:{text:{},items:{}},setup(n){return(e,t)=>(s(),u("div",Pr,[n.text?(s(),u("p",Tr,S(n.text),1)):h("",!0),(s(!0),u(P,null,O(n.items,r=>(s(),u(P,null,["link"in r?(s(),_(tn,{key:0,item:r},null,8,["item"])):h("",!0)],64))),256))]))}}),Cr=y($r,[["__scopeId","data-v-a6b0397c"]]),Or={class:"VPMenu"},Nr={key:0,class:"items"},Mr=v({__name:"VPMenu",props:{items:{}},setup(n){return(e,t)=>(s(),u("div",Or,[n.items?(s(),u("div",Nr,[(s(!0),u(P,null,O(n.items,r=>(s(),u(P,{key:JSON.stringify(r)},["link"in r?(s(),_(tn,{key:0,item:r},null,8,["item"])):"component"in r?(s(),_(j(r.component),H({key:1,ref_for:!0},r.props),null,16)):(s(),_(Cr,{key:2,text:r.text,items:r.items},null,8,["text","items"]))],64))),128))])):h("",!0),p(e.$slots,"default",{},void 0,!0)]))}}),Vr=y(Mr,[["__scopeId","data-v-20ed86d6"]]),Dr=["aria-expanded","aria-label"],Rr={key:0,class:"text"},jr=["innerHTML"],Er={key:1,class:"vpi-more-horizontal icon"},Fr={class:"menu"},Ur=v({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(n){const e=w(!1),t=w();Ar({el:t,onBlur:r});function r(){e.value=!1}return(i,c)=>(s(),u("div",{class:"VPFlyout",ref_key:"el",ref:t,onMouseenter:c[1]||(c[1]=a=>e.value=!0),onMouseleave:c[2]||(c[2]=a=>e.value=!1)},[o("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":e.value,"aria-label":n.label,onClick:c[0]||(c[0]=a=>e.value=!e.value)},[n.button||n.icon?(s(),u("span",Rr,[n.icon?(s(),u("span",{key:0,class:$([n.icon,"option-icon"])},null,2)):h("",!0),n.button?(s(),u("span",{key:1,innerHTML:n.button},null,8,jr)):h("",!0),c[3]||(c[3]=o("span",{class:"vpi-chevron-down text-icon"},null,-1))])):(s(),u("span",Er))],8,Dr),o("div",Fr,[f(Vr,{items:n.items},{default:g(()=>[p(i.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),kn=y(Ur,[["__scopeId","data-v-bfe7971f"]]),Br=["href","aria-label","innerHTML"],Hr=v({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(n){const e=n,t=w();J(async()=>{var c;await Tn();const i=(c=t.value)==null?void 0:c.children[0];i instanceof HTMLElement&&i.className.startsWith("vpi-social-")&&(getComputedStyle(i).maskImage||getComputedStyle(i).webkitMaskImage)==="none"&&i.style.setProperty("--icon",`url('https://api.iconify.design/simple-icons/${e.icon}.svg')`)});const r=A(()=>typeof e.icon=="object"?e.icon.svg:`<span class="vpi-social-${e.icon}"></span>`);return(i,c)=>(s(),u("a",{ref_key:"el",ref:t,class:"VPSocialLink no-icon",href:n.link,"aria-label":n.ariaLabel??(typeof n.icon=="string"?n.icon:""),target:"_blank",rel:"noopener",innerHTML:r.value},null,8,Br))}}),Jr=y(Hr,[["__scopeId","data-v-60a9a2d3"]]),Gr={class:"VPSocialLinks"},Wr=v({__name:"VPSocialLinks",props:{links:{}},setup(n){return(e,t)=>(s(),u("div",Gr,[(s(!0),u(P,null,O(n.links,({link:r,icon:i,ariaLabel:c})=>(s(),_(Jr,{key:r,icon:i,link:r,ariaLabel:c},null,8,["icon","link","ariaLabel"]))),128))]))}}),yn=y(Wr,[["__scopeId","data-v-e71e869c"]]),qr={key:0,class:"group translations"},zr={class:"trans-title"},Kr={key:1,class:"group"},Qr={class:"item appearance"},Yr={class:"label"},Xr={class:"appearance-action"},Zr={key:2,class:"group"},ni={class:"item social-links"},ei=v({__name:"VPNavBarExtra",setup(n){const{site:e,theme:t}=L(),{localeLinks:r,currentLang:i}=z({correspondingLink:!0}),c=A(()=>r.value.length&&i.value.label||e.value.appearance||t.value.socialLinks);return(a,d)=>c.value?(s(),_(kn,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:g(()=>[l(r).length&&l(i).label?(s(),u("div",qr,[o("p",zr,S(l(i).label),1),(s(!0),u(P,null,O(l(r),m=>(s(),_(tn,{key:m.link,item:m},null,8,["item"]))),128))])):h("",!0),l(e).appearance&&l(e).appearance!=="force-dark"&&l(e).appearance!=="force-auto"?(s(),u("div",Kr,[o("div",Qr,[o("p",Yr,S(l(t).darkModeSwitchLabel||"Appearance"),1),o("div",Xr,[f(_n)])])])):h("",!0),l(t).socialLinks?(s(),u("div",Zr,[o("div",ni,[f(yn,{class:"social-links-list",links:l(t).socialLinks},null,8,["links"])])])):h("",!0)]),_:1})):h("",!0)}}),ti=y(ei,[["__scopeId","data-v-f953d92f"]]),ri=["aria-expanded"],ii=v({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(n){return(e,t)=>(s(),u("button",{type:"button",class:$(["VPNavBarHamburger",{active:n.active}]),"aria-label":"mobile navigation","aria-expanded":n.active,"aria-controls":"VPNavScreen",onClick:t[0]||(t[0]=r=>e.$emit("click"))},[...t[1]||(t[1]=[o("span",{class:"container"},[o("span",{class:"top"}),o("span",{class:"middle"}),o("span",{class:"bottom"})],-1)])],10,ri))}}),oi=y(ii,[["__scopeId","data-v-6bee1efd"]]),si=["innerHTML"],ai=v({__name:"VPNavBarMenuLink",props:{item:{}},setup(n){const{page:e}=L();return(t,r)=>(s(),_(E,{class:$({VPNavBarMenuLink:!0,active:l(G)(l(e).relativePath,n.item.activeMatch||n.item.link,!!n.item.activeMatch)}),href:n.item.link,target:n.item.target,rel:n.item.rel,"no-icon":n.item.noIcon,tabindex:"0"},{default:g(()=>[o("span",{innerHTML:n.item.text},null,8,si)]),_:1},8,["class","href","target","rel","no-icon"]))}}),li=y(ai,[["__scopeId","data-v-815115f5"]]),ci=v({__name:"VPNavBarMenuGroup",props:{item:{}},setup(n){const e=n,{page:t}=L(),r=c=>"component"in c?!1:"link"in c?G(t.value.relativePath,c.link,!!e.item.activeMatch):c.items.some(r),i=A(()=>r(e.item));return(c,a)=>(s(),_(kn,{class:$({VPNavBarMenuGroup:!0,active:l(G)(l(t).relativePath,n.item.activeMatch,!!n.item.activeMatch)||i.value}),button:n.item.text,items:n.item.items},null,8,["class","button","items"]))}}),di={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},ui=v({__name:"VPNavBarMenu",setup(n){const{theme:e}=L();return(t,r)=>l(e).nav?(s(),u("nav",di,[r[0]||(r[0]=o("span",{id:"main-nav-aria-label",class:"visually-hidden"}," Main Navigation ",-1)),(s(!0),u(P,null,O(l(e).nav,i=>(s(),u(P,{key:JSON.stringify(i)},["link"in i?(s(),_(li,{key:0,item:i},null,8,["item"])):"component"in i?(s(),_(j(i.component),H({key:1,ref_for:!0},i.props),null,16)):(s(),_(ci,{key:2,item:i},null,8,["item"]))],64))),128))])):h("",!0)}}),pi=y(ui,[["__scopeId","data-v-afb2845e"]]);function mi(n){const{localeIndex:e,theme:t}=L();function r(i){var C,N,V;const c=i.split("."),a=(C=t.value.search)==null?void 0:C.options,d=a&&typeof a=="object",m=d&&((V=(N=a.locales)==null?void 0:N[e.value])==null?void 0:V.translations)||null,b=d&&a.translations||null;let x=m,k=b,I=n;const T=c.pop();for(const D of c){let B=null;const q=I==null?void 0:I[D];q&&(B=I=q);const rn=k==null?void 0:k[D];rn&&(B=k=rn);const on=x==null?void 0:x[D];on&&(B=x=on),q||(I=B),rn||(k=B),on||(x=B)}return(x==null?void 0:x[T])??(k==null?void 0:k[T])??(I==null?void 0:I[T])??""}return r}const gi=["aria-label"],hi={class:"DocSearch-Button-Container"},vi={class:"DocSearch-Button-Placeholder"},Sn=v({__name:"VPNavBarSearchButton",setup(n){const t=mi({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(r,i)=>(s(),u("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":l(t)("button.buttonAriaLabel")},[o("span",hi,[i[0]||(i[0]=o("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1)),o("span",vi,S(l(t)("button.buttonText")),1)]),i[1]||(i[1]=o("span",{class:"DocSearch-Button-Keys"},[o("kbd",{class:"DocSearch-Button-Key"}),o("kbd",{class:"DocSearch-Button-Key"},"K")],-1))],8,gi))}}),fi={class:"VPNavBarSearch"},_i={id:"local-search"},bi={key:1,id:"docsearch"},ki=v({__name:"VPNavBarSearch",setup(n){const e=Wn(()=>qn(()=>import("./VPLocalSearchBox.Ch1Tbtsh.js"),__vite__mapDeps([0,1]))),t=()=>null,{theme:r}=L(),i=w(!1),c=w(!1);J(()=>{});function a(){i.value||(i.value=!0,setTimeout(d,16))}function d(){const k=new Event("keydown");k.key="k",k.metaKey=!0,window.dispatchEvent(k),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||d()},16)}function m(k){const I=k.target,T=I.tagName;return I.isContentEditable||T==="INPUT"||T==="SELECT"||T==="TEXTAREA"}const b=w(!1);cn("k",k=>{(k.ctrlKey||k.metaKey)&&(k.preventDefault(),b.value=!0)}),cn("/",k=>{m(k)||(k.preventDefault(),b.value=!0)});const x="local";return(k,I)=>{var T;return s(),u("div",fi,[l(x)==="local"?(s(),u(P,{key:0},[b.value?(s(),_(l(e),{key:0,onClose:I[0]||(I[0]=C=>b.value=!1)})):h("",!0),o("div",_i,[f(Sn,{onClick:I[1]||(I[1]=C=>b.value=!0)})])],64)):l(x)==="algolia"?(s(),u(P,{key:1},[i.value?(s(),_(l(t),{key:0,algolia:((T=l(r).search)==null?void 0:T.options)??l(r).algolia,onVnodeBeforeMount:I[2]||(I[2]=C=>c.value=!0)},null,8,["algolia"])):h("",!0),c.value?h("",!0):(s(),u("div",bi,[f(Sn,{onClick:a})]))],64)):h("",!0)])}}}),yi=v({__name:"VPNavBarSocialLinks",setup(n){const{theme:e}=L();return(t,r)=>l(e).socialLinks?(s(),_(yn,{key:0,class:"VPNavBarSocialLinks",links:l(e).socialLinks},null,8,["links"])):h("",!0)}}),Ai=y(yi,[["__scopeId","data-v-ef6192dc"]]),Si=["href","rel","target"],Ii=["innerHTML"],Li={key:2},xi=v({__name:"VPNavBarTitle",setup(n){const{site:e,theme:t}=L(),{hasSidebar:r}=U(),{currentLang:i}=z(),c=A(()=>{var m;return typeof t.value.logoLink=="string"?t.value.logoLink:(m=t.value.logoLink)==null?void 0:m.link}),a=A(()=>{var m;return typeof t.value.logoLink=="string"||(m=t.value.logoLink)==null?void 0:m.rel}),d=A(()=>{var m;return typeof t.value.logoLink=="string"||(m=t.value.logoLink)==null?void 0:m.target});return(m,b)=>(s(),u("div",{class:$(["VPNavBarTitle",{"has-sidebar":l(r)}])},[o("a",{class:"title",href:c.value??l(vn)(l(i).link),rel:a.value,target:d.value},[p(m.$slots,"nav-bar-title-before",{},void 0,!0),l(t).logo?(s(),_(Q,{key:0,class:"logo",image:l(t).logo},null,8,["image"])):h("",!0),l(t).siteTitle?(s(),u("span",{key:1,innerHTML:l(t).siteTitle},null,8,Ii)):l(t).siteTitle===void 0?(s(),u("span",Li,S(l(e).title),1)):h("",!0),p(m.$slots,"nav-bar-title-after",{},void 0,!0)],8,Si)],2))}}),wi=y(xi,[["__scopeId","data-v-9f43907a"]]),Pi={class:"items"},Ti={class:"title"},$i=v({__name:"VPNavBarTranslations",setup(n){const{theme:e}=L(),{localeLinks:t,currentLang:r}=z({correspondingLink:!0});return(i,c)=>l(t).length&&l(r).label?(s(),_(kn,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:l(e).langMenuLabel||"Change language"},{default:g(()=>[o("div",Pi,[o("p",Ti,S(l(r).label),1),(s(!0),u(P,null,O(l(t),a=>(s(),_(tn,{key:a.link,item:a},null,8,["item"]))),128))])]),_:1},8,["label"])):h("",!0)}}),Ci=y($i,[["__scopeId","data-v-acee064b"]]),Oi={class:"wrapper"},Ni={class:"container"},Mi={class:"title"},Vi={class:"content"},Di={class:"content-body"},Ri=v({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(n){const e=n,{y:t}=$n(),{hasSidebar:r}=U(),{frontmatter:i}=L(),c=w({});return hn(()=>{c.value={"has-sidebar":r.value,home:i.value.layout==="home",top:t.value===0,"screen-open":e.isScreenOpen}}),(a,d)=>(s(),u("div",{class:$(["VPNavBar",c.value])},[o("div",Oi,[o("div",Ni,[o("div",Mi,[f(wi,null,{"nav-bar-title-before":g(()=>[p(a.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":g(()=>[p(a.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),o("div",Vi,[o("div",Di,[p(a.$slots,"nav-bar-content-before",{},void 0,!0),f(ki,{class:"search"}),f(pi,{class:"menu"}),f(Ci,{class:"translations"}),f(yr,{class:"appearance"}),f(Ai,{class:"social-links"}),f(ti,{class:"extra"}),p(a.$slots,"nav-bar-content-after",{},void 0,!0),f(oi,{class:"hamburger",active:n.isScreenOpen,onClick:d[0]||(d[0]=m=>a.$emit("toggle-screen"))},null,8,["active"])])])])]),d[1]||(d[1]=o("div",{class:"divider"},[o("div",{class:"divider-line"})],-1))],2))}}),ji=y(Ri,[["__scopeId","data-v-9fd4d1dd"]]),Ei={key:0,class:"VPNavScreenAppearance"},Fi={class:"text"},Ui=v({__name:"VPNavScreenAppearance",setup(n){const{site:e,theme:t}=L();return(r,i)=>l(e).appearance&&l(e).appearance!=="force-dark"&&l(e).appearance!=="force-auto"?(s(),u("div",Ei,[o("p",Fi,S(l(t).darkModeSwitchLabel||"Appearance"),1),f(_n)])):h("",!0)}}),Bi=y(Ui,[["__scopeId","data-v-a3e2920d"]]),Hi=["innerHTML"],Ji=v({__name:"VPNavScreenMenuLink",props:{item:{}},setup(n){const e=nn("close-screen");return(t,r)=>(s(),_(E,{class:"VPNavScreenMenuLink",href:n.item.link,target:n.item.target,rel:n.item.rel,"no-icon":n.item.noIcon,onClick:l(e)},{default:g(()=>[o("span",{innerHTML:n.item.text},null,8,Hi)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),Gi=y(Ji,[["__scopeId","data-v-fa963d97"]]),Wi=["innerHTML"],qi=v({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(n){const e=nn("close-screen");return(t,r)=>(s(),_(E,{class:"VPNavScreenMenuGroupLink",href:n.item.link,target:n.item.target,rel:n.item.rel,"no-icon":n.item.noIcon,onClick:l(e)},{default:g(()=>[o("span",{innerHTML:n.item.text},null,8,Wi)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),En=y(qi,[["__scopeId","data-v-e04f3e85"]]),zi={class:"VPNavScreenMenuGroupSection"},Ki={key:0,class:"title"},Qi=v({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(n){return(e,t)=>(s(),u("div",zi,[n.text?(s(),u("p",Ki,S(n.text),1)):h("",!0),(s(!0),u(P,null,O(n.items,r=>(s(),_(En,{key:r.text,item:r},null,8,["item"]))),128))]))}}),Yi=y(Qi,[["__scopeId","data-v-f60dbfa7"]]),Xi=["aria-controls","aria-expanded"],Zi=["innerHTML"],no=["id"],eo={key:0,class:"item"},to={key:1,class:"item"},ro={key:2,class:"group"},io=v({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(n){const e=n,t=w(!1),r=A(()=>`NavScreenGroup-${e.text.replace(" ","-").toLowerCase()}`);function i(){t.value=!t.value}return(c,a)=>(s(),u("div",{class:$(["VPNavScreenMenuGroup",{open:t.value}])},[o("button",{class:"button","aria-controls":r.value,"aria-expanded":t.value,onClick:i},[o("span",{class:"button-text",innerHTML:n.text},null,8,Zi),a[0]||(a[0]=o("span",{class:"vpi-plus button-icon"},null,-1))],8,Xi),o("div",{id:r.value,class:"items"},[(s(!0),u(P,null,O(n.items,d=>(s(),u(P,{key:JSON.stringify(d)},["link"in d?(s(),u("div",eo,[f(En,{item:d},null,8,["item"])])):"component"in d?(s(),u("div",to,[(s(),_(j(d.component),H({ref_for:!0},d.props,{"screen-menu":""}),null,16))])):(s(),u("div",ro,[f(Yi,{text:d.text,items:d.items},null,8,["text","items"])]))],64))),128))],8,no)],2))}}),oo=y(io,[["__scopeId","data-v-d99bfeec"]]),so={key:0,class:"VPNavScreenMenu"},ao=v({__name:"VPNavScreenMenu",setup(n){const{theme:e}=L();return(t,r)=>l(e).nav?(s(),u("nav",so,[(s(!0),u(P,null,O(l(e).nav,i=>(s(),u(P,{key:JSON.stringify(i)},["link"in i?(s(),_(Gi,{key:0,item:i},null,8,["item"])):"component"in i?(s(),_(j(i.component),H({key:1,ref_for:!0},i.props,{"screen-menu":""}),null,16)):(s(),_(oo,{key:2,text:i.text||"",items:i.items},null,8,["text","items"]))],64))),128))])):h("",!0)}}),lo=v({__name:"VPNavScreenSocialLinks",setup(n){const{theme:e}=L();return(t,r)=>l(e).socialLinks?(s(),_(yn,{key:0,class:"VPNavScreenSocialLinks",links:l(e).socialLinks},null,8,["links"])):h("",!0)}}),co={class:"list"},uo=v({__name:"VPNavScreenTranslations",setup(n){const{localeLinks:e,currentLang:t}=z({correspondingLink:!0}),r=w(!1);function i(){r.value=!r.value}return(c,a)=>l(e).length&&l(t).label?(s(),u("div",{key:0,class:$(["VPNavScreenTranslations",{open:r.value}])},[o("button",{class:"title",onClick:i},[a[0]||(a[0]=o("span",{class:"vpi-languages icon lang"},null,-1)),R(" "+S(l(t).label)+" ",1),a[1]||(a[1]=o("span",{class:"vpi-chevron-down icon chevron"},null,-1))]),o("ul",co,[(s(!0),u(P,null,O(l(e),d=>(s(),u("li",{key:d.link,class:"item"},[f(E,{class:"link",href:d.link},{default:g(()=>[R(S(d.text),1)]),_:2},1032,["href"])]))),128))])],2)):h("",!0)}}),po=y(uo,[["__scopeId","data-v-516e4bc3"]]),mo={class:"container"},go=v({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(n){const e=w(null),t=Cn(en?document.body:null);return(r,i)=>(s(),_(mn,{name:"fade",onEnter:i[0]||(i[0]=c=>t.value=!0),onAfterLeave:i[1]||(i[1]=c=>t.value=!1)},{default:g(()=>[n.open?(s(),u("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:e,id:"VPNavScreen"},[o("div",mo,[p(r.$slots,"nav-screen-content-before",{},void 0,!0),f(ao,{class:"menu"}),f(po,{class:"translations"}),f(Bi,{class:"appearance"}),f(lo,{class:"social-links"}),p(r.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):h("",!0)]),_:3}))}}),ho=y(go,[["__scopeId","data-v-2dd6d0c7"]]),vo={key:0,class:"VPNav"},fo=v({__name:"VPNav",setup(n){const{isScreenOpen:e,closeScreen:t,toggleScreen:r}=ur(),{frontmatter:i}=L(),c=A(()=>i.value.navbar!==!1);return On("close-screen",t),Y(()=>{en&&document.documentElement.classList.toggle("hide-nav",!c.value)}),(a,d)=>c.value?(s(),u("header",vo,[f(ji,{"is-screen-open":l(e),onToggleScreen:l(r)},{"nav-bar-title-before":g(()=>[p(a.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":g(()=>[p(a.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":g(()=>[p(a.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":g(()=>[p(a.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),f(ho,{open:l(e)},{"nav-screen-content-before":g(()=>[p(a.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":g(()=>[p(a.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):h("",!0)}}),_o=y(fo,[["__scopeId","data-v-7ad780c2"]]),bo=["role","tabindex"],ko={key:1,class:"items"},yo=v({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(n){const e=n,{collapsed:t,collapsible:r,isLink:i,isActiveLink:c,hasActiveLink:a,hasChildren:d,toggle:m}=he(A(()=>e.item)),b=A(()=>d.value?"section":"div"),x=A(()=>i.value?"a":"div"),k=A(()=>d.value?e.depth+2===7?"p":`h${e.depth+2}`:"p"),I=A(()=>i.value?void 0:"button"),T=A(()=>[[`level-${e.depth}`],{collapsible:r.value},{collapsed:t.value},{"is-link":i.value},{"is-active":c.value},{"has-active":a.value}]);function C(V){"key"in V&&V.key!=="Enter"||!e.item.link&&m()}function N(){e.item.link&&m()}return(V,D)=>{const B=W("VPSidebarItem",!0);return s(),_(j(b.value),{class:$(["VPSidebarItem",T.value])},{default:g(()=>[n.item.text?(s(),u("div",H({key:0,class:"item",role:I.value},zn(n.item.items?{click:C,keydown:C}:{},!0),{tabindex:n.item.items&&0}),[D[1]||(D[1]=o("div",{class:"indicator"},null,-1)),n.item.link?(s(),_(E,{key:0,tag:x.value,class:"link",href:n.item.link,rel:n.item.rel,target:n.item.target},{default:g(()=>[(s(),_(j(k.value),{class:"text",innerHTML:n.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(s(),_(j(k.value),{key:1,class:"text",innerHTML:n.item.text},null,8,["innerHTML"])),n.item.collapsed!=null&&n.item.items&&n.item.items.length?(s(),u("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:N,onKeydown:Kn(N,["enter"]),tabindex:"0"},[...D[0]||(D[0]=[o("span",{class:"vpi-chevron-right caret-icon"},null,-1)])],32)):h("",!0)],16,bo)):h("",!0),n.item.items&&n.item.items.length?(s(),u("div",ko,[n.depth<5?(s(!0),u(P,{key:0},O(n.item.items,q=>(s(),_(B,{key:q.text,item:q,depth:n.depth+1},null,8,["item","depth"]))),128)):h("",!0)])):h("",!0)]),_:1},8,["class"])}}}),Ao=y(yo,[["__scopeId","data-v-0009425e"]]),So=v({__name:"VPSidebarGroup",props:{items:{}},setup(n){const e=w(!0);let t=null;return J(()=>{t=setTimeout(()=>{t=null,e.value=!1},300)}),Nn(()=>{t!=null&&(clearTimeout(t),t=null)}),(r,i)=>(s(!0),u(P,null,O(n.items,c=>(s(),u("div",{key:c.text,class:$(["group",{"no-transition":e.value}])},[f(Ao,{item:c,depth:0},null,8,["item"])],2))),128))}}),Io=y(So,[["__scopeId","data-v-51288d80"]]),Lo={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},xo=v({__name:"VPSidebar",props:{open:{type:Boolean}},setup(n){const{sidebarGroups:e,hasSidebar:t}=U(),r=n,i=w(null),c=Cn(en?document.body:null);F([r,i],()=>{var d;r.open?(c.value=!0,(d=i.value)==null||d.focus()):c.value=!1},{immediate:!0,flush:"post"});const a=w(0);return F(e,()=>{a.value+=1},{deep:!0}),(d,m)=>l(t)?(s(),u("aside",{key:0,class:$(["VPSidebar",{open:n.open}]),ref_key:"navEl",ref:i,onClick:m[0]||(m[0]=Qn(()=>{},["stop"]))},[m[2]||(m[2]=o("div",{class:"curtain"},null,-1)),o("nav",Lo,[m[1]||(m[1]=o("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),p(d.$slots,"sidebar-nav-before",{},void 0,!0),(s(),_(Io,{items:l(e),key:a.value},null,8,["items"])),p(d.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):h("",!0)}}),wo=y(xo,[["__scopeId","data-v-42c4c606"]]),Po=v({__name:"VPSkipLink",setup(n){const{theme:e}=L(),t=Z(),r=w();F(()=>t.path,()=>r.value.focus());function i({target:c}){const a=document.getElementById(decodeURIComponent(c.hash).slice(1));if(a){const d=()=>{a.removeAttribute("tabindex"),a.removeEventListener("blur",d)};a.setAttribute("tabindex","-1"),a.addEventListener("blur",d),a.focus(),window.scrollTo(0,0)}}return(c,a)=>(s(),u(P,null,[o("span",{ref_key:"backToTop",ref:r,tabindex:"-1"},null,512),o("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:i},S(l(e).skipToContentLabel||"Skip to content"),1)],64))}}),To=y(Po,[["__scopeId","data-v-fcbfc0e0"]]),$o=v({__name:"Layout",setup(n){const{isOpen:e,open:t,close:r}=U(),i=Z();F(()=>i.path,r),ge(e,r);const{frontmatter:c}=L(),a=Yn(),d=A(()=>!!a["home-hero-image"]);return On("hero-image-slot-exists",d),(m,b)=>{const x=W("Content");return l(c).layout!==!1?(s(),u("div",{key:0,class:$(["Layout",l(c).pageClass])},[p(m.$slots,"layout-top",{},void 0,!0),f(To),f(ee,{class:"backdrop",show:l(e),onClick:l(r)},null,8,["show","onClick"]),f(_o,null,{"nav-bar-title-before":g(()=>[p(m.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":g(()=>[p(m.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":g(()=>[p(m.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":g(()=>[p(m.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":g(()=>[p(m.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":g(()=>[p(m.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),f(dr,{open:l(e),onOpenMenu:l(t)},null,8,["open","onOpenMenu"]),f(wo,{open:l(e)},{"sidebar-nav-before":g(()=>[p(m.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":g(()=>[p(m.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),f(zt,null,{"page-top":g(()=>[p(m.$slots,"page-top",{},void 0,!0)]),"page-bottom":g(()=>[p(m.$slots,"page-bottom",{},void 0,!0)]),"not-found":g(()=>[p(m.$slots,"not-found",{},void 0,!0)]),"home-hero-before":g(()=>[p(m.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":g(()=>[p(m.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":g(()=>[p(m.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":g(()=>[p(m.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":g(()=>[p(m.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":g(()=>[p(m.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":g(()=>[p(m.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":g(()=>[p(m.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":g(()=>[p(m.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":g(()=>[p(m.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":g(()=>[p(m.$slots,"doc-before",{},void 0,!0)]),"doc-after":g(()=>[p(m.$slots,"doc-after",{},void 0,!0)]),"doc-top":g(()=>[p(m.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":g(()=>[p(m.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":g(()=>[p(m.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":g(()=>[p(m.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":g(()=>[p(m.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":g(()=>[p(m.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":g(()=>[p(m.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":g(()=>[p(m.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),f(Zt),p(m.$slots,"layout-bottom",{},void 0,!0)],2)):(s(),_(x,{key:1}))}}}),Co=y($o,[["__scopeId","data-v-d8b57b2d"]]),In={Layout:Co,enhanceApp:({app:n})=>{n.component("Badge",Xn)}},Oo={class:"turna-home"},No={class:"home-section","aria-labelledby":"route-title"},Mo={class:"route-grid"},Vo=["aria-label"],Do=["href"],Ro={class:"home-section capability-section","aria-labelledby":"capability-title"},jo={class:"capability-grid glass-panel"},Eo=["href"],Fo={class:"capability-code"},Uo={class:"home-section","aria-labelledby":"loop-title"},Bo={class:"loop-list"},Ho={class:"inline-actions"},Jo=["href"],Go=["href"],Wo={class:"home-section data-section","aria-labelledby":"data-title"},qo={class:"data-copy"},zo=["href"],Ko={class:"home-section","aria-labelledby":"snapshot-title"},Qo={class:"snapshot-grid"},Yo={class:"section-intro"},Xo=["href"],Zo={class:"facts-panel glass-panel"},ns={class:"home-section author-banner glass-panel","aria-labelledby":"author-title"},es=["href"],ts=["href"],rs={class:"home-section quick-links","aria-labelledby":"quick-title"},is={class:"reference-grid"},os=["href"],ss=["href"],as=["href"],ls=["href"],cs=v({__name:"HomeContent",setup(n){const e=[{index:"01",label:"LEARNING",title:"学习与复习",copy:"确认运行要求，了解课程组织与每日复习流程，然后开始第一节课程。",links:[{text:"Turna 是什么",href:"/guide/what-is-turna"},{text:"快速开始",href:"/guide/getting-started"},{text:"课程结构",href:"/guide/curriculum"}]},{index:"02",label:"MIGRATION",title:"Anki 牌组迁移",copy:"检查 .apkg 导入、Official Collection 所有权、卡片渲染方式与正式调度边界。",links:[{text:"导入牌组",href:"/guide/anki-import"},{text:"渲染与隔离",href:"/guide/anki-rendering"},{text:"复习系统",href:"/guide/review-system"}]},{index:"03",label:"AUTHORING",title:"课程生产",copy:"按 Section、Unit、Lesson 三级结构组织内容，并通过编辑器完成校验与验收。",links:[{text:"教师指南",href:"/authoring/teacher-guide"},{text:"课型说明",href:"/guide/lesson-types"},{text:"目录约定",href:"/authoring/course-layout"}]},{index:"04",label:"ENGINEERING",title:"开发与构建",copy:"检查客户端分层、本地数据所有权、Android 发布、Web 构建与质量门禁。",links:[{text:"架构总览",href:"/developer/architecture"},{text:"Android 构建",href:"/developer/android-build"},{text:"测试门禁",href:"/developer/testing"}]}],t=[{code:"LOCAL",title:"本地数据层",copy:"课程、牌组与学习记录默认保存在设备上；离线状态下保留完整学习与复习能力。",href:"/guide/features#离线与本地优先"},{code:"FSRS",title:"记忆调度器",copy:"使用 21 参数 FSRS-6 更新记忆状态，并计算下一次复习时间。",href:"/guide/fsrs"},{code:"ANKI",title:"Anki 兼容层",copy:"Android 生产路径导入 .apkg，由 Official Collection 持有卡片和调度状态。",href:"/guide/anki"},{code:"PATH",title:"课程路径",copy:"按 CEFR A1–B2 组织内容，通过先修关系连接可独立完成的短课时。",href:"/guide/curriculum"},{code:"ASSIST",title:"上下文辅助",copy:"基于当前句子、语法和错题提供分层提示；关闭 AI 不影响核心流程。",href:"/guide/ai"},{code:"STUDIO",title:"课程编辑器",copy:"在桌面端编辑课程结构与内容，保存前执行校验，并通过教师模式验收。",href:"/guide/editor"}],r=[{n:"01",title:"选择课时",copy:"根据 CEFR 等级、完成状态与先修关系确定下一课。"},{n:"02",title:"输入内容",copy:"通过词汇、示例、听力与分层提示建立初始理解。"},{n:"03",title:"执行检索",copy:"使用选择、填空、翻译或听写验证知识提取能力。"},{n:"04",title:"更新状态",copy:"根据结果更新难度、稳定度与本地学习记录。"},{n:"05",title:"调度复习",copy:"FSRS 计算复习时间，并将薄弱内容重新接入练习流程。"}],i=[["课程范围","土耳其语 CEFR A1–B2"],["内容结构","8 Section · 11 Unit · 54 Lesson"],["学习素材","148 词汇 · 18 表达 · 37 音频"],["复习引擎","FSRS-6 · 21 参数"]];return(c,a)=>(s(),u("div",Oo,[a[22]||(a[22]=sn('<section class="home-signal glass-panel" aria-label="文档概览"><div class="signal-copy"><span class="micro-label">DOCUMENT INDEX / REV.01</span><h2>从系统运行到课程生产，<br>按任务查阅。</h2><p>文档按学习者、Anki 用户、课程作者和开发者四类任务组织，提供操作步骤、行为说明与数据约束。</p></div><dl class="signal-stats"><div><dt>44</dt><dd>技术文档</dd></div><div><dt>04</dt><dd>任务入口</dd></div><div><dt>100%</dt><dd>离线主流程</dd></div></dl></section>',1)),o("section",No,[a[1]||(a[1]=o("div",{class:"section-kicker"},[o("span",null,"START HERE"),o("i")],-1)),a[2]||(a[2]=o("div",{class:"section-intro"},[o("h2",{id:"route-title"},"选择任务入口"),o("p",null,"每条路径只包含完成当前任务所需的核心页面，无需顺序阅读全部文档。")],-1)),o("div",Mo,[(s(),u(P,null,O(e,d=>o("article",{key:d.title,class:"route-card glass-panel"},[o("header",null,[o("span",null,S(d.index),1),o("small",null,S(d.label),1)]),o("h3",null,S(d.title),1),o("p",null,S(d.copy),1),o("nav",{"aria-label":`${d.title}推荐阅读`},[(s(!0),u(P,null,O(d.links,m=>(s(),u("a",{key:m.href,href:l(M)(m.href)},[R(S(m.text),1),a[0]||(a[0]=o("span",{"aria-hidden":"true"},"↗",-1))],8,Do))),128))],8,Vo)])),64))])]),o("section",Ro,[a[4]||(a[4]=o("div",{class:"section-kicker"},[o("span",null,"SYSTEM MAP"),o("i")],-1)),a[5]||(a[5]=o("div",{class:"section-intro split-intro"},[o("h2",{id:"capability-title"},"系统能力与职责边界"),o("p",null,"课程提供输入，练习执行检索，FSRS 负责调度。Anki、AI 与编辑器分别处理内容迁移、上下文辅助和课程生产。")],-1)),o("div",jo,[(s(),u(P,null,O(t,d=>o("a",{key:d.code,href:l(M)(d.href),class:"capability-item"},[o("span",Fo,S(d.code),1),o("h3",null,S(d.title),1),o("p",null,S(d.copy),1),a[3]||(a[3]=o("span",{class:"text-link"},[R("查看规格 "),o("b",{"aria-hidden":"true"},"→")],-1))],8,Eo)),64))])]),o("section",Uo,[a[6]||(a[6]=o("div",{class:"section-kicker"},[o("span",null,"LEARNING LOOP"),o("i")],-1)),a[7]||(a[7]=o("div",{class:"section-intro"},[o("h2",{id:"loop-title"},"课程学习与记忆调度闭环"),o("p",null,"新内容学习与旧内容复习共享同一学习状态，系统据此连续更新课程进度与调度结果。")],-1)),o("ol",Bo,[(s(),u(P,null,O(r,d=>o("li",{key:d.n},[o("span",null,S(d.n),1),o("div",null,[o("h3",null,S(d.title),1),o("p",null,S(d.copy),1)])])),64))]),o("div",Ho,[o("a",{class:"glass-button primary",href:l(M)("/guide/fsrs")},"理解 FSRS 调度",8,Jo),o("a",{class:"glass-button",href:l(M)("/guide/lesson-types")},"查看六种课型",8,Go)])]),o("section",Wo,[o("div",qo,[a[9]||(a[9]=sn('<div class="section-kicker"><span>DATA BOUNDARY</span><i></i></div><h2 id="data-title">核心状态默认保留在本地设备。</h2><p>离线运行是默认模式。课程、牌组、复习状态和进度不依赖账号或持续网络连接。</p><ul><li><span>01</span>核心功能无需账号</li><li><span>02</span>学习记录默认不上行</li><li><span>03</span>未配置 AI 时使用本地内容</li><li><span>04</span>同步与更新由用户主动触发</li></ul>',4)),o("a",{class:"text-link standalone",href:l(M)("/guide/features#离线与本地优先")},[...a[8]||(a[8]=[R("了解本地优先原则 ",-1),o("b",{"aria-hidden":"true"},"→",-1)])],8,zo)]),a[10]||(a[10]=sn('<div class="data-window glass-panel" aria-label="数据流向示意"><div class="window-bar"><span></span><span></span><span></span><small>turna / local workspace</small></div><div class="data-node device"><small>YOUR DEVICE</small><strong>学习工作区</strong><p>课程 · 牌组 · 记忆状态 · 设置</p></div><div class="data-connector"><i></i><span>主动选择时</span><i></i></div><div class="data-optional"><div><small>OPTIONAL</small><strong>课程更新</strong></div><div><small>OPTIONAL</small><strong>AI 服务</strong></div></div></div>',1))]),o("section",Ko,[a[13]||(a[13]=o("div",{class:"section-kicker"},[o("span",null,"CURRICULUM SNAPSHOT"),o("i")],-1)),o("div",Qo,[o("div",Yo,[a[11]||(a[11]=o("h2",{id:"snapshot-title"},"课程范围与当前数据快照",-1)),a[12]||(a[12]=o("p",null,"当前课程以土耳其语为主，按 CEFR 分级，通过短课时与先修关系控制学习顺序。以下数据来自当前课程清单。",-1)),o("a",{class:"glass-button primary",href:l(M)("/guide/curriculum")},"打开课程结构",8,Xo)]),o("dl",Zo,[(s(),u(P,null,O(i,d=>o("div",{key:d[0]},[o("dt",null,S(d[0]),1),o("dd",null,S(d[1]),1)])),64))])])]),o("section",ns,[a[14]||(a[14]=o("div",null,[o("span",{class:"micro-label"},"COURSE PRODUCTION"),o("h2",{id:"author-title"},"建立可校验、可验收的课程单元。"),o("p",null,"教师指南覆盖目录准备、课时创建、词汇引用、题目配置、保存校验与教师模式验收，不要求预先理解完整代码库。")],-1)),a[15]||(a[15]=o("div",{class:"author-steps","aria-label":"课程创作步骤"},[o("span",null,"结构"),o("i"),o("span",null,"内容"),o("i"),o("span",null,"校验"),o("i"),o("span",null,"试听")],-1)),o("nav",null,[o("a",{class:"glass-button primary",href:l(M)("/authoring/teacher-guide")},"开始创作课程",8,es),o("a",{class:"glass-button",href:l(M)("/guide/editor")},"认识编辑器",8,ts)])]),o("section",rs,[a[20]||(a[20]=o("div",{class:"section-kicker"},[o("span",null,"REFERENCE"),o("i")],-1)),a[21]||(a[21]=o("h2",{id:"quick-title"},"常用操作索引",-1)),o("div",is,[o("a",{href:l(M)("/guide/getting-started")},[...a[16]||(a[16]=[o("small",null,"SETUP",-1),o("strong",null,"安装、启动与构建",-1),o("span",null,"→",-1)])],8,os),o("a",{href:l(M)("/guide/anki-import")},[...a[17]||(a[17]=[o("small",null,"IMPORT",-1),o("strong",null,"导入现有 Anki 牌组",-1),o("span",null,"→",-1)])],8,ss),o("a",{href:l(M)("/guide/ai")},[...a[18]||(a[18]=[o("small",null,"ASSIST",-1),o("strong",null,"配置或关闭 AI 伴学",-1),o("span",null,"→",-1)])],8,as),o("a",{href:l(M)("/guide/writing-docs")},[...a[19]||(a[19]=[o("small",null,"CONTRIBUTE",-1),o("strong",null,"为文档增加新页面",-1),o("span",null,"→",-1)])],8,ls)])])]))}}),ds='# AI 控制模式（创作者视角）\r\n\r\n> `tool/gui` 的 AI 介入度由**一个四档体验模式** + **一组能力开关** + **每日配额熔断**组合决定。本文是这套控制面的索引与安全档位手册。\r\n>\r\n> 唯一真源：`tool/gui/src/backend/experience/policy.py` 的 `resolve_policy()`；切换与降档助手在 `tool/gui/src/application/presence_mode.py`。\r\n\r\n## 1. 四档体验模式\r\n\r\n```text\r\n┌──────────── Immersive ────────────┐\r\n│  presence_level = 3               │  全权自动应用 / runtime_opaque（子开关可关）\r\n│  含 Active 捆绑；出站操作仍拒绝     │  切入时弹风险确认；Ctrl+Shift+D 一键降档\r\n├───────────────────────────────────┤\r\n├────────────── Active ─────────────┤\r\n│  presence_level = 2               │  active bundle 自动开：\r\n│                                   │  Soft / Ambient / Defer / 战役\r\n├───────────────────────────────────┤\r\n├────────────── Copilot ────────────┤\r\n│  presence_level = 1（默认）        │  AI 写动作逐项确认\r\n├───────────────────────────────────┤\r\n├───────────── Observer ────────────┤\r\n│  presence_level = 0               │  零 AI 写 / 零侧效应；\r\n│                                   │  危险 / Soft / 意图 / Goal 强制 False\r\n└───────────────────────────────────┘\r\n```\r\n\r\n| 模式 | presence_level | 含义 |\r\n| --- | ---: | --- |\r\n| `observer` | 0 | 只诊断不动手；AI 仅给建议，任何写动作 deny |\r\n| `copilot` | 1 | 副驾驶（默认）；AI 写动作都需作者确认 |\r\n| `active` | 2 | 主动；自动捆绑 Soft 自动修 / 伴随建议 / Defer / 战役队列 |\r\n| `immersive` | 3 | 沉浸；白名单技能可跳过确认静默改课（仍入 Undo） |\r\n\r\n切换入口：\r\n\r\n| 入口 | 行为 |\r\n| --- | --- |\r\n| 状态栏「模式」chip | 弹出下拉，自由切换四档 |\r\n| 设置 → 体验 OS | 模式选择 + Immersive 子开关 + 能力开关 + 日配额 |\r\n| `Ctrl+Shift+D` | 任何模式一键降档回 `copilot`（同时使 auto-apply token 失效） |\r\n| 切入 `immersive` | 弹「切换到 Immersive 全权自治？」风险确认（`IMMERSIVE_WARN_TEXT`） |\r\n\r\n::: info 迁移说明\r\n旧版存在过的 `sovereign` 档已移除：持久化里残留的非法值会在加载时降级为 `copilot`。\r\n:::\r\n\r\n## 2. PolicyDecision 字段\r\n\r\n`resolve_policy(settings)` 返回一个 `PolicyDecision`，派发点统一读它而不读原始设置：\r\n\r\n| 字段 | 类型 | 含义 |\r\n| --- | --- | --- |\r\n| `mode` | str | 归一化后的模式 |\r\n| `presence_level` | int | 0–3 |\r\n| `allow_dangerous` | bool | 危险技能（删 id / 跨节改写 / Hard import）；需 `experience_allow_dangerous_skills`，observer 强制 False；immersive 全权时自动 True |\r\n| `allow_soft` | bool | Soft Autopilot（卫生规则自动修）；开关或 active bundle 触发 |\r\n| `allow_ambient_live` | bool | Ambient 实时提示；开关或 active bundle |\r\n| `allow_defer_resurface` | bool | Defer 重浮；开关或 active bundle |\r\n| `allow_campaign_auto` | bool | 战役队列自动浮现；active bundle 恒 True |\r\n| `allow_full_auto_apply` | bool | 仅 `immersive` + `experience_immersive_full_auto`（默认开） |\r\n| `runtime_opaque` | bool | 仅 `immersive` + `experience_immersive_opaque`（默认开） |\r\n| `allow_autonomous_write` | bool | = `allow_full_auto_apply`；observer 恒 False |\r\n| `scope_cross_section` | bool | 跨节改写；= `allow_dangerous` |\r\n| `allow_llm_intent` | bool | ⌘K LLM 意图分类；需开关 + 非 observer + 配额内 |\r\n| `allow_goal` | bool | Goal 规划器入口；需开关 + 非 observer + 配额内 |\r\n| `allow_ai_skill` | bool | 整体 AI 技能开关；配额超限时 False |\r\n| `budget_exceeded` / `budget_limit` / `budget_used` | bool / int / int | M-08 日配额状态；`budget_limit=0` 表示关闭熔断 |\r\n\r\n派发规则（`can_dispatch`）：\r\n\r\n- `app.*` 内建动作（保存 / undo / why / pin / help）永远放行。\r\n- observer 下，任何 `needs_confirm=True` 的非 `app.*` 动作 deny —— 零 AI 写。\r\n- 危险动作需 `allow_dangerous`；但 immersive 全权时直接放行，由 `auto_apply` 决定是静默执行还是回落确认。\r\n- `goal.*` 需 `allow_goal`（或 `allow_autonomous_write`）。\r\n- 配额超限时，仅拦 `needs_confirm=True` 且非 `soft.*` / `app.*` 的 AI 写技能；手编、保存、Soft 不受影响。\r\n- `is_denied_immersive()` 绝对禁区集合（出站 publish / git.push 等）在任何模式都拒绝。\r\n\r\n## 3. 能力开关（设置 → 体验 OS）\r\n\r\n| 设置 | 默认 | 说明 |\r\n| --- | --- | --- |\r\n| `experience_allow_dangerous_skills` | False | 允许危险技能（删 id / 跨节改写 / Hard import） |\r\n| `experience_goal_enabled` | False | 启用 Goal 目标规划（多步沙箱草稿；合并仍需确认） |\r\n| `experience_llm_intent` | False | ⌘K 自然语言意图分类（调 chat 小模型；关则仅斜杠命令 + 本地规则） |\r\n| `experience_immersive_full_auto` | True | Immersive 档下允许跳过确认自动应用（仍可 Ctrl+Z） |\r\n| `experience_immersive_opaque` | True | Immersive 档下运行时不透明（状态栏仅提示计数）；审计日志始终记录 |\r\n| `experience_daily_ai_budget` | 0 | 今日 AI 请求配额；0 = 不限，超限只拦 AI 写技能 |\r\n\r\n## 4. 其他独立控制面\r\n\r\n### 4.1 AI 生成模式\r\n\r\n| 取值 | 实现 | 适用 |\r\n| --- | --- | --- |\r\n| `fast`（默认） | `backend/ai_generator.generate_with_validate_loop` 一次出 Section 草稿 | 草稿探索 |\r\n| `refine` | `backend/ai_phased` 大纲→分课→校验→质量→修复→解释 | 发布候选 |\r\n\r\n只有 `fast` 与 `refine` 两个合法取值。`phased` 不是模式名——它是 `refine` 路径的实现模块 `ai_phased`。填入其它值会被静默回落为 `fast`，不会报错。\r\n\r\n入口：工坊 **生成模式** 下拉（`fast` 默认）；QSettings `ai/pipeline_default_mode`。\r\n\r\n### 4.2 JSON Schema 严格度\r\n\r\n| 取值 | 行为 |\r\n| --- | --- |\r\n| `auto`（默认） | 首次 `json_schema` 试错遇 400 时调 `mark_json_schema_unsupported()`，后续切 `json_object` |\r\n| `on` | 强制 `json_schema`；不接受 400 回退 |\r\n| `off` | 强制 `json_object`；从不试 `json_schema` |\r\n\r\n### 4.3 AI 对话模式\r\n\r\n生成器对话框（`src/dialogs/ai/generator_*.py`，已拆分为 chat/flows/panels/preview/view-state/wizard/worker-hub 多个模块）的 `mode_combo`：\r\n\r\n| 取值 | 行为 |\r\n| --- | --- |\r\n| `normal` | 直接生成，diff 预览，确认 |\r\n| `wish`（许愿模式） | 自由对话 + 模板 + 附件；许愿式触发 |\r\n\r\n### 4.4 抽取模式\r\n\r\n| 取值 | 触发 | 行为 |\r\n| --- | --- | --- |\r\n| `standard` | 首次抽取 | 抽词汇 + 表达 + 语法点；失败时自动级联 |\r\n| `vocab_only` | 自动级联 / 人工选择 | 仅抽词汇 |\r\n\r\n级联开关：`textbook/auto_cascade`（默认开）。\r\n\r\n### 4.5 AI 助手粒度\r\n\r\n`backend/experience/` 下的 AI 助手按节点粒度运行：`lesson`（整课重写 / 重生成）或 `item`（单 Interaction 改写）。\r\n\r\n### 4.6 导入目标模式\r\n\r\n工坊草稿导入主窗口课程树时的目标选择：`into_section`（新 Section）/ `into_unit`（追加到已有 Unit）/ `merge_existing_section`（合并）/ `replace_section`（整体替换，高风险需 dangerous）。\r\n\r\n### 4.7 模型路由\r\n\r\n| 取值 | 用途 |\r\n| --- | --- |\r\n| `model`（主模型） | 默认；未分流时所有调用走它 |\r\n| `model_chat` | 对话 / 解释；空时回退 `model` |\r\n| `model_json` | JSON 生成 / 修复；空时回退 `model` |\r\n\r\n入口：设置 → AI 配置。字段见 [AI 课程生成 - 字段表](/authoring/ai-course-generation)。\r\n\r\n## 5. M-08 每日 AI 配额\r\n\r\n```python\r\nbudget_limit    = settings.experience_daily_ai_budget  # 0 = 关闭\r\nbudget_used     = usage_today["requests"]              # telemetry 累计\r\nbudget_exceeded = budget_limit > 0 and budget_used >= budget_limit\r\nallow_ai_skill  = not budget_exceeded\r\n```\r\n\r\n- 配额**不**影响手编、保存、`app.*`、`soft.*` 动作。\r\n- 配额**仅**拦截 `needs_confirm=True` 且非 `soft.*` / `app.*` 的 AI 写动作。\r\n- 配额超限时状态栏显示「今日 AI 配额已用尽（X/Y）」。\r\n- 配额与模式正交：observer 下配额依然计数，但不触发任何写。\r\n\r\n## 6. Soft Autopilot 与 ambient\r\n\r\n`backend/experience/soft_autopilot.py` 实现纯规则修复（无 LLM）：\r\n\r\n| 规则 ID | 行为 |\r\n| --- | --- |\r\n| `hygiene.trim_whitespace` | 词条 term / translation / pronunciation 首尾空白 |\r\n| `hygiene.collapse_repeated_spaces` | 内部 ≥2 空白折叠为 1 |\r\n| `hygiene.strip_surround_quotes` | 配对的引号 / 括号包裹剥离 |\r\n| `hygiene.drop_empty_tags` | 删除空 / 非字符串 tag |\r\n| `hygiene.strip_zero_width` | 移除 U+200B / U+FEFF / U+200C / U+200D |\r\n\r\n红线（**永久不下放**）：不做 Hard import、不改 id、不做 section merge、不调 LLM。\r\n\r\nambient live 提示默认关；`active` 档自动开启。\r\n\r\n## 7. 决策矩阵：模式 × 能力\r\n\r\n| 能力 | observer | copilot | active | immersive |\r\n| --- | --- | --- | --- | --- |\r\n| AI 写动作（`needs_confirm=True`） | ❌ | ✅ 逐项确认 | ✅ 逐项确认 | ⚠️ 可全自动 |\r\n| `soft.*`（卫生规则） | ❌ | ⚠️ 默认关；开则生效 | ✅ | ✅ |\r\n| `app.*`（保存 / undo / why / pin / help） | ✅ | ✅ | ✅ | ✅ |\r\n| ⌘K LLM 意图 | ❌ | ⚠️ 默认关 | ⚠️ 默认关 | ⚠️ 默认关 |\r\n| Goal 规划 | ❌ | ⚠️ 默认关 | ⚠️ 默认关 | ⚠️ 默认关（全权时放行） |\r\n| Ambient 提示 | ❌ | ❌ | ✅ | ✅ |\r\n| Defer 重浮 | ❌ | ❌ | ✅ | ✅ |\r\n| 战役自动 | ❌ | ❌ | ✅ | ✅ |\r\n| 跨节改写 | ❌ | ⚠️ 需 `allow_dangerous` | ⚠️ 需 `allow_dangerous` | ✅ 全权时自动 |\r\n| Hard import | ❌ | ❌ | ❌ | ✅ 全权时自动 |\r\n| 出站 publish / git.push 等禁区 | ❌ | ❌ | ❌ | ❌ 恒拒绝 |\r\n\r\n`❌` 硬阻 / `⚠️` 默认关需显式开 / `✅` 模式允许。\r\n\r\n## 8. 创作者不下放的边界\r\n\r\n无论模式如何，下列边界**永久生效**：\r\n\r\n1. **不删既有 id**：AI 不得删除任何已发布的 id（课时 `s1-l1`、单元 `s1-u1`、节 `section1`、资源 `w-`/`e-`/`g-` 前缀等）。\r\n2. **不跨语言引用**：`tr` 课程不得引用其他语言课程的资源。\r\n3. **不绕过 validate**：所有 AI 写动作后必须 `CourseAdapter.save()` → `validate` → 失败回滚。\r\n4. **不持久化 API Key**：API Key 仅会话内存；关闭即销毁。\r\n5. **不入出站 publish / git.push**：`is_denied_immersive` 禁区在任何模式都拒绝。\r\n6. **不静默替换已注册 runtimeType**：替换为未注册类型时 validate 阻断。\r\n7. **不删既有 vocab / expression / grammar_point**：删除必须人工裁决。\r\n\r\n## 9. 与 GUI 主窗口的衔接\r\n\r\n| 入口 | 行为 |\r\n| --- | --- |\r\n| 状态栏「模式」chip | 显示当前模式；点击下拉切换（切 Immersive 弹确认） |\r\n| 设置 → 体验 OS | 模式 + Immersive 子开关 + 能力开关 + 日配额完整面板 |\r\n| `Ctrl+Shift+D` | 一键降档回 `copilot`，并使未完成的 auto-apply token 失效 |\r\n\r\n状态栏常驻字段：模式 chip、AI 校验防护、今日 / 累计 token 与配额剩余、任务中模式警示。\r\n\r\n## 10. 相关文档\r\n\r\n- [AI 课程生成](/authoring/ai-course-generation) — 能力类 / 主路径 / 决策矩阵\r\n- [教师指南 - AI 协作模式](/authoring/teacher-guide#ai-协作模式) — 教师视角的何时用 / 何时不用\r\n- 应用仓库 `tool/gui/src/backend/experience/policy.py` — 四档与 PolicyDecision 唯一真源\r\n- 应用仓库 `tool/gui/src/application/presence_mode.py` — Immersive 进入确认与一键降档\r\n',us='# AI 课程生成（创作者视角）\n\n> AI 是创作助手的默认环境语言。本文是 GUI 内所有 AI 能力的入口索引：5 大类、5 条主路径、3 张决策矩阵、字段表与 telemetry 清单。各模块的字段合同详见各专题文档；开发者向深度报告见应用仓库 `tool/gui/docs/ai_configuration_and_features_report.md`。\n>\n> 5 大类按创作者工作流排列：**抽取 → 生成 → 编辑 → 修复 → 发布**。每类均给 GUI 入口、字段表、失败模式与不下放边界。\n\n## 0. 能力全景\n\n```text\n                ┌──── 课程工坊（项目库 + 三栏画布）────────────────────┐\n                │                                                       │\n                │  1.1 课程生成   1.4 知识抽取   1.3 节点编辑  1.2 修复 │\n                │                                                       │\n                └───────────────────────┬───────────────────────────────┘\n                                        │ 草稿 / 修复 patch\n                                        ▼\n   工具栏（主窗口）─────────────────────────────────────────────\n   课程仓库 / 保存 / 课程工坊 / 总览 / 资源库 / 发布 / 生成听力音频\n   / 教师模式 / 设置（8 tab）\n                                        │\n                                        ▼\n                          1.5 设置与运维（双模型 / 缓存 / 用量）\n```\n\n每条主路径都贯穿这 5 类。下文 §2 给出 A–E 路径的步骤表与 GUI 入口映射。\n\n## 1. 5 大能力类\n\n### 1.1 课程生成（工坊）\n\n入口：工具栏 **课程工坊**。非模态窗口，承载项目库 + 三栏画布。\n\n| 维度 | 能力 |\n| --- | --- |\n| 项目模式 | 教材项目（PDF/Word/TXT/MD/图片 → 抽取 → Grounded 编排）/ 空白 AI 项目（无教材自由生成） |\n| 生成模式 | 快速（整节一次出）/ 精修（Plan → 大纲 → 分课 → 校验 → 内容质量分 → 修复 → 通俗解释 → ReadyImport） |\n| 双模型 | `ai_model_chat`（对话 / 解释）+ `ai_model_json`（结构化 JSON）分流；缺省同 `ai_model` |\n| Grounded 选词 | AI 优先从气泡池（≤ 200）选词；池外新词打 `new` 标签 |\n| 多模板 | `[genre]` 标记切预设（`general` / `grammar` / `dialogue` / `reading`） |\n| 局部重生成 | 右键 Unit / Lesson → 局部重生成；可应用前看 diff |\n| 续作 | `project.json` 持久化大纲 / 草稿 / 聊天；中断后从大纲续跑 |\n| Prompt 模板库 | 持久化模板 + 使用历史；语言对内置（Turkish ↔ Chinese 含元音和谐 / 敬语 / NFKC 校验） |\n| 并行度 | `ai_max_parallel_lessons` 1–8（默认 1） |\n| Pipeline 模式 | `ai_pipeline_default_mode` `fast`（默认）/ `refine` |\n\n实现入口：`src/backend/ai_pipeline.py`（状态机）/ `src/backend/ai_phased.py`（快速）/ `src/backend/ai_generator.py`（基础生成）/ `src/backend/ai_pedagogy.py`（CEFR / 干扰项 prompt 块）。\n\n### 1.2 校验与修复（主窗口）\n\n入口：保存按钮 / 校验面板 / 加载失败弹窗 / 发布对话框。\n\n| 能力 | 实现 | 入口 |\n| --- | --- | --- |\n| 六维内容质量分 | `content_quality.py` 纯函数；不阻断 | 总览 Section 染色 / 校验面板「按质量分修复」 |\n| AI 修正此节点 | `ai_fixer.fix_node`；自动注入 `problems[].message` | 课程树右键 / 校验面板单条 |\n| AI 批量修正 | 按节点分批 merge；每节点一条 `QUndoCommand` | 校验面板多选 → AI 自动修正 |\n| AI 加载错误分析 | `AiErrorAnalyzerDialog` 把 traceback + JSON Schema 喂 LLM | 加载失败弹窗 → AI 分析 |\n| 工坊任务失败分析 | 同上对话框；上下文含工坊步骤 | 工坊失败弹窗 → 拟人化分析 |\n\n修复约束：\n\n- 不删既有 id；任何删 id 操作回滚到修复前。\n- 修复后必须再走 `validate`；任何剩余 error 阻断保存。\n- AI 修复不改变质量分；质量分仅指导不阻断。\n\n### 1.3 节点编辑（课程树右键）\n\n入口：课程树右键 → **AI 编辑此 Section/Unit/Lesson** / **AI 修正此…**。\n\n| 能力 | 说明 |\n| --- | --- |\n| 4 类预设指令 | 精简 / 改写 / 增题 / 翻译润色 |\n| 自定义指令 | 自由文本 |\n| 冲突解决 | `_detect_ai_edit_conflicts` 检查 id 增删 / 改写；弹三选一（保留现状 / 采用 AI 建议 / 取消） |\n| 撤销 | 走 `QUndoStack`（`AiEditLessonCommand` / `AiEditUnitCommand` / `MergeAiSectionCommand`） |\n| 强制人工确认 | 节点编辑不自动写盘；必须主窗口 `Ctrl+S` |\n\nTelemetry：`ai.edit.open` / `ai.edit.ready` / `ai.edit.applied` / `ai.edit.cancelled` / `ai.edit.merge.cancelled` / `ai.edit.error` / `ai.wizard.generate` / `ai.helper.start`。\n\n### 1.4 知识抽取（教材侧）\n\n入口：工坊左栏 · 教材与章节。\n\n| 能力 | 说明 |\n| --- | --- |\n| 4 抽取预设 | `general` / `grammar` / `dialogue` / `reading`（`backend/lesson_presets.py` 之外的 `textbook_presets.py`） |\n| 滑窗抽取 | 超长章按 `window_chars`（默认 8000）+ `overlap_chars`（500）切窗；按规范化 key 去重 |\n| 状态灯 | 绿 / 黄 / 红 / 灰；带具体问题（空翻译 / 覆盖率低 / 语言混入） |\n| 失败级联 | `standard` 失败 → 自动降级 `vocab_only` 重试一次；`QSettings/textbook/auto_cascade` 可关 |\n| 按质量重抽 | 把本章质量问题回灌 AI，输出完整修正版替换 |\n| OCR | 可选外部依赖（Tesseract / ocrmypdf），GUI 不内置 |\n| 语言对模板 | 优先级：内存 register > 持久化覆盖 > 内置语言对包 > 内置默认（`backend/knowledge_prompt.py`） |\n| 抽词对齐 | `pos` 闭集 / 翻译归一化 NFKC / 跨表去重（`vocab` ↔ `expressions`） |\n\n### 1.5 设置与运维\n\n入口：工具栏 **设置** → 8 个 tab。\n\n![设置 → AI 配置（实际运行截图：供应商预设 / Base URL / Key / 双模型）](/images/authoring/_real/11-settings-ai.png)\n\n| Tab | 关键 AI 能力 |\n| --- | --- |\n| 外观 | 浅色 / 深色 + 字体 80–150% 缩放（间接影响 LLM 长上下文渲染） |\n| AI 配置 | 供应商预设（`deepseek` / `openai` / `moonshot` / `ollama` / `custom`）；API Key **仅会话内存**；连接测试；JSON Schema 严格度（`auto` / `on` / `off`）；响应缓存 LRU(128) SHA-256 键；reasoning；timeout 5–600 s；temperature 0–2；重试 0–5；`max_parallel_lessons` 1–8；`pipeline_default_mode`（`fast` / `refine`） |\n| AI 用量 | 今日 / 累计 token；按模型价格估算成本（`backend/ai_presets.py` 本地计价表） |\n| 提取 Prompt | 语言对抽取规则块的持久化覆盖 |\n| 编辑器 | 撤销上限 10–500 步；关闭时未保存策略 |\n| 体验 OS | 体验模式四档（observer / copilot / active / immersive）+ Immersive 子开关 + 能力开关 + 日配额 |\n| Git 库 | 克隆根 / 二进制路径 / 默认语言 / LAN 端口 / 绑定 / token / SSH 私钥 |\n| 操作日志 | 最近 200 条操作 / 错误回看 |\n\nAI 基础参数（`Settings.ai_*` 字段）：\n\n| 字段 | 默认 | 范围 | 含义 |\n| --- | --- | --- | --- |\n| `ai_provider` | `custom` | 5 个枚举 | 一键填 Base URL + 默认模型 |\n| `ai_base_url` | （空） | URL 字符串 | HTTP endpoint；持久化 |\n| `ai_model` | （空） | 模型标识 | 主模型；持久化 |\n| `ai_model_chat` | （空） | 模型标识 | 对话 / 解释；空 = 用 `ai_model` |\n| `ai_model_json` | （空） | 模型标识 | JSON 生成 / 修复；空 = 用 `ai_model` |\n| `ai_api_key` | （空） | string | **仅内存**；应用退出即销毁 |\n| `ai_timeout` | `120.0` s | [5, 600] | 请求超时 |\n| `ai_temperature` | `0.7` | [0.0, 2.0] | 采样随机度 |\n| `ai_retry_max` | `1` | [0, 5] | 自动重试轮数 |\n| `ai_cache_enabled` | `False` | bool | 进程内 LRU(128)，键 SHA-256(model, messages, response_format)，不存 API Key |\n| `ai_fill_needs_review` | `False` | bool | 二趟补全 `[待补]` / `needs-review` |\n| `ai_max_parallel_lessons` | `1` | [1, 8] | 精修流水线并行度 |\n| `ai_pipeline_default_mode` | `fast` | `fast` / `refine` | 精修模式默认 |\n| `ai_json_schema_strict` | `auto` | `auto` / `on` / `off` | `auto` 首次 400 自动回退 `json_object`；`on` 强制 `json_schema`；`off` 强制 `json_object` |\n\n实现位置：`src/application/settings.py`（`Settings.ai_*` 字段 + QSettings 键映射）+ `src/backend/ai_presets.py`（5 供应商预设与本地计价表）。\n\n## 2. 5 条主路径\n\nREADME §"创作者五条主路径（AI 感知增强）" 给出的标准工作流。每条都对应具体 GUI 入口与预期体感。\n\n| 路径 | 步骤 | GUI 入口 | 体感 |\n| --- | --- | --- | --- |\n| **A 空白→一节课** | 1. 工坊空白项目 2. 主题/等级 3. 快速或精修生成 4. 结构大纲看**生成摘要 + 质量维** 5. 导入 | 工坊 → 空白 AI 项目 | 不用翻 JSON 也能决定导不导入 |\n| **B 教材→课** | 1. 从教材新建 2. 抽章（状态灯可见滑窗/降级）3. 勾选入池 4. Grounded 生成 5. 导入 | 工坊 → 从教材新建 | 抽取失败有自动降级；可「按质量重抽」 |\n| **C 改一处** | 1. 教师模式题目「AI」/ 树右键 AI 编辑 / Review 局部重生成 2. 预设指令 3. 确认 + Ctrl+Z | 课程树右键 / 试做 AI 按钮 | 改题可确认 + Ctrl+Z |\n| **D 校验清零** | 1. 校验面板多选问题 2.「AI 自动修正」按节点分批 merge 3. validate | 校验面板 | 不必逐条点修 |\n| **E 导入后改进** | 1. 总览看 section 质量分 2. 回工坊 / 教师定向修 3. 低分课着色提示 | 总览 → 跳转 | 低分课有着色提示 |\n\n实现位置：工坊对话框 `src/dialogs/workshop_window.py` + 草稿服务 `src/backend/experience/` 下的平铺模块。\n\n## 3. 决策矩阵\n\n### 3.1 项目模式 × 生成模式 × 预设 矩阵\n\n| 项目模式 | 抽取预设 | 生成模式 | 适用 |\n| --- | --- | --- | --- |\n| 教材项目 | `general` | 快速 | 草稿探索 |\n| 教材项目 | `grammar` / `dialogue` / `reading` | 精修 | 发布候选 |\n| 空白 AI 项目 | （无抽取） | 快速 | 自由探索 |\n| 空白 AI 项目 | （无抽取） | 精修 | 高质量初始草稿 |\n\n精修模式状态机（`backend/ai_pipeline.py`）：\n\n```text\nPlan ──► 大纲 ──► 分课生成 ──► 校验 ──► 内容质量分\n                                         │\n                                         ▼\n                            修复（先规则修复，LLM 仅处理剩余 error）\n                                         │\n                                         ▼\n                                  通俗解释 ──► ReadyImport\n                  （取消时大纲 / 草稿随 project.json 自动保存）\n```\n\n右栏 checklist 实时显示每步状态（pending / running / done / skipped / failed）。**流水线只到草稿为止**；导入仍走原有「校验 → 目标选择 → diff/merge 预览 → 人工确认」流程，**不**自动导入。\n\n### 3.2 AI 修正 vs 人工修正 矩阵\n\n| 场景 | 推荐方式 | 备注 |\n| --- | --- | --- |\n| validate error ≤ 3（单节点） | AI 修正此节点 | 单 patch，可撤销 |\n| validate error 4–10（多节点） | AI 批量修正 | 按节点分批；每批走 `QUndoCommand` |\n| validate error > 10（跨节） | 拆 Section / 重新生成 | AI 批量修正的批数过多易丢失上下文 |\n| lint warning 连续 3 节同源 | 回到工坊按质量重抽 | lint 是结构性偏差，AI 单点修治标 |\n| 资源悬挂（`unresolved reference`） | 资源库手工替换 | AI 不知道该资源的语义边界 |\n| 跨 ID 改写 | **禁止 AI 自动改** | 必须人工；ID 是引用锚点 |\n\n### 3.3 失败模式 × 降级路径 矩阵\n\n| 失败模式 | 检测 | 降级路径 |\n| --- | --- | --- |\n| 网络失败 | LLM API 超时 / 5xx | 重试 `ai_retry_max` 轮 → 失败则提示「稍后重试」 |\n| JSON Schema 400 | `auto` 模式 | 标记 `_json_schema_supported=False` → 切 `json_object` |\n| 配额耗尽 | 402 / 429 | 提示续费；不自动重试 |\n| 抽取失败（standard） | 状态灯红 | 自动降级 `vocab_only` 重试一次（默认开） |\n| 抽取失败（vocab_only） | 仍红 | 标红 + 拟人化分析按钮 |\n| LLM 返回包含已删 id | `_detect_ai_edit_conflicts` | 弹三选一冲突解决；不得自动应用 |\n| LLM 产出不合 validate | 修复阶段 | 先规则修复，LLM 仅处理剩余 error |\n| TTS 生成失败 | MiniMax API 4xx / 网络失败 | 无自动 fallback；失败项记 telemetry，人工处置 |\n\n## 4. 字段表\n\n### 4.1 模型配置\n\n见 §1.5 表格。补充：\n\n- **供应商预设**（`backend/ai_presets.py`）：\n\n  ::: details 五个预设对照\n  | 预设标识 | 显示名称 | 默认 Base URL | 默认模型 | 推理链支持 |\n  | --- | --- | --- | --- | --- |\n  | `deepseek` | DeepSeek | `https://api.deepseek.com` | `deepseek-v4-pro` | 是 |\n  | `openai` | OpenAI | `https://api.openai.com/v1` | `gpt-4o` | 否 |\n  | `moonshot` | Moonshot AI | `https://api.moonshot.cn/v1` | `moonshot-v1-8k` | 否 |\n  | `ollama` | Ollama（本地） | `http://localhost:11434/v1` | `qwen2.5` | 否 |\n  | `custom` | 自定义 | 用户填写 | 用户填写 | 用户勾选 |\n  :::\n\n- **JSON Schema 严格度**：`auto`（默认）首次 `json_schema` 试错遇 400 时调用 `mark_json_schema_unsupported()`，后续切 `json_object`；`on` 强制 `json_schema`；`off` 强制 `json_object`。\n- **响应缓存**：进程内 LRU(128)；命中仍会跑 validator 防脏；`ai.cache.stats` 事件给出命中/未命中计数。\n\n### 4.2 抽取预设\n\n::: details 四个预设对照\n| 预设 | 目标 | 提示词倾向 | 实现 |\n| --- | --- | --- | --- |\n| `general` | 通用教材 | 均衡抽取 | `backend/textbook_presets.py` |\n| `grammar` | 语法书 | 低温度，强调规则 | 同上 |\n| `dialogue` | 对话书 | 强调表达与口语 | 同上 |\n| `reading` | 阅读材料 | 词汇抽取为主 | 同上 |\n:::\n\n### 4.3 内容质量六维\n\n`backend/content_quality.py` 纯函数；不依赖 Qt。每维 0–1，越高越好；默认阈值 0.7。\n\n::: details 六维探针对照\n| 维度 | 探针 | 阈值 | 不阻断 |\n| --- | --- | ---: | --- |\n| 复现（reproducibility） | 同 prompt 多 LLM 输出 JSON Schema 一致性 | ≥ 0.8 | 是 |\n| 题型（item_type） | 每 stage 题型分布与模板预设一致 | ≥ 0.7 | 是 |\n| 干扰项（distractor） | 选项与正确项同 pos、同 cefr、无语义近邻 | ≥ 0.6 | 是 |\n| 难度（difficulty） | 同一 stage 内认知梯度单调 | ≥ 0.7 | 是 |\n| 听力（listening） | `listeningPhases` 资产齐全 + 重播按钮 + 文本边界 ≥ 2 s | ≥ 0.7 | 是 |\n| 资源卫生（hygiene） | 词汇 / 表达 / 语法点引用闭环；无孤立条目 | ≥ 0.8 | 是 |\n:::\n\n## 5. Telemetry 事件表\n\n`src/infrastructure/telemetry.py` 已实现事件（按子系统分组）：\n\n::: details 事件全表\n| 子系统 | 事件 |\n| --- | --- |\n| 仓库 | `repo.open` / `repo.new` / `repo.open.cancelled` / `repo.new.cancelled` / `repo.save.triggered` |\n| 发布 | `repo.publish.triggered` / `repo.publish.committed` / `repo.publish.failed` |\n| AI 编辑 | `ai.edit.open` / `ai.edit.ready` / `ai.edit.applied` / `ai.edit.cancelled` / `ai.edit.error` / `ai.edit.merge.cancelled` / `ai.wizard.generate` / `ai.helper.start` |\n| AI 缓存 | `ai.cache.stats`（命中 / 未命中计数） |\n| AI 解释 | `ai.explain.done` |\n| AI 生成 | `ai.generate.start` |\n| TTS | `tts.open` / `tts.generate` / `tts.generate_failed` |\n| 教材抽取 | `textbook.extract.cancel` / `textbook.review.edit` |\n| 体验 | `experience.chip.start` / `experience.palette` / `overview.open` / `publish.open` / `resources.open` / `settings.open` / `workshop.open` / `wizard.open` / `git_library.open` |\n| 关闭 | `app.close_requested` / `app.close_saved` / `app.close_discarded` / `app.close_cancelled` |\n:::\n\n所有事件通过 `QSettings` 持久化在设置 → 操作日志 tab 可见。失败类事件走 `telemetry.record_error(exc, context=...)` 同时记录异常堆栈与上下文。\n\n## 6. 与 GUI 主窗口的衔接\n\n```text\n工具栏入口（9 项）：\n  课程仓库 / 保存 / 课程工坊 / 总览 / 资源库 / 发布 / 生成听力音频 / 教师模式 / 设置\n\n课程树右键入口（17 动作）：\n  Section  → 新建 Unit / 删除 / AI 编辑此 / AI 修正此\n  Unit     → 新建 Lesson / 功能课向导… / 删除 / AI 编辑 / AI 修正\n  Lesson   → 复制 (Ctrl+D) / 删除 / AI 编辑 / AI 修正\n  多选     → 批量复制 / 批量移动 / 批量套用预设 / 批量删除\n\n资源库菜单（2 项）：\n  本地资源（3 标签）\n  Git 资源库（3 标签：远程协作 / LAN / 团队留言板）\n```\n\n工坊画布入口的细节见 [教材导入](/authoring/textbook-import) 与 [教师指南 - 课程工坊](/authoring/teacher-guide#4-课程工坊可选)。\n\n## 7. 失败模式与降级路径\n\n### 7.1 网络失败\n\n- 检测：HTTP 超时 / 5xx / DNS 失败。\n- 降级：重试 `ai_retry_max` 轮（指数退避），全部失败后弹「稍后重试」并写入 telemetry。\n\n### 7.2 Schema 失败\n\n- 检测：`response_format=json_schema` 收到 400 / 含 "schema" 错误。\n- 降级：调 `mark_json_schema_unsupported()` 标记；后续自动切 `json_object`；状态写入 `ai.json_schema.strict` 字段。\n\n### 7.3 配额失败\n\n- 检测：402 / 429 状态码。\n- 降级：**不**自动重试；提示续费；保留草稿到 `project.json`；等待人工恢复。\n\n### 7.4 资源悬挂\n\n- 检测：lint 报 `unresolved reference`。\n- 处置：资源库手工替换；**不**调 AI 补建（AI 不知道该资源的语义边界）。\n\n### 7.5 工坊任务失败\n\n- 检测：工坊任务状态机跳到 `failed`。\n- 降级：弹 `AiErrorAnalyzerDialog` 拟人化分析；保留草稿；允许续作。\n\n### 7.6 TTS 失败\n\n- 检测：MiniMax API 4xx / 网络失败 / 子进程非零退出。\n- 降级：无自动 fallback 链；失败项记 `telemetry`，明细在设置 → 操作日志查看；该 phase 保留文本，发布前补录或重试。\n\n## 8. 创作者不下放的边界\n\n硬规则，AI 任何场景都不得越界：\n\n1. 不让 AI 改既有节点的 `id`。\n2. 不让 AI 删既有 `vocab` / `expression` / `grammar_point`。\n3. 不让 AI 自动覆盖既有 Section（必须人工选合并 / 跳过 / 覆盖 / 作为新 Section）。\n4. 不让 AI 在共享目录自动写盘（仅在 `course_dir` 内允许）。\n5. 不让 AI 在没有作者 review 的情况下进入发布（必须主窗口 `Ctrl+S`）。\n6. 不让 AI 跳过 `validate` 与 `lint`。\n7. 不让 AI 替换为未注册的 `runtimeType`。\n8. 不让 AI 跨越语言对边界（如 `tr` 课程引用 `en` 课程的 `vocab`）。\n\n违反上述任一条的 AI 输出必须由作者裁决，不得静默应用。\n\n> AI 的「下不下放」由 4 档体验模式（observer / copilot / active / immersive）控制。`PolicyDecision` 字段、M-08 配额熔断、LLM 意图分类与 `Ctrl+Shift+D` 一键降档见 [AI 控制模式](/authoring/ai-control-modes)。\n\n## 9. 相关文档\n\n- [教师指南](/authoring/teacher-guide)\n- [课程目录约定](/authoring/course-layout)\n- [资源文件](/authoring/resource-files)\n- [Lesson JSON 结构](/authoring/lesson-schema)\n- [校验与 Lint](/authoring/validation)\n- [教材导入](/authoring/textbook-import)\n- [音频资产](/authoring/audio-assets)\n- [发布检查表](/authoring/release-checklist)\n- 应用仓库 `tool/gui/docs/ai_configuration_and_features_report.md`（开发者向深度报告）\n- 应用仓库 `tool/gui/docs/ai_refactor_contract.md`（AI 重构契约）\n',ps=`# 音频资产

> 听力课的音频分两类：引用单词/表达 id 的走**运行时 TTS**（不落盘），具名听力素材落在 \`assets/sounds/<lang>/listening/<asset>.mp3\`。具名素材是 Lesson 的可发布依赖，发布前用 \`audio-manifest\` 校验引用闭合。

![音频目录结构 + manifest 状态色（present / missing）](/images/authoring/audio-tree.svg)

![生成听力音频对话框（实际运行截图：voice / model / speed / force 选项）](/images/authoring/_real/10-generate-audio.png)

## \`audioAsset\` 的两种取值

| 取值 | 解析 | 落盘 |
| --- | --- | --- |
| 词/表达 id（如 \`w-merhaba\`） | 运行时 TTS 朗读该词条 | 不落盘 |
| 具名素材（如 \`s1-dialogue-a\`） | \`assets/sounds/<lang>/listening/<asset>.mp3\` | 必须存在 |

\`audioAssets\` 数组同理，可混入 \`anki://<importId>/<file>\`（导入的 Anki 媒体，由应用内 Anki 目录解析，不受 manifest 校验）。

## 目录结构

\`\`\`text
assets/sounds/<lang>/
└── listening/
    ├── <asset>.mp3        # 具名听力素材（生成或人工录音，平铺）
    ├── bgm/               # 混音用背景音素材池（bgmA.mp3 …）
    ├── debut/             # 混音用开场素材池（debutA.mp3 …）
    └── fin/               # 混音用收束素材池（finA.mp3 …）
\`\`\`

- 具名素材的文件名 = \`audioAsset\` 标识符 + \`.mp3\`。
- \`bgm/\`、\`debut/\`、\`fin/\` 是 \`tool/mix_listening_a1.py\` 的混音素材池，不通过 \`audioAsset\` 引用。

::: warning 引用与文件必须成对提交
**禁止**仅添加文件而不更新引用；**禁止**仅添加引用而不提交文件。后者在 manifest 中直接标 \`missing\` 并阻断发布。
:::

## 格式规范

| 属性 | 要求 |
| --- | --- |
| 容器 | MP3 |
| 采样率 | 44.1 kHz |
| 声道 | 单声道优先；接受立体声 |
| 比特率 | ≥ 128 kbps |
| 前后静音 | 各 ≤ 0.3 s |
| 峰值 | 不得削波（true peak ≤ -1 dBTP） |
| 响度 | 与相邻素材差异 ≤ 2 LUFS |

不满足以上规范的素材可能在客户端解码失败、播放抖动或与 TTS 资源响度失衡。

## 录音要求

- 母语者或达到流利程度的说话者。
- 环境噪声低且稳定（SNR ≥ 40 dB）。
- 麦克风距离 10–20 cm，控制爆破音。
- 自然、清晰、面向学习者的语速。
- 不使用夸张语调或戏剧化表演。
- 不含未经许可的音乐或第三方内容。
- 段落之间保留 0.5–1.0 s 自然间隔。

## Manifest 校验

\`\`\`bash
python tool/course_cli.py --course-dir assets/courses/turkish audio-manifest --output manifest.csv
\`\`\`

只统计「具名听力素材」——词/表达 id 引用与 \`anki://\` 前缀自动跳过。输出 CSV 列：

| 列 | 含义 |
| --- | --- |
| \`asset_id\` | JSON 中引用的标识符 |
| \`type\` | 固定 \`listening\` |
| \`referenced_by\` | 引用位置（\`section/unit/lesson\`） |
| \`status\` | \`present\`（\`listening/<asset>.mp3\` 存在）/ \`missing\` |

发布门禁：**禁止**存在 \`status=missing\` 的引用 —— 先补录或删除引用。

## 替换生成音频

人工录音可覆盖同 ID 的 TTS 生成文件。提交说明中标记替换关系：

\`\`\`text
- 替换 audioAsset: s1-dialogue-a
  原: TTS (MiniMax speech-2.8-hd)
  新: 人工录音 / 文件: assets/sounds/turkish/listening/s1-dialogue-a.mp3
  授权: CC-BY-SA 4.0 / 作者张三
\`\`\`

ID 保持不变，Lesson JSON 无需因音质替换而修改。

## 生成听力音频（MiniMax TTS）

工具栏 **「生成听力音频」** 扫描当前课程所有听力课的 \`listeningPhases\`，对有 \`transcript\` 的 phase 调 MiniMax TTS 生成缺失的 MP3。底层脚本是 \`tool/generate_audio.py\`（子命令 \`all\` / \`list\` / \`speak\`），GUI 以子进程方式调用并显式传 \`--course-dir\` / \`--sounds-dir\`。

### 预览

打开对话框前先调 \`generate_audio_client.preview_generation(course_dir, settings)\` 返回 \`{total, existing}\` —— \`total\` 是可生成的 phase 数（缺 \`audioAsset\` 或 \`transcript\` 的不计入），\`existing\` 是已存在 MP3 的数量。

### 对话框字段

\`GenerateAudioDialog\`（\`tool/gui/src/dialogs/generate_audio_dialog.py\`）暴露：

| 字段 | 类型 | 约束 / 默认 |
| --- | --- | --- |
| \`voice_id\` | 可编辑下拉 | 内置常见 MiniMax 音色（\`female-tianmei\` 等）；默认 \`female-tianmei\` |
| \`model\` | 自由文本 | 默认 \`speech-2.8-hd\` |
| \`speed\` | float | [0.5, 2.0]，默认 **0.9** |
| \`force\` | bool | 强制重生成已存在的 MP3（默认关，保护人工录音） |
| \`api_key\` | string | **仅当前会话内存**；关闭即清空，不入 QSettings |

\`voice_id\` / \`model\` / \`speed\` / \`force\` 持久化到 QSettings（\`tts/*\`）；\`api_key\` 永不落盘。

### 执行

\`GenerateAudioWorker\`（\`tool/gui/src/application/audio_worker.py\`）在线程中跑子进程，逐条生成并回报进度；\`job_tray\` 在工具栏右侧显示「正在生成听力音频…」，\`QProgressDialog\` 提供取消（已生成文件保留）。失败项记 telemetry，需在设置 → 操作日志查看明细后人工处置 —— 没有自动 fallback 链，失败即跳过。

## 授权

提交者必须：

- 拥有录音版权或有效授权。
- 允许项目长期、免版税地随 Turna 分发。
- 不含未授权背景音乐或第三方素材。
- 在 \`release-notes\` 中标注授权协议（CC-BY / CC-BY-SA / 自有版权等）。

## 录音 QA 清单

发布前逐项核对：

- [ ] 资产在 manifest 中 \`status=present\`。
- [ ] JSON 引用与文件名严格一致（大小写敏感）。
- [ ] 文件可在目标设备解码（\`ffmpeg -i <file>\` 验证）。
- [ ] 响度与相邻素材差异 ≤ 2 LUFS。
- [ ] 无超长静音（> 0.5 s 的内部静音需剪辑）。
- [ ] 听力题具有重播按钮与必要文本边界。
- [ ] 高频段无金属感、底噪稳定。

## 故障与处置

| 现象 | 根因 | 处置 |
| --- | --- | --- |
| 客户端无法播放 | 编解码或采样率异常 | \`ffprobe\` 检查并重导出 |
| 响度跳跃 | 录音条件不一致 | 在 DAW 中归一化至 -16 LUFS |
| 引用了不存在的文件 | 删除录音未联动 | manifest 标 \`missing\`；删除引用或补录 |
| 客户端解码抖动 | MP3 VBR 极端设置 | 重导出为 CBR 192 kbps |

## 相关文档

- [音频、TTS 与朗读](/guide/audio-and-tts)
- [Lesson JSON 结构](/authoring/lesson-schema)
- [课程目录约定](/authoring/course-layout)
- [发布检查表](/authoring/release-checklist)
- [校验与 Lint](/authoring/validation)
`,ms='# 课程目录约定\r\n\r\n::: info 真理源\r\n**磁盘上的 JSON 是真理源**。SQLite 只是 App 启动后从 JSON 派生出来的运行期缓存，编辑器、CLI、CI、客户端均按同一份目录读写。任何流程都不应以数据库为权威。\r\n:::\r\n\r\n![课程目录结构与规模上限契约](/images/authoring/course-directory.svg)\r\n\r\n![Section → Unit → Lesson 三段层级与字段合同](/images/authoring/course-hierarchy.svg)\r\n\r\n![课程结构总览（实际运行截图：8 Sections / 11 Units / 54 Lessons，词汇·表达·语法 100% 覆盖）](/images/authoring/_real/03-overview.png)\r\n\r\n## 适用范围\r\n\r\n本文档描述一门语言的完整课程仓库的目录形状、字段合同、规模上限与边界处理。它是编辑器保存逻辑、`course_cli` 校验逻辑与 Flutter `Seeder` 共同遵守的契约。\r\n\r\n应用仓库主版本下另有一份同等地位的 `docs/authoring/course-layout.md`，包含 CLI 实现细节。修改字段合同须同步两端并新增测试。\r\n\r\n## 目录结构\r\n\r\n```text\r\nassets/courses/<dir>/\r\n├── index.json              # 课程索引：版本、语言、Section 列表与文件指针\r\n├── vocab.json              # 课程级词汇\r\n├── expressions.json        # 课程级固定表达\r\n├── grammar_points.json     # 课程级语法点\r\n└── sections/\r\n    ├── section1.json       # Section A 的 Unit / Lesson 内容\r\n    ├── section2.json\r\n    └── ...\r\n```\r\n\r\n`<dir>` 是 `assets/courses/manifest.json` 里声明的**目录名**（`turkish` / `french`），与语言代码 `code`（`tr` / `fr`）不是一回事。已落地：`turkish`（正式课程，A1–B2）与 `french`（多语言并存机制的验收 fixture，**不是正式课程**，不要当课程模板照抄）。\r\n\r\n::: tip 多课程并存\r\n`<lang>` 路径下只承载一种语言课程；不同语种必须落各自目录，避免 cross-language 引用。\r\n:::\r\n\r\n## index.json 字段合同\r\n\r\n```jsonc\r\n{\r\n  "version": 12,                   // 课程语义版本；任何结构/资源变更必须 +1（当前值示例）\r\n  "language": "tr",                // BCP 47 短代码，与目录名一致\r\n  "displayName": "Turkish",\r\n  "sections": [\r\n    {\r\n      "id": "section1",\r\n      "name": "Section 1",\r\n      "description": "...",\r\n      "level": "A1",               // CEFR: A1 / A2 / B1 / B2\r\n      "prerequisiteSectionIds": [],\r\n      "file": "sections/section1.json"\r\n    }\r\n  ]\r\n}\r\n```\r\n\r\n| 字段 | 必填 | 说明 |\r\n| --- | --- | --- |\r\n| `version` | 是 | 整数。客户端在 `version` 变化时执行 reseed；同版本不重复导入 |\r\n| `language` | 是 | 语言**代码**（如 `tr`），不是目录名；与目录名不一致是正常的（`turkish/` 目录里就是 `"language": "tr"`），validate 不检查此项 |\r\n| `displayName` | 是 | 客户端展示用，可本地化 |\r\n| `sections[].id` | 是 | 全课程稳定；发布后不改 |\r\n| `sections[].file` | 是 | 相对课程根目录；必须可解析为现存文件 |\r\n| `sections[].prerequisiteSectionIds` | 否 | 跨 Section 解锁依赖；必须为已知 ID 集合 |\r\n| `sections[].level` | 是 | Section 目标等级；用于复习调度权重 |\r\n\r\n::: warning ID 一旦发布即不可变\r\n`tool/gui` 拒绝已有节点 ID 的重命名。语义变更须通过新增 + 删除完成。\r\n:::\r\n\r\n## Section 文件合同\r\n\r\n```jsonc\r\n{\r\n  "id": "section1",\r\n  "name": "Section 1",\r\n  "description": "...",\r\n  "prerequisiteSectionIds": [],\r\n  "units": [\r\n    {\r\n      "id": "s1-u1",\r\n      "name": "问候与介绍",\r\n      "description": "...",\r\n      "prerequisiteUnitIds": [],\r\n      "lessons": [\r\n        {\r\n          "id": "s1-l1",\r\n          "name": "Greetings / Intro",\r\n          "type": "normal",\r\n          "template": "intro",\r\n          "description": "Introduce greeting forms.",\r\n          "prerequisiteLessonIds": [],\r\n          "content": {\r\n            "linkedGrammarPointIds": ["g-greeting-particles"],\r\n            /* canonical shape */\r\n          }\r\n        }\r\n      ]\r\n    }\r\n  ]\r\n}\r\n```\r\n\r\n层级固定为三段：`Section → Unit → Lesson`，不可越级或扩展。土耳其语课程的 ID 约定是 `sectionN` / `sN-uM` / `sN-lK`，法语用 `fr-section1`——都合法。ID 与文件名的真正约束只有「稳定且唯一」：Section 文件名由 `index.json` 的 `sections[].file` 显式指针决定，不是硬性命名规则。GUI 新建节点则用 `s-<hex>` / `u-<hex>` / `l-<hex>` 随机短 id。\r\n\r\n## Canonical content 形状\r\n\r\n新内容禁止使用扁平 `questions` 列表。每个 `template` 对应一个 canonical 容器：\r\n\r\n| `template` | 首选字段 |\r\n| --- | --- |\r\n| `intro` | `content.subLessons[].stages[]` |\r\n| `practice` | `content.subLessons[].stages[]` |\r\n| `listening` | `content.listeningPhases[]` |\r\n| `reading` | `content.readingPassage` + `content.stages[]` |\r\n| `review` | `content.subLessons[]` 或 `content.stages[]` |\r\n| `mastery` | `content.stages[]` |\r\n| `legacy` | 仅兼容已存在的数据；新内容不得使用 |\r\n\r\n完整字段定义见 [Lesson JSON 结构](/authoring/lesson-schema)。所有 `runtimeType` 必须已注册；`vocab.json` / `expressions.json` / `grammar_points.json` 中不存在的引用构成 error。\r\n\r\n## 规模上限\r\n\r\n| 限制 | 值 | 触发动作 |\r\n| --- | ---: | --- |\r\n| 每 Section 的 Unit | ≤ 60 | validate error，保存回滚 |\r\n| 每 Unit 的 Lesson | ≤ 40（生产目标 ≈ 30） | 同上 |\r\n| 每 Lesson 的 stage | 无硬上限 | 无自动检查，靠人工控制（建议 ≤ 12） |\r\n| 每 stage 的 interaction | 无硬上限 | 无自动检查，靠人工控制（建议 ≤ 8） |\r\n| `index.json.version` 跨次发布增量 | ≥ 1 | 工具不校验，须人工保证且不得复用 |\r\n\r\n上限是发布契约，不是编辑器性能极限。超过上限将导致移动端首屏渲染抖动、复习调度计算量失控。\r\n\r\n## 引用与单向数据流\r\n\r\n```text\r\nresources (vocab / expressions / grammar_points)\r\n        │ stable id\r\n        ▼\r\nLesson.content…items[].wordId | expressionId | grammarPointId\r\n        │\r\n        ▼\r\nvalidate / lint (course_cli) ──► 写盘 ──► 客户端 reseed\r\n```\r\n\r\n引用只能从 Lesson 指向资源文件，资源不得反向引用 Lesson。同形异义项在 `pos` 或释义确实不同、且运行时需要区分时拆为多条；否则保持单一 ID。\r\n\r\n## 校验与编辑器契约\r\n\r\n```bash\r\n# 应用仓库根目录\r\npython tool/course_cli.py --course-dir assets/courses/turkish validate\r\npython tool/course_cli.py --course-dir assets/courses/turkish lint\r\n```\r\n\r\n`tool/gui` 保存按钮**始终**先调用 `CourseAdapter.save()`，底层走上述 CLI。GUI 不另行定义校验规则。失败时执行以下原子回滚：\r\n\r\n1. 阻塞最终写盘。\r\n2. 标记问题节点（红色角标）。\r\n3. 内存编辑状态保留，可继续修改。\r\n4. 磁盘文件保持失败前的最后一个合法版本。\r\n5. 允许修复后重试保存，不留半写 JSON。\r\n\r\n## 新建议程目录\r\n\r\nGUI 工具栏 **「课程仓库 → 新建课程目录…」** 触发 `InitCourseDialog`（`tool/gui/src/dialogs/init_course_dialog.py` 中的 `InitCourseDialog`）。该对话框在所选父目录下写出最小可运行课程骨架：\r\n\r\n![新建课程目录对话框（实际运行截图：目标目录 / 显示名 / 语言 / Section 数 / 每单元课时数）](/images/authoring/_real/12-init-course.png)\r\n\r\n| 表单字段 | 默认值 | 范围 | 落点 |\r\n| --- | --- | --- | --- |\r\n| 目标目录（父文件夹） | 上次使用的 `last_init_dir` | 任意可写目录 | 父目录路径 |\r\n| 课程显示名 | `My Chinese-English Course` | 任意 | `index.json.displayName` |\r\n| 目标语言代码 | `en` | BCP 47 短代码 | 目录名 `<lang>` 与 `index.json.language` |\r\n| 源语言（提示语） | `Chinese` | 任意 | `ai_phased` 与抽取 prompt 的源语占位 |\r\n| Section 数量 | `3` | 1–8 | `index.json.sections[]` 长度 |\r\n| 每单元课时数 | `3` | 1–10 | 每个 Unit 的 `lessons[]` 长度 |\r\n\r\n初始化产生的文件集：\r\n\r\n```text\r\n<parent>/<displayName>/\r\n├── index.json              # version=1, language=<target>, sections[].file\r\n├── vocab.json              # 中教英样例词表（仅首次）\r\n├── expressions.json        # 同上\r\n├── grammar_points.json     # 同上\r\n└── sections/\r\n    └── section<N>.json     # 占位 Section 文件\r\n```\r\n\r\n初始化产生的样例内容是**最简骨架**，仅供流程跑通。新建后必须在编辑器或工坊中替换为真实内容，不可以直接作为发布候选。`QSettings/textbook/last_init_dir` 持久化父目录选择。\r\n\r\n## 最近仓库与启动恢复\r\n\r\nGUI 维护最近 10 个已加载课程路径，写入 `QSettings("Turna","CourseEditor")/recent_repos` 列表（实现见 `application/settings.py::Settings.add_recent_repo`）。\r\n\r\n| 行为 | 触发 |\r\n| --- | --- |\r\n| 加入最近列表 | 打开 / 新建课程成功后 prepend |\r\n| 移除 | 「课程仓库 → 清除历史记录」一键清空 |\r\n| 启动恢复 | 主进程启动时若 `recent_repos[0]` 存在，弹「是否打开上次使用的课程仓库？」对话框 |\r\n\r\n启动恢复仅弹一次，用户拒绝后本次会话不再询问；下次启动仍按相同规则处理。已不存在的路径不会自动从列表移除，下一次「课程仓库 → 最近仓库」展开时会显示灰条目（由 `_populate_recent_menu` 处理）。\r\n\r\n## 版本与重导入\r\n\r\n| 触发条件 | `index.json.version` 变化 | 客户端动作 |\r\n| --- | --- | --- |\r\n| 字段语义变化 | +1 | reseed（清空进度缓存） |\r\n| 仅修复 `lint` 提示 | +1 | reseed |\r\n| 仅文案/翻译润色 | +1（推荐） | reseed |\r\n| 注释/缩进 | 不变 | 不重导入 |\r\n\r\n`version` 只能递增，不可回退或复用。回滚发布内容时使用**新**的递增版本号，不是恢复旧值。\r\n\r\n## 多语言并存\r\n\r\n每种语言独立目录、独立版本。跨语言互引不被支持。土耳其语默认目录为 `assets/courses/turkish/`。新增语种需：\r\n\r\n1. 创建 `assets/courses/<lang>/`。\r\n2. 复制最小可运行模板（含 `index.json`、`vocab.json`、`expressions.json`、`grammar_points.json`）。\r\n3. 递增该目录自身的 `version`。\r\n4. CI 矩阵中追加 validate/lint 任务。\r\n\r\n## AI 能力\r\n\r\n课程目录的创建与维护全程被 AI 流程感知。下表给出 4 个 AI 入口与目录字段的对应关系：\r\n\r\n| AI 入口 | 影响的目录/字段 | 实现位置 |\r\n| --- | --- | --- |\r\n| 「新建课程目录」→ 空白 AI 项目 | 写 6 字段默认骨架（`displayName` / `language` / 源语言 / Section 数 / 每单元课时数），目标落 `source_path=None` 的空白 AI 项目 | `InitCourseDialog` → `TextbookProject.create(source_path=None)` → `tool/gui/src/dialogs/textbook_library_dialog.py` |\r\n| 「新建课程目录」→ 教材项目 | 同上骨架 + 后续工坊教材抽取产生 vocab / expressions / grammar_points | `TextbookProject.create(source_path=<file>)` |\r\n| 最近仓库 | 启动时按 `recent_repos[0]` 自动恢复；`ai_fixer` 等组件读取最近课程的 schema 历史 | `app.py::_maybe_open_last_repo` |\r\n| 启动询问 | 「是否打开上次使用的课程仓库？」弹窗；记住会话选择 | `QMessageBox.question` |\r\n\r\n`InitCourseDialog` 的 6 字段中的「目标语言」与「源语言」是后续工坊 `backend/lesson_presets.py` 的 `build_preset_lesson` 与抽取 prompt 的核心上下文。注意工具**不校验**目标语言与目录名是否一致。源语言影响 LLM 翻译方向与抽取 prompt 的语言对模板选择（参考 [AI 课程生成 - 设置与运维](/authoring/ai-course-generation#15-设置与运维)）。\r\n\r\n新建后的课程目录默认进入空白 AI 项目流；教材项目须在工坊对话框点击「从教材新建…」并选择源文件。两种项目模式下的 AI 行为差异见 [AI 课程生成 - 决策矩阵](/authoring/ai-course-generation#31-项目模式--生成模式--预设-矩阵)。\r\n\r\n## 与 GUI 工具栏的对应\r\n\r\n| GUI 入口 | 影响的目录/字段 |\r\n| --- | --- |\r\n| 课程仓库 → 打开 | 选定根目录，递归加载 `index.json` |\r\n| 课程仓库 → 新建 | `InitCourseDialog` 6 字段 → 写入目录骨架与默认 `version: 1` |\r\n| 课程仓库 → 最近仓库 | `QSettings/recent_repos`，最多 10 条 |\r\n| 课程仓库 → 清除历史记录 | 清空 `recent_repos` 列表 |\r\n| 启动询问 | `_maybe_open_last_repo` 弹「打开最近仓库」对话框 |\r\n| 保存 (Ctrl+S) | `CourseAdapter.save()` → 校验 → 写盘 |\r\n| 总览 | 读 `index.json` + 所有 `sections/*.json`，聚合统计 |\r\n| 资源库 | 直接读写 `vocab.json` / `expressions.json` / `grammar_points.json` |\r\n| 发布 | `version` Bump + `sound-manifest` + `validate` + diff 报告导出 |\r\n\r\n## 相关文档\r\n\r\n- [Lesson JSON 结构](/authoring/lesson-schema)\r\n- [资源文件](/authoring/resource-files)\r\n- [校验与 Lint](/authoring/validation)\r\n- [音频资产](/authoring/audio-assets)\r\n- [发布检查表](/authoring/release-checklist)\r\n- [教师指南](/authoring/teacher-guide)\r\n',gs='# 外部课程包（.turnapack）\r\n\r\n> `.turnapack` 是外部课程进入 Turna 的唯一运行时格式。LibreLingo YAML 等源格式只在离线工具里转换；应用只解析本文描述的 JSON，不在运行时读 YAML。\r\n\r\n这页面向想把 LibreLingo 社区课程（或自制内容）装进 Turna 的课程作者。学习者侧的操作见[导入课程包](/guide/course-pack)。\r\n\r\n## 两种包形态\r\n\r\n| 形态 | `format` | 容器 | 限制 |\r\n| --- | --- | --- | --- |\r\n| v1 | `turnapack/1` | 单文件 UTF-8 JSON（`.turnapack`，手改包可用 `.json`） | ≤ 20 MB；不含媒体，听力题 `audioAsset` 填 wordId，运行时走 TTS |\r\n| v2 | `turnapack/2` | zip：根目录 `pack.json` + `media/` 树 | 压缩 ≤ 80 MB，解压合计 ≤ 200 MB，单文件 ≤ 15 MB |\r\n\r\nv1 顶层结构：\r\n\r\n```jsonc\r\n{\r\n  "format": "turnapack/1",\r\n  "packVersion": 1,\r\n  "language": {\r\n    "code": "es",\r\n    "displayName": "Spanish",\r\n    "ttsLocale": "es-ES",\r\n    "nativeLabel": "Aprende español",\r\n    "signatureChars": "ñÑáéíóúüÜ¿¡"\r\n  },\r\n  "license": {\r\n    "name": "CC BY-SA 4.0",\r\n    "attribution": "LibreLingo community",\r\n    "link": "https://creativecommons.org/licenses/by-sa/4.0/"\r\n  },\r\n  "files": {\r\n    "index.json": {},\r\n    "vocab.json": {},\r\n    "expressions.json": {},\r\n    "grammar_points.json": {},\r\n    "sections/ll-es-s-1.json": {}\r\n  }\r\n}\r\n```\r\n\r\n`files` 的键是相对课程根的路径，内容与 `assets/courses/<dir>/` 同构，校验规则与内置课程一致（见[课程目录约定](/authoring/course-layout)）。\r\n\r\n## 硬规则\r\n\r\n- `format` 只认 `turnapack/1` 与 `turnapack/2`，未知值直接拒绝。\r\n- `language.code` 匹配 `^[a-z]{2,3}$`；不得占用内置 manifest code，不得为 `anki`。\r\n- `index.json` 的 `language` 必须等于 `language.code`；`vocab.json` 必填。\r\n- 所有 section / unit / lesson / word / expression / grammar id 必须以 `ll-<code>-` 开头。\r\n- 引用了 `media/` 但不是带 `media/` 树的 zip → 拒绝。\r\n\r\n## 媒体（v2）\r\n\r\nzip 内布局：\r\n\r\n```text\r\npack.json          # 与 v1 相同的 JSON 对象，format 为 turnapack/2\r\nmedia/dog1.jpg\r\nmedia/hola.mp3\r\n```\r\n\r\n- 课程 JSON 的媒体字段（`audioAsset` / `imageAsset` / `audioAssets` / `imageAssets`）写包内相对路径，导入时被改写成 `turnapack://<code>/<file>`。\r\n- 解压前校验 zip-slip（`..`、绝对路径、冒号），落盘到应用私有目录 `imported_courses/<code>/media/`。\r\n- 允许扩展名：`.jpg` `.jpeg` `.png` `.webp` `.gif` `.mp3` `.ogg` `.wav` `.m4a` `.aac` `.opus`。\r\n- `media/` 规范形态是平铺文件名；嵌套子目录可用（`turnapack://` 解析剥一层 `media/` 前缀后保留子路径）。唯一被拒绝的是 `media/media/…` 双前缀。\r\n- 媒体只在数据库写入成功后解压——失败的导入不会破坏已安装课程的媒体。\r\n\r\n## LibreLingo 转换\r\n\r\n转换器是应用仓库的 `tool/librelingo_import.py`（Python）：\r\n\r\n```bash\r\npython tool/librelingo_import.py \\\r\n  --course-dir path/to/spanish-from-english \\\r\n  --code es --display-name Spanish --tts-locale es-ES \\\r\n  --out spanish.turnapack --validate\r\n```\r\n\r\n| 参数 | 说明 |\r\n| --- | --- |\r\n| `--course-dir` | LibreLingo 课程目录（含 `course.yaml`），必填 |\r\n| `--code` | 包语言码，`[a-z]{2,3}`，必填。一律来自 CLI，不读取课程里的 `IETF BCP 47` |\r\n| `--display-name` / `--tts-locale` | 显示名与 TTS 语言码，必填 |\r\n| `--out` | 输出 `.turnapack` 路径，必填 |\r\n| `--media-dir` | 额外图片 / 音频目录，可重复。课程根下的 `images/`、`media/`、`audio/` 默认扫描 |\r\n| `--pack-version` | 包版本整数，默认 `1` |\r\n| `--default-level` | 默认 CEFR 等级 |\r\n| `--signature-chars` | 覆盖 `Special characters` → `signatureChars` 的自动映射 |\r\n| `--zip` | 即使没有媒体也强制写 v2 zip |\r\n| `--validate` | 写盘前先解包并跑 `course_cli.py validate` |\r\n\r\n发现媒体文件时自动写成 v2 zip；无媒体时输出 v1，行为与「TTS 朗读」一致。\r\n\r\n### LibreLingo 侧的支持面\r\n\r\n- `Modules` / `Skills` / `New words` 等内容块嵌在头块（`Course:` / `Module:` / `Skill:`）内或与其平级均可——两种写法都支持（真实课程的 module 名常带尾斜杠，属平级形态）。\r\n- `Images:` 列表按文件名 stem 匹配媒体索引；同 stem 的音频进 `vocab.audioAsset` 与听力题。\r\n- `Mini-dictionary` 按 `Language.Name` / `For speakers of.Name` 选目标语桶，多义项逗号合并。\r\n\r\n### 生成规则（防碰撞与达标）\r\n\r\n- 词条 / 表达 id 由 `slugify(term)` 派生；折叠后丢信息的词（带重音、非拉丁文字）自动加 `-<sha256 前 6 位>` 后缀保证唯一，同词重复转换结果稳定。\r\n- 一个模块内 lesson 数按 30 切成多个 unit（`ll-<code>-u-<m>-<k>`）——运行时校验单 unit 上限 40 课。\r\n- lesson id 取 skill `Id`，撞名时追加序号后缀。\r\n- 选择题选项做确定性乱序，`correctIndex` 不恒为 0；干扰项排除题干文本本身。\r\n\r\n### 转换真实课程\r\n\r\n真实课程仓库（如 `LibreLingo-ES-from-EN`）浅克隆到应用仓库旁即可；转换时加 `--validate` 会在写盘前跑一遍与运行时同源的校验。校验失败说明包体不满足课程契约，先修包再导入，不要绕过校验。\r\n\r\n## 导入行为（作者需要知道的语义）\r\n\r\n- 同语言码重复导入会先弹覆盖确认；仍存在内容的进度保留，被移除内容的进度清除，孤儿复习行同步清理。\r\n- 语言元信息（displayName / ttsLocale / signatureChars / license）写入 `courseMeta` 的 `importedLang:<code>`，不改内置 manifest。\r\n- 卸载只删解压出的 `media/`，保留 `.turnapack` 供恢复时再解压。\r\n- 备份覆盖 `course.db`（含导入课行与元信息），**不**覆盖包文件本身。\r\n\r\n明确不做的方向：云商店、运行时 YAML 解析、GUI 编辑导入课。\r\n\r\n## 相关文档\r\n\r\n- [导入课程包](/guide/course-pack)：学习者侧操作与恢复语义\r\n- [课程目录约定](/authoring/course-layout)\r\n- [校验与 Lint](/authoring/validation)\r\n- [教材导入](/authoring/textbook-import)：另一条 AI 辅助的课程生产路径\r\n',hs='# Lesson JSON 结构\n\n> Lesson 是课程发布与运行时加载的最小可执行内容单元。本文档是字段合同的权威定义。\n\n![Lesson canonical content 形状与 runtimeType 枚举](/images/authoring/canonical-shapes.svg)\n\n![课时编辑面板（实际运行截图：右侧元数据 + 蓝图编辑器）](/images/authoring/_real/02-lesson-selected.png)\n\n![功能课三步向导（实际运行截图：选类型 → 配置 → 预览）](/images/authoring/_real/09-functional-wizard.png)\n\n新内容**必须**使用 canonical 形状。扁平 `questions` 仅在迁移历史数据时保留兼容路径（播种时归一化）。`tool/gui` 写入的 JSON 100% 遵循本文档；不接受的形状在保存时直接回滚。\n\n## 顶层字段\n\n```jsonc\n{\n  "id": "s1-l1",\n  "name": "Greetings / Intro",\n  "description": "Introduce greeting forms.",\n  "type": "normal",                  // normal | listening | reading | review | challenge\n  "template": "intro",               // intro | practice | listening | reading | review | mastery | legacy\n  "prerequisiteLessonIds": [],\n  "content": {\n    "linkedGrammarPointIds": [],   // 在 content 内，不在 Lesson 顶层\n    /* canonical */\n  }\n}\n```\n\n| 字段 | 类型 | 必填 | 约束 |\n| --- | --- | --- | --- |\n| `id` | string | 是 | 全课程稳定且唯一；发布后不可变 |\n| `name` | string | 是 | 用户可见；可修改；不以 ID 命名 |\n| `description` | string | 是 | 描述本课的可验证学习目标 |\n| `type` | enum | 是 | 语义类别：`normal`/`listening`/`reading`/`review`/`challenge` |\n| `template` | enum | 是 | 渲染骨架；省略时回落 `legacy` |\n| `prerequisiteLessonIds` | string[] | 否 | 依赖必须存在且无环 |\n| `content` | object | 是 | 与 `template` 匹配的 canonical 内容 |\n\n::: warning `linkedGrammarPointIds` 的层级\n它属于 `content`（`LessonContent`），**不是 Lesson 顶层字段**。写在顶层会被反序列化静默丢弃，语法 SRS 注册随之失效，且没有任何校验会报错。正确位置见上方示例。\n:::\n\n::: tip type ≠ template\n`type` 是语义类别，`template` 是渲染骨架（`LessonTemplate`）。`mastery` 仅是 template；它服务于 `type=normal` 的高阶综合课。当前内置课程实际用到的组合见 [课型说明](/guide/lesson-types)。\n:::\n\n## Canonical content\n\n### `intro` / `practice` / `review` / `mastery`\n\n```jsonc\n{\n  "content": {\n    "subLessons": [\n      {\n        "id": "sl-1",\n        "name": "Recognition",\n        "stages": [\n          {\n            "id": "st-recognition",\n            "name": "词形识别",\n            "items": [\n              {\n                "runtimeType": "showWord",\n                "id": "q-hello-show",\n                "wordId": "w-merhaba"\n              },\n              {\n                "runtimeType": "multipleChoice",\n                "id": "q-hello-meaning",\n                "prompt": "merhaba 的意思是？",\n                "options": ["你好", "谢谢", "再见"],\n                "correctIndex": 0\n              }\n            ]\n          }\n        ]\n      }\n    ]\n  }\n}\n```\n\n### `listening`\n\n`listeningPhases` 是三段式：`wordPairing` → `dialogue` → `summary`。每个 phase 自带 `items[]`（该阶段的题），`transcript` 是逐字稿。\n\n```jsonc\n{\n  "content": {\n    "listeningPhases": [\n      {\n        "id": "lp-s1-l4-word",\n        "name": "Word pairing",\n        "type": "wordPairing",        // wordPairing | dialogue | summary\n        "transcript": "Listen and choose the matching form.",\n        "items": [\n          {\n            "runtimeType": "listenAndPick",\n            "id": "lp-s1-l4-0",\n            "audioAsset": "w-merhaba",   // 可以是 word id（走 TTS）或 sounds/ 下的资源名\n            "prompt": "What do you hear?",\n            "options": ["merhaba", "teşekkürler", "hayır"],\n            "correctIndex": 0\n          }\n        ]\n      },\n      { "id": "lp-s1-l4-dialogue", "type": "dialogue", "items": [ /* ... */ ] },\n      { "id": "lp-s1-l4-summary",  "type": "summary",  "items": [ /* listenOnly 等 */ ] }\n    ],\n    "stages": [ /* 可选：听力课也可带普通 stages */ ]\n  }\n}\n```\n\n### `reading`\n\n```jsonc\n{\n  "content": {\n    "readingPassage": {\n      "id": "rp-1",\n      "title": "伊斯坦布尔的早晨",\n      "paragraphs": [\n        { "id": "p-1", "text": "..." },\n        { "id": "p-2", "text": "..." }\n      ],\n      "translation": "..."\n    },\n    "stages": [\n      {\n        "id": "st-mcq",\n        "items": [\n          {\n            "runtimeType": "readingMcq",\n            "id": "q-rmcq-1",\n            "prompt": "作者主要在描述？",\n            "options": ["交通", "天气", "饮食"],\n            "correctIndex": 1\n          }\n        ]\n      }\n    ]\n  }\n}\n```\n\n## 已注册 runtimeType（14 种）\n\n| `runtimeType` | 必填字段 | 可选字段 |\n| --- | --- | --- |\n| `showWord` | `wordId` | `id`, `context`, `expressionId`, `term`, `translation`, `pronunciation`, `audioAsset`, `imageAsset`, `example`, `grammarPointId` |\n| `multipleChoice` | `prompt`, `options`, `correctIndex` | `id`, `imageAsset`, `audioAssets`, `grammarPointId` |\n| `multiSelect` | `prompt`, `options`, `correctIndices` | `id`, `minSelections`（默认 1）, `maxSelections`, `imageAsset`, `grammarPointId` |\n| `fillBlank` | `sentence`, `answer` | `id`, `hint`, `audioAssets`, `imageAssets`, `grammarPointId` |\n| `translateSentence` | `source`, `expected` | `id`, `hints`, `grammarPointId` |\n| `listenAndPick` | `audioAsset`, `prompt`, `options`, `correctIndex` | `id`, `grammarPointId` |\n| `typeTheWord` | `audioAsset`, `prompt`, `expected` | `id`, `grammarPointId` |\n| `listenOnly` | — | `id`, `audioAsset`, `transcript`, `prompt`（默认 "Listen to the summary"）, `grammarPointId` |\n| `reorderSentence` | `scrambled`, `correct` | `id`, `grammarPointId` |\n| `readingMcq` | `prompt`, `options`, `correctIndex` | `id`, `grammarPointId` |\n| `readingTrueFalse` | `statement`, `answer`（bool） | `id`, `grammarPointId` |\n| `readingShortAnswer` | `prompt`, `expectedAnswer` | `id`, `grammarPointId` |\n| `ankiCard` | `front`, `back` | `id`, `audioAssets`, `imageAssets`, `hint`, `sourceNoteId` |\n| `ankiHtmlCard` | `frontHtml`, `backHtml` | `id`, `css`, `mediaBasePath`, `allowJs`, `audioAssets`, `sourceNoteId`, `sourceCardId`, `wordId` |\n\n注意：\n\n- `ankiHtmlCard` 只在 Official 复习路径按原模板渲染；**课时体内的渲染器已退役**（显示占位卡），新课程不要产出该类型。\n- 未知 `runtimeType`：validate 报错；运行时 `Interaction.fromJson` 会降级为占位 `showWord`（`wordId = "unknown-interaction:<type>"`），不让整节课加载失败。\n- `runtimeType` 是闭合枚举。新增题型须先在应用模型注册并补 Flutter 渲染器、CLI 校验规则与 GUI 表单字段，缺一即拒绝发布。\n\n## Stage 与 Interaction\n\n| 对象 | 字段 | 约束 |\n| --- | --- | --- |\n| Stage | `id` | 同 Lesson 内稳定；发布后不改 |\n| Stage | `name` | 用户可见 |\n| Stage | `items[]` | Interaction 列表 |\n| Interaction | `id` | 全 Lesson 内唯一；发布后不改；空 id 运行时回落 `legacy-$index` |\n| Interaction | `runtimeType` | 必须是已注册枚举值 |\n| Interaction | `options` / `correctIndex` / `correctIndices` | 选择题的正确答案以**下标**给出，必须落在 options 范围内 |\n| Interaction | `wordId` / `expressionId` / `grammarPointId` | 引用资源；必须存在 |\n\n::: warning 不得使用数组下标作发布 ID\n所有 ID 必须具备稳定语义，便于定位、错误归因、测试引用与未来的迁移。当前课程约定：`sectionN` / `sN-uM` / `sN-lK`。\n:::\n\n## 先修规则\n\n- `prerequisiteLessonIds` 引用必须存在。\n- 依赖图必须无环。\n- 显示顺序不构成依赖关系；解锁靠显式声明。\n- 跨 Unit / Section 的解锁由更高层处理（`index.json.sections[].prerequisiteSectionIds`）。\n- 删除 Lesson 时，引用其 ID 的其他 Lesson 必须同步处理（删除引用或保留目标）。\n\n## 引用规则\n\n```text\nvocab / expressions / grammar_points\n        │ stable id\n        ▼\nLesson.content.items[].{wordId, expressionId, grammarPointId}\n        │\n        ▼\nvalidate (course_cli) ─► 写入磁盘 ─► 客户端 reseed\n```\n\n- 题面文本可出现任意语言字符；但**资源 ID 必须来自课程级资源文件**。\n- 不得用重复文本替代需要长期追踪的资源 ID。\n- 不得在 Lesson 内部复制整份词表。\n- 不得引用不存在的资源（validate 拒绝）。\n- 不得将编辑器临时状态写入课程 JSON。\n\n## 禁止形状\n\n| 形状 | 后果 |\n| --- | --- |\n| 未注册的 `runtimeType` | validate error |\n| 新 Lesson 使用扁平 `questions` | validate error |\n| 同 Lesson 内 ID 重复 | validate error |\n| 在 Lesson 内复制整份词表 | validate error |\n| 引用不存在的资源 | validate error |\n| 编辑器临时状态混入课程 JSON | validate error |\n| 空 `prompt` / 空 `options` / 答案缺失 | validate error 或 lint error |\n\n## 课时预设库\n\n`tool/gui/src/backend/lesson_presets.py` 内置 5 个预设（`FUNCTIONAL_PRESETS`）。每个预设封装**题型梯度 + 阶段命名 + 默认干扰项分布**：\n\n| 预设 id | 名称 | template | 题型组合 |\n| --- | --- | --- | --- |\n| `listening-3phase` | 听力三阶段 | `listening` | `wordPairing → dialogue → summary` 三 phase |\n| `reading-3q` | 阅读理解·三类题 | `reading` | 篇章 + `readingMcq` + `readingTrueFalse` + `readingShortAnswer` |\n| `mastery-mix` | 综合测验·混合题 | `mastery` | `multipleChoice` + `fillBlank` + `translateSentence` 梯度 |\n| `intro-3step` | 认识新词·三步 | `intro` | `showWord → translateSentence → fillBlank` 骨架 |\n| `practice-mix` | 巩固练习·混合 | `practice` | `multipleChoice` + `fillBlank` + `typeTheWord` 骨架 |\n\n其中 `FUNCTIONAL_TEMPLATES = ("listening","reading","mastery")` 是向导视为「功能课」的入口集合。\n\n```python\nfrom src.backend.lesson_presets import (\n    FUNCTIONAL_TEMPLATES,        # ("listening","reading","mastery")\n    PRESET_BY_ID,                # dict[preset_id, LessonPreset]\n    presets_for_template,        # 列出某 template 的全部预设\n    build_preset_lesson,         # (preset_id, name) -> 完整 lesson dict\n)\n```\n\n预设应用入口：**课程树多选 Lesson → 右键 → 批量套用预设…**。`Ctrl+D` 是 Lesson 级别的浅克隆（不应用预设，仅复制结构）；批量套用预设按预设规整整个 Lesson 的 `content`，是结构性操作，走命令栈可撤销。\n\n## FunctionalLessonWizard（三步功能课向导）\n\n对于首次产出 `listening` / `reading` / `mastery` 三类功能课，GUI 提供三步向导 `tool/gui/src/dialogs/functional_lesson_wizard.py`（`FunctionalLessonWizard`）：\n\n```text\nStep 1. 选类型  ── template（listening/reading/mastery）+ 名称 + 预设（或"空白骨架"）\nStep 2. 配内容  ── 阶段名 / 音频位 / 阅读段落字段 / mastery 题型组合\nStep 3. 预览    ── 只读 LessonBlueprint；显示最终 canonical content\n```\n\n| 步骤 | 表单字段 | 决定字段 |\n| --- | --- | --- |\n| 1 | template | `template` + `type` 字段联动 |\n| 1 | name | `name`（可后续 F2 重命名） |\n| 1 | preset id | 整段 `content` 形状 |\n| 2（listening） | 阶段名 / `audioAsset` | `content.listeningPhases[]` |\n| 2（reading） | 段落数 / 难度 / `linkedWordIds` | `content.readingPassage` |\n| 2（mastery） | 题型组合 | `content.stages[].items[].runtimeType` |\n| 3 | （只读） | 预览整段 `content` JSON 渲染 |\n\n向导 `result_lesson()` 返回完整 Lesson dict，调用方 push `AppendLessonCommand` 插入。入口：**Unit 右键 → 功能课向导…**，或新建 Lesson 对话框勾选向导路径。\n\n## AI 能力\n\nAI 介入 Lesson 的两个主入口：① 课程树右键 → **AI 编辑 / AI 修正此节点**；② 工坊对话与高级 → 自由指令。两者背后均调 `backend/ai_generator.py::AiGenerator` 与 `backend/ai_fixer.py::AiFixer`。\n\n### AI 节点编辑对话框\n\n课程树右键 → **AI 编辑此节点** / **AI 修正此节点** 触发两类 AI 对话框，分别位于 `tool/gui/src/dialogs/ai/generator_*.py（生成器已拆分为 chat/flows/panels/preview/view-state/wizard/worker-hub 多个模块）` 与 `tool/gui/src/dialogs/ai/node_edit_dialog.py`：\n\n| 入口 | 适用 | 关键字段 |\n| --- | --- | --- |\n| AI 编辑此 Lesson / Unit / Section | 自由指令 | 自定义 prompt + 4 类预设指令（精简 / 改写 / 增题 / 翻译润色） |\n| AI 修正此节点 | 校验面板已选问题 | 自动把 `problems[].message` 注入上下文 |\n\n实现要点：\n\n- 生成前先调 `_validate_node(kind, node_json, check_existing_ids=True)` 收集当前节点的 schema 错误，与生成结果对比。\n- 生成结果先做 `_detect_ai_edit_conflicts` —— 若 LLM 返回的 ID 集合与原节点不一致（删 ID / 改 ID / 顺序错位），弹「冲突解决」三选一对话框：保留现状 / 采用 AI 建议 / 取消。\n- 应用走 `AiEditLessonCommand` / `AiEditUnitCommand` / `MergeAiSectionCommand`，全部可 `Ctrl+Z` 撤销。\n- 节点编辑**不**自动写盘，必须在主窗口 `Ctrl+S` 后才落盘。\n\n### AI 生成的 lesson 字段契约\n\nLLM 生成的 Lesson 必须满足的**显式**校验（validate 强制）：\n\n| 字段 | 校验 |\n| --- | --- |\n| `id` | 全课程唯一；不可与已有 id 冲突；发布后不可变 |\n| `template` | 已注册枚举（`intro` / `practice` / `listening` / `reading` / `review` / `mastery` / `legacy`） |\n| `content` | 与 `template` 匹配的 canonical 形状 |\n| `prerequisiteLessonIds` | 引用存在；依赖图无环 |\n| `wordId` / `expressionId` / `grammarPointId` | 引用存在 |\n| `runtimeType` | 已注册枚举（14 种） |\n| `options` / `correctIndex` | 选择题答案下标在 options 范围内 |\n\nLLM 还需满足的**隐式**契约（lint 警告或由 AI 修正阶段强制）：\n\n- `subLessons[].stages[].items[]` 顺序与认知梯度（识别 → 回忆 → 产出）。\n- 同一 stage 内 `runtimeType` 不重复（教学多样性）。\n- 干扰项与正确项词性、难度相近，无语义近邻。\n- 新建 Lesson 不使用扁平 `questions`（已 deprecated）。\n- 不复制整份词表到 Lesson 内（资源必须来自 `vocab.json`）。\n\n实现位置：`backend/lesson_content.py::TEMPLATE_LABELS` + `backend/lesson_presets.py::FUNCTIONAL_PRESETS` + `backend/ai_pedagogy.py`（CEFR / 干扰项 prompt 块）。\n\n### AI 抽取的 lesson 字段映射\n\n教材工坊从 raw text 抽取 Lesson 时，按 `template` 走不同的字段映射规则：\n\n| `template` | AI 抽取的输入特征 | canonical content 决定字段 |\n| --- | --- | --- |\n| `intro` | 含新词、释义、目标语例句 | `subLessons[0].stages[]`（识别层题型为主） |\n| `practice` | 已学词的产出练习 | `subLessons[0].stages[]`（回忆层 + 产出层） |\n| `listening` | 含音频引用、对话 / 独白转写 | `listeningPhases`（`wordPairing`/`dialogue`/`summary`） + 各 phase `items[]` |\n| `reading` | 含段落、问题、词汇链接 | `readingPassage.paragraphs[]` + `stages[].items[readingMcq/TrueFalse/ShortAnswer]` |\n| `review` | 跨节词汇回顾 | `subLessons[]` 或 `stages[]`；按节合并 |\n| `mastery` | 综合产出 | `stages[]`（高认知负荷题型） |\n\n映射规则强制：每种 `template` 的 canonical 字段必须存在，缺一即 lint warning。AI 在抽取阶段通过 `content_quality.py` 给出 6 维评分；< 0.7 的章节进入「按质量重抽」候选。\n\n更多 AI 能力全景、主路径与决策矩阵见 [AI 课程生成](/authoring/ai-course-generation)。\n\n## 与 GUI 编辑器的对应\n\n| GUI 操作 | 写入字段 |\n| --- | --- |\n| 树右键（Unit）→ 新建 Lesson | `NewLessonDialog` 选模板 → 写入 `template` + 缺省 `content` |\n| 树右键（Unit）→ 功能课向导… | 三步向导产出 listening/reading/mastery 完整 Lesson |\n| 树多选 Lesson → 批量套用预设… | 替换 `content` 为预设的题型组合 |\n| 树右键 → AI 编辑 / 修正此节点 | 走 `AiEditLessonCommand` 等；可撤销；不自动写盘 |\n| 模板切换 | 校验目标 `content` 形状；不兼容时阻断 |\n| 课时编辑器 → 元数据 | 写 `name` / `description` / `prerequisiteLessonIds` |\n| 课时编辑器 → 蓝图 | `listeningPhases[]` / `readingPassage.paragraphs[]` 拖拽排序 |\n| 课时编辑器 → 题型卡片 | 增删 `items[]`；改 `runtimeType` 重渲染表单 |\n| 教师模式试做 | 不写盘；纯运行时模拟 |\n\n## 相关文档\n\n- [课程目录约定](/authoring/course-layout)\n- [资源文件](/authoring/resource-files)\n- [交互题型](/guide/interaction-types)\n- [课型说明](/guide/lesson-types)\n- [校验与 Lint](/authoring/validation)\n- [教材导入](/authoring/textbook-import)\n',vs=`# 发布检查表

> 课程发布是**可重复流程**。完成编辑不等于可以发布。每一节都是硬性门禁；任何一节未通过即阻断。

![发布管线（八阶段）+ 回滚路径 + 灰度窗口](/images/authoring/release-flow.svg)

![发布对话框 — 专家模式（实际运行截图：id-set diff、版本号变更复选框、validate 状态）](/images/authoring/_real/07-publish-expert.png)

![发布对话框 — 教师友好模式（实际运行截图：人话描述、隐藏原始字段、按钮禁用）](/images/authoring/_real/08-publish-teacher.png)

## 0. 发布前置

- [ ] 当前分支与目标基线（\`main\` / 发布分支）无冲突。
- [ ] 工作区已清理临时文件（\`tool/gui/var/...\`、\`.mimosa/\` 不入版本）。
- [ ] 所有改动已 commit 并 push。
- [ ] 已通知团队当次发布的 scope（Section / Unit / Lesson / 资源 / 音频）。

## 1. 变更范围

- [ ] 只修改目标 Section 与必要资源文件。
- [ ] 未格式化或重排无关大文件。
- [ ] 未修改已发布 ID。
- [ ] 新增 ID 全局唯一。
- [ ] 删除资源前已处理全部引用（见 [资源文件](/authoring/resource-files)）。
- [ ] 未引入未注册的 \`runtimeType\`。
- [ ] 跨文件引用闭合（\`sections/*.json\` ↔ \`vocab.json\` ↔ \`expressions.json\` ↔ \`grammar_points.json\`）。

## 2. 内容结构

- [ ] Lesson \`type\` 与 \`template\` 匹配。
- [ ] 新 Lesson 使用 canonical content shape。
- [ ] 先修依赖存在且无环。**（工具不校验，必须人工过）**
- [ ] 每 Unit 与 Section 未超过规模上限（见 [课程目录约定](/authoring/course-layout)）。
- [ ] Interaction 使用已注册 \`runtimeType\`。**（工具不校验，未知类型只会在运行时降级为占位卡）**
- [ ] 选择题答案下标 \`correctIndex\` / \`correctIndices\` 落在 \`options\` 范围内。**（工具不校验范围）**
- [ ] \`index.json.version\` 相对上次已递增。**（工具不校验）**
- [ ] 音频 / 资源引用可解析（manifest 全绿）。
- [ ] 干扰项来自真实易混项或同范围词汇。

## 3. 自动检查

::: code-group

\`\`\`bash [Windows]
# 1. 结构校验（必通过，退出码 0）
python tool/course_cli.py --course-dir assets/courses/turkish validate

# 2. 内容 lint（error 必须 0；warning 视团队策略）
python tool/course_cli.py --course-dir assets/courses/turkish lint

# 3. 内容清单（核对规模变化）
python tool/export_content_inventory.py

# 4. 音频 manifest
python tool/course_cli.py --course-dir assets/courses/turkish audio-manifest --output manifest.csv

# 5. 客户端测试（reseed 行为）
flutter test --exclude-tags golden
\`\`\`

\`\`\`bash [Linux / macOS]
# 1. 结构校验（必通过，退出码 0）
python3 tool/course_cli.py --course-dir assets/courses/turkish validate

# 2. 内容 lint（error 必须 0；warning 视团队策略）
python3 tool/course_cli.py --course-dir assets/courses/turkish lint

# 3. 内容清单（核对规模变化）
python3 tool/export_content_inventory.py

# 4. 音频 manifest
python3 tool/course_cli.py --course-dir assets/courses/turkish audio-manifest --output /tmp/manifest.csv

# 5. 客户端测试（reseed 行为）
flutter test --exclude-tags golden
\`\`\`

:::

::: warning 门禁
任何**非零**退出码阻断发布（含参数用法错误的退出码 2）。\`validate --format json\` 的输出可进入 CI 产物（\`lint\` 仅文本输出，CI 用退出码 / \`--strict\` 做门禁）。
:::

### 编辑器（\`tool/gui\`）独立门禁

\`tool/gui\` 是仓库内的创作者工具，不进 App 本体，但有自己的一组门禁，发布前同样要跑：

\`\`\`bash
# 快速档
python tool/gui/run_gui_tests.py ci
# 分层与数值 ratchet 契约
make guard-gui
# 全量档（CI 跑的量级）
make test-gui
\`\`\`

编辑器侧的改动若没跑这三项，App 侧测试全绿也不能视为可发布。

## 4. 教师试做

逐项走查受影响 Lesson：

- [ ] 按学员顺序完成目标 Lesson。
- [ ] 检查首次输入、产出难度、提示顺序。
- [ ] 播放全部新音频（含重播、文本边界）。
- [ ] 故意提交错误答案，检查反馈与错题归类。
- [ ] 检查 Lesson 结束与下一课解锁。
- [ ] 在至少一种小屏设备上检查长文本与可点区域。
- [ ] 检查 [可访问性](/guide/accessibility)（屏幕阅读、对比度、动效降级）。
- [ ] 触发复习调度跳转，确认 FSRS 状态正确写入。

## 5. 版本

- [ ] 课程语义变化 → \`index.json.version\` +1。
- [ ] 表达文件语义变化 → \`expressions.json.version\` 单独 +1。
- [ ] \`version\` 严格递增；不复用、不回退。
- [ ] 客户端首次启动实际执行 reseed（不命中 SQLite 旧版本）。
- [ ] 表达文件版本与课程版本组合重导入键已生效。

## 6. 数据验证

- [ ] 现有用户进度未因 ID 改写而孤立。
- [ ] reseed 后课程树 Sections / Units / Lessons 数量与预期一致。
- [ ] 新资源可从 Lesson 解析（引用闭环）。
- [ ] 复习状态未被课程缓存清理误删。
- [ ] 内容清单规模变化与预期一致。
- [ ] 离线首包（核心 Section）在目标设备启动 ≤ 3 s。

## 7. 提交说明

发布 PR / Tag 必须包含以下条目：

\`\`\`text
## Scope
- 修改的 Section / Unit / Lesson（含 ID）
- 新增 / 删除 / 替换的资源数（vocab / expressions / grammar_points）
- 音频文件清单与授权

## Versions
- index.json.version: 6 → 7
- expressions.json.version: 1 → 2

## Validation
- validate: pass (error=0, warning=0)
- lint:     pass (error=0, warning=4)
- audio-manifest: pass (missing=0)
- flutter test: pass

## Teacher Walkthrough
- Section 1 / Unit 1 / Lesson 1: 通过
- Section 1 / Unit 2 / Lesson 3: 修复 X 题的 Y 干扰项
- 新音频 Z：人工录音 / 授权协议

## Rollback Plan
- 上一个可用 commit: <sha>
- 回滚步骤：恢复 JSON + 新递增 version
\`\`\`

## 8. 发布执行

GUI 工具栏「发布」按钮触发 \`PublishDialog\`（\`tool/gui/src/widgets/publish_dialog.py\` 中的 \`PublishDialog\`）。该对话框支持两种模式：

| 模式 | 入口 | 视窗尺寸 | 适用 |
| --- | --- | --- | --- |
| \`teacher_friendly=False\`（专家） | 主窗口工具栏「发布」 | 640×600 | 发布工程师；查看原始字段与 diff |
| \`teacher_friendly=True\`（教师） | 工具栏「教师模式 → 发布」 | 520×560 | 课程教师；只看人话描述 |

### 8.1 专家模式字段

| 区域 | 内容 | 数据源 |
| --- | --- | --- |
| 本次改动 | 文件级别 summary（行数 / ID 增删） | \`CourseAdapter.release_report()\` |
| 版本号变更（确认后执行，可取消） | 每个 Section 文件一个 \`QCheckBox\` 默认勾选；取消该文件即跳过 bump | \`apply_version_bump(file_paths)\` 支持部分应用 |
| id-set diff | 本次与 HEAD 的 ID 增删集合（新增 N / 删除 M / 修改 K） | git diff 解析 |
| 音频 manifest totals | 引用 N / 缺失 M / 生成任务 K | \`CourseAdapter.sound_manifest()\` |
| validate 状态 | 错误 / 警告计数；失败时**禁用**「确认发布」按钮 | \`CourseAdapter.validate()\` |
| 导出报告 | 调 \`QFileDialog\` 选路径，导出 Markdown 发布报告 | \`CourseAdapter.release_report()\` |

### 8.2 教师友好模式字段

| 区域 | 内容 |
| --- | --- |
| 改了什么 | 人话改写本次新增 / 修改 / 删除的 Section / Unit / Lesson |
| 缺什么 | validate error 经 \`humanize_problem\` 翻译 |
| 点发布 | 单一确认按钮；版本号自动应用；id-set diff 不显示 |
| 禁用条件 | validate error > 0 → 按钮置灰 |

\`teacher/error_mapper.py::humanize_problem(problem)\` 把 \`(schema_path, kind, code)\` 元组映射成中文短句（"第 3 节课时 2 缺少 audioAsset"、"vocab id 重复"）。映射表可本地化。

### 8.3 实际执行管线

无论哪种模式，发布按钮按以下顺序执行：

\`\`\`text
1. 校验（validate + lint）
2. audio-manifest 扫描
3. 自动 version bump（仅未被取消的文件）
4. 生成 diff 报告（与上一个 git tag 对比）
5. 导出 Markdown 发布报告
6. 写入 release-notes 模板
\`\`\`

**AI 拟人化能力**（按质量分修复 / AI 解释 / AI 写发布说明）为 opt-in，发布按钮不自动调用；见 [AI 能力 - AI 拟人化的边界](#ai-拟人化的边界)。

非 GUI 场景没有等价的 \`publish\` 子命令；需手工串联第 3 节的 \`validate\` / \`lint\` / \`audio-manifest\` + git 操作完成同等检查。

发布执行的所有步骤均通过 telemetry 记录：\`repo.publish.triggered\`、\`repo.publish.committed\`、\`repo.publish.failed\`（错误携带异常堆栈）。

## 9. 回滚

- 发布前保留上一个可用 JSON 快照（git tag / 分支）。
- 回滚内容时**仍需使用新的、递增的版本号**。直接恢复旧版本号并假设客户端会重新导入是错误的。
- 回滚流程：
  1. 恢复目标 Section / Unit / Lesson 的 JSON。
  2. \`validate\` + \`lint\` + \`audio-manifest\` 全绿。
  3. 递增 \`index.json.version\`（不回退）。
  4. 客户端强制 reseed。

紧急回滚目前只能直接回滚到上一个 tag。\`index.json\` 的 \`disabledSections\` 字段**尚未实现**，不要当作可用的应急手段。

## 10. 灰度与监控

- [ ] 新内容在至少一台 Android 真机 / 一台 iOS 真机上完成冒烟。
- [ ] 关键路径（首课 / 复习 / 听力）日志无异常。
- [ ] 客户端崩溃率（按版本）维持在基线 ±0.1%。
- [ ] 反馈通道（GitHub Issues / 反馈表）开启版本过滤。
- [ ] 24h 内未收到致命问题 → 视为稳定。

## AI 能力

发布是 AI 介入的最后一关。本节展开三个 opt-in 能力，**默认全部关闭**；作者在发布对话框显式勾选才生效。

### AI 辅助发布

\`PublishDialog\`（\`tool/gui/src/widgets/publish_dialog.py\`）专家模式新增 **「按质量分修复」** 按钮（位于「版本号变更」分组下方），另有按六维质量分定向批量修复的 \`QualityCampaignDialog\`：

![质量活动对话框（实际运行截图：按六维质量分选目标节批量修复）](/images/authoring/_real/14-quality-campaign.png)

点击「按质量分修复」后：

1. 调 \`backend/content_quality.py::overview_quality(adapter)\` 取所有 Section 的六维均值。
2. 按 \`mean\` 升序排序，取最低的 3 个 Section。
3. 依次调工坊局部重生成 API（\`workshop.regenerate_section(section_id)\`），传入 prompt 块：\`{"regen_mode": "by_quality", "target_dim": "<最低维>"}\`。
4. 修复完成后回到发布对话框；validate 再次跑。

不阻断：若任一 Section 修复失败，跳过并标黄，作者决定是否继续。

### AI 拟人化 diff 解释

专家模式 id-set diff 表格（新增 N / 删除 M / 修改 K）右侧新增 **「AI 解释」** 按钮。点击后调 LLM：

- 输入：本次 diff 集合（id → 路径 → type）+ git tag 间 commit messages。
- 输出：自然语言 1–2 段，描述「删了哪些 id、为什么删、影响哪些 Lesson、客户端 reseed 影响」。

输出渲染在发布对话框内新 tab 「AI 解释」。**不**改写磁盘 JSON；**不**影响最终发布动作。

### AI 拟人化校验报告

发布对话框「导出报告」按钮新增 **「AI 写一段发布说明」** 复选框（默认勾选；可取消）。勾选后：

- 输入：变更范围、\`index.json.version\` 与 \`expressions.json.version\` 变更、validate / lint 计数、audio-manifest 缺失数、id-set diff、AI 拟人化解释（如有）。
- 输出：1 段中文短文（≤ 200 字），结构为「本版本 / 范围 / 风险 / 客户端影响 / 回滚路径」。

输出追加到 Markdown 报告的 \`## AI Release Notes\` 段。

### AI 拟人化的边界

发布按钮上的 AI 拟人化能力是 **opt-in**，默认关闭：

| 能力 | 默认 | 关闭后的影响 |
| --- | --- | --- |
| 按质量分修复 | 关 | 发布对话框不显示该按钮 |
| AI 解释 | 关 | id-set diff 旁不显示「AI 解释」按钮 |
| AI 写一段发布说明 | 关 | 报告不含 \`## AI Release Notes\` 段 |

**绝不**自动触发：所有 AI 拟人化能力均需作者点击按钮或勾选复选框后调用；发布动作本身的「确认发布」按钮**不**走 AI。

更多拟人化与「按质量分修复」工作流见 [AI 课程生成 - 失败模式与降级路径](/authoring/ai-course-generation#7-失败模式与降级路径)。

## 与 GUI 工具栏的对应

| GUI 操作 | 触发的发布阶段 |
| --- | --- |
| 保存 (Ctrl+S) | 1（校验） |
| 总览 → 校验数 | 1（只读面板） |
| 发布（专家） | 2 + 3 + 4 + 5；显示 id-set diff 与 bump 复选框 |
| 发布（教师模式） | 2 + 3 + 4 + 5；走 \`humanize_problem\` 翻译 |
| 设置 → 「保存即发布」 | 2 之后自动 3 |
| 资源库 → 资源包导出 | 6（独立流程） |
| Git 资源库 → 推送 | 7（远程协作） |

## 相关文档

- [校验与 Lint](/authoring/validation)
- [课程目录约定](/authoring/course-layout)
- [Lesson JSON 结构](/authoring/lesson-schema)
- [资源文件](/authoring/resource-files)
- [音频资产](/authoring/audio-assets)
- [教师指南](/authoring/teacher-guide)
- [测试与质量门禁](/developer/testing)
`,fs='# 资源文件（vocab / expressions / grammar_points）\n\n三个资源文件在 `assets/courses/<lang>/` 根下。课时里的题目不复制词义 —— ShowWord / 听力配对等只写 `wordId` / `expressionId`，运行时去资源池解析。改一处词义，全课程生效。\n\n## 顶层结构\n\n```jsonc\n// vocab.json\n{\n  "version": 1,               // 当前快照值；变更后递增\n  "language": "tr",           // ← 是语言代码，不是目录名\n  "words": [ ... ]            // ← 数组键是 words，不是 items\n}\n\n// expressions.json\n{\n  "version": 4,               // 当前快照值；变更后递增\n  "language": "tr",\n  "expressions": [ ... ]      // ← expressions\n}\n\n// grammar_points.json\n{\n  "grammarPoints": [ ... ]    // ← grammarPoints；本文件没有 version 字段\n}\n```\n\n> 上面的 `version` 是写这份文档时的快照值，**别照抄**——请以 `assets/courses/turkish/` 下的实际文件为准。重播种键只由 `index.version + expressions.version` 组合决定，`vocab.json` 的 `version` 不参与。\n\n重播种键是 `index.version + expressions.version` 的组合；改 grammar_points.json 后也要 bump `index.json.version` 才会触发重播种。\n\n## vocab.json — `words[]`\n\n| 字段 | 类型 | 必填 | 说明 |\n| --- | --- | --- | --- |\n| `id` | string | ✓ | 全局唯一，建议 `w-<slug>`；发布后被进度/错题/调度引用 |\n| `term` | string | ✓ | 目标语词形（土耳其语） |\n| `translation` | string | ✓ | 母语释义 |\n| `pronunciation` | string | — | 读音提示 / 音标 |\n| `audioAsset` | string | — | 预录音频资源名；缺省时走运行时 TTS |\n| `tags` | string[] | — | 分组标签（如 `greeting`、`food`） |\n\n```json\n{ "id": "w-merhaba", "term": "merhaba", "translation": "你好",\n  "pronunciation": "mehr-HAH-bah", "tags": ["greeting"] }\n```\n\n## expressions.json — `expressions[]`\n\n字段与 words 相同：`id` / `term` / `translation` / `pronunciation?` / `audioAsset?` / `tags[]`。\n\nExpression 与 Word 的区别只在粒度：多词固定搭配、短句入 expressions，独立进 SRS。ShowWord 的 `expressionId` 解析到这里。\n\n```json\n{ "id": "e-gunaydin", "term": "günaydın", "translation": "早上好",\n  "tags": ["greeting"] }\n```\n\n## grammar_points.json — `grammarPoints[]`\n\n| 字段 | 类型 | 必填 | 说明 |\n| --- | --- | --- | --- |\n| `id` | string | ✓ | 全局唯一，建议 `g-<slug>` |\n| `title` | string | ✓ | 短标题，如「现在时 -ar 变位」 |\n| `explanation` | string | — | 完整讲解，课时和语法复习页展示 |\n| `exampleExpressionIds` | string[] | — | 例句 → expressions.json 的 id |\n| `exampleSentenceIds` | string[] | — | 例句 id（当前复用 expression id） |\n| `practiceItems` | Interaction[] | — | 语法复习页讲解卡之后的短练习，元素是完整 Interaction（见 [课时 schema](./lesson-schema)） |\n\n```json\n{\n  "id": "g-present-tense",\n  "title": "现在时人称变位",\n  "explanation": "土耳其语现在时在词干后加…",\n  "exampleExpressionIds": ["e-geliyorum"],\n  "practiceItems": [\n    { "runtimeType": "fillBlank", "sentence": "Ben gel___yorum", "answer": "iyo" }\n  ]\n}\n```\n\n## 卡片是练习还是资源\n\n![资源 → Lesson 单向引用图](/images/authoring/resource-graph.svg)\n\n区分方法：\n\n- **资源**：`words[]` / `expressions[]` / `grammarPoints[]` 里的条目 —— 进词表、语法复习、SRS。\n- **练习**：课时的 `content.stages[].items[]` 等里的 Interaction —— 属于那节课，答案/选项写在课时文件里。\n- **引用**：课时 Interaction 只写 `wordId` / `expressionId`；词义显示从资源池解析。语法点的 `practiceItems` 是个例外 —— 练习本体写在资源文件里（它属于「语法复习」这个跨课场景）。\n\n## 硬边界\n\n- 引用计数唯一：每词的「出现次数」= 引用它的课程 Interaction 数，一次性聚合（`course_db_enrichment.dart`），不随学习过程更新。\n- 资源文件不要写逐字稿：transcript 属听力 phase（`transcript`），例句走 `exampleExpressionIds`。\n::: warning id 发布后不可改\n资源 id 被 SRS 进度、错题本、Official Collection 键引用；改名等于另建条目并孤立旧进度。\n:::\n\n![资源库编辑器（实际运行截图：vocab / expressions / grammar_points 三标签 + 行内编辑）](/images/authoring/_real/04-resource-editor.png)\n\n相关：[课程仓库布局](./course-layout) · [课时 schema](./lesson-schema) · [教师视图操作](./teacher-guide)（编辑器 资源库 tab 批量编辑）\n',_s=`# 教师指南

> 面向不写代码的教师。目标：在本机完成一节 intro 课的产出、保存、教师试做与提交。不需要 Python / 命令行背景。

完整逐步说明（含验收标准）在应用仓库 \`docs/authoring/teacher-guide.md\`。本文档聚焦 GUI 工具栏与课程树的对应关系。

![Turna GUI 主界面（实际运行截图，加载 \`assets/courses/turkish\`）](/images/authoring/_real/01-main-window.png)

![教师产出一节 intro 课的六步流程与回退路径](/images/authoring/teacher-workflow.svg)

![教师模式试做：真实 Welcome 课的 multipleChoice 题型渲染](/images/authoring/_real/06-teacher-mode.png)

![课程树右键菜单（实际运行截图：新增 / 删除 / AI 编辑 / AI 修正 / 预设）](/images/authoring/_real/16-context-menu.png)

## 0. 准备

1. 从技术对接人处获得 \`turna-gui\`（或对应平台的可执行文件），双击运行。无需安装 Python。
2. 取得课程目录副本（推荐本地副本，不要直接改团队共享目录）。例如 \`我的课程/turkish/\`。
3. 启动后通过工具栏 **「课程仓库 → 打开课程目录」** 选定该目录。
4. 状态栏显示 \`已加载：<路径>\` 即就绪。

::: tip 团队协作
使用 **「资源库 → Git 资源库」** 接入远程仓库；不直接在共享目录写盘，避免覆盖别人未提交的修改。
:::

## 1. GUI 总览

\`\`\`text
+----------------------------------------------------------------------------+
| [课程仓库] [保存] [课程工坊] [总览] [资源库] [发布] [生成听力音频]        |
| [教师模式] [设置]                                                          |
+----------------------------+-----------------------------------------------+
| 课程树 (Section/Unit/      | 详情面板（选中节点后）                       |
|  Lesson)                   |  - 元数据表单                                |
|                            |  - 课时编辑器 / 蓝图 / 题型表单              |
+----------------------------+-----------------------------------------------+
| 状态栏：就绪 | AI 校验防护激活中 | AI 生成内容仅供参考…  |  当前路径：…  |
+----------------------------------------------------------------------------+
\`\`\`

工具栏顺序、按钮文字、状态栏常驻提示均随上下文变化（见下节「教师模式 UI 变化」）。

## 2. 产出一节 intro 课

### 2.1 新建

1. 在目标 Unit 上右键 → **新建 Lesson**。
2. 弹出模板选择，选 **intro（认识新词）**（如需 listening/reading/mastery 可走「功能课向导」三步产出）。
3. 程序自动生成 id（\`l-<8 位随机 hex>\`），教师只填：
   - \`name\`：用户可见名称
   - \`description\`：本课的可验证目标（一句话即可）
   - \`prerequisiteLessonIds\`：同 Unit 内必须先完成的课
4. 点击「创建」。模板写入缺省的 canonical \`content\`：
   - \`subLessons[0].stages[0]\`：展示新词（\`showWord\`）
   - \`subLessons[0].stages[1]\`：选择释义（\`multipleChoice\`）
   - \`subLessons[0].stages[2]\`：填空巩固（\`fillBlank\`）

> 若使用 **「课程仓库 → 新建课程目录…」** 一次性写出含样例内容的完整课程骨架，请参考 [课程目录约定 - 新建议程目录](/authoring/course-layout#新建议程目录)。

### 2.2 填词

- 词汇**必须**来自 \`vocab.json\`。**禁止**在 Lesson 内复制另一份词表。
- 题型表单的「词项」下拉关联到 \`vocab.json.words[]\`，按 ID 绑定。
- 干扰项从同范围同词性的真实易混项中选取，**不要**填入随机无关词。
- 释义以学习者母语写就；非空、不含占位文本。

### 2.3 保存

1. 点击工具栏 **「保存」**（或 \`Ctrl+S\`）。
2. 触发 \`validate\` + \`lint\`：
   - 通过：磁盘写盘，状态栏显示 \`已保存\`。
   - 失败：状态栏显示 \`校验失败，已回滚\`；问题节点在课程树显示红角标；详情面板列出具体错误与 JSON Pointer 定位。
3. 修复后重新保存，**不**手动编辑 JSON。

> 仓库加载失败时弹「加载失败」对话框，下方 **AI 分析** 按钮调 LLM 给出可能根因与建议（详见 [校验与 Lint - AI 加载错误分析器](/authoring/validation#ai-加载错误分析器)）。该分析不替代结构性修复。

### 2.4 教师试做

1. 点击工具栏 **「教师模式」**。
2. 在桌面端模拟学员完整操作一遍：
   - 选词 / 填空 / 听音按钮
   - 故意答错，验证反馈与错题归类
   - 触发「下一课」与「复习」入口
3. 至少一次完整通过该 Lesson。**不通过即视为未完成**。

详细试做对话框见下文「LessonPreviewDialog 流程」。

### 2.5 资源库联检

打开工具栏 **「资源库」**，在该 Lesson 引用的每个词汇/表达/语法点上做一次跳转，确认：

- 引用 ID 存在。
- \`translation\` 与释义一致。
- 无悬挂引用。

## 3. 课程树常用操作

| 操作 | 触发 | 备注 |
| --- | --- | --- |
| 新建 | 右键 → 新建 | 弹出模板选择；可走 FunctionalLessonWizard |
| 复制 | \`Ctrl+D\` | 复制当前节点及其下级 |
| 重命名 | \`F2\` | 仅改 \`name\`，ID 不变 |
| 上移 / 下移 | \`Ctrl+↑\` / \`Ctrl+↓\` | 仅排序，不影响依赖 |
| 删除 | \`Delete\` | 二次确认；引用数 > 0 时阻断 |
| 套用预设 | 多选 Lesson → 右键 → 批量套用预设… | 替换为预设的题型组合（单课无此入口） |
| AI 编辑此节点 | 右键 → AI 编辑此 Section/Unit/Lesson | 弹窗针对当前节点改写 |
| AI 修正此节点 | 右键 → AI 修正 | 把当前节点的 validate 错误回灌给 LLM |
| 批量操作 | \`Ctrl\` / \`Shift\` 多选后右键 | 复制 / 移动 / 套用预设 / 删除 |
| 撤销 / 重做 | \`Ctrl+Z\` / \`Ctrl+Y\` | 由 \`QUndoStack\` 驱动；上限在「设置 → 编辑器」配置 |
| 定位节点 | 总览点击 Lesson | 总览与课程树双向跳转 |

## 3.1 课程树右键菜单完整动作

\`tool/gui/src/widgets/course_tree.py::_build_context_menu\` 提供按节点类型分组的菜单：

| 节点 | 动作 |
| --- | --- |
| Section | 新建 Unit / 删除 Section / AI 编辑此 Section / AI 修正此 Section |
| Unit | 新建 Lesson / **功能课向导…** / 删除 Unit / AI 编辑此 Unit / AI 修正此 Unit |
| Lesson | 复制 Lesson（\`Ctrl+D\`）/ 删除 Lesson / AI 编辑此 Lesson / AI 修正此 Lesson |
| 选中多 Lesson | 批量复制（N）/ 批量移动到…/ 批量套用预设…/ 批量删除（N） |

### 3.2 AI 动作完整清单

课程树右键可触发的 8 个 AI 入口：

| 入口 | 触发位置 | 行为 |
| --- | --- | --- |
| AI 编辑此 Section | Section 右键 | 自由指令 + 4 类预设；走 \`MergeAiSectionCommand\` |
| AI 编辑此 Unit | Unit 右键 | 自由指令 + 4 类预设；走 \`AiEditUnitCommand\` |
| AI 编辑此 Lesson | Lesson 右键 | 自由指令 + 4 类预设；走 \`AiEditLessonCommand\` |
| AI 修正此 Section | Section 右键 | 自动注入 Section 内 validate errors |
| AI 修正此 Unit | Unit 右键 | 同上，Unit 范围 |
| AI 修正此 Lesson | Lesson 右键 | 同上，Lesson 范围 |
| 局部重生成 | Unit / Lesson 右键（工坊内） | 上下文收集 + 冲突解决；走 \`MergeAiSectionCommand\` |
| 试做 AI 改题 | 教师模式 → 题目 AI 按钮 | 单 Interaction 重生成；走 \`AiEditLessonCommand\` |

校验面板与发布对话框另有 3 个 AI 入口（见 [校验与 Lint - AI 能力](/authoring/validation#ai-能力) 与 [发布检查表 - AI 能力](/authoring/release-checklist#ai-能力)）。

所有删除动作在引用数 > 0 时弹二次确认；引用计数来自 \`CourseAdapter\` 全课程扫描。AI 节点编辑的具体语义见 [Lesson JSON 结构 - AI 节点编辑对话框](/authoring/lesson-schema#ai-节点编辑对话框)。

## 4. 课程工坊（可选）

当产出方式以教材抽取或空白 AI 生成为主时：

1. 工具栏 **「课程工坊」** 打开非模态窗口。
2. **课本项目库**（首次启动时显示）列出现有项目，可 **从教材新建** 或 **空白 AI 项目**。详见 [教材导入 - 课本项目库](/authoring/textbook-import#课本项目库textbooklibrarydialog)。
3. 三栏画布：
   - 左栏：拖入教材或勾选入池的知识点
   - 中栏：主题 / CEFR / 模板 / \`Ctrl+Enter\` 生成
   - 右栏：结构大纲、试做、diff、AI 修复、导入
4. 草稿生成后**必须**逐课试做并人工校对。
5. 导入成功后回到主窗口 **保存**。详见 [教材导入](/authoring/textbook-import)。

## 5. 资源库使用

打开工具栏 **「资源库」** 进入三标签页：

- **vocab**：词汇
- **expressions**：固定表达
- **grammar_points**：语法点

操作：

- 顶部搜索栏跨表过滤（大小写不敏感）。
- 双击行内任意列原地编辑。
- 多选行后批量删除。
- 导出 CSV → 翻译/校对外部编辑 → 导入 CSV（覆盖 / 合并 / 报错中断）。
- 「资源包」导出 / 导入整个 \`vocab.json + expressions.json + grammar_points.json\`。
- 删除前系统自动扫描引用；引用数 > 0 阻断。

## 6. 提交给发布

1. 工具栏 **「发布」** 触发 \`PublishDialog\`。详见 [发布检查表 - 8. 发布执行](/authoring/release-checklist#8-发布执行)。
2. 专家模式显示 id-set diff、版本号变更复选框、音频 manifest totals；教师模式走 \`humanize_problem\` 翻译。
3. 全绿后导出 Markdown 发布报告。
4. 把报告与变更 commit 一起提交。

## 7. 常见约束

| 约束 | 原因 | 处置 |
| --- | --- | --- |
| 每 Section ≤ 60 Unit | 移动端首屏渲染 | 拆分 Section |
| 每 Unit ≤ 40 Lesson | 复习调度计算量 | 拆分 Unit |
| 先修只在同 Unit 内 | 跨层依赖在更高层声明 | 调整所属 Unit |
| 听力课必须有音频 | manifest 校验 | 先做 intro / practice，再补听力 |
| 词汇必须来自 vocab.json | 引用闭环 | 在资源库补建 |

## 8. 故障与求助

| 现象 | 处置 |
| --- | --- |
| 保存按钮灰 | 存在 validate error；打开校验面板修复 |
| 课程树节点红角标 | 点击红角标查看具体错误 |
| 资源引用红色警示 | 资源已被删除或拼写错误；用资源库补建或替换 |
| 音频播放异常 | 见 [音频资产](/authoring/audio-assets) QA 清单 |
| 工坊抽取失败 | 走 OCR 流程或换预设重试 |

## 9. 不做的事

- 不直接编辑磁盘 JSON 绕过校验。
- 不在 Lesson 内复制整份词表。
- 不修改已发布 ID。
- 不在 Lesson 内使用扁平 \`questions\`（新内容）。
- 不在共享目录直接写盘。
- 不删除有引用的资源。
- 不在保存失败时强行覆盖。

## A. 教师模式 UI 变化

工具栏 **「教师模式」** 是一个 \`QCheckAction\`（\`app.py::_on_mode_toggled\`）。切换后以下元素变化：

::: details 逐项对照
| 元素 | 关闭 | 开启 |
| --- | --- | --- |
| 工具栏按钮文字 | 教师模式 | 教师模式：开 |
| 窗口标题 | Turna 课程编辑器 | Turna 课程编辑器 · 教师模式 |
| 详情面板渲染 | \`DetailPanel\` 直接渲染 | 走 \`teacher_view_model\` 隐藏高级字段 |
| \`runtimeType\` 标签 | 英文枚举（\`multipleChoice\`） | 中文标签（选择题） |
| AI 按钮 | 全部显示 | 默认隐藏；按权限分级显示 |
| 状态栏常驻提示 | \`AI 校验防护激活中\` | 替换为 \`教师模式：试做中\` |

\`teacher_view_model.TeacherViewModel\`（\`tool/gui/src/backend/teacher_view_model.py\`）按节点类型给出视图投影：教师模式下，题目的答案字段（\`correctIndex\` / \`correctIndices\` / \`answer\` 等）不被渲染到 UI；学员提交答案后才显示对错。
:::

## B. LessonPreviewDialog 流程

\`tool/gui/src/teacher/preview_window.py\` 中的 \`LessonPreviewDialog\` 提供 Lesson 级试做视图。入口：

- 教师模式 → 课程树右键 → **试做此 Lesson**。
- 教师模式 → 详情面板右上角 **试做** 按钮。
- 教师模式 → 总览点击 Lesson 卡片 → 弹窗预览。

::: details 预览区域与题型支持
| 区域 | 内容 |
| --- | --- |
| 顶部 | Lesson 名称 / \`template\` 中文标签 / 总进度 \`3/12\` |
| 中部 | 当前 Interaction 渲染（按 \`runtimeType\` 调对应 widget） |
| 底部 | 上一题 / 下一题 / 重新开始 / 显示答案（仅教师模式） |
| 右上角 | 退出试做 → 关闭对话框返回主窗口 |

支持 \`runtimeType\` 渲染：\`showWord\` / \`multipleChoice\` / \`multiSelect\` / \`fillBlank\` / \`translateSentence\` / \`reorderSentence\` / \`typeTheWord\` / \`listenAndPick\` / \`listenOnly\` / \`readingMcq\` / \`readingTrueFalse\` / \`readingShortAnswer\` / \`ankiCard\` / \`ankiHtmlCard\`（共 14 种；Anki 两种在桌面是降级预览 —— \`ankiCard\` 显示为普通翻卡，\`ankiHtmlCard\` 显示剥标签文本 + 「App 渲染为准」标记）。试做结束不写盘；纯运行时模拟。
:::

## C. 状态栏与全局通知

\`QStatusBar\` 固定 28px 高，分三段：

::: details 三段对照
| 段 | 内容 | 来源 |
| --- | --- | --- |
| 左 | 当前操作状态（如「已加载: assets/courses/turkish」、「校验失败，已回滚」） | 业务调用 \`statusBar().showMessage(msg, timeout)\` |
| 中 | AI 校验防护 / 撤销 / 复制粘贴 等临时提示 | \`_on_status\` 回调 |
| 右 | 永久挂载的免责声明「AI 生成内容仅供参考，请作者自行审核其准确性与适用性。」 | \`app.py::_build_status_bar\` |
:::

\`telemetry\` 事件贯穿所有写盘动作；\`操作日志\` 标签页（设置第 8 个 tab）可回看最近 200 条操作。

## AI 协作模式

教师在 GUI 中可以 8 处主动调用 AI，也可以选择不调用。本节给出**何时用 / 何时不用 / 何时绝对不下放**的边界。

### 何时用 AI

| 场景 | 入口 | 体感 |
| --- | --- | --- |
| 教材抽取后批量生成草稿 | 工坊 → 从教材新建 → 抽章 → Grounded 生成 | 减少手工拼装 Lesson 的时间 |
| 空白项目冷启动 | 工坊 → 空白 AI 项目 → 主题/等级 → 快速/精修 | 无需从零手写 canonical content |
| 课程树右键局部润色 | 树右键 → AI 编辑此 Lesson/Unit | 4 类预设指令或自由指令 |
| 试做时改题 | 教师模式 → 题目 → AI 按钮 | 局部重生成 + diff 预览 |
| 校验清零 | 校验面板多选 → AI 自动修正 | 不必逐条点修 |
| 加载失败诊断 | 加载失败弹窗 → AI 分析 | 拟人化解释堆栈 |
| 工坊任务失败 | 失败弹窗 → 拟人化分析 | 给可能根因 + 修复建议 |
| 总览看低分节 | 总览 → Section 卡片 → AI 修复 | 按六维质量分定向 |

### 何时不用 AI

| 场景 | 原因 |
| --- | --- |
| 发布前的最终人工审定 | 校验与 lint 是结构性，AI 不替代作者审校 |
| 听力音频的人工录音决定 | 录音由作者或母语者完成；TTS 不可替代 |
| 关键先修依赖的拓扑设计 | 跨 Lesson 解锁与 FSRS 调度由作者设计；AI 改写拓扑易破坏复习曲线 |
| 资源 ID 的最终命名 | ID 是引用锚点；AI 命名易冲突 |
| 真实图片 / 视频的选用 | AI 不可访问真实媒体库；选用决策由作者完成 |

### 教师不下放 AI 的边界

硬规则，违反任一条的 AI 输出必须由作者裁决，不得静默应用：

1. 不让 AI 改既有节点的 \`id\`（包括 \`l-\` / \`u-\` / \`s-\` / \`w-\` / \`e-\` / \`g-\` 前缀的）。
2. 不让 AI 删既有 \`vocab\` / \`expression\` / \`grammar_point\`。
3. 不让 AI 自动覆盖既有 Section（必须人工选合并 / 跳过 / 覆盖 / 作为新 Section）。
4. 不让 AI 在共享目录自动写盘（仅在 \`course_dir\` 内允许）。
5. 不让 AI 在没有作者 review 的情况下进入发布。
6. 不让 AI 跳过 \`validate\` 与 \`lint\`。
7. 不让 AI 替换为未注册的 \`runtimeType\`。
8. 不让 AI 跨越语言对边界（如 \`tr\` 课程引用 \`en\` 课程的 \`vocab\`）。

GUI 在上述边界处会拒绝 AI 写入并提示冲突；详见 [AI 课程生成 - 创作者不下放的边界](/authoring/ai-course-generation#8-创作者不下放的边界)。

### 3.3 模式与不下放的对应

AI 的「下不下放」由 4 档体验模式控制。\`observer\` 模式下任何 AI 写动作均被拒绝；\`copilot\` 默认安全；\`active\` 启用 ambient / soft / defer 套装；\`immersive\` 允许白名单静默执行（出站操作仍拒绝），\`Ctrl+Shift+D\` 随时降档回 \`copilot\`。完整决策矩阵见 [AI 控制模式 - 决策矩阵](/authoring/ai-control-modes#7-决策矩阵模式--能力)。

## 下一步

- [课程目录约定](/authoring/course-layout)
- [Lesson JSON 结构](/authoring/lesson-schema)
- [资源文件](/authoring/resource-files)
- [校验与 Lint](/authoring/validation)
- [教材导入](/authoring/textbook-import)
- [发布检查表](/authoring/release-checklist)
- [课型说明](/guide/lesson-types)
`,bs=`# 教材导入\r
\r
> 教材导入是半自动课程生产流程。模型负责抽取与生成草稿；**作者负责审校、冲突处理、验证与发布**。GUI 工坊是这一流程的唯一入口。\r
\r
![课程工坊三栏画布（实际运行截图）](/images/authoring/_real/05-workshop.png)\r
\r
![课本项目库：五列项目清单（实际运行截图）](/images/authoring/_real/13-textbook-library.png)\r
\r
![教材导入流水线：状态灯 / 审校 / 气泡 / 轨道 / 导入策略](/images/authoring/textbook-pipeline.svg)\r
\r
## 支持输入\r
\r
| 类型 | 支持范围 | 备注 |\r
| --- | --- | --- |\r
| Markdown / 纯文本 | UTF-8 | 按标题切章 |\r
| PDF | 文本原生 PDF | 扫描件需在外部 OCR 后再导入 |\r
| Word | \`.doc\` / \`.docx\` | 依赖 \`python-docx\` |\r
| 图片 | 作为 vision 附件 | 取决于所配置模型的视觉能力 |\r
\r
源文件**不**复制进项目目录。项目文件仅保存路径引用与抽取结果，便于作者保留单一真理源。\r
\r
## OCR 与扫描件\r
\r
OCR 是**可选外部依赖**。GUI 不内置。处理流程：\r
\r
1. 安装 [Tesseract](https://github.com/tesseract-ocr/tesseract) 与目标语言包。\r
2. 扫描件 PDF：\r
   \`\`\`bash\r
   ocrmypdf input.pdf output.pdf\r
   \`\`\`\r
3. 图片：使用 \`pytesseract\` 或在外部工具中转写。\r
4. 将识别后的文本版 PDF / Markdown 重新导入工坊。\r
\r
未做 OCR 的扫描件 PDF 会触发「未提取到文本」状态灯。\r
\r
## 工作区与双轨项目\r
\r
GUI 工坊（\`tool/gui\` 的非模态窗口）由「项目库」与「创意画布」组成。所有中间产物落在 \`tool/gui/var/textbooks/{project_id}/project.json\`，允许中断后恢复。\r
\r
| 项目模式 | 建立方式 | 适用 |\r
| --- | --- | --- |\r
| **教材项目** | 项目库 → 从教材新建 → 选文件 + 语言对 | 自上而下抽取；Grounded 编排 |\r
| **空白 AI 项目** | 项目库 → 空白 AI 项目 → 填名称 + 语言对 | 无教材自由生成；左栏教材/知识标记为「(可选)」 |\r
\r
### 课本项目库（TextbookLibraryDialog）\r
\r
\`tool/gui/src/dialogs/textbook_library_dialog.py\` 中的 \`TextbookLibraryDialog\` 实现课本项目库。GUI 工坊启动时若 \`workshop/last_project_id\` 指向有效项目则直接恢复画布；否则显示项目库。\r
\r
五列清单：\r
\r
| 列 | 数据源 | 含义 |\r
| --- | --- | --- |\r
| 项目名称 | \`project.json.name\` | 用户可编辑；显示与目录分离 |\r
| 源文件 | \`project.json.source_path\` | 教材项目显示源文件绝对路径；空白 AI 项目为「(无)」 |\r
| 当前步骤 | \`project.json.current_step\` | 六阶段：选择教材 / 解析课本 / 章节勾选 / 提取知识点 / 审校 / 导入 |\r
| 更新时间 | \`project.json.updated_at\` | ISO 8601；按降序排 |\r
| 已导入 | \`project.json.imported\` | 布尔；导入后置位以避免重复 import |\r
\r
新建两条入口：\r
\r
- **从教材新建…**：选择 \`.md / .txt / .pdf / .docx / .doc / 图片\`，并填写语言对（源语 → 目标语）。\r
- **空白 AI 项目**：仅填写项目名称与语言对；源文件留空，画布默认落在「设计」相关 tab。\r
\r
双击项目行直接进入画布；选中后点 **「继续」** 等价。\r
\r
### 自动保存与续作契约\r
\r
\`project.json\` 持续记录以下状态，关闭重开不丢：\r
\r
| 字段 | 写入时机 | 用途 |\r
| --- | --- | --- |\r
| \`bubbles.selected\` | 气泡池勾选变化 | 重开时还原勾选状态 |\r
| \`bubbles.items[]\` | 审校表逐条编辑 | 词汇 / 表达 / 语法点的 id、状态、修订字段 |\r
| \`chat.history[]\` | 对话窗口每条消息 | 上下文与可复现性 |\r
| \`draft.outline\` | AI 生成大纲 | 草稿中断后从大纲续跑 |\r
| \`draft.sections[]\` | AI 生成草稿 | 精修模式中间态 |\r
| \`layout.tab\` / \`layout.splitter\` | 切 tab / 拖动分隔条 | 工坊窗口布局记忆 |\r
| \`last_project_id\` | 关闭工坊 | 下次启动时直接恢复 |\r
\r
\`workshop/last_project_id\` 写入 \`QSettings\`，跨会话保留。**关窗可中断任务**；重开恢复项目并按上次的 \`current_step\` 进入画布。\r
\r
### 画布三栏\r
\r
\`\`\`text\r
┌─ 左栏 ──────────────┐  ┌─ 中栏 AI 轨道 ──────┐  ┌─ 右栏 ───────────────────────┐\r
│ 教材与章节           │  │ 主题 / CEFR / 模板   │  │ 结构大纲（默认）· 对话 · 导入 │\r
│ 知识点审校           │  │ 聚焦条 / Ctrl+Enter  │  │ 试做 · diff · AI 修复         │\r
│ 气泡池（≤ 200）      │  │ [ AI 核心 开始设计 ] │  │                              │\r
└──────────────────────┘  └──────────────────────┘  └──────────────────────────────┘\r
\`\`\`\r
\r
顶栏 checklist：\`○/✓ 素材 · 知识 · 草稿 · 导入\`（可点击跳转）。\r
\r
## 流程\r
\r
\`\`\`text\r
1. 选文件\r
2. 提取文本\r
3. 按章节切分\r
4. 选预设 + 并发数\r
5. 抽取词汇 / 表达 / 语法点 / 对话\r
6. 处理红（error）/ 黄（warning）标记\r
7. 勾选入池\r
8. 生成 Section / Lesson 草稿\r
9. 查结构 + 覆盖率 + JSON diff\r
10. 选冲突策略\r
11. 导入内存课程项目\r
12. 在主窗口保存 → 运行 validate + lint\r
\`\`\`\r
\r
抽取过程支持中断与续作；勾选、知识点、聊天、草稿、tab/splitter 布局均自动保存。\r
\r
## 章节抽取\r
\r
### 滑窗\r
\r
超出预设字数的章按段落边界切成带重叠的滑窗，逐窗抽取后按键（词 + 翻译 / 语法标题）去重合并。\`id\` 仍按 \`ch-{slug}-\` 确定性生成。预设参数：\r
\r
| 参数 | 默认 | 含义 |\r
| --- | --- | --- |\r
| \`window_chars\` | 8000 | 单次抽取字符上限；\`0\` 关闭（\`reading\` 预设覆盖为 10000） |\r
| \`overlap_chars\` | 500 | 滑窗重叠字符数 |\r
\r
### 状态灯\r
\r
| 灯 | 含义 | 可执行动作 |\r
| --- | --- | --- |\r
| 绿 | 抽取通过 | 入池 / 重新抽取 |\r
| 黄 | 有 warning（空翻译、覆盖率偏低、语言混入） | 修复 / 重抽 |\r
| 红 | 抽取失败 | 重试 / 仅抽词汇 / 跳过 |\r
| 灰 | 未抽取 | 触发抽取 |\r
\r
### 失败级联\r
\r
\`standard\` 抽取失败时自动降级为「仅词汇（vocab_only）」重试一次（日志写明「自动降级」）。再失败才标红。开关：\`QSettings/textbook/auto_cascade\`，默认开。\r
\r
### 按质量重抽\r
\r
对红 / 黄章提供「按质量重抽」，把具体问题（空翻译、覆盖率偏低、语言混入等）回灌给 AI，输出完整修正版替换本章并重算质量分。\r
\r
## 预设\r
\r
| 预设 | 目标 | 默认倾向 |\r
| --- | --- | --- |\r
| \`general\` | 通用教材 | 均衡抽取 |\r
| \`grammar\` | 语法书 | 低温度、强调规则 |\r
| \`dialogue\` | 对话书 | 强调表达与口语 |\r
| \`reading\` | 阅读材料 | 词汇抽取为主 |\r
\r
预设仅影响抽取参数与 prompt 块，**不免除审校**。\r
\r
## 气泡池与 Grounded 生成\r
\r
入池上限约 200。点击「将选中词加入轨道」或拖入中栏后进入气泡池。生成时 AI 优先从池中选词；池外新词带 \`new\` 标签，便于审校时定位。\r
\r
## AI 轨道\r
\r
| 控件 | 含义 |\r
| --- | --- |\r
| 主题 | Section 教学主题 |\r
| CEFR | 目标等级 |\r
| 单元数 | Section 内 Unit 数（≤ 60） |\r
| 课时/单元 | 每 Unit 的 Lesson 数（≤ 40） |\r
| 模板 | 课时 \`template\` 选型 |\r
| AI 悄悄话 | 编排意图（自然语言） |\r
\r
聚焦条显示「将使用资源池：N 词 · M 表达 · K 语法」。点「AI 核心」或 \`Ctrl+Enter\` 触发生成。\r
\r
## 生成模式\r
\r
| 模式 | 流程 | 适用 |\r
| --- | --- | --- |\r
| 快速（整节） | 一次出 Section 草稿 | 草稿探索 |\r
| 精修（流水线） | Plan → 大纲 → 分课 → 校验 → 质量分 → 修复 → 解释 → ReadyImport | 发布候选 |\r
\r
精修流水线由 \`backend/ai_pipeline.py\` 状态机驱动；右栏 checklist 实时显示每步状态。**流水线只到草稿为止**。导入仍走原有「校验 → 目标选择 → diff/merge 预览 → 人工确认」流程，**不**自动导入。\r
\r
修复阶段规则：先规则修复，LLM 仅处理剩余 error，**不得**删除既有 id，否则回滚。\r
\r
## 对话与高级\r
\r
右栏「对话与高级」支持：\r
\r
- 聊天（含多模态附件）\r
- Prompt 模板库与历史\r
- \`[genre]\` 多模板（语法书 / 对话书 / 阅读）\r
- JSON 输出（默认折叠）\r
- AI 分析失败原因\r
\r
主参数（主题 / CEFR / 模板）始终在中栏轨道，不在聊天中重复。\r
\r
## 章节导入\r
\r
| 策略 | 行为 | 风险 |\r
| --- | --- | --- |\r
| 合并预览（默认） | 逐项决定 | 低 |\r
| 跳过已存在 | 保留现有 Section | 低 |\r
| 覆盖已存在 | 整体替换 | 高 |\r
| 作为新 Section | 生成新 ID 并存 | 中 |\r
\r
幂等：重复导入不制造废节点。\r
\r
## 冲突处理\r
\r
\`\`\`text\r
项目内规范化 key 碰撞\r
        │\r
        ▼\r
   是否与现有课程 ID 冲突？\r
        ├─ 是 → 三选一：保留 / 覆盖 / 追加新 id\r
        └─ 否 → 合并为既有 ID\r
\`\`\`\r
\r
去重依据规范化 key，**不**依据字符串相似度。\`new\` 标签词条强制人工确认。\r
\r
## 失败处理\r
\r
| 现象 | 处置 |\r
| --- | --- |\r
| 未切章 | 检查 Markdown 标题层级 |\r
| PDF 无文本 | 走 OCR 流程 |\r
| 单章抽取失败 | 重试 / 仅抽词汇 / 跳过 |\r
| AI 抽取持续失败 | 切到 \`vocab_only\` 仍失败 → 跳过并标红 → 工坊拟人化分析 |\r
| JSON 不通过 | 回到草稿修复，不直接覆盖 |\r
| 价格未知 | 只显示 Token，不生成误导性成本 |\r
\r
## 语言对抽取模板\r
\r
\`Turkish ↔ Chinese\` 内置抽取规则块（强调元音和谐、敬语形式、term 禁止中文字符、翻译用简体中文）。其他语言对可在「设置 → 提取 Prompt」tab 持久化覆盖。优先级：\r
\r
\`\`\`text\r
内存 register > 持久化覆盖 > 内置语言对包 > 内置默认\r
\`\`\`\r
\r
实现见 \`tool/gui/src/backend/knowledge_prompt.py\` 与 \`tool/gui/src/application/ai_prompt_library.py\`。\r
\r
## AI 能力\r
\r
教材导入是 AI 介入最深的流程。本节展开 5 个子方向。\r
\r
### AI 抽取流水线\r
\r
4 抽取预设 × 2 项目类型 × 5 状态灯的笛卡尔积决策矩阵：\r
\r
| 项目类型 | 抽取预设 | 章节数 | 状态灯 | 后续动作 |\r
| --- | --- | --- | --- | --- |\r
| 教材项目 | \`general\` | ≤ 20 | 绿 | 直接入池 |\r
| 教材项目 | \`general\` | > 20 | 黄 / 红 | 按质量重抽 / 切 \`vocab_only\` |\r
| 教材项目 | \`grammar\` | 任意 | 绿 / 黄 | 入池，规则化抽取 |\r
| 教材项目 | \`dialogue\` | 任意 | 绿 / 黄 | 入池，强调表达与口语 |\r
| 教材项目 | \`reading\` | 任意 | 绿 / 黄 | 入池，词汇抽取为主 |\r
| 教材项目 | 任意 | 任意 | 红（多次） | 标红 + 跳过 + 拟人化分析 |\r
| 空白 AI 项目 | （无抽取） | 0 | 灰 | 跳过抽取阶段，直接进入生成 |\r
\r
滑窗参数 \`window_chars\`（默认 8000）与 \`overlap_chars\`（默认 500）控制长章节切窗；\`0\` 关闭滑窗（按章一次性抽取）。失败级联由 \`QSettings/textbook/auto_cascade\` 控制，默认开。\r
\r
### AI 生成模式状态机\r
\r
工坊 **生成模式** 决定 AI 状态机的入口：\r
\r
\`\`\`text\r
                 ┌────────── 快速（整节）──────────┐\r
                 │ 一次出 Section 草稿 → 校验 → 摘要 │\r
                 └─────────────────────────────────┘\r
\r
                 ┌──── 精修（Plan → … → ReadyImport）────┐\r
                 │                                       │\r
   Plan ─► 大纲 ─► 分课生成 ─► 校验 ─► 内容质量分 ─► 修复  │\r
                                       │              │   │\r
                                       ▼              ▼   │\r
                            （先规则修复，LLM 仅处理剩余 error）\r
                                                  │       │\r
                                                  ▼       ▼\r
                                              通俗解释 ── ReadyImport\r
\`\`\`\r
\r
精修模式各步均通过 \`backend/ai_pipeline.py\` 状态机驱动；右栏 checklist 实时显示每步状态（pending / running / done / skipped / failed）。修复阶段**不得**删除既有 id，否则回滚。取消后大纲 / 草稿等中间态随 \`project.json\` 自动保存，重开项目可从大纲续跑。**流水线只到草稿为止**，导入仍走原有「校验 → 目标选择 → diff/merge 预览 → 人工确认」流程，**不**自动导入。\r
\r
### AI 局部重生成\r
\r
工坊右栏结构大纲右键 → **局部重生成 Unit / Lesson**。上下文收集：\r
\r
1. 当前节点的 canonical content 与 \`linkedGrammarPointIds\`。\r
2. 上游 Unit / Section 的学习目标与已用资源。\r
3. 当前气泡池（≤ 200）。\r
4. 用户自定义指令（自然语言）。\r
\r
LLM 输出经过 \`_detect_ai_edit_conflicts\` 检查 ID 集合一致性；冲突弹三选一（保留现状 / 采用 AI 建议 / 取消）。应用走 \`MergeAiSectionCommand\` 等，可 \`Ctrl+Z\` 撤销。\r
\r
### AI 故障分析\r
\r
工坊任务失败时（生成 / 抽取 / 拟导入），自动弹 \`AiErrorAnalyzerDialog\`（与加载失败共用同一组件）：\r
\r
- 上下文：\`{"action": "workshop.task", "step": "<state>", "project_id": "<id>"}\`。\r
- LLM prompt：失败步骤的输入 / 输出 / traceback + JSON Schema 片段 + 相关 prompt 模板路径。\r
- 输出：可能根因列表 + 修复建议（不静默写盘）。\r
\r
与「加载失败 → AI 分析」的区别：工坊场景额外提供「重试该步骤」按钮，绕开 \`project.json\` 的中间态重跑。\r
\r
### AI 多模态附件\r
\r
工坊对话与高级支持 PDF / Word / TXT / 图片拖入：\r
\r
| 附件类型 | 解析路径 |\r
| --- | --- |\r
| \`.pdf\` | \`PyPDF2\` 文本抽取；扫描件需外部 OCR 后再导入 |\r
| \`.docx\` | \`python-docx\` 段落抽取 |\r
| \`.txt\` / \`.md\` | UTF-8 直读，按标题切章 |\r
| 图片（\`.png\` / \`.jpg\`） | 走所配模型的视觉能力；解析为自然语言描述 |\r
\r
实现位置：\`backend/attachment_extractor.py\`。多模态附件**仅在对话窗口**生效；不直接喂给抽取阶段。\r
\r
更多 AI 生成模式状态机与精修流水线细节见 [AI 课程生成](/authoring/ai-course-generation#11-课程生成工坊)。\r
\r
## 性能与节流\r
\r
- 气泡池增量刷新 + debounce。\r
- 草稿自动保存节流。\r
- 校验始终只走 \`CourseAdapter\` / \`course_cli\`，不绕开。\r
\r
## 快捷键\r
\r
| 键 | 动作 |\r
| --- | --- |\r
| \`Ctrl+Enter\` | 从轨道生成 |\r
| \`Esc\` | 任务进行中：确认后取消 |\r
| 头栏 checklist 单元 | 跳转到对应栏 |\r
\r
## 与 GUI 主窗口的衔接\r
\r
\`\`\`text\r
工坊草稿 ──import──► 主窗口课程树（新增/合并/覆盖/追加）\r
                       │\r
                       ▼\r
                  主窗口保存 (Ctrl+S)\r
                       │\r
                       ▼\r
            CourseAdapter.save() → validate + lint\r
                       │\r
                       ▼\r
                  磁盘 JSON 写盘\r
\`\`\`\r
\r
导入成功后 GUI 可询问是否「切换教师模式并定位该章节（及首课）」。导入后**必须**在主窗口保存。\r
\r
## 相关文档\r
\r
- [课程编辑器](/guide/editor)\r
- [课程目录约定](/authoring/course-layout)\r
- [资源文件](/authoring/resource-files)\r
- [Lesson JSON 结构](/authoring/lesson-schema)\r
- [校验与 Lint](/authoring/validation)\r
- [发布检查表](/authoring/release-checklist)\r
`,ks=`# 校验与 Lint

> 课程发布前同时执行**结构校验**与**内容 lint**。结构校验回答「能否安全加载」；lint 回答「是否符合生产约定」。两者不可互相替代。

![GUI 保存协议与回滚时序：Author / CourseAdapter / course_cli / 磁盘 JSON 四泳道](/images/authoring/save-rollback.svg)

![校验面板（实际运行截图：左侧问题列表 + 右侧 JSON Pointer 详情）](/images/authoring/_real/15-validation-report.png)

## 命令

\`tool/course_cli.py\` 的全部子命令：

\`\`\`bash
# 注意：--course-dir 是顶层参数，必须写在子命令之前
python tool/course_cli.py --course-dir assets/courses/turkish validate                       # 结构校验
python tool/course_cli.py --course-dir assets/courses/turkish validate --format json         # 机器可读
python tool/course_cli.py --course-dir assets/courses/turkish lint                           # 内容 lint
python tool/course_cli.py --course-dir assets/courses/turkish lint --strict                  # warning 也算失败
python tool/course_cli.py --course-dir <dir> export-csv --type vocab --output out.csv
python tool/course_cli.py --course-dir <dir> import-csv --type vocab --input in.csv [--dry-run]
python tool/course_cli.py --course-dir <dir> audio-manifest --output manifest.csv
python tool/course_cli.py diff --before <dir_a> --after <dir_b>                              # 按 id 集合对比
\`\`\`

把 \`--course-dir\` 放到子命令之后会触发 argparse 用法错误并以退出码 2 结束。

\`export-csv\` / \`import-csv\` 的 \`--type\` 取 \`vocab\` / \`expressions\` / \`grammar_points\`；\`import-csv --dry-run\` 只校验不写盘。

::: tip 解释器名
Windows 用 \`python\`；Linux / macOS 一般需要用 \`python3\` 替代。
:::

### 退出码契约

| 退出码 | 含义 | 调用方决策 |
| ---: | --- | --- |
| \`0\` | 通过 | 继续 |
| \`1\` | 有 error（lint 在 \`--strict\` 下 warning 也返回 1） | 阻断保存 / 阻断发布 |
| \`2\` | 命令行用法错误（如 \`--course-dir\` 放在子命令之后） | 视为门禁失败，不重试 |

没有更细的退出码分档；调用方根据退出码与 JSON \`ok\` 字段判定结果，**不**通过解析自然语言日志推断成功。## JSON 输出 schema

\`validate --format json\` 的实际输出：

\`\`\`json
{
  "ok": false,
  "errorCount": 1,
  "problems": [
    {
      "level": "error",
      "message": "Lesson s1-l1 引用了不存在的 vocab id: w-merhab",
      "path": "sections/section1.json#/units/0/lessons/0/..."
    }
  ]
}
\`\`\`

| 字段 | 说明 |
| --- | --- |
| \`ok\` | 顶层布尔；无 error 时为 true |
| \`errorCount\` | error 级问题数 |
| \`problems[].level\` | \`error\` / \`warning\` |
| \`problems[].message\` | 人类可读描述 |
| \`problems[].path\` | 定位信息（可空字符串）；GUI 用于定位红角标 |

\`lint\` 无 \`--format\` 选项，输出纯文本 \`LEVEL: message\` 行。

## validate 范围（error 级别）

| 类别 | 检查 |
| --- | --- |
| 解析 | 所有 JSON 可解析 |
| 索引 | \`index.json\` 指向存在的 Section 文件 |
| 规模 | Unit ≤ 60 / Section、Lesson ≤ 40 / Unit |
| ID | 词条、表达、语法点、Section、Unit、Lesson 的 id 非空且全局唯一 |
| 引用 | \`wordId\` / \`expressionId\` / \`grammarPointId\` 不得悬挂 |
| 音频 | 具名听力素材 \`audioAsset\` 只能出现在听力课中 |
| 形状 | \`content\` 结构与 \`template\` 相容；\`stages\` 与 \`questions\` 不可同时声明 |

::: warning 这些**没有**被检查
以下常见假设在 \`course_cli.py\` 中**没有任何实现**，不要以为有门禁兜底：

- **先修依赖**：既不检查 \`prerequisiteLessonIds\` / \`prerequisiteUnitIds\` / \`prerequisiteSectionIds\` 的引用存在性，也不做依赖图环检测。
- **未注册的 \`runtimeType\`**：不做枚举校验。未知类型只在运行时降级为占位 \`showWord\`（\`wordId = "unknown-interaction:<type>"\`）。
- **选择题答案下标**：schema 用整型 \`correctIndex\` / \`correctIndices\`（**没有 \`correctAnswer\` 字段**），且下标是否落在 \`options\` 范围内不做校验。
- **\`index.json.version\` 递增**：不检查，单目录校验也无法判断相对上次的递增。
- **扁平 \`questions\`**：不是 error，会被自动归一化包成单个 stage。唯一的 error 是同时声明 \`stages\` 与 \`questions\`。
- **\`language\` 与目录名一致**：不做检查（且磁盘上 \`turkish/\` 目录的 \`index.json\` 里就是 \`"language": "tr"\`，本就不相等）。

以上几条需靠人工或编辑器自律。
:::

## lint 范围

\`lint\` 覆盖面比上表窄得多，只做资源与音频类检查：

| 级别 | 检查 |
| --- | --- |
| error | 词条 / 表达缺 term 或 translation；语法点缺标题；语法点引用的 \`expressionId\` 悬挂 |
| warning | 语法点未被任何课引用；词条 / 表达 / 语法点存在未被引用的孤立条目；听力音频文件缺失 |
| warning | \`audioAsset\` 出现在非听力课中 |

> 命名风格、干扰项质量、难度梯度、听力量感、文本切窗等**没有对应的 lint 探针**。\`--strict\` 只是把 warning 升级为失败（返回码 1），不会新增检查项。
>
> 另外注意音频路径解析按 \`assets/sounds/listening/<id>.mp3\` 查找，缺少语言层目录；磁盘实际布局是 \`assets/sounds/<lang>/listening/\`，因此听力课缺失音频的告警可能与磁盘布局不一致。

### 内容质量 6 维

\`tool/gui/src/backend/content_quality.py\` 实现六维内容质量评分，纯函数无 Qt，可单测。每维输出 0–1 分数，越高越好：

| 维度 | 探针 | 阈值 |
| --- | --- | --- |
| 复现（reproducibility） | 同 prompt 多 LLM 输出 JSON Schema 一致性 | ≥ 0.8 |
| 题型（item_type） | 每 stage 题型分布与模板预设一致 | ≥ 0.7 |
| 干扰项（distractor） | 选项与正确项同 pos、同 cefr、无语义近邻 | ≥ 0.6 |
| 难度（difficulty） | 同一 stage 内认知梯度单调 | ≥ 0.7 |
| 听力（listening） | \`listeningPhases\` 资产齐全 + 重播按钮 + 文本边界 ≥ 2 s | ≥ 0.7 |
| 资源卫生（hygiene） | 词汇 / 表达 / 语法点引用闭环；无孤立条目 | ≥ 0.8 |

质量分**不阻断**保存与导入，仅在总览与发布对话框中显示，按 0.7 阈值给 Section 染色（红 / 黄 / 绿）。

## GUI 保存协议

编辑器（\`tool/gui\`）保存按钮**始终**调用 \`CourseAdapter.save()\`。该方法：

1. 序列化内存编辑状态为 JSON 草稿。
2. 在临时目录原子写盘。
3. 调用 \`validate\` 与 \`lint\`。
4. 任何 error 触发回滚（见下）。
5. 全部通过则替换原文件并更新 \`index.json.version\`（仅在「保存即发布」开启时；默认仅校验不 bump）。

### 失败回滚

\`\`\`text
写入草稿
   │
   ▼
validate  ──error──► 标记问题节点 + 保留内存编辑 + 不替换原文件
   │
   ▼ (ok)
lint      ──warning──► 写入红色提示，不阻断
   │
   ▼ (ok)
替换原文件
\`\`\`

回滚保证：

- 磁盘文件保持失败前的最后一个合法版本。
- 内存编辑状态完整保留，可继续修改后重试。
- 状态栏显示 \`校验失败，已回滚\`。
- 校验问题以红角标 + 列表形式呈现；JSON Pointer 用于定位具体节点。

### 修复后重试

::: danger 禁止绕过校验
错误未消除时，**禁止**手动覆盖磁盘文件绕过校验。如确认是校验器误报，先在应用仓库修复校验器与对应测试，再回到 GUI 重新保存。
:::

## CI 集成

CI 矩阵对每门语言各跑一次，直接用退出码做门禁：

::: code-group

\`\`\`bash [Windows]
python tool/course_cli.py --course-dir assets/courses/<lang> validate
python tool/course_cli.py --course-dir assets/courses/<lang> lint --strict
\`\`\`

\`\`\`bash [Linux / macOS]
python3 tool/course_cli.py --course-dir assets/courses/<lang> validate
python3 tool/course_cli.py --course-dir assets/courses/<lang> lint --strict
\`\`\`

:::

\`validate\` 有 error 或 \`lint --strict\` 有 warning 即非零退出。需要机器可读结果时用 \`validate --format json\` 并解析 \`problems[]\` / \`errorCount\`。

## 与 Dart 端对齐

Flutter \`Seeder\` 在客户端重新导入时执行 Dart 版本校验。\`validate\` 规则**必须**与 \`course_cli\` 一致；否则会出现「编辑器通过、App 端报错」。修改任何合同须：

1. 同步修改 \`course_cli\` 校验器。
2. 同步修改 \`Seeder\` 校验器。
3. 两端各加测试用例。
4. 在本文件中更新对应条目。

## 发布门禁

通过 validate + lint 是**必要**条件，不是充分条件。AI 修正 / 质量分**不**改变发布门禁。完整发布门禁见 [发布检查表](/authoring/release-checklist)：

- 教师试做通过
- \`index.json.version\` 已递增
- 内容清单规模变化与预期一致
- 客户端 reseed 验证通过
- 音频 manifest 无悬挂引用

## 常见问题与处置

| 现象 | 根因 | 处置 |
| --- | --- | --- |
| 保存按钮灰 | 存在 validate error | 打开校验面板逐项修复 |
| 大量 \`unresolved reference\` | 教材导入合并时未联动资源 | 在资源库替换或补建资源 |
| 同一 Lesson 触发多条警告 | lint 探针耦合（如干扰项 + 难度） | 一次修复后再次校验 |
| JSON Pointer 不指向现有节点 | 结构变化后校验器未更新 | 升级 CLI 至最新版本 |
| 加载失败弹窗 | 仓库目录非法 / JSON 不可解析 | 见下文「AI 加载错误分析器」 |

## AI 能力

校验与 Lint 之外的第三层 AI 介入：① 单节点 AI 修正；② 批量 AI 修正；③ 加载错误拟人化分析；④ 六维内容质量分。AI 行为**不**绕过 \`validate\` 与 \`lint\`，仅在它们之上做修复与建议。

### AI 加载错误分析器

GUI 启动时若 \`CourseAdapter.load(path)\` 抛异常，\`_show_load_error\` 弹「加载失败」对话框并附带 **AI 分析** 按钮（\`tool/gui/src/dialogs/ai_error_analyzer.py\`）。点击后：

1. 收集 \`traceback.format_exc()\` 与上下文 \`{"action": "repo.open"}\`。
2. 调 \`AiErrorAnalyzerDialog(traceback, context, parent=win)\` 渲染独立窗口。
3. 用户点「分析」后调 LLM，prompt 内含异常堆栈、JSON Schema 片段、相关源文件行号。
4. 渲染「可能根因 + 修复建议」列表，**不**自动写盘。

该分析器在仓库加载失败、CI 上传的 manifest 与磁盘不一致、第三方脚本写错 JSON 等场景下提供次级诊断通道。它**不**替代结构性修复：根因若在校验器本身，必须回到应用仓库修复 \`course_cli\` 与对应测试。

### AI 批量修正（多选问题 → 按节点分批 merge）

校验面板支持多选问题（\`Ctrl+点击\` / \`Shift+点击\`），底部动作栏提供 **AI 自动修正** 按钮，触发 \`app.py::_on_ai_batch_fix_requested\`：

\`\`\`text
选中问题集合
   │  按 path 反向聚合
   ▼
节点分组（kind, id）
   │  逐节点一次修复
   ▼
   ai_fixer.fix_node(kind, id, problems_for_node) → patch
   │  diff 预览
   ▼
   作者逐节点确认 / 全部接受 / 全部取消
   │  走 Append*Command / AiEdit*Command / MergeAiSectionCommand
   ▼
   CourseAdapter.save() 统一落盘 + validate
\`\`\`

约束：

- 每批只处理一个节点（Section / Unit / Lesson），不跨节点合并。
- 修复过程中**不**删除既有 id；任何删 id 操作会触发回滚至修复前。
- 修复后必须再走 \`validate\`；任何剩余 error 阻断保存。
- 批量动作可被 \`Ctrl+Z\` 全部撤销（每个节点对应一条 QUndoCommand）。

AI 批量修正**不阻断**保存。若用户选择「仅修复 1 个节点、跳过其他」，剩余 error 仍按既有协议阻断写盘。

### 六维内容质量分

\`tool/gui/src/backend/content_quality.py\` 实现六维评分，纯函数无 Qt，可单测。每维输出 0–1 分数，越高越好；默认阈值 0.7。

| 维度 | 探针 | 阈值 |
| --- | --- | ---: |
| 复现（reproducibility） | 同 prompt 多 LLM 输出 JSON Schema 一致性 | ≥ 0.8 |
| 题型（item_type） | 每 stage 题型分布与模板预设一致 | ≥ 0.7 |
| 干扰项（distractor） | 选项与正确项同 pos、同 cefr、无语义近邻 | ≥ 0.6 |
| 难度（difficulty） | 同一 stage 内认知梯度单调 | ≥ 0.7 |
| 听力（listening） | \`listeningPhases\` 资产齐全 + 重播按钮 + 文本边界 ≥ 2 s | ≥ 0.7 |
| 资源卫生（hygiene） | 词汇 / 表达 / 语法点引用闭环；无孤立条目 | ≥ 0.8 |

样例输出（Section 粒度均值）：

\`\`\`json
{
  "section1": {
    "reproducibility": 0.91,
    "item_type":      0.83,
    "distractor":     0.74,
    "difficulty":     0.79,
    "listening":      0.62,
    "hygiene":        0.88,
    "mean":           0.795
  }
}
\`\`\`

\`mean\` < 0.7 的 Section 在总览中染色为「低质节」，是「按质量重抽」与「QualityCampaignDialog」的目标来源。质量分**不**改变 validate / lint 决策；它仅指导 AI 修正 / 重抽的优先级。

### AI 修正 vs 人工修正决策矩阵

| 场景 | 推荐方式 | 备注 |
| --- | --- | --- |
| validate error ≤ 3（单节点） | AI 修正此节点 | 单 patch，可撤销 |
| validate error 4–10（多节点） | AI 批量修正 | 按节点分批；每批走 \`QUndoCommand\` |
| validate error > 10（跨节） | 拆 Section / 重新生成 | AI 批量修正批数过多易丢失上下文 |
| lint warning 连续 3 节同源 | 回到工坊按质量重抽 | lint 是结构性偏差，AI 单点修治标 |
| 资源悬挂（\`unresolved reference\`） | 资源库手工替换 | AI 不知道该资源的语义边界 |
| 跨 ID 改写 | **禁止 AI 自动改** | 必须人工；ID 是引用锚点 |

实现位置：\`backend/ai_fixer.py::fix_node\`（单节点）/ \`app.py::_on_ai_batch_fix_requested\`（批量）/ \`backend/content_quality.py\`（六维评分）。

更多 AI 修正 / 修复策略与失败模式见 [AI 课程生成](/authoring/ai-course-generation#12-校验与修复主窗口)。

## 与 GUI 校验面板的对应

| GUI 元素 | 数据源 |
| --- | --- |
| 课程树红角标 | \`problems[].path\` 反向解析到节点 |
| 校验面板左侧列表 | 按节点分组；\`Ctrl+点击\` 多选 |
| 校验面板右侧详情 | 选中问题的 JSON Pointer + 原文 diff + 修复建议 |
| 「AI 修正此节点」 | 走 \`ai_fixer.fix_node\`，单节点 |
| 「AI 批量修正」 | 走 \`_on_ai_batch_fix_requested\`，按节点分批 merge |
| 加载失败 → AI 分析 | 调 \`AiErrorAnalyzerDialog\` |
| 状态栏 \`校验防护激活中\` | 标志 \`CourseAdapter.save()\` 可用 |
| 总览「校验数」可点跳转 | 跳到本面板并定位第一条 error |

## 相关文档

- [课程目录约定](/authoring/course-layout)
- [Lesson JSON 结构](/authoring/lesson-schema)
- [资源文件](/authoring/resource-files)
- [发布检查表](/authoring/release-checklist)
- [测试与质量门禁](/developer/testing)
`,ys=`# Android 构建

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

生成代码已提交。只有修改 Freezed、JsonSerializable、AutoRoute、Injectable 或 drift 注解/表定义时执行：

\`\`\`bash
make gen
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

::: warning 验收状态
Official Anki 当前口径是**「验收 NO-GO；迁移中」**。Android 写侧（导入→账本→视图→删除收敛）仅在 2026-09-02 于真机以 **debug 构建**验证过，**生产 bundle 完整用户流尚未验证**；iOS 侧只有模拟器 E2E。不得宣称「迁移完成」或「Android 可正常使用」。权威状态与证据台账见应用仓库 \`docs/official-anki-migration/34-cutover-receipt.md\`。
:::

## 质量命令

\`\`\`bash
flutter analyze
flutter test --exclude-tags golden
make test-python
make ci
\`\`\`

\`make ci\` 等价于 \`format-check analyze test test-python lint-gui guard-gui test-gui build-release-smoke\` 共 8 个目标。

\`flutter test --exclude-tags golden\` 才是本地绿线；排除 golden 是因为存在已登记的本机失配，已知清单以 \`test/BASELINE.md\` 为准。

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

版本值由发布流程决定，不复制文档中的示例版本作为新版本。脚本会断言 \`<version>\` 与 \`pubspec.yaml\` 的 \`version\` 一致，不符即退出。

## 相关文档

- [安装应用](/guide/install-app)
- [测试与质量门禁](/developer/testing)
- [故障排查](/guide/troubleshooting)
`,As="# 架构总览\n\nTurna 客户端采用 Clean Architecture 风格分层，并使用 Provider、ChangeNotifier、GetIt / Injectable 和 Auto Route。分层目标是限制数据所有权和依赖方向，不是增加形式目录。\n\n## 目录职责\n\n```text\nlib/\n  application/   状态容器、应用服务、工作流编排\n  core/          FSRS、语言检测、纯函数与基础策略\n  courses/       课程 loader 与 validator\n  data/          drift 数据库、DAO、Repository 实现\n  di/            GetIt / Injectable 注册\n  domain/        不可变领域模型与 Repository 接口\n  routing/       Auto Route 与启动守卫\n  service/       启动、导出、远端备份（WebDAV）与生命周期服务\n  views/         页面与组件\n```\n\n## 依赖方向\n\n```text\nviews\n  -> application\n  -> domain <- data\n  -> core\n\napplication -> domain / core\ndata -> domain\ndomain -> no UI dependency\n```\n\n### 硬禁止\n\n这些不是风格建议，由 `test/architecture/layering_guard_test.dart` 逐文件强制，失败即层边界已破：\n\n| 方向 | 判定 |\n| --- | --- |\n| `views → data` | 禁止。必须经 application 服务或 domain 仓库接口。 |\n| `application → data` | 硬禁止。DAO / Repository 一律经 `domain/repositories/` 消费。 |\n| `application` / `domain` / `core` / `service` → `views` | 禁止（`di/` 装配模块豁免）。 |\n| `domain → application` / `domain → data` | 禁止。需要能力就在 domain 抽接口。 |\n\n`application → data` 仅三类豁免：Drift 句柄传递、原生 SQL 事务、`CourseDatabase` 本地句柄构造，走逐文件白名单。白名单是双向校验的，既拦未授权导入，也报「已豁免但不再导入，去删豁免项」。\n\n领域模型不依赖 Flutter Widget。共享词汇（主题 token、状态模型、结果枚举）放 `core` 或 `domain`，不写在页面文件里。\n\n## 命名与选型\n\n| 主题 | 既定选型 | 不得写成 |\n| --- | --- | --- |\n| 状态与结果建模 | `sealed class` + pattern matching | enum + if 链 |\n| 多返回值 | record `(a, b)` | 一次性 DTO / `Map<String, dynamic>` |\n| 领域模型 | freezed + `part`，改动后 `make gen` | 手写 `==` / `copyWith` / `toJson` |\n| 依赖注入 | injectable 注解 + get_it | 手写 `GetIt.register*` |\n| 路由 | auto_route 注解 | 手写 `MaterialPageRoute` |\n| 具名工具类 | `abstract final class` | 可实例化 class 承载静态方法 |\n\n页面文件统一 `*_page.dart`，新代码不得新增 `_screen.dart`。组件目录：跨功能共享放 `lib/views/widgets/`，功能域私有放 `<feature>/components/`，新功能域统一用 `components/`。\n\n## 状态管理\n\n状态选型三段：UI 局部状态用 `setState`；跨 widget 共享用 `provider`（`ChangeNotifier` + `context.watch/read`）；无 UI 依赖的服务 / 仓库用 `get_it`。\n\nProvider + ChangeNotifier 承担状态广播。复杂功能拆分为专用 provider，`GameProvider` 等 facade 只负责聚合和转发，不复制状态。\n\n**页面里不得直接 `getIt<DataLayerType>()`**；数据访问一律走 repository 接口或 application 门面。\n\n并发状态必须显式表示。例如复习评分使用 in-flight 集合阻止评分与撤销竞态，AI 使用取消令牌和幂等键控制在途请求。\n\n全应用 LLM 出入口唯一是 `lib/application/ai/engine/`，页面不得直连任何 LLM SDK。\n\n日志统一走 `core/logger.dart` 的 `logger`，禁 `print`（analyzer 强制）与 `debugPrint`（仅自觉）。空 catch 必须有一行注释说明为何安全。\n\n## 依赖注入\n\nGetIt 与 Injectable 注册 renderer、service 和 repository。生成文件由 `build_runner` 产生并提交。新增注解后需要重新生成；普通业务代码修改不需要。\n\n## 路由\n\n全屏页面使用 Auto Route。`CourseReadyGuard` 在课程数据库未准备完成时重定向到启动页。底部主 Tab 使用 IndexedStack，不伪装为 push/pop 路由。\n\n平台默认：\n\n- Android：Material 路由和预测返回。\n- iOS / macOS：Cupertino 路由和边缘返回。\n- Web：无页面转场。\n\n调用点不直接构造任意 `MaterialPageRoute`、`CupertinoPageRoute` 或自定义 PageRouteBuilder。\n\n## 渲染插件\n\n14 种 Interaction renderer 通过 Injectable 注册（`di/renderer_module.dart`），分发走 `lib/views/lesson/components/interactions/interaction_renderer.dart` 的 `lookupRenderer()`。它先用 `_handlesTypeFor()` 把实例映射到 freezed 公开接口类型再匹配——**不能直接用 `runtimeType`**，因为 freezed 生成的是私有 `_$FooImpl`，永远不等于渲染器声明的 `handlesType`。\n\n`ankiHtmlCard` 在课时体内的渲染器是退役占位（`AnkiHtmlCardRetiredRenderer`）；Official 复习的保真渲染走 `anki_official/` 自己的路径。新增题型需要同时修改：\n\n1. 领域 union / 序列化。\n2. renderer（并在 module 登记）。\n3. DI 生成（重跑 `make gen`，无需改动分发逻辑）。\n4. Python 与 Dart validator。\n5. JSON 示例和测试。\n6. 文档。\n\n## AI 边界\n\n`application/ai/engine/` 是唯一 LLM 流量出口。引擎只暴露 chat 与结构化请求；课程、提示、SRS 和教材导入分别持有领域 Prompt 和解析规则。\n\n## Anki 边界\n\nAndroid 生产 Official-first 路径位于 `application/anki_official/`。Collection 与 scheduler 拥有正式卡片状态。Legacy 路径已整体退役（v1 读路径与 course.db 内的 `anki_notetypes` / `anki_notes` / `anki_cards_meta` 三表均已删除），只剩受控迁移，不是生产自动降级。\n\n> **状态限定**：Official Anki 当前口径是「验收 NO-GO；迁移中」。Android 写侧仅在真机以 **debug 构建**验证过，**生产 bundle 尚未验证**；iOS 仅有模拟器 E2E。不得写「迁移完成」或「Android 可正常使用」。权威状态见应用仓库 `docs/official-anki-migration/34-cutover-receipt.md`。\n\n## 相关文档\n\n- [本地数据模型](/developer/local-data)\n- [测试与质量门禁](/developer/testing)\n- [核心能力一览](/guide/features)\n",Ss=`# 术语表

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
| Interaction | Lesson 中最小可执行题目或展示单元 |
| Lesson | Unit 下的单次学习单元 |
| Local-first | 核心状态默认在本地，网络是可选能力 |
| Notetype | Anki note 的字段和卡片模板定义；只存在于 Official Collection 与导入映射识别器中 |
| Official owner | 由 Official Anki Collection 和 scheduler 持有状态的来源 |
| R / Retrievability | 当前时刻成功提取的估计概率 |
| reseed | 根据课程内容版本重建数据库课程投影 |
| Review event | 一次评分及其前后调度状态记录 |
| runtimeType | Dart 运行时类型。freezed 模型反序列化后是私有实现类（如 \`_$FooImpl\`），不等于声明的公开接口类型；渲染器分发不能直接用它比较，需先经 \`_handlesTypeFor()\` 映射 |
| S / Stability | FSRS 估计的记忆保持时间尺度 |
| Safe mode | 安全模式：临时禁用模板 JS、外部网络和高风险后台能力；不改学习数据 |
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
`,Is=`# 本地数据模型

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
| Official Anki | notes、cards、revlog、scheduler | Official Core（独立于 course.db 的库） |
| AI | 会话、消息、诊断、指标 | AI 工作流 |
| 设置 | 主题、无障碍、课程 TTS | 本地偏好 |
| 缓存 | AI 响应缓存、复习看板快照、图片缓存 | 可再生成 |

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

- AI 响应缓存。
- 复习看板快照。
- 运行时图片缓存。
- 可重新导入的课程投影，但执行前必须保护用户状态。

历史遗留的 Anki 预渲染 HTML 缓存（"智能去解密"）已在 schema v22 被删除、该路径明文放弃，不在上述清单内。

不属于普通缓存：SRS、review history、Official Collection、错题、AI 会话、用户设置。

## 相关文档

- [本地数据与隐私](/guide/data-and-privacy)
- [课程目录约定](/authoring/course-layout)
- [架构总览](/developer/architecture)
`,Ls=`# 测试与质量门禁

测试按数据合同、纯逻辑、应用状态、UI、构建和人工验收分层。单一测试命令不能证明全部路径成立。

## 客户端基线

::: code-group

\`\`\`bash [Windows]
make gen                                                   # 仅在改动注解后
flutter analyze
flutter test --exclude-tags golden
python -m unittest discover -s test -p "*_test.py"            # Python 工具测试（Makefile test-python）
python tool/gui/run_gui_tests.py ci                          # GUI 快速档
make ci
\`\`\`

\`\`\`bash [Linux / macOS]
make gen                                                   # 仅在改动注解后
flutter analyze
flutter test --exclude-tags golden
python3 -m unittest discover -s test -p "*_test.py"            # Python 工具测试（Makefile test-python）
python3 tool/gui/run_gui_tests.py ci                          # GUI 快速档
make ci
\`\`\`

:::

\`flutter test --exclude-tags golden\` 才是**本地绿线**。排除 golden 是因为存在已登记的本机失配（\`course_tree\` 相关），直接跑全量 \`flutter test\` 会因这些已知失配出红。已知失配清单以应用仓库 \`test/BASELINE.md\` 为准，该文件前插式、只增不删。

\`make ci\` 等价于 \`format-check analyze test test-python lint-gui guard-gui test-gui build-release-smoke\` 共 8 个目标，不要用只跑其中几项的命令替代。

GUI 测试走分档运行器 \`run_gui_tests.py\`：\`ci\` 是快速档，\`full\` 才是 CI 跑的全量档（等价于 \`make test-gui\`）。

Python 测试走 unittest（非 pytest）。测试基线见应用仓库 \`test/BASELINE.md\`。不要用"命令执行但未收集测试"替代通过。

## 课程门禁

\`\`\`bash
python tool/course_cli.py --course-dir assets/courses/turkish validate
python tool/course_cli.py --course-dir assets/courses/turkish lint
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
`,xs=`# Web 与文档站构建

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
npm run preview        # 只服务主站产物
npm run docs:preview   # 单独预览文档站
\`\`\`

\`npm run preview\` 是 Vite preview，不含文档站产物；要看 \`/docs/\` 需用 \`npm run docs:preview\`（或先 \`npm run build\`，再在站点产物中检查 \`/docs/\`）。

检查根路径、所有专题 HTML、\`/docs/\`、文档资源、站内链接和返回主页链接。

## 相关文档

- [快速开始](/guide/getting-started)
- [文档维护规范](/guide/writing-docs)
- [测试与质量门禁](/developer/testing)
`,ws=`# 可访问性

可访问性偏好由根应用壳统一应用，并持久化到本地设置。组件不得在局部重新解释同名设置。

## 偏好

| 偏好 | 范围 | 运行时效果 |
| --- | --- | --- |
| \`textScale\` | 100%–200% | 覆盖根文本缩放 |
| \`cardTextScale\` | 100%–200% | 卡片内容（含 WebView 卡面 \`html{zoom}\` 注入）单独缩放 |
| \`reducedMotion\` | 布尔 | 设置 disableAnimations，减少非必要动画 |
| \`highContrast\` | 布尔 | 使用高对比明暗主题 |
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
`,Ps=`# 配置 AI

AI 不是核心学习流程的前置条件。未配置模型时，课程、复习、错题和本地课程检索继续可用。

## 配置项

| 字段 | 含义 |
| --- | --- |
| Provider preset | 服务商预设或「自定义」 |
| Base URL | API 根地址（自定义时手填；命名预设自动带入） |
| API key | 服务凭据 |
| Chat model | 流式对话与解释模型；留空回退预设默认模型 |
| JSON model | 结构化生成模型；留空回退预设默认模型 |
| Strict schema mode | \`auto\`（默认，遇 400 回退 \`json_object\`）/ \`on\` / \`off\` |
| Reasoning | 显式开关（\`reasoning_effort\` / \`thinking\` 字段）；预设的 \`supportsReasoning\` 只是能力提示，不会自动开 |
| 响应缓存 | 命中相同请求时直接复用结果 |

内置预设：**DeepSeek**（默认 \`deepseek-v4-flash\`）、**Kimi**（\`kimi-k3\`）、**Qwen**（\`qwen3.8-max\`）、**MiMo**（\`mimo-v2.5-pro\`）、**自定义**。具体模型名由用户配置，文档不假设远端默认值长期有效。

## 配置顺序

1. 打开「设置 → 高级 → AI 连接」。
2. 选择 provider preset（命名预设自动填入 Base URL 与默认模型；「自定义」保留你手填的值）。
3. 输入 API key；自定义服务可填本地或自托管 endpoint。
4. 需要分流时分别选择 Chat model 与 JSON model。
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

请求体包含 model、messages、temperature，以及可选的 max_tokens、reasoning_effort 与 response_format。请求有超时上限（120 秒）与取消令牌；取消是协作式操作：客户端停止接收和处理结果，不保证远端立即停止计费。

## 预算

当前**没有**用量与花费管控。引擎未实现预算管理器，AI 侧不提供每日软/硬限制、Token 计数或成本估算，供应商定价表也未内置。因此不要在文档或预期里假设存在「预算上限」开关；花费需在服务商侧自行查看。

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
`,Ts=`# AI 工作流

所有 LLM 请求经过统一 AI 引擎。领域模块构造 Prompt、解析结果并执行本地校验。AI 输出不是直接可执行状态。

## 功能矩阵

| 工作流 | 输入 | 输出 | 写入边界 |
| --- | --- | --- | --- |
| 提示助手 | 当前题目与允许的课程上下文 | 分层提示 | 会话与学习证据 |
| 深度讲解 | 句子、语法点或错误 | 结构化解释 | 可选知识笔记 |
| SRS 导师 | 错题、弱词、近期复习 | 临时复习课 | 校验后进入课程流程 |
| 许愿生成 | 多轮需求、附件 | Section JSON 草稿 | 人工确认后写入 |
| 教材导入 | 文本章节与预设 | 资源和课时草稿 | 审校、合并后写入 |
| 课程生成 | AI Hub 入口，普通/许愿模式 | Section JSON 草稿 | \`ai_fixer\` 自动修复后，经校验与确认写入 |
| Lesson 助手 | 当前 Lesson | 修改建议或内容 | 经 schema 校验后应用 |

## 提示深度

提示不是由逐级解锁的状态机控制的。实际机制是 \`AiExplainPrefsSnapshot\` 的一组平铺偏好——回复语言、讲解深度、是否允许直接揭晓答案、是否注入学习者上下文——再由 \`toSystemPromptRules()\` 拼成规则文本进入系统提示，由模型在该约束内作答。

换句话说，深度取决于用户选择的偏好档位，而不是「每次追问才解锁下一层」的固定阶段序列。

## 学习者上下文

\`LearnerAiContext\`（\`lib/application/ai/learner_ai_context.dart\`）从本地证据生成只读摘要。关闭注入学习者上下文后：

- 不发送学习者摘要。
- 不发送错题与弱词历史。
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

原生平台可保存会话、消息与诊断。 tutor 会话支持列出、切换、新建与删除；当前没有重命名与导出功能。未配置模型时 AI 面板显示未配置引导，不做本地片段的确定性讲解。

## 明确不提供

- 未经可靠模型验证的口音分数或音素分数。
- 在用户不知情时上传完整学习数据库。
- 让远端模型直接写 SQLite。
- 绕过课程校验器的自动发布。

## 相关文档

- [配置 AI](/guide/ai-configuration)
- [错题与弱项](/guide/mistakes-and-weak-items)
- [教材导入](/authoring/textbook-import)
`,$s=`# AI 伴学

AI 跟的是你正在学的句子、语法和错题，不是通用聊天窗口。没有配置模型时，Turna 仍可用本地课程片段做讲解；关掉 AI 也不影响学习和复习。

产品页演示见 [ai.html](../../ai.html)。

## 能做什么

- **跟课答疑**：问正在学的那句、那个词缀，而不是「随便聊聊土耳其语」。
- **先提示，后揭晓**：从概念到规则再到完整讲解，避免一次把答案倒完。
- **按错题和弱词练**：用最近的错题、记得不稳的词生成一次短练习。
- **情景对话**：在固定场景（点餐 / 问路 / 自我介绍 / 购物）里开口练习。

## 和复习的关系

弱词、错题来自 FSRS 与课程记录。AI 只是读取这些本地数据来出题或解释，不把学习记录上传到「必须在线才能学」的后端。未配置密钥时走本地片段，有密钥时走统一 AI 引擎层（流式、可取消、可缓存）。

## 下一步

- [FSRS 复习](/guide/fsrs)
- [课程结构](/guide/curriculum)
`,Cs="# 导入 Anki 牌组\n\n本页描述 Official-first 导入。Android arm64 与 iOS 走同一条生产路径。\n\n::: warning 验收状态\nOfficial Anki 当前口径是**「验收 NO-GO；迁移中」**：Android 写侧仅在真机以 **debug 构建**验证过，生产 bundle 完整用户流尚未验证；iOS 侧为模拟器 E2E。不得宣称「迁移完成」或「Android 可正常使用」。\n:::\n\n::: warning 只支持 .apkg\n生产导入输入是 `.apkg`。选择 `.colpkg` 会得到明确的不支持提示与人工引导（需先在桌面 Anki 重新导出为 `.apkg`）；内存示例牌组不属于生产导入合同。\n:::\n\n## 导入前检查\n\n- 保留原始牌组文件作为备份。\n- 确认文件可以在桌面 Anki 中打开。\n- 检查可用存储空间，媒体牌组需要额外空间。\n\n## 执行路径\n\n```text\n选择 .apkg\n  -> 解析导入元数据\n  -> 生成一次 AnkiImportExecutionPlan（选文件时冻结，后续步骤不重读开关）\n  -> 写入 Official Collection\n  -> 建立课程投影\n  -> 注册 sourceId 与复习入口\n```\n\n向导分五步：选文件 → 解析 → 预览 → 执行 → 完成（失败态保留返回步骤）。\n\n![Anki 导入五步向导：输入边界 / 所有权 / notetype 投影](/images/guide/anki-import-flow.svg)\n\n生产 Android 不同时写入 Legacy NoteStore 和 Turna Anki SRS。正式卡片由 Official Collection 持有，正式评分由 Official scheduler 处理。\n\n## 导入预览\n\n预览页展示：\n\n- **牌组树**（deck tree）与每组真实卡数（含后代累计）——不是今日到期数。\n- **notetype 识别结果**：证据驱动识别器（`lib/application/anki_import/recognition/`）按 notetype 级判定，给出每种 notetype 的投影建议；可逐个确认或跳过。\n- 需要人工映射时（`needsMapping`），进入映射页手工指定字段角色。\n\n字段识别用词表（`field_roles.dart`）按字段名匹配角色，例如：\n\n- 单元标签：`unit`、`chapter`、`单元`、`章`\n- 课时标签：`lesson`、`topic`、`课`、`节`\n- 正面：`front`、`question`、`正面`、`题目`、`题干` 等\n- 背面：`back`、`answer`、`背面`、`答案` 等\n\n> `解析` 不属于背面（response）角色，它绑定到额外说明（extra）角色，以免与答案字段混淆。完整词表见 `recognition/lexicon/field_roles.dart`。\n\n## Notetype 投影目标\n\n每种 notetype 可映射为以下投影（`OfficialAnkiProjectionKind`）：\n\n`showWord`（词条卡）、`flip`（翻卡）、`multipleChoice`、`multiSelect`、`listenPick`（听音选择）、`typeAnswer`（键入答案）、`fillBlank`（cloze/填空）、`translate`（翻译）、`canonicalLink`（链接到规范资源条目）。\n\n操作顺序：\n\n1. 检查自动识别结果。\n2. 检查 front / back 字段索引。\n3. 查看首张 note 的文本预览。\n4. 必要时手动覆盖。\n\n## 调度状态\n\n导入会携带原牌组的调度状态。官方导入 saga 与导入服务都以 `withScheduling: true` 调用引擎（引擎签名里该参数默认值同样是 `true`），因此卡片按原牌组的到期与间隔进入 Official 复习，而不是作为新卡重来。\n\n无论哪条路径，排期状态都由 Official scheduler 持有 —— 不回退到 Turna FSRS。\n\n## 失败处理\n\n导入失败时不要重复快速点击导入。先检查错误发生在解析、Official runtime、媒体复制还是课程投影阶段。媒体复制可 best-effort；Collection 写入失败必须明确回滚或标记失败。\n\n## 相关文档\n\n- [Anki 集成](/guide/anki)\n- [卡片渲染与网络隔离](/guide/anki-rendering)\n- [故障排查](/guide/troubleshooting#anki)\n",Os='# 卡片渲染与网络隔离\n\nAnki 卡片可能包含 HTML、CSS、JavaScript、媒体引用和 cloze 模板。Turna 按卡片来源选择渲染路径，脚本与网络是独立权限。\n\n::: warning 验收状态\nOfficial Anki 当前口径是**「验收 NO-GO；迁移中」**，本节描述的 Official 复习器尚未通过生产 bundle 完整用户流验证（Android 写侧仅真机 debug 构建，iOS 仅模拟器 E2E）。详见 [Anki 集成](/guide/anki)。\n:::\n\n## 渲染路径\n\n复习入口由 `OfficialAnkiReviewerRouter` 按来源分发：\n\n| 来源 | 渲染 | 说明 |\n| --- | --- | --- |\n| Official（正式导入） | Official 复习器 | 模板卡面经 WebView 走原模板渲染；普通卡走结构化 Flutter 卡面 |\n| Legacy（历史数据） | 已退役 | 旧版渲染器随 v1 整体退役，非 Official 来源 fail-closed 显示错误 |\n| Turna 练习题 | Flutter 练习 | 课程 Interaction 渲染器 |\n\nLegacy（v1）已整体退役：Legacy 读路径、卸载链、NoteStore 载荷均已删除，course.db 内的 `anki_notetypes` / `anki_notes` / `anki_cards_meta` 三张表也已 drop。因此不要再指望存在一条仍可处理的「历史数据兼容」通路——遇到非 Official 来源会直接报错。\n\n题型层面再分两种（见 [交互题型](/guide/interaction-types)）：\n\n- `ankiCard` —— 纯文本翻卡（front → back），全平台 Flutter 渲染。\n- `ankiHtmlCard` —— 带 `frontHtml` / `backHtml` / `css` / `mediaBasePath` / `allowJs` 的保真卡，仅 Official 复习路径用 WebView 按原模板渲染；**课时体与错题回放里该类型的渲染器已退役**（显示「旧版导入的 Anki 卡片」占位，确认后继续）。\n\n## 平台差异\n\n| 平台 | 行为 |\n| --- | --- |\n| Android | 原生复习器经 MethodChannel/JS 协议，`AnkiHtmlCardView` 用 WebView 渲染保真卡 |\n| iOS | 原生 WKWebView 复习器（`ios/Runner/AnkiReviewer/`），自定义 scheme `turna-anki://anki.local` 提供渲染资产与媒体，与 Android 协议对齐 |\n| 桌面 / Web | 不实例化 WebView，降级为剥离标签的纯文本视图 |\n\n降级保留可读内容和评分入口，不显示空白卡。\n\n> 「现场解密 / 预渲染缓存」能力已放弃：`anki_prerendered_html` 表在 schema v22 就被 drop，相关写入与文案一并删除。排查渲染问题不要再找「预渲染失败记录」。\n\n## JavaScript\n\n`AnkiHtmlCardView` 的 `javascriptMode` 由两个条件放开：`allowJs`（notetype 模板含 `<script>` 时置位）或 `typeAnswerEnabled`（`type:Field` 键入模板需要输入桥）。Official 模板卡当前以 `allowJs: true` 渲染。\n\n- 键入卡的答案文本通过 `ankiTypeAnswer` 通道回传 Flutter —— **评分永不信任页面 JS**。\n- JS 关闭的卡不安装任何 JS 通道（包括高度上报）。\n- 设置 → 旧版与兼容性里有 `ankiForceDisableJs` 强制关 JS 的兜底开关。\n- 执行 JavaScript 不等于开放网络，见下节。\n\n## 网络隔离\n\nWebView 的 `NavigationDelegate` 只放行 `file:` / `data:` / `about:` 等本地导航，其余一律 `prevent` —— 模板脚本无法通过页面跳转访问外部地址。相对路径的 `<img>` / `<audio>` 经 `<base href="file:///…">` 解析到该次导入的媒体目录（`mediaBasePath`）。\n\n## 媒体\n\n- 缺失图片显示占位，不阻塞评分。\n- 原音频失败时可对卡片文本执行系统 TTS。\n- `cardTextScale` 可访问性设置用于放大卡片文本。不同复习器走不同通道：Dart WebView 轨注入 `html{zoom}`，Android 原生复习器走 `WebSettings.textZoom`，iOS 原生复习器经 `setTextZoom`（钳制 100–200）注入 `WKUserScript`。100% 时不注入，保留原模板样式。\n\n## 安全模式\n\n安全模式是系统健康里的运行时覆盖：强制收敛异常行为，但不改写用户保存的设置，退出后恢复进入前的配置。\n\n## 相关文档\n\n- [导入 Anki 牌组](/guide/anki-import)\n- [设置系统](/guide/settings)\n- [本地数据与隐私](/guide/data-and-privacy)\n',Ns=`# Anki 集成

Turna 内嵌官方 Anki 内核（Rust 编写，经 FFI 调用）。\`.apkg\` 导入后由 Official Collection 持有 note、card、revlog 与正式调度状态。Android arm64 与 iOS 走同一条生产路径（iOS 为静态链接 rslib + WKWebView 复习器）。\`.colpkg\` 当前不属于生产导入合同。

::: warning 验收状态
Official Anki 当前口径是**「验收 NO-GO；迁移中」**。

- Android 写侧链路（导入→账本→视图→删除收敛）曾于 2026-09-02 在真机以 **debug 构建**证明成立；同夜暴露的一个课程装载缺陷已在代码层修复，但**修后未在任何 Android 设备复跑**。
- iOS 侧于 2026-09-26 完成**模拟器** E2E（真 \`.apkg\` 导入 + 复习器渲染），非真机。
- **生产 bundle 的完整用户流从未验证。**

因此本文档不写「迁移完成」，也不写「Android 可正常使用」。两项限制仍开放未定：引擎生命周期耦合可能使物理删除延迟到下次导入；同 GUID 冲突的来源所有权策略尚未定案。
:::

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
3. 检查 notetype 映射与预览。
4. 写入 Official Collection。
5. 建立课程投影与 source scope。
6. 通过共享复习入口启动 Official review session。

## 渲染

- 保真模板卡默认就经 WebView 渲染（Android / iOS），以保留原模板的 HTML、CSS 与脚本行为。
- 桌面与 Web 不实例化 WebView，降级为剥离标签的纯文本视图。
- 卡片网络被无条件阻断，无法通过设置放开；JavaScript 另有独立开关。两者权限不同，执行 JavaScript 不等于开放网络。
- 渲染失败依次降级，不能让复习停在空白卡。

## 数据在哪

牌组、媒体与复习记录保存在设备本地，不要求账号或 AnkiWeb。删除牌组、清缓存和清除应用数据是不同操作。

## 下一步

- [导入 Anki 牌组](/guide/anki-import)
- [卡片渲染与网络隔离](/guide/anki-rendering)
`,Ms=`# 音频、TTS 与朗读

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
`,Vs=`# 导入课程包\r
\r
外部课程通过 \`.turnapack\` 进入 Turna。LibreLingo 等社区课程的 YAML 源在离线工具中转换成 \`.turnapack\` 后，即可像内置课程一样学习、复习和管理。\r
\r
包有两个版本：\`turnapack/1\` 是单个 JSON 文件（无媒体），\`turnapack/2\` 是带 \`media/\` 的压缩包。手工制作的纯 JSON 内容可以用 \`.json\` 扩展名导入，格式契约见[外部课程包](/authoring/course-pack)。\r
\r
::: info 没有内置课程商店\r
应用不提供在线下载。\`.turnapack\` 文件需要自行转换（见[外部课程包](/authoring/course-pack)）或从他人处获得，再手动导入。\r
:::\r
\r
## 导入步骤\r
\r
1. 在学习页顶栏点击地球图标，进入「课程管理」。\r
2. 滚动到底部「添加课程」区，点击「导入课程包」。\r
3. 在文件选择器中选择 \`.turnapack\` 文件（手工制作的纯 JSON 包也可以是 \`.json\`）。\r
4. 等待进度走完：解析课程包 → 校验课程内容 → 写入课程库。\r
5. 成功提示会显示课程名、章节数与词条数，新课程随即出现在课程列表中。\r
\r
导入包的 \`language.code\` 决定它在课程列表中的身份：两位或三位小写字母，且**不能占用内置课程的语言码**，也不能是保留字 \`anki\`。\r
\r
## 重复导入与覆盖确认\r
\r
对已安装的语言再次导入时，应用先弹出「替换现有课程？」确认：\r
\r
- 新包中**仍然存在**的词条与内容，学习进度保留。\r
- 新包中**被移除**的内容，其复习进度、错题等记录一并清除。\r
- 点「取消」则不写入任何内容。\r
\r
取消确认属于正常退出，不算导入失败。\r
\r
## 卸载与恢复\r
\r
- 在课程管理页可移除导入的课程，移除前需确认。\r
- 移除后语言出现在「已卸载的语言」区，可随时点「恢复」——应用保留了当时导入的 \`.turnapack\` 副本，恢复时重新解包播种，无需再找原文件。\r
- 如果保留的包文件不可用（例如系统清理了应用数据），会提示「无法恢复，需重新导入课程包」。\r
\r
## 备份边界\r
\r
备份覆盖课程数据库（含导入课程的学习记录与语言元信息），**不覆盖** \`.turnapack\` 包文件本身。换设备或清除应用数据后，需要重新执行一次导入。建议把原始 \`.turnapack\` 文件放在应用之外的备份位置，见[本地数据与隐私](/guide/data-and-privacy#备份原则)。\r
\r
## 限制\r
\r
- 导入课程的内容在应用内只读；不能用桌面课程编辑器修改，需要改动时重新生成并覆盖导入。\r
- 包内媒体（图片 / 音频）随导入解压到应用私有目录，仅在删除课程时清理。\r
- 没有音频媒体的包使用 TTS 朗读听力题，效果取决于设备 TTS 对目标语言的支持。\r
\r
## 相关文档\r
\r
- [外部课程包（.turnapack）](/authoring/course-pack)：格式契约与 LibreLingo 转换工具\r
- [课程结构](/guide/curriculum)\r
- [本地数据与隐私](/guide/data-and-privacy)\r
`,Ds=`# 课程结构

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

级别写在应用仓库 \`assets/courses/turkish/index.json\`（当前内容版本 12）。较低一级达到掌握度后才解锁下一级。

| 级别 | 含义 | Section | 这一级在学什么 |
| --- | --- | --- | --- |
| A1 | 入门 | 1–3 | 问候、基础词汇、简单对话 |
| A2 | 基础 | 4 | 把已学内容说得更顺 |
| B1 | 进阶 | 5–6 | 日常对话，并按语境表达不同看法 |
| B2 | 自如 | 7–8 | 抽象话题，以及在多个题目之间转换 |

较低等级要达到一定掌握度后，才会解锁下一等级，对应可理解输入里的 i+1：先接触略高于当前水平的内容。

## 题目形态

课程里会出现认词卡、单选 / 多选、填空、句子翻译、听音选词、听写、听音理解等。它们都是检索练习，而不只是「考试」。

## 下一步

- [六种课型](/guide/lesson-types)
- [教师如何改一课](/authoring/teacher-guide)
`,Rs=`# 本地数据与隐私

Turna 的默认运行模型是单人、本地、离线。不存在必需的账号、云后端、排行榜或推送依赖。启用外部 AI 或卡片网络访问时，数据边界发生变化，必须由用户显式配置。

![数据边界：本地工作区 vs 可选外部能力](/images/guide/data-boundary.svg)

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
| AI 缓存 | 内存缓存，进程退出即失效 | 可再生成 |
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
| WebDAV 远程备份 | 用户配置自建服务器并主动执行 | 完整备份：课程库、偏好、Anki Collection 与媒体 |
| 代码和课程更新 | 用户主动执行 | 标准下载请求 |

Anki 卡片网络是**硬阻断**，没有任何设置可以放开：复习器的导航委托只放行 \`file:\` / \`data:\` / \`about:\`，其余一律拦截。它与 JavaScript 权限是两回事，JavaScript 另有独立开关。

WebDAV 备份是把数据上传到**用户自己的服务器**，不属于自动上传；未配置或未主动执行时不会发生。凭据存放在系统安全存储中。

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
`,js=`# 课程编辑器

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
`,Es=`# 常见问题

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

## 能否导入 LibreLingo 课程

可以，但不直接读 YAML。先用离线工具把 LibreLingo 课程转成 \`.turnapack\`（见[外部课程包](/authoring/course-pack)），再到「课程管理 → 导入课程包」安装（见[导入课程包](/guide/course-pack)）。

## 为什么复杂 Anki 卡片没有网络

卡片网络是**始终阻断**的，无法通过设置放开。HTML 模板可能包含未知脚本和远程请求，复习器的导航委托只放行 \`file:\` / \`data:\` / \`about:\`，其余一律拦截。注意这与 JavaScript 权限无关——JavaScript 可以单独关闭，但不存在「允许卡片联网」的开关。

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

正常的缓存清理只删除可再生成的数据，主要是 AI 响应缓存（内存级，退出即失效）与运行时图片缓存。早期版本存在 Anki 预渲染 HTML 缓存，该表已在 schema v22 删除、整条路径放弃，因此清缓存不会再动它。清除应用数据、数据库或牌组是不同操作。

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
`,Fs=`# 核心能力一览

先看这一页建立地图，细节进各功能页。产品主页的卡片和预览对应同一套能力。

## 离线与本地优先

- 课程与学习记录存在设备上，关掉网络也能学和复习。
- 只在你主动同步或更新时联网，默认不上传学习记录。
- 无需账号，没有广告、排行榜或付费墙。

## FSRS 智能复习

内置开源 FSRS：Anki 牌组走 \`fsrs-rs\`，课程词走 Dart 实现，都是 21 参数的 FSRS-6。详见 [FSRS 复习](/guide/fsrs)。

## Anki 兼容

复用官方 Anki 内核。\`.apkg\` 导入后投影成课程树，可以按课时推进，也可以看原卡。调度仍由官方 Scheduler 持有，不写入内置课程的错题本或 FSRS 记录。详见 [Anki 集成](/guide/anki)。

## 外部课程包

LibreLingo 等社区课程经离线工具转成 \`.turnapack\` 后可直接导入，学习、复习与卸载恢复与内置课程一致。详见 [导入课程包](/guide/course-pack) 与 [外部课程包格式](/authoring/course-pack)。

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

`,Us=`# FSRS 复习

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

![FSRS 评分 → 状态更新 → 再调度闭环与关键默认参数](/images/guide/fsrs-loop.svg)

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
`,Bs=`# 快速开始

本文带你 5 分钟把 Turna Web 在本地跑起来。

## 环境要求

- Node.js **20** 或更高版本
- npm 10+（随 Node 一起安装即可）
- 任意现代浏览器（Chrome / Edge / Firefox / Safari）

## 获取代码

\`\`\`bash
git clone https://gitee.com/dhwdwf3/turna-web.git
cd turna-web
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

::: tip 动效降级
触屏设备和开启了「减少动态效果」的系统会自动关闭指针追踪、视差与 3D 倾斜。
:::

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
`,Hs=`# 安装应用

本文描述 Turna 客户端的安装边界。Web 产品主页与 VitePress 文档站不是学习客户端，不保存课程进度，也不执行复习调度。

## 平台状态

| 平台 | 状态 | 能力边界 |
| --- | --- | --- |
| Android | 主力平台 | 支持课程、SQLite、TTS、Official Anki Core 与正式发布产物 |
| iOS | 保留支持 | 支持基础课程与 WKWebView 复习器；Official Anki 走与 Android 同一条生产路径（rslib 静态链接），当前仅完成模拟器验证 |
| Web | 有限支持 | 不提供原生 WebView 保真；本地数据库与原生插件能力受浏览器限制 |
| HarmonyOS / OHOS | 已停止 | 不再生成产品构建，不再增加适配 |

::: warning Official Anki 验收状态
Official Anki 当前口径是**「验收 NO-GO；迁移中」**。Android 写侧仅在真机以 **debug 构建**验证过，生产 bundle 尚未验证；iOS 侧为模拟器 E2E。不得宣称「迁移完成」或「Android 可正常使用」。
:::

## 从源码运行

环境要求：官方 Flutter SDK \`>=3.2.3 <4.0.0\`。Android 构建使用 JDK 17。

\`\`\`bash
git clone https://github.com/DsDG1/turna.git
cd turna
flutter pub get
flutter run
\`\`\`

> 仓库改名后远端不一致：GitHub 已是 \`turna\`，gitee 远端仍叫 \`dhwdwf3/Varnamalaplus.git\`（克隆后 \`cd\` 进去的目录名是 \`Varnamalaplus\`，除此之外无区别）。GitHub 通常更新更快。

生成文件已经提交到仓库。普通克隆不执行 \`build_runner\`。仅当 Freezed、JsonSerializable、AutoRoute、Injectable 或 drift 注解/表定义发生变化时重新生成：

\`\`\`bash
make gen
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
`,Js="# 交互题型\n\nInteraction 是课程运行时的最小可执行单元。渲染器分发不直接比较 `runtimeType`——freezed 生成的是私有实现类（如 `_$ShowWordImpl`），必须先经 `_handlesTypeFor()` 映射到公开接口类型再匹配。写新渲染器时在 `di/renderer_module.dart` 登记即可，无需改分发逻辑。\n\n## 已定义类型\n\n| 能力维度 | `runtimeType` | 输入 | 结果 |\n| --- | --- | --- | --- |\n| 词汇呈现 | `showWord` | 词项、释义、音频 | 展示完成 |\n| 接受性词汇 | `multipleChoice` | 单个答案 | 正误 |\n| 接受性词汇 | `multiSelect` | 多个答案 | 集合匹配结果 |\n| 产出 | `fillBlank` | 文本 | 标准化后匹配 |\n| 产出 | `translateSentence` | 翻译文本 | 规则或配置判定 |\n| 句法 | `reorderSentence` | 词块顺序 | 顺序匹配 |\n| 听写 | `typeTheWord` | 听到的词 | 拼写匹配 |\n| 听力 | `listenAndPick` | 音频后的选择 | 正误 |\n| 听力 | `listenOnly` | 音频 | 播放完成 |\n| 阅读 | `readingMcq` | 篇章后的选择 | 正误 |\n| 阅读 | `readingTrueFalse` | 真 / 假 | 正误 |\n| 阅读 | `readingShortAnswer` | 简答 | 配置判定 |\n| Anki 翻卡 | `ankiCard` | 原卡正面 / 背面文本 | 翻面 + 课程结果 |\n| Anki 保真 | `ankiHtmlCard` | 原卡 HTML | 见下方说明 |\n\n共 14 种（`lib/domain/course/interaction.dart` 的 sealed union，`tool/gui/src/backend/schema_constants.py` 保持一致）。\n\n两个 Anki 题型的区别：\n\n- **`ankiCard`**：导入卡片的普通翻卡形态（正面 → 点按 → 背面），用于课时体与 Official 复习投影的纯文本卡。\n- **`ankiHtmlCard`**：携带 `frontHtml` / `backHtml` / `allowJs` / `mediaBasePath` 的保真卡。Official 复习路径用 WebView 按原模板渲染；**课时体与错题回放里该类型的渲染器已退役**（`AnkiHtmlCardRetiredRenderer`），显示为「确认后继续」占位卡 —— 新课程不要再产出 `ankiHtmlCard` 课时项。\n\n## 设计规则\n\n### 先呈现，后检索\n\n新词首次出现时先使用 `showWord` 或具有明确上下文的输入。不得在没有任何输入的情况下把陌生项目直接作为高强度产出题。\n\n### 每题只验证一个主要目标\n\n题干可以包含上下文，但评分目标必须明确。例如听力题验证语音识别时，不同时要求复杂拼写和语法变形，除非课时目标明确要求组合能力。\n\n### 干扰项必须可解释\n\n选择题干扰项应来自真实易混项、相近形式或当前课程范围。随机无关词会提高表面难度，但不提供有效诊断。\n\n### 标识符保持稳定\n\nInteraction `id` 用于定位、错误记录和测试。发布后不得因排序调整自动重编号。\n\n## 评分映射\n\n普通课程题通常使用二元结果：\n\n```text\npass -> Good\nfail -> Again\n```\n\n显式量表可以映射为四档评分。Anki 正式复习直接使用 Again、Hard、Good、Easy。显示文本可以本地化，调度枚举不可重新定义。\n\n## 内容检查\n\n前四项由工具强制，`course_cli.py` 会报错：\n\n- `id` 在目标作用域内唯一且稳定。\n- 引用的 `wordId`、`expressionId`、`grammarPointId` 存在。\n- 音频题的 `audioAsset` 只出现在听力课中。\n- `stages` 与 `questions` 不同时声明。\n\n以下几项**工具不校验**，需人工把关：\n\n- `runtimeType` 是否已注册——未知类型不会报错，只会在运行时降级为占位 `showWord`。\n- 选择题答案下标 `correctIndex` / `correctIndices` 是否落在 `options` 范围内。\n- 空字符串、重复选项与无解题目。\n- 音频能否真正播放（`audioAsset` 缺失只产生 warning，且其路径解析与磁盘布局不一致）。\n\n## 相关文档\n\n- [Lesson JSON 结构](/authoring/lesson-schema)\n- [课型说明](/guide/lesson-types)\n- [校验与 Lint](/authoring/validation)\n",Gs=`# 标准学习流程

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
`,Ws=`# 课型说明

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
`,qs=`# 记忆状态与评分

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
`,zs=`# 错题与弱项

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
`,Ks=`# 复习系统

复习系统负责从本地状态中选择到期项目、提交评分、更新记忆状态并记录历史。它不负责定义课程内容。

## 项目来源

| 来源 | 调度所有者 | 说明 |
| --- | --- | --- |
| 课程词汇、表达、语法 | Turna FSRS | 使用 Dart \`FsrsEngine\` |
| Official Anki 卡片 | Official Anki scheduler | 使用 rslib FFI 会话 |
| 错题专项 | 错题与课程状态 | 可重新组装练习，不替代正式 SRS |
| 弱词专项 | SRS 与学习证据 | 选择稳定度低或近期失败项目 |

::: warning 所有者边界
不同所有者不得在运行时混写同一张卡片的调度状态。Official owner 不可用时应关闭相关复习，而不是静默改用 Turna FSRS。
:::

## 队列生命周期

1. 读取当前时间与本地到期状态。
2. 按来源和配置构造队列。
3. 展示题目或卡片正面。
4. 接收二元或四档评分。
5. 调度器计算新状态和 due。
6. 在事务边界内写入状态与历史。
7. 从队列移除或按重学规则重新插入。

![复习队列生命周期：课程 FSRS 车道与 Official Anki 车道分离](/images/guide/review-queue.svg)

## 当日重学

失败项目进入短间隔重学。默认短步进为 10 分钟。当日失败次数达到 \`maxSameDayFails\` 后，due 推迟到次日，避免在单日内无限循环同一项目。

## 撤销

撤销依赖上一条复习历史和评分前状态。评分写入期间，该项目处于 in-flight 状态，不接受并发撤销。写入完成后才允许恢复。

## 同胞卡

Anki 同一 note 生成的多张 card 可按 \`importId + noteId\` 归组。复习中可对卡片执行 bury / suspend 操作（\`BURY_OR_SUSPEND_CARDS\` 契约），这是用户手动动作，不是自动埋藏开关 —— 当前没有「同日新卡 / 复习卡自动隐藏」的设置项。

## 难卡

难卡（leech）判定是固定规则：\`lapses >= 5 且 lapses > reps\`（\`fsrs_engine.dart\`），不可配置。leech 在到期队列中被降权排到末尾，并计入记忆曲线的独立成熟度桶 —— 当前没有自动暂停和难卡专项视图。

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
`,Qs=`# 设置系统

设置首页是导航型落地页：顶部个人卡 + 快捷设置 + 分区入口。设置项必须连接到运行时行为；尚未接入的实验项应禁用并标注状态。

## 设置分区

| 分区 | 典型内容 |
| --- | --- |
| 账号 | 昵称 / 头像 / 每日目标 |
| 学习 | 学习目标、每日提醒、**Anki 区**（每日新卡上限默认 20、每日复习上限默认 200、每日挑战 Anki 卡） |
| 外观与声音 | 主题（亮/暗/跟随系统）、音效、触觉 |
| 可访问性 | 文本缩放、卡片文本缩放、减少动态、高对比等 |
| 数据与备份 | 缓存、导出、迁移包、存储维护 |
| 高级 | 二级锚点：**AI 连接**（provider / 模型 / key）、**存储与性能**、**系统健康与诊断**、**旧版与兼容性**（含 \`ankiForceDisableJs\` 等实验开关） |
| 关于 | 版本信息、更新日志、隐私详情 |
| 开发者（Fun Lab） | 仅 debug 构建可见 |

::: tip 入口位置
AI 相关设置不在独立分区，在「高级 → AI 连接」；Anki 排期偏好在「学习」页的 Anki 区。没有单牌组覆盖编辑器。
:::

## 存储维护

存储页区分不可再生成数据和可再生成数据：

| 数据 | 清理行为 |
| --- | --- |
| 课程数据库 | 不在普通缓存清理中删除 |
| Anki Collection / 学习状态 | 不在普通缓存清理中删除 |
| Anki 媒体 | 仅通过明确的牌组或媒体维护操作处理 |
| AI 缓存 | 可清理，不删除课程和会话真相源 |
| 日志 | 可独立清理，不自动改变系统健康分数 |

数据库完整性检查使用只读 \`PRAGMA integrity_check\`。索引维护使用 \`REINDEX\` 和 \`PRAGMA optimize\`。这些操作不得附带删除学习数据。

## 系统健康

本地监控（\`SystemHealthMonitor\`）按指纹聚合最近 24 小时内的异常日志事件：warning 组计 1 分，error 组计 3 分，fatal 直接把分数钉到严重线。**计分按组不按次数**——同一指纹的重复出现只更新该组计数与最近时间，不重复加分。

| 分数 | 状态 |
| ---: | --- |
| 0–9 | 正常 |
| 10–39 | 需要注意 |
| ≥40 或 fatal | 严重 |

分数只随时间衰减（组移出 24h 窗口自动不计分）或随事件 7 天无复发自动过期 —— **任何界面操作都不能扣分**。「确认」只标记已读；真正的解除需要「运行自检」（数据库完整性探针 + 重算分数）通过且衰减分 <10。新事件会重新打开警报并作废旧的自检结论。

另有独立的数据完整性阻断标记（\`dataIntegrityBlock\`）：只由有直接数据损坏证据的调用点上报，不从日志分数推导。

## 安全模式

安全模式是运行时覆盖，不覆盖已保存偏好，退出后恢复原配置。

## 相关文档

- [卡片渲染与网络隔离](/guide/anki-rendering)
- [可访问性](/guide/accessibility)
- [本地数据与隐私](/guide/data-and-privacy)
`,Ys=`# 故障排查

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

确认文件为 \`.apkg\`、Official runtime 可用、ABI 匹配、存储足够。\`.colpkg\` 在 Android 与 iOS 生产路径中同样 fail-closed。

### 卡片空白

检查模板字段、媒体与 JavaScript。不要直接开放网络作为第一处理步骤——卡片网络本就是硬阻断，无法放开。另外注意：「预渲染失败记录」已不存在，预渲染缓存路径早已放弃，不要再找这一项。

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
`,Xs=`# 什么是 Turna？

Turna（土耳其语中意为「鹤」）是一款**本地优先、离线可用**的开源语言学习应用，目前专注土耳其语。

## 解决的问题

很多语言学习工具强依赖云端：没网就停摆、课程固定不能改、复习节奏全靠服务器决定。Turna 走的是相反的路：

- **离线能用**：课程数据存在本地，无网络时照常学习与复习。
- **节奏可调**：内置开源 FSRS 算法，按你的真实记忆曲线安排复习。
- **课程可改**：桌面端提供课程编辑器，课时蓝图与内容可双向编辑。
- **牌组可带走**：\`.apkg\` 导入官方 Anki 内核。调度与内置课程分开，不写入错题本。

## 适合谁

- 想系统学习土耳其语、但不想被网络与订阅绑住的人。
- 已经在用 Anki 复习、希望牌组「课程化」、按课时推进的人。
- 喜欢研究记忆算法、对 FSRS 的工程实现感兴趣的人。
- 想二次开发或自部署语言学习工具的开发者。

## 当前阶段

Turna 是**持续开发中的开源项目**。正式课程目前只有土耳其语，A1 到 B2 的 8 个 Section 都已填入真实内容。仓库里的法语目录只是多语言共存的验收夹具，不是对外课程。

功能上，「离线学习 + FSRS 复习 + AI 伴学 + 课程编辑器」已经可用；Anki 导入链正在迁移验收中，详见 [Anki 集成](/guide/anki) 的状态说明。客户端是 Flutter 应用；本站是产品页和文档，不保存学习进度。

## 下一步

- [5 分钟本地跑起来](/guide/getting-started)
- [核心能力一览](/guide/features)
- [课程结构](/guide/curriculum)
`,Zs=`# 如何丰富文档

文档要变多，靠的是**固定目录 + 改写已有材料 + 按读者分层**，不是把应用仓库里的 Markdown 整盘搬过来。

Turna 已经有两处现成的内容源：

| 来源 | 适合变成什么 | 不该原样公开的 |
| --- | --- | --- |
| 本仓库专题页（\`anki.html\`、\`fsrs.html\`、\`ai.html\`、\`editor.html\`、\`curriculum.html\`） | 功能说明、概念入门 | 纯视觉演示代码 |
| 应用仓库 \`turna/docs/\` | 教师指南、课程约定、架构摘要 | ADR、迁移计划、审计报告、施工 playbook |

应用仓库 \`docs/\` 下 Markdown 已过百篇。其中大部分是一次性工程文档（\`official-anki-migration/\`、\`*-plan.md\`、\`decisions/\`）。这些对贡献者有用，对产品文档站点有害：会过期、难检索、读起来像工单。

## 先定读者，再开目录

每一页只服务一类人：

1. **学习者 / 访客**：Turna 是什么、怎么跑起来、FSRS / Anki / AI 能做什么。
2. **老师 / 课程作者**：怎么用编辑器改一课、JSON 目录怎么摆。
3. **开发者**：架构从哪读、文档怎么加，而不是把 \`project-guide.md\` 整篇贴进来。

对应到本站目录：

\`\`\`text
docs/
  index.md                 # 文档门户
  guide/                   # 学习者与访客（侧栏四组：开始 / 学习系统 / 外部能力 / 运行与维护）
    what-is-turna.md
    getting-started.md
    features.md
    fsrs.md
    anki.md
    …
  authoring/               # 老师与课程作者（侧栏键 /authoring/）
    teacher-guide.md
    course-layout.md
  developer/               # 开发者（侧栏键 /developer/）
    architecture.md
    local-data.md
    testing.md
\`\`\`

\`guide/\`、\`authoring/\`、\`developer/\` 是三个独立的 sidebar 键（见 \`config.mts\` 的 \`sidebar\`），改动某一区的分组只影响该区。

## 从已有材料改写，不要从零写

推荐顺序：

1. **专题页 → \`guide/\`**  
   产品主页上的 Anki / FSRS / AI / 编辑器 / 课程页已经写过面向用户的句子。文档页用同样的事实，补上步骤、限制和链接，不要再写一套营销文案。
2. **\`project-guide.md\` → 拆章节**  
   应用仓库的项目指南是单一事实来源。按「复习 / Anki / AI / 编辑器 / 课程格式」各抽一章，改写成 1 屏能读完的文档页。不要整篇镜像。
3. **\`docs/authoring/\` → \`authoring/\`**  
   教师指南、课型模板、课程目录约定已经是给人看的，几乎可以直接搬，只需改掉指向源码的相对路径。
4. **内容清单 → 课程页附录**  
   \`content_inventory_current.md\` 适合摘要（Section 数、词汇数），不适合把整份词表贴进 VitePress——它是脚本生成的，行数会随内容变动，别在任何页面写死它的行数。

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
- 侧栏分组保持浅：\`guide/\` 下是 开始 / 学习系统 / 外部能力 / 运行与维护 四组，\`authoring/\` 与 \`developer/\` 各一组。超过两层读者就不会点。

## 和代码同步

文档不是第二个事实来源。行为变了，先改应用仓库的 \`project-guide.md\` 或 \`authoring/\`，再改本站对应页。本站负责「读得快」，应用仓库负责「写得全」。
`,na=`---
layout: home

hero:
  name: TURNA / DOCUMENTATION / 01
  text: Turna 系统文档
  tagline: 44 篇技术文档。覆盖部署、课程结构、记忆调度、Anki、AI、数据边界、课程生产、构建与质量门禁。
  actions:
    - theme: brand
      text: 开始部署
      link: /guide/getting-started
    - theme: alt
      text: 查看系统能力
      link: /guide/features
---

<HomeContent />
`;async function ea(n,e=navigator.clipboard,t=document){if(e)try{return await e.writeText(n),!0}catch{}try{const r=t.createElement("textarea");r.value=n,r.style.position="fixed",r.style.opacity="0",t.body.appendChild(r),r.select();const i=t.execCommand("copy");return r.remove(),i}catch{return!1}}const ta={key:0,class:"copy-page-source"},ra=v({__name:"CopyPage",setup(n){const{page:e}=Ln(),t=Object.assign({"../../authoring/ai-control-modes.md":ds,"../../authoring/ai-course-generation.md":us,"../../authoring/audio-assets.md":ps,"../../authoring/course-layout.md":ms,"../../authoring/course-pack.md":gs,"../../authoring/lesson-schema.md":hs,"../../authoring/release-checklist.md":vs,"../../authoring/resource-files.md":fs,"../../authoring/teacher-guide.md":_s,"../../authoring/textbook-import.md":bs,"../../authoring/validation.md":ks,"../../developer/android-build.md":ys,"../../developer/architecture.md":As,"../../developer/glossary.md":Ss,"../../developer/local-data.md":Is,"../../developer/testing.md":Ls,"../../developer/web-docs-build.md":xs,"../../guide/accessibility.md":ws,"../../guide/ai-configuration.md":Ps,"../../guide/ai-workflows.md":Ts,"../../guide/ai.md":$s,"../../guide/anki-import.md":Cs,"../../guide/anki-rendering.md":Os,"../../guide/anki.md":Ns,"../../guide/audio-and-tts.md":Ms,"../../guide/course-pack.md":Vs,"../../guide/curriculum.md":Ds,"../../guide/data-and-privacy.md":Rs,"../../guide/editor.md":js,"../../guide/faq.md":Es,"../../guide/features.md":Fs,"../../guide/fsrs.md":Us,"../../guide/getting-started.md":Bs,"../../guide/install-app.md":Hs,"../../guide/interaction-types.md":Js,"../../guide/learning-workflow.md":Gs,"../../guide/lesson-types.md":Ws,"../../guide/memory-state.md":qs,"../../guide/mistakes-and-weak-items.md":zs,"../../guide/review-system.md":Ks,"../../guide/settings.md":Qs,"../../guide/troubleshooting.md":Ys,"../../guide/what-is-turna.md":Xs,"../../guide/writing-docs.md":Zs,"../../index.md":na}),r=w("idle");let i;const c=A(()=>t[`../../${e.value.relativePath}`]||""),a=A(()=>r.value==="copied"?"已复制全文":r.value==="failed"?"复制失败":"复制全文");async function d(){c.value&&(r.value=await ea(c.value)?"copied":"failed",i&&clearTimeout(i),i=setTimeout(()=>{r.value="idle"},1800))}return Nn(()=>{i&&clearTimeout(i)}),(m,b)=>c.value?(s(),u("div",ta,[b[1]||(b[1]=o("span",null,"FORMAT / MARKDOWN · SCOPE / CURRENT PAGE",-1)),o("button",{type:"button",class:$({copied:r.value==="copied"}),onClick:d},[b[0]||(b[0]=o("svg",{viewBox:"0 0 24 24","aria-hidden":"true"},[o("path",{d:"M8 7V5.8C8 4.8 8.8 4 9.8 4h8.4c1 0 1.8.8 1.8 1.8v8.4c0 1-.8 1.8-1.8 1.8H17M5.8 8h8.4c1 0 1.8.8 1.8 1.8v8.4c0 1-.8 1.8-1.8 1.8H5.8c-1 0-1.8-.8-1.8-1.8V9.8C4 8.8 4.8 8 5.8 8Z"})],-1)),R(" "+S(a.value),1)],2)])):h("",!0)}}),oa={extends:In,Layout:()=>An(In.Layout,null,{"doc-before":()=>An(ra)}),enhanceApp({app:n}){n.component("HomeContent",cs)}};export{oa as R,mi as c,L as u};
