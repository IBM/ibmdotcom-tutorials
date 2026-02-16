// src/normalize-span.ts
var normalizeSpan = (spans, len) => {
  const result = [];
  const append = (start, end, match) => {
    if (end - start > 0) result.push({ start, end, match });
  };
  if (spans.length === 0) {
    append(0, len, false);
  } else {
    let lastIndex = 0;
    for (const chunk of spans) {
      append(lastIndex, chunk.start, false);
      append(chunk.start, chunk.end, true);
      lastIndex = chunk.end;
    }
    append(lastIndex, len, false);
  }
  return result;
};

// src/highlight-first.ts
function highlightFirst(props) {
  const { text, query, ignoreCase } = props;
  const searchText = ignoreCase ? text.toLowerCase() : text;
  const searchQuery = ignoreCase ? typeof query === "string" ? query.toLowerCase() : query : query;
  const start = typeof searchText === "string" ? searchText.indexOf(searchQuery) : -1;
  if (start === -1) {
    return [{ text, match: false }];
  }
  const end = start + searchQuery.length;
  const spans = [{ start, end }];
  return normalizeSpan(spans, text.length).map((chunk) => ({
    text: text.slice(chunk.start, chunk.end),
    match: !!chunk.match
  }));
}

// src/highlight-multiple.ts
var escapeRegexp = (term) => term.replace(/[|\\{}()[\]^$+*?.-]/g, (char) => `\\${char}`);
var buildRegex = (queryProp, flags) => {
  const query = queryProp.filter(Boolean).map((text) => escapeRegexp(text));
  return new RegExp(`(${query.join("|")})`, flags);
};
var getRegexFlags = (ignoreCase, matchAll = true) => `${ignoreCase ? "i" : ""}${matchAll ? "g" : ""}`;
function highlightMultiple(props) {
  const { text, query, ignoreCase, matchAll } = props;
  if (query.length === 0) {
    return [{ text, match: false }];
  }
  const flags = getRegexFlags(ignoreCase, matchAll);
  const regex = buildRegex(Array.isArray(query) ? query : [query], flags);
  const spans = [...text.matchAll(regex)].map((match) => ({
    start: match.index || 0,
    end: (match.index || 0) + match[0].length
  }));
  return normalizeSpan(spans, props.text.length).map((chunk) => ({
    text: props.text.slice(chunk.start, chunk.end),
    match: !!chunk.match
  }));
}

// src/highlight.ts
var highlightWord = (props) => {
  if (props.matchAll == null) {
    props.matchAll = Array.isArray(props.query);
  }
  if (!props.matchAll && Array.isArray(props.query)) {
    throw new Error("matchAll must be true when using multiple queries");
  }
  return props.matchAll ? highlightMultiple(props) : highlightFirst(props);
};

export { highlightWord };
