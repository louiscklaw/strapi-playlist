import { ApolloClient, InMemoryCache, useQuery, gql } from "@apollo/client";

const EXCHANGE_RATES = gql`
  {
    testQuery1: restaurant(id: 3) {
      data {
        id
        attributes {
          name
          description
        }
      }
    }

    testQuery2: restaurant(id: 1) {
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

export default () => {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <h3>GqlQueryAlias</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};
