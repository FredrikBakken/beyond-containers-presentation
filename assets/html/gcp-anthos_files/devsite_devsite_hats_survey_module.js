(function(_ds){var window=this;var L6=function(a,b,c){return a.h.then(function(d){var e=d[b];if(!e)throw Error("Method not found: "+b);return e.apply(d,c)})},Haa=class{constructor(a){this.h=a;a.then((0,_ds.rd)(function(){},this),()=>{},this)}},Iaa=function(a,b,c){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];e=M6(a,b).then(function(f){return f.apply(null,d)});return new Haa(e)},N6={},M6=function(a,b){var c=N6[b];if(c)return c;c=(c=_ds.id(b))?_ds.Gk(c):(new _ds.Ck(function(d,e){var f=(new _ds.Sh(document)).createElement("SCRIPT");
f.async=!0;_ds.$c(f,_ds.sg(_ds.Cc(a)));f.onload=f.onreadystatechange=function(){f.readyState&&"loaded"!=f.readyState&&"complete"!=f.readyState||d()};f.onerror=e;(document.head||document.getElementsByTagName("head")[0]).appendChild(f)})).then(function(){var d=_ds.id(b);if(!d)throw Error("Failed to load "+b+" from "+a);return d});return N6[b]=c};var Jaa=class{constructor(a){this.h=a}o(a){_ds.Kk(L6(this.h,"requestSurvey",arguments),()=>{},this)}m(a){_ds.Kk(L6(this.h,"presentSurvey",arguments),()=>{},this)}j(a){_ds.Kk(L6(this.h,"dismissSurvey",arguments),()=>{},this)}},O6=_ds.lg("https://www.gstatic.com/feedback/js/help/prod/service/lazy.min.js");_ds.Kk(M6(O6,"help.service.Lazy.create"),()=>{});var P6=null,Q6=null,R6=null,Kaa=new _ds.E,S6,T6=new _ds.el,U6=T6.h,V6=function(){return"devsite-hats-survey"},W6=function(){return Q6?(S6.j({surveyMetadata:{sessionId:Q6}}),T6.promise):Promise.resolve()},Laa=async function(a){await DevsiteApp.whenReady();var b=a.getAttribute("listnr-id"),c={locale:DevsiteApp.getLocale()||"en",apiKey:"AIzaSyArC61vXsxgHizCNzGEDzdTWWhmiZsP2V4"};b=Iaa(O6,"help.service.Lazy.create",b,{apiKey:c.apiKey||c.apiKey,environment:c.environment||c.environment,helpCenterPath:c.GK||
c.helpCenterPath,locale:c.locale||c.locale||"en".replace(/-/g,"_"),nonce:c.nonce||c.nonce,productData:c.productData||c.productData,receiverUri:c.cL||c.receiverUri,renderApiUri:c.dL||c.renderApiUri,theme:c.theme||c.theme,window:c.window||c.window});S6=new Jaa(b);a.j=S6},Maa=function(a,b){a.j.m({productData:{customData:{aL:_ds.C()}},surveyData:b,colorScheme:1,authuser:0,customZIndex:1E4,listener:{surveyPrompted:c=>{Q6=c.sessionId;T6=new _ds.el;U6=T6.h},surveyClosed:()=>{Q6=R6=null;U6()}}})},X6=class extends _ds.A{constructor(a){super();
this.j=null;a&&(this.j=S6=a)}async connectedCallback(){R6=this;const a=this.getAttribute("hats-id");a&&a!==P6&&(await W6(),this.j||await Laa(this),P6=a,this.bu(a))}disconnectedCallback(){R6=null;_ds.dl(Kaa,document.body,"devsite-page-changed",()=>{R6||(W6(),P6=null)})}async bu(a){await DevsiteApp.whenReady();this.j.o({triggerId:a,callback:b=>{b.surveyData&&Maa(this,b.surveyData)},authuser:0,enableTestingMode:!1})}};X6.prototype.renderSurvey=X6.prototype.bu;X6.prototype.disconnectedCallback=X6.prototype.disconnectedCallback;
X6.prototype.connectedCallback=X6.prototype.connectedCallback;X6.closeCurrentSurvey=W6;X6.getTagName=V6;try{window.customElements.define(V6(),X6)}catch(a){console.warn("devsite.app.customElement.DevsiteHatsSurvey",a)};})(_ds_www);