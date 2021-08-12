import { useSelector } from 'react-redux';
import { storeType } from '../../../store';
import { useEffect, useState } from 'react';

const getCommodityType = (
  commodityCase: number
): [string | null, string | null] => {
  switch (commodityCase) {
    case 1:
      return ['3-hour', '3小時'];
    case 2:
      return ['24-hour', '24小時'];
    case 3:
      return ['30-days', '30日'];
    case 4:
      return ['90-days', '90日'];
    default:
      return [null, null];
  }
};

const CommodityItem = () => {
  const commodityCase = useSelector(
    (store: storeType) => store.commodityCaseReducer
  );
  const [commodityLogo, setCommodityLogo] = useState<string | null>(null);
  const [commodity, setCommodity] = useState<string | null>(null);

  useEffect(() => {
    const [_commodityLogo, _commodity] = getCommodityType(commodityCase);
    setCommodityLogo(_commodityLogo);
    setCommodity(_commodity);
  }, []);

  return (
    <div className="payinfo-commodity-item">
      <div className="commodity-item-photo-wrapper">
        <div
          className={
            commodityLogo
              ? `commodity-item-photo commodity-item-photo-${commodityLogo}`
              : 'commodity-item-photo'
          }
        />
      </div>
      <div className="commodity-item-info">
        <h3>Karaoke期間券</h3>
        <ul>
          <li>從購買日起可無限歡唱 {commodity}。</li>
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
