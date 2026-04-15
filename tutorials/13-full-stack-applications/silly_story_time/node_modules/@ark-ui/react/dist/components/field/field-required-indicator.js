'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/core';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useFieldContext } from './use-field-context.js';

const FieldRequiredIndicator = forwardRef(
  ({ fallback, ...props }, ref) => {
    const field = useFieldContext();
    if (!field.required) {
      return fallback;
    }
    const mergedProps = mergeProps(field.getRequiredIndicatorProps(), props);
    return /* @__PURE__ */ jsx(ark.span, { ...mergedProps, ref, children: props.children ?? "*" });
  }
);
FieldRequiredIndicator.displayName = "FieldRequiredIndicator";

export { FieldRequiredIndicator };
