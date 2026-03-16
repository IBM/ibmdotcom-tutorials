"use strict";
"use client";
import { jsx } from 'react/jsx-runtime';
import { Pagination, usePaginationContext } from '@ark-ui/react/pagination';
import { forwardRef, useMemo } from 'react';
import { createSlotRecipeContext } from '../../styled-system/create-slot-recipe-context.js';
import { EllipsisIcon } from '../icons.js';
import { Box } from '../box/box.js';
import { For } from '../for/for.js';
import { IconButton } from '../button/icon-button.js';

const {
  withProvider,
  withContext,
  useStyles: usePaginationStyles,
  PropsProvider
} = createSlotRecipeContext({ key: "pagination" });
const PaginationRootProvider = withProvider(Pagination.RootProvider, "root", {
  forwardAsChild: true,
  forwardProps: ["page"]
});
const PaginationRoot = withProvider(
  Pagination.Root,
  "root",
  { forwardAsChild: true, forwardProps: ["page"] }
);
const PaginationPropsProvider = PropsProvider;
const PaginationEllipsis = withContext(Pagination.Ellipsis, "ellipsis", { forwardAsChild: true });
const PaginationItem = withContext(Pagination.Item, "item", { forwardAsChild: true });
const PaginationNextTrigger = withContext(Pagination.NextTrigger, "nextTrigger", { forwardAsChild: true });
const PaginationPrevTrigger = withContext(Pagination.PrevTrigger, "prevTrigger", { forwardAsChild: true });
const PaginationContext = Pagination.Context;
const PaginationPageText = forwardRef(function PaginationPageText2(props, ref) {
  const { format = "compact", ...rest } = props;
  const { page, totalPages, pageRange, count } = usePaginationContext();
  const content = useMemo(() => {
    if (format === "short") return `${page} / ${totalPages}`;
    if (format === "compact") return `${page} of ${totalPages}`;
    return `${pageRange.start + 1} - ${Math.min(pageRange.end, count)} of ${count}`;
  }, [format, page, totalPages, pageRange, count]);
  return /* @__PURE__ */ jsx(Box, { fontWeight: "medium", ref, ...rest, children: content });
});
const PaginationItems = (props) => {
  const { pages } = usePaginationContext();
  const { render, ellipsis, ...rest } = props;
  return /* @__PURE__ */ jsx(For, { each: pages, children: (page, index) => {
    if (page.type === "ellipsis") {
      return /* @__PURE__ */ jsx(PaginationEllipsis, { asChild: true, index, ...rest, children: ellipsis || /* @__PURE__ */ jsx(IconButton, { as: "span", children: /* @__PURE__ */ jsx(EllipsisIcon, {}) }) }, index);
    }
    return /* @__PURE__ */ jsx(
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

export { PaginationContext, PaginationEllipsis, PaginationItem, PaginationItems, PaginationNextTrigger, PaginationPageText, PaginationPrevTrigger, PaginationPropsProvider, PaginationRoot, PaginationRootProvider, usePaginationStyles };
