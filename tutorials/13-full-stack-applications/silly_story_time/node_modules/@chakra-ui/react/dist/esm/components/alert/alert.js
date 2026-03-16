"use strict";
"use client";
import { jsx } from 'react/jsx-runtime';
import { forwardRef, Fragment } from 'react';
import { createContext } from '../../create-context.js';
import { createSlotRecipeContext } from '../../styled-system/create-slot-recipe-context.js';
import { chakra } from '../../styled-system/factory.js';
import { InfoIcon, WarningIcon, CheckCircleIcon } from '../icons.js';

const [AlertStatusProvider, useAlertStatusContext] = createContext({
  name: "AlertStatusContext",
  hookName: "useAlertStatusContext",
  providerName: "<Alert />"
});
const {
  withProvider,
  withContext,
  useStyles: useAlertStyles,
  PropsProvider
} = createSlotRecipeContext({ key: "alert" });
const AlertRoot = withProvider(
  "div",
  "root",
  {
    forwardAsChild: true,
    wrapElement(element, props) {
      return (
        // @ts-ignore fix later
        /* @__PURE__ */ jsx(AlertStatusProvider, { value: { status: props.status || "info" }, children: element })
      );
    }
  }
);
const AlertPropsProvider = PropsProvider;
const AlertTitle = withContext(
  "div",
  "title"
);
const AlertDescription = withContext("div", "description");
const AlertContent = withContext(
  "div",
  "content"
);
const iconMap = {
  info: InfoIcon,
  warning: WarningIcon,
  success: CheckCircleIcon,
  error: WarningIcon,
  neutral: InfoIcon
};
const AlertIndicator = forwardRef(
  function AlertIndicator2(props, ref) {
    const api = useAlertStatusContext();
    const styles = useAlertStyles();
    const Icon = typeof api.status === "string" ? iconMap[api.status] : Fragment;
    const { children = /* @__PURE__ */ jsx(Icon, {}), ...rest } = props;
    return /* @__PURE__ */ jsx(chakra.span, { ref, ...rest, css: [styles.indicator, props.css], children });
  }
);

export { AlertContent, AlertDescription, AlertIndicator, AlertPropsProvider, AlertRoot, AlertStatusProvider, AlertTitle, useAlertStatusContext, useAlertStyles };
