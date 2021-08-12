import HeaderBar from '../components/HeaderBar';
import CustomerForm from './components/PayInfo/CustomerForm';
import CommodityItem from './components/PayInfo/CommodityItem';
import PageController from '../components/PageController';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ResetPayInfo } from '../actions/PayInfo';
import { ResetCommodityCase } from '../actions/CommodityCase';
import { ResetCommodityMethod } from '../actions/CommodityMethod';
import { useSelector } from 'react-redux';
import { storeType } from '../store';
import Swal from 'sweetalert2';

const PayInfo = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const payInfo = useSelector((store: storeType) => store.payInfoReducer);

  const prevClickHandler = () => {
    dispatch(ResetPayInfo());
    dispatch(ResetCommodityCase());
    dispatch(ResetCommodityMethod());
    history.goBack();
  };

  const nextClickHandler = () => {
    if (
      !payInfo.name.length ||
      !payInfo.goodthru.length ||
      !payInfo.cvc.length ||
      !payInfo.cardNumber.length
    ) {
      Swal.fire({
        title: 'Error!',
        text: '請填入必填項目',
        icon: 'error',
        confirmButtonText: 'Close'
      });
    } else {
      history.push({ pathname: 'checkOrder' });
    }
  };

  return (
    <>
      <HeaderBar />
      <div className="payinfo-wrapper">
        <CustomerForm />
        <CommodityItem />
      </div>
      <PageController
        prevClickHandler={() => prevClickHandler()}
        nextClickHandler={() => nextClickHandler()}
      />
    </>
  );
};

export default PayInfo;
