import logo from './logo.svg';
import './App.css';

import axios from 'axios';
import React from 'react';

const json_list_helloworld = `
[
  { "title": "Islands" },
  {"title": "Kwai Tsing"}
]
`.trim();

function App() {
  const [json_payload, setJsonPayload] = React.useState(json_list_helloworld);
  const [target_endpoint, setTargetEndpoint] = React.useState(
    'http://localhost:1337'
  );
  const [api_endpoint, setApiEndpoint] = React.useState(
    '/api/hong-kong-18-districts'
  );
  const [jwt_token, setJwtToken] = React.useState(null);

  const [test_data, setTestData] = React.useState(null);

  const [id_to_read, setIdToRead] = React.useState(null);
  const [read_response, setReadResponse] = React.useState();

  const [id_to_put, setIdToput] = React.useState(null);
  const [title_to_put, setTitleToPut] = React.useState();
  const [put_response, setPutResponse] = React.useState();

  const [id_to_delete, setIdToDelete] = React.useState(null);
  const [delete_response, setDeleteResponse] = React.useState();

  const [list_response, setListResponse] = React.useState({});

  const [username_login, setUsernameLogin] = React.useState('test1@test.com');
  const [password_login, setPasswordLogin] = React.useState('test1@test.com');
  const checkLogin = () => {
    axios
      .post('http://localhost:1337/api/auth/local', {
        identifier: username_login,
        password: password_login,
      })
      .then((response) => {
        console.log('User profile', response.data.user);
        console.log('User token', response.data.jwt);
        setJwtToken(response.data.jwt);
      })
      .catch((error) => {
        console.log('An error occurred:', error.response);
      });
  };

  const [username_reg, setUsernameReg] = React.useState('test1@test.com');
  const [password_reg, setPasswordReg] = React.useState('test1@test.com');
  const [email_reg, setEmailReg] = React.useState('Password');
  const registerUser = () => {
    axios
      .post('http://localhost:1337/api/auth/local/register', {
        username: username_reg,
        email: email_reg,
        password: password_reg,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [email_to_forgot, setemailToForgot] = React.useState('');
  const forgotPassword = () => {
    axios
      .post('http://localhost:1337/api/auth/forgot-password', {
        email: email_to_forgot,
      })
      .then((response) => {
        console.log('Your user received an email');
      })
      .catch((error) => {
        console.log('An error occurred:', error.response);
      });
  };

  const [private_code, setPrivateCode] = React.useState('');
  const [new_password, setNewPassword] = React.useState('');
  const [confirm_new_password, setConfirmNewPassword] = React.useState('');
  const resetPassword = () => {
    axios
      .post('http://localhost:1337/api/auth/reset-password', {
        code: private_code,
        password: new_password,
        passwordConfirmation: confirm_new_password,
      })
      .then((response) => {
        console.log({ done: response });
      })
      .catch((error) => {
        console.log('An error occurred:', error.response);
      });
  };

  const onCreateClick = () => {
    console.log('onCreateClick');
    const json_list = JSON.parse(json_payload);
    json_list.forEach((json_item) => {
      axios
        .post(`${target_endpoint}${api_endpoint}`, { data: json_item })
        .then((response) => {
          console.log('Created', response.data);
        })
        .catch((error) => {
          console.log('An error occurred:', error.response);
        });
    });
  };
  const onReadClick = () => {
    console.log('onReadClick');
    axios
      .get(`http://localhost:1337/api/articles/${id_to_read}`, {
        Authorization: `Bearer ${jwt_token}`,
      })
      .then((response) => {
        setReadResponse(JSON.stringify(response.data, null, 2));
      })
      .catch((error) => {
        console.log('An error occurred:', error.response);
      });
  };
  const onUpdateClick = () => {
    console.log('onUpdateClick');
    axios
      .put(
        `http://localhost:1337/api/articles/${id_to_put}`,
        { data: { title: title_to_put } },
        { Authorization: `Bearer ${jwt_token}` }
      )
      .then((response) => {
        setPutResponse(JSON.stringify(response));
      })
      .catch((error) => {
        console.log('An error occurred:', error.response);
      });
  };
  const onDeleteClick = () => {
    console.log('onDeleteClick');

    axios.get(`${target_endpoint}${api_endpoint}`).then((response) => {
      let {
        data: { data: list },
      } = response;
      list.forEach((item_to_delete) => {
        axios
          .delete(`${target_endpoint}${api_endpoint}/${item_to_delete.id}`)
          .then((response) => {})
          .catch((error) => {
            console.log('An error occurred:', error.response);
          });
      });
    });

    // axios
    //   .delete(`http://localhost:1337/api/articles/${id_to_delete}`, {
    //     Authorization: `Bearer ${jwt_token}`,
    //   })
    //   .then((response) => {
    //     setDeleteResponse(JSON.stringify(response));
    //   })
    //   .catch((error) => {
    //     console.log('An error occurred:', error.response);
    //   });
  };

  const onListClick = () => {
    console.log('onListClick');
    return axios
      .get(`${target_endpoint}${api_endpoint}`)
      .then((response) => {
        setListResponse(JSON.stringify(response, null, 2));
      })
      .catch((error) => {
        console.log('An error occurred:', error.response);
      });
  };

  const userSelfCheck = () => {
    return axios
      .get(`http://localhost:1337/api/users/me`, {
        Authorization: `Bearer ${jwt_token}`,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log('An error occurred:', error.response);
      });
  };

  const userLogout = () => {
    setJwtToken('');
  };

  return (
    <div className="App">
      <div>batch_add_helloworld</div>
      <div style={{ padding: '1rem' }}>
        <input
          type="text"
          placeholder={target_endpoint}
          onChange={(e) => {
            setTargetEndpoint(e.target.value);
          }}
          value={target_endpoint}
        />
        <input
          type="text"
          placeholder={api_endpoint}
          onChange={(e) => {
            setApiEndpoint(e.target.value);
          }}
          value={api_endpoint}
        />
      </div>
      <div style={{ padding: '1rem' }}>
        <textarea
          cols="100"
          rows="20"
          onChange={(e) => setJsonPayload(e.target.value)}
          value={json_payload}
        />
      </div>
      <div style={{ padding: '1rem' }}>
        <button onClick={(e) => onCreateClick(e)}>onCreateClick</button>
      </div>

      <div>
        <div>batch_delete_helloworld</div>
        <button
          onClick={(e) => {
            onDeleteClick(e);
          }}
        >
          delete helloworld
        </button>
      </div>

      <div>
        <div>list helloworld</div>
        <button
          onClick={(e) => {
            onListClick(e);
          }}
        >
          list helloworld
        </button>
        <pre>{list_response}</pre>
      </div>
    </div>
  );
}

export default App;
