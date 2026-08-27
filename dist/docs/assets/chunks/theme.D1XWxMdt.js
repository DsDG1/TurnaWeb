const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/VPLocalSearchBox.CuzDx02y.js","assets/chunks/framework.BW2T23B9.js"])))=>i.map(i=>d[i]);
import{d as f,c as d,r as m,n as w,o as a,a as D,t as I,b,w as v,T as pn,e as h,_ as S,u as Ln,i as Un,f as Hn,g as V,h as y,j as i,k as l,l as G,m as ln,p as P,q as U,s as Y,v as J,x as vn,y as hn,z as jn,A as Bn,F as T,B as C,C as W,D as X,E as g,G as $n,H as F,I as Pn,J as Z,K as B,L as nn,M as Jn,N as Tn,O as cn,P as xn,Q as wn,R as en,S as Gn,U as Wn,V as qn,W as Nn,X as Cn,Y as zn,Z as Kn,$ as On,a0 as Qn,a1 as Yn,a2 as an,a3 as yn}from"./framework.BW2T23B9.js";const Xn=f({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(n){return(e,t)=>(a(),d("span",{class:w(["VPBadge",n.type])},[m(e.$slots,"default",{},()=>[D(I(n.text),1)])],2))}}),Zn={key:0,class:"VPBackdrop"},ne=f({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(n){return(e,t)=>(a(),b(pn,{name:"fade"},{default:v(()=>[n.show?(a(),d("div",Zn)):h("",!0)]),_:1}))}}),ee=S(ne,[["__scopeId","data-v-54a304ca"]]),L=Ln;function te(n,e){let t,s=!1;return()=>{t&&clearTimeout(t),s?t=setTimeout(n,e):(n(),(s=!0)&&setTimeout(()=>s=!1,e))}}function un(n){return n.startsWith("/")?n:`/${n}`}function fn(n){const{pathname:e,search:t,hash:s,protocol:o}=new URL(n,"http://a.com");if(Un(n)||n.startsWith("#")||!o.startsWith("http")||!Hn(e))return n;const{site:c}=L(),r=e.endsWith("/")||e.endsWith(".html")?n:n.replace(/(?:(^\.+)\/)?.*$/,`$1${e.replace(/(\.md)?$/,c.value.cleanUrls?"":".html")}${t}${s}`);return V(r)}function z({correspondingLink:n=!1}={}){const{site:e,localeIndex:t,page:s,theme:o,hash:c}=L(),r=y(()=>{var p,k;return{label:(p=e.value.locales[t.value])==null?void 0:p.label,link:((k=e.value.locales[t.value])==null?void 0:k.link)||(t.value==="root"?"/":`/${t.value}/`)}});return{localeLinks:y(()=>Object.entries(e.value.locales).flatMap(([p,k])=>r.value.label===k.label?[]:{text:k.label,link:se(k.link||(p==="root"?"/":`/${p}/`),o.value.i18nRouting!==!1&&n,s.value.relativePath.slice(r.value.link.length-1),!e.value.cleanUrls)+c.value})),currentLang:r}}function se(n,e,t,s){return e?n.replace(/\/$/,"")+un(t.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,s?".html":"")):n}const oe={class:"NotFound"},ie={class:"code"},ae={class:"title"},re={class:"quote"},le={class:"action"},ce=["href","aria-label"],ue=f({__name:"NotFound",setup(n){const{theme:e}=L(),{currentLang:t}=z();return(s,o)=>{var c,r,u,p,k;return a(),d("div",oe,[i("p",ie,I(((c=l(e).notFound)==null?void 0:c.code)??"404"),1),i("h1",ae,I(((r=l(e).notFound)==null?void 0:r.title)??"PAGE NOT FOUND"),1),o[0]||(o[0]=i("div",{class:"divider"},null,-1)),i("blockquote",re,I(((u=l(e).notFound)==null?void 0:u.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),i("div",le,[i("a",{class:"link",href:l(V)(l(t).link),"aria-label":((p=l(e).notFound)==null?void 0:p.linkLabel)??"go to home"},I(((k=l(e).notFound)==null?void 0:k.linkText)??"Take me home"),9,ce)])])}}}),de=S(ue,[["__scopeId","data-v-6ff51ddd"]]);function Vn(n,e){if(Array.isArray(n))return K(n);if(n==null)return[];e=un(e);const t=Object.keys(n).sort((o,c)=>c.split("/").length-o.split("/").length).find(o=>e.startsWith(un(o))),s=t?n[t]:[];return Array.isArray(s)?K(s):K(s.items,s.base)}function me(n){const e=[];let t=0;for(const s in n){const o=n[s];if(o.items){t=e.push(o);continue}e[t]||e.push({items:[]}),e[t].items.push(o)}return e}function pe(n){const e=[];function t(s){for(const o of s)o.text&&o.link&&e.push({text:o.text,link:o.link,docFooterText:o.docFooterText}),o.items&&t(o.items)}return t(n),e}function dn(n,e){return Array.isArray(e)?e.some(t=>dn(n,t)):G(n,e.link)?!0:e.items?dn(n,e.items):!1}function K(n,e){return[...n].map(t=>{const s={...t},o=s.base||e;return o&&s.link&&(s.link=o+s.link),s.items&&(s.items=K(s.items,o)),s})}function H(){const{frontmatter:n,page:e,theme:t}=L(),s=ln("(min-width: 960px)"),o=P(!1),c=y(()=>{const O=t.value.sidebar,M=e.value.relativePath;return O?Vn(O,M):[]}),r=P(c.value);U(c,(O,M)=>{JSON.stringify(O)!==JSON.stringify(M)&&(r.value=c.value)});const u=y(()=>n.value.sidebar!==!1&&r.value.length>0&&n.value.layout!=="home"),p=y(()=>k?n.value.aside==null?t.value.aside==="left":n.value.aside==="left":!1),k=y(()=>n.value.layout==="home"?!1:n.value.aside!=null?!!n.value.aside:t.value.aside!==!1),$=y(()=>u.value&&s.value),_=y(()=>u.value?me(r.value):[]);function A(){o.value=!0}function x(){o.value=!1}function N(){o.value?x():A()}return{isOpen:o,sidebar:r,sidebarGroups:_,hasSidebar:u,hasAside:k,leftAside:p,isSidebarEnabled:$,open:A,close:x,toggle:N}}function ve(n,e){let t;Y(()=>{t=n.value?document.activeElement:void 0}),J(()=>{window.addEventListener("keyup",s)}),vn(()=>{window.removeEventListener("keyup",s)});function s(o){o.key==="Escape"&&n.value&&(e(),t==null||t.focus())}}function he(n){const{page:e,hash:t}=L(),s=P(!1),o=y(()=>n.value.collapsed!=null),c=y(()=>!!n.value.link),r=P(!1),u=()=>{r.value=G(e.value.relativePath,n.value.link)};U([e,n,t],u),J(u);const p=y(()=>r.value?!0:n.value.items?dn(e.value.relativePath,n.value.items):!1),k=y(()=>!!(n.value.items&&n.value.items.length));Y(()=>{s.value=!!(o.value&&n.value.collapsed)}),hn(()=>{(r.value||p.value)&&(s.value=!1)});function $(){o.value&&(s.value=!s.value)}return{collapsed:s,collapsible:o,isLink:c,isActiveLink:r,hasActiveLink:p,hasChildren:k,toggle:$}}function fe(){const{hasSidebar:n}=H(),e=ln("(min-width: 960px)"),t=ln("(min-width: 1280px)");return{isAsideEnabled:y(()=>!t.value&&!e.value?!1:n.value?t.value:e.value)}}const ge=/\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/,mn=[];function Mn(n){return typeof n.outline=="object"&&!Array.isArray(n.outline)&&n.outline.label||n.outlineTitle||"On this page"}function gn(n){const e=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(t=>t.id&&t.hasChildNodes()).map(t=>{const s=Number(t.tagName[1]);return{element:t,title:be(t),link:"#"+t.id,level:s}});return ke(e,n)}function be(n){let e="";for(const t of n.childNodes)if(t.nodeType===1){if(ge.test(t.className))continue;e+=t.textContent}else t.nodeType===3&&(e+=t.textContent);return e.trim()}function ke(n,e){if(e===!1)return[];const t=(typeof e=="object"&&!Array.isArray(e)?e.level:e)||2,[s,o]=typeof t=="number"?[t,t]:t==="deep"?[2,6]:t;return ye(n,s,o)}function _e(n,e){const{isAsideEnabled:t}=fe(),s=te(c,100);let o=null;J(()=>{requestAnimationFrame(c),window.addEventListener("scroll",s)}),jn(()=>{r(location.hash)}),vn(()=>{window.removeEventListener("scroll",s)});function c(){if(!t.value)return;const u=window.scrollY,p=window.innerHeight,k=document.body.offsetHeight,$=Math.abs(u+p-k)<1,_=mn.map(({element:x,link:N})=>({link:N,top:Se(x)})).filter(({top:x})=>!Number.isNaN(x)).sort((x,N)=>x.top-N.top);if(!_.length){r(null);return}if(u<1){r(null);return}if($){r(_[_.length-1].link);return}let A=null;for(const{link:x,top:N}of _){if(N>u+Bn()+4)break;A=x}r(A)}function r(u){o&&o.classList.remove("active"),u==null?o=null:o=n.value.querySelector(`a[href="${decodeURIComponent(u)}"]`);const p=o;p?(p.classList.add("active"),e.value.style.top=p.offsetTop+39+"px",e.value.style.opacity="1"):(e.value.style.top="33px",e.value.style.opacity="0")}}function Se(n){let e=0;for(;n!==document.body;){if(n===null)return NaN;e+=n.offsetTop,n=n.offsetParent}return e}function ye(n,e,t){mn.length=0;const s=[],o=[];return n.forEach(c=>{const r={...c,children:[]};let u=o[o.length-1];for(;u&&u.level>=r.level;)o.pop(),u=o[o.length-1];if(r.element.classList.contains("ignore-header")||u&&"shouldIgnore"in u){o.push({level:r.level,shouldIgnore:!0});return}r.level>t||r.level<e||(mn.push({element:r.element,link:r.link}),u?u.children.push(r):s.push(r),o.push(r))}),s}const Ie=["href","title"],Ae=f({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(n){function e({target:t}){const s=t.href.split("#")[1],o=document.getElementById(decodeURIComponent(s));o==null||o.focus({preventScroll:!0})}return(t,s)=>{const o=W("VPDocOutlineItem",!0);return a(),d("ul",{class:w(["VPDocOutlineItem",n.root?"root":"nested"])},[(a(!0),d(T,null,C(n.headers,({children:c,link:r,title:u})=>(a(),d("li",null,[i("a",{class:"outline-link",href:r,onClick:e,title:u},I(u),9,Ie),c!=null&&c.length?(a(),b(o,{key:0,headers:c},null,8,["headers"])):h("",!0)]))),256))],2)}}}),Rn=S(Ae,[["__scopeId","data-v-53c99d69"]]),Le={class:"content"},$e={"aria-level":"2",class:"outline-title",id:"doc-outline-aria-label",role:"heading"},Pe=f({__name:"VPDocAsideOutline",setup(n){const{frontmatter:e,theme:t}=L(),s=$n([]);X(()=>{s.value=gn(e.value.outline??t.value.outline)});const o=P(),c=P();return _e(o,c),(r,u)=>(a(),d("nav",{"aria-labelledby":"doc-outline-aria-label",class:w(["VPDocAsideOutline",{"has-outline":s.value.length>0}]),ref_key:"container",ref:o},[i("div",Le,[i("div",{class:"outline-marker",ref_key:"marker",ref:c},null,512),i("div",$e,I(l(Mn)(l(t))),1),g(Rn,{headers:s.value,root:!0},null,8,["headers"])])],2))}}),Te=S(Pe,[["__scopeId","data-v-f610f197"]]),xe={class:"VPDocAsideCarbonAds"},we=f({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(n){const e=()=>null;return(t,s)=>(a(),d("div",xe,[g(l(e),{"carbon-ads":n.carbonAds},null,8,["carbon-ads"])]))}}),Ne={class:"VPDocAside"},Ce=f({__name:"VPDocAside",setup(n){const{theme:e}=L();return(t,s)=>(a(),d("div",Ne,[m(t.$slots,"aside-top",{},void 0,!0),m(t.$slots,"aside-outline-before",{},void 0,!0),g(Te),m(t.$slots,"aside-outline-after",{},void 0,!0),s[0]||(s[0]=i("div",{class:"spacer"},null,-1)),m(t.$slots,"aside-ads-before",{},void 0,!0),l(e).carbonAds?(a(),b(we,{key:0,"carbon-ads":l(e).carbonAds},null,8,["carbon-ads"])):h("",!0),m(t.$slots,"aside-ads-after",{},void 0,!0),m(t.$slots,"aside-bottom",{},void 0,!0)]))}}),Oe=S(Ce,[["__scopeId","data-v-cb998dce"]]);function Ve(){const{theme:n,page:e}=L();return y(()=>{const{text:t="Edit this page",pattern:s=""}=n.value.editLink||{};let o;return typeof s=="function"?o=s(e.value):o=s.replace(/:path/g,e.value.filePath),{url:o,text:t}})}function Me(){const{page:n,theme:e,frontmatter:t}=L();return y(()=>{var k,$,_,A,x,N,O,M;const s=Vn(e.value.sidebar,n.value.relativePath),o=pe(s),c=Re(o,R=>R.link.replace(/[?#].*$/,"")),r=c.findIndex(R=>G(n.value.relativePath,R.link)),u=((k=e.value.docFooter)==null?void 0:k.prev)===!1&&!t.value.prev||t.value.prev===!1,p=(($=e.value.docFooter)==null?void 0:$.next)===!1&&!t.value.next||t.value.next===!1;return{prev:u?void 0:{text:(typeof t.value.prev=="string"?t.value.prev:typeof t.value.prev=="object"?t.value.prev.text:void 0)??((_=c[r-1])==null?void 0:_.docFooterText)??((A=c[r-1])==null?void 0:A.text),link:(typeof t.value.prev=="object"?t.value.prev.link:void 0)??((x=c[r-1])==null?void 0:x.link)},next:p?void 0:{text:(typeof t.value.next=="string"?t.value.next:typeof t.value.next=="object"?t.value.next.text:void 0)??((N=c[r+1])==null?void 0:N.docFooterText)??((O=c[r+1])==null?void 0:O.text),link:(typeof t.value.next=="object"?t.value.next.link:void 0)??((M=c[r+1])==null?void 0:M.link)}}})}function Re(n,e){const t=new Set;return n.filter(s=>{const o=e(s);return t.has(o)?!1:t.add(o)})}const E=f({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(n){const e=n,t=y(()=>e.tag??(e.href?"a":"span")),s=y(()=>e.href&&Pn.test(e.href)||e.target==="_blank");return(o,c)=>(a(),b(F(t.value),{class:w(["VPLink",{link:n.href,"vp-external-link-icon":s.value,"no-icon":n.noIcon}]),href:n.href?l(fn)(n.href):void 0,target:n.target??(s.value?"_blank":void 0),rel:n.rel??(s.value?"noreferrer":void 0)},{default:v(()=>[m(o.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),De={class:"VPLastUpdated"},Fe=["datetime"],Ee=f({__name:"VPDocFooterLastUpdated",setup(n){const{theme:e,page:t,lang:s}=L(),o=y(()=>new Date(t.value.lastUpdated)),c=y(()=>o.value.toISOString()),r=P("");return J(()=>{Y(()=>{var u,p,k;r.value=new Intl.DateTimeFormat((p=(u=e.value.lastUpdated)==null?void 0:u.formatOptions)!=null&&p.forceLocale?s.value:void 0,((k=e.value.lastUpdated)==null?void 0:k.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(o.value)})}),(u,p)=>{var k;return a(),d("p",De,[D(I(((k=l(e).lastUpdated)==null?void 0:k.text)||l(e).lastUpdatedText||"Last updated")+": ",1),i("time",{datetime:c.value},I(r.value),9,Fe)])}}}),Ue=S(Ee,[["__scopeId","data-v-1bb0c8a8"]]),He={key:0,class:"VPDocFooter"},je={key:0,class:"edit-info"},Be={key:0,class:"edit-link"},Je={key:1,class:"last-updated"},Ge={key:1,class:"prev-next","aria-labelledby":"doc-footer-aria-label"},We={class:"pager"},qe=["innerHTML"],ze=["innerHTML"],Ke={class:"pager"},Qe=["innerHTML"],Ye=["innerHTML"],Xe=f({__name:"VPDocFooter",setup(n){const{theme:e,page:t,frontmatter:s}=L(),o=Ve(),c=Me(),r=y(()=>e.value.editLink&&s.value.editLink!==!1),u=y(()=>t.value.lastUpdated),p=y(()=>r.value||u.value||c.value.prev||c.value.next);return(k,$)=>{var _,A,x,N;return p.value?(a(),d("footer",He,[m(k.$slots,"doc-footer-before",{},void 0,!0),r.value||u.value?(a(),d("div",je,[r.value?(a(),d("div",Be,[g(E,{class:"edit-link-button",href:l(o).url,"no-icon":!0},{default:v(()=>[$[0]||($[0]=i("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),D(" "+I(l(o).text),1)]),_:1},8,["href"])])):h("",!0),u.value?(a(),d("div",Je,[g(Ue)])):h("",!0)])):h("",!0),(_=l(c).prev)!=null&&_.link||(A=l(c).next)!=null&&A.link?(a(),d("nav",Ge,[$[1]||($[1]=i("span",{class:"visually-hidden",id:"doc-footer-aria-label"},"Pager",-1)),i("div",We,[(x=l(c).prev)!=null&&x.link?(a(),b(E,{key:0,class:"pager-link prev",href:l(c).prev.link},{default:v(()=>{var O;return[i("span",{class:"desc",innerHTML:((O=l(e).docFooter)==null?void 0:O.prev)||"Previous page"},null,8,qe),i("span",{class:"title",innerHTML:l(c).prev.text},null,8,ze)]}),_:1},8,["href"])):h("",!0)]),i("div",Ke,[(N=l(c).next)!=null&&N.link?(a(),b(E,{key:0,class:"pager-link next",href:l(c).next.link},{default:v(()=>{var O;return[i("span",{class:"desc",innerHTML:((O=l(e).docFooter)==null?void 0:O.next)||"Next page"},null,8,Qe),i("span",{class:"title",innerHTML:l(c).next.text},null,8,Ye)]}),_:1},8,["href"])):h("",!0)])])):h("",!0)])):h("",!0)}}}),Ze=S(Xe,[["__scopeId","data-v-1bcd8184"]]),nt={class:"container"},et={class:"aside-container"},tt={class:"aside-content"},st={class:"content"},ot={class:"content-container"},it={class:"main"},at=f({__name:"VPDoc",setup(n){const{theme:e}=L(),t=Z(),{hasSidebar:s,hasAside:o,leftAside:c}=H(),r=y(()=>t.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(u,p)=>{const k=W("Content");return a(),d("div",{class:w(["VPDoc",{"has-sidebar":l(s),"has-aside":l(o)}])},[m(u.$slots,"doc-top",{},void 0,!0),i("div",nt,[l(o)?(a(),d("div",{key:0,class:w(["aside",{"left-aside":l(c)}])},[p[0]||(p[0]=i("div",{class:"aside-curtain"},null,-1)),i("div",et,[i("div",tt,[g(Oe,null,{"aside-top":v(()=>[m(u.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":v(()=>[m(u.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":v(()=>[m(u.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":v(()=>[m(u.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":v(()=>[m(u.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":v(()=>[m(u.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):h("",!0),i("div",st,[i("div",ot,[m(u.$slots,"doc-before",{},void 0,!0),i("main",it,[g(k,{class:w(["vp-doc",[r.value,l(e).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),g(Ze,null,{"doc-footer-before":v(()=>[m(u.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),m(u.$slots,"doc-after",{},void 0,!0)])])]),m(u.$slots,"doc-bottom",{},void 0,!0)],2)}}}),rt=S(at,[["__scopeId","data-v-e6f2a212"]]),lt=f({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(n){const e=n,t=y(()=>e.href&&Pn.test(e.href)),s=y(()=>e.tag||(e.href?"a":"button"));return(o,c)=>(a(),b(F(s.value),{class:w(["VPButton",[n.size,n.theme]]),href:n.href?l(fn)(n.href):void 0,target:e.target??(t.value?"_blank":void 0),rel:e.rel??(t.value?"noreferrer":void 0)},{default:v(()=>[D(I(n.text),1)]),_:1},8,["class","href","target","rel"]))}}),ct=S(lt,[["__scopeId","data-v-93dc4167"]]),ut=["src","alt"],dt=f({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(n){return(e,t)=>{const s=W("VPImage",!0);return n.image?(a(),d(T,{key:0},[typeof n.image=="string"||"src"in n.image?(a(),d("img",B({key:0,class:"VPImage"},typeof n.image=="string"?e.$attrs:{...n.image,...e.$attrs},{src:l(V)(typeof n.image=="string"?n.image:n.image.src),alt:n.alt??(typeof n.image=="string"?"":n.image.alt||"")}),null,16,ut)):(a(),d(T,{key:1},[g(s,B({class:"dark",image:n.image.dark,alt:n.image.alt},e.$attrs),null,16,["image","alt"]),g(s,B({class:"light",image:n.image.light,alt:n.image.alt},e.$attrs),null,16,["image","alt"])],64))],64)):h("",!0)}}}),Q=S(dt,[["__scopeId","data-v-ab19afbb"]]),mt={class:"container"},pt={class:"main"},vt={class:"heading"},ht=["innerHTML"],ft=["innerHTML"],gt=["innerHTML"],bt={key:0,class:"actions"},kt={key:0,class:"image"},_t={class:"image-container"},St=f({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(n){const e=nn("hero-image-slot-exists");return(t,s)=>(a(),d("div",{class:w(["VPHero",{"has-image":n.image||l(e)}])},[i("div",mt,[i("div",pt,[m(t.$slots,"home-hero-info-before",{},void 0,!0),m(t.$slots,"home-hero-info",{},()=>[i("h1",vt,[n.name?(a(),d("span",{key:0,innerHTML:n.name,class:"name clip"},null,8,ht)):h("",!0),n.text?(a(),d("span",{key:1,innerHTML:n.text,class:"text"},null,8,ft)):h("",!0)]),n.tagline?(a(),d("p",{key:0,innerHTML:n.tagline,class:"tagline"},null,8,gt)):h("",!0)],!0),m(t.$slots,"home-hero-info-after",{},void 0,!0),n.actions?(a(),d("div",bt,[(a(!0),d(T,null,C(n.actions,o=>(a(),d("div",{key:o.link,class:"action"},[g(ct,{tag:"a",size:"medium",theme:o.theme,text:o.text,href:o.link,target:o.target,rel:o.rel},null,8,["theme","text","href","target","rel"])]))),128))])):h("",!0),m(t.$slots,"home-hero-actions-after",{},void 0,!0)]),n.image||l(e)?(a(),d("div",kt,[i("div",_t,[s[0]||(s[0]=i("div",{class:"image-bg"},null,-1)),m(t.$slots,"home-hero-image",{},()=>[n.image?(a(),b(Q,{key:0,class:"image-src",image:n.image},null,8,["image"])):h("",!0)],!0)])])):h("",!0)])],2))}}),yt=S(St,[["__scopeId","data-v-dd8814ff"]]),It=f({__name:"VPHomeHero",setup(n){const{frontmatter:e}=L();return(t,s)=>l(e).hero?(a(),b(yt,{key:0,class:"VPHomeHero",name:l(e).hero.name,text:l(e).hero.text,tagline:l(e).hero.tagline,image:l(e).hero.image,actions:l(e).hero.actions},{"home-hero-info-before":v(()=>[m(t.$slots,"home-hero-info-before")]),"home-hero-info":v(()=>[m(t.$slots,"home-hero-info")]),"home-hero-info-after":v(()=>[m(t.$slots,"home-hero-info-after")]),"home-hero-actions-after":v(()=>[m(t.$slots,"home-hero-actions-after")]),"home-hero-image":v(()=>[m(t.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):h("",!0)}}),At={class:"box"},Lt={key:0,class:"icon"},$t=["innerHTML"],Pt=["innerHTML"],Tt=["innerHTML"],xt={key:4,class:"link-text"},wt={class:"link-text-value"},Nt=f({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(n){return(e,t)=>(a(),b(E,{class:"VPFeature",href:n.link,rel:n.rel,target:n.target,"no-icon":!0,tag:n.link?"a":"div"},{default:v(()=>[i("article",At,[typeof n.icon=="object"&&n.icon.wrap?(a(),d("div",Lt,[g(Q,{image:n.icon,alt:n.icon.alt,height:n.icon.height||48,width:n.icon.width||48},null,8,["image","alt","height","width"])])):typeof n.icon=="object"?(a(),b(Q,{key:1,image:n.icon,alt:n.icon.alt,height:n.icon.height||48,width:n.icon.width||48},null,8,["image","alt","height","width"])):n.icon?(a(),d("div",{key:2,class:"icon",innerHTML:n.icon},null,8,$t)):h("",!0),i("h2",{class:"title",innerHTML:n.title},null,8,Pt),n.details?(a(),d("p",{key:3,class:"details",innerHTML:n.details},null,8,Tt)):h("",!0),n.linkText?(a(),d("div",xt,[i("p",wt,[D(I(n.linkText)+" ",1),t[0]||(t[0]=i("span",{class:"vpi-arrow-right link-text-icon"},null,-1))])])):h("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),Ct=S(Nt,[["__scopeId","data-v-bd37d1a2"]]),Ot={key:0,class:"VPFeatures"},Vt={class:"container"},Mt={class:"items"},Rt=f({__name:"VPFeatures",props:{features:{}},setup(n){const e=n,t=y(()=>{const s=e.features.length;if(s){if(s===2)return"grid-2";if(s===3)return"grid-3";if(s%3===0)return"grid-6";if(s>3)return"grid-4"}else return});return(s,o)=>n.features?(a(),d("div",Ot,[i("div",Vt,[i("div",Mt,[(a(!0),d(T,null,C(n.features,c=>(a(),d("div",{key:c.title,class:w(["item",[t.value]])},[g(Ct,{icon:c.icon,title:c.title,details:c.details,link:c.link,"link-text":c.linkText,rel:c.rel,target:c.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):h("",!0)}}),Dt=S(Rt,[["__scopeId","data-v-b1eea84a"]]),Ft=f({__name:"VPHomeFeatures",setup(n){const{frontmatter:e}=L();return(t,s)=>l(e).features?(a(),b(Dt,{key:0,class:"VPHomeFeatures",features:l(e).features},null,8,["features"])):h("",!0)}}),Et=f({__name:"VPHomeContent",setup(n){const{width:e}=Jn({initialWidth:0,includeScrollbar:!1});return(t,s)=>(a(),d("div",{class:"vp-doc container",style:Tn(l(e)?{"--vp-offset":`calc(50% - ${l(e)/2}px)`}:{})},[m(t.$slots,"default",{},void 0,!0)],4))}}),Ut=S(Et,[["__scopeId","data-v-c141a4bd"]]),Ht=f({__name:"VPHome",setup(n){const{frontmatter:e,theme:t}=L();return(s,o)=>{const c=W("Content");return a(),d("div",{class:w(["VPHome",{"external-link-icon-enabled":l(t).externalLinkIcon}])},[m(s.$slots,"home-hero-before",{},void 0,!0),g(It,null,{"home-hero-info-before":v(()=>[m(s.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":v(()=>[m(s.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":v(()=>[m(s.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":v(()=>[m(s.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":v(()=>[m(s.$slots,"home-hero-image",{},void 0,!0)]),_:3}),m(s.$slots,"home-hero-after",{},void 0,!0),m(s.$slots,"home-features-before",{},void 0,!0),g(Ft),m(s.$slots,"home-features-after",{},void 0,!0),l(e).markdownStyles!==!1?(a(),b(Ut,{key:0},{default:v(()=>[g(c)]),_:1})):(a(),b(c,{key:1}))],2)}}}),jt=S(Ht,[["__scopeId","data-v-e07eaea7"]]),Bt={},Jt={class:"VPPage"};function Gt(n,e){const t=W("Content");return a(),d("div",Jt,[m(n.$slots,"page-top"),g(t),m(n.$slots,"page-bottom")])}const Wt=S(Bt,[["render",Gt]]),qt=f({__name:"VPContent",setup(n){const{page:e,frontmatter:t}=L(),{hasSidebar:s}=H();return(o,c)=>(a(),d("div",{class:w(["VPContent",{"has-sidebar":l(s),"is-home":l(t).layout==="home"}]),id:"VPContent"},[l(e).isNotFound?m(o.$slots,"not-found",{},()=>[g(de)],!0,0):l(t).layout==="page"?(a(),b(Wt,{key:1},{"page-top":v(()=>[m(o.$slots,"page-top",{},void 0,!0)]),"page-bottom":v(()=>[m(o.$slots,"page-bottom",{},void 0,!0)]),_:3})):l(t).layout==="home"?(a(),b(jt,{key:2},{"home-hero-before":v(()=>[m(o.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":v(()=>[m(o.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":v(()=>[m(o.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":v(()=>[m(o.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":v(()=>[m(o.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":v(()=>[m(o.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":v(()=>[m(o.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":v(()=>[m(o.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":v(()=>[m(o.$slots,"home-features-after",{},void 0,!0)]),_:3})):l(t).layout&&l(t).layout!=="doc"?(a(),b(F(l(t).layout),{key:3})):(a(),b(rt,{key:4},{"doc-top":v(()=>[m(o.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":v(()=>[m(o.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":v(()=>[m(o.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":v(()=>[m(o.$slots,"doc-before",{},void 0,!0)]),"doc-after":v(()=>[m(o.$slots,"doc-after",{},void 0,!0)]),"aside-top":v(()=>[m(o.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":v(()=>[m(o.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":v(()=>[m(o.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":v(()=>[m(o.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":v(()=>[m(o.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":v(()=>[m(o.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),zt=S(qt,[["__scopeId","data-v-9a6c75ad"]]),Kt={class:"container"},Qt=["innerHTML"],Yt=["innerHTML"],Xt=f({__name:"VPFooter",setup(n){const{theme:e,frontmatter:t}=L(),{hasSidebar:s}=H();return(o,c)=>l(e).footer&&l(t).footer!==!1?(a(),d("footer",{key:0,class:w(["VPFooter",{"has-sidebar":l(s)}])},[i("div",Kt,[l(e).footer.message?(a(),d("p",{key:0,class:"message",innerHTML:l(e).footer.message},null,8,Qt)):h("",!0),l(e).footer.copyright?(a(),d("p",{key:1,class:"copyright",innerHTML:l(e).footer.copyright},null,8,Yt)):h("",!0)])],2)):h("",!0)}}),Zt=S(Xt,[["__scopeId","data-v-566314d4"]]);function ns(){const{theme:n,frontmatter:e}=L(),t=$n([]),s=y(()=>t.value.length>0);return X(()=>{t.value=gn(e.value.outline??n.value.outline)}),{headers:t,hasLocalNav:s}}const es={class:"menu-text"},ts={class:"header"},ss={class:"outline"},os=f({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(n){const e=n,{theme:t}=L(),s=P(!1),o=P(0),c=P(),r=P();function u(_){var A;(A=c.value)!=null&&A.contains(_.target)||(s.value=!1)}U(s,_=>{if(_){document.addEventListener("click",u);return}document.removeEventListener("click",u)}),cn("Escape",()=>{s.value=!1}),X(()=>{s.value=!1});function p(){s.value=!s.value,o.value=window.innerHeight+Math.min(window.scrollY-e.navHeight,0)}function k(_){_.target.classList.contains("outline-link")&&(r.value&&(r.value.style.transition="none"),xn(()=>{s.value=!1}))}function $(){s.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(_,A)=>(a(),d("div",{class:"VPLocalNavOutlineDropdown",style:Tn({"--vp-vh":o.value+"px"}),ref_key:"main",ref:c},[n.headers.length>0?(a(),d("button",{key:0,onClick:p,class:w({open:s.value})},[i("span",es,I(l(Mn)(l(t))),1),A[0]||(A[0]=i("span",{class:"vpi-chevron-right icon"},null,-1))],2)):(a(),d("button",{key:1,onClick:$},I(l(t).returnToTopLabel||"Return to top"),1)),g(pn,{name:"flyout"},{default:v(()=>[s.value?(a(),d("div",{key:0,ref_key:"items",ref:r,class:"items",onClick:k},[i("div",ts,[i("a",{class:"top-link",href:"#",onClick:$},I(l(t).returnToTopLabel||"Return to top"),1)]),i("div",ss,[g(Rn,{headers:n.headers},null,8,["headers"])])],512)):h("",!0)]),_:1})],4))}}),is=S(os,[["__scopeId","data-v-6b867909"]]),as={class:"container"},rs=["aria-expanded"],ls={class:"menu-text"},cs=f({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(n){const{theme:e,frontmatter:t}=L(),{hasSidebar:s}=H(),{headers:o}=ns(),{y:c}=wn(),r=P(0);J(()=>{r.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),X(()=>{o.value=gn(t.value.outline??e.value.outline)});const u=y(()=>o.value.length===0),p=y(()=>u.value&&!s.value),k=y(()=>({VPLocalNav:!0,"has-sidebar":s.value,empty:u.value,fixed:p.value}));return($,_)=>l(t).layout!=="home"&&(!p.value||l(c)>=r.value)?(a(),d("div",{key:0,class:w(k.value)},[i("div",as,[l(s)?(a(),d("button",{key:0,class:"menu","aria-expanded":n.open,"aria-controls":"VPSidebarNav",onClick:_[0]||(_[0]=A=>$.$emit("open-menu"))},[_[1]||(_[1]=i("span",{class:"vpi-align-left menu-icon"},null,-1)),i("span",ls,I(l(e).sidebarMenuLabel||"Menu"),1)],8,rs)):h("",!0),g(is,{headers:l(o),navHeight:r.value},null,8,["headers","navHeight"])])],2)):h("",!0)}}),us=S(cs,[["__scopeId","data-v-2488c25a"]]);function ds(){const n=P(!1);function e(){n.value=!0,window.addEventListener("resize",o)}function t(){n.value=!1,window.removeEventListener("resize",o)}function s(){n.value?t():e()}function o(){window.outerWidth>=768&&t()}const c=Z();return U(()=>c.path,t),{isScreenOpen:n,openScreen:e,closeScreen:t,toggleScreen:s}}const ms={},ps={class:"VPSwitch",type:"button",role:"switch"},vs={class:"check"},hs={key:0,class:"icon"};function fs(n,e){return a(),d("button",ps,[i("span",vs,[n.$slots.default?(a(),d("span",hs,[m(n.$slots,"default",{},void 0,!0)])):h("",!0)])])}const gs=S(ms,[["render",fs],["__scopeId","data-v-b4ccac88"]]),bs=f({__name:"VPSwitchAppearance",setup(n){const{isDark:e,theme:t}=L(),s=nn("toggle-appearance",()=>{e.value=!e.value}),o=P("");return hn(()=>{o.value=e.value?t.value.lightModeSwitchTitle||"Switch to light theme":t.value.darkModeSwitchTitle||"Switch to dark theme"}),(c,r)=>(a(),b(gs,{title:o.value,class:"VPSwitchAppearance","aria-checked":l(e),onClick:l(s)},{default:v(()=>[...r[0]||(r[0]=[i("span",{class:"vpi-sun sun"},null,-1),i("span",{class:"vpi-moon moon"},null,-1)])]),_:1},8,["title","aria-checked","onClick"]))}}),bn=S(bs,[["__scopeId","data-v-be9742d9"]]),ks={key:0,class:"VPNavBarAppearance"},_s=f({__name:"VPNavBarAppearance",setup(n){const{site:e}=L();return(t,s)=>l(e).appearance&&l(e).appearance!=="force-dark"&&l(e).appearance!=="force-auto"?(a(),d("div",ks,[g(bn)])):h("",!0)}}),Ss=S(_s,[["__scopeId","data-v-3f90c1a5"]]),kn=P();let Dn=!1,rn=0;function ys(n){const e=P(!1);if(en){!Dn&&Is(),rn++;const t=U(kn,s=>{var o,c,r;s===n.el.value||(o=n.el.value)!=null&&o.contains(s)?(e.value=!0,(c=n.onFocus)==null||c.call(n)):(e.value=!1,(r=n.onBlur)==null||r.call(n))});vn(()=>{t(),rn--,rn||As()})}return Gn(e)}function Is(){document.addEventListener("focusin",Fn),Dn=!0,kn.value=document.activeElement}function As(){document.removeEventListener("focusin",Fn)}function Fn(){kn.value=document.activeElement}const Ls={class:"VPMenuLink"},$s=["innerHTML"],Ps=f({__name:"VPMenuLink",props:{item:{}},setup(n){const{page:e}=L();return(t,s)=>(a(),d("div",Ls,[g(E,{class:w({active:l(G)(l(e).relativePath,n.item.activeMatch||n.item.link,!!n.item.activeMatch)}),href:n.item.link,target:n.item.target,rel:n.item.rel,"no-icon":n.item.noIcon},{default:v(()=>[i("span",{innerHTML:n.item.text},null,8,$s)]),_:1},8,["class","href","target","rel","no-icon"])]))}}),tn=S(Ps,[["__scopeId","data-v-7eeeb2dc"]]),Ts={class:"VPMenuGroup"},xs={key:0,class:"title"},ws=f({__name:"VPMenuGroup",props:{text:{},items:{}},setup(n){return(e,t)=>(a(),d("div",Ts,[n.text?(a(),d("p",xs,I(n.text),1)):h("",!0),(a(!0),d(T,null,C(n.items,s=>(a(),d(T,null,["link"in s?(a(),b(tn,{key:0,item:s},null,8,["item"])):h("",!0)],64))),256))]))}}),Ns=S(ws,[["__scopeId","data-v-a6b0397c"]]),Cs={class:"VPMenu"},Os={key:0,class:"items"},Vs=f({__name:"VPMenu",props:{items:{}},setup(n){return(e,t)=>(a(),d("div",Cs,[n.items?(a(),d("div",Os,[(a(!0),d(T,null,C(n.items,s=>(a(),d(T,{key:JSON.stringify(s)},["link"in s?(a(),b(tn,{key:0,item:s},null,8,["item"])):"component"in s?(a(),b(F(s.component),B({key:1,ref_for:!0},s.props),null,16)):(a(),b(Ns,{key:2,text:s.text,items:s.items},null,8,["text","items"]))],64))),128))])):h("",!0),m(e.$slots,"default",{},void 0,!0)]))}}),Ms=S(Vs,[["__scopeId","data-v-20ed86d6"]]),Rs=["aria-expanded","aria-label"],Ds={key:0,class:"text"},Fs=["innerHTML"],Es={key:1,class:"vpi-more-horizontal icon"},Us={class:"menu"},Hs=f({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(n){const e=P(!1),t=P();ys({el:t,onBlur:s});function s(){e.value=!1}return(o,c)=>(a(),d("div",{class:"VPFlyout",ref_key:"el",ref:t,onMouseenter:c[1]||(c[1]=r=>e.value=!0),onMouseleave:c[2]||(c[2]=r=>e.value=!1)},[i("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":e.value,"aria-label":n.label,onClick:c[0]||(c[0]=r=>e.value=!e.value)},[n.button||n.icon?(a(),d("span",Ds,[n.icon?(a(),d("span",{key:0,class:w([n.icon,"option-icon"])},null,2)):h("",!0),n.button?(a(),d("span",{key:1,innerHTML:n.button},null,8,Fs)):h("",!0),c[3]||(c[3]=i("span",{class:"vpi-chevron-down text-icon"},null,-1))])):(a(),d("span",Es))],8,Rs),i("div",Us,[g(Ms,{items:n.items},{default:v(()=>[m(o.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),_n=S(Hs,[["__scopeId","data-v-bfe7971f"]]),js=["href","aria-label","innerHTML"],Bs=f({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(n){const e=n,t=P();J(async()=>{var c;await xn();const o=(c=t.value)==null?void 0:c.children[0];o instanceof HTMLElement&&o.className.startsWith("vpi-social-")&&(getComputedStyle(o).maskImage||getComputedStyle(o).webkitMaskImage)==="none"&&o.style.setProperty("--icon",`url('https://api.iconify.design/simple-icons/${e.icon}.svg')`)});const s=y(()=>typeof e.icon=="object"?e.icon.svg:`<span class="vpi-social-${e.icon}"></span>`);return(o,c)=>(a(),d("a",{ref_key:"el",ref:t,class:"VPSocialLink no-icon",href:n.link,"aria-label":n.ariaLabel??(typeof n.icon=="string"?n.icon:""),target:"_blank",rel:"noopener",innerHTML:s.value},null,8,js))}}),Js=S(Bs,[["__scopeId","data-v-60a9a2d3"]]),Gs={class:"VPSocialLinks"},Ws=f({__name:"VPSocialLinks",props:{links:{}},setup(n){return(e,t)=>(a(),d("div",Gs,[(a(!0),d(T,null,C(n.links,({link:s,icon:o,ariaLabel:c})=>(a(),b(Js,{key:s,icon:o,link:s,ariaLabel:c},null,8,["icon","link","ariaLabel"]))),128))]))}}),Sn=S(Ws,[["__scopeId","data-v-e71e869c"]]),qs={key:0,class:"group translations"},zs={class:"trans-title"},Ks={key:1,class:"group"},Qs={class:"item appearance"},Ys={class:"label"},Xs={class:"appearance-action"},Zs={key:2,class:"group"},no={class:"item social-links"},eo=f({__name:"VPNavBarExtra",setup(n){const{site:e,theme:t}=L(),{localeLinks:s,currentLang:o}=z({correspondingLink:!0}),c=y(()=>s.value.length&&o.value.label||e.value.appearance||t.value.socialLinks);return(r,u)=>c.value?(a(),b(_n,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:v(()=>[l(s).length&&l(o).label?(a(),d("div",qs,[i("p",zs,I(l(o).label),1),(a(!0),d(T,null,C(l(s),p=>(a(),b(tn,{key:p.link,item:p},null,8,["item"]))),128))])):h("",!0),l(e).appearance&&l(e).appearance!=="force-dark"&&l(e).appearance!=="force-auto"?(a(),d("div",Ks,[i("div",Qs,[i("p",Ys,I(l(t).darkModeSwitchLabel||"Appearance"),1),i("div",Xs,[g(bn)])])])):h("",!0),l(t).socialLinks?(a(),d("div",Zs,[i("div",no,[g(Sn,{class:"social-links-list",links:l(t).socialLinks},null,8,["links"])])])):h("",!0)]),_:1})):h("",!0)}}),to=S(eo,[["__scopeId","data-v-f953d92f"]]),so=["aria-expanded"],oo=f({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(n){return(e,t)=>(a(),d("button",{type:"button",class:w(["VPNavBarHamburger",{active:n.active}]),"aria-label":"mobile navigation","aria-expanded":n.active,"aria-controls":"VPNavScreen",onClick:t[0]||(t[0]=s=>e.$emit("click"))},[...t[1]||(t[1]=[i("span",{class:"container"},[i("span",{class:"top"}),i("span",{class:"middle"}),i("span",{class:"bottom"})],-1)])],10,so))}}),io=S(oo,[["__scopeId","data-v-6bee1efd"]]),ao=["innerHTML"],ro=f({__name:"VPNavBarMenuLink",props:{item:{}},setup(n){const{page:e}=L();return(t,s)=>(a(),b(E,{class:w({VPNavBarMenuLink:!0,active:l(G)(l(e).relativePath,n.item.activeMatch||n.item.link,!!n.item.activeMatch)}),href:n.item.link,target:n.item.target,rel:n.item.rel,"no-icon":n.item.noIcon,tabindex:"0"},{default:v(()=>[i("span",{innerHTML:n.item.text},null,8,ao)]),_:1},8,["class","href","target","rel","no-icon"]))}}),lo=S(ro,[["__scopeId","data-v-815115f5"]]),co=f({__name:"VPNavBarMenuGroup",props:{item:{}},setup(n){const e=n,{page:t}=L(),s=c=>"component"in c?!1:"link"in c?G(t.value.relativePath,c.link,!!e.item.activeMatch):c.items.some(s),o=y(()=>s(e.item));return(c,r)=>(a(),b(_n,{class:w({VPNavBarMenuGroup:!0,active:l(G)(l(t).relativePath,n.item.activeMatch,!!n.item.activeMatch)||o.value}),button:n.item.text,items:n.item.items},null,8,["class","button","items"]))}}),uo={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},mo=f({__name:"VPNavBarMenu",setup(n){const{theme:e}=L();return(t,s)=>l(e).nav?(a(),d("nav",uo,[s[0]||(s[0]=i("span",{id:"main-nav-aria-label",class:"visually-hidden"}," Main Navigation ",-1)),(a(!0),d(T,null,C(l(e).nav,o=>(a(),d(T,{key:JSON.stringify(o)},["link"in o?(a(),b(lo,{key:0,item:o},null,8,["item"])):"component"in o?(a(),b(F(o.component),B({key:1,ref_for:!0},o.props),null,16)):(a(),b(co,{key:2,item:o},null,8,["item"]))],64))),128))])):h("",!0)}}),po=S(mo,[["__scopeId","data-v-afb2845e"]]);function vo(n){const{localeIndex:e,theme:t}=L();function s(o){var N,O,M;const c=o.split("."),r=(N=t.value.search)==null?void 0:N.options,u=r&&typeof r=="object",p=u&&((M=(O=r.locales)==null?void 0:O[e.value])==null?void 0:M.translations)||null,k=u&&r.translations||null;let $=p,_=k,A=n;const x=c.pop();for(const R of c){let j=null;const q=A==null?void 0:A[R];q&&(j=A=q);const sn=_==null?void 0:_[R];sn&&(j=_=sn);const on=$==null?void 0:$[R];on&&(j=$=on),q||(A=j),sn||(_=j),on||($=j)}return($==null?void 0:$[x])??(_==null?void 0:_[x])??(A==null?void 0:A[x])??""}return s}const ho=["aria-label"],fo={class:"DocSearch-Button-Container"},go={class:"DocSearch-Button-Placeholder"},In=f({__name:"VPNavBarSearchButton",setup(n){const t=vo({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(s,o)=>(a(),d("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":l(t)("button.buttonAriaLabel")},[i("span",fo,[o[0]||(o[0]=i("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1)),i("span",go,I(l(t)("button.buttonText")),1)]),o[1]||(o[1]=i("span",{class:"DocSearch-Button-Keys"},[i("kbd",{class:"DocSearch-Button-Key"}),i("kbd",{class:"DocSearch-Button-Key"},"K")],-1))],8,ho))}}),bo={class:"VPNavBarSearch"},ko={id:"local-search"},_o={key:1,id:"docsearch"},So=f({__name:"VPNavBarSearch",setup(n){const e=Wn(()=>qn(()=>import("./VPLocalSearchBox.CuzDx02y.js"),__vite__mapDeps([0,1]))),t=()=>null,{theme:s}=L(),o=P(!1),c=P(!1);J(()=>{});function r(){o.value||(o.value=!0,setTimeout(u,16))}function u(){const _=new Event("keydown");_.key="k",_.metaKey=!0,window.dispatchEvent(_),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||u()},16)}function p(_){const A=_.target,x=A.tagName;return A.isContentEditable||x==="INPUT"||x==="SELECT"||x==="TEXTAREA"}const k=P(!1);cn("k",_=>{(_.ctrlKey||_.metaKey)&&(_.preventDefault(),k.value=!0)}),cn("/",_=>{p(_)||(_.preventDefault(),k.value=!0)});const $="local";return(_,A)=>{var x;return a(),d("div",bo,[l($)==="local"?(a(),d(T,{key:0},[k.value?(a(),b(l(e),{key:0,onClose:A[0]||(A[0]=N=>k.value=!1)})):h("",!0),i("div",ko,[g(In,{onClick:A[1]||(A[1]=N=>k.value=!0)})])],64)):l($)==="algolia"?(a(),d(T,{key:1},[o.value?(a(),b(l(t),{key:0,algolia:((x=l(s).search)==null?void 0:x.options)??l(s).algolia,onVnodeBeforeMount:A[2]||(A[2]=N=>c.value=!0)},null,8,["algolia"])):h("",!0),c.value?h("",!0):(a(),d("div",_o,[g(In,{onClick:r})]))],64)):h("",!0)])}}}),yo=f({__name:"VPNavBarSocialLinks",setup(n){const{theme:e}=L();return(t,s)=>l(e).socialLinks?(a(),b(Sn,{key:0,class:"VPNavBarSocialLinks",links:l(e).socialLinks},null,8,["links"])):h("",!0)}}),Io=S(yo,[["__scopeId","data-v-ef6192dc"]]),Ao=["href","rel","target"],Lo=["innerHTML"],$o={key:2},Po=f({__name:"VPNavBarTitle",setup(n){const{site:e,theme:t}=L(),{hasSidebar:s}=H(),{currentLang:o}=z(),c=y(()=>{var p;return typeof t.value.logoLink=="string"?t.value.logoLink:(p=t.value.logoLink)==null?void 0:p.link}),r=y(()=>{var p;return typeof t.value.logoLink=="string"||(p=t.value.logoLink)==null?void 0:p.rel}),u=y(()=>{var p;return typeof t.value.logoLink=="string"||(p=t.value.logoLink)==null?void 0:p.target});return(p,k)=>(a(),d("div",{class:w(["VPNavBarTitle",{"has-sidebar":l(s)}])},[i("a",{class:"title",href:c.value??l(fn)(l(o).link),rel:r.value,target:u.value},[m(p.$slots,"nav-bar-title-before",{},void 0,!0),l(t).logo?(a(),b(Q,{key:0,class:"logo",image:l(t).logo},null,8,["image"])):h("",!0),l(t).siteTitle?(a(),d("span",{key:1,innerHTML:l(t).siteTitle},null,8,Lo)):l(t).siteTitle===void 0?(a(),d("span",$o,I(l(e).title),1)):h("",!0),m(p.$slots,"nav-bar-title-after",{},void 0,!0)],8,Ao)],2))}}),To=S(Po,[["__scopeId","data-v-9f43907a"]]),xo={class:"items"},wo={class:"title"},No=f({__name:"VPNavBarTranslations",setup(n){const{theme:e}=L(),{localeLinks:t,currentLang:s}=z({correspondingLink:!0});return(o,c)=>l(t).length&&l(s).label?(a(),b(_n,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:l(e).langMenuLabel||"Change language"},{default:v(()=>[i("div",xo,[i("p",wo,I(l(s).label),1),(a(!0),d(T,null,C(l(t),r=>(a(),b(tn,{key:r.link,item:r},null,8,["item"]))),128))])]),_:1},8,["label"])):h("",!0)}}),Co=S(No,[["__scopeId","data-v-acee064b"]]),Oo={class:"wrapper"},Vo={class:"container"},Mo={class:"title"},Ro={class:"content"},Do={class:"content-body"},Fo=f({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(n){const e=n,{y:t}=wn(),{hasSidebar:s}=H(),{frontmatter:o}=L(),c=P({});return hn(()=>{c.value={"has-sidebar":s.value,home:o.value.layout==="home",top:t.value===0,"screen-open":e.isScreenOpen}}),(r,u)=>(a(),d("div",{class:w(["VPNavBar",c.value])},[i("div",Oo,[i("div",Vo,[i("div",Mo,[g(To,null,{"nav-bar-title-before":v(()=>[m(r.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":v(()=>[m(r.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),i("div",Ro,[i("div",Do,[m(r.$slots,"nav-bar-content-before",{},void 0,!0),g(So,{class:"search"}),g(po,{class:"menu"}),g(Co,{class:"translations"}),g(Ss,{class:"appearance"}),g(Io,{class:"social-links"}),g(to,{class:"extra"}),m(r.$slots,"nav-bar-content-after",{},void 0,!0),g(io,{class:"hamburger",active:n.isScreenOpen,onClick:u[0]||(u[0]=p=>r.$emit("toggle-screen"))},null,8,["active"])])])])]),u[1]||(u[1]=i("div",{class:"divider"},[i("div",{class:"divider-line"})],-1))],2))}}),Eo=S(Fo,[["__scopeId","data-v-9fd4d1dd"]]),Uo={key:0,class:"VPNavScreenAppearance"},Ho={class:"text"},jo=f({__name:"VPNavScreenAppearance",setup(n){const{site:e,theme:t}=L();return(s,o)=>l(e).appearance&&l(e).appearance!=="force-dark"&&l(e).appearance!=="force-auto"?(a(),d("div",Uo,[i("p",Ho,I(l(t).darkModeSwitchLabel||"Appearance"),1),g(bn)])):h("",!0)}}),Bo=S(jo,[["__scopeId","data-v-a3e2920d"]]),Jo=["innerHTML"],Go=f({__name:"VPNavScreenMenuLink",props:{item:{}},setup(n){const e=nn("close-screen");return(t,s)=>(a(),b(E,{class:"VPNavScreenMenuLink",href:n.item.link,target:n.item.target,rel:n.item.rel,"no-icon":n.item.noIcon,onClick:l(e)},{default:v(()=>[i("span",{innerHTML:n.item.text},null,8,Jo)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),Wo=S(Go,[["__scopeId","data-v-fa963d97"]]),qo=["innerHTML"],zo=f({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(n){const e=nn("close-screen");return(t,s)=>(a(),b(E,{class:"VPNavScreenMenuGroupLink",href:n.item.link,target:n.item.target,rel:n.item.rel,"no-icon":n.item.noIcon,onClick:l(e)},{default:v(()=>[i("span",{innerHTML:n.item.text},null,8,qo)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),En=S(zo,[["__scopeId","data-v-e04f3e85"]]),Ko={class:"VPNavScreenMenuGroupSection"},Qo={key:0,class:"title"},Yo=f({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(n){return(e,t)=>(a(),d("div",Ko,[n.text?(a(),d("p",Qo,I(n.text),1)):h("",!0),(a(!0),d(T,null,C(n.items,s=>(a(),b(En,{key:s.text,item:s},null,8,["item"]))),128))]))}}),Xo=S(Yo,[["__scopeId","data-v-f60dbfa7"]]),Zo=["aria-controls","aria-expanded"],ni=["innerHTML"],ei=["id"],ti={key:0,class:"item"},si={key:1,class:"item"},oi={key:2,class:"group"},ii=f({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(n){const e=n,t=P(!1),s=y(()=>`NavScreenGroup-${e.text.replace(" ","-").toLowerCase()}`);function o(){t.value=!t.value}return(c,r)=>(a(),d("div",{class:w(["VPNavScreenMenuGroup",{open:t.value}])},[i("button",{class:"button","aria-controls":s.value,"aria-expanded":t.value,onClick:o},[i("span",{class:"button-text",innerHTML:n.text},null,8,ni),r[0]||(r[0]=i("span",{class:"vpi-plus button-icon"},null,-1))],8,Zo),i("div",{id:s.value,class:"items"},[(a(!0),d(T,null,C(n.items,u=>(a(),d(T,{key:JSON.stringify(u)},["link"in u?(a(),d("div",ti,[g(En,{item:u},null,8,["item"])])):"component"in u?(a(),d("div",si,[(a(),b(F(u.component),B({ref_for:!0},u.props,{"screen-menu":""}),null,16))])):(a(),d("div",oi,[g(Xo,{text:u.text,items:u.items},null,8,["text","items"])]))],64))),128))],8,ei)],2))}}),ai=S(ii,[["__scopeId","data-v-d99bfeec"]]),ri={key:0,class:"VPNavScreenMenu"},li=f({__name:"VPNavScreenMenu",setup(n){const{theme:e}=L();return(t,s)=>l(e).nav?(a(),d("nav",ri,[(a(!0),d(T,null,C(l(e).nav,o=>(a(),d(T,{key:JSON.stringify(o)},["link"in o?(a(),b(Wo,{key:0,item:o},null,8,["item"])):"component"in o?(a(),b(F(o.component),B({key:1,ref_for:!0},o.props,{"screen-menu":""}),null,16)):(a(),b(ai,{key:2,text:o.text||"",items:o.items},null,8,["text","items"]))],64))),128))])):h("",!0)}}),ci=f({__name:"VPNavScreenSocialLinks",setup(n){const{theme:e}=L();return(t,s)=>l(e).socialLinks?(a(),b(Sn,{key:0,class:"VPNavScreenSocialLinks",links:l(e).socialLinks},null,8,["links"])):h("",!0)}}),ui={class:"list"},di=f({__name:"VPNavScreenTranslations",setup(n){const{localeLinks:e,currentLang:t}=z({correspondingLink:!0}),s=P(!1);function o(){s.value=!s.value}return(c,r)=>l(e).length&&l(t).label?(a(),d("div",{key:0,class:w(["VPNavScreenTranslations",{open:s.value}])},[i("button",{class:"title",onClick:o},[r[0]||(r[0]=i("span",{class:"vpi-languages icon lang"},null,-1)),D(" "+I(l(t).label)+" ",1),r[1]||(r[1]=i("span",{class:"vpi-chevron-down icon chevron"},null,-1))]),i("ul",ui,[(a(!0),d(T,null,C(l(e),u=>(a(),d("li",{key:u.link,class:"item"},[g(E,{class:"link",href:u.link},{default:v(()=>[D(I(u.text),1)]),_:2},1032,["href"])]))),128))])],2)):h("",!0)}}),mi=S(di,[["__scopeId","data-v-516e4bc3"]]),pi={class:"container"},vi=f({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(n){const e=P(null),t=Nn(en?document.body:null);return(s,o)=>(a(),b(pn,{name:"fade",onEnter:o[0]||(o[0]=c=>t.value=!0),onAfterLeave:o[1]||(o[1]=c=>t.value=!1)},{default:v(()=>[n.open?(a(),d("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:e,id:"VPNavScreen"},[i("div",pi,[m(s.$slots,"nav-screen-content-before",{},void 0,!0),g(li,{class:"menu"}),g(mi,{class:"translations"}),g(Bo,{class:"appearance"}),g(ci,{class:"social-links"}),m(s.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):h("",!0)]),_:3}))}}),hi=S(vi,[["__scopeId","data-v-2dd6d0c7"]]),fi={key:0,class:"VPNav"},gi=f({__name:"VPNav",setup(n){const{isScreenOpen:e,closeScreen:t,toggleScreen:s}=ds(),{frontmatter:o}=L(),c=y(()=>o.value.navbar!==!1);return Cn("close-screen",t),Y(()=>{en&&document.documentElement.classList.toggle("hide-nav",!c.value)}),(r,u)=>c.value?(a(),d("header",fi,[g(Eo,{"is-screen-open":l(e),onToggleScreen:l(s)},{"nav-bar-title-before":v(()=>[m(r.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":v(()=>[m(r.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":v(()=>[m(r.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":v(()=>[m(r.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),g(hi,{open:l(e)},{"nav-screen-content-before":v(()=>[m(r.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":v(()=>[m(r.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):h("",!0)}}),bi=S(gi,[["__scopeId","data-v-7ad780c2"]]),ki=["role","tabindex"],_i={key:1,class:"items"},Si=f({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(n){const e=n,{collapsed:t,collapsible:s,isLink:o,isActiveLink:c,hasActiveLink:r,hasChildren:u,toggle:p}=he(y(()=>e.item)),k=y(()=>u.value?"section":"div"),$=y(()=>o.value?"a":"div"),_=y(()=>u.value?e.depth+2===7?"p":`h${e.depth+2}`:"p"),A=y(()=>o.value?void 0:"button"),x=y(()=>[[`level-${e.depth}`],{collapsible:s.value},{collapsed:t.value},{"is-link":o.value},{"is-active":c.value},{"has-active":r.value}]);function N(M){"key"in M&&M.key!=="Enter"||!e.item.link&&p()}function O(){e.item.link&&p()}return(M,R)=>{const j=W("VPSidebarItem",!0);return a(),b(F(k.value),{class:w(["VPSidebarItem",x.value])},{default:v(()=>[n.item.text?(a(),d("div",B({key:0,class:"item",role:A.value},zn(n.item.items?{click:N,keydown:N}:{},!0),{tabindex:n.item.items&&0}),[R[1]||(R[1]=i("div",{class:"indicator"},null,-1)),n.item.link?(a(),b(E,{key:0,tag:$.value,class:"link",href:n.item.link,rel:n.item.rel,target:n.item.target},{default:v(()=>[(a(),b(F(_.value),{class:"text",innerHTML:n.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(a(),b(F(_.value),{key:1,class:"text",innerHTML:n.item.text},null,8,["innerHTML"])),n.item.collapsed!=null&&n.item.items&&n.item.items.length?(a(),d("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:O,onKeydown:Kn(O,["enter"]),tabindex:"0"},[...R[0]||(R[0]=[i("span",{class:"vpi-chevron-right caret-icon"},null,-1)])],32)):h("",!0)],16,ki)):h("",!0),n.item.items&&n.item.items.length?(a(),d("div",_i,[n.depth<5?(a(!0),d(T,{key:0},C(n.item.items,q=>(a(),b(j,{key:q.text,item:q,depth:n.depth+1},null,8,["item","depth"]))),128)):h("",!0)])):h("",!0)]),_:1},8,["class"])}}}),yi=S(Si,[["__scopeId","data-v-0009425e"]]),Ii=f({__name:"VPSidebarGroup",props:{items:{}},setup(n){const e=P(!0);let t=null;return J(()=>{t=setTimeout(()=>{t=null,e.value=!1},300)}),On(()=>{t!=null&&(clearTimeout(t),t=null)}),(s,o)=>(a(!0),d(T,null,C(n.items,c=>(a(),d("div",{key:c.text,class:w(["group",{"no-transition":e.value}])},[g(yi,{item:c,depth:0},null,8,["item"])],2))),128))}}),Ai=S(Ii,[["__scopeId","data-v-51288d80"]]),Li={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},$i=f({__name:"VPSidebar",props:{open:{type:Boolean}},setup(n){const{sidebarGroups:e,hasSidebar:t}=H(),s=n,o=P(null),c=Nn(en?document.body:null);U([s,o],()=>{var u;s.open?(c.value=!0,(u=o.value)==null||u.focus()):c.value=!1},{immediate:!0,flush:"post"});const r=P(0);return U(e,()=>{r.value+=1},{deep:!0}),(u,p)=>l(t)?(a(),d("aside",{key:0,class:w(["VPSidebar",{open:n.open}]),ref_key:"navEl",ref:o,onClick:p[0]||(p[0]=Qn(()=>{},["stop"]))},[p[2]||(p[2]=i("div",{class:"curtain"},null,-1)),i("nav",Li,[p[1]||(p[1]=i("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),m(u.$slots,"sidebar-nav-before",{},void 0,!0),(a(),b(Ai,{items:l(e),key:r.value},null,8,["items"])),m(u.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):h("",!0)}}),Pi=S($i,[["__scopeId","data-v-42c4c606"]]),Ti=f({__name:"VPSkipLink",setup(n){const{theme:e}=L(),t=Z(),s=P();U(()=>t.path,()=>s.value.focus());function o({target:c}){const r=document.getElementById(decodeURIComponent(c.hash).slice(1));if(r){const u=()=>{r.removeAttribute("tabindex"),r.removeEventListener("blur",u)};r.setAttribute("tabindex","-1"),r.addEventListener("blur",u),r.focus(),window.scrollTo(0,0)}}return(c,r)=>(a(),d(T,null,[i("span",{ref_key:"backToTop",ref:s,tabindex:"-1"},null,512),i("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:o},I(l(e).skipToContentLabel||"Skip to content"),1)],64))}}),xi=S(Ti,[["__scopeId","data-v-fcbfc0e0"]]),wi=f({__name:"Layout",setup(n){const{isOpen:e,open:t,close:s}=H(),o=Z();U(()=>o.path,s),ve(e,s);const{frontmatter:c}=L(),r=Yn(),u=y(()=>!!r["home-hero-image"]);return Cn("hero-image-slot-exists",u),(p,k)=>{const $=W("Content");return l(c).layout!==!1?(a(),d("div",{key:0,class:w(["Layout",l(c).pageClass])},[m(p.$slots,"layout-top",{},void 0,!0),g(xi),g(ee,{class:"backdrop",show:l(e),onClick:l(s)},null,8,["show","onClick"]),g(bi,null,{"nav-bar-title-before":v(()=>[m(p.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":v(()=>[m(p.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":v(()=>[m(p.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":v(()=>[m(p.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":v(()=>[m(p.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":v(()=>[m(p.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),g(us,{open:l(e),onOpenMenu:l(t)},null,8,["open","onOpenMenu"]),g(Pi,{open:l(e)},{"sidebar-nav-before":v(()=>[m(p.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":v(()=>[m(p.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),g(zt,null,{"page-top":v(()=>[m(p.$slots,"page-top",{},void 0,!0)]),"page-bottom":v(()=>[m(p.$slots,"page-bottom",{},void 0,!0)]),"not-found":v(()=>[m(p.$slots,"not-found",{},void 0,!0)]),"home-hero-before":v(()=>[m(p.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":v(()=>[m(p.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":v(()=>[m(p.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":v(()=>[m(p.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":v(()=>[m(p.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":v(()=>[m(p.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":v(()=>[m(p.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":v(()=>[m(p.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":v(()=>[m(p.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":v(()=>[m(p.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":v(()=>[m(p.$slots,"doc-before",{},void 0,!0)]),"doc-after":v(()=>[m(p.$slots,"doc-after",{},void 0,!0)]),"doc-top":v(()=>[m(p.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":v(()=>[m(p.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":v(()=>[m(p.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":v(()=>[m(p.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":v(()=>[m(p.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":v(()=>[m(p.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":v(()=>[m(p.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":v(()=>[m(p.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),g(Zt),m(p.$slots,"layout-bottom",{},void 0,!0)],2)):(a(),b($,{key:1}))}}}),Ni=S(wi,[["__scopeId","data-v-d8b57b2d"]]),An={Layout:Ni,enhanceApp:({app:n})=>{n.component("Badge",Xn)}},Ci={class:"turna-home"},Oi={class:"home-section","aria-labelledby":"route-title"},Vi={class:"route-grid"},Mi=["aria-label"],Ri=["href"],Di={class:"home-section capability-section","aria-labelledby":"capability-title"},Fi={class:"capability-grid glass-panel"},Ei=["href"],Ui={class:"capability-code"},Hi={class:"home-section","aria-labelledby":"loop-title"},ji={class:"loop-list"},Bi={class:"inline-actions"},Ji=["href"],Gi=["href"],Wi={class:"home-section data-section","aria-labelledby":"data-title"},qi={class:"data-copy"},zi=["href"],Ki={class:"home-section","aria-labelledby":"snapshot-title"},Qi={class:"snapshot-grid"},Yi={class:"section-intro"},Xi=["href"],Zi={class:"facts-panel glass-panel"},na={class:"home-section author-banner glass-panel","aria-labelledby":"author-title"},ea=["href"],ta=["href"],sa={class:"home-section quick-links","aria-labelledby":"quick-title"},oa={class:"reference-grid"},ia=["href"],aa=["href"],ra=["href"],la=["href"],ca=f({__name:"HomeContent",setup(n){const e=[{index:"01",label:"LEARNING",title:"学习与复习",copy:"确认运行要求，了解课程组织与每日复习流程，然后开始第一节课程。",links:[{text:"Turna 是什么",href:"/guide/what-is-turna"},{text:"快速开始",href:"/guide/getting-started"},{text:"课程结构",href:"/guide/curriculum"}]},{index:"02",label:"MIGRATION",title:"Anki 牌组迁移",copy:"检查 .apkg 导入、Official Collection 所有权、卡片渲染方式与正式调度边界。",links:[{text:"导入牌组",href:"/guide/anki-import"},{text:"渲染与隔离",href:"/guide/anki-rendering"},{text:"复习系统",href:"/guide/review-system"}]},{index:"03",label:"AUTHORING",title:"课程生产",copy:"按 Section、Unit、Lesson 三级结构组织内容，并通过编辑器完成校验与验收。",links:[{text:"教师指南",href:"/authoring/teacher-guide"},{text:"课型说明",href:"/guide/lesson-types"},{text:"目录约定",href:"/authoring/course-layout"}]},{index:"04",label:"ENGINEERING",title:"开发与构建",copy:"检查客户端分层、本地数据所有权、Android 发布、Web 构建与质量门禁。",links:[{text:"架构总览",href:"/developer/architecture"},{text:"Android 构建",href:"/developer/android-build"},{text:"测试门禁",href:"/developer/testing"}]}],t=[{code:"LOCAL",title:"本地数据层",copy:"课程、牌组与学习记录默认保存在设备上；离线状态下保留完整学习与复习能力。",href:"/guide/features#离线与本地优先"},{code:"FSRS",title:"记忆调度器",copy:"使用 21 参数 FSRS-6 更新记忆状态，并计算下一次复习时间。",href:"/guide/fsrs"},{code:"ANKI",title:"Anki 兼容层",copy:"Android 生产路径导入 .apkg，由 Official Collection 持有卡片和调度状态。",href:"/guide/anki"},{code:"PATH",title:"课程路径",copy:"按 CEFR A1–B2 组织内容，通过先修关系连接可独立完成的短课时。",href:"/guide/curriculum"},{code:"ASSIST",title:"上下文辅助",copy:"基于当前句子、语法和错题提供分层提示；关闭 AI 不影响核心流程。",href:"/guide/ai"},{code:"STUDIO",title:"课程编辑器",copy:"在桌面端编辑课程结构与内容，保存前执行校验，并通过教师模式验收。",href:"/guide/editor"}],s=[{n:"01",title:"选择课时",copy:"根据 CEFR 等级、完成状态与先修关系确定下一课。"},{n:"02",title:"输入内容",copy:"通过词汇、示例、听力与分层提示建立初始理解。"},{n:"03",title:"执行检索",copy:"使用选择、填空、翻译或听写验证知识提取能力。"},{n:"04",title:"更新状态",copy:"根据结果更新难度、稳定度与本地学习记录。"},{n:"05",title:"调度复习",copy:"FSRS 计算复习时间，并将薄弱内容重新接入练习流程。"}],o=[["课程范围","土耳其语 CEFR A1–B2"],["内容结构","8 Section · 11 Unit · 54 Lesson"],["学习素材","148 词汇 · 18 表达 · 37 音频"],["复习引擎","FSRS-6 · 21 参数"]];return(c,r)=>(a(),d("div",Ci,[r[22]||(r[22]=an('<section class="home-signal glass-panel" aria-label="文档概览"><div class="signal-copy"><span class="micro-label">DOCUMENT INDEX / REV.01</span><h2>从系统运行到课程生产，<br>按任务查阅。</h2><p>文档按学习者、Anki 用户、课程作者和开发者四类任务组织，提供操作步骤、行为说明与数据约束。</p></div><dl class="signal-stats"><div><dt>41</dt><dd>技术文档</dd></div><div><dt>04</dt><dd>任务入口</dd></div><div><dt>100%</dt><dd>离线主流程</dd></div></dl></section>',1)),i("section",Oi,[r[1]||(r[1]=i("div",{class:"section-kicker"},[i("span",null,"START HERE"),i("i")],-1)),r[2]||(r[2]=i("div",{class:"section-intro"},[i("h2",{id:"route-title"},"选择任务入口"),i("p",null,"每条路径只包含完成当前任务所需的核心页面，无需顺序阅读全部文档。")],-1)),i("div",Vi,[(a(),d(T,null,C(e,u=>i("article",{key:u.title,class:"route-card glass-panel"},[i("header",null,[i("span",null,I(u.index),1),i("small",null,I(u.label),1)]),i("h3",null,I(u.title),1),i("p",null,I(u.copy),1),i("nav",{"aria-label":`${u.title}推荐阅读`},[(a(!0),d(T,null,C(u.links,p=>(a(),d("a",{key:p.href,href:l(V)(p.href)},[D(I(p.text),1),r[0]||(r[0]=i("span",{"aria-hidden":"true"},"↗",-1))],8,Ri))),128))],8,Mi)])),64))])]),i("section",Di,[r[4]||(r[4]=i("div",{class:"section-kicker"},[i("span",null,"SYSTEM MAP"),i("i")],-1)),r[5]||(r[5]=i("div",{class:"section-intro split-intro"},[i("h2",{id:"capability-title"},"系统能力与职责边界"),i("p",null,"课程提供输入，练习执行检索，FSRS 负责调度。Anki、AI 与编辑器分别处理内容迁移、上下文辅助和课程生产。")],-1)),i("div",Fi,[(a(),d(T,null,C(t,u=>i("a",{key:u.code,href:l(V)(u.href),class:"capability-item"},[i("span",Ui,I(u.code),1),i("h3",null,I(u.title),1),i("p",null,I(u.copy),1),r[3]||(r[3]=i("span",{class:"text-link"},[D("查看规格 "),i("b",{"aria-hidden":"true"},"→")],-1))],8,Ei)),64))])]),i("section",Hi,[r[6]||(r[6]=i("div",{class:"section-kicker"},[i("span",null,"LEARNING LOOP"),i("i")],-1)),r[7]||(r[7]=i("div",{class:"section-intro"},[i("h2",{id:"loop-title"},"课程学习与记忆调度闭环"),i("p",null,"新内容学习与旧内容复习共享同一学习状态，系统据此连续更新课程进度与调度结果。")],-1)),i("ol",ji,[(a(),d(T,null,C(s,u=>i("li",{key:u.n},[i("span",null,I(u.n),1),i("div",null,[i("h3",null,I(u.title),1),i("p",null,I(u.copy),1)])])),64))]),i("div",Bi,[i("a",{class:"glass-button primary",href:l(V)("/guide/fsrs")},"理解 FSRS 调度",8,Ji),i("a",{class:"glass-button",href:l(V)("/guide/lesson-types")},"查看六种课型",8,Gi)])]),i("section",Wi,[i("div",qi,[r[9]||(r[9]=an('<div class="section-kicker"><span>DATA BOUNDARY</span><i></i></div><h2 id="data-title">核心状态默认保留在本地设备。</h2><p>离线运行是默认模式。课程、牌组、复习状态和进度不依赖账号或持续网络连接。</p><ul><li><span>01</span>核心功能无需账号</li><li><span>02</span>学习记录默认不上行</li><li><span>03</span>未配置 AI 时使用本地内容</li><li><span>04</span>同步与更新由用户主动触发</li></ul>',4)),i("a",{class:"text-link standalone",href:l(V)("/guide/features#离线与本地优先")},[...r[8]||(r[8]=[D("了解本地优先原则 ",-1),i("b",{"aria-hidden":"true"},"→",-1)])],8,zi)]),r[10]||(r[10]=an('<div class="data-window glass-panel" aria-label="数据流向示意"><div class="window-bar"><span></span><span></span><span></span><small>turna / local workspace</small></div><div class="data-node device"><small>YOUR DEVICE</small><strong>学习工作区</strong><p>课程 · 牌组 · 记忆状态 · 设置</p></div><div class="data-connector"><i></i><span>主动选择时</span><i></i></div><div class="data-optional"><div><small>OPTIONAL</small><strong>课程更新</strong></div><div><small>OPTIONAL</small><strong>AI 服务</strong></div></div></div>',1))]),i("section",Ki,[r[13]||(r[13]=i("div",{class:"section-kicker"},[i("span",null,"CURRICULUM SNAPSHOT"),i("i")],-1)),i("div",Qi,[i("div",Yi,[r[11]||(r[11]=i("h2",{id:"snapshot-title"},"课程范围与当前数据快照",-1)),r[12]||(r[12]=i("p",null,"当前课程以土耳其语为主，按 CEFR 分级，通过短课时与先修关系控制学习顺序。以下数据来自当前课程清单。",-1)),i("a",{class:"glass-button primary",href:l(V)("/guide/curriculum")},"打开课程结构",8,Xi)]),i("dl",Zi,[(a(),d(T,null,C(o,u=>i("div",{key:u[0]},[i("dt",null,I(u[0]),1),i("dd",null,I(u[1]),1)])),64))])])]),i("section",na,[r[14]||(r[14]=i("div",null,[i("span",{class:"micro-label"},"COURSE PRODUCTION"),i("h2",{id:"author-title"},"建立可校验、可验收的课程单元。"),i("p",null,"教师指南覆盖目录准备、课时创建、词汇引用、题目配置、保存校验与教师模式验收，不要求预先理解完整代码库。")],-1)),r[15]||(r[15]=i("div",{class:"author-steps","aria-label":"课程创作步骤"},[i("span",null,"结构"),i("i"),i("span",null,"内容"),i("i"),i("span",null,"校验"),i("i"),i("span",null,"试听")],-1)),i("nav",null,[i("a",{class:"glass-button primary",href:l(V)("/authoring/teacher-guide")},"开始创作课程",8,ea),i("a",{class:"glass-button",href:l(V)("/guide/editor")},"认识编辑器",8,ta)])]),i("section",sa,[r[20]||(r[20]=i("div",{class:"section-kicker"},[i("span",null,"REFERENCE"),i("i")],-1)),r[21]||(r[21]=i("h2",{id:"quick-title"},"常用操作索引",-1)),i("div",oa,[i("a",{href:l(V)("/guide/getting-started")},[...r[16]||(r[16]=[i("small",null,"SETUP",-1),i("strong",null,"安装、启动与构建",-1),i("span",null,"→",-1)])],8,ia),i("a",{href:l(V)("/guide/anki-import")},[...r[17]||(r[17]=[i("small",null,"IMPORT",-1),i("strong",null,"导入现有 Anki 牌组",-1),i("span",null,"→",-1)])],8,aa),i("a",{href:l(V)("/guide/ai")},[...r[18]||(r[18]=[i("small",null,"ASSIST",-1),i("strong",null,"配置或关闭 AI 伴学",-1),i("span",null,"→",-1)])],8,ra),i("a",{href:l(V)("/guide/writing-docs")},[...r[19]||(r[19]=[i("small",null,"CONTRIBUTE",-1),i("strong",null,"为文档增加新页面",-1),i("span",null,"→",-1)])],8,la)])])]))}}),ua=`# 音频资产

> 人工录音用于听力课、长短语与对话。单词与短表达保留运行时 TTS，不为每个词捆绑独立录音。音频是 Lesson 的可发布依赖，必须在发布前完成 manifest 校验。

![音频目录结构 + manifest 三色状态（绿 / 黄 / 红）](/images/authoring/audio-tree.svg)

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

## 路径结构

\`\`\`text
assets/sounds/<lang>/
├── listening/             # 普通人工对话录音
├── bgm/                   # 听力节目背景音
├── debut/                 # 听力课 \`debut\` 阶段素材
├── fin/                   # 听力课 \`fin\` 阶段素材
└── lessons/<lesson_id>/   # 该 Lesson 专用素材
\`\`\`

文件名必须与 Lesson JSON 中 \`audioAsset\` 的标识符一致，并以 \`.mp3\` 结尾。**禁止**仅添加文件而不更新引用；**禁止**仅添加引用而不提交文件。发布前由 manifest 校验保证引用闭合。

## 录音要求

- 母语者或达到流利程度的说话者。
- 环境噪声低且稳定（SNR ≥ 40 dB）。
- 麦克风距离 10–20 cm，控制爆破音。
- 自然、清晰、面向学习者的语速。
- 不使用夸张语调或戏剧化表演。
- 不含未经许可的音乐或第三方内容。
- 段落之间保留 0.5–1.0 s 自然间隔。

## 替换生成音频

人工录音可覆盖同 ID 的 TTS 生成文件。提交说明中标记替换关系：

\`\`\`text
- 替换 audioAsset: tr/listening/l-u1-greetings-intro/main
  原: TTS (espeak-ng tr)
  新: 人工录音 / 文件: assets/sounds/turkish/listening/l-u1-greetings-intro/main.mp3
  授权: CC-BY-SA 4.0 / 作者张三
\`\`\`

ID 保持不变。Lesson JSON 无需因音质替换而修改。\`tool/gui\` 的发布流程会重新扫描 \`assets/sounds\` 并刷新 manifest。

## Manifest 校验

\`\`\`bash
python tool/course_cli.py audio-manifest --output /tmp/manifest.csv
\`\`\`

输出 CSV 字段：

| 列 | 含义 |
| --- | --- |
| \`lang\` | 语言代码 |
| \`audioAsset\` | JSON 中引用的标识符 |
| \`expected_path\` | 期望文件路径 |
| \`exists\` | \`true\` / \`false\` |
| \`size_bytes\` | 文件大小 |
| \`duration_s\` | 实际时长 |
| \`loudness_lufs\` | 响度 |
| \`peak_dbtp\` | true peak |
| \`kind\` | \`tts_generated\` / \`human_recorded\` / \`missing\` |

发布门禁：**禁止**存在 \`exists=false\` 的引用。所有 \`kind=missing\` 必须先补录或删除引用。

## 录音 QA 清单

发布前逐项核对：

- [ ] 资产在 manifest 中存在。
- [ ] JSON 引用与文件名严格一致（大小写敏感）。
- [ ] 文件可在目标设备解码（\`ffmpeg -i <file>\` 验证）。
- [ ] 响度与相邻素材差异 ≤ 2 LUFS。
- [ ] 无超长静音（> 0.5 s 的内部静音需剪辑）。
- [ ] 听力题具有重播按钮与必要文本边界。
- [ ] 高频段无金属感、底噪稳定。
- [ ] 同一段素材在 Android / iOS / Web 三端均可正常播放。

## 授权

提交者必须：

- 拥有录音版权或有效授权。
- 允许项目长期、免版税地随 Turna 分发。
- 不含未授权背景音乐或第三方素材。
- 在 \`release-notes\` 中标注授权协议（CC-BY / CC-BY-SA / 自有版权等）。

无授权文件在 \`lint\` 中被标红，发布门禁阻断。

## 听力课三段式

\`\`\`text
listeningPhases:
  - kind: debut  → 预听 / 激活背景知识
  - kind: main   → 主音频 / 训练目标结构
  - kind: fin    → 收束 / 后测衔接
\`\`\`

\`debut\` / \`main\` / \`fin\` 三段独立音频资产，对应 Pre-listening / While-listening / Post-listening 教学框架。主音频支持叠加场景背景音（来自 \`bgm/\`）以训练环境噪音中的语音感知能力。

## 与 GUI 工具栏的对应

| GUI 操作 | 影响 |
| --- | --- |
| 发布 | 触发 \`sound-manifest\` + \`validate\`；列出缺失资产 |
| 总览 / 资源库 | 不直接编辑音频；只读引用 |
| 教材导入 | 提取的对话不自动生成音频；标记待补录 |
| 设置 → AI → 音频生成 | 调外部 TTS / 录音服务，生成至 \`assets/sounds/<lang>/\` |

## 性能与体积

| 限制 | 阈值 |
| --- | --- |
| 单文件大小 | ≤ 4 MB |
| 单 Section 累计音频 | ≤ 60 MB |
| 客户端首包压缩比 | ≤ 35% |
| 单 Lesson 引用音频数 | ≤ 12 |

超过阈值在 \`lint\` 中标黄。CI 不阻断发布，但移动端首屏包体检查会失败。

## 故障与处置

| 现象 | 根因 | 处置 |
| --- | --- | --- |
| 客户端无法播放 | 编解码或采样率异常 | \`ffprobe\` 检查并重导出 |
| 响度跳跃 | 录音条件不一致 | 在 DAW 中归一化至 -16 LUFS |
| 引用了不存在的文件 | 删除录音未联动 | manifest 标红；删除引用或补录 |
| 客户端解码抖动 | MP3 VBR 极端设置 | 重导出为 CBR 192 kbps |

## 相关文档

- [音频、TTS 与朗读](/guide/audio-and-tts)
- [Lesson JSON 结构](/authoring/lesson-schema)
- [课程目录约定](/authoring/course-layout)
- [发布检查表](/authoring/release-checklist)
- [校验与 Lint](/authoring/validation)
`,da=`# 课程目录约定

> **真理源是磁盘上的 JSON**。SQLite 只是 App 启动后从 JSON 派生出来的运行期缓存，编辑器、CLI、CI、客户端均按同一份目录读写。任何流程都不应以数据库为权威。

![课程目录结构与规模上限契约](/images/authoring/course-directory.svg)

![Section → Unit → Lesson 三段层级与字段合同](/images/authoring/course-hierarchy.svg)

![课程结构总览（实际运行截图：8 Sections / 11 Units / 54 Lessons，词汇·表达·语法 100% 覆盖）](/images/authoring/_real/03-overview.png)

## 适用范围

本文档描述一门语言的完整课程仓库的目录形状、字段合同、规模上限与边界处理。它是编辑器保存逻辑、\`course_cli\` 校验逻辑与 Flutter \`Seeder\` 共同遵守的契约。

应用仓库主版本下另有一份同等地位的 \`docs/authoring/course-layout.md\`，包含 CLI 实现细节。修改字段合同须同步两端并新增测试。

## 目录结构

\`\`\`text
assets/courses/<lang>/
├── index.json              # 课程索引：版本、语言、Section 列表与文件指针
├── vocab.json              # 课程级词汇
├── expressions.json        # 课程级固定表达
├── grammar_points.json     # 课程级语法点
└── sections/
    ├── section1.json       # Section A 的 Unit / Lesson 内容
    ├── section2.json
    └── ...
\`\`\`

\`<lang>\` 使用 BCP 47 简短代码。已落地语言：\`turkish\`。其他语言以 \`index.json\` 中的 \`language\` 字段为准。

> **多课程并存**：\`<lang>\` 路径下只承载一种语言课程；不同语种必须落各自目录，避免 cross-language 引用。

## index.json 字段合同

\`\`\`jsonc
{
  "version": 7,                    // 课程语义版本；任何结构/资源变更必须 +1
  "language": "tr",                // BCP 47 短代码，与目录名一致
  "displayName": "Türkçe",
  "sections": [
    {
      "id": "s-basics",
      "name": "基础起步",
      "description": "...",
      "level": "A1",               // CEFR: A1 / A2 / B1 / B2
      "prerequisiteSectionIds": [],
      "file": "sections/section1.json"
    }
  ]
}
\`\`\`

| 字段 | 必填 | 说明 |
| --- | --- | --- |
| \`version\` | 是 | 整数。客户端在 \`version\` 变化时执行 reseed；同版本不重复导入 |
| \`language\` | 是 | 与目录 \`<lang>\` 一致；不一致时 validate 报错 |
| \`displayName\` | 是 | 客户端展示用，可本地化 |
| \`sections[].id\` | 是 | 全课程稳定；发布后不改 |
| \`sections[].file\` | 是 | 相对课程根目录；必须可解析为现存文件 |
| \`sections[].prerequisiteSectionIds\` | 否 | 跨 Section 解锁依赖；必须为已知 ID 集合 |
| \`sections[].level\` | 是 | Section 目标等级；用于复习调度权重 |

> **ID 一旦发布即不可变**。\`tool/gui\` 拒绝已有节点 ID 的重命名。语义变更须通过新增 + 删除完成。

## Section 文件合同

\`\`\`jsonc
{
  "id": "s-basics",
  "name": "基础起步",
  "units": [
    {
      "id": "u-1",
      "name": "问候与介绍",
      "lessons": [
        {
          "id": "l-u1-greetings-intro",
          "name": "Greetings / Intro",
          "type": "normal",
          "template": "intro",
          "description": "Introduce greeting forms.",
          "prerequisiteLessonIds": [],
          "linkedGrammarPointIds": ["g-greeting-particles"],
          "content": { /* canonical shape */ }
        }
      ]
    }
  ]
}
\`\`\`

层级固定为三段：\`Section → Unit → Lesson\`，不可越级或扩展。

## Canonical content 形状

新内容禁止使用扁平 \`questions\` 列表。每个 \`template\` 对应一个 canonical 容器：

| \`template\` | 首选字段 |
| --- | --- |
| \`intro\` | \`content.subLessons[].stages[]\` |
| \`practice\` | \`content.subLessons[].stages[]\` |
| \`listening\` | \`content.listeningPhases[]\` |
| \`reading\` | \`content.readingPassage\` + \`content.stages[]\` |
| \`review\` | \`content.subLessons[]\` 或 \`content.stages[]\` |
| \`mastery\` | \`content.stages[]\` |
| \`legacy\` | 仅兼容已存在的数据；新内容不得使用 |

完整字段定义见 [Lesson JSON 结构](/authoring/lesson-schema)。所有 \`runtimeType\` 必须已注册；\`vocab.json\` / \`expressions.json\` / \`grammar_points.json\` 中不存在的引用构成 error。

## 规模上限

| 限制 | 值 | 触发动作 |
| --- | ---: | --- |
| 每 Section 的 Unit | ≤ 60 | validate error，保存回滚 |
| 每 Unit 的 Lesson | ≤ 40（生产目标 ≈ 30） | 同上 |
| 每 Lesson 的 stage | 无硬上限 | lint warning 建议 ≤ 12 |
| 每 stage 的 interaction | 无硬上限 | lint warning 建议 ≤ 8 |
| \`index.json.version\` 跨次发布增量 | ≥ 1 | 强制递增；不得复用 |

上限是发布契约，不是编辑器性能极限。超过上限将导致移动端首屏渲染抖动、复习调度计算量失控。

## 引用与单向数据流

\`\`\`text
resources (vocab / expressions / grammar_points)
        │ stable id
        ▼
Lesson.content.interactions[].wordId | expressionId | grammarPointId
        │
        ▼
validate / lint (course_cli) ──► 写盘 ──► 客户端 reseed
\`\`\`

引用只能从 Lesson 指向资源文件，资源不得反向引用 Lesson。同形异义项在 \`pos\` 或释义确实不同、且运行时需要区分时拆为多条；否则保持单一 ID。

## 校验与编辑器契约

\`\`\`bash
# 应用仓库根目录
python tool/course_cli.py validate --course-dir assets/courses/turkish
python tool/course_cli.py lint --course-dir assets/courses/turkish
\`\`\`

\`tool/gui\` 保存按钮**始终**先调用 \`CourseAdapter.save()\`，底层走上述 CLI。GUI 不另行定义校验规则。失败时执行以下原子回滚：

1. 阻塞最终写盘。
2. 标记问题节点（红色角标）。
3. 内存编辑状态保留，可继续修改。
4. 磁盘文件保持失败前的最后一个合法版本。
5. 允许修复后重试保存，不留半写 JSON。

## 版本与重导入

| 触发条件 | \`index.json.version\` 变化 | 客户端动作 |
| --- | --- | --- |
| 字段语义变化 | +1 | reseed（清空进度缓存） |
| 仅修复 \`lint\` 提示 | +1 | reseed |
| 仅文案/翻译润色 | +1（推荐） | reseed |
| 注释/缩进 | 不变 | 不重导入 |

\`version\` 只能递增，不可回退或复用。回滚发布内容时使用**新**的递增版本号，不是恢复旧值。

## 多语言并存

每种语言独立目录、独立版本。跨语言互引不被支持。土耳其语默认目录为 \`assets/courses/turkish/\`。新增语种需：

1. 创建 \`assets/courses/<lang>/\`。
2. 复制最小可运行模板（含 \`index.json\`、\`vocab.json\`、\`expressions.json\`、\`grammar_points.json\`）。
3. 递增该目录自身的 \`version\`。
4. CI 矩阵中追加 validate/lint 任务。

## 与 GUI 工具栏的对应

| GUI 入口 | 影响的目录/字段 |
| --- | --- |
| 课程仓库 → 打开 | 选定根目录，递归加载 \`index.json\` |
| 课程仓库 → 新建 | 写入目录骨架与默认 \`version: 1\` |
| 保存 (Ctrl+S) | \`CourseAdapter.save()\` → 校验 → 写盘 |
| 总览 | 读 \`index.json\` + 所有 \`sections/*.json\`，聚合统计 |
| 资源库 | 直接读写 \`vocab.json\` / \`expressions.json\` / \`grammar_points.json\` |
| 发布 | \`version\` Bump + \`sound-manifest\` + \`validate\` + diff 报告导出 |

## 相关文档

- [Lesson JSON 结构](/authoring/lesson-schema)
- [资源文件](/authoring/resource-files)
- [校验与 Lint](/authoring/validation)
- [音频资产](/authoring/audio-assets)
- [发布检查表](/authoring/release-checklist)
- [教师指南](/authoring/teacher-guide)
`,ma=`# Lesson JSON 结构

> Lesson 是课程发布与运行时加载的最小可执行内容单元。本文档是字段合同的权威定义。

![Lesson canonical content 形状与 runtimeType 枚举](/images/authoring/canonical-shapes.svg)

![课时编辑面板（实际运行截图：右侧元数据 + 蓝图编辑器）](/images/authoring/_real/02-lesson-selected.png)

新内容**必须**使用 canonical 形状。扁平 \`questions\` 仅在迁移历史数据时保留兼容路径。\`tool/gui\` 写入的 JSON 100% 遵循本文档；不接受的形状在保存时直接回滚。

## 顶层字段

\`\`\`jsonc
{
  "id": "l-u1-greetings-intro",
  "name": "Greetings / Intro",
  "description": "Introduce greeting forms.",
  "type": "normal",                  // normal | listening | reading | review | challenge
  "template": "intro",               // intro | practice | listening | reading | review | mastery | legacy
  "prerequisiteLessonIds": [],
  "linkedGrammarPointIds": [],
  "content": { /* canonical */ }
}
\`\`\`

| 字段 | 类型 | 必填 | 约束 |
| --- | --- | --- | --- |
| \`id\` | string | 是 | 全课程稳定且唯一；发布后不可变 |
| \`name\` | string | 是 | 用户可见；可修改；不以 ID 命名 |
| \`description\` | string | 是 | 描述本课的可验证学习目标 |
| \`type\` | enum | 是 | 决定 \`content\` 形状的元约束 |
| \`template\` | enum | 是 | 决定渲染骨架与缺省阶段 |
| \`prerequisiteLessonIds\` | string[] | 否 | 同 Unit 内的依赖；必须存在且无环 |
| \`linkedGrammarPointIds\` | string[] | 否 | 引用 \`grammar_points.json\` |
| \`content\` | object | 是 | 与 \`template\` 匹配的 canonical 内容 |

> \`type\` 与 \`template\` 不等同：\`type\` 是语义类别（普通 / 听力 / 阅读 / 复习 / 挑战），\`template\` 是渲染骨架。\`mastery\` 仅是 template；它服务于 \`type=normal\` 的高阶综合课。

## Canonical content

### \`intro\` / \`practice\` / \`review\` / \`mastery\`

\`\`\`jsonc
{
  "content": {
    "subLessons": [
      {
        "id": "sl-1",
        "name": "Recognition",
        "stages": [
          {
            "id": "st-recognition",
            "name": "词形识别",
            "items": [
              {
                "runtimeType": "showWord",
                "id": "q-hello-show",
                "prompt": "merhaba",
                "translation": "你好",
                "audioAsset": null
              },
              {
                "runtimeType": "multipleChoice",
                "id": "q-hello-meaning",
                "prompt": "merhaba 的意思是？",
                "options": ["你好", "谢谢", "再见"],
                "correctAnswer": "你好"
              }
            ]
          }
        ]
      }
    ]
  }
}
\`\`\`

### \`listening\`

\`\`\`jsonc
{
  "content": {
    "listeningPhases": [
      { "id": "lp-debut",  "kind": "debut",  "audioAsset": "lessons/l-u1/debut.mp3" },
      { "id": "lp-main",   "kind": "main",   "audioAsset": "lessons/l-u1/main.mp3"  },
      { "id": "lp-fin",    "kind": "fin",    "audioAsset": "lessons/l-u1/fin.mp3"   }
    ],
    "stages": [
      {
        "id": "st-comprehension",
        "items": [
          {
            "runtimeType": "listenAndPick",
            "id": "q-listen-1",
            "audioAsset": "lessons/l-u1/main.mp3",
            "prompt": "说话者接下来要去哪里？",
            "options": ["咖啡馆", "图书馆", "公园"],
            "correctAnswer": "咖啡馆"
          }
        ]
      }
    ]
  }
}
\`\`\`

### \`reading\`

\`\`\`jsonc
{
  "content": {
    "readingPassage": {
      "id": "rp-1",
      "title": "伊斯坦布尔的早晨",
      "paragraphs": [
        { "id": "p-1", "text": "..." },
        { "id": "p-2", "text": "..." }
      ],
      "translation": "..."
    },
    "stages": [
      {
        "id": "st-mcq",
        "items": [
          {
            "runtimeType": "readingMcq",
            "id": "q-rmcq-1",
            "prompt": "作者主要在描述？",
            "options": ["交通", "天气", "饮食"],
            "correctAnswer": "天气"
          }
        ]
      }
    ]
  }
}
\`\`\`

## 已注册 runtimeType

| 维度 | \`runtimeType\` | 输入 | 结果 |
| --- | --- | --- | --- |
| 词汇呈现 | \`showWord\` | 词项、释义、音频 | 展示完成 |
| 接受性词汇 | \`multipleChoice\` | 单答案 | 正误 |
| 接受性词汇 | \`multiSelect\` | 多答案 | 集合匹配 |
| 产出 | \`fillBlank\` | 文本 | 标准化匹配 |
| 产出 | \`translateSentence\` | 翻译文本 | 规则或配置判定 |
| 句法 | \`reorderSentence\` | 词块顺序 | 顺序匹配 |
| 听写 | \`typeTheWord\` | 听到的词 | 拼写匹配 |
| 听力 | \`listenAndPick\` | 音频 + 选项 | 正误 |
| 听力 | \`listenOnly\` | 音频 | 播放完成 |
| 阅读 | \`readingMcq\` | 篇章 + 选项 | 正误 |
| 阅读 | \`readingTrueFalse\` | 真 / 假 | 正误 |
| 阅读 | \`readingShortAnswer\` | 简答 | 配置判定 |
| Anki 保真 | \`ankiHtmlCard\` | 原卡 HTML | 四档评分或课程结果 |

> \`runtimeType\` 是闭合枚举。新增题型须先在应用模型注册并补 Flutter 渲染器、CLI 校验规则与 GUI 表单字段，缺一即拒绝发布。

## Stage 与 Interaction

| 对象 | 字段 | 约束 |
| --- | --- | --- |
| Stage | \`id\` | 同 Lesson 内稳定；发布后不改 |
| Stage | \`name\` | 用户可见 |
| Stage | \`items[]\` | Interaction 列表 |
| Interaction | \`id\` | 全 Lesson 内唯一；发布后不改 |
| Interaction | \`runtimeType\` | 必须是已注册枚举值 |
| Interaction | \`prompt\` | 题干；非空 |
| Interaction | \`correctAnswer\` | 必须出现在 \`options\` 或以归一化文本匹配 |
| Interaction | \`wordId\` / \`expressionId\` / \`grammarPointId\` | 引用资源；必须存在 |

> **不得使用数组下标作发布 ID**。所有 ID 必须具备稳定语义，便于定位、错误归因、测试引用与未来的迁移。

## 先修规则

- \`prerequisiteLessonIds\` 引用必须存在。
- 依赖图必须无环。
- 显示顺序不构成依赖关系；解锁靠显式声明。
- 同 Unit 内的先修在运行时强制；跨 Unit / Section 的解锁由更高层处理（\`index.json.sections[].prerequisiteSectionIds\`）。
- 删除 Lesson 时，引用其 ID 的其他 Lesson 必须同步处理（删除引用或保留目标）。

## 引用规则

\`\`\`text
vocab / expressions / grammar_points
        │ stable id
        ▼
Lesson.content.interactions[].{wordId, expressionId, grammarPointId}
        │
        ▼
validate (course_cli) ─► 写入磁盘 ─► 客户端 reseed
\`\`\`

- 题面文本可出现任意语言字符；但**资源 ID 必须来自课程级资源文件**。
- 不得用重复文本替代需要长期追踪的资源 ID。
- 不得在 Lesson 内部复制整份词表。
- 不得引用不存在的音频或资源（validate 拒绝）。
- 不得将编辑器临时状态写入课程 JSON。

## 禁止形状

| 形状 | 后果 |
| --- | --- |
| 未注册的 \`runtimeType\` | validate error |
| 新 Lesson 使用扁平 \`questions\` | validate error |
| 同 Lesson 内 ID 重复 | validate error |
| 在 Lesson 内复制整份词表 | validate error |
| 引用不存在的资源 / 音频 | validate error |
| 编辑器临时状态混入课程 JSON | validate error |
| 空 \`prompt\` / 空 \`options\` / 无 \`correctAnswer\` | validate error 或 lint error |
| 跨 Unit / Section 的 \`prerequisiteLessonIds\` | lint warning（依赖应在更高层声明） |

## 与 GUI 编辑器的对应

| GUI 操作 | 写入字段 |
| --- | --- |
| 树右键 → 新增 Lesson | 弹出模板选择 → 写入 \`template\` + 缺省 \`content\` |
| 模板切换 | 校验目标 \`content\` 形状；不兼容时阻断 |
| 课时编辑器 → 元数据 | 写 \`name\` / \`description\` / \`prerequisiteLessonIds\` |
| 课时编辑器 → 蓝图 | \`listeningPhases[]\` / \`readingPassage.paragraphs[]\` 拖拽排序 |
| 课时编辑器 → 题型卡片 | 增删 \`items[]\`；改 \`runtimeType\` 重渲染表单 |
| 教师模式试做 | 不写盘；纯运行时模拟 |

## 相关文档

- [课程目录约定](/authoring/course-layout)
- [资源文件](/authoring/resource-files)
- [交互题型](/guide/interaction-types)
- [课型说明](/guide/lesson-types)
- [校验与 Lint](/authoring/validation)
- [教材导入](/authoring/textbook-import)
`,pa=`# 发布检查表

> 课程发布是**可重复流程**。完成编辑不等于可以发布。每一节都是硬性门禁；任何一节未通过即阻断。

![发布管线（八阶段）+ 回滚路径 + 灰度窗口](/images/authoring/release-flow.svg)

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
- [ ] 先修依赖存在且无环。
- [ ] 每 Unit 与 Section 未超过规模上限（见 [课程目录约定](/authoring/course-layout)）。
- [ ] Interaction 使用已注册 \`runtimeType\`。
- [ ] 正确答案实际存在于 \`options\` 或经归一化匹配。
- [ ] 音频 / 资源引用可解析（manifest 全绿）。
- [ ] 干扰项来自真实易混项或同范围词汇。

## 3. 自动检查

\`\`\`bash
# 1. 结构校验（必通过，退出码 0）
python tool/course_cli.py validate --course-dir assets/courses/turkish

# 2. 内容 lint（error 必须 0；warning 视团队策略）
python tool/course_cli.py lint --course-dir assets/courses/turkish

# 3. 内容清单（核对规模变化）
python tool/export_content_inventory.py

# 4. 音频 manifest
python tool/course_cli.py audio-manifest --output /tmp/manifest.csv

# 5. 客户端测试（reseed 行为）
flutter test
\`\`\`

任何**非零**退出码阻断发布。\`validate\` 与 \`lint\` 的 JSON 输出须进入 CI 产物。

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

GUI 工具栏「发布」按钮触发：

\`\`\`text
1. 校验（validate + lint）
2. audio-manifest 扫描
3. 自动 version bump（如开启「保存即发布」）
4. 生成 diff 报告（与上一个 git tag 对比）
5. 导出 Markdown 发布报告
6. 写入 release-notes 模板
\`\`\`

非 GUI 场景下等价 CLI：

\`\`\`bash
python tool/course_cli.py publish \\
  --course-dir assets/courses/turkish \\
  --report-out dist/publish-report.md
\`\`\`

## 9. 回滚

- 发布前保留上一个可用 JSON 快照（git tag / 分支）。
- 回滚内容时**仍需使用新的、递增的版本号**。直接恢复旧版本号并假设客户端会重新导入是错误的。
- 回滚流程：
  1. 恢复目标 Section / Unit / Lesson 的 JSON。
  2. \`validate\` + \`lint\` + \`audio-manifest\` 全绿。
  3. 递增 \`index.json.version\`（不回退）。
  4. 客户端强制 reseed。
- 紧急回滚可临时在 \`index.json\` 标 \`disabledSections\` 字段（待实现）；当前采用直接回滚到上一个 tag。

## 10. 灰度与监控

- [ ] 新内容在至少一台 Android 真机 / 一台 iOS 真机上完成冒烟。
- [ ] 关键路径（首课 / 复习 / 听力）日志无异常。
- [ ] 客户端崩溃率（按版本）维持在基线 ±0.1%。
- [ ] 反馈通道（GitHub Issues / 反馈表）开启版本过滤。
- [ ] 24h 内未收到致命问题 → 视为稳定。

## 与 GUI 工具栏的对应

| GUI 操作 | 触发的发布阶段 |
| --- | --- |
| 保存 (Ctrl+S) | 1（校验） |
| 总览 → 校验数 | 1（只读面板） |
| 发布 | 2 + 3 + 4 + 5 |
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
`,va=`# 资源文件

> 词汇、固定表达与语法点**始终**在课程级独立建模。Lesson 通过稳定 ID 引用资源，**不在**课时内复制资源对象。资源独立是引用分析、跨课复用、覆盖率统计、单元级回顾与版本契约的前提。

![资源 → Lesson 的单向引用图（反向引用被拒绝）](/images/authoring/resource-graph.svg)

![资源库：词库标签页（实际运行截图，加载 \`assets/courses/turkish/vocab.json\`）](/images/authoring/_real/04-resource-editor.png)

## 文件清单

\`\`\`text
assets/courses/<lang>/
├── vocab.json
├── expressions.json
└── grammar_points.json
\`\`\`

三个文件结构相近：对象数组 + 课程级 \`version\`。\`expressions.json\` 单独维护版本号，因为表达语义变更需要触发重导入。

## vocab.json

\`\`\`jsonc
{
  "version": 4,
  "items": [
    {
      "id": "w-merhaba",
      "term": "merhaba",
      "translation": "你好",
      "pos": "interjection",
      "ipa": "/meɾˈhaba/",
      "audioAsset": null,
      "example": {
        "sentence": "Merhaba, nasılsın?",
        "translation": "你好，你好吗？"
      },
      "tags": ["greeting", "A1"],
      "cefr": "A1"
    }
  ]
}
\`\`\`

| 字段 | 必填 | 说明 |
| --- | --- | --- |
| \`id\` | 是 | 稳定且全课程唯一；发布后不可变 |
| \`term\` | 是 | 目标语原形；用作规范化去重 key |
| \`translation\` | 是 | 学习者母语释义；非空 |
| \`pos\` | 否 | 词性；运行时用于语法点匹配与排序 |
| \`ipa\` | 否 | IPA 注音；TTS 不可用时由其兜底 |
| \`audioAsset\` | 否 | 相对路径；缺省走运行时 TTS |
| \`example\` | 否 | \`{ sentence, translation }\` |
| \`tags\` | 否 | 检索/过滤标签 |
| \`cefr\` | 否 | 目标等级；与 Section \`level\` 对齐便于统计 |

## expressions.json

\`\`\`jsonc
{
  "version": 2,
  "items": [
    {
      "id": "e-self-intro",
      "term": "Tanıştığımıza memnun oldum",
      "translation": "很高兴认识你",
      "register": "formal",
      "pattern": "Tanıştığımıza memnun oldum",
      "slots": [],
      "audioAsset": null,
      "cefr": "A1"
    }
  ]
}
\`\`\`

| 字段 | 必填 | 说明 |
| --- | --- | --- |
| \`id\` | 是 | 稳定且全课程唯一 |
| \`term\` | 是 | 完整多词单位；不得拆为普通词 |
| \`translation\` | 是 | 学习者母语释义 |
| \`register\` | 否 | \`formal\` / \`informal\` / \`neutral\` / \`slang\` |
| \`pattern\` | 否 | 句法模板；可含 \`{}\` 占位 |
| \`slots[]\` | 否 | 占位说明，运行时用于填空题 |
| \`audioAsset\` | 否 | 整条表达的人录音频 |
| \`cefr\` | 否 | 目标等级 |

> **普通单词不升级为 expression**。多词单位、固定搭配、不可拆解的语块才进入 \`expressions.json\`。\`vocab.json\` 已有词项不因需例句而重复登记为 expression。

### 版本与重导入

\`expressions.json\` 单独维护 \`version\`，与 \`index.json.version\` 组合作为客户端重导入键。修改以下任一字段必须 +1：

- 任何 \`term\` / \`translation\` / \`pattern\` / \`slots\` 的语义变更
- 增删条目导致 ID 集合变化
- \`register\` / \`cefr\` 改变导致复习调度需重算

\`version\` 不可回退；不得复用已发布值。

## grammar_points.json

\`\`\`jsonc
{
  "version": 1,
  "items": [
    {
      "id": "g-greeting-particles",
      "title": "问候语中的敬语形式",
      "description": "merhaba 与 selam 在语域上的差异。",
      "level": "A1",
      "examples": [
        { "sentence": "Merhaba hocam.", "translation": "老师好。" }
      ],
      "linkedVocabIds": ["w-merhaba", "w-selam"],
      "linkedExpressionIds": []
    }
  ]
}
\`\`\`

| 字段 | 必填 | 说明 |
| --- | --- | --- |
| \`id\` | 是 | 稳定且全课程唯一 |
| \`title\` | 是 | 可检索标题 |
| \`description\` | 是 | 规则范围；明确、不重叠 |
| \`level\` | 是 | CEFR 等级 |
| \`examples[]\` | 是 | 充足但有限的例子 |
| \`linkedVocabIds\` | 否 | 反向引用词汇，便于联动覆盖 |
| \`linkedExpressionIds\` | 否 | 反向引用表达 |

> 语法点描述**规则**，**不**承担练习职能。练习题仍在 Lesson 的 \`content.interactions[]\` 中。

## 引用图

\`\`\`text
vocab.json ───────┐
expressions.json ─┼──► Lesson.content.interactions[].{wordId, expressionId}
grammar_points.json ──► Lesson.linkedGrammarPointIds
                    │
                    └──► overview 覆盖率统计
                    └──► 总览 / 资源库跨表搜索
\`\`\`

引用方向**只能**从 Lesson 指向资源。资源不引用 Lesson。

## 去重判定矩阵

| 情况 | 处理 | 操作 |
| --- | --- | --- |
| 同 \`term\` + 同 \`translation\` + 同 \`pos\` | 重复 | 保留既有 ID，丢弃新条目 |
| 同 \`term\` + 不同 \`translation\` | 多义 | 作者人工判定；可能拆为新 ID |
| 同 \`term\` + 同 \`translation\` + 不同 \`pos\` | 不同词性 | 拆为不同 ID，分别标记 \`pos\` |
| 同 \`term\` + 仅标点 / 大小写差异 | 同一条目 | 规范化合并 |
| 形近但 \`term\` 不一致 | 不同条目 | 保留各自 ID |
| 教材抽取碰撞已有 ID | 审校提示 | 合并 / 跳过 / 覆盖（见教材导入） |

规范化 key：\`term\` 小写 + 去除首尾空格 + Unicode 归一化（NFKC）。\`pos\` 不参与 key 决策。

## 安全删除

删除资源前必须执行引用扫描：

\`\`\`bash
python tool/course_cli.py validate --course-dir assets/courses/turkish
\`\`\`

返回的问题列表中会标注 \`unresolved reference\`。GUI 的资源库编辑器在删除前自动做一次跨 Lesson 检索，列出所有引用方与所在 Unit。引用数 > 0 的删除被阻断；如需强制删除，须先在 Lesson 中替换或清除引用。

## CSV 交换

GUI 资源库提供 CSV 导出 / 导入。CSV 列与 JSON 字段一一对应；多值字段以 JSON 字符串或约定分隔符编码。导入策略：

- **覆盖**：按 \`id\` 匹配，原有 JSON 中没有的 ID 视为新增。
- **合并去重**：按 \`id\` 与规范化 key 同时去重；同 ID 但字段不同要求作者确认。
- **报错中断**：发现 ID 冲突时回滚整个导入。

## 变更步骤

1. 编辑资源文件。
2. 同步更新所有 Lesson 引用（ID 变更须先确认引用扫描为空）。
3. 运行 \`validate\` 与 \`lint\`。
4. 导出内容清单核对规模变化与孤立引用。
5. 递增 \`index.json.version\`；\`expressions.json\` 单独 +1。
6. 客户端 reseed 验证。

## 与 GUI 资源库的对应

| GUI 操作 | 字段 |
| --- | --- |
| 资源库 → vocab 标签 | 直读 / 直写 \`vocab.json.items[]\` |
| 资源库 → expressions 标签 | 直读 / 直写 \`expressions.json.items[]\` |
| 资源库 → grammar 标签 | 直读 / 直写 \`grammar_points.json.items[]\` |
| 跨表搜索 | 同时过滤三个标签；大小写不敏感子串 |
| 资源包导出 | 三个 JSON 合并为一个 \`.jsonpack\` |
| 删除前的引用检索 | 扫描所有 \`sections/*.json\` 的 \`wordId\` / \`expressionId\` / \`linkedGrammarPointIds\` |
| 教材抽取 → 入池 | 写入对应 JSON；冲突按去重判定矩阵处理 |

## 相关文档

- [课程目录约定](/authoring/course-layout)
- [Lesson JSON 结构](/authoring/lesson-schema)
- [校验与 Lint](/authoring/validation)
- [教材导入](/authoring/textbook-import)
`,ha=`# 教师指南

> 面向不写代码的教师。目标：在本机完成一节 intro 课的产出、保存、教师试做与提交。不需要 Python / 命令行背景。

完整逐步说明（含验收标准）在应用仓库 \`docs/authoring/teacher-guide.md\`。本文档聚焦 GUI 工具栏与课程树的对应关系。

![Turna GUI 主界面（实际运行截图，加载 \`assets/courses/turkish\`）](/images/authoring/_real/01-main-window.png)

![教师产出一节 intro 课的六步流程与回退路径](/images/authoring/teacher-workflow.svg)

![教师模式试做：真实 Welcome 课的 multipleChoice 题型渲染](/images/authoring/_real/06-teacher-mode.png)

## 0. 准备

1. 从技术对接人处获得 \`turna-gui\`（或对应平台的可执行文件），双击运行。无需安装 Python。
2. 取得课程目录副本（推荐本地副本，不要直接改团队共享目录）。例如 \`我的课程/turkish/\`。
3. 启动后通过工具栏 **「课程仓库 → 打开课程目录」** 选定该目录。
4. 状态栏显示 \`已加载：<路径>\` 即就绪。

> 团队协作请使用 **「资源库 → Git 资源库」** 接入远程仓库；不直接在共享目录写盘，避免覆盖别人未提交的修改。

## 1. GUI 总览

\`\`\`text
+----------------------------------------------------------------------------+
| [课程仓库] [保存] [课程工坊] [总览] [资源库] [发布] [教师模式] [设置]      |
+----------------------------+-----------------------------------------------+
| 课程树 (Section/Unit/      | 详情面板（选中节点后）                       |
|  Lesson)                   |  - 元数据表单                                |
|                            |  - 课时编辑器 / 蓝图 / 题型表单              |
+----------------------------+-----------------------------------------------+
| 状态栏：就绪 | 校验防护激活中 | 当前路径：…                                |
+----------------------------------------------------------------------------+
\`\`\`

## 2. 产出一节 intro 课

### 2.1 新建

1. 在目标 Unit 上右键 → **新增 Lesson**。
2. 弹出模板选择，选 **intro（认识新词）**。
3. 程序自动生成 id（\`l-u{N}-{slug}\`），教师只填：
   - \`name\`：用户可见名称
   - \`description\`：本课的可验证目标（一句话即可）
   - \`prerequisiteLessonIds\`：同 Unit 内必须先完成的课
4. 点击「创建」。模板写入缺省的 canonical \`content\`：
   - \`subLessons[0].stages[0]\`：展示新词（\`showWord\`）
   - \`subLessons[0].stages[1]\`：选择释义（\`multipleChoice\`）
   - \`subLessons[0].stages[2]\`：填空巩固（\`fillBlank\`）

### 2.2 填词

- 词汇**必须**来自 \`vocab.json\`。**禁止**在 Lesson 内复制另一份词表。
- 题型表单的「词项」下拉关联到 \`vocab.json.items[]\`，按 ID 绑定。
- 干扰项从同范围同词性的真实易混项中选取，**不要**填入随机无关词。
- 释义以学习者母语写就；非空、不含占位文本。

### 2.3 保存

1. 点击工具栏 **「保存」**（或 \`Ctrl+S\`）。
2. 触发 \`validate\` + \`lint\`：
   - 通过：磁盘写盘，状态栏显示 \`已保存\`。
   - 失败：状态栏显示 \`校验失败，已回滚\`；问题节点在课程树显示红角标；详情面板列出具体错误与 JSON Pointer 定位。
3. 修复后重新保存，**不**手动编辑 JSON。

### 2.4 教师试做

1. 点击工具栏 **「教师模式」**。
2. 在桌面端模拟学员完整操作一遍：
   - 选词 / 填空 / 听音按钮
   - 故意答错，验证反馈与错题归类
   - 触发「下一课」与「复习」入口
3. 至少一次完整通过该 Lesson。**不通过即视为未完成**。

### 2.5 资源库联检

打开工具栏 **「资源库」**，在该 Lesson 引用的每个词汇/表达/语法点上做一次跳转，确认：

- 引用 ID 存在。
- \`translation\` 与释义一致。
- 无悬挂引用。

## 3. 课程树常用操作

| 操作 | 触发 | 备注 |
| --- | --- | --- |
| 新增 | 右键 → 新增 | 弹出模板选择 |
| 复制 | \`Ctrl+D\` | 复制当前节点及其下级 |
| 重命名 | \`F2\` | 仅改 \`name\`，ID 不变 |
| 上移 / 下移 | \`Ctrl+↑\` / \`Ctrl+↓\` | 仅排序，不影响依赖 |
| 删除 | \`Delete\` | 二次确认；引用数 > 0 时阻断 |
| 套用预设 | 右键 → 套用预设 | 替换为预设的题型组合 |
| AI 编辑此节点 | 右键 → AI 编辑 | 弹窗针对当前节点改写 |
| 批量操作 | \`Ctrl\` / \`Shift\` 多选后右键 | 复制 / 移动 / 删除 |

## 4. 课程工坊（可选）

当产出方式以教材抽取或空白 AI 生成为主时：

1. 工具栏 **「课程工坊」** 打开非模态窗口。
2. 选择 **「从教材新建」** 或 **「空白 AI 项目」**。
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

1. 工具栏 **「发布」** 触发：
   - version bump
   - audio-manifest
   - validate + lint
   - diff 报告生成
2. 全绿后导出 Markdown 发布报告。
3. 把报告与变更 commit 一起提交。详见 [发布检查表](/authoring/release-checklist)。

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

## 下一步

- [课程目录约定](/authoring/course-layout)
- [Lesson JSON 结构](/authoring/lesson-schema)
- [资源文件](/authoring/resource-files)
- [校验与 Lint](/authoring/validation)
- [教材导入](/authoring/textbook-import)
- [发布检查表](/authoring/release-checklist)
- [课型说明](/guide/lesson-types)
`,fa=`# 教材导入

> 教材导入是半自动课程生产流程。模型负责抽取与生成草稿；**作者负责审校、冲突处理、验证与发布**。GUI 工坊是这一流程的唯一入口。

![课程工坊三栏画布（实际运行截图）](/images/authoring/_real/05-workshop.png)

![教材导入流水线：状态灯 / 审校 / 气泡 / 轨道 / 导入策略](/images/authoring/textbook-pipeline.svg)

## 支持输入

| 类型 | 支持范围 | 备注 |
| --- | --- | --- |
| Markdown / 纯文本 | UTF-8 | 按标题切章 |
| PDF | 文本原生 PDF | 扫描件需在外部 OCR 后再导入 |
| Word | \`.doc\` / \`.docx\` | 依赖 \`python-docx\` |
| 图片 | 作为 vision 附件 | 取决于所配置模型的视觉能力 |

源文件**不**复制进项目目录。项目文件仅保存路径引用与抽取结果，便于作者保留单一真理源。

## OCR 与扫描件

OCR 是**可选外部依赖**。GUI 不内置。处理流程：

1. 安装 [Tesseract](https://github.com/tesseract-ocr/tesseract) 与目标语言包。
2. 扫描件 PDF：
   \`\`\`bash
   ocrmypdf input.pdf output.pdf
   \`\`\`
3. 图片：使用 \`pytesseract\` 或在外部工具中转写。
4. 将识别后的文本版 PDF / Markdown 重新导入工坊。

未做 OCR 的扫描件 PDF 会触发「未提取到文本」状态灯。

## 工作区与双轨项目

GUI 工坊（\`tool/gui\` 的非模态窗口）由「项目库」与「创意画布」组成。所有中间产物落在 \`tool/gui/var/textbooks/{project_id}/project.json\`，允许中断后恢复。

| 项目模式 | 建立方式 | 适用 |
| --- | --- | --- |
| **教材项目** | 项目库 → 从教材新建 → 选文件 + 语言对 | 自上而下抽取；Grounded 编排 |
| **空白 AI 项目** | 项目库 → 空白 AI 项目 → 填名称 + 语言对 | 无教材自由生成；左栏教材/知识标记为「(可选)」 |

### 画布三栏

\`\`\`text
┌─ 左栏 ──────────────┐  ┌─ 中栏 AI 轨道 ──────┐  ┌─ 右栏 ───────────────────────┐
│ 教材与章节           │  │ 主题 / CEFR / 模板   │  │ 结构大纲（默认）· 对话 · 导入 │
│ 知识点审校           │  │ 聚焦条 / Ctrl+Enter  │  │ 试做 · diff · AI 修复         │
│ 气泡池（≤ 200）      │  │ [ AI 核心 开始设计 ] │  │                              │
└──────────────────────┘  └──────────────────────┘  └──────────────────────────────┘
\`\`\`

顶栏 checklist：\`○/✓ 素材 · 知识 · 草稿 · 导入\`（可点击跳转）。

## 流程

\`\`\`text
1. 选文件
2. 提取文本
3. 按章节切分
4. 选预设 + 并发数
5. 抽取词汇 / 表达 / 语法点 / 对话
6. 处理红（error）/ 黄（warning）标记
7. 勾选入池
8. 生成 Section / Lesson 草稿
9. 查结构 + 覆盖率 + JSON diff
10. 选冲突策略
11. 导入内存课程项目
12. 在主窗口保存 → 运行 validate + lint
\`\`\`

抽取过程支持中断与续作；勾选、知识点、聊天、草稿、tab/splitter 布局均自动保存。

## 章节抽取

### 滑窗

超出预设字数的章按段落边界切成带重叠的滑窗，逐窗抽取后按键（词 + 翻译 / 语法标题）去重合并。\`id\` 仍按 \`ch-{slug}-\` 确定性生成。预设参数：

| 参数 | 默认 | 含义 |
| --- | --- | --- |
| \`window_chars\` | 12000 | 单次抽取字符上限；\`0\` 关闭 |
| \`overlap_chars\` | 800 | 滑窗重叠字符数 |

### 状态灯

| 灯 | 含义 | 可执行动作 |
| --- | --- | --- |
| 绿 | 抽取通过 | 入池 / 重新抽取 |
| 黄 | 有 warning（空翻译、覆盖率偏低、语言混入） | 修复 / 重抽 |
| 红 | 抽取失败 | 重试 / 仅抽词汇 / 跳过 |
| 灰 | 未抽取 | 触发抽取 |

### 失败级联

\`standard\` 抽取失败时自动降级为「仅词汇（vocab_only）」重试一次（日志写明「自动降级」）。再失败才标红。开关：\`QSettings/textbook/auto_cascade\`，默认开。

### 按质量重抽

对红 / 黄章提供「按质量重抽」，把具体问题（空翻译、覆盖率偏低、语言混入等）回灌给 AI，输出完整修正版替换本章并重算质量分。

## 预设

| 预设 | 目标 | 默认倾向 |
| --- | --- | --- |
| \`general\` | 通用教材 | 均衡抽取 |
| \`grammar\` | 语法书 | 低温度、强调规则 |
| \`dialogue\` | 对话书 | 强调表达与口语 |
| \`reading\` | 阅读材料 | 词汇抽取为主 |

预设仅影响抽取参数与 prompt 块，**不免除审校**。

## 气泡池与 Grounded 生成

入池上限约 200。点击「将选中词加入轨道」或拖入中栏后进入气泡池。生成时 AI 优先从池中选词；池外新词带 \`new\` 标签，便于审校时定位。

## AI 轨道

| 控件 | 含义 |
| --- | --- |
| 主题 | Section 教学主题 |
| CEFR | 目标等级 |
| 单元数 | Section 内 Unit 数（≤ 60） |
| 课时/单元 | 每 Unit 的 Lesson 数（≤ 40） |
| 模板 | 课时 \`template\` 选型 |
| AI 悄悄话 | 编排意图（自然语言） |

聚焦条显示「将使用资源池：N 词 · M 表达 · K 语法」。点「AI 核心」或 \`Ctrl+Enter\` 触发生成。

## 生成模式

| 模式 | 流程 | 适用 |
| --- | --- | --- |
| 快速（整节） | 一次出 Section 草稿 | 草稿探索 |
| 精修（流水线） | Plan → 大纲 → 分课 → 校验 → 质量分 → 修复 → 解释 → ReadyImport | 发布候选 |

精修流水线由 \`backend/ai_pipeline.py\` 状态机驱动；右栏 checklist 实时显示每步状态。**流水线只到草稿为止**。导入仍走原有「校验 → 目标选择 → diff/merge 预览 → 人工确认」流程，**不**自动导入。

修复阶段规则：先规则修复，LLM 仅处理剩余 error，**不得**删除既有 id，否则回滚。

## 对话与高级

右栏「对话与高级」支持：

- 聊天（含多模态附件）
- Prompt 模板库与历史
- \`[genre]\` 多模板（语法书 / 对话书 / 阅读）
- JSON 输出（默认折叠）
- AI 分析失败原因

主参数（主题 / CEFR / 模板）始终在中栏轨道，不在聊天中重复。

## 章节导入

| 策略 | 行为 | 风险 |
| --- | --- | --- |
| 合并预览（默认） | 逐项决定 | 低 |
| 跳过已存在 | 保留现有 Section | 低 |
| 覆盖已存在 | 整体替换 | 高 |
| 作为新 Section | 生成新 ID 并存 | 中 |

幂等：重复导入不制造废节点。

## 冲突处理

\`\`\`text
项目内规范化 key 碰撞
        │
        ▼
   是否与现有课程 ID 冲突？
        ├─ 是 → 三选一：保留 / 覆盖 / 追加新 id
        └─ 否 → 合并为既有 ID
\`\`\`

去重依据规范化 key，**不**依据字符串相似度。\`new\` 标签词条强制人工确认。

## 失败处理

| 现象 | 处置 |
| --- | --- |
| 未切章 | 检查 Markdown 标题层级 |
| PDF 无文本 | 走 OCR 流程 |
| 单章抽取失败 | 重试 / 仅抽词汇 / 跳过 |
| JSON 不通过 | 回到草稿修复，不直接覆盖 |
| 价格未知 | 只显示 Token，不生成误导性成本 |

## 语言对抽取模板

\`Turkish ↔ Chinese\` 内置抽取规则块（强调元音和谐、敬语形式、term 禁止中文字符、翻译用简体中文）。其他语言对可在「设置 → 提取 Prompt」tab 持久化覆盖。优先级：

\`\`\`text
内存 register > 持久化覆盖 > 内置语言对包 > 内置默认
\`\`\`

实现见 \`tool/gui/src/backend/knowledge_prompt.py\` 与 \`tool/gui/src/backend/ai_prompt_library.py\`。

## 性能与节流

- 气泡池增量刷新 + debounce。
- 草稿自动保存节流。
- 校验始终只走 \`CourseAdapter\` / \`course_cli\`，不绕开。

## 快捷键

| 键 | 动作 |
| --- | --- |
| \`Ctrl+Enter\` | 从轨道生成 |
| \`Esc\` | 任务进行中：确认后取消 |
| 头栏 checklist 单元 | 跳转到对应栏 |

## 与 GUI 主窗口的衔接

\`\`\`text
工坊草稿 ──import──► 主窗口课程树（新增/合并/覆盖/追加）
                       │
                       ▼
                  主窗口保存 (Ctrl+S)
                       │
                       ▼
            CourseAdapter.save() → validate + lint
                       │
                       ▼
                  磁盘 JSON 写盘
\`\`\`

导入成功后 GUI 可询问是否「切换教师模式并定位该章节（及首课）」。导入后**必须**在主窗口保存。

## 相关文档

- [课程编辑器](/guide/editor)
- [课程目录约定](/authoring/course-layout)
- [资源文件](/authoring/resource-files)
- [Lesson JSON 结构](/authoring/lesson-schema)
- [校验与 Lint](/authoring/validation)
- [发布检查表](/authoring/release-checklist)
`,ga=`# 校验与 Lint

> 课程发布前同时执行**结构校验**与**内容 lint**。结构校验回答「能否安全加载」；lint 回答「是否符合生产约定」。两者不可互相替代。

![GUI 保存协议与回滚时序：Author / CourseAdapter / course_cli / 磁盘 JSON 四泳道](/images/authoring/save-rollback.svg)

## 命令

\`\`\`bash
python tool/course_cli.py validate --course-dir assets/courses/turkish
python tool/course_cli.py lint --course-dir assets/courses/turkish
\`\`\`

GUI 与 CI 走机器可读输出：

\`\`\`bash
python tool/course_cli.py validate \\
  --format json \\
  --course-dir assets/courses/turkish
\`\`\`

### 退出码契约

| 退出码 | 含义 | 调用方决策 |
| ---: | --- | --- |
| \`0\` | 通过 | 继续 |
| \`1\` | validate error | 阻断保存 / 阻断发布 |
| \`2\` | lint error | 阻断发布；不阻断保存 |
| \`3\` | 内部错误（IO / 解析） | 阻断保存，提示修复环境 |
| \`64+\` | 保留 | 由 CLI 内部扩展 |

调用方根据退出码与 JSON \`ok\` 字段判定结果，**不**通过解析自然语言日志推断成功。

## JSON 输出 schema

\`\`\`json
{
  "ok": false,
  "exitCode": 1,
  "scope": "validate",
  "courseDir": "assets/courses/turkish",
  "errorCount": 1,
  "warningCount": 0,
  "problems": [
    {
      "id": "unresolved-reference",
      "level": "error",
      "code": "E_REFERENCE",
      "path": "sections/section1.json#/units/0/lessons/2/content/subLessons/0/stages/0/items/0/wordId",
      "message": "Lesson l-u1-greetings-intro 引用了不存在的 vocab id: w-merhab",
      "suggestion": "检查 vocab.json；该 id 是否拼写错误或已被删除"
    }
  ]
}
\`\`\`

| 字段 | 说明 |
| --- | --- |
| \`ok\` | 顶层布尔；error=0 且 warning=0 时为 true |
| \`exitCode\` | 与进程退出码一致 |
| \`scope\` | \`validate\` / \`lint\` |
| \`problems[].id\` | 机器可读 ID，便于聚合 |
| \`problems[].level\` | \`error\` / \`warning\` / \`info\` |
| \`problems[].code\` | 错误族编号（\`E_*\` / \`W_*\`） |
| \`problems[].path\` | JSON Pointer；GUI 用于定位红角标 |
| \`problems[].suggestion\` | 人类可读建议（可本地化） |

## validate 范围（error 级别）

| 类别 | 检查 |
| --- | --- |
| 解析 | 所有 JSON 可解析 |
| 索引 | \`index.json\` 指向存在的 Section 文件 |
| 层级 | Section / Unit / Lesson 三段合法，无空层 |
| 规模 | Unit / Lesson 数量不超过上限 |
| ID | 全局唯一；同 Lesson 内 interaction ID 不重复 |
| 先修 | 引用存在；依赖图无环 |
| 形状 | \`type\` / \`template\` / \`content\` 三者相容 |
| runtimeType | 已注册 |
| 资源引用 | \`wordId\` / \`expressionId\` / \`grammarPointId\` / \`audioAsset\` 全部可解析 |
| 选项 | \`correctAnswer\` 出现在 \`options\` 中或可经归一化匹配 |
| 版本 | \`index.json.version\` 严格递增；不复用 |
| 音频 | 听力课的 \`audioAsset\` 在 \`assets/sounds/<lang>/\` 中存在 |

## lint 范围（warning 级别）

| 类别 | 检查 |
| --- | --- |
| 命名 | 命名与 ID 模式一致；避免无意义前缀 |
| 形状 | 新内容使用 canonical；不再引入扁平 \`questions\` |
| 资源 | 孤立资源（无 Lesson 引用）；跨表重复条目 |
| 描述 | 空描述、占位文本、模板套话 |
| 干扰项 | 选择题选项不足、正确率失衡、随机无关词 |
| 难度 | 同 stage 内梯度断层；产出题前置识别题 |
| 听力 | 重播缺失、文本边界过短 |
| 资源卫生 | 词汇数 ≠ 实际引用数；超长章未切窗 |

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

错误未消除时，**禁止**手动覆盖磁盘文件绕过校验。如确认是校验器误报，先在应用仓库修复校验器与对应测试，再回到 GUI 重新保存。

## CI 集成

CI 矩阵对每门语言各跑一次：

\`\`\`bash
python tool/course_cli.py validate --format json --course-dir assets/courses/<lang> \\
  | python tool/check_problems.py --max-error 0
python tool/course_cli.py lint --format json --course-dir assets/courses/<lang> \\
  | python tool/check_problems.py --max-warning 100
\`\`\`

\`check_problems.py\` 解析 \`problems[]\` 计数并比对阈值，输出符合 SARIF / GitHub Actions 注解的格式。

## 与 Dart 端对齐

Flutter \`Seeder\` 在客户端重新导入时执行 Dart 版本校验。\`validate\` 规则**必须**与 \`course_cli\` 一致；否则会出现「编辑器通过、App 端报错」。修改任何合同须：

1. 同步修改 \`course_cli\` 校验器。
2. 同步修改 \`Seeder\` 校验器。
3. 两端各加测试用例。
4. 在本文件中更新对应条目。

## 发布门禁

通过 validate + lint 是**必要**条件，不是充分条件。完整发布门禁见 [发布检查表](/authoring/release-checklist)：

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

## 与 GUI 校验面板的对应

| GUI 元素 | 数据源 |
| --- | --- |
| 课程树红角标 | \`problems[].path\` 反向解析到节点 |
| 「全部修复」按钮 | 调 AI 按节点分批 merge；不阻断保存 |
| 状态栏 \`校验防护激活中\` | 标志 \`CourseAdapter.save()\` 可用 |
| 总览「校验数」可点跳转 | 跳到本面板并定位第一条 error |

## 相关文档

- [课程目录约定](/authoring/course-layout)
- [Lesson JSON 结构](/authoring/lesson-schema)
- [资源文件](/authoring/resource-files)
- [发布检查表](/authoring/release-checklist)
- [测试与质量门禁](/developer/testing)
`,ba=`# Android 构建

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
`,ka=`# 架构总览

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
`,_a=`# 术语表

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
`,Sa=`# 本地数据模型

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
`,ya=`# 测试与质量门禁

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
`,Ia=`# Web 与文档站构建

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
`,Aa=`# 可访问性

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
`,La=`# 配置 AI

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
`,$a=`# AI 工作流

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
`,Pa=`# AI 伴学

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
`,Ta=`# 导入 Anki 牌组

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
`,xa=`# 卡片渲染与网络隔离

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
`,wa=`# Anki 集成

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
`,Na=`# 音频、TTS 与朗读

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
`,Ca=`# 课程结构

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
`,Oa=`# 本地数据与隐私

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
`,Va=`# 课程编辑器

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
`,Ma=`# 常见问题

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
`,Ra=`# 核心能力一览

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

`,Da=`# FSRS 复习

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
`,Fa=`# 快速开始

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
`,Ea=`# 安装应用

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
`,Ua=`# 交互题型

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
`,Ha=`# 标准学习流程

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
`,ja=`# 课型说明

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
`,Ba=`# 记忆状态与评分

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
`,Ja=`# 错题与弱项

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
`,Ga=`# 复习系统

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
`,Wa=`# 设置系统

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
`,qa=`# 故障排查

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
`,za=`# 什么是 Turna？

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
`,Ka=`# 如何丰富文档

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
`,Qa=`---
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
`;async function Ya(n,e=navigator.clipboard,t=document){if(e)try{return await e.writeText(n),!0}catch{}try{const s=t.createElement("textarea");s.value=n,s.style.position="fixed",s.style.opacity="0",t.body.appendChild(s),s.select();const o=t.execCommand("copy");return s.remove(),o}catch{return!1}}const Xa={key:0,class:"copy-page-source"},Za=f({__name:"CopyPage",setup(n){const{page:e}=Ln(),t=Object.assign({"../../authoring/audio-assets.md":ua,"../../authoring/course-layout.md":da,"../../authoring/lesson-schema.md":ma,"../../authoring/release-checklist.md":pa,"../../authoring/resource-files.md":va,"../../authoring/teacher-guide.md":ha,"../../authoring/textbook-import.md":fa,"../../authoring/validation.md":ga,"../../developer/android-build.md":ba,"../../developer/architecture.md":ka,"../../developer/glossary.md":_a,"../../developer/local-data.md":Sa,"../../developer/testing.md":ya,"../../developer/web-docs-build.md":Ia,"../../guide/accessibility.md":Aa,"../../guide/ai-configuration.md":La,"../../guide/ai-workflows.md":$a,"../../guide/ai.md":Pa,"../../guide/anki-import.md":Ta,"../../guide/anki-rendering.md":xa,"../../guide/anki.md":wa,"../../guide/audio-and-tts.md":Na,"../../guide/curriculum.md":Ca,"../../guide/data-and-privacy.md":Oa,"../../guide/editor.md":Va,"../../guide/faq.md":Ma,"../../guide/features.md":Ra,"../../guide/fsrs.md":Da,"../../guide/getting-started.md":Fa,"../../guide/install-app.md":Ea,"../../guide/interaction-types.md":Ua,"../../guide/learning-workflow.md":Ha,"../../guide/lesson-types.md":ja,"../../guide/memory-state.md":Ba,"../../guide/mistakes-and-weak-items.md":Ja,"../../guide/review-system.md":Ga,"../../guide/settings.md":Wa,"../../guide/troubleshooting.md":qa,"../../guide/what-is-turna.md":za,"../../guide/writing-docs.md":Ka,"../../index.md":Qa}),s=P("idle");let o;const c=y(()=>t[`../../${e.value.relativePath}`]||""),r=y(()=>s.value==="copied"?"已复制全文":s.value==="failed"?"复制失败":"复制全文");async function u(){c.value&&(s.value=await Ya(c.value)?"copied":"failed",o&&clearTimeout(o),o=setTimeout(()=>{s.value="idle"},1800))}return On(()=>{o&&clearTimeout(o)}),(p,k)=>c.value?(a(),d("div",Xa,[k[1]||(k[1]=i("span",null,"FORMAT / MARKDOWN · SCOPE / CURRENT PAGE",-1)),i("button",{type:"button",class:w({copied:s.value==="copied"}),onClick:u},[k[0]||(k[0]=i("svg",{viewBox:"0 0 24 24","aria-hidden":"true"},[i("path",{d:"M8 7V5.8C8 4.8 8.8 4 9.8 4h8.4c1 0 1.8.8 1.8 1.8v8.4c0 1-.8 1.8-1.8 1.8H17M5.8 8h8.4c1 0 1.8.8 1.8 1.8v8.4c0 1-.8 1.8-1.8 1.8H5.8c-1 0-1.8-.8-1.8-1.8V9.8C4 8.8 4.8 8 5.8 8Z"})],-1)),D(" "+I(r.value),1)],2)])):h("",!0)}}),er={extends:An,Layout:()=>yn(An.Layout,null,{"doc-before":()=>yn(Za)}),enhanceApp({app:n}){n.component("HomeContent",ca)}};export{er as R,vo as c,L as u};
