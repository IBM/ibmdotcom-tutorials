'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const useFileUploadContext = require('./use-file-upload-context.cjs');

const FileUploadContext = (props) => props.children(useFileUploadContext.useFileUploadContext());

exports.FileUploadContext = FileUploadContext;
