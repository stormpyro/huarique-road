import express from "express";
import morgan from "morgan";
import cors from "cors";
import router from "./src/router/index";
const app = express();

// middlewares
app.use(morgan("combined"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use(router);

export default app;
