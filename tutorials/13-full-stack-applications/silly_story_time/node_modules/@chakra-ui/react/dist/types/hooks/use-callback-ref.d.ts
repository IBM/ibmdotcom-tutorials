/**
 * This hook is user-land implementation of the experimental `useEffectEvent` hook.
 * React docs: https://react.dev/learn/separating-events-from-effects#declaring-an-effect-event
 */
export declare function useCallbackRef<Args extends unknown[], Return>(callback: ((...args: Args) => Return) | undefined, deps?: React.DependencyList): (...args: Args) => Return | undefined;
