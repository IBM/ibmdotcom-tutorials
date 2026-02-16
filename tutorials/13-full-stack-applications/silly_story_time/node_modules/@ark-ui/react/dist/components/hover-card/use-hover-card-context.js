'use client';
import { createContext } from '../../utils/create-context.js';

const [HoverCardProvider, useHoverCardContext] = createContext({
  name: "HoverCardContext",
  hookName: "useHoverCardContext",
  providerName: "<HoverCardProvider />"
});

export { HoverCardProvider, useHoverCardContext };
