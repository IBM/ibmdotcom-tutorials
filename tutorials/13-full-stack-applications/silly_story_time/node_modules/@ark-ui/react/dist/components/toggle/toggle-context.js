'use client';
import { useToggleContext } from './use-toggle-context.js';

const ToggleContext = (props) => props.children(useToggleContext());

export { ToggleContext };
