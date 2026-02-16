import { PropsWithChildren, RefObject } from 'react';
export interface PortalProps {
    disabled?: boolean;
    container?: RefObject<HTMLElement | null>;
}
export declare const Portal: (props: PropsWithChildren<PortalProps>) => import("react/jsx-runtime").JSX.Element;
