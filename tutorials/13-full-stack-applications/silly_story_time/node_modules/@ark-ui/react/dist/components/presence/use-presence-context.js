'use client';
import { createContext } from '../../utils/create-context.js';

const [PresenceProvider, usePresenceContext] = createContext({
  name: "PresenceContext",
  hookName: "usePresenceContext",
  providerName: "<PresenceProvider />"
});

export { PresenceProvider, usePresenceContext };
