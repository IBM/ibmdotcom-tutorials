'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const useStepsItemContext = require('./use-steps-item-context.cjs');

const StepsItemContext = (props) => {
  return props.children(useStepsItemContext.useStepsItemContext());
};
StepsItemContext.displayName = "StepsItemContext";

exports.StepsItemContext = StepsItemContext;
