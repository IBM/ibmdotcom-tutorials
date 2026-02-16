'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const domQuery = require('@zag-js/dom-query');
const react = require('react');
const runIfFn = require('../../utils/run-if-fn.cjs');
const useEnvironmentContext = require('./use-environment-context.cjs');

const EnvironmentProvider = (props) => {
  const { value, children } = props;
  const [spanRef, setSpanRef] = react.useState();
  const getRootNode = react.useMemo(() => {
    return () => runIfFn.runIfFn(value) ?? spanRef?.ownerDocument ?? document;
  }, [value, spanRef]);
  const environment = react.useMemo(
    () => ({
      getRootNode,
      getWindow: () => domQuery.getWindow(getRootNode()),
      getDocument: () => domQuery.getDocument(getRootNode())
    }),
    [getRootNode]
  );
  return /* @__PURE__ */ jsxRuntime.jsxs(useEnvironmentContext.EnvironmentContextProvider, { value: environment, children: [
    children,
    !value && /* @__PURE__ */ jsxRuntime.jsx("span", { hidden: true, ref: setSpanRef })
  ] });
};

exports.EnvironmentProvider = EnvironmentProvider;
