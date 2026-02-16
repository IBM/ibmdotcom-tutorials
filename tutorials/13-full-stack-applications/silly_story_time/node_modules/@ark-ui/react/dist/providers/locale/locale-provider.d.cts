import { PropsWithChildren } from 'react';
export interface LocaleProviderProps extends PropsWithChildren {
    /**
     * The locale to use for the application.
     * @default 'en-US'
     */
    locale: string;
}
export declare const LocaleProvider: (props: LocaleProviderProps) => import("react/jsx-runtime").JSX.Element;
