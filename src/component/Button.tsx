import * as React from 'react';
import styled, { css } from '../../types/styled-components';

import { Numbers, Operations } from '../redux/reducer/CalculatorReducer';

interface INumberButtonProps {
  text: Numbers;
  special?: boolean;
  onPress: (n: Numbers) => void;
}

interface IOperationButtonProps {
  text: Operations;
  special?: boolean;
  onPress: (op: Operations) => void;
}

const ButtonWrapper = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-right-width: 1;
  border-color: #fff;

  ${props =>
    props.special
      ? css`
          flex: 2;
          background-color: #9bc23c;
        `
      : css`
          flex: 1;
          background-color: #f2f2f2;
        `};
`;

const ButtonText = styled.Text`
  font-size: 36;
  ${props =>
    props.special &&
    css`
      color: #fff;
    `};
`;

export const NumberButton: React.SFC<INumberButtonProps> = ({
  text,
  special,
  onPress
}) => (
  <ButtonWrapper
    onPress={() => {
      onPress(text);
    }}
    special={special}
  >
    <ButtonText special={special}>{text}</ButtonText>
  </ButtonWrapper>
);

export const OperationButton: React.SFC<IOperationButtonProps> = ({
  text,
  special,
  onPress
}) => (
  <ButtonWrapper
    onPress={() => {
      onPress(text);
    }}
    special={special}
  >
    <ButtonText special={special}>{text}</ButtonText>
  </ButtonWrapper>
);
