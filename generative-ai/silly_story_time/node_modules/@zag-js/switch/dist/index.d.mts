import * as _zag_js_anatomy from '@zag-js/anatomy';
import { RequiredBy, DirectionProperty, CommonProperties, PropTypes, NormalizeProps } from '@zag-js/types';
import * as _zag_js_core from '@zag-js/core';
import { Service, EventObject } from '@zag-js/core';

declare const anatomy: _zag_js_anatomy.AnatomyInstance<"root" | "label" | "control" | "thumb">;

interface CheckedChangeDetails {
    checked: boolean;
}
type ElementIds = Partial<{
    root: string;
    hiddenInput: string;
    control: string;
    label: string;
    thumb: string;
}>;
interface SwitchProps extends DirectionProperty, CommonProperties {
    /**
     * The ids of the elements in the switch. Useful for composition.
     */
    ids?: ElementIds | undefined;
    /**
     * Specifies the localized strings that identifies the accessibility elements and their states
     */
    label?: string | undefined;
    /**
     * Whether the switch is disabled.
     */
    disabled?: boolean | undefined;
    /**
     * If `true`, the switch is marked as invalid.
     */
    invalid?: boolean | undefined;
    /**
     * If `true`, the switch input is marked as required,
     */
    required?: boolean | undefined;
    /**
     * Whether the switch is read-only
     */
    readOnly?: boolean | undefined;
    /**
     * Function to call when the switch is clicked.
     */
    onCheckedChange?: ((details: CheckedChangeDetails) => void) | undefined;
    /**
     * The controlled checked state of the switch
     */
    checked?: boolean | undefined;
    /**
     * The initial checked state of the switch when rendered.
     * Use when you don't need to control the checked state of the switch.
     */
    defaultChecked?: boolean | undefined;
    /**
     * The name of the input field in a switch
     * (Useful for form submission).
     */
    name?: string | undefined;
    /**
     * The id of the form that the switch belongs to
     */
    form?: string | undefined;
    /**
     * The value of switch input. Useful for form submission.
     * @default "on"
     */
    value?: string | number | undefined;
}
type PropsWithDefault = "value";
type ComputedContext = Readonly<{
    /**
     * Whether the switch is disabled
     */
    isDisabled: boolean;
}>;
interface PrivateContext {
    /**
     * Whether the checkbox is pressed
     */
    active: boolean;
    /**
     * Whether the checkbox has focus
     */
    focused: boolean;
    /**
     * Whether the checkbox has focus visible
     */
    focusVisible: boolean;
    /**
     * Whether the checkbox is hovered
     */
    hovered: boolean;
    /**
     * Whether the checkbox fieldset is disabled
     */
    fieldsetDisabled: boolean;
    /**
     * The checked state of the switch
     */
    checked: boolean;
}
interface SwitchSchema {
    props: RequiredBy<SwitchProps, PropsWithDefault>;
    context: PrivateContext;
    state: "ready";
    computed: ComputedContext;
    event: EventObject;
    action: string;
    effect: string;
    guard: string;
}
type SwitchService = Service<SwitchSchema>;
interface SwitchApi<T extends PropTypes = PropTypes> {
    /**
     * Whether the checkbox is checked
     */
    checked: boolean;
    /**
     * Whether the checkbox is disabled
     */
    disabled: boolean | undefined;
    /**
     * Whether the checkbox is focused
     */
    focused: boolean | undefined;
    /**
     * Function to set the checked state of the switch.
     */
    setChecked(checked: boolean): void;
    /**
     * Function to toggle the checked state of the checkbox
     */
    toggleChecked(): void;
    getRootProps(): T["label"];
    getLabelProps(): T["element"];
    getThumbProps(): T["element"];
    getControlProps(): T["element"];
    getHiddenInputProps(): T["input"];
}

declare function connect<T extends PropTypes>(service: SwitchService, normalize: NormalizeProps<T>): SwitchApi<T>;

declare const machine: _zag_js_core.Machine<SwitchSchema>;

declare const props: (keyof SwitchProps)[];
declare const splitProps: <Props extends Partial<SwitchProps>>(props: Props) => [Partial<SwitchProps>, Omit<Props, keyof SwitchProps>];

export { type SwitchApi as Api, type CheckedChangeDetails, type ElementIds, type SwitchProps as Props, type SwitchService as Service, anatomy, connect, machine, props, splitProps };
