import * as _zag_js_anatomy from '@zag-js/anatomy';
import { RequiredBy, DirectionProperty, CommonProperties, OrientationProperty, PropTypes, NormalizeProps } from '@zag-js/types';
export { Orientation } from '@zag-js/types';
import * as _zag_js_core from '@zag-js/core';
import { Service, EventObject, Machine } from '@zag-js/core';

declare const anatomy: _zag_js_anatomy.AnatomyInstance<"root" | "label" | "track" | "range" | "valueText" | "view" | "circle" | "circleTrack" | "circleRange">;

type ProgressState = "indeterminate" | "loading" | "complete";
interface ValueTranslationDetails {
    value: number | null;
    max: number;
    min: number;
    percent: number;
}
interface ValueChangeDetails {
    value: number | null;
}
interface IntlTranslations {
    value(details: ValueTranslationDetails): string;
}
type ElementIds = Partial<{
    root: string;
    track: string;
    label: string;
    circle: string;
}>;
interface ProgressProps extends DirectionProperty, CommonProperties, OrientationProperty {
    /**
     * The ids of the elements in the progress bar. Useful for composition.
     */
    ids?: ElementIds | undefined;
    /**
     * The controlled value of the progress bar.
     */
    value?: number | null | undefined;
    /**
     * The initial value of the progress bar when rendered.
     * Use when you don't need to control the value of the progress bar.
     * @default 50
     */
    defaultValue?: number | null | undefined;
    /**
     * The minimum allowed value of the progress bar.
     * @default 0
     */
    min?: number | undefined;
    /**
     * The maximum allowed value of the progress bar.
     * @default 100
     */
    max?: number | undefined;
    /**
     * The localized messages to use.
     */
    translations?: IntlTranslations | undefined;
    /**
     * Callback fired when the value changes.
     */
    onValueChange?: ((details: ValueChangeDetails) => void) | undefined;
    /**
     * The options to use for formatting the value.
     * @default { style: "percent" }
     */
    formatOptions?: Intl.NumberFormatOptions | undefined;
    /**
     * The locale to use for formatting the value.
     * @default "en-US"
     */
    locale?: string | undefined;
}
type PropsWithDefault = "orientation" | "translations" | "min" | "max" | "formatOptions";
type Computed = Readonly<{
    isIndeterminate: boolean;
    percent: number;
    isHorizontal: boolean;
    formatter: Intl.NumberFormat;
}>;
interface ProgressSchema {
    props: RequiredBy<ProgressProps, PropsWithDefault>;
    computed: Computed;
    context: {
        value: number | null;
    };
    state: "idle";
    event: EventObject;
    action: string;
    effect: string;
    guard: string;
}
type ProgressService = Service<ProgressSchema>;
type ProgressMachine = Machine<ProgressSchema>;
interface ViewProps {
    state: ProgressState;
}
interface ProgressApi<T extends PropTypes> {
    /**
     * The current value of the progress bar.
     */
    value: number | null;
    /**
     * The current value of the progress bar as a string.
     */
    valueAsString: string;
    /**
     * Sets the current value of the progress bar.
     */
    setValue(value: number | null): void;
    /**
     * Sets the current value of the progress bar to the max value.
     */
    setToMax(): void;
    /**
     * Sets the current value of the progress bar to the min value.
     */
    setToMin(): void;
    /**
     * The percentage of the progress bar's value.
     */
    percent: number;
    /**
     * The percentage of the progress bar's value as a string.
     */
    percentAsString: string;
    /**
     * The minimum allowed value of the progress bar.
     */
    min: number;
    /**
     * The maximum allowed value of the progress bar.
     */
    max: number;
    /**
     * Whether the progress bar is indeterminate.
     */
    indeterminate: boolean;
    getRootProps(): T["element"];
    getLabelProps(): T["element"];
    getTrackProps(): T["element"];
    getValueTextProps(): T["element"];
    getRangeProps(): T["element"];
    getViewProps(props: ViewProps): T["element"];
    getCircleProps(): T["svg"];
    getCircleTrackProps(): T["circle"];
    getCircleRangeProps(): T["circle"];
}

declare function connect<T extends PropTypes>(service: ProgressService, normalize: NormalizeProps<T>): ProgressApi<T>;

declare const machine: _zag_js_core.Machine<ProgressSchema>;

declare const props: (keyof ProgressProps)[];
declare const splitProps: <Props extends Partial<ProgressProps>>(props: Props) => [Partial<ProgressProps>, Omit<Props, keyof ProgressProps>];

export { type ProgressApi as Api, type ElementIds, type IntlTranslations, type ProgressMachine as Machine, type ProgressState, type ProgressProps as Props, type ProgressService as Service, type ValueChangeDetails, type ValueTranslationDetails, type ViewProps, anatomy, connect, machine, props, splitProps };
