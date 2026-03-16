import { type HTMLChakraProps, type SystemStyleObject } from "../../styled-system";
interface ImageOptions {
    /**
     * How the image to fit within its bounds.
     * It maps to css `object-fit` property.
     * @type SystemStyleObject["objectFit"]
     */
    fit?: SystemStyleObject["objectFit"];
    /**
     * How to align the image within its bounds.
     * It maps to css `object-position` property.
     * @type SystemStyleObject["objectPosition"]
     */
    align?: SystemStyleObject["objectPosition"];
}
export interface ImageProps extends HTMLChakraProps<"img", ImageOptions> {
}
/**
 * React component that renders an image with support
 * for fallbacks
 *
 * @see Docs https://www.chakra-ui.com/docs/components/image
 */
export declare const Image: import("react").ForwardRefExoticComponent<ImageProps & import("react").RefAttributes<HTMLImageElement>>;
export {};
