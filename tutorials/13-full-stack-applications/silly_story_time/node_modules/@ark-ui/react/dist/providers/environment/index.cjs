'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const environmentProvider = require('./environment-provider.cjs');
const useEnvironmentContext = require('./use-environment-context.cjs');



exports.EnvironmentProvider = environmentProvider.EnvironmentProvider;
exports.useEnvironmentContext = useEnvironmentContext.useEnvironmentContext;
