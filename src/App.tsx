import * as React from 'react';
import styled from 'styled-components/native';

import DisplayScreens from './DisplayScreens';

const AppWrapper = styled.View`
  flex: 1;
`;

const App = () => (
  <AppWrapper>
    <DisplayScreens />
  </AppWrapper>
);

export default App;
