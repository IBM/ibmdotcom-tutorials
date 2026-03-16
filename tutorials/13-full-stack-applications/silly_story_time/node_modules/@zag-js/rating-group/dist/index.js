'use strict';

var anatomy$1 = require('@zag-js/anatomy');
var domQuery = require('@zag-js/dom-query');
var core = require('@zag-js/core');
var types = require('@zag-js/types');
var utils = require('@zag-js/utils');

// src/rating-group.anatomy.ts
var anatomy = anatomy$1.createAnatomy("rating-group").parts("root", "label", "item", "control");
var parts = anatomy.build();
var getRootId = (ctx) => ctx.ids?.root ?? `rating:${ctx.id}`;
var getLabelId = (ctx) => ctx.ids?.label ?? `rating:${ctx.id}:label`;
var getHiddenInputId = (ctx) => ctx.ids?.hiddenInput ?? `rating:${ctx.id}:input`;
var getControlId = (ctx) => ctx.ids?.control ?? `rating:${ctx.id}:control`;
var getItemId = (ctx, id) => ctx.ids?.item?.(id) ?? `rating:${ctx.id}:item:${id}`;
var getControlEl = (ctx) => ctx.getById(getControlId(ctx));
var getRadioEl = (ctx, value) => {
  const selector = `[role=radio][aria-posinset='${Math.ceil(value)}']`;
  return domQuery.query(getControlEl(ctx), selector);
};
var getHiddenInputEl = (ctx) => ctx.getById(getHiddenInputId(ctx));
var dispatchChangeEvent = (ctx, value) => {
  const inputEl = getHiddenInputEl(ctx);
  if (!inputEl) return;
  domQuery.dispatchInputValueEvent(inputEl, { value });
};

