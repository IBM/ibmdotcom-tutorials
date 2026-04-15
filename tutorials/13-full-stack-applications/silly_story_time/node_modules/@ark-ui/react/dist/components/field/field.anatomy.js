'use client';
import { createAnatomy } from '@zag-js/anatomy';

const fieldAnatomy = createAnatomy("field").parts(
  "root",
  "errorText",
  "helperText",
  "input",
  "label",
  "select",
  "textarea",
  "requiredIndicator"
);
const parts = fieldAnatomy.build();

export { fieldAnatomy, parts };
