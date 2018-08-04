import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import styled from '../../types/styled-components';
import Button from '../component/Button';
import { pressNum, enter } from '../redux/reducer/CalculatorReducer';

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
  onPress: (n: string) => void;
  enterAction: () => void;
}

const Buttons: React.SFC<IButtonsProps> = ({ onPress, enterAction }) => (
  <ButtonsWrapper>
    <ButtonRow>
      <Button text="clear" />
      <Button text="pow" />
      <Button text="swap" />
      <Button text="/" />
    </ButtonRow>
    <ButtonRow>
      <Button text="9" onPress={onPress} />
      <Button text="8" onPress={onPress} />
      <Button text="7" onPress={onPress} />
      <Button text="X" />
    </ButtonRow>
    <ButtonRow>
      <Button text="6" onPress={onPress} />
      <Button text="5" onPress={onPress} />
      <Button text="4" onPress={onPress} />
      <Button text="-" />
    </ButtonRow>
    <ButtonRow>
      <Button text="3" onPress={onPress} />
      <Button text="2" onPress={onPress} />
      <Button text="1" onPress={onPress} />
      <Button text="+" />
    </ButtonRow>
    <ButtonRow>
      <Button text="0" onPress={onPress} />
      <Button text="." />
      <Button text="enter" special onPress={enterAction} />
    </ButtonRow>
  </ButtonsWrapper>
);

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      onPress: pressNum,
      enterAction: enter
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buttons);
