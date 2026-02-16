'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [StepsItemPropsProvider, useStepsItemPropsContext] = createContext.createContext({
  name: "StepsItemPropsContext",
  hookName: "useStepsItemPropsContext",
  providerName: "<StepsItemPropsProvider />"
});

exports.StepsItemPropsProvider = StepsItemPropsProvider;
exports.useStepsItemPropsContext = useStepsItemPropsContext;
