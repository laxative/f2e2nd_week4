export const SET_PAY_INFO = 'SET_PAY_INFO';
export const RESET_PAY_INFO = 'RESET_PAY_INFO';

export type PayInfoPayloadType = {
  cardNumber: string;
  goodthru: string;
  cvc: string;
  name: string;
};

interface SetPayInfoInterface {
  type: typeof SET_PAY_INFO;
  payload: PayInfoPayloadType;
}

interface ResetPayInfoInterface {
  type: typeof RESET_PAY_INFO;
}

export const SetPayInfo = (
  payload: PayInfoPayloadType
): SetPayInfoInterface => ({
  type: SET_PAY_INFO,
  payload
});

export const ResetPayInfo = (): ResetPayInfoInterface => ({
  type: RESET_PAY_INFO
});

export type payInfoActionType = SetPayInfoInterface | ResetPayInfoInterface;
