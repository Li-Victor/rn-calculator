import * as React from 'react';
import { Provider } from 'react-redux';

import configureStore from './redux/configureStore';
import Buttons from './container/Buttons';
import DisplayScreens from './container/DisplayScreens';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <React.Fragment>
      <DisplayScreens />
      <Buttons />
    </React.Fragment>
  </Provider>
);

export default App;
