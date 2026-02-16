import { createAnatomy } from '@zag-js/anatomy';
import { dataAttr } from '@zag-js/dom-query';
import { createMachine } from '@zag-js/core';
import { createProps } from '@zag-js/types';
import { createSplitProps } from '@zag-js/utils';

// src/pagination.anatomy.ts
var anatomy = createAnatomy("pagination").parts("root", "item", "ellipsis", "prevTrigger", "nextTrigger");
var parts = anatomy.build();

// src/pagination.dom.ts
var getRootId = (ctx) => ctx.ids?.root ?? `pagination:${ctx.id}`;
var getPrevTriggerId = (ctx) => ctx.ids?.prevTrigger ?? `pagination:${ctx.id}:prev`;
var getNextTriggerId = (ctx) => ctx.ids?.nextTrigger ?? `pagination:${ctx.id}:next`;
var getEllipsisId = (ctx, index) => ctx.ids?.ellipsis?.(index) ?? `pagination:${ctx.id}:ellipsis:${index}`;
var getItemId = (ctx, page) => ctx.ids?.item?.(page) ?? `pagination:${ctx.id}:item:${page}`;

// src/pagination.utils.ts
var range = (start, end) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};
var transform = (items) => {
  return items.map((value) => {
    if (typeof value === "number") return { type: "page", value };
    return { type: "ellipsis" };
  });
};
var ELLIPSIS = "ellipsis";
var getRange = (ctx) => {
  const { page, totalPages, siblingCount } = ctx;
  const totalPageNumbers = Math.min(2 * siblingCount + 5, totalPages);
  const firstPageIndex = 1;
  const lastPageIndex = totalPages;
  const leftSiblingIndex = Math.max(page - siblingCount, firstPageIndex);
  const rightSiblingIndex = Math.min(page + siblingCount, lastPageIndex);
  const showLeftEllipsis = leftSiblingIndex > firstPageIndex + 1;
  const showRightEllipsis = rightSiblingIndex < lastPageIndex - 1;
  const itemCount = totalPageNumbers - 2;
  if (!showLeftEllipsis && showRightEllipsis) {
    const leftRange = range(1, itemCount);
    return [...leftRange, ELLIPSIS, lastPageIndex];
  }
  if (showLeftEllipsis && !showRightEllipsis) {
    const rightRange = range(lastPageIndex - itemCount + 1, lastPageIndex);
    return [firstPageIndex, ELLIPSIS, ...rightRange];
  }
  if (showLeftEllipsis && showRightEllipsis) {
    const middleRange = range(leftSiblingIndex, rightSiblingIndex);
    return [firstPageIndex, ELLIPSIS, ...middleRange, ELLIPSIS, lastPageIndex];
  }
  const fullRange = range(firstPageIndex, lastPageIndex);
  return fullRange;
};
var getTransformedRange = (ctx) => transform(getRange(ctx));

