export declare const nativeSelectSlotRecipe: import("../..").SlotRecipeDefinition<"root" | "indicator" | "field", {
    variant: {
        outline: {
            field: {
                bg: "transparent";
                borderWidth: "1px";
                borderColor: "border";
                _expanded: {
                    borderColor: "border.emphasized";
                };
            } | undefined;
        };
        subtle: {
            field: {
                borderWidth: "1px";
                borderColor: "transparent";
                bg: "bg.muted";
            } | undefined;
        };
        plain: {
            field: {
                bg: "transparent";
                color: "fg";
                focusRingWidth: "2px";
            };
        };
    };
    size: {
        xs: {
            field: {
                textStyle: "xs";
                ps: "2";
                pe: "6";
                height: "6";
            };
            indicator: {
                textStyle: "sm";
                insetEnd: "1.5";
            };
        };
        sm: {
            field: {
                textStyle: "sm";
                ps: "2.5";
                pe: "8";
                height: "8";
            };
            indicator: {
                textStyle: "md";
                insetEnd: "2";
            };
        };
        md: {
            field: {
                textStyle: "sm";
                ps: "3";
                pe: "8";
                height: "10";
            };
            indicator: {
                textStyle: "lg";
                insetEnd: "2";
            };
        };
        lg: {
            field: {
                textStyle: "md";
                ps: "4";
                pe: "8";
                height: "11";
            };
            indicator: {
                textStyle: "xl";
                insetEnd: "3";
            };
        };
        xl: {
            field: {
                textStyle: "md";
                ps: "4.5";
                pe: "10";
                height: "12";
            };
            indicator: {
                textStyle: "xl";
                insetEnd: "3";
            };
        };
    };
}>;
