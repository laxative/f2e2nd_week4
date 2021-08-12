import HeaderBar from '../components/HeaderBar';
import orderDownPhoto from '../assets/svg/CheckOrder/photo_order done.svg';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ResetCommodityCase } from '../actions/CommodityCase';
import { ResetCommodityMethod } from '../actions/CommodityMethod';
import { ResetPayInfo } from '../actions/PayInfo';

const CheckOrder = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const finishClickHandler = () => {
    dispatch(ResetCommodityCase());
    dispatch(ResetCommodityMethod());
    dispatch(ResetPayInfo());
    history.replace({ pathname: '/' });
  };

  return (
    <>
      <HeaderBar />
      <div className="check-order-wrapper">
        <img src={orderDownPhoto} alt="order down" />
        <p>訂單已完成 !</p>
        <button onClick={() => finishClickHandler()}>結束</button>
      </div>
    </>
  );
};

export default CheckOrder;
