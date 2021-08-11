import HeaderBar from '../components/HeaderBar';
import Heading from '../components/Heading';
import Cases from './components/CommodityList/Cases';
import PayMethods from './components/CommodityList/PayMethods';
import PageController from '../components/PageController';

const CommodityList = () => {
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
      <PageController />
    </>
  );
};

export default CommodityList;
