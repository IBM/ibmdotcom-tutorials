"use strict";
'use strict';

var slider = require('./slider.cjs');
var slider$1 = require('@ark-ui/react/slider');
var namespace = require('./namespace.cjs');



exports.SliderContext = slider.SliderContext;
exports.SliderControl = slider.SliderControl;
exports.SliderDraggingIndicator = slider.SliderDraggingIndicator;
exports.SliderHiddenInput = slider.SliderHiddenInput;
exports.SliderLabel = slider.SliderLabel;
exports.SliderMarker = slider.SliderMarker;
exports.SliderMarkerGroup = slider.SliderMarkerGroup;
exports.SliderMarkerIndicator = slider.SliderMarkerIndicator;
exports.SliderPropsProvider = slider.SliderPropsProvider;
exports.SliderRange = slider.SliderRange;
exports.SliderRoot = slider.SliderRoot;
exports.SliderRootProvider = slider.SliderRootProvider;
exports.SliderThumb = slider.SliderThumb;
exports.SliderTrack = slider.SliderTrack;
exports.SliderValueText = slider.SliderValueText;
exports.useSliderStyles = slider.useSliderStyles;
Object.defineProperty(exports, "useSlider", {
  enumerable: true,
  get: function () { return slider$1.useSlider; }
});
Object.defineProperty(exports, "useSliderContext", {
  enumerable: true,
  get: function () { return slider$1.useSliderContext; }
});
exports.Slider = namespace;
