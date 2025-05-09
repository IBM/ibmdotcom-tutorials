import { createAnatomy } from '@zag-js/anatomy';
import { getPlacement, getPlacementStyles } from '@zag-js/popper';
import { createGuards, createMachine } from '@zag-js/core';
import { trackDismissableElement } from '@zag-js/dismissable';
import { createProps } from '@zag-js/types';
import { createSplitProps } from '@zag-js/utils';

// src/hover-card.anatomy.ts
var anatomy = createAnatomy("hoverCard").parts("arrow", "arrowTip", "trigger", "positioner", "content");
var parts = anatomy.build();

// src/hover-card.dom.ts
var getTriggerId = (ctx) => ctx.ids?.trigger ?? `hover-card:${ctx.id}:trigger`;
var getContentId = (ctx) => ctx.ids?.content ?? `hover-card:${ctx.id}:content`;
var getPositionerId = (ctx) => ctx.ids?.positioner ?? `hover-card:${ctx.id}:popper`;
var getArrowId = (ctx) => ctx.ids?.arrow ?? `hover-card:${ctx.id}:arrow`;
var getTriggerEl = (ctx) => ctx.getById(getTriggerId(ctx));
var getContentEl = (ctx) => ctx.getById(getContentId(ctx));
var getPositionerEl = (ctx) => ctx.getById(getPositionerId(ctx));

