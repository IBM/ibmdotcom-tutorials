import { ReactNode } from 'react';
import { UseStepsItemContext } from './use-steps-item-context';
export interface StepsItemContextProps {
    children: (context: UseStepsItemContext) => ReactNode;
}
export declare const StepsItemContext: {
    (props: StepsItemContextProps): ReactNode;
    displayName: string;
};
