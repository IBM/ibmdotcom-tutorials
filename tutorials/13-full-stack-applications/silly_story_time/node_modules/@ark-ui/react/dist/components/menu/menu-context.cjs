'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const useMenuContext = require('./use-menu-context.cjs');

const MenuContext = (props) => props.children(useMenuContext.useMenuContext());

exports.MenuContext = MenuContext;
