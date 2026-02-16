import { TimeUnit } from '@zag-js/time-picker';
import { Provider } from 'react';
export interface UseTimePickerColumnPropsContext {
    unit: TimeUnit;
}
export declare const TimePickerColumnPropsProvider: Provider<UseTimePickerColumnPropsContext>, useTimePickerColumnPropsContext: () => UseTimePickerColumnPropsContext;
