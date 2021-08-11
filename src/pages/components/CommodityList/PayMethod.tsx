type props = {
  icon: string;
  text: string | null;
  isSelected: boolean;
  onClickHandler: Function;
};

const PayMethod: React.FC<props> = ({
  icon,
  text,
  isSelected,
  onClickHandler
}) => {
  return (
    <div
      className={`commodity-list-methods-item ${
        isSelected ? 'clmi-chosen' : ''
      }`}
      onClick={() => onClickHandler()}
    >
      <div
        className={`clmi-logo clmi-logo-${icon} ${
          isSelected ? 'clmi-logo-chosen' : ''
        }`}
      />
      {text && (
        <div className={`clmi-text ${isSelected ? 'clmi-text-chosen' : ''}`}>
          {text}
        </div>
      )}
    </div>
  );
};

export default PayMethod;
