'use client';
import { jsx, Fragment } from 'react/jsx-runtime';
import { isShadowRoot, getDocument } from '@zag-js/dom-query';
import { useState, useSyncExternalStore, useEffect, Children } from 'react';
import { createPortal } from 'react-dom';
import { useEnvironmentContext } from '../../providers/environment/use-environment-context.js';

const Portal = (props) => {
  const { children, disabled } = props;
  const [container, setContainer] = useState(props.container?.current);
  const isServer = useSyncExternalStore(
    subscribe,
    () => false,
    () => true
  );
  const { getRootNode } = useEnvironmentContext();
  useEffect(() => {
    setContainer(() => props.container?.current);
  }, [props.container]);
  if (isServer || disabled) return /* @__PURE__ */ jsx(Fragment, { children });
  const mountNode = container ?? getPortalNode(getRootNode);
  return /* @__PURE__ */ jsx(Fragment, { children: Children.map(children, (child) => createPortal(child, mountNode)) });
};
const getPortalNode = (cb) => {
  const node = cb?.();
  const rootNode = node.getRootNode();
  if (isShadowRoot(rootNode)) return rootNode;
  return getDocument(node).body;
};
const subscribe = () => () => {
};

export { Portal };
