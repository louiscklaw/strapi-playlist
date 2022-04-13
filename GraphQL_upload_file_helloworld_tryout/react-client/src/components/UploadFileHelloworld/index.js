import { gql, useMutation } from "@apollo/client";

const MUTATION = gql`
  mutation ($file: Upload!) {
    upload(file: $file) {
      data {
        id
      }
    }
  }
`;

function UploadFileHelloworld() {
  const [mutate, { data, loading, error }] = useMutation(MUTATION);

  function onChange(incoming) {
    let {
      target: {
        validity,
        files: [file],
      },
    } = incoming;
    console.log(incoming);
    mutate({ variables: { file } });
  }

  return (
    <>
      <input type="file" required onChange={onChange} />
      <div>
        <div>{JSON.stringify({ data, loading, error })}</div>
      </div>
    </>
  );
}

export default () => {
  return (
    <>
      <div>UploadFileHelloworld</div>
      <UploadFileHelloworld />
    </>
  );
};
