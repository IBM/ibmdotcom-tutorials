'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const domQuery = require('@zag-js/dom-query');
const react = require('react');
const reactDom = require('react-dom');
const useEnvironmentContext = require('../../providers/environment/use-environment-context.cjs');

const Portal = (props) => {
  const { children, disabled } = props;
  const [container, setContainer] = react.useState(props.container?.current);
  const isServer = react.useSyncExternalStore(
    subscribe,
    () => false,
    () => true
  );
  const { getRootNode } = useEnvironmentContext.useEnvironmentContext();
  react.useEffect(() => {
    setContainer(() => props.container?.current);
  }, [props.container]);
  if (isServer || disabled) return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children });
  const mountNode = container ?? getPortalNode(getRootNode);
  return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: react.Children.map(children, (child) => reactDom.createPortal(child, mountNode)) });
};
const getPortalNode = (cb) => {
  const node = cb?.();
  const rootNode = node.getRootNode();
  if (domQuery.isShadowRoot(rootNode)) return rootNode;
  return domQuery.getDocument(node).body;
};
const subscribe = () => () => {
};

exports.Portal = Portal;
