'use client';
import { createContext } from './create-context.js';
import { createSplitProps } from './create-split-props.js';

const [RenderStrategyPropsProvider, useRenderStrategyPropsContext] = createContext({
  name: "RenderStrategyContext",
  hookName: "useRenderStrategyContext",
  providerName: "<RenderStrategyPropsProvider />"
});
const splitRenderStrategyProps = (props) => createSplitProps()(props, ["lazyMount", "unmountOnExit"]);

export { RenderStrategyPropsProvider, splitRenderStrategyProps, useRenderStrategyPropsContext };
