import { useSelector, useDispatch } from 'react-redux';
import { storeType } from '../../../store';
import { SetCommodityCase } from '../../../actions/CommodityCase';

import Case from './Case';
const commodityCases = ['3-hour', '24-hour', '30-days', '90-days'];

const Cases = () => {
  const commodityCase = useSelector(
    (state: storeType) => state.commodityCaseReducer
  );
  const dispatch = useDispatch();

  const handleSelectCommodityCase = (n: number): void => {
    dispatch(SetCommodityCase(n));
  };

  return (
    <div className="commodity-list-cases-wrapper">
      {commodityCases.map((item: string, index: number) => {
        return (
          <Case
            key={index}
            icon={item}
            isSelected={commodityCase === index + 1}
            onClickHandler={() => handleSelectCommodityCase(index + 1)}
          />
        );
      })}
    </div>
  );
};

export default Cases;
