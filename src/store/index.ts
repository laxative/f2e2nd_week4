import { createStore, combineReducers } from 'redux';
import commodityCaseReducer from './reducers/CommodityCaseReducer';
import commodityMethodReducer from './reducers/CommodityMethodReducer';
import payInfoReducer from './reducers/PayInfoReducer';

const rootReducer = combineReducers({
  commodityCaseReducer,
  commodityMethodReducer,
  payInfoReducer
});

const store = createStore(rootReducer);

export type storeType = ReturnType<typeof rootReducer>;
export default store;
