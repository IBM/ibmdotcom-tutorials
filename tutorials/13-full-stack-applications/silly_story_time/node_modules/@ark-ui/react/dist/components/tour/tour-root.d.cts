import { ReactNode } from 'react';
import { UsePresenceProps } from '../presence';
import { UseTourReturn } from './use-tour';
export interface TourRootBaseProps extends UsePresenceProps {
    tour: UseTourReturn;
}
export interface TourRootProps extends TourRootBaseProps {
    children?: ReactNode;
}
export declare const TourRoot: (props: TourRootProps) => import("react/jsx-runtime").JSX.Element;
