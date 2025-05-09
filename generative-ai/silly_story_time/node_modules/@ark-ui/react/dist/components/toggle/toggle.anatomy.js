'use client';
import { createAnatomy } from '@zag-js/anatomy';

const toggleAnatomy = createAnatomy("toggle", ["root", "indicator"]);
toggleAnatomy.build();

export { toggleAnatomy };
