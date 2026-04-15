'use client';
import { createAnatomy } from '@zag-js/anatomy';

const fieldsetAnatomy = createAnatomy("fieldset").parts("root", "errorText", "helperText", "legend");
const parts = fieldsetAnatomy.build();

export { fieldsetAnatomy, parts };
