import { gql, useMutation } from "@apollo/client";

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

  const GqlMutationCreate = (e) => {
    e.preventDefault();
    return mutateFunction({ variables: { text: "helloworld" } });
  };

  return (
    <>
      <h3>GqlMutationCreate</h3>
      <button onClick={(e) => GqlMutationCreate(e)}>GqlMutationCreate</button>
    </>
  );
};
