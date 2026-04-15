"use strict";
"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var createContext = require('../../create-context.cjs');
var createSlotRecipeContext = require('../../styled-system/create-slot-recipe-context.cjs');
var factory = require('../../styled-system/factory.cjs');
var icons = require('../icons.cjs');

const [AlertStatusProvider, useAlertStatusContext] = createContext.createContext({
  name: "AlertStatusContext",
  hookName: "useAlertStatusContext",
  providerName: "<Alert />"
});
const {
  withProvider,
  withContext,
  useStyles: useAlertStyles,
  PropsProvider
} = createSlotRecipeContext.createSlotRecipeContext({ key: "alert" });
const AlertRoot = withProvider(
  "div",
  "root",
  {
    forwardAsChild: true,
    wrapElement(element, props) {
      return (
        // @ts-ignore fix later
        /* @__PURE__ */ jsxRuntime.jsx(AlertStatusProvider, { value: { status: props.status || "info" }, children: element })
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
  info: icons.InfoIcon,
  warning: icons.WarningIcon,
  success: icons.CheckCircleIcon,
  error: icons.WarningIcon,
  neutral: icons.InfoIcon
};
const AlertIndicator = React.forwardRef(
  function AlertIndicator2(props, ref) {
    const api = useAlertStatusContext();
    const styles = useAlertStyles();
    const Icon = typeof api.status === "string" ? iconMap[api.status] : React.Fragment;
    const { children = /* @__PURE__ */ jsxRuntime.jsx(Icon, {}), ...rest } = props;
    return /* @__PURE__ */ jsxRuntime.jsx(factory.chakra.span, { ref, ...rest, css: [styles.indicator, props.css], children });
  }
);

exports.AlertContent = AlertContent;
exports.AlertDescription = AlertDescription;
exports.AlertIndicator = AlertIndicator;
exports.AlertPropsProvider = AlertPropsProvider;
exports.AlertRoot = AlertRoot;
exports.AlertStatusProvider = AlertStatusProvider;
exports.AlertTitle = AlertTitle;
exports.useAlertStatusContext = useAlertStatusContext;
exports.useAlertStyles = useAlertStyles;
