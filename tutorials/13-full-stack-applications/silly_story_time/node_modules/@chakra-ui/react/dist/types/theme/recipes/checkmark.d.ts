export declare const checkmarkRecipe: import("../..").RecipeDefinition<{
    size: {
        xs: {
            boxSize: "3";
        };
        sm: {
            boxSize: "4";
        };
        md: {
            boxSize: "5";
            p: "0.5";
        };
        lg: {
            boxSize: "6";
            p: "0.5";
        };
    };
    variant: {
        solid: {
            borderColor: "border";
            "&:is([data-state=checked], [data-state=indeterminate])": {
                bg: "colorPalette.solid";
                color: "colorPalette.contrast";
                borderColor: "colorPalette.solid";
            };
        };
        outline: {
            borderColor: "border";
            "&:is([data-state=checked], [data-state=indeterminate])": {
                color: "colorPalette.fg";
                borderColor: "colorPalette.solid";
            };
        };
        subtle: {
            bg: "colorPalette.muted";
            borderColor: "colorPalette.muted";
            "&:is([data-state=checked], [data-state=indeterminate])": {
                color: "colorPalette.fg";
            };
        };
        plain: {
            "&:is([data-state=checked], [data-state=indeterminate])": {
                color: "colorPalette.fg";
            };
        };
        inverted: {
            borderColor: "border";
            color: "colorPalette.fg";
            "&:is([data-state=checked], [data-state=indeterminate])": {
                borderColor: "colorPalette.solid";
            };
        };
    };
}>;
