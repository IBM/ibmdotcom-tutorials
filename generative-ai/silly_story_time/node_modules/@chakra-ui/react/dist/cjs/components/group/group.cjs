"use strict";
"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var attr = require('../../utils/attr.cjs');
var cx = require('../../utils/cx.cjs');
var factory = require('../../styled-system/factory.cjs');

const StyledGroup = factory.chakra("div", {
  base: {
    display: "inline-flex",
    gap: "0.5rem",
    isolation: "isolate",
    position: "relative",
    "& [data-group-item]": {
      _focusVisible: {
        zIndex: 1
      }
    }
  },
  variants: {
    orientation: {
      horizontal: {
        flexDirection: "row"
      },
      vertical: {
        flexDirection: "column"
      }
    },
    attached: {
      true: {
        gap: "0!"
      }
    },
    grow: {
      true: {
        display: "flex",
        "& > *": {
          flex: 1
        }
      }
    },
    stacking: {
      "first-on-top": {
        "& > [data-group-item]": {
          zIndex: "calc(var(--group-count) - var(--group-index))"
        }
      },
      "last-on-top": {
        "& > [data-group-item]": {
          zIndex: "var(--group-index)"
        }
      }
    }
  },
  compoundVariants: [
    {
      orientation: "horizontal",
      attached: true,
      css: {
        "& > *[data-first]": {
          borderEndRadius: "0!",
          marginEnd: "-1px"
        },
        "& > *[data-between]": {
          borderRadius: "0!",
          marginEnd: "-1px"
        },
        "& > *[data-last]": {
          borderStartRadius: "0!"
        }
      }
    },
    {
      orientation: "vertical",
      attached: true,
      css: {
        "& > *[data-first]": {
          borderBottomRadius: "0!",
          marginBottom: "-1px"
        },
        "& > *[data-between]": {
          borderRadius: "0!",
          marginBottom: "-1px"
        },
        "& > *[data-last]": {
          borderTopRadius: "0!"
        }
      }
    }
  ],
  defaultVariants: {
    orientation: "horizontal"
  }
});
const Group = React.memo(
  React.forwardRef(function Group2(props, ref) {
    const {
      align = "center",
      justify = "flex-start",
      children,
      wrap,
      skip,
      ...rest
    } = props;
    const _children = React.useMemo(() => {
      let childArray = React.Children.toArray(children).filter(React.isValidElement);
      if (childArray.length === 1) return childArray;
      const validChildArray = childArray.filter((child) => !skip?.(child));
      const validChildCount = validChildArray.length;
      if (validChildArray.length === 1) return childArray;
      return childArray.map((child) => {
        const childProps = child.props;
        if (skip?.(child)) return child;
        const index = validChildArray.indexOf(child);
        return React.cloneElement(child, {
          ...childProps,
          "data-group-item": "",
          "data-first": attr.dataAttr(index === 0),
          "data-last": attr.dataAttr(index === validChildCount - 1),
          "data-between": attr.dataAttr(index > 0 && index < validChildCount - 1),
          style: {
            "--group-count": validChildCount,
            "--group-index": index,
            ...childProps?.style ?? {}
          }
        });
      });
    }, [children, skip]);
    return /* @__PURE__ */ jsxRuntime.jsx(
      StyledGroup,
      {
        ref,
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap,
        ...rest,
        className: cx.cx("chakra-group", props.className),
        children: _children
      }
    );
  })
);

exports.Group = Group;
