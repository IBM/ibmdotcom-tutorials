'use strict';

var anatomy$1 = require('@zag-js/anatomy');
var domQuery = require('@zag-js/dom-query');
var utils = require('@zag-js/utils');
var core = require('@zag-js/core');
var types = require('@zag-js/types');

// src/accordion.anatomy.ts
var anatomy = anatomy$1.createAnatomy("accordion").parts("root", "item", "itemTrigger", "itemContent", "itemIndicator");
var parts = anatomy.build();
var getRootId = (ctx) => ctx.ids?.root ?? `accordion:${ctx.id}`;
var getItemId = (ctx, value) => ctx.ids?.item?.(value) ?? `accordion:${ctx.id}:item:${value}`;
var getItemContentId = (ctx, value) => ctx.ids?.itemContent?.(value) ?? `accordion:${ctx.id}:content:${value}`;
var getItemTriggerId = (ctx, value) => ctx.ids?.itemTrigger?.(value) ?? `accordion:${ctx.id}:trigger:${value}`;
var getRootEl = (ctx) => ctx.getById(getRootId(ctx));
var getTriggerEls = (ctx) => {
  const ownerId = CSS.escape(getRootId(ctx));
  const selector = `[aria-controls][data-ownedby='${ownerId}']:not([disabled])`;
  return domQuery.queryAll(getRootEl(ctx), selector);
};
var getFirstTriggerEl = (ctx) => utils.first(getTriggerEls(ctx));
var getLastTriggerEl = (ctx) => utils.last(getTriggerEls(ctx));
var getNextTriggerEl = (ctx, id) => domQuery.nextById(getTriggerEls(ctx), getItemTriggerId(ctx, id));
var getPrevTriggerEl = (ctx, id) => domQuery.prevById(getTriggerEls(ctx), getItemTriggerId(ctx, id));

