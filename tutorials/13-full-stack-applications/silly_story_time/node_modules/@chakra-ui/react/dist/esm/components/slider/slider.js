"use strict";
"use client";
import { jsx, jsxs } from 'react/jsx-runtime';
import { Slider, useSliderContext } from '@ark-ui/react/slider';
import { forwardRef } from 'react';
import { createSlotRecipeContext } from '../../styled-system/create-slot-recipe-context.js';
import { For } from '../for/for.js';

const {
  withProvider,
  withContext,
  useStyles: useSliderStyles,
  PropsProvider
} = createSlotRecipeContext({ key: "slider" });
const SliderRootProvider = withProvider(Slider.RootProvider, "root", { forwardAsChild: true });
const SliderRoot = withProvider(
  Slider.Root,
  "root",
  { forwardAsChild: true }
);
const SliderPropsProvider = PropsProvider;
const SliderTrack = withContext(
  Slider.Track,
  "track",
  { forwardAsChild: true }
);
const SliderRange = withContext(
  Slider.Range,
  "range",
  { forwardAsChild: true }
);
const SliderThumb = withContext(
  Slider.Thumb,
  "thumb",
  { forwardAsChild: true }
);
const SliderValueText = withContext(Slider.ValueText, "valueText", { forwardAsChild: true });
const SliderLabel = withContext(
  Slider.Label,
  "label",
  { forwardAsChild: true }
);
const SliderMarkerGroup = withContext(Slider.MarkerGroup, "markerGroup", { forwardAsChild: true });
const SliderMarker = withContext(
  Slider.Marker,
  "marker",
  { forwardAsChild: true }
);
const SliderMarkerIndicator = withContext("div", "markerIndicator");
const SliderDraggingIndicator = withContext(Slider.DraggingIndicator, "draggingIndicator", { forwardAsChild: true });
const SliderThumbs = (props) => {
  const api = useSliderContext();
  return /* @__PURE__ */ jsx(For, { each: api.value, children: (_, index) => /* @__PURE__ */ jsx(SliderThumb, { index, ...props, children: /* @__PURE__ */ jsx(SliderHiddenInput, {}) }, index) });
};
const SliderMarks = forwardRef(
  function SliderMarks2(props, ref) {
    const { marks, ...rest } = props;
    if (!marks?.length) return null;
    return /* @__PURE__ */ jsx(SliderMarkerGroup, { ref, ...rest, children: marks.map((mark, index) => {
      const value = typeof mark === "number" ? mark : mark.value;
      const label = typeof mark === "number" ? void 0 : mark.label;
      return /* @__PURE__ */ jsxs(SliderMarker, { value, children: [
        /* @__PURE__ */ jsx(SliderMarkerIndicator, {}),
        label != null && /* @__PURE__ */ jsx("span", { className: "chakra-slider__marker-label", children: label })
      ] }, index);
    }) });
  }
);
const SliderControl = withContext(
  Slider.Control,
  "control",
  { forwardAsChild: true }
);
const SliderContext = Slider.Context;
const SliderHiddenInput = Slider.HiddenInput;

export { SliderContext, SliderControl, SliderDraggingIndicator, SliderHiddenInput, SliderLabel, SliderMarker, SliderMarkerGroup, SliderMarkerIndicator, SliderMarks, SliderPropsProvider, SliderRange, SliderRoot, SliderRootProvider, SliderThumb, SliderThumbs, SliderTrack, SliderValueText, useSliderStyles };
