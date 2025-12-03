import{a as u,b as v,c as w}from"./chunk.N3EVDV7A.js";import{a as M}from"./chunk.4W2RGGSC.js";import{d as p,e as $,f as b}from"./chunk.64GCJQA3.js";import{d as o,e as d,f as c,g as h}from"./chunk.N2W26RCT.js";var F={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},x=l=>(...a)=>({_$litDirective$:l,values:a}),m=class{constructor(a){}get _$AU(){return this._$AM._$AU}_$AT(a,e,s){this._$Ct=a,this._$AM=e,this._$Ci=s}_$AS(a,e){return this.update(a,e)}update(a,e){return this.render(...e)}};var z=x(class extends m{constructor(l){var a;if(super(l),l.type!==F.ATTRIBUTE||l.name!=="class"||((a=l.strings)==null?void 0:a.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(l){return" "+Object.keys(l).filter(a=>l[a]).join(" ")+" "}update(l,[a]){var s,i;if(this.st===void 0){this.st=new Set,l.strings!==void 0&&(this.nt=new Set(l.strings.join(" ").split(/\s/).filter(t=>t!=="")));for(let t in a)a[t]&&!((s=this.nt)!=null&&s.has(t))&&this.st.add(t);return this.render(a)}let e=l.element.classList;for(let t of this.st)t in a||(e.remove(t),this.st.delete(t));for(let t in a){let n=!!a[t];n===this.st.has(t)||(i=this.nt)!=null&&i.has(t)||(n?(e.add(t),this.st.add(t)):(e.remove(t),this.st.delete(t)))}return $}});import"@awesome.me/webawesome/dist/components/icon/icon.js";import"@awesome.me/webawesome/dist/components/divider/divider.js";var E,y,_,S,T,C,U,D,A,B,L,P,k,r=class extends b{constructor(){super(...arguments);this.name="hot-file-input-dropzone";c(this,E,!1);c(this,y,"");c(this,_,0);c(this,S,!0);c(this,T,!1);c(this,C,"");c(this,U,"traditional");c(this,D,!1);c(this,A,[]);c(this,B,"");c(this,L,new Map);c(this,P,"");c(this,k)}get multiple(){return d(this,E)}set multiple(e){h(this,E,e)}get accept(){return d(this,y)}set accept(e){h(this,y,e)}get maxSize(){return d(this,_)}set maxSize(e){h(this,_,e)}get showPreview(){return d(this,S)}set showPreview(e){h(this,S,e)}get disabled(){return d(this,T)}set disabled(e){h(this,T,e)}get label(){return d(this,C)}set label(e){h(this,C,e)}get variant(){return d(this,U)}set variant(e){h(this,U,e)}get isDragging(){return d(this,D)}set isDragging(e){h(this,D,e)}get selectedFiles(){return d(this,A)}set selectedFiles(e){h(this,A,e)}get errorMessage(){return d(this,B)}set errorMessage(e){h(this,B,e)}get imageUrls(){return d(this,L)}set imageUrls(e){h(this,L,e)}get statusMessage(){return d(this,P)}set statusMessage(e){h(this,P,e)}get fileInput(){return d(this,k)}set fileInput(e){h(this,k,e)}_generateId(){return`file-${Date.now()}-${Math.random().toString(36).substring(2,11)}`}_handleDragOver(e){e.preventDefault(),e.stopPropagation(),this.disabled||(this.isDragging=!0)}_handleDragLeave(e){e.preventDefault(),e.stopPropagation(),this.isDragging=!1}_handleDrop(e){var i;if(e.preventDefault(),e.stopPropagation(),this.isDragging=!1,this.disabled)return;let s=Array.from(((i=e.dataTransfer)==null?void 0:i.files)||[]);this._processFiles(s)}_handleClick(){this.disabled||this.fileInput.click()}_handleKeyDown(e){!this.disabled&&(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.fileInput.click())}_handleFileInputChange(e){let s=e.target,i=Array.from(s.files||[]);this._processFiles(i)}_processFiles(e){if(this.errorMessage="",!this.multiple&&e.length>1){this.errorMessage="Only one file can be selected";return}if(this.accept){let t=this.accept.split(",").map(f=>f.trim()),n=e.filter(f=>!t.some(g=>{if(g.startsWith("."))return f.name.toLowerCase().endsWith(g.toLowerCase());if(g.endsWith("/*")){let W=g.split("/")[0];return f.type.startsWith(W)}return f.type===g}));if(n.length>0){this.errorMessage=`Invalid file type(s): ${n.map(f=>f.name).join(", ")}`;return}}if(this.maxSize>0){let t=e.filter(n=>n.size>this.maxSize);if(t.length>0){this.errorMessage=`File(s) exceed maximum size of ${this._formatFileSize(this.maxSize)}: ${t.map(n=>n.name).join(", ")}`;return}}let s=e.map(t=>({file:t,id:this._generateId()}));this.multiple?this.selectedFiles=[...s,...this.selectedFiles]:this.selectedFiles=s,s.forEach(t=>{t.file.type.startsWith("image/")&&this._generateThumbnail(t.file,t.id)}),this.dispatchEvent(new CustomEvent("hot-file-change",{detail:{files:this.selectedFiles.map(t=>t.file)},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("hot-files-selected",{detail:{files:s.map(t=>t.file),allFiles:this.selectedFiles.map(t=>t.file)},bubbles:!0,composed:!0}));let i=s.length;this.statusMessage=`${i} ${i===1?"file":"files"} selected: ${s.map(t=>t.file.name).join(", ")}`}_generateThumbnail(e,s){let i=new FileReader;i.readAsDataURL(e),i.onload=t=>{var n;(n=t.target)!=null&&n.result&&(this.imageUrls=new Map(this.imageUrls).set(s,t.target.result),this.requestUpdate())}}_removeFile(e){let s=this.selectedFiles.find(i=>i.id===e);if(this.selectedFiles=this.selectedFiles.filter(i=>i.id!==e),this.imageUrls.has(e)){let i=new Map(this.imageUrls);i.delete(e),this.imageUrls=i}this.fileInput&&(this.fileInput.value=""),this.dispatchEvent(new CustomEvent("hot-file-change",{detail:{files:this.selectedFiles.map(i=>i.file)},bubbles:!0,composed:!0})),s&&(this.statusMessage=`File removed: ${s.file.name}. ${this.selectedFiles.length} ${this.selectedFiles.length===1?"file":"files"} remaining.`)}_formatFileSize(e){if(e===0)return"0 Bytes";let s=1e3,i=["Bytes","KB","MB","GB"],t=Math.floor(Math.log(e)/Math.log(s)),n=e/Math.pow(s,t);return`${Math.round(n*10)/10} ${i[t]}`}_getFileIcon(e){return e.startsWith("image/")?"file-image":e.startsWith("video/")?"file-video":e.startsWith("audio/")?"file-audio":e==="application/pdf"?"file-pdf":e.includes("word")?"file-word":e.includes("sheet")||e.includes("excel")?"file-excel":e.includes("zip")||e.includes("rar")||e.includes("7z")?"file-archive":e.includes("text")?"file-text":"file"}clearFiles(){this.selectedFiles=[],this.errorMessage="",this.imageUrls=new Map,this.fileInput&&(this.fileInput.value="")}getFiles(){return this.selectedFiles.map(e=>e.file)}render(){let e={dropzone:!0,"dropzone--dragging":this.isDragging,"dropzone--disabled":this.disabled,"dropzone--has-files":this.selectedFiles.length>0,"dropzone--compact":this.variant==="compact"},s=this.variant==="compact";return p`
      <div class="file-input-dropzone">
        ${this.label&&this.variant==="traditional"?p`<label class="label" id="dropzone-label">${this.label}</label>`:""}
        ${this.variant==="traditional"?p`<wa-divider></wa-divider>`:""}

        <div
          class=${z(e)}
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
              name="${s?"arrow-up-from-bracket":"cloud-arrow-up"}"
              class="dropzone-icon"
              aria-hidden="true"
            ></wa-icon>
            <div class="dropzone-text">
              ${s?p`<div class="compact-text" id="dropzone-description">
                    ${this.label}
                  </div>`:this.isDragging?p`<div id="dropzone-description">
                    Drop ${this.multiple?"files":"file"} here
                  </div>`:p`
                    <div class="dropzone-cta" id="dropzone-description">
                      <div>
                        Drop ${this.multiple?"files":"file"} here or&nbsp;
                      </div>
                      <div class="browse">browse</div>
                    </div>
                    ${this.accept||this.maxSize?p`<div id="dropzone-hints">
                          ${this.accept?p`<div class="dropzone-accept">
                                ${this.accept.split(",").join(", ")} only
                              </div>`:""}
                          ${this.maxSize?p`<div class="dropzone-maxsize">
                                Max size: ${this._formatFileSize(this.maxSize)}
                              </div>`:""}
                        </div>`:""}
                  `}
            </div>
          </div>
        </div>
        ${this.errorMessage?p`
              <div class="error-message" role="alert">
                <wa-icon name="exclamation-circle"></wa-icon>
                ${this.errorMessage}
              </div>
            `:""}
        ${this.showPreview&&this.selectedFiles.length>0?p`
              <div class="file-preview-list">
                ${this.selectedFiles.map(({file:i,id:t})=>p`
                    <hot-list-card
                      title=${i.name}
                      subtitle=${this._formatFileSize(i.size)}
                      icon=${this._getFileIcon(i.type)}
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
    `}};E=new WeakMap,y=new WeakMap,_=new WeakMap,S=new WeakMap,T=new WeakMap,C=new WeakMap,U=new WeakMap,D=new WeakMap,A=new WeakMap,B=new WeakMap,L=new WeakMap,P=new WeakMap,k=new WeakMap,r.styles=[M],o([u({type:Boolean})],r.prototype,"multiple",1),o([u({type:String})],r.prototype,"accept",1),o([u({type:Number})],r.prototype,"maxSize",1),o([u({type:Boolean})],r.prototype,"showPreview",1),o([u({type:Boolean})],r.prototype,"disabled",1),o([u({type:String})],r.prototype,"label",1),o([u({type:String})],r.prototype,"variant",1),o([v()],r.prototype,"isDragging",1),o([v()],r.prototype,"selectedFiles",1),o([v()],r.prototype,"errorMessage",1),o([v()],r.prototype,"imageUrls",1),o([v()],r.prototype,"statusMessage",1),o([w('input[type="file"]')],r.prototype,"fileInput",1);var Z=r;export{r as a,Z as b};
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
