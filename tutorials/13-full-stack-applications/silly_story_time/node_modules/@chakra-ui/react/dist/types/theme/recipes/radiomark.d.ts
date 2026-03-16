export declare const radiomarkRecipe: import("../..").RecipeDefinition<{
    variant: {
        solid: {
            borderWidth: "1px";
            borderColor: "border";
            _checked: {
                bg: "colorPalette.solid";
                color: "colorPalette.contrast";
                borderColor: "colorPalette.solid";
            };
        };
        subtle: {
            borderWidth: "1px";
            bg: "colorPalette.muted";
            borderColor: "colorPalette.muted";
            color: "transparent";
            _checked: {
                color: "colorPalette.fg";
            };
        };
        outline: {
            borderWidth: "1px";
            borderColor: "inherit";
            _checked: {
                color: "colorPalette.fg";
                borderColor: "colorPalette.solid";
            };
            "& .dot": {
                scale: "0.6";
            };
        };
        inverted: {
            bg: "bg";
            borderWidth: "1px";
            borderColor: "inherit";
            _checked: {
                color: "colorPalette.solid";
                borderColor: "currentcolor";
            };
        };
    };
    size: {
        xs: {
            boxSize: "3";
        };
        sm: {
            boxSize: "4";
        };
        md: {
            boxSize: "5";
        };
        lg: {
            boxSize: "6";
        };
    };
}>;
