import CommodityList from '../pages/CommodityList';
import PayInfo from '../pages/PayInfo';
import CheckOrder from '../pages/CheckOrder';

const routes = [
  {
    path: '/',
    component: CommodityList,
    exact: true
  },
  {
    path: '/payInfo',
    component: PayInfo,
    exact: true
  },
  {
    path: '/CheckOrder',
    component: CheckOrder,
    exact: true
  }
];

export default routes;
