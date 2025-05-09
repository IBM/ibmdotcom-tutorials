'use client';
import { useCollapsibleContext } from './use-collapsible-context.js';

const CollapsibleContext = (props) => props.children(useCollapsibleContext());

export { CollapsibleContext };
