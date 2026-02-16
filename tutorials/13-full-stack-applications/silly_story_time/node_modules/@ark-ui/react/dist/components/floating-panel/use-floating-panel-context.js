'use client';
import { createContext } from '../../utils/create-context.js';

const [FloatingPanelProvider, useFloatingPanelContext] = createContext({
  name: "FloatingPanelContext",
  hookName: "useFloatingPanelContext",
  providerName: "<FloatingPanelProvider />"
});

export { FloatingPanelProvider, useFloatingPanelContext };
