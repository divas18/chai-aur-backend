import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    Credential,
  })
);

// Allows us to accept JSON data earlier we use body-parser but now its directly available
app.use(express.json({ limit: "16kb" }));

// Allow us to accept encoded url from param, as in param multiple ways to hold value +, % etc
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// sometime we want to store files or folder or images, it basically creates a public folder which holds all those stuff
app.use(express.static("public"));

// Allow us to perform curd operation on cookies which includes update, add, remove or read.
app.use(cookieParser());

export { app };
