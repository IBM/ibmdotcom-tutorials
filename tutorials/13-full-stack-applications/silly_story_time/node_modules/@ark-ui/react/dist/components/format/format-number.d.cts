export interface FormatNumberProps extends Intl.NumberFormatOptions {
    /**
     * The number to format
     */
    value: number;
}
export declare const FormatNumber: {
    (props: FormatNumberProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
