export interface UseDisclosureProps {
    open?: boolean;
    defaultOpen?: boolean;
    onClose?(): void;
    onOpen?(): void;
}
/**
 * `useDisclosure` is a custom hook used to help handle common open, close, or toggle scenarios.
 * It can be used to control feedback component such as `Modal`, `AlertDialog`, `Drawer`, etc.
 *
 * @see Docs https://chakra-ui.com/docs/hooks/use-disclosure
 */
export declare function useDisclosure(props?: UseDisclosureProps): {
    open: boolean;
    onOpen: () => void;
    onClose: () => void;
    onToggle: () => void;
    setOpen: import("react").Dispatch<import("react").SetStateAction<boolean>>;
};
export type UseDisclosureReturn = ReturnType<typeof useDisclosure>;
