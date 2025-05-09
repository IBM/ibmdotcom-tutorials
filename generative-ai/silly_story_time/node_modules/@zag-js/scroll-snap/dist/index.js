'use strict';

var domQuery = require('@zag-js/dom-query');

// src/index.ts
function getScrollPadding(element) {
  const style = domQuery.getComputedStyle(element);
  const rect = element.getBoundingClientRect();
  let xBeforeRaw = style.getPropertyValue("scroll-padding-left").replace("auto", "0px");
  let yBeforeRaw = style.getPropertyValue("scroll-padding-top").replace("auto", "0px");
  let xAfterRaw = style.getPropertyValue("scroll-padding-right").replace("auto", "0px");
  let yAfterRaw = style.getPropertyValue("scroll-padding-bottom").replace("auto", "0px");
  function convert(raw, size) {
    let n = parseFloat(raw);
    if (/%/.test(raw)) {
      n /= 100;
      n *= size;
    }
    return Number.isNaN(n) ? 0 : n;
  }
  let xBefore = convert(xBeforeRaw, rect.width);
  let yBefore = convert(yBeforeRaw, rect.height);
  let xAfter = convert(xAfterRaw, rect.width);
  let yAfter = convert(yAfterRaw, rect.height);
  return {
    x: { before: xBefore, after: xAfter },
    y: { before: yBefore, after: yAfter }
  };
}
function isRectIntersecting(a, b, axis = "both") {
  return axis === "x" && a.right >= b.left && a.left <= b.right || axis === "y" && a.bottom >= b.top && a.top <= b.bottom || axis === "both" && a.right >= b.left && a.left <= b.right && a.bottom >= b.top && a.top <= b.bottom;
}
function getDescendants(parent) {
  let children = [];
  for (const child of parent.children) {
    children = children.concat(child, getDescendants(child));
  }
  return children;
}
function getSnapPositions(parent, subtree = false) {
  const parentRect = parent.getBoundingClientRect();
  const positions = {
    x: { start: [], center: [], end: [] },
    y: { start: [], center: [], end: [] }
  };
  const children = subtree ? getDescendants(parent) : parent.children;
  for (const axis of ["x", "y"]) {
    const orthogonalAxis = axis === "x" ? "y" : "x";
    const axisStart = axis === "x" ? "left" : "top";
    const axisSize = axis === "x" ? "width" : "height";
    const axisScroll = axis === "x" ? "scrollLeft" : "scrollTop";
    for (const child of children) {
      const childRect = child.getBoundingClientRect();
      if (!isRectIntersecting(parentRect, childRect, orthogonalAxis)) {
        continue;
      }
      const childStyle = domQuery.getComputedStyle(child);
      let [childAlignY, childAlignX] = childStyle.getPropertyValue("scroll-snap-align").split(" ");
      if (typeof childAlignX === "undefined") {
        childAlignX = childAlignY;
      }
      const childAlign = axis === "x" ? childAlignX : childAlignY;
      const childOffsetStart = childRect[axisStart] - parentRect[axisStart] + parent[axisScroll];
      switch (childAlign) {
        case "none":
          break;
        case "start":
          positions[axis].start.push({ node: child, position: childOffsetStart });
          break;
        case "center":
          positions[axis].center.push({ node: child, position: childOffsetStart + childRect[axisSize] / 2 });
          break;
        case "end":
          positions[axis].end.push({ node: child, position: childOffsetStart + childRect[axisSize] });
          break;
      }
    }
  }
  return positions;
}
function getScrollSnapPositions(element) {
  const rect = element.getBoundingClientRect();
  const scrollPadding = getScrollPadding(element);
  const snapPositions = getSnapPositions(element);
  const maxScroll = {
    x: element.scrollWidth - element.offsetWidth,
    y: element.scrollHeight - element.offsetHeight
  };
  return {
    x: uniq(
      [
        ...snapPositions.x.start.map((v) => v.position - scrollPadding.x.before),
        ...snapPositions.x.center.map((v) => v.position - rect.width / 2),
        ...snapPositions.x.end.map((v) => v.position - rect.width + scrollPadding.x.after)
      ].map(clamp(0, maxScroll.x))
    ),
    y: uniq(
      [
        ...snapPositions.y.start.map((v) => v.position - scrollPadding.y.before),
        ...snapPositions.y.center.map((v) => v.position - rect.height / 2),
        ...snapPositions.y.end.map((v) => v.position - rect.height + scrollPadding.y.after)
      ].map(clamp(0, maxScroll.y))
    )
  };
}
function findSnapPoint(parent, axis, predicate) {
  const snapPositions = getSnapPositions(parent);
  const items = [...snapPositions[axis].start, ...snapPositions[axis].center, ...snapPositions[axis].end];
  for (const item of items) {
    if (predicate(item.node)) {
      return item.position;
    }
  }
}
function getSnapPointTarget(parent, snapPoint) {
  const rect = parent.getBoundingClientRect();
  const scrollPadding = getScrollPadding(parent);
  const children = Array.from(parent.children);
  for (const child of children) {
    const childRect = child.getBoundingClientRect();
    const childOffsetStart = {
      x: childRect.left - rect.left + parent.scrollLeft,
      y: childRect.top - rect.top + parent.scrollTop
    };
    const matchesX = [
      childOffsetStart.x - scrollPadding.x.before,
      // start
      childOffsetStart.x + childRect.width / 2 - rect.width / 2,
      // center
      childOffsetStart.x + childRect.width - rect.width + scrollPadding.x.after
      // end
    ].some((pos) => Math.abs(pos - snapPoint) < 1);
    const matchesY = [
      childOffsetStart.y - scrollPadding.y.before,
      childOffsetStart.y + childRect.height / 2 - rect.height / 2,
      childOffsetStart.y + childRect.height - rect.height + scrollPadding.y.after
    ].some((pos) => Math.abs(pos - snapPoint) < 1);
    if (matchesX || matchesY) {
      return child;
    }
  }
  return children[0];
}
var uniq = (arr) => [...new Set(arr)];
var clamp = (min, max) => (value) => Math.max(min, Math.min(max, value));

exports.findSnapPoint = findSnapPoint;
exports.getScrollSnapPositions = getScrollSnapPositions;
exports.getSnapPointTarget = getSnapPointTarget;
exports.getSnapPositions = getSnapPositions;
