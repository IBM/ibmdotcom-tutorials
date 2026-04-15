import * as React from "react";
import { type HTMLChakraProps, type RecipeProps, type UnstyledProp } from "../../styled-system";
import type { CircleProps } from "../box";
import type { StackProps } from "../stack";
export interface SkeletonProps extends HTMLChakraProps<"div">, RecipeProps<"skeleton">, UnstyledProp {
}
export declare const Skeleton: React.ForwardRefExoticComponent<SkeletonProps & React.RefAttributes<HTMLDivElement>>;
export declare const SkeletonPropsProvider: React.Provider<SkeletonProps>;
export interface SkeletonCircleProps extends SkeletonProps {
    size?: CircleProps["size"];
}
export declare const SkeletonCircle: React.ForwardRefExoticComponent<SkeletonCircleProps & React.RefAttributes<HTMLDivElement>>;
export interface SkeletonTextProps extends SkeletonProps {
    noOfLines?: number;
    rootProps?: StackProps;
}
export declare const SkeletonText: React.ForwardRefExoticComponent<SkeletonTextProps & React.RefAttributes<HTMLDivElement>>;
