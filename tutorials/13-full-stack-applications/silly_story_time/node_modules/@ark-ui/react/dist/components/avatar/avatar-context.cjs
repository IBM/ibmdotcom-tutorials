'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const useAvatarContext = require('./use-avatar-context.cjs');

const AvatarContext = (props) => props.children(useAvatarContext.useAvatarContext());

exports.AvatarContext = AvatarContext;
