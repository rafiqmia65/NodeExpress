import express, { Request, Response } from "express";
import { Pool } from "pg";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

const app = express();
const port = 5000;

const pool = new Pool({
  connectionString: `${process.env.CONNECTION_STRING_NEON_DB}`,
});

// Parser
app.use(express.json());
// Form data validation
// app.use(express.urlencoded());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);

  res.status(201).json({
    success: true,
    message: "Api is Working",
  });
});

app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});
