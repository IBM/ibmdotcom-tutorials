import * as _zag_js_anatomy from '@zag-js/anatomy';
import { PropTypes, NormalizeProps } from '@zag-js/types';
import * as _zag_js_core from '@zag-js/core';
import { Service, EventObject, Machine } from '@zag-js/core';

declare const anatomy: _zag_js_anatomy.Anatomy<"root" | "indicator">;

interface ToggleProps {
    /**
     * Whether the toggle is disabled.
     */
    disabled?: boolean | undefined;
    /**
     * The default pressed state of the toggle.
     */
    defaultPressed?: boolean | undefined;
    /**
     * The pressed state of the toggle.
     */
    pressed?: boolean | undefined;
    /**
     * Event handler called when the pressed state of the toggle changes.
     */
    onPressedChange?: ((pressed: boolean) => void) | undefined;
}
interface ToggleSchema {
    state: "idle";
    props: ToggleProps;
    context: {
        pressed: boolean;
    };
    event: EventObject;
    action: string;
    guard: string;
    effect: string;
}
type ToggleService = Service<ToggleSchema>;
type ToggleMachine = Machine<ToggleSchema>;
interface ToggleApi<T extends PropTypes = PropTypes> {
    /**
     * Whether the toggle is pressed.
     */
    pressed: boolean;
    /**
     * Whether the toggle is disabled.
     */
    disabled: boolean;
    /**
     * Sets the pressed state of the toggle.
     */
    setPressed(pressed: boolean): void;
    getRootProps(): T["element"];
    getIndicatorProps(): T["element"];
}

declare function connect<T extends PropTypes>(service: ToggleService, normalize: NormalizeProps<T>): ToggleApi<T>;

declare const machine: _zag_js_core.Machine<ToggleSchema>;

declare const props: (keyof ToggleProps)[];
declare const splitProps: <Props extends Partial<ToggleProps>>(props: Props) => [Partial<ToggleProps>, Omit<Props, keyof ToggleProps>];

export { type ToggleApi as Api, type ToggleMachine as Machine, type ToggleProps as Props, type ToggleSchema as Schema, type ToggleService as Service, anatomy, connect, machine, props, splitProps };
