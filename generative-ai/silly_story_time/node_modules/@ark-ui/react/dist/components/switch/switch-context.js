'use client';
import { useSwitchContext } from './use-switch-context.js';

const SwitchContext = (props) => props.children(useSwitchContext());

export { SwitchContext };
