import { UsePopoverReturn } from './use-popover';
import { Provider } from 'react';
export interface UsePopoverContext extends UsePopoverReturn {
}
export declare const PopoverProvider: Provider<UsePopoverContext>, usePopoverContext: () => UsePopoverContext;
