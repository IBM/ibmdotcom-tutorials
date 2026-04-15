'use strict';

var anatomy$1 = require('@zag-js/anatomy');
var domQuery = require('@zag-js/dom-query');
var popper = require('@zag-js/popper');
var date = require('@internationalized/date');
var core = require('@zag-js/core');
var dismissable = require('@zag-js/dismissable');
var utils = require('@zag-js/utils');
var types = require('@zag-js/types');

// src/time-picker.anatomy.ts
var anatomy = anatomy$1.createAnatomy("time-picker").parts(
  "cell",
  "clearTrigger",
  "column",
  "content",
  "control",
  "input",
  "label",
  "positioner",
  "root",
  "spacer",
  "trigger"
);
var parts = anatomy.build();
var getContentId = (ctx) => ctx.ids?.content ?? `time-picker:${ctx.id}:content`;
var getColumnId = (ctx, unit) => ctx.ids?.column?.(unit) ?? `time-picker:${ctx.id}:column:${unit}`;
var getControlId = (ctx) => ctx.ids?.control ?? `time-picker:${ctx.id}:control`;
var getClearTriggerId = (ctx) => ctx.ids?.clearTrigger ?? `time-picker:${ctx.id}:clear-trigger`;
var getPositionerId = (ctx) => ctx.ids?.positioner ?? `time-picker:${ctx.id}:positioner`;
var getInputId = (ctx) => ctx.ids?.input ?? `time-picker:${ctx.id}:input`;
var getTriggerId = (ctx) => ctx.ids?.trigger ?? `time-picker:${ctx.id}:trigger`;
var getContentEl = (ctx) => ctx.getById(getContentId(ctx));
var getColumnEl = (ctx, unit) => domQuery.query(getContentEl(ctx), `[data-part=column][data-unit=${unit}]`);
var getColumnEls = (ctx) => domQuery.queryAll(getContentEl(ctx), `[data-part=column]:not([hidden])`);
var getColumnCellEls = (ctx, unit) => domQuery.queryAll(getColumnEl(ctx, unit), `[data-part=cell]`);
var getControlEl = (ctx) => ctx.getById(getControlId(ctx));
var getClearTriggerEl = (ctx) => ctx.getById(getClearTriggerId(ctx));
var getPositionerEl = (ctx) => ctx.getById(getPositionerId(ctx));
var getInputEl = (ctx) => ctx.getById(getInputId(ctx));
var getTriggerEl = (ctx) => ctx.getById(getTriggerId(ctx));
var getFocusedCell = (ctx) => domQuery.query(getContentEl(ctx), `[data-part=cell][data-focus]`);
var getInitialFocusCell = (ctx, unit) => {
  const contentEl = getContentEl(ctx);
  let cellEl = domQuery.query(contentEl, `[data-part=cell][data-unit=${unit}][aria-current]`);
  cellEl || (cellEl = domQuery.query(contentEl, `[data-part=cell][data-unit=${unit}][data-now]`));
  cellEl || (cellEl = domQuery.query(contentEl, `[data-part=cell][data-unit=${unit}]`));
  return cellEl;
};
var getColumnUnit = (el) => el.dataset.unit;
var getCellValue = (el) => {
  const value = el?.dataset.value;
  return el?.dataset.unit === "period" ? value : Number(value ?? "0");
};
function getCurrentTime() {
  const now = /* @__PURE__ */ new Date();
  return new date.Time(now.getHours(), now.getMinutes(), now.getSeconds());
}
var padStart = (value) => value.toString().padStart(2, "0");
function getValueString(value, hour12, period, allowSeconds) {
  if (!value) return "";
  let hourValue = value.hour;
  if (hour12 && hourValue === 0) {
    hourValue = 12;
  } else if (hour12 && hourValue > 12) {
    hourValue -= 12;
  }
  let result = `${padStart(hourValue)}:${padStart(value.minute)}`;
  if (allowSeconds) {
    const second = padStart(value.second);
    result += `:${second}`;
  }
  if (hour12 && period) {
    result += ` ${period.toUpperCase()}`;
  }
  return result;
}
var TIME_REX = /(\d{1,2}):(\d{1,2})(?::(\d{1,2}))?\s?(AM|PM|am|pm)?/;
function getTimeValue(locale, periodProp, value) {
  const match2 = value.match(TIME_REX);
  if (!match2) return;
  let [, hourString, minuteString, secondString, periodString] = match2;
  let hour = parseInt(hourString);
  const minute = parseInt(minuteString);
  const second = secondString ? parseInt(secondString) : void 0;
  if (!is12HourFormat(locale) && periodProp) {
    return { time: new date.Time(hour, minute, second), period: periodProp };
  }
  let period = periodString ? periodString.toLowerCase() : "am";
  if (hour > 11) {
    period = "pm";
  } else if (period === "pm") {
    hour += 12;
  }
  return { time: new date.Time(hour, minute, second), period };
}
function get12HourFormatPeriodHour(hour, period) {
  if (!period) return hour;
  return period === "pm" ? hour + 12 : hour;
}
function getHourPeriod(hour, locale) {
  if (hour === void 0 || !is12HourFormat(locale)) return null;
  return hour > 11 ? "pm" : "am";
}
function is12HourFormat(locale) {
  return new Intl.DateTimeFormat(locale, { hour: "numeric" }).formatToParts(/* @__PURE__ */ new Date()).some((part) => part.type === "dayPeriod");
}
function getInputPlaceholder(placeholder, allowSeconds, locale) {
  if (placeholder) return placeholder;
  const secondsPart = allowSeconds ? ":ss" : "";
  const periodPart = is12HourFormat(locale) ? " aa" : "";
  return `hh:mm${secondsPart}${periodPart}`;
}
function clampTime(value, min, max) {
  let time = value;
  if (min && min.compare(value) > 0) {
    time = min.copy();
  } else if (max && max.compare(value) < 0) {
    time = max.copy();
  }
  return time;
}
function isTimeEqual(a, b) {
  if (!a || !b) return false;
  return a.hour === b.hour && a.minute === b.minute && a.second === b.second;
}

