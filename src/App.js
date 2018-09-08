import React from 'react';
import { Provider } from 'react-redux';
import { IntlProvider, FormattedMessage } from 'react-intl';

import messages from './i18n';

import store from './store';

const App = () => (
  <Provider store={store}>
    <IntlProvider
      locale="ru"
      messages={messages['ru']}
    >
      <FormattedMessage
        id="app.title"
        defaultMessage="Welcome to"
      />
    </IntlProvider>
  </Provider>
);

export default App;
