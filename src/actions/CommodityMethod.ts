export const SET_COMMODITY_METHOD = 'SET_COMMODITY_METHOD';
export const RESET_COMMODITY_METHOD = 'RESET_COMMODITY_METHOD';
interface SetCommodityMethodInterface {
  type: typeof SET_COMMODITY_METHOD;
  payload: {
    n: number;
  };
}

interface ResetCommodityMethodInterface {
  type: typeof RESET_COMMODITY_METHOD;
}

export const SetCommodityMethod = (n: number): SetCommodityMethodInterface => ({
  type: SET_COMMODITY_METHOD,
  payload: {
    n
  }
});

export const ResetCommodityMethod = (): ResetCommodityMethodInterface => ({
  type: RESET_COMMODITY_METHOD
});

export type commodityMethodActionType =
  | SetCommodityMethodInterface
  | ResetCommodityMethodInterface;
