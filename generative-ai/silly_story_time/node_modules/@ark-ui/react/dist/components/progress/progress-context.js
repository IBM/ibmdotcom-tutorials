'use client';
import { useProgressContext } from './use-progress-context.js';

const ProgressContext = (props) => props.children(useProgressContext());

export { ProgressContext };
