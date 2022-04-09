import React from "react";
import { gql, useQuery } from "@apollo/client";

const EXCHANGE_RATES = gql`
  query Restaurants {
    restaurants {
      data {
        id
        attributes {
          name
        }
      }
    }
  }
`;

export default () => {
  let [use_query_result, setUseQueryResult] = React.useState();
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <div>
        TestUseQuery
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </>
  );
};
