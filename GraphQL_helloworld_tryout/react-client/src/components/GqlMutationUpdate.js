import { ApolloClient, InMemoryCache, useMutation, gql } from "@apollo/client";

const EXCHANGE_RATES = gql`
  mutation update_user_profile {
    updateUserProfile(
      id: 2
      data: { description: "test update user profile" }
    ) {
      data {
        id
        attributes {
          description
        }
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
      <h3>GqlMutationUpdate</h3>
      <button onClick={(e) => testMutation(e)}>GqlMutationUpdate</button>
    </>
  );
};
