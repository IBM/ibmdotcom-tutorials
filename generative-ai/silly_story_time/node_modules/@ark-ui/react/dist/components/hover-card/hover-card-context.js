'use client';
import { useHoverCardContext } from './use-hover-card-context.js';

const HoverCardContext = (props) => props.children(useHoverCardContext());

export { HoverCardContext };
