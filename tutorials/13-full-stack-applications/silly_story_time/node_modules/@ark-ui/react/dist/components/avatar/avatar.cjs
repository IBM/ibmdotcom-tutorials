'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const avatarContext = require('./avatar-context.cjs');
const avatarFallback = require('./avatar-fallback.cjs');
const avatarImage = require('./avatar-image.cjs');
const avatarRoot = require('./avatar-root.cjs');
const avatarRootProvider = require('./avatar-root-provider.cjs');



exports.Context = avatarContext.AvatarContext;
exports.Fallback = avatarFallback.AvatarFallback;
exports.Image = avatarImage.AvatarImage;
exports.Root = avatarRoot.AvatarRoot;
exports.RootProvider = avatarRootProvider.AvatarRootProvider;
