'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [FileUploadItemPropsProvider, useFileUploadItemPropsContext] = createContext.createContext({
  name: "FileUploadItemPropsContext",
  hookName: "useFileUploadItemPropsContext",
  providerName: "<FileUploadItemPropsProvider />"
});

exports.FileUploadItemPropsProvider = FileUploadItemPropsProvider;
exports.useFileUploadItemPropsContext = useFileUploadItemPropsContext;
