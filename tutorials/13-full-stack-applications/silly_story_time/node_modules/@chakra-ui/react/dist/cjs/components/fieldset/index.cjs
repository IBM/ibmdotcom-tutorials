"use strict";
'use strict';

var fieldset = require('./fieldset.cjs');
var fieldset$1 = require('@ark-ui/react/fieldset');
var namespace = require('./namespace.cjs');



exports.FieldsetContent = fieldset.FieldsetContent;
exports.FieldsetContext = fieldset.FieldsetContext;
exports.FieldsetErrorText = fieldset.FieldsetErrorText;
exports.FieldsetHelperText = fieldset.FieldsetHelperText;
exports.FieldsetLegend = fieldset.FieldsetLegend;
exports.FieldsetRoot = fieldset.FieldsetRoot;
Object.defineProperty(exports, "useFieldsetContext", {
  enumerable: true,
  get: function () { return fieldset$1.useFieldsetContext; }
});
exports.Fieldset = namespace;