// src/rating-group.connect.ts
function connect(service, normalize) {
  const { context, send, prop, scope, computed } = service;
  const interactive = computed("isInteractive");
  const disabled = computed("isDisabled");
  const readOnly = prop("readOnly");
  const value = context.get("value");
  const hoveredValue = context.get("hoveredValue");
  const translations = prop("translations");
  function getItemState(props2) {
    const currentValue = computed("isHovering") ? hoveredValue : value;
    const equal = Math.ceil(currentValue) === props2.index;
    const highlighted = props2.index <= currentValue || equal;
    const half = equal && Math.abs(currentValue - props2.index) === 0.5;
    return {
      highlighted,
      half,
      checked: equal || value === -1 && props2.index === 1
    };
  }
  return {
    hovering: computed("isHovering"),
    value,
    hoveredValue,
    count: prop("count"),
    items: Array.from({ length: prop("count") }).map((_, index) => index + 1),
    setValue(value2) {
      send({ type: "SET_VALUE", value: value2 });
    },
    clearValue() {
      send({ type: "CLEAR_VALUE" });
    },
    getRootProps() {
      return normalize.element({
        ...parts.root.attrs,
        dir: prop("dir"),
        id: getRootId(scope)
      });
    },
    getHiddenInputProps() {
      return normalize.input({
        name: prop("name"),
        form: prop("form"),
        type: "text",
        hidden: true,
        disabled,
        readOnly,
        required: prop("required"),
        id: getHiddenInputId(scope),
        defaultValue: value
      });
    },
    getLabelProps() {
      return normalize.label({
        ...parts.label.attrs,
        dir: prop("dir"),
        id: getLabelId(scope),
        "data-disabled": domQuery.dataAttr(disabled),
        htmlFor: getHiddenInputId(scope),
        onClick(event) {
          if (event.defaultPrevented) return;
          if (!interactive) return;
          event.preventDefault();
          const radioEl = getRadioEl(scope, Math.max(1, context.get("value")));
          radioEl?.focus({ preventScroll: true });
        }
      });
    },
    getControlProps() {
      return normalize.element({
        id: getControlId(scope),
        ...parts.control.attrs,
        dir: prop("dir"),
        role: "radiogroup",
        "aria-orientation": "horizontal",
        "aria-labelledby": getLabelId(scope),
        "aria-readonly": domQuery.ariaAttr(readOnly),
        "data-readonly": domQuery.dataAttr(readOnly),
        "data-disabled": domQuery.dataAttr(disabled),
        onPointerMove(event) {
          if (!interactive) return;
          if (event.pointerType === "touch") return;
          send({ type: "GROUP_POINTER_OVER" });
        },
        onPointerLeave(event) {
          if (!interactive) return;
          if (event.pointerType === "touch") return;
          send({ type: "GROUP_POINTER_LEAVE" });
        }
      });
    },
    getItemState,
    getItemProps(props2) {
      const { index } = props2;
      const itemState = getItemState(props2);
      const valueText = translations.ratingValueText(index);
      return normalize.element({
        ...parts.item.attrs,
        dir: prop("dir"),
        id: getItemId(scope, index.toString()),
        role: "radio",
        tabIndex: (() => {
          if (readOnly) return itemState.checked ? 0 : void 0;
          if (disabled) return void 0;
          return itemState.checked ? 0 : -1;
        })(),
        "aria-roledescription": "rating",
        "aria-label": valueText,
        "aria-disabled": disabled,
        "data-disabled": domQuery.dataAttr(disabled),
        "data-readonly": domQuery.dataAttr(readOnly),
        "aria-setsize": prop("count"),
        "aria-checked": itemState.checked,
        "data-checked": domQuery.dataAttr(itemState.checked),
        "aria-posinset": index,
        "data-highlighted": domQuery.dataAttr(itemState.highlighted),
        "data-half": domQuery.dataAttr(itemState.half),
        onPointerDown(event) {
          if (!interactive) return;
          if (!domQuery.isLeftClick(event)) return;
          event.preventDefault();
        },
        onPointerMove(event) {
          if (!interactive) return;
          const point = domQuery.getEventPoint(event);
          const relativePoint = domQuery.getRelativePoint(point, event.currentTarget);
          const percentX = relativePoint.getPercentValue({
            orientation: "horizontal",
            dir: prop("dir")
          });
          const isMidway = percentX < 0.5;
          send({ type: "POINTER_OVER", index, isMidway });
        },
        onKeyDown(event) {
          if (event.defaultPrevented) return;
          if (!interactive) return;
          const keyMap = {
            ArrowLeft() {
              send({ type: "ARROW_LEFT" });
            },
            ArrowRight() {
              send({ type: "ARROW_RIGHT" });
            },
            ArrowUp() {
              send({ type: "ARROW_LEFT" });
            },
            ArrowDown() {
              send({ type: "ARROW_RIGHT" });
            },
            Space() {
              send({ type: "SPACE", value: index });
            },
            Home() {
              send({ type: "HOME" });
            },
            End() {
              send({ type: "END" });
            }
          };
          const key = domQuery.getEventKey(event, { dir: prop("dir") });
          const exec = keyMap[key];
          if (exec) {
            event.preventDefault();
            exec(event);
          }
        },
        onClick() {
          if (!interactive) return;
          send({ type: "CLICK", value: index });
        },
        onFocus() {
          if (!interactive) return;
          send({ type: "FOCUS" });
        },
        onBlur() {
          if (!interactive) return;
          send({ type: "BLUR" });
        }
      });
    }
  };
}
var machine = core.createMachine({
  props({ props: props2 }) {
    return {
      name: "rating",
      count: 5,
      dir: "ltr",
      defaultValue: -1,
      ...props2,
      translations: {
        ratingValueText: (index) => `${index} stars`,
        ...props2.translations
      }
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
      })),
      hoveredValue: bindable(() => ({
        defaultValue: -1,
        onChange(value) {
          prop("onHoverChange")?.({ hoveredValue: value });
        }
      })),
      fieldsetDisabled: bindable(() => ({
        defaultValue: false
      }))
    };
  },
  watch({ track, action, prop, context }) {
    track([() => prop("allowHalf")], () => {
      action(["roundValueIfNeeded"]);
    });
    track([() => context.get("value")], () => {
      action(["dispatchChangeEvent"]);
    });
  },
  computed: {
    isDisabled: ({ context, prop }) => !!prop("disabled") || context.get("fieldsetDisabled"),
    isInteractive: ({ computed, prop }) => !(computed("isDisabled") || prop("readOnly")),
    isHovering: ({ context }) => context.get("hoveredValue") > -1
  },
  effects: ["trackFormControlState"],
  on: {
    SET_VALUE: {
      actions: ["setValue"]
    },
    CLEAR_VALUE: {
      actions: ["clearValue"]
    }
  },
  states: {
    idle: {
      entry: ["clearHoveredValue"],
      on: {
        GROUP_POINTER_OVER: {
          target: "hover"
        },
        FOCUS: {
          target: "focus"
        },
        CLICK: {
          actions: ["setValue", "focusActiveRadio"]
        }
      }
    },
    focus: {
      on: {
        POINTER_OVER: {
          actions: ["setHoveredValue"]
        },
        GROUP_POINTER_LEAVE: {
          actions: ["clearHoveredValue"]
        },
        BLUR: {
          target: "idle"
        },
        SPACE: {
          guard: "isValueEmpty",
          actions: ["setValue"]
        },
        CLICK: {
          actions: ["setValue", "focusActiveRadio"]
        },
        ARROW_LEFT: {
          actions: ["setPrevValue", "focusActiveRadio"]
        },
        ARROW_RIGHT: {
          actions: ["setNextValue", "focusActiveRadio"]
        },
        HOME: {
          actions: ["setValueToMin", "focusActiveRadio"]
        },
        END: {
          actions: ["setValueToMax", "focusActiveRadio"]
        }
      }
    },
    hover: {
      on: {
        POINTER_OVER: {
          actions: ["setHoveredValue"]
        },
        GROUP_POINTER_LEAVE: [
          {
            guard: "isRadioFocused",
            target: "focus",
            actions: ["clearHoveredValue"]
          },
          {
            target: "idle",
            actions: ["clearHoveredValue"]
          }
        ],
        CLICK: {
          actions: ["setValue", "focusActiveRadio"]
        }
      }
    }
  },
  implementations: {
    guards: {
      isInteractive: ({ prop }) => !(prop("disabled") || prop("readOnly")),
      isHoveredValueEmpty: ({ context }) => context.get("hoveredValue") === -1,
      isValueEmpty: ({ context }) => context.get("value") <= 0,
      isRadioFocused: ({ scope }) => !!getControlEl(scope)?.contains(scope.getActiveElement())
    },
    effects: {
      trackFormControlState({ context, scope }) {
        return domQuery.trackFormControl(getHiddenInputEl(scope), {
          onFieldsetDisabledChange(disabled) {
            context.set("fieldsetDisabled", disabled);
          },
          onFormReset() {
            context.set("value", context.initial("value"));
          }
        });
      }
    },
    actions: {
      clearHoveredValue({ context }) {
        context.set("hoveredValue", -1);
      },
      focusActiveRadio({ scope, context }) {
        domQuery.raf(() => getRadioEl(scope, context.get("value"))?.focus());
      },
      setPrevValue({ context, prop }) {
        const factor = prop("allowHalf") ? 0.5 : 1;
        context.set("value", Math.max(0, context.get("value") - factor));
      },
      setNextValue({ context, prop }) {
        const factor = prop("allowHalf") ? 0.5 : 1;
        const value = context.get("value") === -1 ? 0 : context.get("value");
        context.set("value", Math.min(prop("count"), value + factor));
      },
      setValueToMin({ context }) {
        context.set("value", 1);
      },
      setValueToMax({ context, prop }) {
        context.set("value", prop("count"));
      },
      setValue({ context, event }) {
        const hoveredValue = context.get("hoveredValue");
        const value = hoveredValue === -1 ? event.value : hoveredValue;
        context.set("value", value);
      },
      clearValue({ context }) {
        context.set("value", -1);
      },
      setHoveredValue({ context, prop, event }) {
        const half = prop("allowHalf") && event.isMidway;
        const factor = half ? 0.5 : 0;
        context.set("hoveredValue", event.index - factor);
      },
      roundValueIfNeeded({ context, prop }) {
        if (prop("allowHalf")) return;
        context.set("value", Math.round(context.get("value")));
      },
      dispatchChangeEvent({ context, scope }) {
        dispatchChangeEvent(scope, context.get("value"));
      }
    }
  }
});
var props = types.createProps()([
  "allowHalf",
  "autoFocus",
  "count",
  "dir",
  "disabled",
  "form",
  "getRootNode",
  "id",
  "ids",
  "name",
  "onHoverChange",
  "onValueChange",
  "required",
  "readOnly",
  "translations",
  "value",
  "defaultValue"
]);
var splitProps = utils.createSplitProps(props);
var itemProps = types.createProps()(["index"]);
var splitItemProps = utils.createSplitProps(itemProps);

exports.anatomy = anatomy;
exports.connect = connect;
exports.itemProps = itemProps;
exports.machine = machine;
exports.props = props;
exports.splitItemProps = splitItemProps;
exports.splitProps = splitProps;
