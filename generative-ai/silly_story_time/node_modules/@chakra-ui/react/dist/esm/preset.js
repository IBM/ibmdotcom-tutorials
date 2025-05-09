"use strict";
import { defaultBaseConfig } from './preset-base.js';
import { mergeConfigs } from './styled-system/config.js';
import { createSystem } from './styled-system/system.js';
import { defaultThemeConfig } from './theme/index.js';

const defaultConfig = mergeConfigs(defaultBaseConfig, defaultThemeConfig);
const defaultSystem = createSystem(defaultConfig);

export { defaultConfig, defaultSystem, defaultSystem as system };
