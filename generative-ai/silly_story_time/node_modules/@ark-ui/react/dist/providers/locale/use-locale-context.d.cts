import { Locale } from '@zag-js/i18n-utils';
import { Provider } from 'react';
export interface UseLocaleContext extends Locale {
}
export declare const LocaleContextProvider: Provider<UseLocaleContext>, useLocaleContext: () => UseLocaleContext;
