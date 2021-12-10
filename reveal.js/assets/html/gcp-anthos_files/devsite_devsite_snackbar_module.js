(function(_ds){var window=this;var Jda=function(){return(0,_ds.T)('<div class="devsite-snackbar-snack" type="loading" role="alert"><div class="devsite-snackbar-inner"><div class="devsite-snackbar-message">Loading</div><div class="devsite-snackbar-action"><devsite-spinner single-color="#ffffff"></devsite-spinner></div></div></div>')},Kda=function(){return(0,_ds.T)('<div class="devsite-snackbar-snack" type="signin-state-changed" role="alert"><div class="devsite-snackbar-inner"><div class="devsite-snackbar-message">Your signed in state has changed.</div><button class="devsite-snackbar-action devsite-snackbar-action--reload">Reload</button><button class="devsite-snackbar-action devsite-snackbar-action--dismiss">OK</button></div></div>')},
Lda=function(){return(0,_ds.T)('<div class="devsite-snackbar-snack" type="refresh" role="alert"><div class="devsite-snackbar-inner"><div class="devsite-snackbar-message">A new version is available</div><button class="devsite-snackbar-action">Refresh</button></div></div>')},Mda=function(){return(0,_ds.T)('<div class="devsite-snackbar-snack" type="error" role="alert"><div class="devsite-snackbar-inner"><div class="devsite-snackbar-message">Something went wrong. Please try again.</div><button class="devsite-snackbar-action">Retry</button></div></div>')},
Nda=function(){return(0,_ds.T)('<div class="devsite-snackbar-snack" type="copied-to-clipboard" role="alert"><div class="devsite-snackbar-inner"><div class="devsite-snackbar-message">Copied to clipboard</div></div></div>')},Oda=function(a){a=a||{};a=a.Tr;a='<div class="devsite-snackbar-snack" type="cookie-notification" role="alert"><div class="devsite-snackbar-inner"><div class="devsite-snackbar-message">Google uses cookies to deliver its services, to personalize ads, and to analyze traffic. You can adjust your privacy controls anytime in your <a href="//myaccount.google.com/intro/data-and-personalization">Google settings</a>.</div><a href="'+
((a?_ds.V(_ds.X(a)):"//policies.google.com/technologies/cookies")+'" class="devsite-snackbar-link button">');return(0,_ds.T)(a+'More details</a><button class="devsite-snackbar-action">OK</button></div></div>')},G8=function(a){a=a||{};a=a.Tr;a='<div class="devsite-snackbar-snack" type="cookie-notification" role="alert"><div class="devsite-snackbar-inner"><div class="devsite-snackbar-message">This site uses cookies from Google to deliver its services and to analyze traffic.</div><a href="'+((a?_ds.V(_ds.X(a)):
"//policies.google.com/technologies/cookies")+'" class="devsite-snackbar-link button">');return(0,_ds.T)(a+'More details</a><button class="devsite-snackbar-action">OK</button></div></div>')},Pda=function(){return(0,_ds.T)('<div class="devsite-snackbar-snack" type="support-attachment-error" role="alert"><div class="devsite-snackbar-inner"><div class="devsite-snackbar-message">Unsupported file type.</div><button class="devsite-snackbar-action">OK</button></div></div>')},Qda=function(a){var b=a.message,
c=a.link,d=a.hA;a='<div class="devsite-snackbar-snack" type="'+_ds.V(a.RB)+'" role="alert"><div class="devsite-snackbar-inner"><div class="devsite-snackbar-message">'+_ds.U(b)+'</div><button class="devsite-snackbar-action">';a=a+'No, thanks</button><a href="'+(_ds.V(_ds.X(c))+'" class="devsite-snackbar-link button" target="_blank">');a=d?a+_ds.U(d):a+"OK";return(0,_ds.T)(a+"</a></div></div>")},Rda=function(a){var b=a.gA,c=a.link,d=a.Ce,e=a.NB;a='<div class="devsite-snackbar-snack" type="custom" role="alert"><div class="devsite-snackbar-inner"><div class="devsite-snackbar-message">'+
_ds.U(a.message)+"</div>";e&&(a+='<button class="devsite-snackbar-action">OK</button>');a+=(_ds.ur(c)&&_ds.ur(b)?'<a href="'+_ds.V(_ds.X(c))+'"'+(d?' target="_blank"':"")+' class="devsite-snackbar-link button">'+_ds.U(b)+"</a>":"")+"</div></div>";return(0,_ds.T)(a)};var J8=function(a,b,c=null,d=!1){b&&(_ds.xf(b,_ds.df,()=>{_ds.mi(b);a.o=null;if(c)H8(a,c,d);else{const e=a.j.length?a.j.shift():null;null!==e&&I8(a,e)}}),b.removeAttribute("show"))},K8=function(a,b,c=!1){a.appendChild(b);window.requestAnimationFrame(()=>{H8(a,b,c)})},L8=function(a){J8(a,a.querySelector('*[type^="cookie-notification"]'))},M8=function(a){J8(a,a.querySelector('*[type^="support-attachment-error"]'))},N8=function(a){J8(a,a.querySelector('*[type^="signin-state-changed"]'))},O8=function(a){J8(a,
a.querySelector('*[type^="notification"]'))},I8=function(a,b){switch(b){case "loading":a.showLoading();break;case "refresh":Sda(a);break;case "error":a.showError();break;case "copied-to-clipboard":const c=_ds.L(Nda);K8(a,c,!0);break;case "cookie-notification":Tda(a);break;case "support-attachment-error":Uda(a);break;case "signin-state-changed":Vda(a)}(null===b||void 0===b?0:b.startsWith("notification-"))&&Wda(a,b)},Sda=function(a){const b=_ds.L(Lda);_ds.yf(b.querySelector(".devsite-snackbar-action"),
"click",()=>{_ds.di().location.reload()});K8(a,b)},Tda=function(a){if(a.m.get("devsite-eu-cookie")){var b=a.j.length?a.j.shift():null;null!==b&&I8(a,b)}else{b=G8;if(a.hasAttribute("data-cookie-notice"))switch(Number(a.getAttribute("data-cookie-notice"))){case 2:b=Oda;break;default:b=G8}if(a.hasAttribute("data-cookie-policy")){const c=a.getAttribute("data-cookie-policy");b=_ds.L(b,{Tr:c})}else b=_ds.L(b);_ds.xf(b.querySelector(".devsite-snackbar-action"),"click",()=>{a.m.set("devsite-eu-cookie","1");
L8(a)});K8(a,b)}},Uda=function(a){const b=_ds.L(Pda);K8(a,b);_ds.xf(b.querySelector(".devsite-snackbar-action"),"click",()=>{M8(a)})},Vda=function(a){N8(a);const b=_ds.L(Kda);K8(a,b,!1);_ds.yf(b.querySelector(".devsite-snackbar-action--reload"),"click",async()=>{await (await _ds.t()).reload();N8(a)});_ds.yf(b.querySelector(".devsite-snackbar-action--dismiss"),"click",async()=>{await (await _ds.t()).reload();N8(a)})},Wda=function(a,b){const c=a.getAttribute(`${b}-message`),d=a.getAttribute(`${b}-link`),
e=a.getAttribute(`${b}-link-txt`),f=a.hasAttribute(`${b}-store-key`);if(c&&d){const g="devsite-notification"+d;if(!f||!a.m.get(g)){b=_ds.L(Qda,{RB:b,message:c,link:d,hA:e});K8(a,b);const h=new _ds.E(b);h.listen(b,"click",k=>{k.stopPropagation();if(k.target.classList.contains("devsite-snackbar-link")||k.target.classList.contains("devsite-snackbar-action"))f&&a.m.set(g,"1"),O8(a),_ds.G(h)})}}},H8=function(a,b,c=!1){window.clearTimeout(a.$);a.o?J8(a,a.o,b,c):(a.o=b,window.requestAnimationFrame(()=>{b.setAttribute("show",
"")}),c&&(a.$=window.setTimeout(()=>{a.removeAttribute("type");J8(a,b)},5E3)))},P8=class extends _ds.A{constructor(){super();this.j=[];this.$=-1;this.o=null;this.eventHandler=new _ds.E(this);this.m=new _ds.Om}static get observedAttributes(){return["type"]}connectedCallback(){this.eventHandler.listen(document.body,"devsite-show-custom-snackbar-msg",this.ea)}disconnectedCallback(){_ds.G(this.eventHandler)}ea(a){this.setAttribute("type","custom");a=a.La;if(a=null===a||void 0===a?void 0:a.detail){var b=
!!a.showClose,c=!0;a.href&&(c=(new URL(a.href)).origin!==document.location.origin);var d=_ds.L(Rda,{message:a.msg,gA:a.linkText,link:a.href,Ce:c,NB:b});b&&_ds.xf(d.querySelector(".devsite-snackbar-action"),"click",()=>{J8(this,d)});K8(this,d,!b)}}attributeChangedCallback(a,b,c){if("type"===a){switch(b){case "loading":this.hideLoading();break;case "refresh":J8(this,this.querySelector('*[type^="refresh"]'));break;case "error":J8(this,this.querySelector('*[type^="error"]'));break;case "copied-to-clipboard":J8(this,
this.querySelector('*[type^="copied-to-clipboard"]'));break;case "cookie-notification":L8(this);break;case "support-attachment-error":M8(this);break;case "signin-state-changed":N8(this);break;case "custom":J8(this,this.querySelector('*[type^="custom"]'))}null!=b&&b.startsWith("notification-")&&O8(this);if(c){if(null===c||void 0===c?0:c.includes(","))this.j=null===c||void 0===c?void 0:c.split(","),c=`${this.j.shift()}`;I8(this,c)}}}showLoading(){if(!this.querySelector('*[type^="loading"]')){var a=
_ds.L(Jda);K8(this,a)}}hideLoading(){J8(this,this.querySelector('*[type^="loading"]'))}showError(){const a=_ds.L(Mda);_ds.yf(a.querySelector(".devsite-snackbar-action"),"click",()=>{_ds.di().location.reload()});K8(this,a)}};P8.prototype.attributeChangedCallback=P8.prototype.attributeChangedCallback;P8.prototype.disconnectedCallback=P8.prototype.disconnectedCallback;P8.prototype.connectedCallback=P8.prototype.connectedCallback;try{window.customElements.define("devsite-snackbar",P8)}catch(a){console.warn("Unrecognized DevSite custom element - DevsiteSnackBar",a)};})(_ds_www);
