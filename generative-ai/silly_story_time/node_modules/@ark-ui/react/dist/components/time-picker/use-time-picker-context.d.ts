import { UseTimePickerReturn } from './use-time-picker';
import { Provider } from 'react';
export interface UseTimePickerContext extends UseTimePickerReturn {
}
export declare const TimePickerProvider: Provider<UseTimePickerContext>, useTimePickerContext: () => UseTimePickerContext;
