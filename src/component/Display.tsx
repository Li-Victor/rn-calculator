import * as React from 'react';
import { TouchableOpacity } from 'react-native';

import styled from '../../types/styled-components';
import { InputState } from '../redux/reducer/CalculatorReducer';

interface IDisplayProps {
  num: string;
  inputState: InputState;
  toggle: () => void;
}

const DisplayResultContainer = styled.View`
  padding-right: 10;
  background-color: #424242;
  border-bottom-width: 1;
  border-color: #fff;
`;

const DisplayResult = styled.Text`
  color: ${props => {
    if (props.inputState === InputState.append) return '#fff';
    else if (props.inputState === InputState.push) return '#9bc23c';
    else if (props.inputState === InputState.replace) return '#2E71E5';
  }};
  text-align: right;
  font-size: 30;
  font-weight: bold;
`;

const Display: React.SFC<IDisplayProps> = ({ num, inputState, toggle }) => (
  <DisplayResultContainer>
    <TouchableOpacity onPress={toggle}>
      <DisplayResult inputState={inputState}>{num}</DisplayResult>
    </TouchableOpacity>
  </DisplayResultContainer>
);

export default Display;
