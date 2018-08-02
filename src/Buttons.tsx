import * as React from 'react';
import styled from 'styled-components/native';

import Button from './components/Button';

const ButtonsWrapper = styled.View`
  flex: 1;
`;

const ButtonRow = styled.View`
  flex: 1;
  flex-direction: row;
  border-bottom-width: 1;
  border-color: #fff;
`;

const Buttons: React.SFC = () => (
  <ButtonsWrapper>
    <ButtonRow>
      <Button text="clear" />
      <Button text="pow" />
      <Button text="swap" />
      <Button text="/" />
    </ButtonRow>
    <ButtonRow>
      <Button text="9" />
      <Button text="8" />
      <Button text="7" />
      <Button text="X" />
    </ButtonRow>
    <ButtonRow>
      <Button text="6" />
      <Button text="5" />
      <Button text="4" />
      <Button text="-" />
    </ButtonRow>
    <ButtonRow>
      <Button text="3" />
      <Button text="2" />
      <Button text="1" />
      <Button text="+" />
    </ButtonRow>
    <ButtonRow>
      <Button text="0" />
      <Button text="." />
      <Button text="enter" special />
    </ButtonRow>
  </ButtonsWrapper>
);

export default Buttons;
