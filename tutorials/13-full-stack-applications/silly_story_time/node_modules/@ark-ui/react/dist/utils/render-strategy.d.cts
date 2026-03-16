import { Provider } from 'react';
export interface RenderStrategyProps {
    /**
     * Whether to enable lazy mounting
     * @default false
     */
    lazyMount?: boolean;
    /**
     * Whether to unmount on exit.
     * @default false
     */
    unmountOnExit?: boolean;
}
export declare const RenderStrategyPropsProvider: Provider<RenderStrategyProps>, useRenderStrategyPropsContext: () => RenderStrategyProps;
export declare const splitRenderStrategyProps: <T extends RenderStrategyProps>(props: T) => [RenderStrategyProps, Omit<T, "lazyMount" | "unmountOnExit">];
