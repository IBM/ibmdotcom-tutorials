import { UseClipboardReturn } from './use-clipboard';
import { Provider } from 'react';
export interface UseClipboardContext extends UseClipboardReturn {
}
export declare const ClipboardProvider: Provider<UseClipboardContext>, useClipboardContext: () => UseClipboardContext;
