import * as _zag_js_anatomy from '@zag-js/anatomy';
import { RequiredBy, DirectionProperty, CommonProperties, PropTypes, NormalizeProps } from '@zag-js/types';
import * as _zag_js_core from '@zag-js/core';
import { Service, EventObject, Machine } from '@zag-js/core';

declare const anatomy: _zag_js_anatomy.AnatomyInstance<"root" | "label" | "thumb" | "valueText" | "control" | "track" | "markerGroup" | "marker">;

interface ValueChangeDetails {
    value: number;
    valueAsDegree: string;
}
type ElementIds = Partial<{
    root: string;
    thumb: string;
    hiddenInput: string;
    control: string;
    valueText: string;
}>;
interface AngleSliderProps extends DirectionProperty, CommonProperties {
    /**
     * The ids of the elements in the machine.
     * Useful for composition.
     */
    ids?: ElementIds | undefined;
    /**
     * The step value for the slider.
     * @default 1
     */
    step?: number | undefined;
    /**
     * The value of the slider.
     */
    value?: number | undefined;
    /**
     * The initial value of the slider.
     * Use when you don't need to control the value of the slider.
     * @default 0
     */
    defaultValue?: number | undefined;
    /**
     * The callback function for when the value changes.
     */
    onValueChange?: ((details: ValueChangeDetails) => void) | undefined;
    /**
     * The callback function for when the value changes ends.
     */
    onValueChangeEnd?: ((details: ValueChangeDetails) => void) | undefined;
    /**
     * Whether the slider is disabled.
     */
    disabled?: boolean | undefined;
    /**
     * Whether the slider is read-only.
     */
    readOnly?: boolean | undefined;
    /**
     * Whether the slider is invalid.
     */
    invalid?: boolean | undefined;
    /**
     * The name of the slider. Useful for form submission.
     */
    name?: string | undefined;
}
type PropsWithDefault = "step" | "defaultValue";
interface AngleSliderSchema {
    state: "idle" | "focused" | "dragging";
    props: RequiredBy<AngleSliderProps, PropsWithDefault>;
    computed: {
        interactive: boolean;
        valueAsDegree: string;
    };
    context: {
        value: number;
    };
    action: string;
    event: EventObject;
    effect: string;
    guard: string;
}
type AngleSliderService = Service<AngleSliderSchema>;
type AngleSliderMachine = Machine<AngleSliderSchema>;
interface MarkerProps {
    /**
     * The value of the marker
     */
    value: number;
}
interface AngleSliderApi<T extends PropTypes = PropTypes> {
    /**
     * The current value of the angle slider
     */
    value: number;
    /**
     * The current value as a degree string
     */
    valueAsDegree: string;
    /**
     * Sets the value of the angle slider
     */
    setValue(value: number): void;
    /**
     * Whether the slider is being dragged.
     */
    dragging: boolean;
    getRootProps(): T["element"];
    getLabelProps(): T["label"];
    getHiddenInputProps(): T["element"];
    getControlProps(): T["element"];
    getThumbProps(): T["element"];
    getValueTextProps(): T["element"];
    getMarkerGroupProps(): T["element"];
    getMarkerProps(props: MarkerProps): T["element"];
}

declare function connect<T extends PropTypes>(service: AngleSliderService, normalize: NormalizeProps<T>): AngleSliderApi<T>;

declare const machine: _zag_js_core.Machine<AngleSliderSchema>;

declare const props: (keyof AngleSliderProps)[];
declare const splitProps: <Props extends Partial<AngleSliderProps>>(props: Props) => [Partial<AngleSliderProps>, Omit<Props, keyof AngleSliderProps>];

export { type AngleSliderApi as Api, type ElementIds, type AngleSliderMachine as Machine, type MarkerProps, type AngleSliderProps as Props, type AngleSliderService as Service, type ValueChangeDetails, anatomy, connect, machine, props, splitProps };
