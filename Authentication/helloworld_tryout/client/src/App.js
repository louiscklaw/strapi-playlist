import logo from "./logo.svg";
import "./App.css";

import axios from "axios";
import React from "react";

function App() {
  const checkLogin = () => {
    axios
      .post("http://localhost:1337/api/auth/local", {
        identifier: "test@test.com",
        password: "Password",
      })
      .then((response) => {
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);
      })
      .catch((error) => {
        console.log("An error occurred:", error.response);
      });
  };

  const registerUser = () => {
    axios
      .post("http://localhost:1337/api/auth/local/register", {
        username: "test1@test.com",
        email: "test1@test.com",
        password: "Password",
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <div>helloworld</div>
      <button onClick={registerUser}>register user</button>
      <button onClick={checkLogin}>check login</button>
    </div>
  );
}

export default App;
