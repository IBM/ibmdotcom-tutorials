import { ReactNode } from 'react';
import { RootNode } from './use-environment-context';
export interface EnvironmentProviderProps {
    children?: ReactNode;
    value?: RootNode | (() => RootNode);
}
export declare const EnvironmentProvider: (props: EnvironmentProviderProps) => import("react/jsx-runtime").JSX.Element;