// src/accordion.connect.ts
function connect(service, normalize) {
  const { send, context, prop, scope, computed } = service;
  const focusedValue = context.get("focusedValue");
  const value = context.get("value");
  const multiple = prop("multiple");
  function setValue(value2) {
    let nextValue = value2;
    if (!multiple && nextValue.length > 1) {
      nextValue = [nextValue[0]];
    }
    send({ type: "VALUE.SET", value: nextValue });
  }
  function getItemState(props2) {
    return {
      expanded: value.includes(props2.value),
      focused: focusedValue === props2.value,
      disabled: Boolean(props2.disabled ?? prop("disabled"))
    };
  }
  return {
    focusedValue,
    value,
    setValue,
    getItemState,
    getRootProps() {
      return normalize.element({
        ...parts.root.attrs,
        dir: prop("dir"),
        id: getRootId(scope),
        "data-orientation": prop("orientation")
      });
    },
    getItemProps(props2) {
      const itemState = getItemState(props2);
      return normalize.element({
        ...parts.item.attrs,
        dir: prop("dir"),
        id: getItemId(scope, props2.value),
        "data-state": itemState.expanded ? "open" : "closed",
        "data-focus": domQuery.dataAttr(itemState.focused),
        "data-disabled": domQuery.dataAttr(itemState.disabled),
        "data-orientation": prop("orientation")
      });
    },
    getItemContentProps(props2) {
      const itemState = getItemState(props2);
      return normalize.element({
        ...parts.itemContent.attrs,
        dir: prop("dir"),
        role: "region",
        id: getItemContentId(scope, props2.value),
        "aria-labelledby": getItemTriggerId(scope, props2.value),
        hidden: !itemState.expanded,
        "data-state": itemState.expanded ? "open" : "closed",
        "data-disabled": domQuery.dataAttr(itemState.disabled),
        "data-focus": domQuery.dataAttr(itemState.focused),
        "data-orientation": prop("orientation")
      });
    },
    getItemIndicatorProps(props2) {
      const itemState = getItemState(props2);
      return normalize.element({
        ...parts.itemIndicator.attrs,
        dir: prop("dir"),
        "aria-hidden": true,
        "data-state": itemState.expanded ? "open" : "closed",
        "data-disabled": domQuery.dataAttr(itemState.disabled),
        "data-focus": domQuery.dataAttr(itemState.focused),
        "data-orientation": prop("orientation")
      });
    },
    getItemTriggerProps(props2) {
      const { value: value2 } = props2;
      const itemState = getItemState(props2);
      return normalize.button({
        ...parts.itemTrigger.attrs,
        type: "button",
        dir: prop("dir"),
        id: getItemTriggerId(scope, value2),
        "aria-controls": getItemContentId(scope, value2),
        "aria-expanded": itemState.expanded,
        disabled: itemState.disabled,
        "data-orientation": prop("orientation"),
        "aria-disabled": itemState.disabled,
        "data-state": itemState.expanded ? "open" : "closed",
        "data-ownedby": getRootId(scope),
        onFocus() {
          if (itemState.disabled) return;
          send({ type: "TRIGGER.FOCUS", value: value2 });
        },
        onBlur() {
          if (itemState.disabled) return;
          send({ type: "TRIGGER.BLUR" });
        },
        onClick(event) {
          if (itemState.disabled) return;
          if (domQuery.isSafari()) {
            event.currentTarget.focus();
          }
          send({ type: "TRIGGER.CLICK", value: value2 });
        },
        onKeyDown(event) {
          if (event.defaultPrevented) return;
          if (itemState.disabled) return;
          const keyMap = {
            ArrowDown() {
              if (computed("isHorizontal")) return;
              send({ type: "GOTO.NEXT", value: value2 });
            },
            ArrowUp() {
              if (computed("isHorizontal")) return;
              send({ type: "GOTO.PREV", value: value2 });
            },
            ArrowRight() {
              if (!computed("isHorizontal")) return;
              send({ type: "GOTO.NEXT", value: value2 });
            },
            ArrowLeft() {
              if (!computed("isHorizontal")) return;
              send({ type: "GOTO.PREV", value: value2 });
            },
            Home() {
              send({ type: "GOTO.FIRST", value: value2 });
            },
            End() {
              send({ type: "GOTO.LAST", value: value2 });
            }
          };
          const key = domQuery.getEventKey(event, {
            dir: prop("dir"),
            orientation: prop("orientation")
          });
          const exec = keyMap[key];
          if (exec) {
            exec(event);
            event.preventDefault();
          }
        }
      });
    }
  };
}
var { and, not } = core.createGuards();
var machine = core.createMachine({
  props({ props: props2 }) {
    return {
      collapsible: false,
      multiple: false,
      orientation: "vertical",
      defaultValue: [],
      ...props2
    };
  },
  initialState() {
    return "idle";
  },
  context({ prop, bindable }) {
    return {
      focusedValue: bindable(() => ({
        defaultValue: null,
        sync: true,
        onChange(value) {
          prop("onFocusChange")?.({ value });
        }
      })),
      value: bindable(() => ({
        defaultValue: prop("defaultValue"),
        value: prop("value"),
        onChange(value) {
          prop("onValueChange")?.({ value });
        }
      }))
    };
  },
  computed: {
    isHorizontal: ({ prop }) => prop("orientation") === "horizontal"
  },
  on: {
    "VALUE.SET": {
      actions: ["setValue"]
    }
  },
  states: {
    idle: {
      on: {
        "TRIGGER.FOCUS": {
          target: "focused",
          actions: ["setFocusedValue"]
        }
      }
    },
    focused: {
      on: {
        "GOTO.NEXT": {
          actions: ["focusNextTrigger"]
        },
        "GOTO.PREV": {
          actions: ["focusPrevTrigger"]
        },
        "TRIGGER.CLICK": [
          {
            guard: and("isExpanded", "canToggle"),
            actions: ["collapse"]
          },
          {
            guard: not("isExpanded"),
            actions: ["expand"]
          }
        ],
        "GOTO.FIRST": {
          actions: ["focusFirstTrigger"]
        },
        "GOTO.LAST": {
          actions: ["focusLastTrigger"]
        },
        "TRIGGER.BLUR": {
          target: "idle",
          actions: ["clearFocusedValue"]
        }
      }
    }
  },
  implementations: {
    guards: {
      canToggle: ({ prop }) => !!prop("collapsible") || !!prop("multiple"),
      isExpanded: ({ context, event }) => context.get("value").includes(event.value)
    },
    actions: {
      collapse({ context, prop, event }) {
        const next = prop("multiple") ? utils.remove(context.get("value"), event.value) : [];
        context.set("value", next);
      },
      expand({ context, prop, event }) {
        const next = prop("multiple") ? utils.add(context.get("value"), event.value) : [event.value];
        context.set("value", next);
      },
      focusFirstTrigger({ scope }) {
        getFirstTriggerEl(scope)?.focus();
      },
      focusLastTrigger({ scope }) {
        getLastTriggerEl(scope)?.focus();
      },
      focusNextTrigger({ context, scope }) {
        const focusedValue = context.get("focusedValue");
        if (!focusedValue) return;
        const triggerEl = getNextTriggerEl(scope, focusedValue);
        triggerEl?.focus();
      },
      focusPrevTrigger({ context, scope }) {
        const focusedValue = context.get("focusedValue");
        if (!focusedValue) return;
        const triggerEl = getPrevTriggerEl(scope, focusedValue);
        triggerEl?.focus();
      },
      setFocusedValue({ context, event }) {
        context.set("focusedValue", event.value);
      },
      clearFocusedValue({ context }) {
        context.set("focusedValue", null);
      },
      setValue({ context, event }) {
        context.set("value", event.value);
      },
      coarseValue({ context, prop }) {
        if (!prop("multiple") && context.get("value").length > 1) {
          utils.warn(`The value of accordion should be a single value when multiple is false.`);
          context.set("value", [context.get("value")[0]]);
        }
      }
    }
  }
});
var props = types.createProps()([
  "collapsible",
  "dir",
  "disabled",
  "getRootNode",
  "id",
  "ids",
  "multiple",
  "onFocusChange",
  "onValueChange",
  "orientation",
  "value",
  "defaultValue"
]);
var splitProps = utils.createSplitProps(props);
var itemProps = types.createProps()(["value", "disabled"]);
var splitItemProps = utils.createSplitProps(itemProps);

exports.anatomy = anatomy;
exports.connect = connect;
exports.itemProps = itemProps;
exports.machine = machine;
exports.props = props;
exports.splitItemProps = splitItemProps;
exports.splitProps = splitProps;
