import { createStore, combineReducers } from 'redux';
import commodityCaseReducer from './reducers/CommodityCaseReducer';
import commodityMethodReducer from './reducers/CommodityMethodReducer';

const rootReducer = combineReducers({
  commodityCaseReducer,
  commodityMethodReducer
});

const store = createStore(rootReducer);

export type storeType = ReturnType<typeof rootReducer>;
export default store;
