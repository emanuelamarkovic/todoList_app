import express from "express";
import bodyParser from "body-parser";
import "./db-connection.js";
import crypto from "crypto";
import "./config.js";
import cors from "cors";

const app = express();
const port = process.env.PORT;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port} \n`);
});
