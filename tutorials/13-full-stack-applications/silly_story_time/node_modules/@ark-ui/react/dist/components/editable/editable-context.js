'use client';
import { useEditableContext } from './use-editable-context.js';

const EditableContext = (props) => props.children(useEditableContext());

export { EditableContext };
