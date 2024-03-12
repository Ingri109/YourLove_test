import React from 'react';
import { createRoot } from 'react-dom/client';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import App from './components/App';
import './index.css';



const root = createRoot(document.getElementById('root'));

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', // Адреса вашого GraphQL сервера
  cache: new InMemoryCache(),
});


root.render(<ApolloProvider client={client}>
    <App />
</ApolloProvider>,);


