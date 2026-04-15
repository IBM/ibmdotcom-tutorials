'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useTourContext = require('./use-tour-context.cjs');

const TourActionTrigger = react.forwardRef((props, ref) => {
  const [actionTriggerProps, localProps] = createSplitProps.createSplitProps()(props, ["action"]);
  const tour = useTourContext.useTourContext();
  const mergedProps = react$1.mergeProps(tour.getActionTriggerProps(actionTriggerProps), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.button, { ...mergedProps, ref, children: mergedProps.children || actionTriggerProps.action.label });
});
TourActionTrigger.displayName = "TourActionTrigger";

exports.TourActionTrigger = TourActionTrigger;
