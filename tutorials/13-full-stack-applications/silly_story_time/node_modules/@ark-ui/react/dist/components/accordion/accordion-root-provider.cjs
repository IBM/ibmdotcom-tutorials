'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const renderStrategy = require('../../utils/render-strategy.cjs');
const factory = require('../factory.cjs');
const useAccordionContext = require('./use-accordion-context.cjs');

const AccordionRootProvider = react.forwardRef((props, ref) => {
  const [renderStrategyProps, accordionProps] = renderStrategy.splitRenderStrategyProps(props);
  const [{ value: accordion }, localProps] = createSplitProps.createSplitProps()(accordionProps, ["value"]);
  const mergedProps = react$1.mergeProps(accordion.getRootProps(), localProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useAccordionContext.AccordionProvider, { value: accordion, children: /* @__PURE__ */ jsxRuntime.jsx(renderStrategy.RenderStrategyPropsProvider, { value: renderStrategyProps, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) }) });
});
AccordionRootProvider.displayName = "AccordionRootProvider";

exports.AccordionRootProvider = AccordionRootProvider;
