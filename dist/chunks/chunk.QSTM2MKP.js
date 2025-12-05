import{a as M}from"./chunk.4W2RGGSC.js";import{a as f,b as m,c as z}from"./chunk.N3EVDV7A.js";import{d as h,e as x,f as F}from"./chunk.64GCJQA3.js";import{d as n,e as o,f as d,g as c}from"./chunk.N2W26RCT.js";var E={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},y=l=>(...a)=>({_$litDirective$:l,values:a}),$=class{constructor(a){}get _$AU(){return this._$AM._$AU}_$AT(a,e,i){this._$Ct=a,this._$AM=e,this._$Ci=i}_$AS(a,e){return this.update(a,e)}update(a,e){return this.render(...e)}};var _=y(class extends ${constructor(l){var a;if(super(l),l.type!==E.ATTRIBUTE||l.name!=="class"||((a=l.strings)==null?void 0:a.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(l){return" "+Object.keys(l).filter(a=>l[a]).join(" ")+" "}update(l,[a]){var i,s;if(this.st===void 0){this.st=new Set,l.strings!==void 0&&(this.nt=new Set(l.strings.join(" ").split(/\s/).filter(t=>t!=="")));for(let t in a)a[t]&&!((i=this.nt)!=null&&i.has(t))&&this.st.add(t);return this.render(a)}let e=l.element.classList;for(let t of this.st)t in a||(e.remove(t),this.st.delete(t));for(let t in a){let p=!!a[t];p===this.st.has(t)||(s=this.nt)!=null&&s.has(t)||(p?(e.add(t),this.st.add(t)):(e.remove(t),this.st.delete(t)))}return x}});import"@awesome.me/webawesome/dist/components/icon/icon.js";import"@awesome.me/webawesome/dist/components/divider/divider.js";var S,T,C,D,A,B,L,P,k,W,I,O,r=class extends F{constructor(){super(...arguments);this.name="hot-file-input-dropzone";d(this,S,!1);d(this,T,"");d(this,C,0);d(this,D,!0);d(this,A,!1);d(this,B,"");d(this,L,"traditional");d(this,P,!1);d(this,k,[]);d(this,W,"");d(this,I,"");d(this,O)}get multiple(){return o(this,S)}set multiple(e){c(this,S,e)}get accept(){return o(this,T)}set accept(e){c(this,T,e)}get maxSize(){return o(this,C)}set maxSize(e){c(this,C,e)}get showPreview(){return o(this,D)}set showPreview(e){c(this,D,e)}get disabled(){return o(this,A)}set disabled(e){c(this,A,e)}get label(){return o(this,B)}set label(e){c(this,B,e)}get variant(){return o(this,L)}set variant(e){c(this,L,e)}get isDragging(){return o(this,P)}set isDragging(e){c(this,P,e)}get selectedFiles(){return o(this,k)}set selectedFiles(e){c(this,k,e)}get errorMessage(){return o(this,W)}set errorMessage(e){c(this,W,e)}get statusMessage(){return o(this,I)}set statusMessage(e){c(this,I,e)}get fileInput(){return o(this,O)}set fileInput(e){c(this,O,e)}_generateId(){return`file-${Date.now()}-${Math.random().toString(36).substring(2,11)}`}_handleDragOver(e){e.preventDefault(),e.stopPropagation(),this.disabled||(this.isDragging=!0)}_handleDragLeave(e){e.preventDefault(),e.stopPropagation(),this.isDragging=!1}_handleDrop(e){var s;if(e.preventDefault(),e.stopPropagation(),this.isDragging=!1,this.disabled)return;let i=Array.from(((s=e.dataTransfer)==null?void 0:s.files)||[]);this._processFiles(i)}_handleClick(){this.disabled||this.fileInput.click()}_handleKeyDown(e){!this.disabled&&(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.fileInput.click())}_handleFileInputChange(e){let i=e.target,s=Array.from(i.files||[]);this._processFiles(s)}_processFiles(e){if(this.errorMessage="",!this.multiple&&e.length>1){this.errorMessage="Only one file can be selected";return}if(this.accept){let t=this.accept.split(",").map(u=>u.trim().toLowerCase()),p=e.filter(u=>{let b=u.name.toLowerCase(),g=u.type.toLowerCase();return!t.some(v=>{if(v.startsWith("."))return b.endsWith(v);if(v.endsWith("/*")){let w=v.split("/")[0];if(g)return g.startsWith(w+"/");let j=b.substring(b.lastIndexOf("."));return this._getFileIcon(j).includes(w)}return g?g===v:!1})});if(p.length>0){this.errorMessage=`Invalid file type(s): ${p.map(u=>u.name).join(", ")}`;return}}if(this.maxSize>0){let t=e.filter(p=>p.size>this.maxSize);if(t.length>0){this.errorMessage=`File(s) exceed maximum size of ${this._formatFileSize(this.maxSize)}: ${t.map(p=>p.name).join(", ")}`;return}}let i=e.map(t=>({file:t,id:this._generateId()}));this.multiple?this.selectedFiles=[...i,...this.selectedFiles]:this.selectedFiles=i,this.dispatchEvent(new CustomEvent("hot-file-change",{detail:{files:this.selectedFiles.map(t=>t.file)},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("hot-files-selected",{detail:{files:i.map(t=>t.file),allFiles:this.selectedFiles.map(t=>t.file)},bubbles:!0,composed:!0}));let s=i.length;this.statusMessage=`${s} ${s===1?"file":"files"} selected: ${i.map(t=>t.file.name).join(", ")}`}_removeFile(e){let i=this.selectedFiles.find(s=>s.id===e);this.selectedFiles=this.selectedFiles.filter(s=>s.id!==e),this.fileInput&&(this.fileInput.value=""),this.dispatchEvent(new CustomEvent("hot-file-change",{detail:{files:this.selectedFiles.map(s=>s.file)},bubbles:!0,composed:!0})),i&&(this.statusMessage=`File removed: ${i.file.name}. ${this.selectedFiles.length} ${this.selectedFiles.length===1?"file":"files"} remaining.`)}_formatFileSize(e){if(e===0)return"0 Bytes";let i=1e3,s=["Bytes","KB","MB","GB"],t=Math.floor(Math.log(e)/Math.log(i)),p=e/Math.pow(i,t);return`${Math.round(p*10)/10} ${s[t]}`}_getFileIcon(e){return e.startsWith("image/")?"file-image":e.startsWith("video/")?"file-video":e.startsWith("audio/")?"file-audio":e==="application/pdf"?"file-pdf":e.includes("word")?"file-word":e.includes("sheet")||e.includes("excel")?"file-excel":e.includes("zip")||e.includes("rar")||e.includes("7z")?"file-archive":e.includes("text")?"file-text":"file"}clearFiles(){this.selectedFiles=[],this.errorMessage="",this.fileInput&&(this.fileInput.value="")}getFiles(){return this.selectedFiles.map(e=>e.file)}render(){let e={dropzone:!0,"dropzone--dragging":this.isDragging,"dropzone--disabled":this.disabled,"dropzone--has-files":this.selectedFiles.length>0,"dropzone--compact":this.variant==="compact"},i=this.variant==="compact";return h`
      <div class="file-input-dropzone">
        ${this.label&&this.variant==="traditional"?h`<label class="label" id="dropzone-label">${this.label}</label>`:""}
        ${this.variant==="traditional"?h`<wa-divider></wa-divider>`:""}

        <div
          class=${_(e)}
          role="button"
          tabindex=${this.disabled?"-1":"0"}
          aria-disabled=${this.disabled}
          aria-label=${this.label||"File upload"}
          aria-describedby="dropzone-description${this.accept||this.maxSize?" dropzone-hints":""}"
          @dragover=${this._handleDragOver}
          @dragleave=${this._handleDragLeave}
          @drop=${this._handleDrop}
          @click=${this._handleClick}
          @keydown=${this._handleKeyDown}
        >
          <input
            type="file"
            class="file-uploader"
            ?multiple=${this.multiple}
            accept=${this.accept}
            ?disabled=${this.disabled}
            @change=${this._handleFileInputChange}
            aria-hidden="true"
            tabindex="-1"
          />

          <div class="dropzone-content">
            <wa-icon
              name="${i?"arrow-up-from-bracket":"cloud-arrow-up"}"
              class="dropzone-icon"
              aria-hidden="true"
            ></wa-icon>
            <div class="dropzone-text">
              ${i?h`<div class="compact-text" id="dropzone-description">
                    ${this.label}
                  </div>`:this.isDragging?h`<div id="dropzone-description">
                    Drop ${this.multiple?"files":"file"} here
                  </div>`:h`
                    <div class="dropzone-cta" id="dropzone-description">
                      <div>
                        Drop ${this.multiple?"files":"file"} here or&nbsp;
                      </div>
                      <div class="browse">browse</div>
                    </div>
                    ${this.accept||this.maxSize?h`<div id="dropzone-hints">
                          ${this.accept?h`<div class="dropzone-accept">
                                ${this.accept.split(",").join(", ")} only
                              </div>`:""}
                          ${this.maxSize?h`<div class="dropzone-maxsize">
                                Max size: ${this._formatFileSize(this.maxSize)}
                              </div>`:""}
                        </div>`:""}
                  `}
            </div>
          </div>
        </div>
        ${this.errorMessage?h`
              <div class="error-message" role="alert">
                <wa-icon name="exclamation-circle"></wa-icon>
                ${this.errorMessage}
              </div>
            `:""}
        ${this.showPreview&&this.selectedFiles.length>0?h`
              <div class="file-preview-list">
                ${this.selectedFiles.map(({file:s,id:t})=>h`
                    <hot-list-card
                      title=${s.name}
                      subtitle=${this._formatFileSize(s.size)}
                      icon=${this._getFileIcon(s.type)}
                      itemId=${t}
                      @hot-remove=${()=>this._removeFile(t)}
                    ></hot-list-card>
                  `)}
              </div>
            `:""}

        <div
          class="sr-only"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          ${this.statusMessage}
        </div>
      </div>
    `}};S=new WeakMap,T=new WeakMap,C=new WeakMap,D=new WeakMap,A=new WeakMap,B=new WeakMap,L=new WeakMap,P=new WeakMap,k=new WeakMap,W=new WeakMap,I=new WeakMap,O=new WeakMap,r.styles=[M],n([f({type:Boolean})],r.prototype,"multiple",1),n([f({type:String})],r.prototype,"accept",1),n([f({type:Number})],r.prototype,"maxSize",1),n([f({type:Boolean})],r.prototype,"showPreview",1),n([f({type:Boolean})],r.prototype,"disabled",1),n([f({type:String})],r.prototype,"label",1),n([f({type:String})],r.prototype,"variant",1),n([m()],r.prototype,"isDragging",1),n([m()],r.prototype,"selectedFiles",1),n([m()],r.prototype,"errorMessage",1),n([m()],r.prototype,"statusMessage",1),n([z('input[type="file"]')],r.prototype,"fileInput",1);var te=r;export{r as a,te as b};
/*! Bundled license information:

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
