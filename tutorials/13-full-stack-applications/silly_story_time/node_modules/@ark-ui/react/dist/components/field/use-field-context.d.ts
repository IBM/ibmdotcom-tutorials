import { UseFieldReturn } from './use-field';
import { Provider } from 'react';
export interface UseFieldContext extends UseFieldReturn {
}
export declare const FieldProvider: Provider<UseFieldContext>, useFieldContext: () => UseFieldContext;
