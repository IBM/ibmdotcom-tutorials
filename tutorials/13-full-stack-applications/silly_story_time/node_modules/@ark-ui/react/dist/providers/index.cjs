'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const environmentProvider = require('./environment/environment-provider.cjs');
const useEnvironmentContext = require('./environment/use-environment-context.cjs');
const localeProvider = require('./locale/locale-provider.cjs');
const useLocaleContext = require('./locale/use-locale-context.cjs');



exports.EnvironmentProvider = environmentProvider.EnvironmentProvider;
exports.useEnvironmentContext = useEnvironmentContext.useEnvironmentContext;
exports.LocaleProvider = localeProvider.LocaleProvider;
exports.useLocaleContext = useLocaleContext.useLocaleContext;
