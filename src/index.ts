import express, { Request, response, Response } from "express";
import { request } from "https";
const app = express();

app.get("/", (request, response) => {
  response.send("Hello From express , My Name is Hossam Mohamed");
});
app.listen("5000", () => {
  console.log("Listining on port 5000");
});
