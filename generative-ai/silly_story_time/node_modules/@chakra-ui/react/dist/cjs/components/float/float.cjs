"use strict";
"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var walkObject = require('../../utils/walk-object.cjs');
var factory = require('../../styled-system/factory.cjs');

const Float = React.forwardRef(
  function Float2(props, ref) {
    const {
      offsetX,
      offsetY,
      offset = "0",
      placement = "top-end",
      ...rest
    } = props;
    const styles = React.useMemo(
      () => ({
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        insetBlockStart: walkObject.mapObject(placement, (v) => {
          const [side] = v.split("-");
          const map = {
            top: offsetY ?? offset,
            middle: "50%",
            bottom: "auto"
          };
          return map[side];
        }),
        insetBlockEnd: walkObject.mapObject(placement, (v) => {
          const [side] = v.split("-");
          const map = {
            top: "auto",
            middle: "50%",
            bottom: offsetY ?? offset
          };
          return map[side];
        }),
        insetStart: walkObject.mapObject(placement, (v) => {
          const [, align] = v.split("-");
          const map = {
            start: offsetX ?? offset,
            center: "50%",
            end: "auto"
          };
          return map[align];
        }),
        insetEnd: walkObject.mapObject(placement, (v) => {
          const [, align] = v.split("-");
          const map = {
            start: "auto",
            center: "50%",
            end: offsetX ?? offset
          };
          return map[align];
        }),
        translate: walkObject.mapObject(placement, (v) => {
          const [side, align] = v.split("-");
          const mapX = { start: "-50%", center: "-50%", end: "50%" };
          const mapY = { top: "-50%", middle: "-50%", bottom: "50%" };
          return `${mapX[align]} ${mapY[side]}`;
        })
      }),
      [offset, offsetX, offsetY, placement]
    );
    return /* @__PURE__ */ jsxRuntime.jsx(factory.chakra.div, { ref, css: styles, ...rest });
  }
);

exports.Float = Float;
