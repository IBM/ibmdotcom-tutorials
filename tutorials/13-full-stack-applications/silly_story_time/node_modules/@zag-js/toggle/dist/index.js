'use strict';

var anatomy$1 = require('@zag-js/anatomy');
var domQuery = require('@zag-js/dom-query');
var core = require('@zag-js/core');
var types = require('@zag-js/types');
var utils = require('@zag-js/utils');

// src/toggle.anatomy.ts
var anatomy = anatomy$1.createAnatomy("toggle", ["root", "indicator"]);
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
        "data-pressed": domQuery.dataAttr(pressed),
        "data-disabled": domQuery.dataAttr(prop("disabled")),
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
        "data-disabled": domQuery.dataAttr(prop("disabled")),
        "data-pressed": domQuery.dataAttr(pressed),
        "data-state": pressed ? "on" : "off"
      });
    }
  };
}
var machine = core.createMachine({
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
var props = types.createProps()(["defaultPressed", "pressed", "onPressedChange", "disabled"]);
var splitProps = utils.createSplitProps(props);

exports.anatomy = anatomy;
exports.connect = connect;
exports.machine = machine;
exports.props = props;
exports.splitProps = splitProps;
