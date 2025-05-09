import { createAnatomy } from '@zag-js/anatomy';
import { trackPointerMove, getRelativePoint, getDataUrl as getDataUrl$1, query, dataAttr, isLeftClick, isModifierKey, getEventTarget } from '@zag-js/dom-query';
import { createMachine } from '@zag-js/core';
import getStroke from 'perfect-freehand';
import { createProps } from '@zag-js/types';
import { createSplitProps } from '@zag-js/utils';

// src/signature-pad.anatomy.ts
var anatomy = createAnatomy("signature-pad").parts(
  "root",
  "control",
  "segment",
  "segmentPath",
  "guide",
  "clearTrigger",
  "label"
);
var parts = anatomy.build();
var getRootId = (ctx) => ctx.ids?.root ?? `signature-${ctx.id}`;
var getControlId = (ctx) => ctx.ids?.control ?? `signature-control-${ctx.id}`;
var getLabelId = (ctx) => ctx.ids?.label ?? `signature-label-${ctx.id}`;
var getHiddenInputId = (ctx) => ctx.ids?.hiddenInput ?? `signature-input-${ctx.id}`;
var getControlEl = (ctx) => ctx.getById(getControlId(ctx));
var getSegmentEl = (ctx) => query(getControlEl(ctx), "[data-part=segment]");
var getDataUrl = (ctx, options) => {
  return getDataUrl$1(getSegmentEl(ctx), options);
};

// src/signature-pad.connect.ts
function connect(service, normalize) {
  const { state, send, prop, computed, context, scope } = service;
  const drawing = state.matches("drawing");
  const empty = computed("isEmpty");
  const interactive = computed("isInteractive");
  const disabled = prop("disabled");
  const translations = prop("translations");
  return {
    empty,
    drawing,
    currentPath: context.get("currentPath"),
    paths: context.get("paths"),
    clear() {
      send({ type: "CLEAR" });
    },
    getDataUrl(type, quality) {
      if (computed("isEmpty")) return Promise.resolve("");
      return getDataUrl(scope, { type, quality });
    },
    getLabelProps() {
      return normalize.label({
        ...parts.label.attrs,
        id: getLabelId(scope),
        "data-disabled": dataAttr(disabled),
        htmlFor: getHiddenInputId(scope),
        onClick(event) {
          if (!interactive) return;
          if (event.defaultPrevented) return;
          const controlEl = getControlEl(scope);
          controlEl?.focus({ preventScroll: true });
        }
      });
    },
    getRootProps() {
      return normalize.element({
        ...parts.root.attrs,
        "data-disabled": dataAttr(disabled),
        id: getRootId(scope)
      });
    },
    getControlProps() {
      return normalize.element({
        ...parts.control.attrs,
        tabIndex: disabled ? void 0 : 0,
        id: getControlId(scope),
        role: "application",
        "aria-roledescription": "signature pad",
        "aria-label": translations.control,
        "aria-disabled": disabled,
        "data-disabled": dataAttr(disabled),
        onPointerDown(event) {
          if (!isLeftClick(event)) return;
          if (isModifierKey(event)) return;
          if (!interactive) return;
          const target = getEventTarget(event);
          if (target?.closest("[data-part=clear-trigger]")) return;
          event.currentTarget.setPointerCapture(event.pointerId);
          const point = { x: event.clientX, y: event.clientY };
          const controlEl = getControlEl(scope);
          if (!controlEl) return;
          const { offset } = getRelativePoint(point, controlEl);
          send({ type: "POINTER_DOWN", point: offset, pressure: event.pressure });
        },
        onPointerUp(event) {
          if (!interactive) return;
          if (event.currentTarget.hasPointerCapture(event.pointerId)) {
            event.currentTarget.releasePointerCapture(event.pointerId);
          }
        },
        style: {
          position: "relative",
          touchAction: "none",
          userSelect: "none",
          WebkitUserSelect: "none"
        }
      });
    },
    getSegmentProps() {
      return normalize.svg({
        ...parts.segment.attrs,
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          fill: prop("drawing").fill
        }
      });
    },
    getSegmentPathProps(props2) {
      return normalize.path({
        ...parts.segmentPath.attrs,
        d: props2.path
      });
    },
    getGuideProps() {
      return normalize.element({
        ...parts.guide.attrs,
        "data-disabled": dataAttr(disabled)
      });
    },
    getClearTriggerProps() {
      return normalize.button({
        ...parts.clearTrigger.attrs,
        type: "button",
        "aria-label": translations.clearTrigger,
        hidden: !context.get("paths").length || drawing,
        disabled,
        onClick() {
          send({ type: "CLEAR" });
        }
      });
    },
    getHiddenInputProps(props2) {
      return normalize.input({
        id: getHiddenInputId(scope),
        type: "text",
        hidden: true,
        disabled,
        required: prop("required"),
        readOnly: true,
        name: prop("name"),
        value: props2.value
      });
    }
  };
}

