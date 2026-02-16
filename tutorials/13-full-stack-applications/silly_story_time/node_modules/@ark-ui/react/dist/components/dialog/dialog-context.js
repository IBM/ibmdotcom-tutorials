'use client';
import { useDialogContext } from './use-dialog-context.js';

const DialogContext = (props) => props.children(useDialogContext());

export { DialogContext };
