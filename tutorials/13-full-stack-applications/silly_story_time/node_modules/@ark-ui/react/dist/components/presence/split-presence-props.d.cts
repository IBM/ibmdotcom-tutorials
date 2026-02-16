import { UsePresenceProps } from './use-presence';
export declare const splitPresenceProps: <T extends UsePresenceProps>(props: T) => [UsePresenceProps, Omit<T, "lazyMount" | "unmountOnExit" | "onExitComplete" | "present" | "immediate" | "skipAnimationOnMount">];
