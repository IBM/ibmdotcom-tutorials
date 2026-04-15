import * as React from "react";
import { type Dict } from "../utils";
/**
 * Props that are injected into the overlay component by the `createOverlay` function.
 * These props are used to control the overlay's state and lifecycle.
 */
export interface CreateOverlayProps {
    /** Whether the overlay is currently open */
    open?: boolean;
    /** Callback fired when the overlay's open state changes */
    onOpenChange?: (e: {
        open: boolean;
    }) => void;
    /** Callback fired when the overlay's exit animation completes */
    onExitComplete?: () => void;
    /** Internal callback used to set the return value when the overlay closes */
    setReturnValue?: ((value: unknown) => void) | undefined;
    /** Internal callback used to signal when the exit animation is complete */
    setExitComplete?: (() => void) | undefined;
}
export interface OverlayOptions<T extends CreateOverlayProps> {
    props?: T;
}
export interface CreateOverlayReturn<T extends CreateOverlayProps> {
    /** The root component for the overlay */
    Viewport: React.ElementType;
    /** Opens a new overlay with the given id and props */
    open: (id: string, props: T) => Promise<any>;
    /** Closes the overlay with the given id and returns the value */
    close: (id: string, value?: any) => Promise<void>;
    /** Updates the props of the overlay with the given id */
    update: (id: string, props: T) => void;
    /** Removes the overlay with the given id */
    remove: (id: string) => void;
    /** Removes all overlays */
    removeAll: () => void;
    /** Gets the props of the overlay with the given id */
    get: (id: string) => T;
    /** Gets the current snapshot of the overlays */
    getSnapshot: () => T[];
    /** Waits for the exit animation to complete for the overlay with the given id */
    waitForExit: (id: string) => Promise<void>;
}
export declare function createOverlay<T extends Dict>(Component: React.ElementType<T & CreateOverlayProps>, options?: OverlayOptions<T>): CreateOverlayReturn<T>;
