import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache, from } from '@apollo/client';
import { App } from './App';
import { tokenRefreshLink } from './services/Links/tokenRefresh';
import { requestLink } from './services/Links/requestLink';
import { errorLink } from './services/Links/errorLink';
import { httpLink } from './services/Links/httpLink';
import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';

const client = new ApolloClient({
  link: from([tokenRefreshLink, requestLink, errorLink, httpLink]),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <CssBaseline />
      <App />
    </Router>
  </ApolloProvider>,
  document.querySelector('#root'),
);
