import { useSelector, useDispatch } from 'react-redux';
import { storeType } from '../../../store';
import { SetCommodityMethod } from '../../../actions/CommodityMethod';

import PayMethod from './PayMethod';

const payMethods = [
  {
    logo: 'creditcard',
    text: '信用卡'
  },
  {
    logo: 'atm',
    text: '銀行轉帳'
  },
  {
    logo: 'paypal',
    text: null
  },
  {
    logo: 'barcode',
    text: '超商繳費'
  }
];
const PayMethods = () => {
  const commodityMethod = useSelector(
    (state: storeType) => state.commodityMethodReducer
  );
  const dispatch = useDispatch();

  const handleSelectCommodityMethod = (n: number): void => {
    dispatch(SetCommodityMethod(n));
  };

  return (
    <div className="commodity-list-methods-wrapper">
      {payMethods.map(
        (payMethod: { logo: string; text: string | null }, index: number) => {
          return (
            <PayMethod
              key={index + 1}
              icon={payMethod.logo}
              text={payMethod.text}
              isSelected={commodityMethod === index + 1}
              onClickHandler={() => handleSelectCommodityMethod(index + 1)}
            />
          );
        }
      )}
    </div>
  );
};

export default PayMethods;
