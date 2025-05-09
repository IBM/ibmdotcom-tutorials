"use strict";
"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('@emotion/react');
var createContext = require('../create-context.cjs');

const [ChakraContextProvider, useChakraContext] = createContext.createContext({
  name: "ChakraContext",
  strict: true,
  providerName: "<ChakraProvider />"
});
function ChakraProvider(props) {
  const { value: sys, children } = props;
  return /* @__PURE__ */ jsxRuntime.jsxs(ChakraContextProvider, { value: sys, children: [
    !sys._config.disableLayers && /* @__PURE__ */ jsxRuntime.jsx(react.Global, { styles: sys.layers.atRule }),
    /* @__PURE__ */ jsxRuntime.jsx(react.Global, { styles: sys._global }),
    children
  ] });
}

exports.ChakraProvider = ChakraProvider;
exports.useChakraContext = useChakraContext;
