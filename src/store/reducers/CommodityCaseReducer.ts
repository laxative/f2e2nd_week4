import {
  commodityCaseActionType,
  RESET_COMMODITY_CASE,
  SET_COMMODITY_CASE
} from '../../actions/CommodityCase';

const reducer = (
  state: number = 0,
  action: commodityCaseActionType
): number => {
  switch (action.type) {
    case SET_COMMODITY_CASE:
      return action.payload.n;
    case RESET_COMMODITY_CASE:
      return 0;
    default:
      return state;
  }
};

export default reducer;
