'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('./create-context.cjs');
const createSplitProps = require('./create-split-props.cjs');

const [RenderStrategyPropsProvider, useRenderStrategyPropsContext] = createContext.createContext({
  name: "RenderStrategyContext",
  hookName: "useRenderStrategyContext",
  providerName: "<RenderStrategyPropsProvider />"
});
const splitRenderStrategyProps = (props) => createSplitProps.createSplitProps()(props, ["lazyMount", "unmountOnExit"]);

exports.RenderStrategyPropsProvider = RenderStrategyPropsProvider;
exports.splitRenderStrategyProps = splitRenderStrategyProps;
exports.useRenderStrategyPropsContext = useRenderStrategyPropsContext;
