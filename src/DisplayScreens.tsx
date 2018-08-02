import * as React from 'react';

import Display from './components/Display';

const DisplayScreens: React.SFC = () => (
  <React.Fragment>
    <Display num={0} />
    <Display num={0} />
    <Display num={0} />
  </React.Fragment>
);

export default DisplayScreens;
