'use strict';

var anatomy$1 = require('@zag-js/anatomy');
var domQuery = require('@zag-js/dom-query');
var core = require('@zag-js/core');
var uqr = require('uqr');
var types = require('@zag-js/types');
var utils = require('@zag-js/utils');

// src/qr-code.anatomy.ts
var anatomy = anatomy$1.createAnatomy("qr-code").parts("root", "frame", "pattern", "overlay", "downloadTrigger");
var parts = anatomy.build();

// src/qr-code.dom.ts
var getRootId = (scope) => scope.ids?.root ?? `qrcode:${scope.id}:root`;
var getFrameId = (scope) => scope.ids?.frame ?? `qrcode:${scope.id}:frame`;
var getFrameEl = (scope) => scope.getById(getFrameId(scope));

// src/qr-code.connect.ts
function connect(service, normalize) {
  const { context, computed, send, scope, prop } = service;
  const encoded = computed("encoded");
  const pixelSize = prop("pixelSize");
  const height = encoded.size * pixelSize;
  const width = encoded.size * pixelSize;
  const paths = [];
  for (let row = 0; row < encoded.size; row++) {
    for (let col = 0; col < encoded.size; col++) {
      const x = col * pixelSize;
      const y = row * pixelSize;
      if (encoded.data[row][col]) {
        paths.push(`M${x},${y}h${pixelSize}v${pixelSize}h-${pixelSize}z`);
      }
    }
  }
  return {
    value: context.get("value"),
    setValue(value) {
      send({ type: "VALUE.SET", value });
    },
    getDataUrl(type, quality) {
      const svgEl = getFrameEl(scope);
      return domQuery.getDataUrl(svgEl, { type, quality });
    },
    getRootProps() {
      return normalize.element({
        id: getRootId(scope),
        ...parts.root.attrs,
        style: {
          "--qrcode-pixel-size": `${pixelSize}px`,
          "--qrcode-width": `${width}px`,
          "--qrcode-height": `${height}px`,
          position: "relative"
        }
      });
    },
    getFrameProps() {
      return normalize.svg({
        id: getFrameId(scope),
        ...parts.frame.attrs,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: `0 0 ${width} ${height}`
      });
    },
    getPatternProps() {
      return normalize.path({
        d: paths.join(""),
        ...parts.pattern.attrs
      });
    },
    getOverlayProps() {
      return normalize.element({
        ...parts.overlay.attrs,
        style: {
          position: "absolute",
          top: "50%",
          left: "50%",
          translate: "-50% -50%"
        }
      });
    },
    getDownloadTriggerProps(props2) {
      return normalize.button({
        type: "button",
        ...parts.downloadTrigger.attrs,
        onClick(event) {
          if (event.defaultPrevented) return;
          send({ type: "DOWNLOAD_TRIGGER.CLICK", ...props2 });
        }
      });
    }
  };
}
var machine = core.createMachine({
  props({ props: props2 }) {
    return {
      defaultValue: "",
      pixelSize: 10,
      ...props2
    };
  },
  initialState() {
    return "idle";
  },
  context({ prop, bindable }) {
    return {
      value: bindable(() => ({
        value: prop("value"),
        defaultValue: prop("defaultValue"),
        onChange(value) {
          prop("onValueChange")?.({ value });
        }
      }))
    };
  },
  computed: {
    encoded: core.memo(
      ({ context, prop }) => [context.get("value"), prop("encoding")],
      (value, encoding) => uqr.encode(value, encoding)
    )
  },
  states: {
    idle: {
      on: {
        "VALUE.SET": {
          actions: ["setValue"]
        },
        "DOWNLOAD_TRIGGER.CLICK": {
          actions: ["downloadQrCode"]
        }
      }
    }
  },
  implementations: {
    actions: {
      setValue({ context, event }) {
        context.set("value", event.value);
      },
      downloadQrCode({ event, scope }) {
        const { mimeType, quality, fileName } = event;
        const svgEl = getFrameEl(scope);
        const doc = scope.getDoc();
        domQuery.getDataUrl(svgEl, { type: mimeType, quality }).then((dataUri) => {
          const a = doc.createElement("a");
          a.href = dataUri;
          a.rel = "noopener";
          a.download = fileName;
          a.click();
          setTimeout(() => {
            a.remove();
          }, 0);
        });
      }
    }
  }
});
var props = types.createProps()([
  "ids",
  "defaultValue",
  "value",
  "id",
  "encoding",
  "dir",
  "getRootNode",
  "onValueChange",
  "pixelSize"
]);
var splitProps = utils.createSplitProps(props);

exports.anatomy = anatomy;
exports.connect = connect;
exports.machine = machine;
exports.props = props;
exports.splitProps = splitProps;
