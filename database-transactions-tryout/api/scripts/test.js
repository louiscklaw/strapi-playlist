for (let i = 0; i < 1000; i++) {
  fetch("http://localhost:1337/receipts/transfer-balance", {
    body: '{"from": 1, "to":2, "amount":1}',
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
  });
}
