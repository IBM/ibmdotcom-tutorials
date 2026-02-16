export declare const checkboxSlotRecipe: import("../..").SlotRecipeDefinition<"root" | "indicator" | "control" | "label" | "group", {
    size: {
        xs: {
            root: {
                gap: "1.5";
            };
            label: {
                textStyle: "xs";
            };
            control: {
                boxSize: "3";
            } | undefined;
        };
        sm: {
            root: {
                gap: "2";
            };
            label: {
                textStyle: "sm";
            };
            control: {
                boxSize: "4";
            } | undefined;
        };
        md: {
            root: {
                gap: "2.5";
            };
            label: {
                textStyle: "sm";
            };
            control: {
                boxSize: "5";
                p: "0.5";
            } | undefined;
        };
        lg: {
            root: {
                gap: "3";
            };
            label: {
                textStyle: "md";
            };
            control: {
                boxSize: "6";
                p: "0.5";
            } | undefined;
        };
    };
    variant: {
        outline: {
            control: {
                borderColor: "border";
                "&:is([data-state=checked], [data-state=indeterminate])": {
                    color: "colorPalette.fg";
                    borderColor: "colorPalette.solid";
                };
            } | undefined;
        };
        solid: {
            control: {
                borderColor: "border";
                "&:is([data-state=checked], [data-state=indeterminate])": {
                    bg: "colorPalette.solid";
                    color: "colorPalette.contrast";
                    borderColor: "colorPalette.solid";
                };
            } | undefined;
        };
        subtle: {
            control: {
                bg: "colorPalette.muted";
                borderColor: "colorPalette.muted";
                "&:is([data-state=checked], [data-state=indeterminate])": {
                    color: "colorPalette.fg";
                };
            } | undefined;
        };
    };
}>;
