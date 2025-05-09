import { createAnatomy } from '@zag-js/anatomy';
import { dataAttr } from '@zag-js/dom-query';
import { createMachine } from '@zag-js/core';
import { createProps } from '@zag-js/types';
import { createSplitProps } from '@zag-js/utils';

// src/toggle.anatomy.ts
var anatomy = createAnatomy("toggle", ["root", "indicator"]);
var parts = anatomy.build();
function connect(service, normalize) {
  const { context, prop, send } = service;
  const pressed = context.get("pressed");
  return {
    pressed,
    disabled: !!prop("disabled"),
    setPressed(value) {
      send({ type: "PRESS.SET", value });
    },
    getRootProps() {
      return normalize.element({
        type: "button",
        ...parts.root.attrs,
        disabled: prop("disabled"),
        "aria-pressed": pressed,
        "data-state": pressed ? "on" : "off",
        "data-pressed": dataAttr(pressed),
        "data-disabled": dataAttr(prop("disabled")),
        onClick(event) {
          if (event.defaultPrevented) return;
          if (prop("disabled")) return;
          send({ type: "PRESS.TOGGLE" });
        }
      });
    },
    getIndicatorProps() {
      return normalize.element({
        ...parts.indicator.attrs,
        "data-disabled": dataAttr(prop("disabled")),
        "data-pressed": dataAttr(pressed),
        "data-state": pressed ? "on" : "off"
      });
    }
  };
}
var machine = createMachine({
  props({ props: props2 }) {
    return {
      defaultPressed: false,
      ...props2
    };
  },
  context({ prop, bindable }) {
    return {
      pressed: bindable(() => ({
        value: prop("pressed"),
        defaultValue: prop("defaultPressed"),
        onChange(value) {
          prop("onPressedChange")?.(value);
        }
      }))
    };
  },
  initialState() {
    return "idle";
  },
  on: {
    "PRESS.TOGGLE": {
      actions: ["togglePressed"]
    },
    "PRESS.SET": {
      actions: ["setPressed"]
    }
  },
  states: {
    idle: {}
  },
  implementations: {
    actions: {
      togglePressed({ context }) {
        context.set("pressed", !context.get("pressed"));
      },
      setPressed({ context, event }) {
        context.set("pressed", event.value);
      }
    }
  }
});
var props = createProps()(["defaultPressed", "pressed", "onPressedChange", "disabled"]);
var splitProps = createSplitProps(props);

export { anatomy, connect, machine, props, splitProps };
