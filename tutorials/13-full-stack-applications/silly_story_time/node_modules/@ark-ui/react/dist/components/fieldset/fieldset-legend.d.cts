import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface FieldsetLegendBaseProps extends PolymorphicProps {
}
export interface FieldsetLegendProps extends HTMLProps<'legend'>, FieldsetLegendBaseProps {
}
export declare const FieldsetLegend: ForwardRefExoticComponent<FieldsetLegendProps & RefAttributes<HTMLLegendElement>>;
