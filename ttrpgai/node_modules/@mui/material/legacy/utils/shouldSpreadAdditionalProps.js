import isHostComponent from '@mui/utils/isHostComponent';
var shouldSpreadAdditionalProps = function shouldSpreadAdditionalProps(Slot) {
  return !Slot || !isHostComponent(Slot);
};
export default shouldSpreadAdditionalProps;