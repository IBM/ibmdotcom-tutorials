import { ViewProps } from '@zag-js/date-picker';
import { Provider } from 'react';
export interface UseDatePickerViewContext extends Required<ViewProps> {
}
export declare const DatePickerViewPropsProvider: Provider<UseDatePickerViewContext>, useDatePickerViewPropsContext: () => UseDatePickerViewContext;
