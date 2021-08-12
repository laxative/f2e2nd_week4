import {
  SET_PAY_INFO,
  RESET_PAY_INFO,
  payInfoActionType,
  PayInfoPayloadType
} from '../../actions/PayInfo';

const reducer = (
  state: PayInfoPayloadType = {
    cardNumber: '',
    goodthru: '',
    cvc: '',
    name: ''
  },
  action: payInfoActionType
): PayInfoPayloadType => {
  switch (action.type) {
    case SET_PAY_INFO:
      return action.payload;
    case RESET_PAY_INFO:
      return {
        cardNumber: '',
        goodthru: '',
        cvc: '',
        name: ''
      };
    default:
      return state;
  }
};

export default reducer;
