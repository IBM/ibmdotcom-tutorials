export declare const textareaRecipe: import("../..").RecipeDefinition<{
    size: {
        xs: {
            textStyle: "xs";
            px: "2";
            py: "1.5";
            scrollPaddingBottom: "1.5";
        };
        sm: {
            textStyle: "sm";
            px: "2.5";
            py: "2";
            scrollPaddingBottom: "2";
        };
        md: {
            textStyle: "sm";
            px: "3";
            py: "2";
            scrollPaddingBottom: "2";
        };
        lg: {
            textStyle: "md";
            px: "4";
            py: "3";
            scrollPaddingBottom: "3";
        };
        xl: {
            textStyle: "md";
            px: "4.5";
            py: "3.5";
            scrollPaddingBottom: "3.5";
        };
    };
    variant: {
        outline: {
            bg: "transparent";
            borderWidth: "1px";
            borderColor: "border";
            focusVisibleRing: "inside";
        };
        subtle: {
            borderWidth: "1px";
            borderColor: "transparent";
            bg: "bg.muted";
            focusVisibleRing: "inside";
        };
        flushed: {
            bg: "transparent";
            borderBottomWidth: "1px";
            borderBottomColor: "border";
            borderRadius: "0";
            px: "0";
            _focusVisible: {
                borderColor: "var(--focus-color)";
                boxShadow: "0px 1px 0px 0px var(--focus-color)";
            };
        };
    };
}>;
