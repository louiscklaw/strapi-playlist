import React from "react";

import axios from "axios";

const emailTemplate = {
  subject: "Welcome <%= user.firstname %>",
  text: `Welcome on mywebsite.fr!
    Your account is now linked with: <%= user.email %>.`,
  html: `<h1>Welcome on mywebsite.fr!</h1>
    <p>Your account is now linked with: <%= user.email %>.<p>`,
};

export default () => {
  function handleTestSendEmailOnClick() {
    axios
      .get(`http://localhost:1337/restaurants/test_email`)
      .then((response) => {})
      .catch((error) => {});

    return;
  }
  return (
    <>
      <button onClick={handleTestSendEmailOnClick}>test send email</button>
    </>
  );
};
