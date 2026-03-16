'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const i18nUtils = require('@zag-js/i18n-utils');
const useLocaleContext = require('./use-locale-context.cjs');

const LocaleProvider = (props) => {
  const { children, locale } = props;
  const context = {
    locale,
    dir: i18nUtils.isRTL(locale) ? "rtl" : "ltr"
  };
  return /* @__PURE__ */ jsxRuntime.jsx(useLocaleContext.LocaleContextProvider, { value: context, children });
};

exports.LocaleProvider = LocaleProvider;
