import { ReactNode } from 'react';
interface FrameContentProps {
    onMount?(): void;
    onUnmount?(): void;
    children?: React.ReactNode;
}
export declare const FrameContent: (props: FrameContentProps) => ReactNode;
export {};
