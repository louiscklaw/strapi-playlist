import logo from "./logo.svg";
import "./App.css";

import axios from "axios";
import React from "react";

function App() {
  const [jwt_token, setJwtToken] = React.useState(null);

  const [test_data, setTestData] = React.useState(null);

  const [id_to_read, setIdToRead] = React.useState(null);
  const [read_response, setReadResponse] = React.useState();

  const [id_to_put, setIdToput] = React.useState(null);
  const [title_to_put, setTitleToPut] = React.useState();
  const [put_response, setPutResponse] = React.useState();

  const [id_to_delete, setIdToDelete] = React.useState(null);
  const [delete_response, setDeleteResponse] = React.useState();

  const [list_response, setListResponse] = React.useState();

  const [username_login, setUsernameLogin] = React.useState("test1@test.com");
  const [password_login, setPasswordLogin] = React.useState("test1@test.com");
  const checkLogin = () => {
    axios
      .post("http://localhost:1337/api/auth/local", {
        identifier: username_login,
        password: password_login,
      })
      .then((response) => {
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);
        setJwtToken(response.data.jwt);
      })
      .catch((error) => {
        console.log("An error occurred:", error.response);
      });
  };

  const [username_reg, setUsernameReg] = React.useState("test1@test.com");
  const [password_reg, setPasswordReg] = React.useState("test1@test.com");
  const [email_reg, setEmailReg] = React.useState("Password");
  const registerUser = () => {
    axios
      .post("http://localhost:1337/api/auth/local/register", {
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

  const [email_to_forgot, setemailToForgot] = React.useState("");
  const forgotPassword = () => {
    axios
      .post("http://localhost:1337/api/auth/forgot-password", {
        email: email_to_forgot,
      })
      .then((response) => {
        console.log("Your user received an email");
      })
      .catch((error) => {
        console.log("An error occurred:", error.response);
      });
  };

  const [private_code, setPrivateCode] = React.useState("");
  const [new_password, setNewPassword] = React.useState("");
  const [confirm_new_password, setConfirmNewPassword] = React.useState("");
  const resetPassword = () => {
    axios
      .post("http://localhost:1337/api/auth/reset-password", {
        code: private_code,
        password: new_password,
        passwordConfirmation: confirm_new_password,
      })
      .then((response) => {
        console.log({ done: response });
      })
      .catch((error) => {
        console.log("An error occurred:", error.response);
      });
  };

  const onCreateClick = () => {
    console.log("onCreateClick");
    axios
      .post(
        "http://localhost:1337/api/articles",
        { data: { title: test_data } },
        { headers: { Authorization: `Bearer ${jwt_token}` } }
      )
      .then((response) => {
        console.log({ done: response });
      })
      .catch((error) => {
        console.log("An error occurred:", error.response);
      });
  };
  const onReadClick = () => {
    console.log("onReadClick");
    axios
      .get(`http://localhost:1337/api/articles/${id_to_read}`, {
        Authorization: `Bearer ${jwt_token}`,
      })
      .then((response) => {
        setReadResponse(JSON.stringify(response.data, null, 2));
      })
      .catch((error) => {
        console.log("An error occurred:", error.response);
      });
  };
  const onUpdateClick = () => {
    console.log("onUpdateClick");
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
        console.log("An error occurred:", error.response);
      });
  };
  const onDeleteClick = () => {
    console.log("onDeleteClick");
    axios
      .delete(`http://localhost:1337/api/articles/${id_to_delete}`, {
        Authorization: `Bearer ${jwt_token}`,
      })
      .then((response) => {
        setDeleteResponse(JSON.stringify(response));
      })
      .catch((error) => {
        console.log("An error occurred:", error.response);
      });
  };

  const onListClick = () => {
    console.log("onListClick");
    axios
      .get(`http://localhost:1337/api/articles`, {
        Authorization: `Bearer ${jwt_token}`,
      })
      .then((response) => {
        setListResponse(JSON.stringify(response, null, 2));
      })
      .catch((error) => {
        console.log("An error occurred:", error.response);
      });
  };

  const userSelfCheck = () => {
    axios
      .get(`http://localhost:1337/api/users/me`, {
        Authorization: `Bearer ${jwt_token}`,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log("An error occurred:", error.response);
      });
  };

  const userLogout = () => {
    setJwtToken("");
  };

  return (
    <div className="App">
      <div>CRUD_helloworld</div>
      <div>
        <div>active_jwt</div>
        <pre>{jwt_token}</pre>
      </div>

      <div style={{ padding: "1rem" }}>
        <input
          onChange={(e) => setUsernameReg(e.target.value)}
          placeholder={"setUsernameReg"}
        />
        <input
          onChange={(e) => setPasswordReg(e.target.value)}
          placeholder={"setPasswordReg"}
        />
        <input
          onChange={(e) => setEmailReg(e.target.value)}
          placeholder={"setEmailReg"}
        />
        <button onClick={(e) => registerUser(e.target.value)}>
          registerUser
        </button>
      </div>

      <div style={{ padding: "1rem" }}>
        <input
          onChange={(e) => setUsernameLogin(e.target.value)}
          placeholder={"setUsernameLogin"}
        />
        <input
          onChange={(e) => setPasswordLogin(e.target.value)}
          placeholder={"setPasswordLogin"}
        />
        <button onClick={(e) => checkLogin(e.target.value)}>checkLogin</button>
      </div>

      <div style={{ padding: "1rem" }}>
        <input
          onChange={(e) => setemailToForgot(e.target.value)}
          placeholder={"setemailToForgot"}
        />
        <button onClick={(e) => forgotPassword(e.target.value)}>
          forgotPassword
        </button>
      </div>

      <div style={{ padding: "1rem" }}>
        <input
          onChange={(e) => setPrivateCode(e.target.value)}
          placeholder={"setPrivateCode"}
        />
        <input
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder={"setNewPassword"}
        />
        <input
          onChange={(e) => setConfirmNewPassword(e.target.value)}
          placeholder={"setConfirmNewPassword"}
        />
        <button onClick={(e) => resetPassword(e.target.value)}>
          resetPassword
        </button>
      </div>

      <div style={{ padding: "1rem" }}>
        <button onClick={(e) => userLogout(e.target.value)}>logout</button>
      </div>

      <div style={{ padding: "1rem" }}>
        <div>CRUD helloworld</div>
        <div>
          <div>
            <input type="text" onChange={(e) => setTestData(e.target.value)} />

            <button onClick={(e) => onCreateClick(e)}>create</button>
          </div>
        </div>
        <div>
          <input type="text" onChange={(e) => setIdToRead(e.target.value)} />
          <button onClick={(e) => onReadClick(e)}>read</button>
          <pre>{read_response}</pre>
        </div>
        <div>
          <input type="text" onChange={(e) => setIdToput(e.target.value)} />
          <input type="text" onChange={(e) => setTitleToPut(e.target.value)} />

          <button onClick={(e) => onUpdateClick(e)}>update</button>
          <pre>{put_response}</pre>
        </div>
        <div>
          <input type="text" onChange={(e) => setIdToDelete(e.target.value)} />

          <button onClick={(e) => onDeleteClick(e)}>delete</button>
          <pre>{delete_response}</pre>
        </div>

        <div>
          <button onClick={(e) => onListClick(e)}>list</button>
          <pre>{list_response}</pre>
        </div>
      </div>
    </div>
  );
}

export default App;
