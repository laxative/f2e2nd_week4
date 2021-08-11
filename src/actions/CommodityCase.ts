export const SET_COMMODITY_CASE = 'SET_COMMODITY_CASE';

interface SetCommodityCaseInterface {
  type: typeof SET_COMMODITY_CASE;
  payload: {
    n: number;
  };
}

export const SetCommodityCase = (n: number): SetCommodityCaseInterface => ({
  type: SET_COMMODITY_CASE,
  payload: {
    n
  }
});

export type commodityCaseActionType = SetCommodityCaseInterface;
