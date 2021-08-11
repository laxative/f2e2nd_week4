export const SET_COMMODITY_METHOD = 'SET_COMMODITY_METHOD';

interface SetCommodityMethodInterface {
  type: typeof SET_COMMODITY_METHOD;
  payload: {
    n: number;
  };
}

export const SetCommodityMethod = (n: number): SetCommodityMethodInterface => ({
  type: SET_COMMODITY_METHOD,
  payload: {
    n
  }
});

export type commodityMethodActionType = SetCommodityMethodInterface;
