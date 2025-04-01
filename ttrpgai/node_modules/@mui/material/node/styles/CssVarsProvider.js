"use strict";
'use client';

// do not remove the following import (https://github.com/microsoft/TypeScript/issues/29808#issuecomment-1320713018)
/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-ignore
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useColorScheme = exports.getInitColorSchemeScript = exports.Experimental_CssVarsProvider = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _system = require("@mui/system");
var _styleFunctionSx = _interopRequireDefault(require("@mui/system/styleFunctionSx"));
var _experimental_extendTheme = _interopRequireDefault(require("./experimental_extendTheme"));
var _createTypography = _interopRequireDefault(require("./createTypography"));
var _excludeVariablesFromRoot = _interopRequireDefault(require("./excludeVariablesFromRoot"));
var _identifier = _interopRequireDefault(require("./identifier"));
var _InitColorSchemeScript = require("../InitColorSchemeScript/InitColorSchemeScript");
const defaultTheme = (0, _experimental_extendTheme.default)();
const {
  CssVarsProvider,
  useColorScheme,
  getInitColorSchemeScript: getInitColorSchemeScriptSystem
} = (0, _system.unstable_createCssVarsProvider)({
  themeId: _identifier.default,
  theme: defaultTheme,
  attribute: _InitColorSchemeScript.defaultConfig.attribute,
  colorSchemeStorageKey: _InitColorSchemeScript.defaultConfig.colorSchemeStorageKey,
  modeStorageKey: _InitColorSchemeScript.defaultConfig.modeStorageKey,
  defaultColorScheme: {
    light: _InitColorSchemeScript.defaultConfig.defaultLightColorScheme,
    dark: _InitColorSchemeScript.defaultConfig.defaultDarkColorScheme
  },
  resolveTheme: theme => {
    const newTheme = (0, _extends2.default)({}, theme, {
      typography: (0, _createTypography.default)(theme.palette, theme.typography)
    });
    newTheme.unstable_sx = function sx(props) {
      return (0, _styleFunctionSx.default)({
        sx: props,
        theme: this
      });
    };
    return newTheme;
  },
  excludeVariablesFromRoot: _excludeVariablesFromRoot.default
});

/**
 * @deprecated Use `InitColorSchemeScript` instead
 * ```diff
 * - import { getInitColorSchemeScript } from '@mui/material/styles';
 * + import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
 *
 * - getInitColorSchemeScript();
 * + <InitColorSchemeScript />;
 * ```
 */
exports.useColorScheme = useColorScheme;
exports.Experimental_CssVarsProvider = CssVarsProvider;
const getInitColorSchemeScript = exports.getInitColorSchemeScript = getInitColorSchemeScriptSystem;