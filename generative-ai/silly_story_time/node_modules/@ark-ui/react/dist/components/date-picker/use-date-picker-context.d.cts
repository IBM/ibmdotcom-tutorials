import { UseDatePickerReturn } from './use-date-picker';
import { Provider } from 'react';
export interface UseDatePickerContext extends UseDatePickerReturn {
}
export declare const DatePickerProvider: Provider<UseDatePickerContext>, useDatePickerContext: () => UseDatePickerContext;
