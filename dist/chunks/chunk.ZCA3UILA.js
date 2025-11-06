import{a as v,b as f,c as $}from"./chunk.N3EVDV7A.js";import{a as w}from"./chunk.TQWD6PRC.js";import{d as p,e as g,f as b}from"./chunk.64GCJQA3.js";import{d as c,e as o,f as d,g as h}from"./chunk.N2W26RCT.js";var y={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},F=l=>(...a)=>({_$litDirective$:l,values:a}),m=class{constructor(a){}get _$AU(){return this._$AM._$AU}_$AT(a,e,t){this._$Ct=a,this._$AM=e,this._$Ci=t}_$AS(a,e){return this.update(a,e)}update(a,e){return this.render(...e)}};var M=F(class extends m{constructor(l){var a;if(super(l),l.type!==y.ATTRIBUTE||l.name!=="class"||((a=l.strings)==null?void 0:a.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(l){return" "+Object.keys(l).filter(a=>l[a]).join(" ")+" "}update(l,[a]){var t,s;if(this.st===void 0){this.st=new Set,l.strings!==void 0&&(this.nt=new Set(l.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(let i in a)a[i]&&!((t=this.nt)!=null&&t.has(i))&&this.st.add(i);return this.render(a)}let e=l.element.classList;for(let i of this.st)i in a||(e.remove(i),this.st.delete(i));for(let i in a){let r=!!a[i];r===this.st.has(i)||(s=this.nt)!=null&&s.has(i)||(r?(e.add(i),this.st.add(i)):(e.remove(i),this.st.delete(i)))}return g}});import"@awesome.me/webawesome/dist/components/icon/icon.js";import"@awesome.me/webawesome/dist/components/divider/divider.js";var x,E,_,T,z,C,S,U,k,A,B,n=class extends b{constructor(){super(...arguments);this.name="hot-file-input-dropzone";d(this,x,!1);d(this,E,"");d(this,_,0);d(this,T,!0);d(this,z,!1);d(this,C,"");d(this,S,!1);d(this,U,[]);d(this,k,"");d(this,A,new Map);d(this,B)}get multiple(){return o(this,x)}set multiple(e){h(this,x,e)}get accept(){return o(this,E)}set accept(e){h(this,E,e)}get maxSize(){return o(this,_)}set maxSize(e){h(this,_,e)}get showPreview(){return o(this,T)}set showPreview(e){h(this,T,e)}get disabled(){return o(this,z)}set disabled(e){h(this,z,e)}get label(){return o(this,C)}set label(e){h(this,C,e)}get isDragging(){return o(this,S)}set isDragging(e){h(this,S,e)}get selectedFiles(){return o(this,U)}set selectedFiles(e){h(this,U,e)}get errorMessage(){return o(this,k)}set errorMessage(e){h(this,k,e)}get imageUrls(){return o(this,A)}set imageUrls(e){h(this,A,e)}get fileInput(){return o(this,B)}set fileInput(e){h(this,B,e)}_generateId(){return`file-${Date.now()}-${Math.random().toString(36).substr(2,9)}`}_handleDragOver(e){e.preventDefault(),e.stopPropagation(),this.disabled||(this.isDragging=!0)}_handleDragLeave(e){e.preventDefault(),e.stopPropagation(),this.isDragging=!1}_handleDrop(e){var s;if(e.preventDefault(),e.stopPropagation(),this.isDragging=!1,this.disabled)return;let t=Array.from(((s=e.dataTransfer)==null?void 0:s.files)||[]);this._processFiles(t)}_handleClick(){this.disabled||this.fileInput.click()}_handleFileInputChange(e){let t=e.target,s=Array.from(t.files||[]);this._processFiles(s)}_processFiles(e){if(this.errorMessage="",!this.multiple&&e.length>1){this.errorMessage="Only one file can be selected";return}if(this.accept){let s=this.accept.split(",").map(r=>r.trim()),i=e.filter(r=>!s.some(u=>{if(u.startsWith("."))return r.name.toLowerCase().endsWith(u.toLowerCase());if(u.endsWith("/*")){let D=u.split("/")[0];return r.type.startsWith(D)}return r.type===u}));if(i.length>0){this.errorMessage=`Invalid file type(s): ${i.map(r=>r.name).join(", ")}`;return}}if(this.maxSize>0){let s=e.filter(i=>i.size>this.maxSize);if(s.length>0){let i=(this.maxSize/1048576).toFixed(2);this.errorMessage=`File(s) exceed maximum size of ${i}MB: ${s.map(r=>r.name).join(", ")}`;return}}let t=e.map(s=>({file:s,id:this._generateId()}));this.multiple?this.selectedFiles=[...t,...this.selectedFiles]:this.selectedFiles=t,t.forEach(s=>{s.file.type.startsWith("image/")&&this._generateThumbnail(s.file,s.id)}),this.dispatchEvent(new CustomEvent("hot-file-change",{detail:{files:this.selectedFiles.map(s=>s.file)},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("hot-files-selected",{detail:{files:t.map(s=>s.file),allFiles:this.selectedFiles.map(s=>s.file)},bubbles:!0,composed:!0}))}_generateThumbnail(e,t){let s=new FileReader;s.readAsDataURL(e),s.onload=i=>{var r;(r=i.target)!=null&&r.result&&(this.imageUrls=new Map(this.imageUrls).set(t,i.target.result),this.requestUpdate())}}_removeFile(e){if(this.selectedFiles=this.selectedFiles.filter(t=>t.id!==e),this.imageUrls.has(e)){let t=new Map(this.imageUrls);t.delete(e),this.imageUrls=t}this.fileInput&&(this.fileInput.value=""),this.dispatchEvent(new CustomEvent("hot-file-change",{detail:{files:this.selectedFiles.map(t=>t.file)},bubbles:!0,composed:!0}))}_getFileIcon(e){let t=e.type;return t.startsWith("image/")?"file-image":t.startsWith("video/")?"file-video":t.startsWith("audio/")?"file-audio":t==="application/pdf"?"file-pdf":t.includes("word")?"file-word":t.includes("sheet")||t.includes("excel")?"file-excel":t.includes("zip")||t.includes("rar")||t.includes("7z")?"file-archive":t.includes("text")?"file-text":"file"}_formatFileSize(e){if(e===0)return"0 Bytes";let t=1024,s=["Bytes","KB","MB","GB"],i=Math.floor(Math.log(e)/Math.log(t));return Math.round(e/Math.pow(t,i)*100)/100+" "+s[i]}clearFiles(){this.selectedFiles=[],this.errorMessage="",this.imageUrls=new Map,this.fileInput&&(this.fileInput.value="")}getFiles(){return this.selectedFiles.map(e=>e.file)}render(){let e={dropzone:!0,"dropzone--dragging":this.isDragging,"dropzone--disabled":this.disabled,"dropzone--has-files":this.selectedFiles.length>0},t=this.selectedFiles.filter(i=>i.file.type.startsWith("image/")),s=this.selectedFiles.filter(i=>!i.file.type.startsWith("image/"));return p`
      <div class="file-input-dropzone">
        ${this.label?p`<label class="label">${this.label}</label>`:""}
        <wa-divider></wa-divider>

        <div
          class=${M(e)}
          @dragover=${this._handleDragOver}
          @dragleave=${this._handleDragLeave}
          @drop=${this._handleDrop}
          @click=${this._handleClick}
        >
          <input
            type="file"
            class="file-uploader"
            ?multiple=${this.multiple}
            accept=${this.accept}
            ?disabled=${this.disabled}
            @change=${this._handleFileInputChange}
            aria-label=${this.label}
          />

          <div class="dropzone-content">
            <wa-icon name="cloud-arrow-up" class="dropzone-icon"></wa-icon>
            <div class="dropzone-text">
              ${this.isDragging?p`<strong>Drop files here</strong>`:p`
                    <div class="dropzone-cta">
                      <div>Drop file(s) here or&nbsp;</div>
                      <div class="browse">browse</div>
                    </div>
                    ${this.accept?p`<div class="dropzone-accept">
                          ${this.accept} only
                        </div>`:""}
                    ${this.maxSize?p`<div class="dropzone-maxsize">
                          Max size: ${this._formatFileSize(this.maxSize)}
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
        ${this.showPreview&&t.length>0?p`
              <div class="image-grid-container">
                <div class="image-preview-header">
                  <button
                    type="button"
                    class="header-action-btn header-action-btn--cancel"
                    @click=${this.clearFiles}
                  >
                    Cancel
                  </button>
                  <div class="file-count">
                    ${t.length}
                    ${t.length===1?"file":"files"} selected
                  </div>
                  <button
                    type="button"
                    class="header-action-btn header-action-btn--add"
                    @click=${this._handleClick}
                  >
                    + Add more
                  </button>
                </div>
                <div class="image-grid">
                  ${t.map(({file:i,id:r})=>p`
                      <div class="image-thumbnail">
                        <div
                          class="thumbnail-image"
                          style="background-image: url(${this.imageUrls.get(r)||""})"
                        ></div>
                        <button
                          type="button"
                          class="thumbnail-remove"
                          @click=${()=>this._removeFile(r)}
                          aria-label="Remove ${i.name}"
                        >
                          <wa-icon name="xmark"></wa-icon>
                        </button>
                        <div class="thumbnail-info">
                          <div class="thumbnail-name">${i.name}</div>
                          <div class="thumbnail-size">
                            ${this._formatFileSize(i.size)}
                          </div>
                        </div>
                      </div>
                    `)}
                </div>
              </div>
            `:""}
        ${this.showPreview&&s.length>0?p`
              <div class="file-list">
                <div class="file-list-header">Documents</div>
                <wa-divider></wa-divider>
                ${s.map(({file:i,id:r})=>p`
                    <div class="file-item">
                      <wa-icon
                        name=${this._getFileIcon(i)}
                        class="file-icon"
                      ></wa-icon>
                      <div class="file-info">
                        <div class="file-name">${i.name}</div>
                      </div>
                      <button
                        type="button"
                        class="thumbnail-remove"
                        @click=${()=>this._removeFile(r)}
                        aria-label="Remove ${i.name}"
                      >
                        <wa-icon name="xmark"></wa-icon>
                      </button>
                    </div>
                  `)}
              </div>
            `:""}
      </div>
    `}};x=new WeakMap,E=new WeakMap,_=new WeakMap,T=new WeakMap,z=new WeakMap,C=new WeakMap,S=new WeakMap,U=new WeakMap,k=new WeakMap,A=new WeakMap,B=new WeakMap,n.styles=[w],c([v({type:Boolean})],n.prototype,"multiple",1),c([v({type:String})],n.prototype,"accept",1),c([v({type:Number})],n.prototype,"maxSize",1),c([v({type:Boolean})],n.prototype,"showPreview",1),c([v({type:Boolean})],n.prototype,"disabled",1),c([v({type:String})],n.prototype,"label",1),c([f()],n.prototype,"isDragging",1),c([f()],n.prototype,"selectedFiles",1),c([f()],n.prototype,"errorMessage",1),c([f()],n.prototype,"imageUrls",1),c([$('input[type="file"]')],n.prototype,"fileInput",1);var Y=n;export{n as a,Y as b};
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
