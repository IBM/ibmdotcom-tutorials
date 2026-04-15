'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useProgressContext = require('./use-progress-context.cjs');

const ProgressCircleTrack = react.forwardRef((props, ref) => {
  const progress = useProgressContext.useProgressContext();
  const mergedProps = react$1.mergeProps(progress.getCircleTrackProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.circle, { ref, ...mergedProps });
});
ProgressCircleTrack.displayName = "ProgressCircleTrack";

exports.ProgressCircleTrack = ProgressCircleTrack;
