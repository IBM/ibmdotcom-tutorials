import { ReactNode } from 'react';
import { UseFieldContext } from './use-field-context';
export interface FieldContextProps {
    children: (context: UseFieldContext) => ReactNode;
}
export declare const FieldContext: (props: FieldContextProps) => ReactNode;
