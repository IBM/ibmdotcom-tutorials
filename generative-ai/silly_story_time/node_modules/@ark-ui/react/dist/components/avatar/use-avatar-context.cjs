'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [AvatarProvider, useAvatarContext] = createContext.createContext({
  name: "AvatarContext",
  hookName: "useAvatarContext",
  providerName: "<AvatarProvider />"
});

exports.AvatarProvider = AvatarProvider;
exports.useAvatarContext = useAvatarContext;
