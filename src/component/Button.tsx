import * as React from 'react';
import * as Animatable from 'react-native-animatable';

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

const AnimatedButtonText = Animatable.createAnimatableComponent(ButtonText);

export class NumberButton extends React.Component<INumberButtonProps> {
  constructor(props) {
    super(props);
    this.text = React.createRef();
  }

  render() {
    const { text, special, onPress } = this.props;
    return (
      <ButtonWrapper
        onPress={() => {
          this.text.current.rubberBand(400);
          onPress(text);
        }}
        special={special}
      >
        <AnimatedButtonText special={special} ref={this.text}>
          {text}
        </AnimatedButtonText>
      </ButtonWrapper>
    );
  }
}

export class OperationButton extends React.Component<IOperationButtonProps> {
  constructor(props) {
    super(props);
    this.text = React.createRef();
  }

  render() {
    const { text, special, onPress } = this.props;
    return (
      <ButtonWrapper
        onPress={() => {
          this.text.current.rubberBand(400);
          onPress(text);
        }}
        special={special}
      >
        <AnimatedButtonText special={special} ref={this.text}>
          {text}
        </AnimatedButtonText>
      </ButtonWrapper>
    );
  }
}
