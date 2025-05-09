'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useProgressContext } from './use-progress-context.js';

const ProgressValueText = forwardRef((props, ref) => {
  const { children, ...rest } = props;
  const progress = useProgressContext();
  const mergedProps = mergeProps(progress.getValueTextProps(), rest);
  return /* @__PURE__ */ jsx(ark.span, { ...mergedProps, ref, children: children || progress.percentAsString });
});
ProgressValueText.displayName = "ProgressValueText";

export { ProgressValueText };
