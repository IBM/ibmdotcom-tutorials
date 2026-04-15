'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const core = require('@zag-js/core');
const react = require('react');
const factory = require('../factory.cjs');
const useFieldContext = require('./use-field-context.cjs');

const FieldRequiredIndicator = react.forwardRef(
  ({ fallback, ...props }, ref) => {
    const field = useFieldContext.useFieldContext();
    if (!field.required) {
      return fallback;
    }
    const mergedProps = core.mergeProps(field.getRequiredIndicatorProps(), props);
    return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.span, { ...mergedProps, ref, children: props.children ?? "*" });
  }
);
FieldRequiredIndicator.displayName = "FieldRequiredIndicator";

exports.FieldRequiredIndicator = FieldRequiredIndicator;
