import HeaderBar from '../components/HeaderBar';
import CustomerForm from './components/PayInfo/CustomerForm';
import CommodityItem from './components/PayInfo/CommodityItem';
import PageController from '../components/PageController';

const PayInfo = () => {
  return (
    <>
      <HeaderBar />
      <div className="payinfo-wrapper">
        <CustomerForm />
        <CommodityItem />
      </div>
      <PageController />
    </>
  );
};

export default PayInfo;
