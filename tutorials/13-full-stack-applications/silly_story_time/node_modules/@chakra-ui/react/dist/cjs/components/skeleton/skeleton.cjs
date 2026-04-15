"use strict";
"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var createRecipeContext = require('../../styled-system/create-recipe-context.cjs');
var circle = require('../box/circle.cjs');
var stack = require('../stack/stack.cjs');

function _interopNamespaceDefault(e) {
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);

const { withContext, PropsProvider } = createRecipeContext.createRecipeContext({
  key: "skeleton"
});
const Skeleton = withContext("div");
const SkeletonPropsProvider = PropsProvider;
const SkeletonCircle = React__namespace.forwardRef(function SkeletonCircle2(props, ref) {
  const { size, ...rest } = props;
  return /* @__PURE__ */ jsxRuntime.jsx(circle.Circle, { size, asChild: true, ref, children: /* @__PURE__ */ jsxRuntime.jsx(Skeleton, { ...rest }) });
});
const SkeletonText = React__namespace.forwardRef(
  function SkeletonText2(props, ref) {
    const { noOfLines = 3, gap, rootProps, ...rest } = props;
    return /* @__PURE__ */ jsxRuntime.jsx(stack.Stack, { gap, width: "full", ref, ...rootProps, children: Array.from({ length: noOfLines }).map((_, index) => /* @__PURE__ */ jsxRuntime.jsx(
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

exports.Skeleton = Skeleton;
exports.SkeletonCircle = SkeletonCircle;
exports.SkeletonPropsProvider = SkeletonPropsProvider;
exports.SkeletonText = SkeletonText;
