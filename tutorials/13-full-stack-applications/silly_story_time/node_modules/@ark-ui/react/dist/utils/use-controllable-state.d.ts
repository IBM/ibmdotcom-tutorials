export interface UseControllableStateProps<T> {
    value?: T;
    defaultValue?: T;
    onChange?: (value: T) => void;
}
export declare function useControllableState<T>(props: UseControllableStateProps<T>): readonly [T, (value: T) => void | undefined];
