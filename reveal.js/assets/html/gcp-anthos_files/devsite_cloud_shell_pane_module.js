(function(_ds){var window=this;var QO=function(a,b,c){_ds.Rt(a.ea,{type:"cloudShell",name:b.toString(),metadata:c})},RO=class extends _ds.Mv{constructor(){super(...arguments);this.isDogfood=this.isResizing=!1;this.offset=0;this.o="";this.ea=new _ds.Vt;this.h=a=>{this.isResizing&&this.m&&(a=Math.floor(this.m.bottom-a.clientY+this.offset).toString(),this.resizer.setAttribute("aria-valuenow",a),this.style.height=a+"px")};this.j=()=>{this.isResizing=!1;window.removeEventListener("pointermove",this.h);window.removeEventListener("pointerup",
this.j);this.style.pointerEvents="auto";QO(this,"pane_resize",{RK:!0})};this.ra=()=>{document.body.setAttribute("no-scroll","")};this.oa=()=>{document.body.hasAttribute("no-scroll")&&document.body.removeAttribute("no-scroll")}}vb(){return this}render(){return(0,_ds.S)`
      <div class="resizer" role="separator" aria-valuemin="0" aria-valuemax="0"
        @pointerdown='${this.$}'>
        ${this.isDogfood?(0,_ds.S)`
    <div class="dogfood-notice">
      <a href="http://goto.google.com/cgc-cloud-shell-known-issues">
        <span class="material-icons">pets</span>
        <span class="notice-text">Dogfood Version - Internal Only</span>
      </a>
    </div>`:""}
        <div class="grabber-focus">
          <div class="grabber"></div>
        </div>
      </div>
      <devsite-shell
        @pointerover='${this.ra}'
        @pointerout='${this.oa}'
        @devsite-shell-opened='${this.Ca}'
        @devsite-shell-closed='${this.xa}'
        @devsite-shell-resized='${this.Fa}'
        @devsite-shell-maximized='${this.Aa}'>
      </devsite-shell>`}Fa(a){if(null===a||void 0===a?0:a.detail)a=(a.detail.oA+this.resizer.offsetHeight).toString(),this.resizer.setAttribute("aria-valuenow",a),this.style.height=a+"px",this.removeAttribute("devsite-size"),this.Iu.isMaximized=!1,QO(this,"pane_resize",{isManual:!1})}Ca(){this.classList.add("opened");QO(this,"pane_open")}xa(){this.classList.remove("opened");QO(this,"pane_close");this.hasAttribute("devsite-size")&&(this.removeAttribute("devsite-size"),this.Iu.isMaximized=!1,this.style.height=
this.o);document.body.hasAttribute("no-scroll")&&document.body.removeAttribute("no-scroll")}Aa(){_ds.ma("CrOS")&&this.setAttribute("cr-os","");this.o=this.style.height;this.setAttribute("devsite-size","content-area");this.style.height="100%"}$(a){this.isResizing=!0;this.m=this.getBoundingClientRect();window.addEventListener("pointermove",this.h);window.addEventListener("pointerup",this.j);this.offset=a.offsetY;this.style.pointerEvents="none"}};
_ds.w([_ds.Jo(".resizer"),_ds.x("design:type",HTMLElement)],RO.prototype,"resizer",void 0);_ds.w([_ds.Jo("devsite-shell"),_ds.x("design:type",_ds.ou)],RO.prototype,"Iu",void 0);_ds.w([_ds.P({Ja:"is-resizing",yb:!0,type:Boolean}),_ds.x("design:type",Object)],RO.prototype,"isResizing",void 0);_ds.w([_ds.P({Ja:"cloudshell-dogfood",type:Boolean}),_ds.x("design:type",Object)],RO.prototype,"isDogfood",void 0);try{window.customElements.define("cloud-shell-pane",RO)}catch(a){console.warn("Unrecognized DevSite custom element - CloudShellPane",a)};})(_ds_www);
