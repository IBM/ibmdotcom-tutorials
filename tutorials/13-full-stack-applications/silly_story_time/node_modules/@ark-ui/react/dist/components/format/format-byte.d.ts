export interface FormatByteProps {
    /**
     * The unit granularity to display
     */
    unit?: 'bit' | 'byte';
    /**
     * The unit display
     */
    unitDisplay?: 'long' | 'short' | 'narrow';
    /**
     * The byte size to format
     */
    value: number;
}
export declare const FormatByte: {
    (props: FormatByteProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
