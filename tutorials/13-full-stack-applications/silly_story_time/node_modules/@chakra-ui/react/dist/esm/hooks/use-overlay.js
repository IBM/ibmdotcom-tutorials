"use strict";
import { jsx, Fragment } from 'react/jsx-runtime';
import * as React from 'react';
import { omit } from '../utils/omit.js';

const shallowEqual = (a, b) => {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    const aKeys = Object.keys(a[i]);
    const bKeys = Object.keys(b[i]);
    if (aKeys.length !== bKeys.length) return false;
    for (const key of aKeys) {
      if (!Object.is(a[i][key], b[i][key])) return false;
    }
  }
  return true;
};
function createOverlay(Component, options) {
  const map = /* @__PURE__ */ new Map();
  const exitPromises = /* @__PURE__ */ new Map();
  const subscribers = /* @__PURE__ */ new Set();
  const subscribe = (callback) => {
    subscribers.add(callback);
    return () => subscribers.delete(callback);
  };
  const publish = () => {
    for (const callback of subscribers) {
      callback(getSnapshot());
    }
  };
  let lastSnapshot = [];
  const getSnapshot = () => {
    const nextSnapshot = Array.from(map.values());
    if (shallowEqual(lastSnapshot, nextSnapshot)) return lastSnapshot;
    lastSnapshot = nextSnapshot;
    return lastSnapshot;
  };
  const waitForExit = (id) => {
    return exitPromises.get(id) || Promise.resolve();
  };
  const open = (id, props) => {
    const overlayProps = {
      ...options?.props,
      ...props,
      open: true,
      onOpenChange: (e) => {
        if (!e.open) close(id);
      },
      onExitComplete: () => {
        const overlay = get(id);
        if (overlay.setExitComplete) {
          overlay.setExitComplete();
          overlay.setExitComplete = void 0;
        }
        remove(id);
      },
      setReturnValue: void 0,
      setExitComplete: void 0
    };
    map.set(id, overlayProps);
    const prom = new Promise((resolve) => {
      map.set(id, {
        ...overlayProps,
        setReturnValue: resolve
      });
    });
    publish();
    return prom;
  };
  const close = (id, value) => {
    const prevProps = get(id);
    map.set(id, { ...prevProps, open: false });
    if (prevProps.setReturnValue) {
      prevProps.setReturnValue(value);
      prevProps.setReturnValue = void 0;
    }
    publish();
    const exitPromise = new Promise((resolve) => {
      const overlay = get(id);
      map.set(id, {
        ...overlay,
        setExitComplete: resolve
      });
    });
    exitPromises.set(id, exitPromise);
    return exitPromise;
  };
  const remove = (id) => {
    map.delete(id);
    exitPromises.delete(id);
    publish();
  };
  const update = (id, props) => {
    const prevProps = get(id);
    map.set(id, {
      ...prevProps,
      ...omit(props, ["open", "onOpenChange", "onExitComplete"])
    });
    publish();
  };
  const get = (id) => {
    const overlay = map.get(id);
    if (!overlay) {
      throw new Error(`[chakra-ui] Overlay with id ${id} not found`);
    }
    return overlay;
  };
  const removeAll = () => {
    map.clear();
    exitPromises.clear();
    publish();
  };
  function Viewport() {
    const overlays = React.useSyncExternalStore(
      subscribe,
      getSnapshot,
      getSnapshot
    );
    return /* @__PURE__ */ jsx(Fragment, { children: overlays.map((props, index) => (
      // @ts-expect-error - TODO: fix this
      /* @__PURE__ */ jsx(Component, { ...props }, index)
    )) });
  }
  return {
    Viewport,
    open,
    close,
    update,
    remove,
    removeAll,
    get,
    getSnapshot,
    waitForExit
  };
}

export { createOverlay };
