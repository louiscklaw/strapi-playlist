import { ApolloClient, InMemoryCache, useQuery, gql } from "@apollo/client";

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

export default () => {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};
