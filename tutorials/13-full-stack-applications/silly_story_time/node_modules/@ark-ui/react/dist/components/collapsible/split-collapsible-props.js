'use client';
import { createSplitProps } from '../../utils/create-split-props.js';

const splitCollapsibleProps = (props) => createSplitProps()(props, [
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

export { splitCollapsibleProps };
