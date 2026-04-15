"use strict";
"use client";
import { jsx } from 'react/jsx-runtime';
import { Avatar } from '@ark-ui/react/avatar';
import { forwardRef, useMemo } from 'react';
import { cx } from '../../utils/cx.js';
import { createSlotRecipeContext } from '../../styled-system/create-slot-recipe-context.js';
import { chakra } from '../../styled-system/factory.js';
import { useSlotRecipe } from '../../styled-system/use-slot-recipe.js';
import { Group } from '../group/group.js';

const {
  withProvider,
  withContext,
  useStyles: useAvatarStyles,
  useClassNames,
  PropsProvider
} = createSlotRecipeContext({ key: "avatar" });
const AvatarRootProvider = withProvider(Avatar.RootProvider, "root", { forwardAsChild: true });
const AvatarRoot = withProvider(
  Avatar.Root,
  "root",
  { forwardAsChild: true }
);
const AvatarPropsProvider = PropsProvider;
const StyledFallback = chakra(Avatar.Fallback, {}, { forwardAsChild: true });
function getFallbackChildren(props) {
  if (props.children || props.asChild) return props.children;
  if (props.name) return getInitials(props.name);
  return /* @__PURE__ */ jsx(AvatarIcon, {});
}
function getInitials(name) {
  const names = name.trim().split(" ");
  const firstName = names[0] != null ? names[0] : "";
  const lastName = names.length > 1 ? names[names.length - 1] : "";
  return firstName && lastName ? `${firstName.charAt(0)}${lastName.charAt(0)}` : firstName.charAt(0);
}
const AvatarFallback = forwardRef(
  function AvatarFallback2(props, ref) {
    const styles = useAvatarStyles();
    const classNames = useClassNames();
    const { name: _, ...rest } = props;
    return /* @__PURE__ */ jsx(
      StyledFallback,
      {
        ref,
        ...rest,
        className: cx(props.className, classNames.fallback),
        css: [styles.fallback, props.css],
        children: getFallbackChildren(props)
      }
    );
  }
);
const AvatarImage = withContext(
  Avatar.Image,
  "image",
  {
    forwardAsChild: true,
    defaultProps: {
      draggable: "false",
      referrerPolicy: "no-referrer"
    }
  }
);
const AvatarIcon = forwardRef(
  function AvatarIcon2(props, ref) {
    return /* @__PURE__ */ jsx(
      chakra.svg,
      {
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0",
        viewBox: "0 0 24 24",
        height: "1.2em",
        width: "1.2em",
        ref,
        ...props,
        children: /* @__PURE__ */ jsx("path", { d: "M20 22H18V20C18 18.3431 16.6569 17 15 17H9C7.34315 17 6 18.3431 6 20V22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" })
      }
    );
  }
);
const AvatarContext = Avatar.Context;
const AvatarGroup = forwardRef(
  function AvatarGroup2(props, ref) {
    const recipe = useSlotRecipe({ key: "avatar" });
    const [variantProps, localProps] = useMemo(
      () => recipe.splitVariantProps(props),
      [props, recipe]
    );
    return /* @__PURE__ */ jsx(PropsProvider, { value: variantProps, children: /* @__PURE__ */ jsx(Group, { gap: "0", spaceX: "-3", ref, ...localProps }) });
  }
);

export { AvatarContext, AvatarFallback, AvatarGroup, AvatarIcon, AvatarImage, AvatarPropsProvider, AvatarRoot, AvatarRootProvider, useAvatarStyles };
