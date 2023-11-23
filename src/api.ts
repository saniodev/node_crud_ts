import express from "express";

import errorMiddleware from "../src/middlewares/errorMiddleware";

const app = express();

app.use(express.json());

app.use(errorMiddleware);

export default app;