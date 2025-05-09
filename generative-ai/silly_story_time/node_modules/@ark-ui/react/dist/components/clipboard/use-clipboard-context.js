'use client';
import { createContext } from '../../utils/create-context.js';

const [ClipboardProvider, useClipboardContext] = createContext({
  name: "ClipboardContext",
  hookName: "useClipboardContext",
  providerName: "<ClipboardProvider />"
});

export { ClipboardProvider, useClipboardContext };
