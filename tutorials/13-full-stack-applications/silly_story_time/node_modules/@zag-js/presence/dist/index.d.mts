import * as _zag_js_core from '@zag-js/core';
import { EventObject, Machine, Service } from '@zag-js/core';
import { PropTypes, NormalizeProps } from '@zag-js/types';

interface PresenceProps {
    /**
     * Whether the node is present (controlled by the user)
     */
    present?: boolean | undefined;
    /**
     * Function called when the animation ends in the closed state
     */
    onExitComplete?: VoidFunction | undefined;
    /**
     * Whether to synchronize the present change immediately or defer it to the next frame
     */
    immediate?: boolean | undefined;
}
interface PresenceSchema {
    refs: {
        node: HTMLElement | null;
        styles: CSSStyleDeclaration | null;
    };
    props: PresenceProps;
    context: {
        initial: boolean;
        unmountAnimationName: string | null;
        prevAnimationName: string | null;
    };
    state: "unmounted" | "unmountSuspended" | "mounted";
    action: string;
    effect: string;
    event: EventObject;
}
type PresenceService = Service<PresenceSchema>;
type PresenceMachine = Machine<PresenceSchema>;
interface PresenceApi {
    /**
     * Whether the animation should be skipped.
     */
    skip: boolean;
    /**
     * Whether the node is present in the DOM.
     */
    present: boolean;
    /**
     * Function to set the node (as early as possible)
     */
    setNode(node: HTMLElement | null): void;
    /**
     * Function to programmatically unmount the node
     */
    unmount(): void;
}

declare function connect<T extends PropTypes>(service: Service<PresenceSchema>, _normalize: NormalizeProps<T>): PresenceApi;

declare const machine: _zag_js_core.Machine<PresenceSchema>;

declare const props: (keyof PresenceProps)[];

export { type PresenceApi as Api, type PresenceMachine as Machine, type PresenceProps as Props, type PresenceService as Service, connect, machine, props };
