import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Form from './components/Form';

function App(): ReactElement {
  return (
    <Provider store={store}>
      <div className="App">
        <Form />
      </div>
    </Provider>
  );
}

export default App;
