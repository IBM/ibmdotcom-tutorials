'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { splitRenderStrategyProps, RenderStrategyPropsProvider } from '../../utils/render-strategy.js';
import { ark } from '../factory.js';
import { useAccordion } from './use-accordion.js';
import { AccordionProvider } from './use-accordion-context.js';

const AccordionRoot = forwardRef((props, ref) => {
  const [renderStrategyProps, accordionProps] = splitRenderStrategyProps(props);
  const [useAccordionProps, localProps] = createSplitProps()(accordionProps, [
    "collapsible",
    "defaultValue",
    "disabled",
    "id",
    "ids",
    "multiple",
    "onFocusChange",
    "onValueChange",
    "orientation",
    "value"
  ]);
  const accordion = useAccordion(useAccordionProps);
  const mergedProps = mergeProps(accordion.getRootProps(), localProps);
  return /* @__PURE__ */ jsx(AccordionProvider, { value: accordion, children: /* @__PURE__ */ jsx(RenderStrategyPropsProvider, { value: renderStrategyProps, children: /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref }) }) });
});
AccordionRoot.displayName = "AccordionRoot";

export { AccordionRoot };
