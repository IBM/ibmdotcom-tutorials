'use client';
import { createContext } from '../../utils/create-context.js';

const [FileUploadItemPropsProvider, useFileUploadItemPropsContext] = createContext({
  name: "FileUploadItemPropsContext",
  hookName: "useFileUploadItemPropsContext",
  providerName: "<FileUploadItemPropsProvider />"
});

export { FileUploadItemPropsProvider, useFileUploadItemPropsContext };
