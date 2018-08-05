import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Platform } from 'react-native';

import Display from '../component/Display';
import { IStoreState } from '../redux/storeState';
import {
  ICalculatorState,
  InputState,
  toggleSign
} from '../redux/reducer/CalculatorReducer';
import styled, { css } from '../../types/styled-components';

interface IDisplayScreens {
  calculatorState: ICalculatorState;
  toggleSignAction: (idx: number) => void;
}

const DisplayScreensView = styled.View`
  ${() =>
    Platform.OS === 'ios' &&
    css`
      padding-top: 32;
    `};
`;

const DisplayScreens: React.SFC<IDisplayScreens> = ({
  calculatorState,
  toggleSignAction
}) => (
  <DisplayScreensView>
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
  </DisplayScreensView>
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
