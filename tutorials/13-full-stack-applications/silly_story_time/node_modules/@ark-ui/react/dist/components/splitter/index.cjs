'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const splitterContext = require('./splitter-context.cjs');
const splitterPanel = require('./splitter-panel.cjs');
const splitterResizeTrigger = require('./splitter-resize-trigger.cjs');
const splitterRoot = require('./splitter-root.cjs');
const splitterRootProvider = require('./splitter-root-provider.cjs');
const useSplitter = require('./use-splitter.cjs');
const useSplitterContext = require('./use-splitter-context.cjs');
const splitter$1 = require('./splitter.cjs');
const splitter = require('@zag-js/splitter');



exports.SplitterContext = splitterContext.SplitterContext;
exports.SplitterPanel = splitterPanel.SplitterPanel;
exports.SplitterResizeTrigger = splitterResizeTrigger.SplitterResizeTrigger;
exports.SplitterRoot = splitterRoot.SplitterRoot;
exports.SplitterRootProvider = splitterRootProvider.SplitterRootProvider;
exports.useSplitter = useSplitter.useSplitter;
exports.useSplitterContext = useSplitterContext.useSplitterContext;
exports.Splitter = splitter$1;
Object.defineProperty(exports, "splitterAnatomy", {
  enumerable: true,
  get: () => splitter.anatomy
});
