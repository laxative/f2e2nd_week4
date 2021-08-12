import {
  commodityMethodActionType,
  RESET_COMMODITY_METHOD,
  SET_COMMODITY_METHOD
} from '../../actions/CommodityMethod';

const reducer = (
  state: number = 0,
  action: commodityMethodActionType
): number => {
  switch (action.type) {
    case SET_COMMODITY_METHOD:
      return action.payload.n;
    case RESET_COMMODITY_METHOD:
      return 0;
    default:
      return state;
  }
};

export default reducer;
