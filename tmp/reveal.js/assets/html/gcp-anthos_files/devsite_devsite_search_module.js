(function(_ds){var window=this;var wda=function(a){return(0,_ds.T)('<div class="devsite-popout" id="'+_ds.V(a.id)+'"><div class="devsite-popout-result devsite-suggest-results-container" devsite-hide></div></div>')},x8=function(a){let b='<button type="submit" class="button button-white devsite-search-project-scope">';a="All results in "+_ds.U(a);return(0,_ds.T)(b+a+"</button>")},y8=function(a,b,c){let d='<button type="submit" class="button button-white devsite-suggest-all-results">';b?(a="All results across "+_ds.U(c),d+=a):(a=
'All results for "'+_ds.U(a)+'"',d+=a);return(0,_ds.T)(d+"</button>")},z8=function(a,b,c,d,e,f,g,h){a=(c?"":'<devsite-analytics-scope action="'+_ds.V(_ds.X("Restricted "+d))+'">')+'<a class="devsite-result-item-link" href="'+_ds.V(_ds.X(a))+'"><span class="devsite-suggestion-fragment">'+_ds.U(b)+"</span>"+(h?'<span class="devsite-suggestion-fragment">'+_ds.U(h)+"</span>":"")+(e?'<span class="devsite-suggestion-fragment">'+_ds.U(e)+"</span>":"")+(_ds.ur(f)&&!g?'<span class="devsite-suggestion-fragment">'+
_ds.U(f)+"</span>":"");c||(a+='<span class="devsite-result-item-confidential">Confidential</span>');return(0,_ds.T)(a+("</a>"+(c?"":"</devsite-analytics-scope>")))},xda=function(a){var b=a.projectName,c=a.Wt,d=a.query,e=a.ou;a=a.Ou;b='<div class="devsite-suggest-wrapper '+(e?"":"devsite-search-disabled")+'"><div class="devsite-suggest-section"><div class="devsite-result-label">There are no suggestions for your query</div></div>'+((e?'<div class="devsite-suggest-footer">'+(c?x8(b):"")+y8(d,c,a)+"</div>":
"")+"</div>");return(0,_ds.T)(b)},yda=function(a){var b=a.pages,c=a.eB,d=a.mB,e=a.projectName,f=a.Wt,g=a.query,h=a.qB,k=a.ou;a=a.Ou;let l='<div class="devsite-suggest-wrapper '+(k?"":"devsite-search-disabled")+'" tabindex="0" role="list"><div class="devsite-suggest-section">';if(0<d.length){l=l+'<div class="devsite-suggest-sub-section" role="listitem"><div class="devsite-suggest-header" id="devsite-suggest-header-partial-query" role="heading" aria-level="2">Suggested searches'+((f?'<span class="devsite-suggest-project">'+
_ds.U(e)+"</span>":"")+'</div><devsite-analytics-scope category="Site-Wide Custom Events" label="Search" role="list" aria-labelledby="devsite-suggest-header-partial-query" action="Query Suggestion Click">');var n=d.length;for(var m=0;m<n;m++){var r=d[m];l+='<div class="devsite-result-item devsite-nav-label" id="suggestion-partial-query-'+_ds.V(m)+'" role="listitem" index=":'+_ds.V(m)+'">'+z8(r.hc(),r.Bb(),_ds.Je(r,14),"Query Suggestion Click")+"</div>"}l+="</devsite-analytics-scope></div>"}l+=0<d.length&&
0<b.length?'<hr role="none">':"";if(0<b.length){l=l+'<div class="devsite-suggest-sub-section" role="listitem"><div class="devsite-suggest-header" id="devsite-suggest-header-product" role="heading" aria-level="2">Pages'+((f?'<span class="devsite-suggest-project">'+_ds.U(e)+"</span>":"")+'</div><devsite-analytics-scope category="Site-Wide Custom Events" label="Search" role="list" aria-labelledby="devsite-suggest-header-product" action="Page Suggestion Click">');n=b.length;for(m=0;m<n;m++)r=b[m],l+=
'<div class="devsite-result-item devsite-nav-label" id="suggestion-product-'+_ds.V(m)+'" role="listitem" index=":'+_ds.V(m)+'">'+z8(r.hc(),r.Bb(),_ds.Je(r,14),"Page Suggestion Click",void 0,_ds.v(r,4),f)+"</div>";l+="</devsite-analytics-scope></div>"}l+=0<h.length&&0<b.length+d.length?'<hr role="none">':"";if(0<h.length){l=l+'<div class="devsite-suggest-sub-section" role="listitem"><div class="devsite-suggest-header" id="devsite-suggest-header-reference" role="heading" aria-level="2">Reference'+((f?
'<span class="devsite-suggest-project">'+_ds.U(e)+"</span>":"")+'</div><devsite-analytics-scope category="Site-Wide Custom Events" label="Search" role="list" aria-labelledby="devsite-suggest-header-reference" action="Reference Suggestion Click">');n=h.length;for(m=0;m<n;m++)r=h[m],l+='<div class="devsite-result-item devsite-nav-label" id="suggestion-reference-'+_ds.V(m)+'" role="listitem" index=":'+_ds.V(m)+'">'+z8(r.hc(),r.Bb(),_ds.Je(r,14),"Reference Suggestion Click",_ds.v(r,3),_ds.v(r,4),f,_ds.He(r,
10)[0])+"</div>";l+="</devsite-analytics-scope></div>"}l+=0<c.length&&0<b.length+d.length+h.length?'<hr role="none">':"";if(0<c.length){l+='<div class="devsite-suggest-sub-section" role="listitem"><div class="devsite-suggest-header" id="devsite-suggest-header-other-products" role="heading" aria-level="2"><span role="columnheader">Products</span></div><devsite-analytics-scope category="Site-Wide Custom Events" label="Search" role="list" aria-labelledby="devsite-suggest-header-other-products" action="Product Suggestion Click">';
b=c.length;for(d=0;d<b;d++)h=c[d],l+='<div class="devsite-result-item devsite-nav-label" id="suggestion-other-products-'+_ds.V(d)+'" role="listitem" index=":'+_ds.V(d)+'">'+z8(h.hc(),h.Bb(),_ds.Je(h,14),"Product Suggestion Click")+"</div>";l+="</devsite-analytics-scope></div>"}l+="</div>"+(k?'<div class="devsite-suggest-footer">'+(f?x8(e):"")+y8(g,f,a)+"</div>":"")+"</div>";return(0,_ds.T)(l)};var zda=/[ .()<>{}\[\]\/:,]+/,Ada=0,Dda=function(a){a.j&&(a.m.listen(a.j,"suggest-service-search",b=>{a:{var c=a.ea.querySelector(".highlight");if(c&&(c=c.querySelector(".devsite-result-item-link"))){c.click();break a}A8(a,b.detail.originalEvent,!!a.oa)}}),a.m.listen(a.j,"suggest-service-suggestions-received",b=>void Bda(a,b)),a.m.listen(a.j,"suggest-service-focus",()=>{B8(a,"cloud-track-search-focus",null);a.Ca=!0;C8(a,!0)}),a.m.listen(a.j,"suggest-service-blur",()=>{C8(a,!1)}),a.m.listen(a.j,"suggest-service-input",
()=>{!a.xa["Text Entered Into Search Bar"]&&a.j.query.trim()&&(a.dispatchEvent(new CustomEvent("devsite-analytics-observation",{detail:{category:"Site-Wide Custom Events",label:"Search",action:"Text Entered Into Search Bar"},bubbles:!0})),a.xa["Text Entered Into Search Bar"]=!0);a.Ca&&(B8(a,"cloud-track-search-input",null),a.Ca=!1)}),a.m.listen(a.j,"suggest-service-navigate",b=>void Cda(a,b)),a.m.listen(document.body,"devsite-page-changed",()=>a.xa={}),_ds.UK(a.j));a.o&&a.m.listen(a.o,"submit",b=>
{A8(a,b)});a.ea&&a.m.listen(a.ea,"click",b=>{const c=b.target;var d=c.closest(".devsite-result-item-link");d&&(C8(a,!1),d=`suggestion: ${d.getAttribute("href")}`,B8(a,"cloud-track-search-submit",d));c.classList.contains("devsite-search-project-scope")&&A8(a,b,!0)});a.Ea&&a.m.listen(a.Ea,"click",()=>void C8(a,!0));a.Da&&a.m.listen(a.Da,"click",()=>void C8(a,!1))},Bda=function(a,b){a.Aa=null;b=b.detail;var c=b.suggestions;const d=b.query;if(a.j.query.toLowerCase().startsWith(d.toLowerCase()))if(c){var e=
c.Ye();0<e.length&&(b=e.filter(r=>r.Bb().includes(d)),0<b.length&&(a.Aa=b[0].Bb()));b=e.filter(r=>2===r.Mg());c=e.filter(r=>3===r.Mg());var f=e.filter(r=>4===r.Mg()).slice(0,5),g=e.filter(r=>1===r.Mg());e=b.length+f.length+g.length;for(var h of f)h.Ii(_ds.Ij(`${a.oa||"/s/results"}/?q=${h.Bb()}`).toString());var k=d.split(zda);c.forEach(r=>_ds.mK(r,_ds.He(r,10).filter(z=>k.some(B=>z.includes(B)))));h=a.getAttribute("project-name")||"";var l=a.hasAttribute("project-scope"),n=a.hasAttribute("enable-search"),
m=a.getAttribute("tenant-name")||"";b={pages:b,projectName:h,Wt:l,eB:g,mB:f,query:d,qB:c,ou:n,Ou:m};0===e?_ds.I(a.$,xda,b):(_ds.I(a.$,yda,b),Eda(a,d));a.setAttribute("aria-expanded","true");a.$.removeAttribute("hidden")}else a.$.setAttribute("hidden",""),a.setAttribute("aria-expanded","false")},B8=function(a,b,c){a.dispatchEvent(new CustomEvent(b,{detail:{type:"search",name:b,position:"nav",metadata:{eventDetail:c}},bubbles:!0}))},C8=function(a,b){if(a.Fa!==b){_ds.QK(a.j,b);if(a.Fa=b)a.setAttribute("search-active",
"");else{let c=a.ea.querySelector(".highlight");c&&c.classList.remove("highlight");a.removeAttribute("search-active");a.setAttribute("aria-expanded","false");_ds.ji(a.$)}a.hasAttribute("capture")||a.dispatchEvent(new CustomEvent("devsite-search-toggle",{detail:{active:b},bubbles:!0}))}},Cda=function(a,b){var c=b.detail;b=a.$.querySelector(".highlight");let d;const e=Array.from(a.$.querySelectorAll(".devsite-result-item"));let f=[];let g,h=-1;if(b){var k=_ds.Ii(b,l=>l.classList.contains("devsite-suggest-section"));
f=Array.from(k.querySelectorAll(".devsite-result-item"));k=_ds.ri(b.parentNode.parentNode);g=_ds.si(b.parentNode.parentNode);h=e.indexOf(b)}switch(c.keyCode){case 37:if(!k&&!g)return;b&&(c=b.getAttribute("index"),g?(d=g.querySelector('[index="'+c+'"]'))||(d=_ds.Ia(Array.from(g.querySelectorAll("[index]")))):k&&((d=k.querySelector('[index="'+c+'"]'))||(d=_ds.Ia(Array.from(k.querySelectorAll("[index]"))))));break;case 39:if(!k&&!g)return;b&&(c=b.getAttribute("index"),k?(d=k.querySelector('[index="'+
c+'"]'))||(d=_ds.Ia(Array.from(k.querySelectorAll("[index]")))):g&&((d=g.querySelector('[index="'+c+'"]'))||(d=_ds.Ia(Array.from(g.querySelectorAll("[index]"))))));break;case 38:b?(d=e[h-1])||(d=_ds.Ia(f)):d=_ds.Ia(e);break;case 40:b?(d=e[h+1])||(d=f[0]):d=e[0]}b&&(b.classList.remove("highlight"),b.removeAttribute("aria-selected"));d&&(a.ra.setAttribute("aria-activedescendant",d.id),d.setAttribute("aria-selected","true"),d.classList.add("highlight"),d.scrollIntoViewIfNeeded&&d.scrollIntoViewIfNeeded()||
d.scrollIntoView())},A8=async function(a,b,c=!1){b.preventDefault();b.stopPropagation();a.hasAttribute("enable-search")&&(a.xa["Full Site Search"]||(a.dispatchEvent(new CustomEvent("devsite-analytics-observation",{detail:{category:"Site-Wide Custom Events",label:"Search",action:"Full Site Search"},bubbles:!0})),a.xa["Full Site Search"]=!0),B8(a,"cloud-track-search-submit",a.Aa?`contains: ${a.Aa}`:"no match"),b=c&&a.oa?_ds.Ij(a.oa):_ds.Ij(a.o.getAttribute("action")),c=new _ds.bj(b.href),_ds.oj(c,"q",
a.j.query),b.search=c.h.toString(),await DevsiteApp.fetchPage(b.href),C8(a,!1))},Eda=function(a,b){b=new RegExp(`(${_ds.Lh(b)})`,"ig");a=a.$.querySelectorAll(".devsite-suggestion-fragment");for(const c of a)a=c.innerHTML,a=a.replace(b,"<b>$1</b>"),_ds.Xc(c,_ds.fg(a))},D8=class extends _ds.A{static get observedAttributes(){return["project-scope","url-scoped","disabled"]}constructor(){super();this.Fa=!1;this.xa={};this.Ba="";this.oa=null;this.m=new _ds.E;this.j=null;this.Ca=!1}disconnectedCallback(){_ds.G(this.m);
this.j&&(this.j.dispose(),this.j=null)}attributeChangedCallback(a,b,c){switch(a){case "project-scope":this.Ba=c||"";this.j&&(this.j.xa=this.Ba);break;case "url-scoped":this.oa=c;break;case "disabled":this.ra&&(this.ra.disabled=null!==c)}}connectedCallback(){if(this.o=this.querySelector("form")){this.ra=this.o.querySelector(".devsite-search-query");this.Ea=this.o.querySelector(".devsite-search-button[search-open]");this.Da=this.querySelector(".devsite-search-button[search-close]");var a=`devsite-search-popout-container-id-${++Ada}`;
this.ra.setAttribute("aria-controls",a);this.ea=_ds.L(wda,{id:a});this.$=this.ea.querySelector(".devsite-suggest-results-container");this.o.appendChild(this.ea);this.hasAttribute("project-scope")&&(this.Ba=this.getAttribute("project-scope"));this.hasAttribute("url-scoped")&&(this.oa=this.getAttribute("url-scoped"));this.o&&this.ra&&(this.j=new _ds.VK(this,this.o,this.ra),this.j.j=!0,this.j.Da=this.hasAttribute("enable-query-completion"),this.j.ra=!0,this.j.Aa=!0,this.j.Ea=!0,this.j.xa=this.Ba,this.j.j=
this.hasAttribute("enable-suggestions"));Dda(this)}}};D8.prototype.connectedCallback=D8.prototype.connectedCallback;D8.prototype.attributeChangedCallback=D8.prototype.attributeChangedCallback;D8.prototype.disconnectedCallback=D8.prototype.disconnectedCallback;try{window.customElements.define("devsite-search",D8)}catch(a){console.warn("devsite.app.customElement.DevsiteSearch",a)};})(_ds_www);
