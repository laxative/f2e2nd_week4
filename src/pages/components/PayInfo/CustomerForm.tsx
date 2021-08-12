import Heading from '../../../components/Heading';
import { useSelector, useDispatch } from 'react-redux';
import { SetPayInfo, PayInfoPayloadType } from '../../../actions/PayInfo';
import { storeType } from '../../../store';
import { ChangeEvent } from 'react';

const CustomerForm = () => {
  const payInfoPayload = useSelector(
    (store: storeType) => store.payInfoReducer
  );
  const dispatch = useDispatch();
  const inputValueChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const [key, value] = [event.target.name, event.target.value];
    let payload: PayInfoPayloadType = {
      ...payInfoPayload
    };
    switch (key) {
      case 'cardNumber':
        payload.cardNumber = value;
        break;
      case 'goodthru':
        payload.goodthru = value;
        break;
      case 'cvc':
        payload.cvc = value;
        break;
      case 'name':
        payload.name = value;
        break;
      default:
        break;
    }
    dispatch(SetPayInfo(payload));
  };

  return (
    <form className="payinfo-customer-form">
      <Heading title={'信用卡資訊'} />
      <section className="payinfo-customer-form-row">
        <label htmlFor="cardNumber">
          信用卡號 :
          <strong>
            <abbr title="required">*</abbr>
          </strong>
        </label>
        <div className="input-wrapper">
          <input
            name="cardNumber"
            type="text"
            placeholder="0000-0000-0000-0000"
            value={payInfoPayload.cardNumber}
            onChange={(event) => inputValueChangeHandler(event)}
          />
        </div>
      </section>
      <section className="payinfo-customer-form-row">
        <section className="payinfo-customer-form-col">
          <label htmlFor="goodthru">
            有效年 / 月 :
            <strong>
              <abbr title="required">*</abbr>
            </strong>
          </label>
          <div className="input-wrapper">
            <input
              name="goodthru"
              type="text"
              placeholder="MM/YY"
              value={payInfoPayload.goodthru}
              onChange={(event) => inputValueChangeHandler(event)}
            />
          </div>
        </section>
        <section className="payinfo-customer-form-col">
          <label htmlFor="cvc">
            CVC :
            <strong>
              <abbr title="required">*</abbr>
            </strong>
          </label>
          <div className="input-wrapper">
            <input
              name="cvc"
              type="text"
              placeholder="000"
              value={payInfoPayload.cvc}
              onChange={(event) => inputValueChangeHandler(event)}
            />
          </div>
        </section>
      </section>
      <section className="payinfo-customer-form-row">
        <label htmlFor="name">
          持卡人姓名 :
          <strong>
            <abbr title="required">*</abbr>
          </strong>
        </label>
        <div className="input-wrapper">
          <input
            name="name"
            type="text"
            placeholder="As shown on the card"
            value={payInfoPayload.name}
            onChange={(event) => inputValueChangeHandler(event)}
          />
        </div>
      </section>
      <section className="payinfo-customer-form-row">
        <section className="payinfo-customer-form-col">
          <label htmlFor="credit-card">
            輸入交易密碼 :
            <strong>
              <abbr title="required">*</abbr>
            </strong>
          </label>
          <div className="input-wrapper">
            <input type="text" />
          </div>
        </section>
        <section className="payinfo-customer-form-col">
          <button
            className="payinfo-customer-form-button"
            onClick={(event) => {
              event.preventDefault();
            }}
          >
            取得簡訊傳送交易密碼
          </button>
        </section>
      </section>
      <section className="payinfo-customer-form-row">
        <p className="payinfo-customer-form-reminder">
          *請點選「取得簡訊傳送交易密碼」按鍵，您的手機將於1~2分鐘內收到
          動態交易認證密碼。若無法完成交易或未收到認證碼，請致電客服中心
          電話：0800-1234-5679
        </p>
      </section>
    </form>
  );
};

export default CustomerForm;
