"use strict";
"use client";
import { jsxs, jsx } from 'react/jsx-runtime';
import { Global } from '@emotion/react';
import { createContext } from '../create-context.js';

const [ChakraContextProvider, useChakraContext] = createContext({
  name: "ChakraContext",
  strict: true,
  providerName: "<ChakraProvider />"
});
function ChakraProvider(props) {
  const { value: sys, children } = props;
  return /* @__PURE__ */ jsxs(ChakraContextProvider, { value: sys, children: [
    !sys._config.disableLayers && /* @__PURE__ */ jsx(Global, { styles: sys.layers.atRule }),
    /* @__PURE__ */ jsx(Global, { styles: sys._global }),
    children
  ] });
}

export { ChakraProvider, useChakraContext };
