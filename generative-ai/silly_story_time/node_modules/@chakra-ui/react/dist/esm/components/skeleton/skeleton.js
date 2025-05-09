"use strict";
"use client";
import { jsx } from 'react/jsx-runtime';
import * as React from 'react';
import { createRecipeContext } from '../../styled-system/create-recipe-context.js';
import { Circle } from '../box/circle.js';
import { Stack } from '../stack/stack.js';

const { withContext, PropsProvider } = createRecipeContext({
  key: "skeleton"
});
const Skeleton = withContext("div");
const SkeletonPropsProvider = PropsProvider;
const SkeletonCircle = React.forwardRef(function SkeletonCircle2(props, ref) {
  const { size, ...rest } = props;
  return /* @__PURE__ */ jsx(Circle, { size, asChild: true, ref, children: /* @__PURE__ */ jsx(Skeleton, { ...rest }) });
});
const SkeletonText = React.forwardRef(
  function SkeletonText2(props, ref) {
    const { noOfLines = 3, gap, rootProps, ...rest } = props;
    return /* @__PURE__ */ jsx(Stack, { gap, width: "full", ref, ...rootProps, children: Array.from({ length: noOfLines }).map((_, index) => /* @__PURE__ */ jsx(
      Skeleton,
      {
        height: "4",
        _last: { maxW: noOfLines === 1 ? "100%" : "80%" },
        ...rest
      },
      index
    )) });
  }
);

export { Skeleton, SkeletonCircle, SkeletonPropsProvider, SkeletonText };
