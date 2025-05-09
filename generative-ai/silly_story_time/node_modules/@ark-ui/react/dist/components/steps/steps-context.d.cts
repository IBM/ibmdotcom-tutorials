import { ReactNode } from 'react';
import { UseStepsContext } from './use-steps-context';
export interface StepsContextProps {
    children: (context: UseStepsContext) => ReactNode;
}
export declare const StepsContext: {
    (props: StepsContextProps): ReactNode;
    displayName: string;
};
