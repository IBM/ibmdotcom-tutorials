"use strict";
const escRegex = /[^a-zA-Z0-9_\u0081-\uffff-]/g;
function esc(string) {
  return `${string}`.replace(escRegex, (s) => `\\${s}`);
}
const dashCaseRegex = /[A-Z]/g;
function dashCase(string) {
  return string.replace(dashCaseRegex, (match) => `-${match.toLowerCase()}`);
}
function cssVar(name, options = {}) {
  const { fallback = "", prefix = "" } = options;
  const variable = dashCase(["-", prefix, esc(name)].filter(Boolean).join("-"));
  return {
    var: variable,
    ref: `var(${variable}${fallback ? `, ${fallback}` : ""})`
  };
}

export { cssVar };
