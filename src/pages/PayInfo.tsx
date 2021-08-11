import HeaderBar from '../components/HeaderBar';
import Heading from '../components/Heading';
import CustomerForm from './components/PayInfo/CustomerForm';
import PageController from '../components/PageController';

const PayInfo = () => {
  return (
    <>
      <HeaderBar />
      <div className="payinfo-wrapper">
        <Heading title={'信用卡資訊'} />
        <CustomerForm />
      </div>
      <PageController />
    </>
  );
};

export default PayInfo;
