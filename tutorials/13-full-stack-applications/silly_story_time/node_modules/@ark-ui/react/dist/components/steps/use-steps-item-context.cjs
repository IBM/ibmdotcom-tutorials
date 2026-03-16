'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [StepsItemProvider, useStepsItemContext] = createContext.createContext({
  name: "StepsItemContext",
  hookName: "useStepsItemContext",
  providerName: "<StepsItem />"
});

exports.StepsItemProvider = StepsItemProvider;
exports.useStepsItemContext = useStepsItemContext;
