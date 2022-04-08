import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  useQuery,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

const EXCHANGE_RATES = gql`
  query Restaurants {
    restaurants {
      data {
        id
        attributes {
          name
          description
        }
      }
    }
  }
`;

function ExchangeRates() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return <>{JSON.stringify(data)}</>;
}

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ExchangeRates />
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
