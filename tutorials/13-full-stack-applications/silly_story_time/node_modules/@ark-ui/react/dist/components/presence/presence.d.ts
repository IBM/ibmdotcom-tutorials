import { HTMLProps, PolymorphicProps } from '../factory';
import { UsePresenceProps } from './use-presence';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface PresenceBaseProps extends UsePresenceProps, PolymorphicProps {
}
export interface PresenceProps extends HTMLProps<'div'>, PresenceBaseProps {
}
export declare const Presence: ForwardRefExoticComponent<PresenceProps & RefAttributes<HTMLDivElement>>;
