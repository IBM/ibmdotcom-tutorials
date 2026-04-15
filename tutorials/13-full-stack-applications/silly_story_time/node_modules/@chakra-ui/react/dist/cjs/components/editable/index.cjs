"use strict";
'use strict';

var editable = require('./editable.cjs');
var editable$1 = require('@ark-ui/react/editable');
var namespace = require('./namespace.cjs');



exports.EditableArea = editable.EditableArea;
exports.EditableCancelTrigger = editable.EditableCancelTrigger;
exports.EditableContext = editable.EditableContext;
exports.EditableControl = editable.EditableControl;
exports.EditableEditTrigger = editable.EditableEditTrigger;
exports.EditableInput = editable.EditableInput;
exports.EditablePreview = editable.EditablePreview;
exports.EditablePropsProvider = editable.EditablePropsProvider;
exports.EditableRoot = editable.EditableRoot;
exports.EditableRootProvider = editable.EditableRootProvider;
exports.EditableSubmitTrigger = editable.EditableSubmitTrigger;
exports.EditableTextarea = editable.EditableTextarea;
exports.useEditableStyles = editable.useEditableStyles;
Object.defineProperty(exports, "useEditable", {
  enumerable: true,
  get: function () { return editable$1.useEditable; }
});
Object.defineProperty(exports, "useEditableContext", {
  enumerable: true,
  get: function () { return editable$1.useEditableContext; }
});
exports.Editable = namespace;
