'use strict';

var anatomy$1 = require('@zag-js/anatomy');
var domQuery = require('@zag-js/dom-query');
var utils = require('@zag-js/utils');
var core = require('@zag-js/core');
var types = require('@zag-js/types');

// src/steps.anatomy.ts
var anatomy = anatomy$1.createAnatomy("steps").parts(
  "root",
  "list",
  "item",
  "trigger",
  "indicator",
  "separator",
  "content",
  "nextTrigger",
  "prevTrigger",
  "progress"
);
var parts = anatomy.build();

// src/steps.dom.ts
var getRootId = (ctx) => ctx.ids?.root ?? `steps:${ctx.id}`;
var getListId = (ctx) => ctx.ids?.list ?? `steps:${ctx.id}:list`;
var getTriggerId = (ctx, index) => ctx.ids?.triggerId?.(index) ?? `steps:${ctx.id}:trigger:${index}`;
var getContentId = (ctx, index) => ctx.ids?.contentId?.(index) ?? `steps:${ctx.id}:content:${index}`;

// src/steps.connect.ts
function connect(service, normalize) {
  const { context, send, computed, prop, scope } = service;
  const step = context.get("step");
  const count = prop("count");
  const percent = computed("percent");
  const hasNextStep = computed("hasNextStep");
  const hasPrevStep = computed("hasPrevStep");
  const getItemState = (props2) => ({
    triggerId: getTriggerId(scope, props2.index),
    contentId: getContentId(scope, props2.index),
    current: props2.index === step,
    completed: props2.index < step,
    incomplete: props2.index > step,
    index: props2.index,
    first: props2.index === 0,
    last: props2.index === count - 1
  });
  const goToNextStep = () => {
    send({ type: "STEP.NEXT", src: "next.trigger.click" });
  };
  const goToPrevStep = () => {
    send({ type: "STEP.PREV", src: "prev.trigger.click" });
  };
  const resetStep = () => {
    send({ type: "STEP.RESET", src: "reset.trigger.click" });
  };
  const setStep = (value) => {
    send({ type: "STEP.SET", value, src: "api.setValue" });
  };
  return {
    value: step,
    count,
    percent,
    hasNextStep,
    hasPrevStep,
    isCompleted: computed("completed"),
    goToNextStep,
    goToPrevStep,
    resetStep,
    getItemState,
    setStep,
    getRootProps() {
      return normalize.element({
        ...parts.root.attrs,
        id: getRootId(scope),
        dir: prop("dir"),
        "data-orientation": prop("orientation"),
        style: {
          "--percent": `${percent}%`
        }
      });
    },
    getListProps() {
      const arr = utils.fromLength(count);
      const triggerIds = arr.map((_, index) => getTriggerId(scope, index));
      return normalize.element({
        ...parts.list.attrs,
        dir: prop("dir"),
        id: getListId(scope),
        role: "tablist",
        "aria-owns": triggerIds.join(" "),
        "aria-orientation": prop("orientation"),
        "data-orientation": prop("orientation")
      });
    },
    getItemProps(props2) {
      const itemState = getItemState(props2);
      return normalize.element({
        ...parts.item.attrs,
        dir: prop("dir"),
        "aria-current": itemState.current ? "step" : void 0,
        "data-orientation": prop("orientation")
      });
    },
    getTriggerProps(props2) {
      const itemState = getItemState(props2);
      return normalize.button({
        ...parts.trigger.attrs,
        id: itemState.triggerId,
        role: "tab",
        dir: prop("dir"),
        tabIndex: !prop("linear") || itemState.current ? 0 : -1,
        "aria-selected": itemState.current,
        "aria-controls": itemState.contentId,
        "data-state": itemState.current ? "open" : "closed",
        "data-orientation": prop("orientation"),
        "data-complete": domQuery.dataAttr(itemState.completed),
        "data-current": domQuery.dataAttr(itemState.current),
        "data-incomplete": domQuery.dataAttr(itemState.incomplete),
        onClick(event) {
          if (event.defaultPrevented) return;
          if (prop("linear")) return;
          send({ type: "STEP.SET", value: props2.index, src: "trigger.click" });
        }
      });
    },
    getContentProps(props2) {
      const itemState = getItemState(props2);
      return normalize.element({
        ...parts.content.attrs,
        dir: prop("dir"),
        id: itemState.contentId,
        role: "tabpanel",
        tabIndex: 0,
        hidden: !itemState.current,
        "data-state": itemState.current ? "open" : "closed",
        "data-orientation": prop("orientation"),
        "aria-labelledby": itemState.triggerId
      });
    },
    getIndicatorProps(props2) {
      const itemState = getItemState(props2);
      return normalize.element({
        ...parts.indicator.attrs,
        dir: prop("dir"),
        "aria-hidden": true,
        "data-complete": domQuery.dataAttr(itemState.completed),
        "data-current": domQuery.dataAttr(itemState.current),
        "data-incomplete": domQuery.dataAttr(itemState.incomplete)
      });
    },
    getSeparatorProps(props2) {
      const itemState = getItemState(props2);
      return normalize.element({
        ...parts.separator.attrs,
        dir: prop("dir"),
        "data-orientation": prop("orientation"),
        "data-complete": domQuery.dataAttr(itemState.completed),
        "data-current": domQuery.dataAttr(itemState.current),
        "data-incomplete": domQuery.dataAttr(itemState.incomplete)
      });
    },
    getNextTriggerProps() {
      return normalize.button({
        ...parts.nextTrigger.attrs,
        dir: prop("dir"),
        type: "button",
        disabled: !hasNextStep,
        onClick(event) {
          if (event.defaultPrevented) return;
          goToNextStep();
        }
      });
    },
    getPrevTriggerProps() {
      return normalize.button({
        dir: prop("dir"),
        ...parts.prevTrigger.attrs,
        type: "button",
        disabled: !hasPrevStep,
        onClick(event) {
          if (event.defaultPrevented) return;
          goToPrevStep();
        }
      });
    },
    getProgressProps() {
      return normalize.element({
        dir: prop("dir"),
        ...parts.progress.attrs,
        role: "progressbar",
        "aria-valuenow": percent,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuetext": `${percent}% complete`,
        "data-complete": domQuery.dataAttr(percent === 100)
      });
    }
  };
}
var machine = core.createMachine({
  props({ props: props2 }) {
    return {
      defaultStep: 0,
      count: 1,
      linear: false,
      orientation: "horizontal",
      ...props2
    };
  },
  context({ prop, bindable }) {
    return {
      step: bindable(() => ({
        defaultValue: prop("defaultStep"),
        value: prop("step"),
        onChange(value) {
          prop("onStepChange")?.({ step: value });
          const completed = value == prop("count");
          if (completed) prop("onStepComplete")?.();
        }
      }))
    };
  },
  computed: {
    percent: ({ context, prop }) => context.get("step") / prop("count") * 100,
    hasNextStep: ({ context, prop }) => context.get("step") < prop("count"),
    hasPrevStep: ({ context }) => context.get("step") > 0,
    completed: ({ context, prop }) => context.get("step") === prop("count")
  },
  initialState() {
    return "idle";
  },
  entry: ["validateStep"],
  states: {
    idle: {
      on: {
        "STEP.SET": {
          actions: ["setStep"]
        },
        "STEP.NEXT": {
          actions: ["goToNextStep"]
        },
        "STEP.PREV": {
          actions: ["goToPrevStep"]
        },
        "STEP.RESET": {
          actions: ["resetStep"]
        }
      }
    }
  },
  implementations: {
    actions: {
      goToNextStep({ context, prop }) {
        const value = Math.min(context.get("step") + 1, prop("count"));
        context.set("step", value);
      },
      goToPrevStep({ context }) {
        const value = Math.max(context.get("step") - 1, 0);
        context.set("step", value);
      },
      resetStep({ context }) {
        context.set("step", 0);
      },
      setStep({ context, event }) {
        context.set("step", event.value);
      },
      validateStep({ context, prop }) {
        validateStep(prop("count"), context.get("step"));
      }
    }
  }
});
var validateStep = (count, step) => {
  if (!utils.isValueWithinRange(step, 0, count)) {
    throw new RangeError(`[zag-js/steps] step index ${step} is out of bounds`);
  }
};
var props = types.createProps()([
  "count",
  "dir",
  "getRootNode",
  "id",
  "ids",
  "linear",
  "onStepChange",
  "onStepComplete",
  "orientation",
  "step",
  "defaultStep"
]);
var splitProps = utils.createSplitProps(props);

exports.anatomy = anatomy;
exports.connect = connect;
exports.machine = machine;
exports.props = props;
exports.splitProps = splitProps;
