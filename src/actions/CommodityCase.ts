export const SET_COMMODITY_CASE = 'SET_COMMODITY_CASE';
export const RESET_COMMODITY_CASE = 'RESET_COMMODITY_CASE';

interface SetCommodityCaseInterface {
  type: typeof SET_COMMODITY_CASE;
  payload: {
    n: number;
  };
}

interface ResetCommodityCaseInterface {
  type: typeof RESET_COMMODITY_CASE;
}

export const SetCommodityCase = (n: number): SetCommodityCaseInterface => ({
  type: SET_COMMODITY_CASE,
  payload: {
    n
  }
});

export const ResetCommodityCase = (): ResetCommodityCaseInterface => ({
  type: RESET_COMMODITY_CASE
});

export type commodityCaseActionType =
  | SetCommodityCaseInterface
  | ResetCommodityCaseInterface;
