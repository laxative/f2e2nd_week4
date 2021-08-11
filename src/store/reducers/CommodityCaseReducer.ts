import {
  commodityCaseActionType,
  SET_COMMODITY_CASE
} from '../../actions/CommodityCase';

const reducer = (
  state: number = 0,
  action: commodityCaseActionType
): number => {
  switch (action.type) {
    case SET_COMMODITY_CASE:
      return action.payload.n;
    default:
      return state;
  }
};

export default reducer;
