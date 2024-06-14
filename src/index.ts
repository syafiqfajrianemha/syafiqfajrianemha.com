import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { ApiResponse } from "./utils/api-respose";

dotenv.config();

const app: Application = express();
const port: number = Number(process.env.PORT) ?? 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  return ApiResponse.success(res, 200, "Hello World🌍");
});

app.use((req: Request, res: Response) => {
  return ApiResponse.pageNotFound(req, res);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
