import { ReactNode } from 'react';
import { UseEditableContext } from './use-editable-context';
export interface EditableContextProps {
    children: (context: UseEditableContext) => ReactNode;
}
export declare const EditableContext: (props: EditableContextProps) => ReactNode;
