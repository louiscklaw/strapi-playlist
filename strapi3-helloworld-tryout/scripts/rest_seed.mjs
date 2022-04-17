import fetch from "node-fetch";

import { faker } from "@faker-js/faker";

function getMember(i) {
  faker.locale = "en_US";
  const gen_email = faker.internet.email();

  const locale = ["zh_TW", "zh_CN", "en_US", "ja", "en"][i % 5];

  faker.locale = locale;
  const test_card = faker.helpers.userCard();
  console.log(test_card);

  return {
    ...test_card,
    email: gen_email,
    notes: faker.lorem.paragraphs(3),
    balance: 123.45,
  };
}

let record_needed = 3;
await Array(record_needed)
  .fill(0)
  .map(async (_, i) => {
    const gen_profile = getMember(i);
    console.log(gen_profile);
    const response = await fetch("http://localhost:1337/members", {
      method: "post",
      body: JSON.stringify(gen_profile),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    // console.log(data);
  });
