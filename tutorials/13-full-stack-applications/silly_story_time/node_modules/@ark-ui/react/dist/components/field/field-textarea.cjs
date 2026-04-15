'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const autoResize = require('@zag-js/auto-resize');
const react$1 = require('@zag-js/react');
const react = require('react');
const composeRefs = require('../../utils/compose-refs.cjs');
const factory = require('../factory.cjs');
const useFieldContext = require('./use-field-context.cjs');

const FieldTextarea = react.forwardRef((props, ref) => {
  const { autoresize, ...textareaProps } = props;
  const textareaRef = react.useRef(null);
  const field = useFieldContext.useFieldContext();
  const mergedProps = react$1.mergeProps(
    field?.getTextareaProps(),
    { style: { resize: autoresize ? "none" : void 0 } },
    textareaProps
  );
  react.useEffect(() => {
    if (!autoresize) return;
    return autoResize.autoresizeTextarea(textareaRef.current);
  }, [autoresize]);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.textarea, { ...mergedProps, ref: composeRefs.composeRefs(ref, textareaRef) });
});
FieldTextarea.displayName = "FieldTextarea";

exports.FieldTextarea = FieldTextarea;
