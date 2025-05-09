'use client';
import { createContext } from '../../utils/create-context.js';

const [AvatarProvider, useAvatarContext] = createContext({
  name: "AvatarContext",
  hookName: "useAvatarContext",
  providerName: "<AvatarProvider />"
});

export { AvatarProvider, useAvatarContext };
