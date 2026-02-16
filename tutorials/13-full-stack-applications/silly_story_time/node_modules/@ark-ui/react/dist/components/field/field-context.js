'use client';
import { useFieldContext } from './use-field-context.js';

const FieldContext = (props) => props.children(useFieldContext());

export { FieldContext };
