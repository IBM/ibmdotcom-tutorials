import { ReactNode } from 'react';
import { UseColorPickerContext } from './use-color-picker-context';
export interface ColorPickerContextProps {
    children: (context: UseColorPickerContext) => ReactNode;
}
export declare const ColorPickerContext: (props: ColorPickerContextProps) => ReactNode;
