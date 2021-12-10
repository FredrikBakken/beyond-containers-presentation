(function(_ds){var window=this;var wZ=class{constructor(){this.m=0;this.h=[];this.oa=[];this.ea=this.$=0}get j(){return this.$}set j(a){0>a?a=0:a>this.h.length-1&&(a=this.h.length-1);this.$=a}set o(a){0<a&&(a=0);this.ea=a}get o(){return this.ea}};var xZ=class{};var yZ=function(a,b,c,d,e){const {width:f}=a.getBoundingClientRect();0===f&&32>d?window.requestAnimationFrame(()=>{yZ(a,b,c,d+1,e)}):32<=d?c("Exceeded max paint retries."):b(f)},zZ=function(a){return new Promise((b,c)=>{yZ(a,b,c,0,32)})};var BZ=async function(a,b,c){a.state.o=-b[c];a.state.j=c;await AZ(a,a.state)},CZ=async function(a){await AZ(a,a.state);document.body.dispatchEvent(new CustomEvent("cloud-tabs-loaded"))},AZ=async function(a,b){await DZ(a,b);a.render((0,_ds.S)`
      <style>
        .overflow-cover {
          background-color: white;
          height: 100%;
          position: absolute;
          top: 0;
          z-index: 100;
        }

        .overflow-cover.left-overflow {
          left: -360px;
          width: 360px;
        }

        .overflow-cover.right-overflow {
          right: -710px;
          width: 700px;
        }

        button.scroll-button {
          background-color: white;
          border: none;
          color: var(--scroll-button-color);
          cursor: pointer;
          display: none;
          font-family: 'Material Icons';
          /* Make these buttons take up the same vertical space as a normal full
          line of text. (since they will be sitting next to text). */
          font-size: var(--scroll-button-font-size);
          height: 100%;
          padding: 0;
          position: absolute;
          top: 0;
          z-index: 101;
        }

        button.scroll-button:hover,
        button.scroll-button:focus {
            color: var(--scroll-button-hover-color);
            outline: none;
        }

        button.scroll-button.scroll-left {
          /* Pull the left scroll button slightly behind the content so that it
          doesn't sit too close to text. */
          left: -8px;
        }

        button.scroll-button.scroll-left::after {
          content: 'chevron_left';
        }

        button.scroll-button.scroll-right {
          /* Pull the right scroll button slightly ahead of content so that it
          doesn't sit too close to text. */
          right: -8px;
        }

        button.scroll-button.scroll-right::after {
          content: 'chevron_right';
        }

        button.scroll-button.visible {
          display: block;
        }
      </style>
      <div class="overflow-cover left-overflow"></div>
      <button class="scroll-button scroll-left ${0<b.j?"visible":""}"
              onclick="this.dispatchEvent(new CustomEvent('scroll-nav',
                          {bubbles: true, composed: true, detail: 'left'}))">
      </button>
      <slot></slot>
      <button class="scroll-button scroll-right ${b.j<b.h.length-1?"visible":""}"
              onclick="this.dispatchEvent(new CustomEvent('scroll-nav',
                          {bubbles: true, composed: true, detail: 'right'}))">
      </button>
      <div class="overflow-cover right-overflow"></div>
    `,a.Oa)},DZ=async function(a,b){return new Promise(c=>{a.Ba.style.setProperty("--scroll-offset",`${b.o}px`);window.setTimeout(()=>{c()},250)})},EZ=class extends _ds.EI{constructor(){super();this.Ma=new _ds.Vt;this.element=this;this.Ra=xZ;this.render=_ds.fv;this.Da=a=>{let b=this.state.j;b+="right"===a.detail?1:-1;BZ(this,this.state.h,b)};this.state=new wZ;this.Ba=this.element.querySelector(".devsite-tabs-wrapper");this.Ba.style.setProperty("--scroll-animation-duration","250ms");this.Oa=this.element.attachShadow({mode:"open"});
CZ(this);this.element.querySelectorAll(".devsite-tabs-dropdown a").forEach(a=>{a.addEventListener("click",()=>{_ds.xI(this)})})}oa(a){super.oa(a);a.target instanceof Node&&_ds.Qt(this.Ma,a.target)}connectedCallback(){super.connectedCallback();this.element.addEventListener("scroll-nav",this.Da)}disconnectedCallback(){super.disconnectedCallback();this.element.removeEventListener("scroll-nav",this.Da)}async Ka(a){return a.hasAttribute("generated-tab-menu")}async xa(){try{const a=await zZ(this.Ba);if(this.state.m!==
a){this.state.m=a;const b=Array.from(this.element.querySelectorAll("tab"));this.state.oa=b.map(c=>({element:c,Bh:c?c.offsetWidth:0}));this.state.h=_ds.FI(this.state.oa,this.state.m);await BZ(this,this.state.h,0)}}catch(a){await BZ(this,this.state.h,0)}}};try{window.customElements.define("cloudx-tabs-nav",EZ)}catch(a){console.warn("devsite.app.tenants.cloud.static.components.CloudxTabsNav",a)};})(_ds_www);
