const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.post("/get-gf-response", (req, res) => {
  const messageContent = req.body.messageContent;

  // Process the messageContent and generate a response
  const gfResponse = "Hey Cutie";

  res.json({ gfResponse });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});