// src/get-svg-path.ts
var average = (a, b) => (a + b) / 2;
function getSvgPathFromStroke(points, closed = true) {
  const len = points.length;
  if (len < 4) {
    return "";
  }
  let a = points[0];
  let b = points[1];
  const c = points[2];
  let result = `M${a[0].toFixed(2)},${a[1].toFixed(2)} Q${b[0].toFixed(2)},${b[1].toFixed(2)} ${average(b[0], c[0]).toFixed(2)},${average(
    b[1],
    c[1]
  ).toFixed(2)} T`;
  for (let i = 2, max = len - 1; i < max; i++) {
    a = points[i];
    b = points[i + 1];
    result += `${average(a[0], b[0]).toFixed(2)},${average(a[1], b[1]).toFixed(2)} `;
  }
  if (closed) {
    result += "Z";
  }
  return result;
}

// src/signature-pad.machine.ts
var machine = createMachine({
  props({ props: props2 }) {
    return {
      ...props2,
      drawing: {
        size: 2,
        simulatePressure: false,
        thinning: 0.7,
        smoothing: 0.4,
        streamline: 0.6,
        ...props2.drawing
      },
      translations: {
        control: "signature pad",
        clearTrigger: "clear signature",
        ...props2.translations
      }
    };
  },
  initialState() {
    return "idle";
  },
  context({ prop, bindable }) {
    return {
      paths: bindable(() => ({
        defaultValue: [],
        sync: true,
        onChange(value) {
          prop("onDraw")?.({ paths: value });
        }
      })),
      currentPoints: bindable(() => ({
        defaultValue: []
      })),
      currentPath: bindable(() => ({
        defaultValue: null
      }))
    };
  },
  computed: {
    isInteractive: ({ prop }) => !(prop("disabled") || prop("readOnly")),
    isEmpty: ({ context }) => context.get("paths").length === 0
  },
  on: {
    CLEAR: {
      actions: ["clearPoints", "invokeOnDrawEnd", "focusCanvasEl"]
    }
  },
  states: {
    idle: {
      on: {
        POINTER_DOWN: {
          target: "drawing",
          actions: ["addPoint"]
        }
      }
    },
    drawing: {
      effects: ["trackPointerMove"],
      on: {
        POINTER_MOVE: {
          actions: ["addPoint", "invokeOnDraw"]
        },
        POINTER_UP: {
          target: "idle",
          actions: ["endStroke", "invokeOnDrawEnd"]
        }
      }
    }
  },
  implementations: {
    effects: {
      trackPointerMove({ scope, send }) {
        const doc = scope.getDoc();
        return trackPointerMove(doc, {
          onPointerMove({ event, point }) {
            const controlEl = getControlEl(scope);
            if (!controlEl) return;
            const { offset } = getRelativePoint(point, controlEl);
            send({ type: "POINTER_MOVE", point: offset, pressure: event.pressure });
          },
          onPointerUp() {
            send({ type: "POINTER_UP" });
          }
        });
      }
    },
    actions: {
      addPoint({ context, event, prop }) {
        const nextPoints = [...context.get("currentPoints"), event.point];
        context.set("currentPoints", nextPoints);
        const stroke = getStroke(nextPoints, prop("drawing"));
        context.set("currentPath", getSvgPathFromStroke(stroke));
      },
      endStroke({ context }) {
        context.set("paths", [...context.get("paths"), context.get("currentPath")]);
        context.set("currentPoints", []);
        context.set("currentPath", null);
      },
      clearPoints({ context }) {
        context.set("currentPoints", []);
        context.set("paths", []);
      },
      focusCanvasEl({ scope }) {
        queueMicrotask(() => {
          scope.getActiveElement()?.focus({ preventScroll: true });
        });
      },
      invokeOnDraw({ context, prop }) {
        prop("onDraw")?.({
          paths: [...context.get("paths"), context.get("currentPath")]
        });
      },
      invokeOnDrawEnd({ context, prop, scope, computed }) {
        prop("onDrawEnd")?.({
          paths: [...context.get("paths")],
          getDataUrl(type, quality = 0.92) {
            if (computed("isEmpty")) return Promise.resolve("");
            return getDataUrl(scope, { type, quality });
          }
        });
      }
    }
  }
});
var props = createProps()([
  "dir",
  "disabled",
  "drawing",
  "getRootNode",
  "id",
  "ids",
  "name",
  "onDraw",
  "onDrawEnd",
  "readOnly",
  "required",
  "translations"
]);
var splitProps = createSplitProps(props);

export { anatomy, connect, machine, props, splitProps };
