const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.post("/get-gf-response", (req, res) => {
  const messageContent = req.body.messageContent;

  // Process the messageContent and send to LLM for response
  // send the response back to client

  const gfResponse = "Hey Cutie";
  res.json({ gfResponse });
});

app.post("/get-detailed-gf-response", (req, res) => {
  const messageContent = req.body.messageContent;

  // Process the messageContent
  // send to LLM instance for response (query for vector DB)
  // get response from LLM instance and query Pinecone for closest vector embedding
  // get text response from Pinecone and send with messageContent to LLM again for final response
  // send the response back to client

  const gfResponse = "Hey Cutie";
  res.json({ gfResponse });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});