"use strict";
'use strict';

var avatar = require('./avatar.cjs');
var avatar$1 = require('@ark-ui/react/avatar');
var namespace = require('./namespace.cjs');



exports.AvatarContext = avatar.AvatarContext;
exports.AvatarFallback = avatar.AvatarFallback;
exports.AvatarGroup = avatar.AvatarGroup;
exports.AvatarIcon = avatar.AvatarIcon;
exports.AvatarImage = avatar.AvatarImage;
exports.AvatarPropsProvider = avatar.AvatarPropsProvider;
exports.AvatarRoot = avatar.AvatarRoot;
exports.AvatarRootProvider = avatar.AvatarRootProvider;
exports.useAvatarStyles = avatar.useAvatarStyles;
Object.defineProperty(exports, "useAvatar", {
  enumerable: true,
  get: function () { return avatar$1.useAvatar; }
});
Object.defineProperty(exports, "useAvatarContext", {
  enumerable: true,
  get: function () { return avatar$1.useAvatarContext; }
});
exports.Avatar = namespace;
