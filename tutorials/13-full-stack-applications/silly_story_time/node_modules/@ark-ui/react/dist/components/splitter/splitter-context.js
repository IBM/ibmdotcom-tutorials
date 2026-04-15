'use client';
import { useSplitterContext } from './use-splitter-context.js';

const SplitterContext = (props) => props.children(useSplitterContext());

export { SplitterContext };
