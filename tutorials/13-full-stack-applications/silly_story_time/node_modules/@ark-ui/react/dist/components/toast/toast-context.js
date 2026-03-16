'use client';
import { useToastContext } from './use-toast-context.js';

const ToastContext = (props) => props.children(useToastContext());

export { ToastContext };
