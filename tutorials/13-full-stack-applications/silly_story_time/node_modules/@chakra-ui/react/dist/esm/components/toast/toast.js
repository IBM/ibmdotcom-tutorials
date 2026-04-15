"use strict";
"use client";
import { jsx } from 'react/jsx-runtime';
import { Toaster as Toaster$1, Toast, useToastContext } from '@ark-ui/react/toast';
export { createToaster } from '@ark-ui/react/toast';
import { forwardRef } from 'react';
import { createSlotRecipeContext } from '../../styled-system/create-slot-recipe-context.js';
import { chakra } from '../../styled-system/factory.js';
import { CloseIcon, WarningIcon, CheckCircleIcon } from '../icons.js';

const {
  withProvider,
  withContext,
  useStyles: useToastStyles
} = createSlotRecipeContext({ key: "toast" });
const Toaster = chakra(
  Toaster$1,
  {},
  { forwardAsChild: true }
);
const ToastRoot = withProvider(
  Toast.Root,
  "root",
  { forwardAsChild: true }
);
const ToastCloseTrigger = withContext(Toast.CloseTrigger, "closeTrigger", {
  forwardAsChild: true,
  defaultProps: {
    children: /* @__PURE__ */ jsx(CloseIcon, {})
  }
});
const ToastTitle = withContext(
  Toast.Title,
  "title",
  { forwardAsChild: true }
);
const ToastDescription = withContext(Toast.Description, "description", { forwardAsChild: true });
const ToastActionTrigger = withContext(Toast.ActionTrigger, "actionTrigger", { forwardAsChild: true });
const iconMap = {
  warning: WarningIcon,
  success: CheckCircleIcon,
  error: WarningIcon
};
const ToastIndicator = forwardRef(
  function ToastIndicator2(props, ref) {
    const api = useToastContext();
    const styles = useToastStyles();
    const Component = iconMap[api.type];
    if (!Component) return null;
    return /* @__PURE__ */ jsx(Component, { ref, ...props, css: [styles.indicator, props.css] });
  }
);

export { ToastActionTrigger, ToastCloseTrigger, ToastDescription, ToastIndicator, ToastRoot, ToastTitle, Toaster, useToastStyles };
