import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Display from '../component/Display';
import { IStoreState } from '../redux/storeState';
import {
  ICalculatorState,
  InputState,
  toggleSign
} from '../redux/reducer/CalculatorReducer';

interface IDisplayScreens {
  calculatorState: ICalculatorState;
  toggleSignAction: (idx: number) => void;
}

const DisplayScreens: React.SFC<IDisplayScreens> = ({
  calculatorState,
  toggleSignAction
}) => (
  <React.Fragment>
    <Display
      inputState={InputState.append}
      num={calculatorState.stack[2] || '0'}
      toggle={() => toggleSignAction(2)}
    />
    <Display
      inputState={InputState.append}
      num={calculatorState.stack[1] || '0'}
      toggle={() => toggleSignAction(1)}
    />
    <Display
      inputState={calculatorState.inputState}
      num={calculatorState.stack[0] || '0'}
      toggle={() => toggleSignAction(0)}
    />
  </React.Fragment>
);

const mapStateToProps = (state: IStoreState) => {
  return { calculatorState: state.calculatorState };
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      toggleSignAction: toggleSign
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayScreens);
