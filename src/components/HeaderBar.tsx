const HeaderBar = () => {
  return (
    <div className="headerbar">
      <div className="process-item">
        <div className="process-item-icon">1</div>
        <div className="process-item-text process-item-text-current">
          商品訂單
        </div>
      </div>
      <div className="process-item">
        <div className="process-item-icon">2</div>
        <div className="process-item-text">付費資訊</div>
      </div>
      <div className="process-item">
        <div className="process-item-icon">3</div>
        <div className="process-item-text">確認訂單</div>
      </div>
    </div>
  );
};

export default HeaderBar;
