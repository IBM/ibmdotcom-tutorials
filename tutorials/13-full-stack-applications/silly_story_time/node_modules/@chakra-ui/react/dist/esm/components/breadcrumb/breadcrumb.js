"use strict";
"use client";
import { jsx } from 'react/jsx-runtime';
import { createSlotRecipeContext } from '../../styled-system/create-slot-recipe-context.js';
import { ChevronRightIcon, EllpsisIcon } from '../icons.js';

const {
  withProvider,
  withContext,
  useStyles: useBreadcrumbStyles,
  PropsProvider
} = createSlotRecipeContext({ key: "breadcrumb" });
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
    children: /* @__PURE__ */ jsx(ChevronRightIcon, {})
  }
});
const BreadcrumbEllipsis = withContext("span", "ellipsis", {
  defaultProps: {
    role: "presentation",
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx(EllpsisIcon, {})
  }
});

export { BreadcrumbCurrentLink, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPropsProvider, BreadcrumbRoot, BreadcrumbSeparator, useBreadcrumbStyles };
