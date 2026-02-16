'use client';
import { useClipboardContext } from './use-clipboard-context.js';

const ClipboardContext = (props) => props.children(useClipboardContext());

export { ClipboardContext };
