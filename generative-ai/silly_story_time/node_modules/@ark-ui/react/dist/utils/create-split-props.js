'use client';
const createSplitProps = () => (props, keys) => keys.reduce(
  (previousValue, currentValue) => {
    const [target, source] = previousValue;
    const key = currentValue;
    if (source[key] !== void 0) {
      target[key] = source[key];
    }
    delete source[key];
    return [target, source];
  },
  [{}, { ...props }]
);

export { createSplitProps };
