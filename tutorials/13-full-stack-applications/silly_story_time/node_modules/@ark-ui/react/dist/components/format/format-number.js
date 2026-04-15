'use client';
import { jsx, Fragment } from 'react/jsx-runtime';
import { formatNumber } from '@zag-js/i18n-utils';
import { useMemo } from 'react';
import { useLocaleContext } from '../../providers/locale/use-locale-context.js';

const FormatNumber = (props) => {
  const { value, ...intlOptions } = props;
  const { locale } = useLocaleContext();
  const text = useMemo(() => formatNumber(value, locale, intlOptions), [value, locale, intlOptions]);
  return /* @__PURE__ */ jsx(Fragment, { children: text });
};
FormatNumber.displayName = "FormatNumber";

export { FormatNumber };
