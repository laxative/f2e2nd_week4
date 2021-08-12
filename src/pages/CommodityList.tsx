import HeaderBar from '../components/HeaderBar';
import Heading from '../components/Heading';
import Cases from './components/CommodityList/Cases';
import PayMethods from './components/CommodityList/PayMethods';
import PageController from '../components/PageController';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { storeType } from '../store';
import { useSelector } from 'react-redux';

const CommodityList = () => {
  const history = useHistory();
  const commodityCase = useSelector(
    (store: storeType) => store.commodityCaseReducer
  );
  const commodityMethod = useSelector(
    (store: storeType) => store.commodityMethodReducer
  );

  const nextClickHandler = () => {
    if (!commodityCase || !commodityMethod) {
      // user not choose case or method yet
      Swal.fire({
        title: 'Error!',
        text: '請選擇方案以及付款方式',
        icon: 'error',
        confirmButtonText: 'Close'
      });
    } else {
      history.push({ pathname: 'payInfo' });
    }
  };

  return (
    <>
      <HeaderBar />
      <div className="commodity-list-container">
        <div className="commodity-list-cases">
          <Heading title={'期間卷方案'} />
          <Cases />
        </div>
        <div className="commodity-list-pay-methods">
          <Heading title={'付款方式'} />
          <PayMethods />
        </div>
      </div>
      <PageController
        prevClickHandler={() => {}}
        nextClickHandler={() => nextClickHandler()}
      />
    </>
  );
};

export default CommodityList;
