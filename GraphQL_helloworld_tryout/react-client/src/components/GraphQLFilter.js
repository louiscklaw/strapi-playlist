import { ApolloClient, InMemoryCache, useQuery, gql } from "@apollo/client";

const EXCHANGE_RATES = gql`
  query {
    restaurants(filters: { description: { eq: "client1 restaurant" } }) {
      data {
        id
        attributes {
          name
          description
          test_content_1s(filters: { title: { eq: "conten2" } }) {
            data {
              attributes {
                title
              }
            }
          }
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
      <div>GraphQLFilter</div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};
