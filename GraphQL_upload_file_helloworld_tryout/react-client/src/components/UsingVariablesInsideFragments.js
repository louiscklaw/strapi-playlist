import { gql, useQuery } from "@apollo/client";

const EXCHANGE_RATES = gql`
  {
    restaurants {
      ...testFrag
    }
  }

  fragment testFrag on RestaurantEntityResponseCollection {
    data {
      id
      attributes {
        name
        description
        user
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
      <h3>UsingVariablesInsideFragments</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};
