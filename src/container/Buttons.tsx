import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import styled from '../../types/styled-components';
import { NumberButton, OperationButton } from '../component/Button';
import {
  pressNum,
  enter,
  Operations,
  Numbers,
  operation
} from '../redux/reducer/CalculatorReducer';

const ButtonsWrapper = styled.View`
  flex: 1;
`;

const ButtonRow = styled.View`
  flex: 1;
  flex-direction: row;
  border-bottom-width: 1;
  border-color: #fff;
`;

interface IButtonsProps {
  enterAction: () => void;
  pressNumAction: (n: Numbers) => void;
  operationAction: (op: Operations) => void;
}

const Buttons: React.SFC<IButtonsProps> = ({
  pressNumAction,
  enterAction,
  operationAction
}) => (
  <ButtonsWrapper>
    <ButtonRow>
      <OperationButton text={Operations.CLEAR} />
      <OperationButton text={Operations.POW} onPress={operationAction} />
      <OperationButton text={Operations.SWAP} />
      <OperationButton text={Operations.DIVIDE} onPress={operationAction} />
    </ButtonRow>
    <ButtonRow>
      <NumberButton text={Numbers.NINE} onPress={pressNumAction} />
      <NumberButton text={Numbers.EIGHT} onPress={pressNumAction} />
      <NumberButton text={Numbers.SEVEN} onPress={pressNumAction} />
      <OperationButton text={Operations.MULTIPLY} onPress={operationAction} />
    </ButtonRow>
    <ButtonRow>
      <NumberButton text={Numbers.SIX} onPress={pressNumAction} />
      <NumberButton text={Numbers.FIVE} onPress={pressNumAction} />
      <NumberButton text={Numbers.FOUR} onPress={pressNumAction} />
      <OperationButton text={Operations.SUBTRACT} onPress={operationAction} />
    </ButtonRow>
    <ButtonRow>
      <NumberButton text={Numbers.THREE} onPress={pressNumAction} />
      <NumberButton text={Numbers.TWO} onPress={pressNumAction} />
      <NumberButton text={Numbers.ONE} onPress={pressNumAction} />
      <OperationButton text={Operations.ADD} onPress={operationAction} />
    </ButtonRow>
    <ButtonRow>
      <NumberButton text={Numbers.ZERO} onPress={pressNumAction} />
      <NumberButton text={Numbers.DECIMAL} onPress={pressNumAction} />
      <OperationButton text={Operations.ENTER} special onPress={enterAction} />
    </ButtonRow>
  </ButtonsWrapper>
);

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      pressNumAction: pressNum,
      enterAction: enter,
      operationAction: operation
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buttons);