// src/time-picker.connect.ts
function connect(service, normalize) {
  const { state, send, prop, computed, scope, context } = service;
  const disabled = prop("disabled");
  const readOnly = prop("readOnly");
  const locale = prop("locale");
  const hour12 = is12HourFormat(locale);
  const min = prop("min");
  const max = prop("max");
  const steps = prop("steps");
  const focused = state.matches("focused");
  const open = state.hasTag("open");
  const value = context.get("value");
  const valueAsString = computed("valueAsString");
  const currentTime = context.get("currentTime");
  const focusedColumn = context.get("focusedColumn");
  const currentPlacement = context.get("currentPlacement");
  const popperStyles = popper.getPlacementStyles({
    ...prop("positioning"),
    placement: currentPlacement
  });
  return {
    focused,
    open,
    value,
    valueAsString,
    hour12,
    reposition(options = {}) {
      send({ type: "POSITIONING.SET", options });
    },
    setOpen(nextOpen) {
      const open2 = state.hasTag("open");
      if (open2 === nextOpen) return;
      send({ type: nextOpen ? "OPEN" : "CLOSE" });
    },
    setUnitValue(unit, value2) {
      send({ type: "UNIT.SET", unit, value: value2 });
    },
    setValue(value2) {
      send({ type: "VALUE.SET", value: value2 });
    },
    clearValue() {
      send({ type: "VALUE.CLEAR" });
    },
    getHours() {
      const length = hour12 ? 12 : 24;
      const arr = Array.from({ length }, (_, i) => i);
      const step = steps?.hour;
      const hours = step != null ? arr.filter((hour) => hour % step === 0) : arr;
      return hours.map((value2) => ({ label: hour12 && value2 === 0 ? "12" : padStart(value2), value: value2 }));
    },
    getMinutes() {
      const arr = Array.from({ length: 60 }, (_, i) => i);
      const step = steps?.minute;
      const minutes = step != null ? arr.filter((minute) => minute % step === 0) : arr;
      return minutes.map((value2) => ({ label: padStart(value2), value: value2 }));
    },
    getSeconds() {
      const arr = Array.from({ length: 60 }, (_, i) => i);
      const step = steps?.second;
      const seconds = step != null ? arr.filter((second) => second % step === 0) : arr;
      return seconds.map((value2) => ({ label: padStart(value2), value: value2 }));
    },
    getRootProps() {
      return normalize.element({
        ...parts.root.attrs,
        "data-state": open ? "open" : "closed",
        "data-disabled": domQuery.dataAttr(disabled),
        "data-readonly": domQuery.dataAttr(readOnly)
      });
    },
    getLabelProps() {
      return normalize.label({
        ...parts.label.attrs,
        dir: prop("dir"),
        htmlFor: getInputId(scope),
        "data-state": open ? "open" : "closed",
        "data-disabled": domQuery.dataAttr(disabled),
        "data-readonly": domQuery.dataAttr(readOnly)
      });
    },
    getControlProps() {
      return normalize.element({
        ...parts.control.attrs,
        dir: prop("dir"),
        id: getControlId(scope),
        "data-disabled": domQuery.dataAttr(disabled)
      });
    },
    getInputProps() {
      return normalize.input({
        ...parts.input.attrs,
        dir: prop("dir"),
        autoComplete: "off",
        autoCorrect: "off",
        spellCheck: "false",
        id: getInputId(scope),
        name: prop("name"),
        defaultValue: valueAsString,
        placeholder: getInputPlaceholder(prop("placeholder"), prop("allowSeconds"), locale),
        disabled,
        readOnly,
        onFocus() {
          send({ type: "INPUT.FOCUS" });
        },
        onBlur(event) {
          send({ type: "INPUT.BLUR", value: event.currentTarget.value });
        },
        onKeyDown(event) {
          if (domQuery.isComposingEvent(event)) return;
          if (event.key !== "Enter") return;
          send({ type: "INPUT.ENTER", value: event.currentTarget.value });
          event.preventDefault();
        }
      });
    },
    getTriggerProps() {
      return normalize.button({
        ...parts.trigger.attrs,
        id: getTriggerId(scope),
        type: "button",
        "data-placement": currentPlacement,
        disabled,
        "data-readonly": domQuery.dataAttr(readOnly),
        "aria-label": open ? "Close calendar" : "Open calendar",
        "aria-controls": getContentId(scope),
        "data-state": open ? "open" : "closed",
        onClick(event) {
          if (event.defaultPrevented) return;
          send({ type: "TRIGGER.CLICK" });
        }
      });
    },
    getClearTriggerProps() {
      return normalize.button({
        ...parts.clearTrigger.attrs,
        id: getClearTriggerId(scope),
        type: "button",
        hidden: !value,
        disabled,
        "data-readonly": domQuery.dataAttr(readOnly),
        "aria-label": "Clear time",
        onClick(event) {
          if (event.defaultPrevented) return;
          send({ type: "VALUE.CLEAR" });
        }
      });
    },
    getPositionerProps() {
      return normalize.element({
        ...parts.positioner.attrs,
        dir: prop("dir"),
        id: getPositionerId(scope),
        style: popperStyles.floating
      });
    },
    getSpacerProps() {
      return normalize.element({
        ...parts.spacer.attrs
      });
    },
    getContentProps() {
      return normalize.element({
        ...parts.content.attrs,
        dir: prop("dir"),
        id: getContentId(scope),
        hidden: !open,
        tabIndex: 0,
        role: "application",
        "data-state": open ? "open" : "closed",
        "data-placement": currentPlacement,
        "aria-roledescription": "timepicker",
        "aria-label": "timepicker",
        onKeyDown(event) {
          if (event.defaultPrevented) return;
          if (domQuery.isComposingEvent(event)) return;
          const keyMap = {
            ArrowUp() {
              send({ type: "CONTENT.ARROW_UP" });
            },
            ArrowDown() {
              send({ type: "CONTENT.ARROW_DOWN" });
            },
            ArrowLeft() {
              send({ type: "CONTENT.ARROW_LEFT" });
            },
            ArrowRight() {
              send({ type: "CONTENT.ARROW_RIGHT" });
            },
            Enter() {
              send({ type: "CONTENT.ENTER" });
            },
            // prevent tabbing out of the time picker
            Tab() {
            },
            Escape() {
              if (!prop("disableLayer")) return;
              send({ type: "CONTENT.ESCAPE" });
            }
          };
          const exec = keyMap[domQuery.getEventKey(event, { dir: prop("dir") })];
          if (exec) {
            exec(event);
            event.preventDefault();
          }
        }
      });
    },
    getColumnProps(props2) {
      const hidden = props2.unit === "second" && !prop("allowSeconds") || props2.unit === "period" && !hour12;
      return normalize.element({
        ...parts.column.attrs,
        id: getColumnId(scope, props2.unit),
        "data-unit": props2.unit,
        "data-focus": domQuery.dataAttr(focusedColumn === props2.unit),
        hidden
      });
    },
    getHourCellProps(props2) {
      const hour = props2.value;
      const isSelectable = !(min && get12HourFormatPeriodHour(hour, computed("period")) < min.hour || max && get12HourFormatPeriodHour(hour, computed("period")) > max.hour);
      const isSelected = value?.hour === get12HourFormatPeriodHour(hour, computed("period"));
      const isFocused = focusedColumn === "hour" && context.get("focusedValue") === hour;
      const currentHour = hour12 && currentTime ? currentTime?.hour % 12 : currentTime?.hour;
      const isCurrent = currentHour === hour || hour === 12 && currentHour === 0;
      return normalize.button({
        ...parts.cell.attrs,
        type: "button",
        "aria-disabled": domQuery.ariaAttr(!isSelectable),
        "data-disabled": domQuery.dataAttr(!isSelectable),
        "aria-current": domQuery.ariaAttr(isSelected),
        "data-selected": domQuery.dataAttr(isSelected),
        "data-now": domQuery.dataAttr(isCurrent),
        "data-focus": domQuery.dataAttr(isFocused),
        "aria-label": `${hour} hours`,
        "data-value": hour,
        "data-unit": "hour",
        onClick(event) {
          if (event.defaultPrevented) return;
          if (!isSelectable) return;
          send({ type: "UNIT.CLICK", unit: "hour", value: hour });
        }
      });
    },
    getMinuteCellProps(props2) {
      const minute = props2.value;
      const value2 = context.get("value");
      const minMinute = min?.set({ second: 0 });
      const maxMinute = max?.set({ second: 0 });
      const isSelectable = !(minMinute && value2 && minMinute.compare(value2.set({ minute })) > 0 || maxMinute && value2 && maxMinute.compare(value2.set({ minute })) < 0);
      const isSelected = value2?.minute === minute;
      const isCurrent = currentTime?.minute === minute;
      const isFocused = focusedColumn === "minute" && context.get("focusedValue") === minute;
      return normalize.button({
        ...parts.cell.attrs,
        type: "button",
        "aria-disabled": domQuery.ariaAttr(!isSelectable),
        "data-disabled": domQuery.dataAttr(!isSelectable),
        "aria-current": domQuery.ariaAttr(isSelected),
        "data-selected": domQuery.dataAttr(isSelected),
        "aria-label": `${minute} minutes`,
        "data-value": minute,
        "data-now": domQuery.dataAttr(isCurrent),
        "data-focus": domQuery.dataAttr(isFocused),
        "data-unit": "minute",
        onClick(event) {
          if (event.defaultPrevented) return;
          if (!isSelectable) return;
          send({ type: "UNIT.CLICK", unit: "minute", value: minute });
        }
      });
    },
    getSecondCellProps(props2) {
      const second = props2.value;
      const isSelectable = !(min && value?.minute && min.compare(value.set({ second })) > 0 || max && value?.minute && max.compare(value.set({ second })) < 0);
      const isSelected = value?.second === second;
      const isCurrent = currentTime?.second === second;
      const isFocused = focusedColumn === "second" && context.get("focusedValue") === second;
      return normalize.button({
        ...parts.cell.attrs,
        type: "button",
        "aria-disabled": domQuery.ariaAttr(!isSelectable),
        "data-disabled": domQuery.dataAttr(!isSelectable),
        "aria-current": domQuery.ariaAttr(isSelected),
        "data-selected": domQuery.dataAttr(isSelected),
        "aria-label": `${second} seconds`,
        "data-value": second,
        "data-unit": "second",
        "data-focus": domQuery.dataAttr(isFocused),
        "data-now": domQuery.dataAttr(isCurrent),
        onClick(event) {
          if (event.defaultPrevented) return;
          if (!isSelectable) return;
          send({ type: "UNIT.CLICK", unit: "second", value: second });
        }
      });
    },
    getPeriodCellProps(props2) {
      const isSelected = computed("period") === props2.value;
      const currentPeriod = getHourPeriod(currentTime?.hour, locale);
      const isCurrent = currentPeriod === props2.value;
      const isFocused = focusedColumn === "period" && context.get("focusedValue") === props2.value;
      return normalize.button({
        ...parts.cell.attrs,
        type: "button",
        "aria-current": domQuery.ariaAttr(isSelected),
        "data-selected": domQuery.dataAttr(isSelected),
        "data-focus": domQuery.dataAttr(isFocused),
        "data-now": domQuery.dataAttr(isCurrent),
        "aria-label": props2.value,
        "data-value": props2.value,
        "data-unit": "period",
        onClick(event) {
          if (event.defaultPrevented) return;
          send({ type: "UNIT.CLICK", unit: "period", value: props2.value });
        }
      });
    }
  };
}
var { and } = core.createGuards();
var machine = core.createMachine({
  props({ props: props2 }) {
    return {
      locale: "en-US",
      ...props2,
      positioning: {
        placement: "bottom-start",
        gutter: 8,
        ...props2.positioning
      }
    };
  },
  initialState({ prop }) {
    const open = prop("open") || prop("defaultOpen");
    return open ? "open" : "idle";
  },
  context({ prop, bindable, getComputed }) {
    return {
      value: bindable(() => ({
        value: prop("value"),
        defaultValue: prop("defaultValue"),
        hash(a) {
          return a?.toString() ?? "";
        },
        isEqual: isTimeEqual,
        onChange(value) {
          const computed = getComputed();
          const valueAsString = getValueString(value, computed("hour12"), computed("period"), prop("allowSeconds"));
          prop("onValueChange")?.({ value, valueAsString });
        }
      })),
      focusedColumn: bindable(() => ({ defaultValue: "hour" })),
      focusedValue: bindable(() => ({ defaultValue: null })),
      currentTime: bindable(() => ({ defaultValue: null })),
      currentPlacement: bindable(() => ({ defaultValue: void 0 })),
      restoreFocus: bindable(() => ({ defaultValue: void 0 }))
    };
  },
  computed: {
    valueAsString: ({ context, prop, computed }) => getValueString(context.get("value"), computed("hour12"), computed("period"), prop("allowSeconds")),
    hour12: ({ prop }) => is12HourFormat(prop("locale")),
    period: ({ context, prop }) => getHourPeriod(context.get("value")?.hour, prop("locale"))
  },
  watch({ track, action, prop, context, computed }) {
    track([() => prop("open")], () => {
      action(["toggleVisibility"]);
    });
    track([() => context.hash("value"), () => computed("period")], () => {
      action(["syncInputElement"]);
    });
    track([() => context.get("focusedColumn")], () => {
      action(["syncFocusedValue"]);
    });
    track([() => context.get("focusedValue")], () => {
      action(["focusCell"]);
    });
  },
  on: {
    "VALUE.CLEAR": {
      actions: ["clearValue"]
    },
    "VALUE.SET": {
      actions: ["setValue"]
    },
    "UNIT.SET": {
      actions: ["setUnitValue"]
    }
  },
  states: {
    idle: {
      tags: ["closed"],
      on: {
        "INPUT.FOCUS": {
          target: "focused"
        },
        "TRIGGER.CLICK": [
          {
            guard: "isOpenControlled",
            actions: ["invokeOnOpen"]
          },
          {
            target: "open",
            actions: ["invokeOnOpen"]
          }
        ],
        OPEN: [
          {
            guard: "isOpenControlled",
            actions: ["invokeOnOpen"]
          },
          {
            target: "open",
            actions: ["invokeOnOpen"]
          }
        ],
        "CONTROLLED.OPEN": {
          target: "open",
          actions: ["invokeOnOpen"]
        }
      }
    },
    focused: {
      tags: ["closed"],
      on: {
        "TRIGGER.CLICK": [
          {
            guard: "isOpenControlled",
            actions: ["invokeOnOpen"]
          },
          {
            target: "open",
            actions: ["invokeOnOpen"]
          }
        ],
        OPEN: [
          {
            guard: "isOpenControlled",
            actions: ["invokeOnOpen"]
          },
          {
            target: "open",
            actions: ["invokeOnOpen"]
          }
        ],
        "INPUT.ENTER": {
          actions: ["setInputValue", "clampTimeValue"]
        },
        "INPUT.BLUR": {
          target: "idle",
          actions: ["setInputValue", "clampTimeValue"]
        },
        "CONTROLLED.OPEN": {
          target: "open",
          actions: ["invokeOnOpen"]
        }
      }
    },
    open: {
      tags: ["open"],
      entry: ["setCurrentTime", "scrollColumnsToTop", "focusHourColumn"],
      exit: ["resetFocusedCell"],
      effects: ["computePlacement", "trackDismissableElement"],
      on: {
        "TRIGGER.CLICK": [
          {
            guard: "isOpenControlled",
            actions: ["invokeOnClose"]
          },
          {
            target: "focused",
            actions: ["invokeOnClose"]
          }
        ],
        "INPUT.ENTER": {
          actions: ["setInputValue", "clampTimeValue"]
        },
        CLOSE: [
          {
            guard: "isOpenControlled",
            actions: ["invokeOnClose"]
          },
          {
            target: "idle",
            actions: ["invokeOnClose"]
          }
        ],
        "CONTROLLED.CLOSE": [
          {
            guard: and("shouldRestoreFocus", "isInteractOutsideEvent"),
            target: "focused",
            actions: ["focusTriggerElement"]
          },
          {
            guard: "shouldRestoreFocus",
            target: "focused",
            actions: ["focusInputElement"]
          },
          {
            target: "idle"
          }
        ],
        "CONTENT.ESCAPE": [
          {
            guard: "isOpenControlled",
            actions: ["invokeOnClose"]
          },
          {
            target: "focused",
            actions: ["invokeOnClose", "focusInputElement"]
          }
        ],
        INTERACT_OUTSIDE: [
          {
            guard: "isOpenControlled",
            actions: ["invokeOnClose"]
          },
          {
            guard: "shouldRestoreFocus",
            target: "focused",
            actions: ["invokeOnClose", "focusTriggerElement"]
          },
          {
            target: "idle",
            actions: ["invokeOnClose"]
          }
        ],
        "POSITIONING.SET": {
          actions: ["reposition"]
        },
        "UNIT.CLICK": {
          actions: ["setFocusedValue", "setFocusedColumn", "setUnitValue"]
        },
        "CONTENT.ARROW_UP": {
          actions: ["focusPreviousCell"]
        },
        "CONTENT.ARROW_DOWN": {
          actions: ["focusNextCell"]
        },
        "CONTENT.ARROW_LEFT": {
          actions: ["focusPreviousColumnCell"]
        },
        "CONTENT.ARROW_RIGHT": {
          actions: ["focusNextColumnCell"]
        },
        "CONTENT.ENTER": {
          actions: ["selectFocusedCell", "focusNextColumnCell"]
        }
      }
    }
  },
  implementations: {
    guards: {
      shouldRestoreFocus: ({ context }) => !!context.get("restoreFocus"),
      isOpenControlled: ({ prop }) => prop("open") != null,
      isInteractOutsideEvent: ({ event }) => event.previousEvent?.type === "INTERACT_OUTSIDE"
    },
    effects: {
      computePlacement({ context, prop, scope }) {
        context.set("currentPlacement", prop("positioning").placement);
        const anchorEl = () => getControlEl(scope);
        const positionerEl = () => getPositionerEl(scope);
        return popper.getPlacement(anchorEl, positionerEl, {
          defer: true,
          ...prop("positioning"),
          onComplete(data) {
            context.set("currentPlacement", data.placement);
          }
        });
      },
      trackDismissableElement({ context, prop, scope, send }) {
        if (prop("disableLayer")) return;
        const contentEl = () => getContentEl(scope);
        return dismissable.trackDismissableElement(contentEl, {
          defer: true,
          exclude: [getTriggerEl(scope), getClearTriggerEl(scope)],
          onEscapeKeyDown(event) {
            event.preventDefault();
            context.set("restoreFocus", true);
            send({ type: "CONTENT.ESCAPE" });
          },
          onInteractOutside(event) {
            context.set("restoreFocus", !event.detail.focusable);
          },
          onDismiss() {
            send({ type: "INTERACT_OUTSIDE" });
          }
        });
      }
    },
    actions: {
      reposition({ context, prop, scope, event }) {
        const positionerEl = () => getPositionerEl(scope);
        popper.getPlacement(getTriggerEl(scope), positionerEl, {
          ...prop("positioning"),
          ...event.options,
          defer: true,
          listeners: false,
          onComplete(data) {
            context.set("currentPlacement", data.placement);
          }
        });
      },
      toggleVisibility({ prop, send, event }) {
        send({ type: prop("open") ? "CONTROLLED.OPEN" : "CONTROLLED.CLOSE", previousEvent: event });
      },
      invokeOnOpen({ prop }) {
        prop("onOpenChange")?.({ open: true });
      },
      invokeOnClose({ prop }) {
        prop("onOpenChange")?.({ open: false });
      },
      setInputValue({ context, event, prop, computed }) {
        const timeValue = getTimeValue(prop("locale"), computed("period"), event.value);
        if (!timeValue) return;
        context.set("value", timeValue.time);
      },
      syncInputElement({ scope, computed }) {
        const inputEl = getInputEl(scope);
        if (!inputEl) return;
        inputEl.value = computed("valueAsString");
      },
      setUnitValue({ context, event, computed }) {
        const { unit, value } = event;
        const _value = context.get("value");
        const current = _value ?? context.get("currentTime") ?? new date.Time(0);
        const nextTime = utils.match(unit, {
          hour: () => current.set({ hour: computed("hour12") ? value + 12 : value }),
          minute: () => current.set({ minute: value }),
          second: () => current.set({ second: value }),
          period: () => {
            if (!_value) return;
            const diff = value === "pm" ? 12 : 0;
            return _value.set({ hour: _value.hour % 12 + diff });
          }
        });
        if (!nextTime) return;
        context.set("value", nextTime);
      },
      setValue({ context, event }) {
        if (!(event.value instanceof date.Time)) return;
        context.set("value", event.value);
      },
      clearValue({ context }) {
        context.set("value", null);
      },
      setFocusedValue({ context, event }) {
        context.set("focusedValue", event.value);
      },
      setFocusedColumn({ context, event }) {
        context.set("focusedColumn", event.unit);
      },
      resetFocusedCell({ context }) {
        context.set("focusedColumn", "hour");
        context.set("focusedValue", null);
      },
      clampTimeValue({ context, prop }) {
        const value = context.get("value");
        if (!value) return;
        const nextTime = clampTime(value, prop("min"), prop("max"));
        context.set("value", nextTime);
      },
      setCurrentTime({ context }) {
        context.set("currentTime", getCurrentTime());
      },
      scrollColumnsToTop({ scope }) {
        domQuery.raf(() => {
          const columnEls = getColumnEls(scope);
          for (const columnEl of columnEls) {
            const cellEl = getInitialFocusCell(scope, columnEl.dataset.unit);
            if (!cellEl) continue;
            columnEl.scrollTop = cellEl.offsetTop - 4;
          }
        });
      },
      focusTriggerElement({ scope }) {
        getTriggerEl(scope)?.focus({ preventScroll: true });
      },
      focusInputElement({ scope }) {
        getInputEl(scope)?.focus({ preventScroll: true });
      },
      focusHourColumn({ context, scope }) {
        domQuery.raf(() => {
          const hourEl = getInitialFocusCell(scope, "hour");
          if (!hourEl) return;
          context.set("focusedValue", getCellValue(hourEl));
        });
      },
      focusPreviousCell({ context, scope }) {
        domQuery.raf(() => {
          const cells = getColumnCellEls(scope, context.get("focusedColumn"));
          const focusedEl = getFocusedCell(scope);
          const focusedIndex = focusedEl ? cells.indexOf(focusedEl) : -1;
          const prevCell = utils.prev(cells, focusedIndex, { loop: false });
          if (!prevCell) return;
          context.set("focusedValue", getCellValue(prevCell));
        });
      },
      focusNextCell({ context, scope }) {
        domQuery.raf(() => {
          const cells = getColumnCellEls(scope, context.get("focusedColumn"));
          const focusedEl = getFocusedCell(scope);
          const focusedIndex = focusedEl ? cells.indexOf(focusedEl) : -1;
          const nextCell = utils.next(cells, focusedIndex, { loop: false });
          if (!nextCell) return;
          context.set("focusedValue", getCellValue(nextCell));
        });
      },
      selectFocusedCell({ context, computed }) {
        const current = context.get("value") ?? context.get("currentTime") ?? new date.Time(0);
        let value = context.get("focusedValue");
        let column = context.get("focusedColumn");
        if (column === "hour" && computed("hour12")) {
          value = computed("hour12") ? value + 12 : value;
        } else if (context.get("focusedColumn") === "period") {
          column = "hour";
          const diff = value === "pm" ? 12 : 0;
          value = current.hour % 12 + diff;
        }
        const nextTime = current.set({ [column]: value });
        context.set("value", nextTime);
      },
      focusPreviousColumnCell({ context, scope }) {
        domQuery.raf(() => {
          const columns = getColumnEls(scope);
          const currentColumnEl = getColumnEl(scope, context.get("focusedColumn"));
          const focusedIndex = columns.indexOf(currentColumnEl);
          const prevColumnEl = utils.prev(columns, focusedIndex, { loop: false });
          if (!prevColumnEl) return;
          context.set("focusedColumn", getColumnUnit(prevColumnEl));
        });
      },
      focusNextColumnCell({ context, scope }) {
        domQuery.raf(() => {
          const columns = getColumnEls(scope);
          const currentColumnEl = getColumnEl(scope, context.get("focusedColumn"));
          const focusedIndex = columns.indexOf(currentColumnEl);
          const nextColumnEl = utils.next(columns, focusedIndex, { loop: false });
          if (!nextColumnEl) return;
          context.set("focusedColumn", getColumnUnit(nextColumnEl));
        });
      },
      focusCell({ scope }) {
        queueMicrotask(() => {
          const cellEl = getFocusedCell(scope);
          cellEl?.focus();
        });
      },
      syncFocusedValue({ context, scope }) {
        if (context.get("focusedValue") === null) return;
        queueMicrotask(() => {
          const cellEl = getInitialFocusCell(scope, context.get("focusedColumn"));
          context.set("focusedValue", getCellValue(cellEl));
        });
      }
    }
  }
});
function parse(value) {
  return new date.Time(value.hour, value.minute, value.second, value.millisecond);
}
var props = types.createProps()([
  "dir",
  "disabled",
  "disableLayer",
  "getRootNode",
  "id",
  "ids",
  "locale",
  "max",
  "min",
  "name",
  "onFocusChange",
  "onOpenChange",
  "onValueChange",
  "open",
  "placeholder",
  "positioning",
  "readOnly",
  "steps",
  "value",
  "allowSeconds",
  "defaultValue",
  "defaultOpen"
]);
var splitProps = utils.createSplitProps(props);

exports.anatomy = anatomy;
exports.connect = connect;
exports.machine = machine;
exports.parse = parse;
exports.props = props;
exports.splitProps = splitProps;
