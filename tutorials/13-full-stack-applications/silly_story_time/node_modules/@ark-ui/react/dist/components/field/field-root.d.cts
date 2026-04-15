import { HTMLProps, PolymorphicProps } from '../factory';
import { UseFieldProps } from './use-field';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface FieldRootBaseProps extends UseFieldProps, PolymorphicProps {
}
export interface FieldRootProps extends HTMLProps<'div'>, FieldRootBaseProps {
}
export declare const FieldRoot: ForwardRefExoticComponent<FieldRootProps & RefAttributes<HTMLDivElement>>;
