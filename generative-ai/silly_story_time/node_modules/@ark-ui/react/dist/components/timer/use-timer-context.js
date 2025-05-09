'use client';
import { createContext } from '../../utils/create-context.js';

const [TimerProvider, useTimerContext] = createContext({
  name: "TimerContext",
  hookName: "useTimerContext",
  providerName: "<TimerProvider />"
});

export { TimerProvider, useTimerContext };
