'use client';
import { useStepsContext } from './use-steps-context.js';

const StepsContext = (props) => {
  const context = useStepsContext();
  return props.children(context);
};
StepsContext.displayName = "StepsContext";

export { StepsContext };
