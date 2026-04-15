'use client';
import { useStepsItemContext } from './use-steps-item-context.js';

const StepsItemContext = (props) => {
  return props.children(useStepsItemContext());
};
StepsItemContext.displayName = "StepsItemContext";

export { StepsItemContext };
