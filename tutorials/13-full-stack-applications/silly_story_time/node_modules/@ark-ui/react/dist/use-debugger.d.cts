interface Service {
    initialContext: {
        id: string;
    };
    state: Record<string, any>;
    subscribe: (callback: () => void) => () => void;
}
export declare const useDebugger: (service: Service) => void;
export {};
