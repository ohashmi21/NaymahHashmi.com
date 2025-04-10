import express, { Request, Response } from "express";
import dbService from "./database-service";
import ProjectModel from "./models/ProjectModel";

const app = express();

app.use(express.json());

const port = 3333;
const server = app.listen(port, () =>
  console.log("Listening on port: " + port)
);

dbService.connectToDb();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.post("/project", (req: Request, res: Response) => {
  const projectCategoryId = req.body.projectCategory as string;
  const projectModel = req.body.projectCategory as ProjectModel;
  dbService.uploadProject(projectCategoryId, projectModel);
  res.send();
});

app.get("/project-categories", (req: Request, res: Response) => {
  dbService.getProjectCategories().then((categories) => res.send(categories));
});
