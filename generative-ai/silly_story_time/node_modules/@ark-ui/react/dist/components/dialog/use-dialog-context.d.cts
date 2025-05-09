import { UseDialogReturn } from './use-dialog';
import { Provider } from 'react';
export interface UseDialogContext extends UseDialogReturn {
}
export declare const DialogProvider: Provider<UseDialogContext>, useDialogContext: () => UseDialogContext;
