import { UseEditableReturn } from './use-editable';
import { Provider } from 'react';
export interface UseEditableContext extends UseEditableReturn {
}
export declare const EditableProvider: Provider<UseEditableContext>, useEditableContext: () => UseEditableContext;
