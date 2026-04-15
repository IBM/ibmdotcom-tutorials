export declare const blockquoteSlotRecipe: import("../..").SlotRecipeDefinition<"root" | "content" | "icon" | "caption", {
    justify: {
        start: {
            root: {
                alignItems: "flex-start";
                textAlign: "start";
            };
        };
        center: {
            root: {
                alignItems: "center";
                textAlign: "center";
            };
        };
        end: {
            root: {
                alignItems: "flex-end";
                textAlign: "end";
            };
        };
    };
    variant: {
        subtle: {
            root: {
                paddingX: "5";
                borderStartWidth: "4px";
                borderStartColor: "colorPalette.muted";
            };
            icon: {
                color: "colorPalette.fg";
            };
        };
        solid: {
            root: {
                paddingX: "5";
                borderStartWidth: "4px";
                borderStartColor: "colorPalette.solid";
            };
            icon: {
                color: "colorPalette.solid";
            };
        };
        plain: {
            root: {
                paddingX: "5";
            };
            icon: {
                color: "colorPalette.solid";
            };
        };
    };
}>;
