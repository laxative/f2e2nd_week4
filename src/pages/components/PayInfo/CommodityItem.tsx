const CommodityItem = () => {
  return (
    <div className="payinfo-commodity-item">
      <div className="commodity-item-photo-wrapper">
        <div className="commodity-item-photo commodity-item-photo-90-days" />
      </div>
      <div className="commodity-item-info">
        <h3>Karaoke期間券</h3>
        <ul>
          <li>從購買日起可無限歡唱90日。</li>
          <li>有效期總計不能超過365天。</li>
          <li>此期間券僅適用本公司產品。</li>
          <li>到期前追加購買，將自動延長期限。</li>
          <li>您無法取消或退還購買的期間券。</li>
        </ul>
      </div>
    </div>
  );
};

export default CommodityItem;
