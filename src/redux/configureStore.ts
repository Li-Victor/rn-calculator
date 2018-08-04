import { createStore, combineReducers } from 'redux';

import CalculatorReducer from './reducer/CalculatorReducer';

export default (initialState = {}) => {
  // combine reducers if needed
  const rootReducer = combineReducers({ calculatorState: CalculatorReducer });

  return createStore(rootReducer, initialState);
};
