'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const useStepsContext = require('./use-steps-context.cjs');

const StepsContext = (props) => {
  const context = useStepsContext.useStepsContext();
  return props.children(context);
};
StepsContext.displayName = "StepsContext";

exports.StepsContext = StepsContext;
