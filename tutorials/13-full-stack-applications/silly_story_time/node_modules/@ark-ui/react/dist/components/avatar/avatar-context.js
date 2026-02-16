'use client';
import { useAvatarContext } from './use-avatar-context.js';

const AvatarContext = (props) => props.children(useAvatarContext());

export { AvatarContext };
