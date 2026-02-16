import { HTMLProps, PolymorphicProps } from '../factory';
import { UseToggleProps } from './use-toggle';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface ToggleRootBaseProps extends UseToggleProps, PolymorphicProps {
}
export interface ToggleRootProps extends HTMLProps<'button'>, ToggleRootBaseProps {
}
export declare const ToggleRoot: ForwardRefExoticComponent<ToggleRootProps & RefAttributes<HTMLButtonElement>>;
