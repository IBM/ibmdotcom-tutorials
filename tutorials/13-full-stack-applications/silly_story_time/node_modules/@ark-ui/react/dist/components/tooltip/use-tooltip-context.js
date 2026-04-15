'use client';
import { createContext } from '../../utils/create-context.js';

const [TooltipProvider, useTooltipContext] = createContext({
  name: "TooltipContext",
  hookName: "useTooltipContext",
  providerName: "<TooltipProvider />"
});

export { TooltipProvider, useTooltipContext };
