'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const useMenuItemContext = require('./use-menu-item-context.cjs');

const MenuItemContext = (props) => props.children(useMenuItemContext.useMenuItemContext());

exports.MenuItemContext = MenuItemContext;
