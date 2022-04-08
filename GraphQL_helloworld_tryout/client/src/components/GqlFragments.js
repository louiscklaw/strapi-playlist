import { ApolloClient, InMemoryCache, useQuery, gql } from "@apollo/client";

const EXCHANGE_RATES = gql`
  {
    group1: restaurant(id: 1) {
      data {
        ...comparisonFields
      }
    }

    group2: restaurant(id: 2) {
      data {
        ...comparisonFields
      }
    }
  }

  fragment comparisonFields on RestaurantEntity {
    id
    attributes {
      name
      description
    }
  }
`;

export default () => {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <h3>GqlFragments</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};
