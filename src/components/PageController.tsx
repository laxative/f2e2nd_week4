import { useLocation } from 'react-router-dom';

type props = {
  prevClickHandler: Function;
  nextClickHandler: Function;
};

const PageController: React.FC<props> = ({
  prevClickHandler,
  nextClickHandler
}) => {
  const location = useLocation();

  return (
    <div className="page-controller">
      <button
        className="page-controller-button"
        onClick={() => prevClickHandler()}
      >
        返回
      </button>
      <button
        className="page-controller-button"
        onClick={() => nextClickHandler()}
      >
        {location.pathname === '/' ? '繼續' : '付款'}
      </button>
    </div>
  );
};

export default PageController;
