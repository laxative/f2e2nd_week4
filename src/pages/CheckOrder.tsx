import HeaderBar from '../components/HeaderBar';
import orderDownPhoto from '../assets/svg/CheckOrder/photo_order done.svg';

const CheckOrder = () => {
  return (
    <>
      <HeaderBar />
      <div className="check-order-wrapper">
        <img src={orderDownPhoto} />
        <p>訂單已完成 !</p>
        <button>結束</button>
      </div>
    </>
  );
};

export default CheckOrder;
