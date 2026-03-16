import { type HTMLChakraProps, type SystemStyleObject } from "../../styled-system";
export interface GridOptions {
    templateColumns?: SystemStyleObject["gridTemplateColumns"];
    autoFlow?: SystemStyleObject["gridAutoFlow"];
    autoRows?: SystemStyleObject["gridAutoRows"];
    autoColumns?: SystemStyleObject["gridAutoColumns"];
    templateRows?: SystemStyleObject["gridTemplateRows"];
    templateAreas?: SystemStyleObject["gridTemplateAreas"];
    column?: SystemStyleObject["gridColumn"];
    row?: SystemStyleObject["gridRow"];
    inline?: boolean;
}
export interface GridProps extends Omit<HTMLChakraProps<"div">, keyof GridOptions>, GridOptions {
}
export declare const Grid: import("react").ForwardRefExoticComponent<GridProps & import("react").RefAttributes<HTMLDivElement>>;
