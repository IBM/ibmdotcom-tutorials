import { ReactNode } from 'react';
import { UseSplitterContext } from './use-splitter-context';
export interface SplitterContextProps {
    children: (context: UseSplitterContext) => ReactNode;
}
export declare const SplitterContext: (props: SplitterContextProps) => ReactNode;
