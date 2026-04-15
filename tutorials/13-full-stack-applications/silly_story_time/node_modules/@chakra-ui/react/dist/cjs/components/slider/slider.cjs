"use strict";
"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var slider = require('@ark-ui/react/slider');
var React = require('react');
var createSlotRecipeContext = require('../../styled-system/create-slot-recipe-context.cjs');
var _for = require('../for/for.cjs');

const {
  withProvider,
  withContext,
  useStyles: useSliderStyles,
  PropsProvider
} = createSlotRecipeContext.createSlotRecipeContext({ key: "slider" });
const SliderRootProvider = withProvider(slider.Slider.RootProvider, "root", { forwardAsChild: true });
const SliderRoot = withProvider(
  slider.Slider.Root,
  "root",
  { forwardAsChild: true }
);
const SliderPropsProvider = PropsProvider;
const SliderTrack = withContext(
  slider.Slider.Track,
  "track",
  { forwardAsChild: true }
);
const SliderRange = withContext(
  slider.Slider.Range,
  "range",
  { forwardAsChild: true }
);
const SliderThumb = withContext(
  slider.Slider.Thumb,
  "thumb",
  { forwardAsChild: true }
);
const SliderValueText = withContext(slider.Slider.ValueText, "valueText", { forwardAsChild: true });
const SliderLabel = withContext(
  slider.Slider.Label,
  "label",
  { forwardAsChild: true }
);
const SliderMarkerGroup = withContext(slider.Slider.MarkerGroup, "markerGroup", { forwardAsChild: true });
const SliderMarker = withContext(
  slider.Slider.Marker,
  "marker",
  { forwardAsChild: true }
);
const SliderMarkerIndicator = withContext("div", "markerIndicator");
const SliderDraggingIndicator = withContext(slider.Slider.DraggingIndicator, "draggingIndicator", { forwardAsChild: true });
const SliderThumbs = (props) => {
  const api = slider.useSliderContext();
  return /* @__PURE__ */ jsxRuntime.jsx(_for.For, { each: api.value, children: (_, index) => /* @__PURE__ */ jsxRuntime.jsx(SliderThumb, { index, ...props, children: /* @__PURE__ */ jsxRuntime.jsx(SliderHiddenInput, {}) }, index) });
};
const SliderMarks = React.forwardRef(
  function SliderMarks2(props, ref) {
    const { marks, ...rest } = props;
    if (!marks?.length) return null;
    return /* @__PURE__ */ jsxRuntime.jsx(SliderMarkerGroup, { ref, ...rest, children: marks.map((mark, index) => {
      const value = typeof mark === "number" ? mark : mark.value;
      const label = typeof mark === "number" ? void 0 : mark.label;
      return /* @__PURE__ */ jsxRuntime.jsxs(SliderMarker, { value, children: [
        /* @__PURE__ */ jsxRuntime.jsx(SliderMarkerIndicator, {}),
        label != null && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "chakra-slider__marker-label", children: label })
      ] }, index);
    }) });
  }
);
const SliderControl = withContext(
  slider.Slider.Control,
  "control",
  { forwardAsChild: true }
);
const SliderContext = slider.Slider.Context;
const SliderHiddenInput = slider.Slider.HiddenInput;

exports.SliderContext = SliderContext;
exports.SliderControl = SliderControl;
exports.SliderDraggingIndicator = SliderDraggingIndicator;
exports.SliderHiddenInput = SliderHiddenInput;
exports.SliderLabel = SliderLabel;
exports.SliderMarker = SliderMarker;
exports.SliderMarkerGroup = SliderMarkerGroup;
exports.SliderMarkerIndicator = SliderMarkerIndicator;
exports.SliderMarks = SliderMarks;
exports.SliderPropsProvider = SliderPropsProvider;
exports.SliderRange = SliderRange;
exports.SliderRoot = SliderRoot;
exports.SliderRootProvider = SliderRootProvider;
exports.SliderThumb = SliderThumb;
exports.SliderThumbs = SliderThumbs;
exports.SliderTrack = SliderTrack;
exports.SliderValueText = SliderValueText;
exports.useSliderStyles = useSliderStyles;
