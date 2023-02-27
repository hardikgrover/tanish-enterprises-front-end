import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import productReducer from './products/productReducer';
import rootReducer from './rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  productReducer,
  composeEnhancers(applyMiddleware(thunk))
)

export default store;
