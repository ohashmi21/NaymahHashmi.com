import {
  MongoClient,
  ServerApiVersion,
  Db,
  Collection,
  ObjectId,
} from "mongodb";
import fs from "fs";
import ProjectCategoryModel from "./models/ProjectCategoryModel";
import assert from "assert";
import ProjectModel from "./models/ProjectModel";
import ProjectContentModel from "./models/ProjectContentModel";

const mongoUri = fs.readFileSync("./mongo-credentials.txt", "utf-8");

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(mongoUri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let db: Db;
let collection: Collection<ProjectCategoryModel>;

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    db = client.db("naymah-portfolio");
    // Send a ping to confirm a successful connection
    await db.command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
    collection = db.collection("projects");
  } finally {
  }
}

function connectToDb() {
  run().catch(console.dir);
}

function findCategoryByName(
  categoryName: string
): Promise<ProjectCategoryModel | null> {
  return collection.findOne({ categoryName: categoryName }).then((res) => {
    console.log(res);
    return null;
  });
}

function uploadCategory(model: ProjectCategoryModel) {
  assert(
    model.projects.length == 0,
    "When creating a new category, projects list must be empty and inserted separately."
  );

  collection.insertOne(model);
}

function uploadProject(categoryId: string, model: ProjectModel) {
  collection.updateOne(
    { _id: new ObjectId(categoryId) },
    { $push: { projects: model } }
  );
}

async function getProjectCategories(): Promise<ProjectCategoryModel[]> {
  const categoriesResults: ProjectCategoryModel[] = [];

  const categories = collection.find(
    {},
    { projection: { colorHash: false, imgPath: false, projects: false } }
  );

  while (await categories.hasNext()) {
    categoriesResults.push((await categories.next()) as ProjectCategoryModel);
  }

  return categoriesResults;
}

export default {
  connectToDb,
  uploadCategory,
  uploadProject,
  getProjectCategories,
};
