import { ReactNode } from 'react';
import { UseProgressContext } from './use-progress-context';
export interface ProgressContextProps {
    children: (context: UseProgressContext) => ReactNode;
}
export declare const ProgressContext: (props: ProgressContextProps) => ReactNode;
