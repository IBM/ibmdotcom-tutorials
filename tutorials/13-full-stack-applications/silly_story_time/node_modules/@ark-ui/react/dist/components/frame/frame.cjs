'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react = require('react');
const reactDom = require('react-dom');
const environmentProvider = require('../../providers/environment/environment-provider.cjs');
const composeRefs = require('../../utils/compose-refs.cjs');
const useSafeLayoutEffect = require('../../utils/use-safe-layout-effect.cjs');
const frameContent = require('./frame-content.cjs');

const resetStyle = "<style>*,*::before,*::after { margin: 0; padding: 0; box-sizing: border-box; }</style>";
const initialSrcDoc = `<html><head>${resetStyle}</head><body><div class="frame-root"></div></body></html>`;
function getMountNode(frame) {
  const doc = frame.contentWindow?.document;
  if (!doc) return null;
  const mountNode = doc.body.querySelector(".frame-root") || doc.body;
  return mountNode;
}
const Frame = react.forwardRef((props, ref) => {
  const { children, head, onMount, onUnmount, srcDoc = initialSrcDoc, ...rest } = props;
  const [frameRef, setFrameRef] = react.useState(null);
  const [mountNode, setMountNode] = react.useState(null);
  useSafeLayoutEffect.useSafeLayoutEffect(() => {
    if (!frameRef) return;
    const doc = frameRef.contentWindow?.document;
    if (!doc) return;
    doc.open();
    doc.write(srcDoc);
    doc.close();
    setMountNode(getMountNode(frameRef));
  }, [frameRef, srcDoc]);
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(environmentProvider.EnvironmentProvider, { value: () => frameRef?.contentDocument ?? document, children: /* @__PURE__ */ jsxRuntime.jsxs("iframe", { title: `frame:${react.useId()}`, ref: composeRefs.composeRefs(ref, setFrameRef), ...rest, children: [
    mountNode ? reactDom.createPortal(
      /* @__PURE__ */ jsxRuntime.jsx(frameContent.FrameContent, { onMount, onUnmount, children }),
      mountNode
    ) : null,
    head && frameRef ? reactDom.createPortal(head, frameRef.contentDocument.head) : null
  ] }) });
});

exports.Frame = Frame;
