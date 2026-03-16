'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [TimerProvider, useTimerContext] = createContext.createContext({
  name: "TimerContext",
  hookName: "useTimerContext",
  providerName: "<TimerProvider />"
});

exports.TimerProvider = TimerProvider;
exports.useTimerContext = useTimerContext;
