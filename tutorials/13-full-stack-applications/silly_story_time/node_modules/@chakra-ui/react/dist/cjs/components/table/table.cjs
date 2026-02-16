"use strict";
"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var cx = require('../../utils/cx.cjs');
var createSlotRecipeContext = require('../../styled-system/create-slot-recipe-context.cjs');
var factory = require('../../styled-system/factory.cjs');

const {
  StylesProvider,
  ClassNamesProvider,
  useRecipeResult,
  withContext,
  useStyles: useTableStyles,
  PropsProvider
} = createSlotRecipeContext.createSlotRecipeContext({ key: "table" });
const TableRoot = React.forwardRef(
  function TableRoot2({ native, ...props }, ref) {
    const { styles, props: rootProps, classNames } = useRecipeResult(props);
    const rootCss = React.useMemo(() => {
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
    return /* @__PURE__ */ jsxRuntime.jsx(ClassNamesProvider, { value: classNames, children: /* @__PURE__ */ jsxRuntime.jsx(StylesProvider, { value: styles, children: /* @__PURE__ */ jsxRuntime.jsx(
      factory.chakra.table,
      {
        ref,
        ...rootProps,
        css: [rootCss, props.css],
        className: cx.cx(classNames?.["root"], props.className)
      }
    ) }) });
  }
);
const TableRootPropsProvider = PropsProvider;
const TableRow = withContext(
  "tr",
  "row"
);
const TableScrollArea = factory.chakra("div", {
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

exports.TableBody = TableBody;
exports.TableCaption = TableCaption;
exports.TableCell = TableCell;
exports.TableColumn = TableColumn;
exports.TableColumnGroup = TableColumnGroup;
exports.TableColumnHeader = TableColumnHeader;
exports.TableFooter = TableFooter;
exports.TableHeader = TableHeader;
exports.TableRoot = TableRoot;
exports.TableRootPropsProvider = TableRootPropsProvider;
exports.TableRow = TableRow;
exports.TableScrollArea = TableScrollArea;
exports.useTableStyles = useTableStyles;
