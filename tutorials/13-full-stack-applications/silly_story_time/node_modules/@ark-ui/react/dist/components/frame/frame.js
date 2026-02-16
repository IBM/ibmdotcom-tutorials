'use client';
import { jsx, jsxs } from 'react/jsx-runtime';
import { forwardRef, useState, useEffect, useId } from 'react';
import { createPortal } from 'react-dom';
import { EnvironmentProvider } from '../../providers/environment/environment-provider.js';
import { composeRefs } from '../../utils/compose-refs.js';
import { useSafeLayoutEffect } from '../../utils/use-safe-layout-effect.js';
import { FrameContent } from './frame-content.js';

const resetStyle = "<style>*,*::before,*::after { margin: 0; padding: 0; box-sizing: border-box; }</style>";
const initialSrcDoc = `<html><head>${resetStyle}</head><body><div class="frame-root"></div></body></html>`;
function getMountNode(frame) {
  const doc = frame.contentWindow?.document;
  if (!doc) return null;
  const mountNode = doc.body.querySelector(".frame-root") || doc.body;
  return mountNode;
}
const Frame = forwardRef((props, ref) => {
  const { children, head, onMount, onUnmount, srcDoc = initialSrcDoc, ...rest } = props;
  const [frameRef, setFrameRef] = useState(null);
  const [mountNode, setMountNode] = useState(null);
  useSafeLayoutEffect(() => {
    if (!frameRef) return;
    const doc = frameRef.contentWindow?.document;
    if (!doc) return;
    doc.open();
    doc.write(srcDoc);
    doc.close();
    setMountNode(getMountNode(frameRef));
  }, [frameRef, srcDoc]);
  useEffect(() => {
    if (!frameRef || !frameRef.contentDocument) return;
    const win = frameRef.contentWindow;
    if (!win) return;
    const mountNode2 = getMountNode(frameRef);
    if (!mountNode2) return;
    const exec = () => {
      const rootEl = frameRef.contentDocument?.documentElement;
      if (!rootEl) return;
      frameRef.style.setProperty("--width", `${mountNode2.scrollWidth}px`);
      frameRef.style.setProperty("--height", `${mountNode2.scrollHeight}px`);
    };
    const resizeObserver = new win.ResizeObserver(exec);
    exec();
    if (frameRef.contentDocument) {
      resizeObserver.observe(mountNode2);
    }
    return () => {
      resizeObserver.disconnect();
    };
  }, [frameRef]);
  return /* @__PURE__ */ jsx(EnvironmentProvider, { value: () => frameRef?.contentDocument ?? document, children: /* @__PURE__ */ jsxs("iframe", { title: `frame:${useId()}`, ref: composeRefs(ref, setFrameRef), ...rest, children: [
    mountNode ? createPortal(
      /* @__PURE__ */ jsx(FrameContent, { onMount, onUnmount, children }),
      mountNode
    ) : null,
    head && frameRef ? createPortal(head, frameRef.contentDocument.head) : null
  ] }) });
});

export { Frame };
