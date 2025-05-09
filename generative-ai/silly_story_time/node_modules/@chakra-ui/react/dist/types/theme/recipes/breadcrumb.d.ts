export declare const breadcrumbSlotRecipe: import("../..").SlotRecipeDefinition<"root" | "item" | "separator" | "link" | "currentLink" | "list" | "ellipsis", {
    variant: {
        underline: {
            link: {
                color: "colorPalette.fg";
                textDecoration: "underline";
                textUnderlineOffset: "0.2em";
                textDecorationColor: "colorPalette.muted";
            };
            currentLink: {
                color: "colorPalette.fg";
            };
        };
        plain: {
            link: {
                color: "fg.muted";
                _hover: {
                    color: "fg";
                };
            };
            currentLink: {
                color: "fg";
            };
        };
    };
    size: {
        sm: {
            list: {
                gap: "1";
                textStyle: "xs";
            };
        };
        md: {
            list: {
                gap: "1.5";
                textStyle: "sm";
            };
        };
        lg: {
            list: {
                gap: "2";
                textStyle: "md";
            };
        };
    };
}>;
