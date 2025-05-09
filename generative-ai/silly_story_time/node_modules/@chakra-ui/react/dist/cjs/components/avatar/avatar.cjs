"use strict";
"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var avatar = require('@ark-ui/react/avatar');
var React = require('react');
var cx = require('../../utils/cx.cjs');
var createSlotRecipeContext = require('../../styled-system/create-slot-recipe-context.cjs');
var factory = require('../../styled-system/factory.cjs');
var useSlotRecipe = require('../../styled-system/use-slot-recipe.cjs');
var group = require('../group/group.cjs');

const {
  withProvider,
  withContext,
  useStyles: useAvatarStyles,
  useClassNames,
  PropsProvider
} = createSlotRecipeContext.createSlotRecipeContext({ key: "avatar" });
const AvatarRootProvider = withProvider(avatar.Avatar.RootProvider, "root", { forwardAsChild: true });
const AvatarRoot = withProvider(
  avatar.Avatar.Root,
  "root",
  { forwardAsChild: true }
);
const AvatarPropsProvider = PropsProvider;
const StyledFallback = factory.chakra(avatar.Avatar.Fallback, {}, { forwardAsChild: true });
function getFallbackChildren(props) {
  if (props.children || props.asChild) return props.children;
  if (props.name) return getInitials(props.name);
  return /* @__PURE__ */ jsxRuntime.jsx(AvatarIcon, {});
}
function getInitials(name) {
  const names = name.trim().split(" ");
  const firstName = names[0] != null ? names[0] : "";
  const lastName = names.length > 1 ? names[names.length - 1] : "";
  return firstName && lastName ? `${firstName.charAt(0)}${lastName.charAt(0)}` : firstName.charAt(0);
}
const AvatarFallback = React.forwardRef(
  function AvatarFallback2(props, ref) {
    const styles = useAvatarStyles();
    const classNames = useClassNames();
    const { name: _, ...rest } = props;
    return /* @__PURE__ */ jsxRuntime.jsx(
      StyledFallback,
      {
        ref,
        ...rest,
        className: cx.cx(props.className, classNames.fallback),
        css: [styles.fallback, props.css],
        children: getFallbackChildren(props)
      }
    );
  }
);
const AvatarImage = withContext(
  avatar.Avatar.Image,
  "image",
  {
    forwardAsChild: true,
    defaultProps: {
      draggable: "false",
      referrerPolicy: "no-referrer"
    }
  }
);
const AvatarIcon = React.forwardRef(
  function AvatarIcon2(props, ref) {
    return /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.svg,
      {
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0",
        viewBox: "0 0 24 24",
        height: "1.2em",
        width: "1.2em",
        ref,
        ...props,
        children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M20 22H18V20C18 18.3431 16.6569 17 15 17H9C7.34315 17 6 18.3431 6 20V22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" })
      }
    );
  }
);
const AvatarContext = avatar.Avatar.Context;
const AvatarGroup = React.forwardRef(
  function AvatarGroup2(props, ref) {
    const recipe = useSlotRecipe.useSlotRecipe({ key: "avatar" });
    const [variantProps, localProps] = React.useMemo(
      () => recipe.splitVariantProps(props),
      [props, recipe]
    );
    return /* @__PURE__ */ jsxRuntime.jsx(PropsProvider, { value: variantProps, children: /* @__PURE__ */ jsxRuntime.jsx(group.Group, { gap: "0", spaceX: "-3", ref, ...localProps }) });
  }
);

exports.AvatarContext = AvatarContext;
exports.AvatarFallback = AvatarFallback;
exports.AvatarGroup = AvatarGroup;
exports.AvatarIcon = AvatarIcon;
exports.AvatarImage = AvatarImage;
exports.AvatarPropsProvider = AvatarPropsProvider;
exports.AvatarRoot = AvatarRoot;
exports.AvatarRootProvider = AvatarRootProvider;
exports.useAvatarStyles = useAvatarStyles;
