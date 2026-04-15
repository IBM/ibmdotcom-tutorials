import { ReactNode } from 'react';
import { UseTourContext } from './use-tour-context';
export interface TourContextProps {
    children: (context: UseTourContext) => ReactNode;
}
export declare const TourContext: (props: TourContextProps) => ReactNode;
