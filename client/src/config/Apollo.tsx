/* eslint-disable no-console */
import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import {onError} from '@apollo/client/link/error';

const cache = new InMemoryCache();

const errorLink = onError(({graphQLErrors, networkError}) => {
  if (graphQLErrors) {
    graphQLErrors.map(({message, path}) => console.error({message, path}));
  } else if (networkError) {
    const {message, name, stack} = networkError;
    console.error({
      message,
      name,
      stack,
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({
    uri:
      process.env.NODE_ENV === 'production'
        ? 'https://signit-server.dscnitrourkela.org'
        : 'https://guava.dscnitrourkela.org',
  }),
]);

const authLink = setContext((_, {headers}) => ({
  headers: {
    ...headers,
    Authorization: '',
  },
}));

const client = new ApolloClient({
  cache,
  link: authLink.concat(link),
  name: 'monday-morning-client',
  version: '1.3',
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
    },
    mutate: {
      errorPolicy: 'all',
    },
  },
});

const Apollo = ({children}: {children: React.ReactNode}): JSX.Element => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

export default Apollo;
