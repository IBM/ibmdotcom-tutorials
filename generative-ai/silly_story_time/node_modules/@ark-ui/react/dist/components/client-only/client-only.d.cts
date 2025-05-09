export interface ClientOnlyProps {
    children: React.ReactNode;
    fallback?: React.ReactNode | undefined;
}
export declare const ClientOnly: (props: ClientOnlyProps) => React.ReactNode;
