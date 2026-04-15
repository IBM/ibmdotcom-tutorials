'use client';
import { usePopoverContext } from './use-popover-context.js';

const PopoverContext = (props) => props.children(usePopoverContext());

export { PopoverContext };
