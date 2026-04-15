import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface PinInputControlBaseProps extends PolymorphicProps {
}
export interface PinInputControlProps extends HTMLProps<'div'>, PinInputControlBaseProps {
}
export declare const PinInputControl: ForwardRefExoticComponent<PinInputControlProps & RefAttributes<HTMLDivElement>>;
