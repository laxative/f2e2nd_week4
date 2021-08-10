import { useLocation } from 'react-router-dom';

const PageController = () => {
  const location = useLocation();

  return (
    <div className="page-controller">
      <button className="page-controller-button">返回</button>
      <button className="page-controller-button">
        {location.pathname === '/' ? '繼續' : '付款'}
      </button>
    </div>
  );
};

export default PageController;
