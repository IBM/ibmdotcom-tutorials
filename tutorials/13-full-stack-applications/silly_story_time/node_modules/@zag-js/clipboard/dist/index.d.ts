import * as _zag_js_anatomy from '@zag-js/anatomy';
import { RequiredBy, CommonProperties, PropTypes, NormalizeProps } from '@zag-js/types';
import * as _zag_js_core from '@zag-js/core';
import { Service, Machine } from '@zag-js/core';

declare const anatomy: _zag_js_anatomy.AnatomyInstance<"root" | "control" | "trigger" | "indicator" | "input" | "label">;

interface CopyStatusDetails {
    copied: boolean;
}
interface ValueChangeDetails {
    value: string;
}
type ElementIds = Partial<{
    root: string;
    input: string;
    label: string;
}>;
interface ClipboardProps extends CommonProperties {
    /**
     * The ids of the elements in the clipboard. Useful for composition.
     */
    ids?: ElementIds | undefined;
    /**
     * The controlled value of the clipboard
     */
    value?: string | undefined;
    /**
     * The initial value to be copied to the clipboard when rendered.
     * Use when you don't need to control the value of the clipboard.
     */
    defaultValue?: string | undefined;
    /**
     * The function to be called when the value changes
     */
    onValueChange?: ((details: ValueChangeDetails) => void) | undefined;
    /**
     * The function to be called when the value is copied to the clipboard
     */
    onStatusChange?: ((details: CopyStatusDetails) => void) | undefined;
    /**
     * The timeout for the copy operation
     * @default 3000
     */
    timeout?: number | undefined;
}
interface ClipboardSchema {
    state: "idle" | "copied";
    props: RequiredBy<ClipboardProps, "timeout">;
    context: {
        value: string;
    };
    effect: string;
    action: string;
    guard: string;
}
type ClipboardService = Service<ClipboardSchema>;
type ClipboardMachine = Machine<ClipboardSchema>;
interface IndicatorProps {
    copied: boolean;
}
interface ClipboardApi<T extends PropTypes = PropTypes> {
    /**
     * Whether the value has been copied to the clipboard
     */
    copied: boolean;
    /**
     * The value to be copied to the clipboard
     */
    value: string;
    /**
     * Set the value to be copied to the clipboard
     */
    setValue(value: string): void;
    /**
     * Copy the value to the clipboard
     */
    copy(): void;
    getRootProps(): T["element"];
    getLabelProps(): T["label"];
    getControlProps(): T["element"];
    getTriggerProps(): T["button"];
    getInputProps(): T["input"];
    getIndicatorProps(props: IndicatorProps): T["element"];
}

declare function connect<T extends PropTypes>(service: ClipboardService, normalize: NormalizeProps<T>): ClipboardApi<T>;

declare const machine: _zag_js_core.Machine<ClipboardSchema>;

declare const props: (keyof ClipboardProps)[];
declare const contextProps: <Props extends ClipboardProps>(props: Props) => [ClipboardProps, Omit<Props, keyof ClipboardProps>];
declare const indicatorProps: "copied"[];
declare const splitIndicatorProps: <Props extends IndicatorProps>(props: Props) => [IndicatorProps, Omit<Props, "copied">];

export { type ClipboardApi as Api, type CopyStatusDetails, type ElementIds, type IndicatorProps, type ClipboardMachine as Machine, type ClipboardProps as Props, type ClipboardSchema as Schema, type ClipboardService as Service, type ValueChangeDetails, anatomy, connect, contextProps, indicatorProps, machine, props, splitIndicatorProps };
