import { StepAction } from '@zag-js/tour';
import { ReactNode } from 'react';
export interface TourActionsProps {
    children: (actions: StepAction[]) => ReactNode;
}
export declare const TourActions: (props: TourActionsProps) => ReactNode;
