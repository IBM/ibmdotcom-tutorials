'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createSplitProps = require('../../utils/create-split-props.cjs');

const splitPresenceProps = (props) => createSplitProps.createSplitProps()(props, [
  "immediate",
  "lazyMount",
  "onExitComplete",
  "present",
  "skipAnimationOnMount",
  "unmountOnExit"
]);

exports.splitPresenceProps = splitPresenceProps;
