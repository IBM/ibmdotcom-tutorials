import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface PinInputLabelBaseProps extends PolymorphicProps {
}
export interface PinInputLabelProps extends HTMLProps<'label'>, PinInputLabelBaseProps {
}
export declare const PinInputLabel: ForwardRefExoticComponent<PinInputLabelProps & RefAttributes<HTMLLabelElement>>;
