import { UsePinInputReturn } from './use-pin-input';
import { Provider } from 'react';
export interface UsePinInputContext extends UsePinInputReturn {
}
export declare const PinInputProvider: Provider<UsePinInputContext>, usePinInputContext: () => UsePinInputContext;
