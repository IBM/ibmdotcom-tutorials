'use client';
import { useFieldsetContext } from './use-fieldset-context.js';

const FieldsetContext = (props) => props.children(useFieldsetContext());

export { FieldsetContext };
