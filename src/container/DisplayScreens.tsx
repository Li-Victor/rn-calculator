import * as React from 'react';
import { connect } from 'react-redux';

import Display from '../component/Display';
import { IStoreState } from '../redux/storeState';
import {
  ICalculatorState,
  InputState
} from '../redux/reducer/CalculatorReducer';

interface IDisplayScreens {
  calculatorState: ICalculatorState;
}

const DisplayScreens: React.SFC<IDisplayScreens> = ({ calculatorState }) => (
  <React.Fragment>
    <Display
      inputState={InputState.append}
      num={calculatorState.stack[2] || '0'}
    />
    <Display
      inputState={InputState.append}
      num={calculatorState.stack[1] || '0'}
    />
    <Display
      inputState={calculatorState.inputState}
      num={calculatorState.stack[0] || '0'}
    />
  </React.Fragment>
);

const mapStateToProps = (state: IStoreState) => {
  return { calculatorState: state.calculatorState };
};

export default connect(mapStateToProps)(DisplayScreens);
