import type { Dict } from "../../utils";
export interface ForProps<T> {
    /**
     * The array to iterate over
     */
    each: T[] | readonly T[] | undefined;
    /**
     * The fallback content to render when the array is empty
     */
    fallback?: React.ReactNode;
    /**
     * The render function to render each item in the array
     */
    children: (item: Exclude<T, undefined>, index: number) => React.ReactNode;
}
export declare function For<T extends string | number | Dict | undefined>(props: ForProps<T>): React.ReactNode;
