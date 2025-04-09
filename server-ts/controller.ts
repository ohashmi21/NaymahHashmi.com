import express from "express";
import dbService from "./database-service";

const app = express();

app.use(express.json());

const port = 3333;
const server = app.listen(port, () =>
  console.log("Listening on port: " + port)
);

dbService.connectToDb();

app.get("/", (req: any, res: any) => {
  res.send("Hello World!");
});
