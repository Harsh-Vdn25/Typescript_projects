import express from "express";
import cookieParser from "cookie-parser";
import compression from "compression";
import dotenv, { parse } from "dotenv";
import { mongoConnect } from "./config/config";
dotenv.config();
const app = express();

app.use(cookieParser());
app.use(compression());
app.use(express.json());

const port:number = parseInt(process.env.PORT);

async function main() {
  await mongoConnect();
  app.listen(port, () => {
    console.log(`App is listening on port ${port} `);
  });
}

main();
