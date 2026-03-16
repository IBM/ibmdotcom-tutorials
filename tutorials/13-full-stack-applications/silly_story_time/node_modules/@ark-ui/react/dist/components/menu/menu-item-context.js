'use client';
import { useMenuItemContext } from './use-menu-item-context.js';

const MenuItemContext = (props) => props.children(useMenuItemContext());

export { MenuItemContext };
