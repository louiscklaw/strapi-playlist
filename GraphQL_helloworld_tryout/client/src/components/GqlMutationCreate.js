import { ApolloClient, InMemoryCache, useMutation, gql } from "@apollo/client";

const EXCHANGE_RATES = gql`
  mutation {
    createTestContent1(data: { title: "John" }) {
      data {
        id
      }
    }
  }
`;

export default () => {
  const [mutateFunction, { data, loading, error }] =
    useMutation(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const testMutation = (e) => {
    e.preventDefault();
    return mutateFunction({ variables: { text: "helloworld" } });
  };

  return (
    <>
      <h3>testMutation</h3>
      <button onClick={(e) => testMutation(e)}>testMutation</button>
    </>
  );
};
