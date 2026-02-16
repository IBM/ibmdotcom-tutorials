'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const fileUtils = require('@zag-js/file-utils');
const utils = require('@zag-js/utils');
const react = require('react');
const useEnvironmentContext = require('../../providers/environment/use-environment-context.cjs');
const factory = require('../factory.cjs');

const DownloadTrigger = react.forwardRef((props, ref) => {
  const { fileName, data, mimeType, ...rest } = props;
  const { getWindow } = useEnvironmentContext.useEnvironmentContext();
  const download = (data2) => {
    fileUtils.downloadFile({ file: data2, name: fileName, type: mimeType, win: getWindow() });
  };
  const onClick = (e) => {
    props.onClick?.(e);
    if (e.defaultPrevented) return;
    if (utils.isFunction(data)) {
      const maybePromise = data();
      if (maybePromise instanceof Promise) {
        maybePromise.then((data2) => download(data2));
      } else {
        download(maybePromise);
      }
    } else {
      download(data);
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.button, { ref, ...rest, type: "button", onClick });
});
DownloadTrigger.displayName = "DownloadTrigger";

exports.DownloadTrigger = DownloadTrigger;
