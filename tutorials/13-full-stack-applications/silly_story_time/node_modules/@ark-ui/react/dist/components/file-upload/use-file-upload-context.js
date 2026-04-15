'use client';
import { createContext } from '../../utils/create-context.js';

const [FileUploadProvider, useFileUploadContext] = createContext({
  name: "FileUploadContext",
  hookName: "useFileUploadContext",
  providerName: "<FileUploadProvider />"
});

export { FileUploadProvider, useFileUploadContext };
