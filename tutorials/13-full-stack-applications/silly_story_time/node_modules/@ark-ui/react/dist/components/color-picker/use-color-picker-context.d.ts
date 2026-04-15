import { UseColorPickerReturn } from './use-color-picker';
import { Provider } from 'react';
export interface UseColorPickerContext extends UseColorPickerReturn {
}
export declare const ColorPickerProvider: Provider<UseColorPickerContext>, useColorPickerContext: () => UseColorPickerContext;
