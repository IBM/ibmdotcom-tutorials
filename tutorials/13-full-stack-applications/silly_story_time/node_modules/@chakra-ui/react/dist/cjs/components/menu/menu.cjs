"use strict";
"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var menu = require('@ark-ui/react/menu');
var createSlotRecipeContext = require('../../styled-system/create-slot-recipe-context.cjs');
var icons = require('../icons.cjs');

const {
  withRootProvider,
  withContext,
  useStyles: useMenuStyles,
  PropsProvider
} = createSlotRecipeContext.createSlotRecipeContext({ key: "menu" });
const MenuRootProvider = withRootProvider(
  menu.Menu.RootProvider
);
const MenuRoot = withRootProvider(menu.Menu.Root, {
  defaultProps: { lazyMount: true, unmountOnExit: true }
});
const MenuPropsProvider = PropsProvider;
const MenuTrigger = withContext(
  menu.Menu.Trigger,
  "trigger",
  { forwardAsChild: true }
);
const MenuContextTrigger = withContext(menu.Menu.ContextTrigger, "contextTrigger", { forwardAsChild: true });
const MenuPositioner = withContext(
  menu.Menu.Positioner,
  "positioner",
  { forwardAsChild: true }
);
const MenuSeparator = withContext(
  menu.Menu.Separator,
  "separator",
  { forwardAsChild: true }
);
const MenuContent = withContext(
  menu.Menu.Content,
  "content",
  { forwardAsChild: true }
);
const MenuArrowTip = withContext(
  menu.Menu.ArrowTip,
  "arrowTip",
  { forwardAsChild: true }
);
const MenuArrow = withContext(
  menu.Menu.Arrow,
  "arrow",
  { forwardAsChild: true, defaultProps: { children: /* @__PURE__ */ jsxRuntime.jsx(MenuArrowTip, {}) } }
);
const MenuIndicator = withContext(
  menu.Menu.Indicator,
  "indicator",
  { forwardAsChild: true }
);
const MenuItemGroup = withContext(
  menu.Menu.ItemGroup,
  "itemGroup",
  { forwardAsChild: true }
);
const MenuItemGroupLabel = withContext(menu.Menu.ItemGroupLabel, "itemGroupLabel", { forwardAsChild: true });
const MenuItem = withContext(
  menu.Menu.Item,
  "item",
  { forwardAsChild: true }
);
const MenuTriggerItem = withContext(menu.Menu.TriggerItem, "item", { forwardAsChild: true });
const MenuItemText = withContext(
  menu.Menu.ItemText,
  "itemText",
  { forwardAsChild: true }
);
const MenuItemCommand = withContext(
  "kbd",
  "itemCommand"
);
const MenuItemIndicator = withContext(menu.Menu.ItemIndicator, "itemIndicator", {
  forwardAsChild: true,
  defaultProps: { children: /* @__PURE__ */ jsxRuntime.jsx(icons.CheckIcon, { boxSize: "4" }) }
});
const MenuCheckboxItem = withContext(menu.Menu.CheckboxItem, "item", { forwardAsChild: true });
const MenuRadioItemGroup = withContext(menu.Menu.RadioItemGroup, "itemGroup", { forwardAsChild: true });
const MenuRadioItem = withContext(
  menu.Menu.RadioItem,
  "item",
  { forwardAsChild: true }
);
const MenuContext = menu.Menu.Context;
const MenuItemContext = menu.Menu.ItemContext;

exports.MenuArrow = MenuArrow;
exports.MenuArrowTip = MenuArrowTip;
exports.MenuCheckboxItem = MenuCheckboxItem;
exports.MenuContent = MenuContent;
exports.MenuContext = MenuContext;
exports.MenuContextTrigger = MenuContextTrigger;
exports.MenuIndicator = MenuIndicator;
exports.MenuItem = MenuItem;
exports.MenuItemCommand = MenuItemCommand;
exports.MenuItemContext = MenuItemContext;
exports.MenuItemGroup = MenuItemGroup;
exports.MenuItemGroupLabel = MenuItemGroupLabel;
exports.MenuItemIndicator = MenuItemIndicator;
exports.MenuItemText = MenuItemText;
exports.MenuPositioner = MenuPositioner;
exports.MenuPropsProvider = MenuPropsProvider;
exports.MenuRadioItem = MenuRadioItem;
exports.MenuRadioItemGroup = MenuRadioItemGroup;
exports.MenuRoot = MenuRoot;
exports.MenuRootProvider = MenuRootProvider;
exports.MenuSeparator = MenuSeparator;
exports.MenuTrigger = MenuTrigger;
exports.MenuTriggerItem = MenuTriggerItem;
exports.useMenuStyles = useMenuStyles;
