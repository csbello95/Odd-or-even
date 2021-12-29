const express = require("express");
const app = express();

app.get("/", (req, res) => {
  let parr = "";
  let html = "";
  for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
      parr = `<p>${i} Soy Par!</p>`;
      html += parr;
    } else {
      parr = `<p>${i} Soy Impar!</p>`;
      html += parr;
    }
  }
  res.send(html);
});

app.listen(3000, () => console.log("Listening on port 3000!"));
