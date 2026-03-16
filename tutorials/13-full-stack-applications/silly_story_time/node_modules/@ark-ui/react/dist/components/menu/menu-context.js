'use client';
import { useMenuContext } from './use-menu-context.js';

const MenuContext = (props) => props.children(useMenuContext());

export { MenuContext };
