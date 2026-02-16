"use strict";
"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var pagination = require('@ark-ui/react/pagination');
var React = require('react');
var createSlotRecipeContext = require('../../styled-system/create-slot-recipe-context.cjs');
var icons = require('../icons.cjs');
var box = require('../box/box.cjs');
var _for = require('../for/for.cjs');
var iconButton = require('../button/icon-button.cjs');

const {
  withProvider,
  withContext,
  useStyles: usePaginationStyles,
  PropsProvider
} = createSlotRecipeContext.createSlotRecipeContext({ key: "pagination" });
const PaginationRootProvider = withProvider(pagination.Pagination.RootProvider, "root", {
  forwardAsChild: true,
  forwardProps: ["page"]
});
const PaginationRoot = withProvider(
  pagination.Pagination.Root,
  "root",
  { forwardAsChild: true, forwardProps: ["page"] }
);
const PaginationPropsProvider = PropsProvider;
const PaginationEllipsis = withContext(pagination.Pagination.Ellipsis, "ellipsis", { forwardAsChild: true });
const PaginationItem = withContext(pagination.Pagination.Item, "item", { forwardAsChild: true });
const PaginationNextTrigger = withContext(pagination.Pagination.NextTrigger, "nextTrigger", { forwardAsChild: true });
const PaginationPrevTrigger = withContext(pagination.Pagination.PrevTrigger, "prevTrigger", { forwardAsChild: true });
const PaginationContext = pagination.Pagination.Context;
const PaginationPageText = React.forwardRef(function PaginationPageText2(props, ref) {
  const { format = "compact", ...rest } = props;
  const { page, totalPages, pageRange, count } = pagination.usePaginationContext();
  const content = React.useMemo(() => {
    if (format === "short") return `${page} / ${totalPages}`;
    if (format === "compact") return `${page} of ${totalPages}`;
    return `${pageRange.start + 1} - ${Math.min(pageRange.end, count)} of ${count}`;
  }, [format, page, totalPages, pageRange, count]);
  return /* @__PURE__ */ jsxRuntime.jsx(box.Box, { fontWeight: "medium", ref, ...rest, children: content });
});
const PaginationItems = (props) => {
  const { pages } = pagination.usePaginationContext();
  const { render, ellipsis, ...rest } = props;
  return /* @__PURE__ */ jsxRuntime.jsx(_for.For, { each: pages, children: (page, index) => {
    if (page.type === "ellipsis") {
      return /* @__PURE__ */ jsxRuntime.jsx(PaginationEllipsis, { asChild: true, index, ...rest, children: ellipsis || /* @__PURE__ */ jsxRuntime.jsx(iconButton.IconButton, { as: "span", children: /* @__PURE__ */ jsxRuntime.jsx(icons.EllipsisIcon, {}) }) }, index);
    }
    return /* @__PURE__ */ jsxRuntime.jsx(
      PaginationItem,
      {
        asChild: true,
        type: "page",
        value: page.value,
        ...rest,
        children: render(page)
      },
      index
    );
  } });
};

exports.PaginationContext = PaginationContext;
exports.PaginationEllipsis = PaginationEllipsis;
exports.PaginationItem = PaginationItem;
exports.PaginationItems = PaginationItems;
exports.PaginationNextTrigger = PaginationNextTrigger;
exports.PaginationPageText = PaginationPageText;
exports.PaginationPrevTrigger = PaginationPrevTrigger;
exports.PaginationPropsProvider = PaginationPropsProvider;
exports.PaginationRoot = PaginationRoot;
exports.PaginationRootProvider = PaginationRootProvider;
exports.usePaginationStyles = usePaginationStyles;
