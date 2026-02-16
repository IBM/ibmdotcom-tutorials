"use strict";
"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var createSlotRecipeContext = require('../../styled-system/create-slot-recipe-context.cjs');
var icons = require('../icons.cjs');

const {
  withProvider,
  withContext,
  useStyles: useBreadcrumbStyles,
  PropsProvider
} = createSlotRecipeContext.createSlotRecipeContext({ key: "breadcrumb" });
const BreadcrumbRoot = withProvider(
  "nav",
  "root",
  {
    defaultProps: { "aria-label": "breadcrumb" }
  }
);
const BreadcrumbPropsProvider = PropsProvider;
const BreadcrumbList = withContext(
  "ol",
  "list"
);
const BreadcrumbItem = withContext(
  "li",
  "item"
);
const BreadcrumbLink = withContext("a", "link");
const BreadcrumbCurrentLink = withContext("span", "currentLink", {
  defaultProps: {
    role: "link",
    "aria-current": "page"
  }
});
const BreadcrumbSeparator = withContext("li", "separator", {
  defaultProps: {
    "aria-hidden": true,
    children: /* @__PURE__ */ jsxRuntime.jsx(icons.ChevronRightIcon, {})
  }
});
const BreadcrumbEllipsis = withContext("span", "ellipsis", {
  defaultProps: {
    role: "presentation",
    "aria-hidden": true,
    children: /* @__PURE__ */ jsxRuntime.jsx(icons.EllpsisIcon, {})
  }
});

exports.BreadcrumbCurrentLink = BreadcrumbCurrentLink;
exports.BreadcrumbEllipsis = BreadcrumbEllipsis;
exports.BreadcrumbItem = BreadcrumbItem;
exports.BreadcrumbLink = BreadcrumbLink;
exports.BreadcrumbList = BreadcrumbList;
exports.BreadcrumbPropsProvider = BreadcrumbPropsProvider;
exports.BreadcrumbRoot = BreadcrumbRoot;
exports.BreadcrumbSeparator = BreadcrumbSeparator;
exports.useBreadcrumbStyles = useBreadcrumbStyles;