// src/pagination.connect.ts
function connect(service, normalize) {
  const { send, scope, prop, computed, context } = service;
  const totalPages = computed("totalPages");
  const page = context.get("page");
  const translations = prop("translations");
  const count = prop("count");
  const previousPage = computed("previousPage");
  const nextPage = computed("nextPage");
  const pageRange = computed("pageRange");
  const type = prop("type");
  const isButton = type === "button";
  const isFirstPage = page === 1;
  const isLastPage = page === totalPages;
  const pages = getTransformedRange({
    page,
    totalPages,
    siblingCount: prop("siblingCount")
  });
  return {
    count,
    page,
    pageSize: context.get("pageSize"),
    totalPages,
    pages,
    previousPage,
    nextPage,
    pageRange,
    slice(data) {
      return data.slice(pageRange.start, pageRange.end);
    },
    setPageSize(size) {
      send({ type: "SET_PAGE_SIZE", size });
    },
    setPage(page2) {
      send({ type: "SET_PAGE", page: page2 });
    },
    goToNextPage() {
      send({ type: "NEXT_PAGE" });
    },
    goToPrevPage() {
      send({ type: "PREVIOUS_PAGE" });
    },
    goToFirstPage() {
      send({ type: "FIRST_PAGE" });
    },
    goToLastPage() {
      send({ type: "LAST_PAGE" });
    },
    getRootProps() {
      return normalize.element({
        id: getRootId(scope),
        ...parts.root.attrs,
        dir: prop("dir"),
        "aria-label": translations.rootLabel
      });
    },
    getEllipsisProps(props2) {
      return normalize.element({
        id: getEllipsisId(scope, props2.index),
        ...parts.ellipsis.attrs,
        dir: prop("dir")
      });
    },
    getItemProps(props2) {
      const index = props2.value;
      const isCurrentPage = index === page;
      return normalize.element({
        id: getItemId(scope, index),
        ...parts.item.attrs,
        dir: prop("dir"),
        "data-index": index,
        "data-selected": dataAttr(isCurrentPage),
        "aria-current": isCurrentPage ? "page" : void 0,
        "aria-label": translations.itemLabel?.({ page: index, totalPages }),
        onClick() {
          send({ type: "SET_PAGE", page: index });
        },
        ...isButton && { type: "button" }
      });
    },
    getPrevTriggerProps() {
      return normalize.element({
        id: getPrevTriggerId(scope),
        ...parts.prevTrigger.attrs,
        dir: prop("dir"),
        "data-disabled": dataAttr(isFirstPage),
        "aria-label": translations.prevTriggerLabel,
        onClick() {
          send({ type: "PREVIOUS_PAGE" });
        },
        ...isButton && { disabled: isFirstPage, type: "button" }
      });
    },
    getNextTriggerProps() {
      return normalize.element({
        id: getNextTriggerId(scope),
        ...parts.nextTrigger.attrs,
        dir: prop("dir"),
        "data-disabled": dataAttr(isLastPage),
        "aria-label": translations.nextTriggerLabel,
        onClick() {
          send({ type: "NEXT_PAGE" });
        },
        ...isButton && { disabled: isLastPage, type: "button" }
      });
    }
  };
}
var machine = createMachine({
  props({ props: props2 }) {
    return {
      defaultPageSize: 10,
      siblingCount: 1,
      defaultPage: 1,
      type: "button",
      count: 1,
      ...props2,
      translations: {
        rootLabel: "pagination",
        prevTriggerLabel: "previous page",
        nextTriggerLabel: "next page",
        itemLabel({ page, totalPages }) {
          const isLastPage = totalPages > 1 && page === totalPages;
          return `${isLastPage ? "last page, " : ""}page ${page}`;
        },
        ...props2.translations
      }
    };
  },
  initialState() {
    return "idle";
  },
  context({ prop, bindable, getContext }) {
    return {
      page: bindable(() => ({
        value: prop("page"),
        defaultValue: prop("defaultPage"),
        onChange(value) {
          const context = getContext();
          prop("onPageChange")?.({ page: value, pageSize: context.get("pageSize") });
        }
      })),
      pageSize: bindable(() => ({
        value: prop("pageSize"),
        defaultValue: prop("defaultPageSize"),
        onChange(value) {
          prop("onPageSizeChange")?.({ pageSize: value });
        }
      }))
    };
  },
  watch({ track, context, action }) {
    track([() => context.get("pageSize")], () => {
      action(["setPageIfNeeded"]);
    });
  },
  computed: {
    totalPages: ({ context, prop }) => Math.ceil(prop("count") / context.get("pageSize")),
    previousPage: ({ context }) => context.get("page") === 1 ? null : context.get("page") - 1,
    nextPage: ({ context, computed }) => context.get("page") === computed("totalPages") ? null : context.get("page") + 1,
    pageRange: ({ context, prop }) => {
      const start = (context.get("page") - 1) * context.get("pageSize");
      const end = Math.min(start + context.get("pageSize"), prop("count"));
      return { start, end };
    },
    isValidPage: ({ context, computed }) => context.get("page") >= 1 && context.get("page") <= computed("totalPages")
  },
  on: {
    SET_PAGE: {
      guard: "isValidPage",
      actions: ["setPage"]
    },
    SET_PAGE_SIZE: {
      actions: ["setPageSize"]
    },
    FIRST_PAGE: {
      actions: ["goToFirstPage"]
    },
    LAST_PAGE: {
      actions: ["goToLastPage"]
    },
    PREVIOUS_PAGE: {
      guard: "canGoToPrevPage",
      actions: ["goToPrevPage"]
    },
    NEXT_PAGE: {
      guard: "canGoToNextPage",
      actions: ["goToNextPage"]
    }
  },
  states: {
    idle: {}
  },
  implementations: {
    guards: {
      isValidPage: ({ event, computed }) => event.page >= 1 && event.page <= computed("totalPages"),
      isValidCount: ({ context, event }) => context.get("page") > event.count,
      canGoToNextPage: ({ context, computed }) => context.get("page") < computed("totalPages"),
      canGoToPrevPage: ({ context }) => context.get("page") > 1
    },
    actions: {
      setPage({ context, event, computed }) {
        const page = clampPage(event.page, computed("totalPages"));
        context.set("page", page);
      },
      setPageSize({ context, event }) {
        context.set("pageSize", event.size);
      },
      goToFirstPage({ context }) {
        context.set("page", 1);
      },
      goToLastPage({ context, computed }) {
        context.set("page", computed("totalPages"));
      },
      goToPrevPage({ context, computed }) {
        context.set("page", (prev) => clampPage(prev - 1, computed("totalPages")));
      },
      goToNextPage({ context, computed }) {
        context.set("page", (prev) => clampPage(prev + 1, computed("totalPages")));
      },
      setPageIfNeeded({ context, computed }) {
        if (computed("isValidPage")) return;
        context.set("page", 1);
      }
    }
  }
});
var clampPage = (page, totalPages) => Math.min(Math.max(page, 1), totalPages);
var props = createProps()([
  "count",
  "dir",
  "getRootNode",
  "id",
  "ids",
  "onPageChange",
  "onPageSizeChange",
  "page",
  "defaultPage",
  "pageSize",
  "defaultPageSize",
  "siblingCount",
  "translations",
  "type"
]);
var splitProps = createSplitProps(props);
var itemProps = createProps()(["value", "type"]);
var splitItemProps = createSplitProps(itemProps);
var ellipsisProps = createProps()(["index"]);
var splitEllipsisProps = createSplitProps(ellipsisProps);

export { anatomy, connect, ellipsisProps, itemProps, machine, props, splitEllipsisProps, splitItemProps, splitProps };
