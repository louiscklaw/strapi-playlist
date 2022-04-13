import { gql, useMutation } from "@apollo/client";

const EXCHANGE_RATES = gql`
  mutation ($test_base64: String!) {
    createTestContent1(data: { test_base64: $test_base64 }) {
      data {
        id
      }
    }
  }
`;

export default () => {
  const [mutate, { data, loading, error }] = useMutation(EXCHANGE_RATES);

  function getBase64Cb(file, cb) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(reader.result);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  }

  function getBase64(file) {
    return new Promise((res, rej) => {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        res(reader.result);
      };
      reader.onerror = function (error) {
        rej(error);
      };
    });
  }

  function onChange(incoming) {
    let {
      target: {
        validity,
        files: [file],
      },
    } = incoming;
    console.log(incoming);

    getBase64(file)
      .then((base64) => {
        mutate({ variables: { test_base64: base64 } });
      })
      .catch((error) => {
        console.log(error);
      });

    // getBase64(file, async (base64) => {
    //   await mutate({ variables: { test_base64: base64 } });
    // });
  }

  return (
    <>
      <h3>UploadFileBase64Helloworld</h3>
      <input type="file" required onChange={onChange} />
    </>
  );
};
