import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import GraphQLHelloworld from "./components/GraphQLHelloworld";
import GqlQueryArguments from "./components/GqlQueryArguments";
import GqlQueryAlias from "./components/GqlQueryAlias";
import GqlFragments from "./components/GqlFragments";
import UsingVariablesInsideFragments from "./components/UsingVariablesInsideFragments";
import GraphQLFilter from "./components/GraphQLFilter";
import GqlMutationCreate from "./components/GqlMutationCreate";
import GqlMutationUpdate from "./components/GqlMutationUpdate";
import GqlMutationDelete from "./components/GqlMutationDelete";

const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <GraphQLHelloworld />
      <div>
        <div>GqlQueryArguments</div>
        <GqlQueryArguments />
      </div>{" "}
      <div>
        <div>GqlQueryAlias</div>
        <GqlQueryAlias />
      </div>{" "}
      <div>
        <div>GqlFragments</div>
        <GqlFragments />
      </div>{" "}
      <div>
        <div>UsingVariablesInsideFragments</div>
        <UsingVariablesInsideFragments />
      </div>{" "}
      <div>
        <GraphQLFilter />
      </div>{" "}
      <div>
        <GqlMutationCreate />
      </div>{" "}
      <div>
        <GqlMutationUpdate />
      </div>{" "}
      <div>
        <GqlMutationDelete />
      </div>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
