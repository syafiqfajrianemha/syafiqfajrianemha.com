import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { ApiResponse } from "./utils/api-respose";
import expressLayouts from "express-ejs-layouts";

dotenv.config();

const app: Application = express();
const port: number = Number(process.env.PORT) ?? 3000;

app.use(cors());
app.use(express.json());

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(expressLayouts);

app.get("/", (req: Request, res: Response) => {
  return res.render("index", {
    layout: "../views/layouts/main.ejs",
    title: "Syafiq Fajrian Emha",
  });
});

app.use((req: Request, res: Response) => {
  return ApiResponse.pageNotFound(req, res);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
