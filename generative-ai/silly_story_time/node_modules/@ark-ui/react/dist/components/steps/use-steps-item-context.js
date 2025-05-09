'use client';
import { createContext } from '../../utils/create-context.js';

const [StepsItemProvider, useStepsItemContext] = createContext({
  name: "StepsItemContext",
  hookName: "useStepsItemContext",
  providerName: "<StepsItem />"
});

export { StepsItemProvider, useStepsItemContext };
