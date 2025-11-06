import { LitElement } from 'lit';
import '@awesome.me/webawesome/dist/components/icon/icon.js';
import '@awesome.me/webawesome/dist/components/divider/divider.js';
export interface FileWithPreview {
    file: File;
    id: string;
}
export declare class FileInputDropzone extends LitElement {
    static styles: import("lit").CSSResult[];
    name: string;
    accessor multiple: boolean;
    accessor accept: string;
    accessor maxSize: number;
    accessor showPreview: boolean;
    accessor disabled: boolean;
    accessor label: string;
    private accessor isDragging;
    private accessor selectedFiles;
    private accessor errorMessage;
    private accessor imageUrls;
    private accessor fileInput;
    private _generateId;
    private _handleDragOver;
    private _handleDragLeave;
    private _handleDrop;
    private _handleClick;
    private _handleFileInputChange;
    private _processFiles;
    private _generateThumbnail;
    private _removeFile;
    private _getFileIcon;
    private _formatFileSize;
    clearFiles(): void;
    getFiles(): File[];
    protected render(): import("lit").TemplateResult<1>;
}
export default FileInputDropzone;
