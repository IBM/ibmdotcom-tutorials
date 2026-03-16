'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createSplitProps = require('../../utils/create-split-props.cjs');

const splitCollapsibleProps = (props) => createSplitProps.createSplitProps()(props, [
  "defaultOpen",
  "disabled",
  "id",
  "ids",
  "lazyMount",
  "onExitComplete",
  "onOpenChange",
  "open",
  "unmountOnExit"
]);

exports.splitCollapsibleProps = splitCollapsibleProps;
