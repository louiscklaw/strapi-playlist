import fetch from "node-fetch";

import { faker } from "@faker-js/faker";

function getMember(i) {
  return {
    username: `client${i}`,
    password: "Aa1234567",
    email: `client${i}@gmail.com`,
    confirmed: true,
    blocked: false,
  };
}

let record_needed = 3;
await Array(record_needed)
  .fill(0)
  .map(async (_, i) => {
    const gen_profile = getMember(i + 1);
    console.log(gen_profile);
    const response = await fetch("http://localhost:1337/users", {
      method: "post",
      body: JSON.stringify(gen_profile),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    // console.log(data);
  });
