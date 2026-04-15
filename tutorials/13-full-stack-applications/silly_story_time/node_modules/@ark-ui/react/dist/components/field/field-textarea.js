'use client';
import { jsx } from 'react/jsx-runtime';
import { autoresizeTextarea } from '@zag-js/auto-resize';
import { mergeProps } from '@zag-js/react';
import { forwardRef, useRef, useEffect } from 'react';
import { composeRefs } from '../../utils/compose-refs.js';
import { ark } from '../factory.js';
import { useFieldContext } from './use-field-context.js';

const FieldTextarea = forwardRef((props, ref) => {
  const { autoresize, ...textareaProps } = props;
  const textareaRef = useRef(null);
  const field = useFieldContext();
  const mergedProps = mergeProps(
    field?.getTextareaProps(),
    { style: { resize: autoresize ? "none" : void 0 } },
    textareaProps
  );
  useEffect(() => {
    if (!autoresize) return;
    return autoresizeTextarea(textareaRef.current);
  }, [autoresize]);
  return /* @__PURE__ */ jsx(ark.textarea, { ...mergedProps, ref: composeRefs(ref, textareaRef) });
});
FieldTextarea.displayName = "FieldTextarea";

export { FieldTextarea };
