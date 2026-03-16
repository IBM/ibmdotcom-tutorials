'use client';
import { useFileUploadContext } from './use-file-upload-context.js';

const FileUploadContext = (props) => props.children(useFileUploadContext());

export { FileUploadContext };
