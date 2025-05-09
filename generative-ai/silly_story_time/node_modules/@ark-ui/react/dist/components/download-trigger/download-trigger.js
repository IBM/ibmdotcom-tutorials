'use client';
import { jsx } from 'react/jsx-runtime';
import { downloadFile } from '@zag-js/file-utils';
import { isFunction } from '@zag-js/utils';
import { forwardRef } from 'react';
import { useEnvironmentContext } from '../../providers/environment/use-environment-context.js';
import { ark } from '../factory.js';

const DownloadTrigger = forwardRef((props, ref) => {
  const { fileName, data, mimeType, ...rest } = props;
  const { getWindow } = useEnvironmentContext();
  const download = (data2) => {
    downloadFile({ file: data2, name: fileName, type: mimeType, win: getWindow() });
  };
  const onClick = (e) => {
    props.onClick?.(e);
    if (e.defaultPrevented) return;
    if (isFunction(data)) {
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
  return /* @__PURE__ */ jsx(ark.button, { ref, ...rest, type: "button", onClick });
});
DownloadTrigger.displayName = "DownloadTrigger";

export { DownloadTrigger };
