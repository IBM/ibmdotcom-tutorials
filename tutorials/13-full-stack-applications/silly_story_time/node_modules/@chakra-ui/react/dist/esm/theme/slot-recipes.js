"use strict";
import { accordionSlotRecipe } from './recipes/accordion.js';
import { actionBarSlotRecipe } from './recipes/action-bar.js';
import { alertSlotRecipe } from './recipes/alert.js';
import { avatarSlotRecipe } from './recipes/avatar.js';
import { blockquoteSlotRecipe } from './recipes/blockquote.js';
import { breadcrumbSlotRecipe } from './recipes/breadcrumb.js';
import { cardSlotRecipe } from './recipes/card.js';
import { checkboxSlotRecipe } from './recipes/checkbox.js';
import { checkboxCardSlotRecipe } from './recipes/checkbox-card.js';
import { collapsibleSlotRecipe } from './recipes/collapsible.js';
import { colorPickerSlotRecipe } from './recipes/color-picker.js';
import { dataListSlotRecipe } from './recipes/data-list.js';
import { dialogSlotRecipe } from './recipes/dialog.js';
import { drawerSlotRecipe } from './recipes/drawer.js';
import { editableSlotRecipe } from './recipes/editable.js';
import { emptyStateSlotRecipe } from './recipes/empty-state.js';
import { fieldSlotRecipe } from './recipes/field.js';
import { fieldsetSlotRecipe } from './recipes/fieldset.js';
import { fileUploadSlotRecipe } from './recipes/file-upload.js';
import { hoverCardSlotRecipe } from './recipes/hover-card.js';
import { listSlotRecipe } from './recipes/list.js';
import { menuSlotRecipe } from './recipes/menu.js';
import { nativeSelectSlotRecipe } from './recipes/native-select.js';
import { numberInputSlotRecipe } from './recipes/number-input.js';
import { pinInputSlotRecipe } from './recipes/pin-input.js';
import { popoverSlotRecipe } from './recipes/popover.js';
import { progressSlotRecipe } from './recipes/progress.js';
import { progressCircleSlotRecipe } from './recipes/progress-circle.js';
import { qrCodeSlotRecipe } from './recipes/qr-code.js';
import { radioCardSlotRecipe } from './recipes/radio-card.js';
import { radioGroupSlotRecipe } from './recipes/radio-group.js';
import { ratingGroupSlotRecipe } from './recipes/rating-group.js';
import { segmentGroupSlotRecipe } from './recipes/segment-group.js';
import { selectSlotRecipe } from './recipes/select.js';
import { sliderSlotRecipe } from './recipes/slider.js';
import { statSlotRecipe } from './recipes/stat.js';
import { statusSlotRecipe } from './recipes/status.js';
import { stepsSlotRecipe } from './recipes/steps.js';
import { switchSlotRecipe } from './recipes/switch.js';
import { tableSlotRecipe } from './recipes/table.js';
import { tabsSlotRecipe } from './recipes/tabs.js';
import { tagSlotRecipe } from './recipes/tag.js';
import { timelineSlotRecipe } from './recipes/timeline.js';
import { toastSlotRecipe } from './recipes/toast.js';
import { tooltipSlotRecipe } from './recipes/tooltip.js';

const slotRecipes = {
  accordion: accordionSlotRecipe,
  actionBar: actionBarSlotRecipe,
  alert: alertSlotRecipe,
  avatar: avatarSlotRecipe,
  blockquote: blockquoteSlotRecipe,
  breadcrumb: breadcrumbSlotRecipe,
  card: cardSlotRecipe,
  checkbox: checkboxSlotRecipe,
  checkboxCard: checkboxCardSlotRecipe,
  collapsible: collapsibleSlotRecipe,
  dataList: dataListSlotRecipe,
  dialog: dialogSlotRecipe,
  drawer: drawerSlotRecipe,
  editable: editableSlotRecipe,
  emptyState: emptyStateSlotRecipe,
  field: fieldSlotRecipe,
  fieldset: fieldsetSlotRecipe,
  fileUpload: fileUploadSlotRecipe,
  hoverCard: hoverCardSlotRecipe,
  list: listSlotRecipe,
  menu: menuSlotRecipe,
  nativeSelect: nativeSelectSlotRecipe,
  numberInput: numberInputSlotRecipe,
  pinInput: pinInputSlotRecipe,
  popover: popoverSlotRecipe,
  progress: progressSlotRecipe,
  progressCircle: progressCircleSlotRecipe,
  radioCard: radioCardSlotRecipe,
  radioGroup: radioGroupSlotRecipe,
  ratingGroup: ratingGroupSlotRecipe,
  segmentGroup: segmentGroupSlotRecipe,
  select: selectSlotRecipe,
  slider: sliderSlotRecipe,
  stat: statSlotRecipe,
  steps: stepsSlotRecipe,
  switch: switchSlotRecipe,
  table: tableSlotRecipe,
  tabs: tabsSlotRecipe,
  tag: tagSlotRecipe,
  toast: toastSlotRecipe,
  tooltip: tooltipSlotRecipe,
  status: statusSlotRecipe,
  timeline: timelineSlotRecipe,
  colorPicker: colorPickerSlotRecipe,
  qrCode: qrCodeSlotRecipe
};

export { slotRecipes };
