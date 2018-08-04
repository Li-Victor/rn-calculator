import * as React from 'react';
import styled, { css } from '../../types/styled-components';

interface IButtonProps {
  text: string;
  special?: boolean;
  onPress: (n: string) => void;
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

const Button: React.SFC<IButtonProps> = ({ text, special, onPress }) => (
  <ButtonWrapper
    onPress={() => {
      onPress(text);
    }}
    special={special}
  >
    <ButtonText special={special}>{text}</ButtonText>
  </ButtonWrapper>
);

export default Button;
