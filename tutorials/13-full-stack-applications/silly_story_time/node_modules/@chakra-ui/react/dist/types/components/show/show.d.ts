import { type JSX } from "react";
export interface ShowProps<T> {
    /**
     * If `true`, it'll render the `children` prop
     */
    when: T | null | undefined;
    /**
     * The fallback content to render if `when` is `false`
     */
    fallback?: React.ReactNode;
    /**
     * The children to render if `when` is `true`
     */
    children: React.ReactNode | ((props: T) => React.ReactNode);
}
export declare function Show<T>(props: ShowProps<T>): JSX.Element;
