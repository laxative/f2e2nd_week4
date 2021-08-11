const CustomerForm = () => {
  return (
    <form className="payinfo-customer-form">
      <section className="payinfo-customer-form-row">
        <label htmlFor="credit-card">
          信用卡號 :
          <strong>
            <abbr title="required">*</abbr>
          </strong>
        </label>
        <div className="input-wrapper">
          <input type="text" placeholder="0000-0000-0000-0000" />
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
            <input type="text" placeholder="MM/YY" />
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
            <input type="text" placeholder="000" />
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
          <input type="text" placeholder="As shown on the card" />
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
          <button className="payinfo-customer-form-button">
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
