'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const localeProvider = require('./locale-provider.cjs');
const useLocaleContext = require('./use-locale-context.cjs');



exports.LocaleProvider = localeProvider.LocaleProvider;
exports.useLocaleContext = useLocaleContext.useLocaleContext;
