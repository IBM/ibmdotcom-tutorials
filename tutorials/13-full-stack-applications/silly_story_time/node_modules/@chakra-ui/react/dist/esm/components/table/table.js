"use strict";
"use client";
import { jsx } from 'react/jsx-runtime';
import { forwardRef, useMemo } from 'react';
import { cx } from '../../utils/cx.js';
import { createSlotRecipeContext } from '../../styled-system/create-slot-recipe-context.js';
import { chakra } from '../../styled-system/factory.js';

const {
  StylesProvider,
  ClassNamesProvider,
  useRecipeResult,
  withContext,
  useStyles: useTableStyles,
  PropsProvider
} = createSlotRecipeContext({ key: "table" });
const TableRoot = forwardRef(
  function TableRoot2({ native, ...props }, ref) {
    const { styles, props: rootProps, classNames } = useRecipeResult(props);
    const rootCss = useMemo(() => {
      if (!native) return styles.root;
      return {
        ...styles.root,
        "& thead": styles.header,
        "& tbody": styles.body,
        "& tfoot": styles.footer,
        "& thead th": styles.columnHeader,
        "& tr": styles.row,
        "& td": styles.cell,
        "& caption": styles.caption
      };
    }, [styles, native]);
    return /* @__PURE__ */ jsx(ClassNamesProvider, { value: classNames, children: /* @__PURE__ */ jsx(StylesProvider, { value: styles, children: /* @__PURE__ */ jsx(
      chakra.table,
      {
        ref,
        ...rootProps,
        css: [rootCss, props.css],
        className: cx(classNames?.["root"], props.className)
      }
    ) }) });
  }
);
const TableRootPropsProvider = PropsProvider;
const TableRow = withContext(
  "tr",
  "row"
);
const TableScrollArea = chakra("div", {
  base: {
    display: "block",
    whiteSpace: "nowrap",
    WebkitOverflowScrolling: "touch",
    overflow: "auto",
    maxWidth: "100%"
  }
});
const TableHeader = withContext("thead", "header");
const TableFooter = withContext("tfoot", "footer");
const TableColumnHeader = withContext("th", "columnHeader");
const TableCell = withContext(
  "td",
  "cell"
);
const TableCaption = withContext("caption", "caption", {
  defaultProps: {
    captionSide: "bottom"
  }
});
const TableBody = withContext(
  "tbody",
  "body"
);
const TableColumnGroup = withContext("colgroup");
const TableColumn = withContext(
  "col"
);

export { TableBody, TableCaption, TableCell, TableColumn, TableColumnGroup, TableColumnHeader, TableFooter, TableHeader, TableRoot, TableRootPropsProvider, TableRow, TableScrollArea, useTableStyles };
