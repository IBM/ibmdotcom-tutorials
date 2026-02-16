"use strict";
'use strict';

var accordion = require('./recipes/accordion.cjs');
var actionBar = require('./recipes/action-bar.cjs');
var alert = require('./recipes/alert.cjs');
var avatar = require('./recipes/avatar.cjs');
var blockquote = require('./recipes/blockquote.cjs');
var breadcrumb = require('./recipes/breadcrumb.cjs');
var card = require('./recipes/card.cjs');
var checkbox = require('./recipes/checkbox.cjs');
var checkboxCard = require('./recipes/checkbox-card.cjs');
var collapsible = require('./recipes/collapsible.cjs');
var colorPicker = require('./recipes/color-picker.cjs');
var dataList = require('./recipes/data-list.cjs');
var dialog = require('./recipes/dialog.cjs');
var drawer = require('./recipes/drawer.cjs');
var editable = require('./recipes/editable.cjs');
var emptyState = require('./recipes/empty-state.cjs');
var field = require('./recipes/field.cjs');
var fieldset = require('./recipes/fieldset.cjs');
var fileUpload = require('./recipes/file-upload.cjs');
var hoverCard = require('./recipes/hover-card.cjs');
var list = require('./recipes/list.cjs');
var menu = require('./recipes/menu.cjs');
var nativeSelect = require('./recipes/native-select.cjs');
var numberInput = require('./recipes/number-input.cjs');
var pinInput = require('./recipes/pin-input.cjs');
var popover = require('./recipes/popover.cjs');
var progress = require('./recipes/progress.cjs');
var progressCircle = require('./recipes/progress-circle.cjs');
var qrCode = require('./recipes/qr-code.cjs');
var radioCard = require('./recipes/radio-card.cjs');
var radioGroup = require('./recipes/radio-group.cjs');
var ratingGroup = require('./recipes/rating-group.cjs');
var segmentGroup = require('./recipes/segment-group.cjs');
var select = require('./recipes/select.cjs');
var slider = require('./recipes/slider.cjs');
var stat = require('./recipes/stat.cjs');
var status = require('./recipes/status.cjs');
var steps = require('./recipes/steps.cjs');
var _switch = require('./recipes/switch.cjs');
var table = require('./recipes/table.cjs');
var tabs = require('./recipes/tabs.cjs');
var tag = require('./recipes/tag.cjs');
var timeline = require('./recipes/timeline.cjs');
var toast = require('./recipes/toast.cjs');
var tooltip = require('./recipes/tooltip.cjs');

const slotRecipes = {
  accordion: accordion.accordionSlotRecipe,
  actionBar: actionBar.actionBarSlotRecipe,
  alert: alert.alertSlotRecipe,
  avatar: avatar.avatarSlotRecipe,
  blockquote: blockquote.blockquoteSlotRecipe,
  breadcrumb: breadcrumb.breadcrumbSlotRecipe,
  card: card.cardSlotRecipe,
  checkbox: checkbox.checkboxSlotRecipe,
  checkboxCard: checkboxCard.checkboxCardSlotRecipe,
  collapsible: collapsible.collapsibleSlotRecipe,
  dataList: dataList.dataListSlotRecipe,
  dialog: dialog.dialogSlotRecipe,
  drawer: drawer.drawerSlotRecipe,
  editable: editable.editableSlotRecipe,
  emptyState: emptyState.emptyStateSlotRecipe,
  field: field.fieldSlotRecipe,
  fieldset: fieldset.fieldsetSlotRecipe,
  fileUpload: fileUpload.fileUploadSlotRecipe,
  hoverCard: hoverCard.hoverCardSlotRecipe,
  list: list.listSlotRecipe,
  menu: menu.menuSlotRecipe,
  nativeSelect: nativeSelect.nativeSelectSlotRecipe,
  numberInput: numberInput.numberInputSlotRecipe,
  pinInput: pinInput.pinInputSlotRecipe,
  popover: popover.popoverSlotRecipe,
  progress: progress.progressSlotRecipe,
  progressCircle: progressCircle.progressCircleSlotRecipe,
  radioCard: radioCard.radioCardSlotRecipe,
  radioGroup: radioGroup.radioGroupSlotRecipe,
  ratingGroup: ratingGroup.ratingGroupSlotRecipe,
  segmentGroup: segmentGroup.segmentGroupSlotRecipe,
  select: select.selectSlotRecipe,
  slider: slider.sliderSlotRecipe,
  stat: stat.statSlotRecipe,
  steps: steps.stepsSlotRecipe,
  switch: _switch.switchSlotRecipe,
  table: table.tableSlotRecipe,
  tabs: tabs.tabsSlotRecipe,
  tag: tag.tagSlotRecipe,
  toast: toast.toastSlotRecipe,
  tooltip: tooltip.tooltipSlotRecipe,
  status: status.statusSlotRecipe,
  timeline: timeline.timelineSlotRecipe,
  colorPicker: colorPicker.colorPickerSlotRecipe,
  qrCode: qrCode.qrCodeSlotRecipe
};

exports.slotRecipes = slotRecipes;
