import type { SystemContext } from "./types";
declare const useChakraContext: () => SystemContext;
export interface ChakraProviderProps {
    value: SystemContext;
    children: React.ReactNode;
}
declare function ChakraProvider(props: ChakraProviderProps): import("react/jsx-runtime").JSX.Element;
export { ChakraProvider, useChakraContext };
