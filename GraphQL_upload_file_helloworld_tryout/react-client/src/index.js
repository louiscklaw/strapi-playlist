import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GqlFragments from "./components/GqlFragments";
import GqlMutationCreate from "./components/GqlMutationCreate";
import GqlMutationDelete from "./components/GqlMutationDelete";
import GqlMutationUpdate from "./components/GqlMutationUpdate";
import GqlQueryAlias from "./components/GqlQueryAlias";
import GqlQueryArguments from "./components/GqlQueryArguments";
import GraphQLFilter from "./components/GraphQLFilter";
import GraphQLHelloworld from "./components/GraphQLHelloworld";
import UsingVariablesInsideFragments from "./components/UsingVariablesInsideFragments";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import createUploadLink from "apollo-upload-client/public/createUploadLink.js";

import UploadFileHelloworld from "./components/UploadFileHelloworld";
import UploadFileBase64Helloworld from "./components/UploadFileBase64Helloworld";

const gql_data_client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

const gql_file_upload_client = new ApolloClient({
  cache: new InMemoryCache(),
  link: createUploadLink({
    uri: "http://localhost:1337/graphql",
  }),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={gql_file_upload_client}>
      <UploadFileBase64Helloworld />
      <UploadFileHelloworld />
    </ApolloProvider>
    <ApolloProvider client={gql_data_client}>
      <GraphQLHelloworld />
      <div>
        <div>GqlQueryArguments</div>
        <GqlQueryArguments />
      </div>
      <div>
        <div>GqlQueryAlias</div>
        <GqlQueryAlias />
      </div>
      <div>
        <div>GqlFragments</div>
        <GqlFragments />
      </div>
      <div>
        <div>UsingVariablesInsideFragments</div>
        <UsingVariablesInsideFragments />
      </div>
      <div>
        <GraphQLFilter />
      </div>
      <div>
        <GqlMutationCreate />
      </div>
      <div>
        <GqlMutationUpdate />
      </div>
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
