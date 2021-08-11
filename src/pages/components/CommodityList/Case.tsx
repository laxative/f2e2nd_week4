const Case: React.FC<{
  icon: string;
  isSelected: boolean;
  onClickHandler: Function;
}> = ({ icon, isSelected, onClickHandler }) => {
  return (
    <div
      className={`commodity-list-cases-item ${isSelected ? 'clci-chosen' : ''}`}
      onClick={() => onClickHandler()}
    >
      <div
        className={`clci-svg clci-svg-${icon} ${
          isSelected ? 'clci-svg-chosen' : ''
        }`}
      />
    </div>
  );
};

export default Case;
