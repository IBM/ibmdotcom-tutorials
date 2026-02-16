'use client';
import { jsx, Fragment } from 'react/jsx-runtime';
import { formatBytes } from '@zag-js/i18n-utils';
import { useMemo } from 'react';
import { useLocaleContext } from '../../providers/locale/use-locale-context.js';

const FormatByte = (props) => {
  const { value, ...intlOptions } = props;
  const { locale } = useLocaleContext();
  const text = useMemo(() => formatBytes(value, locale, intlOptions), [value, locale, intlOptions]);
  return /* @__PURE__ */ jsx(Fragment, { children: text });
};
FormatByte.displayName = "FormatByte";

export { FormatByte };
