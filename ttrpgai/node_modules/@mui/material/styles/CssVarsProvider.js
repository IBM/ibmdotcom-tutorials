'use client';

// do not remove the following import (https://github.com/microsoft/TypeScript/issues/29808#issuecomment-1320713018)
/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-ignore
import _extends from "@babel/runtime/helpers/esm/extends";
import { unstable_createCssVarsProvider as createCssVarsProvider } from '@mui/system';
import styleFunctionSx from '@mui/system/styleFunctionSx';
import experimental_extendTheme from './experimental_extendTheme';
import createTypography from './createTypography';
import excludeVariablesFromRoot from './excludeVariablesFromRoot';
import THEME_ID from './identifier';
import { defaultConfig } from '../InitColorSchemeScript/InitColorSchemeScript';
const defaultTheme = experimental_extendTheme();
const {
  CssVarsProvider,
  useColorScheme,
  getInitColorSchemeScript: getInitColorSchemeScriptSystem
} = createCssVarsProvider({
  themeId: THEME_ID,
  theme: defaultTheme,
  attribute: defaultConfig.attribute,
  colorSchemeStorageKey: defaultConfig.colorSchemeStorageKey,
  modeStorageKey: defaultConfig.modeStorageKey,
  defaultColorScheme: {
    light: defaultConfig.defaultLightColorScheme,
    dark: defaultConfig.defaultDarkColorScheme
  },
  resolveTheme: theme => {
    const newTheme = _extends({}, theme, {
      typography: createTypography(theme.palette, theme.typography)
    });
    newTheme.unstable_sx = function sx(props) {
      return styleFunctionSx({
        sx: props,
        theme: this
      });
    };
    return newTheme;
  },
  excludeVariablesFromRoot
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
export const getInitColorSchemeScript = getInitColorSchemeScriptSystem;
export { useColorScheme, CssVarsProvider as Experimental_CssVarsProvider };