'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const avatarContext = require('./avatar-context.cjs');
const avatarFallback = require('./avatar-fallback.cjs');
const avatarImage = require('./avatar-image.cjs');
const avatarRoot = require('./avatar-root.cjs');
const avatarRootProvider = require('./avatar-root-provider.cjs');
const useAvatar = require('./use-avatar.cjs');
const useAvatarContext = require('./use-avatar-context.cjs');
const avatar$1 = require('./avatar.cjs');
const avatar = require('@zag-js/avatar');



exports.AvatarContext = avatarContext.AvatarContext;
exports.AvatarFallback = avatarFallback.AvatarFallback;
exports.AvatarImage = avatarImage.AvatarImage;
exports.AvatarRoot = avatarRoot.AvatarRoot;
exports.AvatarRootProvider = avatarRootProvider.AvatarRootProvider;
exports.useAvatar = useAvatar.useAvatar;
exports.useAvatarContext = useAvatarContext.useAvatarContext;
exports.Avatar = avatar$1;
Object.defineProperty(exports, "avatarAnatomy", {
  enumerable: true,
  get: () => avatar.anatomy
});
