"use strict";
"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var toast = require('@ark-ui/react/toast');
var React = require('react');
var createSlotRecipeContext = require('../../styled-system/create-slot-recipe-context.cjs');
var factory = require('../../styled-system/factory.cjs');
var icons = require('../icons.cjs');

const {
  withProvider,
  withContext,
  useStyles: useToastStyles
} = createSlotRecipeContext.createSlotRecipeContext({ key: "toast" });
const Toaster = factory.chakra(
  toast.Toaster,
  {},
  { forwardAsChild: true }
);
const ToastRoot = withProvider(
  toast.Toast.Root,
  "root",
  { forwardAsChild: true }
);
const ToastCloseTrigger = withContext(toast.Toast.CloseTrigger, "closeTrigger", {
  forwardAsChild: true,
  defaultProps: {
    children: /* @__PURE__ */ jsxRuntime.jsx(icons.CloseIcon, {})
  }
});
const ToastTitle = withContext(
  toast.Toast.Title,
  "title",
  { forwardAsChild: true }
);
const ToastDescription = withContext(toast.Toast.Description, "description", { forwardAsChild: true });
const ToastActionTrigger = withContext(toast.Toast.ActionTrigger, "actionTrigger", { forwardAsChild: true });
const iconMap = {
  warning: icons.WarningIcon,
  success: icons.CheckCircleIcon,
  error: icons.WarningIcon
};
const ToastIndicator = React.forwardRef(
  function ToastIndicator2(props, ref) {
    const api = toast.useToastContext();
    const styles = useToastStyles();
    const Component = iconMap[api.type];
    if (!Component) return null;
    return /* @__PURE__ */ jsxRuntime.jsx(Component, { ref, ...props, css: [styles.indicator, props.css] });
  }
);

Object.defineProperty(exports, "createToaster", {
  enumerable: true,
  get: function () { return toast.createToaster; }
});
exports.ToastActionTrigger = ToastActionTrigger;
exports.ToastCloseTrigger = ToastCloseTrigger;
exports.ToastDescription = ToastDescription;
exports.ToastIndicator = ToastIndicator;
exports.ToastRoot = ToastRoot;
exports.ToastTitle = ToastTitle;
exports.Toaster = Toaster;
exports.useToastStyles = useToastStyles;
