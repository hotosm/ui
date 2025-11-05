import{a as f,b as v,c as b}from"./chunk.N3EVDV7A.js";import{a as w}from"./chunk.T4JVDDU7.js";import{d as p,e as m,f as $}from"./chunk.64GCJQA3.js";import{d as o,e as c,f as d,g as h}from"./chunk.N2W26RCT.js";var y={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},F=a=>(...r)=>({_$litDirective$:a,values:r}),g=class{constructor(r){}get _$AU(){return this._$AM._$AU}_$AT(r,e,t){this._$Ct=r,this._$AM=e,this._$Ci=t}_$AS(r,e){return this.update(r,e)}update(r,e){return this.render(...e)}};var x=F(class extends g{constructor(a){var r;if(super(a),a.type!==y.ATTRIBUTE||a.name!=="class"||((r=a.strings)==null?void 0:r.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(a){return" "+Object.keys(a).filter(r=>a[r]).join(" ")+" "}update(a,[r]){var t,i;if(this.st===void 0){this.st=new Set,a.strings!==void 0&&(this.nt=new Set(a.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(let s in r)r[s]&&!((t=this.nt)!=null&&t.has(s))&&this.st.add(s);return this.render(r)}let e=a.element.classList;for(let s of this.st)s in r||(e.remove(s),this.st.delete(s));for(let s in r){let n=!!r[s];n===this.st.has(s)||(i=this.nt)!=null&&i.has(s)||(n?(e.add(s),this.st.add(s)):(e.remove(s),this.st.delete(s)))}return m}});import"@awesome.me/webawesome/dist/components/icon/icon.js";var M,E,_,z,T,S,B,C,D,A,l=class extends ${constructor(){super(...arguments);this.name="hot-file-input-dropzone";d(this,M,!1);d(this,E,"");d(this,_,0);d(this,z,!0);d(this,T,!1);d(this,S,"Drop files here or click to browse");d(this,B,!1);d(this,C,[]);d(this,D,"");d(this,A)}get multiple(){return c(this,M)}set multiple(e){h(this,M,e)}get accept(){return c(this,E)}set accept(e){h(this,E,e)}get maxSize(){return c(this,_)}set maxSize(e){h(this,_,e)}get showPreview(){return c(this,z)}set showPreview(e){h(this,z,e)}get disabled(){return c(this,T)}set disabled(e){h(this,T,e)}get label(){return c(this,S)}set label(e){h(this,S,e)}get isDragging(){return c(this,B)}set isDragging(e){h(this,B,e)}get selectedFiles(){return c(this,C)}set selectedFiles(e){h(this,C,e)}get errorMessage(){return c(this,D)}set errorMessage(e){h(this,D,e)}get fileInput(){return c(this,A)}set fileInput(e){h(this,A,e)}_generateId(){return`file-${Date.now()}-${Math.random().toString(36).substr(2,9)}`}_handleDragOver(e){e.preventDefault(),e.stopPropagation(),this.disabled||(this.isDragging=!0)}_handleDragLeave(e){e.preventDefault(),e.stopPropagation(),this.isDragging=!1}_handleDrop(e){var i;if(e.preventDefault(),e.stopPropagation(),this.isDragging=!1,this.disabled)return;let t=Array.from(((i=e.dataTransfer)==null?void 0:i.files)||[]);this._processFiles(t)}_handleClick(){this.disabled||this.fileInput.click()}_handleFileInputChange(e){let t=e.target,i=Array.from(t.files||[]);this._processFiles(i)}_processFiles(e){if(this.errorMessage="",!this.multiple&&e.length>1){this.errorMessage="Only one file can be selected";return}if(this.accept){let i=this.accept.split(",").map(n=>n.trim()),s=e.filter(n=>!i.some(u=>{if(u.startsWith("."))return n.name.toLowerCase().endsWith(u.toLowerCase());if(u.endsWith("/*")){let P=u.split("/")[0];return n.type.startsWith(P)}return n.type===u}));if(s.length>0){this.errorMessage=`Invalid file type(s): ${s.map(n=>n.name).join(", ")}`;return}}if(this.maxSize>0){let i=e.filter(s=>s.size>this.maxSize);if(i.length>0){let s=(this.maxSize/1048576).toFixed(2);this.errorMessage=`File(s) exceed maximum size of ${s}MB: ${i.map(n=>n.name).join(", ")}`;return}}let t=e.map(i=>({file:i,id:this._generateId()}));this.multiple?this.selectedFiles=[...this.selectedFiles,...t]:this.selectedFiles=t,this.dispatchEvent(new CustomEvent("hot-file-change",{detail:{files:this.selectedFiles.map(i=>i.file)},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("hot-files-selected",{detail:{files:t.map(i=>i.file),allFiles:this.selectedFiles.map(i=>i.file)},bubbles:!0,composed:!0}))}_removeFile(e){this.selectedFiles=this.selectedFiles.filter(t=>t.id!==e),this.fileInput&&(this.fileInput.value=""),this.dispatchEvent(new CustomEvent("hot-file-change",{detail:{files:this.selectedFiles.map(t=>t.file)},bubbles:!0,composed:!0}))}_getFileIcon(e){let t=e.type;return t.startsWith("image/")?"file-image":t.startsWith("video/")?"file-video":t.startsWith("audio/")?"file-audio":t==="application/pdf"?"file-pdf":t.includes("word")?"file-word":t.includes("sheet")||t.includes("excel")?"file-excel":t.includes("zip")||t.includes("rar")||t.includes("7z")?"file-archive":t.includes("text")?"file-text":"file"}_formatFileSize(e){if(e===0)return"0 Bytes";let t=1024,i=["Bytes","KB","MB","GB"],s=Math.floor(Math.log(e)/Math.log(t));return Math.round(e/Math.pow(t,s)*100)/100+" "+i[s]}clearFiles(){this.selectedFiles=[],this.errorMessage="",this.fileInput&&(this.fileInput.value="")}getFiles(){return this.selectedFiles.map(e=>e.file)}render(){let e={dropzone:!0,"dropzone--dragging":this.isDragging,"dropzone--disabled":this.disabled,"dropzone--has-files":this.selectedFiles.length>0};return p`
      <div class="file-input-dropzone">
        ${this.label?p`<label class="label">${this.label}</label>`:""}

        <div
          class=${x(e)}
          @dragover=${this._handleDragOver}
          @dragleave=${this._handleDragLeave}
          @drop=${this._handleDrop}
          @click=${this._handleClick}
        >
          <input
            type="file"
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
                    <div>Drop your file(s) or<strong> browse</strong></div>
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
        ${this.showPreview&&this.selectedFiles.length>0?p`
              <div class="file-list">
                ${this.selectedFiles.map(({file:t,id:i})=>p`
                    <div class="file-item">
                      <wa-icon
                        name=${this._getFileIcon(t)}
                        class="file-icon"
                      ></wa-icon>
                      <div class="file-info">
                        <div class="file-name">${t.name}</div>
                        <div class="file-size">
                          ${this._formatFileSize(t.size)}
                        </div>
                      </div>
                      <button
                        type="button"
                        class="file-remove"
                        @click=${()=>this._removeFile(i)}
                        aria-label="Remove ${t.name}"
                      >
                        <wa-icon name="trash"></wa-icon>
                      </button>
                    </div>
                  `)}
              </div>
            `:""}
      </div>
    `}};M=new WeakMap,E=new WeakMap,_=new WeakMap,z=new WeakMap,T=new WeakMap,S=new WeakMap,B=new WeakMap,C=new WeakMap,D=new WeakMap,A=new WeakMap,l.styles=[w],o([f({type:Boolean})],l.prototype,"multiple",1),o([f({type:String})],l.prototype,"accept",1),o([f({type:Number})],l.prototype,"maxSize",1),o([f({type:Boolean})],l.prototype,"showPreview",1),o([f({type:Boolean})],l.prototype,"disabled",1),o([f({type:String})],l.prototype,"label",1),o([v()],l.prototype,"isDragging",1),o([v()],l.prototype,"selectedFiles",1),o([v()],l.prototype,"errorMessage",1),o([b('input[type="file"]')],l.prototype,"fileInput",1);var K=l;export{l as a,K as b};
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
