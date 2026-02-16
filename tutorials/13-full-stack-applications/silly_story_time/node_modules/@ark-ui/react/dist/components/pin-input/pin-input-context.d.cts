import { ReactNode } from 'react';
import { UsePinInputContext } from './use-pin-input-context';
export interface PinInputContextProps {
    children: (context: UsePinInputContext) => ReactNode;
}
export declare const PinInputContext: (props: PinInputContextProps) => ReactNode;
