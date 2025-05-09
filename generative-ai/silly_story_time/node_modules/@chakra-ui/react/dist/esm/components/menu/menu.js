"use strict";
"use client";
import { jsx } from 'react/jsx-runtime';
import { Menu } from '@ark-ui/react/menu';
import { createSlotRecipeContext } from '../../styled-system/create-slot-recipe-context.js';
import { CheckIcon } from '../icons.js';

const {
  withRootProvider,
  withContext,
  useStyles: useMenuStyles,
  PropsProvider
} = createSlotRecipeContext({ key: "menu" });
const MenuRootProvider = withRootProvider(
  Menu.RootProvider
);
const MenuRoot = withRootProvider(Menu.Root, {
  defaultProps: { lazyMount: true, unmountOnExit: true }
});
const MenuPropsProvider = PropsProvider;
const MenuTrigger = withContext(
  Menu.Trigger,
  "trigger",
  { forwardAsChild: true }
);
const MenuContextTrigger = withContext(Menu.ContextTrigger, "contextTrigger", { forwardAsChild: true });
const MenuPositioner = withContext(
  Menu.Positioner,
  "positioner",
  { forwardAsChild: true }
);
const MenuSeparator = withContext(
  Menu.Separator,
  "separator",
  { forwardAsChild: true }
);
const MenuContent = withContext(
  Menu.Content,
  "content",
  { forwardAsChild: true }
);
const MenuArrowTip = withContext(
  Menu.ArrowTip,
  "arrowTip",
  { forwardAsChild: true }
);
const MenuArrow = withContext(
  Menu.Arrow,
  "arrow",
  { forwardAsChild: true, defaultProps: { children: /* @__PURE__ */ jsx(MenuArrowTip, {}) } }
);
const MenuIndicator = withContext(
  Menu.Indicator,
  "indicator",
  { forwardAsChild: true }
);
const MenuItemGroup = withContext(
  Menu.ItemGroup,
  "itemGroup",
  { forwardAsChild: true }
);
const MenuItemGroupLabel = withContext(Menu.ItemGroupLabel, "itemGroupLabel", { forwardAsChild: true });
const MenuItem = withContext(
  Menu.Item,
  "item",
  { forwardAsChild: true }
);
const MenuTriggerItem = withContext(Menu.TriggerItem, "item", { forwardAsChild: true });
const MenuItemText = withContext(
  Menu.ItemText,
  "itemText",
  { forwardAsChild: true }
);
const MenuItemCommand = withContext(
  "kbd",
  "itemCommand"
);
const MenuItemIndicator = withContext(Menu.ItemIndicator, "itemIndicator", {
  forwardAsChild: true,
  defaultProps: { children: /* @__PURE__ */ jsx(CheckIcon, { boxSize: "4" }) }
});
const MenuCheckboxItem = withContext(Menu.CheckboxItem, "item", { forwardAsChild: true });
const MenuRadioItemGroup = withContext(Menu.RadioItemGroup, "itemGroup", { forwardAsChild: true });
const MenuRadioItem = withContext(
  Menu.RadioItem,
  "item",
  { forwardAsChild: true }
);
const MenuContext = Menu.Context;
const MenuItemContext = Menu.ItemContext;

export { MenuArrow, MenuArrowTip, MenuCheckboxItem, MenuContent, MenuContext, MenuContextTrigger, MenuIndicator, MenuItem, MenuItemCommand, MenuItemContext, MenuItemGroup, MenuItemGroupLabel, MenuItemIndicator, MenuItemText, MenuPositioner, MenuPropsProvider, MenuRadioItem, MenuRadioItemGroup, MenuRoot, MenuRootProvider, MenuSeparator, MenuTrigger, MenuTriggerItem, useMenuStyles };
