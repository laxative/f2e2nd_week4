import HeaderBar from '../components/HeaderBar';
import Heading from '../components/Heading';
import PageController from '../components/PageController';

const CommodityList = () => {
  return (
    <>
      <HeaderBar />
      <div className="commodity-list-container">
        <div className="commodity-list-cases">
          <Heading title={'期間卷方案'} />
          <div className="commodity-list-cases-wrapper">
            <div className="commodity-list-cases-item">
              <div className="clci-svg clci-svg-3-hour"></div>
            </div>
            <div className="commodity-list-cases-item">
              <div className="clci-svg clci-svg-24-hour"></div>
            </div>
            <div className="commodity-list-cases-item">
              <div className="clci-svg clci-svg-30-days"></div>
            </div>
            <div className="commodity-list-cases-item">
              <div className="clci-svg clci-svg-90-days"></div>
            </div>
          </div>
        </div>
        <div className="commodity-list-pay-methods">
          <Heading title={'付款方式'} />
          <div className="commodity-list-methods-wrapper">
            <div className="commodity-list-methods-item">
              <div className="clmi-logo clmi-logo-creditcard" />
              <div className="clmi-text">信用卡</div>
            </div>
            <div className="commodity-list-methods-item">
              <div className="clmi-logo clmi-logo-atm" />
              <div className="clmi-text">銀行轉帳</div>
            </div>
            <div className="commodity-list-methods-item">
              <div className="clmi-logo clmi-logo-paypal" />
            </div>
            <div className="commodity-list-methods-item">
              <div className="clmi-logo clmi-logo-barcode" />
              <div className="clmi-text">超商繳費</div>
            </div>
          </div>
        </div>
      </div>
      <PageController />
    </>
  );
};

export default CommodityList;
