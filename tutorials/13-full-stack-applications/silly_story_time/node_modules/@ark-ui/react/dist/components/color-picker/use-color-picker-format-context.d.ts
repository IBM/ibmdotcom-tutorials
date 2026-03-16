import { ColorFormat } from '@zag-js/color-picker';
import { Provider } from 'react';
export interface UseColorPickerSwatchPropsContext {
    format: ColorFormat;
}
export declare const ColorPickerFormatPropsProvider: Provider<UseColorPickerSwatchPropsContext>, useColorPickerFormatPropsContext: () => UseColorPickerSwatchPropsContext;
