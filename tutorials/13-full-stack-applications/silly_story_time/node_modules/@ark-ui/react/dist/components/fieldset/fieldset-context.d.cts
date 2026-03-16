import { ReactNode } from 'react';
import { UseFieldsetContext } from './use-fieldset-context';
export interface FieldsetContextProps {
    children: (context: UseFieldsetContext) => ReactNode;
}
export declare const FieldsetContext: (props: FieldsetContextProps) => ReactNode;
