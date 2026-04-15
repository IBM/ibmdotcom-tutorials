import { ReactNode } from 'react';
import { UseClipboardContext } from './use-clipboard-context';
export interface ClipboardContextProps {
    children: (context: UseClipboardContext) => ReactNode;
}
export declare const ClipboardContext: (props: ClipboardContextProps) => ReactNode;
