'use client';
import { useFloatingPanelContext } from './use-floating-panel-context.js';

const FloatingPanelContext = (props) => props.children(useFloatingPanelContext());

export { FloatingPanelContext };
