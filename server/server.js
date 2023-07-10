import express from "express";
import { StatusCodes } from "http-status-codes";

const app = express();
const port = 3000;

app.get("/hello", (req, res) => {
  res.send({ body: "Hello world!" });
});

app.post("/add", (req, res) => {
  res.status(StatusCodes.CREATED);
  res.send({ body: "Hello world!" });
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
