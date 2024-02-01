import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Route Import

import userRoute from "./routes/user.routes.js";

// Route Declaration

app.use("api/v1/users", userRoute);

// app.get("/api/v1/users", function (req, res) {
//   console.log("/user request called");
//   res.send("Welcome to GeeksforGeeks");
// });

export { app };
