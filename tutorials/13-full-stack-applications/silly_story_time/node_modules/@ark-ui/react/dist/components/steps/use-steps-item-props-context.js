'use client';
import { createContext } from '../../utils/create-context.js';

const [StepsItemPropsProvider, useStepsItemPropsContext] = createContext({
  name: "StepsItemPropsContext",
  hookName: "useStepsItemPropsContext",
  providerName: "<StepsItemPropsProvider />"
});

export { StepsItemPropsProvider, useStepsItemPropsContext };
