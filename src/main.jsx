import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import ReactDOM from 'react-dom/client'
import React from 'react'

import './assets/index.css'
import { App } from './App';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
)
