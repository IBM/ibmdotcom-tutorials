'use client';
import { jsx } from 'react/jsx-runtime';
import { isRTL } from '@zag-js/i18n-utils';
import { LocaleContextProvider } from './use-locale-context.js';

const LocaleProvider = (props) => {
  const { children, locale } = props;
  const context = {
    locale,
    dir: isRTL(locale) ? "rtl" : "ltr"
  };
  return /* @__PURE__ */ jsx(LocaleContextProvider, { value: context, children });
};

export { LocaleProvider };
