import { HTMLProps, PolymorphicProps } from '../factory';
import { UseFieldsetProps } from './use-fieldset';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface FieldsetRootBaseProps extends UseFieldsetProps, PolymorphicProps {
}
export interface FieldsetRootProps extends HTMLProps<'fieldset'>, FieldsetRootBaseProps {
}
export declare const FieldsetRoot: ForwardRefExoticComponent<FieldsetRootProps & RefAttributes<HTMLFieldSetElement>>;
