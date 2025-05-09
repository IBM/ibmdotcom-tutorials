'use client';
import { useTooltipContext } from './use-tooltip-context.js';

const TooltipContext = (props) => props.children(useTooltipContext());

export { TooltipContext };