// src/hover-card.connect.ts
function connect(service, normalize) {
  const { state, send, prop, context, scope } = service;
  const open = state.hasTag("open");
  const popperStyles = getPlacementStyles({
    ...prop("positioning"),
    placement: context.get("currentPlacement")
  });
  return {
    open,
    setOpen(nextOpen) {
      const open2 = state.hasTag("open");
      if (open2 === nextOpen) return;
      send({ type: nextOpen ? "OPEN" : "CLOSE" });
    },
    reposition(options = {}) {
      send({ type: "POSITIONING.SET", options });
    },
    getArrowProps() {
      return normalize.element({
        id: getArrowId(scope),
        ...parts.arrow.attrs,
        dir: prop("dir"),
        style: popperStyles.arrow
      });
    },
    getArrowTipProps() {
      return normalize.element({
        ...parts.arrowTip.attrs,
        dir: prop("dir"),
        style: popperStyles.arrowTip
      });
    },
    getTriggerProps() {
      return normalize.element({
        ...parts.trigger.attrs,
        dir: prop("dir"),
        "data-placement": context.get("currentPlacement"),
        id: getTriggerId(scope),
        "data-state": open ? "open" : "closed",
        onPointerEnter(event) {
          if (event.pointerType === "touch") return;
          send({ type: "POINTER_ENTER", src: "trigger" });
        },
        onPointerLeave(event) {
          if (event.pointerType === "touch") return;
          send({ type: "POINTER_LEAVE", src: "trigger" });
        },
        onFocus() {
          send({ type: "TRIGGER_FOCUS" });
        },
        onBlur() {
          send({ type: "TRIGGER_BLUR" });
        }
      });
    },
    getPositionerProps() {
      return normalize.element({
        id: getPositionerId(scope),
        ...parts.positioner.attrs,
        dir: prop("dir"),
        style: popperStyles.floating
      });
    },
    getContentProps() {
      return normalize.element({
        ...parts.content.attrs,
        dir: prop("dir"),
        id: getContentId(scope),
        hidden: !open,
        tabIndex: -1,
        "data-state": open ? "open" : "closed",
        "data-placement": context.get("currentPlacement"),
        onPointerEnter(event) {
          if (event.pointerType === "touch") return;
          send({ type: "POINTER_ENTER", src: "content" });
        },
        onPointerLeave(event) {
          if (event.pointerType === "touch") return;
          send({ type: "POINTER_LEAVE", src: "content" });
        }
      });
    }
  };
}
var { not, and } = createGuards();
var machine = createMachine({
  props({ props: props2 }) {
    return {
      openDelay: 700,
      closeDelay: 300,
      ...props2,
      positioning: {
        placement: "bottom",
        ...props2.positioning
      }
    };
  },
  initialState({ prop }) {
    const open = prop("open") || prop("defaultOpen");
    return open ? "open" : "closed";
  },
  context({ prop, bindable }) {
    return {
      open: bindable(() => ({
        defaultValue: prop("defaultOpen"),
        value: prop("open"),
        onChange(value) {
          prop("onOpenChange")?.({ open: value });
        }
      })),
      currentPlacement: bindable(() => ({
        defaultValue: void 0
      })),
      isPointer: bindable(() => ({
        defaultValue: false
      }))
    };
  },
  watch({ track, context, action }) {
    track([() => context.get("open")], () => {
      action(["toggleVisibility"]);
    });
  },
  states: {
    closed: {
      tags: ["closed"],
      entry: ["clearIsPointer"],
      on: {
        "CONTROLLED.OPEN": {
          target: "open"
        },
        POINTER_ENTER: {
          target: "opening",
          actions: ["setIsPointer"]
        },
        TRIGGER_FOCUS: {
          target: "opening"
        },
        OPEN: {
          target: "opening"
        }
      }
    },
    opening: {
      tags: ["closed"],
      effects: ["waitForOpenDelay"],
      on: {
        OPEN_DELAY: [
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
          target: "open"
        },
        "CONTROLLED.CLOSE": {
          target: "closed"
        },
        POINTER_LEAVE: [
          {
            guard: "isOpenControlled",
            // We trigger toggleVisibility manually since the `ctx.open` has not changed yet (at this point)
            actions: ["invokeOnClose", "toggleVisibility"]
          },
          {
            target: "closed",
            actions: ["invokeOnClose"]
          }
        ],
        TRIGGER_BLUR: [
          {
            guard: and("isOpenControlled", not("isPointer")),
            // We trigger toggleVisibility manually since the `ctx.open` has not changed yet (at this point)
            actions: ["invokeOnClose", "toggleVisibility"]
          },
          {
            guard: not("isPointer"),
            target: "closed",
            actions: ["invokeOnClose"]
          }
        ],
        CLOSE: [
          {
            guard: "isOpenControlled",
            // We trigger toggleVisibility manually since the `ctx.open` has not changed yet (at this point)
            actions: ["invokeOnClose", "toggleVisibility"]
          },
          {
            target: "closed",
            actions: ["invokeOnClose"]
          }
        ]
      }
    },
    open: {
      tags: ["open"],
      effects: ["trackDismissableElement", "trackPositioning"],
      on: {
        "CONTROLLED.CLOSE": {
          target: "closed"
        },
        POINTER_ENTER: {
          actions: ["setIsPointer"]
        },
        POINTER_LEAVE: {
          target: "closing"
        },
        CLOSE: [
          {
            guard: "isOpenControlled",
            actions: ["invokeOnClose"]
          },
          {
            target: "closed",
            actions: ["invokeOnClose"]
          }
        ],
        TRIGGER_BLUR: [
          {
            guard: and("isOpenControlled", not("isPointer")),
            actions: ["invokeOnClose"]
          },
          {
            guard: not("isPointer"),
            target: "closed",
            actions: ["invokeOnClose"]
          }
        ],
        "POSITIONING.SET": {
          actions: ["reposition"]
        }
      }
    },
    closing: {
      tags: ["open"],
      effects: ["trackPositioning", "waitForCloseDelay"],
      on: {
        CLOSE_DELAY: [
          {
            guard: "isOpenControlled",
            actions: ["invokeOnClose"]
          },
          {
            target: "closed",
            actions: ["invokeOnClose"]
          }
        ],
        "CONTROLLED.CLOSE": {
          target: "closed"
        },
        "CONTROLLED.OPEN": {
          target: "open"
        },
        POINTER_ENTER: {
          target: "open",
          // no need to invokeOnOpen here because it's still open (but about to close)
          actions: ["setIsPointer"]
        }
      }
    }
  },
  implementations: {
    guards: {
      isPointer: ({ context }) => !!context.get("isPointer"),
      isOpenControlled: ({ prop }) => prop("open") != null
    },
    effects: {
      waitForOpenDelay({ send, prop }) {
        const id = setTimeout(() => {
          send({ type: "OPEN_DELAY" });
        }, prop("openDelay"));
        return () => clearTimeout(id);
      },
      waitForCloseDelay({ send, prop }) {
        const id = setTimeout(() => {
          send({ type: "CLOSE_DELAY" });
        }, prop("closeDelay"));
        return () => clearTimeout(id);
      },
      trackPositioning({ context, prop, scope }) {
        if (!context.get("currentPlacement")) {
          context.set("currentPlacement", prop("positioning").placement);
        }
        const getPositionerEl2 = () => getPositionerEl(scope);
        return getPlacement(getTriggerEl(scope), getPositionerEl2, {
          ...prop("positioning"),
          defer: true,
          onComplete(data) {
            context.set("currentPlacement", data.placement);
          }
        });
      },
      trackDismissableElement({ send, scope, prop }) {
        const getContentEl2 = () => getContentEl(scope);
        return trackDismissableElement(getContentEl2, {
          defer: true,
          exclude: [getTriggerEl(scope)],
          onDismiss() {
            send({ type: "CLOSE", src: "interact-outside" });
          },
          onInteractOutside: prop("onInteractOutside"),
          onPointerDownOutside: prop("onPointerDownOutside"),
          onFocusOutside(event) {
            event.preventDefault();
            prop("onFocusOutside")?.(event);
          }
        });
      }
    },
    actions: {
      invokeOnClose({ prop }) {
        prop("onOpenChange")?.({ open: false });
      },
      invokeOnOpen({ prop }) {
        prop("onOpenChange")?.({ open: true });
      },
      setIsPointer({ context }) {
        context.set("isPointer", true);
      },
      clearIsPointer({ context }) {
        context.set("isPointer", false);
      },
      reposition({ context, prop, scope, event }) {
        const getPositionerEl2 = () => getPositionerEl(scope);
        getPlacement(getTriggerEl(scope), getPositionerEl2, {
          ...prop("positioning"),
          ...event.options,
          defer: true,
          listeners: false,
          onComplete(data) {
            context.set("currentPlacement", data.placement);
          }
        });
      },
      toggleVisibility({ prop, event, send }) {
        queueMicrotask(() => {
          send({ type: prop("open") ? "CONTROLLED.OPEN" : "CONTROLLED.CLOSE", previousEvent: event });
        });
      }
    }
  }
});
var props = createProps()([
  "closeDelay",
  "dir",
  "getRootNode",
  "id",
  "ids",
  "onOpenChange",
  "defaultOpen",
  "open",
  "openDelay",
  "positioning",
  "onInteractOutside",
  "onPointerDownOutside",
  "onFocusOutside"
]);
var splitProps = createSplitProps(props);

export { anatomy, connect, machine, props, splitProps };
