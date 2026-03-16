'use client';
import { createContext } from '../../utils/create-context.js';

const [SplitterProvider, useSplitterContext] = createContext({
  name: "SplitterContext",
  hookName: "useSplitterContext",
  providerName: "<SplitterProvider />"
});

export { SplitterProvider, useSplitterContext };
