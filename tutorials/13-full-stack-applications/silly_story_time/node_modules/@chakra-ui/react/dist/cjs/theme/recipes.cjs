"use strict";
'use strict';

var badge = require('./recipes/badge.cjs');
var button = require('./recipes/button.cjs');
var checkmark = require('./recipes/checkmark.cjs');
var code = require('./recipes/code.cjs');
var colorSwatch = require('./recipes/color-swatch.cjs');
var container = require('./recipes/container.cjs');
var heading = require('./recipes/heading.cjs');
var icon = require('./recipes/icon.cjs');
var input = require('./recipes/input.cjs');
var inputAddon = require('./recipes/input-addon.cjs');
var kbd = require('./recipes/kbd.cjs');
var link = require('./recipes/link.cjs');
var mark = require('./recipes/mark.cjs');
var radiomark = require('./recipes/radiomark.cjs');
var separator = require('./recipes/separator.cjs');
var skeleton = require('./recipes/skeleton.cjs');
var skipNavLink = require('./recipes/skip-nav-link.cjs');
var spinner = require('./recipes/spinner.cjs');
var textarea = require('./recipes/textarea.cjs');

const recipes = {
  badge: badge.badgeRecipe,
  button: button.buttonRecipe,
  code: code.codeRecipe,
  container: container.containerRecipe,
  heading: heading.headingRecipe,
  input: input.inputRecipe,
  inputAddon: inputAddon.inputAddonRecipe,
  kbd: kbd.kbdRecipe,
  link: link.linkRecipe,
  mark: mark.markRecipe,
  separator: separator.separatorRecipe,
  skeleton: skeleton.skeletonRecipe,
  skipNavLink: skipNavLink.skipNavLinkRecipe,
  spinner: spinner.spinnerRecipe,
  textarea: textarea.textareaRecipe,
  icon: icon.iconRecipe,
  checkmark: checkmark.checkmarkRecipe,
  radiomark: radiomark.radiomarkRecipe,
  colorSwatch: colorSwatch.colorSwatchRecipe
};

exports.recipes = recipes;
