import { type HighlightChunk } from "@ark-ui/react/highlight";
import { type JSX } from "react";
import { type SystemStyleObject } from "../../styled-system";
export interface HighlightProps {
    query: string | string[];
    children: string | ((props: HighlightChunk[]) => React.ReactNode);
    styles?: SystemStyleObject;
    ignoreCase?: boolean;
    matchAll?: boolean;
}
/**
 * `Highlight` allows you to highlight substrings of a text.
 *
 * @see Docs https://chakra-ui.com/docs/components/highlight
 */
export declare function Highlight(props: HighlightProps): JSX.Element;
