'use client';
import { useToggleGroupContext } from './use-toggle-group-context.js';

const ToggleGroupContext = (props) => props.children(useToggleGroupContext());

export { ToggleGroupContext };
