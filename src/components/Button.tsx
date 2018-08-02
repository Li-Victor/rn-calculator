import * as React from 'react';
import styled, { css } from 'styled-components/native';

type ButtonProps = {
  text: string;
  special?: boolean;
};

const ButtonWrapper = styled.View`
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
          background-color: #fafafa;
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

const Button: React.SFC<ButtonProps> = ({ text, special }) => (
  <ButtonWrapper special={special}>
    <ButtonText special={special}>{text}</ButtonText>
  </ButtonWrapper>
);

export default Button;
