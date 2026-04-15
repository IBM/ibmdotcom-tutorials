"use strict";
import { badgeRecipe } from './recipes/badge.js';
import { buttonRecipe } from './recipes/button.js';
import { checkmarkRecipe } from './recipes/checkmark.js';
import { codeRecipe } from './recipes/code.js';
import { colorSwatchRecipe } from './recipes/color-swatch.js';
import { containerRecipe } from './recipes/container.js';
import { headingRecipe } from './recipes/heading.js';
import { iconRecipe } from './recipes/icon.js';
import { inputRecipe } from './recipes/input.js';
import { inputAddonRecipe } from './recipes/input-addon.js';
import { kbdRecipe } from './recipes/kbd.js';
import { linkRecipe } from './recipes/link.js';
import { markRecipe } from './recipes/mark.js';
import { radiomarkRecipe } from './recipes/radiomark.js';
import { separatorRecipe } from './recipes/separator.js';
import { skeletonRecipe } from './recipes/skeleton.js';
import { skipNavLinkRecipe } from './recipes/skip-nav-link.js';
import { spinnerRecipe } from './recipes/spinner.js';
import { textareaRecipe } from './recipes/textarea.js';

const recipes = {
  badge: badgeRecipe,
  button: buttonRecipe,
  code: codeRecipe,
  container: containerRecipe,
  heading: headingRecipe,
  input: inputRecipe,
  inputAddon: inputAddonRecipe,
  kbd: kbdRecipe,
  link: linkRecipe,
  mark: markRecipe,
  separator: separatorRecipe,
  skeleton: skeletonRecipe,
  skipNavLink: skipNavLinkRecipe,
  spinner: spinnerRecipe,
  textarea: textareaRecipe,
  icon: iconRecipe,
  checkmark: checkmarkRecipe,
  radiomark: radiomarkRecipe,
  colorSwatch: colorSwatchRecipe
};

export { recipes };
