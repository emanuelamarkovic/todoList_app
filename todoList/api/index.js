import express from "express";
import bodyParser from "body-parser";
import crypto from "crypto";
import "./config.js";
import cors from "cors";
import handleRegistration from "./controller/usersControllers.js";
import "./db-connection.js";

const app = express();
const port = process.env.PORT;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/register", handleRegistration);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port} \n`);
});
