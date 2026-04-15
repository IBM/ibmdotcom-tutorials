"use strict";
"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var useRecipe = require('../../styled-system/use-recipe.cjs');
var button = require('./button.cjs');
var group = require('../group/group.cjs');

const ButtonGroup = React.forwardRef(
  function ButtonGroup2(props, ref) {
    const recipe = useRecipe.useRecipe({ key: "button" });
    const [variantProps, otherProps] = React.useMemo(
      () => recipe.splitVariantProps(props),
      [props, recipe]
    );
    return /* @__PURE__ */ jsxRuntime.jsx(button.ButtonPropsProvider, { value: variantProps, children: /* @__PURE__ */ jsxRuntime.jsx(group.Group, { ref, ...otherProps }) });
  }
);

exports.ButtonGroup = ButtonGroup;
