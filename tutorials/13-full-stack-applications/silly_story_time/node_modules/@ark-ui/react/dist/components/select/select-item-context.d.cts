import { ReactNode } from 'react';
import { UseSelectItemContext } from './use-select-item-context';
export interface SelectItemContextProps {
    children: (context: UseSelectItemContext) => ReactNode;
}
export declare const SelectItemContext: (props: SelectItemContextProps) => ReactNode;
