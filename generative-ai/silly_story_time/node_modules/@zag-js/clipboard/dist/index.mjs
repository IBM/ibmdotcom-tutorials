import { createAnatomy } from '@zag-js/anatomy';
import { setElementValue, getWindow, dataAttr } from '@zag-js/dom-query';
import { createMachine } from '@zag-js/core';
import { setRafTimeout, createSplitProps } from '@zag-js/utils';
import { createProps } from '@zag-js/types';

// src/clipboard.anatomy.ts
var anatomy = createAnatomy("clipboard").parts("root", "control", "trigger", "indicator", "input", "label");
var parts = anatomy.build();
var getRootId = (ctx) => ctx.ids?.root ?? `clip:${ctx.id}`;
var getInputId = (ctx) => ctx.ids?.input ?? `clip:${ctx.id}:input`;
var getLabelId = (ctx) => ctx.ids?.label ?? `clip:${ctx.id}:label`;
var getInputEl = (ctx) => ctx.getById(getInputId(ctx));
var writeToClipboard = (ctx, value) => copyText(ctx.getDoc(), value);
function createNode(doc, text) {
  const node = doc.createElement("pre");
  Object.assign(node.style, {
    width: "1px",
    height: "1px",
    position: "fixed",
    top: "5px"
  });
  node.textContent = text;
  return node;
}
function copyNode(node) {
  const win = getWindow(node);
  const selection = win.getSelection();
  if (selection == null) {
    return Promise.reject(new Error());
  }
  selection.removeAllRanges();
  const doc = node.ownerDocument;
  const range = doc.createRange();
  range.selectNodeContents(node);
  selection.addRange(range);
  doc.execCommand("copy");
  selection.removeAllRanges();
  return Promise.resolve();
}
function copyText(doc, text) {
  const win = doc.defaultView || window;
  if (win.navigator.clipboard?.writeText !== void 0) {
    return win.navigator.clipboard.writeText(text);
  }
  if (!doc.body) {
    return Promise.reject(new Error());
  }
  const node = createNode(doc, text);
  doc.body.appendChild(node);
  copyNode(node);
  doc.body.removeChild(node);
  return Promise.resolve();
}

// src/clipboard.connect.ts
function connect(service, normalize) {
  const { state, send, context, scope } = service;
  const copied = state.matches("copied");
  return {
    copied,
    value: context.get("value"),
    setValue(value) {
      send({ type: "VALUE.SET", value });
    },
    copy() {
      send({ type: "COPY" });
    },
    getRootProps() {
      return normalize.element({
        ...parts.root.attrs,
        "data-copied": dataAttr(copied),
        id: getRootId(scope)
      });
    },
    getLabelProps() {
      return normalize.label({
        ...parts.label.attrs,
        htmlFor: getInputId(scope),
        "data-copied": dataAttr(copied),
        id: getLabelId(scope)
      });
    },
    getControlProps() {
      return normalize.element({
        ...parts.control.attrs,
        "data-copied": dataAttr(copied)
      });
    },
    getInputProps() {
      return normalize.input({
        ...parts.input.attrs,
        defaultValue: context.get("value"),
        "data-copied": dataAttr(copied),
        readOnly: true,
        "data-readonly": "true",
        id: getInputId(scope),
        onFocus(event) {
          event.currentTarget.select();
        },
        onCopy() {
          send({ type: "INPUT.COPY" });
        }
      });
    },
    getTriggerProps() {
      return normalize.button({
        ...parts.trigger.attrs,
        type: "button",
        "aria-label": copied ? "Copied to clipboard" : "Copy to clipboard",
        "data-copied": dataAttr(copied),
        onClick() {
          send({ type: "COPY" });
        }
      });
    },
    getIndicatorProps(props2) {
      return normalize.element({
        ...parts.indicator.attrs,
        hidden: props2.copied !== copied
      });
    }
  };
}
var machine = createMachine({
  props({ props: props2 }) {
    return {
      timeout: 3e3,
      defaultValue: "",
      ...props2
    };
  },
  initialState() {
    return "idle";
  },
  context({ prop, bindable }) {
    return {
      value: bindable(() => ({
        defaultValue: prop("defaultValue"),
        value: prop("value"),
        onChange(value) {
          prop("onValueChange")?.({ value });
        }
      }))
    };
  },
  watch({ track, context, action }) {
    track([() => context.get("value")], () => {
      action(["syncInputElement"]);
    });
  },
  on: {
    "VALUE.SET": {
      actions: ["setValue"]
    },
    COPY: {
      target: "copied",
      actions: ["copyToClipboard", "invokeOnCopy"]
    }
  },
  states: {
    idle: {
      on: {
        "INPUT.COPY": {
          target: "copied",
          actions: ["invokeOnCopy"]
        }
      }
    },
    copied: {
      effects: ["waitForTimeout"],
      on: {
        "COPY.DONE": {
          target: "idle"
        },
        COPY: {
          target: "copied",
          actions: ["copyToClipboard", "invokeOnCopy"]
        },
        "INPUT.COPY": {
          actions: ["invokeOnCopy"]
        }
      }
    }
  },
  implementations: {
    effects: {
      waitForTimeout({ prop, send }) {
        return setRafTimeout(() => {
          send({ type: "COPY.DONE" });
        }, prop("timeout"));
      }
    },
    actions: {
      setValue({ context, event }) {
        context.set("value", event.value);
      },
      copyToClipboard({ context, scope }) {
        writeToClipboard(scope, context.get("value"));
      },
      invokeOnCopy({ prop }) {
        prop("onStatusChange")?.({ copied: true });
      },
      syncInputElement({ context, scope }) {
        const inputEl = getInputEl(scope);
        if (!inputEl) return;
        setElementValue(inputEl, context.get("value"));
      }
    }
  }
});
var props = createProps()([
  "getRootNode",
  "id",
  "ids",
  "value",
  "defaultValue",
  "timeout",
  "onStatusChange",
  "onValueChange"
]);
var contextProps = createSplitProps(props);
var indicatorProps = createProps()(["copied"]);
var splitIndicatorProps = createSplitProps(indicatorProps);

export { anatomy, connect, contextProps, indicatorProps, machine, props, splitIndicatorProps };
