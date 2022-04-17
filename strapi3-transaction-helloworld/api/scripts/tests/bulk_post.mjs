import fetch from "node-fetch";

function getJson(i) {
  return { from: 1, to: 2, amount: 1 };
}

let repeat = 999;
Array(repeat)
  .fill(0)
  .map(async (_, i) => {
    const gen_profile = getJson(i + 1);
    fetch("http://localhost:1337/receipts/transfer-balance", {
      method: "post",
      body: JSON.stringify(gen_profile),
      headers: { "Content-Type": "application/json" },
    });
    // const data = await response.json();
    // console.log(data);
  });
